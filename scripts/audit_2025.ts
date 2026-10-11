import { PYQ_DATABASE } from '../src/data/pyqDatabase';

function audit2025() {
  console.log('==================================================');
  console.log('       NEET UG 2025 COMPREHENSIVE AUDIT REPORT    ');
  console.log('==================================================\n');

  const pyqs2025 = PYQ_DATABASE.filter(q => q.year === 2025);
  const physics2025 = pyqs2025.filter(q => q.subject === 'physics');
  const chemistry2025 = pyqs2025.filter(q => q.subject === 'chemistry');
  const biology2025 = pyqs2025.filter(q => q.subject === 'biology');
  const botany2025 = pyqs2025.filter(q => q.biologySection === 'Botany');
  const zoology2025 = pyqs2025.filter(q => q.biologySection === 'Zoology');

  console.log('NEET UG 2025 CURRENT COVERAGE');
  console.log(`Physics = ${physics2025.length}`);
  console.log(`Chemistry = ${chemistry2025.length}`);
  console.log(`Biology = ${biology2025.length} (Botany: ${botany2025.length}, Zoology: ${zoology2025.length})`);
  console.log(`Total = ${pyqs2025.length}\n`);

  console.log('Detailed 2025 Records:');
  pyqs2025.forEach((q, idx) => {
    console.log(`\n[${idx + 1}] ID: ${q.id}`);
    console.log(`  Subject: ${q.subject} | BiologySection: ${q.biologySection || 'None'}`);
    console.log(`  Chapter: [${q.chapterId}] ${q.chapterTitle}`);
    console.log(`  Topic: [${q.topicId}] ${q.topicTitle}`);
    console.log(`  Question Number: ${q.questionNumber ?? 'N/A'}`);
    console.log(`  Question: ${q.question}`);
    console.log(`  Options Count: ${q.options?.length ?? 0}`);
    console.log(`  Correct Index: ${q.correctIndex} (Letter: ${q.correctAnswer ?? 'N/A'})`);
    console.log(`  Verification Status: ${q.verificationStatus ?? 'None'} | Source Verified: ${q.sourceVerified ?? 'false'}`);
    console.log(`  Source: ${q.source ?? 'None'}`);
    console.log(`  Explanation present: ${!!q.explanation && q.explanation.length > 10}`);
  });

  // Check for anomalies
  const ids = new Set<string>();
  const duplicates: string[] = [];
  let incompleteRecords = 0;
  let incorrectSubjectClassification = 0;
  let missingAnswers = 0;
  let missingOptions = 0;
  let unverifiedQuestions = 0;

  pyqs2025.forEach(q => {
    if (ids.has(q.id)) duplicates.push(q.id);
    ids.add(q.id);

    if (!q.chapterId || !q.chapterTitle || !q.topicId || !q.topicTitle || !q.explanation) {
      incompleteRecords++;
    }

    if (!['physics', 'chemistry', 'biology'].includes(q.subject)) {
      incorrectSubjectClassification++;
    }

    if (q.correctIndex === undefined || q.correctIndex === null || q.correctIndex < 0 || q.correctIndex > 3) {
      missingAnswers++;
    }

    if (!q.options || q.options.length !== 4 || q.options.some(opt => !opt || opt.trim() === '')) {
      missingOptions++;
    }

    if (q.verificationStatus !== 'VERIFIED' || !q.sourceVerified) {
      unverifiedQuestions++;
    }
  });

  console.log('\n--- Anomalies & Issues Identified ---');
  console.log(`Duplicates: ${duplicates.length === 0 ? 'None' : duplicates.join(', ')}`);
  console.log(`Incomplete records: ${incompleteRecords}`);
  console.log(`Incorrect subject classification: ${incorrectSubjectClassification}`);
  console.log(`Missing answers: ${missingAnswers}`);
  console.log(`Missing options: ${missingOptions}`);
  console.log(`Unverified questions: ${unverifiedQuestions}`);
}

audit2025();
