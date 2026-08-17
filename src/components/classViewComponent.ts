import { SUBJECTS, CLASSIFICATIONS } from '../data/neetData'

export function renderClassView(subjectId: string, classLevel: 'class-11' | 'class-12'): string {
  const subject = SUBJECTS.find(s => s.id === subjectId);
  const classLabel = classLevel === 'class-11' ? 'Class 11' : 'Class 12'

  if (!subject) {
    return `<div class="p-8 text-center text-slate-500">Subject not found.</div>`;
  }

  const classificationIds = classLevel === 'class-11' ? subject.classifications11 : subject.classifications12;
  const classifications = classificationIds.map(id => CLASSIFICATIONS[id]).filter(Boolean);

  return `
    <div class="space-y-8 pb-12">
      
      <!-- Class Header -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-bold border ${subject.badgeColor}">
              ${subject.name}
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              ${classLabel} Syllabus
            </span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            ${classLabel} ${subject.name}
          </h1>
          <p class="text-slate-600 dark:text-slate-400 text-sm">
            Select a subject classification to explore official chapters and topic-wise NCERT study notes.
          </p>
        </div>
        <div class="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-3xl shrink-0">
          ${subject.icon}
        </div>
      </div>

      <!-- Classifications List -->
      <div class="space-y-4">
        <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
          Subject Classifications
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${classifications.map(c => `
            <a href="#classification/${c.id}" class="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                  📁
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  ${c.title}
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">
                  ${c.description}
                </p>
              </div>

              <div class="pt-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 mt-4 text-xs">
                <span class="font-semibold text-slate-400">
                  ${c.chapterIds.length} Chapters
                </span>
                <span class="font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}
