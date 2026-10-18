import { PaymentService } from '../services/paymentService';
import { PricingComponent } from './pricingComponent';
import { SUBJECTS, CLASSIFICATIONS, CHAPTERS, TOPICS } from '../data/neetData';
import { RouteState } from '../services/routerService';
import { Chapter } from '../types/neet';
import { ChapterwiseMCQ, ChapterMCQProgress } from '../types/chapterwiseMcq';
import { ChapterwiseMcqService, CHAPTER_STATS_REGISTRY, formatTopicIdToTitle } from '../services/chapterwiseMcqService';
import { renderMath, renderInlineMathHTML } from '../utils/mathRenderer';

function renderMCQText(text: string | undefined | null): string {
  if (!text) return '';
  return renderInlineMathHTML(text);
}

// Local UI state for MCQ Practice Engine
interface McqEngineState {
  chapterId: string;
  difficultyFilter: 'all' | 'Easy' | 'Medium' | 'Hard';
  sourceFilter: 'all' | 'pyq' | 'practice';
  selectedOptions: Record<string, 'A' | 'B' | 'C' | 'D'>;
}

let engineState: McqEngineState = {
  chapterId: 'units-measurements',
  difficultyFilter: 'all',
  sourceFilter: 'all',
  selectedOptions: {}
};

// Virtualization constants and variable-height configuration
const DEFAULT_CARD_HEIGHT = 520;
const CHECKED_CARD_HEIGHT = 980;
const BUFFER_BEFORE = 6;
const BUFFER_AFTER = 8;
const INITIAL_RENDER_COUNT = 16;

interface VirtualState {
  startIndex: number;
  endIndex: number;
  filteredQuestions: ChapterwiseMCQ[];
  scrollListener: (() => void) | null;
  resizeObserver: ResizeObserver | null;
  measuredHeights: Map<string, number>;
  offsets: number[];
  totalHeight: number;
}

let activeVirtualState: VirtualState = {
  startIndex: 0,
  endIndex: INITIAL_RENDER_COUNT,
  filteredQuestions: [],
  scrollListener: null,
  resizeObserver: null,
  measuredHeights: new Map(),
  offsets: [0],
  totalHeight: 0
};

function getCardEstimatedHeight(q: ChapterwiseMCQ, checkedMap: Record<string, boolean>): number {
  if (activeVirtualState.measuredHeights.has(q.id)) {
    return activeVirtualState.measuredHeights.get(q.id)!;
  }
  return checkedMap[q.id] ? CHECKED_CARD_HEIGHT : DEFAULT_CARD_HEIGHT;
}

function recalculateVirtualOffsets(chapterId: string): void {
  const questions = activeVirtualState.filteredQuestions;
  const n = questions.length;
  const progress = ChapterwiseMcqService.getProgress(chapterId);
  const checkedMap = progress.checkedQuestions || {};

  const offsets = new Array<number>(n + 1);
  offsets[0] = 0;
  for (let i = 0; i < n; i++) {
    offsets[i + 1] = offsets[i] + getCardEstimatedHeight(questions[i], checkedMap);
  }
  activeVirtualState.offsets = offsets;
  activeVirtualState.totalHeight = n > 0 ? offsets[n] : 0;
}

