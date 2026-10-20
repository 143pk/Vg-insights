import { UserProgress } from '../types/neet';
import { TOPICS, CHAPTERS } from '../data/neetData';

const STORAGE_KEYS = {
  THEME: 'vg_neet_theme',
  PROGRESS: 'vg_neet_user_progress'
};

export class StorageService {
  private static memoryStore: Record<string, string> = {};

  /**
   * Safe getter that never throws in sandboxed iframes, partitioned storage, or private browsing
   */
  public static safeGetItem(key: string): string | null {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const val = window.localStorage.getItem(key);
        if (val !== null) return val;
      }
    } catch {
      // Storage access blocked or restricted by iframe sandbox
    }
    return this.memoryStore[key] || null;
  }

  /**
   * Safe setter that never throws in sandboxed iframes, partitioned storage, or private browsing
   */
  public static safeSetItem(key: string, value: string): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch {
      // Storage access blocked or restricted
    }
    this.memoryStore[key] = value;
  }

  /**
   * Safe remover that never throws in sandboxed iframes, partitioned storage, or private browsing
   */
  public static safeRemoveItem(key: string): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch {}
    delete this.memoryStore[key];
  }

  static getTheme(): 'light' | 'dark' {
    try {
      const saved = this.safeGetItem(STORAGE_KEYS.THEME);
      if (saved === 'dark' || saved === 'light') return saved;
      if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
    } catch {
      // Default to dark mode for modern high-contrast reading
    }
    return 'dark';
  }

  static setTheme(theme: 'light' | 'dark'): void {
    this.safeSetItem(STORAGE_KEYS.THEME, theme);
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.style.colorScheme = 'light';
      }
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('vg-theme-change', { detail: { theme } }));
      }
    } catch (e) {
      console.warn('[StorageService] Error applying theme classes:', e);
    }
  }

  static initTheme(): void {
    try {
      const currentTheme = this.getTheme();
      this.setTheme(currentTheme);
    } catch (e) {
      console.warn('[StorageService] initTheme failed safely:', e);
    }
  }

  static getProgress(): UserProgress {
    try {
      const data = this.safeGetItem(STORAGE_KEYS.PROGRESS);
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      console.warn('Failed to parse saved user progress');
    }
    return {
      completedTopics: [],
      bookmarkedTopics: [],
      pyqAttempts: {}
    };
  }

  static saveProgress(progress: UserProgress): void {
    try {
      this.safeSetItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.warn('[StorageService] saveProgress failed:', e);
    }
  }

  static toggleBookmark(topicId: string): boolean {
    const progress = this.getProgress();
    const index = progress.bookmarkedTopics.indexOf(topicId);
    let isBookmarked = false;
    if (index >= 0) {
      progress.bookmarkedTopics.splice(index, 1);
    } else {
      progress.bookmarkedTopics.push(topicId);
      isBookmarked = true;
    }
    this.saveProgress(progress);
    return isBookmarked;
  }

  static isBookmarked(topicId: string): boolean {
    const progress = this.getProgress();
    return progress.bookmarkedTopics.includes(topicId);
  }

  static getBookmarks(): Array<{
    id: string;
    topicId: string;
    title: string;
    subtitle: string;
    type: string;
    timestamp: number;
  }> {
    const progress = this.getProgress();
    return (progress.bookmarkedTopics || []).map(tId => {
      const topic = TOPICS[tId];
      const chapter = topic ? CHAPTERS[topic.chapterId] : null;
      return {
        id: tId,
        topicId: tId,
        title: topic ? topic.title : tId.replace(/-/g, ' '),
        subtitle: chapter ? chapter.title : 'NEET Topic',
        type: 'Topic Note',
        timestamp: Date.now()
      };
    });
  }

  static toggleTopicCompleted(topicId: string): boolean {
    const progress = this.getProgress();
    const index = progress.completedTopics.indexOf(topicId);
    let isCompleted = false;
    if (index >= 0) {
      progress.completedTopics.splice(index, 1);
    } else {
      progress.completedTopics.push(topicId);
      isCompleted = true;
    }
    this.saveProgress(progress);
    return isCompleted;
  }

  static isTopicCompleted(topicId: string): boolean {
    const progress = this.getProgress();
    return progress.completedTopics.includes(topicId);
  }

  static setLastVisitedTopic(topicId: string): void {
    const progress = this.getProgress();
    progress.lastVisitedTopicId = topicId;
    this.saveProgress(progress);
  }

  static recordPYQAttempt(questionId: string, selectedOption: number, isCorrect: boolean): void {
    const progress = this.getProgress();
    progress.pyqAttempts[questionId] = {
      selectedOption,
      isCorrect,
      timestamp: Date.now()
    };
    this.saveProgress(progress);
  }
}
