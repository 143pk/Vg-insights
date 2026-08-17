import fs from 'fs';
import path from 'path';

// Let's inspect topicDetails.ts by parsing top-level keys inside TOPIC_DETAILS
const content = fs.readFileSync('src/data/topicDetails.ts', 'utf8');

// Find start of TOPIC_DETAILS export
const exportIdx = content.indexOf('export const TOPIC_DETAILS');
if (exportIdx === -1) {
  console.log('TOPIC_DETAILS not found!');
  process.exit(1);
}

const body = content.slice(exportIdx);

// Match all keys in TOPIC_DETAILS object
// Key pattern:  "key-name": { or keyName: { or ...[spread]
const keyMatches = [...body.matchAll(/^\s*(?:"([^"]+)"|([a-zA-Z0-9_$]+))\s*:\s*\{/gm)];

console.log(`Found ${keyMatches.length} top-level keys/sections in TOPIC_DETAILS export.`);

// Let's extract each topic block and count practiceQuestions
const topics = [];

for (let i = 0; i < keyMatches.length; i++) {
  const match = keyMatches[i];
  const key = match[1] || match[2];
  const startPos = match.index;
  const nextPos = i < keyMatches.length - 1 ? keyMatches[i + 1].index : body.length;
  const block = body.slice(startPos, nextPos);

  // Check practiceQuestions in this block
  let pqCount = 0;
  const pqIndex = block.indexOf('practiceQuestions');
  if (pqIndex !== -1) {
    const pqSub = block.slice(pqIndex);
    // find end of array or pyqs
    const qMatches = pqSub.match(/questionText|question/g);
    pqCount = qMatches ? qMatches.length : 0;
  }

  topics.push({ key, count: pqCount });
}

console.log("\n--- TOPICS IN TOPIC_DETAILS WITH < 10 PRACTICE QUESTIONS ---");
let totalDeficit = 0;
let topicCountDeficit = 0;

for (const t of topics) {
  if (t.count < 10) {
    topicCountDeficit++;
    totalDeficit += (10 - t.count);
    console.log(`Topic "${t.key}": ${t.count} questions (Deficit: ${10 - t.count})`);
  }
}

console.log(`\nSummary: ${topicCountDeficit} out of ${topics.length} topics in TOPIC_DETAILS have < 10 practice questions. Total deficit: ${totalDeficit}`);
