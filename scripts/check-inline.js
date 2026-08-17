import fs from 'fs';

const content = fs.readFileSync('src/data/topicDetails.ts', 'utf8');

const inlineKeys = [];
const lines = content.split('\n');
let inExport = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export const TOPIC_DETAILS')) inExport = true;
  if (inExport) {
    const keyMatch = lines[i].match(/^\s*["']([^"']+)["']\s*:\s*\{/);
    if (keyMatch) {
      inlineKeys.push({ key: keyMatch[1], line: i + 1 });
    }
  }
}

console.log('Inline topic keys in topicDetails.ts:', inlineKeys);
