import { WeeklyMockService } from '../services/weeklyMockService';
import { MistakeBookService } from '../services/mistakeBookService';
import { StorageService } from '../services/storageService';
import { renderBrandLogo } from './brandLogoComponent';

export function renderSidebar(currentPath: string = '#home'): string {
  const { weekNumber } = WeeklyMockService.getCurrentYearAndWeek();
  const mistakeState = MistakeBookService.getState();
  const personalBests = WeeklyMockService.getPersonalBests();
  const bookmarks = StorageService.getBookmarks();
  const unreadMistakes = mistakeState.totalMistakesCount - mistakeState.resolvedMistakesCount;

  const cleanPath = currentPath.split('/')[0] || '#home';

  const drawerSections = [
    {
      title: 'LEARN',
      items: [
        { label: 'Physics', path: '#subject/physics', icon: '⚛️' },
        { label: 'Chemistry', path: '#subject/chemistry', icon: '🧪' },
        { label: 'Biology', path: '#subject/biology', icon: '🧬' },
        { label: 'NCERT Library', path: '#home', icon: '📖' },
      ]
    },
    {
      title: 'PRACTICE',
      items: [
        { label: 'PYQ Explorer', path: '#pyqs', icon: '🏆', badge: '10+ Yrs' },
        { label: 'Weekly Mock', path: '#weekly-mock', icon: '📝', badge: `W${weekNumber}`, badgeColor: 'bg-blue-600 text-white' },
        { label: 'Active Practice', path: '#custom-test', icon: '🎯' },
      ]
    },
    {
      title: 'ANALYZE',
      items: [
        { label: 'AI Weakness Doctor', path: '#weakness-doctor', icon: '🩺', badge: 'AI Diagnostics', badgeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400' },
        { label: 'Progress Radar', path: '#my-progress', icon: '📈' },
        { label: 'Mistake Log', path: '#mistake-book', icon: '📕', badge: unreadMistakes > 0 ? `${unreadMistakes}` : '', badgeColor: 'bg-amber-500 text-white' },
      ]
    },
    {
      title: 'TOOLS',
      items: [
        { label: 'Revision Sheets', path: '#revision', icon: '⚡', badge: 'High Yield' },
        { label: 'Study Stopwatch', path: '#test-history', icon: '⏱️' },
      ]
    }
  ];

  return `
    <!-- DESKTOP SIDEBAR: Clean, Minimal, Modern Layout -->
    <aside id="app-sidebar" class="w-60 shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hidden lg:flex h-[calc(100vh-4.25rem)] sticky top-[4.25rem] overflow-y-auto">
      <div class="p-3.5 space-y-5">
        
        <!-- Live Weekly Mock Card -->
        <a href="#weekly-mock" class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 block hover:border-blue-500/50 transition-all group">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Week ${weekNumber} Mock</span>
            <span class="text-[11px] font-bold text-amber-600 dark:text-amber-400">
              🔥 ${personalBests.weeklyStreak} Wks
            </span>
          </div>
          <p class="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between">
            <span>Take 720 Simulation</span>
            <span>→</span>
          </p>
        </a>

        <!-- Desktop Navigation Sections -->
        ${drawerSections.map(section => `
          <div class="space-y-1">
            <h3 class="px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              ${section.title}
            </h3>
            <div class="space-y-0.5 mt-1">
              ${section.items.map(item => {
                const isActive = cleanPath === item.path || (item.path === '#home' && (cleanPath === '#' || cleanPath === '#home'));
                return `
                  <a href="${item.path}" class="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }">
                    <span class="flex items-center gap-2 truncate">
                      <span class="text-xs">${item.icon}</span>
                      <span class="truncate">${item.label}</span>
                    </span>
                    ${item.badge ? `
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-medium shrink-0 ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : (item.badgeColor || 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400')
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

      <!-- Quick Footer -->
      <div class="p-3 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/40 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
        <span>NEET UG 720</span>
        <span class="text-emerald-600 dark:text-emerald-400 font-semibold">Offline Ready</span>
      </div>
    </aside>

    <!-- MOBILE SLIDE-OUT NAVIGATION DRAWER -->
    <div id="mobile-sidebar-drawer" class="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs hidden lg:hidden transition-opacity duration-300">
      <div class="w-80 max-w-[85vw] h-full bg-white dark:bg-slate-900 shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform duration-300">
        
        <div class="p-5 space-y-6">
          
          <!-- Drawer Header -->
          <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <a href="#landing" class="flex items-center shrink-0 mobile-sidebar-link focus:outline-none select-none" aria-label="VG Insights – Landing Page">
              ${renderBrandLogo({ size: 'header' })}
            </a>
            
            <button
              id="btn-close-mobile-sidebar"
              type="button"
              class="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 -mr-1"
              aria-label="Close navigation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Drawer Navigation Sections: LEARN, PRACTICE, ANALYZE, TOOLS -->
          ${drawerSections.map(section => `
            <div class="space-y-1.5">
              <h3 class="px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                ${section.title}
              </h3>
              <div class="space-y-1">
                ${section.items.map(item => `
                  <a
                    href="${item.path}"
                    class="mobile-sidebar-link flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
                  >
                    <span class="flex items-center gap-2.5">
                      <span class="text-sm">${item.icon}</span>
                      <span>${item.label}</span>
                    </span>
                    ${item.badge ? `
                      <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${item.badgeColor || 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}">
                        ${item.badge}
                      </span>
                    ` : ''}
                  </a>
                `).join('')}
              </div>
            </div>
          `).join('')}

          <!-- Optional overview footer -->
          <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
            <a
              href="#landing"
              class="mobile-sidebar-link flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span>Platform Overview</span>
              <span>→</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  `;
}
