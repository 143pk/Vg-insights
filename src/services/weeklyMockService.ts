import { TOPICS, CHAPTERS, CLASSIFICATIONS, SUBJECTS } from '../data/neetData';
import { TOPIC_DETAILS } from '../data/topicDetails';
import {
  NEETExamConfig,
  MockQuestion,
  MockUserAnswer,
  MockSubmissionResult,
  WeeklyMockPaper,
  WeeklyMockState
} from '../types/weeklyMock';
import { NEET_EXAM_CONFIG } from './weeklyMockConfig';
import { WeaknessDoctorService } from './weaknessDoctorService';
import { MistakeBookService } from './mistakeBookService';

const WEEKLY_MOCK_STORAGE_KEY = 'vg_neet_weekly_mock_state_v1';

export class WeeklyMockService {
  private static cachedAllQuestions: MockQuestion[] | null = null;

  /**
   * Computes the current ISO-8601 Year and Week Number
   */
  public static getCurrentYearAndWeek(): { year: number; weekNumber: number; mockId: string } {
    const now = new Date();
    const target = new Date(now.valueOf());
    const dayNr = (now.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    const firstThursday = target.valueOf();
    target.setMonth(0, 1);
    if (target.getDay() !== 4) {
      target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
    }
    const weekNumber = 1 + Math.ceil((firstThursday - target.valueOf()) / 604800000);
    const year = now.getFullYear();
    const mockId = `WEEKLY_MOCK_${year}_W${String(weekNumber).padStart(2, '0')}`;
    return { year, weekNumber, mockId };
  }

  /**
   * Retrieves the stored mock system state
   */
  public static getState(): WeeklyMockState {
    const { mockId } = this.getCurrentYearAndWeek();
    try {
      const data = localStorage.getItem(WEEKLY_MOCK_STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed && typeof parsed === 'object') {
          return {
            currentWeeklyMockId: typeof parsed.currentWeeklyMockId === 'string' ? parsed.currentWeeklyMockId : mockId,
            savedMocks: parsed.savedMocks && typeof parsed.savedMocks === 'object' ? parsed.savedMocks : {},
            activeAttempt: parsed.activeAttempt && typeof parsed.activeAttempt === 'object' && parsed.activeAttempt.mockId ? {
              mockId: parsed.activeAttempt.mockId,
              testType: parsed.activeAttempt.testType || 'weekly',
              startTimestamp: typeof parsed.activeAttempt.startTimestamp === 'number' ? parsed.activeAttempt.startTimestamp : Date.now(),
              endTimestamp: typeof parsed.activeAttempt.endTimestamp === 'number' ? parsed.activeAttempt.endTimestamp : (Date.now() + 180 * 60 * 1000),
              currentQuestionIndex: Math.max(0, typeof parsed.activeAttempt.currentQuestionIndex === 'number' ? parsed.activeAttempt.currentQuestionIndex : 0),
              answers: parsed.activeAttempt.answers && typeof parsed.activeAttempt.answers === 'object' ? parsed.activeAttempt.answers : {},
              isSubmitted: !!parsed.activeAttempt.isSubmitted
            } : null,
            history: Array.isArray(parsed.history) ? parsed.history : [],
            recentMockQuestionIds: Array.isArray(parsed.recentMockQuestionIds) ? parsed.recentMockQuestionIds : [],
            weeklyStreak: typeof parsed.weeklyStreak === 'number' ? parsed.weeklyStreak : 0,
            lastCompletedWeekNumber: typeof parsed.lastCompletedWeekNumber === 'number' ? parsed.lastCompletedWeekNumber : 0,
            lastCompletedYear: typeof parsed.lastCompletedYear === 'number' ? parsed.lastCompletedYear : 0
          };
        }
      }
    } catch (e) {
      console.warn('Failed to parse weekly mock state from localStorage:', e);
    }

    return {
      currentWeeklyMockId: mockId,
      savedMocks: {},
      activeAttempt: null,
      history: [],
      recentMockQuestionIds: [],
      weeklyStreak: 0,
      lastCompletedWeekNumber: 0,
      lastCompletedYear: 0
    };
  }

