import { DetailedTopicContent } from '../../types/neet';

export const gasTransportMechanismsDetails: DetailedTopicContent = {
  topicId: "gas-transport-mechanisms",
  topicName: "Lung Volumes, Capacities & Gas Transport Mechanisms",
  subject: "Biology",
  class: "Class 11",
  classification: "Human Physiology",
  chapter: "Breathing and Exchange of Gases",
  whatIsThisTopic: "Detailed analysis of pulmonary volumes, derived lung capacities, spirometry calculations, partial pressure gradients driving gas diffusion, oxygen transport via the sigmoid oxyhaemoglobin dissociation curve (Bohr Effect), and CO2 transport via bicarbonate formation and Chloride shift (Hamburger phenomenon).",

  basicIdea: [
    "Respiratory Volumes: Four non-overlapping primary volumes—Tidal Volume (TV = ~500 mL), Inspiratory Reserve Volume (IRV = ~2500-3000 mL), Expiratory Reserve Volume (ERV = ~1000-1100 mL), and Residual Volume (RV = ~1100-1200 mL).",
    "Spirometry Limit: Residual Volume (RV) cannot be measured using a simple spirometer; hence, any capacity containing RV (FRC, TLC) cannot be directly measured with a spirometer.",
    "Partial Pressure Gradients: Gas diffusion is driven by partial pressure differences. Oxygen moves from Alveoli (104 mmHg) → Blood (40 mmHg) → Tissues (< 40 mmHg); CO2 moves from Tissues (> 45 mmHg) → Blood (40 mmHg) → Alveoli (40 mmHg).",
    "Gas Solubility Factor: CO2 is 20-25 times more soluble in blood plasma than O2. Consequently, CO2 diffuses across the respiratory membrane at a much higher rate despite a smaller partial pressure difference.",
    "Oxygen Transport: 97% bound to Haemoglobin (Hb) as Oxyhaemoglobin; 3% dissolved in plasma. Oxygen dissociation curve is SIGMOID. High pCO2, low pH (high H+), and high temperature shift the curve RIGHT (Bohr Effect), promoting O2 unloading at tissues.",
    "CO2 Transport: 70% as Bicarbonate ions (HCO3-), 20-25% as Carbaminohaemoglobin, 7% dissolved in plasma. Bicarbonate formation is catalyzed by Carbonic Anhydrase inside RBCs, accompanied by the Chloride Shift (Hamburger Phenomenon)."
  ],

  importantTerms: [
    {
      term: "Residual Volume (RV)",
      definition: "The volume of air remaining in the lungs even after a forcible, maximum expiration (~1100 to 1200 mL).",
      neetSignificance: "Prevents lung collapse and ensures continuous gas exchange between breaths; CANNOT be measured by spirometry."
    },
    {
      term: "Vital Capacity (VC)",
      definition: "The maximum volume of air a person can breathe in after a forced expiration (or breathe out after a forced inspiration). VC = ERV + TV + IRV (~3500 to 4500 mL).",
      neetSignificance: "Most important index of pulmonary functional capacity."
    },
    {
      term: "Partial Pressure (p)",
      definition: "The individual pressure exerted by a specific gas in a mixture of gases, proportional to its fractional concentration (p = P_total × % gas).",
      neetSignificance: "Drives simple diffusion across respiratory membranes and tissue capillaries."
    },
    {
      term: "Oxyhaemoglobin Dissociation Curve",
      definition: "A sigmoid plot of percentage saturation of haemoglobin against partial pressure of oxygen (pO2).",
      neetSignificance: "Demonstrates cooperative binding of O2 to Hb and physiological shift factors (Bohr Effect)."
    },
    {
      term: "Bohr Effect",
      definition: "The reduction in haemoglobin's affinity for O2 caused by high pCO2 or low pH (high H+), which shifts the oxygen dissociation curve to the RIGHT and promotes O2 release at metabolizing tissues.",
      neetSignificance: "High-yield physiological mechanism frequently tested in NEET UG."
    },
    {
      term: "Chloride Shift (Hamburger Phenomenon)",
      definition: "The movement of chloride ions (Cl-) from blood plasma into RBCs at the tissue level (and out of RBCs at the alveolar level) to maintain electrical neutrality as HCO3- diffuses out of RBCs.",
      neetSignificance: "Maintains ionic balance across RBC membranes during CO2 transport."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Respiratory / Lung Volumes (NCERT Values)",
      paragraphs: [
        "Pulmonary volumes are directly measured during clinical ventilation using an instrument called a Spirometer. Standard adult values vary according to gender, age, and physical stature.",
        "1. Tidal Volume (TV): Volume of air inspired or expired during a normal, restful respiration. Value = ~500 mL per breath. A healthy adult human inspires or expires approximately 6000 to 8000 mL of air per minute (TV × 12-16 breaths/min).",
        "2. Inspiratory Reserve Volume (IRV): Additional maximum volume of air that a person can inspire by a forceful inspiration over and above normal TV. Value = ~2500 to 3000 mL.",
        "3. Expiratory Reserve Volume (ERV): Additional maximum volume of air that a person can expire by a forceful expiration over and above normal TV. Value = ~1000 to 1100 mL.",
        "4. Residual Volume (RV): Volume of air remaining in the alveolar spaces and bronchial tree even after a maximum, forceful expiration. Value = ~1100 to 1200 mL.",
        "Clinical Importance of RV: RV ensures that alveoli remain continuously inflated and prevents pulmonary collapse (atelectasis). Because RV air cannot be voluntarily exhaled, RV CANNOT be measured directly by a spirometer!"
      ],
      tables: [
        {
          title: "Master Summary: NCERT Respiratory Volumes",
          headers: ["Volume Name", "Abbreviation", "Definition", "NCERT Typical Value"],
          rows: [
            ["Tidal Volume", "TV", "Air inhaled or exhaled during normal quiet breathing", "500 mL (~6000-8000 mL/min)"],
            ["Inspiratory Reserve Volume", "IRV", "Extra air inhaled by maximum forced effort after TV", "2500 – 3000 mL"],
            ["Expiratory Reserve Volume", "ERV", "Extra air exhaled by maximum forced effort after TV", "1000 – 1100 mL"],
            ["Residual Volume", "RV", "Air remaining in lungs after maximum forced exhalation", "1100 – 1200 mL (No Spirometry)"]
          ]
        }
      ]
    },
    {
      heading: "2. Respiratory / Lung Capacities (Derivations & Formulas)",
      paragraphs: [
        "Lung Capacities are combinations of two or more primary lung volumes. They describe overall physiological pulmonary performance.",
        "1. Inspiratory Capacity (IC): Total volume of air a person can inspire after a normal expiration. Formula: IC = TV + IRV. Value: 500 + 2500-3000 = ~3000 to 3500 mL.",
        "2. Expiratory Capacity (EC): Total volume of air a person can expire after a normal inspiration. Formula: EC = TV + ERV. Value: 500 + 1000-1100 = ~1500 to 1600 mL.",
        "3. Functional Residual Capacity (FRC): Volume of air that remains in the lungs after a normal, passive expiration. Formula: FRC = ERV + RV. Value: 1000-1100 + 1100-1200 = ~2100 to 2300 mL.",
        "4. Vital Capacity (VC): The maximum volume of air a person can breathe in after a forced expiration (or maximum air exhaled after forced inspiration). Formula: VC = ERV + TV + IRV. Value: 1000 + 500 + 2500-3000 = ~3500 to 4500 mL.",
        "5. Total Lung Capacity (TLC): Total volume of air accommodated in the lungs at the end of a maximum forced inspiration. Formula: TLC = RV + ERV + TV + IRV = VC + RV. Value: ~5000 to 6000 mL.",
        "SPIROMETRY RULE FOR NEET: Spirometers measure volume of air moved in or out of mouth. Because Residual Volume (RV) never exits the mouth, RV, FRC (ERV + RV), and TLC (VC + RV) CANNOT be measured using a simple spirometer!"
      ],
      tables: [
        {
          title: "Master Summary: NCERT Derived Lung Capacities",
          headers: ["Capacity Name", "Formula Definition", "Volume Components", "Typical NCERT Range"],
          rows: [
            ["Inspiratory Capacity (IC)", "IC = TV + IRV", "500 + (2500 to 3000)", "3000 – 3500 mL"],
            ["Expiratory Capacity (EC)", "EC = TV + ERV", "500 + (1000 to 1100)", "1500 – 1600 mL"],
            ["Functional Residual Capacity (FRC)", "FRC = ERV + RV", "(1000 to 1100) + (1100 to 1200)", "2100 – 2300 mL (No Spirometry)"],
            ["Vital Capacity (VC)", "VC = ERV + TV + IRV", "1000 + 500 + (2500 to 3000)", "3500 – 4500 mL"],
            ["Total Lung Capacity (TLC)", "TLC = VC + RV = IRV + TV + ERV + RV", "(3500 to 4500) + (1100 to 1200)", "5000 – 6000 mL (No Spirometry)"]
          ]
        }
      ]
    },
    {
      heading: "3. Step-by-Step Solved Spirometry Calculations",
      paragraphs: [
        "NEET frequently presents numerical problems requiring derivation of unknown lung capacities from given volumes."
      ],
      examples: [
        {
          problem: "NEET-Style Practice Question — NOT A PYQ: A subject has a Tidal Volume of 500 mL, Inspiratory Reserve Volume of 2800 mL, Expiratory Reserve Volume of 1100 mL, and Residual Volume of 1200 mL. Calculate: (a) Vital Capacity (VC), (b) Functional Residual Capacity (FRC), and (c) Total Lung Capacity (TLC).",
          given: "TV = 500 mL, IRV = 2800 mL, ERV = 1100 mL, RV = 1200 mL",
          stepByStep: [
            "Step 1: Vital Capacity (VC) = ERV + TV + IRV = 1100 + 500 + 2800 = 4400 mL.",
            "Step 2: Functional Residual Capacity (FRC) = ERV + RV = 1100 + 1200 = 2300 mL.",
            "Step 3: Total Lung Capacity (TLC) = VC + RV = 4400 + 1200 = 5600 mL."
          ],
          solution: "(a) VC = 4400 mL, (b) FRC = 2300 mL, (c) TLC = 5600 mL.",
          answer: "VC = 4400 mL, FRC = 2300 mL, TLC = 5600 mL"
        }
      ]
    },
    {
      heading: "4. Partial Pressure Gradients & Gas Diffusion Mechanisms",
      paragraphs: [
        "Gas exchange at both the alveolar-capillary membrane and tissue-capillary membrane occurs purely by SIMPLE DIFFUSION down partial pressure gradients without active cellular energy expenditure.",
        "Factors Governing Diffusion Rate: (1) Partial pressure gradient across membrane, (2) Solubility of the gas in biological fluids, (3) Thickness of the diffusion membrane (< 1 µm), and (4) Surface area available for diffusion (~70-100 m²).",
        "Role of Gas Solubility: Carbon dioxide (CO2) solubility in plasma is 20 to 25 times HIGHER than Oxygen (O2) solubility. Therefore, the amount of CO2 that can diffuse through the diffusion membrane per unit difference in partial pressure is much higher compared to O2."
      ],
      tables: [
        {
          title: "NCERT Table 14.1: Partial Pressures of Oxygen and Carbon Dioxide (in mmHg)",
          headers: ["Respiratory Gas", "Atmospheric Air", "Alveoli", "Deoxygenated Blood", "Oxygenated Blood", "Tissues"],
          rows: [
            ["Oxygen (pO2)", "159", "104", "40", "95", "40"],
            ["Carbon Dioxide (pCO2)", "0.3", "40", "45", "40", "45"]
          ]
        }
      ],
      importantPoints: [
        "O2 Gradient: Alveoli (104 mmHg) → Deoxygenated Blood (40 mmHg) → Diffusion occurs until blood pO2 reaches 95 mmHg → Tissues (40 mmHg).",
        "CO2 Gradient: Tissues (45 mmHg) → Deoxygenated Blood (45 mmHg) → Alveoli (40 mmHg) → Diffuses out to atmosphere (0.3 mmHg)."
      ]
    },
    {
      heading: "5. Transport of Oxygen — Oxyhaemoglobin & Dissociation Curve",
      paragraphs: [
        "Oxygen is transported in blood via two modes: (1) 3% dissolved in blood plasma. (2) 97% transported by Red Blood Cells (RBCs) bound to Haemoglobin (Hb) as Oxyhaemoglobin.",
        "Structure of Haemoglobin: Haemoglobin is a red, iron-containing conjugated protein consisting of 4 polypeptide subunits (2 alpha and 2 beta chains in adult HbA). Each polypeptide contains a Heme group with a ferrous ion (Fe2+). Each Hb molecule can bind up to FOUR molecules of O2 reversibly: Hb4 + 4 O2 ⇌ Hb4O8.",
        "Oxygen Dissociation Curve (Sigmoid Shape): Plotting % saturation of Hb with O2 against pO2 yields a SIGMOID (S-shaped) curve. This S-shape is caused by cooperative binding: binding of the first O2 molecule alters Hb conformation, increasing its affinity for subsequent O2 molecules.",
        "P50 Value: The partial pressure of O2 at which 50% of haemoglobin is saturated with oxygen (~27 mmHg).",
        "Shift Factors & Bohr Effect:",
        "• RIGHT SHIFT (Decreased affinity / Promotes O2 Unloading at Tissues): Triggered by High pCO2, High H+ / Low pH (Acidosis), High Temperature, and High 2,3-BPG. This rightward shift caused by high CO2/H+ is called the BOHR EFFECT.",
        "• LEFT SHIFT (Increased affinity / Promotes O2 Loading at Lungs): Triggered by High pO2, Low pCO2, Low H+ / High pH (Alkalosis), and Lower Temperature in alveolar capillaries.",
        "QUANTITATIVE DELIVERABILITY FACTOR: Under normal physiological resting conditions, every 100 mL of oxygenated blood carries ~20 mL of O2 and delivers approximately 5 mL of O2 to tissues."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto bg-slate-900 rounded-lg p-2">
            <rect width="500" height="320" fill="#0f172a" rx="8" />
            <text x="250" y="25" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">OXYGEN - HAEMOGLOBIN DISSOCIATION CURVE</text>

            <!-- Axes -->
            <line x1="50" y1="260" x2="450" y2="260" stroke="#94a3b8" stroke-width="2" />
            <line x1="50" y1="260" x2="50" y2="50" stroke="#94a3b8" stroke-width="2" />

            <!-- Labels -->
            <text x="250" y="295" fill="#cbd5e1" font-size="12" text-anchor="middle">Partial Pressure of Oxygen (pO2 in mmHg)</text>
            <text x="20" y="150" fill="#cbd5e1" font-size="12" transform="rotate(-90 20,150)" text-anchor="middle">% Saturation of Hb</text>

            <!-- Grid Lines -->
            <line x1="50" y1="155" x2="450" y2="155" stroke="#334155" stroke-dasharray="2,2" />
            <text x="40" y="160" fill="#94a3b8" font-size="10" text-anchor="end">50%</text>

            <!-- Normal Sigmoid Curve -->
            <path d="M 50,260 Q 150,240 170,155 T 420,60" fill="none" stroke="#38bdf8" stroke-width="3" />
            <text x="330" y="70" fill="#38bdf8" font-size="11" font-weight="bold">Normal Curve</text>

            <!-- Right Shift Curve (Bohr Effect) -->
            <path d="M 50,260 Q 200,250 220,155 T 440,80" fill="none" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4,4" />
            <text x="360" y="110" fill="#f43f5e" font-size="11" font-weight="bold">Right Shift (Bohr Effect)</text>
            <text x="360" y="125" fill="#fda4af" font-size="9">High pCO2, High H+, High Temp</text>

            <!-- Left Shift Curve -->
            <path d="M 50,260 Q 110,210 130,155 T 380,50" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4" />
            <text x="220" y="50" fill="#10b981" font-size="11" font-weight="bold">Left Shift</text>
            <text x="220" y="62" fill="#a7f3d0" font-size="9">Low pCO2, Low H+, Low Temp</text>

            <!-- P50 marker -->
            <line x1="170" y1="155" x2="170" y2="260" stroke="#f59e0b" stroke-dasharray="3,3" />
            <text x="170" y="275" fill="#f59e0b" font-size="10" text-anchor="middle">P50 (~27 mmHg)</text>
          </svg>`,
          caption: "Figure 14.2: Sigmoid Oxyhaemoglobin Dissociation Curve demonstrating Left Shift (Lungs) and Right Shift / Bohr Effect (Tissues).",
          guide: "WHAT TO OBSERVE: Note the S-shape (sigmoid) resulting from cooperative O2 binding. P50 occurs at ~27 mmHg. High pCO2, high H+ (low pH), and high temp cause a RIGHT SHIFT (red dashed curve), lowering Hb affinity and releasing O2 to tissues."
        }
      ]
    },
    {
      heading: "6. Transport of Carbon Dioxide — Bicarbonate & Chloride Shift",
      paragraphs: [
        "Carbon dioxide produced in tissue respiration is transported in blood in THREE distinct forms:",
        "1. Dissolved in Plasma: ~7% of total CO2 dissolves directly in physical solution in blood plasma as carbonic acid.",
        "2. As Carbaminohaemoglobin (Hb·CO2): ~20 to 25% of CO2 binds directly to the amino groups (-NH2) of the globin protein chains in haemoglobin (NOT to the iron-heme site!). Binding is governed by pCO2: high pCO2 in tissues promotes binding; low pCO2 in alveoli promotes dissociation.",
        "3. As Bicarbonate Ions (HCO3-): ~70% of total CO2 is transported as bicarbonate ions in blood plasma.",
        "ROLE OF CARBONIC ANHYDRASE: Red Blood Cells contain an extremely high concentration of the zinc metalloenzyme Carbonic Anhydrase (a small amount exists in plasma). This enzyme catalyzes the reversible hydration reaction:",
        "CO2 + H2O ⇌ H2CO3 (Carbonic Acid) ⇌ H+ + HCO3- (Bicarbonate).",
        "AT TISSUE LEVEL: High pCO2 in tissues drives CO2 into RBCs → Carbonic Anhydrase rapidly converts CO2 + H2O into H2CO3 → dissociates into H+ and HCO3-. H+ is buffered by reduced Hb, while HCO3- diffuses out of RBC into plasma.",
        "CHLORIDE SHIFT (HAMBURGER PHENOMENON): Outflow of negatively charged HCO3- from RBC into plasma creates an electrical potential gradient across the RBC membrane. To restore electrical neutrality, chloride ions (Cl-) shift from blood plasma INTO the RBC. Thus, venous RBCs have a higher Cl- concentration than arterial RBCs.",
        "AT ALVEOLAR LEVEL: Low pCO2 in alveoli reverses the process: HCO3- enters RBC, Cl- shifts OUT into plasma → HCO3- + H+ → H2CO3 → CO2 + H2O → CO2 diffuses into alveoli and is expired.",
        "QUANTITATIVE DELIVERABILITY FACTOR: Every 100 mL of deoxygenated blood delivers approximately 4 mL of CO2 to the alveoli."
      ]
    }
  ],

  formulae: [
    {
      title: "Reversible Carbonic Anhydrase Reaction",
      formula: "CO_2 + H_2O \\x200B\\mathop{\\rightleftharpoons}^{\\text{Carbonic Anhydrase}}\\x200B H_2CO_3 \\x200B\\mathop{\\rightleftharpoons}^{}\\x200B H^+ + HCO_3^-",
      description: "Hydration of CO2 in RBCs forming bicarbonate, driving 70% of CO2 transport."
    },
    {
      title: "Vital Capacity Equation",
      formula: "VC = TV + IRV + ERV",
      description: "Maximum volume of air exhaled after maximum inspiration."
    },
    {
      title: "Total Lung Capacity Equation",
      formula: "TLC = VC + RV = TV + IRV + ERV + RV",
      description: "Total air capacity accommodated in fully inflated lungs."
    }
  ],

  visualLearning: {
    type: 'table',
    tableData: {
      headers: ["Parameter", "Oxygen (O2) Transport", "Carbon Dioxide (CO2) Transport"],
      rows: [
        ["Primary Transport Form", "97% as Oxyhaemoglobin in RBCs", "70% as Bicarbonate (HCO3-) in plasma"],
        ["Secondary Transport Form", "3% dissolved in plasma", "20-25% as Carbaminohaemoglobin in RBCs"],
        ["Minor Transport Form", "None", "7% dissolved in blood plasma"],
        ["Key Enzyme Involved", "None (cooperative physical binding)", "Carbonic Anhydrase (Zinc metalloenzyme)"],
        ["Physiological Shift Effect", "Bohr Effect (High CO2/H+ causes Right Shift)", "Haldane Effect (O2 binding promotes CO2 release)"],
        ["Delivered per 100 mL Blood", "5 mL O2 delivered to tissues", "4 mL CO2 delivered to alveoli"]
      ]
    },
    caption: "Comparative summary of Oxygen vs Carbon Dioxide transport mechanics in human blood."
  },

  neetImportantPoints: [
    "🔥 Tidal Volume = 500 mL (~6000-8000 mL/min for healthy adult).",
    "🔥 Residual Volume (RV = 1100-1200 mL) CANNOT be measured by spirometry.",
    "🔥 FRC (ERV + RV) and TLC (VC + RV) cannot be measured by simple spirometry because they include RV.",
    "🔥 CO2 is 20-25 times more soluble in plasma than O2.",
    "🔥 Oxygen Dissociation Curve is SIGMOID; Right shift = Bohr Effect (high pCO2, low pH, high temp).",
    "🔥 100 mL oxygenated blood delivers 5 mL O2 to tissues.",
    "🔥 100 mL deoxygenated blood delivers 4 mL CO2 to alveoli.",
    "🔥 70% CO2 transported as HCO3-, 20-25% as Carbaminohaemoglobin, 7% dissolved in plasma.",
    "🔥 Chloride Shift (Hamburger phenomenon): Cl- enters RBC at tissues, exits RBC at lungs."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing Carbaminohaemoglobin with Carboxyhaemoglobin.",
      correctFact: "Carbaminohaemoglobin is CO2 bound to globin amino groups (normal physiological transport). Carboxyhaemoglobin is Carbon Monoxide (CO) bound tightly to heme iron (toxic poisoning!).",
      whyItMattersForNEET: "Classic trick option in NEET gas transport questions."
    },
    {
      commonConfusion: "Assuming O2 and CO2 compete for the exact same binding site on Haemoglobin.",
      correctFact: "O2 binds to the Fe2+ ion of Heme. CO2 binds to the -NH2 amino groups of Globin protein chains. They do not compete for the same binding site.",
      whyItMattersForNEET: "Tested in structural biochemistry questions in NEET."
    },
    {
      commonConfusion: "Thinking Chloride shift moves Cl- out of RBC at tissue level.",
      correctFact: "At tissue level, HCO3- diffuses OUT of RBC into plasma, so Cl- moves INTO RBC. At alveolar level, HCO3- moves INTO RBC, so Cl- moves OUT into plasma.",
      whyItMattersForNEET: "Frequently tested directional movement in NEET."
    }
  ],

  quickRevision: [
    "TV = 500 mL, IRV = 2500-3000 mL, ERV = 1000-1100 mL, RV = 1100-1200 mL.",
    "VC = ERV + TV + IRV (~3500-4500 mL); TLC = VC + RV (~5000-6000 mL).",
    "RV, FRC, TLC cannot be measured by spirometer.",
    "CO2 solubility = 20-25x O2 solubility.",
    "Oxyhaemoglobin curve = Sigmoid; Right shift = High pCO2 / Low pH (Bohr Effect).",
    "100 mL blood delivers 5 mL O2 to tissues & 4 mL CO2 to alveoli.",
    "70% CO2 as HCO3- via Carbonic Anhydrase; Chloride shift = Cl- enters RBC at tissues."
  ],

  practiceQuestions: [
    {
      id: "prac-gas-1",
      question: "NEET-Style Practice Question — NOT A PYQ: Which of the following respiratory volumes or capacities CANNOT be measured using a simple clinical spirometer?",
      options: [
        "Tidal Volume and Inspiratory Capacity",
        "Expiratory Reserve Volume and Vital Capacity",
        "Residual Volume and Functional Residual Capacity",
        "Inspiratory Reserve Volume and Expiratory Capacity"
      ],
      correctAnswerIndex: 2,
      explanation: "A spirometer measures the volume of air moved into or out of the mouth during breathing. Because Residual Volume (RV) cannot be voluntarily exhaled from the lungs, RV cannot be measured by spirometry. Consequently, any capacity containing RV—such as Functional Residual Capacity (FRC = ERV + RV) and Total Lung Capacity (TLC = VC + RV)—cannot be measured using a simple spirometer.",
      conceptTested: "Spirometry principles and unmeasurable lung parameters"
    },
    {
      id: "prac-gas-2",
      question: "Which factor will cause a RIGHTWARD shift of the oxyhaemoglobin dissociation curve, facilitating increased O2 unloading at tissue capillaries?",
      options: [
        "Decreased pCO2 and increased pH",
        "High pCO2, low pH, and elevated temperature",
        "Low temperature and high pO2",
        "Decreased 2,3-BPG concentration"
      ],
      correctAnswerIndex: 1,
      explanation: "A rightward shift of the oxyhaemoglobin dissociation curve (Bohr Effect) decreases haemoglobin's affinity for O2, promoting O2 release to metabolizing tissues. This is caused by high pCO2, low pH (high H+ ion concentration / acidosis), elevated temperature, and high 2,3-BPG levels.",
      conceptTested: "Bohr effect and factors influencing oxygen dissociation curve"
    }
  ],

  pyqs: [
    {
      id: "pyq-gas-2021",
      year: 2021,
      exam: "NEET UG",
      question: "Select the favorable conditions required for the formation of oxyhaemoglobin at the alveoli:",
      options: [
        "High pO2, low pCO2, less H+ concentration, lower temperature",
        "Low pO2, high pCO2, high H+ concentration, higher temperature",
        "High pO2, high pCO2, less H+ concentration, higher temperature",
        "Low pO2, low pCO2, more H+ concentration, higher temperature"
      ],
      correctAnswerIndex: 0,
      explanation: "In the alveoli, where oxygenation occurs, the conditions that favor the formation of oxyhaemoglobin (loading of O2 onto Hb) are high pO2, low pCO2, low H+ concentration (higher pH), and lower temperature.",
      conceptTested: "Conditions favoring oxyhaemoglobin formation at alveolar site",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2021 Official Question Paper"
    },
    {
      id: "pyq-gas-2020",
      year: 2020,
      exam: "NEET UG",
      question: "Identify the wrong statement with reference to transport of oxygen:",
      options: [
        "Binding of oxygen with haemoglobin is mainly related to partial pressure of O2.",
        "Partial pressure of CO2 can interfere with O2 binding with haemoglobin.",
        "Higher H+ conc. in alveoli favours the formation of oxyhaemoglobin.",
        "Low pCO2 in alveoli favours the formation of oxyhaemoglobin."
      ],
      correctAnswerIndex: 2,
      explanation: "Statement 3 is WRONG because a HIGHER H+ concentration (acidic pH) DECREASES haemoglobin's affinity for O2 and promotes dissociation (unloading), not formation of oxyhaemoglobin. Lower H+ concentration in alveoli favors oxyhaemoglobin formation.",
      conceptTested: "Factors affecting oxyhaemoglobin formation and dissociation",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2020 Official Question Paper"
    }
  ],

  neetMarksPotential: {
    averageQuestionsPerYear: 3,
    scoreWeightage: "12 Marks",
    difficultyRating: "Medium-High",
    highYieldStatus: true
  }
};
