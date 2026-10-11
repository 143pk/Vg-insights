import { PYQ_DATABASE } from '../src/data/pyqDatabase';

function runValidation() {
  console.log('==============================================');
  console.log('       VG INSIGHTS PYQ DATABASE VALIDATION    ');
  console.log('==============================================\n');

  // 1. Overall counts
  console.log(`Total questions in PYQ_DATABASE: ${PYQ_DATABASE.length}`);

  // Subject counts
  const physicsTotal = PYQ_DATABASE.filter(q => q.subject === 'physics').length;
  const chemistryTotal = PYQ_DATABASE.filter(q => q.subject === 'chemistry').length;
  const biologyTotal = PYQ_DATABASE.filter(q => q.subject === 'biology').length;
  const botanyTotal = PYQ_DATABASE.filter(q => q.subject === 'biology' && q.biologySection === 'Botany').length;
  const zoologyTotal = PYQ_DATABASE.filter(q => q.subject === 'biology' && q.biologySection === 'Zoology').length;

  console.log(`\nSubject Distribution (All Years):`);
  console.log(`- Physics: ${physicsTotal}`);
  console.log(`- Chemistry: ${chemistryTotal}`);
  console.log(`- Biology: ${biologyTotal} (Botany tagged: ${botanyTotal}, Zoology tagged: ${zoologyTotal})`);

  // Year breakdown
  const yearMap: Record<number, { total: number; physics: number; chemistry: number; biology: number }> = {};
  for (const q of PYQ_DATABASE) {
    if (!yearMap[q.year]) {
      yearMap[q.year] = { total: 0, physics: 0, chemistry: 0, biology: 0 };
    }
    yearMap[q.year].total++;
    yearMap[q.year][q.subject]++;
  }

  console.log(`\nYear-wise Breakdown:`);
  Object.keys(yearMap).map(Number).sort((a, b) => b - a).forEach(year => {
    const d = yearMap[year];
    console.log(`Year ${year}: Total ${d.total} (Physics: ${d.physics}, Chemistry: ${d.chemistry}, Biology: ${d.biology})`);
  });

  // 2026 Specific Audit
  console.log(`\n--- NEET UG 2026 Specific Audit ---`);
  const q2026 = PYQ_DATABASE.filter(q => q.year === 2026);
  console.log(`2026 Total Count: ${q2026.length}`);
  console.log(`2026 Physics Count: ${q2026.filter(q => q.subject === 'physics').length}`);
  console.log(`2026 Chemistry Count: ${q2026.filter(q => q.subject === 'chemistry').length}`);
  console.log(`2026 Biology Count: ${q2026.filter(q => q.subject === 'biology').length}`);

  // 2025 Specific Audit
  console.log(`\n--- NEET UG 2025 Specific Audit ---`);
  const q2025 = PYQ_DATABASE.filter(q => q.year === 2025);
  console.log(`2025 Total Count: ${q2025.length}`);
  console.log(`2025 Physics Count: ${q2025.filter(q => q.subject === 'physics').length}`);
  console.log(`2025 Chemistry Count: ${q2025.filter(q => q.subject === 'chemistry').length}`);
  console.log(`2025 Biology Count: ${q2025.filter(q => q.subject === 'biology').length}`);
  console.log(`  - 2025 Botany: ${q2025.filter(q => q.subject === 'biology' && q.biologySection === 'Botany').length}`);
  console.log(`  - 2025 Zoology: ${q2025.filter(q => q.subject === 'biology' && q.biologySection === 'Zoology').length}`);

  // 2024 Specific Audit
  console.log(`\n--- NEET UG 2024 Specific Audit ---`);
  const q2024 = PYQ_DATABASE.filter(q => q.year === 2024);
  console.log(`2024 Total Count: ${q2024.length}`);
  console.log(`2024 Physics Count: ${q2024.filter(q => q.subject === 'physics').length}`);
  console.log(`2024 Chemistry Count: ${q2024.filter(q => q.subject === 'chemistry').length}`);
  console.log(`2024 Biology Count: ${q2024.filter(q => q.subject === 'biology').length}`);
  console.log(`  - 2024 Botany: ${q2024.filter(q => q.subject === 'biology' && q.biologySection === 'Botany').length}`);
  console.log(`  - 2024 Zoology: ${q2024.filter(q => q.subject === 'biology' && q.biologySection === 'Zoology').length}`);

  // Data Integrity Checks
  console.log(`\n--- Integrity & Validation Checks ---`);
  const ids = new Set<string>();
  const duplicateIds: string[] = [];
  const questionTexts = new Set<string>();
  const duplicateTexts: string[] = [];
  let invalidOptionsCount = 0;
  let invalidCorrectIndexCount = 0;
  let emptyExplanationCount = 0;
  let falselyVerifiedCount = 0;

  for (const q of PYQ_DATABASE) {
    // ID Uniqueness
    if (ids.has(q.id)) {
      duplicateIds.push(q.id);
    }
    ids.add(q.id);

    // Text Uniqueness
    const normalizedText = q.question.trim().toLowerCase();
    if (questionTexts.has(normalizedText)) {
      duplicateTexts.push(q.id);
    }
    questionTexts.add(normalizedText);

    // Options Check
    if (!Array.isArray(q.options) || q.options.length !== 4 || q.options.some(o => !o || o.trim() === '')) {
      invalidOptionsCount++;
    }

    // Correct Index Check
    if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex > 3) {
      invalidCorrectIndexCount++;
    }

    // Explanation Check
    if (!q.explanation || q.explanation.trim() === '') {
      emptyExplanationCount++;
    }

    // Strict Source Verification Rule:
    // Source verified questions must have VERIFIED status and an official source description
    if (q.sourceVerified === true && q.verificationStatus !== 'VERIFIED') {
      falselyVerifiedCount++;
    }
    if (q.sourceVerified === true && (!q.source || q.source.trim() === '')) {
      falselyVerifiedCount++;
    }
  }

  console.log(`Duplicate IDs: ${duplicateIds.length === 0 ? 'None (PASS)' : duplicateIds.join(', ')}`);
  console.log(`Duplicate Question Texts: ${duplicateTexts.length === 0 ? 'None (PASS)' : duplicateTexts.join(', ')}`);
  console.log(`Invalid Options: ${invalidOptionsCount === 0 ? 'None (PASS - all have 4 valid options)' : invalidOptionsCount}`);
  console.log(`Invalid Correct Indices: ${invalidCorrectIndexCount === 0 ? 'None (PASS - all in range 0-3)' : invalidCorrectIndexCount}`);
  console.log(`Missing Explanations: ${emptyExplanationCount === 0 ? 'None (PASS - all have explanations)' : emptyExplanationCount}`);
  console.log(`Falsely Verified Questions: ${falselyVerifiedCount === 0 ? 'None (PASS - compliance with Critical Source Rule)' : falselyVerifiedCount}`);

  console.log('\n==============================================');
  console.log('         VALIDATION AUDIT COMPLETED           ');
  console.log('==============================================\n');
}

runValidation();
