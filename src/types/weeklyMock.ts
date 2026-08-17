export interface NEETExamConfig {
  totalQuestions: number;
  durationMinutes: number;
  maxMarks: number;
  marksPerCorrect: number;
  negativeMarksPerIncorrect: number;
  unattemptedMarks: number;
  subjectDistribution: {
    physics: number;
    chemistry: number;
    biology: number;
  };
  difficultyDistribution: {
    easy: number; // percentage (e.g. 30)
    moderate: number; // percentage (e.g. 50)
    hard: number; // percentage (e.g. 20)
  };
  avoidRecentQuestionWindow: number; // number of weeks
  chapterWeights?: Record<string, 'High' | 'Medium' | 'Low'>;
}

export interface MockQuestion {
  questionId: string;
  subject: 'physics' | 'chemistry' | 'biology';
  subjectName: string;
  chapterId: string;
  chapterTitle: string;
  topicId: string;
  topicTitle: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  questionType: 'MCQ' | 'Assertion-Reason' | 'Statement-Based' | 'Match-Following';
  question: string;
  options: string[];
  correctAnswer: number; // 0, 1, 2, 3
  explanation: string;
  optionExplanations?: Record<number, string>;
  conceptTested?: string;
  year?: number;
  isPYQ?: boolean;
  source?: string;
}

export interface MockUserAnswer {
  questionId: string;
  selectedOption: number | null; // null if unattempted
  isMarkedForReview: boolean;
  timeSpentSeconds: number;
  timestamp: number;
}

export interface MockSubmissionResult {
  mockId: string;
  testType: 'weekly' | 'chapter' | 'custom';
  weekNumber: number;
  year: number;
  title: string;
  startTimestamp: number;
  submissionTimestamp: number;
  totalTimeSeconds: number;
  totalQuestions: number;
  maxMarks: number;
  
  // Overall scores
  totalScore: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalUnattempted: number;
  totalMarkedForReview: number;
  accuracyPercentage: number;
  attemptPercentage: number;
  averageTimePerQuestion: number;
  
  // Subject breakdown
  subjectScores: {
    physics: { marks: number; maxMarks: number; correct: number; incorrect: number; unattempted: number; accuracy: number };
    chemistry: { marks: number; maxMarks: number; correct: number; incorrect: number; unattempted: number; accuracy: number };
    biology: { marks: number; maxMarks: number; correct: number; incorrect: number; unattempted: number; accuracy: number };
  };

  // Chapter performance
  chapterPerformance: Array<{
    chapterId: string;
    chapterTitle: string;
    subject: string;
    totalQuestions: number;
    correct: number;
    accuracy: number;
    status: 'STRONG' | 'IMPROVING' | 'WEAK';
  }>;

  // Topic performance
  topicPerformance: Array<{
    topicId: string;
    topicTitle: string;
    chapterTitle: string;
    subject: string;
    totalQuestions: number;
    correct: number;
    accuracy: number;
    status: 'WEAK' | 'IMPROVING' | 'STRONG' | 'MASTERED';
  }>;

  answers: Record<string, MockUserAnswer>;
}

export interface WeeklyMockPaper {
  id: string;
  mockId?: string;
  weekNumber: number;
  year: number;
  title: string;
  subtitle: string;
  createdTimestamp: number;
  config: NEETExamConfig;
  questions: MockQuestion[];
}

export interface WeeklyMockState {
  currentWeeklyMockId: string;
  savedMocks: Record<string, WeeklyMockPaper>;
  activeAttempt: {
    mockId: string;
    testType: 'weekly' | 'chapter' | 'custom';
    startTimestamp: number;
    endTimestamp: number;
    currentQuestionIndex: number;
    answers: Record<string, MockUserAnswer>;
    isSubmitted: boolean;
  } | null;
  history: MockSubmissionResult[];
  recentMockQuestionIds: string[];
  weeklyStreak: number;
  lastCompletedWeekNumber: number;
  lastCompletedYear: number;
}
