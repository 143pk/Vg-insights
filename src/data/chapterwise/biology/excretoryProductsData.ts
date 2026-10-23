// Excretory Products and Their Elimination (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { EXCRETORY_PRODUCTS_PART1_MCQS } from './excretoryProductsPart1Data';
import { EXCRETORY_PRODUCTS_PART2_MCQS } from './excretoryProductsPart2Data';
import { EXCRETORY_PRODUCTS_PART3_MCQS } from './excretoryProductsPart3Data';
import { EXCRETORY_PRODUCTS_PART4_MCQS } from './excretoryProductsPart4Data';

export const EXCRETORY_PRODUCTS_MCQS: ChapterMcq[] = [
  ...EXCRETORY_PRODUCTS_PART1_MCQS,
  ...EXCRETORY_PRODUCTS_PART2_MCQS,
  ...EXCRETORY_PRODUCTS_PART3_MCQS,
  ...EXCRETORY_PRODUCTS_PART4_MCQS,
];
