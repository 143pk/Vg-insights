// Chemical Coordination and Integration (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { CHEMICAL_COORDINATION_INTEGRATION_PART1_MCQS } from './chemicalCoordinationIntegrationPart1Data';
import { CHEMICAL_COORDINATION_INTEGRATION_PART2_MCQS } from './chemicalCoordinationIntegrationPart2Data';
import { CHEMICAL_COORDINATION_INTEGRATION_PART3_MCQS } from './chemicalCoordinationIntegrationPart3Data';
import { CHEMICAL_COORDINATION_INTEGRATION_PART4_MCQS } from './chemicalCoordinationIntegrationPart4Data';

export const CHEMICAL_COORDINATION_INTEGRATION_MCQS: ChapterMcq[] = [
  ...CHEMICAL_COORDINATION_INTEGRATION_PART1_MCQS,
  ...CHEMICAL_COORDINATION_INTEGRATION_PART2_MCQS,
  ...CHEMICAL_COORDINATION_INTEGRATION_PART3_MCQS,
  ...CHEMICAL_COORDINATION_INTEGRATION_PART4_MCQS,
];
