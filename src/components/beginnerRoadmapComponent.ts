import { ROADMAP_STEPS, RoadmapStep, LearningRoadmapService } from '../data/learningRoadmapData';
import { getTopicById } from '../data/neetData';
import { TOPIC_DETAILS } from '../data/topicDetails';
import { get15QuestionsForRoadmapStep } from '../data/roadmapTestBank';

export function renderBeginnerRoadmapView(selectedStepId?: string): string {
  const metrics = LearningRoadmapService.getProgressMetrics();
  const completedIds = LearningRoadmapService.getCompletedStepIds();
  
  // Default to selected step or next recommended uncompleted step
  const activeStepId = selectedStepId || LearningRoadmapService.getNextRecommendedStepId();
  const activeStep = ROADMAP_STEPS.find(s => s.id === activeStepId) || ROADMAP_STEPS[0];
  const isCurrentStepCompleted = completedIds.includes(activeStep.id);

  // Retrieve exact 15-question mastery test for this topic
  const testQuestions = get15QuestionsForRoadmapStep(
    activeStep.id,
    activeStep.subject,
    activeStep.topicTitle,
    activeStep.chapterTitle
  );

  // Find next and previous step in the curated single-track journey
  const currentIndex = ROADMAP_STEPS.findIndex(s => s.id === activeStep.id);
  const prevStep = currentIndex > 0 ? ROADMAP_STEPS[currentIndex - 1] : null;
  const nextStep = currentIndex < ROADMAP_STEPS.length - 1 ? ROADMAP_STEPS[currentIndex + 1] : null;

  // Retrieve any additional rich deep notes from database for this topic
  const linkedTopic = getTopicById(activeStep.topicId);
  const detail = TOPIC_DETAILS[activeStep.topicId] || 
    TOPIC_DETAILS[activeStep.topicId.replace(/^(phys|chem|bio)-/, '')] ||
    (linkedTopic ? TOPIC_DETAILS[linkedTopic.id] : undefined) ||
    Object.values(TOPIC_DETAILS).find((d: any) => 
      (d.topicName && d.topicName.toLowerCase().includes(activeStep.topicTitle.toLowerCase().substring(0, 8))) ||
      (d.title && d.title.toLowerCase().includes(activeStep.topicTitle.toLowerCase().substring(0, 8)))
    );

  // Determine subject color scheme
  const subjectTheme = activeStep.subject === 'biology'
    ? {
        badge: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20',
        accentBg: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50',
        textAccent: 'text-emerald-700 dark:text-emerald-400',
        icon: '🧬',
        subjectLabel: 'Biology (NCERT 100% Direct)'
      }
    : activeStep.subject === 'chemistry'
    ? {
        badge: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20',
        accentBg: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50',
        textAccent: 'text-blue-700 dark:text-blue-400',
        icon: '🧪',
        subjectLabel: 'Chemistry (Physical & Organic)'
      }
    : {
        badge: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20',
        accentBg: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-900/50',
        textAccent: 'text-purple-700 dark:text-purple-400',
        icon: '⚡',
        subjectLabel: 'Physics (Concept & Formula)'
      };

  // Additional PYQs from linked topic
  const additionalPyqs = (detail?.pyqs || linkedTopic?.pyqs || []).slice(0, 3);

  return `
    <div class="space-y-6 pb-24 max-w-4xl mx-auto px-2 sm:px-4 font-sans text-slate-900 dark:text-slate-100">
      
      <!-- Semantic Breadcrumbs -->
      <nav aria-label="Breadcrumb" class="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 px-1">
        <a href="#home" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
          <span>🏠</span>
          <span>Home</span>
        </a>
        <span class="text-slate-300 dark:text-slate-600">/</span>
        <span class="text-slate-800 dark:text-slate-200 font-bold" aria-current="page">
          Beginner Roadmap
        </span>
      </nav>

      <!-- TOP NAVIGATION & SINGLE-TOPIC MASTERY PROGRESS BAR -->
      <header class="p-4 sm:p-6 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden border border-slate-800">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="space-y-1">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
              <span>🌱</span> Zero-Overwhelm Beginner Path
            </div>
            <h1 class="text-xl sm:text-2xl font-black tracking-tight text-white">
              Topic ${activeStep.stepNumber} of ${ROADMAP_STEPS.length}
            </h1>
          </div>

          <div class="flex items-center gap-3">
            <div class="text-right">
              <span class="text-xs text-slate-300 block font-medium">Roadmap Mastery</span>
              <span class="text-lg font-black text-emerald-400">${metrics.percentage}% (${metrics.completedCount}/${metrics.total} Mastered)</span>
            </div>
          </div>
        </div>

        <!-- Linear Progress Tracker -->
        <div class="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden mt-4">
          <div 
            class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700 ease-out" 
            style="width: ${metrics.percentage}%"
          ></div>
        </div>

        <!-- Prev / Next quick jumps for previously unlocked topics -->
        <div class="flex items-center justify-between mt-3 text-xs text-slate-400">
          <div>
            ${prevStep ? `
              <button 
                type="button"
                class="btn-nav-step text-slate-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                data-step-id="${prevStep.id}"
              >
                <span>← Revisit Topic ${prevStep.stepNumber}: ${prevStep.topicTitle.substring(0, 24)}...</span>
              </button>
            ` : '<span class="text-slate-600">Start of Journey</span>'}
          </div>
          <div>
            ${isCurrentStepCompleted && nextStep ? `
              <button 
                type="button"
                class="btn-nav-step text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 transition-colors cursor-pointer"
                data-step-id="${nextStep.id}"
              >
                <span>Jump to Topic ${nextStep.stepNumber} →</span>
              </button>
            ` : ''}
          </div>
        </div>
      </header>

      <!-- DIRECT ACCESS TO COMPLETE TOPIC MODULE CALLOUT -->
      <div class="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-blue-600/40">
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center text-2xl shrink-0 border border-white/20">
            📖
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md bg-blue-400/30 text-blue-100 text-[10px] font-black uppercase tracking-wider">Full Learning Suite</span>
              <span class="text-xs text-blue-200">Exhaustive NCERT Notes</span>
            </div>
            <div class="text-sm sm:text-base font-black text-white mt-0.5">
              Complete Chapter & In-Depth Notes for ${activeStep.topicTitle}
            </div>
          </div>
        </div>
        <a
          href="#topic/${activeStep.topicId}"
          id="btn-direct-topic-access"
          class="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white hover:bg-blue-50 text-blue-800 font-black text-xs sm:text-sm transition-all shadow-md hover:shadow-lg text-center shrink-0 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Open Complete Topic Study Page →</span>
        </a>
      </div>

      <!-- ACTIVE TOPIC HERO CARD & STUDY NOTES -->
      <article id="beginner-roadmap-study-notes" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 scroll-mt-20">
        
        <!-- Header Info -->
        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div class="space-y-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-1 rounded-xl text-xs font-bold border ${subjectTheme.badge}">
                ${subjectTheme.icon} ${subjectTheme.subjectLabel}
              </span>
              <span class="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                ${activeStep.classLevel === 'class-11' ? 'Class 11' : 'Class 12'}
              </span>
              <span class="px-2.5 py-1 rounded-xl text-xs font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                NEET Weightage: ${activeStep.neetWeightage}
              </span>
            </div>

            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white pt-1 leading-tight">
              ${activeStep.topicTitle}
            </h2>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              Chapter: <a href="#chapter/${activeStep.chapterId}" class="font-semibold text-blue-600 dark:text-blue-400 hover:underline">${activeStep.chapterTitle}</a>
              • Estimated Study: <span class="font-semibold text-slate-700 dark:text-slate-200">${activeStep.estimatedHours} Hours</span>
            </p>
          </div>

          <!-- Status Indicator -->
          <div class="shrink-0">
            <span class="px-3.5 py-2 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 ${
              isCurrentStepCompleted
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                : 'bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300'
            }">
              <span>${isCurrentStepCompleted ? '✓ Topic Mastered' : '🔒 Test Required to Pass'}</span>
            </span>
          </div>
        </div>

        <!-- 1. WHY LEARN THIS TOPIC NOW -->
        <section class="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-1.5">
          <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
            <span>💡</span> Why Learn This Topic Right Now?
          </div>
          <p class="text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
            ${activeStep.whyStartHere}
          </p>
        </section>

        <!-- 2. FULL NCERT THEORY & CONCEPT BREAKDOWN -->
        <section class="space-y-4 pt-2">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
            <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>📖</span> 1. Core NCERT Concepts & Theory
            </h3>
            <a href="#topic/${activeStep.topicId}" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
              Open Full NCERT Deep-Dive →
            </a>
          </div>

          <div class="space-y-3">
            ${activeStep.keyConcepts.map((concept, idx) => `
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 space-y-2">
                <div class="flex items-start gap-3">
                  <span class="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    ${idx + 1}
                  </span>
                  <div class="space-y-1 text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                    ${concept}
                  </div>
                </div>
              </div>
            `).join('')}

            ${detail?.whatIsThisTopic ? `
              <div class="p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/50 space-y-2 text-sm text-slate-800 dark:text-slate-200">
                <div class="font-bold text-xs uppercase tracking-wider text-blue-700 dark:text-blue-400">
                  💡 Comprehensive NCERT Overview
                </div>
                <p class="leading-relaxed font-normal">${detail.whatIsThisTopic}</p>
              </div>
            ` : ''}

            ${detail?.importantTerms && detail.importantTerms.length > 0 ? `
              <div class="p-4 sm:p-5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/70 dark:border-purple-900/40 space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="font-bold text-purple-900 dark:text-purple-300 text-xs uppercase tracking-wider">
                    High-Yield Scientific Terminology & Definitions
                  </h4>
                  <a href="#topic/${activeStep.topicId}" class="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline">
                    View All in Learn →
                  </a>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  ${detail.importantTerms.slice(0, 4).map((t: any) => `
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900/50 text-xs space-y-1">
                      <div class="font-bold text-purple-700 dark:text-purple-300">${t.term} ${t.symbol ? `<span class="text-slate-400 font-mono text-[11px]">(${t.symbol})</span>` : ''}</div>
                      <p class="text-slate-600 dark:text-slate-300 leading-normal">${t.definition}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${detail?.conceptExplanation ? `
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 text-sm text-slate-700 dark:text-slate-300 space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                    Deep Concept Clarification (NCERT Line-by-Line)
                  </h4>
                  <a href="#topic/${activeStep.topicId}" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
                    View Interactive Reader →
                  </a>
                </div>
                <div class="space-y-3 leading-relaxed">
                  ${Array.isArray(detail.conceptExplanation) 
                    ? detail.conceptExplanation.map((p: any) => {
                        if (typeof p === 'string') return `<p class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">${p}</p>`;
                        return `
                          <div class="space-y-2 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                            <h5 class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">${p.heading || 'Concept Breakdown'}</h5>
                            ${(p.paragraphs || p.points || []).map((par: string) => `<p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${par}</p>`).join('')}
                            ${p.visual?.svgContent ? `<div class="p-2 bg-slate-50 dark:bg-slate-950 rounded-lg overflow-x-auto my-2 border border-slate-200 dark:border-slate-800">${p.visual.svgContent}</div>` : ''}
                            ${p.visual?.caption ? `<div class="text-xs text-indigo-600 dark:text-indigo-400 font-medium">💡 ${p.visual.caption}</div>` : ''}
                          </div>
                        `;
                      }).join('')
                    : `<p class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">${detail.conceptExplanation}</p>`}
                </div>
              </div>
            ` : ''}
          </div>
        </section>

        <!-- 3. MUST-REMEMBER FORMULAS, NUMBERS & VALUES -->
        <section class="space-y-4 pt-4">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
            <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>⚡</span> 2. Must-Remember Formulas & Golden Facts
            </h3>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-semibold">High Yield</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${activeStep.mustRememberPoints.map(point => `
              <div class="p-3.5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed flex items-start gap-2.5">
                <span class="text-blue-600 dark:text-blue-400 font-black shrink-0 mt-0.5">✓</span>
                <span>${point}</span>
              </div>
            `).join('')}
          </div>

          ${detail?.formulae && detail.formulae.length > 0 ? `
            <div class="p-4 rounded-2xl bg-slate-900 text-white space-y-3 mt-3">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span>📐</span> Key Mathematical Formulas
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${detail.formulae.slice(0, 4).map((f: any) => `
                  <div class="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                    <span class="text-xs text-slate-400 block">${f.title || f.name || 'Formula'}</span>
                    <div class="font-mono text-emerald-400 text-sm font-bold">${f.formula || f.expression}</div>
                    ${f.variables ? `<span class="text-[11px] text-slate-400 block">${f.variables}</span>` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </section>

        <!-- 4. COMMON EXAM TRAPS & EXAMINER PITFALLS -->
        <section class="space-y-4 pt-4">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
            <h3 class="text-base sm:text-lg font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
              <span>⚠️</span> 3. Common Traps & Examiner Pitfalls
            </h3>
            <span class="text-xs text-rose-600 dark:text-rose-400 font-semibold">Avoid Negative Marks</span>
          </div>

          <div class="space-y-2.5">
            ${activeStep.commonTraps.map(trap => `
              <div class="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/50 text-xs sm:text-sm text-rose-950 dark:text-rose-200 flex items-start gap-3">
                <span class="text-rose-600 dark:text-rose-400 font-black text-base shrink-0 mt-0.5">!</span>
                <span class="leading-relaxed">${trap}</span>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- 5. REAL PAST YEAR NEET QUESTIONS (PYQs) -->
        ${additionalPyqs.length > 0 ? `
          <section class="space-y-4 pt-4">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>🏆</span> 4. Real NEET PYQs from this Topic
              </h3>
              <span class="text-xs text-slate-500">Past Exam Questions</span>
            </div>

            <div class="space-y-3">
              ${additionalPyqs.map((pyq: any, pIdx: number) => `
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
                  <div class="flex items-center justify-between gap-2">
                    <span class="text-xs font-bold text-slate-500 dark:text-slate-400">Question ${pIdx + 1}</span>
                    <span class="px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-[11px] font-bold">
                      NEET ${pyq.year || 'Exam'}
                    </span>
                  </div>

                  <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                    ${pyq.question}
                  </p>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    ${(pyq.options || []).map((opt: string, optI: number) => `
                      <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                        <span class="font-bold text-slate-400 mr-1.5">${String.fromCharCode(65 + optI)}.</span> ${opt}
                      </div>
                    `).join('')}
                  </div>

                  <!-- Toggle Solution Button -->
                  <div class="pt-2">
                    <button
                      type="button"
                      class="roadmap-toggle-pyq-sol text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                      data-target="pyq-sol-${pIdx}"
                    >
                      <span>Show Solution & NCERT Explanation ↓</span>
                    </button>
                    <div id="pyq-sol-${pIdx}" class="hidden mt-2.5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 space-y-1">
                      <div class="font-bold">Correct Answer: Option ${typeof pyq.correctOption === 'number' ? String.fromCharCode(65 + pyq.correctOption) : pyq.correctOption}</div>
                      <p class="leading-relaxed">${pyq.explanation || 'Directly formulated from NCERT textbook statement.'}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <!-- 6. TOPIC MASTERY TEST (MANDATORY GATEWAY TO UNLOCK NEXT TOPIC) -->
        <section id="topic-mastery-assessment" class="space-y-6 pt-6 border-t-2 border-slate-200 dark:border-slate-800">
          
          <div class="p-5 sm:p-6 rounded-3xl bg-slate-900 text-white space-y-4 border border-slate-800 shadow-xl">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div class="space-y-1">
                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${
                  isCurrentStepCompleted 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                } text-xs font-bold uppercase tracking-wider">
                  <span>${isCurrentStepCompleted ? '✓ Assessment Passed (15/15 — 100%)' : '🔒 15-Question Test Required to Pass & Unlock'}</span>
                </div>
                <h3 class="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                  <span>📝</span> Topic ${activeStep.stepNumber} Comprehensive Assessment (15 Questions)
                </h3>
              </div>
              <div class="text-xs text-slate-400">
                ${testQuestions.length} Questions • 100% Score Required
              </div>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ${isCurrentStepCompleted 
                ? 'You have already tested and mastered this foundational topic with a perfect 15/15 score. You may review the questions below or advance to the next topic.' 
                : 'Select your answers for all 15 questions below and click Submit. You must achieve 15/15 (100%) to unlock the next sequenced topic.'}
            </p>

            <!-- 15 QUESTION QUICK NAVIGATOR PALETTE -->
            <div class="pt-2">
              <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Question Palette (1 – 15)</span>
                <span id="answered-counter-badge" class="text-emerald-400 font-normal">0 of 15 Answered</span>
              </div>
              <div class="grid grid-cols-5 sm:grid-cols-15 gap-1.5" id="question-navigator-palette">
                ${testQuestions.map((_, qIndex) => `
                  <button
                    type="button"
                    class="q-nav-bubble h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all border border-slate-700 cursor-pointer flex items-center justify-center"
                    data-target-q="${qIndex}"
                    title="Jump to Question ${qIndex + 1}"
                  >
                    ${qIndex + 1}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Quiz Questions Form -->
          <div id="mastery-quiz-form" class="space-y-4" data-step-id="${activeStep.id}">
            ${testQuestions.map((quiz, qIdx) => `
              <div 
                id="mastery-card-${qIdx}"
                class="mastery-quiz-card p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 space-y-4 scroll-mt-24"
                data-q-idx="${qIdx}"
                data-correct-idx="${quiz.correctIndex}"
                data-question="${encodeURIComponent(quiz.question)}"
                data-explanation="${encodeURIComponent(quiz.explanation)}"
                data-options="${encodeURIComponent(JSON.stringify(quiz.options))}"
              >
                <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                  <span class="inline-flex items-center gap-1.5">
                    <span class="w-6 h-6 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 font-black flex items-center justify-center">${qIdx + 1}</span>
                    Question ${qIdx + 1} of ${testQuestions.length}
                  </span>
                  <span class="quiz-q-status text-xs font-semibold text-slate-400" data-status-q="${qIdx}">Not Answered</span>
                </div>

                <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                  ${quiz.question}
                </p>

                <div class="space-y-2.5">
                  ${quiz.options.map((opt, optIdx) => `
                    <button
                      type="button"
                      class="mastery-opt-btn w-full text-left p-3.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 text-xs sm:text-sm text-slate-800 dark:text-slate-200 transition-all flex items-center justify-between group cursor-pointer"
                      data-q-idx="${qIdx}"
                      data-opt-idx="${optIdx}"
                      data-opt-text="${encodeURIComponent(opt)}"
                    >
                      <div class="flex items-center gap-3">
                        <span class="opt-indicator w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 text-xs font-bold flex items-center justify-center text-slate-500 group-hover:border-blue-500 shrink-0">
                          ${String.fromCharCode(65 + optIdx)}
                        </span>
                        <span class="font-medium">${opt}</span>
                      </div>
                      <span class="opt-feedback text-xs font-bold hidden"></span>
                    </button>
                  `).join('')}
                </div>

                <!-- Detailed NCERT Explanation & Direct Learn Section Connection (Shown after submit) -->
                <div id="mastery-exp-${qIdx}" class="hidden p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs sm:text-sm space-y-2.5">
                  <div class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                    <span>💡</span> NCERT Solution & Reason:
                  </div>
                  <p class="exp-content text-slate-700 dark:text-slate-300 leading-relaxed">${quiz.explanation}</p>
                  
                  <div class="pt-2 border-t border-blue-200/60 dark:border-blue-800/60 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                    <span class="text-blue-700 dark:text-blue-300 font-semibold flex items-center gap-1">
                      <span>📚</span> Topic: ${activeStep.topicTitle}
                    </span>
                    <div class="flex items-center gap-2">
                      <a
                        href="#topic/${activeStep.topicId}"
                        class="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-1"
                      >
                        <span>📖 Open Full Topic Learn Section →</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Submit / Result Feedback Area -->
          <div id="mastery-assessment-control-box" class="space-y-4">
            ${isCurrentStepCompleted ? `
              <div class="p-6 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/40 text-center space-y-3">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider">
                  <span>🎉</span> 100% Mastery Confirmed (15/15)
                </div>
                <h4 class="text-xl font-black text-emerald-900 dark:text-emerald-200">
                  Topic ${activeStep.stepNumber} Mastered!
                </h4>
                <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                  You have successfully passed the 15-question mastery check for this topic. ${nextStep ? `Topic ${nextStep.stepNumber} is unlocked!` : ''}
                </p>
                <div class="flex items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    id="btn-retest-topic"
                    class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-50 cursor-pointer"
                  >
                    Retake 15-Question Assessment
                  </button>
                </div>
              </div>
            ` : `
              <div class="p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800 shadow-xl">
                <div class="space-y-1 text-center sm:text-left">
                  <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider">Ready to submit all 15 questions?</div>
                  <div class="text-sm font-bold text-slate-300">Pass this 15-question test with 100% to unlock Topic ${nextStep ? nextStep.stepNumber : 'Next'}.</div>
                </div>
                <button
                  type="button"
                  id="btn-submit-mastery-test"
                  class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
                  data-step-id="${activeStep.id}"
                  data-total-questions="${testQuestions.length}"
                  ${nextStep ? `data-next-step-id="${nextStep.id}"` : ''}
                >
                  <span>Submit 15-Question Test & Check Mastery →</span>
                </button>
              </div>
            `}
          </div>

        </section>

        <!-- 7. UNLOCK NEXT TOPIC CONTAINER (LOCKED OR UNLOCKED) -->
        <section id="next-topic-unlock-container" class="pt-6 border-t border-slate-200 dark:border-slate-800">
          ${isCurrentStepCompleted ? `
            <!-- UNLOCKED STATE -->
            <div class="p-6 sm:p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-500/50 text-center space-y-4 shadow-lg shadow-emerald-500/10">
              <div class="space-y-2 max-w-lg mx-auto">
                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-black uppercase tracking-wider">
                  <span>✓</span> Unlocked & Ready
                </div>
                <h4 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  ${nextStep ? `Advance to Topic ${nextStep.stepNumber}: ${nextStep.topicTitle}` : '🎉 NEET Foundations Completed!'}
                </h4>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  ${nextStep 
                    ? `Next up: ${nextStep.subjectName} — ${nextStep.chapterTitle}. Keep the momentum going!` 
                    : 'You have mastered all foundational topics in this sequenced path!'}
                </p>
              </div>

              <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                ${nextStep ? `
                  <button
                    type="button"
                    class="btn-advance-to-next w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    data-current-step-id="${activeStep.id}"
                    data-next-step-id="${nextStep.id}"
                  >
                    <span>🚀 Advance to Topic ${nextStep.stepNumber}: ${nextStep.topicTitle} →</span>
                  </button>
                ` : `
                  <a
                    href="#pyqs"
                    class="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-xl transition-all inline-block"
                  >
                    Proceed to Full PYQ Practice Bank →
                  </a>
                `}
              </div>
            </div>
          ` : `
            <!-- LOCKED STATE -->
            <div class="p-6 sm:p-8 rounded-3xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center space-y-3">
              <div class="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center text-xl mx-auto font-bold">
                🔒
              </div>
              <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                Topic ${nextStep ? nextStep.stepNumber : 'Next'} is Locked
              </h4>
              <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                You must pass the <strong>Topic ${activeStep.stepNumber} Mastery Assessment</strong> above with a 100% score before unlocking ${nextStep ? `Topic ${nextStep.stepNumber} (${nextStep.topicTitle})` : 'the next topic'}.
              </p>
              <button
                type="button"
                id="btn-scroll-to-test"
                class="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors cursor-pointer"
              >
                Take Assessment to Unlock ↑
              </button>
            </div>
          `}

          ${prevStep ? `
            <div class="pt-4 text-center">
              <button
                type="button"
                class="btn-nav-step text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 underline transition-colors cursor-pointer"
                data-step-id="${prevStep.id}"
              >
                ← Back to Topic ${prevStep.stepNumber} (${prevStep.topicTitle.substring(0, 20)}...)
              </button>
            </div>
          ` : ''}
        </section>

      </article>

    </div>
  `;
}
