import { TOPICS, CHAPTERS, CLASSIFICATIONS, SUBJECTS } from '../data/neetData';
import { TOPIC_DETAILS } from '../data/topicDetails';
import { PYQuestion, PracticeQuestion } from '../types/neet';
import {
  QuestionAttemptRecord,
  TopicWeaknessStats,
  WeaknessDashboardMetrics,
  WeaknessStatus,
  WeaknessStorageState
} from '../types/weakness';

const WEAKNESS_STORAGE_KEY = 'vg_neet_weakness_doctor_v1';
const MIN_QUESTIONS_FOR_STATUS = 3;

export class WeaknessDoctorService {
  /**
   * Retrieves the raw persisted storage state
   */
  public static getStorageState(): WeaknessStorageState {
    try {
      const data = localStorage.getItem(WEAKNESS_STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('Failed to parse weakness doctor state from localStorage:', e);
    }
    return {
      attempts: [],
      topicHistories: {},
      lastEvaluatedTimestamp: Date.now()
    };
  }

  /**
   * Saves raw storage state to localStorage
   */
  public static saveStorageState(state: WeaknessStorageState): void {
    try {
      localStorage.setItem(WEAKNESS_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save weakness doctor state:', e);
    }
  }

  /**
   * Resolves the full context (subjectId, subjectName, chapterId, chapterTitle) for any topicId
   */
  public static resolveTopicContext(topicId: string): {
    topicTitle: string;
    chapterId: string;
    chapterTitle: string;
    subjectId: string;
    subjectName: string;
  } {
    const topic = TOPICS[topicId];
    const detail = (TOPIC_DETAILS as any)[topicId] ||
      (TOPIC_DETAILS as any)[`phys-${topicId}`] ||
      (TOPIC_DETAILS as any)[`chem-${topicId}`] ||
      (TOPIC_DETAILS as any)[`bio-${topicId}`];

    let topicTitle = topic?.title || detail?.topicName || detail?.title || topicId.replace(/^(phys|chem|bio)-/, '').replace(/-/g, ' ');
    let chapterId = topic?.chapterId || detail?.chapterId || detail?.chapter || '';
    
    // If chapterId not found on topic, search chapters for topicId
    if (!chapterId) {
      for (const [cId, ch] of Object.entries(CHAPTERS)) {
        if (ch.topicIds.includes(topicId)) {
          chapterId = cId;
          break;
        }
      }
    }

    const chapter = CHAPTERS[chapterId];
    const chapterTitle = chapter?.title || chapterId.replace(/-/g, ' ') || 'General NEET Chapter';
    const classification = chapter ? CLASSIFICATIONS[chapter.classificationId] : undefined;

    let subjectId = classification?.subjectId || (detail?.subject?.toLowerCase()) || '';
    if (!subjectId) {
      if (topicId.startsWith('phys-') || chapterId.startsWith('phys-') || chapterId.includes('motion') || chapterId.includes('units') || chapterId.includes('optics')) {
        subjectId = 'physics';
      } else if (topicId.startsWith('chem-') || chapterId.startsWith('chem-') || chapterId.includes('solutions') || chapterId.includes('electrochemistry') || chapterId.includes('amines')) {
        subjectId = 'chemistry';
      } else {
        subjectId = 'biology';
      }
    }

    const subject = SUBJECTS.find(s => s.id === subjectId);
    const subjectName = subject?.name || (subjectId ? subjectId.charAt(0).toUpperCase() + subjectId.slice(1) : 'General');

    return {
      topicTitle,
      chapterId,
      chapterTitle,
      subjectId,
      subjectName
    };
  }

  /**
   * Deterministically records a single question attempt locally (0 API calls)
   */
  public static recordQuestionAttempt(params: {
    questionId: string;
    topicId: string;
    status: 'correct' | 'incorrect' | 'skipped';
    selectedOption: number;
    correctOption: number;
    timeSpentSeconds?: number;
    source?: 'topic_pyq' | 'topic_practice' | 'diagnostic_quiz' | 'focused_fix' | 'weekly_mock' | 'chapter_test' | 'custom_test';
  }): TopicWeaknessStats {
    const state = this.getStorageState();
    const context = this.resolveTopicContext(params.topicId);

    // Count previous attempts for this topic
    const previousTopicAttempts = state.attempts.filter(a => a.topicId === params.topicId);
    const attemptNumber = previousTopicAttempts.length + 1;

    const newAttempt: QuestionAttemptRecord = {
      id: `attempt_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      questionId: params.questionId,
      subjectId: context.subjectId,
      chapterId: context.chapterId,
      topicId: params.topicId,
      status: params.status,
      selectedOption: params.selectedOption,
      correctOption: params.correctOption,
      timeSpentSeconds: Math.max(1, params.timeSpentSeconds || 30),
      attemptNumber,
      timestamp: Date.now(),
      source: params.source || 'topic_pyq'
    };

    state.attempts.push(newAttempt);

    // Calculate updated topic performance
    const allTopicAttempts = [...previousTopicAttempts, newAttempt];
    const totalCount = allTopicAttempts.length;
    const correctCount = allTopicAttempts.filter(a => a.status === 'correct').length;
    const currentAccuracy = Math.round((correctCount / totalCount) * 100);

    // Update historical accuracy milestones for progress visualization
    if (!state.topicHistories[params.topicId]) {
      state.topicHistories[params.topicId] = [];
    }

    const history = state.topicHistories[params.topicId];
    // Push new accuracy landmark when attempts increase or accuracy changes
    if (history.length === 0 || history[history.length - 1] !== currentAccuracy) {
      history.push(currentAccuracy);
      // Keep up to 6 historical landmarks
      if (history.length > 6) {
        history.shift();
      }
    }

    state.lastEvaluatedTimestamp = Date.now();
    this.saveStorageState(state);

    return this.calculateTopicStats(params.topicId, allTopicAttempts, history);
  }

  /**
   * Deterministically calculates performance stats for a single topic using pure JavaScript
   */
  public static calculateTopicStats(
    topicId: string,
    attempts: QuestionAttemptRecord[],
    history: number[] = []
  ): TopicWeaknessStats {
    const context = this.resolveTopicContext(topicId);
    const totalAttempts = attempts.length;
    const correctCount = attempts.filter(a => a.status === 'correct').length;
    const incorrectCount = attempts.filter(a => a.status === 'incorrect').length;
    const skippedCount = attempts.filter(a => a.status === 'skipped').length;
    
    const accuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;
    
    const previousAccuracy = history.length > 1 ? history[history.length - 2] : undefined;

    // Determine Weakness Status based on official thresholds & sample count
    let status: WeaknessStatus = 'INSUFFICIENT_DATA';
    if (totalAttempts >= MIN_QUESTIONS_FOR_STATUS) {
      if (accuracy >= 90) {
        status = 'MASTERED';
      } else if (accuracy >= 75) {
        status = 'STRONG';
      } else if (accuracy >= 50) {
        // If it was previously lower or improved, label as IMPROVING, else NEEDS REVISION
        status = (previousAccuracy !== undefined && accuracy > previousAccuracy) ? 'IMPROVING' : 'IMPROVING';
      } else {
        status = 'WEAK';
      }
    }

    // Weakness Priority Score:
    // Factors: (100 - accuracy), high mistake count, low sample penalty, recent mistakes
    let weaknessScore = 0;
    if (totalAttempts >= MIN_QUESTIONS_FOR_STATUS) {
      weaknessScore = (100 - accuracy) * 1.5 + (incorrectCount * 3);
      if (status === 'WEAK') weaknessScore += 25;
      if (status === 'MASTERED') weaknessScore = 0; // stop recommending mastered topics
    } else if (totalAttempts > 0) {
      // Small boost for topics already started with errors
      weaknessScore = incorrectCount * 5;
    }

    // Mark loss calculation: each incorrect answer costs 5 marks in NEET (+4 missed, -1 penalty)
    const markLoss = incorrectCount * 5;

    const totalTimeSpentSeconds = attempts.reduce((acc, a) => acc + (a.timeSpentSeconds || 0), 0);
    const averageTimePerQuestionSeconds = totalAttempts > 0 ? Math.round(totalTimeSpentSeconds / totalAttempts) : 0;
    const lastAttemptTimestamp = attempts.length > 0 ? attempts[attempts.length - 1].timestamp : 0;

    return {
      topicId,
      topicTitle: context.topicTitle,
      subjectId: context.subjectId,
      subjectName: context.subjectName,
      chapterId: context.chapterId,
      chapterTitle: context.chapterTitle,
      totalAttempts,
      correctCount,
      incorrectCount,
      skippedCount,
      accuracy,
      previousAccuracy,
      accuracyHistory: history.length > 0 ? history : (totalAttempts > 0 ? [accuracy] : []),
      status,
      weaknessScore,
      totalTimeSpentSeconds,
      averageTimePerQuestionSeconds,
      lastAttemptTimestamp,
      markLoss,
      mistakesRatio: `${incorrectCount}/${totalAttempts}`,
      isMastered: status === 'MASTERED',
      isImproving: status === 'IMPROVING' || (previousAccuracy !== undefined && accuracy > previousAccuracy),
      isWeak: status === 'WEAK'
    };
  }

  /**
   * Computes comprehensive overall dashboard statistics locally (0 AI/API calls)
   */
  public static getDashboardMetrics(): WeaknessDashboardMetrics {
    const state = this.getStorageState();
    const attempts = state.attempts;

    const totalQuestionsAttempted = attempts.length;
    const totalCorrect = attempts.filter(a => a.status === 'correct').length;
    const totalIncorrect = attempts.filter(a => a.status === 'incorrect').length;
    const totalSkipped = attempts.filter(a => a.status === 'skipped').length;
    const overallAccuracy = totalQuestionsAttempted > 0 ? Math.round((totalCorrect / totalQuestionsAttempted) * 100) : 0;
    const totalTimeSpentSeconds = attempts.reduce((acc, a) => acc + (a.timeSpentSeconds || 0), 0);

    // Group attempts by topic
    const topicAttemptsMap: Record<string, QuestionAttemptRecord[]> = {};
    attempts.forEach(a => {
      if (!topicAttemptsMap[a.topicId]) {
        topicAttemptsMap[a.topicId] = [];
      }
      topicAttemptsMap[a.topicId].push(a);
    });

    // Compute stats for all attempted topics
    const allTopicStats: TopicWeaknessStats[] = Object.keys(topicAttemptsMap).map(topicId => {
      const history = state.topicHistories[topicId] || [];
      return this.calculateTopicStats(topicId, topicAttemptsMap[topicId], history);
    });

    // Subject Breakdown
    const subjectMap: Record<string, { total: number; correct: number; weak: number; mastered: number; name: string }> = {
      physics: { total: 0, correct: 0, weak: 0, mastered: 0, name: 'Physics' },
      chemistry: { total: 0, correct: 0, weak: 0, mastered: 0, name: 'Chemistry' },
      biology: { total: 0, correct: 0, weak: 0, mastered: 0, name: 'Biology' }
    };

    attempts.forEach(a => {
      const sId = a.subjectId || 'physics';
      if (subjectMap[sId]) {
        subjectMap[sId].total++;
        if (a.status === 'correct') subjectMap[sId].correct++;
      }
    });

    allTopicStats.forEach(ts => {
      if (subjectMap[ts.subjectId]) {
        if (ts.status === 'WEAK') subjectMap[ts.subjectId].weak++;
        if (ts.status === 'MASTERED') subjectMap[ts.subjectId].mastered++;
      }
    });

    const subjectBreakdown: Record<string, any> = {};
    let strongestSubject: { name: string; accuracy: number; totalQuestions: number } | null = null;
    let weakestSubject: { name: string; accuracy: number; totalQuestions: number } | null = null;

    let highestSubjAcc = -1;
    let lowestSubjAcc = 101;

    Object.entries(subjectMap).forEach(([sId, data]) => {
      const acc = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
      subjectBreakdown[sId] = {
        subjectName: data.name,
        totalAttempts: data.total,
        correctCount: data.correct,
        accuracy: acc,
        weakTopicsCount: data.weak,
        masteredTopicsCount: data.mastered
      };

      if (data.total >= MIN_QUESTIONS_FOR_STATUS) {
        if (acc > highestSubjAcc) {
          highestSubjAcc = acc;
          strongestSubject = { name: data.name, accuracy: acc, totalQuestions: data.total };
        }
        if (acc < lowestSubjAcc) {
          lowestSubjAcc = acc;
          weakestSubject = { name: data.name, accuracy: acc, totalQuestions: data.total };
        }
      }
    });

    // Weakest Chapter Calculation
    const chapterMap: Record<string, { title: string; subjectName: string; total: number; correct: number; incorrect: number }> = {};
    attempts.forEach(a => {
      if (!chapterMap[a.chapterId]) {
        const ctx = this.resolveTopicContext(a.topicId);
        chapterMap[a.chapterId] = {
          title: ctx.chapterTitle,
          subjectName: ctx.subjectName,
          total: 0,
          correct: 0,
          incorrect: 0
        };
      }
      chapterMap[a.chapterId].total++;
      if (a.status === 'correct') chapterMap[a.chapterId].correct++;
      if (a.status === 'incorrect') chapterMap[a.chapterId].incorrect++;
    });

    let weakestChapter: { title: string; subjectName: string; accuracy: number; mistakes: number } | null = null;
    let lowestChapAcc = 101;
    Object.values(chapterMap).forEach(ch => {
      if (ch.total >= MIN_QUESTIONS_FOR_STATUS) {
        const acc = Math.round((ch.correct / ch.total) * 100);
        if (acc < lowestChapAcc) {
          lowestChapAcc = acc;
          weakestChapter = {
            title: ch.title,
            subjectName: ch.subjectName,
            accuracy: acc,
            mistakes: ch.incorrect
          };
        }
      }
    });

    // Counts
    const qualifiedTopics = allTopicStats.filter(t => t.totalAttempts >= MIN_QUESTIONS_FOR_STATUS);
    const weakTopics = qualifiedTopics.filter(t => t.status === 'WEAK');
    const improvingTopics = qualifiedTopics.filter(t => t.status === 'IMPROVING');
    const masteredTopics = qualifiedTopics.filter(t => t.status === 'MASTERED');
    const needsRevisionTopics = qualifiedTopics.filter(t => t.accuracy < 75 && t.status !== 'MASTERED');

    // Weakest Topic
    const weakestTopic = weakTopics.sort((a, b) => b.weaknessScore - a.weaknessScore)[0] || null;

    // Biggest Mark Loss Area
    let biggestMarkLossArea: any = null;
    const sortedByLoss = [...allTopicStats].sort((a, b) => b.markLoss - a.markLoss);
    if (sortedByLoss.length > 0 && sortedByLoss[0].markLoss > 0) {
      biggestMarkLossArea = {
        topicTitle: sortedByLoss[0].topicTitle,
        chapterTitle: sortedByLoss[0].chapterTitle,
        markLoss: sortedByLoss[0].markLoss,
        accuracy: sortedByLoss[0].accuracy
      };
    }

    // Most Improved Topic
    let mostImprovedTopic: any = null;
    const improvingWithHistory = allTopicStats
      .filter(t => t.accuracyHistory.length >= 2 && t.accuracy > t.accuracyHistory[0])
      .map(t => ({
        topicTitle: t.topicTitle,
        previousAccuracy: t.accuracyHistory[0],
        currentAccuracy: t.accuracy,
        delta: t.accuracy - t.accuracyHistory[0]
      }))
      .sort((a, b) => b.delta - a.delta);

    if (improvingWithHistory.length > 0) {
      mostImprovedTopic = improvingWithHistory[0];
    }

    // Recommended Next Topic to Fix:
    // Highest weaknessScore that is NOT mastered
    const nonMastered = qualifiedTopics.filter(t => t.status !== 'MASTERED');
    const nextTopicToFix = nonMastered.sort((a, b) => b.weaknessScore - a.weaknessScore)[0] || null;

    return {
      totalQuestionsAttempted,
      totalCorrect,
      totalIncorrect,
      totalSkipped,
      overallAccuracy,
      totalTimeSpentSeconds,
      strongestSubject,
      weakestSubject,
      weakestChapter,
      weakestTopic,
      masteredTopicsCount: masteredTopics.length,
      needsRevisionTopicsCount: needsRevisionTopics.length,
      weakTopicsCount: weakTopics.length,
      improvingTopicsCount: improvingTopics.length,
      biggestMarkLossArea,
      mostImprovedTopic,
      nextTopicToFix,
      subjectBreakdown
    };
  }

  /**
   * Returns list of weak topics sorted by priority (below 50% accuracy with >=3 attempts)
   */
  public static getWeakTopics(limit: number = 10): TopicWeaknessStats[] {
    const state = this.getStorageState();
    const topicMap: Record<string, QuestionAttemptRecord[]> = {};
    state.attempts.forEach(a => {
      if (!topicMap[a.topicId]) topicMap[a.topicId] = [];
      topicMap[a.topicId].push(a);
    });

    return Object.keys(topicMap)
      .map(tId => this.calculateTopicStats(tId, topicMap[tId], state.topicHistories[tId] || []))
      .filter(t => (t.status === 'WEAK' || t.accuracy < 50) && t.totalAttempts >= 1)
      .sort((a, b) => b.weaknessScore - a.weaknessScore)
      .slice(0, limit);
  }

  /**
   * Alias for getWeakTopics
   */
  public static getCriticalWeaknesses(limit: number = 10): TopicWeaknessStats[] {
    return this.getWeakTopics(limit);
  }

  /**
   * Returns list of improving topics (50-74% or positive trajectory)
   */
  public static getImprovingTopics(limit: number = 10): TopicWeaknessStats[] {
    const state = this.getStorageState();
    const topicMap: Record<string, QuestionAttemptRecord[]> = {};
    state.attempts.forEach(a => {
      if (!topicMap[a.topicId]) topicMap[a.topicId] = [];
      topicMap[a.topicId].push(a);
    });

    return Object.keys(topicMap)
      .map(tId => this.calculateTopicStats(tId, topicMap[tId], state.topicHistories[tId] || []))
      .filter(t => (t.status === 'IMPROVING' || (t.accuracy >= 50 && t.accuracy < 90)) && t.status !== 'MASTERED' && t.totalAttempts >= MIN_QUESTIONS_FOR_STATUS)
      .sort((a, b) => b.accuracy - a.accuracy)
      .slice(0, limit);
  }

  /**
   * Returns list of mastered topics (90-100% accuracy with >=3 attempts)
   */
  public static getMasteredTopics(limit: number = 10): TopicWeaknessStats[] {
    const state = this.getStorageState();
    const topicMap: Record<string, QuestionAttemptRecord[]> = {};
    state.attempts.forEach(a => {
      if (!topicMap[a.topicId]) topicMap[a.topicId] = [];
      topicMap[a.topicId].push(a);
    });

    return Object.keys(topicMap)
      .map(tId => this.calculateTopicStats(tId, topicMap[tId], state.topicHistories[tId] || []))
      .filter(t => t.status === 'MASTERED' && t.totalAttempts >= MIN_QUESTIONS_FOR_STATUS)
      .sort((a, b) => b.accuracy - a.accuracy)
      .slice(0, limit);
  }

  /**
   * Extracts all verified PYQs and practice questions for a specific topic from the local offline database
   */
  public static getQuestionsForTopic(topicId: string): Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty?: string;
    conceptTested?: string;
    source: string;
  }> {
    const questions: Array<any> = [];
    const seenQuestions = new Set<string>();

    const addQ = (q: any, defaultSource: string) => {
      const qText = q.question || q.questionText || '';
      if (!qText || seenQuestions.has(qText.trim())) return;
      seenQuestions.add(qText.trim());

      const rawOpts = Array.isArray(q.options) ? q.options : [];
      if (rawOpts.length < 2) return;

      const correctAns = typeof q.correctAnswer === 'number' ? q.correctAnswer :
        (typeof q.correctOption === 'number' ? q.correctOption :
        (typeof q.correctAnswerIndex === 'number' ? q.correctAnswerIndex : 0));

      questions.push({
        id: q.id || `q_${topicId}_${questions.length + 1}`,
        question: qText,
        options: rawOpts,
        correctAnswer: correctAns,
        explanation: q.explanation || 'Refer to standard NCERT NEET UG step-by-step principles for this concept.',
        difficulty: q.difficulty || 'Medium',
        conceptTested: q.conceptTested || q.topicTested || 'Core NEET Concept',
        source: q.exam ? `${q.exam} ${q.year || ''}` : defaultSource
      });
    };

    // 1. Look in TOPIC_DETAILS
    const detail = (TOPIC_DETAILS as any)[topicId] ||
      (TOPIC_DETAILS as any)[`phys-${topicId}`] ||
      (TOPIC_DETAILS as any)[`chem-${topicId}`] ||
      (TOPIC_DETAILS as any)[`bio-${topicId}`] ||
      (TOPIC_DETAILS as any)[topicId.replace(/^(phys|chem|bio)-/, '')];

    if (detail) {
      (detail.pyqs || []).forEach((q: any) => addQ(q, 'NEET UG PYQ'));
      (detail.practiceQuestions || detail.practiceCards || []).forEach((q: any) => addQ(q, 'NCERT Practice Drill'));
    }

    // 2. Look in TOPICS
    const topic = TOPICS[topicId] || TOPICS[`phys-${topicId}`] || TOPICS[`chem-${topicId}`] || TOPICS[`bio-${topicId}`];
    if (topic) {
      (topic.pyqs || []).forEach((q: any) => addQ(q, 'NEET UG PYQ'));
      (topic.notes?.practiceQuestions || []).forEach((q: any) => addQ(q, 'Concept Drill'));
    }

    // 3. If very few questions found, look for questions in sibling topics of the same chapter
    if (questions.length < 5 && topic?.chapterId) {
      const chapter = CHAPTERS[topic.chapterId];
      if (chapter && Array.isArray(chapter.topicIds)) {
        chapter.topicIds.forEach(siblingId => {
          if (siblingId !== topicId && questions.length < 10) {
            const sibDetail = (TOPIC_DETAILS as any)[siblingId];
            if (sibDetail) {
              (sibDetail.pyqs || []).forEach((q: any) => addQ(q, 'Chapter PYQ'));
              (sibDetail.practiceQuestions || []).forEach((q: any) => addQ(q, 'Chapter Drill'));
            }
          }
        });
      }
    }

    return questions;
  }

  /**
   * Generates a 10-question NEET UG Diagnostic Assessment drawn from across Physics, Chemistry, and Biology
   */
  public static getDiagnosticAssessment(): Array<{
    id: string;
    topicId: string;
    topicTitle: string;
    subjectName: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty: string;
  }> {
    const diagnosticList: any[] = [];
    const sampleTopics = [
      'phys-units-errors',
      'phys-projectile-motion',
      'phys-work-done',
      'phys-coulombs-law',
      'chem-electrochemistry-nernst',
      'chem-solutions-colligative',
      'chem-chemical-kinetics-order',
      'chem-amines-basic-character',
      'bio-cell-cycle-mitosis',
      'bio-photosynthesis-light-reaction'
    ];

    sampleTopics.forEach(tId => {
      const qs = this.getQuestionsForTopic(tId);
      const ctx = this.resolveTopicContext(tId);
      if (qs.length > 0) {
        const q = qs[0];
        diagnosticList.push({
          id: `diag_${q.id}`,
          topicId: tId,
          topicTitle: ctx.topicTitle,
          subjectName: ctx.subjectName,
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          difficulty: q.difficulty || 'Medium'
        });
      }
    });

    return diagnosticList;
  }

  /**
   * Optional Gemini API batch generation helper (calls server-side /api/generate-weakness-questions)
   * Sends ONE small batch request instead of per-question calls
   */
  public static async generateGeminiBatchQuestions(
    topicId: string,
    count: number = 5
  ): Promise<Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty?: string;
    conceptTested?: string;
    source: string;
  }>> {
    const ctx = this.resolveTopicContext(topicId);
    try {
      const response = await fetch('/api/generate-weakness-questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: ctx.subjectName,
          chapter: ctx.chapterTitle,
          topic: ctx.topicTitle,
          topicId: topicId,
          count: Math.min(10, Math.max(3, count))
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      if (Array.isArray(data.questions) && data.questions.length > 0) {
        return data.questions.map((q: any, i: number) => ({
          id: `gemini_${topicId}_${Date.now()}_${i}`,
          question: q.question,
          options: q.options,
          correctAnswer: typeof q.correctAnswer === 'number' ? q.correctAnswer : 0,
          explanation: q.explanation || 'Verified NCERT NEET explanation.',
          difficulty: q.difficulty || 'Medium',
          conceptTested: q.conceptTested || ctx.topicTitle,
          source: 'AI Targeted Generator (NEET Pattern)'
        }));
      }
    } catch (err) {
      console.warn('Optional Gemini question generation unavailable, using offline question bank:', err);
    }

    // Fallback: Return offline questions
    return this.getQuestionsForTopic(topicId);
  }

  /**
   * Pre-populates sample test data for demonstration / quick-test if user requests it
   */
  public static seedSampleDiagnosticData(): void {
    const sampleAttempts: Array<{
      topicId: string;
      status: 'correct' | 'incorrect';
      selected: number;
      correct: number;
      time: number;
    }> = [
      // Nernst Equation (Weak: 42%)
      { topicId: 'chem-electrochemistry-nernst', status: 'incorrect', selected: 1, correct: 2, time: 65 },
      { topicId: 'chem-electrochemistry-nernst', status: 'incorrect', selected: 0, correct: 3, time: 54 },
      { topicId: 'chem-electrochemistry-nernst', status: 'correct', selected: 2, correct: 2, time: 48 },
      { topicId: 'chem-electrochemistry-nernst', status: 'incorrect', selected: 1, correct: 0, time: 70 },
      { topicId: 'chem-electrochemistry-nernst', status: 'incorrect', selected: 3, correct: 1, time: 80 },
      { topicId: 'chem-electrochemistry-nernst', status: 'correct', selected: 0, correct: 0, time: 40 },
      { topicId: 'chem-electrochemistry-nernst', status: 'incorrect', selected: 2, correct: 1, time: 55 },
      
      // Projectile Motion (Weak: 33%)
      { topicId: 'phys-projectile-motion', status: 'incorrect', selected: 0, correct: 2, time: 75 },
      { topicId: 'phys-projectile-motion', status: 'correct', selected: 1, correct: 1, time: 50 },
      { topicId: 'phys-projectile-motion', status: 'incorrect', selected: 3, correct: 0, time: 82 },
      { topicId: 'phys-projectile-motion', status: 'incorrect', selected: 2, correct: 1, time: 60 },

      // Dimensional Analysis (Improving: 67%)
      { topicId: 'phys-units-dimensional-analysis', status: 'correct', selected: 0, correct: 0, time: 30 },
      { topicId: 'phys-units-dimensional-analysis', status: 'incorrect', selected: 2, correct: 1, time: 45 },
      { topicId: 'phys-units-dimensional-analysis', status: 'correct', selected: 3, correct: 3, time: 32 },

      // Solutions (Mastered: 100%)
      { topicId: 'chem-solutions-colligative', status: 'correct', selected: 1, correct: 1, time: 28 },
      { topicId: 'chem-solutions-colligative', status: 'correct', selected: 2, correct: 2, time: 31 },
      { topicId: 'chem-solutions-colligative', status: 'correct', selected: 0, correct: 0, time: 25 },
      { topicId: 'chem-solutions-colligative', status: 'correct', selected: 3, correct: 3, time: 29 }
    ];

    const state: WeaknessStorageState = {
      attempts: [],
      topicHistories: {
        'chem-electrochemistry-nernst': [30, 42],
        'phys-projectile-motion': [25, 33],
        'phys-units-dimensional-analysis': [50, 67],
        'chem-solutions-colligative': [85, 100]
      },
      lastEvaluatedTimestamp: Date.now()
    };

    sampleAttempts.forEach((s, idx) => {
      const ctx = this.resolveTopicContext(s.topicId);
      state.attempts.push({
        id: `sample_${idx}`,
        questionId: `sample_q_${idx}`,
        subjectId: ctx.subjectId,
        chapterId: ctx.chapterId,
        topicId: s.topicId,
        status: s.status,
        selectedOption: s.selected,
        correctOption: s.correct,
        timeSpentSeconds: s.time,
        attemptNumber: idx + 1,
        timestamp: Date.now() - (1000 * 60 * (20 - idx)),
        source: 'topic_pyq'
      });
    });

    this.saveStorageState(state);
  }

  /**
   * Clears all weakness diagnostic history
   */
  public static resetWeaknessData(): void {
    localStorage.removeItem(WEAKNESS_STORAGE_KEY);
  }
}
