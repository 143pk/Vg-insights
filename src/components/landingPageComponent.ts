import { SUBJECTS, TOPICS } from '../data/neetData';
import { renderBrandLogo } from './brandLogoComponent';

// Helper to safely render KaTeX formula string or HTML fallback
function renderKaTeXFormula(latex: string, displayMode: boolean = false): string {
  // If katex is globally available in window, render it immediately
  if (typeof window !== 'undefined' && (window as any).katex) {
    try {
      return (window as any).katex.renderToString(latex, {
        displayMode,
        throwOnError: false,
      });
    } catch {
      // fallback
    }
  }
  // Return semantic formula container that will be picked up by auto-render
  return `<span class="katex-render-target ${displayMode ? 'block my-2 text-center' : 'inline-block'}" data-latex="${encodeURIComponent(latex)}" data-display="${displayMode ? 'true' : 'false'}">${latex}</span>`;
}

export function renderLandingPage(): string {
  const totalTopics = TOPICS.length || 277;

  // Pre-rendered formulas for zero-flicker instant display
  const nernstEq = renderKaTeXFormula("E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n}\\log_{10} Q \\quad \\text{at } 298\\text{ K}", true);
  const gibbsEq = renderKaTeXFormula("\\Delta G = \\Delta H - T\\Delta S", true);
  const gibbsKeq = renderKaTeXFormula("\\Delta G^\\circ = -RT \\ln K = -2.303 RT \\log_{10} K", true);
  const coulombEq = renderKaTeXFormula("F = \\frac{1}{4\\pi\\varepsilon_0 \\varepsilon_r} \\cdot \\frac{|q_1 q_2|}{r^2}", true);
  const aldolEq = renderKaTeXFormula("2\\,\\text{CH}_3\\text{CHO} \\xrightarrow{\\text{OH}^-} \\text{CH}_3\\text{CH}=\\text{CHCHO} + \\text{H}_2\\text{O}", true);
  const opticsEq = renderKaTeXFormula("\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}", true);

  return `
    <div class="min-h-screen bg-[#FFFFFF] text-[#0F172A] font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col overflow-x-hidden">
      
      <!-- ==========================================
           FLOATING PREMIUM NAVBAR
           ========================================== -->
      <div class="sticky top-3.5 z-50 w-full px-2.5 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all">
        <header class="w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm shadow-slate-900/5 transition-all">
          <div class="px-3 sm:px-6 h-[78px] sm:h-[84px] md:h-[90px] flex items-center justify-between">
            
            <!-- Brand Wordmark: The primary brand identity -->
            <a href="#landing" class="flex items-center shrink-0 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl py-1 px-0.5 select-none">
              ${renderBrandLogo({ size: 'header' })}
            </a>

            <!-- Desktop Navigation Links -->
            <nav class="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <a href="#ecosystem" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Ecosystem</a>
              <a href="#library" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">NEET Library</a>
              <a href="#pyqs" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">PYQs</a>
              <a href="#revision" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Revision</a>
              <a href="#weakness-doctor" class="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>AI Doctor</span>
                <span class="px-1.5 py-0.5 text-[10px] font-extrabold uppercase bg-blue-50 text-blue-600 border border-blue-200 rounded-md">Smart</span>
              </a>
              <a href="#mock" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Weekly Mock</a>
            </nav>

            <!-- Right Actions -->
            <div class="flex items-center shrink-0 gap-1.5 sm:gap-3">
              <button
                type="button"
                id="btn-nav-login"
                class="hidden sm:inline-flex px-3 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none cursor-pointer"
              >
                Login
              </button>
              <a
                href="#home"
                id="btn-nav-guest"
                class="hidden md:inline-flex px-3.5 py-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 bg-slate-100 dark:bg-slate-800 rounded-xl transition-colors"
              >
                Guest Access
              </a>
              <button
                type="button"
                id="btn-nav-get-started"
                class="px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center gap-1 sm:gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
              >
                <span>Start Free</span>
                <span class="text-blue-200 hidden xs:inline">→</span>
              </button>

              <!-- Mobile Menu Toggle Button -->
              <button
                type="button"
                id="btn-mobile-menu-toggle"
                class="lg:hidden p-1.5 sm:p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>

          <!-- Mobile Dropdown Menu -->
          <div id="mobile-nav-dropdown" class="hidden lg:hidden border-t border-slate-200/80 dark:border-slate-800 px-5 py-4 space-y-3 bg-white/95 dark:bg-slate-900/95 rounded-b-2xl">
            <div class="flex flex-col space-y-2.5 font-semibold text-sm text-slate-600 dark:text-slate-300">
              <a href="#ecosystem" class="py-1.5 hover:text-blue-600 mobile-nav-link">Ecosystem</a>
              <a href="#library" class="py-1.5 hover:text-blue-600 mobile-nav-link">NEET Library</a>
              <a href="#pyqs" class="py-1.5 hover:text-blue-600 mobile-nav-link">PYQs (2014–2025)</a>
              <a href="#revision" class="py-1.5 hover:text-blue-600 mobile-nav-link">Revision Sheets</a>
              <a href="#weakness-doctor" class="py-1.5 hover:text-blue-600 mobile-nav-link">AI Weakness Doctor 🩺</a>
              <a href="#mock" class="py-1.5 hover:text-blue-600 mobile-nav-link">Weekly 720 Mock</a>
            </div>
            <div class="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <button
                type="button"
                id="btn-mobile-login"
                class="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Login with Email & OTP
              </button>
              <a
                href="#home"
                class="w-full py-2.5 text-center rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
              >
                Continue as Guest
              </a>
              <button
                type="button"
                id="btn-mobile-get-started"
                class="w-full py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors"
              >
                Start Learning Free →
              </button>
            </div>
          </div>
        </header>
      </div>

      <!-- ==========================================
           SECTION 1: HERO SECTION & ASPIRATIONAL POSTER COMPOSITION
           ========================================== -->
      <section class="relative pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-16 lg:pb-28 overflow-hidden landing-grid-pattern">
        
        <!-- Ambient Radial Light Layers -->
        <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[48rem] h-[32rem] hero-radial-glow pointer-events-none -z-10 animate-ambient-glow"></div>
        <div class="absolute top-1/4 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div class="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Top Hero Editorial Typography -->
          <div class="max-w-4xl mx-auto text-center space-y-6 sm:space-y-7">
            
            <!-- Official VG Insights Logo at top of Hero -->
            <div class="flex items-center justify-center pt-2 pb-1">
              ${renderBrandLogo({ size: 'hero' })}
            </div>

            <!-- Top Animated Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-950/70 border border-blue-200/90 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wider uppercase shadow-xs">
              <span class="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <span>THE SMARTER WAY TO PREPARE FOR NEET</span>
            </div>

            <!-- Hero Headline -->
            <h1 class="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.06]">
              Your NEET Preparation.<br />
              <span class="text-[#2563EB] bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#1D4ED8] bg-clip-text text-transparent">Reimagined.</span>
            </h1>

            <!-- Subheading -->
            <p class="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Learn concepts. Practice questions. Master your weaknesses.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <button
                type="button"
                id="btn-hero-start-free"
                class="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white text-lg font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Start Learning Free</span>
                <span class="text-blue-200 text-xl">→</span>
              </button>
            </div>

            <!-- Trust Row -->
            <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 pt-2">
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                Free to explore
              </span>
              <span class="text-slate-300 dark:text-slate-700">•</span>
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Built for NEET UG
              </span>
              <span class="text-slate-300 dark:text-slate-700">•</span>
              <span class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
                ${totalTopics}+ High-Yield Concepts
              </span>
            </div>

          </div>

          <!-- ==========================================
               HERO VISUAL: CINEMATIC ASPIRATIONAL POSTER & PRODUCT DASHBOARD
               ========================================== -->
          <div id="hero-visual-container" class="mt-12 sm:mt-16 lg:mt-20 relative max-w-5xl mx-auto perspective-1500">
            
            <!-- Atmospheric Outer Glow -->
            <div class="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-blue-600/20 rounded-3xl blur-2xl -z-10"></div>

            <!-- Main Device Mockup (Laptop / Tablet Futuristic Screen) -->
            <div id="hero-mockup-device" class="hero-mockup-init relative bg-[#0F172A] rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 shadow-2xl border border-slate-700/80 will-change-transform">
              
              <!-- Screen Chrome Bar -->
              <div class="bg-slate-900 rounded-t-xl sm:rounded-t-2xl px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div class="px-4 py-1 rounded-full bg-slate-950/90 text-xs font-mono text-slate-300 flex items-center gap-2 border border-slate-800">
                  <span class="text-emerald-400">●</span>
                  <span>https://vginsights.in/app</span>
                </div>
                <div class="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <span class="hidden sm:inline text-blue-400">NEET UG 2026 Batch</span>
                  <span class="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 text-[10px] font-bold">NTA Pattern</span>
                </div>
              </div>

              <!-- Internal Application View -->
              <div class="bg-[#F8FAFC] dark:bg-slate-950 rounded-b-xl sm:rounded-b-2xl p-4 sm:p-6 lg:p-8 space-y-6 text-left">
                
                <!-- Live Study Header Inside Mockup -->
                <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      ⚡
                    </div>
                    <div>
                      <div class="flex items-center gap-2 text-[11px] font-bold text-blue-600 uppercase">
                        <span>Class 12 Physics</span>
                        <span>•</span>
                        <span>Chapter 01</span>
                      </div>
                      <h2 class="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        Electric Charges & Fields: Coulomb's Law
                      </h2>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold font-mono">
                      ⏱ Active Recall: 18m 42s
                    </span>
                  </div>
                </div>

                <!-- 2-Column Split Inside Device Screen -->
                <div class="grid grid-cols-1 md:grid-cols-12 gap-5">
                  
                  <!-- Left: Formula & Concept Derivation -->
                  <div class="md:col-span-7 bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-3">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                      <span>Formula & Medium Dependence</span>
                      <span class="text-blue-600">High-Yield NEET</span>
                    </div>
                    <div class="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/70 dark:border-slate-800">
                      ${coulombEq}
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Force in dielectric medium of constant $\\varepsilon_r$: $F_{\\text{medium}} = \\frac{F_{\\text{vacuum}}}{\\varepsilon_r}$. The electric field follows the inverse-square law.
                    </p>
                  </div>

                  <!-- Right: Real PYQ Snippet -->
                  <div class="md:col-span-5 bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-3">
                    <div class="flex items-center justify-between text-xs">
                      <span class="font-bold text-slate-800 dark:text-slate-200">NEET 2024 Question #12</span>
                      <span class="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-[10px]">+4 Marks</span>
                    </div>
                    <p class="text-xs text-slate-700 dark:text-slate-300 line-clamp-3">
                      Two point charges placed in a medium of dielectric constant $K$ experience force $F$. In vacuum at same distance, the force is:
                    </p>
                    <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
                      <span>✓ Correct Option: F × K</span>
                      <span class="text-xs">92% Solved</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            <!-- Floating UI Card 1: Top Left - Student Aspirant & PYQ Coverage -->
            <div id="hero-floating-card-1" data-parallax-rate="-0.12" class="hero-card-init hero-parallax-card absolute -top-6 -left-4 sm:-top-8 sm:-left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 dark:border-slate-700 shadow-xl shadow-slate-900/10 animate-float-slow z-20 will-change-transform">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-lg font-bold shadow-sm">
                  🩺
                </div>
                <div>
                  <p class="text-[10px] font-bold text-blue-600 uppercase tracking-wider">PYQ Explorer</p>
                  <p class="text-sm font-extrabold text-slate-900 dark:text-white">NEET 2014–2025 Solved</p>
                </div>
              </div>
            </div>

            <!-- Floating UI Card 2: Top Right - 92% Accuracy -->
            <div id="hero-floating-card-2" data-parallax-rate="0.16" class="hero-card-init hero-parallax-card absolute -top-6 -right-3 sm:-top-8 sm:-right-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 dark:border-slate-700 shadow-xl shadow-slate-900/10 animate-float-reverse z-20 will-change-transform">
              <div class="flex items-center gap-3">
                <div class="text-right">
                  <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Accuracy Rate</p>
                  <p class="text-lg font-black text-emerald-600 leading-none">92.4%</p>
                </div>
                <div class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center text-lg font-bold">
                  🎯
                </div>
              </div>
            </div>

            <!-- Floating UI Card 3: Bottom Left - AI Weakness Doctor -->
            <div id="hero-floating-card-3" data-parallax-rate="-0.09" class="hero-card-init hero-parallax-card absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 dark:border-slate-700 shadow-xl shadow-slate-900/10 animate-float-gentle z-20 will-change-transform">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 flex items-center justify-center text-lg font-bold">
                  🧠
                </div>
                <div>
                  <p class="text-[10px] font-bold text-rose-600 uppercase tracking-wider">AI Weakness Doctor</p>
                  <p class="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">Pinpoint Misconceptions</p>
                </div>
              </div>
            </div>

            <!-- Floating UI Card 4: Bottom Right - Weekly 720 Mock Simulation -->
            <div id="hero-floating-card-4" data-parallax-rate="0.14" class="hero-card-init hero-parallax-card absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 dark:border-slate-700 shadow-xl shadow-slate-900/10 animate-float-slow z-20 will-change-transform" style="animation-delay: 2.5s;">
              <div class="flex items-center gap-3">
                <div>
                  <p class="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Weekly NTA Mock</p>
                  <p class="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">Score: 567 / 720</p>
                </div>
                <div class="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center text-lg font-bold">
                  🏆
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ==========================================
           SECTION 2: STATISTICS & PROVEN COVERAGE
           ========================================== -->
      <section class="py-14 sm:py-18 bg-[#F8FAFC] border-y border-slate-200/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 text-center">
            
            <div class="space-y-1 reveal-on-scroll">
              <div class="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 counter-val" data-target="10" data-suffix="+">10+</div>
              <p class="text-xs sm:text-sm font-bold text-slate-700">Years of PYQs</p>
              <p class="text-[11px] text-slate-500">2014 to 2025 Solved</p>
            </div>

            <div class="space-y-1 reveal-on-scroll reveal-stagger-1">
              <div class="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 counter-val" data-target="${totalTopics}" data-suffix="+">${totalTopics}+</div>
              <p class="text-xs sm:text-sm font-bold text-slate-700">High-Yield Concepts</p>
              <p class="text-[11px] text-slate-500">NCERT Mastered</p>
            </div>

            <div class="space-y-1 reveal-on-scroll reveal-stagger-2">
              <div class="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-600 counter-val" data-target="720" data-suffix=" Marks">720 Marks</div>
              <p class="text-xs sm:text-sm font-bold text-slate-700">Full-Length Mocks</p>
              <p class="text-[11px] text-slate-500">Real NTA Simulation</p>
            </div>

            <div class="space-y-1 reveal-on-scroll reveal-stagger-3">
              <div class="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-600 counter-val" data-target="3" data-suffix=" Subjects">3 Subjects</div>
              <p class="text-xs sm:text-sm font-bold text-slate-700">Core Disciplines</p>
              <p class="text-[11px] text-slate-500">Physics, Chem, Bio</p>
            </div>

            <div class="col-span-2 md:col-span-1 space-y-1 reveal-on-scroll reveal-stagger-4">
              <div class="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-rose-600 counter-val" data-target="100" data-suffix="%">100%</div>
              <p class="text-xs sm:text-sm font-bold text-slate-700">NCERT-Aligned</p>
              <p class="text-[11px] text-slate-500">Zero Distractions</p>
            </div>

          </div>
        </div>
      </section>

      <!-- ==========================================
           SECTION 3: ONE ECOSYSTEM FOR NEET PREPARATION
           ========================================== -->
      <section id="ecosystem" class="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-on-scroll">
            <span class="text-xs font-extrabold tracking-widest text-blue-600 uppercase">
              COMPLETE INTEGRATED ARCHITECTURE
            </span>
            <h2 class="font-display text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              One ecosystem for your entire NEET preparation.
            </h2>
            <p class="text-base sm:text-lg text-slate-600">
              Everything you need to learn, practice, revise and improve — in one place.
            </p>
          </div>

          <!-- Central Ecosystem Diagram Visual -->
          <div class="relative max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-sm reveal-on-scroll">
            
            <!-- Central Hub Node -->
            <div class="text-center my-6">
              <div class="inline-flex flex-col items-center justify-center p-5 sm:p-6 rounded-3xl bg-slate-900 text-white shadow-xl shadow-blue-500/15 border-4 border-white dark:border-slate-800">
                <div class="mb-1.5">
                  ${renderBrandLogo({ size: 'sm', isDarkOnly: true })}
                </div>
                <span class="text-xs text-blue-300 font-semibold mt-0.5">Central Learning Engine</span>
              </div>
            </div>

            <!-- Orbiting 8 Integrated Modules -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8">
              
              <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-500 hover:shadow-md transition-all text-center space-y-2">
                <div class="text-2xl">📚</div>
                <h3 class="font-display text-xs sm:text-sm font-bold text-slate-900">Unified Library</h3>
                <p class="text-[11px] text-slate-500">Class 11 & 12 structured notes</p>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-500 hover:shadow-md transition-all text-center space-y-2">
                <div class="text-2xl">🏆</div>
                <h3 class="font-display text-xs sm:text-sm font-bold text-slate-900">10+ Years PYQs</h3>
                <p class="text-[11px] text-slate-500">2014–2025 verified solutions</p>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-500 hover:shadow-md transition-all text-center space-y-2">
                <div class="text-2xl">⚡</div>
                <h3 class="font-display text-xs sm:text-sm font-bold text-slate-900">Revision Sheets</h3>
                <p class="text-[11px] text-slate-500">Formula & reaction mindmaps</p>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-500 hover:shadow-md transition-all text-center space-y-2">
                <div class="text-2xl">📝</div>
                <h3 class="font-display text-xs sm:text-sm font-bold text-slate-900">Active Practice</h3>
                <p class="text-[11px] text-slate-500">Targeted topic question drills</p>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-500 hover:shadow-md transition-all text-center space-y-2">
                <div class="text-2xl">📊</div>
                <h3 class="font-display text-xs sm:text-sm font-bold text-slate-900">Progress Radar</h3>
                <p class="text-[11px] text-slate-500">Real-time mastery tracking</p>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-500 hover:shadow-md transition-all text-center space-y-2">
                <div class="text-2xl">🧠</div>
                <h3 class="font-display text-xs sm:text-sm font-bold text-slate-900">AI Weakness Doctor</h3>
                <p class="text-[11px] text-slate-500">Algorithmic error remedy</p>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-500 hover:shadow-md transition-all text-center space-y-2">
                <div class="text-2xl">⏱</div>
                <h3 class="font-display text-xs sm:text-sm font-bold text-slate-900">Study Stopwatch</h3>
                <p class="text-[11px] text-slate-500">Focus timer per concept</p>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-500 hover:shadow-md transition-all text-center space-y-2">
                <div class="text-2xl">🎯</div>
                <h3 class="font-display text-xs sm:text-sm font-bold text-slate-900">Weekly 720 Mock</h3>
                <p class="text-[11px] text-slate-500">180Q NTA standard test</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      <!-- ==========================================
           SECTION 4: PYQ EXPLORER (REVERSE-ENGINEER THE EXAM)
           ========================================== -->
      <section id="pyqs" class="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-on-scroll">
            <span class="text-xs font-extrabold tracking-widest text-blue-600 uppercase">
              10+ YEARS PAST PAPERS
            </span>
            <h2 class="font-display text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              NEET has already asked the question.<br />Now understand why.
            </h2>
            <p class="text-base sm:text-lg text-slate-600">
              Every past paper question from 2014 to 2025 comes with detailed verified solutions and 1-click links to the underlying concept.
            </p>
          </div>

          <!-- Realistic PYQ Mockup Interface -->
          <div class="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 space-y-6 text-left reveal-on-scroll">
            
            <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-xs font-extrabold">NEET 2024</span>
                <span class="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-semibold">Chemistry • Electrochemistry</span>
              </div>
              <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">+4 / -1 Marks</span>
            </div>

            <!-- Question Statement -->
            <div class="space-y-2">
              <p class="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                Q: Which of the following expressions correctly represents the relationship between standard Gibbs energy change ($\Delta G^\circ$) and the equilibrium constant ($K$) of a reaction?
              </p>
            </div>

            <!-- 4 Options Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
              <div class="p-3.5 rounded-xl border border-slate-200 text-slate-600 bg-slate-50/50">
                A) $\\Delta G^\\circ = RT \\ln K$
              </div>
              <div class="p-3.5 rounded-xl border-2 border-emerald-500 bg-emerald-50/70 text-emerald-900 font-bold flex items-center justify-between shadow-xs">
                <span>B) $\\Delta G^\\circ = -RT \\ln K$</span>
                <span class="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">✓</span>
              </div>
              <div class="p-3.5 rounded-xl border border-slate-200 text-slate-600 bg-slate-50/50">
                C) $\\Delta G^\\circ = -nFE^\\circ$
              </div>
              <div class="p-3.5 rounded-xl border border-slate-200 text-slate-600 bg-slate-50/50">
                D) $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$
              </div>
            </div>

            <!-- Step-by-Step Verified Solution -->
            <div class="p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
              <div class="flex items-center justify-between text-xs font-bold text-slate-800">
                <span class="flex items-center gap-1.5 text-emerald-700">
                  <span>✓</span> Step-by-Step Verified Solution
                </span>
                <span class="text-slate-400 font-mono">NTA Official Key</span>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                At thermodynamic equilibrium, $\\Delta G = 0$ and the reaction quotient $Q = K$. From the fundamental isotherm:
              </p>
              <div class="p-2.5 bg-white rounded-xl border border-slate-200 text-center">
                ${gibbsKeq}
              </div>
              <div class="pt-1">
                <a href="#home" class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline">
                  <span>Learn Related Concept: Gibbs Free Energy & Equilibrium →</span>
                </a>
              </div>
            </div>

            <!-- Visual Flow Indicator -->
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-center">
              <div class="flex-1">
                <div class="text-[10px] font-bold text-slate-400 uppercase">Step 1</div>
                <div class="text-xs font-extrabold text-blue-600">PYQ Question</div>
              </div>
              <div class="text-slate-300 font-bold">→</div>
              <div class="flex-1">
                <div class="text-[10px] font-bold text-slate-400 uppercase">Step 2</div>
                <div class="text-xs font-extrabold text-indigo-600">Core Concept</div>
              </div>
              <div class="text-slate-300 font-bold">→</div>
              <div class="flex-1">
                <div class="text-[10px] font-bold text-slate-400 uppercase">Step 3</div>
                <div class="text-xs font-extrabold text-emerald-600">Targeted Practice</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ==========================================
           SECTION 5: FORMULA / CONCEPT VISUAL (KATEX BEAUTY)
           ========================================== -->
      <section id="library" class="py-20 lg:py-28 bg-[#FFFFFF]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Description -->
            <div class="lg:col-span-5 space-y-6 text-left reveal-on-scroll">
              <span class="text-xs font-extrabold tracking-widest text-blue-600 uppercase">
                ACADEMIC RIGOR & CLARITY
              </span>
              <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                From formula to understanding.
              </h2>
              <p class="text-base text-slate-600 leading-relaxed">
                NEET questions test the derivation and constraints behind formulas. VG Insights renders beautifully formatted mathematical equations alongside worked examples and trap alerts.
              </p>

              <div class="space-y-3 pt-2">
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                  <p class="text-sm font-semibold text-slate-700">KaTeX mathematical typography with standard fractions & units.</p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">⚠️</div>
                  <p class="text-sm font-semibold text-slate-700">NEET Trap Warnings: Prevent common examiner calculation traps.</p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">🧮</div>
                  <p class="text-sm font-semibold text-slate-700">Worked step-by-step examples from standard Daniell & galvanic cells.</p>
                </div>
              </div>
            </div>

            <!-- Right Concept Interface Mockup -->
            <div class="lg:col-span-7 reveal-on-scroll">
              <div class="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 space-y-5 text-left relative">
                
                <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <div class="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-1">
                      <span>Class 12</span>
                      <span>›</span>
                      <span>Chemistry</span>
                      <span>›</span>
                      <span>Electrochemistry</span>
                    </div>
                    <h3 class="font-display text-2xl font-black text-slate-900">
                      Nernst Equation & Cell Potential
                    </h3>
                  </div>
                  <span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-lg">
                    High-Yield Concept
                  </span>
                </div>

                <!-- Beautiful KaTeX Formula Display -->
                <div class="p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <div class="text-xs font-bold text-slate-700">Master Formula: Cell EMF Under Non-Standard Conditions</div>
                  <div class="py-2.5 px-4 bg-white rounded-xl border border-slate-200 font-bold text-slate-900">
                    ${nernstEq}
                  </div>
                </div>

                <!-- Worked Example Daniell Cell -->
                <div class="p-4 sm:p-5 bg-blue-50/60 rounded-2xl border border-blue-200/70 space-y-2">
                  <div class="flex items-center justify-between text-xs font-bold text-blue-900">
                    <span>Worked Example: Daniell Cell</span>
                    <span class="text-blue-600">NEET Standard</span>
                  </div>
                  <p class="text-xs text-slate-700">
                    For $\\text{Zn}(s) + \\text{Cu}^{2+}(0.1\\text{ M}) \\rightarrow \\text{Zn}^{2+}(0.01\\text{ M}) + \\text{Cu}(s)$ with $E^\\circ_{\\text{cell}} = 1.10\\text{ V}$, calculate $E_{\\text{cell}}$.
                  </p>
                  <p class="text-xs font-mono text-blue-900 bg-white p-2.5 rounded-xl border border-blue-100">
                    E_{\\text{cell}} = 1.10 - \\frac{0.0591}{2}\\log_{10}\\left(\\frac{0.01}{0.1}\\right) = 1.10 + 0.0295 = 1.1295\\text{ V}
                  </p>
                </div>

                <!-- NEET Trap Warning -->
                <div class="p-4 bg-rose-50 rounded-2xl border border-rose-200/80 flex items-start gap-3 text-xs text-rose-900">
                  <span class="text-rose-600 font-bold text-base">⚠️</span>
                  <div>
                    <span class="font-bold">NEET Trap:</span> In reaction quotient $Q$, pure solids ($[\\text{Zn}] = [\\text{Cu}] = 1$) are omitted. Always raise ion concentrations to their stoichiometric powers (e.g. $[\\text{Ag}^+]^2$).
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ==========================================
           SECTION 6: WEEKLY MOCK TEST SECTION (720 MARKS)
           ========================================== -->
      <section id="mock" class="py-20 lg:py-28 bg-gradient-to-b from-[#EFF6FF] to-[#FFFFFF] border-y border-slate-200/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-on-scroll">
            <span class="text-xs font-extrabold tracking-widest text-blue-600 uppercase">
              REAL EXAM BENCHMARK
            </span>
            <h2 class="font-display text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Every week.<br />One real test.
            </h2>
            <p class="text-base sm:text-lg text-slate-600">
              Train under the same pressure. Know exactly where you stand.
            </p>
          </div>

          <!-- Mock Simulation Card Visual -->
          <div class="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 space-y-8 text-left reveal-on-scroll">
            
            <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span class="px-2.5 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold">ALL-INDIA SIMULATION #08</span>
                <h3 class="font-display text-2xl font-black text-slate-900 mt-1">
                  National Full-Length NEET Mock
                </h3>
              </div>
              <div class="text-right">
                <span class="text-xs font-bold text-slate-400 uppercase">Your Performance</span>
                <div class="text-3xl sm:text-4xl font-black text-blue-600">
                  567 <span class="text-base text-slate-400 font-semibold">/ 720</span>
                </div>
              </div>
            </div>

            <!-- Subject-wise Marks Progress -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <!-- Physics Bar -->
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2.5">
                <div class="flex items-center justify-between text-xs font-bold">
                  <span class="text-slate-800">⚡ Physics</span>
                  <span class="text-blue-600">142 / 180</span>
                </div>
                <div class="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-600 rounded-full transition-all duration-1000" style="width: 78.8%;"></div>
                </div>
                <p class="text-[11px] text-slate-500">Accuracy: 84% • 36 Correct, 4 Incorrect</p>
              </div>

              <!-- Chemistry Bar -->
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2.5">
                <div class="flex items-center justify-between text-xs font-bold">
                  <span class="text-slate-800">🧪 Chemistry</span>
                  <span class="text-emerald-600">155 / 180</span>
                </div>
                <div class="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div class="h-full bg-emerald-600 rounded-full transition-all duration-1000" style="width: 86.1%;"></div>
                </div>
                <p class="text-[11px] text-slate-500">Accuracy: 91% • 39 Correct, 2 Incorrect</p>
              </div>

              <!-- Biology Bar -->
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2.5">
                <div class="flex items-center justify-between text-xs font-bold">
                  <span class="text-slate-800">🧬 Biology</span>
                  <span class="text-indigo-600">320 / 360</span>
                </div>
                <div class="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div class="h-full bg-indigo-600 rounded-full transition-all duration-1000" style="width: 88.9%;"></div>
                </div>
                <p class="text-[11px] text-slate-500">Accuracy: 93% • 81 Correct, 6 Incorrect</p>
              </div>

            </div>

            <!-- Bottom Test Meta & Action -->
            <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <div class="flex items-center gap-4 text-xs text-slate-500 font-semibold">
                <span>⏱ 180 Minutes</span>
                <span>•</span>
                <span>🎯 78.7% Overall Accuracy</span>
                <span>•</span>
                <span>🏆 Top 3.8% Percentile</span>
              </div>
              <a
                href="#weekly-mock"
                class="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Attempt Live Mock</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      <!-- ==========================================
           SECTION 7: AI WEAKNESS DOCTOR (DARK MIDNIGHT SECTION)
           ========================================== -->
      <section id="weakness-doctor" class="py-20 lg:py-32 bg-[#0F172A] text-white relative overflow-hidden landing-dark-grid-pattern">
        
        <!-- Neural Ambient Glows -->
        <div class="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-on-scroll">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-800/80 text-rose-400 text-xs font-extrabold uppercase tracking-widest">
              <span class="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span>PATENTED DIAGNOSTIC ENGINE</span>
            </div>
            <h2 class="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Your preparation becomes personal.
            </h2>
            <p class="text-base sm:text-lg text-slate-400">
              Identify what is holding you back and focus your practice where it matters.
            </p>
          </div>

          <!-- Futuristic AI Diagnostic UI -->
          <div class="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8 reveal-on-scroll">
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              
              <!-- State 1: Misconception Detected -->
              <div class="p-5 rounded-2xl bg-rose-950/40 border border-rose-900/60 space-y-3">
                <div class="flex items-center justify-between text-xs">
                  <span class="px-2 py-0.5 rounded bg-rose-900/70 text-rose-300 font-bold uppercase text-[10px]">Misconception</span>
                  <span class="text-rose-400 font-bold">42% Accuracy</span>
                </div>
                <h4 class="font-display text-base font-bold text-white">Electrochemistry</h4>
                <p class="text-xs text-rose-200/80 leading-relaxed">
                  "Recurring calculation error in standard cell EMF when applying Nernst equation log term."
                </p>
              </div>

              <!-- State 2: AI Doctor Diagnostic Remedy -->
              <div class="p-5 rounded-2xl bg-blue-950/60 border border-blue-800/80 space-y-3 text-center">
                <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md shadow-blue-500/30">
                  ⚡
                </div>
                <h4 class="font-display text-sm font-bold text-white">AI Weakness Doctor</h4>
                <p class="text-xs text-blue-200 leading-relaxed">
                  Targeted drill generated: 12 high-precision diagnostic questions with active feedback.
                </p>
              </div>

              <!-- State 3: Post-Drill Mastery -->
              <div class="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-900/60 space-y-3">
                <div class="flex items-center justify-between text-xs">
                  <span class="px-2 py-0.5 rounded bg-emerald-900/70 text-emerald-300 font-bold uppercase text-[10px]">Post-Drill</span>
                  <span class="text-emerald-400 font-bold">78% Accuracy</span>
                </div>
                <h4 class="font-display text-base font-bold text-white">Concept Mastered</h4>
                <p class="text-xs text-emerald-200/80 leading-relaxed">
                  +16 marks score surge projected in upcoming All-India mock test series.
                </p>
              </div>

            </div>

            <!-- Launch Button -->
            <div class="pt-4 text-center">
              <a
                href="#weakness-doctor"
                class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white text-sm font-bold shadow-lg shadow-rose-600/30 active:scale-[0.98] transition-all"
              >
                <span>Launch Weakness Doctor</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      <!-- ==========================================
           SECTION 8: ACTIVE RECALL LOOP
           ========================================== -->
      <section class="py-20 lg:py-28 bg-[#FFFFFF]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-on-scroll">
            <span class="text-xs font-extrabold tracking-widest text-blue-600 uppercase">
              COGNITIVE RETENTION
            </span>
            <h2 class="font-display text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Learn it.<br />Solve it.<br />Own it.
            </h2>
            <p class="text-base sm:text-lg text-slate-600">
              The continuous 4-step loop engineered to turn weak questions into permanent retention.
            </p>
          </div>

          <!-- 4-Step Process Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll">
            
            <div class="p-6 rounded-3xl bg-blue-50/60 border border-blue-200/80 space-y-3">
              <span class="font-display text-2xl font-black text-blue-600">01</span>
              <h3 class="font-display text-lg font-bold text-slate-900">Attempt Question</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Test yourself under realistic timed conditions without peeking at answers.
              </p>
            </div>

            <div class="p-6 rounded-3xl bg-rose-50/60 border border-rose-200/80 space-y-3">
              <span class="font-display text-2xl font-black text-rose-600">02</span>
              <h3 class="font-display text-lg font-bold text-slate-900">Detect Error</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Instantly isolate whether the mistake was formula, sign convention, or conceptual.
              </p>
            </div>

            <div class="p-6 rounded-3xl bg-amber-50/60 border border-amber-200/80 space-y-3">
              <span class="font-display text-2xl font-black text-amber-600">03</span>
              <h3 class="font-display text-lg font-bold text-slate-900">Review Concept</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Jump straight into the concise NCERT note and examine worked examples.
              </p>
            </div>

            <div class="p-6 rounded-3xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
              <span class="font-display text-2xl font-black text-emerald-600">04</span>
              <h3 class="font-display text-lg font-bold text-slate-900">Mastery Achieved</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Solve fresh variation questions until your accuracy surpasses 90%.
              </p>
            </div>

          </div>

        </div>
      </section>

      <!-- ==========================================
           SECTION 9: REVISION SECTION (HIGH-YIELD SHEETS)
           ========================================== -->
      <section id="revision" class="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-on-scroll">
            <span class="text-xs font-extrabold tracking-widest text-blue-600 uppercase">
              HIGH-YIELD REVISION SHEETS
            </span>
            <h2 class="font-display text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Revision, without the chaos.
            </h2>
            <p class="text-base sm:text-lg text-slate-600">
              Formula summaries, high-yield reactions, memory maps and exam traps — built for fast recall.
            </p>
          </div>

          <!-- Revision Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll">
            
            <!-- Card 1: Gibbs Free Energy -->
            <div class="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all space-y-3">
              <div class="flex items-center justify-between text-[11px]">
                <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold uppercase">Formula</span>
                <span class="text-slate-400 font-semibold">Thermodynamics</span>
              </div>
              <h3 class="font-display text-base font-bold text-slate-900">Gibbs Free Energy</h3>
              <div class="p-3 bg-slate-50 rounded-2xl text-center">
                ${gibbsEq}
              </div>
              <p class="text-xs text-slate-500 leading-relaxed">
                Spontaneous when $\\Delta G < 0$. Endothermic reactions become spontaneous at high temperatures if $\\Delta S > 0$.
              </p>
            </div>

            <!-- Card 2: Aldol Condensation -->
            <div class="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all space-y-3">
              <div class="flex items-center justify-between text-[11px]">
                <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Reaction</span>
                <span class="text-slate-400 font-semibold">Aldehydes</span>
              </div>
              <h3 class="font-display text-base font-bold text-slate-900">Aldol Condensation</h3>
              <div class="p-2.5 bg-slate-50 rounded-2xl text-center">
                ${aldolEq}
              </div>
              <p class="text-xs text-slate-500 leading-relaxed">
                Requires at least one $\\alpha$-hydrogen. Forms $\\alpha,\\beta$-unsaturated carbonyl compound upon dehydration.
              </p>
            </div>

            <!-- Card 3: Genetic Code Rules -->
            <div class="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all space-y-3">
              <div class="flex items-center justify-between text-[11px]">
                <span class="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 font-bold uppercase">High-Yield</span>
                <span class="text-slate-400 font-semibold">Genetics</span>
              </div>
              <h3 class="font-display text-base font-bold text-slate-900">Genetic Code Rules</h3>
              <div class="p-3 bg-slate-50 rounded-2xl text-xs font-bold text-slate-800 space-y-1">
                <div>• Degenerate (61 codons, 20 AAs)</div>
                <div>• Unambiguous & Universal</div>
                <div>• AUG: Methionine & Start Codon</div>
              </div>
              <p class="text-xs text-slate-500 leading-relaxed">
                Stop codons (UAA, UAG, UGA) do not code for any amino acid and have no corresponding tRNAs.
              </p>
            </div>

            <!-- Card 4: NEET Trap Warning (Mirror Formula) -->
            <div class="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all space-y-3">
              <div class="flex items-center justify-between text-[11px]">
                <span class="px-2 py-0.5 rounded bg-rose-100 text-rose-700 font-bold uppercase">NEET Trap</span>
                <span class="text-slate-400 font-semibold">Ray Optics</span>
              </div>
              <h3 class="font-display text-base font-bold text-slate-900">Mirror Formula Signs</h3>
              <div class="p-3 bg-slate-50 rounded-2xl text-center">
                ${opticsEq}
              </div>
              <p class="text-xs text-slate-500 leading-relaxed">
                Always substitute $u$, $v$, and $f$ with proper Cartesian signs (e.g. concave mirror $f < 0$).
              </p>
            </div>

          </div>

        </div>
      </section>

      <!-- ==========================================
           SECTION 11: FINAL DRAMATIC HERO CTA
           ========================================== -->
      <section class="py-20 lg:py-32 bg-gradient-to-b from-[#FFFFFF] to-[#EFF6FF] text-center relative overflow-hidden">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 reveal-on-scroll">
          
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>GET READY FOR NEET UG 2026</span>
          </span>

          <h2 class="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
            Ready to master NEET,<br />
            <span class="text-[#2563EB]">one concept at a time?</span>
          </h2>

          <p class="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
            Stop studying everything. Start mastering what matters.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              id="btn-footer-start-free"
              class="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white text-base font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Learning Free</span>
              <span class="text-blue-200 text-lg">→</span>
            </button>
            <a
              href="#home"
              id="btn-footer-guest"
              class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 text-base font-bold shadow-xs hover:border-slate-400 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Continue Without Login</span>
              <span class="text-slate-400">⚡</span>
            </a>
          </div>

          <p class="text-xs font-medium text-slate-400 pt-2">
            No credit card required. Free to explore the entire NEET library.
          </p>

        </div>
      </section>

      <!-- ==========================================
           SECTION 12: PREMIUM EDITORIAL FOOTER
           ========================================== -->
      <footer class="bg-[#FFFFFF] border-t border-slate-200/80 py-12 text-slate-600 text-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-100">
            
            <!-- Brand Column -->
            <div class="col-span-2 space-y-3">
              <div class="flex items-center">
                ${renderBrandLogo({ size: 'md' })}
              </div>
              <p class="text-xs text-slate-500 max-w-sm leading-relaxed">
                Master NEET. One Concept at a Time. The comprehensive digital library, PYQ explorer, and diagnostic AI workspace for NEET UG aspirants.
              </p>
              <p class="text-[11px] text-slate-400">
                Official Domain: <a href="https://vginsights.in/" class="text-blue-600 hover:underline">vginsights.in</a>
              </p>
            </div>

            <!-- Column 1: Learn -->
            <div class="space-y-2">
              <p class="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Learn</p>
              <ul class="space-y-1.5 text-slate-600">
                <li><a href="#subject-physics" class="hover:text-blue-600">Physics Notes</a></li>
                <li><a href="#subject-chemistry" class="hover:text-blue-600">Chemistry Notes</a></li>
                <li><a href="#subject-biology" class="hover:text-blue-600">Biology Notes</a></li>
                <li><a href="#home" class="hover:text-blue-600">Class 11 & 12 Syllabus</a></li>
              </ul>
            </div>

            <!-- Column 2: Practice -->
            <div class="space-y-2">
              <p class="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Practice</p>
              <ul class="space-y-1.5 text-slate-600">
                <li><a href="#pyqs" class="hover:text-blue-600">10+ Years PYQs</a></li>
                <li><a href="#revision" class="hover:text-blue-600">Revision Sheets</a></li>
                <li><a href="#weekly-mock" class="hover:text-blue-600">Weekly 720 Mock</a></li>
                <li><a href="#weakness-doctor" class="hover:text-blue-600">AI Weakness Doctor</a></li>
              </ul>
            </div>

            <!-- Column 3: Platform & Apps -->
            <div class="space-y-2">
              <p class="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Apps & Platform</p>
              <ul class="space-y-1.5 text-slate-600">
                <li><a href="/vg-insights.apk" download="vg-insights.apk" class="text-emerald-600 font-semibold hover:underline flex items-center gap-1"><span>📥 Download Android APK</span></a></li>
                <li><a href="#home" class="hover:text-blue-600">Direct App Access</a></li>
                <li><a href="#landing" class="hover:text-blue-600">Privacy & Terms</a></li>
                <li><a href="https://vginsights.in/" class="hover:text-blue-600">vginsights.in</a></li>
              </ul>
            </div>

          </div>

          <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
            <div>
              © 2026 VG Insights (vginsights.in). Built for NEET UG Aspirants. All rights reserved.
            </div>
            <div class="flex items-center gap-4">
              <a href="#home" class="text-blue-600 font-semibold hover:underline">Launch Study Workspace →</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  `;
}

