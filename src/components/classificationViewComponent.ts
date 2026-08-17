import { CLASSIFICATIONS, CHAPTERS, SUBJECTS } from '../data/neetData'

export function renderClassificationView(classificationId: string): string {
  const classification = CLASSIFICATIONS[classificationId];
  if (!classification) {
    return `<div class="p-8 text-center text-slate-500">Classification not found. <a href="#home" class="text-blue-500 underline">Return Home</a></div>`;
  }

  const subject = SUBJECTS.find(s => s.id === classification.subjectId);
  const classLabel = classification.classLevel === 'class-11' ? 'Class 11' : 'Class 12'
  const chapters = classification.chapterIds.map(id => CHAPTERS[id]).filter(Boolean);

  return `
    <div class="space-y-8 pb-12">
      
      <!-- Classification Header -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
        <div class="flex flex-wrap items-center gap-2">
          ${subject ? `
            <span class="px-3 py-1 rounded-full text-xs font-bold border ${subject.badgeColor}">
              ${subject.name}
            </span>
          ` : ''}
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            ${classLabel}
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
            ${chapters.length} Chapters
          </span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
          ${classification.title}
        </h1>
        <p class="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
          ${classification.description}
        </p>
      </div>

      <!-- Chapters List -->
      <div class="space-y-4">
        <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
          Chapters in ${classification.title}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${chapters.map((ch, index) => `
            <a href="#chapter/${ch.id}" class="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start justify-between gap-4">
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <span class="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    ${ch.chapterNumber || index + 1}
                  </span>
                  <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Chapter ${ch.chapterNumber || index + 1}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  ${ch.title}
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  ${ch.description}
                </p>
                <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-2 font-medium">
                  <span>📌 ${ch.topicIds.length} Topics</span>
                  <span>•</span>
                  <span>⏱️ ~${ch.estimatedHours} hrs study</span>
                </div>
              </div>

              <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center font-bold text-lg transition-all shrink-0 mt-1">
                →
              </div>
            </a>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}
