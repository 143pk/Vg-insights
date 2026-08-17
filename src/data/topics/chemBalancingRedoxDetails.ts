import { DetailedTopicContent } from '../../types/neet'

export const chemBalancingRedoxDetails: DetailedTopicContent = {
  topicId: 'chem-balancing-redox',
  topicName: 'Balancing Redox Reactions',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Physical Chemistry',
  chapter: 'Redox Reactions',

  whatIsThisTopic: 'Balancing Redox Reactions is the core quantitative procedure in electrochemistry and stoichiometry used to balance chemical equations where reduction and oxidation occur simultaneously. Unlike ordinary chemical equations where only atom counts are balanced, a redox equation requires strict simultaneous conservation of both total mass (atoms) and total electrical charge (electrons lost = electrons gained). Mastering the two systematic techniques — the Oxidation-Number Method and the Ion-Electron (Half-Reaction) Method in acidic and basic media — enables instant determination of stoichiometric coefficients in NEET exam questions.',

  basicIdea: [
    '1. Why Ordinary Atom Balancing Fails for Redox: In a redox reaction, electrons are physically transferred from the reducing agent to the oxidizing agent. Balancing only atom counts often leaves an unbalanced net charge. Law of Conservation of Charge dictates that total electrons lost in oxidation MUST strictly equal total electrons gained in reduction.',
    '2. Fundamental Conservation Principles: Every balanced redox equation must satisfy three conservation laws: (1) Conservation of Mass (atoms of each element on reactants side = products side), (2) Conservation of Electrons (total e⁻ lost = total e⁻ gained), and (3) Conservation of Net Electrical Charge (sum of ionic charges on left = sum of ionic charges on right).',
    '3. Two Complementary Methods: (A) Oxidation-Number Method (tracks overall change in oxidation state per atom and equalizes total oxidation number change using simple multipliers), and (B) Ion-Electron / Half-Reaction Method (splits the overall reaction into oxidation and reduction half-reactions, balances atoms and charges with H₂O, H⁺ or OH⁻ and e⁻ separately, then recombines them).',
    '4. Medium Dependencies: In Acidic Medium, excess oxygen is balanced by adding H₂O, and excess hydrogen is balanced by adding H⁺. In Basic Medium, acidic balancing is converted by neutralizing H⁺ with an equal number of OH⁻ ions on both sides to form H₂O, followed by simplification.',
  ],

  importantTerms: [
    {
      term: 'Oxidation Half-Reaction',
      symbol: '\_1 \→ \_1 + n e^-',
      definition: 'The isolated half of a redox reaction showing loss of electrons and an increase in oxidation number.',
      neetNote: 'Electrons ALWAYS appear on the RIGHT (product) side of an oxidation half-reaction.',
    },
    {
      term: 'Reduction Half-Reaction',
      symbol: '\_2 + m e^- \→ \_2',
      definition: 'The isolated half of a redox reaction showing gain of electrons and a decrease in oxidation number.',
      neetNote: 'Electrons ALWAYS appear on the LEFT (reactant) side of a reduction half-reaction.',
    },
    {
      term: 'Stoichiometric Coefficients',
      symbol: 'x, y, z \ x A + y B + z H^+ \→ \\dots',
      definition: 'The integer multipliers placed before chemical species to ensure exact mass and charge conservation.',
      neetNote: 'NEET questions frequently ask for the ratio or values of x, y, and z in balanced equations.',
    },
    {
      term: 'Acidic Medium Balancing',
      symbol: '\^/ \_2',
      definition: 'Balancing environment where hydrogen ions (H⁺) and water molecules (H₂O) are used to balance H and O atoms.',
      neetNote: 'Used when reaction takes place in presence of dilute acids like H₂SO₄ or HCl.',
    },
    {
      term: 'Basic Medium Balancing',
      symbol: '\^- / \_2',
      definition: 'Balancing environment where hydroxide ions (OH⁻) and water molecules (H₂O) exist in the final equation without free H⁺ ions.',
      neetNote: 'H⁺ ions are neutralized by adding equal moles of OH⁻ to BOTH sides of the equation.',
    },
    {
      term: 'n-Factor (Valency Factor)',
      symbol: 'n_f = |\Δ \| \× ',
      definition: 'The total number of moles of electrons transferred per mole of the reactant in a redox process.',
      neetNote: 'Key to calculating Equivalent Weight = Molar Mass / n-factor in redox titrations!',
    }
  ],

  conceptExplanation: [
    {
      heading: '1. The Oxidation-Number Method (Step-by-Step Procedure)',
      paragraphs: [
        'The Oxidation-Number Method relies on equalizing the total increase in oxidation number (oxidation) with the total decrease in oxidation number (reduction):',
        '• Step 1: Write the skeletal chemical equation containing all reactants and products.',
        '• Step 2: Assign oxidation numbers to ALL atoms in the equation to locate the species undergoing oxidation and reduction.',
        '• Step 3: Calculate the change in oxidation number PER ATOM, and multiply by the number of atoms undergoing the change in that formula to get the TOTAL change per formula unit.',
        '• Step 4: Equalize the total increase and total decrease in oxidation numbers by multiplying the oxidizing and reducing species by suitable cross-multipliers (coefficients).',
        '• Step 5: Balance all atoms OTHER THAN Hydrogen and Oxygen by inspection.',
        '• Step 6: Balance Oxygen and Hydrogen atoms based on the reaction medium:',
        '  - Acidic Medium: Add H₂O to the oxygen-deficient side. Add H⁺ to the hydrogen-deficient side.',
        '  - Basic Medium: Add H₂O to the oxygen-deficient side, then add H⁺ to balance H, and convert H⁺ to OH⁻ by adding OH⁻ to both sides.',
        '• Step 7: Final Verification — Check that both total atom count for every element and total electrical charge on reactants and products sides are strictly identical.',
      ]
    },
    {
      heading: '2. The Ion-Electron (Half-Reaction) Method in Acidic Medium',
      paragraphs: [
        'The Ion-Electron Method breaks the complex redox reaction into two simpler half-reactions, making electron tracking completely foolproof:',
        '• Step 1: Write ionic skeletal equation (omit spectator ions that do not change oxidation state, e.g., K⁺, Na⁺, SO₄²⁻).',
        '• Step 2: Split the skeletal equation into two half-reactions: Oxidation Half-Reaction and Reduction Half-Reaction.',
        '• Step 3: Balance main element atoms (atoms other than O and H) in each half-reaction individually.',
        '• Step 4: Balance Oxygen atoms by adding water molecules (H₂O) to the side deficient in oxygen.',
        '• Step 5: Balance Hydrogen atoms by adding hydrogen ions (H⁺) to the side deficient in hydrogen.',
        '• Step 6: Balance Electrical Charge by adding electrons (e⁻) to the side with greater positive charge:',
        '  - Oxidation half-reaction: add electrons to the RIGHT side.',
        '  - Reduction half-reaction: add electrons to the LEFT side.',
        '• Step 7: Equalize total electrons transferred: Multiply the two half-reactions by minimum integers so that the number of electrons lost equals electrons gained.',
        '• Step 8: Add the two half-reactions together, cancel out electrons and common H₂O / H⁺ species present on both sides.',
        '• Step 9: Final Check — Verify mass and net charge equality.',
      ],
      visuals: [
        {
          caption: 'Systematic Step-by-Step Flowchart for Ion-Electron Half-Reaction Method',
          guide: 'Always balance main atoms first, then O with H2O, H with H+, charge with e-, and multiply to equalize electrons before combining.',
          svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 font-sans border border-slate-200 dark:border-slate-800">
  <rect width="800" height="240" rx="16" fill="#f8fafc" />
  <text x="400" y="28" text-anchor="middle" fill="#4338ca" font-size="15" font-weight="extrabold">ION-ELECTRON (HALF-REACTION) METHOD WORKFLOW</text>

  <!-- Step Boxes -->
  <!-- Box 1 -->
  <g transform="translate(20, 50)">
    <rect width="130" height="70" rx="8" fill="#ffffff" stroke="#6366f1" stroke-width="2" />
    <text x="65" y="25" text-anchor="middle" fill="#4338ca" font-size="11" font-weight="extrabold">STEP 1 & 2</text>
    <text x="65" y="45" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="bold">Skeletal Ionic &</text>
    <text x="65" y="58" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="bold">Split Half-Rxns</text>
  </g>
  <path d="M 155 85 L 175 85" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Box 2 -->
  <g transform="translate(180, 50)">
    <rect width="130" height="70" rx="8" fill="#ffffff" stroke="#6366f1" stroke-width="2" />
    <text x="65" y="25" text-anchor="middle" fill="#4338ca" font-size="11" font-weight="extrabold">STEP 3</text>
    <text x="65" y="45" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="bold">Balance Main</text>
    <text x="65" y="58" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="bold">Atoms (Not O, H)</text>
  </g>
  <path d="M 315 85 L 335 85" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Box 3 -->
  <g transform="translate(340, 50)">
    <rect width="130" height="70" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
    <text x="65" y="25" text-anchor="middle" fill="#0369a1" font-size="11" font-weight="extrabold">STEP 4 & 5</text>
    <text x="65" y="45" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="bold">Balance O (H₂O) &</text>
    <text x="65" y="58" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="bold">Balance H (H⁺)</text>
  </g>
  <path d="M 475 85 L 495 85" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Box 4 -->
  <g transform="translate(500, 50)">
    <rect width="130" height="70" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
    <text x="65" y="25" text-anchor="middle" fill="#0369a1" font-size="11" font-weight="extrabold">STEP 6</text>
    <text x="65" y="45" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="bold">Balance Charge</text>
    <text x="65" y="58" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="bold">with e⁻</text>
  </g>
  <path d="M 635 85 L 655 85" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Box 5 -->
  <g transform="translate(660, 50)">
    <rect width="120" height="70" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="2" />
    <text x="60" y="25" text-anchor="middle" fill="#047857" font-size="11" font-weight="extrabold">STEP 7</text>
    <text x="60" y="45" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="bold">Equalize e⁻</text>
    <text x="60" y="58" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="bold">Multipliers</text>
  </g>

  <!-- Bottom Combine Box -->
  <g transform="translate(200, 145)">
    <rect width="400" height="70" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
    <text x="200" y="28" text-anchor="middle" fill="#15803d" font-size="13" font-weight="extrabold">STEP 8 & 9: ADD HALF-REACTIONS & CANCEL COMMON SPECIES</text>
    <text x="200" y="50" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="bold">Electrons cancel out completely ➔ Verify mass and charge conservation!</text>
  </g>

  <!-- Down Arrows -->
  <path d="M 720 125 L 720 180 L 610 180" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="3,3" />
</svg>`
        }
      ]
    },
    {
      heading: '3. Balancing in Basic Medium (Neutralization Trick)',
      paragraphs: [
        'Balancing redox reactions in basic medium is easily mastered by converting acidic balancing using the Neutralization Method:',
        '• Step 1: Complete the entire balancing process as if the reaction were taking place in ACIDIC medium (using H₂O, H⁺, and e⁻).',
        '• Step 2: Count the total number of H⁺ ions appearing in the balanced acidic equation.',
        '• Step 3: Add an EQUAL number of Hydroxide ions (OH⁻) to BOTH SIDES of the equation.',
        '• Step 4: Combine H⁺ and OH⁻ ions on whichever side they appear together to form Water molecules (H⁺ + OH⁻ ➔ H₂O).',
        '• Step 5: Cancel out excess H₂O molecules appearing on both sides.',
        '• Step 6: Verify that the final equation contains OH⁻ ions (and NO H⁺ ions) and that mass and charge are conserved.',
      ],
      visuals: [
        {
          caption: 'Basic Medium Conversion Trick: Neutralizing H⁺ to H₂O with OH⁻',
          guide: 'Add OH- equal to H+ on BOTH sides. Combine H+ + OH- -> H2O on one side and simplify excess H2O.',
          svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 180" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 font-sans border border-slate-200 dark:border-slate-800">
  <rect width="800" height="180" rx="16" fill="#f8fafc" />
  <text x="400" y="28" text-anchor="middle" fill="#4338ca" font-size="15" font-weight="extrabold">BASIC MEDIUM CONVERSION (H⁺ NEUTRALIZATION TRICK)</text>

  <g transform="translate(40, 50)">
    <!-- Acidic Stage -->
    <rect width="200" height="50" rx="8" fill="#ffffff" stroke="#6366f1" stroke-width="2" />
    <text x="100" y="22" text-anchor="middle" fill="#4338ca" font-size="11" font-weight="bold">Acidic Balanced Equation</text>
    <text x="100" y="38" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="extrabold">Contains N × H⁺ ions</text>

    <!-- Arrow 1 -->
    <path d="M 205 75 L 245 75" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)" />

    <!-- Neutralization Stage -->
    <rect width="250" height="50" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2" stroke-dasharray="3,3" />
    <text x="125" y="22" text-anchor="middle" fill="#b45309" font-size="11" font-weight="bold">Add N × OH⁻ to BOTH Sides</text>
    <text x="125" y="38" text-anchor="middle" fill="#92400e" font-size="10" font-weight="extrabold">N H⁺ + N OH⁻ ➔ N H₂O</text>

    <!-- Arrow 2 -->
    <path d="M 505 75 L 545 75" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)" />

    <!-- Basic Final Stage -->
    <rect width="200" height="50" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2" />
    <text x="100" y="22" text-anchor="middle" fill="#047857" font-size="11" font-weight="bold">Cancel Excess H₂O</text>
    <text x="100" y="38" text-anchor="middle" fill="#065f46" font-size="10" font-weight="extrabold">Final Basic Medium Equation!</text>
  </g>

  <text x="400" y="140" text-anchor="middle" fill="#475569" font-size="11" font-style="italic">Example: 2 MnO₄⁻ + 10 Cl⁻ + 16 H⁺ ➔ 2 Mn²⁺ + 5 Cl₂ + 8 H₂O + 16 OH⁻ (both sides) ➔ 2 MnO₄⁻ + 10 Cl⁻ + 8 H₂O ➔ 2 Mn²⁺ + 5 Cl₂ + 16 OH⁻</text>
</svg>`
        }
      ]
    },
    {
      heading: '4. High-Yield Oxidizers in NEET: KMnO₄ and K₂Cr₂O₇ Reactions & n-Factors',
      paragraphs: [
        'NEET chemistry repeatedly tests reactions involving Potassium Permanganate (KMnO₄) and Potassium Dichromate (K₂Cr₂O₇). Understanding their half-reactions and n-factors provides instant answers:',
        '1. KMnO₄ (Permanganate Ion, MnO₄⁻):',
        '• Acidic Medium: MnO₄⁻ + 8 H⁺ + 5 e⁻ ➔ Mn²⁺ + 4 H₂O (Mn changes from +7 to +2, n-factor = 5). Color change: Deep Purple ➔ Colorless.',
        '• Neutral / Faintly Alkaline Medium: MnO₄⁻ + 2 H₂O + 3 e⁻ ➔ MnO₂ (s) + 4 OH⁻ (Mn changes from +7 to +4, n-factor = 3). Color change: Deep Purple ➔ Dark Brown Precipitate.',
        '• Strongly Alkaline Medium: MnO₄⁻ + e⁻ ➔ MnO₄²⁻ (Mn changes from +7 to +6, n-factor = 1). Color change: Deep Purple ➔ Dark Green Manganate.',
        '2. K₂Cr₂O₇ (Dichromate Ion, Cr₂O₇²⁻):',
        '• Acidic Medium: Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ ➔ 2 Cr³⁺ + 7 H₂O (Cr changes from +6 to +3 per atom, 2 Cr atoms ➔ total e⁻ = 6, n-factor = 6). Color change: Orange ➔ Green.',
      ],
      visuals: [
        {
          caption: 'KMnO₄ n-Factor and Oxidation State Changes across Acidic, Neutral, and Basic Media',
          guide: 'Memorize the mnemonic 531: Acidic = 5 e-, Neutral/Faintly Alkaline = 3 e-, Strongly Alkaline = 1 e-.',
          svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" class="w-full h-auto rounded-xl bg-slate-50 dark:bg-slate-900 font-sans border border-slate-200 dark:border-slate-800">
  <rect width="800" height="200" rx="16" fill="#f8fafc" />
  <text x="400" y="28" text-anchor="middle" fill="#4338ca" font-size="15" font-weight="extrabold">KMnO₄ REDOX BEHAVIOR & n-FACTOR SUMMARY (NEET MUST-KNOW)</text>

  <!-- Acidic Card -->
  <g transform="translate(30, 48)">
    <rect width="220" height="130" rx="12" fill="#ffffff" stroke="#ef4444" stroke-width="2" />
    <rect width="220" height="28" rx="12" fill="#ef4444" />
    <text x="110" y="19" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="extrabold">ACIDIC MEDIUM</text>
    <text x="110" y="52" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">MnO₄⁻ (+7) ➔ Mn²⁺ (+2)</text>
    <text x="110" y="72" text-anchor="middle" fill="#dc2626" font-size="13" font-weight="extrabold">Gains 5 e⁻ (n-factor = 5)</text>
    <rect x="20" y="85" width="180" height="25" rx="6" fill="#fee2e2" />
    <text x="110" y="102" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold">Purple ➔ Colorless (Mn²⁺)</text>
  </g>

  <!-- Neutral Card -->
  <g transform="translate(290, 48)">
    <rect width="220" height="130" rx="12" fill="#ffffff" stroke="#d97706" stroke-width="2" />
    <rect width="220" height="28" rx="12" fill="#d97706" />
    <text x="110" y="19" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="extrabold">NEUTRAL / FAINTLY ALKALINE</text>
    <text x="110" y="52" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">MnO₄⁻ (+7) ➔ MnO₂ (+4)</text>
    <text x="110" y="72" text-anchor="middle" fill="#b45309" font-size="13" font-weight="extrabold">Gains 3 e⁻ (n-factor = 3)</text>
    <rect x="20" y="85" width="180" height="25" rx="6" fill="#fef3c7" />
    <text x="110" y="102" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold">Purple ➔ Brown PPT (MnO₂)</text>
  </g>

  <!-- Basic Card -->
  <g transform="translate(550, 48)">
    <rect width="220" height="130" rx="12" fill="#ffffff" stroke="#10b981" stroke-width="2" />
    <rect width="220" height="28" rx="12" fill="#10b981" />
    <text x="110" y="19" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="extrabold">STRONGLY ALKALINE</text>
    <text x="110" y="52" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">MnO₄⁻ (+7) ➔ MnO₄²⁻ (+6)</text>
    <text x="110" y="72" text-anchor="middle" fill="#047857" font-size="13" font-weight="extrabold">Gains 1 e⁻ (n-factor = 1)</text>
    <rect x="20" y="85" width="180" height="25" rx="6" fill="#d1fae5" />
    <text x="110" y="102" text-anchor="middle" fill="#065f46" font-size="10" font-weight="bold">Purple ➔ Green (MnO₄²⁻)</text>
  </g>
</svg>`
        }
      ]
    }
  ],

  formulae: [
    {
      title: 'Redox Stoichiometric Coefficient Ratio Formula',
      formula: '\ \× n_{f,1} = \ \× n_{f,2}',
      variables: 'n_{f,1} = n-factor of reductant, n_{f,2} = n-factor of oxidant.',
      whenToUse: 'Directly determine mole ratios and stoichiometric coefficients between oxidant and reductant in redox reactions without performing full equation balancing.',
      note: 'Extremely powerful shortcut for NEET redox stoichiometry questions!',
      calculationExample: {
        problem: 'Find the number of moles of KMnO₄ required to react completely with 1 mole of Oxalate ion (C₂O₄²⁻) in acidic medium.',
        given: 'In acidic medium: MnO₄⁻ ➔ Mn²⁺ (ΔO.N. = +7 to +2 = 5 e⁻, so n_f(MnO₄⁻) = 5). Oxalate: C₂O₄²⁻ ➔ 2 CO₂ (2 Carbon atoms change from +3 to +4 = 2 e⁻, so n_f(C₂O₄²⁻) = 2).',
        stepByStep: [
          'Step 1: Apply equivalence law: Moles of MnO₄⁻ × n_f(MnO₄⁻) = Moles of C₂O₄²⁻ × n_f(C₂O₄²⁻).',
          'Step 2: Substitute n-factors: Moles of MnO₄⁻ × 5 = 1 mole × 2.',
          'Step 3: Solve for Moles of MnO₄⁻: Moles = 2 / 5 = 0.4 moles.',
        ],
        answer: '0.4 moles (or 2/5 moles) of KMnO₄',
      }
    },
    {
      title: 'Full Balancing Example 1: Permanganate + Oxalate in Acidic Medium',
      formula: 'x \_4^- + y \_2\_4^{2-} + z \^+ \→ x \^{2+} + 2y \_2 + \ /  \_2',
      variables: 'x, y, z = stoichiometric coefficients to be determined.',
      whenToUse: 'Balance classic NEET redox reaction between Permanganate ion and Oxalate ion in acidic medium.',
      note: 'Verification check: Mass of Mn, C, O, H and total electrical charge must balance!',
      calculationExample: {
        problem: 'Balance the redox reaction MnO₄⁻ + C₂O₄²⁻ + H⁺ ➔ Mn²⁺ + CO₂ + H₂O using the Ion-Electron method and find x, y, z.',
        given: 'Reactants: MnO₄⁻, C₂O₄²⁻, H⁺. Products: Mn²⁺, CO₂, H₂O. Medium: Acidic.',
        stepByStep: [
          'Step 1: Oxidation Half-Reaction: C₂O₄²⁻ ➔ 2 CO₂. Balance charge by adding 2 e⁻ to right: C₂O₄²⁻ ➔ 2 CO₂ + 2 e⁻ (Eq. 1).',
          'Step 2: Reduction Half-Reaction: MnO₄⁻ ➔ Mn²⁺. Balance O with 4 H₂O on right: MnO₄⁻ ➔ Mn²⁺ + 4 H₂O. Balance H with 8 H⁺ on left: MnO₄⁻ + 8 H⁺ ➔ Mn²⁺ + 4 H₂O. Balance charge with 5 e⁻ on left: MnO₄⁻ + 8 H⁺ + 5 e⁻ ➔ Mn²⁺ + 4 H₂O (Eq. 2).',
          'Step 3: Equalize electrons: Multiply Eq. 1 by 5 and Eq. 2 by 2:',
          '  • 5 C₂O₄²⁻ ➔ 10 CO₂ + 10 e⁻',
          '  • 2 MnO₄⁻ + 16 H⁺ + 10 e⁻ ➔ 2 Mn²⁺ + 8 H₂O',
          'Step 4: Add half-reactions and cancel 10 e⁻:',
          '  • 2 MnO₄⁻ + 5 C₂O₄²⁻ + 16 H⁺ ➔ 2 Mn²⁺ + 10 CO₂ + 8 H₂O.',
          'Step 5: Verify charge: Left = 2(-1) + 5(-2) + 16(+1) = +4. Right = 2(+2) + 0 + 0 = +4. Perfect!',
        ],
        answer: 'Balanced Equation: 2 MnO₄⁻ + 5 C₂O₄²⁻ + 16 H⁺ ➔ 2 Mn²⁺ + 10 CO₂ + 8 H₂O (x=2, y=5, z=16)',
      }
    },
    {
      title: 'Full Balancing Example 2: Dichromate + Ferrous Ion in Acidic Medium',
      formula: '\_2\_7^{2-} + 6 \^{2+} + 14 \^+ \→ 2 \^{3+} + 6 \^{3+} + 7 \_2',
      variables: 'Chromium (+6 to +3) and Iron (+2 to +3) in acidic medium.',
      whenToUse: 'Standard titration equation between Potassium Dichromate and Mohr\'s Salt / Ferrous sulfate.',
      note: '1 mole of Cr₂O₇²⁻ reacts with 6 moles of Fe²⁺ in acidic medium.',
      calculationExample: {
        problem: 'Balance Cr₂O₇²⁻ + Fe²⁺ + H⁺ ➔ Cr³⁺ + Fe³⁺ + H₂O using Ion-Electron Method.',
        given: 'Reactants: Cr₂O₇²⁻, Fe²⁺, H⁺. Products: Cr³⁺, Fe³⁺, H₂O.',
        stepByStep: [
          'Step 1: Oxidation Half-Reaction: Fe²⁺ ➔ Fe³⁺ + e⁻. (Multiply by 6: 6 Fe²⁺ ➔ 6 Fe³⁺ + 6 e⁻).',
          'Step 2: Reduction Half-Reaction: Cr₂O₇²⁻ ➔ 2 Cr³⁺ + 7 H₂O. Balance H with 14 H⁺: Cr₂O₇²⁻ + 14 H⁺ ➔ 2 Cr³⁺ + 7 H₂O. Balance charge with 6 e⁻: Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ ➔ 2 Cr³⁺ + 7 H₂O.',
          'Step 3: Combine: Cr₂O₇²⁻ + 6 Fe²⁺ + 14 H⁺ ➔ 2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O.',
          'Step 4: Verify charge: Left = (-2) + 6(+2) + 14(+1) = +24. Right = 2(+3) + 6(+3) = +24. Balanced!',
        ],
        answer: 'Cr₂O₇²⁻ + 6 Fe²⁺ + 14 H⁺ ➔ 2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O',
      }
    },
    {
      title: 'Full Balancing Example 3: Permanganate + Iodide in Basic Medium',
      formula: '2 \_4^- + \^- + \_2\ \→ 2 \_2 + \_3^- + 2 \^-',
      variables: 'Permanganate and Iodide in neutral / faintly alkaline medium.',
      whenToUse: 'Balance oxidation of Iodide ion to Iodate ion by KMnO₄ in neutral/basic medium.',
      note: 'In basic medium, Iodide (I⁻) is oxidized to Iodate (IO₃⁻), NOT iodine (I₂)!',
      calculationExample: {
        problem: 'Balance MnO₄⁻ + I⁻ ➔ MnO₂ + IO₃⁻ in alkaline medium.',
        given: 'Medium: Basic / Alkaline.',
        stepByStep: [
          'Step 1: Balance in acidic medium first:',
          '  • Oxidation: I⁻ + 3 H₂O ➔ IO₃⁻ + 6 H⁺ + 6 e⁻',
          '  • Reduction: 2 (MnO₄⁻ + 4 H⁺ + 3 e⁻ ➔ MnO₂ + 2 H₂O) = 2 MnO₄⁻ + 8 H⁺ + 6 e⁻ ➔ 2 MnO₂ + 4 H₂O',
          '  • Add: 2 MnO₄⁻ + I⁻ + 2 H⁺ ➔ 2 MnO₂ + IO₃⁻ + H₂O (Acidic balanced).',
          'Step 2: Convert to Basic medium by adding 2 OH⁻ to BOTH sides:',
          '  • Left side: 2 H⁺ + 2 OH⁻ = 2 H₂O.',
          '  • Equation: 2 MnO₄⁻ + I⁻ + 2 H₂O ➔ 2 MnO₂ + IO₃⁻ + H₂O + 2 OH⁻.',
          'Step 3: Cancel 1 H₂O from both sides:',
          '  • 2 MnO₄⁻ + I⁻ + H₂O ➔ 2 MnO₂ + IO₃⁻ + 2 OH⁻.',
          'Step 4: Verify charge: Left = 2(-1) + (-1) = -3. Right = (-1) + 2(-1) = -3. Perfect!',
        ],
        answer: '2 MnO₄⁻ + I⁻ + H₂O ➔ 2 MnO₂ + IO₃⁻ + 2 OH⁻',
      }
    }
  ],

  neetImportantPoints: [
    '1. Conservation of Mass & Charge: A redox equation is NOT balanced if only atoms match! Electrical charge on reactant side MUST equal electrical charge on product side.',
    '2. KMnO₄ n-Factor Mnemonic (531): Acidic = 5 e⁻ (Mn²⁺), Neutral/Faintly Alkaline = 3 e⁻ (MnO₂), Strongly Alkaline = 1 e⁻ (MnO₄²⁻).',
    '3. K₂Cr₂O₇ n-Factor in Acidic Medium: Always 6 (Cr₂O₇²⁻ ➔ 2 Cr³⁺, 2 × (+6 to +3) = 6 e⁻).',
    '4. Permanganate + Oxalate Ratio in Acid: 2 MnO₄⁻ : 5 C₂O₄²⁻ : 16 H⁺ ➔ 2 Mn²⁺ + 10 CO₂ + 8 H₂O.',
    '5. Dichromate + Ferrous Ratio in Acid: 1 Cr₂O₇²⁻ : 6 Fe²⁺ : 14 H⁺ ➔ 2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O.',
    '6. Iodide Oxidation Product Depends on Medium: Acidic medium oxidizes I⁻ to I₂. Neutral / Alkaline medium oxidizes I⁻ to IO₃⁻ (Iodate ion)!',
    '7. Ferrous Oxalate (FeC₂O₄) n-Factor in Acid: Both Fe²⁺ (1 e⁻) and C₂O₄²⁻ (2 e⁻) undergo oxidation! Total n-factor = 1 + 2 = 3. Therefore, 1 mole FeC₂O₄ requires 3/5 moles of KMnO₄.',
    '8. Basic Medium Neutralization Rule: Always balance in acidic medium first (H⁺, H₂O), then add OH⁻ equal to H⁺ count to BOTH sides, combine H⁺ + OH⁻ ➔ H₂O, and simplify excess H₂O.',
  ],

  commonConfusions: [
    {
      commonConfusion: 'Balancing atom counts and ignoring ionic charges on both sides.',
      correctFact: 'Equal atom counts do NOT guarantee a balanced reaction. For example, Fe²⁺ + Ag⁺ ➔ Fe³⁺ + Ag has equal atoms (1 Fe, 1 Ag on each side), but charge on left is +3 and on right is +4. Correct balanced form: Fe²⁺ + Ag⁺ ➔ Fe³⁺ + Ag is already charge-balanced only if 1 Fe²⁺ + 1 Ag⁺ transfers 1 e⁻! Wait, Fe²⁺ ➔ Fe³⁺ + e⁻, Ag⁺ + e⁻ ➔ Ag, so charge left = +3, right = +3. But in Cu²⁺ + Al ➔ Cu + Al³⁺, atoms are 1 Cu, 1 Al, but charge left = +2, right = +3. Balanced: 3 Cu²⁺ + 2 Al ➔ 3 Cu + 2 Al³⁺ (charge = +6 on both sides)!',
      whyItMattersForNEET: 'NEET questions test options where atom counts match but charges fail to match.',
    },
    {
      commonConfusion: 'Adding electrons to the wrong side in half-reactions.',
      correctFact: 'Oxidation half-reaction ALWAYS loses electrons ➔ electrons MUST be on the RIGHT (product) side. Reduction half-reaction ALWAYS gains electrons ➔ electrons MUST be on the LEFT (reactant) side.',
      whyItMattersForNEET: 'Helps prevent sign errors when balancing half-reactions.',
    },
    {
      commonConfusion: 'Leaving free H⁺ ions in the final equation when balancing in basic medium.',
      correctFact: 'Basic medium CANNOT contain free H⁺ ions! Free H⁺ must be neutralized by adding an equal number of OH⁻ ions to BOTH sides of the equation to form H₂O.',
      whyItMattersForNEET: 'Selecting an option containing H⁺ for a basic medium reaction is a major NEET trap.',
    },
    {
      commonConfusion: 'Forgetting that n-factor of K₂Cr₂O₇ is 6 (not 3).',
      correctFact: 'Chromium changes oxidation state from +6 to +3 (change = 3 per atom). But K₂Cr₂O₇ contains TWO Chromium atoms per mole! Total change per mole = 2 × 3 = 6 e⁻. Thus n-factor = 6.',
      whyItMattersForNEET: 'Using n-factor = 3 for dichromate leads to incorrect stoichiometric ratios.',
    }
  ],

  quickRevision: [
    '• OXIDATION-NUMBER METHOD: Assign O.N. ➔ Find ΔO.N. per atom ➔ Cross-multiply to equalize total ΔO.N. ➔ Balance main atoms ➔ Balance O with H₂O & H with H⁺ ➔ Check charge!',
    '• ION-ELECTRON METHOD (Acidic): Split half-rxns ➔ Balance main atoms ➔ Balance O with H₂O ➔ Balance H with H⁺ ➔ Balance charge with e⁻ ➔ Equalize e⁻ ➔ Add & cancel common terms!',
    '• BASIC MEDIUM CONVERSION: Balance as acidic first ➔ Add OH⁻ = H⁺ to BOTH sides ➔ H⁺ + OH⁻ ➔ H₂O ➔ Cancel excess H₂O ➔ Verify!',
    '• KMnO₄ n-FACTORS: Acidic = 5 (Mn²⁺) | Neutral = 3 (MnO₂) | Strongly Basic = 1 (MnO₄²⁻)',
    '• K₂Cr₂O₇ n-FACTOR: Acidic = 6 (Cr₂O₇²⁻ ➔ 2 Cr³⁺)',
    '• Ferrous Oxalate (FeC₂O₄) n-factor = 3 (Fe²⁺ ➔ Fe³⁺ [1e⁻] + C₂O₄²⁻ ➔ 2CO₂ [2e⁻])',
    '• COEFFICIENTS TO MEMORIZE: 2 MnO₄⁻ + 5 C₂O₄²⁻ + 16 H⁺ ➔ 2 Mn²⁺ + 10 CO₂ + 8 H₂O',
    '• COEFFICIENTS TO MEMORIZE: 1 Cr₂O₇²⁻ + 6 Fe²⁺ + 14 H⁺ ➔ 2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O',
  ],

  practiceQuestions: [
  {
    "id": "pq-balancing-1",
    "question": "What are the stoichiometric coefficients x, y, z in the balanced equation: x MnO₄⁻ + y C₂O₄²⁻ + z H⁺ ➔ x Mn²⁺ + 2y CO₂ + (z/2) H₂O?",
    "options": [
      "2, 5, 16",
      "5, 2, 8",
      "2, 5, 8",
      "1, 5, 8"
    ],
    "correctAnswer": 0,
    "explanation": "Ion-electron balancing gives: 2 MnO₄⁻ + 5 C₂O₄²⁻ + 16 H⁺ ➔ 2 Mn²⁺ + 10 CO₂ + 8 H₂O. Therefore, x = 2, y = 5, and z = 16."
  },
  {
    "id": "pq-balancing-2",
    "question": "How many moles of KMnO₄ are required to oxidize 1 mole of Fe²⁺ ions completely in acidic medium?",
    "options": [
      "1/5 mole",
      "5 moles",
      "1/6 mole",
      "2/5 mole"
    ],
    "correctAnswer": 0,
    "explanation": "Apply equivalence law: Moles of KMnO₄ × n_f(KMnO₄) = Moles of Fe²⁺ × n_f(Fe²⁺). In acidic medium, n_f(KMnO₄) = 5 and n_f(Fe²⁺) = 1. Therefore, Moles of KMnO₄ × 5 = 1 × 1 ➔ Moles = 1/5 = 0.2 mole."
  },
  {
    "id": "pq-balancing-3",
    "question": "In neutral or faintly alkaline medium, 2 moles of Permanganate ion (MnO₄⁻) oxidize 1 mole of Iodide ion (I⁻) to:",
    "options": [
      "I₂",
      "IO₃⁻",
      "IO⁻",
      "IO₄⁻"
    ],
    "correctAnswer": 1,
    "explanation": "In neutral or faintly alkaline medium, KMnO₄ oxidizes Iodide (I⁻) to Iodate ion (IO₃⁻) while itself getting reduced to MnO₂: 2 MnO₄⁻ + I⁻ + H₂O ➔ 2 MnO₂ + IO₃⁻ + 2 OH⁻."
  },
  {
    "id": "pq-balancing-4",
    "question": "What is the n-factor of ferrous oxalate (FeC₂O₄) when it acts as a reducing agent in acidic medium with KMnO₄?",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "When FeC₂O₄ is oxidized in acidic medium, BOTH Fe²⁺ and C₂O₄²⁻ are oxidized: Fe²⁺ ➔ Fe³⁺ + 1 e⁻, and C₂O₄²⁻ ➔ 2 CO₂ + 2 e⁻. Total electrons lost per mole of FeC₂O₄ = 1 + 2 = 3. Thus n-factor = 3."
  },
  {
    "id": "prac-chembalancingredox-5",
    "question": "Regarding Balancing Redox Reactions, which of the following statements correctly resolves a common misconception about \"Balancing atom counts and ignoring ionic charges on both sides.\"?",
    "options": [
      "Equal atom counts do NOT guarantee a balanced reaction. For example, Fe²⁺ + Ag⁺ ➔ Fe³⁺ + Ag has equal atoms (1 Fe, 1 Ag on each side), but charge on left is +3 and on right is +4. Correct balanced form: Fe²⁺ + Ag⁺ ➔ Fe³⁺ + Ag is already charge-balanced only if 1 Fe²⁺ + 1 Ag⁺ transfers 1 e⁻! Wait, Fe²⁺ ➔ Fe³⁺ + e⁻, Ag⁺ + e⁻ ➔ Ag, so charge left = +3, right = +3. But in Cu²⁺ + Al ➔ Cu + Al³⁺, atoms are 1 Cu, 1 Al, but charge left = +2, right = +3. Balanced: 3 Cu²⁺ + 2 Al ➔ 3 Cu + 2 Al³⁺ (charge = +6 on both sides)!",
      "Incorrect assumption: Balancing atom counts and ignoring ionic charges on both sides.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Equal atom counts do NOT guarantee a balanced reaction. For example, Fe²⁺ + Ag⁺ ➔ Fe³⁺ + Ag has equal atoms (1 Fe, 1 Ag on each side), but charge on left is +3 and on right is +4. Correct balanced form: Fe²⁺ + Ag⁺ ➔ Fe³⁺ + Ag is already charge-balanced only if 1 Fe²⁺ + 1 Ag⁺ transfers 1 e⁻! Wait, Fe²⁺ ➔ Fe³⁺ + e⁻, Ag⁺ + e⁻ ➔ Ag, so charge left = +3, right = +3. But in Cu²⁺ + Al ➔ Cu + Al³⁺, atoms are 1 Cu, 1 Al, but charge left = +2, right = +3. Balanced: 3 Cu²⁺ + 2 Al ➔ 3 Cu + 2 Al³⁺ (charge = +6 on both sides)!. NEET questions test options where atom counts match but charges fail to match.",
    "difficulty": "Medium",
    "conceptTested": "Balancing Redox Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chembalancingredox-6",
    "question": "Regarding Balancing Redox Reactions, which of the following statements correctly resolves a common misconception about \"Adding electrons to the wrong side in half-reactions.\"?",
    "options": [
      "Oxidation half-reaction ALWAYS loses electrons ➔ electrons MUST be on the RIGHT (product) side. Reduction half-reaction ALWAYS gains electrons ➔ electrons MUST be on the LEFT (reactant) side.",
      "Incorrect assumption: Adding electrons to the wrong side in half-reactions.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Oxidation half-reaction ALWAYS loses electrons ➔ electrons MUST be on the RIGHT (product) side. Reduction half-reaction ALWAYS gains electrons ➔ electrons MUST be on the LEFT (reactant) side.. Helps prevent sign errors when balancing half-reactions.",
    "difficulty": "Medium",
    "conceptTested": "Balancing Redox Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chembalancingredox-7",
    "question": "Regarding Balancing Redox Reactions, which of the following statements correctly resolves a common misconception about \"Leaving free H⁺ ions in the final equation when balancing in basic medium.\"?",
    "options": [
      "Basic medium CANNOT contain free H⁺ ions! Free H⁺ must be neutralized by adding an equal number of OH⁻ ions to BOTH sides of the equation to form H₂O.",
      "Incorrect assumption: Leaving free H⁺ ions in the final equation when balancing in basic medium.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Basic medium CANNOT contain free H⁺ ions! Free H⁺ must be neutralized by adding an equal number of OH⁻ ions to BOTH sides of the equation to form H₂O.. Selecting an option containing H⁺ for a basic medium reaction is a major NEET trap.",
    "difficulty": "Medium",
    "conceptTested": "Balancing Redox Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chembalancingredox-8",
    "question": "Regarding Balancing Redox Reactions, which of the following statements correctly resolves a common misconception about \"Forgetting that n-factor of K₂Cr₂O₇ is 6 (not 3).\"?",
    "options": [
      "Chromium changes oxidation state from +6 to +3 (change = 3 per atom). But K₂Cr₂O₇ contains TWO Chromium atoms per mole! Total change per mole = 2 × 3 = 6 e⁻. Thus n-factor = 6.",
      "Incorrect assumption: Forgetting that n-factor of K₂Cr₂O₇ is 6 (not 3).",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Chromium changes oxidation state from +6 to +3 (change = 3 per atom). But K₂Cr₂O₇ contains TWO Chromium atoms per mole! Total change per mole = 2 × 3 = 6 e⁻. Thus n-factor = 6.. Using n-factor = 3 for dichromate leads to incorrect stoichiometric ratios.",
    "difficulty": "Medium",
    "conceptTested": "Balancing Redox Reactions - Conceptual Clarity"
  },
  {
    "id": "prac-chembalancingredox-9",
    "question": "In the study of Balancing Redox Reactions, what is the exact definition and significance of \"Oxidation Half-Reaction\"?",
    "options": [
      "The isolated half of a redox reaction showing loss of electrons and an increase in oxidation number.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The isolated half of a redox reaction showing loss of electrons and an increase in oxidation number.. Electrons ALWAYS appear on the RIGHT (product) side of an oxidation half-reaction.",
    "difficulty": "Easy",
    "conceptTested": "Oxidation Half-Reaction definition"
  },
  {
    "id": "prac-chembalancingredox-10",
    "question": "In the study of Balancing Redox Reactions, what is the exact definition and significance of \"Reduction Half-Reaction\"?",
    "options": [
      "The isolated half of a redox reaction showing gain of electrons and a decrease in oxidation number.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The isolated half of a redox reaction showing gain of electrons and a decrease in oxidation number.. Electrons ALWAYS appear on the LEFT (reactant) side of a reduction half-reaction.",
    "difficulty": "Easy",
    "conceptTested": "Reduction Half-Reaction definition"
  }
],
  pyqs: [
    {
      id: 'pyq-balancing-2018',
      year: 2018,
      exam: 'NEET UG 2018',
      topicId: 'chem-balancing-redox',
      question: 'The values of coefficients x, y, and z in the following redox reaction: x MnO₄⁻ + y C₂O₄²⁻ + z H⁺ ➔ x Mn²⁺ + 2y CO₂ + (z/2) H₂O are respectively:',
      options: [
        '2, 5, 16',
        '5, 2, 8',
        '2, 5, 8',
        '1, 5, 8',
      ],
      correctAnswer: 0,
      explanation: 'Oxidation half-reaction: C₂O₄²⁻ ➔ 2 CO₂ + 2 e⁻ (multiply by 5: 5 C₂O₄²⁻ ➔ 10 CO₂ + 10 e⁻).\nReduction half-reaction: MnO₄⁻ + 8 H⁺ + 5 e⁻ ➔ Mn²⁺ + 4 H₂O (multiply by 2: 2 MnO₄⁻ + 16 H⁺ + 10 e⁻ ➔ 2 Mn²⁺ + 8 H₂O).\nAdding both half-reactions: 2 MnO₄⁻ + 5 C₂O₄²⁻ + 16 H⁺ ➔ 2 Mn²⁺ + 10 CO₂ + 8 H₂O.\nComparing with x MnO₄⁻ + y C₂O₄²⁻ + z H⁺: x = 2, y = 5, z = 16.',
      ncertReference: 'Class 11 Chemistry, Chapter 7 (Redox Reactions), Section 7.3.2',
    },
    {
      id: 'pyq-balancing-2015',
      year: 2015,
      exam: 'NEET UG 2015',
      topicId: 'chem-balancing-redox',
      question: 'Number of moles of MnO₄⁻ required to oxidize 1 mole of Fe²⁺ ion completely in acidic medium is:',
      options: [
        '1/5',
        '5',
        '1/6',
        '2/5',
      ],
      correctAnswer: 0,
      explanation: 'In acidic medium, the redox half-reactions are:\n• Fe²⁺ ➔ Fe³⁺ + e⁻ (1 e⁻ lost per mole of Fe²⁺)\n• MnO₄⁻ + 8 H⁺ + 5 e⁻ ➔ Mn²⁺ + 4 H₂O (5 e⁻ gained per mole of MnO₄⁻)\nEquating electron transfer: 5 moles of Fe²⁺ require 1 mole of MnO₄⁻.\nTherefore, 1 mole of Fe²⁺ requires 1/5 (0.2) mole of MnO₄⁻.',
      ncertReference: 'Class 11 Chemistry, Chapter 7 (Redox Reactions), Section 7.3.2',
    },
    {
      id: 'pyq-balancing-2013',
      year: 2013,
      exam: 'NEET UG 2013',
      topicId: 'chem-balancing-redox',
      question: 'Number of moles of MnO₄⁻ reduced by 1 mole of KI in neutral or faintly alkaline medium is:',
      options: [
        '2 moles',
        '1/2 mole',
        '1 mole',
        '5 moles',
      ],
      correctAnswer: 0,
      explanation: 'In neutral or faintly alkaline medium, KMnO₄ oxidizes Iodide (I⁻) to Iodate ion (IO₃⁻) according to the balanced equation:\n2 MnO₄⁻ + I⁻ + H₂O ➔ 2 MnO₂ + IO₃⁻ + 2 OH⁻.\nFrom stoichiometry, 1 mole of KI (I⁻) reduces 2 moles of MnO₄⁻.',
      ncertReference: 'Class 11 Chemistry, Chapter 7 (Redox Reactions), Section 7.3.2',
    },
    {
      id: 'pyq-balancing-2008',
      year: 2008,
      exam: 'AIPMT 2008',
      topicId: 'chem-balancing-redox',
      question: 'In the balanced chemical equation: a NO₃⁻ + b Cu + c H⁺ ➔ d NO + e Cu²⁺ + f H₂O, the stoichiometric coefficients a, b, and c are respectively:',
      options: [
        '2, 3, 8',
        '3, 2, 8',
        '2, 3, 4',
        '8, 3, 2',
      ],
      correctAnswer: 0,
      explanation: 'Oxidation half-reaction: Cu ➔ Cu²⁺ + 2 e⁻ (multiply by 3: 3 Cu ➔ 3 Cu²⁺ + 6 e⁻).\nReduction half-reaction: NO₃⁻ + 4 H⁺ + 3 e⁻ ➔ NO + 2 H₂O (multiply by 2: 2 NO₃⁻ + 8 H⁺ + 6 e⁻ ➔ 2 NO + 4 H₂O).\nAdding both half-reactions: 2 NO₃⁻ + 3 Cu + 8 H⁺ ➔ 2 NO + 3 Cu²⁺ + 4 H₂O.\nMatching coefficients: a = 2, b = 3, c = 8.',
      ncertReference: 'Class 11 Chemistry, Chapter 7 (Redox Reactions), Section 7.3.1',
    },
    {
      id: 'pyq-balancing-2007',
      year: 2007,
      exam: 'AIPMT 2007',
      topicId: 'chem-balancing-redox',
      question: 'Number of moles of K₂Cr₂O₇ reduced by 1 mole of Sn²⁺ ions in acidic medium is:',
      options: [
        '1/3',
        '3',
        '1/6',
        '2/3',
      ],
      correctAnswer: 0,
      explanation: 'Half-reactions in acidic medium:\n• Sn²⁺ ➔ Sn⁴⁺ + 2 e⁻ (n-factor of Sn²⁺ = 2)\n• Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ ➔ 2 Cr³⁺ + 7 H₂O (n-factor of Cr₂O₇²⁻ = 6)\nEquating electron transfer: Moles of Cr₂O₇²⁻ × 6 = Moles of Sn²⁺ × 2.\nFor 1 mole of Sn²⁺: Moles of Cr₂O₇²⁻ = 2 / 6 = 1/3 mole.',
      ncertReference: 'Class 11 Chemistry, Chapter 7 (Redox Reactions), Section 7.3.2',
    },
    {
      id: 'pyq-balancing-2005',
      year: 2005,
      exam: 'AIPMT 2005',
      topicId: 'chem-balancing-redox',
      question: 'In acidic medium, 1 mole of MnO₄⁻ accepts how many moles of electrons to form Mn²⁺?',
      options: [
        '5 moles',
        '2 moles',
        '3 moles',
        '1 mole',
      ],
      correctAnswer: 0,
      explanation: 'In acidic medium, the reduction half-reaction is:\nMnO₄⁻ + 8 H⁺ + 5 e⁻ ➔ Mn²⁺ + 4 H₂O.\nIn MnO₄⁻, Manganese is in the +7 oxidation state. In Mn²⁺, it is in the +2 state. The change in oxidation state per Mn atom is from +7 to +2 = 5 e⁻. Thus 1 mole of MnO₄⁻ accepts 5 moles of electrons.',
      ncertReference: 'Class 11 Chemistry, Chapter 7 (Redox Reactions), Section 7.3.2',
    },
    {
      id: 'pyq-balancing-2003',
      year: 2003,
      exam: 'AIPMT 2003',
      topicId: 'chem-balancing-redox',
      question: 'How many moles of Fe²⁺ are oxidized by 1 mole of MnO₄⁻ in acidic medium?',
      options: [
        '5 moles',
        '1/5 mole',
        '2 moles',
        '2.5 moles',
      ],
      correctAnswer: 0,
      explanation: 'Balanced equation in acidic medium: MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ ➔ Mn²⁺ + 5 Fe³⁺ + 4 H₂O.\nFrom stoichiometry, 1 mole of MnO₄⁻ accepts 5 moles of electrons, which oxidizes 5 moles of Fe²⁺ to Fe³⁺.',
      ncertReference: 'Class 11 Chemistry, Chapter 7 (Redox Reactions), Section 7.3.2',
    },
    {
      id: 'pyq-balancing-2002',
      year: 2002,
      exam: 'AIPMT 2002',
      topicId: 'chem-balancing-redox',
      question: 'The number of moles of KMnO₄ that will be needed to react completely with 1 mole of ferrous oxalate (FeC₂O₄) in acidic medium is:',
      options: [
        '3/5 mole',
        '2/5 mole',
        '4/5 mole',
        '1 mole',
      ],
      correctAnswer: 0,
      explanation: 'In FeC₂O₄, both Fe²⁺ and C₂O₄²⁻ are oxidized by KMnO₄:\n• Fe²⁺ ➔ Fe³⁺ + e⁻ (1 e⁻ lost)\n• C₂O₄²⁻ ➔ 2 CO₂ + 2 e⁻ (2 e⁻ lost)\nTotal electrons lost per mole of FeC₂O₄ = 1 + 2 = 3 e⁻ (n-factor = 3).\nIn acidic medium, 1 mole of KMnO₄ gains 5 e⁻ (n-factor = 5).\nBy equivalence law: Moles of KMnO₄ × 5 = 1 mole of FeC₂O₄ × 3 ➔ Moles of KMnO₄ = 3/5 mole (0.6 mole).',
      ncertReference: 'Class 11 Chemistry, Chapter 7 (Redox Reactions), Section 7.3.2',
    }
  ],

  neetMarksPotential: {
    topicName: 'Balancing Redox Reactions',
    confidenceLabel: 'HIGH',
    confidenceText: 'Based on 8 verified direct NEET/AIPMT questions analyzed across 15 official paper sets.',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 8,
    totalDirectPyqs: 8,
    totalHistoricalMarks: 32,
    averageDirectPyqsPerPaper: 0.53,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 0,
    minDirectMarks: 0,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 2.13,
    whatThisMeansForYou: 'Stoichiometric coefficient ratios and n-factor electron transfers for KMnO4 and K2Cr2O7 are high-yield NEET topics. Knowing the 2:5:16 and 1:6:14 rules saves 3 minutes during the exam.',
    typicalContributionMarks: 4,
    historicalMarksRangeText: '4 Marks (1 Question per paper)',
    yearWiseBreakdown: [
      {
        year: 2018,
        exam: 'NEET UG 2018',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Stoichiometric coefficients x, y, z in MnO4- + C2O42- + H+ reaction',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET UG 2018 Paper)',
      },
      {
        year: 2015,
        exam: 'NEET UG 2015',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Moles of MnO4- required to oxidize 1 mole of Fe2+ in acid',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET UG 2015 Paper)',
      },
      {
        year: 2013,
        exam: 'NEET UG 2013',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Moles of MnO4- reduced by 1 mole KI in neutral/alkaline medium',
        classification: 'Direct',
        verificationStatus: 'Verified (NEET UG 2013 Paper)',
      },
      {
        year: 2008,
        exam: 'AIPMT 2008',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Stoichiometric coefficients a, b, c in NO3- + Cu + H+ reaction',
        classification: 'Direct',
        verificationStatus: 'Verified (AIPMT 2008 Paper)',
      },
      {
        year: 2007,
        exam: 'AIPMT 2007',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Moles of K2Cr2O7 reduced by 1 mole of Sn2+ in acidic medium',
        classification: 'Direct',
        verificationStatus: 'Verified (AIPMT 2007 Paper)',
      },
      {
        year: 2005,
        exam: 'AIPMT 2005',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Moles of electrons accepted by 1 mole MnO4- in acidic medium',
        classification: 'Direct',
        verificationStatus: 'Verified (AIPMT 2005 Paper)',
      },
      {
        year: 2003,
        exam: 'AIPMT 2003',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Moles of Fe2+ oxidized by 1 mole MnO4- in acidic medium',
        classification: 'Direct',
        verificationStatus: 'Verified (AIPMT 2003 Paper)',
      },
      {
        year: 2002,
        exam: 'AIPMT 2002',
        directPyqCount: 1,
        marks: 4,
        questionType: 'Moles of KMnO4 needed to react with 1 mole ferrous oxalate FeC2O4',
        classification: 'Direct',
        verificationStatus: 'Verified (AIPMT 2002 Paper)',
      }
    ],
    sourceInfo: {
      dataSource: 'SATHEE (IIT Kanpur / Ministry of Education) & Official NEET/AIPMT Archives',
      analysisPeriod: '2002 – 2018 (15 Verified Papers)',
      directPyqsAnalyzedCount: 8,
      classificationMethod: 'Strict topic-level classification; chapter-level weightage was not used.',
      disclaimer: 'Historical frequency is not a prediction of the next NEET paper.',
    }
  }
};