export function initLandingPageEvents(onOpenAuthModal: () => void): void {
  // 1. Hook up all Login / Get Started buttons to open Auth Modal
  const authButtons = [
    'btn-nav-login',
    'btn-nav-get-started',
    'btn-hero-start-free',
    'btn-footer-start-free',
    'btn-mobile-login',
    'btn-mobile-get-started',
  ];

  authButtons.forEach((btnId) => {
    const el = document.getElementById(btnId);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        onOpenAuthModal();
      });
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('btn-mobile-menu-toggle');
  const mobileDropdown = document.getElementById('mobile-nav-dropdown');
  if (mobileToggle && mobileDropdown) {
    mobileToggle.addEventListener('click', () => {
      mobileDropdown.classList.toggle('hidden');
    });

    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDropdown.classList.add('hidden');
      });
    });
  }

  // 3. Scroll Reveal IntersectionObserver & Counter Animation
  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12,
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        
        // Check for child counters to animate count-up
        const counters = entry.target.querySelectorAll('.counter-val');
        counters.forEach((counterEl) => {
          const targetStr = counterEl.getAttribute('data-target');
          const suffix = counterEl.getAttribute('data-suffix') || '';
          if (targetStr && !counterEl.hasAttribute('data-counted')) {
            counterEl.setAttribute('data-counted', 'true');
            const targetNum = parseInt(targetStr, 10);
            if (!isNaN(targetNum)) {
              animateCountUp(counterEl as HTMLElement, targetNum, suffix);
            }
          }
        });

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    scrollObserver.observe(el);
  });

  // 4. Hero Section Mockup Scale & Floating Cards Stagger Entrance
  initHeroEntranceAnimation();

  // 5. Hero Section Scroll Parallax Effect
  initHeroScrollParallax();

  // 6. Render KaTeX Formulas across targets
  renderAllKaTeXFormulas();
}

