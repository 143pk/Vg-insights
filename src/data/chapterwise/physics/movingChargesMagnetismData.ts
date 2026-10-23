// Moving Charges and Magnetism (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { MOVING_CHARGES_MAGNETISM_PART1_MCQS } from './movingChargesMagnetismPart1Data';
import { MOVING_CHARGES_MAGNETISM_PART2_MCQS } from './movingChargesMagnetismPart2Data';
import { MOVING_CHARGES_MAGNETISM_PART3_MCQS } from './movingChargesMagnetismPart3Data';
import { MOVING_CHARGES_MAGNETISM_PART4_MCQS } from './movingChargesMagnetismPart4Data';

export const MOVING_CHARGES_MAGNETISM_MCQS: ChapterMcq[] = [
  ...MOVING_CHARGES_MAGNETISM_PART1_MCQS,
  ...MOVING_CHARGES_MAGNETISM_PART2_MCQS,
  ...MOVING_CHARGES_MAGNETISM_PART3_MCQS,
  ...MOVING_CHARGES_MAGNETISM_PART4_MCQS,
];
