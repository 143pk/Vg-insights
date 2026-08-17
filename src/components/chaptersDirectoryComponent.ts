import { CHAPTERS, CLASSIFICATIONS, SUBJECTS } from '../data/neetData';

export function renderChaptersDirectoryView(): string {
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

  return `
    <div class="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-16">
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-blue-800/40 space-y-2">
        <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
          📖 Complete Syllabus Directory
        </span>
        <h1 class="text-2xl sm:text-3xl font-black text-white">
          All NEET UG Chapters (${chaptersList.length})
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 max-w-2xl">
          Class 11 and 12 chapter modules covering Physics, Chemistry, and Biology.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${chaptersList.map(ch => `
          <a href="#chapter/${ch.id}" class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 hover:border-blue-500/40 transition-all block">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${
                ch.subjectId === 'physics' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                (ch.subjectId === 'chemistry' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400')
              }">
                ${ch.subjectName}
              </span>
              <span class="text-xs text-slate-400">${ch.topicCount} Topics</span>
            </div>
            <h3 class="font-bold text-slate-900 dark:text-white text-sm">
              ${ch.title}
            </h3>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}
