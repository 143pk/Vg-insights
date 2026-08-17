import { DetailedTopicContent } from '../../types/neet'

export const chemAcidsBasesPhDetails: DetailedTopicContent = {
  topicId: 'chem-acids-bases-ph',
  topicName: 'Acids, Bases, pH & Ionic Equilibrium',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Physical Chemistry',
  chapter: 'Equilibrium',

  whatIsThisTopic: 'Ionic equilibrium deals with the dynamic balance between un-ionised molecules and generated ions in aqueous solutions. From the acidic digestive fluid in our stomach to the buffer system maintaining human blood at pH 7.4, acid-base equilibrium is central to biological and industrial chemistry. This topic establishes the complete foundation of electrolytes, classical and modern acid-base theories, ionisation constants (Ka and Kb), the ionic product of water (Kw), logarithmic pH/pOH scales, Ostwald\'s dilution law, common-ion effect, and salt hydrolysis.',

  basicIdea: [
    '1. Electrolytes vs Non-Electrolytes: Electrolytes dissociate into mobile ions in water and conduct electric current (e.g., NaCl, HCl, NaOH). Non-electrolytes do not ionise and remain as neutral molecules in aqueous solution (e.g., glucose, urea, sucrose).',
    '2. Strong vs Weak Electrolytes: Strong electrolytes undergo complete dissociation (\\alpha \\approx 1) even at moderate concentrations (e.g., HCl, HNO_3, NaOH, NaCl). Weak electrolytes undergo only partial ionisation (\\alpha \\ll 1) establishing a dynamic reversible equilibrium between un-ionised molecules and ions (e.g., CH_3COOH, NH_4OH, HCN).',
    '3. Progressive Acid-Base Theories: Acid-base definitions evolved from Arrhenius (producing H⁺ or OH⁻ in water) to Brønsted-Lowry (proton donor or acceptor) to Lewis (electron-pair acceptor or donor). Each theory expands the scope of acid-base reactivity.',
    '4. The Logarithmic pH Scale: Because [H⁺] concentrations in aqueous solutions span many orders of magnitude (from 1 M to 10⁻¹⁴ M), Sørensen introduced the logarithmic pH scale: pH = -\\log_{10}[H⁺], converting exponential ion concentrations into simple values between 0 and 14.',
  ],

  importantTerms: [
    {
      term: 'Electrolyte',
      symbol: 'E',
      definition: 'A chemical substance that dissolves in water to produce a solution containing free mobile cations and anions that conduct electricity.',
      neetNote: 'Classification into strong or weak depends on the degree of ionisation (\\alpha), NOT on physical solubility!',
    },
    {
      term: 'Degree of Ionisation',
      symbol: '\\alpha',
      definition: 'The fraction of the total moles of electrolyte that ionises into ions in aqueous solution: \\alpha = \ / .',
      neetNote: 'For strong electrolytes \\alpha \\approx 1 (100\\%). For weak electrolytes \\alpha \\ll 1 (typically < 0.05 or 5\\%).',
    },
    {
      term: 'Arrhenius Acid & Base',
      symbol: 'H^/ OH^-',
      definition: 'Arrhenius Acid: A substance containing hydrogen that dissociates in water to yield H⁺ (hydronium, H_3O⁺) ions. Arrhenius Base: A substance containing hydroxyl groups that dissociates in water to yield OH⁻ ions.',
      neetNote: 'Limited strictly to aqueous media. Free H⁺ ions do not exist independently; they hydrate immediately to form H_3O⁺.',
    },
    {
      term: 'Brønsted-Lowry Acid & Base',
      symbol: 'H⁺',
      definition: 'Brønsted Acid: A proton (H⁺) donor. Brønsted Base: A proton (H⁺) acceptor.',
      neetNote: 'Not restricted to aqueous solutions! Applies to gas-phase reactions like NH_3(g) + HCl(g) \→ NH_4Cl(s).',
    },
    {
      term: 'Conjugate Acid-Base Pair',
      symbol: 'HA / A^-',
      definition: 'A pair of chemical species that differ from each other by exactly ONE proton (H⁺). Acid \→ Conjugate Base + H⁺; Base + H⁺ \→ Conjugate Acid.',
      neetNote: 'Inverse strength law: The stronger an acid, the weaker is its conjugate base! HCl (strong acid) has Cl⁻ (extremely weak conjugate base).',
    },
    {
      term: 'Lewis Acid & Base',
      symbol: 'e^- ',
      definition: 'Lewis Acid: An electron-pair acceptor (electrophile with vacant orbitals, e.g., BF_3, AlCl_3, Fe³⁺, H⁺). Lewis Base: An electron-pair donor (nucleophile with lone pairs, e.g., NH_3, H_2O, F⁻, CN⁻).',
      neetNote: 'All Brønsted bases are Lewis bases, but not all Brønsted acids are Lewis acids (BF_3 has no H⁺ to donate, so it is a Lewis acid but NOT a Brønsted acid!).',
    },
    {
      term: 'Amphoteric Substance',
      symbol: 'H_2O, HCO_3^-',
      definition: 'A chemical species capable of acting as both an acid (donating H⁺) and a base (accepting H⁺) depending on the reacting partner.',
      neetNote: 'Key NEET amphoteric species: H_2O, HCO_3⁻, HSO_4⁻, H_2PO_4⁻. In H_2O + HCl \→ H_3O⁺ + Cl⁻, water is a base. In H_2O + NH_3 \⇌ NH_4⁺ + OH⁻, water is an acid.',
    },
    {
      term: 'Ionic Product of Water',
      symbol: 'K_w',
      definition: 'The equilibrium constant for the auto-ionisation of water: K_w = [H^+][OH^-] = 1.0 \× 10^{-14} at 25°C (298 K).',
      neetNote: 'K_w increases significantly with temperature because water auto-protolysis is endothermic. At 90°C, K_w = 10⁻¹², so neutral pH = 6.0!',
    },
    {
      term: 'pH and pOH',
      symbol: 'pH / pOH',
      definition: 'Negative decimal logarithm of hydrogen ion and hydroxide ion activity/molarity: pH = -\\log_{10}[H^+] and pOH = -\\log_{10}[OH^-].',
      neetNote: 'At 25°C, pH + pOH = pK_w = 14.00.',
    },
    {
      term: 'Ostwald\'s Dilution Law',
      symbol: '\\alpha = \\sqrt{K_a / C}',
      definition: 'Applies to weak electrolytes, stating that degree of ionisation (\\alpha) is inversely proportional to the square root of molar concentration.',
      neetNote: 'As concentration C \→ 0 (infinite dilution), \\alpha \→ 1 (100\\% ionisation).',
    },
    {
      term: 'Common-Ion Effect',
      symbol: '',
      definition: 'The reduction in the degree of dissociation of a weak electrolyte upon adding a strong electrolyte containing a common ion.',
      neetNote: 'A direct manifestation of Le Chatelier\'s principle. Essential in Group II and Group III qualitative cation separation.',
    },
    {
      term: 'Salt Hydrolysis',
      symbol: 'K_h',
      definition: 'The interaction between the cation or anion (or both) of a salt and water, altering the neutral balance of H⁺ and OH⁻ ions.',
      neetNote: 'Salts of Strong Acid + Strong Base (e.g., NaCl) do NOT undergo hydrolysis; their aqueous solution remains strictly neutral (pH = 7).',
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Electrolytes, Non-Electrolytes & Degree of Ionisation (\\alpha)',
      paragraphs: [
        'Solutes dissolved in water are divided into two main categories based on electrical conductivity: electrolytes and non-electrolytes.',
        '1. Non-Electrolytes: Substances like glucose (C_6H_{12}O_6), sucrose (C_{12}H_{22}O_{11}), and urea (NH_2CONH_2) dissolve as neutral molecules without generating free ions. They do not conduct electricity.',
        '2. Strong Electrolytes: Substances that undergo complete dissociation into cations and anions in aqueous solution. For strong electrolytes, degree of ionisation \\alpha \\approx 1 (100\\%). Examples include strong mineral acids (HCl, HNO_3, H_2SO_4), strong alkalis (NaOH, KOH, Ba(OH)_2), and soluble salts (NaCl, KNO_3, Na_2SO_4).',
        '3. Weak Electrolytes: Substances that undergo partial ionisation in water, creating a dynamic reversible equilibrium between un-ionised molecules and generated ions. Degree of ionisation \\alpha \\ll 1 (typically < 0.05). Examples include weak organic acids (CH_3COOH, HCOOH), weak inorganic acids (HCN, H_2CO_3, H_2S), and weak bases (NH_4OH, pyridine, aniline).',
      ],
      visual: {
        caption: 'Visual Comparison: Strong Electrolyte (100% ionisation into mobile ions) vs Weak Electrolyte (Partial ionisation establishing dynamic molecular-ionic equilibrium).',
        guide: 'Notice how the strong electrolyte container contains only separated H⁺ and Cl⁻ ions, while the weak electrolyte container consists predominantly of intact un-ionised CH_3COOH molecules with very few ions.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 font-sans border border-slate-200 dark:border-slate-800">
  <rect width="800" height="240" rx="16" fill="#f8fafc" />

  <!-- Left: Strong Electrolyte -->
  <g transform="translate(200, 120)">
    <rect x="-150" y="-100" width="300" height="200" rx="14" fill="#ffffff" stroke="#16a34a" stroke-width="2" />
    <text x="0" y="-75" text-anchor="middle" fill="#16a34a" font-size="15" font-weight="extrabold">STRONG ELECTROLYTE (HCl)</text>
    <rect x="-120" y="-55" width="240" height="28" rx="6" fill="#dcfce7" />
    <text x="0" y="-36" text-anchor="middle" fill="#15803d" font-size="12" font-weight="extrabold">Complete Ionisation (α ≈ 1 or 100%)</text>
    <!-- Ions -->
    <circle cx="-70" cy="10" r="18" fill="#22c55e" />
    <text x="-70" y="15" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="extrabold">H⁺</text>
    <circle cx="-10" cy="40" r="18" fill="#3b82f6" />
    <text x="-10" y="45" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="extrabold">Cl⁻</text>
    <circle cx="50" cy="10" r="18" fill="#22c55e" />
    <text x="50" y="15" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="extrabold">H⁺</text>
    <circle cx="100" cy="45" r="18" fill="#3b82f6" />
    <text x="100" y="50" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="extrabold">Cl⁻</text>
    <text x="0" y="80" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="bold">Only H⁺ and Cl⁻ ions present (No intact HCl)</text>
  </g>

  <!-- Right: Weak Electrolyte -->
  <g transform="translate(600, 120)">
    <rect x="-150" y="-100" width="300" height="200" rx="14" fill="#ffffff" stroke="#d97706" stroke-width="2" />
    <text x="0" y="-75" text-anchor="middle" fill="#d97706" font-size="15" font-weight="extrabold">WEAK ELECTROLYTE (CH₃COOH)</text>
    <rect x="-120" y="-55" width="240" height="28" rx="6" fill="#fef3c7" />
    <text x="0" y="-36" text-anchor="middle" fill="#b45309" font-size="12" font-weight="extrabold">Partial Ionisation (α ≪ 1, ~1.3%)</text>
    <!-- Molecules and few ions -->
    <rect x="-110" y="-5" width="80" height="32" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
    <text x="-70" y="16" text-anchor="middle" fill="#334155" font-size="11" font-weight="extrabold">CH₃COOH</text>

    <rect x="10" y="-15" width="80" height="32" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
    <text x="50" y="6" text-anchor="middle" fill="#334155" font-size="11" font-weight="extrabold">CH₃COOH</text>

    <!-- Few ions -->
    <circle cx="-40" cy="45" r="14" fill="#22c55e" />
    <text x="-40" y="49" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="extrabold">H⁺</text>
    <rect x="10" y="32" width="90" height="26" rx="6" fill="#fde68a" stroke="#d97706" stroke-width="1" />
    <text x="55" y="49" text-anchor="middle" fill="#78350f" font-size="10" font-weight="extrabold">CH₃COO⁻</text>
    <text x="0" y="80" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="bold">Mostly un-ionised molecules + few ions</text>
  </g>
</svg>`
      },
      importantPoints: [
        'Degree of ionisation \\alpha = \ / .',
        'Factors affecting \\alpha: 1. Nature of solute & solvent; 2. Concentration (dilution increases \\alpha); 3. Temperature (higher temp increases \\alpha); 4. Common-ion presence (suppresses \\alpha).',
      ]
    },

    {
      heading: '2. Classical & Modern Acid-Base Theories (Arrhenius, Brønsted-Lowry & Lewis)',
      paragraphs: [
        'Over time, chemists formulated three major conceptual frameworks to explain acid-base behavior:',
        '1. Arrhenius Concept (1884): Defines acids and bases based on ion generation in aqueous solutions. Acid produces H⁺ (or H_3O⁺) ions in water; Base produces OH⁻ ions in water. Limitations: Applies only to aqueous solutions and fails to explain basicity of NH_3 (which has no OH⁻) or acidity of BF_3.',
        '2. Brønsted-Lowry Concept (1923): Defines acid as a proton (H⁺) donor and base as a proton (H⁺) acceptor. Reaction involves proton transfer: Acid + Base \⇌ Conjugate Base + Conjugate Acid.',
        '3. Lewis Concept (1923): Electronic definition independent of protons or solvent. Lewis Acid is an electron-pair acceptor (electrophile, e.g., BF_3, AlCl_3, Fe³⁺, H⁺). Lewis Base is an electron-pair donor (nucleophile with lone pair, e.g., NH_3, H_2O, F⁻, CN⁻).',
      ],
      visuals: [
        {
          caption: 'Arrhenius Concept: Acid releases H⁺ (H_3O⁺) in water while Base releases OH⁻ in water.',
          guide: 'Arrhenius theory requires water as solvent. Hydronium ions (H_3O⁺) form when H⁺ binds to a water molecule.',
          svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 font-sans border border-slate-200 dark:border-slate-800">
  <rect width="800" height="240" rx="16" fill="#f8fafc" />
  <!-- Left Panel: Arrhenius Acid -->
  <g transform="translate(200, 120)">
    <rect x="-150" y="-100" width="300" height="200" rx="14" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
    <text x="0" y="-75" text-anchor="middle" fill="#0284c7" font-size="15" font-weight="extrabold">ARRHENIUS ACID in H₂O</text>
    <rect x="-130" y="-55" width="260" height="35" rx="8" fill="#e0f2fe" />
    <text x="0" y="-32" text-anchor="middle" fill="#0369a1" font-size="13" font-weight="bold">HCl(aq) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)</text>
    <circle cx="-60" cy="25" r="24" fill="#38bdf8" />
    <text x="-60" y="30" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="extrabold">H₃O⁺</text>
    <circle cx="60" cy="25" r="22" fill="#94a3b8" />
    <text x="60" y="30" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="extrabold">Cl⁻</text>
    <text x="0" y="75" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">Releases H⁺ / H₃O⁺ ions in water</text>
  </g>
  <!-- Right Panel: Arrhenius Base -->
  <g transform="translate(600, 120)">
    <rect x="-150" y="-100" width="300" height="200" rx="14" fill="#ffffff" stroke="#059669" stroke-width="2" />
    <text x="0" y="-75" text-anchor="middle" fill="#059669" font-size="15" font-weight="extrabold">ARRHENIUS BASE in H₂O</text>
    <rect x="-130" y="-55" width="260" height="35" rx="8" fill="#d1fae5" />
    <text x="0" y="-32" text-anchor="middle" fill="#047857" font-size="13" font-weight="bold">NaOH(s) + H₂O(l) → Na⁺(aq) + OH⁻(aq)</text>
    <circle cx="-60" cy="25" r="22" fill="#a7f3d0" stroke="#059669" stroke-width="1.5" />
    <text x="-60" y="30" text-anchor="middle" fill="#047857" font-size="13" font-weight="extrabold">Na⁺</text>
    <circle cx="60" cy="25" r="24" fill="#10b981" />
    <text x="60" y="30" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="extrabold">OH⁻</text>
    <text x="0" y="75" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">Releases OH⁻ ions in water</text>
  </g>
</svg>`
        },
        {
          caption: 'Brønsted-Lowry Concept: Proton (H⁺) transfer from acid to base and identification of conjugate acid-base pairs.',
          guide: 'In this reaction, H_2O donates a proton to NH_3. Therefore H_2O is Acid 2 and NH_3 is Base 1.',
          svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 230" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 font-sans border border-slate-200 dark:border-slate-800">
  <rect width="800" height="230" rx="16" fill="#f8fafc" />
  <text x="400" y="30" text-anchor="middle" fill="#4338ca" font-size="15" font-weight="extrabold">BRØNSTED-LOWRY PROTON TRANSFER & CONJUGATE PAIRS</text>

  <g transform="translate(400, 90)">
    <text x="-260" y="0" text-anchor="middle" fill="#0f172a" font-size="20" font-weight="extrabold">NH₃</text>
    <text x="-260" y="22" text-anchor="middle" fill="#0284c7" font-size="12" font-weight="bold">Base 1</text>

    <text x="-170" y="0" text-anchor="middle" fill="#64748b" font-size="18" font-weight="bold">+</text>

    <text x="-80" y="0" text-anchor="middle" fill="#0f172a" font-size="20" font-weight="extrabold">H₂O</text>
    <text x="-80" y="22" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="bold">Acid 2</text>

    <text x="20" y="0" text-anchor="middle" fill="#64748b" font-size="20" font-weight="extrabold">⇌</text>

    <text x="120" y="0" text-anchor="middle" fill="#0f172a" font-size="20" font-weight="extrabold">NH₄⁺</text>
    <text x="120" y="22" text-anchor="middle" fill="#0284c7" font-size="12" font-weight="bold">Conj. Acid 1</text>

    <text x="200" y="0" text-anchor="middle" fill="#64748b" font-size="18" font-weight="bold">+</text>

    <text x="260" y="0" text-anchor="middle" fill="#0f172a" font-size="20" font-weight="extrabold">OH⁻</text>
    <text x="260" y="22" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="bold">Conj. Base 2</text>
  </g>

  <!-- Proton Transfer Arrow -->
  <path d="M 320 70 Q 360 40 420 70" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,3" />
  <polygon points="320,70 328,62 332,74" fill="#dc2626" />
  <text x="370" y="46" text-anchor="middle" fill="#dc2626" font-size="11" font-weight="extrabold">H⁺ Transfer</text>

  <!-- Pair 1 Curve -->
  <path d="M 140 125 Q 320 180 520 125" fill="none" stroke="#0284c7" stroke-width="2" />
  <rect x="270" y="150" width="100" height="20" rx="5" fill="#e0f2fe" />
  <text x="320" y="164" text-anchor="middle" fill="#0369a1" font-size="10" font-weight="extrabold">Conjugate Pair 1</text>

  <!-- Pair 2 Curve -->
  <path d="M 320 125 Q 490 195 660 125" fill="none" stroke="#dc2626" stroke-width="2" />
  <rect x="440" y="160" width="100" height="20" rx="5" fill="#fee2e2" />
  <text x="490" y="174" text-anchor="middle" fill="#b91c1c" font-size="10" font-weight="extrabold">Conjugate Pair 2</text>
</svg>`
        },
        {
          caption: 'Lewis Concept: Lone pair electron donation from :NH_3 (Lewis Base) to electron-deficient BF_3 (Lewis Acid).',
          guide: 'The resulting compound contains a coordinate covalent bond H_3N \→ BF_3 where both shared electrons come from nitrogen.',
          svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 210" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 font-sans border border-slate-200 dark:border-slate-800">
  <rect width="800" height="210" rx="16" fill="#f8fafc" />
  <text x="400" y="28" text-anchor="middle" fill="#7c3aed" font-size="15" font-weight="extrabold">LEWIS CONCEPT: ELECTRON-PAIR DONATION & ACCEPTANCE</text>

  <g transform="translate(180, 110)">
    <rect x="-110" y="-50" width="220" height="100" rx="12" fill="#ffffff" stroke="#7c3aed" stroke-width="2" />
    <text x="0" y="-26" text-anchor="middle" fill="#7c3aed" font-size="13" font-weight="extrabold">LEWIS BASE (e⁻ Donor)</text>
    <text x="0" y="2" text-anchor="middle" fill="#0f172a" font-size="18" font-weight="extrabold">H₃N:</text>
    <text x="0" y="24" text-anchor="middle" fill="#64748b" font-size="11" font-weight="bold">Lone pair present (Nucleophile)</text>
    <text x="0" y="38" text-anchor="middle" fill="#7c3aed" font-size="10" font-weight="extrabold">e.g. NH₃, H₂O, F⁻, CN⁻</text>
  </g>

  <!-- Arrow -->
  <g transform="translate(400, 110)">
    <line x1="-70" y1="0" x2="55" y2="0" stroke="#d97706" stroke-width="3.5" />
    <polygon points="55,-6 70,0 55,6" fill="#d97706" />
    <rect x="-55" y="-26" width="110" height="22" rx="5" fill="#fef3c7" stroke="#d97706" stroke-width="1.2" />
    <text x="0" y="-11" text-anchor="middle" fill="#b45309" font-size="10" font-weight="extrabold">Coordinate Bond</text>
    <text x="0" y="18" text-anchor="middle" fill="#475569" font-size="10" font-weight="bold">e⁻ Pair Transfer</text>
  </g>

  <g transform="translate(620, 110)">
    <rect x="-110" y="-50" width="220" height="100" rx="12" fill="#ffffff" stroke="#2563eb" stroke-width="2" />
    <text x="0" y="-26" text-anchor="middle" fill="#2563eb" font-size="13" font-weight="extrabold">LEWIS ACID (e⁻ Acceptor)</text>
    <text x="0" y="2" text-anchor="middle" fill="#0f172a" font-size="18" font-weight="extrabold">BF₃</text>
    <text x="0" y="24" text-anchor="middle" fill="#64748b" font-size="11" font-weight="bold">Incomplete octet (Electrophile)</text>
    <text x="0" y="38" text-anchor="middle" fill="#2563eb" font-size="10" font-weight="extrabold">e.g. BF₃, AlCl₃, Fe³⁺, H⁺</text>
  </g>
</svg>`
        }
      ],
      tables: [
        {
          headers: ['Theory', 'Acid Definition', 'Base Definition', 'Scope & Limitations'],
          rows: [
            ['Arrhenius', 'Releases H⁺ / H₃O⁺ in water', 'Releases OH⁻ in water', 'Restricted strictly to aqueous solutions.'],
            ['Brønsted-Lowry', 'Proton (H⁺) donor', 'Proton (H⁺) acceptor', 'Broader; covers gas-phase & non-aqueous reactions.'],
            ['Lewis', 'Electron-pair acceptor', 'Electron-pair donor', 'Broadest; includes species without any hydrogen.'],
          ]
        }
      ]
    },

    {
      heading: '3. Conjugate Acid-Base Pairs & Amphoteric Species',
      paragraphs: [
        '1. Conjugate Acid-Base Rule: To obtain the conjugate base of any acid, remove one H⁺ ion. To obtain the conjugate acid of any base, add one H⁺ ion.',
        'Examples:',
        '• Acid = HSO_4⁻ \→ Conjugate Base = SO_4^{2-} (remove H⁺)',
        '• Base = NH_3 \→ Conjugate Acid = NH_4⁺ (add H⁺)',
        '• Base = H_2O \→ Conjugate Acid = H_3O⁺ (add H⁺); Acid = H_2O \→ Conjugate Base = OH⁻ (remove H⁺)',
        '2. Amphoteric Species: Molecules or ions capable of donating or accepting a proton depending on reaction conditions. Common NEET amphoteric species include H_2O, HCO_3⁻, HSO_4⁻, and H_2PO_4⁻.',
        'For amphoteric HCO_3⁻:',
        '• Acting as Acid: HCO_3⁻ \→ H⁺ + CO_3^{2-} (Conjugate Base = CO_3^{2-})',
        '• Acting as Base: HCO_3⁻ + H⁺ \→ H_2CO_3 (Conjugate Acid = H_2CO_3)',
      ],
      importantPoints: [
        'Conjugate base of a strong acid is an extremely weak base.',
        'Conjugate base of a weak acid is a relatively strong base.',
        'Always check proton count! A conjugate acid-base pair MUST differ by exactly ONE proton (H⁺).',
      ]
    },

    {
      heading: '4. Quantitative Acid & Base Strength (Ka, Kb, pKa, pKb) & Conjugate Relationship',
      paragraphs: [
        '1. Acid Ionisation Constant (K_a): For weak acid HA(aq) \⇌ H⁺(aq) + A⁻(aq):',
        'K_a = \ / ',
        'Higher K_a value indicates greater acid strength and higher dissociation.',
        '2. Base Ionisation Constant (K_b): For weak base B(aq) + H_2O(l) \⇌ BH⁺(aq) + OH⁻(aq):',
        'K_b = \ / ',
        'Higher K_b value indicates greater base strength.',
        '3. Logarithmic Scale (pK_a and pK_b):',
        'pK_a = -\\log_{10} K_a \\quad \ \\quad pK_b = -\\log_{10} K_b',
        'Note: Smaller pK_a means STRONGER acid! Smaller pK_b means STRONGER base!',
        '4. Fundamental Conjugate Pair Relationship: For any conjugate acid-base pair in water:',
        'K_a \× K_b = K_w = 1.0 \× 10^{-14} \\quad ',
        'Taking negative logarithm on both sides yields:',
        'pK_a + pK_b = pK_w = 14.00 \\quad ',
      ],
      formulas: [
        'K_a = \ / , \\quad K_b = \ / , \\quad K_a \\cdot K_b = K_w',
      ],
      examples: [
        {
          problem: 'If the ionisation constant K_b of NH_3 is 1.8 \× 10⁻⁵ at 25°C, calculate the ionisation constant K_a of its conjugate acid NH_4⁺.',
          given: 'Given: K_b(NH_3) = 1.8 \× 10⁻⁵, K_w = 1.0 \× 10⁻¹⁴.',
          stepByStep: [
            'Step 1: Write the conjugate pair formula: K_a \× K_b = K_w.',
            'Step 2: Rearrange to solve for K_a: K_a(NH_4⁺) = \ /  = \\frac{1.0 \× 10^{-14}}{1.8 \× 10^{-5}}.',
            'Step 3: Perform division: K_a = 5.56 \× 10^{-10}.',
          ],
          answer: 'K_a(NH_4⁺) = 5.56 \× 10^{-10}',
        }
      ]
    },

    {
      heading: '5. Auto-Ionisation of Water (Kw) & The Logarithmic pH Scale',
      paragraphs: [
        '1. Auto-Protolysis of Water: Pure water undergoes self-ionisation according to:',
        'H_2O(l) + H_2O(l) \⇌ H_3O⁺(aq) + OH⁻(aq)',
        'The ionic product constant K_w is expressed as:',
        'K_w = [H^+][OH^-] = 1.0 \× 10^{-14} \\quad ',
        'In pure neutral water at 25°C, [H⁺] = [OH⁻] = \\sqrt{K_w} = 1.0 \× 10⁻⁷ M.',
        '2. Temperature Dependency of K_w: Auto-ionisation of water is an endothermic process (\Δ H > 0). Increasing temperature shifts equilibrium forward, increasing K_w:',
        '• At 0°C: K_w = 1.14 \× 10⁻¹⁵ \\implies \ = 7.47',
        '• At 25°C: K_w = 1.0 \× 10⁻¹⁴ \\implies \ = 7.00',
        '• At 90°C: K_w = 1.0 \× 10⁻¹² \\implies \ = 6.00',
        '3. Logarithmic pH Scale: pH = -\\log_{10}[H⁺] \\quad \ \\quad pOH = -\\log_{10}[OH^-].',
        'Taking negative log of K_w = [H⁺][OH⁻] gives:',
        'pH + pOH = pK_w = 14.00 \\quad ',
      ],
      visual: {
        caption: 'The pH scale at 25°C ranging from 0 (highly acidic) to 7 (neutral) to 14 (highly basic) with household and laboratory benchmarks.',
        guide: 'Notice that a change of 1 pH unit represents a 10-fold (10x) change in [H⁺] ion concentration!',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 250" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 font-sans border border-slate-200 dark:border-slate-800">
  <rect width="800" height="250" rx="16" fill="#f8fafc" />
  <text x="400" y="30" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="extrabold">THE pH SCALE AT 25°C (0 to 14)</text>

  <defs>
    <linearGradient id="phGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="25%" stop-color="#f97316" />
      <stop offset="50%" stop-color="#22c55e" />
      <stop offset="75%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#6366f1" />
    </linearGradient>
  </defs>

  <rect x="50" y="55" width="700" height="38" rx="10" fill="url(#phGrad)" />

  <g transform="translate(0, 100)" font-size="11" font-weight="extrabold" fill="#0f172a" text-anchor="middle">
    <text x="50">0</text>
    <text x="150">2</text>
    <text x="250">4</text>
    <text x="350">6</text>
    <text x="400" fill="#15803d" font-size="13">7</text>
    <text x="450">8</text>
    <text x="550">10</text>
    <text x="650">12</text>
    <text x="750">14</text>
  </g>

  <rect x="50" y="118" width="320" height="24" rx="5" fill="#fee2e2" />
  <text x="210" y="134" text-anchor="middle" fill="#b91c1c" font-size="11" font-weight="extrabold">ACIDIC REGION ([H⁺] > 10⁻⁷ M)</text>

  <rect x="380" y="118" width="40" height="24" rx="5" fill="#dcfce7" />
  <text x="400" y="134" text-anchor="middle" fill="#15803d" font-size="10" font-weight="extrabold">NEUTRAL</text>

  <rect x="430" y="118" width="320" height="24" rx="5" fill="#e0e7ff" />
  <text x="590" y="134" text-anchor="middle" fill="#3730a3" font-size="11" font-weight="extrabold">BASIC REGION ([OH⁻] > 10⁻⁷ M)</text>

  <g transform="translate(0, 168)" font-size="10" fill="#475569" font-weight="bold">
    <text x="110" y="0" text-anchor="middle">Stomach Acid (1.2)</text>
    <text x="165" y="18" text-anchor="middle">Lemon Juice (2.3)</text>
    <text x="350" y="0" text-anchor="middle">Milk (6.5)</text>
    <text x="400" y="18" text-anchor="middle" fill="#15803d">Pure Water (7.0)</text>
    <text x="420" y="0" text-anchor="middle">Blood (7.4)</text>
    <text x="575" y="18" text-anchor="middle">Milk of Magnesia (10.5)</text>
    <text x="720" y="0" text-anchor="middle">1M NaOH (14.0)</text>
  </g>

  <g transform="translate(0, 220)" font-size="11" fill="#0f172a" font-weight="extrabold" text-anchor="middle">
    <text x="50">[H⁺] = 1 M</text>
    <text x="400">[H⁺] = 10⁻⁷ M</text>
    <text x="750">[H⁺] = 10⁻¹⁴ M</text>
  </g>
</svg>`
      }
    },

    {
      heading: '6. pH Calculations for Strong Acids, Strong Bases & Extremely Dilute Solutions (The 10⁻⁸ M Trap)',
      paragraphs: [
        '1. Strong Monoprotic Acids (HCl, HNO_3): Fully dissociate, so [H⁺] = C. Therefore pH = -\\log_{10} C.',
        '2. Strong Diprotic Acids (H_2SO_4): For dilute H_2SO_4, [H⁺] = 2C. Therefore pH = -\\log_{10}(2C).',
        '3. Strong Monoprotic Bases (NaOH, KOH): Fully dissociate, so [OH⁻] = C. pOH = -\\log_{10} C, then pH = 14 - pOH.',
        '4. Mixture of Strong Acids: Total [H⁺] = \ / .',
        '5. Mixture of Strong Acid + Strong Base: Resultant normality N_{res} = \ / . If acid dominates, calculate pH = -\\log_{10} N_{res}. If base dominates, calculate pOH = -\\log_{10} N_{res} and pH = 14 - pOH.',
        '6. CRITICAL NEET TRAP — Extremely Dilute Solutions (e.g., 10⁻⁸ M HCl or 10⁻⁸ M NaOH):',
        '• An acid solution can NEVER be basic (pH > 7)!',
        '• When acid concentration C \\le 10^{-6} M, you CANNOT ignore the H⁺ contributed by auto-dissociation of water ([H⁺]_{water} = 10⁻⁷ M).',
        '• Total [H⁺] = [H⁺]_{acid} + [H⁺]_{water} = 10⁻⁸ + 10⁻⁷ = 1.1 \× 10⁻⁷ M.',
        '• pH = -\\log_{10}(1.1 \× 10⁻⁷) = 7 - \\log_{10}(1.1) = 6.98 (acidic, slightly below 7!).',
      ],
      examples: [
        {
          problem: 'Calculate the pH of a 10⁻⁸ M HCl solution at 25°C.',
          given: 'Given: [HCl] = 10⁻⁸ M, K_w = 1.0 \× 10⁻¹⁴.',
          stepByStep: [
            'Step 1: Identify that [HCl] = 10⁻⁸ M is extremely dilute (< 10⁻⁶ M). Water contribution cannot be neglected!',
            'Step 2: Let x = [H⁺] from water auto-ionisation. In solution, total [H⁺] = 10⁻⁸ + x and [OH⁻] = x.',
            'Step 3: Substitute into K_w = [H⁺][OH⁻] = (10⁻⁸ + x)(x) = 10⁻¹⁴ \\implies x² + 10⁻⁸x - 10⁻¹⁴ = 0.',
            'Step 4: Solve quadratic equation: x = 0.95 \× 10⁻⁷ M.',
            'Step 5: Total [H⁺] = 10⁻⁸ + 0.95 \× 10⁻⁷ = 1.05 \× 10⁻⁷ M (or approx 1.1 \× 10⁻⁷ M).',
            'Step 6: pH = -\\log_{10}(1.05 \× 10⁻⁷) = 6.98.',
          ],
          answer: 'pH = 6.98 (Acidic solution)',
        }
      ]
    },

    {
      heading: '7. Weak Electrolyte Ionisation & Ostwald\'s Dilution Law',
      paragraphs: [
        'Consider a weak monoprotic acid HA of concentration C mol L⁻¹ undergoing partial ionisation:',
        'HA(aq) + H_2O(l) \⇌ H⁺(aq) + A⁻(aq)',
        'Initial Molarity: C, 0, 0.',
        'Equilibrium Molarity: C(1 - \\alpha), C\\alpha, C\\alpha.',
        'The ionisation constant K_a is:',
        'K_a = \ /  = \ /  = \ / ',
        'Ostwald\'s Dilution Law Approximation: For weak electrolytes where \\alpha \\le 0.05 (5\\%), 1 - \\alpha \\approx 1. Thus:',
        'K_a = C\\alpha^2 \\implies \\alpha = \\sqrt{\ / } = \\sqrt{K_a V}',
        'Key Weak Acid Equations:',
        '• [H⁺] = C\\alpha = C \\sqrt{\ / } = \\sqrt{K_a C}',
        '• pH = -\\log_{10}\\sqrt{K_a C} = \ / (pK_a - \\log_{10} C)',
        'Analogous Weak Base Equations (for NH_4OH, B):',
        '• \\alpha = \\sqrt{\ / }, \\quad [OH^-] = C\\alpha = \\sqrt{K_b C}, \\quad pOH = \ / (pK_b - \\log_{10} C)',
      ],
      visual: {
        caption: 'ICE Table and Equilibrium concentration relationship for weak acid HA under Ostwald\'s Dilution Law.',
        guide: 'When dilution V increases (concentration C decreases), the degree of ionisation \\alpha increases according to \\alpha = \\sqrt{K_a V}.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 220" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 font-sans border border-slate-200 dark:border-slate-800">
  <rect width="800" height="220" rx="16" fill="#f8fafc" />
  <text x="400" y="28" text-anchor="middle" fill="#059669" font-size="15" font-weight="extrabold">WEAK ACID IONISATION EQUILIBRIUM & OSTWALD'S DILUTION LAW</text>

  <g transform="translate(400, 70)">
    <rect x="-350" y="-18" width="700" height="36" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.2" />
    <text x="0" y="5" text-anchor="middle" fill="#047857" font-size="14" font-weight="extrabold">HA(aq) + H₂O(l) ⇌ H₃O⁺(aq) + A⁻(aq)</text>
  </g>

  <g transform="translate(400, 148)">
    <rect x="-350" y="-42" width="700" height="84" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />
    <line x1="-350" y1="-14" x2="350" y2="-14" stroke="#e2e8f0" stroke-width="1" />
    <line x1="-150" y1="-42" x2="-150" y2="42" stroke="#e2e8f0" stroke-width="1" />
    <line x1="50" y1="-42" x2="50" y2="42" stroke="#e2e8f0" stroke-width="1" />

    <text x="-250" y="-23" text-anchor="middle" fill="#64748b" font-size="11" font-weight="bold">State</text>
    <text x="-50" y="-23" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="extrabold">[HA]</text>
    <text x="150" y="-23" text-anchor="middle" fill="#059669" font-size="12" font-weight="extrabold">[H⁺]</text>
    <text x="280" y="-23" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="extrabold">[A⁻]</text>

    <text x="-250" y="4" text-anchor="middle" fill="#475569" font-size="11" font-weight="bold">Initial Conc.</text>
    <text x="-50" y="4" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">C</text>
    <text x="150" y="4" text-anchor="middle" fill="#64748b" font-size="12" font-weight="bold">0</text>
    <text x="280" y="4" text-anchor="middle" fill="#64748b" font-size="12" font-weight="bold">0</text>

    <text x="-250" y="28" text-anchor="middle" fill="#047857" font-size="11" font-weight="extrabold">Equilibrium Conc.</text>
    <text x="-50" y="28" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="extrabold">C(1 - α)</text>
    <text x="150" y="28" text-anchor="middle" fill="#059669" font-size="12" font-weight="extrabold">C·α</text>
    <text x="280" y="28" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="extrabold">C·α</text>
  </g>
</svg>`
      },
      examples: [
        {
          problem: 'Calculate the degree of dissociation (\\alpha) and pH of a 0.1 M CH_3COOH solution at 25°C. (K_a = 1.8 \× 10⁻⁵)',
          given: 'Given: C = 0.1 M, K_a = 1.8 \× 10⁻⁵.',
          stepByStep: [
            'Step 1: Check Ostwald approximation applicability: \\alpha = \\sqrt{\ / } = \\sqrt{\\frac{1.8 \× 10^{-5}}{0.1}} = \\sqrt{1.8 \× 10^{-4}}.',
            'Step 2: Calculate \\alpha: \\alpha = 1.34 \× 10⁻² = 0.0134 (1.34\\%). Since \\alpha < 0.05, the approximation 1 - \\alpha \\approx 1 is valid!',
            'Step 3: Calculate [H⁺] = C\\alpha = 0.1 \× 0.0134 = 1.34 \× 10⁻³ M.',
            'Step 4: Calculate pH = -\\log_{10}(1.34 \× 10⁻³) = 3 - \\log_{10}(1.34) = 3 - 0.127 = 2.87.',
          ],
          answer: '\\alpha = 0.0134 (1.34\\%), pH = 2.87',
        }
      ]
    },

    {
      heading: '8. Common-Ion Effect & Stepwise Ionisation of Polybasic Acids',
      paragraphs: [
        '1. Common-Ion Effect: When a strong electrolyte sharing a common ion is added to a solution of a weak electrolyte, the ionisation equilibrium of the weak electrolyte shifts in the reverse direction according to Le Chatelier\'s principle.',
        'Example: Adding CH_3COONa (provides excess CH_3COO⁻) or HCl (provides excess H⁺) to CH_3COOH solution suppresses the dissociation of CH_3COOH, decreasing [H⁺] and increasing pH.',
        '2. Qualitative Analysis Applications: In Group II qualitative analysis, HCl is added with H_2S to suppress S²⁻ ion concentration so that only Group II cations (Pb²⁺, Cu²⁺, Bi³⁺, Cd²⁺) precipitate as sulfides. In Group III analysis, NH_4Cl is added with NH_4OH to suppress OH⁻ concentration so only Fe³⁺, Al³⁺, Cr³⁺ precipitate as hydroxides.',
        '3. Polybasic Acids (H_2A, H_3PO_4): Polybasic acids ionise in successive steps:',
        'Step 1: H_2A \⇌ H⁺ + HA⁻ \\quad (K_{a1})',
        'Step 2: HA⁻ \⇌ H⁺ + A^{2-} \\quad (K_{a2})',
        'Key Rule: K_{a1} \\gg K_{a2} \\gg K_{a3} because removing a positively charged proton (H⁺) from a negatively charged anion (HA⁻) requires overcoming significant electrostatic attraction.',
        'For dibasic acids: Total [H⁺] is determined almost entirely by Step 1 ([H⁺] \\approx \\sqrt{K_{a1} C}), while [A^{2-}] \\approx K_{a2} (independent of initial concentration!).',
      ],
      visual: {
        caption: 'Common-Ion Effect: Addition of CH_3COONa provides excess CH_3COO⁻, shifting CH_3COOH equilibrium to the left.',
        guide: 'Le Chatelier\'s principle forces the system to consume added CH_3COO⁻ ions, suppressing acetic acid dissociation.',
        svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 210" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 font-sans border border-slate-200 dark:border-slate-800">
  <rect width="800" height="210" rx="16" fill="#f8fafc" />
  <text x="400" y="28" text-anchor="middle" fill="#b45309" font-size="15" font-weight="extrabold">COMMON-ION EFFECT: LE CHATELIER EQUILIBRIUM SHIFT</text>

  <g transform="translate(400, 80)">
    <rect x="-320" y="-28" width="640" height="56" rx="10" fill="#ffffff" stroke="#d97706" stroke-width="2" />
    <text x="0" y="5" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="extrabold">CH₃COOH(aq) ⇌ CH₃COO⁻(aq) + H⁺(aq)</text>
  </g>

  <g transform="translate(220, 158)">
    <rect x="-120" y="-24" width="240" height="48" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.2" />
    <text x="0" y="-5" text-anchor="middle" fill="#b45309" font-size="11" font-weight="extrabold">Add CH₃COONa (Strong Salt)</text>
    <text x="0" y="12" text-anchor="middle" fill="#78350f" font-size="10" font-weight="bold">Provides excess CH₃COO⁻ ions</text>
  </g>

  <g transform="translate(580, 158)">
    <rect x="-140" y="-24" width="280" height="48" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2" />
    <text x="0" y="-5" text-anchor="middle" fill="#b91c1c" font-size="11" font-weight="extrabold">Equilibrium Shifts LEFT ⟵</text>
    <text x="0" y="12" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Dissociation of CH₃COOH is suppressed!</text>
  </g>
</svg>`
      }
    },

    {
      heading: '9. Acid-Base Neutralisation & Salt Hydrolysis (WA+SB, SA+WB, WA+WB)',
      paragraphs: [
        'Salt hydrolysis is the reverse of neutralisation where ions of a dissolved salt interact with water to alter pH.',
        '1. Salt of Strong Acid + Strong Base (e.g., NaCl, KNO_3, BaCl_2): Neither Na⁺ nor Cl⁻ undergoes hydrolysis. Aqueous solution remains neutral: [H⁺] = [OH⁻] = 10⁻⁷ M, pH = 7.00.',
        '2. Salt of Weak Acid + Strong Base (e.g., CH_3COONa, NaCN, Na_2CO_3): Anionic Hydrolysis occurs (A⁻ + H_2O \⇌ HA + OH⁻). Generates excess OH⁻, creating a basic solution (pH > 7):',
        '• Hydrolysis Constant: K_h = \ / ',
        '• Degree of Hydrolysis: h = \\sqrt{\ / }',
        '• pH Formula: pH = 7 + \ /  pK_a + \ /  \\log_{10} C',
        '3. Salt of Strong Acid + Weak Base (e.g., NH_4Cl, (NH_4)_2SO_4, FeCl_3): Cationic Hydrolysis occurs (B⁺ + H_2O \⇌ BOH + H⁺). Generates excess H⁺, creating an acidic solution (pH < 7):',
        '• Hydrolysis Constant: K_h = \ / ',
        '• Degree of Hydrolysis: h = \\sqrt{\ / }',
        '• pH Formula: pH = 7 - \ /  pK_b - \ /  \\log_{10} C',
        '4. Salt of Weak Acid + Weak Base (e.g., CH_3COONH_4, NH_4CN): Both cation and anion hydrolyse:',
        '• Hydrolysis Constant: K_h = \ / ',
        '• Degree of Hydrolysis: h = \\sqrt{\ / } \\quad (Independent of salt concentration C!)',
        '• pH Formula: pH = 7 + \ /  pK_a - \ /  pK_b \\quad (Independent of concentration C!)',
      ],
      tables: [
        {
          headers: ['Salt Type', 'Hydrolysis Type', 'Solution Nature', 'pH Formula at 25°C', 'Key Feature'],
          rows: [
            ['SA + SB (e.g. NaCl)', 'No Hydrolysis', 'Neutral (pH = 7)', 'pH = 7.00', 'Independent of concentration.'],
            ['WA + SB (e.g. CH3COONa)', 'Anionic Hydrolysis', 'Basic (pH > 7)', 'pH = 7 + ½ pKa + ½ log C', 'pH increases with concentration.'],
            ['SA + WB (e.g. NH4Cl)', 'Cationic Hydrolysis', 'Acidic (pH < 7)', 'pH = 7 - ½ pKb - ½ log C', 'pH decreases with concentration.'],
            ['WA + WB (e.g. CH3COONH4)', 'Both Hydrolyse', 'Acidic/Basic/Neutral', 'pH = 7 + ½ pKa - ½ pKb', 'pH is completely independent of C!'],
          ]
        }
      ]
    },

    {
      heading: '10. Core NEET Numerical Problem-Solving Patterns',
      paragraphs: [
        'Mastering these 5 core numerical patterns guarantees speed and accuracy in NEET Chemistry:',
        'Pattern 1: Extremely Dilute Strong Acid/Base (Incorporating Water Ionisation)',
        'Pattern 2: Mixture of Strong Acid and Strong Base (Resultant Normality)',
        'Pattern 3: Weak Acid / Base pH Calculation via Ostwald\'s Dilution Law',
        'Pattern 4: Conjugate Pair K_a \\cdot K_b = K_w Conversions',
        'Pattern 5: Salt Hydrolysis pH Calculation for WA+SB, SA+WB, and WA+WB',
      ],
      examples: [
        {
          problem: 'Pattern 2 Example: Calculate the pH when 50 mL of 0.2 M HCl is mixed with 50 mL of 0.1 M NaOH at 25°C.',
          given: 'Given: V_1 = 50 mL, M_1 = 0.2 M (HCl); V_2 = 50 mL, M_2 = 0.1 M (NaOH). Total Volume V_total = 100 mL.',
          stepByStep: [
            'Step 1: Calculate millimoles of H⁺ from HCl: mmol(H⁺) = 50 mL \× 0.2 M = 10 mmol.',
            'Step 2: Calculate millimoles of OH⁻ from NaOH: mmol(OH⁻) = 50 mL \× 0.1 M = 5 mmol.',
            'Step 3: Neutralisation reaction: 5 mmol of OH⁻ neutralises 5 mmol of H⁺, leaving excess H⁺.',
            'Step 4: Excess H⁺ millimoles = 10 - 5 = 5 mmol in total volume 100 mL.',
            'Step 5: Resultant [H⁺] = \ /  = 0.05 M = 5 \× 10⁻² M.',
            'Step 6: Calculate pH = -\\log_{10}(5 \× 10⁻²) = 2 - \\log_{10}(5) = 2 - 0.699 = 1.30.',
          ],
          answer: 'Resultant pH = 1.30 (Acidic)',
        },
        {
          problem: 'Pattern 5 Example: Calculate the pH of a 0.1 M CH_3COONa solution at 25°C. (pK_a of CH_3COOH = 4.74)',
          given: 'Given: C = 0.1 M, pK_a = 4.74.',
          stepByStep: [
            'Step 1: Identify salt type: CH_3COONa is a salt of Weak Acid (CH_3COOH) + Strong Base (NaOH). Solution is basic.',
            'Step 2: Use salt hydrolysis pH formula: pH = 7 + \ /  pK_a + \ /  \\log_{10} C.',
            'Step 3: Calculate \\log_{10}(0.1) = -1.0.',
            'Step 4: Substitute values: pH = 7 + \ / (4.74) + \ / (-1.0) = 7 + 2.37 - 0.50 = 8.87.',
          ],
          answer: 'pH = 8.87 (Basic solution)',
        }
      ]
    }
  ],

  formulae: [
    {
      title: '1. pH & pOH Definitions',
      formula: 'pH = -\\log_{10}[H^+], \\quad pOH = -\\log_{10}[OH^-], \\quad pH + pOH = 14.00 ',
      variables: 'pH = potential of hydrogen, pOH = potential of hydroxide, [H⁺] = hydrogen ion molarity, [OH⁻] = hydroxide ion molarity.',
      whenToUse: 'Use to calculate pH or pOH from hydrogen or hydroxide ion concentration in solution.',
      calculationExample: {
        problem: 'Calculate the pH of a 0.005 M Ba(OH)_2 solution assuming complete dissociation.',
        given: 'Ba(OH)_2 \→ Ba²⁺ + 2OH⁻. Molarity = 0.005 M.',
        stepByStep: [
          'Step 1: Calculate [OH⁻] = 2 \× 0.005 M = 0.01 M = 10⁻² M.',
          'Step 2: Calculate pOH = -\\log_{10}(10⁻²) = 2.00.',
          'Step 3: Calculate pH = 14 - pOH = 14 - 2 = 12.00.',
        ],
        answer: 'pH = 12.00',
      }
    },
    {
      title: '2. Ionic Product of Water (Kw)',
      formula: 'K_w = [H^+][OH^-] = 1.0 \× 10^{-14} \, \\quad pK_w = 14.00',
      variables: 'K_w = ionic product constant of water, [H⁺] = hydronium concentration, [OH⁻] = hydroxide concentration.',
      whenToUse: 'Use to convert between [H⁺] and [OH⁻] in any aqueous solution at 25°C.',
      calculationExample: {
        problem: 'Find the hydroxide ion concentration [OH⁻] in a solution with [H⁺] = 2.0 \× 10⁻⁴ M at 25°C.',
        given: '[H⁺] = 2.0 \× 10⁻⁴ M, K_w = 1.0 \× 10⁻¹⁴.',
        stepByStep: [
          'Step 1: Formula: [OH⁻] = \ / .',
          'Step 2: Substitute values: [OH⁻] = \\frac{1.0 \× 10^{-14}}{2.0 \× 10^{-4}} = 5.0 \× 10^{-11} M.',
        ],
        answer: '[OH⁻] = 5.0 \× 10⁻¹¹ M',
      }
    },
    {
      title: '3. Conjugate Pair Constant Relationship',
      formula: 'K_a \× K_b = K_w, \\quad pK_a + pK_b = pK_w = 14.00',
      variables: 'K_a = ionisation constant of weak acid, K_b = ionisation constant of its conjugate base.',
      whenToUse: 'Use when converting between dissociation constants of a acid and its conjugate base.',
      calculationExample: {
        problem: 'Given pK_a of HCN = 9.21 at 25°C, calculate the pK_b of cyanide ion CN⁻.',
        given: 'pK_a(HCN) = 9.21.',
        stepByStep: [
          'Step 1: Formula: pK_a + pK_b = 14.00.',
          'Step 2: Solve for pK_b: pK_b(CN⁻) = 14.00 - 9.21 = 4.79.',
        ],
        answer: 'pK_b(CN⁻) = 4.79',
      }
    },
    {
      title: '4. Ostwald\'s Dilution Law (Weak Acid / Base)',
      formula: '\\alpha = \\sqrt{\ / }, \\quad [H^+] = C\\alpha = \\sqrt{K_a C}, \\quad pH = \ / (pK_a - \\log_{10} C)',
      variables: '\\alpha = degree of ionisation, K_a = acid ionisation constant, C = molar concentration.',
      whenToUse: 'Use for weak monobasic acids or weak monoacidic bases when \\alpha \\le 0.05.',
      calculationExample: {
        problem: 'Calculate [H⁺] and pH of 0.04 M acetic acid solution (K_a = 1.8 \× 10⁻⁵).',
        given: 'C = 0.04 M, K_a = 1.8 \× 10⁻⁵.',
        stepByStep: [
          'Step 1: Calculate [H⁺] = \\sqrt{K_a C} = \\sqrt{(1.8 \× 10^{-5})(0.04)} = \\sqrt{7.2 \× 10^{-7}} = \\sqrt{72 \× 10^{-8}} = 8.485 \× 10⁻⁴ M.',
          'Step 2: Calculate pH = -\\log_{10}(8.485 \× 10⁻⁴) = 4 - \\log_{10}(8.485) = 4 - 0.928 = 3.07.',
        ],
        answer: '[H⁺] = 8.49 \× 10⁻⁴ M, pH = 3.07',
      }
    },
    {
      title: '5. Salt Hydrolysis Formulas',
      formula: '\ pH = 7 + \ / pK_a + \ / \\log C, \\quad \ pH = 7 - \ / pK_b - \ / \\log C, \\quad \ pH = 7 + \ / pK_a - \ / pK_b',
      variables: 'pK_a = -\\log K_a, pK_b = -\\log K_b, C = molar concentration of salt.',
      whenToUse: 'Use to calculate pH of aqueous solutions of hydrolysable salts.',
      calculationExample: {
        problem: 'Calculate pH of 0.1 M NH_4Cl solution at 25°C. (pK_b of NH_3 = 4.75)',
        given: 'Salt of Strong Acid (HCl) + Weak Base (NH_3). C = 0.1 M, pK_b = 4.75.',
        stepByStep: [
          'Step 1: Identify formula for SA+WB salt: pH = 7 - \ /  pK_b - \ /  \\log C.',
          'Step 2: \\log(0.1) = -1.0.',
          'Step 3: Calculate pH = 7 - \ / (4.75) - \ / (-1.0) = 7 - 2.375 + 0.50 = 5.125.',
        ],
        answer: 'pH = 5.13 (Acidic salt solution)',
      }
    }
  ],

  neetImportantPoints: [
    '📌 Water auto-ionisation is endothermic (\Δ H > 0). Therefore, K_w increases with temperature (at 90°C, K_w = 10⁻¹², neutral pH = 6.0).',
    '📌 Conjugate base of a strong acid is an extremely weak base (e.g., Cl⁻ is practically neutral in water).',
    '📌 Conjugate base of a weak acid is a relatively strong base (e.g., CH_3COO⁻ undergoes anionic hydrolysis to generate basic pH).',
    '📌 A 10⁻⁸ M HCl solution has pH = 6.98 (NEVER 8!), because water\'s own [H⁺] = 10⁻⁷ M must be added to the total [H⁺].',
    '📌 For salt of Weak Acid + Weak Base (e.g., CH_3COONH_4), pH = 7 + ½ pK_a - ½ pK_b is completely INDEPENDENT of salt concentration C!',
    '📌 Polybasic acids ionise in steps where K_{a1} \\gg K_{a2} \\gg K_{a3}. Total [H⁺] is governed by K_{a1}, while [A^{2-}] \\approx K_{a2}.',
    '📌 Common-ion effect suppresses dissociation of weak electrolytes, widely applied in Group II (H_2S + HCl) and Group III (NH_4OH + NH_4Cl) cation analysis.',
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing Lewis acids with Brønsted acids.',
      correctFact: 'BF_3, AlCl_3, and Fe³⁺ are Lewis acids (electron-pair acceptors) but NOT Brønsted acids because they do not contain any hydrogen to donate as a proton (H⁺)!',
      whyItMattersForNEET: 'NEET frequently tests classification of BF_3, AlCl_3, and NH_3 in conceptual MCQs.',
    },
    {
      commonConfusion: 'Calculating pH of 10⁻⁸ M HCl as pH = 8.',
      correctFact: 'An acidic solution can NEVER have a pH greater than 7 at 25°C! At extreme dilution (\\le 10⁻⁶ M), water ionisation ([H⁺] = 10⁻⁷ M) must be added, yielding pH = 6.98.',
      whyItMattersForNEET: 'Classic negative-marking trap tested repeatedly in AIPMT/NEET.',
    },
    {
      commonConfusion: 'Assuming salt of WA + WB depends on salt concentration.',
      correctFact: 'For a salt of Weak Acid + Weak Base (e.g., CH_3COONH_4), pH = 7 + ½ pK_a - ½ pK_b. Concentration C cancels out completely during derivation!',
      whyItMattersForNEET: 'Frequent formula-based trap question in NEET.',
    },
    {
      commonConfusion: 'Mistaking conjugate acid of HCO_3⁻ as CO_3²⁻.',
      correctFact: 'To get conjugate ACID, ADD one H⁺ \→ H_2CO_3. To get conjugate BASE, REMOVE one H⁺ \→ CO_3²⁻.',
      whyItMattersForNEET: 'Direct question topic tested in NEET 2021 and 2023.',
    }
  ],

  quickRevision: [
    '✓ Arrhenius: Acid yields H⁺ in water, Base yields OH⁻ in water.',
    '✓ Brønsted-Lowry: Acid = H⁺ donor, Base = H⁺ acceptor.',
    '✓ Lewis: Acid = e⁻ pair acceptor (BF_3, AlCl_3), Base = e⁻ pair donor (:NH_3, H_2O).',
    '✓ Conjugate Pair: Differ by exactly ONE proton (H⁺). Acid \→ Conjugate Base + H⁺.',
    '✓ K_w = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C; pH + pOH = 14.',
    '✓ Dilute Trap: 10⁻⁸ M HCl \\implies Total [H⁺] = 10⁻⁸ + 10⁻⁷ = 1.1 \× 10⁻⁷ M \\implies pH = 6.98.',
    '✓ Ostwald Law: \\alpha = \\sqrt{K_a / C}, [H⁺] = \\sqrt{K_a C}, pH = ½(pK_a - \\log C).',
    '✓ WA + SB Salt: pH = 7 + ½ pK_a + ½ \\log C (Basic solution).',
    '✓ SA + WB Salt: pH = 7 - ½ pK_b - ½ \\log C (Acidic solution).',
    '✓ WA + WB Salt: pH = 7 + ½ pK_a - ½ pK_b (Independent of C!).',
  ],

  practiceQuestions: [
  {
    "id": "practice-acids-1",
    "question": "What is the pH of a 1.0 × 10^{-8} M solution of HCl in water at 25°C?",
    "options": [
      "8.00",
      "6.98",
      "7.00",
      "6.00"
    ],
    "correctAnswer": 1,
    "explanation": "Step 1: Since [HCl] = 10⁻⁸ M is less than 10⁻⁶ M, water auto-ionisation contribution ([H⁺] = 10⁻⁷ M) cannot be neglected.\nStep 2: Total [H⁺] = [H⁺]_{HCl} + [H⁺]_{water} = 10⁻⁸ M + 10⁻⁷ M = 1.1 × 10⁻⁷ M.\nStep 3: pH = -\\log_{10}(1.1 × 10⁻⁷) = 7 - \\log_{10}(1.1) = 6.98. Correct Option: 1."
  },
  {
    "id": "practice-acids-2",
    "question": "Which of the following acts as both a Brønsted acid and a Brønsted base (amphoteric species)?",
    "options": [
      "NH_4⁺",
      "HCO_3⁻",
      "SO_4^{2-}",
      "BF_3"
    ],
    "correctAnswer": 1,
    "explanation": "HCO_3⁻ can donate a proton to form CO_3²⁻ (acting as Brønsted acid) or accept a proton to form H_2CO_3 (acting as Brønsted base). Thus HCO_3⁻ is amphoteric. Correct Option: 1."
  },
  {
    "id": "practice-acids-3",
    "question": "The pK_a of CH_3COOH is 4.74. What is the pH of a 0.1 M CH_3COONa solution at 25°C?",
    "options": [
      "8.87",
      "5.13",
      "4.74",
      "7.00"
    ],
    "correctAnswer": 0,
    "explanation": "Step 1: CH_3COONa is a salt of Weak Acid + Strong Base. Use formula: pH = 7 + ½ pK_a + ½ \\log_{10} C.\nStep 2: \\log_{10}(0.1) = -1.0.\nStep 3: pH = 7 + ½(4.74) + ½(-1.0) = 7 + 2.37 - 0.50 = 8.87. Correct Option: 0."
  },
  {
    "id": "practice-acids-4",
    "question": "Which of the following species is a Lewis acid but NOT a Brønsted acid?",
    "options": [
      "HCl",
      "NH_4⁺",
      "BF_3",
      "H_2O"
    ],
    "correctAnswer": 2,
    "explanation": "BF_3 has an incomplete octet on Boron and readily accepts an electron pair (Lewis acid). However, it contains no hydrogen atoms to donate as protons, so it is NOT a Brønsted acid. Correct Option: 2."
  },
  {
    "id": "practice-acids-5",
    "question": "What is the degree of dissociation (\\alpha) of 0.01 M acetic acid solution at 25°C? (K_a = 1.8 × 10^{-5})",
    "options": [
      "0.042",
      "0.018",
      "0.0018",
      "0.42"
    ],
    "correctAnswer": 0,
    "explanation": "Step 1: By Ostwald's dilution law, \\alpha = \\sqrt{ / } = \\sqrt{\\frac{1.8 × 10^{-5}}{0.01}} = \\sqrt{1.8 × 10^{-3}} = \\sqrt{18 × 10^{-4}}.\nStep 2: \\alpha = 4.24 × 10⁻² = 0.042 (4.2\\%). Correct Option: 0."
  },
  {
    "id": "practice-acids-6",
    "question": "Calculate the pH of the resulting solution when 100 mL of 0.1 M HCl is mixed with 100 mL of 0.1 M NaOH.",
    "options": [
      "1.0",
      "7.0",
      "13.0",
      "0.0"
    ],
    "correctAnswer": 1,
    "explanation": "Millimoles of HCl = 100 × 0.1 = 10 mmol. Millimoles of NaOH = 100 × 0.1 = 10 mmol. Equal amounts of strong acid and strong base undergo complete neutralisation to form NaCl and H_2O. The solution is neutral with pH = 7.0. Correct Option: 1."
  },
  {
    "id": "prac-chemacidsbasesph-7",
    "question": "Regarding Acids, Bases, pH & Ionic Equilibrium, which of the following statements correctly resolves a common misconception about \"Confusing Lewis acids with Brønsted acids.\"?",
    "options": [
      "BF_3, AlCl_3, and Fe³⁺ are Lewis acids (electron-pair acceptors) but NOT Brønsted acids because they do not contain any hydrogen to donate as a proton (H⁺)!",
      "Incorrect assumption: Confusing Lewis acids with Brønsted acids.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "BF_3, AlCl_3, and Fe³⁺ are Lewis acids (electron-pair acceptors) but NOT Brønsted acids because they do not contain any hydrogen to donate as a proton (H⁺)!. NEET frequently tests classification of BF_3, AlCl_3, and NH_3 in conceptual MCQs.",
    "difficulty": "Medium",
    "conceptTested": "Acids, Bases, pH & Ionic Equilibrium - Conceptual Clarity"
  },
  {
    "id": "prac-chemacidsbasesph-8",
    "question": "Regarding Acids, Bases, pH & Ionic Equilibrium, which of the following statements correctly resolves a common misconception about \"Calculating pH of 10⁻⁸ M HCl as pH = 8.\"?",
    "options": [
      "An acidic solution can NEVER have a pH greater than 7 at 25°C! At extreme dilution (\\le 10⁻⁶ M), water ionisation ([H⁺] = 10⁻⁷ M) must be added, yielding pH = 6.98.",
      "Incorrect assumption: Calculating pH of 10⁻⁸ M HCl as pH = 8.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "An acidic solution can NEVER have a pH greater than 7 at 25°C! At extreme dilution (\\le 10⁻⁶ M), water ionisation ([H⁺] = 10⁻⁷ M) must be added, yielding pH = 6.98.. Classic negative-marking trap tested repeatedly in AIPMT/NEET.",
    "difficulty": "Medium",
    "conceptTested": "Acids, Bases, pH & Ionic Equilibrium - Conceptual Clarity"
  },
  {
    "id": "prac-chemacidsbasesph-9",
    "question": "Regarding Acids, Bases, pH & Ionic Equilibrium, which of the following statements correctly resolves a common misconception about \"Assuming salt of WA + WB depends on salt concentration.\"?",
    "options": [
      "For a salt of Weak Acid + Weak Base (e.g., CH_3COONH_4), pH = 7 + ½ pK_a - ½ pK_b. Concentration C cancels out completely during derivation!",
      "Incorrect assumption: Assuming salt of WA + WB depends on salt concentration.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "For a salt of Weak Acid + Weak Base (e.g., CH_3COONH_4), pH = 7 + ½ pK_a - ½ pK_b. Concentration C cancels out completely during derivation!. Frequent formula-based trap question in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Acids, Bases, pH & Ionic Equilibrium - Conceptual Clarity"
  },
  {
    "id": "prac-chemacidsbasesph-10",
    "question": "Regarding Acids, Bases, pH & Ionic Equilibrium, which of the following statements correctly resolves a common misconception about \"Mistaking conjugate acid of HCO_3⁻ as CO_3²⁻.\"?",
    "options": [
      "To get conjugate ACID, ADD one H⁺ → H_2CO_3. To get conjugate BASE, REMOVE one H⁺ → CO_3²⁻.",
      "Incorrect assumption: Mistaking conjugate acid of HCO_3⁻ as CO_3²⁻.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "To get conjugate ACID, ADD one H⁺ → H_2CO_3. To get conjugate BASE, REMOVE one H⁺ → CO_3²⁻.. Direct question topic tested in NEET 2021 and 2023.",
    "difficulty": "Medium",
    "conceptTested": "Acids, Bases, pH & Ionic Equilibrium - Conceptual Clarity"
  }
],
  pyqs: [
    {
      id: 'pyq-acids-2023',
      year: 2023,
      exam: 'NEET UG 2023',
      question: 'Identify the correct conjugate base for HSO_4⁻ and NH_3 respectively:',
      options: [
        'SO_4^{2-} and NH_2⁻',
        'H_2SO_4 and NH_4⁺',
        'SO_4^{2-} and NH_4⁺',
        'H_2SO_4 and NH_2⁻',
      ],
      correctAnswer: 0,
      explanation: 'Step 1: To find conjugate base of a species, remove ONE proton (H⁺).\nStep 2: HSO_4⁻ - H⁺ \→ SO_4^{2-}.\nStep 3: NH_3 - H⁺ \→ NH_2⁻.\nStep 4: Therefore, the conjugate bases are SO_4^{2-} and NH_2⁻. Correct Option: 0.',
      topicId: 'chem-acids-bases-ph',
      difficulty: 'Easy',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.10',
    },
    {
      id: 'pyq-acids-2021',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'The pK_b of dimethylamine and pK_a of acetic acid are 3.27 and 4.77 respectively at 298 K. The pH of dimethylammonium acetate solution is:',
      options: ['7.75', '6.25', '8.50', '5.50'],
      correctAnswer: 0,
      explanation: 'Step 1: Dimethylammonium acetate is a salt of Weak Acid (acetic acid) + Weak Base (dimethylamine).\nStep 2: Formula for pH of salt of WA + WB is: pH = 7 + ½ pK_a - ½ pK_b.\nStep 3: Substitute values: pH = 7 + ½(4.77) - ½(3.27) = 7 + 2.385 - 1.635 = 7.75. Correct Option: 0.',
      topicId: 'chem-acids-bases-ph',
      difficulty: 'Medium',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.11',
    },
    {
      id: 'pyq-acids-2019',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'Which of the following fluoro-compounds is most likely to behave as a Lewis base?',
      options: ['BF_3', 'PF_3', 'CF_4', 'SiF_4'],
      correctAnswer: 1,
      explanation: 'Step 1: A Lewis base is an electron-pair donor.\nStep 2: In PF_3, phosphorus has 5 valence electrons, forms 3 single covalent bonds with F, and retains 1 lone pair of electrons.\nStep 3: Due to the presence of an unshared lone pair on P, PF_3 acts as a Lewis base. In BF_3, boron is electron deficient (Lewis acid). Correct Option: 1.',
      topicId: 'chem-acids-bases-ph',
      difficulty: 'Easy',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.10',
    },
    {
      id: 'pyq-acids-2018',
      year: 2018,
      exam: 'NEET UG 2018',
      question: 'Which of the following salts will give maximum pH in water?',
      options: ['NaClO_4', 'Na_2CO_3', 'FeCl_3', 'CuSO_4'],
      correctAnswer: 1,
      explanation: 'Step 1: NaClO_4 is a salt of SA + SB (neutral solution, pH = 7).\nStep 2: Na_2CO_3 is a salt of Weak Acid (H_2CO_3) + Strong Base (NaOH). It undergoes anionic hydrolysis generating excess OH⁻ ions, making the solution strongly basic (pH > 7).\nStep 3: FeCl_3 and CuSO_4 are salts of SA + WB (acidic solutions, pH < 7).\nStep 4: Therefore, Na_2CO_3 yields the maximum pH. Correct Option: 1.',
      topicId: 'chem-acids-bases-ph',
      difficulty: 'Easy',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.11',
    },
    {
      id: 'pyq-acids-2010',
      year: 2010,
      exam: 'AIPMT 2010',
      question: 'What is the pH of a 0.01 M NaOH solution at 25°C?',
      options: ['12.0', '2.0', '7.0', '10.0'],
      correctAnswer: 0,
      explanation: 'Step 1: NaOH is a strong monobasic base, so [OH⁻] = 0.01 M = 10⁻² M.\nStep 2: pOH = -\\log_{10}(10⁻²) = 2.0.\nStep 3: pH = 14 - pOH = 14 - 2 = 12.0. Correct Option: 0.',
      topicId: 'chem-acids-bases-ph',
      difficulty: 'Easy',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.11',
    },
    {
      id: 'pyq-acids-2008',
      year: 2008,
      exam: 'AIPMT 2008',
      question: 'The ionisation constant of ammonium hydroxide (NH_4OH) is 1.77 \× 10^{-5} at 298 K. The hydrolysis constant (K_h) of NH_4Cl is:',
      options: [
        '5.65 \× 10^{-10}',
        '6.50 \× 10^{-12}',
        '5.65 \× 10^{-12}',
        '1.77 \× 10^{-9}',
      ],
      correctAnswer: 0,
      explanation: 'Step 1: NH_4Cl is a salt of Strong Acid (HCl) + Weak Base (NH_4OH).\nStep 2: Hydrolysis constant formula: K_h = \ / .\nStep 3: Substitute K_w = 1.0 \× 10⁻¹⁴ and K_b = 1.77 \× 10⁻⁵:\nK_h = \\frac{1.0 \× 10^{-14}}{1.77 \× 10^{-5}} = 5.65 \× 10^{-10}. Correct Option: 0.',
      topicId: 'chem-acids-bases-ph',
      difficulty: 'Easy',
      ncertReference: 'Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.11',
    }
  ],

  neetMarksPotential: {
  "topicName": "Acids, Bases, pH & Ionic Equilibrium",
  "confidenceLabel": "HIGH",
  "confidenceText": "High Confidence: Verified against 6 official NEET/AIPMT paper appearances (6 direct questions).",
  "totalAnalyzedPapers": 20,
  "papersWithDirectPyqs": 6,
  "totalDirectPyqs": 6,
  "totalHistoricalMarks": 24,
  "averageDirectPyqsPerPaper": 0.3,
  "maxDirectPyqsInSinglePaper": 1,
  "minDirectPyqsInSinglePaper": 1,
  "minDirectMarks": 4,
  "maxDirectMarks": 4,
  "avgDirectMarksPerPaper": 1.2,
  "typicalContributionMarks": 4,
  "historicalMarksRangeText": "4 marks per paper (tested in 6 of 20 analyzed papers)",
  "whatThisMeansForYou": "Extremely high yield! Master conjugate pairs, pH calculation traps (like 10⁻⁸ M HCl), Ostwald dilution law, and salt hydrolysis formulas to secure 4-8 marks easily.",
  "yearWiseBreakdown": [
    {
      "id": "pyq-acids-2023",
      "year": 2023,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Verified Concept",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-acids-2021",
      "year": 2021,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Verified Concept",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-acids-2019",
      "year": 2019,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Verified Concept",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-acids-2018",
      "year": 2018,
      "exam": "NEET UG",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Verified Concept",
      "classification": "Direct",
      "verificationStatus": "Verified (NEET UG)"
    },
    {
      "id": "pyq-acids-2010",
      "year": 2010,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Verified Concept",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    },
    {
      "id": "pyq-acids-2008",
      "year": 2008,
      "exam": "AIPMT",
      "directPyqCount": 1,
      "marks": 4,
      "questionType": "Verified Concept",
      "classification": "Direct",
      "verificationStatus": "Verified (AIPMT)"
    }
  ],
  "overlapPyqs": [],
  "sourceInfo": {
    "dataSource": "Official NEET UG / AIPMT Archives & NCERT Class 11 Chemistry",
    "analysisPeriod": "2004 – 2024",
    "directPyqsAnalyzedCount": 6,
    "classificationMethod": "Strict topic-level classification; chapter-level weightage was excluded.",
    "disclaimer": "Past frequency analysis is indicative for revision guidance."
  }
}
};