function findIndexAtOffset(targetOffset: number): number {
  const offsets = activeVirtualState.offsets;
  if (!offsets || offsets.length <= 1) return 0;
  let low = 0;
  let high = offsets.length - 2;
  let ans = 0;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (offsets[mid] <= targetOffset) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

/**
 * High-fidelity, zero-layout-shift loading skeleton while chapter chunk downloads
 */
function renderChapterLoadingSkeleton(chapterId: string): string {
  const stats = ChapterwiseMcqService.getStats(chapterId);
  const chapter = CHAPTERS[chapterId];
  const title = stats?.chapterTitle || chapter?.title || 'Chapter Practice';

  return `
    <div class="max-w-5xl mx-auto space-y-6 pb-24 animate-pulse">
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="h-6 w-20 rounded-full bg-slate-200 dark:bg-slate-800"></div>
            <div class="h-6 w-20 rounded-full bg-slate-200 dark:bg-slate-800"></div>
            <div class="h-6 w-32 rounded-full bg-slate-200 dark:bg-slate-800"></div>
          </div>
          <div class="h-8 w-28 rounded-xl bg-slate-200 dark:bg-slate-800"></div>
        </div>
        <div class="space-y-2">
          <h1 class="text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-200">${title}</h1>
          <div class="h-4 w-96 max-w-full rounded-lg bg-slate-100 dark:bg-slate-800/60"></div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div class="h-14 rounded-xl bg-slate-100 dark:bg-slate-800/60"></div>
          <div class="h-14 rounded-xl bg-slate-100 dark:bg-slate-800/60"></div>
          <div class="h-14 rounded-xl bg-slate-100 dark:bg-slate-800/60"></div>
          <div class="h-14 rounded-xl bg-slate-100 dark:bg-slate-800/60"></div>
          <div class="h-14 rounded-xl bg-slate-100 dark:bg-slate-800/60 col-span-2 sm:col-span-1"></div>
        </div>
      </div>

      <div class="space-y-6">
        ${[1, 2, 3].map(() => `
          <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="h-6 w-12 rounded-xl bg-blue-100 dark:bg-blue-950/60"></div>
                <div class="h-6 w-16 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                <div class="h-6 w-28 rounded-full bg-slate-100 dark:bg-slate-800/60"></div>
              </div>
              <div class="h-8 w-24 rounded-xl bg-slate-100 dark:bg-slate-800/60"></div>
            </div>
            <div class="h-12 w-full rounded-xl bg-slate-100 dark:bg-slate-800/60"></div>
            <div class="space-y-2.5 pt-2">
              <div class="h-12 w-full rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"></div>
              <div class="h-12 w-full rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"></div>
              <div class="h-12 w-full rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"></div>
              <div class="h-12 w-full rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export function renderChapterwiseMcqsView(routeState: RouteState): string {
  const { subjectId, classLevel, chapterId: rawChapterId } = routeState;
  const chapterId = rawChapterId ? ChapterwiseMcqService.normalizeId(rawChapterId) : undefined;

  // 1. Chapter MCQ Practice View
  if (chapterId && CHAPTERS[chapterId]) {
    if (ChapterwiseMcqService.getQuestionCount(chapterId) > 0) {
      engineState.chapterId = chapterId;
      if (!ChapterwiseMcqService.isChapterLoaded(chapterId)) {
        ChapterwiseMcqService.loadChapterQuestions(chapterId).then(() => {
          if (typeof window !== 'undefined') {
            const currentHash = window.location.hash;
            if (currentHash.includes(chapterId) || (rawChapterId && currentHash.includes(rawChapterId))) {
              const appContent = document.getElementById('app-content') || document.getElementById('root');
              if (appContent) {
                appContent.innerHTML = renderUnitsPracticeEngine(chapterId);
                attachChapterwiseMcqsEvents();
              }
            }
          }
        }).catch(err => {
          console.error('[ChapterwiseMcqService] Async load error:', err);
        });
        return renderChapterLoadingSkeleton(chapterId);
      }
      return renderUnitsPracticeEngine(chapterId);
    }
    return renderEmptyChapterPracticeView(chapterId);
  }

  // 2. Subject View (Physics, Chemistry, or Biology)
  if (subjectId && SUBJECTS.some(s => s.id === subjectId)) {
    return renderSubjectChaptersView(subjectId, classLevel);
  }

  // 3. Main Chapterwise MCQs Overview (All Subjects)
  return renderMainChapterwiseOverview();
}

/**
 * Checks if a question is numerical or conceptual based on topic and content.
 */
function getSafeTopic(q: ChapterwiseMCQ): string {
  const raw = q.topic || (q as any).subtopic || (q as any).subTopic;
  if (!raw || raw === 'undefined' || raw === 'null') return '';
  return String(raw).trim();
}

function isNumericalQuestion(q: ChapterwiseMCQ): boolean {
  const numericalTopics = [
    'Propagation of errors',
    'Vernier calipers',
    'Screw gauge',
    'Least count',
    'Absolute error',
    'Percentage error',
    'Relative error',
    'Mean absolute error',
    'Measurement of length',
    'Significant figures',
    'Rounding off'
  ];
  const topic = getSafeTopic(q);
  if (topic && numericalTopics.includes(topic)) {
    return true;
  }
  const hasNumbersInOptions = q.options && Object.values(q.options).some(opt => /\d/.test(opt));
  const hasMathKeywords = /(%|\/|\*|\+|\-|\=|\^|least count|pitch|divisions|rotations|advance|percentage error|measured|calculated|radius|diameter|density|joule|kelvin|mol|mass|pressure|volume)/i.test(q.question);
  if (hasNumbersInOptions && hasMathKeywords) {
    return true;
  }
  if (q.solutionStructured?.formula && /[=/*+^]/.test(q.solutionStructured.formula)) {
    return true;
  }
  return false;
}

function getWhatWeNeed(q: ChapterwiseMCQ): string {
  const topic = getSafeTopic(q);
  if (topic === 'Propagation of errors' || topic === 'Percentage error') {
    return 'Find the maximum percentage error / relative error in the calculated quantity.';
  }
  if (topic === 'Vernier calipers' || topic === 'Least count') {
    return 'Calculate the least count of the instrument in the required unit (cm or mm).';
  }
  if (topic === 'Screw gauge') {
    return 'Determine the pitch and least count or true reading of the screw gauge.';
  }
  if (topic === 'Significant figures') {
    return 'Determine the total number of significant figures in the given measurement.';
  }
  if (topic === 'Rounding off') {
    return 'Round off the number to the specified number of significant digits using standard rules.';
  }
  if (topic.includes('Dimensions')) {
    return `Derive the correct dimensional formula of ${topic} and match with given options.`;
  }
  if (topic.includes('Bond') || topic.includes('Hybridization') || topic.includes('VSEPR')) {
    return 'Determine the geometry, bond order, or orbital hybridization for the given species.';
  }
  if (topic.includes('Enthalpy') || topic.includes('Thermodynamic') || topic.includes('Entropy') || topic.includes('Hess')) {
    return 'Calculate the requested thermodynamic state function change (ΔH, ΔS, or ΔG) and verify reaction spontaneity.';
  }
  if (topic.includes('Mole') || topic.includes('Molarity') || topic.includes('Stoichiometry')) {
    return 'Calculate the required amount of substance, molar mass, or concentration in the reaction.';
  }
  if (topic.includes('Periodic') || topic.includes('Ionization') || topic.includes('Radii')) {
    return 'Identify the correct periodic trend, valence electronic configuration, or property variation.';
  }
  return 'Calculate the requested value and select the matching option.';
}

function getQuickTip(q: ChapterwiseMCQ): string {
  const topic = getSafeTopic(q);
  if (topic === 'Propagation of errors' || topic === 'Percentage error') {
    return 'NEET Shortcut: In maximum error estimation, powers become multipliers and errors ALWAYS ADD up. Terms in the denominator are never subtracted: Δ(a/b) = Δa/a + Δb/b!';
  }
  if (topic === 'Vernier calipers') {
    return 'NEET Shortcut: Least Count = 1 MSD - 1 VSD = (1 - n/m) MSD. Always check whether options are in mm or cm before choosing!';
  }
  if (topic === 'Screw gauge') {
    return 'NEET Shortcut: Least Count = Pitch / Total circular scale divisions. Corrected Reading = Observed Reading - (± Zero error).';
  }
  if (topic === 'Significant figures') {
    return 'NEET Shortcut: Trailing zeroes without a decimal point are NOT significant (e.g., 500 has 1 sig fig; 500.0 has 4 sig figs). Power of 10 in scientific notation has no effect!';
  }
  if (topic === 'Rounding off') {
    return 'NEET Shortcut: If the dropped digit is 5 followed by zeros, round to the nearest EVEN digit (e.g., 2.75 rounds to 2.8, but 2.65 rounds to 2.6).';
  }
  if (topic.includes('Dimensions')) {
    return 'NEET Shortcut: Principle of Homogeneity: Only quantities with identical dimensions can be added or subtracted. Use dimensional elimination on [M] or [T] to quickly rule out options!';
  }
  if (topic.includes('Kinetic Theory') || topic.includes('Gas Laws') || topic.includes('Mean Free Path')) {
    return 'NEET Physics Shortcut: v_rms = √(3RT/M), v_avg = √(8RT/πM), v_mp = √(2RT/M). Mean free path λ ∝ 1/(P) and λ ∝ T!';
  }
  if (topic.includes('Oscillations') || topic.includes('SHM') || topic.includes('Pendulum')) {
    return 'NEET Physics Shortcut: For simple pendulum, T = 2π√(L/g). For spring-mass, T = 2π√(m/k). Total mechanical energy E = (1/2)mω²A² is constant!';
  }
  if (topic.includes('Waves') || topic.includes('Doppler') || topic.includes('Organ Pipe')) {
    return 'NEET Physics Shortcut: Closed pipe has only ODD harmonics: f_n = (2n-1)v/(4L). Open pipe has ALL harmonics: f_n = nv/(2L).';
  }
  if (topic.includes('Gravitation') || topic.includes('Kepler') || topic.includes('Escape Velocity')) {
    return 'NEET Physics Shortcut: Escape speed v_e = √(2gR) ≈ 11.2 km/s. Orbital speed v_o = √(gR). Relationship: v_e = √2 · v_o!';
  }
  if (q.subject === 'Chemistry') {
    if (topic.includes('Bond') || topic.includes('Hybridization')) {
      return 'NEET Chemistry Shortcut: Steric Number = (Valence e⁻ on central atom + Monovalent atoms - Positive charge + Negative charge) / 2. Lone pairs compress bond angles!';
    }
    if (topic.includes('Thermodynamics') || topic.includes('Enthalpy') || topic.includes('Entropy')) {
      return 'NEET Chemistry Shortcut: ΔG = ΔH - TΔS. At equilibrium, ΔG = 0 so T_eq = ΔH / ΔS. Always check units: ΔH is in kJ while ΔS is in J/K!';
    }
    if (topic.includes('Periodic') || topic.includes('Atomic')) {
      return 'NEET Chemistry Shortcut: Watch for half-filled (p³, d⁵) and fully-filled (p⁶, d¹⁰) configurations—they exhibit unusually high ionization enthalpy!';
    }
    return 'NEET Chemistry Tip: Pay close attention to standard states, signs (+/- for ΔH and ΔG), stoichiometry, and units (kJ vs J).';
  }
  if (q.subject === 'Biology') {
    return 'NEET Biology Tip: Focus strictly on NCERT line-by-line definitions, scientific naming, diagrams, and historical scientist contributions.';
  }
  return 'NEET Tip: Keep units uniform (SI system) before substituting numerical values into formulas.';
}

function getCommonMistake(q: ChapterwiseMCQ): string {
  const topic = getSafeTopic(q);
  if (topic.includes('Dimensions')) {
    return 'Common Student Trap: Forgetting that arguments of trigonometric (sin, cos), logarithmic, and exponential functions are dimensionless [M⁰ L⁰ T⁰].';
  }
  if (topic === 'SI base units' || topic === 'Physical quantities and units') {
    return 'Common Student Trap: Confusing supplementary units (plane angle, solid angle) which have units (radian, steradian) but zero dimensions!';
  }
  if (topic === 'Accuracy and precision') {
    return 'Common Student Trap: Confusing precision (closeness of repeated measurements, limited by least count) with accuracy (closeness to the true value).';
  }
  if (topic === 'Zero error') {
    return 'Common Student Trap: Forgetting to subtract zero error algebraically: True Reading = Observed Reading - (Zero Error with sign).';
  }
  return 'Common Student Trap: Rushing through NCERT definitions. Keep basic definitions and formulas clear.';
}

function getNeetTakeaway(q: ChapterwiseMCQ): string {
  const topic = getSafeTopic(q);
  if (topic.includes('Dimensions')) {
    return 'NCERT Gold Line: Physical quantities having different dimensions can NEVER be added or subtracted, only multiplied or divided.';
  }
  if (topic === 'SI base units') {
    return 'NCERT Gold Line: There are strictly 7 SI base units (m, kg, s, A, K, mol, cd) and 2 supplementary dimensionless units (rad, sr).';
  }
  if (topic === 'Significant figures') {
    return 'NCERT Gold Line: In multiplication and division, the final answer must have the same number of significant figures as the least precise quantity.';
  }
  if (topic === 'Zero error') {
    return 'NCERT Gold Line: If the zero mark of circular scale is below the reference line, the error is positive; if above, it is negative.';
  }
  const chapterId = q.chapterId || engineState.chapterId || 'units-measurements';
  const chTitle = CHAPTERS[chapterId]?.title || CHAPTER_STATS_REGISTRY[chapterId]?.chapterTitle || 'Chapter Practice';
  return `NCERT Gold Line: ${chTitle} is a high-yield scoring chapter in NEET—master NCERT formulas and conceptual definitions thoroughly.`;
}

/**
 * Formats a student-friendly Detailed Solution according to exact NEET specifications:
 * 1. CONCEPT: Explain what concept the question tests in very simple language.
 * 2. GIVEN: List the information provided (when applicable).
 * 3. WHAT WE NEED: Clearly state what we need to find (when applicable).
 * 4. FORMULA / PRINCIPLE: Show the relevant formula or principle.
 * 5. STEP-BY-STEP SOLUTION: Explain every step simply with calculations or substitutions.
 * 6. FINAL ANSWER: Clearly state the correct option and answer.
 * 7. QUICK TIP: Give a short NEET-focused takeaway or shortcut.
 */
function renderDetailedStudentSolution(q: ChapterwiseMCQ): string {
  const isNumerical = isNumericalQuestion(q);
  const chapterId = q.chapterId || engineState.chapterId || 'units-measurements';
  let rawTopic = q.topic || (q as any).subtopic || (q as any).subTopic;
  if (!rawTopic || rawTopic === 'undefined' || rawTopic === 'null' || String(rawTopic).trim().length === 0) {
    const tid = (q as any).topicId;
    if (tid && TOPICS[tid]?.title) {
      rawTopic = TOPICS[tid].title;
    } else if (tid && tid !== 'undefined' && tid !== 'null') {
      rawTopic = formatTopicIdToTitle(tid);
    } else {
      rawTopic = CHAPTERS[chapterId]?.title || CHAPTER_STATS_REGISTRY[chapterId]?.chapterTitle || 'Core Concept';
    }
  }
  rawTopic = String(rawTopic);
  if (rawTopic.startsWith('phys-') || rawTopic.startsWith('chem-') || rawTopic.startsWith('bio-')) {
    rawTopic = formatTopicIdToTitle(rawTopic);
  }
  let topic = rawTopic.trim();
  if (topic === '' || topic === 'undefined' || topic === 'null') {
    topic = CHAPTERS[chapterId]?.title || CHAPTER_STATS_REGISTRY[chapterId]?.chapterTitle || 'Core Concept';
  }
  const subject = q.subject || CHAPTER_STATS_REGISTRY[chapterId]?.subject || 'NEET';

  const concept = q.solutionStructured?.concept || `Testing fundamental principles of ${topic} in NEET ${subject}.`;
  const given = q.solutionStructured?.given;
  const whatWeNeed = getWhatWeNeed(q);
  const formula = q.solutionStructured?.formula || (isNumerical ? 'Standard mathematical equation / relation' : 'Governing NCERT principle / Scientific law');
  const stepByStep = q.solutionStructured?.stepByStep || q.explanation || 'Detailed step-by-step solution provided in the question guide.';
  const correctLetter = q.correctAnswer || (q as any).correctOption || 'A';
  const correctText = q.options?.[correctLetter] || q.optionsList?.[['A', 'B', 'C', 'D'].indexOf(correctLetter)] || '';
  const safeFinalAnswer = `Option ${correctLetter}: ${correctText}`;
  const finalAnswer = (q.solutionStructured?.finalAnswer && !q.solutionStructured.finalAnswer.includes('undefined'))
    ? q.solutionStructured.finalAnswer
    : safeFinalAnswer;
  const whyOtherWrong = q.solutionStructured?.whyOtherOptionsWrong || '';
  const quickTip = getQuickTip(q);

  let sectionNum = 1;

  return `
    <div class="mt-4 p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-850/70 border border-slate-200/90 dark:border-slate-800 space-y-5 max-w-full box-border overflow-hidden">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <h4 class="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
          <span>💡</span>
          <span>Detailed Solution & Explanation</span>
        </h4>
        <span class="text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-lg border border-blue-200/60 dark:border-blue-800/60">
          Step-by-Step Guide
        </span>
      </div>

      <!-- CONCEPT -->
      <div class="space-y-1">
        <span class="text-[11px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
          ${sectionNum++}. CONCEPT
        </span>
        <p class="katex-render-target text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed" style="word-break: break-word; overflow-wrap: anywhere;">
          ${renderMCQText(concept)}
        </p>
      </div>

      ${
        given && given !== 'Information and values given in the question.' && !given.startsWith('Parameters, values')
          ? `
      <!-- GIVEN -->
      <div class="space-y-1">
        <span class="text-[11px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
          ${sectionNum++}. GIVEN
        </span>
        <p class="katex-render-target text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed" style="word-break: break-word; overflow-wrap: anywhere;">
          ${renderMCQText(given)}
        </p>
      </div>
      `
          : ''
      }

      ${
        whatWeNeed && !whatWeNeed.startsWith('Calculate the requested value')
          ? `
      <!-- WHAT WE NEED -->
      <div class="space-y-1">
        <span class="text-[11px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
          ${sectionNum++}. WHAT WE NEED
        </span>
        <p class="katex-render-target text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed" style="word-break: break-word; overflow-wrap: anywhere;">
          ${renderMCQText(whatWeNeed)}
        </p>
      </div>
      `
          : ''
      }

      ${
        formula && formula !== 'Standard mathematical equation / relation' && formula !== 'Governing NCERT principle / Scientific law' && !formula.startsWith('Core governing')
          ? `
      <!-- FORMULA / PRINCIPLE -->
      <div class="space-y-1">
        <span class="text-[11px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400 block">
          ${sectionNum++}. ${isNumerical ? 'FORMULA / RELATION' : 'GOVERNING PRINCIPLE / LAW'}
        </span>
        <div class="math-container katex-render-target p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono text-purple-950 dark:text-purple-200 max-w-full overflow-x-auto overflow-y-hidden" style="-webkit-overflow-scrolling: touch;">
          ${renderMCQText(formula)}
        </div>
      </div>
      `
          : ''
      }

      <!-- STEP-BY-STEP SOLUTION -->
      <div class="space-y-1">
        <span class="text-[11px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
          ${sectionNum++}. STEP-BY-STEP SOLUTION
        </span>
        <div class="katex-render-target text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line pl-3 border-l-2 border-blue-500/50" style="word-break: break-word; overflow-wrap: anywhere;">
          ${renderMCQText(stepByStep)}
        </div>
      </div>

      <!-- FINAL ANSWER -->
      <div class="space-y-1 pt-1">
        <span class="text-[11px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
          ${sectionNum++}. FINAL ANSWER
        </span>
        <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
          <p class="katex-render-target text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-200" style="word-break: break-word; overflow-wrap: anywhere;">
            ${renderMCQText(finalAnswer)}
          </p>
          ${
            whyOtherWrong
              ? `
            <p class="katex-render-target text-xs text-emerald-800 dark:text-emerald-300 pt-1.5 border-t border-emerald-200/60 dark:border-emerald-800/60 leading-relaxed" style="word-break: break-word; overflow-wrap: anywhere;">
              <span class="font-bold">Option Analysis:</span> ${renderMCQText(whyOtherWrong)}
            </p>
          `
              : ''
          }
        </div>
      </div>

      <!-- QUICK TIP -->
      <div class="space-y-1 pt-2 border-t border-slate-200 dark:border-slate-800">
        <span class="text-[11px] font-black uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
          <span>⚡</span>
          <span>${sectionNum++}. QUICK TIP (NEET TAKEAWAY)</span>
        </span>
        <p class="katex-render-target text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic" style="word-break: break-word; overflow-wrap: anywhere;">
          ${renderMCQText(quickTip)}
        </p>
      </div>
    </div>
  `;
}

/**
 * Renders the inline Result Banner + Detailed Solution directly below the question.
 */
function renderCheckedResultAndSolution(q: ChapterwiseMCQ, isCorrect: boolean): string {
  const normQ = ChapterwiseMcqService.normalizeQuestion(q, q.chapterId || engineState.chapterId);
  const correctLetter = normQ.correctAnswer || (normQ as any).correctOption || 'A';
  const correctText = normQ.options?.[correctLetter] || normQ.optionsList?.[['A', 'B', 'C', 'D'].indexOf(correctLetter)] || '';

  return `
    <div class="pt-4 space-y-4 border-t border-slate-100 dark:border-slate-800 max-w-full box-border">
      
      <!-- Result Banner: Correct or Incorrect -->
      <div class="p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-3 max-w-full box-border ${
        isCorrect
          ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800'
          : 'bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800'
      }">
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-xl ${
            isCorrect ? 'bg-emerald-600' : 'bg-rose-600'
          } text-white flex items-center justify-center font-black text-sm shrink-0">
            ${isCorrect ? '✓' : '✗'}
          </span>
          <div>
            <h4 class="font-black text-sm sm:text-base ${
              isCorrect ? 'text-emerald-900 dark:text-emerald-200' : 'text-rose-900 dark:text-rose-200'
            }">
              ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </h4>
            <p class="text-xs ${
              isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'
            } mt-0.5">
              Correct Answer: <strong class="underline font-bold katex-render-target">Option ${correctLetter} — ${renderMCQText(
    correctText
  )}</strong>
            </p>
          </div>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <span class="px-2.5 py-1 rounded-xl text-xs font-black ${
            isCorrect
              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300'
              : 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300'
          }">
            ${isCorrect ? '+4 Marks' : '-1 Mark'}
          </span>
          ${
            !isCorrect
              ? `
            <span class="hidden sm:inline-block px-2.5 py-1 rounded-xl bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-300 text-[11px] font-bold">
              Saved to Mistake Book
            </span>
          `
              : ''
          }
        </div>
      </div>

      <!-- DETAILED SOLUTION (Teacher-Style Student-Friendly Solution) -->
      ${renderDetailedStudentSolution(normQ)}

    </div>
  `;
}

/**
 * Updates live metrics in top header and bottom summary
 */
function updateLiveStatsInDOM(progress: ChapterMCQProgress, totalQuestions: number): void {
  const allQuestions = ChapterwiseMcqService.getQuestions(progress.chapterId || engineState.chapterId || 'units-measurements');
  const checkedMap = progress.checkedQuestions || {};
  let attemptedCount = 0;
  let correctCount = 0;
  let incorrectCount = 0;

  allQuestions.forEach(q => {
    if (checkedMap[q.id]) {
      attemptedCount++;
      const studentAns = progress.userAnswers?.[q.id];
      if (studentAns === q.correctAnswer) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    }
  });

  const accuracyPct = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
  const score = correctCount * 4 - incorrectCount * 1;

  const totalEl = document.getElementById('mcq-stat-total');
  if (totalEl) totalEl.textContent = String(totalQuestions);

  const checkedEl = document.getElementById('mcq-stat-checked');
  if (checkedEl) checkedEl.textContent = String(attemptedCount);

  const correctEl = document.getElementById('mcq-stat-correct');
  if (correctEl) correctEl.textContent = String(correctCount);

  const incorrectEl = document.getElementById('mcq-stat-incorrect');
  if (incorrectEl) incorrectEl.textContent = String(incorrectCount);

  const scoreAccEl = document.getElementById('mcq-stat-score-acc');
  if (scoreAccEl) {
    scoreAccEl.textContent = `${score > 0 ? `+${score}` : score} (${accuracyPct}%)`;
  }

  const bottomSummary = document.getElementById('mcq-bottom-summary');
  if (bottomSummary) {
    bottomSummary.textContent = `${attemptedCount} of ${totalQuestions} questions checked • ${correctCount} correct • ${incorrectCount} incorrect`;
  }
}

/**
 * 1A. Continuous Chapterwise MCQ Practice Engine for Units and Measurements (500 MCQs)
 * All questions displayed on one page with vertical scrolling.
 * Solutions and correct answers remain strictly hidden until the student selects an option and clicks 'Check Answer'.
 */
function renderUnitsPracticeEngine(chapterId: string): string {
  const allQuestions = ChapterwiseMcqService.getQuestions(chapterId);
  const progress = ChapterwiseMcqService.getProgress(chapterId);
  const checkedMap = progress.checkedQuestions || {};

  // Always initialize draft selections strictly from the active chapter's saved progress
  engineState.chapterId = chapterId;
  engineState.selectedOptions = { ...(progress.draftSelections || {}) };

  // Filter questions based on difficulty and source
  const filteredQuestions = allQuestions.filter(q => {
    if (engineState.difficultyFilter !== 'all' && q.difficulty !== engineState.difficultyFilter) {
      return false;
    }
    if (engineState.sourceFilter === 'pyq' && !q.isPYQ) {
      return false;
    }
    if (engineState.sourceFilter === 'practice' && q.isPYQ) {
      return false;
    }
    return true;
  });

  // Calculate live results based only on questions the student has checked
  const totalQuestions = allQuestions.length;
  const easyCount = allQuestions.filter(q => q.difficulty === 'Easy').length;
  const mediumCount = allQuestions.filter(q => q.difficulty === 'Medium').length;
  const hardCount = allQuestions.filter(q => q.difficulty === 'Hard').length;
  const pyqCount = allQuestions.filter(q => q.isPYQ).length;
  const practiceCount = totalQuestions - pyqCount;
  let attemptedCount = 0;
  let correctCount = 0;
  let incorrectCount = 0;

  allQuestions.forEach(q => {
    if (checkedMap[q.id]) {
      attemptedCount++;
      const studentAns = progress.userAnswers?.[q.id];
      if (studentAns === q.correctAnswer) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    }
  });

  const accuracyPct = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
  const score = correctCount * 4 - incorrectCount * 1;

  const difficultyColors: Record<string, string> = {
    Easy: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    Medium: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    Hard: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200 dark:border-rose-800'
  };

  const chapter = CHAPTERS[chapterId];
  const stats = ChapterwiseMcqService.getStats(chapterId);
  const chapterTitle = stats?.chapterTitle || chapter?.title || 'Chapter Practice';
  const chapterNum = chapter?.chapterNumber || (chapterId === 'laws-of-motion' ? '4' : (chapterId === 'motion-plane' ? '3' : (chapterId === 'motion-straight-line' ? '2' : '1')));
  const subjectName = stats?.subject || 'Physics';
  const classText = stats?.class ? `Class ${stats.class}` : 'Class 11';

  // Enforce access control rule: first chapter of Physics, Chemistry & Biology is free; all others require premium
  const isChapterAllowed = PaymentService.isChapterAllowed(subjectName, chapterId);
  if (!isChapterAllowed) {
    return `
      <div class="mcq-engine-wrapper max-w-5xl mx-auto space-y-6 pb-24 w-full" id="mcq-engine-wrapper">
        <!-- Top Header & Breadcrumbs Info -->
        <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-1 rounded-full text-xs font-bold border bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                ${subjectName}
              </span>
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                ${classText}
              </span>
              <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                Chapter ${chapterNum}
              </span>
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                🔒 Pro Chapter
              </span>
            </div>
            <a
              href="#chapterwise-mcqs/${subjectName.toLowerCase()}"
              class="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors"
            >
              ← Back to Chapters
            </a>
          </div>

          <div>
            <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              ${chapterTitle}
            </h1>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Complete question bank containing ${totalQuestions} MCQs with step-by-step KaTeX NCERT solutions.
            </p>
          </div>
        </div>

        <!-- Upgrade Lock Prompt -->
        ${PricingComponent.renderLockPrompt({
          badgeText: 'Pro Chapter Question Bank',
          title: `Unlock All MCQs for ${chapterTitle}`,
          description: `Chapter 1 of Physics (Units & Measurements), Chemistry (Some Basic Concepts), and Biology (The Living World) is 100% free for all students. To practice all 38 NEET UG chapters (${totalQuestions}+ questions with step-by-step NCERT solutions and mistake tracking), upgrade to VG Insights Pro.`
        })}

        <div class="text-center pt-4">
          <a href="#chapterwise-mcqs" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
            ← Explore Free Chapters in Directory
          </a>
        </div>
      </div>
    `;
  }

  // Setup variable-height virtualization window
  activeVirtualState.filteredQuestions = filteredQuestions;
  activeVirtualState.startIndex = 0;
  activeVirtualState.endIndex = Math.min(filteredQuestions.length, INITIAL_RENDER_COUNT);

  recalculateVirtualOffsets(chapterId);

  const totalHeight = activeVirtualState.totalHeight;
  const topSpacerHeight = 0;
  const bottomSpacerHeight = Math.max(0, totalHeight - (activeVirtualState.offsets[activeVirtualState.endIndex] || 0));
  const visibleSlice = filteredQuestions.slice(activeVirtualState.startIndex, activeVirtualState.endIndex);

  return `
    <div class="mcq-engine-wrapper max-w-5xl mx-auto space-y-6 pb-24 w-full overflow-x-hidden box-border" id="mcq-engine-wrapper">

      <!-- Top Header & Breadcrumbs Info -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-5">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-1 rounded-full text-xs font-bold border bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              ${subjectName}
            </span>
            <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
              ${classText}
            </span>
            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
              Chapter ${chapterNum}
            </span>
            <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              Total Questions: ${totalQuestions}
            </span>
          </div>

          <div class="flex items-center gap-2">
            <button
              id="mcq-retry-chapter-btn-top"
              type="button"
              class="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/50 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
              title="Reset all answer selections and start fresh"
            >
              <span>🔄</span>
              <span>Reset Chapter</span>
            </button>
            <a
              href="#chapterwise-mcqs/${subjectName.toLowerCase()}"
              class="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors"
            >
              ← Back to Chapters
            </a>
          </div>
        </div>

        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            ${chapterTitle}
          </h1>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Continuous question bank (${totalQuestions} MCQs) • Select an option and click <strong>Check Answer</strong> on any question to evaluate and reveal its step-by-step solution.
          </p>
        </div>

        <!-- Live Score Summary Strip -->
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70">
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Total</span>
            <span id="mcq-stat-total" class="text-base font-black text-slate-900 dark:text-white">${totalQuestions}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/60">
            <span class="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">Checked</span>
            <span id="mcq-stat-checked" class="text-base font-black text-blue-900 dark:text-blue-200">${attemptedCount}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/60">
            <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">Correct (+4)</span>
            <span id="mcq-stat-correct" class="text-base font-black text-emerald-700 dark:text-emerald-300">${correctCount}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200/70 dark:border-rose-800/60">
            <span class="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">Incorrect (-1)</span>
            <span id="mcq-stat-incorrect" class="text-base font-black text-rose-700 dark:text-rose-300">${incorrectCount}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200/70 dark:border-indigo-800/60 col-span-2 sm:col-span-1">
            <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">Score / Acc</span>
            <span id="mcq-stat-score-acc" class="text-sm font-black text-indigo-900 dark:text-indigo-200">
              ${score > 0 ? `+${score}` : score} (${accuracyPct}%)
            </span>
          </div>
        </div>

        <!-- Filter Controls Bar -->
        <div class="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
          <!-- Difficulty Filter Buttons -->
          <div class="flex flex-wrap items-center gap-1.5">
            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">Difficulty:</span>
            <button
              type="button"
              data-diff-filter="all"
              class="mcq-diff-filter-btn px-3 py-1 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                engineState.difficultyFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }"
            >
              All (${totalQuestions})
            </button>
            <button
              type="button"
              data-diff-filter="Easy"
              class="mcq-diff-filter-btn px-3 py-1 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                engineState.difficultyFilter === 'Easy'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }"
            >
              Easy (${easyCount})
            </button>
            <button
              type="button"
              data-diff-filter="Medium"
              class="mcq-diff-filter-btn px-3 py-1 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                engineState.difficultyFilter === 'Medium'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }"
            >
              Medium (${mediumCount})
            </button>
            <button
              type="button"
              data-diff-filter="Hard"
              class="mcq-diff-filter-btn px-3 py-1 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                engineState.difficultyFilter === 'Hard'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }"
            >
              Hard (${hardCount})
            </button>
          </div>

          <!-- Source Filter -->
          <div class="flex items-center gap-1.5">
            <button
              type="button"
              data-source-filter="all"
              class="mcq-src-filter-btn px-2.5 py-1 rounded-xl text-[11px] font-bold cursor-pointer transition-all ${
                engineState.sourceFilter === 'all'
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }"
            >
              All Types
            </button>
            <button
              type="button"
              data-source-filter="pyq"
              class="mcq-src-filter-btn px-2.5 py-1 rounded-xl text-[11px] font-bold cursor-pointer transition-all ${
                engineState.sourceFilter === 'pyq'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }"
            >
              Verified PYQs (${pyqCount})
            </button>
            <button
              type="button"
              data-source-filter="practice"
              class="mcq-src-filter-btn px-2.5 py-1 rounded-xl text-[11px] font-bold cursor-pointer transition-all ${
                engineState.sourceFilter === 'practice'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }"
            >
              Practice (${practiceCount})
            </button>
          </div>
        </div>
      </div>

      <!-- CONTINUOUS VIRTUALIZED QUESTIONS LIST (ALL QUESTIONS ON ONE PAGE) -->
      <div class="w-full max-w-full box-border" id="mcq-continuous-list">
        ${
          filteredQuestions.length === 0
            ? `
          <div class="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
            <p class="text-sm text-slate-500">No questions match the current filter.</p>
            <button type="button" id="mcq-reset-filters-btn" class="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold cursor-pointer">
              Show All Questions (${totalQuestions})
            </button>
          </div>
        `
            : `
          <div id="mcq-virtual-scroll-container" class="relative w-full" style="min-height: ${totalHeight}px; overflow-anchor: none;">
            <div id="mcq-virtual-top-spacer" style="height: ${topSpacerHeight}px; width: 100%; overflow-anchor: none;"></div>
            <div id="mcq-virtual-items-wrapper" class="space-y-6 w-full max-w-full box-border" style="overflow-anchor: none;">
              ${visibleSlice
                .map(q => renderQuestionCard(q, progress, checkedMap, engineState, difficultyColors))
                .join('')}
            </div>
            <div id="mcq-virtual-bottom-spacer" style="height: ${bottomSpacerHeight}px; width: 100%; overflow-anchor: none;"></div>
          </div>
        `
        }
      </div>

      <!-- BOTTOM BAR: RETRY CHAPTER -->
      <div class="pt-8 pb-12 flex flex-col items-center justify-center gap-3 border-t border-slate-200 dark:border-slate-800">
        <button
          id="mcq-retry-chapter-btn-bottom"
          type="button"
          class="px-8 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-bold text-sm shadow-md shadow-rose-600/20 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
        >
          <span>🔄</span>
          <span>Reset All Questions to 0 (Start Fresh)</span>
        </button>
        <p id="mcq-bottom-summary" class="text-xs text-slate-400 text-center">
          ${attemptedCount} of ${totalQuestions} questions checked • ${correctCount} correct • ${incorrectCount} incorrect
        </p>
      </div>

    </div>
  `;
}

/**
 * Renders an individual Question Card with high performance and zero DOM bloat.
 */
function renderQuestionCard(
  rawQ: ChapterwiseMCQ,
  progress: ChapterMCQProgress,
  checkedMap: Record<string, boolean>,
  engineState: McqEngineState,
  difficultyColors: Record<string, string>
): string {
  const chapterId = rawQ.chapterId || engineState.chapterId || 'units-measurements';
  const q = ChapterwiseMcqService.normalizeQuestion(rawQ, chapterId);
  const isChecked = !!checkedMap[q.id];
  const studentAnswer = progress.userAnswers?.[q.id] || engineState.selectedOptions[q.id];
  const draftSelection = engineState.selectedOptions[q.id] || progress.draftSelections?.[q.id];
  const isCorrect = isChecked && studentAnswer === q.correctAnswer;
  const isBookmarked = !!progress.bookmarked?.[q.id];
  let rawDisplayTopic = q.topic || (q as any).subtopic || (q as any).subTopic;
  if (!rawDisplayTopic || rawDisplayTopic === 'undefined' || rawDisplayTopic === 'null' || String(rawDisplayTopic).trim().length === 0) {
    const tid = (q as any).topicId;
    if (tid && TOPICS[tid]?.title) {
      rawDisplayTopic = TOPICS[tid].title;
    } else if (tid && tid !== 'undefined' && tid !== 'null') {
      rawDisplayTopic = formatTopicIdToTitle(tid);
    } else {
      rawDisplayTopic = CHAPTERS[chapterId]?.title || CHAPTER_STATS_REGISTRY[chapterId]?.chapterTitle || 'Core Concept';
    }
  }
  rawDisplayTopic = String(rawDisplayTopic);
  if (rawDisplayTopic.startsWith('phys-') || rawDisplayTopic.startsWith('chem-') || rawDisplayTopic.startsWith('bio-')) {
    rawDisplayTopic = formatTopicIdToTitle(rawDisplayTopic);
  }
  let displayTopic = rawDisplayTopic.trim();
  if (displayTopic === '' || displayTopic === 'undefined' || displayTopic === 'null') {
    displayTopic = CHAPTERS[chapterId]?.title || CHAPTER_STATS_REGISTRY[chapterId]?.chapterTitle || 'Core Concept';
  }

  // Card border styling based on check state
  let cardBorderClasses = 'border border-slate-200/90 dark:border-slate-800';
  let statusBadge = '';

  if (isChecked) {
    if (isCorrect) {
      cardBorderClasses = 'border-2 border-emerald-500/80 dark:border-emerald-500/80 shadow-xs';
      statusBadge = `
        <span class="mcq-status-badge px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
          ✓ Correct
        </span>
      `;
    } else {
      cardBorderClasses = 'border-2 border-rose-500/80 dark:border-rose-500/80 shadow-xs';
      statusBadge = `
        <span class="mcq-status-badge px-3 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-700">
          ✗ Incorrect
        </span>
      `;
    }
  }

  return `
    <div
      id="question-block-${q.id}"
      data-question-id="${q.id}"
      class="mcq-card-container mcq-question-card w-full max-w-full rounded-3xl bg-white dark:bg-slate-900 ${cardBorderClasses} shadow-sm overflow-hidden box-border"
      style="touch-action: pan-y;"
    >
      
      <!-- Question Header Bar -->
      <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-850/40 flex flex-wrap items-center justify-between gap-3">
        <div class="mcq-header-badges flex flex-wrap items-center gap-2">
          <span class="px-3 py-1 rounded-xl text-xs font-black bg-blue-600 text-white shadow-xs">
            Q${q.questionNumber}
          </span>

          <span class="px-2.5 py-1 rounded-full text-[11px] font-bold border ${difficultyColors[q.difficulty] || difficultyColors['Medium']}">
            ${q.difficulty || 'Medium'}
          </span>

          <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
            ${displayTopic}
          </span>

          ${
            q.isPYQ
              ? `
            <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              ★ ${q.source && q.source !== 'undefined' && q.source !== 'null' ? q.source : 'NEET Verified PYQ'}
            </span>
          `
              : `
            <span class="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              ${q.source && q.source !== 'undefined' && q.source !== 'null' ? q.source : 'VG Insights Practice'}
            </span>
          `
          }

          ${statusBadge}
        </div>

        <!-- Bookmark Button -->
        <button
          type="button"
          data-bookmark-id="${q.id}"
          class="mcq-bookmark-btn p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
            isBookmarked ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' : 'text-slate-400'
          }"
          title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}"
        >
          <span>${isBookmarked ? '★' : '☆'}</span>
          <span class="hidden sm:inline">${isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
        </button>
      </div>

      <!-- Question Body -->
      <div class="p-6 sm:p-8 space-y-6 max-w-full box-border">
        <div class="mcq-question-text katex-render-target text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 leading-relaxed max-w-full box-border" style="word-break: break-word; overflow-wrap: anywhere; white-space: normal;">
          <span class="font-bold text-slate-900 dark:text-white mr-1.5">Q${q.questionNumber}.</span>${renderMCQText(q.question)}
        </div>

        <!-- Options A, B, C, D -->
        <div class="space-y-3 max-w-full box-border mcq-options-container" data-question-id="${q.id}">
          ${(['A', 'B', 'C', 'D'] as const)
            .map(optKey => {
              const optText = q.options?.[optKey] || q.optionsList?.[['A', 'B', 'C', 'D'].indexOf(optKey)] || '';
              const isSelectedOption = isChecked ? studentAnswer === optKey : draftSelection === optKey;
              const isCorrectAnswer = q.correctAnswer === optKey;

              let optionClasses =
                'w-full min-h-[52px] text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-3.5 sm:gap-4 box-border max-w-full ';
              let badgeClasses =
                'w-8 h-8 min-w-[32px] rounded-xl flex items-center justify-center shrink-0 font-bold text-sm pointer-events-none ';

              if (isChecked) {
                optionClasses += 'cursor-default ';
                if (isCorrectAnswer) {
                  optionClasses +=
                    'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-medium shadow-xs';
                  badgeClasses += 'bg-emerald-600 text-white shadow-xs';
                } else if (isSelectedOption && !isCorrect) {
                  optionClasses +=
                    'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 font-medium';
                  badgeClasses += 'bg-rose-600 text-white shadow-xs';
                } else {
                  optionClasses +=
                    'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60 text-slate-600 dark:text-slate-400';
                  badgeClasses +=
                    'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
                }
              } else {
                optionClasses += 'cursor-pointer ';
                if (isSelectedOption) {
                  optionClasses +=
                    'bg-blue-50 dark:bg-blue-950/50 border-blue-500 text-blue-900 dark:text-blue-100 shadow-xs ring-2 ring-blue-500/20 font-medium';
                  badgeClasses += 'bg-blue-600 text-white shadow-xs';
                } else {
                  optionClasses +=
                    'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 text-slate-800 dark:text-slate-200';
                  badgeClasses +=
                    'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
                }
              }

              return `
            <button
              type="button"
              data-question-id="${q.id}"
              data-option-key="${optKey}"
              class="mcq-option-btn ${optionClasses}"
              style="touch-action: manipulation; user-select: none; -webkit-user-select: none; -webkit-tap-highlight-color: transparent;"
              ${isChecked ? 'disabled' : ''}
            >
              <span class="mcq-option-badge ${badgeClasses}">
                ${optKey}
              </span>
              <span class="mcq-option-text katex-render-target pt-1 text-sm sm:text-base leading-relaxed flex-1 max-w-full box-border pointer-events-none" style="word-break: break-word; overflow-wrap: anywhere; white-space: normal;">
                ${renderMCQText(optText)}
              </span>
              ${
                isChecked && isCorrectAnswer
                  ? `
                <span class="text-emerald-600 dark:text-emerald-400 font-bold text-sm pt-1 pointer-events-none shrink-0">
                  ✓ Correct
                </span>
              `
                  : ''
              }
              ${
                isChecked && isSelectedOption && !isCorrect
                  ? `
                <span class="text-rose-600 dark:text-rose-400 font-bold text-sm pt-1 pointer-events-none shrink-0">
                  ✗ Your Choice (-1)
                </span>
              `
                  : ''
              }
            </button>
          `;
            })
            .join('')}
        </div>

        <!-- ACTION OR EVALUATION CONTAINER -->
        <div class="mcq-action-container max-w-full box-border" data-action-for="${q.id}">
          ${
            !isChecked
              ? `
            <div class="pt-2 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                data-check-answer="${q.id}"
                class="mcq-check-answer-btn px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  draftSelection
                    ? 'bg-blue-600 hover:bg-blue-700 active:scale-95 text-white shadow-sm cursor-pointer'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed opacity-60'
                }"
                ${draftSelection ? '' : 'disabled'}
              >
                <span>✓</span>
                <span>Check Answer</span>
              </button>

              <span class="mcq-status-helper-text text-xs text-slate-400">
                ${
                  draftSelection
                    ? `Option ${draftSelection} selected — click Check Answer to evaluate`
                    : 'Select an option above, then click Check Answer'
                }
              </span>
            </div>
          `
              : renderCheckedResultAndSolution(q, isCorrect)
          }
        </div>

      </div>

    </div>
  `;
}

/**
 * 1B. Empty State for unpopulated chapters ("No questions added yet")
 */
function renderEmptyChapterPracticeView(chapterId: string): string {
  const chapter = CHAPTERS[chapterId];
  const classification = chapter ? CLASSIFICATIONS[chapter.classificationId] : undefined;
  const subjectId = classification?.subjectId || (chapterId.startsWith('phys-') ? 'physics' : (chapterId.startsWith('chem-') ? 'chemistry' : 'biology'));
  const subject = SUBJECTS.find(s => s.id === subjectId);
  const classLabel = classification?.classLevel === 'class-11' ? 'Class 11' : (classification?.classLevel === 'class-12' ? 'Class 12' : '');

  const subjectBadgeColor =
    subjectId === 'physics'
      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800'
      : subjectId === 'chemistry'
      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
      : 'bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-800';

  return `
    <div class="max-w-5xl mx-auto space-y-6 pb-16">

      <!-- Breadcrumbs & Navigation Header -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-2.5 py-1 rounded-full text-xs font-bold border ${subjectBadgeColor}">
            ${subject?.name || 'Subject'}
          </span>
          ${classLabel ? `
            <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
              ${classLabel}
            </span>
          ` : ''}
          ${chapter?.chapterNumber ? `
            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
              Chapter ${chapter.chapterNumber}
            </span>
          ` : ''}
        </div>

        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            ${chapter?.title || 'Chapter'}
          </h1>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            ${chapter?.description || 'Targeted chapter-level NEET practice to evaluate accuracy and spot knowledge gaps.'}
          </p>
        </div>

        <!-- Quick Chapter Metrics Bar -->
        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span class="flex items-center gap-1.5">
            <span class="text-blue-500">📖</span>
            <span>${chapter?.topicIds.length || 0} NEET Topics</span>
          </span>
          <span>•</span>
          <span class="flex items-center gap-1.5">
            <span class="text-emerald-500">⏱️</span>
            <span>Est. ~${chapter?.estimatedHours || 5} Hours</span>
          </span>
          <span>•</span>
          <span class="flex items-center gap-1.5">
            <span class="text-purple-500">🎯</span>
            <span class="font-bold text-slate-700 dark:text-slate-300">MCQ Practice Engine</span>
          </span>
        </div>
      </div>

      <!-- Main Practice Panel (Empty State) -->
      <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden">
        
        <div class="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>MCQ Practice</span>
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Practice chapter-wise MCQs and identify your weak areas.
            </p>
          </div>
          
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
              0 Questions Ready
            </span>
          </div>
        </div>

        <!-- Empty State Container -->
        <div class="p-8 sm:p-14 text-center space-y-6">
          <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-900/60 flex items-center justify-center text-3xl sm:text-4xl text-blue-600 dark:text-blue-400 shadow-sm">
            📝
          </div>

          <div class="max-w-md mx-auto space-y-2">
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              No questions added yet
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We are currently populating verified chapter-wise multiple choice questions for <span class="font-bold text-slate-800 dark:text-slate-200">${chapter?.title}</span>. MCQs will be published chapter-by-chapter with full KaTeX explanations and weakness tagging.
            </p>
          </div>

          <!-- Informational Notice Box -->
          <div class="max-w-xl mx-auto p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 text-left text-xs space-y-3">
            <div class="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold">
              <span>💡</span>
              <span>Available Live Chapters (500 MCQs Each):</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <a href="#chapterwise-mcqs/physics/class-11/units-measurements" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-between transition-colors">
                <span>Units & Measurements</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('units-measurements')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/physics/class-11/motion-straight-line" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-between transition-colors">
                <span>Motion in a Straight Line</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('motion-straight-line')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/physics/class-11/motion-plane" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-between transition-colors">
                <span>Motion in a Plane</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('motion-plane')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/physics/class-11/laws-of-motion" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-between transition-colors">
                <span>Laws of Motion</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('laws-of-motion')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/physics/class-11/mechanical-properties-solids" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-between transition-colors">
                <span>Mechanical Properties of Solids</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('mechanical-properties-solids')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/physics/class-11/mechanical-properties-fluids" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-between transition-colors">
                <span>Mechanical Properties of Fluids</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('mechanical-properties-fluids')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/physics/class-11/thermal-properties-matter" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-between transition-colors">
                <span>Thermal Properties of Matter</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('thermal-properties-matter')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/physics/class-11/thermodynamics-ch" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-between transition-colors">
                <span>Thermodynamics</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('thermodynamics-ch')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/physics/class-11/kinetic-theory" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-between transition-colors">
                <span>Kinetic Theory of Gases</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('kinetic-theory')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/physics/class-11/oscillations" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-between transition-colors">
                <span>Oscillations</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('oscillations')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/physics/class-11/waves" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-between transition-colors">
                <span>Waves</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('waves')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/chemistry/class-11/mole-concept" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-between transition-colors">
                <span>Some Basic Concepts of Chemistry</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('mole-concept')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/chemistry/class-11/atomic-structure" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-between transition-colors">
                <span>Structure of Atom</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('atomic-structure')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/chemistry/class-11/periodic-classification" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-between transition-colors">
                <span>Classification of Elements</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('periodic-classification')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/chemistry/class-11/chemical-bonding" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-between transition-colors">
                <span>Chemical Bonding</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('chemical-bonding')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/chemistry/class-11/thermodynamics-chem" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-between transition-colors">
                <span>Chemical Thermodynamics</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('thermodynamics-chem')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/chemistry/class-11/redox-reactions" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-between transition-colors">
                <span>Redox Reactions</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('redox-reactions')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/chemistry/class-11/p-block-11" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-between transition-colors">
                <span>p-Block Elements (Group 13 & 14)</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('p-block-11')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/chemistry/class-11/organic-chemistry-basic-principles" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-between transition-colors">
                <span>Organic Chemistry: Basic Principles</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('organic-chemistry-basic-principles')} MCQs</span>
              </a>
              <a href="#chapterwise-mcqs/chemistry/class-11/hydrocarbons" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-between transition-colors">
                <span>Hydrocarbons</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${ChapterwiseMcqService.getQuestionCount('hydrocarbons')} MCQs</span>
              </a>
            </div>
          </div>

          <!-- Quick Navigation Actions -->
          <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#chapterwise-mcqs/physics/class-11/units-measurements"
              class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-sm"
            >
              Practice Units and Measurements (${ChapterwiseMcqService.getQuestionCount('units-measurements')} MCQs) →
            </a>
            <a
              href="${subject ? `#chapterwise-mcqs/${subject.id}${classLabel ? `/${classification?.classLevel}` : ''}` : '#chapterwise-mcqs'}"
              class="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors"
            >
              ← Back to ${subject?.name || 'Chapters'}
            </a>
          </div>

        </div>

      </div>

    </div>
  `;
}

/**
 * 2. Subject Chapters View (Physics, Chemistry, or Biology)
 */
function renderSubjectChaptersView(subjectId: string, activeClassLevel?: 'class-11' | 'class-12'): string {
  const subject = SUBJECTS.find(s => s.id === subjectId)!;

  const class11Classifications = subject.classifications11.map(id => CLASSIFICATIONS[id]).filter(Boolean);
  const class12Classifications = subject.classifications12.map(id => CLASSIFICATIONS[id]).filter(Boolean);

  const c11ChapterIds = class11Classifications.flatMap(c => c.chapterIds);
  const c12ChapterIds = class12Classifications.flatMap(c => c.chapterIds);

  const c11Chapters = c11ChapterIds.map(id => CHAPTERS[id]).filter(Boolean);
  const c12Chapters = c12ChapterIds.map(id => CHAPTERS[id]).filter(Boolean);

  let displayedChapters: { chapter: Chapter; classLevel: 'class-11' | 'class-12' }[] = [];

  if (activeClassLevel === 'class-11') {
    displayedChapters = c11Chapters.map(ch => ({ chapter: ch, classLevel: 'class-11' as const }));
  } else if (activeClassLevel === 'class-12') {
    displayedChapters = c12Chapters.map(ch => ({ chapter: ch, classLevel: 'class-12' as const }));
  } else {
    displayedChapters = [
      ...c11Chapters.map(ch => ({ chapter: ch, classLevel: 'class-11' as const })),
      ...c12Chapters.map(ch => ({ chapter: ch, classLevel: 'class-12' as const }))
    ];
  }

  const subjectBadgeColor =
    subjectId === 'physics'
      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800'
      : subjectId === 'chemistry'
      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
      : 'bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-800';

  return `
    <div class="max-w-6xl mx-auto space-y-6 pb-16">

      <!-- Subject Header Card -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div class="flex items-start sm:items-center gap-5">
          <div class="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-3xl shrink-0">
            ${subject.icon}
          </div>
          <div class="space-y-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold border ${subjectBadgeColor}">
                ${subject.name}
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                ${c11Chapters.length + c12Chapters.length} Total Chapters
              </span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              ${subject.name} Chapterwise MCQs
            </h1>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Practice chapter-wise MCQs and identify your weak areas across Class 11 and Class 12.
            </p>
          </div>
        </div>

        <div class="shrink-0 flex items-center gap-2">
          <a
            href="#chapterwise-mcqs"
            class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors"
          >
            ← All Subjects
          </a>
        </div>
      </div>

      <!-- Class Filter Switcher -->
      <div class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">
            Filter Class:
          </span>
          <a
            href="#chapterwise-mcqs/${subject.id}"
            class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              !activeClassLevel
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }"
          >
            All Classes (${c11Chapters.length + c12Chapters.length})
          </a>
          <a
            href="#chapterwise-mcqs/${subject.id}/class-11"
            class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeClassLevel === 'class-11'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }"
          >
            Class 11 (${c11Chapters.length})
          </a>
          <a
            href="#chapterwise-mcqs/${subject.id}/class-12"
            class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeClassLevel === 'class-12'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }"
          >
            Class 12 (${c12Chapters.length})
          </a>
        </div>

        <div class="text-xs text-slate-500 dark:text-slate-400 font-medium">
          Showing ${displayedChapters.length} Chapters
        </div>
      </div>

      <!-- Chapters Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        ${displayedChapters
          .map(({ chapter, classLevel }) => {
            const classification = CLASSIFICATIONS[chapter.classificationId];
            const classBadgeText = classLevel === 'class-11' ? 'Class 11' : 'Class 12';
            const practicePath = `#chapterwise-mcqs/${subject.id}/${classLevel}/${chapter.id}`;
            const chapterQCount = ChapterwiseMcqService.getQuestionCount(chapter.id);
            const isPopulatedChapter = chapterQCount > 0;

            return `
            <a
              href="${practicePath}"
              class="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 hover-card-lift"
            >
              <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${
                    classLevel === 'class-11'
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60'
                      : 'bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60'
                  }">
                    ${classBadgeText}
                  </span>
                  
                  ${
                    isPopulatedChapter
                      ? `
                    <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      ✓ ${chapterQCount} MCQs Ready</span> ${PaymentService.isChapterAllowed(subjectId, chapter.id) ? '<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200">✓ Free</span>' : '<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200">🔒 Pro</span>'}
                    </span>
                  `
                      : `
                    <span class="px-2 py-0.5 rounded-md text-[10px] font-medium bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/80 dark:border-amber-800">
                      No questions added yet
                    </span>
                  `
                  }
                </div>

                <div>
                  <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    ${chapter.title}
                  </h3>
                  ${
                    classification
                      ? `
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      Unit: ${classification.title}
                    </p>
                  `
                      : ''
                  }
                </div>
              </div>

              <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span class="text-slate-400 font-medium">
                  ${chapter.topicIds.length} Topics
                </span>
                <span class="font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>${isPopulatedChapter ? `Start Practice (${chapterQCount})` : 'MCQ Practice'}</span>
                  <span>→</span>
                </span>
              </div>
            </a>
          `;
          })
          .join('')}
      </div>

    </div>
  `;
}

/**
 * 3. Main Chapterwise MCQs Overview (All Subjects)
 */
function renderMainChapterwiseOverview(): string {
  const unitsCount = ChapterwiseMcqService.getQuestionCount('units-measurements');
  const subjectsData = SUBJECTS.map(subject => {
    const class11Classifications = subject.classifications11.map(id => CLASSIFICATIONS[id]).filter(Boolean);
    const class12Classifications = subject.classifications12.map(id => CLASSIFICATIONS[id]).filter(Boolean);

    const c11ChaptersCount = class11Classifications.flatMap(c => c.chapterIds).length;
    const c12ChaptersCount = class12Classifications.flatMap(c => c.chapterIds).length;
    const totalChapters = c11ChaptersCount + c12ChaptersCount;

    // Find the first chapter in this subject (Ch 1) and calculate its question count
    const firstChapterId = class11Classifications[0]?.chapterIds[0];
    const ch1QuestionCount = firstChapterId ? ChapterwiseMcqService.getQuestionCount(firstChapterId) : 0;

    return {
      subject,
      c11ChaptersCount,
      c12ChaptersCount,
      totalChapters,
      ch1QuestionCount
    };
  });

  const totalAllChapters = Object.keys(CHAPTERS).length;

  return `
    <div class="max-w-6xl mx-auto space-y-8 pb-16">

      <!-- Academic Header Banner -->
      <section class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div class="max-w-4xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <span>📚</span>
            NEET UG • Chapter-by-Chapter MCQ Engine
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Chapterwise MCQs
          </h1>

          <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
            Practice chapter-wise MCQs and identify your weak areas.
          </p>

          <!-- Status notice -->
          <div class="pt-2 flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
              <span>🎯</span>
              <span>Units & Measurements is live with ${unitsCount} MCQs!</span>
            </span>
            <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-bold">
              <span>⚡</span>
              <span>4 Physics Chapters Live (2,000 MCQs)</span>
            </span>
            <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-medium">
              <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>Remaining chapters populating chapter-by-chapter.</span>
            </span>
          </div>
        </div>
      </section>

      <!-- Step 1: Select Subject Cards (Physics, Chemistry, Biology) -->
      <section class="space-y-4">
        <div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            1. Select Subject
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Choose a subject to practice chapter-wise MCQs for Class 11 and Class 12
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          ${subjectsData
            .map(({ subject, c11ChaptersCount, c12ChaptersCount, totalChapters, ch1QuestionCount }) => {
              const subjectPath = `#chapterwise-mcqs/${subject.id}`;
              const isPhysics = subject.id === 'physics';
              const isChemistry = subject.id === 'chemistry';

              const badgeBg = isPhysics
                ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                : isChemistry
                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                : 'bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-800';

              return `
              <div class="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden hover-card-lift">
                
                <div class="p-6 space-y-4">
                  <div class="flex items-center justify-between">
                    <div class="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                      ${subject.icon}
                    </div>
                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold border ${badgeBg}">
                      ${totalChapters} Chapters
                    </span>
                  </div>

                  <div>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      ${subject.name}
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      ${subject.tagline}
                    </p>
                  </div>

                  <!-- Class Breakdowns -->
                  <div class="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href="#chapterwise-mcqs/${subject.id}/class-11"
                      class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/60 dark:border-slate-700/60 transition-colors text-left group/class"
                    >
                      <div class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover/class:text-blue-600 dark:group-hover/class:text-blue-400">
                        Class 11
                      </div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400">
                        ${c11ChaptersCount} Chapters
                      </div>
                    </a>

                    <a
                      href="#chapterwise-mcqs/${subject.id}/class-12"
                      class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/60 dark:border-slate-700/60 transition-colors text-left group/class"
                    >
                      <div class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover/class:text-blue-600 dark:group-hover/class:text-blue-400">
                        Class 12
                      </div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400">
                        ${c12ChaptersCount} Chapters
                      </div>
                    </a>
                  </div>
                </div>

                <div class="p-6 pt-0 space-y-2">
                  <div class="flex items-center justify-between text-[11px] border-t border-slate-100 dark:border-slate-800 pt-3">
                    <span class="text-slate-400">MCQ Status</span>
                    ${
                      ch1QuestionCount > 0
                        ? `<span class="text-emerald-600 dark:text-emerald-400 font-bold">${ch1QuestionCount} Questions in Ch 1</span>`
                        : `<span class="text-amber-600 dark:text-amber-400 font-semibold">No questions added yet</span>`
                    }
                  </div>

                  <a
                    href="${subjectPath}"
                    class="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Practice ${subject.name} MCQs</span>
                    <span>→</span>
                  </a>
                </div>

              </div>
            `;
            })
            .join('')}
        </div>
      </section>

      <!-- Step 2: All Chapters Directory with Live Search Filter -->
      <section class="space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              2. Explore Chapters (${totalAllChapters})
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Select any chapter to access its dedicated MCQ practice module
            </p>
          </div>

          <!-- Subject Filter Pills & Search Input -->
          <div class="flex items-center gap-2">
            <div class="relative w-full sm:w-64">
              <input
                id="mcq-chapter-search-input"
                type="text"
                placeholder="Search chapter..."
                class="w-full px-3.5 py-2 pl-9 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-slate-900 dark:text-white"
              />
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Subject tabs for instant filtering -->
        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            data-filter-subject="all"
            class="mcq-subject-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-xs cursor-pointer transition-colors"
          >
            All Subjects (${totalAllChapters})
          </button>
          <button
            type="button"
            data-filter-subject="physics"
            class="mcq-subject-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors"
          >
            Physics (29)
          </button>
          <button
            type="button"
            data-filter-subject="chemistry"
            class="mcq-subject-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors"
          >
            Chemistry (22)
          </button>
          <button
            type="button"
            data-filter-subject="biology"
            class="mcq-subject-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors"
          >
            Biology (32)
          </button>
        </div>

        <!-- Chapters List Grid -->
        <div id="mcq-chapters-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${renderAllChaptersCards()}
        </div>

      </section>

    </div>
  `;
}

/**
 * Helper to render all chapters cards for the directory
 */
function renderAllChaptersCards(filterSubject: string = 'all', searchKeyword: string = ''): string {
  const allEntries = Object.entries(CHAPTERS).map(([id, ch]) => {
    const classification = CLASSIFICATIONS[ch.classificationId];
    const subjectId = classification?.subjectId || (id.startsWith('phys-') ? 'physics' : (id.startsWith('chem-') ? 'chemistry' : 'biology'));
    const subject = SUBJECTS.find(s => s.id === subjectId);
    const classLevel = classification?.classLevel || 'class-11';

    return {
      id,
      chapter: ch,
      subjectId,
      subjectName: subject?.name || 'Subject',
      classLevel,
      classBadgeText: classLevel === 'class-11' ? 'Class 11' : 'Class 12'
    };
  });

  const filtered = allEntries.filter(entry => {
    if (filterSubject !== 'all' && entry.subjectId !== filterSubject) {
      return false;
    }
    if (searchKeyword) {
      const matchTitle = entry.chapter.title.toLowerCase().includes(searchKeyword.toLowerCase());
      const matchSubject = entry.subjectName.toLowerCase().includes(searchKeyword.toLowerCase());
      return matchTitle || matchSubject;
    }
    return true;
  });

  if (filtered.length === 0) {
    return `
      <div class="col-span-full p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 text-xs">
        No chapters found matching "${searchKeyword}".
      </div>
    `;
  }

  return filtered
    .map(({ id, chapter, subjectId, subjectName, classLevel, classBadgeText }) => {
      const practicePath = `#chapterwise-mcqs/${subjectId}/${classLevel}/${id}`;
      const chapterQCount = ChapterwiseMcqService.getQuestionCount(id);
      const isPopulated = chapterQCount > 0;

      return `
      <a
        href="${practicePath}"
        data-subject-id="${subjectId}"
        class="mcq-chapter-card group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 hover-card-lift"
      >
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${
              subjectId === 'physics'
                ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60'
                : subjectId === 'chemistry'
                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60'
                : 'bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60'
            }">
              ${subjectName} • ${classBadgeText}
            </span>

            ${
              isPopulated
                ? `
              <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                ✓ ${chapterQCount} MCQs Ready
              </span>
            `
                : `
              <span class="px-2 py-0.5 rounded-md text-[10px] font-medium bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/80 dark:border-amber-800">
                No questions added yet
              </span>
            `
            }
          </div>

          <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            ${chapter.title}
          </h3>
        </div>

        <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
          <span class="text-slate-400 font-medium">
            ${chapter.topicIds.length} Topics
          </span>
          <span class="font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
            <span>${isPopulated ? `Start Practice (${chapterQCount})` : 'MCQ Practice'}</span>
            <span>→</span>
          </span>
        </div>
      </a>
    `;
    })
    .join('');
}

