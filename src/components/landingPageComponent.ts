import { renderBrandLogo } from './brandLogoComponent';
import { StorageService } from '../services/storageService';
import { AuthService } from '../services/authService';
import { MetaPixelService } from '../services/metaPixelService';
import { renderFormulaHTML } from '../utils/mathRenderer';

export function renderLandingPage(): string {
  const isAuthenticated = AuthService.isAuthenticated();
  const logoHref = isAuthenticated ? '#home' : '#landing';

  // Pre-rendered formula for zero-flicker instant display inside product preview
  const coulombEq = renderFormulaHTML("F = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{|q_1 q_2|}{r^2}");

  return `
    <div class="min-h-screen bg-[#FFFFFF] dark:bg-[#0B1120] text-[#0F172A] dark:text-[#F8FAFC] font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col overflow-x-hidden transition-colors duration-200">
      
      <!-- ==========================================
           HEADER / NAVBAR (Minimal, Clean, Fast)
           ========================================== -->
      <div class="sticky top-2 sm:top-3.5 z-40 w-full px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <header class="w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 rounded-2xl shadow-xs transition-all">
          <div class="px-3.5 sm:px-6 h-[68px] sm:h-[76px] flex items-center justify-between">
            
            <!-- Brand Wordmark -->
            <a href="${logoHref}" class="flex items-center shrink-0 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl py-1 px-0.5 select-none" aria-label="${isAuthenticated ? 'VG Insights – Learn' : 'VG Insights – NEET UG 2027'}">
              ${renderBrandLogo({ size: 'header' })}
            </a>

            <!-- Right Controls -->
            <div class="flex items-center shrink-0 gap-2 sm:gap-3">
              <!-- Announcement Chip (Desktop) -->
              <span class="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>NEET UG 2027</span>
              </span>

              <!-- Theme Toggle Button -->
              <button
                id="btn-landing-theme-toggle"
                type="button"
                class="flex items-center justify-center w-9 h-9 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 shrink-0 cursor-pointer"
                title="Toggle light / dark theme"
                aria-label="Toggle theme"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 brand-logo-dark hidden dark:block text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 brand-logo-light dark:hidden text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
              </button>

              <!-- Header Sign In / Launch CTA -->
              <button
                type="button"
                id="btn-nav-login"
                class="landing-primary-cta px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs active:scale-[0.98] transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer select-none"
              >
                <span>${isAuthenticated ? 'Go to Workspace →' : 'Sign In'}</span>
              </button>
            </div>

          </div>
        </header>
      </div>

      <!-- ==========================================
           SECTION 1: HERO — ABOVE THE FOLD
           ========================================== -->
      <section class="w-full pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div class="flex flex-col items-center text-center space-y-5 sm:space-y-6">
          
          <!-- Announcement Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>NEET UG 2027 PREPARATION</span>
          </div>

          <!-- Main Headline -->
          <h1 class="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] sm:leading-[1.12] max-w-4xl">
            Your NEET Dream Deserves a <span class="text-blue-600 dark:text-blue-400">Smarter Plan.</span>
          </h1>

          <!-- Supporting Text -->
          <p class="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Master NCERT concepts, practise previous-year questions, and discover your weak areas — all in one place.
          </p>

          <!-- 3 Concise Benefits with Green Highlights -->
          <div class="w-full max-w-xl mx-auto pt-1 pb-2">
            <div class="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
              <span class="flex items-center gap-2">
                <span class="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px] font-black">✓</span>
                <span>NCERT-Aligned Study Resources</span>
              </span>
              <span class="flex items-center gap-2">
                <span class="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px] font-black">✓</span>
                <span>NEET Previous-Year Questions</span>
              </span>
              <span class="flex items-center gap-2">
                <span class="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px] font-black">✓</span>
                <span>Smart Practice & Analysis</span>
              </span>
            </div>
          </div>

          <!-- Primary CTA Button (Mobile-First Touch Target) -->
          <div class="w-full sm:w-auto flex flex-col items-center gap-2 pt-1">
            <button
              type="button"
              id="btn-hero-start-cta"
              class="landing-primary-cta w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-base sm:text-lg shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            >
              <span>Start My NEET Preparation</span>
              <span class="text-xl leading-none">→</span>
            </button>
            <p class="text-[12px] sm:text-xs text-slate-500 dark:text-slate-400 text-center">
              Explore the library. Unlock premium practice when you're ready.
            </p>
          </div>

          <!-- Actual Product Interface Preview (Clean, Fast, Responsive) -->
          <div class="w-full mt-6 sm:mt-8 pt-2">
            <div class="relative max-w-4xl mx-auto rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden text-left">
              
              <!-- Chrome Bar -->
              <div class="bg-slate-950 rounded-t-xl px-3 sm:px-4 py-2 flex items-center justify-between border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span class="ml-2 hidden sm:inline text-slate-300 font-sans font-medium">vginsights.in/study</span>
                </div>
                <div class="flex items-center gap-2 text-[10px] font-sans font-semibold">
                  <span class="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                    ● Real Study Workspace
                  </span>
                  <span class="hidden sm:inline text-slate-400">Class 12 Physics</span>
                </div>
              </div>

              <!-- Product Workspace Preview Body -->
              <div class="bg-white dark:bg-slate-950 rounded-b-xl p-3.5 sm:p-6 space-y-4">
                
                <!-- Topic Bar -->
                <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div class="flex items-center gap-2.5">
                    <span class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      ⚡
                    </span>
                    <div>
                      <p class="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Physics • Chapter 01</p>
                      <p class="font-bold text-sm sm:text-base text-slate-900 dark:text-white">Electric Charges & Fields: Coulomb's Law</p>
                    </div>
                  </div>
                  <span class="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold">
                    ⏱ Active Study
                  </span>
                </div>

                <!-- 2-Column Responsive Snippet -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <!-- Formula Derivation -->
                  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                      <span>Formula Derivation</span>
                      <span class="text-blue-600 dark:text-blue-400 font-mono text-[10px]">NCERT Sec 1.6</span>
                    </div>
                    <div class="p-2.5 bg-white dark:bg-slate-950 rounded-lg border border-slate-200/60 dark:border-slate-800 text-center text-slate-900 dark:text-white text-xs">
                      ${coulombEq}
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      Force inversely proportional to medium permittivity $\\varepsilon_r$. High-yield NEET calculation point.
                    </p>
                  </div>

                  <!-- Solved PYQ Question Preview -->
                  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                      <span class="flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>NEET Solved PYQ</span>
                      </span>
                      <span class="text-slate-400 text-[10px]">NEET 2023</span>
                    </div>
                    <p class="text-xs text-slate-800 dark:text-slate-200 font-medium">
                      Two point charges +3μC and +4μC repel each other with force 20 N. If -2μC is added to each, new force is?
                    </p>
                    <div class="flex items-center justify-between text-[11px] pt-1">
                      <span class="text-emerald-600 dark:text-emerald-400 font-bold">Answer: 6.67 N (Attractive)</span>
                      <span class="text-slate-400 text-[10px]">Step-by-step verified</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ==========================================
           SECTION 2: SHOW WHAT STUDENTS GET
           ========================================== -->
      <section class="w-full py-12 sm:py-16 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          <div class="text-center space-y-2 max-w-2xl mx-auto">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Everything You Need. One Study Platform.
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Clear distinction between free foundation resources and smart premium practice.
            </p>
          </div>

          <!-- Exactly Four Feature Blocks -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            <!-- Block 1: NCERT Study Library (Free) -->
            <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-blue-300 dark:hover:border-blue-700 transition-all flex flex-col justify-between space-y-4">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
                    📚
                  </div>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    Free Library Access
                  </span>
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">
                  NCERT Study Library
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Organised Class 11 & 12 Physics, Chemistry and Biology resources.
                </p>
              </div>
              <div class="text-[11px] font-medium text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                Covers all 270+ NEET UG topics
              </div>
            </div>

            <!-- Block 2: 10+ Years of PYQs (Free) -->
            <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-blue-300 dark:hover:border-blue-700 transition-all flex flex-col justify-between space-y-4">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
                    📝
                  </div>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    Free Library Access
                  </span>
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">
                  10+ Years of PYQs
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Practise previous-year questions with explanations.
                </p>
              </div>
              <div class="text-[11px] font-medium text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                Official NTA NEET question archive
              </div>
            </div>

            <!-- Block 3: Smart Practice (Premium) -->
            <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 shadow-xs hover:border-blue-400 dark:hover:border-blue-600 transition-all flex flex-col justify-between space-y-4 relative">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-xs">
                    🎯
                  </div>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    Premium Feature
                  </span>
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">
                  Smart Practice
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Strengthen concepts through targeted questions and revision.
                </p>
              </div>
              <div class="text-[11px] font-medium text-blue-600 dark:text-blue-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                Custom test generator & flashcards
              </div>
            </div>

            <!-- Block 4: Performance Insights (Premium) -->
            <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 shadow-xs hover:border-blue-400 dark:hover:border-blue-600 transition-all flex flex-col justify-between space-y-4 relative">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-xs">
                    🩺
                  </div>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    Premium Feature
                  </span>
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">
                  Performance Insights
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Identify mistakes and understand where you need more practice.
                </p>
              </div>
              <div class="text-[11px] font-medium text-blue-600 dark:text-blue-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                AI Weakness Doctor & Error Book
              </div>
            </div>

          </div>

          <!-- Transparent Note -->
          <p class="text-center text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Explore notes and PYQs freely. Upgrade to premium practice when you are ready for simulated full-length mocks and personalized error diagnosis.
          </p>

        </div>
      </section>

      <!-- ==========================================
           SECTION 3: CREATE GENUINE URGENCY
           ========================================== -->
      <section class="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div class="text-center space-y-4">
          
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
            <span>📅</span>
            <span>Targeting NEET UG 2027</span>
          </div>

          <!-- Section Heading -->
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Every Day Counts. Make Your Next Study Session Matter.
          </h2>

          <!-- Supporting Text -->
          <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            NEET preparation is a long journey. Start building consistency today instead of postponing your next study session.
          </p>

          <!-- Three Simple Steps -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 pb-6 text-left">
            
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-2">
              <div class="text-blue-600 dark:text-blue-400 font-mono font-black text-sm">
                01
              </div>
              <h3 class="text-base font-bold text-slate-900 dark:text-white">
                Learn a concept.
              </h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Study concise NCERT theory, clear definitions, and formula derivations without distraction.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-2">
              <div class="text-blue-600 dark:text-blue-400 font-mono font-black text-sm">
                02
              </div>
              <h3 class="text-base font-bold text-slate-900 dark:text-white">
                Practise questions.
              </h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Test your understanding with authentic previous-year questions and chapterwise MCQs.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-2">
              <div class="text-blue-600 dark:text-blue-400 font-mono font-black text-sm">
                03
              </div>
              <h3 class="text-base font-bold text-slate-900 dark:text-white">
                Review your mistakes.
              </h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Diagnose errors immediately so misconceptions don't repeat on exam day.
              </p>
            </div>

          </div>

          <!-- Urgency CTA -->
          <div class="pt-2">
            <button
              type="button"
              id="btn-urgency-start-cta"
              class="landing-primary-cta px-8 py-3.5 sm:py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm sm:text-base shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all inline-flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            >
              <span>Start Studying Today</span>
              <span>→</span>
            </button>
          </div>

        </div>
      </section>

      <!-- ==========================================
           SECTION 4: BUILD TRUST
           ========================================== -->
      <section class="w-full py-12 sm:py-16 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div class="text-center space-y-2 max-w-2xl mx-auto">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Built for Focused NEET Preparation.
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Verified syllabus discipline aligned with the latest National Testing Agency standards.
            </p>
          </div>

          <!-- Verified Platform Details Grid -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
              <div class="text-emerald-600 dark:text-emerald-400 font-bold text-lg">✓</div>
              <p class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Class 11 & 12</p>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">Complete syllabus resources</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
              <div class="text-emerald-600 dark:text-emerald-400 font-bold text-lg">✓</div>
              <p class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">All 3 Subjects</p>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">Physics, Chemistry & Biology</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
              <div class="text-emerald-600 dark:text-emerald-400 font-bold text-lg">✓</div>
              <p class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">PYQ Practice</p>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">Previous-year question practice</p>
            </div>

            <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
              <div class="text-emerald-600 dark:text-emerald-400 font-bold text-lg">✓</div>
              <p class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Structured Answers</p>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">Explanations & revision sheets</p>
            </div>

          </div>

          <!-- Compact Founder Card -->
          <div class="max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left">
            <div class="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center text-2xl font-bold shrink-0">
              🩺
            </div>
            <div class="space-y-1 text-xs sm:text-sm">
              <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  Dr. Prajwal Kabadi, MBBS
                </span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Medical Mentor
                </span>
              </div>
              <p class="text-slate-600 dark:text-slate-300 font-medium">
                Created by a medical professional and an education technology team.
              </p>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">
                Co-founded with Mr. Amit Bangare to give NEET aspirants a structured, distraction-free preparation system.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- ==========================================
           SECTION 5: FINAL CTA
           ========================================== -->
      <section class="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div class="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 sm:p-12 lg:p-14 text-center space-y-5 shadow-xl shadow-blue-500/20">
          
          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Your Next Step Starts Today.
          </h2>
          
          <p class="text-sm sm:text-base md:text-lg text-blue-100 max-w-xl mx-auto leading-relaxed">
            Take control of your NEET preparation, one concept at a time.
          </p>

          <div class="pt-2 flex flex-col items-center gap-2">
            <button
              type="button"
              id="btn-final-start-cta"
              class="landing-primary-cta px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-slate-50 text-blue-700 font-black text-base sm:text-lg shadow-lg active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/40"
            >
              <span>Start My NEET Preparation</span>
              <span>→</span>
            </button>
            <p class="text-[11px] sm:text-xs text-blue-100/90 text-center pt-1">
              Begin with the study library. Premium practice features are available through subscription.
            </p>
          </div>

        </div>
      </section>

      <!-- ==========================================
           FOOTER: ESSENTIAL LINKS & BRAND
           ========================================== -->
      <footer class="w-full border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#080D1A] py-8 sm:py-10 text-xs text-slate-500 dark:text-slate-400">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <!-- Brand -->
            <div class="flex items-center gap-3">
              ${renderBrandLogo({ size: 'sm' })}
              <span class="text-[11px] text-slate-400">|</span>
              <span class="text-[11px] text-slate-500 dark:text-slate-400">NEET UG 2027</span>
            </div>

            <!-- Essential Links (About Us | Contact | Privacy Policy | Terms | Refund Policy) -->
            <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <button type="button" class="btn-legal-link hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer" data-doc="about">About Us</button>
              <span class="text-slate-300 dark:text-slate-700">•</span>
              <button type="button" class="btn-legal-link hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer" data-doc="contact">Contact</button>
              <span class="text-slate-300 dark:text-slate-700">•</span>
              <button type="button" class="btn-legal-link hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer" data-doc="privacy">Privacy Policy</button>
              <span class="text-slate-300 dark:text-slate-700">•</span>
              <button type="button" class="btn-legal-link hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer" data-doc="terms">Terms</button>
              <span class="text-slate-300 dark:text-slate-700">•</span>
              <button type="button" class="btn-legal-link hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer" data-doc="refund">Refund Policy</button>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 dark:text-slate-500">
            <div>
              © 2026 VG Insights (<a href="https://vginsights.in/" class="text-blue-600 dark:text-blue-400 hover:underline">vginsights.in</a>). Built for NEET UG Aspirants. All rights reserved.
            </div>
            <div>
              Master NEET. One Concept at a Time.
            </div>
          </div>

        </div>
      </footer>

      <!-- Lightweight Legal Policy Modal Container -->
      <div id="modal-legal-policy" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
        <div class="w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
          <div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h3 id="legal-modal-title" class="font-bold text-sm sm:text-base text-slate-900 dark:text-white"></h3>
            <button type="button" id="btn-close-legal" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer" aria-label="Close modal">
              ✕
            </button>
          </div>
          <div id="legal-modal-body" class="p-5 overflow-y-auto text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed"></div>
          <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-end">
            <button type="button" id="btn-dismiss-legal" class="px-4 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs cursor-pointer">
              Close
            </button>
          </div>
        </div>
      </div>

    </div>
  `;
}

