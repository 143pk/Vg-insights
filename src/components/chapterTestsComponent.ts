import { CHAPTERS, SUBJECTS, CLASSIFICATIONS } from '../data/neetData';

export function renderChapterTestsView(selectedSubject: string = 'all'): string {
  const chaptersList = Object.entries(CHAPTERS).map(([id, ch]) => {
    const classification = CLASSIFICATIONS[ch.classificationId];
    const subjectId = classification?.subjectId || (id.startsWith('phys-') ? 'physics' : (id.startsWith('chem-') ? 'chemistry' : 'biology'));
    return {
      id,
      title: ch.title,
      subjectId,
      subjectName: subjectId === 'physics' ? 'Physics' : (subjectId === 'chemistry' ? 'Chemistry' : 'Biology'),
      topicCount: ch.topicIds.length
    };
  });

  const filtered = selectedSubject === 'all' ? chaptersList : chaptersList.filter(c => c.subjectId === selectedSubject);

  return `
    <div class="max-w-5xl mx-auto space-y-6 pb-16">
      
      <!-- White Academic Header Banner -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800">
            📑 Chapter Tests
          </span>
          <a href="#weekly-mock" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
            ← Full Weekly Mock
          </a>
        </div>
        <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          NEET Chapter-Wise Test Series
        </h1>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Targeted 20-30 question chapter test simulations. Test individual chapters to reinforce high-yield concepts before attempting full weekly mocks.
        </p>
      </div>

      <!-- Subject Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1">
        <a href="#chapter-tests/filter/all" class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedSubject === 'all' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'}">
          All Subjects (${chaptersList.length})
        </a>
        <a href="#chapter-tests/filter/physics" class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedSubject === 'physics' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'}">
          ⚛️ Physics (${chaptersList.filter(c => c.subjectId === 'physics').length})
        </a>
        <a href="#chapter-tests/filter/chemistry" class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedSubject === 'chemistry' ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'}">
          🧪 Chemistry (${chaptersList.filter(c => c.subjectId === 'chemistry').length})
        </a>
        <a href="#chapter-tests/filter/biology" class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedSubject === 'biology' ? 'bg-purple-600 text-white' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'}">
          🧬 Biology (${chaptersList.filter(c => c.subjectId === 'biology').length})
        </a>
      </div>

      <!-- Chapters Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${filtered.map(ch => `
          <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between hover:border-blue-500/40 transition-all">
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${
                  ch.subjectId === 'physics' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                  (ch.subjectId === 'chemistry' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400')
                }">
                  ${ch.subjectName}
                </span>
                <span class="text-xs text-slate-400 font-medium">${ch.topicCount} Topics</span>
              </div>
              <h3 class="font-bold text-slate-900 dark:text-white text-sm">
                ${ch.title}
              </h3>
            </div>

            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span class="text-[11px] text-slate-500">20 Qs • 25 Mins</span>
              <button
                data-start-chapter-test="${ch.id}"
                data-chapter-title="${ch.title}"
                data-subject="${ch.subjectId}"
                class="btn-start-chapter-test px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-colors">
                Start Test →
              </button>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}
