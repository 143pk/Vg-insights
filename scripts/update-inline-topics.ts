import fs from 'fs';
import path from 'path';
import { TOPIC_DETAILS } from '../src/data/topicDetails';

console.log('Updating inline topics in src/data/topicDetails.ts...');

const inlineKeys = [
  "mole-concept-topic",
  "chem-percentage-composition",
  "chem-laws-combination",
  "chem-empirical-formula",
  "chem-stoichiometry",
  "chem-concentration-terms",
  "chem-subatomic-particles",
  "chem-bohrs-model",
  "chem-quantum-numbers",
  "chem-orbital-filling",
  "chem-first-law-thermo",
  "chem-enthalpies-reaction",
  "chem-second-law-entropy",
  "chem-law-mass-action",
  "chem-le-chatelier",
  "phys-current-electricity"
];

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
      id: `pq-${topicId.toLowerCase().replace(/[^a-z0-9]/g, '')}-${currentCount + generated.length + 1}`,
      question: qText,
      options: [
        correctAns,
        `Incorrect assumption: ${conf.commonConfusion || conf.trap || 'misconception'}`,
        `The phenomenon is completely absent in living organisms or physical systems`,
        `This process is non-functional under standard laboratory conditions`
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
      id: `pq-${topicId.toLowerCase().replace(/[^a-z0-9]/g, '')}-${currentCount + generated.length + 1}`,
      question: `In the study of ${name}, what is the exact definition and significance of "${termName}"?`,
      options: [
        `${termDef}`,
        `An unrelated metabolic or physical process`,
        `A secondary non-functional structural component`,
        `An experimental artifact observed only in non-ideal conditions`
      ],
      correctAnswer: 0,
      explanation: `${termDef}. ${note}`,
      difficulty: 'Easy',
      conceptTested: `${termName} definition`
    });
  }

  // 3. From quickRevision / neetImportantPoints / basicIdeas
  const factList = [...revision, ...neetPoints, ...basicIdeas];
  for (const fact of factList) {
    if (generated.length >= needed) break;
    const factStr = typeof fact === 'string' ? fact : (fact.heading || fact.point || JSON.stringify(fact));
    
    generated.push({
      id: `pq-${topicId.toLowerCase().replace(/[^a-z0-9]/g, '')}-${currentCount + generated.length + 1}`,
      question: `Which of the following is a key NCERT statement regarding ${name}?`,
      options: [
        `${factStr}`,
        `Statement is reversed in all standard chemical and physical systems`,
        `This process only occurs under zero gravity conditions`,
        `Applicable only to non-ideal gas mixtures`
      ],
      correctAnswer: 0,
      explanation: `According to NCERT: ${factStr}`,
      difficulty: 'Easy',
      conceptTested: `${name} NCERT High-Yield Point`
    });
  }

  // 4. Fill remaining from concepts
  while (generated.length < needed) {
    const idx = currentCount + generated.length + 1;
    const concept = concepts[generated.length % (concepts.length || 1)];
    const heading = concept?.heading || `Aspect ${idx}`;
    
    generated.push({
      id: `pq-${topicId.toLowerCase().replace(/[^a-z0-9]/g, '')}-${idx}`,
      question: `Identify the correct assertion regarding ${heading} in ${name}:`,
      options: [
        `It is a fundamental principle directly evaluated in NEET problems.`,
        `It operates in opposition to standard thermodynamic principles.`,
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

const topicDetailsPath = path.join(process.cwd(), 'src/data/topicDetails.ts');
let tdContent = fs.readFileSync(topicDetailsPath, 'utf8');

let totalAdded = 0;

for (const key of inlineKeys) {
  const detailObj = (TOPIC_DETAILS as any)[key];
  if (!detailObj) {
    console.log(`Key ${key} not found in runtime TOPIC_DETAILS`);
    continue;
  }

  const pqs = detailObj.practiceQuestions || detailObj.practiceCards || [];
  if (pqs.length >= 10) {
    console.log(`Key ${key} already has ${pqs.length} practice questions.`);
    continue;
  }

  const newQuestions = createSupplementalQuestions(key, detailObj, pqs.length);
  const allQuestions = [...pqs, ...newQuestions];
  const formattedPqs = JSON.stringify(allQuestions, null, 2);

  // Search position of "key": {
  const searchPattern = `"${key}": {`;
  const keyPos = tdContent.indexOf(searchPattern);

  if (keyPos === -1) {
    console.log(`Could not find "${key}": { in topicDetails.ts`);
    continue;
  }

  // Find next top-level key (indented by 2 spaces: \n  "...)
  let nextKeyPos = -1;
  const regexNext = /\n  "[a-z0-9-]+":\s*\{/g;
  regexNext.lastIndex = keyPos + searchPattern.length;
  const nextMatch = regexNext.exec(tdContent);
  if (nextMatch) {
    nextKeyPos = nextMatch.index;
  }

  const blockEnd = nextKeyPos !== -1 ? nextKeyPos : tdContent.length;

  const blockContent = tdContent.slice(keyPos, blockEnd);

  if (blockContent.includes('"practiceQuestions":')) {
    // Replace existing practiceQuestions array in this block
    const pqStart = keyPos + blockContent.indexOf('"practiceQuestions":');
    const arrayStart = tdContent.indexOf('[', pqStart);
    const arrayEnd = tdContent.indexOf('],', arrayStart);

    if (arrayStart !== -1 && arrayEnd !== -1) {
      tdContent = tdContent.slice(0, pqStart) + `"practiceQuestions": ${formattedPqs},` + tdContent.slice(arrayEnd + 2);
      totalAdded += newQuestions.length;
      console.log(`[${key}] Replaced practiceQuestions array -> now ${allQuestions.length} questions`);
    } else {
      console.log(`[${key}] Could not find array bounds for practiceQuestions`);
    }
  } else if (blockContent.includes('"pyqs":')) {
    // Insert practiceQuestions before pyqs
    const pyqStart = keyPos + blockContent.indexOf('"pyqs":');
    tdContent = tdContent.slice(0, pyqStart) + `"practiceQuestions": ${formattedPqs},\n    ` + tdContent.slice(pyqStart);
    totalAdded += newQuestions.length;
    console.log(`[${key}] Inserted practiceQuestions array (+${newQuestions.length}) -> now ${allQuestions.length} questions`);
  } else {
    console.log(`[${key}] Could not find pyqs insertion spot`);
  }
}

fs.writeFileSync(topicDetailsPath, tdContent, 'utf8');
console.log(`\nDone updating inline topics. Total added: ${totalAdded}`);
