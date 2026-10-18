import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { STRUCTURAL_ORGANISATION_ANIMALS_PART1_MCQS } from './structuralOrganisationAnimalsPart1';
import { STRUCTURAL_ORGANISATION_ANIMALS_PART2_MCQS } from './structuralOrganisationAnimalsPart2';
import { STRUCTURAL_ORGANISATION_ANIMALS_PART3_MCQS } from './structuralOrganisationAnimalsPart3';
import { STRUCTURAL_ORGANISATION_ANIMALS_PART4_MCQS } from './structuralOrganisationAnimalsPart4';

export const STRUCTURAL_ORGANISATION_ANIMALS_MCQS: ChapterwiseMCQ[] = [
  ...STRUCTURAL_ORGANISATION_ANIMALS_PART1_MCQS,
  ...STRUCTURAL_ORGANISATION_ANIMALS_PART2_MCQS,
  ...STRUCTURAL_ORGANISATION_ANIMALS_PART3_MCQS,
  ...STRUCTURAL_ORGANISATION_ANIMALS_PART4_MCQS,
];

export const STRUCTURAL_ORGANISATION_ANIMALS_STATS = {
  chapterId: 'structural-org-animals',
  chapterTitle: 'Structural Organisation in Animals',
  subject: 'Biology',
  class: '11',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
