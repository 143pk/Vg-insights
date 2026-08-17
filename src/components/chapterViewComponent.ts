import { CHAPTERS, TOPICS, CLASSIFICATIONS, SUBJECTS } from '../data/neetData'
import { TOPIC_DETAILS } from '../data/topicDetails'
import { StorageService } from '../services/storageService'
import { deduplicateAndNormalizePYQs } from '../utils/marksPotentialCalculator'

const CHAPTER_OBJECTIVES: Record<string, { overviewHtml: string; focusAreas: string[] }> = {
  'units-measurements': {
    overviewHtml: `This complete chapter covers the core foundational measurement framework for NEET Physics. It includes:
    <strong>SI system & base units</strong>, <strong>fundamental and derived physical quantities</strong>, <strong>measurement, accuracy, precision, and resolution</strong>, <strong>least count of Vernier Calipers and Screw Gauge</strong>, <strong>positive and negative zero errors & corrections</strong>, <strong>significant figures, rounding rules, and arithmetic operations</strong>, <strong>experimental error analysis, mean absolute error, and power-rule error propagation</strong>, <strong>dimensional formulas of physical constants ($h, G, \mu_0, \varepsilon_0, \eta, k_B$)</strong>, <strong>Principle of Homogeneity</strong>, and <strong>common NEET physics applications</strong>.`,
    focusAreas: [
      'Error Propagation in Power Formulas ($Z = A^a B^b / C^c$)',
      'Vernier Calipers & Screw Gauge Least Count & Zero Errors',
      'Dimensions of Physical Constants ($h, G, \mu_0, \varepsilon_0, \eta$)',
      'Principle of Homogeneity in unknown constant determination'
    ]
  },
  'motion-straight-line': {
    overviewHtml: `This complete chapter covers the full framework of one-dimensional/rectilinear motion for NEET UG Physics. It includes:
    <strong>Reference frames and position coordinates</strong>, <strong>distance vs displacement scalar/vector analysis</strong>, <strong>average speed vs average velocity</strong>, <strong>calculus definitions of instantaneous velocity ($v = ds/dt$) and acceleration ($a = dv/dt = v\,dv/dx$)</strong>, <strong>uniformly accelerated motion kinematic equations</strong>, <strong>Galileo's law of odd numbers</strong>, <strong>free fall under gravity and motion under air resistance</strong>, <strong>$S_n$ nth second displacement formula</strong>, and <strong>Position-Time ($x-t$) & Velocity-Time ($v-t$) graphical interpretation (slopes and areas)</strong>.`,
    focusAreas: [
      'Kinematic Equations & $S_n = u + \\frac{a}{2}(2n-1)$ Numericals',
      'Area and Slope Interpretations of $x-t$, $v-t$, and $a-t$ Graphs',
      'Calculus $a = v\\frac{dv}{dx}$ for Position-Dependent Acceleration',
      'Free Fall & Vertical Throw Time/Height Ratios'
    ]
  },
  'motion-plane': {
    overviewHtml: `This complete chapter covers the complete NEET-relevant framework of two-dimensional motion. It includes:
    <strong>Scalars and vector algebra</strong>, <strong>triangle and parallelogram laws of addition</strong>, <strong>orthogonal resolution of vectors into rectangular components</strong>, <strong>scalar (dot) and vector (cross) products</strong>, <strong>relative velocity in 2D (Rain-Man & River-Swimmer shortest path/time problems)</strong>, <strong>Ground-to-ground projectile motion (Time of Flight $T$, Maximum Height $H$, Horizontal Range $R$, trajectory equation)</strong>, and <strong>Uniform Circular Motion ($v = \\omega r$), centripetal acceleration ($a_c = v^2/r = \\omega^2 r$), and angular kinematics</strong>.`,
    focusAreas: [
      'Projectile Range, Max Height & Velocity at Highest Point ($u \\cos\\theta$)',
      'River-Swimmer Shortest Time ($t = d/v$) vs Shortest Path ($d$ with zero drift)',
      'Dot Product Perpendicularity ($\\vec{A}\\cdot\\vec{B}=0$) & Cross Product',
      'Centripetal Acceleration Vector Direction & Angular Relations'
    ]
  },
  'laws-of-motion': {
    overviewHtml: `This complete chapter covers the complete foundational dynamics framework for NEET UG Physics. It includes:
    <strong>Inertia of rest, motion, and direction</strong>, <strong>mass as quantitative measure of inertia</strong>, <strong>linear momentum vector ($\\vec{p} = m\\vec{v}$)</strong>, <strong>Newton's First, Second, and Third Laws of Motion</strong>, <strong>Free Body Diagrams (FBDs) and connected mass systems</strong>, <strong>Impulse-Momentum Theorem ($\\vec{J} = \\Delta\\vec{p}$)</strong>, <strong>Law of Conservation of Linear Momentum</strong>, <strong>Equilibrium of concurrent forces and Lami's Theorem</strong>, <strong>Static, kinetic, and rolling friction, angle of friction, and angle of repose</strong>, and <strong>Dynamics of circular motion, level road vs banked road maximum speeds, and vertical circular motion cutoff speeds</strong>.`,
    focusAreas: [
      'Apparent Weight in Accelerating Elevators & Pulley Systems',
      'Impulse $\\vec{J} = \\int \\vec{F} dt$ & Area under $F-t$ graphs',
      'Self-adjusting static friction $f_s \\le \\mu_s N$ and Angle of Repose',
      'Vertical Circular Motion Minimum Speeds ($v_{bottom} \\ge \\sqrt{5gR}, v_{top} \\ge \\sqrt{gR}$)'
    ]
  },
  'work-energy-power': {
    overviewHtml: `This complete chapter covers the core mechanics framework of Work, Energy, and Power for NEET UG Physics. It includes:
    <strong>Work done by constant and variable forces ($W = \\vec{F}\\cdot\\vec{s} = \\int F dx$)</strong>, <strong>Force-displacement ($F-x$) graph area integration</strong>, <strong>Work done by spring forces ($W_{spring} = -\\frac{1}{2}k(x_f^2 - x_i^2)$)</strong>, <strong>Translational Kinetic Energy ($K = \\frac{1}{2}mv^2 = \\frac{p^2}{2m}$)</strong>, <strong>Work-Energy Theorem ($W_{net} = \\Delta K$)</strong>, <strong>Potential Energy ($U$) and conservative vs non-conservative forces</strong>, <strong>Force-Potential Energy differential relation ($F = -\\frac{dU}{dx}$)</strong>, <strong>Equilibrium stability analysis (stable, unstable, neutral)</strong>, <strong>Law of Conservation of Mechanical Energy ($E = K + U = \\text{const}$)</strong>, <strong>Instantaneous and Average Power ($P = \\vec{F}\\cdot\\vec{v}$)</strong>, <strong>Constant power vehicle kinematics ($v \\propto t^{1/2}, s \\propto t^{3/2}$)</strong>, <strong>Water pump mechanics and machine efficiency ($\\eta$)</strong>, <strong>1D and 2D elastic and inelastic collisions</strong>, <strong>Coefficient of Restitution ($e$)</strong>, and <strong>Rebounding ball dynamics ($h_n = e^{2n} h_0$)</strong>.`,
    focusAreas: [
      'Work-Energy Theorem ($W_{net} = \\Delta K$) across variable force paths',
      'Force-Potential Energy differentiation ($F = -\\frac{dU}{dx}$) and Equilibrium stability ($d^2U/dx^2$)',
      'Constant power vehicle velocity ($v \\propto t^{1/2}$) and distance ($s \\propto t^{3/2}$)',
      'Coefficient of restitution ($e$) and 2D oblique elastic collision 90° scatter angle theorem'
    ]
  },
  'rotational-motion': {
    overviewHtml: `This complete chapter covers the full mechanics framework of System of Particles and Rotational Motion for NEET UG Physics. It includes:
    <strong>Centre of mass of discrete and continuous bodies</strong>, <strong>two-particle COM distance distribution</strong>, <strong>cavity method for removed mass</strong>, <strong>motion of centre of mass ($M\\vec{A}_{cm} = \\vec{F}_{ext}$)</strong>, <strong>mid-air explosions and recoil systems</strong>, <strong>torque ($\\,\\vec{\\tau} = \\vec{r} \\times \\vec{F}$) and lever arm geometry</strong>, <strong>angular momentum ($\\,\\vec{L} = \\vec{r} \\times \\vec{p} = I\\vec{\\omega}$)</strong>, <strong>rotational equilibrium and couples</strong>, <strong>Law of Conservation of Angular Momentum ($I_1\\omega_1 = I_2\\omega_2$)</strong>, <strong>Moment of Inertia ($I = \\sum m_i r_i^2$) and Radius of Gyration ($k = \\sqrt{I/M}$)</strong>, <strong>Parallel-Axis Theorem ($I = I_{cm} + Md^2$) and Perpendicular-Axis Theorem ($I_z = I_x + I_y$)</strong>, <strong>standard bodies moments of inertia (rod, ring, disc, cylinder, solid sphere, hollow sphere)</strong>, <strong>rotational kinematics ($\\,\\omega = \\omega_0 + \\alpha t$)</strong>, <strong>rotational dynamics ($\\,\\tau = I\\alpha$) and rotational KE ($K_{rot} = \\frac{1}{2}I\\omega^2$)</strong>, and <strong>pure rolling motion ($v_{cm} = R\\omega$) down an inclined plane ($a_{cm} = \\frac{g\\sin\\theta}{1 + k^2/R^2}$)</strong>.`,
    focusAreas: [
      'Centre of Mass Cavity Method & Inverse Mass Ratio Distances',
      'Conservation of Angular Momentum ($I_1\\omega_1 = I_2\\omega_2$) in rotating systems',
      'Parallel-Axis ($I = I_{cm} + Md^2$) & Perpendicular-Axis Theorem applications',
      'Pure Rolling down inclined planes ($a_{cm} = \\frac{g\\sin\\theta}{1 + k^2/R^2}$) & Incline race arrival order'
    ]
  },
  'amines': {
    overviewHtml: `This complete chapter covers the full NCERT-aligned and NEET-focused syllabus of <strong>Amines & Diazonium Salts</strong>. It includes:
    <strong>Structure, hybridization (sp³), and pyramidal umbrella inversion of amines</strong>, <strong>rigorous comparison of basicity in gas vs aqueous phases (inductive, solvation, and steric effects - Rule 213 vs 231)</strong>, <strong>substituent effects on aniline basicity and the Ortho Effect</strong>, <strong>key preparations: Gabriel Phthalimide Synthesis (pure 1° aliphatic amines only), Hofmann Bromamide Degradation (step-down mechanism with retention of configuration), and reduction of nitro/nitriles/amides</strong>, <strong>diagnostic distinction tests: Carbylamine (isocyanide) reaction for 1° amines, Hinsberg test for 1°/2°/3° separation, and nitrous acid pathways</strong>, <strong>electrophilic aromatic substitution of aniline (anomalous nitration giving 47% meta, polybromination, and protection via acetylation)</strong>, and <strong>Arenediazonium Salts: ice-cold diazotisation (0–5 °C), Sandmeyer & Gattermann reactions, Balz-Schiemann fluorobenzene synthesis, KI iodination, deamination to benzene (H₃PO₂/ethanol), and electrophilic azo coupling with phenols (Orange Dye, pH 9–10) and anilines (Yellow Dye, pH 4–5)</strong>.`,
    focusAreas: [
      'Aqueous Basicity Trends: Methyl (2° > 1° > 3° > NH₃, 213) vs Ethyl (2° > 3° > 1° > NH₃, 231)',
      'Gabriel Phthalimide (1° aliphatic only) & Hofmann Bromamide (1 less carbon, 1:1:4 stoichiometry)',
      'Diagnostic Tests: Carbylamine (foul R–NC, 1° only) & Hinsberg Reagent (alkali solubility)',
      'Diazonium Replacement: Sandmeyer (Cu₂X₂), Gattermann (Cu), KI (no Cu), Balz-Schiemann (HBF₄), Deamination (H₃PO₂)',
      'Azo Dye Coupling: Phenol (Orange dye at pH 9–10) vs Aniline (Yellow dye at pH 4–5)'
    ]
  },
  'biomolecules': {
    overviewHtml: `This complete chapter covers the full NCERT-aligned and NEET-focused syllabus of <strong>Biomolecules (Chapter 23)</strong>. It includes:
    <strong>Carbohydrates: classification (aldoses vs ketoses), open-chain chemical proofs of D-(+)-glucose (HI/heat gives n-hexane, Br₂/H₂O gives gluconic acid, conc. HNO₃ gives saccharic acid, Ac₂O gives pentaacetate), failure to form oxime from pentaacetate, cyclic pyranose/furanose Haworth structures, anomers, mutarotation (+52.7° equilibrium), reducing nature of fructose via enediol rearrangement, disaccharides (Sucrose α-1⟷β-2 non-reducing Invert Sugar, Maltose α-1→4 reducing, Lactose β-1→4 reducing), polysaccharides (Amylose linear α-1,4, Amylopectin branched α-1,4 and α-1,6, Cellulose linear β-1,4, and Glycogen)</strong>;
    <strong>Proteins & Amino Acids: 20 standard amino acids, L-configuration, Glycine as the only achiral amino acid, Zwitterionic dipolar state and electrophoretic migration at acidic/basic pH, 10 Essential Amino Acids (PVT TIM HaLL), peptide bond planarity (~40% double bond character), structural hierarchy (1° sequence, 2° α-helix/β-sheet, 3° fibrous vs globular, 4° quaternary haemoglobin), and denaturation mechanism (destruction of 2°/3° with 1° intact)</strong>;
    <strong>Enzymes & Vitamins: enzyme kinetics (lowering Ea without altering Keq), comprehensive classification of Vitamins into Fat-soluble (A, D, E, K) and Water-soluble (B-complex, C), Vitamin B₁₂ containing Cobalt, heat-lability and urine excretion of Vitamin C, and classic deficiency diseases (Scurvy, Beriberi, Rickets, Pellagra, Cheilosis, Pernicious Anaemia, Night Blindness)</strong>; and
    <strong>Nucleic Acids (DNA & RNA): chemical components (Ribose vs 2-Deoxyribose, Purines A/G, Pyrimidines C/T/U), Nucleosides vs Nucleotides, 3′⟶5′ phosphodiester backbone, Watson-Crick B-DNA Double Helix (antiparallel strands, A=T 2 H-bonds, G≡C 3 H-bonds, Pitch 3.4 nm, 10 bp/turn, Diameter 2.0 nm), Chargaff's Equivalence Rules, RNA types (mRNA, tRNA, rRNA), and DNA fingerprinting via VNTRs</strong>.`,
    focusAreas: [
      'D-Glucose Proofs: HI (n-hexane), Br₂/H₂O (gluconic acid), HNO₃ (saccharic acid), Ac₂O (pentaacetate)',
      'Anomers & Mutarotation: α-form (+112°) ⇌ β-form (+19°) ⟶ Equilibrium +52.7°',
      'Disaccharide Linkages: Sucrose (α-1 ⟷ β-2, non-reducing), Maltose (α-1→4), Lactose (β-1→4)',
      'Polysaccharides: Amylose (linear α-1,4), Amylopectin (α-1,4 + α-1,6), Cellulose (linear β-1,4)',
      'Amino Acids: Zwitterion, pI migration, Glycine achirality, 10 Essential Amino Acids (PVT TIM HaLL)',
      'Protein Structure & Denaturation: 1° intact, 2°/3° lost; α-helix intramolecular H-bonds',
      'Vitamins Master Table: B₁₂ (Cobalt, Pernicious Anaemia), C (Scurvy, excreted), D (Rickets), K (Clotting)',
      'Nucleic Acids: Nucleoside vs Nucleotide, 3′→5′ Phosphodiester bond, B-DNA (A=T 2 H-bonds, G≡C 3 H-bonds, Chargaff rule)'
    ]
  },
  'practical-chemistry': {
    overviewHtml: `This complete chapter covers the core framework of <strong>Principles Related to Practical Chemistry (Chapter 24)</strong> for NEET UG. It focuses on:
    <strong>Qualitative Inorganic Analysis: systematic identification of basic radicals (cations) and acid radicals (anions), preliminary examination, dry heating tests, Bunsen flame excitation colors (Na⁺ golden yellow, K⁺ lilac/crimson via blue glass, Ca²⁺ brick red, Sr²⁺ crimson red, Ba²⁺ apple green, Cu²⁺ bluish green; Be²⁺/Mg²⁺ no flame color), systematic group analysis (Groups 0 to VI) governed by Solubility Product (Ksp) and Common-Ion Effect (HCl in Grp II suppresses [S²⁻], NH₄OH in Grp IV enhances [S²⁻], NH₄Cl in Grp III suppresses [OH⁻]), amphoteric hydroxides (Al³⁺, Cr³⁺, Zn²⁺, Pb²⁺), confirmatory reactions (Nessler's reagent brown ppt H₂N–Hg–O–Hg–I for NH₄⁺, PbI₂ golden spangles, deep azure-blue [Cu(NH₃)₄]²⁺, Prussian blue Fe₄[Fe(CN)₆]₃ vs Turnbull's blue, scarlet-red [Ni(dmg)₂], brown ring complex [Fe(H₂O)₅(NO)]SO₄ with Fe⁺¹, Chromyl Chloride test CrO₂Cl₂, and Canary-Yellow ammonium phosphomolybdate)</strong>;
    <strong>Volumetric Analysis & Quantitative Titrations: Molarity, Normality, n-factor equivalence relations (N₁V₁ = N₂V₂, M₁V₁/a = M₂V₂/b), acid-base indicators (Ostwald theory, transition pH ranges: Phenolphthalein 8.3–10.0 and Methyl Orange 3.1–4.4), redox titrations with KMnO₄ as self-indicator in dilute H₂SO₄ (n-factor = 5, equivalent weight = 31.6 g/eq; strict avoidance of HCl and HNO₃; heating oxalic acid to 60–70°C for autocatalysis via Mn²⁺; room temperature Mohr's salt titration), primary standards (Oxalic acid, Mohr's salt) vs secondary standards (KMnO₄, NaOH), and laboratory glassware protocols</strong>; and
    <strong>Organic Functional-Group Detection Tests: Alcohols (Lucas test: 3° immediate, 2° in 5 min, 1° on heating; Na effervescence), Phenols (neutral FeCl₃ deep violet [Fe(OAr)₆]³⁻, Br₂ water white ppt of 2,4,6-tribromophenol), Aldehydes vs Ketones (2,4-DNP orange-yellow hydrazone, Tollens' silver mirror, Fehling's red Cu₂O for aliphatic aldehydes, yellow iodoform CHI₃ test for CH₃–C=O and CH₃–CH(OH)– groups), Carboxylic Acids (saturated NaHCO₃ brisk effervescence of CO₂), Amines (Carbylamine test foul R–NC for 1° amines, Hinsberg test C₆H₅SO₂Cl alkali-solubility distinction, ice-cold Azo Dye test for aniline), and Unsaturation (Br₂ in CCl₄ & Baeyer's cold alk. KMnO₄ decolourization)</strong>.`,
    focusAreas: [
      'Practical Functional Group & Salt Analysis',
      'Volumetric Titrations & Lab Preparations'
    ]
  }
};