/**
 * requestAnimationFrame-driven Entrance Animation for the Hero Mockup and Floating Cards
 */
function initHeroEntranceAnimation(): void {
  const mockup = document.getElementById('hero-mockup-device');
  const cards = document.querySelectorAll<HTMLElement>('.hero-parallax-card');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    if (mockup) mockup.classList.add('hero-mockup-entered');
    cards.forEach((card) => card.classList.add('hero-card-entered'));
    return;
  }

  // Animate Central Device Mockup: scale from 0.95 -> 1.0 with subtle translateY
  if (mockup) {
    requestAnimationFrame(() => {
      setTimeout(() => {
        mockup.classList.add('hero-mockup-entered');
      }, 60);
    });
  }

  // Stagger Floating UI Cards into view
  const staggerDelays = [180, 320, 460, 600];
  cards.forEach((card, index) => {
    const delay = staggerDelays[index] || 200 + index * 140;
    setTimeout(() => {
      requestAnimationFrame(() => {
        card.classList.add('hero-card-entered');
      });
    }, delay);
  });
}

/**
 * Smooth requestAnimationFrame Scroll-Parallax Effect for Hero 3D Cards
 */
function initHeroScrollParallax(): void {
  const heroContainer = document.getElementById('hero-visual-container');
  const mockup = document.getElementById('hero-mockup-device');
  const cards = document.querySelectorAll<HTMLElement>('.hero-parallax-card');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !heroContainer) return;

  let ticking = false;
  let latestScrollY = window.scrollY;

  function updateParallax() {
    if (!heroContainer) return;
    const rect = heroContainer.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      const scrollOffset = latestScrollY;
      
      // Subtle mockup depth translation
      if (mockup) {
        const mockupShift = Math.min(Math.max(scrollOffset * -0.035, -25), 25);
        mockup.style.transform = `translateY(${mockupShift}px)`;
      }

      // Individual floating card parallax offsets
      cards.forEach((card) => {
        const rateAttr = card.getAttribute('data-parallax-rate');
        const rate = rateAttr ? parseFloat(rateAttr) : -0.1;
        const cardShift = Math.min(Math.max(scrollOffset * rate, -45), 45);
        card.style.transform = `translateY(${cardShift}px)`;
      });
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    latestScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
}

function animateCountUp(element: HTMLElement, target: number, suffix: string): void {
  const duration = 1200;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.floor(start + (target - start) * easeProgress);

    element.innerText = `${currentVal}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.innerText = `${target}${suffix}`;
    }
  }

  requestAnimationFrame(update);
}

function renderAllKaTeXFormulas(): void {
  // If auto-render extension is loaded
  if (typeof window !== 'undefined' && (window as any).renderMathInElement) {
    try {
      (window as any).renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
        ],
        throwOnError: false,
      });
      return;
    } catch {
      // fallback to individual render
    }
  }

  // Fallback to manual element rendering if window.katex is available
  if (typeof window !== 'undefined' && (window as any).katex) {
    const targets = document.querySelectorAll('.katex-render-target');
    targets.forEach((target) => {
      const rawLatex = target.getAttribute('data-latex');
      const isDisplay = target.getAttribute('data-display') === 'true';
      if (rawLatex) {
        try {
          const decoded = decodeURIComponent(rawLatex);
          (window as any).katex.render(decoded, target, {
            displayMode: isDisplay,
            throwOnError: false,
          });
        } catch {
          // ignore
        }
      }
    });
  }
}