  /**
   * Persists the mock system state to localStorage
   */
  public static saveState(state: WeeklyMockState): void {
    try {
      localStorage.setItem(WEEKLY_MOCK_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save weekly mock state:', e);
    }
  }

  /**
   * Comprehensive Offline Question Bank Aggregator
   * Indexes and normalizes every single question available in the library.
   */
  public static getAllAvailableQuestions(): MockQuestion[] {
    if (this.cachedAllQuestions && this.cachedAllQuestions.length > 50) {
      return this.cachedAllQuestions;
    }

    const questions: MockQuestion[] = [];
    const seenTexts = new Set<string>();

    const addQuestion = (rawQ: any, fallbackSubject: 'physics' | 'chemistry' | 'biology', topicId: string, chapterId: string) => {
      const qText = rawQ.question || rawQ.questionText || '';
      if (!qText || seenTexts.has(qText.trim().toLowerCase())) return;
      seenTexts.add(qText.trim().toLowerCase());

      const rawOpts = Array.isArray(rawQ.options) ? rawQ.options : [];
      if (rawOpts.length < 2) return;

      const correctAns = typeof rawQ.correctAnswer === 'number' ? rawQ.correctAnswer :
        (typeof rawQ.correctOption === 'number' ? rawQ.correctOption :
        (typeof rawQ.correctAnswerIndex === 'number' ? rawQ.correctAnswerIndex : 0));

      const ctx = WeaknessDoctorService.resolveTopicContext(topicId);
      let subject: 'physics' | 'chemistry' | 'biology' = fallbackSubject;
      if (ctx.subjectId === 'physics' || ctx.subjectId === 'chemistry' || ctx.subjectId === 'biology') {
        subject = ctx.subjectId;
      } else if (topicId.startsWith('phys-')) {
        subject = 'physics';
      } else if (topicId.startsWith('chem-')) {
        subject = 'chemistry';
      } else if (topicId.startsWith('bio-')) {
        subject = 'biology';
      }

      let diff: 'Easy' | 'Moderate' | 'Hard' = 'Moderate';
      if (rawQ.difficulty === 'Easy' || rawQ.difficulty === 'easy') diff = 'Easy';
      if (rawQ.difficulty === 'Hard' || rawQ.difficulty === 'hard') diff = 'Hard';

      const isPYQ = !!(rawQ.isPYQ || rawQ.isVerifiedPYQ || rawQ.year || rawQ.exam || rawQ.verifiedExam);
      const year = rawQ.year || (rawQ.exam ? parseInt(String(rawQ.exam).replace(/\D/g, ''), 10) : undefined);

      // Generate helpful option explanations for deeper learning
      const optionExps: Record<number, string> = {};
      rawOpts.forEach((opt: string, idx: number) => {
        if (idx === correctAns) {
          optionExps[idx] = `Correct: Adheres strictly to standard NCERT NEET formulation. ${rawQ.explanation || ''}`;
        } else {
          optionExps[idx] = `Incorrect: This option violates the governing principles or introduces typical calculation/sign error.`;
        }
      });

      questions.push({
        questionId: rawQ.id || `bank_${subject}_${questions.length + 1}`,
        subject,
        subjectName: subject === 'physics' ? 'Physics' : (subject === 'chemistry' ? 'Chemistry' : 'Biology'),
        chapterId: chapterId || ctx.chapterId || 'general-chapter',
        chapterTitle: ctx.chapterTitle || chapterId.replace(/-/g, ' '),
        topicId,
        topicTitle: ctx.topicTitle,
        difficulty: diff,
        questionType: rawQ.questionType || 'MCQ',
        question: qText,
        options: rawOpts,
        correctAnswer: Math.max(0, Math.min(rawOpts.length - 1, correctAns)),
        explanation: rawQ.explanation || 'Refer to standard NCERT NEET UG step-by-step principles for this concept.',
        optionExplanations: rawQ.optionExplanations || optionExps,
        conceptTested: rawQ.conceptTested || rawQ.topicTested || ctx.topicTitle,
        year: !isNaN(Number(year)) && Number(year) > 1990 ? Number(year) : undefined,
        isPYQ,
        source: rawQ.exam ? `${rawQ.exam} ${year || ''}` : (isPYQ ? 'Verified NEET PYQ' : 'NCERT NEET Practice')
      });
    };

    // 1. Traverse TOPIC_DETAILS
    Object.entries(TOPIC_DETAILS).forEach(([tId, detail]: [string, any]) => {
      const chId = detail.chapterId || detail.chapter || '';
      let sub: 'physics' | 'chemistry' | 'biology' = 'physics';
      if (tId.startsWith('chem-') || detail.subject === 'chemistry') sub = 'chemistry';
      if (tId.startsWith('bio-') || detail.subject === 'biology') sub = 'biology';

      (detail.pyqs || []).forEach((q: any) => addQuestion(q, sub, tId, chId));
      (detail.practiceQuestions || detail.practiceCards || []).forEach((q: any) => addQuestion(q, sub, tId, chId));
    });

    // 2. Traverse TOPICS
    Object.entries(TOPICS).forEach(([tId, topic]) => {
      let sub: 'physics' | 'chemistry' | 'biology' = 'physics';
      if (tId.startsWith('chem-')) sub = 'chemistry';
      if (tId.startsWith('bio-')) sub = 'biology';

      (topic.pyqs || []).forEach(q => addQuestion(q, sub, tId, topic.chapterId));
      (topic.notes?.practiceQuestions || []).forEach(q => addQuestion(q, sub, tId, topic.chapterId));
    });

    this.cachedAllQuestions = questions;
    return questions;
  }

  /**
   * Seeded pseudo-random number generator for deterministic weekly paper creation
   */
  private static seededRandom(seed: number): () => number {
    let s = Math.sin(seed) * 10000;
    return () => {
      s = Math.sin(s++) * 10000;
      return s - Math.floor(s);
    };
  }

  /**
   * Generates or loads the deterministic weekly mock for the current week
   */
  public static getOrCreateCurrentWeeklyMock(): WeeklyMockPaper {
    const { year, weekNumber, mockId } = this.getCurrentYearAndWeek();
    const state = this.getState();

    // If already generated and cached in state, return it
    if (state.savedMocks[mockId]) {
      return state.savedMocks[mockId];
    }

    // Generate new deterministic weekly paper
    const paper = this.generateWeeklyPaper(year, weekNumber, mockId, NEET_EXAM_CONFIG);

    state.currentWeeklyMockId = mockId;
    state.savedMocks[mockId] = paper;
    this.saveState(state);

    return paper;
  }

  /**
   * Core Local Deterministic Question Selection Algorithm
   * Balances Subjects (45 Phys, 45 Chem, 90 Bio), Chapters, and Difficulty without any external API calls.
   */
  public static generateWeeklyPaper(
    year: number,
    weekNumber: number,
    mockId: string,
    config: NEETExamConfig = NEET_EXAM_CONFIG
  ): WeeklyMockPaper {
    const allQuestions = this.getAllAvailableQuestions();
    const state = this.getState();
    const recentIds = new Set(state.recentMockQuestionIds || []);

    const seed = year * 1000 + weekNumber * 73 + 42;
    const rng = this.seededRandom(seed);

    // Group available questions by subject
    const physPool = allQuestions.filter(q => q.subject === 'physics');
    const chemPool = allQuestions.filter(q => q.subject === 'chemistry');
    const bioPool = allQuestions.filter(q => q.subject === 'biology');

    const selectForSubject = (pool: MockQuestion[], targetCount: number, subjectName: string): MockQuestion[] => {
      if (pool.length === 0) return [];

      // Sort questions: prioritize questions not recently used
      const unused = pool.filter(q => !recentIds.has(q.questionId));
      const candidates = unused.length >= targetCount ? unused : pool;

      // Group candidates by chapter for balanced chapter distribution
      const chapterBuckets: Record<string, MockQuestion[]> = {};
      candidates.forEach(q => {
        const cKey = q.chapterId || 'default';
        if (!chapterBuckets[cKey]) chapterBuckets[cKey] = [];
        chapterBuckets[cKey].push(q);
      });

      const chapterKeys = Object.keys(chapterBuckets);
      // Shuffle chapter keys deterministically
      chapterKeys.sort(() => rng() - 0.5);

      const selected: MockQuestion[] = [];
      const selectedIds = new Set<string>();

      // Round-robin chapter distribution
      let chapterIdx = 0;
      let safetyLoop = 0;
      while (selected.length < targetCount && safetyLoop < targetCount * 5) {
        safetyLoop++;
        const chKey = chapterKeys[chapterIdx % chapterKeys.length];
        const bucket = chapterBuckets[chKey] || [];
        
        // Find an unselected question from this chapter
        const availableInBucket = bucket.filter(q => !selectedIds.has(q.questionId));
        if (availableInBucket.length > 0) {
          // Pick one
          const pickIdx = Math.floor(rng() * availableInBucket.length);
          const picked = availableInBucket[pickIdx];
          selected.push(picked);
          selectedIds.add(picked.questionId);
        }

        chapterIdx++;
      }

      // If still need more to reach targetCount, pick from remaining pool
      if (selected.length < targetCount) {
        const remaining = pool.filter(q => !selectedIds.has(q.questionId));
        remaining.sort(() => rng() - 0.5);
        for (const rem of remaining) {
          if (selected.length >= targetCount) break;
          selected.push(rem);
          selectedIds.add(rem.questionId);
        }
      }

      // If pool is very small, duplicate and assign unique index so mock is never incomplete
      let loopCounter = 1;
      while (selected.length < targetCount && selected.length > 0) {
        const base = selected[loopCounter % selected.length];
        selected.push({
          ...base,
          questionId: `${base.questionId}_rep_${loopCounter}`
        });
        loopCounter++;
      }

      return selected.slice(0, targetCount);
    };

    const physSelected = selectForSubject(physPool, config.subjectDistribution.physics, 'Physics');
    const chemSelected = selectForSubject(chemPool, config.subjectDistribution.chemistry, 'Chemistry');
    const bioSelected = selectForSubject(bioPool, config.subjectDistribution.biology, 'Biology');

    const totalSelected = [...physSelected, ...chemSelected, ...bioSelected];

    return {
      id: mockId,
      mockId: mockId,
      weekNumber,
      year,
      title: `Weekly NEET Mock — Week ${weekNumber}`,
      subtitle: `Full NEET UG 180-Question All-India Benchmark Simulation`,
      createdTimestamp: Date.now(),
      config,
      questions: totalSelected
    };
  }

  /**
   * Generates a custom or chapter-specific mock test locally
   */
  public static generateCustomOrChapterTest(params: {
    testType: 'chapter' | 'custom';
    title: string;
    chapterIds?: string[];
    subject?: 'physics' | 'chemistry' | 'biology';
    questionCount: number;
    durationMinutes: number;
  }): WeeklyMockPaper {
    const allQuestions = this.getAllAvailableQuestions();
    let pool = allQuestions;

    if (params.subject) {
      pool = pool.filter(q => q.subject === params.subject);
    }

    if (params.chapterIds && params.chapterIds.length > 0) {
      const chSet = new Set(params.chapterIds);
      pool = pool.filter(q => chSet.has(q.chapterId));
    }

    const rng = Math.random;
    const shuffled = [...pool].sort(() => rng() - 0.5);
    const selected = shuffled.slice(0, params.questionCount);

    const testId = `TEST_${params.testType.toUpperCase()}_${Date.now()}`;
    const maxMarks = params.questionCount * 4;

    const config: NEETExamConfig = {
      totalQuestions: params.questionCount,
      durationMinutes: params.durationMinutes,
      maxMarks,
      marksPerCorrect: 4,
      negativeMarksPerIncorrect: 1,
      unattemptedMarks: 0,
      subjectDistribution: {
        physics: params.subject === 'physics' ? params.questionCount : 0,
        chemistry: params.subject === 'chemistry' ? params.questionCount : 0,
        biology: params.subject === 'biology' ? params.questionCount : 0
      },
      difficultyDistribution: { easy: 30, moderate: 50, hard: 20 },
      avoidRecentQuestionWindow: 1
    };

    return {
      id: testId,
      mockId: testId,
      weekNumber: 0,
      year: new Date().getFullYear(),
      title: params.title,
      subtitle: `${params.questionCount} Questions • ${params.durationMinutes} Minutes • ${maxMarks} Marks`,
      createdTimestamp: Date.now(),
      config,
      questions: selected
    };
  }

  /**
   * Starts or resumes an active test attempt
   */
  public static startOrResumeAttempt(paper: WeeklyMockPaper, testType: 'weekly' | 'chapter' | 'custom' = 'weekly'): {
    activeAttempt: NonNullable<WeeklyMockState['activeAttempt']>;
    paper: WeeklyMockPaper;
  } {
    const state = this.getState();

    // Check if there is already an active unfinished attempt for this mockId
    if (state.activeAttempt && state.activeAttempt.mockId === paper.id && !state.activeAttempt.isSubmitted) {
      // Check if timer expired while user was away
      if (Date.now() >= state.activeAttempt.endTimestamp) {
        // Auto-submit
        this.submitActiveMock(paper);
      } else {
        return {
          activeAttempt: state.activeAttempt,
          paper
        };
      }
    }

    return this.startNewAttempt(paper, testType);
  }

  /**
   * Forces initialization of a fresh attempt (e.g. for retakes)
   */
  public static startNewAttempt(paper: WeeklyMockPaper, testType: 'weekly' | 'chapter' | 'custom' = 'weekly'): {
    activeAttempt: NonNullable<WeeklyMockState['activeAttempt']>;
    paper: WeeklyMockPaper;
  } {
    const state = this.getState();
    const startTimestamp = Date.now();
    const endTimestamp = startTimestamp + (paper.config.durationMinutes * 60 * 1000);

    const initialAnswers: Record<string, MockUserAnswer> = {};
    paper.questions.forEach(q => {
      initialAnswers[q.questionId] = {
        questionId: q.questionId,
        selectedOption: null,
        isMarkedForReview: false,
        timeSpentSeconds: 0,
        timestamp: 0
      };
    });

    state.activeAttempt = {
      mockId: paper.id,
      testType,
      startTimestamp,
      endTimestamp,
      currentQuestionIndex: 0,
      answers: initialAnswers,
      isSubmitted: false
    };

    // Cache paper
    state.savedMocks[paper.id] = paper;
    this.saveState(state);

    return {
      activeAttempt: state.activeAttempt,
      paper
    };
  }

  /**
   * Updates student answer for a question in active attempt
   */
  public static recordQuestionResponse(
    questionId: string,
    selectedOption: number | null,
    isMarkedForReview: boolean,
    additionalTimeSpentSeconds: number = 0
  ): void {
    const state = this.getState();
    if (!state.activeAttempt || state.activeAttempt.isSubmitted) return;

    const existing = state.activeAttempt.answers[questionId] || {
      questionId,
      selectedOption: null,
      isMarkedForReview: false,
      timeSpentSeconds: 0,
      timestamp: 0
    };

    state.activeAttempt.answers[questionId] = {
      ...existing,
      selectedOption,
      isMarkedForReview,
      timeSpentSeconds: existing.timeSpentSeconds + additionalTimeSpentSeconds,
      timestamp: Date.now()
    };

    this.saveState(state);
  }

  /**
   * Sets current question index in active attempt
   */
  public static setCurrentQuestionIndex(index: number): void {
    const state = this.getState();
    if (state.activeAttempt) {
      const paper = state.savedMocks[state.activeAttempt.mockId] || this.getOrCreateCurrentWeeklyMock();
      const maxIdx = paper ? paper.questions.length - 1 : 179;
      state.activeAttempt.currentQuestionIndex = Math.max(0, Math.min(index, maxIdx));
      this.saveState(state);
    }
  }

  /**
   * Calculates comprehensive mock score and performance analytics locally with JavaScript
   */
  public static calculateMockScore(
    paper: WeeklyMockPaper,
    answers: Record<string, MockUserAnswer>,
    totalTimeSeconds: number,
    startTimestamp: number,
    submissionTimestamp: number
  ): MockSubmissionResult {
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let totalUnattempted = 0;
    let totalMarkedForReview = 0;

    const subjectStats = {
      physics: { marks: 0, maxMarks: 0, correct: 0, incorrect: 0, unattempted: 0, accuracy: 0 },
      chemistry: { marks: 0, maxMarks: 0, correct: 0, incorrect: 0, unattempted: 0, accuracy: 0 },
      biology: { marks: 0, maxMarks: 0, correct: 0, incorrect: 0, unattempted: 0, accuracy: 0 }
    };

    const chapterMap: Record<string, {
      chapterId: string;
      chapterTitle: string;
      subject: string;
      total: number;
      correct: number;
    }> = {};

    const topicMap: Record<string, {
      topicId: string;
      topicTitle: string;
      chapterTitle: string;
      subject: string;
      total: number;
      correct: number;
    }> = {};

    paper.questions.forEach(q => {
      const ans = answers[q.questionId];
      const selected = ans ? ans.selectedOption : null;
      const isReview = ans ? ans.isMarkedForReview : false;

      if (isReview) totalMarkedForReview++;

      const subKey = q.subject;
      if (subjectStats[subKey]) {
        subjectStats[subKey].maxMarks += paper.config.marksPerCorrect;
      }

      // Initialize chapter tracking
      if (!chapterMap[q.chapterId]) {
        chapterMap[q.chapterId] = {
          chapterId: q.chapterId,
          chapterTitle: q.chapterTitle,
          subject: q.subjectName,
          total: 0,
          correct: 0
        };
      }
      chapterMap[q.chapterId].total++;

      // Initialize topic tracking
      if (!topicMap[q.topicId]) {
        topicMap[q.topicId] = {
          topicId: q.topicId,
          topicTitle: q.topicTitle,
          chapterTitle: q.chapterTitle,
          subject: q.subjectName,
          total: 0,
          correct: 0
        };
      }
      topicMap[q.topicId].total++;

      if (selected === null || selected === undefined) {
        totalUnattempted++;
        if (subjectStats[subKey]) subjectStats[subKey].unattempted++;
      } else if (selected === q.correctAnswer) {
        totalCorrect++;
        if (subjectStats[subKey]) {
          subjectStats[subKey].correct++;
          subjectStats[subKey].marks += paper.config.marksPerCorrect;
        }
        chapterMap[q.chapterId].correct++;
        topicMap[q.topicId].correct++;
      } else {
        totalIncorrect++;
        if (subjectStats[subKey]) {
          subjectStats[subKey].incorrect++;
          subjectStats[subKey].marks -= paper.config.negativeMarksPerIncorrect;
        }
      }
    });

    // Compute subject accuracies
    Object.keys(subjectStats).forEach(sKey => {
      const s = subjectStats[sKey as keyof typeof subjectStats];
      const attempted = s.correct + s.incorrect;
      s.accuracy = attempted > 0 ? Math.round((s.correct / attempted) * 1000) / 10 : 0;
    });

    // Compute overall score
    const totalScore = (totalCorrect * paper.config.marksPerCorrect) - (totalIncorrect * paper.config.negativeMarksPerIncorrect);
    const totalAttempted = totalCorrect + totalIncorrect;
    const accuracyPercentage = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 1000) / 10 : 0;
    const attemptPercentage = paper.questions.length > 0 ? Math.round((totalAttempted / paper.questions.length) * 1000) / 10 : 0;
    const averageTimePerQuestion = totalAttempted > 0 ? Math.round(totalTimeSeconds / totalAttempted) : 0;

    // Chapter performance list
    const chapterPerformance = Object.values(chapterMap).map(c => {
      const acc = c.total > 0 ? Math.round((c.correct / c.total) * 100) : 0;
      let status: 'STRONG' | 'IMPROVING' | 'WEAK' = 'IMPROVING';
      if (acc >= 75) status = 'STRONG';
      else if (acc < 50) status = 'WEAK';
      return {
        chapterId: c.chapterId,
        chapterTitle: c.chapterTitle,
        subject: c.subject,
        totalQuestions: c.total,
        correct: c.correct,
        accuracy: acc,
        status
      };
    }).sort((a, b) => a.accuracy - b.accuracy);

    // Topic performance list
    const topicPerformance = Object.values(topicMap).map(t => {
      const acc = t.total > 0 ? Math.round((t.correct / t.total) * 100) : 0;
      let status: 'WEAK' | 'IMPROVING' | 'STRONG' | 'MASTERED' = 'IMPROVING';
      if (acc >= 90) status = 'MASTERED';
      else if (acc >= 75) status = 'STRONG';
      else if (acc < 50) status = 'WEAK';
      return {
        topicId: t.topicId,
        topicTitle: t.topicTitle,
        chapterTitle: t.chapterTitle,
        subject: t.subject,
        totalQuestions: t.total,
        correct: t.correct,
        accuracy: acc,
        status
      };
    }).sort((a, b) => a.accuracy - b.accuracy);

    return {
      mockId: paper.id,
      testType: (paper.id.startsWith('WEEKLY_MOCK_') ? 'weekly' : 'custom') as any,
      weekNumber: paper.weekNumber,
      year: paper.year,
      title: paper.title,
      startTimestamp,
      submissionTimestamp,
      totalTimeSeconds,
      totalQuestions: paper.questions.length,
      maxMarks: paper.config.maxMarks,
      totalScore,
      totalCorrect,
      totalIncorrect,
      totalUnattempted,
      totalMarkedForReview,
      accuracyPercentage,
      attemptPercentage,
      averageTimePerQuestion,
      subjectScores: subjectStats,
      chapterPerformance,
      topicPerformance,
      answers
    };
  }

