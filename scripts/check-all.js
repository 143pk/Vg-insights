import fs from 'fs';

// Let's parse TOPICS from neetData or physicsData/chemistryData/biologyData
// We can scan src/data/neetData.ts, physicsData.ts, chemistryData.ts, biologyData.ts
// or scan all topic objects

const topicFiles = fs.readdirSync('src/data/topics').filter(f => f.endsWith('.ts'));

console.log(`Found ${topicFiles.length} files in src/data/topics`);

// Let's write a script that checks practiceQuestions in all 97 topic files
for (const f of topicFiles) {
  const content = fs.readFileSync(`src/data/topics/${f}`, 'utf8');
  const pqMatch = content.match(/practiceQuestions\s*:\s*\[([\s\S]*?)\]\s*,\s*(?:pyqs|previousYearQuestions|pyqAnalysis)/);
  let count = 0;
  if (pqMatch) {
    const questions = pqMatch[1].match(/questionText|question|id:/g);
    count = questions ? Math.floor(questions.length / 2) : 0; // heuristic
  }
}
