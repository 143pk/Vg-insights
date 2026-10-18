import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { PLANT_KINGDOM_PART1_MCQS } from './plantKingdomPart1';
import { PLANT_KINGDOM_PART2_MCQS } from './plantKingdomPart2';
import { PLANT_KINGDOM_PART3_MCQS } from './plantKingdomPart3';
import { PLANT_KINGDOM_PART4_MCQS } from './plantKingdomPart4';

export const PLANT_KINGDOM_MCQS: ChapterwiseMCQ[] = [
  ...PLANT_KINGDOM_PART1_MCQS,
  ...PLANT_KINGDOM_PART2_MCQS,
  ...PLANT_KINGDOM_PART3_MCQS,
  ...PLANT_KINGDOM_PART4_MCQS,
];

export const PLANT_KINGDOM_STATS = {
  chapterId: 'plant-kingdom',
  chapterTitle: 'Plant Kingdom',
  subject: 'Biology',
  class: '11',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
