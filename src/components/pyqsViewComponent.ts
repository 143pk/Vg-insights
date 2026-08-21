import { TOPIC_DETAILS } from '../data/topicDetails';
import { TOPICS } from '../data/neetData';
import { renderInlineMathHTML } from '../utils/mathRenderer';

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
    <div class="max-w-5xl mx-auto space-y-6 pb-16">
      
      <!-- White Academic Header Banner -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800">
          <span>🏆</span> Past 10+ Years NEET UG
        </div>
        <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          Verified PYQ Question Archive
        </h1>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
          Authentic Past Year Questions organized chapter-by-chapter with verified answer keys, detailed explanations, and KaTeX mathematical formulas.
        </p>
      </div>

      <div class="space-y-4">
        ${pyqList.slice(0, 40).map((q, idx) => `
          <div class="academic-question-card p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-bold text-xs border border-blue-200 dark:border-blue-800">
                ${q.exam || 'NEET UG'} ${q.year || ''}
              </span>
              <a href="#topic/${q.topicId}" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
                ${renderInlineMathHTML(q.topicTitle)} →
              </a>
            </div>
            <div class="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              ${renderInlineMathHTML(q.question || q.questionText)}
            </div>
            ${q.explanation ? `
              <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong class="text-slate-900 dark:text-white">Explanation:</strong> ${renderInlineMathHTML(q.explanation)}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
