import 'katex/dist/katex.min.css';
import './index.css';
import { StorageService } from './services/storageService';
import { RouterService, RouteState } from './services/routerService';
import { WeaknessDoctorService } from './services/weaknessDoctorService';
import { WeeklyMockService } from './services/weeklyMockService';
import { MistakeBookService } from './services/mistakeBookService';
import { StudyTimerService, StudySubject } from './services/studyTimerService';

import { renderHeader, renderBreadcrumb } from './components/headerComponent';
import { renderSidebar } from './components/sidebarComponent';
import { renderHomeDashboard } from './components/homeDashboardComponent';
import { renderSubjectView } from './components/subjectViewComponent';
import { renderClassView } from './components/classViewComponent';
import { renderClassificationView } from './components/classificationViewComponent';
import { renderChapterView } from './components/chapterViewComponent';
import { renderTopicView } from './components/topicViewComponent';

import { renderWeaknessDashboard } from './components/weaknessDashboardComponent';
import { renderWeaknessPracticeView, WeaknessPracticeSessionState } from './components/weaknessPracticeComponent';
import { renderDiagnosticQuizView, DiagnosticQuizState } from './components/diagnosticQuizComponent';

import {
  renderWeeklyMockLanding,
  renderWeeklyMockInstructions,
  renderWeeklyMockTestView,
  renderWeeklyMockResults
} from './components/weeklyMockComponent';

import { renderMistakeBookView } from './components/mistakeBookComponent';
import { renderChapterTestsView } from './components/chapterTestsComponent';
import { renderCustomTestView } from './components/customTestComponent';
import { renderTestHistoryView } from './components/testHistoryComponent';
import { renderStrengthsWeaknessesView } from './components/strengthsWeaknessesComponent';
import { renderWeakTopicPracticeView, renderBookmarkedQuestionsView } from './components/practiceViewsComponent';
import { renderPYQsView } from './components/pyqsViewComponent';
import { renderRevisionView } from './components/revisionViewComponent';
import { renderChaptersDirectoryView } from './components/chaptersDirectoryComponent';

import { renderSearchModal, handleSearchInput } from './components/searchModalComponent';
import { renderBookmarksModal } from './components/bookmarksModalComponent';
import { renderProgressModal } from './components/progressModalComponent';
import { renderLandingPage, initLandingPageEvents } from './components/landingPageComponent';
import { renderAuthModal, initAuthModalEvents } from './components/authModalComponent';
import { AuthService } from './services/authService';

class App {
  private currentSearchFilter: string = 'all';
  private weaknessSubjectFilter: string = 'all';
  private currentPracticeSession: WeaknessPracticeSessionState | null = null;
  private currentDiagnosticQuiz: DiagnosticQuizState | null = null;
  private mockTimerInterval: any = null;
  private customTestSubject: string = 'all';
  private customTestCount: number = 30;
  private customTestDuration: number = 35;

