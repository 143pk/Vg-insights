import { PYQ_DATABASE, PYQQuestion } from '../data/pyqDatabase';
import { renderInlineMathHTML } from '../utils/mathRenderer';

export interface PYQFilterState {
  subject: string;
  year: string;
  search: string;
}

// In-memory filter state
let currentFilter: PYQFilterState = {
  subject: 'all',
  year: 'all',
  search: ''
};

// Selected answers map: questionId -> selectedIndex
const userAnswers: Record<string, number> = {};

export function renderPYQsView(): string {
  const years = Array.from(new Set(PYQ_DATABASE.map(q => q.year))).sort((a, b) => b - a);

  // Filter questions
  const filtered = PYQ_DATABASE.filter(q => {
    if (currentFilter.subject !== 'all' && q.subject !== currentFilter.subject) return false;
    if (currentFilter.year !== 'all' && q.year.toString() !== currentFilter.year) return false;
    if (currentFilter.search.trim() !== '') {
      const s = currentFilter.search.toLowerCase();
      const matchQ = q.question.toLowerCase().includes(s);
      const matchChap = q.chapterTitle.toLowerCase().includes(s);
      const matchTopic = q.topicTitle.toLowerCase().includes(s);
      const matchYear = q.year.toString().includes(s);
      if (!matchQ && !matchChap && !matchTopic && !matchYear) return false;
    }
    return true;
  });

  return `
    <div id="pyq-archive-root" class="max-w-5xl mx-auto space-y-6 pb-20">
      
      <!-- Academic Header Banner -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 text-xs font-black uppercase tracking-wider border border-amber-200 dark:border-amber-800">
            <span>🏆</span> 2014 – 2026 NEET UG & AIPMT
          </div>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            Showing ${filtered.length} of ${PYQ_DATABASE.length} Authentic Questions
          </span>
        </div>
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Verified PYQ Question Archive
          </h1>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Practice actual past exam questions from 2014 to 2026. Interactive 4-option MCQs with instant answer validation, full step-by-step KaTeX explanations, and NCERT textbook citations.
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="pt-2 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <!-- Subject Filter -->
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Subject</label>
            <div class="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
              ${['all', 'physics', 'chemistry', 'biology'].map(sub => `
                <button 
                  id="btn-pyq-sub-${sub}"
                  data-sub="${sub}"
                  class="pyq-sub-btn flex-1 py-1.5 text-xs font-bold rounded-xl transition-all capitalize ${
                    currentFilter.subject === sub 
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }">
                  ${sub === 'all' ? 'All' : sub.slice(0, 4)}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Year Filter -->
          <div>
            <label for="pyq-year-select" class="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Exam Year</label>
            <select 
              id="pyq-year-select"
              class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="all" ${currentFilter.year === 'all' ? 'selected' : ''}>All Years (2014 - 2026)</option>
              ${years.map(y => `
                <option value="${y}" ${currentFilter.year === y.toString() ? 'selected' : ''}>NEET UG / AIPMT ${y}</option>
              `).join('')}
            </select>
          </div>

          <!-- Search Filter -->
          <div>
            <label for="pyq-search-input" class="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Search Questions</label>
            <input 
              id="pyq-search-input"
              type="text" 
              placeholder="e.g. VSEPR, Gibbs, Sarcomere..." 
              value="${currentFilter.search}"
              class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 text-xs font-medium text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <!-- Question List -->
      <div class="space-y-5">
        ${filtered.length === 0 ? `
          <div class="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">No past year questions match the selected criteria.</p>
            <button id="btn-pyq-reset-filters" class="mt-3 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700">
              Reset Filters
            </button>
          </div>
        ` : filtered.map((q, idx) => {
          const selectedOption = userAnswers[q.id];
          const hasAnswered = selectedOption !== undefined;
          const isCorrect = selectedOption === q.correctIndex;

          const subjectColorBadge = q.subject === 'physics' 
            ? 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
            : q.subject === 'chemistry'
            ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
            : 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';

          return `
            <div id="card-${q.id}" class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
              
              <!-- Badges Header -->
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-3 py-1 rounded-full text-xs font-extrabold border ${subjectColorBadge} capitalize">
                    ${q.subject}
                  </span>
                  <span class="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-extrabold text-xs border border-blue-200 dark:border-blue-800">
                    NEET ${q.year}
                  </span>
                  ${q.difficulty ? `
                    <span class="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold">
                      ${q.difficulty}
                    </span>
                  ` : ''}
                </div>

                <a href="#topic/${q.topicId}" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
                  ${renderInlineMathHTML(q.chapterTitle)} →
                </a>
              </div>

              <!-- Question Text -->
              <div class="text-[15px] font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                <span class="text-slate-400 dark:text-slate-500 font-black mr-1">Q${idx + 1}.</span>
                ${renderInlineMathHTML(q.question)}
              </div>

              <!-- Options Grid (A, B, C, D) -->
              <div class="space-y-2.5 pt-1">
                ${q.options.map((opt, optIdx) => {
                  const letters = ['A', 'B', 'C', 'D'];
                  const optLetter = letters[optIdx] || `${optIdx + 1}`;
                  
                  let optionClass = 'bg-slate-50 dark:bg-slate-800/80 border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer';
                  let letterBadgeClass = 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300';

                  if (hasAnswered) {
                    if (optIdx === q.correctIndex) {
                      // Correct option
                      optionClass = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 dark:border-emerald-600 text-emerald-900 dark:text-emerald-100 font-bold';
                      letterBadgeClass = 'bg-emerald-600 text-white border-emerald-600';
                    } else if (optIdx === selectedOption && !isCorrect) {
                      // Incorrect chosen option
                      optionClass = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 dark:border-rose-600 text-rose-900 dark:text-rose-100 line-through';
                      letterBadgeClass = 'bg-rose-600 text-white border-rose-600';
                    } else {
                      optionClass = 'opacity-50 bg-slate-50 dark:bg-slate-800/40 border-slate-200/50 dark:border-slate-800/50 text-slate-500 dark:text-slate-400';
                    }
                  }

                  return `
                    <button 
                      id="opt-${q.id}-${optIdx}"
                      data-qid="${q.id}"
                      data-oidx="${optIdx}"
                      ${hasAnswered ? 'disabled' : ''}
                      class="pyq-option-btn w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${optionClass}">
                      <span class="w-6 h-6 rounded-xl flex items-center justify-center text-xs font-black shrink-0 border ${letterBadgeClass}">
                        ${optLetter}
                      </span>
                      <span class="text-sm pt-0.5 leading-snug">
                        ${renderInlineMathHTML(opt)}
                      </span>
                    </button>
                  `;
                }).join('')}
              </div>

              <!-- Full Step-by-Step Explanation & NCERT Citation (Visible after answering or toggle) -->
              ${hasAnswered ? `
                <div class="mt-4 p-4 rounded-2xl ${isCorrect ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50' : 'bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50'} space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-black ${isCorrect ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'} flex items-center gap-1.5">
                      <span>${isCorrect ? '✅ Correct Answer!' : '❌ Incorrect Selection'}</span>
                      <span>(Option ${['A', 'B', 'C', 'D'][q.correctIndex]})</span>
                    </span>
                    <button 
                      id="btn-retry-${q.id}" 
                      data-qid="${q.id}"
                      class="pyq-retry-btn text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50">
                      🔄 Try Again
                    </button>
                  </div>

                  <div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal pt-1">
                    <strong class="font-bold text-slate-900 dark:text-white">Step-by-Step Explanation:</strong><br/>
                    ${renderInlineMathHTML(q.explanation)}
                  </div>

                  ${q.ncertReference ? `
                    <div class="pt-2 mt-2 border-t border-slate-200/60 dark:border-slate-800/60 text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <span>📖</span>
                      <span><strong>NCERT Reference:</strong> ${q.ncertReference}</span>
                    </div>
                  ` : ''}
                </div>
              ` : `
                <div class="flex items-center justify-between pt-1 text-xs text-slate-500 dark:text-slate-400">
                  <span class="italic text-[11px]">Select an option above to check your answer & view the step-by-step derivation.</span>
                  <button 
                    id="btn-reveal-${q.id}"
                    data-qid="${q.id}"
                    class="pyq-reveal-btn text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
                    View Solution Key 👁️
                  </button>
                </div>
              `}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

export function attachPYQsEvents(onReRender: () => void): void {
  // Subject button filters
  document.querySelectorAll('.pyq-sub-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const sub = target.dataset.sub || 'all';
      currentFilter.subject = sub;
      onReRender();
    });
  });

  // Year select filter
  const yearSelect = document.getElementById('pyq-year-select') as HTMLSelectElement | null;
  yearSelect?.addEventListener('change', (e) => {
    currentFilter.year = (e.target as HTMLSelectElement).value;
    onReRender();
  });

  // Search input filter
  const searchInput = document.getElementById('pyq-search-input') as HTMLInputElement | null;
  searchInput?.addEventListener('input', (e) => {
    currentFilter.search = (e.target as HTMLInputElement).value;
    onReRender();
  });

  // Reset filter button
  document.getElementById('btn-pyq-reset-filters')?.addEventListener('click', () => {
    currentFilter = { subject: 'all', year: 'all', search: '' };
    onReRender();
  });

  // Option selection
  document.querySelectorAll('.pyq-option-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const qId = target.dataset.qid;
      const oIdx = parseInt(target.dataset.oidx || '0', 10);
      if (qId) {
        userAnswers[qId] = oIdx;
        onReRender();
      }
    });
  });

  // Reveal solution without answering
  document.querySelectorAll('.pyq-reveal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const qId = target.dataset.qid;
      if (qId) {
        const q = PYQ_DATABASE.find(item => item.id === qId);
        if (q) {
          userAnswers[qId] = q.correctIndex;
          onReRender();
        }
      }
    });
  });

  // Retry question
  document.querySelectorAll('.pyq-retry-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const qId = target.dataset.qid;
      if (qId) {
        delete userAnswers[qId];
        onReRender();
      }
    });
  });
}
