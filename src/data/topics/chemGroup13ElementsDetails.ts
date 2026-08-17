import { DetailedTopicContent } from '../../types/neet';

export const chemGroup13ElementsDetails: DetailedTopicContent = {
  topicId: 'chem-group-13-elements',
  topicName: 'Group 13 — Boron Family (Borax, Boric Acid, Diborane & Aluminium)',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Inorganic Chemistry (Class 11)',
  chapter: 'p-Block Elements (Group 13 & 14)',

  whatIsThisTopic:
    'Group 13 of the Periodic Table, known as the Boron Family, comprises Boron (B), Aluminium (Al), Gallium (Ga), Indium (In), and Thallium (Tl). This topic covers the electronic configuration [ns² np¹], position in the p-block, periodic trends in atomic and ionic radii (highlighting the d-block contraction anomaly where Ga < Al), non-monotonic ionization enthalpy trends, electronegativity, oxidation state stability (+3 vs +1) influenced by the Inert Pair Effect, the unique electron-deficient nature of boron compounds, back-bonding in boron trihalides, detailed chemistry of Boron (Borax, Orthoboric acid, Diborane with its 3-centre-2-electron banana bonds and reactions), and the amphoteric nature of Aluminium and its compounds. Mastering these concepts, NCERT facts, and exceptions is essential for NEET UG Chemistry.',

  basicIdea: [
    '1. General Electronic Configuration & Position: Group 13 elements possess valence shell configuration ns² np¹. Boron is a non-metal, Aluminium is a metal with metalloid tendencies, while Ga, In, and Tl are true metals.',
    '2. Atomic Radius Anomaly (Ga < Al): Down Group 13, atomic radius generally increases, BUT Gallium (135 pm) is SMALLER than Aluminium (143 pm). Reason: Gallium follows 10 transition metals (3d¹⁰) which offer poor shielding effect (screening efficiency: s > p > d > f), leading to higher Effective Nuclear Charge (Z_eff) pulling outer 4s/4p electrons closer.',
    '3. Ionization Enthalpy (ΔᵢH) Non-Monotonic Trend: The IE₁ trend is B > Tl > Ga > Al > In. The sudden increase at Tl is due to poor shielding of 14 inner 4f electrons (lanthanoid contraction) and 10 5d electrons.',
    '4. Oxidation States & Inert Pair Effect: Group 13 elements exhibit +3 and +1 oxidation states. The +3 state is stable for lighter elements (B, Al), but down the group, stability of +1 state INCREASES while +3 DECREASES: B³⁺ > Al³⁺ > Ga³⁺ > In³⁺ > Tl³⁺, whereas Tl⁺ > In⁺ > Ga⁺ > Al⁺ > B⁺. Tl⁺ is most stable, and Tl³⁺ acts as a strong OXIDIZING AGENT.',
    '5. Electron Deficiency & Diborane (B₂H₆): Diborane is an electron-deficient hydride containing 12 valence electrons in 8 bonds. It features 4 terminal 2c-2e B-H bonds (coplanar) and 2 bridging 3c-2e B-H-B "banana bonds" (perpendicular). Both Boron atoms are sp³ hybridized.',
    '6. Orthoboric Acid H₃BO₃: A weak MONOBASIC Lewis acid in aqueous solution. It does NOT donate protons directly; instead, it accepts OH⁻ from water: B(OH)₃ + H₂O ⇌ [B(OH)₄]⁻ + H⁺ (pKa = 9.25). It has a planar 2D sheet structure held by hydrogen bonding.',
    '7. Borax & Borax Bead Test: Borax formula is Na₂B₄O₇·10H₂O, or correctly Na₂[B₄O₅(OH)₄]·8H₂O containing 2 sp³ and 2 sp² hybridized boron atoms. On heating, borax forms a transparent glassy bead of sodium metaborate (NaBO₂) and boric anhydride (B₂O₃), which reacts with transition metals to give characteristic colored beads (e.g., Cobalt gives deep blue bead Co(BO₂)₂).'
  ],

  importantTerms: [
    {
      term: 'Inert Pair Effect',
      definition: 'The reluctance of the valence s-electrons (ns²) to participate in bond formation down a group in p-block elements, caused by poor shielding of intervening d and f electrons.',
      neetNote: 'In Group 13, +1 state stability increases down the group. Tl⁺ is more stable than Tl³⁺; hence TlCl₃ spontaneously decomposes to TlCl and Cl₂ (Tl³⁺ acts as oxidizing agent).'
    },
    {
      term: 'd-Block Contraction (Scandide Contraction)',
      definition: 'The unexpected contraction in atomic radius occurring in elements following the first transition series due to poor shielding by 10 3d electrons.',
      neetNote: 'Directly explains why Ga (135 pm) is smaller than Al (143 pm) and why IE₁ of Ga (579 kJ/mol) is higher than Al (577 kJ/mol).'
    },
    {
      term: '3-Centre-2-Electron Bond (3c-2e / Banana Bond)',
      definition: 'A delocalized chemical bond in electron-deficient molecules where two electrons are shared among three atomic nuclei.',
      neetNote: 'In Diborane (B₂H₆), there are two bridging B-H-B banana bonds. Length of bridge B-H bond (131 pm) is longer than terminal B-H bond (119 pm).'
    },
    {
      term: 'Monobasic Lewis Acid',
      definition: 'An acid that acts by accepting an electron pair from a donor species (like OH⁻) rather than donating its own proton.',
      neetNote: 'Boric acid H₃BO₃ is a monobasic Lewis acid: B(OH)₃ + H₂O ⇌ [B(OH)₄]⁻ + H⁺. Addition of cis-1,2-diols (e.g. glycerol) increases its acidic strength by complexation.'
    },
    {
      term: 'pπ-pπ Back-Bonding',
      definition: 'The transfer of a lone pair from an orbital of an adjacent atom into an empty p-orbital of a electron-deficient central atom.',
      neetNote: 'In BF₃, back-bonding from filled 2p of Fluorine to empty 2p of Boron reduces Lewis acidity. Lewis acidity order of Boron trihalides: BI₃ > BBr₃ > BCl₃ > BF₃.'
    },
    {
      term: 'Inorganic Benzene (Borazine B₃N₃H₆)',
      definition: 'A cyclic compound formed by heating diborane with ammonia at 450 K in 1:2 ratio, possessing a planar hexagonal ring structure similar to benzene.',
      neetNote: 'B₃N₃H₆ is isoelectronic and isostructural with C₆H₆, but B-N bonds are polar, making borazine more reactive towards addition reactions than benzene.'
    },
    {
      term: 'Amphoteric Behaviour',
      definition: 'The ability of a substance (like Al or Al₂O₃) to react with both acids and bases to yield salts and water.',
      neetNote: 'Al reacts with HCl to liberate H₂ and form [Al(H₂O)₆]³⁺, and with NaOH to form tetrahydroxoaluminate [Al(OH)₄]⁻ and H₂.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Group 13 Elements, Electronic Configuration & Periodic Trends',
      paragraphs: [
        'Group 13 elements (Boron family) have valence configuration ns² np¹. Boron is a non-metal with high melting point due to a giant icosahedral lattice (B₁₂ units), while Aluminium, Gallium, Indium, and Thallium are metals. Gallium has an unusually low melting point (303 K / 30°C) and exists as liquid over a wide temperature range up to 2400 K, making it useful in high-temperature thermometers.',
        'Atomic Radii Anomaly: Moving down the group from B to Tl, atomic radius is expected to increase continuously. However, Gallium (135 pm) is SMALLER than Aluminium (143 pm). This high-yield anomaly occurs because Ga is preceded by 10 transition elements with filled 3d subshell. Since d-electrons shield nuclear charge poorly, outer 4s and 4p electrons experience a stronger Effective Nuclear Charge (Z_eff), causing contraction in size.',
        'Ionization Enthalpy Trend: The First Ionization Enthalpy (IE₁) does NOT decrease regularly down the group. Order of IE₁: B (801) > Tl (589) > Ga (579) > Al (577) > In (558 kJ/mol). The increase from Al to Ga is due to 3d electron screening failure, and the marked increase from In to Tl is due to 14 4f electrons (Lanthanoid contraction).',
        'Electronegativity Trend: Electronegativity decreases from B (2.0) to Al (1.5), then increases marginally down to Tl (B: 2.0 > Al: 1.5 < Ga: 1.6 < In: 1.7 < Tl: 1.8). This is due to discrepancies in atomic size and Z_eff.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 360" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">GROUP 13 PERIODIC TRENDS & ANOMALIES MAP</text>

  <!-- Atomic Radius Comparison Box -->
  <rect x="40" y="55" width="340" height="280" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="210" y="80" text-anchor="middle" fill="#4ade80" font-size="14" font-weight="bold">ATOMIC RADIUS TREND (pm)</text>
  
  <g fill="#f8fafc" font-size="12">
    <!-- Bars for elements -->
    <text x="60" y="115" font-weight="bold" fill="#38bdf8">Boron (B):</text>
    <rect x="150" y="102" width="85" height="18" rx="4" fill="#38bdf8"/>
    <text x="245" y="115" font-weight="bold">85 pm</text>

    <text x="60" y="155" font-weight="bold" fill="#f43f5e">Aluminium (Al):</text>
    <rect x="150" y="142" width="143" height="18" rx="4" fill="#f43f5e"/>
    <text x="300" y="155" font-weight="bold">143 pm</text>

    <text x="60" y="195" font-weight="bold" fill="#fbbf24">Gallium (Ga):</text>
    <rect x="150" y="182" width="135" height="18" rx="4" fill="#fbbf24"/>
    <text x="292" y="195" font-weight="bold" fill="#fbbf24">135 pm ⚠️ (Ga &lt; Al!)</text>

    <text x="60" y="235" font-weight="bold" fill="#c084fc">Indium (In):</text>
    <rect x="150" y="222" width="167" height="18" rx="4" fill="#c084fc"/>
    <text x="325" y="235" font-weight="bold">167 pm</text>

    <text x="60" y="275" font-weight="bold" fill="#a855f7">Thallium (Tl):</text>
    <rect x="150" y="262" width="170" height="18" rx="4" fill="#a855f7"/>
    <text x="328" y="275" font-weight="bold">170 pm</text>
  </g>
  <text x="210" y="318" text-anchor="middle" fill="#fda4af" font-size="10" font-weight="bold">Cause of Ga &lt; Al: Poor shielding by 10 inner 3d e⁻</text>

  <!-- IE Trend Box -->
  <rect x="420" y="55" width="340" height="280" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="590" y="80" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="bold">1ST IONIZATION ENTHALPY (kJ/mol)</text>

  <g font-size="12" fill="#f8fafc">
    <text x="440" y="120" fill="#38bdf8" font-weight="bold">1. Boron (B)</text>
    <text x="670" y="120" font-weight="bold">801 kJ/mol</text>
    <path d="M 440 130 L 720 130" stroke="#334155" stroke-width="1"/>

    <text x="440" y="155" fill="#a855f7" font-weight="bold">2. Thallium (Tl)</text>
    <text x="670" y="155" font-weight="bold">589 kJ/mol ⚠️</text>
    <path d="M 440 165 L 720 165" stroke="#334155" stroke-width="1"/>

    <text x="440" y="190" fill="#fbbf24" font-weight="bold">3. Gallium (Ga)</text>
    <text x="670" y="190" font-weight="bold">579 kJ/mol</text>
    <path d="M 440 200 L 720 200" stroke="#334155" stroke-width="1"/>

    <text x="440" y="225" fill="#f43f5e" font-weight="bold">4. Aluminium (Al)</text>
    <text x="670" y="225" font-weight="bold">577 kJ/mol</text>
    <path d="M 440 235 L 720 235" stroke="#334155" stroke-width="1"/>

    <text x="440" y="260" fill="#c084fc" font-weight="bold">5. Indium (In)</text>
    <text x="670" y="260" font-weight="bold">558 kJ/mol</text>
  </g>

  <rect x="435" y="280" width="310" height="42" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="590" y="298" text-anchor="middle" fill="#fde047" font-size="11" font-weight="bold">IE₁ Order: B &gt; Tl &gt; Ga &gt; Al &gt; In</text>
  <text x="590" y="314" text-anchor="middle" fill="#94a3b8" font-size="10">Tl spike due to 14 4f electrons (Lanthanoid Contraction)</text>
</svg>`,
        caption: 'High-Yield Group 13 Trend Anomalies: Atomic radius contraction (Ga < Al) and non-monotonic Ionization Enthalpy order.'
      }
    },
    {
      heading: '2. Oxidation States, Inert Pair Effect & Lewis Acidity',
      paragraphs: [
        'Group 13 elements exhibit +3 and +1 oxidation states. For Boron and Aluminium, +3 is the dominant stable state (e.g. BCl₃, AlCl₃). However, as we move down the group from Ga to Tl, the +1 oxidation state becomes progressively more stable relative to +3 state due to the Inert Pair Effect.',
        'Inert Pair Effect Explained: Down the group, intervening 3d, 4d, 5d, and 4f subshells shield the nuclear charge poorly. The valence s-electrons (ns²) experience a strong nuclear pull and become reluctant ("inert") to unpair and participate in covalent bonding. Consequently, only the single np¹ electron participates in bonding, forming stable +1 compounds.',
        'Oxidation State Stability Order: +3 State Stability: B³⁺ > Al³⁺ > Ga³⁺ > In³⁺ > Tl³⁺. +1 State Stability: Tl⁺ > In⁺ > Ga⁺ > Al⁺ > B⁺. Thallium in +1 state (Tl⁺) is more stable than in +3 state (Tl³⁺). Thus, Tl³⁺ compounds act as powerful OXIDIZING AGENTS (e.g. Tl³⁺ + 2e⁻ → Tl⁺, E° = +1.25 V). Conversely, Ga⁺ acts as a REDUCING AGENT.',
        'Lewis Acidity & Back-Bonding in Boron Trihalides: Trivalent boron compounds (BX₃) have only 6 valence electrons (sextet) around boron and act as strong Lewis acids. Intramolecular pπ-pπ back-bonding occurs when Fluorine donates its 2p lone pair into the empty 2p orbital of Boron. The extent of back-bonding depends on orbital size match: 2p(B)-2p(F) > 2p(B)-3p(Cl) > 2p(B)-4p(Br) > 2p(B)-5p(I). Therefore, BF₃ has maximum back-bonding and LEAST Lewis acidity! Correct Lewis Acidity Order: BI₃ > BBr₃ > BCl₃ > BF₃.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 320" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">INERT PAIR EFFECT & LEWIS ACIDITY SPECTRUM</text>

  <!-- Left: Oxidation state box -->
  <rect x="40" y="55" width="340" height="240" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="210" y="82" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="bold">INERT PAIR EFFECT (+1 vs +3)</text>
  
  <text x="60" y="120" fill="#4ade80" font-size="12" font-weight="bold">• +3 Stability Order (Decreases Down):</text>
  <text x="80" y="142" fill="#f8fafc" font-size="13" font-weight="bold">B³⁺ &gt; Al³⁺ &gt; Ga³⁺ &gt; In³⁺ &gt; Tl³⁺</text>

  <text x="60" y="180" fill="#fbbf24" font-size="12" font-weight="bold">• +1 Stability Order (Increases Down):</text>
  <text x="80" y="202" fill="#f8fafc" font-size="13" font-weight="bold">Tl⁺ &gt; In⁺ &gt; Ga⁺ &gt; Al⁺ &gt; B⁺</text>

  <rect x="55" y="225" width="310" height="50" rx="8" fill="#0f172a" stroke="#f43f5e" stroke-width="1"/>
  <text x="210" y="245" text-anchor="middle" fill="#fda4af" font-size="11" font-weight="bold">📌 NEET Traps:</text>
  <text x="210" y="262" text-anchor="middle" fill="#f8fafc" font-size="10">• Tl³⁺ is a STRONG OXIDIZING AGENT (Tl³⁺ → Tl⁺)</text>

  <!-- Right: Back bonding box -->
  <rect x="420" y="55" width="340" height="240" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="590" y="82" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">LEWIS ACIDITY OF BX₃ (BACK-BONDING)</text>

  <text x="440" y="120" fill="#94a3b8" font-size="11">Strength of pπ-pπ back-bonding:</text>
  <text x="440" y="142" fill="#38bdf8" font-size="13" font-weight="bold">BF₃ &gt; BCl₃ &gt; BBr₃ &gt; BI₃</text>
  <text x="440" y="160" fill="#94a3b8" font-size="10">(2p-2p overlapping is strongest in BF₃)</text>

  <text x="440" y="195" fill="#fbbf24" font-size="11" font-weight="bold">Resulting Lewis Acidity Order (Inverted!):</text>
  <rect x="435" y="210" width="310" height="40" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="590" y="235" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="black">BI₃ &gt; BBr₃ &gt; BCl₃ &gt; BF₃</text>
  <text x="590" y="278" text-anchor="middle" fill="#fde047" font-size="10">BI₃ has weakest back-bonding → Most electron deficient → Strongest Lewis Acid!</text>
</svg>`,
        caption: 'Inert pair effect causing Tl⁺ stability, and pπ-pπ back bonding explaining the anomalous Lewis acidity order BI₃ > BBr₃ > BCl₃ > BF₃.'
      }
    },
    {
      heading: '3. Chemistry of Diborane (B₂H₆) & 3-Centre-2-Electron Banana Bonds',
      paragraphs: [
        'Diborane (B₂H₆) is the simplest boron hydride (borane). It is prepared by reacting boron trifluoride with lithium aluminium hydride in diethyl ether: 4BF₃ + 3LiAlH₄ → 2B₂H₆ + 3LiF + 3AlF₃. Industrially, it is prepared by reducing BF₃ with sodium hydride at 450 K: 2BF₃ + 6NaH → B₂H₆ + 6NaF.',
        'Structure & Bonding of Diborane: Diborane is an electron-deficient molecule containing 12 valence electrons (3×2 from two B + 1×6 from six H = 12 e⁻). To accommodate 8 bonds with only 12 electrons, it forms 3-centre-2-electron (3c-2e) bridge bonds.',
        'Structural Features of B₂H₆: 1) Both Boron atoms are sp³ hybridized. 2) Four terminal hydrogen atoms (H_t) and two boron atoms lie in one plane (coplanar). The four terminal B-H bonds are normal 2-centre-2-electron (2c-2e) covalent bonds (length 119 pm). 3) Two bridging hydrogen atoms (H_b) lie above and below this plane (perpendicular). Each B-H_b-B bridge involves a 3-centre-2-electron (3c-2e) "banana bond" (length 131 pm).',
        'Reactions of Diborane: 1) Combustion: Diborane catches fire spontaneously in air, releasing a tremendous amount of heat: B₂H₆ + 3O₂ → B₂O₃ + 3H₂O (Δ_c H° = -2035 kJ/mol). 2) Cleavage with Lewis Bases: Symmetrical cleavage occurs with large bases (e.g. NMe₃, CO): B₂H₆ + 2CO → 2BH₃·CO. Unsymmetrical cleavage occurs with small strong bases like NH₃ at low temperature: B₂H₆ + 2NH₃ → [BH₂(NH₃)₂]⁺[BH₄]⁻. On heating this adduct at 450 K, Borazine (B₃N₃H₆) is produced!'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 360" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">DIBORANE (B₂H₆) 3D BANANA BOND STRUCTURE</text>

  <!-- Diborane Diagram -->
  <!-- Boron A -->
  <circle cx="300" cy="180" r="30" fill="#38bdf8" opacity="0.8" stroke="#38bdf8" stroke-width="2"/>
  <text x="300" y="185" text-anchor="middle" fill="#0f172a" font-size="16" font-weight="black">B</text>

  <!-- Boron B -->
  <circle cx="500" cy="180" r="30" fill="#38bdf8" opacity="0.8" stroke="#38bdf8" stroke-width="2"/>
  <text x="500" y="185" text-anchor="middle" fill="#0f172a" font-size="16" font-weight="black">B</text>

  <!-- Terminal H1 (top left) -->
  <line x1="300" y1="180" x2="200" y2="110" stroke="#f8fafc" stroke-width="3"/>
  <circle cx="200" cy="110" r="18" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
  <text x="200" y="115" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">H_t</text>

  <!-- Terminal H2 (bottom left) -->
  <line x1="300" y1="180" x2="200" y2="250" stroke="#f8fafc" stroke-width="3"/>
  <circle cx="200" cy="250" r="18" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
  <text x="200" y="255" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">H_t</text>

  <!-- Terminal H3 (top right) -->
  <line x1="500" y1="180" x2="600" y2="110" stroke="#f8fafc" stroke-width="3"/>
  <circle cx="600" cy="110" r="18" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
  <text x="600" y="115" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">H_t</text>

  <!-- Terminal H4 (bottom right) -->
  <line x1="500" y1="180" x2="600" y2="250" stroke="#f8fafc" stroke-width="3"/>
  <circle cx="600" cy="250" r="18" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
  <text x="600" y="255" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">H_t</text>

  <!-- Top Banana Bond -->
  <path d="M 300 180 Q 400 80 500 180" fill="none" stroke="#fbbf24" stroke-width="8" opacity="0.6"/>
  <circle cx="400" cy="115" r="20" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
  <text x="400" y="120" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">H_b</text>

  <!-- Bottom Banana Bond -->
  <path d="M 300 180 Q 400 280 500 180" fill="none" stroke="#fbbf24" stroke-width="8" opacity="0.6"/>
  <circle cx="400" cy="245" r="20" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
  <text x="400" y="250" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">H_b</text>

  <!-- Structural Info Cards -->
  <rect x="40" y="295" width="340" height="50" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
  <text x="210" y="315" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">4 Terminal B-H Bonds: 2c-2e (119 pm, Coplanar)</text>
  <text x="210" y="333" text-anchor="middle" fill="#f8fafc" font-size="10">Both B atoms are sp³ hybridized</text>

  <rect x="420" y="295" width="340" height="50" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
  <text x="590" y="315" text-anchor="middle" fill="#fde047" font-size="11" font-weight="bold">2 Bridging B-H-B Bonds: 3c-2e (131 pm, Banana)</text>
  <text x="590" y="333" text-anchor="middle" fill="#f8fafc" font-size="10">H_b atoms lie above and below plane (perpendicular)</text>
</svg>`,
        caption: 'Detailed bonding model of Diborane (B₂H₆) showing four coplanar terminal 2c-2e bonds and two perpendicular 3c-2e banana bonds.'
      }
    },
    {
      heading: '4. Borax (Na₂B₄O₇·10H₂O) & Orthoboric Acid (H₃BO₃)',
      paragraphs: [
        'Borax: Borax is a white crystalline solid of formula Na₂B₄O₇·10H₂O. Its true tetranuclear anion structure is Na₂[B₄O₅(OH)₄]·8H₂O. The anion [B₄O₅(OH)₄]²⁻ contains two tetrahedral sp³ Boron atoms and two trigonal planar sp² Boron atoms.',
        'Aqueous Behaviour of Borax: Borax dissolves in water to give an alkaline solution because it undergoes hydrolysis to form a weak acid (boric acid) and a strong base (NaOH): Na₂B₄O₇ + 7H₂O → 2NaOH + 4H₃BO₃.',
        'Borax Bead Test: When heated on a platinum wire loop, borax swells up (losing water of crystallization) and fuses into a transparent liquid, which solidifies into a transparent glassy bead consisting of sodium metaborate (NaBO₂) and boric anhydride (B₂O₃). When heated with transition metal salts (e.g., Cobalt, Copper, Nickel), it forms characteristic colored metaborate beads: CoO + B₂O₃ → Co(BO₂)₂ (Cobalt metaborate - deep blue bead).',
        'Orthoboric Acid (H₃BO₃): Prepared by acidifying an aqueous solution of borax with HCl or H₂SO₄: Na₂B₄O₇ + 2HCl + 5H₂O → 2NaCl + 4H₃BO₃. It has a soft, soapy feel and a 2D layered structure where planar B(OH)₃ units are joined together by hydrogen bonds.',
        'Acidity & Action of Heat on H₃BO₃: H₃BO₃ is NOT a proton donor acid. It acts as a Lewis acid by accepting OH⁻ from water: B(OH)₃ + H₂O ⇌ [B(OH)₄]⁻ + H⁺. Addition of polyhydroxy compounds like glycerol, mannitol, or catechol forms a stable chelate complex with [B(OH)₄]⁻, shifting equilibrium forward and turning boric acid into a strong monobasic acid that can be titrated directly with NaOH using phenolphthalein indicator!',
        'Action of Heat on Boric Acid: H₃BO₃ --100°C--> HBO₂ (Metaboric acid) --160°C--> H₂B₄O₇ (Tetraboric acid) --red heat--> B₂O₃ (Boric anhydride / Boron oxide).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 320" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">BORIC ACID H₃BO₃ LEWIS ACID MECHANISM & HEAT DECOMPOSITION</text>

  <!-- Left: Mechanism Box -->
  <rect x="40" y="55" width="340" height="240" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="210" y="82" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">LEWIS ACID ACTION IN WATER</text>

  <rect x="55" y="100" width="310" height="50" rx="8" fill="#0f172a" stroke="#4ade80" stroke-width="1"/>
  <text x="210" y="122" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">B(OH)₃ + H₂O ⇌ [B(OH)₄]⁻ + H⁺</text>
  <text x="210" y="140" text-anchor="middle" fill="#86efac" font-size="10">(Accepts OH⁻ from H₂O; pKa = 9.25)</text>

  <text x="60" y="175" fill="#f8fafc" font-size="11">• Weak monobasic acid in pure water.</text>
  <text x="60" y="195" fill="#fbbf24" font-size="11" font-weight="bold">• cis-1,2-Diol Effect (Glycerol/Mannitol):</text>
  <text x="75" y="215" fill="#f8fafc" font-size="10.5">Forms stable cyclic chelate with [B(OH)₄]⁻.</text>
  <text x="75" y="232" fill="#f8fafc" font-size="10.5">Shifts equilibrium right → Strong acid!</text>
  <text x="75" y="250" fill="#38bdf8" font-size="10.5" font-weight="bold">Allows direct titration against NaOH!</text>

  <!-- Right: Heat Decomposition Box -->
  <rect x="420" y="55" width="340" height="240" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="590" y="82" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">ACTION OF HEAT ON H₃BO₃</text>

  <g font-size="11" font-weight="bold" fill="#f8fafc">
    <rect x="440" y="105" width="300" height="35" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="590" y="127" text-anchor="middle" fill="#38bdf8">H₃BO₃  ―(100°C / -H₂O)→  HBO₂</text>

    <text x="590" y="152" fill="#94a3b8" text-anchor="middle">↓ 160°C (-H₂O)</text>

    <rect x="440" y="165" width="300" height="35" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
    <text x="590" y="187" text-anchor="middle" fill="#fde047">H₂B₄O₇ (Tetraboric Acid)</text>

    <text x="590" y="212" fill="#94a3b8" text-anchor="middle">↓ Red Heat (-H₂O)</text>

    <rect x="440" y="225" width="300" height="35" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1"/>
    <text x="590" y="247" text-anchor="middle" fill="#fda4af">B₂O₃ (Boric Anhydride / Glass)</text>
  </g>
</svg>`,
        caption: 'Boric acid Lewis acid mechanism in water, glycerol enhancement, and sequential thermal decomposition steps.'
      }
    },
    {
      heading: '5. Chemistry of Aluminium & Amphoteric Behaviour',
      paragraphs: [
        'Aluminium (Al) is a silvery white reactive metal with valence configuration [Ne] 3s² 3p¹. Although highly electropositive, it is stable in air because it rapidly forms a thin, tough, impervious protective oxide film (Al₂O₃) on its surface (passivation).',
        'Passivation with Conc. HNO₃: Aluminium dissolves readily in mineral acids (HCl, H₂SO₄), BUT becomes PASSIVE in concentrated nitric acid (conc. HNO₃) due to the formation of a protective oxide layer.',
        'Amphoteric Behaviour of Aluminium: Aluminium metal and its oxide (Al₂O₃) and hydroxide (Al(OH)₃) display amphoteric character, reacting with both acids and alkalis:',
        '1) Reaction with Acids: 2Al(s) + 6HCl(aq) → 2Al³⁺(aq) + 6Cl⁻(aq) + 3H₂(g). In aqueous solution, Al³⁺ exists as octahedral hexaaqua complex [Al(H₂O)₆]³⁺.',
        '2) Reaction with Alkalis: 2Al(s) + 2NaOH(aq) + 6H₂O(l) → 2Na⁺[Al(OH)₄]⁻(aq) + 3H₂(g) (Sodium tetrahydroxoaluminate(III)).',
        'Amphoteric Reactions of Al₂O₃: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O; Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄].',
        'Aluminium Chloride Dimer (Al₂Cl₆): Anhydrous AlCl₃ is covalent and electron deficient (6 e⁻ around Al). In non-polar solvents and vapor state below 400°C, it dimerizes as Al₂Cl₆ where two chlorine atoms donate lone pairs via coordinate covalent bonds to complete the octets of both Aluminium atoms. At higher temperatures (> 800°C), it dissociates back into trigonal planar AlCl₃ monomers.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 300" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">AMPHOTERIC MAP OF ALUMINIUM & Al₂Cl₆ DIMER STRUCTURE</text>

  <!-- Left: Amphoteric Reactions -->
  <rect x="40" y="55" width="340" height="220" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="210" y="80" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">AMPHOTERIC REACTIONS OF Al</text>

  <rect x="55" y="98" width="310" height="42" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
  <text x="210" y="116" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">With Acid (HCl):</text>
  <text x="210" y="132" text-anchor="middle" fill="#f8fafc" font-size="10">2Al + 6HCl → 2[Al(H₂O)₆]³⁺ + 6Cl⁻ + 3H₂↑</text>

  <rect x="55" y="150" width="310" height="42" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="210" y="168" text-anchor="middle" fill="#fde047" font-size="11" font-weight="bold">With Base (NaOH):</text>
  <text x="210" y="184" text-anchor="middle" fill="#f8fafc" font-size="10">2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂↑</text>

  <rect x="55" y="202" width="310" height="58" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1"/>
  <text x="210" y="222" text-anchor="middle" fill="#fda4af" font-size="11" font-weight="bold">⚠️ Passivation Warning:</text>
  <text x="210" y="240" text-anchor="middle" fill="#f8fafc" font-size="10">Conc. HNO₃ renders Al PASSIVE via protective oxide layer!</text>

  <!-- Right: Al2Cl6 Dimer -->
  <rect x="420" y="55" width="340" height="220" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="590" y="80" text-anchor="middle" fill="#a855f7" font-size="13" font-weight="bold">Al₂Cl₆ DIMER STRUCTURE</text>

  <text x="590" y="120" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">Cl₂Al ― (Cl_bridge)₂ ― AlCl₂</text>
  <text x="590" y="145" text-anchor="middle" fill="#f8fafc" font-size="11">• Anhydrous AlCl₃ dimerizes via 2 coordinate bonds.</text>
  <text x="590" y="165" text-anchor="middle" fill="#f8fafc" font-size="11">• Each Al atom achieves complete octet (sp³ hybridized).</text>
  <text x="590" y="185" text-anchor="middle" fill="#f8fafc" font-size="11">• Contains 4 terminal Cl and 2 bridging Cl atoms.</text>

  <rect x="435" y="210" width="310" height="48" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>
  <text x="590" y="230" text-anchor="middle" fill="#d8b4fe" font-size="11" font-weight="bold">Aqueous AlCl₃ in Water:</text>
  <text x="590" y="248" text-anchor="middle" fill="#f8fafc" font-size="10">Forms [Al(H₂O)₆]³⁺ + 3Cl⁻ (Acidic due to hydrolysis)</text>
</svg>`,
        caption: 'Amphoteric reaction profile of Aluminium, conc. HNO₃ passivation, and Al₂Cl₆ coordinate dimer structure.'
      }
    }
  ],

  formulae: [
    {
      title: 'Inert Pair Effect +1 vs +3 Stability',
      formula: '+1 State Stability: Tl⁺ > In⁺ > Ga⁺ > Al⁺ > B⁺ | +3 State Stability: B³⁺ > Al³⁺ > Ga³⁺ > In³⁺ > Tl⁺³',
      variables: 'Tl⁺ is most stable; Tl³⁺ is strong oxidizing agent',
      whenToUse: 'Predicting redox behaviour and compound stability of Group 13 elements in NEET questions.'
    },
    {
      title: 'Lewis Acidity Order of Boron Trihalides',
      formula: 'BI₃ > BBr₃ > BCl₃ > BF₃',
      variables: 'Inverted due to pπ-pπ back bonding strength (2p-2p in BF₃ > 2p-3p in BCl₃ > 2p-4p in BBr₃ > 2p-5p in BI₃)',
      whenToUse: 'Comparing electron acceptor strength of boron halides.'
    },
    {
      title: 'Diborane Reaction with Ammonia',
      formula: 'B₂H₆ + 2NH₃ (low temp) → [BH₂(NH₃)₂]⁺ [BH₄]⁻ ―(450 K)→ B₃N₃H₆ (Borazine) + 6H₂',
      variables: 'Borazine B₃N₃H₆ = Inorganic Benzene',
      whenToUse: 'Determining products of diborane reaction with excess ammonia.'
    }
  ],

  neetImportantPoints: [
    '📌 Gallium (135 pm) is SMALLER than Aluminium (143 pm) due to poor shielding by 10 inner 3d electrons (d-block contraction).',
    '📌 Ionization Enthalpy order of Group 13: B > Tl > Ga > Al > In.',
    '📌 Tl⁺ is more stable than Tl³⁺ due to Inert Pair Effect. Tl³⁺ acts as a strong OXIDIZING AGENT.',
    '📌 Lewis acidity order of Boron halides: BI₃ > BBr₃ > BCl₃ > BF₃ (due to back-bonding in BF₃).',
    '📌 Diborane (B₂H₆) contains 4 terminal 2c-2e bonds and 2 bridging 3c-2e B-H-B banana bonds. Both Boron atoms are sp³ hybridized.',
    '📌 Boric acid H₃BO₃ is a weak MONOBASIC Lewis acid that accepts OH⁻ from water: B(OH)₃ + H₂O ⇌ [B(OH)₄]⁻ + H⁺.',
    '📌 Addition of cis-1,2-diols (e.g. glycerol) converts boric acid into a strong monobasic acid titratable against NaOH.',
    '📌 Borax formula is Na₂B₄O₇·10H₂O or Na₂[B₄O₅(OH)₄]·8H₂O containing 2 sp³ and 2 sp² hybridized Boron atoms.',
    '📌 Borax bead test forms cobalt metaborate Co(BO₂)₂ which gives a DEEP BLUE bead.',
    '📌 Aluminium becomes PASSIVE in conc. HNO₃ due to formation of a protective layer of oxide Al₂O₃.',
    '📌 Anhydrous AlCl₃ dimerizes to Al₂Cl₆ in non-polar solvents via 2 coordinate bonds from Cl to Al.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking Boric acid H₃BO₃ donates H⁺ ions like a typical Arrhenius/Brønsted acid.',
      correctFact: 'H₃BO₃ is a weak MONOBASIC Lewis acid. It does NOT release its own protons; it accepts OH⁻ from water, freeing H⁺ ions from H₂O.',
      whyItMattersForNEET: 'Direct question in NEET 2022! Incorrectly assuming H₃BO₃ donates 3 H⁺ ions leads to wrong answers.'
    },
    {
      commonConfusion: 'Assuming Gallium is larger than Aluminium because it lies below Al in Group 13.',
      correctFact: 'Gallium (135 pm) is SMALLER than Aluminium (143 pm) due to poor screening by 10 inner 3d electrons.',
      whyItMattersForNEET: 'Frequently tested atomic radius order question in NEET 2019 and 2016.'
    },
    {
      commonConfusion: 'Believing BF₃ is the strongest Lewis acid among boron trihalides because Fluorine is most electronegative.',
      correctFact: 'BF₃ is the WEAKEST Lewis acid among BX₃ due to strong pπ-pπ back-bonding. Lewis acidity order is BI₃ > BBr₃ > BCl₃ > BF₃.',
      whyItMattersForNEET: 'Crucial assertion-reason and trend question in NEET/AIPMT.'
    },
    {
      commonConfusion: 'Thinking Boron atoms in Diborane are sp² hybridized because B form 3 bonds normally.',
      correctFact: 'Both Boron atoms in Diborane (B₂H₆) are sp³ hybridized, forming 4 tetrahedral electron pair domains.',
      whyItMattersForNEET: 'Tested in NEET 2023 statement verification questions.'
    }
  ],

  quickRevision: [
    '• Group 13 Members: B (non-metal), Al, Ga, In, Tl (metals). Configuration: ns² np¹.',
    '• Size Anomaly: B (85 pm) < Ga (135 pm) < Al (143 pm) < In (167 pm) < Tl (170 pm).',
    '• IE₁ Trend: B > Tl > Ga > Al > In (Tl spike from 4f shielding failure).',
    '• Oxidation States: +3 stable for B, Al; +1 state increases down group (Tl⁺ > Tl³⁺ due to Inert Pair Effect).',
    '• Lewis Acidity: BI₃ > BBr₃ > BCl₃ > BF₃ (due to 2p-2p back bonding in BF₃).',
    '• Diborane (B₂H₆): sp³ B atoms, 12 valence e⁻, 4 terminal 2c-2e bonds + 2 bridging 3c-2e banana bonds.',
    '• Diborane + NH₃ (low temp) → [BH₂(NH₃)₂]⁺ [BH₄]⁻ ―(450 K)→ B₃N₃H₆ (Borazine / Inorganic Benzene).',
    '• Boric Acid H₃BO₃: Planar H-bonded layers, weak monobasic Lewis acid [B(OH)₄]⁻ + H⁺.',
    '• Borax: Na₂[B₄O₅(OH)₄]·8H₂O, 2 sp³ + 2 sp² B atoms. Hydrolyzes to alkaline solution.',
    '• Borax Bead Test: CoO + B₂O₃ → Co(BO₂)₂ (blue bead).',
    '• Aluminium: Amphoteric metal. Passive in conc. HNO₃. AlCl₃ dimerizes to Al₂Cl₆ in vapor/non-polar solvents.'
  ],

  practiceQuestions: [
  {
    "id": "prac-g13-1",
    "question": "Which of the following statement is INCORRECT regarding diborane (B₂H₆)?",
    "options": [
      "It contains four terminal 2-centre-2-electron B-H bonds.",
      "It contains two bridging 3-centre-2-electron B-H-B bonds.",
      "Both boron atoms are sp² hybridized.",
      "The four terminal hydrogen atoms and two boron atoms lie in the same plane."
    ],
    "correctAnswer": 2,
    "explanation": "In diborane (B₂H₆), both boron atoms are sp³ hybridized (not sp²), forming a tetrahedral arrangement of electron pairs.",
    "difficulty": "Easy",
    "conceptTested": "Diborane hybridization and bonding structure"
  },
  {
    "id": "prac-g13-2",
    "question": "Boric acid (H₃BO₃) behaves as an acid in water because it:",
    "options": [
      "Gives up a proton to water.",
      "Accepts OH⁻ ion from water liberating H⁺.",
      "Dissociates to give B³⁺ and OH⁻ ions.",
      "Forms a dimer in water."
    ],
    "correctAnswer": 1,
    "explanation": "Orthoboric acid H₃BO₃ is a weak monobasic Lewis acid. It accepts a hydroxyl ion (OH⁻) from water: B(OH)₃ + H₂O ⇌ [B(OH)₄]⁻ + H⁺.",
    "difficulty": "Easy",
    "conceptTested": "Monobasic Lewis acid behavior of boric acid"
  },
  {
    "id": "prac-g13-3",
    "question": "Which of the following order of First Ionization Enthalpy (IE₁) for Group 13 elements is correct?",
    "options": [
      "B > Al > Ga > In > Tl",
      "B > Tl > Ga > Al > In",
      "B > Ga > Al > Tl > In",
      "Tl > B > Ga > Al > In"
    ],
    "correctAnswer": 1,
    "explanation": "Due to poor shielding by 3d and 4f electrons, the First Ionization Enthalpy order is non-monotonic: B (801) > Tl (589) > Ga (579) > Al (577) > In (558 kJ/mol).",
    "difficulty": "Medium",
    "conceptTested": "Group 13 non-monotonic Ionization Enthalpy trend"
  },
  {
    "id": "prac-g13-4",
    "question": "Addition of glycerol or mannitol to an aqueous solution of boric acid enables its direct titration against NaOH because:",
    "options": [
      "Glycerol acts as an oxidizing agent.",
      "It forms a stable chelate complex with [B(OH)₄]⁻, increasing acid strength.",
      "It neutralizes NaOH.",
      "It reduces boric acid to diborane."
    ],
    "correctAnswer": 1,
    "explanation": "Polyhydroxy compounds with cis-1,2-diols (glycerol/mannitol) react with [B(OH)₄]⁻ to form a stable cyclic chelate complex, shifting equilibrium to the right and turning boric acid into a strong monobasic acid titratable with NaOH.",
    "difficulty": "Hard",
    "conceptTested": "cis-1,2-diol chelation enhancement of boric acid"
  },
  {
    "id": "prac-g13-5",
    "question": "Aluminium metal becomes passive when treated with concentrated:",
    "options": [
      "Hydrochloric acid (HCl)",
      "Sulfuric acid (H₂SO₄)",
      "Nitric acid (HNO₃)",
      "Hydrofluoric acid (HF)"
    ],
    "correctAnswer": 2,
    "explanation": "Concentrated nitric acid (HNO₃) forms a protective, impervious, inert layer of aluminium oxide (Al₂O₃) on the surface of Aluminium metal, rendering it passive.",
    "difficulty": "Easy",
    "conceptTested": "Aluminium passivation by conc. HNO3"
  },
  {
    "id": "prac-chemgroupelements-6",
    "question": "Regarding Group 13 — Boron Family (Borax, Boric Acid, Diborane & Aluminium), which of the following statements correctly resolves a common misconception about \"Thinking Boric acid H₃BO₃ donates H⁺ ions like a typical Arrhenius/Brønsted acid.\"?",
    "options": [
      "H₃BO₃ is a weak MONOBASIC Lewis acid. It does NOT release its own protons; it accepts OH⁻ from water, freeing H⁺ ions from H₂O.",
      "Incorrect assumption: Thinking Boric acid H₃BO₃ donates H⁺ ions like a typical Arrhenius/Brønsted acid.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "H₃BO₃ is a weak MONOBASIC Lewis acid. It does NOT release its own protons; it accepts OH⁻ from water, freeing H⁺ ions from H₂O.. Direct question in NEET 2022! Incorrectly assuming H₃BO₃ donates 3 H⁺ ions leads to wrong answers.",
    "difficulty": "Medium",
    "conceptTested": "Group 13 — Boron Family (Borax, Boric Acid, Diborane & Aluminium) - Conceptual Clarity"
  },
  {
    "id": "prac-chemgroupelements-7",
    "question": "Regarding Group 13 — Boron Family (Borax, Boric Acid, Diborane & Aluminium), which of the following statements correctly resolves a common misconception about \"Assuming Gallium is larger than Aluminium because it lies below Al in Group 13.\"?",
    "options": [
      "Gallium (135 pm) is SMALLER than Aluminium (143 pm) due to poor screening by 10 inner 3d electrons.",
      "Incorrect assumption: Assuming Gallium is larger than Aluminium because it lies below Al in Group 13.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Gallium (135 pm) is SMALLER than Aluminium (143 pm) due to poor screening by 10 inner 3d electrons.. Frequently tested atomic radius order question in NEET 2019 and 2016.",
    "difficulty": "Medium",
    "conceptTested": "Group 13 — Boron Family (Borax, Boric Acid, Diborane & Aluminium) - Conceptual Clarity"
  },
  {
    "id": "prac-chemgroupelements-8",
    "question": "Regarding Group 13 — Boron Family (Borax, Boric Acid, Diborane & Aluminium), which of the following statements correctly resolves a common misconception about \"Believing BF₃ is the strongest Lewis acid among boron trihalides because Fluorine is most electronegative.\"?",
    "options": [
      "BF₃ is the WEAKEST Lewis acid among BX₃ due to strong pπ-pπ back-bonding. Lewis acidity order is BI₃ > BBr₃ > BCl₃ > BF₃.",
      "Incorrect assumption: Believing BF₃ is the strongest Lewis acid among boron trihalides because Fluorine is most electronegative.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "BF₃ is the WEAKEST Lewis acid among BX₃ due to strong pπ-pπ back-bonding. Lewis acidity order is BI₃ > BBr₃ > BCl₃ > BF₃.. Crucial assertion-reason and trend question in NEET/AIPMT.",
    "difficulty": "Medium",
    "conceptTested": "Group 13 — Boron Family (Borax, Boric Acid, Diborane & Aluminium) - Conceptual Clarity"
  },
  {
    "id": "prac-chemgroupelements-9",
    "question": "Regarding Group 13 — Boron Family (Borax, Boric Acid, Diborane & Aluminium), which of the following statements correctly resolves a common misconception about \"Thinking Boron atoms in Diborane are sp² hybridized because B form 3 bonds normally.\"?",
    "options": [
      "Both Boron atoms in Diborane (B₂H₆) are sp³ hybridized, forming 4 tetrahedral electron pair domains.",
      "Incorrect assumption: Thinking Boron atoms in Diborane are sp² hybridized because B form 3 bonds normally.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Both Boron atoms in Diborane (B₂H₆) are sp³ hybridized, forming 4 tetrahedral electron pair domains.. Tested in NEET 2023 statement verification questions.",
    "difficulty": "Medium",
    "conceptTested": "Group 13 — Boron Family (Borax, Boric Acid, Diborane & Aluminium) - Conceptual Clarity"
  },
  {
    "id": "prac-chemgroupelements-10",
    "question": "In the study of Group 13 — Boron Family (Borax, Boric Acid, Diborane & Aluminium), what is the exact definition and significance of \"Inert Pair Effect\"?",
    "options": [
      "The reluctance of the valence s-electrons (ns²) to participate in bond formation down a group in p-block elements, caused by poor shielding of intervening d and f electrons.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The reluctance of the valence s-electrons (ns²) to participate in bond formation down a group in p-block elements, caused by poor shielding of intervening d and f electrons.. In Group 13, +1 state stability increases down the group. Tl⁺ is more stable than Tl³⁺; hence TlCl₃ spontaneously decomposes to TlCl and Cl₂ (Tl³⁺ acts as oxidizing agent).",
    "difficulty": "Easy",
    "conceptTested": "Inert Pair Effect definition"
  }
],
  pyqs: [
    {
      id: 'pyq-g13-2023',
      year: 2023,
      exam: 'NEET UG 2023',
      question: 'Which of the following statement is INCORRECT regarding diborane?',
      options: [
        'It has two 3-centre-2-electron bonds.',
        'The four terminal B-H bonds are 2-centre-2-electron bonds.',
        'The four terminal hydrogen atoms and the two boron atoms lie in one plane.',
        'Both boron atoms are sp² hybridized.'
      ],
      correctAnswer: 3,
      explanation: 'Boron atoms in diborane (B₂H₆) are sp³ hybridized, not sp². The four terminal B-H bonds (2c-2e) and two B atoms are coplanar, while the two B-H-B bridge bonds (3c-2e) lie perpendicular.',
      difficulty: 'Easy',
      conceptTested: 'Diborane hybridization and structural geometry',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.3',
      verified: true
    },
    {
      id: 'pyq-g13-2022',
      year: 2022,
      exam: 'NEET UG 2022',
      question: 'Boric acid is an acid because its molecule:',
      options: [
        'Contains replaceable H⁺ ion',
        'Gives up a proton',
        'Accepts OH⁻ from water releasing proton',
        'Combines with proton from water'
      ],
      correctAnswer: 2,
      explanation: 'Boric acid B(OH)₃ acts as a weak monobasic Lewis acid by accepting an OH⁻ ion from water: B(OH)₃ + H₂O ⇌ [B(OH)₄]⁻ + H⁺.',
      difficulty: 'Easy',
      conceptTested: 'Lewis acid mechanism of boric acid in aqueous solution',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.3.2',
      verified: true
    },
    {
      id: 'pyq-g13-2021',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'Which of the following is an electron deficient molecule?',
      options: [
        'B₂H₆',
        'PH₃',
        'CH₄',
        'NH₃'
      ],
      correctAnswer: 0,
      explanation: 'Diborane (B₂H₆) has 12 valence electrons for 8 bonds, making it electron deficient and forcing it to form 3c-2e bridge bonds.',
      difficulty: 'Easy',
      conceptTested: 'Electron deficiency in diborane',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.3',
      verified: true
    },
    {
      id: 'pyq-g13-2020',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'Reaction of diborane with ammonia (NH₃) at low temperature in 1:2 ratio initially gives:',
      options: [
        '[BH₂(NH₃)₂]⁺ [BH₄]⁻',
        'B₂H₆·2NH₃',
        'Borazine (B₃N₃H₆)',
        'Boron nitride (BN)'
      ],
      correctAnswer: 0,
      explanation: 'Diborane undergoes unsymmetrical cleavage with excess NH₃ at low temperature to give ionic adduct [BH₂(NH₃)₂]⁺ [BH₄]⁻. Heating this at 450 K yields Borazine (B₃N₃H₆).',
      difficulty: 'Medium',
      conceptTested: 'Diborane reaction with ammonia and borazine synthesis',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.3.3',
      verified: true
    },
    {
      id: 'pyq-g13-2019',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'Identify the correct order of atomic radii for Group 13 elements:',
      options: [
        'B < Ga < Al < In < Tl',
        'B < Al < Ga < In < Tl',
        'B < Al < In < Ga < Tl',
        'B < Ga < In < Al < Tl'
      ],
      correctAnswer: 0,
      explanation: 'Due to poor shielding of 10 inner 3d electrons in Gallium (d-block contraction), Ga (135 pm) is smaller than Al (143 pm). Correct order: B (85 pm) < Ga (135 pm) < Al (143 pm) < In (167 pm) < Tl (170 pm).',
      difficulty: 'Medium',
      conceptTested: 'Group 13 atomic radius anomaly (Ga < Al)',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.2.1',
      verified: true
    },
    {
      id: 'pyq-g13-2018',
      year: 2018,
      exam: 'NEET UG 2018',
      question: 'In diborane, the two boron atoms and four terminal hydrogen atoms lie in one plane, while the two bridging hydrogen atoms lie:',
      options: [
        'Perpendicular to this plane (one above and one below)',
        'In the same plane',
        'At an angle of 45° to the plane',
        'Parallel to the plane'
      ],
      correctAnswer: 0,
      explanation: 'The two bridging H-atoms lie in a plane perpendicular to the plane containing the two B atoms and four terminal H atoms.',
      difficulty: 'Easy',
      conceptTested: '3D spatial geometry of diborane bridge bonds',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.3.3',
      verified: true
    },
    {
      id: 'pyq-g13-2014',
      year: 2014,
      exam: 'AIPMT 2014',
      question: 'Which of the following structure is similar to graphite?',
      options: [
        'BN (Boron Nitride)',
        'B',
        'B₄C',
        'B₂H₆'
      ],
      correctAnswer: 0,
      explanation: 'Boron nitride (BN) is isoelectronic with graphite and forms a hexagonal layered lattice structure known as "Inorganic Graphite".',
      difficulty: 'Easy',
      conceptTested: 'Inorganic graphite (Boron Nitride BN) structure',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.3',
      verified: true
    },
    {
      id: 'pyq-g13-2013',
      year: 2013,
      exam: 'AIPMT 2013',
      question: 'Which one of the following is a strong Lewis acid?',
      options: [
        'BI₃',
        'BCl₃',
        'BF₃',
        'BBr₃'
      ],
      correctAnswer: 0,
      explanation: 'Due to decreasing strength of pπ-pπ back-bonding (2p-2p in BF₃ > 2p-3p in BCl₃ > 2p-4p in BBr₃ > 2p-5p in BI₃), BI₃ has the weakest back-bonding and highest Lewis acidity.',
      difficulty: 'Medium',
      conceptTested: 'Lewis acidity order of boron trihalides',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.3.1',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Group 13 — Boron Family',
    confidenceLabel: 'HIGH',
    confidenceText: 'Verified against 8 official NEET UG / AIPMT paper appearances (8 direct questions).',
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
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 – 4 Marks per paper',
    yearWiseBreakdown: [
      { year: 2023, exam: 'NEET UG 2023', directPyqCount: 1, marks: 4, questionType: 'Diborane hybridization (sp3, not sp2)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2022, exam: 'NEET UG 2022', directPyqCount: 1, marks: 4, questionType: 'Boric acid Lewis acid mechanism (accepts OH-)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2021, exam: 'NEET UG 2021', directPyqCount: 1, marks: 4, questionType: 'Electron deficient molecule (B2H6)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2020, exam: 'NEET UG 2020', directPyqCount: 1, marks: 4, questionType: 'Reaction of diborane with NH3 -> [BH2(NH3)2]+ [BH4]-', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2019, exam: 'NEET UG 2019', directPyqCount: 1, marks: 4, questionType: 'Atomic radius anomaly (B < Ga < Al < In < Tl)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2018, exam: 'NEET UG 2018', directPyqCount: 1, marks: 4, questionType: 'Perpendicular orientation of bridging H in diborane', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2014, exam: 'AIPMT 2014', directPyqCount: 1, marks: 4, questionType: 'Inorganic graphite (Boron nitride BN)', classification: 'Direct', verificationStatus: 'Verified (AIPMT)' },
      { year: 2013, exam: 'AIPMT 2013', directPyqCount: 1, marks: 4, questionType: 'Strongest Lewis acid among BX3 (BI3)', classification: 'Direct', verificationStatus: 'Verified (AIPMT)' }
    ],
    sourceInfo: {
      dataSource: 'Official NEET UG / AIPMT Archives & NCERT Class 11 Chemistry',
      analysisPeriod: '2010 – 2024 (15 Verified Papers)',
      directPyqsAnalyzedCount: 8,
      classificationMethod: 'Strict topic-level classification; chapter-level weightage was not used.',
      disclaimer: 'Historical frequency is not a prediction of the next NEET paper.'
    }
  }
};
