import { RoadmapStep } from '../data/learningRoadmapData';
import { TOPIC_DETAILS } from '../data/topicDetails';
import { getTopicById } from '../data/neetData';
import { renderInlineMathHTML, renderFormulaHTML } from '../utils/mathRenderer';

export interface MissedQuestionDetail {
  qIdx: number;
  question: string;
  userChoice: number;
  correctChoice: number;
  userChoiceText: string;
  correctChoiceText: string;
  explanation: string;
}

export interface AssessmentLearnReviewParams {
  step: RoadmapStep;
  topicId: string;
  topicTitle: string;
  correctCount: number;
  totalQuestions: number;
  missedQuestions: MissedQuestionDetail[];
  nextStepId?: string;
}

/**
 * Renders an in-place comprehensive 'Learn' & concept review panel
 * within the test results when a student fails or reviews a topic assessment.
 */
export function renderAssessmentFailureLearnReview(params: AssessmentLearnReviewParams): string {
  const { step, topicId, topicTitle, correctCount, totalQuestions, missedQuestions } = params;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  // Retrieve rich topic details
  const linkedTopic = getTopicById(topicId);
  const detail = (TOPIC_DETAILS as any)[topicId] ||
    (TOPIC_DETAILS as any)[`phys-${topicId}`] ||
    (TOPIC_DETAILS as any)[`chem-${topicId}`] ||
    (TOPIC_DETAILS as any)[`bio-${topicId}`] ||
    (topicId.startsWith('phys-') || topicId.startsWith('chem-') || topicId.startsWith('bio-')
      ? (TOPIC_DETAILS as any)[topicId.replace(/^(phys|chem|bio)-/, '')]
      : undefined) ||
    (linkedTopic ? (TOPIC_DETAILS as any)[linkedTopic.id] : undefined);

  // Extract core concepts
  const keyConcepts = step?.keyConcepts || detail?.keyConcepts || detail?.basicIdea || [];
  const mustRemember = step?.mustRememberPoints || detail?.quickRevision || detail?.neetImportantPoints || [];
  const commonTraps = step?.commonTraps || [];
  const detailedConfusions = detail?.commonConfusions || linkedTopic?.notes?.commonConfusions || [];
  const formulae = detail?.formulae || linkedTopic?.notes?.formulas || [];
  const importantTerms = detail?.importantTerms || [];

  return `
    <div id="assessment-failure-learn-review-card" class="p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border-2 border-rose-500/60 shadow-xl space-y-6 animate-in fade-in duration-300">
      
      <!-- 1. HEADER & SCORE SUMMARY -->
      <div class="text-center space-y-3">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500 text-white font-black text-xs uppercase tracking-wider shadow-sm">
          <span>⚠️</span> Assessment Not Passed: ${correctCount}/${totalQuestions} Correct (${percentage}%)
        </div>
        
        <h4 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          Review Concepts for ${topicTitle}
        </h4>
        
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
          NEET UG requires 100% conceptual mastery (15/15) to guarantee top score accuracy. Review the specific concepts below that caused marks loss before attempting a retake.
        </p>

        <!-- Quick Action Buttons -->
        <div class="pt-2 flex flex-wrap items-center justify-center gap-2.5">
          <button
            type="button"
            id="btn-retake-mastery-test"
            class="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 active:scale-[0.98] text-white font-black text-xs sm:text-sm shadow-md shadow-rose-600/30 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>🔄 Retake 15-Question Test</span>
          </button>

          <a
            href="#topic/${topicId}"
            class="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>📖 Open Full Topic Learn Reader →</span>
          </a>

          <button
            type="button"
            id="btn-scroll-to-step-notes"
            class="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>⬆️ Scroll to Study Notes</span>
          </button>
        </div>
      </div>

      <!-- 2. INTERACTIVE CONCEPT REVIEW TABS -->
      <div class="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-4">
        
        <div class="flex items-center justify-between flex-wrap gap-2">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <span>📚</span> Direct NCERT Remediation & Review:
          </span>
          <span class="text-[11px] text-rose-600 dark:text-rose-400 font-semibold">
            ${missedQuestions.length} Questions Missed
          </span>
        </div>

        <!-- Tab Controls -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar border-b border-slate-200 dark:border-slate-800" id="review-tabs-header">
          <button
            type="button"
            class="review-tab-btn active px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30"
            data-target-tab="tab-missed-questions"
          >
            ❌ Missed Questions (${missedQuestions.length})
          </button>

          <button
            type="button"
            class="review-tab-btn px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            data-target-tab="tab-key-concepts"
          >
            🧠 Core Concepts (${keyConcepts.length})
          </button>

          ${mustRemember.length > 0 || formulae.length > 0 ? `
            <button
              type="button"
              class="review-tab-btn px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              data-target-tab="tab-formulas-rules"
            >
              ⚡ Formulas & Rules (${formulae.length > 0 ? formulae.length : mustRemember.length})
            </button>
          ` : ''}

          ${commonTraps.length > 0 || detailedConfusions.length > 0 ? `
            <button
              type="button"
              class="review-tab-btn px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              data-target-tab="tab-examiner-traps"
            >
              ⚠️ Common Traps (${commonTraps.length + detailedConfusions.length})
            </button>
          ` : ''}

          ${importantTerms.length > 0 ? `
            <button
              type="button"
              class="review-tab-btn px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              data-target-tab="tab-key-terms"
            >
              📖 Key Terms (${importantTerms.length})
            </button>
          ` : ''}
        </div>

        <!-- Tab 1: Missed Questions Breakdown -->
        <div id="tab-missed-questions" class="review-tab-panel space-y-3">
          <div class="text-xs text-slate-500 dark:text-slate-400">
            Review the specific questions where errors occurred and see why the correct option is grounded in NCERT:
          </div>

          <div class="space-y-3 max-h-[460px] overflow-y-auto pr-1">
            ${missedQuestions.map(m => `
              <div class="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/50 space-y-2.5">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-xs font-black text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                    Question ${m.qIdx + 1}
                  </span>
                  <button
                    type="button"
                    class="btn-jump-to-missed-q text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                    data-q-idx="${m.qIdx}"
                  >
                    <span>🔍 Jump to Question in Quiz ↑</span>
                  </button>
                </div>

                <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                  ${renderInlineMathHTML(m.question)}
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div class="p-2.5 rounded-xl bg-rose-100/70 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200">
                    <span class="font-bold block text-[11px] text-rose-700 dark:text-rose-400">✗ Your Selection:</span>
                    <span>Option ${String.fromCharCode(65 + m.userChoice)}: ${renderInlineMathHTML(m.userChoiceText)}</span>
                  </div>
                  <div class="p-2.5 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
                    <span class="font-bold block text-[11px] text-emerald-700 dark:text-emerald-400">✓ Correct NCERT Answer:</span>
                    <span>Option ${String.fromCharCode(65 + m.correctChoice)}: ${renderInlineMathHTML(m.correctChoiceText)}</span>
                  </div>
                </div>

                <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                  <span class="font-bold text-indigo-700 dark:text-indigo-300 block">💡 NCERT Reasoning:</span>
                  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">${renderInlineMathHTML(m.explanation)}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tab 2: Core NCERT Concepts -->
        <div id="tab-key-concepts" class="review-tab-panel hidden space-y-3">
          <div class="text-xs text-slate-500 dark:text-slate-400">
            Core NCERT foundation concepts for <strong>${topicTitle}</strong>:
          </div>

          <div class="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
            ${keyConcepts.map((concept: any, idx: number) => {
              const text = typeof concept === 'string' ? concept : (concept.term ? `${concept.term}: ${concept.definition}` : JSON.stringify(concept));
              return `
                <div class="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 flex items-start gap-3 text-xs sm:text-sm">
                  <span class="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    ${idx + 1}
                  </span>
                  <div class="text-slate-800 dark:text-slate-200 leading-relaxed">
                    ${renderInlineMathHTML(text)}
                  </div>
                </div>
              `;
            }).join('')}

            ${detail?.whatIsThisTopic ? `
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm space-y-1">
                <span class="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] block">NCERT Conceptual Foundation</span>
                <p class="text-slate-700 dark:text-slate-300 leading-relaxed font-normal">${renderInlineMathHTML(detail.whatIsThisTopic)}</p>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Tab 3: Formulas & Golden Rules -->
        ${mustRemember.length > 0 || formulae.length > 0 ? `
          <div id="tab-formulas-rules" class="review-tab-panel hidden space-y-3">
            <div class="text-xs text-slate-500 dark:text-slate-400">
              High-yield formulas, constants, and memory rules to solve numericals and statements:
            </div>

            <div class="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
              ${formulae.length > 0 ? `
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  ${formulae.map((f: any) => `
                    <div class="p-3 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-1">
                      <span class="text-xs text-slate-400 block">${f.title || f.name || 'Formula'}</span>
                      <div class="font-mono text-emerald-400 text-sm font-bold">${renderFormulaHTML(f.formula || f.expression)}</div>
                      ${f.variables ? `<span class="text-[11px] text-slate-400 block">${f.variables}</span>` : ''}
                      ${f.whenToUse ? `<span class="text-[10px] text-indigo-400 block mt-1">📌 When to use: ${f.whenToUse}</span>` : ''}
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              ${mustRemember.map((point: string) => `
                <div class="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 text-xs sm:text-sm text-amber-950 dark:text-amber-200 flex items-start gap-2.5">
                  <span class="text-amber-600 dark:text-amber-400 font-bold shrink-0 mt-0.5">⚡</span>
                  <span class="leading-relaxed">${renderInlineMathHTML(point)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Tab 4: Common Traps & Examiner Pitfalls -->
        ${commonTraps.length > 0 || detailedConfusions.length > 0 ? `
          <div id="tab-examiner-traps" class="review-tab-panel hidden space-y-3">
            <div class="text-xs text-slate-500 dark:text-slate-400">
              Exam traps and misconceptions frequently exploited by NEET question setters:
            </div>

            <div class="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
              ${commonTraps.map((trap: string) => `
                <div class="p-3.5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 text-xs sm:text-sm text-rose-950 dark:text-rose-200 flex items-start gap-2.5">
                  <span class="text-rose-600 dark:text-rose-400 font-black text-sm shrink-0 mt-0.5">⚠️</span>
                  <span class="leading-relaxed font-medium">${renderInlineMathHTML(trap)}</span>
                </div>
              `).join('')}

              ${detailedConfusions.map((c: any) => `
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <div class="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1.5">
                    <span>❌ Trap:</span>
                    <span>${c.misconception || c.commonConfusion}</span>
                  </div>
                  <div class="text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800">
                    <span>✓ NCERT Correction:</span>
                    <span>${c.correction || c.correctFact}</span>
                  </div>
                  ${c.whyItMattersForNEET ? `
                    <div class="text-[11px] text-slate-500 dark:text-slate-400">
                      💡 Why this matters for NEET: ${c.whyItMattersForNEET}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Tab 5: Key Terms -->
        ${importantTerms.length > 0 ? `
          <div id="tab-key-terms" class="review-tab-panel hidden space-y-3">
            <div class="text-xs text-slate-500 dark:text-slate-400">
              Crucial definitions, terminology, and symbols for <strong>${topicTitle}</strong>:
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[460px] overflow-y-auto pr-1">
              ${importantTerms.map((t: any) => `
                <div class="p-3 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 text-xs space-y-1">
                  <div class="font-bold text-purple-700 dark:text-purple-300">${t.term} ${t.symbol ? `<span class="text-slate-400 font-mono text-[11px]">(${t.symbol})</span>` : ''}</div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${t.definition}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

      </div>

    </div>
  `;
}

/**
 * Attaches event handlers for the in-place concept review panel
 */
export function attachAssessmentLearnReviewEvents(
  onRetake: () => void,
  onScrollToNotes: () => void
): void {
  // Tab Switcher
  const tabBtns = document.querySelectorAll('.review-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const targetTabId = target.getAttribute('data-target-tab');
      if (!targetTabId) return;

      // Update button styles
      tabBtns.forEach(b => {
        b.classList.remove('active', 'bg-rose-500/10', 'text-rose-600', 'dark:text-rose-400', 'border', 'border-rose-500/30');
        b.classList.add('text-slate-600', 'dark:text-slate-400');
      });
      target.classList.add('active', 'bg-rose-500/10', 'text-rose-600', 'dark:text-rose-400', 'border', 'border-rose-500/30');
      target.classList.remove('text-slate-600', 'dark:text-slate-400');

      // Update panels
      document.querySelectorAll('.review-tab-panel').forEach(panel => {
        panel.classList.add('hidden');
      });
      const activePanel = document.getElementById(targetTabId);
      if (activePanel) {
        activePanel.classList.remove('hidden');
      }
    });
  });

  // Retake Button
  document.getElementById('btn-retake-mastery-test')?.addEventListener('click', () => {
    onRetake();
  });

  // Scroll to Study Notes Button
  document.getElementById('btn-scroll-to-step-notes')?.addEventListener('click', () => {
    onScrollToNotes();
  });

  // Jump to specific missed question in quiz
  document.querySelectorAll('.btn-jump-to-missed-q').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const qIdx = target.getAttribute('data-q-idx');
      if (qIdx !== null) {
        const card = document.getElementById(`mastery-card-${qIdx}`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('ring-4', 'ring-rose-500', 'transition-all');
          setTimeout(() => {
            card.classList.remove('ring-4', 'ring-rose-500');
          }, 2000);
        }
      }
    });
  });
}
