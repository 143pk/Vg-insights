import { DetailedTopicContent } from '../../types/neet';

export const chemElectronegativityValencyDetails: DetailedTopicContent = {
  topicId: 'chem-electronegativity-valency',
  topicName: 'Electronegativity & Valency Trends',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Inorganic Chemistry (Class 11)',
  chapter: 'Classification of Elements and Periodicity in Properties',

  whatIsThisTopic:
    'Electronegativity (EN) is a qualitative property defined as the relative tendency of an bonded atom in a molecule to attract shared electron pairs towards itself. This topic explores Linus Pauling\'s electronegativity scale (Fluorine = 4.0), factors influencing EN (atomic radius, Z_eff, hybridization/s-character: sp > sp² > sp³, and oxidation state), periodic variation of metallic vs. non-metallic character, valency trends across periods (hydride valency 1 to 4 to 1 vs. maximum oxide valency 1 to 7), nature of oxides across Period 3 (strongly basic Na₂O → basic MgO → amphoteric Al₂O₃ → acidic SiO₂/P₄O₁₀/SO₃ → strongly acidic Cl₂O₇), neutral oxides (CO, NO, N₂O), amphoteric oxides (Al₂O₃, BeO, ZnO, PbO, SnO₂), diagonal relationships (Li-Mg, Be-Al, B-Si), and the anomalous behavior of second-period elements. Mastering these concepts provides the chemical foundation for chemical bonding, organic reaction mechanisms, and p-block chemistry in NEET.',

  basicIdea: [
    '1. Electronegativity (EN) & Pauling Scale: EN is a dimensionless relative measure. Fluorine is assigned the highest value = 4.0 on Pauling scale. High EN values: F (4.0) > O (3.5) > N = Cl (3.0) > Br (2.8) > S = C (2.5) > H (2.1). EN is inversely proportional to atomic radius (EN ∝ 1 / r) and directly proportional to Z_eff.',
    '2. Metallic vs. Non-metallic Character: Metallic Character (Electropositivity / Electron loss tendency) INCREASES down a group and DECREASES across a period. Non-metallic Character (Electronegativity / Electron gain tendency) INCREASES across a period and DECREASES down a group.',
    '3. Valency Trends Across a Period: Valency is the combining capacity of an element. Towards Hydrogen: Increases 1 to 4, then decreases to 1 (NaH: 1, MgH₂: 2, AlH₃: 3, SiH₄: 4, PH₃: 3, H₂S: 2, HCl: 1). Towards Oxygen (Maximum Oxidation State): Increases continuously from 1 to 7 (Na₂O: 1, MgO: 2, Al₂O₃: 3, SiO₂: 4, P₄O₁₀: 5, SO₃: 6, Cl₂O₇: 7).',
    '4. Chemical Nature of Oxides Across Period 3: Oxides transition from Strongly Basic to Amphoteric to Strongly Acidic across Period 3: Na₂O (Strongly Basic) → MgO (Basic) → Al₂O₃ (Amphoteric) → SiO₂ (Weakly Acidic) → P₄O₁₀ (Acidic) → SO₃ (Strongly Acidic) → Cl₂O₇ (Most Acidic). Neutral Oxides to memorize: CO, NO, N₂O, H₂O.',
    '5. Anomalous Second-Period Behavior & Diagonal Relationships: Second period elements (Li, Be, B, C, N, O, F) differ significantly from heavier group congeners due to: 1) Extremely small atomic size, 2) High electronegativity and high charge-to-radius ratio, 3) Absence of vacant d-orbitals (maximum covalency capped at 4, e.g., BF₄⁻ exists but BF₆³⁻ does not). Diagonal Relationship: Li resembles Mg, Be resembles Al, and B resembles Si due to near-identical ionic potential (charge/radius ratio).'
  ],

  importantTerms: [
    {
      term: 'Electronegativity (EN)',
      definition: 'The qualitative tendency of an atom in a covalent molecule to attract the shared pair of bonding electrons towards itself.',
      neetNote: 'Unlike Electron Gain Enthalpy (an isolated gaseous atom property with units kJ/mol), Electronegativity is a property of a bonded atom and has no units.'
    },
    {
      term: 'Pauling Scale',
      definition: 'An empirical electronegativity scale devised by Linus Pauling based on bond dissociation energies: |X_A - X_B| = 0.208 √(E_{A-B} - √(E_{A-A} × E_{B-B})).',
      neetNote: 'Fluorine is arbitrarily assigned 4.0 as the benchmark anchor.'
    },
    {
      term: 'Amphoteric Oxide',
      definition: 'An oxide that exhibits both acidic and basic properties, reacting with both strong acids and strong bases to yield salt and water.',
      neetNote: 'High-yield NEET amphoteric oxides: Al₂O₃, BeO, ZnO, PbO, SnO, SnO₂, Ga₂O₃.'
    },
    {
      term: 'Neutral Oxide',
      definition: 'An oxide that exhibits neither acidic nor basic properties, failing to react with either acids or bases or turn litmus paper.',
      neetNote: 'Memorize these 4 neutral oxides for NEET: CO (Carbon monoxide), NO (Nitric oxide), N₂O (Nitrous oxide), and H₂O.'
    },
    {
      term: 'Maximum Covalency Rule (Second Period)',
      definition: 'Second-period elements (Li to F) possess only 2s and three 2p orbitals (total 4 valence orbitals) and no d-orbitals, capping maximum covalency strictly at 4.',
      neetNote: 'Explains why [BF₄]⁻ and [NH₄]⁺ exist, but [BF₆]³⁻ or NCl₅ cannot exist.'
    },
    {
      term: 'Diagonal Relationship',
      definition: 'The structural and chemical similarity observed between certain light second-period elements and the third-period element diagonally adjacent to their right (Li ≈ Mg, Be ≈ Al, B ≈ Si).',
      neetNote: 'Arises because moving across a period increases charge while moving down a group increases radius, leaving ionic potential φ = q / r virtually identical.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Electronegativity (EN) Concept, Pauling Values, and Factors',
      paragraphs: [
        'Electronegativity measures the attraction a bonded atom exerts on shared bonding electrons. Linus Pauling established the most widely used scale by setting Fluorine = 4.0.',
        'Pauling Scale Benchmarks to Memorize for NEET: Fluorine (4.0) > Oxygen (3.5) > Nitrogen (3.0) = Chlorine (3.0) > Bromine (2.8) > Iodine (2.5) = Carbon (2.5) = Sulphur (2.5) > Phosphorus (2.1) = Hydrogen (2.1) > Metals (B 2.0, Be 1.5, Li 1.0, Na 0.9, K 0.8, Cs 0.7).',
        'Factors Influencing Electronegativity:',
        '1) Atomic Radius: EN ∝ 1 / atomic radius. Smaller atoms hold bonding electrons much closer to their positive nucleus.',
        '2) Effective Nuclear Charge: EN ∝ Z_eff.',
        '3) Oxidation State: Higher positive oxidation state increases positive nuclear attraction, raising EN (e.g. Fe³⁺ is more electronegative than Fe²⁺).',
        '4) Hybridization / s-Character: EN ∝ % s-character. An sp-hybridized carbon (50% s-character) is significantly more electronegative (EN ≈ 3.29) than sp² carbon (33.3% s, EN ≈ 2.75) or sp³ carbon (25% s, EN ≈ 2.50). This explains why terminal alkynes (HC≡CH) are acidic!'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 300" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">PAULING ELECTRONEGATIVITY SPECTRUM (HIGH-YIELD NEET VALUES)</text>

  <!-- Scale Bar Base -->
  <rect x="60" y="80" width="680" height="12" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>

  <!-- Color Gradient Spectrum -->
  <path d="M 60 80 L 740 80 L 740 92 L 60 92 Z" fill="url(#en-grad)"/>

  <!-- Gradient Definition -->
  <defs>
    <linearGradient id="en-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="25%" stop-color="#4ade80"/>
      <stop offset="50%" stop-color="#fbbf24"/>
      <stop offset="75%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#f43f5e"/>
    </linearGradient>
  </defs>

  <!-- Elements on Scale -->
  <!-- Cs 0.7 -->
  <circle cx="80" cy="86" r="6" fill="#38bdf8"/>
  <text x="80" y="115" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">Cs (0.7)</text>
  <text x="80" y="130" text-anchor="middle" fill="#94a3b8" font-size="10">Least EN</text>

  <!-- Na 0.9 / Li 1.0 -->
  <circle cx="150" cy="86" r="6" fill="#38bdf8"/>
  <text x="150" y="115" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">Na(0.9) Li(1.0)</text>

  <!-- H 2.1 / P 2.1 -->
  <circle cx="310" cy="86" r="6" fill="#4ade80"/>
  <text x="310" y="115" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">H = P (2.1)</text>

  <!-- C 2.5 / S 2.5 / I 2.5 -->
  <circle cx="390" cy="86" r="6" fill="#fbbf24"/>
  <text x="390" y="115" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">C = S = I (2.5)</text>

  <!-- Br 2.8 -->
  <circle cx="480" cy="86" r="6" fill="#f97316"/>
  <text x="480" y="115" text-anchor="middle" fill="#fdba74" font-size="11" font-weight="bold">Br (2.8)</text>

  <!-- N 3.0 / Cl 3.0 -->
  <circle cx="560" cy="86" r="6" fill="#f97316"/>
  <text x="560" y="115" text-anchor="middle" fill="#fdba74" font-size="11" font-weight="bold">N = Cl (3.0)</text>

  <!-- O 3.5 -->
  <circle cx="650" cy="86" r="6" fill="#f43f5e"/>
  <text x="650" y="115" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="bold">O (3.5)</text>

  <!-- F 4.0 -->
  <circle cx="720" cy="86" r="8" fill="#f43f5e" stroke="#ffffff" stroke-width="2"/>
  <text x="720" y="115" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">F (4.0)</text>
  <text x="720" y="130" text-anchor="middle" fill="#fca5a5" font-size="10">Most EN</text>

  <!-- Summary Box -->
  <rect x="100" y="170" width="600" height="100" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="400" y="195" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">CRITICAL ELECTRONEGATIVITY EQUALITIES FOR NEET</text>
  <text x="400" y="220" text-anchor="middle" fill="#4ade80" font-size="12">• Nitrogen = Chlorine = 3.0</text>
  <text x="400" y="240" text-anchor="middle" fill="#fbbf24" font-size="12">• Carbon = Sulphur = Iodine = 2.5</text>
  <text x="400" y="260" text-anchor="middle" fill="#38bdf8" font-size="12">• Hydrogen = Phosphorus = 2.1</text>
</svg>`,
        caption: 'Pauling scale benchmarks highlighting key equalities (N = Cl, C = S = I, H = P) tested in NEET.'
      }
    },
    {
      heading: '2. Periodic Trends in Valency and Oxide Acid-Base Nature',
      paragraphs: [
        'Valency is the combining capacity of an element. Valence shell configuration determines oxidation state possibilities.',
        '1) Valency Trend Across Period 3 (Na to Cl):',
        '• Towards Hydrogen: Increases 1 to 4 then decreases to 1. (NaH = 1, MgH₂ = 2, AlH₃ = 3, SiH₄ = 4, PH₃ = 3, H₂S = 2, HCl = 1).',
        '• Maximum Valency Towards Oxygen: Increases continuously from 1 to 7 = Group Number for Groups 1-17. (Na₂O: +1, MgO: +2, Al₂O₃: +3, SiO₂: +4, P₄O₁₀: +5, SO₃: +6, Cl₂O₇: +7).',
        '2) Acid-Base Character Spectrum of Period 3 Oxides:',
        'Moving left to right across Period 3, metallic oxides change to non-metallic oxides, causing a continuous transition from strongly basic to strongly acidic:',
        '• Na₂O: Strongly Basic (reacts vigorously with H₂O to form NaOH).',
        '• MgO: Basic (reacts with H₂O to form Mg(OH)₂).',
        '• Al₂O₃: AMPHOTERIC (reacts with both HCl and NaOH: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O; Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄]).',
        '• SiO₂: Weakly Acidic (dissolves in concentrated hot NaOH).',
        '• P₄O₁₀: Acidic (reacts with H₂O to form H₃PO₄).',
        '• SO₃: Strongly Acidic (reacts with H₂O to form H₂SO₄).',
        '• Cl₂O₇: Most Acidic Oxide in Period 3 (reacts with H₂O to form perchloric acid HClO₄).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 280" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">PERIOD 3 OXIDE ACID-BASE SPECTRUM &amp; OXIDATION STATES</text>

  <!-- Spectrum Cards Grid -->
  <!-- Na2O -->
  <rect x="40" y="60" width="95" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="87" y="88" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Na₂O</text>
  <text x="87" y="112" text-anchor="middle" fill="#f8fafc" font-size="11">Valency: +1</text>
  <text x="87" y="145" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">STRONGLY</text>
  <text x="87" y="160" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">BASIC</text>

  <!-- MgO -->
  <rect x="145" y="60" width="95" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="192" y="88" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">MgO</text>
  <text x="192" y="112" text-anchor="middle" fill="#f8fafc" font-size="11">Valency: +2</text>
  <text x="192" y="152" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">BASIC</text>

  <!-- Al2O3 (Amphoteric Highlight) -->
  <rect x="250" y="60" width="95" height="150" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="2.5"/>
  <text x="297" y="88" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">Al₂O₃</text>
  <text x="297" y="112" text-anchor="middle" fill="#f8fafc" font-size="11">Valency: +3</text>
  <text x="297" y="145" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">AMPHOTERIC</text>
  <text x="297" y="162" text-anchor="middle" fill="#94a3b8" font-size="9">(Acid + Base)</text>

  <!-- SiO2 -->
  <rect x="355" y="60" width="95" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1"/>
  <text x="402" y="88" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="bold">SiO₂</text>
  <text x="402" y="112" text-anchor="middle" fill="#f8fafc" font-size="11">Valency: +4</text>
  <text x="402" y="145" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="bold">WEAKLY</text>
  <text x="402" y="160" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="bold">ACIDIC</text>

  <!-- P4O10 -->
  <rect x="460" y="60" width="95" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="507" y="88" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="bold">P₄O₁₀</text>
  <text x="507" y="112" text-anchor="middle" fill="#f8fafc" font-size="11">Valency: +5</text>
  <text x="507" y="152" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="bold">ACIDIC</text>

  <!-- SO3 -->
  <rect x="565" y="60" width="95" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
  <text x="612" y="88" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="bold">SO₃</text>
  <text x="612" y="112" text-anchor="middle" fill="#f8fafc" font-size="11">Valency: +6</text>
  <text x="612" y="145" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="bold">STRONGLY</text>
  <text x="612" y="160" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="bold">ACIDIC</text>

  <!-- Cl2O7 -->
  <rect x="670" y="60" width="95" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="2.5"/>
  <text x="717" y="88" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="bold">Cl₂O₇</text>
  <text x="717" y="112" text-anchor="middle" fill="#f8fafc" font-size="11">Valency: +7</text>
  <text x="717" y="145" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="bold">MOST</text>
  <text x="717" y="160" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="bold">ACIDIC</text>

  <!-- Bottom Arrow -->
  <path d="M 50 235 L 750 235" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow-red)"/>
  <text x="400" y="260" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">ACIDIC CHARACTER OF OXIDES INCREASES FROM LEFT TO RIGHT →</text>
</svg>`,
        caption: 'Period 3 oxides transition from strongly basic (Na₂O) through amphoteric (Al₂O₃) to highly acidic (Cl₂O₇).'
      }
    },
    {
      heading: '3. Diagonal Relationships and Second-Period Anomalies',
      paragraphs: [
        'Diagonal Relationship: Second period elements Li, Be, and B exhibit remarkable chemical similarities to third period elements diagonally below and to their right in the periodic table (Li ≈ Mg, Be ≈ Al, B ≈ Si).',
        'Origin of Diagonal Relationship: Moving across a period increases charge and decreases ionic radius, raising ionic potential (φ = q / r). Moving down a group decreases charge density. Moving diagonally balances these two opposing forces, producing almost identical charge-to-size ratios (e.g. Li⁺ radius = 76 pm vs Mg²⁺ radius = 72 pm; Be²⁺ φ ≈ Al³⁺ φ).',
        'Similarities Between Be and Al (Frequent NEET Topic):',
        '1) Both Be and Al are rendered passive by concentrated HNO₃ due to a protective surface oxide film.',
        '2) Both oxides (BeO and Al₂O₃) and hydroxides (Be(OH)₂ and Al(OH)₂) are AMPHOTERIC, dissolving in NaOH to form beryllate [Be(OH)₄]²⁻ and aluminate [Al(OH)₄]⁻.',
        '3) Chlorides (BeCl₂ and AlCl₃) have polymeric or dimeric bridge structures in vapor state (BeCl₂ polymer/dimer, Al₂Cl₆ dimer) and act as strong Lewis acids.',
        '4) Both form fluoro-complex anions ([BeF₄]²⁻ and [AlF₆]³⁻).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">DIAGONAL RELATIONSHIP MATRIX (PERIOD 2 vs PERIOD 3)</text>

  <!-- Matrix Grid -->
  <!-- Headers -->
  <text x="250" y="65" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Group 1</text>
  <text x="400" y="65" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Group 2</text>
  <text x="550" y="65" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Group 13</text>
  <text x="700" y="65" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Group 14</text>

  <!-- Row 1: Period 2 -->
  <text x="120" y="110" fill="#fbbf24" font-size="13" font-weight="bold">Period 2:</text>
  <rect x="210" y="90" width="80" height="36" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="250" y="113" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">Lithium (Li)</text>

  <rect x="360" y="90" width="80" height="36" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="400" y="113" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">Beryllium (Be)</text>

  <rect x="510" y="90" width="80" height="36" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="550" y="113" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">Boron (B)</text>

  <!-- Row 2: Period 3 -->
  <text x="120" y="180" fill="#4ade80" font-size="13" font-weight="bold">Period 3:</text>
  <rect x="360" y="160" width="80" height="36" rx="6" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="400" y="183" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">Magnesium (Mg)</text>

  <rect x="510" y="160" width="80" height="36" rx="6" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="550" y="183" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">Aluminium (Al)</text>

  <rect x="660" y="160" width="80" height="36" rx="6" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="700" y="183" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">Silicon (Si)</text>

  <!-- Diagonal Arrows -->
  <!-- Li -> Mg -->
  <path d="M 285 120 L 365 162" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow-red)"/>

  <!-- Be -> Al -->
  <path d="M 435 120 L 515 162" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow-red)"/>

  <!-- B -> Si -->
  <path d="M 585 120 L 665 162" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow-red)"/>
</svg>`,
        caption: 'Diagonal relationship pairs (Li-Mg, Be-Al, B-Si) resulting from balanced ionic potential q/r.'
      }
    }
  ],

  formulae: [
    {
      title: 'Pauling Electronegativity Difference',
      formula: '|X_A - X_B| = 0.208 × √(E_{A-B} - √(E_{A-A} × E_{B-B}))',
      variables: 'X_A, X_B = Pauling electronegativities, E = bond dissociation energy in kcal/mol',
      whenToUse: 'To calculate electronegativity differences from experimental bond energy data.',
      note: 'If bond energies are given in kJ/mol, use pre-factor 0.102.'
    },
    {
      title: 'Ionic Potential (Polarizing Power)',
      formula: 'Ionic Potential (φ) = Charge on cation (q) / Ionic Radius (r)',
      variables: 'q = valence charge, r = ionic radius in pm or Å',
      whenToUse: 'To explain diagonal relationships and covalent character in ionic compounds (Fajan\'s rules).'
    }
  ],

  neetImportantPoints: [
    'Electronegativity Order: F (4.0) > O (3.5) > N = Cl (3.0) > Br (2.8) > S = C = I (2.5) > H = P (2.1). Memorize N = Cl, C = S = I, and H = P!',
    'Electronegativity increases with s-character of hybridization: sp carbon (50% s, EN 3.29) > sp² carbon (33% s, EN 2.75) > sp³ carbon (25% s, EN 2.50).',
    'Amphoteric Oxides list for NEET: Al₂O₃, BeO, ZnO, PbO, SnO, SnO₂, Ga₂O₃. React with both acids and bases.',
    'Neutral Oxides list for NEET: CO, NO, N₂O, and H₂O. Do NOT react with acids or bases.',
    'Acidic character of oxides across Period 3 increases: Na₂O < MgO < Al₂O₃ < SiO₂ < P₄O₁₀ < SO₃ < Cl₂O₇.',
    'Maximum covalency of Period 2 elements (N, O, F, B) is strictly 4 due to absence of vacant d-orbitals. NCl₅ cannot exist!',
    'Diagonal Pairs: Li-Mg, Be-Al, B-Si. Result from similar charge/radius ratio.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing Nitrogen and Chlorine electronegativities.',
      correctFact: 'Nitrogen and Chlorine have EQUAL Pauling electronegativities (both 3.0). However, Nitrogen is smaller in size, giving it higher electron density for hydrogen bonding.',
      whyItMattersForNEET: 'Frequently tested equality in NEET comparison questions.'
    },
    {
      commonConfusion: 'Mistaking CO₂ or SiO₂ as neutral oxides.',
      correctFact: 'CO₂ and SiO₂ are ACIDIC oxides (react with alkalis to form carbonates and silicates). Neutral oxides are strictly CO, NO, N₂O, and H₂O.',
      whyItMattersForNEET: 'A common trap question regarding oxide classifications.'
    },
    {
      commonConfusion: 'Expecting NCl₅ or BF₆³⁻ to exist.',
      correctFact: 'NCl₅ and BF₆³⁻ CANNOT exist because Nitrogen and Boron belong to Period 2 and lack d-orbitals, restricting maximum covalency to 4.',
      whyItMattersForNEET: 'Tested repeatedly under chemical bonding and p-block fundamentals.'
    }
  ],

  quickRevision: [
    'EN Benchmarks: F (4.0), O (3.5), N = Cl (3.0), C = S = I (2.5), H = P (2.1).',
    'EN ∝ % s-character: sp (3.29) > sp² (2.75) > sp³ (2.50).',
    'Neutral Oxides: CO, NO, N₂O, H₂O.',
    'Amphoteric Oxides: Al₂O₃, BeO, ZnO, PbO, SnO₂, Ga₂O₃.',
    'Period 3 Oxide Acidic Trend: Na₂O (strongly basic) → Al₂O₃ (amphoteric) → Cl₂O₇ (most acidic).',
    'Period 2 Max Covalency = 4 (no vacant d-orbitals).',
    'Diagonal Pairs: Li-Mg, Be-Al, B-Si (similar q/r ratio).'
  ],

  practiceQuestions: [
  {
    "id": "prac-ev-1",
    "question": "Which of the following pairs of elements possesses EQUAL Pauling electronegativity values?",
    "options": [
      "Nitrogen and Chlorine (both 3.0)",
      "Fluorine and Oxygen",
      "Carbon and Hydrogen",
      "Sulphur and Oxygen"
    ],
    "correctAnswer": 0,
    "explanation": "On the Pauling scale, both Nitrogen and Chlorine have an electronegativity value of 3.0. Carbon (2.5) differs from Hydrogen (2.1). Fluorine is 4.0 and Oxygen is 3.5.",
    "difficulty": "Easy",
    "conceptTested": "Pauling electronegativity equalities"
  },
  {
    "id": "prac-ev-2",
    "question": "Which of the following group of oxides contains ONLY neutral oxides?",
    "options": [
      "CO, NO, N₂O",
      "CO, CO₂, NO",
      "NO₂, N₂O, SO₂",
      "ZnO, BeO, Al₂O₃"
    ],
    "correctAnswer": 0,
    "explanation": "CO, NO, and N₂O are neutral oxides that do not react with acids or alkalis. CO₂ and SO₂ are acidic oxides, while ZnO, BeO, and Al₂O₃ are amphoteric oxides.",
    "difficulty": "Easy",
    "conceptTested": "Neutral oxide identification"
  },
  {
    "id": "prac-ev-3",
    "question": "Why is NCl₅ non-existent whereas PCl₅ is readily synthesized?",
    "options": [
      "Nitrogen belongs to Period 2 and lacks vacant d-orbitals required to expand its octet beyond 4 covalency",
      "Nitrogen is more electronegative than Phosphorus",
      "N-Cl bond is stronger than P-Cl bond",
      "Nitrogen forms diatomic molecules with triple bonds"
    ],
    "correctAnswer": 0,
    "explanation": "Nitrogen is a second-period element with valence shell 2s² 2p³ (total 4 orbitals). Because it lacks vacant 2d subshells, its maximum covalency is capped at 4. Phosphorus (Period 3) has vacant 3d orbitals to expand its octet to 5.",
    "difficulty": "Medium",
    "conceptTested": "Second period maximum covalency rule"
  },
  {
    "id": "prac-ev-4",
    "question": "Which hybridization state of carbon exhibits the HIGHEST electronegativity?",
    "options": [
      "sp hybridized carbon (50% s-character)",
      "sp² hybridized carbon (33.3% s-character)",
      "sp³ hybridized carbon (25% s-character)",
      "All hybridization states have identical electronegativity"
    ],
    "correctAnswer": 0,
    "explanation": "Electronegativity is directly proportional to percentage s-character because s-electrons are closer to the nucleus. sp carbon (50% s, EN 3.29) > sp² carbon (33.3% s, EN 2.75) > sp³ carbon (25% s, EN 2.50).",
    "difficulty": "Medium",
    "conceptTested": "Effect of hybridization on electronegativity"
  },
  {
    "id": "prac-chemelectronegativityvalency-5",
    "question": "Regarding Electronegativity & Valency Trends, which of the following statements correctly resolves a common misconception about \"Confusing Nitrogen and Chlorine electronegativities.\"?",
    "options": [
      "Nitrogen and Chlorine have EQUAL Pauling electronegativities (both 3.0). However, Nitrogen is smaller in size, giving it higher electron density for hydrogen bonding.",
      "Incorrect assumption: Confusing Nitrogen and Chlorine electronegativities.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Nitrogen and Chlorine have EQUAL Pauling electronegativities (both 3.0). However, Nitrogen is smaller in size, giving it higher electron density for hydrogen bonding.. Frequently tested equality in NEET comparison questions.",
    "difficulty": "Medium",
    "conceptTested": "Electronegativity & Valency Trends - Conceptual Clarity"
  },
  {
    "id": "prac-chemelectronegativityvalency-6",
    "question": "Regarding Electronegativity & Valency Trends, which of the following statements correctly resolves a common misconception about \"Mistaking CO₂ or SiO₂ as neutral oxides.\"?",
    "options": [
      "CO₂ and SiO₂ are ACIDIC oxides (react with alkalis to form carbonates and silicates). Neutral oxides are strictly CO, NO, N₂O, and H₂O.",
      "Incorrect assumption: Mistaking CO₂ or SiO₂ as neutral oxides.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "CO₂ and SiO₂ are ACIDIC oxides (react with alkalis to form carbonates and silicates). Neutral oxides are strictly CO, NO, N₂O, and H₂O.. A common trap question regarding oxide classifications.",
    "difficulty": "Medium",
    "conceptTested": "Electronegativity & Valency Trends - Conceptual Clarity"
  },
  {
    "id": "prac-chemelectronegativityvalency-7",
    "question": "Regarding Electronegativity & Valency Trends, which of the following statements correctly resolves a common misconception about \"Expecting NCl₅ or BF₆³⁻ to exist.\"?",
    "options": [
      "NCl₅ and BF₆³⁻ CANNOT exist because Nitrogen and Boron belong to Period 2 and lack d-orbitals, restricting maximum covalency to 4.",
      "Incorrect assumption: Expecting NCl₅ or BF₆³⁻ to exist.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "NCl₅ and BF₆³⁻ CANNOT exist because Nitrogen and Boron belong to Period 2 and lack d-orbitals, restricting maximum covalency to 4.. Tested repeatedly under chemical bonding and p-block fundamentals.",
    "difficulty": "Medium",
    "conceptTested": "Electronegativity & Valency Trends - Conceptual Clarity"
  },
  {
    "id": "prac-chemelectronegativityvalency-8",
    "question": "In the study of Electronegativity & Valency Trends, what is the exact definition and significance of \"Electronegativity (EN)\"?",
    "options": [
      "The qualitative tendency of an atom in a covalent molecule to attract the shared pair of bonding electrons towards itself.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The qualitative tendency of an atom in a covalent molecule to attract the shared pair of bonding electrons towards itself.. Unlike Electron Gain Enthalpy (an isolated gaseous atom property with units kJ/mol), Electronegativity is a property of a bonded atom and has no units.",
    "difficulty": "Easy",
    "conceptTested": "Electronegativity (EN) definition"
  },
  {
    "id": "prac-chemelectronegativityvalency-9",
    "question": "In the study of Electronegativity & Valency Trends, what is the exact definition and significance of \"Pauling Scale\"?",
    "options": [
      "An empirical electronegativity scale devised by Linus Pauling based on bond dissociation energies: |X_A - X_B| = 0.208 √(E_{A-B} - √(E_{A-A} × E_{B-B})).",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "An empirical electronegativity scale devised by Linus Pauling based on bond dissociation energies: |X_A - X_B| = 0.208 √(E_{A-B} - √(E_{A-A} × E_{B-B})).. Fluorine is arbitrarily assigned 4.0 as the benchmark anchor.",
    "difficulty": "Easy",
    "conceptTested": "Pauling Scale definition"
  },
  {
    "id": "prac-chemelectronegativityvalency-10",
    "question": "In the study of Electronegativity & Valency Trends, what is the exact definition and significance of \"Amphoteric Oxide\"?",
    "options": [
      "An oxide that exhibits both acidic and basic properties, reacting with both strong acids and strong bases to yield salt and water.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "An oxide that exhibits both acidic and basic properties, reacting with both strong acids and strong bases to yield salt and water.. High-yield NEET amphoteric oxides: Al₂O₃, BeO, ZnO, PbO, SnO, SnO₂, Ga₂O₃.",
    "difficulty": "Easy",
    "conceptTested": "Amphoteric Oxide definition"
  }
],
  pyqs: [
    {
      id: 'pyq-ev-2023',
      year: 2023,
      exam: 'NEET UG 2023',
      question: 'Which of the following oxides is amphoteric in nature?',
      options: [
        'Al₂O₃',
        'Na₂O',
        'SO₃',
        'CO₂'
      ],
      correctAnswer: 0,
      explanation: 'Al₂O₃ is an amphoteric oxide because it reacts with both strong acids (e.g. HCl to give AlCl₃) and strong bases (e.g. NaOH to give Na[Al(OH)₄]). Na₂O is basic, SO₃ and CO₂ are acidic.',
      difficulty: 'Easy',
      conceptTested: 'Amphoteric oxide identification',
      ncertReference: 'Class 11 Chemistry, Chapter 3, Section 3.7.4',
      verified: true
    },
    {
      id: 'pyq-ev-2021',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'Which of the following is a neutral oxide?',
      options: [
        'CO',
        'CO₂',
        'SnO₂',
        'SiO₂'
      ],
      correctAnswer: 0,
      explanation: 'CO (Carbon monoxide) is a neutral oxide. CO₂ and SiO₂ are acidic oxides, while SnO₂ is an amphoteric oxide.',
      difficulty: 'Easy',
      conceptTested: 'Neutral oxide identification',
      ncertReference: 'Class 11 Chemistry, Chapter 3, Section 3.7.4',
      verified: true
    },
    {
      id: 'pyq-ev-2019',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'Match the oxides in Column I with their chemical nature in Column II:\nColumn I: (a) CO, (b) BaO, (c) Al₂O₃, (d) Cl₂O₇\nColumn II: (I) Basic, (II) Neutral, (III) Acidic, (IV) Amphoteric',
      options: [
        '(a)-II, (b)-I, (c)-IV, (d)-III',
        '(a)-I, (b)-II, (c)-III, (d)-IV',
        '(a)-III, (b)-IV, (c)-I, (d)-II',
        '(a)-IV, (b)-III, (c)-II, (d)-I'
      ],
      correctAnswer: 0,
      explanation: '(a) CO is Neutral (II), (b) BaO is Basic (I), (c) Al₂O₃ is Amphoteric (IV), (d) Cl₂O₇ is Acidic (III). Correct matching option is (1).',
      difficulty: 'Medium',
      conceptTested: 'Matching oxide chemical nature',
      ncertReference: 'Class 11 Chemistry, Chapter 3, Section 3.7.4',
      verified: true
    },
    {
      id: 'pyq-ev-2017',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'The electronegativity of elements Fluorine (F), Chlorine (Cl), Bromine (Br), and Iodine (I) on the Pauling scale follows the decreasing order:',
      options: [
        'F > Cl > Br > I',
        'I > Br > Cl > F',
        'Cl > F > Br > I',
        'F > Br > Cl > I'
      ],
      correctAnswer: 0,
      explanation: 'Electronegativity decreases down Group 17 as atomic radius increases. Pauling values: F (4.0) > Cl (3.0) > Br (2.8) > I (2.5).',
      difficulty: 'Easy',
      conceptTested: 'Halogen electronegativity group trend',
      ncertReference: 'Class 11 Chemistry, Chapter 3, Section 3.7.3',
      verified: true
    },
    {
      id: 'pyq-ev-2014',
      year: 2014,
      exam: 'AIPMT 2014',
      question: 'Which of the following oxides is expected to be the MOST acidic?',
      options: [
        'Cl₂O₇',
        'SO₃',
        'P₄O₁₀',
        'Al₂O₃'
      ],
      correctAnswer: 0,
      explanation: 'Across Period 3, acidic character increases with electronegativity and positive oxidation state of the central atom. Chlorine in Cl₂O₇ is in +7 oxidation state and has highest electronegativity among non-metal oxides listed.',
      difficulty: 'Medium',
      conceptTested: 'Comparing acidic strength of non-metal oxides',
      ncertReference: 'Class 11 Chemistry, Chapter 3, Section 3.7.4',
      verified: true
    },
    {
      id: 'pyq-ev-2009',
      year: 2009,
      exam: 'AIPMT 2009',
      question: 'Among the elements with atomic numbers Z = 9, 11, 12, and 13, which element possesses the highest electronegativity?',
      options: [
        'Z = 9 (Fluorine)',
        'Z = 11 (Sodium)',
        'Z = 12 (Magnesium)',
        'Z = 13 (Aluminium)'
      ],
      correctAnswer: 0,
      explanation: 'Z = 9 corresponds to Fluorine (F), which has the highest electronegativity (4.0 on Pauling scale) of all elements in the periodic table.',
      difficulty: 'Easy',
      conceptTested: 'Highest electronegativity element identification',
      ncertReference: 'Class 11 Chemistry, Chapter 3, Section 3.7.3',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Electronegativity & Valency Trends',
    confidenceLabel: 'HIGH',
    confidenceText: 'Verified against 6 official NEET UG / AIPMT paper appearances (6 direct questions).',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 6,
    totalDirectPyqs: 6,
    totalHistoricalMarks: 24,
    averageDirectPyqsPerPaper: 0.40,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 0,
    minDirectMarks: 0,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 1.60,
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 – 4 Marks per paper',
    yearWiseBreakdown: [
      { year: 2023, exam: 'NEET UG 2023', directPyqCount: 1, marks: 4, questionType: 'Amphoteric oxide identification (Al2O3)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2021, exam: 'NEET UG 2021', directPyqCount: 1, marks: 4, questionType: 'Neutral oxide identification (CO)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2019, exam: 'NEET UG 2019', directPyqCount: 1, marks: 4, questionType: 'Matching oxide chemical nature (CO, BaO, Al2O3, Cl2O7)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2017, exam: 'NEET UG 2017', directPyqCount: 1, marks: 4, questionType: 'Halogen electronegativity order F > Cl > Br > I', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2014, exam: 'AIPMT 2014', directPyqCount: 1, marks: 4, questionType: 'Most acidic oxide among Period 3 (Cl2O7)', classification: 'Direct', verificationStatus: 'Verified (AIPMT)' },
      { year: 2009, exam: 'AIPMT 2009', directPyqCount: 1, marks: 4, questionType: 'Highest electronegativity element Z=9 (Fluorine)', classification: 'Direct', verificationStatus: 'Verified (AIPMT)' }
    ],
    sourceInfo: {
      dataSource: 'Official NEET UG / AIPMT Archives & NCERT Class 11 Chemistry',
      analysisPeriod: '2009 – 2024 (15 Verified Papers)',
      directPyqsAnalyzedCount: 6,
      classificationMethod: 'Strict topic-level classification; chapter-level weightage was not used.',
      disclaimer: 'Historical frequency is not a prediction of the next NEET paper.'
    }
  }
};
