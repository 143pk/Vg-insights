// Complete 500 MCQs for Haloalkanes and Haloarenes (Class 12 Chemistry)
import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { HALOALKANES_HALOARENES_PART1_MCQS } from './haloalkanesHaloarenesPart1';
import { HALOALKANES_HALOARENES_PART2_MCQS } from './haloalkanesHaloarenesPart2';
import { HALOALKANES_HALOARENES_PART3_MCQS } from './haloalkanesHaloarenesPart3';
import { HALOALKANES_HALOARENES_PART4_MCQS } from './haloalkanesHaloarenesPart4';

export const HALOALKANES_HALOARENES_MCQS: ChapterwiseMCQ[] = [
  ...HALOALKANES_HALOARENES_PART1_MCQS,
  ...HALOALKANES_HALOARENES_PART2_MCQS,
  ...HALOALKANES_HALOARENES_PART3_MCQS,
  ...HALOALKANES_HALOARENES_PART4_MCQS,
];

export const HALOALKANES_HALOARENES_STATS = {
  chapterId: 'haloalkanes-haloarenes',
  chapterTitle: 'Haloalkanes and Haloarenes',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
};
