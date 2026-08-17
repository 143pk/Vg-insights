import fs from 'fs';
import path from 'path';

const topicsDir = 'src/data/topics';
const files = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));

console.log(`=== AUDITING ALL ${files.length} TOPIC DETAIL FILES ===\n`);

const summary = [];

for (const file of files) {
  const filePath = path.join(topicsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract export const name
  const exportMatch = content.match(/export const ([a-zA-Z0-9_]+)/);
  const exportName = exportMatch ? exportMatch[1] : file;

  // Extract ID
  const idMatch = content.match(/id:\s*["']([^"']+)["']/);
  const topicId = idMatch ? idMatch[1] : exportName;

  // Find practiceQuestions
  let count = 0;
  const pqMatch = content.match(/practiceQuestions\s*:\s*\[([\s\S]*?)\]\s*,\s*(?:pyqs|previousYearQuestions|pyqAnalysis)/);
  if (pqMatch) {
    const pqContent = pqMatch[1];
    // Count objects in array. Each question object has id: or questionText: or question:
    const qMatches = pqContent.match(/(?:questionText|question)\s*:/g);
    count = qMatches ? qMatches.length : 0;
  }

  summary.push({
    file,
    exportName,
    topicId,
    count
  });
}

summary.sort((a, b) => a.count - b.count);

let totalMissing = 0;
let topicsUnder10 = 0;

for (const item of summary) {
  const needed = Math.max(0, 10 - item.count);
  totalMissing += needed;
  if (item.count < 10) {
    topicsUnder10++;
    console.log(`File: ${item.file.padEnd(48)} | Topic ID: ${item.topicId.padEnd(40)} | Current: ${item.count} | Needed: +${needed}`);
  }
}

console.log(`\n==================================================`);
console.log(`Total topics with < 10 practice questions: ${topicsUnder10} / ${files.length}`);
console.log(`Total new practice questions to add: ${totalMissing}`);
console.log(`==================================================\n`);
