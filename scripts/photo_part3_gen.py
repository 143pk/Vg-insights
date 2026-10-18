# Photosynthesis Part 3: Q251 to Q375 (Medium)
import json

def get_part3_raw():
    return [
    {
        "q_num": 251,
        "q": "Jagendorf's famous 1966 'acid-bath' experiment provided unequivocal proof for Mitchell's chemiosmotic hypothesis by demonstrating that:",
        "opts": {
            "A": "Isolated thylakoids incubated in pH 4 buffer and then transferred to pH 8 buffer synthesized ATP in the dark without light or electron transport",
            "B": "Chloroplasts require glucose to make ATP",
            "C": "Light destroys the thylakoid membrane",
            "D": "RuBisCO hydrolyzes ATP at pH 4"
        },
        "ans": "A",
        "exp": "Jagendorf artificially created a delta-pH across thylakoid membranes in the dark, which drove ATP synthesis through CF0-CF1, proving proton gradients power ATP synthesis.",
        "topic": "pigments_light",
        "sub": "Chemiosmotic Evidence",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 252,
        "q": "In Jagendorf's experiment, what was the necessary requirement for dark ATP synthesis when shifting thylakoids from pH 4 to pH 8?",
        "opts": {
            "A": "Presence of ADP and inorganic phosphate (Pi) in the alkaline stage",
            "B": "Continuous illumination with red light",
            "C": "Addition of DCMU",
            "D": "Supply of oxygen gas"
        },
        "ans": "A",
        "exp": "Proton efflux down the artificial pH gradient synthesized ATP only when the substrates ADP and Pi were provided in the alkaline bath.",
        "topic": "pigments_light",
        "sub": "Chemiosmotic Evidence",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 253,
        "q": "The core reaction center of Photosystem II is composed of a heterodimer of which two transmembrane polypeptides?",
        "opts": {
            "A": "D1 and D2 proteins",
            "B": "PsaA and PsaB proteins",
            "C": "Alpha and beta subunits",
            "D": "CF0 and CF1 proteins"
        },
        "ans": "A",
        "exp": "The D1 and D2 reaction center proteins bind P680, pheophytin, and the QA and QB plastoquinones.",
        "topic": "pigments_light",
        "sub": "PS II Core Architecture",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 254,
        "q": "The core reaction center of Photosystem I is composed of a heterodimer of which two polypeptides?",
        "opts": {
            "A": "PsaA and PsaB proteins",
            "B": "D1 and D2 proteins",
            "C": "Rieske Fe-S protein and Cytochrome f",
            "D": "MSP1 and MSP2 proteins"
        },
        "ans": "A",
        "exp": "PsaA and PsaB form the heterodimeric core binding P700, A0, A1, and the 4Fe-4S centre FX.",
        "topic": "pigments_light",
        "sub": "PS I Core Architecture",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 255,
        "q": "Which component of the Cytochrome b6f complex contains a unique 2Fe-2S cluster that undergoes physical domain movement during electron transfer?",
        "opts": {
            "A": "Rieske iron-sulfur protein",
            "B": "Cytochrome b6",
            "C": "Subunit IV",
            "D": "Cytochrome f"
        },
        "ans": "A",
        "exp": "The Rieske iron-sulfur protein has a flexible extrinsic domain that rotates to shuttle electrons from plastoquinol to cytochrome f.",
        "topic": "pigments_light",
        "sub": "Cyt b6f Architecture",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 256,
        "q": "The Manganese-Stabilizing Protein (MSP or PsbO, 33 kDa) in PS II functions to:",
        "opts": {
            "A": "Shield and stabilize the catalytic Mn4CaO5 cluster on the lumenal face",
            "B": "Transport electrons directly to NADP+",
            "C": "Bind chlorophyll b",
            "D": "Hydrolyze ATP in the lumen"
        },
        "ans": "A",
        "exp": "PsbO stabilizes the catalytic manganese cluster and optimizes calcium and chloride retention for water oxidation.",
        "topic": "pigments_light",
        "sub": "Oxygen Evolving Complex",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 257,
        "q": "In Photosystem II, the primary electron donor P680 operates at an extraordinarily high redox potential of approximately:",
        "opts": {
            "A": "+1.2 to +1.25 V",
            "B": "-0.43 V",
            "C": "0.0 V",
            "D": "+0.35 V"
        },
        "ans": "A",
        "exp": "P680+ is the strongest biological oxidizing agent known (Em ~ +1.25 V), thermodynamically capable of oxidizing water (+0.82 V).",
        "topic": "pigments_light",
        "sub": "Redox Potentials",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 258,
        "q": "In Photosystem I, the primary electron donor P700 in its excited state (P700*) has a very negative redox potential of approximately:",
        "opts": {
            "A": "-1.2 V (strong reducing agent)",
            "B": "+1.2 V",
            "C": "+0.8 V",
            "D": "0.0 V"
        },
        "ans": "A",
        "exp": "Excited P700* is an exceptionally strong reducing agent (Em ~ -1.2 V), capable of reducing ferredoxin (-0.43 V) and ultimately NADP+ (-0.32 V).",
        "topic": "pigments_light",
        "sub": "Redox Potentials",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 259,
        "q": "The primary electron donor in anoxygenic purple bacteria is P870. Why can purple bacteria NOT oxidize water to produce oxygen?",
        "opts": {
            "A": "The redox potential of P870+ (+0.45 V) is far too low to extract electrons from water (+0.82 V)",
            "B": "They lack cell membranes",
            "C": "They lack light-absorbing pigments",
            "D": "They have no ATP synthase"
        },
        "ans": "A",
        "exp": "Water oxidation requires a redox potential greater than +0.82 V; P870+ (+0.45 V) lacks sufficient thermodynamic power, obligating use of H2S.",
        "topic": "pigments_light",
        "sub": "Anoxygenic Photosynthesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 260,
        "q": "The xanthophyll cycle protects the photosynthetic apparatus from excessive light (photoinhibition) by:",
        "opts": {
            "A": "Converting violaxanthin to antheraxanthin and then to zeaxanthin, which dissipates excess excitation energy as heat (NPQ)",
            "B": "Converting chlorophyll a to chlorophyll b",
            "C": "Splitting water into hydrogen gas",
            "D": "Increasing CO2 diffusion through cuticle"
        },
        "ans": "A",
        "exp": "Under high light and acidic lumen pH, violaxanthin de-epoxidase converts violaxanthin to zeaxanthin, which mediates non-photochemical quenching (NPQ).",
        "topic": "pigments_light",
        "sub": "Photoprotection",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 261,
        "q": "The enzyme violaxanthin de-epoxidase (VDE) of the xanthophyll cycle is located in the:",
        "opts": {
            "A": "Thylakoid lumen and is activated by low lumenal pH (<5.5)",
            "B": "Chloroplast stroma and activated by high pH",
            "C": "Outer chloroplast envelope",
            "D": "Mitochondrial matrix"
        },
        "ans": "A",
        "exp": "VDE resides in the thylakoid lumen and is activated when excess light causes heavy proton accumulation (lumen pH drops below 5.5).",
        "topic": "pigments_light",
        "sub": "Photoprotection",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 262,
        "q": "The PsbS protein of Photosystem II plays a critical role in:",
        "opts": {
            "A": "Sensing lumenal pH and triggering rapid non-photochemical quenching (qE)",
            "B": "Splitting water molecules",
            "C": "Binding CO2 in stroma",
            "D": "Transferring electrons to plastocyanin"
        },
        "ans": "A",
        "exp": "PsbS senses lumen acidification via protonatable lumenal glutamate residues, inducing conformational changes that initiate qE thermal dissipation.",
        "topic": "pigments_light",
        "sub": "Photoprotection",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 263,
        "q": "During photoinhibition, the primary site of oxidative damage caused by reactive oxygen species (ROS) is:",
        "opts": {
            "A": "The D1 protein of Photosystem II",
            "B": "The large subunit of RuBisCO",
            "C": "The gamma subunit of ATP synthase",
            "D": "The cell wall hemicellulose"
        },
        "ans": "A",
        "exp": "The D1 protein suffers continuous photo-oxidative turnover under high light and is rapidly degraded and resynthesized via the PS II repair cycle.",
        "topic": "pigments_light",
        "sub": "Photoinhibition",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 264,
        "q": "Chloroplasts contain their own circular DNA and 70S ribosomes. The D1 protein of PS II is encoded by:",
        "opts": {
            "A": "The chloroplast psbA gene",
            "B": "Nuclear chromosomes only",
            "C": "Mitochondrial genome",
            "D": "Plasmid DNA"
        },
        "ans": "A",
        "exp": "The psbA gene in the chloroplast genome encodes the D1 reaction center polypeptide.",
        "topic": "pigments_light",
        "sub": "Chloroplast Genetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 265,
        "q": "The large subunit of RuBisCO is encoded by the chloroplast gene rbcL, while the small subunit is encoded by:",
        "opts": {
            "A": "Nuclear rbcS genes and imported into the chloroplast from the cytosol",
            "B": "Chloroplast genome",
            "C": "Mitochondrial genome",
            "D": "Ribosomal RNA directly"
        },
        "ans": "A",
        "exp": "RuBisCO small subunits (rbcS) are encoded in the nucleus, translated on cytosolic 80S ribosomes, and imported via the TOC/TIC translocons.",
        "topic": "c3_c4",
        "sub": "RuBisCO Genetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 266,
        "q": "Which post-translational modification is required to activate chloroplast-imported small subunits of RuBisCO?",
        "opts": {
            "A": "Cleavage of the N-terminal transit peptide by stromal processing peptidase (SPP)",
            "B": "Glycosylation in the Golgi apparatus",
            "C": "Phosphorylation by PKA",
            "D": "Ubiquitination"
        },
        "ans": "A",
        "exp": "After import through TOC/TIC complexes, the stroma-targeting transit peptide is cleaved off by stromal processing peptidase.",
        "topic": "c3_c4",
        "sub": "Protein Import",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 267,
        "q": "In addition to carbon fixation, chloroplasts in green plants are the exclusive site for:",
        "opts": {
            "A": "Nitrite reduction to ammonium by ferredoxin-dependent nitrite reductase",
            "B": "Urea synthesis",
            "C": "Glycolytic fermentation to ethanol",
            "D": "Cholesterol biosynthesis"
        },
        "ans": "A",
        "exp": "Nitrite reductase resides in chloroplasts and uses 6 reduced ferredoxins to reduce NO2- directly to NH4+.",
        "topic": "pigments_light",
        "sub": "Nitrogen Assimilation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 268,
        "q": "Sulfite reduction to sulfide in plants occurs in the chloroplast stroma catalyzed by sulfite reductase, which utilizes:",
        "opts": {
            "A": "Reduced ferredoxin as electron donor",
            "B": "NADH only",
            "C": "ATP hydrolysis directly",
            "D": "Molecular oxygen"
        },
        "ans": "A",
        "exp": "Sulfite reductase uses light-generated reduced ferredoxin to reduce SO3(2-) to S(2-) for cysteine biosynthesis.",
        "topic": "pigments_light",
        "sub": "Sulfur Assimilation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 269,
        "q": "The primary mechanism by which plants regulate the balance between non-cyclic and cyclic electron transport is:",
        "opts": {
            "A": "The redox state of the stroma (NADP+/NADPH ratio) and the stromal ATP/ADP ratio",
            "B": "Soil moisture content exclusively",
            "C": "Root pressure",
            "D": "Atmospheric nitrogen concentration"
        },
        "ans": "A",
        "exp": "When NADP+ is plentiful, electrons flow non-cyclically to FNR; when NADP+ is depleted (high NADPH), electrons divert into cyclic flow to produce ATP.",
        "topic": "pigments_light",
        "sub": "Cyclic vs Non-Cyclic",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 270,
        "q": "The ratio of ATP to NADPH produced by non-cyclic photophosphorylation alone is:",
        "opts": {
            "A": "Roughly 1.28 to 1.5 ATP per NADPH, which is insufficient for the Calvin cycle (requiring 1.5 ATP/NADPH) and photorespiration",
            "B": "3.0 ATP per NADPH",
            "C": "0.5 ATP per NADPH",
            "D": "Exactly 10 ATP per NADPH"
        },
        "ans": "A",
        "exp": "Non-cyclic electron flow yields slightly less than 1.5 ATP per NADPH; cyclic photophosphorylation fills this ATP deficit.",
        "topic": "pigments_light",
        "sub": "ATP/NADPH Ratio",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 271,
        "q": "In the Calvin cycle, how many total enzymatic steps are involved in one complete turn?",
        "opts": {
            "A": "13 distinct enzymatic reactions",
            "B": "3 reactions only",
            "C": "6 reactions only",
            "D": "24 reactions"
        },
        "ans": "A",
        "exp": "The complete Calvin cycle involves 13 enzyme-catalyzed steps spanning carboxylation, reduction, and complex sugar shuffles.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Complexity",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 272,
        "q": "Which two enzymes of the non-oxidative sugar phosphate rearrangement in the Calvin cycle contain thiamine pyrophosphate (TPP) as cofactor?",
        "opts": {
            "A": "Transketolase",
            "B": "Aldolase",
            "C": "Triose phosphate isomerase",
            "D": "Phosphoribulokinase"
        },
        "ans": "A",
        "exp": "Transketolase transfers 2-carbon ketol groups and requires thiamine pyrophosphate (TPP) and Mg2+.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Enzymes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 273,
        "q": "In the Calvin cycle sugar rearrangements, sedoheptulose-1,7-bisphosphate is formed by the condensation of:",
        "opts": {
            "A": "Erythrose-4-phosphate (4C) and Dihydroxyacetone phosphate (3C) catalyzed by aldolase",
            "B": "Ribose-5-phosphate and G3P",
            "C": "Two molecules of RuBP",
            "D": "Glucose and fructose"
        },
        "ans": "A",
        "exp": "Aldolase condenses erythrose-4-phosphate (4C) with DHAP (3C) to form sedoheptulose-1,7-bisphosphate (7C).",
        "topic": "c3_c4",
        "sub": "Sugar Rearrangements",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 274,
        "q": "Sedoheptulose-7-phosphate (7C) reacts with glyceraldehyde-3-phosphate (3C) in the presence of transketolase to yield:",
        "opts": {
            "A": "Ribose-5-phosphate (5C) and Xylulose-5-phosphate (5C)",
            "B": "Two molecules of RuBP",
            "C": "Glucose-6-phosphate and DHAP",
            "D": "Pyruvate and OAA"
        },
        "ans": "A",
        "exp": "Transketolase transfers a 2-carbon unit from S7P (7C) to G3P (3C), creating two 5-carbon pentose phosphates (R5P and Xu5P).",
        "topic": "c3_c4",
        "sub": "Sugar Rearrangements",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 275,
        "q": "Ribose-5-phosphate and Xylulose-5-phosphate are converted to Ribulose-5-phosphate by which two enzymes?",
        "opts": {
            "A": "Phosphopentose isomerase and Phosphopentose epimerase",
            "B": "Hexokinase and aldolase",
            "C": "Transketolase and PRK",
            "D": "RuBisCO and PEPcase"
        },
        "ans": "A",
        "exp": "R5P is isomerized to Ru5P by phosphopentose isomerase; Xu5P is epimerized to Ru5P by phosphopentose epimerase.",
        "topic": "c3_c4",
        "sub": "Sugar Rearrangements",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 276,
        "q": "CA1P (2-carboxy-D-arabinitol 1-phosphate) is a naturally occurring plant metabolite that acts as:",
        "opts": {
            "A": "A nocturnal tight-binding inhibitor of RuBisCO in the dark",
            "B": "A permanent activator of PEPcase",
            "C": "An electron carrier in PS I",
            "D": "A herbicide produced by fungi"
        },
        "ans": "A",
        "exp": "CA1P is synthesized at night in some plants and binds tightly to carbamylated RuBisCO, preventing wasteful substrate binding in the dark.",
        "topic": "c3_c4",
        "sub": "RuBisCO Regulation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 277,
        "q": "In the morning, CA1P is displaced from RuBisCO by RuBisCO activase and subsequently hydrolyzed by:",
        "opts": {
            "A": "CA1P phosphatase",
            "B": "Amylase",
            "C": "Protease",
            "D": "Catalase"
        },
        "ans": "A",
        "exp": "RuBisCO activase pulls CA1P off the catalytic site, allowing specific CA1P phosphatase to degrade it in the light.",
        "topic": "c3_c4",
        "sub": "RuBisCO Regulation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 278,
        "q": "Stable carbon isotope ratio analysis (delta-13C) can definitively distinguish C3 and C4 plants because:",
        "opts": {
            "A": "RuBisCO discriminates strongly against 13CO2 (giving delta-13C of -24 to -34 per mil in C3), whereas PEPcase discriminates minimally (giving -10 to -16 per mil in C4)",
            "B": "C4 plants do not contain carbon",
            "C": "C3 plants only use radioactive carbon",
            "D": "C4 plants absorb nitrogen isotopes instead"
        },
        "ans": "A",
        "exp": "RuBisCO discriminates against heavy 13C much more than PEPcase, resulting in markedly distinct delta-13C signatures.",
        "topic": "c3_c4",
        "sub": "Carbon Isotopes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 279,
        "q": "Why does PEPcase show very little discrimination against 13C during carboxylation?",
        "opts": {
            "A": "Because its substrate is HCO3-, and equilibrium fractionation between CO2 and HCO3- offsets enzymatic isotope discrimination",
            "B": "Because it is an artificial enzyme",
            "C": "Because it operates at high pressure",
            "D": "Because it binds carbon covalently without enzymes"
        },
        "ans": "A",
        "exp": "Gaseous CO2 dissolving and hydrating to HCO3- enriches 13C by ~+7.9 per mil, counterbalancing PEPcase's slight enzymatic discrimination.",
        "topic": "c3_c4",
        "sub": "Carbon Isotopes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 280,
        "q": "In PEP-carboxykinase (PEP-CK) type C4 plants (e.g., Megathyrsus maximus), the decarboxylation of oxaloacetate in bundle sheath cells produces PEP and CO2 using:",
        "opts": {
            "A": "ATP-dependent PEP carboxykinase in the cytosol",
            "B": "NADP-malic enzyme in chloroplasts",
            "C": "NAD-malic enzyme in mitochondria",
            "D": "RuBisCO in lumen"
        },
        "ans": "A",
        "exp": "In PEP-CK C4 plants, OAA is directly decarboxylated to PEP in the bundle sheath cytosol consuming 1 ATP.",
        "topic": "c3_c4",
        "sub": "C4 Subtypes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 281,
        "q": "In C4 plants, the primary carboxylating enzyme (PEPcase) is located in the:",
        "opts": {
            "A": "Cytosol of mesophyll cells",
            "B": "Stroma of bundle sheath chloroplasts",
            "C": "Lumen of mesophyll thylakoids",
            "D": "Vacuole of epidermal cells"
        },
        "ans": "A",
        "exp": "PEP carboxylase is a soluble cytoplasmic enzyme located in the cytosol of mesophyll cells.",
        "topic": "c3_c4",
        "sub": "Enzyme Localization",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 282,
        "q": "In C4 plants, RuBisCO is located exclusively in the:",
        "opts": {
            "A": "Chloroplast stroma of bundle sheath cells",
            "B": "Cytosol of mesophyll cells",
            "C": "Thylakoid lumen of bundle sheath cells",
            "D": "Xylem sap"
        },
        "ans": "A",
        "exp": "RuBisCO is strictly localized within the stroma of bundle sheath chloroplasts in C4 leaves.",
        "topic": "c3_c4",
        "sub": "Enzyme Localization",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 283,
        "q": "In C4 plants, where does the light-dependent splitting of water primarily occur?",
        "opts": {
            "A": "In the granal chloroplasts of mesophyll cells",
            "B": "In the agranal chloroplasts of bundle sheath cells",
            "C": "In the stomatal guard cells only",
            "D": "In root hair cells"
        },
        "ans": "A",
        "exp": "Mesophyll chloroplasts have well-developed grana with abundant PS II and oxygen-evolving complexes.",
        "topic": "c3_c4",
        "sub": "C4 Photosystems",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 284,
        "q": "Why is oxygen evolution minimal in bundle sheath chloroplasts of NADP-ME C4 plants?",
        "opts": {
            "A": "Their chloroplasts lack granal thylakoids and have very little or no active PS II",
            "B": "They lack water",
            "C": "They have thick cell walls",
            "D": "They lack membrane lipids"
        },
        "ans": "A",
        "exp": "Loss of PS II in bundle sheath chloroplasts eliminates O2 production, creating a low-O2 sanctuary for RuBisCO.",
        "topic": "c3_c4",
        "sub": "C4 Photosystems",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 285,
        "q": "How do bundle sheath cells of NADP-ME C4 plants meet their ATP requirements for the Calvin cycle?",
        "opts": {
            "A": "Via high rates of cyclic photophosphorylation around Photosystem I in their agranal thylakoids",
            "B": "By importing ATP from roots",
            "C": "By cellular fermentation",
            "D": "From mitochondrial oxidative phosphorylation exclusively"
        },
        "ans": "A",
        "exp": "Abundant PS I in bundle sheath thylakoids carries out active cyclic electron flow to generate ATP without O2.",
        "topic": "c3_c4",
        "sub": "C4 Photosystems",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 286,
        "q": "How do bundle sheath cells of NADP-ME C4 plants obtain the NADPH required for Calvin cycle reduction?",
        "opts": {
            "A": "Half of the NADPH is imported directly via the malate decarboxylation reaction (malate + NADP+ -> pyruvate + CO2 + NADPH)",
            "B": "From water splitting in the bundle sheath",
            "C": "From sucrose breakdown",
            "D": "From nitrate reduction"
        },
        "ans": "A",
        "exp": "NADP-malic enzyme decarboxylation provides 1 mole of NADPH for every mole of CO2 delivered to bundle sheath stroma.",
        "topic": "c3_c4",
        "sub": "C4 Reducing Equivalents",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 287,
        "q": "The remaining half of the NADPH requirement of the Calvin cycle in NADP-ME bundle sheath cells is met by:",
        "opts": {
            "A": "A 3-PGA / DHAP shuttle between bundle sheath and mesophyll cells",
            "B": "Direct absorption of atmospheric hydrogen",
            "C": "Mitochondrial NADH transhydrogenase",
            "D": "PS II in bundle sheath cells"
        },
        "ans": "A",
        "exp": "Half of the 3-PGA is exported to mesophyll cells, reduced to DHAP using mesophyll NADPH, and shuttled back to bundle sheath.",
        "topic": "c3_c4",
        "sub": "Metabolite Shuttles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 288,
        "q": "The suberin lamella present in the radial and tangential walls of bundle sheath cells in C4 grasses functions as:",
        "opts": {
            "A": "A diffusion barrier preventing the leakage of concentrated CO2 back into intercellular spaces",
            "B": "A water-absorbing sponge",
            "C": "A light reflector",
            "D": "A mechanical support for stomata"
        },
        "ans": "A",
        "exp": "The suberin layer provides high diffusive resistance, preventing back-diffusion of CO2 and entry of O2.",
        "topic": "c3_c4",
        "sub": "Kranz Anatomy",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 289,
        "q": "In C4 plants, PEPcase is regulated by reversible phosphorylation. During the day, PEPcase is:",
        "opts": {
            "A": "Phosphorylated by PEPcase kinase, making it highly active and insensitive to feedback inhibition by malate",
            "B": "Dephosphorylated and inactive",
            "C": "Degraded by proteases",
            "D": "Transported into vacuoles"
        },
        "ans": "A",
        "exp": "Daytime phosphorylation by PEPcase kinase increases Vmax and reduces malate inhibition, promoting active CO2 fixation.",
        "topic": "c3_c4",
        "sub": "PEPcase Regulation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 290,
        "q": "At night in C4 plants, PEPcase is:",
        "opts": {
            "A": "Dephosphorylated by a protein phosphatase, becoming less active and highly sensitive to malate inhibition",
            "B": "Phosphorylated and super-active",
            "C": "Exported into phloem",
            "D": "Synthesized de novo"
        },
        "ans": "A",
        "exp": "Dephosphorylated PEPcase has low activity and is strongly inhibited by malate, shutting off C4 fixation at night.",
        "topic": "c3_c4",
        "sub": "PEPcase Regulation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 291,
        "q": "In CAM plants, nocturnal phosphorylation of PEPcase by PEPcase kinase is essential because:",
        "opts": {
            "A": "It allows PEPcase to remain active at night despite rising concentrations of malic acid in the cytoplasm",
            "B": "It converts PEPcase into an oxygenase",
            "C": "It prevents water absorption",
            "D": "It forces stomata to close at night"
        },
        "ans": "A",
        "exp": "Nocturnal phosphorylation prevents feedback inhibition by accumulating vacuolar/cytosolic malic acid.",
        "topic": "c3_c4",
        "sub": "CAM PEPcase Regulation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 292,
        "q": "During the daytime in CAM plants, PEPcase is dephosphorylated, which ensures that:",
        "opts": {
            "A": "PEPcase remains inactive, preventing a futile cycle of refixing the CO2 released by malate decarboxylation",
            "B": "RuBisCO is destroyed",
            "C": "Stomata open wide at noon",
            "D": "Water is split in vacuoles"
        },
        "ans": "A",
        "exp": "Dephosphorylated PEPcase is severely inhibited by malate in the day, ensuring released CO2 is fixed solely by RuBisCO.",
        "topic": "c3_c4",
        "sub": "CAM Futile Cycle Prevention",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 293,
        "q": "The nocturnal transport of malic acid into the vacuole of CAM cells is driven by:",
        "opts": {
            "A": "A tonoplast V-type H+-ATPase and H+-pyrophosphatase pumping protons into the vacuole",
            "B": "Simple diffusion down a concentration gradient",
            "C": "A sodium-potassium pump",
            "D": "Endocytosis"
        },
        "ans": "A",
        "exp": "Tonoplast proton pumps acidify the vacuolar lumen, and malate2- enters through anion channels driven by the positive-inside potential.",
        "topic": "c3_c4",
        "sub": "CAM Vacuolar Transport",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 294,
        "q": "The storage capacity for malic acid in CAM plants is determined by:",
        "opts": {
            "A": "The size of the central vacuole in photosynthetic succulent cells (large cells with huge vacuoles)",
            "B": "The number of stomata on upper epidermis",
            "C": "The diameter of xylem vessels",
            "D": "The depth of tap roots"
        },
        "ans": "A",
        "exp": "Large vacuolar storage capacity in succulent mesophyll tissue is indispensable for overnight malate accumulation.",
        "topic": "c3_c4",
        "sub": "CAM Succulence",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 295,
        "q": "In CAM plants, the carbon skeletons for regenerating PEP at night are derived from:",
        "opts": {
            "A": "Breakdown of stored chloroplast starch or glucan via glycolysis",
            "B": "Direct absorption of glucose from roots",
            "C": "Protein degradation in peroxisomes",
            "D": "Lipid peroxidation"
        },
        "ans": "A",
        "exp": "Nocturnal starch degradation through phosphorolytic and glycolytic pathways provides PEP for nocturnal carboxylation.",
        "topic": "c3_c4",
        "sub": "CAM Carbohydrate Mobilization",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 296,
        "q": "During daytime in CAM plants, the 3-carbon pyruvate or PEP remaining after malate decarboxylation is converted back to:",
        "opts": {
            "A": "Storage starch via gluconeogenesis in chloroplasts",
            "B": "CO2 and water via cellular respiration",
            "C": "Lipids in the ER",
            "D": "Amino acids in vacuoles"
        },
        "ans": "A",
        "exp": "Pyruvate is recycled via gluconeogenesis into storage starch, closing the daily carbohydrate balance of the CAM cell.",
        "topic": "c3_c4",
        "sub": "CAM Gluconeogenesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 297,
        "q": "Under extreme drought (CAM idling), CAM plants:",
        "opts": {
            "A": "Keep stomata closed both day and night, recycling respiratory CO2 internally into malate at night and refixing it by day",
            "B": "Shed all leaves immediately",
            "C": "Produce seeds within hours",
            "D": "Convert to parasitic mode"
        },
        "ans": "A",
        "exp": "CAM idling maintains zero water loss while sustaining minimal photosynthetic metabolic turnover using respiratory CO2.",
        "topic": "c3_c4",
        "sub": "CAM Idling",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 298,
        "q": "Which of the following photosynthetic types has the lowest transpiration ratio (grams of H2O transpired per gram of CO2 fixed)?",
        "opts": {
            "A": "CAM plants (50 to 100 g H2O / g CO2)",
            "B": "C4 plants (250 to 350 g H2O / g CO2)",
            "C": "C3 plants (400 to 500 g H2O / g CO2)",
            "D": "Submerged hydrophytes"
        },
        "ans": "A",
        "exp": "CAM plants exhibit the highest water-use efficiency (lowest transpiration ratio) due to night-time stomatal opening.",
        "topic": "c3_c4",
        "sub": "Transpiration Ratio",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 299,
        "q": "Which of the following photosynthetic types has the highest light saturation point (often never truly saturating in natural sunlight)?",
        "opts": {
            "A": "C4 plants",
            "B": "C3 shade plants",
            "C": "CAM plants",
            "D": "C3 temperate crops"
        },
        "ans": "A",
        "exp": "C4 plants rarely saturate in full sunlight because their high CO2 delivery permits exceptionally high photosynthetic capacity.",
        "topic": "factors",
        "sub": "Light Saturation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 300,
        "q": "Single-cell C4 photosynthesis (functioning without Kranz anatomy) has been discovered in:",
        "opts": {
            "A": "Bienertia cycloptera and Borszczowia aralocaspica (Chenopodiaceae)",
            "B": "Zea mays and Sorghum",
            "C": "Triticum and Oryza",
            "D": "Ananas and Agave"
        },
        "ans": "A",
        "exp": "Bienertia and Borszczowia achieve spatial segregation of PEPcase and RuBisCO within distinct intracellular compartments of a single cell.",
        "topic": "c3_c4",
        "sub": "Single-Cell C4",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 301,
        "q": "How many molecules of ATP and NADPH are required by a C3 plant to fix 12 molecules of CO2 into two molecules of glucose?",
        "opts": {
            "A": "36 ATP and 24 NADPH",
            "B": "18 ATP and 12 NADPH",
            "C": "60 ATP and 24 NADPH",
            "D": "72 ATP and 48 NADPH"
        },
        "ans": "A",
        "exp": "Each glucose needs 18 ATP and 12 NADPH; two glucose molecules require 2 x 18 = 36 ATP and 2 x 12 = 24 NADPH.",
        "topic": "c3_c4",
        "sub": "Stoichiometry Numericals",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 302,
        "q": "How many molecules of ATP and NADPH are required by a C4 plant to fix 12 molecules of CO2 into two molecules of glucose?",
        "opts": {
            "A": "60 ATP and 24 NADPH",
            "B": "30 ATP and 12 NADPH",
            "C": "36 ATP and 24 NADPH",
            "D": "72 ATP and 36 NADPH"
        },
        "ans": "A",
        "exp": "Each glucose in C4 requires 30 ATP and 12 NADPH; two glucose molecules require 2 x 30 = 60 ATP and 24 NADPH.",
        "topic": "c3_c4",
        "sub": "Stoichiometry Numericals",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 303,
        "q": "How many molecules of water must undergo photolysis to evolve 6 molecules of O2 during photosynthesis?",
        "opts": {
            "A": "12 molecules of H2O",
            "B": "6 molecules of H2O",
            "C": "24 molecules of H2O",
            "D": "3 molecules of H2O"
        },
        "ans": "A",
        "exp": "2 H2O -> 1 O2 + 4 H+ + 4 e-; hence 6 O2 requires 6 x 2 = 12 H2O molecules.",
        "topic": "pigments_light",
        "sub": "Photolysis Numericals",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 304,
        "q": "How many electrons are transported through the Z-scheme to synthesize one molecule of glucose (fixing 6 CO2) in a C3 plant?",
        "opts": {
            "A": "24 electrons (derived from 12 H2O)",
            "B": "12 electrons",
            "C": "6 electrons",
            "D": "48 electrons"
        },
        "ans": "A",
        "exp": "Fixing 6 CO2 requires 12 NADPH; reducing 12 NADP+ requires 12 x 2 = 24 electrons, provided by photolysis of 12 H2O.",
        "topic": "pigments_light",
        "sub": "Electron Transport Numericals",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 305,
        "q": "How many photons (quanta) are absorbed by PS II and PS I combined to produce one molecule of glucose assuming a minimum quantum requirement of 8 quanta per O2?",
        "opts": {
            "A": "48 photons (6 O2 x 8 quanta/O2)",
            "B": "24 photons",
            "C": "12 photons",
            "D": "96 photons"
        },
        "ans": "A",
        "exp": "Evolving 6 O2 (releasing 24 electrons) requires 6 x 8 = 48 photons (24 at PS II and 24 at PS I).",
        "topic": "pigments_light",
        "sub": "Quantum Numericals",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 306,
        "q": "If a C3 plant experiences photorespiration such that for every 4 carboxylation reactions, 1 oxygenation reaction occurs, how many RuBP molecules are consumed to synthesize 1 molecule of glucose?",
        "opts": {
            "A": "8 RuBP molecules (instead of the normal 6)",
            "B": "6 RuBP molecules",
            "C": "12 RuBP molecules",
            "D": "24 RuBP molecules"
        },
        "ans": "A",
        "exp": "Oxygenation drains carbon into phosphoglycolate; compensating for photorespiratory carbon loss requires extra turns and RuBP turnover.",
        "topic": "c3_c4",
        "sub": "Photorespiration Numericals",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 307,
        "q": "For every 2 molecules of phosphoglycolate that enter the photorespiratory carbon salvage pathway, how many molecules of CO2 are lost?",
        "opts": {
            "A": "1 molecule of CO2",
            "B": "2 molecules of CO2",
            "C": "0 molecules",
            "D": "4 molecules of CO2"
        },
        "ans": "A",
        "exp": "2 phosphoglycolate (4C) -> 2 glycolate (4C) -> 2 glycine (4C) -> 1 serine (3C) + 1 CO2 (1C).",
        "topic": "c3_c4",
        "sub": "Photorespiration Numericals",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 308,
        "q": "For every 2 molecules of phosphoglycolate entering the C2 photorespiratory cycle, how many molecules of 3-PGA are recovered?",
        "opts": {
            "A": "1 molecule of 3-PGA",
            "B": "2 molecules of 3-PGA",
            "C": "4 molecules of 3-PGA",
            "D": "0 molecules"
        },
        "ans": "A",
        "exp": "1 serine (3C) is converted into 1 glycerate (3C) and phosphorylated to 1 molecule of 3-PGA (3C).",
        "topic": "c3_c4",
        "sub": "Photorespiration Numericals",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 309,
        "q": "In a test tube containing isolated chloroplasts, if an inhibitor blocks ferredoxin-NADP+ reductase (FNR) completely while ADP and Pi are abundant:",
        "opts": {
            "A": "Non-cyclic photophosphorylation ceases, but cyclic photophosphorylation can continue to synthesize ATP",
            "B": "All ATP synthesis stops immediately",
            "C": "Oxygen evolution increases 10-fold",
            "D": "Calvin cycle accelerates"
        },
        "ans": "A",
        "exp": "Blocking FNR prevents reduction of NADP+, accumulating reduced ferredoxin which diverts into cyclic photophosphorylation.",
        "topic": "pigments_light",
        "sub": "Inhibitor Effects",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 310,
        "q": "If isolated thylakoids are treated with gramicidin (a channel-forming ionophore permeable to H+):",
        "opts": {
            "A": "Proton gradient collapses and ATP synthesis stops, while electron flow continues or increases",
            "B": "Electron flow stops immediately",
            "C": "Water photolysis reverses",
            "D": "Chlorophyll fluoresces permanently"
        },
        "ans": "A",
        "exp": "Gramicidin dissipates delta-pH across the thylakoid, eliminating PMF and halting ATP synthesis while uncoupling electron transport.",
        "topic": "pigments_light",
        "sub": "Inhibitor Effects",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 311,
        "q": "The pH in the chloroplast stroma in the dark is approximately 7.0, and in the light it reaches approximately 8.0. What is the fold difference in hydrogen ion concentration [H+] in the stroma between light and dark?",
        "opts": {
            "A": "10-fold decrease in [H+] in the light",
            "B": "100-fold decrease",
            "C": "2-fold decrease",
            "D": "10-fold increase"
        },
        "ans": "A",
        "exp": "pH is -log10[H+]; an increase from pH 7.0 to 8.0 represents a 10-fold drop in free proton concentration.",
        "topic": "pigments_light",
        "sub": "pH Numericals",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 312,
        "q": "If the pH of the thylakoid lumen during active photosynthesis is 4.5 and the stroma is 8.0, the pH difference (delta-pH) across the membrane is:",
        "opts": {
            "A": "3.5 pH units (representing over a 3,000-fold difference in [H+])",
            "B": "1.0 pH unit",
            "C": "7.0 pH units",
            "D": "0.5 pH unit"
        },
        "ans": "A",
        "exp": "Delta-pH = 8.0 - 4.5 = 3.5 units. 10^3.5 is approximately 3,162-fold difference in proton concentration.",
        "topic": "pigments_light",
        "sub": "pH Numericals",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 313,
        "q": "In C4 plants, how many molecules of ATP are consumed exclusively for the regeneration of PEP from pyruvate per glucose synthesized?",
        "opts": {
            "A": "12 ATP equivalents",
            "B": "6 ATP",
            "C": "18 ATP",
            "D": "30 ATP"
        },
        "ans": "A",
        "exp": "6 CO2 fixed = 6 pyruvate regenerated to PEP; each requires 2 ATP equivalents via PPDK (6 x 2 = 12 ATP equivalents).",
        "topic": "c3_c4",
        "sub": "C4 Energetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 314,
        "q": "The net energy cost difference between C4 and C3 plants per glucose molecule synthesized is:",
        "opts": {
            "A": "12 additional ATP equivalents in C4 plants (30 ATP vs 18 ATP)",
            "B": "6 ATP",
            "C": "2 ATP",
            "D": "18 ATP"
        },
        "ans": "A",
        "exp": "C4 plants invest 12 extra ATP per glucose to run the CO2 concentrating mechanism, compensating by eliminating photorespiration.",
        "topic": "c3_c4",
        "sub": "C4 vs C3 Energetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 315,
        "q": "Under conditions of high light and 35\u00b0C in air, which plant type will exhibit the highest net photosynthetic rate?",
        "opts": {
            "A": "C4 plants (e.g., maize)",
            "B": "C3 temperate plants (e.g., wheat)",
            "C": "CAM plants during daytime",
            "D": "Submerged hydrophytes"
        },
        "ans": "A",
        "exp": "At 35\u00b0C, high photorespiration severely curbs C3 photosynthesis, while C4 plants thrive near their thermal optimum with zero photorespiration.",
        "topic": "factors",
        "sub": "Comparative Rates",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 316,
        "q": "Guard cells of stomata contain chloroplasts. Which of the following is true regarding guard cell chloroplasts?",
        "opts": {
            "A": "They carry out light reactions and blue-light signaling, but have low or deficient Calvin cycle activity compared to mesophyll",
            "B": "They lack chlorophyll pigments completely",
            "C": "They produce all the glucose needed by the plant",
            "D": "They have no ATP synthase"
        },
        "ans": "A",
        "exp": "Guard cell chloroplasts generate ATP and NADPH for ion transport (H+-ATPase, K+ accumulation) and blue light phototropin responses.",
        "topic": "pigments_light",
        "sub": "Guard Cell Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 317,
        "q": "During stomatal opening in light, guard cells accumulate K+ and malate2- ions, which causes:",
        "opts": {
            "A": "Water influx by endosmosis, increasing guard cell turgor and pulling the stomatal pore open",
            "B": "Water efflux and flaccidity",
            "C": "Destruction of guard cell walls",
            "D": "Precipitation of starch in stroma"
        },
        "ans": "A",
        "exp": "Proton extrusion creates negative membrane potential, driving K+ influx; accumulated K+ and malate lower osmotic potential, causing turgor-driven opening.",
        "topic": "factors",
        "sub": "Stomatal Opening",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 318,
        "q": "The blue-light photoreceptors in guard cells that trigger proton pumping and stomatal opening are:",
        "opts": {
            "A": "Phototropins (phot1 and phot2)",
            "B": "Phytochromes",
            "C": "Cryptochromes",
            "D": "Chlorophyll b"
        },
        "ans": "A",
        "exp": "Phototropins absorb blue light, triggering phosphorylation of plasma membrane H+-ATPase to drive K+ accumulation and stomatal opening.",
        "topic": "factors",
        "sub": "Photoreceptors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 319,
        "q": "Phytochrome regulation in plants is mediated by two interconvertible forms: Pr (red-absorbing, 660 nm) and Pfr (far-red absorbing, 730 nm). The active biological form is:",
        "opts": {
            "A": "Pfr",
            "B": "Pr",
            "C": "Both equally",
            "D": "Neither"
        },
        "ans": "A",
        "exp": "Pfr is the biologically active form of phytochrome that migrates to the nucleus to regulate gene expression.",
        "topic": "factors",
        "sub": "Phytochrome",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 320,
        "q": "Chlorophyll synthesis begins from which amino acid in higher plants?",
        "opts": {
            "A": "Glutamate (via the 5-carbon pathway into 5-aminolevulinic acid, ALA)",
            "B": "Glycine",
            "C": "Tryptophan",
            "D": "Methionine"
        },
        "ans": "A",
        "exp": "In plants, ALA and chlorophyll are synthesized from glutamate (the Beale / 5-carbon pathway) in chloroplasts.",
        "topic": "pigments_light",
        "sub": "Chlorophyll Biosynthesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 321,
        "q": "The immediate precursor of chlorophyll a that requires light for reduction by protochlorophyllide oxidoreductase (POR) is:",
        "opts": {
            "A": "Protochlorophyllide",
            "B": "Protoporphyrin IX",
            "C": "Magnesium protoporphyrin",
            "D": "Chlorophyll b"
        },
        "ans": "A",
        "exp": "Angiosperms require light to reduce protochlorophyllide to chlorophyllide via the light-dependent enzyme POR.",
        "topic": "pigments_light",
        "sub": "Chlorophyll Biosynthesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 322,
        "q": "Etiolated seedlings grown in complete darkness appear pale yellow because:",
        "opts": {
            "A": "They develop etioplasts containing crystalline prolamellar bodies with protochlorophyllide instead of mature chloroplasts with chlorophyll",
            "B": "Their cells lack DNA",
            "C": "Their cell walls contain sulfur",
            "D": "They lack mitochondria"
        },
        "ans": "A",
        "exp": "Without light, protochlorophyllide cannot be photochemically converted to chlorophyll, resulting in etiolated tissue with etioplasts.",
        "topic": "pigments_light",
        "sub": "Etiolation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 323,
        "q": "Upon exposure of an etiolated seedling to light (greening / de-etiolation):",
        "opts": {
            "A": "Prolamellar bodies disperse and develop into stacked thylakoid membranes within hours as chlorophyll is synthesized",
            "B": "The seedling immediately wilts and dies",
            "C": "Etioplasts transform directly into chromoplasts",
            "D": "All starch is converted into lipids"
        },
        "ans": "A",
        "exp": "Light triggers chlorophyllide formation, prolamellar body dispersal, and rapid assembly of granal and stromal thylakoids.",
        "topic": "pigments_light",
        "sub": "Greening",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 324,
        "q": "Why are variegated leaves (leaves with green and non-green patches) used in starch tests to demonstrate the necessity of chlorophyll?",
        "opts": {
            "A": "Starch is formed only in the green parts containing chlorophyll, while white/yellow patches test negative with iodine",
            "B": "White patches absorb too much iodine",
            "C": "Green parts reject iodine",
            "D": "White patches contain only lipids"
        },
        "ans": "A",
        "exp": "Starch iodine tests show blue-black staining strictly localized to previously green, chlorophyll-containing leaf regions.",
        "topic": "factors",
        "sub": "Starch Test",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 325,
        "q": "In Moll's half-leaf experiment, a part of a destarched leaf is enclosed in a bottle containing KOH solution. The test proves that:",
        "opts": {
            "A": "Carbon dioxide (CO2) is essential for photosynthesis",
            "B": "Light is unnecessary for starch formation",
            "C": "Chlorophyll is unnecessary",
            "D": "Oxygen is essential for dark reactions"
        },
        "ans": "A",
        "exp": "KOH absorbs CO2 inside the bottle; the enclosed part fails to form starch, confirming CO2 is indispensable for photosynthesis.",
        "topic": "factors",
        "sub": "Historical Experiments",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 326,
        "q": "Why is an inverted funnel and test tube experiment using Hydrilla placed in sunlight used in school laboratories?",
        "opts": {
            "A": "To demonstrate the evolution of oxygen gas during photosynthesis",
            "B": "To prove that Hydrilla breathes nitrogen",
            "C": "To measure transpiration in water plants",
            "D": "To show that aquatic plants do not use light"
        },
        "ans": "A",
        "exp": "Bubbles of gas collecting in the test tube displace water and rekindle a glowing splinter, proving oxygen evolution in light.",
        "topic": "pigments_light",
        "sub": "Oxygen Evolution",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 327,
        "q": "Which part of the visible spectrum is least effective in driving photosynthesis in green plants?",
        "opts": {
            "A": "Green light (500 to 550 nm)",
            "B": "Red light (660 to 680 nm)",
            "C": "Blue light (430 to 450 nm)",
            "D": "Violet light (400 to 420 nm)"
        },
        "ans": "A",
        "exp": "Chlorophylls transmit and reflect green light, making it the least absorbed and least effective region (the green window).",
        "topic": "pigments_light",
        "sub": "Action Spectrum",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 328,
        "q": "Although green light is least absorbed by isolated chlorophyll, why can green light penetrate deeper into a dense plant canopy and drive photosynthesis efficiently?",
        "opts": {
            "A": "Green light is transmitted through upper leaves and scattered multiple times within lower leaf mesophyll, enhancing absorption in shaded understory",
            "B": "Green light is absorbed by cell wall cellulose",
            "C": "Green light converts directly to blue light",
            "D": "Canopy leaves reflect red light only"
        },
        "ans": "A",
        "exp": "Transmitted green light reaches lower canopy layers and is absorbed during multiple diffuse reflections inside spongy mesophyll.",
        "topic": "pigments_light",
        "sub": "Canopy Photosynthesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 329,
        "q": "The primary carboxylating enzyme in photosynthetic bacteria (e.g., Rhodospirillum, Chlorobium) is:",
        "opts": {
            "A": "RuBisCO (operating in the Calvin cycle) or alternative pathways like the reverse TCA cycle",
            "B": "PEP carboxylase exclusively",
            "C": "Nitrogenase",
            "D": "DNA polymerase"
        },
        "ans": "A",
        "exp": "Purple bacteria use RuBisCO in the Calvin cycle, while green sulfur bacteria use the reductive tricarboxylic acid (rTCA) cycle.",
        "topic": "c3_c4",
        "sub": "Bacterial Carbon Fixation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 330,
        "q": "The electron donor used by cyanobacteria during photosynthesis is:",
        "opts": {
            "A": "Water (H2O)",
            "B": "Hydrogen sulfide (H2S)",
            "C": "Methane (CH4)",
            "D": "Ethanol"
        },
        "ans": "A",
        "exp": "Cyanobacteria are oxygenic phototrophs that possess both PS II and PS I and utilize water as the electron donor.",
        "topic": "pigments_light",
        "sub": "Cyanobacteria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 331,
        "q": "The phycobiliproteins (phycocyanin, allophycocyanin, phycoerythrin) are accessory pigments found in:",
        "opts": {
            "A": "Cyanobacteria and Red algae (Rhodophyta)",
            "B": "Brown algae and diatoms",
            "C": "Angiosperms and gymnosperms",
            "D": "Fungi and lichens"
        },
        "ans": "A",
        "exp": "Phycobilisomes containing phycocyanin and phycoerythrin serve as light-harvesting antennae in cyanobacteria and red algae.",
        "topic": "pigments_light",
        "sub": "Phycobilins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 332,
        "q": "Fucoxanthin is the characteristic brown xanthophyll pigment found in:",
        "opts": {
            "A": "Brown algae (Phaeophyceae) and Diatoms",
            "B": "Green algae (Chlorophyceae)",
            "C": "Red algae (Rhodophyta)",
            "D": "Cyanobacteria"
        },
        "ans": "A",
        "exp": "Fucoxanthin gives brown algae (kelps, Fucus, Sargassum) and diatoms their olive-brown coloration and harvests blue-green light.",
        "topic": "pigments_light",
        "sub": "Algal Pigments",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 333,
        "q": "Which of the following statements about C4 bundle sheath cells is correct?",
        "opts": {
            "A": "They have numerous plasmodesmata, high RuBisCO concentration, and agranal or centrifugal chloroplasts",
            "B": "They have thin walls and intercellular gas spaces",
            "C": "They lack mitochondria",
            "D": "They do not contain DNA"
        },
        "ans": "A",
        "exp": "Bundle sheath cells possess tight, gas-impermeable walls, high RuBisCO, abundant plasmodesmata, and agranal or poorly granal plastids.",
        "topic": "c3_c4",
        "sub": "Bundle Sheath Features",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 334,
        "q": "In C4 plants, the transport of malate into bundle sheath cells is balanced by the return transport of:",
        "opts": {
            "A": "Pyruvate (or alanine) back to mesophyll cells",
            "B": "RuBP",
            "C": "Glucose",
            "D": "Starch granules"
        },
        "ans": "A",
        "exp": "Decarboxylation leaves a 3-carbon skeleton (pyruvate or alanine) that must return to mesophyll to sustain the catalytic cycle.",
        "topic": "c3_c4",
        "sub": "Metabolite Shuttles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 335,
        "q": "What would happen to a C4 plant if the plasmodesmata connecting mesophyll and bundle sheath cells were severed?",
        "opts": {
            "A": "C4 photosynthesis would stop immediately because metabolite shuttling between compartments is halted",
            "B": "Photosynthesis would double",
            "C": "The plant would convert to C3 mode instantly",
            "D": "Transpiration would reach zero"
        },
        "ans": "A",
        "exp": "The C4 pathway obligatorily depends on symplastic flux of malate and pyruvate across plasmodesmata.",
        "topic": "c3_c4",
        "sub": "Plasmodesmata Role",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 336,
        "q": "Why is the photosynthetic rate of C4 plants relatively independent of atmospheric oxygen concentrations between 1% and 21% O2?",
        "opts": {
            "A": "Because bundle sheath CO2 is kept high enough to suppress the competitive oxygenase reaction of RuBisCO",
            "B": "Because C4 plants do not use O2 in respiration",
            "C": "Because their cuticle is airtight",
            "D": "Because they have no enzymes"
        },
        "ans": "A",
        "exp": "Concentrated bundle sheath CO2 effectively eliminates the oxygenase competition, making C4 photosynthesis insensitive to ambient O2.",
        "topic": "c3_c4",
        "sub": "Oxygen Insensitivity",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 337,
        "q": "In C3 plants, what happens to net photosynthetic rate if ambient oxygen concentration is reduced from 21% to 2%?",
        "opts": {
            "A": "Net photosynthetic rate increases by 25% to 40% due to suppression of photorespiration",
            "B": "Photosynthesis stops completely",
            "C": "Leaves drop immediately",
            "D": "Starch is degraded into CO2"
        },
        "ans": "A",
        "exp": "Relieving RuBisCO from O2 competition eliminates photorespiratory carbon and energy waste, boosting net carbon assimilation.",
        "topic": "c3_c4",
        "sub": "Warburg Effect",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 338,
        "q": "Which of the following is considered the primary evolutionary driver for the origin of the C4 photosynthetic pathway?",
        "opts": {
            "A": "A drastic drop in atmospheric CO2 accompanied by high temperatures and aridity during the Oligocene-Miocene epochs",
            "B": "High oxygen concentration during the Carboniferous",
            "C": "Excessive rainfall in polar regions",
            "D": "Loss of sunlight due to volcanic dust"
        },
        "ans": "A",
        "exp": "Low atmospheric CO2 combined with tropical warmth elevated photorespiration in C3 plants, creating strong selective pressure for C4 mechanisms.",
        "topic": "c3_c4",
        "sub": "C4 Evolution",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 339,
        "q": "The term 'kranz' is derived from a German word meaning:",
        "opts": {
            "A": "Wreath or crown, describing the radial wreath-like arrangement of bundle sheath cells",
            "B": "Thorn",
            "C": "Root",
            "D": "Seed"
        },
        "ans": "A",
        "exp": "Kranz means 'wreath' or 'crown' in German, referring to the concentric ring of bundle sheath cells encircling the vein.",
        "topic": "c3_c4",
        "sub": "Kranz Anatomy",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 340,
        "q": "Which of the following families contains the largest number of known C4 species?",
        "opts": {
            "A": "Poaceae (grass family)",
            "B": "Solanaceae (potato family)",
            "C": "Fabaceae (legume family)",
            "D": "Liliaceae (lily family)"
        },
        "ans": "A",
        "exp": "Over 4,500 species of C4 grasses (Poaceae) exist, including maize, sugarcane, sorghum, and tropical forage grasses.",
        "topic": "c3_c4",
        "sub": "C4 Diversity",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 341,
        "q": "The C4 pathway has evolved independently in flowering plants approximately:",
        "opts": {
            "A": "More than 60 independent evolutionary lineages (convergent evolution)",
            "B": "Only once in a single ancestor",
            "C": "Twice: once in monocots and once in dicots",
            "D": "Only in gymnosperms"
        },
        "ans": "A",
        "exp": "C4 photosynthesis is one of the most prominent examples of convergent evolution, originating in >60 distinct lineages.",
        "topic": "c3_c4",
        "sub": "C4 Evolution",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 342,
        "q": "Are there any known C4 gymnosperms or bryophytes?",
        "opts": {
            "A": "No, C4 photosynthesis is found exclusively in angiosperms (flowering plants)",
            "B": "Yes, all gymnosperms are C4",
            "C": "Yes, mosses are C4",
            "D": "Ferns are predominantly C4"
        },
        "ans": "A",
        "exp": "C4 and CAM pathways are evolutionary innovations of advanced tracheophytes, with C4 restricted exclusively to angiosperms.",
        "topic": "c3_c4",
        "sub": "C4 Distribution",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 343,
        "q": "In a typical C3 leaf, chloroplasts orient themselves along the walls of mesophyll cells. Under low light conditions, they orient:",
        "opts": {
            "A": "Perpendicular to incident light (parastrophe) to maximize light interception",
            "B": "Parallel to light to avoid damage",
            "C": "In the center of the cell away from walls",
            "D": "In the vacuole"
        },
        "ans": "A",
        "exp": "Under weak light, chloroplasts align along periclinal cell walls perpendicular to light rays to capture maximum photons.",
        "topic": "factors",
        "sub": "Chloroplast Movement",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 344,
        "q": "Under very bright, intense light, chloroplasts orient themselves along radial walls parallel to incident light (apostrophe) in order to:",
        "opts": {
            "A": "Minimize light absorption and prevent photodamage (avoidance response)",
            "B": "Absorb maximum light",
            "C": "Freeze cell division",
            "D": "Trap oxygen"
        },
        "ans": "A",
        "exp": "Chloroplast avoidance movement aligns plastids parallel to the beam along anticlinal walls, reducing light interception by up to 50%.",
        "topic": "factors",
        "sub": "Chloroplast Movement",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 345,
        "q": "The movement of chloroplasts inside plant cells is mediated by:",
        "opts": {
            "A": "Actin microfilaments and myosin motor proteins triggered by phototropin blue-light receptors",
            "B": "Tubulin microtubules and dynein",
            "C": "Simple cytoplasmic streaming only",
            "D": "Thermal brownian motion"
        },
        "ans": "A",
        "exp": "Chloroplast photorelocation is driven by actin-myosin cytoskeleton dynamics guided by phot1 and phot2 signaling.",
        "topic": "factors",
        "sub": "Chloroplast Movement",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 346,
        "q": "Which wavelength of light is primarily responsible for inducing chloroplast photorelocation movement in leaves?",
        "opts": {
            "A": "Blue light (400 to 500 nm)",
            "B": "Red light (660 nm)",
            "C": "Far-red light (730 nm)",
            "D": "Infrared light"
        },
        "ans": "A",
        "exp": "Phototropins are flavin-binding blue-light photoreceptors that control both stomatal opening and chloroplast movements.",
        "topic": "factors",
        "sub": "Phototropins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 347,
        "q": "When light is supplied in brief flashes (flashing light) instead of continuous light, the yield of photosynthesis per unit of light energy is:",
        "opts": {
            "A": "Significantly higher (up to 100% to 400% higher)",
            "B": "Much lower",
            "C": "Exactly zero",
            "D": "Unchanged"
        },
        "ans": "A",
        "exp": "Emerson and Arnold discovered that flashing light allows dark enzymatic steps to catch up with light reactions, maximizing photosynthetic efficiency.",
        "topic": "factors",
        "sub": "Flashing Light Experiments",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 348,
        "q": "The flashing light experiment of Emerson and Arnold (1932) led directly to the concept of:",
        "opts": {
            "A": "The photosynthetic unit (a cooperative cluster of ~2,500 chlorophyll molecules per O2 molecule evolved)",
            "B": "The single-gene hypothesis",
            "C": "The double helix",
            "D": "The mobile gene"
        },
        "ans": "A",
        "exp": "Emerson and Arnold deduced that about 2,500 chlorophyll molecules cooperate to evolve one molecule of O2 (one photosynthetic unit).",
        "topic": "pigments_light",
        "sub": "Photosynthetic Unit",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 349,
        "q": "Photosynthetic control refers to:",
        "opts": {
            "A": "The feedback inhibition of electron transport through Cytochrome b6f by a large proton gradient (low lumen pH)",
            "B": "Control of photosynthesis by root hormones",
            "C": "Control of light intensity by clouds",
            "D": "Circadian clock gene expression"
        },
        "ans": "A",
        "exp": "A high proton gradient (low lumenal pH) slows down plastoquinol oxidation at cyt b6f, matching electron transport to ATP consumption.",
        "topic": "pigments_light",
        "sub": "Photosynthetic Control",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 350,
        "q": "Why does spraying leaves with a low concentration of phenylmercuric acetate (PMA) reduce water loss without completely stopping photosynthesis?",
        "opts": {
            "A": "PMA acts as an anti-transpirant, causing partial stomatal closure that restricts water vapor loss while allowing sufficient CO2 diffusion",
            "B": "PMA kills the roots",
            "C": "PMA converts C3 plants into C4 plants",
            "D": "PMA absorbs sunlight"
        },
        "ans": "A",
        "exp": "Anti-transpirants like PMA induce partial stomatal closure, dramatically lowering transpiration with modest impact on carbon gain.",
        "topic": "factors",
        "sub": "Anti-transpirants",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 351,
        "q": "Which of the following is a volatile hormone released by plants that can accelerate senescence and decrease photosynthesis?",
        "opts": {
            "A": "Ethylene",
            "B": "Auxin",
            "C": "Gibberellin",
            "D": "Cytokinin"
        },
        "ans": "A",
        "exp": "Ethylene promotes leaf senescence and chlorophyll degradation, leading to reduced photosynthetic activity.",
        "topic": "factors",
        "sub": "Plant Hormones",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 352,
        "q": "Cytokinins generally affect photosynthesis positively by:",
        "opts": {
            "A": "Delaying senescence, retaining chlorophyll, and promoting chloroplast development (Richmond-Lang effect)",
            "B": "Inhibiting stomatal opening",
            "C": "Blocking electron flow at PS II",
            "D": "Deactivating RuBisCO"
        },
        "ans": "A",
        "exp": "Cytokinins retard senescence, sustain greening, enhance chlorophyll retention, and stimulate photosynthetic gene expression.",
        "topic": "factors",
        "sub": "Plant Hormones",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 353,
        "q": "Abscisic acid (ABA) rapidly inhibits photosynthesis during drought stress primarily by:",
        "opts": {
            "A": "Triggering stomatal closure in guard cells to conserve water",
            "B": "Cleaving chlorophyll molecules",
            "C": "Denaturing RuBisCO directly",
            "D": "Inactivating ATP synthase"
        },
        "ans": "A",
        "exp": "ABA signaling in guard cells promotes ion efflux and turgor loss, causing rapid stomatal closure that starves the mesophyll of CO2.",
        "topic": "factors",
        "sub": "Plant Hormones",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 354,
        "q": "Which of the following elements is a structural component of the porphyrin ring of chlorophyll and ribosome stability?",
        "opts": {
            "A": "Magnesium (Mg)",
            "B": "Manganese (Mn)",
            "C": "Iron (Fe)",
            "D": "Calcium (Ca)"
        },
        "ans": "A",
        "exp": "Magnesium sits at the central coordinating position of the tetrapyrrole porphyrin ring of all chlorophylls.",
        "topic": "pigments_light",
        "sub": "Mineral Roles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 355,
        "q": "Which element, although not part of the chlorophyll molecule, is indispensable for the biosynthesis of chlorophyll?",
        "opts": {
            "A": "Iron (Fe)",
            "B": "Copper (Cu)",
            "C": "Molybdenum (Mo)",
            "D": "Boron (B)"
        },
        "ans": "A",
        "exp": "Iron acts as a cofactor for enzymes catalyzing chlorophyll precursor synthesis; iron deficiency causes severe chlorosis.",
        "topic": "pigments_light",
        "sub": "Mineral Roles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 356,
        "q": "Chlorosis in older leaves is a characteristic symptom of deficiency of which mobile element?",
        "opts": {
            "A": "Nitrogen (N) or Magnesium (Mg)",
            "B": "Calcium (Ca)",
            "C": "Iron (Fe)",
            "D": "Boron (B)"
        },
        "ans": "A",
        "exp": "Mobile elements like N and Mg are mobilized from older leaves to young leaves, causing chlorosis in older tissues first.",
        "topic": "pigments_light",
        "sub": "Mineral Roles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 357,
        "q": "Interveinal chlorosis in young leaves is a classic symptom of deficiency of which immobile element?",
        "opts": {
            "A": "Iron (Fe)",
            "B": "Nitrogen (N)",
            "C": "Potassium (K)",
            "D": "Phosphorus (P)"
        },
        "ans": "A",
        "exp": "Iron is immobile in plant tissues; its deficiency prevents chlorophyll synthesis in developing young leaves, causing interveinal chlorosis.",
        "topic": "pigments_light",
        "sub": "Mineral Roles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 358,
        "q": "Copper (Cu) is an essential micronutrient in photosynthesis because it is a constituent of:",
        "opts": {
            "A": "Plastocyanin (PC)",
            "B": "Plastoquinone",
            "C": "Ferredoxin",
            "D": "Cytochrome b6"
        },
        "ans": "A",
        "exp": "Plastocyanin is a blue copper protein containing one atom of Cu2+ per molecule.",
        "topic": "pigments_light",
        "sub": "Mineral Roles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 359,
        "q": "The major sink for triose phosphates exported from source leaves during active photosynthesis is:",
        "opts": {
            "A": "Growing roots, shoot tips, developing fruits, and storage organs (tubers, seeds)",
            "B": "Dead xylem vessels",
            "C": "Waxy cuticle",
            "D": "The atmosphere"
        },
        "ans": "A",
        "exp": "Exported sucrose flows via phloem from source leaves to active sink tissues for growth and storage.",
        "topic": "c3_c4",
        "sub": "Source-Sink Dynamics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 360,
        "q": "The pressure-flow (mass flow) hypothesis of phloem transport was proposed by:",
        "opts": {
            "A": "Ernst M\u00fcnch",
            "B": "Peter Mitchell",
            "C": "Melvin Calvin",
            "D": "Robert Emerson"
        },
        "ans": "A",
        "exp": "Ernst M\u00fcnch (1930) proposed that sucrose loading into sieve tubes creates osmotic pressure driving mass flow to sink tissues.",
        "topic": "c3_c4",
        "sub": "Phloem Transport",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 361,
        "q": "In the presence of high light and low CO2, when carbon fixation is stalled, plants dissipate excess energy and avoid photodamage via:",
        "opts": {
            "A": "Photorespiration and non-photochemical quenching (NPQ)",
            "B": "Fermentation",
            "C": "Cell wall lignification",
            "D": "Rapid leaf drop within seconds"
        },
        "ans": "A",
        "exp": "Photorespiration acts as an energy sink, consuming excess ATP and NADPH to prevent over-reduction of photosystems.",
        "topic": "c3_c4",
        "sub": "Photoprotection",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 362,
        "q": "Which wavelength is used by plants as an environmental signal to detect shade from neighboring plants (shade avoidance response)?",
        "opts": {
            "A": "A reduced Red to Far-Red light ratio (low R:FR ratio)",
            "B": "High ultraviolet light",
            "C": "Pure blue light",
            "D": "Infrared heat rays"
        },
        "ans": "A",
        "exp": "Canopy leaves absorb red light (for chlorophyll) and transmit far-red light; a low R:FR ratio alerts phytochrome to initiate elongation.",
        "topic": "factors",
        "sub": "Shade Avoidance",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 363,
        "q": "The enzyme carbonic anhydrase facilitates photosynthesis by:",
        "opts": {
            "A": "Interconverting dissolved CO2 and bicarbonate (HCO3-) rapidly",
            "B": "Splitting water",
            "C": "Phosphorylating RuBP",
            "D": "Synthesizing glucose directly"
        },
        "ans": "A",
        "exp": "Carbonic anhydrase accelerates CO2 <-> HCO3- equilibration, supplying HCO3- for PEPcase and CO2 for RuBisCO.",
        "topic": "c3_c4",
        "sub": "Carbonic Anhydrase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 364,
        "q": "In submerged freshwater plants, what form of dissolved inorganic carbon is predominantly absorbed when free CO2 is depleted?",
        "opts": {
            "A": "Bicarbonate ion (HCO3-)",
            "B": "Gaseous oxygen",
            "C": "Methane",
            "D": "Solid calcium carbonate"
        },
        "ans": "A",
        "exp": "Aquatic plants use active proton pumping to convert bicarbonate to CO2 at the cell surface or take up HCO3- directly.",
        "topic": "factors",
        "sub": "Aquatic Photosynthesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 365,
        "q": "Which of the following photosynthetic pigments is soluble in water?",
        "opts": {
            "A": "Phycobilins (phycocyanin and phycoerythrin)",
            "B": "Chlorophyll a",
            "C": "Chlorophyll b",
            "D": "Beta-carotene"
        },
        "ans": "A",
        "exp": "Unlike lipid-soluble chlorophylls and carotenoids, phycobiliproteins are open-chain tetrapyrroles covalently bound to water-soluble proteins.",
        "topic": "pigments_light",
        "sub": "Pigment Solubility",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 366,
        "q": "Which solvent is commonly used to extract lipid-soluble chlorophylls from green leaves?",
        "opts": {
            "A": "80% acetone or 95% ethanol",
            "B": "Pure water",
            "C": "Dilute hydrochloric acid",
            "D": "Liquid nitrogen"
        },
        "ans": "A",
        "exp": "Non-polar organic solvents like 80% acetone readily dissolve the phytol tail, extracting chlorophylls from thylakoid membranes.",
        "topic": "pigments_light",
        "sub": "Pigment Extraction",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 367,
        "q": "When an alcoholic extract of chlorophyll is illuminated with ultraviolet or blue light, it emits red light. This phenomenon is called:",
        "opts": {
            "A": "Fluorescence",
            "B": "Phosphorescence",
            "C": "Chemiluminescence",
            "D": "Bioluminescence"
        },
        "ans": "A",
        "exp": "Isolated chlorophyll in solution cannot transfer excited electrons to acceptors, dissipating absorbed energy as red fluorescence.",
        "topic": "pigments_light",
        "sub": "Fluorescence",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 368,
        "q": "Why does intact leaf tissue show very little chlorophyll fluorescence compared to isolated chlorophyll in solvent?",
        "opts": {
            "A": "In intact thylakoids, excitation energy is rapidly trapped by reaction centers and utilized for photochemical electron transport (photochemical quenching)",
            "B": "Intact leaves do not absorb light",
            "C": "Water absorbs all fluorescence",
            "D": "Cuticle reflects all emitted light"
        },
        "ans": "A",
        "exp": "In vivo, photochemical conversion and NPQ quench excitation, minimizing fluorescence emission.",
        "topic": "pigments_light",
        "sub": "Fluorescence",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 369,
        "q": "Chlorophyll a fluorescence analysis (Fv/Fm ratio) is widely used by plant physiologists to measure:",
        "opts": {
            "A": "The maximum photochemical efficiency of Photosystem II and stress in plants",
            "B": "The rate of root respiration",
            "C": "The DNA content of nuclei",
            "D": "The thickness of cell walls"
        },
        "ans": "A",
        "exp": "The Fv/Fm ratio reflects PS II maximum quantum efficiency; healthy leaves exhibit ~0.83, which declines under environmental stress.",
        "topic": "pigments_light",
        "sub": "Chlorophyll Fluorescence",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 370,
        "q": "The Fv/Fm ratio of a healthy, non-stressed leaf is typically around:",
        "opts": {
            "A": "0.83",
            "B": "0.20",
            "C": "1.50",
            "D": "0.01"
        },
        "ans": "A",
        "exp": "In dark-adapted healthy leaves across diverse species, Fv/Fm is remarkably constant at 0.83 \u00b1 0.01.",
        "topic": "pigments_light",
        "sub": "Chlorophyll Fluorescence",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 371,
        "q": "The term 'solar energy conversion efficiency' of green plants in natural ecosystems is typically:",
        "opts": {
            "A": "1% to 2% (rarely exceeding 3-4% in high-yield crops)",
            "B": "50% to 60%",
            "C": "100%",
            "D": "25% to 30%"
        },
        "ans": "A",
        "exp": "Due to spectral reflection, transmission, thermodynamic limits, and respiration, plants convert only 1-2% of total incident sunlight into biomass.",
        "topic": "factors",
        "sub": "Solar Conversion Efficiency",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 372,
        "q": "Which agricultural crop is renowned for exhibiting among the highest seasonal solar energy conversion efficiencies (~3-4%)?",
        "opts": {
            "A": "Sugarcane (a C4 perennial)",
            "B": "Wheat",
            "C": "Rice",
            "D": "Cotton"
        },
        "ans": "A",
        "exp": "Sugarcane combines the C4 pathway, continuous leaf canopy, and tropical sunlight to achieve record solar-to-biomass conversion.",
        "topic": "c3_c4",
        "sub": "C4 Agronomy",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 373,
        "q": "Which of the following photosynthetic intermediates is an allosteric activator of bacterial PEP carboxylase and plant ADP-glucose pyrophosphorylase?",
        "opts": {
            "A": "3-phosphoglycerate (3-PGA)",
            "B": "Glucose",
            "C": "Malate",
            "D": "Oxygen"
        },
        "ans": "A",
        "exp": "Accumulation of 3-PGA signals abundant carbon fixation, allosterically stimulating ADP-glucose pyrophosphorylase to direct carbon into starch.",
        "topic": "c3_c4",
        "sub": "Metabolic Regulation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 374,
        "q": "In C3 plants grown in 21% O2 versus 2% O2, the quantum yield of CO2 uptake is:",
        "opts": {
            "A": "Higher at 2% O2 because photorespiration is suppressed",
            "B": "Higher at 21% O2",
            "C": "Identical in both",
            "D": "Zero at 2% O2"
        },
        "ans": "A",
        "exp": "Suppression of photorespiration in low O2 increases the efficiency of CO2 fixed per photon absorbed.",
        "topic": "factors",
        "sub": "Quantum Yield & O2",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 375,
        "q": "Overall, photosynthesis is thermodynamically classified as an:",
        "opts": {
            "A": "Endergonic, anabolic, and oxidation-reduction process",
            "B": "Exergonic, catabolic, and hydrolytic process",
            "C": "Exothermic breakdown of carbohydrates",
            "D": "Equilibrium process requiring no energy"
        },
        "ans": "A",
        "exp": "Photosynthesis utilizes photon energy (endergonic) to build complex sugars (anabolic) by oxidizing water and reducing carbon dioxide (redox).",
        "topic": "factors",
        "sub": "Thermodynamic Nature",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    }
]
