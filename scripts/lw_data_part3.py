import json

def get_part3_questions():
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

    # --- TOPIC 1: bio-living-biodiversity (Q251 - Q281) ---
    q(251, "Living organisms are open thermodynamic systems that avoid thermodynamic equilibrium by:",
      "Ceasing all metabolic chemical transformations",
      "Performing constant metabolism to maintain a dynamic steady-state with continuous energy throughput",
      "Growing exclusively through external deposition of non-biological minerals",
      "Becoming completely isolated from ambient heat and solar radiation",
      "B", "Living systems thermodynamics and steady-state.",
      "1. A living organism is an open system that continuously exchanges matter and energy with its environment.\n2. Chemical equilibrium in a closed system means work capacity is zero (which equates to death in biology).\n3. By continuous metabolic throughput (anabolism and catabolism), organisms maintain a dynamic steady-state far from equilibrium.",
      "Option A leads to immediate death. Option C describes non-living accretion. Option D describes isolated systems which living beings are not.",
      "bio-living-biodiversity", "Thermodynamic Steady State")

    q(252, "In biology, growth by intussusception refers to:",
      "Addition of new matter on the outer surface from outside (extrinsic)",
      "Internal growth by synthesis of new protoplasmic material within living cells (intrinsic)",
      "Expansion of non-living mineral crystals in a saturated solution",
      "Accumulation of volcanic debris to form a mountain",
      "B", "Intussusception vs Accretion.",
      "1. Growth in living organisms is intrinsic (intussusception), where new structural macromolecules, cytoplasm, and cell walls/membranes are synthesized internally.\n2. Accretion is the mechanical addition of external particles onto the surface of inanimate objects.",
      "Option A and D describe accretion. Option C describes crystal habit growth in chemistry.",
      "bio-living-biodiversity", "Intussusception")

    q(253, "Which of the following asexual reproductive bodies is correctly matched with its parent organism?",
      "Conidia - Chlamydomonas",
      "Gemmae - Marchantia (Liverwort)",
      "Zoospores - Penicillium",
      "Buds - Planaria",
      "B", "Asexual structures matching.",
      "1. Marchantia (a bryophyte liverwort) produces specialized green, multicellular, asexual buds called gemmae inside gemma cups on the thallus.\n2. Penicillium produces exogenous conidia, Chlamydomonas produces flagellated zoospores, and Planaria shows regeneration.",
      "Option A is wrong (Penicillium produces conidia). Option C is wrong (Chlamydomonas produces zoospores). Option D is wrong (Planaria exhibits regeneration; Hydra/yeast produce buds).",
      "bio-living-biodiversity", "Asexual Structures Match")

    q(254, "Consider the following statements regarding mules and hinnies:\nStatement I: Both mules and hinnies are interspecific hybrids that are physiologically and cellularly alive.\nStatement II: Mules and hinnies cannot produce offspring due to failure of meiotic synapsis caused by non-homologous parental chromosome numbers.\nChoose the correct option:",
      "Statement I is correct, Statement II is incorrect",
      "Statement I is incorrect, Statement II is correct",
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "C", "Cytogenetics of mule sterility.",
      "1. Mules (jack x mare) and hinnies (stallion x jenny) are viable, metabolically vigorous organisms.\n2. Horses have 2n=64 chromosomes (n=32) and donkeys have 2n=62 (n=31), giving hybrids 2n=63 chromosomes; during gametogenesis, meiotic chromosomes cannot pair as homologous bivalents, resulting in aneuploid gametes and absolute sterility.\n3. Both statements are accurate.",
      "Options A, B, and D are inconsistent with cytogenetic facts.",
      "bio-living-biodiversity", "Mule Cytogenetics")

    q(255, "Why is an isolated enzymatic hydrolysis of starch in a test tube considered a 'living reaction' rather than a 'non-living reaction'?",
      "Because the test tube is alive",
      "Because the biochemical conversion involves the exact same enzyme kinetics and biological catalysis as inside a living gut cell",
      "Because starch produces conscious responses",
      "Because test tubes contain DNA",
      "B", "Biochemical basis of living reactions in vitro.",
      "1. The reaction utilizes amylase, a biological protein catalyst synthesized by living tissue, maintaining biological specificity, transition-state lowering, and pathways identical to in vivo digestion.\n2. Hence, it is surely a living reaction occurring in a cell-free environment.",
      "Options A, C, and D are scientifically absurd.",
      "bio-living-biodiversity", "Living Reaction Test Tube")

    q(256, "In which of the following organisms are cells organized into tissues, organs, and organ systems with self-consciousness?",
      "Mangifera indica", "Homo sapiens", "Periplaneta americana", "Amoeba proteus",
      "B", "Self-consciousness in human beings.",
      "1. While plants, cockroaches, and amoebae are living organisms possessing consciousness/responsiveness, self-consciousness (awareness of oneself as an individual entity) is exclusively documented in humans (*Homo sapiens*).",
      "Options A, C, and D lack self-consciousness.",
      "bio-living-biodiversity", "Human Self-consciousness")

    q(257, "Which environmental cue is responsible for synchronizing flowering in photoperiodically sensitive plants and seasonal breeding in wild mammals?",
      "Atmospheric humidity alone",
      "Relative duration of light and dark periods (photoperiod)",
      "Magnetic field fluctuations",
      "Lunar phases only",
      "B", "Photoperiod mechanism.",
      "1. Photoperiodism is the physiological reaction of organisms to the length of day or night.\n2. Daylength is the most reliable seasonal astronomical indicator, triggering flowering in plants and gonadal activation in seasonal mammalian breeders.",
      "Options A, C, and D are secondary, erratic, or non-causative environmental cues.",
      "bio-living-biodiversity", "Photoperiod Mechanism")

    q(258, "Assertion (A): Metabolism is a defining feature of all living organisms without exception.\nReason (R): Isolated metabolic reactions in vitro are living organisms.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "C", "Assertion-Reason on metabolism vs organisms.",
      "1. (A) is true: metabolism is a universal defining property of life.\n2. (R) is false: NCERT explicitly states that isolated metabolic reactions in vitro are 'not living things (organisms) but surely living reactions.'",
      "Options A, B, and D fail because Reason (R) is factually false.",
      "bio-living-biodiversity", "Metabolism vs Organism AR")

    q(259, "Which of the following represents the correct biological hierarchy of complexity in ascending order?",
      "Atoms -> Molecules -> Organelles -> Cells -> Tissues -> Organs -> Organ systems -> Organisms",
      "Organisms -> Organs -> Tissues -> Cells -> Molecules",
      "Cells -> Molecules -> Organelles -> Tissues -> Organisms",
      "Tissues -> Cells -> Organelles -> Organisms -> Atoms",
      "A", "Biological hierarchy of organisation.",
      "1. In ascending order of structural integration: subatomic particles -> atoms -> biomolecules -> subcellular organelles -> cells -> tissues -> organs -> organ systems -> complex multicellular organisms.",
      "Option B is in descending order. Options C and D have scrambled ranks.",
      "bio-living-biodiversity", "Biological Hierarchy Ascending")

    q(260, "The emergent properties of an organ (such as the pumping ability of the heart) are:",
      "Present already in isolated actin and myosin protein filaments",
      "The result of interactions and coordination among the constituent tissues (cardiac muscle, connective tissue, nervous tissue, endothelium)",
      "Due to extrinsic accretion of minerals on the pericardium",
      "Due to spontaneous generation of force",
      "B", "Emergent properties in organs.",
      "1. Emergent properties are novel collective capabilities that arise from dynamic interactions among constituent components at lower hierarchical levels that neither component possesses independently.",
      "Option A is false (isolated proteins cannot pump blood). Options C and D are biologically invalid.",
      "bio-living-biodiversity", "Organ Emergence")

    q(261, "Robert May estimated the total number of global species diversity at approximately:",
      "1.7 to 1.8 million", "7 million", "100 million", "20 to 50 million",
      "B", "Robert May's global biodiversity estimate.",
      "1. Eminent ecologist Robert May applied scientifically sound empirical ratios and projected the global species diversity at approximately 7 million (70 lakh).\n2. 1.7 to 1.8 million is the number of species currently described in NCERT.",
      "Option A is described species. Options C and D are extreme older estimates.",
      "bio-living-biodiversity", "Robert May Estimate")

    q(262, "Which group of organisms accounts for the largest proportion of all described animal species on Earth?",
      "Mammals", "Insects (Class Insecta, Phylum Arthropoda)", "Fishes", "Mollusks",
      "B", "Insect dominance in biodiversity.",
      "1. Insects make up over 70% of all known animal species (more than 7 out of every 10 animals on this planet are insects).",
      "Options A, C, and D constitute far smaller proportions of total described fauna.",
      "bio-living-biodiversity", "Insect Dominance")

    q(263, "Why can growth NOT be taken as an all-inclusive defining property of living organisms?",
      "Because non-living things also increase in body mass by accumulation of material on their surface",
      "Because living organisms never grow",
      "Because plant growth occurs only in embryonic stages",
      "Because unicellular organisms do not divide",
      "A", "Why growth is non-defining in NCERT.",
      "1. If increase in body mass is used as a criterion of growth, inanimate objects like mountains, boulders, and sand mounds also increase in mass through extrinsic accretion.\n2. Hence, growth on its own cannot define life without specifying intrinsic cellular synthesis.",
      "Options B, C, and D contradict basic biology.",
      "bio-living-biodiversity", "Growth Non-defining Rationale")

    q(264, "A scientist crushes spinach leaves in an isotonic buffer, isolates chloroplasts, and observes ATP synthesis upon illumination. This isolated photosynthetic phosphorylation is:",
      "A non-living physical event",
      "A living reaction demonstrated outside a cellular body in vitro",
      "Proof that chloroplasts are independent living organisms",
      "A non-enzymatic spontaneous combustion",
      "B", "Isolated chloroplast ATP synthesis.",
      "1. Photophosphorylation by isolated chloroplasts in a test tube demonstrates biological enzymatic reactions occurring outside the living cell.\n2. Following NCERT, it is not a complete living organism, but is unmistakably a living reaction.",
      "Options A, C, and D are scientifically incorrect.",
      "bio-living-biodiversity", "Chloroplast In Vitro")

    q(265, "Which of the following organisms does NOT show true regeneration?",
      "Planaria (Dugesia)", "Hydra", "Starfish (Asterias)", "Human heart tissue",
      "D", "Lack of regeneration in human heart.",
      "1. Adult human cardiac muscle tissue possesses virtually no regenerative capacity; necrotic myocardial cells following infarction are replaced by non-contractile collagenous scar tissue.\n2. Planaria, Hydra, and starfish exhibit extensive true regeneration.",
      "Options A, B, and C possess remarkable regenerative capacities.",
      "bio-living-biodiversity", "Non-regenerating Human Heart")

    q(266, "The ability of an organism to keep its internal physiological environment stable despite massive external fluctuations is termed:",
      "Homeostasis", "Catabolism", "Anabolism", "Accretion",
      "A", "Homeostasis definition.",
      "1. Homeostasis (coined by Walter Cannon) is the maintenance of static or constant conditions in the internal milieu of living organisms via negative feedback mechanisms.",
      "Options B and C are components of metabolism. Option D is superficial deposition.",
      "bio-living-biodiversity", "Homeostasis Term")

    q(267, "In which organism is asexual reproduction achieved through multicellular propagules called gemmae?",
      "Marchantia", "Funaria", "Spirogyra", "Chlamydomonas",
      "A", "Marchantia gemmae.",
      "1. Marchantia (a thalloid liverwort) reproduces asexually by producing multicellular, green, haploid asexual buds called gemmae located in circular gemma cups on the dorsal thallus surface.",
      "Options B, C, and D reproduce by spores, fragmentation, or zoospores.",
      "bio-living-biodiversity", "Marchantia Gemmae")

    q(268, "Why are viruses placed on the borderline between living and non-living entities?",
      "Because they exhibit inert non-cellular crystalline structure outside living cells, but replicate and exhibit genetic heredity once inside a host cell",
      "Because they reproduce by binary fission",
      "Because they have active mitochondria outside host cells",
      "Because they possess cellulose cell walls",
      "A", "Virus borderline status.",
      "1. Viruses lack cellular organization and metabolic enzymes of their own (inert crystalline nucleoproteins outside host cells), but direct host metabolic machinery to replicate their genomes inside living cells.",
      "Options B, C, and D are factually untrue of viruses.",
      "bio-living-biodiversity", "Virus Borderline")

    q(269, "Consider the following organisms:\n(1) Worker honeybees\n(2) Fertile human adults\n(3) Mules\n(4) Hinnies\nHow many of these are sterile and incapable of reproduction?",
      "One", "Two", "Three", "Four",
      "C", "Count of sterile organisms.",
      "1. Worker honeybees (1), mules (3), and hinnies (4) are sterile.\n2. Fertile human adults (2) can reproduce.\n3. Therefore, exactly three of the listed organisms are sterile.",
      "Options A, B, and D provide incorrect counts.",
      "bio-living-biodiversity", "Sterile Organisms Count")

    q(270, "Which of the following cellular components is the physical basis of life carrying out all biological metabolism?",
      "Cell wall", "Protoplasm", "Vacuolar sap", "Middle lamella",
      "B", "Protoplasm as physical basis of life.",
      "1. Protoplasm (cytoplasm + nucleus), first designated by Purkinje and termed 'the physical basis of life' by T.H. Huxley, is the living substance wherein all metabolic cascades occur.",
      "Options A, C, and D are non-living cellular structures or secretions.",
      "bio-living-biodiversity", "Protoplasm Physical Basis")

    q(271, "Which of the following events is common to BOTH living organisms and non-living objects?",
      "Cellular respiration", "Increase in mass", "Gene mutation", "Sensory perception",
      "B", "Mass increase in living and non-living.",
      "1. Both living organisms (through cell division and internal synthesis) and non-living objects (mountains, glaciers, and sand mounds through external accumulation of matter) can exhibit an increase in mass.",
      "Options A, C, and D are exclusively restricted to living systems.",
      "bio-living-biodiversity", "Common Mass Increase")

    q(272, "In unicellular organisms like bacteria and Amoeba, why are growth and reproduction considered synonymous?",
      "Because cell division directly results in an increase in the number of individual organisms in the population",
      "Because they possess sexual organs",
      "Because they never undergo cell division",
      "Because their mass remains zero",
      "A", "Synonymy of growth and reproduction in unicellulars.",
      "1. In a single-celled organism, one cell equals one individual. When the cell divides by mitosis or fission, it increases the cell count (growth) and concurrently creates two independent individuals (reproduction).",
      "Options B, C, and D are incorrect.",
      "bio-living-biodiversity", "Unicellular Synonymy")

    q(273, "Which of the following is an irreversible increase in volume or mass accompanied by metabolic energy expenditure?",
      "Biological growth", "Thermal expansion of a metal rod", "Imbibition of water by dead dry seeds", "Elastic recoil of a spring",
      "A", "Biological growth irreversibility.",
      "1. True biological growth is an irreversible, permanent increase in size, mass, or volume driven by metabolic assimilation of nutrients and energy expenditure.",
      "Options B, C, and D are reversible physical processes.",
      "bio-living-biodiversity", "Irreversible Growth")

    q(274, "Consciousness in bacteria is demonstrated by which of the following biological phenomena?",
      "Chemotaxis (swimming toward nutrients and away from toxic chemicals)",
      "Writing books",
      "Building nests",
      "Sleeping during night hours",
      "A", "Bacterial consciousness and chemotaxis.",
      "1. Bacteria sense chemical gradients via transmembrane receptor proteins and rotate their flagella to swim toward attractants (glucose, amino acids) or away from repellents (acids, heavy metals). This is bacterial chemotactic responsiveness.",
      "Options B, C, and D are animal or human behaviors.",
      "bio-living-biodiversity", "Bacterial Chemotaxis")

    q(275, "Why is an infertile human couple classified as living?",
      "Because they reproduce via fragmentation",
      "Because their bodies possess cellular organization, active metabolism, homeostasis, and consciousness",
      "Because they lack cells",
      "Because non-living things also have emotions",
      "B", "Living status of infertile humans.",
      "1. Reproduction is not a defining characteristic. An infertile couple maintains full cellular organization, biochemical respiration, enzyme synthesis, and consciousness, fulfilling all universal defining criteria of life.",
      "Options A, C, and D are biologically invalid.",
      "bio-living-biodiversity", "Infertile Couple Living Status")

    q(276, "Assertion (A): Photoperiod affects reproduction in seasonal breeders.\nReason (R): Both seasonal plants and animals possess physiological mechanisms to perceive day length and coordinate reproductive cycles.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on photoperiod seasonal breeders.",
      "1. (A) is true (NCERT verbatim).\n2. (R) is true: plants use phytochromes and animals use pineal-pituitary-gonadal hormonal axes to translate photoperiodic signals into reproductive competence, explaining the assertion.",
      "Options B, C, and D are incorrect.",
      "bio-living-biodiversity", "Photoperiod AR")

    q(277, "Which of the following statements about self-consciousness is FALSE?",
      "Human beings are the only organisms that have self-consciousness",
      "All organisms have self-consciousness",
      "Self-consciousness implies being aware of one's own existence and mental states",
      "A comatose patient on a ventilator has lost self-consciousness",
      "B", "Self-consciousness exclusivity.",
      "1. Statement B is false because non-human organisms (plants, microbes, invertebrates) possess consciousness (responsiveness to stimuli) but lack self-consciousness.",
      "Statements A, C, and D are accurate biological observations from NCERT.",
      "bio-living-biodiversity", "False Statement Self-consciousness")

    q(278, "Which characteristic explains why trees shed their leaves in autumn before freezing winter temperatures arrive?",
      "Consciousness and responsiveness to environmental cues (photoperiod and temperature)",
      "Accretion of dust on the bark",
      "Sexual reproduction",
      "Extrinsic accretion",
      "A", "Leaf abscission environmental responsiveness.",
      "1. Deciduous trees detect decreasing daylength and ambient temperatures, activating abscission zones at leaf petioles via ethylene and auxin modulation to conserve water in winter.",
      "Options B, C, and D are completely non-explanatory.",
      "bio-living-biodiversity", "Abscission Environmental Response")

    q(279, "Which of the following describes an anabolic process?",
      "Gluconeogenesis (synthesis of glucose from non-carbohydrate precursors)",
      "Glycolytic breakdown of glucose to lactate",
      "Hydrolysis of triglycerides into fatty acids and glycerol",
      "Oxidative deamination of amino acids",
      "A", "Anabolism example.",
      "1. Gluconeogenesis is an anabolic pathway that consumes ATP and GTP to assemble complex hexose sugars from smaller organic precursors.\n2. Glycolysis, lipolysis, and deamination are catabolic degradation pathways.",
      "Options B, C, and D are catabolic pathways.",
      "bio-living-biodiversity", "Anabolic Process Gluconeogenesis")

    q(280, "Which of the following statements correctly summarizes NCERT's perspective on the question: 'What is living?'",
      "Life cannot be described by any scientific principles",
      "Living organisms are self-replicating, evolving, and self-regulating interactive systems capable of responding to external stimuli",
      "Only organisms with four legs are truly alive",
      "Life is identical to non-living crystals in all properties",
      "B", "NCERT definition summary.",
      "1. NCERT provides a unified holistic summary: 'Living organisms are self-replicating, evolving and self-regulating interactive systems capable of responding to external stimuli.'",
      "Options A, C, and D are scientifically flawed.",
      "bio-living-biodiversity", "NCERT Living Perspective")

    q(281, "Which of the following levels of organization is the SMALLEST unit capable of independent existence and carrying out the essential functions of life?",
      "Macromolecule (DNA)", "Organelle (Mitochondrion)", "Cell", "Tissue",
      "C", "Cell as basic unit of life.",
      "1. Unicellular organisms prove that a single cell is the smallest structural entity capable of independent existence and performing all metabolic functions.\n2. Isolated molecules or organelles cannot survive independently.",
      "Options A and B lack autonomous metabolism. Option D requires multiple cells.",
      "bio-living-biodiversity", "Smallest Independent Unit")

    # --- TOPIC 2: bio-classification-taxonomy (Q282 - Q312) ---
    q(282, "Bentham and Hooker's classification of plants published in 'Genera Plantarum' is an example of a:",
      "Purely artificial system based on one character",
      "Natural system of classification based on natural affinities and overall morphological characters",
      "Phylogenetic system based strictly on cladistics",
      "Numerical taxonomy system using computers",
      "B", "Bentham and Hooker natural system.",
      "1. George Bentham and Joseph Dalton Hooker proposed a famous Natural System of classification in their 3-volume work *Genera Plantarum* (1862-1883), classifying seed plants based on comprehensive natural affinities, anatomy, and morphology.",
      "Option A describes Linnaeus's sexual system. Option C describes Engler/Takhtajan. Option D is phenetics.",
      "bio-classification-taxonomy", "Bentham Hooker Natural System")

    q(283, "Linnaeus's artificial system of plant classification was based mainly on:",
      "Androecium structure and number of stamens (sexual system)",
      "Internal ultrastructure under electron microscope",
      "Mitochondrial DNA sequences",
      "Ecological niche modeling",
      "A", "Linnaeus artificial sexual system.",
      "1. Carolus Linnaeus classified flowering plants into 24 classes primarily based on the number, union, and length of stamens (androecium characters), which is why it is called an artificial sexual system.",
      "Options B, C, and D involve modern tools unknown in the 18th century.",
      "bio-classification-taxonomy", "Linnaeus Stamen System")

    q(284, "Why are artificial systems of classification considered scientifically inadequate by modern biologists?",
      "Because they separate closely related species on the basis of a few superficial characters and give equal weightage to vegetative and reproductive characters",
      "Because they use Latin names",
      "Because they include too many DNA sequences",
      "Because they require computer programming",
      "A", "Drawbacks of artificial classification.",
      "1. Artificial systems rely on one or a few arbitrary morphological traits (e.g., leaf shape, habit, stamen count), which often separates closely related taxa into different groups while lumping unrelated taxa together, and wrongly gives equal weight to environmentally fluctuating vegetative traits.",
      "Options B, C, and D are false.",
      "bio-classification-taxonomy", "Artificial Classification Defects")

    q(285, "Phylogenetic systems of classification are based on:",
      "Only the height of the plant",
      "Evolutionary relationships and common ancestry among the various organisms",
      "The price of crops in international trade",
      "Alphabetical arrangement of common names",
      "B", "Phylogenetic classification definition.",
      "1. Phylogenetic systems classify organisms based on evolutionary relationships (phylogeny), assuming that taxa belonging to the same category share a common ancestor.",
      "Options A, C, and D are arbitrary or non-evolutionary.",
      "bio-classification-taxonomy", "Phylogenetic Systems")

    q(286, "Which of the following pairs of botanists proposed landmark phylogenetic systems of plant classification?",
      "Carolus Linnaeus and Theophrastus",
      "Adolf Engler and Karl Prantl",
      "Bentham and Hooker",
      "Aristotle and Pliny",
      "B", "Engler and Prantl phylogenetic system.",
      "1. Adolf Engler and Karl Prantl published *Die Natürlichen Pflanzenfamilien*, establishing one of the earliest comprehensive phylogenetic systems of flowering plant classification.",
      "Options A and D are pre-evolutionary. Option C is a natural system.",
      "bio-classification-taxonomy", "Engler Prantl")

    q(287, "Alpha taxonomy (α-taxonomy) refers to classification based on:",
      "Gross morphological characters and specimen identification",
      "Electrophoresis of seed storage proteins",
      "Total genome sequencing",
      "Electron microscopy of nuclear pores",
      "A", "Alpha taxonomy definition.",
      "1. Alpha taxonomy (classical descriptive taxonomy) is the initial phase of taxonomy devoted to finding, describing, and naming taxa based primarily on gross morphological features.",
      "Options B, C, and D belong to beta, omega, or molecular taxonomy.",
      "bio-classification-taxonomy", "Alpha Taxonomy")

    q(288, "Omega taxonomy (ω-taxonomy) is characterized by:",
      "Excluding all anatomical data",
      "Synthesizing all available evidence (cytology, genetics, biochemistry, ecology, anatomy, morphology) into an evolutionary taxonomic system",
      "Using only stamen numbers",
      "Rejecting Latin nomenclature",
      "B", "Omega taxonomy definition.",
      "1. Omega taxonomy (modern biosystematics) represents the ultimate synthesis where all biological disciplines (cytogenetics, molecular biology, physiology, ecology, biogeography) are integrated to formulate a robust natural phylogenetic classification.",
      "Options A, C, and D are incorrect.",
      "bio-classification-taxonomy", "Omega Taxonomy")

    q(289, "In numerical taxonomy (phenetics), what is a 'dendrogram'?",
      "A pressed herbarium specimen",
      "A branching tree-like diagram that represents relationships of taxonomic similarity based on mathematical distance matrices",
      "A pair of shears used to cut roots",
      "A wooden box used to kill butterflies",
      "B", "Dendrogram definition.",
      "1. A dendrogram is a tree diagram used in numerical taxonomy and cluster analysis to visually illustrate taxonomic arrangements and similarity levels among operational taxonomic units (OTUs).",
      "Options A, C, and D describe physical botanical or entomological equipment.",
      "bio-classification-taxonomy", "Dendrogram Definition")

    q(290, "Which of the following chemicals is used as an effective fumigant in herbarium cabinets to kill museum pests?",
      "Naphthalene balls or paradichlorobenzene (PDB)",
      "Pure ethanol spray on leaves",
      "Sodium chloride crystals",
      "Potassium permanganate solution",
      "A", "Herbarium fumigation chemicals.",
      "1. Naphthalene balls or paradichlorobenzene (PDB) are placed in herbarium cabinets as fumigants to deter and kill insect pests like *Stegobium paniceum* (herbarium beetle) and silverfish.",
      "Options B, C, and D are not volatile fumigants for closed dry cabinets.",
      "bio-classification-taxonomy", "Fumigant Herbarium")

    q(291, "Why are plant specimens on herbarium sheets mounted with their parts arranged to show both the upper (adaxial) and lower (abaxial) surfaces of leaves?",
      "For artistic symmetry",
      "Because critical taxonomic diagnostic features (stomata distribution, trichomes, venation prominence) differ between the two leaf surfaces",
      "To reduce the weight of the sheet",
      "Because the herbarium supervisor ordered it without reason",
      "B", "Adaxial and abaxial leaf mounting in herbaria.",
      "1. Taxonomists mount leaves so that at least one leaf displays the upper surface and another shows the lower surface, enabling examination of stomatal distribution, pubescence, and venation without detaching specimens.",
      "Options A, C, and D are unscientific.",
      "bio-classification-taxonomy", "Leaf Surfaces Herbarium")

    q(292, "The Central National Herbarium (CAL), one of the oldest and largest herbaria in Asia holding over 2 million specimens, is located at:",
      "Acharya Jagadish Chandra Bose Indian Botanic Garden, Shibpur, Howrah",
      "NBRI, Lucknow",
      "Forest Research Institute, Dehradun",
      "St. Xavier's College, Mumbai",
      "A", "CAL Herbarium location.",
      "1. The Central National Herbarium (international acronym CAL) was founded by William Roxburgh in 1795 and is located inside the Indian Botanic Garden at Shibpur, Howrah, West Bengal.",
      "Options B, C, and D are other botanical institutions.",
      "bio-classification-taxonomy", "CAL Herbarium Howrah")

    q(293, "In which international reference book are the recognized abbreviations for global herbaria (such as K for Kew and CAL for Shibpur) officially registered?",
      "Index Herbariorum", "Systema Naturae", "Species Plantarum", "Genera Plantarum",
      "A", "Index Herbariorum.",
      "1. *Index Herbariorum* is the global directory of public herbaria and their associated staff, assigning unique standard acronyms to every accredited herbarium.",
      "Options B, C, and D are classic taxonomic books.",
      "bio-classification-taxonomy", "Index Herbariorum")

    q(294, "A botanist collects a rare flowering plant specimen in the Western Ghats. In which position on the herbarium sheet should the label be pasted according to international convention?",
      "Top left corner", "Top right corner", "Lower right-hand corner", "Lower left-hand corner",
      "C", "Herbarium label standard position.",
      "1. International botanical herbarium standards dictate that the accession label must be affixed firmly at the lower right-hand corner of the 29 x 41.5 cm mounting sheet.",
      "Options A, B, and D violate standardized herbarium curation layout.",
      "bio-classification-taxonomy", "Herbarium Label Lower Right")

    q(295, "Which taxonomical aid is defined as an alphabetical listing of the species found in a defined region along with bibliographic citations and synonyms?",
      "Catalogue", "Monograph", "Key", "Herbarium",
      "A", "Catalogue definition in taxonomy.",
      "1. A Catalogue is an alphabetical or systematic list of books, specimens, or species of a region, often providing references to publications, collectors, and accepted nomenclatural citations.",
      "Option B is an in-depth treatise on one taxon. Option C is an identification device. Option D is a specimen collection.",
      "bio-classification-taxonomy", "Catalogue Taxonomy")

    q(296, "In a botanical museum, why are dry seeds, cones, and large woody fruits not mounted on standard flat paper sheets?",
      "Because paper sheets cannot support bulky three-dimensional specimens; they are stored in cardboard boxes, trays, or glass jars",
      "Because seeds do not possess Latin names",
      "Because cones are toxic to curators",
      "Because seeds cannot be identified",
      "A", "Carpological museum storage.",
      "1. Large, woody, or 3-dimensional plant organs (cones, thick tubers, large fruits) cannot be pressed flat on 29 x 41.5 cm sheets and are preserved separately in carpological museum collections in labelled boxes or jars.",
      "Options B, C, and D are absurd.",
      "bio-classification-taxonomy", "Carpological Collections")

    q(297, "Which of the following pairs of taxonomic aids involves LIVE specimens exclusively?",
      "Herbarium and Museum",
      "Botanical Gardens and Zoological Parks",
      "Flora and Monograph",
      "Museum and Herbarium",
      "B", "Live specimen taxonomic aids.",
      "1. Botanical Gardens (living plants) and Zoological Parks (living wild animals) are facilities for the maintenance and study of living organisms *ex-situ*.",
      "Options A, C, and D involve preserved dead specimens or printed books.",
      "bio-classification-taxonomy", "Live Specimen Aids")

    q(298, "Which of the following statements about a 'Monograph' is TRUE?",
      "A monograph provides an alphabetical index of all plants of a district",
      "A monograph contains a comprehensive, exhaustive taxonomic treatment of any ONE taxon at a time",
      "A monograph is a collection of living animals",
      "A monograph deals only with fossil dinosaurs",
      "B", "True statement on Monograph.",
      "1. NCERT explicitly states: 'Monographs contain information on any one taxon.'\n2. It reviews the morphology, anatomy, phylogeny, distribution, and taxonomy of that specific taxon (e.g., family, genus).",
      "Options A, C, and D are incorrect.",
      "bio-classification-taxonomy", "Monograph True Statement")

    q(299, "What is the primary difference between a 'Flora' and a 'Manual'?",
      "A Flora provides the inventory, habitat, and geographical distribution of plant species of an area, while a Manual provides descriptive information and identification keys for names of species found in an area",
      "A Flora contains live animals, while a Manual contains dead plants",
      "A Flora is published annually, while a Manual is never published",
      "There is no difference; both terms are identical",
      "A", "Flora vs Manual in NCERT.",
      "1. Flora: complete account of habitat, distribution, and index of plant species of a specific geographical region.\n2. Manual: handy operational guide providing descriptive diagnostic keys and characters for the identification of names of species present in an area.",
      "Options B, C, and D are completely incorrect.",
      "bio-classification-taxonomy", "Flora vs Manual NCERT")

    q(300, "Which of the following is the famous monumental publication by J.D. Hooker describing the plant diversity of the Indian subcontinent in 7 volumes?",
      "Flora of British India", "Systema Naturae", "Species Plantarum", "Historia Plantarum",
      "A", "Flora of British India Hooker.",
      "1. Sir Joseph Dalton Hooker compiled the monumental 7-volume work *Flora of British India* (1872-1897), providing the first comprehensive taxonomic account of the Indian flora.",
      "Option B and C are by Linnaeus. Option D is by Theophrastus.",
      "bio-classification-taxonomy", "Flora of British India")

    q(301, "A diagnostic character that is present in ALL members of a taxon and ABSENT in all other related taxa is called an:",
      "Apomorphy (autapomorphy / diagnostic synapomorphy)",
      "Extrinsic accretion",
      "Artificial stamen count",
      "In vitro variable",
      "A", "Diagnostic apomorphic character.",
      "1. A unique derived character (autapomorphy) or shared derived character (synapomorphy) that uniquely characterizes a clade or taxon separates it unambiguously from sister groups.",
      "Options B, C, and D are non-phylogenetic terms.",
      "bio-classification-taxonomy", "Diagnostic Apomorphy")

    q(302, "In biological museums, large birds and mammals are commonly preserved using the technique of:",
      "Stuffing (taxidermy)",
      "Smearing on glass slides",
      "Burning to ashes",
      "Pressing between blotting papers",
      "A", "Taxidermy stuffing in museums.",
      "1. NCERT states: 'Larger animals like birds and mammals are usually stuffed and preserved.'\n2. The internal viscera are removed and replaced with inert stuffing materials (taxidermy).",
      "Options B, C, and D are slide preparation, incineration, and herbarium methods respectively.",
      "bio-classification-taxonomy", "Taxidermy NCERT")

    q(303, "Match the institutions in Column I with their correct geographical locations in Column II:\nColumn I:\n(p) Royal Botanic Gardens\n(q) Central National Herbarium\n(r) National Botanical Research Institute\n(s) Forest Research Institute\nColumn II:\n(1) Lucknow\n(2) Kew, England\n(3) Dehradun\n(4) Shibpur, Howrah",
      "p-2, q-4, r-1, s-3",
      "p-1, q-3, r-2, s-4",
      "p-4, q-2, r-3, s-1",
      "p-2, q-1, r-4, s-3",
      "A", "Botanical institutions and locations match.",
      "1. Royal Botanic Gardens is at Kew, England (p-2).\n2. Central National Herbarium is at Shibpur, Howrah (q-4).\n3. NBRI is at Lucknow (r-1).\n4. FRI is at Dehradun (s-3).\n5. Correct sequence: p-2, q-4, r-1, s-3.",
      "Options B, C, and D represent scrambled pairings.",
      "bio-classification-taxonomy", "Botanical Institutions Match")

    q(304, "Which of the following tools is used by entomologists in museums to humanely kill insect specimens before pinning?",
      "Killing jar charged with ethyl acetate or potassium cyanide fumes",
      "Boiling water for 24 hours",
      "Concentrated sulfuric acid bath",
      "Direct flame torch",
      "A", "Insect killing jar technique.",
      "1. Entomologists collect adult insects and immediately place them into a killing bottle/jar containing plaster of Paris charged with ethyl acetate vapor (or cyanide) to kill them quickly without damaging delicate wings and antennae.",
      "Options B, C, and D destroy the delicate morphological features needed for identification.",
      "bio-classification-taxonomy", "Insect Killing Jar")

    q(305, "Where on an insect's body is an insect pin typically inserted for museum curation?",
      "Through the right thorax (mesothorax) for beetles and true bugs",
      "Through the compound eye",
      "Through the tip of the hind leg",
      "Through the mouthparts",
      "A", "Insect pinning protocol.",
      "1. Standard entomological curation protocol requires insect pins to be inserted through the thorax (specifically the right side of the mesothorax or scutellum in beetles and hemipterans) to preserve symmetrical diagnostic features on the opposite side.",
      "Options B, C, and D destroy critical diagnostic anatomy.",
      "bio-classification-taxonomy", "Insect Pinning Protocol")

    q(306, "Which taxonomical aid is constructed as a table of contrasting characters arranged in pairs, where each step offers two distinct alternative paths?",
      "Dichotomous key", "Monograph", "Flora", "Herbarium label",
      "A", "Dichotomous key definition.",
      "1. A dichotomous key is structured as a series of paired, mutually exclusive statements (couplets) offering two contrasting diagnostic choices at each juncture.",
      "Options B, C, and D are other forms of taxonomic literature or archival labels.",
      "bio-classification-taxonomy", "Dichotomous Key")

    q(307, "Assertion (A): Keys are taxonomical aids used for the identification of plants and animals based on similarities and dissimilarities.\nReason (R): Keys are based on contrasting characters generally in a pair called a couplet.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on keys and couplets in NCERT.",
      "1. Both statements are direct verbatim assertions from NCERT.\n2. The couplet pairing of contrasting characters is precisely the mechanism that allows the key to function as an identification tool, so (R) explains (A).",
      "Options B, C, and D are incorrect.",
      "bio-classification-taxonomy", "Keys and Couplets AR")

    q(308, "Why do botanical gardens play a crucial role in modern plant conservation?",
      "Because they maintain living ex-situ germplasm of rare, endemic, and threatened species that can be multiplied and reintroduced into wild habitats",
      "Because they eliminate the need for rainfall",
      "Because they convert plants into fossils",
      "Because they prevent plants from growing roots",
      "A", "Conservation value of botanical gardens.",
      "1. Modern botanical gardens serve as ex-situ conservation centers where endangered plant germplasm (seeds, living plants, tissue cultures) is banked, propagated, and studied for reintroduction into damaged ecosystems.",
      "Options B, C, and D are scientifically absurd.",
      "bio-classification-taxonomy", "Botanical Garden Conservation")

    q(309, "Which of the following is NOT a process basic to taxonomy according to NCERT?",
      "Characterisation", "Identification", "Nomenclature", "Industrial commercialization",
      "D", "Processes basic to taxonomy check.",
      "1. NCERT lists four processes basic to taxonomy: Characterisation, Identification, Nomenclature, and Classification (CINC).\n2. Industrial commercialization has nothing to do with fundamental taxonomy.",
      "Options A, B, and C are the core canonical taxonomic processes.",
      "bio-classification-taxonomy", "Non-basic Taxonomy Process")

    q(310, "A student collects five plant specimens and wants to identify their families. What must the student use?",
      "A taxonomic key specifically constructed for families",
      "A ruler and thermometer only",
      "A coin toss",
      "A list of extinct animals",
      "A", "Family level taxonomic key.",
      "1. NCERT explicitly notes that separate keys are required for each category (family, genus, species); to determine families, a family-level key is required.",
      "Options B, C, and D are non-taxonomic.",
      "bio-classification-taxonomy", "Family Level Key Application")

    q(311, "Which of the following is an example of an in-situ (on-site) conservation strategy, distinct from ex-situ botanical gardens?",
      "National Park and Biosphere Reserve",
      "Herbarium cabinet",
      "Zoological park cage",
      "Cryogenic gene bank in liquid nitrogen",
      "A", "In-situ vs Ex-situ conservation.",
      "1. In-situ conservation protects species within their natural ecosystems (National Parks, Sanctuaries, Biosphere Reserves).\n2. Botanical gardens, zoos, and cryobanks are ex-situ methods.",
      "Options B, C, and D are ex-situ methods or museum storage.",
      "bio-classification-taxonomy", "In-situ vs Ex-situ")

    q(312, "In taxonomic keys, what does acceptance of one lead in a couplet automatically imply?",
      "Rejection of the alternate contrasting lead",
      "Acceptance of both leads simultaneously",
      "Rejection of the entire organism from the plant kingdom",
      "Immediate deletion of the species from the flora",
      "A", "Lead rejection logic in keys.",
      "1. In a dichotomous key couplet, the two leads are mutually exclusive; selecting one lead automatically rejects the alternate lead, progressing to the next subordinate couplet.",
      "Options B, C, and D violate the fundamental logic of dichotomous keys.",
      "bio-classification-taxonomy", "Lead Rejection Logic")

    # --- TOPIC 3: bio-species-hierarchy (Q313 - Q343) ---
    q(313, "Which of the following taxonomic categories contains organisms with the HIGHEST degree of morphological, anatomical, and reproductive commonalities?",
      "Species", "Genus", "Order", "Class",
      "A", "Highest commonalities at species level.",
      "1. Moving down the taxonomic hierarchy, common characters increase steadily, reaching their maximum at the lowest obligate category: Species.",
      "Options B, C, and D represent broader categories sharing fewer characters.",
      "bio-species-hierarchy", "Highest Commonality Species")

    q(314, "Consider the following biological names from NCERT:\n(1) Solanum tuberosum\n(2) Solanum melongena\n(3) Solanum nigrum\nWhat do 'tuberosum', 'melongena', and 'nigrum' represent?",
      "Genera belonging to three distinct families",
      "Specific epithets of three different species belonging to the same genus Solanum",
      "Varieties of the same crop plant",
      "Classes within division Angiospermae",
      "B", "Specific epithets in Solanum.",
      "1. 'tuberosum' (potato), 'melongena' (brinjal), and 'nigrum' (makoi) are specific epithets denoting three separate species belonging to the same genus *Solanum*.",
      "Options A, C, and D are incorrect taxonomic ranks.",
      "bio-species-hierarchy", "Solanum Specific Epithets")

    q(315, "Which of the following animals does NOT belong to the genus Panthera?",
      "Lion (Panthera leo)",
      "Tiger (Panthera tigris)",
      "Leopard (Panthera pardus)",
      "Domestic cat (Felis catus)",
      "D", "Panthera vs Felis.",
      "1. The domestic cat belongs to the genus *Felis* (*Felis catus*), whereas lion, tiger, and leopard belong to the genus *Panthera*.",
      "Options A, B, and C are true members of genus *Panthera*.",
      "bio-species-hierarchy", "Cat Felis Distinction")

    q(316, "What is the common taxonomic Family that unites both the genus Panthera (lions, tigers) and the genus Felis (cats)?",
      "Canidae", "Felidae", "Hominidae", "Carnivora",
      "B", "Family Felidae composition.",
      "1. Both the big cats (genus *Panthera*) and small cats (genus *Felis*) are united in the family Felidae based on shared carnivorous feline characters.\n2. Carnivora is their Order, not Family.",
      "Option A is the dog family. Option C is the human family. Option D is their Order.",
      "bio-species-hierarchy", "Family Felidae")

    q(317, "Dogs belong to the family Canidae. Dogs and cats are grouped together at which higher taxonomic category?",
      "Genus", "Family", "Order (Carnivora)", "Species",
      "C", "Order Carnivora shared by Felidae and Canidae.",
      "1. While cats (Felidae) and dogs (Canidae) are in distinct families, both families belong to the order Carnivora because they possess carnassial shearing teeth and shared predatory adaptations.",
      "Options A, B, and D are lower categories where cats and dogs diverge.",
      "bio-species-hierarchy", "Order Carnivora Felidae Canidae")

    q(318, "Which of the following plant orders includes both the family Solanaceae (potato family) and family Convolvulaceae (morning glory family)?",
      "Sapindales", "Polymoniales", "Poales", "Rosales",
      "B", "Order Polymoniales families in NCERT.",
      "1. NCERT explicitly states: 'Plant families like Convolvulaceae, Solanaceae are included in the order Polymoniales mainly based on the floral characters.'",
      "Option A is the mango order. Option C is the wheat/grass order. Option D is the rose order.",
      "bio-species-hierarchy", "Polymoniales Families NCERT")

    q(319, "According to NCERT Table 1.1, what is the taxonomic Class of Housefly (Musca domestica)?",
      "Arthropoda", "Diptera", "Insecta", "Muscidae",
      "C", "Housefly Class Insecta in Table 1.1.",
      "1. For Housefly (*Musca domestica*):\n- Phylum = Arthropoda\n- Class = Insecta\n- Order = Diptera\n- Family = Muscidae\n- Genus = *Musca*.",
      "Option A is Phylum. Option B is Order. Option D is Family.",
      "bio-species-hierarchy", "Housefly Class Table 1.1")

    q(320, "According to NCERT Table 1.1, what is the taxonomic Order of Mango (Mangifera indica)?",
      "Anacardiaceae", "Sapindales", "Dicotyledonae", "Angiospermae",
      "B", "Mango Order Sapindales in Table 1.1.",
      "1. For Mango (*Mangifera indica*):\n- Division = Angiospermae\n- Class = Dicotyledonae\n- Order = Sapindales\n- Family = Anacardiaceae\n- Genus = *Mangifera*.",
      "Option A is Family. Option C is Class. Option D is Division.",
      "bio-species-hierarchy", "Mango Order Table 1.1")

    q(321, "According to NCERT Table 1.1, what is the taxonomic Class of Wheat (Triticum aestivum)?",
      "Poaceae", "Poales", "Monocotyledonae", "Angiospermae",
      "C", "Wheat Class Monocotyledonae in Table 1.1.",
      "1. For Wheat (*Triticum aestivum*):\n- Division = Angiospermae\n- Class = Monocotyledonae\n- Order = Poales\n- Family = Poaceae\n- Genus = *Triticum*.",
      "Option A is Family. Option B is Order. Option D is Division.",
      "bio-species-hierarchy", "Wheat Class Table 1.1")

    q(322, "According to NCERT Table 1.1, what is the taxonomic Family of Man (Homo sapiens)?",
      "Primata", "Mammalia", "Chordata", "Hominidae",
      "D", "Human Family Hominidae in Table 1.1.",
      "1. For Man (*Homo sapiens*):\n- Phylum = Chordata\n- Class = Mammalia\n- Order = Primata\n- Family = Hominidae\n- Genus = *Homo*.",
      "Option A is Order. Option B is Class. Option C is Phylum.",
      "bio-species-hierarchy", "Human Family Table 1.1")

    q(323, "Which of the following taxonomic categories contains the GREATEST diversity of body plans and morphological adaptations?",
      "Kingdom", "Phylum", "Class", "Family",
      "A", "Greatest diversity at Kingdom rank.",
      "1. Kingdom is the broadest obligate category (e.g., Kingdom Animalia comprises 35+ phyla ranging from asymmetric sponges to primates), exhibiting the maximum structural diversity.",
      "Options B, C, and D encompass progressively narrower, more homogenous assemblages.",
      "bio-species-hierarchy", "Greatest Diversity Kingdom")

    q(324, "Two animals belong to the same Order. Can they belong to different Classes?",
      "Yes, if they live in different habitats",
      "No, because all members of an Order must share the same parent Class",
      "Yes, because Order is higher than Class",
      "It depends on whether they reproduce sexually",
      "B", "Taxonomic nesting logic Order and Class.",
      "1. In a strictly nested Linnaean hierarchy, an Order is a subdivision of a Class.\n2. Therefore, all organisms within a given Order are automatically members of the same Class.",
      "Options A, C, and D violate hierarchical nesting logic.",
      "bio-species-hierarchy", "Nesting Logic Order Class")

    q(325, "Which of the following pairs of plant families belong to the order Sapindales?",
      "Anacardiaceae and Sapindaceae",
      "Solanaceae and Convolvulaceae",
      "Poaceae and Liliaceae",
      "Fabaceae and Brassicaceae",
      "A", "Families in order Sapindales.",
      "1. Order Sapindales includes the family Anacardiaceae (*Mangifera*) and family Sapindaceae (soapberry family).\n2. Solanaceae and Convolvulaceae belong to order Polymoniales.",
      "Option B is in Polymoniales. Option C is in Poales/Liliales. Option D is in Fabales/Brassicales.",
      "bio-species-hierarchy", "Sapindales Families")

    q(326, "The suffix '-phyta' in botanical nomenclature is used exclusively for which taxonomic category?",
      "Class", "Order", "Family", "Division",
      "D", "Suffix phyta for Division.",
      "1. In botanical nomenclature under ICBN, the suffix '-phyta' denotes a Division (e.g., Bryophyta, Pteridophyta, Spermatophyta, Magnoliophyta).",
      "Option A uses '-opsida' or '-phyceae'. Option B uses '-ales'. Option C uses '-aceae'.",
      "bio-species-hierarchy", "Suffix Phyta Division")

    q(327, "The suffix '-opsida' or '-phyceae' in botanical taxonomy designates a:",
      "Class", "Order", "Family", "Genus",
      "A", "Suffix for plant class.",
      "1. In botanical taxonomy, the suffix '-opsida' (e.g., Bryopsida, Magnoliopsida) or '-phyceae' (e.g., Chlorophyceae, Phaeophyceae) designates a taxonomic Class.",
      "Option B is '-ales'. Option C is '-aceae'. Option D has no standardized suffix.",
      "bio-species-hierarchy", "Suffix Opsida Class")

    q(328, "Which of the following is a monotypic genus in modern living fauna?",
      "Panthera", "Homo", "Solanum", "Canis",
      "B", "Monotypic genus Homo.",
      "1. Modern living fauna contains only one surviving species of the genus *Homo*, which is *Homo sapiens*, making it monotypic today.\n2. *Panthera*, *Solanum*, and *Canis* all possess multiple living species.",
      "Options A, C, and D are polytypic genera.",
      "bio-species-hierarchy", "Monotypic Homo")

    q(329, "How many obligate taxonomic categories are recognized in the standard Linnaean hierarchy?",
      "5", "7", "10", "12",
      "B", "Seven obligate categories in NCERT.",
      "1. There are 7 obligate (essential) taxonomic categories in the Linnaean hierarchy: Kingdom, Phylum/Division, Class, Order, Family, Genus, Species.",
      "Options A, C, and D do not match the canonical 7 obligate ranks.",
      "bio-species-hierarchy", "Seven Obligate Categories")

    q(330, "Which of the following taxonomic ranks is an INTERMEDIATE category placed between Phylum and Class?",
      "Subphylum (e.g., Vertebrata)", "Order", "Family", "Genus",
      "A", "Subphylum intermediate category.",
      "1. Subphylum (such as Subphylum Vertebrata within Phylum Chordata) is an intermediate rank positioned between Phylum and Class.",
      "Options B, C, and D are lower obligate ranks below Class.",
      "bio-species-hierarchy", "Subphylum Intermediate")

    q(331, "All chordates share which of the following diagnostic anatomical features?",
      "Presence of notochord, dorsal hollow nerve cord, and paired pharyngeal gill slits",
      "Chitinous exoskeleton and open hemocoel",
      "Presence of chlorophyll a and starch cell walls",
      "Tracheae and three pairs of legs",
      "A", "Chordate diagnostic features.",
      "1. The three cardinal diagnostic features of Phylum Chordata present at some developmental stage are: (1) notochord, (2) dorsal tubular hollow nerve cord, and (3) pharyngeal gill clefts.",
      "Option B describes arthropods. Option C describes green plants. Option D describes insects.",
      "bio-species-hierarchy", "Chordate Diagnostic Features")

    q(332, "In which taxonomic category do humans and houseflies diverge from each other?",
      "Kingdom", "Phylum", "Class", "Order",
      "B", "Human and Housefly divergence at Phylum.",
      "1. Both humans and houseflies belong to the Kingdom Animalia.\n2. They diverge immediately at the Phylum level: Humans belong to Phylum Chordata, while Houseflies belong to Phylum Arthropoda.",
      "Option A is shared (Kingdom Animalia). Options C and D are lower ranks.",
      "bio-species-hierarchy", "Human Housefly Divergence")

    q(333, "In which taxonomic category do mango and wheat diverge from each other?",
      "Kingdom", "Division", "Class", "Species",
      "C", "Mango and Wheat divergence at Class.",
      "1. Both mango and wheat belong to Kingdom Plantae and Division Angiospermae.\n2. They diverge at the Class level: Mango is in Class Dicotyledonae, whereas Wheat is in Class Monocotyledonae.",
      "Options A and B are shared. Option D is a lower rank.",
      "bio-species-hierarchy", "Mango Wheat Divergence")

    q(334, "Which of the following is the correct representation of the hierarchy for Wheat (Triticum aestivum)?",
      "Triticum -> Poaceae -> Poales -> Monocotyledonae -> Angiospermae",
      "Triticum -> Poales -> Poaceae -> Dicotyledonae -> Angiospermae",
      "Triticum -> Anacardiaceae -> Sapindales -> Monocotyledonae -> Angiospermae",
      "Triticum -> Solanaceae -> Polymoniales -> Dicotyledonae -> Angiospermae",
      "A", "Wheat complete hierarchy.",
      "1. Wheat hierarchy in ascending order:\n- Genus: *Triticum*\n- Family: Poaceae\n- Order: Poales\n- Class: Monocotyledonae\n- Division: Angiospermae.",
      "Options B, C, and D mix up orders, families, or classes.",
      "bio-species-hierarchy", "Wheat Complete Hierarchy")

    q(335, "Which of the following is the correct representation of the hierarchy for Mango (Mangifera indica)?",
      "Mangifera -> Anacardiaceae -> Sapindales -> Dicotyledonae -> Angiospermae",
      "Mangifera -> Poaceae -> Poales -> Dicotyledonae -> Angiospermae",
      "Mangifera -> Solanaceae -> Polymoniales -> Monocotyledonae -> Angiospermae",
      "Mangifera -> Muscidae -> Diptera -> Insecta -> Arthropoda",
      "A", "Mango complete hierarchy.",
      "1. Mango hierarchy in ascending order:\n- Genus: *Mangifera*\n- Family: Anacardiaceae\n- Order: Sapindales\n- Class: Dicotyledonae\n- Division: Angiospermae.",
      "Option B mixes wheat families. Option C lists potato family. Option D lists housefly hierarchy.",
      "bio-species-hierarchy", "Mango Complete Hierarchy")

    q(336, "Which of the following is the correct representation of the hierarchy for Housefly (Musca domestica)?",
      "Musca -> Muscidae -> Diptera -> Insecta -> Arthropoda",
      "Musca -> Diptera -> Muscidae -> Insecta -> Arthropoda",
      "Musca -> Hominidae -> Primata -> Mammalia -> Chordata",
      "Musca -> Canidae -> Carnivora -> Mammalia -> Chordata",
      "A", "Housefly complete hierarchy.",
      "1. Housefly hierarchy in ascending order:\n- Genus: *Musca*\n- Family: Muscidae\n- Order: Diptera\n- Class: Insecta\n- Phylum: Arthropoda.",
      "Option B reverses Order and Family. Option C is human. Option D is dog.",
      "bio-species-hierarchy", "Housefly Complete Hierarchy")

    q(337, "Which of the following is the correct representation of the hierarchy for Man (Homo sapiens)?",
      "Homo -> Hominidae -> Primata -> Mammalia -> Chordata",
      "Homo -> Primata -> Hominidae -> Mammalia -> Chordata",
      "Homo -> Felidae -> Carnivora -> Mammalia -> Chordata",
      "Homo -> Muscidae -> Diptera -> Insecta -> Arthropoda",
      "A", "Human complete hierarchy.",
      "1. Man hierarchy in ascending order:\n- Genus: *Homo*\n- Family: Hominidae\n- Order: Primata\n- Class: Mammalia\n- Phylum: Chordata.",
      "Option B reverses Order and Family. Option C is cat. Option D is housefly.",
      "bio-species-hierarchy", "Human Complete Hierarchy")

    q(338, "Assertion (A): Plant families like Convolvulaceae and Solanaceae are placed in the order Polymoniales.\nReason (R): Families within an order share a few common characters, primarily vegetative features.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "C", "Assertion-Reason on order Polymoniales criteria.",
      "1. (A) is true: Convolvulaceae and Solanaceae are in order Polymoniales.\n2. (R) is false: NCERT explicitly states that order Polymoniales is established mainly based on floral characters, NOT vegetative characters.",
      "Options A, B, and D are incorrect because Reason (R) is false.",
      "bio-species-hierarchy", "Polymoniales AR")

    q(339, "Which of the following statements about taxonomic categories is INCORRECT?",
      "Species is the basic unit of classification",
      "A genus must always have more than 50 species",
      "A family comprises related genera with fewer common characters than a genus",
      "Division in plants corresponds to Phylum in animals",
      "B", "Incorrect genus statement.",
      "1. Statement B is false because a genus can be monotypic (containing only one species, e.g., *Homo*) or have 2, 5, or 10 species. There is no requirement for 50 species.",
      "Statements A, C, and D are verified facts in NCERT.",
      "bio-species-hierarchy", "Incorrect Genus Statement")

    q(340, "A group of freely interbreeding natural populations sharing a common gene pool and producing fertile offspring is called a:",
      "Biological species", "Genus", "Cohort", "Tribe",
      "A", "Biological species definition.",
      "1. Ernst Mayr's classic definition of a biological species is a group of interbreeding natural populations that are reproductively isolated from other such groups.",
      "Options B, C, and D are higher or intermediate taxonomic categories.",
      "bio-species-hierarchy", "Biological Species Definition")

    q(341, "Why are lions (Panthera leo) and tigers (Panthera tigris) considered distinct species even though they can mate in captivity to produce 'ligers'?",
      "Because they do not interbreed in nature under natural conditions due to ecological, behavioral, and geographical reproductive isolation",
      "Because they have different chromosome counts",
      "Because ligers are plants",
      "Because Linnaeus forgot to name ligers",
      "A", "Biological species criteria for lion and tiger.",
      "1. Under natural conditions in the wild, lions and tigers occupy different habitats (savannas vs dense forests), exhibit different courtship behaviors, and never interbreed; captive hybridization (producing ligers) is an artificial artifact and does not violate biological species status.",
      "Options B, C, and D are false (both have 2n=38 chromosomes).",
      "bio-species-hierarchy", "Lions and Tigers Species Status")

    q(342, "Which taxonomic category represents an assemblage of related families?",
      "Order", "Class", "Phylum", "Genus",
      "A", "Order definition in NCERT.",
      "1. NCERT states: 'Order being a higher category, is the assemblage of families which exhibit a few similar characters.'",
      "Option B is an assemblage of orders. Option C is an assemblage of classes. Option D is an assemblage of species.",
      "bio-species-hierarchy", "Order Definition NCERT")

    q(343, "Which of the following categories includes all the other six obligate categories?",
      "Kingdom", "Phylum", "Class", "Order",
      "A", "Kingdom encompasses all categories.",
      "1. Kingdom is the highest category in the Linnaean hierarchy, encompassing all subordinate categories: Phyla/Divisions, Classes, Orders, Families, Genera, and Species.",
      "Options B, C, and D are subordinate ranks within Kingdom.",
      "bio-species-hierarchy", "Kingdom Inclusiveness")

    # --- TOPIC 4: bio-nomenclature-systematics (Q344 - Q375) ---
    q(344, "According to universal rules of binomial nomenclature, when typing on a computer or printing in a textbook, the biological name must be:",
      "Italicized", "Bolded", "Underlined in red", "Enclosed in quotation marks",
      "A", "Italicization rule in print.",
      "1. When printed, scientific names must be italicized to indicate their Latin origin (NCERT Universal Rule 1 and 3).",
      "Options B, C, and D are not standard taxonomic typographic conventions.",
      "bio-nomenclature-systematics", "Typing Italicization")

    q(345, "If a handwritten examination paper requires you to write the scientific name of human, which is the correct format?",
      "Homo sapiens (with 'Homo' and 'sapiens' underlined separately with two separate straight lines)",
      "Homo sapiens (with one continuous underline joining both words)",
      "homo sapiens (no underlining)",
      "HOMO SAPIENS (in full block capitals)",
      "A", "Handwritten separate underlining rule.",
      "1. NCERT Universal Rule 3 explicitly mandates: 'Both the words in a biological name, when handwritten, are separately underlined...'\n2. Underlining must not join the two words continuously.",
      "Option B uses a continuous underline. Options C and D violate capitalization and underline rules.",
      "bio-nomenclature-systematics", "Handwritten Underline Rule")

    q(346, "What is the consequence of publishing a plant name identical to a previously published plant name (homonym)?",
      "The newly published later name is rejected as a junior homonym and must be replaced",
      "Both names are allowed to coexist",
      "The older name is immediately deleted",
      "The author is expelled from biology",
      "A", "Homonym rejection consequence.",
      "1. Under the Principle of Homonymy in both ICBN and ICZN, a junior homonym (a later identical name for a different taxon) is illegitimate and must be discarded and replaced with a new replacement name (nomen novum).",
      "Options B, C, and D are incorrect.",
      "bio-nomenclature-systematics", "Homonym Consequence")

    q(347, "Which of the following is a valid biological name for the black rat under ICZN rules?",
      "Rattus rattus", "Rattus Rattus", "rattus rattus", "Rattus-rattus",
      "A", "Black rat scientific name.",
      "1. *Rattus rattus* is printed in italics, generic name capitalized, specific epithet lowercase, and is a valid tautonym under zoological nomenclature (ICZN).",
      "Option B incorrectly capitalizes the specific epithet. Option C has lowercase genus. Option D has an unwarranted hyphen.",
      "bio-nomenclature-systematics", "Black Rat Name")

    q(348, "Which international code governs the scientific naming of cultivated plants, including cultivars and hybrids?",
      "ICNCP (International Code of Nomenclature for Cultivated Plants)",
      "ICBN", "ICZN", "ICTV",
      "A", "ICNCP cultivated plants.",
      "1. The ICNCP (International Code of Nomenclature for Cultivated Plants) specifically regulates naming conventions for agricultural crops, cultivars, grexes, and artificial plant hybrids.",
      "Option B is for wild plants. Option C is for animals. Option D is for viruses.",
      "bio-nomenclature-systematics", "ICNCP Cultivated Plants")

    q(349, "When an author names a new species after a woman named Victoria, how is the specific epithet Latinized in botanical Latin?",
      "victoriae", "victorii", "victoriensis", "victoriana",
      "A", "Female patronymic Latinization.",
      "1. In botanical nomenclature, a specific epithet derived from a woman's name is Latinized in genitive feminine by adding the suffix '-ae' (e.g., *victoriae*).\n2. Suffix '-ii' or '-i' is used for male names.",
      "Option B is masculine. Option C is geographical. Option D is adjectival.",
      "bio-nomenclature-systematics", "Female Patronymic")

    q(350, "Which of the following statements about Linnaeus's 'Systema Naturae' is CORRECT?",
      "The 1st edition was published in 1758",
      "The 10th edition published in 1758 is the baseline starting point for zoological binomial nomenclature",
      "It dealt exclusively with bacteria",
      "It was written in French",
      "B", "Systema Naturae 10th edition facts.",
      "1. The 10th edition of *Systema Naturae*, published in 1758, applied binomial nomenclature systematically to animals and established the baseline for all zoological taxonomy under the ICZN.",
      "Option A is false (1st edition was 1735). Options C and D are false.",
      "bio-nomenclature-systematics", "Systema Naturae Facts")

    q(351, "In the scientific name 'Solanum nigrum L.', what does 'L.' represent?",
      "Lectotype", "Linnaeus (the author who described the species)", "Local variety", "Late harvest",
      "B", "L. author abbreviation.",
      "1. 'L.' (or 'Linn.') is the universally recognized official botanical abbreviation for Carolus Linnaeus.",
      "Options A, C, and D are incorrect.",
      "bio-nomenclature-systematics", "Linnaeus Abbreviation L")

    q(352, "What is the primary role of a 'Lectotype' in taxonomic revisions?",
      "To serve as a newly synthesized plastic replica",
      "To serve as the unique designated nomenclatural type chosen from the original syntype collection when no holotype was originally indicated",
      "To replace living plants in botanical gardens",
      "To classify extinct dinosaurs",
      "B", "Lectotype role in taxonomy.",
      "1. A lectotype is designated by a subsequent taxonomist from the original specimens (syntypes or uncited original material) when the original author failed to designate a single holotype.",
      "Options A, C, and D are incorrect.",
      "bio-nomenclature-systematics", "Lectotype Role")

    q(353, "If all original syntypes, isotypes, and holotypes are destroyed by fire or pest infestation, what must a taxonomist designate to anchor the species name?",
      "Neotype", "Topotype", "Paratype", "Basionym",
      "A", "Neotype designation upon loss.",
      "1. When all original type material on which a name was based is permanently lost or destroyed, a replacement specimen designated to serve as the definitive type is called a Neotype.",
      "Options B, C, and D do not serve as nomenclatural type replacements when all original material is gone.",
      "bio-nomenclature-systematics", "Neotype Replacement")

    q(354, "Why are binomial names never translated into modern vernacular languages when used in international research papers?",
      "Because translation would defeat the universal purpose of having a single invariant international scientific name",
      "Because scientists are forbidden from speaking English",
      "Because computers cannot process translated words",
      "Because Latin words have no English translation",
      "A", "Non-translation rationale.",
      "1. If binomial names were translated into local languages, ambiguity and regional synonym confusion would immediately recur, destroying the global standardization achieved by binomial nomenclature.",
      "Options B, C, and D are false.",
      "bio-nomenclature-systematics", "Non-translation Rationale")

    q(355, "Which of the following is an example of an organism whose scientific name is a valid zoological tautonym?",
      "Catla catla (Indian major carp)", "Mangifera indica", "Homo sapiens", "Triticum aestivum",
      "A", "Catla catla tautonym.",
      "1. *Catla catla* is the scientific name of the Indian major carp freshwater fish; both generic name and specific epithet are identical, which is perfectly valid under ICZN rules.",
      "Options B, C, and D are standard non-tautonymic binomina.",
      "bio-nomenclature-systematics", "Catla Tautonym")

    q(356, "Assertion (A): Botanical nomenclature does not accept tautonyms like Malus malus.\nReason (R): The International Code of Botanical Nomenclature explicitly prohibits the tautonymous repetition of the generic name as the specific epithet.",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
      "A", "Assertion-Reason on botanical tautonyms prohibition.",
      "1. (A) is true: *Malus malus* is an illegitimate botanical name.\n2. (R) is true: Article 23.4 of the botanical code strictly forbids specific epithets that exactly repeat the generic name, explaining the rejection.",
      "Options B, C, and D are incorrect.",
      "bio-nomenclature-systematics", "Botanical Tautonyms AR")

    q(357, "Which of the following books was published by Linnaeus in 1753 and contains the description of 5,940 plant species?",
      "Species Plantarum", "Systema Naturae", "Philosophia Botanica", "Genera Plantarum",
      "A", "Species Plantarum 1753.",
      "1. In *Species Plantarum* (1753), Linnaeus described approximately 5,940 plant species in two volumes, introducing binomial nomenclature systematically for the plant kingdom.",
      "Option B is animals (1758). Option C is theory/rules (1751). Option D is genera catalogue (1737).",
      "bio-nomenclature-systematics", "Species Plantarum Details")

    q(358, "What does the abbreviation 'sp. nov.' placed after a biological name signify in a newly published research paper?",
      "Species nova (New species previously undescribed by science)",
      "Species non-viable",
      "Specific number",
      "Special novel taxon",
      "A", "Species nova abbreviation.",
      "1. 'sp. nov.' is the Latin abbreviation for *species nova*, indicating that the author is describing and naming a newly discovered species for the very first time.",
      "Options B, C, and D are incorrect expansions.",
      "bio-nomenclature-systematics", "Species Nova")

    q(359, "What does the abbreviation 'gen. nov.' signify?",
      "Genus novum (New genus)", "Genetic novelty", "General nomenclature", "Genuine novelty",
      "A", "Genus novum abbreviation.",
      "1. 'gen. nov.' stands for *genus novum*, indicating that the taxon being published represents an entirely new genus previously unrecognized in taxonomy.",
      "Options B, C, and D are incorrect.",
      "bio-nomenclature-systematics", "Genus Novum")

    q(360, "Which of the following is a trinomial name for the modern human subspecies?",
      "Homo sapiens sapiens", "Homo erectus erectus", "Homo sapiens neanderthalensis", "Australopithecus afarensis",
      "A", "Homo sapiens sapiens trinomial.",
      "1. Anatomically modern humans belong to the subspecies *Homo sapiens sapiens*, represented in trinomial nomenclature as Genus (*Homo*), Species (*sapiens*), and Subspecies (*sapiens*).",
      "Option B is Java/Peking man. Option C is Neanderthal. Option D is an ancestral genus.",
      "bio-nomenclature-systematics", "Homo Sapiens Sapiens")

    q(361, "When a scientific name is derived from a geographical region (e.g., indica, japonica, sinensis), what grammatical role does the specific epithet play?",
      "A geographical proper noun",
      "A Latinized toponymic adjective",
      "An active verb",
      "A personal pronoun",
      "B", "Toponymic adjectives in specific epithets.",
      "1. Specific epithets denoting origin (*indica* = Indian, *japonica* = Japanese, *sinensis* = Chinese) are toponymic Latin adjectives qualifying the generic noun and agreeing in grammatical gender.",
      "Options A, C, and D are grammatically incorrect in botanical Latin.",
      "bio-nomenclature-systematics", "Toponymic Adjectives")

    q(362, "Which of the following scientific names contains an INCORRECT hyphen according to modern ICBN rules?",
      "Hibiscus rosa-sinensis", "Mangifera-indica", "Solanum-tuberosum", "Homo-sapiens",
      "B", "Illegal hyphens in binomial names.",
      "1. A hyphen is strictly illegal between the generic name and specific epithet (they must be separated by a standard space: *Mangifera indica*).\n2. Hyphens are only permissible within a compound specific epithet (e.g., *Hibiscus rosa-sinensis*).",
      "Options C and D are also illegally hyphenated, making *Mangifera-indica* an explicit example of incorrect binomen hyphenation.",
      "bio-nomenclature-systematics", "Illegal Hyphen Binomial")

    q(363, "In the scientific name 'Hibiscus rosa-sinensis L.', the compound specific epithet 'rosa-sinensis' means:",
      "Rose of China", "Red flower of India", "Thorny tree", "Blue lotus",
      "A", "Meaning of rosa-sinensis.",
      "1. 'rosa-sinensis' translates from botanical Latin as 'Rose of China' (China rose), where two words are hyphenated to form a single compound specific epithet.",
      "Options B, C, and D are incorrect translations.",
      "bio-nomenclature-systematics", "Rosa Sinensis Meaning")

    q(364, "Which of the following correctly explains why polynomials were abandoned in favor of Linnaeus's binomial system?",
      "Polynomial names were long, unwieldy descriptive phrases (e.g., 5-10 words long) that were cumbersome to memorize and prone to recording errors",
      "Polynomial names were written in Greek while Linnaeus preferred English",
      "Polynomial names were illegal under Roman law",
      "Polynomial names were invented by Darwin",
      "A", "Abandonment of polynomial names.",
      "1. Prior to Linnaeus, plants were identified by descriptive Latin phrase names (polynomials, e.g., *Caryophyllum saxatilis folis gramineis umbellatis corymbis*). Linnaeus replaced these unwieldy descriptive sentences with a standardized two-word shorthand (Binomial).",
      "Options B, C, and D are historically false.",
      "bio-nomenclature-systematics", "Polynomial Abandonment")

    q(365, "What happens if a newly discovered organism is named with a specific epithet that is identical to an existing species in the same genus?",
      "It creates an illegitimate junior homonym that must be rejected",
      "Both species are merged into one cell",
      "The older species loses its name",
      "Both species are renamed by lottery",
      "A", "Junior homonym in same genus.",
      "1. Within the same genus, no two species can bear the exact same specific epithet; the later published name is an illegitimate junior homonym and must be renamed.",
      "Options B, C, and D are counter to nomenclature codes.",
      "bio-nomenclature-systematics", "Junior Homonym Rule")

    q(366, "Which of the following taxonomic terms refers to the physical location from which the original type specimen of a species was collected?",
      "Type locality (locus classicus)", "Herbarium index", "Botanical garden", "Taxonomic key",
      "A", "Type locality definition.",
      "1. The type locality (*locus classicus*) is the precise geographical site where the original holotype specimen was gathered by the discoverer.",
      "Options B, C, and D are institutions or identification tools.",
      "bio-nomenclature-systematics", "Type Locality")

    q(367, "When an author describes a new plant species, where MUST the holotype specimen be deposited according to modern botanical rules?",
      "In a recognized, accessible, public herbarium with an international index acronym",
      "In the author's private home cupboard",
      "In a local school garden",
      "In a supermarket display",
      "A", "Holotype archival deposit requirement.",
      "1. The International Code mandates that holotype specimens must be permanently deposited and conserved in an accredited, permanently accessible public herbarium or museum so that future researchers can examine the physical specimen.",
      "Options B, C, and D violate curation and accessibility mandates.",
      "bio-nomenclature-systematics", "Holotype Deposition Mandate")

    q(368, "Which of the following is an example of an organism whose generic name and specific epithet are both adjectives?",
      "All generic names are strictly nouns in nominative singular, never adjectives",
      "Mangifera indica",
      "Homo sapiens",
      "Triticum aestivum",
      "A", "Generic name grammatical constraint.",
      "1. In Linnaean nomenclature, the generic name is always a noun (or a word treated as a Latin singular noun). It can never be an adjective.",
      "Options B, C, and D feature noun generic names (*Mangifera*, *Homo*, *Triticum*).",
      "bio-nomenclature-systematics", "Generic Noun Grammar Rule")

    q(369, "If an author citation is written in brackets, e.g., 'Panthera leo (Linnaeus)', what does the parenthesis signify?",
      "Linnaeus originally placed the lion in a different genus (Felis leo), and a later author transferred it to Panthera",
      "Linnaeus described the lion when he was a student",
      "Linnaeus did not believe in lions",
      "The lion is extinct",
      "A", "Parenthetical author citation in zoology.",
      "1. When an author's name is placed in parentheses in zoological nomenclature, it indicates that the species was originally described by that author under a different generic name (*Felis leo* Linnaeus 1758) and subsequently transferred to another genus (*Panthera*).",
      "Options B, C, and D are false.",
      "bio-nomenclature-systematics", "Parenthetical Author Citation Zoology")

    q(370, "Which code governs the naming of fossils and extinct plant lineages?",
      "ICBN / ICN (International Code of Nomenclature for algae, fungi, and plants)",
      "IUCN", "CITES", "WHO",
      "A", "Fossil plants under ICN.",
      "1. Fossil plants, fossil algae, and fossil fungi are governed by the same code as living plants: the International Code of Nomenclature for algae, fungi, and plants (ICN / ICBN).",
      "Option B is conservation status. Option C is wildlife trade regulation. Option D is public health.",
      "bio-nomenclature-systematics", "Fossil Plants ICN")

    q(371, "What is a 'Cotype'?",
      "An obsolete older term formerly used synonymously for a syntype or duplicate type specimen",
      "A computer printout of a name",
      "A cloned animal",
      "A seed in liquid nitrogen",
      "A", "Cotype definition.",
      "1. 'Cotype' is an older, now discouraged term that was historically used to describe any syntype or duplicate type specimen.",
      "Options B, C, and D are unrelated modern terms.",
      "bio-nomenclature-systematics", "Cotype Definition")

    q(372, "The term 'Taxonomy' deals primarily with:",
      "Characterisation, identification, nomenclature, and classification of organisms",
      "Calculating the orbital speed of planets",
      "Designing agricultural machinery",
      "Measuring soil pH alone",
      "A", "Scope of taxonomy.",
      "1. Taxonomy is the branch of biological science that encompasses the principles and procedures of characterisation, identification, nomenclature, and classification of organisms.",
      "Options B, C, and D belong to astronomy, mechanical engineering, and pedology.",
      "bio-nomenclature-systematics", "Taxonomy Core Scope")

    q(373, "Which of the following is NOT a rule of Binomial Nomenclature according to NCERT?",
      "Biological names are generally in Latin and written in italics",
      "The first word represents the genus while the second word denotes the specific epithet",
      "Both words when handwritten are separately underlined",
      "The author's name is written in bold italics before the generic name",
      "D", "Violating rule author citation.",
      "1. The author citation is written at the END of the name in abbreviated Roman script, NEVER before the generic name and NEVER in bold italics.",
      "Options A, B, and C are verbatim NCERT rules.",
      "bio-nomenclature-systematics", "False Nomenclature Rule")

    q(374, "In taxonomy, what is the term used for two or more names applied to the same single taxon?",
      "Synonyms", "Homonyms", "Tautonyms", "Autonyms",
      "A", "Synonyms in taxonomy.",
      "1. When different botanical or zoological names are given to the same taxon, they are termed synonyms.\n2. By the Principle of Priority, the earliest valid name is adopted.",
      "Option B are identical names for different taxa. Option C are identical generic and specific words. Option D are automatically created names.",
      "bio-nomenclature-systematics", "Synonyms Definition")

    q(375, "What is the primary evolutionary advantage of having a single international scientific name for every organism on Earth?",
      "It allows scientists worldwide to cross-reference experimental data, ecology, pathology, and conservation biology without linguistic ambiguity",
      "It makes Latin a living language again",
      "It prevents species from evolving",
      "It reduces the cost of publishing textbooks",
      "A", "Global advantage of scientific nomenclature.",
      "1. Unambiguous international nomenclature enables precise global communication in epidemiology, biodiversity conservation, pharmaceutical bioprospecting, and evolutionary biology without vernacular language confusion.",
      "Options B, C, and D are false or trivial.",
      "bio-nomenclature-systematics", "Global Nomenclature Advantage")

    return questions

if __name__ == '__main__':
    qs = get_part3_questions()
    print(f"Generated {len(qs)} questions for Part 3.")
    assert len(qs) == 125, f"Expected 125, got {len(qs)}"
    med_count = sum(1 for q in qs if q['difficulty'] == 'Medium')
    assert med_count == 125, f"Expected 125 Medium, got {med_count}"
    print("Part 3 validation passed!")
