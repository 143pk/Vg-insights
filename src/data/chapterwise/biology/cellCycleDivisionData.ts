// Cell Cycle and Cell Division (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { CELL_CYCLE_DIVISION_PART1_MCQS } from './cellCycleDivisionPart1Data';
import { CELL_CYCLE_DIVISION_PART2_MCQS } from './cellCycleDivisionPart2Data';
import { CELL_CYCLE_DIVISION_PART3_MCQS } from './cellCycleDivisionPart3Data';
import { CELL_CYCLE_DIVISION_PART4_MCQS } from './cellCycleDivisionPart4Data';

export const CELL_CYCLE_DIVISION_MCQS: ChapterMcq[] = [
  ...CELL_CYCLE_DIVISION_PART1_MCQS,
  ...CELL_CYCLE_DIVISION_PART2_MCQS,
  ...CELL_CYCLE_DIVISION_PART3_MCQS,
  ...CELL_CYCLE_DIVISION_PART4_MCQS,
];
