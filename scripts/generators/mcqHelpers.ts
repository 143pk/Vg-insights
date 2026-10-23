import * as fs from 'fs';
import * as path from 'path';

export interface RawMcqInput {
  questionNumber: number;
  chapterId: string;
  chapterTitle: string;
  subject: string;
  class: string;
  topicId: string;
  topicTitle: string;
  subtopic: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctOption: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  idPrefix?: string;
  id?: string;
  questionType?: string;
  source?: string;
  isFlagged?: boolean;
}

export function formatMcq(item: RawMcqInput) {
  const padNum = String(item.questionNumber).padStart(3, '0');
  const id = item.id || `${item.idPrefix}-mcq-${padNum}`;

  return {
    id,
    questionNumber: item.questionNumber,
    chapterId: item.chapterId,
    chapterTitle: item.chapterTitle,
    subject: item.subject,
    class: item.class,
    topicId: item.topicId,
    topicTitle: item.topicTitle,
    subtopic: item.subtopic,
    question: item.question.trim(),
    options: {
      A: item.options.A.trim(),
      B: item.options.B.trim(),
      C: item.options.C.trim(),
      D: item.options.D.trim()
    },
    correctOption: item.correctOption,
    explanation: item.explanation.trim(),
    difficulty: item.difficulty,
    questionType: 'Single Correct MCQ',
    source: 'VG Insights Practice',
    isFlagged: false
  };
}

export function validateBatch(mcqs: any[], expectedCount: number, expectedDifficulty?: string) {
  if (mcqs.length !== expectedCount) {
    throw new Error(`Expected ${expectedCount} questions, got ${mcqs.length}`);
  }

  const seenIds = new Set<string>();
  const seenQText = new Set<string>();
  const optionCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

  for (const q of mcqs) {
    if (!q.id) throw new Error('Missing ID');
    if (seenIds.has(q.id)) throw new Error(`Duplicate ID: ${q.id}`);
    seenIds.add(q.id);

    const normText = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (seenQText.has(normText)) {
      console.warn(`[MCQ Warning] Possible duplicate question text: ${q.question.slice(0, 60)}...`);
    }
    seenQText.add(normText);

    if (!q.question || q.question.trim().length < 10) {
      throw new Error(`Question statement too short in ${q.id}`);
    }

    if (!q.options.A || !q.options.B || !q.options.C || !q.options.D) {
      throw new Error(`Empty option in ${q.id}`);
    }

    if (!['A', 'B', 'C', 'D'].includes(q.correctOption)) {
      throw new Error(`Invalid correctOption in ${q.id}: ${q.correctOption}`);
    }

    optionCounts[q.correctOption]++;

    if (!q.explanation || q.explanation.trim().length < 10) {
      throw new Error(`Explanation too short in ${q.id}`);
    }

    if (expectedDifficulty && q.difficulty !== expectedDifficulty) {
      throw new Error(`Difficulty mismatch in ${q.id}: expected ${expectedDifficulty}, got ${q.difficulty}`);
    }
  }

  console.log(`✓ Validated ${mcqs.length} questions. Option distribution:`, optionCounts);
}

export function writePartFile(
  filePath: string,
  partExportName: string,
  partComment: string,
  mcqs: any[]
) {
  const content = `// ${partComment}
import { ChapterMcq } from '../types';

export const ${partExportName}: ChapterMcq[] = ${JSON.stringify(mcqs, null, 2)};
`;

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Saved ${mcqs.length} questions to ${filePath}`);
}

export function writeChapterIndexFile(
  filePath: string,
  chapterTitleComment: string,
  exportName: string,
  partImports: { exportName: string; fromFile: string }[]
) {
  const importLines = partImports
    .map(p => `import { ${p.exportName} } from './${p.fromFile}';`)
    .join('\n');

  const spreadLines = partImports
    .map(p => `  ...${p.exportName},`)
    .join('\n');

  const content = `// ${chapterTitleComment} (Complete 500 MCQs)
import { ChapterMcq } from '../types';
${importLines}

export const ${exportName}: ChapterMcq[] = [
${spreadLines}
];
`;

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Saved master chapter index to ${filePath}`);
}