  public init(): void {
    // Initialize Theme
    StorageService.initTheme();

    // Initialize Study Session Timer
    StudyTimerService.init();
    const initialRoute = RouterService.parseHash(window.location.hash);
    StudyTimerService.updateRoute(initialRoute);

    // Register PWA Service Worker if supported
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => {
          console.log('SW registration skipped or failed:', err);
        });
      });
    }

    // Initial Layout Render
    this.renderApp();

    // Scroll listener for sticky header visual height & translucency refinement
    let isHeaderTicking = false;
    window.addEventListener('scroll', () => {
      if (!isHeaderTicking) {
        requestAnimationFrame(() => {
          const header = document.getElementById('main-app-header');
          if (header) {
            if (window.scrollY > 20) {
              header.classList.add('app-header-scrolled');
            } else {
              header.classList.remove('app-header-scrolled');
            }
          }
          isHeaderTicking = false;
        });
        isHeaderTicking = true;
      }
    }, { passive: true });

    // Listen to hash route changes
    window.addEventListener('hashchange', () => {
      this.handleRouteChange();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Attach global keyboard shortcuts (Cmd+K / Ctrl+K for search)
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        this.openModal('modal-search');
      } else if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });

    // Check if an active mock is in progress and update title
    this.checkActiveMockStatus();
  }

  private checkActiveMockStatus(): void {
    const activeMock = WeeklyMockService.getActiveMock();
    if (activeMock && activeMock.status === 'in_progress') {
      // Setup mock timer if on test page
      const routeState = RouterService.parseHash(window.location.hash);
      if (routeState.type === 'weekly-mock-test') {
        this.startMockTimer();
      }
    }
  }

  private startMockTimer(): void {
    if (this.mockTimerInterval) {
      clearInterval(this.mockTimerInterval);
    }

    this.mockTimerInterval = setInterval(() => {
      const state = WeeklyMockService.getState();
      const activeAttempt = state.activeAttempt;

      if (!activeAttempt || activeAttempt.isSubmitted) {
        clearInterval(this.mockTimerInterval);
        this.mockTimerInterval = null;
        return;
      }

      const now = Date.now();
      const remainingSeconds = Math.max(0, Math.round((activeAttempt.endTimestamp - now) / 1000));

      // Update timer display in DOM directly
      const timerDisplay = document.getElementById('test-timer-display') || document.getElementById('mock-timer-display');
      if (timerDisplay) {
        const hrs = Math.floor(remainingSeconds / 3600);
        const mins = Math.floor((remainingSeconds % 3600) / 60);
        const secs = remainingSeconds % 60;
        timerDisplay.textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (remainingSeconds <= 300) {
          timerDisplay.classList.add('text-rose-400', 'animate-pulse');
        }
      }

      if (remainingSeconds <= 0) {
        // Time expired! Auto submit
        clearInterval(this.mockTimerInterval);
        this.mockTimerInterval = null;
        const result = WeeklyMockService.submitActiveMock();
        if (result) {
          RouterService.navigateTo(`weekly-mock/result/${result.mockId}`);
        }
      }
    }, 1000);
  }

  private stopMockTimer(): void {
    if (this.mockTimerInterval) {
      clearInterval(this.mockTimerInterval);
      this.mockTimerInterval = null;
    }
  }

  private handleRouteChange(): void {
    const routeState: RouteState = RouterService.parseHash(window.location.hash);

    // Sync study timer with navigated subject/topic/chapter
    StudyTimerService.updateRoute(routeState);

    // Reset session states if leaving practice or quiz
    if (routeState.type !== 'weakness-practice') {
      this.currentPracticeSession = null;
    }
    if (routeState.type !== 'diagnostic-quiz') {
      this.currentDiagnosticQuiz = null;
    }

    // Stop timer if leaving active mock test
    if (routeState.type !== 'weekly-mock-test') {
      this.stopMockTimer();
    }

    if (routeState.type === 'landing' || routeState.type === 'login') {
      this.renderLandingLayout(routeState.type === 'login');
    } else {
      const appContent = document.getElementById('app-content');
      if (!appContent) {
        this.renderApp();
      } else {
        this.renderMainContent();
      }
    }
  }

  private renderLandingLayout(autoOpenLogin: boolean = false): void {
    const root = document.getElementById('root');
    if (!root) return;

    document.title = 'VG Insights – NEET UG Preparation Platform';

    root.innerHTML = `
      ${renderLandingPage()}
      <div id="modals-container">
        ${renderAuthModal()}
      </div>
    `;

    initLandingPageEvents(() => this.openAuthModal());
    initAuthModalEvents(() => {
      RouterService.navigateTo('home');
      this.renderApp();
    });

    if (autoOpenLogin) {
      this.openAuthModal();
    }
  }

  public openAuthModal(): void {
    this.openModal('modal-auth');
    const emailInput = document.getElementById('auth-email-input') as HTMLInputElement | null;
    emailInput?.focus();
  }

  private renderApp(): void {
    const root = document.getElementById('root');
    if (!root) return;

    const routeState = RouterService.parseHash(window.location.hash);
    if (routeState.type === 'landing' || routeState.type === 'login') {
      this.renderLandingLayout(routeState.type === 'login');
      return;
    }

    root.innerHTML = `
      <div id="header-container"></div>
      <div id="breadcrumb-container"></div>
      
      <!-- Primary App Grid with Sidebar + Main Content -->
      <div class="flex w-full min-h-[calc(100vh-8rem)]">
        <div id="sidebar-container"></div>
        <main id="app-content" class="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 min-w-0 overflow-x-hidden"></main>
      </div>

      <div id="modals-container">
        ${renderSearchModal()}
        ${renderBookmarksModal()}
        ${renderProgressModal()}
        ${renderAuthModal()}
      </div>

      <footer class="border-t border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="font-semibold text-slate-700 dark:text-slate-300">
            VG Insights — Built for NEET UG Aspirants
          </div>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="#landing" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">🌐 Landing Page</a>
            <a href="#home" class="hover:underline">Home</a>
            <a href="#weekly-mock" class="text-blue-600 dark:text-blue-400 font-bold hover:underline">📝 Weekly Mock</a>
            <a href="#weakness-doctor" class="text-rose-600 dark:text-rose-400 font-bold hover:underline">AI Weakness Doctor 🩺</a>
            <a href="#mistake-book" class="text-amber-600 dark:text-amber-400 font-bold hover:underline">Mistake Book 📕</a>
            <a href="#test-history" class="hover:underline">Test History</a>
          </div>
        </div>
      </footer>
    `;

    this.attachHeaderEvents();
    this.attachModalEvents();
    initAuthModalEvents(() => {
      this.refreshHeader();
    });
    this.renderMainContent();
  }

  private renderMainContent(): void {
    const routeState: RouteState = RouterService.parseHash(window.location.hash);
    const currentHash = window.location.hash || '#home';

    // Update Header buttons state
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
      headerContainer.innerHTML = renderHeader(
        () => this.openModal('modal-search'),
        () => this.openBookmarksModal(),
        () => this.openProgressModal()
      );
      this.attachHeaderEvents();
    }

    // Update Sidebar
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
      // Hide sidebar during full-screen active mock test for distraction-free focus
      if (routeState.type === 'weekly-mock-test') {
        sidebarContainer.innerHTML = '';
      } else {
        sidebarContainer.innerHTML = renderSidebar(currentHash);
        this.attachSidebarEvents();
      }
    }

    // Update Breadcrumbs & Document Title
    const breadcrumbContainer = document.getElementById('breadcrumb-container');
    if (breadcrumbContainer) {
      if (routeState.type === 'weekly-mock-test') {
        breadcrumbContainer.innerHTML = '';
      } else {
        breadcrumbContainer.innerHTML = renderBreadcrumb(routeState.breadcrumbs);
      }
    }

    // Set page title with VG Insights branding
    if (routeState.type === 'home' || !routeState.breadcrumbs.length) {
      document.title = 'VG Insights – NEET UG Notes, PYQs, Practice & Study Library';
    } else {
      const lastCrumb = routeState.breadcrumbs[routeState.breadcrumbs.length - 1];
      document.title = `${lastCrumb.label} | VG Insights`;
    }

    // Update Main Body
    const appContent = document.getElementById('app-content');
    if (!appContent) return;

    // Reset and trigger smooth page entrance animation
    appContent.classList.remove('animate-page-enter');
    void appContent.offsetWidth; // force reflow for smooth re-trigger
    appContent.classList.add('animate-page-enter');

    switch (routeState.type) {
      case 'home':
        appContent.innerHTML = renderHomeDashboard();
        this.attachHomeEvents();
        break;

      case 'weekly-mock':
        appContent.innerHTML = renderWeeklyMockLanding();
        this.attachWeeklyMockLandingEvents();
        break;

      case 'weekly-mock-instructions':
        appContent.innerHTML = renderWeeklyMockInstructions(routeState.mockId!);
        this.attachWeeklyMockInstructionsEvents(routeState.mockId!);
        break;

      case 'weekly-mock-test':
        appContent.innerHTML = renderWeeklyMockTestView(routeState.mockId!);
        this.attachWeeklyMockTestEvents(routeState.mockId!);
        this.startMockTimer();
        break;

      case 'weekly-mock-result':
        appContent.innerHTML = renderWeeklyMockResults(routeState.mockId!, routeState.subFilter || 'all');
        this.attachWeeklyMockResultEvents(routeState.mockId!);
        break;

      case 'chapter-tests':
        appContent.innerHTML = renderChapterTestsView(routeState.subFilter || 'all');
        this.attachChapterTestsEvents();
        break;

      case 'custom-test':
        appContent.innerHTML = renderCustomTestView();
        this.attachCustomTestEvents();
        break;

      case 'test-history':
        appContent.innerHTML = renderTestHistoryView();
        break;

      case 'mistake-book':
      case 'incorrect-questions':
        appContent.innerHTML = renderMistakeBookView(routeState.subFilter || 'all');
        this.attachMistakeBookEvents();
        break;

      case 'strengths-weaknesses':
        appContent.innerHTML = renderStrengthsWeaknessesView();
        break;

      case 'weak-topic-practice':
        appContent.innerHTML = renderWeakTopicPracticeView();
        break;

      case 'bookmarked-questions':
        appContent.innerHTML = renderBookmarkedQuestionsView();
        break;

      case 'pyqs':
        appContent.innerHTML = renderPYQsView();
        break;

      case 'revision':
        appContent.innerHTML = renderRevisionView();
        break;

      case 'chapters':
        appContent.innerHTML = renderChaptersDirectoryView();
        break;

      case 'my-progress':
        this.openProgressModal();
        appContent.innerHTML = renderHomeDashboard();
        this.attachHomeEvents();
        break;

      case 'subject':
        appContent.innerHTML = renderSubjectView(routeState.subjectId!);
        break;

      case 'class':
        appContent.innerHTML = renderClassView(routeState.subjectId!, routeState.classLevel!);
        break;

      case 'classification':
        appContent.innerHTML = renderClassificationView(routeState.classificationId!);
        break;

      case 'chapter':
        appContent.innerHTML = renderChapterView(routeState.chapterId!);
        break;

      case 'topic':
        appContent.innerHTML = renderTopicView(routeState.topicId!);
        this.attachTopicEvents(routeState.topicId!);
        break;

      case 'weakness-doctor':
        appContent.innerHTML = renderWeaknessDashboard(this.weaknessSubjectFilter);
        this.attachWeaknessDoctorEvents();
        break;

      case 'weakness-practice':
        this.initWeaknessPracticeSession(routeState.topicId!);
        appContent.innerHTML = renderWeaknessPracticeView(routeState.topicId!, this.currentPracticeSession!);
        this.attachWeaknessPracticeEvents(routeState.topicId!);
        break;

      case 'diagnostic-quiz':
        this.initDiagnosticQuizSession();
        appContent.innerHTML = renderDiagnosticQuizView(this.currentDiagnosticQuiz!);
        this.attachDiagnosticQuizEvents();
        break;

      default:
        appContent.innerHTML = renderHomeDashboard();
        this.attachHomeEvents();
        break;
    }
  }

  private attachSidebarEvents(): void {
    // Mobile drawer toggle
    const closeBtn = document.getElementById('btn-close-mobile-sidebar');
    const drawer = document.getElementById('mobile-sidebar-drawer');

    closeBtn?.addEventListener('click', () => {
      drawer?.classList.add('hidden');
    });

    document.querySelectorAll('.mobile-sidebar-link').forEach(link => {
      link.addEventListener('click', () => {
        drawer?.classList.add('hidden');
      });
    });
  }

  private attachHeaderEvents(): void {
    // Mobile menu toggle
    document.getElementById('btn-mobile-sidebar-toggle')?.addEventListener('click', () => {
      const drawer = document.getElementById('mobile-sidebar-drawer');
      drawer?.classList.toggle('hidden');
    });

    // Theme toggle
    const themeBtn = document.getElementById('btn-theme-toggle');
    themeBtn?.addEventListener('click', () => {
      const current = StorageService.getTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      StorageService.setTheme(next);
      this.renderMainContent();
    });

    // User profile menu dropdown
    const userProfileBtn = document.getElementById('btn-user-profile-menu');
    const userProfileDropdown = document.getElementById('user-profile-dropdown');
    userProfileBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      userProfileDropdown?.classList.toggle('hidden');
      const isHidden = userProfileDropdown?.classList.contains('hidden');
      userProfileBtn.setAttribute('aria-expanded', isHidden ? 'false' : 'true');
    });

    // Sign out button
    document.getElementById('btn-header-logout')?.addEventListener('click', (e) => {
      e.stopPropagation();
      AuthService.logout();
      RouterService.navigateTo('landing');
    });

    // Close user dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (userProfileDropdown && !userProfileDropdown.contains(e.target as Node) && e.target !== userProfileBtn) {
        userProfileDropdown.classList.add('hidden');
        userProfileBtn?.setAttribute('aria-expanded', 'false');
      }
    });

    // Search button (Desktop)
    document.getElementById('btn-header-search')?.addEventListener('click', () => {
      this.openModal('modal-search');
    });
  }

  private refreshHeader(): void {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
      headerContainer.innerHTML = renderHeader(
        () => this.openModal('modal-search'),
        () => this.openBookmarksModal(),
        () => this.openProgressModal()
      );
      this.attachHeaderEvents();
    }
  }

  private attachHomeEvents(): void {
    document.getElementById('hero-search-trigger')?.addEventListener('click', () => {
      this.openModal('modal-search');
    });

    document.getElementById('quick-action-search')?.addEventListener('click', () => {
      this.openModal('modal-search');
    });

    document.getElementById('quick-action-bookmarks')?.addEventListener('click', () => {
      this.openBookmarksModal();
    });

    document.getElementById('quick-action-progress')?.addEventListener('click', () => {
      this.openProgressModal();
    });
  }

  // ==========================================
  // WEEKLY MOCK TEST EVENT HANDLERS
  // ==========================================

  private attachWeeklyMockLandingEvents(): void {
    // Start or retake Weekly Mock
    const startWeeklyMockHandler = () => {
      const paper = WeeklyMockService.getOrCreateCurrentWeeklyMock();
      RouterService.navigateTo(`weekly-mock/instructions/${paper.mockId}`);
    };

    document.getElementById('btn-start-weekly-mock')?.addEventListener('click', startWeeklyMockHandler);
    document.getElementById('btn-retake-weekly-mock')?.addEventListener('click', startWeeklyMockHandler);

    // Quick Start Chapter Test
    document.querySelectorAll('.btn-landing-ch-test').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const chId = target.getAttribute('data-chapter-id')!;
        const chTitle = target.getAttribute('data-chapter-title') || 'Chapter Test';
        const subject = target.getAttribute('data-subject') || 'all';

        const test = WeeklyMockService.generateCustomTest({
          title: `${chTitle} — Chapter Test`,
          subject,
          chapterIds: [chId],
          totalQuestions: 20,
          durationMinutes: 25
        });
        WeeklyMockService.startNewAttempt(test, 'chapter');
        RouterService.navigateTo(`weekly-mock/test/${test.mockId}`);
      });
    });
  }

  private attachWeeklyMockInstructionsEvents(mockId: string): void {
    const chk = document.getElementById('chk-accept-instructions') as HTMLInputElement;
    const startBtn = (document.getElementById('btn-start-test-confirmed') || document.getElementById('btn-start-mock-confirmed')) as HTMLButtonElement;

    chk?.addEventListener('change', () => {
      if (startBtn) {
        startBtn.disabled = !chk.checked;
        if (chk.checked) {
          startBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
          startBtn.classList.add('opacity-50', 'cursor-not-allowed');
        }
      }
    });

    const onStartClick = (e: Event) => {
      e.preventDefault();
      if (chk && !chk.checked) {
        chk.focus();
        return;
      }

      if (startBtn) {
        startBtn.disabled = true;
        startBtn.innerHTML = `<span>⏳ Initializing 180Q NEET Exam...</span>`;
      }

      const state = WeeklyMockService.getState();
      const paper = state.savedMocks[mockId] || WeeklyMockService.getOrCreateCurrentWeeklyMock();

      // Start new attempt
      WeeklyMockService.startNewAttempt(paper, 'weekly');

      // Navigate to test interface
      RouterService.navigateTo(`weekly-mock/test/${paper.mockId}`);
    };

    startBtn?.addEventListener('click', onStartClick);
    document.getElementById('btn-start-test-confirmed')?.addEventListener('click', onStartClick);
    document.getElementById('btn-start-mock-confirmed')?.addEventListener('click', onStartClick);
  }

  private attachWeeklyMockTestEvents(mockId: string): void {
    const state = WeeklyMockService.getState();
    const paper = state.savedMocks[mockId] || WeeklyMockService.getOrCreateCurrentWeeklyMock();
    const attempt = state.activeAttempt;

    if (!attempt || attempt.mockId !== mockId) {
      WeeklyMockService.startOrResumeAttempt(paper, 'weekly');
    }

    const currentActive = WeeklyMockService.getState().activeAttempt;
    if (!currentActive) return;

    // 1. Palette Question Navigation (Desktop and Mobile)
    document.querySelectorAll('.palette-jump-btn, .btn-palette-q').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const rawIdx = target.getAttribute('data-jump-to-index') || target.getAttribute('data-q-idx');
        if (rawIdx !== null) {
          const qIdx = parseInt(rawIdx, 10);
          WeeklyMockService.setCurrentQuestionIndex(qIdx);
          this.renderMainContent();
        }
      });
    });

    // 2. Subject Quick Switch Buttons
    document.querySelectorAll('.subject-jump-btn, .btn-mock-filter-subj').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const rawIdx = target.getAttribute('data-jump-idx');
        if (rawIdx !== null) {
          const qIdx = parseInt(rawIdx, 10);
          WeeklyMockService.setCurrentQuestionIndex(qIdx);
          this.renderMainContent();
        } else {
          const subj = target.getAttribute('data-subject') || 'all';
          const qIndex = paper.questions.findIndex(q => subj === 'all' || q.subject === subj);
          if (qIndex >= 0) {
            WeeklyMockService.setCurrentQuestionIndex(qIndex);
            this.renderMainContent();
          }
        }
      });
    });

    // 3. Option Selection
    document.querySelectorAll('.test-option-btn, .btn-mock-opt').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const rawOpt = target.getAttribute('data-option-idx') || target.getAttribute('data-opt-idx');
        if (rawOpt !== null) {
          const optIdx = parseInt(rawOpt, 10);
          WeeklyMockService.recordAnswer(currentActive.currentQuestionIndex, optIdx);
          this.renderMainContent();
        }
      });
    });

    // 4. Mark for Review
    const onMarkReview = () => {
      WeeklyMockService.toggleMarkForReview(currentActive.currentQuestionIndex);
      this.renderMainContent();
    };
    document.getElementById('btn-mark-review')?.addEventListener('click', onMarkReview);
    document.getElementById('btn-mock-mark-review')?.addEventListener('click', onMarkReview);

    // 5. Clear Response
    const onClearResponse = () => {
      WeeklyMockService.clearAnswer(currentActive.currentQuestionIndex);
      this.renderMainContent();
    };
    document.getElementById('btn-clear-response')?.addEventListener('click', onClearResponse);
    document.getElementById('btn-mock-clear')?.addEventListener('click', onClearResponse);

    // 6. Next Question / Save & Next / Save & Finish
    let isNavigating = false;
    const onNextQuestion = (e?: Event) => {
      e?.preventDefault();
      if (isNavigating) return;
      isNavigating = true;

      const saveNextBtn = document.getElementById('btn-save-next') as HTMLButtonElement | null;
      if (saveNextBtn) {
        saveNextBtn.disabled = true;
      }

      try {
        const state = WeeklyMockService.getState();
        const active = state.activeAttempt;
        const currentPaper = (active && state.savedMocks[active.mockId]) || paper;
        const totalCount = currentPaper?.questions?.length || 180;
        const curIdx = active ? active.currentQuestionIndex : 0;

        if (curIdx < totalCount - 1) {
          // Advance to next question safely
          WeeklyMockService.setCurrentQuestionIndex(curIdx + 1);
          this.renderMainContent();
        } else {
          // Final question reached (e.g. Q180): open submission confirmation dialog
          if (saveNextBtn) {
            saveNextBtn.disabled = false;
          }
          isNavigating = false;
          openSubmitModal();
        }
      } catch (err) {
        console.error('Error handling onNextQuestion:', err);
        if (saveNextBtn) {
          saveNextBtn.disabled = false;
        }
        isNavigating = false;
      }
    };
    document.getElementById('btn-save-next')?.addEventListener('click', onNextQuestion);
    document.getElementById('btn-mock-next')?.addEventListener('click', onNextQuestion);

    // 7. Previous Question
    const onPrevQuestion = (e?: Event) => {
      e?.preventDefault();
      const state = WeeklyMockService.getState();
      const active = state.activeAttempt;
      if (active && active.currentQuestionIndex > 0) {
        WeeklyMockService.setCurrentQuestionIndex(active.currentQuestionIndex - 1);
        this.renderMainContent();
      }
    };
    document.getElementById('btn-prev-question')?.addEventListener('click', onPrevQuestion);
    document.getElementById('btn-mock-prev')?.addEventListener('click', onPrevQuestion);

    // 8. Mobile Palette Drawer Modal Open/Close
    const mobilePaletteModal = document.getElementById('mobile-palette-modal');
    document.getElementById('btn-toggle-mobile-palette')?.addEventListener('click', () => {
      if (mobilePaletteModal) {
        mobilePaletteModal.classList.remove('hidden');
        mobilePaletteModal.classList.add('flex');
      }
    });
    document.getElementById('btn-close-mobile-palette')?.addEventListener('click', () => {
      if (mobilePaletteModal) {
        mobilePaletteModal.classList.add('hidden');
        mobilePaletteModal.classList.remove('flex');
      }
    });

    // 9. Submit Confirmation Modal Trigger
    const submitModal = document.getElementById('modal-test-submit-confirm') || document.getElementById('modal-submit-confirmation');
    const openSubmitModal = () => {
      if (submitModal) {
        submitModal.classList.remove('hidden');
        submitModal.classList.add('flex');
      }
    };
    document.getElementById('btn-open-submit-modal')?.addEventListener('click', openSubmitModal);
    document.getElementById('btn-palette-submit-test')?.addEventListener('click', openSubmitModal);
    document.getElementById('btn-mobile-palette-submit')?.addEventListener('click', () => {
      if (mobilePaletteModal) {
        mobilePaletteModal.classList.add('hidden');
        mobilePaletteModal.classList.remove('flex');
      }
      openSubmitModal();
    });
    document.getElementById('btn-mock-submit-trigger')?.addEventListener('click', openSubmitModal);

    // 10. Cancel Submit / Continue Reviewing
    const closeSubmitModal = () => {
      if (submitModal) {
        submitModal.classList.add('hidden');
        submitModal.classList.remove('flex');
      }
    };
    document.getElementById('btn-cancel-submit')?.addEventListener('click', closeSubmitModal);
    document.getElementById('btn-cancel-mock-submit')?.addEventListener('click', closeSubmitModal);

    // 11. Confirm Final Submit
    let isSubmitting = false;
    const onConfirmSubmit = (e?: Event) => {
      e?.preventDefault();
      if (isSubmitting) return;
      isSubmitting = true;

      const confirmBtn = document.getElementById('btn-confirm-final-submit') as HTMLButtonElement | null;
      if (confirmBtn) {
        confirmBtn.disabled = true;
        confirmBtn.textContent = 'Submitting Test...';
      }

      try {
        this.stopMockTimer();
        const result = WeeklyMockService.submitActiveMock(paper);
        if (result && result.mockId) {
          RouterService.navigateTo(`weekly-mock/result/${result.mockId}`);
        } else {
          const state = WeeklyMockService.getState();
          const fallback = state.history[0];
          if (fallback) {
            RouterService.navigateTo(`weekly-mock/result/${fallback.mockId}`);
          } else {
            RouterService.navigateTo('weekly-mock');
          }
        }
      } catch (err) {
        console.error('Error submitting mock test:', err);
        if (confirmBtn) {
          confirmBtn.disabled = false;
          confirmBtn.textContent = 'Submit Test';
        }
        isSubmitting = false;
      }
    };
    document.getElementById('btn-confirm-final-submit')?.addEventListener('click', onConfirmSubmit);
    document.getElementById('btn-confirm-mock-submit')?.addEventListener('click', onConfirmSubmit);
  }

  private attachWeeklyMockResultEvents(mockId: string): void {
    // Result Question Filter Tabs
    document.querySelectorAll('.res-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const filter = target.getAttribute('data-filter') || 'all';
        RouterService.navigateTo(`weekly-mock/result/${mockId}/filter/${filter}`);
      });
    });

    // Question Jump from Result Matrix
    document.querySelectorAll('.btn-jump-solution').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const qNum = target.getAttribute('data-q-num');
        const element = document.getElementById(`solution-q-${qNum}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('ring-2', 'ring-blue-500');
          setTimeout(() => element.classList.remove('ring-2', 'ring-blue-500'), 2000);
        }
      });
    });

    // Smooth scroll to solutions
    const scrollToSolutions = () => {
      const solSection = document.getElementById('detailed-solutions-section');
      if (solSection) {
        solSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.getElementById('btn-review-all-questions')?.addEventListener('click', scrollToSolutions);
    document.getElementById('btn-view-detailed-solutions')?.addEventListener('click', scrollToSolutions);

    // Retake Test
    const onRetake = () => {
      const state = WeeklyMockService.getState();
      const paper = state.savedMocks[mockId] || WeeklyMockService.getOrCreateCurrentWeeklyMock();
      WeeklyMockService.startNewAttempt(paper, 'weekly');
      RouterService.navigateTo(`weekly-mock/test/${paper.mockId}`);
    };
    document.getElementById('btn-retake-test-result')?.addEventListener('click', onRetake);
    document.getElementById('btn-bottom-retake-test')?.addEventListener('click', onRetake);
  }

  // ==========================================
  // CHAPTER TESTS & CUSTOM TESTS HANDLERS
  // ==========================================

  private attachChapterTestsEvents(): void {
    document.querySelectorAll('.btn-start-chapter-test').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const chId = target.getAttribute('data-start-chapter-test')!;
        const chTitle = target.getAttribute('data-chapter-title') || 'Chapter Test';
        const subject = target.getAttribute('data-subject') || 'all';

        const test = WeeklyMockService.generateCustomTest({
          title: `${chTitle} — Test`,
          subject,
          chapterIds: [chId],
          totalQuestions: 20,
          durationMinutes: 25
        });
        WeeklyMockService.saveActiveMock(test);
        RouterService.navigateTo(`weekly-mock/test/${test.mockId}`);
      });
    });
  }

  private attachCustomTestEvents(): void {
    // Subject buttons
    document.querySelectorAll('.custom-subj-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        this.customTestSubject = target.getAttribute('data-custom-subject') || 'all';
        document.querySelectorAll('.custom-subj-btn').forEach(b => {
          b.className = 'custom-subj-btn p-3 rounded-2xl border text-xs font-bold transition-all bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
        });
        target.className = 'custom-subj-btn p-3 rounded-2xl border text-xs font-bold transition-all bg-blue-600 text-white border-blue-600 shadow-sm';
      });
    });

    // Count buttons
    document.querySelectorAll('.custom-count-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        this.customTestCount = parseInt(target.getAttribute('data-custom-qcount') || '30', 10);
        this.customTestDuration = parseInt(target.getAttribute('data-custom-duration') || '35', 10);
        document.querySelectorAll('.custom-count-btn').forEach(b => {
          b.className = 'custom-count-btn p-3 rounded-2xl border text-xs font-bold transition-all bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
        });
        target.className = 'custom-count-btn p-3 rounded-2xl border text-xs font-bold transition-all bg-blue-600 text-white border-blue-600 shadow-sm';
      });
    });

    // Start Custom Test
    document.getElementById('btn-start-custom-test')?.addEventListener('click', () => {
      const test = WeeklyMockService.generateCustomTest({
        title: `Custom NEET Practice (${this.customTestCount} Qs)`,
        subject: this.customTestSubject,
        totalQuestions: this.customTestCount,
        durationMinutes: this.customTestDuration
      });
      WeeklyMockService.saveActiveMock(test);
      RouterService.navigateTo(`weekly-mock/test/${test.mockId}`);
    });
  }

  // ==========================================
  // MISTAKE BOOK HANDLERS
  // ==========================================

  private attachMistakeBookEvents(): void {
    // Resolve mistake button
    document.querySelectorAll('.btn-resolve-mistake').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const qId = target.getAttribute('data-resolve-id')!;
        MistakeBookService.resolveMistake(qId);
        this.renderMainContent();
      });
    });

    // Search input
    const searchInput = document.getElementById('input-mistake-search') as HTMLInputElement;
    searchInput?.addEventListener('input', () => {
      const query = searchInput.value;
      const routeState = RouterService.parseHash(window.location.hash);
      const appContent = document.getElementById('app-content');
      if (appContent) {
        appContent.innerHTML = renderMistakeBookView(routeState.subFilter || 'all', query);
        this.attachMistakeBookEvents();
      }
    });
  }

  // ==========================================
  // TOPIC & PRACTICE & DIAGNOSTIC HANDLERS
  // ==========================================

  private attachTopicEvents(topicId: string): void {
    // Bookmark Toggle
    const btnBookmark = document.getElementById('btn-toggle-bookmark');
    btnBookmark?.addEventListener('click', () => {
      const isBookmarked = StorageService.toggleBookmark(topicId);
      btnBookmark.innerHTML = `<span>${isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}</span>`;
      btnBookmark.className = `px-3.5 py-2 rounded-xl border ${isBookmarked ? 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'} text-xs font-bold transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500`;
    });

    // Complete Toggle
    const btnComplete = document.getElementById('btn-toggle-complete');
    btnComplete?.addEventListener('click', () => {
      const isCompleted = StorageService.toggleTopicCompleted(topicId);
      btnComplete.innerHTML = `<span>${isCompleted ? '✓ Completed' : 'Mark as Complete'}</span>`;
      btnComplete.className = `px-3.5 py-2 rounded-xl border ${isCompleted ? 'bg-emerald-500 text-white border-emerald-600' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'} text-xs font-bold transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500`;
    });

    // PYQ Option Clicks
    const optionBtns = document.querySelectorAll('.pyq-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const pyqId = target.getAttribute('data-pyq-id')!;
        const selectedOption = parseInt(target.getAttribute('data-option-idx')!, 10);
        const correctOption = parseInt(target.getAttribute('data-correct-idx')!, 10);
        const isCorrect = selectedOption === correctOption;

        StorageService.recordPYQAttempt(pyqId, selectedOption, isCorrect);
        
        WeaknessDoctorService.recordQuestionAttempt({
          questionId: pyqId,
          topicId,
          status: isCorrect ? 'correct' : 'incorrect',
          selectedOption,
          correctOption,
          timeSpentSeconds: 45,
          source: 'topic_pyq'
        });

        this.renderMainContent();
      });
    });

    // Practice Option Clicks
    const practiceBtns = document.querySelectorAll('.practice-option-btn');
    practiceBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const pqId = target.getAttribute('data-pq-id')!;
        const selectedOption = parseInt(target.getAttribute('data-option-idx')!, 10);
        const correctOption = parseInt(target.getAttribute('data-correct-idx')!, 10);
        const isCorrect = selectedOption === correctOption;

        StorageService.recordPYQAttempt(pqId, selectedOption, isCorrect);

        WeaknessDoctorService.recordQuestionAttempt({
          questionId: pqId,
          topicId,
          status: isCorrect ? 'correct' : 'incorrect',
          selectedOption,
          correctOption,
          timeSpentSeconds: 40,
          source: 'topic_practice'
        });

        this.renderMainContent();
      });
    });
  }

  private attachWeaknessDoctorEvents(): void {
    // Subject Filter Tabs
    document.querySelectorAll('.weakness-subject-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        this.weaknessSubjectFilter = target.getAttribute('data-subject-filter') || 'all';
        const appContent = document.getElementById('app-content');
        if (appContent) {
          appContent.innerHTML = renderWeaknessDashboard(this.weaknessSubjectFilter);
          this.attachWeaknessDoctorEvents();
        }
      });
    });

    // Seed Sample Benchmark Data
    const seedHandler = () => {
      WeaknessDoctorService.seedSampleDiagnosticData();
      const appContent = document.getElementById('app-content');
      if (appContent) {
        appContent.innerHTML = renderWeaknessDashboard(this.weaknessSubjectFilter);
        this.attachWeaknessDoctorEvents();
      }
    };

    document.getElementById('btn-seed-sample-weakness')?.addEventListener('click', seedHandler);
    document.getElementById('btn-seed-sample-weakness-empty')?.addEventListener('click', seedHandler);

    // Reset Data
    document.getElementById('btn-reset-weakness-data')?.addEventListener('click', () => {
      WeaknessDoctorService.resetWeaknessData();
      const appContent = document.getElementById('app-content');
      if (appContent) {
        appContent.innerHTML = renderWeaknessDashboard(this.weaknessSubjectFilter);
        this.attachWeaknessDoctorEvents();
      }
    });
  }

  private initWeaknessPracticeSession(topicId: string): void {
    if (this.currentPracticeSession && this.currentPracticeSession.topicId === topicId) {
      return;
    }

    try {
      const saved = sessionStorage.getItem(`vg_neet_drill_${topicId}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.topicId === topicId && Array.isArray(parsed.questions) && parsed.questions.length > 0) {
          this.currentPracticeSession = parsed;
          return;
        }
      }
    } catch (e) {
      console.warn('Could not restore drill session', e);
    }

    const state = WeaknessDoctorService.getStorageState();
    const attempts = state.attempts.filter(a => a.topicId === topicId);
    const history = state.topicHistories[topicId] || [];
    const initialStats = WeaknessDoctorService.calculateTopicStats(topicId, attempts, history);
    const questions = WeaknessDoctorService.getQuestionsForTopic(topicId);

    this.currentPracticeSession = {
      topicId,
      questions,
      currentIndex: 0,
      userAnswers: {},
      startTime: Date.now(),
      questionStartTime: Date.now(),
      isCompleted: false,
      initialStats,
      updatedStats: initialStats,
      isLoadingAIQuestions: false
    };
    this.persistDrillSession();
  }

  private persistDrillSession(): void {
    if (this.currentPracticeSession) {
      try {
        sessionStorage.setItem(`vg_neet_drill_${this.currentPracticeSession.topicId}`, JSON.stringify(this.currentPracticeSession));
      } catch (e) {}
    }
  }

  private attachWeaknessPracticeEvents(topicId: string): void {
    const session = this.currentPracticeSession;
    if (!session) return;

    // Option Clicks in Active Session
    document.querySelectorAll('.practice-drill-opt-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        if (session.userAnswers[session.currentIndex]) return;

        const selectedOption = parseInt(target.getAttribute('data-option-idx')!, 10);
        const correctOption = parseInt(target.getAttribute('data-correct-idx')!, 10);
        const isCorrect = selectedOption === correctOption;
        const timeSpent = Math.max(1, Math.round((Date.now() - session.questionStartTime) / 1000));

        session.userAnswers[session.currentIndex] = {
          selectedOption,
          isCorrect,
          timeSpent
        };
        this.persistDrillSession();

        const currentQ = session.questions[session.currentIndex];
        
        WeaknessDoctorService.recordQuestionAttempt({
          questionId: currentQ?.id || `practice_${Date.now()}`,
          topicId: session.topicId,
          status: isCorrect ? 'correct' : 'incorrect',
          selectedOption,
          correctOption,
          timeSpentSeconds: timeSpent,
          source: 'focused_fix'
        });

        const appContent = document.getElementById('app-content');
        if (appContent) {
          appContent.innerHTML = renderWeaknessPracticeView(topicId, session);
          this.attachWeaknessPracticeEvents(topicId);
        }
      });
    });

    // Next Question Button
    document.getElementById('btn-practice-next')?.addEventListener('click', () => {
      if (session.currentIndex + 1 >= session.questions.length) {
        session.isCompleted = true;
        const state = WeaknessDoctorService.getStorageState();
        const attempts = state.attempts.filter(a => a.topicId === topicId);
        const history = state.topicHistories[topicId] || [];
        session.updatedStats = WeaknessDoctorService.calculateTopicStats(topicId, attempts, history);
      } else {
        session.currentIndex++;
        session.questionStartTime = Date.now();
      }
      this.persistDrillSession();

      const appContent = document.getElementById('app-content');
      if (appContent) {
        appContent.innerHTML = renderWeaknessPracticeView(topicId, session);
        this.attachWeaknessPracticeEvents(topicId);
      }
    });

    // Skip Button
    document.getElementById('btn-practice-skip')?.addEventListener('click', () => {
      if (session.currentIndex + 1 >= session.questions.length) {
        session.isCompleted = true;
      } else {
        session.currentIndex++;
        session.questionStartTime = Date.now();
      }
      this.persistDrillSession();

      const appContent = document.getElementById('app-content');
      if (appContent) {
        appContent.innerHTML = renderWeaknessPracticeView(topicId, session);
        this.attachWeaknessPracticeEvents(topicId);
      }
    });

    // Practice Again Button
    document.getElementById('btn-practice-again')?.addEventListener('click', () => {
      try {
        sessionStorage.removeItem(`vg_neet_drill_${topicId}`);
      } catch (e) {}
      this.currentPracticeSession = null;
      this.initWeaknessPracticeSession(topicId);
      const appContent = document.getElementById('app-content');
      if (appContent) {
        appContent.innerHTML = renderWeaknessPracticeView(topicId, this.currentPracticeSession!);
        this.attachWeaknessPracticeEvents(topicId);
      }
    });

    // Optional Batch AI Question Generator
    document.getElementById('btn-practice-generate-ai')?.addEventListener('click', async (e) => {
      const target = e.currentTarget as HTMLButtonElement;
      target.disabled = true;
      target.innerHTML = `<span>⏳ Generating 5 High-Yield NEET Questions...</span>`;

      try {
        const extraQuestions = await WeaknessDoctorService.generateGeminiBatchQuestions(topicId, 5);
        if (extraQuestions && extraQuestions.length > 0) {
          session.questions = extraQuestions;
          session.currentIndex = 0;
          session.userAnswers = {};
          session.isCompleted = false;
          session.questionStartTime = Date.now();
        }
      } catch (err) {
        console.error('Failed to generate extra questions:', err);
      }

      const appContent = document.getElementById('app-content');
      if (appContent) {
        appContent.innerHTML = renderWeaknessPracticeView(topicId, session);
        this.attachWeaknessPracticeEvents(topicId);
      }
    });
  }

  private initDiagnosticQuizSession(): void {
    if (!this.currentDiagnosticQuiz) {
      const questions = WeaknessDoctorService.getDiagnosticAssessment();
      this.currentDiagnosticQuiz = {
        questions,
        currentIndex: 0,
        userAnswers: {},
        startTime: Date.now(),
        questionStartTime: Date.now(),
        isCompleted: false
      };
    }
  }

  private attachDiagnosticQuizEvents(): void {
    const quiz = this.currentDiagnosticQuiz;
    if (!quiz) return;

    // Option Clicks
    document.querySelectorAll('.diagnostic-opt-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        if (quiz.userAnswers[quiz.currentIndex]) return;

        const selectedOption = parseInt(target.getAttribute('data-option-idx')!, 10);
        const correctOption = parseInt(target.getAttribute('data-correct-idx')!, 10);
        const topicId = target.getAttribute('data-topic-id')!;
        const questionId = target.getAttribute('data-question-id')!;
        const isCorrect = selectedOption === correctOption;
        const timeSpent = Math.max(1, Math.round((Date.now() - quiz.questionStartTime) / 1000));

        quiz.userAnswers[quiz.currentIndex] = {
          selectedOption,
          isCorrect,
          timeSpent
        };

        WeaknessDoctorService.recordQuestionAttempt({
          questionId,
          topicId,
          status: isCorrect ? 'correct' : 'incorrect',
          selectedOption,
          correctOption,
          timeSpentSeconds: timeSpent,
          source: 'diagnostic_quiz'
        });

        const appContent = document.getElementById('app-content');
        if (appContent) {
          appContent.innerHTML = renderDiagnosticQuizView(quiz);
          this.attachDiagnosticQuizEvents();
        }
      });
    });

    // Next / Finish
    document.getElementById('btn-diagnostic-next')?.addEventListener('click', () => {
      if (quiz.currentIndex + 1 >= quiz.questions.length) {
        quiz.isCompleted = true;
      } else {
        quiz.currentIndex++;
        quiz.questionStartTime = Date.now();
      }

      const appContent = document.getElementById('app-content');
      if (appContent) {
        appContent.innerHTML = renderDiagnosticQuizView(quiz);
        this.attachDiagnosticQuizEvents();
      }
    });

    // Skip
    document.getElementById('btn-diagnostic-skip')?.addEventListener('click', () => {
      if (quiz.currentIndex + 1 >= quiz.questions.length) {
        quiz.isCompleted = true;
      } else {
        quiz.currentIndex++;
        quiz.questionStartTime = Date.now();
      }

      const appContent = document.getElementById('app-content');
      if (appContent) {
        appContent.innerHTML = renderDiagnosticQuizView(quiz);
        this.attachDiagnosticQuizEvents();
      }
    });
  }

  private attachModalEvents(): void {
    // Search close
    document.getElementById('btn-close-search')?.addEventListener('click', () => {
      this.closeModal('modal-search');
    });

    // Search Input
    const searchInput = document.getElementById('input-modal-search') as HTMLInputElement;
    const resultsList = document.getElementById('search-results-list');

    const updateSearch = () => {
      if (searchInput && resultsList) {
        resultsList.innerHTML = handleSearchInput(searchInput.value, this.currentSearchFilter);
        resultsList.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => this.closeModal('modal-search'));
        });
      }
    };

    searchInput?.addEventListener('input', updateSearch);

    // Filter Tag Buttons
    document.querySelectorAll('.filter-tag-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        this.currentSearchFilter = target.getAttribute('data-filter') || 'all';

        document.querySelectorAll('.filter-tag-btn').forEach(b => {
          b.className = 'filter-tag-btn px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-200';
        });
        target.className = 'filter-tag-btn px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold';

        updateSearch();
      });
    });
  }

  private openBookmarksModal(): void {
    const modalsContainer = document.getElementById('modals-container');
    if (modalsContainer) {
      const existing = document.getElementById('modal-bookmarks');
      if (existing) existing.remove();
      modalsContainer.insertAdjacentHTML('beforeend', renderBookmarksModal());

      document.getElementById('btn-close-bookmarks')?.addEventListener('click', () => {
        this.closeModal('modal-bookmarks');
      });

      this.openModal('modal-bookmarks');
    }
  }

  private openProgressModal(): void {
    const modalsContainer = document.getElementById('modal-progress');
    if (modalsContainer) {
      modalsContainer.remove();
    }
    const container = document.getElementById('modals-container');
    if (container) {
      container.insertAdjacentHTML('beforeend', renderProgressModal());

      document.getElementById('btn-close-progress')?.addEventListener('click', () => {
        this.closeModal('modal-progress');
      });

      this.openModal('modal-progress');
    }
  }

  private openModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      if (modalId === 'modal-search') {
        const input = document.getElementById('input-modal-search') as HTMLInputElement;
        input?.focus();
      }
    }
  }

  private closeModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    }
  }

  private closeAllModals(): void {
    ['modal-search', 'modal-bookmarks', 'modal-progress', 'modal-auth'].forEach(id => this.closeModal(id));
  }
}

// Instantiate and initialize app when DOM is ready
function startApp(): void {
  try {
    const app = new App();
    app.init();
  } catch (err) {
    console.error('[VG Insights] Failed to initialize app:', err);
    const root = document.getElementById('root');
    if (root && root.innerHTML.trim() === '') {
      root.innerHTML = `
        <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; text-align: center; background: #0f172a; color: #f8fafc;">
          <div style="max-width: 480px; background: #1e293b; padding: 32px; border-radius: 16px; border: 1px solid #334155;">
            <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 12px; color: #60a5fa;">VG Insights – Initializing</h2>
            <p style="font-size: 14px; color: #94a3b8; margin-bottom: 20px;">Please refresh or click below to enter the portal.</p>
            <button onclick="window.location.reload()" style="background: #2563eb; color: white; border: none; padding: 10px 24px; border-radius: 8px; font-weight: 600; cursor: pointer;">Reload Application</button>
          </div>
        </div>
      `;
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}

