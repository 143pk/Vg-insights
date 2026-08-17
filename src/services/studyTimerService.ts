import { RouteState } from './routerService';

export type StudySubject = 'physics' | 'chemistry' | 'biology' | 'general';

export interface SubjectTimeRecord {
  physics: number; // in seconds
  chemistry: number; // in seconds
  biology: number; // in seconds
  general: number; // in seconds
}

export interface StudyTimerState {
  isRunning: boolean;
  currentSubject: StudySubject;
  activeSessionSeconds: number;
  subjectTimes: SubjectTimeRecord;
  lastUpdated: number;
  todayDate: string;
}

const STORAGE_KEY = 'vg_neet_study_timer_v1';

function getTodayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

const DEFAULT_STATE: StudyTimerState = {
  isRunning: true,
  currentSubject: 'general',
  activeSessionSeconds: 0,
  subjectTimes: {
    physics: 0,
    chemistry: 0,
    biology: 0,
    general: 0
  },
  lastUpdated: Date.now(),
  todayDate: getTodayString()
};

export class StudyTimerService {
  private static state: StudyTimerState = DEFAULT_STATE;
  private static intervalId: any = null;
  private static listeners: Array<(state: StudyTimerState) => void> = [];
  private static isInitialized = false;

  static init(): void {
    if (this.isInitialized) return;
    this.isInitialized = true;

    this.loadState();

    // Start tick interval
    this.startInterval();

    // Handle tab visibility and background wakeups
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.saveState();
      } else {
        this.handleVisibilityWakeup();
      }
    });

    // Save on beforeunload
    window.addEventListener('beforeunload', () => {
      this.saveState();
    });
  }

  private static loadState(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const today = getTodayString();

        // If from another day, retain total subject times but check day rollover
        this.state = {
          isRunning: parsed.isRunning !== undefined ? parsed.isRunning : true,
          currentSubject: parsed.currentSubject || 'general',
          activeSessionSeconds: parsed.activeSessionSeconds || 0,
          subjectTimes: {
            physics: parsed.subjectTimes?.physics || 0,
            chemistry: parsed.subjectTimes?.chemistry || 0,
            biology: parsed.subjectTimes?.biology || 0,
            general: parsed.subjectTimes?.general || 0
          },
          lastUpdated: Date.now(),
          todayDate: parsed.todayDate || today
        };
        return;
      }
    } catch (e) {
      console.warn('Could not parse saved study timer state', e);
    }

    this.state = { ...DEFAULT_STATE, lastUpdated: Date.now() };
  }

  static saveState(): void {
    try {
      this.state.lastUpdated = Date.now();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Could not save study timer state', e);
    }
  }

  private static handleVisibilityWakeup(): void {
    if (!this.state.isRunning) {
      this.state.lastUpdated = Date.now();
      return;
    }

    const now = Date.now();
    const elapsedSeconds = Math.floor((now - this.state.lastUpdated) / 1000);

    // If within reasonable study pause boundary (< 1 hour in background)
    if (elapsedSeconds > 0 && elapsedSeconds < 3600) {
      this.state.subjectTimes[this.state.currentSubject] += elapsedSeconds;
      this.state.activeSessionSeconds += elapsedSeconds;
    }

    this.state.lastUpdated = now;
    this.saveState();
    this.notifyListeners();
  }

  private static startInterval(): void {
    if (this.intervalId) clearInterval(this.intervalId);

    this.intervalId = setInterval(() => {
      if (this.state.isRunning) {
        this.state.subjectTimes[this.state.currentSubject] += 1;
        this.state.activeSessionSeconds += 1;
        this.state.lastUpdated = Date.now();

        // Periodic persist every 5 seconds
        if (this.state.activeSessionSeconds % 5 === 0) {
          this.saveState();
        }

        this.notifyListeners();
      }
    }, 1000);
  }

  static getState(): StudyTimerState {
    return { ...this.state, subjectTimes: { ...this.state.subjectTimes } };
  }

  static subscribe(listener: (state: StudyTimerState) => void): () => void {
    this.listeners.push(listener);
    // Initial call
    listener(this.getState());

    return () => {
      const idx = this.listeners.indexOf(listener);
      if (idx >= 0) this.listeners.splice(idx, 1);
    };
  }

  private static notifyListeners(): void {
    const currentState = this.getState();
    for (const listener of this.listeners) {
      try {
        listener(currentState);
      } catch (err) {
        console.error('Error in study timer listener', err);
      }
    }

    // Direct DOM fast update if elements exist
    this.updateHeaderDOM(currentState);
  }

  private static updateHeaderDOM(state: StudyTimerState): void {
    const timeDisplayEl = document.getElementById('header-timer-display');
    const badgeSubjectEl = document.getElementById('header-timer-subject');
    const dotEl = document.getElementById('header-timer-dot');

    if (timeDisplayEl) {
      timeDisplayEl.textContent = this.formatDurationBadge(state.subjectTimes[state.currentSubject] || 0);
    }

    if (badgeSubjectEl) {
      const info = this.getSubjectMeta(state.currentSubject);
      badgeSubjectEl.textContent = info.shortName;
    }

    if (dotEl) {
      if (state.isRunning) {
        dotEl.className = 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse';
      } else {
        dotEl.className = 'w-2 h-2 rounded-full bg-amber-400';
      }
    }
  }

  static toggleRunning(): boolean {
    this.state.isRunning = !this.state.isRunning;
    this.state.lastUpdated = Date.now();
    this.saveState();
    this.notifyListeners();
    return this.state.isRunning;
  }

  static setRunning(running: boolean): void {
    this.state.isRunning = running;
    this.state.lastUpdated = Date.now();
    this.saveState();
    this.notifyListeners();
  }

  static setSubject(subject: StudySubject): void {
    if (this.state.currentSubject === subject) return;
    this.state.currentSubject = subject;
    this.saveState();
    this.notifyListeners();
  }

  static resetSession(): void {
    this.state.activeSessionSeconds = 0;
    this.saveState();
    this.notifyListeners();
  }

  static resetAllTimes(): void {
    this.state.subjectTimes = {
      physics: 0,
      chemistry: 0,
      biology: 0,
      general: 0
    };
    this.state.activeSessionSeconds = 0;
    this.saveState();
    this.notifyListeners();
  }

  static updateRoute(route: RouteState): void {
    let detectedSubject: StudySubject | null = null;

    if (route.subjectId === 'physics') {
      detectedSubject = 'physics';
    } else if (route.subjectId === 'chemistry') {
      detectedSubject = 'chemistry';
    } else if (route.subjectId === 'biology') {
      detectedSubject = 'biology';
    } else if (route.chapterId) {
      if (route.chapterId.startsWith('phys-')) detectedSubject = 'physics';
      else if (route.chapterId.startsWith('chem-')) detectedSubject = 'chemistry';
      else if (route.chapterId.startsWith('bio-') || route.chapterId.startsWith('bot-') || route.chapterId.startsWith('zoo-')) detectedSubject = 'biology';
    } else if (route.topicId) {
      if (route.topicId.startsWith('phys-') || route.topicId.startsWith('ph-')) detectedSubject = 'physics';
      else if (route.topicId.startsWith('chem-') || route.topicId.startsWith('ch-')) detectedSubject = 'chemistry';
      else if (route.topicId.startsWith('bio-') || route.topicId.startsWith('bot-') || route.topicId.startsWith('zoo-')) detectedSubject = 'biology';
    }

    if (detectedSubject && detectedSubject !== this.state.currentSubject) {
      this.setSubject(detectedSubject);
    }
  }

  static getTotalStudySeconds(): number {
    return (
      this.state.subjectTimes.physics +
      this.state.subjectTimes.chemistry +
      this.state.subjectTimes.biology +
      this.state.subjectTimes.general
    );
  }

  static formatDurationBadge(totalSeconds: number): string {
    if (totalSeconds < 60) {
      return `${totalSeconds}s`;
    }
    const minutes = Math.floor(totalSeconds / 60);
    if (minutes < 60) {
      return `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    const remMins = minutes % 60;
    return remMins > 0 ? `${hours}h ${remMins}m` : `${hours}h`;
  }

  static formatDurationHMS(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n: number) => String(n).padStart(2, '0');
    if (hours > 0) {
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
    return `${pad(minutes)}:${pad(seconds)}`;
  }

  static getSubjectMeta(subject: StudySubject): {
    name: string;
    shortName: string;
    icon: string;
    badgeClass: string;
    textClass: string;
    borderClass: string;
    bgClass: string;
    barColor: string;
  } {
    switch (subject) {
      case 'physics':
        return {
          name: 'Physics',
          shortName: 'Physics',
          icon: '⚛️',
          badgeClass: 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
          textClass: 'text-blue-600 dark:text-blue-400',
          borderClass: 'border-blue-500',
          bgClass: 'bg-blue-500',
          barColor: 'bg-blue-500'
        };
      case 'chemistry':
        return {
          name: 'Chemistry',
          shortName: 'Chemistry',
          icon: '🧪',
          badgeClass: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
          textClass: 'text-emerald-600 dark:text-emerald-400',
          borderClass: 'border-emerald-500',
          bgClass: 'bg-emerald-500',
          barColor: 'bg-emerald-500'
        };
      case 'biology':
        return {
          name: 'Biology',
          shortName: 'Biology',
          icon: '🧬',
          badgeClass: 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
          textClass: 'text-purple-600 dark:text-purple-400',
          borderClass: 'border-purple-500',
          bgClass: 'bg-purple-500',
          barColor: 'bg-purple-500'
        };
      case 'general':
      default:
        return {
          name: 'General Study',
          shortName: 'Study',
          icon: '⏱️',
          badgeClass: 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
          textClass: 'text-slate-600 dark:text-slate-300',
          borderClass: 'border-slate-500',
          bgClass: 'bg-slate-500',
          barColor: 'bg-blue-600'
        };
    }
  }
}
