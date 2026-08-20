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
    <div class="max-w-5xl mx-auto space-y-6 pb-16">
      
      <!-- White Academic Header with Social Share -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-200 dark:border-indigo-800">
            <span>⚡</span> High Yield Quick Revision
          </div>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Formula Sheets & Core Concepts
          </h1>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Rapid-fire formula cards, key NCERT relations, and high-frequency exam principles for fast revision.
          </p>
        </div>

        <div class="flex items-center gap-2 w-full md:w-auto shrink-0">
          <a
            href="https://api.whatsapp.com/send?text=${encodeURIComponent('⚡ Free NEET UG High-Yield Formula Sheets & NCERT Revision Notes on VG Insights: https://vginsights.in/#revision')}"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 md:flex-initial px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <span>💬</span> Share on WhatsApp
          </a>
          <a
            href="https://t.me/share/url?url=${encodeURIComponent('https://vginsights.in/#revision')}&text=${encodeURIComponent('⚡ Free NEET UG High-Yield Formula Sheets & Revision Notes on VG Insights:')}"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 md:flex-initial px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <span>✈️</span> Telegram
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${formulaCards.slice(0, 30).map(f => `
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-2.5">
            <span class="text-[10px] font-bold uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">${f.topicTitle}</span>
            <h3 class="font-bold text-base text-slate-900 dark:text-white">
              ${f.formulaName || f.title}
            </h3>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-slate-100 font-mono text-sm font-bold text-center katex-render-target">
              ${f.formula || f.expression}
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              ${f.meaning || f.explanation || f.description || ''}
            </p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
