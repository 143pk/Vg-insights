import json
import os
import sys

from bc_generator_core import make_bc_q, format_ts_file, OUT_DIR

def build_part1():
    q_list = []
    
    # Subtopics in bio-systems-monera (Q1 - Q32)
    monera_qs = [
        (
            1,
            "Who was the earliest scientist to attempt a more scientific basis for classification of living organisms?",
            "Aristotle", "Carolus Linnaeus", "R.H. Whittaker", "Ernst Haeckel",
            "A",
            "Earliest classification attempt in NCERT.",
            "1. NCERT explicitly states that Aristotle was the earliest to attempt a more scientific basis for classification.\n2. He used simple morphological characters to classify plants into trees, shrubs, and herbs.\n3. He also divided animals into two groups: those which had red blood (enaima) and those that did not (anaima).",
            "Option B is Linnaeus who introduced two-kingdom system much later. Option C is Whittaker who gave five-kingdom classification in 1969. Option D is Haeckel who proposed the three-kingdom system.",
            "bio-systems-monera", "Historical Classification Systems"
        ),
        (
            2,
            "Aristotle divided plants into which of the following three morphological categories?",
            "Herbs, shrubs, and trees", "Cryptogams, phanerogams, and gymnosperms", "Bryophytes, pteridophytes, and angiosperms", "Thallophytes, cormophytes, and tracheophytes",
            "A",
            "Aristotle plant classification categories.",
            "1. Aristotle used simple morphological traits to categorize plants.\n2. The three morphological forms he established were trees, shrubs, and herbs.\n3. This was the earliest systematic attempt recorded in biological history.",
            "Options B, C, and D represent much later botanical groupings based on advanced reproductive structures and evolutionary vascular organization.",
            "bio-systems-monera", "Historical Classification Systems"
        ),
        (
            3,
            "In Aristotle's classification of animals, organisms were divided based on the presence or absence of:",
            "Red blood", "Vertebral column", "Locomotory organs", "Cell wall",
            "A",
            "Aristotle's animal division criteria.",
            "1. Aristotle divided animals into two major groups: those with red blood and those without red blood.\n2. These categories were historically termed Enaima and Anaima.\n3. This division relied purely on gross morphological observation.",
            "Option B was used later in vertebrate anatomy. Option C was used by other classical observers. Option D is a cellular feature unknown to Aristotle.",
            "bio-systems-monera", "Historical Classification Systems"
        ),
        (
            4,
            "The Two Kingdom system of classification was developed by:",
            "Carolus Linnaeus", "R.H. Whittaker", "Carl Woese", "Antonie van Leeuwenhoek",
            "A",
            "Linnaeus two-kingdom system.",
            "1. Carolus Linnaeus proposed the Two Kingdom classification system consisting of Kingdom Plantae and Kingdom Animalia.\n2. This system included all organisms known at that time under either plants or animals.",
            "Option B is Whittaker (5 kingdoms). Option C is Woese (6 kingdoms / 3 domains). Option D discovered live bacteria under microscopes.",
            "bio-systems-monera", "Historical Classification Systems"
        ),
        (
            5,
            "Which of the following was a major limitation of the Two Kingdom system of classification?",
            "It did not distinguish between eukaryotes and prokaryotes", "It failed to classify flowering plants", "It did not include vertebrates", "It excluded all terrestrial organisms",
            "A",
            "Limitations of Two Kingdom system in NCERT.",
            "1. The Two Kingdom system grouped bacteria, blue-green algae, fungi, mosses, ferns, gymnosperms, and angiosperms under plants purely because they had a cell wall.\n2. It failed to distinguish between prokaryotes and eukaryotes, unicellular and multicellular organisms, and photosynthetic and non-photosynthetic organisms.",
            "Option B, C, and D are factually untrue; flowering plants and vertebrates were included.",
            "bio-systems-monera", "Historical Classification Systems"
        ),
        (
            6,
            "In which year did R.H. Whittaker propose the Five Kingdom Classification?",
            "1969", "1859", "1953", "1982",
            "A",
            "R.H. Whittaker classification year.",
            "1. NCERT explicitly mentions that R.H. Whittaker proposed the Five Kingdom Classification in the year 1969.\n2. The kingdoms defined were Monera, Protista, Fungi, Plantae, and Animalia.",
            "Option B is Darwin's Origin of Species year (1859). Option C is Watson and Crick DNA model year (1953). Option D is later.",
            "bio-systems-monera", "Whittaker Five Kingdom Classification"
        ),
        (
            7,
            "Which of the following is NOT one of the main criteria used by R.H. Whittaker for the Five Kingdom Classification?",
            "Excretory organ complexity", "Cell structure", "Mode of nutrition", "Phylogenetic relationships",
            "A",
            "Whittaker's 5 kingdom criteria.",
            "1. The main criteria Whittaker used were: (i) Cell structure, (ii) Body organization (thallus organization), (iii) Mode of nutrition, (iv) Reproduction, and (v) Phylogenetic relationships.\n2. Excretory organs were not a primary criterion for kingdom-level segregation.",
            "Options B, C, and D are all explicit primary criteria listed in NCERT for Whittaker's system.",
            "bio-systems-monera", "Whittaker Five Kingdom Classification"
        ),
        (
            8,
            "The Three-Domain system divides Kingdom Monera into how many domains?",
            "Two domains (Archaea and Bacteria)", "Three domains", "One single domain", "Four domains",
            "A",
            "Carl Woese Three-Domain system.",
            "1. Carl Woese proposed the Three-Domain system based on 16S rRNA sequences.\n2. It splits Kingdom Monera into two distinct domains: Domain Archaea and Domain Bacteria.\n3. The third domain (Eukarya) contains all eukaryotic kingdoms.",
            "Options B, C, and D misrepresent the allocation of Monera across the domains.",
            "bio-systems-monera", "Three-Domain System"
        ),
        (
            9,
            "Bacteria are the sole members of which of the following kingdoms?",
            "Kingdom Monera", "Kingdom Protista", "Kingdom Fungi", "Kingdom Archaea",
            "A",
            "Kingdom Monera sole members.",
            "1. NCERT specifies that 'Bacteria are the sole members of the Kingdom Monera'.\n2. They are the most abundant micro-organisms found almost everywhere on Earth.",
            "Kingdom Protista contains unicellular eukaryotes; Fungi contains multicellular heterotrophic eukaryotes; Archaea is a domain, not a Whittaker kingdom.",
            "bio-systems-monera", "Kingdom Monera Characteristics"
        ),
        (
            10,
            "Spherical bacteria are scientifically designated as:",
            "Cocci (singular: Coccus)", "Bacilli (singular: Bacillus)", "Spirilla (singular: Spirillum)", "Vibrio",
            "A",
            "Bacterial morphological shapes.",
            "1. Bacteria are grouped into four categories based on shape:\n   - Coccus: Spherical\n   - Bacillus: Rod-shaped\n   - Spirillum: Spiral\n   - Vibrio: Comma-shaped.",
            "Option B are rod-shaped. Option C are spiral. Option D are comma-shaped.",
            "bio-systems-monera", "Kingdom Monera Characteristics"
        ),
        (
            11,
            "Comma-shaped bacteria are referred to as:",
            "Vibrio", "Bacillus", "Spirillum", "Coccus",
            "A",
            "Bacterial shapes - Vibrio.",
            "1. The comma-shaped bacteria are called Vibrio (e.g., Vibrio cholerae).\n2. They possess a characteristic bend in their cellular architecture.",
            "Bacillus is rod-shaped, Spirillum is spiral, and Coccus is spherical.",
            "bio-systems-monera", "Kingdom Monera Characteristics"
        ),
        (
            12,
            "Though bacterial structure is very simple, their behavior is very:",
            "Complex", "Simple", "Primitive", "Non-reactive",
            "A",
            "NCERT quote on bacterial behavior.",
            "1. NCERT explicitly states: 'Though the bacterial structure is very simple, they are very complex in behavior'.\n2. Compared to many other organisms, bacteria as a group show the most extensive metabolic diversity.",
            "Options B, C, and D contradict the explicit NCERT principle describing bacterial adaptive complexity.",
            "bio-systems-monera", "Kingdom Monera Characteristics"
        ),
        (
            13,
            "Which group of organisms shows the most extensive metabolic diversity among all living organisms?",
            "Bacteria (Monera)", "Fungi", "Plantae", "Animalia",
            "A",
            "Extensive metabolic diversity in bacteria.",
            "1. Bacteria exhibit the greatest metabolic diversity.\n2. Some are photoautotrophic, some chemoautotrophic, and a vast majority are heterotrophic (saprophytic or parasitic).",
            "Fungi are strictly heterotrophic. Plants are primarily photoautotrophic. Animals are exclusively holozoic or parasitic heterotrophs.",
            "bio-systems-monera", "Kingdom Monera Characteristics"
        ),
        (
            14,
            "The vast majority of bacteria belong to which nutritional category?",
            "Heterotrophs", "Photoautotrophs", "Chemoautotrophs", "Mixotrophs",
            "A",
            "Dominant nutritional mode of bacteria.",
            "1. NCERT states: 'The vast majority of bacteria are heterotrophs, i.e., they depend on other organisms or on dead organic matter for food'.",
            "Autotrophs (photo- and chemo-) represent specialized groups, but they are not the majority.",
            "bio-systems-monera", "Kingdom Monera Characteristics"
        ),
        (
            15,
            "Archaebacteria differ from other bacteria (eubacteria) primarily in having a different:",
            "Cell wall structure", "Nuclear membrane", "Mitochondrial matrix", "Ribosome size (80S)",
            "A",
            "Archaebacterial wall distinction.",
            "1. Archaebacteria differ from eubacteria in having a distinct cell wall composition (lack peptidoglycan, have branched lipid chains in membranes).\n2. This unique feature is responsible for their survival under extreme environmental conditions.",
            "Options B and C are absent in all prokaryotes. Option D is incorrect because prokaryotes have 70S ribosomes.",
            "bio-systems-monera", "Archaebacteria"
        ),
        (
            16,
            "Archaebacteria thriving in extremely salty areas are known as:",
            "Halophiles", "Thermoacidophiles", "Methanogens", "Heliophiles",
            "A",
            "Archaebacteria classes - Halophiles.",
            "1. Halophiles ('salt-loving') are archaebacteria that flourish in high salt concentrations, such as the Dead Sea and Great Salt Lake.",
            "Thermoacidophiles live in hot sulphur springs. Methanogens live in marshy areas and ruminant guts.",
            "bio-systems-monera", "Archaebacteria"
        ),
        (
            17,
            "Archaebacteria found in hot sulphur springs are classified as:",
            "Thermoacidophiles", "Halophiles", "Methanogens", "Psychrophiles",
            "A",
            "Thermoacidophiles habitat.",
            "1. Thermoacidophiles thrive in conditions of high temperature (up to 80-100°C) and extreme acidity (pH 2), such as hot sulphur springs.",
            "Halophiles require high salinity, and Methanogens are strictly anaerobic inhabitants of marshes and guts.",
            "bio-systems-monera", "Archaebacteria"
        ),
        (
            18,
            "Methanogens are present in the gut of several ruminant animals such as cows and buffaloes, and they are responsible for the production of:",
            "Biogas (methane)", "Ethanol", "Lactic acid", "Citric acid",
            "A",
            "Methanogens function in ruminants.",
            "1. Methanogens are anaerobic archaebacteria found in the rumen of ruminant animals.\n2. They process cellulose and produce biogas (methane gas) from the dung of these animals.",
            "Ethanol is produced by yeasts. Lactic acid is produced by Lactobacillus. Citric acid is produced by Aspergillus niger.",
            "bio-systems-monera", "Archaebacteria"
        ),
        (
            19,
            "Eubacteria are characterized by the presence of a rigid cell wall and, if motile, a:",
            "Flagellum", "Cilium", "Pellicle", "Pseudopodium",
            "A",
            "Eubacterial motility structure.",
            "1. Eubacteria ('true bacteria') possess a rigid cell wall made of peptidoglycan.\n2. If they are motile, they possess one or more bacterial flagella composed of the protein flagellin.",
            "Cilia and pellicles are typical of protists. Pseudopodia are amoeboid structures.",
            "bio-systems-monera", "Eubacteria"
        ),
        (
            20,
            "Cyanobacteria are also commonly known as:",
            "Blue-green algae", "Golden-brown algae", "Brown algae", "Red algae",
            "A",
            "Cyanobacteria common name.",
            "1. Cyanobacteria are prokaryotes known as blue-green algae (BGA).\n2. Despite the name 'algae', they are gram-negative photosynthetic eubacteria.",
            "Golden algae are desmids (Chrysophytes). Brown algae are Phaeophyceae. Red algae are Rhodophyceae.",
            "bio-systems-monera", "Cyanobacteria"
        ),
        (
            21,
            "Which photosynthetic pigment present in Cyanobacteria is identical to that found in green plants?",
            "Chlorophyll a", "Chlorophyll b", "Chlorophyll c", "Fucoxanthin",
            "A",
            "Cyanobacterial photosynthetic pigment.",
            "1. Cyanobacteria have chlorophyll a similar to green plants and are photosynthetic autotrophs.\n2. This enables oxygenic photosynthesis.",
            "Chlorophyll b is absent in typical cyanobacteria. Chlorophyll c occurs in diatoms and brown algae. Fucoxanthin is characteristic of brown algae.",
            "bio-systems-monera", "Cyanobacteria"
        ),
        (
            22,
            "In filamentous cyanobacteria like Nostoc and Anabaena, nitrogen fixation occurs in specialized cells called:",
            "Heterocysts", "Akinetes", "Hormogonia", "Endospores",
            "A",
            "Heterocysts in Cyanobacteria.",
            "1. Nostoc and Anabaena fix atmospheric nitrogen in thick-walled, oxygen-impermeable specialized cells called heterocysts.\n2. Heterocysts contain the oxygen-sensitive enzyme nitrogenase.",
            "Akinetes are resting survival spores. Hormogonia are vegetative fragments. Endospores are bacterial heat-resistant structures.",
            "bio-systems-monera", "Cyanobacteria"
        ),
        (
            23,
            "Chemosynthetic autotrophic bacteria obtain energy for ATP production by oxidizing various:",
            "Inorganic substances like nitrates, nitrites, and ammonia", "Organic sugars like glucose", "Lipids and fatty acids", "Solar photon packets",
            "A",
            "Chemosynthetic bacteria nutrition.",
            "1. Chemosynthetic autotrophs oxidize inorganic substances such as nitrates, nitrites, and ammonia.\n2. The released chemical energy is harnessed to synthesize ATP.",
            "Organic sugars and lipids are used by heterotrophs. Photons are used by photosynthetic organisms.",
            "bio-systems-monera", "Chemosynthetic Bacteria"
        ),
        (
            24,
            "Chemosynthetic autotrophic bacteria play a tremendous role in recycling which of the following nutrients?",
            "Nitrogen, phosphorus, iron, and sulphur", "Calcium, magnesium, and chloride only", "Carbon dioxide and oxygen only", "Sodium and potassium exclusively",
            "A",
            "Nutrient recycling by chemoautotrophs in NCERT.",
            "1. NCERT explicitly states: 'They play a great role in recycling nutrients like nitrogen, phosphorus, iron and sulphur'.",
            "Options B, C, and D list elements outside the highlighted biochemical recycling quartet described in NCERT.",
            "bio-systems-monera", "Chemosynthetic Bacteria"
        ),
        (
            25,
            "Which bacterium is widely used in the commercial conversion of milk into curd?",
            "Lactobacillus", "Streptomyces", "Rhizobium", "Clostridium",
            "A",
            "Curd production bacterium.",
            "1. Lactic acid bacteria (LAB) such as Lactobacillus convert milk sugar lactose into lactic acid, coagulating milk proteins to form curd.",
            "Streptomyces yields antibiotics. Rhizobium fixes nitrogen in legume root nodules. Clostridium is an anaerobic spore-former.",
            "bio-systems-monera", "Heterotrophic Bacteria"
        ),
        (
            26,
            "Cholera, typhoid, tetanus, and citrus canker are well-known diseases caused by different:",
            "Bacteria", "Viruses", "Fungi", "Protozoans",
            "A",
            "Bacterial diseases listed in NCERT.",
            "1. NCERT cites cholera (Vibrio cholerae), typhoid (Salmonella typhi), tetanus (Clostridium tetani), and citrus canker (Xanthomonas citri) as bacterial diseases.",
            "None of these four diseases are caused by viruses, fungi, or protozoans.",
            "bio-systems-monera", "Bacterial Diseases"
        ),
        (
            27,
            "Bacteria reproduce mainly by which process under favorable conditions?",
            "Fission (Binary fission)", "Endospore formation", "Budding", "Fragmentation of mycelium",
            "A",
            "Bacterial reproduction mode.",
            "1. Bacteria reproduce primarily by binary fission.\n2. Under unfavorable conditions, they produce spores (e.g., endospores).\n3. They also undergo a sort of sexual reproduction by primitive DNA transfer (conjugation).",
            "Spores are produced under unfavorable conditions. Budding is rare in bacteria. Mycelium is characteristic of fungi.",
            "bio-systems-monera", "Bacterial Reproduction"
        ),
        (
            28,
            "Organisms that completely lack a cell wall and are the smallest known living cells are:",
            "Mycoplasma", "Nostoc", "Bacteriophages", "Euglena",
            "A",
            "Mycoplasma unique features.",
            "1. Mycoplasmas are organisms that completely lack a cell wall.\n2. They are the smallest living cells known (approx. 0.3 micrometers in length) and can survive without oxygen.\n3. Many are pathogenic in animals and plants.",
            "Nostoc has a peptidoglycan wall. Bacteriophages are acellular viruses. Euglena is a protist with a pellicle.",
            "bio-systems-monera", "Mycoplasma"
        ),
        (
            29,
            "Which of the following statements about Mycoplasma is INCORRECT?",
            "They possess a rigid peptidoglycan cell wall", "They are the smallest living cells known", "They can survive without oxygen", "Many mycoplasmas are pathogenic in animals and plants",
            "A",
            "Incorrect statement on Mycoplasma.",
            "1. Mycoplasmas completely lack a cell wall, making them resistant to antibiotics that inhibit cell wall synthesis (like penicillin).\n2. Therefore, stating that they possess a rigid peptidoglycan wall is completely incorrect.",
            "Options B, C, and D are verified true statements from NCERT.",
            "bio-systems-monera", "Mycoplasma"
        ),
        (
            30,
            "Citrus canker is a plant disease caused by:",
            "Xanthomonas citri (Bacterium)", "Tobacco mosaic virus", "Puccinia graminis", "Albugo candida",
            "A",
            "Causal organism of citrus canker.",
            "1. Citrus canker is a devastating bacterial infection affecting citrus crops caused by Xanthomonas citri.",
            "TMV is a plant virus. Puccinia causes wheat rust (fungus). Albugo causes white rust of crucifers (fungus).",
            "bio-systems-monera", "Bacterial Diseases"
        ),
        (
            31,
            "Which structure surrounds the colonies of Cyanobacteria in aquatic environments?",
            "Gelatinous or mucilaginous sheath", "Cellulose cell wall only", "Siliceous frustule", "Pellicle layer",
            "A",
            "Cyanobacterial sheath.",
            "1. The colonies of cyanobacteria are generally surrounded by a gelatinous (mucilaginous) sheath.\n2. They often form blooms in polluted water bodies.",
            "Siliceous frustule belongs to diatoms. Pellicle belongs to Euglena.",
            "bio-systems-monera", "Cyanobacteria"
        ),
        (
            32,
            "Sexual reproduction in bacteria involves:",
            "A primitive type of DNA transfer from one bacterium to the other", "Meiosis followed by syngamy of flagellated gametes", "Formation of diploid zygote inside an oogonium", "Fusion of zoospores in water",
            "A",
            "Bacterial sexual reproduction.",
            "1. Bacteria reproduce sexually by adopting a primitive type of DNA transfer from one bacterium to another (conjugation, transformation, or transduction).\n2. True gamete formation and meiosis do not occur in prokaryotes.",
            "Options B, C, and D describe eukaryotic sexual reproductive cycles.",
            "bio-systems-monera", "Bacterial Reproduction"
        ),
    ]
    
    for item in monera_qs:
        q_list.append(make_bc_q(
            item[0], item[1], item[2], item[3], item[4], item[5], item[6],
            item[7], item[8], item[9], "Easy", item[10], item[11]
        ))
        
    # Protista (Q33 - Q64)
    protista_qs = [
        (
            33,
            "All single-celled eukaryotes are placed under which kingdom in Whittaker's classification?",
            "Protista", "Monera", "Fungi", "Plantae",
            "A",
            "Kingdom Protista definition.",
            "1. NCERT states: 'All single-celled eukaryotes are placed under Protista'.\n2. However, the boundaries of this kingdom are not well defined.",
            "Monera contains unicellular prokaryotes. Fungi and Plantae are multicellular eukaryotic kingdoms (with few exceptions like yeast).",
            "bio-kingdom-protista", "Protista General Characteristics"
        ),
        (
            34,
            "Members of Kingdom Protista are primarily:",
            "Aquatic", "Terrestrial", "Air-borne", "Subterranean",
            "A",
            "Protista habitat.",
            "1. Protists are primarily aquatic organisms, living in fresh water, marine water, or moist damp habitats.",
            "While some live in soil or as symbionts/parasites, their primary ancestral domain is aquatic.",
            "bio-kingdom-protista", "Protista General Characteristics"
        ),
        (
            35,
            "Which kingdom forms a biological link with plants, animals, and fungi?",
            "Kingdom Protista", "Kingdom Monera", "Kingdom Archaebacteria", "Kingdom Eubacteria",
            "A",
            "Protista as an evolutionary link.",
            "1. Being eukaryotes, the protistan cell body contains a well-defined nucleus and membrane-bound organelles.\n2. Protista serves as an evolutionary bridge linking unicellular life to multicellular plants, animals, and fungi.",
            "Monera are prokaryotes and do not link eukaryotic kingdoms directly.",
            "bio-kingdom-protista", "Protista General Characteristics"
        ),
        (
            36,
            "Chrysophytes include which of the following groups of organisms?",
            "Diatoms and golden algae (desmids)", "Dinoflagellates and Euglena", "Slime moulds and protozoans", "Mycoplasma and cyanobacteria",
            "A",
            "Chrysophytes composition in NCERT.",
            "1. NCERT specifies: 'This group includes diatoms and golden algae (desmids)'.\n2. They are found in fresh water as well as in marine environments.",
            "Dinoflagellates and Euglenoids are separate groups of Protista. Slime moulds are saprophytic protists.",
            "bio-kingdom-protista", "Chrysophytes"
        ),
        (
            37,
            "Which organisms are referred to as the 'chief producers in the oceans' in NCERT?",
            "Diatoms", "Dinoflagellates", "Euglenoids", "Cyanobacteria",
            "A",
            "Chief producers in oceans.",
            "1. NCERT explicitly designates diatoms as the 'chief producers in the oceans'.\n2. Their photosynthetic output forms the energetic base of marine food webs.",
            "Dinoflagellates contribute to marine production but are not termed chief ocean producers in NCERT.",
            "bio-kingdom-protista", "Chrysophytes"
        ),
        (
            38,
            "In diatoms, the cell walls form two thin overlapping shells which fit together like a:",
            "Soap box", "Petri dish", "Jewel case", "Capsule",
            "A",
            "Diatom cell wall structure.",
            "1. The cell wall of diatoms consists of two thin overlapping valves (epitheca and hypotheca) fitting together like a soap box.",
            "Option A is the direct verbatim metaphor specified in NCERT.",
            "bio-kingdom-protista", "Chrysophytes"
        ),
        (
            39,
            "The cell walls of diatoms are indestructible because they are embedded with:",
            "Silica", "Cellulose", "Chitin", "Calcium carbonate",
            "A",
            "Diatomaceous wall composition.",
            "1. Diatom cell walls are impregnated with silica (hydrated silicon dioxide), making them durable and indestructible.\n2. When diatoms die, their siliceous walls accumulate to form diatomaceous earth.",
            "Chitin is found in fungi. Pure cellulose walls decay readily. Calcium carbonate forms limestone.",
            "bio-kingdom-protista", "Chrysophytes"
        ),
        (
            40,
            "Diatomaceous earth is gritty in nature and is commercially used for:",
            "Polishing, filtration of oils and syrups", "Manufacturing penicillin", "Production of biogas", "Baking bread",
            "A",
            "Commercial uses of diatomaceous earth.",
            "1. Due to its gritty texture, diatomaceous earth is used in polishing and in the filtration of industrial oils and syrups.",
            "Penicillin comes from Penicillium (fungus). Biogas comes from methanogens. Baking uses yeast.",
            "bio-kingdom-protista", "Chrysophytes"
        ),
        (
            41,
            "Which group of protists is characterized by having stiff cellulose plates on the outer surface of their cell wall?",
            "Dinoflagellates", "Chrysophytes", "Euglenoids", "Slime moulds",
            "A",
            "Dinoflagellate cell wall plates.",
            "1. Dinoflagellates possess a cell wall with stiff, armored cellulose plates on the outer surface.\n2. Most are marine and photosynthetic.",
            "Chrysophytes have siliceous overlapping shells. Euglenoids lack a cell wall (have pellicle). Slime moulds lack walls in vegetative phase.",
            "bio-kingdom-protista", "Dinoflagellates"
        ),
        (
            42,
            "Most dinoflagellates possess how many flagella?",
            "Two (one longitudinal and one transverse)", "One single flagellum", "Four flagella", "Numerous cilia",
            "A",
            "Dinoflagellate flagella arrangement.",
            "1. Most dinoflagellates have two flagella: one lies longitudinally and the other transversely in a furrow between the wall plates.\n2. This produces a characteristic whirling spinning motion.",
            "Options B, C, and D are incorrect morphological descriptions.",
            "bio-kingdom-protista", "Dinoflagellates"
        ),
        (
            43,
            "Which red dinoflagellate undergoes rapid multiplication, causing 'red tides' in the sea?",
            "Gonyaulax", "Euglena", "Noctiluca", "Paramecium",
            "A",
            "Red tides causal organism in NCERT.",
            "1. NCERT cites Gonyaulax as the prime example of a red dinoflagellate that multiplies rapidly causing the sea to appear red ('red tides').\n2. Toxins released (such as saxitoxin) may kill marine fishes.",
            "Euglena is a freshwater flagellate. Paramecium is a ciliate.",
            "bio-kingdom-protista", "Dinoflagellates"
        ),
        (
            44,
            "Which group of organisms lacks a cell wall and instead possesses a protein-rich layer called a pellicle?",
            "Euglenoids", "Dinoflagellates", "Chrysophytes", "Diatoms",
            "A",
            "Pellicle in Euglenoids.",
            "1. Euglenoids do not have a cellulose cell wall; instead, they have a protein-rich flexible layer called a pellicle, which allows flexibility of body movement.",
            "Dinoflagellates have cellulose plates; Chrysophytes and diatoms have silica walls.",
            "bio-kingdom-protista", "Euglenoids"
        ),
        (
            45,
            "Euglenoids possess how many flagella?",
            "Two (one short and one long)", "Only one long flagellum", "Four equal flagella", "No flagella",
            "A",
            "Euglenoid flagella.",
            "1. Euglenoids possess two flagella: one is short and the other is long, arising from an anterior reservoir.",
            "Options B, C, and D are factually inaccurate.",
            "bio-kingdom-protista", "Euglenoids"
        ),
        (
            46,
            "Though photosynthetic in the presence of sunlight, when deprived of sunlight euglenoids behave like heterotrophs by predating on smaller organisms. This mode of nutrition is termed:",
            "Mixotrophic", "Holozoic only", "Chemoautotrophic", "Parasitic only",
            "A",
            "Mixotrophic nutrition in Euglena.",
            "1. Euglenoids display mixotrophic nutrition: autotrophic in sunlight and heterotrophic predators in darkness.\n2. Their photosynthetic pigments are identical to those found in higher plants.",
            "Chemoautotrophy relies on inorganic oxidation. Pure parasitism depends on a living host without photosynthesis.",
            "bio-kingdom-protista", "Euglenoids"
        ),
        (
            47,
            "Slime moulds are:",
            "Saprophytic protists", "Photosynthetic protists", "Chemosynthetic protists", "Obligate animal parasites",
            "A",
            "Slime moulds nutritional nature.",
            "1. Slime moulds are saprophytic protists.\n2. The body moves along decaying twigs and leaves engulfing organic material.",
            "They completely lack chlorophyll, so they cannot be photosynthetic or chemosynthetic.",
            "bio-kingdom-protista", "Slime Moulds"
        ),
        (
            48,
            "Under suitable conditions, slime moulds form an aggregation called:",
            "Plasmodium", "Pseudoplasmodium", "Syncytium", "Mycelium",
            "A",
            "Plasmodium of slime moulds.",
            "1. Under favorable conditions, slime moulds aggregate to form a free-living multinucleate mass of protoplasm called a plasmodium, which may grow several feet.",
            "Note that this 'plasmodium' is distinct from the malarial parasite genus Plasmodium.",
            "bio-kingdom-protista", "Slime Moulds"
        ),
        (
            49,
            "Under unfavorable conditions, the plasmodium of slime moulds differentiates and forms:",
            "Fruiting bodies bearing spores at their tips", "Flagellated motile gametes", "Siliceous cysts", "Thick peptidoglycan walls",
            "A",
            "Slime mould fruiting bodies.",
            "1. During unfavorable conditions, the plasmodium differentiates into fruiting bodies bearing spores at their tips.\n2. These spores possess true walls and are extremely resistant to adverse conditions.",
            "Options B, C, and D do not represent slime mould differentiation.",
            "bio-kingdom-protista", "Slime Moulds"
        ),
        (
            50,
            "Spores of slime moulds possess true cell walls and are dispersed primarily by:",
            "Air currents", "Water currents", "Insects", "Birds",
            "A",
            "Slime mould spore dispersal.",
            "1. The spores possess true walls made of cellulose, are extremely resistant, and are dispersed by air currents.",
            "Options B, C, and D are incorrect vectors for slime mould spores according to NCERT.",
            "bio-kingdom-protista", "Slime Moulds"
        ),
        (
            51,
            "All protozoans are heterotrophs and live as:",
            "Predators or parasites", "Autotrophs or saprophytes", "Chemosynthesizers", "Endosymbionts fixing nitrogen",
            "A",
            "Protozoans general biology.",
            "1. All protozoans are heterotrophs and live as either predators or parasites.\n2. They are believed to be primitive relatives of animals.",
            "Protozoans never carry out photosynthesis or nitrogen fixation.",
            "bio-kingdom-protista", "Protozoans"
        ),
        (
            52,
            "Amoeba moves and captures prey by putting out:",
            "Pseudopodia (false feet)", "Cilia", "Flagella", "Tentacles",
            "A",
            "Amoeboid locomotion.",
            "1. Amoeboid protozoans move and capture their prey by putting out pseudopodia (false feet) as in Amoeba.",
            "Cilia belong to ciliated protozoans; flagella belong to flagellated protozoans.",
            "bio-kingdom-protista", "Protozoans"
        ),
        (
            53,
            "Marine amoeboid protozoans have which substance on their outer surface?",
            "Silica shells", "Cellulose plates", "Chitinous scales", "Pectin shields",
            "A",
            "Marine amoeboids silica shells.",
            "1. NCERT states: 'Marine forms have silica shells on their surface'.\n2. Some of them such as Entamoeba are parasites.",
            "Cellulose plates belong to dinoflagellates. Chitin is typical of fungi.",
            "bio-kingdom-protista", "Protozoans"
        ),
        (
            54,
            "Which of the following amoeboid protozoans is a parasite causing amoebic dysentery in humans?",
            "Entamoeba histolytica", "Amoeba proteus", "Paramecium caudatum", "Trypanosoma gambiense",
            "A",
            "Entamoeba parasitism.",
            "1. Entamoeba histolytica is an intestinal parasite of humans that causes amoebic dysentery (amoebiasis).",
            "Amoeba proteus is free-living. Paramecium is a free-living ciliate. Trypanosoma is a flagellate.",
            "bio-kingdom-protista", "Protozoans"
        ),
        (
            55,
            "The parasitic flagellated protozoan Trypanosoma causes which disease?",
            "Sleeping sickness", "Malaria", "Amoebiasis", "Kala-azar",
            "A",
            "Trypanosoma disease.",
            "1. Trypanosoma is a flagellated protozoan parasite that causes African sleeping sickness (transmitted by the tsetse fly).",
            "Malaria is caused by Plasmodium (sporozoan). Amoebiasis is caused by Entamoeba. Kala-azar is caused by Leishmania.",
            "bio-kingdom-protista", "Protozoans"
        ),
        (
            56,
            "Ciliated protozoans like Paramecium possess a cavity that opens to the outside of the cell surface called a:",
            "Gullet (cytostome)", "Contractile vacuole", "Pseudopodial pouch", "Flagellar pocket",
            "A",
            "Paramecium gullet.",
            "1. Ciliated protozoans are actively moving organisms with thousands of cilia.\n2. They possess a gullet (cytostome) that opens to the exterior, into which food is directed by coordinated ciliary beats.",
            "Contractile vacuoles serve osmoregulation, not ingestion.",
            "bio-kingdom-protista", "Protozoans"
        ),
        (
            57,
            "In Paramecium, the coordinated movement of rows of cilia drives water laden with food into the:",
            "Gullet", "Nucleus", "Contractile vacuole", "Pellicle pore",
            "A",
            "Ciliary feeding in Paramecium.",
            "1. Coordinated beats of cilia steer water and suspended food particles directly into the gullet.",
            "Water does not enter the nucleus or contractile vacuole directly from outside.",
            "bio-kingdom-protista", "Protozoans"
        ),
        (
            58,
            "Which group of protozoans includes organisms that have an infectious spore-like stage in their life cycle?",
            "Sporozoans", "Amoeboids", "Flagellates", "Ciliates",
            "A",
            "Sporozoans definition in NCERT.",
            "1. Sporozoans include diverse organisms that possess an infectious spore-like stage in their life cycle.\n2. The most notorious example is Plasmodium.",
            "Amoeboids, flagellates, and ciliates are named for their specific locomotory organelles.",
            "bio-kingdom-protista", "Protozoans"
        ),
        (
            59,
            "The malarial parasite Plasmodium belongs to which class of protozoans?",
            "Sporozoans", "Ciliated protozoans", "Flagellated protozoans", "Amoeboid protozoans",
            "A",
            "Plasmodium classification.",
            "1. Plasmodium is a sporozoan endoparasite that causes malaria in human populations.",
            "It lacks cilia, flagella (in vegetative trophozoite stage), and pseudopodia.",
            "bio-kingdom-protista", "Protozoans"
        ),
        (
            60,
            "Diatoms float passively in water currents; organisms that float passively in water currents are termed:",
            "Plankton", "Benthos", "Nekton", "Periphyton",
            "A",
            "Plankton definition in NCERT.",
            "1. Organisms that float passively in water currents are called plankton (phytoplankton or zooplankton).\n2. Diatoms are microscopic planktonic organisms.",
            "Benthos live at the bottom. Nekton are active swimmers like fish.",
            "bio-kingdom-protista", "Chrysophytes"
        ),
        (
            61,
            "Desmids are also commonly known as:",
            "Golden algae", "Green algae", "Brown algae", "Blue-green algae",
            "A",
            "Desmids common name.",
            "1. Desmids are unicellular green/golden organisms grouped under Chrysophytes and termed 'golden algae'.",
            "Blue-green algae are cyanobacteria. Brown algae are multicellular seaweeds.",
            "bio-kingdom-protista", "Chrysophytes"
        ),
        (
            62,
            "Which organelle in Euglena serves as a light receptor to detect the direction of light?",
            "Eyespot (stigma)", "Chloroplast", "Paramylon granule", "Contractile vacuole",
            "A",
            "Euglena phototaxis.",
            "1. Euglena possesses an eyespot (stigma) near the flagellar reservoir that senses light direction to facilitate phototaxis.",
            "Paramylon granules store polysaccharides. Contractile vacuole manages water balance.",
            "bio-kingdom-protista", "Euglenoids"
        ),
        (
            63,
            "Protozoans are believed to be primitive relatives of:",
            "Animals", "Plants", "Fungi", "Bacteria",
            "A",
            "Protozoans evolutionary lineage.",
            "1. NCERT explicitly states: 'They are believed to be primitive relatives of animals' because they are unicellular, heterotrophic, and show ingestive nutrition.",
            "Plants and fungi evolved from different protistan lines.",
            "bio-kingdom-protista", "Protozoans"
        ),
        (
            64,
            "Which of the following does NOT belong to Kingdom Protista?",
            "Nostoc", "Euglena", "Paramecium", "Amoeba",
            "A",
            "Kingdom Protista exclusions.",
            "1. Nostoc is a photosynthetic eubacterium (cyanobacterium) belonging to Kingdom Monera.\n2. Euglena, Paramecium, and Amoeba are unicellular eukaryotes placed in Kingdom Protista.",
            "Options B, C, and D are classical members of Kingdom Protista.",
            "bio-kingdom-protista", "Protista General Characteristics"
        ),
    ]
    
    for item in protista_qs:
        q_list.append(make_bc_q(
            item[0], item[1], item[2], item[3], item[4], item[5], item[6],
            item[7], item[8], item[9], "Easy", item[10], item[11]
        ))
        
    # Kingdom Fungi (Q65 - Q95)
    fungi_qs = [
        (
            65,
            "Kingdom Fungi constitutes a unique kingdom of:",
            "Heterotrophic organisms", "Autotrophic organisms", "Prokaryotic organisms", "Chemosynthetic organisms",
            "A",
            "Fungi nutritional nature.",
            "1. NCERT states: 'The fungi constitute a unique kingdom of heterotrophic organisms'.\n2. They show a great diversity in morphology and habitat.",
            "Fungi lack chlorophyll completely and can never be autotrophic or chemosynthetic.",
            "bio-kingdom-fungi", "General Characteristics of Fungi"
        ),
        (
            66,
            "Which unicellular fungus is used commercially to make bread and beer?",
            "Yeast (Saccharomyces)", "Penicillium", "Agaricus", "Mucor",
            "A",
            "Yeast in industry.",
            "1. Yeast (Saccharomyces cerevisiae) is a unicellular ascomycete fungus used in baking and alcoholic fermentation.",
            "Penicillium produces penicillin. Agaricus is mushroom. Mucor is bread mould.",
            "bio-kingdom-fungi", "General Characteristics of Fungi"
        ),
        (
            67,
            "Fungi prefer to grow in warm and:",
            "Humid places", "Dry places", "Frozen environments", "Saline deserts",
            "A",
            "Fungal optimum habitat.",
            "1. Fungi are cosmopolitan in distribution and grow best in warm and humid conditions.",
            "Dry and frozen environments inhibit fungal hyphal expansion and enzymatic action.",
            "bio-kingdom-fungi", "General Characteristics of Fungi"
        ),
        (
            68,
            "The bodies of most fungi consist of long, slender thread-like structures called:",
            "Hyphae", "Pili", "Spicules", "Trichomes",
            "A",
            "Hyphae definition.",
            "1. With the exception of yeasts which are unicellular, fungi are filamentous.\n2. Their bodies consist of long, slender thread-like structures called hyphae.",
            "Pili are bacterial surface appendages. Spicules are sponge skeletal elements. Trichomes are plant hairs.",
            "bio-kingdom-fungi", "Fungal Structure"
        ),
        (
            69,
            "The network of hyphae that constitutes the vegetative body of a fungus is known as:",
            "Mycelium", "Thallus", "Stolon", "Rhizome",
            "A",
            "Mycelium definition.",
            "1. NCERT specifies: 'The network of hyphae is known as mycelium'.",
            "Stolon and rhizome are specialized plant stem structures.",
            "bio-kingdom-fungi", "Fungal Structure"
        ),
        (
            70,
            "Hyphae that are continuous tubes filled with multinucleated cytoplasm without septa are termed:",
            "Coenocytic hyphae", "Septate hyphae", "Monokaryotic hyphae", "Pseudohyphae",
            "A",
            "Coenocytic hyphae definition.",
            "1. Continuous multinucleated hyphae lacking cross walls (septa) are termed coenocytic hyphae.\n2. These are characteristic of Phycomycetes.",
            "Septate hyphae have cross-walls dividing cells.",
            "bio-kingdom-fungi", "Fungal Structure"
        ),
        (
            71,
            "The cell walls of fungi are primarily composed of:",
            "Chitin and polysaccharides", "Cellulose and pectin", "Peptidoglycan and teichoic acid", "Silica and calcium",
            "A",
            "Fungal cell wall composition.",
            "1. The cell walls of fungi are composed of chitin (a polymer of N-acetylglucosamine) and polysaccharides (glucans).",
            "Cellulose is typical of plants. Peptidoglycan is bacterial. Silica is diatomaceous.",
            "bio-kingdom-fungi", "Fungal Structure"
        ),
        (
            72,
            "Fungi that absorb soluble organic matter from dead substrates are termed:",
            "Saprophytes", "Parasites", "Symbionts", "Autotrophs",
            "A",
            "Saprophytic nutrition in fungi.",
            "1. Most fungi absorb soluble organic matter from dead substrates and are hence called saprophytes.",
            "Parasites feed on living hosts. Symbionts live in mutually beneficial partnerships.",
            "bio-kingdom-fungi", "Fungal Nutrition"
        ),
        (
            73,
            "Symbiotic associations of fungi with roots of higher plants (such as Pinus) are known as:",
            "Mycorrhizae", "Lichens", "Coralloid roots", "Haustoria",
            "A",
            "Mycorrhizal association.",
            "1. A mutualistic association between a fungus and the roots of higher plants is called mycorrhiza (e.g., Glomus with Pinus).\n2. Associations with algae are lichens.",
            "Coralloid roots contain cyanobacteria in Cycas. Haustoria are parasitic absorbing organs.",
            "bio-kingdom-fungi", "Fungal Nutrition"
        ),
        (
            74,
            "Vegetative reproduction in fungi occurs by fragmentation, fission, and:",
            "Budding", "Conidia", "Ascospores", "Basidiospores",
            "A",
            "Vegetative reproduction modes in fungi.",
            "1. Vegetative reproduction in fungi takes place by fragmentation, fission, and budding (as in yeast).",
            "Conidia are asexual spores. Ascospores and basidiospores are sexual spores.",
            "bio-kingdom-fungi", "Fungal Reproduction"
        ),
        (
            75,
            "Which of the following is an ASEXUAL spore in fungi?",
            "Conidia", "Ascospore", "Basidiospore", "Oospore",
            "A",
            "Asexual vs sexual fungal spores.",
            "1. Asexual reproduction in fungi occurs by spores such as conidia, sporangiospores, or zoospores.\n2. Ascospores, basidiospores, and oospores are sexual spores.",
            "Options B, C, and D are products of sexual cycles.",
            "bio-kingdom-fungi", "Fungal Reproduction"
        ),
        (
            76,
            "The fusion of protoplasms between two motile or non-motile gametes during fungal sexual cycle is called:",
            "Plasmogamy", "Karyogamy", "Meiosis", "Dikaryophase",
            "A",
            "Plasmogamy definition.",
            "1. The sexual cycle involves three steps:\n   (i) Plasmogamy: fusion of protoplasms.\n   (ii) Karyogamy: fusion of two nuclei.\n   (iii) Meiosis in zygote.",
            "Karyogamy is nuclear fusion. Meiosis is reduction division.",
            "bio-kingdom-fungi", "Fungal Reproduction"
        ),
        (
            77,
            "The fusion of two nuclei during the sexual cycle of fungi is called:",
            "Karyogamy", "Plasmogamy", "Syngamy", "Cytokinesis",
            "A",
            "Karyogamy definition.",
            "1. Karyogamy is the specific fusion of two haploid nuclei to form a diploid nucleus.",
            "Plasmogamy precedes karyogamy and involves protoplasmic fusion.",
            "bio-kingdom-fungi", "Fungal Reproduction"
        ),
        (
            78,
            "A condition in fungi where a cell contains two nuclei per cell (n + n) is called:",
            "Dikaryon", "Syncytium", "Diploid", "Monokaryon",
            "A",
            "Dikaryon and dikaryophase in NCERT.",
            "1. In Ascomycetes and Basidiomycetes, an intervening dikaryotic stage (n + n, two nuclei per cell) occurs; such a condition is called a dikaryon, and the phase is called dikaryophase.",
            "Diploid means 2n with nuclei already fused. Monokaryon has one nucleus per cell.",
            "bio-kingdom-fungi", "Fungal Reproduction"
        ),
        (
            79,
            "Members of Phycomycetes are found in aquatic habitats and on decaying wood in moist and damp places or as obligate parasites on:",
            "Plants", "Insects", "Birds", "Mammals",
            "A",
            "Phycomycetes habitat.",
            "1. NCERT states: 'Members of phycomycetes are found in aquatic habitats and on decaying wood in moist and damp places or as obligate parasites on plants'.",
            "Examples include Albugo candida on mustard.",
            "bio-kingdom-fungi", "Phycomycetes"
        ),
        (
            80,
            "In Phycomycetes, the mycelium is characteristically:",
            "Aseptate and coenocytic", "Septate and branched", "Pseudohyphal and unicellular", "Uninucleate and septate",
            "A",
            "Phycomycetes mycelium structure.",
            "1. The mycelium of Phycomycetes is aseptate (no cross-walls) and coenocytic (multinucleated).",
            "Septate and branched mycelium is characteristic of Ascomycetes, Basidiomycetes, and Deuteromycetes.",
            "bio-kingdom-fungi", "Phycomycetes"
        ),
        (
            81,
            "Which of the following is a parasitic fungus belonging to Phycomycetes that causes white rust on mustard leaves?",
            "Albugo", "Rhizopus", "Mucor", "Puccinia",
            "A",
            "Albugo on mustard.",
            "1. Albugo candida is an obligate parasitic fungus on crucifers (such as mustard) belonging to Phycomycetes.",
            "Rhizopus is the bread mould. Mucor is saprophytic. Puccinia causes wheat rust (Basidiomycetes).",
            "bio-kingdom-fungi", "Phycomycetes"
        ),
        (
            82,
            "Ascomycetes are commonly known as:",
            "Sac fungi", "Club fungi", "Algal fungi", "Imperfect fungi",
            "A",
            "Fungal class common names.",
            "1. Ascomycetes are called 'sac fungi' because their sexual spores (ascospores) are formed inside sac-like structures called asci.",
            "Club fungi are Basidiomycetes. Algal fungi are Phycomycetes. Imperfect fungi are Deuteromycetes.",
            "bio-kingdom-fungi", "Ascomycetes"
        ),
        (
            83,
            "In Ascomycetes, asexual spores called conidia are produced:",
            "Exogenously on specialized mycelium called conidiophores", "Endogenously inside sporangia", "Endogenously inside asci", "Exogenously on basidia",
            "A",
            "Conidia formation in Ascomycetes.",
            "1. Asexual spores in Ascomycetes are conidia produced exogenously on the tips of specialized hyphae termed conidiophores.",
            "Ascospores are produced endogenously in asci. Basidiospores are produced exogenously on basidia.",
            "bio-kingdom-fungi", "Ascomycetes"
        ),
        (
            84,
            "Sexual spores of Ascomycetes called ascospores are produced:",
            "Endogenously in sac-like asci", "Exogenously on conidiophores", "Exogenously on basidia", "Endogenously inside zygospores",
            "A",
            "Ascospores formation.",
            "1. Ascospores are produced endogenously inside sac-like asci (singular: ascus).\n2. These asci are arranged in different types of fruiting bodies called ascocarps.",
            "Options B, C, and D are incorrect regarding ascospores.",
            "bio-kingdom-fungi", "Ascomycetes"
        ),
        (
            85,
            "Which fungus belonging to Ascomycetes is extensively used in biochemical and genetic work?",
            "Neurospora", "Penicillium", "Claviceps", "Aspergillus",
            "A",
            "Neurospora in genetics.",
            "1. Neurospora crassa is used extensively in biochemical and genetic research (often called the 'Drosophila of the plant kingdom').",
            "Penicillium produces antibiotic penicillin. Claviceps causes ergot disease.",
            "bio-kingdom-fungi", "Ascomycetes"
        ),
        (
            86,
            "Morels and truffles are delicacies belonging to which class of fungi?",
            "Ascomycetes", "Basidiomycetes", "Phycomycetes", "Deuteromycetes",
            "A",
            "Morels and truffles classification.",
            "1. Morels (Morchella) and truffles are edible delicacies belonging to Ascomycetes.",
            "They are praised culinary ascocarps.",
            "bio-kingdom-fungi", "Ascomycetes"
        ),
        (
            87,
            "Commonly known forms of Basidiomycetes include mushrooms, bracket fungi, and:",
            "Puffballs", "Morels", "Truffles", "Bread moulds",
            "A",
            "Basidiomycetes members.",
            "1. Commonly known forms of Basidiomycetes are mushrooms (Agaricus), bracket fungi, and puffballs (Lycoperdon).",
            "Morels and truffles are Ascomycetes; bread moulds are Phycomycetes (Rhizopus).",
            "bio-kingdom-fungi", "Basidiomycetes"
        ),
        (
            88,
            "In Basidiomycetes, sex organs are absent, but plasmogamy is brought about by fusion of two:",
            "Vegetative or somatic cells of different strains", "Flagellated motile gametes", "Antheridia and oogonia", "Ascospores",
            "A",
            "Basidiomycetes plasmogamy.",
            "1. Sex organs are absent in Basidiomycetes.\n2. Plasmogamy occurs by the fusion of two vegetative or somatic cells of different strains or genotypes, giving rise to a dikaryon.",
            "True gametangia like antheridia and oogonia are absent in Basidiomycetes.",
            "bio-kingdom-fungi", "Basidiomycetes"
        ),
        (
            89,
            "In Basidiomycetes, karyogamy and meiosis take place inside the basidium, producing how many basidiospores?",
            "Four basidiospores exogenously", "Eight ascospores endogenously", "Two basidiospores endogenously", "Four basidiospores endogenously",
            "A",
            "Basidiospore production.",
            "1. Karyogamy and meiosis occur inside the basidium, producing four basidiospores exogenously on sterigmata.",
            "Eight endogenous spores are ascospores in Ascomycetes.",
            "bio-kingdom-fungi", "Basidiomycetes"
        ),
        (
            90,
            "Puccinia causes which well-known disease in wheat crops?",
            "Wheat rust", "Wheat smut", "Citrus canker", "White rust of mustard",
            "A",
            "Puccinia wheat rust.",
            "1. Puccinia graminis is a basidiomycete fungus that causes wheat rust disease.",
            "Wheat smut is caused by Ustilago. Citrus canker is bacterial. White rust of mustard is caused by Albugo.",
            "bio-kingdom-fungi", "Basidiomycetes"
        ),
        (
            91,
            "Ustilago causes which plant disease?",
            "Smut", "Rust", "Blight", "Mildew",
            "A",
            "Ustilago smut.",
            "1. Ustilago (smut fungus) causes smut diseases in cereals (e.g., loose smut of wheat).",
            "Rust is caused by Puccinia.",
            "bio-kingdom-fungi", "Basidiomycetes"
        ),
        (
            92,
            "Deuteromycetes are commonly known as 'imperfect fungi' because:",
            "Only their asexual or vegetative phases are known", "They completely lack cell walls", "They lack genetic material", "They cannot absorb organic nutrients",
            "A",
            "Why Deuteromycetes are called imperfect fungi.",
            "1. Deuteromycetes are called imperfect fungi because only their asexual or vegetative stages have been observed; sexual stages are either absent or yet undiscovered.",
            "Options B, C, and D are factually false.",
            "bio-kingdom-fungi", "Deuteromycetes"
        ),
        (
            93,
            "Once perfect (sexual) stages of members of Deuteromycetes were discovered, they were often moved into which classes?",
            "Ascomycetes and Basidiomycetes", "Phycomycetes and Monera", "Protista and Plantae", "Archaea and Eubacteria",
            "A",
            "Taxonomic shift of Deuteromycetes.",
            "1. When the sexual stages of Deuteromycetes were discovered, they were correctly reclassified into Ascomycetes or Basidiomycetes based on ascospore or basidiospore formation.",
            "They are never shifted to prokaryotic kingdoms or Protista.",
            "bio-kingdom-fungi", "Deuteromycetes"
        ),
        (
            94,
            "A large number of Deuteromycetes are decomposers of litter and help significantly in:",
            "Mineral cycling", "Fixing atmospheric nitrogen", "Photosynthesis", "Formation of coral reefs",
            "A",
            "Deuteromycetes ecological role.",
            "1. NCERT highlights: 'A large number of them are decomposers of litter and help in mineral cycling'.",
            "They do not fix nitrogen or photosynthesize.",
            "bio-kingdom-fungi", "Deuteromycetes"
        ),
        (
            95,
            "Which of the following fungi belongs to Deuteromycetes?",
            "Alternaria, Colletotrichum, and Trichoderma", "Mucor, Rhizopus, and Albugo", "Aspergillus, Claviceps, and Neurospora", "Agaricus, Ustilago, and Puccinia",
            "A",
            "Examples of Deuteromycetes in NCERT.",
            "1. NCERT explicitly names Alternaria, Colletotrichum, and Trichoderma as examples of Deuteromycetes.",
            "Option B is Phycomycetes. Option C is Ascomycetes. Option D is Basidiomycetes.",
            "bio-kingdom-fungi", "Deuteromycetes"
        ),
    ]
    
    for item in fungi_qs:
        q_list.append(make_bc_q(
            item[0], item[1], item[2], item[3], item[4], item[5], item[6],
            item[7], item[8], item[9], "Easy", item[10], item[11]
        ))
        
    # Viruses, Viroids, Prions & Lichens (Q96 - Q125)
    acell_qs = [
        (
            96,
            "Viruses did not find a place in Whittaker's Five Kingdom Classification because they are:",
            "Acellular (non-cellular)", "Prokaryotic", "Autotrophic", "True fungi",
            "A",
            "Why viruses were excluded from 5-kingdom classification.",
            "1. In Whittaker's Five Kingdom classification, there is no mention of acellular organisms like viruses, viroids, and prions because they are not truly 'living' cellular entities.",
            "Options B, C, and D are false descriptions of viruses.",
            "bio-viruses-viroids-lichens", "Viruses Nature & Exclusion"
        ),
        (
            97,
            "Outside a host cell, viruses exist as:",
            "An inert crystalline structure", "An active vegetative cell", "A flagellated spore", "A mycelium",
            "A",
            "Inert crystalline state of viruses.",
            "1. Outside living cells, viruses are inert crystalline nucleoprotein particles without metabolic machinery of their own.",
            "Once inside a host cell, they take over the host machinery to replicate.",
            "bio-viruses-viroids-lichens", "Viruses Nature & Exclusion"
        ),
        (
            98,
            "The name 'virus' that means venom or poisonous fluid was given by:",
            "D.J. Ivanowsky", "M.W. Beijerinck", "W.M. Stanley", "Louis Pasteur",
            "A",
            "Origin of the name virus.",
            "1. NCERT mentions that the name virus that means venom or poisonous fluid was given by Pasteur (also historically associated with early virologists).",
            "Ivanowsky recognized TMV microbes. Beijerinck coined contagium vivum fluidum. Stanley crystallized viruses.",
            "bio-viruses-viroids-lichens", "Discovery of Viruses"
        ),
        (
            99,
            "Who recognized certain microbes as causal organisms of mosaic disease of tobacco that passed through bacteria-proof filters in 1892?",
            "D.J. Ivanowsky", "W.M. Stanley", "T.O. Diener", "Robert Hooke",
            "A",
            "D.J. Ivanowsky discovery (1892).",
            "1. In 1892, D.J. Ivanowsky recognized certain microbes as causal agents of mosaic disease of tobacco and showed they were smaller than bacteria because they passed through bacteria-proof filters.",
            "Stanley crystallized TMV in 1935. Diener discovered viroids in 1971.",
            "bio-viruses-viroids-lichens", "Discovery of Viruses"
        ),
        (
            100,
            "Who demonstrated in 1898 that the extract of infected tobacco plants could infect healthy plants and called the fluid 'Contagium vivum fluidum'?",
            "M.W. Beijerinck", "D.J. Ivanowsky", "W.M. Stanley", "Alexander Fleming",
            "A",
            "Beijerinck Contagium vivum fluidum.",
            "1. M.W. Beijerinck (1898) demonstrated that tobacco mosaic extract was infectious and coined the phrase 'Contagium vivum fluidum' (living infectious fluid).",
            "Ivanowsky showed filterability. Stanley crystallized viruses. Fleming discovered penicillin.",
            "bio-viruses-viroids-lichens", "Discovery of Viruses"
        ),
        (
            101,
            "Who first showed in 1935 that viruses could be crystallized, and that the crystals consist largely of proteins?",
            "W.M. Stanley", "D.J. Ivanowsky", "M.W. Beijerinck", "T.O. Diener",
            "A",
            "W.M. Stanley crystallization (1935).",
            "1. W.M. Stanley (1935) demonstrated that viruses can be crystallized and that crystals consist largely of proteins.\n2. They are inert outside their specific host cell.",
            "Options B, C, and D are associated with different biological breakthroughs.",
            "bio-viruses-viroids-lichens", "Discovery of Viruses"
        ),
        (
            102,
            "In addition to proteins, all viruses contain genetic material, which can be:",
            "Either RNA or DNA, never both", "Both RNA and DNA simultaneously", "Only double-stranded DNA", "Only single-stranded RNA",
            "A",
            "Viral genetic material rule.",
            "1. NCERT explicitly states: 'No virus contains both RNA and DNA'.\n2. A virus is a nucleoprotein and the genetic material is infectious.",
            "A virus never contains both RNA and DNA inside the same capsid.",
            "bio-viruses-viroids-lichens", "Virus Structure"
        ),
        (
            103,
            "Viruses that infect plants generally possess:",
            "Single-stranded RNA (ssRNA)", "Double-stranded DNA (dsDNA)", "Double-stranded RNA only", "Single-stranded DNA only",
            "A",
            "Plant virus genetic material.",
            "1. Viruses that infect plants typically have single-stranded RNA (e.g., Tobacco Mosaic Virus).",
            "Bacteriophages usually have dsDNA. Animal viruses can have ssRNA, dsRNA, or dsDNA.",
            "bio-viruses-viroids-lichens", "Virus Structure"
        ),
        (
            104,
            "Bacteriophages (viruses that infect bacteria) are usually characterized by having:",
            "Double-stranded DNA", "Single-stranded RNA", "Single-stranded DNA", "Double-stranded RNA",
            "A",
            "Bacteriophage genetic material.",
            "1. NCERT states: 'Bacterial viruses or bacteriophages (viruses that infect bacteria) are usually double stranded DNA viruses'.",
            "Options B, C, and D represent other viral classes.",
            "bio-viruses-viroids-lichens", "Virus Structure"
        ),
        (
            105,
            "The protein coat of a virus is called capsid, and it is made of small subunits called:",
            "Capsomeres", "Prions", "Peptidoglycans", "Centromeres",
            "A",
            "Capsid and capsomeres.",
            "1. The protein coat called capsid protects the viral nucleic acid.\n2. It is made of small repeating protein subunits called capsomeres arranged in helical or polyhedral geometric forms.",
            "Peptidoglycans form bacterial walls. Centromeres link sister chromatids.",
            "bio-viruses-viroids-lichens", "Virus Structure"
        ),
        (
            106,
            "Which of the following diseases in humans is caused by a virus?",
            "Mumps, smallpox, herpes, and influenza", "Typhoid and cholera", "Tetanus and tuberculosis", "Amoebic dysentery and malaria",
            "A",
            "Human viral diseases in NCERT.",
            "1. NCERT lists: 'Mumps, smallpox, herpes and influenza are caused by viruses. AIDS in humans is also caused by a virus (HIV)'.",
            "Typhoid, cholera, tetanus, and TB are bacterial. Amoebiasis and malaria are protozoan.",
            "bio-viruses-viroids-lichens", "Viral Diseases"
        ),
        (
            107,
            "Which of the following is a common symptom of viral infections in plants?",
            "Mosaic formation, leaf rolling and curling, yellowing and vein clearing, dwarfing", "Formation of root nodules", "Production of sweet nectar", "Excessive chlorophyll synthesis causing deep green leaves",
            "A",
            "Plant viral symptoms in NCERT.",
            "1. In plants, the symptoms of viral disease can be mosaic formation, leaf rolling and curling, yellowing and vein clearing, dwarfing, and stunted growth.",
            "Root nodules are bacterial (Rhizobium).",
            "bio-viruses-viroids-lichens", "Viral Diseases"
        ),
        (
            108,
            "Viroids were discovered in 1971 by:",
            "T.O. Diener", "W.M. Stanley", "D.J. Ivanowsky", "M.W. Beijerinck",
            "A",
            "T.O. Diener viroid discovery.",
            "1. In 1971, T.O. Diener discovered a new infectious agent smaller than viruses that caused potato spindle tuber disease.",
            "Stanley crystallized viruses. Ivanowsky discovered TMV filterability. Beijerinck proposed contagium vivum fluidum.",
            "bio-viruses-viroids-lichens", "Viroids"
        ),
        (
            109,
            "Viroids differ from viruses in that viroids:",
            "Lack a protein coat and consist of free RNA", "Possess a thick peptidoglycan coat", "Contain double-stranded DNA", "Have high molecular weight RNA",
            "A",
            "Viroid characteristics vs viruses.",
            "1. Viroids are naked infectious agents consisting of free low molecular weight RNA.\n2. They completely lack the protein coat (capsid) found in viruses.",
            "Options B, C, and D are factually false.",
            "bio-viruses-viroids-lichens", "Viroids"
        ),
        (
            110,
            "The molecular weight of RNA in viroids is:",
            "Low", "Extremely high", "Variable depending on temperature", "Identical to human genomic DNA",
            "A",
            "Viroid RNA molecular weight.",
            "1. NCERT explicitly states: 'The RNA of the viroid was of low molecular weight'.",
            "High molecular weight RNA is found in retroviruses and eukaryotic transcripts.",
            "bio-viruses-viroids-lichens", "Viroids"
        ),
        (
            111,
            "Potato Spindle Tuber Disease is caused by which agent?",
            "Viroid", "Virus", "Bacterium", "Prion",
            "A",
            "Potato spindle tuber disease agent.",
            "1. Potato spindle tuber disease (PSTD) is caused by a viroid discovered by T.O. Diener in 1971.",
            "It is not caused by a virus, bacterium, or prion.",
            "bio-viruses-viroids-lichens", "Viroids"
        ),
        (
            112,
            "Prions are infectious agents consisting of abnormally folded:",
            "Proteins", "Single-stranded RNA", "Double-stranded DNA", "Phospholipids",
            "A",
            "Prion composition.",
            "1. Prions are neurological infectious agents consisting solely of abnormally folded proteins.\n2. They are similar in size to viruses.",
            "Prions do not contain any detectable nucleic acid (neither DNA nor RNA).",
            "bio-viruses-viroids-lichens", "Prions"
        ),
        (
            113,
            "Which bovine neurological disease is caused by prions?",
            "Bovine Spongiform Encephalopathy (BSE) or Mad Cow Disease", "Citrus canker", "Foot and mouth disease", "Rinderpest",
            "A",
            "Prion diseases in cattle.",
            "1. The most notable disease caused by prions is Bovine Spongiform Encephalopathy (BSE), commonly known as mad cow disease in cattle.",
            "Its analogous disease in humans is Cr-Jacob disease (CJD).",
            "bio-viruses-viroids-lichens", "Prions"
        ),
        (
            114,
            "In humans, the neurological disorder analogous to mad cow disease caused by prions is:",
            "Cr-Jacob Disease (CJD)", "Parkinson's disease", "Alzheimer's disease", "Huntington's chorea",
            "A",
            "Human prion disease in NCERT.",
            "1. NCERT states: 'The most notable diseases caused by prions are bovine spongiform encephalopathy (BSE) commonly called mad cow disease in cattle and its analogous variant Cr-Jacob disease (CJD) in humans'.",
            "Options B, C, and D have distinct multifactorial or genetic etiologies.",
            "bio-viruses-viroids-lichens", "Prions"
        ),
        (
            115,
            "Lichens are symbiotic associations between:",
            "Algae and fungi", "Fungi and roots of higher plants", "Bacteria and viruses", "Algae and bryophytes",
            "A",
            "Lichen symbiotic partners.",
            "1. Lichens are mutually useful symbiotic associations between algae and fungi.",
            "Fungi and higher plant roots form mycorrhizae.",
            "bio-viruses-viroids-lichens", "Lichens"
        ),
        (
            116,
            "The algal component of a lichen is called:",
            "Phycobiont", "Mycobiont", "Bacteriobiont", "Haustorium",
            "A",
            "Phycobiont definition.",
            "1. The algal component of a lichen is called phycobiont (autotrophic), while the fungal component is called mycobiont (heterotrophic).",
            "Mycobiont is the fungal partner.",
            "bio-viruses-viroids-lichens", "Lichens"
        ),
        (
            117,
            "The fungal component of a lichen is called:",
            "Mycobiont", "Phycobiont", "Zoobiont", "Phytobiont",
            "A",
            "Mycobiont definition.",
            "1. The fungal partner in a lichen is termed the mycobiont.\n2. It provides shelter and absorbs mineral nutrients and water for its partner.",
            "Phycobiont is the algal component.",
            "bio-viruses-viroids-lichens", "Lichens"
        ),
        (
            118,
            "In a lichen association, what is the primary role of the algal partner (phycobiont)?",
            "Prepare food for the fungus by photosynthesis", "Provide shelter to the fungus", "Absorb water and minerals from rock surface", "Produce sexual ascospores",
            "A",
            "Role of phycobiont in lichens.",
            "1. Algae synthesize food for the fungus because they are photosynthetic autotrophs.\n2. The fungus provides shelter and absorbs minerals and water.",
            "Shelter and mineral absorption are fungal functions.",
            "bio-viruses-viroids-lichens", "Lichens"
        ),
        (
            119,
            "In a lichen association, what is the primary role of the fungal partner (mycobiont)?",
            "Provide shelter and absorb mineral nutrients and water", "Synthesize carbohydrates via photosynthesis", "Produce oxygen for the atmosphere", "Fix nitrogen in heterocysts",
            "A",
            "Role of mycobiont in lichens.",
            "1. The fungal partner provides shelter and absorbs water and mineral nutrients from the substratum for the algal partner.",
            "Photosynthesis is carried out by the phycobiont.",
            "bio-viruses-viroids-lichens", "Lichens"
        ),
        (
            120,
            "Lichens are very sensitive to air pollution and do not grow in polluted areas; therefore, they serve as excellent:",
            "Pollution indicators (specifically SO2)", "Fertilizers for crops", "Sources of methane gas", "Antibiotic producers",
            "A",
            "Lichens as pollution indicators.",
            "1. Lichens do not grow in polluted environments (especially where sulphur dioxide, SO2, levels are high).\n2. Hence, they are recognized as very good pollution bio-indicators.",
            "They are not commercial fertilizers or methane producers.",
            "bio-viruses-viroids-lichens", "Lichens"
        ),
        (
            121,
            "The association between algae and fungi in lichens is so close that if seen in nature, one would never imagine that they had:",
            "Two different organisms within them", "Any cellular structure", "Any connection to water", "Any ability to reproduce",
            "A",
            "Verbatim NCERT quote on lichens.",
            "1. NCERT states: 'Their association is so close that when seen in nature one would never imagine that they had two different organisms within them'.",
            "Options B, C, and D are illogical interpretations.",
            "bio-viruses-viroids-lichens", "Lichens"
        ),
        (
            122,
            "Which of the following organisms can survive without oxygen and are completely resistant to penicillin?",
            "Mycoplasma", "Saccharomyces", "Nostoc", "Penicillium",
            "A",
            "Mycoplasma properties.",
            "1. Mycoplasmas can survive anaerobically and lack a peptidoglycan cell wall.\n2. Because penicillin works by blocking peptidoglycan cell wall synthesis, Mycoplasmas are naturally resistant to it.",
            "Penicillium produces penicillin. Nostoc has a peptidoglycan cell wall sensitive to antibiotics.",
            "bio-viruses-viroids-lichens", "Mycoplasma"
        ),
        (
            123,
            "The genetic material of Tobacco Mosaic Virus (TMV) is:",
            "Single-stranded RNA", "Double-stranded DNA", "Double-stranded RNA", "Single-stranded DNA",
            "A",
            "TMV genetic material.",
            "1. Tobacco Mosaic Virus (TMV) has a single-stranded RNA (ssRNA) surrounded by a helical capsid made of capsomeres.",
            "dsDNA is typical of bacteriophages like T4.",
            "bio-viruses-viroids-lichens", "Virus Structure"
        ),
        (
            124,
            "Which of the following is an obligate intracellular parasite?",
            "Virus", "Lichen", "Mycorrhiza", "Saccharomyces",
            "A",
            "Obligate intracellular parasitism of viruses.",
            "1. Viruses cannot reproduce or perform any metabolic reaction outside a living host cell.\n2. Therefore, they are obligate intracellular parasites.",
            "Lichens and mycorrhizae are mutualists. Saccharomyces is a saprophyte.",
            "bio-viruses-viroids-lichens", "Viruses Nature & Exclusion"
        ),
        (
            125,
            "A scientist observed an infectious agent that caused disease in plants, lacked any protein coat, and possessed low molecular weight RNA. This agent must be a:",
            "Viroid", "Virus", "Bacterium", "Prion",
            "A",
            "Diagnostic characteristics of viroids.",
            "1. An infectious agent composed solely of naked low molecular weight RNA without a protein coat is uniquely a viroid (discovered by T.O. Diener).",
            "Viruses have protein coats. Prions have protein only. Bacteria are cellular organisms.",
            "bio-viruses-viroids-lichens", "Viroids"
        ),
    ]
    
    for item in acell_qs:
        q_list.append(make_bc_q(
            item[0], item[1], item[2], item[3], item[4], item[5], item[6],
            item[7], item[8], item[9], "Easy", item[10], item[11]
        ))
        
    print(f"Part 1 built with {len(q_list)} questions.")
    ts_code = format_ts_file(1, q_list)
    out_file = os.path.join(OUT_DIR, "biologicalClassificationPart1.ts")
    with open(out_file, "w") as f:
        f.write(ts_code)
    print(f"Saved Part 1 to {out_file}")

if __name__ == "__main__":
    build_part1()
