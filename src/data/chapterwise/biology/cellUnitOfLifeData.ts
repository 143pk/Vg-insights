// Cell: The Unit of Life (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { CELL_UNIT_OF_LIFE_PART1_MCQS } from './cellUnitOfLifePart1Data';
import { CELL_UNIT_OF_LIFE_PART2_MCQS } from './cellUnitOfLifePart2Data';
import { CELL_UNIT_OF_LIFE_PART3_MCQS } from './cellUnitOfLifePart3Data';
import { CELL_UNIT_OF_LIFE_PART4_MCQS } from './cellUnitOfLifePart4Data';

export const CELL_UNIT_OF_LIFE_MCQS: ChapterMcq[] = [
  ...CELL_UNIT_OF_LIFE_PART1_MCQS,
  ...CELL_UNIT_OF_LIFE_PART2_MCQS,
  ...CELL_UNIT_OF_LIFE_PART3_MCQS,
  ...CELL_UNIT_OF_LIFE_PART4_MCQS,
];
