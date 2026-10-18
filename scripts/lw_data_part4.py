import json

def get_part4_questions():
    questions = []

    def q(num, text, a, b, c, d, ans, concept, step, why_wrong, topic_id, subtopic):
        opt_dict = {"A": a, "B": b, "C": c, "D": d}
        topic_titles = {
            "bio-living-biodiversity": "What is Living? & Biodiversity",
            "bio-classification-taxonomy": "Need for Classification & Taxonomy",
            "bio-species-hierarchy": "Concept of Species & Taxonomical Hierarchy",
            "bio-nomenclature-systematics": "Binomial Nomenclature & Systematics"
        }
        explanation = (
            f"1. CONCEPT:\n{concept}\n\n"
            f"2. STEP-BY-STEP SOLUTION:\n{step}\n\n"
            f"3. FINAL ANSWER:\nOption {ans}: {opt_dict[ans]}\n\n"
            f"4. WHY OTHER OPTIONS ARE WRONG:\n{why_wrong}"
        )
        questions.append({
            "id": f"living-world-mcq-{num:03d}",
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
            "difficulty": "Hard",
            "subject": "Biology",
            "class": "11",
            "chapter": "The Living World",
            "chapterId": "living-world",
            "topic": topic_titles[topic_id],
            "topicId": topic_id,
            "subtopic": subtopic,
            "source": "VG Insights Practice",
            "isPYQ": False
        })

    # --- TOPIC 1: bio-living-biodiversity (Q376 - Q407) ---
    q(376, "Evaluate the following statements regarding the characteristics of living organisms:\n(A) Growth in living organisms is an intrinsic physiological process (intussusception), whereas in non-living objects, it is extrinsic accretion.\n(B) Reproduction cannot be considered an all-inclusive defining property of life because organisms like mules, worker bees, and infertile human couples do not reproduce.\n(C) Isolated metabolic reactions performed in vitro are not living organisms, but they are surely living reactions.\n(D) Cellular organisation of the body and consciousness are defining properties of all life forms without exception.\nWhich of the following combinations contains ONLY CORRECT statements?",
      "(A) and (B) only", "(B) and (C) only", "(A), (B), and (D) only", "(A), (B), (C), and (D)",
      "D", "Comprehensive analysis of living characteristics in NCERT.",
      "1. Statement A is correct: living growth occurs by internal synthesis of protoplasm (intussusception), while inanimate objects grow by superficial accretion.\n2. Statement B is correct: sterile organisms are metabolically alive but cannot reproduce, disqualifying reproduction as an all-inclusive defining criterion.\n3. Statement C is correct: NCERT explicitly defines in vitro metabolic conversions as living reactions, though not living organisms.\n4. Statement D is correct: cellular organisation and responsiveness (consciousness) have zero exceptions across all living taxa.\n5. Therefore, all four statements (A, B, C, D) are completely correct.",
      "Options A, B, and C omit one or more verified correct statements.",
      "bio-living-biodiversity", "Comprehensive Living Characteristics Analysis")

    q(377, "Assertion (A): Consciousness is defined as the most technically complicated and obvious feature of all living organisms.\nReason (R): All organisms, from primitive prokaryotes to the most complex eukaryotes, can sense environmental cues and mount coordinated physiological responses.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reasoning on consciousness complexity.",
      "1. Assertion (A) is true: NCERT verbatim identifies consciousness as the most technically complicated and obvious feature of life.\n2. Reason (R) is true: this is because irritability and stimulus-response integration operate universally across all kingdoms (bacteria undergoing chemotaxis up to mammals responding neuro-endocrinologically), explaining why it is universally diagnostic.",
      "Options B, C, and D are incorrect.",
      "bio-living-biodiversity", "Consciousness Complexity AR")

    q(378, "Consider the following statements regarding emergent biological properties:\nStatement I: The properties of a tissue are not present in the constituent cells, but arise as a result of interactions among the constituent cells.\nStatement II: The properties of cellular organelles are already fully present in the individual isolated molecular constituents that make up the organelle.\nChoose the correct option:",
      "Statement I is correct, Statement II is incorrect",
      "Statement I is incorrect, Statement II is correct",
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "A", "Emergent properties of biological hierarchies.",
      "1. Statement I is correct: higher-level biological properties emerge from structural interactions among lower-level components (e.g., cardiac tissue contractions emerge from cell-to-cell intercalated disc couplings).\n2. Statement II is INCORRECT because NCERT explicitly clarifies that properties of organelles do not exist in the isolated macromolecules (lipids, proteins, nucleic acids), but emerge solely from their dynamic molecular interactions.",
      "Options B, C, and D misjudge the validity of Statement II.",
      "bio-living-biodiversity", "Emergent Properties Evaluation")

    q(379, "A brain-dead patient on life-support in an intensive care unit (ICU) lacks self-consciousness and has no voluntary reflexes. Biologically, why can this patient NOT be declared non-living at the tissue level?",
      "Because the machine produces artificial gametes",
      "Because individual cells and tissues continue aerobic cellular respiration, glucose catabolism, and membrane transport in the presence of oxygenated perfusate",
      "Because the patient is conscious of philosophical arguments",
      "Because non-living things also show organ transplantation",
      "B", "Physiological and cellular evaluation of brain death.",
      "1. Although the cerebral cortex and brainstem have irreversibly lost higher integrative and sensory functions (loss of self-consciousness), the somatic cells of the liver, kidneys, and heart remain metabolically active, synthesizing ATP and executing cellular maintenance.\n2. Thus, cellular life persists even when organismal neuro-coordination is extinguished.",
      "Options A, C, and D are biologically invalid.",
      "bio-living-biodiversity", "Brain Death Physiological Analysis")

    q(380, "Match the biological phenomena in Column I with their fundamental biological basis in Column II:\nColumn I:\n(p) Induction of flowering in seasonal angiosperms\n(q) Increase in mass of a sand dune\n(r) True morphallactic regeneration\n(s) Lack of progeny in interspecific equine hybrids\nColumn II:\n(1) Failure of homologous chromosome synapsis in meiosis\n(2) Perception of photoperiod via phytochrome signaling\n(3) Extrinsic accretion of non-cellular particulates\n(4) Epimorphic cell proliferation in Planaria",
      "p-2, q-3, r-4, s-1",
      "p-1, q-4, r-3, s-2",
      "p-3, q-2, r-1, s-4",
      "p-4, q-1, r-2, s-3",
      "A", "Advanced matching of physiological phenomena.",
      "1. Induction of flowering by photoperiodism operates via phytochrome signaling (p-2).\n2. Sand dune growth is extrinsic accretion of non-cellular particles (q-3).\n3. True regeneration in Planaria involves epimorphic/morphallactic proliferation of neoblasts (r-4).\n4. Hybrid sterility in mules is caused by failure of homologous chromosome pairing during meiosis (s-1).\n5. Correct sequence: p-2, q-3, r-4, s-1.",
      "Options B, C, and D are scrambled.",
      "bio-living-biodiversity", "Advanced Physiological Match")

    q(381, "Why does NCERT consider cellular organisation of the body, rather than growth, as a defining property of life?",
      "Because growth can occur in inanimate objects via superficial accumulation of matter, whereas cellular architecture with a self-contained metabolic protoplasm is uniquely restricted to living organisms",
      "Because cells do not possess mass",
      "Because non-living objects have more complex cellular organelles than bacteria",
      "Because growth requires nuclear fusion",
      "A", "Cellular organisation vs growth as defining.",
      "1. Growth defined merely as increase in body mass is exhibited extrinsically by non-living boulders and dunes, destroying its uniqueness.\n2. In contrast, cellular organisation (protoplasm enclosed by a selectively permeable plasma membrane executing metabolic homeostasis) has zero non-living analogs and zero living exceptions.",
      "Options B, C, and D are counter-factual.",
      "bio-living-biodiversity", "Cellular Organisation Rationale")

    q(382, "Read the following statements:\n(A) In bacteria and Amoeba, growth and reproduction are mutually inclusive events.\n(B) In human beings, growth and reproduction are mutually exclusive events.\n(C) Self-consciousness is an attribute present in all chordates.\n(D) Isolated enzymatic reactions in cell-free test tubes are neither living organisms nor non-living reactions.\nWhich statement(s) is/are INCORRECT?",
      "(C) only", "(B) and (C) only", "(A) and (D) only", "(C) and (D) only",
      "A", "Identification of false statement regarding self-consciousness.",
      "1. Statement A is correct (cell division increases both mass and organism count in unicellulars).\n2. Statement B is correct (human cell division does not produce an offspring).\n3. Statement C is INCORRECT because self-consciousness is unique to humans (*Homo sapiens*); it is not present in all chordates (fishes, amphibians, reptiles, or non-human mammals).\n4. Statement D is correct (NCERT verbatim: 'neither living nor non-living... but surely living reactions').\n5. Hence, only Statement (C) is incorrect.",
      "Options B, C, and D incorrectly classify valid statements as false.",
      "bio-living-biodiversity", "Self-consciousness False Check")

    q(383, "Assertion (A): All living organisms maintain a dynamic steady-state and never reach true chemical equilibrium.\nReason (R): In a closed thermodynamic system, chemical equilibrium represents the state of maximum entropy and zero work capacity, which in living systems corresponds to biological death.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on non-equilibrium steady state.",
      "1. Assertion (A) is true: living systems are non-equilibrium open systems with continuous flux of metabolites and free energy.\n2. Reason (R) is true: at true chemical equilibrium, ΔG = 0 and no work can be performed, which characterizes biological death; continuous metabolic reactions prevent this state, explaining (A).",
      "Options B, C, and D are incorrect.",
      "bio-living-biodiversity", "Thermodynamics Equilibrium AR")

    q(384, "Which of the following biological observations decisively proves that reproduction is NOT an essential defining characteristic of an individual organism's living status?",
      "A sterile worker honeybee actively builds honeycombs, nurses larvae, defends the hive, and consumes food without ever laying eggs",
      "Mules are larger in body mass than donkeys",
      "Amoeba divides by binary fission",
      "Plants grow throughout their life span",
      "A", "Worker honeybee proof of non-defining reproduction.",
      "1. A worker honeybee exhibits intense locomotion, respiration, social communication (waggle dance), temperature regulation, and defense, demonstrating life in every metabolic sense despite total reproductive sterility.",
      "Options B, C, and D do not demonstrate living survival in the absence of reproduction.",
      "bio-living-biodiversity", "Worker Bee Living Proof")

    q(385, "Consider the following statements regarding growth:\nStatement I: In plants, growth is localized and continuous throughout life due to persistent meristematic activity.\nStatement II: In animals, growth is diffused throughout the body and stops after a genetically determined adult size is reached, with cell division subsequently restricted to repair and cell turnover.\nChoose the correct option:",
      "Statement I is correct, Statement II is incorrect",
      "Statement I is incorrect, Statement II is correct",
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "C", "Comparative plant and animal growth physiology.",
      "1. Statement I accurately summarizes open, localized, indeterminate plant growth driven by apical, intercalary, and lateral meristems.\n2. Statement II accurately summarizes closed, determinate animal growth regulated by endocrine cessation of epiphyseal plate chondrogenesis and organ-level size checkpoints.",
      "Options A, B, and D misjudge these established biological principles.",
      "bio-living-biodiversity", "Growth Physiology Comparison")

    q(386, "Why are biochemical pathways in all living organisms said to be 'metabolically interconnected'?",
      "Because every metabolic reaction is linked to other reactions where the product of one enzyme becomes the substrate for the next, forming an integrated dynamic metabolic web",
      "Because all reactions occur in a single test tube simultaneously without enzymes",
      "Because living organisms do not use catalysts",
      "Because all pathways produce identical vitamins",
      "A", "Metabolic integration in living systems.",
      "1. Metabolism is not a series of isolated reactions; catabolic and anabolic pathways are linked through common intermediates (e.g., pyruvate, acetyl-CoA, oxaloacetate) into a coherent, highly regulated metabolic network.",
      "Options B, C, and D contradict fundamental biochemistry.",
      "bio-living-biodiversity", "Metabolic Web Integration")

    q(387, "Which of the following scenarios describes intrinsic growth?",
      "A crystal of copper sulfate growing larger in a supersaturated solution",
      "A developing embryo increasing in cell count and mass via mitotic division and protein synthesis",
      "A sand dune growing taller following a desert windstorm",
      "A stalagmite growing on a cavern floor from calcium carbonate precipitation",
      "B", "Intrinsic growth identification.",
      "1. The developing embryo synthesizes new protoplasm, replicates DNA, and divides internally (intussusception).\n2. Crystals, sand dunes, and stalagmites grow purely by external surface deposition (accretion).",
      "Options A, C, and D are classic examples of extrinsic accretion in inanimate objects.",
      "bio-living-biodiversity", "Intrinsic Growth Embryo")

    q(388, "Which of the following statements about consciousness in living organisms is FALSE?",
      "Human beings are the only organisms that exhibit self-consciousness",
      "Prokaryotes lack consciousness because they lack a nervous system",
      "Plants perceive and respond to light, water, temperature, other organisms, and pollutants",
      "All organisms handle chemicals entering their bodies",
      "B", "Prokaryote consciousness correction.",
      "1. Statement B is false because prokaryotes demonstrate consciousness (environmental sensing and response) via chemotaxis, quorum sensing, and phototaxis, despite lacking neural structures.\n2. Statements A, C, and D are direct NCERT assertions.",
      "Options A, C, and D are true facts.",
      "bio-living-biodiversity", "Prokaryote Consciousness False")

    q(389, "Assertion (A): An isolated metabolic reaction in vitro is not a living organism.\nReason (R): It lacks a cellular membrane, protoplasmic compartmentalization, and the capacity for autonomous homeostatic self-regulation.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on in vitro reactions lacking organismal status.",
      "1. (A) is true: an in vitro reaction is not an independent organism.\n2. (R) is true: the absence of a cellular boundary, cytoplasm, and autonomous feedback loops explains why an isolated chemical transformation cannot be designated as an organism.",
      "Options B, C, and D are incorrect.",
      "bio-living-biodiversity", "In Vitro Organism Status AR")

    q(390, "Which of the following is a living organism that exhibits high regenerative power via morphallaxis?",
      "Planaria (Dugesia)", "Ascaris lumbricoides", "Taenia solium", "Fasciola hepatica",
      "A", "Planaria morphallaxis.",
      "1. Planaria has a population of pluripotent somatic stem cells (neoblasts) that can rebuild any severed body piece into an entire complete organism via morphallactic remodeling and epimorphic blastema growth.",
      "Options B, C, and D are parasitic helminths lacking whole-body morphallactic regeneration.",
      "bio-living-biodiversity", "Planaria Morphallaxis")

    q(391, "In the context of the definition of life, what does 'self-replication' signify?",
      "The capacity of genetic material (DNA) to replicate accurately, enabling cellular division and transmission of hereditary information to daughter cells",
      "The mechanical division of sand grains by ocean waves",
      "The dissolution of salt in water",
      "The formation of clouds in the troposphere",
      "A", "Biological self-replication.",
      "1. Self-replication is the autonomous biological capacity of nucleic acids (directed by DNA polymerase and cellular machinery) to synthesize faithful copies, underpinning all reproduction and inheritance.",
      "Options B, C, and D are abiotic physical phenomena.",
      "bio-living-biodiversity", "Self-replication Meaning")

    q(392, "Consider the following features:\n(1) Metabolism\n(2) Intrinsic growth\n(3) Extrinsic accretion\n(4) Cellular organization\n(5) Consciousness\nHow many of these are DEFINING features of all living organisms?",
      "Two", "Three", "Four", "Five",
      "B", "Count of defining features.",
      "1. Defining features must be present in all living beings without exception and absent in non-living objects:\n- (1) Metabolism: Defining\n- (2) Intrinsic growth: Defining (when specifically defined as intrinsic intussusception)\n- (4) Cellular organization: Defining\n- (5) Consciousness: Defining\n2. Note that according to NCERT, broad 'growth' (incorporating extrinsic accretion) is NOT defining, and reproduction is NOT defining. But among this list, (1) Metabolism, (4) Cellular organisation, and (5) Consciousness are the classic trio of universal defining features (or 4 if intrinsic growth is qualified).\n3. NCERT identifies Metabolism, Cellular organisation, and Consciousness as the unambiguous triad of defining properties (3 defining features).",
      "Options A, C, and D give incorrect counts.",
      "bio-living-biodiversity", "Defining Features Count Triad")

    q(393, "Why is an abiotic crystal growing in a supersaturated sodium chloride solution NOT considered alive?",
      "Because its growth is extrinsic accretion of pre-existing ions from the solution onto a lattice, accompanied by neither cellular metabolism nor internal synthesis",
      "Because it is transparent",
      "Because it does not dissolve in water",
      "Because it contains sodium",
      "A", "Crystal growth non-living distinction.",
      "1. Crystal growth is an ionic thermodynamic precipitation event on a non-cellular surface without enzyme catalysis, protoplasmic synthesis, homeostatic regulation, or response to stimuli.",
      "Options B, C, and D are irrelevant physical attributes.",
      "bio-living-biodiversity", "Crystal Non-living Distinction")

    q(394, "Which of the following statements about seasonal breeders is INCORRECT?",
      "Seasonal breeders produce gametes and mate only during specific favorable seasons of the year",
      "Photoperiod acts as the primary environmental cue for their reproductive hormonal activation",
      "Seasonal breeding is seen exclusively in animals, never in plants",
      "Both wild mammals and flowering plants exhibit seasonal reproductive cycles",
      "C", "Seasonal breeders in plants and animals.",
      "1. Statement C is incorrect because plants are classic seasonal breeders (seasonal flowering induced by photoperiod and vernalization, e.g., winter and spring annuals).\n2. Statements A, B, and D are completely correct.",
      "Options A, B, and D are valid biological facts.",
      "bio-living-biodiversity", "Seasonal Breeders Incorrect Statement")

    q(395, "Which of the following represents an accurate distinction between anabolism and catabolism?",
      "Anabolism is endergonic and builds macromolecules; catabolism is exergonic and breaks down macromolecules to liberate energy",
      "Anabolism breaks down glucose; catabolism synthesizes proteins",
      "Anabolism occurs only in plants; catabolism occurs only in animals",
      "Anabolism is non-enzymatic; catabolism requires enzymes",
      "A", "Anabolism vs catabolism bioenergetics.",
      "1. Anabolism consists of biosynthetic, energy-consuming (endergonic) reactions constructing complex polymers from simpler precursors.\n2. Catabolism consists of degradative, energy-releasing (exergonic) pathways breaking down complex substrates to regenerate ATP and reducing equivalents.",
      "Options B, C, and D misrepresent biochemistry.",
      "bio-living-biodiversity", "Anabolism vs Catabolism Bioenergetics")

    q(396, "Why is homeostasis considered a prerequisite for maintaining metabolic pathways?",
      "Because metabolic enzymes have strict pH, ionic strength, and temperature optima, and would denature or cease functioning if internal conditions fluctuated wildly",
      "Because homeostasis freezes all chemical reactions",
      "Because enzymes only work in absolute vacuum",
      "Because homeostasis converts proteins into carbohydrates",
      "A", "Enzyme kinetics and homeostasis.",
      "1. Cellular enzymes require precise physicochemical conditions (e.g., pH 7.2-7.4, 37°C in human cells, specific osmolarity) to preserve active site tertiary conformation and catalytic velocity.\n2. Homeostatic regulation maintains this internal milieu.",
      "Options B, C, and D are false.",
      "bio-living-biodiversity", "Homeostasis Enzyme Prerequisite")

    q(397, "Which of the following organisms reproduces asexually by the production of exogenous conidia?",
      "Penicillium (Ascomycete fungus)", "Hydra", "Planaria", "Amoeba",
      "A", "Conidia in Penicillium.",
      "1. In *Penicillium*, asexual reproduction occurs through non-motile exogenous spores called conidia, produced in chains on specialized conidiophores.",
      "Option B reproduces by budding. Option C shows regeneration. Option D divides by binary fission.",
      "bio-living-biodiversity", "Penicillium Conidia")

    q(398, "Assertion (A): Living organisms are self-regulating interactive systems.\nReason (R): Molecular components inside a cell interact dynamically, giving rise to novel emergent properties at the organelle, cellular, and tissue levels.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on interactive systems and emergence.",
      "1. Both statements reflect the integrative principles stated in NCERT summary.\n2. The dynamic interaction among molecular components generates the regulatory feedback loops that make self-regulation possible, so (R) explains (A).",
      "Options B, C, and D are incorrect.",
      "bio-living-biodiversity", "Self-regulating Interactive AR")

    q(399, "What is the biological significance of shared universal genetic code across all organisms?",
      "It proves that all living organisms share a common evolutionary origin and ancestral lineage",
      "It shows that all organisms have the same number of chromosomes",
      "It indicates that plants and animals have identical morphologies",
      "It demonstrates that viruses are independent cellular organisms",
      "A", "Universal genetic code evolutionary significance.",
      "1. The universal assignment of the 64 codons to the same 20 amino acids across bacteria, archaea, plants, and animals is the strongest biochemical evidence that all terrestrial life descended from a single Last Universal Common Ancestor (LUCA).",
      "Options B, C, and D are false.",
      "bio-living-biodiversity", "Universal Genetic Code Significance")

    q(400, "Which of the following organisms does NOT exhibit indeterminate localized growth throughout life?",
      "A flowering mango tree", "A moss protonema", "A blue whale (Balaenoptera musculus)", "A neem tree",
      "C", "Determinate growth in blue whale.",
      "1. The blue whale is a mammal (animal) and exhibits determinate growth, ceasing skeletal expansion upon reaching adult maturity.\n2. Mango, neem, and moss protonema are photosynthetic plants exhibiting indeterminate growth via persistent meristematic cell division.",
      "Options A, B, and D are plants possessing meristematic indeterminate growth.",
      "bio-living-biodiversity", "Determinate Whale Growth")

    q(401, "Why does a fragmented filamentous green alga (Spirogyra) multiply so rapidly in freshwater ponds?",
      "Because every filament fragment undergoes mitotic cell divisions and cell elongation to regenerate a full vegetative filament",
      "Because fragments produce seeds",
      "Because water converts algae into bacteria",
      "Because algae grow by extrinsic accretion of mud",
      "A", "Spirogyra fragmentation kinetics.",
      "1. Intercalary cell division in each fragmented multicellular filament rapidly elongates the filament, multiplying the vegetative population exponentially without requiring gametogenesis.",
      "Options B, C, and D are biologically incorrect.",
      "bio-living-biodiversity", "Spirogyra Fragmentation Kinetics")

    q(402, "Which characteristic of life explains why human skin sweats when ambient temperature rises above 37°C?",
      "Thermoregulatory homeostasis driven by sensory consciousness and neuro-endocrine feedback",
      "Extrinsic accretion of atmospheric water vapor",
      "Cellular asexual budding",
      "Metabolic catabolic decay",
      "A", "Sweating as homeostatic response.",
      "1. Hypothalamic thermoreceptors detect increased blood temperature, triggering sympathetic stimulation of eccrine sweat glands to promote evaporative cooling, illustrating sensory responsiveness coupled to homeostatic regulation.",
      "Options B, C, and D are scientifically erroneous.",
      "bio-living-biodiversity", "Thermoregulatory Sweating")

    q(403, "Consider the following statements:\nStatement I: All living organisms handle chemicals entering their bodies.\nStatement II: All organisms are aware of their surroundings.\nChoose the correct option:",
      "Statement I is correct, Statement II is incorrect",
      "Statement I is incorrect, Statement II is correct",
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "C", "Chemical handling and awareness in NCERT.",
      "1. NCERT verbatim: 'All organisms handle chemicals entering their bodies. All organisms therefore, are \"aware\" of their surroundings.'\n2. Both statements are explicit NCERT declarations.",
      "Options A, B, and D contradict the text.",
      "bio-living-biodiversity", "Chemical Handling and Awareness")

    q(404, "Which of the following is the most comprehensive and scientifically accurate definition of biodiversity in modern biology?",
      "The total variety of genes, species, and ecosystems across the biosphere",
      "Only the number of cultivated fruit varieties in agricultural farms",
      "The number of stuffed birds in national museums",
      "The total mass of fallen dry leaves in a deciduous forest",
      "A", "Comprehensive definition of biodiversity.",
      "1. Biodiversity encompasses biological diversity at three integrated levels: genetic diversity within species, species diversity within communities, and ecosystem/ecological diversity across biomes.",
      "Options B, C, and D are trivial or non-representative.",
      "bio-living-biodiversity", "Comprehensive Biodiversity Definition")

    q(405, "Why is an asexual clone genetically uniform compared to sexually produced progeny?",
      "Because asexual reproduction involves only mitosis without crossing-over, independent assortment, or random fertilization",
      "Because asexual clones lack chromosomes",
      "Because clones do not contain DNA",
      "Because sexual reproduction involves no genetic variation",
      "A", "Genetic uniformity of asexual clones.",
      "1. Mitotic division faithfully replicates the parental genome without the meiotic recombination (crossing-over in pachytene) or amphimixis that generate novel allelic combinations in sexual reproduction.",
      "Options B, C, and D are counter to genetics.",
      "bio-living-biodiversity", "Clonal Uniformity Genetics")

    q(406, "Which of the following represents an accurate physiological reason why living organisms die?",
      "Breakdown of cellular homeostatic maintenance, accumulation of metabolic waste and oxidative damage, and loss of organized energy flow",
      "Extrinsic accretion of too many rocks",
      "Conversion of all DNA into starch",
      "Attaining infinite thermodynamic equilibrium",
      "A", "Physiological basis of biological death.",
      "1. Biological senescence and organismal death result from irreversible failure of homeostatic integration, molecular damage to nucleic acids/membranes by reactive oxygen species, and cessation of cellular ATP production.",
      "Options B, C, and D are non-biological or fabricated.",
      "bio-living-biodiversity", "Physiological Death Basis")

    q(407, "Which of the following statements about reproduction is TRUE?",
      "No non-living object is capable of reproducing or replicating by itself",
      "All living organisms reproduce sexually",
      "Growth and reproduction are mutually exclusive in unicellular bacteria",
      "Reproduction is a defining property of life",
      "A", "True reproduction statement.",
      "1. NCERT explicitly states: 'No non-living object is capable of reproducing or replicating by itself.'\n2. While reproduction is non-defining due to sterile organisms, its complete absence in inanimate objects is an absolute fact.",
      "Option B is false (asexual reproduction is widespread). Option C is false (they are inclusive). Option D is false (reproduction is non-defining).",
      "bio-living-biodiversity", "True Reproduction Fact")

    # --- TOPIC 2: bio-classification-taxonomy (Q408 - Q439) ---
    q(408, "Evaluate the following statements regarding taxonomic aids:\n(A) A herbarium serves as a quick referral system in taxonomical studies.\n(B) Botanical gardens have collections of living plants for reference and ex-situ conservation.\n(C) In museums, insects are preserved in insect boxes after collecting, killing, and pinning.\n(D) A separate taxonomic key is required for each taxonomic category such as family, genus, and species.\nWhich of the above statements are CORRECT according to NCERT?",
      "(A) and (B) only", "(A), (B), and (C) only", "(B), (C), and (D) only", "(A), (B), (C), and (D)",
      "D", "Comprehensive taxonomic aids verification in NCERT.",
      "1. Statement A is correct (NCERT verbatim: 'quick referral systems in taxonomical studies').\n2. Statement B is correct (living plant collections with botanical names and families).\n3. Statement C is correct (NCERT verbatim on insect preservation protocol).\n4. Statement D is correct (NCERT verbatim: 'Separate taxonomic keys are required for each taxonomic category...').\n5. All four statements are completely accurate.",
      "Options A, B, and C omit valid NCERT statements.",
      "bio-classification-taxonomy", "Taxonomic Aids Comprehensive Check")

    q(409, "Assertion (A): Keys are taxonomical aids that are analytical in nature.\nReason (R): Identification in a key proceeds through a sequence of dichotomous choices between two contrasting leads, where accepting one lead results in the rejection of the other.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on analytical dichotomous keys.",
      "1. Both (A) and (R) are accurate NCERT assertions.\n2. The logical exclusion of alternative leads at each dichotomous fork is the exact operational mechanism that makes keys analytical in nature, so (R) explains (A).",
      "Options B, C, and D are incorrect.",
      "bio-classification-taxonomy", "Analytical Keys Dichotomy AR")

    q(410, "A research botanist discovers a new endemic angiosperm in the Silent Valley National Park. Which sequence of taxonomical procedures must be executed to formally introduce this species to science?",
      "Nomenclature -> Classification -> Identification -> Characterisation",
      "Characterisation of all morphological traits -> Identification and comparison with herbarium types -> Naming according to ICN rules -> Placement in the taxonomic classification system",
      "Fumigating the forest -> Pinning flowers in insect boxes -> Stuffing leaves with cotton",
      "Assigning an English vernacular name -> Burning the wild habitat",
      "B", "Canonical taxonomic execution workflow.",
      "1. The rigorous sequence follows CINC:\n- 1. Characterisation (detailed description of vegetative, floral, anatomical, and cytological traits);\n- 2. Identification (comparison with type specimens and keys in herbaria to confirm novelty);\n- 3. Nomenclature (formulating a valid Latinized binomial according to ICN rules, designating a holotype);\n- 4. Classification (assigning the species to its appropriate genus, family, order, class, and division).",
      "Options A, C, and D are scrambled or absurd.",
      "bio-classification-taxonomy", "Taxonomic Workflow Execution")

    q(411, "Consider the following statements regarding taxonomic literature:\nStatement I: A 'Flora' contains the actual account of habitat and distribution of plants of a given area, providing an index to the plant species.\nStatement II: A 'Manual' provides information for the identification of names of species found in an area.\nStatement III: A 'Monograph' contains comprehensive information on any one taxon.\nChoose the correct option:",
      "Only Statement I is correct",
      "Only Statements I and II are correct",
      "All Statements I, II, and III are correct",
      "All Statements are incorrect",
      "C", "Taxonomic literatures NCERT definitions.",
      "1. Statement I is verbatim NCERT definition of Flora.\n2. Statement II is verbatim NCERT definition of Manual.\n3. Statement III is verbatim NCERT definition of Monograph.\n4. All three statements are completely correct.",
      "Options A, B, and D fail to recognize the accuracy of all three NCERT statements.",
      "bio-classification-taxonomy", "Taxonomic Literature Triad")

    q(412, "Why is an artificial system of classification like that of Linnaeus considered inferior to a natural system of classification like that of Bentham and Hooker?",
      "Because Linnaeus used stamen numbers, which separated closely related taxa and grouped unrelated plants together based on superficial vegetative or sexual traits",
      "Because Bentham and Hooker used computers",
      "Because Linnaeus did not use Latin names",
      "Because natural systems only classify animals",
      "A", "Artificial vs Natural systems critique.",
      "1. Artificial systems rely on one or very few arbitrary sexual/vegetative characters (e.g., Linnaeus's stamen count grouped monocots and dicots together simply if they had 6 stamens).\n2. Natural systems (Bentham & Hooker) evaluated overall natural affinities, anatomy, embryology, and floral morphology, keeping related taxa intact.",
      "Options B, C, and D are historically and scientifically false.",
      "bio-classification-taxonomy", "Artificial vs Natural Systems Critique")

    q(413, "Match the taxonomic terms in Column I with their correct definitions in Column II:\nColumn I:\n(p) Couplet\n(q) Lead\n(r) Monograph\n(s) Flora\nColumn II:\n(1) Each individual statement within a taxonomic key\n(2) Pair of contrasting characters in a taxonomic key\n(3) Account of habitat, distribution, and index of plants of an area\n(4) Complete treatise providing information on any one taxon",
      "p-2, q-1, r-4, s-3",
      "p-1, q-2, r-3, s-4",
      "p-4, q-3, r-2, s-1",
      "p-2, q-4, r-1, s-3",
      "A", "Matching taxonomic literature and key components.",
      "1. Couplet = pair of contrasting characters in a key (p-2).\n2. Lead = each individual statement in a key (q-1).\n3. Monograph = complete information on any one taxon (r-4).\n4. Flora = account of habitat and distribution of plants of an area (s-3).\n5. Correct mapping: p-2, q-1, r-4, s-3.",
      "Options B, C, and D have incorrect associations.",
      "bio-classification-taxonomy", "Taxonomic Terms Match")

    q(414, "Which of the following is NOT an archival or curatorial function performed during the preparation of a permanent herbarium specimen?",
      "Poisoning with 0.1% mercuric chloride (HgCl2) to prevent fungal and insect attack",
      "Pressing between absorbent blotters with periodic drying",
      "Boiling the specimen in 10% hydrochloric acid to dissolve cellulose",
      "Affixing a standardized identification label at the lower right corner",
      "C", "Herbarium preparation errors.",
      "1. Boiling in acid would disintegrate and destroy the plant specimen.\n2. Collection, pressing, drying, poisoning, mounting on 29x41.5 cm sheets, and labeling are the authentic standardized steps.",
      "Options A, B, and D are mandatory curatorial steps.",
      "bio-classification-taxonomy", "Herbarium Preparation Protocol")

    q(415, "In numerical taxonomy (phenetics), how are different morphological characteristics evaluated?",
      "Floral characters are given 10 times more weightage than vegetative characters",
      "All observable characters are given equal weightage, with data processed mathematically via computers",
      "Only chromosome numbers are counted",
      "Only the presence of chlorophyll is measured",
      "B", "Numerical taxonomy equal weightage principle.",
      "1. Numerical taxonomy (Adansonian taxonomy/phenetics) operates on the principle of giving equal weightage to all observable characters (vegetative and reproductive), encoding hundreds of characters as 0/1 matrices processed by statistical clustering algorithms.",
      "Options A, C, and D violate the core tenet of phenetic equality.",
      "bio-classification-taxonomy", "Numerical Taxonomy Equal Weightage")

    q(416, "What is the critical distinction between a 'Taxon' and a 'Category' in biological systematics?",
      "A taxon is a concrete, tangible biological entity (e.g., Mammalia, Solanum), whereas a category is an abstract rank in the hierarchy (e.g., Class, Genus)",
      "A category is a real organism, whereas a taxon is an abstract concept",
      "Taxon applies only to plants; category applies only to animals",
      "Taxon is an extinct fossil; category is a living species",
      "A", "Taxon vs Category fundamental distinction.",
      "1. Taxon: a real, concrete group of organisms recognized at any level (e.g., Dogs, Chordata, Dicotyledonae, Homo sapiens).\n2. Category: the abstract rank, step, or status in the hierarchical ladder (e.g., Kingdom, Phylum, Class, Order, Family, Genus, Species).",
      "Options B, C, and D are false.",
      "bio-classification-taxonomy", "Taxon vs Category Distinction")

    q(417, "Assertion (A): Botanical gardens and zoological parks are ex-situ conservation facilities.\nReason (R): Organisms in botanical gardens and zoological parks are maintained and protected outside their natural wild habitats in carefully controlled human environments.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on ex-situ conservation.",
      "1. Both (A) and (R) are correct.\n2. Ex-situ conservation is by definition the preservation of components of biological diversity outside their natural habitats, which directly explains why botanical gardens and zoos are categorized as ex-situ.",
      "Options B, C, and D are incorrect.",
      "bio-classification-taxonomy", "Ex-situ Conservation AR")

    q(418, "Which of the following information is NOT recorded on a standard herbarium accession label?",
      "Botanical name and family of the plant",
      "Local vernacular and English common names",
      "Date, exact geographic locality, and collector's name",
      "Physiological transpiration rate of the leaf in mol/m2/s",
      "D", "Herbarium label contents.",
      "1. Herbarium labels record historical, geographical, and taxonomic accession data (date, locality, collector, vernacular name, family, scientific name, habitat notes).\n2. Dynamic physiological rates like transpiration cannot be measured on dead, dried specimens.",
      "Options A, B, and C are standard recorded items cited in NCERT.",
      "bio-classification-taxonomy", "Herbarium Label Data Items")

    q(419, "Why are fleshy cacti and succulent plants stored in liquid preservatives (4% formalin or FAA) in museum jars rather than mounted on flat herbarium sheets?",
      "Because fleshy succulent tissues rot, turn black, and collapse into amorphous mush under mechanical pressing, losing their 3-dimensional diagnostic morphology",
      "Because cacti are radioactive",
      "Because herbaria ban all spiny plants",
      "Because liquid preservatives make succulents grow flowers",
      "A", "Succulent preservation in FAA.",
      "1. Fleshy xerophytes (Cactaceae, Euphorbiaceae) possess thick water-storage parenchyma that decomposes during slow pressing; liquid preservation in FAA (formalin-aceto-alcohol) preserves 3D spine and stem anatomy.",
      "Options B, C, and D are absurd.",
      "bio-classification-taxonomy", "Succulent Liquid Preservation")

    q(420, "A botanist examining an unknown plant uses a taxonomic key and reads:\n'1a. Leaves alternate ........... go to 2\n1b. Leaves opposite ........... go to 5'\nThis pair of contrasting statements represents a:",
      "Couplet consisting of two leads", "Monograph", "Catalogue", "Herbarium sheet",
      "A", "Couplet and leads in keys.",
      "1. The pair of contrasting statements (1a and 1b) forms a couplet.\n2. Statement 1a is the first lead, and statement 1b is the second lead.",
      "Options B, C, and D are publications or specimens.",
      "bio-classification-taxonomy", "Couplet and Leads Structure")

    q(421, "Which of the following historical botanists introduced the concept of 'New Systematics' (Biosystematics) to replace classical morphology-dominated taxonomy?",
      "Julian Huxley", "Carolus Linnaeus", "Theophrastus", "Aristotle",
      "A", "Julian Huxley New Systematics.",
      "1. Sir Julian Huxley introduced 'New Systematics' (1940), emphasizing biosystematic synthesis (cytogenetics, ecology, geographical variation, population genetics) over rigid typological morphology.",
      "Options B, C, and D represent earlier historical frameworks.",
      "bio-classification-taxonomy", "Julian Huxley Biosystematics")

    q(422, "What is the primary role of Cytotaxonomy in resolving ambiguous phylogenetic relationships?",
      "It compares chromosome numbers, chromosome morphology (centromere position, size), and meiotic pairing behavior to assess evolutionary proximity",
      "It calculates soil mineral concentrations",
      "It measures the height of trees using satellites",
      "It evaluates the market value of timber",
      "A", "Cytotaxonomy phylogenetic role.",
      "1. Cytotaxonomy evaluates karyotypic parameters (chromosome number, arm ratios, satellites, heterochromatin banding) and meiotic bivalent pairing to determine genomic homology and ploidy relationships.",
      "Options B, C, and D are non-cytogenetic.",
      "bio-classification-taxonomy", "Cytotaxonomy Role")

    q(423, "Chemotaxonomy utilizes which of the following biological molecules to classify difficult plant taxa?",
      "Secondary metabolites like alkaloids, flavonoids, terpenoids, betalains, and DNA/protein sequences",
      "Only plain water molecules",
      "Only dissolved carbon dioxide",
      "Only silica grains in soil",
      "A", "Chemotaxonomy chemical markers.",
      "1. Chemotaxonomy exploits the taxonomic distribution of diagnostic chemical constituents: secondary plant metabolites (alkaloids, flavonoids, glucosinolates) and macromolecular sequences (DNA, cytochrome c).",
      "Options B, C, and D are ubiquitous inorganic compounds lacking phylogenetic specificity.",
      "bio-classification-taxonomy", "Chemotaxonomy Markers")

    q(424, "Why are separate taxonomic keys required for each taxonomic category (e.g., family key vs genus key vs species key)?",
      "Because each category represents a different level of morphological abstraction and is defined by characters appropriate to that specific hierarchical rank",
      "Because all taxonomic keys must be destroyed after one use",
      "Because genus keys are written in English while family keys are in French",
      "Because species do not have keys",
      "A", "Separate keys rationale in NCERT.",
      "1. A family key evaluates broad reproductive and floral traits common to multiple genera, whereas a species key evaluates minute morphological details (trichome types, leaf margins, petal dimensions) specific to individual species within a single genus.",
      "Options B, C, and D are completely false.",
      "bio-classification-taxonomy", "Separate Keys Rationale")

    q(425, "In museum entomology, why are small micro-insects (such as tiny parasitic wasps or aphids) mounted on 'card points' (triangular paper points) rather than pinned directly?",
      "Because standard insect pins are thicker than the micro-insect body and would utterly shatter the specimen",
      "Because micro-insects are poisonous to pins",
      "Because paper points make insects fly",
      "Because museums forbid magnifying glasses",
      "A", "Micro-insect card point mounting.",
      "1. Direct pinning of insects smaller than 5 mm (e.g., chalcid wasps, thrips) destroys the thorax; curators glue the right side of the specimen's thorax to the apex of a minute acid-free paper triangle (card point) impaled on a standard pin.",
      "Options B, C, and D are absurd.",
      "bio-classification-taxonomy", "Micro-insect Card Point")

    q(426, "Which of the following statements about biological museums is INCORRECT?",
      "Museums preserve specimens in preservative solutions in glass jars",
      "Museums often contain skeletons of animals",
      "Museums maintain living collections of wild animals for behavioral research",
      "Insects are preserved in insect boxes after collecting, killing, and pinning",
      "C", "Museum false statement.",
      "1. Statement C is incorrect because maintaining living collections of wild animals is the specific definition of Zoological Parks (zoos), NOT biological museums.\n2. Statements A, B, and D are authentic NCERT museum facts.",
      "Options A, B, and D are correct NCERT museum statements.",
      "bio-classification-taxonomy", "Museum False Statement")

    q(427, "What is a 'Catalogue' in botanical taxonomic practice?",
      "A comprehensive bibliographic register or inventory of plant species, specimens, or taxonomic publications of a library/institution arranged alphabetically or systematically",
      "A living banyan tree",
      "A type of insect pin",
      "A poisonous preservative solution",
      "A", "Catalogue botanical definition.",
      "1. In taxonomy, a Catalogue is an alphabetical or systematic inventory of species or botanical literature, providing titles, author names, publication dates, and herbarium specimen holdings.",
      "Options B, C, and D describe physical trees, equipment, or chemical solutions.",
      "bio-classification-taxonomy", "Botanical Catalogue")

    q(428, "Assertion (A): Herbarium specimens provide invaluable permanent records for verifying biological discoveries across centuries.\nReason (R): Type specimens mounted on herbarium sheets serve as physical nomenclatural vouchers that anchor scientific names permanently.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on herbarium voucher specimens.",
      "1. (A) is true: herbaria hold specimens collected hundreds of years ago (including Linnaeus's original collections).\n2. (R) is true: type specimens serve as objective physical vouchers anchoring taxonomic concepts, directly explaining the scientific permanence of herbaria.",
      "Options B, C, and D are incorrect.",
      "bio-classification-taxonomy", "Herbarium Vouchers AR")

    q(429, "Which of the following is an essential requirement for a modern botanical garden?",
      "Every living plant specimen must be labeled with its scientific botanical name and its family",
      "No visitors are ever allowed inside",
      "All plants must be artificial plastic replicas",
      "Only dead pressed dried plants are exhibited",
      "A", "Botanical garden labeling mandate in NCERT.",
      "1. NCERT explicitly notes: 'Each plant is labelled indicating its botanical/scientific name and its family.'\n2. This educational and scientific labeling distinguishes botanical gardens from ordinary recreational parks.",
      "Options B, C, and D are false.",
      "bio-classification-taxonomy", "Botanical Garden Labeling Mandate")

    q(430, "What is the primary conservation objective of the National Botanical Research Institute (NBRI) at Lucknow?",
      "Botanical research, conservation of living germplasm, floristic surveys, and economic plant development",
      "Mining coal",
      "Breeding racing horses",
      "Testing space rockets",
      "A", "NBRI mandate.",
      "1. NBRI Lucknow is a premier CSIR institute dedicated to plant biodiversity assessment, germplasm conservation, floristics, pharmacognosy, and plant biotechnology.",
      "Options B, C, and D are non-botanical fields.",
      "bio-classification-taxonomy", "NBRI Mandate")

    q(431, "Which of the following statements about the Great Banyan Tree in the Indian Botanic Garden at Shibpur is scientifically remarkable?",
      "It lives without its main central trunk (which died in 1925), surviving and expanding entirely through thousands of aerial prop roots acting as pillars",
      "It is a carnivorous tree that eats birds",
      "It has no chlorophyll and produces blue flowers",
      "It was planted by Linnaeus in Sweden",
      "A", "Great Banyan Tree botanical wonder.",
      "1. The original main trunk of *Ficus benghalensis* developed fungal rot and was amputated in 1925; the crown continues to thrive over 3.5 acres supported by over 3,700 columnar aerial prop roots.",
      "Options B, C, and D are factually absurd.",
      "bio-classification-taxonomy", "Great Banyan Tree Botany")

    q(432, "Consider the following statements regarding taxonomic keys:\nStatement I: The contrasting statements in a pair are called couplets.\nStatement II: Keys can only be used for identifying plants, never for animals.\nChoose the correct option:",
      "Statement I is correct, Statement II is incorrect",
      "Statement I is incorrect, Statement II is correct",
      "Both statements are correct",
      "Both statements are incorrect",
      "A", "Keys for plants and animals in NCERT.",
      "1. Statement I is correct (couplet definition).\n2. Statement II is INCORRECT because NCERT states verbatim: 'Key is another taxonomical aid used for identification of plants and animals based on the similarities and dissimilarities.'",
      "Options B, C, and D are inconsistent with NCERT.",
      "bio-classification-taxonomy", "Keys Plants and Animals")

    q(433, "Why is an international botanical code (ICN) revision conducted every six years at the International Botanical Congress?",
      "To resolve newly discovered taxonomic ambiguities, amend rules for digital publishing, and decide upon proposals to conserve or reject names",
      "To invent new languages",
      "To cancel all previous plant names",
      "To declare all fungi as animals",
      "A", "IBC nomenclatural revision.",
      "1. Systematic biology evolves with molecular discoveries; the Nomenclature Section of the IBC debates formal proposals to update the code (e.g., accepting electronic publication, unifying fungal pleomorphic names).",
      "Options B, C, and D are counter-factual.",
      "bio-classification-taxonomy", "IBC Revision Purpose")

    q(434, "Which of the following pairs of taxonomic aids contains information about a defined geographical territory?",
      "Flora and Manual", "Monograph and Catalogue of Books", "Zoological park and Herbarium cabinet", "Taxonomic key and Binomial code",
      "A", "Geographically bounded taxonomic aids.",
      "1. Both Flora and Manual are geographically delineated aids providing accounts and identification tools for plant species growing within a specified local or regional territory.",
      "Options B, C, and D are taxon-focused, literary, or non-geographical.",
      "bio-classification-taxonomy", "Geographical Aids")

    q(435, "In classical alpha-taxonomy, why were morphological characters prioritized over physiological or cytological traits?",
      "Because gross morphological characters are readily visible with the naked eye or a hand lens in field surveys without requiring sophisticated laboratory instrumentation",
      "Because morphology never changes during evolution",
      "Because early taxonomists were forbidden from using microscopes",
      "Because plants have no physiology",
      "A", "Rationale for morphological priority in alpha taxonomy.",
      "1. Early naturalists working in the field required immediate, practical criteria observable on live plants or pressed herbarium specimens without complex chemical or cytogenetic laboratories.",
      "Options B, C, and D are false.",
      "bio-classification-taxonomy", "Alpha Morphology Priority")

    q(436, "Which of the following is considered an artificial character when used alone to classify seed plants?",
      "Plant growth habit (tree, shrub, or herb)",
      "Complete floral anatomy and vascular bundle arrangement",
      "Embryo development with cotyledon number",
      "DNA sequence alignment of rbcL gene",
      "A", "Artificial habit classification.",
      "1. Habit (tree, shrub, herb) is superficial and influenced by environmental conditions; unrelated families contain trees, shrubs, and herbs, making it an artificial criterion used by Aristotle and Theophrastus.",
      "Options B, C, and D are natural, anatomical, or molecular taxonomic traits.",
      "bio-classification-taxonomy", "Artificial Habit Trait")

    q(437, "Assertion (A): Monographs are highly specialized taxonomic publications.\nReason (R): A monograph provides an exhaustive, comprehensive taxonomic revision of all known species belonging to any single designated taxon.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on monographs.",
      "1. (A) is true: monographs are specialized treatises.\n2. (R) is true: the exhaustiveness of treating one taxon (e.g., family or genus) worldwide with keys, descriptions, synonymy, and maps explains why it is specialized.",
      "Options B, C, and D are incorrect.",
      "bio-classification-taxonomy", "Monograph Specialization AR")

    q(438, "Which of the following is an example of an operational taxonomic unit (OTU) in numerical taxonomy?",
      "An individual organism, strain, or species being evaluated in a similarity matrix",
      "A type of herbarium glue",
      "An insect pinning needle",
      "A museum jar lid",
      "A", "OTU definition in phenetics.",
      "1. In numerical taxonomy (phenetics), an Operational Taxonomic Unit (OTU) is the lowest-level taxonomic entity (specimen, population, or species) being characterized by quantified traits in the data matrix.",
      "Options B, C, and D describe physical hardware.",
      "bio-classification-taxonomy", "OTU Definition")

    q(439, "What is the ultimate biological purpose of all biological classification systems?",
      "To organize the bewildering diversity of life into a logical, predictive, evolutionary framework that facilitates scientific study, communication, and conservation",
      "To give Latin exams to medical students",
      "To prove that all organisms are identical",
      "To eliminate all vernacular words from human speech",
      "A", "Ultimate purpose of biological classification.",
      "1. Classification provides an organized, predictive retrieval system that reflects evolutionary relationships, allowing scientists to infer traits of newly discovered species and prioritize global conservation.",
      "Options B, C, and D are frivolous fabrications.",
      "bio-classification-taxonomy", "Classification Ultimate Purpose")

    # --- TOPIC 3: bio-species-hierarchy (Q440 - Q470) ---
    q(440, "Evaluate the taxonomic relationships between Man (Homo sapiens) and Housefly (Musca domestica) according to NCERT Table 1.1:\n(A) Man belongs to Phylum Chordata, while Housefly belongs to Phylum Arthropoda.\n(B) Man belongs to Class Mammalia, while Housefly belongs to Class Insecta.\n(C) Man belongs to Order Primata, while Housefly belongs to Order Diptera.\n(D) Man belongs to Family Hominidae, while Housefly belongs to Family Muscidae.\nWhich statement(s) is/are INCORRECT?",
      "None of these; all four statements are completely correct",
      "(A) only",
      "(C) only",
      "(B) and (D) only",
      "A", "Table 1.1 Man vs Housefly full verification.",
      "1. Man: Chordata (Phylum), Mammalia (Class), Primata (Order), Hominidae (Family).\n2. Housefly: Arthropoda (Phylum), Insecta (Class), Diptera (Order), Muscidae (Family).\n3. Every single statement (A, B, C, D) is verbatim NCERT Table 1.1. Therefore, none are incorrect.",
      "Options B, C, and D wrongly identify correct statements as incorrect.",
      "bio-species-hierarchy", "Table 1.1 Man vs Housefly")

    q(441, "Evaluate the taxonomic relationships between Mango (Mangifera indica) and Wheat (Triticum aestivum) according to NCERT Table 1.1:\nStatement I: Both Mango and Wheat belong to the Division Angiospermae.\nStatement II: Mango belongs to Order Sapindales and Family Anacardiaceae, whereas Wheat belongs to Order Poales and Family Poaceae.\nStatement III: Mango belongs to Class Monocotyledonae, whereas Wheat belongs to Class Dicotyledonae.\nChoose the correct option:",
      "Statements I and II are correct, Statement III is incorrect",
      "Statements I and III are correct, Statement II is incorrect",
      "All statements are correct",
      "All statements are incorrect",
      "A", "Table 1.1 Mango vs Wheat verification.",
      "1. Statement I is correct: both are flowering plants in Division Angiospermae.\n2. Statement II is correct: Mango is in Sapindales (Anacardiaceae); Wheat is in Poales (Poaceae).\n3. Statement III is INCORRECT because it reverses the classes: Mango is Dicotyledonae, while Wheat is Monocotyledonae.\n4. Therefore, I and II are correct, III is incorrect.",
      "Options B, C, and D fail to spot the class reversal in Statement III.",
      "bio-species-hierarchy", "Table 1.1 Mango vs Wheat")

    q(442, "Assertion (A): Lower the taxonomic category, more are the characteristics that the members within the taxon share.\nReason (R): As we move up from species to kingdom, the number of common characteristics goes on decreasing, making general determination of relationships more complex.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on common characteristics in hierarchy.",
      "1. Both statements are direct verbatim assertions from NCERT.\n2. The progressive shedding of shared specific traits when ascending the hierarchy directly explains why lower categories share the highest density of common attributes, so (R) explains (A).",
      "Options B, C, and D are incorrect.",
      "bio-species-hierarchy", "Hierarchy Characteristics Trend AR")

    q(443, "Two organisms belong to the same Family. Which of the following taxonomic categories MUST they also share in common?",
      "Order, Class, Phylum/Division, and Kingdom",
      "Only Genus and Species",
      "Only Genus",
      "They share no other categories",
      "A", "Higher hierarchical inclusion logic.",
      "1. In a nested hierarchy, every category is contained within its parent higher ranks.\n2. Organisms in the same Family necessarily belong to the same Order, Class, Phylum/Division, and Kingdom.\n3. They may belong to different Genera or Species.",
      "Options B, C, and D violate nested set theory in taxonomy.",
      "bio-species-hierarchy", "Family Higher Inclusion")

    q(444, "Consider four organisms: Man, Tiger, Housefly, and Cat. Which two organisms share the HIGHEST number of taxonomic categories in common?",
      "Tiger and Cat", "Man and Housefly", "Man and Tiger", "Cat and Housefly",
      "A", "Taxonomic affinity comparison.",
      "1. Tiger (*Panthera tigris*) and Cat (*Felis catus*) share:\n- Kingdom: Animalia\n- Phylum: Chordata\n- Class: Mammalia\n- Order: Carnivora\n- Family: Felidae (5 categories shared!)\n2. Man and Tiger share only up to Class Mammalia (3 categories).\n3. Housefly is an arthropod, sharing only Kingdom Animalia.",
      "Options B, C, and D share far fewer categories.",
      "bio-species-hierarchy", "Highest Taxonomic Affinity")

    q(445, "Which of the following taxonomic categories is characterized by the LEAST number of common morphological traits among its constituent members?",
      "Kingdom Plantae", "Division Angiospermae", "Class Dicotyledonae", "Order Sapindales",
      "A", "Least morphological commonality at Kingdom level.",
      "1. Kingdom is the highest category, containing algae, bryophytes, pteridophytes, gymnosperms, and angiosperms, sharing the minimum number of specific morphological traits compared to subordinate taxa.",
      "Options B, C, and D are lower ranks with progressively higher homogeneity.",
      "bio-species-hierarchy", "Kingdom Least Commonality Plantae")

    q(446, "Match the organisms in Column I with their taxonomic Classes in Column II:\nColumn I:\n(p) Housefly\n(q) Mango\n(r) Wheat\n(s) Man\nColumn II:\n(1) Dicotyledonae\n(2) Monocotyledonae\n(3) Mammalia\n(4) Insecta",
      "p-4, q-1, r-2, s-3",
      "p-1, q-4, r-3, s-2",
      "p-4, q-2, r-1, s-3",
      "p-3, q-1, r-2, s-4",
      "A", "Table 1.1 Class matching.",
      "1. Housefly = Class Insecta (p-4).\n2. Mango = Class Dicotyledonae (q-1).\n3. Wheat = Class Monocotyledonae (r-2).\n4. Man = Class Mammalia (s-3).\n5. Correct mapping: p-4, q-1, r-2, s-3.",
      "Options B, C, and D are scrambled.",
      "bio-species-hierarchy", "Table 1.1 Class Match")

    q(447, "Why are dogs (Canis lupus familiaris) and wolves (Canis lupus) placed in the same genus Canis, while the red fox is placed in genus Vulpes?",
      "Because dogs and wolves share close cranial, dental, and genetic affinities, whereas foxes possess flattened skulls, vertical slit pupils, and distinct behavioral traits warranting a separate genus",
      "Because wolves have wings",
      "Because foxes are plants",
      "Because foxes do not belong to order Carnivora",
      "A", "Canis vs Vulpes generic delimitation.",
      "1. Genus *Canis* (dogs, wolves, jackals, coyotes) shares circular pupils, pack hunting, and shared karyotypes, whereas *Vulpes* (true foxes) exhibits solitary hunting, vertical slit pupils, and distinct dental ratios, justifying generic divergence within family Canidae.",
      "Options B, C, and D are biologically absurd.",
      "bio-species-hierarchy", "Canis vs Vulpes Generic Delimitation")

    q(448, "Which of the following statements about plant orders like Polymoniales is CORRECT?",
      "Polymoniales includes families Solanaceae and Convolvulaceae, based primarily on shared floral characteristics",
      "Polymoniales is based exclusively on the presence of tap roots",
      "Polymoniales includes wheat and mango",
      "Polymoniales is an animal order",
      "A", "Polymoniales floral characters fact.",
      "1. NCERT explicitly states: 'Plant families like Convolvulaceae, Solanaceae are included in the order Polymoniales mainly based on the floral characters.'",
      "Options B, C, and D contradict NCERT facts.",
      "bio-species-hierarchy", "Polymoniales Correct Statement")

    q(449, "In which taxonomic category are organisms capable of freely interbreeding in nature under natural conditions to produce viable, fertile offspring?",
      "Species", "Genus", "Family", "Order",
      "A", "Species interbreeding capability.",
      "1. Species is the fundamental biological unit whose members are reproductively compatible and share a common gene pool, producing fertile progeny.",
      "Options B, C, and D represent intergeneric or interfamilial ranks where interbreeding does not occur in nature.",
      "bio-species-hierarchy", "Species Interbreeding Natural")

    q(450, "Why can Solanum tuberosum (potato) and Solanum melongena (brinjal) NOT interbreed in nature to produce fertile hybrid plants?",
      "Because they represent two distinct biological species separated by pre-zygotic and post-zygotic reproductive isolating mechanisms",
      "Because potato has no flowers",
      "Because brinjal is an animal",
      "Because they belong to different divisions",
      "A", "Reproductive isolation between Solanum species.",
      "1. Although they belong to the same genus *Solanum*, their distinct species status is maintained by genetic, pollen-pistil incompatibility and chromosomal barriers that prevent interbreeding.",
      "Options B, C, and D are factually false.",
      "bio-species-hierarchy", "Solanum Reproductive Isolation")

    q(451, "Consider the following taxonomic hierarchy for an organism:\nAnimalia -> Chordata -> Mammalia -> Carnivora -> Felidae -> Panthera -> leo\nWhat is the correct common name of this organism?",
      "Lion", "Tiger", "Leopard", "Cheetah",
      "A", "Panthera leo lion identity.",
      "1. *Panthera leo* is the scientific binomen of the lion.\n2. *Panthera tigris* is the tiger, *Panthera pardus* is the leopard, and *Acinonyx jubatus* is the cheetah.",
      "Options B, C, and D are different feline species.",
      "bio-species-hierarchy", "Lion Hierarchy Identity")

    q(452, "Which of the following represents a correct pair of animal order and plant order?",
      "Carnivora and Sapindales", "Felidae and Poaceae", "Insecta and Dicotyledonae", "Arthropoda and Angiospermae",
      "A", "Order pair validation.",
      "1. Carnivora is an animal order (carnivorous mammals), and Sapindales is a plant order (mango order).\n2. Felidae and Poaceae are families. Insecta and Dicotyledonae are classes. Arthropoda and Angiospermae are phylum/division.",
      "Options B, C, and D list families, classes, or phyla.",
      "bio-species-hierarchy", "Order Pair Validation")

    q(453, "Assertion (A): Plant families are characterized on the basis of both vegetative and reproductive features of plant species.\nReason (R): Vegetative features are more stable and less prone to environmental modifications than floral reproductive structures.",
      "(A) is true but (R) is false",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on vegetative vs floral stability.",
      "1. (A) is true (NCERT verbatim: 'Families are characterized on the basis of both vegetative and reproductive features...').\n2. (R) is false because vegetative characters (leaf size, stem height) are easily modified by environment (soil, moisture, sun/shade), whereas floral reproductive structures are highly conserved and conservative, making (R) factually false.",
      "Options B, C, and D are incorrect.",
      "bio-species-hierarchy", "Vegetative vs Floral Stability AR")

    q(454, "Which of the following organisms belongs to the order Diptera?",
      "Housefly (Musca domestica) and Mosquito (Anopheles)",
      "Honeybee (Apis) and Butterfly (Papilio)",
      "Cockroach (Periplaneta)",
      "Spider (Araneus)",
      "A", "Order Diptera members.",
      "1. Order Diptera (two-winged true flies) includes houseflies (*Musca*), mosquitoes (*Anopheles*, *Culex*, *Aedes*), and fruit flies (*Drosophila*).\n2. Honeybees belong to Hymenoptera, butterflies to Lepidoptera, cockroaches to Blattodea, and spiders to class Arachnida.",
      "Options B, C, and D belong to other insect orders or arachnid classes.",
      "bio-species-hierarchy", "Order Diptera True Flies")

    q(455, "Which taxonomic category is defined as an assemblage of related genera?",
      "Family", "Order", "Class", "Division",
      "A", "Family definition in NCERT.",
      "1. NCERT states: 'Family, has a group of related genera with still less number of similarities as compared to genus and species.'",
      "Option B is related families. Option C is related orders. Option D is related classes.",
      "bio-species-hierarchy", "Family Genera Assemblage")

    q(456, "The family Solanaceae includes which of the following medicinal plant genera?",
      "Atropa (belladonna) and Withania (ashwagandha)",
      "Aloe and Colchicum",
      "Sesbania and Trifolium",
      "Brassica and Raphanus",
      "A", "Solanaceae medicinal genera.",
      "1. *Atropa* (*A. belladonna*) and *Withania* (*W. somnifera*) are well-known medicinal plants belonging to the family Solanaceae.",
      "Option B belongs to Liliaceae. Option C belongs to Fabaceae. Option D belongs to Brassicaceae.",
      "bio-species-hierarchy", "Solanaceae Medicinal Genera")

    q(457, "Which of the following is the correct ascending sequence of categories for the grass/wheat family?",
      "Poaceae -> Poales -> Monocotyledonae -> Angiospermae -> Plantae",
      "Poales -> Poaceae -> Monocotyledonae -> Angiospermae -> Plantae",
      "Poaceae -> Monocotyledonae -> Poales -> Angiospermae -> Plantae",
      "Triticum -> Poales -> Poaceae -> Angiospermae -> Plantae",
      "A", "Wheat categories ascending.",
      "1. Ascending hierarchy: Family (Poaceae) -> Order (Poales) -> Class (Monocotyledonae) -> Division (Angiospermae) -> Kingdom (Plantae).",
      "Options B, C, and D scramble the order, family, and class positions.",
      "bio-species-hierarchy", "Wheat Ascending Sequence")

    q(458, "In human classification, which of the following is the correct sequence from Kingdom down to Species?",
      "Animalia -> Chordata -> Mammalia -> Primata -> Hominidae -> Homo -> sapiens",
      "Animalia -> Mammalia -> Chordata -> Primata -> Hominidae -> Homo -> sapiens",
      "Animalia -> Chordata -> Primata -> Mammalia -> Hominidae -> Homo -> sapiens",
      "Animalia -> Chordata -> Mammalia -> Hominidae -> Primata -> Homo -> sapiens",
      "A", "Human descending classification.",
      "1. Kingdom: Animalia -> Phylum: Chordata -> Class: Mammalia -> Order: Primata -> Family: Hominidae -> Genus: *Homo* -> Species: *sapiens*.",
      "Options B, C, and D misplace Class, Order, or Family.",
      "bio-species-hierarchy", "Human Descending Classification")

    q(459, "What is a 'Sibling Species' (cryptic species) in systematics?",
      "Species that are morphologically almost indistinguishable but are reproductively isolated and cannot interbreed",
      "Two plants growing from the same root",
      "Twins born to the same human mother",
      "Cuttings of a single rose bush",
      "A", "Sibling species definition.",
      "1. Sibling (cryptic) species are distinct biological populations that exhibit identical or nearly identical gross morphological characters, yet are completely reproductively isolated and represent independent evolutionary lineages (e.g., *Drosophila pseudoobscura* and *D. persimilis*).",
      "Options B, C, and D are vegetative or fraternal terms.",
      "bio-species-hierarchy", "Sibling Species Concept")

    q(460, "Which of the following pairs of categories represents an abstract taxonomic rank rather than an empirical biological group?",
      "Class and Family", "Mammalia and Insecta", "Panthera and Felis", "Homo sapiens and Musca domestica",
      "A", "Category vs Taxon identification.",
      "1. 'Class' and 'Family' are abstract ranks/categories in the Linnaean hierarchy.\n2. Mammalia, Insecta, Panthera, Felis, Homo sapiens, and Musca domestica are real biological taxa.",
      "Options B, C, and D are concrete taxa.",
      "bio-species-hierarchy", "Abstract Category Identification")

    q(461, "Assertion (A): Determination of relationships becomes progressively more difficult as we move up from species to kingdom.\nReason (R): At higher taxonomic categories, members share fewer common characteristics, and the boundary criteria become more generalised.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on hierarchy relationship difficulty.",
      "1. Both (A) and (R) are verbatim statements from NCERT.\n2. The scarcity of shared specific characters at higher ranks directly causes the difficulty of determining precise evolutionary affinities, so (R) explains (A).",
      "Options B, C, and D are incorrect.",
      "bio-species-hierarchy", "Hierarchy Difficulty AR")

    q(462, "Which of the following plant families does NOT belong to the division Angiospermae?",
      "Pinaceae (Gymnosperm conifer family)", "Solanaceae", "Poaceae", "Anacardiaceae",
      "A", "Pinaceae non-angiosperm.",
      "1. Pinaceae (pines, spruces, firs) belongs to Division Gymnospermae (naked-seeded plants), NOT Angiospermae.\n2. Solanaceae, Poaceae, and Anacardiaceae are flowering plants in Division Angiospermae.",
      "Options B, C, and D are true angiosperm families.",
      "bio-species-hierarchy", "Pinaceae Gymnosperm")

    q(463, "Which of the following categories is defined as a group of related classes?",
      "Phylum or Division", "Order", "Family", "Genus",
      "A", "Phylum/Division definition in NCERT.",
      "1. NCERT states: 'Classes comprising animals, like fishes, amphibians, reptiles, birds along with mammals constitute the next higher category called Phylum. In case of plants, classes with a few similar characters are assigned to a higher category called Division.'",
      "Options B, C, and D are lower ranks.",
      "bio-species-hierarchy", "Group of Related Classes")

    q(464, "Consider the following taxonomic groupings:\n(1) Dicotyledonae\n(2) Sapindales\n(3) Anacardiaceae\n(4) Mangifera\nWhich of the following represents the correct descending hierarchy of these four taxa?",
      "1 -> 2 -> 3 -> 4",
      "4 -> 3 -> 2 -> 1",
      "2 -> 1 -> 3 -> 4",
      "1 -> 3 -> 2 -> 4",
      "A", "Mango hierarchy descending.",
      "1. Descending order (highest to lowest rank):\n- Class: Dicotyledonae (1)\n- Order: Sapindales (2)\n- Family: Anacardiaceae (3)\n- Genus: *Mangifera* (4)\n2. Correct sequence: 1 -> 2 -> 3 -> 4.",
      "Options B, C, and D scramble the ranks.",
      "bio-species-hierarchy", "Mango Hierarchy Descending")

    q(465, "What is the taxonomic Family of Petunia?",
      "Solanaceae", "Liliaceae", "Fabaceae", "Brassicaceae",
      "A", "Petunia in Solanaceae in NCERT.",
      "1. NCERT explicitly notes: 'Among plants for example, three different genera Solanum, Petunia and Datura are placed in the family Solanaceae.'",
      "Options B, C, and D are different plant families.",
      "bio-species-hierarchy", "Petunia Solanaceae")

    q(466, "What is the taxonomic Family of Datura?",
      "Solanaceae", "Poaceae", "Anacardiaceae", "Convolvulaceae",
      "A", "Datura in Solanaceae in NCERT.",
      "1. *Datura* belongs to the family Solanaceae, alongside *Solanum* and *Petunia*.",
      "Options B, C, and D are different families.",
      "bio-species-hierarchy", "Datura Solanaceae")

    q(467, "In animal classification, cats belong to the genus Felis, while lions belong to the genus Panthera. Why are both placed in the family Felidae?",
      "Because they share fundamental feline characteristics like retractile claws, specialized shearing carnassial teeth, and auditory bulla structure",
      "Because they both eat grass",
      "Because they have identical body sizes",
      "Because they live in the same forest",
      "A", "Felidae shared feline characters.",
      "1. Family Felidae unifies all felines based on shared cranial morphology, completely retractile claws (except cheetah), carnassial tooth specialization, and hyper-carnivorous diet.",
      "Options B, C, and D are counter-factual.",
      "bio-species-hierarchy", "Felidae Shared Feline Characters")

    q(468, "Which of the following statements about genus Panthera is INCORRECT?",
      "It contains Panthera leo (lion)",
      "It contains Panthera tigris (tiger)",
      "It contains Panthera pardus (leopard)",
      "It contains the domestic cat (Felis catus)",
      "D", "Panthera composition check.",
      "1. The domestic cat belongs to the genus *Felis*, NOT *Panthera*.\n2. Lion (*P. leo*), tiger (*P. tigris*), and leopard (*P. pardus*) belong to *Panthera*.",
      "Options A, B, and C are authentic *Panthera* species.",
      "bio-species-hierarchy", "Panthera Incorrect Statement")

    q(469, "Which of the following is a universal biological law governing taxonomic hierarchy?",
      "As we move from species toward kingdom, the number of shared characters decreases while morphological diversity increases",
      "All kingdoms contain exactly 10 phyla",
      "All families must contain at least 100 genera",
      "Species cannot be defined biologically",
      "A", "Universal hierarchical rule.",
      "1. Moving up the hierarchy from species to kingdom, specificity decreases, common characters decrease, and phylogenetic diversity increases exponentially.",
      "Options B, C, and D are fabricated or false.",
      "bio-species-hierarchy", "Universal Hierarchical Rule")

    q(470, "What is an 'Allopatric Species'?",
      "Species that arose through reproductive isolation following geographic separation of populations by physical barriers",
      "Species that live in the same pond and interbreed daily",
      "Species that have no genetic variation",
      "Species that reproduce only by budding",
      "A", "Allopatric speciation definition.",
      "1. Allopatric speciation occurs when biological populations of the same species become geographically isolated from each other (e.g., by mountains, rivers, continental drift), preventing gene flow and driving divergent evolution into distinct species.",
      "Options B, C, and D describe sympatric, clonal, or asexual scenarios.",
      "bio-species-hierarchy", "Allopatric Speciation")

    # --- TOPIC 4: bio-nomenclature-systematics (Q471 - Q500) ---
    q(471, "Which of the following represents the correct format of author citation when a species was originally described by Linnaeus and later transferred to a new genus by Robert Brown?",
      "Genus species (Linn.) R. Br.",
      "Genus species Linn. & R. Br.",
      "Genus species R. Br. Linn.",
      "Genus species L.",
      "A", "Double author citation format in botany.",
      "1. In botanical nomenclature under the ICN, when a species is transferred to another genus, the name of the original author who published the basionym is enclosed in parentheses, followed by the revising author: *Genus species* (Linn.) R. Br.",
      "Option B implies co-authorship. Options C and D omit the transfer indication.",
      "bio-nomenclature-systematics", "Double Author Citation Format")

    q(472, "Assertion (A): The scientific name of cobra is Naja naja, which is a tautonym.\nReason (R): Tautonyms are valid in zoological nomenclature under the ICZN, but are strictly rejected in botanical nomenclature under the ICBN.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "B", "Assertion-Reason on zoological vs botanical tautonyms.",
      "1. (A) is true: *Naja naja* is the valid tautonymic name of the Indian cobra.\n2. (R) is true: ICZN permits tautonyms while ICBN prohibits them.\n3. However, (R) is a statement of comparative nomenclatural codes and does not mechanistically 'cause' cobra to have that specific name, so (R) is NOT the explanation of (A).",
      "Options A, C, and D misjudge the explanatory link.",
      "bio-nomenclature-systematics", "Tautonyms Comparative AR")

    q(473, "What is a 'Type Locality' (locus classicus) and why is it critically important in taxonomy?",
      "It is the geographical site where the original holotype was collected, enabling future taxonomists to collect topotypes to study population variation",
      "It is the laboratory where DNA sequencing was invented",
      "It is the printing press where Linnaeus published his books",
      "It is the museum where stuffed birds are sold",
      "A", "Type locality importance.",
      "1. The type locality (*locus classicus*) is the geographical origin of the holotype specimen, providing topotypic material to study ecological and morphological variation when resolving cryptic species complexes.",
      "Options B, C, and D are false.",
      "bio-nomenclature-systematics", "Type Locality Importance")

    q(474, "Consider the following biological names:\n(1) Mangifera indica Linn.\n(2) Solanum tuberosum L.\n(3) Panthera leo (Linnaeus, 1758)\n(4) Homo sapiens Linn.\nHow many of these display VALID author citations according to their respective codes of nomenclature?",
      "One", "Two", "Three", "Four",
      "D", "Validation of four author citations.",
      "1. (1) *Mangifera indica* Linn. is valid under ICBN.\n2. (2) *Solanum tuberosum* L. is valid under ICBN ('L.' is the standard Linnaeus abbreviation).\n3. (3) *Panthera leo* (Linnaeus, 1758) is valid under ICZN (parentheses denote transfer from *Felis*, with publication year).\n4. (4) *Homo sapiens* Linn. is valid under ICZN/ICBN.\n5. All four citations are completely valid.",
      "Options A, B, and C underestimate the valid citations.",
      "bio-nomenclature-systematics", "Author Citation Multi-validation")

    q(475, "Under the International Code of Botanical Nomenclature (ICBN), what happens to a plant name published after January 1, 1958 without a designated holotype?",
      "It is invalidly published (nomen invalidum) and has no nomenclatural standing",
      "It automatically becomes a valid name",
      "It is translated into English",
      "It is accepted if the plant is tasty",
      "A", "Mandatory holotype designation rule.",
      "1. Article 40 of the botanical code mandates that on or after January 1, 1958, publication of the name of a new taxon at the rank of genus or below is valid only if the nomenclatural type (holotype) is explicitly designated and its repository indicated.",
      "Options B, C, and D are contrary to international botanical law.",
      "bio-nomenclature-systematics", "Mandatory Holotype Rule")

    q(476, "What is an 'Isotype'?",
      "A duplicate specimen of the holotype collected from the same location, on the same date, by the same collector, and under the same collection number",
      "A specimen selected from different material after 50 years",
      "A chemical compound found in leaves",
      "A photograph of a living flower",
      "A", "Isotype precise definition.",
      "1. An Isotype is an exact duplicate specimen of the holotype, collected at the same time and place from the same gathering by the original collector.",
      "Options B, C, and D do not fulfill the definition of an isotype.",
      "bio-nomenclature-systematics", "Isotype Precise Definition")

    q(477, "Under what circumstances is a 'Neotype' chosen in biological systematics?",
      "When all of the original material (holotype, isotypes, syntypes, paratypes) on which a name was based is completely lost or destroyed",
      "Whenever a student discovers a new flower",
      "When a botanical garden wants to rename a tree",
      "When two authors agree to create a new hybrid",
      "A", "Neotype designation circumstances.",
      "1. A Neotype is selected as the nomenclatural type only when all original voucher specimens of the protologue are demonstrably missing, lost, or destroyed.",
      "Options B, C, and D are illegitimate reasons.",
      "bio-nomenclature-systematics", "Neotype Circumstances")

    q(478, "What is a 'Lectotype'?",
      "A specimen or illustration designated from the original material (syntypes) by a subsequent author to serve as the single nomenclatural type when no holotype was originally designated",
      "A type specimen collected from a new continent",
      "A fossil bone of an extinct bird",
      "A duplicate specimen collected by someone else",
      "A", "Lectotype precise definition.",
      "1. A Lectotype is a specimen chosen by a subsequent reviser from the original material available to the original author when no holotype was formally selected in the protologue.",
      "Options B, C, and D are incorrect.",
      "bio-nomenclature-systematics", "Lectotype Precise Definition")

    q(479, "Assertion (A): The Principle of Priority is the fundamental guiding principle of biological nomenclature.\nReason (R): It guarantees that the earliest legitimate, validly published name for a taxon is recognized as correct, preventing chaotic accumulation of multiple valid names.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on Principle of Priority.",
      "1. (A) is true: priority is the cornerstone of taxonomic stability.\n2. (R) is true: priority prevents nomenclatural chaos by establishing chronological precedence for valid names, explaining (A).",
      "Options B, C, and D are incorrect.",
      "bio-nomenclature-systematics", "Priority Principle AR")

    q(480, "Which of the following scientific names violates Rule 4 of NCERT binomial nomenclature regarding capitalization?",
      "Panthera Tigris", "Panthera leo", "Homo sapiens", "Mangifera indica",
      "A", "Rule 4 violation Panthera Tigris.",
      "1. Rule 4 states: 'The first word denoting the genus starts with a capital letter while the specific epithet starts with a small letter.'\n2. 'Panthera Tigris' capitalizes the specific epithet 'Tigris', which is a direct violation.",
      "Options B, C, and D strictly obey the capitalization rule.",
      "bio-nomenclature-systematics", "Rule 4 Capitalization Violation")

    q(481, "What does the Latin word 'systema' mean, from which the modern biological discipline 'Systematics' is derived?",
      "Systematic arrangement of organisms", "System of blood circulation", "Solar system", "Systemic insecticide",
      "A", "Systema etymology in NCERT.",
      "1. NCERT explicitly states: 'The word systematics is derived from the Latin word \"systema\" which means systematic arrangement of organisms.'",
      "Options B, C, and D are unrelated modern uses of the word system.",
      "bio-nomenclature-systematics", "Systema Meaning NCERT")

    q(482, "Which edition of Linnaeus's 'Species Plantarum' was published on May 1, 1753?",
      "First edition", "Tenth edition", "Twelfth edition", "Third edition",
      "A", "Species Plantarum 1st edition.",
      "1. The 1st edition of *Species Plantarum* was published on May 1, 1753, establishing the baseline starting date for botanical binomial nomenclature.",
      "Option B is the 10th edition of Systema Naturae (1758). Options C and D are other editions.",
      "bio-nomenclature-systematics", "Species Plantarum First Edition")

    q(483, "Which edition of Linnaeus's 'Systema Naturae' established the starting point of zoological nomenclature?",
      "10th edition (1758)", "1st edition (1735)", "5th edition (1740)", "12th edition (1766)",
      "A", "Systema Naturae 10th edition.",
      "1. The 10th edition of *Systema Naturae* (January 1, 1758) is the international starting point for zoological priority under the ICZN.",
      "Options B, C, and D are other historical editions.",
      "bio-nomenclature-systematics", "Systema Naturae 10th Edition Zoology")

    q(484, "If an author citation in zoology is written as 'Homo sapiens Linnaeus, 1758', what does '1758' indicate?",
      "The year in which Linnaeus validly published the original description of Homo sapiens in Systema Naturae (10th edition)",
      "The year Linnaeus was born",
      "The year humans evolved",
      "The number of bones in a human body",
      "A", "Year of publication in zoological citation.",
      "1. Under the ICZN, zoological author citations conventionally include both the author's surname and the publication year (separated by a comma) to facilitate precise bibliographic retrieval.",
      "Options B, C, and D are false.",
      "bio-nomenclature-systematics", "Zoological Citation Year")

    q(485, "What is a 'Topotype'?",
      "A specimen collected from the original type locality from which the species was first described, but not belonging to the original type series",
      "A duplicate of the holotype collected on the same day",
      "A specimen selected to replace a lost holotype",
      "An illustration published in a newspaper",
      "A", "Topotype definition.",
      "1. A Topotype is a specimen collected at a later date from the original type locality (*locus classicus*), valuable for studying topotypic variation but having no formal nomenclatural standing under the codes.",
      "Option B is an isotype. Option C is a neotype. Option D is non-nomenclatural.",
      "bio-nomenclature-systematics", "Topotype Definition Systematic")

    q(486, "In binomial nomenclature, which of the following is considered an illegitimate name?",
      "Nomen nudum (a name published without description or diagnosis)",
      "A Latinized name in italics",
      "A name with an author citation",
      "A name published in a recognized botanical journal",
      "A", "Nomen nudum illegitimacy.",
      "1. A 'nomen nudum' (naked name) fails the criteria of valid publication because it lacks a description, diagnosis, or reference to a previously published description, rendering it completely illegitimate.",
      "Options B, C, and D are standard legitimate nomenclatural practices.",
      "bio-nomenclature-systematics", "Nomen Nudum Illegitimacy")

    q(487, "Why did Carolus Linnaeus use 'Systema Naturae' as the title of his historic work?",
      "To reflect the systematic arrangement and classification of the natural world (plants, animals, minerals) into a coherent hierarchical order",
      "Because the King of France ordered him to do so",
      "Because he wanted to describe the solar system",
      "Because it was the only Latin phrase he knew",
      "A", "Title rationale Systema Naturae.",
      "1. Linnaeus aimed to present a grand systematic arrangement (*systema*) of the three kingdoms of nature (animals, plants, minerals), uniting taxonomy under unified hierarchical principles.",
      "Options B, C, and D are frivolous fabrications.",
      "bio-nomenclature-systematics", "Systema Naturae Rationale")

    q(488, "Consider the scientific name 'Rattus rattus (Linnaeus, 1758)'. Why are parentheses placed around the author's name?",
      "Because Linnaeus originally classified the black rat in genus Mus (as Mus rattus), and a later taxonomist transferred it to genus Rattus",
      "Because Linnaeus was Swedish",
      "Because the rat is an animal",
      "Because the rat is extinct",
      "A", "Mus rattus to Rattus rattus transfer.",
      "1. In 1758, Linnaeus described the rat as *Mus rattus*. When Fischer von Waldheim later created the genus *Rattus* and transferred the species, Linnaeus's name was placed in parentheses to indicate the generic transfer.",
      "Options B, C, and D are completely incorrect.",
      "bio-nomenclature-systematics", "Mus to Rattus Transfer")

    q(489, "Which of the following represents a valid botanical binomial according to all NCERT rules?",
      "Mangifera indica Linn.", "mangifera indica Linn.", "Mangifera Indica Linn.", "Mangifera indica LINN.",
      "A", "NCERT valid binomial representation.",
      "1. *Mangifera indica* Linn. has capitalized genus, lowercase species, italics typography, and standard abbreviated author citation in Roman script.",
      "Option B has lowercase genus. Option C has uppercase species. Option D has non-standard block capital author citation.",
      "bio-nomenclature-systematics", "NCERT Valid Binomial")

    q(490, "What is a 'Paratype' in zoological and botanical taxonomy?",
      "Every specimen of a type series other than the holotype or isotype, cited by the original author in the protologue",
      "A plastic replica of a fossil",
      "A living specimen in a pet shop",
      "A duplicate specimen collected by a farmer",
      "A", "Paratype definition in taxonomy.",
      "1. All specimens examined and cited by the author in the original description of a new taxon other than the single designated holotype (and its isotypes) are Paratypes.",
      "Options B, C, and D are non-nomenclatural.",
      "bio-nomenclature-systematics", "Paratype Definition Taxonomy")

    q(491, "Which of the following is NOT one of the universal rules of nomenclature in NCERT?",
      "The first word in a biological name represents the genus while the second word denotes the specific epithet",
      "Biological names are generally in Latin and written in italics",
      "Both words when handwritten are separately underlined",
      "Every country can give its own scientific Latin names to the same organism",
      "D", "Violation of universal nomenclature.",
      "1. The entire premise of international nomenclature codes is universal uniformity: an organism has only ONE valid scientific name globally, NOT separate names per country.",
      "Options A, B, and C are verbatim universal NCERT rules.",
      "bio-nomenclature-systematics", "Violation Universal Rule")

    q(492, "Why are tautonyms forbidden in botany (ICBN) while permitted in zoology (ICZN)?",
      "Because the respective international congresses independently codified different statutory rules for their respective biological kingdoms",
      "Because plants cannot reproduce",
      "Because animals do not have cells",
      "Because Linnaeus banned tautonyms in zoology",
      "A", "Divergence between ICBN and ICZN.",
      "1. The Botanical and Zoological codes developed independently under different international congresses; botanists voted to disallow tautonyms (Art. 23.4) to maintain descriptive specific epithets, whereas zoologists voted to permit them.",
      "Options B, C, and D are biologically and historically false.",
      "bio-nomenclature-systematics", "Divergence Botanical Zoological Codes")

    q(493, "In the scientific name 'Azadirachta indica A. Juss.', what does 'A. Juss.' indicate?",
      "Adrien de Jussieu, the French botanist who described the neem tree",
      "A junior student in Sweden",
      "An abbreviated Latin adjective meaning bitter",
      "A herbarium acronym",
      "A", "Adrien de Jussieu citation.",
      "1. 'A. Juss.' is the standard botanical abbreviation for Adrien-Henri de Jussieu, the celebrated French botanist who circumscribed the genus *Azadirachta* and described the neem tree.",
      "Options B, C, and D are incorrect.",
      "bio-nomenclature-systematics", "Adrien de Jussieu Citation")

    q(494, "When an author designates a single dried plant specimen on a herbarium sheet to permanently bear the name of a new species, that specimen is called the:",
      "Holotype", "Paratype", "Topotype", "Neotype",
      "A", "Holotype sole designated voucher.",
      "1. The single physical specimen explicitly designated by the author in the original published description as the nomenclatural type of a new species is the Holotype.",
      "Options B, C, and D serve secondary, comparative, or replacement roles.",
      "bio-nomenclature-systematics", "Holotype Sole Voucher")

    q(495, "Which of the following is an example of an organism whose scientific name is written in TRINOMIAL nomenclature?",
      "Homo sapiens sapiens", "Mangifera indica", "Solanum tuberosum", "Musca domestica",
      "A", "Trinomial Homo sapiens sapiens.",
      "1. *Homo sapiens sapiens* contains three words: Genus (*Homo*), Species (*sapiens*), and Subspecies (*sapiens*), constituting trinomial nomenclature.",
      "Options B, C, and D are standard two-word binomial names.",
      "bio-nomenclature-systematics", "Trinomial Human")

    q(496, "Why are botanical names Latinized even when the plant is named after an indigenous regional word (e.g., Gingko biloba, Neem as Azadirachta)?",
      "Because international rules mandate that all biological names must be treated as Latin words and decline according to Latin grammar regardless of their linguistic derivation",
      "Because scientists do not know other languages",
      "Because Greek words cannot be written in Roman script",
      "Because regional words are illegal in science",
      "A", "Mandatory Latinization rule in NCERT.",
      "1. NCERT Universal Rule 1 explicitly states: 'Biological names are generally in Latin and written in italics. They are Latinised or derived from Latin irrespective of their origin.'",
      "Options B, C, and D are false.",
      "bio-nomenclature-systematics", "Mandatory Latinization Rule")

    q(497, "Assertion (A): The generic name in a biological name always starts with a capital letter, while the specific epithet starts with a small letter.\nReason (R): This standardized typography prevents grammatical ambiguity between the generic singular noun and the specific qualifying epithet.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on capitalization typography.",
      "1. (A) is true: Universal Rule 4 mandates this typographic convention.\n2. (R) is true: capitalization of the genus (noun) and lowercase for the specific epithet (adjective) maintains visual and grammatical distinction, explaining (A).",
      "Options B, C, and D are incorrect.",
      "bio-nomenclature-systematics", "Capitalization Typography AR")

    q(498, "Which international code regulates the scientific naming of fossil plants, algae, and fungi?",
      "ICN (International Code of Nomenclature for algae, fungi, and plants)",
      "ICZN", "ICTV", "IUCN",
      "A", "ICN scope algae fungi plants.",
      "1. The ICN (formerly ICBN) governs the nomenclature of all phototrophic organisms (plants, algae, cyanobacteria), fungi, and their fossil counterparts.",
      "Option B is for animals. Option C is for viruses. Option D is conservation.",
      "bio-nomenclature-systematics", "ICN Comprehensive Scope")

    q(499, "What happens if a taxonomist discovers that two different species in the same family have been given the same generic name?",
      "The later published generic name is a junior homonym and must be replaced with a new generic name",
      "Both genera are merged into one species",
      "The older genus is deleted",
      "Both generic names remain valid",
      "A", "Homonymy at generic level.",
      "1. Under both ICBN and ICZN, no two genera within the same kingdom can have the same generic name; the junior homonym is illegitimate and must be renamed.",
      "Options B, C, and D violate nomenclatural rules.",
      "bio-nomenclature-systematics", "Generic Homonymy Rule")

    q(500, "What is the overarching legacy of Carolus Linnaeus's contributions to modern biology?",
      "He established the universal system of Binomial Nomenclature and hierarchical classification that brought order, consistency, and global communication to biological taxonomy",
      "He discovered DNA double helix",
      "He proved the cell theory",
      "He formulated the laws of inheritance",
      "A", "Linnaeus lasting legacy.",
      "1. Carolus Linnaeus transformed natural history from chaotic descriptive polynomials into a standardized, universal, predictive discipline of binomial nomenclature and hierarchical classification that remains the global foundation of biology today.",
      "Option B was Watson and Crick. Option C was Schleiden and Schwann. Option D was Gregor Mendel.",
      "bio-nomenclature-systematics", "Linnaeus Lasting Legacy")

    return questions

if __name__ == '__main__':
    qs = get_part4_questions()
    print(f"Generated {len(qs)} questions for Part 4.")
    assert len(qs) == 125, f"Expected 125, got {len(qs)}"
    hard_count = sum(1 for q in qs if q['difficulty'] == 'Hard')
    assert hard_count == 125, f"Expected 125 Hard, got {hard_count}"
    print("Part 4 validation passed!")
