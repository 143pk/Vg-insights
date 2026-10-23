// Complete 500 MCQs for Chemical Kinetics (Class 12 Chemistry)
import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { CHEMICAL_KINETICS_PART1_MCQS } from './chemicalKineticsPart1';
import { CHEMICAL_KINETICS_PART2_MCQS } from './chemicalKineticsPart2';
import { CHEMICAL_KINETICS_PART3_MCQS } from './chemicalKineticsPart3';
import { CHEMICAL_KINETICS_PART4_MCQS } from './chemicalKineticsPart4';

export const CHEMICAL_KINETICS_MCQS: ChapterwiseMCQ[] = [
  ...CHEMICAL_KINETICS_PART1_MCQS,
  ...CHEMICAL_KINETICS_PART2_MCQS,
  ...CHEMICAL_KINETICS_PART3_MCQS,
  ...CHEMICAL_KINETICS_PART4_MCQS,
];

export const CHEMICAL_KINETICS_STATS = {
  chapterId: 'chemical-kinetics',
  chapterTitle: 'Chemical Kinetics',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
};
