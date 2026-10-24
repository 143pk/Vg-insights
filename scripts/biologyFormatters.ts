import fs from 'fs';
import path from 'path';

interface RawQ {
  q: string;
  opts: [string, string, string, string];
  ans: 'A' | 'B' | 'C' | 'D';
  topic: string;
  topicId: string;
  subtopic: string;
  concept: string;
  step: string;
  whyWrong: string;
  diff: 'Easy' | 'Medium' | 'Hard';
}

const CHAPTER_ID = 'sexual-repro-flowering-plants';
const CHAPTER_TITLE = 'Sexual Reproduction in Flowering Plants';

export function formatQuestion(q: RawQ, num: number) {
  const letters = ['A', 'B', 'C', 'D'];
  const correctIdx = letters.indexOf(q.ans);
  const optionsObj = {
    A: q.opts[0],
    B: q.opts[1],
    C: q.opts[2],
    D: q.opts[3],
  };

  const explanation = `1. CONCEPT:\n${q.concept}\n\n2. STEP-BY-STEP SOLUTION:\n${q.step}\n\n3. FINAL ANSWER:\nOption ${q.ans}: ${optionsObj[q.ans]}\n\n4. WHY OTHER OPTIONS ARE WRONG:\n${q.whyWrong}`;

  return {
    id: `${CHAPTER_ID}-mcq-${String(num).padStart(3, '0')}`,
    questionNumber: num,
    question: q.q,
    options: optionsObj,
    optionsList: [...q.opts],
    correctAnswer: q.ans,
    correctOption: q.ans,
    correctIndex: correctIdx,
    explanation,
    solutionStructured: {
      concept: q.concept,
      stepByStep: q.step,
      finalAnswer: `Option ${q.ans}: ${optionsObj[q.ans]}`,
      whyOtherOptionsWrong: q.whyWrong
    },
    difficulty: q.diff,
    subject: 'Biology',
    class: '12',
    chapter: CHAPTER_TITLE,
    chapterId: CHAPTER_ID,
    topic: q.topic,
    topicId: q.topicId,
    subtopic: q.subtopic,
    source: 'VG Insights Practice',
    isPYQ: false
  };
}

export function writePartFile(filePath: string, exportName: string, questions: any[]) {
  const content = `import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";\n\nexport const ${exportName}: ChapterwiseMCQ[] = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Saved ${exportName} (${questions.length} questions) to ${filePath}`);
}
