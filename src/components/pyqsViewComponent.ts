import { TOPIC_DETAILS } from '../data/topicDetails';
import { TOPICS } from '../data/neetData';

export function renderPYQsView(): string {
  // Collect all verified PYQs
  const pyqList: any[] = [];
  Object.entries(TOPIC_DETAILS).forEach(([tId, detail]: [string, any]) => {
    (detail.pyqs || []).forEach((q: any) => {
      pyqList.push({
        ...q,
        topicId: tId,
        topicTitle: detail.topicName || detail.title || tId
      });
    });
  });

  return `
    <div class="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-16">
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-blue-800/40 space-y-2">
        <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
          🏆 10+ Years NEET UG
        </span>
        <h1 class="text-2xl sm:text-3xl font-black text-white">
          Verified PYQ Question Archive
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 max-w-2xl">
          Complete authentic Past Year Questions with step-by-step NCERT solutions and exam trend analysis.
        </p>
      </div>

      <div class="space-y-4">
        ${pyqList.slice(0, 30).map((q, idx) => `
          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs">
                ${q.exam || 'NEET UG'} ${q.year || ''}
              </span>
              <span class="text-xs text-slate-400">${q.topicTitle}</span>
            </div>
            <div class="text-sm font-medium text-slate-800 dark:text-slate-200 katex-render-target">
              ${q.question || q.questionText}
            </div>
            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-600 dark:text-slate-300">
              <strong class="text-slate-900 dark:text-white">Explanation:</strong> ${q.explanation}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
