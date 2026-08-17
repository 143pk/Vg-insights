import fs from 'fs';
import path from 'path';

console.log('Fixing and cleaning inline topics in src/data/topicDetails.ts...');

const topicDetailsPath = path.join(process.cwd(), 'src/data/topicDetails.ts');
let tdContent = fs.readFileSync(topicDetailsPath, 'utf8');

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

let fixCount = 0;

for (const key of inlineKeys) {
  const keySearch = `"${key}": {`;
  const keyPos = tdContent.indexOf(keySearch);
  if (keyPos === -1) continue;

  const pqSearch = `"practiceQuestions": [`;
  const pqPos = tdContent.indexOf(pqSearch, keyPos);
  const pyqSearch = `"pyqs": [`;
  const pyqPos = tdContent.indexOf(pyqSearch, keyPos);

  if (pqPos !== -1 && pyqPos !== -1 && pqPos < pyqPos) {
    // Find the last closing bracket of practiceQuestions before pyqPos
    const lastBracketBeforePyq = tdContent.lastIndexOf('],', pyqPos);
    
    // Replace everything between pqPos and pyqPos with a clean single practiceQuestions array
    const dirtySnippet = tdContent.slice(pqPos, pyqPos);
    
    // We match from "practiceQuestions": [ up to the end of the dirty section before "pyqs":
    // Extract all JSON objects inside dirtySnippet
    const objectMatches = [...dirtySnippet.matchAll(/\{\s*"id":[\s\S]*?\}/g)];
    const items: any[] = [];
    for (const m of objectMatches) {
      try {
        const itemObj = JSON.parse(m[0]);
        items.push(itemObj);
      } catch (e) {
        // ignore malformed
      }
    }

    if (items.length > 0) {
      const clean10 = items.slice(0, 10);
      const cleanFormatted = JSON.stringify(clean10, null, 2);
      const replacementText = `"practiceQuestions": ${cleanFormatted},\n    `;

      const before = tdContent.slice(0, pqPos);
      const after = tdContent.slice(pyqPos);
      tdContent = before + replacementText + after;
      fixCount++;
      console.log(`[${key}] Cleaned practiceQuestions array to exactly ${clean10.length} items.`);
    }
  }
}

fs.writeFileSync(topicDetailsPath, tdContent, 'utf8');
console.log(`Finished fixing inline topics. Total fixed: ${fixCount}`);
