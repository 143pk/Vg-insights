import { EXP_SVGS_1 } from './expSvgDiagrams1';
import { EXP_SVGS_2 } from './expSvgDiagrams2';
import { EXP_SVGS_3 } from './expSvgDiagrams3';

export const EXP_DIAGRAMS = {
  ...EXP_SVGS_1,
  ...EXP_SVGS_2,
  ...EXP_SVGS_3,

  // Aliases for ExpTopics 1
  simplePendulum: EXP_SVGS_1.simplePendulumDamping,
  meterScale: EXP_SVGS_1.metreScaleMoments,
  metreScale: EXP_SVGS_1.metreScaleMoments,
  youngsModulus: EXP_SVGS_1.youngsModulusSearle,
  capillaryRise: EXP_SVGS_1.capillaryRiseDetergent,

  // Aliases for ExpTopics 2
  viscosity: EXP_SVGS_2.viscosityTerminalVelocity,
  resonanceTube: EXP_SVGS_2.resonanceTubeSoundSpeed,
  calorimetryMixtures: EXP_SVGS_2.calorimetrySpecificHeat,
  metreBridge: EXP_SVGS_2.metreBridgeResistivity,
  ohmsLaw: EXP_SVGS_2.ohmsLawCircuitAndGraph,
  galvanometer: EXP_SVGS_2.galvanometerHalfDeflection,

  // Aliases for ExpTopics 3
  focalLength: EXP_SVGS_3.focalLengthOpticsParallax,
  convexMirror: EXP_SVGS_3.focalLengthOpticsParallax,
  concaveLens: EXP_SVGS_3.focalLengthOpticsParallax,
  prismDeviation: EXP_SVGS_3.prismDeviationGraph,
  travellingMicroscope: EXP_SVGS_3.travellingMicroscopeRefractiveIndex,
  pnDiode: EXP_SVGS_3.diodesAndComponentIdentification,
  zenerDiode: EXP_SVGS_3.diodesAndComponentIdentification,
  componentIdentification: EXP_SVGS_3.diodesAndComponentIdentification
};

