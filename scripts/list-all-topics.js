import fs from 'fs';

const neetData = fs.readFileSync('src/data/neetData.ts', 'utf8');

// match all keys inside TOPICS = { ... }
const topicBlock = neetData.slice(neetData.indexOf('export const TOPICS'));

const matches = [...topicBlock.matchAll(/^\s*["']([^"']+)["']\s*:\s*\{/gm)];

console.log(`Found ${matches.length} topics defined in TOPICS dictionary in neetData.ts:`);
const ids = matches.map(m => m[1]);
console.log(ids.join(', '));
