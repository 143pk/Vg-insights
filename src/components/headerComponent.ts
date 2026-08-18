import { StorageService } from '../services/storageService';
import { AuthService } from '../services/authService';
import { BreadcrumbItem } from '../types/neet';
import { renderBrandLogo } from './brandLogoComponent';

export function renderHeader(
  _onOpenSearch?: () => void,
  _onOpenBookmarks?: () => void,
  _onOpenProgress?: () => void
): string {
  const currentTheme = StorageService.getTheme();
  const isDark = currentTheme === 'dark';
  const currentUser = AuthService.getCurrentUser();
  const isAuthenticated = AuthService.isAuthenticated();

  return `
    <header id="main-app-header" class="app-header-base sticky top-0 z-40 w-full transition-all duration-300">
      <div id="header-inner-bar" class="w-full max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-[78px] sm:h-[84px] md:h-[90px] flex items-center justify-between transition-all duration-300">
        
        <!-- LEFT: Hamburger Menu (Mobile/Tablet) & Primary Brand Identity -->
        <div class="flex items-center gap-1.5 xs:gap-2.5 sm:gap-4 lg:gap-6 min-w-0 flex-1 lg:flex-initial">
          
          <!-- Hamburger Menu Icon (Mobile Only) -->
          <button
            id="btn-mobile-sidebar-toggle"
            type="button"
            class="flex lg:hidden items-center justify-center w-9.5 h-9.5 sm:w-10 sm:h-10 rounded-xl text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Open Navigation Drawer"
            title="Open Navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- VG Insights Official Wordmark: The primary brand identity -->
          <a
            href="#landing"
            class="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl py-1 px-0.5 select-none"
            aria-label="VG Insights – Landing Page"
          >
            ${renderBrandLogo({ size: 'header' })}
          </a>

          <!-- DESKTOP NAVIGATION: Learn, PYQs, Revision, Mock Tests, AI Doctor -->
          <nav class="hidden lg:flex items-center gap-1 xl:gap-2 ml-4">
            <a
              href="#home"
              class="header-nav-link px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
            >
              Learn
            </a>
            <a
              href="#pyqs"
              class="header-nav-link px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
            >
              PYQs
            </a>
            <a
              href="#revision"
              class="header-nav-link px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
            >
              Revision
            </a>
            <a
              href="#weekly-mock"
              class="header-nav-link px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
            >
              Mock Tests
            </a>
            <a
              href="#weakness-doctor"
              class="header-nav-link px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
            >
              AI Doctor
            </a>
          </nav>

        </div>

        <!-- RIGHT: Desktop (Search, Theme, Profile) | Mobile (Theme, Profile) -->
        <div class="flex items-center gap-1 sm:gap-2">
          
          <!-- Search (Desktop Only) -->
          <button
            id="btn-header-search"
            type="button"
            class="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            title="Search Topics & Formulas (Cmd+K)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <span>Search</span>
            <kbd class="ml-1 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded">⌘K</kbd>
          </button>

          <!-- Install Mobile/Android App Button -->
          <button
            id="btn-header-install-app"
            type="button"
            class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 transition-colors text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 shrink-0"
            title="Install VG Insights App on Android / Desktop"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span class="hidden md:inline">Install App</span>
          </button>

          <!-- Theme Toggle (Clean, minimal icon) -->
          <button
            id="btn-theme-toggle"
            type="button"
            class="flex items-center justify-center w-9 h-9 sm:w-9 sm:h-9 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 shrink-0"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 brand-logo-dark hidden dark:block text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 brand-logo-light dark:hidden text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
          </button>

          <!-- User / Profile Control -->
          ${isAuthenticated && currentUser ? `
            <div class="relative" id="user-profile-container">
              <button
                id="btn-user-profile-menu"
                type="button"
                class="flex items-center gap-2 p-1 sm:px-2.5 sm:py-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                title="${currentUser.email}"
                aria-expanded="false"
              >
                <span class="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  ${currentUser.name.charAt(0).toUpperCase()}
                </span>
                <span class="hidden sm:inline-block max-w-[110px] truncate text-slate-900 dark:text-slate-100 text-xs font-medium">
                  ${currentUser.name}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-400 hidden sm:inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Profile Dropdown -->
              <div
                id="user-profile-dropdown"
                class="hidden absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg p-1.5 z-50 animate-modal-enter space-y-0.5"
              >
                <div class="px-3 py-2 border-b border-slate-100 dark:border-slate-800 mb-1">
                  <p class="text-xs font-semibold text-slate-900 dark:text-white truncate">${currentUser.name}</p>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">${currentUser.email}</p>
                </div>
                <a
                  href="#my-progress"
                  class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span>Progress Radar</span>
                </a>
                <button
                  id="btn-dropdown-install-app"
                  type="button"
                  class="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors text-left"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Install App / APK</span>
                </button>
                <a
                  href="#landing"
                  class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>Overview Page</span>
                </a>
                <div class="border-t border-slate-100 dark:border-slate-800 pt-1 mt-1">
                  <button
                    id="btn-header-logout"
                    type="button"
                    class="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors text-left"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          ` : `
            <a
              href="#landing"
              class="hidden sm:inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Overview
            </a>
          `}

        </div>

      </div>
    </header>
  `;
}

export function renderBreadcrumb(breadcrumbs: BreadcrumbItem[]): string {
  if (breadcrumbs.length <= 1) return '';

  return `
    <nav class="w-full bg-slate-50/60 dark:bg-slate-900/40 border-b border-slate-200/60 dark:border-slate-800/60 py-2 px-3.5 sm:px-6 lg:px-8 text-xs font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap scrollbar-none">
      <div class="max-w-7xl mx-auto flex items-center gap-1.5">
        ${breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return `
            ${idx > 0 ? `
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-slate-400 dark:text-slate-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            ` : ''}
            ${isLast ? `
              <span class="font-semibold text-slate-900 dark:text-slate-200 truncate">
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
