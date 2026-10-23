import { ChapterwiseMcqService } from '../src/services/chapterwiseMcqService';

const CLASS_12_CHEMISTRY_CHAPTERS = [
  'solutions',
  'equilibrium',
  'electrochemistry',
  'chemical-kinetics',
  'p-block-12',
  'd-f-block-elements',
  'coordination-compounds',
  'haloalkanes-haloarenes',
  'alcohols-phenols-ethers',
  'aldehydes-ketones',
  'amines',
  'biomolecules',
  'practical-chemistry'
];

async function verifyAllChemistry() {
  console.log('========================================================================');
  console.log('VERIFYING ALL 13 CLASS 12 CHEMISTRY CHAPTERS VIA ChapterwiseMcqService');
  console.log('========================================================================\n');

  let allPassed = true;
  const resultsTable: any[] = [];

  for (const chId of CLASS_12_CHEMISTRY_CHAPTERS) {
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
    const isBalanceOk = optCounts.A === 125 && optCounts.B === 125 && optCounts.C === 125 && optCounts.D === 125;

    const passed = isTotalOk && isDiffOk && isOptsOk && isBalanceOk;
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

  console.log('\n--- REGRESSION TESTING RELATED & PREVIOUSLY COMPLETED CHAPTERS ---');
  const regBio = await ChapterwiseMcqService.loadChapterQuestions('biomolecules-bio');
  console.log(`Biomolecules (Class 11 Biology): ${regBio.length} questions loaded.`);

  const regHydro = await ChapterwiseMcqService.loadChapterQuestions('hydrocarbons');
  console.log(`Hydrocarbons (Class 11 Chemistry): ${regHydro.length} questions loaded.`);

  const regPhys = await ChapterwiseMcqService.loadChapterQuestions('electric-charges-fields');
  console.log(`Electric Charges and Fields (Class 12 Physics): ${regPhys.length} questions loaded.`);

  if (regBio.length !== 500 || regHydro.length !== 500 || regPhys.length !== 500) {
    console.error('Regression test FAILED!');
    process.exit(1);
  }

  if (!allPassed) {
    console.error('Some Class 12 Chemistry chapters failed verification!');
    process.exit(1);
  }

  console.log('\nALL 13 CLASS 12 CHEMISTRY CHAPTERS FULLY VERIFIED AND PASSED (500 MCQs EACH, 6500 TOTAL)!');
}

verifyAllChemistry().catch(err => {
  console.error('Error during verification:', err);
  process.exit(1);
});
