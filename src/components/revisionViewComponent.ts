import { TOPIC_DETAILS } from '../data/topicDetails';

export function renderRevisionView(): string {
  // Collect high-yield formulas and concepts
  const formulaCards: any[] = [];
  Object.entries(TOPIC_DETAILS).forEach(([tId, detail]: [string, any]) => {
    (detail.formulas || []).forEach((f: any) => {
      formulaCards.push({
        ...f,
        topicId: tId,
        topicTitle: detail.topicName || detail.title || tId
      });
    });
  });

  return `
    <div class="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-16">
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-950 to-slate-900 text-white shadow-xl border border-indigo-800/40 space-y-2">
        <span class="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-400/30">
          ⚡ High Yield Quick Revision
        </span>
        <h1 class="text-2xl sm:text-3xl font-black text-white">
          Formula Sheets & Core Concepts
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 max-w-2xl">
          Rapid-fire formula cards, key NCERT relations, and high-frequency exam principles.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${formulaCards.slice(0, 24).map(f => `
          <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <span class="text-[10px] font-bold uppercase text-purple-500">${f.topicTitle}</span>
            <h3 class="font-black text-base text-slate-900 dark:text-white">
              ${f.formulaName || f.title}
            </h3>
            <div class="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 font-mono text-sm font-bold text-center katex-render-target">
              ${f.formula || f.expression}
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              ${f.meaning || f.explanation || f.description || ''}
            </p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
