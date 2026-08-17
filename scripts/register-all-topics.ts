import fs from 'fs';
import path from 'path';

function registerAll() {
  const topicsDir = path.join(process.cwd(), 'src/data/topics');
  const files = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));

  console.log(`Found ${files.length} files in src/data/topics.`);

  const topicDetailsPath = path.join(process.cwd(), 'src/data/topicDetails.ts');
  let content = fs.readFileSync(topicDetailsPath, 'utf-8');

  const imports: string[] = [];
  const mapEntries: string[] = [];

  for (const file of files) {
    const filePath = path.join(topicsDir, file);
    const fileText = fs.readFileSync(filePath, 'utf-8');

    const varMatch = fileText.match(/export const (\w+): DetailedTopicContent/);
    const idMatch = fileText.match(/topicId:\s*['"]([^'"]+)['"]/);

    if (varMatch && idMatch) {
      const varName = varMatch[1];
      const topicId = idMatch[1];

      if (!content.includes(`from "./topics/${file.replace('.ts', '')}"`) && !content.includes(`from './topics/${file.replace('.ts', '')}'`)) {
        imports.push(`import { ${varName} } from './topics/${file.replace('.ts', '')}';`);
      }

      if (!content.includes(`"${topicId}":`) && !content.includes(`'${topicId}':`)) {
        mapEntries.push(`  "${topicId}": ${varName},`);
      }
    }
  }

  console.log(`Adding ${imports.length} imports and ${mapEntries.length} map entries.`);

  const exportDecl = 'export const TOPIC_DETAILS: Record<string, any> = {';
  const exportIndex = content.indexOf(exportDecl);

  if (exportIndex !== -1) {
    if (imports.length > 0) {
      content = content.slice(0, exportIndex) + imports.join('\n') + '\n\n' + content.slice(exportIndex);
    }

    const newExportIdx = content.indexOf(exportDecl);
    if (mapEntries.length > 0 && newExportIdx !== -1) {
      const insertPos = newExportIdx + exportDecl.length;
      content = content.slice(0, insertPos) + '\n' + mapEntries.join('\n') + content.slice(insertPos);
    }
  } else {
    console.error('Could not find export declaration in topicDetails.ts');
  }

  fs.writeFileSync(topicDetailsPath, content, 'utf-8');
  console.log('Successfully updated src/data/topicDetails.ts');
}

registerAll();
