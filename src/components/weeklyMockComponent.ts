import { WeeklyMockService } from '../services/weeklyMockService';
import { MistakeBookService } from '../services/mistakeBookService';
import { WeaknessDoctorService } from '../services/weaknessDoctorService';
import {
  WeeklyMockPaper,
  MockSubmissionResult,
  MockQuestion,
  MockUserAnswer
} from '../types/weeklyMock';
import renderMathInElement from 'katex/dist/contrib/auto-render.mjs';

export class WeeklyMockUI {
  /**
   * Helper to format seconds into HH:MM:SS
   */
  public static formatTime(seconds: number): string {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  /**
   * Renders the main landing page for the Weekly NEET Mock
   */
  public static renderLandingView(): string {
    const { year, weekNumber, mockId } = WeeklyMockService.getCurrentYearAndWeek();
    const paper = WeeklyMockService.getOrCreateCurrentWeeklyMock();
    const state = WeeklyMockService.getState();
    const submittedResult = WeeklyMockService.getSubmittedResult(mockId);
    const personalBests = WeeklyMockService.getPersonalBests();

    const isSubmitted = !!submittedResult;
    const hasActiveAttempt = state.activeAttempt && state.activeAttempt.mockId === mockId && !state.activeAttempt.isSubmitted;

    // Previous history for score graph / list
    const pastWeeklyMocks = state.history.filter(h => h.testType === 'weekly' || h.mockId.startsWith('WEEKLY_MOCK_'));

    return `
      <div class="space-y-8 max-w-5xl mx-auto pb-12">
        
        <!-- White Academic Header Banner -->
        <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-4">
          <div class="flex flex-wrap items-center gap-2.5">
            <span class="px-3.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider border border-rose-200 dark:border-rose-800">
              WEEK ${weekNumber} • LIVE
            </span>
            <span class="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-semibold">
              Full NEET UG Simulation
            </span>
            <span class="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold">
              100% Offline Engine
            </span>
          </div>

          <div>
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Weekly NEET Mock Test
            </h1>
            <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-1.5 leading-relaxed">
              Experience real NTA NEET UG examination conditions: 180 high-yield questions, negative marking, instant subject analytics, and AI Weakness Doctor integration.
            </p>
          </div>

          <!-- Key Test Metrics Bar -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Questions</span>
              <span class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">180</span>
              <span class="text-[10px] text-blue-600 dark:text-blue-400 font-medium block">45P + 45C + 90B</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Duration</span>
              <span class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">180 <span class="text-xs font-semibold">min</span></span>
              <span class="text-[10px] text-slate-500 block">Timer with Auto-Save</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Max Marks</span>
              <span class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">720</span>
              <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium block">+4 / -1 Marking</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Status</span>
              <span class="text-sm sm:text-base font-extrabold ${isSubmitted ? 'text-emerald-600 dark:text-emerald-400' : (hasActiveAttempt ? 'text-amber-600 dark:text-amber-400' : 'text-slate-700 dark:text-slate-300')} block">
                ${isSubmitted ? '✓ Submitted' : (hasActiveAttempt ? '⏳ In Progress' : 'Not Started')}
              </span>
              <span class="text-[10px] text-slate-400 block">Week ${weekNumber}, ${year}</span>
            </div>
          </div>

          <!-- Primary Action Buttons -->
          <div class="pt-4 flex flex-wrap items-center gap-3">
            ${isSubmitted ? `
              <a href="#weekly-mock/result/${mockId}" class="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-sm transition-all flex items-center gap-2">
                <span>View Week ${weekNumber} Results & Solutions →</span>
              </a>
              <button id="btn-retake-weekly-mock" class="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 transition-all">
                🔄 Retake Fresh Attempt
              </button>
            ` : hasActiveAttempt ? `
              <a href="#weekly-mock/test/${mockId}" class="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm sm:text-base shadow-sm transition-all flex items-center gap-2">
                <span>▶ Resume Active Mock Test →</span>
              </a>
            ` : `
              <a href="#weekly-mock/instructions/${mockId}" class="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-sm transition-all flex items-center gap-2">
                <span>🚀 Start Weekly NEET Mock →</span>
              </a>
            `}
            
            <a href="#test-history" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-1.5">
              <span>📊 Past Test History</span>
            </a>
          </div>

        </div>

        <!-- Subject Breakdown & Difficulty Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <!-- Physics Card -->
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <span class="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center text-sm">⚛️</span>
                <h3 class="font-bold text-slate-900 dark:text-white">Physics Section</h3>
              </div>
              <span class="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-md">45 Qs</span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Mechanics, Electrodynamics, Optics, Thermodynamics, Modern Physics & Semiconductors.
            </p>
            <div class="flex items-center justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span>Max Marks: 180</span>
              <span>Questions 1–45</span>
            </div>
          </div>

          <!-- Chemistry Card -->
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <span class="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center text-sm">🧪</span>
                <h3 class="font-bold text-slate-900 dark:text-white">Chemistry Section</h3>
              </div>
              <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-md">45 Qs</span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Physical, Organic, and Inorganic Chemistry with high-yield Nernst, Kinetics & Named Reactions.
            </p>
            <div class="flex items-center justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span>Max Marks: 180</span>
              <span>Questions 46–90</span>
            </div>
          </div>

          <!-- Biology Card -->
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <span class="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold flex items-center justify-center text-sm">🧬</span>
                <h3 class="font-bold text-slate-900 dark:text-white">Biology Section</h3>
              </div>
              <span class="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-0.5 rounded-md">90 Qs</span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Botany (45 Qs) and Zoology (45 Qs) spanning NCERT Genetics, Ecology, Human Physiology & Biotech.
            </p>
            <div class="flex items-center justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span>Max Marks: 360</span>
              <span>Questions 91–180</span>
            </div>
          </div>

        </div>

        <!-- Personal Bests & Weekly Streak Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <!-- Personal Best Card -->
          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-xl">🏆</span>
                <h3 class="font-bold text-slate-900 dark:text-white">Personal Best</h3>
              </div>
              <span class="text-xs font-bold text-slate-500 dark:text-slate-400">
                ${personalBests.totalTestsCompleted} Completed
              </span>
            </div>

            <div class="grid grid-cols-3 gap-2">
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-center">
                <span class="text-[10px] font-bold text-slate-400 uppercase block">Best Score</span>
                <span class="text-lg font-black text-blue-600 dark:text-blue-400">
                  ${personalBests.bestScore > 0 ? `${personalBests.bestScore}` : '—'} <span class="text-[10px] text-slate-400 font-normal">/720</span>
                </span>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-center">
                <span class="text-[10px] font-bold text-slate-400 uppercase block">Best Accuracy</span>
                <span class="text-lg font-black text-emerald-600 dark:text-emerald-400">
                  ${personalBests.bestAccuracy > 0 ? `${personalBests.bestAccuracy}%` : '—'}
                </span>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-center">
                <span class="text-[10px] font-bold text-slate-400 uppercase block">Top Subject</span>
                <span class="text-xs font-extrabold text-purple-600 dark:text-purple-400 truncate block mt-1">
                  ${personalBests.bestSubject}
                </span>
              </div>
            </div>

            ${personalBests.scoreImprovement !== 0 ? `
              <div class="text-xs font-semibold ${personalBests.scoreImprovement > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500'} flex items-center gap-1.5">
                <span>${personalBests.scoreImprovement > 0 ? '📈 +' + personalBests.scoreImprovement + ' marks improvement since first test' : '📊 Tracking week-to-week momentum'}</span>
              </div>
            ` : ''}
          </div>

          <!-- Weekly Streak Card -->
          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-xl">🔥</span>
                <h3 class="font-bold text-slate-900 dark:text-white">Weekly Mock Streak</h3>
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">
                Consistency Engine
              </span>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex flex-col items-center justify-center shrink-0">
                <span class="text-2xl font-black text-amber-600 dark:text-amber-400">${personalBests.weeklyStreak}</span>
                <span class="text-[9px] font-bold uppercase text-amber-600 dark:text-amber-400 -mt-1">Weeks</span>
              </div>
              <div class="space-y-1">
                <p class="text-xs font-bold text-slate-800 dark:text-slate-200">
                  ${personalBests.weeklyStreak >= 1 ? `${personalBests.weeklyStreak} Consecutive Weekly Mocks Completed!` : 'Start your weekly testing habit today.'}
                </p>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  Completing weekly full-length mocks builds stamina and trains exam timing for NEET UG.
                </p>
              </div>
            </div>

            <div class="flex items-center gap-1 text-xs">
              ${Array.from({ length: Math.min(6, Math.max(1, personalBests.weeklyStreak)) }).map(() => `
                <span class="p-1 rounded-md bg-amber-100 dark:bg-amber-900/30 text-amber-500 text-sm">🔥</span>
              `).join('')}
              <span class="text-[11px] text-slate-400 font-medium ml-2">Keep the flame active!</span>
            </div>
          </div>

        </div>

        <!-- Previous Weekly Scores Section -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-bold text-slate-900 dark:text-white text-base">
                📈 Previous Weekly Scores
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                Historical score progression and accuracy trend across weekly attempts.
              </p>
            </div>
            <a href="#test-history" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
              View All History →
            </a>
          </div>

          ${pastWeeklyMocks.length > 0 ? `
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              ${pastWeeklyMocks.slice(0, 4).map((m, idx) => `
                <a href="#weekly-mock/result/${m.mockId}" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 border border-slate-200/80 dark:border-slate-700/60 transition-all block group">
                  <div class="flex items-center justify-between text-xs text-slate-400 font-semibold mb-1">
                    <span>Week ${m.weekNumber}</span>
                    <span class="text-emerald-600 dark:text-emerald-400 font-bold">${m.accuracyPercentage}% Acc</span>
                  </div>
                  <div class="text-xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    ${m.totalScore} <span class="text-xs font-normal text-slate-400">/ 720</span>
                  </div>
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center justify-between">
                    <span>+${m.totalCorrect} correct</span>
                    <span>-${m.totalIncorrect} incorrect</span>
                  </div>
                </a>
              `).join('')}
            </div>
          ` : `
            <div class="p-8 text-center rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-200 dark:border-slate-800 space-y-2">
              <span class="text-3xl block">🎯</span>
              <p class="font-bold text-slate-700 dark:text-slate-300 text-sm">
                Your first weekly mock starts here.
              </p>
              <p class="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Complete your Week ${weekNumber} mock to record your baseline score, track improvements, and activate personalized diagnostics.
              </p>
            </div>
          `}
        </div>

      </div>
    `;
  }

  /**
   * Renders the Instruction screen before starting the test
   */
  public static renderInstructionsView(mockId: string): string {
    return this.renderInstructionView(mockId);
  }

  public static renderInstructionView(mockId: string): string {
    const { weekNumber } = WeeklyMockService.getCurrentYearAndWeek();

    return `
      <div class="max-w-3xl mx-auto space-y-6 animate-fadeIn pb-12">
        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          
          <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span class="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs">
                NEET UG Simulator
              </span>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                Weekly NEET Mock — Week ${weekNumber} Instructions
              </h2>
            </div>
            <span class="text-3xl">📝</span>
          </div>

          <!-- Key Rules Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span class="text-[10px] font-bold uppercase text-slate-400 block">Total Questions</span>
              <span class="text-lg font-black text-slate-900 dark:text-white">180</span>
            </div>
            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span class="text-[10px] font-bold uppercase text-slate-400 block">Duration</span>
              <span class="text-lg font-black text-slate-900 dark:text-white">180 Mins</span>
            </div>
            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span class="text-[10px] font-bold uppercase text-slate-400 block">Correct Mark</span>
              <span class="text-lg font-black text-emerald-600 dark:text-emerald-400">+4 Marks</span>
            </div>
            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span class="text-[10px] font-bold uppercase text-slate-400 block">Incorrect Mark</span>
              <span class="text-lg font-black text-rose-600 dark:text-rose-400">-1 Mark</span>
            </div>
          </div>

          <!-- Important Instructions List -->
          <div class="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-slate-400">
              Please Read Before Beginning:
            </h4>
            <ul class="space-y-2 list-disc list-inside">
              <li>The test consists of <strong>180 Multiple Choice Questions</strong>: Physics (1–45), Chemistry (46–90), and Biology (91–180).</li>
              <li>Each question has 4 options. Only one option is correct.</li>
              <li><strong>Marking Scheme</strong>: <code>+4</code> for correct answer, <code>-1</code> for incorrect answer, <code>0</code> for unattempted.</li>
              <li>The countdown timer starts as soon as you click <strong>"Start Test"</strong>. Answers are automatically saved in local storage.</li>
              <li>You can navigate to any question at any time using the Question Palette on the right.</li>
              <li>When the timer reaches <code>00:00:00</code>, your test will be automatically submitted.</li>
            </ul>
          </div>

          <!-- Buttons -->
          <div class="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
            <a href="#weekly-mock" class="px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors">
              ← Back to Overview
            </a>
            <button id="btn-start-test-confirmed" data-mock-id="${mockId}" class="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2">
              <span>🚀 Start Test Now →</span>
            </button>
          </div>

        </div>
      </div>
    `;
  }

  /**
   * Renders the Active NEET Test Interface
   */
  public static renderTestView(mockId: string): string {
    const state = WeeklyMockService.getState();
    const paper = state.savedMocks[mockId] || WeeklyMockService.getOrCreateCurrentWeeklyMock();
    const attemptResult = WeeklyMockService.startOrResumeAttempt(paper, mockId.startsWith('WEEKLY_MOCK_') ? 'weekly' : 'custom');
    return this.renderActiveTestView(paper, attemptResult.activeAttempt);
  }

  public static renderActiveTestView(paper: WeeklyMockPaper, activeAttempt: NonNullable<ReturnType<typeof WeeklyMockService.getState>['activeAttempt']>): string {
    const qIndex = activeAttempt.currentQuestionIndex;
    const currentQ = paper.questions[qIndex] || paper.questions[0];
    const totalQs = paper.questions.length;
    const currentAnswer = activeAttempt.answers[currentQ.questionId];
    const selectedOpt = currentAnswer ? currentAnswer.selectedOption : null;
    const isMarked = currentAnswer ? currentAnswer.isMarkedForReview : false;

    // Remaining seconds
    const remainingSeconds = Math.max(0, Math.round((activeAttempt.endTimestamp - Date.now()) / 1000));
    const timeFormatted = this.formatTime(remainingSeconds);

    // Question stats for summary
    let answeredCount = 0;
    let reviewCount = 0;
    Object.values(activeAttempt.answers).forEach(a => {
      if (a.selectedOption !== null && a.selectedOption !== undefined) answeredCount++;
      if (a.isMarkedForReview) reviewCount++;
    });
    const unattemptedCount = totalQs - answeredCount;

    return `
      <div id="active-test-container" class="space-y-4 max-w-7xl mx-auto pb-12 select-none" data-mock-id="${paper.id}" data-end-timestamp="${activeAttempt.endTimestamp}">
        
        <!-- Sticky Top Test Header -->
        <div class="sticky top-16 z-30 p-3 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-3">
          
          <div class="flex items-center gap-3">
            <span class="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-extrabold text-xs">
              Week ${paper.weekNumber} Mock
            </span>
            <span class="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              Q <span id="header-q-current">${qIndex + 1}</span> of ${totalQs}
            </span>
          </div>

          <!-- Countdown Timer -->
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white font-mono text-sm sm:text-base font-black shadow-inner tracking-wider ${remainingSeconds < 600 ? 'text-rose-400 animate-pulse' : 'text-emerald-400'}">
            <span>⏱️</span>
            <span id="test-timer-display">${timeFormatted}</span>
          </div>

          <!-- Action buttons -->
          <div class="flex items-center gap-2">
            <!-- Mobile Question Palette Toggle -->
            <button id="btn-toggle-mobile-palette" type="button" class="lg:hidden px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 transition-colors">
              📋 Palette (${answeredCount}/${totalQs})
            </button>
            <button id="btn-open-submit-modal" type="button" class="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-colors">
              Submit Test ⚠️
            </button>
          </div>

        </div>

        <!-- Subject Switcher Tabs -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button data-jump-idx="0" class="subject-jump-btn px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${qIndex < 45 ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}">
            Physics (1–45)
          </button>
          <button data-jump-idx="45" class="subject-jump-btn px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${qIndex >= 45 && qIndex < 90 ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}">
            Chemistry (46–90)
          </button>
          <button data-jump-idx="90" class="subject-jump-btn px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${qIndex >= 90 ? 'bg-purple-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}">
            Biology (91–180)
          </button>
        </div>

        <!-- Main Test Layout (Question Card + Right Palette) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <!-- Question Area (8 cols on desktop) -->
          <div class="lg:col-span-8 space-y-4">
            
            <div class="academic-question-card p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
              
              <!-- Question Header Meta -->
              <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-extrabold text-xs">
                    Question ${qIndex + 1}
                  </span>
                  <span class="px-2 py-0.5 rounded-md text-[11px] font-bold ${
                    currentQ.subject === 'physics' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                    (currentQ.subject === 'chemistry' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400')
                  }">
                    ${currentQ.subjectName}
                  </span>
                  <span class="text-xs text-slate-400 dark:text-slate-500 font-medium truncate max-w-[200px]">
                    ${currentQ.chapterTitle}
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[11px] font-semibold text-slate-400">
                    +4, -1 Mark
                  </span>
                  ${currentQ.isPYQ ? `<span class="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold">PYQ</span>` : ''}
                </div>
              </div>

              <!-- Question Text -->
              <div class="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 leading-relaxed katex-render-target">
                ${currentQ.question}
              </div>

              <!-- Options Grid -->
              <div class="space-y-3 pt-2">
                ${currentQ.options.map((opt, optIdx) => {
                  const isSelected = selectedOpt === optIdx;
                  const optLetter = ['A', 'B', 'C', 'D'][optIdx] || String(optIdx + 1);
                  return `
                    <button
                      type="button"
                      data-option-idx="${optIdx}"
                      class="test-option-btn w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isSelected
                          ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-600 text-blue-950 dark:text-blue-100 shadow-sm font-semibold'
                          : 'bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }">
                      <span class="w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }">
                        ${optLetter}
                      </span>
                      <span class="text-sm sm:text-base leading-relaxed katex-render-target flex-1">
                        ${opt}
                      </span>
                    </button>
                  `;
                }).join('')}
              </div>

              <!-- Question Controls Bar -->
              <div class="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2">
                  <button id="btn-mark-review" type="button" class="px-3.5 py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isMarked
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-slate-100 dark:bg-slate-800 text-purple-600 dark:text-purple-400 border-slate-200 dark:border-slate-700 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                  }">
                    <span>${isMarked ? '✓ Marked for Review' : '🔖 Mark for Review'}</span>
                  </button>
                  ${selectedOpt !== null ? `
                    <button id="btn-clear-response" type="button" class="px-3 py-2 rounded-xl text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      Clear Selection
                    </button>
                  ` : ''}
                </div>

                <div class="flex items-center gap-2">
                  <button id="btn-prev-question" type="button" ${qIndex === 0 ? 'disabled' : ''} class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold disabled:opacity-40 disabled:pointer-events-none transition-colors">
                    ← Previous
                  </button>
                  <button id="btn-save-next" type="button" class="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all">
                    ${qIndex + 1 === totalQs ? 'Save & Finish' : 'Save & Next →'}
                  </button>
                </div>
              </div>

            </div>

          </div>

          <!-- Question Palette (4 cols on desktop, hidden slide-over on mobile) -->
          <div id="desktop-palette-card" class="hidden lg:block lg:col-span-4 bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 sticky top-36">
            
            <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h3 class="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                Question Palette (${totalQs})
              </h3>
              <span class="text-[11px] font-semibold text-slate-400">
                ${answeredCount} Answered
              </span>
            </div>

            <!-- Palette Status Legend -->
            <div class="grid grid-cols-2 gap-1.5 text-[11px] text-slate-600 dark:text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-1.5">
                <span class="w-3.5 h-3.5 rounded bg-emerald-500 text-white text-[9px] flex items-center justify-center font-bold">✓</span>
                <span>Answered (${answeredCount})</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="w-3.5 h-3.5 rounded bg-slate-200 dark:bg-slate-700"></span>
                <span>Unattempted (${unattemptedCount})</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="w-3.5 h-3.5 rounded bg-purple-500 text-white text-[9px] flex items-center justify-center font-bold">★</span>
                <span>Review (${reviewCount})</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="w-3.5 h-3.5 rounded ring-2 ring-blue-500 bg-blue-100 dark:bg-blue-900"></span>
                <span>Current</span>
              </div>
            </div>

            <!-- Numbered Palette Grid -->
            <div class="grid grid-cols-5 sm:grid-cols-6 gap-1.5 max-h-[380px] overflow-y-auto p-1 scrollbar-thin">
              ${paper.questions.map((q, idx) => {
                const ans = activeAttempt.answers[q.questionId];
                const isAns = ans && ans.selectedOption !== null && ans.selectedOption !== undefined;
                const isRev = ans && ans.isMarkedForReview;
                const isCurrent = idx === qIndex;

                let btnClass = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200';
                if (isAns && isRev) {
                  btnClass = 'bg-purple-600 text-white ring-2 ring-emerald-400';
                } else if (isAns) {
                  btnClass = 'bg-emerald-600 text-white';
                } else if (isRev) {
                  btnClass = 'bg-purple-500 text-white';
                }

                if (isCurrent) {
                  btnClass += ' ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900 scale-105 z-10 font-black';
                }

                return `
                  <button
                    type="button"
                    data-jump-to-index="${idx}"
                    class="palette-jump-btn h-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center relative ${btnClass}">
                    <span>${idx + 1}</span>
                    ${isRev ? `<span class="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-300"></span>` : ''}
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Bottom Palette Action -->
            <div class="pt-2 border-t border-slate-100 dark:border-slate-800">
              <button id="btn-palette-submit-test" type="button" class="w-full py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-colors shadow-sm">
                Submit Test ⚠️
              </button>
            </div>

          </div>

        </div>

        <!-- Mobile Palette Slide-over / Modal Drawer -->
        <div id="mobile-palette-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4 lg:hidden">
          <div class="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4 animate-scaleUp max-h-[90vh] flex flex-col">
            
            <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 class="font-bold text-slate-900 dark:text-white text-sm">
                  📋 Question Palette (${totalQs})
                </h3>
                <span class="text-xs text-slate-400">${answeredCount} Answered • ${unattemptedCount} Remaining</span>
              </div>
              <button id="btn-close-mobile-palette" type="button" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center font-bold text-sm">
                ✕
              </button>
            </div>

            <!-- Legend -->
            <div class="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60">
              <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-emerald-500"></span> Answered (${answeredCount})</div>
              <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700"></span> Unattempted (${unattemptedCount})</div>
              <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-purple-500"></span> Marked for Review (${reviewCount})</div>
              <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded ring-2 ring-blue-500 bg-blue-100 dark:bg-blue-900"></span> Current Question</div>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-6 gap-2 overflow-y-auto p-1 flex-1 scrollbar-thin">
              ${paper.questions.map((q, idx) => {
                const ans = activeAttempt.answers[q.questionId];
                const isAns = ans && ans.selectedOption !== null && ans.selectedOption !== undefined;
                const isRev = ans && ans.isMarkedForReview;
                const isCurrent = idx === qIndex;

                let btnClass = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300';
                if (isAns && isRev) {
                  btnClass = 'bg-purple-600 text-white ring-2 ring-emerald-400';
                } else if (isAns) {
                  btnClass = 'bg-emerald-600 text-white';
                } else if (isRev) {
                  btnClass = 'bg-purple-500 text-white';
                }

                if (isCurrent) {
                  btnClass += ' ring-2 ring-blue-500 scale-105 z-10 font-black';
                }

                return `
                  <button
                    type="button"
                    data-jump-to-index="${idx}"
                    class="palette-jump-btn h-10 rounded-xl text-xs font-bold transition-all flex items-center justify-center relative ${btnClass}">
                    <span>${idx + 1}</span>
                    ${isRev ? `<span class="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-300"></span>` : ''}
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Bottom Mobile Action -->
            <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <button id="btn-mobile-palette-submit" type="button" class="flex-1 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-colors shadow-sm">
                Submit Test ⚠️
              </button>
            </div>

          </div>
        </div>

        <!-- Submit Confirmation Modal -->
        <div id="modal-test-submit-confirm" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4">
          <div class="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 animate-scaleUp">
            
            <div class="flex items-center gap-3">
              <span class="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center text-xl">⚠️</span>
              <div>
                <h3 class="font-extrabold text-slate-900 dark:text-white text-base">
                  Submit NEET Mock Test?
                </h3>
                <span class="text-xs text-slate-400">Week ${paper.weekNumber} Mock • 180 Questions</span>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-2 text-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div>
                <span class="text-[10px] font-bold uppercase text-slate-400 block">Answered</span>
                <span class="text-lg font-black text-emerald-600 dark:text-emerald-400">${answeredCount}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold uppercase text-slate-400 block">Unanswered</span>
                <span class="text-lg font-black text-rose-600 dark:text-rose-400">${unattemptedCount}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold uppercase text-slate-400 block">For Review</span>
                <span class="text-lg font-black text-purple-600 dark:text-purple-400">${reviewCount}</span>
              </div>
            </div>

            <p class="text-xs text-slate-500 dark:text-slate-400 text-center leading-relaxed">
              ${qIndex + 1 === totalQs ? 'You have reached the end of the test. Are you sure you want to submit?' : 'Are you sure you want to submit your test? Your responses will be finalized and evaluated immediately.'}
            </p>

            <div class="flex items-center justify-end gap-2 pt-2">
              <button id="btn-cancel-submit" type="button" class="px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors">
                Continue Reviewing
              </button>
              <button id="btn-confirm-final-submit" type="button" class="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold shadow-md shadow-rose-500/20 transition-all">
                Submit Test
              </button>
            </div>

          </div>
        </div>

      </div>
    `;
  }

  /**
   * Renders the comprehensive Mock Result, Performance Breakdown, and Detailed Solutions
   */
  public static renderResultsView(mockId: string, resultFilter: string = 'all'): string {
    return this.renderResultView(mockId, resultFilter);
  }

  public static renderResultView(mockId: string, resultFilter: string = 'all'): string {
    const result = WeeklyMockService.getSubmittedResult(mockId);
    const state = WeeklyMockService.getState();
    const paper = state.savedMocks[mockId] || WeeklyMockService.getOrCreateCurrentWeeklyMock();

    if (!result) {
      return `
        <div class="max-w-2xl mx-auto p-8 text-center space-y-4">
          <span class="text-4xl">⚠️</span>
          <h2 class="text-xl font-bold text-slate-800 dark:text-slate-200">No Submission Found</h2>
          <p class="text-xs text-slate-500">Please start a test attempt first.</p>
          <a href="#weekly-mock" class="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs inline-block">Back to Weekly Mock</a>
        </div>
      `;
    }

    // Filter questions for detailed solutions
    let filteredQuestions = paper.questions;
    if (resultFilter === 'correct') {
      filteredQuestions = paper.questions.filter(q => {
        const a = result.answers[q.questionId];
        return a && a.selectedOption === q.correctAnswer;
      });
    } else if (resultFilter === 'incorrect') {
      filteredQuestions = paper.questions.filter(q => {
        const a = result.answers[q.questionId];
        return a && a.selectedOption !== null && a.selectedOption !== undefined && a.selectedOption !== q.correctAnswer;
      });
    } else if (resultFilter === 'unattempted') {
      filteredQuestions = paper.questions.filter(q => {
        const a = result.answers[q.questionId];
        return !a || a.selectedOption === null || a.selectedOption === undefined;
      });
    } else if (resultFilter === 'review') {
      filteredQuestions = paper.questions.filter(q => {
        const a = result.answers[q.questionId];
        return a && a.isMarkedForReview;
      });
    } else if (resultFilter === 'weak') {
      const weakTopics = new Set(result.topicPerformance.filter(t => t.status === 'WEAK').map(t => t.topicId));
      filteredQuestions = paper.questions.filter(q => weakTopics.has(q.topicId));
    }

    const timeUsedMinutes = Math.max(1, Math.round(result.totalTimeSeconds / 60));

    // Determine biggest weakness from result
    const weakestTopic = result.topicPerformance.find(t => t.status === 'WEAK') || result.topicPerformance[0];

    return `
      <div class="max-w-5xl mx-auto space-y-8 animate-fadeIn pb-16">
        
        <!-- Result Hero Score Card -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white p-6 sm:p-10 shadow-2xl border border-indigo-800/40 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div>
              <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
                ✓ Test Completed
              </span>
              <h1 class="text-2xl sm:text-4xl font-black text-white mt-1.5">
                🎉 Weekly Mock Result — Week ${result.weekNumber}
              </h1>
            </div>
            <div class="flex items-center gap-2 flex-wrap">
              <a href="#weekly-mock" class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors">
                ← Back to Overview
              </a>
              <button id="btn-retake-test-result" data-mock-id="${result.mockId}" type="button" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white transition-colors shadow-sm">
                🔄 Retake Test
              </button>
              <a href="#weakness-doctor" class="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-xs font-bold text-white transition-colors shadow-sm">
                🩺 AI Weakness Doctor →
              </a>
            </div>
          </div>

          <!-- Quick Navigation Actions Bar -->
          <div class="flex flex-wrap items-center gap-2.5 pt-2">
            <button id="btn-review-all-questions" type="button" class="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-extrabold text-white transition-all flex items-center gap-1.5 border border-white/20">
              <span>📋</span> Review All Questions
            </button>
            <button id="btn-view-detailed-solutions" type="button" class="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-xs font-extrabold text-white transition-all flex items-center gap-1.5 shadow-sm">
              <span>📖</span> View Detailed Solutions
            </button>
            <a href="#mistake-book" class="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-xs font-bold text-amber-200 border border-amber-400/30 transition-all flex items-center gap-1.5">
              <span>📕</span> View ${result.totalIncorrect} Mistakes in Mistake Book
            </a>
          </div>

          <!-- Major Score Numbers Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div class="col-span-2 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">Total Score</span>
              <div class="flex items-baseline gap-1 mt-1">
                <span class="text-3xl sm:text-5xl font-black text-white">${result.totalScore}</span>
                <span class="text-base sm:text-xl font-bold text-slate-300">/ 720</span>
              </div>
              <span class="text-xs font-semibold text-emerald-300 block mt-1">
                ${result.totalScore >= 600 ? '⭐ Outstanding (Top Medical Seat Tier)' : (result.totalScore >= 500 ? '🟢 Strong NEET Benchmark' : '🟡 Solid Foundation • Focus on Weak Topics')}
              </span>
            </div>

            <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">Accuracy</span>
              <span class="text-2xl sm:text-3xl font-black text-emerald-400 mt-1 block">${result.accuracyPercentage}%</span>
              <span class="text-[10px] text-slate-300">${result.totalCorrect} / ${result.totalCorrect + result.totalIncorrect} attempted</span>
            </div>

            <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">Breakdown</span>
              <div class="text-xs font-bold space-y-0.5 mt-1">
                <div class="text-emerald-300">+${result.totalCorrect} Correct</div>
                <div class="text-rose-300">-${result.totalIncorrect} Incorrect</div>
                <div class="text-slate-300">${result.totalUnattempted} Unattempted</div>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">Time Used</span>
              <span class="text-2xl sm:text-3xl font-black text-blue-300 mt-1 block">${timeUsedMinutes} <span class="text-xs font-semibold">min</span></span>
              <span class="text-[10px] text-slate-300">${result.averageTimePerQuestion}s avg / question</span>
            </div>
          </div>

          <!-- Subject Marks Progress Bars -->
          <div class="space-y-3 pt-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300">Subject Performance</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              
              <!-- Physics -->
              <div class="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1.5">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-blue-300">⚛️ Physics</span>
                  <span class="font-black text-white">${result.subjectScores.physics.marks} / 180</span>
                </div>
                <div class="w-full h-2 rounded-full bg-black/30 overflow-hidden">
                  <div class="h-full bg-blue-400 rounded-full" style="width: ${Math.max(0, Math.min(100, (result.subjectScores.physics.marks / 180) * 100))}%"></div>
                </div>
                <div class="flex items-center justify-between text-[10px] text-slate-300">
                  <span>${result.subjectScores.physics.accuracy}% Accuracy</span>
                  <span>${result.subjectScores.physics.correct}C / ${result.subjectScores.physics.incorrect}I</span>
                </div>
              </div>

              <!-- Chemistry -->
              <div class="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1.5">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-emerald-300">🧪 Chemistry</span>
                  <span class="font-black text-white">${result.subjectScores.chemistry.marks} / 180</span>
                </div>
                <div class="w-full h-2 rounded-full bg-black/30 overflow-hidden">
                  <div class="h-full bg-emerald-400 rounded-full" style="width: ${Math.max(0, Math.min(100, (result.subjectScores.chemistry.marks / 180) * 100))}%"></div>
                </div>
                <div class="flex items-center justify-between text-[10px] text-slate-300">
                  <span>${result.subjectScores.chemistry.accuracy}% Accuracy</span>
                  <span>${result.subjectScores.chemistry.correct}C / ${result.subjectScores.chemistry.incorrect}I</span>
                </div>
              </div>

              <!-- Biology -->
              <div class="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1.5">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-purple-300">🧬 Biology</span>
                  <span class="font-black text-white">${result.subjectScores.biology.marks} / 360</span>
                </div>
                <div class="w-full h-2 rounded-full bg-black/30 overflow-hidden">
                  <div class="h-full bg-purple-400 rounded-full" style="width: ${Math.max(0, Math.min(100, (result.subjectScores.biology.marks / 360) * 100))}%"></div>
                </div>
                <div class="flex items-center justify-between text-[10px] text-slate-300">
                  <span>${result.subjectScores.biology.accuracy}% Accuracy</span>
                  <span>${result.subjectScores.biology.correct}C / ${result.subjectScores.biology.incorrect}I</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- AI Weakness Doctor & Mistake Book Auto-Sync Banner -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <!-- AI Weakness Doctor Card -->
          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-xl">🩺</span>
                <h3 class="font-bold text-slate-900 dark:text-white text-sm">AI Weakness Doctor Updated</h3>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[11px] font-bold">Auto-Diagnosed</span>
            </div>
            ${weakestTopic ? `
              <div class="p-3.5 rounded-2xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase">Primary Weak Area</span>
                  <span class="text-xs font-bold text-rose-600 dark:text-rose-400">${weakestTopic.accuracy}% Acc</span>
                </div>
                <div class="font-bold text-slate-900 dark:text-white text-sm">
                  ${weakestTopic.topicTitle}
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  Chapter: ${weakestTopic.chapterTitle} (${weakestTopic.subject})
                </p>
                <div class="pt-1">
                  <a href="#weakness-doctor/practice/${weakestTopic.topicId}" class="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors shadow-sm">
                    <span>🎯 FIX THIS WEAKNESS →</span>
                  </a>
                </div>
              </div>
            ` : `
              <p class="text-xs text-slate-500">All topics performed solidly in this paper.</p>
            `}
          </div>

          <!-- Mistake Book Card -->
          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-xl">📕</span>
                <h3 class="font-bold text-slate-900 dark:text-white text-sm">Mistake Book Auto-Sync</h3>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[11px] font-bold">Saved</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase">Saved for Revision</span>
                <span class="text-xs font-bold text-amber-600 dark:text-amber-400">${result.totalIncorrect} Questions</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300">
                All ${result.totalIncorrect} incorrect questions from Week ${result.weekNumber} have been automatically added to your Mistake Book with step-by-step explanations.
              </p>
              <div class="pt-1">
                <a href="#mistake-book" class="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors shadow-sm">
                  <span>Open Mistake Book →</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- Chapter & Topic Performance Section -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-slate-900 dark:text-white text-base">
              📚 Chapter & Topic Performance
            </h3>
            <span class="text-xs text-slate-400">${result.chapterPerformance.length} Chapters Tested</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            ${result.chapterPerformance.map(ch => `
              <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">${ch.subject}</span>
                  <span class="px-2 py-0.5 rounded-md text-[10px] font-black ${
                    ch.status === 'STRONG' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                    (ch.status === 'IMPROVING' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' : 'bg-rose-500/10 text-rose-600 dark:text-rose-400')
                  }">
                    ${ch.accuracy}% ${ch.status === 'STRONG' ? '🟢' : (ch.status === 'IMPROVING' ? '🟡' : '🔴')}
                  </span>
                </div>
                <div class="font-bold text-slate-800 dark:text-slate-200 text-xs truncate">
                  ${ch.chapterTitle}
                </div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400">
                  ${ch.correct} / ${ch.totalQuestions} Questions Correct
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Detailed Solutions Header & Filters -->
        <div id="detailed-solutions-section" class="space-y-4 pt-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 class="text-lg font-black text-slate-900 dark:text-white">
                📖 Detailed Step-by-Step Solutions
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                Complete NCERT-aligned solutions, concept breakdowns, and option analysis for every question.
              </p>
            </div>

            <!-- Solution Filter Tabs -->
            <div class="flex items-center gap-1.5 flex-wrap">
              <a href="#weekly-mock/result/${mockId}/filter/all" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${resultFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">
                All (${paper.questions.length})
              </a>
              <a href="#weekly-mock/result/${mockId}/filter/incorrect" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${resultFilter === 'incorrect' ? 'bg-rose-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">
                ❌ Incorrect (${result.totalIncorrect})
              </a>
              <a href="#weekly-mock/result/${mockId}/filter/correct" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${resultFilter === 'correct' ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">
                ✅ Correct (${result.totalCorrect})
              </a>
              <a href="#weekly-mock/result/${mockId}/filter/unattempted" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${resultFilter === 'unattempted' ? 'bg-slate-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">
                ⚪ Unattempted (${result.totalUnattempted})
              </a>
            </div>
          </div>

          <!-- Questions Solution Cards List -->
          <div class="space-y-4">
            ${filteredQuestions.map((q, idx) => {
              const originalIndex = paper.questions.findIndex(pq => pq.questionId === q.questionId);
              const userAns = result.answers[q.questionId];
              const selectedOpt = userAns ? userAns.selectedOption : null;
              const isCorrect = selectedOpt === q.correctAnswer;
              const isUnattempted = selectedOpt === null || selectedOpt === undefined;

              const optLetters = ['A', 'B', 'C', 'D'];

              return `
                <div class="academic-question-card p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
                  
                  <!-- Question Top Bar -->
                  <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div class="flex items-center gap-2">
                      <span class="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 font-extrabold text-xs text-slate-700 dark:text-slate-300">
                        Q ${originalIndex + 1}
                      </span>
                      <span class="px-2 py-0.5 rounded-md text-[11px] font-bold ${
                        q.subject === 'physics' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                        (q.subject === 'chemistry' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400')
                      }">
                        ${q.subjectName}
                      </span>
                      <span class="text-xs text-slate-400 truncate max-w-[200px]">
                        ${q.chapterTitle}
                      </span>
                    </div>

                    <!-- Result Status Badge -->
                    <div>
                      ${isCorrect ? `
                        <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-black text-xs border border-emerald-500/20">
                          ✅ Correct (+4)
                        </span>
                      ` : (isUnattempted ? `
                        <span class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold text-xs border border-slate-200 dark:border-slate-700">
                          ⚪ Unattempted (0)
                        </span>
                      ` : `
                        <span class="px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 font-black text-xs border border-rose-500/20">
                          ❌ Incorrect (-1)
                        </span>
                      `)}
                    </div>
                  </div>

                  <!-- Question Text -->
                  <div class="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 leading-relaxed katex-render-target">
                    ${q.question}
                  </div>

                  <!-- Options Review List -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    ${q.options.map((opt, optIdx) => {
                      const isOptionSelected = selectedOpt === optIdx;
                      const isOptionCorrect = optIdx === q.correctAnswer;
                      const optLetter = optLetters[optIdx] || String(optIdx + 1);

                      let borderClass = 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300';
                      if (isOptionCorrect) {
                        borderClass = 'border-emerald-500 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
                      } else if (isOptionSelected && !isCorrect) {
                        borderClass = 'border-rose-500 bg-rose-500/10 text-rose-950 dark:text-rose-200 font-semibold ring-1 ring-rose-500';
                      }

                      return `
                        <div class="p-3 rounded-2xl border text-xs sm:text-sm flex items-start gap-2.5 ${borderClass}">
                          <span class="w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                            isOptionCorrect ? 'bg-emerald-500 text-white' : (isOptionSelected ? 'bg-rose-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300')
                          }">
                            ${optLetter}
                          </span>
                          <span class="katex-render-target flex-1">${opt}</span>
                          ${isOptionCorrect ? `<span class="text-emerald-600 dark:text-emerald-400 font-bold text-xs shrink-0">✓ Correct</span>` : ''}
                          ${isOptionSelected && !isCorrect ? `<span class="text-rose-600 dark:text-rose-400 font-bold text-xs shrink-0">Your Choice</span>` : ''}
                        </div>
                      `;
                    }).join('')}
                  </div>

                  <!-- Step-by-Step Solution Card -->
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                    <div class="flex items-center justify-between text-xs">
                      <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span>📖</span> Step-by-Step NCERT Solution:
                      </span>
                      <span class="text-[11px] text-slate-400">Concept: ${q.conceptTested || q.topicTitle}</span>
                    </div>

                    <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed katex-render-target whitespace-pre-line">
                      ${q.explanation}
                    </div>

                    ${q.isPYQ ? `
                      <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-[11px]">
                        <span class="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1">
                          🏆 Verified NEET PYQ ${q.year ? `(${q.year})` : ''}
                        </span>
                        <a href="#weakness-doctor/practice/${q.topicId}" class="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                          Practice more ${q.topicTitle} questions →
                        </a>
                      </div>
                    ` : ''}
                  </div>

                </div>
              `;
            }).join('')}
          </div>

          <!-- Bottom Actions Bar -->
          <div class="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
            <a href="#weekly-mock" class="px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors">
              ← Back to Weekly Mock
            </a>
            <div class="flex items-center gap-2">
              <button id="btn-bottom-retake-test" data-mock-id="${result.mockId}" type="button" class="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm">
                🔄 Retake Test
              </button>
              <a href="#weakness-doctor" class="px-5 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-colors shadow-sm">
                🩺 Open Weakness Doctor →
              </a>
            </div>
          </div>
        </div>

      </div>
    `;
  }
}

export function renderWeeklyMockLanding(): string {
  return WeeklyMockUI.renderLandingView();
}

export function renderWeeklyMockInstructions(mockId: string): string {
  return WeeklyMockUI.renderInstructionsView(mockId);
}

export function renderWeeklyMockTestView(mockId: string): string {
  return WeeklyMockUI.renderTestView(mockId);
}

export function renderWeeklyMockResults(mockId: string, filter: string = 'all'): string {
  return WeeklyMockUI.renderResultsView(mockId, filter);
}
