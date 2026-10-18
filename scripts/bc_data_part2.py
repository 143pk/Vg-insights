import json

def get_part2_questions():
    questions = []

    def q(num, text, a, b, c, d, ans, concept, step, why_wrong, topic_id, subtopic):
        opt_dict = {"A": a, "B": b, "C": c, "D": d}
        topic_titles = {
            "bio-kingdom-monera": "Five Kingdom Classification & Kingdom Monera",
            "bio-kingdom-protista": "Kingdom Protista (Chrysophytes to Protozoans)",
            "bio-kingdom-fungi": "Kingdom Fungi (Classes & Reproduction)",
            "bio-viruses-viroids-lichens": "Viruses, Viroids, Prions & Lichens"
        }
        explanation = (
            f"1. CONCEPT:\n{concept}\n\n"
            f"2. STEP-BY-STEP SOLUTION:\n{step}\n\n"
            f"3. FINAL ANSWER:\nOption {ans}: {opt_dict[ans]}\n\n"
            f"4. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}"
        )
        questions.append({
            "id": f"bio-class-mcq-{num:03d}",
            "questionNumber": num,
            "question": text,
            "options": opt_dict,
            "optionsList": [a, b, c, d],
            "correctAnswer": ans,
            "correctIndex": {"A": 0, "B": 1, "C": 2, "D": 3}[ans],
            "explanation": explanation,
            "solutionStructured": {
                "concept": concept,
                "stepByStep": step,
                "finalAnswer": f"Option {ans}: {opt_dict[ans]}",
                "whyOtherOptionsWrong": why_wrong
            },
            "difficulty": "Medium",
            "subject": "Biology",
            "class": "11",
            "chapter": "Biological Classification",
            "chapterId": "biological-classification",
            "topic": topic_titles[topic_id],
            "topicId": topic_id,
            "subtopic": subtopic,
            "source": "VG Insights Practice",
            "isPYQ": False
        })

    # --- TOPIC 1: bio-kingdom-monera (Q126 - Q156) ---
    q(126, "Why are heterocysts in cyanobacteria (e.g. Nostoc) thick-walled and non-green (lacking PS II)?",
      "Because the nitrogenase enzyme is extremely sensitive to molecular oxygen and requires an anaerobic microenvironment to fix nitrogen",
      "Because they store calcium carbonate crystals",
      "Because they function exclusively in water absorption",
      "Because they produce poisonous toxins",
      "A", "Heterocyst physiology and oxygen sensitivity of nitrogenase.",
      "1. The enzyme nitrogenase, which catalyzes the reduction of atmospheric N2 to NH3, is irreversibly inactivated by oxygen.\n2. Heterocysts have thick, oxygen-impermeable walls, lack Photosystem II (meaning no photosynthetic oxygen evolution occurs inside), and maintain high respiration to maintain anaerobic conditions.",
      "Options B, C, and D describe non-existent or irrelevant functions.",
      "bio-kingdom-monera", "Heterocyst Nitrogenase Physiology")

    q(127, "Archaebacteria can tolerate extreme temperatures and acidity because of:",
      "Branched-chain ether-linked lipids in their cell membranes and absence of peptidoglycan",
      "A thick peptidoglycan cell wall with teichoic acid",
      "Presence of multiple mitochondria",
      "Presence of a eukaryotic nuclear membrane",
      "A", "Archaebacterial membrane lipids and cell wall.",
      "1. Archaebacteria possess branched phytanyl ether-linked lipids (forming monolayers or bilayers) that resist extreme heat, acidity, and osmotic lysis, unlike the ester-linked unbranched lipids of eubacteria.",
      "Option B describes Gram-positive eubacteria. Options C and D are eukaryotic features absent in archaebacteria.",
      "bio-kingdom-monera", "Archaebacterial Extremophile Adaptation")

    q(128, "Which of the following photosynthetic bacteria does NOT produce oxygen during photosynthesis (anoxygenic photosynthesis)?",
      "Green sulphur bacteria (e.g. Chlorobium)", "Nostoc", "Anabaena", "Oscillatoria",
      "A", "Anoxygenic bacterial photosynthesis in NEET.",
      "1. Purple and green sulphur bacteria (e.g., *Chlorobium*, *Chromatium*) perform anoxygenic photosynthesis because they use hydrogen sulfide (H2S) or thiosulfate instead of water (H2O) as the electron/hydrogen donor, releasing elemental sulfur instead of oxygen.\n2. Cyanobacteria (*Nostoc*, *Anabaena*, *Oscillatoria*) perform oxygenic photosynthesis using water.",
      "Options B, C, and D are cyanobacteria that evolve oxygen.",
      "bio-kingdom-monera", "Anoxygenic Photosynthesis")

    q(129, "Why are Mycoplasmas naturally resistant to antibiotics like penicillin that target cell wall synthesis?",
      "Because Mycoplasmas completely lack a peptidoglycan cell wall",
      "Because Mycoplasmas destroy penicillin with nitrogenase",
      "Because Mycoplasmas have a thick chitinous wall",
      "Because Mycoplasmas are viruses",
      "A", "Mycoplasma penicillin resistance mechanism.",
      "1. Beta-lactam antibiotics like penicillin inhibit peptidoglycan transpeptidase enzymes responsible for cross-linking bacterial cell walls.\n2. Because *Mycoplasma* completely lacks a cell wall (bounded only by a 3-layered sterol-containing lipoprotein membrane), it is innately resistant to cell-wall targeting antibiotics.",
      "Option B is false. Option C is false (fungi have chitin). Option D is false (they are cellular prokaryotes).",
      "bio-kingdom-monera", "Mycoplasma Penicillin Resistance")

    q(130, "Chemosynthetic bacteria like Nitrosomonas and Nitrobacter obtain energy by which metabolic pathway?",
      "Nitrosomonas oxidizes ammonia to nitrite; Nitrobacter oxidizes nitrite to nitrate",
      "Both reduce nitrate to atmospheric nitrogen",
      "Both perform oxygenic photosynthesis using water",
      "Both decompose cellulose into methane",
      "A", "Nitrification by chemosynthetic bacteria.",
      "1. Nitrification is a two-step oxidative chemosynthetic pathway:\n- Step 1: 2 NH3 + 3 O2 -> 2 NO2- + 2 H+ + 2 H2O + Energy (*Nitrosomonas*, *Nitrococcus*)\n- Step 2: 2 NO2- + O2 -> 2 NO3- + Energy (*Nitrobacter*)\n2. The released energy is trapped as ATP to fix carbon dioxide.",
      "Option B is denitrification (*Pseudomonas*). Option C is photosynthesis. Option D is methanogenesis.",
      "bio-kingdom-monera", "Chemosynthetic Nitrification")

    q(131, "Consider the following statements regarding Kingdom Monera:\nStatement I: Bacteria possess a simple cellular structure but show the most extensive metabolic diversity.\nStatement II: Majority of bacteria are autotrophic, synthesizing their own food from inorganic substrates.\nChoose the correct option:",
      "Statement I is correct, Statement II is incorrect",
      "Statement I is incorrect, Statement II is correct",
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "A", "Bacterial structure vs metabolic diversity in NCERT.",
      "1. Statement I is correct: NCERT explicitly states 'Though the bacterial structure is very simple, they are very complex in behaviour. Compared to many other organisms, bacteria as a group show the most extensive metabolic diversity.'\n2. Statement II is INCORRECT because NCERT explicitly clarifies that 'the vast majority of bacteria are heterotrophs', NOT autotrophs.",
      "Options B, C, and D are inconsistent with NCERT facts.",
      "bio-kingdom-monera", "Bacterial Metabolic Diversity Check")

    q(132, "Match the bacteria in Column I with their respective industrial or ecological roles in Column II:\nColumn I:\n(p) Lactobacillus\n(q) Rhizobium\n(r) Streptomyces\n(s) Methanobacterium\nColumn II:\n(1) Biogas generation from cattle dung\n(2) Production of curd from milk\n(3) Source of antibiotic streptomycin\n(4) Symbiotic nitrogen fixation in legumes",
      "p-2, q-4, r-3, s-1",
      "p-1, q-3, r-2, s-4",
      "p-4, q-2, r-1, s-3",
      "p-2, q-1, r-4, s-3",
      "A", "Bacterial roles matching.",
      "1. *Lactobacillus* = curd production (p-2).\n2. *Rhizobium* = nitrogen fixation in legume root nodules (q-4).\n3. *Streptomyces* = antibiotic production (r-3).\n4. *Methanobacterium* = biogas production from dung (s-1).\n5. Correct sequence: p-2, q-4, r-3, s-1.",
      "Options B, C, and D are scrambled.",
      "bio-kingdom-monera", "Bacterial Roles Match")

    q(133, "Assertion (A): Methanogens are obligate anaerobes present in the rumen of cattle.\nReason (R): They convert cellulose fermentation products into methane (biogas) in an oxygen-deprived environment.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on methanogens in ruminants.",
      "1. (A) is true: methanogens are strictly anaerobic archaebacteria populating the rumen.\n2. (R) is true: they metabolize formate, acetate, and H2/CO2 produced by other cellulolytic microbes into CH4 under anoxic conditions, which explains their ecological niche in the rumen.",
      "Options B, C, and D are incorrect.",
      "bio-kingdom-monera", "Methanogens Rumen AR")

    q(134, "Which of the following is the true mechanism of genetic recombination in bacteria during conjugation?",
      "Direct transfer of DNA from a donor (F+) cell to a recipient (F-) cell through a conjugation tube (sex pilus)",
      "Fusion of two flagella",
      "Meiotic division of the bacterial nucleoid",
      "Syngamy between motile gametes",
      "A", "Bacterial conjugation mechanism.",
      "1. Bacteria do not undergo true sexual reproduction with gametes and meiosis; instead, they undergo primitive genetic exchange (conjugation), where an F-plasmid is copied and transferred via a sex pilus.",
      "Options B, C, and D are false (prokaryotes lack meiosis and gametic syngamy).",
      "bio-kingdom-monera", "Bacterial Conjugation")

    q(135, "What constitutes the Gram-negative bacterial outer membrane that is ABSENT in Gram-positive bacteria?",
      "A lipopolysaccharide (LPS) membrane containing lipid A and O-antigen",
      "A thick layer of teichoic acid",
      "A cellulose wall",
      "A chitinous carapace",
      "A", "Gram-negative outer membrane.",
      "1. Gram-negative bacteria have a thin peptidoglycan layer surrounded by an asymmetric outer lipid bilayer enriched in lipopolysaccharide (LPS / endotoxin).\n2. Gram-positive bacteria lack this outer membrane and have a thick peptidoglycan wall with teichoic acid.",
      "Option B is in Gram-positive cells. Options C and D are plant and fungal polymers.",
      "bio-kingdom-monera", "Gram-negative Outer Membrane")

    q(136, "Cyanobacteria frequently form dense surface blooms in water bodies because of:",
      "Excess nutrient enrichment (eutrophication) of nitrogen and phosphorus from agricultural runoff and domestic sewage",
      "Lack of sunlight",
      "Presence of high concentrations of sulfuric acid",
      "Extinction of all aquatic insects",
      "A", "Cyanobacterial water blooms.",
      "1. When freshwaters receive excess nitrates and phosphates (eutrophication), colonial and filamentous cyanobacteria (*Microcystis*, *Anabaena*) proliferate explosively, forming toxic algal blooms.",
      "Options B, C, and D do not cause bloom formation.",
      "bio-kingdom-monera", "Cyanobacteria Water Blooms")

    q(137, "Which of the following statements about Mycoplasma is INCORRECT?",
      "They are pleomorphic because they lack a rigid cell wall",
      "They are sensitive to penicillin",
      "They can pass through filters that retain typical bacteria",
      "They are the smallest freeliving cellular organisms",
      "B", "Mycoplasma incorrect statement penicillin.",
      "1. Statement B is incorrect because Mycoplasmas are RESISTANT to penicillin, not sensitive (penicillin targets peptidoglycan, which Mycoplasma lacks).\n2. Statements A, C, and D are verified facts.",
      "Options A, C, and D are accurate biological statements.",
      "bio-kingdom-monera", "Mycoplasma Incorrect Statement")

    q(138, "Which group of archaebacteria possesses bacteriorhodopsin in its cell membrane to trap solar energy?",
      "Halophiles (*Halobacterium*)", "Thermoacidophiles", "Methanogens", "Mycoplasma",
      "A", "Halophile bacteriorhodopsin.",
      "1. Extreme halophiles like *Halobacterium salinarum* synthesize a purple membrane containing bacteriorhodopsin, a retinal-protein complex that acts as a light-driven proton pump to generate ATP without carbon fixation.",
      "Options B and C lack bacteriorhodopsin. Option D is a eubacterial wall-less group.",
      "bio-kingdom-monera", "Bacteriorhodopsin Halophiles")

    q(139, "The bacterial cell envelope consists of a tightly bound three-layered structure comprising:",
      "Glycocalyx (capsule/slime layer) -> Cell wall -> Plasma membrane",
      "Plasma membrane -> Cell wall -> Glycocalyx",
      "Cell wall -> Cytoplasm -> Nucleoid",
      "Capsid -> Envelope -> Core",
      "A", "Bacterial cell envelope three layers.",
      "1. From outside to inside, the bacterial envelope comprises: (1) outermost glycocalyx (capsule or slime layer), (2) middle rigid cell wall (peptidoglycan), and (3) innermost plasma membrane.",
      "Option B reverses the order. Option C describes interior anatomy. Option D describes viral structure.",
      "bio-kingdom-monera", "Bacterial Envelope Layers")

    q(140, "Endospores formed by Bacillus and Clostridium are resistant to heat, boiling, and desiccation because of:",
      "A thick cortex containing calcium-dipicolinic acid complexes and dehydrated core",
      "Presence of cellulose plates",
      "High water content in the cytoplasm",
      "Lack of DNA",
      "A", "Endospore resistance mechanism.",
      "1. Endospore heat and chemical resistance is mediated by high concentrations of calcium dipicolinate (Ca-DPA), specialized small acid-soluble proteins (SASPs) protecting DNA, and a dehydrated protoplast.",
      "Options B, C, and D contradict endospore biology.",
      "bio-kingdom-monera", "Endospore Resistance")

    q(141, "Which of the following is an example of a free-living aerobic nitrogen-fixing bacterium in soil?",
      "Azotobacter", "Rhizobium", "Clostridium", "Lactobacillus",
      "A", "Azotobacter free-living aerobic.",
      "1. *Azotobacter* is a free-living, aerobic nitrogen-fixing soil bacterium.\n2. *Rhizobium* is symbiotic, *Clostridium* is an anaerobic free-living fixer, and *Lactobacillus* does not fix nitrogen.",
      "Options B, C, and D are symbiotic, anaerobic, or non-fixing.",
      "bio-kingdom-monera", "Azotobacter Free-living")

    q(142, "Which organism causes 'Citrus Canker' disease, characterized by raised corky lesions on citrus leaves, twigs, and fruits?",
      "Xanthomonas axonopodis pv. citri", "Tobacco Mosaic Virus", "Albugo candida", "Alternaria solani",
      "A", "Citrus canker causal organism.",
      "1. Citrus canker is caused by the Gram-negative phytopathogenic bacterium *Xanthomonas axonopodis* pv. *citri* (or *Xanthomonas citri*).",
      "Option B is a plant virus. Option C is white rust fungus. Option D causes early blight.",
      "bio-kingdom-monera", "Citrus Canker Organism")

    q(143, "In Carl Woese's Six Kingdom classification, Kingdom Monera is divided into which two kingdoms?",
      "Kingdom Archaebacteria and Kingdom Eubacteria",
      "Kingdom Protista and Kingdom Fungi",
      "Kingdom Plantae and Kingdom Animalia",
      "Kingdom Prokaryota and Kingdom Eukaryota",
      "A", "Carl Woese Six Kingdoms.",
      "1. In the Six Kingdom system, Monera is split into two distinct kingdoms: Archaebacteria (Archaea) and Eubacteria (Bacteria), based on deep molecular differences in 16S rRNA sequences and lipid structure.",
      "Options B, C, and D are incorrect divisions.",
      "bio-kingdom-monera", "Six Kingdoms Division")

    q(144, "Bacteria that obtain their carbon from carbon dioxide and energy from sunlight are termed:",
      "Photoautotrophs", "Chemoheterotrophs", "Photoheterotrophs", "Chemoautotrophs",
      "A", "Photoautotrophs definition.",
      "1. Photoautotrophs use light energy to assimilate CO2 into organic carbon (e.g., cyanobacteria, green sulphur bacteria).",
      "Option B uses organic compounds for both. Option C uses light for energy and organic compounds for carbon. Option D uses inorganic chemical oxidation for energy.",
      "bio-kingdom-monera", "Photoautotrophs")

    q(145, "Which structure helps motile bacteria to adhere to rocks in streams and to host tissues during infection?",
      "Fimbriae", "Flagella", "Ribosomes", "Mesosomes",
      "A", "Fimbriae adherence function in NCERT.",
      "1. Fimbriae are small bristle-like proteinaceous fibers sprouting from the bacterial cell surface that function specifically in attachment to solid substrates (rocks, mucosal surfaces).",
      "Option B functions in swimming motility. Option C synthesizes proteins. Option D functions in respiration/DNA replication.",
      "bio-kingdom-monera", "Fimbriae Adherence")

    q(146, "Mesosomes in bacteria are formed by the invagination of the:",
      "Plasma membrane", "Cell wall", "Glycocalyx", "Nuclear envelope",
      "A", "Mesosome formation.",
      "1. Mesosomes are specialized membranous infoldings of the bacterial plasma membrane into the cytoplasm, functioning in respiration, cell wall synthesis, DNA replication, and enzymatic surface increase.",
      "Options B, C, and D do not give rise to mesosomes.",
      "bio-kingdom-monera", "Mesosome Formation")

    q(147, "Which of the following statements about Cyanobacteria is FALSE?",
      "They possess chlorophyll a similar to green plants",
      "They are all strictly marine and cannot live in freshwater",
      "They can fix atmospheric nitrogen in heterocysts",
      "They are photosynthetic autotrophs",
      "B", "Cyanobacteria freshwater and terrestrial distribution.",
      "1. Statement B is false because cyanobacteria thrive in freshwater ponds, lakes, moist terrestrial soils, tree bark, and damp rocks, in addition to marine environments.\n2. Statements A, C, and D are completely correct.",
      "Options A, C, and D are valid NCERT facts.",
      "bio-kingdom-monera", "Cyanobacteria Distribution False")

    q(148, "Which of the following bacteria causes the waterborne disease Cholera?",
      "Vibrio cholerae", "Salmonella typhi", "Clostridium tetani", "Mycobacterium tuberculosis",
      "A", "Vibrio cholerae.",
      "1. *Vibrio cholerae* (a comma-shaped Gram-negative bacterium) secretes cholera enterotoxin, causing severe watery diarrhea and dehydration.",
      "Option B causes typhoid. Option C causes tetanus. Option D causes tuberculosis.",
      "bio-kingdom-monera", "Vibrio Cholerae Pathogen")

    q(149, "Tetanus is caused by an anaerobic endospore-forming rod-shaped bacterium called:",
      "Clostridium tetani", "Salmonella typhi", "Vibrio cholerae", "Lactobacillus acidophilus",
      "A", "Clostridium tetani.",
      "1. *Clostridium tetani* produces the potent neurotoxin tetanospasmin, causing spastic muscle paralysis (lockjaw).",
      "Options B, C, and D cause different infections or are non-pathogenic.",
      "bio-kingdom-monera", "Clostridium Tetani")

    q(150, "Bacterial transformation was famously demonstrated in 1928 by:",
      "Frederick Griffith using Streptococcus pneumoniae",
      "Hershey and Chase using T2 bacteriophage",
      "Meselson and Stahl using E. coli",
      "Watson and Crick",
      "A", "Griffith transformation experiment.",
      "1. Frederick Griffith demonstrated bacterial transformation (transfer of genetic virulence from heat-killed smooth S-strain to living rough R-strain *Streptococcus pneumoniae*).",
      "Option B proved DNA as genetic material. Option C proved semi-conservative replication. Option D elucidated the DNA double helix.",
      "bio-kingdom-monera", "Griffith Transformation")

    q(151, "Which of the following is an example of an archaebacterium living in the gut of cattle?",
      "Methanobacterium", "Halobacterium", "Thermoplasma", "Sulfolobus",
      "A", "Methanobacterium in cattle gut.",
      "1. *Methanobacterium* is a dominant methanogen inhabiting the rumen of cattle, reducing CO2 and H2 to methane.",
      "Option B is a halophile. Options C and D are thermoacidophiles.",
      "bio-kingdom-monera", "Methanobacterium Rumen")

    q(152, "In cyanobacteria, what are the accessory photosynthetic pigments that impart the characteristic blue-green color?",
      "Phycocyanin (blue) and Phycoerythrin (red)", "Fucoxanthin only", "Carotenoids only", "Anthocyanins only",
      "A", "Phycobilins in cyanobacteria.",
      "1. Phycobiliproteins, mainly c-phycocyanin (blue) and allophycocyanin along with c-phycoerythrin, serve as light-harvesting phycobilisomes in cyanobacteria.",
      "Option B is brown algal. Options C and D are plant/vacuolar pigments.",
      "bio-kingdom-monera", "Phycocyanin Cyanobacteria")

    q(153, "What is the primary ecological hazard of cyanobacterial blooms in eutrophic lakes?",
      "They deplete dissolved oxygen at night, block sunlight, and release toxic microcystins that kill fishes and livestock",
      "They cause the lake to turn into a volcano",
      "They convert freshwater into distilled water",
      "They produce too much table sugar",
      "A", "Cyanobacterial bloom ecological hazard.",
      "1. Cyanobacterial blooms decompose via aerobic heterotrophs, exhausting dissolved oxygen (hypoxia/anoxia) and releasing hepatotoxins/neurotoxins (microcystin, anatoxin), resulting in massive fish kills.",
      "Options B, C, and D are absurd.",
      "bio-kingdom-monera", "Cyanobacterial Bloom Hazard")

    q(154, "Why do bacterial cells not undergo typical mitotic or meiotic nuclear division?",
      "Because they lack a nuclear membrane, nucleolus, and mitotic spindle apparatus",
      "Because their DNA cannot replicate",
      "Because bacteria have no enzymes",
      "Because bacteria are acellular",
      "A", "Prokaryotic cell division lack of mitosis.",
      "1. Mitosis requires a nuclear envelope, condensed chromatin with histones, and a microtubular spindle apparatus; prokaryotes divide by amitotic binary fission coupled to membrane attachment and FtsZ ring constriction.",
      "Options B, C, and D are false.",
      "bio-kingdom-monera", "Amitotic Fission Basis")

    q(155, "Which of the following organisms represents an obligate intracellular parasite lacking a peptidoglycan wall and displaying high pleomorphism?",
      "Mycoplasma", "Nostoc", "Nitrosomonas", "Rhizobium",
      "A", "Mycoplasma pleomorphism and wall-less state.",
      "1. *Mycoplasma* has no rigid cell wall, giving it a mutable, amoeboid, pleomorphic shape.",
      "Options B, C, and D have rigid peptidoglycan walls.",
      "bio-kingdom-monera", "Mycoplasma Pleomorphic State")

    q(156, "The Three-Domain system proposed by Carl Woese places all eukaryotic organisms (Protista, Fungi, Plantae, Animalia) into Domain:",
      "Eukarya", "Archaea", "Bacteria", "Monera",
      "A", "Domain Eukarya in Woese system.",
      "1. Carl Woese's Domain Eukarya encompasses all eukaryotic kingdoms (Protista, Fungi, Plantae, Animalia).\n2. Prokaryotes are split into Domain Archaea and Domain Bacteria.",
      "Options B and C are prokaryotic domains. Option D is an obsolete kingdom name.",
      "bio-kingdom-monera", "Domain Eukarya")

    # --- TOPIC 2: bio-kingdom-protista (Q157 - Q187) ---
    q(157, "Why is the Kingdom Protista considered to have 'boundaries that are not well defined' according to NCERT?",
      "Because what is 'a photosynthetic protist' to one biologist may be 'a plant' to another, and it bridges single-celled forms with plants, animals, and fungi",
      "Because protists live on the moon",
      "Because all protists are extinct",
      "Because protists have no DNA",
      "A", "Protista undefined boundaries in NCERT.",
      "1. NCERT explicitly notes: '...the boundaries of this kingdom are not well defined. What may be \"a photosynthetic protist\" to one biologist may be \"a plant\" to another.'\n2. It serves as an evolutionary grade uniting unicellular eukaryotes with affinities to plants (algae), animals (protozoans), and fungi (slime moulds).",
      "Options B, C, and D are false.",
      "bio-kingdom-protista", "Protista Boundaries Undefined")

    q(158, "The silica frustules of diatoms remain preserved in ocean sediments for millions of years because:",
      "Hydrated amorphous silicon dioxide is chemically inert, non-biodegradable, and resistant to microbial enzymes",
      "Silica dissolves instantly in salt water",
      "Diatoms are made of calcium carbonate",
      "Frustules are digested by marine fungi",
      "A", "Silica frustule chemical resistance.",
      "1. The frustule of diatoms is composed of biogenic opal (hydrated silica, SiO2.nH2O), which resists enzymatic decomposition, forming thick fossilized diatomite beds over geological epochs.",
      "Options B, C, and D contradict chemical and biological facts.",
      "bio-kingdom-protista", "Silica Frustule Preservation")

    q(159, "How do diatoms reproduce during vegetative asexual multiplication?",
      "Each daughter cell receives one parental valve (shell) and synthesizes a new smaller hypotheca inside, leading to a gradual decrease in average cell size",
      "By budding like yeast",
      "By producing endospores like bacteria",
      "By binary fission without cell walls",
      "A", "Diatom vegetative division and size reduction.",
      "1. In diatom division, the parent epitheca and hypotheca separate; each becomes an epitheca for a daughter cell, which then secretes a new smaller hypotheca, causing progressive size reduction until auxospores restore full size.",
      "Options B, C, and D misrepresent diatom cytology.",
      "bio-kingdom-protista", "Diatom Vegetative Size Reduction")

    q(160, "Auxospores in diatoms are formed to:",
      "Restore the original maximum cell size after generations of vegetative size reduction",
      "Produce antibiotics against bacteria",
      "Infect marine fishes",
      "Form red tides",
      "A", "Auxospore function in diatoms.",
      "1. Auxospores are specialized sexual or asexual reproductive cells in diatoms that cast off the rigid frustule, expand in volume, and regenerate a full-sized parent frustule.",
      "Options B, C, and D are incorrect.",
      "bio-kingdom-protista", "Auxospore Function Diatoms")

    q(161, "The potent marine neurotoxin produced during red tides by blooms of the dinoflagellate Gonyaulax is:",
      "Saxitoxin (causing paralytic shellfish poisoning)", "Aflatoxin", "Penicillin", "Dipicolinic acid",
      "A", "Saxitoxin red tide neurotoxin.",
      "1. *Gonyaulax* produces saxitoxin, a voltage-gated sodium channel blocker that accumulates in filter-feeding shellfish and causes lethal paralytic shellfish poisoning (PSP) in humans and marine vertebrates.",
      "Option B is from *Aspergillus*. Option C is an antibiotic. Option D is in bacterial endospores.",
      "bio-kingdom-protista", "Saxitoxin Red Tide")

    q(162, "The flagellar arrangement in dinoflagellates creates which characteristic swimming motion?",
      "Whirling / spinning motion (giving them the name 'whirling whips')",
      "Straight gliding without rotation",
      "Amoeboid creeping by pseudopodia",
      "Jumping through water surface tension",
      "A", "Dinoflagellate whirling motion.",
      "1. The two flagella—one transverse beating in the cingulum (groove) causing rotation, and one longitudinal beating in the sulcus driving forward propulsion—produce a spinning, whirling motion (Dino = whirling; flagellum = whip).",
      "Options B, C, and D are false.",
      "bio-kingdom-protista", "Dinoflagellate Whirling Motion")

    q(163, "Consider the following statements regarding Euglena:\nStatement I: Euglena possesses a flexible proteinaceous pellicle instead of a rigid cell wall.\nStatement II: When kept in complete darkness, Euglena dies immediately because it cannot obtain food.\nChoose the correct option:",
      "Statement I is correct, Statement II is incorrect",
      "Statement I is incorrect, Statement II is correct",
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "A", "Euglena mixotrophic survival in dark.",
      "1. Statement I is correct: Euglena has a protein-rich pellicle enabling metaboly (flexing).\n2. Statement II is INCORRECT because NCERT clarifies that when deprived of sunlight, Euglena behaves mixotrophically like a heterotroph, predating on smaller organisms and absorbing organic nutrients.",
      "Options B, C, and D misjudge Statement II.",
      "bio-kingdom-protista", "Euglena Dark Survival")

    q(164, "Metaboly in Euglena refers to:",
      "The characteristic change in body shape (peristaltic contraction and expansion) facilitated by the flexible pellicle",
      "Production of methane gas",
      "Formation of silica shells",
      "Division by multiple fission",
      "A", "Metaboly in Euglenoids.",
      "1. Metaboly (euglenoid movement) is the undulating shape-shifting flexing movement made possible by interlocking articulating protein strips in the pellicle beneath the plasma membrane.",
      "Options B, C, and D describe unrelated events.",
      "bio-kingdom-protista", "Metaboly Euglenoid")

    q(165, "In Euglena, osmoregulation (removal of excess water) is carried out by the:",
      "Contractile vacuole system", "Stigma / eyespot", "Pellicle", "Paramylon granules",
      "A", "Contractile vacuole in Euglena.",
      "1. The contractile vacuole collects excess hypotonic water from the cytoplasm and periodically collapses into the reservoir to expel water through the cytostome.",
      "Option B senses light. Option C provides structure. Option D stores carbohydrate.",
      "bio-kingdom-protista", "Euglena Contractile Vacuole")

    q(166, "How do cellular slime moulds (e.g. Dictyostelium) differ from acellular/plasmodial slime moulds (e.g. Physarum)?",
      "Cellular slime moulds exist as independent uninucleate haploid amoebae that aggregate without fusing cell membranes (pseudoplasmodium)",
      "Cellular slime moulds possess chlorophyll a",
      "Acellular slime moulds are bacteria",
      "Cellular slime moulds produce true mushrooms",
      "A", "Cellular vs Acellular slime moulds.",
      "1. In cellular slime moulds (*Dictyostelium*), myxamoebae retain their individual cell boundaries in a pseudoplasmodium, whereas in acellular slime moulds (*Physarum*), true multinucleate wall-less plasmodia form by protoplasmic fusion.",
      "Options B, C, and D are false.",
      "bio-kingdom-protista", "Slime Mould Types")

    q(167, "The cell walls of spores in slime moulds are composed of:",
      "Cellulose", "Chitin", "Silica", "Peptidoglycan",
      "A", "Slime mould spore wall composition.",
      "1. NCERT explicitly states: 'The spores possess true walls (made of cellulose).' This cellulosic spore wall is a key plant-like diagnostic feature of slime moulds.",
      "Option B is in fungi. Option C is in diatoms. Option D is in bacteria.",
      "bio-kingdom-protista", "Slime Mould Spore Cellulose")

    q(168, "Match the protozoan groups in Column I with their representative organisms in Column II:\nColumn I:\n(p) Amoeboid protozoan\n(q) Flagellated protozoan\n(r) Ciliated protozoan\n(s) Sporozoan\nColumn II:\n(1) Paramecium\n(2) Plasmodium\n(3) Entamoeba histolytica\n(4) Trypanosoma gambiense",
      "p-3, q-4, r-1, s-2",
      "p-1, q-2, r-3, s-4",
      "p-4, q-3, r-2, s-1",
      "p-3, q-1, r-4, s-2",
      "A", "Protozoan classes matching.",
      "1. Amoeboid = *Entamoeba histolytica* (p-3).\n2. Flagellated = *Trypanosoma gambiense* (q-4).\n3. Ciliated = *Paramecium* (r-1).\n4. Sporozoan = *Plasmodium* (s-2).\n5. Correct sequence: p-3, q-4, r-1, s-2.",
      "Options B, C, and D are scrambled.",
      "bio-kingdom-protista", "Protozoan Groups Match")

    q(169, "The infective stage of Entamoeba histolytica transmitted to humans via contaminated food and water is the:",
      "Tetranucleate cyst", "Uninucleate trophozoite", "Sporozoite", "Flagellated zoospore",
      "A", "Entamoeba infective stage.",
      "1. *Entamoeba histolytica* forms a resistant, spherical, tetranucleate cyst passed in feces that survives gastric acidity and excysts in the human ileocecal lumen to release trophozoites.",
      "Option B is the active invasive stage in tissues. Option C is the infective stage of *Plasmodium*. Option D does not exist in *Entamoeba*.",
      "bio-kingdom-protista", "Entamoeba Tetranucleate Cyst")

    q(170, "In Paramecium, what is the biological function of nuclear dimorphism (having two distinct nuclei)?",
      "Macronucleus controls vegetative cellular metabolism; Micronucleus controls reproductive conjugation",
      "Macronucleus produces gametes; Micronucleus produces digestive enzymes",
      "Both nuclei perform identical functions",
      "Macronucleus is poisonous to prey",
      "A", "Nuclear dimorphism in Paramecium.",
      "1. *Paramecium* has two distinct nuclei:\n- Polyploid Macronucleus: controls daily somatic and vegetative metabolism, protein synthesis, and binary fission.\n- Diploid Micronucleus: genetically active in sexual conjugation and meiotic genetic recombination.",
      "Options B, C, and D misstate or reverse the nuclear roles.",
      "bio-kingdom-protista", "Nuclear Dimorphism Paramecium")

    q(171, "Trichocysts in Paramecium function as:",
      "Organelles of defense and prey capture", "Respiratory pigments", "Photosynthetic plastids", "Locomotory cilia",
      "A", "Trichocyst function in Paramecium.",
      "1. Trichocysts are spindle-shaped cortical organelles situated in the pellicle of *Paramecium* that discharge long barbed filaments upon mechanical or chemical stimulation for defense and anchoring.",
      "Options B, C, and D are false.",
      "bio-kingdom-protista", "Trichocyst Function")

    q(172, "The infective stage of Plasmodium that enters the human bloodstream through the bite of an infected female Anopheles mosquito is the:",
      "Sporozoite", "Trophozoite", "Merozoite", "Gametocyte",
      "A", "Plasmodium infective stage.",
      "1. The female *Anopheles* mosquito injects tiny, spindle-shaped, motile sporozoites with its saliva into human subcutaneous capillaries during a blood meal.",
      "Option B is the feeding stage inside RBCs. Option C is released after schizogony. Option D is picked up by the mosquito.",
      "bio-kingdom-protista", "Plasmodium Sporozoite Stage")

    q(173, "Why are protozoans believed to be 'primitive relatives of animals' in NCERT?",
      "Because they are heterotrophic, lack cell walls in their trophic forms, and exhibit cellular motility similar to animal gametes",
      "Because they have four legs",
      "Because they have mammalian kidneys",
      "Because they lay hard-shelled eggs",
      "A", "Protozoan animal relationship in NCERT.",
      "1. NCERT explicitly states: 'They are believed to be primitive relatives of animals.'\n2. Like animals, protozoans are phagotrophic or osmotrophic heterotrophs possessing eukaryotic cell architecture without cellulose walls.",
      "Options B, C, and D are vertebrate animal traits absent in unicellular protozoans.",
      "bio-kingdom-protista", "Protozoan Primitive Animal Relationship")

    q(174, "Which of the following protists is commonly used as an abrasive agent in toothpastes and metal polishes?",
      "Diatomaceous earth", "Dinoflagellate plates", "Euglenoid pellicle", "Paramecium cilia",
      "A", "Diatomaceous earth as abrasive in NCERT.",
      "1. Because diatomaceous earth consists of micro-sculptured, chemically inert silica frustules, its microscopic grittiness makes it an ideal fine abrasive in polishing pastes and dentifrices.",
      "Options B, C, and D lack abrasive mineral frustules.",
      "bio-kingdom-protista", "Diatomaceous Earth Abrasive")

    q(175, "Assertion (A): Dinoflagellates cause red tides that can kill marine fishes.\nReason (R): Rapid population blooms of red dinoflagellates like Gonyaulax release large amounts of toxins (saxitoxins) into the surrounding seawater.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on red tides and saxitoxin.",
      "1. Both (A) and (R) are direct NCERT assertions.\n2. The secretion of lethal neurotoxins (saxitoxin) during explosive population growth directly explains the mortality of marine fauna, making (R) the correct explanation of (A).",
      "Options B, C, and D are incorrect.",
      "bio-kingdom-protista", "Red Tide AR")

    q(176, "How does the flagellar movement of Euglena propel the cell forward?",
      "The single long emergent flagellum beats in a helical wave, pulling the organism forward through the water",
      "It pushes the organism backward like a rocket",
      "The short flagellum acts as a rudder while the long flagellum is non-functional",
      "Euglena does not have flagella",
      "A", "Euglena flagellar propulsion.",
      "1. Although *Euglena* has two flagella arising from the reservoir (one short and non-emergent, one long and emergent), the long flagellum with its mastigonemes beats in a three-dimensional helical wave, pulling the cell forward through the medium.",
      "Options B, C, and D are hydrodynamically or anatomically false.",
      "bio-kingdom-protista", "Euglena Flagellar Propulsion")

    q(177, "Which of the following structures in Paramecium is responsible for expelling undigested food vacuoles?",
      "Cytoproct (anal spot)", "Cytostome", "Cytopharynx", "Contractile vacuole",
      "A", "Cytoproct in Paramecium.",
      "1. The cytoproct (cellular anus or anal spot) is a fixed region on the ventral surface posterior to the oral groove where exhausted digestive vacuoles fuse with the pellicle to exocytose indigestible debris.",
      "Option B is the cell mouth. Option C is the gullet. Option D expels excess water.",
      "bio-kingdom-protista", "Cytoproct Paramecium")

    q(178, "Which group of Protista exhibits mixotrophic nutrition, flexible proteinaceous body covering, and photosynthetic pigments identical to higher plants?",
      "Euglenoids", "Chrysophytes", "Dinoflagellates", "Slime moulds",
      "A", "Euglenoid diagnostic triad.",
      "1. Euglenoids uniquely combine mixotrophy, pellicle (protein strips), and chlorophyll a/b identical to Embryophyta.",
      "Options B, C, and D possess different pigments and cell coverings.",
      "bio-kingdom-protista", "Euglenoid Diagnostic Triad")

    q(179, "Why are foraminiferan protozoans of immense importance in petroleum exploration and paleoclimatology?",
      "Their fossilized calcium carbonate (calcite) shells form massive limestone strata that serve as guide fossils indicating petroleum reservoir rocks",
      "They produce crude oil inside their vacuoles",
      "They eat petroleum",
      "They are synthetic polymers",
      "A", "Foraminifera in petroleum geology.",
      "1. Marine foraminiferans secrete multi-chambered calcite shells; their fossil distribution forms thick geological strata (e.g., Globigerina ooze) used by micropaleontologists to date sedimentary strata and locate oil-bearing geological basins.",
      "Options B, C, and D are scientifically erroneous.",
      "bio-kingdom-protista", "Foraminifera Petroleum")

    q(180, "Which of the following organisms belongs to Chrysophytes and is commonly known as 'golden algae'?",
      "Desmids", "Diatoms", "Dinoflagellates", "Euglena",
      "A", "Desmids golden algae in NCERT.",
      "1. NCERT explicitly equates: 'This group includes diatoms and golden algae (desmids).'",
      "Option B is the other member of Chrysophytes (chief producers). Option C is a separate group. Option D is an euglenoid.",
      "bio-kingdom-protista", "Desmids Golden Algae")

    q(181, "What happens during sexual conjugation in Paramecium caudatum?",
      "Two paramecia exchange micronuclear genetic material (migratory pronuclei), resulting in genetic rejuvenation",
      "One paramecium swallows the other whole",
      "Both paramecia transform into diatoms",
      "They produce true cellulose cell walls",
      "A", "Paramecium conjugation genetics.",
      "1. In conjugation, two individuals unite temporarily along their oral grooves, the macronuclei disintegrate, and meiotic products of diploid micronuclei are exchanged reciprocally (cross-fertilization), restoring physiological vigor.",
      "Options B, C, and D are incorrect.",
      "bio-kingdom-protista", "Paramecium Conjugation")

    q(182, "Which of the following protozoans moves using cilia arranged in coordinated longitudinal rows?",
      "Paramecium", "Amoeba", "Trypanosoma", "Plasmodium",
      "A", "Paramecium coordinated ciliary rows.",
      "1. *Paramecium* possesses thousands of fine cilia arranged in longitudinal kineties, beating metachronously to propel the slipper-shaped organism through water.",
      "Options B, C, and D use pseudopodia, flagella, or are non-motile.",
      "bio-kingdom-protista", "Paramecium Ciliary Beating")

    q(183, "Consider the following statements regarding Slime moulds:\n(A) Slime moulds are saprophytic protists.\n(B) The vegetative body lacks a cell wall.\n(C) Under favourable conditions, they form an aggregation called plasmodium.\n(D) Their spores possess true cell walls.\nHow many of the above statements are CORRECT?",
      "One", "Two", "Three", "Four",
      "D", "Slime moulds multi-statement check.",
      "1. Statement A is correct (NCERT: 'Slime moulds are saprophytic protists').\n2. Statement B is correct (plasmodial vegetative mass is wall-less).\n3. Statement C is correct (NCERT: 'under suitable conditions, they form an aggregation called plasmodium').\n4. Statement D is correct (NCERT: 'The spores possess true walls').\n5. All 4 statements are completely correct.",
      "Options A, B, and C underestimate the correct statements.",
      "bio-kingdom-protista", "Slime Moulds Multi-statement")

    q(184, "What is the chief food reserve stored in Diatoms?",
      "Chrysolaminarin (leucosin) and lipids/fats", "Starch", "Glycogen", "Cellulose",
      "A", "Diatom food reserve.",
      "1. Diatoms store excess photosynthetic assimilate primarily as oil droplets (lipids) and the water-soluble β-1,3-glucan polymer chrysolaminarin (leucosin), which also aids in buoyancy.",
      "Option B is in plants. Option C is in animals and fungi. Option D is a structural wall polymer.",
      "bio-kingdom-protista", "Chrysolaminarin Diatoms")

    q(185, "The vector responsible for transmitting Trypanosoma (sleeping sickness) between mammalian hosts is the:",
      "Tsetse fly (Glossina)", "Female Anopheles mosquito", "Housefly (Musca domestica)", "Sandfly (Phlebotomus)",
      "A", "Tsetse fly Trypanosoma vector.",
      "1. *Trypanosoma brucei* (causing African sleeping sickness) is transmitted by the bite of the blood-sucking tsetse fly (*Glossina*).",
      "Option B transmits malaria. Option C transmits enteric bacteria. Option D transmits Leishmania (kala-azar).",
      "bio-kingdom-protista", "Tsetse Fly Vector")

    q(186, "In diatoms, what is the upper larger overlapping shell called?",
      "Epitheca", "Hypotheca", "Cingulum", "Sulcus",
      "A", "Epitheca diatom valve.",
      "1. The outer, larger lid-like valve of the diatom frustule is the epitheca, which overlaps the smaller lower box-like valve (hypotheca).",
      "Option B is the lower shell. Options C and D are dinoflagellate grooves.",
      "bio-kingdom-protista", "Epitheca Diatom")

    q(187, "Which protozoan is characterized by a prominent undulating membrane along its flagellum?",
      "Trypanosoma", "Amoeba", "Paramecium", "Plasmodium",
      "A", "Trypanosoma undulating membrane.",
      "1. *Trypanosoma* possesses a single flagellum that runs along the lateral body margin attached to an undulating membrane, providing wave-like propulsion through viscous mammalian blood.",
      "Options B, C, and D lack this specialized membrane.",
      "bio-kingdom-protista", "Trypanosoma Undulating Membrane")

    # --- TOPIC 3: bio-kingdom-fungi (Q188 - Q218) ---
    q(188, "In Ascomycetes, each mature ascus typically contains how many ascospores after meiosis and post-meiotic mitosis?",
      "8 ascospores", "4 ascospores", "2 ascospores", "16 ascospores",
      "A", "Eight ascospores per ascus in Ascomycetes.",
      "1. In Ascomycetes, the diploid zygote in the young ascus undergoes meiosis to produce 4 haploid nuclei, each of which subsequently undergoes a single mitotic division, resulting in exactly 8 endogenous haploid ascospores.",
      "Option B (4 spores) is typical of Basidiomycetes (basidiospores). Options C and D are abnormal.",
      "bio-kingdom-fungi", "Eight Ascospores Ascus")

    q(189, "In Basidiomycetes, each mature basidium typically produces how many basidiospores exogenously?",
      "4 basidiospores", "8 basidiospores", "2 basidiospores", "1 basidiospore",
      "A", "Four basidiospores on basidium in NCERT.",
      "1. NCERT states: 'Karyogamy and meiosis take place in the basidium producing four basidiospores. The basidiospores are exogenously produced on the basidium.'",
      "Option B (8 spores) is typical of Ascomycetes. Options C and D are atypical.",
      "bio-kingdom-fungi", "Four Basidiospores Basidium")

    q(190, "Which fungal class lacks any known sexual reproduction and is hence designated 'Fungi Imperfecti'?",
      "Deuteromycetes", "Phycomycetes", "Ascomycetes", "Basidiomycetes",
      "A", "Deuteromycetes imperfect fungi.",
      "1. Deuteromycetes (Fungi Imperfecti) are an artificial form-class grouping fungi that lack known sexual teleomorphs, reproducing exclusively via asexual conidia.",
      "Options B, C, and D are perfect fungi with well-documented sexual cycles.",
      "bio-kingdom-fungi", "Deuteromycetes Imperfect Fungi")

    q(191, "When the sexual (teleomorphic) stages of fungi belonging to Deuteromycetes are discovered, they are reclassified into:",
      "Either Ascomycetes or Basidiomycetes", "Phycomycetes only", "Kingdom Protista", "Kingdom Monera",
      "A", "Reclassification of Deuteromycetes in NCERT.",
      "1. NCERT explicitly states: 'When the perfect (sexual) stages of members of deuteromycetes were discovered they were often moved to ascomycetes and basidiomycetes.'",
      "Options B, C, and D contradict the taxonomic disposition of deuteromycetes.",
      "bio-kingdom-fungi", "Reclassification Deuteromycetes")

    q(192, "Clamp connections are specialized hook-like hyphal structures characteristic of which class of fungi?",
      "Basidiomycetes", "Phycomycetes", "Ascomycetes", "Deuteromycetes",
      "A", "Clamp connections in Basidiomycetes.",
      "1. Clamp connections are bridge-like hyphal outgrowths formed during mitotic division of the dikaryotic mycelium in Basidiomycetes to ensure each newly formed hyphal compartment receives one nucleus of each mating type.",
      "Options B, C, and D do not form clamp connections.",
      "bio-kingdom-fungi", "Clamp Connections Basidiomycetes")

    q(193, "The cross-wall septum in Basidiomycetes that possesses a barrel-shaped swelling around the central pore is called a:",
      "Dolipore septum", "Simple pore with Woronin bodies", "Plasmodesma", "Heterocyst",
      "A", "Dolipore septum in Basidiomycetes.",
      "1. Basidiomycete hyphae have a specialized dolipore septum featuring a central pore surrounded by a barrel-shaped annular swelling covered on both sides by curved membranous parenthesomes.",
      "Option B is in Ascomycetes. Option C is in plants. Option D is in cyanobacteria.",
      "bio-kingdom-fungi", "Dolipore Septum")

    q(194, "Which of the following fungi causes early blight of potato, characterized by concentric ring-like 'target-board' lesions on leaves?",
      "Alternaria solani (Deuteromycetes)", "Phytophthora infestans (Phycomycetes)", "Albugo candida", "Puccinia graminis",
      "A", "Alternaria solani early blight.",
      "1. *Alternaria solani* is a deuteromycete that causes early blight of potato with characteristic target-board concentric necrotic spots.\n2. Late blight of potato is caused by *Phytophthora infestans*.",
      "Option B causes late blight. Option C causes white rust of crucifers. Option D causes wheat rust.",
      "bio-kingdom-fungi", "Alternaria Early Blight")

    q(195, "Which fungus causes late blight of potato, the historical disease responsible for the catastrophic Great Irish Famine of 1845?",
      "Phytophthora infestans", "Alternaria solani", "Ustilago maydis", "Rhizopus stolonifer",
      "A", "Phytophthora late blight Irish famine.",
      "1. *Phytophthora infestans* (an oomycete in Phycomycetes) caused the Irish Potato Famine (1845-1849), destroying potato crops and leading to massive starvation.",
      "Option B causes early blight. Option C causes smut. Option D is black bread mould.",
      "bio-kingdom-fungi", "Phytophthora Irish Famine")

    q(196, "Red rot of sugarcane is a serious agricultural disease caused by which deuteromycete fungus?",
      "Colletotrichum falcatum", "Alternaria solani", "Trichoderma harzianum", "Puccinia graminis",
      "A", "Colletotrichum red rot.",
      "1. *Colletotrichum falcatum* infects sugarcane stalks, producing red discoloration of internal vascular bundles with transverse white patches (red rot).",
      "Options B, C, and D cause different diseases or are biocontrol agents.",
      "bio-kingdom-fungi", "Colletotrichum Red Rot")

    q(197, "Trichoderma species are free-living soil deuteromycete fungi that are extensively used as:",
      "Biocontrol agents against several plant pathogenic fungi in root ecosystems",
      "Pathogens of wheat rust",
      "Producers of alcohol for cars",
      "Sources of agar-agar",
      "A", "Trichoderma biocontrol in NCERT.",
      "1. *Trichoderma* is a potent fungal biocontrol agent that colonizes rhizosphere roots, secreting chitinases and glucanases that suppress soil-borne plant pathogens (like *Pythium*, *Rhizoctonia*).",
      "Options B, C, and D are completely incorrect.",
      "bio-kingdom-fungi", "Trichoderma Biocontrol")

    q(198, "Match the fungal classes in Column I with their characteristic spores in Column II:\nColumn I:\n(p) Phycomycetes\n(q) Ascomycetes\n(r) Basidiomycetes\n(s) Deuteromycetes\nColumn II:\n(1) Conidia only (no sexual spores)\n(2) Basidiospores (exogenous)\n(3) Ascospores (endogenous)\n(4) Zygospores (formed in zygosporangium)",
      "p-4, q-3, r-2, s-1",
      "p-1, q-2, r-3, s-4",
      "p-3, q-4, r-1, s-2",
      "p-4, q-2, r-3, s-1",
      "A", "Fungal classes and spores match.",
      "1. Phycomycetes = Zygospores (p-4).\n2. Ascomycetes = Ascospores (q-3).\n3. Basidiomycetes = Basidiospores (r-2).\n4. Deuteromycetes = Conidia only (s-1).\n5. Correct sequence: p-4, q-3, r-2, s-1.",
      "Options B, C, and D are scrambled.",
      "bio-kingdom-fungi", "Fungal Spores Match")

    q(199, "Which of the following edible fungi belongs to Basidiomycetes and is cultivated commercially worldwide?",
      "Agaricus bisporus (Button mushroom)", "Morchella esculenta", "Tuber melanosporum (Truffle)", "Saccharomyces cerevisiae",
      "A", "Agaricus bisporus mushroom.",
      "1. *Agaricus bisporus* (common white button mushroom) is an edible basidiomycete grown globally in commercial mushroom farms.\n2. *Morchella* (morel) and *Tuber* (truffle) are edible Ascomycetes.",
      "Options B and C are ascomycetes. Option D is unicellular yeast.",
      "bio-kingdom-fungi", "Agaricus Edible Mushroom")

    q(200, "The life cycle of Puccinia graminis tritici (black stem rust of wheat) is heteroecious, meaning:",
      "It requires two different host species (primary host wheat, and alternate host barberry) to complete its complete life cycle",
      "It reproduces only in water",
      "It produces both seeds and fruits",
      "It has no mycelium",
      "A", "Puccinia heteroecious life cycle.",
      "1. Heteroecious rusts require two taxonomically unrelated host plants: *Puccinia graminis* completes its uredinial and telial stages on wheat (*Triticum*), and its pycnidial and aecial stages on the alternate host common barberry (*Berberis vulgaris*).",
      "Options B, C, and D are biologically incorrect.",
      "bio-kingdom-fungi", "Heteroecious Rust Puccinia")

    q(201, "Amanita phalloides is a notorious member of Basidiomycetes commonly known as the:",
      "'Death cap' mushroom (deadliest poisonous toadstool)",
      "Edible button mushroom",
      "Bread mould",
      "Yeast for baking",
      "A", "Amanita death cap toadstool.",
      "1. *Amanita phalloides* (Death cap) produces amatoxins and phallotoxins that inhibit RNA polymerase II, causing fatal hepatic and renal necrosis in humans.",
      "Options B, C, and D are harmless or commercial fungi.",
      "bio-kingdom-fungi", "Amanita Death Cap")

    q(202, "In Rhizopus, when two compatible hyphae mate during sexual reproduction, the swollen gametangial tips fuse to form a thick-walled resting structure called a:",
      "Zygospore", "Ascocarp", "Basidium", "Conidiophore",
      "A", "Rhizopus zygospore formation.",
      "1. In *Rhizopus* (Zygomycetes), positive and negative mating strains form progametangia that touch, isolate multinucleated gametangia, and undergo plasmogamy to form a dark, warty, thick-walled zygospore.",
      "Options B, C, and D are structures in higher fungi.",
      "bio-kingdom-fungi", "Rhizopus Zygospore")

    q(203, "Which of the following is a completely closed, spherical, non-ostiolate ascocarp that must decay or rupture to release its ascospores?",
      "Cleistothecium (e.g. in Aspergillus and Penicillium)", "Apothecium", "Perithecium", "Basidiocarp",
      "A", "Cleistothecium ascocarp.",
      "1. A cleistothecium is a completely closed globose ascocarp with no preformed ostiole (opening), typical of *Aspergillus* and *Penicillium*.\n2. An apothecium is an open cup-shaped ascocarp (*Peziza*); a perithecium is flask-shaped with an ostiole (*Claviceps*, *Neurospora*).",
      "Options B and C have open or ostiolate shapes. Option D is in Basidiomycetes.",
      "bio-kingdom-fungi", "Cleistothecium Ascocarp")

    q(204, "An open, saucer-shaped or cup-shaped ascocarp seen in Peziza is termed an:",
      "Apothecium", "Cleistothecium", "Perithecium", "Pseudothecium",
      "A", "Apothecium cup fungus.",
      "1. An apothecium is a broad, cup-shaped or saucer-shaped ascocarp in which the asci and paraphyses are exposed openly in a broad hymenial layer (e.g. *Peziza*).",
      "Option B is closed. Option C is flask-shaped with an ostiole. Option D is a false ascocarp.",
      "bio-kingdom-fungi", "Apothecium Cup Fungus")

    q(205, "A flask-shaped ascocarp with a narrow opening (ostiole) at its apex is called a:",
      "Perithecium (e.g. in Claviceps and Neurospora)", "Cleistothecium", "Apothecium", "Basidiocarp",
      "A", "Perithecium ascocarp.",
      "1. A perithecium is a flask-shaped fruiting body with a small terminal pore (ostiole) through which mature ascospores are sequentially extruded (e.g., *Claviceps*, *Neurospora*).",
      "Options B, C, and D represent different fruiting body morphologies.",
      "bio-kingdom-fungi", "Perithecium Ascocarp")

    q(206, "Which of the following organic acids is produced commercially on an industrial scale using the ascomycete fungus Aspergillus niger?",
      "Citric acid", "Acetic acid", "Lactic acid", "Butyric acid",
      "A", "Aspergillus niger citric acid.",
      "1. *Aspergillus niger* is grown in submerged aerobic fermenters using molasses or corn steep liquor to produce commercial citric acid for food and beverage industries.",
      "Option B is produced by *Acetobacter*. Option C by *Lactobacillus*. Option D by *Clostridium butyricum*.",
      "bio-kingdom-fungi", "Citric Acid Aspergillus")

    q(207, "Cyclosporin A, an important immunosuppressive drug used in human organ transplantation, is produced by the fungus:",
      "Trichoderma polysporum (Deuteromycetes)", "Penicillium notatum", "Aspergillus niger", "Agaricus bisporus",
      "A", "Cyclosporin A Trichoderma.",
      "1. Cyclosporin A, a cyclic non-ribosomal peptide that inhibits calcineurin to prevent organ transplant graft rejection, is extracted from the fungus *Trichoderma polysporum*.",
      "Options B, C, and D produce antibiotics, organic acids, or edible mushrooms.",
      "bio-kingdom-fungi", "Cyclosporin A Trichoderma")

    q(208, "Statins, the blood-cholesterol lowering agents that competitively inhibit HMG-CoA reductase, are produced by the yeast:",
      "Monascus purpureus", "Saccharomyces cerevisiae", "Neurospora crassa", "Candida albicans",
      "A", "Statins Monascus purpureus in NCERT.",
      "1. Statins (e.g. mevinolin/lovastatin) are secondary metabolites produced by the red yeast *Monascus purpureus* that competitively inhibit HMG-CoA reductase.",
      "Option B produces alcohol and bread. Option C is a genetic model. Option D causes thrush.",
      "bio-kingdom-fungi", "Statins Monascus Purpureus")

    q(209, "Assertion (A): Yeast is an exception to the general filamentous body plan of Kingdom Fungi.\nReason (R): Yeasts (e.g. Saccharomyces) are unicellular ascomycetes that reproduce primarily by budding.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on unicellular yeast.",
      "1. Both statements are direct NCERT assertions.\n2. The unicellular organization of yeast is the exact structural deviation from multicellular mycelial hyphae that constitutes the exception, so (R) explains (A).",
      "Options B, C, and D are incorrect.",
      "bio-kingdom-fungi", "Yeast Unicellular Exception AR")

    q(210, "Which structure enables parasitic fungi to penetrate living host plant epidermal cells and absorb nutrients directly from the host cytoplasm?",
      "Haustorium", "Mycorrhiza", "Ascus", "Sterigma",
      "A", "Haustorium in parasitic fungi.",
      "1. Haustoria are specialized hyphal outgrowths of obligate parasitic fungi (*Albugo*, *Erysiphe*, *Puccinia*) that penetrate the plant cell wall and invaginate the host plasma membrane to absorb carbohydrates and amino acids.",
      "Option B is a mutualistic root association. Option C is a sexual sac. Option D is a spore stalk.",
      "bio-kingdom-fungi", "Haustorium Parasitic")

    q(211, "Which of the following fungi is known as the 'bracket fungus' or 'shelf fungus' that grows on rotting tree trunks?",
      "Polyporus (Basidiomycetes)", "Rhizopus", "Mucor", "Penicillium",
      "A", "Polyporus bracket fungus.",
      "1. *Polyporus* and *Ganoderma* are wood-decaying basidiomycetes that produce hard, perennial, shelf-like or bracket-like basidiocarps projecting horizontally from dead or living tree trunks.",
      "Options B, C, and D do not produce woody shelf basidiocarps.",
      "bio-kingdom-fungi", "Bracket Fungus Polyporus")

    q(212, "In the parasexual cycle discovered by Pontecorvo and Roper in Aspergillus nidulans, genetic recombination occurs:",
      "Without regular meiosis and syngamy through somatic mitotic crossing-over",
      "Through true gametic syngamy only",
      "By endospore fusion",
      "By binary fission",
      "A", "Parasexual cycle in fungi.",
      "1. The parasexual cycle (frequent in Deuteromycetes and imperfect Ascomycetes) achieves genetic recombination in somatic heterokaryotic hyphae via nuclear fusion, mitotic crossing-over, and haploidization without meiotic divisions.",
      "Options B, C, and D are incorrect.",
      "bio-kingdom-fungi", "Parasexual Cycle Pontecorvo")

    q(213, "Which of the following statements about Fungi is INCORRECT?",
      "All fungi are heterotrophic eukaryotic organisms",
      "Fungi possess chloroplasts containing chlorophyll a and b",
      "Fungal cell walls are composed of chitin and polysaccharides",
      "Fungi can live in mutualistic associations as lichens and mycorrhizae",
      "B", "Fungi achlorophyllous nature.",
      "1. Statement B is completely false because ALL fungi are achlorophyllous (lack chloroplasts and chlorophyll) and cannot perform photosynthesis.\n2. Statements A, C, and D are verified NCERT facts.",
      "Options A, C, and D are true biological facts.",
      "bio-kingdom-fungi", "Fungi Achlorophyllous False Check")

    q(214, "The puffball fungus that discharges clouds of smoky spores upon mechanical disturbance is:",
      "Lycoperdon (Basidiomycetes)", "Albugo", "Rhizopus", "Trichoderma",
      "A", "Lycoperdon puffball.",
      "1. *Lycoperdon* (puffball) belongs to Basidiomycetes; inside its peridium, millions of dry basidiospores mature and are puffed out through an apical ostiole like a puff of smoke when raindrops strike the peridium.",
      "Options B, C, and D are other fungal groups.",
      "bio-kingdom-fungi", "Lycoperdon Puffball")

    q(215, "Which of the following fungi produces the deadly aflatoxin that causes acute hepatic necrosis and hepatocellular carcinoma in mammals?",
      "Aspergillus flavus", "Penicillium chrysogenum", "Saccharomyces cerevisiae", "Agaricus campestris",
      "A", "Aspergillus flavus aflatoxin.",
      "1. *Aspergillus flavus* contaminates improperly stored groundnuts, corn, and oilseeds, producing aflatoxins (especially B1) that cause toxic hepatitis and liver cancer.",
      "Options B, C, and D are non-aflatoxigenic commercial fungi.",
      "bio-kingdom-fungi", "Aflatoxin Aspergillus Flavus")

    q(216, "What is the ploidy level of a dikaryon (intervening stage in Ascomycetes and Basidiomycetes)?",
      "n + n (two unfused haploid nuclei per cell)", "2n (diploid)", "3n (triploid)", "4n (tetraploid)",
      "A", "Dikaryon ploidy n + n.",
      "1. A dikaryon possesses two unfused compatible haploid nuclei within each hyphal compartment, denoted as (n + n), distinct from a single fused diploid (2n) nucleus.",
      "Option B represents the post-karyogamy zygotic stage. Options C and D are polyploids.",
      "bio-kingdom-fungi", "Dikaryon Ploidy Level")

    q(217, "In Phycomycetes, asexual zoospores are characterized by being:",
      "Motile with flagella and produced endogenously in a sporangium",
      "Non-motile and produced exogenously",
      "Covered with thick chitinous armor",
      "Formed outside the sporangium",
      "A", "Zoospores in Phycomycetes in NCERT.",
      "1. NCERT states: 'Asexual reproduction takes place by zoospores (motile) or by aplanospores (non-motile). These spores are endogenously produced in sporangium.'",
      "Option B describes aplanospores or conidia. Options C and D are incorrect.",
      "bio-kingdom-fungi", "Phycomycetes Zoospores")

    q(218, "Which of the following correctly pairs a fungus with its class?",
      "Albugo - Phycomycetes", "Neurospora - Basidiomycetes", "Puccinia - Ascomycetes", "Alternaria - Phycomycetes",
      "A", "Fungus and class pairing in NCERT.",
      "1. *Albugo* belongs to Phycomycetes.\n2. *Neurospora* belongs to Ascomycetes, *Puccinia* belongs to Basidiomycetes, and *Alternaria* belongs to Deuteromycetes.",
      "Options B, C, and D list wrong classes.",
      "bio-kingdom-fungi", "Fungus Class Pairing")

    # --- TOPIC 4: bio-viruses-viroids-lichens (Q219 - Q250) ---
    q(219, "Why are antibiotics like penicillin and streptomycin completely ineffective against viral infections like the common cold or influenza?",
      "Because viruses lack bacterial cell walls, peptidoglycan synthesis, and bacterial ribosomes, reproducing entirely via host cell mechanisms",
      "Because viral capsids digest antibiotics into sugar",
      "Because antibiotics are viruses themselves",
      "Because antibiotics only work on cold days",
      "A", "Antibiotic inefficacy against viruses.",
      "1. Antibiotics specifically inhibit bacterial targets (peptidoglycan transpeptidases, 70S bacterial ribosomal subunits, DNA gyrase); viruses lack these bacterial structures entirely, utilizing the host cell's 80S ribosomes and RNA polymerases.",
      "Options B, C, and D are scientifically absurd.",
      "bio-viruses-viroids-lichens", "Antibiotic Inefficacy Viruses")

    q(220, "Consider the following statements regarding Viruses:\nStatement I: All plant viruses have single-stranded RNA, and all animal viruses have double-stranded DNA.\nStatement II: No virus contains both RNA and DNA simultaneously.\nChoose the correct option:",
      "Statement I is incorrect, Statement II is correct",
      "Statement I is correct, Statement II is incorrect",
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "A", "Viral genomes evaluation in NCERT.",
      "1. Statement I is INCORRECT because animal viruses can have single-stranded RNA (e.g. Polio, Rabies, Influenza), double-stranded RNA (Reovirus), or double-stranded DNA (Herpes, Poxvirus).\n2. Statement II is correct: NCERT verbatim states 'No virus contains both RNA and DNA.'",
      "Options B, C, and D are inconsistent with NCERT facts.",
      "bio-viruses-viroids-lichens", "Viral Genome Rules Evaluation")

    q(221, "In the bacteriophage T4, what is the anatomical function of the tail fibers?",
      "Specific adsorption and attachment to host cell surface lipopolysaccharide or protein receptors",
      "Injection of viral protein into the host",
      "Photosynthetic assimilation of ATP",
      "Digestion of the viral capsid",
      "A", "Bacteriophage tail fiber function.",
      "1. The tail fibers of a complex T-even bacteriophage recognize and bind specifically to complementary receptor molecules on the outer surface of the bacterial host cell, anchoring the baseplate for lysozyme penetration.",
      "Options B, C, and D are incorrect.",
      "bio-viruses-viroids-lichens", "Bacteriophage Tail Fiber Function")

    q(222, "What occurs during the lysogenic cycle of a temperate bacteriophage (like Lambda phage)?",
      "The phage DNA integrates into the bacterial host chromosome as a prophage and replicates passively with host cell division without lysing the host",
      "The host bacterium immediately bursts within 20 minutes",
      "The phage turns into a eukaryotic protist",
      "The phage produces seeds",
      "A", "Bacteriophage lysogenic cycle.",
      "1. In lysogeny, the temperate phage genome integrates site-specifically into the bacterial chromosome, persisting as an unexpressed prophage that replicates synchronously with bacterial binary fission until induced into the lytic cycle.",
      "Option B describes the virulent lytic cycle. Options C and D are biological nonsense.",
      "bio-viruses-viroids-lichens", "Lysogenic Cycle Lambda")

    q(223, "How does a Retrovirus (such as HIV) replicate its genetic material inside a human helper T-lymphocyte?",
      "Its reverse transcriptase enzyme synthesizes a complementary DNA (cDNA) strand from its single-stranded RNA genome",
      "It divides by binary fission in the cytoplasm",
      "It synthesizes chitin to build a cell wall",
      "It converts DNA into viral capsomeres directly without RNA",
      "A", "Retroviral reverse transcription.",
      "1. Retroviruses carry the RNA-dependent DNA polymerase enzyme (reverse transcriptase) that transcribes viral ssRNA into double-stranded proviral DNA, which integrates into the host chromosome via viral integrase.",
      "Options B, C, and D are biologically false.",
      "bio-viruses-viroids-lichens", "Retrovirus Reverse Transcription")

    q(224, "Why are Viroids considered more primitive than Viruses?",
      "Because viroids consist purely of naked, catalytic, self-cleaving RNA molecules without any protein coat or encoding capacity",
      "Because viroids are larger than bacteria",
      "Because viroids reproduce by meiosis",
      "Because viroids have chloroplasts",
      "A", "Viroids as primitive replicators.",
      "1. Viroids represent the minimal biological infectious agents: single-stranded circular non-coding RNAs that utilize host RNA polymerase II for rolling-circle replication and RNA ribozyme cleavage, lacking any capsid proteins.",
      "Options B, C, and D are counter-factual.",
      "bio-viruses-viroids-lichens", "Viroids Primitive Replicators")

    q(225, "In Prions, the infectious disease-causing isoform (PrPSc) differs from the normal cellular protein (PrPC) in having:",
      "A high proportion of beta-sheet secondary structure that makes it insolubly aggregate and resist proteases",
      "A different genetic code",
      "A long tail of double-stranded DNA",
      "A lipid capsid envelope",
      "A", "Prion conformational conversion.",
      "1. Both PrPC and PrPSc share the exact same primary amino acid sequence; however, pathogenic PrPSc undergoes a conformational shift from alpha-helices to protease-resistant beta-sheets that catalyze further misfolding of normal PrPC molecules.",
      "Options B, C, and D are false (prions completely lack nucleic acids).",
      "bio-viruses-viroids-lichens", "Prion Beta Sheet Conformation")

    q(226, "Scrapie in sheep and goats is a fatal neurodegenerative disease caused by:",
      "A prion", "A viroid", "A bacterium", "A protozoan",
      "A", "Scrapie prion disease.",
      "1. Scrapie is the prototypical transmissible spongiform encephalopathy (TSE) of sheep and goats, caused by neurotoxic prion protein aggregates.",
      "Options B, C, and D are incorrect pathogens.",
      "bio-viruses-viroids-lichens", "Scrapie Prion")

    q(227, "Lichens are extremely sensitive to sulfur dioxide (SO2) pollution because:",
      "They absorb air and rainwater over their entire un-cuticularized surface and lack stomata or excretory mechanisms to eliminate absorbed toxins",
      "They have thick impermeable wax that repels rain",
      "They only eat sulfur",
      "They possess high metabolic excretion organs",
      "A", "Lichen SO2 sensitivity mechanism.",
      "1. Lichens lack a protective waxy cuticle, stomata, and roots, absorbing atmospheric moisture and dissolved gases over their entire body; SO2 enters cells freely, acidifying cytoplasm into sulfurous acid and destroying chlorophyll.",
      "Options B, C, and D contradict lichen physiology.",
      "bio-viruses-viroids-lichens", "Lichen SO2 Sensitivity")

    q(228, "In heteromerous lichens, what is the distinct internal layering from upper surface to lower surface?",
      "Upper cortex -> Algal layer (phycobiont) -> Medulla -> Lower cortex with rhizines",
      "Medulla -> Upper cortex -> Algal layer -> Rhizines",
      "Algal layer -> Upper cortex -> Medulla -> Lower cortex",
      "Capsid -> Nucleic acid -> Envelope",
      "A", "Heteromerous lichen internal anatomy.",
      "1. In stratified (heteromerous) lichens, the transverse section reveals: (1) upper fungal cortex (compact hyphae), (2) algal zone (photosynthetic phycobiont cells interwoven with hyphae), (3) medulla (loose fungal hyphae for gas exchange), and (4) lower cortex with anchoring rhizines.",
      "Options B and C scramble the natural anatomical zones. Option D describes a virus.",
      "bio-viruses-viroids-lichens", "Lichen Internal Layering")

    q(229, "The vegetative asexual propagules in lichens consisting of a few algal cells surrounded by fungal hyphae that detach as dust-like particles are called:",
      "Soredia", "Apothecia", "Heterocysts", "Ascospores",
      "A", "Lichen soredia.",
      "1. Soredia are microscopic powdery reproductive structures produced on the lichen thallus surface, each consisting of one or more algal cells enclosed in a tiny web of fungal hyphae, dispersed by wind.",
      "Option B is sexual fungal ascocarp. Option C fixes nitrogen in cyanobacteria. Option D is an ascomycete spore.",
      "bio-viruses-viroids-lichens", "Lichen Soredia")

    q(230, "Isidia in lichens are:",
      "Small coral-like or outgrowths on the thallus surface composed of both cortex, algal, and medullary tissue functioning in vegetative propagation and photosynthesis",
      "Fungal spores produced without algae",
      "Bacterial cells living in nodules",
      "Poisonous venom drops",
      "A", "Lichen isidia.",
      "1. Isidia are minute, cylindrical, branched or peltate outgrowths of the lichen thallus covered by an upper cortex and containing both photobiont and mycobiont cells, easily fragmented by animals or wind.",
      "Options B, C, and D are incorrect.",
      "bio-viruses-viroids-lichens", "Lichen Isidia")

    q(231, "Litmus paper, the classic pH indicator used in chemistry laboratories, is extracted from which lichen?",
      "Roccella tinctoria", "Usnea", "Cladonia rangiferina", "Parmelia",
      "A", "Litmus from Roccella.",
      "1. Litmus (a mixture of water-soluble dyes including azolitmin) is historically extracted from the marine lichen *Roccella tinctoria* and related species.",
      "Option B is old man's beard. Option C is reindeer moss. Option D is rock flower lichen.",
      "bio-viruses-viroids-lichens", "Litmus Roccella Lichen")

    q(232, "Cladonia rangiferina, commonly known as 'Reindeer moss', is an important food source for arctic herbivores. It is botanically a:",
      "Fruticose lichen", "True bryophyte moss", "Pteridophyte", "Angiosperm",
      "A", "Reindeer moss fruticose lichen.",
      "1. Despite the misleading common name 'Reindeer moss', *Cladonia rangiferina* is a branched, shrubby (fruticose) lichen that carpets arctic tundra and sustains reindeer during winter.",
      "Options B, C, and D are higher plant groups.",
      "bio-viruses-viroids-lichens", "Reindeer Moss Fruticose Lichen")

    q(233, "Which of the following plant viral diseases is characterized by severe downward and inward curling of leaf margins?",
      "Tobacco leaf curl virus", "Tobacco mosaic virus", "Citrus canker", "White rust of mustard",
      "A", "Leaf curl virus symptoms.",
      "1. Leaf curl virus infections (transmitted by whiteflies *Bemisia tabaci*) cause severe curling, thickening, and distortion of leaf margins in crops like tomato and tobacco.",
      "Option B causes mottling and mosaic. Option C is a bacterial disease. Option D is an oomycete fungal disease.",
      "bio-viruses-viroids-lichens", "Leaf Curl Virus")

    q(234, "Assertion (A): Viroids cause potato spindle tuber disease but do not possess a protein capsid.\nReason (R): The infectious agent of viroids consists solely of low molecular weight, single-stranded circular RNA.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on viroid composition.",
      "1. Both (A) and (R) are direct NCERT assertions.\n2. The fact that the entire infectious entity is composed exclusively of naked low molecular weight RNA directly explains why no capsid exists, so (R) explains (A).",
      "Options B, C, and D are incorrect.",
      "bio-viruses-viroids-lichens", "Viroid Composition AR")

    q(235, "Which of the following viruses has a polyhedral head connected to a helical contractile tail (binal symmetry)?",
      "Bacteriophage T4", "Tobacco mosaic virus", "Influenza virus", "Poliovirus",
      "A", "Binal symmetry in T4 bacteriophage.",
      "1. Complex bacteriophages like T4 exhibit binal (dual) symmetry, featuring an icosahedral polyhedral head housing the dsDNA genome attached to a helical contractile tail sheath.",
      "Option B is purely helical. Options C and D are spherical/icosahedral.",
      "bio-viruses-viroids-lichens", "Bacteriophage Binal Symmetry")

    q(236, "Why are lichens called 'consortia' or 'dual organisms'?",
      "Because they represent an obligate composite symbiotic partnership where a fungus and an alga live as a single integrated physiological unit",
      "Because they have two cell walls",
      "Because they reproduce twice a day",
      "Because they live in two countries",
      "A", "Consortium nature of lichens.",
      "1. Lichens are classic dual organisms (consortia) wherein neither partner can survive in the lichen form alone in the same ecological niche without the metabolic reciprocal exchange of photosynthate and water/shelter.",
      "Options B, C, and D are frivolous.",
      "bio-viruses-viroids-lichens", "Lichen Dual Organisms")

    q(237, "In a lichen, sexual reproduction is carried out almost exclusively by which partner?",
      "The fungal partner (mycobiont, which produces ascocarps or basidiocarps)",
      "The algal partner",
      "Both partners together forming a hybrid spore",
      "Neither partner ever reproduces",
      "A", "Lichen sexual reproduction by mycobiont.",
      "1. When lichens reproduce sexually, it is the fungal partner (usually an ascomycete) that develops apothecia or perithecia and discharges ascospores; upon germination, the fungal hypha must encounter the free-living compatible alga to reconstitute a lichen.",
      "Options B, C, and D are false.",
      "bio-viruses-viroids-lichens", "Lichen Sexual Reproduction Mycobiont")

    q(238, "Which of the following human diseases is NOT caused by a prion?",
      "Kuru disease", "Creutzfeldt-Jakob disease (CJD)", "Fatal familial insomnia", "Polio (Infantile paralysis)",
      "D", "Prion diseases vs Polio.",
      "1. Polio is caused by the poliovirus (an enterovirus ssRNA virus).\n2. Kuru, CJD, and Fatal Familial Insomnia are all human transmissible spongiform encephalopathies (TSEs) caused by infectious prions.",
      "Options A, B, and C are confirmed prion-induced neurological diseases.",
      "bio-viruses-viroids-lichens", "Prion vs Viral Disease Polio")

    q(239, "What happens when Tobacco Mosaic Virus (TMV) is treated with phenol in a laboratory experiment?",
      "The viral capsid proteins are denatured and precipitated, leaving behind pure infectious viral RNA (Fraenkel-Conrat experiment)",
      "The RNA is destroyed leaving pure protein",
      "The virus turns into a bacterium",
      "The virus multiplies ten times faster",
      "A", "Fraenkel-Conrat TMV reconstitution.",
      "1. Phenol extraction strips and denatures the protein capsomeres, isolating intact, infectious ssRNA, demonstrating that the nucleic acid alone possesses viral genetic infectivity.",
      "Options B, C, and D are false.",
      "bio-viruses-viroids-lichens", "TMV Phenol Extraction")

    q(240, "Which of the following viral enzymes allows the influenza virus to release newly budded virions from host respiratory epithelial cells?",
      "Neuraminidase", "Hemagglutinin", "Reverse transcriptase", "DNA ligase",
      "A", "Neuraminidase in Influenza.",
      "1. Neuraminidase is a viral spike glycoprotein that cleaves terminal sialic acid residues on the host cell membrane, facilitating release of mature budding influenza virions.",
      "Option B mediates host cell binding. Option C is in retroviruses. Option D is a host DNA repair enzyme.",
      "bio-viruses-viroids-lichens", "Influenza Neuraminidase")

    q(241, "Why does a virus crystallize like an abiotic chemical compound in the absence of a host cell?",
      "Because it consists of identical, symmetrically arranged macromolecules (proteins and nucleic acids) without continuous internal metabolism or liquid protoplasm",
      "Because it contains salt water",
      "Because it freezes at room temperature",
      "Because all viruses are minerals",
      "A", "Viral crystallization rationale.",
      "1. The regular, repetitive polyhedral or helical symmetry of viral capsids allows them to pack into regular crystal lattices under dehydration or precipitation (as Stanley demonstrated in 1935), behaving like non-living macromolecular assemblies outside living cells.",
      "Options B, C, and D are unscientific.",
      "bio-viruses-viroids-lichens", "Viral Crystallization Rationale")

    q(242, "Which of the following is a symptom of fungal infection in plants rather than a viral infection?",
      "White rust with chalky pustules containing sporangia",
      "Mosaic leaf pattern",
      "Vein clearing",
      "Leaf rolling and curling",
      "A", "Fungal vs viral plant symptoms in NCERT.",
      "1. White rust (chalky white blisters on leaves) is caused by the fungus *Albugo candida*.\n2. Mosaic patterns, vein clearing, and leaf rolling are standard viral symptoms listed in NCERT.",
      "Options B, C, and D are classic viral plant symptoms.",
      "bio-viruses-viroids-lichens", "Fungal vs Viral Plant Symptoms")

    q(243, "A bacteriophage that immediately lyses and kills its host bacterial cell after infection is termed a:",
      "Virulent phage (lytic phage)", "Temperate phage", "Prophage", "Viroid",
      "A", "Virulent lytic phage.",
      "1. A virulent (lytic) phage (such as T4) immediately diverts the bacterial metabolic machinery to assemble progeny virions and produces lysozyme to burst the host cell wall.",
      "Option B integrates into the genome. Option C is the integrated genome. Option D is an infectious RNA.",
      "bio-viruses-viroids-lichens", "Virulent Lytic Phage")

    q(244, "The lipid bilayer envelope found around certain animal viruses (like HIV and Influenza) is derived from:",
      "The host cell's plasma membrane during viral budding",
      "Synthesis by viral ribosomes",
      "Bacterial peptidoglycan",
      "Free fatty acids floating in air",
      "A", "Viral envelope derivation.",
      "1. Enveloped viruses acquire their lipid bilayer directly from the host plasma membrane (or nuclear/Golgi membrane) as the nucleocapsid extrudes (buds) out, incorporating viral glycoprotein spikes into the host lipid matrix.",
      "Options B, C, and D are biological fabrications.",
      "bio-viruses-viroids-lichens", "Viral Envelope Derivation")

    q(245, "Which of the following is an example of a crustose lichen that adheres so tightly to rock surfaces that it appears like a painted crust?",
      "Graphis scripta", "Usnea (fruticose)", "Parmelia (foliose)", "Cladonia (fruticose)",
      "A", "Crustose lichen Graphis.",
      "1. Crustose lichens (*Graphis*, *Rhizocarpon*) form thin, flat crusts firmly glued to rock or bark surfaces without a lower cortex, impossible to remove without chipping the rock.",
      "Option B is fruticose. Option C is foliose. Option D is fruticose.",
      "bio-viruses-viroids-lichens", "Crustose Lichen Graphis")

    q(246, "Foliose lichens are characterized by having a:",
      "Flat, leaf-like thallus with distinct upper and lower cortex attached by rhizines",
      "Erect, branched shrub-like thallus",
      "Thin paint-like crust",
      "Unicellular body like bacteria",
      "A", "Foliose lichen definition.",
      "1. Foliose lichens (e.g. *Parmelia*, *Peltigera*) have flattened, dorsiventral, lobed, leaf-like thalli attached to the substrate by hair-like fungal rhizines.",
      "Option B describes fruticose. Option C describes crustose. Option D is non-lichen.",
      "bio-viruses-viroids-lichens", "Foliose Lichen Definition")

    q(247, "Usnea is a prominent example of which lichen morphological form?",
      "Fruticose lichen (hair-like, shrubby, branching pendulous thallus)",
      "Crustose lichen",
      "Foliose lichen",
      "Slime mould",
      "A", "Usnea fruticose lichen.",
      "1. *Usnea* (Old man's beard) is a classic fruticose lichen that forms hanging, branched, cylindrical, shrubby or pendulous thalli from tree branches.",
      "Options B and C have crustose or foliose morphology. Option D is a protist.",
      "bio-viruses-viroids-lichens", "Usnea Fruticose")

    q(248, "Why did T.O. Diener name the newly discovered pathogen 'Viroid' in 1971?",
      "Because it resembled a virus in its infectious nature, but lacked the characteristic protein capsid of a virus (suffix '-oid' meaning resembling)",
      "Because it was discovered in Vienna",
      "Because it contained vitamin D",
      "Because it was visible to the naked eye",
      "A", "Viroid etymology in NCERT.",
      "1. NCERT states: '...it lacked the protein coat that is found in viruses, hence the name viroid.' The suffix '-oid' denotes 'resembling' (virus-like, but smaller and naked).",
      "Options B, C, and D are false.",
      "bio-viruses-viroids-lichens", "Viroid Etymology")

    q(249, "The genetic material of the Poliovirus is:",
      "Single-stranded positive-sense RNA (+ssRNA)", "Double-stranded DNA", "Double-stranded RNA", "Naked plasmid DNA",
      "A", "Poliovirus genetic material.",
      "1. Poliovirus (a picornavirus) possesses a single-stranded positive-sense RNA genome that can function directly as mRNA in the host cell cytoplasm.",
      "Options B, C, and D are different viral genome structures.",
      "bio-viruses-viroids-lichens", "Poliovirus ssRNA")

    q(250, "What is the primary ecological consequence if air pollution (SO2) increases severely in an urban forest?",
      "Lichens disappear completely, while tolerant bark algae and green soot-covered fungi survive",
      "Lichens grow ten times larger",
      "Lichens begin producing flowers",
      "Lichens become photosynthetic trees",
      "A", "Lichen sensitivity to air pollution in NCERT.",
      "1. Because lichens are bio-indicators that cannot tolerate sulfur dioxide, increasing urban SO2 creates 'lichen deserts' where sensitive fruticose and foliose lichens die and vanish.",
      "Options B, C, and D are scientifically absurd.",
      "bio-viruses-viroids-lichens", "Lichen Desert Air Pollution")

    return questions

if __name__ == '__main__':
    qs = get_part2_questions()
    print(f"Generated {len(qs)} questions for Part 2.")
    assert len(qs) == 125, f"Expected 125, got {len(qs)}"
    med_count = sum(1 for q in qs if q['difficulty'] == 'Medium')
    assert med_count == 125, f"Expected 125 Medium, got {med_count}"
    print("Biological Classification Part 2 validation passed!")