/**
 * Attaches all event listeners for Chapterwise MCQ view and interactive practice engine
 */
export function attachChapterwiseMcqsEvents(): void {
  // Clean up any existing window scroll listener and resize observer from prior chapter/view
  if (activeVirtualState.scrollListener) {
    window.removeEventListener('scroll', activeVirtualState.scrollListener);
    activeVirtualState.scrollListener = null;
  }
  if (activeVirtualState.resizeObserver) {
    activeVirtualState.resizeObserver.disconnect();
    activeVirtualState.resizeObserver = null;
  }

  // 1. Initial math rendering for visible items
  const itemsWrapper = document.getElementById('mcq-virtual-items-wrapper');
  if (itemsWrapper) {
    setTimeout(() => {
      renderMath(itemsWrapper);
    }, 30);
  } else {
    setTimeout(() => {
      renderMath();
    }, 50);
  }

  // 2. Directory Search and Subject Filter Tabs
  const searchInput = document.getElementById('mcq-chapter-search-input') as HTMLInputElement | null;
  const grid = document.getElementById('mcq-chapters-grid');
  const filterBtns = document.querySelectorAll('.mcq-subject-filter-btn');

  let currentSubject = 'all';
  let currentSearch = '';

  const updateGrid = () => {
    if (!grid) return;
    grid.innerHTML = renderAllChaptersCards(currentSubject, currentSearch);
    attachCardHoverPrefetch();
  };

  const attachCardHoverPrefetch = () => {
    document.querySelectorAll<HTMLAnchorElement>('.mcq-chapter-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        const href = card.getAttribute('href') || '';
        const match = href.match(/class-\d+\/([a-z0-9\-]+)/);
        if (match && match[1]) {
          ChapterwiseMcqService.loadChapterQuestions(match[1]);
        }
      }, { once: true });
    });
  };
  attachCardHoverPrefetch();

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentSearch = (e.target as HTMLInputElement).value.trim();
      updateGrid();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const subject = btn.getAttribute('data-filter-subject') || 'all';
      currentSubject = subject;

      filterBtns.forEach(b => {
        b.className =
          'mcq-subject-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors';
      });
      btn.className =
        'mcq-subject-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-xs cursor-pointer transition-colors';

      updateGrid();
    });
  });

  const updateSpacersOnly = () => {
    const cont = document.getElementById('mcq-virtual-scroll-container');
    const topSpacer = document.getElementById('mcq-virtual-top-spacer');
    const bottomSpacer = document.getElementById('mcq-virtual-bottom-spacer');
    if (!cont || !topSpacer || !bottomSpacer) return;

    const offsets = activeVirtualState.offsets;
    const start = activeVirtualState.startIndex;
    const end = activeVirtualState.endIndex;
    const total = activeVirtualState.totalHeight;

    topSpacer.style.height = `${offsets[start] || 0}px`;
    bottomSpacer.style.height = `${Math.max(0, total - (offsets[end] || 0))}px`;
    cont.style.minHeight = `${total}px`;
  };

  // 3. Precision Variable-Height Virtual Scrolling for Continuous MCQ Bank
  const container = document.getElementById('mcq-virtual-scroll-container');
  if (container) {
    // Clean up any existing window scroll listener and resize observer
    if (activeVirtualState.scrollListener) {
      window.removeEventListener('scroll', activeVirtualState.scrollListener);
      activeVirtualState.scrollListener = null;
    }
    if (activeVirtualState.resizeObserver) {
      activeVirtualState.resizeObserver.disconnect();
      activeVirtualState.resizeObserver = null;
    }

    const difficultyColors: Record<string, string> = {
      Easy: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      Medium: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      Hard: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200 dark:border-rose-800'
    };

    // ResizeObserver to dynamically record question card heights and keep offsets precise
    const ro = new ResizeObserver((entries) => {
      let anyChanged = false;
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        const qId = el.getAttribute('data-question-id');
        if (qId) {
          const h = Math.round(el.getBoundingClientRect().height);
          const prev = activeVirtualState.measuredHeights.get(qId);
          if (h > 100 && (!prev || Math.abs(prev - h) > 3)) {
            activeVirtualState.measuredHeights.set(qId, h);
            anyChanged = true;
          }
        }
      }
      if (anyChanged) {
        recalculateVirtualOffsets(engineState.chapterId);
        updateSpacersOnly();
      }
    });
    activeVirtualState.resizeObserver = ro;

    // Observe initially rendered cards
    const initialCards = container.querySelectorAll<HTMLElement>('.mcq-question-card');
    initialCards.forEach(card => ro.observe(card));

    let ticking = false;
    const updateVirtualSlice = () => {
      const cont = document.getElementById('mcq-virtual-scroll-container');
      const wrapper = document.getElementById('mcq-virtual-items-wrapper');
      const topSpacer = document.getElementById('mcq-virtual-top-spacer');
      const bottomSpacer = document.getElementById('mcq-virtual-bottom-spacer');
      if (!cont || !wrapper || !topSpacer || !bottomSpacer) return;

      const total = activeVirtualState.filteredQuestions.length;
      if (total === 0) return;

      // Calculate container document top coordinate
      const contRect = cont.getBoundingClientRect();
      const contDocTop = contRect.top + window.scrollY;
      const relativeScroll = Math.max(0, window.scrollY - contDocTop);
      const viewportHeight = window.innerHeight || 800;

      // Use precision binary search across offsets
      const firstVisible = findIndexAtOffset(relativeScroll);
      const lastVisible = findIndexAtOffset(relativeScroll + viewportHeight);

      // Buffer window calculation
      const targetStart = Math.max(0, firstVisible - BUFFER_BEFORE);
      const targetEnd = Math.min(total, lastVisible + 1 + BUFFER_AFTER);

      const curStart = activeVirtualState.startIndex;
      const curEnd = activeVirtualState.endIndex;

      // Hysteresis: only adjust window if visible questions get within 2 items of rendered boundary
      const needsAdjustment =
        (firstVisible < curStart + 2 && curStart > 0) ||
        (lastVisible > curEnd - 3 && curEnd < total) ||
        (targetStart !== curStart && Math.abs(targetStart - curStart) >= 3) ||
        (targetEnd !== curEnd && Math.abs(targetEnd - curEnd) >= 3);

      if (!needsAdjustment) return;

      activeVirtualState.startIndex = targetStart;
      activeVirtualState.endIndex = targetEnd;

      const progress = ChapterwiseMcqService.getProgress(engineState.chapterId);
      const checkedMap = progress.checkedQuestions || {};
      const newSlice = activeVirtualState.filteredQuestions.slice(targetStart, targetEnd);

      // Check if old window and new window overlap
      const hasOverlap = targetStart < curEnd && targetEnd > curStart;

      if (!hasOverlap) {
        // Complete jump: full replacement
        ro.disconnect();
        wrapper.innerHTML = newSlice
          .map(q => renderQuestionCard(q, progress, checkedMap, engineState, difficultyColors))
          .join('');
        wrapper.querySelectorAll<HTMLElement>('.mcq-question-card').forEach(card => ro.observe(card));
        renderMath(wrapper);
      } else {
        // Incremental smooth slide: preserve existing DOM nodes to prevent jumps and layout thrashing
        // 1. Remove cards that slid out of top
        if (targetStart > curStart) {
          for (let i = curStart; i < targetStart; i++) {
            const q = activeVirtualState.filteredQuestions[i];
            if (q) {
              const el = document.getElementById(`question-block-${q.id}`);
              if (el) {
                ro.unobserve(el);
                el.remove();
              }
            }
          }
        }

        // 2. Remove cards that slid out of bottom
        if (targetEnd < curEnd) {
          for (let i = targetEnd; i < curEnd; i++) {
            const q = activeVirtualState.filteredQuestions[i];
            if (q) {
              const el = document.getElementById(`question-block-${q.id}`);
              if (el) {
                ro.unobserve(el);
                el.remove();
              }
            }
          }
        }

        const newlyAddedCards: HTMLElement[] = [];

        // 3. Prepend cards that entered from top
        if (targetStart < curStart) {
          const firstOldCard = wrapper.firstElementChild;
          for (let i = targetStart; i < curStart; i++) {
            const q = activeVirtualState.filteredQuestions[i];
            if (q && !document.getElementById(`question-block-${q.id}`)) {
              const cardHTML = renderQuestionCard(q, progress, checkedMap, engineState, difficultyColors);
              const tempDiv = document.createElement('div');
              tempDiv.innerHTML = cardHTML;
              const newCard = tempDiv.firstElementChild as HTMLElement;
              if (newCard) {
                if (firstOldCard) {
                  wrapper.insertBefore(newCard, firstOldCard);
                } else {
                  wrapper.appendChild(newCard);
                }
                ro.observe(newCard);
                newlyAddedCards.push(newCard);
              }
            }
          }
        }

        // 4. Append cards that entered from bottom
        if (targetEnd > curEnd) {
          for (let i = curEnd; i < targetEnd; i++) {
            const q = activeVirtualState.filteredQuestions[i];
            if (q && !document.getElementById(`question-block-${q.id}`)) {
              const cardHTML = renderQuestionCard(q, progress, checkedMap, engineState, difficultyColors);
              const tempDiv = document.createElement('div');
              tempDiv.innerHTML = cardHTML;
              const newCard = tempDiv.firstElementChild as HTMLElement;
              if (newCard) {
                wrapper.appendChild(newCard);
                ro.observe(newCard);
                newlyAddedCards.push(newCard);
              }
            }
          }
        }

        // Render math only for newly inserted cards
        newlyAddedCards.forEach(card => renderMath(card));
      }

      updateSpacersOnly();
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        updateVirtualSlice();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    activeVirtualState.scrollListener = onScroll;
  }

  // 4. Delegated Event Handler for all interactive MCQ components inside the continuous view
  const engineWrapper = document.getElementById('mcq-engine-wrapper');
  if (engineWrapper) {
    engineWrapper.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;

      // A. Option Button Clicked
      const optBtn = target.closest<HTMLButtonElement>('.mcq-option-btn');
      if (optBtn) {
        e.preventDefault();
        e.stopPropagation();

        const qId = optBtn.getAttribute('data-question-id');
        const optKey = optBtn.getAttribute('data-option-key') as 'A' | 'B' | 'C' | 'D';
        if (!qId || !optKey) return;

        const currentChapterId = engineState.chapterId || 'units-measurements';
        const progress = ChapterwiseMcqService.getProgress(currentChapterId);
        if (progress.checkedQuestions?.[qId] || optBtn.disabled) return;

        // Persist draft selection
        engineState.selectedOptions[qId] = optKey;
        ChapterwiseMcqService.saveDraftSelection(currentChapterId, qId, optKey);

        // Update option buttons state in this card
        const parentContainer = optBtn.closest('.mcq-options-container');
        if (parentContainer) {
          const siblingButtons = parentContainer.querySelectorAll<HTMLButtonElement>('.mcq-option-btn');
          siblingButtons.forEach(sBtn => {
            const sKey = sBtn.getAttribute('data-option-key');
            const badge = sBtn.querySelector('.mcq-option-badge');
            if (sKey === optKey) {
              sBtn.className =
                'mcq-option-btn w-full min-h-[52px] text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-3.5 sm:gap-4 box-border max-w-full cursor-pointer bg-blue-50 dark:bg-blue-950/50 border-blue-500 text-blue-900 dark:text-blue-100 shadow-xs ring-2 ring-blue-500/20 font-medium';
              if (badge) {
                badge.className =
                  'mcq-option-badge w-8 h-8 min-w-[32px] rounded-xl flex items-center justify-center shrink-0 font-bold text-sm pointer-events-none bg-blue-600 text-white shadow-xs';
              }
            } else {
              sBtn.className =
                'mcq-option-btn w-full min-h-[52px] text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-3.5 sm:gap-4 box-border max-w-full cursor-pointer bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 text-slate-800 dark:text-slate-200';
              if (badge) {
                badge.className =
                  'mcq-option-badge w-8 h-8 min-w-[32px] rounded-xl flex items-center justify-center shrink-0 font-bold text-sm pointer-events-none bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
              }
            }
          });
        }

        // Activate Check Answer button
        const questionCard = optBtn.closest('.mcq-question-card');
        if (questionCard) {
          const checkBtn = questionCard.querySelector<HTMLButtonElement>('.mcq-check-answer-btn');
          if (checkBtn) {
            checkBtn.disabled = false;
            checkBtn.className =
              'mcq-check-answer-btn px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white shadow-sm cursor-pointer';
            const helperText = questionCard.querySelector('.mcq-status-helper-text');
            if (helperText) {
              helperText.textContent = `Option ${optKey} selected — click Check Answer to evaluate`;
            }
          }
        }
        return;
      }

      // B. Check Answer Button Clicked
      const checkBtn = target.closest<HTMLButtonElement>('.mcq-check-answer-btn');
      if (checkBtn) {
        e.preventDefault();
        e.stopPropagation();

        const qId = checkBtn.getAttribute('data-check-answer');
        if (!qId) return;

        const currentChapterId = engineState.chapterId || 'units-measurements';
        const allQuestions = ChapterwiseMcqService.getQuestions(currentChapterId);
        let questionData = allQuestions.find(item => item.id === qId);
        if (!questionData) return;
        questionData = ChapterwiseMcqService.normalizeQuestion(questionData, currentChapterId);

        const progress = ChapterwiseMcqService.getProgress(currentChapterId);
        const chosenOption = engineState.selectedOptions[qId] || progress.draftSelections?.[qId];
        if (!chosenOption) return;

        try {
          // Evaluate question and sync to mistake book
          const checkResult = ChapterwiseMcqService.checkAnswer(currentChapterId, qId, chosenOption);
          const isCorrect = checkResult.isCorrect;
          const updatedProgress = checkResult.progress;

          const questionCard = document.getElementById(`question-block-${qId}`);
          if (questionCard) {
            questionCard.className = `mcq-card-container mcq-question-card w-full max-w-full rounded-3xl bg-white dark:bg-slate-900 ${
              isCorrect
                ? 'border-2 border-emerald-500/80 dark:border-emerald-500/80 shadow-xs'
                : 'border-2 border-rose-500/80 dark:border-rose-500/80 shadow-xs'
            } shadow-sm overflow-hidden box-border`;

            const headerBadges = questionCard.querySelector('.mcq-header-badges');
            if (headerBadges) {
              const oldStatusBadge = headerBadges.querySelector('.mcq-status-badge');
              if (oldStatusBadge) oldStatusBadge.remove();
              headerBadges.insertAdjacentHTML(
                'beforeend',
                `<span class="mcq-status-badge px-3 py-1 rounded-full text-xs font-black ${
                  isCorrect
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                    : 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-700'
                }">${isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>`
              );
            }

            const optBtns = questionCard.querySelectorAll<HTMLButtonElement>('.mcq-option-btn');
            optBtns.forEach(optB => {
              optB.disabled = true;
              const optK = optB.getAttribute('data-option-key');
              const isThisSelected = optK === chosenOption;
              const isThisCorrect = optK === questionData.correctAnswer;
              const badge = optB.querySelector('.mcq-option-badge');

              if (isThisCorrect) {
                optB.className =
                  'mcq-option-btn w-full min-h-[52px] text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-3.5 sm:gap-4 box-border max-w-full cursor-default bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-medium shadow-xs';
                if (badge) {
                  badge.className =
                    'mcq-option-badge w-8 h-8 min-w-[32px] rounded-xl flex items-center justify-center shrink-0 font-bold text-sm pointer-events-none bg-emerald-600 text-white shadow-xs';
                }
                if (!optB.querySelector('.mcq-indicator-correct')) {
                  optB.insertAdjacentHTML(
                    'beforeend',
                    '<span class="mcq-indicator-correct text-emerald-600 dark:text-emerald-400 font-bold text-sm pt-1 pointer-events-none shrink-0">✓ Correct</span>'
                  );
                }
              } else if (isThisSelected && !isCorrect) {
                optB.className =
                  'mcq-option-btn w-full min-h-[52px] text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-3.5 sm:gap-4 box-border max-w-full cursor-default bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 font-medium';
                if (badge) {
                  badge.className =
                    'mcq-option-badge w-8 h-8 min-w-[32px] rounded-xl flex items-center justify-center shrink-0 font-bold text-sm pointer-events-none bg-rose-600 text-white shadow-xs';
                }
                if (!optB.querySelector('.mcq-indicator-wrong')) {
                  optB.insertAdjacentHTML(
                    'beforeend',
                    '<span class="mcq-indicator-wrong text-rose-600 dark:text-rose-400 font-bold text-sm pt-1 pointer-events-none shrink-0">✗ Your Choice (-1)</span>'
                  );
                }
              } else {
                optB.className =
                  'mcq-option-btn w-full min-h-[52px] text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-3.5 sm:gap-4 box-border max-w-full cursor-default bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60 text-slate-600 dark:text-slate-400';
                if (badge) {
                  badge.className =
                    'mcq-option-badge w-8 h-8 min-w-[32px] rounded-xl flex items-center justify-center shrink-0 font-bold text-sm pointer-events-none bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
                }
              }
            });

            const actionContainer = questionCard.querySelector('.mcq-action-container');
            if (actionContainer) {
              actionContainer.innerHTML = renderCheckedResultAndSolution(questionData, isCorrect);
              renderMath(actionContainer as HTMLElement);
            }

            // Immediately remeasure card height and update virtualizer spacers
            const cardHeight = Math.round(questionCard.getBoundingClientRect().height);
            if (cardHeight > 100) {
              activeVirtualState.measuredHeights.set(qId, cardHeight);
              recalculateVirtualOffsets(currentChapterId);
              updateSpacersOnly();
            }
          }

          updateLiveStatsInDOM(updatedProgress, allQuestions.length);
        } catch (err) {
          console.error('[Chapterwise MCQs] Error evaluating answer for question', qId, err);
        }
        return;
      }

      // C. Bookmark Button Clicked
      const bookmarkBtn = target.closest<HTMLButtonElement>('.mcq-bookmark-btn');
      if (bookmarkBtn) {
        e.preventDefault();
        e.stopPropagation();

        const qId = bookmarkBtn.getAttribute('data-bookmark-id');
        if (qId) {
          const currentChapterId = engineState.chapterId || 'units-measurements';
          const isNowBookmarked = ChapterwiseMcqService.toggleBookmark(currentChapterId, qId);
          bookmarkBtn.className = `mcq-bookmark-btn p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
            isNowBookmarked ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' : 'text-slate-400'
          }`;
          bookmarkBtn.innerHTML = `<span>${isNowBookmarked ? '★' : '☆'}</span><span class="hidden sm:inline">${
            isNowBookmarked ? 'Bookmarked' : 'Bookmark'
          }</span>`;
        }
        return;
      }
    });
  }

  // 5. Engine View Re-renderer for filter switches
  const refreshEngineView = () => {
    const appContent = document.getElementById('app-content') || document.getElementById('root');
    if (!appContent) return;
    appContent.innerHTML = renderUnitsPracticeEngine(engineState.chapterId || 'units-measurements');
    attachChapterwiseMcqsEvents();
  };

  // Toast banner for feedback
  const showResetToast = (message: string) => {
    const existing = document.getElementById('mcq-feedback-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'mcq-feedback-toast';
    toast.className =
      'fixed top-6 left-1/2 -translate-x-1/2 z-[9999] px-6 py-3.5 rounded-2xl bg-emerald-700 text-white shadow-2xl border border-emerald-600 text-xs sm:text-sm font-bold flex items-center gap-2.5 animate-fade-in transition-all duration-300 pointer-events-none';
    toast.innerHTML = `<span>✓</span><span>${escapeHtml(message)}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translate(-50%, -10px)';
      setTimeout(() => toast.remove(), 350);
    }, 3200);
  };

  // Execution of the reset: wipes all questions tested back to 0 (fresh state)
  const executeResetChapter = () => {
    const currentChapterId = engineState.chapterId || 'units-measurements';
    ChapterwiseMcqService.resetProgress(currentChapterId);
    engineState.selectedOptions = {};
    engineState.difficultyFilter = 'all';
    engineState.sourceFilter = 'all';
    refreshEngineView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const resetTotalQ = ChapterwiseMcqService.getQuestionCount(currentChapterId);
    showResetToast(`Chapter reset to fresh! All tested questions reset to zero (0/${resetTotalQ}).`);
  };

  // Reset Chapter Handlers (Top and Bottom)
  const retryBtnTop = document.getElementById('mcq-retry-chapter-btn-top');
  if (retryBtnTop) {
    retryBtnTop.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      executeResetChapter();
    });
  }

  const retryBtnBottom = document.getElementById('mcq-retry-chapter-btn-bottom');
  if (retryBtnBottom) {
    retryBtnBottom.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      executeResetChapter();
    });
  }

  // Difficulty Filter Buttons
  const diffFilterBtns = document.querySelectorAll('.mcq-diff-filter-btn');
  diffFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const diff = btn.getAttribute('data-diff-filter') as 'all' | 'Easy' | 'Medium' | 'Hard';
      if (diff) {
        engineState.difficultyFilter = diff;
        window.scrollTo({ top: 0, behavior: 'instant' });
        refreshEngineView();
      }
    });
  });

  // Source Filter Buttons (All, Verified PYQs, Practice)
  const srcFilterBtns = document.querySelectorAll('.mcq-src-filter-btn');
  srcFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-source-filter') as 'all' | 'pyq' | 'practice';
      if (src) {
        engineState.sourceFilter = src;
        window.scrollTo({ top: 0, behavior: 'instant' });
        refreshEngineView();
      }
    });
  });

  // Reset Filters Button
  const resetFiltersBtn = document.getElementById('mcq-reset-filters-btn');
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      engineState.difficultyFilter = 'all';
      engineState.sourceFilter = 'all';
      window.scrollTo({ top: 0, behavior: 'instant' });
      refreshEngineView();
    });
  }
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