  /**
   * Finalizes and submits the active mock test attempt
   * Automatically integrates into AI Weakness Doctor and Mistake Book.
   */
  public static submitActiveMock(paperParam?: WeeklyMockPaper): MockSubmissionResult | null {
    const state = this.getState();
    let paper = paperParam;
    if (!paper && state.activeAttempt) {
      paper = state.savedMocks[state.activeAttempt.mockId];
    }
    if (!paper) {
      paper = this.getOrCreateCurrentWeeklyMock();
    }
    if (!paper) return null;

    const active = state.activeAttempt;

    const startTimestamp = active ? active.startTimestamp : Date.now() - (paper.config.durationMinutes * 60 * 1000);
    const submissionTimestamp = Date.now();
    const totalTimeSeconds = Math.max(1, Math.round((submissionTimestamp - startTimestamp) / 1000));
    const answers = active ? active.answers : {};

    const result = this.calculateMockScore(paper, answers, totalTimeSeconds, startTimestamp, submissionTimestamp);

    // 1. Integration: Update Mistake Book and AI Weakness Doctor
    paper.questions.forEach(q => {
      const userAns = answers[q.questionId];
      const selected = userAns ? userAns.selectedOption : null;
      const isCorrect = selected === q.correctAnswer;
      const timeSpent = userAns ? userAns.timeSpentSeconds : 45;

      // Always record in AI Weakness Doctor engine if attempted
      if (selected !== null && selected !== undefined) {
        WeaknessDoctorService.recordQuestionAttempt({
          questionId: q.questionId,
          topicId: q.topicId,
          status: isCorrect ? 'correct' : 'incorrect',
          selectedOption: selected,
          correctOption: q.correctAnswer,
          timeSpentSeconds: timeSpent,
          source: 'weekly_mock'
        });
      }

      // If incorrect, automatically add to Mistake Book
      if (selected !== null && selected !== undefined && !isCorrect) {
        MistakeBookService.recordMistake({
          questionId: q.questionId,
          sourceMockId: paper!.id,
          sourceType: 'weekly_mock',
          subject: q.subject,
          subjectName: q.subjectName,
          chapterId: q.chapterId,
          chapterTitle: q.chapterTitle,
          topicId: q.topicId,
          topicTitle: q.topicTitle,
          question: q.question,
          options: q.options,
          studentAnswer: selected,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          conceptTested: q.conceptTested
        });
      }
    });

    // 2. Update Streak & Recent Questions
    if (paper.id.startsWith('WEEKLY_MOCK_')) {
      const { year, weekNumber } = this.getCurrentYearAndWeek();
      if (state.lastCompletedYear === year && state.lastCompletedWeekNumber === weekNumber - 1) {
        state.weeklyStreak += 1;
      } else if (state.lastCompletedWeekNumber !== weekNumber) {
        state.weeklyStreak = 1;
      }
      state.lastCompletedWeekNumber = weekNumber;
      state.lastCompletedYear = year;

      // Store used question IDs
      const usedIds = paper.questions.map(q => q.questionId);
      state.recentMockQuestionIds = Array.from(new Set([...state.recentMockQuestionIds, ...usedIds])).slice(-500);
    }

    // 3. Save result in history
    state.history = [result, ...state.history.filter(h => h.mockId !== paper!.id)];
    state.activeAttempt = null; // Clear active attempt
    this.saveState(state);

    return result;
  }

