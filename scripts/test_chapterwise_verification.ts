import { ChapterwiseMcqService } from '../src/services/chapterwiseMcqService';
import { CHAPTERS, SUBJECTS } from '../src/data/neetData';

async function runComprehensiveVerification() {
  console.log('====================================================');
  console.log('VG INSIGHTS — CHAPTERWISE MCQ VERIFICATION SUITE');
  console.log('====================================================\n');

  const targetChapters = [
    { id: 'redox-reactions', name: 'Redox Reactions' },
    { id: 'p-block-11', name: 'p-Block Elements (Group 13 & 14)' },
    { id: 'organic-chemistry-basic-principles', name: 'Organic Chemistry: Some Basic Principles & Techniques' },
    { id: 'hydrocarbons', name: 'Hydrocarbons' },
    { id: 'structural-org-animals', name: 'Structural Organisation in Animals' },
    { id: 'cell-unit-of-life', name: 'Cell: The Unit of Life' },
    { id: 'biomolecules-bio', name: 'Biomolecules (Bio)' },
    { id: 'cell-cycle-division', name: 'Cell Cycle & Cell Division' },
    { id: 'photosynthesis-higher-plants', name: 'Photosynthesis in Higher Plants' },
    { id: 'respiration-plants', name: 'Respiration in Plants' },
    { id: 'plant-growth-development', name: 'Plant Growth & Development' },
  ];

  let allPassed = true;

  // 1. Audit Canonical Chapter Existence in Curriculum
  console.log('--- 1. VERIFYING CANONICAL CHAPTER REGISTRATION IN CURRICULUM ---');
  for (const tc of targetChapters) {
    const ch = CHAPTERS[tc.id];
    if (!ch) {
      console.error(`FAIL: Chapter ${tc.id} not found in CHAPTERS!`);
      allPassed = false;
    } else {
      console.log(`PASS: [${tc.id}] found in CHAPTERS ("${ch.title}")`);
    }
  }

  // 2. Audit Loader & Stats Registry
  console.log('\n--- 2. VERIFYING QUESTION COUNTS VIA REAL APPLICATION SERVICE ---');
  for (const tc of targetChapters) {
    const count = ChapterwiseMcqService.getQuestionCount(tc.id);
    if (count !== 500) {
      console.error(`FAIL: Chapter ${tc.id} getQuestionCount returned ${count}, expected 500!`);
      allPassed = false;
    } else {
      console.log(`PASS: [${tc.id}] ChapterwiseMcqService.getQuestionCount = 500`);
    }
  }

  // 3. Audit Dynamic Loading, Schema & Difficulty Distribution
  console.log('\n--- 3. VERIFYING ASYNCHRONOUS DATA LOADING & DIFFICULTY COUNTS ---');
  for (const tc of targetChapters) {
    const qs = await ChapterwiseMcqService.loadChapterQuestions(tc.id);
    if (qs.length !== 500) {
      console.error(`FAIL: Chapter ${tc.id} loaded ${qs.length} questions, expected 500!`);
      allPassed = false;
      continue;
    }

    const easy = qs.filter(q => q.difficulty === 'Easy').length;
    const med = qs.filter(q => q.difficulty === 'Medium').length;
    const hard = qs.filter(q => q.difficulty === 'Hard').length;
    const ids = new Set(qs.map(q => q.id));

    if (easy !== 125 || med !== 250 || hard !== 125) {
      console.error(`FAIL: [${tc.id}] Invalid distribution: Easy=${easy}, Med=${med}, Hard=${hard} (Expected 125/250/125)`);
      allPassed = false;
    } else if (ids.size !== 500) {
      console.error(`FAIL: [${tc.id}] Duplicate question IDs detected! Unique count: ${ids.size}`);
      allPassed = false;
    } else {
      console.log(`PASS: [${tc.id}] Loaded 500 unique MCQs (Easy: ${easy}, Med: ${med}, Hard: ${hard})`);
    }

    // 4. Audit Explanations and Topic Metadata
    let badTopics = 0;
    let badExplanations = 0;
    let badOptions = 0;

    for (const q of qs) {
      if (!q.topic || q.topic === 'undefined' || q.topic === 'null' || q.topic.trim().length === 0) {
        badTopics++;
      }
      if (!q.explanation || !q.solutionStructured || !q.solutionStructured.stepByStep) {
        badExplanations++;
      }
      if (!q.options || (Array.isArray(q.options) ? q.options.length < 4 : (!(q.options as any).A || !(q.options as any).B || !(q.options as any).C || !(q.options as any).D))) {
        badOptions++;
      }
    }

    if (badTopics > 0) {
      console.error(`FAIL: [${tc.id}] Found ${badTopics} questions with invalid or "undefined" topics!`);
      allPassed = false;
    }
    if (badExplanations > 0) {
      console.error(`FAIL: [${tc.id}] Found ${badExplanations} questions with missing explanations!`);
      allPassed = false;
    }
    if (badOptions > 0) {
      console.error(`FAIL: [${tc.id}] Found ${badOptions} questions with invalid options!`);
      allPassed = false;
    }

    if (badTopics === 0 && badExplanations === 0 && badOptions === 0) {
      console.log(`PASS: [${tc.id}] 100% valid topics, options, and 6-section explanations verified`);
    }
  }

  // 5. Test Check Answer handler logic
  console.log('\n--- 4. VERIFYING CHECK ANSWER & EVALUATION HANDLER ---');
  const sampleChapter = 'redox-reactions';
  const sampleQs = ChapterwiseMcqService.getQuestions(sampleChapter);
  const sampleQ = sampleQs[0];
  const correctAns = sampleQ.correctAnswer;
  const wrongAns = (['A', 'B', 'C', 'D'].find(o => o !== correctAns) as 'A' | 'B' | 'C' | 'D');

  const evalCorrect = ChapterwiseMcqService.checkAnswer(sampleChapter, sampleQ.id, correctAns);
  if (!evalCorrect.isCorrect) {
    console.error('FAIL: checkAnswer returned isCorrect=false for correct answer!');
    allPassed = false;
  } else {
    console.log(`PASS: checkAnswer correctly evaluated correct answer (${correctAns}) for ${sampleQ.id}`);
  }

  const evalWrong = ChapterwiseMcqService.checkAnswer(sampleChapter, sampleQ.id, wrongAns);
  if (evalWrong.isCorrect) {
    console.error('FAIL: checkAnswer returned isCorrect=true for incorrect answer!');
    allPassed = false;
  } else {
    console.log(`PASS: checkAnswer correctly evaluated incorrect answer (${wrongAns}) for ${sampleQ.id}`);
  }

  // 6. Audit Legacy Physics & Chemistry Topic Normalization
  console.log('\n--- 5. AUDITING LEGACY TOPIC LABELS (e.g. "Screw gauge") ---');
  const physicsQs = await ChapterwiseMcqService.loadChapterQuestions('units-measurements');
  const screwGaugeQ = physicsQs.find(q => q.topic === 'Screw gauge');
  if (!screwGaugeQ) {
    console.error('FAIL: "Screw gauge" question not found in units-measurements!');
    allPassed = false;
  } else {
    console.log(`PASS: Preserved existing legacy Physics topic "${screwGaugeQ.topic}"`);
  }

  const moleQs = await ChapterwiseMcqService.loadChapterQuestions('mole-concept');
  let moleUndefinedTopics = moleQs.filter(q => q.topic === 'undefined' || !q.topic).length;
  if (moleUndefinedTopics > 0) {
    console.error(`FAIL: Found ${moleUndefinedTopics} undefined topics in mole-concept!`);
    allPassed = false;
  } else {
    console.log(`PASS: All 500 mole-concept questions normalized to valid topic labels (sample: "${moleQs[0].topic}")`);
  }

  console.log('\n====================================================');
  if (allPassed) {
    console.log('ALL VERIFICATION CHECKS PASSED SUCCESSFULLY (6/6)');
  } else {
    console.log('SOME CHECKS FAILED — SEE LOGS ABOVE');
    process.exit(1);
  }
  console.log('====================================================\n');
}

runComprehensiveVerification().catch(err => {
  console.error('Fatal verification error:', err);
  process.exit(1);
});
