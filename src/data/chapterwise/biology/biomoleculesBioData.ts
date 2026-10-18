// Biomolecules (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { BIOMOLECULES_BIO_PART1_MCQS } from './biomoleculesBioPart1Data';
import { BIOMOLECULES_BIO_PART2_MCQS } from './biomoleculesBioPart2Data';
import { BIOMOLECULES_BIO_PART3_MCQS } from './biomoleculesBioPart3Data';
import { BIOMOLECULES_BIO_PART4_MCQS } from './biomoleculesBioPart4Data';

export const BIOMOLECULES_BIO_MCQS: ChapterMcq[] = [
  ...BIOMOLECULES_BIO_PART1_MCQS,
  ...BIOMOLECULES_BIO_PART2_MCQS,
  ...BIOMOLECULES_BIO_PART3_MCQS,
  ...BIOMOLECULES_BIO_PART4_MCQS,
];
