import { TOPICS, CHAPTERS, CLASSIFICATIONS, SUBJECTS } from '../data/neetData'
import { TOPIC_DETAILS } from '../data/topicDetails'
import { StorageService } from '../services/storageService'
import { DetailedTopicContent, TopicNote, PYQuestion, PracticeQuestion, NeetMarksPotential, ConceptVisual } from '../types/neet'
import { renderFormulaHTML, renderInlineMathHTML } from '../utils/mathRenderer'
import { reconcileMarksPotential, normalizePYQRecord, deduplicateAndNormalizePYQs } from '../utils/marksPotentialCalculator'

export function renderTopicView(topicId: string): string {
  const topic = TOPICS[topicId];
  if (!topic) {
    return `<div class="p-8 text-center text-slate-500">Topic not found. <a href="#home" class="text-blue-500 underline">Return Home</a></div>`;
  }

  // Record visited topic for Continue Learning
  StorageService.setLastVisitedTopic(topicId);

  const chapter = CHAPTERS[topic.chapterId];
  const classification = chapter ? CLASSIFICATIONS[chapter.classificationId] : undefined;
  const subject = classification ? SUBJECTS.find(s => s.id === classification.subjectId) : undefined;

  const isBookmarked = StorageService.isBookmarked(topicId);
  const isCompleted = StorageService.isTopicCompleted(topicId);

  // Check if we have rich detailed content in TOPIC_DETAILS architecture
  const detail: DetailedTopicContent | undefined = TOPIC_DETAILS[topicId] ||
    TOPIC_DETAILS[`phys-${topicId}`] ||
    TOPIC_DETAILS[`chem-${topicId}`] ||
    TOPIC_DETAILS[`bio-${topicId}`] ||
    (topicId.startsWith('phys-') || topicId.startsWith('chem-') || topicId.startsWith('bio-')
      ? TOPIC_DETAILS[topicId.replace(/^(phys|chem|bio)-/, '')]
      : undefined);

  // Authoritative single-source deduplicated PYQs array
  const rawPyqs = [...(detail?.pyqs || []), ...(topic?.pyqs || [])];
  const pyqs = deduplicateAndNormalizePYQs(rawPyqs);

  return `
    <article class="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 pb-16 font-sans text-slate-900 dark:text-slate-100 min-w-0" id="topic-reader-root">
      
      <!-- Topic Main Header & Meta -->
      <header class="space-y-5 p-4 sm:p-6 lg:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all min-w-0">
        
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap items-center gap-2 text-xs font-bold min-w-0">
            ${subject ? `
              <a href="#subject/${subject.id}" class="px-3 py-1 rounded-full border ${subject.badgeColor} hover:opacity-80 transition-opacity">
                ${subject.name}
              </a>
            ` : ''}
            ${classification ? `
              <span class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                ${classification.title}
              </span>
            ` : ''}
            ${chapter ? `
              <span class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                ${chapter.title}
              </span>
            ` : ''}
            <span class="px-2.5 py-1 rounded-full ${topic.importanceWeight === 'High Yield' ? 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20' : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'}">
              ${topic.importanceWeight}
            </span>
          </div>

          <!-- Actions: Bookmark & Complete -->
          <div class="flex flex-wrap items-center gap-2">
            <button id="btn-toggle-bookmark" data-topic-id="${topic.id}" class="px-3 py-2 rounded-xl border ${isBookmarked ? 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'} text-xs font-bold transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500">
              <span>${isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}</span>
            </button>

            <button id="btn-toggle-complete" data-topic-id="${topic.id}" class="px-3 py-2 rounded-xl border ${isCompleted ? 'bg-emerald-500 text-white border-emerald-600' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'} text-xs font-bold transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <span>${isCompleted ? '✓ Completed' : 'Mark as Complete'}</span>
            </button>
          </div>
        </div>

        <div class="space-y-2 min-w-0">
          <h1 class="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-slate-900 dark:text-slate-100">
            ${topic.title}
          </h1>
          <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            ${topic.summary}
          </p>
        </div>

        <div class="pt-3 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 min-w-0">
          <div class="flex flex-wrap items-center gap-2 sm:gap-3">
            <span>⏱️ ${topic.estimatedReadTimeMinutes} min read</span>
            <span>•</span>
            <span>🎯 ${pyqs.length} Verified NEET PYQs</span>
            <span>•</span>
            <span class="text-emerald-600 dark:text-emerald-400 font-bold">EL10 • NEET Focused</span>
          </div>

          <!-- Quick Jump Buttons / Reading Mode Controls -->
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-[11px] text-slate-400">Quick Jump:</span>
            <a href="#section-revision" class="px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 hover:bg-teal-100 transition-colors font-bold">
              🔄 Quick Revision
            </a>
            <a href="#section-practice" class="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 transition-colors font-bold">
              📝 Practice
            </a>
          </div>
        </div>

      </header>

      ${detail ? renderDetailedContent(detail, topic, pyqs) : renderFallbackContent(topic, pyqs)}

    </article>
  `;
}

