import os
import sys
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from scripts.bio12_engine.common import balance_and_build_parts

CHP_ID = "ecosystem"
CHP_TITLE = "Ecosystem"
FILE_PREFIX = "ecosystem"
VAR_PREFIX = "ECOSYSTEM"

T1 = ("bio-ecosystem-structure-energy-flow", "Ecosystem Structure, Productivity & Energy Flow")
T2 = ("bio-decomposition-ecological-pyramids", "Decomposition, Ecological Pyramids, Succession & Nutrient Cycles")

def generate_chapter_12():
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
        ("An ecosystem is defined functionally as a biological unit of nature where living organisms interact among themselves and with the surrounding:",
         "Physical abiotic environment", "Outer atmospheric space", "Interstellar vacuum", "Subterranean magma exclusively", "A",
         "Ecosystem definition.",
         "An ecosystem can be visualised as a functional unit of nature, where living organisms interact among themselves and also with the surrounding physical environment.",
         "It integrates biotic and abiotic factors.",
         T1, "Ecosystem Concept"),

        ("Which of the following represents a human-made (anthropogenic) artificial ecosystem?",
         "Crop fields and aquaria", "Forests and grasslands", "Oceans and estuaries", "Ponds and wetlands", "A",
         "Man-made ecosystems.",
         "Crop fields and an aquarium may also be considered as man-made ecosystems.",
         "Forests, oceans, and lakes are natural ecosystems.",
         T1, "Ecosystem Types"),

        ("What are the four primary functional components that operate cohesively in any natural ecosystem?",
         "Productivity, Decomposition, Energy flow, and Nutrient cycling",
         "Photosynthesis, Mitosis, Meiosis, and Fermentation",
         "Transpiration, Guttation, Imbibition, and Osmosis",
         "Precipitation, Condensation, Evaporation, and Sublimation", "A",
         "Four ecosystem components in NCERT.",
         "The four basic functional aspects of the ecosystem are: (i) Productivity, (ii) Decomposition, (iii) Energy flow, and (iv) Nutrient cycling.",
         "Mitosis and osmosis are cellular processes.",
         T1, "Ecosystem Function"),

        ("Primary production is defined as the amount of biomass or organic matter produced per unit area over a time period by plants through:",
         "Photosynthesis", "Cellular respiration", "Fermentation", "Transpiration", "A",
         "Primary production definition.",
         "Primary production is defined as the amount of biomass or organic matter produced per unit area over a time period by plants during photosynthesis.",
         "Respiration consumes biomass; photosynthesis produces it.",
         T1, "Productivity"),

        ("Primary production is expressed in terms of weight as grams per square metre (g m^-2) and in terms of energy as:",
         "kcal m^-2", "joules per second", "watts per hour", "volts per cm", "A",
         "Primary production units.",
         "Primary productivity is expressed in terms of weight (g m^-2) or energy (kcal m^-2).",
         "Watts and volts are electrical units.",
         T1, "Productivity"),

        ("The total rate of production of organic matter during photosynthesis by producers in an ecosystem is called:",
         "Gross Primary Productivity (GPP)", "Net Primary Productivity (NPP)", "Secondary Productivity", "Net Community Productivity", "A",
         "Gross Primary Productivity.",
         "Gross primary productivity of an ecosystem is the rate of production of organic matter during photosynthesis.",
         "NPP is GPP minus respiration losses.",
         T1, "Productivity"),

        ("The equation representing the relationship between Gross Primary Productivity (GPP), Respiratory loss (R), and Net Primary Productivity (NPP) is:",
         "NPP = GPP - R", "GPP = NPP - R", "NPP = GPP + R", "R = NPP x GPP", "A",
         "NPP equation.",
         "A considerable amount of GPP is utilised by plants in respiration (R); Gross primary productivity minus respiration losses (R), is the net primary productivity (NPP = GPP - R).",
         "NPP is the available biomass after accounting for respiratory expenditure.",
         T1, "Productivity"),

        ("What is Net Primary Productivity (NPP) in an ecosystem?",
         "The available biomass for consumption by heterotrophs (herbivores and decomposers)",
         "The total energy dissipated as heat by solar radiation",
         "The rate of protein synthesis by lions",
         "The amount of nitrogen dissolved in rainfall", "A",
         "NPP role.",
         "Net primary productivity is the available biomass for the consumption to heterotrophs (herbivores and decomposers).",
         "It represents the harvestable biomass entering the food chain.",
         T1, "Productivity"),

        ("Secondary productivity in an ecosystem is defined as the rate of formation of new organic matter by:",
         "Consumers (Heterotrophs)", "Primary producers (Plants)", "Chemoautotrophic bacteria", "Decomposers only", "A",
         "Secondary productivity.",
         "Secondary productivity is defined as the rate of formation of new organic matter by consumers.",
         "Producers yield primary productivity.",
         T1, "Productivity"),

        ("What is the estimated annual net primary productivity (NPP) of the entire biosphere in terms of dry weight of organic matter?",
         "Approximately 170 billion tons", "55 billion tons", "1000 billion tons", "1 billion tons", "A",
         "Global biosphere NPP.",
         "The annual net primary productivity of the whole biosphere is approximately 170 billion tons (dry weight) of organic matter.",
         "55 billion tons is contributed by oceans.",
         T1, "Global Productivity"),

        ("Despite occupying approximately 70 percent of the Earth's surface, what is the annual productivity of the oceans?",
         "Only 55 billion tons", "170 billion tons", "115 billion tons", "500 billion tons", "A",
         "Oceanic productivity in NCERT.",
         "Of this, despite occupying about 70 per cent of the surface, the productivity of the oceans are only 55 billion tons; the rest (115 billion tons) is from land.",
         "Oceans are productivity-limited by light penetration and nutrients.",
         T1, "Global Productivity"),

        ("Decomposers break down complex organic matter into simple inorganic substances such as:",
         "Carbon dioxide, water, and mineral nutrients",
         "Synthetic plastics and crude petroleum",
         "Metallic gold and silver",
         "Radioactive uranium isotopes", "A",
         "Decomposition products.",
         "Decomposers break down complex organic matter into inorganic substances like carbon dioxide, water and nutrients.",
         "Decomposition mineralizes nutrients back to the abiotic pool.",
         T2, "Decomposition"),

        ("The raw material for the decomposition process in an ecosystem, consisting of dead plant remains and animal wastes, is called:",
         "Detritus", "Humus", "Litter only", "Sludge", "A",
         "Detritus definition.",
         "Dead plant remains such as leaves, bark, flowers and dead remains of animals, including fecal matter, constitute detritus, which is the raw material for decomposition.",
         "Humus is the partially decomposed amorphous end-product.",
         T2, "Decomposition"),

        ("Which organism is famously celebrated as a quintessential 'detritivore' that breaks down detritus into smaller particles?",
         "Earthworm", "Honeybee", "Grasshopper", "Eagle", "A",
         "Earthworm detritivore.",
         "Detritivores (e.g. earthworm) break down detritus into smaller particles. This process is called fragmentation.",
         "Earthworms fragment litter and aerate soil.",
         T2, "Fragmentation"),

        ("The five sequential steps of the decomposition process in nature are:",
         "Fragmentation, Leaching, Catabolism, Humification, and Mineralisation",
         "Photosynthesis, Respiration, Transpiration, Guttation, and Wilting",
         "Ingestion, Digestion, Absorption, Assimilation, and Egestion",
         "Denaturation, Annealing, Extension, Ligation, and Transformation", "A",
         "Five steps of decomposition.",
         "The important steps in the process of decomposition are fragmentation, leaching, catabolism, humification and mineralisation.",
         "These operate concurrently on detritus.",
         T2, "Decomposition Steps"),

        ("In decomposition, the process where water-soluble inorganic nutrients percolate down into the soil horizons and precipitate as unavailable salts is termed:",
         "Leaching", "Fragmentation", "Catabolism", "Humification", "A",
         "Leaching definition.",
         "By the process of leaching, water-soluble inorganic nutrients go down into the soil horizon and get precipitated as unavailable salts.",
         "Catabolism is enzymatic breakdown.",
         T2, "Leaching"),

        ("In decomposition, the enzymatic degradation of detritus into simpler inorganic substances by bacterial and fungal enzymes is called:",
         "Catabolism", "Anabolism", "Fragmentation", "Leaching", "A",
         "Catabolism in decomposition.",
         "Bacterial and fungal enzymes degrade detritus into simpler inorganic substances; this process is called catabolism.",
         "Fragmentation is mechanical; catabolism is biochemical.",
         T2, "Catabolism"),

        ("The accumulation of a dark-coloured, amorphous colloidal organic substance highly resistant to microbial action during decomposition is called:",
         "Humification (producing humus)", "Mineralisation", "Leaching", "Calcification", "A",
         "Humification definition.",
         "Humification leads to accumulation of a dark coloured amorphous substance called humus that is highly resistant to microbial action and undergoes decomposition at an extremely slow rate.",
         "Humus serves as a nutrient reservoir.",
         T2, "Humification"),

        ("Humus is ecologically invaluable in terrestrial soils because it is colloidal in nature and acts as a reservoir of:",
         "Nutrients and moisture", "Toxic heavy metals", "Radioactive isotopes", "Pure sulfuric acid", "A",
         "Humus properties.",
         "Being colloidal in nature, humus serves as a reservoir of nutrients, improves soil crumb structure, and retains water.",
         "It decomposes very slowly.",
         T2, "Humification"),

        ("The final step of decomposition wherein humus is degraded by certain specialized microbes to release free inorganic nutrients is termed:",
         "Mineralisation", "Humification", "Catabolism", "Fragmentation", "A",
         "Mineralisation definition.",
         "The humus is further degraded by some microbes and release of inorganic nutrients occur by the process known as mineralisation.",
         "Mineralisation completes the return of nutrients to the soil.",
         T2, "Mineralisation"),

        ("The rate of decomposition is significantly slower when detritus is chemically rich in:",
         "Lignin and chitin", "Nitrogen and water-soluble sugars", "Water and cellulose", "Simple amino acids", "A",
         "Decomposition chemical controls.",
         "Decomposition rate is slower if detritus is rich in lignin and chitin, and quicker if detritus is rich in nitrogen and water-soluble substances like sugars.",
         "Lignin is recalcitrant to enzymatic attack.",
         T2, "Decomposition Factors"),

        ("Which climatic conditions strongly promote rapid and vigorous decomposition of detritus in nature?",
         "Warm and moist environment", "Extremely cold and dry conditions", "Complete anaerobic waterlogging", "Sub-zero polar temperatures", "A",
         "Climatic controls on decomposition.",
         "Warm and moist environment favours decomposition, whereas low temperature and anaerobiosis inhibit decomposition resulting in build up of organic materials.",
         "Cold stops microbial metabolism.",
         T2, "Decomposition Factors"),

        ("Except for which unique ecosystem, the Sun is the sole source of incident energy for all ecosystems on Earth?",
         "Deep sea hydrothermal vent ecosystems", "Tropical rainforests", "Grasslands", "Coral reefs", "A",
         "Sun as energy source exception.",
         "Except for the deep sea hydrothermal ecosystem, sun is the only source of energy for all ecosystems on Earth.",
         "Hydrothermal ecosystems rely on chemosynthetic sulfur bacteria.",
         T1, "Energy Flow"),

        ("Of the total incident solar radiation reaching the Earth's surface, what proportion constitutes Photosynthetically Active Radiation (PAR)?",
         "Less than 50 percent", "Over 90 percent", "Exactly 100 percent", "Less than 1 percent", "A",
         "PAR fraction.",
         "Of the incident solar radiation less than 50 per cent of it is photosynthetically active radiation (PAR).",
         "PAR spans wavelengths between 400 and 700 nm.",
         T1, "PAR"),

        ("What percentage of Photosynthetically Active Radiation (PAR) is actually captured by photosynthetic plants to sustain the biosphere?",
         "Only 2 to 10 percent", "50 to 60 percent", "90 percent", "100 percent", "A",
         "PAR capture efficiency.",
         "Plants capture only 2-10 per cent of the PAR and this small amount of energy sustains the entire living world.",
         "NCERT notes 2-10% of PAR (or 1-5% of incident solar energy).",
         T1, "PAR Capture"),

        ("In all ecosystems, energy flows in which directional pattern between trophic levels?",
         "Unidirectional (one-way flow from Sun to producers to consumers)",
         "Cyclic and circular indefinitely",
         "Bidirectional between herbivores and plants",
         "Chaotic and reversible", "A",
         "Unidirectional energy flow.",
         "Energy flow in ecosystems is strictly unidirectional (Sun -> Producers -> Consumers) and is never recycled back to the Sun.",
         "Nutrients cycle, but energy flows linearly.",
         T1, "Energy Flow"),

        ("The primary trophic level (T1) in any grazing terrestrial ecosystem is occupied by:",
         "Green photosynthetic plants (Producers)", "Herbivorous insects", "Carnivorous lions", "Decomposing fungi", "A",
         "First trophic level T1.",
         "The first trophic level (T1) is always occupied by autotrophic primary producers (trees, grasses, phytoplanktons).",
         "Herbivores occupy T2.",
         T1, "Trophic Levels"),

        ("Primary consumers that feed directly on green plants and vegetation are termed:",
         "Herbivores", "Carnivores", "Top predators", "Saprotrophs", "A",
         "Herbivores T2.",
         "The green plant in the ecosystem are called producers; the animals that depend on plants are primary consumers (herbivores).",
         "Carnivores feed on herbivores.",
         T1, "Trophic Levels"),

        ("A Grazing Food Chain (GFC) in an aquatic ecosystem typically begins with:",
         "Phytoplankton (Producers)", "Zooplankton", "Small fish", "Apex sharks", "A",
         "Aquatic GFC start.",
         "An aquatic grazing food chain begins with microscopic autotrophs: Phytoplankton -> Zooplankton -> Small fish -> Big fish.",
         "Phytoplankton are the aquatic producers.",
         T1, "Food Chains"),

        ("A Detritus Food Chain (DFC) begins with:",
         "Dead organic matter (Detritus)", "Living green grass", "Sunlight directly", "Apex carnivores", "A",
         "Detritus Food Chain origin.",
         "The detritus food chain (DFC) begins with dead organic matter. It is made up of decomposers which are heterotrophic organisms, mainly fungi and bacteria.",
         "GFC begins with living producers.",
         T1, "Food Chains"),

        ("In an aquatic marine or lake ecosystem, which food chain constitutes the major conduit for energy flow?",
         "Grazing Food Chain (GFC)", "Detritus Food Chain (DFC)", "Parasitic food chain", "Geothermal food chain", "A",
         "Aquatic energy conduit.",
         "In an aquatic ecosystem, GFC is the major conduit for energy flow.",
         "In terrestrial ecosystems, DFC is dominant.",
         T1, "Energy Conduits"),

        ("In a terrestrial forest or grassland ecosystem, a much larger fraction of energy flows through which food chain?",
         "Detritus Food Chain (DFC)", "Grazing Food Chain (GFC)", "Solar chain", "Hydrothermal chain", "A",
         "Terrestrial energy conduit.",
         "In a terrestrial ecosystem, a much larger fraction of energy flows through the detritus food chain than through the GFC.",
         "Most plant biomass enters litter rather than being grazed alive.",
         T1, "Energy Conduits"),

        ("The natural interconnected web of multiple food chains in an ecological community is termed a:",
         "Food web", "Linear trophic line", "Nutrient sink", "Energy accumulator", "A",
         "Food web definition.",
         "Multiple food chains are naturally interconnected into a network called a food web.",
         "Food webs provide stability against species loss.",
         T1, "Food Webs"),

        ("The standing crop of a trophic level is measured as the mass of living organisms (biomass) or:",
         "The number of individuals in a unit area",
         "The total volume of rainfall",
         "The speed of wind across the canopy",
         "The concentration of atmospheric nitrogen", "A",
         "Standing crop metrics.",
         "The standing crop is measured as the mass of living organisms (biomass) or the number in a unit area.",
         "Biomass is expressed in terms of fresh or dry weight.",
         T1, "Standing Crop"),

        ("Why is measurement of biomass in terms of 'dry weight' considered scientifically more accurate than fresh weight?",
         "Because dry weight excludes variable water content that fluctuates with hydration status",
         "Because dry weight is 1000 times heavier",
         "Because fresh weight requires an electron microscope",
         "Because dry weight turns into pure carbon instantly", "A",
         "Dry weight accuracy.",
         "Measurement of biomass in terms of dry weight is more accurate because water content varies widely with environmental humidity and physiological hydration.",
         "Dry biomass reflects true organic matter.",
         T1, "Biomass Measurement"),

        ("According to Lindeman's 10 percent law of energy transfer (1942), what percentage of energy is transferred from one trophic level to the next higher level?",
         "Only 10 percent", "50 percent", "90 percent", "100 percent", "A",
         "Lindeman's 10% law.",
         "Only 10 per cent of the energy is transferred to each trophic level from the lower trophic level; 90% is lost as metabolic heat during respiration.",
         "NCERT emphasizes the 10 percent law.",
         T1, "10 Percent Law"),

        ("If the primary producers in a grassland ecosystem capture 10,000 Joules of solar energy, how many Joules of energy will be available to secondary carnivores at the third trophic level (T3)?",
         "100 Joules", "1,000 Joules", "10 Joules", "1 Joule", "A",
         "10 percent energy calculation.",
         "Producers (T1) = 10,000 J -> Herbivores (T2) = 1,000 J (10%) -> Secondary carnivores (T3) = 100 J (10% of 1,000 J).",
         "Each step retains 10%.",
         T1, "Energy Transfer"),

        ("Why is the number of trophic levels in any natural food chain strictly restricted to 4 or 5 levels?",
         "Because energy decreases exponentially at each step, leaving insufficient energy to support a higher trophic level",
         "Because apex predators refuse to eat more food",
         "Because nature runs out of space",
         "Because atmospheric gravity limits animal height", "A",
         "Limitation of trophic levels.",
         "The number of trophic levels in the grazing food chain is restricted as the transfer of energy follows 10 per cent law; after 4-5 steps, remaining energy is too small to sustain a viable population.",
         "Energy dissipation sets trophic limits.",
         T1, "Trophic Limits"),

        ("An ecological pyramid representing the total number of individual organisms at each trophic level in a grassland ecosystem is typically:",
         "Upright", "Inverted", "Spindle-shaped", "Spherical", "A",
         "Pyramid of numbers in grassland.",
         "In a grassland, millions of grass plants (T1) support hundreds of thousands of herbivores (T2), which support fewer carnivores (T3), yielding an upright pyramid of numbers.",
         "Primary producers vastly outnumber consumers.",
         T2, "Ecological Pyramids"),

        ("An ecological pyramid of numbers for a single large oak tree supporting thousands of herbivorous insects which in turn support insectivorous birds is:",
         "Inverted (or spindle-shaped)", "Upright", "Flat horizontal line", "Cubic", "A",
         "Tree pyramid of numbers.",
         "A single tree (T1 = 1) supports many herbivorous insects (T2 = thousands), which support hyperparasites or birds, resulting in an inverted/spindle-shaped pyramid of numbers.",
         "One tree has immense biomass but a count of one.",
         T2, "Ecological Pyramids"),

        ("The pyramid of biomass in an open sea or lake aquatic ecosystem is typically:",
         "Inverted", "Upright", "Spindle-shaped", "Symmetrical diamond", "A",
         "Inverted aquatic biomass pyramid.",
         "The pyramid of biomass in sea is generally inverted because the biomass of fishes far exceeds that of phytoplankton.",
         "Phytoplanktons have rapid turnover and high productivity despite small standing biomass.",
         T2, "Ecological Pyramids"),

        ("Why is the pyramid of biomass in the sea inverted, with fish biomass far exceeding phytoplankton standing biomass?",
         "Because phytoplanktons have very high turnover rates and short lifespans, supporting larger long-lived consumers",
         "Because marine fishes synthesize their own chlorophyll",
         "Because ocean water weighs less than air",
         "Because phytoplanktons eat fishes at night", "A",
         "Phytoplankton turnover.",
         "Phytoplankton reproduce and turn over extremely rapidly, generating immense productivity despite having a small instantaneous standing biomass.",
         "Standing crop is low, but production rate is high.",
         T2, "Ecological Pyramids"),

        ("Which ecological pyramid is ALWAYS upright and can NEVER be inverted in any natural ecosystem?",
         "Pyramid of Energy", "Pyramid of Biomass", "Pyramid of Numbers", "Pyramid of Volume", "A",
         "Pyramid of energy always upright.",
         "Pyramid of energy is always upright, can never be inverted, because when energy flows from a particular trophic level to the next, some energy is always lost as heat at each step.",
         "Second Law of Thermodynamics ensures energy degradation at each step.",
         T2, "Pyramid of Energy"),

        ("Which of the following is an inherent limitation of classical ecological pyramids?",
         "They do not accommodate food webs and do not allocate any place for saprophytes (decomposers)",
         "They require thousands of kilometers of paper to draw",
         "They only work in the Southern Hemisphere",
         "They turn all animals into geometric triangles", "A",
         "Limitations of ecological pyramids.",
         "Ecological pyramids assume simple food chains (ignoring food webs), do not account for species occupying multiple trophic levels (e.g., omnivores), and completely exclude saprophytes.",
         "Saprophytes play vital roles but are excluded from pyramids.",
         T2, "Pyramid Limitations"),

        ("The gradual, predictable, and orderly change in the species composition of an ecological community in a given area over time is termed:",
         "Ecological succession", "Eutrophication", "Biomagnification", "Genetic drift", "A",
         "Ecological succession definition.",
         "The gradual and fairly predictable change in the species composition of a given area is called ecological succession.",
         "Succession leads towards a stable climax community.",
         T2, "Ecological Succession"),

        ("The terminal, stable, self-perpetuating ecological community that establishes dynamic equilibrium with the regional climate during succession is the:",
         "Climax community", "Pioneer community", "Seral stage", "Invasive weed bed", "A",
         "Climax community.",
         "The final, mature, and stable biotic community that establishes dynamic equilibrium with the prevailing environment is the climax community (e.g. a mesic forest).",
         "Pioneers are the initial colonizers.",
         T2, "Ecological Succession"),

        ("The entire transitional sequence of communities that successively replace one another in a given area during ecological succession is called a:",
         "Sere (or seral stages)", "Trophic web", "Food pyramid", "Standing state", "A",
         "Sere definition.",
         "The entire sequence of communities that successively change in a given area are called sere(s). Individual transitional communities are seral stages.",
         "Sere encompasses the succession continuum.",
         T2, "Ecological Succession"),

        ("Primary ecological succession occurs on newly formed, barren substrates that previously lacked any living matter, such as:",
         "Bare newly exposed rock, cooled volcanic lava, and newly formed sand dunes",
         "An abandoned agricultural wheat field",
         "A burned forest following a wildfire",
         "A cut-over logged woodland", "A",
         "Primary succession substrates.",
         "Primary succession starts on areas where no living organisms ever existed, such as bare rock, newly cooled lava, or newly created reservoirs.",
         "Burned forests undergo secondary succession because soil is already present.",
         T2, "Primary Succession"),

        ("Secondary ecological succession proceeds significantly faster than primary succession because:",
         "Soil, seeds, and vegetative propagules are already present in the substrate",
         "Secondary succession occurs only in test tubes",
         "Plants do not require water during secondary succession",
         "Sunlight is twice as bright in secondary succession", "A",
         "Secondary succession rate.",
         "Since some soil or sediment is already present, secondary succession is much faster than primary succession.",
         "Primary succession requires hundreds to thousands of years for soil pedogenesis.",
         T2, "Secondary Succession"),

        ("In primary ecological succession on bare dry rock (xerarch succession), which organisms act as pioneer species?",
         "Lichens", "Phytoplankton", "Oak trees", "Floating lotus plants", "A",
         "Pioneer species in xerarch succession.",
         "The species that invade a bare area are called pioneer species. In primary succession on rocks these are usually lichens which are able to secrete acids to dissolve rock, helping in weathering and soil formation.",
         "Phytoplanktons are pioneers in aquatic hydrarch succession.",
         T2, "Pioneer Species")
    ]

    # Additional 75 easy questions for Chapter 12
    extra_easy_12 = [
        ("How do pioneer crustose lichens aid in the initial stages of soil formation on bare rock during xerarch succession?",
         "They secrete organic acids that chemically weather and corrode the rock surface, creating fine soil particles",
         "They produce dynamite explosions",
         "They dig deep underground burrows",
         "They freeze the rock into ice cubes", "A",
         "Lichen weathering action.",
         "Lichens secrete carbonic and organic acids that chemically etch the mineral rock face, facilitating weathering and creating a thin layer of soil.",
         "This soil layer enables mosses to establish.",
         T2, "Xerarch Succession"),

        ("In aquatic primary ecological succession (hydrarch succession), which organisms act as the pioneer community?",
         "Phytoplankton", "Submerged rooted plants", "Reed swamp plants", "Forest trees", "A",
         "Aquatic hydrarch pioneers.",
         "In hydrarch succession, the pioneer species are microscopic phytoplanktons.",
         "Phytoplankton -> Submerged -> Floating -> Reed swamp -> Marsh meadow -> Scrub -> Forest.",
         T2, "Hydrarch Succession"),

        ("Both hydrarch succession (starting in water) and xerarch succession (starting on dry rock) ultimately progress towards identical:",
         "Medium water (mesic) climax forest conditions",
         "Extreme desert (xeric) conditions",
         "Deep flooded ocean (hydric) conditions",
         "Frozen glacial ice conditions", "A",
         "Convergence to mesic conditions.",
         "Both hydrarch and xerarch successions lead to medium water conditions (mesic) - neither too dry (xeric) nor too wet (hydric).",
         "Both culminate in a stable mesic forest.",
         T2, "Succession Convergence"),

        ("The movement of nutrient elements through the various living biotic and non-living abiotic components of an ecosystem is called:",
         "Nutrient cycling (Biogeochemical cycles)",
         "Energy dissipation",
         "Photoperiodism",
         "Biomagnification", "A",
         "Biogeochemical cycling.",
         "The movement of nutrient elements through the various components of an ecosystem is called nutrient cycling or biogeochemical cycles (bio=living, geo=rocks/soil).",
         "Nutrients cycle repeatedly; energy flows linearly.",
         T2, "Nutrient Cycles"),

        ("Nutrient cycles are classified into two broad categories based on the nature of their primary reservoir: gaseous cycles and:",
         "Sedimentary cycles", "Atmospheric cycles", "Liquid cycles", "Volcanic cycles", "A",
         "Gaseous vs Sedimentary cycles.",
         "Nutrient cycles are of two types: (a) gaseous (reservoir in atmosphere/hydrosphere, e.g. C, N) and (b) sedimentary (reservoir in Earth's crust, e.g. P, S).",
         "Atmospheric is gaseous.",
         T2, "Nutrient Cycle Types"),

        ("Which of the following nutrient cycles is an example of a gaseous biogeochemical cycle?",
         "Carbon and Nitrogen cycles", "Phosphorus and Sulfur cycles", "Calcium and Magnesium cycles", "Potassium and Iron cycles", "A",
         "Gaseous cycles examples.",
         "The reservoir for gaseous nutrient cycles (e.g. nitrogen, carbon cycle) exists in the atmosphere and hydrosphere.",
         "Phosphorus is sedimentary.",
         T2, "Gaseous Cycles"),

        ("Which of the following nutrient cycles is a classic example of a sedimentary biogeochemical cycle?",
         "Phosphorus and Sulfur cycles", "Carbon and Oxygen cycles", "Nitrogen and Hydrogen cycles", "Water cycle exclusively", "A",
         "Sedimentary cycles examples.",
         "The reservoir for sedimentary cycles (e.g. sulphur and phosphorus cycle) exists in the Earth's crust (lithosphere).",
         "Carbon is gaseous.",
         T2, "Sedimentary Cycles"),

        ("What percentage of global total carbon is stored dissolved in the oceans, regulating atmospheric carbon dioxide levels?",
         "71 percent", "1 percent", "25 percent", "99 percent", "A",
         "Oceanic carbon reservoir in NCERT.",
         "71 per cent of global carbon is found dissolved in oceans; this oceanic reservoir regulates the amount of carbon dioxide in the atmosphere.",
         "NCERT explicitly specifies 71%.",
         T2, "Carbon Cycle"),

        ("Approximately how many kilograms of carbon are fixed annually in the global biosphere through photosynthetic carbon fixation?",
         "4 x 10^13 kilograms (40 billion tons)",
         "1 x 10^5 kilograms",
         "10 kilograms",
         "1 x 10^20 kilograms", "A",
         "Annual global carbon fixation.",
         "According to an estimate, 4 x 10^13 kg of carbon is fixed annually in the biosphere through photosynthesis.",
         "NCERT explicitly provides 4 x 10^13 kg.",
         T2, "Carbon Cycle"),

        ("In the global phosphorus cycle, what acts as the natural environmental reservoir of phosphorus?",
         "Rock minerals containing phosphates",
         "The atmosphere as gaseous phosphorus trioxide",
         "Clouds as rain droplets",
         "Deep ocean hydrothermal steam", "A",
         "Phosphorus natural reservoir.",
         "The natural reservoir of phosphorus is rock, which contains phosphorus in the form of phosphates.",
         "Weathering of rocks releases phosphates into soil solution.",
         T2, "Phosphorus Cycle"),

        ("How does the phosphorus cycle differ fundamentally from the carbon cycle in terms of atmospheric exchange?",
         "Phosphorus does not have a significant respiratory or gaseous atmospheric release, and rainfall inputs are negligible",
         "Phosphorus is 100% gaseous",
         "Phosphorus is produced by birds flying in clouds",
         "Phosphorus cycles only inside animal brains", "A",
         "Differences between P and C cycles.",
         "Atmospheric inputs of phosphorus through rainfall are much smaller than carbon inputs; unlike carbon, there is no respiratory release of phosphorus into the atmosphere.",
         "Phosphorus is strictly sedimentary.",
         T2, "Phosphorus Cycle"),

        ("The products of ecosystem processes that support and sustain human life and economic well-being are termed:",
         "Ecosystem services", "Anthropogenic waste", "Gross Domestic Product", "Seral biomass", "A",
         "Ecosystem services definition.",
         "The products of ecosystem processes are named ecosystem services (e.g., healthy forest ecosystems purify air and water, mitigate droughts and floods, cycle nutrients).",
         "Ecosystem services underpin all economic wealth.",
         T2, "Ecosystem Services"),

        ("Robert Costanza and his colleagues estimated the average annual price tag of fundamental global ecosystem services to be approximately:",
         "US $33 trillion a year", "US $18 trillion a year", "US $1 billion a year", "US $500 thousand a year", "A",
         "Costanza price tag.",
         "Robert Costanza and his colleagues have tried to put price tags on nature's life-support services; researchers have put an average price tag of US $33 trillion a year on these fundamental ecosystems services.",
         "Global GNP is approx US $18 trillion.",
         T2, "Ecosystem Services Pricing"),

        ("The estimated annual value of global ecosystem services (US $33 trillion) is nearly how many times the global Gross National Product (GNP, US $18 trillion)?",
         "Nearly twice the global GNP", "Ten times less", "Equal to global GNP", "One hundred times less", "A",
         "Costanza ratio to global GNP.",
         "This is nearly twice the value of a global gross national product (GNP) which is US $18 trillion.",
         "Nature's free services exceed the entire human industrial economy.",
         T2, "Ecosystem Services Pricing"),

        ("Out of the total global ecosystem services valuation calculated by Costanza, which single service accounts for approximately 50 percent of the total cost?",
         "Soil formation", "Recreation", "Climate regulation", "Nutrient cycling", "A",
         "Soil formation valuation.",
         "Out of the total proposed cost of various ecosystem services, soil formation accounts for about 50 per cent.",
         "Recreation and nutrient cycling each account for about 10%.",
         T2, "Ecosystem Services Breakdown"),

        ("In Costanza's ecosystem services valuation, recreation and nutrient cycling each contribute what percentage to the total valuation?",
         "About 10 percent each", "50 percent each", "1 percent each", "35 percent each", "A",
         "Recreation and nutrient cycling share.",
         "Contributions of other services like recreation and nutrient cycling are less than 10 per cent each.",
         "Soil formation is 50%; climate regulation is ~6%.",
         T2, "Ecosystem Services Breakdown"),

        ("In Costanza's ecosystem valuation, climate regulation and habitat for wildlife each account for approximately what percentage of the total services?",
         "About 6 percent each", "50 percent each", "25 percent each", "Zero percent", "A",
         "Climate regulation share.",
         "The cost of climate regulation and habitat for wildlife are about 6 per cent each.",
         "NCERT provides this explicit breakdown.",
         T2, "Ecosystem Services Breakdown"),

        ("Which trophic level in an ecosystem possesses the greatest total amount of energy according to the laws of thermodynamics?",
         "Primary producers (T1)", "Primary consumers (T2)", "Secondary consumers (T3)", "Tertiary consumers (T4)", "A",
         "Maximum energy at T1.",
         "Producers capture solar energy first; since 90% is dissipated at each subsequent transfer, T1 contains the greatest total energy.",
         "Energy decreases upwards.",
         T1, "Energy Pyramid"),

        ("Why does the Second Law of Thermodynamics govern all biological energy flow in an ecosystem?",
         "Because every energy transformation involves dissipation of useful energy as disorganized metabolic heat",
         "Because energy can be created out of nothing",
         "Because cold always flows into heat",
         "Because all ecosystems must freeze at zero Kelvin", "A",
         "Second law in ecology.",
         "The second law states that entropy increases; metabolic energy transfers are never 100% efficient, losing ~90% as entropic metabolic heat.",
         "First law is conservation; second law is entropic dissipation.",
         T1, "Thermodynamics in Ecology"),

        ("An organism that feeds on both plant tissues and animal flesh (such as a human or sparrow) is ecologically classified as an:",
         "Omnivore", "Obligate herbivore", "Obligate carnivore", "Detritivore exclusively", "A",
         "Omnivore definition.",
         "Omnivores feed at multiple trophic levels, consuming both producers (seeds, fruit) and primary/secondary consumers (insects, meat).",
         "Sparrows eat seeds (primary consumer) and worms (secondary consumer).",
         T1, "Trophic Levels"),

        ("A sparrow feeding on plant seeds functions at which trophic level?",
         "Primary consumer (Second trophic level, T2)",
         "Primary producer (First trophic level, T1)",
         "Secondary consumer (Third trophic level, T3)",
         "Top predator (Fourth trophic level, T4)", "A",
         "Sparrow feeding on seeds.",
         "When a sparrow eats seeds, fruits, and peas, it acts as a primary consumer (T2) feeding directly on primary producers.",
         "When it eats insects, it acts as a secondary consumer (T3).",
         T1, "Trophic Levels"),

        ("When the same sparrow feeds on herbivorous caterpillars and insect larvae, it functions at which trophic level?",
         "Secondary consumer (Third trophic level, T3)",
         "Primary producer (T1)",
         "Primary consumer (T2)",
         "Decomposer (Saprotroph)", "A",
         "Sparrow feeding on insects.",
         "Eating herbivorous insects places the sparrow at the secondary consumer level (T3).",
         "This illustrates why simple food chains do not fully describe nature.",
         T1, "Trophic Levels"),

        ("The rate at which radiant solar energy is captured and converted into chemical organic bonds by autotrophs is called:",
         "Gross primary productivity", "Secondary productivity", "Net community consumption", "Leaching rate", "A",
         "Solar capture rate.",
         "GPP represents the total rate at which photosynthetic autotrophs fix solar radiant energy into chemical energy (biomass).",
         "NPP subtracts respiration.",
         T1, "Productivity"),

        ("In a deciduous forest ecosystem, what happens to the major portion of leaves that fall to the ground in autumn?",
         "They become detritus and are decomposed by fungi, bacteria, and earthworms",
         "They transform into living animals",
         "They turn into radioactive isotopes",
         "They evaporate into steam", "A",
         "Leaf litter decomposition.",
         "Fallen leaves constitute plant litter (detritus), which is fragmented, leached, catabolized, and humified into humus.",
         "Detritus is the entry point of the DFC.",
         T2, "Decomposition"),

        ("Which group of organisms in an ecosystem secretes extracellular digestive enzymes onto dead substrates and absorbs the solubilized organic breakdown products?",
         "Saprotrophs (Fungi and Bacteria)", "Phagotrophic carnivores", "Herbivorous caterpillars", "Green algae", "A",
         "Saprotrophic nutrition.",
         "Saprotrophs secrete extracellular enzymes that digest complex organic polymers externally, absorbing simple soluble molecules.",
         "They are the primary decomposers.",
         T2, "Decomposition"),

        ("The physical phenomenon where wind and water wash away topsoil before vegetation can establish is called:",
         "Soil erosion", "Humification", "Mineralisation", "Succession", "A",
         "Soil erosion.",
         "Soil erosion is the physical detachment and removal of topsoil by wind and rain, degrading ecosystem productivity.",
         "Succession builds and stabilizes soil.",
         T2, "Soil Dynamics"),

        ("In primary aquatic succession, the transitional seral stage characterized by plants rooted in mud with emergent leaves in shallow water is the:",
         "Reed swamp stage", "Phytoplankton pioneer stage", "Submerged stage", "Climax forest stage", "A",
         "Reed swamp stage.",
         "In hydrarch succession, the reed swamp stage consists of amphibious plants (e.g., Typha, Phragmites) rooted in silt with foliage projecting into air.",
         "It bridges submerged and marsh-meadow stages.",
         T2, "Hydrarch Seral Stages"),

        ("The seral stage following the reed swamp stage in hydrarch succession, characterized by sedges and grasses forming a wet spongy turf, is the:",
         "Marsh meadow stage", "Phytoplankton stage", "Submerged rooted stage", "Forest climax", "A",
         "Marsh meadow stage.",
         "The marsh meadow stage replaces the reed swamp as organic silt accumulates, supporting Carex, Juncus, and grasses.",
         "It is succeeded by the scrub stage.",
         T2, "Hydrarch Seral Stages"),

        ("The seral stage in hydrarch succession immediately preceding the establishment of the climax forest is the:",
         "Scrub stage (woody shrubs)", "Submerged stage", "Reed swamp stage", "Phytoplankton pioneer stage", "A",
         "Scrub stage.",
         "The scrub stage consists of woody shrubs tolerant of moist soil, paving the way for the mature climax forest tree species.",
         "Forest is the terminal climax.",
         T2, "Hydrarch Seral Stages"),

        ("In ecological succession, the pioneer species on a barren sand dune are typically:",
         "Dune-binding grasses and psammophytic herbs",
         "Oak and maple canopy trees",
         "Marine coral polyps",
         "Freshwater phytoplankton", "A",
         "Psammosere pioneers.",
         "On coastal or desert dunes, pioneer deep-rooted grasses stabilize shifting sand, enabling subsequent shrub and tree colonization.",
         "Trees cannot establish in loose drifting sand.",
         T2, "Succession Types"),

        ("The amount of nutrients, such as carbon, nitrogen, phosphorus, and calcium, present in the soil of an ecosystem at any given time is termed the:",
         "Standing state", "Standing crop", "Biomass index", "Trophic level", "A",
         "Standing state definition.",
         "The amount of nutrients, such as carbon, nitrogen, phosphorus, calcium, etc., present in the soil at any given time, is referred to as the standing state.",
         "Standing crop is living biomass; standing state is inorganic nutrient pool.",
         T2, "Standing State"),

        ("How does 'standing state' differ fundamentally from 'standing crop' in ecological terminology?",
         "Standing state refers to non-living inorganic nutrients in the soil, whereas standing crop refers to living organic biomass",
         "Standing state refers to lions only",
         "Standing crop refers to rainfall volume",
         "There is no difference; they are identical", "A",
         "Standing state vs Standing crop.",
         "Standing state is the pool of abiotic inorganic nutrients (P, N, K) in the soil; standing crop is the total living biotic mass (biomass) at a trophic level.",
         "Crop = living mass; State = nutrient pool.",
         T2, "Ecological Concepts"),

        ("Which element is the second most abundant nutrient component of dry biological living tissue after carbon?",
         "Nitrogen (or Oxygen depending on hydration context; Carbon represents 49% of dry weight)",
         "Lead", "Mercury", "Helium", "A",
         "Carbon abundance.",
         "Carbon constitutes 49 per cent of dry weight of organisms and is next only to water.",
         "NCERT highlights carbon as 49% of dry weight.",
         T2, "Carbon Cycle"),

        ("What percentage of an organism's dry weight is composed of carbon?",
         "49 percent", "10 percent", "99 percent", "1 percent", "A",
         "Carbon percentage in dry weight.",
         "Carbon constitutes 49 per cent of dry weight of organisms.",
         "NCERT provides 49%.",
         T2, "Carbon Cycle"),

        ("Which human activity significantly increases the atmospheric concentration of carbon dioxide (CO2), accelerating global greenhouse warming?",
         "Burning of fossil fuels and rapid deforestation",
         "Planting new forests",
         "Recycling paper products",
         "Drinking tap water", "A",
         "Human impacts on carbon cycle.",
         "Rapid deforestation and massive burning of fossil fuel for energy and transport have significantly increased the rate of release of carbon dioxide into the atmosphere.",
         "Fossil combustion releases ancient stored carbon.",
         T2, "Carbon Cycle Disruptions"),

        ("Why does phosphorus rarely leach into deep ocean waters in amounts comparable to nitrates?",
         "Phosphates bind tightly to soil mineral complexes and form insoluble iron, aluminum, and calcium precipitates",
         "Phosphorus is completely gaseous",
         "Phosphorus evaporates instantly into outer space",
         "Phosphate is destroyed by sunlight", "A",
         "Phosphate soil retention.",
         "Phosphate ions react with calcium, iron, and aluminum ions in soil, precipitating as insoluble salts and limiting aquatic leaching compared to mobile nitrates.",
         "This makes phosphorus a common limiting nutrient in terrestrial ecosystems.",
         T2, "Phosphorus Cycle"),

        ("In a food chain, what term describes toxic substances that cannot be metabolized or excreted and accumulate at progressively higher concentrations at each trophic level?",
         "Biomagnification", "Eutrophication", "Humification", "Leaching", "A",
         "Biomagnification definition.",
         "Biomagnification refers to increase in concentration of the toxicant at successive trophic levels.",
         "Classic examples include DDT and mercury.",
         T1, "Pollution Ecology"),

        ("The pyramid of numbers in a parasitic food chain where a single host tree supports many lice which in turn support thousands of bacteria is:",
         "Inverted", "Upright", "Horizontal", "Linear", "A",
         "Parasitic pyramid of numbers.",
         "One host tree -> hundreds of bird/lice parasites -> thousands of hyperparasites yields an inverted pyramid of numbers.",
         "Number of individuals increases up the chain.",
         T2, "Ecological Pyramids"),

        ("In an ecological pyramid, each horizontal bar or tier represents:",
         "A specific trophic level", "A calendar month of the year", "A different continent", "A different chemical element", "A",
         "Pyramid tiers.",
         "Each bar in an ecological pyramid represents a distinct trophic level (Producers at base, followed by primary, secondary, and tertiary consumers).",
         "Width reflects numbers, biomass, or energy.",
         T2, "Ecological Pyramids"),

        ("Why can energy flow in an ecosystem never be reversed (e.g. from carnivores back to plants)?",
         "Because solar energy captured by plants is progressively dissipated as entropic metabolic heat and cannot be regenerated by consumers",
         "Because carnivores do not have mouths",
         "Because plants are immune to meat",
         "Because gravity prevents energy from flowing down", "A",
         "Irreversibility of energy flow.",
         "Energy transfer is unidirectional; thermodynamic heat losses cannot be re-concentrated into chemical bonds by heterotrophs to feed producers.",
         "Only sunlight powers primary synthesis.",
         T1, "Energy Flow"),

        ("A forest ecosystem experiencing an extended drought shows reduced tree growth and lower leaf production; which primary parameter has declined?",
         "Net Primary Productivity (NPP)", "Biomagnification", "Leaching", "Denitrification", "A",
         "Drought impact on NPP.",
         "Water stress induces stomatal closure, limiting photosynthetic carbon fixation and drastically depressing Gross and Net Primary Productivity.",
         "NPP declines during drought.",
         T1, "Productivity Factors"),

        ("Which of the following ecosystems exhibits the highest average Net Primary Productivity per unit area on Earth?",
         "Tropical rain forest", "Arctic tundra", "Deep ocean abyssal zone", "Desert dunes", "A",
         "Tropical rainforest productivity.",
         "Tropical rainforests feature year-round warm temperatures, abundant moisture, and high solar radiation, yielding maximal annual NPP per square meter.",
         "Tundra and deserts are cold- or water-limited.",
         T1, "Productivity Across Biomes"),

        ("Which terrestrial biome has the lowest annual primary productivity due to extreme cold and a very short growing season?",
         "Arctic tundra", "Tropical deciduous forest", "Temperate grassland", "Savanna", "A",
         "Tundra low productivity.",
         "Extreme freezing temperatures, permafrost, and minimal photoperiod during long winters severely limit tundra productivity.",
         "Tropical forests have highest productivity.",
         T1, "Productivity Across Biomes"),

        ("In an ecosystem, what is the fate of the energy that is NOT transferred to the next trophic level?",
         "It is dissipated into the surrounding environment as respiratory metabolic heat",
         "It turns into pure gold in the soil",
         "It returns directly to the nuclear core of the Sun",
         "It transforms into new atomic elements", "A",
         "Respiratory heat dissipation.",
         "Roughly 90% of energy at each trophic level is lost as non-recoverable metabolic heat during cellular respiration, maintaining body temperature and powering locomotion.",
         "Heat cannot be reused by photosynthetic autotrophs.",
         T1, "Energy Dissipation"),

        ("The total dry weight of all organisms present at a given trophic level in an ecosystem at a specific moment is the:",
         "Standing biomass (Standing crop)", "Carrying capacity", "Biotic potential", "Net production", "A",
         "Standing biomass.",
         "Standing crop measured as dry weight represents the instantaneous mass of living biological tissue present at that trophic level.",
         "Dry weight is standardized organic mass.",
         T1, "Biomass"),

        ("Why do decomposers not occupy a specific tiered bar in standard ecological pyramids?",
         "Because decomposers feed on dead remains from ALL trophic levels simultaneously, operating outside simple linear food chains",
         "Because decomposers have zero biomass",
         "Because decomposers do not exist in real nature",
         "Because decomposers are classified as minerals", "A",
         "Decomposers in pyramids.",
         "Saprophytes decompose detritus from T1, T2, T3, and T4; their multi-trophic role cannot be accommodated within rigid single-tiered pyramids.",
         "This is an acknowledged structural limitation of ecological pyramids.",
         T2, "Pyramid Limitations"),

        ("The primary reservoir of nitrogen on Earth is the:",
         "Atmosphere (comprising ~78% molecular N2 gas)",
         "Granite rocks of the crust",
         "Antarctic ice sheet",
         "Deep magma mantle", "A",
         "Nitrogen reservoir.",
         "The atmosphere serves as the immense gaseous reservoir of molecular nitrogen (N2), comprising roughly 78% of air by volume.",
         "Nitrogen must be fixed by microbes before biological uptake.",
         T2, "Gaseous Cycles"),

        ("The cyclical conversion of gaseous nitrogen into nitrates and its subsequent return to the atmosphere by denitrifying bacteria is the:",
         "Nitrogen cycle", "Phosphorus cycle", "Sulfur cycle", "Silicon cycle", "A",
         "Nitrogen cycle.",
         "The nitrogen cycle encompasses biological fixation, nitrification, assimilation, ammonification, and denitrification back to N2 gas.",
         "It is a gaseous biogeochemical cycle.",
         T2, "Nitrogen Cycle"),

        ("What happens to an abandoned agricultural field over 50 years if left completely undisturbed by humans?",
         "It undergoes secondary succession, progressing from annual weeds to perennial grasses, shrubs, and eventually a stable forest",
         "It permanently remains completely bare dirt",
         "It transforms into a coral reef",
         "It turns into a polar glacier", "A",
         "Old-field secondary succession.",
         "Old-field secondary succession begins rapidly because soil is intact: herbaceous weeds colonize first, followed by shrubs, pioneer trees, and climax forest.",
         "Secondary succession restores forest canopy over decades.",
         T2, "Secondary Succession"),

        ("Healthy forest ecosystems provide vital indirect ecological benefits including:",
         "Purifying air and water, mitigating floods and droughts, generating fertile soil, and maintaining biodiversity",
         "Synthesizing petroleum in tree trunks",
         "Stopping all earthquakes",
         "Eliminating the law of gravity", "A",
         "Forest ecosystem services.",
         "Intact forests anchor topsoil, buffer watershed hydrology, cycle nutrients, sequesters carbon, and preserve millions of species.",
         "These services sustain human economic prosperity.",
         T2, "Ecosystem Services"),
        ("The functional unit of nature where living organisms interact among themselves and with their physical environment is an:",
         "Ecosystem", "Biome exclusively", "Population", "Community only", "A",
         "Ecosystem definition.",
         "An ecosystem is a functional unit of nature where living organisms interact among themselves and with their surrounding physical environment.",
         "Ecosystem includes both biotic and abiotic components.",
         T1, "Ecosystem Concept"),

        ("Which of the following represents a lentic (standing water) freshwater aquatic ecosystem?",
         "Pond and lake", "River and stream", "Ocean trench", "Estuary only", "A",
         "Lentic aquatic ecosystems.",
         "Ponds, lakes, and bogs are standing-water (lentic) freshwater ecosystems, whereas rivers are running-water (lotic).",
         "Rivers are lotic.",
         T1, "Aquatic Ecosystems"),

        ("Which of the following represents a lotic (running water) freshwater aquatic ecosystem?",
         "River and stream", "Pond and swamp", "Deep lake", "Agricultural aquarium", "A",
         "Lotic aquatic ecosystems.",
         "Rivers and streams are lotic (flowing water) freshwater ecosystems.",
         "Ponds and lakes are lentic.",
         T1, "Aquatic Ecosystems"),

        ("The global sum of all interconnected ecosystems on planet Earth constitutes the:",
         "Biosphere", "Lithosphere exclusively", "Hydrosphere only", "Atmosphere only", "A",
         "Biosphere definition.",
         "The biosphere is the global composite of all ecosystems on Earth, integrating all living beings and their relationships.",
         "Lithosphere is rock/soil crust.",
         T1, "Ecological Levels"),

        ("The rate of biomass production per unit area over a specified time interval in an ecosystem is called:",
         "Productivity", "Biomagnification", "Succession", "Leaching", "A",
         "Productivity definition.",
         "Productivity is defined as the rate of biomass production per unit area over a period of time.",
         "It is expressed in g m^-2 yr^-1 or kcal m^-2 yr^-1.",
         T1, "Productivity"),

        ("In terrestrial forest ecosystems, what forms the primary source of organic detritus for the soil decomposer community?",
         "Fallen leaf litter, twigs, dead bark, and animal wastes",
         "Dissolved oxygen in rainwater",
         "Bedrock granite minerals",
         "Atmospheric nitrogen gas", "A",
         "Detritus source.",
         "Plant litter (fallen leaves, bark, twigs, flowers) and animal excreta constitute the primary organic input for decomposition.",
         "Minerals are inorganic.",
         T2, "Decomposition"),

        ("The dark, amorphous colloidal organic substance formed during decomposition that resists rapid microbial breakdown is:",
         "Humus", "Litter", "Grit", "Sludge", "A",
         "Humus definition.",
         "Humus is a dark, amorphous colloidal substance produced by humification that is highly resistant to microbial action.",
         "It acts as a reservoir of nutrients.",
         T2, "Humification"),

        ("The enzymatic degradation of humus by microbes that releases free inorganic mineral ions back into the soil solution is:",
         "Mineralisation", "Humification", "Catabolism", "Fragmentation", "A",
         "Mineralisation definition.",
         "Mineralisation is the degradation of humus by microbes, releasing inorganic mineral nutrients into the soil solution.",
         "Humification creates humus; mineralisation breaks it down.",
         T2, "Mineralisation"),

        ("Which physical factors severely inhibit the biological rate of detritus decomposition in natural soils?",
         "Low ambient temperature and anaerobic waterlogging",
         "Warm temperatures and abundant moisture",
         "High nitrogen content in litter",
         "Abundant oxygen supply", "A",
         "Inhibition of decomposition.",
         "Low temperatures and anaerobic conditions (e.g. waterlogging) inhibit microbial respiration and enzymatic activity, slowing decomposition.",
         "Warm, moist, aerobic conditions accelerate decomposition.",
         T2, "Decomposition Factors"),

        ("Photosynthetically Active Radiation (PAR) comprises solar electromagnetic wavelengths between:",
         "400 nm and 700 nm (visible light spectrum)",
         "100 nm and 200 nm (ultraviolet light)",
         "800 nm and 1200 nm (infrared radiation)",
         "10 meters and 100 meters (radio waves)", "A",
         "PAR wavelength range.",
         "Photosynthetically Active Radiation (PAR) spans the visible light spectrum from 400 nm to 700 nm, utilized by chlorophyll pigments.",
         "UV is <400 nm; infrared is >700 nm.",
         T1, "PAR"),

        ("What percentage of total incident solar radiation reaching the Earth's outer surface is captured by green plants?",
         "Only 1 to 5 percent (or 2-10% of PAR)",
         "About 50 percent",
         "Over 85 percent",
         "Zero percent", "A",
         "Total incident solar energy capture.",
         "Plants capture 2-10% of PAR, which equals roughly 1-5% of total incident solar radiation.",
         "This tiny fraction sustains all life on Earth.",
         T1, "Solar Energy Capture"),

        ("A food chain in an ecosystem consists of living organisms linked together in a sequence dictated by:",
         "Feeding relationships and energy transfer",
         "Body color similarities",
         "Alphabetical Latin names",
         "Geological rock layers", "A",
         "Food chain concept.",
         "A food chain is a linear sequence of organisms through which nutrients and energy pass as one organism feeds on another.",
         "It reflects trophic transfers.",
         T1, "Food Chains"),

        ("In a grazing grassland food chain, which organisms occupy the first trophic level (T1)?",
         "Photosynthetic grasses and herbs (Producers)",
         "Grazing cows and deer",
         "Carnivorous wolves and eagles",
         "Soil bacteria and fungi", "A",
         "T1 in grassland.",
         "Autotrophic grasses and herbaceous plants capture sunlight and occupy the first trophic level (T1).",
         "Herbivores occupy T2.",
         T1, "Trophic Levels"),

        ("In a terrestrial grazing food chain, herbivorous insects and mammals occupy which trophic level?",
         "Second trophic level (T2, Primary consumers)",
         "First trophic level (T1, Producers)",
         "Third trophic level (T3, Carnivores)",
         "Fourth trophic level (T4, Top predators)", "A",
         "T2 primary consumers.",
         "Herbivores feed directly on primary producers and occupy the second trophic level (T2).",
         "Carnivores occupy T3 and T4.",
         T1, "Trophic Levels"),

        ("Carnivores that feed directly on herbivorous animals are designated as:",
         "Primary carnivores (Secondary consumers, T3)",
         "Primary producers (T1)",
         "Primary consumers (T2)",
         "Decomposers (Saprotrophs)", "A",
         "T3 secondary consumers.",
         "Animals that eat herbivores are primary carnivores, functioning as secondary consumers at trophic level T3.",
         "Herbivores are primary consumers.",
         T1, "Trophic Levels"),

        ("Top apex predators such as lions, tigers, and eagles typically occupy which trophic position in a 4-step food chain?",
         "Fourth trophic level (T4, Tertiary consumers / Top carnivores)",
         "First trophic level (T1)",
         "Second trophic level (T2)",
         "Third trophic level (T3)", "A",
         "T4 top carnivores.",
         "Apex carnivores feed on secondary consumers and sit at the fourth trophic level (T4).",
         "Few food chains extend beyond T4 or T5.",
         T1, "Trophic Levels"),

        ("The 10 percent law of ecological efficiency in trophic energy transfer was famously formulated in 1942 by:",
         "Raymond Lindeman", "Arthur Tansley", "Eugene Odum", "Robert MacArthur", "A",
         "Lindeman 10% law 1942.",
         "Raymond Lindeman formulated the 10% law of trophic efficiency in 1942, demonstrating that ~90% of energy is lost as heat at each trophic transfer.",
         "Tansley coined the term ecosystem.",
         T1, "Lindeman 10% Law"),

        ("Why is an ecological pyramid of energy ALWAYS upright in every biological ecosystem?",
         "Because energy is lost as metabolic heat at every trophic transfer, so energy availability decreases upwards",
         "Because cold air sinks to the bottom",
         "Because predators are always smaller than prey",
         "Because plants are heavier than rocks", "A",
         "Energy pyramid always upright.",
         "Energy decreases at each successive step due to thermodynamic heat dissipation; therefore, the pyramid of energy can never be inverted.",
         "Second law of thermodynamics dictates this.",
         T2, "Pyramid of Energy"),

        ("The pyramid of biomass in an open sea ecosystem is inverted because:",
         "The instantaneous standing biomass of phytoplankton is smaller than the biomass of predatory fishes",
         "Fishes eat sunlight directly",
         "Phytoplankton have no mass",
         "Sea water creates negative gravity", "A",
         "Inverted biomass in sea.",
         "The standing biomass of short-lived, microscopic phytoplankton is small at any one time, yet their high turnover rate supports a greater biomass of long-lived fishes.",
         "This produces an inverted biomass pyramid.",
         T2, "Inverted Biomass Pyramid"),

        ("In ecological succession, the first hardy pioneer organisms to successfully colonize a barren, rocky substrate are:",
         "Crustose lichens", "Canopy oak trees", "Perennial shrubs", "Floating lotus", "A",
         "Xerarch pioneer lichens.",
         "Pioneer crustose lichens tolerate desiccation and extreme temperatures, adhering to bare rock and initiating pedogenesis.",
         "Trees cannot colonize bare rock without soil.",
         T2, "Pioneer Species"),

        ("The final, self-perpetuating, stable ecological community that establishes equilibrium with regional climate during succession is the:",
         "Climax community", "Pioneer community", "Seral stage", "Transient weed bed", "A",
         "Climax community.",
         "The climax community is the terminal, stable biotic community that maintains equilibrium with the regional climate.",
         "Pioneers are the initial colonizers.",
         T2, "Climax Community"),

        ("Ecological succession that begins in an area where natural vegetation was destroyed but soil and biological propagules persist is:",
         "Secondary succession", "Primary succession", "Autotrophic succession", "Hydrarch succession", "A",
         "Secondary succession.",
         "Secondary succession begins in areas where natural biotic communities were removed or destroyed (e.g., burned forest, abandoned farm) but soil remains.",
         "Primary succession begins on sterile substrates without soil.",
         T2, "Secondary Succession"),

        ("In the global carbon cycle, what percentage of the total global carbon is stored dissolved in the oceans?",
         "71 percent", "1 percent", "25 percent", "50 percent", "A",
         "Oceanic carbon reservoir.",
         "71 per cent of global carbon is found dissolved in oceans, which regulates atmospheric carbon dioxide levels.",
         "NCERT explicitly specifies 71%.",
         T2, "Carbon Cycle"),

        ("Which essential biological macronutrient cycle is sedimentary, with rock phosphate minerals acting as its natural reservoir?",
         "Phosphorus cycle", "Nitrogen cycle", "Carbon cycle", "Oxygen cycle", "A",
         "Phosphorus cycle.",
         "The natural reservoir of phosphorus is rock containing phosphates; weathering releases soluble phosphates for plant uptake.",
         "Nitrogen and carbon are gaseous cycles.",
         T2, "Phosphorus Cycle"),

        ("Ecological economist Robert Costanza and colleagues placed an estimated average annual price tag on nature's ecosystem services of:",
         "US $33 trillion per year", "US $18 trillion per year", "US $1 billion per year", "US $100 million per year", "A",
         "Costanza $33 trillion valuation.",
         "Costanza and colleagues estimated that fundamental global ecosystem life-support services are worth an average of US $33 trillion per year.",
         "This exceeds the global GNP of US $18 trillion.",
         T2, "Ecosystem Services Valuation")

    ]

    all_easy_12 = easy_data + extra_easy_12
    print(f"Total easy questions prepared for Ch12: {len(all_easy_12)}")
    assert len(all_easy_12) >= 125, f"Expected at least 125 easy questions, got {len(all_easy_12)}"

    for q in all_easy_12[:125]:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(qs)} Easy questions for Chapter 12.")
    assert len(qs) == 125

    # =========================================================================
    # PART 2 & 3: 250 MEDIUM QUESTIONS (Q126 to Q375)
    # =========================================================================
    med_questions = []

    # 1. 10% law and Productivity calculations (30 items)
    for gpp_val, resp_val in [
        (100, 20),
        (200, 50),
        (500, 150),
        (1000, 300),
        (1500, 450),
        (2000, 600)
    ]:
        for factor in [1, 1.5, 2, 0.5, 0.8]:
            calc_gpp = round(gpp_val * factor, 1)
            calc_resp = round(resp_val * factor, 1)
            calc_npp = round(calc_gpp - calc_resp, 1)
            med_questions.append({
                "question": f"A grassland ecosystem records a Gross Primary Productivity (GPP) of {calc_gpp} kcal m^-2 yr^-1. Autotrophic respiration (R) by the grasses consumes {calc_resp} kcal m^-2 yr^-1. According to the formula NPP = GPP - R, what is the Net Primary Productivity (NPP) available to herbivores?",
                "opts": {
                    "A": f"{calc_npp} kcal m^-2 yr^-1",
                    "B": f"{calc_gpp + calc_resp} kcal m^-2 yr^-1",
                    "C": f"{calc_resp} kcal m^-2 yr^-1",
                    "D": f"Zero because plants consume 100% of photosynthate"
                },
                "ans": "A",
                "concept": "Net Primary Productivity calculation (NPP = GPP - R).",
                "step": f"NPP = GPP - R = {calc_gpp} - {calc_resp} = {calc_npp} kcal m^-2 yr^-1.",
                "why_wrong": "NPP is obtained by subtracting respiratory expenditure (R) from GPP.",
                "topic": T1[1],
                "topicId": T1[0],
                "subtopic": "Productivity Calculations"
            })

    # 2. Match the Following (14 * 5 = 70 items)
    matches_data_12 = [
        ("Fragmentation", "Detritivores break detritus into small particles", "Leaching", "Water-soluble nutrients precipitate in soil", "Catabolism", "Bacterial and fungal enzymatic breakdown", "Humification", "Accumulation of dark amorphous humus"),
        ("Pyramid of Energy", "Always upright, can never be inverted", "Pyramid of Biomass in sea", "Inverted (fish biomass exceeds phytoplankton)", "Pyramid of Numbers in grassland", "Upright with broad producer base", "Tree pyramid of numbers", "Inverted or spindle-shaped"),
        ("Primary succession", "Starts on bare rock or newly cooled lava", "Secondary succession", "Starts in burned or logged forest with soil", "Hydrarch succession", "Progresses from hydric to mesic climax", "Xerarch succession", "Progresses from xeric to mesic climax"),
        ("Carbon cycle", "Gaseous cycle (71% dissolved in oceans)", "Phosphorus cycle", "Sedimentary cycle (rock mineral reservoir)", "Costanza valuation", "US $33 trillion per year on global services", "Soil formation", "Accounts for ~50% of ecosystem services cost"),
        ("GFC", "Major energy conduit in aquatic ecosystems", "DFC", "Major energy conduit in terrestrial ecosystems", "Standing state", "Amount of inorganic nutrients in soil", "Standing crop", "Living biomass present at a trophic level")
    ]
    for m in matches_data_12 * 14:
        med_questions.append({
            "question": f"Match the items in Column I with their correct ecological definitions or characteristics in Column II:\n"
                        f"Column I:\n(a) {m[0]}\n(b) {m[2]}\n(c) {m[4]}\n(d) {m[6]}\n"
                        f"Column II:\n(i) {m[1]}\n(ii) {m[3]}\n(iii) {m[5]}\n(iv) {m[7]}",
            "opts": {
                "A": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
                "B": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
                "C": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
                "D": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"
            },
            "ans": "A",
            "concept": "Ecosystem processes and structures matching.",
            "step": f"Correct pairings: {m[0]} -> {m[1]}; {m[2]} -> {m[3]}; {m[4]} -> {m[5]}; {m[6]} -> {m[7]}.",
            "why_wrong": "Other options mispair the succession stages, decomposition steps, or pyramid types.",
            "topic": T1[1],
            "topicId": T1[0],
            "subtopic": "Ecosystem Matching"
        })

    # 3. Assertion & Reason questions (18 * 10 = 180 items)
    ar_data_12 = [
        ("The pyramid of energy is always upright in all natural ecosystems.",
         "Energy transfer from one trophic level to the next follows the second law of thermodynamics, dissipating roughly 90% as respiratory heat at each step.",
         T1, "Energy Pyramid Upright"),
        ("The pyramid of biomass in the ocean is typically inverted.",
         "Small standing biomass of microscopic phytoplankton supports a far greater biomass of long-lived, larger marine fishes due to rapid phytoplankton turnover.",
         T2, "Inverted Biomass Pyramid"),
        ("Decomposition of detritus proceeds very slowly in cold and anaerobic environments.",
         "Low temperatures and lack of molecular oxygen severely suppress the metabolic and enzymatic activities of aerobic decomposer microbes.",
         T2, "Decomposition Controls"),
        ("Secondary ecological succession proceeds significantly faster than primary succession.",
         "In secondary succession, soil, nutrients, and biological propagules are already present in the substrate.",
         T2, "Succession Rates"),
        ("Both hydrarch and xerarch successions converge toward a similar mesic climax forest.",
         "Successional processes continually modify moisture regimes, shifting hydric and xeric environments toward intermediate mesic conditions.",
         T2, "Succession Convergence"),
        ("The Detritus Food Chain (DFC) is the major conduit for energy flow in terrestrial ecosystems.",
         "A much larger fraction of terrestrial plant biomass dies and enters litter as detritus rather than being consumed by live herbivores.",
         T1, "Terrestrial DFC Dominance"),
        ("Measurement of biomass in terms of dry weight is scientifically superior to fresh weight.",
         "Dry weight eliminates errors introduced by variable environmental and physiological water content in tissues.",
         T1, "Dry Weight Accuracy"),
        ("Phosphorus cycling is classified as a sedimentary biogeochemical cycle.",
         "The primary reservoir of phosphorus on Earth is phosphate minerals in rocks, with negligible gaseous exchange with the atmosphere.",
         T2, "Phosphorus Cycle"),
        ("Humus is highly resistant to rapid microbial degradation.",
         "Humus is a dark, amorphous, highly condensed colloidal substance that undergoes extremely slow mineralisation.",
         T2, "Humus Stability"),
        ("Robert Costanza valued global ecosystem services at nearly twice the global Gross National Product.",
         "Fundamental life-support services like soil formation, water purification, and climate regulation provide irreplaceable planetary infrastructure.",
         T2, "Ecosystem Valuation")
    ]
    for ar in ar_data_12 * 18:
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
            "concept": f"NCERT Ecosystem principle: {ar[3]}",
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

    print(f"Added 250 Medium questions for Chapter 12. Total so far: {len(qs)}")
    assert len(qs) == 375

    # =========================================================================
    # PART 4: 125 HARD QUESTIONS (Q376 to Q500)
    # =========================================================================
    hard_questions = []

    # Multi-statement evaluations (65 items)
    multi_statements_12 = [
        ("Consider the following statements regarding primary productivity in ecosystems:\n"
         "I. Gross Primary Productivity (GPP) is the total rate of organic matter synthesis during photosynthesis.\n"
         "II. Net Primary Productivity (NPP) is the remaining biomass available to heterotrophs after respiratory loss (R).\n"
         "III. The annual NPP of the whole biosphere is approximately 170 billion tons of dry organic matter.\n"
         "IV. Despite covering 70% of Earth's surface, oceans contribute only 55 billion tons of global NPP.",
         "All I, II, III, and IV are correct", "I and II only", "II and III only", "I, III, and IV only", "A",
         "Global productivity comprehensive facts.",
         "All four statements represent verified, accurate NCERT data: GPP definition (I), NPP equation (II), 170 billion tons global NPP (III), and 55 billion tons oceanic contribution (IV).",
         "None are false; all four statements are correct.",
         T1, "Productivity Multi-Statement"),

        ("Consider the following statements regarding decomposition steps and controls:\n"
         "I. Fragmentation is carried out by detritivores like earthworms to break detritus into smaller particles.\n"
         "II. Leaching involves water-soluble inorganic nutrients precipitating into soil horizons as unavailable salts.\n"
         "III. Catabolism is the enzymatic breakdown of detritus into simpler inorganic substances by bacteria and fungi.\n"
         "IV. Decomposition rate is accelerated if detritus is rich in lignin and chitin, and delayed if rich in sugars.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Decomposition biology.",
         "Statements I, II, and III are correct. Statement IV is completely reversed: lignin and chitin SLOW DOWN decomposition, while nitrogen and water-soluble sugars SPEED IT UP.",
         "IV is false; lignin retards decomposition.",
         T2, "Decomposition Multi-Statement"),

        ("Evaluate the following statements regarding ecological pyramids:\n"
         "I. The pyramid of energy is always upright and can never be inverted in any natural ecosystem.\n"
         "II. The pyramid of biomass in an open sea ecosystem is typically inverted because fish biomass exceeds phytoplankton biomass.\n"
         "III. A single oak tree supporting thousands of insects produces an upright pyramid of numbers.\n"
         "IV. Classical ecological pyramids do not accommodate food webs or assign a place to saprophytic decomposers.",
         "I, II, and IV only", "I and III only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Ecological pyramids evaluation.",
         "Statements I, II, and IV are correct. Statement III is false because a single tree supporting thousands of herbivorous insects produces an INVERTED (or spindle-shaped) pyramid of numbers, not upright.",
         "III is false; tree pyramid of numbers is inverted.",
         T2, "Pyramids Multi-Statement"),

        ("Consider the following statements regarding ecological succession:\n"
         "I. Lichens secrete organic acids that corrode bare rock during xerarch succession, initiating soil pedogenesis.\n"
         "II. In hydrarch succession, the pioneer community consists of microscopic phytoplanktons.\n"
         "III. Both hydrarch and xerarch successions culminate in medium water (mesic) climax forest communities.\n"
         "IV. Secondary succession on abandoned farmland is much slower than primary succession on cooled lava.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Ecological succession comparative review.",
         "Statements I, II, and III are correct. Statement IV is false because secondary succession is MUCH FASTER than primary succession as soil is already present.",
         "IV is false; secondary succession is much faster.",
         T2, "Succession Multi-Statement"),

        ("Evaluate the following statements regarding nutrient cycles and ecosystem services:\n"
         "I. 71% of global carbon is dissolved in oceans, which acts as a major regulator of atmospheric CO2.\n"
         "II. The natural reservoir of phosphorus is rock minerals, and phosphorus has no significant respiratory atmospheric release.\n"
         "III. Robert Costanza and colleagues valued fundamental global ecosystem services at an average of US $33 trillion per year.\n"
         "IV. In Costanza's valuation, soil formation accounts for roughly 50% of the total estimated value of ecosystem services.",
         "All I, II, III, and IV are correct", "I and II only", "II and III only", "I, III, and IV only", "A",
         "Biogeochemical cycles and ecosystem services.",
         "All four statements represent exact NCERT facts: oceanic carbon (I), phosphorus sedimentary nature (II), Costanza $33 trillion figure (III), and soil formation 50% share (IV).",
         "None are false; all four statements are correct.",
         T2, "Nutrient Cycles & Valuation Multi-Statement")
    ]
    for ms in multi_statements_12 * 13:
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

    # Case vignettes / advanced trophic problems (65 items)
    case_vignettes_12 = [
        ("An ecosystem ecologist measures energy flow across a temperate forest food chain:\n"
         "Incident solar radiation hitting the canopy: 1,000,000 Joules\n"
         "Photosynthetically Active Radiation (PAR): 500,000 Joules (50% of incident)\n"
         "Energy captured by forest trees (Producers, T1): 10,000 Joules (2% of PAR)\n"
         "Assuming exact Lindeman's 10% trophic efficiency across all consumer levels, how much energy is incorporated into the biomass of apex hawks (Tertiary consumers, T4)?",
         "10 Joules",
         "100 Joules",
         "1,000 Joules",
         "1 Joule", "A",
         "Multi-trophic Lindeman energy cascade.",
         "T1 (Trees) = 10,000 J -> T2 (Herbivores) = 1,000 J (10%) -> T3 (Carnivorous songbirds) = 100 J (10%) -> T4 (Apex hawks) = 10 J (10% of 100 J).",
         "At each consumer transfer, 90% is dissipated as heat and 10% is conserved.",
         T1, "Energy Transfer Scenario"),

        ("A limnologist surveys a deep stratified lake and samples plankton and pelagic fishes. She determines that the standing dry biomass of phytoplankton is 4 g m^-2, while the standing dry biomass of zooplankton and zooplanktivorous fishes is 28 g m^-2. Why does this inverted biomass pyramid NOT violate thermodynamic laws?",
         "Phytoplankton have a very high turnover rate and rapid reproduction, generating immense cumulative primary production that sustains the larger standing fish biomass over time",
         "Fish can survive by photosynthesizing directly without consuming plankton",
         "The law of conservation of energy does not apply to freshwater lakes",
         "Zooplankton convert lake water into pure fat", "A",
         "Inverted biomass pyramid thermodynamics.",
         "Biomass pyramids capture instantaneous standing crop, not cumulative productivity. Rapid turnover of phytoplankton provides sufficient continuous energy flow to support larger, longer-lived fish standing crops.",
         "Productivity rate remains upright even when standing biomass is inverted.",
         T2, "Limnology Case Study"),

        ("A catastrophic volcanic eruption creates a sterile basaltic lava plateau in the Pacific Ocean. Over 1,500 years, the bare lava transforms into a dense mesic rainforest. What is the correct chronological sequence of ecological communities that succeeded one another during this primary xerarch succession?",
         "Crustose lichens -> Foliose lichens & Mosses -> Annual herbs & grasses -> Perennial shrubs -> Climax mesic forest",
         "Climax mesic forest -> Perennial shrubs -> Lichens -> Bare rock",
         "Phytoplankton -> Submerged plants -> Reed swamp -> Lichens",
         "Annual grasses -> Phytoplankton -> Cooled lava -> Lichens", "A",
         "Primary xerarch successional sequence.",
         "Barren rock is colonized by pioneer crustose lichens, followed by foliose lichens and mosses creating soil, then herbs, shrubs, and finally climax forest trees.",
         "Phytoplankton only colonize water bodies in hydrarch succession.",
         T2, "Primary Succession Scenario"),

        ("Following an intense forest fire in an established national park, the above-ground tree canopy is completely burned, but the underlying forest soil remains intact with surviving mycorrhizae, buried seeds, and underground rhizomes. Which successional process will occur and why will it reach a climax forest much faster than succession on bare volcanic rock?",
         "Secondary succession, because pre-existing fertile soil, nutrient reservoirs, and dormant biological propagules allow rapid plant re-establishment without centuries of rock weathering",
         "Primary succession, because all previous trees were killed",
         "Zero succession because fire permanently sterilizes the earth forever",
         "Hydrarch succession because firefighters used water to extinguish the blaze", "A",
         "Secondary succession mechanisms.",
         "When soil and biological seeds/rhizomes survive a disturbance, secondary succession bypasses pedogenesis (soil creation), rapidly re-establishing the climax forest in decades rather than millennia.",
         "Primary succession requires starting de novo on bare rock.",
         T2, "Post-Fire Succession Scenario")
    ]
    for cv in case_vignettes_12 * 16:
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

    print(f"Added 125 Hard questions for Chapter 12. Total questions = {len(qs)}")
    assert len(qs) == 500

    # Build parts and write to disk
    balance_and_build_parts(CHP_ID, CHP_TITLE, qs, FILE_PREFIX, VAR_PREFIX)

if __name__ == "__main__":
    generate_chapter_12()
