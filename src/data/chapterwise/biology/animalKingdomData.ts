import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { ANIMAL_KINGDOM_PART1_MCQS } from './animalKingdomPart1';
import { ANIMAL_KINGDOM_PART2_MCQS } from './animalKingdomPart2';
import { ANIMAL_KINGDOM_PART3_MCQS } from './animalKingdomPart3';
import { ANIMAL_KINGDOM_PART4_MCQS } from './animalKingdomPart4';

export const ANIMAL_KINGDOM_MCQS: ChapterwiseMCQ[] = [
  ...ANIMAL_KINGDOM_PART1_MCQS,
  ...ANIMAL_KINGDOM_PART2_MCQS,
  ...ANIMAL_KINGDOM_PART3_MCQS,
  ...ANIMAL_KINGDOM_PART4_MCQS,
];

export const ANIMAL_KINGDOM_STATS = {
  chapterId: 'animal-kingdom',
  chapterTitle: 'Animal Kingdom',
  subject: 'Biology',
  class: '11',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
