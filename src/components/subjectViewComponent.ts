import { SUBJECTS, CLASSIFICATIONS } from '../data/neetData'

export function renderSubjectView(subjectId: string): string {
  const subject = SUBJECTS.find(s => s.id === subjectId);
  if (!subject) {
    return `<div class="p-8 text-center text-slate-500">Subject not found. <a href="#home" class="text-blue-500 underline">Return Home</a></div>`;
  }

  const class11Classifications = subject.classifications11
    .map(id => CLASSIFICATIONS[id])
    .filter(Boolean);

  const class12Classifications = subject.classifications12
    .map(id => CLASSIFICATIONS[id])
    .filter(Boolean);

  return `
    <div class="space-y-8 pb-12">
      
      <!-- Subject Header -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div class="w-20 h-20 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-4xl shrink-0">
          ${subject.icon}
        </div>
        <div class="space-y-2">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${subject.badgeColor}">
            Subject Library
          </div>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            ${subject.name}
          </h1>
          <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            ${subject.tagline}
          </p>
        </div>
      </div>

      <!-- Class Selection -->
      <div class="space-y-4">
        <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
          Select Academic Class
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <!-- Class 11 Card -->
          <a href="#class/${subject.id}/class-11" class="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-between">
            <div class="space-y-2">
              <span class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold">
                Class 11 NCERT
              </span>
              <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Class 11 ${subject.name}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ${subject.class11ChapterCount} Chapters • ${class11Classifications.length} Major Classifications
              </p>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xl group-hover:translate-x-1 transition-transform">
              →
            </div>
          </a>

          <!-- Class 12 Card -->
          <a href="#class/${subject.id}/class-12" class="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-between">
            <div class="space-y-2">
              <span class="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 text-xs font-bold">
                Class 12 NCERT
              </span>
              <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Class 12 ${subject.name}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ${subject.class12ChapterCount} Chapters • ${class12Classifications.length} Major Classifications
              </p>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xl group-hover:translate-x-1 transition-transform">
              →
            </div>
          </a>

        </div>
      </div>

      <!-- Classifications Breakdown -->
      <div class="space-y-6 pt-4">
        
        <!-- Class 11 Section -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            Class 11 Classifications
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${class11Classifications.map(c => renderClassificationCard(c)).join('')}
          </div>
        </div>

        <!-- Class 12 Section -->
        <div class="space-y-4 pt-4">
          <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
            Class 12 Classifications
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${class12Classifications.map(c => renderClassificationCard(c)).join('')}
          </div>
        </div>

      </div>

    </div>
  `;
}

function renderClassificationCard(c: typeof CLASSIFICATIONS[string]): string {
  return `
    <a href="#classification/${c.id}" class="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between">
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            ${c.classLevel === 'class-11' ? 'Class 11' : 'Class 12'}
          </span>
          <span class="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded-md">
            ${c.chapterIds.length} Chapters
          </span>
        </div>
        <h4 class="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          ${c.title}
        </h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
          ${c.description}
        </p>
      </div>
      <div class="pt-4 flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
        View Chapters →
      </div>
    </a>
  `;
}
