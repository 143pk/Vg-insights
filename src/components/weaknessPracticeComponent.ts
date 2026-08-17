import { WeaknessDoctorService } from '../services/weaknessDoctorService';
import { renderInlineMathHTML } from '../utils/mathRenderer';

export interface WeaknessPracticeSessionState {
  topicId: string;
  questions: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty?: string;
    conceptTested?: string;
    source: string;
  }>;
  currentIndex: number;
  userAnswers: Record<number, { selectedOption: number; isCorrect: boolean; timeSpent: number }>;
  startTime: number;
  questionStartTime: number;
  isCompleted: boolean;
  initialStats: any;
  updatedStats: any;
  isLoadingAIQuestions: boolean;
}

export function renderWeaknessPracticeView(topicId: string, sessionState?: WeaknessPracticeSessionState): string {
  const context = WeaknessDoctorService.resolveTopicContext(topicId);
  const initialStats = sessionState?.initialStats || WeaknessDoctorService.calculateTopicStats(
    topicId,
    WeaknessDoctorService.getStorageState().attempts.filter(a => a.topicId === topicId),
    WeaknessDoctorService.getStorageState().topicHistories[topicId] || []
  );

  const questions = sessionState?.questions || WeaknessDoctorService.getQuestionsForTopic(topicId);
  const currentIndex = sessionState?.currentIndex ?? 0;
  const currentQ = questions[currentIndex];
  const isCompleted = sessionState?.isCompleted ?? false;
  const userAnswers = sessionState?.userAnswers || {};

  if (!currentQ && !isCompleted && !sessionState?.isLoadingAIQuestions) {
    return `
      <div class="w-full max-w-3xl mx-auto p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-4">
        <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-2xl mx-auto">
          ⚠️
        </div>
        <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">No offline questions available for this specific sub-topic</h2>
        <p class="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          You can generate high-yield NEET UG questions for this concept using our targeted AI Question Generator or study the core concept notes.
        </p>
        <div class="flex items-center justify-center gap-3 pt-2">
          <button id="btn-practice-generate-ai" data-topic-id="${topicId}" class="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-lg shadow-rose-600/20 transition-all flex items-center gap-2">
            <span>✨</span> Generate 5 NEET Practice Questions
          </button>
          <a href="#topic/${topicId}" class="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs">
            Read Topic Notes
          </a>
        </div>
      </div>
    `;
  }

  // Completed Session Screen
  if (isCompleted) {
    const totalAttempted = Object.keys(userAnswers).length;
    const correctCount = Object.values(userAnswers).filter(a => a.isCorrect).length;
    const sessionAccuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;
    const updatedStats = sessionState?.updatedStats || initialStats;

    return `
      <div class="w-full max-w-3xl mx-auto space-y-6 pb-16 font-sans text-slate-900 dark:text-slate-100 animate-fade-in" id="weakness-practice-completed">
        
        <!-- Summary Header -->
        <section class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-indigo-950 text-white shadow-2xl border border-emerald-900/40 text-center space-y-4">
          <div class="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-3xl mx-auto border border-emerald-400/30">
            🎉
          </div>
          <div class="space-y-1">
            <span class="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Focused Practice Completed
            </span>
            <h2 class="text-2xl sm:text-3xl font-black">
              ${context.topicTitle}
            </h2>
            <p class="text-xs text-slate-300">
              ${context.subjectName} • ${context.chapterTitle}
            </p>
          </div>

          <!-- Score Transformation Card -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-left">
            <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span class="text-[11px] text-slate-400 block">Session Score</span>
              <span class="text-xl font-extrabold text-white">${correctCount}/${totalAttempted}</span>
              <span class="text-[10px] text-emerald-400 block">${sessionAccuracy}% session accuracy</span>
            </div>

            <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span class="text-[11px] text-slate-400 block">Topic Accuracy</span>
              <div class="flex items-center gap-1.5 text-base font-extrabold">
                <span class="text-slate-400 line-through">${initialStats.accuracy}%</span>
                <span>→</span>
                <span class="text-emerald-400 font-black">${updatedStats.accuracy}%</span>
              </div>
              <span class="text-[10px] text-emerald-300 block">Locally recalculated</span>
            </div>

            <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span class="text-[11px] text-slate-400 block">Status Transition</span>
              <div class="flex items-center gap-1 text-xs font-extrabold mt-1">
                <span class="px-2 py-0.5 rounded bg-white/10 text-slate-300">${initialStats.status}</span>
                <span>→</span>
                <span class="px-2 py-0.5 rounded ${
                  updatedStats.status === 'MASTERED' ? 'bg-indigo-500 text-white' :
                  updatedStats.status === 'STRONG' ? 'bg-emerald-500 text-white' :
                  updatedStats.status === 'IMPROVING' ? 'bg-amber-500 text-white' :
                  'bg-rose-500 text-white'
                }">${updatedStats.status}</span>
              </div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span class="text-[11px] text-slate-400 block">Mark Gain Potential</span>
              <span class="text-xl font-extrabold text-emerald-400">+${correctCount * 4} Marks</span>
              <span class="text-[10px] text-slate-400 block">NEET UG Equivalent</span>
            </div>
          </div>
        </section>

        <!-- Actions -->
        <div class="flex flex-wrap items-center justify-center gap-3">
          <a href="#weakness-doctor" class="px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-rose-600/20 transition-all">
            🩺 Return to Weakness Doctor
          </a>
          <button id="btn-practice-again" data-topic-id="${topicId}" class="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm transition-colors">
            🔄 Practice Again
          </button>
          <a href="#topic/${topicId}" class="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm transition-colors">
            📖 Study Notes
          </a>
        </div>

        <!-- Question Review List -->
        <div class="space-y-4 pt-4">
          <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span>📝</span> Detailed Answer Explanations
          </h3>

          <div class="space-y-4">
            ${questions.map((q, idx) => {
              const ans = userAnswers[idx];
              const isUserCorrect = ans?.isCorrect ?? false;

              return `
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border ${isUserCorrect ? 'border-emerald-200 dark:border-emerald-900/50' : 'border-rose-200 dark:border-rose-900/50'} shadow-sm space-y-3">
                  <div class="flex items-center justify-between text-xs">
                    <span class="px-2.5 py-1 rounded-lg ${isUserCorrect ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'} font-bold">
                      Question ${idx + 1} • ${isUserCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                    <span class="text-slate-400 font-medium text-[11px]">${q.source}</span>
                  </div>

                  <p class="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                    ${renderInlineMathHTML(q.question)}
                  </p>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    ${q.options.map((opt, optIdx) => {
                      const isCorrect = optIdx === q.correctAnswer;
                      const isSelected = ans?.selectedOption === optIdx;

                      let badgeClass = 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
                      if (isCorrect) {
                        badgeClass = 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 border-emerald-400 dark:border-emerald-700 font-bold';
                      } else if (isSelected && !isCorrect) {
                        badgeClass = 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200 border-rose-400 dark:border-rose-700 line-through';
                      }

                      return `
                        <div class="p-2.5 rounded-xl border ${badgeClass} flex items-center justify-between">
                          <span>${String.fromCharCode(65 + optIdx)}. ${renderInlineMathHTML(opt)}</span>
                          ${isCorrect ? '<span class="text-emerald-600 font-bold ml-2">✓ Correct Answer</span>' : (isSelected ? '<span class="text-rose-600 font-bold ml-2">Your Answer</span>' : '')}
                        </div>
                      `;
                    }).join('')}
                  </div>

                  <!-- Explanation Box -->
                  <div class="p-3.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-800/40 text-xs space-y-1">
                    <span class="font-bold text-indigo-900 dark:text-indigo-300 block">💡 Step-by-Step NEET Explanation:</span>
                    <div class="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      ${renderInlineMathHTML(q.explanation)}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

      </div>
    `;
  }

  // Active Practice Screen
  const currentAnswer = userAnswers[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  return `
    <div class="w-full max-w-3xl mx-auto space-y-6 pb-16 font-sans text-slate-900 dark:text-slate-100" id="weakness-practice-active" data-topic-id="${topicId}">
      
      <!-- Top Session Bar -->
      <div class="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 text-xs font-bold">
            <span class="px-2.5 py-0.5 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 uppercase tracking-wider">
              Focused Drill
            </span>
            <span class="text-slate-400">•</span>
            <span class="text-slate-500 dark:text-slate-400">${context.subjectName}</span>
          </div>
          <h2 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-0.5">
            ${context.topicTitle}
          </h2>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <span class="text-xs font-bold text-slate-500 dark:text-slate-400">
            Question <span class="text-slate-900 dark:text-slate-100">${currentIndex + 1}</span> / ${questions.length}
          </span>
          <a href="#weakness-doctor" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 text-xs font-bold transition-colors">
            Exit
          </a>
        </div>
      </div>

      <!-- Progress Line -->
      <div class="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-rose-500 to-indigo-500 rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
      </div>

      <!-- Active Question Box -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6" id="practice-card-box">
        
        <div class="flex items-center justify-between text-xs font-bold">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-xl bg-rose-600 text-white font-bold">
              Q${currentIndex + 1}
            </span>
            <span class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              ${currentQ.source}
            </span>
            ${currentQ.difficulty ? `
              <span class="px-2 py-0.5 rounded text-[10px] uppercase font-bold ${currentQ.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'}">
                ${currentQ.difficulty}
              </span>
            ` : ''}
          </div>

          <span class="text-xs text-slate-400 font-medium">
            +4 / -1 NEET Marking
          </span>
        </div>

        <!-- Question Text -->
        <p class="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
          ${renderInlineMathHTML(currentQ.question)}
        </p>

        <!-- Options Grid -->
        <div class="grid grid-cols-1 gap-3 pt-2">
          ${currentQ.options.map((opt, optIdx) => {
            const isSelected = currentAnswer?.selectedOption === optIdx;
            const isEvaluated = currentAnswer !== undefined;
            const isCorrect = optIdx === currentQ.correctAnswer;

            let btnClass = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:border-rose-500 dark:hover:border-rose-400';
            
            if (isEvaluated) {
              if (isCorrect) {
                btnClass = 'bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold';
              } else if (isSelected && !isCorrect) {
                btnClass = 'bg-rose-500/10 border-rose-500 text-rose-700 dark:text-rose-300 font-bold';
              } else {
                btnClass = 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200/50 dark:border-slate-700/50 opacity-60';
              }
            }

            return `
              <button
                class="practice-drill-opt-btn w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between text-xs sm:text-sm font-medium ${btnClass} ${isEvaluated ? 'cursor-default' : 'cursor-pointer active:scale-[0.99]'}"
                data-option-idx="${optIdx}"
                data-correct-idx="${currentQ.correctAnswer}"
                ${isEvaluated ? 'disabled' : ''}
              >
                <div class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-xl ${isSelected ? 'bg-rose-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'} flex items-center justify-center font-bold text-xs shrink-0">
                    ${String.fromCharCode(65 + optIdx)}
                  </span>
                  <span class="leading-relaxed">${renderInlineMathHTML(opt)}</span>
                </div>
                ${isEvaluated && isCorrect ? `<span class="text-emerald-600 font-bold text-xs">✓ Correct</span>` : ''}
                ${isEvaluated && isSelected && !isCorrect ? `<span class="text-rose-600 font-bold text-xs">✗ Incorrect</span>` : ''}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Post-Answer Immediate Feedback Box -->
        ${currentAnswer ? `
          <div class="p-4 sm:p-5 rounded-2xl border ${currentAnswer.isCorrect ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200' : 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'} space-y-2.5 text-xs sm:text-sm animate-fade-in">
            <div class="font-bold text-sm flex items-center gap-2">
              ${currentAnswer.isCorrect ? '<span>🎉 Brilliant! You got it right.</span>' : '<span>❌ Incorrect. Let\'s review this concept:</span>'}
            </div>
            
            <div class="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-1 text-slate-800 dark:text-slate-200">
              <span class="font-bold text-indigo-700 dark:text-indigo-400 block text-xs">Step-by-Step Solution:</span>
              <p class="leading-relaxed font-medium">
                ${renderInlineMathHTML(currentQ.explanation)}
              </p>
            </div>
          </div>
        ` : ''}

        <!-- Navigation Next/Finish -->
        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
          <div class="text-xs text-slate-400">
            ${currentAnswer ? `Question ${currentIndex + 1} of ${questions.length} saved locally` : 'Select an option to evaluate'}
          </div>

          <div class="flex items-center gap-2">
            ${currentAnswer ? `
              <button id="btn-practice-next" class="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-600/20 transition-all flex items-center gap-1.5">
                <span>${currentIndex + 1 >= questions.length ? 'Finish & View Diagnostics' : 'Next Question'}</span>
                <span>→</span>
              </button>
            ` : `
              <button id="btn-practice-skip" class="px-4 py-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-semibold">
                Skip
              </button>
            `}
          </div>
        </div>

      </div>

      <!-- Optional Batch AI Generator for Extra Questions -->
      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div class="flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <span>✨</span>
          <span>Need more questions for this specific topic?</span>
        </div>
        <button id="btn-practice-generate-ai" data-topic-id="${topicId}" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-sm flex items-center gap-1.5 shrink-0">
          <span>+ 5 Targeted Questions</span>
        </button>
      </div>

    </div>
  `;
}
