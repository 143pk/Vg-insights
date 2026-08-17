import fs from 'fs';
import path from 'path';

// Read topicDetails.ts
const tdPath = 'src/data/topicDetails.ts';
const tdContent = fs.readFileSync(tdPath, 'utf8');

// Also scan all files in src/data/topics/
const topicsDir = 'src/data/topics';
const files = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));

console.log(`Found ${files.length} topic files in ${topicsDir}.`);

const results = [];

for (const file of files) {
  const filePath = path.join(topicsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // get exported const name or id
  const constMatch = content.match(/export const ([a-zA-A0-9_]+)/);
  const constName = constMatch ? constMatch[1] : file;

  // find practiceQuestions array
  let count = 0;
  const pqMatch = content.match(/practiceQuestions\s*:\s*\[([\s\S]*?)\]\s*,\s*(?:pyqs|previousYearQuestions|pyqAnalysis)/);
  if (pqMatch) {
    const qMatches = pqMatch[1].match(/questionText\s*:/g) || pqMatch[1].match(/question\s*:/g);
    count = qMatches ? qMatches.length : 0;
  }

  results.push({
    file,
    constName,
    count
  });
}

console.log("\nSummary of practice question counts:");
let totalLessThan10 = 0;
for (const r of results) {
  if (r.count < 10) {
    totalLessThan10++;
    console.log(`- ${r.file} (${r.constName}): ${r.count} questions`);
  }
}

console.log(`\nTotal topic files with < 10 questions: ${totalLessThan10} out of ${results.length}`);
