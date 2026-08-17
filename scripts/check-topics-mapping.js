import fs from 'fs';

// Let's import neetData or parse TOPICS from neetData.ts
const neetDataContent = fs.readFileSync('src/data/neetData.ts', 'utf8');

// Match topic IDs in TOPICS object in neetData.ts
const topicMatches = [...neetDataContent.matchAll(/^\s*["']([^"']+)["']\s*:\s*\{[\s\S]*?id:\s*["']([^"']+)["']/gm)];

console.log(`Found ${topicMatches.length} topics in TOPICS dictionary.`);

// Read topicDetails.ts
const tdContent = fs.readFileSync('src/data/topicDetails.ts', 'utf8');

// Also scan src/data/topics/*.ts
const topicsDir = 'src/data/topics';
const topicFiles = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));

// Map of file -> question count
const fileCounts = {};
for (const f of topicFiles) {
  const content = fs.readFileSync(`${topicsDir}/${f}`, 'utf8');
  const pqMatch = content.match(/practiceQuestions\s*:\s*\[([\s\S]*?)\]\s*,\s*(?:pyqs|previousYearQuestions|pyqAnalysis)/);
  let count = 0;
  if (pqMatch) {
    const qMatches = pqMatch[1].match(/(?:questionText|question)\s*:/g);
    count = qMatches ? qMatches.length : 0;
  }
  fileCounts[f] = count;
}

console.log("Topic files audit done.");
