// Ray Optics and Optical Instruments (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { RAY_OPTICS_PART1_MCQS } from './rayOpticsPart1Data';
import { RAY_OPTICS_PART2_MCQS } from './rayOpticsPart2Data';
import { RAY_OPTICS_PART3_MCQS } from './rayOpticsPart3Data';
import { RAY_OPTICS_PART4_MCQS } from './rayOpticsPart4Data';

export const RAY_OPTICS_MCQS: ChapterMcq[] = [
  ...RAY_OPTICS_PART1_MCQS,
  ...RAY_OPTICS_PART2_MCQS,
  ...RAY_OPTICS_PART3_MCQS,
  ...RAY_OPTICS_PART4_MCQS,
];
