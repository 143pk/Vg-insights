import { StorageService } from '../services/storageService';
import { WeeklyMockService } from '../services/weeklyMockService';
import { BreadcrumbItem } from '../types/neet';

export function renderHeader(
  onOpenSearch: () => void,
  onOpenBookmarks: () => void,
  onOpenProgress: () => void
): string {
  const currentTheme = StorageService.getTheme();
  const isDark = currentTheme === 'dark';
  const { weekNumber } = WeeklyMockService.getCurrentYearAndWeek();

  return `
    <header class="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors duration-200">
      <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <!-- Left: Mobile Menu Toggle & Brand -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Mobile Sidebar Drawer Toggle Button -->
          <button id="btn-mobile-sidebar-toggle" class="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-500" title="Open Navigation Menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- Logo & Brand -->
          <a href="#home" class="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0.5-5"/>
                <path d="M6.5 17.5H20"/>
                <path d="M12 6l3 3-3 3"/>
              </svg>
            </div>
            <div>
              <span class="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                VG NEET
              </span>
              <span class="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase ml-1 hidden xs:inline">
                Library
              </span>
            </div>
          </a>
        </div>

        <!-- Desktop & Mobile Action Bar -->
        <div class="flex items-center gap-1 sm:gap-2">
          
          <!-- Search Button -->
          <button id="btn-header-search" class="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" title="Search Library (Cmd+K)">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <span class="hidden md:inline">Search</span>
            <kbd class="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded">⌘K</kbd>
          </button>

          <!-- Weekly NEET Mock Button -->
          <a href="#weekly-mock" class="px-2.5 sm:px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all text-xs sm:text-sm font-bold flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm shadow-blue-500/30" title="Weekly NEET Mock Test">
            <span class="text-sm">📝</span>
            <span class="hidden sm:inline">Weekly Mock</span>
            <span class="px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[9px] font-extrabold hidden md:inline">W${weekNumber}</span>
          </a>

          <!-- Weakness Doctor Link -->
          <a href="#weakness-doctor" class="px-2.5 sm:px-3 py-2 rounded-xl bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20 transition-all text-xs sm:text-sm font-bold flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-rose-500 border border-rose-500/20" title="AI Weakness Doctor">
            <span class="text-sm sm:text-base">🩺</span>
            <span class="hidden lg:inline">Doctor</span>
          </a>

          <!-- Mistake Book Link -->
          <a href="#mistake-book" class="p-2 sm:px-2.5 sm:py-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs sm:text-sm font-medium flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-amber-500" title="Mistake Book">
            <span class="text-sm">📕</span>
            <span class="hidden xl:inline">Mistakes</span>
          </a>

          <!-- Bookmarks Button -->
          <button id="btn-header-bookmarks" class="p-2 sm:px-2.5 sm:py-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs sm:text-sm font-medium flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-500" title="Saved Bookmarks">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>
          </button>

          <!-- Theme Toggle Button -->
          <button id="btn-theme-toggle" class="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" title="Toggle Theme">
            ${isDark ? `
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            ` : `
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            `}
          </button>

        </div>
      </div>
    </header>
  `;
}

export function renderBreadcrumb(breadcrumbs: BreadcrumbItem[]): string {
  if (breadcrumbs.length <= 1) return '';

  return `
    <nav class="w-full bg-slate-50/80 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60 py-2.5 px-3 sm:px-6 lg:px-8 text-xs font-medium text-slate-600 dark:text-slate-400 overflow-x-auto whitespace-nowrap scrollbar-none">
      <div class="max-w-7xl mx-auto flex items-center gap-1.5">
        ${breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return `
            ${idx > 0 ? `
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            ` : ''}
            ${isLast ? `
              <span class="font-bold text-slate-900 dark:text-slate-200 truncate">
                ${crumb.label}
              </span>
            ` : `
              <a href="${crumb.path}" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                ${crumb.label}
              </a>
            `}
          `;
        }).join('')}
      </div>
    </nav>
  `;
}
