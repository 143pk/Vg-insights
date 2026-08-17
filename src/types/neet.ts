export type SubjectId = 'physics' | 'chemistry' | 'biology'
export type ClassLevel = 'class-11' | 'class-12'

export interface PYQuestion {
  id?: string;
  year?: number;
  exam?: string;
  examName?: string;
  examYear?: string;
  verifiedExam?: string;
  question?: string;
  questionText?: string;
  options: string[];
  correctAnswer?: number; // 0, 1, 2, or 3
  correctAnswerIndex?: number;
  correctOption?: number;
  explanation: string;
  topicId?: string;
  topicTested?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  conceptTested?: string;
  ncertReference?: string;
  marks?: number;
  classification?: 'Direct' | 'Overlap' | 'None';
  verified?: boolean;
  isVerifiedPYQ?: boolean;
  verificationSource?: string;
}

export interface Misconception {
  commonConfusion?: string;
  misconception?: string;
  correctFact?: string;
  correction?: string;
  whyItMattersForNEET?: string;
}

export interface PracticeQuestion {
  id?: string;
  questionId?: string;
  question?: string;
  questionText?: string;
  options: string[];
  correctAnswer?: number; // 0, 1, 2, or 3
  correctAnswerIndex?: number;
  correctOption?: number;
  explanation: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  marks?: number;
  topicId?: string;
  topicTested?: string;
  conceptTested?: string;
}

export interface ImportantTerm {
  term: string;
  symbol?: string;
  definition: string;
  unit?: string;
  formula?: string;
  neetNote?: string;
  neetSignificance?: string;
}

export interface FormulaDetail {
  title?: string;
  formulaName?: string;
  formula?: string;
  expression?: string;
  meaning?: string;
  description?: string;
  whatItRepresents?: string;
  variables?: string | any[];
  symbols?: string;
  unit?: string;
  conditions?: string;
  explanation?: string;
  whenToUse?: string;
  note?: string;
  calculationExample?: {
    problem: string;
    given?: string;
    stepByStep?: string[];
    answer?: string;
  };
}

export interface YearWisePYQRecord {
  id?: string;
  year: number;
  exam: string; // e.g., 'NEET UG' | 'AIPMT'
  directPyqCount: number;
  marks: number;
  questionType: string;
  questionSummary?: string;
  classification: 'Direct' | 'Overlap' | 'None'
  verificationStatus: string;
}

export interface OverlapPYQRecord {
  year: number;
  exam: string;
  question: string;
  primaryTopic: string;
  overlapReason: string;
}

export interface NeetMarksPotential {
  topicName?: string;
  confidenceLabel?: 'HIGH' | 'MODERATE' | 'LIMITED';
  confidenceText?: string;
  totalAnalyzedPapers?: number;
  papersWithDirectPyqs?: number;
  totalDirectPyqs?: number;
  totalHistoricalMarks?: number;
  averageDirectPyqsPerPaper?: number;
  maxDirectPyqsInSinglePaper?: number;
  minDirectPyqsInSinglePaper?: number;
  minDirectMarks?: number;
  maxDirectMarks?: number;
  avgDirectMarksPerPaper?: number;
  
  whatThisMeansForYou?: string;
  typicalContributionMarks?: number;
  historicalMarksRangeText?: string;
  
  weightagePercentage?: number;
  expectedQuestionsCount?: number;
  totalMarksPotential?: number;
  historicalFrequencyYears?: string;
  trendAnalysis?: string;
  preparationStrategy?: string;

  averageQuestionsPerYear?: number;
  scoreWeightage?: string;
  difficultyRating?: string;
  highYieldStatus?: boolean;
  
  yearWiseBreakdown?: YearWisePYQRecord[];
  overlapPyqs?: OverlapPYQRecord[];
  
  sourceInfo?: {
    dataSource: string;
    analysisPeriod: string;
    directPyqsAnalyzedCount: number;
    classificationMethod: string;
    disclaimer: string;
  };
}

