import { DetailedTopicContent } from '../../types/neet';
import { EXP_TOPICS_1 } from './expTopics1';
import { EXP_TOPICS_2 } from './expTopics2';
import { EXP_TOPICS_3 } from './expTopics3';
import { EXP_DIAGRAMS } from './expDiagrams';

export { EXP_DIAGRAMS } from './expDiagrams';
export { EXP_TOPICS_1 } from './expTopics1';
export { EXP_TOPICS_2 } from './expTopics2';
export { EXP_TOPICS_3 } from './expTopics3';

export const EXPERIMENTAL_SKILLS_TOPIC_DETAILS: Record<string, DetailedTopicContent> = {
  ...EXP_TOPICS_1,
  ...EXP_TOPICS_2,
  ...EXP_TOPICS_3
};

export const EXPERIMENTAL_SKILLS_TOPIC_IDS: string[] = [
  'phys-exp-vernier-calipers',
  'phys-exp-screw-gauge',
  'phys-exp-simple-pendulum',
  'phys-exp-metre-scale-moments',
  'phys-exp-youngs-modulus',
  'phys-exp-surface-tension-capillary',
  'phys-exp-viscosity-terminal-velocity',
  'phys-exp-resonance-tube-sound',
  'phys-exp-calorimetry-mixtures',
  'phys-exp-metre-bridge-resistivity',
  'phys-exp-ohms-law-resistance',
  'phys-exp-galvanometer-half-deflection',
  'phys-exp-focal-length-parallax',
  'phys-exp-prism-minimum-deviation',
  'phys-exp-travelling-microscope-refractive-index',
  'phys-exp-pn-junction-diode-characteristics',
  'phys-exp-zener-diode-characteristics',
  'phys-exp-component-identification'
];
