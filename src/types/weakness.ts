export type WeaknessStatus = 'WEAK' | 'IMPROVING' | 'STRONG' | 'MASTERED' | 'INSUFFICIENT_DATA';

export interface QuestionAttemptRecord {
  id: string;
  questionId: string;
  subjectId: string; // 'physics' | 'chemistry' | 'biology'
  chapterId: string;
  topicId: string;
  status: 'correct' | 'incorrect' | 'skipped';
  selectedOption: number; // 0, 1, 2, 3 (-1 if skipped)
  correctOption: number;
  timeSpentSeconds: number;
  attemptNumber: number;
  timestamp: number;
  source: 'topic_pyq' | 'topic_practice' | 'diagnostic_quiz' | 'focused_fix' | 'weekly_mock' | 'chapter_test' | 'custom_test';
}

export interface TopicWeaknessStats {
  topicId: string;
  topicTitle: string;
  subjectId: string;
  subjectName: string;
  chapterId: string;
  chapterTitle: string;
  totalAttempts: number;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
  accuracy: number; // 0 to 100
  previousAccuracy?: number; // for tracking improvement
  accuracyHistory: number[]; // array of historical accuracies (e.g. [42, 61, 78])
  status: WeaknessStatus;
  weaknessScore: number; // higher = higher priority weakness
  totalTimeSpentSeconds: number;
  averageTimePerQuestionSeconds: number;
  lastAttemptTimestamp: number;
  markLoss: number; // Estimated mark loss in NEET (+4 for correct, -1 for wrong = 5 marks lost per mistake)
  mistakesRatio: string; // e.g. "7/12"
  isMastered: boolean;
  isImproving: boolean;
  isWeak: boolean;
}

export interface WeaknessDashboardMetrics {
  totalQuestionsAttempted: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalSkipped: number;
  overallAccuracy: number;
  totalTimeSpentSeconds: number;
  
  strongestSubject: { name: string; accuracy: number; totalQuestions: number } | null;
  weakestSubject: { name: string; accuracy: number; totalQuestions: number } | null;
  
  weakestChapter: { title: string; subjectName: string; accuracy: number; mistakes: number } | null;
  weakestTopic: TopicWeaknessStats | null;
  
  masteredTopicsCount: number;
  needsRevisionTopicsCount: number;
  weakTopicsCount: number;
  improvingTopicsCount: number;
  
  biggestMarkLossArea: {
    topicTitle: string;
    chapterTitle: string;
    markLoss: number;
    accuracy: number;
  } | null;
  
  mostImprovedTopic: {
    topicTitle: string;
    previousAccuracy: number;
    currentAccuracy: number;
    delta: number;
  } | null;
  
  nextTopicToFix: TopicWeaknessStats | null;
  
  subjectBreakdown: Record<string, {
    totalAttempted: number;
    correct: number;
    accuracy: number;
    weakCount: number;
    masteredCount: number;
  }>;
}

export interface WeaknessStorageState {
  attempts: QuestionAttemptRecord[];
  topicHistories: Record<string, number[]>; // topicId -> historical accuracy percentage list
  lastEvaluatedTimestamp: number;
}
