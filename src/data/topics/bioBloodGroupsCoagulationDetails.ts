import { DetailedTopicContent } from '../../types/neet';

export const bioBloodGroupsCoagulationDetails: DetailedTopicContent = {
  topicId: "bio-blood-groups-coagulation",
  topicName: "Blood Composition, Blood Groups, Coagulation & Lymphatic System",
  subject: "Biology",
  class: "Class 11",
  classification: "Human Physiology",
  chapter: "Body Fluids and Circulation",

  whatIsThisTopic: "Comprehensive analysis of human body fluids, blood composition (plasma and formed elements), ABO & Rh blood grouping systems, erythroblastosis foetalis, blood clotting cascade mechanisms, and the lymphatic system.",

  basicIdea: [
    "Simple unicellular organisms exchange gases and nutrients directly with water, whereas complex multicellular organisms require specialized circulating body fluids (Blood and Lymph) to transport essential substances, hormones, and metabolic wastes.",
    "Blood is a specialized fluid connective tissue consisting of a fluid matrix (Plasma - 55%) and cellular components (Formed Elements - 45%: RBCs, WBCs, and Platelets).",
    "Plasma contains 90-92% water and 6-8% proteins (Fibrinogen for clotting, Globulins for defense, Albumins for osmotic balance) along with mineral ions, glucose, and metabolic wastes. Serum is plasma without clotting factors.",
    "RBCs (Erythrocytes) are biconcave, enucleated in mature mammals (5.0-5.5 million/mm³), carry 12-16 g Hb/100 mL blood, have a lifespan of 120 days, and are destroyed in the spleen (graveyard of RBCs).",
    "WBCs (Leucocytes) are nucleated (6000-8000/mm³) divided into Granulocytes (Neutrophils 60-65%, Eosinophils 2-3%, Basophils 0.5-1%) and Agranulocytes (Monocytes 6-8%, Lymphocytes 20-25%).",
    "Platelets (Thrombocytes) are megakaryocyte fragments (1.5-3.5 lakh/mm³) essential for blood coagulation. Reduction in platelets leads to excessive blood loss.",
    "ABO blood grouping depends on surface antigens A and B on RBCs and natural anti-A/anti-B antibodies in plasma. Blood group O is universal donor (O-ve); AB is universal recipient (AB+ve).",
    "Erythroblastosis Foetalis occurs when an Rh-negative mother carries an Rh-positive foetus during a second pregnancy, preventable by administering anti-Rh antibodies (RhOGAM) immediately after the first delivery.",
    "Blood clotting involves an enzyme cascade: damaged tissue/platelets release Thromboplastin → Thrombokinase enzyme complex (with Ca²⁺) converts inactive Prothrombin into Thrombin → Thrombin converts soluble Fibrinogen into insoluble Fibrin meshwork trapping formed elements.",
    "Lymph (tissue fluid) drains into lymphatic vessels, carries lymphocytes, absorbs fats via lacteals in intestinal villi, and acts as a middleman between blood and tissue cells."
  ],

  importantTerms: [
    {
      term: "Plasma",
      definition: "Straw-colored, slightly alkaline viscous fluid constituting ~55% of total blood volume, composed of 90-92% water and 6-8% major plasma proteins (fibrinogen, globulins, albumins).",
      neetNote: "NCERT Highlight: Plasma minus clotting factors is called Serum (Serum = Plasma - Clotting Factors)."
    },
    {
      term: "Fibrinogen",
      definition: "Major inactive plasma protein synthesized by the liver, essential for blood coagulation. Converted by thrombin into insoluble fibrin threads during clot formation.",
      neetNote: "Crucial for blood clotting; absent in serum."
    },
    {
      term: "Globulins",
      definition: "Plasma proteins categorized into alpha, beta, and gamma globulins. Gamma globulins act as antibodies (immunoglobulins) involved in body defense mechanisms.",
      neetNote: "Directly responsible for humoral immune responses and antibody activity."
    },
    {
      term: "Albumins",
      definition: "Most abundant plasma protein (~60% of total plasma protein), produced by the liver, responsible for maintaining Blood Colloidal Osmotic Pressure (BCOP ~28 mmHg).",
      neetNote: "Prevents edema by retaining water inside capillary lumen."
    },
    {
      term: "Erythrocytes (RBCs)",
      definition: "Biconcave, enucleated disc-like blood cells (5.0–5.5 million/mm³) containing haemoglobin, with a 120-day lifespan, formed in red bone marrow and destroyed in the spleen.",
      neetNote: "Lack nucleus, mitochondria, and ER at maturity to maximize haemoglobin capacity and prevent internal O2 consumption."
    },
    {
      term: "Leucocytes (WBCs)",
      definition: "Nucleated, colorless immune cells (6000–8000/mm³) divided into Granulocytes (Neutrophils, Eosinophils, Basophils) and Agranulocytes (Monocytes, Lymphocytes).",
      neetNote: "Exhibit diapedesis (ability to squeeze out of blood capillaries into infected tissue space)."
    },
    {
      term: "Polymorphonuclear Leucocytes (PMNL)",
      definition: "Neutrophils characterized by multi-lobed nuclei (3–5 lobes), constituting 60–65% of total WBC count, acting as primary phagocytic defenders against bacterial infection.",
      neetNote: "Most abundant WBC in human blood."
    },
    {
      term: "Basophils",
      definition: "Least abundant granulocytes (0.5–1%) with S-shaped nuclei, secreting histamine (vasodilator), serotonin (vasoconstrictor/modulator), and heparin (anticoagulant) during inflammatory reactions.",
      neetNote: "Stain with basic dyes (methylene blue); involved in allergic and inflammatory responses."
    },
    {
      term: "Eosinophils",
      definition: "Granulocytes (2–3%) with bilobed nuclei that stain with acidic dyes (eosin), resisting infections and playing a major role in allergic reactions and anti-parasitic defense.",
      neetNote: "Release histaminase to counteract histamine during allergy."
    },
    {
      term: "Monocytes",
      definition: "Largest agranulocytes (6–8%) with kidney/bean-shaped nuclei that differentiate into active tissue macrophages (e.g. Kupffer cells in liver, Microglia in CNS) for phagocytosis.",
      neetNote: "Together with neutrophils, monocytes form the primary phagocytic line of cellular defense."
    },
    {
      term: "Thrombocytes (Platelets)",
      definition: "Non-nucleated cell fragments (1.5–3.5 lakh/mm³) derived from bone marrow megakaryocytes that release clotting factors (platelet factor 3 / thromboplastin) required for blood coagulation.",
      neetNote: "Reduction in platelet count (Thrombocytopenia, e.g. Dengue) leads to severe clotting disorders and hemorrhagic tendency."
    },
    {
      term: "ABO Blood Groups",
      definition: "Blood classification system based on presence or absence of surface glycolipid antigens A and B on RBCs and naturally occurring anti-A or anti-B antibodies in plasma.",
      neetNote: "Group O is Universal Donor (specifically O-negative); Group AB is Universal Recipient (specifically AB-positive)."
    },
    {
      term: "Erythroblastosis Foetalis",
      definition: "Severe haemolytic disease of the newborn caused by Rh incompatibility when an Rh-negative mother produces IgG anti-Rh antibodies against an Rh-positive foetus during a second pregnancy.",
      neetNote: "Preventable by administering anti-Rh antibodies (RhOGAM / anti-D immunoglobulin) to mother immediately after delivery of first Rh+ve child."
    },
    {
      term: "Thrombokinase (Prothrombinase)",
      definition: "Enzyme complex formed via a cascade of enzymatic reactions involving platelet factors, tissue factors, plasma clotting factors, and Calcium ions ($Ca^{2+}$), which converts inactive Prothrombin to Thrombin.",
      neetNote: "Calcium ions ($Ca^{2+}$) are essential cofactors for thrombokinase activity and clot formation."
    },
    {
      term: "Lymph (Tissue Fluid)",
      definition: "Colorless fluid containing specialized lymphocytes, lower protein concentration than plasma, lacking RBCs and platelets, which drains into lymphatic capillaries to return tissue fluid to venous blood.",
      neetNote: "Absorbs digested fats as chylomicrons in intestinal lacteals."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Introduction to Body Fluids & Blood Composition",
      paragraphs: [
        "In simple unicellular and lower multicellular organisms (such as sponges and coelenterates), water from the surrounding environment circulates through body cavities to facilitate cellular exchange of nutrients and oxygen. However, complex multicellular animals require specialized internal circulating fluids to transport substances efficiently across large anatomical distances.",
        "Humans possess two primary circulating body fluids: Blood and Lymph. Blood is a specialized fluid connective tissue consisting of a liquid extracellular matrix called Plasma (55%) in which cellular components termed Formed Elements (45%) are suspended.",
        "Blood accounts for ~7–8% of total body weight (~5 to 6 Liters in an adult male) with a slightly alkaline pH of 7.35–7.45. Unlike other connective tissues, the liquid matrix (plasma) of blood is not secreted by its constituent cells, and mature blood cells do not undergo division in the bloodstream."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="320" fill="#0f172a" rx="16" />
          <text x="375" y="32" fill="#38bdf8" font-size="18" font-weight="bold" text-anchor="middle">HUMAN BLOOD COMPOSITION (100% Total Volume)</text>
          
          <!-- Plasma Block -->
          <rect x="40" y="60" width="310" height="230" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="12"/>
          <rect x="50" y="70" width="290" height="36" fill="#b45309" rx="8"/>
          <text x="195" y="93" fill="#ffffff" font-size="15" font-weight="bold" text-anchor="middle">PLASMA (55% Volume)</text>
          
          <text x="65" y="130" fill="#fef08a" font-size="13" font-weight="bold">• Water (90 – 92%):</text>
          <text x="80" y="148" fill="#cbd5e1" font-size="12">Solvent for transport, heat buffer</text>
          
          <text x="65" y="174" fill="#fef08a" font-size="13" font-weight="bold">• Plasma Proteins (6 – 8%):</text>
          <text x="80" y="192" fill="#e2e8f0" font-size="12">1. Fibrinogen: Blood clotting cascade</text>
          <text x="80" y="210" fill="#e2e8f0" font-size="12">2. Globulins: Defense / Antibodies (γ)</text>
          <text x="80" y="228" fill="#e2e8f0" font-size="12">3. Albumins: Colloidal Osmotic Pressure</text>
          
          <text x="65" y="254" fill="#fef08a" font-size="13" font-weight="bold">• Electrolytes &amp; Solutes (1 – 2%):</text>
          <text x="80" y="272" fill="#cbd5e1" font-size="12">Na+, Ca2+, Mg2+, HCO3-, Cl-, Glucose, Urea</text>

          <!-- Formed Elements Block -->
          <rect x="400" y="60" width="310" height="230" fill="#1e293b" stroke="#ef4444" stroke-width="2" rx="12"/>
          <rect x="410" y="70" width="290" height="36" fill="#991b1b" rx="8"/>
          <text x="555" y="93" fill="#ffffff" font-size="15" font-weight="bold" text-anchor="middle">FORMED ELEMENTS (45% Volume)</text>
          
          <text x="425" y="130" fill="#fca5a5" font-size="13" font-weight="bold">• Erythrocytes (RBCs): 99% of cells</text>
          <text x="440" y="148" fill="#cbd5e1" font-size="12">5.0 – 5.5 Million / mm³ | O2 &amp; CO2 transport</text>
          
          <text x="425" y="174" fill="#fca5a5" font-size="13" font-weight="bold">• Leucocytes (WBCs): &lt; 1% of cells</text>
          <text x="440" y="192" fill="#cbd5e1" font-size="12">6000 – 8000 / mm³ | Immune defense</text>
          <text x="440" y="210" fill="#94a3b8" font-size="11">Granulocytes: Neutro, Eosino, Baso</text>
          <text x="440" y="225" fill="#94a3b8" font-size="11">Agranulocytes: Lympho, Mono</text>
          
          <text x="425" y="254" fill="#fca5a5" font-size="13" font-weight="bold">• Thrombocytes (Platelets):</text>
          <text x="440" y="272" fill="#cbd5e1" font-size="12">1.5 – 3.5 Lakh / mm³ | Clotting factors</text>
        </svg>`,
        caption: "Figure 1: Detailed breakdown of human blood composition showing Plasma and Formed Elements.",
        guide: "Observe the distinction between Plasma (liquid matrix) and Formed Elements (cellular components), as well as the relative proportions of major plasma proteins and cell types."
      },
      importantPoints: [
        "Plasma without clotting factors is termed SERUM (Serum = Plasma - Clotting Factors). Serum cannot form a clot.",
        "Fibrinogen, Globulins, and Albumins are the three primary plasma proteins.",
        "Albumins maintain Blood Colloidal Osmotic Pressure (BCOP), preventing water from escaping into tissues."
      ]
    },
    {
      heading: "2. Plasma Proteins & Solute Composition",
      paragraphs: [
        "Plasma is a straw-colored, viscous fluid containing 90–92% water and 6–8% solutes. Plasma proteins constitute the major organic component of plasma and are synthesized predominantly in the liver (except immunoglobulins synthesized by plasma B-cells).",
        "1. Fibrinogen: An inactive soluble monomeric protein (MW ~340,000 Da) synthesized by liver hepatocyte cells. It serves as the precursor for insoluble fibrin threads during the blood clotting cascade.",
        "2. Globulins: Form ~38% of plasma proteins. They are divided into Alpha (α-globulins transport haptoglobin and thyroxine), Beta (β-globulins transport transferrin/iron and lipids), and Gamma (γ-globulins / Immunoglobulins secreted by plasma cells that function as antibodies to neutralize antigens).",
        "3. Albumins: Smallest but most abundant plasma protein (~60% of total plasma protein; MW ~66,000 Da). Albumins exert an osmotic pressure of ~28 mmHg across capillary walls. A decrease in plasma albumin level (e.g., in liver cirrhosis or severe protein malnutrition / Kwashiorkor) lowers osmotic pressure, causing fluid accumulation in tissue spaces termed Edema."
      ],
      tables: [
        {
          title: "Major Human Plasma Proteins — NEET Comparative Summary",
          headers: ["Plasma Protein", "% of Total Protein", "Primary Site of Synthesis", "Physiological Function", "NEET High-Yield Clinical Point"],
          rows: [
            ["Fibrinogen", "4 – 7%", "Liver hepatocytes", "Converted to fibrin during blood coagulation", "Absent in Serum; essential for blood clotting"],
            ["Globulins (α, β, γ)", "35 – 38%", "Liver (α, β); B-lymphocytes (γ)", "Immune defense (antibodies), lipid & ion transport", "Gamma-globulins provide humoral immunity"],
            ["Albumins", "55 – 60%", "Liver hepatocytes", "Maintains Blood Colloidal Osmotic Pressure (~28 mmHg)", "Deficiency leads to plasma leakage & Edema"]
          ]
        }
      ],
      importantPoints: [
        "Glucose, amino acids, lipids, glycerol, and cholesterol are present in plasma in transit as they are constantly absorbed, metabolized, or excreted.",
        "Inorganic ions in plasma: $Na^+$, $Ca^{2+}$, $Mg^{2+}$, $HCO_3^-$, $Cl^-$, $K^+$. $Na^+$ is the primary extracellular cation maintaining fluid volume.",
        "Coagulation factors are present in plasma in an INACTIVE form so that intravascular clotting does not occur spontaneously."
      ]
    },
    {
      heading: "3. Erythrocytes (RBCs) & Haemoglobin",
      paragraphs: [
        "Erythrocytes or Red Blood Cells (RBCs) are the most abundant cells in human blood. A healthy adult male possesses 5.0 to 5.5 million RBCs per cubic millimeter ($mm^3$) of blood (4.5 to 5.0 million in females).",
        "RBC Morphological Adaptations: Mature mammalian RBCs are circular, biconcave discs with a diameter of ~7.2 µm and thickness of ~2 µm. The biconcave shape increases surface area-to-volume ratio by 20–30%, enhancing oxygen diffusion rates.",
        "Enucleation & Organelle Loss: During erythropoiesis in bone marrow, normoblasts extrude their nucleus, mitochondria, endoplasmic reticulum, and Golgi apparatus. Loss of nucleus provides maximum internal volume for packing Haemoglobin (~280 million molecules per RBC). Loss of mitochondria ensures that RBCs do not consume any of the oxygen they transport; they derive energy exclusively via anaerobic glycolysis (embden-meyerhof pathway).",
        "Erythropoiesis & Destruction: RBCs are formed in the red bone marrow of long bones and flat bones (sternum, ribs, vertebrae, pelvis) in adults. In the human foetus, erythropoiesis occurs in the yolk sac (early) and liver/spleen (late). The hormone Erythropoietin (EPO), secreted by juxtaglomerular cells of the kidney under hypoxic conditions, stimulates bone marrow erythropoiesis. The average lifespan of human RBCs is 120 days. Worn-out RBCs are phagocytosed and destroyed in the Spleen ('Graveyard of RBCs') and Liver. Heme is degraded into iron (recycled) and bile pigments Bilirubin and Biliverdin."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="700" height="240" fill="#0f172a" rx="16"/>
          <text x="350" y="28" fill="#f43f5e" font-size="16" font-weight="bold" text-anchor="middle">MATURE ERYTHROCYTE (RBC) STRUCTURE &amp; ADAPTATIONS</text>
          
          <!-- Top View Biconcave -->
          <circle cx="180" cy="130" r="70" fill="#be123c" stroke="#f43f5e" stroke-width="4"/>
          <circle cx="180" cy="130" r="35" fill="#e11d48" opacity="0.6"/>
          <text x="180" y="220" fill="#fca5a5" font-size="13" font-weight="bold" text-anchor="middle">Surface View (Circular Disc)</text>

          <!-- Side View Biconcave Profile -->
          <path d="M 400 90 C 450 110, 500 110, 550 90 C 580 90, 580 170, 550 170 C 500 150, 450 150, 400 170 C 370 170, 370 90, 400 90 Z" fill="#be123c" stroke="#f43f5e" stroke-width="3"/>
          <text x="475" y="220" fill="#fca5a5" font-size="13" font-weight="bold" text-anchor="middle">Side Cross-Section (Biconcave Profile)</text>
          
          <!-- Callouts -->
          <text x="600" y="110" fill="#cbd5e1" font-size="11">Thickness at edge: ~2.2 µm</text>
          <text x="600" y="150" fill="#cbd5e1" font-size="11">Thickness at center: ~1.0 µm</text>
          <text x="600" y="130" fill="#fde047" font-size="11">Diameter: ~7.2 µm</text>
        </svg>`,
        caption: "Figure 2: Surface and cross-sectional profile of human biconcave erythrocyte showing dimensional parameters.",
        guide: "Note how the biconcave shape provides an indented central zone, facilitating gas diffusion and enabling flexible bending when traversing narrow tissue capillaries."
      },
      importantPoints: [
        "Normal Haemoglobin Content: 12 to 16 grams of Hb per 100 mL of blood in a healthy individual.",
        "Each gram of Hb can combine with approximately 1.34 mL of $O_2$.",
        "Haemoglobin consists of 4 heme groups (each containing an $Fe^{2+}$ ion) and a globin protein with 4 polypeptide chains ($2\alpha + 2\beta$ in adult $HbA$)."
      ]
    },
    {
      heading: "4. Leucocytes (WBCs) — Granulocytes & Agranulocytes",
      paragraphs: [
        "Leucocytes or White Blood Cells (WBCs) are nucleated, colorless blood cells because they completely lack haemoglobin. They are relatively fewer in number compared to RBCs, ranging between 6,000 and 8,000 per $mm^3$ of blood.",
        "WBCs exhibit short lifespans (ranging from hours to days, except memory lymphocytes). A key functional property of WBCs is Diapedesis — the ability to actively squeeze through tiny pores between endothelial cells of blood capillary walls into surrounding infected tissue spaces.",
        "WBCs are broadly classified into Granulocytes (containing specific cytoplasmic granules and lobed nuclei) and Agranulocytes (lacking specific cytoplasmic granules with non-lobed nuclei)."
      ],
      tables: [
        {
          title: "Complete NCERT Classification & Comparison of Human Leucocytes (WBCs)",
          headers: ["Cell Type", "Category", "% Relative Count", "Nucleus Morphology", "Staining & Cytoplasm", "Primary Function", "NEET High-Yield Key Point"],
          rows: [
            ["Neutrophils", "Granulocyte", "60 – 65%", "3 to 5 Lobed (Polymorphic)", "Neutral dyes; fine granules", "Phagocytosis of bacteria & debris", "Most abundant WBC; PMNL classification"],
            ["Eosinophils", "Granulocyte", "2 – 3%", "Bilobed (Spectacle-shaped)", "Acidic dyes (Eosin); coarse pink granules", "Resist infections, allergic reactions", "Release histaminase; count rises in asthma & worm infections"],
            ["Basophils", "Granulocyte", "0.5 – 1%", "S-shaped / 3-Lobed", "Basic dyes (Methylene blue); coarse dark blue granules", "Secrete Histamine, Serotonin, Heparin", "Least abundant WBC; mediates inflammation & prevents intravascular clotting"],
            ["Monocytes", "Granulocyte / Agranulocyte", "6 – 8%", "Kidney / Bean-shaped", "Agranulocyte; pale blue cytoplasm", "Active phagocytosis; becomes tissue Macrophages", "Largest WBC; forms tissue macrophages (Kupffer cells, Microglia)"],
            ["Lymphocytes", "Agranulocyte", "20 – 25%", "Large round nucleus occupying most of cell", "Agranulocyte; thin rim of cytoplasm", "B-cells (antibodies) & T-cells (cell-mediated immunity)", "Responsible for adaptive immune responses & graft rejection"]
          ]
        }
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="360" fill="#0f172a" rx="16"/>
          <text x="375" y="30" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">HUMAN LEUCOCYTES (WBCs) MORPHOLOGICAL CLASSIFICATION</text>
          
          <!-- Neutrophil -->
          <g transform="translate(30, 60)">
            <rect width="120" height="260" fill="#1e293b" rx="10" stroke="#3b82f6" stroke-width="1.5"/>
            <circle cx="60" cy="70" r="40" fill="#93c5fd" opacity="0.3"/>
            <path d="M 45 60 Q 55 50 65 65 Q 75 80 55 85 Q 40 75 45 60 Z" fill="#1e3a8a"/>
            <text x="60" y="130" fill="#93c5fd" font-size="13" font-weight="bold" text-anchor="middle">Neutrophil</text>
            <text x="60" y="150" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">60 – 65%</text>
            <text x="60" y="175" fill="#cbd5e1" font-size="10" text-anchor="middle">3-5 Lobed Nucleus</text>
            <text x="60" y="195" fill="#cbd5e1" font-size="10" text-anchor="middle">Active Phagocyte</text>
            <text x="60" y="215" fill="#fde047" font-size="10" text-anchor="middle">PMNL Type</text>
          </g>

          <!-- Eosinophil -->
          <g transform="translate(170, 60)">
            <rect width="120" height="260" fill="#1e293b" rx="10" stroke="#f43f5e" stroke-width="1.5"/>
            <circle cx="60" cy="70" r="40" fill="#fda4af" opacity="0.3"/>
            <circle cx="48" cy="68" r="14" fill="#9f1239"/>
            <circle cx="72" cy="68" r="14" fill="#9f1239"/>
            <line x1="58" y1="68" x2="62" y2="68" stroke="#9f1239" stroke-width="4"/>
            <text x="60" y="130" fill="#fda4af" font-size="13" font-weight="bold" text-anchor="middle">Eosinophil</text>
            <text x="60" y="150" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">2 – 3%</text>
            <text x="60" y="175" fill="#cbd5e1" font-size="10" text-anchor="middle">Bilobed Nucleus</text>
            <text x="60" y="195" fill="#cbd5e1" font-size="10" text-anchor="middle">Allergic Response</text>
            <text x="60" y="215" fill="#fde047" font-size="10" text-anchor="middle">Histaminase</text>
          </g>

          <!-- Basophil -->
          <g transform="translate(310, 60)">
            <rect width="120" height="260" fill="#1e293b" rx="10" stroke="#a855f7" stroke-width="1.5"/>
            <circle cx="60" cy="70" r="40" fill="#d8b4fe" opacity="0.3"/>
            <path d="M 45 55 C 65 45, 70 70, 50 80 S 70 90, 75 75" stroke="#581c87" stroke-width="10" fill="none" stroke-linecap="round"/>
            <text x="60" y="130" fill="#d8b4fe" font-size="13" font-weight="bold" text-anchor="middle">Basophil</text>
            <text x="60" y="150" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">0.5 – 1%</text>
            <text x="60" y="175" fill="#cbd5e1" font-size="10" text-anchor="middle">S-Shaped Nucleus</text>
            <text x="60" y="195" fill="#cbd5e1" font-size="10" text-anchor="middle">Histamine/Heparin</text>
            <text x="60" y="215" fill="#fde047" font-size="10" text-anchor="middle">Least Abundant</text>
          </g>

          <!-- Monocyte -->
          <g transform="translate(450, 60)">
            <rect width="120" height="260" fill="#1e293b" rx="10" stroke="#10b981" stroke-width="1.5"/>
            <circle cx="60" cy="70" r="40" fill="#6ee7b7" opacity="0.3"/>
            <path d="M 45 60 C 45 45, 75 45, 75 60 C 75 75, 60 85, 45 75 Z" fill="#047857"/>
            <text x="60" y="130" fill="#6ee7b7" font-size="13" font-weight="bold" text-anchor="middle">Monocyte</text>
            <text x="60" y="150" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">6 – 8%</text>
            <text x="60" y="175" fill="#cbd5e1" font-size="10" text-anchor="middle">Kidney Nucleus</text>
            <text x="60" y="195" fill="#cbd5e1" font-size="10" text-anchor="middle">Tissue Macrophage</text>
            <text x="60" y="215" fill="#fde047" font-size="10" text-anchor="middle">Largest WBC</text>
          </g>

          <!-- Lymphocyte -->
          <g transform="translate(590, 60)">
            <rect width="120" height="260" fill="#1e293b" rx="10" stroke="#f59e0b" stroke-width="1.5"/>
            <circle cx="60" cy="70" r="40" fill="#fde68a" opacity="0.3"/>
            <circle cx="60" cy="70" r="30" fill="#b45309"/>
            <text x="60" y="130" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Lymphocyte</text>
            <text x="60" y="150" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">20 – 25%</text>
            <text x="60" y="175" fill="#cbd5e1" font-size="10" text-anchor="middle">Large Round Nucleus</text>
            <text x="60" y="195" fill="#cbd5e1" font-size="10" text-anchor="middle">B-cells &amp; T-cells</text>
            <text x="60" y="215" fill="#fde047" font-size="10" text-anchor="middle">Immune Response</text>
          </g>
        </svg>`,
        caption: "Figure 3: Morphological characteristics and percentage breakdown of human white blood cells.",
        guide: "Observe the distinctive nuclear shapes: Neutrophil (multilobed), Eosinophil (bilobed), Basophil (S-shaped), Monocyte (kidney-shaped), Lymphocyte (large round)."
      },
      importantPoints: [
        "Neutrophils and Monocytes are active phagocytic cells that destroy foreign organisms.",
        "Basophils secrete Histamine (inflammation/vasodilation), Serotonin (vascular response), and Heparin (natural anticoagulant).",
        "Eosinophils resist infections and are associated with allergic reactions (releasing histaminase)."
      ]
    },
    {
      heading: "5. Thrombocytes (Platelets) & Blood Coagulation Mechanism",
      paragraphs: [
        "Thrombocytes or Platelets are non-nucleated cell fragments produced by Megakaryocytes — specialized giant cells in the red bone marrow. Blood normally contains 1,500,000 to 3,500,000 (1.5 to 3.5 lakh) platelets per cubic millimeter.",
        "Platelets store and release a variety of substances termed Clotting Factors (such as Platelet Factor 3 / Thromboplastin). A significant reduction in platelet count (Thrombocytopenia, common in Dengue virus infection) leads to severe clotting failure, causing purpura and internal hemorrhages.",
        "Blood Coagulation (Clotting Cascade) Mechanism: Blood exhibits coagulation in response to an injury to prevent fatal blood loss. The clot or coagulum is a dark reddish-brown meshwork formed mainly of a network of threads called Fibrins in which dead and damaged formed elements of blood are trapped.",
        "Step-by-Step Enzymatic Cascade Pathway:",
        "1. Injury to blood vessel or surrounding tissue causes platelets and damaged tissue cells to release Thromboplastin (Tissue Factor / Factor III).",
        "2. Thromboplastin triggers a series of linked enzymatic reactions (cascade process) involving several plasma clotting factors, leading to the formation of an enzyme complex called Thrombokinase (Prothrombinase).",
        "3. Thrombokinase enzyme, in the mandatory presence of Calcium ions ($Ca^{2+}$), converts inactive plasma protein Prothrombin into active enzyme Thrombin.",
        "4. Active Thrombin enzyme then catalyzes the conversion of soluble monomeric plasma protein Fibrinogen into insoluble polymer Fibrin threads.",
        "5. Fibrin threads form a fine network at the injury site, trapping RBCs, WBCs, and platelets to create the reddish-brown Clot / Coagulum.",
        "Role of Calcium & Vitamin K: Calcium ions ($Ca^{2+}$) play a crucial role in almost every step of the coagulation cascade. Removing $Ca^{2+}$ using chelating agents (EDTA, Sodium Citrate, Sodium Oxalate) prevents blood clotting in blood bank storage bags. Vitamin K (Phylloquinone) is an essential liver cofactor required for the post-translational gamma-carboxylation of clotting factors II (Prothrombin), VII, IX, and X."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="320" fill="#0f172a" rx="16"/>
          <text x="375" y="30" fill="#ef4444" font-size="16" font-weight="bold" text-anchor="middle">STEP-BY-STEP BLOOD COAGULATION ENZYMATIC CASCADE</text>
          
          <!-- Step 1 -->
          <rect x="40" y="60" width="200" height="70" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="8"/>
          <text x="140" y="82" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">Injured Tissue / Platelets</text>
          <text x="140" y="105" fill="#cbd5e1" font-size="11" text-anchor="middle">Release Thromboplastin</text>
          <text x="140" y="120" fill="#94a3b8" font-size="10" text-anchor="middle">(Platelet Factor 3)</text>
          
          <!-- Arrow 1 -->
          <path d="M 240 95 L 280 95" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-yellow)"/>

          <!-- Step 2 -->
          <rect x="290" y="60" width="200" height="70" fill="#1e293b" stroke="#3b82f6" stroke-width="2" rx="8"/>
          <text x="390" y="82" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">THROMBOKINASE</text>
          <text x="390" y="102" fill="#cbd5e1" font-size="11" text-anchor="middle">Enzyme Complex Formed</text>
          <text x="390" y="120" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Requires Ca2+ Ions!</text>

          <!-- Arrow 2 -->
          <path d="M 390 130 L 390 170" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow-blue)"/>

          <!-- Step 3 -->
          <rect x="230" y="180" width="320" height="60" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="8"/>
          <text x="390" y="202" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">Inactive Prothrombin ➔ Active THROMBIN</text>
          <text x="390" y="224" fill="#cbd5e1" font-size="11" text-anchor="middle">Catalyzed by Thrombokinase + Ca2+</text>

          <!-- Arrow 3 -->
          <path d="M 390 240 L 390 265" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-green)"/>

          <!-- Step 4 -->
          <rect x="180" y="270" width="420" height="40" fill="#b91c1c" rx="8"/>
          <text x="390" y="295" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Soluble Fibrinogen ➔ Insoluble FIBRIN CLOT (Meshwork)</text>

          <defs>
            <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/></marker>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/></marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/></marker>
          </defs>
        </svg>`,
        caption: "Figure 4: Cascade pathway of blood coagulation demonstrating active enzymes, cofactors, and fibrin network formation.",
        guide: "Observe that Calcium ions ($Ca^{2+}$) are strictly required for Thrombokinase activity and Thrombin conversion. Without $Ca^{2+}$, blood cannot form a fibrin clot."
      },
      importantPoints: [
        "NCERT Fact: Calcium ions ($Ca^{2+}$) play a crucial role in blood clotting.",
        "Serum contains all plasma components EXCEPT fibrinogen and active clotting factors.",
        "Megakaryocytes in red bone marrow produce blood platelets."
      ]
    },
    {
      heading: "6. ABO & Rh Blood Grouping Systems",
      paragraphs: [
        "The ABO blood grouping system, discovered by Karl Landsteiner, is based on the presence or absence of two specific surface glycolipid antigens on RBC membranes: Antigen A and Antigen B.",
        "Naturally occurring antibodies (agglutinins) against absent antigens are present in the plasma: Anti-A antibody and Anti-B antibody.",
        "Genetics of ABO System: Controlled by the $I$ gene ($I^A$, $I^B$, and $i$). $I^A$ and $I^B$ show Co-dominance, while both are completely dominant over allele $i$."
      ],
      tables: [
        {
          title: "Complete ABO & Rh Compatibility Table — Transfusion Dynamics",
          headers: ["Blood Group", "Antigens on RBCs", "Antibodies in Plasma", "Genotype(s)", "Can Donate Blood To", "Can Receive Blood From"],
          rows: [
            ["Group A", "Antigen A", "Anti-B", "I^A I^A or I^A i", "Groups A, AB", "Groups A, O"],
            ["Group B", "Antigen B", "Anti-A", "I^B I^B or I^B i", "Groups B, AB", "Groups B, O"],
            ["Group AB", "Antigens A and B", "NONE (Nil)", "I^A I^B", "Group AB ONLY", "Groups A, B, AB, O (Universal Recipient)"],
            ["Group O", "NONE (Nil)", "Anti-A and Anti-B", "i i", "Groups A, B, AB, O (Universal Donor)", "Group O ONLY"]
          ]
        }
      ],
      importantPoints: [
        "Universal Donor: Group O (specifically O-negative because it lacks Antigen A, Antigen B, and Rh Antigen D).",
        "Universal Recipient: Group AB (specifically AB-positive because plasma lacks anti-A, anti-B, and anti-Rh antibodies).",
        "Blood Transfusion Logic: Recipient's plasma antibodies MUST NOT agglutinate donor's RBC antigens."
      ]
    },
    {
      heading: "7. Transfusion Logic & Erythroblastosis Foetalis",
      paragraphs: [
        "Transfusion Agglutination Reaction: If incompatible blood is transfused (for example, donor blood Group B into a recipient with blood Group A), the recipient's plasma Anti-B antibodies immediately bind to the donor's RBC Antigen B. This triggers Agglutination (clumping of RBCs) followed by intravascular hemolysis, releasing toxic free haemoglobin into plasma and causing acute renal failure, jaundice, and circulatory shock.",
        "Rh Factor System: ~80% of human beings possess the Rh antigen (D antigen) on their RBC membrane surfaces, similar to Rhesus monkeys, and are termed Rh-positive (Rh+ve). Those lacking Rh antigen are Rh-negative (Rh-ve). An Rh-ve individual does not naturally carry anti-Rh antibodies, but will synthesize anti-Rh antibodies upon exposure to Rh+ve blood (Sensitisation).",
        "Erythroblastosis Foetalis (Haemolytic Disease of Newborn - HDN):",
        "1. Mechanism: Occurs when an Rh-negative ($Rh^{-}$) mother carries an Rh-positive ($Rh^{+}$) foetus (inherited from $Rh^{+}$ father).",
        "2. First Pregnancy: The placental barrier keeps maternal and foetal blood well separated during gestation. However, during delivery/parturition, rupture of placental microvessels allows a small amount of foetal $Rh^{+}$ RBCs to enter maternal circulation.",
        "3. Sensitisation: Mother's immune system detects $Rh^{+}$ antigen and produces maternal Anti-Rh antibodies (IgG isotype).",
        "4. Subsequent Pregnancy with $Rh^{+}$ Foetus: Maternal Anti-Rh IgG antibodies, being small enough to readily cross the placental membrane, enter foetal blood circulation. These maternal antibodies bind to and destroy foetal $Rh^{+}$ RBCs.",
        "5. Clinical Consequences: Severe haemolytic anaemia, jaundice, liver enlargement, and presence of nucleated immature erythroblasts in foetal blood (Erythroblastosis foetalis). In severe cases, it causes foetal death in utero or severe brain damage (kernicterus).",
        "6. Prevention: Administering Anti-Rh antibodies (anti-D immunoglobulin / RhOGAM) to the $Rh^{-}$ mother immediately (within 72 hours) following the delivery of the first $Rh^{+}$ child. This neutralizes foetal $Rh^{+}$ antigens before the mother's immune system can produce memory B-cells."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="300" fill="#0f172a" rx="16"/>
          <text x="375" y="30" fill="#f43f5e" font-size="16" font-weight="bold" text-anchor="middle">ERYTHROBLASTOSIS FOETALIS PATHO-PHYSIOLOGY</text>
          
          <!-- Stage 1 -->
          <rect x="30" y="60" width="210" height="200" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="10"/>
          <text x="135" y="85" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">1ST PREGNANCY</text>
          <text x="135" y="110" fill="#f8fafc" font-size="11" text-anchor="middle">Rh- Mother x Rh+ Foetus</text>
          <text x="135" y="135" fill="#cbd5e1" font-size="10" text-anchor="middle">• Placental barrier intact</text>
          <text x="135" y="155" fill="#cbd5e1" font-size="10" text-anchor="middle">• No antibody exposure</text>
          <text x="135" y="180" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">1st Baby Born Healthy!</text>

          <!-- Stage 2 -->
          <rect x="270" y="60" width="210" height="200" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" rx="10"/>
          <text x="375" y="85" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">AT PARTURITION</text>
          <text x="375" y="110" fill="#f8fafc" font-size="11" text-anchor="middle">Placental Rupture</text>
          <text x="375" y="135" fill="#cbd5e1" font-size="10" text-anchor="middle">• Foetal Rh+ RBCs enter Mother</text>
          <text x="375" y="155" fill="#cbd5e1" font-size="10" text-anchor="middle">• Mother forms Anti-Rh (IgG)</text>
          <text x="375" y="180" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">Mother Sensitised!</text>
          <text x="375" y="210" fill="#38bdf8" font-size="10" text-anchor="middle">[RhOGAM prevents this stage]</text>

          <!-- Stage 3 -->
          <rect x="510" y="60" width="210" height="200" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" rx="10"/>
          <text x="615" y="85" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">2ND Rh+ PREGNANCY</text>
          <text x="615" y="110" fill="#f8fafc" font-size="11" text-anchor="middle">Maternal IgG Crosses Placenta</text>
          <text x="615" y="135" fill="#cbd5e1" font-size="10" text-anchor="middle">• Destroys foetal Rh+ RBCs</text>
          <text x="615" y="155" fill="#cbd5e1" font-size="10" text-anchor="middle">• Severe Anaemia &amp; Jaundice</text>
          <text x="615" y="180" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">Erythroblastosis Foetalis</text>
        </svg>`,
        caption: "Figure 5: Step-by-step mechanism of maternal sensitization during first delivery and subsequent foetal RBC destruction in second pregnancy.",
        guide: "Observe that RhOGAM must be administered immediately after the first delivery to eliminate foetal Rh+ RBCs before the maternal immune system synthesizes anti-Rh antibodies."
      },
      importantPoints: [
        "Erythroblastosis foetalis occurs ONLY when Mother is Rh-negative and Foetus is Rh-positive.",
        "If both Mother and Foetus are Rh-negative, or Mother is Rh-positive, erythroblastosis foetalis CANNOT occur.",
        "Anti-D immunoglobulin (RhOGAM) consists of passive preformed antibodies that destroy foetal RBCs before maternal immune priming."
      ]
    },
    {
      heading: "8. Lymph & The Lymphatic System",
      paragraphs: [
        "As blood flows through the capillaries in tissues, water along with small water-soluble substances are squeezed out into the spaces between cells due to capillary hydrostatic pressure. However, larger proteins and formed elements remain inside blood vessels.",
        "This fluid released into intercellular spaces is called Interstitial Fluid or Tissue Fluid. It has the same mineral distribution as that in plasma. Interstitial fluid serves as a vital middleman for exchange of nutrients, respiratory gases, and metabolic wastes between blood capillaries and body tissue cells.",
        "The Lymphatic System: An elaborate network of thin-walled vessels (lymphatic capillaries, lymphatic vessels, lymph nodes, and lymphatic ducts) collects interstitial fluid and drains it back into major systemic veins (subclavian veins).",
        "Lymph Properties & Composition: The fluid inside the lymphatic system is called Lymph. Lymph is a clear, colorless or yellowish fluid tissue. It contains specialized Lymphocytes (responsible for body immune responses), lower concentration of plasma proteins, and lacks RBCs and platelets.",
        "Inter-relationship Flowchart:",
        "Blood in Capillaries ➔ Interstitial / Tissue Fluid ➔ Lymphatic Capillaries ➔ Lymphatic Vessels ➔ Thoracic Duct / Right Lymphatic Duct ➔ Subclavian Veins ➔ Systemic Blood.",
        "Functions of Lymph:",
        "1. Transport of Digested Fats: Fats absorbed from the gastrointestinal tract enter specialized lymphatic capillaries called Lacteals located in the intestinal villi as Chylomicrons.",
        "2. Fluid Balance: Returns ~2–3 Liters of filtered fluid and escaped proteins daily from interstitial spaces back into venous circulation, preventing Edema.",
        "3. Immune Defense: Lymph nodes contain dense aggregations of lymphocytes and macrophages that filter out bacterial pathogens and cellular debris."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="240" fill="#0f172a" rx="16"/>
          <text x="375" y="30" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">INTER-RELATIONSHIP: BLOOD ➔ TISSUE FLUID ➔ LYMPH ➔ BLOOD</text>
          
          <!-- Capillary Block -->
          <rect x="40" y="70" width="180" height="120" fill="#1e293b" stroke="#ef4444" stroke-width="2" rx="10"/>
          <text x="130" y="95" fill="#fca5a5" font-size="13" font-weight="bold" text-anchor="middle">BLOOD CAPILLARIES</text>
          <text x="130" y="120" fill="#cbd5e1" font-size="11" text-anchor="middle">High Hydrostatic Pressure</text>
          <text x="130" y="140" fill="#cbd5e1" font-size="11" text-anchor="middle">Filters Water &amp; Solutes</text>

          <!-- Arrow 1 -->
          <path d="M 220 130 L 265 130" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow-cyan)"/>

          <!-- Interstitial Fluid -->
          <rect x="275" y="70" width="190" height="120" fill="#1e293b" stroke="#fde047" stroke-width="2" rx="10"/>
          <text x="370" y="95" fill="#fde047" font-size="13" font-weight="bold" text-anchor="middle">TISSUE / INTERSTITIAL FLUID</text>
          <text x="370" y="120" fill="#cbd5e1" font-size="11" text-anchor="middle">Baths Tissue Cells</text>
          <text x="370" y="140" fill="#cbd5e1" font-size="11" text-anchor="middle">Middleman for Gas Exchange</text>

          <!-- Arrow 2 -->
          <path d="M 465 130 L 510 130" stroke="#fde047" stroke-width="3" marker-end="url(#arrow-yellow)"/>

          <!-- Lymph System -->
          <rect x="520" y="70" width="190" height="120" fill="#1e293b" stroke="#4ade80" stroke-width="2" rx="10"/>
          <text x="615" y="95" fill="#4ade80" font-size="13" font-weight="bold" text-anchor="middle">LYMPHATIC SYSTEM</text>
          <text x="615" y="120" fill="#cbd5e1" font-size="11" text-anchor="middle">Lacteals absorb Fats</text>
          <text x="615" y="140" fill="#cbd5e1" font-size="11" text-anchor="middle">Drains into Subclavian Vein</text>

          <!-- Return Loop Arrow -->
          <path d="M 615 190 C 615 225, 130 225, 130 190" stroke="#4ade80" stroke-width="2" fill="none" stroke-dasharray="5 5" marker-end="url(#arrow-green)"/>
          <text x="375" y="218" fill="#4ade80" font-size="11" text-anchor="middle">Drains back into Venous Blood System</text>

          <defs>
            <marker id="arrow-cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8"/></marker>
            <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#fde047"/></marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#4ade80"/></marker>
          </defs>
        </svg>`,
        caption: "Figure 6: Fluid circulation loop demonstrating filtration at capillary beds, interstitial middleman role, and return via lymphatics.",
        guide: "Observe that lymph is essentially tissue fluid collected by blind-ended lymphatic capillaries and returned to systemic venous circulation."
      },
      importantPoints: [
        "Lacteals are specialized lymph capillaries in intestinal villi that absorb digested fats (chylomicrons).",
        "Lymph contains specialized lymphocytes responsible for immune responses.",
        "Lymph lacks RBCs, platelets, and large plasma proteins."
      ]
    }
  ],

  formulae: [
    {
      title: "Serum Definition Formula",
      formula: "\\text{Serum} = \\text{Plasma} - \\text{Clotting Factors (Fibrinogen)}",
      meaning: "Serum is the liquid remaining after blood is allowed to clot completely; it lacks fibrinogen and active clotting factors.",
      whenToUse: "Use in questions comparing plasma vs serum properties."
    },
    {
      title: "Blood Coagulation Cascade Reaction Sequence",
      formula: "\\text{Injured Tissue/Platelets} \\xrightarrow{} \\text{Thromboplastin} \\xrightarrow[Ca^{2+}]{\\text{Cascade}} \\text{Thrombokinase} \\xrightarrow[Ca^{2+}]{\\text{Prothrombin}} \\text{Thrombin} \\xrightarrow[]{\\text{Fibrinogen}} \\text{Fibrin Clot}",
      meaning: "Sequence of enzymatic conversions converting prothrombin to thrombin and soluble fibrinogen to insoluble fibrin meshwork.",
      whenToUse: "Use to trace clotting order and identify the mandatory requirement of Calcium ions ($Ca^{2+}$)."
    }
  ],

  neetImportantPoints: [
    "🔥 Serum = Plasma minus clotting factors (Serum cannot form a clot).",
    "🔥 Albumins are the primary plasma protein responsible for maintaining Blood Colloidal Osmotic Pressure (~28 mmHg).",
    "🔥 Mature mammalian RBCs lack a nucleus, mitochondria, and ER to maximize haemoglobin capacity and prevent internal oxygen consumption.",
    "🔥 Spleen is known as the 'Graveyard of RBCs' where worn-out 120-day-old RBCs are destroyed.",
    "🔥 Neutrophils (60–65%) are the most abundant WBCs; Basophils (0.5–1%) are the least abundant WBCs.",
    "🔥 Basophils secrete Histamine (vasodilator), Serotonin, and Heparin (natural anticoagulant).",
    "🔥 Megakaryocytes in red bone marrow produce blood platelets (1.5–3.5 lakh/mm³). Thrombocytopenia leads to severe clotting failure.",
    "🔥 Blood Group O is Universal Donor (specifically O-negative); Blood Group AB is Universal Recipient (specifically AB-positive).",
    "🔥 Erythroblastosis Foetalis occurs ONLY when an Rh-negative mother carries an Rh-positive foetus during a second/subsequent pregnancy.",
    "🔥 Prevent Erythroblastosis Foetalis by administering Anti-Rh antibodies (RhOGAM / anti-D) to mother immediately (within 72 hours) after delivery of 1st Rh+ve child.",
    "🔥 Calcium ions ($Ca^{2+}$) are essential cofactors required at almost every step of the blood coagulation cascade.",
    "🔥 Lacteals are lymphatic capillaries in intestinal villi that absorb digested fats in the form of chylomicrons."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing Plasma with Serum.",
      correctFact: "Plasma contains water, proteins (including Fibrinogen), electrolytes, and active clotting factors. Serum is Plasma MINUS clotting factors (Serum = Plasma - Fibrinogen). Serum cannot clot.",
      whyItMattersForNEET: "Frequently tested in NEET matching and statement-verification questions."
    },
    {
      commonConfusion: "Assuming Erythroblastosis Foetalis occurs during the FIRST Rh-positive pregnancy.",
      correctFact: "During the 1st pregnancy, maternal and foetal blood remain separated by the intact placenta, so the 1st baby is born healthy. Sensitisation occurs AT DELIVERY. The risk of RBC destruction occurs during SUBSEQUENT Rh-positive pregnancies.",
      whyItMattersForNEET: "NEET questions test the sequence of sensitisation vs second-pregnancy hemolysis."
    },
    {
      commonConfusion: "Believing Universal Donor is AB and Universal Recipient is O.",
      correctFact: "Group O is Universal Donor (no A or B antigens on RBCs); Group AB is Universal Recipient (no anti-A or anti-B antibodies in plasma). Specifically, O-negative is true universal donor and AB-positive is true universal recipient.",
      whyItMattersForNEET: "A classic direct MCQ trap in NEET UG."
    },
    {
      commonConfusion: "Confusing Basophil secretions with Eosinophil secretions.",
      correctFact: "Basophils secrete Histamine, Serotonin, and Heparin (involved in inflammation). Eosinophils release Histaminase (an enzyme that breaks down histamine to resist allergic reactions).",
      whyItMattersForNEET: "Cell secretion matching is a favorite topic of NEET examiners."
    }
  ],

  quickRevision: [
    "Blood = Plasma (55%) + Formed Elements (45%). Serum = Plasma - Clotting Factors.",
    "Plasma Proteins: Fibrinogen (clotting), Globulins (immunoglobulins/defense), Albumins (BCOP ~28 mmHg).",
    "RBCs: 5.0–5.5 million/mm³, 120-day lifespan, biconcave, enucleated, destroyed in Spleen.",
    "WBCs: 6000–8000/mm³. Granulocytes: Neutrophils (60-65%), Eosinophils (2-3%), Basophils (0.5-1%). Agranulocytes: Monocytes (6-8%), Lymphocytes (20-25%).",
    "Basophils: Secrete Histamine, Serotonin, Heparin. Monocytes: Differentiate into tissue Macrophages.",
    "Platelets: 1.5–3.5 lakh/mm³, megakaryocyte fragments, essential for blood clotting cascade.",
    "ABO Groups: Group A (Antigen A, Anti-B), Group B (Antigen B, Anti-A), Group AB (Antigens A & B, No antibodies - Universal Recipient), Group O (No antigens, Anti-A & Anti-B - Universal Donor).",
    "Erythroblastosis Foetalis: Rh-ve mother + Rh+ve foetus (2nd pregnancy). Prevented with anti-Rh antibodies (RhOGAM) post 1st delivery.",
    "Clotting Cascade: Thromboplastin → Thrombokinase + Ca²⁺ → Prothrombin to Thrombin → Fibrinogen to Fibrin meshwork.",
    "Lymph: Colorless fluid, lower protein than plasma, carries lymphocytes, absorbs fats via lacteals in intestinal villi."
  ],

  practiceQuestions: [
    {
      id: "prac-blood-1",
      question: "NEET-Style Practice Question — NOT A PYQ: Which of the following statements correctly describes human blood serum?",
      options: [
        "Plasma containing excess fibrinogen and calcium ions",
        "Plasma minus clotting factors such as fibrinogen",
        "Total blood volume excluding erythrocytes only",
        "Lymph fluid collected directly from intestinal lacteals"
      ],
      correctAnswerIndex: 1,
      explanation: "Serum is defined as blood plasma from which fibrinogen and other clotting factors have been removed (Serum = Plasma - Clotting Factors). Because it lacks fibrinogen, serum cannot undergo coagulation.",
      conceptTested: "Difference between plasma and serum"
    },
    {
      id: "prac-blood-2",
      question: "NEET-Style Practice Question — NOT A PYQ: A patient admitted with Dengue fever shows a severe drop in blood cell count to 45,000/mm³. Which blood component is reduced, and what is the expected clinical consequence?",
      options: [
        "Erythrocytes; reduced oxygen carrying capacity causing hypoxia",
        "Leucocytes; complete loss of cell-mediated immunity",
        "Thrombocytes; failure of blood clotting leading to internal hemorrhages",
        "Monocytes; inability of macrophages to perform diapedesis"
      ],
      correctAnswerIndex: 2,
      explanation: "Normal platelet count is 1.5 to 3.5 lakh/mm³ (150,000 - 350,000/mm³). A reduction to 45,000/mm³ indicates severe Thrombocytopenia. Platelets release clotting factors necessary for the coagulation cascade; a sharp reduction leads to clotting disorders and excessive blood loss.",
      conceptTested: "Platelet count and thrombocytopenia consequences"
    },
    {
      id: "prac-blood-3",
      question: "NEET-Style Practice Question — NOT A PYQ: If a person with Blood Group A requires an emergency blood transfusion, which of the following donor blood groups can be safely administered WITHOUT causing an agglutination reaction?",
      options: [
        "Group B and Group AB only",
        "Group A and Group O only",
        "Group AB and Group O only",
        "Group B and Group O only"
      ],
      correctAnswerIndex: 1,
      explanation: "A person with Blood Group A has RBC surface Antigen A and plasma Anti-B antibodies. Safe donors must not introduce Antigen B. Group A blood (has Antigen A) and Group O blood (has NO antigens) can be safely transfused. Group B and AB blood carry Antigen B, which would react with recipient Anti-B antibodies to cause agglutination.",
      conceptTested: "ABO blood group transfusion compatibility logic"
    }
  ],

  pyqs: [
    {
      id: "pyq-blood-2021",
      year: 2021,
      exam: "NEET UG",
      question: "Which of the following conditions favors Erythroblastosis foetalis?",
      options: [
        "Rh-positive mother and Rh-negative foetus",
        "Rh-negative mother and Rh-positive foetus",
        "Rh-positive mother and Rh-positive foetus",
        "Rh-negative mother and Rh-negative foetus"
      ],
      correctAnswerIndex: 1,
      explanation: "Erythroblastosis foetalis occurs due to Rh incompatibility when an Rh-negative mother carries an Rh-positive foetus. During parturition of the 1st pregnancy, foetal Rh+ RBCs sensitise the mother. In subsequent Rh+ pregnancies, maternal anti-Rh IgG antibodies cross the placenta and destroy foetal RBCs.",
      conceptTested: "Rh incompatibility condition for Erythroblastosis foetalis",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2021 Official Question Paper"
    },
    {
      id: "pyq-blood-2020",
      year: 2020,
      exam: "NEET UG",
      question: "Match the following columns and select the correct option:\nColumn-I: (A) Eosinophils, (B) Basophils, (C) Neutrophils, (D) Lymphocytes\nColumn-II: (i) Immune response, (ii) Phagocytosis, (iii) Release histamine/granules, (iv) Release histaminase/allergic response",
      options: [
        "(A)-(iv), (B)-(iii), (C)-(ii), (D)-(i)",
        "(A)-(1), (B)-(ii), (C)-(iv), (D)-(iii)",
        "(A)-(ii), (B)-(1), (C)-(iii), (D)-(iv)",
        "(A)-(iii), (B)-(iv), (C)-(i), (D)-(ii)"
      ],
      correctAnswerIndex: 0,
      explanation: "Eosinophils (A) release histaminase and are associated with allergic reactions (iv). Basophils (B) secrete histamine, serotonin, and heparin (iii). Neutrophils (C) are primary phagocytic cells (ii). Lymphocytes (D) mediate immune responses (i).",
      conceptTested: "Functions of different types of leucocytes",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2020 Official Question Paper"
    },
    {
      id: "pyq-blood-2019",
      year: 2019,
      exam: "NEET UG",
      question: "Which of the following plasma proteins is involved in coagulation of blood?",
      options: [
        "Fibrinogen",
        "Globulin",
        "Albumin",
        "Serum amylase"
      ],
      correctAnswerIndex: 0,
      explanation: "Fibrinogen is the major inactive plasma protein required for blood coagulation. During clotting, thrombin converts soluble fibrinogen into insoluble fibrin threads that form the meshwork of a clot.",
      conceptTested: "Role of fibrinogen in blood clotting",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2019 Official Question Paper"
    }
  ],

  neetMarksPotential: {
    averageQuestionsPerYear: 3,
    scoreWeightage: "12 Marks",
    difficultyRating: "Medium",
    highYieldStatus: true
  }
};
