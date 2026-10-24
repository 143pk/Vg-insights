import fs from 'fs';
import path from 'path';
import { ChapterwiseMCQ } from '../src/types/chapterwiseMcq';

const CHAPTER_ID = 'sexual-repro-flowering-plants';
const CHAPTER_TITLE = 'Sexual Reproduction in Flowering Plants';
const SUBJECT = 'Biology';
const CLASS_LEVEL = '12';

interface QuestionDef {
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

export function buildMCQ(def: QuestionDef, num: number): ChapterwiseMCQ {
  const letters: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const correctIdx = letters.indexOf(def.ans);
  const optionsObj = {
    A: def.opts[0],
    B: def.opts[1],
    C: def.opts[2],
    D: def.opts[3],
  };

  const explanation = `1. CONCEPT:\n${def.concept}\n\n2. STEP-BY-STEP SOLUTION:\n${def.step}\n\n3. FINAL ANSWER:\nOption ${def.ans}: ${optionsObj[def.ans]}\n\n4. WHY OTHER OPTIONS ARE WRONG:\n${def.whyWrong}`;

  return {
    id: `${CHAPTER_ID}-mcq-${String(num).padStart(3, '0')}`,
    questionNumber: num,
    question: def.q,
    options: optionsObj,
    optionsList: [...def.opts],
    correctAnswer: def.ans,
    correctOption: def.ans,
    correctIndex: correctIdx,
    explanation,
    solutionStructured: {
      concept: def.concept,
      stepByStep: def.step,
      finalAnswer: `Option ${def.ans}: ${optionsObj[def.ans]}`,
      whyOtherOptionsWrong: def.whyWrong
    },
    difficulty: def.diff,
    subject: SUBJECT,
    class: CLASS_LEVEL,
    chapter: CHAPTER_TITLE,
    chapterId: CHAPTER_ID,
    topic: def.topic,
    topicId: def.topicId,
    subtopic: def.subtopic,
    source: 'VG Insights Practice',
    isPYQ: false
  };
}
