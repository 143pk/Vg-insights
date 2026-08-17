import fs from 'fs';

const files = [
  'src/data/chemistryData.ts',
  'src/data/physicsData.ts',
  'src/data/biologyData.ts',
  'src/data/topicDetails.ts',
  'src/data/neetData.ts'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  let count = 0;
  lines.forEach((line, idx) => {
    let cleanLine = line.replace(/\\n/g, '').replace(/\\"/g, '').replace(/\\'/g, '').replace(/\\`/g, '');
    if (cleanLine.includes('\\') || cleanLine.includes('$')) {
      count++;
      if (count <= 25) {
        console.log(`${file}:${idx+1}: ${cleanLine.trim().slice(0, 110)}`);
      }
    }
  });
  console.log(`---> Total LaTeX lines in ${file}: ${count}\n`);
});
