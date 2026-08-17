import fs from 'fs';
import path from 'path';

// Let's import or inspect topic registry
const topicsDir = 'src/data/topics';
const files = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));

console.log(`Checking ${files.length} topic files in ${topicsDir}...`);

let defCount = 0;
let totalDeficit = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(topicsDir, file), 'utf8');
  const idMatch = content.match(/id:\s*['"]([^'"]+)['"]/);
  const topicId = idMatch ? idMatch[1] : file;

  // Find practiceQuestions array
  const pqMatch = content.match(/practiceQuestions:\s*\[([\s\S]*?)\]\s*,\s*(?:pyqs|previousYearQuestions|pyqAnalysis)/);
  let count = 0;
  if (pqMatch) {
    const questions = pqMatch[1].match(/questionText:/g);
    count = questions ? questions.length : 0;
  }

  if (count < 10) {
    console.log(`[${file}] ${topicId}: ${count} practice questions (Deficit: ${10 - count})`);
    defCount++;
    totalDeficit += (10 - count);
  }
}

console.log(`\nSummary in src/data/topics: ${defCount} files have < 10 questions. Total missing: ${totalDeficit}`);

// Check topicDetails.ts
const tdPath = 'src/data/topicDetails.ts';
if (fs.existsSync(tdPath)) {
  const content = fs.readFileSync(tdPath, 'utf8');
  // Match each topic block
  const topicRegex = /"([^"]+)":\s*\{[\s\S]*?"practiceQuestions":\s*\[([\s\S]*?)\]\s*,\s*"(?:pyqs|previousYearQuestions|pyqAnalysis)"/g;
  let match;
  console.log(`\nChecking ${tdPath}...`);
  while ((match = topicRegex.exec(content)) !== null) {
    const key = match[1];
    const pqBlock = match[2];
    const qMatches = pqBlock.match(/questionText:/g) || pqBlock.match(/"questionText":/g);
    const count = qMatches ? qMatches.length : 0;
    if (count < 10) {
      console.log(`[topicDetails.ts] ${key}: ${count} practice questions`);
    }
  }
}
