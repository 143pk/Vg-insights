import { PWAInstallService } from '../services/pwaInstallService';

export function renderPwaInstallModal(): string {
  return `
    <div
      id="pwa-install-modal"
      class="hidden fixed inset-0 z-50 items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pwa-install-title"
    >
      <div class="relative w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 overflow-hidden">
        
        <!-- Background Glow Accent -->
        <div class="absolute -top-16 -right-16 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <!-- Close Button -->
        <button
          id="btn-close-pwa-modal"
          type="button"
          class="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Header with App Icon -->
        <div class="flex items-center gap-3.5 mb-4">
          <div class="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-0.5">
              Android & Desktop App
            </span>
            <h3 id="pwa-install-title" class="text-base font-bold text-slate-900 dark:text-white">
              Install VG Insights App
            </h3>
          </div>
        </div>

        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          Get the complete NEET UG preparation experience on your phone with fullscreen mock tests, offline formula sheets, and zero lag.
        </p>

        <!-- Primary 1-Click Install Button -->
        <div class="space-y-3 mb-5">
          <button
            id="btn-pwa-direct-install"
            type="button"
            class="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold shadow-md shadow-blue-600/25 transition-all transform active:scale-[0.98]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Install App on Device (1-Click)</span>
          </button>

          <p id="pwa-install-feedback" class="hidden text-center text-[11px] font-medium text-emerald-600 dark:text-emerald-400"></p>
        </div>

        <!-- Android & iOS Instructions Accordion / Card -->
        <div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-3.5 text-xs space-y-2.5">
          <div class="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold text-[11px] uppercase tracking-wider">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.156-.2702.0633-.6153-.2069-.7713-.2701-.156-.6152-.0633-.7712.2069l-2.0223 3.5029c-1.4553-.6644-3.0906-1.0347-4.8771-1.0347-1.7865 0-3.4218.3703-4.8771 1.0347L5.1006 5.3008c-.156-.2702-.5011-.3629-.7712-.2069-.2702.156-.3629.5011-.2069.7713l1.996 3.4572C2.7483 11.2307.458 14.7335.0002 18.9998h23.9996c-.4578-4.2663-2.7481-7.7691-6.118-9.6784"/>
            </svg>
            <span>Direct Android Installation Guide</span>
          </div>

          <ol class="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300 list-decimal list-inside">
            <li>Open <strong class="text-slate-800 dark:text-white">vginsights.in</strong> in Chrome / Browser on your Android phone.</li>
            <li>Tap the <strong class="text-slate-800 dark:text-white">three dots (⋮)</strong> at the top right of your browser.</li>
            <li>Tap <strong class="text-blue-600 dark:text-blue-400">"Install app"</strong> or <strong class="text-blue-600 dark:text-blue-400">"Add to Home screen"</strong>.</li>
            <li>The VG Insights icon will be added to your phone's app drawer!</li>
          </ol>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span>✓ Works 100% Offline</span>
          <span>✓ Fast Fullscreen Mode</span>
          <span>✓ Zero Storage Waste</span>
        </div>

      </div>
    </div>
  `;
}

export function initPwaInstallModal() {
  const modal = document.getElementById('pwa-install-modal');
  const btnClose = document.getElementById('btn-close-pwa-modal');
  const btnDirectInstall = document.getElementById('btn-pwa-direct-install');
  const feedback = document.getElementById('pwa-install-feedback');

  if (btnClose) {
    btnClose.addEventListener('click', () => {
      PWAInstallService.closeInstallModal();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        PWAInstallService.closeInstallModal();
      }
    });
  }

  if (btnDirectInstall) {
    btnDirectInstall.addEventListener('click', async () => {
      if (PWAInstallService.canPromptInstall()) {
        const installed = await PWAInstallService.promptInstall();
        if (installed && feedback) {
          feedback.textContent = 'App installed successfully on your device!';
          feedback.classList.remove('hidden');
          setTimeout(() => PWAInstallService.closeInstallModal(), 2000);
        }
      } else {
        if (feedback) {
          feedback.textContent = 'Follow the Android installation steps below in your browser menu (⋮ > Install app).';
          feedback.classList.remove('hidden');
        }
      }
    });
  }
}
