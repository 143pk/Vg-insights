import { DetailedTopicContent } from '../../types/neet';

export const chemGroup14ElementsDetails: DetailedTopicContent = {
  topicId: 'chem-group-14-elements',
  topicName: 'Group 14 — Carbon Family (Allotropes, Silicates, Silicones & CO/CO₂)',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Inorganic Chemistry (Class 11)',
  chapter: 'p-Block Elements (Group 13 & 14)',

  whatIsThisTopic:
    'Group 14 of the Periodic Table, known as the Carbon Family, consists of Carbon (C), Silicon (Si), Germanium (Ge), Tin (Sn), and Lead (Pb). This topic covers valence electronic configuration [ns² np²], periodic trends in atomic radii, ionization enthalpy anomalies (Pb > Sn due to 4f f-block contraction), electronegativity, catenation power (C >> Si > Ge ≈ Sn), pπ-pπ multiple bonding, oxidation states (+4 and +2) and the Inert Pair Effect (Pb²⁺ > Pb⁴⁺ vs Sn⁴⁺ > Sn²⁺), the unique allotropes of Carbon (Diamond, Graphite, Fullerenes C₆₀, Graphene), structure and properties of Silicon Dioxide (SiO₂ network), full classification of Silicates (Ortho, Pyro, Chain, Sheet, 3D framework, and Zeolites), preparation and cross-linking of Silicones, and oxides of Carbon (CO toxicity and CO₂ reactions). Mastering these concepts and NCERT exceptions is paramount for NEET UG Chemistry.',

  basicIdea: [
    '1. General Configuration & Physical States: Group 14 elements have ns² np² valence configuration. C and Si are non-metals, Ge is a metalloid, while Sn and Pb are true soft metals.',
    '2. Oxidation States & Inert Pair Effect: Group 14 exhibits +4 and +2 oxidation states. The +4 state is stable for lighter elements (C, Si, Ge), but down the group, stability of +2 state INCREASES due to the Inert Pair Effect: C⁺⁴ > Si⁺⁴ > Ge⁺⁴ > Sn⁺⁴ > Pb⁺⁴, whereas Pb²⁺ > Sn²⁺ > Ge²⁺ > Si²⁺ > C²⁺. Pb²⁺ is most stable, making Pb⁴⁺ compounds (like PbO₂, PbCl₄) strong OXIDIZING AGENTS. Conversely, Sn²⁺ (like SnCl₂) acts as a REDUCING AGENT (Sn²⁺ → Sn⁴⁺ + 2e⁻).',
    '3. Catenation Power & Multiple Bonding: Carbon possesses an extraordinary ability to form long stable chains (catenation) due to its small size and very high C-C bond enthalpy (348 kJ/mol). Catenation Order: C >> Si > Ge ≈ Sn (Pb shows no catenation). Carbon easily forms pπ-pπ multiple bonds (C=C, C≡C, C=O), whereas heavier elements form single bonds (e.g., SiO₂ is a giant 3D network solid with Si-O single bonds, unlike gaseous CO₂ with C=O double bonds).',
    '4. Allotropes of Carbon: 1) Diamond: sp³ hybridized C atoms in 3D tetrahedral network (C-C = 154 pm), hardest natural substance, electrical insulator. 2) Graphite: sp² hybridized C atoms in 2D hexagonal layers (interlayer spacing 340 pm, C-C = 141.5 pm) held by weak van der Waals forces; soft, slippery solid lubricant, good conductor of electricity due to delocalized mobile π electrons. 3) Fullerene (C₆₀): Cage-like soccer ball (geodesic dome) with 20 six-membered rings (hexagons) and 12 five-membered rings (pentagons); sp² hybridized. 4) Graphene: Single 2D hexagonal sheet of sp² carbon.',
    '5. Silicon Dioxide (SiO₂) & Silicates: SiO₂ is a 3D covalent network solid where each Si atom is sp³ hybridized and bonded to 4 Oxygen atoms tetrahedrally, with each O atom shared between 2 Si atoms. Silicates contain fundamental (SiO₄)⁴⁻ tetrahedra classified by number of shared vertices: Ortho (0 shared O), Pyro (1 shared O), Chain (2 shared O), Sheet (3 shared O), and 3D Framework (4 shared O). Zeolites are 3D aluminosilicates used as shape-selective catalysts (ZSM-5) and water softeners.',
    '6. Silicones: Organosilicon polymers containing repeating -(R₂SiO)- units with hydrophobic alkyl groups. Hydrolysis of (CH₃)₂SiCl₂ yields linear silicones, (CH₃)₃SiCl acts as a chain stopper, and CH₃SiCl₃ yields cross-linked 3D silicones. Silicones are thermally stable, water repellent, and chemically inert.',
    '7. Oxides of Carbon (CO & CO₂): CO is a neutral, poisonous gas with 1 σ and 2 π bonds (:C≡O:) that binds to hemoglobin 300 times stronger than oxygen, forming carboxyhemoglobin. CO₂ is an acidic gas with linear structure (O=C=O) that turns lime water Ca(OH)₂ milky due to insoluble CaCO₃, which dissolves in excess CO₂ forming soluble Ca(HCO₃)₂.'
  ],

  importantTerms: [
    {
      term: 'Inert Pair Effect in Group 14',
      definition: 'The reluctance of inner valence 6s² electrons in Lead (Pb) to unpair and bond, stabilizing the +2 oxidation state over +4.',
      neetNote: 'Pb²⁺ is stable; Pb⁴⁺ is a strong oxidizing agent (PbO₂). Sn²⁺ is a strong reducing agent (SnCl₂).'
    },
    {
      term: 'Catenation',
      definition: 'The self-linking capability of atoms of an element to form long open or closed chains through covalent bonds.',
      neetNote: 'Catenation order: C >> Si > Ge ≈ Sn. Carbon shows maximum catenation due to strong C-C single bond enthalpy (348 kJ/mol).'
    },
    {
      term: 'Buckminsterfullerene (C₆₀)',
      definition: 'An allotrope of carbon consisting of 60 carbon atoms arranged in a spherical cage structure composed of 20 hexagons and 12 pentagons.',
      neetNote: 'High-yield NCERT fact: Six-membered rings fuse with both 5- and 6-membered rings, BUT five-membered rings fuse ONLY with 6-membered rings!'
    },
    {
      term: 'Silicates',
      definition: 'Inorganic compounds containing Silicon and Oxygen in tetrahedral (SiO₄)⁴⁻ structural units sharing zero to four oxygen vertices.',
      neetNote: 'Ortho (0 shared), Pyro (1 shared, Si₂O₇⁶⁻), Chain (2 shared, SiO₃²⁻), Sheet (3 shared, Si₂O₅²⁻), 3D Framework (4 shared, SiO₂).'
    },
    {
      term: 'Silicones',
      definition: 'Organosilicon polymers with empirical formula R₂SiO consisting of a -Si-O-Si- backbone with hydrophobic organic alkyl or aryl groups.',
      neetNote: 'Linear silicones formed from R₂SiCl₂; cross-linked 3D silicones from RSiCl₃; chain terminated by R₃SiCl.'
    },
    {
      term: 'Zeolites & ZSM-5',
      definition: 'Microporous 3D aluminosilicates where some Si⁴⁺ in SiO₂ framework are replaced by Al³⁺, creating negative charges balanced by cations.',
      neetNote: 'ZSM-5 is a shape-selective zeolite catalyst that converts alcohols (methanol) directly into gasoline (hydrocarbons).'
    },
    {
      term: 'Carboxyhemoglobin',
      definition: 'A stable complex formed between carbon monoxide (CO) and hemoglobin in blood, preventing oxygen transport.',
      neetNote: 'CO binds to hemoglobin ~300 times more strongly than O₂, causing asphyxiation and death.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Group 14 Elements, Periodic Trends & Oxidation States',
      paragraphs: [
        'Group 14 consists of Carbon, Silicon, Germanium, Tin, and Lead. Their ground state electronic configuration is ns² np². Carbon is the 17th most abundant element by mass in the Earth\'s crust, while Silicon is the 2nd most abundant (27.7% by mass).',
        'Atomic Radii & Ionization Enthalpy: Atomic radius increases significantly from C to Si, followed by a small increase from Si to Pb (C: 77 pm < Si: 118 pm < Ge: 122 pm < Sn: 140 pm < Pb: 146 pm). The First Ionization Enthalpy decreases from C to Sn, but Lead (Pb, 715 kJ/mol) has a HIGHER IE₁ than Tin (Sn, 708 kJ/mol)! This anomaly is caused by poor shielding of 14 inner 4f electrons (lanthanoid contraction) in Lead.',
        'Oxidation States & Redox Behaviour: Group 14 elements exhibit +4 and +2 oxidation states. Carbon and Silicon show predominantly +4 oxidation state in covalent compounds. Germanium forms stable +4 compounds, with only a few +2 compounds. Tin forms compounds in both +2 and +4 states; Sn²⁺ is a REDUCING AGENT (e.g. 2Fe³⁺ + Sn²⁺ → 2Fe²⁺ + Sn⁴⁺). Lead forms stable +2 compounds (Pb²⁺); Pb⁴⁺ compounds are strong OXIDIZING AGENTS (e.g. PbO₂ + 4HCl → PbCl₂ + Cl₂ + 2H₂O).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 320" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">GROUP 14 OXIDATION STATES & INERT PAIR EFFECT REDOX MAP</text>

  <!-- Oxidation State Spectrum Box -->
  <rect x="40" y="55" width="340" height="240" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="210" y="82" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="bold">+4 vs +2 STABILITY TREND</text>

  <text x="60" y="120" fill="#4ade80" font-size="12" font-weight="bold">• +4 State Stability (Decreases Down Group):</text>
  <text x="80" y="142" fill="#f8fafc" font-size="13" font-weight="bold">C⁺⁴ &gt; Si⁺⁴ &gt; Ge⁺⁴ &gt; Sn⁺⁴ &gt; Pb⁺⁴</text>

  <text x="60" y="180" fill="#f43f5e" font-size="12" font-weight="bold">• +2 State Stability (Increases Down Group):</text>
  <text x="80" y="202" fill="#f8fafc" font-size="13" font-weight="bold">Pb²⁺ &gt; Sn²⁺ &gt; Ge²⁺ &gt; Si²⁺ &gt; C²⁺</text>

  <rect x="55" y="225" width="310" height="50" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="210" y="245" text-anchor="middle" fill="#fde047" font-size="11" font-weight="bold">Inert Pair Effect Cause:</text>
  <text x="210" y="262" text-anchor="middle" fill="#f8fafc" font-size="10">Reluctance of valence 6s² e⁻ in Pb to unpair</text>

  <!-- Redox Action Box -->
  <rect x="420" y="55" width="340" height="240" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="590" y="82" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">HIGH-YIELD REDOX BEHAVIOUR</text>

  <rect x="435" y="105" width="310" height="70" rx="8" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="590" y="128" text-anchor="middle" fill="#fda4af" font-size="12" font-weight="bold">Pb⁴⁺ Compounds = STRONG OXIDIZING AGENTS</text>
  <text x="590" y="148" text-anchor="middle" fill="#f8fafc" font-size="11">Pb⁴⁺ + 2e⁻ → Pb²⁺ (E° = +1.46 V)</text>
  <text x="590" y="165" text-anchor="middle" fill="#94a3b8" font-size="10.5">Example: PbO₂ + 4HCl → PbCl₂ + Cl₂ + 2H₂O</text>

  <rect x="435" y="190" width="310" height="70" rx="8" fill="#0f172a" stroke="#4ade80" stroke-width="1.5"/>
  <text x="590" y="213" text-anchor="middle" fill="#86efac" font-size="12" font-weight="bold">Sn²⁺ Compounds = STRONG REDUCING AGENTS</text>
  <text x="590" y="233" text-anchor="middle" fill="#f8fafc" font-size="11">Sn²⁺ → Sn⁴⁺ + 2e⁻</text>
  <text x="590" y="250" text-anchor="middle" fill="#94a3b8" font-size="10.5">Example: 2FeCl₃ + SnCl₂ → 2FeCl₂ + SnCl₄</text>
</svg>`,
        caption: 'Group 14 oxidation state stability trends and contrasting redox behavior of Lead(IV) and Tin(II).'
      }
    },
    {
      heading: '2. Allotropes of Carbon — Diamond, Graphite, Fullerene & Graphene',
      paragraphs: [
        'Carbon exhibits allotropy due to catenation and pπ-pπ multiple bond capability. The principal crystalline allotropes are Diamond, Graphite, and Fullerenes.',
        '1. Diamond: Each Carbon atom undergoes sp³ hybridization and is bonded to 4 adjacent Carbon atoms in a rigid, directional 3D tetrahedral network. C-C bond length is 154 pm, and bond angle is 109.5°. It is the hardest naturally occurring substance on Earth. Because all valence electrons are firmly localized in single covalent σ bonds, diamond has NO free electrons and acts as an electrical insulator.',
        '2. Graphite: Carbon atoms undergo sp² hybridization to form 2D planar hexagonal rings. Each Carbon is bonded to 3 neighbors in the layer (C-C bond length 141.5 pm), leaving 1 unhybridized 2p electron containing a delocalized π electron. The parallel 2D sheets are held together by weak van der Waals forces at a distance of 340 pm. Layers can easily slide over one another, making graphite soft, greasy, and an excellent solid lubricant. The delocalized π electrons move freely along the layers, making graphite a good conductor of electricity.',
        '3. Fullerene (C₆₀ / Buckminsterfullerene): C₆₀ is formed by heating graphite in an electric arc in an inert atmosphere (He or Ar). It has a cage-like soccer ball structure (geodesic dome) with 60 sp² hybridized carbon atoms. It contains 20 six-membered rings (hexagons) and 12 five-membered rings (pentagons). Critical NCERT Fact: A 6-membered ring can fuse with both 5- and 6-membered rings, BUT a 5-membered ring can fuse ONLY with 6-membered rings! Carbon atoms form single bonds (143.5 pm) and double bonds (138.3 pm).',
        '4. Graphene: A single two-dimensional layer of sp² hybridized carbon atoms arranged in a honeycomb lattice. It possesses extreme electrical conductivity, mechanical strength, and thermal conductivity.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 360" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">COMPARISON OF CARBON ALLOTROPES</text>

  <!-- Diamond Card -->
  <rect x="30" y="55" width="230" height="280" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="145" y="85" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="black">DIAMOND</text>
  <g fill="#f8fafc" font-size="11.5">
    <text x="45" y="118" fill="#4ade80" font-weight="bold">• Hybridization: sp³</text>
    <text x="45" y="142" font-weight="bold">• Structure: 3D Tetrahedral</text>
    <text x="45" y="166">• C-C Bond: 154 pm</text>
    <text x="45" y="190">• Bond Angle: 109.5°</text>
    <text x="45" y="214" fill="#fbbf24" font-weight="bold">• Hardness: Extremely Hard</text>
    <text x="45" y="238" fill="#f43f5e" font-weight="bold">• Conduction: INSULATOR</text>
    <text x="45" y="262">• Free e⁻: ZERO (0)</text>
    <text x="45" y="295" fill="#94a3b8" font-size="10">Used as abrasive &amp; gems</text>
  </g>

  <!-- Graphite Card -->
  <rect x="285" y="55" width="230" height="280" rx="12" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="400" y="85" text-anchor="middle" fill="#4ade80" font-size="15" font-weight="black">GRAPHITE</text>
  <g fill="#f8fafc" font-size="11.5">
    <text x="300" y="118" fill="#4ade80" font-weight="bold">• Hybridization: sp²</text>
    <text x="300" y="142" font-weight="bold">• Structure: 2D Layers</text>
    <text x="300" y="166">• C-C Bond: 141.5 pm</text>
    <text x="300" y="190">• Interlayer: 340 pm (vdW)</text>
    <text x="300" y="214" fill="#fbbf24" font-weight="bold">• Soft &amp; Slippery (Lubricant)</text>
    <text x="300" y="238" fill="#4ade80" font-weight="bold">• Conduction: CONDUCTOR</text>
    <text x="300" y="262">• Free e⁻: 1 mobile π e⁻ / C</text>
    <text x="300" y="295" fill="#94a3b8" font-size="10">Thermodynamically most stable</text>
  </g>

  <!-- Fullerene Card -->
  <rect x="540" y="55" width="230" height="280" rx="12" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="655" y="85" text-anchor="middle" fill="#fbbf24" font-size="15" font-weight="black">FULLERENE (C₆₀)</text>
  <g fill="#f8fafc" font-size="11.5">
    <text x="555" y="118" fill="#4ade80" font-weight="bold">• Hybridization: sp²</text>
    <text x="555" y="142" font-weight="bold">• Structure: Soccer Ball</text>
    <text x="555" y="168" fill="#38bdf8" font-weight="bold">• 20 Hexagons (6-rings)</text>
    <text x="555" y="192" fill="#f43f5e" font-weight="bold">• 12 Pentagons (5-rings)</text>
    <text x="555" y="220" font-size="10.5" fill="#fde047">⚠️ 5-ring fused ONLY to 6-ring</text>
    <text x="555" y="244" font-size="10.5" fill="#86efac">• 6-ring fused to 5 &amp; 6 rings</text>
    <text x="555" y="268">• C-C: 143.5 &amp; 138.3 pm</text>
    <text x="555" y="295" fill="#94a3b8" font-size="10">Purest allotrope (no dangling H)</text>
  </g>
</svg>`,
        caption: 'Tri-part comparative map of Diamond, Graphite, and Buckminsterfullerene C₆₀ structural properties.'
      }
    },
    {
      heading: '3. Silicon Dioxide (SiO₂) & Classification of Silicates',
      paragraphs: [
        'Silicon Dioxide (SiO₂ / Silica): Silicon dioxide is a 3D network covalent solid where Silicon is sp³ hybridized. Each Si atom is tetrahedrally bonded to 4 Oxygen atoms, and each Oxygen atom is shared between 2 Silicon atoms, yielding the empirical formula SiO₂. It forms an 8-membered ring network of Si and O. Because of high Si-O bond enthalpy (466 kJ/mol), SiO₂ is unreactive; it does not react with halogens, hydrogen, or acids (except HF forming H₂SiF₆) even at elevated temperatures, but reacts with hot conc. NaOH (SiO₂ + 2NaOH → Na₂SiO₃ + H₂O).',
        'Silicate Structures & Classification: The fundamental building unit of all silicates is the tetrahedral (SiO₄)⁴⁻ ion with Silicon at the center. Depending on how many oxygen atoms (0, 1, 2, 3, or 4) are shared between adjacent (SiO₄)⁴⁻ tetrahedra, silicates are classified into six distinct types:',
        '1. Orthosilicates (0 shared O): Discrete (SiO₄)⁴⁻ units. Examples: Phenacite (Be₂SiO₄), Willemite (Zn₂SiO₄), Olivine (Mg₂SiO₄).',
        '2. Pyrosilicates / Disilicates (1 shared O): Formed by sharing 1 oxygen vertex between two tetrahedra, giving formula (Si₂O₇)⁶⁻. Example: Thortveitite (Sc₂Si₂O₇).',
        '3. Chain Silicates (2 shared O):',
        '   a) Single Chain Pyroxenes: Shared 2 vertices forming long linear chains with formula (SiO₃)n²ⁿ⁻. Example: Spodumene LiAl(SiO₃)₂.',
        '   b) Double Chain Amphiboles: Formed when two single chains link by sharing oxygen atoms, giving formula (Si₄O₁₁)n⁶ⁿ⁻. Example: Asbestos.',
        '4. Sheet / Layer Silicates (3 shared O): Each tetrahedron shares 3 oxygen vertices to form 2D sheet layers of formula (Si₂O₅)n²ⁿ⁻. Examples: Talc, Kaolinite, Mica.',
        '5. 3D Framework Silicates (4 shared O): All 4 oxygen vertices are shared in 3D network of formula (SiO₂)n. Examples: Quartz, Feldspar, Zeolites.',
        '6. Zeolites: 3D aluminosilicates where some Si⁴⁺ in the SiO₂ framework are replaced by Al³⁺ ions. To balance the negative charge, cations like Na⁺, K⁺, or Ca²⁺ are incorporated into honeycombed microporous channels. ZSM-5 is a shape-selective zeolite catalyst that converts methanol directly into synthetic gasoline.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 340" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">SILICATE CLASSIFICATION SPECTRUM & OXYGEN SHARING</text>

  <!-- Grid Table -->
  <rect x="30" y="55" width="740" height="260" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>

  <!-- Headers -->
  <line x1="30" y1="95" x2="770" y2="95" stroke="#334155" stroke-width="2"/>
  <g fill="#38bdf8" font-size="12" font-weight="black">
    <text x="50" y="80">SILICATE TYPE</text>
    <text x="210" y="80">SHARED O</text>
    <text x="320" y="80">ANION FORMULA</text>
    <text x="520" y="80">NCERT EXAMPLES</text>
  </g>

  <!-- Rows -->
  <g fill="#f8fafc" font-size="11.5">
    <!-- Ortho -->
    <text x="50" y="125" fill="#4ade80" font-weight="bold">1. Orthosilicate</text>
    <text x="235" y="125" font-weight="bold">0</text>
    <text x="320" y="125" fill="#fbbf24" font-weight="bold">(SiO₄)⁴⁻</text>
    <text x="520" y="125">Phenacite Be₂SiO₄, Olivine Mg₂SiO₄</text>
    <line x1="30" y1="138" x2="770" y2="138" stroke="#334155" stroke-width="1"/>

    <!-- Pyro -->
    <text x="50" y="158" fill="#4ade80" font-weight="bold">2. Pyrosilicate</text>
    <text x="235" y="158" font-weight="bold">1</text>
    <text x="320" y="158" fill="#fbbf24" font-weight="bold">(Si₂O₇)⁶⁻</text>
    <text x="520" y="158">Thortveitite Sc₂Si₂O₇, Hemimorphite</text>
    <line x1="30" y1="171" x2="770" y2="171" stroke="#334155" stroke-width="1"/>

    <!-- Chain -->
    <text x="50" y="191" fill="#4ade80" font-weight="bold">3. Chain (Pyroxene)</text>
    <text x="235" y="191" font-weight="bold">2</text>
    <text x="320" y="191" fill="#fbbf24" font-weight="bold">(SiO₃)n²ⁿ⁻</text>
    <text x="520" y="191">Spodumene LiAl(SiO₃)₂, Diopside</text>
    <line x1="30" y1="204" x2="770" y2="204" stroke="#334155" stroke-width="1"/>

    <!-- Amphibole -->
    <text x="50" y="224" fill="#4ade80" font-weight="bold">4. Double Chain</text>
    <text x="235" y="224" font-weight="bold">2.5</text>
    <text x="320" y="224" fill="#fbbf24" font-weight="bold">(Si₄O₁₁)n⁶ⁿ⁻</text>
    <text x="520" y="224">Asbestos, Tremolite</text>
    <line x1="30" y1="237" x2="770" y2="237" stroke="#334155" stroke-width="1"/>

    <!-- Sheet -->
    <text x="50" y="257" fill="#4ade80" font-weight="bold">5. Sheet / Layer</text>
    <text x="235" y="257" font-weight="bold">3</text>
    <text x="320" y="257" fill="#fbbf24" font-weight="bold">(Si₂O₅)n²ⁿ⁻</text>
    <text x="520" y="257">Talc, Kaolinite, Mica</text>
    <line x1="30" y1="270" x2="770" y2="270" stroke="#334155" stroke-width="1"/>

    <!-- 3D -->
    <text x="50" y="290" fill="#4ade80" font-weight="bold">6. 3D Framework</text>
    <text x="235" y="290" font-weight="bold">4</text>
    <text x="320" y="290" fill="#fbbf24" font-weight="bold">(SiO₂)n</text>
    <text x="520" y="290">Quartz, Feldspar, Zeolites (ZSM-5)</text>
  </g>
</svg>`,
        caption: 'Master lookup guide for Silicate classification based on the number of oxygen atoms shared per SiO₄ tetrahedron.'
      }
    },
    {
      heading: '4. Silicones — Preparation, Polymerization & Properties',
      paragraphs: [
        'Silicones: Silicones are synthetic organosilicon polymers containing repeating R₂SiO units (where R = -CH₃, -C₂H₅, or -C₆H₅) linked by a -Si-O-Si- backbone.',
        'Preparation of Silicones: When methyl chloride reacts with silicon in the presence of copper catalyst at 570 K, a mixture of methylchlorosilanes is formed: 2CH₃Cl + Si --(Cu / 570K)--> (CH₃)₂SiCl₂.',
        'Polymerization Steps:',
        '1) Linear Silicones: Hydrolysis of dichlorosilane (CH₃)₂SiCl₂ yields dimethylsilanol (CH₃)₂Si(OH)₂. Condensation polymerisation of (CH₃)₂Si(OH)₂ with loss of water molecules forms long linear silicone chains: -(Si(CH₃)₂-O-Si(CH₃)₂-O)n-.',
        '2) Chain Termination: Addition of monochlorosilane (CH₃)₃SiCl yields trimethylsilanol (CH₃)₃SiOH which has only ONE -OH group. It reacts with the growing chain end and STOPs further polymerisation, controlling the molecular weight of the silicone polymer!',
        '3) Cross-linked 3D Silicones: Hydrolysis of trichlorosilane CH₃SiCl₃ yields CH₃Si(OH)₃ which possesses THREE -OH groups. Condensation occurs in three directions, producing complex cross-linked 3D network silicones.',
        'Properties & Uses: The non-polar organic alkyl groups (like -CH₃) point outwards, surrounding the -Si-O-Si- backbone and giving silicones a strong HYDROPHOBIC (water repellent) nature. They also exhibit high thermal stability, high dielectric strength, resistance to oxidation and chemicals, and remain flexible over wide temperature ranges. Used in water-proof coatings, high-temperature lubricants, sealants, electrical insulators, and surgical implants.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 320" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">SILICONE POLYMERIZATION PATHWAYS & STRUCTURAL TYPES</text>

  <!-- Dichlorosilane pathway (Linear) -->
  <rect x="40" y="55" width="340" height="240" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="210" y="82" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">1. LINEAR SILICONES (From R₂SiCl₂)</text>

  <rect x="55" y="100" width="310" height="40" rx="6" fill="#0f172a" stroke="#4ade80" stroke-width="1"/>
  <text x="210" y="125" text-anchor="middle" fill="#f8fafc" font-size="11">R₂SiCl₂ + 2H₂O → R₂Si(OH)₂ + 2HCl</text>

  <text x="210" y="155" fill="#94a3b8" font-size="11" text-anchor="middle">↓ Polymerization (-H₂O)</text>

  <rect x="55" y="168" width="310" height="50" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="210" y="190" text-anchor="middle" fill="#fde047" font-size="12" font-weight="bold">-[Si(R)₂ - O - Si(R)₂ - O]n-</text>
  <text x="210" y="208" text-anchor="middle" fill="#f8fafc" font-size="10">(Linear flexible chain)</text>

  <rect x="55" y="228" width="310" height="52" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
  <text x="210" y="248" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">Chain Stopper: R₃SiCl</text>
  <text x="210" y="265" text-anchor="middle" fill="#f8fafc" font-size="10">R₃SiOH has 1 -OH → Terminates polymer chain!</text>

  <!-- Trichlorosilane pathway (Cross-linked) -->
  <rect x="420" y="55" width="340" height="240" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="590" y="82" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="bold">2. CROSS-LINKED SILICONES (From RSiCl₃)</text>

  <rect x="435" y="100" width="310" height="40" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1"/>
  <text x="590" y="125" text-anchor="middle" fill="#f8fafc" font-size="11">RSiCl₃ + 3H₂O → RSi(OH)₃ + 3HCl</text>

  <text x="590" y="155" fill="#94a3b8" font-size="11" text-anchor="middle">↓ 3D Condensation (-H₂O)</text>

  <rect x="435" y="168" width="310" height="112" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1"/>
  <text x="590" y="190" text-anchor="middle" fill="#fda4af" font-size="12" font-weight="bold">Rigid 3D Network Silicone</text>
  <text x="590" y="210" text-anchor="middle" fill="#f8fafc" font-size="10">Condensation occurs in 3 directions</text>

  <text x="590" y="240" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">Key Properties:</text>
  <text x="590" y="258" fill="#f8fafc" font-size="10" text-anchor="middle">Hydrophobic (alkyl groups out) | Thermal Stability</text>
</svg>`,
        caption: 'Formation of linear silicones from R₂SiCl₂, chain stopping via R₃SiCl, and 3D cross-linked silicones from RSiCl₃.'
      }
    },
    {
      heading: '5. Carbon Oxides — Carbon Monoxide (CO) & Carbon Dioxide (CO₂)',
      paragraphs: [
        'Carbon Monoxide (CO): CO is a colorless, odorless, water-insoluble, neutral gas formed by incomplete combustion of carbon or carbon compounds: 2C + O₂ → 2CO. Laboratory preparation: Dehydration of formic acid with concentrated H₂SO₄ at 373 K: HCOOH --(conc. H₂SO₄ / 373K)--> CO + H₂O.',
        'Industrial Synthesis of Producer Gas & Water Gas: 1) Water Gas (Synthesis Gas / Syn-gas): C(s) + H₂O(g) --1273K--> CO(g) + H₂(g). 2) Producer Gas: 2C(s) + O₂(g) + 4N₂(g) --1273K--> 2CO(g) + 4N₂(g).',
        'Bonding & Toxicity of CO: CO has a triple bond between C and O containing 1 σ and 2 π bonds (:C≡O:), where one π bond is formed by coordinate donation from O to C. Carbon monoxide acts as a powerful reducing agent, reducing metal oxides (e.g., Fe₂O₃ + 3CO → 2Fe + 3CO₂). Toxicity: CO combines with hemoglobin in blood to form CARBOXYHEMOGLOBIN, which is ~300 times more stable than oxyhemoglobin. This prevents hemoglobin from binding oxygen, leading to asphyxiation and death.',
        'Carbon Dioxide (CO₂): CO₂ is a colorless, odorless, acidic gas prepared by complete combustion of carbon or by reaction of CaCO₃ with dilute HCl: CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O. It has a linear sp hybridized geometry (O=C=O) with C-O bond length 115 pm and dipole moment zero.',
        'Lime Water Reaction Cycle: When CO₂ is passed through lime water Ca(OH)₂, it turns MILKY due to formation of insoluble Calcium Carbonate precipitate: Ca(OH)₂ + CO₂ → CaCO₃↓ (white ppt) + H₂O. When excess CO₂ is passed, the milkiness DISAPPEARS due to formation of soluble Calcium Hydrogen Carbonate: CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂(aq) (clear solution).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 300" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">CARBON MONOXIDE TOXICITY & LIME WATER CO₂ REACTION CYCLE</text>

  <!-- CO Toxicity Box -->
  <rect x="40" y="55" width="340" height="220" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="210" y="80" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="bold">CARBON MONOXIDE (CO) TOXICITY</text>

  <rect x="55" y="100" width="310" height="42" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1"/>
  <text x="210" y="118" text-anchor="middle" fill="#fda4af" font-size="11" font-weight="bold">Hb + CO ⇌ Carboxyhemoglobin</text>
  <text x="210" y="134" text-anchor="middle" fill="#f8fafc" font-size="10">Complex is ~300× more stable than Oxyhemoglobin!</text>

  <text x="60" y="170" fill="#f8fafc" font-size="11">• Blocks O₂ transport in bloodstream → Asphyxiation.</text>
  <text x="60" y="190" fill="#38bdf8" font-size="11">• Water Gas = CO + H₂ (Syn-gas)</text>
  <text x="60" y="210" fill="#fbbf24" font-size="11">• Producer Gas = CO + N₂</text>
  <text x="60" y="230" fill="#4ade80" font-size="11">• CO is a NEUTRAL oxide (does not react with water/bases).</text>

  <!-- Lime Water Cycle Box -->
  <rect x="420" y="55" width="340" height="220" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="590" y="80" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">LIME WATER Ca(OH)₂ REACTION CYCLE</text>

  <rect x="435" y="100" width="310" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
  <text x="590" y="120" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">Initial CO₂ Addition (Turns Milky):</text>
  <text x="590" y="138" text-anchor="middle" fill="#f8fafc" font-size="10">Ca(OH)₂ + CO₂ → CaCO₃↓ (White ppt) + H₂O</text>

  <text x="590" y="172" fill="#94a3b8" font-size="11" text-anchor="middle">↓ Add Excess CO₂</text>

  <rect x="435" y="185" width="310" height="50" rx="6" fill="#0f172a" stroke="#4ade80" stroke-width="1"/>
  <text x="590" y="205" text-anchor="middle" fill="#86efac" font-size="11" font-weight="bold">Excess CO₂ Addition (Milkiness Disappears):</text>
  <text x="590" y="223" text-anchor="middle" fill="#f8fafc" font-size="10">CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂(aq) (Clear solution)</text>
</svg>`,
        caption: 'Carbon monoxide toxicity mechanism and Calcium Carbonate lime water reaction cycle with excess CO₂.'
      }
    }
  ],

  formulae: [
    {
      title: 'Inert Pair Effect +2 vs +4 Stability in Group 14',
      formula: '+4 State Stability: C⁺⁴ > Si⁺⁴ > Ge⁺⁴ > Sn⁺⁴ > Pb⁺⁴ | +2 State Stability: Pb²⁺ > Sn²⁺ > Ge²⁺ > Si²⁺ > C²⁺',
      variables: 'Pb²⁺ is stable; Pb⁴⁺ is strong oxidizing agent; Sn²⁺ is reducing agent',
      whenToUse: 'Evaluating redox reactions and thermal stability of Group 14 halides and oxides.'
    },
    {
      title: 'Catenation Power Order',
      formula: 'C >> Si > Ge ≈ Sn',
      variables: 'Carbon C-C bond enthalpy = 348 kJ/mol',
      whenToUse: 'Predicting chain forming ability among Group 14 elements.'
    },
    {
      title: 'Silicone Polymerization Products',
      formula: 'R₂SiCl₂ + 2H₂O → Linear Silicones | RSiCl₃ + 3H₂O → Cross-linked 3D Silicones | R₃SiCl + H₂O → Chain Stopper',
      variables: 'R = Methyl or Phenyl group',
      whenToUse: 'Determining the polymer structure formed from chlorosilane precursors.'
    }
  ],

  neetImportantPoints: [
    '📌 Lead First Ionization Enthalpy (Pb, 715 kJ/mol) is HIGHER than Tin (Sn, 708 kJ/mol) due to 14 4f electrons shielding failure (lanthanoid contraction).',
    '📌 Pb⁴⁺ compounds (e.g. PbO₂, PbCl₄) are strong OXIDIZING AGENTS because Pb²⁺ is more stable due to the Inert Pair Effect.',
    '📌 Sn²⁺ compounds (e.g. SnCl₂) act as strong REDUCING AGENTS (Sn²⁺ → Sn⁴⁺ + 2e⁻).',
    '📌 Catenation order: C >> Si > Ge ≈ Sn.',
    '📌 Graphite is sp² hybridized, planar layers, soft lubricant, and conducts electricity due to mobile π electrons.',
    '📌 Diamond is sp³ hybridized, 3D network, hardest insulator (no free electrons).',
    '📌 Buckminsterfullerene (C₆₀) contains 20 six-membered rings and 12 five-membered rings. 5-membered rings fuse ONLY with 6-membered rings!',
    '📌 Basic structural building block of all silicates is the tetrahedral (SiO₄)⁴⁻ ion.',
    '📌 Silicate classification by shared O atoms: Ortho (0), Pyro (1), Single Chain (2), Double Chain (2.5), Sheet (3), 3D Framework (4).',
    '📌 Hydrolysis of R₂SiCl₂ yields LINEAR silicones; RSiCl₃ yields CROSS-LINKED 3D silicones; R₃SiCl acts as a CHAIN STOPPER.',
    '📌 Zeolite catalyst ZSM-5 converts methanol directly into synthetic gasoline.',
    '📌 CO binds to hemoglobin ~300 times stronger than O₂, forming fatal carboxyhemoglobin.',
    '📌 Excess CO₂ dissolves CaCO₃ white precipitate by forming soluble Ca(HCO₃)₂.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking Graphite is sp³ hybridized like Diamond because both are pure carbon.',
      correctFact: 'Graphite is sp² hybridized with 2D planar layers and mobile π electrons, whereas Diamond is sp³ hybridized with a 3D network.',
      whyItMattersForNEET: 'Direct question tested in NEET 2023 statement verification.'
    },
    {
      commonConfusion: 'Assuming Pb⁴⁺ is more stable than Pb²⁺ because it is in Group 14.',
      correctFact: 'Due to the Inert Pair Effect, Pb²⁺ is MORE stable than Pb⁴⁺. Consequently, Pb⁴⁺ acts as a strong oxidizing agent.',
      whyItMattersForNEET: 'Crucial assertion-reason question tested in NEET 2017.'
    },
    {
      commonConfusion: 'Confusing 5-membered and 6-membered ring counts in C₆₀ Fullerene.',
      correctFact: 'C₆₀ contains 20 six-membered rings (hexagons) and 12 five-membered rings (pentagons). Five-membered rings NEVER touch other five-membered rings.',
      whyItMattersForNEET: 'Tested in NEET 2021.'
    },
    {
      commonConfusion: 'Assuming CO₂ and SiO₂ have similar structures because both are group 14 dioxides.',
      correctFact: 'CO₂ is a gaseous linear monomer (O=C=O) with pπ-pπ double bonds. SiO₂ is a giant 3D covalent network solid with Si-O single bonds.',
      whyItMattersForNEET: 'Explains why SiO₂ is solid with high melting point (1710°C) while CO₂ is a gas.'
    }
  ],

  quickRevision: [
    '• Group 14 Configuration: ns² np² (C, Si, Ge, Sn, Pb).',
    '• Size Order: C (77) < Si (118) < Ge (122) < Sn (140) < Pb (146 pm).',
    '• IE₁ Anomaly: Pb (715) > Sn (708 kJ/mol) due to 4f shielding failure.',
    '• Inert Pair Effect: +2 stability increases down group (Pb²⁺ > Pb⁴⁺; Sn⁴⁺ > Sn²⁺). Pb⁴⁺ = Oxidizing agent; Sn²⁺ = Reducing agent.',
    '• Catenation: C >> Si > Ge ≈ Sn (C-C bond energy = 348 kJ/mol).',
    '• Carbon Allotropes: Diamond (sp³, 3D network, insulator) | Graphite (sp², 2D layers, conductor, lubricant) | Fullerene C₆₀ (20 hexagons + 12 pentagons, sp²).',
    '• SiO₂: 3D network covalent solid, sp³ Si surrounded by 4 O. Unreactive except with HF & NaOH.',
    '• Silicates: (SiO₄)⁴⁻ unit. Ortho (0 shared), Pyro (1 shared, Si₂O₇⁶⁻), Chain (2 shared, SiO₃²⁻), Sheet (3 shared, Si₂O₅²⁻), 3D Framework (4 shared, SiO₂).',
    '• Zeolites: Microporous 3D aluminosilicates. ZSM-5 converts alcohol to gasoline.',
    '• Silicones: R₂SiCl₂ → Linear silicones; RSiCl₃ → Cross-linked 3D silicones; R₃SiCl → Chain stopper. Hydrophobic & thermally stable.',
    '• Carbon Oxides: CO (:C≡O:, neutral, forms carboxyhemoglobin 300x stronger than O₂) | CO₂ (O=C=O, linear sp, acidic, turns lime water milky, excess dissolves as Ca(HCO₃)₂).'
  ],

  practiceQuestions: [
  {
    "id": "prac-g14-1",
    "question": "Which of the following statement is INCORRECT regarding graphite?",
    "options": [
      "It is a good conductor of electricity.",
      "Each carbon atom is sp² hybridized.",
      "It has a hexagonal layered structure held by weak van der Waals forces.",
      "It is sp³ hybridized and possesses a rigid 3D framework."
    ],
    "correctAnswer": 3,
    "explanation": "Graphite features sp² hybridized carbon atoms arranged in 2D hexagonal layers. It is Diamond that is sp³ hybridized with a rigid 3D framework.",
    "difficulty": "Easy",
    "conceptTested": "Graphite vs Diamond hybridization and structure"
  },
  {
    "id": "prac-g14-2",
    "question": "Hydrolysis of dimethyldichlorosilane (CH₃)₂SiCl₂ followed by condensation polymerisation produces:",
    "options": [
      "Cross-linked 3D silicone",
      "Linear silicone",
      "Sheet silicate",
      "Zeolite"
    ],
    "correctAnswer": 1,
    "explanation": "Hydrolysis of (CH₃)₂SiCl₂ gives (CH₃)₂Si(OH)₂ which undergoes condensation to yield linear silicones -(Si(CH₃)₂-O)n-.",
    "difficulty": "Easy",
    "conceptTested": "Synthesis of linear silicones"
  },
  {
    "id": "prac-g14-3",
    "question": "In Buckminsterfullerene (C₆₀), the number of six-membered and five-membered rings present respectively are:",
    "options": [
      "20 and 12",
      "12 and 20",
      "25 and 10",
      "18 and 14"
    ],
    "correctAnswer": 0,
    "explanation": "Buckminsterfullerene (C₆₀) contains exactly 20 six-membered rings (hexagons) and 12 five-membered rings (pentagons).",
    "difficulty": "Easy",
    "conceptTested": "C60 Fullerene ring counts"
  },
  {
    "id": "prac-g14-4",
    "question": "Which of the following species acts as a strong OXIDIZING agent due to the Inert Pair Effect?",
    "options": [
      "Sn²⁺",
      "Pb⁴⁺",
      "Ge⁴⁺",
      "Si⁴⁺"
    ],
    "correctAnswer": 1,
    "explanation": "Due to the Inert Pair Effect, Lead(II) is much more stable than Lead(IV). Therefore, Pb⁴⁺ readily accepts 2 electrons (Pb⁴⁺ + 2e⁻ → Pb²⁺) acting as a powerful oxidizing agent.",
    "difficulty": "Medium",
    "conceptTested": "Lead(IV) oxidizing agent behavior via Inert Pair Effect"
  },
  {
    "id": "prac-g14-5",
    "question": "A silicate anion consisting of two SiO₄ tetrahedra sharing one oxygen vertex has the formula:",
    "options": [
      "(SiO₄)⁴⁻",
      "(Si₂O₇)⁶⁻",
      "(SiO₃)n²ⁿ⁻",
      "(Si₂O₅)n²ⁿ⁻"
    ],
    "correctAnswer": 1,
    "explanation": "Pyrosilicates are formed by sharing 1 oxygen vertex between two SiO₄ tetrahedra, yielding the (Si₂O₇)⁶⁻ anion unit.",
    "difficulty": "Medium",
    "conceptTested": "Pyrosilicate anion structure"
  },
  {
    "id": "prac-chemgroupelements-6",
    "question": "Regarding Group 14 — Carbon Family (Allotropes, Silicates, Silicones & CO/CO₂), which of the following statements correctly resolves a common misconception about \"Thinking Graphite is sp³ hybridized like Diamond because both are pure carbon.\"?",
    "options": [
      "Graphite is sp² hybridized with 2D planar layers and mobile π electrons, whereas Diamond is sp³ hybridized with a 3D network.",
      "Incorrect assumption: Thinking Graphite is sp³ hybridized like Diamond because both are pure carbon.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Graphite is sp² hybridized with 2D planar layers and mobile π electrons, whereas Diamond is sp³ hybridized with a 3D network.. Direct question tested in NEET 2023 statement verification.",
    "difficulty": "Medium",
    "conceptTested": "Group 14 — Carbon Family (Allotropes, Silicates, Silicones & CO/CO₂) - Conceptual Clarity"
  },
  {
    "id": "prac-chemgroupelements-7",
    "question": "Regarding Group 14 — Carbon Family (Allotropes, Silicates, Silicones & CO/CO₂), which of the following statements correctly resolves a common misconception about \"Assuming Pb⁴⁺ is more stable than Pb²⁺ because it is in Group 14.\"?",
    "options": [
      "Due to the Inert Pair Effect, Pb²⁺ is MORE stable than Pb⁴⁺. Consequently, Pb⁴⁺ acts as a strong oxidizing agent.",
      "Incorrect assumption: Assuming Pb⁴⁺ is more stable than Pb²⁺ because it is in Group 14.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Due to the Inert Pair Effect, Pb²⁺ is MORE stable than Pb⁴⁺. Consequently, Pb⁴⁺ acts as a strong oxidizing agent.. Crucial assertion-reason question tested in NEET 2017.",
    "difficulty": "Medium",
    "conceptTested": "Group 14 — Carbon Family (Allotropes, Silicates, Silicones & CO/CO₂) - Conceptual Clarity"
  },
  {
    "id": "prac-chemgroupelements-8",
    "question": "Regarding Group 14 — Carbon Family (Allotropes, Silicates, Silicones & CO/CO₂), which of the following statements correctly resolves a common misconception about \"Confusing 5-membered and 6-membered ring counts in C₆₀ Fullerene.\"?",
    "options": [
      "C₆₀ contains 20 six-membered rings (hexagons) and 12 five-membered rings (pentagons). Five-membered rings NEVER touch other five-membered rings.",
      "Incorrect assumption: Confusing 5-membered and 6-membered ring counts in C₆₀ Fullerene.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "C₆₀ contains 20 six-membered rings (hexagons) and 12 five-membered rings (pentagons). Five-membered rings NEVER touch other five-membered rings.. Tested in NEET 2021.",
    "difficulty": "Medium",
    "conceptTested": "Group 14 — Carbon Family (Allotropes, Silicates, Silicones & CO/CO₂) - Conceptual Clarity"
  },
  {
    "id": "prac-chemgroupelements-9",
    "question": "Regarding Group 14 — Carbon Family (Allotropes, Silicates, Silicones & CO/CO₂), which of the following statements correctly resolves a common misconception about \"Assuming CO₂ and SiO₂ have similar structures because both are group 14 dioxides.\"?",
    "options": [
      "CO₂ is a gaseous linear monomer (O=C=O) with pπ-pπ double bonds. SiO₂ is a giant 3D covalent network solid with Si-O single bonds.",
      "Incorrect assumption: Assuming CO₂ and SiO₂ have similar structures because both are group 14 dioxides.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "CO₂ is a gaseous linear monomer (O=C=O) with pπ-pπ double bonds. SiO₂ is a giant 3D covalent network solid with Si-O single bonds.. Explains why SiO₂ is solid with high melting point (1710°C) while CO₂ is a gas.",
    "difficulty": "Medium",
    "conceptTested": "Group 14 — Carbon Family (Allotropes, Silicates, Silicones & CO/CO₂) - Conceptual Clarity"
  },
  {
    "id": "prac-chemgroupelements-10",
    "question": "In the study of Group 14 — Carbon Family (Allotropes, Silicates, Silicones & CO/CO₂), what is the exact definition and significance of \"Inert Pair Effect in Group 14\"?",
    "options": [
      "The reluctance of inner valence 6s² electrons in Lead (Pb) to unpair and bond, stabilizing the +2 oxidation state over +4.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The reluctance of inner valence 6s² electrons in Lead (Pb) to unpair and bond, stabilizing the +2 oxidation state over +4.. Pb²⁺ is stable; Pb⁴⁺ is a strong oxidizing agent (PbO₂). Sn²⁺ is a strong reducing agent (SnCl₂).",
    "difficulty": "Easy",
    "conceptTested": "Inert Pair Effect in Group 14 definition"
  }
],
  pyqs: [
    {
      id: 'pyq-g14-2023',
      year: 2023,
      exam: 'NEET UG 2023',
      question: 'Which of the following statement is INCORRECT regarding graphite?',
      options: [
        'It is a good conductor of electricity.',
        'Each carbon atom is sp² hybridized.',
        'It has hexagonal layered structure bound by van der Waals forces.',
        'It is sp³ hybridized and possesses rigid 3D framework.'
      ],
      correctAnswer: 3,
      explanation: 'Graphite is sp² hybridized with a 2D planar layered structure. Option (4) describes Diamond, not graphite.',
      difficulty: 'Easy',
      conceptTested: 'Graphite structural features and hybridization',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.7',
      verified: true
    },
    {
      id: 'pyq-g14-2022',
      year: 2022,
      exam: 'NEET UG 2022',
      question: 'Which of the following polymer is formed by hydrolysis of R₂SiCl₂ followed by condensation?',
      options: [
        'Linear Silicone',
        'Cross-linked Silicone',
        'Silicate',
        'Zeolite'
      ],
      correctAnswer: 0,
      explanation: 'Hydrolysis of R₂SiCl₂ yields R₂Si(OH)₂ which undergoes linear condensation polymerisation to form linear silicones.',
      difficulty: 'Easy',
      conceptTested: 'Preparation of linear silicones',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.8',
      verified: true
    },
    {
      id: 'pyq-g14-2021',
      year: 2021,
      exam: 'NEET UG 2021',
      question: 'Which of the following is correct regarding Buckminsterfullerene (C₆₀)?',
      options: [
        'It contains 20 six-membered rings and 12 five-membered rings.',
        'It contains 12 six-membered rings and 20 five-membered rings.',
        'All carbon atoms are sp³ hybridized.',
        'It contains 25 six-membered rings and 10 five-membered rings.'
      ],
      correctAnswer: 0,
      explanation: 'C₆₀ fullerene contains 20 six-membered rings and 12 five-membered rings, with sp² hybridized carbon atoms.',
      difficulty: 'Easy',
      conceptTested: 'Buckminsterfullerene ring configuration',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.7.3',
      verified: true
    },
    {
      id: 'pyq-g14-2020',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'Which of the following oxide is neutral in nature?',
      options: [
        'CO',
        'SnO₂',
        'SiO₂',
        'CO₂'
      ],
      correctAnswer: 0,
      explanation: 'Carbon monoxide (CO) is a neutral oxide. CO₂ and SiO₂ are acidic oxides, while SnO₂ is an amphoteric oxide.',
      difficulty: 'Easy',
      conceptTested: 'Acidic, basic, and neutral oxides of Group 14',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.6',
      verified: true
    },
    {
      id: 'pyq-g14-2019',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'Which of the following is a basic structural unit of silicates?',
      options: [
        '(SiO₄)⁴⁻',
        '(SiO₃)²⁻',
        '(SiO₄)²⁻',
        'Si₂O₇⁶⁻'
      ],
      correctAnswer: 0,
      explanation: 'The basic fundamental building unit of all silicates is the tetrahedral (SiO₄)⁴⁻ ion.',
      difficulty: 'Easy',
      conceptTested: 'Fundamental silicate building unit',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.8',
      verified: true
    },
    {
      id: 'pyq-g14-2017',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'It is because of inability of ns² electrons of the valence shell to participate in bonding that:',
      options: [
        'Pb²⁺ is more stable than Pb⁴⁺, and Sn⁴⁺ is more stable than Sn²⁺',
        'Pb⁴⁺ is more stable than Pb²⁺',
        'Sn²⁺ is more stable than Sn⁴⁺',
        'Both Pb⁴⁺ and Sn²⁺ are equally stable'
      ],
      correctAnswer: 0,
      explanation: 'Due to the Inert Pair Effect down Group 14, the +2 state increases in stability while +4 decreases. Thus, Pb²⁺ > Pb⁴⁺, while for Tin, Sn⁴⁺ > Sn²⁺.',
      difficulty: 'Medium',
      conceptTested: 'Inert pair effect impact on Pb and Sn oxidation states',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.6',
      verified: true
    },
    {
      id: 'pyq-g14-2015',
      year: 2015,
      exam: 'AIPMT 2015',
      question: 'Which of the following silicones is produced by hydrolysis of RSiCl₃ followed by polymerization?',
      options: [
        'Cross-linked / 3D network Silicone',
        'Linear Silicone',
        'Dimeric Silicone',
        'Cyclic Silicone'
      ],
      correctAnswer: 0,
      explanation: 'RSiCl₃ contains 3 chlorine atoms; hydrolysis gives RSi(OH)₃ which undergoes condensation in 3 directions to form cross-linked 3D network silicones.',
      difficulty: 'Medium',
      conceptTested: 'Preparation of cross-linked 3D silicones',
      ncertReference: 'Class 11 Chemistry NCERT, p-Block Elements, Section 11.8',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: 'Group 14 — Carbon Family',
    confidenceLabel: 'HIGH',
    confidenceText: 'Verified against 7 official NEET UG / AIPMT paper appearances (7 direct questions).',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 7,
    totalDirectPyqs: 7,
    totalHistoricalMarks: 28,
    averageDirectPyqsPerPaper: 0.47,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 0,
    minDirectMarks: 0,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 1.87,
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 – 4 Marks per paper',
    yearWiseBreakdown: [
      { year: 2023, exam: 'NEET UG 2023', directPyqCount: 1, marks: 4, questionType: 'Graphite structural features (sp2, not sp3)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2022, exam: 'NEET UG 2022', directPyqCount: 1, marks: 4, questionType: 'Linear silicone synthesis from R2SiCl2', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2021, exam: 'NEET UG 2021', directPyqCount: 1, marks: 4, questionType: 'Buckminsterfullerene C60 rings (20 hexagons + 12 pentagons)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2020, exam: 'NEET UG 2020', directPyqCount: 1, marks: 4, questionType: 'Neutral oxide among C/Si/Sn oxides (CO)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2019, exam: 'NEET UG 2019', directPyqCount: 1, marks: 4, questionType: 'Basic silicate building unit (SiO4)4-', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2017, exam: 'NEET UG 2017', directPyqCount: 1, marks: 4, questionType: 'Inert pair effect on Pb2+ vs Pb4+ and Sn4+ vs Sn2+', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2015, exam: 'AIPMT 2015', directPyqCount: 1, marks: 4, questionType: 'Cross-linked silicone synthesis from RSiCl3', classification: 'Direct', verificationStatus: 'Verified (AIPMT)' }
    ],
    sourceInfo: {
      dataSource: 'Official NEET UG / AIPMT Archives & NCERT Class 11 Chemistry',
      analysisPeriod: '2010 – 2024 (15 Verified Papers)',
      directPyqsAnalyzedCount: 7,
      classificationMethod: 'Strict topic-level classification; chapter-level weightage was not used.',
      disclaimer: 'Historical frequency is not a prediction of the next NEET paper.'
    }
  }
};