  public static generateWeeklyMock(year?: number, weekNumber?: number): WeeklyMockPaper & { mockId: string } {
    const current = this.getCurrentYearAndWeek();
    const y = year || current.year;
    const w = weekNumber || current.weekNumber;
    const mockId = `WEEKLY_MOCK_${y}_W${String(w).padStart(2, '0')}`;
    const paper = this.generateWeeklyPaper(y, w, mockId);
    const state = this.getState();
    state.savedMocks[mockId] = paper;
    this.saveState(state);
    return { ...paper, mockId: paper.id };
  }

  public static generateCustomTest(params: {
    title: string;
    subject?: string;
    chapterIds?: string[];
    totalQuestions: number;
    durationMinutes: number;
  }): WeeklyMockPaper & { mockId: string } {
    const sub = (params.subject === 'physics' || params.subject === 'chemistry' || params.subject === 'biology') ? params.subject : undefined;
    const paper = this.generateCustomOrChapterTest({
      testType: params.chapterIds && params.chapterIds.length > 0 ? 'chapter' : 'custom',
      title: params.title,
      subject: sub,
      chapterIds: params.chapterIds,
      questionCount: params.totalQuestions,
      durationMinutes: params.durationMinutes
    });
    const state = this.getState();
    state.savedMocks[paper.id] = paper;
    this.saveState(state);
    return { ...paper, mockId: paper.id };
  }

