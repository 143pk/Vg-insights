import json
import os
import sys

def build_part4():
    qs = []
    
    def add(num, text, a, b, c, d, ans, concept, step, why_wrong, top, sub):
        qs.append((num, text, a, b, c, d, ans, concept, step, why_wrong, top, sub))
        
    # --- MONERA HARD (Q376 - Q406) ---
    add(376, "Given below are two statements:\nStatement I: Archaebacteria are able to survive in the most harsh and extreme habitats due to a unique branched-chain ether-linked lipid monolayer/bilayer in their cell membranes.\nStatement II: Archaebacteria possess a thick peptidoglycan cell wall with D-amino acids identical to that of Gram-positive eubacteria.\nIn light of the above statements, choose the most appropriate answer:",
        "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
        "A", "Archaebacterial cell membrane and wall biochemistry.",
        "1. Statement I is correct: Archaebacteria possess ether-linked branched phytanyl hydrocarbon chains that resist thermal disruption and hydrolytic cleavage.\n2. Statement II is incorrect: Archaebacteria completely lack peptidoglycan; instead, their wall consists of pseudomurein, complex polysaccharides, or glycoprotein S-layers.",
        "Option B is wrong because Statement II is false. Option C is wrong because Statement I is true. Option D reverses the truths.",
        "bio-systems-monera", "Archaebacterial Extremophile Adaptations")

    add(377, "Assertion (A): Cyanobacteria like Nostoc can fix atmospheric nitrogen even though the nitrogenase enzyme is irreversibly inactivated by oxygen.\nReason (R): Nitrogen fixation in Nostoc occurs within specialized thick-walled cells called heterocysts which lack Photosystem II and maintain an anaerobic microenvironment.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Heterocyst microenvironment and nitrogenase protection.",
        "1. Assertion is true: Cyanobacteria successfully fix atmospheric nitrogen in spite of oxygen-sensitive nitrogenase.\n2. Reason is true: Heterocysts exclude O2 via thick impermeable cell walls, lack Photosystem II (no O2 evolution), and possess only PS I to generate ATP, thereby creating the essential anaerobic microenvironment for nitrogenase.\n3. Reason correctly explains Assertion.",
        "Options B, C, and D are invalid because Reason is true and directly explains why the oxygen-sensitive enzyme functions.",
        "bio-systems-monera", "Heterocyst Physiology")

    add(378, "Match Column I (Bacterium/Prokaryote) with Column II (Characteristic/Role):\nColumn I:\nA. Methanococcus\nB. Rhizobium\nC. Nitrosomonas\nD. Mycoplasma\nColumn II:\nI. Converts ammonia into nitrite\nII. Completely lacks a cell wall and causes walking pneumonia\nIII. Produces biogas from cattle dung under anaerobic conditions\nIV. Symbiotic nitrogen fixer in legume root nodules\nChoose the correct option:",
        "A-III, B-IV, C-I, D-II", "A-II, B-I, C-IV, D-III", "A-IV, B-III, C-II, D-I", "A-III, B-I, C-IV, D-II",
        "A", "Prokaryotic groups and biological functions.",
        "1. Methanococcus is a methanogen producing biogas (A-III).\n2. Rhizobium forms legume root nodules fixing N2 (B-IV).\n3. Nitrosomonas oxidizes ammonia to nitrite (C-I).\n4. Mycoplasma lacks cell walls and causes walking pneumonia (D-II).",
        "Options B, C, and D assign incorrect pairings.",
        "bio-systems-monera", "Bacterial Characteristics Match")

    add(379, "Consider the following statements regarding the Six-Kingdom / Three-Domain classification proposed by Carl Woese:\nI. It is based on phylogenetic comparative analysis of 16S ribosomal RNA (rRNA) gene sequences.\nII. It divides Kingdom Monera into two separate domains: Archaea and Bacteria.\nIII. All eukaryotic kingdoms (Protista, Fungi, Plantae, Animalia) are unified into a single domain called Eukarya.\nIV. Domain Archaea is placed evolutionarily closer to Bacteria than to Eukarya.\nWhich of the above statements are CORRECT?",
        "I, II, and III only", "I and II only", "II, III, and IV only", "I, II, III, and IV",
        "A", "Carl Woese Three-Domain system criteria.",
        "1. Statements I, II, and III are correct: Woese used 16S rRNA sequences, split Monera into Archaea and Bacteria, and unified all eukaryotes into Eukarya.\n2. Statement IV is incorrect: Molecular and biochemical evidence demonstrates that Archaea share a closer common ancestor with Eukarya than with Bacteria (e.g., similar RNA polymerases, histone-like proteins, initiator methionine).",
        "Options including IV are incorrect because Archaea are phylogenetically closer to Eukarya than to Bacteria.",
        "bio-systems-monera", "Three-Domain System Phylogeny")

    add(380, "In the Gram-staining procedure developed by Christian Gram (1884), why do Gram-negative bacteria decolorize upon washing with 95% ethyl alcohol/acetone?",
        "Because alcohol dissolves their lipid-rich outer membrane and creates large pores in the thin peptidoglycan layer, allowing the crystal violet-iodine complex to wash out", "Because their thick peptidoglycan layer shrinks and traps the dye permanently", "Because they possess an impermeable teichoic acid mesh", "Because their cell wall is made of cellulose that repels basic dyes",
        "A", "Mechanism of Gram-staining reaction.",
        "1. Gram-negative bacteria have a thin peptidoglycan layer (2-7 nm) surrounded by an outer membrane with high lipid content.\n2. Alcohol dissolves this lipid outer membrane and washes out the crystal violet-iodine complex.\n3. In contrast, alcohol dehydrates the thick peptidoglycan wall (20-80 nm) of Gram-positive bacteria, shrinking pores and trapping the dye.",
        "Option B describes Gram-positive bacteria. Options C and D are biologically untrue.",
        "bio-systems-monera", "Gram-Staining Mechanism")

    add(381, "Given below are two statements:\nStatement I: Chemosynthetic autotrophic bacteria play a tremendous role in recycling nutrients like nitrogen, phosphorus, iron, and sulphur.\nStatement II: Chemosynthetic bacteria utilize solar radiant energy trapped by bacteriochlorophyll to synthesize ATP from water photolysis.\nIn light of the above statements, choose the most appropriate answer:",
        "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
        "A", "Chemosynthetic vs photosynthetic bacteria.",
        "1. Statement I is a verbatim fact from NCERT: Chemosynthetic autotrophs recycle nitrogen, phosphorus, iron, and sulphur.\n2. Statement II is incorrect: Chemosynthetic bacteria do NOT use sunlight or water photolysis; they obtain energy exclusively by oxidizing inorganic chemical substrates.",
        "Option B is wrong because Statement II is false. Option C is wrong because Statement I is correct.",
        "bio-systems-monera", "Chemoautotroph Biochemistry")

    add(382, "Match Column I (Bacterial Disease) with Column II (Causative Organism & Cell Shape):\nColumn I:\nA. Cholera\nB. Typhoid\nC. Tetanus\nD. Citrus canker\nColumn II:\nI. Salmonella typhi (Rod-shaped bacillus)\nII. Vibrio cholerae (Comma-shaped vibrio)\nIII. Xanthomonas citri (Rod-shaped bacillus)\nIV. Clostridium tetani (Spore-forming rod)\nChoose the correct option:",
        "A-II, B-I, C-IV, D-III", "A-I, B-II, C-III, D-IV", "A-IV, B-III, C-II, D-I", "A-II, B-IV, C-I, D-III",
        "A", "Bacterial pathogens and morphological forms.",
        "1. Cholera is caused by Vibrio cholerae (comma-shaped) (A-II).\n2. Typhoid is caused by Salmonella typhi (rod-shaped) (B-I).\n3. Tetanus is caused by Clostridium tetani (endospore-forming rod) (C-IV).\n4. Citrus canker is caused by Xanthomonas citri (rod-shaped) (D-III).",
        "Options B, C, and D contain mismatched pairs.",
        "bio-systems-monera", "Bacterial Diseases and Shapes")

    add(383, "Assertion (A): Mycoplasmas are completely resistant to antibiotics such as penicillin and cephalosporin.\nReason (R): Penicillin acts by inhibiting bacterial cell wall (peptidoglycan) cross-linking, and Mycoplasmas naturally lack a cell wall entirely.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Mycoplasma antibiotic insensitivity.",
        "1. Assertion is true: Beta-lactams do not affect Mycoplasma.\n2. Reason is true: Beta-lactams target transpeptidation in peptidoglycan synthesis; lacking a peptidoglycan cell wall, Mycoplasmas are naturally insusceptible.\n3. Reason directly explains Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally connected.",
        "bio-systems-monera", "Mycoplasma Pharmacology")

    add(384, "Consider the following four organisms:\n1. Anabaena\n2. Methanococcus\n3. Nitrosomonas\n4. Lactobacillus\nHow many of the above are autotrophic organisms?",
        "Three (Anabaena, Methanococcus, Nitrosomonas)", "Only one", "All four", "Two only",
        "A", "Autotrophic prokaryotes identification.",
        "1. Anabaena is a photoautotrophic cyanobacterium.\n2. Methanococcus is a chemoautotrophic methanogen.\n3. Nitrosomonas is a chemoautotrophic nitrifying bacterium.\n4. Lactobacillus is a heterotroph (ferments sugars into lactic acid).\nThus, exactly three of the four are autotrophic.",
        "Options B, C, and D miscount the autotrophic members.",
        "bio-systems-monera", "Autotrophic Diversity")

    add(385, "Which of the following statements is INCORRECT regarding bacterial inclusion bodies?",
        "They are membrane-bound organelles that actively consume ATP for enzyme storage", "They lie free in the cytoplasm without being bounded by any membrane", "Examples include phosphate granules, cyanophycean granules, and glycogen granules", "Gas vacuoles are inclusion structures found in blue-green, purple, and green photosynthetic bacteria",
        "A", "Inclusion bodies in prokaryotes.",
        "1. NCERT explicitly states: 'Reserve material in prokaryotic cells are stored in the cytoplasm in the form of inclusion bodies. These are not bound by any membrane system and lie free in the cytoplasm'.\n2. Thus, claiming they are membrane-bound and consume ATP is false.",
        "Options B, C, and D are verified true statements from NCERT.",
        "bio-systems-monera", "Prokaryotic Inclusion Bodies")

    add(386, "Given below are two statements regarding bacterial reproduction:\nStatement I: Under favorable conditions, bacteria reproduce predominantly by binary fission.\nStatement II: Under unfavorable conditions, bacteria produce highly resistant endospores, and they can also exchange genetic material via primitive DNA transfer.\nIn light of the above statements, choose the most appropriate answer:",
        "Both Statement I and Statement II are correct", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are incorrect",
        "A", "Bacterial reproductive modes in NCERT.",
        "1. Statement I is correct: Binary fission is the primary asexual division method during favorable conditions.\n2. Statement II is correct: Under unfavorable conditions, endospores are formed, and genetic recombination occurs through primitive DNA transfer (conjugation, transformation, transduction).",
        "Options B, C, and D contradict verified NCERT biology.",
        "bio-systems-monera", "Bacterial Reproduction Modes")

    add(387, "Which of the following combinations correctly represents an obligate anaerobe, an oxygenic photoautotroph, and a chemoautotroph, respectively?",
        "Clostridium, Nostoc, and Nitrobacter", "Nostoc, Clostridium, and Nitrobacter", "Nitrobacter, Nostoc, and Clostridium", "Lactobacillus, Nitrobacter, and Nostoc",
        "A", "Metabolic categorization of prokaryotes.",
        "1. Clostridium is an obligate anaerobe killed by oxygen.\n2. Nostoc is an oxygenic photosynthetic cyanobacterium.\n3. Nitrobacter is a chemoautotrophic nitrifying bacterium.",
        "Options B, C, and D do not follow the specified sequence.",
        "bio-systems-monera", "Prokaryotic Metabolic Modes")

    add(388, "Assertion (A): The Three Kingdom classification proposed by Ernst Haeckel created the Kingdom Protista.\nReason (R): Haeckel recognized that unicellular microorganisms did not fit logically into either Kingdom Plantae or Kingdom Animalia due to their lack of tissue differentiation.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Haeckel Three-Kingdom system rationale.",
        "1. Assertion is true: Ernst Haeckel (1866) proposed Kingdom Protista as the third kingdom.\n2. Reason is true: Haeckel created Protista specifically to accommodate all unicellular organisms lacking tissue differentiation that confounded the traditional two-kingdom plant-animal boundary.\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally aligned.",
        "bio-systems-monera", "Historical Classification Evolution")

    add(389, "Match Column I (Scientist) with Column II (Classification Milestone):\nColumn I:\nA. Aristotle\nB. Carolus Linnaeus\nC. R.H. Whittaker\nD. Carl Woese\nColumn II:\nI. Five Kingdom Classification (1969)\nII. Three Domains of Life based on 16S rRNA\nIII. Two Kingdom System (Plantae and Animalia)\nIV. Earliest morphological division (Herbs, Shrubs, Trees; Red blood presence)\nChoose the correct option:",
        "A-IV, B-III, C-I, D-II", "A-III, B-IV, C-I, D-II", "A-IV, B-I, C-III, D-II", "A-II, B-III, C-IV, D-I",
        "A", "Classification milestones and contributors.",
        "1. Aristotle: Earliest morphological division (A-IV).\n2. Linnaeus: Two-kingdom system (B-III).\n3. Whittaker: Five-kingdom classification (C-I).\n4. Woese: Three domains of life (D-II).",
        "Options B, C, and D have erroneous matches.",
        "bio-systems-monera", "Classification History Match")

    add(390, "In filamentous cyanobacteria like Anabaena, which cellular feature prevents the influx of molecular oxygen into the heterocyst?",
        "A multilayered, highly hydrophobic cell envelope composed of inner glycolipid and outer polysaccharide layers", "A thick layer of cellulose impregnated with silica", "Multiple layers of chitin and keratin", "A surrounding envelope of calcium carbonate",
        "A", "Heterocyst wall ultrastructure.",
        "1. The heterocyst envelope consists of an inner homogeneous glycolipid layer that forms an impermeable gas diffusion barrier to O2, covered by an outer fibrous polysaccharide layer that provides mechanical stability.",
        "Cellulose, silica, chitin, and keratin are not components of cyanobacterial heterocysts.",
        "bio-systems-monera", "Heterocyst Wall Ultrastructure")

    add(391, "Given below are two statements:\nStatement I: Photosynthetic bacteria (such as Chlorobium and Chromatium) perform anoxygenic photosynthesis and never release oxygen.\nStatement II: Photosynthetic bacteria utilize water (H2O) as an electron and proton donor, splitting it via a manganese-containing oxygen-evolving complex.\nIn light of the above statements, choose the most appropriate answer:",
        "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
        "A", "Anoxygenic bacterial photosynthesis principles.",
        "1. Statement I is correct: Purple and green photosynthetic bacteria carry out anoxygenic photosynthesis, never releasing oxygen.\n2. Statement II is incorrect: They do NOT use H2O as an electron donor; they use H2S, thiosulphate, or organic compounds, and completely lack an oxygen-evolving complex.",
        "Option B is wrong because Statement II is false. Option C is wrong because Statement I is true.",
        "bio-systems-monera", "Bacterial Photosynthesis Stoichiometry")

    add(392, "Which of the following structures in bacteria serves as the primary site for cellular respiration and ATP generation via electron transport chains?",
        "Plasma membrane and its mesosomal invaginations", "Mitochondrial inner cristae", "Nuclear envelope membrane", "Lysosomal matrix",
        "A", "Prokaryotic respiratory machinery site.",
        "1. Bacteria lack mitochondria; their electron transport chains, cytochromes, and ATP synthases are embedded directly in the plasma membrane and its invaginated mesosomes.",
        "Mitochondria, nuclear envelopes, and lysosomes are membrane-bound organelles absent in prokaryotes.",
        "bio-systems-monera", "Prokaryotic Respiration Site")

    add(393, "Consider the following statements regarding Archaebacteria:\n1. Methanogens are obligate anaerobes.\n2. Halophiles live in saturated salt brine and possess purple membrane bacteriorhodopsin.\n3. Thermoacidophiles thrive in hot springs at temperatures of 80°C and pH 2 by oxidizing sulphur to sulphuric acid.\n4. Archaebacterial cell walls contain murein with D-alanine cross-links.\nWhich of the above statements are TRUE?",
        "1, 2, and 3 only", "1 and 2 only", "3 and 4 only", "All 1, 2, 3, and 4",
        "A", "Archaebacterial sub-groups detailed traits.",
        "1. Statements 1, 2, and 3 are correct: Methanogens are obligate anaerobes; Halophiles possess bacteriorhodopsin; Thermoacidophiles oxidize sulphur under extreme thermophilic and acidophilic conditions.\n2. Statement 4 is false: Archaebacteria lack murein (peptidoglycan); they have pseudomurein or S-layers.",
        "Options containing 4 are incorrect because murein is strictly eubacterial.",
        "bio-systems-monera", "Archaebacteria Detailed Facts")

    add(394, "Assertion (A): Bacteria as a group exhibit the most extensive metabolic diversity compared to all other kingdoms.\nReason (R): Some bacteria are autotrophic (photosynthetic or chemosynthetic), while the vast majority are heterotrophic (saprophytic, symbiotic, or parasitic).",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Metabolic diversity in Monera in NCERT.",
        "1. Assertion is a direct NCERT principle: 'Compared to many other organisms, which show only autotrophy or heterotrophy, bacteria as a group show the most extensive metabolic diversity'.\n2. Reason correctly explains that within this single kingdom, one finds photoautotrophy, chemoautotrophy, saprophytism, parasitism, and symbiosis.",
        "Options B, C, and D are invalid because both statements are true and causally connected.",
        "bio-systems-monera", "Metabolic Diversity Rationale")

    add(395, "Which of the following features distinguishes Cyanobacteria from all other photosynthetic prokaryotes?",
        "Presence of Chlorophyll a and water-splitting oxygenic photosynthesis", "Presence of circular DNA", "Presence of 70S ribosomes", "Presence of a peptidoglycan cell wall",
        "A", "Unique cyanobacterial hallmark.",
        "1. Cyanobacteria are unique among prokaryotes in having Chlorophyll a and performing oxygenic photosynthesis (splitting water with oxygen evolution).\n2. All other photosynthetic bacteria possess bacteriochlorophyll and perform anoxygenic photosynthesis without water photolysis.",
        "Circular DNA, 70S ribosomes, and peptidoglycan walls are shared by virtually all eubacteria.",
        "bio-systems-monera", "Cyanobacterial Distinctive Hallmarks")

    add(396, "Given below are two statements:\nStatement I: The genetic material in bacteria consists of a single circular double-stranded naked DNA molecule located in the nucleoid without histone proteins.\nStatement II: Bacteria possess multiple linear chromosomes enclosed within a porous nuclear envelope containing lamin intermediate filaments.\nIn light of the above statements, choose the most appropriate answer:",
        "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
        "A", "Prokaryotic vs eukaryotic genetic architecture.",
        "1. Statement I is correct: Bacterial DNA is circular, double-stranded, naked (lacks histones, associated with polyamines/non-histone proteins), and localized in the nucleoid.\n2. Statement II is incorrect: Linear chromosomes in nuclear envelopes are eukaryotic features.",
        "Option B is wrong because Statement II is false. Option C is wrong because Statement I is true.",
        "bio-systems-monera", "Bacterial Genome Architecture")

    add(397, "Which of the following antibiotics specifically targets the bacterial 70S ribosome without inhibiting eukaryotic 80S cytosolic ribosomes?",
        "Streptomycin, Tetracycline, and Chloramphenicol", "Penicillin and Ampicillin", "Nystatin and Amphotericin B", "Alpha-amanitin",
        "A", "Bacterial translation inhibitors.",
        "1. Streptomycin, tetracycline, chloramphenicol, and erythromycin specifically bind to bacterial 30S or 50S ribosomal subunits to block translation without affecting cytosolic 80S eukaryotic ribosomes.\n2. Penicillin inhibits cell walls. Nystatin targets fungal ergosterol. Alpha-amanitin inhibits RNA Pol II.",
        "Options B, C, and D target cell walls, membrane ergosterol, or transcription.",
        "bio-systems-monera", "Prokaryotic Ribosome Pharmacology")

    add(398, "Match Column I (Prokaryotic Structure) with Column II (Composition/Function):\nColumn I:\nA. Bacterial Flagellum\nB. Bacterial Pilus\nC. Bacterial Capsule\nD. Bacterial Cell Wall\nColumn II:\nI. Tough glycocalyx layer conferring phagocytic protection\nII. Peptidoglycan (Murein) polymer cross-linked by peptide chains\nIII. Tubular appendage made of pilin used in conjugation\nIV. Helical filament made of flagellin used in swimming motility\nChoose the correct option:",
        "A-IV, B-III, C-I, D-II", "A-III, B-IV, C-I, D-II", "A-IV, B-I, C-III, D-II", "A-II, B-III, C-IV, D-I",
        "A", "Bacterial surface structures and biochemistry.",
        "1. Flagellum: Motility via flagellin (A-IV).\n2. Pilus: Tubular pilin structure for conjugation (B-III).\n3. Capsule: Tough glycocalyx preventing phagocytosis (C-I).\n4. Cell wall: Peptidoglycan meshwork (D-II).",
        "Options B, C, and D pair structures incorrectly.",
        "bio-systems-monera", "Bacterial Envelope Match")

    add(399, "Which of the following bacteria can fix atmospheric nitrogen while living freely as an aerobe in the soil, but can also fix nitrogen as an endophyte?",
        "Azospirillum and Azotobacter", "Rhizobium leguminosarum only", "Nitrosococcus", "Lactobacillus",
        "A", "Free-living and associative nitrogen fixers.",
        "1. Azospirillum and Azotobacter can fix nitrogen as free-living soil aerobes; Azospirillum also establishes associative rhizosphere relationships with grasses and cereals.",
        "Rhizobium fixes nitrogen only when encapsulated inside anaerobic root nodules.",
        "bio-systems-monera", "Nitrogen Fixing Species")

    add(400, "Assertion (A): Gram-positive bacteria retain the purple crystal violet stain upon alcohol washing, whereas Gram-negative bacteria do not.\nReason (R): Gram-positive bacteria possess a thick peptidoglycan wall with extensive cross-linking that dehydrates and traps the large crystal violet-iodine complex during alcohol treatment.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Gram-positive staining mechanism.",
        "1. Assertion is true: Gram-positive bacteria remain purple.\n2. Reason is true: The thick peptidoglycan wall dehydrates in alcohol, constricting pores and permanently trapping the insoluble CV-I complex inside the cell.\n3. Reason correctly explains Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally connected.",
        "bio-systems-monera", "Gram Staining Mechanics")

    add(401, "What is the primary evolutionary advantage conferred on archaebacteria by having ether bonds rather than ester bonds in their membrane lipids?",
        "Ether linkages are significantly more resistant to chemical hydrolysis by extreme heat and acid than ester linkages", "Ether bonds allow faster active transport of glucose", "Ether bonds make the membrane completely permeable to toxic ions", "Ether bonds produce high quantities of ATP directly without enzymes",
        "A", "Biochemical resilience of ether linkages.",
        "1. Ether bonds (C-O-C) between glycerol and branched phytanyl side chains lack the carbonyl oxygen present in ester bonds (C-O-C=O), making ether bonds chemically inert and resistant to acid/thermal hydrolysis in boiling volcanic springs.",
        "Options B, C, and D are factually inaccurate physiological assumptions.",
        "bio-systems-monera", "Ether Lipids Chemical Resilience")

    add(402, "Which genus of bacteria is famously known as the natural source of the thermostable Taq DNA polymerase utilized in Polymerase Chain Reaction (PCR)?",
        "Thermus aquaticus", "Bacillus thuringiensis", "Escherichia coli", "Streptomyces griseus",
        "A", "Thermus aquaticus and PCR biotechnology.",
        "1. Taq polymerase is isolated from the thermophilic bacterium Thermus aquaticus, which thrives in hydrothermal vents at 70-80°C.\n2. Its enzyme withstands 95°C denaturation temperatures in PCR cycles.",
        "Bt produces Cry endotoxin. E. coli is a laboratory model. Streptomyces yields streptomycin.",
        "bio-systems-monera", "Thermophilic Biotechnology")

    add(403, "Given below are two statements:\nStatement I: Nitrogenase enzyme is a Mo-Fe (molybdenum-iron) protein that catalyzes the reduction of atmospheric nitrogen into ammonia.\nStatement II: Nitrogenase requires 16 ATP molecules for every molecule of N2 reduced into two molecules of NH3.\nIn light of the above statements, choose the most appropriate answer:",
        "Both Statement I and Statement II are correct", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are incorrect",
        "A", "Nitrogenase enzyme biochemistry.",
        "1. Statement I is correct: Nitrogenase is a Mo-Fe protein complex that reduces N2 + 8H+ + 8e- -> 2NH3 + H2.\n2. Statement II is correct: The reduction of 1 molecule of N2 requires a minimum of 16 ATP molecules (8 ATP per NH3 produced), making biological nitrogen fixation energetically demanding.",
        "Options B, C, and D misrepresent nitrogenase biochemistry.",
        "bio-systems-monera", "Nitrogenase Energetics")

    add(404, "Which of the following cyanobacteria is grown commercially in mass culture as a rich protein, vitamin, and mineral dietary supplement for humans and astronauts?",
        "Spirulina (Arthrospira platensis)", "Anabaena azollae", "Nostoc commune", "Oscillatoria limosa",
        "A", "Spirulina commercial nutrition.",
        "1. Spirulina is a filamentous, non-heterocystous cyanobacterium grown in mass outdoor ponds as Single Cell Protein (SCP), containing 60-70% protein, B-vitamins, and essential fatty acids.",
        "Anabaena azollae is a biofertilizer in rice paddies. Nostoc and Oscillatoria are not primary commercial SCP supplements.",
        "bio-systems-monera", "Single Cell Protein Cyanobacteria")

    add(405, "Consider the following statements regarding bacterial endospores:\nI. Endospores are reproductive units that multiply bacterial numbers.\nII. Endospores are perennating structures formed inside the cell during starvation to endure extreme desiccation and heat.\nIII. The dipicolinic acid-calcium complex accounts for up to 10-15% of the spore core dry weight.\nWhich of the above statements are CORRECT?",
        "II and III only", "I and II only", "I and III only", "I, II, and III",
        "A", "Endospores function in bacteria.",
        "1. Statement I is false: Endospore formation is NOT a method of reproduction because one vegetative bacterium forms exactly one endospore, which germinates into one bacterium (no numerical multiplication).\n2. Statements II and III are correct: Endospores are perennating survival capsules rich in calcium dipicolinate.",
        "Options containing I are incorrect because endospores do not multiply numbers.",
        "bio-systems-monera", "Endospore Functionality")

    add(406, "Which of the following pairs is INCORRECTLY matched?",
        "Mycoplasma — Possesses rigid cellulose cell wall", "Nostoc — Contains heterocysts for nitrogen fixation", "Methanogens — Produce methane gas from cow dung", "Lactobacillus — Converts milk sugar into lactic acid",
        "A", "Mycoplasma cell wall absence.",
        "1. Mycoplasma completely lacks a cell wall (neither peptidoglycan nor cellulose).\n2. Thus, pairing Mycoplasma with a rigid cellulose wall is factually incorrect.",
        "Options B, C, and D are all accurate pairings verified in NCERT.",
        "bio-systems-monera", "Monera Characteristics Evaluation")

    # --- PROTISTA HARD (Q407 - Q437) ---
    add(407, "Given below are two statements regarding Chrysophytes:\nStatement I: Diatomaceous earth is formed by the deposition of indestructible siliceous cell walls of diatoms over billions of years on ocean floors.\nStatement II: Being gritty, diatomaceous earth is utilized commercially in polishing, filtration of oils, and syrups.\nIn light of the above statements, choose the most appropriate answer:",
        "Both Statement I and Statement II are correct", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are incorrect",
        "A", "Diatomaceous earth formation and uses in NCERT.",
        "1. Statement I is a direct NCERT statement: Cell walls embedded with silica leave behind large amounts of cell wall deposits over billions of years called diatomaceous earth.\n2. Statement II is also verbatim NCERT: Being gritty, it is used in polishing, filtration of oils and syrups.\n3. Both statements are correct.",
        "Options B, C, and D contradict explicit NCERT statements.",
        "bio-kingdom-protista", "Chrysophytes Industrial Value")

    add(408, "Assertion (A): Euglenoids are considered mixotrophic organisms exhibiting animal-like as well as plant-like characteristics.\nReason (R): In the presence of sunlight, they perform photosynthesis utilizing pigments identical to higher plants, but in darkness, they become heterotrophs predating on smaller organisms.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Euglenoid mixotrophy in NCERT.",
        "1. Assertion is true: Euglenoids combine autotrophic and heterotrophic nutrition.\n2. Reason is true: They have plant-like photosynthetic pigments in light, but predate or absorb saprozoically in the dark.\n3. Reason directly explains the mixotrophic designation.",
        "Options B, C, and D are invalid because both statements are verified and causally linked.",
        "bio-kingdom-protista", "Euglenoid Mixotrophy Mechanism")

    add(409, "Match Column I (Protistan Group) with Column II (Distinguishing Feature):\nColumn I:\nA. Chrysophytes\nB. Dinoflagellates\nC. Euglenoids\nD. Slime moulds\nColumn II:\nI. Protein-rich pellicle instead of cell wall; two unequal flagella\nII. Stiff cellulose plates on wall; transverse and longitudinal flagella\nIII. Siliceous indestructible overlapping shells fitting like a soap box\nIV. Saprophytic; plasmodium differentiating into fruiting bodies with true-walled spores\nChoose the correct option:",
        "A-III, B-II, C-I, D-IV", "A-II, B-III, C-I, D-IV", "A-III, B-I, C-II, D-IV", "A-IV, B-II, C-I, D-III",
        "A", "Protistan groups distinctive morphological hallmarks.",
        "1. Chrysophytes: Overlapping silica soap-box shells (A-III).\n2. Dinoflagellates: Stiff cellulose plates and dual flagella in furrows (B-II).\n3. Euglenoids: Flexible pellicle and unequal flagella (C-I).\n4. Slime moulds: Saprophytic plasmodium forming fruiting bodies (D-IV).",
        "Options B, C, and D swap key diagnostic traits.",
        "bio-kingdom-protista", "Protistan Groups Match")

    add(410, "Consider the following statements regarding Kingdom Protista:\nI. Boundaries of Kingdom Protista are not well-defined.\nII. What is a 'photosynthetic protist' to one biologist may be a 'plant' to another.\nIII. All protists are single-celled prokaryotes possessing 70S ribosomes.\nIV. Protista forms an evolutionary link with plants, animals, and fungi.\nWhich of the above statements are CORRECT?",
        "I, II, and IV only", "I and II only", "III and IV only", "All I, II, III, and IV",
        "A", "Kingdom Protista boundary concepts in NCERT.",
        "1. Statements I, II, and IV are direct verbatim concepts from NCERT.\n2. Statement III is false: All protists are single-celled EUKARYOTES possessing a membrane-bound nucleus, organelles, and 80S cytosolic ribosomes.",
        "Options including III are incorrect because protists are eukaryotes.",
        "bio-kingdom-protista", "Protistan Boundary Definition")

    add(411, "Given below are two statements:\nStatement I: The spores of slime moulds possess true cell walls composed of cellulose and survive for many years under adverse conditions.\nStatement II: The vegetative plasmodium of slime moulds is covered by a thick, rigid, indestructible silica shell.\nIn light of the above statements, choose the most appropriate answer:",
        "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
        "A", "Slime mould vegetative vs spore walls.",
        "1. Statement I is correct: NCERT explicitly states: 'The spores possess true walls. They are extremely resistant and survive for many years'.\n2. Statement II is incorrect: The vegetative plasmodium is completely naked and wall-less (it does NOT have a silica shell; silica belongs to diatoms).",
        "Option B is wrong because Statement II is false. Option C is wrong because Statement I is correct.",
        "bio-kingdom-protista", "Slime Mould Spore Resilience")

    add(412, "Assertion (A): Dinoflagellates like Gonyaulax cause red tides and massive fish mortality in coastal waters.\nReason (R): Rapid population blooms of Gonyaulax release lethal amounts of saxitoxin, an alkaloid neurotoxin that paralyzes the nervous system of marine fauna.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Red tides toxicity mechanism.",
        "1. Assertion is true: Red dinoflagellates cause red tides and kill marine animals.\n2. Reason is true: The massive blooms release saxitoxin, which blocks voltage-gated sodium channels, killing fishes and marine fauna.\n3. Reason explains the mortality stated in Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally aligned.",
        "bio-kingdom-protista", "Dinoflagellate Toxicity Rationale")

    add(413, "Match Column I (Protozoan Class) with Column II (Locomotory Organelle & Example):\nColumn I:\nA. Amoeboid protozoans\nB. Flagellated protozoans\nC. Ciliated protozoans\nD. Sporozoans\nColumn II:\nI. Cilia; thousands of hair-like beats (Paramecium)\nII. Pseudopodia; blunt amoeboid extensions (Amoeba, Entamoeba)\nIII. Non-motile vegetative stage with infectious spore phase (Plasmodium)\nIV. Flagella; whip-like undulations (Trypanosoma)\nChoose the correct option:",
        "A-II, B-IV, C-I, D-III", "A-I, B-IV, C-II, D-III", "A-II, B-I, C-IV, D-III", "A-III, B-IV, C-I, D-II",
        "A", "Four classes of protozoans in NCERT.",
        "1. Amoeboid: Pseudopodia (A-II).\n2. Flagellated: Flagella (B-IV).\n3. Ciliated: Cilia (C-I).\n4. Sporozoans: Non-motile spore formers (D-III).",
        "Options B, C, and D contain mismatched organelle associations.",
        "bio-kingdom-protista", "Protozoan Classification Match")

    add(414, "Consider the following four protozoans:\n1. Amoeba proteus\n2. Entamoeba histolytica\n3. Trypanosoma gambiense\n4. Plasmodium vivax\nHow many of the above are parasitic in human beings?",
        "Three (Entamoeba, Trypanosoma, Plasmodium)", "Only one", "All four", "Two only",
        "A", "Human protozoan parasites identification.",
        "1. Amoeba proteus is a free-living freshwater organism.\n2. Entamoeba histolytica causes amoebic dysentery in humans.\n3. Trypanosoma gambiense causes sleeping sickness in humans.\n4. Plasmodium vivax causes benign tertian malaria in humans.\nThus, exactly three are human parasites.",
        "Options B, C, and D miscount the parasites.",
        "bio-kingdom-protista", "Parasitic Protozoans")

    add(415, "In Paramecium, what is the specific function of the polyploid macronucleus as opposed to the diploid micronucleus?",
        "The macronucleus controls somatic vegetative metabolism and growth, while the micronucleus controls sexual conjugation and gene recombination", "The macronucleus produces flagella, while the micronucleus produces cilia", "The macronucleus carries out photosynthesis, while the micronucleus controls phagocytosis", "The macronucleus forms silica shells, while the micronucleus forms trichocysts",
        "A", "Nuclear dimorphism functions in ciliates.",
        "1. Paramecium possesses two distinct nuclei:\n   - Macronucleus: highly polyploid, controls transcription, somatic metabolism, protein synthesis, and daily vegetative functions.\n   - Micronucleus: small and diploid, remains dormant during vegetative life but undergoes meiosis and reciprocal exchange during conjugation.",
        "Options B, C, and D assign impossible or non-existent functions.",
        "bio-kingdom-protista", "Ciliate Nuclear Dimorphism")

    add(416, "Which of the following statements is INCORRECT regarding the malarial parasite Plasmodium?",
        "Sexual reproduction (gametogony and syngamy) occurs in the human bloodstream inside erythrocytes", "The infective stage injected into humans by female Anopheles is the sporozoite", "Rupture of red blood cells releases haemozoin, which causes recurring shivering chills and high fever", "The motile zygote formed in the mosquito gut is called an ookinete",
        "A", "Plasmodium life cycle in NCERT.",
        "1. Sexual reproduction (fertilization and syngamy between micro- and macrogametes) occurs inside the stomach lumen of the female Anopheles mosquito, NOT in the human bloodstream.\n2. In humans, only asexual reproduction (schizogony in liver and erythrocytes) occurs.",
        "Options B, C, and D are verified true biological facts.",
        "bio-kingdom-protista", "Plasmodium Cycle Validation")

    add(417, "Given below are two statements regarding diatoms:\nStatement I: Diatoms are microscopic organisms that float passively in water currents and are known as phytoplankton.\nStatement II: Diatoms lack flagella at all stages of their vegetative life cycle and glide over surfaces by secreting mucilage through a raphe.",
        "Both Statement I and Statement II are correct", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are incorrect",
        "A", "Diatom motility and planktonic biology.",
        "1. Statement I is verbatim NCERT: Diatoms are microscopic and float passively in water currents (plankton).\n2. Statement II is correct: Vegetative diatoms lack flagella and use a central slit (raphe) to extrude polysaccharide mucilage for gliding motility.",
        "Options B, C, and D contradict accurate diatom biology.",
        "bio-kingdom-protista", "Diatom Planktonic Locomotion")

    add(418, "Assertion (A): Ciliated protozoans like Paramecium are actively moving organisms that exhibit coordinated locomotion and ingestive feeding.\nReason (R): They possess thousands of cilia arranged in coordinated rows whose synchronous metachronal beating drives water laden with food into the cell mouth (gullet).",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Paramecium ciliary mechanics in NCERT.",
        "1. Assertion is true: Paramecium is an actively moving ciliate.\n2. Reason is true: The synchronized wave of ciliary beats (metachronal rhythm) propels the organism and sweeps suspended nutrients directly into the oral cytostome (gullet).\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are verified and causally linked.",
        "bio-kingdom-protista", "Ciliary Mechanics Rationale")

    add(419, "Match Column I (Protist Organism) with Column II (Classification & Unique Feature):\nColumn I:\nA. Gonyaulax\nB. Euglena\nC. Entamoeba\nD. Diatom (Navicula)\nColumn II:\nI. Mixotrophic flagellate with protein pellicle and eyespot\nII. Red dinoflagellate causing red tides via saxitoxin\nIII. Unicellular producer with indestructible siliceous soap-box shell\nIV. Parasitic amoeboid protozoan causing amoebic dysentery\nChoose the correct option:",
        "A-II, B-I, C-IV, D-III", "A-I, B-II, C-IV, D-III", "A-II, B-III, C-I, D-IV", "A-IV, B-I, C-II, D-III",
        "A", "Diagnostic features of key protists.",
        "1. Gonyaulax: Red tide dinoflagellate (A-II).\n2. Euglena: Mixotrophic pellicle flagellate (B-I).\n3. Entamoeba: Amoebic dysentery parasite (C-IV).\n4. Diatom: Siliceous soap-box producer (D-III).",
        "Options B, C, and D contain erroneous associations.",
        "bio-kingdom-protista", "Protistan Genera Match")

    add(420, "In cellular slime moulds like Dictyostelium discoideum, which chemical signaling molecule is secreted by starving myxamoebae to induce chemotactic aggregation into a pseudoplasmodium?",
        "Cyclic AMP (cAMP)", "Indole-3-acetic acid (IAA)", "Abscisic acid (ABA)", "Gibberellic acid (GA3)",
        "A", "Dictyostelium cAMP chemotaxis.",
        "1. When food (bacteria) is depleted, Dictyostelium amoebae secrete cyclic adenosine monophosphate (cAMP) pulses, which act as an acrasin signaling molecule attracting surrounding amoebae to aggregate into a migrating slug.",
        "IAA, ABA, and GA3 are plant hormones, not slime mould chemotactic attractants.",
        "bio-kingdom-protista", "Slime Mould Chemotaxis")

    add(421, "Which of the following is the primary ecological role played by marine diatoms in the global biosphere?",
        "They generate up to 20-25% of Earth's total atmospheric oxygen through oceanic photosynthesis and form the energetic base of marine food pyramids", "They fix atmospheric nitrogen in deep benthic trenches", "They decompose lignified dead wood on land", "They secrete calcareous coral reef atolls",
        "A", "Ecological significance of diatoms.",
        "1. Diatoms are the chief producers in the ocean, contributing approximately 20-25% of all global photosynthetic carbon fixation and oxygen production, underpinning marine pelagic trophic webs.",
        "Options B, C, and D attribute functions of cyanobacteria, wood-decay fungi, and anthozoan cnidarians.",
        "bio-kingdom-protista", "Ecological Role of Diatoms")

    add(422, "Given below are two statements regarding Amoeboid protozoans:\nStatement I: Freshwater amoebae like Amoeba proteus possess a contractile vacuole that prevents them from swelling and bursting due to endosmotic water influx.\nStatement II: Marine amoebae possess silica shells on their cell surface, whereas Entamoeba histolytica lives as an internal parasite in the human colon.",
        "Both Statement I and Statement II are correct", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are incorrect",
        "A", "Amoeboid protozoan adaptations in NCERT.",
        "1. Statement I is true: Freshwater forms require contractile vacuoles for osmoregulation.\n2. Statement II is verbatim NCERT: 'Marine forms have silica shells on their surface. Some of them such as Entamoeba are parasites'.\n3. Both statements are correct.",
        "Options B, C, and D contradict accurate biology.",
        "bio-kingdom-protista", "Amoeboid Adaptations")

    add(423, "Assertion (A): Euglenoids flex and bend their body shape easily during locomotion without tearing.\nReason (R): Instead of a rigid cellulose cell wall, euglenoids possess a flexible, protein-rich elastic layer beneath the plasma membrane called a pellicle.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Euglenoid pellicle mechanics in NCERT.",
        "1. Assertion is true: Euglenoids show euglenoid movement (metaboly), flexing their elongated body shape.\n2. Reason is true: The proteinaceous pellicle allows elasticity and body flexibility.\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally connected.",
        "bio-kingdom-protista", "Euglenoid Pellicle Mechanics")

    add(424, "Which of the following stages in the life cycle of Plasmodium vivax is diploid (2n)?",
        "Ookinete (and early oocyst)", "Sporozoite", "Merozoite", "Gametocyte",
        "A", "Ploidy levels in Plasmodium life cycle.",
        "1. Plasmodium is haplontic: Sporozoites, merozoites, trophozoites, and gametocytes are all haploid (n).\n2. Fertilization of micro- and macrogametes in the mosquito stomach produces a diploid zygote, which elongates into a motile ookinete (2n) that forms an oocyst where meiosis restores haploidy.",
        "Sporozoites, merozoites, and gametocytes are all haploid.",
        "bio-kingdom-protista", "Plasmodium Ploidy")

    add(425, "Which protozoan is commonly known as the 'slipper animalcule' due to its asymmetric foot-like shape?",
        "Paramecium caudatum", "Amoeba proteus", "Euglena viridis", "Trypanosoma gambiense",
        "A", "Paramecium common moniker.",
        "1. Paramecium caudatum has an elongated, rounded anterior and pointed posterior resembling the sole of a slipper, earning the classical moniker 'slipper animalcule'.",
        "Amoeba is amorphous. Euglena is spindle-shaped. Trypanosoma is ribbon-like.",
        "bio-kingdom-protista", "Protozoan Morphology")

    add(426, "Match Column I (Disease) with Column II (Protozoan Vector):\nColumn I:\nA. Malaria\nB. African Sleeping Sickness\nC. Kala-azar\nD. Amoebiasis\nColumn II:\nI. Sandfly (Phlebotomus)\nII. Female Anopheles mosquito\nIII. Housefly / Fecally contaminated food & water\nIV. Tsetse fly (Glossina)\nChoose the correct option:",
        "A-II, B-IV, C-I, D-III", "A-II, B-I, C-IV, D-III", "A-IV, B-II, C-I, D-III", "A-I, B-IV, C-II, D-III",
        "A", "Protozoan diseases and transmission routes.",
        "1. Malaria: Female Anopheles mosquito (A-II).\n2. Sleeping sickness: Tsetse fly (B-IV).\n3. Kala-azar: Sandfly (C-I).\n4. Amoebiasis: Fecal-oral contamination (D-III).",
        "Options B, C, and D assign incorrect vectors.",
        "bio-kingdom-protista", "Disease Transmission Match")

    add(427, "Given below are two statements regarding Dinoflagellates:\nStatement I: Most dinoflagellates are marine and photosynthetic, exhibiting yellow, green, brown, blue, or red pigmentation depending on the main pigments present in their cells.\nStatement II: Dinoflagellates completely lack flagella and depend entirely on wind currents for transport.\nIn light of the above statements, choose the most appropriate answer:",
        "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
        "A", "Dinoflagellate pigments and flagella in NCERT.",
        "1. Statement I is verbatim NCERT: Most are marine and photosynthetic; pigments vary from yellow to red.\n2. Statement II is false: Dinoflagellates possess two active flagella (one longitudinal, one transverse in a groove) that produce spinning motility.",
        "Option B is wrong because Statement II is false. Option C is wrong because Statement I is correct.",
        "bio-kingdom-protista", "Dinoflagellate Biology")

    add(428, "In Paramecium, the specialized pore through which undigested food vacuoles are exocytosed to the outside is the:",
        "Cytoproct (cytopyge / anal spot)", "Cytostome (cell mouth)", "Contractile vacuole pore", "Oral groove",
        "A", "Paramecium cytoproct.",
        "1. In Paramecium, after cyclosis and lysosomal digestion, undigested fecal residue is discharged through a fixed permanent opening in the pellicle called the cytoproct (cytopyge).",
        "Cytostome is the ingestive cell mouth. Oral groove directs food inwards.",
        "bio-kingdom-protista", "Paramecium Digestive System")

    add(429, "Assertion (A): Diatoms do not easily decay and accumulate over geological epochs to form diatomaceous earth deposits.\nReason (R): Diatom frustules are composed of hydrated amorphous silica, a glass-like mineral that is indestructible by biological and enzymatic decomposition.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Indestructibility of diatom frustules.",
        "1. Assertion is true: Diatoms accumulate into diatomaceous earth.\n2. Reason is true: Silica (SiO2·nH2O) is impervious to bacterial and fungal enzymatic decomposition, preserving the glass shells indefinitely.\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally aligned.",
        "bio-kingdom-protista", "Diatomaceous Earth Durability")

    add(430, "Which of the following protists possesses two anterior flagella, lacks a cytostome, and stores carbohydrate as floridean starch or paramylon?",
        "Euglena", "Paramecium", "Plasmodium", "Amoeba",
        "A", "Euglena diagnostic combination.",
        "1. Euglena possesses two flagella inserted in an anterior reservoir and stores reserve beta-glucan as paramylon granules.",
        "Paramecium has cilia. Plasmodium has no locomotory organs. Amoeba has pseudopodia.",
        "bio-kingdom-protista", "Protist Comparison")

    add(431, "Consider the following statements regarding the life cycle of Plasmodium:\nI. Pre-erythrocytic schizogony occurs inside human liver hepatocytes.\nII. Erythrocytic schizogony produces merozoites that infect new red blood cells.\nIII. Gametocytes are produced in the human bloodstream but cannot mature or fertilize without the lower temperature and chemical environment of the mosquito stomach.\nIV. Sporozoites are stored in the thoracic muscles of the male Anopheles mosquito.\nWhich of the above statements are CORRECT?",
        "I, II, and III only", "I and II only", "II, III, and IV only", "All I, II, III, and IV",
        "A", "Malarial cycle detailed anatomy.",
        "1. Statements I, II, and III are correct: Liver schizogony precedes RBC schizogony, and gametocytes require mosquito gastric conditions for exflagellation and syngamy.\n2. Statement IV is false: Sporozoites migrate to and are stored in the SALIVARY GLANDS of the FEMALE Anopheles mosquito (male mosquitoes feed on plant sap, not blood, and do not transmit malaria).",
        "Options containing IV are incorrect.",
        "bio-kingdom-protista", "Plasmodium Life Cycle Facts")

    add(432, "Which of the following organisms causes 'sleeping sickness' and displays polymorphic stages (trypomastigote, epimastigote) during its life cycle?",
        "Trypanosoma brucei / gambiense", "Entamoeba coli", "Leishmania tropica", "Trichomonas vaginalis",
        "A", "Trypanosoma polymorphism.",
        "1. Trypanosoma undergoes morphological changes between its human host (slender and stumpy trypomastigotes in blood/CSF) and its tsetse fly insect vector (epimastigotes in salivary glands).",
        "Entamoeba coli is a harmless commensal amoeba. Leishmania causes cutaneous leishmaniasis (oriental sore). Trichomonas causes vaginitis.",
        "bio-kingdom-protista", "Flagellate Polymorphism")

    add(433, "Which of the following statements is INCORRECT regarding Kingdom Protista?",
        "All protists reproduce strictly by asexual binary fission and never undergo any sexual fusion or zygote formation", "Protista includes Chrysophytes, Dinoflagellates, Euglenoids, Slime moulds, and Protozoans", "Being eukaryotes, their cells possess a well-defined nucleus and other membrane-bound organelles", "Some protists have flagella or cilia with a 9+2 axoneme arrangement",
        "A", "Protistan sexual reproduction in NCERT.",
        "1. NCERT explicitly states: 'Protists reproduce asexually and sexually by a process involving cell fusion and zygote formation'.\n2. Thus, claiming they reproduce strictly asexually and never undergo sexual fusion is completely false.",
        "Options B, C, and D are all verified true statements from NCERT.",
        "bio-kingdom-protista", "Protistan Sexual Reproduction")

    add(434, "Given below are two statements regarding Protozoans:\nStatement I: All protozoans are heterotrophs and live as predators or parasites, believed to be primitive relatives of animals.\nStatement II: Sporozoans like Plasmodium are actively motile using coordinated undulating flagella throughout their entire life cycle.\nIn light of the above statements, choose the most appropriate answer:",
        "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
        "A", "Protozoan heterotrophy and sporozoan non-motility.",
        "1. Statement I is verbatim NCERT: All protozoans are heterotrophs, primitive relatives of animals.\n2. Statement II is false: Sporozoans lack cilia, flagella, and pseudopodia in their vegetative stage; they are non-motile endoparasites.",
        "Option B is wrong because Statement II is false. Option C is wrong because Statement I is correct.",
        "bio-kingdom-protista", "Protozoan General Evaluation")

    add(435, "What is the primary factor that causes the death of marine fishes during a 'red tide' caused by Dinoflagellates?",
        "Release of potent neurotoxins (such as saxitoxin) and severe depletion of dissolved oxygen caused by decaying algal biomass", "Direct parasitism where dinoflagellates invade fish brains", "Ingestion of silica needles that tear fish gills", "Excessive production of carbon dioxide that boils ocean waters",
        "A", "Fish mortality mechanism in red tides.",
        "1. High cell density of dinoflagellates releases lethal neurotoxins (saxitoxins) into the water column.\n2. In addition, when the massive bloom collapses, aerobic bacterial decomposition severely depletes dissolved oxygen (anoxia), suffocating fish.",
        "Dinoflagellates do not have silica needles (which belong to diatoms) or cause oceans to boil.",
        "bio-kingdom-protista", "Red Tide Marine Lethality")

    add(436, "Which of the following protists is characterized by having two flagella located in grooves, stiff cellulose plates, and causes bioluminescent glowing waves?",
        "Noctiluca / Dinoflagellates", "Euglena gracilis", "Paramecium aurelia", "Entamoeba histolytica",
        "A", "Diagnostic traits of bioluminescent dinoflagellates.",
        "1. Dinoflagellates (including Noctiluca, Pyrodinium) have stiff cellulose plates, two groove flagella, and luciferase-luciferin bioluminescence causing glowing waves.",
        "Euglena has a pellicle. Paramecium is ciliated. Entamoeba is an amoeba.",
        "bio-kingdom-protista", "Dinoflagellate Identification")

    add(437, "Assertion (A): Diatoms are termed the 'chief producers in the oceans'.\nReason (R): Diatoms lack photosynthetic pigments and depend entirely on absorbing dead organic matter from oceanic abyss.",
        "(A) is true but (R) is false", "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "Both (A) and (R) are false",
        "A", "Diatom ocean autotrophy in NCERT.",
        "1. Assertion is true: NCERT explicitly calls diatoms the 'chief producers in the oceans'.\n2. Reason is false: Diatoms are photosynthetic autotrophs packed with chlorophyll a, c, and fucoxanthin; they are not saprophytes.",
        "Options B, C, and D are invalid because Reason is blatantly false.",
        "bio-kingdom-protista", "Chief Ocean Producers Evaluation")

    # --- FUNGI HARD (Q438 - Q468) ---
    add(438, "Given below are two statements regarding Fungal classification:\nStatement I: The morphology of the mycelium, mode of spore formation, and fruiting bodies form the basis for dividing Kingdom Fungi into various classes.\nStatement II: In Phycomycetes, asexual spores (zoospores or aplanospores) are produced endogenously in sporangia, and the mycelium is aseptate and coenocytic.\nIn light of the above statements, choose the most appropriate answer:",
        "Both Statement I and Statement II are correct", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are incorrect",
        "A", "NCERT criteria for fungal classification.",
        "1. Statement I is verbatim NCERT: Morphology of mycelium, mode of spore formation, and fruiting bodies form the basis of fungal classification.\n2. Statement II is verbatim NCERT: In Phycomycetes, asexual spores are endogenously formed in sporangium, and mycelium is aseptate and coenocytic.\n3. Both statements are correct.",
        "Options B, C, and D contradict accurate NCERT fungal biology.",
        "bio-kingdom-fungi", "Fungal Division Criteria")

    add(439, "Assertion (A): Deuteromycetes are commonly known as 'imperfect fungi' (Fungi Imperfecti).\nReason (R): Only the asexual or vegetative phases of these fungi are known; once their sexual stages were discovered, they were moved to Ascomycetes or Basidiomycetes.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Why Deuteromycetes are imperfect in NCERT.",
        "1. Assertion is true: Deuteromycetes are called imperfect fungi.\n2. Reason is true: The term 'imperfect' specifically denotes the absence or ignorance of a teleomorph (perfect/sexual stage).\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally aligned.",
        "bio-kingdom-fungi", "Deuteromycetes Imperfection Rationale")

    add(440, "Match Column I (Fungal Class) with Column II (Mycelium, Spore Formation & Representative Genera):\nColumn I:\nA. Phycomycetes\nB. Ascomycetes\nC. Basidiomycetes\nD. Deuteromycetes\nColumn II:\nI. Septate, branched; conidia asexual; asci with endogenous ascospores (Penicillium, Neurospora)\nII. Coenocytic, aseptate; sporangiospores endogenous; zygospores (Mucor, Rhizopus, Albugo)\nIII. Septate, branched; asexual conidia only; litter decomposers (Alternaria, Trichoderma)\nIV. Septate, branched; basidia with exogenous basidiospores; mushrooms, rusts (Agaricus, Puccinia)\nChoose the correct option:",
        "A-II, B-I, C-IV, D-III", "A-I, B-II, C-IV, D-III", "A-II, B-IV, C-I, D-III", "A-III, B-I, C-II, D-IV",
        "A", "Comprehensive fungal classes match.",
        "1. Phycomycetes: Coenocytic, zygospores, Mucor/Rhizopus (A-II).\n2. Ascomycetes: Septate, asci with ascospores, Penicillium/Neurospora (B-I).\n3. Basidiomycetes: Basidia with basidiospores, Agaricus/Puccinia (C-IV).\n4. Deuteromycetes: Conidia only, no sexual stage, Alternaria/Trichoderma (D-III).",
        "Options B, C, and D mismatch classes with morphological diagnostic features.",
        "bio-kingdom-fungi", "Fungal Classes Comprehensive Match")

    add(441, "Consider the following statements regarding the sexual cycle of fungi:\nI. Plasmogamy involves the fusion of protoplasms between two motile or non-motile gametes.\nII. Karyogamy is the fusion of two haploid nuclei to form a diploid nucleus.\nIII. In Ascomycetes and Basidiomycetes, plasmogamy is immediately followed by karyogamy without any intervening dikaryophase.\nIV. Meiosis in the zygote results in haploid spores.\nWhich of the above statements are CORRECT?",
        "I, II, and IV only", "I and II only", "III and IV only", "All I, II, III, and IV",
        "A", "Sexual cycle steps in NCERT.",
        "1. Statements I, II, and IV are verbatim steps from NCERT: Plasmogamy -> Karyogamy -> Meiosis.\n2. Statement III is false: In Ascomycetes and Basidiomycetes, karyogamy is delayed, resulting in an intervening dikaryotic stage (n + n, two nuclei per cell) called the dikaryophase.",
        "Options containing III are incorrect because higher fungi possess a prolonged dikaryophase.",
        "bio-kingdom-fungi", "Fungal Sexual Cycle Steps")

    add(442, "Given below are two statements:\nStatement I: In Basidiomycetes, sex organs are completely absent, yet sexual reproduction occurs by the fusion of two vegetative or somatic cells of different strains.\nStatement II: In Basidiomycetes, four basidiospores are formed endogenously inside each club-shaped basidium.\nIn light of the above statements, choose the most appropriate answer:",
        "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
        "A", "Basidiomycete reproduction in NCERT.",
        "1. Statement I is verbatim NCERT: 'The sex organs are absent, but plasmogamy is brought about by fusion of two vegetative or somatic cells of different strains or genotypes'.\n2. Statement II is false: Basidiospores are produced EXOGENOUSLY on the basidium (on tiny sterigmata), NOT endogenously.",
        "Option B is wrong because Statement II is false. Option C is wrong because Statement I is correct.",
        "bio-kingdom-fungi", "Basidiomycete Sexual Biology")

    add(443, "Assertion (A): Neurospora crassa is extensively used as a model organism in biochemical genetics and molecular biology.\nReason (R): Neurospora produces meiotic ascospores arranged in a linear ordered octad inside the ascus, allowing precise genetic tetrad analysis.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Neurospora in genetics (Drosophila of plant kingdom).",
        "1. Assertion is true: Neurospora is extensively used in biochemical genetics (Beadle & Tatum's one gene-one enzyme hypothesis).\n2. Reason is true: Ascospores are arranged in a strict linear order inside the narrow ascus reflecting the exact sequence of meiotic chromatid segregation (ordered tetrad analysis).\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally linked.",
        "bio-kingdom-fungi", "Neurospora Genetics Rationale")

    add(444, "Match Column I (Fungus) with Column II (Disease / Economic Significance):\nColumn I:\nA. Puccinia graminis\nB. Ustilago tritici\nC. Claviceps purpurea\nD. Albugo candida\nColumn II:\nI. Ergot of rye (ergot alkaloids / ergotism)\nII. White rust on leaves of mustard (crucifers)\nIII. Black stem rust of wheat\nIV. Loose smut of wheat\nChoose the correct option:",
        "A-III, B-IV, C-I, D-II", "A-IV, B-III, C-I, D-II", "A-III, B-I, C-IV, D-II", "A-II, B-IV, C-I, D-III",
        "A", "Pathogenic fungi and their plant diseases.",
        "1. Puccinia graminis: Black stem rust of wheat (A-III).\n2. Ustilago tritici: Loose smut of wheat (B-IV).\n3. Claviceps purpurea: Ergot of rye (C-I).\n4. Albugo candida: White rust of mustard (D-II).",
        "Options B, C, and D swap fungal pathogens.",
        "bio-kingdom-fungi", "Fungal Pathogens Match")

    add(445, "Which of the following fungal spores is DIPLOID (2n)?",
        "Zygospore (immediately after karyogamy before meiosis)", "Ascospore", "Basidiospore", "Conidiospore",
        "A", "Ploidy of fungal spores.",
        "1. Ascospores, basidiospores, and conidia are haploid (n) products of meiosis or mitotic conidiogenesis.\n2. A zygospore (formed by gametangial fusion in Phycomycetes/Zygomycetes) contains a diploid (2n) zygote nucleus before undergoing germination meiosis.",
        "Ascospores, basidiospores, and conidia are always haploid.",
        "bio-kingdom-fungi", "Fungal Spore Ploidy")

    add(446, "Consider the following four fungi:\n1. Morchella (Morel)\n2. Tuber (Truffle)\n3. Agaricus (Button mushroom)\n4. Amanita phalloides (Death cap)\nHow many of the above belong to Ascomycetes and are edible delicacies?",
        "Two (Morchella and Tuber)", "Only one", "Three", "All four",
        "A", "Edible Ascomycetes identification in NCERT.",
        "1. Morchella (morel) and Tuber (truffle) are Ascomycetes with edible fruiting bodies.\n2. Agaricus is edible but belongs to Basidiomycetes (not Ascomycetes).\n3. Amanita phalloides belongs to Basidiomycetes and is deadly poisonous.\nThus, exactly two (Morchella and Tuber) satisfy both conditions.",
        "Options B, C, and D miscount the eligible members.",
        "bio-kingdom-fungi", "Edible Ascomycetes Count")

    add(447, "Which of the following statements regarding the Dikaryophase in fungi is INCORRECT?",
        "It is a prominent feature of Phycomycetes where two nuclei fuse immediately during plasmogamy without any delay", "It represents an intervening condition where cells possess two nuclei (n + n)", "It is characteristic of Ascomycetes and Basidiomycetes", "Later, the two parental nuclei fuse (karyogamy) and the cells become diploid",
        "A", "Dikaryophase distribution in NCERT.",
        "1. In Phycomycetes, the fusion of two haploid cells immediately results in a diploid cell (2n); there is NO dikaryophase.\n2. Dikaryophase (n + n) occurs specifically in Ascomycetes and Basidiomycetes.\n3. Therefore, Statement A is completely incorrect.",
        "Options B, C, and D are verified true statements from NCERT.",
        "bio-kingdom-fungi", "Dikaryophase Evaluation")

    add(448, "Given below are two statements:\nStatement I: Conidia are asexual spores produced exogenously at the tips of specialized hyphae called conidiophores in Ascomycetes and Deuteromycetes.\nStatement II: Conidia germinate directly to produce a new mycelium.\nIn light of the above statements, choose the most appropriate answer:",
        "Both Statement I and Statement II are correct", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are incorrect",
        "A", "Conidia genesis and germination in NCERT.",
        "1. Statement I is verbatim NCERT: Asexual spores are conidia produced exogenously on the special mycelium called conidiophores.\n2. Statement II is verbatim NCERT: Conidia on germination produce mycelium.\n3. Both statements are correct.",
        "Options B, C, and D contradict accurate biology.",
        "bio-kingdom-fungi", "Conidial Biology")

    add(449, "Assertion (A): Yeasts are unicellular fungi that reproduce asexually by budding and sexually by ascospore formation.\nReason (R): Even though yeasts lack a filamentous multicellular mycelium, their sexual ascospore formation within an ascus places them systematically in Ascomycetes.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Yeast systematic placement in Ascomycetes.",
        "1. Assertion is true: Yeasts are unicellular ascomycetes.\n2. Reason is true: The presence of an ascus holding ascospores (as in Saccharomyces) is the diagnostic criterion for classification within Ascomycetes despite their non-filamentous morphology.\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally aligned.",
        "bio-kingdom-fungi", "Yeast Ascomycete Classification")

    add(450, "Clamp connections in Basidiomycetes are specialized structures whose primary cellular function is to:",
        "Ensure that sister nuclei of two different mating types are equally segregated into daughter cells during dikaryotic hyphal mitosis", "Absorb dissolved carbohydrates from host phloem", "Discharge basidiospores forcefully into air currents", "Seal septal pores during mechanical hyphal rupture",
        "A", "Clamp connections function.",
        "1. When a binucleate (dikaryotic) cell divides, one nucleus divides along the main hyphal axis while the other divides inside a lateral curved bypass bridge (clamp connection).\n2. This guarantees that both daughter compartments receive one nucleus of each mating type.",
        "Host absorption is by haustoria. Pore sealing is by Woronin bodies or dolipores.",
        "bio-kingdom-fungi", "Clamp Connection Cytology")

    add(451, "Match Column I (Fungus) with Column II (Class):\nColumn I:\nA. Albugo\nB. Claviceps\nC. Ustilago\nD. Trichoderma\nColumn II:\nI. Basidiomycetes\nII. Deuteromycetes\nIII. Phycomycetes\nIV. Ascomycetes\nChoose the correct option:",
        "A-III, B-IV, C-I, D-II", "A-IV, B-III, C-I, D-II", "A-III, B-I, C-IV, D-II", "A-II, B-IV, C-I, D-III",
        "A", "Fungal genera to taxonomic classes match.",
        "1. Albugo: Phycomycetes (A-III).\n2. Claviceps: Ascomycetes (B-IV).\n3. Ustilago: Basidiomycetes (C-I).\n4. Trichoderma: Deuteromycetes (D-II).",
        "Options B, C, and D confuse class assignments.",
        "bio-kingdom-fungi", "Fungal Class Matching")

    add(452, "In the wheat rust fungus Puccinia graminis, the complete life cycle involves five distinct spore stages produced on two alternate hosts. The sequence of spore formation is:",
        "Pycniospores -> Aeciospores -> Urediniospores -> Teliospores -> Basidiospores", "Urediniospores -> Teliospores -> Aeciospores -> Basidiospores -> Pycniospores", "Basidiospores -> Teliospores -> Urediniospores -> Aeciospores -> Pycniospores", "Aeciospores -> Pycniospores -> Basidiospores -> Teliospores -> Urediniospores",
        "A", "Puccinia 5-spore ontogenetic sequence.",
        "1. Puccinia spore stages in strict order:\n   - Stage 0: Pycniospores (spermatia) on upper Berberis leaf.\n   - Stage I: Aeciospores on lower Berberis leaf (transfers to wheat).\n   - Stage II: Urediniospores on wheat (repeating summer spores).\n   - Stage III: Teliospores on wheat (overwintering two-celled spores).\n   - Stage IV: Basidiospores from germinating teliospores (infects barberry).",
        "Options B, C, and D disrupt the invariant sequential progression.",
        "bio-kingdom-fungi", "Puccinia Ontogeny")

    add(453, "Which of the following compounds is the principal structural polysaccharide forming the microfibrillar network in fungal cell walls?",
        "Chitin (poly-N-acetylglucosamine)", "Cellulose (poly-beta-1,4-glucose)", "Peptidoglycan (murein)", "Pectin (polygalacturonic acid)",
        "A", "Fungal cell wall biochemistry.",
        "1. The fungal cell wall is composed of chitin, a linear homopolymer of beta-1,4-linked N-acetylglucosamine (NAG) units arranged in microfibrils embedded in an amorphous glucan matrix.",
        "Cellulose and pectin form plant walls. Peptidoglycan forms bacterial walls.",
        "bio-kingdom-fungi", "Chitin Macromolecule")

    add(454, "Given below are two statements regarding Mycorrhizae:\nStatement I: Mycorrhiza is a symbiotic mutualistic association between a fungus and the roots of higher plants like Pinus.\nStatement II: Pinus seeds cannot germinate and establish without the presence of mycorrhizal fungal association.\nIn light of the above statements, choose the most appropriate answer:",
        "Both Statement I and Statement II are correct", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are incorrect",
        "A", "Pinus and mycorrhizal obligate symbiosis in NCERT.",
        "1. Statement I is verbatim NCERT: Fungi form symbiotic associations with roots of higher plants as mycorrhiza.\n2. Statement II is an explicit NCERT fact: Pinus seeds have an obligate association with mycorrhiza and cannot germinate or establish without it.\n3. Both statements are correct.",
        "Options B, C, and D contradict verified NCERT biology.",
        "bio-kingdom-fungi", "Mycorrhiza Obligate Mutualism")

    add(455, "Assertion (A): Deuteromycetes play an indispensable ecological role in terrestrial ecosystems.\nReason (R): A large number of Deuteromycetes are efficient decomposers of cellulose and leaf litter, facilitating rapid mineral and nutrient cycling in soils.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Deuteromycete ecological role in NCERT.",
        "1. Assertion is true: Deuteromycetes are ecologically vital.\n2. Reason is verbatim NCERT: 'A large number of them are decomposers of litter and help in mineral cycling'.\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally aligned.",
        "bio-kingdom-fungi", "Deuteromycetes Ecology Rationale")

    add(456, "Which of the following pairs represents members of the same fungal class?",
        "Agaricus, Ustilago, and Puccinia (Basidiomycetes)", "Rhizopus, Penicillium, and Puccinia", "Mucor, Aspergillus, and Trichoderma", "Alternaria, Albugo, and Claviceps",
        "A", "Intra-class fungal groupings.",
        "1. Agaricus, Ustilago, and Puccinia all belong to Basidiomycetes.\n2. Rhizopus is Phycomycetes, Penicillium is Ascomycetes, Puccinia is Basidiomycetes.\n3. Mucor is Phycomycetes, Aspergillus is Ascomycetes, Trichoderma is Deuteromycetes.\n4. Alternaria is Deuteromycetes, Albugo is Phycomycetes, Claviceps is Ascomycetes.",
        "Options B, C, and D mix genera from different taxonomic classes.",
        "bio-kingdom-fungi", "Fungal Class Consistency")

    add(457, "In Ascomycetes, ascospores are released from the ascus by which primary mechanism?",
        "Turgor pressure build-up inside the mature ascus bursting the tip (operculum or pore) to shoot spores into the air", "Passive decay of the ascus wall in winter", "Insect ingestion and excretion only", "Amoeboid creeping of individual ascospores",
        "A", "Ascospore discharge mechanics.",
        "1. In Ascomycetes, mature asci accumulate high internal hydrostatic pressure (via glycerol/sugar accumulation) until the apical operculum or pore ruptures, shooting ascospores centimeters into ambient air currents.",
        "Options B, C, and D misrepresent ascospore discharge.",
        "bio-kingdom-fungi", "Ascospore Explosive Discharge")

    add(458, "Which of the following fungi produces the antibiotic Penicillin, and who discovered it in 1928?",
        "Penicillium notatum; Alexander Fleming", "Penicillium chrysogenum; Louis Pasteur", "Aspergillus niger; Robert Koch", "Streptomyces griseus; Selman Waksman",
        "A", "Penicillin discovery milestone.",
        "1. Alexander Fleming discovered penicillin in 1928 from the contaminating mould Penicillium notatum while working on Staphylococci.\n2. Ernst Chain and Howard Florey later established its full clinical potential as an antibiotic.",
        "Pasteur refuted spontaneous generation. Koch isolated anthrax bacillus. Waksman isolated streptomycin from actinomycetes.",
        "bio-kingdom-fungi", "Penicillin Historical Discovery")

    add(459, "Consider the following statements regarding the cell walls of fungi:\nI. Fungal cell walls lack cellulose, except in Oomycetes where cellulose and glucans predominate.\nII. Chitin is a polymer of N-acetylglucosamine units linked by beta-1,4-glycosidic bonds.\nIII. The presence of a chitinous cell wall was one of Whittaker's major reasons for separating fungi from plants into an independent kingdom.\nWhich of the above statements are CORRECT?",
        "I, II, and III", "I and II only", "II and III only", "I and III only",
        "A", "Fungal cell wall evolution and taxonomy.",
        "1. All three statements are correct: Oomycetes (like Phytophthora, Pythium) have cellulose walls; True fungi have chitin walls (beta-1,4-NAG); Whittaker split Fungi from Plantae largely due to heterotrophy and chitin walls.",
        "Options B, C, and D omit one of the verified truths.",
        "bio-kingdom-fungi", "Fungal Cell Wall Evaluation")

    add(460, "The rusts and smuts belong to which fungal class, and how do they differ regarding teliospore germination?",
        "Basidiomycetes; Puccinia causes rust with 5 spore stages on two hosts, whereas Ustilago causes smut with black sooty masses of teliospores (chlamydospores)", "Ascomycetes; both produce 8 ascospores inside asci", "Phycomycetes; both produce motile zoospores", "Deuteromycetes; both lack any sexual spores",
        "A", "Rusts vs smuts comparative biology.",
        "1. Both Puccinia (rust) and Ustilago (smut) are Basidiomycetes.\n2. Rusts have multiple spore forms and infect wheat vegetative organs; Smuts replace ovaries/grains with dark powdery masses of teliospores.",
        "Options B, C, and D assign incorrect fungal classes.",
        "bio-kingdom-fungi", "Rusts and Smuts")

    add(461, "Which of the following statements regarding Albugo candida is INCORRECT?",
        "It belongs to Basidiomycetes and forms exogenous basidiospores on sterigmata", "It is an obligate parasite on cruciferous plants like mustard", "It causes white rust (or white blisters) on leaves and stems", "Its mycelium is aseptate and coenocytic",
        "A", "Albugo candida classification.",
        "1. Albugo candida belongs to PHYCOMYCETES (Oomycetes), NOT Basidiomycetes.\n2. It reproduces sexually by oogamy producing oospores, and asexually by sporangia producing zoospores.\n3. Therefore, claiming it belongs to Basidiomycetes is false.",
        "Options B, C, and D are verified true statements from NCERT.",
        "bio-kingdom-fungi", "Albugo candida Profile")

    add(462, "Given below are two statements:\nStatement I: Yeasts undergo alcoholic fermentation under anaerobic conditions, converting glucose into ethanol and carbon dioxide catalyzed by zymase complex.\nStatement II: Yeasts possess a complex multicellular mycelium with dolipore septa and clamp connections.\nIn light of the above statements, choose the most appropriate answer:",
        "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
        "A", "Yeast biochemistry vs cytology.",
        "1. Statement I is true: Yeasts ferment sugars to ethanol and CO2.\n2. Statement II is false: Yeasts are strictly UNICELLULAR fungi; they lack mycelium, dolipore septa, and clamp connections (which belong to filamentous Basidiomycetes).",
        "Option B is wrong because Statement II is false. Option C is wrong because Statement I is correct.",
        "bio-kingdom-fungi", "Yeast Cellular Biology")

    add(463, "Assertion (A): In Basidiomycetes, vegetative reproduction by fragmentation is common, but asexual spores are generally not found.\nReason (R): Basidiomycetes rely primarily on vegetative hyphal fragmentation and somatic cell fusion (plasmogamy) followed by direct basidiospore formation.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Basidiomycetes asexual reproduction in NCERT.",
        "1. Assertion is verbatim NCERT: 'Asexual spores are generally not found, but vegetative reproduction by fragmentation is common'.\n2. Reason correctly explains that somatic hyphal anastomosis bypasses conventional asexual sporulation.\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are verified and causally linked.",
        "bio-kingdom-fungi", "Basidiomycete Asexual Absence Rationale")

    add(464, "Which of the following classes of fungi is characterized by having septate hyphae, exogenous conidia, and sexual reproduction involving asci arranged in ascocarps?",
        "Ascomycetes", "Phycomycetes", "Basidiomycetes", "Deuteromycetes",
        "A", "Diagnostic traits of Ascomycetes.",
        "1. Ascomycetes possess septate branched hyphae, reproduce asexually by exogenous conidia on conidiophores, and reproduce sexually via endogenous ascospores inside asci aggregated in ascocarps.",
        "Phycomycetes have coenocytic hyphae. Basidiomycetes produce basidiospores on basidia. Deuteromycetes lack sexual stages.",
        "bio-kingdom-fungi", "Ascomycete Diagnosis")

    add(465, "What is the primary morphological difference between a coenocytic hypha and a septate hypha?",
        "A coenocytic hypha lacks internal transverse septa and forms a continuous multinucleate tube, whereas a septate hypha is partitioned into compartments by cross-walls", "A coenocytic hypha contains chloroplasts, while a septate hypha does not", "A coenocytic hypha has cellulose walls, while a septate hypha has peptidoglycan walls", "A coenocytic hypha is diploid, while a septate hypha is polyploid",
        "A", "Coenocytic vs septate hypha definition.",
        "1. NCERT explicitly distinguishes: 'Some hyphae are continuous tubes filled with multinucleated cytoplasm—these are called coenocytic hyphae. Others have septae or cross walls in their hyphae'.",
        "Options B, C, and D introduce unrelated or false biochemical distinctions.",
        "bio-kingdom-fungi", "Hyphal Cytology")

    add(466, "Which of the following represents an accurate sequence of events during sexual reproduction in an Ascomycete fungus?",
        "Plasmogamy -> Dikaryophase -> Karyogamy -> Meiosis in ascus -> Post-meiotic mitosis -> 8 endogenous ascospores", "Karyogamy -> Plasmogamy -> Meiosis -> 4 exogenous basidiospores", "Meiosis -> Plasmogamy -> Karyogamy -> Zygospore formation", "Plasmogamy -> Meiosis -> Karyogamy -> Conidia formation",
        "A", "Ascomycete sexual sequence.",
        "1. Strict sequence in Ascomycetes: Plasmogamy creates dikaryon (n + n); ascogenous hypha forms crozier; Karyogamy produces 2n zygote in young ascus; Meiosis yields 4 haploid nuclei; single mitosis doubles to 8 haploid ascospores endogenously.",
        "Options B, C, and D violate the chronological order of sexual cytology.",
        "bio-kingdom-fungi", "Ascomycete Sexual Sequence")

    add(467, "Which of the following fungi is known as the 'bracket fungus' or 'shelf fungus' that grows as woody brackets on tree trunks?",
        "Polyporus / Ganoderma (Basidiomycetes)", "Penicillium notatum (Ascomycetes)", "Mucor mucedo (Phycomycetes)", "Trichoderma viride (Deuteromycetes)",
        "A", "Bracket fungi identification.",
        "1. Bracket fungi (e.g., Polyporus, Ganoderma) belong to Basidiomycetes; they produce hard, woody, perennial basidiocarps projecting like horizontal shelves from tree trunks.",
        "Penicillium, Mucor, and Trichoderma do not form woody bracket basidiocarps.",
        "bio-kingdom-fungi", "Bracket Fungi")

    add(468, "Assertion (A): Morels and truffles are praised globally as edible delicacies.\nReason (R): Both morels and truffles belong to Ascomycetes and produce non-toxic, highly aromatic ascocarps.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Morels and truffles in NCERT.",
        "1. Assertion is verbatim NCERT: 'Morels and truffles are considered delicacies'.\n2. Reason is true: Morchella (morels) and Tuber (truffles) produce edible ascocarps rich in distinctive flavor compounds.\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are verified and causally linked.",
        "bio-kingdom-fungi", "Edible Ascocarps Rationale")

    # --- ACELLULAR HARD (Q469 - Q500) ---
    add(469, "Given below are two statements regarding Viruses:\nStatement I: Viruses are obligate intracellular parasites that contain either DNA or RNA, but never both in the same virion.\nStatement II: Viruses possess their own independent ribosome system and ATP-generating metabolic enzymes outside host cells.\nIn light of the above statements, choose the most appropriate answer:",
        "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
        "A", "Viral obligate intracellular nature in NCERT.",
        "1. Statement I is verbatim NCERT: 'No virus contains both RNA and DNA... Viruses are obligate parasites'.\n2. Statement II is false: Viruses completely lack ribosomes, mitochondria, and metabolic machinery outside host cells; they depend entirely on host enzymes.",
        "Option B is wrong because Statement II is false. Option C is wrong because Statement I is correct.",
        "bio-viruses-viroids-lichens", "Viral Obligate Parasitism")

    add(470, "Assertion (A): Viroids are distinctly different from viruses.\nReason (R): Viroids lack a protein coat (capsid) completely and consist solely of free, low molecular weight RNA.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Viroids distinction from viruses in NCERT.",
        "1. Assertion is true: Viroids are a distinct class of sub-viral agents.\n2. Reason is verbatim NCERT: 'It was found to be a free RNA; it lacked the protein coat that is found in viruses, hence the name viroid. The RNA of the viroid was of low molecular weight'.\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally aligned.",
        "bio-viruses-viroids-lichens", "Viroid Distinctness Rationale")

    add(471, "Match Column I (Scientist) with Column II (Virological Milestone):\nColumn I:\nA. Louis Pasteur\nB. D.J. Ivanowsky (1892)\nC. M.W. Beijerinck (1898)\nD. W.M. Stanley (1935)\nColumn II:\nI. Coined 'Contagium vivum fluidum' (living infectious fluid)\nII. First crystallized Tobacco Mosaic Virus (crystals largely proteins)\nIII. Recognized causal microbes of mosaic disease passing bacteria-proof filters\nIV. Coined the name 'virus' meaning venom or poisonous fluid\nChoose the correct option:",
        "A-IV, B-III, C-I, D-II", "A-III, B-IV, C-I, D-II", "A-IV, B-I, C-III, D-II", "A-II, B-III, C-IV, D-I",
        "A", "Historical milestones in virology in NCERT.",
        "1. Pasteur: Name virus meaning venom (A-IV).\n2. Ivanowsky: Bacteria-proof filter passage (B-III).\n3. Beijerinck: Contagium vivum fluidum (C-I).\n4. Stanley: Crystallization of viruses (D-II).",
        "Options B, C, and D confuse historical contributions.",
        "bio-viruses-viroids-lichens", "Virology Milestones Match")

    add(472, "Consider the following statements regarding Prions:\nI. They are infectious agents consisting solely of abnormally folded proteins without any nucleic acid.\nII. They cause Bovine Spongiform Encephalopathy (BSE) or Mad Cow Disease in cattle.\nIII. In humans, their analogous variant is Cr-Jacob Disease (CJD).\nIV. They possess a thick lipid envelope and double-stranded DNA.\nWhich of the above statements are CORRECT?",
        "I, II, and III only", "I and II only", "II, III, and IV only", "All I, II, III, and IV",
        "A", "Prion characteristics in NCERT.",
        "1. Statements I, II, and III are direct facts from NCERT on prions.\n2. Statement IV is completely false: Prions lack any lipid envelope and contain zero nucleic acid (neither DNA nor RNA).",
        "Options containing IV are incorrect because prions are exclusively proteinaceous.",
        "bio-viruses-viroids-lichens", "Prion Biology")

    add(473, "Given below are two statements regarding Lichens:\nStatement I: Lichens are mutually useful symbiotic associations between algae (phycobiont) and fungi (mycobiont).\nStatement II: Lichens are excellent air pollution bio-indicators because they grow with extraordinary vigor in cities with severe sulphur dioxide emissions.\nIn light of the above statements, choose the most appropriate answer:",
        "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
        "A", "Lichen symbiosis vs pollution sensitivity in NCERT.",
        "1. Statement I is verbatim NCERT: Lichens are symbiotic associations between algae and fungi.\n2. Statement II is false: NCERT explicitly states: 'Lichens are very good pollution indicators - they DO NOT grow in polluted areas'.",
        "Option B is wrong because Statement II is false. Option C is wrong because Statement I is correct.",
        "bio-viruses-viroids-lichens", "Lichen Pollution Biology")

    add(474, "Assertion (A): In lichens, the relationship between the fungus and alga is often described as 'helotism' (controlled master-slave parasitism).\nReason (R): The fungal partner surrounds and penetrates algal cells with haustoria, controlling carbohydrate flow while the alga cannot survive independently outside the thallus in nature.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Lichen helotism concept.",
        "1. Assertion is true: The lichen symbiosis is technically helotism, wherein the fungus acts as the dominant master holding the captive alga as a slave (helot).\n2. Reason is true: The fungus extracts photosynthate via appressoria/haustoria, dictating metabolic rates.\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally aligned.",
        "bio-viruses-viroids-lichens", "Lichen Helotism Rationale")

    add(475, "Match Column I (Infectious Agent) with Column II (Composition & Disease):\nColumn I:\nA. TMV\nB. T4 Bacteriophage\nC. Potato Spindle Tuber Viroid\nD. Scrapie Agent (Prion)\nColumn II:\nI. Free naked low molecular weight RNA; Potato spindle tuber\nII. Abnormally folded protein only; Spongiform encephalopathy\nIII. Single-stranded RNA with 2130 protein capsomeres; Tobacco mosaic disease\nIV. Double-stranded DNA head with contractile tail; Bacterial lysis\nChoose the correct option:",
        "A-III, B-IV, C-I, D-II", "A-IV, B-III, C-I, D-II", "A-III, B-I, C-IV, D-II", "A-II, B-IV, C-I, D-III",
        "A", "Comparative infectious agents match.",
        "1. TMV: ssRNA + 2130 capsomeres (A-III).\n2. T4 Phage: dsDNA head + contractile tail (B-IV).\n3. Viroid: Free low-MW RNA, Potato spindle tuber (C-I).\n4. Prion: Abnormally folded protein, Spongiform encephalopathy (D-II).",
        "Options B, C, and D mispair structural compositions.",
        "bio-viruses-viroids-lichens", "Infectious Agents Matrix")

    add(476, "Which of the following statements regarding viral genomes is INCORRECT?",
        "Bacteriophages (viruses infecting bacteria) usually possess double-stranded RNA", "Viruses that infect plants generally have single-stranded RNA", "Viruses that infect animals have either single- or double-stranded RNA or double-stranded DNA", "No virus contains both RNA and DNA simultaneously",
        "A", "Viral genomes in NCERT.",
        "1. NCERT explicitly states: 'Bacterial viruses or bacteriophages (viruses that infect bacteria) are usually double stranded DNA viruses'.\n2. Thus, claiming that bacteriophages usually possess double-stranded RNA is directly false.",
        "Options B, C, and D are all verified true statements from NCERT.",
        "bio-viruses-viroids-lichens", "Viral Genome Rules")

    add(477, "Consider the following five human diseases:\n1. Mumps\n2. Smallpox\n3. Herpes\n4. Influenza\n5. Typhoid\nHow many of the above are caused by viruses according to NCERT?",
        "Four (Mumps, Smallpox, Herpes, Influenza)", "All five", "Three only", "Two only",
        "A", "Viral human diseases in NCERT.",
        "1. NCERT explicitly lists: 'Mumps, smallpox, herpes and influenza are caused by viruses. AIDS in humans is also caused by a virus'.\n2. Typhoid is a bacterial disease caused by Salmonella typhi.\nThus, exactly four are viral.",
        "Options B, C, and D miscount the viral diseases.",
        "bio-viruses-viroids-lichens", "Human Viral Diseases")

    add(478, "Given below are two statements regarding plant viral symptoms:\nStatement I: In plants, viral infection can cause symptoms such as mosaic formation, leaf rolling and curling, yellowing and vein clearing, dwarfing, and stunted growth.\nStatement II: Viruses produce broad intercellular mycelial mats with reproductive ascocarps across infected plant leaves.\nIn light of the above statements, choose the most appropriate answer:",
        "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
        "A", "Plant viral symptoms vs fungal structures.",
        "1. Statement I is verbatim NCERT on plant viral symptoms.\n2. Statement II is false: Mycelium and ascocarps belong to Ascomycete fungi; viruses are acellular nucleoproteins that never form mycelia or ascocarps.",
        "Option B is wrong because Statement II is false. Option C is wrong because Statement I is correct.",
        "bio-viruses-viroids-lichens", "Plant Viral Pathology")

    add(479, "Assertion (A): Viroid RNA is resistant to digestion by ribonuclease enzymes when protected inside animal lipid envelopes.\nReason (R): Viroids possess a thick host-derived lipid envelope containing hemagglutinin spikes.",
        "Both (A) and (R) are false", "(A) is true but (R) is false", "(A) is false but (R) is true", "Both (A) and (R) are true",
        "A", "Viroids lack envelopes and spikes.",
        "1. Assertion is false: Viroids are sensitive to ribonucleases because they are naked RNA without protein or lipid protection.\n2. Reason is false: Viroids completely lack lipid envelopes, capsids, and spikes; enveloped spike-bearing virions are viruses (like influenza).",
        "Options B, C, and D are invalid because both statements are biological falsehoods.",
        "bio-viruses-viroids-lichens", "Viroid Vulnerability")

    add(480, "Which of the following describes the mechanism by which infectious prions multiply inside mammalian nervous tissue?",
        "The infectious PrP^Sc protein acts as a conformational template that binds to normal cellular PrP^C and converts it into the abnormal, insoluble PrP^Sc conformation", "The prion RNA is translated into thousands of viral capsomeres by 80S ribosomes", "The prion DNA integrates into the host chromosome via integrase", "The prion undergoes binary fission every 20 minutes",
        "A", "Prion conformational conversion mechanism.",
        "1. Prions do not replicate via nucleic acid templates.\n2. Instead, the pathological misfolded protein (PrP^Sc, rich in beta-sheets) binds to the normal cellular protein (PrP^C, rich in alpha-helices) and induces it to refold into the amyloid-forming PrP^Sc isoform.",
        "Options B, C, and D assume nucleic acid-based or cellular replication absent in prions.",
        "bio-viruses-viroids-lichens", "Prion Conversion Mechanics")

    add(481, "In a lichen thallus, carbohydrate synthesized by the algal photobiont is transferred to the fungal mycobiont primarily in the form of:",
        "Polyols (such as ribitol, erythritol, or sorbitol) or glucose", "Insoluble glycogen granules", "Cellulose fibers", "Starch platelets",
        "A", "Lichen nutrient translocation.",
        "1. When green algae (e.g., Trebouxia) are the photobiont, they transfer photosynthetic carbon to the fungus as acyclic sugar alcohols (polyols like ribitol).\n2. Cyanobacteria transfer carbon as glucose.\n3. The fungal partner converts them into mannitol.",
        "Insoluble glycogen, cellulose, and starch are not the mobile translocated forms.",
        "bio-viruses-viroids-lichens", "Lichen Carbohydrate Translocation")

    add(482, "Which secondary chemical compound produced by lichens is a potent natural antibiotic and sun-screening agent, often extracted from Usnea ('Old man's beard')?",
        "Usnic acid", "Aflatoxin", "Penicillin", "Saxitoxin",
        "A", "Usnic acid from Usnea.",
        "1. Usnic acid is a dibenzofuran secondary metabolite synthesized by the fungal partner in Usnea and other lichens.\n2. It possesses strong antimicrobial activity against Gram-positive bacteria and absorbs UV radiation.",
        "Aflatoxin is an Aspergillus carcinogen. Penicillin is from Penicillium. Saxitoxin is a dinoflagellate neurotoxin.",
        "bio-viruses-viroids-lichens", "Lichen Secondary Metabolites")

    add(483, "Match Column I (Lichen Category) with Column II (Growth Form & Substratum Attachment):\nColumn I:\nA. Crustose Lichen\nB. Foliose Lichen\nC. Fruticose Lichen\nD. Leprose Lichen\nColumn II:\nI. Bushy, cylindrical branched shrub erect or pendant from branches (Usnea)\nII. Powder-like simple crust lacking cortex (Lepraria)\nIII. Flat, thin crust inseparable from rock substratum (Graphis)\nIV. Leaf-like dorsiventral lobed thallus attached by rhizines (Parmelia)\nChoose the correct option:",
        "A-III, B-IV, C-I, D-II", "A-IV, B-III, C-I, D-II", "A-III, B-I, C-IV, D-II", "A-II, B-IV, C-I, D-III",
        "A", "Lichen growth forms match.",
        "1. Crustose: Thin inseparable crust on rock (A-III).\n2. Foliose: Leaf-like thallus with rhizines (B-IV).\n3. Fruticose: Bushy, shrub-like cylinder (C-I).\n4. Leprose: Powdery layer without cortex (D-II).",
        "Options B, C, and D misclassify lichen forms.",
        "bio-viruses-viroids-lichens", "Lichen Morphology Match")

    add(484, "Given below are two statements regarding Lichen reproduction:\nStatement I: The algal partner in lichens reproduces sexually by forming apothecia with ascospores.\nStatement II: The fungal partner in lichens reproduces sexually by forming fruiting bodies (such as apothecia or perithecia), but the emerging fungal spores must find a new compatible alga to re-establish a lichen.",
        "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect",
        "A", "Lichen sexual reproduction reality.",
        "1. Statement I is false: The sexual structures (apothecia/perithecia) in a lichen belong EXCLUSIVELY to the fungal mycobiont, NOT the alga.\n2. Statement II is correct: The mycobiont forms ascospores that disperse alone; to form a new lichen thallus, the germinating hypha must encounter free-living compatible phycobiont cells.",
        "Option B is wrong because Statement I is false. Option C is wrong because Statement II is correct.",
        "bio-viruses-viroids-lichens", "Lichen Reproduction Dynamics")

    add(485, "Asexual symbiotic propagules of lichens consisting of a few algal cells enveloped in fungal hyphae that break off for vegetative propagation are called:",
        "Soredia and Isidia", "Ascospores and Basidiospores", "Conidia and Oidia", "Zoospores and Aplanospores",
        "A", "Soredia and isidia in lichens.",
        "1. Lichens propagate both partners simultaneously using specialized vegetative propagules:\n   - Soredia: microscopic powdery clusters of algal cells wrapped in hyphae released through cracks.\n   - Isidia: small coral-like outgrowths of the cortex containing both partners that break off.",
        "Options B, C, and D are fungal or algal spores that do not carry both symbiotic partners.",
        "bio-viruses-viroids-lichens", "Lichen Symbiotic Propagules")

    add(486, "Assertion (A): Outside a living host cell, a virus cannot generate ATP, transcribe its genes, or synthesize proteins.\nReason (R): Viruses lack cellular organelles, ribosomes, tRNA, and metabolic enzymes, existing as inert nucleoprotein crystals in the extracellular environment.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Extracellular inertness of virions in NCERT.",
        "1. Assertion is true: Outside hosts, viruses exhibit zero metabolic activity.\n2. Reason is true: Extracellular virions lack ribosomes, mitochondria, and substrates, functioning as inert crystalline nucleoproteins.\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally aligned.",
        "bio-viruses-viroids-lichens", "Virion Inertness Rationale")

    add(487, "Which of the following enzymes is responsible for replicating the circular single-stranded RNA of plant viroids inside the host cell nucleus?",
        "Host RNA Polymerase II redirected to an RNA template via a rolling-circle mechanism", "Viral reverse transcriptase", "Host DNA Polymerase III", "Taq polymerase",
        "A", "Viroid replication mechanism.",
        "1. Viroids encode no enzymes; their circular RNA subverts the host plant's nuclear DNA-dependent RNA Polymerase II to synthesize multimeric linear RNA copies via a rolling-circle mechanism.",
        "Viroids encode neither reverse transcriptase nor polymerases.",
        "bio-viruses-viroids-lichens", "Viroid Molecular Enzymology")

    add(488, "Which of the following viruses is an enveloped retrovirus containing two identical molecules of single-stranded positive-sense RNA and reverse transcriptase?",
        "Human Immunodeficiency Virus (HIV)", "Bacteriophage T4", "Tobacco mosaic virus", "Poxvirus",
        "A", "HIV retroviral architecture.",
        "1. HIV is an enveloped lentivirus (retrovirus) possessing two identical copies of ssRNA (+), viral reverse transcriptase, integrase, and protease surrounded by a conical capsid and a lipid envelope studded with gp120/gp41 spikes.",
        "T4 has dsDNA. TMV has a single ssRNA without envelope. Poxvirus has dsDNA.",
        "bio-viruses-viroids-lichens", "HIV Architecture")

    add(489, "Consider the following statements regarding the capsomeres of Tobacco Mosaic Virus (TMV):\nI. There are exactly 2130 identical capsomeres forming a right-handed helical cylinder around the RNA.\nII. Each capsomere consists of a single polypeptide chain of 158 amino acids.\nIII. The central hollow core of the TMV cylinder has a diameter of approximately 4 nm.\nWhich of the above statements are CORRECT?",
        "I, II, and III", "I and II only", "II and III only", "I and III only",
        "A", "TMV capsomere structural details.",
        "1. All three statements are verified biophysical structural data of TMV: 2130 capsomeres, 158 amino acids per protein subunit, and a central axial hollow channel of ~4 nm (40 Å).",
        "Options B, C, and D omit one of the verified biophysical facts.",
        "bio-viruses-viroids-lichens", "TMV Biophysical Geometry")

    add(490, "Given below are two statements:\nStatement I: Lichens were not included in Whittaker's Five Kingdom Classification because they are composite dual symbiotic organisms of algae and fungi.\nStatement II: Viruses, viroids, and prions were not included in Whittaker's system because they are acellular entities lacking cellular organization.\nIn light of the above statements, choose the most appropriate answer:",
        "Both Statement I and Statement II are correct", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are incorrect",
        "A", "Exclusions from 5 Kingdom Classification in NCERT.",
        "1. Statement I is true: Whittaker's system classified independent cellular kingdoms; composite lichens could not be assigned to a single kingdom.\n2. Statement II is verbatim NCERT: 'In the five kingdom classification of Whittaker there is no mention of lichens and some acellular organisms like viruses, viroids and prions'.\n3. Both statements are correct.",
        "Options B, C, and D contradict accurate NCERT taxonomy.",
        "bio-viruses-viroids-lichens", "Classification Exclusions Rationale")

    add(491, "Assertion (A): Tobacco Mosaic Virus (TMV) cannot replicate or assemble progeny in a sterile test tube containing amino acids, ribonucleotides, and ATP alone.\nReason (R): TMV requires the host plant ribosome translation system, host tRNA, host cellular membranes, and host metabolic machinery to execute viral protein synthesis and genomic replication.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Viral obligate host dependency.",
        "1. Assertion is true: TMV is completely inert in cell-free chemical broth.\n2. Reason is true: Replication depends entirely on the intact living host cell translation and metabolic apparatus.\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are true and causally aligned.",
        "bio-viruses-viroids-lichens", "Host Dependency Rationale")

    add(492, "Match Column I (Viral Morphological Symmetry) with Column II (Example Virus):\nColumn I:\nA. Helical symmetry\nB. Icosahedral (Polyhedral) symmetry\nC. Complex (Binal) symmetry (head + tail)\nD. Enveloped pleomorphic\nColumn II:\nI. Bacteriophage T4\nII. Influenza virus\nIII. Tobacco Mosaic Virus (TMV)\nIV. Adenovirus / Poliovirus\nChoose the correct option:",
        "A-III, B-IV, C-I, D-II", "A-IV, B-III, C-I, D-II", "A-III, B-I, C-IV, D-II", "A-II, B-IV, C-I, D-III",
        "A", "Viral architectural symmetry match.",
        "1. Helical: TMV (A-III).\n2. Icosahedral: Adenovirus/Polio (B-IV).\n3. Complex/Binal: Bacteriophage T4 (C-I).\n4. Enveloped pleomorphic: Influenza virus (D-II).",
        "Options B, C, and D confuse viral capsomeric geometries.",
        "bio-viruses-viroids-lichens", "Capsid Symmetry Match")

    add(493, "Which of the following events occurs immediately after a T4 bacteriophage binds to the lipopolysaccharide receptors on an E. coli cell wall?",
        "The tail sheath contracts, driving the central core tube through the cell wall like a hypodermic needle to inject phage DNA into the bacterial cytoplasm", "The entire intact bacteriophage enters by phagocytosis", "The bacteriophage digests the host with reverse transcriptase", "The phage capsid fuses with the bacterial nuclear envelope",
        "A", "Bacteriophage infection mechanism.",
        "1. T4 baseplate tail pins bind receptors; the contractile sheath contracts ATP-dependently; lysozyme punctures peptidoglycan; the central hollow core penetrates and injects dsDNA into the host cytoplasm while the empty protein capsid remains outside as a 'ghost'.",
        "Phagocytosis and nuclear envelope fusion cannot occur in wall-bearing prokaryotes.",
        "bio-viruses-viroids-lichens", "Phage Penetration Kinetics")

    add(494, "What is the structural basis for classifying viruses into DNA viruses and RNA viruses in the Baltimore and Lwoff classifications?",
        "The chemical nature and strandedness of their genetic material, and whether replication proceeds through DNA or RNA intermediates", "The size of the host bacterium", "The color of the capsid crystals under polarizing light", "The number of flagella attached to the baseplate",
        "A", "Basis of viral classification.",
        "1. Modern virology classifies viruses primarily by their genome type: dsDNA, ssDNA, dsRNA, (+)ssRNA, (-)ssRNA, and retroviruses (reverse transcribing), based on how mRNA is synthesized.",
        "Host size, crystal color, and flagella (viruses never have flagella) are invalid criteria.",
        "bio-viruses-viroids-lichens", "Viral Classification Foundations")

    add(495, "Given below are two statements regarding Viroid pathology:\nStatement I: Potato spindle tuber disease caused by PSTVd results in elongation, cracking, and spindle-shaped malformation of potato tubers.\nStatement II: PSTVd produces an exotoxin that breaks down plant chloroplasts into amino acids.\nIn light of the above statements, choose the most appropriate answer:",
        "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
        "A", "Potato spindle tuber viroid symptoms and mechanism.",
        "1. Statement I is correct: PSTVd causes elongated, tapered, cracked spindle-shaped tubers.\n2. Statement II is incorrect: Viroids do NOT produce any proteins or exotoxins; pathology results from RNA silencing (RNAi) of host developmental mRNAs.",
        "Option B is wrong because Statement II is false. Option C is wrong because Statement I is correct.",
        "bio-viruses-viroids-lichens", "Viroid Pathogenesis")

    add(496, "Assertion (A): Autoclaving at standard sterilization settings (121°C for 15-20 minutes) completely destroys bacterial endospores but fails to inactivate infectious prions.\nReason (R): Prions are highly stable, beta-sheet-rich protein aggregates that resist standard autoclaving, chemical proteases, UV irradiation, and formaldehyde.",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
        "A", "Prion extreme physicochemical resistance.",
        "1. Assertion is true: Standard autoclave temperatures kill spores but prions survive.\n2. Reason is true: The hyper-stable beta-sheet conformation of PrP^Sc resists proteases, heat, and standard chemical denaturants (requiring 134°C autoclaving in 1M NaOH).\n3. Reason explains Assertion.",
        "Options B, C, and D are invalid because both statements are verified and causally linked.",
        "bio-viruses-viroids-lichens", "Prion Sterilization Resistance")

    add(497, "Which of the following diseases is NOT caused by an acellular sub-microscopic agent (virus, viroid, or prion)?",
        "Tetanus", "Bovine Spongiform Encephalopathy", "Potato Spindle Tuber Disease", "Tobacco Mosaic Disease",
        "A", "Acellular agents vs bacterial disease.",
        "1. Tetanus is caused by Clostridium tetani, a cellular Gram-positive bacterium.\n2. BSE is caused by a prion. Potato spindle tuber is caused by a viroid. TMV is caused by a virus.",
        "Options B, C, and D are all caused by acellular infectious agents.",
        "bio-viruses-viroids-lichens", "Acellular Pathology Screen")

    add(498, "In lichens, the phycobiont is protected from intense solar radiation and desiccation primarily by the dense fungal upper cortex composed of:",
        "Pseudoparenchymatous fungal hyphae embedded in gelatinous lichenin matrix", "Thick layers of calcium phosphate crystals", "Silica frustules interlocking like soap boxes", "Cellulose plates with longitudinal furrows",
        "A", "Lichen upper cortex protection.",
        "1. The upper cortex of lichens consists of tightly cemented, pseudo-parenchymatous fungal hyphae with gelatinized walls that absorb water and shield the delicate underlying algal layer from UV desiccation.",
        "Silica belongs to diatoms. Cellulose plates belong to dinoflagellates.",
        "bio-viruses-viroids-lichens", "Lichen Cortical Ultrastructure")

    add(499, "Consider the following four statements regarding Lichens:\n1. Lichens are symbiotic associations between algae and fungi.\n2. Phycobiont prepares food for fungi.\n3. Mycobiont provides shelter and absorbs minerals and water.\n4. Lichens grow profusely in polluted cities with high sulphur dioxide.\nWhich of the above statements are TRUE?",
        "1, 2, and 3 only", "1 and 2 only", "2, 3, and 4 only", "All 1, 2, 3, and 4",
        "A", "Comprehensive lichen facts in NCERT.",
        "1. Statements 1, 2, and 3 are verified verbatim statements from NCERT.\n2. Statement 4 is false: Lichens DO NOT grow in polluted areas; they are sensitive bio-indicators.",
        "Options containing 4 are incorrect.",
        "bio-viruses-viroids-lichens", "Lichen Summary Evaluation")

    add(500, "Which of the following summarizes the fundamental distinction between Whittaker's Five Kingdom Classification and earlier systems?",
        "Whittaker used multiple unified criteria: cell structure (prokaryotic vs eukaryotic), thallus body organization (unicellular vs multicellular), mode of nutrition (absorptive, ingestive, photosynthetic), reproduction, and phylogenetic evolutionary relationships", "Whittaker classified organisms based purely on red blood presence", "Whittaker divided all organisms into herbs, shrubs, and trees", "Whittaker based his system solely on flagellar count",
        "A", "Whittaker's master classification philosophy.",
        "1. NCERT explicitly summarizes: 'The main criteria for classification used by him include cell structure, body organisation, mode of nutrition, reproduction and phylogenetic relationships'.\n2. This unified multidimensional framework rectified the anomalies of classical two-kingdom systems.",
        "Option B is Aristotle's animal criteria. Option C is Aristotle's plant division. Option D is flagellar typification.",
        "bio-systems-monera", "Whittaker System Synthesis")

    print(f"Total Part 4 questions defined: {len(qs)}")
    return qs

