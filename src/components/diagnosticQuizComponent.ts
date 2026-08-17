import { WeaknessDoctorService } from '../services/weaknessDoctorService';
import { renderInlineMathHTML } from '../utils/mathRenderer';

export interface DiagnosticQuizState {
  questions: Array<{
    id: string;
    topicId: string;
    topicTitle: string;
    subjectName: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty: string;
  }>;
  currentIndex: number;
  userAnswers: Record<number, { selectedOption: number; isCorrect: boolean; timeSpent: number }>;
  startTime: number;
  questionStartTime: number;
  isCompleted: boolean;
}

export function renderDiagnosticQuizView(state?: DiagnosticQuizState): string {
  const questions = state?.questions || WeaknessDoctorService.getDiagnosticAssessment();
  const currentIndex = state?.currentIndex ?? 0;
  const currentQ = questions[currentIndex];
  const userAnswers = state?.userAnswers || {};
  const isCompleted = state?.isCompleted ?? false;

  if (isCompleted) {
    const totalAttempted = Object.keys(userAnswers).length;
    const correctCount = Object.values(userAnswers).filter(a => a.isCorrect).length;
    const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;
    const metrics = WeaknessDoctorService.getDashboardMetrics();

    return `
      <div class="w-full max-w-3xl mx-auto space-y-6 pb-16 font-sans text-slate-900 dark:text-slate-100 animate-fade-in" id="diagnostic-quiz-completed">
        
        <section class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm text-center space-y-4">
          <div class="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-2xl mx-auto border border-rose-200 dark:border-rose-800">
            🩺
          </div>
          <div class="space-y-1">
            <span class="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
              Diagnostic Assessment Complete
            </span>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              NEET Weakness Profile Generated
            </h2>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              All question attempts evaluated and indexed into AI Weakness Doctor.
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-left">
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-[11px] text-slate-400 block font-semibold">Total Score</span>
              <span class="text-xl font-black text-slate-900 dark:text-white">${correctCount}/${totalAttempted}</span>
              <span class="text-[10px] text-rose-600 dark:text-rose-400 block">${accuracy}% accuracy</span>
            </div>

            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-[11px] text-slate-400 block font-semibold">Weak Areas</span>
              <span class="text-xl font-black text-rose-600 dark:text-rose-400">${metrics.weakTopicsCount}</span>
              <span class="text-[10px] text-slate-400 block">&lt;50% accuracy</span>
            </div>

            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-[11px] text-slate-400 block font-semibold">Improving</span>
              <span class="text-xl font-black text-amber-600 dark:text-amber-400">${metrics.improvingTopicsCount}</span>
              <span class="text-[10px] text-slate-400 block">50-74% accuracy</span>
            </div>

            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span class="text-[11px] text-slate-400 block font-semibold">Mastered</span>
              <span class="text-xl font-black text-emerald-600 dark:text-emerald-400">${metrics.masteredTopicsCount}</span>
              <span class="text-[10px] text-slate-400 block">≥90% accuracy</span>
            </div>
          </div>
        </section>

        <div class="flex items-center justify-center gap-3">
          <a href="#weakness-doctor" class="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2">
            <span>🩺</span> Open AI Weakness Doctor Dashboard →
          </a>
        </div>
      </div>
    `;
  }

  if (!currentQ) {
    return `<div class="p-8 text-center text-slate-500">Diagnostic quiz unavailable. <a href="#weakness-doctor" class="text-blue-500 underline">Return to Doctor</a></div>`;
  }

  const currentAnswer = userAnswers[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  return `
    <div class="w-full max-w-3xl mx-auto space-y-6 pb-16 font-sans text-slate-900 dark:text-slate-100" id="diagnostic-quiz-active">
      
      <!-- Top Bar -->
      <div class="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
        <div>
          <div class="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400">
            <span>⚡ NEET 5-Min Diagnostic Assessment</span>
            <span class="text-slate-400">•</span>
            <span class="text-slate-500">${currentQ.subjectName}</span>
          </div>
          <h2 class="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-0.5">
            ${currentQ.topicTitle}
          </h2>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-xs font-bold text-slate-500">
            ${currentIndex + 1} / ${questions.length}
          </span>
          <a href="#weakness-doctor" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 transition-colors">
            Exit
          </a>
        </div>
      </div>

      <!-- Progress Line -->
      <div class="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
      </div>

      <!-- Question Card -->
      <div class="academic-question-card p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
        <div class="flex items-center justify-between text-xs font-bold">
          <span class="px-3 py-1 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900">
            Question ${currentIndex + 1}
          </span>
          <span class="text-slate-400 font-medium">
            +4 / -1 NEET Standard Marking
          </span>
        </div>

        <p class="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
          ${renderInlineMathHTML(currentQ.question)}
        </p>

        <!-- Options -->
        <div class="grid grid-cols-1 gap-3 pt-2">
          ${currentQ.options.map((opt, optIdx) => {
            const isSelected = currentAnswer?.selectedOption === optIdx;
            const isEvaluated = currentAnswer !== undefined;
            const isCorrect = optIdx === currentQ.correctAnswer;

            let btnClass = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:border-rose-500';
            if (isEvaluated) {
              if (isCorrect) btnClass = 'bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold';
              else if (isSelected && !isCorrect) btnClass = 'bg-rose-500/10 border-rose-500 text-rose-700 dark:text-rose-300 font-bold';
              else btnClass = 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200/50 opacity-60';
            }

            return `
              <button
                class="diagnostic-opt-btn w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between text-xs sm:text-sm font-medium ${btnClass} ${isEvaluated ? 'cursor-default' : 'cursor-pointer active:scale-[0.99]'}"
                data-option-idx="${optIdx}"
                data-correct-idx="${currentQ.correctAnswer}"
                data-topic-id="${currentQ.topicId}"
                data-question-id="${currentQ.id}"
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

        ${currentAnswer ? `
          <div class="p-4 rounded-2xl border ${currentAnswer.isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-900 dark:text-emerald-200' : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 text-rose-900 dark:text-rose-200'} text-xs space-y-2 animate-fade-in">
            <span class="font-bold block">${currentAnswer.isCorrect ? '✓ Correct Answer!' : '✗ Incorrect Concept:'}</span>
            <div class="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-1 text-slate-800 dark:text-slate-200">
              <p class="leading-relaxed font-medium">${renderInlineMathHTML(currentQ.explanation)}</p>
            </div>
            ${WeaknessDoctorService.renderLearnTopicSection({
              topicId: currentQ.topicId,
              topicTitle: currentQ.topicTitle,
              subjectId: currentQ.subjectName?.toLowerCase()
            })}
          </div>
        ` : ''}

        <!-- Next button -->
        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
          <span class="text-xs text-slate-400">
            ${currentAnswer ? 'Question evaluated locally' : 'Select an option to evaluate'}
          </span>

          ${currentAnswer ? `
            <button id="btn-diagnostic-next" class="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-600/20 transition-all flex items-center gap-1.5">
              <span>${currentIndex + 1 >= questions.length ? 'Finish & Diagnose' : 'Next Question'}</span>
              <span>→</span>
            </button>
          ` : `
            <button id="btn-diagnostic-skip" class="px-4 py-2 rounded-xl text-slate-400 hover:text-slate-600 text-xs font-semibold">
              Skip
            </button>
          `}
        </div>

      </div>

    </div>
  `;
}
