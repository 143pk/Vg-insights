// Breathing and Exchange of Gases (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { BREATHING_EXCHANGE_GASES_PART1_MCQS } from './breathingExchangeGasesPart1Data';
import { BREATHING_EXCHANGE_GASES_PART2_MCQS } from './breathingExchangeGasesPart2Data';
import { BREATHING_EXCHANGE_GASES_PART3_MCQS } from './breathingExchangeGasesPart3Data';
import { BREATHING_EXCHANGE_GASES_PART4_MCQS } from './breathingExchangeGasesPart4Data';

export const BREATHING_EXCHANGE_GASES_MCQS: ChapterMcq[] = [
  ...BREATHING_EXCHANGE_GASES_PART1_MCQS,
  ...BREATHING_EXCHANGE_GASES_PART2_MCQS,
  ...BREATHING_EXCHANGE_GASES_PART3_MCQS,
  ...BREATHING_EXCHANGE_GASES_PART4_MCQS,
];
