export interface MistakeRecord {
  id: string;
  questionId: string;
  sourceMockId?: string;
  sourceType: 'weekly_mock' | 'chapter_test' | 'custom_test' | 'topic_pyq' | 'diagnostic_quiz';
  subject: 'physics' | 'chemistry' | 'biology';
  subjectName: string;
  chapterId: string;
  chapterTitle: string;
  topicId: string;
  topicTitle: string;
  question: string;
  options: string[];
  studentAnswer: number | null;
  correctAnswer: number;
  explanation: string;
  conceptTested?: string;
  date: number; // timestamp
  timesIncorrect: number;
  isRepeatedMistake: boolean;
  isResolved: boolean;
  resolvedDate?: number;
}

export interface MistakeBookState {
  mistakes: Record<string, MistakeRecord>; // keyed by questionId
  totalMistakesCount: number;
  repeatedMistakesCount: number;
  resolvedMistakesCount: number;
}

const MISTAKE_BOOK_STORAGE_KEY = 'vg_neet_mistake_book_v1';

export class MistakeBookService {
  public static getState(): MistakeBookState {
    try {
      const data = localStorage.getItem(MISTAKE_BOOK_STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('Failed to parse mistake book state:', e);
    }
    return {
      mistakes: {},
      totalMistakesCount: 0,
      repeatedMistakesCount: 0,
      resolvedMistakesCount: 0
    };
  }

  public static saveState(state: MistakeBookState): void {
    try {
      // Recalculate summary counts
      const all = Object.values(state.mistakes);
      state.totalMistakesCount = all.length;
      state.repeatedMistakesCount = all.filter(m => m.isRepeatedMistake && !m.isResolved).length;
      state.resolvedMistakesCount = all.filter(m => m.isResolved).length;
      localStorage.setItem(MISTAKE_BOOK_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save mistake book state:', e);
    }
  }

  /**
   * Records an incorrect answer into the Mistake Book
   */
  public static recordMistake(record: {
    questionId: string;
    sourceMockId?: string;
    sourceType: 'weekly_mock' | 'chapter_test' | 'custom_test' | 'topic_pyq' | 'diagnostic_quiz';
    subject: 'physics' | 'chemistry' | 'biology';
    subjectName: string;
    chapterId: string;
    chapterTitle: string;
    topicId: string;
    topicTitle: string;
    question: string;
    options: string[];
    studentAnswer: number | null;
    correctAnswer: number;
    explanation: string;
    conceptTested?: string;
  }): void {
    const state = this.getState();
    const existing = state.mistakes[record.questionId];

    if (existing) {
      const newTimes = existing.timesIncorrect + 1;
      state.mistakes[record.questionId] = {
        ...existing,
        studentAnswer: record.studentAnswer,
        date: Date.now(),
        timesIncorrect: newTimes,
        isRepeatedMistake: newTimes >= 2,
        isResolved: false // re-opened because incorrect again
      };
    } else {
      state.mistakes[record.questionId] = {
        id: `mistake_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        questionId: record.questionId,
        sourceMockId: record.sourceMockId,
        sourceType: record.sourceType,
        subject: record.subject,
        subjectName: record.subjectName,
        chapterId: record.chapterId,
        chapterTitle: record.chapterTitle,
        topicId: record.topicId,
        topicTitle: record.topicTitle,
        question: record.question,
        options: record.options,
        studentAnswer: record.studentAnswer,
        correctAnswer: record.correctAnswer,
        explanation: record.explanation,
        conceptTested: record.conceptTested,
        date: Date.now(),
        timesIncorrect: 1,
        isRepeatedMistake: false,
        isResolved: false
      };
    }

    this.saveState(state);
  }

  /**
   * Marks a mistake as resolved after successful practice
   */
  public static resolveMistake(questionId: string): void {
    const state = this.getState();
    if (state.mistakes[questionId]) {
      state.mistakes[questionId].isResolved = true;
      state.mistakes[questionId].resolvedDate = Date.now();
      this.saveState(state);
    }
  }

  /**
   * Removes a mistake from the book
   */
  public static removeMistake(questionId: string): void {
    const state = this.getState();
    if (state.mistakes[questionId]) {
      delete state.mistakes[questionId];
      this.saveState(state);
    }
  }

  /**
   * Clears all resolved mistakes
   */
  public static clearResolved(): void {
    const state = this.getState();
    Object.keys(state.mistakes).forEach(qId => {
      if (state.mistakes[qId].isResolved) {
        delete state.mistakes[qId];
      }
    });
    this.saveState(state);
  }

  /**
   * Retrieves all mistakes filtered by options
   */
  public static getMistakesList(filter: {
    subject?: string;
    onlyRepeated?: boolean;
    onlyUnresolved?: boolean;
    searchQuery?: string;
  } = {}): MistakeRecord[] {
    const state = this.getState();
    let list = Object.values(state.mistakes);

    if (filter.subject && filter.subject !== 'all') {
      list = list.filter(m => m.subject === filter.subject);
    }

    if (filter.onlyRepeated) {
      list = list.filter(m => m.isRepeatedMistake);
    }

    if (filter.onlyUnresolved !== false) {
      list = list.filter(m => !m.isResolved);
    }

    if (filter.searchQuery && filter.searchQuery.trim()) {
      const q = filter.searchQuery.toLowerCase();
      list = list.filter(m =>
        m.question.toLowerCase().includes(q) ||
        m.topicTitle.toLowerCase().includes(q) ||
        m.chapterTitle.toLowerCase().includes(q)
      );
    }

    // Sort newest mistakes first, repeated mistakes prioritized
    return list.sort((a, b) => {
      if (a.isRepeatedMistake && !b.isRepeatedMistake) return -1;
      if (!a.isRepeatedMistake && b.isRepeatedMistake) return 1;
      return b.date - a.date;
    });
  }
}
