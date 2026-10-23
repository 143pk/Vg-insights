import { ChapterwiseMcqService } from '../src/services/chapterwiseMcqService';

const CLASS_12_PHYSICS_CHAPTERS = [
  'electric-charges-fields',
  'electrostatic-potential-capacitance',
  'current-electricity',
  'moving-charges-magnetism',
  'magnetism-matter',
  'electromagnetic-induction',
  'alternating-current',
  'electromagnetic-waves',
  'ray-optics',
  'wave-optics',
  'dual-nature',
  'atoms',
  'nuclei',
  'semiconductors',
  'experimental-skills'
];

async function verifyAll() {
  console.log('========================================================================');
  console.log('VERIFYING ALL CLASS 12 PHYSICS CHAPTERS VIA ChapterwiseMcqService');
  console.log('========================================================================\n');

  let allPassed = true;
  const resultsTable: any[] = [];

  for (const chId of CLASS_12_PHYSICS_CHAPTERS) {
    const stats = ChapterwiseMcqService.getStats(chId);
    const questions = await ChapterwiseMcqService.loadChapterQuestions(chId);

    const count = questions.length;
    const easy = questions.filter(q => q.difficulty === 'Easy').length;
    const medium = questions.filter(q => q.difficulty === 'Medium').length;
    const hard = questions.filter(q => q.difficulty === 'Hard').length;

    const optCounts = { A: 0, B: 0, C: 0, D: 0 };
    let emptyOpts = 0;
    let missingExp = 0;
    const seenIds = new Set<string>();
    let dupIds = 0;

    for (const q of questions) {
      if (seenIds.has(q.id)) dupIds++;
      seenIds.add(q.id);

      const opts = q.options as any;
      if (!opts?.A || !opts?.B || !opts?.C || !opts?.D) emptyOpts++;
      if (!q.explanation || q.explanation.trim().length === 0) missingExp++;

      const ans = q.correctAnswer || (q as any).correctOption;
      if (ans === 'A') optCounts.A++;
      else if (ans === 'B') optCounts.B++;
      else if (ans === 'C') optCounts.C++;
      else if (ans === 'D') optCounts.D++;
    }

    const isTotalOk = count === 500;
    const isDiffOk = easy === 125 && medium === 250 && hard === 125;
    const isOptsOk = emptyOpts === 0 && dupIds === 0 && missingExp === 0;

    const passed = isTotalOk && isDiffOk && isOptsOk;
    if (!passed) allPassed = false;

    resultsTable.push({
      Chapter: chId,
      Title: stats?.chapterTitle || chId,
      Loaded: count,
      'E/M/H': `${easy}/${medium}/${hard}`,
      'A/B/C/D': `${optCounts.A}/${optCounts.B}/${optCounts.C}/${optCounts.D}`,
      Dupes: dupIds,
      Missing: emptyOpts + missingExp,
      Status: passed ? 'PASSED (500/500)' : 'FAILED'
    });
  }

  console.table(resultsTable);

  console.log('\n--- REGRESSION TESTING COMPLETED CHAPTERS ---');
  const reg11Phys = await ChapterwiseMcqService.loadChapterQuestions('units-measurements');
  console.log(`Units and Measurements (Class 11 Physics): ${reg11Phys.length} questions loaded.`);

  const reg11Bio = await ChapterwiseMcqService.loadChapterQuestions('respiration-plants');
  console.log(`Respiration in Plants (Class 11 Biology): ${reg11Bio.length} questions loaded.`);

  if (reg11Phys.length !== 500 || reg11Bio.length !== 500) {
    console.error('Regression test FAILED!');
    process.exit(1);
  }

  if (!allPassed) {
    console.error('Some Class 12 Physics chapters failed verification!');
    process.exit(1);
  }

  console.log('\nALL 15 CLASS 12 PHYSICS CHAPTERS FULLY VERIFIED AND PASSED (500 MCQs EACH)!');
}

verifyAll().catch(err => {
  console.error('Verification error:', err);
  process.exit(1);
});
