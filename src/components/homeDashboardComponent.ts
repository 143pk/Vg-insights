import { SUBJECTS, TOPICS, CHAPTERS } from '../data/neetData'
import { StorageService } from '../services/storageService'
import { WeaknessDoctorService } from '../services/weaknessDoctorService'

export function renderHomeDashboard(): string {
  const progress = StorageService.getProgress();
  const lastVisitedTopic = progress.lastVisitedTopicId ? TOPICS[progress.lastVisitedTopicId] : null;
  const lastVisitedChapter = lastVisitedTopic ? CHAPTERS[lastVisitedTopic.chapterId] : null;
  const metrics = WeaknessDoctorService.getDashboardMetrics();

  return `
    <div class="space-y-8 pb-12">
      
      <!-- Hero Banner -->
      <section class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-slate-800">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/10 to-transparent pointer-events-none"></div>
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            NEET UG Digital Repository
          </div>
          <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            NEET LIBRARY
          </h1>
          <p class="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
            “Learn every NEET concept, one topic at a time.”
          </p>

          <div class="pt-2 flex flex-wrap items-center gap-3">
            <button id="hero-search-trigger" class="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              Search Concepts & Formulas
            </button>
            <a href="#weakness-doctor" class="px-5 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-medium shadow-lg shadow-rose-600/30 transition-all text-sm flex items-center gap-2">
              <span>🩺</span> AI Weakness Doctor
            </a>
            <a href="#subject/physics" class="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/10 transition-colors text-sm">
              Explore Physics ⚡
            </a>
          </div>
        </div>
      </section>

      <!-- AI Weakness Doctor Status Pill Banner -->
      <div class="p-5 rounded-3xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-indigo-950/40 border border-rose-500/20 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 text-rose-400 flex items-center justify-center font-bold text-2xl shrink-0">
            🩺
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-rose-400 uppercase tracking-wider">
                AI Weakness Doctor
              </span>
              <span class="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 text-[10px] font-bold border border-rose-500/20">
                Live Precision Engine
              </span>
            </div>
            <h3 class="text-base font-bold text-slate-900 dark:text-slate-100">
              ${metrics.nextTopicToFix ? `Fix Weak Area: ${metrics.nextTopicToFix.topicTitle}` : (metrics.totalQuestionsAttempted < 3 ? 'Unlock your personalized NEET weakness analysis' : 'Performance is steady across all tested topics')}
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              ${metrics.totalQuestionsAttempted} Questions Tracked • ${metrics.weakTopicsCount} Weak Areas • ${metrics.masteredTopicsCount} Mastered
            </p>
          </div>
        </div>
        
        <div class="flex items-center gap-2 w-full sm:w-auto">
          <a href="#weakness-doctor" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all text-center shrink-0 shadow-md shadow-rose-600/20">
            Open Weakness Doctor →
          </a>
        </div>
      </div>

      <!-- Continue Learning Banner (if user has studied a topic) -->
      ${lastVisitedTopic && lastVisitedChapter ? `
        <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-transparent border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md shadow-blue-500/20">
              📖
            </div>
            <div>
              <span class="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Resume Learning
              </span>
              <h3 class="text-base font-bold text-slate-900 dark:text-slate-100">
                ${lastVisitedTopic.title}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                Chapter: ${lastVisitedChapter.title} • ${lastVisitedTopic.estimatedReadTimeMinutes} min read
              </p>
            </div>
          </div>
          <a href="#topic/${lastVisitedTopic.id}" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors text-center shrink-0">
            Continue →
          </a>
        </div>
      ` : ''}

      <!-- Quick Action Grid -->
      <section class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        
        <button id="quick-action-search" class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg transition-all text-left group">
          <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            🔍
          </div>
          <div class="font-bold text-sm text-slate-900 dark:text-slate-100">Search</div>
          <div class="text-xs text-slate-500 dark:text-slate-400">Find topics & formulas</div>
        </button>

        <button id="quick-action-bookmarks" class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:shadow-lg transition-all text-left group">
          <div class="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            ⭐
          </div>
          <div class="font-bold text-sm text-slate-900 dark:text-slate-100">Bookmarks</div>
          <div class="text-xs text-slate-500 dark:text-slate-400">${progress.bookmarkedTopics.length} topics saved</div>
        </button>

        <a href="#subject/physics" class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-lg transition-all text-left group">
          <div class="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            📚
          </div>
          <div class="font-bold text-sm text-slate-900 dark:text-slate-100">My Library</div>
          <div class="text-xs text-slate-500 dark:text-slate-400">Browse hierarchy</div>
        </a>

        <button id="quick-action-progress" class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-lg transition-all text-left group">
          <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            📊
          </div>
          <div class="font-bold text-sm text-slate-900 dark:text-slate-100">Progress</div>
          <div class="text-xs text-slate-500 dark:text-slate-400">${progress.completedTopics.length} topics completed</div>
        </button>

      </section>

      <!-- Three Subject Cards -->
      <section class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
            NEET UG Subjects
          </h2>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Class 11 & Class 12 Syllabus
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${SUBJECTS.map(subject => renderSubjectCard(subject)).join('')}
        </div>
      </section>

    </div>
  `;
}

function renderSubjectCard(subject: typeof SUBJECTS[0]): string {
  // Check if user has last visited topic in this subject
  const lastVisitedTopicId = StorageService.getProgress().lastVisitedTopicId;
  const continuePath = `#subject/${subject.id}`;

  return `
    <div class="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      <!-- Card Header Accent -->
      <div class="p-6 space-y-4">
        
        <div class="flex items-center justify-between">
          <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
            ${subject.icon}
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold border ${subject.badgeColor}">
            NCERT Aligned
          </span>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            ${subject.name}
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
            ${subject.tagline}
          </p>
        </div>

        <!-- Class Quick Badges -->
        <div class="grid grid-cols-2 gap-2 pt-2">
          
          <a href="#class/${subject.id}/class-11" class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/60 dark:border-slate-700/60 transition-colors text-left group/class">
            <div class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover/class:text-blue-600 dark:group-hover/class:text-blue-400">
              Class 11
            </div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400">
              ${subject.class11ChapterCount} Chapters
            </div>
          </a>

          <a href="#class/${subject.id}/class-12" class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/60 dark:border-slate-700/60 transition-colors text-left group/class">
            <div class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover/class:text-blue-600 dark:group-hover/class:text-blue-400">
              Class 12
            </div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400">
              ${subject.class12ChapterCount} Chapters
            </div>
          </a>

        </div>

      </div>

      <!-- Card Footer -->
      <div class="p-6 pt-0 space-y-3">
        <div class="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/60 pt-3">
          <span>Total Topics</span>
          <span class="text-slate-900 dark:text-slate-100 font-bold">${subject.totalTopicsCount}+ Topics</span>
        </div>

        <a href="${continuePath}" class="w-full py-3 px-4 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-blue-600 dark:hover:bg-blue-500 text-white dark:text-slate-900 dark:hover:text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg">
          <span>Continue Learning</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
          </svg>
        </a>
      </div>

    </div>
  `;
}
