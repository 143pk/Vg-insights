import { WeaknessDoctorService } from '../services/weaknessDoctorService';
import { TopicWeaknessStats } from '../types/weakness';

export function renderWeaknessDashboard(activeSubjectFilter: string = 'all'): string {
  const metrics = WeaknessDoctorService.getDashboardMetrics();
  let weakTopics = WeaknessDoctorService.getWeakTopics(10);
  let improvingTopics = WeaknessDoctorService.getImprovingTopics(10);
  let masteredTopics = WeaknessDoctorService.getMasteredTopics(10);

  // Apply subject filter if selected
  if (activeSubjectFilter !== 'all') {
    weakTopics = weakTopics.filter(t => t.subjectId === activeSubjectFilter);
    improvingTopics = improvingTopics.filter(t => t.subjectId === activeSubjectFilter);
    masteredTopics = masteredTopics.filter(t => t.subjectId === activeSubjectFilter);
  }

  const hasData = metrics.totalQuestionsAttempted >= 3;

  return `
    <div class="w-full max-w-7xl mx-auto space-y-8 pb-16 font-sans text-slate-900 dark:text-slate-100" id="weakness-doctor-root">
      
      <!-- Doctor Banner Header -->
      <section class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-6">
        <div class="space-y-4 max-w-4xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
            NEET UG Precision Diagnostics Engine
          </div>
          
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
                AI Weakness Doctor
              </h1>
              <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-1">
                Zero-delay deterministic weakness detection & targeted high-yield drills for NEET UG.
              </p>
            </div>
            
            <div class="flex flex-wrap items-center gap-2 shrink-0">
              <a href="#diagnostic-quiz" class="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-2">
                ⚡ 5-Min Diagnostic Quiz
              </a>
              <button id="btn-seed-sample-weakness" class="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors" title="Load sample diagnostic test attempts for demonstration">
                🧪 Sample Benchmark
              </button>
              ${hasData ? `
                <button id="btn-reset-weakness-data" class="px-3 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 text-xs font-semibold border border-rose-200 dark:border-rose-800 transition-colors" title="Reset all test history">
                  🔄 Reset
                </button>
              ` : ''}
            </div>
          </div>

          <!-- Overall KPI Bar -->
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-4 border-t border-slate-200/80 dark:border-slate-800 text-xs">
            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-slate-500 dark:text-slate-400 text-[11px] font-semibold block">Overall Accuracy</span>
              <span class="text-xl font-black text-slate-900 dark:text-white">${metrics.overallAccuracy}%</span>
              <span class="text-[10px] text-slate-400 block">${metrics.totalQuestionsAttempted} questions</span>
            </div>

            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-slate-500 dark:text-slate-400 text-[11px] font-semibold block">Strongest Subject</span>
              <span class="text-sm font-bold text-emerald-600 dark:text-emerald-400 truncate block">${metrics.strongestSubject?.name || '—'}</span>
              <span class="text-[10px] text-slate-400 block">${metrics.strongestSubject ? `${metrics.strongestSubject.accuracy}% acc` : 'Pending data'}</span>
            </div>

            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-slate-500 dark:text-slate-400 text-[11px] font-semibold block">Weakest Subject</span>
              <span class="text-sm font-bold text-rose-600 dark:text-rose-400 truncate block">${metrics.weakestSubject?.name || '—'}</span>
              <span class="text-[10px] text-slate-400 block">${metrics.weakestSubject ? `${metrics.weakestSubject.accuracy}% acc` : 'Pending data'}</span>
            </div>

            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-slate-500 dark:text-slate-400 text-[11px] font-semibold block">Weakest Chapter</span>
              <span class="text-sm font-bold text-amber-700 dark:text-amber-400 truncate block" title="${metrics.weakestChapter?.title || ''}">${metrics.weakestChapter?.title || '—'}</span>
              <span class="text-[10px] text-slate-400 block">${metrics.weakestChapter ? `${metrics.weakestChapter.mistakes} mistakes` : 'None detected'}</span>
            </div>

            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-slate-500 dark:text-slate-400 text-[11px] font-semibold block">Weakest Topic</span>
              <span class="text-sm font-bold text-rose-600 dark:text-rose-400 truncate block" title="${metrics.weakestTopic?.topicTitle || ''}">${metrics.weakestTopic?.topicTitle || '—'}</span>
              <span class="text-[10px] text-slate-400 block">${metrics.weakestTopic ? `${metrics.weakestTopic.accuracy}% acc` : 'No weak topic'}</span>
            </div>

            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-slate-500 dark:text-slate-400 text-[11px] font-semibold block">Topics Mastered</span>
              <span class="text-xl font-black text-emerald-600 dark:text-emerald-400">${metrics.masteredTopicsCount} ⭐</span>
              <span class="text-[10px] text-slate-400 block">≥90% accuracy</span>
            </div>

            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-slate-500 dark:text-slate-400 text-[11px] font-semibold block">Needing Revision</span>
              <span class="text-xl font-black text-rose-600 dark:text-rose-400">${metrics.needsRevisionTopicsCount} 🔴</span>
              <span class="text-[10px] text-slate-400 block">&lt;75% accuracy</span>
            </div>
          </div>

        </div>
      </section>

      ${!hasData ? `
        <!-- Edge Case: Insufficient Data State -->
        <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center space-y-4">
          <div class="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-3xl mx-auto">
            📊
          </div>
          <div class="space-y-1 max-w-md mx-auto">
            <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
              Not enough data yet.
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Complete more questions in quizzes, chapter tests, or topic PYQs (minimum 3 questions per topic) to unlock accurate AI Weakness Doctor analysis.
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a href="#diagnostic-quiz" class="px-5 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg shadow-rose-600/30 transition-all">
              ⚡ Start 5-Min Diagnostic Quiz
            </a>
            <button id="btn-seed-sample-weakness-empty" class="px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm transition-colors">
              🧪 Load Sample Benchmark Data
            </button>
          </div>
        </div>
      ` : `
        
        <!-- Top Insights: Recommended Next & Key Metrics Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          <!-- Recommended Next Card (Priority Deterministic Selector) -->
          <div class="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-rose-500/10 via-rose-500/5 to-transparent border-2 border-rose-500/30 dark:border-rose-500/30 space-y-4 relative overflow-hidden">
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full bg-rose-500 text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <span>🎯</span> Recommended Next
              </span>
              <span class="text-xs font-semibold text-rose-600 dark:text-rose-400">
                Priority Fix
              </span>
            </div>

            ${metrics.nextTopicToFix ? `
              <div class="space-y-2">
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  ${metrics.nextTopicToFix.subjectName} • ${metrics.nextTopicToFix.chapterTitle}
                </span>
                <h3 class="text-xl font-black text-slate-900 dark:text-slate-100 leading-tight">
                  ${metrics.nextTopicToFix.topicTitle}
                </h3>
                <div class="flex items-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-400 pt-1">
                  <span class="px-2 py-0.5 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-bold">
                    ${metrics.nextTopicToFix.accuracy}% Accuracy
                  </span>
                  <span>•</span>
                  <span>${metrics.nextTopicToFix.mistakesRatio} Mistakes</span>
                  <span>•</span>
                  <span class="text-rose-600 dark:text-rose-400 font-bold">-${metrics.nextTopicToFix.markLoss} Marks Lost</span>
                </div>
              </div>

              <div class="pt-2">
                <a href="#weakness-doctor/practice/${metrics.nextTopicToFix.topicId}" class="w-full py-3 px-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-rose-600/25 transition-all">
                  <span>⚡</span> FIX THIS WEAKNESS →
                </a>
              </div>
            ` : `
              <div class="py-6 text-center text-sm text-slate-500 dark:text-slate-400 space-y-1">
                <p class="font-bold text-emerald-500">🔥 No major weaknesses detected!</p>
                <p class="text-xs">Keep maintaining your strong performance.</p>
              </div>
            `}
          </div>

          <!-- Biggest Mark Loss Area -->
          <div class="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-base">
                ⚠️
              </div>
              <div>
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Your Biggest Mark-Loss Area</span>
                <span class="text-sm font-semibold text-slate-700 dark:text-slate-300">High impact on NEET rank</span>
              </div>
            </div>

            ${metrics.biggestMarkLossArea ? `
              <div class="pt-1 space-y-1.5">
                <h4 class="text-base font-bold text-slate-900 dark:text-slate-100">
                  ${metrics.biggestMarkLossArea.topicTitle}
                </h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  Chapter: ${metrics.biggestMarkLossArea.chapterTitle}
                </p>
                <div class="flex items-center gap-2 pt-1 text-xs">
                  <span class="px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 font-bold">
                    Estimated -${metrics.biggestMarkLossArea.markLoss} Marks Lost
                  </span>
                  <span class="text-slate-400 font-medium">(${metrics.biggestMarkLossArea.accuracy}% accuracy)</span>
                </div>
              </div>
            ` : `
              <p class="text-xs text-slate-400 italic py-4">No significant negative mark loss identified.</p>
            `}
          </div>

          <!-- Most Improved Topic -->
          <div class="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-base">
                🚀
              </div>
              <div>
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Most Improved Topic</span>
                <span class="text-sm font-semibold text-slate-700 dark:text-slate-300">Positive score trajectory</span>
              </div>
            </div>

            ${metrics.mostImprovedTopic ? `
              <div class="pt-1 space-y-1.5">
                <h4 class="text-base font-bold text-slate-900 dark:text-slate-100">
                  ${metrics.mostImprovedTopic.topicTitle}
                </h4>
                <div class="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span>${metrics.mostImprovedTopic.previousAccuracy}%</span>
                  <span>→</span>
                  <span class="text-sm">${metrics.mostImprovedTopic.currentAccuracy}%</span>
                  <span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold text-[11px]">
                    +${metrics.mostImprovedTopic.delta}% Gain
                  </span>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  Excellent retention and upward mastery curve.
                </p>
              </div>
            ` : `
              <p class="text-xs text-slate-400 italic py-4">Practice more topics across multiple sessions to record mastery gains.</p>
            `}
          </div>

        </div>

        <!-- WEAKNESS PROGRESS VISUALIZATION -->
        <section class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 class="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>📈</span> WEAKNESS PROGRESS & MASTERY LEVELS
              </h2>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                Systematic 4-stage progression from Weakness to Complete NEET Mastery
              </p>
            </div>
            
            <div class="flex flex-wrap items-center gap-2 text-xs font-bold">
              <span class="px-3 py-1 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                🔴 Weak (&lt;50%)
              </span>
              <span>→</span>
              <span class="px-3 py-1 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                🟡 Improving (50–74%)
              </span>
              <span>→</span>
              <span class="px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                🟢 Strong (75–89%)
              </span>
              <span>→</span>
              <span class="px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                ⭐ Mastered (90–100%)
              </span>
            </div>
          </div>

          <!-- Historical Accuracy Progression Pill Trail -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">
              Active Topics Progression Trails
            </h4>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${[...weakTopics, ...improvingTopics, ...masteredTopics].slice(0, 6).map(t => {
                return `
                  <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
                    <div class="flex items-center justify-between text-xs">
                      <span class="font-bold text-slate-900 dark:text-slate-100 truncate max-w-[180px]" title="${t.topicTitle}">
                        ${t.topicTitle}
                      </span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
                        t.status === 'MASTERED' ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' :
                        t.status === 'STRONG' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                        t.status === 'IMPROVING' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' :
                        'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                      }">
                        ${t.status}
                      </span>
                    </div>

                    <div class="flex items-center gap-1.5 text-xs font-extrabold">
                      ${t.accuracyHistory.map((acc, idx) => `
                        ${idx > 0 ? `<span class="text-slate-400 font-normal">→</span>` : ''}
                        <span class="px-2 py-0.5 rounded-md ${
                          acc >= 90 ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' :
                          acc >= 75 ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' :
                          acc >= 50 ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300' :
                          'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                        }">
                          ${acc}%
                        </span>
                      `).join('')}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </section>

        <!-- Subject Filter Tabs -->
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <button data-subject-filter="all" class="weakness-subject-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeSubjectFilter === 'all' ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}">
              All Subjects
            </button>
            <button data-subject-filter="physics" class="weakness-subject-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeSubjectFilter === 'physics' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}">
              ⚡ Physics
            </button>
            <button data-subject-filter="chemistry" class="weakness-subject-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeSubjectFilter === 'chemistry' ? 'bg-teal-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}">
              🧪 Chemistry
            </button>
            <button data-subject-filter="biology" class="weakness-subject-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeSubjectFilter === 'biology' ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}">
              🌱 Biology
            </button>
          </div>

          <div class="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Threshold: ≥3 attempts required for diagnosis
          </div>
        </div>

        <!-- 3 DEDICATED SECTIONS -->
        <div class="space-y-10">
          
          <!-- 1. 🔴 WEAK AREAS -->
          <section id="section-weak-areas" class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-sm">
                  🔴
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
                    1. WEAK AREAS (Below 50% Accuracy)
                  </h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400">
                    Highest-priority topics where repeated mistakes cost valuable NEET marks.
                  </p>
                </div>
              </div>
              <span class="px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-bold">
                ${weakTopics.length} Topics
              </span>
            </div>

            ${weakTopics.length === 0 ? `
              <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-center text-xs text-slate-500">
                🔥 No major weaknesses detected in this category. Keep maintaining your performance!
              </div>
            ` : `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${weakTopics.map(t => renderWeakTopicCard(t)).join('')}
              </div>
            `}
          </section>

          <!-- 2. 🟡 IMPROVING -->
          <section id="section-improving-areas" class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-sm">
                  🟡
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
                    2. IMPROVING TOPICS (50% – 74% Accuracy)
                  </h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400">
                    Topics showing positive momentum. Targeted practice will push them to Strong & Mastered.
                  </p>
                </div>
              </div>
              <span class="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">
                ${improvingTopics.length} Topics
              </span>
            </div>

            ${improvingTopics.length === 0 ? `
              <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-center text-xs text-slate-500">
                No topics in intermediate improving status.
              </div>
            ` : `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${improvingTopics.map(t => renderImprovingTopicCard(t)).join('')}
              </div>
            `}
          </section>

          <!-- 3. 🟢 MASTERED -->
          <section id="section-mastered-areas" class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-sm">
                  🟢
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
                    3. MASTERED TOPICS (≥90% Accuracy)
                  </h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400">
                    Topics where you consistently score 90–100%. Stop re-practicing unless future performance drops.
                  </p>
                </div>
              </div>
              <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                ${masteredTopics.length} Topics
              </span>
            </div>

            ${masteredTopics.length === 0 ? `
              <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-center text-xs text-slate-500">
                Keep practicing to elevate your topics above 90% accuracy!
              </div>
            ` : `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${masteredTopics.map(t => renderMasteredTopicCard(t)).join('')}
              </div>
            `}
          </section>

        </div>

      `}

    </div>
  `;
}

function renderWeakTopicCard(t: TopicWeaknessStats): string {
  return `
    <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/50 shadow-sm space-y-4 hover:border-rose-400 transition-colors">
      
      <div class="flex items-start justify-between gap-2">
        <div class="space-y-1">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            ${t.subjectName} • ${t.chapterTitle}
          </span>
          <h4 class="text-base font-black text-slate-900 dark:text-slate-100">
            ${t.topicTitle}
          </h4>
        </div>
        <span class="px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-xs font-extrabold shrink-0">
          🔴 WEAK
        </span>
      </div>

      <div class="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-xs">
        <div>
          <span class="text-slate-400 text-[10px] block">Accuracy</span>
          <span class="text-base font-extrabold text-rose-600 dark:text-rose-400">${t.accuracy}%</span>
        </div>
        <div>
          <span class="text-slate-400 text-[10px] block">Mistakes</span>
          <span class="text-base font-extrabold text-slate-800 dark:text-slate-200">${t.mistakesRatio}</span>
        </div>
        <div>
          <span class="text-slate-400 text-[10px] block">Est. Mark Loss</span>
          <span class="text-base font-extrabold text-rose-600 dark:text-rose-400">-${t.markLoss}</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2 pt-1">
        <a href="#weakness-doctor/practice/${t.topicId}" class="flex-1 py-2.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs text-center shadow-md shadow-rose-600/20 transition-all flex items-center justify-center gap-1.5">
          <span>⚡</span> FIX THIS WEAKNESS
        </a>
        <a href="#topic/${t.topicId}" class="px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors" title="Revise topic notes & formulas">
          Revise
        </a>
      </div>

    </div>
  `;
}

function renderImprovingTopicCard(t: TopicWeaknessStats): string {
  return `
    <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/50 shadow-sm space-y-4 hover:border-amber-400 transition-colors">
      
      <div class="flex items-start justify-between gap-2">
        <div class="space-y-1">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            ${t.subjectName} • ${t.chapterTitle}
          </span>
          <h4 class="text-base font-black text-slate-900 dark:text-slate-100">
            ${t.topicTitle}
          </h4>
        </div>
        <span class="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-extrabold shrink-0">
          🟡 IMPROVING
        </span>
      </div>

      <div class="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-xs">
        <div>
          <span class="text-slate-400 text-[10px] block">Previous</span>
          <span class="text-base font-extrabold text-slate-500">${t.previousAccuracy !== undefined ? `${t.previousAccuracy}%` : '—'}</span>
        </div>
        <div>
          <span class="text-slate-400 text-[10px] block">Current</span>
          <span class="text-base font-extrabold text-amber-600 dark:text-amber-400">${t.accuracy}%</span>
        </div>
        <div>
          <span class="text-slate-400 text-[10px] block">Attempts</span>
          <span class="text-base font-extrabold text-slate-800 dark:text-slate-200">${t.totalAttempts} qs</span>
        </div>
      </div>

      <div class="flex items-center gap-2 pt-1">
        <a href="#weakness-doctor/practice/${t.topicId}" class="flex-1 py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs text-center shadow-md shadow-amber-600/20 transition-all flex items-center justify-center gap-1.5">
          <span>🎯</span> Push to Mastered (≥90%)
        </a>
        <a href="#topic/${t.topicId}" class="px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors">
          Notes
        </a>
      </div>

    </div>
  `;
}

function renderMasteredTopicCard(t: TopicWeaknessStats): string {
  return `
    <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/50 shadow-sm space-y-4 hover:border-emerald-400 transition-colors">
      
      <div class="flex items-start justify-between gap-2">
        <div class="space-y-1">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            ${t.subjectName} • ${t.chapterTitle}
          </span>
          <h4 class="text-base font-black text-slate-900 dark:text-slate-100">
            ${t.topicTitle}
          </h4>
        </div>
        <span class="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-extrabold shrink-0">
          ⭐ MASTERED
        </span>
      </div>

      <div class="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-xs">
        <div>
          <span class="text-slate-400 text-[10px] block">Accuracy</span>
          <span class="text-base font-extrabold text-emerald-600 dark:text-emerald-400">${t.accuracy}%</span>
        </div>
        <div>
          <span class="text-slate-400 text-[10px] block">Success Ratio</span>
          <span class="text-base font-extrabold text-emerald-600 dark:text-emerald-400">${t.correctCount}/${t.totalAttempts}</span>
        </div>
        <div>
          <span class="text-slate-400 text-[10px] block">Status</span>
          <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1 block">Peak Ready</span>
        </div>
      </div>

      <div class="flex items-center gap-2 pt-1">
        <span class="text-xs text-slate-400 font-medium italic">
          ✓ High retention achieved. Removed from active fix recommendations.
        </span>
      </div>

    </div>
  `;
}
