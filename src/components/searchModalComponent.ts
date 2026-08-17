import { TOPICS, CHAPTERS, CLASSIFICATIONS, SUBJECTS } from '../data/neetData'

export function renderSearchModal(): string {
  return `
    <div id="modal-search" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div class="w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        <!-- Search Input Bar -->
        <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-slate-50/50 dark:bg-slate-800/50">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input 
            type="text" 
            id="input-modal-search" 
            placeholder="Search concepts (e.g. Friction, Mole, Organelles, Newton)..." 
            class="w-full bg-transparent text-slate-900 dark:text-slate-100 text-sm font-medium focus:outline-none placeholder-slate-400"
            autocomplete="off"
          />
          <button id="btn-close-search" class="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
            ✕
          </button>
        </div>

        <!-- Filter Tags -->
        <div class="px-4 py-2 border-b border-slate-100 dark:border-slate-800/60 flex items-center gap-2 overflow-x-auto text-xs">
          <span class="text-slate-400 font-medium shrink-0">Filter:</span>
          <button class="filter-tag-btn px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold" data-filter="all">All</button>
          <button class="filter-tag-btn px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-200" data-filter="physics">Physics ⚡</button>
          <button class="filter-tag-btn px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-200" data-filter="chemistry">Chemistry 🧪</button>
          <button class="filter-tag-btn px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-200" data-filter="biology">Biology 🧬</button>
        </div>

        <!-- Search Results List -->
        <div id="search-results-list" class="p-4 overflow-y-auto space-y-2 divide-y divide-slate-100 dark:divide-slate-800">
          <div class="p-8 text-center text-xs text-slate-400">
            Type a keyword above to search topics, formulas, or PYQs...
          </div>
        </div>

        <!-- Footer -->
        <div class="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Search NEET UG Database</span>
          <span>Press ESC to close</span>
        </div>

      </div>
    </div>
  `;
}

export function handleSearchInput(query: string, filter: string = 'all'): string {
  const clean = query.trim().toLowerCase();
  if (!clean) {
    return `<div class="p-8 text-center text-xs text-slate-400">Type a keyword above to search topics, formulas, or PYQs...</div>`;
  }

  const matches: Array<{ topic: typeof TOPICS[string]; chapter?: typeof CHAPTERS[string]; subject?: typeof SUBJECTS[0] }> = [];

  Object.values(TOPICS).forEach(t => {
    const chapter = CHAPTERS[t.chapterId];
    const classification = chapter ? CLASSIFICATIONS[chapter.classificationId] : undefined;
    const subject = classification ? SUBJECTS.find(s => s.id === classification.subjectId) : undefined;

    if (filter !== 'all' && subject?.id !== filter) return;

    const matchesTitle = t.title.toLowerCase().includes(clean);
    const matchesSummary = t.summary ? t.summary.toLowerCase().includes(clean) : false;
    const matchesLearn = t.notes?.learn ? t.notes.learn.some(p => p.toLowerCase().includes(clean)) : false;
    const matchesFormula = t.notes?.formulas ? t.notes.formulas.some((f: any) => {
      if (typeof f === 'string') return (f as string).toLowerCase().includes(clean);
      const title = String(f?.title || f?.name || '');
      const form = String(f?.formula || f?.expression || '');
      return title.toLowerCase().includes(clean) || form.toLowerCase().includes(clean);
    }) : false;

    if (matchesTitle || matchesSummary || matchesLearn || matchesFormula) {
      matches.push({ topic: t, chapter, subject });
    }
  });

  if (matches.length === 0) {
    return `<div class="p-8 text-center text-xs text-slate-500">No topics found matching "${query}". Try searching for "Friction", "Mole", or "Cell".</div>`;
  }

  return matches.map(m => `
    <a href="#topic/${m.topic.id}" class="search-item-link block p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors space-y-1">
      <div class="flex items-center justify-between text-xs">
        <span class="font-bold text-blue-600 dark:text-blue-400">${m.subject?.name || 'NEET'} • ${m.chapter?.title || ''}</span>
        <span class="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500">${m.topic.estimatedReadTimeMinutes} min</span>
      </div>
      <div class="font-bold text-sm text-slate-900 dark:text-slate-100">
        ${m.topic.title}
      </div>
      <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
        ${m.topic.summary}
      </p>
    </a>
  `).join('');
}
