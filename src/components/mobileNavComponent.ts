export function renderMobileBottomNav(currentPath: string = '#home'): string {
  const cleanPath = currentPath.split('/')[0] || '#home';

  const navItems = [
    { label: 'Learn', path: '#home', icon: '📖', isActive: cleanPath === '#home' || cleanPath === '#' },
    { label: 'PYQs', path: '#pyqs', icon: '🏆', isActive: cleanPath === '#pyqs' },
    { label: 'Mock Test', path: '#weekly-mock', icon: '📝', isActive: cleanPath === '#weekly-mock' },
    { label: 'AI Doctor', path: '#weakness-doctor', icon: '🩺', isActive: cleanPath === '#weakness-doctor' },
    { label: 'Search', path: '#search', isAction: true, icon: '🔍', isActive: false },
  ];

  return `
    <nav id="mobile-bottom-nav" class="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/90 dark:border-slate-800 px-2 py-1.5 shadow-lg safe-area-bottom">
      <div class="flex items-center justify-around max-w-md mx-auto">
        ${navItems.map(item => {
          if (item.isAction) {
            return `
              <button
                id="btn-mobile-nav-search"
                type="button"
                class="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-[10px] font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95 transition-all"
                aria-label="Search"
              >
                <span class="text-base mb-0.5">${item.icon}</span>
                <span>${item.label}</span>
              </button>
            `;
          }

          return `
            <a
              href="${item.path}"
              class="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-[10px] font-semibold transition-all ${
                item.isActive
                  ? 'text-blue-600 dark:text-blue-400 font-bold scale-105'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }"
            >
              <span class="text-base mb-0.5">${item.icon}</span>
              <span>${item.label}</span>
            </a>
          `;
        }).join('')}
      </div>
    </nav>
  `;
}
