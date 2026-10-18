export interface ChapterwiseMCQOptions {
  A: string;
  B: string;
  C: string;
  D: string;
}

export interface ChapterwiseMCQSolutionStructured {
  concept: string;
  given?: string;
  formula?: string;
  stepByStep: string;
  finalAnswer: string;
  whyOtherOptionsWrong?: string;
}

export interface ChapterwiseMCQ {
  id: string;
  questionNumber?: number;
  question: string;
  options: ChapterwiseMCQOptions | string[];
  optionsList?: string[]; // [options.A, options.B, options.C, options.D]
  correctAnswer?: 'A' | 'B' | 'C' | 'D';
  correctOption?: 'A' | 'B' | 'C' | 'D' | number;
  correctIndex?: number; // 0, 1, 2, 3
  explanation: string;
  solutionStructured?: ChapterwiseMCQSolutionStructured;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  subject?: 'Physics' | 'Chemistry' | 'Biology' | string;
  class?: '11' | '12' | string;
  chapter?: string;
  chapterId?: string;
  topic?: string;
  topicId?: string;
  subtopic?: string;
  source?: string;
  isPYQ?: boolean | string;
  isPyq?: boolean | string;
  isVerifiedPyq?: boolean | string;
  pyqYear?: number | string;
  pyqDetails?: {
    exam?: string;
    year?: string | number;
    shift?: string;
    questionNumber?: number;
    verifiedBy?: string;
  };
  [key: string]: any;
}

export interface ChapterMCQProgress {
  chapterId: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  checkedQuestions: Record<string, boolean>;
  draftSelections?: Record<string, 'A' | 'B' | 'C' | 'D'>;
  bookmarked: Record<string, boolean>;
  lastAttemptedAt?: string;
}