export function renderChapterView(chapterId: string): string {
  const chapter = CHAPTERS[chapterId];
  if (!chapter) {
    return `<div class="p-8 text-center text-slate-500">Chapter not found. <a href="#home" class="text-blue-500 underline">Return Home</a></div>`;
  }

  const classification = CLASSIFICATIONS[chapter.classificationId];
  const subject = classification ? SUBJECTS.find(s => s.id === classification.subjectId) : undefined;
  const topics = chapter.topicIds.map(id => TOPICS[id]).filter(Boolean);

  const progress = StorageService.getProgress();

  const chapterObj = CHAPTER_OBJECTIVES[chapter.id] || {
    overviewHtml: `This complete chapter covers the core framework of <strong>${chapter.title}</strong> for NEET UG. It includes comprehensive concept lessons, mathematical derivations, problem-solving patterns, and verified NEET PYQs.`,
    focusAreas: topics.map(t => t.title)
  };

  return `
    <div class="space-y-8 pb-12">
      
      <!-- Chapter Header -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div class="flex flex-wrap items-center gap-2">
          ${subject ? `
            <span class="px-3 py-1 rounded-full text-xs font-bold border ${subject.badgeColor}">
              ${subject.name}
            </span>
          ` : ''}
          ${classification ? `
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              ${classification.title}
            </span>
          ` : ''}
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
            Chapter ${chapter.chapterNumber}
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            ⚡ High-Yield Foundation Chapter
          </span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
          ${chapter.title}
        </h1>

        <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-3xl">
          ${chapter.description}
        </p>

        <!-- Chapter Study Overview Card -->
        <div class="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
          <h3 class="text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
            <span>📘</span> Chapter Learning Objectives & NEET Scope
          </h3>
          
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            ${chapterObj.overviewHtml}
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">NEET Relevance</span>
              <p class="text-xs font-bold text-slate-800 dark:text-slate-200">Core Foundation & High Yield</p>
            </div>
            <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Estimated Study Time</span>
              <p class="text-xs font-bold text-slate-800 dark:text-slate-200">~${chapter.estimatedHours} Hours Complete</p>
            </div>
            <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Chapter Topics</span>
              <p class="text-xs font-bold text-slate-800 dark:text-slate-200">${topics.length} In-Depth Topics</p>
            </div>
            <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Verified PYQ Metric</span>
              <p class="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                ${(() => {
                  const totalPyqs = topics.reduce((acc, t) => {
                    const pyqs = deduplicateAndNormalizePYQs([...(TOPIC_DETAILS[t.id]?.pyqs || []), ...(t.pyqs || [])]);
                    return acc + pyqs.length;
                  }, 0);
                  return totalPyqs > 0 ? `${totalPyqs} Verified NEET PYQs` : 'PYQ statistics unavailable until verified questions are matched.';
                })()}
              </p>
            </div>
          </div>

          <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
            <span class="text-[11px] font-extrabold text-slate-700 dark:text-slate-300">🔥 High-Yield Focus Areas for NEET UG:</span>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-600 dark:text-slate-400 list-disc list-inside">
              ${chapterObj.focusAreas.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="pt-1 flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            ${topics.length} NEET Topics
          </span>
          <span>•</span>
          <span class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Est. ~${chapter.estimatedHours} Hours
          </span>
        </div>
      </div>

      <!-- Topics List -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
            Topics in this Chapter
          </h2>
          <span class="text-xs text-slate-500 dark:text-slate-400">
            Select a topic to start reading notes & PYQs
          </span>
        </div>

        <div class="space-y-3">
          ${topics.map((t, index) => {
            const isCompleted = progress.completedTopics.includes(t.id);
            const isBookmarked = progress.bookmarkedTopics.includes(t.id);

            return `
              <a href="#topic/${t.id}" class="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl ${isCompleted ? 'bg-emerald-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'} font-bold text-sm flex items-center justify-center shrink-0">
                    ${isCompleted ? '✓' : index + 1}
                  </div>

                  <div class="space-y-1">
                    <div class="flex flex-wrap items-center gap-2">
                      <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        ${t.title}
                      </h3>
                      
                      ${t.importanceWeight === 'High Yield' ? `
                        <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                          🔥 HIGH YIELD
                        </span>
                      ` : ''}

                      ${isBookmarked ? `
                        <span class="text-xs" title="Bookmarked">⭐</span>
                      ` : ''}
                    </div>

                    <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      ${t.summary}
                    </p>

                    <div class="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                      <span>⏱️ ${t.estimatedReadTimeMinutes} min read</span>
                      <span>•</span>
                      <span>🎯 ${deduplicateAndNormalizePYQs([...(TOPIC_DETAILS[t.id]?.pyqs || []), ...(t.pyqs || [])]).length} Verified NEET PYQs</span>
                    </div>
                  </div>
                </div>

                <div class="w-full sm:w-auto flex items-center justify-end">
                  <span class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-600 group-hover:text-white text-xs font-bold transition-all text-slate-700 dark:text-slate-300">
                    Study Notes →
                  </span>
                </div>

              </a>
            `;
          }).join('')}
        </div>
      </div>

    </div>
  `;
}