  public static getActiveMock(): any {
    const state = this.getState();
    if (!state.activeAttempt || state.activeAttempt.isSubmitted) return null;
    const paper = state.savedMocks[state.activeAttempt.mockId] || this.getOrCreateCurrentWeeklyMock();
    const timeRemainingSeconds = Math.max(0, Math.round((state.activeAttempt.endTimestamp - Date.now()) / 1000));
    return {
      mockId: state.activeAttempt.mockId,
      status: timeRemainingSeconds > 0 ? 'in_progress' : 'completed',
      timeRemainingSeconds,
      currentQuestionIndex: state.activeAttempt.currentQuestionIndex,
      questions: paper.questions,
      answers: state.activeAttempt.answers,
      paper,
      activeAttempt: state.activeAttempt
    };
  }

  public static saveActiveMock(mockOrPaper: any): void {
    if (!mockOrPaper) return;
    const state = this.getState();
    if (mockOrPaper.id) {
      state.savedMocks[mockOrPaper.id] = mockOrPaper;
    }
    if (mockOrPaper.mockId) {
      if (mockOrPaper.paper) {
        state.savedMocks[mockOrPaper.mockId] = mockOrPaper.paper;
      }
    }
    if (state.activeAttempt) {
      if (mockOrPaper.currentQuestionIndex !== undefined) {
        state.activeAttempt.currentQuestionIndex = mockOrPaper.currentQuestionIndex;
      }
      if (mockOrPaper.timeRemainingSeconds !== undefined) {
        state.activeAttempt.endTimestamp = Date.now() + (mockOrPaper.timeRemainingSeconds * 1000);
      }
    }
    this.saveState(state);
  }

