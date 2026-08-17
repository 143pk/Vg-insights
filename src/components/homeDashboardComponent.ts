import { SUBJECTS, TOPICS, CHAPTERS } from '../data/neetData'
import { StorageService } from '../services/storageService'
import { WeaknessDoctorService } from '../services/weaknessDoctorService'
import { WeeklyMockService } from '../services/weeklyMockService'
import { MistakeBookService } from '../services/mistakeBookService'

export function renderHomeDashboard(): string {
  const progress = StorageService.getProgress();
  const lastVisitedTopic = progress.lastVisitedTopicId ? TOPICS[progress.lastVisitedTopicId] : null;
  const lastVisitedChapter = lastVisitedTopic ? CHAPTERS[lastVisitedTopic.chapterId] : null;
  const metrics = WeaknessDoctorService.getDashboardMetrics();
  const personalBests = WeeklyMockService.getPersonalBests();
  const mistakeState = MistakeBookService.getState();
  const { weekNumber } = WeeklyMockService.getCurrentYearAndWeek();

  const totalTopics = Object.keys(TOPICS).length;
  const completedTopicsCount = progress.completedTopics.length;
  const pyqAttempts = Object.values(progress.pyqAttempts);
  const totalPYQs = pyqAttempts.length;
  const correctPYQs = pyqAttempts.filter(a => a.isCorrect).length;
  const pyqAccuracy = totalPYQs > 0 ? Math.round((correctPYQs / totalPYQs) * 100) : 0;

  return `
    <div class="space-y-8 pb-16">
      
      <!-- Academic Platform Hero Banner -->
      <section class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm transition-all relative overflow-hidden">
        <div class="relative z-10 max-w-4xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            NEET UG Academic Platform • Class 11 & 12
          </div>
          
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Master every NEET concept, topic by topic.
          </h1>
          
          <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
            Structured NCERT notes, chapter-wise formulas, verified past year questions, deterministic weakness diagnosis, and full-length weekly simulations.
          </p>

          <div class="pt-2 flex flex-wrap items-center gap-3">
            <a href="#weekly-mock" class="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-sm transition-all flex items-center gap-2 text-sm">
              <span>📝</span> Start Week ${weekNumber} Mock
            </a>
            <a href="#weakness-doctor" class="px-5 py-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 text-rose-700 dark:text-rose-300 font-bold border border-rose-200 dark:border-rose-800 transition-all text-sm flex items-center gap-2">
              <span>🩺</span> AI Weakness Doctor
            </a>
            <button id="hero-search-trigger" class="px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 transition-colors text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              Search Library
            </button>
          </div>
        </div>
      </section>

      <!-- Key Performance Metrics Grid -->
      <section class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        
        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-1 hover-card-lift animate-card-enter stagger-1">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span>Weekly Streak</span>
            <span>🔥</span>
          </div>
          <div class="text-2xl font-black text-slate-900 dark:text-white">
            ${personalBests.weeklyStreak} <span class="text-xs font-normal text-slate-500">weeks</span>
          </div>
          <p class="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Regular mock taker</p>
        </div>

        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-1 hover-card-lift animate-card-enter stagger-2">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span>Topics Done</span>
            <span>📖</span>
          </div>
          <div class="text-2xl font-black text-slate-900 dark:text-white">
            ${completedTopicsCount} <span class="text-xs font-normal text-slate-500">/ ${totalTopics}</span>
          </div>
          <div class="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1">
            <div class="h-full bg-blue-600 rounded-full transition-all duration-500" style="width: ${Math.round((completedTopicsCount / (totalTopics || 1)) * 100)}%"></div>
          </div>
        </div>

        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-1 hover-card-lift animate-card-enter stagger-3">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span>PYQ Accuracy</span>
            <span>🎯</span>
          </div>
          <div class="text-2xl font-black text-slate-900 dark:text-white">
            ${pyqAccuracy}%
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400">${correctPYQs} / ${totalPYQs} attempted</p>
        </div>

        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-1 hover-card-lift animate-card-enter stagger-4">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span>Mistakes Logged</span>
            <span>📕</span>
          </div>
          <div class="text-2xl font-black text-slate-900 dark:text-white">
            ${mistakeState.totalMistakesCount}
          </div>
          <p class="text-[11px] text-amber-600 dark:text-amber-400 font-medium">${mistakeState.repeatedMistakesCount} repeated errors</p>
        </div>

      </section>

      <!-- AI Weakness Doctor Status Card -->
      <section class="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover-card-lift animate-card-enter stagger-5">
        <div class="flex items-start sm:items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-2xl shrink-0">
            🩺
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                AI Weakness Doctor
              </span>
              <span class="px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-[10px] font-bold border border-rose-200 dark:border-rose-800">
                Diagnostic Engine
              </span>
            </div>
            <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5">
              ${metrics.nextTopicToFix ? `Priority Fix: ${metrics.nextTopicToFix.topicTitle}` : (metrics.totalQuestionsAttempted < 3 ? 'Complete 3+ questions to generate your diagnostic profile' : 'Consistent performance across evaluated topics')}
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              ${metrics.totalQuestionsAttempted} Questions Tracked • ${metrics.weakTopicsCount} Weak Topics • ${metrics.masteredTopicsCount} Mastered
            </p>
          </div>
        </div>
        
        <div class="flex items-center gap-2 w-full sm:w-auto">
          <a href="#weakness-doctor" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all text-center shrink-0 shadow-sm">
            Open AI Doctor →
          </a>
        </div>
      </section>

      <!-- Continue Learning Banner (if user has studied a topic) -->
      ${lastVisitedTopic && lastVisitedChapter ? `
        <div class="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3.5">
            <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
              📖
            </div>
            <div>
              <span class="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                Resume Learning
              </span>
              <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                ${lastVisitedTopic.title}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                Chapter: ${lastVisitedChapter.title} • ${lastVisitedTopic.estimatedReadTimeMinutes} min read
              </p>
            </div>
          </div>
          <a href="#topic/${lastVisitedTopic.id}" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors text-center shrink-0">
            Continue Reading →
          </a>
        </div>
      ` : ''}

      <!-- NEET UG Subjects -->
      <section class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Core Subjects
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Comprehensive Class 11 and Class 12 NCERT curriculum
            </p>
          </div>
          <a href="#chapters" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
            View All Chapters →
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          ${SUBJECTS.map(subject => renderSubjectCard(subject)).join('')}
        </div>
      </section>

      <!-- Essential Study Modules Grid -->
      <section class="space-y-4">
        <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
          Preparation Modules
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <a href="#weekly-mock" class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/50 shadow-sm transition-all group block space-y-2 hover-card-lift animate-card-enter stagger-1">
            <div class="flex items-center justify-between">
              <span class="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg">
                📝
              </span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">
                720 Marks
              </span>
            </div>
            <h3 class="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Weekly NEET Mock
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Full-length timed exam simulation with automatic score breakdown and solution archive.
            </p>
          </a>

          <a href="#mistake-book" class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-amber-500/50 shadow-sm transition-all group block space-y-2 hover-card-lift animate-card-enter stagger-2">
            <div class="flex items-center justify-between">
              <span class="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center text-lg">
                📕
              </span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">
                ${mistakeState.totalMistakesCount} Logged
              </span>
            </div>
            <h3 class="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              NEET Mistake Book
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Auto-logged erroneous questions with student choice, correct answer, and concept diagnosis.
            </p>
          </a>

          <a href="#pyqs" class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/50 shadow-sm transition-all group block space-y-2 hover-card-lift animate-card-enter stagger-3">
            <div class="flex items-center justify-between">
              <span class="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
                🏆
              </span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                Past 10+ Years
              </span>
            </div>
            <h3 class="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              PYQs Explorer
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Filtered topic-wise past year questions with complete step-by-step KaTeX explanations.
            </p>
          </a>

          <a href="#chapter-tests" class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/50 shadow-sm transition-all group block space-y-2 hover-card-lift animate-card-enter stagger-4">
            <div class="flex items-center justify-between">
              <span class="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg">
                📑
              </span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300">
                Chapter Tests
              </span>
            </div>
            <h3 class="font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Chapter-Wise Test Series
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Targeted 20-30 question chapter tests to solidify individual subject units.
            </p>
          </a>

          <a href="#revision" class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-purple-500/50 shadow-sm transition-all group block space-y-2 hover-card-lift animate-card-enter stagger-5">
            <div class="flex items-center justify-between">
              <span class="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center text-lg">
                ⚡
              </span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300">
                High Yield
              </span>
            </div>
            <h3 class="font-bold text-base text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Revision Sheets & Formulas
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Rapid-fire formula cards and fundamental NCERT principles for last-minute review.
            </p>
          </a>

          <a href="#custom-test" class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/50 shadow-sm transition-all group block space-y-2 hover-card-lift animate-card-enter stagger-6">
            <div class="flex items-center justify-between">
              <span class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-lg">
                ⚙️
              </span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                Configurable
              </span>
            </div>
            <h3 class="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Custom Test Builder
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Configure question volume, subject focus, and timer for customized self-assessment.
            </p>
          </a>

        </div>
      </section>

    </div>
  `;
}

function renderSubjectCard(subject: typeof SUBJECTS[0]): string {
  const continuePath = `#subject/${subject.id}`;

  return `
    <div class="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden hover-card-lift animate-card-enter">
      
      <div class="p-6 space-y-4">
        
        <div class="flex items-center justify-between">
          <div class="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
            ${subject.icon}
          </div>
          <span class="px-2.5 py-1 rounded-full text-[11px] font-bold border ${subject.badgeColor}">
            NCERT Aligned
          </span>
        </div>

        <div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            ${subject.name}
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
            ${subject.tagline}
          </p>
        </div>

        <!-- Class Quick Badges -->
        <div class="grid grid-cols-2 gap-2 pt-1">
          
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
        <div class="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
          <span>Total Syllabus</span>
          <span class="text-slate-900 dark:text-slate-100 font-bold">${subject.totalTopicsCount}+ Topics</span>
        </div>

        <a href="${continuePath}" class="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2">
          <span>Explore ${subject.name}</span>
          <span>→</span>
        </a>
      </div>

    </div>
  `;
}
