import { NEETExamConfig } from '../types/weeklyMock';

/**
 * Standard NEET UG Examination Configuration
 * Centralized configuration object for NEET Mock Testing.
 * Easily modifiable for future NTA pattern changes.
 */
export const NEET_EXAM_CONFIG: NEETExamConfig = {
  totalQuestions: 180,
  durationMinutes: 180,
  maxMarks: 720,
  marksPerCorrect: 4,
  negativeMarksPerIncorrect: 1,
  unattemptedMarks: 0,
  subjectDistribution: {
    physics: 45,
    chemistry: 45,
    biology: 90
  },
  difficultyDistribution: {
    easy: 30,
    moderate: 50,
    hard: 20
  },
  avoidRecentQuestionWindow: 3, // avoid reusing questions from the last 3 weeks
  chapterWeights: {
    // High-yield physics chapters
    'phys-electrost': 'High',
    'phys-curr-elec': 'High',
    'phys-mag-effect': 'High',
    'phys-optics-ray': 'High',
    'phys-thermo': 'High',
    'phys-mechanics': 'High',
    'phys-semi': 'High',
    // High-yield chemistry chapters
    'chem-electrochem': 'High',
    'chem-kinetics': 'High',
    'chem-solutions': 'High',
    'chem-coordination': 'High',
    'chem-p-block': 'High',
    'chem-aldehydes': 'High',
    'chem-amines': 'High',
    // High-yield biology chapters
    'bio-genetics': 'High',
    'bio-biotech': 'High',
    'bio-human-phys': 'High',
    'bio-plant-phys': 'High',
    'bio-ecology': 'High',
    'bio-cell-bio': 'High'
  }
};

export const WEEKLY_MOCK_CONFIG = {
  enabled: true,
  currentPatternName: 'NEET UG 180-Q Paper Pattern',
  standardConfig: NEET_EXAM_CONFIG,
  fastPracticeMode: {
    totalQuestions: 45,
    durationMinutes: 45,
    maxMarks: 180,
    subjectDistribution: {
      physics: 15,
      chemistry: 15,
      biology: 15
    }
  },
  halfMockMode: {
    totalQuestions: 90,
    durationMinutes: 90,
    maxMarks: 360,
    subjectDistribution: {
      physics: 22,
      chemistry: 23,
      biology: 45
    }
  }
};