export interface TopicNote {
  learn: string[]; // EL10 + NEET strict simple explanations
  keyConcepts: string[];
  formulas?: Array<{
    title: string;
    formula: string;
    variables?: string;
    note?: string;
    whenToUse?: string;
    calculationExample?: {
      problem: string;
      given: string;
      stepByStep: string[];
      answer: string;
    };
  }>;
  visualExplanation?: {
    type: 'svg' | 'table' | 'flowchart' | 'description'
    svgContent?: string;
    tableData?: { headers: string[]; rows: string[][] };
    flowchartSteps?: Array<{ step: string; detail: string; arrowText?: string }>;
    caption: string;
  };
  neetImportantPoints: string[];
  commonConfusions: Misconception[];
  quickRevision: string[];
  practiceQuestions?: PracticeQuestion[];
  neetMarksPotential?: NeetMarksPotential;
}

export interface ConceptVisual {
  type?: 'svg' | 'table' | 'flowchart' | 'description'
  svgContent?: string;
  caption?: string;
  guide?: string;
  tableData?: { headers: string[]; rows: string[][] };
  flowchartSteps?: Array<{ step: string; detail: string; arrowText?: string }>;
}

export interface ConceptExample {
  problem: string;
  given?: string;
  stepByStep?: string[];
  solution?: string;
  answer?: string;
}

export interface DetailedTopicContent {
  topicId: string;
  topicName: string;
  subject: string;
  class: string;
  classification: string;
  chapter: string;
  
  whatIsThisTopic: string;
  basicIdea: string[];
  importantTerms: ImportantTerm[];
  conceptExplanation: Array<{
    heading: string;
    paragraphs: string[];
    visual?: ConceptVisual;
    visuals?: ConceptVisual[];
    formulas?: Array<FormulaDetail | string>;
    examples?: ConceptExample[];
    importantPoints?: string[];
    tables?: Array<{ title?: string; headers: string[]; rows: string[][] }>;
  }>;
  formulae: FormulaDetail[];
  visualLearning?: {
    type?: 'svg' | 'table' | 'flowchart' | 'description';
    svgContent?: string;
    tableData?: { headers: string[]; rows: string[][] };
    flowchartSteps?: Array<{ step: string; detail: string; arrowText?: string }>;
    caption?: string;
    guide?: string;
  };
  neetImportantPoints: string[];
  commonConfusions: Misconception[];
  quickRevision: string[];
  practiceQuestions?: PracticeQuestion[];
  pyqs: PYQuestion[];
  neetMarksPotential?: NeetMarksPotential;
}

export interface Topic {
  id: string;
  title: string;
  chapterId: string;
  estimatedReadTimeMinutes: number;
  importanceWeight: 'High Yield' | 'Medium Yield' | 'Core Concept'
  summary: string;
  notes: TopicNote;
  pyqs?: PYQuestion[];
}

export interface Chapter {
  id: string;
  title: string;
  classificationId: string;
  chapterNumber: number;
  description: string;
  estimatedHours: number;
  topicIds: string[];
}

export interface Classification {
  id: string;
  title: string;
  classLevel: ClassLevel;
  subjectId: SubjectId;
  description: string;
  iconName?: string;
  chapterIds: string[];
}

export interface Subject {
  id: SubjectId;
  name: string;
  tagline: string;
  icon: string;
  color: string; // Tailwind color accent
  badgeColor: string;
  bgGradient: string;
  class11ChapterCount: number;
  class12ChapterCount: number;
  totalTopicsCount: number;
  classifications11: string[]; // classification IDs
  classifications12: string[]; // classification IDs
}

export interface UserProgress {
  completedTopics: string[]; // topic IDs
  bookmarkedTopics: string[]; // topic IDs
  pyqAttempts: Record<string, { selectedOption: number; isCorrect: boolean; timestamp: number }>; // questionId -> result
  lastVisitedTopicId?: string;
}

export interface BreadcrumbItem {
  label: string;
  path: string;
}
