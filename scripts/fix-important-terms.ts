import fs from 'fs';
import path from 'path';

function fixImportantTermsInTopics() {
  const topicsDir = path.join(process.cwd(), 'src/data/topics');
  const files = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));

  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(topicsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace importantTerms where array elements are raw strings like "term: def" or raw strings
    // Look for importantTerms: [ "string1", "string2" ]
    const match = content.match(/importantTerms:\s*\[\s*([\s\S]*?)\s*\]\s*,/);
    if (match) {
      const inner = match[1];
      // Check if inner contains raw strings starting with quotes not starting with {
      if (inner.includes('"') && !inner.trim().startsWith('{')) {
        try {
          // Parse string items
          const itemsStr = `[${inner}]`;
          const parsed = eval(itemsStr); // Safe in script
          if (Array.isArray(parsed)) {
            const fixedObjects = parsed.map((item: any) => {
              if (typeof item === 'string') {
                const parts = item.split(':');
                if (parts.length > 1) {
                  return {
                    term: parts[0].trim(),
                    definition: parts.slice(1).join(':').trim(),
                    neetNote: 'High-yield term for NEET UG examination.'
                  };
                }
                return {
                  term: item,
                  definition: `Key technical term in NCERT syllabus required for NEET UG examination.`,
                  neetNote: 'Essential concept for NEET MCQs.'
                };
              }
              return item;
            });

            const newTermsCode = `importantTerms: ${JSON.stringify(fixedObjects, null, 4)},`;
            content = content.replace(match[0], newTermsCode);
            fs.writeFileSync(filePath, content, 'utf-8');
            fixedCount++;
          }
        } catch (e) {
          // Ignore eval error if complex
        }
      }
    }
  }

  console.log(`Fixed importantTerms in ${fixedCount} topic files.`);
}

fixImportantTermsInTopics();
