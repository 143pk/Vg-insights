import { WeaknessDoctorService } from '../services/weaknessDoctorService';
import { CHAPTERS } from '../data/neetData';

export function renderStrengthsWeaknessesView(): string {
  const metrics = WeaknessDoctorService.getDashboardMetrics();
  const critical = WeaknessDoctorService.getCriticalWeaknesses(15);
  const improving = WeaknessDoctorService.getImprovingTopics(15);
  const mastered = WeaknessDoctorService.getMasteredTopics(15);

  return `
    <div class="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-16">
      
      <!-- Banner -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white shadow-xl border border-purple-800/40 space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-400/30">
            🎯 Mastery Spectrum
          </span>
          <a href="#weakness-doctor" class="text-xs font-bold text-purple-300 hover:underline">
            🩺 Open AI Weakness Doctor →
          </a>
        </div>
        <h1 class="text-2xl sm:text-3xl font-black text-white">
          Strengths & Weaknesses Matrix
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 max-w-2xl">
          Comprehensive topic classification derived from your real quiz and mock test attempts.
        </p>

        <div class="grid grid-cols-3 gap-3 pt-2">
          <div class="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-center">
            <span class="text-[10px] font-bold uppercase text-rose-300 block">Critical Weaknesses</span>
            <span class="text-2xl font-black text-rose-400">${critical.length}</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-center">
            <span class="text-[10px] font-bold uppercase text-amber-300 block">Improving Topics</span>
            <span class="text-2xl font-black text-amber-400">${improving.length}</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-center">
            <span class="text-[10px] font-bold uppercase text-emerald-300 block">Mastered Topics</span>
            <span class="text-2xl font-black text-emerald-400">${mastered.length}</span>
          </div>
        </div>
      </div>

      <!-- 3 Columns Matrix -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Column 1: Critical Weaknesses -->
        <div class="space-y-3">
          <div class="flex items-center justify-between px-2">
            <h3 class="font-extrabold text-sm text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
              <span>🔴</span> Critical Weaknesses (<50%)
            </h3>
            <span class="text-xs font-bold text-slate-400">${critical.length}</span>
          </div>

          ${critical.length > 0 ? `
            <div class="space-y-2.5">
              ${critical.map(t => `
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/40 shadow-sm space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase text-rose-500">${t.subjectName}</span>
                    <span class="text-xs font-black text-rose-600 dark:text-rose-400">${t.accuracy}% Acc</span>
                  </div>
                  <h4 class="font-bold text-xs text-slate-900 dark:text-white">
                    ${t.topicTitle}
                  </h4>
                  <div class="text-[11px] text-slate-400">
                    ${t.chapterTitle}
                  </div>
                  <a href="#weakness-doctor/practice/${t.topicId}" class="w-full py-1.5 rounded-xl bg-rose-50 dark:bg-rose-900/20 hover:bg-rose-100 text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center justify-center gap-1 transition-colors">
                    <span>🎯 Fix Weakness</span>
                  </a>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400">
              No critical weaknesses diagnosed yet.
            </div>
          `}
        </div>

        <!-- Column 2: Improving Topics -->
        <div class="space-y-3">
          <div class="flex items-center justify-between px-2">
            <h3 class="font-extrabold text-sm text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <span>🟡</span> Improving Topics (50-89%)
            </h3>
            <span class="text-xs font-bold text-slate-400">${improving.length}</span>
          </div>

          ${improving.length > 0 ? `
            <div class="space-y-2.5">
              ${improving.map(t => `
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/40 shadow-sm space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase text-amber-500">${t.subjectName}</span>
                    <span class="text-xs font-black text-amber-600 dark:text-amber-400">${t.accuracy}% Acc</span>
                  </div>
                  <h4 class="font-bold text-xs text-slate-900 dark:text-white">
                    ${t.topicTitle}
                  </h4>
                  <div class="text-[11px] text-slate-400">
                    ${t.chapterTitle}
                  </div>
                  <a href="#weakness-doctor/practice/${t.topicId}" class="w-full py-1.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 hover:bg-amber-100 text-amber-600 dark:text-amber-400 font-bold text-xs flex items-center justify-center gap-1 transition-colors">
                    <span>⚡ Boost to 90%+</span>
                  </a>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400">
              No improving topics recorded.
            </div>
          `}
        </div>

        <!-- Column 3: Mastered Topics -->
        <div class="space-y-3">
          <div class="flex items-center justify-between px-2">
            <h3 class="font-extrabold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <span>⭐</span> Mastered Topics (90-100%)
            </h3>
            <span class="text-xs font-bold text-slate-400">${mastered.length}</span>
          </div>

          ${mastered.length > 0 ? `
            <div class="space-y-2.5">
              ${mastered.map(t => `
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/40 shadow-sm space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase text-emerald-500">${t.subjectName}</span>
                    <span class="text-xs font-black text-emerald-600 dark:text-emerald-400">${t.accuracy}% Acc</span>
                  </div>
                  <h4 class="font-bold text-xs text-slate-900 dark:text-white">
                    ${t.topicTitle}
                  </h4>
                  <div class="text-[11px] text-slate-400">
                    ${t.chapterTitle}
                  </div>
                  <div class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span>✓ Ready for NEET</span>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400">
              Complete more questions to establish mastery.
            </div>
          `}
        </div>

      </div>

    </div>
  `;
}
