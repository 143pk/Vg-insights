import * as fs from 'fs';
import * as path from 'path';

// Helper to format question files
export function writeTsFile(filePath: string, varName: string, items: any[], comment: string) {
  const content = `// ${comment}
// Generated for NEET UG 2026 Authentic Paper Dataset
import { PYQQuestion } from './pyqDatabase';

export const ${varName}: PYQQuestion[] = ${JSON.stringify(items, null, 2)};
`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Wrote ${items.length} items to ${filePath}`);
}
