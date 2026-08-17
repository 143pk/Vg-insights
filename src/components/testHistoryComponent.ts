import { WeeklyMockService } from '../services/weeklyMockService';

export function renderTestHistoryView(): string {
  const state = WeeklyMockService.getState();
  const history = state.history;
  const personalBests = WeeklyMockService.getPersonalBests();

  return `
    <div class="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-16">
      
      <!-- History Header -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl border border-blue-800/40 space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            📊 NEET Mock Archive
          </span>
          <a href="#weekly-mock" class="text-xs font-bold text-blue-300 hover:underline">
            ← Take Weekly Mock
          </a>
        </div>
        <h1 class="text-2xl sm:text-3xl font-black text-white">
          Test History & Score Tracker
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 max-w-2xl">
          Review your complete past test attempts, score growth trends, and detailed solution archives.
        </p>

        <!-- KPI Row -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div class="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-center">
            <span class="text-[10px] font-bold uppercase text-slate-300 block">Tests Taken</span>
            <span class="text-xl sm:text-2xl font-black text-white">${history.length}</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-center">
            <span class="text-[10px] font-bold uppercase text-slate-300 block">Highest Score</span>
            <span class="text-xl sm:text-2xl font-black text-emerald-400">${personalBests.bestScore} <span class="text-xs text-slate-300">/720</span></span>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-center">
            <span class="text-[10px] font-bold uppercase text-slate-300 block">Peak Accuracy</span>
            <span class="text-xl sm:text-2xl font-black text-blue-300">${personalBests.bestAccuracy}%</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-center">
            <span class="text-[10px] font-bold uppercase text-amber-300 block">Weekly Streak</span>
            <span class="text-xl sm:text-2xl font-black text-amber-400">🔥 ${personalBests.weeklyStreak}</span>
          </div>
        </div>
      </div>

      <!-- History Table / Cards -->
      ${history.length > 0 ? `
        <div class="space-y-3">
          ${history.map((h, i) => `
            <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-500/40 transition-all">
              
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs">
                    ${h.testType === 'weekly' ? `Weekly Mock W${h.weekNumber}` : 'Custom Test'}
                  </span>
                  <span class="text-xs text-slate-400 font-medium">
                    ${new Date(h.submissionTimestamp).toLocaleDateString()}
                  </span>
                </div>
                <h3 class="font-bold text-slate-900 dark:text-white text-base">
                  ${h.title}
                </h3>
                <div class="flex items-center gap-3 text-xs text-slate-500">
                  <span>+${h.totalCorrect} Correct</span>
                  <span>-${h.totalIncorrect} Incorrect</span>
                  <span>${h.totalUnattempted} Unattempted</span>
                </div>
              </div>

              <div class="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800">
                <div class="text-right">
                  <div class="text-xl font-black text-slate-900 dark:text-white">
                    ${h.totalScore} <span class="text-xs font-normal text-slate-400">/ ${h.maxMarks}</span>
                  </div>
                  <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    ${h.accuracyPercentage}% Accuracy
                  </span>
                </div>

                <a href="#weekly-mock/result/${h.mockId}" class="px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-bold text-xs transition-colors">
                  View Solutions →
                </a>
              </div>

            </div>
          `).join('')}
        </div>
      ` : `
        <div class="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <span class="text-4xl block">📊</span>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">No Tests Taken Yet</h3>
          <p class="text-xs text-slate-500 max-w-sm mx-auto">
            Take your first Weekly NEET Mock to start building your score history and analytical diagnostics.
          </p>
          <a href="#weekly-mock" class="px-5 py-2.5 rounded-2xl bg-blue-600 text-white font-bold text-xs inline-block">
            Take Weekly NEET Mock →
          </a>
        </div>
      `}

    </div>
  `;
}
