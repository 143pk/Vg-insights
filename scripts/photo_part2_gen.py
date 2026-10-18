# Photosynthesis Part 2: Q126 to Q250 (Medium)
import json

def get_part2_raw():
    return [
    {
        "q_num": 126,
        "q": "The 'red drop' phenomenon observed by Robert Emerson refers to:",
        "opts": {
            "A": "A sharp decline in quantum yield of photosynthesis at wavelengths longer than 680 nm",
            "B": "The degradation of chlorophyll in red light",
            "C": "The accumulation of anthocyanin pigments in autumn leaves",
            "D": "The inhibition of PS I by far-red light"
        },
        "ans": "A",
        "exp": "Emerson observed that quantum yield drops sharply in the far-red region (>680 nm), known as the red drop.",
        "topic": "pigments_light",
        "sub": "Emerson Effects",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 127,
        "q": "The Emerson enhancement effect demonstrated that:",
        "opts": {
            "A": "Simultaneous illumination with red (650 nm) and far-red (710 nm) light gives a photosynthetic rate greater than the sum of the two separate rates",
            "B": "Red light destroys far-red light receptors",
            "C": "Only one photosystem operates in photosynthesis",
            "D": "Photosynthesis does not require visible light"
        },
        "ans": "A",
        "exp": "The synergistic increase in rate upon combining red and far-red light proved the operation of two interconnected photosystems (PS I and PS II).",
        "topic": "pigments_light",
        "sub": "Emerson Effects",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 128,
        "q": "The minimum number of light photons (quanta) required to evolve one molecule of O2 during photosynthesis is known as quantum requirement, which is equal to:",
        "opts": {
            "A": "8 quanta",
            "B": "2 quanta",
            "C": "4 quanta",
            "D": "12 quanta"
        },
        "ans": "A",
        "exp": "Since 4 electrons must be extracted from 2 H2O molecules and each electron requires 2 photons (one in PS II, one in PS I), 4 x 2 = 8 quanta are needed.",
        "topic": "pigments_light",
        "sub": "Quantum Requirement",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 129,
        "q": "Quantum yield of photosynthesis is defined as:",
        "opts": {
            "A": "The fraction of an O2 molecule evolved per photon absorbed (1/8 = 12.5% or 0.125)",
            "B": "The number of glucose molecules formed per gram of chlorophyll",
            "C": "The total photons absorbed per day",
            "D": "The amount of ATP synthesized per lumen proton"
        },
        "ans": "A",
        "exp": "Quantum yield = 1 / Quantum requirement = 1/8 = 0.125 (12.5%).",
        "topic": "pigments_light",
        "sub": "Quantum Yield",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 130,
        "q": "In Kok's S-state mechanism (S0, S1, S2, S3, S4) of the oxygen-evolving complex, how many light-driven oxidation steps are required to release one O2 molecule?",
        "opts": {
            "A": "4 photochemical flashes",
            "B": "1 flash",
            "C": "2 flashes",
            "D": "8 flashes"
        },
        "ans": "A",
        "exp": "The water-splitting manganese cluster cycles through 5 oxidation states (S0 to S4), requiring 4 successive photon flashes to reach S4 and spontaneously release O2.",
        "topic": "pigments_light",
        "sub": "Oxygen Evolving Complex",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 131,
        "q": "The inorganic catalytic core of the oxygen-evolving complex in PS II contains a cluster of:",
        "opts": {
            "A": "4 Manganese ions, 1 Calcium ion, and Chloride ions (Mn4CaO5 cluster)",
            "B": "2 Iron ions and 2 Sulfur atoms",
            "C": "1 Magnesium ion and 4 Zinc ions",
            "D": "4 Copper ions and 1 Iron ion"
        },
        "ans": "A",
        "exp": "The catalytic water-oxidation centre is a cuboidal Mn4CaO5 cluster coordinated by chloride ions.",
        "topic": "pigments_light",
        "sub": "Oxygen Evolving Complex",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 132,
        "q": "In Photosystem II, the intermediate electron carrier that transfers electrons directly from the Mn-cluster to P680+ is:",
        "opts": {
            "A": "Tyrosine Z (Yz, a specific tyrosine residue on the D1 protein)",
            "B": "Pheophytin",
            "C": "Plastoquinone A",
            "D": "Ferredoxin"
        },
        "ans": "A",
        "exp": "Tyrosine Z (Tyr-161 of D1 protein) functions as a redox-active intermediate reducing P680+ after each photon hit.",
        "topic": "pigments_light",
        "sub": "Z-Scheme Intermediates",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 133,
        "q": "DCMU (Diuron), a well-known herbicide, inhibits photosynthesis by:",
        "opts": {
            "A": "Blocking electron transfer from QA to QB in Photosystem II",
            "B": "Inactivating RuBisCO in the stroma",
            "C": "Inhibiting ATP synthase directly",
            "D": "Destroying ferredoxin in PS I"
        },
        "ans": "A",
        "exp": "DCMU binds to the QB plastoquinone-binding niche on the D1 protein of PS II, halting non-cyclic electron transport.",
        "topic": "pigments_light",
        "sub": "Photosynthetic Inhibitors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 134,
        "q": "Paraquat (methyl viologen) acts as a herbicide by:",
        "opts": {
            "A": "Intercepting electrons from Photosystem I (ferredoxin) and producing toxic reactive oxygen species (superoxides)",
            "B": "Inhibiting the water-splitting complex of PS II",
            "C": "Blocking the CF0 proton channel",
            "D": "Denaturing PEP carboxylase"
        },
        "ans": "A",
        "exp": "Paraquat competes with ferredoxin for electrons at PS I, generating lethal superoxide radicals that cause lipid peroxidation.",
        "topic": "pigments_light",
        "sub": "Photosynthetic Inhibitors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 135,
        "q": "The Hill reaction demonstrated that isolated chloroplasts can evolve oxygen in the presence of light and an artificial electron acceptor without:",
        "opts": {
            "A": "Carbon dioxide fixation",
            "B": "Water",
            "C": "Light",
            "D": "Chlorophyll"
        },
        "ans": "A",
        "exp": "Robert Hill showed that isolated chloroplasts evolve O2 when supplied with artificial oxidants (e.g., ferricyanide, DCPIP) in the absence of CO2.",
        "topic": "pigments_light",
        "sub": "Hill Reaction",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 136,
        "q": "Which dye changes color from blue to colorless upon reduction and is frequently used to demonstrate the Hill reaction?",
        "opts": {
            "A": "2,6-dichlorophenolindophenol (DCPIP)",
            "B": "Methylene blue",
            "C": "Phenol red",
            "D": "Safranin"
        },
        "ans": "A",
        "exp": "DCPIP is blue in oxidized form and turns colorless when reduced by photosynthetic electron transport.",
        "topic": "pigments_light",
        "sub": "Hill Reaction",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 137,
        "q": "Plastoquinone (PQ) differs from plastocyanin (PC) in that plastoquinone is:",
        "opts": {
            "A": "A lipid-soluble quinone mobile in the thylakoid lipid bilayer that carries both electrons and protons",
            "B": "A water-soluble copper protein in the stroma",
            "C": "An iron-sulfur protein firmly bound to PS I",
            "D": "A disc-shaped peripheral protein"
        },
        "ans": "A",
        "exp": "PQ is a lipophilic quinone moving within the membrane bilayer, mediating proton translocation across the thylakoid.",
        "topic": "pigments_light",
        "sub": "Electron Carriers",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 138,
        "q": "Plastocyanin is located on which side of the thylakoid membrane?",
        "opts": {
            "A": "Lumenal surface (facing the thylakoid lumen)",
            "B": "Stromal surface",
            "C": "Embedded deep within the core of PS II",
            "D": "Outer chloroplast envelope"
        },
        "ans": "A",
        "exp": "Plastocyanin is a water-soluble copper protein located inside the thylakoid lumen.",
        "topic": "pigments_light",
        "sub": "Electron Carriers",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 139,
        "q": "The Q-cycle operating in the Cytochrome b6f complex doubles the proton pumping efficiency by translocating:",
        "opts": {
            "A": "4 protons into the thylakoid lumen per pair of electrons transferred",
            "B": "1 proton per pair of electrons",
            "C": "2 protons per 4 electrons",
            "D": "8 protons per photon"
        },
        "ans": "A",
        "exp": "The Q-cycle mechanism translocates 4 H+ across the membrane into the lumen for every 2 electrons traversing cyt b6f.",
        "topic": "pigments_light",
        "sub": "Q-Cycle",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 140,
        "q": "During cyclic photophosphorylation, electrons flow from reduced ferredoxin back into:",
        "opts": {
            "A": "The Cytochrome b6f complex via plastoquinone",
            "B": "Photosystem II",
            "C": "The water splitting complex",
            "D": "NADP+ reductase directly"
        },
        "ans": "A",
        "exp": "Electrons from ferredoxin return to the Cytochrome b6f complex, mediated by PQ (or FQR/PGR5), pumping protons without reducing NADP+.",
        "topic": "pigments_light",
        "sub": "Cyclic Photophosphorylation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 141,
        "q": "The proton motive force (PMF) across the thylakoid membrane is predominantly composed of:",
        "opts": {
            "A": "A chemical pH gradient (delta-pH) with minimal electrical potential (delta-psi)",
            "B": "Only an electrical potential gradient (delta-psi)",
            "C": "Equal contributions of membrane potential and pH gradient",
            "D": "A sodium ion concentration gradient"
        },
        "ans": "A",
        "exp": "Due to counter-ion movements (Mg2+ out, Cl- in), thylakoid PMF consists almost entirely of delta-pH (~3 pH units) with small delta-psi.",
        "topic": "pigments_light",
        "sub": "Chemiosmotic PMF",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 142,
        "q": "Uncouplers like 2,4-dinitrophenol (DNP) or carbonyl cyanide m-chlorophenyl hydrazone (CCCP) affect photosynthesis by:",
        "opts": {
            "A": "Dissipating the thylakoid proton gradient, abolishing ATP synthesis while accelerating electron transport",
            "B": "Inhibiting light absorption by chlorophylls",
            "C": "Blocking electron flow at PS II",
            "D": "Inactivating the Calvin cycle enzymes directly"
        },
        "ans": "A",
        "exp": "Uncouplers are lipid-soluble protonophores that dissipate the proton gradient, decoupling electron transport from ATP phosphorylation.",
        "topic": "pigments_light",
        "sub": "Uncouplers",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 143,
        "q": "According to Boyer's binding change mechanism of ATP synthase, the three catalytic beta-subunits of CF1 alternate among three conformational states called:",
        "opts": {
            "A": "Open (O), Loose (L), and Tight (T)",
            "B": "Active, Inactive, and Resting",
            "C": "Alpha, Beta, and Gamma",
            "D": "Reduced, Oxidized, and Neutral"
        },
        "ans": "A",
        "exp": "The beta subunits cycle through Loose (binds substrates), Tight (synthesizes ATP), and Open (releases ATP) conformations.",
        "topic": "pigments_light",
        "sub": "ATP Synthase Mechanism",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 144,
        "q": "The rotation of which subunit of the CF0-CF1 complex drives the conformational changes in the catalytic CF1 beta subunits?",
        "opts": {
            "A": "The asymmetric gamma subunit",
            "B": "The alpha subunit",
            "C": "The delta subunit",
            "D": "The b subunit"
        },
        "ans": "A",
        "exp": "Proton flow through CF0 drives rotation of the c-ring and the central gamma stalk, inducing conformational shifts in the beta subunits.",
        "topic": "pigments_light",
        "sub": "ATP Synthase Mechanism",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 145,
        "q": "Approximately how many protons must pass through the CF0 channel to synthesize and release one molecule of ATP in chloroplasts?",
        "opts": {
            "A": "Around 4 to 4.67 protons (based on 14 c-subunits per 3 ATP)",
            "B": "Exactly 1 proton",
            "C": "12 protons",
            "D": "20 protons"
        },
        "ans": "A",
        "exp": "The chloroplast c-ring has 14 c-subunits; one 360-degree rotation translocates 14 H+ and produces 3 ATP (~4.67 H+/ATP).",
        "topic": "pigments_light",
        "sub": "ATP Synthase Mechanism",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 146,
        "q": "Which of the following describes the appressed (stacked) thylakoid membranes in grana?",
        "opts": {
            "A": "They are highly enriched in PS II and its major LHC II complexes",
            "B": "They contain exclusively PS I and ATP synthase",
            "C": "They lack chlorophyll pigments",
            "D": "They face directly into the stroma without contact"
        },
        "ans": "A",
        "exp": "Appressed granal membranes contain predominantly PS II and LHC II, while non-appressed margins/stroma lamellae host PS I and CF0-CF1.",
        "topic": "pigments_light",
        "sub": "Thylakoid Architecture",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 147,
        "q": "Why are Photosystem I and ATP synthase located primarily in the non-appressed regions (stroma thylakoids and grana margins)?",
        "opts": {
            "A": "Their bulky stroma-facing hydrophilic heads (CF1, PS I stroma subunits) cannot fit into the tight appressed granal spaces",
            "B": "They require direct exposure to stomata",
            "C": "They cannot tolerate oxygen",
            "D": "They require high lipid concentration"
        },
        "ans": "A",
        "exp": "Steric hindrance prevents the protruding stroma domains of ATP synthase (CF1) and PS I from residing in the narrow appressed partitions.",
        "topic": "pigments_light",
        "sub": "Thylakoid Architecture",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 148,
        "q": "State transitions in chloroplasts (movement of LHC II between PS II and PS I) serve to:",
        "opts": {
            "A": "Balance the excitation energy distribution between PS II and PS I under varying light qualities",
            "B": "Convert C3 plants into C4 plants",
            "C": "Protect roots from fungal pathogens",
            "D": "Inhibit the Calvin cycle at night"
        },
        "ans": "A",
        "exp": "When PS II is over-excited, a thylakoid kinase phosphorylates LHC II, causing it to detach and migrate to PS I to balance excitation.",
        "topic": "pigments_light",
        "sub": "State Transitions",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 149,
        "q": "The primary electron acceptor in Photosystem I is:",
        "opts": {
            "A": "A special chlorophyll a molecule designated A0",
            "B": "Plastoquinone",
            "C": "Cytochrome f",
            "D": "Manganese ion"
        },
        "ans": "A",
        "exp": "In PS I, the initial electron acceptor from P700* is A0 (a monomeric chlorophyll a), which passes electrons to A1 (phylloquinone).",
        "topic": "pigments_light",
        "sub": "PS I Photochemistry",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 150,
        "q": "The second electron acceptor in Photosystem I (A1) is:",
        "opts": {
            "A": "Phylloquinone (Vitamin K1)",
            "B": "Plastocyanin",
            "C": "Pheophytin",
            "D": "Cytochrome b6"
        },
        "ans": "A",
        "exp": "A1 in PS I is phylloquinone, which transfers electrons to iron-sulfur centres FX, FA, and FB.",
        "topic": "pigments_light",
        "sub": "PS I Photochemistry",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 151,
        "q": "How many molecules of reduced ferredoxin are required by ferredoxin-NADP+ reductase (FNR) to generate one molecule of NADPH?",
        "opts": {
            "A": "2 molecules of reduced ferredoxin (each carrying 1 electron)",
            "B": "1 molecule",
            "C": "4 molecules",
            "D": "8 molecules"
        },
        "ans": "A",
        "exp": "Ferredoxin carries 1 electron; hence 2 reduced ferredoxins deliver 2 electrons to FNR's FAD prosthetic group to produce 1 NADPH.",
        "topic": "pigments_light",
        "sub": "FNR Mechanism",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 152,
        "q": "In non-cyclic photophosphorylation, for every pair of electrons transferred from H2O to NADP+, how many protons are accumulated in the thylakoid lumen?",
        "opts": {
            "A": "6 protons (2 from water splitting + 4 via Q-cycle of cyt b6f)",
            "B": "2 protons",
            "C": "12 protons",
            "D": "1 proton"
        },
        "ans": "A",
        "exp": "Transfer of 2 electrons from 1 H2O to NADP+ yields 2 H+ from photolysis and 4 H+ via the Q-cycle, totaling 6 H+ in the lumen.",
        "topic": "pigments_light",
        "sub": "Proton Budget",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 153,
        "q": "What maintains the neutrality of the stroma despite massive proton efflux during light reactions?",
        "opts": {
            "A": "Influx of Mg2+ and efflux of Cl- accompanying H+ movement",
            "B": "Influx of Na+ ions only",
            "C": "Complete loss of water",
            "D": "Precipitation of rubisco"
        },
        "ans": "A",
        "exp": "As protons are pumped into the lumen, Mg2+ moves into the stroma and Cl- moves into the lumen to balance electric charge.",
        "topic": "pigments_light",
        "sub": "Ionic Balance",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 154,
        "q": "Which ion moving into the chloroplast stroma during illumination directly activates RuBisCO and other Calvin cycle enzymes?",
        "opts": {
            "A": "Magnesium (Mg2+)",
            "B": "Calcium (Ca2+)",
            "C": "Potassium (K+)",
            "D": "Iron (Fe3+)"
        },
        "ans": "A",
        "exp": "Light induces Mg2+ efflux from lumen into stroma, increasing stromal [Mg2+], which is an essential activator of RuBisCO.",
        "topic": "pigments_light",
        "sub": "Light Activation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 155,
        "q": "Which stromal pH transition occurs upon illumination of chloroplasts?",
        "opts": {
            "A": "Stromal pH rises from ~7.0 (dark) to ~8.0 (light)",
            "B": "Stromal pH drops from 8.0 to 4.0",
            "C": "Stromal pH remains constant at 7.0",
            "D": "Stromal pH becomes strongly acidic (pH 2)"
        },
        "ans": "A",
        "exp": "Proton pumping into the lumen alkalinizes the stroma to pH ~8.0, the optimal pH for Calvin cycle enzymes.",
        "topic": "pigments_light",
        "sub": "Stromal pH",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 156,
        "q": "The active form of RuBisCO requires carbamylation of a specific lysine residue by:",
        "opts": {
            "A": "A molecule of non-substrate CO2 in the presence of Mg2+",
            "B": "An ATP molecule and NADPH",
            "C": "A molecule of oxygen",
            "D": "Glucose-6-phosphate"
        },
        "ans": "A",
        "exp": "RuBisCO activation requires carbamylation of Lys-201 by an activator CO2 molecule, which is then stabilized by Mg2+ binding.",
        "topic": "c3_c4",
        "sub": "RuBisCO Mechanism",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 157,
        "q": "The enzyme RuBisCO activase functions to:",
        "opts": {
            "A": "Remove inhibitory sugar phosphates from the active site of uncarbamylated RuBisCO",
            "B": "Phosphorylate RuBisCO using ATP",
            "C": "Cleave RuBisCO into small subunits",
            "D": "Synthesize RuBP from pyruvate"
        },
        "ans": "A",
        "exp": "RuBisCO activase is an AAA+ ATPase that restores active RuBisCO by dislodging tight-binding sugar phosphates like CA1P.",
        "topic": "c3_c4",
        "sub": "RuBisCO Activase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 158,
        "q": "During the carboxylation phase of the Calvin cycle, the unstable 6-carbon intermediate formed immediately after CO2 addition to RuBP is:",
        "opts": {
            "A": "2-carboxy-3-keto-D-arabinitol-1,5-bisphosphate",
            "B": "Oxaloacetic acid",
            "C": "Citric acid",
            "D": "Phosphoenolpyruvate"
        },
        "ans": "A",
        "exp": "CO2 attacks RuBP's enediolate form yielding 2-carboxy-3-keto-D-arabinitol-1,5-bisphosphate, which is cleaved by water into two 3-PGA.",
        "topic": "c3_c4",
        "sub": "Carboxylation Chemistry",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 159,
        "q": "The conversion of 3-phosphoglycerate (3-PGA) to 1,3-bisphosphoglycerate in the reduction stage is catalyzed by:",
        "opts": {
            "A": "Phosphoglycerate kinase (consuming ATP)",
            "B": "Triose phosphate isomerase",
            "C": "Glyceraldehyde-3-phosphate dehydrogenase",
            "D": "Phosphofructokinase"
        },
        "ans": "A",
        "exp": "Phosphoglycerate kinase transfers a phosphate from ATP to 3-PGA, forming 1,3-bisphosphoglycerate.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Enzymes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 160,
        "q": "The reduction of 1,3-bisphosphoglycerate to glyceraldehyde-3-phosphate (G3P) is catalyzed by:",
        "opts": {
            "A": "Glyceraldehyde-3-phosphate dehydrogenase (consuming NADPH)",
            "B": "Hexokinase",
            "C": "Aldolase",
            "D": "Pyruvate kinase"
        },
        "ans": "A",
        "exp": "NADP-dependent glyceraldehyde-3-phosphate dehydrogenase uses NADPH to reduce 1,3-BPG to G3P with release of inorganic phosphate.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Enzymes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 161,
        "q": "Glyceraldehyde-3-phosphate (G3P) and dihydroxyacetone phosphate (DHAP) are interconverted by:",
        "opts": {
            "A": "Triose phosphate isomerase",
            "B": "Phosphoglucomutase",
            "C": "Phosphopentose isomerase",
            "D": "Enolase"
        },
        "ans": "A",
        "exp": "Triose phosphate isomerase catalyzes the reversible isomerization between G3P and DHAP.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Enzymes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 162,
        "q": "Out of every 6 molecules of triose phosphate (G3P) formed in the Calvin cycle, how many net molecules represent the net carbon gain exported for sucrose/starch synthesis?",
        "opts": {
            "A": "1 molecule (3 carbons)",
            "B": "5 molecules",
            "C": "6 molecules",
            "D": "3 molecules"
        },
        "ans": "A",
        "exp": "For every 6 triose phosphates generated from 3 CO2, 5 are recycled to regenerate 3 RuBP (15 carbons), and 1 is net gain (3 carbons).",
        "topic": "c3_c4",
        "sub": "Carbon Budget",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 163,
        "q": "To export one molecule of hexose (fructose-6-phosphate or glucose-6-phosphate), how many turns of the Calvin cycle are needed?",
        "opts": {
            "A": "6 turns (fixing 6 CO2)",
            "B": "3 turns",
            "C": "1 turn",
            "D": "12 turns"
        },
        "ans": "A",
        "exp": "Fixing 6 CO2 generates 12 triose phosphates; 10 regenerate 6 RuBP, leaving 2 triose phosphates (6 carbons) to form 1 hexose.",
        "topic": "c3_c4",
        "sub": "Carbon Budget",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 164,
        "q": "Which two enzymes are responsible for light-mediated regulation of the Calvin cycle via the ferredoxin-thioredoxin system?",
        "opts": {
            "A": "Fructose-1,6-bisphosphatase (FBPase) and Sedoheptulose-1,7-bisphosphatase (SBPase)",
            "B": "Phosphoglycerate kinase and triose phosphate isomerase",
            "C": "RuBisCO small subunit and PEP carboxylase",
            "D": "Carbonic anhydrase and malate dehydrogenase"
        },
        "ans": "A",
        "exp": "FBPase, SBPase, PRK, and NADP-GAPDH are disulfide-reduced and activated in the light by reduced thioredoxin.",
        "topic": "c3_c4",
        "sub": "Thioredoxin System",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 165,
        "q": "The ferredoxin-thioredoxin system in chloroplasts transfers electrons in the sequence:",
        "opts": {
            "A": "PS I -> Ferredoxin -> Ferredoxin-thioredoxin reductase (FTR) -> Thioredoxin -> Target Calvin cycle enzymes",
            "B": "PS II -> Plastoquinone -> Thioredoxin -> RuBisCO",
            "C": "Water -> Cytochrome b6f -> Thioredoxin",
            "D": "ATP -> Thioredoxin -> RuBP"
        },
        "ans": "A",
        "exp": "Light-reduced ferredoxin reduces FTR, which transfers electrons to thioredoxin, which then cleaves inhibitory disulfides on target enzymes.",
        "topic": "c3_c4",
        "sub": "Thioredoxin System",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 166,
        "q": "Triose phosphates exit the chloroplast stroma into the cytosol in exchange for inorganic phosphate via the:",
        "opts": {
            "A": "Triose phosphate-phosphate translocator (TPT) in the inner envelope membrane",
            "B": "CF0 pore of ATP synthase",
            "C": "Outer membrane porins non-selectively",
            "D": "Simple lipid diffusion"
        },
        "ans": "A",
        "exp": "The TPT antiporter exports DHAP/G3P to the cytosol in strict 1:1 equimolar exchange with incoming inorganic phosphate (Pi).",
        "topic": "c3_c4",
        "sub": "Phosphate Translocator",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 167,
        "q": "If the cytosolic inorganic phosphate (Pi) level becomes very low, what happens to photosynthetic carbon metabolism in the chloroplast?",
        "opts": {
            "A": "Triose phosphate export is blocked, leading to high stromal triose phosphates and enhanced starch synthesis in the stroma",
            "B": "Calvin cycle stops completely within 1 millisecond",
            "C": "Water photolysis reverses direction",
            "D": "Photorespiration drops to zero immediately"
        },
        "ans": "A",
        "exp": "Deprived of cytosolic Pi, the TPT cannot export trioses; stromal 3-PGA accumulates, activating ADP-glucose pyrophosphorylase and driving starch synthesis.",
        "topic": "c3_c4",
        "sub": "Starch vs Sucrose",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 168,
        "q": "Starch synthesis in chloroplasts occurs via the intermediate:",
        "opts": {
            "A": "ADP-glucose",
            "B": "UDP-glucose",
            "C": "GDP-glucose",
            "D": "CDP-glucose"
        },
        "ans": "A",
        "exp": "Plant chloroplast starch synthesis uniquely uses ADP-glucose as the glucosyl donor, unlike cytosolic sucrose synthesis which uses UDP-glucose.",
        "topic": "c3_c4",
        "sub": "Starch Synthesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 169,
        "q": "Sucrose synthesis in the plant cell takes place in the:",
        "opts": {
            "A": "Cytosol",
            "B": "Chloroplast stroma",
            "C": "Thylakoid lumen",
            "D": "Peroxisome"
        },
        "ans": "A",
        "exp": "Sucrose is synthesized in the cytosol from exported triose phosphates via UDP-glucose and fructose-6-phosphate.",
        "topic": "c3_c4",
        "sub": "Sucrose Synthesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 170,
        "q": "The enzyme that regenerates RuBP from ribulose-5-phosphate using ATP in the Calvin cycle is:",
        "opts": {
            "A": "Phosphoribulokinase (PRK)",
            "B": "Ribulose-5-phosphate isomerase",
            "C": "Ribulose-5-phosphate epimerase",
            "D": "Transketolase"
        },
        "ans": "A",
        "exp": "Phosphoribulokinase (PRK) phosphorylates ribulose-5-phosphate using 1 ATP to regenerate the 5-carbon acceptor RuBP.",
        "topic": "c3_c4",
        "sub": "PRK Enzyme",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 171,
        "q": "In the Calvin cycle, the two non-reversible phosphatase-catalyzed regulatory steps are:",
        "opts": {
            "A": "Fructose-1,6-bisphosphatase (FBPase) and Sedoheptulose-1,7-bisphosphatase (SBPase)",
            "B": "Phosphoglycerate kinase and PRK",
            "C": "Aldolase and transketolase",
            "D": "Triose phosphate isomerase and epimerase"
        },
        "ans": "A",
        "exp": "FBPase and SBPase remove phosphates irreversibly and are key light-regulated bottlenecks in RuBP regeneration.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Enzymes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 172,
        "q": "How many molecules of ATP and NADPH are needed to regenerate 6 molecules of RuBP from 10 molecules of triose phosphate?",
        "opts": {
            "A": "6 ATP and 0 NADPH",
            "B": "6 ATP and 6 NADPH",
            "C": "18 ATP and 12 NADPH",
            "D": "0 ATP and 6 NADPH"
        },
        "ans": "A",
        "exp": "The regeneration phase requires only phosphorylation of 6 ribulose-5-phosphate by PRK consuming 6 ATP; no NADPH is used in regeneration.",
        "topic": "c3_c4",
        "sub": "Regeneration Phase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 173,
        "q": "Which carbon atom of ribulose-1,5-bisphosphate binds the incoming CO2 molecule during carboxylation?",
        "opts": {
            "A": "Carbon-2 (C2)",
            "B": "Carbon-1 (C1)",
            "C": "Carbon-5 (C5)",
            "D": "Carbon-3 (C3)"
        },
        "ans": "A",
        "exp": "The enediol form of RuBP attacks CO2 at C2, forming the branched 6-carbon intermediate 2-carboxy-3-ketoarabinitol 1,5-bisphosphate.",
        "topic": "c3_c4",
        "sub": "Carboxylation Chemistry",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 174,
        "q": "RuBisCO has how many large (L) and how many small (S) subunits in higher plants?",
        "opts": {
            "A": "8 large (L) and 8 small (S) subunits (L8S8 hexadecamer)",
            "B": "4 large and 4 small subunits",
            "C": "1 large and 1 small subunit",
            "D": "2 large and 2 small subunits"
        },
        "ans": "A",
        "exp": "Higher plant RuBisCO is an L8S8 hexadecamer (~550 kDa); L subunits are chloroplast-encoded and carry catalytic sites.",
        "topic": "c3_c4",
        "sub": "RuBisCO Structure",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 175,
        "q": "The catalytic sites of RuBisCO are located exclusively on the:",
        "opts": {
            "A": "Large (L) subunits",
            "B": "Small (S) subunits",
            "C": "Between L and S subunits equally",
            "D": "External membrane anchoring domain"
        },
        "ans": "A",
        "exp": "The 8 large subunits (encoded by the chloroplast rbcL gene) contain the catalytic centers for both carboxylation and oxygenation.",
        "topic": "c3_c4",
        "sub": "RuBisCO Structure",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 176,
        "q": "Phosphoenolpyruvate carboxylase (PEPcase) binds dissolved inorganic carbon in the form of:",
        "opts": {
            "A": "Bicarbonate ion (HCO3-)",
            "B": "Gaseous carbon dioxide (CO2)",
            "C": "Carbonic acid (H2CO3)",
            "D": "Carbon monoxide (CO)"
        },
        "ans": "A",
        "exp": "PEPcase uses HCO3- (bicarbonate) as its substrate, generated rapidly from CO2 by carbonic anhydrase in the mesophyll cytosol.",
        "topic": "c3_c4",
        "sub": "PEPcase Mechanism",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 177,
        "q": "The Km of PEPcase for HCO3- is much lower than the Km of RuBisCO for CO2, which means that:",
        "opts": {
            "A": "PEPcase has a much higher substrate affinity and can fix carbon efficiently even at extremely low internal CO2 levels",
            "B": "RuBisCO is faster at low temperatures",
            "C": "PEPcase requires toxic levels of CO2",
            "D": "PEPcase is inhibited by bicarbonate"
        },
        "ans": "A",
        "exp": "A lower Km indicates very high affinity, allowing C4 plants to fix carbon even with partially closed stomata.",
        "topic": "c3_c4",
        "sub": "PEPcase Affinity",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 178,
        "q": "Why does PEPcase never exhibit oxygenase activity?",
        "opts": {
            "A": "It lacks affinity for O2 and uses HCO3- rather than molecular CO2 as substrate",
            "B": "It has copper instead of iron",
            "C": "It functions only in anaerobic conditions",
            "D": "It operates exclusively in the thylakoid lumen"
        },
        "ans": "A",
        "exp": "Because PEPcase utilizes HCO3- and cannot bind O2, it is completely immune to competitive oxygen inhibition.",
        "topic": "c3_c4",
        "sub": "PEPcase vs RuBisCO",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 179,
        "q": "In NADP-malic enzyme type C4 plants (e.g., maize, sugarcane), the primary transport metabolite moving from mesophyll to bundle sheath cells is:",
        "opts": {
            "A": "Malate",
            "B": "Aspartate",
            "C": "Pyruvate",
            "D": "Alanine"
        },
        "ans": "A",
        "exp": "In maize and sugarcane (NADP-ME type), OAA is reduced to malate in mesophyll chloroplasts and exported to bundle sheath cells.",
        "topic": "c3_c4",
        "sub": "C4 Subtypes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 180,
        "q": "In NAD-malic enzyme type C4 plants (e.g., Panicum miliaceum, Amaranthus), the primary transport metabolite moving from mesophyll to bundle sheath is:",
        "opts": {
            "A": "Aspartate",
            "B": "Malate",
            "C": "Citrate",
            "D": "Succinate"
        },
        "ans": "A",
        "exp": "In NAD-ME type C4 plants, OAA is transaminated to aspartate in the mesophyll and transported to bundle sheath mitochondria.",
        "topic": "c3_c4",
        "sub": "C4 Subtypes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 181,
        "q": "In bundle sheath cells of NADP-ME plants, decarboxylation of malate by chloroplastic NADP-malic enzyme yields:",
        "opts": {
            "A": "Pyruvate, CO2, and NADPH",
            "B": "OAA and ATP",
            "C": "Phosphoenolpyruvate and NADH",
            "D": "3-PGA and ADP"
        },
        "ans": "A",
        "exp": "Malate + NADP+ -> Pyruvate + CO2 + NADPH, supplying both concentrated CO2 and reducing power to bundle sheath chloroplasts.",
        "topic": "c3_c4",
        "sub": "C4 Decarboxylation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 182,
        "q": "The conversion of pyruvate back to phosphoenolpyruvate (PEP) in mesophyll cells is catalyzed by which unique enzyme?",
        "opts": {
            "A": "Pyruvate-phosphate dikinase (PPDK)",
            "B": "Pyruvate kinase",
            "C": "PEP carboxykinase",
            "D": "Malate dehydrogenase"
        },
        "ans": "A",
        "exp": "PPDK uses ATP and inorganic phosphate to convert pyruvate to PEP, AMP, and pyrophosphate (PPi).",
        "topic": "c3_c4",
        "sub": "PPDK Enzyme",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 183,
        "q": "Pyruvate-phosphate dikinase (PPDK) requires how many high-energy phosphate bonds per PEP regenerated?",
        "opts": {
            "A": "2 ATP equivalents (since ATP is cleaved to AMP and PPi, and PPi is subsequently hydrolyzed to 2 Pi)",
            "B": "1 ATP",
            "C": "3 ATP",
            "D": "4 ATP"
        },
        "ans": "A",
        "exp": "Hydrolysis of ATP to AMP + PPi plus pyrophosphatase cleavage of PPi equals the expenditure of 2 high-energy phosphate equivalents.",
        "topic": "c3_c4",
        "sub": "PPDK Energetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 184,
        "q": "Why do bundle sheath chloroplasts in NADP-ME C4 plants (like maize) possess little or no grana?",
        "opts": {
            "A": "Reduced granal thylakoids minimize PS II activity, thereby minimizing oxygen evolution and protecting RuBisCO from photorespiration",
            "B": "They do not need chlorophyll",
            "C": "They are damaged by light",
            "D": "They only store water"
        },
        "ans": "A",
        "exp": "Agranal chloroplasts have very low PS II activity; without water photolysis, internal O2 remains minimal while cyclic PS I provides ATP.",
        "topic": "c3_c4",
        "sub": "Agranal Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 185,
        "q": "Dimorphic chloroplasts (two structurally and functionally distinct chloroplast types in the same leaf) are characteristic of:",
        "opts": {
            "A": "C4 plants",
            "B": "C3 plants",
            "C": "Bryophytes",
            "D": "Gymnosperms exclusively"
        },
        "ans": "A",
        "exp": "C4 leaves contain granal chloroplasts in mesophyll cells and agranal (or poorly granal) chloroplasts in bundle sheath cells.",
        "topic": "c3_c4",
        "sub": "Chloroplast Dimorphism",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 186,
        "q": "In C4 plants, extensive cytoplasmic connections facilitating rapid metabolite transport between mesophyll and bundle sheath cells are provided by:",
        "opts": {
            "A": "Plasmodesmata",
            "B": "Desmosomes",
            "C": "Tight junctions",
            "D": "Gap junctions"
        },
        "ans": "A",
        "exp": "Abundant plasmodesmata traverse the boundary between mesophyll and bundle sheath cells to support heavy organic acid flux.",
        "topic": "c3_c4",
        "sub": "Kranz Anatomy",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 187,
        "q": "Which of the following represents a true advantage of the C4 pathway over the C3 pathway?",
        "opts": {
            "A": "Twice the water-use efficiency (fixes twice the amount of CO2 per unit of water lost)",
            "B": "Requires fewer ATP per glucose formed",
            "C": "Can fix nitrogen from air directly",
            "D": "Does not need sunlight"
        },
        "ans": "A",
        "exp": "C4 plants have roughly twice the water-use efficiency of C3 plants because high PEPcase affinity permits narrower stomatal apertures.",
        "topic": "c3_c4",
        "sub": "C4 Advantages",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 188,
        "q": "Crassulacean Acid Metabolism (CAM) is an adaptation found primarily in:",
        "opts": {
            "A": "Succulent plants growing in arid, desert habitats (e.g., Opuntia, Pineapple, Agave)",
            "B": "Aquatic submerged hydrophytes",
            "C": "Temperate deciduous forest trees",
            "D": "Alpine grasses"
        },
        "ans": "A",
        "exp": "CAM plants are xerophytic succulents adapted to arid conditions by taking up CO2 exclusively at night.",
        "topic": "c3_c4",
        "sub": "CAM Plants",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 189,
        "q": "In CAM plants, stomata open:",
        "opts": {
            "A": "During the night (scotoactive) and close during the day",
            "B": "During midday only",
            "C": "Continuously day and night",
            "D": "Only during rainfall"
        },
        "ans": "A",
        "exp": "CAM plants show scotoactive stomatal behavior: stomata open at night to limit transpiration water loss.",
        "topic": "c3_c4",
        "sub": "CAM Physiology",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 190,
        "q": "During the night in CAM plants, CO2 is fixed by PEPcase into malic acid, which is stored in:",
        "opts": {
            "A": "Large central vacuoles (causing nocturnal acidification)",
            "B": "Mitochondria",
            "C": "Cell walls",
            "D": "Thylakoid lumen"
        },
        "ans": "A",
        "exp": "Malate is stored as malic acid in large vacuoles overnight, causing leaf cell sap to become acidic by dawn.",
        "topic": "c3_c4",
        "sub": "CAM Nocturnal Acidification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 191,
        "q": "During the daytime in CAM plants, malic acid is transported out of vacuoles and:",
        "opts": {
            "A": "Decarboxylated to release CO2 behind closed stomata, which is then fixed by RuBisCO via the Calvin cycle",
            "B": "Excreted through roots",
            "C": "Converted directly into lignin",
            "D": "Reduced to ethanol"
        },
        "ans": "A",
        "exp": "Daytime decarboxylation elevates internal CO2 behind closed stomata, allowing Calvin cycle fixation powered by light reactions.",
        "topic": "c3_c4",
        "sub": "CAM Daytime Decarboxylation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 192,
        "q": "The key difference between C4 and CAM pathways is that:",
        "opts": {
            "A": "C4 separates primary and secondary fixation spatially (mesophyll vs bundle sheath), while CAM separates them temporally (night vs day in the same cell)",
            "B": "C4 does not use RuBisCO",
            "C": "CAM does not use PEPcase",
            "D": "C4 lacks light reactions"
        },
        "ans": "A",
        "exp": "C4 achieves spatial separation of carboxylation, whereas CAM achieves temporal separation within a single photosynthetic cell.",
        "topic": "c3_c4",
        "sub": "C4 vs CAM",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 193,
        "q": "The phenomenon of nocturnal drop in pH followed by daytime rise in pH in succulent plants is called:",
        "opts": {
            "A": "Deacidification in daytime following nocturnal acidification",
            "B": "Alkaline shift",
            "C": "Kranz acidification",
            "D": "Photo-neutralization"
        },
        "ans": "A",
        "exp": "Nocturnal accumulation of malic acid drops the pH; daytime decarboxylation and consumption in Calvin cycle deacidifies the tissue.",
        "topic": "c3_c4",
        "sub": "CAM Acidification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 194,
        "q": "Which of the following is an example of an obligate CAM plant?",
        "opts": {
            "A": "Pineapple (Ananas comosus)",
            "B": "Wheat (Triticum aestivum)",
            "C": "Maize (Zea mays)",
            "D": "Sugarcane (Saccharum officinarum)"
        },
        "ans": "A",
        "exp": "Pineapple, Agave, and Sedum are standard examples of CAM plants.",
        "topic": "c3_c4",
        "sub": "CAM Examples",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 195,
        "q": "Facultative CAM plants (e.g., Mesembryanthemum crystallinum) are able to:",
        "opts": {
            "A": "Switch from C3 mode to CAM mode under salinity or drought stress",
            "B": "Switch from autotrophy to heterotrophy",
            "C": "Operate without chloroplasts",
            "D": "Survive without water indefinitely"
        },
        "ans": "A",
        "exp": "Mesembryanthemum can switch between C3 mode when well-watered and CAM mode when exposed to drought or salt stress.",
        "topic": "c3_c4",
        "sub": "Facultative CAM",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 196,
        "q": "The ratio of carboxylation to oxygenation catalyzed by RuBisCO in a C3 leaf under normal atmospheric conditions (21% O2, 0.04% CO2) at 25\u00b0C is approximately:",
        "opts": {
            "A": "3 to 1 or 4 to 1",
            "B": "1 to 10",
            "C": "100 to 1",
            "D": "1 to 1"
        },
        "ans": "A",
        "exp": "Under ambient air at 25\u00b0C, RuBisCO catalyzes roughly 3 to 4 carboxylation events for every 1 oxygenation event.",
        "topic": "c3_c4",
        "sub": "RuBisCO Specificity",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 197,
        "q": "As leaf temperature increases, photorespiration increases because:",
        "opts": {
            "A": "Solubility of CO2 decreases faster than O2, and the intrinsic specificity factor of RuBisCO shifts to favor oxygenation",
            "B": "RuBisCO disintegrates into small subunits",
            "C": "PEPcase is destroyed above 20\u00b0C",
            "D": "Stomata open wider at high temperature"
        },
        "ans": "A",
        "exp": "High temperature reduces CO2/O2 solubility ratio in water and alters RuBisCO enzyme kinetics to favor oxygenase activity.",
        "topic": "c3_c4",
        "sub": "Photorespiration & Temperature",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 198,
        "q": "In the photorespiratory cycle, the 2-carbon compound phosphoglycolate formed in chloroplasts is converted to glycolate by:",
        "opts": {
            "A": "Phosphoglycolate phosphatase (releasing inorganic phosphate in stroma)",
            "B": "Catalase",
            "C": "Glycolate oxidase",
            "D": "Peroxidase"
        },
        "ans": "A",
        "exp": "Phosphoglycolate phosphatase dephosphorylates 2-phosphoglycolate to glycolate in the chloroplast stroma.",
        "topic": "c3_c4",
        "sub": "Photorespiration Steps",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 199,
        "q": "Glycolate exported from the chloroplast enters the peroxisome, where it is oxidized to glyoxylate and H2O2 by:",
        "opts": {
            "A": "Glycolate oxidase",
            "B": "RuBisCO",
            "C": "Cytochrome c oxidase",
            "D": "NADH dehydrogenase"
        },
        "ans": "A",
        "exp": "Glycolate oxidase in peroxisomes oxidizes glycolate to glyoxylate, producing hydrogen peroxide (H2O2).",
        "topic": "c3_c4",
        "sub": "Photorespiration Steps",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 200,
        "q": "The toxic hydrogen peroxide (H2O2) produced in peroxisomes during photorespiration is detoxified to water and O2 by:",
        "opts": {
            "A": "Catalase",
            "B": "Peroxidase",
            "C": "Superoxide dismutase",
            "D": "Ascorbate peroxidase"
        },
        "ans": "A",
        "exp": "Catalase rapidly breaks down H2O2 into H2O and 1/2 O2 inside peroxisomes.",
        "topic": "c3_c4",
        "sub": "Photorespiration Steps",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 201,
        "q": "In the peroxisome, glyoxylate is transaminated to which amino acid before export to mitochondria?",
        "opts": {
            "A": "Glycine",
            "B": "Alanine",
            "C": "Glutamate",
            "D": "Serine"
        },
        "ans": "A",
        "exp": "Glutamate:glyoxylate aminotransferase converts glyoxylate to the 2-carbon amino acid glycine.",
        "topic": "c3_c4",
        "sub": "Photorespiration Steps",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 202,
        "q": "In mitochondria, two molecules of glycine (2C each) react to produce one molecule of serine (3C) with the release of:",
        "opts": {
            "A": "One molecule of CO2 and one molecule of NH3 (ammonia)",
            "B": "Two molecules of CO2",
            "C": "One molecule of glucose",
            "D": "One molecule of ATP"
        },
        "ans": "A",
        "exp": "Glycine decarboxylase and serine hydroxymethyltransferase convert 2 glycine (4C) -> 1 serine (3C) + CO2 (1C) + NH3.",
        "topic": "c3_c4",
        "sub": "Photorespiration Steps",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 203,
        "q": "The toxic ammonia (NH3) released in mitochondria during photorespiration is reassimilated in chloroplasts by the:",
        "opts": {
            "A": "GS-GOGAT (Glutamine synthetase - Glutamate synthase) pathway",
            "B": "Urea cycle",
            "C": "Nitrate reductase pathway",
            "D": "Deamination pathway"
        },
        "ans": "A",
        "exp": "Chloroplastic GS-GOGAT reassimilates photorespiratory NH3 at the cost of 1 ATP and 1 reduced ferredoxin.",
        "topic": "c3_c4",
        "sub": "Photorespiration Nitrogen",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 204,
        "q": "In the photorespiratory cycle, serine exported from mitochondria to peroxisomes is converted to:",
        "opts": {
            "A": "Hydroxypyruvate and then reduced to glycerate",
            "B": "Glycine",
            "C": "Alanine",
            "D": "Pyruvate"
        },
        "ans": "A",
        "exp": "Serine undergoes transamination to hydroxypyruvate, which is reduced by hydroxypyruvate reductase to glycerate in peroxisomes.",
        "topic": "c3_c4",
        "sub": "Photorespiration Steps",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 205,
        "q": "Glycerate returns to the chloroplast, where it is phosphorylated to 3-phosphoglycerate (3-PGA) by:",
        "opts": {
            "A": "Glycerate kinase (consuming 1 ATP)",
            "B": "Phosphoglycerate mutase",
            "C": "RuBisCO",
            "D": "Hexokinase"
        },
        "ans": "A",
        "exp": "Glycerate kinase uses 1 ATP in the chloroplast stroma to convert glycerate back into 3-PGA for Calvin cycle entry.",
        "topic": "c3_c4",
        "sub": "Photorespiration Steps",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 206,
        "q": "What percentage of the carbon diverted into phosphoglycolate during photorespiration is successfully recovered back into 3-PGA?",
        "opts": {
            "A": "75% (3 carbons out of every 4 carbons)",
            "B": "25%",
            "C": "50%",
            "D": "100%"
        },
        "ans": "A",
        "exp": "Because 2 phosphoglycolate (4C) yield 1 serine (3C) and 1 CO2 (1C), exactly 75% of carbon is salvaged and 25% is lost as CO2.",
        "topic": "c3_c4",
        "sub": "Photorespiration Recovery",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 207,
        "q": "Photorespiration is also called the C2 cycle because:",
        "opts": {
            "A": "The first product of the oxygenase reaction is the 2-carbon compound phosphoglycolate",
            "B": "It involves 2 organelles",
            "C": "It produces 2 molecules of ATP",
            "D": "It takes 2 seconds"
        },
        "ans": "A",
        "exp": "The oxygenase cleavage of RuBP yields 2-phosphoglycolate, a 2-carbon molecule.",
        "topic": "c3_c4",
        "sub": "Photorespiration Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 208,
        "q": "Why does photorespiration not operate in C4 plants under normal conditions?",
        "opts": {
            "A": "Internal CO2 concentration in bundle sheath cells is maintained at 2,000 to 3,000 ppm, suppressing the oxygenase reaction of RuBisCO",
            "B": "C4 plants lack peroxisomes",
            "C": "C4 plants lack RuBisCO",
            "D": "C4 bundle sheath cells lack mitochondria"
        },
        "ans": "A",
        "exp": "Active pumping and decarboxylation of C4 acids elevates bundle sheath CO2, completely outcompeting O2 at RuBisCO active sites.",
        "topic": "c3_c4",
        "sub": "Photorespiration in C4",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 209,
        "q": "Under low oxygen conditions (e.g., 2% O2 instead of 21% O2), the photosynthetic rate of C3 plants increases significantly. This phenomenon is known as the:",
        "opts": {
            "A": "Warburg effect",
            "B": "Emerson effect",
            "C": "Pasteur effect",
            "D": "Bohr effect"
        },
        "ans": "A",
        "exp": "Otto Warburg discovered that lowering O2 concentration relieves oxygen inhibition of photosynthesis (by suppressing photorespiration).",
        "topic": "c3_c4",
        "sub": "Warburg Effect",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 210,
        "q": "Which of the following describes the energy cost of photorespiration for each molecule of O2 fixed?",
        "opts": {
            "A": "Consumes 1 ATP in glycerate kinase, 1 ATP in NH3 reassimilation, and reducing equivalents, without generating ATP",
            "B": "Produces 2 ATP and 1 NADPH",
            "C": "Generates high amounts of glucose",
            "D": "Consumes no energy"
        },
        "ans": "A",
        "exp": "Photorespiration is energetically wasteful, burning ATP and reducing power solely to scavenge phosphoglycolate.",
        "topic": "c3_c4",
        "sub": "Photorespiration Energetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 211,
        "q": "The CO2 compensation point for C3 plants is approximately:",
        "opts": {
            "A": "25 to 100 ppm (typically 40-50 ppm)",
            "B": "0 to 10 ppm",
            "C": "200 to 300 ppm",
            "D": "400 to 500 ppm"
        },
        "ans": "A",
        "exp": "At the CO2 compensation point, photosynthetic CO2 uptake equals respiratory/photorespiratory CO2 release (40-50 ppm for C3).",
        "topic": "factors",
        "sub": "Compensation Point",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 212,
        "q": "The CO2 compensation point for C4 plants is approximately:",
        "opts": {
            "A": "0 to 10 ppm (close to zero)",
            "B": "40 to 50 ppm",
            "C": "100 to 150 ppm",
            "D": "300 to 400 ppm"
        },
        "ans": "A",
        "exp": "Because PEPcase has a very high affinity for HCO3- and photorespiration is absent, C4 compensation point is near zero (0-10 ppm).",
        "topic": "factors",
        "sub": "Compensation Point",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 213,
        "q": "At light compensation point:",
        "opts": {
            "A": "The rate of photosynthesis is exactly equal to the rate of respiration",
            "B": "Photosynthesis reaches its maximum possible velocity",
            "C": "All chlorophyll molecules are destroyed",
            "D": "Stomata are completely closed"
        },
        "ans": "A",
        "exp": "At the light compensation point, net gas exchange is zero because photosynthetic O2 evolution equals respiratory O2 uptake.",
        "topic": "factors",
        "sub": "Light Compensation Point",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 214,
        "q": "Shade-adapted plants (sciophytes) differ from sun-loving plants (heliophytes) by having:",
        "opts": {
            "A": "Lower light compensation points and lower light saturation points",
            "B": "Higher light compensation points",
            "C": "Thicker leaves with multiple palisade layers",
            "D": "Complete absence of chlorophyll b"
        },
        "ans": "A",
        "exp": "Sciophytes reach light compensation and saturation at much lower light intensities than heliophytes.",
        "topic": "factors",
        "sub": "Sciophytes vs Heliophytes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 215,
        "q": "In a photosynthesis versus light intensity curve, in region A (low light intensity), the rate of photosynthesis shows:",
        "opts": {
            "A": "A linear relationship where light is the limiting factor",
            "B": "Complete saturation unaffected by light",
            "C": "A rapid drop due to solarization",
            "D": "Zero photosynthesis"
        },
        "ans": "A",
        "exp": "At low light intensities, photosynthesis responds linearly to increasing light, indicating light is the primary limiting factor.",
        "topic": "factors",
        "sub": "Light Response Curves",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 216,
        "q": "In a photosynthesis versus light intensity curve, beyond the light saturation point (region C), the rate plateaus because:",
        "opts": {
            "A": "Other factors such as CO2 concentration or temperature become limiting",
            "B": "Chloroplasts explode",
            "C": "RuBP is permanently degraded",
            "D": "All enzymes are denatured"
        },
        "ans": "A",
        "exp": "Once light saturation is reached, light is no longer limiting; carbon dioxide or enzymatic capacity becomes the limiting factor.",
        "topic": "factors",
        "sub": "Light Response Curves",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 217,
        "q": "Solarization refers to:",
        "opts": {
            "A": "Photo-oxidation and destruction of chlorophyll molecules and cell constituents at excessively high light intensities",
            "B": "The absorption of sunlight by carotenoids",
            "C": "The tracking of the sun by sunflowers",
            "D": "The conversion of starch to glucose in sunlight"
        },
        "ans": "A",
        "exp": "Excessive light exposure generates destructive triplet chlorophyll and singlet oxygen, causing photo-oxidative bleaching (solarization).",
        "topic": "factors",
        "sub": "Solarization",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 218,
        "q": "How do carotenoids prevent solarization of photosynthetic pigments?",
        "opts": {
            "A": "By quenching singlet excited chlorophylls and scavenging reactive oxygen species like singlet oxygen",
            "B": "By reflecting all visible light",
            "C": "By absorbing water from the air",
            "D": "By converting light into glucose directly"
        },
        "ans": "A",
        "exp": "Carotenoids protect photosynthetic machinery by dissipating excess excitation energy non-photochemically as heat and quenching ROS.",
        "topic": "factors",
        "sub": "Photoprotection",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 219,
        "q": "The primary reason why C3 plants show enhanced growth under elevated atmospheric CO2 (e.g., in greenhouse enrichment) is that:",
        "opts": {
            "A": "Current atmospheric CO2 (~400 ppm) is below their saturation point (~450 ppm), and elevated CO2 suppresses photorespiration",
            "B": "C3 plants use CO2 for respiration",
            "C": "C3 plants lack cell walls",
            "D": "C3 plants cannot absorb light without high CO2"
        },
        "ans": "A",
        "exp": "High CO2 both saturates RuBisCO carboxylation and competitively suppresses photorespiration in C3 plants.",
        "topic": "factors",
        "sub": "CO2 Fertilization",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 220,
        "q": "Why do C4 plants NOT show substantial growth enhancement under elevated CO2 atmospheres beyond current levels?",
        "opts": {
            "A": "Their internal CO2 in bundle sheath cells is already saturated (>2,000 ppm) by the C4 acid pump",
            "B": "They are poisoned by CO2",
            "C": "Their stomata remain permanently closed",
            "D": "They lack RuBisCO"
        },
        "ans": "A",
        "exp": "C4 plants are already CO2-saturated under ambient conditions due to PEPcase activity; extra atmospheric CO2 yields little benefit.",
        "topic": "factors",
        "sub": "CO2 Fertilization",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 221,
        "q": "Water stress causes a sharp decrease in photosynthesis primarily through stomatal limitation, which means:",
        "opts": {
            "A": "Stomatal closure impedes the inward diffusion of CO2 into the leaf mesophyll",
            "B": "Light cannot enter the leaf through closed stomata",
            "C": "Water photolysis is directly stopped by lack of oxygen",
            "D": "Enzymes precipitate instantly"
        },
        "ans": "A",
        "exp": "Stomatal closure to prevent desiccation reduces intercellular CO2 (Ci), directly starving the Calvin cycle of substrate.",
        "topic": "factors",
        "sub": "Water Stress",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 222,
        "q": "Non-stomatal limitations to photosynthesis under severe water stress include:",
        "opts": {
            "A": "Inhibition of ATP synthesis and reduced activity of RuBisCO and other stromal enzymes",
            "B": "Excessive swelling of chloroplasts",
            "C": "Conversion of chlorophyll a into carotenoids",
            "D": "Immediate destruction of vascular bundles"
        },
        "ans": "A",
        "exp": "Severe dehydration causes cellular shrinkage, increases ion concentrations, and impairs ATP synthase and photosynthetic enzymes.",
        "topic": "factors",
        "sub": "Water Stress",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 223,
        "q": "The temperature coefficient (Q10) for the photochemical (light) reaction is approximately:",
        "opts": {
            "A": "Near 1.0 (indicating temperature insensitivity)",
            "B": "2.0 to 3.0",
            "C": "5.0",
            "D": "0.1"
        },
        "ans": "A",
        "exp": "Pure photochemical reactions are biophysical and largely temperature-independent, exhibiting a Q10 near 1.",
        "topic": "factors",
        "sub": "Temperature & Q10",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 224,
        "q": "The temperature coefficient (Q10) for the dark (biosynthetic) enzymatic reactions of photosynthesis is approximately:",
        "opts": {
            "A": "2.0 to 2.5 (doubling the rate for every 10\u00b0C rise within physiological limits)",
            "B": "1.0",
            "C": "0.5",
            "D": "10.0"
        },
        "ans": "A",
        "exp": "Being enzyme-catalyzed chemical processes, dark reactions display a typical enzymatic Q10 around 2.",
        "topic": "factors",
        "sub": "Temperature & Q10",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 225,
        "q": "At temperatures above 45\u00b0C in C3 plants, photosynthesis declines precipitously due to:",
        "opts": {
            "A": "Denaturation of photosynthetic enzymes, heat damage to thylakoid membranes, and high photorespiration",
            "B": "Freezing of cytoplasmic water",
            "C": "Excessive CO2 accumulation",
            "D": "Reversal of ATP synthase into an ATP pump"
        },
        "ans": "A",
        "exp": "High thermal stress denatures RuBisCO and activase, uncouples thylakoid membranes, and causes photorespiratory loss.",
        "topic": "factors",
        "sub": "Thermal Inactivation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 226,
        "q": "Which photosynthetic pigment lacks a phytol tail and is an essential intermediate in the PS II reaction center?",
        "opts": {
            "A": "Pheophytin",
            "B": "Chlorophyll a",
            "C": "Chlorophyll b",
            "D": "Beta-carotene"
        },
        "ans": "A",
        "exp": "Pheophytin is a chlorophyll a molecule that has lost its central Mg2+ ion; it functions as the first electron acceptor in PS II.",
        "topic": "pigments_light",
        "sub": "Pheophytin",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 227,
        "q": "The porphyrin head of a chlorophyll molecule is composed of:",
        "opts": {
            "A": "A tetrapyrrole ring coordinated with a central Magnesium (Mg) atom",
            "B": "An iron-containing heme group",
            "C": "Four benzene rings with copper",
            "D": "A linear hydrocarbon chain"
        },
        "ans": "A",
        "exp": "Chlorophyll possesses a hydrophilic porphyrin head composed of four pyrrole rings coordinating a central Mg2+ ion.",
        "topic": "pigments_light",
        "sub": "Chlorophyll Structure",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 228,
        "q": "The hydrophobic anchor that holds chlorophyll embedded within the thylakoid lipid bilayer is:",
        "opts": {
            "A": "Phytol tail (a long-chain 20-carbon alcohol)",
            "B": "Carboxyl group",
            "C": "Porphyrin ring",
            "D": "Pyrrole ring"
        },
        "ans": "A",
        "exp": "The lipophilic C20 phytol tail anchors the chlorophyll molecule into the thylakoid membrane.",
        "topic": "pigments_light",
        "sub": "Chlorophyll Structure",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 229,
        "q": "The chemical difference between Chlorophyll a and Chlorophyll b is:",
        "opts": {
            "A": "Chlorophyll a has a methyl group (-CH3) at C7, whereas Chlorophyll b has an aldehyde group (-CHO)",
            "B": "Chlorophyll a contains iron instead of magnesium",
            "C": "Chlorophyll b lacks a phytol tail",
            "D": "Chlorophyll a has two magnesium atoms"
        },
        "ans": "A",
        "exp": "Chl a has a -CH3 group at pyrrole ring II (C7), whereas Chl b has a formyl (-CHO) group, shifting its absorption spectrum.",
        "topic": "pigments_light",
        "sub": "Chlorophyll Structure",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 230,
        "q": "The empirical formula of Chlorophyll a is:",
        "opts": {
            "A": "C55H72O5N4Mg",
            "B": "C55H70O6N4Mg",
            "C": "C55H72O6N4Mg",
            "D": "C40H56O2"
        },
        "ans": "A",
        "exp": "Chlorophyll a is C55H72O5N4Mg; Chlorophyll b is C55H70O6N4Mg.",
        "topic": "pigments_light",
        "sub": "Chlorophyll Formula",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 231,
        "q": "The empirical formula of Chlorophyll b is:",
        "opts": {
            "A": "C55H70O6N4Mg",
            "B": "C55H72O5N4Mg",
            "C": "C50H70O6N4Mg",
            "D": "C40H56"
        },
        "ans": "A",
        "exp": "Chlorophyll b has one more oxygen and two fewer hydrogens than Chl a: C55H70O6N4Mg.",
        "topic": "pigments_light",
        "sub": "Chlorophyll Formula",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 232,
        "q": "Carotenes are hydrocarbons with the general empirical formula:",
        "opts": {
            "A": "C40H56 (e.g., beta-carotene)",
            "B": "C40H56O2",
            "C": "C55H72O5N4Mg",
            "D": "C6H12O6"
        },
        "ans": "A",
        "exp": "Carotenes are pure tetraterpene hydrocarbons (C40H56); beta-carotene is the precursor of vitamin A.",
        "topic": "pigments_light",
        "sub": "Carotenoids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 233,
        "q": "Xanthophylls are oxygenated derivatives of carotenes with the general formula:",
        "opts": {
            "A": "C40H56O2 (e.g., lutein)",
            "B": "C40H56",
            "C": "C55H70O6N4Mg",
            "D": "C18H36O2"
        },
        "ans": "A",
        "exp": "Xanthophylls are carotenoids containing oxygen (carotenols), such as lutein (C40H56O2).",
        "topic": "pigments_light",
        "sub": "Xanthophylls",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 234,
        "q": "The absorption spectrum of a pigment is a graphic representation of:",
        "opts": {
            "A": "The amount of light energy absorbed across different wavelengths of the light spectrum",
            "B": "The rate of photosynthesis plotted against light intensity",
            "C": "The temperature response curve of RuBisCO",
            "D": "The transpiration rate against humidity"
        },
        "ans": "A",
        "exp": "Absorption spectra plot absorbance versus wavelength (nm) for a given pigment.",
        "topic": "pigments_light",
        "sub": "Spectra",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 235,
        "q": "The action spectrum of photosynthesis is a graphic representation of:",
        "opts": {
            "A": "The rate of photosynthesis (e.g., O2 evolved) at different wavelengths of light",
            "B": "The amount of chlorophyll synthesized at different wavelengths",
            "C": "The absorption of light by pure chlorophyll a in solvent",
            "D": "The rate of ATP hydrolysis in the dark"
        },
        "ans": "A",
        "exp": "Action spectra depict physiological effectiveness (O2 production or CO2 fixation) as a function of incident wavelength.",
        "topic": "pigments_light",
        "sub": "Spectra",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 236,
        "q": "Why does the action spectrum of photosynthesis closely overlap with the absorption spectrum of chlorophyll a?",
        "opts": {
            "A": "Because chlorophyll a is the essential reaction center pigment where photochemical energy conversion takes place",
            "B": "Because other pigments do not absorb light",
            "C": "Because chlorophyll a absorbs only green light",
            "D": "Because all light is converted to heat"
        },
        "ans": "A",
        "exp": "The close correspondence demonstrates that chlorophyll a is the primary pigment driving light-dependent photosynthesis.",
        "topic": "pigments_light",
        "sub": "Spectra",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 237,
        "q": "Why is the action spectrum broader than the absorption spectrum of chlorophyll a alone?",
        "opts": {
            "A": "Accessory pigments (chlorophyll b, carotenoids, xanthophylls) absorb light at intermediate wavelengths and transfer energy to chlorophyll a",
            "B": "Water absorbs light and transfers energy to chlorophyll",
            "C": "Chloroplast envelopes absorb green light efficiently",
            "D": "Starch granules reflect blue light"
        },
        "ans": "A",
        "exp": "Accessory pigments capture photons in regions where Chl a absorption is low (e.g., 450-500 nm) and funnel energy to the reaction center.",
        "topic": "pigments_light",
        "sub": "Spectra",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 238,
        "q": "Resonance energy transfer (F\u00f6rster resonance energy transfer, FRET) in light-harvesting complexes refers to:",
        "opts": {
            "A": "The non-radiative transfer of excitation energy from antenna pigments to the reaction center without electron movement",
            "B": "The physical movement of chlorophylls into the lumen",
            "C": "The transfer of high-energy electrons through cytochromes",
            "D": "The flow of protons through CF0"
        },
        "ans": "A",
        "exp": "Antenna pigments funnel absorbed photon energy through dipole-dipole resonance coupling directly to the reaction center P680 or P700.",
        "topic": "pigments_light",
        "sub": "Resonance Transfer",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 239,
        "q": "The primary electron donor that directly reduces P700+ back to ground state P700 in Photosystem I is:",
        "opts": {
            "A": "Plastocyanin (PC)",
            "B": "Plastoquinone",
            "C": "Water",
            "D": "Tyrosine Z"
        },
        "ans": "A",
        "exp": "Reduced plastocyanin diffuses along the lumenal membrane face to reduce P700+ back to its neutral state.",
        "topic": "pigments_light",
        "sub": "PS I Reduction",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 240,
        "q": "In Photosystem I, electrons from ferredoxin can be transferred to oxygen in the Mehler reaction (pseudocyclic photophosphorylation), which generates:",
        "opts": {
            "A": "Superoxide radicals that are detoxified to H2O by superoxide dismutase and ascorbate peroxidase, generating ATP without net NADPH",
            "B": "Excess glucose",
            "C": "Lethal cyanide",
            "D": "Methane gas"
        },
        "ans": "A",
        "exp": "The Mehler reaction (water-water cycle) directs electrons from PS I to O2, generating a proton gradient and ATP without net NADPH formation.",
        "topic": "pigments_light",
        "sub": "Mehler Reaction",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 241,
        "q": "The initial substrate that enters the C4 dicarboxylic acid pathway in the mesophyll cell is:",
        "opts": {
            "A": "Phosphoenolpyruvate (3C) and Bicarbonate (1C)",
            "B": "RuBP and CO2",
            "C": "Pyruvate and Malate",
            "D": "Glucose and ATP"
        },
        "ans": "A",
        "exp": "PEP carboxylase combines PEP (3C) with HCO3- (1C) to produce oxaloacetate (4C).",
        "topic": "c3_c4",
        "sub": "C4 Reactions",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 242,
        "q": "In C4 plants, oxaloacetate (OAA) is rapidly reduced to malate in mesophyll chloroplasts using:",
        "opts": {
            "A": "NADP-malate dehydrogenase (consuming NADPH)",
            "B": "RuBisCO",
            "C": "Cytochrome oxidase",
            "D": "Enolase"
        },
        "ans": "A",
        "exp": "NADP-malate dehydrogenase reduces unstable OAA to stable malate using NADPH in mesophyll chloroplasts.",
        "topic": "c3_c4",
        "sub": "C4 Reactions",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 243,
        "q": "In bundle sheath cells of C4 plants, RuBisCO operates under a CO2 concentration that is approximately:",
        "opts": {
            "A": "8 to 10 times higher than that in mesophyll cells of C3 plants",
            "B": "Lower than atmospheric air",
            "C": "Zero",
            "D": "Equal to root cells"
        },
        "ans": "A",
        "exp": "The C4 acid pump raises bundle sheath stromal CO2 to 2,000-3,000 ppm, compared to ~250 ppm in C3 mesophyll.",
        "topic": "c3_c4",
        "sub": "CO2 Concentration Mechanism",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 244,
        "q": "What prevents CO2 released in the bundle sheath cells of C4 plants from easily diffusing back out into the mesophyll?",
        "opts": {
            "A": "Thick, suberized bundle sheath cell walls with very low gas permeability",
            "B": "Waxy cuticle around chloroplasts",
            "C": "Absence of plasmodesmata",
            "D": "High stomatal density on veins"
        },
        "ans": "A",
        "exp": "Suberized lamellae and thick bundle sheath walls create a high-resistance barrier that traps CO2 around RuBisCO.",
        "topic": "c3_c4",
        "sub": "Kranz Anatomy",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 245,
        "q": "Which intermediate is formed when glycine decarboxylase acts on glycine in mitochondria during photorespiration?",
        "opts": {
            "A": "Methylene-tetrahydrofolate ([CH2]-THF), releasing CO2 and NH3",
            "B": "Malic acid",
            "C": "Oxaloacetic acid",
            "D": "Pyruvate"
        },
        "ans": "A",
        "exp": "Glycine decarboxylase multienzyme complex transfers the methylene carbon of glycine to THF, releasing CO2, NH3, and reducing NAD+ to NADH.",
        "topic": "c3_c4",
        "sub": "Photorespiration Steps",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 246,
        "q": "The energy cost of running one complete photorespiratory cycle that releases one molecule of CO2 is:",
        "opts": {
            "A": "3.5 ATP and 2 reducing equivalents (NADPH/NADH/Fd)",
            "B": "0 ATP",
            "C": "100 ATP",
            "D": "1 ATP only"
        },
        "ans": "A",
        "exp": "Reassimilating NH3, recycling glycerate, and repairing photorespiratory losses costs roughly 3.5 ATP and 2 reducing equivalents per CO2 released.",
        "topic": "c3_c4",
        "sub": "Photorespiration Cost",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 247,
        "q": "Why is photorespiration essentially undetectable in marine phytoplankton?",
        "opts": {
            "A": "They possess active biophysical Carbon Concentrating Mechanisms (CCMs) that pump HCO3- into cells and carboxysomes/pyrenoids",
            "B": "They do not have RuBisCO",
            "C": "They live in the dark",
            "D": "They do not evolve oxygen"
        },
        "ans": "A",
        "exp": "Aquatic algae concentrate CO2 around RuBisCO inside pyrenoids or carboxysomes, eliminating photorespiration.",
        "topic": "c3_c4",
        "sub": "Algal CCM",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 248,
        "q": "The carboxysome in cyanobacteria and the pyrenoid in green algae are functional analogs of:",
        "opts": {
            "A": "The bundle sheath cell compartment of C4 plants (concentrating CO2 around RuBisCO)",
            "B": "The thylakoid lumen",
            "C": "The stomatal pore",
            "D": "The plant cell wall"
        },
        "ans": "A",
        "exp": "Both carboxysomes/pyrenoids and C4 bundle sheath cells function as localized microcompartments that elevate CO2 for RuBisCO.",
        "topic": "c3_c4",
        "sub": "Carbon Concentrating Mechanisms",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 249,
        "q": "Blackman demonstrated the existence of a photochemical (light) reaction and a thermochemical (dark) reaction by showing that:",
        "opts": {
            "A": "At low light intensity, temperature has no effect on rate; but at high light intensity, the rate increases markedly with temperature",
            "B": "Photosynthesis only works in hot water",
            "C": "Light destroys enzymes",
            "D": "CO2 is unnecessary in cold weather"
        },
        "ans": "A",
        "exp": "Temperature-dependence only emerges when light is saturated, proving photosynthesis consists of a light-dependent biophysical step and a dark enzymatic step.",
        "topic": "factors",
        "sub": "Blackman Experiments",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 250,
        "q": "When an isolated chloroplast suspension is treated with an uncoupler that makes the thylakoid membrane permeable to protons:",
        "opts": {
            "A": "Electron transport rate increases, but ATP synthesis drops to zero",
            "B": "Both electron transport and ATP synthesis stop completely",
            "C": "ATP synthesis doubles",
            "D": "Water splitting is blocked immediately"
        },
        "ans": "A",
        "exp": "Removing the back-pressure of the proton gradient accelerates electron flow, while loss of the gradient prevents ATP synthesis.",
        "topic": "pigments_light",
        "sub": "Uncouplers",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    }
]
