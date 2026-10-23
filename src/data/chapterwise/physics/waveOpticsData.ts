// Wave Optics (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { WAVE_OPTICS_PART1_MCQS } from './waveOpticsPart1Data';
import { WAVE_OPTICS_PART2_MCQS } from './waveOpticsPart2Data';
import { WAVE_OPTICS_PART3_MCQS } from './waveOpticsPart3Data';
import { WAVE_OPTICS_PART4_MCQS } from './waveOpticsPart4Data';

export const WAVE_OPTICS_MCQS: ChapterMcq[] = [
  ...WAVE_OPTICS_PART1_MCQS,
  ...WAVE_OPTICS_PART2_MCQS,
  ...WAVE_OPTICS_PART3_MCQS,
  ...WAVE_OPTICS_PART4_MCQS,
];
