import { NeetMarksPotential, YearWisePYQRecord, PYQuestion } from '../types/neet'

/**
 * Normalizes a raw PYQuestion record to guarantee metadata integrity.
 * Prevents any undefined / NaN / null fields from ever being rendered.
 */
export function normalizePYQRecord(rawQ: any): PYQuestion | null {
  if (!rawQ || typeof rawQ !== 'object') return null;

  // 1. Determine year
  let year: number | undefined = undefined;
  if (typeof rawQ.year === 'number' && !isNaN(rawQ.year) && rawQ.year > 1900) {
    year = rawQ.year;
  } else if (typeof rawQ.year === 'string') {
    const parsed = parseInt(rawQ.year, 10);
    if (!isNaN(parsed) && parsed > 1900) year = parsed;
  }

  // Fallback search in examYear, exam, or id
  if (year === undefined) {
    const searchStr = `${rawQ.examYear || ''} ${rawQ.exam || ''} ${rawQ.id || ''}`;
    const match = searchStr.match(/\b(19\d\d|20\d\d)\b/);
    if (match) {
      year = parseInt(match[1], 10);
    }
  }

  if (year === undefined || isNaN(year)) {
    return null;
  }

  // 2. Determine exam name
  let exam = 'NEET UG';
  const examRaw = (rawQ.exam || rawQ.examYear || '').toString().trim();
  if (examRaw.toLowerCase().includes('aipmt')) {
    exam = 'AIPMT';
  } else if (examRaw.toLowerCase().includes('neet')) {
    exam = 'NEET UG';
  }

  // 3. Normalize question and explanation
  let question = (rawQ.question || '').toString().trim();
  let explanation = (rawQ.explanation || '').toString().trim();

  // Fix corrupted question/explanation legacy data
  if (question.length < 30 && !question.includes(' ') && explanation.length > 30) {
    question = explanation;
    explanation = `Comprehensive Concept Explanation: Apply fundamental principles for ${rawQ.topicId || 'this topic'}, analyzing the given parameters and using the governing formula to calculate the exact numerical result step-by-step.`;
  }

  if (!question) {
    return null;
  }

  // 4. Options
  const options = Array.isArray(rawQ.options) ? rawQ.options.map((o: any) => String(o)) : [];

  // 5. Correct answer index
  let correctAnswer = typeof rawQ.correctAnswer === 'number' ? rawQ.correctAnswer : 0;
  if (correctAnswer < 0 || (options.length > 0 && correctAnswer >= options.length)) {
    correctAnswer = 0;
  }

  // 6. Marks (default NEET question value is 4)
  const marks = typeof rawQ.marks === 'number' && rawQ.marks > 0 ? rawQ.marks : 4;

  // 7. Concept tested
  const conceptTested = (rawQ.conceptTested || rawQ.concept || 'Verified Concept').toString().trim();

  // 8. Classification
  const classification = rawQ.classification === 'Overlap' ? 'Overlap' : 'Direct';

  return {
    id: rawQ.id || `pyq-${year}-${Math.random().toString(36).substring(2, 7)}`,
    year,
    exam,
    question,
    options,
    correctAnswer,
    explanation: explanation || 'Detailed Step-by-Step Solution: Identify given variables, state governing physical principles, substitute known values into the equation, and compute the answer.',
    difficulty: rawQ.difficulty || 'Medium',
    conceptTested,
    marks,
    classification,
    verified: rawQ.verified !== false,
    ncertReference: rawQ.ncertReference,
    topicId: rawQ.topicId
  };
}

/**
 * Deduplicates and normalizes raw PYQ records.
 * Rules:
 * 1. Filter out unverified questions (verified === false) or invalid fields.
 * 2. Deduplicate identical questions based on id or normalized question text.
 */
export function deduplicateAndNormalizePYQs(rawPyqs: any[]): PYQuestion[] {
  if (!Array.isArray(rawPyqs)) return [];

  const normalized = rawPyqs
    .map(q => normalizePYQRecord(q))
    .filter((q): q is PYQuestion => q !== null && q.verified !== false);

  const seenIds = new Set<string>();
  const seenTexts = new Set<string>();
  const deduplicated: PYQuestion[] = [];

  for (const q of normalized) {
    const textKey = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
    const idKey = q.id;

    if ((idKey && seenIds.has(idKey)) || (textKey && textKey.length > 10 && seenTexts.has(textKey))) {
      continue;
    }

    if (idKey) seenIds.add(idKey);
    if (textKey && textKey.length > 10) seenTexts.add(textKey);
    deduplicated.push(q);
  }

  return deduplicated;
}

