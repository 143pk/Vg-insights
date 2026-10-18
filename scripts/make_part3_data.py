import json
import os
import sys

def build_part3():
    qs = []
    
    def add(num, text, a, b, c, d, ans, concept, step, why_wrong, top, sub):
        qs.append((num, text, a, b, c, d, ans, concept, step, why_wrong, top, sub))
        
    # --- MONERA (Q251 - Q281) ---
    add(251, "Which of the following cellular components is found in cyanobacteria that enables oxygenic photosynthesis?",
        "Photosystem II with chlorophyll a", "Bacteriochlorophyll with infrared absorption", "Carotenoids without reaction center", "Phycobilins without thylakoid lamellae",
        "A", "Cyanobacterial photosynthetic machinery.",
        "1. Cyanobacteria are the only prokaryotes that perform oxygenic photosynthesis.\n2. They possess chlorophyll a and Photosystem II, which can photolyze water to produce molecular oxygen.",
        "Bacteriochlorophyll is found in anoxygenic purple and green bacteria. Carotenoids and phycobilins are accessory pigments, not standalone photosynthetic centers.",
        "bio-systems-monera", "Photosynthetic Machinery")
        
    add(252, "In Gram-negative eubacteria, the cell wall is distinct because it possesses:",
        "An outer membrane rich in lipopolysaccharides (LPS) and a thin peptidoglycan layer", "A very thick peptidoglycan layer with teichoic acid", "A cell wall composed of chitin microfibrils", "A pseudomurein wall with L-amino acids",
        "A", "Gram-negative bacterial envelope architecture.",
        "1. Gram-negative bacteria have a thin peptidoglycan layer enclosed by an outer membrane containing lipopolysaccharides (LPS) and phospholipids.\n2. In contrast, Gram-positive bacteria possess a thick peptidoglycan layer containing teichoic acids.",
        "Option B describes Gram-positive bacteria. Option C is characteristic of fungi. Option D is found in certain archaebacteria.",
        "bio-systems-monera", "Bacterial Cell Envelope")

    add(253, "Plasmids in bacteria are best described as:",
        "Small, circular, double-stranded, extrachromosomal self-replicating DNA molecules", "Linear single-stranded genomic RNA fragments", "Infolded mesosomal invaginations of plasma membrane", "Ribosomal subunits specialized for toxin secretion",
        "A", "Bacterial plasmid definition.",
        "1. Plasmids are extrachromosomal, double-stranded, closed circular DNA molecules capable of autonomous self-replication.\n2. They carry non-essential yet beneficial genes, such as antibiotic resistance (R-factors) and fertility (F-factors).",
        "Options B, C, and D describe completely different cellular structures.",
        "bio-systems-monera", "Extrachromosomal DNA")

    add(254, "Which of the following archaebacteria is responsible for generating combustible methane gas from organic decomposition in wetlands and marshes?",
        "Methanococcus and Methanobacterium", "Halobacterium salinarum", "Sulfolobus acidocaldarius", "Thermus aquaticus",
        "A", "Methanogen genera and ecological niche.",
        "1. Methanococcus and Methanobacterium are strictly anaerobic methanogenic archaebacteria that reduce CO2 or acetate into methane (CH4) in marshes, sludge, and ruminant digestive tracts.",
        "Halobacterium is a halophile. Sulfolobus is a thermoacidophile. Thermus aquaticus is an extreme thermophilic eubacterium.",
        "bio-systems-monera", "Archaebacterial Genera")

    add(255, "Chemoautotrophic bacteria obtain metabolic energy by:",
        "Oxidizing inorganic chemical bonds without utilizing sunlight", "Absorbing photons through bacterial rhodopsin", "Fermenting host sugars into ethanol", "Decomposing dead cellulose by hydrolytic cellulases",
        "A", "Chemoautotrophic energy conservation.",
        "1. Chemoautotrophs (such as Nitrosomonas, Nitrobacter, Thiobacillus) oxidize inorganic substrates (e.g., NH3, NO2-, H2S, Fe2+) to create a proton motive force and synthesize ATP without light.",
        "Photons are used by photoautotrophs. Fermentation and cellulose decomposition are heterotrophic pathways.",
        "bio-systems-monera", "Chemoautotrophic Metabolism")

    add(256, "The conversion of ammonia into nitrite in the soil is catalyzed by which chemosynthetic bacterium?",
        "Nitrosomonas (and Nitrococcus)", "Nitrobacter", "Rhizobium", "Clostridium",
        "A", "Nitrification stage 1: Ammonia oxidation.",
        "1. Nitrification occurs in two distinct steps: 2NH3 + 3O2 -> 2NO2- + 2H+ + 2H2O catalyzed by Nitrosomonas and Nitrococcus.\n2. The oxidation of nitrite to nitrate is then catalyzed by Nitrobacter.",
        "Nitrobacter oxidizes nitrite to nitrate. Rhizobium fixes atmospheric N2 into ammonia symbiotically. Clostridium is a free-living anaerobic nitrogen fixer.",
        "bio-systems-monera", "Nitrifying Bacteria")

    add(257, "Which chemosynthetic bacterium oxidizes nitrite into nitrate in agricultural soils?",
        "Nitrobacter", "Nitrosomonas", "Azotobacter", "Lactobacillus",
        "A", "Nitrification stage 2: Nitrite oxidation.",
        "1. Nitrobacter is an obligate chemoautotrophic bacterium that oxidizes nitrite (NO2-) to nitrate (NO3-): 2NO2- + O2 -> 2NO3-.",
        "Nitrosomonas converts ammonia to nitrite. Azotobacter fixes free atmospheric nitrogen. Lactobacillus converts lactose to lactic acid.",
        "bio-systems-monera", "Nitrifying Bacteria")

    add(258, "The bacterial flagellum consists of which three morphological parts?",
        "Basal body, hook, and filament", "Centriole, axoneme, and kinetosome", "Pellicle, mastigoneme, and paraxonemal rod", "Head, collar, and contractile sheath",
        "A", "Bacterial flagellum anatomy.",
        "1. A bacterial flagellum consists of three components: (i) Basal body (embedded in the envelope with rings), (ii) Hook (curved coupling sleeve), and (iii) Filament (long tubular helical strand made of flagellin).",
        "Option B refers to eukaryotic cilia/flagella. Option C refers to euglenoid flagella. Option D describes bacteriophage T4.",
        "bio-systems-monera", "Bacterial Flagellum")

    add(259, "The filament of a bacterial flagellum is composed of repeating subunits of the globular protein:",
        "Flagellin", "Tubulin", "Actin", "Pilina",
        "A", "Bacterial flagellar protein.",
        "1. Bacterial flagella are composed of flagellin subunits arranged in a helical hollow cylinder.\n2. Unlike eukaryotic flagella (which contain tubulin in a 9+2 arrangement), bacterial flagella do not contain tubulin or dynein.",
        "Tubulin is eukaryotic. Actin forms microfilaments. Pilin forms bacterial pili.",
        "bio-systems-monera", "Bacterial Flagellum")

    add(260, "Mesosomes in bacteria are extensions of which cellular layer into the cytoplasm?",
        "Plasma membrane", "Glycocalyx", "Peptidoglycan wall", "Nuclear envelope",
        "A", "Mesosome origin in bacteria.",
        "1. Mesosomes are specialized membranous structures formed by the invagination of the plasma membrane into the bacterial cell cytoplasm.\n2. They occur in the form of vesicles, tubules, and lamellae.",
        "Glycocalyx is the outermost slime layer/capsule. The peptidoglycan wall is external to the plasma membrane. Bacteria lack a nuclear envelope.",
        "bio-systems-monera", "Bacterial Mesosomes")

    add(261, "Which of the following functions is NOT performed by bacterial mesosomes?",
        "Protein synthesis on 80S ribosomes", "Cell wall formation", "DNA replication and distribution to daughter cells", "Respiration and secretion processes",
        "A", "Functions of bacterial mesosomes.",
        "1. Mesosomes help in cell wall formation, DNA replication, distribution to daughter cells, respiration, and secretion processes.\n2. They do NOT contain 80S ribosomes; bacteria possess only 70S ribosomes.",
        "Options B, C, and D are all explicitly verified functions of mesosomes described in NCERT.",
        "bio-systems-monera", "Bacterial Mesosomes")

    add(262, "Chromatophores are pigment-containing membranous extensions of the plasma membrane found in:",
        "Cyanobacteria and photosynthetic bacteria", "All mycoplasmas", "Methanogens", "Gram-positive bacilli only",
        "A", "Chromatophores distribution in prokaryotes.",
        "1. In photosynthetic prokaryotes like cyanobacteria and purple bacteria, membranous extensions into the cytoplasm containing pigments are called chromatophores or thylakoid lamellae.",
        "Mycoplasmas lack pigments and cell walls. Methanogens lack photosynthetic apparatus.",
        "bio-systems-monera", "Photosynthetic Structures")

    add(263, "In cyanobacteria like Nostoc, vegetative reproduction occurs by the breakage of filaments into small fragments called:",
        "Hormogonia", "Conidia", "Ascospores", "Gemmules",
        "A", "Cyanobacterial fragmentation into hormogonia.",
        "1. Filamentous cyanobacteria like Nostoc and Oscillatoria reproduce vegetatively when the trichome breaks into short multicellular segments called hormogonia.",
        "Conidia and ascospores are fungal spores. Gemmules are internal buds in freshwater sponges (Spongilla).",
        "bio-systems-monera", "Cyanobacterial Reproduction")

    add(264, "Bacterial conjugation involves the direct transfer of genetic material between two cells mediated by:",
        "A sex pilus (conjugation tube)", "Flagellar rotation", "Endospore fusion", "Bacteriophage capsids",
        "A", "Mechanism of bacterial conjugation.",
        "1. Bacterial conjugation is mediated by a specialized surface appendage called a sex pilus encoded by the fertility factor (F plasmid).\n2. The donor cell (F+) extends a pilus that makes contact with the recipient (F-) cell to facilitate single-stranded DNA transfer.",
        "Flagella mediate locomotion, not DNA conjugation. Bacteriophages mediate transduction, not conjugation.",
        "bio-systems-monera", "Bacterial Genetic Recombination")

    add(265, "The uptake of naked foreign DNA from the surrounding medium by a competent bacterial cell is called:",
        "Transformation", "Transduction", "Conjugation", "Translation",
        "A", "Bacterial transformation definition.",
        "1. Transformation is the process by which a competent bacterium takes up naked DNA fragments from its extracellular environment (first demonstrated by Frederick Griffith in Streptococcus pneumoniae in 1928).",
        "Transduction is virus-mediated DNA transfer. Conjugation is cell-to-cell plasmid transfer. Translation is protein synthesis.",
        "bio-systems-monera", "Bacterial Genetic Recombination")

    add(266, "Bacteriophage-mediated transfer of bacterial genes from one bacterium to another is designated as:",
        "Transduction", "Transformation", "Conjugation", "Transcription",
        "A", "Transduction definition and discovery.",
        "1. Transduction is the transfer of bacterial DNA from a donor to a recipient cell mediated by a bacteriophage (discovered by Zinder and Lederberg in Salmonella in 1952).",
        "Transformation involves naked DNA. Conjugation involves a sex pilus. Transcription is RNA synthesis from DNA.",
        "bio-systems-monera", "Bacterial Genetic Recombination")

    add(267, "Which chemical compound is responsible for the extreme heat and desiccation resistance of bacterial endospores?",
        "Dipicolinic acid complexed with calcium (Calcium dipicolinate)", "Peptidoglycan monomer with D-alanine", "Cellulose-pectin fibrillar mesh", "Hyaluronic acid polymer",
        "A", "Endospore heat resistance biochemistry.",
        "1. Bacterial endospores (formed by Bacillus and Clostridium) contain calcium dipicolinate (dipicolinic acid complexed with Ca2+) in their dehydrated core.\n2. This complex stabilizes spore DNA and proteins against thermal denaturation.",
        "Options B, C, and D are not the specific chemical complexes responsible for endospore extreme thermotolerance.",
        "bio-systems-monera", "Bacterial Endospores")

    add(268, "Why do beta-lactam antibiotics like penicillin fail to kill Mycoplasma species?",
        "Because Mycoplasma completely lacks a peptidoglycan cell wall", "Because Mycoplasma possesses an impenetrable outer membrane", "Because Mycoplasma destroys penicillin with 80S ribosomes", "Because Mycoplasma contains chitinous wall shields",
        "A", "Mechanism of penicillin resistance in Mycoplasma.",
        "1. Penicillin acts by inhibiting transpeptidase enzymes that cross-link peptidoglycan in bacterial cell walls.\n2. Since Mycoplasma naturally and completely lacks a cell wall, penicillin has no target structure to attack.",
        "Options B, C, and D state physiological falsehoods regarding Mycoplasma.",
        "bio-systems-monera", "Mycoplasma Pharmacology")

    add(269, "Mycoplasma species are known to cause which disease in human beings?",
        "Atypical walking pneumonia (caused by M. pneumoniae)", "Typhoid fever", "Cholera", "Tetanus",
        "A", "Mycoplasma human pathology.",
        "1. Mycoplasma pneumoniae causes primary atypical pneumonia (walking pneumonia) in humans.\n2. In plants, mycoplasmas (phytoplasmas) cause diseases like little leaf of brinjal and aster yellows.",
        "Typhoid is caused by Salmonella typhi. Cholera is caused by Vibrio cholerae. Tetanus is caused by Clostridium tetani.",
        "bio-systems-monera", "Mycoplasma Pathology")

    add(270, "Which genus of free-living aerobic nitrogen-fixing bacteria is commonly found in agricultural soils?",
        "Azotobacter", "Rhizobium", "Frankia", "Nitrosomonas",
        "A", "Free-living aerobic nitrogen fixers.",
        "1. Azotobacter and Beijerinckia are free-living, aerobic bacteria capable of fixing atmospheric nitrogen in soil.",
        "Rhizobium and Frankia are symbiotic nitrogen fixers. Nitrosomonas is a nitrifying chemoautotroph.",
        "bio-systems-monera", "Nitrogen Fixing Bacteria")

    add(271, "Which actinomycete forms symbiotic nitrogen-fixing root nodules in non-leguminous plants such as Alnus (alder)?",
        "Frankia", "Rhizobium", "Clostridium", "Spirillum",
        "A", "Frankia actinomycete symbiosis.",
        "1. Frankia is a filamentous nitrogen-fixing actinomycete that forms root nodules in non-leguminous angiosperms such as Alnus and Casuarina.",
        "Rhizobium forms nodules on legumes. Clostridium is a free-living anaerobic bacterium.",
        "bio-systems-monera", "Symbiotic Nitrogen Fixation")

    add(272, "The purple sulphur bacteria and green sulphur bacteria use which electron donor during anoxygenic photosynthesis?",
        "Hydrogen sulphide (H2S)", "Water (H2O)", "Oxygen gas (O2)", "Glucose (C6H12O6)",
        "A", "Anoxygenic photosynthesis electron donor.",
        "1. Purple and green sulphur bacteria do not use water as an electron donor; instead, they use hydrogen sulphide (H2S) or thiosulphate.\n2. Consequently, they do not evolve oxygen; sulphur or sulphate is deposited as a by-product.",
        "Water is the electron donor in oxygenic photosynthesis (cyanobacteria, algae, plants).",
        "bio-systems-monera", "Anoxygenic Photosynthesis")

    add(273, "Which of the following represents a Gram-positive, spore-forming, anaerobic rod-shaped bacterium that causes tetanus?",
        "Clostridium tetani", "Vibrio cholerae", "Salmonella typhi", "Streptococcus pneumoniae",
        "A", "Clostridium tetani biological profile.",
        "1. Clostridium tetani is an anaerobic, Gram-positive, endospore-forming rod (bacillus) that produces the neurotoxin tetanospasmin, causing sustained muscle spasms (tetanus).",
        "Vibrio cholerae is a comma-shaped Gram-negative aerobe. Salmonella typhi is a Gram-negative bacillus. Streptococcus pneumoniae is a catalase-negative spherical bacterium.",
        "bio-systems-monera", "Pathogenic Eubacteria")

    add(274, "Crown gall disease in dicotyledonous plants is caused by which soil bacterium carrying the Ti plasmid?",
        "Agrobacterium tumefaciens", "Rhizobium leguminosarum", "Xanthomonas citri", "Pseudomonas putida",
        "A", "Agrobacterium and Ti plasmid.",
        "1. Agrobacterium tumefaciens carries the Ti (Tumor-inducing) plasmid, whose T-DNA integrates into plant genomes causing crown gall tumors (used as a natural genetic engineer in biotechnology).",
        "Rhizobium forms nodules without galls. Xanthomonas causes citrus canker. Pseudomonas putida digests hydrocarbons.",
        "bio-systems-monera", "Plant Pathogenic Bacteria")

    add(275, "The cellular envelope of a typical bacterium consists of a tightly bound three-layered structure comprising:",
        "Outermost glycocalyx, middle cell wall, and inner plasma membrane", "Outermost plasma membrane, middle cell wall, and inner glycocalyx", "Outermost peptidoglycan, middle cellulose, and inner pellicle", "Outermost chitin, middle peptidoglycan, and inner capsule",
        "A", "Bacterial envelope 3-layer order.",
        "1. NCERT states: 'Although each layer of the envelope performs distinct function, they act together as a single protective unit... glycocalyx followed by the cell wall and then the plasma membrane'.",
        "Options B, C, and D present wrong sequences or components absent in bacteria.",
        "bio-systems-monera", "Bacterial Cell Envelope")

    add(276, "When the bacterial glycocalyx is a loose, thin sheath, it is called a slime layer; when it is thick and tough, it is called a:",
        "Capsule", "Pellicle", "Frustule", "Periderm",
        "A", "Glycocalyx types in NCERT.",
        "1. NCERT states: 'Glycocalyx differs in composition and thickness among different bacteria. It could be a loose sheath called the slime layer in some, while in others it may be thick and tough, called the capsule'.",
        "Pellicle is protistan. Frustule is diatomaceous. Periderm is secondary plant bark.",
        "bio-systems-monera", "Bacterial Cell Envelope")

    add(277, "Which surface appendages of bacteria are tubular protein structures made of pilin and involved in mating or attachment?",
        "Pili and fimbriae", "Axonemes and dynein arms", "Cilia and undulating membranes", "Pseudopodia and lobopodia",
        "A", "Pili and fimbriae functions.",
        "1. Pili are elongated tubular structures made of a special protein (pilin).\n2. Fimbriae are small bristle-like fibers sprouting out of the cell that help attach bacteria to rocks in streams and to host tissues.",
        "Options B, C, and D are eukaryotic locomotory organelles.",
        "bio-systems-monera", "Bacterial Appendages")

    add(278, "Do pili and fimbriae play any role in bacterial motility?",
        "No, they are exclusively for attachment and gene transfer", "Yes, they provide rapid swimming propulsion", "Yes, they beat synchronously like eukaryotic cilia", "Yes, they contract like amoeboid pseudopodia",
        "A", "Non-motile role of pili and fimbriae.",
        "1. NCERT explicitly clarifies: 'Pili and fimbriae do not play a role in motility'.\n2. Motility in bacteria is mediated strictly by flagella or gliding mechanisms.",
        "Options B, C, and D incorrectly assign locomotory functions to pili.",
        "bio-systems-monera", "Bacterial Appendages")

    add(279, "In blue-green algae, the blue accessory pigment that assists chlorophyll a in light harvesting is:",
        "C-phycocyanin", "Fucoxanthin", "Phycoerythrin only", "Bacterioviridin",
        "A", "Cyanobacterial light harvesting pigments.",
        "1. Cyanobacteria contain phycobiliproteins, primarily C-phycocyanin (blue) and allophycocyanin, along with lesser amounts of C-phycoerythrin (red) to capture green-yellow light.",
        "Fucoxanthin is brown algae/diatoms. Bacterioviridin is green photosynthetic bacteria.",
        "bio-systems-monera", "Cyanobacterial Pigments")

    add(280, "Water blooms in eutrophic freshwater ponds are frequently caused by profuse growth of:",
        "Cyanobacteria (e.g., Microcystis, Anabaena)", "Diatoms (Navicula)", "Euglena viridis", "Agaricus campestris",
        "A", "Cyanobacterial water blooms.",
        "1. Cyanobacteria often form blooms in polluted water bodies rich in nitrates and phosphates (eutrophication).\n2. Microcystis blooms release microcystin cyanotoxins, creating foul-smelling, hypoxic aquatic environments.",
        "Diatoms are ocean producers. Euglena rarely forms toxic scum. Agaricus is a terrestrial mushroom.",
        "bio-systems-monera", "Cyanobacterial Blooms")

    add(281, "Which of the following organisms lacks both an organized nucleus and membrane-bound organelles, yet contains a single naked circular DNA molecule in a nucleoid?",
        "Escherichia coli", "Saccharomyces cerevisiae", "Chlamydomonas reinhardtii", "Amoeba proteus",
        "A", "Prokaryotic nucleoid anatomy.",
        "1. Escherichia coli is a bacterium (prokaryote) possessing a single circular double-stranded DNA molecule without histones in a nucleoid region, lacking nuclear envelope and membrane-bound organelles.",
        "Saccharomyces (fungus), Chlamydomonas (alga), and Amoeba (protist) are eukaryotes with linear chromosomes inside membrane-bound nuclei.",
        "bio-systems-monera", "Bacterial Nucleoid")

    # --- PROTISTA (Q282 - Q312) ---
    add(282, "In diatoms, the outer upper overlapping valve of the siliceous frustule is called:",
        "Epitheca", "Hypotheca", "Pellicle", "Capsule",
        "A", "Diatom frustule anatomy.",
        "1. The diatom cell wall (frustule) consists of an upper, larger lid called the epitheca that fits tightly over the smaller lower box called the hypotheca.",
        "Hypotheca is the bottom valve. Pellicle is euglenoid. Capsule is bacterial.",
        "bio-kingdom-protista", "Chrysophytes Anatomy")

    add(283, "The unique resting and rejuvenating spores produced by diatoms to restore their original vegetative size are called:",
        "Auxospores", "Aplanospores", "Zoospores", "Basidiospores",
        "A", "Diatom auxospore formation.",
        "1. Because each binary fission in diatoms results in daughter cells constrained by the hypotheca becoming progressively smaller, diatoms eventually form auxospores to re-establish maximal cell dimensions.",
        "Aplanospores and zoospores are general algal/fungal spores. Basidiospores are club fungal sexual spores.",
        "bio-kingdom-protista", "Chrysophytes Life Cycle")

    add(284, "The golden-brown color of Chrysophytes and diatoms is largely due to an abundance of which accessory xanthophyll pigment?",
        "Fucoxanthin and diatoxanthin", "Phycocyanin", "Phycoerythrin", "Chlorophyll d",
        "A", "Diatom photosynthetic pigments.",
        "1. Diatoms contain chlorophyll a and c along with high concentrations of the brown/golden carotenoid pigments fucoxanthin, diatoxanthin, and diadinoxanthin.",
        "Phycocyanin and phycoerythrin are phycobilins. Chlorophyll d is found in red algae.",
        "bio-kingdom-protista", "Chrysophytes Pigments")

    add(285, "The longitudinal and transverse flagella of dinoflagellates are positioned in grooves called:",
        "Sulcus (longitudinal) and Cingulum (transverse)", "Gullet and Cytoproct", "Ampulla and Reservoir", "Micropyle and Chalaza",
        "A", "Dinoflagellate flagellar grooves.",
        "1. In dinoflagellates, the transverse flagellum lies in a girdle-like groove termed the cingulum (or annulus), and the longitudinal flagellum lies in a vertical groove termed the sulcus.",
        "Gullet and cytoproct are Paramecium structures. Reservoir is euglenoid. Micropyle and chalaza are plant ovule parts.",
        "bio-kingdom-protista", "Dinoflagellates Morphology")

    add(286, "Which dinoflagellate is widely known for its ability to produce striking marine bioluminescence ('phosphorescence of the sea')?",
        "Noctiluca scintillans", "Euglena gracilis", "Paramecium aurelia", "Entamoeba coli",
        "A", "Marine bioluminescence by dinoflagellates.",
        "1. Noctiluca (commonly called 'sea sparkle') is a dinoflagellate that produces blue-green bioluminescence via the luciferase-luciferin reaction when stimulated mechanically.",
        "Euglena, Paramecium, and Entamoeba do not exhibit bioluminescence.",
        "bio-kingdom-protista", "Dinoflagellates Bioluminescence")

    add(287, "The potent neurotoxin produced by blooming dinoflagellates like Gonyaulax that accumulates in filter-feeding shellfish is:",
        "Saxitoxin", "Aflatoxin", "Botulinum toxin", "Tetanospasmin",
        "A", "Saxitoxin from red tide dinoflagellates.",
        "1. Gonyaulax produces saxitoxin, a potent voltage-gated sodium channel blocker that causes Paralytic Shellfish Poisoning (PSP) in humans who ingest contaminated shellfish.",
        "Aflatoxin is produced by Aspergillus. Botulinum toxin by Clostridium botulinum. Tetanospasmin by Clostridium tetani.",
        "bio-kingdom-protista", "Dinoflagellate Toxins")

    add(288, "In Euglena, excess photosynthetic carbohydrates are stored in the cytoplasm not as true starch, but as granules of:",
        "Paramylon", "Glycogen", "Floridean starch", "Mannitol",
        "A", "Paramylon reserve in Euglenoids.",
        "1. Euglenoids store their reserve food as a beta-1,3-glucan polysaccharide called paramylon (paramylum bodies).",
        "Glycogen is stored by animals and fungi. Floridean starch is stored by red algae. Mannitol is stored by brown algae.",
        "bio-kingdom-protista", "Euglenoid Reserves")

    add(289, "The red photoreceptive eyespot (stigma) in Euglena is pigmented by:",
        "Astaxanthin (carotenoid)", "Phycobilin", "Bacteriorhodopsin", "Melanin",
        "A", "Euglena eyespot biochemistry.",
        "1. The stigma (eyespot) of Euglena contains carotenoid pigments, predominantly astaxanthin, which acts as a light shield for the photoreceptor swelling at the base of the long flagellum.",
        "Phycobilins occur in cyanobacteria/red algae. Melanin is an animal pigment.",
        "bio-kingdom-protista", "Euglenoid Sensory Organelles")

    add(290, "When Euglena is kept in prolonged darkness, what physiological transition occurs?",
        "It loses its chloroplasts and switches to heterotrophic saprozoic nutrition", "It immediately forms thick siliceous frustules", "It undergoes meiosis to form haploid ascospores", "It converts into an anaerobic spore",
        "A", "Mixotrophy in Euglena.",
        "1. When deprived of light, Euglena ceases photosynthesis and absorbs dissolved organic nutrients or preys on smaller organisms (mixotrophic nutrition).",
        "Euglena never forms silica frustules (which belong to diatoms) or ascospores (which belong to ascomycete fungi).",
        "bio-kingdom-protista", "Euglenoid Mixotrophy")

    add(291, "In cellular slime moulds (such as Dictyostelium), individual amoeboid myxamoebae aggregate under starvation to form a migrating pseudoplasmodium called a:",
        "Slug (grex)", "Frustule", "Pellicle", "Sorus",
        "A", "Cellular slime mould slug aggregation.",
        "1. In cellular slime moulds, when cAMP signals starvation, individual independent amoebae aggregate into a multicellular migrating pseudoplasmodium known as a 'slug' or 'grex'.",
        "Frustule is diatom shell. Pellicle is euglenoid coat. Sorus is a cluster of sporangia in ferns.",
        "bio-kingdom-protista", "Slime Mould Aggregation")

    add(292, "The true plasmodium of acellular slime moulds (such as Physarum) is best described as:",
        "A multinucleate, diploid, coenocytic mass of wall-less protoplasm showing amoeboid streaming", "A unicellular flagellated gametophyte", "A filamentous mycelium with chitinous septa", "A colonial cluster of ciliated cells with silica armor",
        "A", "Physarum plasmodial cytology.",
        "1. The plasmodium of acellular slime moulds is a macroscopic, diploid, multinucleate mass of protoplasm without cell walls that exhibits vigorous shuttle streaming of cytoplasm.",
        "Options B, C, and D misattribute structures from other taxa.",
        "bio-kingdom-protista", "Slime Mould Cytology")

    add(293, "In Amoeba proteus, the primary organelle responsible for osmoregulation (expelling excess water) is the:",
        "Contractile vacuole", "Food vacuole", "Nucleolus", "Pseudopodium",
        "A", "Osmoregulation in Amoeba.",
        "1. Freshwater amoebae are hypertonic to their surroundings, causing water to enter continuously by endosmosis.\n2. The contractile vacuole collects and periodically pumps out excess water through the plasmalemma (osmoregulation).",
        "Food vacuoles carry out digestion. Pseudopodia mediate locomotion and engulfment.",
        "bio-kingdom-protista", "Amoeboid Osmoregulation")

    add(294, "The infective stage of Entamoeba histolytica transmitted to humans via contaminated food and water is the:",
        "Mature quadrinucleate cyst", "Trophozoite with engulfed RBCs", "Flagellated motile gamete", "Sporozoite",
        "A", "Entamoeba transmission cyst.",
        "1. Entamoeba histolytica forms a resistant, spherical quadrinucleate cyst protected by a chitinous cyst wall that survives gastric acid.\n2. Ingestion of these cysts causes amoebiasis.",
        "Trophozoites are the pathogenic invasive vegetative stage inside the large intestine, not the resilient transmission stage.",
        "bio-kingdom-protista", "Entamoeba Life Cycle")

    add(295, "In human tissues, pathogenic trophozoites of Entamoeba histolytica are characterized microscopically by containing ingested:",
        "Red blood cells (erythrocytes)", "Chloroplasts", "Silica crystals", "Basidiospores",
        "A", "Diagnostic feature of Entamoeba trophozoite.",
        "1. Invasive Entamoeba histolytica trophozoites secrete histolytic enzymes that erode the colonic mucosa and phagocytose red blood cells (erythrophagocytosis), a hallmark diagnostic feature.",
        "They do not possess chloroplasts, silica crystals, or fungal spores.",
        "bio-kingdom-protista", "Entamoeba Pathology")

    add(296, "The vector responsible for transmitting Trypanosoma gambiense (causing African sleeping sickness) to humans is the:",
        "Tsetse fly (Glossina palpalis)", "Female Anopheles mosquito", "Sandfly (Phlebotomus)", "Housefly (Musca domestica)",
        "A", "Trypanosoma transmission vector.",
        "1. Trypanosoma gambiense is transmitted through the bite of the blood-sucking tsetse fly (Glossina).\n2. The parasite invades the cerebrospinal fluid, leading to severe neurological lethargy and sleep disruptions.",
        "Anopheles transmits malaria. Sandfly transmits Leishmania (kala-azar). Housefly is a mechanical vector of cholera and typhoid.",
        "bio-kingdom-protista", "Flagellated Protozoans")

    add(297, "Paramecium exhibits nuclear dualism, possessing two distinct types of nuclei:",
        "A polyploid macronucleus (vegetative) and a diploid micronucleus (reproductive)", "Two identical haploid nuclei", "A single diploid nucleus and a nucleoid", "Four identical polyploid nuclei",
        "A", "Nuclear dualism in Paramecium.",
        "1. Ciliates like Paramecium have nuclear dimorphism:\n   (i) Large polyploid macronucleus: controls daily metabolism and vegetative functions.\n   (ii) Small diploid micronucleus: controls sexual reproduction (conjugation) and genetic exchange.",
        "Options B, C, and D misrepresent the nuclear organization of ciliates.",
        "bio-kingdom-protista", "Ciliated Protozoans Anatomy")

    add(298, "In Paramecium, sexual reproduction occurring by temporary pairing and mutual exchange of haploid micronuclear material is called:",
        "Conjugation", "Autogamy", "Binary fission", "Endomixis",
        "A", "Paramecium sexual conjugation.",
        "1. Paramecium undergoes conjugation, wherein two compatible mating cells fuse along their oral grooves, undergo meiosis of micronuclei, exchange haploid pronuclei, and separate.",
        "Binary fission is asexual reproduction. Autogamy is self-fertilization without pairing.",
        "bio-kingdom-protista", "Ciliated Protozoans Reproduction")

    add(299, "Which microscopic defensive organelles located beneath the pellicle of Paramecium discharge dart-like filaments when irritated?",
        "Trichocysts", "Nematocysts", "Colloblasts", "Statocysts",
        "A", "Trichocysts in Paramecium.",
        "1. Paramecium possesses trichocysts embedded in its cortex perpendicular to the pellicle.\n2. When subjected to chemical or physical stimuli, they discharge long, pointed barbed threads for defense and anchoring.",
        "Nematocysts are cnidarian stinging capsules. Colloblasts belong to ctenophores. Statocysts are equilibrium organs.",
        "bio-kingdom-protista", "Ciliated Protozoans Organelles")

    add(300, "The infective stage of Plasmodium that enters the human bloodstream through the bite of an infected female Anopheles mosquito is the:",
        "Sporozoite", "Merozoite", "Trophozoite", "Ookinete",
        "A", "Malarial infective stage in humans.",
        "1. When an infected female Anopheles feeds on human blood, it injects spindle-shaped sporozoites from its salivary glands into the bloodstream.\n2. The sporozoites quickly travel to liver hepatocytes to initiate pre-erythrocytic schizogony.",
        "Merozoites emerge from liver/RBCs. Trophozoite is the feeding intraerythrocytic stage. Ookinete is the motile zygote inside mosquito gut.",
        "bio-kingdom-protista", "Sporozoans Life Cycle")

    add(301, "The toxic malarial pigment released into the blood along with merozoites upon the rupture of red blood cells, causing recurring chills and high fever, is:",
        "Haemozoin", "Bilirubin", "Hemoglobin", "Ferritin",
        "A", "Haemozoin and malarial fever spikes.",
        "1. In erythrocytic schizogony, Plasmodium digests the protein part of hemoglobin and converts the toxic free heme into insoluble crystalline haemozoin.\n2. When RBCs rupture synchronously, haemozoin and pyrogens are released, triggering periodic high fever and shivering chills.",
        "Bilirubin is a liver breakdown product. Hemoglobin is the normal respiratory pigment.",
        "bio-kingdom-protista", "Sporozoans Pathology")

    add(302, "In the life cycle of Plasmodium, sexual reproduction (syngamy and sporogony) takes place in the:",
        "Gut of the female Anopheles mosquito", "Human liver cells", "Human red blood cells", "Human blood plasma",
        "A", "Plasmodium sexual cycle location.",
        "1. Gametocytes are ingested by female Anopheles mosquitoes.\n2. Fertilization (syngamy) between microgamete and macrogamete occurs in the mosquito stomach lumen, forming an ookinete and eventually thousands of sporozoites via sporogony.",
        "Asexual schizogony occurs exclusively inside human liver hepatocytes and red blood cells.",
        "bio-kingdom-protista", "Sporozoans Life Cycle")

    add(303, "Which of the following protists is characterized by having two unequal flagella that arise from an anterior reservoir?",
        "Euglena", "Noctiluca", "Gonyaulax", "Paramecium",
        "A", "Euglenoid flagellar insertion.",
        "1. Euglenoids (e.g., Euglena) possess two unequal flagella (one long, one short) inserted into an anterior invagination called the reservoir or ampulla.",
        "Paramecium is ciliated all over its body. Dinoflagellates have flagella in transverse and longitudinal furrows.",
        "bio-kingdom-protista", "Euglenoids Morphology")

    add(304, "Which of the following protists is completely non-motile in its vegetative stage and possesses an apical complex for penetrating host cells?",
        "Plasmodium", "Amoeba", "Euglena", "Trypanosoma",
        "A", "Apicomplexan characteristics.",
        "1. Plasmodium (and other Apicomplexa/Sporozoa) lack cilia, flagella, and pseudopodia in their vegetative stage and possess an apical complex (conoid, rhoptries, micronemes) to enter host cells.",
        "Amoeba has pseudopodia. Euglena and Trypanosoma have flagella.",
        "bio-kingdom-protista", "Sporozoans Morphology")

    add(305, "The contractile vacuole of freshwater protozoans like Amoeba and Paramecium is absent or vestigial in marine amoebae because:",
        "Marine environments are isotonic or hypertonic to the cytoplasm, eliminating endosmotic water influx", "Marine protozoans do not absorb water", "Marine protozoans have impermeable silica walls", "Marine protozoans produce excessive urea",
        "A", "Contractile vacuole physiology.",
        "1. Freshwater protozoans are hypertonic to their hypotonic freshwater surroundings, so water constantly enters by endosmosis, requiring contractile vacuoles for active pumping.\n2. Marine protozoans live in isotonic sea water; hence, there is no net influx of water.",
        "Options B, C, and D are factually inaccurate physiological assumptions.",
        "bio-kingdom-protista", "Protozoan Osmoregulation")

    add(306, "Which of the following organisms causes 'Kala-azar' (Visceral Leishmaniasis) and is transmitted by the sandfly?",
        "Leishmania donovani", "Trypanosoma cruzi", "Entamoeba gingivalis", "Giardia lamblia",
        "A", "Leishmania pathology.",
        "1. Leishmania donovani is a parasitic flagellated protozoan transmitted by sandflies (Phlebotomus) that causes Kala-azar (visceral leishmaniasis / black fever) characterized by hepatosplenomegaly.",
        "Trypanosoma cruzi causes Chagas disease. Entamoeba gingivalis causes gum pyorrhea. Giardia causes giardiasis.",
        "bio-kingdom-protista", "Flagellated Protozoans")

    add(307, "Giardia intestinalis, commonly known as the 'Grand Old Man of the Intestine', is an enterotoxigenic flagellated protozoan that causes:",
        "Severe malabsorptive diarrhea (Giardiasis)", "Malaria", "African sleeping sickness", "Amoebic liver abscess",
        "A", "Giardia pathology.",
        "1. Giardia intestinalis (Giardia lamblia) adheres to the duodenal and jejunal brush border with its ventral sucking disc, causing blunting of villi and steatorrhea/malabsorptive diarrhea.",
        "Malaria is caused by Plasmodium. Sleeping sickness by Trypanosoma. Amoebic abscess by Entamoeba.",
        "bio-kingdom-protista", "Flagellated Protozoans")

    add(308, "The undulating membrane found in flagellates like Trypanosoma is formed by:",
        "The lateral adhesion of the recurrent flagellum to the cell body surface with an intervening fold of pellicle", "A specialized row of fused cilia", "Siliceous skeletal scales", "A fold of the nuclear envelope",
        "A", "Undulating membrane anatomy.",
        "1. In Trypanosoma, the flagellum runs along the side of the elongated body, attached by a delicate fold of the pellicle, forming a wave-like undulating membrane that facilitates swimming in viscous blood plasma.",
        "Cilia and silica are not involved in flagellar undulating membranes.",
        "bio-kingdom-protista", "Flagellated Protozoans")

    add(309, "Which of the following statements regarding Chrysophytes is INCORRECT?",
        "They are exclusively found in marine habitats and never occur in fresh water", "They include microscopic planktonic diatoms and golden algae (desmids)", "Their cell walls contain indestructible silica deposits", "They are the chief producers in the oceans",
        "A", "Chrysophyte habitat distribution in NCERT.",
        "1. NCERT explicitly states: 'They are found in fresh water as well as in marine environments'.\n2. Thus, claiming they are exclusively found in marine habitats is false.",
        "Options B, C, and D are all verified true statements from NCERT.",
        "bio-kingdom-protista", "Chrysophytes General Facts")

    add(310, "Which of the following statements regarding Dinoflagellates is INCORRECT?",
        "They completely lack a cell wall and are covered solely by a flexible protein pellicle", "Most of them have two flagella: one longitudinal and one transverse", "They possess stiff cellulose plates on the outer surface of their cell wall", "Some members like Gonyaulax undergo blooms causing red tides",
        "A", "Dinoflagellate characteristics in NCERT.",
        "1. Dinoflagellates possess a prominent cell wall made of stiff cellulose plates.\n2. Organisms that completely lack a cell wall and are covered by a protein pellicle are Euglenoids, not dinoflagellates.",
        "Options B, C, and D are verified true statements from NCERT.",
        "bio-kingdom-protista", "Dinoflagellates General Facts")

    add(311, "Which of the following statements regarding Euglenoids is INCORRECT?",
        "Their pigments are completely different from those of higher plants", "They are freshwater organisms found in stagnant water", "Instead of a cell wall, they have a protein-rich layer called pellicle", "They have two flagella: a short and a long one",
        "A", "Euglenoid pigments in NCERT.",
        "1. NCERT explicitly states: 'The pigments of euglenoids are identical to those present in higher plants' (chlorophyll a and b).\n2. Therefore, saying their pigments are completely different is false.",
        "Options B, C, and D are verified true statements from NCERT.",
        "bio-kingdom-protista", "Euglenoids General Facts")

    add(312, "Which of the following statements regarding Slime moulds is INCORRECT?",
        "Their vegetative plasmodium is surrounded by a thick, rigid cellulose cell wall", "They are saprophytic protists that move along decaying twigs engulfing organic material", "Under unfavorable conditions, they form fruiting bodies bearing spores at their tips", "Their spores possess true walls and are dispersed by air currents",
        "A", "Slime mould vegetative wall in NCERT.",
        "1. The vegetative plasmodium of slime moulds is a free-living, wall-less mass of multinucleate protoplasm.\n2. Spores formed inside fruiting bodies possess true walls, but the vegetative plasmodium lacks any cell wall.",
        "Options B, C, and D are verified true statements from NCERT.",
        "bio-kingdom-protista", "Slime Moulds General Facts")

    # --- FUNGI (Q313 - Q343) ---
    add(313, "In fungi, the cross-walls (septa) dividing hyphae into cells typically possess central openings called septal pores. In Basidiomycetes, these pores have barrel-shaped swellings called:",
        "Dolipore septa", "Plasmodesmata", "Woronin bodies", "Clamp connections",
        "A", "Dolipore septum in Basidiomycetes.",
        "1. In higher fungi belonging to Basidiomycetes, the septal pore is characterized by a barrel-shaped swelling called a dolipore septum, covered by curved membranous parenthosomes.",
        "Woronin bodies seal simple pores in Ascomycetes. Clamp connections are bypass bridges during dikaryotic division.",
        "bio-kingdom-fungi", "Fungal Septal Ultrastructure")

    add(314, "In Ascomycetes, membrane-bound crystalline proteinaceous organelles that block septal pores during hyphal damage are called:",
        "Woronin bodies", "Dolipores", "Haustoria", "Appressoria",
        "A", "Woronin bodies in Ascomycetes.",
        "1. Woronin bodies are dense hexagonal protein bodies associated with the simple septal pores of Ascomycetes that rapidly plug the pore if the adjacent hyphal compartment is ruptured, preventing cytoplasmic loss.",
        "Options B, C, and D perform entirely different functions.",
        "bio-kingdom-fungi", "Fungal Cellular Organelles")

    add(315, "In Basidiomycetes, lateral hook-like hyphal bypass bridges that ensure the equal distribution of sister dikaryotic nuclei during cell division are known as:",
        "Clamp connections", "Haustoria", "Conidiophores", "Ascogenous hyphae",
        "A", "Clamp connections in Basidiomycetes.",
        "1. Clamp connections are specialized backward-curved hyphal loops that form during mitotic division of the dikaryotic mycelium in Basidiomycetes to guarantee that each daughter cell receives one nucleus of each compatible mating type.",
        "Haustoria are absorbing structures. Conidiophores produce asexual spores.",
        "bio-kingdom-fungi", "Basidiomycete Cytology")

    add(316, "In Ascomycetes, during sexual reproduction, the hooked tip of an ascogenous hypha that gives rise to the ascus is termed a:",
        "Crozier", "Basidium", "Zygospore", "Trichogyne",
        "A", "Crozier formation in Ascomycetes.",
        "1. In Ascomycetes, the terminal cell of an ascogenous hypha recurves to form a hook-like structure called a crozier, where karyogamy and meiosis subsequently occur to form the ascus and ascospores.",
        "Basidium is the club-shaped sexual structure in Basidiomycetes. Trichogyne is the receptive female hair in red algae and some ascomycetes.",
        "bio-kingdom-fungi", "Ascomycete Sexual Reproduction")

    add(317, "How many ascospores are typically produced inside each ascus of an ascomycete fungus after meiosis followed by a single mitotic division?",
        "Eight ascospores (endogenous)", "Four ascospores (exogenous)", "Two ascospores (endogenous)", "Sixteen ascospores (exogenous)",
        "A", "Ascospore number per ascus.",
        "1. In an ascus, the diploid zygote nucleus undergoes meiosis to form 4 haploid nuclei, and each haploid nucleus then undergoes one post-meiotic mitosis, generating exactly 8 endogenous ascospores.",
        "Basidiospores are four in number and produced exogenously.",
        "bio-kingdom-fungi", "Ascomycete Sporogenesis")

    add(318, "How many basidiospores are typically produced on each basidium of a basidiomycete fungus?",
        "Four basidiospores (produced exogenously on sterigmata)", "Eight basidiospores (produced endogenously in a sac)", "Two basidiospores (produced exogenously)", "Numerous zoospores inside a zoosporangium",
        "A", "Basidiospore count per basidium.",
        "1. In Basidiomycetes, karyogamy and meiosis in the basidium result in 4 haploid nuclei that migrate outwards into 4 sterigmata to form 4 exogenous basidiospores.",
        "Ascomycetes form 8 endogenous ascospores.",
        "bio-kingdom-fungi", "Basidiomycete Sporogenesis")

    add(319, "Which of the following fungal classes completely lacks flagellated motile stages (zoospores) in its life cycle?",
        "Basidiomycetes and Ascomycetes", "Phycomycetes (Chytrids and Oomycetes)", "Both flagellated phycomycetes", "None; all fungi have flagellated zoospores",
        "A", "Loss of flagella in higher fungi.",
        "1. Higher terrestrial fungi (Ascomycetes, Basidiomycetes, and Deuteromycetes) have completely lost flagella and motile cells at all stages of their life cycle.\n2. Motile zoospores are found only in primitive aquatic Phycomycetes.",
        "Chytridiomycetes and Oomycetes retain flagellated zoospores.",
        "bio-kingdom-fungi", "Evolution of Fungal Motility")

    add(320, "In bread mould (Rhizopus stolonifer), the thick-walled resting sexual spore formed by the gametangial copulation of two compatible hyphae is called a:",
        "Zygospore", "Ascospore", "Basidiospore", "Oospore",
        "A", "Rhizopus zygospore formation.",
        "1. Rhizopus belongs to Zygomycetes (Phycomycetes).\n2. Sexual reproduction occurs by the fusion of two isogamous gametangia (+ and - strains), resulting in a thick-walled, highly resistant diploid zygospore.",
        "Ascospores belong to sac fungi. Basidiospores belong to club fungi.",
        "bio-kingdom-fungi", "Phycomycetes Reproduction")

    add(321, "Heterothallism, the requirement of two genetically distinct compatible strains (+ and -) for successful sexual reproduction in fungi, was first discovered in Mucorales by:",
        "A.F. Blakeslee (1904)", "Alexander Fleming (1928)", "Louis Pasteur (1860)", "Robert Koch (1876)",
        "A", "Discovery of heterothallism in fungi.",
        "1. In 1904, Albert Francis Blakeslee discovered heterothallism in the genus Rhizopus and Mucor, proving that zygospore formation requires hyphae of two physiologically distinct mating strains (+ and -).",
        "Fleming discovered penicillin. Pasteur refuted spontaneous generation. Koch formulated disease postulates.",
        "bio-kingdom-fungi", "Fungal Genetics History")

    add(322, "Ergot of rye, a destructive disease of cereal grasses producing toxic ergot alkaloids that cause convulsions and gangrene (ergotism) in humans, is caused by:",
        "Claviceps purpurea", "Puccinia graminis", "Ustilago nuda", "Albugo candida",
        "A", "Claviceps purpurea and ergotism.",
        "1. Claviceps purpurea is an ascomycetous parasite of rye that replaces grains with dark sclerotia containing ergot alkaloids (ergotamine, precursor of LSD), causing ergotism (St. Anthony's Fire).",
        "Puccinia causes rust. Ustilago causes smut. Albugo causes white rust of mustard.",
        "bio-kingdom-fungi", "Ascomycete Pathology")

    add(323, "Aflatoxins, highly carcinogenic and hepatotoxic secondary metabolites contaminating improperly stored peanuts and maize, are produced by:",
        "Aspergillus flavus", "Penicillium notatum", "Neurospora crassa", "Agaricus bisporus",
        "A", "Aflatoxin producer fungus.",
        "1. Aspergillus flavus and Aspergillus parasiticus produce aflatoxins (specifically Aflatoxin B1), which are potent hepatocarcinogens that bind to DNA and cause liver cancer.",
        "Penicillium produces penicillin. Neurospora is a genetic tool. Agaricus is the edible button mushroom.",
        "bio-kingdom-fungi", "Ascomycete Toxins")

    add(324, "Cyclosporin A, an invaluable immunosuppressive drug used to prevent organ transplant rejection in human patients, is commercially obtained from the fungus:",
        "Trichoderma polysporum", "Monascus purpureus", "Saccharomyces cerevisiae", "Aspergillus niger",
        "A", "Trichoderma and Cyclosporin A.",
        "1. Cyclosporin A is an 11-amino acid cyclic peptide produced by the imperfect/ascomycetous soil fungus Trichoderma polysporum.\n2. It functions as an immunosuppressant by inhibiting calcineurin and T-cell activation.",
        "Monascus purpureus yields blood cholesterol lowering statins. Saccharomyces yields ethanol. Aspergillus niger yields citric acid.",
        "bio-kingdom-fungi", "Industrial Fungi")

    add(325, "Statins, commercial blood-cholesterol lowering agents that competitively inhibit the rate-limiting enzyme HMG-CoA reductase, are extracted from the yeast:",
        "Monascus purpureus", "Trichoderma polysporum", "Penicillium chrysogenum", "Rhizopus oligosporus",
        "A", "Monascus purpureus and statins.",
        "1. Statins (such as lovastatin) are secondary metabolites produced by the red yeast Monascus purpureus.\n2. They competitively inhibit beta-hydroxy-beta-methylglutaryl-CoA (HMG-CoA) reductase in human cholesterol biosynthesis.",
        "Trichoderma yields cyclosporin A. Penicillium chrysogenum yields penicillin.",
        "bio-kingdom-fungi", "Industrial Fungi")

    add(326, "The parasexual cycle, a mechanism of genetic recombination without conventional meiosis and syngamy seen in Deuteromycetes, was discovered by:",
        "Pontecorvo and Roper (1952)", "Watson and Crick (1953)", "Hershey and Chase (1952)", "Beadle and Tatum (1941)",
        "A", "Parasexual cycle discovery in fungi.",
        "1. Guido Pontecorvo and J.A. Roper demonstrated the parasexual cycle in Aspergillus nidulans and Deuteromycetes, where mitotic crossing over and haploidization achieve genetic variation without true sexual cycles.",
        "Watson and Crick discovered DNA double helix. Hershey and Chase proved DNA is genetic material. Beadle and Tatum proposed one gene-one enzyme hypothesis.",
        "bio-kingdom-fungi", "Deuteromycetes Genetics")

    add(327, "Which of the following represents an edible, highly prized subterranean cup-fungus belonging to Ascomycetes?",
        "Truffles (Tuber melanosporum)", "Amanita phalloides (Death cap)", "Puccinia graminis", "Ustilago maydis",
        "A", "Truffles culinary identity.",
        "1. Truffles (Tuber melanosporum) are hypogeous (subterranean) mycorrhizal ascocarps that emit distinctive aromas and are celebrated as exquisite culinary delicacies alongside morels (Morchella).",
        "Amanita phalloides is a deadly poisonous mushroom (Basidiomycetes). Puccinia and Ustilago are plant parasites.",
        "bio-kingdom-fungi", "Ascomycetes Delicacies")

    add(328, "Amanita phalloides, commonly known as the 'Death Cap', produces which deadly peptide toxins that inhibit eukaryotic RNA polymerase II?",
        "Amatoxins (alpha-amanitin) and Phallotoxins", "Aflatoxins", "Tetanospasmin", "Botulinum neurotoxin",
        "A", "Amanita toxicity mechanism.",
        "1. Amanita phalloides contains cyclic octapeptides called alpha-amanitins (amatoxins) that selectively inhibit eukaryotic RNA Polymerase II, causing fatal acute liver failure upon ingestion.",
        "Aflatoxin is from Aspergillus. Tetanospasmin and botulinum are bacterial neurotoxins.",
        "bio-kingdom-fungi", "Basidiomycete Toxicology")

    add(329, "Red rot of sugarcane, which causes extensive red discolouration with white cross-bands in sugarcane stalks, is caused by which deuteromycete fungus?",
        "Colletotrichum falcatum", "Alternaria solani", "Trichoderma harzianum", "Helminthosporium oryzae",
        "A", "Colletotrichum falcatum red rot.",
        "1. Colletotrichum falcatum is a member of Deuteromycetes that causes red rot of sugarcane, severely reducing sucrose yield in infected cane stems.",
        "Alternaria solani causes early blight of potato. Trichoderma is a biocontrol fungus. Helminthosporium caused Bengal famine of 1943.",
        "bio-kingdom-fungi", "Deuteromycete Pathology")

    add(330, "Early blight of potato and tomato is caused by which deuteromycete fungus exhibiting target-board (concentric ring) lesions on leaves?",
        "Alternaria solani", "Phytophthora infestans", "Albugo candida", "Fusarium oxysporum",
        "A", "Alternaria solani early blight.",
        "1. Alternaria solani (Deuteromycetes) produces characteristic concentric target-board necrotic spots on older potato and tomato foliage, causing early blight.",
        "Phytophthora infestans (Oomycetes/Phycomycetes) causes late blight of potato (Irish famine of 1845).",
        "bio-kingdom-fungi", "Deuteromycete Pathology")

    add(331, "The Great Irish Famine of 1845, which caused the starvation and emigration of millions of people, was caused by which phytopathogen?",
        "Phytophthora infestans (Late blight of potato)", "Alternaria solani (Early blight of potato)", "Puccinia graminis (Wheat rust)", "Ustilago tritici (Loose smut)",
        "A", "Phytophthora and Irish famine.",
        "1. Phytophthora infestans is an oomycete (phycomycetous protist/fungus) that destroys potato tubers and foliage with devastating speed, precipitating the historic Irish potato famine of 1845.",
        "Alternaria solani causes early blight, which is less catastrophic. Puccinia affects wheat.",
        "bio-kingdom-fungi", "Phycomycete Pathology")

    add(332, "In endomycorrhizae (vesicular-arbuscular mycorrhizae or VAM), the fungus enters cortical cells of plant roots and forms branched, nutrient-exchanging organs called:",
        "Arbuscules and vesicles", "Hartig net", "Basidiocarps", "Ascocarps",
        "A", "VAM anatomical structures.",
        "1. In VAM (e.g., Glomus), the fungal hyphae penetrate root cortical cell walls (without breaking the plasma membrane) to form highly branched dichotomous structures called arbuscules for phosphate transfer, and lipid-storing swellings called vesicles.",
        "Hartig net is the intercellular hyphal mesh in ectomycorrhizae. Ascocarps and basidiocarps are fruiting bodies.",
        "bio-kingdom-fungi", "Mycorrhizal Anatomy")

    add(333, "Ectomycorrhizae, formed typically by Basidiomycetes with forest trees like Pinus and Quercus, form an intercellular hyphal network in the root cortex known as the:",
        "Hartig net", "Arbuscule", "Haustorium", "Woronin ring",
        "A", "Hartig net in ectomycorrhiza.",
        "1. Ectomycorrhizal fungi surround the root tip with a dense fungal mantle (sheath) and penetrate between cortical cells to construct an intercellular nutrient exchange network called the Hartig net.",
        "Arbuscules are intracellular in endomycorrhizae. Haustoria are parasitic penetrative organs.",
        "bio-kingdom-fungi", "Mycorrhizal Anatomy")

    add(334, "Fruiting bodies of Ascomycetes are called ascocarps. An ascocarp that is completely closed and spherical, with no opening, is termed a:",
        "Cleistothecium", "Apothecium", "Perithecium", "Pseudothecium",
        "A", "Types of ascocarps: Cleistothecium.",
        "1. Ascocarps have three primary forms:\n   (i) Cleistothecium: completely closed and spherical (e.g., Penicillium, Aspergillus).\n   (ii) Apothecium: open, cup- or saucer-shaped (e.g., Peziza).\n   (iii) Perithecium: flask-shaped with an apical pore called ostiole (e.g., Claviceps, Neurospora).",
        "Apothecium is open cup-shaped. Perithecium is flask-shaped with an ostiole.",
        "bio-kingdom-fungi", "Ascomycete Ascocarps")

    add(335, "A cup- or saucer-shaped open ascocarp found in fungi such as Peziza is classified as an:",
        "Apothecium", "Cleistothecium", "Perithecium", "Basidiocarp",
        "A", "Types of ascocarps: Apothecium.",
        "1. An apothecium is an open, cup-shaped fruiting body with exposed asci lining the internal hymenium, characteristic of Peziza and Ascobolus.",
        "Cleistothecium is closed. Perithecium is flask-shaped with an ostiole.",
        "bio-kingdom-fungi", "Ascomycete Ascocarps")

    add(336, "A flask-shaped ascocarp with a tiny apical opening (ostiole) through which ascospores escape, as seen in Neurospora and Claviceps, is called a:",
        "Perithecium", "Cleistothecium", "Apothecium", "Zygocarp",
        "A", "Types of ascocarps: Perithecium.",
        "1. A perithecium is a flask-shaped ascocarp with an ostiole at the top through which mature asci discharge ascospores.",
        "Cleistothecia lack openings. Apothecia are wide open cups.",
        "bio-kingdom-fungi", "Ascomycete Ascocarps")

    add(337, "Which of the following fungal pairs produces edible fruiting bodies widely consumed across the world?",
        "Agaricus bisporus and Morchella esculenta", "Puccinia graminis and Ustilago maydis", "Albugo candida and Alternaria solani", "Aspergillus flavus and Claviceps purpurea",
        "A", "Edible fungal examples in NCERT.",
        "1. Agaricus bisporus (button mushroom, Basidiomycetes) and Morchella esculenta (morels, Ascomycetes) produce non-toxic, edible, protein-rich fruiting bodies.",
        "Puccinia and Ustilago are plant parasites. Albugo and Alternaria cause plant blights. Aspergillus and Claviceps produce potent toxins.",
        "bio-kingdom-fungi", "Edible Fungi")

    add(338, "In the life cycle of the wheat rust fungus Puccinia graminis, which spore stage infects the primary host (wheat)?",
        "Aeciospores (and Urediniospores for secondary infection)", "Basidiospores", "Teliospores", "Pycniospores",
        "A", "Puccinia spore stages on wheat.",
        "1. Puccinia graminis is a heteroecious rust requiring two hosts:\n   - Wheat (primary host): infected initially by aeciospores (from barberry); urediniospores cause repeating spread on wheat.\n   - Berberis (alternate host): infected by basidiospores; forms pycniospores and aeciospores.",
        "Basidiospores infect barberry leaves, not wheat.",
        "bio-kingdom-fungi", "Puccinia Rust Cycle")

    add(339, "Which spore stage of Puccinia graminis is the overwintering, two-celled, thick-walled resting stage that gives rise to the basidium?",
        "Teliospore", "Urediniospore", "Aeciospore", "Pycniospore",
        "A", "Teliospores of Puccinia.",
        "1. Teliospores are dark, two-celled, thick-walled survival spores formed on wheat at the end of the season.\n2. In spring, each cell undergoes karyogamy and meiosis, sprouting a promycelium (basidium) bearing 4 basidiospores.",
        "Urediniospores are repeating summer dikaryotic spores. Aeciospores transfer rust from barberry to wheat.",
        "bio-kingdom-fungi", "Puccinia Rust Cycle")

    add(340, "Which of the following statements regarding fungal reproduction is INCORRECT?",
        "In Phycomycetes, sexual spores called ascospores are formed endogenously inside basidia", "In Basidiomycetes, basidiospores are formed exogenously on the basidium", "In Ascomycetes, ascospores are formed endogenously inside sac-like asci", "In Deuteromycetes, sexual reproduction is either absent or unknown",
        "A", "Spore types across fungal classes.",
        "1. Ascospores are produced endogenously inside sac-like asci of Ascomycetes, NOT Phycomycetes or basidia.\n2. Phycomycetes form zygospores or oospores; Basidiomycetes form exogenous basidiospores on basidia.",
        "Options B, C, and D are all verified fundamental facts from NCERT.",
        "bio-kingdom-fungi", "Fungal Classification Summary")

    add(341, "Which of the following statements regarding fungal mycelium is INCORRECT?",
        "Mycelium in Basidiomycetes is coenocytic and aseptate", "Mycelium in Phycomycetes is coenocytic and aseptate", "Mycelium in Ascomycetes is branched and septate", "Mycelium in Deuteromycetes is branched and septate",
        "A", "Mycelium septation in fungi.",
        "1. NCERT explicitly states: 'The mycelium is branched and septate' in Ascomycetes, Basidiomycetes, and Deuteromycetes.\n2. Coenocytic and aseptate mycelium is found ONLY in Phycomycetes.",
        "Options B, C, and D are verified true statements from NCERT.",
        "bio-kingdom-fungi", "Mycelium Architecture")

    add(342, "Which class of fungi includes coprophilous members (growing on animal dung)?",
        "Ascomycetes", "Plantae", "Cyanobacteria", "Mycoplasma",
        "A", "Coprophilous fungi in NCERT.",
        "1. NCERT explicitly states: 'They are saprophytic, decomposers, parasitic or coprophilous (growing on dung)' under Ascomycetes (e.g., Ascobolus, Pilobolus, Chaetomium).",
        "Plants, cyanobacteria, and mycoplasma are not classified as coprophilous fungi.",
        "bio-kingdom-fungi", "Ascomycete Habitats")

    add(343, "Fungi are classified into different classes based primarily on:",
        "Morphology of mycelium, mode of spore formation, and fruiting bodies", "Body size and weight", "Color of vegetative hyphae alone", "Number of flagella on vegetative somatic cells",
        "A", "Basis of fungal division in NCERT.",
        "1. NCERT explicitly states: 'The morphology of the mycelium, mode of spore formation and fruiting bodies form the basis for the division of the kingdom into various classes'.",
        "Fungi lack vegetative flagellated somatic cells, and size or simple colony color are variable and not fundamental taxonomic criteria.",
        "bio-kingdom-fungi", "Fungal Classification Basis")

    # --- ACELLULAR (Q344 - Q375) ---
    add(344, "The helical Tobacco Mosaic Virus (TMV) has a rod-shaped capsid composed of approximately how many capsomeres?",
        "2130 capsomeres", "60 capsomeres", "162 capsomeres", "5000 capsomeres",
        "A", "TMV capsomere count.",
        "1. Tobacco Mosaic Virus (TMV) is a hollow cylinder ~300 nm long and 18 nm in diameter consisting of a single-stranded RNA molecule surrounded by exactly 2130 identical protein capsomeres arranged in a tight right-handed helix.",
        "60, 162, and 5000 are capsomere counts associated with icosahedral viruses (like polio or herpes), not TMV.",
        "bio-viruses-viroids-lichens", "TMV Ultrastructure")

    add(345, "The single-stranded RNA genome of Tobacco Mosaic Virus (TMV) contains approximately how many nucleotides?",
        "~6400 nucleotides", "~100 nucleotides", "~500,000 nucleotides", "~3 billion base pairs",
        "A", "TMV RNA genome size.",
        "1. The genomic single-stranded RNA of TMV consists of approximately 6395 (approx. 6400) nucleotides encoding viral replicase, movement protein, and coat protein.",
        "100 nucleotides is too small even for viroids (~240-400 nt). 3 billion base pairs is the human genome size.",
        "bio-viruses-viroids-lichens", "TMV Genome")

    add(346, "In a typical T4 bacteriophage, which viral enzyme is stored in the tail pin to digest the peptidoglycan wall of the host bacterium during penetration?",
        "Lysozyme", "Reverse transcriptase", "DNA polymerase III", "Cellulase",
        "A", "Bacteriophage penetration enzymes.",
        "1. T-even bacteriophages contain viral lysozyme at their tail base plate that locally digests the peptidoglycan bacterial cell wall, allowing the central hollow tail core to inject viral DNA into the host cytoplasm.",
        "Reverse transcriptase belongs to retroviruses. Cellulase digests plant walls.",
        "bio-viruses-viroids-lichens", "Bacteriophage Mechanism")

    add(347, "Retroviruses like HIV possess which unique enzyme that synthesizes complementary DNA (cDNA) from a viral RNA template?",
        "Reverse transcriptase (RNA-dependent DNA polymerase)", "RNA replicase", "Taq DNA polymerase", "Restriction endonuclease",
        "A", "Reverse transcriptase in retroviruses.",
        "1. Retroviruses carry the enzyme reverse transcriptase, which transcribes their single-stranded RNA genome into double-stranded viral DNA that integrates into the host cell chromosome as a provirus.",
        "RNA replicase replicates RNA without a DNA intermediate. Restriction endonucleases cleave DNA at palindromic sequences.",
        "bio-viruses-viroids-lichens", "Retroviruses")

    add(348, "The genome of human Influenza virus is characterized by being:",
        "Segmented single-stranded RNA (8 negative-sense segments)", "A single continuous molecule of double-stranded DNA", "A single ring of circular single-stranded DNA", "Naked low molecular weight circular RNA lacking capsid",
        "A", "Influenza virus genome structure.",
        "1. Influenza virus (an Orthomyxovirus) possesses a segmented negative-sense single-stranded RNA genome consisting of 8 separate RNA segments, enabling rapid antigenic shifts via genetic reassortment.",
        "Option D describes a viroid.",
        "bio-viruses-viroids-lichens", "Animal Viruses")

    add(349, "The infectious agent causing Scrapie disease in sheep and goats is a:",
        "Prion (PrP^Sc)", "Viroid", "Bacteriophage", "Retrovirus",
        "A", "Scrapie etiology.",
        "1. Scrapie in sheep and goats is a transmissible spongiform encephalopathy caused by a prion—an abnormally folded, protease-resistant isoform of the cellular prion protein (PrP^Sc).",
        "It contains no viral or viroid nucleic acid.",
        "bio-viruses-viroids-lichens", "Prion Diseases")

    add(350, "At the molecular level, normal cellular prion protein (PrP^C) differs from infectious scrapie prion protein (PrP^Sc) because PrP^Sc has:",
        "Predominantly beta-pleated sheet conformation instead of alpha-helices, rendering it resistant to proteinase K", "A mutated single-stranded RNA core", "A thick capsid made of capsomeres", "Double-stranded circular DNA",
        "A", "Prion structural conformational change.",
        "1. PrP^C is predominantly alpha-helical and soluble.\n2. In PrP^Sc, alpha-helices refold into insoluble, protease-resistant beta-pleated sheets that aggregate into neurotoxic amyloid plaques.",
        "Prions contain no nucleic acids (no RNA or DNA).",
        "bio-viruses-viroids-lichens", "Prion Biochemistry")

    add(351, "Kuru, a fatal neurodegenerative disorder once endemic among the Fore people of Papua New Guinea, was transmitted by ritualistic endocannibalism and is caused by:",
        "Prions", "Viroids", "Cyanobacteria", "Mycoplasmas",
        "A", "Kuru disease transmission.",
        "1. Kuru ('laughing sickness') is a human transmissible spongiform encephalopathy caused by prions transmitted through the mortuary cannibalistic consumption of deceased relatives' brain tissue.",
        "Options B, C, and D are unrelated to spongiform encephalopathies.",
        "bio-viruses-viroids-lichens", "Prion Diseases")

    add(352, "Viroid RNA typically ranges in length between approximately:",
        "240 to 400 nucleotides", "20 to 30 nucleotides", "50,000 to 100,000 nucleotides", "3.2 million base pairs",
        "A", "Viroid RNA nucleotide size.",
        "1. Viroids consist of small, single-stranded, covalently closed circular RNA molecules of only 246 to 399 nucleotides that adopt a rod-like secondary structure through extensive internal base pairing.",
        "20-30 nucleotides is the size of microRNAs. 50,000 is phage lambda size.",
        "bio-viruses-viroids-lichens", "Viroid Molecular Structure")

    add(353, "Unlike viruses, viroids do not encode any proteins because their RNA lacks:",
        "An open reading frame (start codons and protein coding capacity) and relies entirely on host RNA Polymerase II", "Nucleotide bases", "Ribose sugar", "Phosphodiester bonds",
        "A", "Viroid non-coding nature.",
        "1. Viroids do not code for any viral proteins or enzymes; their RNA functions as a non-coding pathogen that is replicated autonomously by redirected host nuclear RNA Polymerase II via a rolling-circle mechanism.",
        "Options B, C, and D are false because viroid RNA possesses standard ribonucleotides with ribose and phosphodiester bonds.",
        "bio-viruses-viroids-lichens", "Viroid Replication")

    add(354, "Which of the following plant diseases is caused by a viroid?",
        "Chrysanthemum stunt and Citrus exocortis", "Tobacco mosaic disease", "Citrus canker", "Crown gall of apple",
        "A", "Viroid-induced plant diseases.",
        "1. In addition to Potato Spindle Tuber Disease (PSTD), viroids cause Chrysanthemum stunt, Citrus exocortis, and Cucumber pale fruit disease.",
        "TMV is a virus. Citrus canker is caused by Xanthomonas citri (bacterium). Crown gall is caused by Agrobacterium (bacterium).",
        "bio-viruses-viroids-lichens", "Viroid Plant Pathology")

    add(355, "In lichens, the root-like multicellular fungal rhizoids that anchor the thallus to rocky or bark substrata are termed:",
        "Rhizines", "Haustoria", "Appressoria", "Stolons",
        "A", "Lichen rhizines.",
        "1. In foliose lichens, multicellular bundles of fungal hyphae projecting from the lower cortex into the substratum are called rhizines; they function in mechanical anchoring and water absorption.",
        "Haustoria absorb nutrients parasitically. Appressoria are fungal attachment cushions. Stolons are plant runners.",
        "bio-viruses-viroids-lichens", "Lichen Anatomy")

    add(356, "The internal cross-section of a heteromerous lichen thallus reveals four distinct vertical zones, arranged from top to bottom as:",
        "Upper cortex, algal layer, medulla, and lower cortex", "Algal layer, upper cortex, lower cortex, and medulla", "Upper cortex, medulla, algal layer, and rhizine", "Medulla, upper cortex, algal layer, and lower cortex",
        "A", "Lichen internal anatomy layers.",
        "1. A transverse section of a heteromerous lichen shows:\n   (i) Upper cortex: compact fungal hyphae.\n   (ii) Algal zone: phycobiont cells interspersed with hyphae.\n   (iii) Medulla: loosely interwoven fungal hyphae.\n   (iv) Lower cortex: compact fungal layer producing rhizines.",
        "Options B, C, and D disrupt the natural stratified anatomical hierarchy.",
        "bio-viruses-viroids-lichens", "Lichen Anatomy")

    add(357, "Which lichen growth form resembles miniature branching shrubs or hanging beards (e.g., Usnea, Cladonia)?",
        "Fruticose lichen", "Crustose lichen", "Foliose lichen", "Leprose lichen",
        "A", "Lichen morphological growth forms.",
        "1. Lichens are categorized morphologically into three primary forms:\n   - Crustose: flat, paint-like crusts closely adhered to rock (e.g., Graphis).\n   - Foliose: flat, leaf-like lobed thallus attached by rhizines (e.g., Parmelia).\n   - Fruticose: branched, shrubby, erect or pendulous cylinders (e.g., Usnea).",
        "Crustose forms thin crusts. Foliose forms leafy lobes.",
        "bio-viruses-viroids-lichens", "Lichen Morphological Forms")

    add(358, "Parmelia and Peltigera, which have flat, leaf-like lobed thalli attached to bark or rocks by rhizines, belong to which lichen growth form?",
        "Foliose lichens", "Crustose lichens", "Fruticose lichens", "Filamentous lichens",
        "A", "Foliose lichen examples.",
        "1. Foliose lichens possess flattened, dorsiventral, leaf-like lobed bodies that can be easily peeled from their substratum (e.g., Parmelia, Peltigera).",
        "Crustose cannot be peeled without breaking. Fruticose is bushy and shrub-like.",
        "bio-viruses-viroids-lichens", "Lichen Morphological Forms")

    add(359, "In ecological primary succession on bare rock surfaces (lithosere), which organisms act as pioneer species that secrete organic acids to erode rock into soil?",
        "Crustose lichens", "Coniferous trees", "Mesophytic angiosperms", "Invertebrate nematodes",
        "A", "Lichens as ecological pioneer species.",
        "1. Crustose lichens (such as Rhizocarpon, Lecanora) are pioneer colonizers of bare rock in primary lithosere succession.\n2. They secrete carbonic and lichenic acids that weather minerals, initiating pedogenesis (soil formation) for mosses.",
        "Conifers and angiosperms appear much later in climax stages.",
        "bio-viruses-viroids-lichens", "Ecological Succession of Lichens")

    add(360, "The natural pH indicator litmus dye is traditionally extracted from which marine rock lichen?",
        "Roccella tinctoria", "Usnea barbata", "Parmelia perlata", "Cladonia rangiferina",
        "A", "Litmus extraction from Roccella.",
        "1. The acid-base chemical indicator dye litmus (erythrolitmin and azolitmin) is extracted from the lichen Roccella tinctoria.",
        "Usnea yields usnic acid (antibiotic). Cladonia rangiferina is reindeer moss (food for arctic reindeer). Parmelia is used in Indian spices.",
        "bio-viruses-viroids-lichens", "Economic Uses of Lichens")

    add(361, "Which lichen is known as 'Reindeer moss' and forms the primary winter grazing food for reindeer and caribou in the arctic tundra?",
        "Cladonia rangiferina", "Usnea florida", "Parmelia saxatilis", "Graphis scripta",
        "A", "Reindeer moss identity.",
        "1. Cladonia rangiferina (reindeer moss) is a fruticose lichen that carpets extensive tracts of arctic and subarctic tundra, serving as critical winter forage for grazing reindeer.",
        "Usnea is old man's beard. Graphis is script lichen.",
        "bio-viruses-viroids-lichens", "Economic Uses of Lichens")

    add(362, "Lichens are incapable of thriving in industrial urban centers because they lack a protective cuticle and stomata, making them extraordinarily vulnerable to:",
        "Sulphur dioxide (SO2) air pollution", "Carbon monoxide only", "Nitrogen gas (N2)", "Argon gas",
        "A", "Lichen sensitivity to sulphur dioxide.",
        "1. Lichens lack stomata and protective cuticles, absorbing moisture, nutrients, and gaseous pollutants indiscriminately over their entire thallus surface.\n2. Sulphur dioxide (SO2) degrades phycobiont chlorophyll into phaeophytin, killing the lichen.",
        "Carbon monoxide is non-toxic to photosynthetic organisms at atmospheric levels. Nitrogen and argon are inert.",
        "bio-viruses-viroids-lichens", "Lichen Pollution Biology")

    add(363, "The fungal partner (mycobiont) in the overwhelming majority (over 95%) of natural lichens belongs to which class of fungi?",
        "Ascomycetes", "Basidiomycetes", "Phycomycetes", "Deuteromycetes",
        "A", "Ascolichens dominance in nature.",
        "1. In more than 98% of known lichens, the fungal partner is an ascomycete (forming ascolichens with apothecia or perithecia).\n2. Only a very small minority (basidiolichens) involve basidiomycete fungi (e.g., Dictyonema).",
        "Basidiomycetes and deuteromycetes form only a negligible fraction of lichens.",
        "bio-viruses-viroids-lichens", "Lichen Taxonomy")

    add(364, "Which of the following photosynthetic organisms acts as the phycobiont in lichens capable of fixing both carbon dioxide and atmospheric nitrogen?",
        "Cyanobacteria (e.g., Nostoc, Scytonema)", "Green algae (Trebouxia)", "Diatoms (Navicula)", "Euglena viridis",
        "A", "Cyanolichens and nitrogen fixation.",
        "1. When cyanobacteria (such as Nostoc or Scytonema) serve as the photobiont (cyanolichens), their heterocysts fix atmospheric nitrogen in addition to synthesizing carbohydrates via photosynthesis.",
        "Trebouxia is a green alga that fixes carbon but cannot fix atmospheric nitrogen. Diatoms and Euglena do not form lichens.",
        "bio-viruses-viroids-lichens", "Cyanolichens Nitrogen Fixation")

    add(365, "A virus that infects and lyses fungal hyphae is scientifically termed a:",
        "Mycophage", "Bacteriophage", "Cyanophage", "Phytophage",
        "A", "Mycophage definition.",
        "1. Viruses that infect fungi are known as mycophages (mostly containing double-stranded RNA genomes).\n2. Viruses infecting bacteria are bacteriophages; those infecting cyanobacteria are cyanophages.",
        "Phytophages are plant-eating herbivores.",
        "bio-viruses-viroids-lichens", "Virus Terminology")

    add(366, "Cyanophages are viruses that specifically attack and infect:",
        "Cyanobacteria (blue-green algae)", "True fungi", "Eukaryotic algae", "Archaebacteria",
        "A", "Cyanophage host specificity.",
        "1. Cyanophages (discovered by Safferman and Morris in 1963) are viruses that specifically parasitize cyanobacteria (such as Lyngbya, Plectonema, and Phormidium).",
        "Fungi are attacked by mycophages. Archaebacteria are attacked by archaeviruses.",
        "bio-viruses-viroids-lichens", "Virus Terminology")

    add(367, "In the lysogenic cycle of a temperate bacteriophage (like Lambda phage), the integrated viral genome dormant within the host bacterial chromosome is called a:",
        "Prophage", "Capsid", "Viroid", "Prion",
        "A", "Prophage in lysogeny.",
        "1. In lysogeny, the phage genome integrates into the host bacterial chromosome via site-specific recombination and replicates passively along with host DNA as an unexpressed prophage.",
        "Capsid is the protein coat. Viroid is naked RNA. Prion is infectious protein.",
        "bio-viruses-viroids-lichens", "Bacteriophage Lysogeny")

    add(368, "During the viral replication cycle, the period between the penetration of viral nucleic acid into the host cell and the intracellular appearance of the first mature infectious virion is known as the:",
        "Eclipse period", "Burst size", "Lytic surge", "Latency phase",
        "A", "Viral eclipse period.",
        "1. The eclipse period is the phase during which the parent virion has disassembled to release its nucleic acid, so no infectious intact virus particles can be detected inside the cell.",
        "Burst size is the number of virions released per lysed cell.",
        "bio-viruses-viroids-lichens", "Viral Replication Dynamics")

    add(369, "Interferons are antiviral glycoproteins produced by:",
        "Virus-infected host animal cells to protect neighboring uninfected cells", "Bacteriophages inside bacteria", "Lichens on bare rock", "Viroids in plant phloem",
        "A", "Interferons biological source.",
        "1. When animal cells are infected by viruses, they synthesize and secrete signaling cytokines called interferons (IFN-alpha, beta) that warn neighboring uninfected cells to produce antiviral enzymes.",
        "Options B, C, and D are factually inaccurate.",
        "bio-viruses-viroids-lichens", "Antiviral Host Defenses")

    add(370, "Which of the following viruses has a single-stranded DNA (ssDNA) genome?",
        "Bacteriophage phi-X-174", "Bacteriophage T4", "Tobacco mosaic virus", "Poxvirus",
        "A", "Phi-X-174 single-stranded DNA genome.",
        "1. Bacteriophage phi-X-174 possesses a single-stranded circular DNA (ssDNA) genome of 5386 nucleotides (first sequenced by Sanger in 1977).\n2. T4 phage and Poxvirus contain dsDNA. TMV contains ssRNA.",
        "Options B, C, and D contain different genetic materials.",
        "bio-viruses-viroids-lichens", "Viral Genome Variations")

    add(371, "Which of the following viruses contains a double-stranded RNA (dsRNA) genome?",
        "Reovirus (and Wound tumor virus)", "Tobacco mosaic virus", "HIV", "Bacteriophage T2",
        "A", "Double-stranded RNA viruses.",
        "1. Reoviruses and rotaviruses contain segmented double-stranded RNA (dsRNA) genomes.\n2. TMV and HIV contain ssRNA. T2 phage contains dsDNA.",
        "Options B, C, and D do not have dsRNA.",
        "bio-viruses-viroids-lichens", "Viral Genome Variations")

    add(372, "The spikes projecting from the lipoprotein envelope of influenza viruses are composed of two distinct glycoproteins:",
        "Hemagglutinin (HA) and Neuraminidase (NA)", "Capsomeres and flagellin", "Albumin and globulin", "Tubulin and dynein",
        "A", "Influenza glycoprotein spikes.",
        "1. The influenza envelope contains two antigenic glycoprotein spikes:\n   - Hemagglutinin (HA): binds to sialic acid receptors on host respiratory epithelial cells.\n   - Neuraminidase (NA): cleaves sialic acid to release budding progeny virions.",
        "Capsomeres form naked coats. Flagellin and tubulin are filament proteins.",
        "bio-viruses-viroids-lichens", "Influenza Surface Spikes")

    add(373, "Which of the following statements regarding Viruses is INCORRECT?",
        "Viruses can reproduce independently in nutrient agar medium outside host cells", "They contain either RNA or DNA, but never both", "They possess an inert crystalline structure outside living cells", "Plant viruses usually contain single-stranded RNA",
        "A", "Obligate intracellular nature of viruses in NCERT.",
        "1. Viruses cannot reproduce or metabolize in synthetic nutrient agar outside host cells because they completely lack cellular organelles and metabolic machinery.\n2. They are obligate intracellular parasites that replicate solely inside host cells.",
        "Options B, C, and D are verified true statements from NCERT.",
        "bio-viruses-viroids-lichens", "Virus General Rules")

    add(374, "Which of the following statements regarding Viroids is INCORRECT?",
        "Viroids possess a tough protein coat made of tightly packed capsomeres", "They were discovered by T.O. Diener in 1971", "They consist of free low molecular weight RNA", "They cause potato spindle tuber disease",
        "A", "Absence of capsid in viroids in NCERT.",
        "1. Viroids completely LACK any protein coat (capsid); they are naked molecules of low molecular weight RNA.\n2. Stating that they possess a tough protein coat is directly false.",
        "Options B, C, and D are verified true statements from NCERT.",
        "bio-viruses-viroids-lichens", "Viroid Rules")

    add(375, "Which of the following statements regarding Lichens is INCORRECT?",
        "Lichens thrive profusely in heavily polluted industrial areas with high sulphur dioxide", "The algal component is called phycobiont and is autotrophic", "The fungal component is called mycobiont and provides shelter and absorption", "They act as pioneer species on bare rock in ecological succession",
        "A", "Lichen pollution sensitivity in NCERT.",
        "1. Lichens are extremely sensitive to sulphur dioxide pollution and do NOT grow in polluted areas; hence, they serve as natural bio-indicators of pollution.\n2. Claiming they thrive in polluted industrial areas is completely false.",
        "Options B, C, and D are verified true statements from NCERT.",
        "bio-viruses-viroids-lichens", "Lichen Rules")

    print(f"Total Part 3 questions defined: {len(qs)}")
    return qs

if __name__ == "__main__":
    qs = build_part3()
    # Write to scripts/bc_data_part3.py
    with open("scripts/bc_data_part3.py", "w") as f:
        f.write("import json\n\ndef get_part3_questions():\n    questions = []\n")
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
        f.write('            "difficulty": "Medium",\n')
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
    print("Saved scripts/bc_data_part3.py successfully.")
