// Complete 500 MCQs for Alcohols, Phenols and Ethers (Class 12 Chemistry)
import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { ALCOHOLS_PHENOLS_ETHERS_PART1_MCQS } from './alcoholsPhenolsEthersPart1';
import { ALCOHOLS_PHENOLS_ETHERS_PART2_MCQS } from './alcoholsPhenolsEthersPart2';
import { ALCOHOLS_PHENOLS_ETHERS_PART3_MCQS } from './alcoholsPhenolsEthersPart3';
import { ALCOHOLS_PHENOLS_ETHERS_PART4_MCQS } from './alcoholsPhenolsEthersPart4';

export const ALCOHOLS_PHENOLS_ETHERS_MCQS: ChapterwiseMCQ[] = [
  ...ALCOHOLS_PHENOLS_ETHERS_PART1_MCQS,
  ...ALCOHOLS_PHENOLS_ETHERS_PART2_MCQS,
  ...ALCOHOLS_PHENOLS_ETHERS_PART3_MCQS,
  ...ALCOHOLS_PHENOLS_ETHERS_PART4_MCQS,
];

export const ALCOHOLS_PHENOLS_ETHERS_STATS = {
  chapterId: 'alcohols-phenols-ethers',
  chapterTitle: 'Alcohols, Phenols and Ethers',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
};
