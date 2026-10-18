import json

def get_part1_questions():
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
            "difficulty": "Easy",
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

    # --- TOPIC 1: bio-living-biodiversity (Q1 - Q31) ---
    q(1, "Which of the following is considered a defining property of all living organisms?",
      "Growth", "Reproduction", "Metabolism", "Locomotion",
      "C", "Defining properties of living organisms in NCERT.",
      "1. NCERT states that a defining property must be present in all living organisms without exception and absent in non-living objects.\n2. Metabolism is the sum total of all chemical reactions occurring in the body, and no non-living object exhibits metabolism.\n3. Growth and reproduction have exceptions (extrinsic growth in inanimate matter, sterile organisms).",
      "Option A is wrong because non-living objects like mountains and sand dunes also grow by external accumulation. Option B is wrong because sterile organisms like worker bees, mules, and infertile human couples cannot reproduce. Option D is wrong because plants and sessile animals do not show locomotion.",
      "bio-living-biodiversity", "Defining vs Non-defining Characteristics")

    q(2, "The twin characteristics of growth are:",
      "Increase in mass and increase in volume", "Increase in mass and increase in number of individuals", "Increase in length and increase in surface area", "Increase in weight and cell division",
      "B", "Twin characteristics of growth according to NCERT.",
      "1. According to NCERT Class 11, 'Increase in mass and increase in number of individuals are twin characteristics of growth.'\n2. In multicellular organisms, growth occurs by cell division which increases both mass and number of cells.\n3. In unicellular organisms, cell division leads to increase in number of individuals.",
      "Options A, C, and D mention volume, length, or surface area, which are morphological parameters but not the explicitly defined twin characteristics stated in NCERT.",
      "bio-living-biodiversity", "Growth Characteristics")

    q(3, "In plants, growth by cell division occurs:",
      "Only up to a certain age", "Continuously throughout their life span", "Only during the reproductive phase", "Only in response to wound healing",
      "B", "Plant vs animal growth patterns.",
      "1. In plants, growth by cell division occurs continuously throughout their life span due to the presence of localized meristematic tissues.\n2. In animals, this growth is seen only up to a certain age, after which cell division occurs only in certain tissues to replace lost cells.",
      "Option A describes animal growth. Options C and D represent restricted scenarios, whereas plant vegetative and apical growth is indeterminate.",
      "bio-living-biodiversity", "Plant Growth Patterns")

    q(4, "In which group of organisms are growth and reproduction mutually inclusive events?",
      "Higher animals and plants", "Unicellular organisms like Amoeba and bacteria", "Filamentous fungi and algae", "Multicellular organisms",
      "B", "Growth and reproduction relation in unicellular vs multicellular.",
      "1. In unicellular organisms like bacteria, unicellular algae, or Amoeba, reproduction is synonymous with growth (increase in number of cells/individuals by division).\n2. In majority of higher animals and plants, growth and reproduction are mutually exclusive events.",
      "Options A and D represent multicellular organisms where growth and reproduction are mutually exclusive. Option C contains multicellular filamentous organisms.",
      "bio-living-biodiversity", "Growth and Reproduction")

    q(5, "Which of the following non-living objects exhibits growth by accumulation of material on its surface?",
      "Mountains, boulders, and sand dunes", "Crystals, viruses, and prions", "Wood, charcoal, and coal", "Clouds, lightning, and rain",
      "A", "Extrinsic growth in non-living objects.",
      "1. Non-living objects like mountains, boulders, and sand mounds grow by accumulation of material on the outer surface (extrinsic growth/accretion).\n2. Living organisms, on the other hand, grow from inside (intrinsic growth).",
      "Option B includes viruses which do not grow by accretion. Options C and D do not demonstrate biological or structural accretion growth.",
      "bio-living-biodiversity", "Extrinsic Growth")

    q(6, "Why is reproduction not considered an all-inclusive defining characteristic of living organisms?",
      "Because all organisms reproduce sexually", "Because many living organisms like mules, sterile worker bees, and infertile human couples do not reproduce", "Because reproduction is identical to growth in all organisms", "Because non-living things also show reproduction",
      "B", "Exceptions to reproduction in living organisms.",
      "1. A defining property must be present in all living beings without any exception.\n2. There are several living organisms that do not reproduce at all, such as mules (hybrid of male donkey and female horse), hinnies, sterile worker bees, and infertile human couples.\n3. Hence, reproduction cannot be an all-inclusive defining characteristic.",
      "Option A is incorrect because asexual reproduction exists widely. Option C is incorrect because they are mutually exclusive in higher organisms. Option D is completely false; no non-living thing reproduces.",
      "bio-living-biodiversity", "Reproduction as Non-defining")

    q(7, "Planaria (flatworm) exhibits a remarkable capacity for which mode of asexual reproduction?",
      "Multiple fission", "True regeneration", "Spore formation", "Budding",
      "B", "Modes of asexual reproduction in NCERT.",
      "1. NCERT explicitly states that a fragmented organism regenerates the lost part of its body and becomes a new organism; this true regeneration is observed in Planaria (flatworms).\n2. Fungi, filamentous algae, and protonema of mosses all multiply by fragmentation.\n3. Yeast and Hydra reproduce by budding.",
      "Option A occurs in Plasmodium. Option C occurs in fungi and algae. Option D occurs in yeast and Hydra.",
      "bio-living-biodiversity", "Asexual Reproduction")

    q(8, "Filamentous algae, protonema of mosses, and fungi all easily multiply by:",
      "Budding", "Fragmentation", "Binary fission", "Spore germination only",
      "B", "Multiplication by fragmentation in NCERT.",
      "1. According to NCERT Biology, fungi, the filamentous algae, and the protonema of mosses all easily multiply by fragmentation.\n2. When fragmented, each piece grows into a full mature organism.",
      "Option A is typical of yeast and Hydra. Option C is typical of unicellular bacteria and Amoeba. Option D ignores fragmentation.",
      "bio-living-biodiversity", "Fragmentation")

    q(9, "What happens to isolated metabolic reactions performed in a cell-free system (in vitro)?",
      "They are non-living reactions", "They are living organisms", "They are neither living organisms nor non-living, but are surely living reactions", "They prove that metabolism is non-defining",
      "C", "In vitro metabolic reactions status.",
      "1. Isolated metabolic reactions outside the body of an organism performed in a test tube are neither living nor non-living.\n2. However, because they are genuine biochemical reactions that sustain life, an isolated metabolic reaction outside the body in a cell-free system is surely a living reaction.",
      "Options A and B are incorrect because an isolated reaction is not an organism, nor is it a non-living event. Option D is false because metabolism is indeed a defining feature.",
      "bio-living-biodiversity", "Metabolism in vitro")

    q(10, "Which of the following is an absolute defining property of all living organisms with no exception?",
      "Cellular organisation of the body", "Locomotion", "Sexual reproduction", "Extrinsic growth",
      "A", "Cellular organisation as defining feature.",
      "1. Cellular organisation of the body is the defining feature of life forms because every living organism is made up of one or more cells containing protoplasm and organelles carrying out metabolic processes.\n2. No non-living entity possesses cellular organization.",
      "Option B is absent in plants and sponges. Option C is absent in asexual organisms. Option D is a property of non-living objects.",
      "bio-living-biodiversity", "Cellular Organisation")

    q(11, "The most obvious and technically complicated feature of all living organisms is:",
      "Growth in mass", "Consciousness and ability to sense environmental stimuli", "Asexual reproduction", "Accumulation of nutrients",
      "B", "Consciousness as the most technically complicated feature.",
      "1. NCERT explicitly states: 'Perhaps, the most obvious and technically complicated feature of all living organisms is this ability to sense their surroundings or environment and respond to these environmental stimuli.'\n2. These stimuli can be physical, chemical, or biological.",
      "Options A, C, and D are basic metabolic/physical events, not the technically complicated sensory and responsive mechanisms described by NCERT.",
      "bio-living-biodiversity", "Consciousness")

    q(12, "Self-consciousness (awareness of oneself) is a unique property found only in:",
      "All eukaryotic organisms", "All vertebrates", "Human beings", "All primates",
      "C", "Self-consciousness in humans.",
      "1. All living organisms possess consciousness (awareness of their surroundings).\n2. However, human beings are the only organisms who are aware of themselves, meaning they have self-consciousness.",
      "Options A, B, and D possess consciousness and responsiveness, but lack self-consciousness as defined in NCERT.",
      "bio-living-biodiversity", "Self-consciousness")

    q(13, "Photoperiod affects reproduction in:",
      "Only animals", "Only plants", "Seasonal breeders, both plants and animals", "Non-seasonal breeders only",
      "C", "Photoperiodism and seasonal breeding.",
      "1. Photoperiod (duration of light exposure) affects reproduction in seasonal breeders, both plants (flowering induction) and animals (estrus/mating cycles).\n2. All organisms handle chemicals entering their bodies and respond to environmental cues.",
      "Options A and B are incomplete because both kingdoms exhibit photoperiodic responses. Option D is wrong because continuous breeders are largely independent of photoperiod.",
      "bio-living-biodiversity", "Photoperiodism")

    q(14, "According to IUCN and NCERT, the estimated number of known and described species on Earth is:",
      "1.1 to 1.2 million", "1.7 to 1.8 million", "2.5 to 3.0 million", "7.0 to 8.0 million",
      "B", "Known biodiversity figures in NCERT.",
      "1. The number of species that are known and described ranges between 1.7-1.8 million (17-18 lakh).\n2. This represents the biodiversity currently documented on Earth.",
      "Option A is an underestimate. Option C is too high for described species. Option D refers to Robert May's global estimate of total biodiversity, not currently described species.",
      "bio-living-biodiversity", "Biodiversity Count")

    q(15, "A patient lying in a coma in hospital supported by machines with brain-dead status:",
      "Is clearly non-living", "Has lost self-consciousness but possesses living tissues maintained artificially", "Proves that consciousness is not a biological phenomenon", "Exhibits active intrinsic locomotion",
      "B", "Comatose patient status in NCERT.",
      "1. NCERT discusses patients in coma: the patient has no self-consciousness, the brain is dead, and vital functions are machine-supported.\n2. Whether such patients are living or non-living is a philosophical/medical question, but biologically their cells continue metabolic reactions while higher self-consciousness is lost.",
      "Option A ignores that cellular metabolism is active. Option C and D are factually absurd.",
      "bio-living-biodiversity", "Comatose Patient")

    q(16, "All living organisms—present, past, and future—are linked to one another by:",
      "Possessing the exact same genetic code and sequences", "The sharing of the common genetic material, but to varying degrees", "Having identical morphological structures", "Exhibiting identical life spans",
      "B", "Universal evolutionary linkage in NCERT.",
      "1. All living organisms—present, past, and future—are linked to one another by the sharing of the common genetic material (DNA/RNA), but to varying degrees.\n2. This common ancestry underpins modern evolutionary biology.",
      "Option A is wrong because sequences vary widely. Options C and D are counter-factual.",
      "bio-living-biodiversity", "Genetic Linkage")

    q(17, "Why do living organisms grow from within while non-living objects grow from outside?",
      "Living growth is due to synthesis of protoplasm (intrinsic), whereas non-living growth is by superficial deposition (extrinsic)", "Living growth is reversible, while non-living growth is irreversible", "Living growth requires no energy", "Non-living growth involves cellular division",
      "A", "Intrinsic vs extrinsic growth.",
      "1. In living organisms, growth comes from inside (intrinsic growth / intussusception) through cell division and synthesis of new protoplasmic material.\n2. Non-living objects grow by extrinsic accretion (deposition of material from outside onto the surface).",
      "Option B is false because living growth is generally irreversible. Options C and D are scientifically incorrect.",
      "bio-living-biodiversity", "Intrinsic Growth")

    q(18, "Which of the following organisms reproduces by budding?",
      "Yeast and Hydra", "Spirogyra and Mucor", "Amoeba and Paramecium", "Planaria and liverworts",
      "A", "Budding examples in NCERT.",
      "1. In yeast (unicellular fungus) and Hydra (multicellular cnidarian), asexual reproduction takes place by budding.\n2. A bud develops as an outgrowth, matures, and eventually detaches from the parent.",
      "Option B reproduces by fragmentation and spores. Option C reproduces by binary fission. Option D shows regeneration and gemmae.",
      "bio-living-biodiversity", "Budding Organisms")

    q(19, "Amoeba multiplies by dividing into two daughter cells. This process represents:",
      "Both growth and reproduction", "Growth only, not reproduction", "Reproduction only, not growth", "Neither growth nor reproduction",
      "A", "Mutually inclusive growth and reproduction.",
      "1. In Amoeba (a unicellular eukaryote), cell division increases the number of cells (growth) and also gives rise to two new individuals (reproduction).\n2. Thus, growth and reproduction are mutually inclusive and synonymous.",
      "Options B, C, and D fail to recognize that division in unicellular organisms accomplishes both mass/cell-count increase and procreation simultaneously.",
      "bio-living-biodiversity", "Amoeba Division")

    q(20, "Which property can be used as an exclusive defining feature of living beings?",
      "Response to external stimuli (Consciousness)", "Increase in body mass", "Production of progeny", "Movement from one place to another",
      "A", "Consciousness as defining feature.",
      "1. Consciousness (responsiveness to stimuli) is present in every living organism without exception and is completely absent in non-living objects.\n2. Mass increase occurs in mountains, progeny production is absent in sterile organisms, and movement is absent in plants.",
      "Options B, C, and D all have well-documented exceptions in the living or non-living world.",
      "bio-living-biodiversity", "Consciousness Defining")

    q(21, "Which of the following is NOT an organism with sterile individuals?",
      "Mule", "Worker honeybee", "Fertile human couple", "Hinny",
      "C", "Examples of sterile organisms.",
      "1. A fertile human couple can reproduce and produce viable offspring.\n2. Mules, worker honeybees, and hinnies are classical examples of sterile organisms that cannot reproduce.",
      "Options A, B, and D are sterile hybrids or sterile caste members.",
      "bio-living-biodiversity", "Sterile Organisms")

    q(22, "Metabolism consists of two opposing processes known as:",
      "Anabolism (constructive) and Catabolism (destructive)", "Mitosis and Meiosis", "Transcription and Translation", "Inspiration and Expiration",
      "A", "Components of metabolism.",
      "1. Metabolism is the sum of anabolism (building up of complex molecules from simpler ones with energy expenditure) and catabolism (breakdown of complex molecules into simpler ones with release of energy).",
      "Options B, C, and D are specific biological processes, not the two constituent branches of general metabolism.",
      "bio-living-biodiversity", "Metabolic Processes")

    q(23, "Which of the following statements is TRUE regarding biodiversity?",
      "Biodiversity refers only to the variety of animals found in rainforests", "Biodiversity refers to the number and types of organisms present on Earth", "Biodiversity includes only domesticated crops and livestock", "Only 50,000 species of organisms are known to science",
      "B", "Definition of biodiversity in NCERT.",
      "1. Biodiversity refers to the vast variety, number, and types of organisms present on Earth.\n2. NCERT estimates 1.7 to 1.8 million species described so far.",
      "Options A and C are far too narrow. Option D gives a drastically deflated, incorrect figure.",
      "bio-living-biodiversity", "Biodiversity Definition")

    q(24, "What is the common term used for the sum total of all chemical reactions occurring in our body?",
      "Homeostasis", "Metabolism", "Anabolism", "Catabolism",
      "B", "Definition of metabolism.",
      "1. Metabolism is defined in NCERT as 'the sum total of all the chemical reactions occurring in our body.'\n2. It includes both anabolic and catabolic pathways.",
      "Option A refers to internal steady-state maintenance. Options C and D are individual halves of metabolism.",
      "bio-living-biodiversity", "Metabolism Concept")

    q(25, "In multicellular organisms, growth occurs primarily by:",
      "Cell division and enlargement", "Accumulation of dust on the skin", "Reduction of water content", "Spontaneous generation",
      "A", "Cell division in multicellular growth.",
      "1. Multicellular organisms grow by mitotic cell division followed by cell elongation, differentiation, and tissue synthesis.\n2. This is an internal, biological, genetically regulated process.",
      "Option B is extrinsic deposition. Options C and D are non-biological or scientifically obsolete.",
      "bio-living-biodiversity", "Cell Division Growth")

    q(26, "Why can mountains, boulders, and sand mounds not be called living even though they grow?",
      "Because their growth is internal", "Because their growth is by external accretion of matter, not by cellular synthesis", "Because they do not have weight", "Because they contain water",
      "B", "Extrinsic growth distinction.",
      "1. Mountains and boulders increase in size purely by the accumulation and deposition of matter on their external surface.\n2. They lack cells, protoplasm, and internal biochemical synthesis.",
      "Option A is false; their growth is extrinsic. Options C and D are irrelevant.",
      "bio-living-biodiversity", "Mountain Growth")

    q(27, "Which characteristic of life explains why organisms can sense light, temperature, water, and pollutants?",
      "Locomotion", "Consciousness and irritability", "Growth in mass", "Fragmentation",
      "B", "Irritability and response to external stimuli.",
      "1. Consciousness/irritability is the capacity of organisms to detect environmental changes (stimuli such as light, temperature, moisture, chemical cues) and mount physiological responses.",
      "Options A, C, and D are physical manifestations or reproductive modes, not sensory-responsive mechanisms.",
      "bio-living-biodiversity", "Irritability")

    q(28, "True regeneration, where a fragmented body part develops into an entire complete organism, is seen in:",
      "Planaria", "Ascaris", "Taenia", "Periplaneta",
      "A", "Planaria regeneration in NCERT.",
      "1. Planaria (a flatworm of phylum Platyhelminthes) possesses high regenerative power; any cut fragment can regenerate the entire organism.\n2. This is true morphallactic and epimorphic regeneration cited in NCERT.",
      "Options B, C, and D lack this true whole-body regenerative capacity.",
      "bio-living-biodiversity", "Planaria")

    q(29, "A mule is produced by a cross between:",
      "Male horse and female donkey", "Male donkey and female horse", "Male zebra and female horse", "Male donkey and female zebra",
      "B", "Mule origin and sterility.",
      "1. A mule is an interspecific hybrid produced by crossing a male donkey (jack) and a female horse (mare).\n2. Mules are sterile due to chromosomal incompatibility (donkey 2n=62, horse 2n=64).",
      "Option A produces a hinny (male horse x female donkey). Options C and D produce zorses or other zebra hybrids.",
      "bio-living-biodiversity", "Mule Genetics")

    q(30, "What is a hinny?",
      "Offspring of male donkey and female horse", "Offspring of male horse (stallion) and female donkey (jenny)", "Offspring of two sterile mules", "A fertile worker bee",
      "B", "Hinny definition.",
      "1. A hinny is the reciprocal cross of a mule, produced by breeding a male horse (stallion) and a female donkey (jenny).\n2. Hinnies are also sterile.",
      "Option A defines a mule. Option C is impossible as mules are sterile. Option D is biologically incorrect.",
      "bio-living-biodiversity", "Hinny Definition")

    q(31, "Which of the following statements about consciousness is correct?",
      "Prokaryotes cannot sense their environment", "Only animals show consciousness; plants do not", "All organisms, from prokaryotes to complex eukaryotes, can sense and respond to environmental cues", "Consciousness is absent in seasonal breeders",
      "C", "Universal nature of consciousness.",
      "1. NCERT states: 'All organisms, from the prokaryotes to the most complex eukaryotes can sense and respond to environmental cues.'\n2. Bacteria sense chemical gradients (chemotaxis) and light, just as plants sense gravity and sunlight.",
      "Options A and B contradict NCERT. Option D is incorrect because seasonal breeders rely directly on photoperiod cues.",
      "bio-living-biodiversity", "Consciousness Range")

    # --- TOPIC 2: bio-classification-taxonomy (Q32 - Q62) ---
    q(32, "The term 'Taxonomy' was first coined by which botanist?",
      "Carolus Linnaeus", "A.P. de Candolle", "Ernst Mayr", "Aristotle",
      "B", "Origin of the term taxonomy.",
      "1. The term 'Taxonomy' was coined by French botanist A.P. de Candolle in 1813 in his book 'Théorie élémentaire de la botanique'.\n2. Carolus Linnaeus is regarded as the Father of Taxonomy.",
      "Option A is the Father of Taxonomy, not the coiner of the term. Option C is known for the biological species concept. Option D performed the earliest informal classification.",
      "bio-classification-taxonomy", "Taxonomy Term Coiner")

    q(33, "Who is universally recognized as the 'Father of Taxonomy'?",
      "Aristotle", "Theophrastus", "Carolus Linnaeus", "Charles Darwin",
      "C", "Father of Taxonomy.",
      "1. Carolus Linnaeus (Carl von Linné) is recognized as the Father of Taxonomy, Father of Systematic Botany, and founder of modern binomial nomenclature.",
      "Option A is the Father of Biology and Zoology. Option B is the Father of Botany. Option D is the Father of Evolutionary Biology.",
      "bio-classification-taxonomy", "Father of Taxonomy")

    q(34, "According to NCERT, the fundamental processes that form the basis of modern taxonomy are:",
      "Characterisation, Identification, Nomenclature, and Classification", "Collection, Preservation, Naming, and Storing", "Morphology, Anatomy, Physiology, and Breeding", "Dissection, Drawing, Naming, and Mounting",
      "A", "Processes of taxonomy in NCERT.",
      "1. NCERT explicitly states: 'Hence, characterisation, identification, nomenclature and classification are the processes that are basic to taxonomy.'\n2. A useful mnemonic is CINC (Characterisation -> Identification -> Nomenclature -> Classification).",
      "Options B, C, and D describe techniques or botanical branches, not the fundamental 4-step canonical taxonomy framework.",
      "bio-classification-taxonomy", "Taxonomy Processes")

    q(35, "What is the primary difference between Classical Taxonomy and Modern Biosystematics?",
      "Classical taxonomy uses DNA; modern uses morphology", "Classical taxonomy is based mainly on morphological characters, while modern taxonomy considers external and internal structure, cell structure, developmental processes, and ecological relationships", "Classical taxonomy recognizes phylogeny, while modern taxonomy does not", "Modern taxonomy rejects nomenclature",
      "B", "Classical vs Modern taxonomy.",
      "1. Classical taxonomy (alpha taxonomy) was based purely on observable gross morphological and typological characters.\n2. Modern biosystematics (omega taxonomy) synthesizes morphological, cytological, anatomical, embryological, genetic, and ecological data.",
      "Option A reverses the technologies. Options C and D are completely false.",
      "bio-classification-taxonomy", "Biosystematics")

    q(36, "A 'taxon' is defined as:",
      "An abstract rank in the taxonomic hierarchy", "A concrete taxonomic group of any rank or level", "A standard herbarium specimen sheet", "An extinct fossil organism only",
      "B", "Definition of taxon.",
      "1. A taxon (plural: taxa) represents a concrete, real biological entity or group at any level of classification (e.g., Mammalia, Insecta, Angiospermae, Dicotyledonae, Homo sapiens).\n2. A 'category' is the abstract rank or status in the hierarchy (e.g., Class, Order, Family).",
      "Option A defines a category. Options C and D are completely unrelated.",
      "bio-classification-taxonomy", "Taxon Definition")

    q(37, "Which of the following represents a 'category' rather than a 'taxon'?",
      "Mammalia", "Order", "Canidae", "Solanum",
      "B", "Category vs Taxon distinction.",
      "1. 'Order' is an abstract rank or category in the hierarchical system.\n2. Mammalia (Class taxon), Canidae (Family taxon), and Solanum (Genus taxon) are real biological groups (taxa).",
      "Options A, C, and D are concrete taxa.",
      "bio-classification-taxonomy", "Category vs Taxon")

    q(38, "Which of the following taxonomic aids is based on contrasting characters generally in a pair called a couplet?",
      "Herbarium", "Monograph", "Taxonomic Key", "Botanical Garden",
      "C", "Taxonomic Keys in NCERT.",
      "1. A key is a taxonomical aid used for identification of plants and animals based on similarities and dissimilarities.\n2. The keys are based on the contrasting characters generally in a pair called a couplet.\n3. Each statement in the key is called a lead.",
      "Option A stores pressed plant specimens. Option B is a treatise on one taxon. Option D contains living plants.",
      "bio-classification-taxonomy", "Taxonomic Key")

    q(39, "Each statement in a taxonomic key is technically referred to as a:",
      "Couplet", "Lead", "Taxon", "Monograph",
      "B", "Structure of a taxonomic key.",
      "1. In a taxonomic key, the pair of contrasting characters is called a couplet.\n2. Each individual statement of the couplet is called a lead.",
      "Option A is the pair of statements. Option C is a biological group. Option D is a publication.",
      "bio-classification-taxonomy", "Lead in Key")

    q(40, "A taxonomic key is analytical in nature because:",
      "It requires chemical testing of tissues", "It requires choosing between two contrasting options at each step to narrow down the identity", "It calculates statistical probabilities of survival", "It sequences the whole genome",
      "B", "Analytical nature of keys.",
      "1. Keys are described as 'analytical in nature' because they operate through logical elimination: at each step, one lead is accepted and the other rejected, progressively arriving at the correct identification.",
      "Options A, C, and D mention non-taxonomic analytical techniques.",
      "bio-classification-taxonomy", "Analytical Key")

    q(41, "What is the standard size of an international herbarium sheet?",
      "20 x 30 cm", "29 x 41.5 cm (11.5 x 16.5 inches)", "45 x 60 cm", "10 x 15 cm",
      "B", "Standard herbarium sheet dimensions.",
      "1. The standard international herbarium sheet size is 29 x 41.5 cm (approximately 11.5 x 16.5 inches).\n2. Dried, pressed, and preserved plant specimens are mounted on these sheets.",
      "Options A, C, and D do not match standard international botanical archival dimensions.",
      "bio-classification-taxonomy", "Herbarium Sheet Size")

    q(42, "Which of the following information is NOT recorded on the label of a herbarium sheet?",
      "Date and place of collection", "English, local, and botanical names", "Collector's name and family", "Height of the tree and price of timber",
      "D", "Herbarium sheet label data in NCERT.",
      "1. NCERT states: 'The herbarium sheet carries a label at the lower right-hand corner providing information about date and place of collection, English, local and botanical names, family, collector's name, etc.'\n2. Commercial information like timber price is not recorded.",
      "Options A, B, and C are all mandatory items explicitly listed in NCERT.",
      "bio-classification-taxonomy", "Herbarium Label")

    q(43, "A herbarium serves as a quick referral system in taxonomical studies because:",
      "It contains living plants for research", "It serves as an organized repository of dried and pressed plant specimens arranged systematically according to an accepted classification system", "It breeds new varieties of crops", "It provides live animal food",
      "B", "Herbarium as quick referral system.",
      "1. Herbaria store pressed, dried, and mounted plant specimens accompanied by systematic classification data, allowing taxonomists to quickly cross-check unknown collections against verified specimens.",
      "Option A describes botanical gardens. Options C and D are agricultural or zoological functions.",
      "bio-classification-taxonomy", "Herbarium Function")

    q(44, "The famous Royal Botanic Garden is located at:",
      "Kew, England", "Howrah, India", "Lucknow, India", "Paris, France",
      "A", "Famous botanical gardens in NCERT.",
      "1. NCERT specifies: 'The famous botanical gardens are at Kew (England), Indian Botanical Garden, Howrah/Kolkata (India) and at National Botanical Research Institute, Lucknow (India).'",
      "Option B is the Indian Botanical Garden. Option C houses NBRI. Option D is not cited in NCERT.",
      "bio-classification-taxonomy", "Kew Gardens")

    q(45, "The National Botanical Research Institute (NBRI) is situated at:",
      "Kolkata", "Lucknow", "New Delhi", "Dehradun",
      "B", "NBRI location.",
      "1. NBRI (National Botanical Research Institute) is situated in Lucknow, Uttar Pradesh, India, as cited in NCERT.",
      "Option A houses the Indian Botanical Garden (Shibpur, Howrah). Option D houses FRI (Forest Research Institute).",
      "bio-classification-taxonomy", "NBRI Lucknow")

    q(46, "The Indian Botanical Garden, famous for the Great Banyan Tree, is located at:",
      "Lucknow", "Howrah (Kolkata)", "Bengaluru", "Mumbai",
      "B", "Indian Botanical Garden location.",
      "1. The Indian Botanical Garden (now Acharya Jagadish Chandra Bose Indian Botanic Garden) is located at Shibpur, Howrah (near Kolkata), West Bengal.",
      "Option A is NBRI Lucknow. Options C and D are other cities.",
      "bio-classification-taxonomy", "Indian Botanical Garden")

    q(47, "Which taxonomic aid contains the actual account of habitat and distribution of plants of a given area?",
      "Flora", "Manual", "Monograph", "Catalogue",
      "A", "Definition of Flora in NCERT.",
      "1. NCERT states: 'Flora contains the actual account of habitat and distribution of plants of a given area. These provide the index to the plant species found in a particular area.'",
      "Option B provides information for identification of names of species found in an area. Option C contains information on any one taxon. Option D is an alphabetical list.",
      "bio-classification-taxonomy", "Flora Definition")

    q(48, "A taxonomical publication containing comprehensive information on any ONE taxon is called a:",
      "Flora", "Manual", "Monograph", "Catalogue",
      "C", "Definition of Monograph in NCERT.",
      "1. NCERT states: 'Monographs contain information on any one taxon' (e.g., a monograph on the family Solanaceae or genus Pinus).",
      "Option A covers all plants of an area. Option B assists in species identification in an area. Option D is an index/list.",
      "bio-classification-taxonomy", "Monograph Definition")

    q(49, "Which taxonomical aid is useful in providing information for identification of names of species found in an area?",
      "Manuals", "Monographs", "Catalogues", "Zoological Parks",
      "A", "Definition of Manuals in NCERT.",
      "1. NCERT explicitly states: 'Manuals are useful in providing information for identification of names of species found in an area.'",
      "Option B deals with one taxon comprehensively. Option C is a reference list. Option D is for live animals.",
      "bio-classification-taxonomy", "Manuals Definition")

    q(50, "In biological museums, insects are preserved by:",
      "Stuffing with cotton and straw", "Collecting, killing, and pinning in insect boxes", "Freezing in liquid nitrogen", "Dissolving in strong acid",
      "B", "Insect preservation in museums.",
      "1. NCERT states: 'Insects are preserved in insect boxes after collecting, killing and pinning.'\n2. Larger animals like birds and mammals are usually stuffed and preserved.",
      "Option A is used for larger birds and mammals. Options C and D are not standard museum exhibition practices.",
      "bio-classification-taxonomy", "Insect Preservation")

    q(51, "Plant and animal specimens preserved in jars in museums are placed in:",
      "Pure distilled water", "Preservative solutions such as formalin", "Concentrated alcohol only", "Dry salt",
      "B", "Museum wet preservation.",
      "1. Museum specimens are commonly preserved in preservative solutions (typically 4-10% formaldehdye/formalin or alcohol-formalin mixtures) in clear jars to prevent microbial decomposition.",
      "Option A causes osmotic lysis. Option D causes shrinkage and distortion.",
      "bio-classification-taxonomy", "Museum Preservative")

    q(52, "Zoological parks (zoos) are places where:",
      "Dead animals are stuffed and mounted", "Wild animals are kept in protected environments under human care, allowing us to learn their food habits and behaviour", "Pressed animal skins are stored", "Fossils are excavated",
      "B", "Zoological parks definition in NCERT.",
      "1. NCERT defines zoological parks as places where wild animals are kept in protected environments under human care, which enables us to learn about their food habits and behaviour.\n2. All animals in a zoo are provided, as far as possible, conditions similar to their natural habitats.",
      "Option A describes museums. Option C describes taxidermy collections. Option D describes paleontological sites.",
      "bio-classification-taxonomy", "Zoological Parks")

    q(53, "The main purpose of botanical gardens is:",
      "To produce timber for furniture", "Ex-situ conservation, scientific study, and identification of living plant collections", "Only to provide recreation for city residents", "To preserve dead plant herbarium sheets",
      "B", "Purpose of botanical gardens.",
      "1. Botanical gardens maintain living collections of plants grown for identification purposes, educational instruction, taxonomic research, and ex-situ germplasm conservation.\n2. Each plant is labeled with its botanical name and family.",
      "Option A is forestry. Option C is a park, not a botanical garden. Option D is a herbarium.",
      "bio-classification-taxonomy", "Botanical Gardens Purpose")

    q(54, "Which of the following is an ex-situ method of conservation?",
      "National Park", "Sanctuary", "Botanical Garden", "Biosphere Reserve",
      "C", "Ex-situ conservation.",
      "1. Botanical gardens and zoological parks are ex-situ (off-site) conservation methods where organisms are protected outside their natural habitats.",
      "Options A, B, and D are in-situ (on-site) conservation protected areas.",
      "bio-classification-taxonomy", "Ex-situ Conservation")

    q(55, "Who was the Greek philosopher who first attempted a scientific basis for biological classification?",
      "Aristotle", "Theophrastus", "Pliny", "Linnaeus",
      "A", "Aristotle's classification.",
      "1. Aristotle was the earliest to attempt a more scientific basis for classification; he used simple morphological characters to classify plants into trees, shrubs, and herbs, and divided animals into two groups: those with red blood (Enaima) and those without (Anaima).",
      "Option B classified plants into 4 habits. Option D founded modern binomial taxonomy.",
      "bio-classification-taxonomy", "Aristotle Classification")

    q(56, "Theophrastus is known as the Father of:",
      "Zoology", "Botany", "Taxonomy", "Medicine",
      "B", "Theophrastus.",
      "1. Theophrastus, a student of Aristotle, described about 480 plants in his work 'Historia Plantarum' and is acclaimed as the Father of Botany.",
      "Option A is Aristotle. Option C is Carolus Linnaeus. Option D is Hippocrates.",
      "bio-classification-taxonomy", "Theophrastus")

    q(57, "Which taxonomical aid is an alphabetical register of books or botanical specimens in a library or museum?",
      "Catalogue", "Flora", "Manual", "Monograph",
      "A", "Catalogue definition.",
      "1. A catalogue is a list or register that systematically enumerates species, specimens, or publications in alphabetical order with brief descriptions.",
      "Option B covers regional plants. Option C identifies species in an area. Option D covers a single taxon.",
      "bio-classification-taxonomy", "Catalogue Definition")

    q(58, "Separate taxonomic keys are required for:",
      "All families together in one common sheet", "Each taxonomic category such as family, genus, and species for identification purposes", "Only animals, not plants", "Only living organisms, not fossils",
      "B", "Keys for taxonomic categories.",
      "1. NCERT explicitly states: 'Separate taxonomic keys are required for each taxonomic category such as family, genus and species for identification purposes.'",
      "Option A contradicts NCERT. Options C and D are false.",
      "bio-classification-taxonomy", "Separate Keys")

    q(59, "The term 'Systematics' is derived from the Latin word:",
      "'Systema' meaning systematic arrangement of organisms", "'Systole' meaning contraction", "'Syntype' meaning duplicate specimen", "'Symbiosis' meaning living together",
      "A", "Etymology of systematics in NCERT.",
      "1. NCERT states: 'The word systematics is derived from the Latin word \"systema\" which means systematic arrangement of organisms.'\n2. Linnaeus used 'Systema Naturae' as the title of his famous book.",
      "Options B, C, and D are unrelated biological or medical terms.",
      "bio-classification-taxonomy", "Systematics Etymology")

    q(60, "The scope of systematics was later enlarged to include:",
      "Only external morphology", "Identification, nomenclature, classification, and evolutionary relationships between organisms", "Only commercial uses of timber", "Dissection of human cadavers",
      "B", "Scope of systematics in NCERT.",
      "1. NCERT explicitly states: 'The scope of systematics was later enlarged to include identification, nomenclature and classification. Systematics takes into account evolutionary relationships between organisms.'",
      "Option A is classical taxonomy. Options C and D are non-taxonomic disciplines.",
      "bio-classification-taxonomy", "Scope of Systematics")

    q(61, "In a herbarium, why are plant specimens poisoned with chemicals like 0.1% mercuric chloride (HgCl2)?",
      "To impart green color to the leaves", "To protect the specimens from fungal attack and insect damage", "To make the stem flexible for bending", "To measure moisture content",
      "B", "Herbarium specimen poisoning.",
      "1. Dried herbarium specimens are treated with poisons (like 0.1% HgCl2 or fumigants) to prevent degradation by fungal decay (molds) and dermestid beetle attack.",
      "Options A, C, and D do not represent the archival purpose of chemical poisoning in herbaria.",
      "bio-classification-taxonomy", "Herbarium Preservation")

    q(62, "A collection of preserved plant and animal specimens for study and reference is known as a:",
      "Museum", "Botanical garden", "Sanctuary", "National park",
      "A", "Museum definition in NCERT.",
      "1. Biological museums are generally set up in educational institutes such as schools and colleges for study and reference, housing preserved plant and animal specimens.",
      "Option B contains live plants. Options C and D are protected wilderness areas.",
      "bio-classification-taxonomy", "Museum Definition")

    # --- TOPIC 3: bio-species-hierarchy (Q63 - Q93) ---
    q(63, "Which of the following represents the correct ascending order of obligate taxonomic categories?",
      "Species -> Genus -> Family -> Order -> Class -> Phylum/Division -> Kingdom",
      "Kingdom -> Phylum -> Class -> Order -> Family -> Genus -> Species",
      "Species -> Family -> Genus -> Order -> Class -> Phylum -> Kingdom",
      "Species -> Genus -> Order -> Family -> Class -> Division -> Kingdom",
      "A", "Ascending order of taxonomic hierarchy.",
      "1. In ascending order (from lowest to highest): Species -> Genus -> Family -> Order -> Class -> Phylum (animals) or Division (plants) -> Kingdom.\n2. In descending order, it begins with Kingdom and ends with Species.",
      "Option B is in descending order. Option C reverses Family and Genus. Option D reverses Order and Family.",
      "bio-species-hierarchy", "Hierarchy Ascending")

    q(64, "As we go from species to kingdom in a taxonomic hierarchy, the number of common characteristics:",
      "Increases", "Decreases", "Remains constant", "First increases then decreases",
      "B", "Rule of common characteristics in hierarchy.",
      "1. NCERT states: 'As we go higher from species to kingdom, the number of common characteristics goes on decreasing.'\n2. Lower the taxa, more are the characteristics that the members within the taxon share.",
      "Option A is true when moving downwards from kingdom to species. Options C and D are incorrect.",
      "bio-species-hierarchy", "Common Characteristics Trend")

    q(65, "At which taxonomic category is it most difficult to determine the relationship to other taxa at the same level?",
      "Species", "Genus", "Family", "Kingdom",
      "D", "Difficulty in establishing relationships at higher ranks.",
      "1. NCERT states: 'Higher the category, greater is the difficulty of determining the relationship to other taxa at the same level. Hence, the problem of classification becomes more complex.'\n2. Kingdom is the highest category with minimum shared attributes.",
      "Options A, B, and C have far more common characteristics, making relationships easier to establish.",
      "bio-species-hierarchy", "Kingdom Complexity")

    q(66, "The lowest, basic, and fundamental unit of taxonomic classification is:",
      "Genus", "Species", "Order", "Family",
      "B", "Basic unit of classification.",
      "1. Species is the basic, lowest, and fundamental unit of classification in the taxonomic hierarchy.\n2. It represents real distinct interbreeding biological populations in nature.",
      "Options A, C, and D are higher aggregate categories.",
      "bio-species-hierarchy", "Basic Unit Species")

    q(67, "Ernst Mayr, known as the 'Darwin of the 20th century', formulated which species concept?",
      "Morphological Species Concept", "Biological Species Concept", "Typological Species Concept", "Static Species Concept",
      "B", "Ernst Mayr species concept.",
      "1. Ernst Mayr formulated the Biological Species Concept, defining a species as a group of naturally interbreeding populations that are reproductively isolated from other such groups.",
      "Option A was used by Linnaeus. Option C is pre-evolutionary. Option D considers species immutable.",
      "bio-species-hierarchy", "Biological Species Concept")

    q(68, "A genus is an assemblage of related:",
      "Families", "Orders", "Species", "Classes",
      "C", "Definition of genus.",
      "1. NCERT states: 'Genus comprises a group of related species which has more characters in common in comparison to species of other genera.'\n2. For example, potato (Solanum tuberosum) and brinjal (Solanum melongena) belong to genus Solanum.",
      "Option A describes an Order. Option B describes a Class. Option D describes a Phylum.",
      "bio-species-hierarchy", "Genus Definition")

    q(69, "Potato (Solanum tuberosum) and Brinjal (Solanum melongena) belong to the same:",
      "Species", "Genus (Solanum)", "Family (Fabaceae)", "Order (Sapindales)",
      "B", "Genus Solanum example in NCERT.",
      "1. Both potato (*Solanum tuberosum*) and brinjal (*Solanum melongena*) are two distinct species belonging to the same genus *Solanum* and family Solanaceae.",
      "Option A is wrong because tuberosum and melongena are different species. Options C and D list wrong families/orders.",
      "bio-species-hierarchy", "Solanum Example")

    q(70, "Lion (Panthera leo), leopard (Panthera pardus), and tiger (Panthera tigris) all belong to the genus:",
      "Felis", "Panthera", "Canis", "Homo",
      "B", "Genus Panthera in NCERT.",
      "1. Lion (*P. leo*), leopard (*P. pardus*), and tiger (*P. tigris*) are closely related species placed in the genus *Panthera*.\n2. Cats belong to the genus *Felis*.",
      "Option A is the cat genus. Option C is the dog genus. Option D is the human genus.",
      "bio-species-hierarchy", "Panthera Genus")

    q(71, "The taxonomic category 'Family' is characterized on the basis of:",
      "Only vegetative features of plant species", "Only reproductive features of plant species", "Both vegetative and reproductive features of plant species", "Only chromosome number",
      "C", "Family characterization in NCERT.",
      "1. NCERT explicitly states: 'Families are characterized on the basis of both vegetative and reproductive features of plant species.'\n2. For example, family Solanaceae includes genera *Solanum*, *Petunia*, and *Datura*.",
      "Options A and B are incomplete. Option D is cytotaxonomy, not the general morphological basis of family classification.",
      "bio-species-hierarchy", "Family Criteria")

    q(72, "The plant family Solanaceae includes which of the following genera?",
      "Solanum, Petunia, and Datura", "Brassica, Raphanus, and Iberis", "Mangifera, Triticum, and Oryza", "Panthera, Felis, and Canis",
      "A", "Genera in Solanaceae in NCERT.",
      "1. NCERT states: 'Among plants for example, three different genera Solanum, Petunia and Datura are placed in the family Solanaceae.'",
      "Option B belongs to Brassicaceae. Option C belongs to Anacardiaceae and Poaceae. Option D are animal genera.",
      "bio-species-hierarchy", "Solanaceae Genera")

    q(73, "Cat (Felis) and Dog (Canis) are placed in two separate families named:",
      "Felidae and Canidae respectively", "Canidae and Felidae respectively", "Muscidae and Hominidae", "Carnivora and Primata",
      "A", "Felidae and Canidae.",
      "1. Cats are placed in the family Felidae (genus *Felis*).\n2. Dogs are placed in the family Canidae (genus *Canis*).\n3. Both families are grouped into the common order Carnivora.",
      "Option B reverses the order. Option C represents housefly and human families. Option D represents orders.",
      "bio-species-hierarchy", "Felidae and Canidae")

    q(74, "Plant families like Convolvulaceae and Solanaceae are included in the order Polymoniales mainly on the basis of:",
      "Vegetative characters", "Floral characters", "Root anatomy", "Seed germination speed",
      "B", "Order Polymoniales basis in NCERT.",
      "1. NCERT explicitly states: 'Plant families like Convolvulaceae, Solanaceae are included in the order Polymoniales mainly based on the floral characters.'",
      "Option A characterizes families together with floral characters, but order Polymoniales is specifically delimited by floral features. Options C and D are incorrect.",
      "bio-species-hierarchy", "Polymoniales Basis")

    q(75, "The animal order Carnivora includes families like:",
      "Felidae and Canidae", "Hominidae and Muscidae", "Solanaceae and Liliaceae", "Poaceae and Anacardiaceae",
      "A", "Order Carnivora families in NCERT.",
      "1. Order Carnivora includes mammal families adapted for meat-eating, such as Felidae (cats, lions, tigers) and Canidae (dogs, wolves, foxes).",
      "Option B includes human and housefly families. Options C and D are plant families.",
      "bio-species-hierarchy", "Carnivora Families")

    q(76, "Class Mammalia includes which of the following orders?",
      "Primata (monkey, gorilla, gibbon) and Carnivora (tiger, cat, dog)", "Diptera and Poales", "Polymoniales and Sapindales", "Insecta and Arthropoda",
      "A", "Class Mammalia orders in NCERT.",
      "1. Class Mammalia includes order Primata (monkeys, apes, humans) along with order Carnivora (carnivorous mammals) having mammary glands and hair.",
      "Options B and C contain insect or plant orders. Option D lists a class and phylum.",
      "bio-species-hierarchy", "Mammalia Orders")

    q(77, "In plant taxonomy, the category equivalent to 'Phylum' in animals is:",
      "Order", "Division", "Class", "Cohort",
      "B", "Division vs Phylum in NCERT.",
      "1. In plant classification, classes with a few similar characters are assigned to a higher category called Division, whereas in animal taxonomy the equivalent category is Phylum.",
      "Options A, C, and D are lower hierarchical ranks.",
      "bio-species-hierarchy", "Division vs Phylum")

    q(78, "Classes Pisces, Amphibia, Reptilia, Aves, and Mammalia constitute the next higher category called:",
      "Phylum Chordata", "Division Angiospermae", "Order Carnivora", "Kingdom Animalia directly",
      "A", "Phylum Chordata composition.",
      "1. Classes Pisces, Amphibia, Reptilia, Aves, and Mammalia share common features like presence of notochord and dorsal hollow neural system, constituting the Phylum Chordata.",
      "Option B is a plant division. Option C is an order. Option D skips the phylum level.",
      "bio-species-hierarchy", "Chordata Classes")

    q(79, "According to NCERT Table 1.1, the biological name and family of Man (human) are:",
      "Homo sapiens and Hominidae", "Homo erectus and Felidae", "Homo habilis and Primata", "Homo sapiens and Anthropoidea",
      "A", "NCERT Table 1.1 Human.",
      "1. Man:\n- Biological Name: *Homo sapiens*\n- Genus: *Homo*\n- Family: Hominidae\n- Order: Primata\n- Class: Mammalia\n- Phylum: Chordata.",
      "Option B uses a fossil species and cat family. Option C lists Primata (which is the order, not family). Option D lists an infraorder.",
      "bio-species-hierarchy", "Human Hierarchy")

    q(80, "According to NCERT Table 1.1, the order and class of Man (human) are:",
      "Carnivora and Mammalia", "Primata and Mammalia", "Hominidae and Chordata", "Primata and Vertebrata",
      "B", "NCERT Table 1.1 Human order and class.",
      "1. For *Homo sapiens*:\n- Order: Primata\n- Class: Mammalia.",
      "Option A lists Carnivora (order of carnivores). Option C lists a family and phylum. Option D lists a subphylum.",
      "bio-species-hierarchy", "Human Order Class")

    q(81, "According to NCERT Table 1.1, the Housefly belongs to the family:",
      "Muscidae", "Diptera", "Insecta", "Arthropoda",
      "A", "NCERT Table 1.1 Housefly family.",
      "1. Housefly (*Musca domestica*):\n- Family: Muscidae\n- Order: Diptera\n- Class: Insecta\n- Phylum: Arthropoda.",
      "Option B is the order. Option C is the class. Option D is the phylum.",
      "bio-species-hierarchy", "Housefly Family")

    q(82, "According to NCERT Table 1.1, the Housefly belongs to the order:",
      "Diptera", "Muscidae", "Insecta", "Arthropoda",
      "A", "NCERT Table 1.1 Housefly order.",
      "1. Housefly (*Musca domestica*) belongs to the order Diptera (two-winged true flies).",
      "Option B is the family. Option C is the class. Option D is the phylum.",
      "bio-species-hierarchy", "Housefly Order")

    q(83, "According to NCERT Table 1.1, the Housefly belongs to the class and phylum:",
      "Insecta and Arthropoda", "Diptera and Insecta", "Arthropoda and Chordata", "Muscidae and Diptera",
      "A", "NCERT Table 1.1 Housefly class and phylum.",
      "1. Housefly:\n- Class: Insecta (three pairs of jointed legs)\n- Phylum: Arthropoda (jointed appendages, chitinous exoskeleton).",
      "Options B, C, and D confuse categories.",
      "bio-species-hierarchy", "Housefly Class Phylum")

    q(84, "According to NCERT Table 1.1, Mango (Mangifera indica) belongs to the family:",
      "Anacardiaceae", "Sapindales", "Dicotyledonae", "Angiospermae",
      "A", "NCERT Table 1.1 Mango family.",
      "1. Mango (*Mangifera indica*):\n- Family: Anacardiaceae\n- Order: Sapindales\n- Class: Dicotyledonae\n- Division: Angiospermae.",
      "Option B is the order. Option C is the class. Option D is the division.",
      "bio-species-hierarchy", "Mango Family")

    q(85, "According to NCERT Table 1.1, Mango belongs to the order:",
      "Sapindales", "Anacardiaceae", "Polymoniales", "Poales",
      "A", "NCERT Table 1.1 Mango order.",
      "1. Mango (*Mangifera indica*) belongs to the order Sapindales.",
      "Option B is the family. Option C is the order containing Solanaceae. Option D is the wheat/grass order.",
      "bio-species-hierarchy", "Mango Order")

    q(86, "According to NCERT Table 1.1, Wheat (Triticum aestivum) belongs to the family:",
      "Poaceae (Gramineae)", "Poales", "Monocotyledonae", "Angiospermae",
      "A", "NCERT Table 1.1 Wheat family.",
      "1. Wheat (*Triticum aestivum*):\n- Family: Poaceae (grass family)\n- Order: Poales\n- Class: Monocotyledonae\n- Division: Angiospermae.",
      "Option B is the order. Option C is the class. Option D is the division.",
      "bio-species-hierarchy", "Wheat Family")

    q(87, "According to NCERT Table 1.1, Wheat belongs to the order:",
      "Poales", "Poaceae", "Sapindales", "Polymoniales",
      "A", "NCERT Table 1.1 Wheat order.",
      "1. Wheat (*Triticum aestivum*) belongs to the order Poales.",
      "Option B is the family. Option C is the mango order. Option D is the potato/sweet potato order.",
      "bio-species-hierarchy", "Wheat Order")

    q(88, "Both Mango and Wheat share which common taxonomic division?",
      "Angiospermae", "Dicotyledonae", "Poales", "Sapindales",
      "A", "Common division for Mango and Wheat.",
      "1. Both mango (*Mangifera indica*) and wheat (*Triticum aestivum*) produce flowers and enclosed seeds within fruit, placing them in the Division Angiospermae.\n2. Mango is Dicotyledonae, while wheat is Monocotyledonae.",
      "Option B applies only to mango. Options C and D are mutually exclusive orders.",
      "bio-species-hierarchy", "Mango Wheat Division")

    q(89, "Which standard suffix is used for plant taxonomic families according to the ICBN?",
      "-ales", "-aceae", "-idae", "-phyta",
      "B", "Plant family suffix.",
      "1. In plant taxonomy, family names universally end with the suffix '-aceae' (e.g., Solanaceae, Poaceae, Anacardiaceae, Fabaceae, Liliaceae).",
      "Option A is used for plant orders (-ales). Option C is used for animal families (-idae). Option D is used for plant divisions (-phyta).",
      "bio-species-hierarchy", "Family Suffix")

    q(90, "Which standard suffix is used for plant taxonomic orders according to the ICBN?",
      "-ales", "-aceae", "-idae", "-opsida",
      "A", "Plant order suffix.",
      "1. Plant order names universally end with the suffix '-ales' (e.g., Polymoniales, Sapindales, Poales, Rosales).",
      "Option B is for families. Option C is for animal families. Option D is for plant classes.",
      "bio-species-hierarchy", "Order Suffix")

    q(91, "Which suffix is used for animal families according to the ICZN?",
      "-idae", "-aceae", "-ales", "-inae",
      "A", "Animal family suffix.",
      "1. In zoological nomenclature (ICZN), family names end with the suffix '-idae' (e.g., Hominidae, Muscidae, Felidae, Canidae).",
      "Option B is for plant families. Option C is for plant orders. Option D is for animal subfamilies.",
      "bio-species-hierarchy", "Animal Family Suffix")

    q(92, "A genus having only one single living species is referred to as:",
      "Monotypic genus", "Polytypic genus", "Sympatric genus", "Allopatric genus",
      "A", "Monotypic genus definition.",
      "1. A monotypic genus contains only one single species (e.g., *Homo* with *Homo sapiens* as the sole surviving species).\n2. A polytypic genus contains multiple species (e.g., *Panthera*, *Solanum*).",
      "Option B contains two or more species. Options C and D refer to geographical speciation models.",
      "bio-species-hierarchy", "Monotypic Genus")

    q(93, "The genus Solanum and the genus Panthera are examples of:",
      "Monotypic genera", "Polytypic genera", "Orders", "Families",
      "B", "Polytypic genus examples.",
      "1. *Solanum* (*S. tuberosum*, *S. melongena*, *S. nigrum*) and *Panthera* (*P. leo*, *P. tigris*, *P. pardus*) contain multiple related species, making them polytypic genera.",
      "Option A has only one species. Options C and D are different categories.",
      "bio-species-hierarchy", "Polytypic Genera")

    # --- TOPIC 4: bio-nomenclature-systematics (Q94 - Q125) ---
    q(94, "The system of naming organisms with two components (Generic name and Specific epithet) is known as:",
      "Binomial Nomenclature", "Trinomial Nomenclature", "Polynomial Nomenclature", "Vernacular Nomenclature",
      "A", "Binomial nomenclature definition.",
      "1. Binomial Nomenclature is the formal system of naming species by giving each a name composed of two parts: the generic name (genus) and the specific epithet.",
      "Option B uses three names (subspecies). Option C uses long descriptive sentences. Option D is local naming.",
      "bio-nomenclature-systematics", "Binomial Nomenclature Concept")

    q(95, "Binomial Nomenclature was originally introduced and popularized by:",
      "Carolus Linnaeus", "Charles Darwin", "Gregor Mendel", "Ernst Haeckel",
      "A", "Linnaeus binomial system.",
      "1. Carolus Linnaeus introduced binomial nomenclature in his book 'Philosophia Botanica' (1751) and applied it consistently in 'Species Plantarum' (1753) and 'Systema Naturae' (1758).",
      "Options B, C, and D made foundational discoveries in evolution, genetics, and ecology, but did not devise binomial nomenclature.",
      "bio-nomenclature-systematics", "Linnaeus Binomial System")

    q(96, "In the scientific name Mangifera indica Linn., the word 'Mangifera' represents the:",
      "Genus", "Specific epithet", "Family", "Author",
      "A", "Generic name in binomial system.",
      "1. In *Mangifera indica* Linn., 'Mangifera' is the generic name (genus), 'indica' is the specific epithet, and 'Linn.' is the author abbreviation.",
      "Option B is 'indica'. Option C is Anacardiaceae. Option D is 'Linn.'",
      "bio-nomenclature-systematics", "Generic Name")

    q(97, "In the scientific name Mangifera indica Linn., the word 'indica' represents the:",
      "Specific epithet", "Genus", "Subspecies", "Variety",
      "A", "Specific epithet in binomial system.",
      "1. In *Mangifera indica*, 'indica' is the specific epithet indicating the species.",
      "Option B is 'Mangifera'. Options C and D are infraspecific ranks.",
      "bio-nomenclature-systematics", "Specific Epithet")

    q(98, "In the scientific name Mangifera indica Linn., what does 'Linn.' signify?",
      "That the species was first described by Linnaeus", "That the plant was discovered in the city of Linz", "That the species belongs to the lineage of legumes", "That the plant has a linear leaf shape",
      "A", "Author citation in binomial nomenclature.",
      "1. NCERT states: 'Name of the author appears after the specific epithet, i.e., at the end of the biological name and is written in an abbreviated form, e.g., Mangifera indica Linn. It indicates that this species was first described by Linnaeus.'",
      "Options B, C, and D are false fabrications.",
      "bio-nomenclature-systematics", "Author Citation")

    q(99, "What is the full form of ICBN?",
      "International Code of Botanical Nomenclature", "Indian Code of Biological Nomenclature", "International Council of Botanical Names", "International Centre for Botanical Nature",
      "A", "ICBN full form in NCERT.",
      "1. ICBN stands for International Code of Botanical Nomenclature (now known as International Code of Nomenclature for algae, fungi, and plants - ICN).",
      "Options B, C, and D are incorrect expansions.",
      "bio-nomenclature-systematics", "ICBN Expansion")

    q(100, "What is the full form of ICZN?",
      "International Code of Zoological Nomenclature", "Indian Code of Zoological Nature", "International Council of Zoological Naming", "International Centre for Zoology and Nematology",
      "A", "ICZN full form in NCERT.",
      "1. ICZN stands for International Code of Zoological Nomenclature, which governs the formal scientific naming of animals.",
      "Options B, C, and D are incorrect expansions.",
      "bio-nomenclature-systematics", "ICZN Expansion")

    q(101, "Scientific names are generally in which language, irrespective of their origin?",
      "Greek", "Latin", "English", "French",
      "B", "Language of scientific names in NCERT.",
      "1. NCERT Universal Rule 1 states: 'Biological names are generally in Latin and written in italics. They are Latinised or derived from Latin irrespective of their origin.'\n2. Latin was chosen because it is a dead language and not subject to changes in grammar or meaning.",
      "Option A is partly true for root words, but all names must be Latinized. Options C and D are modern living languages.",
      "bio-nomenclature-systematics", "Latin Language")

    q(102, "When printed, scientific biological names are written in:",
      "Bold letters", "Italics", "Underlined capital letters", "Block letters",
      "B", "Printing convention for biological names.",
      "1. When printed in textbooks or papers, scientific names are set in italics to indicate their Latin origin.",
      "Option A is for emphasis. Option C describes handwritten names. Option D is not standard typography.",
      "bio-nomenclature-systematics", "Italics Typography")

    q(103, "When handwritten, how should biological names be written according to universal rules?",
      "Both genus and specific epithet are separately underlined", "Both words are joined with a hyphen", "Only the author's name is underlined", "All letters must be written in capital letters",
      "A", "Handwritten biological names convention.",
      "1. NCERT Universal Rule 3: 'Both the words in a biological name, when handwritten, are separately underlined, or printed in italics to indicate their Latin origin.'",
      "Option B is used only in hyphenated compound specific epithets. Options C and D violate nomenclature rules.",
      "bio-nomenclature-systematics", "Handwritten Underline")

    q(104, "In a scientific name, the generic name begins with a ________ letter, while the specific epithet begins with a ________ letter.",
      "Capital, small", "Small, capital", "Capital, capital", "Small, small",
      "A", "Capitalization rule in binomial nomenclature.",
      "1. NCERT Universal Rule 4: 'The first word denoting the genus starts with a capital letter while the specific epithet starts with a small letter.'\n2. Example: *Mangifera indica* (M is capital, i is lowercase).",
      "Options B, C, and D violate this universal rule.",
      "bio-nomenclature-systematics", "Capitalization Rule")

    q(105, "Which of the following is written correctly according to the rules of binomial nomenclature?",
      "Mangifera Indica", "mangifera indica", "Mangifera indica", "Mangifera indica Linn.",
      "D", "Correct biological name writing.",
      "1. Both 'Mangifera indica' and 'Mangifera indica Linn.' are grammatically valid, but 'Mangifera indica Linn.' is the complete formal citation including the author citation in Roman script.",
      "Option A incorrectly capitalizes 'Indica'. Option B fails to capitalize 'mangifera'. Option C lacks author citation when comparing complete standard options.",
      "bio-nomenclature-systematics", "Correct Name Writing")

    q(106, "What is a tautonym in biological nomenclature?",
      "A scientific name where the generic name and specific epithet are identical", "A name given to two different species", "A name published without description", "A name with three generic parts",
      "A", "Tautonym definition.",
      "1. A tautonym is a scientific name of an organism in which both the generic name and the specific epithet are identical words (e.g., *Rattus rattus*, *Naja naja*, *Catla catla*).",
      "Option B is a homonym. Option C is a nomen nudum. Option D is polynomial.",
      "bio-nomenclature-systematics", "Tautonym Concept")

    q(107, "Which code of nomenclature strictly FORBIDS tautonyms?",
      "ICZN (Zoology)", "ICBN (Botany)", "Both ICBN and ICZN forbid them", "Neither forbids them",
      "B", "Tautonyms in botany vs zoology.",
      "1. Tautonyms are strictly invalid in botanical nomenclature (ICBN / ICN). For example, *Malus malus* is not allowed for apple (it is *Malus domestica*).\n2. In zoological nomenclature (ICZN), tautonyms are completely valid and widely accepted (*Naja naja*, *Gorilla gorilla*).",
      "Option A allows tautonyms. Options C and D contradict universal rules.",
      "bio-nomenclature-systematics", "Tautonyms in Botany")

    q(108, "Which of the following is an acceptable valid scientific name under the ICZN?",
      "Naja naja", "Malus malus", "Mangifera mangifera", "Solanum solanum",
      "A", "Valid zoological tautonym.",
      "1. *Naja naja* (Indian cobra) is an animal, and animal names are governed by the ICZN, which permits tautonyms.\n2. *Malus malus*, *Mangifera mangifera*, and *Solanum solanum* are plants and are therefore rejected under ICBN rules.",
      "Options B, C, and D are invalid botanical tautonyms.",
      "bio-nomenclature-systematics", "Valid Tautonym")

    q(109, "The author's name in a biological name is written in which font/script?",
      "Italics script", "Roman (regular) script", "Greek alphabet", "Gothic bold",
      "B", "Author citation font.",
      "1. NCERT states that the author citation is written at the end in abbreviated form in Roman (regular upright) script, not in italics, and is not underlined (e.g., *Homo sapiens* Linn.).",
      "Option A is used for the genus and species. Options C and D are incorrect.",
      "bio-nomenclature-systematics", "Author Citation Font")

    q(110, "Carolus Linnaeus published his landmark work on plant classification, 'Species Plantarum', in the year:",
      "1753", "1758", "1859", "1900",
      "A", "Species Plantarum publication year.",
      "1. Carolus Linnaeus published 'Species Plantarum' on May 1, 1753. This date is considered the official starting point for valid botanical nomenclature under ICBN.",
      "Option B (1758) is when 'Systema Naturae' 10th edition was published (starting date for zoology). Option C is Darwin's Origin of Species. Option D is rediscovery of Mendelism.",
      "bio-nomenclature-systematics", "Species Plantarum Year")

    q(111, "The starting point of modern zoological nomenclature is considered to be the 10th edition of Linnaeus's:",
      "Species Plantarum (1753)", "Systema Naturae (1758)", "Philosophia Botanica (1751)", "Genera Plantarum (1737)",
      "B", "Systema Naturae 10th edition.",
      "1. The 10th edition of 'Systema Naturae' published by Carolus Linnaeus in 1758 is universally accepted as the starting point for zoological nomenclature (ICZN).",
      "Option A is for botanical nomenclature. Options C and D are earlier botanical treatises.",
      "bio-nomenclature-systematics", "Systema Naturae 10th")

    q(112, "In 'Philosophia Botanica' (1751), Linnaeus for the first time:",
      "Proposed the theory of natural selection", "Outlined the principles and rules of botanical nomenclature", "Disproved spontaneous generation", "Described cell organelles",
      "B", "Philosophia Botanica contents.",
      "1. In 'Philosophia Botanica' (1751), Carolus Linnaeus established the formal principles, rules, and terminology of botanical nomenclature which laid the foundation for binomial naming.",
      "Options A, C, and D were achieved by Darwin, Pasteur, and cytologists respectively.",
      "bio-nomenclature-systematics", "Philosophia Botanica")

    q(113, "What is a 'Holotype' in taxonomic terminology?",
      "The single original specimen designated by the author as the nomenclature type", "A duplicate specimen of the holotype", "A specimen selected from original material when holotype is lost", "A specimen collected from a different locality",
      "A", "Holotype definition.",
      "1. A Holotype is the one specimen or illustration used by the author, or designated by the author, as the nomenclatural type when describing a new species.",
      "Option B defines an isotype. Option C defines a lectotype. Option D is a paratype/topotype.",
      "bio-nomenclature-systematics", "Holotype Definition")

    q(114, "A duplicate of the holotype collected at the same time and place by the same author is called an:",
      "Isotype", "Lectotype", "Neotype", "Syntype",
      "A", "Isotype definition.",
      "1. An Isotype is a duplicate specimen of the holotype, collected at the same time, from the same locality, by the same collector.",
      "Option B is a specimen selected from original material when no holotype was designated. Option C is a new specimen chosen when all original material is destroyed. Option D is one of several specimens cited together.",
      "bio-nomenclature-systematics", "Isotype Definition")

    q(115, "A specimen selected from the original material to serve as the nomenclatural type when no holotype was designated is called a:",
      "Lectotype", "Neotype", "Isotype", "Topotype",
      "A", "Lectotype definition.",
      "1. A Lectotype is a specimen chosen from the original material (syntypes) by a subsequent worker when the original author did not designate a holotype or when the holotype is lost.",
      "Option B is a new specimen when ALL original material is lost. Option C is a duplicate of holotype. Option D is from the type locality.",
      "bio-nomenclature-systematics", "Lectotype Definition")

    q(116, "When all original type specimens of a species are lost or destroyed, a replacement specimen chosen as the nomenclatural type is called a:",
      "Neotype", "Isotype", "Syntype", "Paratype",
      "A", "Neotype definition.",
      "1. A Neotype is a specimen or illustration selected to serve as the nomenclatural type when all of the material on which the name was originally based is missing or destroyed.",
      "Options B, C, and D are categories of original type materials.",
      "bio-nomenclature-systematics", "Neotype Definition")

    q(117, "A specimen collected from the exact same locality where the original holotype was gathered is known as a:",
      "Topotype", "Neotype", "Syntype", "Lectotype",
      "A", "Topotype definition.",
      "1. A Topotype is a specimen collected from the original type locality (locus classicus) from which the species was first described.",
      "Options B, C, and D are formal nomenclatural type categories.",
      "bio-nomenclature-systematics", "Topotype Definition")

    q(118, "Trinomial nomenclature is used when an organism is classified down to:",
      "Genus only", "Subspecies or Variety", "Order", "Family",
      "B", "Trinomial nomenclature.",
      "1. Trinomial nomenclature uses three words: Generic name + Specific epithet + Subspecies (in animals, e.g., *Homo sapiens sapiens*) or Variety (in plants, e.g., *Brassica oleracea* var. *botrytis*).",
      "Options A, C, and D represent standard higher Linnaean ranks.",
      "bio-nomenclature-systematics", "Trinomial Nomenclature")

    q(119, "In the Indian crow, Corvus splendens splendens, the three words represent:",
      "Genus, species, and subspecies respectively", "Family, genus, and species", "Genus, variety, and author", "Species, genus, and variety",
      "A", "Corvus splendens trinomial name.",
      "1. In *Corvus splendens splendens*:\n- *Corvus* = Genus\n- *splendens* = Species\n- *splendens* = Subspecies.",
      "Options B, C, and D misidentify the taxonomic ranks.",
      "bio-nomenclature-systematics", "Indian Crow Trinomial")

    q(120, "According to the Principle of Priority in biological nomenclature:",
      "The most recently published name is always accepted", "The first validly published name according to the rules is accepted as legitimate", "The name voted on by scientists is accepted", "Names must be changed every 50 years",
      "B", "Principle of Priority.",
      "1. The Principle of Priority states that if an organism is given multiple scientific names by different researchers, the earliest validly published name conforming to nomenclature rules is accepted as the legitimate valid name, while later names become synonyms.",
      "Option A is the opposite of priority. Options C and D are non-existent rules.",
      "bio-nomenclature-systematics", "Principle of Priority")

    q(121, "Why are common vernacular names not suitable for international biological communication?",
      "Because they differ from place to place, language to language, and often create severe confusion", "Because common names are in Latin", "Because every organism has only one common name worldwide", "Because common names are always scientific",
      "A", "Drawbacks of vernacular names.",
      "1. Common (vernacular) names change from region to region and country to country (e.g., onion is known by dozens of different names across Indian states), and single common names can refer to multiple unrelated organisms.",
      "Options B, C, and D are completely counterfactual.",
      "bio-nomenclature-systematics", "Vernacular Names Problem")

    q(122, "The International Code of Nomenclature of Bacteria is abbreviated as:",
      "ICNB", "ICBN", "ICZN", "ICTV",
      "A", "ICNB abbreviation.",
      "1. ICNB stands for International Code of Nomenclature of Bacteria (now often referred to as the International Code of Nomenclature of Prokaryotes - ICNP).",
      "Option B is for plants. Option C is for animals. Option D is for viruses.",
      "bio-nomenclature-systematics", "ICNB Abbreviation")

    q(123, "The body responsible for the classification and naming of viruses is:",
      "ICTV (International Committee on Taxonomy of Viruses)", "ICBN", "ICZN", "IUCN",
      "A", "ICTV for viruses.",
      "1. ICTV (International Committee on Taxonomy of Viruses) is the international body that authorizes and organizes the taxonomic classification of and naming of viruses.",
      "Option B is for plants. Option C is for animals. Option D is the International Union for Conservation of Nature.",
      "bio-nomenclature-systematics", "ICTV Viruses")

    q(124, "If a biological name consists of a specific epithet named after a person or country, the specific epithet:",
      "Must still start with a lowercase letter in modern botanical nomenclature", "Must start with a capital letter", "Must be written in bold uppercase", "Must be written without vowels",
      "A", "Specific epithet lowercase rule.",
      "1. In modern biological nomenclature (both ICBN and ICZN), all specific epithets begin with a small (lowercase) letter, even if derived from a proper noun, person, or geographical location (e.g., *Mangifera indica*, *Azadirachta indica*).",
      "Options B, C, and D violate modern ICBN and ICZN standards.",
      "bio-nomenclature-systematics", "Specific Epithet Lowercase")

    q(125, "In binomial nomenclature, why are Latin or Latinized words universally preferred?",
      "Because Latin is a dead language whose grammar, vocabulary, and word meanings do not change over time", "Because Latin is the official language of the United Nations", "Because Latin words are the shortest in length", "Because Latin was invented by Linnaeus",
      "A", "Rationale for Latin in nomenclature.",
      "1. Latin is a 'dead language', meaning it is no longer spoken as a native vernacular language by any population, making its grammar and vocabulary immutable and immune to evolutionary language shifts.",
      "Options B, C, and D are historically and linguistically false.",
      "bio-nomenclature-systematics", "Latin Dead Language Rationale")

    return questions

if __name__ == '__main__':
    qs = get_part1_questions()
    print(f"Generated {len(qs)} questions for Part 1.")
    assert len(qs) == 125, f"Expected 125, got {len(qs)}"
    easy_count = sum(1 for q in qs if q['difficulty'] == 'Easy')
    assert easy_count == 125, f"Expected 125 Easy, got {easy_count}"
    print("Part 1 validation passed!")
