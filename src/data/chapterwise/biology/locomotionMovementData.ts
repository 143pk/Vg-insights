// Locomotion and Movement (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { LOCOMOTION_MOVEMENT_PART1_MCQS } from './locomotionMovementPart1Data';
import { LOCOMOTION_MOVEMENT_PART2_MCQS } from './locomotionMovementPart2Data';
import { LOCOMOTION_MOVEMENT_PART3_MCQS } from './locomotionMovementPart3Data';
import { LOCOMOTION_MOVEMENT_PART4_MCQS } from './locomotionMovementPart4Data';

export const LOCOMOTION_MOVEMENT_MCQS: ChapterMcq[] = [
  ...LOCOMOTION_MOVEMENT_PART1_MCQS,
  ...LOCOMOTION_MOVEMENT_PART2_MCQS,
  ...LOCOMOTION_MOVEMENT_PART3_MCQS,
  ...LOCOMOTION_MOVEMENT_PART4_MCQS,
];