export function initLandingPageEvents(onOpenAuthModal: () => void): void {
  // 1. Theme Toggle Button
  const landingThemeBtn = document.getElementById('btn-landing-theme-toggle');
  if (landingThemeBtn) {
    landingThemeBtn.addEventListener('click', () => {
      const current = StorageService.getTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      StorageService.setTheme(next);
    });
  }

  // 2. High-Converting Primary CTA Action Trigger
  const triggerCtaAction = async (ctaLocation: string) => {
    // Track Lead with Meta Pixel (without duplicate PageView)
    try {
      MetaPixelService.trackLead('Start My NEET Preparation', {
        cta_location: ctaLocation,
        target_exam: 'NEET UG 2027',
      });
    } catch (e) {
      console.warn('[MetaPixel] CTA lead track skipped:', e);
    }

    if (AuthService.isAuthenticated()) {
      window.location.hash = '#home';
      return;
    }

    try {
      const res = await AuthService.signInWithGoogle();
      if (res && res.success) {
        window.location.hash = '#home';
      } else if (res && res.error && res.error !== 'Sign-in cancelled') {
        onOpenAuthModal();
      }
    } catch (err) {
      console.warn('[Landing] Direct Google sign-in fallback to modal:', err);
      onOpenAuthModal();
    }
  };

  // Wire all primary CTA buttons
  const ctaButtons = [
    { id: 'btn-hero-start-cta', loc: 'hero' },
    { id: 'btn-urgency-start-cta', loc: 'urgency_section' },
    { id: 'btn-final-start-cta', loc: 'final_cta_section' },
    { id: 'btn-nav-login', loc: 'header_nav' },
  ];

  ctaButtons.forEach(({ id, loc }) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        triggerCtaAction(loc);
      });
    }
  });

  // 3. Essential Footer Legal Modals (About Us, Contact, Privacy Policy, Terms, Refund Policy)
  const legalModal = document.getElementById('modal-legal-policy');
  const legalTitle = document.getElementById('legal-modal-title');
  const legalBody = document.getElementById('legal-modal-body');
  const btnCloseLegal = document.getElementById('btn-close-legal');
  const btnDismissLegal = document.getElementById('btn-dismiss-legal');

  const closeLegalModal = () => {
    if (legalModal) {
      legalModal.classList.add('hidden');
      legalModal.classList.remove('flex');
    }
  };

  if (btnCloseLegal) btnCloseLegal.addEventListener('click', closeLegalModal);
  if (btnDismissLegal) btnDismissLegal.addEventListener('click', closeLegalModal);
  if (legalModal) {
    legalModal.addEventListener('click', (e) => {
      if (e.target === legalModal) closeLegalModal();
    });
  }

  const legalContent: Record<string, { title: string; html: string }> = {
    about: {
      title: 'About VG Insights',
      html: `
        <p><strong>VG Insights</strong> (vginsights.in) is an academic preparation platform built specifically for Indian medical entrance aspirants preparing for NEET UG 2027 and beyond.</p>
        <p><strong>Leadership:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Dr. Prajwal Kabadi, MBBS</strong> — Founder & Chief Academic Mentor.</li>
          <li><strong>Mr. Amit Bangare</strong> — Co-Founder & Product Technology Lead.</li>
        </ul>
        <p>Our mission is to replace fragmented study material with a structured, syllabus-disciplined digital workspace covering NCERT concepts, 10+ years of solved previous-year questions, and diagnostic performance analytics.</p>
      `,
    },
    contact: {
      title: 'Contact VG Insights',
      html: `
        <p>Have questions about your NEET preparation, syllabus access, or subscriptions?</p>
        <p><strong>Email Support:</strong> <a href="mailto:support@vginsights.in" class="text-blue-600 dark:text-blue-400 underline">support@vginsights.in</a></p>
        <p><strong>Alternate Contact:</strong> <a href="mailto:optionvortex@gmail.com" class="text-blue-600 dark:text-blue-400 underline">optionvortex@gmail.com</a></p>
        <p><strong>Official Website:</strong> <a href="https://vginsights.in/" target="_blank" class="text-blue-600 dark:text-blue-400 underline">https://vginsights.in/</a></p>
        <p class="text-slate-500">Student queries are typically answered within 24 hours on working days.</p>
      `,
    },
    privacy: {
      title: 'Privacy Policy',
      html: `
        <p><strong>Effective Date:</strong> January 2026</p>
        <p>VG Insights respects your privacy. When you sign in with Google or create an account, we collect only your basic profile information (name, email, and Google profile picture) to personalize your study workspace, save your progress, and provide mock test analytics.</p>
        <p><strong>Key Highlights:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li>We never sell or rent your personal information to third parties.</li>
          <li>Payment transactions are handled securely by Razorpay. We do not store card numbers, UPI PINs, or net banking passwords.</li>
          <li>Meta Pixel tracking is utilized solely to measure educational marketing effectiveness on Meta platforms.</li>
        </ul>
        <p>For data deletion requests, email us at <a href="mailto:support@vginsights.in" class="text-blue-600 dark:text-blue-400 underline">support@vginsights.in</a>.</p>
      `,
    },
    terms: {
      title: 'Terms of Service',
      html: `
        <p>By accessing or using VG Insights (vginsights.in), you agree to these Terms of Service.</p>
        <p><strong>1. Educational Purpose:</strong> All notes, formula sheets, mock tests, and question banks are provided for NEET UG exam preparation.</p>
        <p><strong>2. Account Security:</strong> You are responsible for maintaining the confidentiality of your sign-in credentials.</p>
        <p><strong>3. Intellectual Property:</strong> Content, algorithms, and interface designs on VG Insights are proprietary. Unauthorized redistribution or scraping is prohibited.</p>
        <p><strong>4. Fair Use:</strong> Accounts engaged in abuse or unauthorized sharing may be restricted.</p>
      `,
    },
    refund: {
      title: 'Refund & Cancellation Policy',
      html: `
        <p>VG Insights provides transparent pricing with clearly described study features and free foundation access.</p>
        <p><strong>1. Failed or Duplicate Transactions:</strong> If your account is debited but access is not activated due to a gateway timeout, Razorpay automatically reverses the payment to your original payment method within 5–7 banking days.</p>
        <p><strong>2. Flexible Subscriptions:</strong> You can cancel recurring AutoPay subscriptions anytime with one click in your Account / Pricing page. Access remains active until the end of your paid billing cycle.</p>
        <p><strong>3. Support Assistance:</strong> If you face any billing discrepancy, reach out to <a href="mailto:support@vginsights.in" class="text-blue-600 dark:text-blue-400 underline">support@vginsights.in</a> with your payment ID.</p>
      `,
    },
  };

  document.querySelectorAll<HTMLElement>('.btn-legal-link').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const docType = btn.getAttribute('data-doc') || 'about';
      const doc = legalContent[docType] || legalContent.about;
      if (legalTitle) legalTitle.textContent = doc.title;
      if (legalBody) legalBody.innerHTML = doc.html;
      if (legalModal) {
        legalModal.classList.remove('hidden');
        legalModal.classList.add('flex');
      }
    });
  });
}
