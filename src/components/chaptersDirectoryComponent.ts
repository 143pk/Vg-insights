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
    <div class="max-w-5xl mx-auto space-y-6 pb-16">
      
      <!-- White Academic Header -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800">
          <span>📖</span> Complete Syllabus Directory
        </div>
        <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          All NEET UG Chapters (${chaptersList.length})
        </h1>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
          Class 11 and 12 chapter modules covering Physics, Chemistry, and Biology with high-yield focus topics.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${chaptersList.map(ch => `
          <a href="#chapter/${ch.id}" class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-2 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-all block">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${
                ch.subjectId === 'physics' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800' :
                (ch.subjectId === 'chemistry' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' : 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border border-purple-200 dark:border-purple-800')
              }">
                ${ch.subjectName}
              </span>
              <span class="text-xs text-slate-400 font-medium">${ch.topicCount} Topics</span>
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