function renderDetailedContent(detail: DetailedTopicContent, topic: any, pyqs: PYQuestion[]): string {
  const marksPotentialHtml = renderMarksPotentialSection(detail.neetMarksPotential, detail.topicName || topic.title, pyqs);

  const basicIdea = detail.basicIdea || [];
  const importantTerms = detail.importantTerms || [];
  const conceptExplanation = detail.conceptExplanation || [];
  const neetImportantPoints = detail.neetImportantPoints || (detail as any).ncertHighYieldFacts || [];
  const commonConfusions = detail.commonConfusions || (detail as any).neetTraps || [];
  const quickRevision = detail.quickRevision || [];
  const practiceQuestions = detail.practiceQuestions || (detail as any).practiceCards || [];

  return `
      <!-- 1. WHAT IS THIS TOPIC & BASIC IDEA -->
    <section id="section-intro" aria-labelledby="heading-section-intro" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
      <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xl shrink-0">
          📖
        </div>
        <div>
          <h2 id="heading-section-intro" class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            1. What is this Topic? & Core Basic Idea
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            EL10 Approach: Building the core concept from zero with complete scientific accuracy.
          </p>
        </div>
      </div>

      <!-- Intro article passage -->
      <article id="passage-topic-intro" class="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-500/20 space-y-2">
        <h3 class="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
          💡 Core Topic Definition & Overview
        </h3>
        <p class="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
          ${detail.whatIsThisTopic || topic.summary || ''}
        </p>
      </article>

      <!-- Basic Idea points -->
      <div class="space-y-3">
        <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
          Fundamental Conceptual Pillars:
        </h3>
        ${basicIdea.map((idea, idx) => `
          <article id="passage-pillar-${idx + 1}" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            ${idea}
          </article>
        `).join('')}
      </div>
    </section>

    <!-- 2. IMPORTANT TERMS & DEFINITIONS (SEMANTIC PASSAGE STRUCTURE) -->
    <section id="section-terms" aria-labelledby="heading-section-terms" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
      <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xl shrink-0">
          🔤
        </div>
        <div>
          <h2 id="heading-section-terms" class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            2. Important Terms & High-Yield Definitions
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Every technical scientific term defined with precision for NEET UG.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4">
        ${importantTerms.map((t, idx) => {
          const termSlug = `def-${(t.term || `term-${idx}`).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
          return `
          <article id="${termSlug}" class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5 scroll-mt-20 group relative" itemscope itemtype="https://schema.org/DefinedTerm">
            <div class="flex items-center justify-between gap-2">
              <h3 class="text-sm sm:text-base font-bold text-purple-700 dark:text-purple-300 flex items-center gap-1.5" itemprop="name">
                <span>${renderInlineMathHTML(t.term)} Definition</span>
                <a href="#${termSlug}" class="opacity-0 group-hover:opacity-100 text-purple-400 hover:text-purple-600 transition-opacity text-xs" title="Direct Link">🔗</a>
              </h3>
              ${t.symbol ? `
                <span class="px-2.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-bold">
                  Symbol: ${renderInlineMathHTML(t.symbol)}
                </span>
              ` : ''}
            </div>
            <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium" itemprop="description">
              <strong class="font-bold text-slate-900 dark:text-slate-100">Scientific Definition:</strong> ${renderInlineMathHTML(t.definition)}
            </p>
            ${t.neetNote ? `
              <p class="text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-500/20">
                💡 <strong class="font-bold">NEET Application:</strong> ${renderInlineMathHTML(t.neetNote)}
              </p>
            ` : ''}
          </article>
        `;
        }).join('')}
      </div>
    </section>

    <!-- 3. CONCEPT EXPLANATION -->
    <section id="section-explanation" aria-labelledby="heading-section-explanation" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
      <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xl shrink-0">
          🧠
        </div>
        <div>
          <h2 id="heading-section-explanation" class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            3. Concept Explanation (Step-by-Step)
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Complete explanation of the selected syllabus topic.
          </p>
        </div>
      </div>

      <div class="space-y-6">
        ${conceptExplanation.map((sec, idx) => {
          const conceptVisuals: ConceptVisual[] = sec.visuals || (sec.visual ? [sec.visual] : []);
          const paragraphs: string[] = sec.paragraphs || (sec as any).subpoints || (sec as any).points || (sec as any).content || [];
          const formulas = sec.formulas || [];
          const examples = sec.examples || [];
          const secPoints = sec.importantPoints || [];
          const secSlug = `concept-passage-${(sec.heading || `part-${idx}`).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
          return `
            <article id="${secSlug}" class="space-y-4 p-5 sm:p-6 rounded-2xl bg-indigo-50/30 dark:bg-indigo-950/20 border border-indigo-500/20 shadow-xs scroll-mt-20">
              <h3 class="text-sm sm:text-base font-bold text-indigo-900 dark:text-indigo-300">
                ${renderInlineMathHTML(sec.heading)}
              </h3>
              
              ${paragraphs.length > 0 ? `
                <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  ${paragraphs.map(p => `
                    <div class="bg-white/80 dark:bg-slate-900/80 p-3.5 sm:p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/50 shadow-2xs">
                      ${renderInlineMathHTML(p)}
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              <!-- Contextual Visual Diagram(s) Embedded Directly Inside Concept -->
              ${conceptVisuals.length > 0 ? `
                <div class="space-y-4 pt-2">
                  ${conceptVisuals.map(v => `
                    <div class="p-3.5 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                      ${v.svgContent ? `
                        <div class="p-2 sm:p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-200/80 dark:border-slate-800 overflow-x-auto shadow-xs">
                          ${v.svgContent}
                        </div>
                      ` : ''}
                      ${v.caption ? `
                        <div class="p-3.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200 font-medium leading-relaxed">
                          💡 <span class="font-bold">Diagram Guide:</span> ${renderInlineMathHTML(v.caption)}
                          ${v.guide ? `<div class="mt-1.5 text-xs text-slate-700 dark:text-slate-300 font-normal border-t border-indigo-200 dark:border-indigo-800/60 pt-1.5">${renderInlineMathHTML(v.guide)}</div>` : ''}
                        </div>
                      ` : ''}
                      ${v.tableData ? `
                        <div class="overflow-x-auto rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-white dark:bg-slate-900">
                          <table class="w-full text-left text-xs sm:text-sm">
                            <thead class="bg-indigo-50 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-200 font-bold border-b border-indigo-200 dark:border-indigo-800/60">
                              <tr>
                                ${(v.tableData.headers || []).map(h => `<th class="p-2.5 sm:p-3">${renderInlineMathHTML(h)}</th>`).join('')}
                              </tr>
                            </thead>
                            <tbody class="divide-y divide-indigo-100 dark:divide-indigo-900/40 text-slate-800 dark:text-slate-200 font-medium">
                              ${(v.tableData.rows || []).map(row => `
                                <tr class="hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-colors">
                                  ${(row || []).map(cell => `<td class="p-2.5 sm:p-3 whitespace-nowrap">${renderInlineMathHTML(cell)}</td>`).join('')}
                                </tr>
                              `).join('')}
                            </tbody>
                          </table>
                        </div>
                      ` : ''}
                      ${v.flowchartSteps ? `
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
                          ${(v.flowchartSteps || []).map((s, idx) => `
                            <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1 text-xs shadow-2xs">
                              <div class="font-bold text-indigo-700 dark:text-indigo-300">Step ${idx + 1}: ${renderInlineMathHTML(s.step)}</div>
                              ${s.arrowText ? `<div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">${renderInlineMathHTML(s.arrowText)}</div>` : ''}
                              <div class="text-slate-600 dark:text-slate-300 text-[11px] leading-normal">${renderInlineMathHTML(s.detail)}</div>
                            </div>
                          `).join('')}
                        </div>
                      ` : ''}
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              <!-- Direct Section Tables -->
              ${(sec.tables && sec.tables.length > 0) ? `
                <div class="space-y-3 pt-2">
                  ${sec.tables.map(tbl => `
                    <div class="overflow-x-auto rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-white dark:bg-slate-900 shadow-2xs">
                      ${(tbl as any).title ? `<div class="p-3 font-bold text-xs sm:text-sm text-indigo-900 dark:text-indigo-300 bg-indigo-50/60 dark:bg-indigo-950/40 border-b border-indigo-200 dark:border-indigo-800/60">${renderInlineMathHTML((tbl as any).title)}</div>` : ''}
                      <table class="w-full text-left text-xs sm:text-sm">
                        <thead class="bg-indigo-50 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-200 font-bold border-b border-indigo-200 dark:border-indigo-800/60">
                          <tr>
                            ${(tbl.headers || []).map(h => `<th class="p-2.5 sm:p-3">${renderInlineMathHTML(h)}</th>`).join('')}
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-indigo-100 dark:divide-indigo-900/40 text-slate-800 dark:text-slate-200 font-medium">
                          ${(tbl.rows || []).map(row => `
                            <tr class="hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-colors">
                              ${(row || []).map(cell => `<td class="p-2.5 sm:p-3 whitespace-normal">${renderInlineMathHTML(cell)}</td>`).join('')}
                            </tr>
                          `).join('')}
                        </tbody>
                      </table>
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              <!-- Embedded Concept Formulas -->
              ${formulas.length > 0 ? `
                <div class="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2 text-xs sm:text-sm">
                  <div class="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-[11px]">📐 Key Equation:</div>
                  ${formulas.map(f => typeof f === 'string' ? renderFormulaHTML(f) : renderFormulaHTML(f.formula || (f as any).expression || '')).join('')}
                </div>
              ` : ''}

              <!-- Embedded Concept Examples -->
              ${examples.length > 0 ? `
                <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2 text-xs sm:text-sm">
                  <div class="font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider text-[11px]">📝 Worked Concept Example:</div>
                  ${examples.map(ex => `
                    <div class="space-y-1.5 text-slate-800 dark:text-slate-200">
                      <p class="font-semibold text-slate-900 dark:text-slate-100">${renderInlineMathHTML(ex.problem)}</p>
                      ${ex.given ? `<p class="text-xs text-slate-500 dark:text-slate-400 italic">${renderInlineMathHTML(ex.given)}</p>` : ''}
                      ${ex.stepByStep ? `
                        <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                          ${(ex.stepByStep || []).map(s => `<div>${renderInlineMathHTML(s)}</div>`).join('')}
                        </div>
                      ` : ex.solution ? `<p class="text-xs">${renderInlineMathHTML(ex.solution)}</p>` : ''}
                      ${ex.answer ? `<p class="font-bold text-amber-600 dark:text-amber-400 text-right text-xs">Answer: ${renderInlineMathHTML(ex.answer)}</p>` : ''}
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              <!-- Embedded Important Points -->
              ${secPoints.length > 0 ? `
                <div class="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-1 text-xs">
                  <div class="font-bold text-indigo-800 dark:text-indigo-300">⭐ Key Takeaways:</div>
                  <ul class="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                    ${secPoints.map(pt => `<li>${renderInlineMathHTML(pt)}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}

            </article>
          `;
        }).join('')}
      </div>
    </section>

    <!-- 4. SUMMARY VISUAL MAP & COMPARISON (Rendered only if supplementary summary visual exists) -->
    ${(detail.visualLearning && (detail.visualLearning.svgContent || detail.visualLearning.tableData || detail.visualLearning.flowchartSteps) && !conceptExplanation.some(c => c.visual && c.visual.svgContent === detail.visualLearning?.svgContent)) ? `
      <section id="section-visual" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div class="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-xl shrink-0">
            🖼️
          </div>
          <div>
            <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              4. Visual Summary & Conversion Reference
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              High-yield reference map and comparison table for rapid visual review.
            </p>
          </div>
        </div>

        <!-- Interactive / Responsive SVG Diagram -->
        ${detail.visualLearning.svgContent ? `
          <div class="space-y-3">
            <div class="p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-x-auto">
              ${detail.visualLearning.svgContent}
            </div>
            ${detail.visualLearning.caption ? `
              <div class="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/40 border border-teal-500/20 text-xs sm:text-sm text-teal-900 dark:text-teal-200 leading-relaxed font-medium">
                💡 <span class="font-bold">Diagram Guide:</span> ${renderInlineMathHTML(detail.visualLearning.caption)}
              </div>
            ` : ''}
          </div>
        ` : ''}

        <!-- Comparison Table Section -->
        ${detail.visualLearning.tableData ? `
          <div class="space-y-3 pt-2">
            <h3 class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Comparison Table:
            </h3>
            <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table class="w-full text-left text-xs sm:text-sm">
                <thead class="bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    ${(detail.visualLearning.tableData.headers || []).map(h => `<th class="p-3 sm:p-3.5">${renderInlineMathHTML(h)}</th>`).join('')}
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300 font-medium">
                  ${(detail.visualLearning.tableData.rows || []).map(row => `
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      ${(row || []).map(cell => `<td class="p-3 sm:p-3.5 whitespace-nowrap">${renderInlineMathHTML(cell)}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : ''}

        <!-- Flowchart Steps -->
        ${detail.visualLearning.flowchartSteps ? `
          <div class="space-y-3 pt-2">
            <h3 class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Step-by-Step Conversion Summary:
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${(detail.visualLearning.flowchartSteps || []).map((step, idx) => `
                <div class="p-4 rounded-2xl bg-teal-50/40 dark:bg-teal-950/20 border border-teal-500/20 space-y-1.5 text-center">
                  <span class="w-6 h-6 rounded-full bg-teal-600 text-white font-bold text-xs inline-flex items-center justify-center mb-1">
                    ${idx + 1}
                  </span>
                  <div class="font-bold text-slate-900 dark:text-slate-100 text-sm">
                    ${renderInlineMathHTML(step.step)}
                  </div>
                  ${step.arrowText ? `
                    <div class="text-xs font-semibold text-teal-700 dark:text-teal-300 bg-white dark:bg-slate-800 p-2 rounded-lg border border-teal-500/30">
                      ${renderInlineMathHTML(step.arrowText)}
                    </div>
                  ` : ''}
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">
                    ${renderInlineMathHTML(step.detail)}
                  </p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </section>
    ` : ''}

    <!-- 5. RELEVANT FORMULAE -->
    ${(() => {
      const rawFormulae = detail.formulae || [];
      // Filter & Validate each formula card according to strict validation rules:
      // A card MUST have a valid formula/expression.
      const validFormulae = rawFormulae.map((f: any) => {
        if (typeof f === 'string') {
          return {
            title: 'Key Equation',
            formula: f.trim(),
            meaning: '',
            symbols: '',
            unit: '',
            conditions: '',
            whenToUse: '',
            calculationExample: undefined
          };
        }
        const title = String(f.title || f.formulaName || f.name || 'Key Equation').trim();
        const formula = String(f.formula || f.expression || '').trim();
        const meaning = String(f.meaning || f.whatItRepresents || f.description || '').trim();
        const symbols = String(f.symbols || f.variables || f.where || '').trim();
        const unit = String(f.unit || '').trim();
        const conditions = String(f.conditions || f.note || '').trim();
        const whenToUse = String(f.whenToUse || f.explanation || '').trim();
        const calculationExample = f.calculationExample;

        return { title, formula, meaning, symbols, unit, conditions, whenToUse, calculationExample };
      }).filter(f => f.formula.length > 0);

      if (validFormulae.length === 0) return '';

      return `
        <section id="section-formulae" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xl shrink-0">
              📐
            </div>
            <div>
              <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                5. Relevant Formulae & Step-by-Step Calculations
              </h2>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                Essential equations with symbol definitions, usage rules, and worked syllabus calculations.
              </p>
            </div>
          </div>

          <div class="space-y-6">
            ${validFormulae.map((f, idx) => {
              const formulaSlug = `formula-${f.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || idx}`;
              return `
              <div id="${formulaSlug}" class="p-5 sm:p-6 rounded-2xl bg-emerald-50/20 dark:bg-emerald-950/20 border border-emerald-500/30 space-y-3 scroll-mt-20 group relative transition-all" itemscope itemtype="https://schema.org/Question">
                <div class="flex items-center justify-between gap-2">
                  <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5" itemprop="name">
                    <span>${renderInlineMathHTML(f.title)}</span>
                    <a href="#${formulaSlug}" class="opacity-0 group-hover:opacity-100 text-emerald-500/70 hover:text-emerald-600 transition-opacity text-xs" title="Direct Anchor Link">🔗</a>
                  </h3>
                  ${f.unit ? `<span class="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-mono text-[11px] font-bold">Unit: ${renderInlineMathHTML(f.unit)}</span>` : ''}
                </div>

                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" class="space-y-3">
                  <!-- Formula Box (Centered Textbook Style & Direct Search Extract) -->
                  <div class="formula-passage-target" itemprop="text">
                    ${renderFormulaHTML(f.formula)}
                  </div>

                  ${f.meaning ? `
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <strong class="font-bold text-slate-900 dark:text-slate-100">Formula Definition / Meaning:</strong> ${renderInlineMathHTML(f.meaning)}
                    </p>
                  ` : ''}

                  ${f.symbols ? `
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                      <strong class="font-bold text-slate-800 dark:text-slate-200">Where & Symbols:</strong> ${renderInlineMathHTML(f.symbols)}
                    </p>
                  ` : ''}

                  ${f.conditions ? `
                    <p class="text-xs sm:text-sm text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200 dark:border-amber-900/40">
                      <strong class="font-bold">Conditions & Assumptions:</strong> ${renderInlineMathHTML(f.conditions)}
                    </p>
                  ` : ''}

                  ${f.whenToUse ? `
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-emerald-100/50 dark:bg-emerald-950/50 p-3.5 rounded-xl">
                      <strong class="font-bold">When to use in NEET:</strong> ${renderInlineMathHTML(f.whenToUse)}
                    </p>
                  ` : ''}
                </div>

                ${f.calculationExample ? `
                  <!-- Worked Example Box -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2.5 text-xs sm:text-sm">
                    <div class="font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider text-xs">
                      📝 Syllabus Calculation Example:
                    </div>
                    <p class="font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                      ${renderInlineMathHTML(f.calculationExample.problem)}
                    </p>
                    ${f.calculationExample.given ? `
                      <p class="text-slate-500 dark:text-slate-400 italic">
                        ${renderInlineMathHTML(f.calculationExample.given)}
                      </p>
                    ` : ''}
                    <div class="space-y-1.5 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                      ${(f.calculationExample.stepByStep || []).map(s => `<div class="py-1 border-b border-slate-100 dark:border-slate-800 last:border-0">${renderInlineMathHTML(s)}</div>`).join('')}
                    </div>
                    <p class="font-bold text-emerald-600 dark:text-emerald-400 text-right text-sm sm:text-base pt-1">
                      Answer: ${renderInlineMathHTML(f.calculationExample.answer)}
                    </p>
                  </div>
                ` : ''}
              </div>
            `;
            }).join('')}
          </div>
        </section>
      `;
    })()}

    <!-- 6. NEET IMPORTANT POINTS -->
    <section id="section-neet-points" aria-labelledby="heading-section-neet-points" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
      <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xl shrink-0">
          📌
        </div>
        <div>
          <h2 id="heading-section-neet-points" class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            6. NEET High-Yield Important Points
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            NCERT facts most frequently tested in NEET UG examinations.
          </p>
        </div>
      </div>

      <div class="space-y-3">
        ${neetImportantPoints.map((pt, idx) => `
          <article id="passage-ncert-point-${idx + 1}" class="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-500/30 flex items-start gap-3 scroll-mt-20">
            <span class="text-amber-600 dark:text-amber-400 font-bold shrink-0 mt-0.5">📌</span>
            <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
              <strong class="font-bold text-amber-900 dark:text-amber-300">NCERT Key Fact #${idx + 1}:</strong> ${renderInlineMathHTML(pt)}
            </p>
          </article>
        `).join('')}
      </div>
    </section>

    <!-- 7. COMMON CONFUSIONS -->
    <section id="section-confusions" aria-labelledby="heading-section-confusions" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
      <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div class="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-xl shrink-0">
          ⚠️
        </div>
        <div>
          <h2 id="heading-section-confusions" class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            7. Common Confusions & Negative Mark Traps
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Protect your NEET marks by mastering common student mix-ups.
          </p>
        </div>
      </div>

      <div class="space-y-4">
        ${commonConfusions.map((c: any, idx) => {
          const confusionText = c.commonConfusion || c.misconception || c.trap || '';
          const correctText = c.correctFact || c.correction || c.reality || '';
          const whyText = c.whyItMattersForNEET || c.whyTrap || c.neetImpact || '';
          const trapSlug = `passage-trap-${idx + 1}`;
          return `
            <article id="${trapSlug}" class="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs scroll-mt-20">
              <div class="p-4 bg-red-50 dark:bg-red-950/40 border-b border-red-200 dark:border-red-900/40 text-xs sm:text-sm font-bold text-red-700 dark:text-red-300 flex items-start gap-2">
                <h3 class="font-bold text-xs sm:text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
                  <span class="shrink-0">❌ Common Confusion:</span>
                  <span>${renderInlineMathHTML(confusionText)}</span>
                </h3>
              </div>
              <div class="p-4 bg-emerald-50/60 dark:bg-emerald-950/30 text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-300 flex items-start gap-2 border-b border-emerald-200 dark:border-emerald-900/30">
                <span class="shrink-0">✅ Correct NCERT Fact:</span>
                <span>${renderInlineMathHTML(correctText)}</span>
              </div>
              ${whyText ? `
                <div class="p-3.5 bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-600 dark:text-slate-400 italic">
                  💡 <strong class="font-bold">Why it matters for NEET:</strong> ${renderInlineMathHTML(whyText)}
                </div>
              ` : ''}
            </article>
          `;
        }).join('')}
      </div>
    </section>

    <!-- 8. QUICK REVISION -->
    <section id="section-revision" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
      <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div class="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-xl shrink-0">
          🔄
        </div>
        <div>
          <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            8. Quick Revision Flash-Summary
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            60-second review bullets before attempting practice questions or PYQs.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium">
        ${quickRevision.map(q => `
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-2.5">
            <span class="text-teal-500 font-bold shrink-0 mt-0.5">✓</span>
            <span class="text-slate-800 dark:text-slate-200">${renderInlineMathHTML(q)}</span>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- 9. TOPIC CHECK (Practice Questions) -->
    <section id="section-practice" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md shadow-indigo-500/20">
            📝
          </div>
          <div>
            <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              9. Practice Questions (Topic Check)
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Test your understanding immediately on this topic. (Clearly labeled Practice Questions).
            </p>
          </div>
        </div>

        <span class="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
          ${practiceQuestions.length} Practice Questions
        </span>
      </div>

      <div class="space-y-6">
        ${practiceQuestions.map((pq, idx) => renderPracticeCard(pq, idx)).join('')}
      </div>
    </section>

    <!-- 10. NEET PREVIOUS YEAR QUESTIONS (PYQs) -->
    <section id="section-pyq" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md shadow-blue-500/20">
            🎯
          </div>
          <div>
            <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              10. NEET Previous Year Questions
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Verified NEET exam questions mapped specifically to this topic.
            </p>
          </div>
        </div>

        <span class="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold">
          ${pyqs.length} Verified PYQs
        </span>
      </div>

      <div class="space-y-6">
        ${pyqs.length > 0 ? pyqs.map((pyq, idx) => renderPYQCard(pyq, idx)).join('') : `
          <div class="p-8 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 space-y-2">
            <span class="text-2xl block">📌</span>
            <p class="font-medium text-slate-700 dark:text-slate-300">
              No verified NEET previous-year questions have been added to this topic yet.
            </p>
            <p class="text-xs text-slate-400">
              Only authentic, verified NTA questions will be added to this section in future updates.
            </p>
          </div>
        `}
      </div>
    </section>
  `;
}

function renderFallbackContent(topic: any, pyqs: PYQuestion[]): string {
  const notes: TopicNote = topic.notes || {
    learn: [topic.summary || 'Essential NEET UG syllabus topic.'],
    keyConcepts: [topic.summary || 'Fundamental concept for NEET examination.'],
    formulas: [],
    visualExplanation: undefined,
    neetImportantPoints: [`Official NEET UG 2026 syllabus topic: ${topic.title}`],
    commonConfusions: [],
    quickRevision: [`${topic.title}: Key concept in NEET Syllabus.`]
  };

  const learnList = notes.learn || [];
  const keyConceptsList = notes.keyConcepts || [];
  const formulasList = notes.formulas || [];
  const neetImportantPointsList = notes.neetImportantPoints || [];
  const commonConfusionsList = notes.commonConfusions || [];
  const quickRevisionList = notes.quickRevision || [];

  const marksPotentialHtml = renderMarksPotentialSection(notes.neetMarksPotential, topic.title, pyqs);

  return `
    ${marksPotentialHtml}

    <!-- 1. TOPIC OVERVIEW & IMPORTANCE -->
    <section aria-label="Topic Overview and NEET Significance" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xl shrink-0">
          📌
        </div>
        <div>
          <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            1. Topic Overview & NEET Significance
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Syllabus overview and core scope for ${topic.title}.
          </p>
        </div>
      </div>
      <div class="space-y-3">
        ${learnList.map((p, idx) => `
          <article id="passage-fb-overview-${idx + 1}" class="p-4 rounded-2xl bg-indigo-50/30 dark:bg-indigo-950/20 border border-indigo-500/20 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
            <h3 class="text-xs font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider mb-1">Core Principle</h3>
            <p>${renderInlineMathHTML(p)}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <!-- 2. KEY CONCEPTS & EXPLANATION -->
    <section aria-label="Core Concept Explanations" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xl shrink-0">
          🧠
        </div>
        <div>
          <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            2. Core Concept Explanations
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Key principles and conceptual building blocks.
          </p>
        </div>
      </div>
      <div class="space-y-4">
        ${keyConceptsList.map((c, idx) => {
          if (typeof c === 'string') {
            return `
              <article id="passage-fb-concept-${idx + 1}" class="p-4 rounded-2xl bg-blue-50/30 dark:bg-blue-950/20 border border-blue-500/20 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                <h3 class="font-bold text-xs text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-1">Concept Point #${idx + 1}</h3>
                <p>• ${renderInlineMathHTML(c)}</p>
              </article>
            `;
          }
          const conceptObj = c as any;
          const conceptVisuals: ConceptVisual[] = conceptObj.visuals || (conceptObj.visual ? [conceptObj.visual] : []);
          return `
            <article id="passage-fb-concept-${idx + 1}" class="p-5 rounded-2xl bg-blue-50/30 dark:bg-blue-950/20 border border-blue-500/20 space-y-3">
              ${conceptObj.heading ? `<h3 class="font-bold text-sm sm:text-base text-blue-900 dark:text-blue-300">${renderInlineMathHTML(conceptObj.heading)}</h3>` : ''}
              ${conceptObj.paragraphs ? `<div class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">${(conceptObj.paragraphs || []).map((p: string) => `<p>${renderInlineMathHTML(p)}</p>`).join('')}</div>` : ''}
              ${conceptVisuals.length > 0 ? `
                <div class="space-y-3 pt-2">
                  ${conceptVisuals.map(v => `
                    <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                      ${v.svgContent ? `<div class="p-2 sm:p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-xs">${v.svgContent}</div>` : ''}
                      ${v.caption ? `<div class="p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs sm:text-sm text-blue-900 dark:text-blue-200 font-medium">💡 ${renderInlineMathHTML(v.caption)}</div>` : ''}
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </article>
          `;
        }).join('')}
      </div>
    </section>

    <!-- 3. FORMULAS (If present) -->
    ${(formulasList.length > 0) ? `
      <section aria-label="Essential Formulas" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xl shrink-0">
            📐
          </div>
          <div>
            <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              3. Essential Formulas
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Quantitative expressions for problem solving.
            </p>
          </div>
        </div>
        <div class="space-y-3">
          ${formulasList.map((f, idx) => {
            const formStr = typeof f === 'string' ? f : (f.formula || (f as any).expression || '');
            const titleStr = typeof f === 'object' && f && (f.title || (f as any).name || (f as any).formulaName) ? String(f.title || (f as any).name || (f as any).formulaName) : `Formula #${idx + 1}`;
            return `
              <article id="passage-fb-formula-${idx + 1}" class="p-4 rounded-2xl bg-emerald-50/20 dark:bg-emerald-950/20 border border-emerald-500/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium space-y-2" itemscope itemtype="https://schema.org/Question">
                <h3 class="font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider text-xs" itemprop="name">${renderInlineMathHTML(titleStr)}</h3>
                <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                  <div itemprop="text">${renderFormulaHTML(formStr)}</div>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      </section>
    ` : ''}

    <!-- 4. HIGH-YIELD NCERT FACTS -->
    ${(neetImportantPointsList.length > 0) ? `
      <section aria-label="NEET High-Yield NCERT Facts" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xl shrink-0">
            📌
          </div>
          <div>
            <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              4. NEET High-Yield NCERT Facts
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Frequently tested statements and NCERT lines.
            </p>
          </div>
        </div>
        <div class="space-y-2.5">
          ${neetImportantPointsList.map((pt, idx) => `
            <article id="passage-fb-ncert-${idx + 1}" class="p-3.5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
              <span class="text-amber-600 dark:text-amber-400 font-bold shrink-0 mt-0.5">📌</span>
              <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                <strong class="font-bold text-amber-900 dark:text-amber-300">NCERT Point #${idx + 1}:</strong> ${renderInlineMathHTML(pt)}
              </p>
            </article>
          `).join('')}
        </div>
      </section>
    ` : ''}

    <!-- 5. COMMON CONFUSIONS -->
    ${(commonConfusionsList.length > 0) ? `
      <section aria-label="Common Confusions and Negative Mark Traps" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div class="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-xl shrink-0">
            ⚠️
          </div>
          <div>
            <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              5. Common Confusions & Negative Mark Traps
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Key misconceptions to avoid in NEET MCQs.
            </p>
          </div>
        </div>
        <div class="space-y-3">
          ${commonConfusionsList.map((c: any, idx) => {
            if (typeof c === 'string') {
              return `
                <article id="passage-fb-trap-${idx + 1}" class="p-4 rounded-2xl bg-red-50/40 dark:bg-red-950/20 border border-red-500/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                  <h3 class="font-bold text-red-700 dark:text-red-400 mb-1">⚠️ NEET MCQ Caution:</h3>
                  <p>${renderInlineMathHTML(c)}</p>
                </article>
              `;
            }
            const confusionText = c.commonConfusion || c.misconception || ''
            const correctText = c.correctFact || c.correction || ''
            const whyText = c.whyItMattersForNEET || c.whyTrap || ''
            return `
              <article id="passage-fb-trap-${idx + 1}" class="p-4 rounded-2xl bg-red-50/40 dark:bg-red-950/20 border border-red-500/30 text-xs sm:text-sm space-y-1.5">
                <h3 class="font-bold text-red-700 dark:text-red-400 text-xs">❌ Common Trap: ${renderInlineMathHTML(confusionText)}</h3>
                <div class="font-bold text-emerald-700 dark:text-emerald-400">✓ Correct Fact: ${renderInlineMathHTML(correctText)}</div>
                ${whyText ? `<div class="text-slate-600 dark:text-slate-400 text-xs italic">💡 <strong class="font-bold">Why it matters:</strong> ${renderInlineMathHTML(whyText)}</div>` : ''}
              </article>
            `;
          }).join('')}
        </div>
      </section>
    ` : ''}

    <!-- 6. QUICK REVISION -->
    ${(quickRevisionList.length > 0) ? `
      <section class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div class="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-xl shrink-0">
            🔄
          </div>
          <div>
            <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              6. Quick Revision Takeaways
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Rapid recall points for last-minute review.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium">
          ${quickRevisionList.map(q => `
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-2.5">
              <span class="text-teal-500 font-bold shrink-0 mt-0.5">✓</span>
              <span class="text-slate-800 dark:text-slate-200">${renderInlineMathHTML(q)}</span>
            </div>
          `).join('')}
        </div>
      </section>
    ` : ''}

    <!-- 7. NEET PREVIOUS YEAR QUESTIONS -->
    <section class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md shadow-blue-500/20">
            🎯
          </div>
          <div>
            <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              7. NEET Previous Year Questions
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Verified NEET exam questions for this topic.
            </p>
          </div>
        </div>

        <span class="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold">
          ${pyqs.length} Verified PYQs
        </span>
      </div>

      <div class="space-y-6">
        ${pyqs.length > 0 ? pyqs.map((pyq, idx) => renderPYQCard(pyq, idx)).join('') : `
          <div class="p-8 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 space-y-2">
            <span class="text-2xl block">📌</span>
            <p class="font-medium text-slate-700 dark:text-slate-300">
              No verified NEET previous-year questions have been added to this topic yet.
            </p>
          </div>
        `}
      </div>
    </section>
  `;
}

function renderMarksPotentialSection(rawPotential: NeetMarksPotential | undefined, topicTitle: string, topicPyqs?: PYQuestion[]): string {
  const potential = reconcileMarksPotential(rawPotential, topicTitle, topicPyqs);
  if (!potential) return '';

  // Data Integrity Validation Check (Rule 19)
  const displayedVerifiedPYQs = topicPyqs ? topicPyqs.length : potential.totalDirectPyqs;
  const displayedMarks = topicPyqs ? topicPyqs.reduce((s, q) => s + (q.marks || 4), 0) : potential.totalHistoricalMarks;
  const displayedUniquePapers = topicPyqs ? new Set(topicPyqs.map(q => `${q.year}_${q.exam || 'NEET UG'}`)).size : potential.papersWithDirectPyqs;

  if (
    displayedVerifiedPYQs !== potential.totalDirectPyqs ||
    displayedMarks !== potential.totalHistoricalMarks ||
    displayedUniquePapers !== potential.papersWithDirectPyqs
  ) {
    return `
      <section class="p-6 rounded-3xl bg-rose-50 dark:bg-rose-950/30 border border-rose-500/30 text-rose-800 dark:text-rose-200 text-sm space-y-2">
        <div class="font-bold flex items-center gap-2">
          <span>⚠️</span>
          <span>Data Integrity Verification Failed</span>
        </div>
        <p class="text-xs">
          The PYQ statistics could not be rendered due to a mismatch between calculated metrics and displayed question records.
        </p>
      </section>
    `;
  }

  const isZero = potential.totalDirectPyqs === 0;

  const confidenceBadgeClass = potential.confidenceLabel === 'HIGH'
    ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
    : potential.confidenceLabel === 'MODERATE'
    ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30'
    : 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30'

  const confidenceIcon = potential.confidenceLabel === 'HIGH' ? '🟢' : potential.confidenceLabel === 'MODERATE' ? '🟡' : '🔴'

  const yearWiseBreakdownList = potential.yearWiseBreakdown || [];
  const overlapPyqsList = potential.overlapPyqs || [];

  return `
    <!-- 🎯 NEET MARKS POTENTIAL SECTION -->
    <section id="section-marks-potential" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6 transition-all">
      
      <!-- Section Header -->
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xl shrink-0">
            🎯
          </div>
          <div>
            <h2 class="text-lg sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              NEET Marks Potential — ${potential.topicName || topicTitle}
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Strict topic-level analysis based strictly on verified previous-year question papers (chapter-level weightage excluded).
            </p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <span class="px-3 py-1.5 rounded-full border ${confidenceBadgeClass} text-xs font-bold flex items-center gap-1.5">
            <span>${confidenceIcon}</span>
            <span>${potential.confidenceLabel} CONFIDENCE</span>
          </span>
        </div>
      </div>

      <!-- Top Key Analytics Grid (3 Stat Cards) -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <!-- Card 1: Direct Verified PYQs -->
        <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
          <div class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Direct Verified PYQs</div>
          <div class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            ${potential.totalDirectPyqs} <span class="text-xs font-semibold text-slate-500">Questions</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400">
            ${potential.totalDirectPyqs > 0 ? `${potential.totalDirectPyqs} verified direct ${potential.topicName} PYQs identified` : '0 verified direct PYQs identified'}
          </p>
        </div>

        <!-- Card 2: Historical Marks Total -->
        <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
          <div class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Historical Marks Represented</div>
          <div class="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">
            ${potential.totalHistoricalMarks} <span class="text-xs font-semibold text-slate-500">Marks Total</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400">
            Across ${potential.totalAnalyzedPapers} analyzed NEET/AIPMT papers
          </p>
        </div>

        <!-- Card 3: Paper Appearance Rate -->
        <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
          <div class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Paper Appearance Rate</div>
          <div class="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
            ${potential.papersWithDirectPyqs} / ${potential.totalAnalyzedPapers} <span class="text-xs font-semibold text-slate-500">Papers</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400">
            Tested in ${Math.round((potential.papersWithDirectPyqs / potential.totalAnalyzedPapers) * 100)}% of analyzed papers
          </p>
        </div>
      </div>

      <!-- 🎯 MASTERED TOPIC POTENTIAL BOX -->
      <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/50 space-y-4">
        <div class="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-black text-sm sm:text-base">
          <span>🎯</span>
          <span>MASTERED TOPIC POTENTIAL</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Based on verified historical papers, a student who completely masters this topic should be prepared to capture the marks from any direct <strong>${potential.topicName}</strong> question that appears.
        </p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-amber-200/60 dark:border-amber-800/40">
          <div class="space-y-0.5">
            <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Historical Direct-Question Range:</span>
            <div class="text-base sm:text-lg font-bold text-amber-800 dark:text-amber-300">
              ${potential.minDirectMarks} – ${potential.maxDirectMarks} Marks per paper
            </div>
          </div>
          <div class="space-y-0.5">
            <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Typical Historical Contribution:</span>
            <div class="text-base sm:text-lg font-bold text-amber-800 dark:text-amber-300">
              ${potential.typicalContributionMarks > 0 ? `~${potential.typicalContributionMarks} Marks (when present)` : '0 Marks'}
            </div>
          </div>
        </div>
        
        <div class="text-[11px] italic text-amber-800/70 dark:text-amber-300/70">
          * Note: Labeled as historical score potential based on verified past papers. This is not a prediction or guarantee of future NEET paper contents.
        </div>
      </div>

      ${isZero ? `
        <div class="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs leading-relaxed border border-slate-200 dark:border-slate-700">
          ⚠️ <strong>0 verified direct PYQs identified in the analyzed source set.</strong><br/>
          Historical direct marks: 0. Insufficient evidence to estimate a topic-specific expected mark range.
        </div>
      ` : ''}

      <!-- Year-Wise Breakdown Table (Desktop) & Cards (Mobile) -->
      <div class="space-y-3">
        <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span>📅 Year-Wise Breakdown of Verified Questions</span>
        </h3>
        
        <!-- Desktop Table View -->
        <div class="hidden sm:block overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
              <tr>
                <th class="p-3 whitespace-nowrap">Year</th>
                <th class="p-3 whitespace-nowrap">Exam</th>
                <th class="p-3 whitespace-nowrap text-center">Direct PYQs</th>
                <th class="p-3 whitespace-nowrap text-center">Marks</th>
                <th class="p-3 whitespace-nowrap">Question Type / Concept</th>
                <th class="p-3 whitespace-nowrap">Classification</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
              ${yearWiseBreakdownList.map(r => `
                <tr class="${r.directPyqCount > 0 ? 'bg-emerald-50/30 dark:bg-emerald-950/10 font-medium' : r.classification === 'Overlap' ? 'bg-amber-50/20 dark:bg-amber-950/10' : ''}">
                  <td class="p-3 font-bold text-slate-900 dark:text-slate-100">${r.year}</td>
                  <td class="p-3 text-slate-600 dark:text-slate-400">${r.exam}</td>
                  <td class="p-3 text-center font-bold ${r.directPyqCount > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}">
                    ${r.directPyqCount}
                  </td>
                  <td class="p-3 text-center font-bold ${r.marks > 0 ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}">
                    ${r.marks}
                  </td>
                  <td class="p-3 text-slate-700 dark:text-slate-300">
                    ${r.questionType}
                  </td>
                  <td class="p-3">
                    <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${
                      r.classification === 'Direct' ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200' :
                      r.classification === 'Overlap' ? 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200' :
                      'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }">
                      ${r.classification}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Mobile Stacked Card View -->
        <div class="block sm:hidden space-y-3">
          ${yearWiseBreakdownList.map(r => `
            <div class="p-4 rounded-2xl border ${r.directPyqCount > 0 ? 'border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/10' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'} space-y-2 text-xs">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="font-bold text-slate-900 dark:text-slate-100 text-sm">${r.year}</span>
                  <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold">${r.exam}</span>
                </div>
                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${
                  r.classification === 'Direct' ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200' :
                  r.classification === 'Overlap' ? 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200' :
                  'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }">
                  ${r.classification}
                </span>
              </div>
              
              <div class="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800/80 font-bold">
                <span class="text-emerald-600 dark:text-emerald-400">Direct PYQs: ${r.directPyqCount}</span>
                <span class="text-blue-600 dark:text-blue-400">Marks: ${r.marks}</span>
              </div>

              <div class="text-slate-700 dark:text-slate-300 pt-1">
                <span class="font-bold text-slate-500">Concept / Type:</span> ${r.questionType}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Frequency & Historical Marks Statistics -->
      <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          📊 Topic Frequency & Historical Marks Range Analysis
        </h3>
        
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 space-y-0.5">
            <span class="text-[10px] font-semibold text-slate-400">Total Analyzed Papers:</span>
            <div class="font-bold text-slate-900 dark:text-slate-100">${potential.totalAnalyzedPapers}</div>
          </div>
          
          <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 space-y-0.5">
            <span class="text-[10px] font-semibold text-slate-400">Avg Direct PYQs / Paper:</span>
            <div class="font-bold text-slate-900 dark:text-slate-100">${potential.averageDirectPyqsPerPaper.toFixed(2)}</div>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 space-y-0.5">
            <span class="text-[10px] font-semibold text-slate-400">Max Direct PYQs (1 Paper):</span>
            <div class="font-bold text-slate-900 dark:text-slate-100">${potential.maxDirectPyqsInSinglePaper} (${potential.maxDirectMarks} marks)</div>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 space-y-0.5">
            <span class="text-[10px] font-semibold text-slate-400">Min Direct PYQs (1 Paper):</span>
            <div class="font-bold text-slate-900 dark:text-slate-100">${potential.minDirectPyqsInSinglePaper} (${potential.minDirectMarks} marks)</div>
          </div>
        </div>
      </div>

      <!-- What This Means For You -->
      <div class="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-500/20 space-y-2">
        <h3 class="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
          <span>💡</span>
          <span>What This Means For You</span>
        </h3>
        <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
          ${potential.whatThisMeansForYou}
        </p>
      </div>

      ${overlapPyqsList.length > 0 ? `
        <!-- Overlap / Related PYQs -->
        <div class="p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-500/20 space-y-3">
          <h3 class="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
            <span>🔗</span>
            <span>Related / Overlap PYQs</span>
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-400">
            These questions involve ${potential.topicName} concepts alongside another major topic, but are classified under their primary topic to prevent double-counting:
          </p>
          <div class="space-y-2">
            ${overlapPyqsList.map(op => `
              <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                <div class="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100">
                  <span>${op.exam} ${op.year}</span>
                  <span class="text-amber-600 dark:text-amber-400">Primary Topic: ${op.primaryTopic}</span>
                </div>
                <p class="text-slate-700 dark:text-slate-300">${op.question}</p>
                <div class="text-[11px] text-slate-500 dark:text-slate-400 italic">
                  Note: ${op.overlapReason}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Source Transparency Footer -->
      <div class="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 text-[11px] text-slate-600 dark:text-slate-400 space-y-1.5 border border-slate-200/80 dark:border-slate-700/80">
        <div class="font-bold text-slate-800 dark:text-slate-200 flex flex-wrap items-center justify-between gap-2">
          <span>🔍 Data Source & Transparency:</span>
          <span>Verified Archives</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
          <div>• <strong>Source:</strong> ${potential.sourceInfo?.dataSource || 'NCERT / NEET Archives'}</div>
          <div>• <strong>Analysis Period:</strong> ${potential.sourceInfo?.analysisPeriod || 'Past 10 Years'}</div>
          <div>• <strong>Direct PYQs Analyzed:</strong> ${potential.sourceInfo?.directPyqsAnalyzedCount || 0}</div>
          <div>• <strong>Classification Method:</strong> ${potential.sourceInfo?.classificationMethod || 'Strict Mapping'}</div>
        </div>
        <p class="pt-1 italic text-slate-500 border-t border-slate-200 dark:border-slate-700 mt-1">
          📌 ${potential.sourceInfo?.disclaimer || 'Data analyzed from past papers.'}
        </p>
      </div>

    </section>
  `;
}

function renderPracticeCard(rawPq: PracticeQuestion, index: number): string {
  const pq = {
    id: rawPq.id || rawPq.questionId || `pq-${index}`,
    question: rawPq.question || rawPq.questionText || '',
    options: Array.isArray(rawPq.options) ? rawPq.options : [],
    correctAnswer: typeof rawPq.correctAnswer === 'number' ? rawPq.correctAnswer : (typeof rawPq.correctOption === 'number' ? rawPq.correctOption : 0),
    explanation: rawPq.explanation || '',
    difficulty: rawPq.difficulty || 'Medium'
  };

  const attempts = StorageService.getProgress().pyqAttempts;
  const userAttempt = attempts[pq.id];

  return `
    <div class="practice-card p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 space-y-4" id="practice-box-${pq.id}">
      
      <div class="flex items-center justify-between text-xs font-bold">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-lg bg-indigo-600 text-white">
            Practice Q${index + 1}
          </span>
          <span class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
            Topic Check
          </span>
        </div>

        ${userAttempt ? `
          <span class="px-2.5 py-1 rounded-lg text-xs font-bold ${userAttempt.isCorrect ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'}">
            ${userAttempt.isCorrect ? '✓ Correct Answer' : '✗ Learning Opportunity'}
          </span>
        ` : ''}
      </div>

      <p class="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
        ${renderInlineMathHTML(pq.question)}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
        ${pq.options.map((opt, optIdx) => {
          let optionClass = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-500 text-slate-800 dark:text-slate-200'
          
          if (userAttempt) {
            if (optIdx === pq.correctAnswer) {
              optionClass = 'bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold'
            } else if (optIdx === userAttempt.selectedOption && !userAttempt.isCorrect) {
              optionClass = 'bg-red-500/15 border-red-500 text-red-700 dark:text-red-300 font-bold'
            }
          }

          return `
            <button 
              class="practice-option-btn w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${optionClass}" 
              data-pq-id="${pq.id}" 
              data-option-idx="${optIdx}"
              data-correct-idx="${pq.correctAnswer}"
              ${userAttempt ? 'disabled' : ''}
            >
              <div class="flex items-center gap-2.5">
                <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs flex items-center justify-center shrink-0">
                  ${String.fromCharCode(65 + optIdx)}
                </span>
                <span>${renderInlineMathHTML(opt)}</span>
              </div>
              
              ${userAttempt && optIdx === pq.correctAnswer ? '<span class="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>' : ''}
              ${userAttempt && optIdx === userAttempt.selectedOption && !userAttempt.isCorrect ? '<span class="text-red-600 dark:text-red-400 font-bold">✗</span>' : ''}
            </button>
          `;
        }).join('')}
      </div>

      ${userAttempt ? `
        <div class="p-4 rounded-2xl border ${userAttempt.isCorrect ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200' : 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'} space-y-2 text-xs sm:text-sm">
          <div class="font-bold text-sm flex items-center gap-2">
            ${userAttempt.isCorrect ? '<span>🎉 Excellent! Your answer is correct.</span>' : '<span>❌ Your answer is incorrect. Let\'s master this concept:</span>'}
          </div>
          ${!userAttempt.isCorrect ? `
            <div class="space-y-1.5 pt-1.5 border-t border-rose-200 dark:border-rose-900/50">
              <p class="font-bold text-rose-800 dark:text-rose-300">💡 Conceptual Learning Feedback:</p>
              <p class="text-rose-900 dark:text-rose-200 leading-relaxed">
                Check whether a common trap (like unit conversion, vector direction, or missing constant) affected your calculation. Read the step-by-step solution below to see how to approach this problem correctly.
              </p>
            </div>
          ` : ''}
        </div>
      ` : ''}

      <div class="practice-solution-box ${userAttempt ? 'block' : 'hidden'} p-4.5 sm:p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-800/40 space-y-2.5 text-xs sm:text-sm">
        <div class="font-bold text-indigo-900 dark:text-indigo-300 flex items-center justify-between text-sm">
          <span>📝 Detailed Step-by-Step Solution:</span>
        </div>
        <div class="text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line font-medium">
          ${renderInlineMathHTML(pq.explanation)}
        </div>
        <div class="p-3 rounded-xl bg-indigo-100/80 dark:bg-indigo-900/50 text-indigo-900 dark:text-indigo-200 font-medium text-xs mt-2 border border-indigo-200/80 dark:border-indigo-800/50">
          <strong>📌 Key Takeaway:</strong> Always verify SI units and sign conventions before carrying out substitution.
        </div>
      </div>

    </div>
  `;
}

function renderPYQCard(rawPyq: PYQuestion, index: number): string {
  const pyq = {
    id: rawPyq.id || `pyq-${index}`,
    year: rawPyq.year || 2022,
    exam: rawPyq.exam || rawPyq.examName || 'NEET',
    question: rawPyq.question || rawPyq.questionText || '',
    options: Array.isArray(rawPyq.options) ? rawPyq.options : [],
    correctAnswer: typeof rawPyq.correctAnswer === 'number' ? rawPyq.correctAnswer : (typeof rawPyq.correctOption === 'number' ? rawPyq.correctOption : 0),
    explanation: rawPyq.explanation || '',
    difficulty: rawPyq.difficulty || 'Medium',
    conceptTested: rawPyq.conceptTested || 'Verified Concept',
    classification: rawPyq.classification || 'Direct',
    marks: rawPyq.marks || 4,
    ncertReference: rawPyq.ncertReference
  };

  const attempts = StorageService.getProgress().pyqAttempts;
  const userAttempt = attempts[pyq.id];

  return `
    <div class="pyq-card p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 space-y-4" id="pyq-box-${pyq.id}">
      
      <div class="flex items-center justify-between text-xs font-bold">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-lg bg-blue-600 text-white">
            Q${index + 1}
          </span>
          <span class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
            ${pyq.exam || 'NEET'} ${pyq.year}
          </span>
          ${pyq.difficulty ? `
            <span class="px-2 py-0.5 rounded text-[10px] uppercase font-bold ${pyq.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'}">
              ${pyq.difficulty}
            </span>
          ` : ''}
        </div>

        ${userAttempt ? `
          <span class="px-2.5 py-1 rounded-lg text-xs font-bold ${userAttempt.isCorrect ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'}">
            ${userAttempt.isCorrect ? '✓ Correctly Answered' : '✗ Learning Opportunity'}
          </span>
        ` : ''}
      </div>

      <p class="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
        ${renderInlineMathHTML(pyq.question)}
      </p>

      <!-- Metadata Badges (Rule 3 Integrity) -->
      <div class="flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
        <span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold">
          Concept: ${pyq.conceptTested || 'Verified Concept'}
        </span>
        <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
          Type: ${pyq.classification || 'Direct'}
        </span>
        <span class="px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-semibold">
          Source: Verified (${pyq.exam || 'NEET UG'})
        </span>
        <span class="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-semibold">
          Marks: +${pyq.marks || 4}
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
        ${pyq.options.map((opt: string, optIdx: number) => {
          let optionClass = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-500 text-slate-800 dark:text-slate-200'
          
          if (userAttempt) {
            if (optIdx === pyq.correctAnswer) {
              optionClass = 'bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold'
            } else if (optIdx === userAttempt.selectedOption && !userAttempt.isCorrect) {
              optionClass = 'bg-red-500/15 border-red-500 text-red-700 dark:text-red-300 font-bold'
            }
          }

          return `
            <button 
              class="pyq-option-btn w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${optionClass}" 
              data-pyq-id="${pyq.id}" 
              data-option-idx="${optIdx}"
              data-correct-idx="${pyq.correctAnswer}"
              ${userAttempt ? 'disabled' : ''}
            >
              <div class="flex items-center gap-2.5">
                <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs flex items-center justify-center shrink-0">
                  ${String.fromCharCode(65 + optIdx)}
                </span>
                <span>${renderInlineMathHTML(opt)}</span>
              </div>
              
              ${userAttempt && optIdx === pyq.correctAnswer ? '<span class="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>' : ''}
              ${userAttempt && optIdx === userAttempt.selectedOption && !userAttempt.isCorrect ? '<span class="text-red-600 dark:text-red-400 font-bold">✗</span>' : ''}
            </button>
          `;
        }).join('')}
      </div>

      ${userAttempt ? `
        <div class="p-4 rounded-2xl border ${userAttempt.isCorrect ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200' : 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'} space-y-2 text-xs sm:text-sm">
          <div class="font-bold text-sm flex items-center gap-2">
            ${userAttempt.isCorrect ? '<span>🎉 Excellent! Your answer matches the official NEET solution.</span>' : '<span>❌ Your answer is incorrect. Let\'s review the NEET solution method:</span>'}
          </div>
          ${!userAttempt.isCorrect ? `
            <div class="space-y-1.5 pt-1.5 border-t border-rose-200 dark:border-rose-900/50">
              <p class="font-bold text-rose-800 dark:text-rose-300">💡 NEET Problem-Solving Approach:</p>
              <p class="text-rose-900 dark:text-rose-200 leading-relaxed">
                NEET Physics questions test conceptual clarity under time constraints. Follow the step-by-step breakdown below to master the exact formula and calculation logic required.
              </p>
            </div>
          ` : ''}
        </div>
      ` : ''}

      <div class="pyq-solution-box ${userAttempt ? 'block' : 'hidden'} p-4.5 sm:p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/40 space-y-2.5 text-xs sm:text-sm">
        <div class="font-bold text-blue-900 dark:text-blue-300 flex items-center justify-between text-sm">
          <span>💡 Verified Step-by-Step Solution:</span>
          ${pyq.ncertReference ? `<span class="text-[11px] text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">${pyq.ncertReference}</span>` : ''}
        </div>
        <div class="text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line font-medium">
          ${renderInlineMathHTML(pyq.explanation)}
        </div>
        <div class="p-3 rounded-xl bg-blue-100/80 dark:bg-blue-900/50 text-blue-900 dark:text-blue-200 font-medium text-xs mt-2 border border-blue-200/80 dark:border-blue-800/50">
          <strong>🎯 NEET Takeaway:</strong> Master the underlying principle (${pyq.conceptTested || 'Core Concept'}) to solve similar numericals swiftly in the actual exam.
        </div>
      </div>

    </div>
  `;
}