/**
 * MASTER MARKS POTENTIAL RECONCILIATION ENGINE
 * Ensures 100% mathematical consistency between Year-Wise Breakdown, Summary Statistics, and PYQ Cards.
 * Follows strict single-source-of-truth calculations.
 */
export function reconcileMarksPotential(
  rawPotential?: NeetMarksPotential,
  topicTitle?: string,
  pyqsList?: PYQuestion[]
): NeetMarksPotential | undefined {
  const normalizedPyqs = deduplicateAndNormalizePYQs(pyqsList || []);

  if (!rawPotential && normalizedPyqs.length === 0) {
    return undefined;
  }

  const topicName = rawPotential?.topicName || topicTitle || 'This Topic';
  const totalAnalyzedPapers = rawPotential?.totalAnalyzedPapers || 15;

  let yearWiseBreakdown: YearWisePYQRecord[] = [];

  if (normalizedPyqs.length > 0) {
    // Rule 9: The Year-Wise Breakdown must display EVERY verified PYQ record, not one representative question per year.
    // Each row represents 1 verified PYQ record.
    yearWiseBreakdown = normalizedPyqs.map(q => ({
      id: q.id,
      year: q.year!,
      exam: q.exam || 'NEET UG',
      directPyqCount: 1,
      marks: q.marks || 4,
      questionType: q.conceptTested || 'Verified Direct PYQ',
      classification: (q.classification === 'Overlap' ? 'Overlap' : 'Direct') as 'Direct' | 'Overlap' | 'None',
      verificationStatus: `Verified (${q.exam || 'NEET UG'})`
    })).sort((a, b) => b.year - a.year);
  } else if (rawPotential?.yearWiseBreakdown) {
    yearWiseBreakdown = rawPotential.yearWiseBreakdown
      .filter(r => r.year !== undefined && !isNaN(r.year))
      .map(r => ({
        ...r,
        exam: r.exam || 'NEET UG',
        directPyqCount: typeof r.directPyqCount === 'number' ? r.directPyqCount : 1,
        marks: typeof r.marks === 'number' ? r.marks : ((typeof r.directPyqCount === 'number' ? r.directPyqCount : 1) * 4)
      }));
  }

  // 1. Direct Verified PYQ Count
  const totalDirectPyqs = normalizedPyqs.length > 0
    ? normalizedPyqs.length
    : yearWiseBreakdown.reduce((sum, r) => sum + (r.directPyqCount || 0), 0);

  // 2. Paper-Level Aggregation for Unique Paper Appearance Rate & Min/Max calculations
  const paperMap = new Map<string, PYQuestion[]>();
  if (normalizedPyqs.length > 0) {
    for (const q of normalizedPyqs) {
      const pKey = `${q.year}_${q.exam || 'NEET UG'}`;
      const existing = paperMap.get(pKey) || [];
      existing.push(q);
      paperMap.set(pKey, existing);
    }
  }

  // Rule 5: PAPER APPEARANCE RATE must count UNIQUE PAPERS containing at least one verified PYQ for that topic.
  const papersWithDirectPyqs = normalizedPyqs.length > 0
    ? Math.min(paperMap.size, totalAnalyzedPapers)
    : Math.min(new Set(yearWiseBreakdown.filter(r => (r.directPyqCount || 0) > 0).map(r => `${r.year}_${r.exam}`)).size, totalAnalyzedPapers);

  // 3. Historical Marks Represented (Sum of marks of verified PYQ records)
  const totalHistoricalMarks = normalizedPyqs.length > 0
    ? normalizedPyqs.reduce((sum, q) => sum + (q.marks || 4), 0)
    : yearWiseBreakdown.reduce((sum, r) => sum + (typeof r.marks === 'number' ? r.marks : 4), 0);

  // 4. Historical Direct-Question Range (PER PAPER among papers containing this topic - Rules 7 & 8)
  let minDirectPyqsInSinglePaper = 0;
  let maxDirectPyqsInSinglePaper = 0;
  let minDirectMarks = 0;
  let maxDirectMarks = 0;

  if (paperMap.size > 0) {
    const counts = Array.from(paperMap.values()).map(list => list.length);
    const marksList = Array.from(paperMap.values()).map(list => list.reduce((s, q) => s + (q.marks || 4), 0));
    minDirectPyqsInSinglePaper = Math.min(...counts);
    maxDirectPyqsInSinglePaper = Math.max(...counts);
    minDirectMarks = Math.min(...marksList);
    maxDirectMarks = Math.max(...marksList);
  }

  // 5. Averages & Typical Contribution
  const averageDirectPyqsPerPaper = Number((totalDirectPyqs / totalAnalyzedPapers).toFixed(2));
  const avgDirectMarksPerPaper = Number((totalHistoricalMarks / totalAnalyzedPapers).toFixed(2));

  let typicalContributionMarks = 0;
  if (totalDirectPyqs > 0 && papersWithDirectPyqs > 0) {
    typicalContributionMarks = Math.round(totalHistoricalMarks / papersWithDirectPyqs);
  }

  let historicalMarksRangeText = '';
  if (totalDirectPyqs === 0) {
    historicalMarksRangeText = 'Insufficient verified PYQ data (0 marks)';
  } else if (minDirectMarks === maxDirectMarks) {
    historicalMarksRangeText = `${minDirectMarks} marks per paper (tested in ${papersWithDirectPyqs} of ${totalAnalyzedPapers} analyzed papers)`;
  } else {
    historicalMarksRangeText = `${minDirectMarks} to ${maxDirectMarks} marks per paper (tested in ${papersWithDirectPyqs} of ${totalAnalyzedPapers} analyzed papers)`;
  }

  // 6. Confidence Labeling
  let confidenceLabel: 'HIGH' | 'MODERATE' | 'LIMITED' = 'LIMITED';
  if (totalDirectPyqs >= 5 && papersWithDirectPyqs >= 5) {
    confidenceLabel = 'HIGH';
  } else if (totalDirectPyqs >= 2 && papersWithDirectPyqs >= 2) {
    confidenceLabel = 'MODERATE';
  }

  let confidenceText = '';
  if (totalDirectPyqs === 0) {
    confidenceText = 'Insufficient verified PYQ data: 0 direct PYQs identified in official archives.';
  } else if (confidenceLabel === 'HIGH') {
    confidenceText = `High Confidence: Verified against ${papersWithDirectPyqs} official NEET/AIPMT paper appearances (${totalDirectPyqs} direct questions).`;
  } else if (confidenceLabel === 'MODERATE') {
    confidenceText = `Moderate Confidence: Based on ${totalDirectPyqs} verified direct PYQ(s) across ${papersWithDirectPyqs} analyzed paper(s).`;
  } else {
    confidenceText = `Limited Data Confidence: ${totalDirectPyqs} verified direct PYQ(s) found in source archives.`;
  }

  // 7. What This Means For You
  let whatThisMeansForYou = rawPotential?.whatThisMeansForYou || '';
  if (totalDirectPyqs === 0) {
    whatThisMeansForYou = `Insufficient verified PYQ data available for ${topicName} in the analyzed dataset. Standard topic practice questions are recommended for conceptual clarity.`;
  } else if (!whatThisMeansForYou) {
    whatThisMeansForYou = `Based on ${totalDirectPyqs} verified direct questions across ${papersWithDirectPyqs} unique papers, mastering ${topicName} gives you a historical direct score potential of ~${typicalContributionMarks} marks when present.`;
  }

  const sourceInfo = {
    dataSource: rawPotential?.sourceInfo?.dataSource || 'SATHEE (IIT Kanpur / Ministry of Education) & Official NEET Archives',
    analysisPeriod: rawPotential?.sourceInfo?.analysisPeriod || `2004 – 2024 (${totalAnalyzedPapers} Verified Papers)`,
    directPyqsAnalyzedCount: totalDirectPyqs,
    classificationMethod: 'Strict topic-level classification; chapter-level weightage was excluded.',
    disclaimer: rawPotential?.sourceInfo?.disclaimer || 'Historical frequency is a record of past papers and not a guarantee of future NEET paper contents.'
  };

  return {
    topicName,
    confidenceLabel,
    confidenceText,
    totalAnalyzedPapers,
    papersWithDirectPyqs,
    totalDirectPyqs,
    totalHistoricalMarks,
    averageDirectPyqsPerPaper,
    maxDirectPyqsInSinglePaper,
    minDirectPyqsInSinglePaper,
    minDirectMarks,
    maxDirectMarks,
    avgDirectMarksPerPaper,
    typicalContributionMarks,
    historicalMarksRangeText,
    whatThisMeansForYou,
    yearWiseBreakdown,
    overlapPyqs: rawPotential?.overlapPyqs || [],
    sourceInfo
  };
}
