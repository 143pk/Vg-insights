// Neural Control and Coordination (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { NEURAL_CONTROL_COORDINATION_PART1_MCQS } from './neuralControlCoordinationPart1Data';
import { NEURAL_CONTROL_COORDINATION_PART2_MCQS } from './neuralControlCoordinationPart2Data';
import { NEURAL_CONTROL_COORDINATION_PART3_MCQS } from './neuralControlCoordinationPart3Data';
import { NEURAL_CONTROL_COORDINATION_PART4_MCQS } from './neuralControlCoordinationPart4Data';

export const NEURAL_CONTROL_COORDINATION_MCQS: ChapterMcq[] = [
  ...NEURAL_CONTROL_COORDINATION_PART1_MCQS,
  ...NEURAL_CONTROL_COORDINATION_PART2_MCQS,
  ...NEURAL_CONTROL_COORDINATION_PART3_MCQS,
  ...NEURAL_CONTROL_COORDINATION_PART4_MCQS,
];
