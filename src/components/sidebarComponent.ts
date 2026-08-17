import { WeeklyMockService } from '../services/weeklyMockService';
import { MistakeBookService } from '../services/mistakeBookService';
import { StorageService } from '../services/storageService';

export function renderSidebar(currentPath: string = '#weekly-mock'): string {
  const { weekNumber } = WeeklyMockService.getCurrentYearAndWeek();
  const mistakeState = MistakeBookService.getState();
  const personalBests = WeeklyMockService.getPersonalBests();
  const bookmarks = StorageService.getBookmarks();
  const unreadMistakes = mistakeState.totalMistakesCount - mistakeState.resolvedMistakesCount;

  const cleanPath = currentPath.split('/')[0] || '#home';

  const menuSections = [
    {
      title: '📚 Study',
      items: [
        { label: 'Subjects', path: '#home', icon: '🏛️', badge: '' },
        { label: 'Chapters', path: '#chapters', icon: '📖', badge: '' },
        { label: 'PYQs Explorer', path: '#pyqs', icon: '🏆', badge: '10+ Yrs' },
        { label: 'Revision Sheets', path: '#revision', icon: '⚡', badge: 'High Yield' },
      ]
    },
    {
      title: '📝 Tests',
      items: [
        { label: 'Weekly NEET Mock', path: '#weekly-mock', icon: '📝', badge: `W${weekNumber} • LIVE`, badgeColor: 'bg-rose-500 text-white animate-pulse' },
        { label: 'Chapter Tests', path: '#chapter-tests', icon: '📑', badge: '' },
        { label: 'Custom Test', path: '#custom-test', icon: '⚙️', badge: '' },
        { label: 'Test History', path: '#test-history', icon: '📊', badge: `${personalBests.totalTestsCompleted}` },
      ]
    },
    {
      title: '🧠 Performance',
      items: [
        { label: 'AI Weakness Doctor', path: '#weakness-doctor', icon: '🩺', badge: 'AI Diagnostics', badgeColor: 'bg-rose-500/20 text-rose-600 dark:text-rose-400 font-bold' },
        { label: 'My Progress', path: '#my-progress', icon: '📈', badge: '' },
        { label: 'Mistake Book', path: '#mistake-book', icon: '📕', badge: unreadMistakes > 0 ? `${unreadMistakes}` : '', badgeColor: 'bg-amber-500 text-white' },
        { label: 'Strengths & Weaknesses', path: '#strengths-weaknesses', icon: '🎯', badge: '' },
      ]
    },
    {
      title: '🎯 Practice',
      items: [
        { label: 'Weak Topic Practice', path: '#weak-topic-practice', icon: '🔥', badge: '' },
        { label: 'Bookmarked Questions', path: '#bookmarked-questions', icon: '⭐', badge: bookmarks.length > 0 ? `${bookmarks.length}` : '' },
        { label: 'Incorrect Questions', path: '#incorrect-questions', icon: '❌', badge: '' },
      ]
    }
  ];

  return `
    <aside id="app-sidebar" class="w-64 shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between hidden lg:flex h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <div class="p-4 space-y-6">
        
        <!-- Weekly Streak & Status Pill -->
        <a href="#weekly-mock" class="p-3 rounded-2xl bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 dark:from-blue-500/15 dark:to-indigo-500/15 border border-blue-500/20 block hover:border-blue-500/40 transition-all group">
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Week ${weekNumber} Mock</span>
            <span class="text-xs font-extrabold flex items-center gap-1 text-amber-600 dark:text-amber-400">
              🔥 ${personalBests.weeklyStreak} Wk Streak
            </span>
          </div>
          <p class="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Take Weekly NEET Mock →
          </p>
        </a>

        <!-- Navigation Sections -->
        ${menuSections.map(section => `
          <div class="space-y-1">
            <h3 class="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              ${section.title}
            </h3>
            <div class="space-y-0.5 mt-1">
              ${section.items.map(item => {
                const isActive = cleanPath === item.path || (item.path === '#home' && cleanPath === '#');
                return `
                  <a href="${item.path}" class="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                  }">
                    <span class="flex items-center gap-2.5 truncate">
                      <span class="text-sm">${item.icon}</span>
                      <span class="truncate">${item.label}</span>
                    </span>
                    ${item.badge ? `
                      <span class="px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : (item.badgeColor || 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400')
                      }">
                        ${item.badge}
                      </span>
                    ` : ''}
                  </a>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}

      </div>

      <!-- Quick Footer Info -->
      <div class="p-4 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50">
        <div class="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
          <span>NEET 720 Simulator</span>
          <span class="text-emerald-600 dark:text-emerald-400 font-bold">100% Offline</span>
        </div>
      </div>
    </aside>

    <!-- Mobile Navigation Drawer (Hidden by default, toggled via menu button) -->
    <div id="mobile-sidebar-drawer" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden lg:hidden">
      <div class="w-72 max-w-[85vw] h-full bg-white dark:bg-slate-900 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div class="p-4 space-y-6">
          <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">VG</span>
              <span class="font-bold text-sm text-slate-900 dark:text-white">VG NEET Library</span>
            </div>
            <button id="btn-close-mobile-sidebar" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              ✕
            </button>
          </div>

          <!-- Weekly Pill -->
          <a href="#weekly-mock" class="mobile-sidebar-link p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 block text-xs">
            <div class="flex items-center justify-between">
              <span class="font-bold text-blue-600 dark:text-blue-400">Week ${weekNumber} Mock</span>
              <span class="font-bold text-amber-500">🔥 ${personalBests.weeklyStreak} Wks</span>
            </div>
            <span class="text-slate-600 dark:text-slate-300 font-medium block mt-1">Start NEET Simulation →</span>
          </a>

          <!-- Menu items -->
          ${menuSections.map(section => `
            <div class="space-y-1">
              <h3 class="px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                ${section.title}
              </h3>
              <div class="space-y-0.5 mt-1">
                ${section.items.map(item => `
                  <a href="${item.path}" class="mobile-sidebar-link flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <span class="flex items-center gap-2">
                      <span>${item.icon}</span>
                      <span>${item.label}</span>
                    </span>
                    ${item.badge ? `
                      <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${item.badgeColor || 'bg-slate-100 dark:bg-slate-800 text-slate-500'}">
                        ${item.badge}
                      </span>
                    ` : ''}
                  </a>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
