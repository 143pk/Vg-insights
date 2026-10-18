import json

def get_part1_questions():
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
            "difficulty": "Easy",
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

    # --- TOPIC 1: bio-kingdom-monera (Q1 - Q31) ---
    q(1, "Who proposed the Five Kingdom system of classification in 1969?",
      "Carolus Linnaeus", "R.H. Whittaker", "Carl Woese", "Ernst Haeckel",
      "B", "R.H. Whittaker's Five Kingdom Classification.",
      "1. In 1969, R.H. Whittaker proposed the Five Kingdom Classification.\n2. The kingdoms defined by him were Monera, Protista, Fungi, Plantae, and Animalia.",
      "Option A proposed the Two Kingdom system. Option C proposed the Three Domain / Six Kingdom system. Option D proposed the Three Kingdom system.",
      "bio-kingdom-monera", "Five Kingdom Proposal")

    q(2, "Which of the following is NOT one of the main criteria used by R.H. Whittaker for Five Kingdom Classification?",
      "Cell structure (prokaryotic vs eukaryotic)", "Body organisation / Thallus organisation", "Mode of nutrition", "Presence of circulatory system",
      "D", "Whittaker's classification criteria.",
      "1. NCERT explicitly lists the main criteria used by Whittaker: cell structure, body organisation, mode of nutrition, reproduction, and phylogenetic relationships.\n2. Circulatory systems are absent in plants, fungi, and microbes, and were not a kingdom-level criterion.",
      "Options A, B, and C are all primary criteria defined in NCERT.",
      "bio-kingdom-monera", "Whittaker Criteria")

    q(3, "Bacteria are the sole members of which kingdom?",
      "Kingdom Protista", "Kingdom Monera", "Kingdom Fungi", "Kingdom Plantae",
      "B", "Kingdom Monera definition in NCERT.",
      "1. NCERT explicitly states: 'Bacteria are the sole members of the Kingdom Monera. They are the most abundant micro-organisms.'",
      "Option A contains unicellular eukaryotes. Option C contains fungi. Option D contains multicellular photosynthetic plants.",
      "bio-kingdom-monera", "Monera Sole Members")

    q(4, "Bacteria that are spherical in shape are designated as:",
      "Bacillus", "Coccus", "Spirillum", "Vibrio",
      "B", "Bacterial shapes in NCERT.",
      "1. Based on shape, bacteria are grouped into four categories: spherical Coccus (pl. cocci), rod-shaped Bacillus (pl. bacilli), comma-shaped Vibrio (pl. vibrios), and spiral Spirillum (pl. spirilla).",
      "Option A is rod-shaped. Option C is spiral. Option D is comma-shaped.",
      "bio-kingdom-monera", "Coccus Shape")

    q(5, "Rod-shaped bacteria are called:",
      "Cocci", "Bacilli", "Spirilla", "Vibrios",
      "B", "Bacillus shape.",
      "1. Rod-shaped bacteria are called bacilli (singular: bacillus), e.g., *Lactobacillus* and *Bacillus anthracis*.",
      "Option A is spherical. Option C is spiral. Option D is comma-shaped.",
      "bio-kingdom-monera", "Bacillus Shape")

    q(6, "Comma-shaped bacteria are designated as:",
      "Vibrio", "Bacillus", "Coccus", "Spirillum",
      "A", "Vibrio shape.",
      "1. Comma-shaped bacteria are called vibrios (e.g., *Vibrio cholerae*).",
      "Options B, C, and D represent rod, sphere, and spiral shapes respectively.",
      "bio-kingdom-monera", "Vibrio Shape")

    q(7, "Spiral-shaped bacteria with flagella are called:",
      "Spirillum", "Coccus", "Bacillus", "Vibrio",
      "A", "Spirillum shape.",
      "1. Spiral-shaped bacteria are called spirilla (singular: spirillum).",
      "Options B, C, and D are spherical, rod-shaped, and comma-shaped.",
      "bio-kingdom-monera", "Spirillum Shape")

    q(8, "Which group of bacteria lives in the most extreme salty environments?",
      "Thermoacidophiles", "Halophiles", "Methanogens", "Cyanobacteria",
      "B", "Halophiles habitat.",
      "1. Archaebacteria that thrive in extreme saline environments (high salt concentration, like the Dead Sea or salt pans) are called Halophiles.",
      "Option A lives in hot acidic springs. Option C lives in marshy areas and ruminant guts. Option D lives in normal aquatic environments.",
      "bio-kingdom-monera", "Halophiles Habitat")

    q(9, "Archaebacteria found in hot sulphur springs (temperatures ~80°C and pH ~2) are called:",
      "Halophiles", "Thermoacidophiles", "Methanogens", "Lactobacilli",
      "B", "Thermoacidophiles definition.",
      "1. Archaebacteria that inhabit hot, acidic sulphur springs are known as Thermoacidophiles (*Sulfolobus*, *Thermoplasma*).",
      "Option A lives in high salt. Option C lives in marshes. Option D lives in milk/curd.",
      "bio-kingdom-monera", "Thermoacidophiles")

    q(10, "Methanogens are archaebacteria that inhabit:",
      "The guts of several ruminant animals such as cows and buffaloes",
      "Deep sea volcanic trenches only",
      "Frozen ice sheets of Antarctica",
      "Dry desert sand dunes",
      "A", "Methanogens habitat.",
      "1. Methanogens are present in the gut of several ruminant animals such as cows and buffaloes, and they are responsible for the production of biogas (methane) from animal dung.",
      "Options B, C, and D are incorrect habitats for methanogens.",
      "bio-kingdom-monera", "Methanogens Habitat")

    q(11, "How do Archaebacteria differ from other bacteria (Eubacteria)?",
      "They have a different cell wall structure that enables them to survive extreme conditions",
      "They have true eukaryotic nuclei",
      "They reproduce by mitosis",
      "They contain chloroplasts identical to flowering plants",
      "A", "Archaebacteria cell wall difference.",
      "1. NCERT states: 'Archaebacteria differ from other bacteria in having a different cell wall structure and this feature is responsible for their survival in extreme conditions.'\n2. Their cell walls lack peptidoglycan, and their membranes possess branched-chain ether-linked lipids.",
      "Options B, C, and D are false (archaebacteria are prokaryotes).",
      "bio-kingdom-monera", "Archaebacteria Cell Wall")

    q(12, "Eubacteria are also referred to as:",
      "'True bacteria'", "'False bacteria'", "Protists", "Slime moulds",
      "A", "Eubacteria true bacteria.",
      "1. Eubacteria are known as 'true bacteria'. They are characterized by the presence of a rigid cell wall, and if motile, a flagellum.",
      "Option B is contrary. Options C and D are eukaryotic protists.",
      "bio-kingdom-monera", "Eubacteria Definition")

    q(13, "Cyanobacteria are commonly known as:",
      "Blue-green algae (BGA)", "Brown algae", "Red algae", "Golden algae",
      "A", "Cyanobacteria common name.",
      "1. Cyanobacteria are also referred to as blue-green algae (BGA). They are photosynthetic prokaryotes possessing chlorophyll a.",
      "Option B is Phaeophyceae. Option C is Rhodophyceae. Option D is Desmids (Chrysophytes).",
      "bio-kingdom-monera", "Cyanobacteria BGA")

    q(14, "Which photosynthetic pigment is present in Cyanobacteria that is similar to green plants?",
      "Chlorophyll a", "Chlorophyll b only", "Fucoxanthin only", "Phycobilin only",
      "A", "Chlorophyll a in Cyanobacteria.",
      "1. NCERT explicitly states: 'The cyanobacteria (also referred to as blue-green algae) have chlorophyll a similar to green plants and are photosynthetic autotrophs.'",
      "Options B, C, and D are accessory pigments or absent in cyanobacteria.",
      "bio-kingdom-monera", "Cyanobacteria Chlorophyll a")

    q(15, "Specialized nitrogen-fixing cells present in filamentous cyanobacteria like Nostoc and Anabaena are called:",
      "Heterocysts", "Akinetes", "Trichomes", "Hormogonia",
      "A", "Heterocysts in cyanobacteria.",
      "1. Some cyanobacteria can fix atmospheric nitrogen in specialized, thick-walled, oxygen-impermeable cells called heterocysts (e.g., *Nostoc* and *Anabaena*).",
      "Option B is resting spores. Option C is the filamentous body. Option D is reproductive fragments.",
      "bio-kingdom-monera", "Heterocysts Nitrogen Fixation")

    q(16, "Cyanobacteria colonies are generally surrounded by a:",
      "Gelatinous / mucilaginous sheath", "Cellulose cell wall only", "Chitinous exoskeleton", "Silica shell",
      "A", "Cyanobacteria gelatinous sheath in NCERT.",
      "1. NCERT states: 'The colonies are generally surrounded by gelatinous sheath. They often form blooms in polluted water bodies.'",
      "Options B, C, and D describe plant, fungal, or diatom outer coverings.",
      "bio-kingdom-monera", "Gelatinous Sheath")

    q(17, "Chemosynthetic autotrophic bacteria obtain energy by:",
      "Oxidizing various inorganic substances such as nitrates, nitrites, and ammonia",
      "Absorbing sunlight via chlorophyll a",
      "Consuming dead leaves",
      "Predating on smaller bacteria",
      "A", "Chemosynthetic bacteria energy source.",
      "1. Chemosynthetic autotrophic bacteria oxidize various inorganic substances such as nitrates, nitrites, and ammonia, and use the released chemical energy for their ATP production.",
      "Option B describes photosynthetic autotrophs. Option C describes saprophytes. Option D describes predators.",
      "bio-kingdom-monera", "Chemosynthetic Energy")

    q(18, "Which group of bacteria plays a great role in recycling nutrients like nitrogen, phosphorus, iron, and sulphur?",
      "Chemosynthetic autotrophic bacteria", "Mycoplasma", "Methanogens", "Halophiles",
      "A", "Nutrient recycling by chemosynthetic bacteria in NCERT.",
      "1. NCERT explicitly states: 'Chemosynthetic autotrophic bacteria play a great role in recycling nutrients like nitrogen, phosphorus, iron and sulphur.'",
      "Options B, C, and D do not perform this generalized biogeochemical recycling role described in NCERT.",
      "bio-kingdom-monera", "Nutrient Recycling Bacteria")

    q(19, "Which of the following bacteria is widely used in making curd from milk?",
      "Lactobacillus", "Streptomyces", "Rhizobium", "Vibrio",
      "A", "Curd making bacteria.",
      "1. Lactic acid bacteria (LAB) such as *Lactobacillus* convert lactose sugar in milk into lactic acid, coagulating milk proteins to form curd.",
      "Option B produces antibiotics. Option C fixes nitrogen in legumes. Option D causes cholera.",
      "bio-kingdom-monera", "Lactobacillus Curd")

    q(20, "Which of the following human diseases is NOT caused by a bacterium?",
      "Cholera", "Typhoid", "Tetanus", "Influenza",
      "D", "Bacterial diseases in NCERT.",
      "1. NCERT lists: 'Cholera, typhoid, tetanus, citrus canker are well known diseases caused by different bacteria.'\n2. Influenza (flu) is caused by the influenza virus, NOT a bacterium.",
      "Options A, B, and C are bacterial diseases (*Vibrio cholerae*, *Salmonella typhi*, *Clostridium tetani*).",
      "bio-kingdom-monera", "Bacterial vs Viral Disease")

    q(21, "Citrus canker is a plant disease caused by:",
      "A bacterium (Xanthomonas axonopodis pv. citri)", "A virus", "A protozoan", "A fungus",
      "A", "Citrus canker causation.",
      "1. Citrus canker is a devastating bacterial disease of citrus trees caused by *Xanthomonas axonopodis* pv. *citri* (or *Xanthomonas citri*), as cited in NCERT.",
      "Options B, C, and D are incorrect pathogens.",
      "bio-kingdom-monera", "Citrus Canker Pathogen")

    q(22, "Bacteria reproduce mainly by the process of:",
      "Binary fission", "Budding", "Spore formation", "Fragmentation",
      "A", "Bacterial binary fission.",
      "1. NCERT explicitly states: 'Bacteria reproduce mainly by fission. Sometimes, under unfavourable conditions, they produce spores.'",
      "Options B, C, and D are secondary or restricted mechanisms.",
      "bio-kingdom-monera", "Bacterial Fission")

    q(23, "Under unfavourable conditions, bacteria survive by producing:",
      "Endospores", "Zoospores", "Ascospores", "Conidia",
      "A", "Bacterial endospores in NCERT.",
      "1. Under harsh, nutrient-depleted, or desiccation conditions, bacteria produce highly resistant, dehydrated endospores encased in dipicolinic acid-calcium complexes.",
      "Options B, C, and D are eukaryotic fungal or algal spores.",
      "bio-kingdom-monera", "Bacterial Endospores")

    q(24, "Which of the following organisms are the smallest living cells known, completely lacking a cell wall?",
      "Mycoplasma", "Nostoc", "E. coli", "Bacillus",
      "A", "Mycoplasma characteristics in NCERT.",
      "1. NCERT verbatim: 'The Mycoplasma are organisms that completely lack a cell wall. They are the smallest living cells known and can survive without oxygen.'",
      "Options B, C, and D possess rigid peptidoglycan cell walls.",
      "bio-kingdom-monera", "Mycoplasma Cell Wall")

    q(25, "Mycoplasmas are pathogenic in:",
      "Animals only", "Plants only", "Both plants and animals", "Neither plants nor animals",
      "C", "Mycoplasma pathogenicity.",
      "1. NCERT explicitly states: 'Many mycoplasma are pathogenic in animals and plants.'\n2. They cause atypical pneumonia in humans and witches' broom in plants.",
      "Options A, B, and D are incorrect.",
      "bio-kingdom-monera", "Mycoplasma Pathogenicity")

    q(26, "Can Mycoplasma survive in the total absence of oxygen?",
      "Yes, they can survive without oxygen (facultative/obligate anaerobes)",
      "No, they are obligate aerobes",
      "Only for 2 seconds",
      "Only when exposed to boiling water",
      "A", "Mycoplasma anaerobic survival.",
      "1. NCERT verbatim states that Mycoplasma 'can survive without oxygen.'",
      "Options B, C, and D contradict established biology.",
      "bio-kingdom-monera", "Mycoplasma Anaerobic")

    q(27, "Carl Woese divided all life into how many domains in the Three-Domain system?",
      "3 domains (Archaea, Bacteria, Eukarya)", "5 domains", "2 domains", "6 domains",
      "A", "Carl Woese Three Domains.",
      "1. Carl Woese proposed the Three-Domain System based on 16S rRNA gene sequences:\n- Domain Archaea\n- Domain Bacteria\n- Domain Eukarya.",
      "Options B, C, and D confuse domains with kingdoms.",
      "bio-kingdom-monera", "Three Domains Woese")

    q(28, "In Whittaker's Five Kingdom Classification, which kingdom contains ALL prokaryotic organisms?",
      "Monera", "Protista", "Fungi", "Plantae",
      "A", "Monera as sole prokaryotes.",
      "1. Kingdom Monera is the only kingdom containing prokaryotic organisms (lacking nuclear membrane and membrane-bound organelles).\n2. All other four kingdoms (Protista, Fungi, Plantae, Animalia) are eukaryotic.",
      "Options B, C, and D are eukaryotic.",
      "bio-kingdom-monera", "Monera Sole Prokaryotes")

    q(29, "Most bacteria are:",
      "Photosynthetic autotrophs", "Chemosynthetic autotrophs", "Heterotrophs", "Viruses",
      "C", "Heterotrophic dominance in bacteria.",
      "1. NCERT explicitly states: 'The vast majority of bacteria are heterotrophs, i.e., they depend on other organisms or on dead organic matter for food.'",
      "Options A and B represent specialized minorities. Option D is a non-cellular entity.",
      "bio-kingdom-monera", "Bacterial Heterotrophy")

    q(30, "Biogas (gobar gas) is produced by the metabolic activity of which archaebacteria on animal dung?",
      "Methanogens", "Halophiles", "Thermoacidophiles", "Cyanobacteria",
      "A", "Methanogens biogas.",
      "1. Methanogens (*Methanobacterium*) anaerobically digest cellulosic animal dung, producing methane (CH4) gas, which is the primary constituent of biogas.",
      "Options B, C, and D do not produce methane.",
      "bio-kingdom-monera", "Methanogens Biogas")

    q(31, "The genetic material of bacteria consists of:",
      "A naked, circular, double-stranded DNA chromosome without histones",
      "Linear DNA wrapped around octamer histones inside a nuclear membrane",
      "Single-stranded RNA only",
      "Protein without nucleic acids",
      "A", "Bacterial nucleoid structure.",
      "1. Bacterial genetic material consists of a single circular double-stranded DNA molecule located in the cytoplasm in an unmembrane-bound region called the nucleoid, lacking basic histone proteins.",
      "Option B describes eukaryotic chromosomes. Option C is typical of RNA viruses. Option D is a prion.",
      "bio-kingdom-monera", "Bacterial Genetic Material")

    # --- TOPIC 2: bio-kingdom-protista (Q32 - Q62) ---
    q(32, "All single-celled eukaryotic organisms are grouped under which kingdom in Whittaker's system?",
      "Monera", "Protista", "Fungi", "Plantae",
      "B", "Protista kingdom boundary in NCERT.",
      "1. NCERT states: 'All single-celled eukaryotes are placed under Protista, but the boundaries of this kingdom are not well defined.'",
      "Option A contains prokaryotes. Options C and D contain primarily multicellular eukaryotes.",
      "bio-kingdom-protista", "Protista Definition")

    q(33, "Which of the following groups is NOT included under Kingdom Protista in NCERT?",
      "Chrysophytes", "Dinoflagellates", "Cyanobacteria", "Euglenoids",
      "C", "Cyanobacteria in Monera.",
      "1. Cyanobacteria are prokaryotes and belong to Kingdom Monera.\n2. Protista includes Chrysophytes, Dinoflagellates, Euglenoids, Slime moulds, and Protozoans.",
      "Options A, B, and D are authentic protistan groups.",
      "bio-kingdom-protista", "Protista Groups Check")

    q(34, "Chrysophytes include which of the following organisms?",
      "Diatoms and golden algae (desmids)", "Euglena and Amoeba", "Gonyaulax and Paramecium", "Slime moulds and fungi",
      "A", "Chrysophytes constituents in NCERT.",
      "1. NCERT states: 'This group includes diatoms and golden algae (desmids). They are found in fresh water as well as in marine environments.'",
      "Options B, C, and D combine members of different protistan groups.",
      "bio-kingdom-protista", "Chrysophytes Members")

    q(35, "Which organisms are known as the 'chief producers in the oceans'?",
      "Diatoms", "Dinoflagellates", "Euglenoids", "Cyanobacteria",
      "A", "Diatoms chief ocean producers in NCERT.",
      "1. NCERT explicitly states: 'Diatoms are the chief \"producers\" in the oceans.'\n2. Due to their immense abundance and photosynthetic capacity, they form the trophic base of marine food webs.",
      "Options B, C, and D are producers, but diatoms hold this explicit title in NCERT.",
      "bio-kingdom-protista", "Chief Ocean Producers")

    q(36, "In diatoms, the cell walls form two thin overlapping shells which fit together like a:",
      "Soap box", "Lock and key", "Pencil box", "Watch glass",
      "A", "Diatom soap box analogy in NCERT.",
      "1. NCERT states: 'In diatoms the cell walls form two thin overlapping shells, which fit together as in a soap box.'\n2. The upper larger valve is the epitheca, and the lower smaller valve is the hypotheca.",
      "Options B, C, and D are incorrect analogies.",
      "bio-kingdom-protista", "Diatom Soap Box")

    q(37, "The walls of diatoms are embedded with ________, which makes them indestructible.",
      "Silica", "Cellulose only", "Chitin", "Calcium carbonate",
      "A", "Diatom silica walls.",
      "1. Diatom frustules are impregnated with hydrated silicon dioxide (silica), making their walls indestructible and resistant to chemical decay.",
      "Option B is in plants. Option C is in fungi. Option D is in foraminiferans.",
      "bio-kingdom-protista", "Diatom Silica")

    q(38, "Accumulation of diatom cell wall deposits over billions of years on the ocean bed is referred to as:",
      "Diatomaceous earth (Kieselguhr)", "Coral reefs", "Peat moss", "Biogas slurry",
      "A", "Diatomaceous earth definition in NCERT.",
      "1. NCERT states: 'Diatoms have left behind large amount of cell wall deposits in their habitat; this accumulation over billions of years is referred to as \"diatomaceous earth\".'",
      "Option B is formed by cnidarians. Option C is formed by *Sphagnum*. Option D is decomposed dung.",
      "bio-kingdom-protista", "Diatomaceous Earth")

    q(39, "Being gritty, diatomaceous earth is commercially used in:",
      "Polishing and filtration of oils and syrups", "Making plastics", "Producing penicillin", "Manufacturing explosives only",
      "A", "Diatomaceous earth commercial uses in NCERT.",
      "1. NCERT states: 'Being gritty this soil is used in polishing, filtration of oils and syrups.'",
      "Options B, C, and D are unrelated industrial processes.",
      "bio-kingdom-protista", "Diatomaceous Earth Uses")

    q(40, "Dinoflagellates possess a cell wall characterized by:",
      "Stiff cellulose plates on the outer surface", "A flexible proteinaceous pellicle", "Silica frustules", "Peptidoglycan",
      "A", "Dinoflagellate cell wall in NCERT.",
      "1. NCERT states: 'Most of them have stiff cellulose plates on the outer surface.'\n2. This gives dinoflagellates their characteristic armored/plated appearance.",
      "Option B is found in Euglenoids. Option C is in Diatoms. Option D is in Eubacteria.",
      "bio-kingdom-protista", "Dinoflagellate Cell Wall")

    q(41, "How many flagella do dinoflagellates typically possess?",
      "Two flagella (one longitudinal and one transverse in a furrow)", "One flagellum only", "Thousands of cilia", "No flagella",
      "A", "Dinoflagellate flagella arrangement.",
      "1. Dinoflagellates typically have two flagella: one lies longitudinally, and the other transversely in a furrow between the stiff wall plates.",
      "Option B describes typical euglenoid visible flagella. Option C describes ciliates. Option D describes diatoms.",
      "bio-kingdom-protista", "Dinoflagellate Flagella")

    q(42, "Red tides in the sea are caused by rapid population explosions of which red dinoflagellate?",
      "Gonyaulax", "Euglena", "Paramecium", "Plasmodium",
      "A", "Gonyaulax red tides in NCERT.",
      "1. NCERT states: 'Red dinoflagellates (Example: Gonyaulax) undergo such rapid multiplication that they make the sea appear red (red tides).'\n2. Toxins released by such large numbers may even kill other marine animals such as fishes.",
      "Options B, C, and D are other protists that do not cause red tides.",
      "bio-kingdom-protista", "Gonyaulax Red Tides")

    q(43, "Instead of a rigid cell wall, Euglenoids have a protein-rich flexible layer called:",
      "Pellicle", "Capsule", "Mucilage", "Cuticle",
      "A", "Euglenoid pellicle in NCERT.",
      "1. NCERT states: 'Instead of a cell wall, they have a protein rich layer called pellicle which makes their body flexible.'",
      "Option B is in bacteria. Option C is in cyanobacteria. Option D is in plant leaves.",
      "bio-kingdom-protista", "Euglenoid Pellicle")

    q(44, "The mode of nutrition exhibited by Euglena is:",
      "Mixotrophic (photosynthetic in sunlight, heterotrophic predator in the dark)",
      "Exclusively parasitic",
      "Exclusively saprophytic",
      "Chemosynthetic",
      "A", "Mixotrophic nutrition in Euglena.",
      "1. *Euglena* is mixotrophic: in the presence of sunlight it carries out photosynthesis; when sunlight is absent, it feeds heterotrophically by predating on smaller organisms.",
      "Options B, C, and D do not describe this dual lifestyle.",
      "bio-kingdom-protista", "Euglena Mixotrophic")

    q(45, "The photosynthetic pigments of euglenoids are identical to those present in:",
      "Higher plants (chlorophyll a and b)", "Red algae", "Brown algae", "Cyanobacteria only",
      "A", "Euglenoid pigments in NCERT.",
      "1. NCERT explicitly states: 'Interestingly, the pigments of euglenoids are identical to those present in higher plants.'\n2. Both possess chlorophyll a and chlorophyll b.",
      "Options B, C, and D have distinct combinations with phycobilins or fucoxanthin.",
      "bio-kingdom-protista", "Euglenoid Pigments")

    q(46, "Under suitable conditions, slime moulds form an aggregation called:",
      "Plasmodium", "Pseudopodium", "Protonema", "Mycelium",
      "A", "Slime mould plasmodium in NCERT.",
      "1. Under favorable conditions, slime moulds form an aggregation called plasmodium which may grow and spread over several feet.\n2. Note: This plasmodium is not to be confused with the malarial genus *Plasmodium*.",
      "Option B is an amoebic foot. Option C is a moss stage. Option D is fungal threads.",
      "bio-kingdom-protista", "Slime Mould Plasmodium")

    q(47, "Under unfavourable conditions, the plasmodium of slime moulds differentiates to form:",
      "Fruiting bodies bearing spores at their tips", "Flagellated gametes", "Hard silica shells", "Cellulose plates",
      "A", "Slime mould fruiting bodies in NCERT.",
      "1. NCERT states: 'During unfavourable conditions, the plasmodium differentiates and forms fruiting bodies bearing spores at their tips.'",
      "Options B, C, and D are incorrect.",
      "bio-kingdom-protista", "Slime Mould Fruiting Bodies")

    q(48, "The spores of slime moulds possess true cell walls composed of:",
      "Cellulose", "Chitin", "Silica", "Peptidoglycan",
      "A", "Slime mould spore cell wall.",
      "1. While the vegetative plasmodium lacks any cell wall, the spores possess true, tough cell walls composed of cellulose, enabling them to survive harsh conditions for years.",
      "Option B is in fungi. Option C is in diatoms. Option D is in bacteria.",
      "bio-kingdom-protista", "Slime Mould Spore Wall")

    q(49, "Spores of slime moulds are extremely resistant to adverse conditions and are dispersed by:",
      "Air currents", "Water currents only", "Bats", "Insects only",
      "A", "Slime mould spore dispersal in NCERT.",
      "1. NCERT explicitly notes: 'The spores are dispersed by air currents.'",
      "Options B, C, and D are not the standard vector cited in NCERT.",
      "bio-kingdom-protista", "Slime Mould Spore Dispersal")

    q(50, "All protozoans are:",
      "Heterotrophs that live as predators or parasites", "Autotrophs", "Prokaryotes", "Acellular",
      "A", "Protozoan nutrition in NCERT.",
      "1. NCERT states: 'All protozoans are heterotrophs and live as predators or parasites. They are believed to be primitive relatives of animals.'",
      "Option B is false (protozoans lack chlorophyll). Option C is false (they are eukaryotic). Option D describes viruses.",
      "bio-kingdom-protista", "Protozoan Nutrition")

    q(51, "Which of the following is an amoeboid protozoan that moves and captures prey using pseudopodia?",
      "Amoeba", "Trypanosoma", "Paramecium", "Plasmodium",
      "A", "Amoeba pseudopodia.",
      "1. *Amoeba* puts out pseudopodia (false feet) to move and capture food.\n2. *Trypanosoma* is flagellated, *Paramecium* is ciliated, and *Plasmodium* is a sporozoan.",
      "Options B, C, and D belong to the other three protozoan groups.",
      "bio-kingdom-protista", "Amoeboid Protozoan")

    q(52, "Entamoeba histolytica is an endoparasite in humans belonging to which protozoan group?",
      "Amoeboid protozoans", "Flagellated protozoans", "Ciliated protozoans", "Sporozoans",
      "A", "Entamoeba group.",
      "1. *Entamoeba* is an amoeboid protozoan that lives as a parasite in the human large intestine, causing amoebic dysentery.",
      "Options B, C, and D are different protozoan classes.",
      "bio-kingdom-protista", "Entamoeba Classification")

    q(53, "Which of the following flagellated protozoans is responsible for causing the disease 'sleeping sickness'?",
      "Trypanosoma", "Entamoeba", "Paramecium", "Plasmodium",
      "A", "Trypanosoma sleeping sickness in NCERT.",
      "1. NCERT explicitly states: 'The parasitic forms cause diseases such as sleeping sickness. Example: Trypanosoma.'",
      "Option B causes amoebiasis. Option C is a ciliate. Option D causes malaria.",
      "bio-kingdom-protista", "Trypanosoma Sleeping Sickness")

    q(54, "Which ciliated protozoan has a gullet (cavity) that opens to the outside and moves actively using thousands of cilia?",
      "Paramecium", "Euglena", "Amoeba", "Trypanosoma",
      "A", "Paramecium ciliate.",
      "1. *Paramecium* is an aquatic ciliated protozoan having a gullet (cytopharynx); the coordinated beating of rows of cilia steers water laden with food into the gullet.",
      "Options B, C, and D are euglenoids, amoeboids, or flagellates.",
      "bio-kingdom-protista", "Paramecium Ciliate")

    q(55, "Which protozoan group includes organisms having an infectious spore-like stage in their life cycle?",
      "Sporozoans", "Amoeboids", "Flagellates", "Ciliates",
      "A", "Sporozoans definition in NCERT.",
      "1. NCERT states: 'This includes diverse organisms that have an infectious spore-like stage in their life cycle. The most notorious is Plasmodium (malarial parasite).'",
      "Options B, C, and D have distinct locomotory organelles (pseudopodia, flagella, cilia).",
      "bio-kingdom-protista", "Sporozoans Definition")

    q(56, "The malarial parasite Plasmodium belongs to which group of protozoans?",
      "Sporozoans", "Amoeboid protozoans", "Flagellated protozoans", "Ciliated protozoans",
      "A", "Plasmodium sporozoan.",
      "1. *Plasmodium* (the causative agent of malaria in humans) is a sporozoan lacking locomotory organelles in its adult trophic stage.",
      "Options B, C, and D are incorrect.",
      "bio-kingdom-protista", "Plasmodium Sporozoan")

    q(57, "Marine amoeboid protozoans possess which structural feature on their surface?",
      "Silica shells", "Cellulose plates", "Pellicle of keratin", "Chitinous hairs",
      "A", "Marine amoeboid silica shells in NCERT.",
      "1. NCERT states: 'Marine forms have silica shells on their surface.' (e.g., Radiolarians).",
      "Option B is in dinoflagellates. Option C is an animal protein. Option D is in insects.",
      "bio-kingdom-protista", "Marine Amoeboid Silica")

    q(58, "How do diatoms float in water currents?",
      "Passively as plankton", "Actively by beating two long flagella", "Using cilia", "Using gas jet propulsion",
      "A", "Diatom passive planktonic floating.",
      "1. NCERT states: 'They are microscopic and float passively in water currents (plankton).'",
      "Options B, C, and D are false (vegetative diatoms lack flagella and cilia).",
      "bio-kingdom-protista", "Diatom Planktonic Floating")

    q(59, "Which of the following protists is bioluminescent and produces a 'sea sparkle' effect?",
      "Noctiluca (Dinoflagellate)", "Amoeba", "Euglena", "Paramecium",
      "A", "Noctiluca bioluminescence.",
      "1. *Noctiluca scintillans* is a marine dinoflagellate that produces striking green-blue bioluminescence via luciferin-luciferase reactions when disturbed by waves.",
      "Options B, C, and D do not produce bioluminescent blooms.",
      "bio-kingdom-protista", "Noctiluca Bioluminescence")

    q(60, "The photoreceptive red pigment spot located near the flagellar base in Euglena is called the:",
      "Eyespot (Stigma)", "Contractile vacuole", "Heterocyst", "Paramylon body",
      "A", "Euglena eyespot.",
      "1. The eyespot (stigma) contains carotenoid pigments (astaxanthin) and acts as a light shield for the photoreceptor, orienting *Euglena* toward optimal light (phototaxis).",
      "Option B regulates osmoregulation. Option C fixes nitrogen in cyanobacteria. Option D stores reserve carbohydrate.",
      "bio-kingdom-protista", "Euglena Eyespot")

    q(61, "Contractile vacuoles in freshwater protozoans like Amoeba and Paramecium function primarily in:",
      "Osmoregulation and excretion", "Digestion of protein", "Photosynthesis", "Locomotion",
      "A", "Contractile vacuole function.",
      "1. The contractile vacuole collects excess water entering the hypotonic freshwater protozoan and pumps it out to prevent osmotic swelling and cell lysis (osmoregulation).",
      "Option B is done by food vacuoles. Option C is absent in protozoans. Option D is done by pseudopodia/cilia.",
      "bio-kingdom-protista", "Contractile Vacuole Osmoregulation")

    q(62, "The reserve food material stored in Euglena is:",
      "Paramylon (a beta-1,3-glucan polymer)", "True plant starch", "Glycogen", "Floridean starch",
      "A", "Euglena reserve food paramylon.",
      "1. Euglenoids store carbohydrate reserves in the cytoplasm as paramylon bodies (a specialized β-1,3-glucan), distinct from true α-glucan plant starch.",
      "Option B is in higher plants. Option C is in animals and fungi. Option D is in red algae.",
      "bio-kingdom-protista", "Paramylon Reserve")

    # --- TOPIC 3: bio-kingdom-fungi (Q63 - Q93) ---
    q(63, "The cell walls of fungi are composed of:",
      "Chitin and polysaccharides (glucans)", "Cellulose and pectin", "Peptidoglycan", "Silica",
      "A", "Fungal cell wall composition in NCERT.",
      "1. NCERT states: 'The cell walls of fungi are composed of chitin and polysaccharides.'\n2. Chitin is a polymer of N-acetylglucosamine (NAG).",
      "Option B is found in plants. Option C is found in bacteria. Option D is found in diatoms.",
      "bio-kingdom-fungi", "Fungal Cell Wall Chitin")

    q(64, "A network of fungal hyphae is known as:",
      "Mycelium", "Trichome", "Protonema", "Plasmodium",
      "A", "Mycelium definition in NCERT.",
      "1. NCERT states: 'Their bodies consist of long, slender thread-like structures called hyphae. The network of hyphae is known as mycelium.'",
      "Option B is a bacterial/algal filament. Option C is a moss juvenile stage. Option D is a slime mould aggregation.",
      "bio-kingdom-fungi", "Mycelium Definition")

    q(65, "Hyphae that are continuous tubes filled with multinucleated cytoplasm without cross-walls are called:",
      "Coenocytic hyphae", "Septate hyphae", "Monokaryotic hyphae", "Secondary mycelium",
      "A", "Coenocytic hyphae in NCERT.",
      "1. NCERT states: 'Some hyphae are continuous tubes filled with multinucleated cytoplasm — these are called coenocytic hyphae.'\n2. They are typical of Phycomycetes.",
      "Option B has cross-walls. Options C and D are septate dikaryotic or monokaryotic phases.",
      "bio-kingdom-fungi", "Coenocytic Hyphae")

    q(66, "Which of the following is a UNICELLULAR fungus used extensively in baking and brewing?",
      "Yeast (Saccharomyces cerevisiae)", "Penicillium", "Agaricus", "Rhizopus",
      "A", "Yeast unicellular fungus in NCERT.",
      "1. Yeasts (*Saccharomyces*) are atypical unicellular fungi used in bread making and alcohol fermentation.\n2. Most other fungi are multicellular and filamentous.",
      "Options B, C, and D are multicellular filamentous fungi.",
      "bio-kingdom-fungi", "Unicellular Yeast")

    q(67, "Fungi that absorb soluble organic matter from dead substrates are called:",
      "Saprophytes", "Parasites", "Symbionts", "Autotrophs",
      "A", "Fungal saprophytes in NCERT.",
      "1. NCERT states: 'Most fungi absorb soluble organic matter from dead substrates and hence are called saprophytes.'",
      "Option B feeds on living hosts. Option C lives in mutual partnerships. Option D synthesizes its own food.",
      "bio-kingdom-fungi", "Fungal Saprophytes")

    q(68, "A symbiotic association between a fungus and the roots of higher plants is called a:",
      "Mycorrhiza", "Lichen", "Haustorium", "Gemma cup",
      "A", "Mycorrhiza definition in NCERT.",
      "1. NCERT states: 'They can also live as symbionts — in association with algae as lichens and with roots of higher plants as mycorrhiza (e.g. Pinus).'",
      "Option B is fungus + alga. Option C is a parasitic absorbing organ. Option D is a liverwort asexual structure.",
      "bio-kingdom-fungi", "Mycorrhiza Definition")

    q(69, "The three sequential stages of the sexual cycle in fungi are:",
      "Plasmogamy -> Karyogamy -> Meiosis", "Karyogamy -> Plasmogamy -> Meiosis", "Meiosis -> Plasmogamy -> Karyogamy", "Mitosis -> Plasmogamy -> Budding",
      "A", "Three steps of fungal sexual cycle in NCERT.",
      "1. NCERT lists the three steps:\n- (i) Fusion of protoplasms between two motile or non-motile gametes called plasmogamy.\n- (ii) Fusion of two nuclei called karyogamy.\n- (iii) Meiosis in zygote resulting in haploid spores.",
      "Options B, C, and D are incorrectly ordered.",
      "bio-kingdom-fungi", "Fungal Sexual Cycle Steps")

    q(70, "What is 'dikaryophase' in fungal reproduction?",
      "A condition where two nuclei per cell (n + n) persist before nuclear fusion occurs",
      "The division of a nucleus into two halves",
      "The formation of two flagella",
      "The germination of two spores together",
      "A", "Dikaryophase definition in NCERT.",
      "1. NCERT states: 'In other fungi (ascomycetes and basidiomycetes), an intervening dikaryotic stage (n + n, i.e., two nuclei per cell) occurs; such a condition is called a dikaryon and the phase is called dikaryophase of fungus.'",
      "Options B, C, and D are incorrect.",
      "bio-kingdom-fungi", "Dikaryophase Definition")

    q(71, "Which class of fungi is characterized by aseptate, coenocytic mycelium?",
      "Phycomycetes", "Ascomycetes", "Basidiomycetes", "Deuteromycetes",
      "A", "Phycomycetes aseptate coenocytic.",
      "1. In Phycomycetes, the mycelium is aseptate and coenocytic.\n2. In Ascomycetes, Basidiomycetes, and Deuteromycetes, the mycelium is branched and septate.",
      "Options B, C, and D possess septate mycelium.",
      "bio-kingdom-fungi", "Phycomycetes Aseptate")

    q(72, "Rhizopus is commonly known as the:",
      "Bread mould", "Mushroom", "Rust fungus", "Smut fungus",
      "A", "Rhizopus bread mould.",
      "1. *Rhizopus stolonifer* is the common black bread mould, belonging to Phycomycetes.",
      "Option B is *Agaricus*. Option C is *Puccinia*. Option D is *Ustilago*.",
      "bio-kingdom-fungi", "Rhizopus Bread Mould")

    q(73, "Albugo is a parasitic fungus that causes white rust on:",
      "Mustard", "Wheat", "Mango", "Rice",
      "A", "Albugo on mustard in NCERT.",
      "1. NCERT explicitly notes: 'Albugo (the parasitic fungi on mustard)' causes white rust of crucifers.",
      "Option B is attacked by *Puccinia*. Options C and D are attacked by other pathogens.",
      "bio-kingdom-fungi", "Albugo Mustard")

    q(74, "Ascomycetes are commonly known as:",
      "Sac fungi", "Club fungi", "Imperfect fungi", "Water moulds",
      "A", "Ascomycetes sac fungi in NCERT.",
      "1. Ascomycetes are commonly called 'sac fungi' because their sexual spores (ascospores) are produced inside sac-like structures called asci.",
      "Option B is Basidiomycetes. Option C is Deuteromycetes. Option D is Oomycetes.",
      "bio-kingdom-fungi", "Ascomycetes Sac Fungi")

    q(75, "Asexual spores in Ascomycetes are called ________ and are produced ________ on conidiophores.",
      "Conidia, exogenously", "Ascospores, endogenously", "Zoospores, exogenously", "Basidiospores, endogenously",
      "A", "Conidia exogenous production in NCERT.",
      "1. NCERT states: 'Asexual spores are conidia produced exogenously on the special mycelium called conidiophores.'",
      "Option B are sexual spores. Option C is in Phycomycetes. Option D is incorrect (basidiospores are exogenous).",
      "bio-kingdom-fungi", "Conidia Exogenous")

    q(76, "Sexual spores in Ascomycetes are called ________ and are produced ________ inside asci.",
      "Ascospores, endogenously", "Conidia, exogenously", "Basidiospores, exogenously", "Oospores, endogenously",
      "A", "Ascospores endogenous production in NCERT.",
      "1. NCERT states: 'Sexual spores are called ascospores which are produced endogenously in sac like asci (sing. ascus).'",
      "Option B is asexual spores. Option C is in Basidiomycetes. Option D is in oomycetes.",
      "bio-kingdom-fungi", "Ascospores Endogenous")

    q(77, "Which fungus is used extensively in biochemical and genetic research, often referred to as the 'Drosophila of the plant kingdom'?",
      "Neurospora", "Penicillium", "Claviceps", "Rhizopus",
      "A", "Neurospora genetics in NCERT.",
      "1. NCERT explicitly states: 'Neurospora is used extensively in biochemical and genetic work.'\n2. Beadle and Tatum used *Neurospora crassa* to propose the 'One Gene - One Enzyme' hypothesis.",
      "Options B, C, and D are used for antibiotics, ergot, or bread production.",
      "bio-kingdom-fungi", "Neurospora Genetics")

    q(78, "Morels (Morchella) and truffles are members of Ascomycetes that are considered:",
      "Edible delicacies", "Poisonous toadstools", "Plant pathogens causing rust", "Bacterial parasites",
      "A", "Morels and truffles edible delicacies in NCERT.",
      "1. NCERT explicitly states: 'Many members like morels and truffles are edible and are considered delicacies.'",
      "Options B, C, and D are incorrect.",
      "bio-kingdom-fungi", "Morels and Truffles Edible")

    q(79, "Basidiomycetes are commonly known as:",
      "Club fungi", "Sac fungi", "Imperfect fungi", "Algal fungi",
      "A", "Basidiomycetes club fungi.",
      "1. Basidiomycetes are called club fungi because their basidia are club-shaped microscopic structures.",
      "Option B is Ascomycetes. Option C is Deuteromycetes. Option D is Phycomycetes.",
      "bio-kingdom-fungi", "Basidiomycetes Club Fungi")

    q(80, "Commonly known members of Basidiomycetes include:",
      "Mushrooms (Agaricus), bracket fungi, and puffballs (Lycoperdon)",
      "Yeast, Penicillium, and Aspergillus",
      "Mucor, Rhizopus, and Albugo",
      "Alternaria, Colletotrichum, and Trichoderma",
      "A", "Basidiomycetes members in NCERT.",
      "1. NCERT states: 'Commonly known forms of basidiomycetes are mushrooms, bracket fungi or puffballs.' Examples include *Agaricus*, *Puccinia*, and *Ustilago*.",
      "Option B belongs to Ascomycetes. Option C belongs to Phycomycetes. Option D belongs to Deuteromycetes.",
      "bio-kingdom-fungi", "Basidiomycetes Examples")

    q(81, "Puccinia is an important basidiomycete fungus that causes:",
      "Rust disease (e.g. black stem rust of wheat)", "Smut disease", "White rust of crucifers", "Early blight of potato",
      "A", "Puccinia rust in NCERT.",
      "1. *Puccinia graminis tritici* causes black stem rust of wheat.\n2. Smut is caused by *Ustilago*. White rust of mustard is caused by *Albugo*. Early blight is caused by *Alternaria*.",
      "Options B, C, and D are caused by different fungi.",
      "bio-kingdom-fungi", "Puccinia Rust")

    q(82, "Ustilago is a basidiomycete fungus that causes:",
      "Smut disease in cereals", "Rust disease", "Ergot of rye", "Late blight of potato",
      "A", "Ustilago smut in NCERT.",
      "1. *Ustilago* species cause smut disease in cereals (e.g. *Ustilago maydis* corn smut, *Ustilago tritici* loose smut of wheat).",
      "Option B is caused by *Puccinia*. Option C is caused by *Claviceps*. Option D is caused by *Phytophthora*.",
      "bio-kingdom-fungi", "Ustilago Smut")

    q(83, "In Basidiomycetes, how are the basidiospores produced on the basidium?",
      "Exogenously (typically 4 basidiospores on sterigmata)",
      "Endogenously inside a closed sac",
      "Inside a sporangium",
      "Through binary fission",
      "A", "Basidiospores exogenous production in NCERT.",
      "1. NCERT states: 'Karyogamy and meiosis take place in the basidium producing four basidiospores. The basidiospores are exogenously produced on the basidium.'",
      "Option B describes ascospores in Ascomycetes. Option C describes sporangiospores in Phycomycetes. Option D is bacterial.",
      "bio-kingdom-fungi", "Basidiospores Exogenous")

    q(84, "Deuteromycetes are commonly called 'imperfect fungi' because:",
      "Only the asexual or vegetative phases of these fungi are known",
      "They have no cell walls",
      "They cannot decompose organic matter",
      "They are all prokaryotes",
      "A", "Deuteromycetes imperfect fungi in NCERT.",
      "1. NCERT states: 'Deuteromycetes are commonly known as imperfect fungi because only the asexual or vegetative phases of these fungi are known.'\n2. When their sexual (perfect) stages are discovered, they are transferred to Ascomycetes or Basidiomycetes.",
      "Options B, C, and D are scientifically incorrect.",
      "bio-kingdom-fungi", "Imperfect Fungi Definition")

    q(85, "A large number of Deuteromycetes are decomposers of litter and help in:",
      "Mineral cycling", "Fixing nitrogen in root nodules", "Photosynthesis in oceans", "Producing bread",
      "A", "Mineral cycling by Deuteromycetes in NCERT.",
      "1. NCERT explicitly states: 'A large number of them are decomposers of litter and help in mineral cycling.'",
      "Options B, C, and D are performed by bacteria, algae, or yeasts.",
      "bio-kingdom-fungi", "Deuteromycetes Mineral Cycling")

    q(86, "Which of the following genera belongs to Deuteromycetes?",
      "Alternaria, Colletotrichum, and Trichoderma", "Mucor, Rhizopus, and Albugo", "Agaricus, Puccinia, and Ustilago", "Penicillium and Aspergillus",
      "A", "Deuteromycetes examples in NCERT.",
      "1. NCERT explicitly lists: 'Some examples are Alternaria, Colletotrichum and Trichoderma.'",
      "Option B is Phycomycetes. Option C is Basidiomycetes. Option D is Ascomycetes.",
      "bio-kingdom-fungi", "Deuteromycetes Examples")

    q(87, "Which antibiotic was first discovered from a fungus belonging to Ascomycetes?",
      "Penicillin (from Penicillium notatum by Alexander Fleming)", "Streptomycin", "Tetracycline", "Chloramphenicol",
      "A", "Penicillin discovery.",
      "1. Penicillin, the first wonder drug antibiotic, was discovered in 1928 by Sir Alexander Fleming from the green mould *Penicillium notatum* (an ascomycete).",
      "Options B, C, and D were isolated from actinomycete bacteria (*Streptomyces*).",
      "bio-kingdom-fungi", "Penicillin Discovery")

    q(88, "The fruiting bodies of Ascomycetes are technically known as:",
      "Ascocarps", "Basidiocarps", "Sporangia", "Conidiophores",
      "A", "Ascocarps in NCERT.",
      "1. NCERT states: 'The asci are arranged in different types of fruiting bodies called ascocarps.'",
      "Option B is in Basidiomycetes. Option C is in Phycomycetes. Option D is asexual stalk.",
      "bio-kingdom-fungi", "Ascocarps")

    q(89, "The fruiting bodies of Basidiomycetes are technically called:",
      "Basidiocarps", "Ascocarps", "Plasmodia", "Zygospores",
      "A", "Basidiocarps in NCERT.",
      "1. NCERT states: 'Basidia are arranged in fruiting bodies called basidiocarps (e.g. the visible umbrella mushroom cap).'",
      "Option B is in Ascomycetes. Option C is in slime moulds. Option D is a sexual spore in Phycomycetes.",
      "bio-kingdom-fungi", "Basidiocarps")

    q(90, "Coprophilous fungi are those that grow on:",
      "Dung", "Wood logs", "Living leaves", "Bare rocks",
      "A", "Coprophilous definition in NCERT.",
      "1. NCERT states: 'They are saprophytic, decomposers, parasitic or coprophilous (growing on dung).' Examples include several ascomycetes like *Peziza*.",
      "Options B, C, and D are other habitats.",
      "bio-kingdom-fungi", "Coprophilous Fungi")

    q(91, "Which fungus causes ergot disease of rye and is a source of ergotamine alkaloids?",
      "Claviceps purpurea", "Neurospora crassa", "Aspergillus niger", "Ustilago maydis",
      "A", "Claviceps ergot.",
      "1. *Claviceps purpurea* is an ascomycete fungus that infects the ovaries of rye and other grasses, producing poisonous ergot sclerotia containing ergotamine and lysergic acid.",
      "Options B, C, and D are different fungi.",
      "bio-kingdom-fungi", "Claviceps Ergot")

    q(92, "A sexual resting spore formed by the fusion of two gametes in Phycomycetes is called a:",
      "Zygospore", "Ascospore", "Basidiospore", "Conidium",
      "A", "Zygospore in Phycomycetes in NCERT.",
      "1. NCERT states: 'A zygospore is formed by fusion of two gametes. These gametes are similar in morphology (isogamous) or dissimilar (anisogamous or oogamous).'",
      "Option B is in Ascomycetes. Option C is in Basidiomycetes. Option D is an asexual spore.",
      "bio-kingdom-fungi", "Zygospore Formation")

    q(93, "Sex organs are completely absent, yet sexual reproduction occurs via somatogamy/plasmogamy of vegetative cells in which class of fungi?",
      "Basidiomycetes", "Phycomycetes", "Ascomycetes", "Deuteromycetes",
      "A", "Somatogamy in Basidiomycetes in NCERT.",
      "1. NCERT explicitly states: 'The sex organs are absent, but plasmogamy is brought about by fusion of two vegetative or somatic cells of different strains or genotypes. The resultant structure is dikaryotic which ultimately gives rise to basidium.'",
      "Options B and C retain differentiated gametangia or sex organs. Option D lacks known sexual stages.",
      "bio-kingdom-fungi", "Somatogamy Basidiomycetes")

    # --- TOPIC 4: bio-viruses-viroids-lichens (Q94 - Q125) ---
    q(94, "Why were Viruses, Viroids, Prions, and Lichens NOT included in Whittaker's Five Kingdom Classification?",
      "Because Whittaker only classified cellular organisms, whereas viruses, viroids, and prions are acellular/non-cellular, and lichens are composite symbiotic entities",
      "Because they were discovered in the year 2020",
      "Because they all belong to Kingdom Animalia",
      "Because they possess chlorophyll a",
      "A", "Reason for omission from Five Kingdom Classification.",
      "1. NCERT states: 'In the five kingdom classification of Whittaker there is no mention of lichens and some acellular organisms like viruses, viroids and prions.'\n2. Whittaker's system was strictly founded on cellular organisation (prokaryotic vs eukaryotic, unicellular vs multicellular).",
      "Options B, C, and D are factually false.",
      "bio-viruses-viroids-lichens", "Whittaker Omission Reason")

    q(95, "The name 'virus' that means venom or poisonous fluid was given by:",
      "Dmitri Ivanowsky", "M.W. Beijerinek", "Pasteur", "W.M. Stanley",
      "C", "Pasteur virus name in NCERT.",
      "1. NCERT explicitly states: 'The name virus that means venom or poisonous fluid was given by Pasteur.'",
      "Option A recognized tobacco mosaic disease. Option B demonstrated *Contagium vivum fluidum*. Option D crystallized viruses.",
      "bio-viruses-viroids-lichens", "Pasteur Virus Name")

    q(96, "Who recognized that tobacco mosaic disease was caused by microbes smaller than bacteria because they passed through bacteria-proof filters?",
      "D.J. Ivanowsky (1892)", "M.W. Beijerinek (1898)", "W.M. Stanley (1935)", "Robert Hooke (1665)",
      "A", "Ivanowsky discovery in NCERT.",
      "1. NCERT states: 'D.J. Ivanowsky (1892) recognised certain microbes as causal organism of the mosaic disease of tobacco. These were found to be smaller than bacteria because they passed through bacteria-proof filters.'",
      "Options B and C made subsequent discoveries. Option D discovered cells.",
      "bio-viruses-viroids-lichens", "Ivanowsky Discovery")

    q(97, "Who demonstrated that the extract of the infected plants of tobacco could cause infection in healthy plants and called the fluid 'Contagium vivum fluidum'?",
      "M.W. Beijerinek (1898)", "D.J. Ivanowsky", "W.M. Stanley", "T.O. Diener",
      "A", "Beijerinek Contagium vivum fluidum in NCERT.",
      "1. NCERT states: 'M.W. Beijerinek (1898) demonstrated that the extract of the infected plants of tobacco could cause infection in healthy plants and named the new pathogen \"virus\" and called the fluid as Contagium vivum fluidum (infectious living fluid).'",
      "Options B, C, and D are other scientists.",
      "bio-viruses-viroids-lichens", "Beijerinek Contagium")

    q(98, "Who showed for the first time in 1935 that viruses could be crystallized and that crystals consist largely of proteins?",
      "W.M. Stanley", "Louis Pasteur", "Alexander Fleming", "T.O. Diener",
      "A", "Stanley crystallization in NCERT.",
      "1. NCERT states: 'W.M. Stanley (1935) showed that viruses could be crystallised and crystals consist largely of proteins. They are inert outside their specific host cell. Viruses are obligate parasites.'",
      "Options B, C, and D made different discoveries.",
      "bio-viruses-viroids-lichens", "Stanley Crystallization")

    q(99, "Viruses are described as 'obligate intracellular parasites' because:",
      "They can replicate only when they infect and hijack the metabolic machinery of a living host cell",
      "They can grow on nutrient agar plates like bacteria",
      "They absorb dead leaves in soil",
      "They produce spores in rivers",
      "A", "Obligate intracellular parasite definition.",
      "1. Outside a living host cell, viruses are inert macromolecules lacking metabolism, ATP synthesis, and ribosomes; they are strictly obligated to parasitize a host cell's translational machinery to multiply.",
      "Options B, C, and D are false.",
      "bio-viruses-viroids-lichens", "Obligate Parasite")

    q(100, "The protein coat of a virus that encloses its genetic material is called a:",
      "Capsid", "Pellicle", "Capsule", "Envelope",
      "A", "Viral capsid in NCERT.",
      "1. The protective protein shell surrounding the viral nucleic acid genome is called a capsid.\n2. The capsid is made up of repeating protein subunits called capsomeres.",
      "Option B is in Euglena. Option C is in bacteria. Option D is an outer lipid layer present only in some enveloped viruses.",
      "bio-viruses-viroids-lichens", "Viral Capsid")

    q(101, "The individual protein subunits that assemble to form the viral capsid are called:",
      "Capsomeres", "Blastomeres", "Centromeres", "Telomeres",
      "A", "Capsomeres in NCERT.",
      "1. NCERT states: 'The protein coat called capsid made of small subunits called capsomeres, protects the nucleic acid.'",
      "Options B, C, and D are embryological or chromosomal structures.",
      "bio-viruses-viroids-lichens", "Capsomeres")

    q(102, "Which of the following statements about the genetic material of viruses is CORRECT?",
      "No virus contains both RNA and DNA simultaneously",
      "All viruses contain both RNA and DNA together",
      "All viruses contain only double-stranded DNA",
      "Plant viruses always contain double-stranded DNA",
      "A", "Viral nucleic acid mutual exclusivity in NCERT.",
      "1. NCERT explicitly states: 'No virus contains both RNA and DNA. A virus is a nucleoprotein and the genetic material is infectious.'",
      "Options B, C, and D contradict universal virology rules.",
      "bio-viruses-viroids-lichens", "Viral Nucleic Acid Rule")

    q(103, "In general, viruses that infect plants have which type of genetic material?",
      "Single-stranded RNA (ssRNA)", "Double-stranded DNA", "Double-stranded RNA only", "Naked circular plasmid DNA",
      "A", "Plant virus genetic material in NCERT.",
      "1. NCERT explicitly states: 'In general, viruses that infect plants have single stranded RNA...'",
      "Option B is typical of bacteriophages and many animal viruses. Options C and D are incorrect.",
      "bio-viruses-viroids-lichens", "Plant Virus ssRNA")

    q(104, "Viruses that infect bacteria are called ________ and usually possess ________.",
      "Bacteriophages, double-stranded DNA (dsDNA)",
      "Cyanophages, single-stranded RNA",
      "Viroids, single-stranded DNA",
      "Prions, double-stranded RNA",
      "A", "Bacteriophage structure in NCERT.",
      "1. NCERT explicitly states: 'Bacterial viruses or bacteriophages (viruses that infect the bacteria) are usually double stranded DNA viruses.'",
      "Options B, C, and D misidentify the virus or its genome.",
      "bio-viruses-viroids-lichens", "Bacteriophage dsDNA")

    q(105, "Viruses that infect animals may have:",
      "Either single or double-stranded RNA or double-stranded DNA",
      "Only triple-stranded DNA",
      "Only bacterial ribosomes",
      "Cellulose cell walls",
      "A", "Animal virus genetic material in NCERT.",
      "1. NCERT states: '...and viruses that infect animals have either single or double stranded RNA or double stranded DNA.'",
      "Options B, C, and D are non-existent or fabricated.",
      "bio-viruses-viroids-lichens", "Animal Virus Genome")

    q(106, "Which of the following human diseases is caused by a virus?",
      "Mumps, Smallpox, Herpes, Influenza, and AIDS",
      "Cholera and Typhoid",
      "Tetanus and Citrus canker",
      "Amoebic dysentery and Malaria",
      "A", "Viral diseases list in NCERT.",
      "1. NCERT lists: 'Mumps, smallpox, herpes and influenza are caused by viruses. AIDS in humans is also caused by a virus (HIV).'",
      "Options B and C are bacterial diseases. Option D contains protozoan diseases.",
      "bio-viruses-viroids-lichens", "Human Viral Diseases")

    q(107, "Which of the following is a classic symptom of viral infection in plants?",
      "Mosaic formation, leaf rolling and curling, yellowing and vein clearing, dwarfing and stunted growth",
      "Production of giant flowers",
      "Conversion of roots into leaves",
      "Instant synthesis of extra chlorophyll",
      "A", "Plant viral symptoms in NCERT.",
      "1. NCERT explicitly lists: 'In plants, the symptoms can be mosaic formation, leaf rolling and curling, yellowing and vein clearing, dwarfing and stunted growth.'",
      "Options B, C, and D are false.",
      "bio-viruses-viroids-lichens", "Plant Viral Symptoms")

    q(108, "Who discovered 'Viroids' in 1971 as a new infectious agent smaller than viruses?",
      "T.O. Diener", "W.M. Stanley", "D.J. Ivanowsky", "M.W. Beijerinek",
      "A", "T.O. Diener viroid discovery in NCERT.",
      "1. NCERT states: 'In 1971, T.O. Diener discovered a new infectious agent that was smaller than viruses and caused potato spindle tuber disease.'",
      "Options B, C, and D made discoveries regarding viruses, not viroids.",
      "bio-viruses-viroids-lichens", "Viroid Discovery Diener")

    q(109, "Which plant disease was discovered by T.O. Diener to be caused by a viroid?",
      "Potato spindle tuber disease (PSTD)", "Tobacco mosaic disease", "Citrus canker", "Late blight of potato",
      "A", "Potato spindle tuber disease in NCERT.",
      "1. T.O. Diener isolated the viroid causing potato spindle tuber disease (PSTD), where potatoes become elongated, spindle-shaped, and cracked.",
      "Option B is caused by TMV. Option C is caused by bacteria. Option D is caused by fungus (*Phytophthora*).",
      "bio-viruses-viroids-lichens", "PSTD Viroid")

    q(110, "How does a Viroid structurally differ from a Virus?",
      "A viroid consists of free RNA and completely lacks a protein coat (capsid)",
      "A viroid has a thicker protein coat than a virus",
      "A viroid contains double-stranded DNA",
      "A viroid is larger than a bacterium",
      "A", "Viroid vs Virus structure in NCERT.",
      "1. NCERT states: 'It was found to be a free RNA; it lacked the protein coat that is found in viruses, hence the name viroid.'",
      "Options B, C, and D contradict the definition of a viroid.",
      "bio-viruses-viroids-lichens", "Viroid Structural Distinction")

    q(111, "The RNA of a viroid is characterized by having:",
      "Low molecular weight", "High molecular weight", "Double-stranded DNA tails", "Lipid capsomeres",
      "A", "Viroid RNA low molecular weight in NCERT.",
      "1. NCERT verbatim states: 'The RNA of the viroid was of low molecular weight.' (typically 246 to 467 nucleotides).",
      "Option B was an error tested in NEET 2021. Options C and D are false.",
      "bio-viruses-viroids-lichens", "Viroid Low Molecular Weight")

    q(112, "Prions are infectious agents consisting of:",
      "Abnormally folded proteins", "Free naked RNA", "Single-stranded DNA", "Capsid with double-stranded RNA",
      "A", "Prions abnormally folded protein in NCERT.",
      "1. NCERT states: 'In modern medicine certain neurological diseases were found to be transmitted by an agent consisting of abnormally folded protein. The agent was similar in size to viruses. These agents were called prions.'",
      "Option B describes viroids. Options C and D describe viruses.",
      "bio-viruses-viroids-lichens", "Prions Protein Agent")

    q(113, "Bovine Spongiform Encephalopathy (BSE), commonly known as 'mad cow disease', is caused by:",
      "A prion", "A virus", "A viroid", "A bacterium",
      "A", "BSE caused by prions in NCERT.",
      "1. NCERT states: 'The most notable diseases caused by prions are bovine spongiform encephalopathy (BSE) commonly called mad cow disease in cattle and its analogous variant Cr-Jacob disease (CJD) in humans.'",
      "Options B, C, and D are incorrect pathogens.",
      "bio-viruses-viroids-lichens", "BSE Prion")

    q(114, "The analogous human neurodegenerative disease caused by prions that corresponds to mad cow disease in cattle is:",
      "Cr-Jacob disease (CJD)", "Alzheimer's disease", "Parkinson's disease", "Multiple sclerosis",
      "A", "CJD human prion disease in NCERT.",
      "1. Cr-Jacob disease (Creutzfeldt-Jakob disease, CJD) is the human counterpart of bovine spongiform encephalopathy (BSE), caused by infectious prion proteins.",
      "Options B, C, and D are non-prion chronic neurological disorders.",
      "bio-viruses-viroids-lichens", "CJD Prion Disease")

    q(115, "Lichens represent a symbiotic mutual partnership between:",
      "An alga and a fungus", "A virus and a bacterium", "A plant root and a bacterium", "Two different fungi",
      "A", "Lichen symbiotic partnership in NCERT.",
      "1. NCERT states: 'Lichens are symbiotic associations i.e. mutually useful associations, between algae and fungi.'",
      "Option B is bacteriophage infection. Option C is *Rhizobium* nodules. Option D is fungal competition.",
      "bio-viruses-viroids-lichens", "Lichen Symbiosis")

    q(116, "In a lichen, the algal partner is called the ________ and the fungal partner is called the ________.",
      "Phycobiont, Mycobiont", "Mycobiont, Phycobiont", "Heterocyst, Capsid", "Plasmodium, Spore",
      "A", "Phycobiont and Mycobiont in NCERT.",
      "1. NCERT states: 'The algal component is known as phycobiont and fungal component as mycobiont, which are autotrophic and heterotrophic, respectively.'",
      "Option B reverses the roles. Options C and D are unrelated structures.",
      "bio-viruses-viroids-lichens", "Phycobiont and Mycobiont")

    q(117, "What is the primary ecological/nutritional role of the algal partner (phycobiont) in a lichen?",
      "It synthesizes organic food for the fungus through photosynthesis",
      "It absorbs water and minerals from the rock",
      "It anchors the lichen to the tree bark",
      "It produces fungal basidiospores",
      "A", "Phycobiont nutritional role.",
      "1. The autotrophic algal phycobiont (green alga or cyanobacterium) contains chlorophyll and manufactures carbohydrates via photosynthesis to nourish the fungus.",
      "Options B and C are the role of the fungal partner (mycobiont). Option D is impossible for algae.",
      "bio-viruses-viroids-lichens", "Phycobiont Role")

    q(118, "What is the primary role of the fungal partner (mycobiont) in a lichen?",
      "It provides shelter, absorbs water and minerals, and anchors the association",
      "It carries out oxygenic photosynthesis",
      "It produces pollen grains",
      "It secretes virus particles",
      "A", "Mycobiont role in NCERT.",
      "1. NCERT explicitly states: 'Algae prepare food for fungi and fungi provide shelter and absorb mineral nutrients and water for its partner.'",
      "Options B, C, and D are completely incorrect.",
      "bio-viruses-viroids-lichens", "Mycobiont Role")

    q(119, "Why are lichens regarded as excellent natural indicators of air pollution?",
      "Because they are extremely sensitive to pollutants like sulfur dioxide (SO2) and do not grow in polluted areas",
      "Because they turn bright green in smoke",
      "Because they emit radio waves in smog",
      "Because they produce heavy soot",
      "A", "Lichens pollution indicators in NCERT.",
      "1. NCERT explicitly states: 'Lichens are very good pollution indicators — they do not grow in polluted areas.'\n2. Lichens absorb atmospheric moisture directly without a protective cuticle, making them extraordinarily vulnerable to sulfur dioxide (SO2) toxicity.",
      "Options B, C, and D are false.",
      "bio-viruses-viroids-lichens", "Lichens Pollution Indicators")

    q(120, "In ecological succession on bare rocks, lichens play a crucial role as:",
      "Pioneer species that weather rock into primitive soil by secreting lichenic acids",
      "Climax forest trees",
      "Decomposers of deep ocean trenches",
      "Parasites of dinosaurs",
      "A", "Lichens as pioneer species.",
      "1. Crustose lichens are pioneer colonizers on barren rock surfaces; their organic lichen acids chemically etch the rock mineral matrix into fine soil particles, allowing mosses to take root.",
      "Options B, C, and D are incorrect.",
      "bio-viruses-viroids-lichens", "Lichen Pioneer Species")

    q(121, "Which of the following statements about Tobacco Mosaic Virus (TMV) is CORRECT?",
      "It is a rod-shaped virus with a helical protein capsid surrounding single-stranded RNA",
      "It contains double-stranded DNA",
      "It has a spherical lipid shell with cilia",
      "It infects human nerve cells",
      "A", "TMV structure.",
      "1. Tobacco Mosaic Virus (TMV) has a rod-like morphology (300 nm length x 18 nm diameter) consisting of 2,130 capsomeres arranged in a right-handed helix around a single-stranded RNA molecule.",
      "Options B, C, and D are false.",
      "bio-viruses-viroids-lichens", "TMV Structure")

    q(122, "Capsomeres in viral capsids are arranged in which geometric patterns?",
      "Helical or polyhedral forms", "Linear straight chains only", "Square boxes only", "Concentric spheres with flagella",
      "A", "Capsomere arrangement in NCERT.",
      "1. NCERT states: 'The capsomeres are arranged in helical or polyhedral geometric forms.' (e.g. helical in TMV, polyhedral in Adenovirus).",
      "Options B, C, and D are not the standard geometric patterns described in NCERT.",
      "bio-viruses-viroids-lichens", "Capsomere Geometric Patterns")

    q(123, "Can an infected lichen be recognized as two separate organisms under a simple hand lens?",
      "No, so close is their association that if you saw a lichen in nature one would never imagine that they had two different organisms within them",
      "Yes, they always live detached from each other",
      "Yes, the alga lives in trees while the fungus lives in rivers",
      "Lichens are single bacteria",
      "A", "Close association of lichens in NCERT.",
      "1. NCERT verbatim: 'So close is their association that if you saw a lichen in nature one would never imagine that they had two different organisms within them.'",
      "Options B, C, and D contradict the morphological reality of lichens.",
      "bio-viruses-viroids-lichens", "Lichen Intimate Association")

    q(124, "What is the infective component of a virus that enters and takes over the host cell?",
      "The viral genetic material (nucleic acid)", "The protein coat (capsid) only", "The tail fibers only", "The envelope lipids only",
      "A", "Infective unit of viruses.",
      "1. The viral nucleic acid (DNA or RNA) is the infectious agent that enters the host cell and directs viral replication; the protein capsid typically remains outside (as demonstrated by Hershey and Chase).",
      "Options B, C, and D are structural delivery components, not the genetic infectious agent.",
      "bio-viruses-viroids-lichens", "Infective Unit Nucleic Acid")

    q(125, "Which of the following organisms does NOT possess a cellular organization?",
      "Virus", "Bacterium", "Yeast", "Amoeba",
      "A", "Acellular nature of viruses.",
      "1. Viruses are non-cellular (acellular) nucleoprotein complexes lacking cytoplasm, cell membranes, ribosomes, and metabolic machinery.\n2. Bacteria (Monera), Yeast (Fungi), and Amoeba (Protista) are all cellular organisms.",
      "Options B, C, and D are cellular life forms.",
      "bio-viruses-viroids-lichens", "Acellular Virus")

    return questions

if __name__ == '__main__':
    qs = get_part1_questions()
    print(f"Generated {len(qs)} questions for Part 1.")
    assert len(qs) == 125, f"Expected 125, got {len(qs)}"
    easy_count = sum(1 for q in qs if q['difficulty'] == 'Easy')
    assert easy_count == 125, f"Expected 125 Easy, got {easy_count}"
    print("Biological Classification Part 1 validation passed!")
