import fs from 'fs';
import path from 'path';
import { TOPIC_DETAILS } from '../src/data/topicDetails';

console.log('Starting full automated question populator for ALL topics...');

function createSupplementalQuestions(topicId: string, detailObj: any, currentCount: number): any[] {
  const needed = 10 - currentCount;
  if (needed <= 0) return [];

  const name = detailObj.topicName || detailObj.title || topicId;
  const terms = detailObj.importantTerms || [];
  const confusions = detailObj.commonConfusions || [];
  const revision = detailObj.quickRevision || [];
  const neetPoints = detailObj.neetImportantPoints || [];
  const basicIdeas = detailObj.basicIdea || [];
  const concepts = detailObj.conceptExplanation || [];

  const generated: any[] = [];

  // 1. From commonConfusions
  for (const conf of confusions) {
    if (generated.length >= needed) break;
    const qText = `Regarding ${name}, which of the following statements correctly resolves the misconception about "${conf.commonConfusion || conf.misconception || conf.trap || 'this topic'}"?`;
    const correctAns = conf.correctFact || conf.correction || conf.reality || 'Correct NCERT factual statement';
    
    generated.push({
      id: `prac-${topicId.toLowerCase().replace(/[^a-z0-9]/g, '')}-${currentCount + generated.length + 1}`,
      question: qText,
      options: [
        correctAns,
        `Incorrect assumption: ${conf.commonConfusion || conf.trap || 'misconception'}`,
        `The phenomenon is completely absent in living organisms`,
        `This process is non-functional in eukaryotic cells`
      ],
      correctAnswer: 0,
      explanation: `${conf.correctFact || conf.reality || 'NCERT Fact'}. ${conf.whyItMattersForNEET || conf.neetImpact || ''}`,
      difficulty: 'Medium',
      conceptTested: `${name} - Conceptual Clarity`
    });
  }

  // 2. From importantTerms
  for (const term of terms) {
    if (generated.length >= needed) break;
    const termName = term.term || term.symbol || 'Key Term';
    const termDef = term.definition || term.meaning || 'Standard NCERT definition';
    const note = term.neetNote || term.note || '';

    generated.push({
      id: `prac-${topicId.toLowerCase().replace(/[^a-z0-9]/g, '')}-${currentCount + generated.length + 1}`,
      question: `In the study of ${name}, what is the exact definition and significance of "${termName}"?`,
      options: [
        `${termDef}`,
        `An unrelated metabolic process in plants`,
        `A secondary non-functional structural component`,
        `An experimental artifact observed only in vitro`
      ],
      correctAnswer: 0,
      explanation: `${termDef}. ${note}`,
      difficulty: 'Easy',
      conceptTested: `${termName} definition`
    });
  }

  // 3. From quickRevision / neetImportantPoints
  const factList = [...revision, ...neetPoints, ...basicIdeas];
  for (const fact of factList) {
    if (generated.length >= needed) break;
    const factStr = typeof fact === 'string' ? fact : (fact.heading || fact.point || JSON.stringify(fact));
    
    generated.push({
      id: `prac-${topicId.toLowerCase().replace(/[^a-z0-9]/g, '')}-${currentCount + generated.length + 1}`,
      question: `Which of the following is a key NCERT statement regarding ${name}?`,
      options: [
        `${factStr}`,
        `Statement is reversed in all living organisms`,
        `This process only occurs under zero gravity conditions`,
        `Applicable only to synthetic organic polymers`
      ],
      correctAnswer: 0,
      explanation: `According to NCERT: ${factStr}`,
      difficulty: 'Easy',
      conceptTested: `${name} NCERT High-Yield Point`
    });
  }

  // 4. Fill remaining from concepts or general NCERT topic facts
  while (generated.length < needed) {
    const idx = currentCount + generated.length + 1;
    const concept = concepts[generated.length % (concepts.length || 1)];
    const heading = concept?.heading || `Aspect ${idx}`;
    
    generated.push({
      id: `prac-${topicId.toLowerCase().replace(/[^a-z0-9]/g, '')}-${idx}`,
      question: `Identify the correct assertion regarding ${heading} in ${name}:`,
      options: [
        `It is a fundamental principle directly evaluated in NEET biology and physical science problems.`,
        `It operates in opposition to standard thermodynamic and biological laws.`,
        `It has been removed completely from the official NEET syllabus.`,
        `It applies exclusively to non-terrestrial environments.`
      ],
      correctAnswer: 0,
      explanation: `Understanding ${heading} is essential for solving core conceptual questions in ${name}.`,
      difficulty: idx % 2 === 0 ? 'Medium' : 'Hard',
      conceptTested: `${name} - ${heading}`
    });
  }

  return generated;
}

// 1. Process files in src/data/topics
let totalAddedFiles = 0;
const topicsDir = path.join(process.cwd(), 'src/data/topics');
const files = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));

console.log(`Inspecting ${files.length} standalone topic files...`);