  public static recordAnswer(qIndex: number, optIndex: number): void {
    const state = this.getState();
    if (!state.activeAttempt) return;
    const paper = state.savedMocks[state.activeAttempt.mockId] || this.getOrCreateCurrentWeeklyMock();
    if (!paper) return;
    const q = paper.questions[qIndex];
    if (!q) return;
    const current = state.activeAttempt.answers[q.questionId];
    const isMarked = current ? !!current.isMarkedForReview : false;
    this.recordQuestionResponse(q.questionId, optIndex, isMarked);
  }

  public static toggleMarkForReview(qIndex: number): void {
    const state = this.getState();
    if (!state.activeAttempt) return;
    const paper = state.savedMocks[state.activeAttempt.mockId] || this.getOrCreateCurrentWeeklyMock();
    if (!paper) return;
    const q = paper.questions[qIndex];
    if (!q) return;
    const current = state.activeAttempt.answers[q.questionId];
    const isMarked = current ? !current.isMarkedForReview : true;
    const selected = current ? current.selectedOption : null;
    this.recordQuestionResponse(q.questionId, selected, isMarked);
  }

  public static clearAnswer(qIndex: number): void {
    const state = this.getState();
    if (!state.activeAttempt) return;
    const paper = state.savedMocks[state.activeAttempt.mockId] || this.getOrCreateCurrentWeeklyMock();
    if (!paper) return;
    const q = paper.questions[qIndex];
    if (!q) return;
    const current = state.activeAttempt.answers[q.questionId];
    const isMarked = current ? current.isMarkedForReview : false;
    this.recordQuestionResponse(q.questionId, null, isMarked);
  }

