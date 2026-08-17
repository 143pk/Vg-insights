import { CHAPTERS } from '../data/neetData';

export function renderCustomTestView(): string {
  const chapters = Object.entries(CHAPTERS).map(([id, ch]) => ({
    id,
    title: ch.title,
    subject: id.startsWith('phys-') ? 'physics' : (id.startsWith('chem-') ? 'chemistry' : 'biology')
  }));

  return `
    <div class="max-w-3xl mx-auto space-y-6 animate-fadeIn pb-16">
      
      <!-- Banner -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-indigo-800/40 space-y-2">
        <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
          ⚙️ Custom Test Builder
        </span>
        <h1 class="text-2xl sm:text-3xl font-black text-white">
          Create Personalized NEET Mock
        </h1>
        <p class="text-xs sm:text-sm text-slate-300">
          Select subjects, target chapters, question volume, and timer limit to generate a custom practice paper.
        </p>
      </div>

      <!-- Builder Form Card -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        
        <!-- Step 1: Select Subject -->
        <div class="space-y-2">
          <label class="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
            1. Select Subject Focus
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <button type="button" data-custom-subject="all" class="custom-subj-btn p-3 rounded-2xl border text-xs font-bold transition-all bg-blue-600 text-white border-blue-600 shadow-sm">
              All Subjects
            </button>
            <button type="button" data-custom-subject="physics" class="custom-subj-btn p-3 rounded-2xl border text-xs font-bold transition-all bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700">
              ⚛️ Physics Only
            </button>
            <button type="button" data-custom-subject="chemistry" class="custom-subj-btn p-3 rounded-2xl border text-xs font-bold transition-all bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700">
              🧪 Chemistry Only
            </button>
            <button type="button" data-custom-subject="biology" class="custom-subj-btn p-3 rounded-2xl border text-xs font-bold transition-all bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700">
              🧬 Biology Only
            </button>
          </div>
        </div>

        <!-- Step 2: Question Count -->
        <div class="space-y-2">
          <label class="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
            2. Question Volume & Time Limit
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <button type="button" data-custom-qcount="15" data-custom-duration="20" class="custom-count-btn p-3 rounded-2xl border text-xs font-bold transition-all bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700">
              15 Qs (20 Min)
            </button>
            <button type="button" data-custom-qcount="30" data-custom-duration="35" class="custom-count-btn p-3 rounded-2xl border text-xs font-bold transition-all bg-blue-600 text-white border-blue-600 shadow-sm">
              30 Qs (35 Min)
            </button>
            <button type="button" data-custom-qcount="45" data-custom-duration="50" class="custom-count-btn p-3 rounded-2xl border text-xs font-bold transition-all bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700">
              45 Qs (50 Min)
            </button>
            <button type="button" data-custom-qcount="90" data-custom-duration="100" class="custom-count-btn p-3 rounded-2xl border text-xs font-bold transition-all bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700">
              90 Qs (100 Min)
            </button>
          </div>
        </div>

        <!-- Start Button -->
        <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <a href="#weekly-mock" class="text-xs font-bold text-slate-500 hover:underline">
            ← Back to Weekly Mock
          </a>
          <button id="btn-start-custom-test" class="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all flex items-center gap-2">
            <span>🚀 Generate & Launch Test →</span>
          </button>
        </div>

      </div>

    </div>
  `;
}
