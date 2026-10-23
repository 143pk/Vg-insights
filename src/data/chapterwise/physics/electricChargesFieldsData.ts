// Electric Charges and Fields (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { ELECTRIC_CHARGES_FIELDS_PART1_MCQS } from './electricChargesFieldsPart1Data';
import { ELECTRIC_CHARGES_FIELDS_PART2_MCQS } from './electricChargesFieldsPart2Data';
import { ELECTRIC_CHARGES_FIELDS_PART3_MCQS } from './electricChargesFieldsPart3Data';
import { ELECTRIC_CHARGES_FIELDS_PART4_MCQS } from './electricChargesFieldsPart4Data';

export const ELECTRIC_CHARGES_FIELDS_MCQS: ChapterMcq[] = [
  ...ELECTRIC_CHARGES_FIELDS_PART1_MCQS,
  ...ELECTRIC_CHARGES_FIELDS_PART2_MCQS,
  ...ELECTRIC_CHARGES_FIELDS_PART3_MCQS,
  ...ELECTRIC_CHARGES_FIELDS_PART4_MCQS,
];
