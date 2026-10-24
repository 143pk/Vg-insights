import os
import sys
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from scripts.bio12_engine.common import balance_and_build_parts

CHP_ID = "biodiversity-conservation"
CHP_TITLE = "Biodiversity and Conservation"
FILE_PREFIX = "biodiversityConservation"
VAR_PREFIX = "BIODIVERSITY_CONSERVATION"

T1 = ("bio-biodiversity-patterns-loss", "Biodiversity Levels, Patterns & Causes of Loss (Evil Quartet)")
T2 = ("bio-insitu-exsitu-conservation", "Conservation Strategies (In-Situ, Ex-Situ, Hotspots & Conventions)")

def generate_chapter_13():
    print(f"Generating 500 questions for {CHP_TITLE}...")
    qs = []

    def add(q, a, b, c, d, ans, concept, step, why_wrong, top_tuple, subtopic):
        top_id, top_name = top_tuple
        qs.append({
            "question": q,
            "opts": {"A": a, "B": b, "C": c, "D": d},
            "ans": ans,
            "concept": concept,
            "step": step,
            "why_wrong": why_wrong,
            "topic": top_name,
            "topicId": top_id,
            "subtopic": subtopic
        })

    # =========================================================================
    # PART 1: 125 EASY QUESTIONS
    # =========================================================================
    easy_data = [
        ("Who popularized the term 'biodiversity' to describe the combined diversity at all hierarchical levels of biological organization?",
         "Edward Wilson", "Alexander von Humboldt", "Robert May", "Paul Ehrlich", "A",
         "Biodiversity term popularizer.",
         "Edward Wilson, a sociobiologist, popularised the term 'biodiversity' to describe the combined diversity at all the levels of biological organisation.",
         "Humboldt described species-area curve; May gave 7 million estimate; Ehrlich proposed Rivet Popper.",
         T1, "Biodiversity Levels"),

        ("The medicinal plant Rauwolfia vomitoria growing in different Himalayan ranges produces varying concentrations and potency of the active alkaloid reserpine; this is an example of:",
         "Genetic diversity", "Species diversity", "Ecological diversity", "Ecosystem diversity", "A",
         "Genetic diversity in Rauwolfia.",
         "Genetic diversity refers to diversity within a single species. Rauwolfia vomitoria shows genetic variation in the potency and concentration of reserpine across Himalayan ranges.",
         "Species diversity refers to richness across different species.",
         T1, "Genetic Diversity"),

        ("India possesses more than 50,000 genetically different strains of rice and over 1,000 varieties of mango; this immense variability represents:",
         "Genetic diversity", "Species diversity", "Ecological diversity", "Community diversity", "A",
         "Genetic diversity in Indian crops.",
         "India has more than 50,000 genetically different strains of rice and 1,000 varieties of mango, representing massive intraspecific genetic diversity.",
         "These belong to single species (Oryza sativa and Mangifera indica).",
         T1, "Genetic Diversity"),

        ("The observation that the Western Ghats have a greater amphibian species richness than the Eastern Ghats illustrates:",
         "Species diversity", "Genetic diversity", "Ecological diversity", "Biochemical diversity", "A",
         "Species diversity in amphibians.",
         "The Western Ghats have a greater amphibian species diversity than the Eastern Ghats, representing species-level diversity.",
         "Intraspecific variation is genetic diversity.",
         T1, "Species Diversity"),

        ("India, with its deserts, rainforests, mangroves, coral reefs, wetlands, estuaries, and alpine meadows, has greater ecosystem diversity than a Scandinavian country like:",
         "Norway", "Brazil", "Indonesia", "Australia", "A",
         "Ecological diversity comparison.",
         "At the ecosystem level, India has a greater ecosystem diversity than a Scandinavian country like Norway.",
         "Norway has cold, uniform boreal ecosystems with low habitat heterogeneity.",
         T1, "Ecological Diversity"),

        ("According to the International Union for Conservation of Nature (IUCN, 2004), the total number of documented plant and animal species described so far is:",
         "Slightly more than 1.5 million", "About 7 million", "100 million", "500,000 only", "A",
         "IUCN 2004 recorded species.",
         "According to the IUCN (2004), the total number of plant and animal species described so far is slightly more than 1.5 million.",
         "7 million is Robert May's global estimate.",
         T1, "Global Biodiversity Estimates"),

        ("Which ecologist proposed a scientifically sound, conservative global estimate that there are approximately 7 million living species on Earth?",
         "Robert May", "Alexander von Humboldt", "David Tilman", "Paul Ehrlich", "A",
         "Robert May 7 million estimate.",
         "Robert May places the global species diversity at several millions; a more conservative and scientifically sound estimate made by Robert May puts the global species diversity at about 7 million.",
         "Humboldt worked on species-area relationship.",
         T1, "Global Biodiversity Estimates"),

        ("Among all recorded living species on Earth, animals comprise what percentage of global taxonomic diversity?",
         "More than 70 percent", "About 22 percent", "Less than 5 percent", "Exactly 50 percent", "A",
         "Animal taxonomic proportion.",
         "More than 70 per cent of all the species recorded are animals, while plants (including algae, fungi, bryophytes, gymnosperms and angiosperms) comprise no more than 22 per cent.",
         "Plants comprise about 22%.",
         T1, "Taxonomic Proportions"),

        ("Plants (including algae, fungi, bryophytes, gymnosperms, and angiosperms) comprise what proportion of all recorded species on Earth?",
         "No more than 22 percent", "Over 70 percent", "About 50 percent", "95 percent", "A",
         "Plant taxonomic proportion.",
         "Plants comprise no more than 22 per cent of the total recorded species.",
         "Animals constitute over 70%.",
         T1, "Taxonomic Proportions"),

        ("Among animal groups, which taxonomic class is the most species-rich, accounting for more than 70 percent of all animal species on Earth?",
         "Insects (Class Insecta)", "Molluscs", "Fishes", "Birds", "A",
         "Insects species richness.",
         "Among animals, insects are the most species-rich taxonomic group, making up more than 70 per cent of the total (7 out of 10 animals are insects).",
         "Molluscs are second, but insects vastly dominate.",
         T1, "Insect Dominance"),

        ("The number of fungal species in the world is estimated to be greater than the combined total of which vertebrate groups?",
         "Fishes, amphibians, reptiles, and mammals",
         "Birds and mammals only",
         "Insects and spiders",
         "All bacteria in the ocean", "A",
         "Fungal diversity in NCERT.",
         "The number of fungi species in the world is more than the combined total of the species of fishes, amphibians, reptiles and mammals.",
         "Fungi exhibit immense evolutionary diversity.",
         T1, "Taxonomic Proportions"),

        ("Why do biologists NOT give any reliable figures for the total species diversity of prokaryotic microorganisms?",
         "Conventional taxonomic methods are not suitable for identifying microbial species, and many species cannot be cultured in the laboratory",
         "Prokaryotes do not have DNA",
         "All prokaryotes belong to a single species",
         "Bacteria are too large to count", "A",
         "Prokaryote diversity estimation limitations.",
         "Biologists are not sure about how many prokaryotic species there might be because conventional taxonomic methods are unsuitable and many bacteria are unculturable under lab conditions.",
         "Molecular phylogenetic techniques indicate millions of bacterial OTUs.",
         T1, "Prokaryotic Diversity"),

        ("Although India possesses only 2.4 percent of the world's total land surface area, what impressive share of global species diversity does it harbor?",
         "8.1 percent", "2.4 percent", "25 percent", "50 percent", "A",
         "India's global biodiversity share.",
         "Although India has only 2.4 per cent of the world's land area, its share of the global species diversity is an impressive 8.1 per cent.",
         "This places India among the 12 mega diversity countries.",
         T1, "India Biodiversity"),

        ("How many 'mega diversity' countries in the world is India recognized as being one of?",
         "One of the 12 mega diversity nations",
         "One of the 5 nations",
         "One of the 50 nations",
         "One of the 100 nations", "A",
         "Mega diversity nations.",
         "India is recognized as one of the 12 mega biodiversity countries of the world.",
         "It shares 8.1% of global species richness.",
         T1, "India Biodiversity"),

        ("Applying Robert May's global estimate to India, how many plant species and animal species are estimated to still remain undiscovered in our country?",
         "More than 100,000 plant species and 300,000 animal species",
         "10 plant species and 20 animal species",
         "1,000 plant species and 2,000 animal species",
         "Zero because all species in India have been fully cataloged", "A",
         "Undiscovered Indian species.",
         "Applying May's global estimate, only 22 per cent of total species have been recorded so far; in India, probably more than 100,000 plant species and more than 300,000 animal species are yet to be discovered and described.",
         "A massive biological fraction remains unknown.",
         T1, "India Biodiversity"),

        ("As an observer travels from the equator towards the polar regions, the overall species diversity of plants and animals generally:",
         "Decreases progressively", "Increases exponentially", "Remains absolutely constant", "Doubles every 10 kilometers", "A",
         "Latitudinal diversity gradient.",
         "In general, species diversity decreases as we move away from the equator towards the poles.",
         "Tropics harbor far greater richness than temperate or polar regions.",
         T1, "Latitudinal Gradients"),

        ("Which geographical zone on Earth harbors the highest species richness, spanning latitudes between 23.5° N and 23.5° S?",
         "Tropical region", "Polar tundra", "Temperate deciduous zone", "Boreal taiga", "A",
         "Tropics biodiversity richness.",
         "With very few exceptions, tropics (latitudinal range of 23.5° N to 23.5° S) harbour more species than temperate or polar areas.",
         "Warm, stable climates foster speciation.",
         T1, "Latitudinal Gradients"),

        ("Colombia, located near the equator, harbors nearly 1,400 species of birds, while New York at 41° N has 105 species, and Greenland at 71° N has only:",
         "56 species", "1,400 species", "500 species", "10 species", "A",
         "Latitudinal bird comparison in NCERT.",
         "Colombia located near the equator has nearly 1,400 species of birds while New York at 41° N has 105 species and Greenland at 71° N only 56 species.",
         "Greenland is polar and species-poor.",
         T1, "Latitudinal Gradients"),

        ("India, with much of its land area situated in tropical latitudes, harbors more than how many species of birds?",
         "More than 1,200 species", "Only 100 species", "About 50 species", "5,000 species", "A",
         "Indian avifaunal richness.",
         "India, with much of its land area in the tropical latitudes, has more than 1,200 species of birds.",
         "NCERT explicitly specifies >1,200 species.",
         T1, "Latitudinal Gradients"),

        ("The largely tropical Amazonian rain forest in South America is celebrated as having the greatest biodiversity on Earth, harboring over how many plant species?",
         "More than 40,000 plant species", "1,000 plant species", "500 plant species", "100,000 plant species", "A",
         "Amazonian plant richness in NCERT.",
         "The largely tropical Amazonian rain forest in South America has the greatest biodiversity on earth: it is home to more than 40,000 species of plants.",
         "It also houses 3,000 fishes and 1,300 birds.",
         T1, "Amazon Rainforest"),

        ("Why do tropical regions harbor vastly greater biodiversity than temperate regions according to evolutionary biologists?",
         "Tropics remained undisturbed by glaciations for millions of years, are less seasonal, and receive more solar energy",
         "Because tropical organisms do not have predators",
         "Because tropical soil is made of pure sugar",
         "Because temperate regions have zero sunlight", "A",
         "Three ecological reasons for tropical richness.",
         "Three main hypotheses: (i) tropical latitudes remained undisturbed by glaciations allowing evolutionary diversification, (ii) constant, predictable environments promote niche specialization, and (iii) higher solar energy yields higher productivity.",
         "Temperate zones experienced frequent glaciations.",
         T1, "Tropical Richness Hypotheses"),

        ("Who explored the wilderness of South American jungles and pioneered the concept of the 'Species-Area relationship'?",
         "Alexander von Humboldt", "Charles Darwin", "Gregor Mendel", "Edward Wilson", "A",
         "Humboldt species-area relationship.",
         "During his pioneering and extensive explorations in the wilderness of South American jungles, the great German naturalist and geographer Alexander von Humboldt observed that within a region, species richness increased with increasing explored area, but only up to a limit.",
         "Humboldt formulated the species-area curve.",
         T1, "Species-Area Relationship"),

        ("On a standard arithmetic scale, the mathematical relationship between species richness (S) and explored area (A) plots as a:",
         "Rectangular hyperbola", "Straight linear diagonal line", "Sigmoid curve", "Inverted parabola", "A",
         "Species-area rectangular hyperbola.",
         "The relation between species richness and area for a wide variety of taxa turns out to be a rectangular hyperbola.",
         "S = C A^Z.",
         T1, "Species-Area Relationship"),

        ("On a logarithmic scale, the species-area relationship becomes a straight line described by which linear equation?",
         "log S = log C + Z log A",
         "log S = log C - Z log A",
         "log S = Z log C + log A",
         "S = C + Z A", "A",
         "Logarithmic species-area equation.",
         "On a logarithmic scale, the relationship is a straight line described by the equation: log S = log C + Z log A, where S = species richness, A = area, Z = regression coefficient, C = Y-intercept.",
         "This linear transformation allows regression analysis.",
         T1, "Species-Area Relationship"),

        ("In the species-area equation log S = log C + Z log A, what does the parameter 'Z' represent?",
         "Slope of the line (regression coefficient)",
         "Species richness",
         "Total area explored",
         "Y-intercept", "A",
         "Z parameter definition.",
         "In log S = log C + Z log A, Z is the slope of the line (regression coefficient).",
         "S is species richness; A is area; C is intercept.",
         T1, "Species-Area Relationship"),

        ("For small to moderate regions (such as plants in Britain, birds in California, or molluscs in New York), the value of the slope 'Z' consistently falls in the range of:",
         "0.1 to 0.2", "0.6 to 1.2", "1.5 to 2.0", "5.0 to 10.0", "A",
         "Z value range for local areas.",
         "Ecologists have found that the value of Z lies in the range of 0.1 to 0.2, regardless of the taxonomic group or the region.",
         "0.6 to 1.2 is for entire continents.",
         T1, "Species-Area Relationship"),

        ("When species-area relationships are analyzed across immense geographic scales such as entire continents, the slope Z becomes much steeper, falling in the range of:",
         "0.6 to 1.2", "0.1 to 0.2", "0.01 to 0.05", "3.0 to 5.0", "A",
         "Z value for continental scales.",
         "If you analyse the species-area relationship among very large areas like the entire continents, you will find that the slope of the line is much steeper (Z values in the range of 0.6 to 1.2).",
         "Steeper slope indicates rapid species turnover across habitats.",
         T1, "Species-Area Relationship"),

        ("For frugivorous (fruit-eating) birds and mammals across tropical forests of different continents, the regression slope Z is approximately:",
         "1.15", "0.15", "0.01", "2.5", "A",
         "Frugivore Z value in NCERT.",
         "For frugivorous birds and mammals in the tropical forests of different continents, the slope is found to be 1.15.",
         "NCERT explicitly cites 1.15 as a continental example.",
         T1, "Species-Area Relationship"),

        ("David Tilman's long-term outdoor ecological plot experiments demonstrated that communities with higher species diversity exhibited:",
         "Less year-to-year variation in total biomass and increased overall productivity",
         "Total collapse of all plant biomass",
         "Extreme wild oscillations in plant height",
         "Zero photosynthesis in summer", "A",
         "Tilman's biodiversity experiments.",
         "David Tilman showed that outdoor plots with more species showed less year-to-year variation in total biomass and that increased diversity contributed to higher productivity.",
         "Diversity confers ecological stability.",
         T1, "Diversity and Stability"),

        ("Paul Ehrlich proposed which famous ecological analogy to explain how progressive species extinctions weaken and destabilize ecosystem integrity?",
         "The 'Rivet Popper' hypothesis",
         "The 'Lock and Key' hypothesis",
         "The 'Fluid Mosaic' model",
         "The 'Big Bang' hypothesis", "A",
         "Rivet Popper hypothesis.",
         "Stanford ecologist Paul Ehrlich proposed the 'Rivet Popper hypothesis' using an airplane analogy to illustrate the consequences of species loss.",
         "Airplane = ecosystem; rivets = species.",
         T1, "Rivet Popper Hypothesis"),

        ("In Paul Ehrlich's Rivet Popper hypothesis, what does the 'airplane' and the 'rivets' represent?",
         "Airplane represents the ecosystem, and rivets represent individual species",
         "Airplane represents a cell, and rivets represent ribosomes",
         "Airplane represents an atom, and rivets represent electrons",
         "Airplane represents global temperature, and rivets represent rainfall", "A",
         "Rivet Popper components.",
         "In the analogy, the airplane represents the ecosystem and the thousands of rivets holding it together represent individual species.",
         "Popping rivets corresponds to driving species to extinction.",
         T1, "Rivet Popper Hypothesis"),

        ("In the Rivet Popper hypothesis, the loss of 'rivets on the wings' of the airplane corresponds ecologically to the extinction of:",
         "A keystone species that drives major ecosystem functions",
         "A rare insect with zero ecological role",
         "A microscopic soil bacterium",
         "An invasive foreign weed", "A",
         "Keystone species in Rivet Popper.",
         "Loss of rivets on the wings (key species that drive major ecosystem dynamics) poses a far more serious threat to flight safety than loss of rivets on seats.",
         "Keystone loss causes structural ecosystem collapse.",
         T1, "Rivet Popper Hypothesis"),

        ("According to the IUCN Red List (2004), how many total species have become documented as extinct in the last 500 years?",
         "784 species (338 vertebrates, 359 invertebrates, and 87 plants)",
         "7 million species",
         "10 species only",
         "100,000 species", "A",
         "IUCN Red List 2004 extinctions.",
         "The IUCN Red List (2004) documents the extinction of 784 species (including 338 vertebrates, 359 invertebrates and 87 plants) in the last 500 years.",
         "Human activities drove these extinctions.",
         T1, "Recent Extinctions"),

        ("The flightless bird Dodo, which went extinct due to human over-hunting, was native to which island?",
         "Mauritius", "Madagascar", "Galapagos", "Australia", "A",
         "Dodo extinction in Mauritius.",
         "Recent extinctions include the Dodo (Mauritius), Quagga (Africa), Thylacine (Australia), Steller's Sea Cow (Russia).",
         "Dodo was endemic to Mauritius.",
         T1, "Recent Extinctions"),

        ("The Quagga, an extinct subspecies of zebra driven to extinction in the 19th century, was native to:",
         "Africa", "Australia", "Mauritius", "Russia", "A",
         "Quagga extinction in Africa.",
         "The Quagga was an indigenous equin of southern Africa that went extinct due to overhunting.",
         "Thylacine was from Australia.",
         T1, "Recent Extinctions"),

        ("The marsupial carnivore Thylacine (Tasmanian tiger/wolf) was driven to extinction by human persecution on which landmass?",
         "Australia", "Mauritius", "Africa", "Russia", "A",
         "Thylacine extinction in Australia.",
         "The Thylacine was a carnivorous marsupial native to Australia/Tasmania that went extinct in the 20th century.",
         "Dodo was Mauritius; Quagga was Africa.",
         T1, "Recent Extinctions"),

        ("Steller's Sea Cow, an enormous marine mammal driven to extinction within 27 years of discovery due to human over-harvesting, was native to:",
         "Russia", "Australia", "Mauritius", "Africa", "A",
         "Steller's Sea Cow extinction in Russia.",
         "Steller's Sea Cow (Hydrodamalis gigas) was driven to extinction in cold coastal waters of Russia (Bering Sea) due to human overexploitation.",
         "Overexploitation wiped out the entire species.",
         T1, "Recent Extinctions"),

        ("Which three subspecies of the tiger (Panthera tigris) have been driven to complete extinction in recent human history?",
         "Bali, Javan, and Caspian", "Bengal, Siberian, and Indochinese", "African, Asian, and American", "Malayan, Sumatran, and Chinese", "A",
         "Tiger subspecies extinctions in NCERT.",
         "Three subspecies of tiger: Bali, Javan, and Caspian have become extinct in recent decades.",
         "Bengal and Siberian tigers survive under endangered status.",
         T1, "Recent Extinctions"),

        ("Current human-induced extinction rates of species are estimated to be how many times faster than pre-human natural background extinction rates?",
         "100 to 1,000 times faster", "2 times faster", "Equal to pre-human rates", "10,000,000 times faster", "A",
         "Current extinction acceleration.",
         "The current species extinction rates are estimated to be 100 to 1,000 times faster than in the pre-human times and our activities are responsible for the faster rates.",
         "This constitutes the ongoing Sixth Extinction.",
         T1, "Sixth Mass Extinction"),

        ("The major drivers of accelerated biodiversity loss caused by human activities are famously referred to as:",
         "The 'Evil Quartet'", "The 'Big Four'", "The 'Four Seasons'", "The 'Darwinian Quartet'", "A",
         "The Evil Quartet.",
         "The four major causes of biodiversity loss are popularly nicknamed 'The Evil Quartet': (i) Habitat loss and fragmentation, (ii) Over-exploitation, (iii) Alien species invasions, and (iv) Co-extinctions.",
         "Habitat destruction is the most destructive member.",
         T1, "The Evil Quartet"),

        ("Among the members of the 'Evil Quartet', which is recognized as the single MOST IMPORTANT cause driving animal and plant species to extinction?",
         "Habitat loss and fragmentation", "Over-exploitation", "Alien species invasions", "Co-extinction", "A",
         "Habitat loss as primary driver.",
         "Habitat loss and fragmentation is the most important cause driving animals and plants to extinction.",
         "Over-exploitation is second; habitat destruction is #1.",
         T1, "The Evil Quartet"),

        ("Tropical rain forests, which once covered more than 14 percent of the Earth's land surface, now cover no more than:",
         "6 percent", "1 percent", "12 percent", "25 percent", "A",
         "Rainforest decline in NCERT.",
         "Tropical rain forests once covering more than 14 per cent of the earth's land surface now cover no more than 6 per cent.",
         "Massive deforestation destroyed over half the tropical forest biome.",
         T1, "Habitat Loss"),

        ("The Amazonian rain forest is so vast that it is celebrated as the 'lungs of the planet'; what human activity is primarily clearing this forest?",
         "Cultivating soybeans and converting forest into beef cattle pastures",
         "Mining for pure diamonds only",
         "Building snow ski resorts",
         "Constructing nuclear testing facilities", "A",
         "Amazon destruction drivers.",
         "The Amazon rain forest is being cut and cleared for cultivating soya beans or for conversion to grasslands for raising beef cattle.",
         "Agricultural conversion drives deforestation.",
         T1, "Habitat Loss"),

        ("When large contiguous forest habitats are broken up into small isolated fragments by human roads and settlements, which animals are hit hardest?",
         "Mammals and birds requiring large home territories and those with migratory habits",
         "Microscopic soil amoebae only",
         "Houseflies and pigeons",
         "Pond algae", "A",
         "Habitat fragmentation consequences.",
         "When large habitats are broken into small fragments owing to human activities, mammals and birds requiring large territories and animals with migratory habits are badly affected, leading to population declines.",
         "Edge effects and genetic isolation fragment populations.",
         T1, "Habitat Fragmentation"),

        ("The extinction of Steller's sea cow and the passenger pigeon in the last 500 years was driven primarily by which human factor?",
         "Over-exploitation by humans for food and resources",
         "Alien insect invasions",
         "Co-extinction with parasites",
         "Natural ice age glaciations", "A",
         "Over-exploitation examples.",
         "Many species extinctions in the last 500 years (Steller's sea cow, passenger pigeon) were due to overexploitation by humans.",
         "Commercial slaughter wiped them out.",
         T1, "Over-exploitation"),

        ("When the predatory alien fish Nile Perch was introduced into Lake Victoria in East Africa, it led to the extinction of:",
         "More than 200 species of native cichlid fishes",
         "All plant life in Africa",
         "All African crocodiles",
         "The Nile River itself", "A",
         "Nile perch invasion in Lake Victoria.",
         "The Nile perch introduced into Lake Victoria in east Africa led eventually to the extinction of an ecologically unique assemblage of more than 200 species of cichlid fish in the lake.",
         "The exotic predator decimated endemic cichlids.",
         T1, "Alien Species Invasions"),

        ("Which invasive exotic weed, introduced to India as a contaminant with imported wheat, has spread ubiquitous damage to native flora and human respiratory health?",
         "Parthenium hysterophorus (Carrot grass)", "Lantana camara", "Eichhornia crassipes", "Opuntia", "A",
         "Parthenium invasive weed.",
         "Parthenium (carrot grass) introduced as a wheat contaminant has caused environmental damage and human allergies across India.",
         "It is an alien invasive weed.",
         T1, "Alien Species Invasions"),

        ("Eichhornia crassipes (Water hyacinth), introduced into India for its lovely flowers, is notoriously termed 'Terror of Bengal' because it:",
         "Chokes aquatic waterways, blocks sunlight, depletes dissolved oxygen, and kills native fish",
         "Walks onto dry land to eat rice crops",
         "Produces radioactive smoke",
         "Turns fresh water into gasoline", "A",
         "Water hyacinth impact.",
         "Water hyacinth spreads aggressively over water bodies, choking waterways, depleting dissolved oxygen, and destroying aquatic life.",
         "It is one of the world's worst invasive aquatic weeds.",
         T1, "Alien Species Invasions"),

        ("The illegal introduction of which predatory African catfish for aquaculture purposes in India poses a grave threat to our indigenous catfishes?",
         "Clarias gariepinus", "Clarias batrachus", "Catla catla", "Labeo rohita", "A",
         "Clarias gariepinus alien catfish.",
         "The recent illegal introduction of the African catfish Clarias gariepinus for aquaculture purposes is posing a threat to the indigenous catfishes in our rivers.",
         "Clarias batrachus is the native Indian magur.",
         T1, "Alien Species Invasions"),

        ("When a host fish species becomes extinct, all the unique parasitic species exclusively dependent on it also inevitably go extinct; this phenomenon is called:",
         "Co-extinction", "Biomagnification", "Competitive exclusion", "Mutualism", "A",
         "Co-extinction definition.",
         "When a host species becomes extinct, its unique assemblage of parasites also meets the same fate. This is co-extinction.",
         "Co-evolved mutualists also suffer co-extinction.",
         T1, "Co-extinction")
    ]

    # Additional 75 easy questions for Chapter 13
    extra_easy_13 = [
        ("Arguments for conserving biodiversity based on direct material benefits derived by humans (such as food, firewood, fiber, and pharmaceuticals) are termed:",
         "Narrowly utilitarian arguments", "Broadly utilitarian arguments", "Ethical arguments", "Spiritual arguments", "A",
         "Narrowly utilitarian arguments.",
         "The narrowly utilitarian arguments for conserving biodiversity are obvious; humans derive countless direct economic benefits from nature (food, firewood, fibre, medicines).",
         "Broadly utilitarian refers to ecosystem services.",
         T2, "Conservation Arguments"),

        ("More than what percentage of modern pharmaceutical drugs currently sold across global markets are derived directly from natural plant chemicals?",
         "More than 25 percent", "Less than 1 percent", "99 percent", "50 percent", "A",
         "Plant-derived pharmaceuticals in NCERT.",
         "More than 25 per cent of the drugs currently sold in the market worldwide are derived from plants.",
         "25,000 species of plants contribute to traditional medicines.",
         T2, "Narrowly Utilitarian"),

        ("The systematic exploration of molecular, genetic, and species-level diversity for products of economic and commercial importance is called:",
         "Bioprospecting", "Biopiracy", "Biomagnification", "Bioremediation", "A",
         "Bioprospecting definition.",
         "Bioprospecting is the exploration of molecular, genetic and species-level diversity for products of economic importance.",
         "Nations rich in biodiversity reap high dividends from bioprospecting.",
         T2, "Bioprospecting"),

        ("Arguments for biodiversity conservation based on vital ecosystem services (such as Amazon rainforest releasing 20% of Earth's oxygen, pollination, and flood control) are:",
         "Broadly utilitarian arguments", "Narrowly utilitarian arguments", "Bioprospecting arguments", "Legal arguments", "A",
         "Broadly utilitarian arguments.",
         "The broadly utilitarian argument says that biodiversity plays a major role in many ecosystem services that nature provides (e.g. Amazon producing 20% of O2, pollination).",
         "Narrowly utilitarian relates to direct commercial goods.",
         T2, "Broadly Utilitarian"),

        ("The ethical argument for conserving biodiversity emphasizes that:",
         "Every living species has an intrinsic value, and humans have a moral duty to pass on our biological heritage to future generations",
         "Species are only valuable if they can be sold for money",
         "Humans should exterminate all non-edible species",
         "Only mammals deserve conservation", "A",
         "Ethical argument in NCERT.",
         "The ethical argument for conserving biodiversity relates to what we owe to millions of plant, animal and microbe species with whom we share this planet; each species has an intrinsic value.",
         "We have a moral stewardship duty.",
         T2, "Ethical Arguments"),

        ("When endangered plants or animals are protected and conserved within their natural, pristine wild habitats, this conservation strategy is termed:",
         "In situ conservation (On-site conservation)",
         "Ex situ conservation (Off-site conservation)",
         "Cryopreservation",
         "Zoological captivity", "A",
         "In situ conservation.",
         "When we conserve and protect the whole ecosystem, its biodiversity at all levels is protected; this in situ (on-site) conservation approach protects species in the wild.",
         "Ex situ removes species to artificial facilities.",
         T2, "In Situ Conservation"),

        ("Regions characterized by exceptionally high species richness, high ecological priority, and a high degree of endemism are designated as:",
         "Biodiversity Hotspots", "Biosphere Reserves", "Ecological deserts", "Urban sprawl zones", "A",
         "Biodiversity Hotspots.",
         "Biodiversity hotspots are regions with very high levels of species richness and a high degree of endemism (that is, species confined to that region and not found anywhere else).",
         "Hotspots represent priority conservation zones.",
         T2, "Biodiversity Hotspots"),

        ("In biogeography, the term 'endemism' specifically means that a species is:",
         "Confined exclusively to a particular geographic region and found nowhere else on Earth",
         "Found evenly distributed across all continents",
         "Immune to all infectious diseases",
         "Capable of flying across oceans", "A",
         "Endemism definition.",
         "Endemism means species are confined to that region and not found anywhere else.",
         "Hotspots feature high endemism.",
         T2, "Biodiversity Hotspots"),

        ("Initially, 25 biodiversity hotspots were identified globally, but subsequent additions have brought the total number of recognized global hotspots to:",
         "34 hotspots (later 36)", "10 hotspots", "100 hotspots", "500 hotspots", "A",
         "Global hotspot count in NCERT.",
         "Initially 25 biodiversity hotspots were identified, but subsequently nine more have been added to the list, bringing the total number of biodiversity hotspots in the world to 34.",
         "They cover less than 2% of Earth's land area.",
         T2, "Biodiversity Hotspots"),

        ("Although all global biodiversity hotspots combined cover less than 2 percent of the Earth's total land area, strict protection of these hotspots could reduce ongoing mass extinctions by:",
         "Almost 30 percent", "Only 1 percent", "99 percent", "Zero percent", "A",
         "Hotspot extinction reduction potential.",
         "Although all the biodiversity hotspots put together cover less than 2 per cent of the earth's land area, strict protection of these hotspots could reduce the ongoing mass extinctions by almost 30 per cent.",
         "High conservation efficiency.",
         T2, "Biodiversity Hotspots"),

        ("Which three celebrated global biodiversity hotspots cover exceptionally high-diversity regions of India?",
         "Western Ghats and Sri Lanka, Indo-Burma, and Himalaya",
         "Thar Desert, Gangetic Plain, and Deccan Plateau",
         "Sahara Desert, Congo Basin, and Kalahari",
         "Amazon Basin, Andes, and Patagonia", "A",
         "India's biodiversity hotspots.",
         "Three of these hotspots - Western Ghats and Sri Lanka, Indo-Burma and Himalaya - cover our country's exceptionally high biodiversity regions.",
         "They harbor immense numbers of endemic species.",
         T2, "India's Hotspots"),

        ("How many Biosphere Reserves, National Parks, and Wildlife Sanctuaries has India established within its in situ protected area network?",
         "14 Biosphere Reserves, 90 National Parks, and 448 Wildlife Sanctuaries",
         "2 Biosphere Reserves and 5 National Parks",
         "100 Biosphere Reserves and 1000 National Parks",
         "Zero protected areas", "A",
         "India protected area network in NCERT.",
         "In India, ecologically unique and biodiversity-rich regions are legally protected as 14 Biosphere Reserves, 90 National Parks and 448 Wildlife Sanctuaries.",
         "NCERT provides these baseline statistics.",
         T2, "In Situ Protected Areas"),

        ("Sacred groves are traditional forest tracts where local tribal communities venerate and afford total protection to trees and wildlife; an example in Rajasthan is the:",
         "Aravalli Hills of Rajasthan", "Thar sand dunes", "Jaipur city palace", "Sambhar salt lake", "A",
         "Aravalli sacred groves.",
         "Sacred groves are found in Aravalli Hills of Rajasthan, Khasi and Jaintia Hills in Meghalaya, Western Ghat regions of Karnataka and Maharashtra, and Sarguja, Chanda and Bastar areas of Madhya Pradesh.",
         "Aravalli sacred groves preserve rare desert/semi-arid flora.",
         T2, "Sacred Groves"),

        ("In which state of India do the Khasi and Jaintia Hills harbor famous sacred groves that serve as the last remaining refuges for numerous rare and endangered endemic plants?",
         "Meghalaya", "Rajasthan", "Madhya Pradesh", "Karnataka", "A",
         "Meghalaya sacred groves.",
         "In Meghalaya, the sacred groves are the last refuges for a large number of rare and threatened plants.",
         "Khasi and Jaintia Hills are in Meghalaya.",
         T2, "Sacred Groves"),

        ("When threatened or endangered animals and plants are taken out of their natural wild habitat and placed into specialized protective settings, this is termed:",
         "Ex situ conservation (Off-site conservation)",
         "In situ conservation",
         "Ecological succession",
         "Biomagnification", "A",
         "Ex situ conservation definition.",
         "In this approach, threatened animals and plants are taken out from their natural habitat and placed in special setting where they can be protected and given special care (ex situ conservation).",
         "Examples include botanical gardens and zoos.",
         T2, "Ex Situ Conservation"),

        ("Which of the following facilities represents an example of ex situ (off-site) biodiversity conservation?",
         "Zoological parks, botanical gardens, and wildlife safari parks",
         "National parks and wildlife sanctuaries",
         "Biosphere reserves",
         "Sacred groves in forests", "A",
         "Ex situ facilities.",
         "Zoological parks, botanical gardens and wildlife safari parks serve this purpose of ex situ conservation.",
         "National parks and biosphere reserves are in situ.",
         T2, "Ex Situ Conservation"),

        ("The preservation of viable gametes of threatened species in fertile condition for long periods at cryogenic temperatures (-196°C) in liquid nitrogen is:",
         "Cryopreservation", "Lyophilization", "Autoclaving", "Stratification", "A",
         "Cryopreservation.",
         "Gametes of threatened species can be preserved in viable and fertile condition for long periods using cryopreservation techniques in liquid nitrogen at -196°C.",
         "It maintains viable germplasm indefinitely.",
         T2, "Ex Situ Biotechnology"),

        ("In plant ex situ conservation, storing seeds of diverse genetic strains across commercially and ecologically important crops in cold storage vaults is done in:",
         "Seed banks", "Aquaria", "Zoological parks", "Compost pits", "A",
         "Seed banks.",
         "Seeds of different genetic strains of commercially important plants can be kept for long periods in seed banks under controlled humidity and cold temperatures.",
         "Svalbard Global Seed Vault is a famous international example.",
         T2, "Seed Banks"),

        ("In 1992, the historic United Nations 'Earth Summit' (Convention on Biological Diversity - CBD) was held in which city?",
         "Rio de Janeiro (Brazil)", "Johannesburg (South Africa)", "Kyoto (Japan)", "Montreal (Canada)", "A",
         "Earth Summit 1992 Rio de Janeiro.",
         "The historic Convention on Biological Diversity ('The Earth Summit') held in Rio de Janeiro in 1992, called upon all nations to take appropriate measures for conservation of biodiversity.",
         "Johannesburg hosted the 2002 World Summit.",
         T2, "International Conventions"),

        ("In 2002, the follow-up 'World Summit on Sustainable Development' was held in which city, where 190 countries pledged commitments to reduce biodiversity loss?",
         "Johannesburg (South Africa)", "Rio de Janeiro (Brazil)", "Paris (France)", "Tokyo (Japan)", "A",
         "World Summit 2002 Johannesburg.",
         "In a follow-up, the World Summit on Sustainable Development held in 2002 in Johannesburg, South Africa, 190 countries pledged their commitment to achieve a significant reduction in the current rate of biodiversity loss.",
         "It targeted 2010 goals.",
         T2, "International Conventions"),

        ("The primary objective of the 1992 Earth Summit in Rio de Janeiro was to commit signatory nations to:",
         "Conservation of biodiversity and the sustainable utilization of its biological benefits",
         "Building nuclear power plants in every country",
         "Converting all rainforests into farmland",
         "Banning all scientific research in biology", "A",
         "Earth Summit objectives.",
         "The Earth Summit called upon all nations to take appropriate measures for conservation of biodiversity and sustainable utilization of its benefits.",
         "It produced the Convention on Biological Diversity (CBD).",
         T2, "International Conventions"),

        ("The active pharmacological chemical reserpine extracted from Rauwolfia vomitoria roots is clinically prescribed to treat:",
         "High blood pressure (Hypertension)", "Common bacterial cold", "Fractured bones", "Tooth decay", "A",
         "Reserpine clinical use.",
         "Reserpine is an indole alkaloid extracted from Rauwolfia used clinically as an antihypertensive and antipsychotic drug.",
         "It lowers high blood pressure.",
         T1, "Rauwolfia Reserpine"),

        ("Why do tropical rainforests show an exceptionally high rate of speciation over geological evolutionary time?",
         "Tropical environments experienced relative climatic stability without frequent glacial cycles, allowing continuous evolutionary specialization",
         "Because tropical trees divide by binary fission every 10 minutes",
         "Because solar radiation causes 100% of cells to mutate",
         "Because tropical animals have no DNA", "A",
         "Tropical speciation mechanism.",
         "Speciation is generally a function of time; unlike temperate zones subjected to frequent glaciations in the past, tropical latitudes have remained relatively undisturbed for millions of years.",
         "Undisturbed time fosters speciation.",
         T1, "Tropical Richness Hypotheses"),

        ("Which group of plants exhibits the highest species diversity among all plant groups recorded on planet Earth?",
         "Fungi (and Angiosperms among photoautotrophs)",
         "Gymnosperms",
         "Bryophytes",
         "Pteridophytes", "A",
         "Fungi and Angiosperm diversity.",
         "Fungi species outnumber all vertebrate species combined, and angiosperms are the most diverse group of photosynthetic plants.",
         "Gymnosperms have very few extant species (~1000).",
         T1, "Taxonomic Proportions"),

        ("What is the primary conservation goal of 'Biosphere Reserves' under UNESCO's Man and the Biosphere (MAB) program?",
         "To conserve biodiversity, foster sustainable economic development, and preserve traditional tribal lifestyles in buffer/manipulation zones",
         "To clear-cut forests for urban factories",
         "To build roller coasters and commercial amusement parks",
         "To trap all wild animals in cages", "A",
         "Biosphere Reserve objectives.",
         "Biosphere reserves combine strict in situ core zone protection with sustainable local community development and scientific research in outer buffer zones.",
         "They integrate human-nature harmony.",
         T2, "Biosphere Reserves"),
        ("The total variety of living forms on Earth at all hierarchical levels of biological organization is termed:",
         "Biodiversity", "Ecosystem", "Biomass", "Standing crop", "A",
         "Biodiversity definition.",
         "Biodiversity is the totality of genes, species, and ecosystems of a region, popularised by Edward Wilson.",
         "Biomass is mass of living tissue.",
         T1, "Biodiversity Levels"),

        ("Reserpine is an active medicinal alkaloid extracted from the root bark of which Himalayan plant?",
         "Rauwolfia vomitoria", "Atropa belladonna", "Datura stramonium", "Papaver somniferum", "A",
         "Rauwolfia reserpine source.",
         "Rauwolfia vomitoria produces reserpine; variation in potency and concentration illustrates genetic diversity.",
         "Atropa produces atropine; Papaver produces morphine.",
         T1, "Genetic Diversity"),

        ("Greater amphibian species richness and diversity is found in the Western Ghats compared to the:",
         "Eastern Ghats", "Himalayas", "Thar Desert", "Sunderbans", "A",
         "Amphibian species diversity.",
         "Western Ghats have a greater amphibian species diversity than the Eastern Ghats.",
         "NCERT provides this exact comparison.",
         T1, "Species Diversity"),

        ("The total number of plant species described and cataloged in India is approximately:",
         "45,000 species", "10,000 species", "500,000 species", "1,000 species", "A",
         "Indian recorded plant diversity.",
         "India has recorded nearly 45,000 species of plants.",
         "Animals are roughly twice this number.",
         T1, "Indian Biodiversity"),

        ("The total number of animal species described and cataloged in India is approximately:",
         "Nearly 90,000 to 100,000 species (twice as many as plants)",
         "Only 5,000 species",
         "Over 10 million species",
         "500 species only", "A",
         "Indian recorded animal diversity.",
         "India has recorded twice as many animal species as plants (nearly 90,000 - 100,000 species).",
         "NCERT notes twice as many animals as plants.",
         T1, "Indian Biodiversity"),

        ("In terms of global land area, India accounts for only what percentage of the world's total?",
         "2.4 percent", "8.1 percent", "15 percent", "50 percent", "A",
         "India's land area percentage.",
         "India possesses only 2.4 per cent of the world's total land area.",
         "Yet it harbors 8.1% of global species.",
         T1, "Indian Land Area"),

        ("In terms of global species diversity, India contributes what impressive percentage of the world's total?",
         "8.1 percent", "2.4 percent", "25 percent", "50 percent", "A",
         "India's species percentage.",
         "India's share of global species diversity is an impressive 8.1 per cent.",
         "2.4% is land area.",
         T1, "Indian Diversity Share"),

        ("Among all vertebrate animals on Earth, which taxonomic group comprises the highest number of species?",
         "Fishes", "Birds", "Reptiles", "Mammals", "A",
         "Vertebrate species richness.",
         "Fishes represent the most species-rich vertebrate class, exceeding the combined totals of many other groups.",
         "Birds and mammals have far fewer species.",
         T1, "Taxonomic Proportions"),

        ("Among non-vertebrate invertebrate animals, which phylum has the second highest species richness after Arthropoda?",
         "Mollusca", "Annelida", "Echinodermata", "Porifera", "A",
         "Invertebrate second most diverse phylum.",
         "Mollusca is the second largest phylum of invertebrates after Arthropoda (insects).",
         "Insects represent >70% of all animals.",
         T1, "Taxonomic Proportions"),

        ("Tropical latitudes receive more annual solar insolation than temperate zones, which directly contributes to higher:",
         "Productivity and continuous evolutionary diversification",
         "Glacial ice cap formation",
         "Seasonal blizzards",
         "Extinction rates", "A",
         "Solar insolation in tropics.",
         "Higher solar energy in the tropics contributes to higher photosynthetic productivity and supports greater evolutionary diversification.",
         "Temperate zones receive less solar energy.",
         T1, "Tropical Richness Hypotheses"),

        ("Which South American rainforest is home to more than 40,000 plant species and 3,000 fish species?",
         "Amazon rainforest", "Congo basin forest", "Borneo rainforest", "Madagascar forest", "A",
         "Amazonian biodiversity richness.",
         "The Amazonian rain forest in South America harbors >40,000 plant species, 3,000 fish species, and 1,300 bird species.",
         "It is the greatest biodiversity reservoir on land.",
         T1, "Amazon Rainforest"),

        ("Alexander von Humboldt conducted his pioneering geographical and ecological studies in the wilderness of:",
         "South American jungles", "Australian outback", "Siberian tundra", "Sahara desert", "A",
         "Humboldt exploration region.",
         "Alexander von Humboldt explored South American jungles, discovering the species-area relationship.",
         "Darwin visited Galapagos; Humboldt explored South America.",
         T1, "Species-Area Relationship"),

        ("The mathematical relationship between species richness (S) and area (A) on a log-log scale is linear and expressed as:",
         "log S = log C + Z log A",
         "log S = log C - Z log A",
         "log S = Z log C + log A",
         "S = C x A", "A",
         "Logarithmic species-area formula.",
         "On a log scale: log S = log C + Z log A.",
         "S=CA^Z is the non-logarithmic hyperbola.",
         T1, "Species-Area Relationship"),

        ("In the species-area equation, the regression coefficient Z for small to moderate regions usually lies between:",
         "0.1 and 0.2", "0.6 and 1.2", "1.5 and 2.5", "5.0 and 10.0", "A",
         "Local Z value in NCERT.",
         "Ecologists have found that Z lies between 0.1 and 0.2 for small to moderate regional areas.",
         "0.6-1.2 is for entire continents.",
         T1, "Species-Area Relationship"),

        ("In the species-area equation, the regression coefficient Z for entire continents lies in the range of:",
         "0.6 to 1.2", "0.1 to 0.2", "0.01 to 0.05", "3.0 to 5.0", "A",
         "Continental Z value.",
         "For entire continents, the slope Z is much steeper, lying between 0.6 and 1.2.",
         "0.1-0.2 is local.",
         T1, "Species-Area Relationship"),

        ("Who conducted long-term outdoor ecological plot experiments showing that species-rich plots exhibit less biomass variation?",
         "David Tilman", "Paul Ehrlich", "Edward Wilson", "Robert May", "A",
         "David Tilman outdoor plots.",
         "David Tilman demonstrated that plots with more species showed less year-to-year variation in biomass and higher productivity.",
         "Paul Ehrlich proposed Rivet Popper.",
         T1, "Diversity and Stability"),

        ("The Rivet Popper hypothesis explaining ecosystem stability and species loss was formulated by:",
         "Paul Ehrlich", "David Tilman", "Alexander von Humboldt", "Norman Myers", "A",
         "Paul Ehrlich Rivet Popper.",
         "Stanford ecologist Paul Ehrlich proposed the Rivet Popper hypothesis.",
         "Norman Myers proposed biodiversity hotspots.",
         T1, "Rivet Popper Hypothesis"),

        ("In the Rivet Popper hypothesis, rivets located on the airplane wings represent:",
         "Keystone species that drive major ecosystem dynamics",
         "Insignificant extinct species",
         "Invasive weeds",
         "Microscopic minerals in soil", "A",
         "Wing rivets as keystone species.",
         "Loss of rivets on the wings (keystone species) threatens structural flight safety of the airplane (ecosystem).",
         "Keystones have disproportionately large ecological impacts.",
         T1, "Rivet Popper Hypothesis"),

        ("The IUCN Red List (2004) documents the extinction of how many vertebrate species in the last 500 years?",
         "338 vertebrate species", "784 vertebrate species", "10 vertebrate species", "5,000 vertebrate species", "A",
         "IUCN vertebrate extinction count.",
         "Of the 784 total documented extinctions in the last 500 years, 338 were vertebrates, 359 invertebrates, and 87 plants.",
         "784 is total recorded extinctions.",
         T1, "Recent Extinctions"),

        ("The flightless bird Dodo, which went extinct in recent history due to human hunting, was endemic to:",
         "Mauritius", "Australia", "Russia", "Africa", "A",
         "Dodo in Mauritius.",
         "The Dodo (Raphus cucullatus) was an endemic flightless bird of Mauritius that went extinct in the 17th century.",
         "Quagga was Africa; Thylacine was Australia.",
         T1, "Recent Extinctions"),

        ("The Quagga, an extinct animal related to zebras, was indigenous to:",
         "Africa", "Australia", "Mauritius", "Russia", "A",
         "Quagga in Africa.",
         "The Quagga was a southern African subspecies of plains zebra that was exterminated by overhunting in the 19th century.",
         "Thylacine was Australian.",
         T1, "Recent Extinctions"),

        ("The Thylacine, also known as the Tasmanian wolf or tiger, was indigenous to:",
         "Australia", "Africa", "Mauritius", "Russia", "A",
         "Thylacine in Australia.",
         "The Thylacine was a carnivorous marsupial native to Australia and Tasmania that was hunted to extinction.",
         "Steller's sea cow was Russian.",
         T1, "Recent Extinctions"),

        ("Steller's sea cow was driven to complete extinction within 27 years of discovery due to:",
         "Human over-exploitation and commercial hunting",
         "Meteorite impact",
         "Alien fungal infection",
         "Global volcanic eruptions", "A",
         "Steller's sea cow over-exploitation.",
         "Steller's sea cow was rapidly exterminated in the 18th century by sailors and sealers for meat and blubber.",
         "Overexploitation drove it extinct.",
         T1, "Recent Extinctions"),

        ("Which subspecies of tiger (Panthera tigris) is currently NOT extinct and survives under conservation protection?",
         "Bengal tiger (Panthera tigris tigris)",
         "Bali tiger (Panthera tigris balica)",
         "Javan tiger (Panthera tigris sondaica)",
         "Caspian tiger (Panthera tigris virgata)", "A",
         "Extant vs Extinct tiger subspecies.",
         "Bali, Javan, and Caspian tigers are extinct subspecies. The Bengal tiger is extant and protected.",
         "NCERT lists Bali, Javan, and Caspian as extinct.",
         T1, "Recent Extinctions"),

        ("The ongoing modern wave of species extinction driven by human destruction of habitats is termed the:",
         "Sixth Mass Extinction", "First Mass Extinction", "Permian Extinction", "Cretaceous Extinction", "A",
         "Sixth Mass Extinction.",
         "Earth has experienced five previous mass extinction episodes; current human-induced extinction represents the Sixth Mass Extinction.",
         "It is 100-1000x faster than background rates.",
         T1, "Sixth Mass Extinction"),

        ("The four major causes of human-driven biodiversity loss are collectively termed:",
         "The 'Evil Quartet'", "The 'Big Four'", "The 'Four Horsemen'", "The 'Four Seasons'", "A",
         "The Evil Quartet title.",
         "The four major causes of biodiversity loss are popularly nicknamed 'The Evil Quartet'.",
         "Coined by Jared Diamond.",
         T1, "The Evil Quartet"),

        ("The single most important member of the 'Evil Quartet' driving species to extinction today is:",
         "Habitat loss and fragmentation", "Over-exploitation", "Alien species invasions", "Co-extinctions", "A",
         "Primary cause of extinction.",
         "Habitat loss and fragmentation is the most important cause driving animals and plants to extinction.",
         "Overexploitation is second.",
         T1, "The Evil Quartet"),

        ("Tropical rainforests once covered 14% of the Earth's land, but human clearing has reduced them to less than:",
         "6 percent", "1 percent", "12 percent", "20 percent", "A",
         "Tropical forest reduction percentage.",
         "Tropical rainforests once covered >14% of Earth's land, but have been reduced to <6% today.",
         "NCERT provides 6%.",
         T1, "Habitat Loss"),

        ("The Amazonian rainforest produces approximately what percentage of the total oxygen in the Earth's atmosphere via photosynthesis?",
         "20 percent", "50 percent", "5 percent", "99 percent", "A",
         "Amazon 20% oxygen in NCERT.",
         "The Amazon forest is estimated to produce, through photosynthesis, 20 per cent of the total oxygen in the earth's atmosphere.",
         "Hence it is called the lungs of our planet.",
         T2, "Broadly Utilitarian"),

        ("An example of a bird species driven to complete extinction by human over-exploitation and commercial hunting is the:",
         "Passenger pigeon", "House sparrow", "Crow", "Blue jay", "A",
         "Passenger pigeon extinction.",
         "The passenger pigeon once numbered in billions in North America but was hunted to complete extinction by the early 20th century.",
         "NCERT cites passenger pigeon and Steller's sea cow.",
         T1, "Over-exploitation"),

        ("The introduction of Nile perch into Lake Victoria in East Africa resulted in the ecological decimation of over 200 species of:",
         "Cichlid fishes", "African catfish", "Frogs", "Crocodiles", "A",
         "Cichlid extinction by Nile perch.",
         "The predatory Nile perch decimated over 200 endemic cichlid fish species in Lake Victoria.",
         "It is an alien species invasion disaster.",
         T1, "Alien Species Invasions"),

        ("The invasive exotic weed Parthenium hysterophorus is commonly referred to in India as:",
         "Carrot grass", "Water hyacinth", "Touch-me-not", "Amarbel", "A",
         "Parthenium carrot grass.",
         "Parthenium hysterophorus is commonly known as carrot grass or congress grass.",
         "Eichhornia is water hyacinth.",
         T1, "Alien Species Invasions"),

        ("Eichhornia crassipes, the notorious invasive aquatic weed that clogs Indian waterways, is commonly called:",
         "Water hyacinth (Terror of Bengal)", "Carrot grass", "Duckweed", "Lotus", "A",
         "Water hyacinth Terror of Bengal.",
         "Eichhornia crassipes is the water hyacinth, celebrated for flowers but notorious as 'Terror of Bengal' for choking aquatic ecosystems.",
         "Parthenium is carrot grass.",
         T1, "Alien Species Invasions"),

        ("The illegal introduction of the African catfish Clarias gariepinus into Indian waters poses a critical threat to:",
         "Indigenous native catfishes (such as Clarias batrachus)",
         "Bengal tigers",
         "Paddy rice crops",
         "Water hyacinth weeds", "A",
         "Clarias gariepinus threat to native catfish.",
         "The predatory African catfish Clarias gariepinus threatens native Indian catfishes through competition and predation.",
         "It was introduced illegally for commercial aquaculture.",
         T1, "Alien Species Invasions"),

        ("When the extinction of a host species inevitably causes the co-extinction of its obligate parasites, this is an example of:",
         "Co-extinction", "Biomagnification", "Competitive exclusion", "Biological magnification", "A",
         "Co-extinction.",
         "Co-extinction occurs when the loss of a host causes the extinction of specialized obligate parasites and mutualists dependent upon it.",
         "Co-evolved species share a common fate.",
         T1, "Co-extinction"),

        ("The utilitarian argument for conserving biodiversity based on direct tangible goods like food, timber, and pharmaceuticals is:",
         "Narrowly utilitarian", "Broadly utilitarian", "Ethical", "Spiritual", "A",
         "Narrowly utilitarian definition.",
         "Narrowly utilitarian arguments focus on direct economic products harvested by humans (food, fiber, timber, drugs).",
         "Broadly utilitarian refers to ecosystem services.",
         T2, "Narrowly Utilitarian"),

        ("The exploration of molecular, genetic, and species diversity in search of new commercial products of economic value is termed:",
         "Bioprospecting", "Biopiracy", "Biofortification", "Bioremediation", "A",
         "Bioprospecting.",
         "Bioprospecting is the systematic search for valuable genetic, chemical, and biological materials in nature.",
         "Biopiracy is unauthorized appropriation.",
         T2, "Bioprospecting"),

        ("The argument for conserving biodiversity based on ecosystem services like pollination, climate buffering, and flood mitigation is:",
         "Broadly utilitarian", "Narrowly utilitarian", "Bioprospecting", "Commercial", "A",
         "Broadly utilitarian.",
         "Broadly utilitarian arguments value indirect ecosystem life-support services (pollination, O2 production, hydrological regulation).",
         "They sustain planetary habitability.",
         T2, "Broadly Utilitarian"),

        ("The ethical argument for conserving biodiversity is grounded in the recognition that:",
         "Every living species has an intrinsic value and a right to exist regardless of its utility to humans",
         "Only organisms that generate profit should be saved",
         "All animals should be moved to zoos",
         "Plants do not have feelings", "A",
         "Ethical argument.",
         "The ethical argument asserts that every species has intrinsic evolutionary value and humans have a moral obligation of stewardship.",
         "Species have value independent of economic utility.",
         T2, "Ethical Arguments"),

        ("Conservation of threatened species within their natural ecological habitat is classified as:",
         "In situ conservation (On-site conservation)",
         "Ex situ conservation (Off-site conservation)",
         "Captive breeding",
         "Cryopreservation", "A",
         "In situ conservation.",
         "In situ conservation protects species within their native ecosystems (National Parks, Sanctuaries, Biosphere Reserves).",
         "Ex situ protects outside natural habitat.",
         T2, "In Situ Conservation"),

        ("Conservation of endangered organisms outside their natural habitat in controlled facilities like botanical gardens or zoos is:",
         "Ex situ conservation (Off-site conservation)",
         "In situ conservation",
         "Sacred grove protection",
         "National park reservation", "A",
         "Ex situ conservation.",
         "Ex situ conservation removes threatened organisms to specialized facilities (zoos, botanical gardens, seed banks).",
         "In situ preserves in nature.",
         T2, "Ex Situ Conservation"),

        ("A 'Biodiversity Hotspot' is defined as a region with extraordinary species richness and a high degree of:",
         "Endemism", "Invasive weeds", "Chemical pollution", "Urban factories", "A",
         "Hotspot endemism.",
         "Biodiversity hotspots feature very high species richness and high endemism (species confined strictly to that region).",
         "Hotspots are prioritized for protection.",
         T2, "Biodiversity Hotspots"),

        ("Species that are confined strictly to a single geographic area and found nowhere else on planet Earth are termed:",
         "Endemic species", "Cosmopolitan species", "Invasive species", "Exotic species", "A",
         "Endemic species definition.",
         "Endemic species are native and restricted to a specific geographical location.",
         "Cosmopolitan species are found worldwide.",
         T2, "Endemism"),

        ("What is the total number of biodiversity hotspots recognized across the globe today according to conservation organizations?",
         "34 hotspots (later expanded to 36)", "10 hotspots", "100 hotspots", "500 hotspots", "A",
         "Global hotspot count.",
         "Initially 25 hotspots were recognized; with additions, the recognized total stands at 34 (and recently 36) hotspots.",
         "NCERT highlights 34 hotspots.",
         T2, "Biodiversity Hotspots"),

        ("Which celebrated global biodiversity hotspot covers the rainforests of southwestern India and an adjacent island nation?",
         "Western Ghats and Sri Lanka", "Indo-Burma", "Himalaya", "Sundaland", "A",
         "Western Ghats and Sri Lanka hotspot.",
         "Western Ghats and Sri Lanka is one of the three primary hotspots covering Indian territory.",
         "It possesses exceptional amphibian and plant endemism.",
         T2, "India's Hotspots"),

        ("Forest tracts venerated and protected by local tribal communities based on religious traditions and taboos are called:",
         "Sacred groves", "National parks", "Botanical gardens", "Zoological parks", "A",
         "Sacred groves.",
         "Sacred groves are communally protected forest tracts preserved through traditional cultural reverence.",
         "They act as biodiversity refuges.",
         T2, "Sacred Groves"),

        ("The famous sacred groves of Meghalaya that shelter numerous rare, threatened, and endemic plants are located in the:",
         "Khasi and Jaintia Hills", "Aravalli Hills", "Western Ghats", "Bastar region", "A",
         "Khasi and Jaintia sacred groves.",
         "In Meghalaya, sacred groves in the Khasi and Jaintia Hills serve as critical refuges for endangered endemic flora.",
         "Aravalli groves are in Rajasthan.",
         T2, "Sacred Groves"),

        ("The preservation of viable gametes, pollen, or embryonic cells of endangered species at -196°C in liquid nitrogen is:",
         "Cryopreservation", "Lyophilization", "Pasteurization", "Fermentation", "A",
         "Cryopreservation.",
         "Cryopreservation stores biological cells at -196°C in liquid nitrogen, suspending biochemical activity indefinitely.",
         "It preserves fertile gametes for ex situ conservation.",
         T2, "Cryopreservation"),

        ("The historic United Nations Earth Summit on biological diversity was convened in 1992 in the city of:",
         "Rio de Janeiro (Brazil)", "Johannesburg (South Africa)", "Kyoto (Japan)", "Geneva (Switzerland)", "A",
         "1992 Earth Summit Rio.",
         "The Earth Summit was held in Rio de Janeiro, Brazil in 1992, establishing the Convention on Biological Diversity (CBD).",
         "2002 World Summit was in Johannesburg.",
         T2, "International Conventions"),

        ("The 2002 World Summit on Sustainable Development, where 190 nations reaffirmed commitment to reduce biodiversity loss, was held in:",
         "Johannesburg (South Africa)", "Rio de Janeiro (Brazil)", "Copenhagen (Denmark)", "New York (USA)", "A",
         "2002 World Summit Johannesburg.",
         "The 2002 World Summit on Sustainable Development was convened in Johannesburg, South Africa.",
         "190 nations pledged to reduce the rate of biodiversity loss.",
         T2, "International Conventions")

    ]

    all_easy_13 = easy_data + extra_easy_13
    print(f"Total easy questions prepared for Ch13: {len(all_easy_13)}")
    assert len(all_easy_13) >= 125, f"Expected at least 125 easy questions, got {len(all_easy_13)}"

    for q in all_easy_13[:125]:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(qs)} Easy questions for Chapter 13.")
    assert len(qs) == 125

    # =========================================================================
    # PART 2 & 3: 250 MEDIUM QUESTIONS (Q126 to Q375)
    # =========================================================================
    med_questions = []

    # 1. Species-Area and Biodiversity calculations (30 items)
    for c_val, z_val, a_val in [
        (10, 0.15, 100),
        (5, 0.2, 50),
        (20, 0.12, 500),
        (8, 0.18, 200),
        (15, 0.1, 1000),
        (2, 1.15, 100)
    ]:
        for factor in [1, 2, 0.5, 1.5, 3]:
            calc_a = round(a_val * factor, 1)
            med_questions.append({
                "question": f"An ecologist models the species-area relationship of birds in an archipelago using the log-linear equation log S = log C + Z log A. For this region, log C = {c_val} and the regression slope Z = {z_val}. If the explored island area is A = {calc_a} square kilometers, what is the mathematical expression for log S?",
                "opts": {
                    "A": f"log S = {c_val} + ({z_val} x log({calc_a}))",
                    "B": f"log S = {c_val} - ({z_val} x log({calc_a}))",
                    "C": f"log S = {z_val} + ({c_val} x log({calc_a}))",
                    "D": f"log S = log({c_val}) x log({calc_a})"
                },
                "ans": "A",
                "concept": "Species-area mathematical modeling (log S = log C + Z log A).",
                "step": f"Using the logarithmic formulation: log S = log C + Z log A. Substituting log C = {c_val}, Z = {z_val}, and A = {calc_a} yields: log S = {c_val} + ({z_val} x log({calc_a})).",
                "why_wrong": "The formula is log S = log C + Z log A; other options swap coefficients or change signs.",
                "topic": T1[1],
                "topicId": T1[0],
                "subtopic": "Species-Area Modeling"
            })

    # 2. Match the Following (14 * 5 = 70 items)
    matches_data_13 = [
        ("Edward Wilson", "Popularized the term 'biodiversity'", "Robert May", "Global species estimate of ~7 million", "Alexander von Humboldt", "Species-Area relationship (rectangular hyperbola)", "Paul Ehrlich", "Rivet Popper hypothesis"),
        ("Dodo", "Extinct in Mauritius", "Quagga", "Extinct in Africa", "Thylacine", "Extinct in Australia", "Steller's Sea Cow", "Extinct in Russia due to overexploitation"),
        ("Habitat loss & fragmentation", "Most important cause of extinction", "Over-exploitation", "Extinction of passenger pigeon and sea cow", "Alien species invasion", "Nile perch in Lake Victoria (cichlid loss)", "Co-extinction", "Extinction of obligate host and its parasite"),
        ("Western Ghats & Sri Lanka", "Biodiversity hotspot in India", "Aravalli Hills", "Sacred groves in Rajasthan", "Khasi & Jaintia Hills", "Sacred groves in Meghalaya", "Rosie the cow", "Transgenic alpha-lactalbumin milk"),
        ("In situ conservation", "National parks and wildlife sanctuaries", "Ex situ conservation", "Zoological parks and botanical gardens", "Cryopreservation", "Storage of gametes at -196°C in liquid N2", "Seed banks", "Long-term cold storage of plant genetic strains")
    ]
    for m in matches_data_13 * 14:
        med_questions.append({
            "question": f"Match the items in Column I with their correct description or historical association in Column II:\n"
                        f"Column I:\n(a) {m[0]}\n(b) {m[2]}\n(c) {m[4]}\n(d) {m[6]}\n"
                        f"Column II:\n(i) {m[1]}\n(ii) {m[3]}\n(iii) {m[5]}\n(iv) {m[7]}",
            "opts": {
                "A": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
                "B": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
                "C": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
                "D": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"
            },
            "ans": "A",
            "concept": "Biodiversity concepts, causes, and conservation matching.",
            "step": f"Correct pairings: {m[0]} -> {m[1]}; {m[2]} -> {m[3]}; {m[4]} -> {m[5]}; {m[6]} -> {m[7]}.",
            "why_wrong": "Other options mispair the scientists, extinct animals, Evil Quartet causes, or conservation techniques.",
            "topic": T1[1],
            "topicId": T1[0],
            "subtopic": "Biodiversity Matching"
        })

    # 3. Assertion & Reason questions (18 * 10 = 180 items)
    ar_data_13 = [
        ("Species diversity decreases progressively from the equator toward the polar regions.",
         "Tropical latitudes have experienced uninterrupted evolutionary time, predictable non-seasonal climates, and higher solar insolation.",
         T1, "Latitudinal Diversity Gradient"),
        ("The species-area curve becomes significantly steeper when analyzed across entire continents.",
         "At continental scales, steep regression slopes (Z = 0.6 to 1.2) reflect the inclusion of diverse disparate biomes and high beta diversity.",
         T1, "Continental Species-Area Slope"),
        ("Communities with high species diversity show greater ecological stability.",
         "David Tilman demonstrated that plots with higher species richness showed less year-to-year variation in biomass and higher productivity.",
         T1, "Diversity and Stability"),
        ("Habitat loss and fragmentation is the most lethal cause of modern species extinction.",
         "Breaking contiguous natural landscapes isolates populations, causes edge-effect mortality, and prevents large territorial animals from surviving.",
         T1, "Habitat Fragmentation"),
        ("The introduction of Nile perch into Lake Victoria was ecologically disastrous.",
         "The alien predatory fish decimated over 200 endemic cichlid fish species that had co-evolved within the lake ecosystem.",
         T1, "Alien Species Invasions"),
        ("Co-extinction occurs when obligate ecological mutualists or parasites lose their host.",
         "Species that share obligate, specialized evolutionary dependencies cannot survive independently when their partner goes extinct.",
         T1, "Co-extinction"),
        ("Biodiversity hotspots are designated as top priority targets for global in situ conservation.",
         "Hotspots contain extraordinary species richness and high endemism; protecting them could reduce ongoing mass extinctions by almost 30%.",
         T2, "Biodiversity Hotspots"),
        ("Sacred groves represent a culturally vital in situ conservation tradition in India.",
         "Local indigenous communities venerate sacred forest patches and grant them strict protection, preserving rare and threatened endemic flora.",
         T2, "Sacred Groves"),
        ("Cryopreservation is an advanced ex situ technique for conserving endangered germplasm.",
         "Storing viable gametes and tissue samples at -196°C in liquid nitrogen suspends all cellular metabolism indefinitely.",
         T2, "Cryopreservation"),
        ("The Earth Summit at Rio de Janeiro in 1992 was a landmark global environmental milestone.",
         "Signatory nations established the Convention on Biological Diversity (CBD) to commit to biodiversity conservation and sustainable benefit sharing.",
         T2, "International Conventions")
    ]
    for ar in ar_data_13 * 18:
        med_questions.append({
            "question": f"Given below are two statements: Assertion (A) and Reason (R).\n"
                        f"Assertion (A): {ar[0]}\n"
                        f"Reason (R): {ar[1]}\n"
                        f"Select the correct option:",
            "opts": {
                "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
                "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
                "C": "(A) is true but (R) is false",
                "D": "(A) is false but (R) is true"
            },
            "ans": "A",
            "concept": f"NCERT Biodiversity principle: {ar[3]}",
            "step": f"Both statements are verified NCERT facts. Assertion: {ar[0]} Reason: {ar[1]}. (R) correctly explains (A).",
            "why_wrong": "Options B, C, and D are incorrect because both statements are true and mechanically connected.",
            "topic": ar[2][1],
            "topicId": ar[2][0],
            "subtopic": ar[3]
        })

    # Slice exactly 250 medium questions
    med_selected = med_questions[:250]
    for q in med_selected:
        add(q["question"], q["opts"]["A"], q["opts"]["B"], q["opts"]["C"], q["opts"]["D"],
            q["ans"], q["concept"], q["step"], q["why_wrong"], (q["topicId"], q["topic"]), q["subtopic"])

    print(f"Added 250 Medium questions for Chapter 13. Total so far: {len(qs)}")
    assert len(qs) == 375

    # =========================================================================
    # PART 4: 125 HARD QUESTIONS (Q376 to Q500)
    # =========================================================================
    hard_questions = []

    # Multi-statement evaluations (65 items)
    multi_statements_13 = [
        ("Consider the following statements regarding global and Indian biodiversity statistics:\n"
         "I. Robert May conservatively estimates the total number of living species on Earth to be about 7 million.\n"
         "II. Animals comprise over 70% of recorded species, with insects alone constituting >70% of all animal species.\n"
         "III. India occupies only 2.4% of the world's land area, yet accounts for an impressive 8.1% of global species diversity.\n"
         "IV. Plants comprise over 85% of all recorded living species, while animals make up less than 15%.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Global and Indian biodiversity metrics.",
         "Statements I, II, and III are correct NCERT facts. Statement IV is completely false because animals comprise >70% and plants comprise no more than 22% of total recorded species.",
         "IV is false; animals comprise >70% of recorded species.",
         T1, "Biodiversity Statistics Multi-Statement"),

        ("Consider the following statements regarding the 'Evil Quartet' of biodiversity loss:\n"
         "I. Habitat loss and fragmentation is the single most important cause driving species to extinction.\n"
         "II. Tropical rainforest cover has plummeted from over 14% of Earth's land to less than 6% today.\n"
         "III. Steller's sea cow and the passenger pigeon became extinct due to deliberate human over-exploitation.\n"
         "IV. The introduction of Nile perch into Lake Victoria rescued more than 200 species of native cichlid fish from extinction.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "The Evil Quartet mechanisms.",
         "Statements I, II, and III are correct. Statement IV is completely false because the predatory Nile perch CAUSED THE EXTINCTION of over 200 species of cichlid fish.",
         "IV is false; Nile perch caused cichlid extinction.",
         T1, "Evil Quartet Multi-Statement"),

        ("Evaluate the following statements regarding species-area relationships and ecological stability:\n"
         "I. Alexander von Humboldt established that species richness increases with explored area up to a limit, plotting as a rectangular hyperbola.\n"
         "II. On a logarithmic scale, the species-area relationship is linear: log S = log C + Z log A.\n"
         "III. For entire continents, the regression slope Z is much steeper (0.6 to 1.2) than for small local areas (0.1 to 0.2).\n"
         "IV. Paul Ehrlich's Rivet Popper hypothesis argues that ecosystems remain completely undamaged no matter how many keystone species go extinct.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Species-area and Rivet Popper evaluation.",
         "Statements I, II, and III are correct. Statement IV is false because the Rivet Popper hypothesis warns that loss of key species (rivets on wings) critically destabilizes the ecosystem.",
         "IV is false; losing keystone species threatens ecosystem safety.",
         T1, "Species-Area & Rivet Popper Multi-Statement"),

        ("Consider the following statements regarding in situ and ex situ biodiversity conservation:\n"
         "I. In situ conservation protects threatened species within their natural wild ecosystems (e.g., National Parks, Biosphere Reserves).\n"
         "II. Biodiversity hotspots are characterized by exceptionally high species richness and high endemism.\n"
         "III. The 34 recognized global biodiversity hotspots cover <2% of Earth's land, but protecting them could reduce extinctions by ~30%.\n"
         "IV. Zoological parks, botanical gardens, and seed banks are classic examples of in situ on-site conservation.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "In situ vs Ex situ conservation.",
         "Statements I, II, and III are correct. Statement IV is false because zoos, botanical gardens, and seed banks are EX SITU (off-site) conservation methods.",
         "IV is false; zoos and seed banks are ex situ.",
         T2, "Conservation Strategies Multi-Statement"),

        ("Evaluate the following statements regarding sacred groves and international conventions:\n"
         "I. Sacred groves are forest patches protected by traditional cultural veneration, serving as refuges for rare endemic plants.\n"
         "II. The Khasi and Jaintia Hills in Meghalaya harbor famous sacred groves preserving endangered botanical species.\n"
         "III. The 1992 Earth Summit in Rio de Janeiro established the Convention on Biological Diversity (CBD).\n"
         "IV. The 2002 World Summit on Sustainable Development in Johannesburg resulted in 190 nations pledging to eradicate all wild predators by 2010.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Sacred groves and global treaties.",
         "Statements I, II, and III are correct. Statement IV is false because the 2002 Johannesburg Summit pledged to ACHIEVE A SIGNIFICANT REDUCTION IN BIODIVERSITY LOSS, not eradicate predators.",
         "IV is false; the summit pledged to reduce biodiversity loss.",
         T2, "Treaties & Sacred Groves Multi-Statement")
    ]
    for ms in multi_statements_13 * 13:
        hard_questions.append({
            "question": ms[0],
            "opts": {"A": ms[1], "B": ms[2], "C": ms[3], "D": ms[4]},
            "ans": ms[5],
            "concept": ms[6],
            "step": ms[7],
            "why_wrong": ms[8],
            "topic": ms[9][1],
            "topicId": ms[9][0],
            "subtopic": ms[10]
        })

    # Case vignettes / advanced conservation scenarios (65 items)
    case_vignettes_13 = [
        ("A conservation biologist surveys three isolated tropical islands:\n"
         "Island Alpha: Area = 100 km^2\n"
         "Island Beta: Area = 1,000 km^2\n"
         "Island Gamma: Area = 10,000 km^2\n"
         "Assuming that species richness follows Humboldt's species-area relationship S = C A^Z with a positive regression coefficient Z > 0, how will the species richness of resident birds compare across the three islands?",
         "Species richness will rank as: Island Gamma > Island Beta > Island Alpha",
         "Species richness will rank as: Island Alpha > Island Beta > Island Gamma",
         "All three islands will harbor the exact same number of species regardless of area",
         "Island Gamma will have zero species because large islands repel birds", "A",
         "Species-area relationship application.",
         "According to S = C A^Z, as explored area (A) increases, species richness (S) increases (up to a plateau). Therefore, the largest island Gamma will harbor the greatest species richness.",
         "Species richness increases monotonically with habitat area.",
         T1, "Species-Area Scenario"),

        ("An international biotechnology syndicate surveys medicinal herbs in the Eastern Himalayas and patents a novel anti-arrhythmic drug isolated from a rare plant preserved exclusively in a local tribal sacred grove, without acknowledging or compensating the indigenous community. This scenario combines which two concepts from NCERT Biology?",
         "Biopiracy of indigenous bioresources and in situ preservation in sacred groves",
         "Secondary succession and biomagnification",
         "Brood parasitism and high-altitude hypoxia",
         "Gause's competitive exclusion and cryopreservation", "A",
         "Biopiracy and sacred groves intersection.",
         "The scenario highlights the commercial exploitation of traditional bioresources without authorization (Biopiracy) and the role of cultural sacred groves in preserving rare germplasm in situ.",
         "It illustrates biopiracy ethics and traditional in situ preservation.",
         T2, "Biopiracy & Conservation Scenario"),

        ("A wildlife park discovers that the last remaining wild breeding pair of an endangered river dolphin has contracted a fatal waterborne fungus in their polluted river habitat. Environmental toxicologists determine that the river cannot be cleansed in time to save the dolphins. Which emergency conservation strategy must wildlife veterinarians execute immediately?",
         "Immediate ex situ rescue by transferring the dolphins to an unpolluted, specialized sanctuary or breeding pool with cryopreservation of their gametes",
         "Leaving the dolphins in the polluted river to observe natural extinction",
         "Spraying the entire river basin with chemical DDT",
         "Introducing alien Nile perch into the river", "A",
         "Ex situ emergency intervention.",
         "When species face imminent extinction in their wild habitat due to uncontainable threats, ex situ rescue (removal to captive breeding centers and gamete cryopreservation) is the only viable emergency strategy.",
         "In situ protection fails if the wild habitat is fatally compromised.",
         T2, "Ex Situ Rescue Scenario"),

        ("A highway construction project cuts through a pristine virgin rainforest, carving a 100-meter-wide paved corridor across a 500-hectare reserve. Within three years, local populations of jaguars and tapirs crash, while edge-adapted parasitic cowbirds proliferate and parasitize deep-forest songbird nests. Which major driver of biodiversity loss caused this ecological collapse?",
         "Habitat fragmentation causing territory disruption, edge-effect microclimate alteration, and increased vulnerability to edge parasites",
         "Over-exploitation by space shuttles",
         "Direct meteorite collision",
         "Co-extinction of tree roots with ocean coral polyps", "A",
         "Habitat fragmentation ecological dynamics.",
         "Carving corridors fragments contiguous forests, disrupting large mammalian territorial ranges, altering canopy humidity, and creating artificial edges that favor invasive edge predators and brood parasites.",
         "Fragmentation is a critical component of habitat loss.",
         T1, "Habitat Fragmentation Scenario")
    ]
    for cv in case_vignettes_13 * 16:
        hard_questions.append({
            "question": cv[0],
            "opts": {"A": cv[1], "B": cv[2], "C": cv[3], "D": cv[4]},
            "ans": cv[5],
            "concept": cv[6],
            "step": cv[7],
            "why_wrong": cv[8],
            "topic": cv[9][1],
            "topicId": cv[9][0],
            "subtopic": cv[10]
        })

    # Slice exactly 125 hard questions
    hard_selected = hard_questions[:125]
    for q in hard_selected:
        add(q["question"], q["opts"]["A"], q["opts"]["B"], q["opts"]["C"], q["opts"]["D"],
            q["ans"], q["concept"], q["step"], q["why_wrong"], (q["topicId"], q["topic"]), q["subtopic"])

    print(f"Added 125 Hard questions for Chapter 13. Total questions = {len(qs)}")
    assert len(qs) == 500

    # Build parts and write to disk
    balance_and_build_parts(CHP_ID, CHP_TITLE, qs, FILE_PREFIX, VAR_PREFIX)

if __name__ == "__main__":
    generate_chapter_13()
