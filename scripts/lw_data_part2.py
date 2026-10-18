import json

def get_part2_questions():
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
            "difficulty": "Medium",
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

    # --- TOPIC 1: bio-living-biodiversity (Q126 - Q156) ---
    q(126, "Which of the following statements correctly distinguishes growth in plants from growth in animals?",
      "Plants grow by cell elongation only, while animals grow by cell division only",
      "In plants, growth occurs continuously throughout life by localized meristems, whereas in animals, growth occurs only up to a certain age",
      "Animal growth is indeterminate, whereas plant growth is determinate",
      "Plants grow extrinsically, whereas animals grow intrinsically",
      "B", "Indeterminate vs determinate growth in plants and animals.",
      "1. Plant growth is open and indeterminate, continuing throughout life due to apical and lateral meristematic tissues.\n2. Animal growth is closed and determinate, ceasing once adult body form is attained, with subsequent cell division restricted to tissue repair and cell replacement.",
      "Option A is false because both utilize cell division and elongation. Option C reverses the terms. Option D is false because all living organisms grow intrinsically.",
      "bio-living-biodiversity", "Plant vs Animal Growth")

    q(127, "Consider the following statements regarding reproduction:\nStatement I: Reproduction is an all-inclusive defining characteristic of living organisms.\nStatement II: Mules, sterile worker bees, and infertile human couples are living organisms that do not reproduce.\nChoose the correct option:",
      "Statement I is correct, Statement II is incorrect",
      "Statement I is incorrect, Statement II is correct",
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "B", "Reproduction as a non-defining characteristic.",
      "1. A defining characteristic of life must be present in every single living organism without exception.\n2. Organisms such as mules, worker honeybees, and infertile human couples are metabolically active and cellular (alive) but incapable of reproducing.\n3. Therefore, Statement I is incorrect and Statement II is correct.",
      "Option A is wrong because Statement I fails the exception test. Options C and D are inconsistent with NCERT facts.",
      "bio-living-biodiversity", "Reproduction Evaluation")

    q(128, "Why are isolated metabolic reactions performed in a test tube (in vitro) not considered living organisms?",
      "Because they do not consume ATP",
      "Because they lack a cellular organization and the regulatory homeostatic environment of an intact cell",
      "Because the enzymes in vitro are denatured",
      "Because chemical reactions can only happen in non-living systems",
      "B", "In vitro metabolic reactions vs living organisms.",
      "1. An isolated biochemical reaction in vitro demonstrates that metabolic pathways can function outside the cell, proving it is a living reaction.\n2. However, it cannot be called a 'living organism' because it lacks a bounded cellular architecture, protoplasm, and self-regulating biological systems.",
      "Option A is false; many in vitro reactions use ATP. Option C is false; active enzymes catalyze in vitro reactions. Option D is absurd.",
      "bio-living-biodiversity", "Metabolism In Vitro")

    q(129, "Which of the following pairs represents organisms where reproduction occurs exclusively by fragmentation?",
      "Amoeba and Paramecium",
      "Spirogyra, protonema of mosses, and fungal mycelia",
      "Yeast and Hydra",
      "Planaria and Periplaneta",
      "B", "Fragmentation in NCERT organisms.",
      "1. NCERT explicitly groups fungi, filamentous algae (such as Spirogyra), and the protonema of mosses as organisms that all easily multiply by fragmentation.",
      "Option A reproduces by binary fission. Option C reproduces by budding. Option D includes Periplaneta (cockroach), which reproduces sexually.",
      "bio-living-biodiversity", "Fragmentation Groups")

    q(130, "Read the following statements:\n(A) Increase in mass and increase in number of individuals are twin characteristics of growth.\n(B) In unicellular organisms, growth and reproduction are mutually inclusive.\n(C) In higher plants and animals, growth and reproduction are mutually exclusive.\n(D) Non-living objects exhibit intrinsic growth.\nHow many of the above statements are CORRECT?",
      "One", "Two", "Three", "Four",
      "C", "Comprehensive evaluation of growth statements.",
      "1. Statement A is correct (NCERT verbatim).\n2. Statement B is correct (cell division increases cell count and population count in unicellular organisms).\n3. Statement C is correct (higher organisms grow before reproducing, and cell division does not create a new individual).\n4. Statement D is INCORRECT because non-living objects exhibit extrinsic accretion, not intrinsic growth.\n5. Exactly 3 statements (A, B, C) are correct.",
      "Options A, B, and D give incorrect counts.",
      "bio-living-biodiversity", "Growth Statements Multi-check")

    q(131, "Which of the following characteristics can be defined as the ability of an organism to sense environmental changes and respond appropriately?",
      "Metabolism", "Consciousness / Irritability", "Cellular totipotency", "Morphallaxis",
      "B", "Definition of consciousness.",
      "1. Consciousness (irritability) is the awareness of external stimuli (physical, chemical, or biological) and the generation of coordinated physiological responses.",
      "Option A is the sum of chemical reactions. Option C is cell differentiation potential. Option D is whole-body reconstruction in regeneration.",
      "bio-living-biodiversity", "Consciousness Definition")

    q(132, "Photoperiodism directly influences which of the following biological events?",
      "DNA replication in bacteria",
      "Seasonal breeding in animals and flowering in seasonal plants",
      "Extrinsic accretion in mountains",
      "Osmosis across artificial dialysis membranes",
      "B", "Photoperiodism biological impacts.",
      "1. Photoperiod (day length) triggers hormonal changes that synchronize reproductive readiness in seasonal breeders (both plants and animals).\n2. Plants use phytochrome systems to measure night length for flowering, while animals synchronize gametogenesis with favorable environmental seasons.",
      "Options A, C, and D are unaffected by photoperiod.",
      "bio-living-biodiversity", "Photoperiodism Applications")

    q(133, "Assertion (A): Cellular organization of the body is the defining feature of life forms.\nReason (R): No non-living object has cellular organization, and all living organisms are composed of one or more cells.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on cellular organization.",
      "1. Assertion (A) is true: cellular organization is a universal defining property of life.\n2. Reason (R) is true: all living entities consist of cells with protoplasm, whereas non-living entities completely lack cellular structure.\n3. Reason correctly explains why cellular organization is defining (it fulfills universal presence in living and total absence in non-living).",
      "Options B, C, and D represent incorrect logical pairings.",
      "bio-living-biodiversity", "Cellular Organisation AR")

    q(134, "Assertion (A): Non-living objects also exhibit growth.\nReason (R): Mountains, boulders, and sand dunes increase in size by the accumulation of matter on their exterior surface.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on non-living growth.",
      "1. Assertion (A) is true: if increase in body mass is taken as a criterion of growth, non-living objects also grow.\n2. Reason (R) is true: this extrinsic growth occurs by accretion of material on the outer surface.\n3. (R) correctly explains how non-living things satisfy the broad definition of mass increase.",
      "Options B, C, and D are incorrect.",
      "bio-living-biodiversity", "Extrinsic Growth AR")

    q(135, "What is the biological status of a comatose patient maintained on mechanical life-support systems?",
      "The patient is non-living because the brain is completely non-functional",
      "The patient has lost self-consciousness, but cellular metabolic activities continue within the tissues",
      "The patient exhibits higher self-consciousness than a healthy individual",
      "The patient is technically a non-cellular organism",
      "B", "Comatose patient physiological state.",
      "1. A brain-dead patient on life-support lacks self-consciousness and cannot sense or respond to the environment.\n2. However, cellular respiration, circulation (assisted), and enzymatic metabolic reactions continue within organs.",
      "Option A ignores ongoing cellular metabolism. Option C is false. Option D is scientifically invalid.",
      "bio-living-biodiversity", "Comatose Analysis")

    q(136, "Which of the following is NOT an asexual reproductive structure or method described in NCERT Chapter 1?",
      "True regeneration in Planaria",
      "Budding in Yeast",
      "Binary fission in Amoeba",
      "Gametic syngamy in mosses",
      "D", "Asexual vs sexual mechanisms in NCERT.",
      "1. Gametic syngamy (fertilization of male and female gametes) is the hallmark of sexual reproduction, not asexual reproduction.\n2. Regeneration, budding, binary fission, and fragmentation are asexual modes described in NCERT Chapter 1.",
      "Options A, B, and C are explicitly described asexual modes.",
      "bio-living-biodiversity", "Asexual vs Sexual")

    q(137, "Match Column I with Column II:\nColumn I:\n(p) Yeast\n(q) Planaria\n(r) Filamentous algae\n(s) Amoeba\nColumn II:\n(1) True regeneration\n(2) Budding\n(3) Binary fission\n(4) Fragmentation",
      "p-2, q-1, r-4, s-3",
      "p-1, q-2, r-3, s-4",
      "p-3, q-4, r-1, s-2",
      "p-4, q-3, r-2, s-1",
      "A", "Matching organisms with asexual reproductive modes.",
      "1. Yeast multiplies by budding (p-2).\n2. Planaria exhibits true regeneration (q-1).\n3. Filamentous algae multiply by fragmentation (r-4).\n4. Amoeba divides by binary fission (s-3).\n5. Correct sequence: p-2, q-1, r-4, s-3.",
      "Options B, C, and D mix up the reproductive associations.",
      "bio-living-biodiversity", "Asexual Match")

    q(138, "Metabolic reactions can be demonstrated outside the body in cell-free systems. An isolated metabolic reaction outside the body performed in a test tube is:",
      "Living organism",
      "Non-living reaction",
      "Neither living nor non-living, but surely a living reaction",
      "A non-biological reaction",
      "C", "In vitro metabolic reaction status verbatim.",
      "1. NCERT verbatim: 'An isolated metabolic reaction(s) outside the body of an organism, performed in a test tube is neither living nor non-living... isolated metabolic reactions in vitro are not living things but surely living reactions.'",
      "Options A, B, and D contradict the precise formulation in NCERT.",
      "bio-living-biodiversity", "Metabolism In Vitro Verbatim")

    q(139, "Which of the following organisms does NOT reproduce?",
      "Worker honeybee", "Queen honeybee", "Drone honeybee", "Soldier termite",
      "A", "Worker honeybee sterility.",
      "1. Worker honeybees are sterile diploid females that develop from fertilized eggs but do not produce progeny.\n2. Queen bees are fertile females, and drones are fertile haploid males.",
      "Options B and C are fertile reproductive castes. Option D represents termites which maintain reproductive royal pairs.",
      "bio-living-biodiversity", "Worker Bee Sterility")

    q(140, "Why is consciousness considered a defining property of living organisms, whereas self-consciousness is not?",
      "Because consciousness is present in all organisms without exception, whereas self-consciousness is restricted only to humans",
      "Because self-consciousness is present in non-living objects",
      "Because consciousness is absent in plants",
      "Because self-consciousness is present in all mammals",
      "A", "Consciousness vs self-consciousness.",
      "1. Consciousness (irritability) is exhibited by all organisms, from prokaryotes to humans, making it a universal defining property.\n2. Self-consciousness (self-awareness) is unique to human beings; non-human organisms lack self-consciousness.",
      "Option B is false. Option C is false because plants respond to light/gravity. Option D is false because non-human mammals do not exhibit verified self-consciousness in NCERT.",
      "bio-living-biodiversity", "Consciousness vs Self-consciousness")

    q(141, "Which of the following statements about growth is INCORRECT?",
      "In living organisms, growth is from inside (intrinsic)",
      "In animals, growth by cell division occurs only up to a certain age",
      "Growth by increase in body mass is an exclusive defining property of living organisms",
      "In plants, growth continues throughout life due to meristems",
      "C", "Growth as non-defining.",
      "1. Growth cannot be an exclusive defining property because non-living objects (mountains, crystals, sand dunes) also exhibit growth by external accretion of matter.",
      "Options A, B, and D are completely correct NCERT statements.",
      "bio-living-biodiversity", "Incorrect Growth Statement")

    q(142, "Living organisms are best described as:",
      "Static systems that avoid external energy consumption",
      "Self-replicating, evolving, and self-regulating interactive systems capable of responding to external stimuli",
      "Inanimate collections of complex chemical polymers",
      "Mechanisms that function only through reversible extrinsic accretion",
      "B", "Comprehensive definition of living organisms in NCERT.",
      "1. NCERT summary: 'Living organisms are self-replicating, evolving and self-regulating interactive systems capable of responding to external stimuli.'",
      "Options A, C, and D are either obsolete, inanimate, or contrary to biological principles.",
      "bio-living-biodiversity", "Living Organism Definition")

    q(143, "Properties of tissues are not present in the constituent cells but arise as a result of:",
      "Spontaneous generation",
      "Interactions among the constituent cells",
      "Accumulation of non-living mineral deposits",
      "Mutations occurring during development",
      "B", "Emergent properties in biological hierarchy.",
      "1. NCERT states: 'Properties of tissues are not present in the constituent cells but arise as a result of interactions among the constituent cells.'\n2. Similarly, properties of organelles arise from interactions among molecular components. This is the phenomenon of emergent properties.",
      "Options A, C, and D do not describe emergent biological coordination.",
      "bio-living-biodiversity", "Emergent Properties")

    q(144, "The biological species concept cannot be applied to which of the following groups?",
      "Birds and mammals",
      "Obligate asexually reproducing organisms and fossil taxa",
      "Angiosperms",
      "Gymnosperms",
      "B", "Limitations of biological species concept.",
      "1. Ernst Mayr's biological species concept relies on natural interbreeding and reproductive isolation.\n2. It cannot be applied to obligate asexual organisms (e.g., bacteria, bdelloid rotifers) or extinct fossil taxa where reproductive behavior cannot be observed.",
      "Options A, C, and D are sexually reproducing living taxa where Mayr's concept applies.",
      "bio-living-biodiversity", "Species Concept Limitations")

    q(145, "In which of the following organisms does growth by cell division not lead to an increase in organism population size?",
      "Bacteria", "Chlamydomonas", "Human being (Homo sapiens)", "Amoeba",
      "C", "Multicellular growth vs population increase.",
      "1. In humans (multicellular organisms), cell division increases body mass and replaces damaged tissues, but does not increase the number of independent individuals.\n2. In unicellular bacteria, Chlamydomonas, and Amoeba, cell division directly doubles the population size.",
      "Options A, B, and D are unicellular organisms where cell division equates to reproduction.",
      "bio-living-biodiversity", "Cell Division vs Population")

    q(146, "Which of the following is an example of catabolism?",
      "Synthesis of glycogen from glucose",
      "Breakdown of glucose into pyruvate and carbon dioxide during respiration",
      "Photosynthetic assimilation of carbon dioxide into sugars",
      "Synthesis of proteins from amino acids",
      "B", "Catabolic reactions.",
      "1. Catabolism refers to metabolic degradation/breakdown of complex organic molecules into simpler molecules with release of energy (e.g., cellular respiration, glycolysis).\n2. Glycogen synthesis, photosynthesis, and protein synthesis are anabolic (constructive) pathways.",
      "Options A, C, and D are anabolic reactions.",
      "bio-living-biodiversity", "Catabolism Example")

    q(147, "Which of the following pairs is INCORRECTLY matched?",
      "Amoeba - Binary fission",
      "Hydra - Budding",
      "Planaria - True regeneration",
      "Mucor - Self-consciousness",
      "D", "Identification of false biological pairs.",
      "1. Mucor is a saprophytic fungus; it has consciousness and responds to environmental cues, but possesses NO self-consciousness (which is restricted to humans).\n2. Amoeba, Hydra, and Planaria are correctly paired with their asexual modes.",
      "Options A, B, and C are valid NCERT pairings.",
      "bio-living-biodiversity", "Incorrect Pairing Mucor")

    q(148, "Which characteristic ensures that past, present, and future living organisms are evolutionarily connected?",
      "All organisms share common genetic material (nucleic acids) to varying degrees",
      "All organisms have identical blood types",
      "All organisms live in identical ecological niches",
      "All organisms reproduce at the exact same rate",
      "A", "Universal genetic material.",
      "1. All life shares DNA/RNA as the hereditary material. The universal genetic code and homology in essential biochemical pathways prove common descent from a primordial ancestor.",
      "Options B, C, and D are biologically untrue.",
      "bio-living-biodiversity", "Universal Genetic Material")

    q(149, "Which of the following exhibits growth by internal cell division in localized regions throughout life?",
      "A banyan tree (Ficus benghalensis)",
      "A mountain boulder",
      "A royal Bengal tiger",
      "A crystal of sodium chloride",
      "A", "Plant meristematic indeterminate growth.",
      "1. Banyan trees (plants) possess apical, intercalary, and lateral meristems that divide continuously throughout life.\n2. Tigers stop growing at adulthood; boulders and crystals grow extrinsically.",
      "Option B and D are non-living. Option C shows determinate animal growth.",
      "bio-living-biodiversity", "Indeterminate Growth Banyan")

    q(150, "Why is an internal increase in mass considered a non-sufficient criterion to define living status on its own?",
      "Because mass does not change in any organism",
      "Because mass can decrease during starvation or catabolism in living beings, and mass increase can occur extrinsically in non-living objects",
      "Because all living organisms have constant weight",
      "Because cells do not possess mass",
      "B", "Mass increase ambiguity.",
      "1. Increase in mass is not unique to living beings (mountains and sand dunes accumulate mass extrinsically), and a living organism can lose mass during metabolic catabolism, starvation, or dehydration without ceasing to be alive.",
      "Options A, C, and D are scientifically erroneous.",
      "bio-living-biodiversity", "Mass Increase Ambiguity")

    q(151, "Which of the following is NOT a defining characteristic of living organisms?",
      "Metabolism", "Cellular organisation", "Consciousness", "Reproduction",
      "D", "Non-defining characteristic identification.",
      "1. Reproduction is not a defining feature because sterile organisms (mules, sterile bees) are alive without reproducing.\n2. Metabolism, cellular organization, and consciousness have no exceptions in the living world.",
      "Options A, B, and C are confirmed defining features in NCERT.",
      "bio-living-biodiversity", "Non-defining Reproduction")

    q(152, "In asexual reproduction, the progeny produced are genetically:",
      "Completely different from the parent",
      "Identical to each other and identical to the parent (clones)",
      "Always sterile",
      "Always haploid regardless of parental ploidy",
      "B", "Clonal nature of asexual progeny.",
      "1. Asexual reproduction involves mitosis without syngamy or meiosis, producing morphologically and genetically identical offspring called clones.",
      "Option A describes sexual variation. Option C is false. Option D ignores diploid asexual reproduction.",
      "bio-living-biodiversity", "Clones Asexual")

    q(153, "The phenomenon of true regeneration in Planaria involves:",
      "Only the healing of an incised surface",
      "The morphallactic and epimorphic reconstruction of an entire organism from a severed body fragment",
      "The production of gametes from somatic cells",
      "The formation of endospores",
      "B", "Planaria true regeneration details.",
      "1. True regeneration means that when an organism is fragmented, each fragment regenerates the missing body sections and reorganizes into a complete functional worm.",
      "Option A is tissue repair, not true organismal regeneration. Options C and D are different reproductive/survival strategies.",
      "bio-living-biodiversity", "Planaria True Regeneration")

    q(154, "Assertion (A): Isolated metabolic reactions in vitro are living reactions.\nReason (R): They are catalyzed by biologically active enzymes extracted from living cells.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on in vitro enzymes.",
      "1. (A) is true: in vitro metabolic reactions are genuine living reactions occurring outside the organism.\n2. (R) is true: they involve real cellular biocatalysts operating under biochemical principles identical to those inside living cells, explaining why they are classified as living reactions.",
      "Options B, C, and D are incorrect.",
      "bio-living-biodiversity", "In Vitro AR")

    q(155, "Which of the following statements about biodiversity is CORRECT?",
      "The number of known species is between 1.7 to 1.8 billion",
      "The number of described species is between 1.7 to 1.8 million",
      "All species on Earth have already been discovered and named",
      "Tropical rainforests have lower biodiversity than polar regions",
      "B", "Biodiversity correct figures.",
      "1. Described species number 1.7 to 1.8 million (17 to 18 lakh).\n2. Millions more remain undiscovered, particularly in tropical rainforests and deep oceans.",
      "Option A uses billion instead of million. Option C is false. Option D reverses global biodiversity gradients.",
      "bio-living-biodiversity", "Biodiversity Million vs Billion")

    q(156, "Self-regulation and interaction in living systems are exemplified by:",
      "Homeostatic feedback mechanisms keeping body temperature and blood glucose constant",
      "Continuous uncontrolled external accretion",
      "Static chemical equilibrium without energy expenditure",
      "Complete isolation from environmental influences",
      "A", "Homeostasis and self-regulation.",
      "1. Living organisms are self-regulating open systems that maintain an internal dynamic steady-state (homeostasis) through neuro-endocrine and biochemical feedback loops.",
      "Options B, C, and D contradict open-system biological thermodynamics.",
      "bio-living-biodiversity", "Homeostatic Self-regulation")

    # --- TOPIC 2: bio-classification-taxonomy (Q157 - Q187) ---
    q(157, "Which sequence represents the correct chronological order of the fundamental processes in taxonomy according to NCERT?",
      "Classification -> Nomenclature -> Identification -> Characterisation",
      "Characterisation -> Identification -> Nomenclature -> Classification",
      "Nomenclature -> Characterisation -> Classification -> Identification",
      "Identification -> Classification -> Characterisation -> Nomenclature",
      "B", "Chronological order of taxonomy processes.",
      "1. According to NCERT: first, an unknown organism is characterised (external and internal morphology, cytology, ecology); second, it is identified; third, it is assigned a scientific name according to nomenclature codes; fourth, it is classified into categories based on similarities.",
      "Options A, C, and D represent scrambled sequences.",
      "bio-classification-taxonomy", "CINC Sequence")

    q(158, "What does 'Characterisation' involve in modern taxonomical studies?",
      "Only recording the weight of the organism",
      "Understanding external and internal structure, along with the structure of cell, development process, and ecological information of organisms",
      "Only reading historical Greek texts",
      "Assigning an arbitrary Latin name without dissection",
      "B", "Characterisation in NCERT modern taxonomy.",
      "1. NCERT explicitly states: 'Hence, characterisation, identification, nomenclature and classification are the processes that are basic to taxonomy. Modern taxonomic studies include external and internal structure, along with the structure of cell, development process and ecological information.'",
      "Options A, C, and D are inaccurate or obsolete.",
      "bio-classification-taxonomy", "Characterisation Scope")

    q(159, "The primary goal of 'Identification' in biological taxonomy is:",
      "To create a new family for every newly discovered plant",
      "To determine whether an organism is identical with an already known and described organism, and to place it in its correct position",
      "To destroy identical specimens in herbaria",
      "To patent the genetic sequence for commercial profit",
      "B", "Identification objective.",
      "1. Identification is the determination of the correct name and place of an organism in a previously established system of classification by comparing it with known reference taxa.",
      "Options A, C, and D are scientifically incorrect.",
      "bio-classification-taxonomy", "Identification Objective")

    q(160, "Which of the following is considered the earliest documented classification system based on scientific principles?",
      "Linnaeus's sexual system based on stamen numbers",
      "Aristotle's classification dividing plants into herbs, shrubs, trees and animals into Enaima and Anaima",
      "Whittaker's five-kingdom classification",
      "Hennig's cladistics",
      "B", "Aristotle scientific classification.",
      "1. Aristotle was the earliest philosopher to provide a scientific foundation for classification, using morphological traits for plants and presence/absence of red blood for animals.",
      "Options A, C, and D were formulated centuries later.",
      "bio-classification-taxonomy", "Aristotle Earliest System")

    q(161, "Aristotle classified animals into two main groups based on red blood cells: 'Enaima' and 'Anaima'. Which of the following is an example of an 'Enaima' animal?",
      "Sponge", "Cnidarian", "Frog (Amphibian)", "Jellyfish",
      "C", "Enaima vs Anaima.",
      "1. Enaima includes animals possessing red blood (vertebrates like mammals, birds, reptiles, amphibians such as frogs, and fishes).\n2. Anaima includes invertebrates lacking red blood (sponges, cnidarians, insects, mollusks).",
      "Options A, B, and D are invertebrates lacking red blood.",
      "bio-classification-taxonomy", "Enaima Example")

    q(162, "The term 'Biosystematics' was introduced by:",
      "Julian Huxley in 1940", "Carolus Linnaeus in 1753", "Charles Darwin in 1859", "Ernst Mayr in 1969",
      "A", "Julian Huxley biosystematics.",
      "1. Sir Julian Huxley introduced the term 'New Systematics' or 'Biosystematics' in 1940, advocating the synthesis of cytology, ecology, genetics, and physiology into classical morphology.",
      "Options B, C, and D made other evolutionary and taxonomic contributions.",
      "bio-classification-taxonomy", "Biosystematics Huxley")

    q(163, "Which branch of taxonomy utilizes chemical constituents of plants (such as alkaloids, flavonoids, amino acids, and DNA sequences) to resolve taxonomic confusion?",
      "Chemotaxonomy", "Cytotaxonomy", "Numerical taxonomy", "Alpha taxonomy",
      "A", "Chemotaxonomy definition.",
      "1. Chemotaxonomy uses biochemical constituents, secondary metabolites (alkaloids, terpenoids, carotenoids), and macromolecular sequences to clarify evolutionary relationships.",
      "Option B uses chromosome number, size, and behavior. Option C uses statistical mathematical analysis of observable traits. Option D is purely gross morphology.",
      "bio-classification-taxonomy", "Chemotaxonomy")

    q(164, "Which branch of taxonomy is based on cytological information like chromosome number, structure, and behavior during meiosis?",
      "Cytotaxonomy", "Chemotaxonomy", "Numerical taxonomy", "Karyology only",
      "A", "Cytotaxonomy definition.",
      "1. Cytotaxonomy resolves taxonomic problems using cytogenetic characters such as chromosome number, karyotype morphology, banding patterns, and meiotic chromosomal behavior.",
      "Option B uses chemical compounds. Option C uses numerical algorithms. Option D is the study of nuclei, not an entire taxonomic discipline.",
      "bio-classification-taxonomy", "Cytotaxonomy")

    q(165, "Numerical taxonomy (phenetics) evaluates relationships among taxa based on:",
      "Only the length of the flower",
      "Observable characters given equal weight and processed using computers and mathematical algorithms",
      "Only DNA hybridisation data",
      "The subjective opinion of the senior curator",
      "B", "Numerical taxonomy in NCERT.",
      "1. Numerical taxonomy is based on all observable characteristics. Number and codes are assigned to each character and data processed using computers; each character is given equal importance.",
      "Options A, C, and D do not represent numerical taxonomy.",
      "bio-classification-taxonomy", "Numerical Taxonomy")

    q(166, "Assertion (A): Taxonomic keys are called analytical in nature.\nReason (R): Keys are based on contrasting characters in pairs (couplets), where acceptance of one lead results in the automatic rejection of the other.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on analytical keys.",
      "1. (A) is true: taxonomic keys are described as analytical aids.\n2. (R) is true: they function by stepwise logical exclusion between contrasting couplet leads, which explains the analytical methodology.",
      "Options B, C, and D are incorrect.",
      "bio-classification-taxonomy", "Taxonomic Keys AR")

    q(167, "In a dichotomous key, what are the two contrasting statements of a couplet called individually?",
      "Couplets", "Leads", "Taxa", "Categories",
      "B", "Lead definition in keys.",
      "1. A couplet consists of two contrasting options.\n2. Each individual statement within the couplet is called a lead.",
      "Option A is the whole pair. Option C is a biological group. Option D is a hierarchical rank.",
      "bio-classification-taxonomy", "Lead Concept")

    q(168, "Why cannot succulent plants, cacti, and submerged aquatic plants be preserved effectively on standard herbarium sheets?",
      "Because they are toxic to botanists",
      "Because succulents decay during pressing and aquatic plants collapse and disintegrate upon drying",
      "Because herbaria forbid plants with flowers",
      "Because they do not have scientific names",
      "B", "Limitations of herbarium sheets.",
      "1. Fleshy succulents contain massive water reserves that rot rather than dry when pressed, and fragile aquatic plants lose all structural form when taken out of water.\n2. Such specimens are preserved in liquid preservatives (4% formalin or FAA) in jars.",
      "Options A, C, and D are false.",
      "bio-classification-taxonomy", "Herbarium Limitations")

    q(169, "In herbarium management, which chemical is commonly used as a poison to prevent insect attacks on mounted specimens?",
      "0.1% Mercuric chloride (HgCl2)", "10% Sodium hydroxide", "Concentrated hydrochloric acid", "Pure chloroform",
      "A", "Mercuric chloride poisoning in herbaria.",
      "1. Dipping plant specimens in a dilute solution of 0.1% mercuric chloride (corrosive sublimate) is the traditional botanical poisoning technique to prevent infestation by herbarium beetles and booklice.",
      "Options B and C destroy plant tissues. Option D evaporates immediately.",
      "bio-classification-taxonomy", "Mercuric Chloride Herbarium")

    q(170, "What is mounted at the lower right-hand corner of a standard herbarium sheet?",
      "A pressed flower bud",
      "The identification label providing collector, date, locality, common names, family, and scientific name",
      "The price tag of the sheet",
      "A barcode only with no text",
      "B", "Herbarium label location and contents.",
      "1. The lower right-hand corner of a herbarium sheet bears the standardized printed label containing complete accession and collection data (date, locality, collector, habitat, vernacular name, family, botanical name).",
      "Options A, C, and D do not represent international herbarium protocol.",
      "bio-classification-taxonomy", "Herbarium Label Corner")

    q(171, "Which of the following botanical gardens houses the world's largest herbarium and living collection?",
      "Royal Botanic Gardens, Kew (England)",
      "National Botanical Research Institute, Lucknow",
      "Indian Botanic Garden, Howrah",
      "Lalbagh Botanical Garden, Bengaluru",
      "A", "Royal Botanic Gardens Kew.",
      "1. Royal Botanic Gardens at Kew, Richmond, London, England, is the world's most prestigious botanical garden, holding over 8.5 million preserved herbarium specimens and extensive living plant collections.",
      "Options B, C, and D are prominent Indian botanical gardens.",
      "bio-classification-taxonomy", "Kew Living Collection")

    q(172, "The Great Banyan Tree (Ficus benghalensis), famous for its thousands of aerial prop roots spread over 3.5 acres, is located in:",
      "Acharya Jagadish Chandra Bose Indian Botanic Garden, Howrah",
      "NBRI, Lucknow",
      "Kew Gardens, England",
      "Corbett National Park",
      "A", "Great Banyan Tree location.",
      "1. The famous Great Banyan Tree is situated in the Acharya Jagadish Chandra Bose Indian Botanic Garden at Shibpur, Howrah (near Kolkata), West Bengal.",
      "Options B, C, and D are different sites.",
      "bio-classification-taxonomy", "Great Banyan Tree")

    q(173, "How does a 'Monograph' differ from a 'Flora'?",
      "A Monograph deals with all plants of a country, while a Flora deals with one genus",
      "A Monograph provides comprehensive information on any ONE taxon (e.g., family or genus), while a Flora provides the account of habitat and distribution of all plant species of a specific geographical area",
      "A Monograph is an alphabetical book catalogue, while a Flora is a botanical garden",
      "There is no difference; they are synonymous",
      "B", "Monograph vs Flora.",
      "1. Monograph: focused comprehensive systematic treatise on any single taxon (e.g., Monograph of the genus Pinus).\n2. Flora: inventory and account of habitat, distribution, and identification keys for all plant species growing within a defined geographical region (e.g., Flora of British India by J.D. Hooker).",
      "Option A reverses the scope. Options C and D are completely incorrect.",
      "bio-classification-taxonomy", "Monograph vs Flora")

    q(174, "A student finds an unknown plant in the Nilgiri hills. Which of the following taxonomic aids would be most directly useful to find the scientific names of the plant species in that local region?",
      "Flora and Manuals of the Nilgiri region",
      "A zoological park guide",
      "A textbook of human anatomy",
      "A global catalogue of extinct dinosaurs",
      "A", "Application of Flora and Manuals.",
      "1. Local Floras provide accounts of habitat, distribution, and keys for plants of an area, and Manuals provide descriptions and keys for identifying species in that region.",
      "Options B, C, and D are completely irrelevant.",
      "bio-classification-taxonomy", "Flora Application Nilgiri")

    q(175, "Which taxonomical aid is exclusively dedicated to preserved animal skeletons and stuffed vertebrates?",
      "Biological Museum", "Herbarium", "Botanical Garden", "Manual",
      "A", "Museum animal collections.",
      "1. Museums preserve dry and wet animal specimens, articulated skeletons, taxidermy mounts of birds and mammals, and pinned insects for educational and taxonomic reference.",
      "Option B is for pressed plants. Option C is for living plants. Option D is written literature.",
      "bio-classification-taxonomy", "Museum Skeletons")

    q(176, "Taxidermy is the art and technique of:",
      "Preparing pressed herbarium sheets",
      "Skinning, stuffing, and mounting dead animals (especially birds and mammals) for display in museums",
      "Classifying plants based on floral diagrams",
      "Sequencing ribosomal RNA genes",
      "B", "Taxidermy definition.",
      "1. Taxidermy is the museum preservation technique of preparing, stuffing, and mounting the skins of animals with lifelike effect.",
      "Options A, C, and D are herbarium preparation, plant morphology, and molecular phylogenetics respectively.",
      "bio-classification-taxonomy", "Taxidermy")

    q(177, "Which of the following is NOT an advantage of maintaining Zoological Parks (Zoos)?",
      "Ex-situ captive breeding of endangered wild species",
      "Study of feeding habits, reproductive behavior, and welfare of wild animals",
      "Educating the public about wildlife conservation",
      "Allowing tourists to hunt and shoot animals for recreational sport",
      "D", "Zoological park ethics.",
      "1. Zoological parks are designed for protection, conservation, public education, and scientific study of wildlife behavior. Recreational hunting is completely prohibited and illegal.",
      "Options A, B, and C are recognized conservation roles of zoological parks.",
      "bio-classification-taxonomy", "Zoo Conservation Roles")

    q(178, "Consider the following statements regarding taxonomic keys:\nStatement I: Keys are analytical devices based on contrasting characters in pairs called couplets.\nStatement II: The same single key can be used universally to identify all families, genera, and species simultaneously.\nChoose the correct option:",
      "Statement I is correct, Statement II is incorrect",
      "Statement I is incorrect, Statement II is correct",
      "Both statements are correct",
      "Both statements are incorrect",
      "A", "Separate keys evaluation.",
      "1. Statement I is correct: keys use couplets and leads analytically.\n2. Statement II is incorrect because NCERT explicitly states: 'Separate taxonomic keys are required for each taxonomic category such as family, genus and species for identification purposes.'",
      "Option B, C, and D are inconsistent with NCERT.",
      "bio-classification-taxonomy", "Keys Evaluation")

    q(179, "Which of the following represents an inductive or bracketed key format?",
      "A key where the two contrasting couplet leads are placed together side by side or consecutively on adjoining lines with cross-references",
      "A key written in poetic verse",
      "A key that lists only generic names without characters",
      "A key based purely on root length",
      "A", "Bracketed key format.",
      "1. In a bracketed (parallel) key, the two leads of a couplet are printed on consecutive lines, and each lead terminates either in a taxon name or a pointer number to the next couplet.",
      "Options B, C, and D are fabricated descriptions.",
      "bio-classification-taxonomy", "Bracketed Key")

    q(180, "Which of the following pairs of taxonomic aids consists solely of written or published documentation?",
      "Herbarium and Botanical Garden",
      "Museum and Zoological Park",
      "Flora and Monograph",
      "Botanical Garden and Zoological Park",
      "C", "Documentary taxonomic aids.",
      "1. Flora, Manuals, Monographs, and Catalogues are published literary taxonomic aids.\n2. Herbaria, botanical gardens, museums, and zoos are specimen-based physical repositories.",
      "Options A, B, and D contain physical specimen collections.",
      "bio-classification-taxonomy", "Documentary Aids")

    q(181, "What is an indented (yoked) taxonomic key?",
      "A key where couplet leads are arranged in a tree-like hierarchy with increasing visual indentation for subordinate leads",
      "A key mounted on an iron frame",
      "A key without couplets",
      "A key used only for bacteria",
      "A", "Indented key format.",
      "1. In an indented (yoked) key, subordinate choices are stepped inward (indented) beneath their parent couplets, forming a visual branching tree structure.",
      "Options B, C, and D are false.",
      "bio-classification-taxonomy", "Indented Key")

    q(182, "Which organization compiles and updates the global Red Data Book of endangered and threatened species?",
      "IUCN (International Union for Conservation of Nature)",
      "ICBN", "ICZN", "NBRI",
      "A", "IUCN Red Data Book.",
      "1. IUCN (International Union for Conservation of Nature, formerly WCU) publishes the Red Data Book assessing the extinction risk of global biodiversity.",
      "Option B and C govern nomenclature. Option D is an Indian research institute.",
      "bio-classification-taxonomy", "IUCN Red Data Book")

    q(183, "A taxonomist wishes to publish an exhaustive worldwide treatment of the plant family Poaceae (grasses). This publication would be categorized as a:",
      "Monograph", "Flora", "Manual", "Catalogue",
      "A", "Monograph application Poaceae.",
      "1. A comprehensive taxonomic treatise covering all aspects of any single taxon (the family Poaceae worldwide) is a Monograph.",
      "Option B covers regional vegetation. Option C is a local species identifier. Option D is an alphabetical register.",
      "bio-classification-taxonomy", "Monograph Poaceae")

    q(184, "The process of naming of organisms such that a particular organism is known by the same name all over the world is called:",
      "Nomenclature", "Identification", "Characterisation", "Classification",
      "A", "Nomenclature definition in NCERT.",
      "1. NCERT states: 'Nomenclature is the process of naming of organisms such that a particular organism is known by the same name all over the world.'",
      "Option B is identifying known organisms. Option C is describing traits. Option D is grouping into categories.",
      "bio-classification-taxonomy", "Nomenclature Definition")

    q(185, "Why is 'Identification' a mandatory prerequisite before 'Nomenclature' can occur?",
      "Because we must first determine what an organism is and how it differs from known taxa before we can assign it a valid distinct name",
      "Because organisms without names cannot be preserved",
      "Because identification changes the DNA sequence",
      "Because Linnaeus forbade naming after 1758",
      "A", "Identification prior to nomenclature.",
      "1. NCERT states: 'Nomenclature or naming is only possible when the organism is described correctly and we know to what organism the name is attached to. This is identification.'",
      "Options B, C, and D are false.",
      "bio-classification-taxonomy", "Identification Preceding")

    q(186, "Which of the following is a living ex-situ collection of medicinal and ornamental plants maintained in Bengaluru, India?",
      "Lalbagh Botanical Garden", "National Museum, New Delhi", "Jim Corbett Park", "Sundarbans Biosphere Reserve",
      "A", "Lalbagh Botanical Garden.",
      "1. Lalbagh Botanical Garden in Bengaluru, Karnataka, is one of India's most celebrated living botanical gardens, famous for its glass house and extensive living plant collections.",
      "Option B is a historical museum. Options C and D are in-situ wildlife reserves.",
      "bio-classification-taxonomy", "Lalbagh Bengaluru")

    q(187, "Which taxonomic process groups organisms into categories based on some easily observable characters?",
      "Classification", "Nomenclature", "Characterisation", "Identification",
      "A", "Classification definition in NCERT.",
      "1. NCERT states: 'Classification is the process by which anything is grouped into convenient categories based on some easily observable characters.'",
      "Options B, C, and D are other distinct taxonomic steps.",
      "bio-classification-taxonomy", "Classification Process")

    # --- TOPIC 3: bio-species-hierarchy (Q188 - Q219) ---
    q(188, "Which of the following represents the correct descending hierarchy of taxonomic categories?",
      "Kingdom -> Phylum/Division -> Class -> Order -> Family -> Genus -> Species",
      "Species -> Genus -> Family -> Order -> Class -> Division -> Kingdom",
      "Kingdom -> Order -> Class -> Family -> Phylum -> Genus -> Species",
      "Division -> Class -> Kingdom -> Order -> Family -> Genus -> Species",
      "A", "Descending hierarchy order.",
      "1. Descending order starts from the highest category (Kingdom) down to the basic category (Species): Kingdom -> Phylum/Division -> Class -> Order -> Family -> Genus -> Species.",
      "Option B is ascending order. Options C and D scramble the hierarchical ranks.",
      "bio-species-hierarchy", "Descending Hierarchy")

    q(189, "At which level of the taxonomic hierarchy do organisms share the MAXIMUM number of common characteristics?",
      "Species", "Genus", "Family", "Kingdom",
      "A", "Maximum common characteristics at species level.",
      "1. Species is the lowest obligate category; members of a species share the maximum number of identical morphological, physiological, and genetic characteristics and can interbreed freely.",
      "Options B, C, and D are higher categories with progressively fewer shared characters.",
      "bio-species-hierarchy", "Max Common Species")

    q(190, "Two organisms belong to the same Class. They MUST also belong to the same:",
      "Order", "Family", "Phylum (or Division)", "Genus",
      "C", "Hierarchy inclusion logic.",
      "1. In a nested hierarchy, every category includes all categories below it.\n2. Organisms in the same Class must share the higher category (Phylum/Division and Kingdom), but may diverge into different Orders, Families, Genera, or Species.",
      "Options A, B, and D are lower categories where members of a Class can diverge.",
      "bio-species-hierarchy", "Class Inclusion Logic")

    q(191, "If two plant species belong to the same Order, they necessarily belong to the same:",
      "Class and Division", "Family and Genus", "Genus and Species", "Variety",
      "A", "Higher taxonomic rank inclusion.",
      "1. Taxa belonging to the same Order are grouped into the same higher categories (Class, Division, Kingdom).\n2. They may belong to different Families, Genera, or Species.",
      "Options B, C, and D are subordinate categories.",
      "bio-species-hierarchy", "Order Inclusion")

    q(192, "Consider the following taxonomic ranks for Housefly (Musca domestica):\n(1) Insecta\n(2) Diptera\n(3) Muscidae\n(4) Arthropoda\nWhat is the correct ascending order of these categories?",
      "3 -> 2 -> 1 -> 4",
      "2 -> 3 -> 1 -> 4",
      "4 -> 1 -> 2 -> 3",
      "1 -> 2 -> 3 -> 4",
      "A", "Housefly ranks ascending order.",
      "1. The ranks are:\n- Muscidae = Family (3)\n- Diptera = Order (2)\n- Insecta = Class (1)\n- Arthropoda = Phylum (4)\n2. Ascending order (lowest to highest): Family (3) -> Order (2) -> Class (1) -> Phylum (4).\n3. Correct sequence: 3 -> 2 -> 1 -> 4.",
      "Options B, C, and D represent incorrect rank arrangements.",
      "bio-species-hierarchy", "Housefly Ranks Ascending")

    q(193, "In NCERT Table 1.1, what are the Order and Class of Mango (Mangifera indica)?",
      "Sapindales and Dicotyledonae respectively",
      "Polymoniales and Dicotyledonae respectively",
      "Poales and Monocotyledonae respectively",
      "Anacardiaceae and Angiospermae respectively",
      "A", "NCERT Table 1.1 Mango Order and Class.",
      "1. For Mango (*Mangifera indica*):\n- Order = Sapindales\n- Class = Dicotyledonae.",
      "Option B is the order of potato. Option C is the wheat order/class. Option D lists family and division.",
      "bio-species-hierarchy", "Mango Order Class")

    q(194, "In NCERT Table 1.1, what are the Family and Order of Wheat (Triticum aestivum)?",
      "Poaceae and Poales respectively",
      "Poales and Poaceae respectively",
      "Anacardiaceae and Sapindales",
      "Solanaceae and Polymoniales",
      "A", "NCERT Table 1.1 Wheat Family and Order.",
      "1. For Wheat (*Triticum aestivum*):\n- Family = Poaceae\n- Order = Poales.",
      "Option B reverses the order and family. Option C is for mango. Option D is for potato.",
      "bio-species-hierarchy", "Wheat Family Order")

    q(195, "Match the common names in Column I with their taxonomic Families in Column II:\nColumn I:\n(p) Man\n(q) Housefly\n(r) Mango\n(s) Wheat\nColumn II:\n(1) Anacardiaceae\n(2) Hominidae\n(3) Poaceae\n(4) Muscidae",
      "p-2, q-4, r-1, s-3",
      "p-1, q-3, r-2, s-4",
      "p-4, q-2, r-3, s-1",
      "p-2, q-1, r-4, s-3",
      "A", "Matching Table 1.1 organisms to families.",
      "1. Man belongs to Hominidae (p-2).\n2. Housefly belongs to Muscidae (q-4).\n3. Mango belongs to Anacardiaceae (r-1).\n4. Wheat belongs to Poaceae (s-3).\n5. Correct mapping: p-2, q-4, r-1, s-3.",
      "Options B, C, and D have scrambled pairings.",
      "bio-species-hierarchy", "Table 1.1 Family Match")

    q(196, "Match the common names in Column I with their taxonomic Orders in Column II:\nColumn I:\n(p) Man\n(q) Housefly\n(r) Mango\n(s) Wheat\nColumn II:\n(1) Diptera\n(2) Primata\n(3) Poales\n(4) Sapindales",
      "p-2, q-1, r-4, s-3",
      "p-1, q-2, r-3, s-4",
      "p-3, q-4, r-1, s-2",
      "p-2, q-4, r-1, s-3",
      "A", "Matching Table 1.1 organisms to orders.",
      "1. Man belongs to Primata (p-2).\n2. Housefly belongs to Diptera (q-1).\n3. Mango belongs to Sapindales (r-4).\n4. Wheat belongs to Poales (s-3).\n5. Correct sequence: p-2, q-1, r-4, s-3.",
      "Options B, C, and D are incorrect.",
      "bio-species-hierarchy", "Table 1.1 Order Match")

    q(197, "Which of the following pairs of organisms belong to the same Phylum or Division?",
      "Man and Housefly",
      "Mango and Wheat",
      "Housefly and Wheat",
      "Man and Mango",
      "B", "Division Angiospermae shared pair.",
      "1. Both Mango (*Mangifera indica*) and Wheat (*Triticum aestivum*) are flowering plants belonging to the Division Angiospermae.\n2. Man is in Phylum Chordata, while Housefly is in Phylum Arthropoda.",
      "Options A, C, and D combine members of different kingdoms or phyla.",
      "bio-species-hierarchy", "Shared Division Angiospermae")

    q(198, "Which of the following organisms belongs to the order Primata?",
      "Tiger (Panthera tigris)",
      "Gibbon (Hylobates) and Human (Homo sapiens)",
      "Housefly (Musca domestica)",
      "Dog (Canis lupus familiaris)",
      "B", "Order Primata members.",
      "1. Order Primata includes lemurs, monkeys, apes (gibbons, chimpanzees, gorillas), and humans.\n2. Tigers and dogs belong to order Carnivora.",
      "Options A and D belong to Carnivora. Option C belongs to Diptera.",
      "bio-species-hierarchy", "Primata Members")

    q(199, "What taxonomic rank is represented by 'Polymoniales'?",
      "Family", "Order", "Class", "Division",
      "B", "Rank of Polymoniales.",
      "1. Polymoniales is a plant Order ending with '-ales', which includes families Convolvulaceae and Solanaceae.",
      "Option A ends with '-aceae'. Option C ends with '-opsida' or '-ae'. Option D ends with '-phyta'.",
      "bio-species-hierarchy", "Polymoniales Rank")

    q(200, "What taxonomic rank is represented by 'Anacardiaceae'?",
      "Genus", "Family", "Order", "Class",
      "B", "Rank of Anacardiaceae.",
      "1. Anacardiaceae is a plant Family ending with '-aceae', which contains the genus *Mangifera* (mango) and *Anacardium* (cashew).",
      "Options A, C, and D are different categories.",
      "bio-species-hierarchy", "Anacardiaceae Rank")

    q(201, "Which of the following is a polytypic genus containing lion, leopard, and tiger?",
      "Felis", "Canis", "Panthera", "Ursus",
      "C", "Genus Panthera polytypic nature.",
      "1. Genus *Panthera* contains multiple species: *P. leo* (lion), *P. pardus* (leopard), and *P. tigris* (tiger), making it a polytypic genus.",
      "Option A is the cat genus. Option B is the dog genus. Option D is the bear genus.",
      "bio-species-hierarchy", "Panthera Polytypic")

    q(202, "Which genus contains both potato and makoi?",
      "Petunia", "Datura", "Solanum", "Brassica",
      "C", "Solanum tuberosum and nigrum.",
      "1. Potato (*Solanum tuberosum*), brinjal (*Solanum melongena*), and makoi (*Solanum nigrum*) all belong to the genus *Solanum*.",
      "Options A and B are other genera in family Solanaceae. Option D is mustard in Brassicaceae.",
      "bio-species-hierarchy", "Solanum Genera Content")

    q(203, "Why are dogs (Canis) and cats (Felis) placed in separate families (Canidae and Felidae) despite both being carnivores?",
      "Because they live in different geographical continents",
      "Because they have distinct morphological, cranial, and dental differences reflecting different evolutionary lineages within order Carnivora",
      "Because cats do not eat meat",
      "Because dogs cannot reproduce",
      "B", "Canidae vs Felidae family differences.",
      "1. Cats have retractile claws, specialized shearing carnassial teeth, and rounder skulls (family Felidae).\n2. Dogs have non-retractile claws, more elongated muzzles, and crushing molars (family Canidae).\n3. They share order Carnivora but belong to separate families.",
      "Options A, C, and D are biologically absurd.",
      "bio-species-hierarchy", "Canidae vs Felidae")

    q(204, "Which of the following taxonomic categories encompasses the least number of organisms but with maximum similarity?",
      "Kingdom", "Class", "Family", "Species",
      "D", "Species category properties.",
      "1. Species is the lowest category; it contains a distinct interbreeding population where individuals have the highest degree of similarity and fewest individual members compared to aggregate higher ranks.",
      "Options A, B, and C encompass progressively broader groups with fewer shared attributes.",
      "bio-species-hierarchy", "Species Least Organisms")

    q(205, "Which obligate taxonomic category lies immediately between Order and Genus in ascending order?",
      "Class", "Family", "Phylum", "Species",
      "B", "Position of Family in hierarchy.",
      "1. In ascending order: Species -> Genus -> Family -> Order -> Class -> Phylum -> Kingdom.\n2. Therefore, between Genus and Order lies Family.",
      "Option A is above Order. Option C is above Class. Option D is below Genus.",
      "bio-species-hierarchy", "Family Position")

    q(206, "Which obligate taxonomic category lies immediately between Kingdom and Class in plant taxonomy?",
      "Phylum", "Division", "Order", "Family",
      "B", "Division in plant taxonomy.",
      "1. In plant taxonomy, Division replaces Phylum between Kingdom and Class: Kingdom -> Division -> Class.",
      "Option A is used in animal taxonomy. Options C and D are below Class.",
      "bio-species-hierarchy", "Division Placement")

    q(207, "Assertion (A): Housefly belongs to the class Insecta.\nReason (R): It possesses three pairs of jointed legs and a body differentiated into head, thorax, and abdomen.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on class Insecta.",
      "1. (A) is true: *Musca domestica* is an insect.\n2. (R) is true: Class Insecta (Hexapoda) is fundamentally defined by the presence of 3 pairs of thoracic walking legs and a 3-part body plan, correctly explaining the class assignment.",
      "Options B, C, and D are incorrect.",
      "bio-species-hierarchy", "Housefly Insecta AR")

    q(208, "Assertion (A): As we move up from species to kingdom, the problem of classification becomes more complex.\nReason (R): Higher the category, fewer are the common characters shared by its members, making it harder to determine relationships with other taxa at the same level.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on hierarchy complexity in NCERT.",
      "1. Both statements are taken directly from NCERT verbatim.\n2. Higher categories have broader, more generalised diagnoses with fewer shared traits, creating greater taxonomic complexity, so (R) correctly explains (A).",
      "Options B, C, and D are incorrect.",
      "bio-species-hierarchy", "Hierarchy Complexity AR")

    q(209, "Which of the following organisms is placed in the class Dicotyledonae?",
      "Wheat (Triticum aestivum)",
      "Mango (Mangifera indica)",
      "Housefly (Musca domestica)",
      "Human (Homo sapiens)",
      "B", "Dicotyledonae example.",
      "1. Mango (*Mangifera indica*) has seeds with two cotyledons, reticulate venation, and pentamerous flowers, placing it in Class Dicotyledonae.\n2. Wheat is a monocotyledon.",
      "Option A is a monocot. Options C and D are animals.",
      "bio-species-hierarchy", "Mango Dicotyledonae")

    q(210, "Which of the following organisms is placed in the class Monocotyledonae?",
      "Mango", "Wheat", "Sunflower", "Mustard",
      "B", "Monocotyledonae example.",
      "1. Wheat (*Triticum aestivum*) produces grains with a single cotyledon (scutellum) and parallel leaf venation, placing it in Class Monocotyledonae.",
      "Options A, C, and D are dicotyledonous angiosperms.",
      "bio-species-hierarchy", "Wheat Monocotyledonae")

    q(211, "Members of which taxonomic category share the LEAST number of similar characters?",
      "Kingdom", "Phylum", "Class", "Order",
      "A", "Least similarity at Kingdom rank.",
      "1. Because Kingdom is the highest category in the Linnaean hierarchy, its members share the absolute fewest specific characters (e.g., Kingdom Animalia includes sponges, worms, insects, and mammals).",
      "Options B, C, and D have progressively more shared characters.",
      "bio-species-hierarchy", "Kingdom Least Similar")

    q(212, "The genus Homo belongs to which mammalian family?",
      "Pongidae", "Hominidae", "Hylobatidae", "Cercopithecidae",
      "B", "Hominidae family.",
      "1. Modern humans (*Homo sapiens*) and their immediate fossil ancestors belong to the family Hominidae within order Primata.",
      "Option A is great apes (historical). Option C is gibbons. Option D is Old World monkeys.",
      "bio-species-hierarchy", "Hominidae Family")

    q(213, "Which of the following is an intermediate (non-obligate) taxonomic category?",
      "Subfamily and Superorder", "Class", "Family", "Genus",
      "A", "Intermediate categories.",
      "1. The 7 obligate Linnaean categories are Kingdom, Phylum/Division, Class, Order, Family, Genus, Species.\n2. Subfamily, Tribe, Superfamily, Suborder, and Subspecies are intermediate categories created to handle fine evolutionary nuances.",
      "Options B, C, and D are obligate categories.",
      "bio-species-hierarchy", "Intermediate Categories")

    q(214, "Which of the following statements about genus Panthera is CORRECT?",
      "It contains only one single species",
      "It belongs to the family Canidae",
      "It differs from genus Felis in having roaring ability due to an incompletely ossified hyoid apparatus",
      "It is an order of carnivores",
      "C", "Panthera anatomical distinction.",
      "1. Genus *Panthera* (roaring big cats: lion, tiger, leopard, jaguar) possesses an elastic, incompletely ossified hyoid apparatus that allows roaring, whereas genus *Felis* (purring small cats) has a fully ossified hyoid apparatus.",
      "Option A is false (it is polytypic). Option B is false (it belongs to Felidae). Option D is false (it is a genus).",
      "bio-species-hierarchy", "Panthera Hyoid")

    q(215, "In which taxonomic category are all members guaranteed to possess a notochord at some stage of embryonic development?",
      "Class Mammalia", "Order Primata", "Phylum Chordata", "Family Hominidae",
      "C", "Phylum Chordata diagnostic character.",
      "1. The presence of a dorsal notochord, dorsal hollow nerve cord, and paired pharyngeal gill slits at some embryonic stage is the diagnostic hallmark of Phylum Chordata.",
      "Options A, B, and D are subordinate categories within Chordata.",
      "bio-species-hierarchy", "Chordata Notochord")

    q(216, "What is the common order shared by both the potato family (Solanaceae) and morning glory family (Convolvulaceae)?",
      "Polymoniales", "Sapindales", "Poales", "Rosales",
      "A", "Polymoniales constituent families.",
      "1. NCERT explicitly states: 'Plant families like Convolvulaceae, Solanaceae are included in the order Polymoniales mainly based on the floral characters.'",
      "Options B, C, and D are different orders.",
      "bio-species-hierarchy", "Polymoniales Families")

    q(217, "Which of the following represents a correct match between common name and division?",
      "Mango - Dicotyledonae", "Wheat - Angiospermae", "Housefly - Insecta", "Man - Mammalia",
      "B", "Division matching in Table 1.1.",
      "1. For Wheat, the division is Angiospermae (Division is the category equivalent to Phylum in plants).\n2. Dicotyledonae, Insecta, and Mammalia are Classes, not Divisions/Phyla.",
      "Options A, C, and D match with classes, not division/phylum.",
      "bio-species-hierarchy", "Division Match Table 1.1")

    q(218, "Which of the following taxonomic ranks is characterized predominantly on vegetative characters in addition to floral traits?",
      "Family", "Order", "Class", "Kingdom",
      "A", "Vegetative and floral features in Family.",
      "1. NCERT states: 'Families are characterized on the basis of both vegetative and reproductive features of plant species.'\n2. In contrast, orders like Polymoniales are identified mainly based on floral characters.",
      "Options B, C, and D do not focus on this specific pair of criteria.",
      "bio-species-hierarchy", "Family Criteria NCERT")

    q(219, "Biological species concept is based on:",
      "Reproductive isolation and capacity to interbreed in nature",
      "Only chromosome size under light microscope",
      "Gross petal color in flowering plants",
      "Geographical distance between mountain ranges",
      "A", "Biological species concept foundation.",
      "1. Ernst Mayr's Biological Species Concept defines species as groups of actually or potentially interbreeding natural populations that are reproductively isolated from other such groups.",
      "Options B, C, and D are arbitrary or single-character criteria.",
      "bio-species-hierarchy", "Reproductive Isolation")

    # --- TOPIC 4: bio-nomenclature-systematics (Q220 - Q250) ---
    q(220, "Which of the following is contrary to the universal rules of biological nomenclature?",
      "The first word in a biological name represents the genus while the second word denotes the specific epithet",
      "Biological names are Latinised or derived from Latin irrespective of their origin",
      "Both words in a biological name, when handwritten, are separately underlined",
      "The first word denoting the genus starts with a small letter while the specific epithet starts with a capital letter",
      "D", "Universal rules of nomenclature violation.",
      "1. NCERT Universal Rule 4 explicitly states: 'The first word denoting the genus starts with a capital letter while the specific epithet starts with a small letter.'\n2. Reversing this rule is completely invalid.",
      "Options A, B, and C are completely accurate universal rules.",
      "bio-nomenclature-systematics", "Contrary Nomenclature Rule")

    q(221, "How should the scientific name of potato, first described by Linnaeus, be written formally?",
      "Solanum Tuberosum L.",
      "Solanum tuberosum Linn.",
      "solanum tuberosum",
      "Solanum tuberosum",
      "B", "Correct formal potato nomenclature.",
      "1. The genus *Solanum* must be capitalized, the specific epithet *tuberosum* must be lowercase, both italicized (or underlined), followed by the author abbreviation in Roman font: 'Solanum tuberosum Linn.'",
      "Option A capitalizes the specific epithet. Option C fails to capitalize genus. Option D lacks the author citation.",
      "bio-nomenclature-systematics", "Potato Scientific Name")

    q(222, "Which of the following represents a valid botanical tautonym according to the ICBN?",
      "Mangifera mangifera",
      "Malus malus",
      "Solanum solanum",
      "None of these; tautonyms are strictly invalid in botanical nomenclature",
      "D", "Botanical tautonyms invalidity.",
      "1. Under the International Code of Botanical Nomenclature (ICBN/ICN), tautonyms (names where generic and specific names are identical) are strictly illegitimate and rejected.\n2. Hence, none of the listed plant tautonyms are valid.",
      "Options A, B, and C are forbidden under botanical rules.",
      "bio-nomenclature-systematics", "No Botanical Tautonyms")

    q(223, "Which of the following animal names is a valid tautonym permitted by the ICZN?",
      "Rattus rattus (Black rat)",
      "Homo sapiens",
      "Musca domestica",
      "Panthera tigris",
      "A", "Valid zoological tautonym Rattus.",
      "1. *Rattus rattus* has identical genus and specific epithet words, which is fully accepted under the International Code of Zoological Nomenclature (ICZN).",
      "Options B, C, and D are valid binomial names, but not tautonyms.",
      "bio-nomenclature-systematics", "Rattus Tautonym")

    q(224, "In biological nomenclature, what is a 'basionym'?",
      "The original name on which a new combination or transfer to a different genus is based",
      "A name given to an extinct species",
      "A name published without a holotype specimen",
      "A vernacular name translated into Latin",
      "A", "Basionym definition.",
      "1. A basionym is the original name on which a new taxonomic combination or transfer of a species to another genus is founded, retaining the original author citation in parentheses.",
      "Options B, C, and D are different taxonomic or nomenclatural terms.",
      "bio-nomenclature-systematics", "Basionym Definition")

    q(225, "When an author citation is written as 'Albizia lebbeck (L.) Benth.', what does '(L.) Benth.' indicate?",
      "Linnaeus and Bentham collected the plant together on the same expedition",
      "Linnaeus originally described the species under another genus, and Bentham later transferred it to the genus Albizia",
      "Bentham described the plant and Linnaeus approved it",
      "The plant is a hybrid between two Linnaean species",
      "B", "Double author citation interpretation.",
      "1. In botanical nomenclature, '(L.) Benth.' means Carolus Linnaeus originally described the species (as *Mimosa lebbeck*), and George Bentham subsequently revised the classification and transferred the specific epithet to the genus *Albizia*.",
      "Options A, C, and D are incorrect interpretations.",
      "bio-nomenclature-systematics", "Double Citation")

    q(226, "A name published without an accompanying description, diagnosis, or reference to a previously published description is called a:",
      "Nomen nudum (naked name)", "Nomen conservandum", "Tautonym", "Holotype",
      "A", "Nomen nudum definition.",
      "1. A 'nomen nudum' (naked name) is an invalidly published scientific name lacking an accompanying taxonomic description, diagnosis, or illustration.",
      "Option B is a protected name. Option C is identical genus-species. Option D is a type specimen.",
      "bio-nomenclature-systematics", "Nomen Nudum")

    q(227, "A name that has been formally conserved by an international botanical or zoological congress despite violating the priority rule is called a:",
      "Nomen conservandum", "Nomen nudum", "Nomen dubium", "Synonym",
      "A", "Nomen conservandum definition.",
      "1. A 'nomen conservandum' is a widely used scientific name that has been officially conserved by international consensus to avoid nomenclatural disruption, even if an older, obscure synonym exists.",
      "Option B is a naked name. Option C is a dubious name. Option D is an alternate name.",
      "bio-nomenclature-systematics", "Nomen Conservandum")

    q(228, "What is a 'Syntype'?",
      "Any one of two or more specimens cited by an author in the original description when no holotype was designated",
      "A duplicate of the holotype collected by another person",
      "A specimen chosen when all original material is lost",
      "A specimen from another continent",
      "A", "Syntype definition.",
      "1. Syntypes are all the specimens cited in the protologue when no single holotype was designated by the original author, or when multiple specimens were designated as types simultaneously.",
      "Option B is an isotype (if collected together). Option C is a neotype. Option D is irrelevant.",
      "bio-nomenclature-systematics", "Syntype Definition")

    q(229, "What is a 'Paratype' in taxonomy?",
      "A specimen cited in the original description other than the holotype or isotypes",
      "A fake specimen constructed from plastic",
      "A specimen that has been eaten by herbarium beetles",
      "A specimen chosen after 100 years",
      "A", "Paratype definition.",
      "1. A Paratype is any specimen cited in the original publication and description of a new taxon other than the holotype or its isotypes.",
      "Options B, C, and D are frivolous fabrications.",
      "bio-nomenclature-systematics", "Paratype Definition")

    q(230, "The Principle of Priority in botanical nomenclature begins with the publication of which book on May 1, 1753?",
      "Species Plantarum by Carolus Linnaeus",
      "Systema Naturae by Carolus Linnaeus",
      "Historia Plantarum by Theophrastus",
      "Genera Plantarum by Bentham and Hooker",
      "A", "Priority start date in Botany.",
      "1. The date May 1, 1753, marking the publication of Carolus Linnaeus's *Species Plantarum*, is the official universally agreed starting point of valid botanical nomenclature under the ICBN.",
      "Option B is the starting point for zoology (1758). Options C and D are different historical works.",
      "bio-nomenclature-systematics", "Botany Priority Date")

    q(231, "The starting date for modern zoological nomenclature is universally accepted as:",
      "January 1, 1758 (Systema Naturae, 10th edition)",
      "May 1, 1753 (Species Plantarum)",
      "July 1, 1859 (Origin of Species)",
      "August 15, 1947",
      "A", "Zoological priority date.",
      "1. Under the ICZN, January 1, 1758, coinciding with the publication of the 10th edition of Linnaeus's *Systema Naturae*, is the international starting point for zoological priority.",
      "Option B is the botanical date. Option C is Darwin's book. Option D is an Indian historical date.",
      "bio-nomenclature-systematics", "Zoology Priority Date")

    q(232, "Which of the following is NOT one of the international codes of biological nomenclature?",
      "ICBN (Botany)", "ICZN (Zoology)", "ICNB (Bacteria)", "ICGN (Gene Names in Humans)",
      "D", "International nomenclature codes.",
      "1. ICBN, ICZN, ICNB, ICTV (viruses), and ICNCP (cultivated plants) are recognized taxonomic nomenclature codes.\n2. ICGN is not an established organismal taxonomic code.",
      "Options A, B, and C are authentic international nomenclature codes.",
      "bio-nomenclature-systematics", "Nomenclature Codes Check")

    q(233, "If two different authors independently publish different scientific names for the exact same species, what are the names called relative to each other?",
      "Synonyms", "Homonyms", "Tautonyms", "Basionyms",
      "A", "Synonyms definition.",
      "1. Synonyms are different scientific names that pertain to the very same taxon.\n2. According to the Principle of Priority, the earliest validly published name is the senior synonym (accepted), and later names are junior synonyms (rejected).",
      "Option B are identical names given to two different taxa. Option C is identical genus-species words. Option D is an original base name.",
      "bio-nomenclature-systematics", "Synonyms Concept")

    q(234, "If the same scientific name is accidentally applied to two entirely different organisms, the name is termed a:",
      "Homonym", "Synonym", "Tautonym", "Holotype",
      "A", "Homonym definition.",
      "1. A Homonym is a name that is spelled identically to another name for a different taxon.\n2. The junior homonym must be replaced by a new name.",
      "Option B refers to different names for the same taxon. Option C is repeating words. Option D is a specimen.",
      "bio-nomenclature-systematics", "Homonym Definition")

    q(235, "In binomial nomenclature, the generic name is grammatically a:",
      "Noun (in nominative singular)", "Adjective", "Verb", "Adverb",
      "A", "Grammatical status of generic name.",
      "1. The generic name is a Latin or Latinized singular noun (e.g., *Felis*, *Homo*, *Mangifera*), and must be capitalized.",
      "Option B is usually the grammatical status of the specific epithet (adjective qualifying the noun). Options C and D are incorrect.",
      "bio-nomenclature-systematics", "Generic Name Grammar")

    q(236, "In binomial nomenclature, the specific epithet is grammatically often an:",
      "Adjective agreeing in gender with the generic name",
      "Adverb describing speed",
      "Imperative verb",
      "Infinitive pronoun",
      "A", "Grammatical status of specific epithet.",
      "1. The specific epithet is frequently a Latin adjective (e.g., *alba* = white, *vulgaris* = common, *indica* = Indian) that agrees grammatically in gender (masculine, feminine, or neuter) with the generic noun.",
      "Options B, C, and D are not valid grammatical classifications in binomial naming.",
      "bio-nomenclature-systematics", "Specific Epithet Grammar")

    q(237, "Which of the following scientific names is printed with INCORRECT capitalization according to NCERT rules?",
      "Mangifera indica", "Homo Sapiens", "Triticum aestivum", "Musca domestica",
      "B", "Incorrect capitalization identification.",
      "1. In 'Homo Sapiens', the specific epithet 'Sapiens' starts with an illegal capital 'S'.\n2. Universal Rule 4 requires the specific epithet to begin with a small letter: *Homo sapiens*.",
      "Options A, C, and D strictly obey the capitalization rules.",
      "bio-nomenclature-systematics", "Capitalization Error Homo")

    q(238, "Which of the following is the correct representation of the scientific name for Cobra?",
      "Naja naja", "naja Naja", "Naja Naja", "Naja naja Linn.",
      "D", "Cobra scientific name citation.",
      "1. *Naja naja* Linn. contains the capitalized generic name, lowercase specific epithet (valid tautonym under ICZN), italic font, and formal author citation.",
      "Option B has lowercase genus and uppercase species. Option C incorrectly capitalizes species. Option A lacks author citation when comparing complete options.",
      "bio-nomenclature-systematics", "Cobra Scientific Name")

    q(239, "When an author's name is abbreviated at the end of a binomial name, which punctuation is conventionally placed after the abbreviation?",
      "Period (full stop)", "Question mark", "Exclamation mark", "Semicolon",
      "A", "Punctuation in author citation.",
      "1. The author citation uses standard Latin abbreviation indicated by a trailing period (e.g., 'Linn.' for Linnaeus, 'R. Br.' for Robert Brown, 'Juss.' for Jussieu).",
      "Options B, C, and D are not standard nomenclatural punctuation marks.",
      "bio-nomenclature-systematics", "Author Citation Punctuation")

    q(240, "Consider the scientific name 'Brassica oleracea var. capitata'. What does 'capitata' represent?",
      "A botanical variety (subdivision of species)",
      "A genus name",
      "A family name",
      "An order name",
      "A", "Botanical variety in trinomial name.",
      "1. In *Brassica oleracea* var. *capitata* (cabbage):\n- *Brassica* = Genus\n- *oleracea* = Species\n- *capitata* = Variety.",
      "Options B, C, and D are higher categories.",
      "bio-nomenclature-systematics", "Variety Capitata")

    q(241, "Why did Linnaeus select Latin as the language for binomial nomenclature?",
      "Because Latin was his personal mother tongue",
      "Because Latin was a dead language with unchanging structure and was the universal scholarly lingua franca of European science",
      "Because the King of Sweden ordered him to do so",
      "Because Latin had only 100 words",
      "B", "Historical reason for Latin.",
      "1. Latin was the international language of European scholars in the 18th century, and being a 'dead language' (not actively spoken in daily commerce), its grammar and word meanings were stable and fixed.",
      "Option A is false (Linnaeus spoke Swedish). Options C and D are historically false.",
      "bio-nomenclature-systematics", "Linnaeus Latin Choice")

    q(242, "If a newly discovered plant is native to India, how is its geographical origin reflected in botanical Latin?",
      "By adding suffixes like '-indica', '-indicus', or '-indicum' to the specific epithet",
      "By translating the entire name into Hindi",
      "By placing the Indian flag on the herbarium sheet",
      "By naming it only with an English word",
      "A", "Geographical epithets.",
      "1. Specific epithets derived from geographic locations are Latinized with appropriate gender suffixes, such as *indica* (feminine, e.g., *Mangifera indica*), *indicus*, or *indicum*.",
      "Options B, C, and D violate ICBN Latinization rules.",
      "bio-nomenclature-systematics", "Geographical Epithets")

    q(243, "Which of the following is an invalid specific epithet according to universal rules?",
      "indica", "sapiens", "domestica", "Homo",
      "D", "Specific epithet vs genus.",
      "1. 'Homo' is a capitalized generic noun, not a valid specific epithet.\n2. *indica*, *sapiens*, and *domestica* are valid specific epithets in Latin adjective form.",
      "Options A, B, and C are standard lowercase specific epithets.",
      "bio-nomenclature-systematics", "Invalid Specific Epithet")

    q(244, "The publication 'Systema Naturae' had how many editions during Linnaeus's lifetime?",
      "One edition only", "12 editions (with the 10th edition in 1758 being the landmark for zoology)", "100 editions", "50 editions",
      "B", "Systema Naturae editions.",
      "1. Linnaeus produced 12 editions of *Systema Naturae*. The 10th edition (1758) established consistent binomial nomenclature for animals and marks the baseline of modern zoological taxonomy.",
      "Options A, C, and D are historically incorrect.",
      "bio-nomenclature-systematics", "Systema Naturae Editions")

    q(245, "Assertion (A): The scientific name Mangifera indica is printed in italics.\nReason (R): Printing in italics indicates the Latin origin of the biological name.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on italics typography.",
      "1. Both (A) and (R) are verbatim statements from NCERT Universal Rule 1 and Rule 3.\n2. The italics typography directly serves the function of demonstrating Latinization, so (R) correctly explains (A).",
      "Options B, C, and D are incorrect.",
      "bio-nomenclature-systematics", "Italics AR")

    q(246, "What is the primary role of the International Botanical Congress (IBC)?",
      "To set the retail prices of fresh fruits in global markets",
      "To deliberate, amend, and ratify updates to the International Code of Botanical Nomenclature (ICN)",
      "To produce genetically modified crops",
      "To distribute seeds to gardeners",
      "B", "Role of IBC.",
      "1. The International Botanical Congress meets every six years to review and approve changes to the International Code of Nomenclature for algae, fungi, and plants.",
      "Options A, C, and D are commercial or agricultural activities.",
      "bio-nomenclature-systematics", "IBC Role")

    q(247, "A specific epithet named in honor of a person (patronymic) like Robert Brown is Latinized as:",
      "brownii", "brownicus", "brownensis", "brownaceae",
      "A", "Patronymic Latinization.",
      "1. In botanical and zoological nomenclature, patronyms are Latinized by adding '-ii' or '-i' (for male honorees, e.g., *brownii*) or '-ae' (for female honorees).",
      "Option C (-ensis) is used for geographical localities. Option D (-aceae) is used for families.",
      "bio-nomenclature-systematics", "Patronymic Latinization")

    q(248, "Which of the following scientific names represents a trinomial nomenclature for an animal?",
      "Gorilla gorilla gorilla (Western lowland gorilla)",
      "Mangifera indica",
      "Musca domestica",
      "Solanum tuberosum",
      "A", "Trinomial animal name Gorilla.",
      "1. *Gorilla gorilla gorilla* is a trinomial name consisting of Genus (*Gorilla*), Species (*gorilla*), and Subspecies (*gorilla*).",
      "Options B, C, and D are standard two-word binomial names.",
      "bio-nomenclature-systematics", "Trinomial Gorilla")

    q(249, "Why is the author citation never italicized or underlined in printed botanical works?",
      "Because the author's name is not Latin, but is written in standard Roman typography to distinguish it from the Latinized biological name",
      "Because Linnaeus forgot to underline his name",
      "Because author names are copyrighted",
      "Because it is forbidden by the United Nations",
      "A", "Author citation typography rationale.",
      "1. The biological name (genus and species) is italicized to denote Latin origin.\n2. The author citation is written in regular Roman script to clearly delineate the bibliographic reference from the organism's formal Latinized binomen.",
      "Options B, C, and D are factually baseless.",
      "bio-nomenclature-systematics", "Author Citation Typography Rationale")

    q(250, "What is the key advantage of a universally standardized scientific nomenclature?",
      "It allows organisms to be referred to unambiguously by one single globally accepted name, eliminating language barriers and confusion",
      "It makes names easier to remember than common names",
      "It guarantees that no species will ever become extinct",
      "It replaces the need to preserve specimens in herbaria",
      "A", "Advantage of universal nomenclature.",
      "1. The fundamental value of binomial nomenclature is universal, unambiguous communication across all linguistic, national, and historical boundaries.",
      "Option B is false (common names are often simpler). Options C and D are completely false.",
      "bio-nomenclature-systematics", "Universal Nomenclature Advantage")

    return questions

if __name__ == '__main__':
    qs = get_part2_questions()
    print(f"Generated {len(qs)} questions for Part 2.")
    assert len(qs) == 125, f"Expected 125, got {len(qs)}"
    med_count = sum(1 for q in qs if q['difficulty'] == 'Medium')
    assert med_count == 125, f"Expected 125 Medium, got {med_count}"
    print("Part 2 validation passed!")
