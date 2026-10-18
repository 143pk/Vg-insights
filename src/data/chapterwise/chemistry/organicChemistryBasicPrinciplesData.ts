import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { ORGANIC_CHEMISTRY_BASIC_PRINCIPLES_PART1_MCQS } from './organicChemistryBasicPrinciplesPart1';
import { ORGANIC_CHEMISTRY_BASIC_PRINCIPLES_PART2_MCQS } from './organicChemistryBasicPrinciplesPart2';
import { ORGANIC_CHEMISTRY_BASIC_PRINCIPLES_PART3_MCQS } from './organicChemistryBasicPrinciplesPart3';
import { ORGANIC_CHEMISTRY_BASIC_PRINCIPLES_PART4_MCQS } from './organicChemistryBasicPrinciplesPart4';

export const ORGANIC_CHEMISTRY_BASIC_PRINCIPLES_MCQS: ChapterwiseMCQ[] = [
  ...ORGANIC_CHEMISTRY_BASIC_PRINCIPLES_PART1_MCQS,
  ...ORGANIC_CHEMISTRY_BASIC_PRINCIPLES_PART2_MCQS,
  ...ORGANIC_CHEMISTRY_BASIC_PRINCIPLES_PART3_MCQS,
  ...ORGANIC_CHEMISTRY_BASIC_PRINCIPLES_PART4_MCQS,
];

export const ORGANIC_CHEMISTRY_BASIC_PRINCIPLES_STATS = {
  chapterId: 'organic-chemistry-basic-principles',
  chapterTitle: 'Organic Chemistry: Some Basic Principles & Techniques',
  subject: 'Chemistry',
  class: '11',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 26,
  practiceCount: 474,
};
