// Complete 500 MCQs for Coordination Compounds (Class 12 Chemistry)
import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { COORDINATION_COMPOUNDS_PART1_MCQS } from './coordinationCompoundsPart1';
import { COORDINATION_COMPOUNDS_PART2_MCQS } from './coordinationCompoundsPart2';
import { COORDINATION_COMPOUNDS_PART3_MCQS } from './coordinationCompoundsPart3';
import { COORDINATION_COMPOUNDS_PART4_MCQS } from './coordinationCompoundsPart4';

export const COORDINATION_COMPOUNDS_MCQS: ChapterwiseMCQ[] = [
  ...COORDINATION_COMPOUNDS_PART1_MCQS,
  ...COORDINATION_COMPOUNDS_PART2_MCQS,
  ...COORDINATION_COMPOUNDS_PART3_MCQS,
  ...COORDINATION_COMPOUNDS_PART4_MCQS,
];

export const COORDINATION_COMPOUNDS_STATS = {
  chapterId: 'coordination-compounds',
  chapterTitle: 'Coordination Compounds',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
};
