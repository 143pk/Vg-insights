import { WeaknessDoctorService } from '../services/weaknessDoctorService';
import { MistakeBookService } from '../services/mistakeBookService';
import { StorageService } from '../services/storageService';
import { TOPIC_DETAILS } from '../data/topicDetails';

export function renderWeakTopicPracticeView(): string {
  const critical = WeaknessDoctorService.getCriticalWeaknesses(20);
  const improving = WeaknessDoctorService.getImprovingTopics(20);
  const combined = [...critical, ...improving];

  return `
    <div class="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-16">
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-900 via-red-950 to-slate-900 text-white shadow-xl border border-rose-800/40 space-y-2">
        <span class="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider border border-rose-400/30">
          🔥 Target Weaknesses
        </span>
        <h1 class="text-2xl sm:text-3xl font-black text-white">
          Weak Topic Practice Drills
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 max-w-2xl">
          High-intensity 5-10 question drills focused specifically on your identified weak chapters and topics.
        </p>
      </div>

      ${combined.length > 0 ? `
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          ${combined.map(t => `
            <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between hover:border-rose-500/40 transition-all">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${
                    t.subjectId === 'physics' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                    (t.subjectId === 'chemistry' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400')
                  }">
                    ${t.subjectName}
                  </span>
                  <span class="text-xs font-black ${t.status === 'WEAK' ? 'text-rose-600 dark:text-rose-400' : 'text-amber-600 dark:text-amber-400'}">
                    ${t.accuracy}% Acc
                  </span>
                </div>
                <h3 class="font-bold text-slate-900 dark:text-white text-sm">
                  ${t.topicTitle}
                </h3>
                <p class="text-xs text-slate-400">
                  Chapter: ${t.chapterTitle}
                </p>
              </div>

              <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span class="text-[11px] text-slate-500">${t.totalAttempts} Attempts</span>
                <a href="#weakness-doctor/practice/${t.topicId}" class="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-colors">
                  Start Drill →
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <span class="text-4xl block">🎉</span>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">No Weak Topics Found!</h3>
          <p class="text-xs text-slate-500 max-w-sm mx-auto">
            Take a 5-minute Diagnostic Assessment or complete the Weekly Mock to identify target areas.
          </p>
          <a href="#diagnostic-quiz" class="px-5 py-2.5 rounded-2xl bg-blue-600 text-white font-bold text-xs inline-block">
            Take 5-Min Diagnostic Assessment →
          </a>
        </div>
      `}
    </div>
  `;
}

export function renderBookmarkedQuestionsView(): string {
  const bookmarks = StorageService.getBookmarks();

  return `
    <div class="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-16">
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-900 via-yellow-950 to-slate-900 text-white shadow-xl border border-amber-800/40 space-y-2">
        <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
          ⭐ Saved Library
        </span>
        <h1 class="text-2xl sm:text-3xl font-black text-white">
          Bookmarked Questions (${bookmarks.length})
        </h1>
        <p class="text-xs sm:text-sm text-slate-300 max-w-2xl">
          All high-yield questions, tricky formulas, and topics you have starred for quick revision.
        </p>
      </div>

      ${bookmarks.length > 0 ? `
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          ${bookmarks.map(b => `
            <a href="#topic/${b.topicId}" class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 hover:border-amber-500/40 transition-all block">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase text-amber-500">${b.type}</span>
                <span class="text-xs text-slate-400">${new Date(b.timestamp).toLocaleDateString()}</span>
              </div>
              <h3 class="font-bold text-slate-900 dark:text-white text-sm">
                ${b.title}
              </h3>
              <p class="text-xs text-slate-400">
                ${b.subtitle}
              </p>
            </a>
          `).join('')}
        </div>
      ` : `
        <div class="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <span class="text-4xl block">⭐</span>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">No Bookmarked Questions Yet</h3>
          <p class="text-xs text-slate-500 max-w-sm mx-auto">
            Click the bookmark icon on any question or topic note to save it here for rapid review.
          </p>
          <a href="#home" class="px-5 py-2.5 rounded-2xl bg-blue-600 text-white font-bold text-xs inline-block">
            Browse Subjects →
          </a>
        </div>
      `}
    </div>
  `;
}