for (const file of files) {
  const filePath = path.join(topicsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract topicId from file
  const idMatch = content.match(/["']?topicId["']?\s*:\s*["']([^"']+)["']/);
  const topicId = idMatch ? idMatch[1] : null;

  if (!topicId) {
    console.log(`Warning: Could not extract topicId in file ${file}`);
    continue;
  }

  const detailObj = (TOPIC_DETAILS as any)[topicId];
  if (!detailObj) {
    console.log(`Warning: Could not match runtime object for topicId: ${topicId} in file ${file}`);
    continue;
  }

  const existingPqs = detailObj.practiceQuestions || detailObj.practiceCards || [];
  if (existingPqs.length >= 10) continue;

  const newQuestions = createSupplementalQuestions(topicId, detailObj, existingPqs.length);
  const allQuestions = [...existingPqs, ...newQuestions];

  const formattedPqs = JSON.stringify(allQuestions, null, 2);

  // Flexible regex matching quoted or unquoted practiceQuestions or pyqs
  const pqRegex = /(["']?practiceQuestions["']?\s*:\s*\[[\s\S]*?\]\s*,\s*)(["']?(?:pyqs|previousYearQuestions|pyqAnalysis|neetMarksPotential)["']?)/;
  const pyqRegex = /(["']?(?:pyqs|previousYearQuestions)["']?\s*:\s*\[)/;

  if (pqRegex.test(content)) {
    content = content.replace(pqRegex, `"practiceQuestions": ${formattedPqs},\n  $2`);
    fs.writeFileSync(filePath, content, 'utf8');
    totalAddedFiles += newQuestions.length;
    console.log(`[${file}] Updated practiceQuestions -> Total now ${allQuestions.length}`);
  } else if (pyqRegex.test(content)) {
    content = content.replace(pyqRegex, `"practiceQuestions": ${formattedPqs},\n  $1`);
    fs.writeFileSync(filePath, content, 'utf8');
    totalAddedFiles += newQuestions.length;
    console.log(`[${file}] Inserted practiceQuestions array (+${newQuestions.length}) -> Total now ${allQuestions.length}`);
  } else {
    console.log(`[${file}] Could not locate insertion spot for practiceQuestions`);
  }
}

console.log(`\nStandalone topic files update finished. Total added to files: ${totalAddedFiles}`);

// 2. Process inline topics in src/data/topicDetails.ts
console.log('\nInspecting inline topics in src/data/topicDetails.ts...');
const topicDetailsPath = path.join(process.cwd(), 'src/data/topicDetails.ts');
let tdContent = fs.readFileSync(topicDetailsPath, 'utf8');

const keys = Object.keys(TOPIC_DETAILS);
let inlineAdded = 0;

for (const key of keys) {
  const detailObj = (TOPIC_DETAILS as any)[key];
  const pqs = detailObj.practiceQuestions || detailObj.practiceCards || [];
  if (pqs.length >= 10) continue;

  const newQuestions = createSupplementalQuestions(key, detailObj, pqs.length);
  const allQuestions = [...pqs, ...newQuestions];
  const formattedPqs = JSON.stringify(allQuestions, null, 2);

  // Search for topic entry in topicDetails.ts
  const topicKeyPattern = new RegExp(`("${key}"|'${key}')\\s*:\\s*\\{`, 'g');
  const match = topicKeyPattern.exec(tdContent);

  if (match) {
    const startIndex = match.index;
    // Find where this object definition is located
    // Check if practiceQuestions already exists inside this block
    const existingPqIndex = tdContent.indexOf('"practiceQuestions":', startIndex);
    const existingPqSingleIndex = tdContent.indexOf("'practiceQuestions':", startIndex);
    const pyqIndex = tdContent.indexOf('"pyqs":', startIndex);

    if (existingPqIndex !== -1 && existingPqIndex < startIndex + 5000) {
      // Replace existing practiceQuestions array
      const endBracket = tdContent.indexOf('],', existingPqIndex);
      if (endBracket !== -1) {
        tdContent = tdContent.slice(0, existingPqIndex) + `"practiceQuestions": ${formattedPqs},` + tdContent.slice(endBracket + 2);
        inlineAdded += newQuestions.length;
        console.log(`[inline: ${key}] Updated practiceQuestions -> Total now ${allQuestions.length}`);
      }
    } else if (pyqIndex !== -1 && pyqIndex < startIndex + 5000) {
      tdContent = tdContent.slice(0, pyqIndex) + `"practiceQuestions": ${formattedPqs},\n    ` + tdContent.slice(pyqIndex);
      inlineAdded += newQuestions.length;
      console.log(`[inline: ${key}] Inserted practiceQuestions -> Total now ${allQuestions.length}`);
    }
  }
}

fs.writeFileSync(topicDetailsPath, tdContent, 'utf8');
console.log(`\nInline topics update finished. Total added to inline: ${inlineAdded}`);
