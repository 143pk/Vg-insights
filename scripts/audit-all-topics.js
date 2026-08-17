import fs from 'fs';
import path from 'path';

// Read topicDetails.ts line by line or parse exported keys
const tdContent = fs.readFileSync('src/data/topicDetails.ts', 'utf8');

// Also check all files in src/data/topics/
const topicsDir = 'src/data/topics';
const topicFiles = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));

console.log(`=== AUDIT SUMMARY ===`);
console.log(`Files in src/data/topics: ${topicFiles.length}`);

// Let's count practice questions in each file in src/data/topics/
const fileStats = [];

for (const file of topicFiles) {
  const filePath = path.join(topicsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // extract ID
  const idMatch = content.match(/id:\s*['"]([^'"]+)['"]/);
  const topicId = idMatch ? idMatch[1] : file.replace('.ts', '');

  // Extract practiceQuestions array contents
  // Let's count items in practiceQuestions: [ ... ]
  let questionCount = 0;
  const pqIndex = content.indexOf('practiceQuestions');
  if (pqIndex !== -1) {
    const afterPq = content.slice(pqIndex);
    // find matching closing bracket or start of pyqs
    const pyqIndex = afterPq.indexOf('pyqs:');
    const pqBlock = pyqIndex !== -1 ? afterPq.slice(0, pyqIndex) : afterPq;
    // count occurrences of question text or id
    const questions = pqBlock.match(/questionText:|question:/g);
    questionCount = questions ? questions.length : 0;
  }

  fileStats.push({ file, topicId, count: questionCount });
}

console.log(`\n--- TOPIC FILES WITH LESS THAN 10 PRACTICE QUESTIONS ---`);
let totalMissing = 0;
fileStats.forEach(stat => {
  if (stat.count < 10) {
    console.log(`${stat.topicId} (${stat.file}): ${stat.count} practice questions (Needs +${10 - stat.count})`);
    totalMissing += (10 - stat.count);
  }
});

console.log(`\nTotal topics needing practice questions: ${fileStats.filter(s => s.count < 10).length} of ${fileStats.length}`);
console.log(`Total missing practice questions in src/data/topics: ${totalMissing}`);
