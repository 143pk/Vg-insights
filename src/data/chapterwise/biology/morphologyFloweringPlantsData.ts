import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { MORPHOLOGY_FLOWERING_PLANTS_PART1_MCQS } from './morphologyFloweringPlantsPart1';
import { MORPHOLOGY_FLOWERING_PLANTS_PART2_MCQS } from './morphologyFloweringPlantsPart2';
import { MORPHOLOGY_FLOWERING_PLANTS_PART3_MCQS } from './morphologyFloweringPlantsPart3';
import { MORPHOLOGY_FLOWERING_PLANTS_PART4_MCQS } from './morphologyFloweringPlantsPart4';

export const MORPHOLOGY_FLOWERING_PLANTS_MCQS: ChapterwiseMCQ[] = [
  ...MORPHOLOGY_FLOWERING_PLANTS_PART1_MCQS,
  ...MORPHOLOGY_FLOWERING_PLANTS_PART2_MCQS,
  ...MORPHOLOGY_FLOWERING_PLANTS_PART3_MCQS,
  ...MORPHOLOGY_FLOWERING_PLANTS_PART4_MCQS,
];

export const MORPHOLOGY_FLOWERING_PLANTS_STATS = {
  chapterId: 'morphology-flowering-plants',
  chapterTitle: 'Morphology of Flowering Plants',
  subject: 'Biology',
  class: '11',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
