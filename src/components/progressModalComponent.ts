import { StorageService } from '../services/storageService'
import { StudyTimerService } from '../services/studyTimerService'
import { AuthService } from '../services/authService'
import { TOPICS, CHAPTERS, SUBJECTS } from '../data/neetData'

export function renderProgressModal(): string {
  const currentUser = AuthService.getCurrentUser();
  const progress = StorageService.getProgress();
  const completedCount = progress.completedTopics.length;
  const totalTopics = Object.keys(TOPICS).length;
  const percentage = Math.round((completedCount / (totalTopics || 1)) * 100);

  // PYQ Statistics
  const pyqAttempts = Object.values(progress.pyqAttempts);
  const totalPYQsAttempted = pyqAttempts.length;
  const correctPYQs = pyqAttempts.filter(a => a.isCorrect).length;
  const pyqAccuracy = totalPYQsAttempted > 0 ? Math.round((correctPYQs / totalPYQsAttempted) * 100) : 0;

  // Study Timer Data
  const timerState = StudyTimerService.getState();
  const totalStudySeconds = StudyTimerService.getTotalStudySeconds();
  const formattedTotalStudy = StudyTimerService.formatDurationBadge(totalStudySeconds);

  return `
    <div id="modal-progress" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div class="w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-modal-enter">
        
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-lg">
              📊
            </div>
            <div>
              <h3 class="text-base font-bold text-slate-900 dark:text-slate-100">NEET Prep Dashboard</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">Track study time, topics & PYQ accuracy</p>
            </div>
          </div>
          <button id="btn-close-progress" class="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
            ✕
          </button>
        </div>

        <!-- Content -->
        <div class="p-5 overflow-y-auto space-y-6">
          
          <!-- User Profile Identity Banner -->
          ${currentUser ? `
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between gap-3">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                  ${(currentUser.name || 'S').charAt(0).toUpperCase()}
                </div>
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-sm text-slate-900 dark:text-white truncate">${currentUser.name}</span>
                    <span class="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-[10px] font-bold shrink-0">NEET ${currentUser.targetYear || 2026}</span>
                  </div>
                  <p class="text-xs text-slate-500 dark:text-slate-400 truncate">${currentUser.email}</p>
                </div>
              </div>
              <button
                type="button"
                id="btn-progress-change-name"
                class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-600 transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>✏️ Change Name</span>
              </button>
            </div>
          ` : ''}
          
          <!-- Stat Cards Grid -->
          <div class="grid grid-cols-3 gap-3">
            
            <div class="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-500/20 space-y-1">
              <span class="text-[11px] font-semibold text-blue-700 dark:text-blue-400 uppercase">Total Study</span>
              <div class="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                ${formattedTotalStudy}
              </div>
              <div class="text-[10px] text-slate-500 dark:text-slate-400">
                Active time logged
              </div>
            </div>

            <div class="p-3.5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-500/20 space-y-1">
              <span class="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase">Topics Done</span>
              <div class="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                ${completedCount} <span class="text-[10px] text-slate-400 font-normal">/${totalTopics}</span>
              </div>
              <div class="w-full h-1.5 bg-emerald-200 dark:bg-emerald-900 rounded-full overflow-hidden mt-1">
                <div class="h-full bg-emerald-500 rounded-full transition-all duration-500" style="width: ${percentage}%"></div>
              </div>
            </div>

            <div class="p-3.5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-500/20 space-y-1">
              <span class="text-[11px] font-semibold text-purple-700 dark:text-purple-400 uppercase">PYQ Accuracy</span>
              <div class="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                ${pyqAccuracy}%
              </div>
              <div class="text-[10px] text-slate-500 dark:text-slate-400">
                ${correctPYQs} / ${totalPYQsAttempted} correct
              </div>
            </div>

          </div>

          <!-- AI Weakness Doctor Banner Link -->
          <a href="#weakness-doctor" class="p-4 rounded-2xl bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/30 flex items-center justify-between hover:bg-rose-500/20 transition-all text-xs">
            <div class="flex items-center gap-3">
              <span class="text-2xl">🩺</span>
              <div>
                <span class="font-bold text-rose-600 dark:text-rose-400 block text-sm">AI Weakness Doctor</span>
                <span class="text-slate-500 dark:text-slate-400">View weak concepts, mistake ratios & targeted drills</span>
              </div>
            </div>
            <span class="px-3 py-1.5 rounded-xl bg-rose-600 text-white font-bold shrink-0">Open →</span>
          </a>

          <!-- Subject Time & Mastery Breakdown -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">
              Subject Study Time & Coverage
            </h4>

            ${SUBJECTS.map(s => {
              const subjKey = s.id as 'physics' | 'chemistry' | 'biology';
              const timeSecs = timerState.subjectTimes[subjKey] || 0;
              const formattedTime = StudyTimerService.formatDurationBadge(timeSecs);

              return `
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
                  <div class="flex items-center justify-between text-xs font-bold">
                    <span class="flex items-center gap-1.5 text-slate-900 dark:text-slate-100">
                      <span>${s.icon}</span>
                      <span>${s.name}</span>
                    </span>
                    <span class="font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
                      ⏱️ ${formattedTime}
                    </span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Completed Topics List -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">
              Completed Topics History
            </h4>

            ${progress.completedTopics.length === 0 ? `
              <p class="text-xs text-slate-400 italic">No topics marked as completed yet. Study a topic and click "Mark as Complete".</p>
            ` : progress.completedTopics.map(topicId => {
              const t = TOPICS[topicId];
              if (!t) return ''
              const chapter = CHAPTERS[t.chapterId];

              return `
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-xs">
                  <div>
                    <span class="font-bold text-slate-900 dark:text-slate-100">${t.title}</span>
                    <span class="text-slate-400 block">${chapter?.title || ''}</span>
                  </div>
                  <span class="text-emerald-500 font-bold">✓ Completed</span>
                </div>
              `;
            }).join('')}
          </div>

        </div>

      </div>
    </div>
  `;
}