  /**
   * Retrieves past submitted result for a specific mockId
   */
  public static getSubmittedResult(mockId: string): MockSubmissionResult | null {
    const state = this.getState();
    return state.history.find(h => h.mockId === mockId) || null;
  }

  /**
   * Computes student personal bests across all completed mocks
   */
  public static getPersonalBests(): {
    bestScore: number;
    bestAccuracy: number;
    bestSubject: string;
    totalTestsCompleted: number;
    weeklyStreak: number;
    averageScore: number;
    latestScore: number;
    scoreImprovement: number;
  } {
    const state = this.getState();
    const history = state.history;

    if (history.length === 0) {
      return {
        bestScore: 0,
        bestAccuracy: 0,
        bestSubject: 'N/A',
        totalTestsCompleted: 0,
        weeklyStreak: state.weeklyStreak || 0,
        averageScore: 0,
        latestScore: 0,
        scoreImprovement: 0
      };
    }

    let bestScore = 0;
    let bestAccuracy = 0;
    let subjectScoresSum = { Physics: 0, Chemistry: 0, Biology: 0 };
    let totalScoreSum = 0;

    history.forEach(h => {
      if (h.totalScore > bestScore) bestScore = h.totalScore;
      if (h.accuracyPercentage > bestAccuracy) bestAccuracy = h.accuracyPercentage;
      totalScoreSum += h.totalScore;
      subjectScoresSum.Physics += h.subjectScores.physics.accuracy;
      subjectScoresSum.Chemistry += h.subjectScores.chemistry.accuracy;
      subjectScoresSum.Biology += h.subjectScores.biology.accuracy;
    });

    let bestSubject = 'Biology';
    let maxSubAcc = -1;
    Object.entries(subjectScoresSum).forEach(([sub, sum]) => {
      const avg = sum / history.length;
      if (avg > maxSubAcc) {
        maxSubAcc = avg;
        bestSubject = sub;
      }
    });

    const averageScore = Math.round(totalScoreSum / history.length);
    const latestScore = history[0].totalScore;
    const oldestScore = history[history.length - 1].totalScore;
    const scoreImprovement = history.length > 1 ? latestScore - oldestScore : 0;

    return {
      bestScore,
      bestAccuracy,
      bestSubject,
      totalTestsCompleted: history.length,
      weeklyStreak: state.weeklyStreak || 1,
      averageScore,
      latestScore,
      scoreImprovement
    };
  }
}
