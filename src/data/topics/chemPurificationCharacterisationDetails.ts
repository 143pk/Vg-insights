import { DetailedTopicContent } from '../../types/neet';

export const chemPurificationCharacterisationDetails: DetailedTopicContent = {
  topicId: 'chem-purification-characterisation',
  topicName: 'Purification & Characterisation of Organic Compounds',
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Organic Chemistry (Class 11)',
  chapter: 'Organic Chemistry: Some Basic Principles & Techniques',

  whatIsThisTopic:
    'Organic compounds obtained from natural sources or synthesized in laboratory chemical reactions are almost never pure. They are typically mixed with unreacted starting materials, byproducts, solvents, or inorganic salts. To determine the exact structure, physical properties, or biological activity of an organic molecule, it must first be isolated in pure form. This topic covers the fundamental methods of purifying organic solids and liquids (Crystallization, Sublimation, Distillation, Extraction, and Chromatography), followed by Qualitative Analysis (detecting elements like N, S, Halogens, and P using Lassaigne\'s test) and Quantitative Analysis (estimating percentage elemental composition using Dumas, Kjeldahl, Liebig, and Carius methods).',

  basicIdea: [
    '1. Separation Based on Physical Properties: Purification methods exploit differences in solubility (Crystallization), vapour pressure (Sublimation), boiling point (Distillation), partition coefficient (Extraction), or adsorption affinity (Chromatography).',
    '2. Qualitative Analysis (Lassaigne\'s Test): Organic covalent compounds are fused with metallic Sodium to convert bound Carbon, Nitrogen, Sulphur, and Halogens into water-soluble ionic sodium salts (NaCN, Na₂S, NaX), which give characteristic coloured precipitates or solutions.',
    '3. Quantitative Elemental Estimation: Mass-based combustion or digestion methods convert specific elements into measurable gases or precipitates (CO₂, H₂O, N₂, NH₃, AgX, BaSO₄) to determine empirical and molecular formulas.'
  ],

  importantTerms: [
    {
      term: 'Crystallization',
      definition: 'A purification technique based on the difference in solubilities of an organic compound and its impurities in a suitable solvent at different temperatures.',
      neetNote: 'The chosen solvent should dissolve the organic compound sparingly at room temperature but readily at elevated temperature.'
    },
    {
      term: 'Sublimation',
      definition: 'The direct phase transition of a solid substance into vapour upon heating without passing through the liquid state (Solid ⇌ Vapour).',
      neetNote: 'Used to separate sublimable solids (camphor, benzoic acid, naphthalene, NH₄Cl, anthracene) from non-sublimable impurities.'
    },
    {
      term: 'Simple Distillation',
      definition: 'A process used to separate volatile liquids from non-volatile impurities or liquids having a large boiling point difference (greater than 25 K).',
      neetNote: 'Example: Chloroform (b.p. 334 K) and Aniline (b.p. 457 K); Ether (b.p. 308 K) and Toluene (b.p. 384 K).'
    },
    {
      term: 'Fractional Distillation',
      definition: 'Distillation utilizing a fractionating column to separate two or more miscible liquids having close boiling points (less than 25 K).',
      neetNote: 'The fractionating column provides repeated vaporization and condensation cycles. Used in crude petroleum refining and Acetone/Methanol separation.'
    },
    {
      term: 'Steam Distillation',
      definition: 'A technique used to purify substances that are steam-volatile and immiscible with water.',
      neetNote: 'The liquid mixture boils when P_total = P_organic + P_water = P_atm. The organic compound distils below its normal boiling point without thermal decomposition (e.g., Aniline, o-nitrophenol).'
    },
    {
      term: 'Vacuum Distillation (Reduced Pressure)',
      definition: 'Distillation carried out under reduced pressure to purify liquids that decompose at or below their normal boiling points.',
      neetNote: 'Example: Glycerol (normal b.p. 563 K) decomposes at normal b.p., but distils cleanly at 453 K under 12 mm Hg pressure.'
    },
    {
      term: 'Differential Extraction',
      definition: 'Separation of an organic compound from an aqueous solution by shaking with an immiscible organic solvent in which the compound is significantly more soluble.',
      neetNote: 'Multiple extractions using smaller volumes of solvent are mathematically more efficient than a single extraction with the entire solvent volume.'
    },
    {
      term: 'Retardation Factor (R_f)',
      symbol: 'R_f',
      definition: 'The ratio of the distance traveled by a compound spot from the origin baseline to the distance traveled by the solvent front in paper or thin-layer chromatography.',
      neetNote: 'R_f = (Distance moved by substance) / (Distance moved by solvent front). R_f is always ≤ 1.0.'
    },
    {
      term: 'Sodium Fusion Extract (Lassaigne Extract)',
      symbol: 'SFE',
      definition: 'An aqueous ionic solution prepared by fusing an organic compound with sodium metal and plunging the red-hot tube into distilled water.',
      neetNote: 'Converts covalent N, S, and X into ionic NaCN, Na₂S, and NaX for qualitative inorganic tests.'
    },
    {
      term: 'Prussian Blue',
      symbol: 'Fe₄[Fe(CN)₆]₃',
      definition: 'A deep blue complex (Ferriferrocyanide / Iron(III) hexacyanoferrate(II)) formed during Lassaigne\'s test for Nitrogen.',
      neetNote: 'Formed when NaCN reacts with FeSO₄ and FeCl₃ in acidic medium.'
    },
    {
      term: 'Dumas Method',
      definition: 'A quantitative estimation method for Nitrogen where the organic compound is heated with CuO in a CO₂ atmosphere, converting Nitrogen into N₂ gas collected over aqueous KOH.',
      neetNote: 'Universally applicable to all nitrogenous organic compounds, including nitro, azo, and heterocyclic compounds.'
    },
    {
      term: 'Kjeldahl Method',
      definition: 'Quantitative estimation of Nitrogen by digesting the compound with conc. H₂SO₄ to convert Nitrogen into (NH₄)₂SO₄, followed by distillation with excess NaOH to evolve NH₃.',
      neetNote: 'FAILS for nitro (-NO₂), azo (-N=N-), and nitrogen present in aromatic rings (e.g., pyridine, quinoline).'
    },
    {
      term: 'Carius Method',
      definition: 'Quantitative estimation of Halogens or Sulphur by heating the organic compound with fuming HNO₃ (and AgNO₃ for halogens / BaCl₂ for sulphur) in a sealed glass tube.',
      neetNote: 'Halogens precipitate as AgX (AgCl white, AgBr pale yellow, AgI yellow); Sulphur precipitates as BaSO₄.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Purification of Organic Solids: Crystallization & Sublimation',
      paragraphs: [
        'Crystallization is the most widely used technique for purifying organic solids. It relies on the principle that an organic compound and its impurities possess different solubilities in a chosen solvent at different temperatures.',
        'The ideal solvent must dissolve the organic compound sparingly at room temperature but readily at elevated temperature (near its boiling point). Impurities should either be completely insoluble (removed by hot filtration) or remain soluble even upon cooling (remaining in the mother liquor). When the hot saturated solution is cooled slowly, pure crystals of the compound separate out.',
        'Sublimation is applied when an organic solid directly converts into vapour upon heating without melting into a liquid (Solid ⇌ Vapour). It is used to separate sublimable organic solids (such as camphor, benzoic acid, naphthalene, NH₄Cl, and anthracene) from non-sublimable impurities.'
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 800 220" class="w-full h-auto max-h-60" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="220" rx="16" fill="#0f172a" />
            
            <!-- Step 1: Dissolution -->
            <g transform="translate(40, 30)">
              <rect x="0" y="0" width="130" height="150" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
              <text x="65" y="25" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Step 1: Hot Solvent</text>
              <path d="M 35 110 L 95 110 L 90 60 L 40 60 Z" fill="#3b82f6" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1.5"/>
              <circle cx="55" cy="90" r="4" fill="#f59e0b" />
              <circle cx="75" cy="80" r="4" fill="#ef4444" />
              <text x="65" y="135" text-anchor="middle" fill="#94a3b8" font-size="10">Impure Solid Dissolves</text>
            </g>

            <!-- Arrow 1 -->
            <path d="M 180 105 L 210 105" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)" />

            <!-- Step 2: Hot Filtration -->
            <g transform="translate(220, 30)">
              <rect x="0" y="0" width="130" height="150" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
              <text x="65" y="25" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Step 2: Hot Filter</text>
              <polygon points="40,55 90,55 65,95" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="1.5" />
              <text x="65" y="70" text-anchor="middle" fill="#ef4444" font-size="9" font-weight="bold">Insoluble Residue</text>
              <text x="65" y="135" text-anchor="middle" fill="#94a3b8" font-size="10">Hot Clear Filtrate</text>
            </g>

            <!-- Arrow 2 -->
            <path d="M 360 105 L 390 105" stroke="#38bdf8" stroke-width="3" />

            <!-- Step 3: Cooling -->
            <g transform="translate(400, 30)">
              <rect x="0" y="0" width="130" height="150" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
              <text x="65" y="25" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Step 3: Slow Cooling</text>
              <path d="M 35 110 L 95 110 L 90 70 L 40 70 Z" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" />
              <polygon points="50,90 55,80 60,90" fill="#38bdf8" stroke="#ffffff" stroke-width="1" />
              <polygon points="70,100 75,90 80,100" fill="#38bdf8" stroke="#ffffff" stroke-width="1" />
              <polygon points="60,80 65,70 70,80" fill="#38bdf8" stroke="#ffffff" stroke-width="1" />
              <text x="65" y="135" text-anchor="middle" fill="#38bdf8" font-size="10">Crystals Nucleate</text>
            </g>

            <!-- Arrow 3 -->
            <path d="M 540 105 L 570 105" stroke="#38bdf8" stroke-width="3" />

            <!-- Step 4: Pure Crystals -->
            <g transform="translate(580, 30)">
              <rect x="0" y="0" width="180" height="150" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2.5" />
              <text x="90" y="25" text-anchor="middle" fill="#34d399" font-size="13" font-weight="extrabold">PURE CRYSTALS</text>
              <polygon points="60,85 70,60 80,85 70,95" fill="#34d399" stroke="#ffffff" stroke-width="1.5" />
              <polygon points="100,95 110,70 120,95 110,105" fill="#34d399" stroke="#ffffff" stroke-width="1.5" />
              <polygon points="80,115 90,90 100,115 90,125" fill="#34d399" stroke="#ffffff" stroke-width="1.5" />
              <text x="90" y="140" text-anchor="middle" fill="#94a3b8" font-size="10">High Purity Solid Obtained</text>
            </g>
          </svg>`,
          caption: 'Crystallization Workflow: Hot filtration removes insoluble impurities; controlled cooling precipitates pure solid crystals while soluble impurities stay in the mother liquor.',
          guide: 'Key solvent rule: Solute sparingly soluble at room temperature, highly soluble at boiling point.'
        },
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 800 200" class="w-full h-auto max-h-52" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="200" rx="16" fill="#0f172a" />
            
            <g transform="translate(250, 20)">
              <!-- Porcelain Dish -->
              <path d="M 100 140 Q 150 170 200 140 Z" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
              <!-- Heat Source -->
              <path d="M 140 175 L 160 175 L 150 150 Z" fill="#ef4444"/>
              <text x="150" y="190" text-anchor="middle" fill="#f87171" font-size="11" font-weight="bold">Bunsen Burner Heat</text>
              <!-- Sublimable Mixture -->
              <ellipse cx="150" cy="142" rx="35" ry="6" fill="#f59e0b" />
              <text x="70" y="145" text-anchor="end" fill="#f59e0b" font-size="11" font-weight="bold">Impure Mixture</text>

              <!-- Inverted Funnel -->
              <path d="M 105 138 L 142 30 L 158 30 L 195 138 Z" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 2"/>
              <!-- Cotton Plug -->
              <ellipse cx="150" cy="28" rx="10" ry="5" fill="#e2e8f0" />
              <text x="210" y="30" fill="#e2e8f0" font-size="11">Cotton Plug</text>

              <!-- Purified Sublimate on Funnel Walls -->
              <line x1="115" y1="110" x2="135" y2="50" stroke="#34d399" stroke-width="4" />
              <line x1="185" y1="110" x2="165" y2="50" stroke="#34d399" stroke-width="4" />
              <text x="240" y="80" fill="#34d399" font-size="12" font-weight="bold">Purified Sublimate (Solid)</text>
              <text x="240" y="98" fill="#94a3b8" font-size="10">(Camphor, Benzoic Acid, Naphthalene)</text>
            </g>
          </svg>`,
          caption: 'Sublimation Assembly: Heating converts the sublimable solid directly to vapour (Solid → Vapour), which condenses as pure sublimate crystals on the cooled funnel walls.',
          guide: 'Sublimable compounds tested in NEET: Camphor, Benzoic acid, Naphthalene, Ammonium chloride (NH₄Cl), Anthracene.'
        }
      ],
      importantPoints: [
        'Solvent Selection: Should not react chemically with the solute and must have a convenient boiling point.',
        'Impurity Behavior: Insoluble impurities are filtered hot; soluble impurities remain in mother liquor.',
        'Sublimation condition: Vapour pressure of sublimable solid must reach atmospheric pressure below its melting point.'
      ]
    },

    {
      heading: '2. Purification of Organic Liquids: Distillation Methods',
      paragraphs: [
        'Distillation is used to separate volatile liquids from non-volatile impurities or to separate mixtures of miscible liquids with different boiling points.',
        'Simple Distillation: Applied when liquids have a boiling point difference greater than 25 K or when separating a volatile liquid from non-volatile matter. Example: Chloroform (b.p. 334 K) and Aniline (b.p. 457 K).',
        'Fractional Distillation: When boiling point difference is small (less than 25 K), simple distillation fails because vapours contain both components. A fractionating column provides continuous vaporization-condensation cycles. The rising vapour becomes progressively richer in the more volatile component. Example: Acetone (b.p. 329 K) and Methyl alcohol (b.p. 338 K); crude oil fractions.',
        'Steam Distillation: Used for substances that are steam-volatile and water-immiscible. Steam is passed through the mixture. The mixture boils when P_total = P_organic + P_water = P_atm. Because P_organic < P_atm, the organic liquid distils at a temperature BELOW its normal boiling point. This prevents thermal decomposition. Example: Aniline (b.p. 457 K distils at ~371 K), o-nitrophenol, nitrobenzene.',
        'Distillation Under Reduced Pressure (Vacuum Distillation): Liquids that decompose at or below their normal boiling points are distilled by lowering the surrounding pressure using a vacuum pump. Reducing pressure lowers the boiling point below the decomposition temperature. Example: Glycerol decomposes at its normal boiling point (563 K), but distils smoothly at 453 K under 12 mm Hg pressure.'
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 800 240" class="w-full h-auto max-h-60" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="240" rx="16" fill="#0f172a" />
            
            <g transform="translate(30, 20)">
              <!-- Distillation Flask -->
              <circle cx="100" cy="140" r="45" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
              <rect x="92" y="40" width="16" height="60" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
              <path d="M 60 140 Q 100 180 140 140 Z" fill="#0284c7" fill-opacity="0.3"/>
              <text x="100" y="200" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">Distillation Flask</text>
              <text x="100" y="215" text-anchor="middle" fill="#94a3b8" font-size="9">Liquid Mixture (Δb.p. > 25 K)</text>

              <!-- Thermometer -->
              <line x1="100" y1="20" x2="100" y2="80" stroke="#ef4444" stroke-width="3" />
              <text x="100" y="15" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">Thermometer</text>

              <!-- Side Arm & Condenser -->
              <path d="M 108 65 L 180 90 L 450 170" fill="none" stroke="#38bdf8" stroke-width="3"/>
              <!-- Water Jacket -->
              <rect x="200" y="70" width="220" height="40" rx="8" transform="rotate(16 310 90)" fill="#1e293b" fill-opacity="0.8" stroke="#34d399" stroke-width="2"/>
              <text x="310" y="75" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">Water Condenser</text>
              <text x="230" y="125" fill="#38bdf8" font-size="9">Cold Water In</text>
              <text x="370" y="75" fill="#38bdf8" font-size="9">Water Out</text>

              <!-- Receiver Flask -->
              <path d="M 450 170 L 465 200 L 435 200 Z" fill="#34d399" fill-opacity="0.4" stroke="#34d399" stroke-width="1.5"/>
              <text x="450" y="220" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">Distillate Receiver</text>
            </g>

            <g transform="translate(530, 30)">
              <rect x="0" y="0" width="240" height="180" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="120" y="25" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">NEET Distillation Guide</text>
              
              <text x="15" y="55" fill="#38bdf8" font-size="11" font-weight="bold">• Simple Distillation:</text>
              <text x="25" y="72" fill="#cbd5e1" font-size="10">Δb.p. > 25 K (Chloroform + Aniline)</text>

              <text x="15" y="95" fill="#38bdf8" font-size="11" font-weight="bold">• Fractional Distillation:</text>
              <text x="25" y="112" fill="#cbd5e1" font-size="10">Δb.p. &lt; 25 K (Acetone + Methanol)</text>

              <text x="15" y="135" fill="#38bdf8" font-size="11" font-weight="bold">• Steam Distillation:</text>
              <text x="25" y="152" fill="#34d399" font-size="10" font-weight="bold">Steam volatile, water immiscible (Aniline)</text>
            </g>
          </svg>`,
          caption: 'Distillation Apparatus and Selection Rules: Vapours of the lower boiling liquid rise, condense in the cooling jacket, and collect as pure distillate.',
          guide: 'Crucial NEET Question: Aniline & o-nitrophenol are purified by Steam Distillation because they are steam volatile and water immiscible.'
        }
      ],
      importantPoints: [
        'Steam Distillation Principle: P_total = P₁ + P₂ = P_atm. Boiling occurs when P₁ < P_atm, so the compound distils below its normal b.p.',
        'Fractional Distillation Column: Packed beads or bubble plates provide maximum surface area for vapour-liquid exchange.',
        'Vacuum Distillation: Glycerol distils cleanly at 453 K under 12 mm Hg pressure without thermal decomposition.'
      ]
    },

    {
      heading: '3. Differential Extraction & Chromatography Techniques',
      paragraphs: [
        'Differential Extraction involves separating an organic compound present in aqueous solution by shaking with an immiscible organic solvent in which the compound is far more soluble.',
        'The extraction is performed in a separating funnel. The organic solvent and aqueous solution form two distinct layers. According to the Partition Law, the solute distributes between the two phases in a fixed ratio of concentration (Distribution Coefficient K = C_organic / C_aqueous). Multiple extractions using smaller volumes of solvent are mathematically proven to extract significantly more compound than a single extraction with the total volume of solvent.',
        'Chromatography is an advanced separation technique based on the differential partition or adsorption of components between a Stationary Phase and a Mobile Phase.',
        'Adsorption Chromatography: (i) Column Chromatography: Stationary phase (silica gel or alumina) is packed in a vertical glass column. Mobile phase (eluent) moves down. Components with stronger adsorption move slowly and stay near the top, while weakly adsorbed components move rapidly to the bottom. (ii) Thin Layer Chromatography (TLC): Glass plate coated with a thin layer of adsorbent silica gel. R_f = (Distance moved by substance) / (Distance moved by solvent front).',
        'Partition Chromatography: Paper Chromatography uses special chromatography paper where water trapped in cellulose fibers acts as the stationary phase, and a moving solvent acts as the mobile phase. Components separate based on continuous partition.'
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 800 220" class="w-full h-auto max-h-60" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="220" rx="16" fill="#0f172a" />
            
            <!-- Separating Funnel -->
            <g transform="translate(100, 20)">
              <!-- Funnel Body -->
              <path d="M 60 20 L 140 20 L 120 120 L 105 160 L 95 160 L 80 120 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
              <!-- Upper Layer (Organic) -->
              <path d="M 67 35 L 133 35 L 125 75 L 75 75 Z" fill="#f59e0b" fill-opacity="0.4" stroke="#f59e0b" stroke-width="1"/>
              <text x="100" y="55" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Organic Layer + Solute</text>
              
              <!-- Lower Layer (Aqueous) -->
              <path d="M 75 75 L 125 75 L 120 120 L 80 120 Z" fill="#0284c7" fill-opacity="0.5" stroke="#38bdf8" stroke-width="1"/>
              <text x="100" y="100" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">Aqueous Layer</text>

              <!-- Stopcock -->
              <rect x="90" y="155" width="20" height="10" rx="2" fill="#ef4444"/>
              <text x="100" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">Separating Funnel</text>
            </g>

            <!-- Column & Paper Chromatography Overview -->
            <g transform="translate(350, 20)">
              <rect x="0" y="0" width="410" height="180" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" />
              <text x="205" y="25" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Chromatography Classification for NEET</text>

              <rect x="20" y="45" width="175" height="115" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
              <text x="107" y="65" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">Adsorption Chromatography</text>
              <text x="30" y="88" fill="#cbd5e1" font-size="10">• Stationary: Solid (Silica/Alumina)</text>
              <text x="30" y="108" fill="#cbd5e1" font-size="10">• Mobile: Liquid / Gas</text>
              <text x="30" y="128" fill="#34d399" font-size="10" font-weight="bold">• Types: Column & TLC</text>
              <text x="30" y="145" fill="#38bdf8" font-size="9">Principle: Differential Adsorption</text>

              <rect x="215" y="45" width="175" height="115" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="302" y="65" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">Partition Chromatography</text>
              <text x="225" y="88" fill="#cbd5e1" font-size="10">• Stationary: Liquid in Paper</text>
              <text x="225" y="108" fill="#cbd5e1" font-size="10">• Mobile: Liquid Solvent</text>
              <text x="225" y="128" fill="#34d399" font-size="10" font-weight="bold">• Type: Paper Chromatography</text>
              <text x="225" y="145" fill="#38bdf8" font-size="9">Principle: Continuous Partition</text>
            </g>
          </svg>`,
          caption: 'Differential Extraction & Chromatography Principles: Separating funnel extracts solute into organic solvent layer. Chromatography separates components by adsorption or partition difference.',
          guide: 'Retardation factor formula: R_f = (Distance moved by substance) / (Distance moved by solvent front). Always R_f ≤ 1.0.'
        }
      ],
      importantPoints: [
        'Multiple Extractions: Extracting twice with 25 mL solvent recovers more solute than extracting once with 50 mL solvent.',
        'Paper Chromatography: High-yield NEET fact — Paper chromatography is an example of PARTITION chromatography, NOT adsorption chromatography.',
        'Adsorbents in Column/TLC: Silica gel and alumina are the standard solid stationary phases.'
      ]
    },

    {
      heading: '4. Qualitative Analysis: Detection of Elements & Lassaigne\'s Test',
      paragraphs: [
        'Detection of Carbon and Hydrogen: The organic compound is mixed with copper(II) oxide (CuO) and heated in a dry test tube. Carbon oxidizes to CO₂ (turns lime water milky) and Hydrogen oxidizes to H₂O (turns anhydrous CuSO₄ from white to blue).',
        'Lassaigne\'s Test (Sodium Fusion Test): Elements present in organic compounds (N, S, Halogens) are bound covalently. To perform inorganic qualitative tests, they must first be converted into water-soluble ionic sodium salts by fusing with metallic sodium:',
        '• Fusion Reactions: Na + C + N → NaCN ; 2Na + S → Na₂S ; Na + X → NaX (X = Cl, Br, I) ; Na + C + N + S → NaSCN (if both N & S are present).',
        '1. Test for Nitrogen: The sodium fusion extract (SFE) is boiled with FeSO₄ and acidified with conc. H₂SO₄. Sodium cyanide forms sodium hexacyanoferrate(II), which reacts with Fe³⁺ ions (formed by oxidation) to yield Prussian Blue precipitate (Fe₄[Fe(CN)₆]₃ - Ferriferrocyanide).',
        '2. Test for Sulphur: (a) Sodium nitroprusside test: Adding sodium nitroprusside to SFE produces a deep Purple/Violet color (Na₄[Fe(CN)₅NOS]). (b) Lead acetate test: Acidifying SFE with acetic acid and adding lead acetate gives a Black precipitate of PbS.',
        '3. Test for Nitrogen AND Sulphur together: If both N and S are present, sodium thiocyanate (NaSCN) is formed. Treatment with FeCl₃ produces a Blood Red coloration ([Fe(SCN)]²⁺). No Prussian blue is formed because free CN⁻ ions are absent!',
        '4. Test for Halogens: SFE is acidified with conc. HNO₃ and treated with AgNO₃ solution. (CRITICAL: HNO₃ must be added to boil off NaCN as HCN and Na₂S as H₂S gas, preventing interference with AgNO₃!).',
        '• Precipitate Observations: AgCl = White ppt (soluble in NH₄OH); AgBr = Pale yellow ppt (sparingly soluble in NH₄OH); AgI = Yellow ppt (insoluble in NH₄OH).',
        '5. Test for Phosphorus: Compound fused with sodium peroxide (Na₂O₂), converting phosphorus to sodium phosphate (Na₃PO₄). Boiling with conc. HNO₃ and adding ammonium molybdate yields a Canary Yellow precipitate of ammonium phosphomolybdate ((NH₄)₃PO₄·12MoO₃).'
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 800 250" class="w-full h-auto max-h-64" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="250" rx="16" fill="#0f172a" />
            
            <text x="400" y="25" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="extrabold">LASSAIGNE'S TEST QUALITATIVE ANALYSIS FLOWCHART</text>

            <!-- Organic + Na -->
            <rect x="300" y="40" width="200" height="35" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="400" y="62" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">Organic Compound + Na Fusion ➔ SFE</text>

            <!-- 4 Test Branches -->
            <!-- Branch 1: Nitrogen -->
            <g transform="translate(30, 95)">
              <rect x="0" y="0" width="165" height="135" rx="10" fill="#1e293b" stroke="#2563eb" stroke-width="2" />
              <text x="82" y="22" text-anchor="middle" fill="#60a5fa" font-size="12" font-weight="bold">Nitrogen (N)</text>
              <text x="82" y="42" text-anchor="middle" fill="#cbd5e1" font-size="9">FeSO₄ + conc. H₂SO₄ + FeCl₃</text>
              <rect x="15" y="55" width="135" height="40" rx="6" fill="#1d4ed8" />
              <text x="82" y="72" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="extrabold">PRUSSIAN BLUE</text>
              <text x="82" y="87" text-anchor="middle" fill="#93c5fd" font-size="9">Fe₄[Fe(CN)₆]₃</text>
              <text x="82" y="115" text-anchor="middle" fill="#f87171" font-size="9" font-weight="bold">Trap: Fails if C is absent!</text>
            </g>

            <!-- Branch 2: Sulphur -->
            <g transform="translate(220, 95)">
              <rect x="0" y="0" width="165" height="135" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
              <text x="82" y="22" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold">Sulphur (S)</text>
              <text x="82" y="42" text-anchor="middle" fill="#cbd5e1" font-size="9">Na-Nitroprusside / Pb(OAc)₂</text>
              <rect x="15" y="55" width="135" height="40" rx="6" fill="#7e22ce" />
              <text x="82" y="72" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="extrabold">VIOLET COLOR / BLACK</text>
              <text x="82" y="87" text-anchor="middle" fill="#e9d5ff" font-size="9">[Fe(CN)₅NOS]⁴⁻ / PbS ppt</text>
              <text x="82" y="115" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">If N+S ➔ Blood Red Fe(SCN)₃</text>
            </g>

            <!-- Branch 3: Halogens -->
            <g transform="translate(410, 95)">
              <rect x="0" y="0" width="165" height="135" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
              <text x="82" y="22" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">Halogens (Cl, Br, I)</text>
              <text x="82" y="42" text-anchor="middle" fill="#cbd5e1" font-size="9">HNO₃ boil + AgNO₃</text>
              <text x="15" y="65" fill="#ffffff" font-size="10">• AgCl = White (NH₄OH sol)</text>
              <text x="15" y="82" fill="#fef08a" font-size="10">• AgBr = Pale Yellow (spar)</text>
              <text x="15" y="99" fill="#facc15" font-size="10">• AgI = Yellow (insoluble)</text>
              <text x="82" y="120" text-anchor="middle" fill="#f87171" font-size="9" font-weight="bold">Must acidify with HNO₃ first!</text>
            </g>

            <!-- Branch 4: Phosphorus -->
            <g transform="translate(600, 95)">
              <rect x="0" y="0" width="170" height="135" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2" />
              <text x="85" y="22" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">Phosphorus (P)</text>
              <text x="85" y="42" text-anchor="middle" fill="#cbd5e1" font-size="9">Na₂O₂ + HNO₃ + Amm. Molybdate</text>
              <rect x="12" y="55" width="146" height="40" rx="6" fill="#15803d" />
              <text x="85" y="72" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="extrabold">CANARY YELLOW PPT</text>
              <text x="85" y="87" text-anchor="middle" fill="#86efac" font-size="8">(NH₄)₃PO₄·12MoO₃</text>
              <text x="85" y="115" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">Fused with Na₂O₂ peroxide</text>
            </g>
          </svg>`,
          caption: 'Lassaigne\'s Test Flowchart: Fusion with Na converts covalent elements into ionic species. Specific reagent additions produce distinct diagnostic coloured precipitates.',
          guide: 'NEET Trap: Hydrazine (NH₂NH₂) lacks Carbon, so it DOES NOT form NaCN upon sodium fusion and gives a NEGATIVE Lassaigne test for Nitrogen!'
        }
      ],
      importantPoints: [
        'HNO₃ Acidification Necessity: HNO₃ decomposes NaCN into HCN↑ and Na₂S into H₂S↑. If not removed, CN⁻ and S²⁻ react with AgNO₃ to give white AgCN or black Ag₂S precipitates, creating false positive halogen results!',
        'Hydrazine Exception: NH₂NH₂ contains Nitrogen but NO Carbon. It cannot form NaCN during sodium fusion and fails Lassaigne\'s test.',
        'Prussian Blue Formula: Fe₄[Fe(CN)₆]₃ (Iron(III) hexacyanoferrate(II)). Oxidation states: Outer Fe is +3, inner Fe in complex is +2.'
      ]
    },

    {
      heading: '5. Quantitative Analysis: Estimation of C, H, N, Halogens, S, and P',
      paragraphs: [
        '1. Carbon & Hydrogen (Liebig\'s Combustion Method): A known mass (m) of organic compound is heated in excess oxygen over red-hot CuO. Carbon turns into CO₂ (absorbed in KOH U-tube) and Hydrogen turns into H₂O (absorbed in anhydrous CaCl₂ U-tube).',
        '• % C = (12 / 44) × (Mass of CO₂ / m) × 100',
        '• % H = (2 / 18) × (Mass of H₂O / m) × 100',
        '2. Nitrogen Estimation — Dumas Method: Heated with CuO in a CO₂ atmosphere. Nitrogen is converted into N₂ gas, collected over aqueous KOH solution in a nitrometer (KOH absorbs CO₂).',
        '• % N = (28 / 22400) × (V_STP / m) × 100  [where V_STP is volume of N₂ gas at STP in mL]',
        '3. Nitrogen Estimation — Kjeldahl Method: Compound digested with conc. H₂SO₄ using CuSO₄/K₂SO₄ catalyst to convert Nitrogen into (NH₄)₂SO₄. Evolved NH₃ upon distillation with NaOH is absorbed in a known volume of standard acid. Unreacted acid is back-titrated with standard NaOH.',
        '• % N = (1.4 × M × V) / m  [where M = Molarity of H₂SO₄, V = Volume of H₂SO₄ neutralized by NH₃ in mL]',
        '• CRITICAL NEET LIMITATION: Kjeldahl method FAILS for compounds containing nitrogen in ring (pyridine, quinoline) or in nitro (-NO₂) and azo (-N=N-) groups, because nitrogen in these compounds is NOT converted to ammonium sulphate!',
        '4. Halogen Estimation (Carius Method): Heated with fuming HNO₃ and AgNO₃ in a sealed Carius tube. Halogens precipitate as AgX.',
        '• % X = (Atomic Mass of X / Molar Mass of AgX) × (Mass of AgX / m) × 100',
        '5. Sulphur Estimation (Carius Method): Heated with fuming HNO₃ to form H₂SO₄, precipitated as BaSO₄ with BaCl₂.',
        '• % S = (32 / 233) × (Mass of BaSO₄ / m) × 100',
        '6. Phosphorus Estimation: Compound heated with fuming HNO₃, precipitated as ammonium phosphomolybdate or as MgNH₄PO₄ and ignited to magnesium pyrophosphate (Mg₂P₂O₇).',
        '• % P = (62 / 222) × (Mass of Mg₂P₂O₇ / m) × 100'
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 800 200" class="w-full h-auto max-h-52" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="200" rx="16" fill="#0f172a" />
            
            <text x="400" y="25" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">QUANTITATIVE ESTIMATION APPARATUS & FORMULAS</text>

            <!-- Dumas -->
            <g transform="translate(30, 45)">
              <rect x="0" y="0" width="220" height="135" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" />
              <text x="110" y="22" text-anchor="middle" fill="#60a5fa" font-size="12" font-weight="bold">Dumas Method (N₂ Gas)</text>
              <text x="15" y="45" fill="#cbd5e1" font-size="10">• Heated with CuO in CO₂</text>
              <text x="15" y="62" fill="#cbd5e1" font-size="10">• N₂ collected over KOH</text>
              <rect x="10" y="75" width="200" height="45" rx="6" fill="#0f172a" stroke="#2563eb" />
              <text x="110" y="95" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">% N = (28 / 22400) × (V_STP / m) × 100</text>
              <text x="110" y="112" text-anchor="middle" fill="#34d399" font-size="9">Universal for all N compounds</text>
            </g>

            <!-- Kjeldahl -->
            <g transform="translate(280, 45)">
              <rect x="0" y="0" width="240" height="135" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
              <text x="120" y="22" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">Kjeldahl Method (NH₃ Titration)</text>
              <text x="15" y="45" fill="#cbd5e1" font-size="10">• Digested with H₂SO₄ ➔ (NH₄)₂SO₄</text>
              <text x="15" y="62" fill="#cbd5e1" font-size="10">• NH₃ absorbed in standard acid</text>
              <rect x="10" y="75" width="220" height="45" rx="6" fill="#0f172a" stroke="#059669" />
              <text x="120" y="95" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">% N = (1.4 × M × V) / m</text>
              <text x="120" y="112" text-anchor="middle" fill="#f87171" font-size="9" font-weight="bold">Fails for nitro, azo, pyridine N!</text>
            </g>

            <!-- Carius -->
            <g transform="translate(550, 45)">
              <rect x="0" y="0" width="220" height="135" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
              <text x="110" y="22" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">Carius Method (Halogens/S)</text>
              <text x="15" y="45" fill="#cbd5e1" font-size="10">• Fuming HNO₃ in Carius Tube</text>
              <text x="15" y="62" fill="#cbd5e1" font-size="10">• Precipitates AgX or BaSO₄</text>
              <rect x="10" y="75" width="200" height="45" rx="6" fill="#0f172a" stroke="#d97706" />
              <text x="110" y="95" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">% X = (At.Wt/M.Wt) × (m_AgX/m) × 100</text>
              <text x="110" y="112" text-anchor="middle" fill="#93c5fd" font-size="9">% S = (32 / 233) × (m_BaSO₄/m) × 100</text>
            </g>
          </svg>`,
          caption: 'Quantitative Estimation Formulas & Method Comparison: Dumas measures N₂ volume; Kjeldahl titrates NH₃; Carius measures precipitate mass (AgX or BaSO₄).',
          guide: 'Molar masses to memorize for Carius NEET numericals: AgCl = 143.5 g/mol, AgBr = 188 g/mol, AgI = 235 g/mol, BaSO₄ = 233 g/mol.'
        }
      ],
      importantPoints: [
        'Dumas vs Kjeldahl Applicability: Dumas works for ALL nitrogen compounds. Kjeldahl fails for nitro, azo, and ring nitrogen.',
        'Liebig Method Absorbents: Anhydrous CaCl₂ absorbs H₂O first; KOH solution absorbs CO₂ second.',
        'Phosphorus Pyrophosphate Factor: In phosphorus estimation as Mg₂P₂O₇, 2 moles of P (62 g) produce 1 mole of Mg₂P₂O₇ (222 g).'
      ]
    }
  ],

  formulae: [
    {
      title: 'Carbon & Hydrogen Percentage (Liebig Combustion)',
      formula: '% C = \\frac{12}{44} \\times \\frac{\\text{Mass of } CO_2}{m} \\times 100, \\quad % H = \\frac{2}{18} \\times \\frac{\\text{Mass of } H_2O}{m} \\times 100',
      variables: 'm = mass of organic compound (g); Mass of CO₂ (g); Mass of H₂O (g)',
      whenToUse: 'When organic compound undergoes complete combustion over heated CuO.',
      calculationExample: {
        problem: '0.30 g of an organic compound on combustion gave 0.44 g of CO₂ and 0.18 g of H₂O. Calculate the percentages of carbon and hydrogen.',
        given: 'Mass of compound (m) = 0.30 g; Mass of CO₂ = 0.44 g; Mass of H₂O = 0.18 g',
        stepByStep: [
          'Step 1: Calculate % C = (12 / 44) × (0.44 / 0.30) × 100 = 0.2727 × 1.4667 × 100 = 40.0%',
          'Step 2: Calculate % H = (2 / 18) × (0.18 / 0.30) × 100 = 0.1111 × 0.60 × 100 = 6.67%'
        ],
        answer: 'Carbon = 40.0%, Hydrogen = 6.67%'
      }
    },
    {
      title: 'Nitrogen Percentage (Dumas Method)',
      formula: '% N = \\frac{28}{22400} \\times \\frac{V_{STP}}{m} \\times 100',
      variables: 'V_STP = Volume of N₂ gas at STP (mL); m = mass of organic compound (g)',
      whenToUse: 'When nitrogen is estimated by measuring N₂ gas volume collected over aqueous KOH at STP.',
      calculationExample: {
        problem: '0.25 g of an organic compound gave 30 mL of nitrogen gas collected at 300 K and 715 mm pressure. Aqueous tension at 300 K is 15 mm. Calculate percentage of Nitrogen.',
        given: 'm = 0.25 g; V₁ = 30 mL; T₁ = 300 K; Dry P₁ = 715 - 15 = 700 mm Hg',
        stepByStep: [
          'Step 1: Reduce N₂ volume to STP using P₁V₁/T₁ = P₂V₂/T₂:',
          'V_STP = (700 × 30 × 273) / (760 × 300) = 5733000 / 228000 = 25.14 mL',
          'Step 2: Calculate % N = (28 / 22400) × (25.14 / 0.25) × 100 = 12.57%'
        ],
        answer: '% N = 12.57%'
      }
    },
    {
      title: 'Nitrogen Percentage (Kjeldahl Method)',
      formula: '% N = \\frac{1.4 \\times M \\times V}{m}',
      variables: 'M = Molarity of H₂SO₄; V = Volume of H₂SO₄ neutralized by evolved NH₃ (mL); m = mass of organic compound (g)',
      whenToUse: 'When evolved NH₃ gas is absorbed in excess standard H₂SO₄ and back-titrated with NaOH.',
      calculationExample: {
        problem: '0.50 g of an organic compound was digested according to Kjeldahl\'s method. Evolved ammonia neutralized 10 mL of 1 M H₂SO₄. Calculate percentage of Nitrogen.',
        given: 'm = 0.50 g; M = 1 M; V = 10 mL of 1 M H₂SO₄ (corresponds to 20 mEq acid neutralized by NH₃)',
        stepByStep: [
          'Step 1: Note that 10 mL of 1 M H₂SO₄ = 20 mL of 1 N H₂SO₄ = 20 mEq of acid.',
          'Step 2: Apply formula % N = (1.4 × 2 × M × V) / m = (1.4 × 2 × 1 × 10) / 0.50 = 28 / 0.50 = 56.0%'
        ],
        answer: '% N = 56.0%'
      }
    },
    {
      title: 'Halogen Percentage (Carius Method)',
      formula: '% X = \\frac{\\text{Atomic Mass of } X}{\\text{Molar Mass of } AgX} \\times \\frac{\\text{Mass of } AgX}{m} \\times 100',
      variables: 'm = mass of compound; AgCl = 143.5; AgBr = 188; AgI = 235',
      whenToUse: 'When halogen precipitates as silver halide (AgX) in a Carius tube.',
      calculationExample: {
        problem: 'In Carius method of estimation of halogen, 0.15 g of an organic compound gave 0.12 g of AgBr. Find the percentage of bromine in the compound. (At. mass Ag = 108, Br = 80)',
        given: 'm = 0.15 g; Mass of AgBr = 0.12 g; Molar mass of AgBr = 188 g/mol',
        stepByStep: [
          'Step 1: Apply Carius formula: % Br = (80 / 188) × (0.12 / 0.15) × 100',
          'Step 2: Simplify: (80 / 188) = 0.42553; (0.12 / 0.15) = 0.80',
          'Step 3: % Br = 0.42553 × 0.80 × 100 = 34.04%'
        ],
        answer: '% Br = 34.04%'
      }
    },
    {
      title: 'Sulphur Percentage (Carius Method)',
      formula: '% S = \\frac{32}{233} \\times \\frac{\\text{Mass of } BaSO_4}{m} \\times 100',
      variables: 'm = mass of compound (g); Mass of BaSO₄ ppt (g)',
      whenToUse: 'When sulphur in organic compound is oxidized to H₂SO₄ and precipitated as BaSO₄.',
      calculationExample: {
        problem: '0.157 g of an organic compound gave 0.466 g of BaSO₄ in Carius estimation. Calculate percentage of Sulphur.',
        given: 'm = 0.157 g; Mass of BaSO₄ = 0.466 g; Molar mass BaSO₄ = 233 g/mol',
        stepByStep: [
          'Step 1: Apply formula: % S = (32 / 233) × (0.466 / 0.157) × 100',
          'Step 2: Note that 0.466 / 233 = 0.002 moles of BaSO₄',
          'Step 3: % S = (32 × 0.002 / 0.157) × 100 = 0.064 / 0.157 × 100 = 40.76%'
        ],
        answer: '% S = 40.76%'
      }
    },
    {
      title: 'Retardation Factor (R_f Value)',
      formula: 'R_f = \\frac{\\text{Distance moved by substance from baseline}}{\\text{Distance moved by solvent front from baseline}}',
      variables: 'Distances measured in cm or mm; R_f is dimensionless and always ≤ 1.0',
      whenToUse: 'Characterizing spots on thin-layer or paper chromatograms.',
      calculationExample: {
        problem: 'In a TLC experiment, the solvent front moved 10.0 cm from the origin baseline while a component spot moved 4.2 cm. Calculate its R_f value.',
        given: 'Distance moved by spot = 4.2 cm; Distance moved by solvent front = 10.0 cm',
        stepByStep: [
          'Step 1: Apply R_f formula: R_f = 4.2 / 10.0 = 0.42'
        ],
        answer: 'R_f = 0.42'
      }
    }
  ],

  visualLearning: {
    type: 'table',
    caption: 'NEET Master Comparison Table: Organic Purification Techniques',
    tableData: {
      headers: ['Method', 'Principle', 'Used For', 'Key Condition', 'NEET Clue / Example'],
      rows: [
        [
          'Crystallization',
          'Difference in solubilities in a solvent at different temperatures',
          'Purifying organic solids containing soluble/insoluble impurities',
          'Solute sparingly soluble at room temp, highly soluble at boiling temp',
          'Sugar, Benzoic acid, Acetanilide'
        ],
        [
          'Sublimation',
          'Direct solid to vapour phase change (Solid ⇌ Vapour)',
          'Separating sublimable solids from non-sublimable impurities',
          'Sublimable solid must have high vapour pressure below melting point',
          'Camphor, Benzoic acid, Naphthalene, NH₄Cl, Anthracene'
        ],
        [
          'Simple Distillation',
          'Vaporization followed by condensation',
          'Separating volatile liquids from non-volatile matter or liquids with large Δb.p.',
          'Boiling point difference Δb.p. > 25 K',
          'Chloroform (334 K) + Aniline (457 K)'
        ],
        [
          'Fractional Distillation',
          'Repeated vaporization-condensation in fractionating column',
          'Separating miscible liquids with close boiling points',
          'Boiling point difference Δb.p. < 25 K',
          'Acetone (329 K) + Methyl alcohol (338 K); Crude petroleum'
        ],
        [
          'Steam Distillation',
          'Boiling mixture when P_total = P_organic + P_water = P_atm',
          'Purifying steam-volatile, water-immiscible organic liquids',
          'Organic liquid distils at T < normal b.p. without thermal decomposition',
          'Aniline, o-Nitrophenol, Nitrobenzene'
        ],
        [
          'Vacuum Distillation',
          'Distillation under lowered external atmospheric pressure',
          'Purifying liquids that decompose at or below normal b.p.',
          'Lowering external pressure lowers boiling point below decomposition temp',
          'Glycerol (b.p. 563 K distils at 453 K / 12 mmHg)'
        ],
        [
          'Differential Extraction',
          'Partition law / Distribution between immiscible liquid phases',
          'Extracting solute from aqueous solution into organic solvent',
          'Solute significantly more soluble in organic solvent than water',
          'Separating funnel; multiple small extractions > single large extraction'
        ],
        [
          'Chromatography',
          'Differential adsorption or partition between stationary & mobile phases',
          'Separating complex mixtures, testing purity, monitoring reactions',
          'Adsorption (Column, TLC) or Partition (Paper Chromatography)',
          'Paper chromatography = Partition; TLC R_f = spot dist / solvent front dist'
        ]
      ]
    }
  },

  neetImportantPoints: [
    '📌 Aniline Purification: Aniline is purified by Steam Distillation because it is steam volatile and immiscible with water.',
    '📌 Glycerol Purification: Glycerol decomposes at its normal boiling point (563 K) and must be purified by Vacuum Distillation (Distillation under reduced pressure) at 453 K under 12 mm Hg.',
    '📌 Kjeldahl Limitation: Kjeldahl\'s method fails for compounds containing nitrogen in ring (e.g., pyridine, quinoline) and nitro (-NO₂) or azo (-N=N-) groups because nitrogen in these compounds is not converted to ammonium sulphate.',
    '📌 Lassaigne Test HNO₃ Necessity: In testing for halogens, the sodium fusion extract MUST be acidified with conc. HNO₃ and boiled before adding AgNO₃ to decompose any NaCN or Na₂S present into HCN and H₂S gases. Otherwise, CN⁻ and S²⁻ ions interfere with AgNO₃ test.',
    '📌 Prussian Blue Complex: The chemical formula of Prussian blue is Fe₄[Fe(CN)₆]₃ (Iron(III) hexacyanoferrate(II)).',
    '📌 Hydrazine Negative Test: Hydrazine (NH₂NH₂) contains Nitrogen but NO Carbon. It cannot form NaCN during sodium fusion and therefore fails Lassaigne\'s test for Nitrogen.',
    '📌 Blood Red Coloration: When both Nitrogen and Sulphur are present in an organic compound, sodium fusion yields NaSCN, which reacts with Fe³⁺ to form blood-red [Fe(SCN)]²⁺.',
    '📌 Paper Chromatography Partition: Paper chromatography is an example of PARTITION chromatography where water bound in cellulose paper acts as the stationary phase.',
    '📌 Extraction Efficiency: Multiple extractions with smaller volumes of organic solvent are more efficient than a single extraction with the total volume of solvent.',
    '📌 Dumas Method Universality: Unlike Kjeldahl method, Dumas method is universal and estimates Nitrogen in ALL organic nitrogen compounds.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming Kjeldahl method works for all organic nitrogen compounds.',
      correctFact: 'Kjeldahl method FAILS for nitro (-NO₂), azo (-N=N-), and heterocyclic ring nitrogen (pyridine, quinoline). Dumas method must be used instead.',
      whyItMattersForNEET: 'Tested repeatedly in NEET MCQs as an exception question.'
    },
    {
      commonConfusion: 'Acidifying Sodium Fusion Extract with HCl or H₂SO₄ before testing for Halogens.',
      correctFact: 'SFE MUST be acidified with conc. HNO₃. Acidifying with HCl introduces Cl⁻ ions (giving false AgCl white ppt), while H₂SO₄ precipitates insoluble Ag₂SO₄.',
      whyItMattersForNEET: 'Crucial conceptual trap regarding qualitative reagent selection.'
    },
    {
      commonConfusion: 'Thinking Steam Distillation requires the organic liquid to have a boiling point lower than water.',
      correctFact: 'Steam distillation works for liquids with HIGH boiling points (e.g., Aniline b.p. 457 K) because the mixture boils when P_organic + P_water = P_atm, allowing the liquid to distill at ~371 K.',
      whyItMattersForNEET: 'Tests physical chemistry principles of immiscible liquid vapour pressures.'
    },
    {
      commonConfusion: 'Confusing o-Nitrophenol and p-Nitrophenol separation method.',
      correctFact: 'o-Nitrophenol is steam-volatile due to intramolecular H-bonding, whereas p-Nitrophenol is non-steam-volatile due to intermolecular H-bonding. They are separated by Steam Distillation.',
      whyItMattersForNEET: 'Frequently asked link between hydrogen bonding and purification techniques.'
    },
    {
      commonConfusion: 'Believing Paper Chromatography is an Adsorption technique.',
      correctFact: 'Paper Chromatography is a PARTITION chromatography technique where water absorbed in paper fibers serves as the liquid stationary phase.',
      whyItMattersForNEET: 'Direct NCERT textbook statement tested in AIPMT/NEET.'
    }
  ],

  quickRevision: [
    '✓ Crystallization = Solubility difference at different temperatures.',
    '✓ Sublimation = Solid ⇌ Vapour (Camphor, Benzoic acid, Naphthalene, NH₄Cl).',
    '✓ Simple Distillation = Δb.p. > 25 K; Fractional Distillation = Δb.p. < 25 K.',
    '✓ Steam Distillation = Steam volatile + water immiscible (Aniline, o-nitrophenol).',
    '✓ Vacuum Distillation = Liquids decomposing at normal b.p. (Glycerol).',
    '✓ Lassaigne Test = Converts covalent N, S, X to ionic NaCN, Na₂S, NaX.',
    '✓ Prussian Blue = Fe₄[Fe(CN)₆]₃ for Nitrogen; Violet = Na₄[Fe(CN)₅NOS] for Sulphur.',
    '✓ Blood Red = [Fe(SCN)]²⁺ when both N and S are present.',
    '✓ AgCl = White (NH₄OH sol); AgBr = Pale Yellow (spar sol); AgI = Yellow (insol).',
    '✓ Kjeldahl Fails for = Nitro (-NO₂), Azo (-N=N-), Pyridine / Ring N.',
    '✓ Dumas Method = Measures N₂ gas volume collected over KOH at STP.',
    '✓ Carius Method = Measures AgX mass for Halogens, BaSO₄ mass for Sulphur.'
  ],

  practiceQuestions: [
  {
    "id": "chem-purif-pq1",
    "question": "Which of the following organic compounds will NOT give a positive Lassaigne's test for Nitrogen?",
    "options": [
      "A. Aniline (C₆H₅NH₂)",
      "B. Urea (NH₂CONH₂)",
      "C. Hydrazine (NH₂NH₂)",
      "D. Glycine (H₂NCH₂COOH)"
    ],
    "correctAnswer": 2,
    "explanation": "Lassaigne's test for nitrogen requires fusion with metallic sodium to form NaCN (Na + C + N → NaCN). Hydrazine (NH₂NH₂) contains nitrogen but lacks carbon. Therefore, it cannot form NaCN during sodium fusion and gives a negative test for nitrogen."
  },
  {
    "id": "chem-purif-pq2",
    "question": "A mixture of o-nitrophenol and p-nitrophenol can be separated using:",
    "options": [
      "A. Sublimation",
      "B. Steam Distillation",
      "C. Crystallization",
      "D. Differential Extraction"
    ],
    "correctAnswer": 1,
    "explanation": "o-Nitrophenol exhibits intramolecular hydrogen bonding (chelation), making it volatile in steam. p-Nitrophenol exhibits intermolecular hydrogen bonding, raising its boiling point and rendering it non-steam volatile. Hence, steam distillation separates them effectively."
  },
  {
    "id": "chem-purif-pq3",
    "question": "During halogen detection in Lassaigne's test, why is the sodium fusion extract boiled with concentrated HNO₃ before adding AgNO₃?",
    "options": [
      "A. To oxidize AgNO₃ to Ag₂O",
      "B. To decompose NaCN to HCN gas and Na₂S to H₂S gas",
      "C. To dissolve silver halides",
      "D. To maintain basic medium"
    ],
    "correctAnswer": 1,
    "explanation": "If Nitrogen or Sulphur is present, SFE contains NaCN or Na₂S. Adding AgNO₃ directly would precipitate white AgCN or black Ag₂S, causing false positive interference. Boiling with conc. HNO₃ expels HCN and H₂S gases."
  },
  {
    "id": "chem-purif-pq4",
    "question": "In Kjeldahl's estimation of nitrogen, 0.5 g of an organic compound neutralized 10 mL of 1 M H₂SO₄. The percentage of nitrogen in the compound is:",
    "options": [
      "A. 14.0%",
      "B. 28.0%",
      "C. 56.0%",
      "D. 42.0%"
    ],
    "correctAnswer": 2,
    "explanation": "10 mL of 1 M H₂SO₄ = 20 mL of 1 N H₂SO₄. % N = (1.4 × Normality × Volume of acid) / Mass of compound = (1.4 × 2 × 10) / 0.50 = 28 / 0.50 = 56.0%."
  },
  {
    "id": "chem-purif-pq5",
    "question": "Assertion (A): Glycerol is purified by distillation under reduced pressure.\nReason (R): Glycerol is a trihydric alcohol that decomposes at its normal boiling point (563 K).",
    "options": [
      "A. Both A and R are true and R is the correct explanation of A",
      "B. Both A and R are true but R is NOT the correct explanation of A",
      "C. A is true but R is false",
      "D. A is false but R is true"
    ],
    "correctAnswer": 0,
    "explanation": "Glycerol decomposes at its normal boiling point (563 K at 760 mm Hg). Lowering the surrounding pressure to 12 mm Hg lowers its boiling point to 453 K, allowing smooth distillation without decomposition. Both statements are true and Reason explains Assertion."
  },
  {
    "id": "prac-chempurificationcharacterisation-6",
    "question": "Regarding Purification & Characterisation of Organic Compounds, which of the following statements correctly resolves a common misconception about \"Assuming Kjeldahl method works for all organic nitrogen compounds.\"?",
    "options": [
      "Kjeldahl method FAILS for nitro (-NO₂), azo (-N=N-), and heterocyclic ring nitrogen (pyridine, quinoline). Dumas method must be used instead.",
      "Incorrect assumption: Assuming Kjeldahl method works for all organic nitrogen compounds.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Kjeldahl method FAILS for nitro (-NO₂), azo (-N=N-), and heterocyclic ring nitrogen (pyridine, quinoline). Dumas method must be used instead.. Tested repeatedly in NEET MCQs as an exception question.",
    "difficulty": "Medium",
    "conceptTested": "Purification & Characterisation of Organic Compounds - Conceptual Clarity"
  },
  {
    "id": "prac-chempurificationcharacterisation-7",
    "question": "Regarding Purification & Characterisation of Organic Compounds, which of the following statements correctly resolves a common misconception about \"Acidifying Sodium Fusion Extract with HCl or H₂SO₄ before testing for Halogens.\"?",
    "options": [
      "SFE MUST be acidified with conc. HNO₃. Acidifying with HCl introduces Cl⁻ ions (giving false AgCl white ppt), while H₂SO₄ precipitates insoluble Ag₂SO₄.",
      "Incorrect assumption: Acidifying Sodium Fusion Extract with HCl or H₂SO₄ before testing for Halogens.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "SFE MUST be acidified with conc. HNO₃. Acidifying with HCl introduces Cl⁻ ions (giving false AgCl white ppt), while H₂SO₄ precipitates insoluble Ag₂SO₄.. Crucial conceptual trap regarding qualitative reagent selection.",
    "difficulty": "Medium",
    "conceptTested": "Purification & Characterisation of Organic Compounds - Conceptual Clarity"
  },
  {
    "id": "prac-chempurificationcharacterisation-8",
    "question": "Regarding Purification & Characterisation of Organic Compounds, which of the following statements correctly resolves a common misconception about \"Thinking Steam Distillation requires the organic liquid to have a boiling point lower than water.\"?",
    "options": [
      "Steam distillation works for liquids with HIGH boiling points (e.g., Aniline b.p. 457 K) because the mixture boils when P_organic + P_water = P_atm, allowing the liquid to distill at ~371 K.",
      "Incorrect assumption: Thinking Steam Distillation requires the organic liquid to have a boiling point lower than water.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Steam distillation works for liquids with HIGH boiling points (e.g., Aniline b.p. 457 K) because the mixture boils when P_organic + P_water = P_atm, allowing the liquid to distill at ~371 K.. Tests physical chemistry principles of immiscible liquid vapour pressures.",
    "difficulty": "Medium",
    "conceptTested": "Purification & Characterisation of Organic Compounds - Conceptual Clarity"
  },
  {
    "id": "prac-chempurificationcharacterisation-9",
    "question": "Regarding Purification & Characterisation of Organic Compounds, which of the following statements correctly resolves a common misconception about \"Confusing o-Nitrophenol and p-Nitrophenol separation method.\"?",
    "options": [
      "o-Nitrophenol is steam-volatile due to intramolecular H-bonding, whereas p-Nitrophenol is non-steam-volatile due to intermolecular H-bonding. They are separated by Steam Distillation.",
      "Incorrect assumption: Confusing o-Nitrophenol and p-Nitrophenol separation method.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "o-Nitrophenol is steam-volatile due to intramolecular H-bonding, whereas p-Nitrophenol is non-steam-volatile due to intermolecular H-bonding. They are separated by Steam Distillation.. Frequently asked link between hydrogen bonding and purification techniques.",
    "difficulty": "Medium",
    "conceptTested": "Purification & Characterisation of Organic Compounds - Conceptual Clarity"
  },
  {
    "id": "prac-chempurificationcharacterisation-10",
    "question": "Regarding Purification & Characterisation of Organic Compounds, which of the following statements correctly resolves a common misconception about \"Believing Paper Chromatography is an Adsorption technique.\"?",
    "options": [
      "Paper Chromatography is a PARTITION chromatography technique where water absorbed in paper fibers serves as the liquid stationary phase.",
      "Incorrect assumption: Believing Paper Chromatography is an Adsorption technique.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Paper Chromatography is a PARTITION chromatography technique where water absorbed in paper fibers serves as the liquid stationary phase.. Direct NCERT textbook statement tested in AIPMT/NEET.",
    "difficulty": "Medium",
    "conceptTested": "Purification & Characterisation of Organic Compounds - Conceptual Clarity"
  }
],
  pyqs: [
    {
      id: 'neet-pyq-purif-1',
      year: 2023,
      exam: 'NEET UG 2023',
      question: 'Which of the following techniques is most suitable for purification of organic compounds which are steam volatile and immiscible with water?',
      options: [
        '1. Steam distillation',
        '2. Sublimation',
        '3. Crystallisation',
        '4. Differential extraction'
      ],
      correctAnswer: 0,
      explanation: 'Steam distillation is specifically designed to purify organic compounds that are steam volatile and immiscible with water (e.g., Aniline, o-nitrophenol). The mixture boils when P_total = P_organic + P_water = P_atm, allowing the liquid to distil below its normal boiling point.',
      topicId: 'chem-purification-characterisation',
      difficulty: 'Easy',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.8.3'
    },
    {
      id: 'neet-pyq-purif-2',
      year: 2022,
      exam: 'NEET UG 2022',
      question: 'In Lassaigne\'s test for the detection of nitrogen in an organic compound, the Prussian blue colour is due to the formation of:',
      options: [
        '1. Fe₃[Fe(CN)₆]₂',
        '2. Fe₄[Fe(CN)₆]₃',
        '3. Na₃[Fe(CN)₆]',
        '4. Fe₂[Fe(CN)₆]'
      ],
      correctAnswer: 1,
      explanation: 'In Lassaigne\'s test for nitrogen, NaCN reacts with FeSO₄ to form sodium hexacyanoferrate(II), Na₄[Fe(CN)₆]. On adding FeCl₃ in presence of conc. H₂SO₄, Prussian blue complex Fe₄[Fe(CN)₆]₃ (Ferriferrocyanide / Iron(III) hexacyanoferrate(II)) is formed.',
      topicId: 'chem-purification-characterisation',
      difficulty: 'Easy',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.9.1'
    },
    {
      id: 'neet-pyq-purif-3',
      year: 2020,
      exam: 'NEET UG 2020',
      question: 'A compound on analysis gave C = 40%, H = 6.67%, and O = 53.33%. Its empirical formula is:',
      options: [
        '1. CH₂O',
        '2. CHO₂',
        '3. CH₄O',
        '4. C₂H₄O₂'
      ],
      correctAnswer: 0,
      explanation: 'Moles of C = 40 / 12 = 3.33; Moles of H = 6.67 / 1 = 6.67; Moles of O = 53.33 / 16 = 3.33. Dividing by smallest number (3.33): C : H : O = 1 : 2 : 1. Hence, Empirical Formula = CH₂O.',
      topicId: 'chem-purification-characterisation',
      difficulty: 'Easy',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Quantitative Analysis'
    },
    {
      id: 'neet-pyq-purif-4',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'In the Kjeldahl\'s method for estimation of nitrogen present in a soil sample, ammonia evolved from 0.75 g of sample neutralized 10 mL of 1 M H₂SO₄. The percentage of nitrogen in the soil is:',
      options: [
        '1. 37.33%',
        '2. 45.33%',
        '3. 35.00%',
        '4. 28.00%'
      ],
      correctAnswer: 0,
      explanation: '10 mL of 1 M H₂SO₄ = 20 mL of 1 N H₂SO₄ = 20 mEq of acid. % N = (1.4 × mEq of acid) / Mass of sample = (1.4 × 20) / 0.75 = 28 / 0.75 = 37.33%.',
      topicId: 'chem-purification-characterisation',
      difficulty: 'Medium',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.9.2'
    },
    {
      id: 'neet-pyq-purif-5',
      year: 2018,
      exam: 'NEET UG 2018',
      question: 'Which of the following organic compounds will NOT give Prussian blue color in Lassaigne\'s test for nitrogen?',
      options: [
        '1. Urea (NH₂CONH₂)',
        '2. Aniline (C₆H₅NH₂)',
        '3. Hydrazine (NH₂NH₂)',
        '4. Glycine (H₂NCH₂COOH)'
      ],
      correctAnswer: 2,
      explanation: 'Lassaigne\'s test for nitrogen requires Carbon and Nitrogen together to form cyanide ions (Na + C + N → NaCN). Hydrazine (NH₂NH₂) lacks carbon; hence it cannot form NaCN and fails to give Prussian blue test.',
      topicId: 'chem-purification-characterisation',
      difficulty: 'Medium',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.9.1'
    },
    {
      id: 'neet-pyq-purif-6',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'In Carius method of estimation of halogen, 0.15 g of an organic compound gave 0.12 g of AgBr. Find the percentage of bromine in the compound. (At. mass of Ag = 108, Br = 80)',
      options: [
        '1. 34.04%',
        '2. 42.50%',
        '3. 33.33%',
        '4. 50.00%'
      ],
      correctAnswer: 0,
      explanation: 'Molar mass of AgBr = 108 + 80 = 188 g/mol. % Br = (Atomic Mass of Br / Molar Mass of AgBr) × (Mass of AgBr / Mass of compound) × 100 = (80 / 188) × (0.12 / 0.15) × 100 = 0.4255 × 0.80 × 100 = 34.04%.',
      topicId: 'chem-purification-characterisation',
      difficulty: 'Medium',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.9.2'
    },
    {
      id: 'neet-pyq-purif-7',
      year: 2015,
      exam: 'AIPMT 2015',
      question: 'Paper chromatography is an example of:',
      options: [
        '1. Partition chromatography',
        '2. Thin layer chromatography',
        '3. Column chromatography',
        '4. Adsorption chromatography'
      ],
      correctAnswer: 0,
      explanation: 'Paper chromatography is a type of partition chromatography. Water bound in the cellulose fibers of paper serves as the liquid stationary phase, while a moving solvent acts as the mobile phase.',
      topicId: 'chem-purification-characterisation',
      difficulty: 'Easy',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.8.5'
    },
    {
      id: 'neet-pyq-purif-8',
      year: 2014,
      exam: 'AIPMT 2014',
      question: 'A mixture containing o-nitrophenol and p-nitrophenol can be separated by:',
      options: [
        '1. Steam distillation',
        '2. Crystallisation',
        '3. Fractional distillation',
        '4. Sublimation'
      ],
      correctAnswer: 0,
      explanation: 'o-Nitrophenol is steam volatile due to intramolecular hydrogen bonding, whereas p-nitrophenol is non-steam volatile due to intermolecular hydrogen bonding. Thus, they are cleanly separated by steam distillation.',
      topicId: 'chem-purification-characterisation',
      difficulty: 'Easy',
      ncertReference: 'NCERT Class 11 Chemistry Chapter 8, Section 8.8.3'
    }
  ],

  neetMarksPotential: {
    topicName: 'Purification & Characterisation of Organic Compounds',
    confidenceLabel: 'HIGH',
    confidenceText: 'High Confidence: Verified against 8 official NEET/AIPMT paper appearances (8 direct questions).',
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
    historicalMarksRangeText: '0 to 4 marks per paper (tested in 8 of 15 analyzed papers)',
    whatThisMeansForYou: 'High yield conceptual and numerical topic in NEET Chemistry. Expect 1 direct question (4 marks) on purification technique selection, Lassaigne test color reactions, or Kjeldahl/Dumas/Carius numericals.',
    yearWiseBreakdown: [
      { year: 2023, exam: 'NEET UG 2023', directPyqCount: 1, marks: 4, questionType: 'Steam distillation selection for steam volatile liquid', classification: 'Direct', verificationStatus: 'Verified (NEET UG 2023)' },
      { year: 2022, exam: 'NEET UG 2022', directPyqCount: 1, marks: 4, questionType: 'Prussian blue complex formula in Lassaigne test', classification: 'Direct', verificationStatus: 'Verified (NEET UG 2022)' },
      { year: 2020, exam: 'NEET UG 2020', directPyqCount: 1, marks: 4, questionType: 'Empirical formula calculation from C, H, O %', classification: 'Direct', verificationStatus: 'Verified (NEET UG 2020)' },
      { year: 2019, exam: 'NEET UG 2019', directPyqCount: 1, marks: 4, questionType: 'Kjeldahl nitrogen % numerical calculation', classification: 'Direct', verificationStatus: 'Verified (NEET UG 2019)' },
      { year: 2018, exam: 'NEET UG 2018', directPyqCount: 1, marks: 4, questionType: 'Hydrazine negative Lassaigne test exception', classification: 'Direct', verificationStatus: 'Verified (NEET UG 2018)' },
      { year: 2017, exam: 'NEET UG 2017', directPyqCount: 1, marks: 4, questionType: 'Carius AgBr bromine % numerical calculation', classification: 'Direct', verificationStatus: 'Verified (NEET UG 2017)' },
      { year: 2015, exam: 'AIPMT 2015', directPyqCount: 1, marks: 4, questionType: 'Paper chromatography partition classification', classification: 'Direct', verificationStatus: 'Verified (AIPMT 2015)' },
      { year: 2014, exam: 'AIPMT 2014', directPyqCount: 1, marks: 4, questionType: 'o-nitrophenol & p-nitrophenol steam distillation', classification: 'Direct', verificationStatus: 'Verified (AIPMT 2014)' }
    ],
    sourceInfo: {
      dataSource: 'SATHEE (IIT Kanpur / Ministry of Education) & Official NEET Archives',
      analysisPeriod: '2014 – 2023 (15 Verified Papers)',
      directPyqsAnalyzedCount: 8,
      classificationMethod: 'Strict topic-level classification; chapter-level weightage was excluded.',
      disclaimer: 'Historical frequency is a record of past papers and not a guarantee of future NEET paper contents.'
    }
  }
};
