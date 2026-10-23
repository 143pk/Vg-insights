// Body Fluids and Circulation (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { BODY_FLUIDS_CIRCULATION_PART1_MCQS } from './bodyFluidsCirculationPart1Data';
import { BODY_FLUIDS_CIRCULATION_PART2_MCQS } from './bodyFluidsCirculationPart2Data';
import { BODY_FLUIDS_CIRCULATION_PART3_MCQS } from './bodyFluidsCirculationPart3Data';
import { BODY_FLUIDS_CIRCULATION_PART4_MCQS } from './bodyFluidsCirculationPart4Data';

export const BODY_FLUIDS_CIRCULATION_MCQS: ChapterMcq[] = [
  ...BODY_FLUIDS_CIRCULATION_PART1_MCQS,
  ...BODY_FLUIDS_CIRCULATION_PART2_MCQS,
  ...BODY_FLUIDS_CIRCULATION_PART3_MCQS,
  ...BODY_FLUIDS_CIRCULATION_PART4_MCQS,
];
