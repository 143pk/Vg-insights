import { TOPIC_DETAILS } from '../data/topicDetails';
import { renderFormulaHTML, renderInlineMathHTML } from '../utils/mathRenderer';

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

      <section aria-labelledby="revision-grid-heading" class="space-y-4">
        <h2 id="revision-grid-heading" class="sr-only">High-Yield NEET UG Formula Cards</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${formulaCards.slice(0, 30).map((f, idx) => {
            const cardSlug = `formula-sheet-${(f.formulaName || f.title || `item-${idx}`).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
            return `
            <article id="${cardSlug}" class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-2.5 scroll-mt-20 group relative" itemscope itemtype="https://schema.org/Question">
              <div class="flex items-center justify-between gap-2">
                <span class="text-[10px] font-bold uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">${renderInlineMathHTML(f.topicTitle)}</span>
                <a href="#${cardSlug}" class="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-indigo-600 transition-opacity text-xs" title="Direct Anchor Link">🔗</a>
              </div>
              <h3 class="font-bold text-base text-slate-900 dark:text-white" itemprop="name">
                ${renderInlineMathHTML(f.formulaName || f.title)} Formula & Equation
              </h3>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" class="space-y-2">
                <div class="formula-passage-target" itemprop="text">
                  ${renderFormulaHTML(f.formula || f.expression)}
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  <strong class="text-slate-800 dark:text-slate-200">Core Relation & Meaning:</strong> ${renderInlineMathHTML(f.meaning || f.explanation || f.description || '')}
                </p>
              </div>
            </article>
          `;
          }).join('')}
        </div>
      </section>
    </div>
  `;
}