if __name__ == "__main__":
    qs = build_part4()
    with open("scripts/bc_data_part4.py", "w") as f:
        f.write("import json\n\ndef get_part4_questions():\n    questions = []\n")
        f.write('    topic_titles = {\n')
        f.write('        "bio-systems-monera": "Kingdom Monera & Systems of Classification",\n')
        f.write('        "bio-kingdom-protista": "Kingdom Protista",\n')
        f.write('        "bio-kingdom-fungi": "Kingdom Fungi (Classes & Reproduction)",\n')
        f.write('        "bio-viruses-viroids-lichens": "Viruses, Viroids, Prions & Lichens"\n')
        f.write('    }\n')
        f.write('    def q(num, text, a, b, c, d, ans, concept, step, why_wrong, topic_id, subtopic):\n')
        f.write('        opt_dict = {"A": a, "B": b, "C": c, "D": d}\n')
        f.write('        explanation = (\n')
        f.write('            f"1. CONCEPT:\\n{concept}\\n\\n"\n')
        f.write('            f"2. STEP-BY-STEP SOLUTION:\\n{step}\\n\\n"\n')
        f.write('            f"3. FINAL ANSWER:\\nOption {ans}: {opt_dict[ans]}\\n\\n"\n')
        f.write('            f"4. WHY OTHER OPTIONS ARE WRONG:\\n{why_wrong}"\n')
        f.write('        )\n')
        f.write('        questions.append({\n')
        f.write('            "id": f"bio-class-mcq-{num:03d}",\n')
        f.write('            "questionNumber": num,\n')
        f.write('            "question": text,\n')
        f.write('            "options": opt_dict,\n')
        f.write('            "optionsList": [a, b, c, d],\n')
        f.write('            "correctAnswer": ans,\n')
        f.write('            "correctIndex": {"A": 0, "B": 1, "C": 2, "D": 3}[ans],\n')
        f.write('            "explanation": explanation,\n')
        f.write('            "solutionStructured": {\n')
        f.write('                "concept": concept,\n')
        f.write('                "stepByStep": step,\n')
        f.write('                "finalAnswer": f"Option {ans}: {opt_dict[ans]}",\n')
        f.write('                "whyOtherOptionsWrong": why_wrong\n')
        f.write('            },\n')
        f.write('            "difficulty": "Hard",\n')
        f.write('            "subject": "Biology",\n')
        f.write('            "class": "11",\n')
        f.write('            "chapter": "Biological Classification",\n')
        f.write('            "chapterId": "biological-classification",\n')
        f.write('            "topic": topic_titles[topic_id],\n')
        f.write('            "topicId": topic_id,\n')
        f.write('            "subtopic": subtopic,\n')
        f.write('            "source": "VG Insights Practice",\n')
        f.write('            "isPYQ": False\n')
        f.write('        })\n\n')
        for item in qs:
            num, text, a, b, c, d, ans, concept, step, why_wrong, top, sub = item
            f.write(f'    q({num}, {json.dumps(text)}, {json.dumps(a)}, {json.dumps(b)}, {json.dumps(c)}, {json.dumps(d)}, {json.dumps(ans)}, {json.dumps(concept)}, {json.dumps(step)}, {json.dumps(why_wrong)}, {json.dumps(top)}, {json.dumps(sub)})\n')
        f.write("    return questions\n")
    print("Saved scripts/bc_data_part4.py successfully.")
