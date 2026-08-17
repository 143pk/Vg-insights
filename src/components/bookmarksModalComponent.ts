import { StorageService } from '../services/storageService'
import { TOPICS, CHAPTERS, SUBJECTS, CLASSIFICATIONS } from '../data/neetData'

export function renderBookmarksModal(): string {
  const progress = StorageService.getProgress();
  const bookmarkedIds = progress.bookmarkedTopics;

  const bookmarkedTopics = bookmarkedIds.map(id => TOPICS[id]).filter(Boolean);

  return `
    <div id="modal-bookmarks" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div class="w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              ⭐
            </div>
            <div>
              <h3 class="text-base font-bold text-slate-900 dark:text-slate-100">Saved Bookmarks</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">${bookmarkedTopics.length} topics saved for revision</p>
            </div>
          </div>
          <button id="btn-close-bookmarks" class="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
            ✕
          </button>
        </div>

        <!-- Content List -->
        <div class="p-4 overflow-y-auto space-y-2">
          ${bookmarkedTopics.length === 0 ? `
            <div class="p-10 text-center space-y-2">
              <span class="text-4xl block">⭐</span>
              <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">No Bookmarks Saved Yet</p>
              <p class="text-xs text-slate-400 max-w-xs mx-auto">Click the ☆ Bookmark button on any topic page to save it here for fast quick revision.</p>
            </div>
          ` : bookmarkedTopics.map(t => {
            const chapter = CHAPTERS[t.chapterId];
            const classification = chapter ? CLASSIFICATIONS[chapter.classificationId] : undefined;
            const subject = classification ? SUBJECTS.find(s => s.id === classification.subjectId) : undefined;

            return `
              <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-3">
                <a href="#topic/${t.id}" class="space-y-1 block flex-1 hover:opacity-80 transition-opacity">
                  <span class="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">
                    ${subject?.name || ''} • ${chapter?.title || ''}
                  </span>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100">${t.title}</h4>
                </a>
                <a href="#topic/${t.id}" class="px-3 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shrink-0">
                  Read →
                </a>
              </div>
            `;
          }).join('')}
        </div>

      </div>
    </div>
  `;
}
