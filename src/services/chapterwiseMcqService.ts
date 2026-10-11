import { ChapterwiseMCQ, ChapterMCQProgress } from '../types/chapterwiseMcq';
import { UNITS_MEASUREMENTS_MCQS, UNITS_MEASUREMENTS_STATS } from '../data/chapterwise/physics/unitsAndMeasurementsData';
import { MOTION_STRAIGHT_LINE_MCQS, MOTION_STRAIGHT_LINE_STATS } from '../data/chapterwise/physics/motionInAStraightLineData';
import { MOTION_PLANE_MCQS, MOTION_PLANE_STATS } from '../data/chapterwise/physics/motionInAPlaneData';
import { LAWS_OF_MOTION_MCQS, LAWS_OF_MOTION_STATS } from '../data/chapterwise/physics/lawsOfMotionData';
import { MistakeBookService, MistakeRecord } from './mistakeBookService';
import { db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const STORAGE_PREFIX = 'vg_neet_chapter_mcq_progress_';

export class ChapterwiseMcqService {
  /**
   * Retrieves MCQs for a given chapter.
   * Currently populated: 'units-measurements' (500 MCQs), 'motion-straight-line' (500 MCQs), 'motion-plane' (500 MCQs), 'laws-of-motion' (500 MCQs).
   * All other chapters return empty array until populated.
   */
  public static getQuestions(chapterId: string): ChapterwiseMCQ[] {
    if (chapterId === 'units-measurements') {
      return UNITS_MEASUREMENTS_MCQS;
    }
    if (chapterId === 'motion-straight-line') {
      return MOTION_STRAIGHT_LINE_MCQS;
    }
    if (chapterId === 'motion-plane' || chapterId === 'motion-in-a-plane' || chapterId === 'projectile-motion') {
      return MOTION_PLANE_MCQS;
    }
    if (chapterId === 'laws-of-motion') {
      return LAWS_OF_MOTION_MCQS;
    }
    return [];
  }

  /**
   * Returns statistics for a chapter.
   */
  public static getStats(chapterId: string) {
    if (chapterId === 'units-measurements') {
      return UNITS_MEASUREMENTS_STATS;
    }
    if (chapterId === 'motion-straight-line') {
      return MOTION_STRAIGHT_LINE_STATS;
    }
    if (chapterId === 'motion-plane' || chapterId === 'motion-in-a-plane' || chapterId === 'projectile-motion') {
      return MOTION_PLANE_STATS;
    }
    if (chapterId === 'laws-of-motion') {
      return LAWS_OF_MOTION_STATS;
    }
    return null;
  }

  /**
   * Returns question count ready for a chapter.
   */
  public static getQuestionCount(chapterId: string): number {
    if (chapterId === 'units-measurements') {
      return UNITS_MEASUREMENTS_MCQS.length;
    }
    if (chapterId === 'motion-straight-line') {
      return MOTION_STRAIGHT_LINE_MCQS.length;
    }
    if (chapterId === 'motion-plane' || chapterId === 'motion-in-a-plane' || chapterId === 'projectile-motion') {
      return MOTION_PLANE_MCQS.length;
    }
    if (chapterId === 'laws-of-motion') {
      return LAWS_OF_MOTION_MCQS.length;
    }
    return 0;
  }

  /**
   * Retrieves saved progress for a student on a specific chapter.
   */
  public static getProgress(chapterId: string): ChapterMCQProgress {
    const key = `${STORAGE_PREFIX}${chapterId}`;
    const questions = this.getQuestions(chapterId);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem(key);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (!parsed.checkedQuestions) {
            parsed.checkedQuestions = {};
          }
          if (!parsed.draftSelections) {
            parsed.draftSelections = { ...(parsed.userAnswers || {}) };
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading chapter progress:', e);
    }

    return {
      chapterId,
      totalQuestions: questions.length,
      attempted: 0,
      correct: 0,
      incorrect: 0,
      userAnswers: {},
      checkedQuestions: {},
      draftSelections: {},
      bookmarked: {}
    };
  }

  /**
   * Saves a draft option selection before the user clicks 'Check Answer'.
   */
  public static saveDraftSelection(
    chapterId: string,
    questionId: string,
    option: 'A' | 'B' | 'C' | 'D'
  ): ChapterMCQProgress {
    const progress = this.getProgress(chapterId);
    if (!progress.draftSelections) {
      progress.draftSelections = {};
    }
    progress.draftSelections[questionId] = option;

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(`${STORAGE_PREFIX}${chapterId}`, JSON.stringify(progress));
      }
    } catch (e) {
      console.warn('Failed to save draft selection:', e);
    }

    return progress;
  }

  /**
   * Checks and evaluates a single question when the student clicks 'Check Answer'.
   * Reveals solution and syncs wrong answer to Mistake Book.
   */
  public static checkAnswer(
    chapterId: string,
    questionId: string,
    selectedOption: 'A' | 'B' | 'C' | 'D'
  ): { isCorrect: boolean; progress: ChapterMCQProgress } {
    const questions = this.getQuestions(chapterId);
    const question = questions.find(q => q.id === questionId);
    const progress = this.getProgress(chapterId);

    if (!progress.checkedQuestions) {
      progress.checkedQuestions = {};
    }
    if (!progress.draftSelections) {
      progress.draftSelections = {};
    }

    // Lock in the answer and mark as checked
    progress.checkedQuestions[questionId] = true;
    progress.userAnswers[questionId] = selectedOption;
    progress.draftSelections[questionId] = selectedOption;
    progress.lastAttemptedAt = new Date().toISOString();

    const isCorrect = question ? question.correctAnswer === selectedOption : false;

    // Recalculate metrics based on checked questions
    let correctCount = 0;
    let incorrectCount = 0;

    questions.forEach(q => {
      if (progress.checkedQuestions[q.id]) {
        const studentAns = progress.userAnswers[q.id];
        if (studentAns === q.correctAnswer) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      }
    });

    progress.attempted = Object.keys(progress.checkedQuestions).length;
    progress.correct = correctCount;
    progress.incorrect = incorrectCount;
    progress.totalQuestions = questions.length;

    // Save locally
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(`${STORAGE_PREFIX}${chapterId}`, JSON.stringify(progress));
      }
    } catch (e) {
      console.warn('Failed to save progress locally:', e);
    }

    // Automatically sync to Mistake Book if answer was incorrect
    if (!isCorrect && question) {
      this.syncToMistakeBook(chapterId, question, selectedOption);
    }

    return { isCorrect, progress };
  }

  /**
   * Submits all answers together for a chapter, evaluates them, updates stats and mistake book.
   */
  public static submitAllAnswers(
    chapterId: string,
    answers: Record<string, 'A' | 'B' | 'C' | 'D'>
  ): ChapterMCQProgress {
    const questions = this.getQuestions(chapterId);
    const progress = this.getProgress(chapterId);

    if (!progress.checkedQuestions) {
      progress.checkedQuestions = {};
    }

    // Update user answers and mark all answered questions as checked
    progress.userAnswers = { ...answers };
    progress.draftSelections = { ...answers };
    Object.keys(answers).forEach(qId => {
      progress.checkedQuestions[qId] = true;
    });
    progress.lastAttemptedAt = new Date().toISOString();

    let correctCount = 0;
    let incorrectCount = 0;

    questions.forEach(q => {
      if (progress.checkedQuestions[q.id]) {
        const studentAns = progress.userAnswers[q.id];
        if (studentAns) {
          if (studentAns === q.correctAnswer) {
            correctCount++;
          } else {
            incorrectCount++;
            this.syncToMistakeBook(chapterId, q, studentAns);
          }
        }
      }
    });

    progress.attempted = Object.keys(progress.checkedQuestions).length;
    progress.correct = correctCount;
    progress.incorrect = incorrectCount;
    progress.totalQuestions = questions.length;

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(`${STORAGE_PREFIX}${chapterId}`, JSON.stringify(progress));
      }
    } catch (e) {
      console.warn('Failed to save progress locally:', e);
    }

    return progress;
  }

  /**
   * Records a user's answer for a question.
   */
  public static recordAnswer(
    chapterId: string,
    questionId: string,
    selectedOption: 'A' | 'B' | 'C' | 'D'
  ): { isCorrect: boolean; progress: ChapterMCQProgress } {
    const questions = this.getQuestions(chapterId);
    const question = questions.find(q => q.id === questionId);
    const progress = this.getProgress(chapterId);

    if (!question) {
      return { isCorrect: false, progress };
    }

    const isCorrect = question.correctAnswer === selectedOption;

    // Record answer
    progress.userAnswers[questionId] = selectedOption;
    progress.lastAttemptedAt = new Date().toISOString();

    // Recalculate summary metrics
    let correctCount = 0;
    let incorrectCount = 0;

    Object.entries(progress.userAnswers).forEach(([qId, ans]) => {
      const targetQ = questions.find(q => q.id === qId);
      if (targetQ) {
        if (targetQ.correctAnswer === ans) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      }
    });

    progress.attempted = Object.keys(progress.userAnswers).length;
    progress.correct = correctCount;
    progress.incorrect = incorrectCount;
    progress.totalQuestions = questions.length;

    // Save locally
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(`${STORAGE_PREFIX}${chapterId}`, JSON.stringify(progress));
      }
    } catch (e) {
      console.warn('Failed to save progress locally:', e);
    }

    // Automatically sync to Mistake Book if answer was incorrect
    if (!isCorrect) {
      this.syncToMistakeBook(chapterId, question, selectedOption);
    }

    return { isCorrect, progress };
  }

  /**
   * Toggles bookmark for a question.
   */
  public static toggleBookmark(chapterId: string, questionId: string): boolean {
    const progress = this.getProgress(chapterId);
    const currentState = !!progress.bookmarked[questionId];
    progress.bookmarked[questionId] = !currentState;

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(`${STORAGE_PREFIX}${chapterId}`, JSON.stringify(progress));
      }
    } catch (e) {
      console.warn('Failed to save bookmark locally:', e);
    }

    return !currentState;
  }

  /**
   * Resets chapter progress.
   */
  public static resetProgress(chapterId: string): ChapterMCQProgress {
    const questions = this.getQuestions(chapterId);
    let prevBookmarks: Record<string, boolean> = {};
    try {
      const prev = this.getProgress(chapterId);
      prevBookmarks = prev.bookmarked || {};
    } catch (e) {
      // fallback
    }
    const newProgress: ChapterMCQProgress = {
      chapterId,
      totalQuestions: questions.length,
      attempted: 0,
      correct: 0,
      incorrect: 0,
      userAnswers: {},
      checkedQuestions: {},
      draftSelections: {},
      bookmarked: prevBookmarks
    };

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(`${STORAGE_PREFIX}${chapterId}`);
        window.localStorage.setItem(`${STORAGE_PREFIX}${chapterId}`, JSON.stringify(newProgress));
      }
    } catch (e) {
      console.warn('Failed to clear progress:', e);
    }

    return newProgress;
  }

  /**
   * Synchronizes an incorrect answer to the student's Mistake Book.
   */
  private static syncToMistakeBook(
    chapterId: string,
    question: ChapterwiseMCQ,
    studentAnswer: 'A' | 'B' | 'C' | 'D'
  ): void {
    try {
      const mistakeState = MistakeBookService.getState();
      const existing = mistakeState.mistakes[question.id];

      const optionIndexMap: Record<string, number> = { A: 0, B: 1, C: 2, D: 3 };
      const studentIdx = optionIndexMap[studentAnswer] ?? 0;
      const correctIdx = question.correctIndex ?? optionIndexMap[question.correctAnswer] ?? 0;

      const mistakeRecord: MistakeRecord = {
        id: `mistake-${question.id}`,
        questionId: question.id,
        sourceType: 'chapter_test',
        subject: 'physics',
        subjectName: 'Physics',
        chapterId: question.chapterId,
        chapterTitle: question.chapter,
        topicId: `topic-${question.topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        topicTitle: question.topic,
        question: question.question,
        options: question.optionsList || [
          question.options.A,
          question.options.B,
          question.options.C,
          question.options.D
        ],
        studentAnswer: studentIdx,
        correctAnswer: correctIdx,
        explanation: question.explanation,
        conceptTested: question.solutionStructured?.concept || question.topic,
        date: Date.now(),
        timesIncorrect: existing ? existing.timesIncorrect + 1 : 1,
        isRepeatedMistake: existing ? true : false,
        isResolved: false
      };

      mistakeState.mistakes[question.id] = mistakeRecord;
      MistakeBookService.saveState(mistakeState);
    } catch (err) {
      console.warn('Could not sync mistake record:', err);
    }
  }

  /**
   * Background seed to Firestore if user is online and Firestore is active.
   * Completely asynchronous and non-blocking.
   */
  public static async syncChapterToFirestore(chapterId: string): Promise<void> {
    if (chapterId !== 'units-measurements' && chapterId !== 'motion-straight-line' && chapterId !== 'motion-plane' && chapterId !== 'motion-in-a-plane' && chapterId !== 'laws-of-motion') return;
    try {
      const summaryDocRef = doc(db, 'chapterwise_mcqs', chapterId);
      const isMotion = chapterId === 'motion-straight-line';
      const isPlane = chapterId === 'motion-plane' || chapterId === 'motion-in-a-plane';
      const isLOM = chapterId === 'laws-of-motion';
      const chapterTitle = isLOM ? 'Laws of Motion' : (isPlane ? 'Motion in a Plane' : (isMotion ? 'Motion in a Straight Line' : 'Units and Measurements'));
      await setDoc(summaryDocRef, {
        chapterId,
        chapterTitle,
        subject: 'Physics',
        class: '11',
        totalQuestions: 500,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (e) {
      // Non-blocking background catch
    }
  }
}
