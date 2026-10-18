import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { ANATOMY_FLOWERING_PLANTS_PART1_MCQS } from './anatomyFloweringPlantsPart1';
import { ANATOMY_FLOWERING_PLANTS_PART2_MCQS } from './anatomyFloweringPlantsPart2';
import { ANATOMY_FLOWERING_PLANTS_PART3_MCQS } from './anatomyFloweringPlantsPart3';
import { ANATOMY_FLOWERING_PLANTS_PART4_MCQS } from './anatomyFloweringPlantsPart4';

export const ANATOMY_FLOWERING_PLANTS_MCQS: ChapterwiseMCQ[] = [
  ...ANATOMY_FLOWERING_PLANTS_PART1_MCQS,
  ...ANATOMY_FLOWERING_PLANTS_PART2_MCQS,
  ...ANATOMY_FLOWERING_PLANTS_PART3_MCQS,
  ...ANATOMY_FLOWERING_PLANTS_PART4_MCQS,
];

export const ANATOMY_FLOWERING_PLANTS_STATS = {
  chapterId: 'anatomy-flowering-plants',
  chapterTitle: 'Anatomy of Flowering Plants',
  subject: 'Biology',
  class: '11',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
