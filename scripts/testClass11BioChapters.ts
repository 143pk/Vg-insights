import { ChapterwiseMcqService } from '../src/services/chapterwiseMcqService';

async function verifyAllTargetChapters() {
  const targetChapters = [
    { id: 'breathing-exchange-gases', title: 'Breathing and Exchange of Gases' },
    { id: 'body-fluids-circulation', title: 'Body Fluids and Circulation' },
    { id: 'excretory-products', title: 'Excretory Products and Their Elimination' },
    { id: 'locomotion-movement', title: 'Locomotion and Movement' },
    { id: 'neural-control-coordination', title: 'Neural Control and Coordination' },
    { id: 'chemical-coordination-integration', title: 'Chemical Coordination and Integration' },
  ];

  console.log('================================================================');
  console.log('VERIFYING CLASS 11 BIOLOGY TARGET CHAPTERS VIA SERVICE LOADER');
  console.log('================================================================');

  let allSuccess = true;

  for (const ch of targetChapters) {
    console.log(`\nTesting Chapter: ${ch.title} (${ch.id})`);
    const stats = ChapterwiseMcqService.getStats(ch.id);
    if (!stats) {
      console.error(`❌ Missing static registry entry for ${ch.id}`);
      allSuccess = false;
      continue;
    }
    console.log(`- Registry Stats: total=${stats.totalQuestions}, easy=${stats.easyCount}, medium=${stats.mediumCount}, hard=${stats.hardCount}`);

    const questions = await ChapterwiseMcqService.loadChapterQuestions(ch.id);
    console.log(`- Loaded Questions: ${questions.length}`);

    if (questions.length !== 500) {
      console.error(`❌ Expected 500 questions, but loaded ${questions.length}`);
      allSuccess = false;
      continue;
    }

    const difficultyCounts = { Easy: 0, Medium: 0, Hard: 0 };
    const optionCounts = { A: 0, B: 0, C: 0, D: 0 };
    const seenIds = new Set<string>();

    for (let idx = 0; idx < questions.length; idx++) {
      const q = questions[idx];

      if (!q.id || seenIds.has(q.id)) {
        console.error(`❌ Duplicate or missing ID: ${q.id} at index ${idx}`);
        allSuccess = false;
        break;
      }
      seenIds.add(q.id);

      if (!q.question || q.question.trim().length === 0) {
        console.error(`❌ Empty question statement at ${q.id}`);
        allSuccess = false;
        break;
      }

      const options = q.options as any;
      if (!options || !options.A || !options.B || !options.C || !options.D) {
        console.error(`❌ Missing option in ${q.id}:`, q.options);
        allSuccess = false;
        break;
      }

      const optKey = String(q.correctOption);
      if (!['A', 'B', 'C', 'D'].includes(optKey)) {
        console.error(`❌ Invalid correctOption: ${q.correctOption} at ${q.id}`);
        allSuccess = false;
        break;
      }

      if (!q.explanation || q.explanation.trim().length === 0) {
        console.error(`❌ Missing explanation at ${q.id}`);
        allSuccess = false;
        break;
      }

      (difficultyCounts as any)[q.difficulty]++;
      (optionCounts as any)[optKey]++;
    }

    console.log(`- Difficulty Counts:`, difficultyCounts);
    console.log(`- Option Key Counts:`, optionCounts);

    if (difficultyCounts.Easy !== 125 || difficultyCounts.Medium !== 250 || difficultyCounts.Hard !== 125) {
      console.error(`❌ Difficulty mismatch for ${ch.id}:`, difficultyCounts);
      allSuccess = false;
    }

    if (optionCounts.A !== 125 || optionCounts.B !== 125 || optionCounts.C !== 125 || optionCounts.D !== 125) {
      console.error(`❌ Option balance mismatch for ${ch.id}:`, optionCounts);
      allSuccess = false;
    }
  }

  console.log('\n================================================================');
  console.log('REGRESSION TEST: PREVIOUSLY COMPLETED CHAPTER');
  console.log('================================================================');
  const regChapter = 'respiration-plants';
  const regQuestions = await ChapterwiseMcqService.loadChapterQuestions(regChapter);
  console.log(`Regression Chapter ${regChapter} loaded: ${regQuestions.length} questions`);
  if (regQuestions.length !== 500) {
    console.error(`❌ Regression failed for ${regChapter}`);
    allSuccess = false;
  } else {
    console.log(`✓ Regression test passed for ${regChapter}!`);
  }

  if (allSuccess) {
    console.log('\n🎉 ALL 6 CHAPTERS VERIFIED SUCCESSFULLY (500 MCQs each, 3000 total new MCQs)!');
  } else {
    console.error('\n❌ Verification errors encountered.');
    process.exit(1);
  }
}

verifyAllTargetChapters().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
