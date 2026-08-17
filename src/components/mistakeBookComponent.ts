import { MistakeBookService, MistakeRecord } from '../services/mistakeBookService';
import { StorageService } from '../services/storageService';

export function renderMistakeBookView(currentFilter: string = 'all', searchQuery: string = ''): string {
  const mistakes = MistakeBookService.getMistakesList({
    subject: currentFilter === 'all' ? undefined : currentFilter,
    onlyRepeated: currentFilter === 'repeated',
    searchQuery: searchQuery
  });

  const state = MistakeBookService.getState();
  const allMistakesCount = state.totalMistakesCount;
  const repeatedCount = state.repeatedMistakesCount;
  const resolvedCount = state.resolvedMistakesCount;

  return `
    <div class="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-16">
      
      <!-- Mistake Book Header -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span class="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-200 dark:border-amber-800">
              Error Analysis & Mastery
            </span>
            <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
              NEET Mistake Book
            </h1>
          </div>
          <a href="#weekly-mock" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white shadow-sm transition-colors">
            Take Weekly Mock →
          </a>
        </div>

        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Every question you get wrong in Weekly Mocks, Chapter Tests, or Diagnostic Quizzes is automatically logged here. Review recurring misconceptions and turn your mistakes into guaranteed marks.
        </p>

        <!-- Stats Counter Grid -->
        <div class="grid grid-cols-3 gap-3 pt-2">
          <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-center">
            <span class="text-[10px] font-bold uppercase text-slate-400 block">Total Mistakes</span>
            <span class="text-2xl font-black text-slate-900 dark:text-white">${allMistakesCount}</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-center">
            <span class="text-[10px] font-bold uppercase text-rose-600 dark:text-rose-400 block">Repeated Mistakes</span>
            <span class="text-2xl font-black text-rose-600 dark:text-rose-400">${repeatedCount}</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-center">
            <span class="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400 block">Resolved</span>
            <span class="text-2xl font-black text-emerald-600 dark:text-emerald-400">${resolvedCount}</span>
          </div>
        </div>
      </div>

      <!-- Filter Controls & Search -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        
        <div class="flex items-center gap-1.5 flex-wrap">
          <a href="#mistake-book/filter/all" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentFilter === 'all' ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">
            All (${allMistakesCount})
          </a>
          <a href="#mistake-book/filter/repeated" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentFilter === 'repeated' ? 'bg-rose-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">
            🔥 Repeated (${repeatedCount})
          </a>
          <a href="#mistake-book/filter/physics" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentFilter === 'physics' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">
            Physics
          </a>
          <a href="#mistake-book/filter/chemistry" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentFilter === 'chemistry' ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">
            Chemistry
          </a>
          <a href="#mistake-book/filter/biology" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentFilter === 'biology' ? 'bg-purple-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">
            Biology
          </a>
        </div>

        <div class="relative w-full sm:w-64">
          <input
            id="input-mistake-search"
            type="text"
            placeholder="Search questions or topics..."
            value="${searchQuery}"
            class="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <span class="absolute left-2.5 top-2 text-xs text-slate-400">🔍</span>
        </div>

      </div>

      <!-- Mistakes List -->
      ${mistakes.length > 0 ? `
        <div class="space-y-4">
          ${mistakes.map(m => {
            const optLetters = ['A', 'B', 'C', 'D'];
            return `
              <div class="academic-question-card p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
                
                <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
                      m.subject === 'physics' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                      (m.subject === 'chemistry' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400')
                    }">
                      ${m.subjectName}
                    </span>
                    <span class="font-bold text-xs text-slate-700 dark:text-slate-300">
                      ${m.chapterTitle}
                    </span>
                    <span class="text-xs text-slate-400 truncate max-w-[180px]">
                      • ${m.topicTitle}
                    </span>
                  </div>

                  <div class="flex items-center gap-2">
                    ${m.isRepeatedMistake ? `
                      <span class="px-2.5 py-0.5 rounded-full bg-rose-500 text-white font-extrabold text-[10px] animate-pulse">
                        🔥 REPEATED MISTAKE (${m.timesIncorrect}x)
                      </span>
                    ` : `
                      <span class="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-[10px]">
                        Incorrect 1x
                      </span>
                    `}

                    <button data-resolve-id="${m.questionId}" class="btn-resolve-mistake px-3 py-1 rounded-xl text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-xs font-bold border border-emerald-500/30 transition-colors">
                      ✓ Mark Mastered
                    </button>
                  </div>
                </div>

                <!-- Question Text -->
                <div class="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 leading-relaxed katex-render-target">
                  ${m.question}
                </div>

                <!-- Options -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${m.options.map((opt, optIdx) => {
                    const isStudentChoice = m.studentAnswer === optIdx;
                    const isCorrect = m.correctAnswer === optIdx;
                    const optLetter = optLetters[optIdx] || String(optIdx + 1);

                    let style = 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300';
                    if (isCorrect) {
                      style = 'border-emerald-500 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
                    } else if (isStudentChoice) {
                      style = 'border-rose-500 bg-rose-500/10 text-rose-950 dark:text-rose-200 font-semibold';
                    }

                    return `
                      <div class="p-3 rounded-2xl border text-xs sm:text-sm flex items-start gap-2.5 ${style}">
                        <span class="w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isCorrect ? 'bg-emerald-500 text-white' : (isStudentChoice ? 'bg-rose-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300')
                        }">
                          ${optLetter}
                        </span>
                        <span class="katex-render-target flex-1">${opt}</span>
                        ${isCorrect ? `<span class="text-emerald-600 dark:text-emerald-400 font-bold text-xs shrink-0">✓ Correct</span>` : ''}
                        ${isStudentChoice ? `<span class="text-rose-600 dark:text-rose-400 font-bold text-xs shrink-0">Your Mistake</span>` : ''}
                      </div>
                    `;
                  }).join('')}
                </div>

                <!-- Explanation -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div class="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                    <span>📖 NCERT Concept Clarification:</span>
                    <span class="text-[10px] text-slate-400">${new Date(m.date).toLocaleDateString()}</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed katex-render-target">
                    ${m.explanation}
                  </p>
                  <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <a href="#weakness-doctor/practice/${m.topicId}" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
                      🎯 Practice ${m.topicTitle} Drill →
                    </a>
                  </div>
                </div>

              </div>
            `;
          }).join('')}
        </div>
      ` : `
        <div class="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <span class="text-4xl block">🎉</span>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">No Mistakes Found!</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            ${currentFilter !== 'all' ? 'No mistakes match the selected filter.' : 'Complete Weekly Mocks and quizzes to track and eliminate tricky mistakes.'}
          </p>
          <a href="#weekly-mock" class="px-5 py-2.5 rounded-2xl bg-blue-600 text-white font-bold text-xs inline-block">
            Take Weekly NEET Mock →
          </a>
        </div>
      `}

    </div>
  `;
}
