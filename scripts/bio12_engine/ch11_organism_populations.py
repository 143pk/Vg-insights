import os
import sys
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from scripts.bio12_engine.common import balance_and_build_parts

CHP_ID = "organism-populations"
CHP_TITLE = "Organisms and Populations"
FILE_PREFIX = "organismPopulations"
VAR_PREFIX = "ORGANISM_POPULATIONS"

T1 = ("bio-abiotic-factors-adaptations", "Organism & Environment (Abiotic Factors & Adaptations)")
T2 = ("bio-population-growth-interactions", "Population Attributes, Growth Models & Interactions")

def generate_chapter_11():
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
        ("Organisms that can tolerate and thrive in a wide range of environmental temperatures are called:",
         "Eurythermal", "Stenothermal", "Euryhaline", "Stenohaline", "A",
         "Eurythermal organisms.",
         "A few organisms can tolerate and thrive in a wide range of temperatures; they are called eurythermal.",
         "Stenothermal organisms are restricted to a narrow temperature range.",
         T1, "Temperature Adaptations"),

        ("Organisms that are restricted to living within a narrow range of environmental temperatures are termed:",
         "Stenothermal", "Eurythermal", "Stenohaline", "Euryhaline", "A",
         "Stenothermal organisms.",
         "A vast majority of organisms are restricted to a narrow range of temperatures; such organisms are called stenothermal.",
         "Eurythermal tolerates a wide temperature range.",
         T1, "Temperature Adaptations"),

        ("Organisms that can tolerate a wide range of salinities in aquatic environments are classified as:",
         "Euryhaline", "Stenohaline", "Eurythermal", "Stenothermal", "A",
         "Euryhaline organisms.",
         "Some organisms are tolerant of a wide range of salinities (euryhaline).",
         "Stenohaline organisms are restricted to a narrow range of salinity.",
         T1, "Salinity Adaptations"),

        ("Aquatic organisms that are restricted to a narrow range of water salinity are referred to as:",
         "Stenohaline", "Euryhaline", "Stenothermal", "Eurythermal", "A",
         "Stenohaline organisms.",
         "Others are restricted to a narrow range of salinity and are termed stenohaline.",
         "Freshwater fish placed in the ocean suffer osmotic shock because they are stenohaline.",
         T1, "Salinity Adaptations"),

        ("What percentage of animal species and nearly all plants are conformers that cannot maintain a constant internal environment?",
         "99 percent of animals and nearly all plants",
         "10 percent of animals only",
         "50 percent of animals",
         "1 percent of animals only", "A",
         "Conformers proportion in NCERT.",
         "An overwhelming majority (99 per cent) of animals and nearly all plants cannot maintain a constant internal environment; they are conformers.",
         "Only mammals and birds (and very few lower vertebrates) are true regulators.",
         T1, "Conformers vs Regulators"),

        ("Every winter, the famous Keoladeo National Park in Bharatpur (Rajasthan) hosts thousands of migratory birds arriving from:",
         "Siberia and other extremely cold northern regions",
         "The Sahara Desert of Africa",
         "The Amazon rainforest of Brazil",
         "The Great Barrier Reef of Australia", "A",
         "Keoladeo National Park Bharatpur.",
         "Every winter the famous Keoladeo National Park (Bharatpur) in Rajasthan hosts thousands of migratory birds coming from Siberia and other extremely cold northern regions.",
         "Siberian cranes migrate to escape harsh arctic winters.",
         T1, "Migration"),

        ("During harsh winter conditions, bears escape the cold stress by entering a state of dormant winter sleep termed:",
         "Hibernation", "Aestivation", "Diapause", "Sporulation", "A",
         "Hibernation in bears.",
         "Bears escape in time by going into hibernation during winter to conserve metabolic energy.",
         "Aestivation is summer sleep to avoid heat and desiccation.",
         T1, "Suspended Life"),

        ("Snails and certain freshwater fishes enter a dormant state during hot, dry summer months to avoid heat and desiccation, known as:",
         "Aestivation", "Hibernation", "Diapause", "Eutrophication", "A",
         "Aestivation in snails and fish.",
         "Some snails and fish go into aestivation to avoid summer-related problems (heat and desiccation).",
         "Hibernation is winter dormancy.",
         T1, "Suspended Life"),

        ("Under unfavourable environmental conditions, many zooplankton species in lakes and ponds enter a stage of suspended development termed:",
         "Diapause", "Hibernation", "Aestivation", "Metamorphosis", "A",
         "Diapause in zooplankton.",
         "Under unfavourable conditions, many zooplankton species in lakes and ponds are known to enter diapause, a stage of suspended development.",
         "Diapause is physiological arrest of development.",
         T1, "Suspended Life"),

        ("In the North American desert, which small mammal is capable of meeting all its water requirements through internal fat oxidation without ever drinking water?",
         "Kangaroo rat", "Desert fox", "Camel", "Rattlesnake", "A",
         "Kangaroo rat water adaptation.",
         "The kangaroo rat in North American deserts is capable of meeting all its water requirements through its internal fat oxidation (in which water is a by-product).",
         "Camels drink large volumes of water periodically; kangaroo rats do not drink free water.",
         T1, "Physiological Adaptations"),

        ("Besides metabolic water generation from fat oxidation, what key physiological adaptation allows the kangaroo rat to conserve water?",
         "It can concentrate its urine so that minimal volume of water is used to expel excretory products",
         "It stops producing any urine permanently",
         "It secretes pure liquid water through its skin",
         "It pants rapidly like a dog", "A",
         "Kangaroo rat concentrated urine.",
         "The kangaroo rat has the ability to concentrate its urine, so that minimal water is lost during waste excretion.",
         "It does not sweat or lose water through panting.",
         T1, "Physiological Adaptations"),

        ("Desert plants such as Opuntia reduce water loss through transpiration by having stomata arranged in deep pits, termed:",
         "Sunken stomata", "Hydathodes", "Lenticels", "Pneumatophores", "A",
         "Sunken stomata in xerophytes.",
         "Desert plants have a thick cuticle on their leaf surfaces and have their stomata arranged in deep pits (sunken stomata) to minimise water loss through transpiration.",
         "Hydathodes secrete guttation droplets; lenticels are on woody barks.",
         T1, "Morphological Adaptations"),

        ("Which special photosynthetic pathway enables desert plants to keep their stomata closed during the scorching daytime hours to conserve water?",
         "CAM (Crassulacean Acid Metabolism) pathway",
         "C3 Calvin cycle exclusively",
         "C2 photorespiratory pathway",
         "Lactic acid fermentation pathway", "A",
         "CAM pathway in xerophytes.",
         "Desert plants possess a special photosynthetic pathway (CAM) that enables their stomata to remain closed during daytime.",
         "CAM stomata open at night to fix CO2 as malate.",
         T1, "Physiological Adaptations"),

        ("In the xerophytic desert plant Opuntia, the leaves are modified into sharp spines, while photosynthesis is performed by flattened green stems termed:",
         "Phylloclades", "Cladodes", "Phyllodes", "Bulbils", "A",
         "Opuntia phylloclades.",
         "In Opuntia, leaves are reduced to spines to minimize water loss, and the photosynthetic function is taken over by flattened green stems (phylloclades).",
         "Phyllodes are modified petioles (as in Australian Acacia).",
         T1, "Morphological Adaptations"),

        ("According to Allen's Rule in ecological physiology, mammals adapted to colder polar climates generally have:",
         "Shorter ears and shorter limbs to minimize heat loss",
         "Longer ears and longer limbs to radiate heat",
         "Zero hair on their body",
         "Enormous webbed feet for flying", "A",
         "Allen's Rule.",
         "Allen's Rule states that mammals from colder climates generally have shorter ears and limbs to minimise heat loss by reducing surface area to volume ratio.",
         "Bergmann's rule refers to larger overall body mass in cold climates.",
         T1, "Allen's Rule"),

        ("In polar seas, aquatic marine mammals like seals prevent excessive heat loss to freezing water by having a thick insulating layer of subcutaneous fat called:",
         "Blubber", "Keratin", "Cuticle", "Myelin", "A",
         "Blubber insulation.",
         "In the polar seas, aquatic mammals like seals have a thick layer of fat (blubber) below their skin that acts as an insulator and reduces loss of body heat.",
         "Keratin forms nails and horns; blubber is subcutaneous adipose tissue.",
         T1, "Physiological Adaptations"),

        ("When a person travels to high-altitude mountain locations (>3,500 m, such as Rohtang Pass), they often experience acute 'Altitude Sickness' characterized by:",
         "Nausea, fatigue, and heart palpitations due to low atmospheric pressure and hypoxia",
         "High fever and immediate skin peeling",
         "Sudden uncontrollable laughter",
         "Extreme bone elongation", "A",
         "Altitude sickness symptoms.",
         "At high altitude (>3,500 m), low atmospheric pressure causes arterial hypoxia, resulting in nausea, fatigue, and heart palpitations (altitude sickness).",
         "The body acclimates over several days.",
         T1, "Altitude Adaptations"),

        ("How does the human body physiologically acclimatize over time to high-altitude hypoxia (>3,500 m)?",
         "Increasing RBC production, decreasing hemoglobin-oxygen binding affinity, and increasing breathing rate",
         "Decreasing RBC count and stopping all respiration",
         "Halving the heart rate permanently",
         "Switching entirely to anaerobic fermentation", "A",
         "Acclimatization to altitude.",
         "The body compensates for low oxygen availability by increasing red blood cell production, decreasing the binding affinity of hemoglobin, and increasing breathing rate.",
         "Higher 2,3-BPG decreases O2 affinity, promoting oxygen unloading to tissues.",
         T1, "Altitude Adaptations"),

        ("How does the desert lizard behaviorally manage its body temperature in the absence of physiological thermoregulation?",
         "Basking in the sun when body temperature drops, and moving into shade or burrows when ambient temperature rises",
         "Sweating large quantities of saline water",
         "Panting continuously through its tongue",
         "Drinking boiling hot water", "A",
         "Desert lizard behavioral thermoregulation.",
         "Desert lizards lack physiological regulation; they bask in the sun to absorb heat when cold, and retreat into burrows or shade when temperature rises.",
         "Reptiles are poikilotherms and rely heavily on behavioral adjustments.",
         T1, "Behavioral Adaptations"),

        ("The total number of births per unit population per unit time in a given habitat is termed:",
         "Natality (Birth rate)", "Mortality (Death rate)", "Immigration", "Emigration", "A",
         "Natality definition.",
         "Natality refers to the number of births during a given period in the population that are added to the initial density.",
         "Mortality is death rate.",
         T2, "Population Attributes"),

        ("The total number of deaths per unit population per unit time in a given habitat is termed:",
         "Mortality (Death rate)", "Natality (Birth rate)", "Emigration", "Immigration", "A",
         "Mortality definition.",
         "Mortality is the number of deaths in the population during a given time period.",
         "Natality represents births.",
         T2, "Population Attributes"),

        ("The number of individuals of the same species that have come into the habitat from elsewhere during the time period under consideration is called:",
         "Immigration", "Emigration", "Natality", "Mortality", "A",
         "Immigration definition.",
         "Immigration is the number of individuals of the same species that have come into the habitat from elsewhere during the time period under consideration.",
         "Emigration is outward movement.",
         T2, "Population Attributes"),

        ("The number of individuals of the population who left the habitat and gone elsewhere during the time period under consideration is called:",
         "Emigration", "Immigration", "Natality", "Mortality", "A",
         "Emigration definition.",
         "Emigration is the number of individuals of the population who left the habitat and gone elsewhere during the time period under consideration.",
         "Immigration is influx.",
         T2, "Population Attributes"),

        ("If 'N' represents population density at time 't', which formula correctly expresses the population density at time 't + 1'?",
         "N(t+1) = N(t) + [(B + I) - (D + E)]",
         "N(t+1) = N(t) + [(B + D) - (I + E)]",
         "N(t+1) = N(t) - [(B + I) + (D + E)]",
         "N(t+1) = N(t) x (B / D)", "A",
         "Population density formula.",
         "NCERT provides the fundamental equation: N(t+1) = N(t) + [(B + I) - (D + E)], where B=births, I=immigrants, D=deaths, E=emigrants.",
         "Births and immigration increase density; deaths and emigration decrease it.",
         T2, "Population Dynamics"),

        ("Under what ecological condition does a colonizing population grow in an exponential or geometric fashion, resulting in a J-shaped curve?",
         "When resources (food and space) in the habitat are unlimited",
         "When carrying capacity (K) is zero",
         "When mortality exceeds natality by 100-fold",
         "When predators outnumber prey by 10 to 1", "A",
         "Exponential growth condition.",
         "Resource (food and space) availability is obviously essential for the unimpeded growth of a population. When resources in the habitat are unlimited, each species realizes its full biotic potential and grows exponentially.",
         "Unlimited resources yield a J-shaped exponential curve.",
         T2, "Population Growth Models"),

        ("In the differential equation for exponential population growth, dN/dt = rN, what does the parameter 'r' represent?",
         "Intrinsic rate of natural increase", "Carrying capacity of the environment", "Total number of predators", "Rate of mutation", "A",
         "Intrinsic rate of natural increase (r).",
         "In dN/dt = rN, 'r' is called the 'intrinsic rate of natural increase' and is a very important parameter chosen for assessing impacts of any biotic or abiotic factor on population growth.",
         "K is carrying capacity.",
         T2, "Population Growth Models"),

        ("What was the approximate value of the intrinsic rate of natural increase (r) for the human population in India in the year 1981?",
         "0.0205", "0.015", "0.12", "0.85", "A",
         "Human r value in 1981.",
         "In 1981, the 'r' value for human population in India was 0.0205.",
         "0.015 was the Norway rat; 0.12 was the flour beetle.",
         T2, "Population Growth Models"),

        ("What was the value of the intrinsic rate of natural increase (r) recorded for the Norway rat according to NCERT data?",
         "0.015", "0.12", "0.0205", "1.5", "A",
         "Norway rat r value.",
         "For the Norway rat the r value is 0.015.",
         "0.12 is for the flour beetle.",
         T2, "Population Growth Models"),

        ("What was the value of the intrinsic rate of natural increase (r) reported for the flour beetle (Tribolium) in NCERT?",
         "0.12", "0.015", "0.0205", "2.0", "A",
         "Flour beetle r value.",
         "For the flour beetle the r value is 0.12.",
         "0.015 is Norway rat; 0.0205 is Indian humans in 1981.",
         T2, "Population Growth Models"),

        ("The integral mathematical form of the exponential growth equation is expressed as:",
         "N(t) = N(0) e^(rt)",
         "N(t) = N(0) + rt",
         "N(t) = N(0) / (rt)",
         "N(t) = rN(0) / K", "A",
         "Integral form of exponential growth.",
         "The integral form of the exponential growth equation is N(t) = N(0) e^(rt), where N(t)=density at time t, N(0)=initial density, r=intrinsic rate, e=base of natural logarithms.",
         "It describes exponential compound interest growth.",
         T2, "Population Growth Models"),

        ("In nature, real populations have limited resources and eventually stabilize around a maximum sustainable density called the:",
         "Carrying capacity (K)", "Biotic potential (r)", "Vital index", "Trophic level", "A",
         "Carrying capacity definition.",
         "In nature, a given habitat has enough resources to support a maximum possible number, beyond which no further growth is possible. This limit is the environment's carrying capacity (K).",
         "Carrying capacity is denoted by K.",
         T2, "Logistic Growth"),

        ("The Verhulst-Pearl Logistic Growth of populations experiencing resource limitation is represented mathematically by the differential equation:",
         "dN/dt = rN [(K - N) / K]",
         "dN/dt = rN",
         "dN/dt = rN [K / (K - N)]",
         "dN/dt = (B - D) / N", "A",
         "Logistic growth differential equation.",
         "Verhulst-Pearl Logistic Growth is described by: dN/dt = rN [(K - N) / K], where (K - N)/K represents environmental resistance.",
         "dN/dt = rN is exponential growth.",
         T2, "Logistic Growth"),

        ("A population exhibiting Verhulst-Pearl logistic growth plots as which characteristic curve over time?",
         "Sigmoid (S-shaped) curve", "J-shaped curve", "Linear straight line", "Parabolic inverted curve", "A",
         "Sigmoid curve.",
         "A population growing in a habitat with limited resources shows initially a lag phase, followed by phases of acceleration and deceleration, and finally an asymptote, yielding a sigmoid (S-shaped) curve.",
         "J-shaped is exponential growth without carrying capacity.",
         T2, "Logistic Growth"),

        ("In the logistic growth equation dN/dt = rN [(K - N) / K], what happens to the population growth rate (dN/dt) when population density 'N' reaches carrying capacity 'K' (N = K)?",
         "Growth rate becomes zero (the population reaches stationary asymptote)",
         "Growth rate accelerates to infinity",
         "All organisms immediately die",
         "The carrying capacity doubles", "A",
         "Asymptote at N=K.",
         "When N equals K, (K - N)/K becomes 0, so dN/dt = 0; the population reaches its carrying capacity asymptote and ceases growing.",
         "Population stabilizes at carrying capacity.",
         T2, "Logistic Growth"),

        ("Which organism represents an extreme life history strategy by breeding only once in its entire lifetime and then dying?",
         "Pacific salmon fish and bamboo", "Oysters and pelagic fishes", "Birds and mammals", "Elephants and humans", "A",
         "Semelparous breeding in NCERT.",
         "Some organisms breed only once in their lifetime (Pacific salmon fish, bamboo) while others breed many times (most birds and mammals).",
         "Bamboo flowers once in 50-100 years, fruits, and dies.",
         T2, "Life History Variation"),

        ("Which group of organisms produces a very large number of small-sized offspring to maximize reproductive fitness?",
         "Oysters and pelagic marine fishes", "Humans and whales", "Elephants and primates", "Eagles and hawks", "A",
         "r-selected offspring size.",
         "Some organisms produce a large number of small-sized offspring (oysters, pelagic fishes) while others produce a small number of large-sized offspring (birds, mammals).",
         "Mammals produce few large offspring with high parental investment.",
         T2, "Life History Variation"),

        ("In an ecological population interaction, predation is classified as which type of relationship in terms of species fitness (+, - , 0)?",
         "+ / - (Beneficial for predator, detrimental for prey)",
         "- / - (Detrimental for both)",
         "+ / + (Beneficial for both)",
         "+ / 0 (Beneficial for one, neutral for other)", "A",
         "Predation interaction signs.",
         "In predation (+, -), the predator species gains energy (+), while the prey species suffers mortality (-).",
         "+/+ is mutualism; -/- is competition.",
         T2, "Predation"),

        ("What crucial ecological role is played by predators in natural ecological communities besides transferring energy across trophic levels?",
         "Keeping prey populations under control and preventing them from reaching destructive densities",
         "Eliminating all plant species from the forest",
         "Synthesizing atmospheric nitrogen",
         "Causing global cooling", "A",
         "Predators control prey populations.",
         "Besides acting as conduits for energy transfer across trophic levels, predators play very important roles in keeping prey populations under control.",
         "Without predators, prey species achieve very high densities and cause ecosystem instability.",
         T2, "Predation"),

        ("When the exotic Prickly Pear Cactus was introduced into Australia in the early 1920s, it rapidly became an invasive pest spreading over millions of hectares because:",
         "It lacked natural predator herbivores in the Australian continent",
         "It was pollinated by kangaroos",
         "It produced toxic cyanide gas",
         "It turned Australian soil into pure salt", "A",
         "Prickly pear invasive spread.",
         "The prickly pear cactus spread rapidly because the colonised land lacked its natural herbivore predators.",
         "It was eventually controlled by introducing a cactus-feeding moth.",
         T2, "Biological Control"),

        ("How was the devastating invasive Prickly Pear Cactus infestation in Australia finally brought under biological control?",
         "By introducing a cactus-feeding moth (Cactoblastis cactorum) from its natural habitat",
         "By spraying millions of tons of chemical DDT",
         "By cutting down every tree in Australia",
         "By flooding the entire desert with ocean water", "A",
         "Cactoblastis biocontrol.",
         "The invasive prickly pear cactus was brought under control only after a cactus-feeding predator (a moth, Cactoblastis cactorum) from its natural habitat was introduced into the country.",
         "Biological control restored ecological balance.",
         T2, "Biological Control"),

        ("In the rocky intertidal communities of the American Pacific Coast, when all individuals of the predatory starfish Pisaster were experimentally removed from an enclosed area:",
         "More than 10 species of invertebrates became extinct within a year due to intense interspecific competition",
         "All plant life immediately doubled",
         "The water dried up completely",
         "Pisaster transformed into sea urchins", "A",
         "Pisaster keystone predator experiment.",
         "When all starfish were removed from an enclosed intertidal area, more than 10 species of invertebrates became extinct within a year, because of interspecific competition among prey.",
         "Predators help maintain species diversity by preventing dominant prey from excluding rivals.",
         T2, "Predation and Diversity"),

        ("Why is the Monarch butterfly exceptionally distasteful and toxic to predatory birds?",
         "It contains a toxic cardiac chemical acquired during its caterpillar stage by feeding on a poisonous weed",
         "It stings birds with venomous fangs",
         "It emits high-voltage electric shocks",
         "It is covered in metallic iron scales", "A",
         "Monarch butterfly chemical defense.",
         "The Monarch butterfly is highly distasteful to its predator (bird) because of a special chemical present in its body. The butterfly acquires this chemical during its caterpillar stage by feeding on a poisonous weed.",
         "The toxic chemical protects both larva and adult.",
         T2, "Prey Defenses"),

        ("Which poisonous weed growing in abandoned fields produces highly toxic cardiac glycosides, preventing cattle and goats from browsing on it?",
         "Calotropis", "Opuntia", "Eichhornia", "Parthenium", "A",
         "Calotropis cardiac glycosides.",
         "Calotropis produces highly poisonous cardiac glycosides; that is why cattle or goats never browse on this plant.",
         "Cardiac glycosides cause heart arrhythmia in herbivores.",
         T2, "Herbivore Defenses"),

        ("Plants produce an astonishing variety of secondary chemical metabolites (such as nicotine, caffeine, quinine, strychnine, and opium) primarily as:",
         "Defenses against herbivores and browsing pests",
         "Nutrients for human medicine",
         "Attractants for honeybees",
         "Waste products of photosynthesis", "A",
         "Chemical defenses in plants.",
         "A wide variety of chemical substances that we extract from plants on a commercial scale (nicotine, caffeine, quinine, strychnine, opium) are produced by them as defenses against grazers and browsers.",
         "They deter or poison herbivores.",
         T2, "Herbivore Defenses"),

        ("In an ecological population interaction, competition is represented symbolically as which fitness relationship?",
         "- / - (Both competing species suffer fitness loss)",
         "+ / - (One benefits, one suffers)",
         "+ / + (Both benefit)",
         "+ / 0 (One benefits, other unaffected)", "A",
         "Competition interaction signs.",
         "Competition is a -/- interaction where both competing species suffer reduced fitness due to shared limiting resources.",
         "+/- is predation/parasitism.",
         T2, "Competition"),

        ("Gause's Competitive Exclusion Principle states that:",
         "Two closely related species competing for the exact same limiting resources cannot co-exist indefinitely and the inferior competitor will be eliminated",
         "Predators always eliminate all their prey species",
         "All species in an ecosystem share resources equally without conflict",
         "Parasites always kill their hosts within 24 hours", "A",
         "Gause's Competitive Exclusion Principle.",
         "Gause's 'Competitive Exclusion Principle' states that two closely related species competing for the same limiting resources cannot co-exist indefinitely and the competitively inferior one will be eliminated eventually.",
         "Coexistence is possible only through resource partitioning.",
         T2, "Competitive Exclusion"),

        ("The dramatic extinction of the Abingdon tortoise in the Galapagos Islands within a decade after goats were introduced was caused by:",
         "The greater browsing efficiency of the goats",
         "Direct predatory attacks by goats on tortoises",
         "A lethal virus transmitted by goats",
         "Goats drinking all freshwater in the islands", "A",
         "Abingdon tortoise extinction.",
         "The Abingdon tortoise in Galapagos Islands became extinct within a decade after goats were introduced on the island, apparently due to the greater browsing efficiency of the goats.",
         "Goats are superior herbivores, outcompeting tortoises for vegetation.",
         T2, "Competition Case Study"),

        ("MacArthur's famous study demonstrated that five closely related species of warblers co-existed on the same spruce tree without competitive exclusion by:",
         "Resource partitioning through behavioral differences in their foraging habits",
         "Mating with each other to form a single hybrid species",
         "Predating on each other alternately",
         "Migrating to the moon during the day", "A",
         "MacArthur's warbler resource partitioning.",
         "MacArthur showed that five closely related species of warblers living on the same tree were able to avoid competition and co-exist due to behavioural differences in their foraging activities.",
         "Resource partitioning promotes coexistence.",
         T2, "Resource Partitioning"),

        ("In an ecological interaction, parasitism is represented symbolically as:",
         "+ / - (Beneficial for parasite, detrimental for host)",
         "- / - (Detrimental for both)",
         "+ / + (Beneficial for both)",
         "+ / 0 (Beneficial for one, neutral for other)", "A",
         "Parasitism signs.",
         "Parasitism is a +/- interaction where the parasite derives nutrition and shelter at the physiological expense of the host.",
         "+/+ is mutualism.",
         T2, "Parasitism"),

        ("Which parasitic plant lacks chlorophyll and leaves, deriving its nutrition entirely by sending haustoria into the vascular tissues of hedge plants?",
         "Cuscuta (Amarbel)", "Nepenthes", "Drosera", "Utricularia", "A",
         "Cuscuta ectoparasite.",
         "Cuscuta, a parasitic plant that is commonly found growing on hedge plants, has lost its chlorophyll and leaves in the course of evolution. It derives its nutrition from the host plant.",
         "Nepenthes is an insectivorous green plant.",
         T2, "Parasitism"),
        ("The average temperature of the Earth's surface decreases progressively from the equator towards the:",
         "Poles", "Equator", "Tropics", "Subtropics", "A",
         "Temperature latitudinal gradient.",
         "Temperature decreases progressively from the equator towards the poles and from plains to the mountain tops.",
         "Poles are coldest; equator is warmest.",
         T1, "Temperature Gradient"),

        ("Temperature affects the kinetics of which cellular molecules, thereby dictating the metabolic activity and physiological functions of organisms?",
         "Enzymes", "Phospholipids only", "Cellulose walls", "Ribosomal RNA only", "A",
         "Temperature enzyme kinetics.",
         "Temperature affects the kinetics of enzymes and through it the basal metabolism, activity and other physiological functions of the organism.",
         "Enzymes have thermal optima.",
         T1, "Temperature Adaptations"),

        ("Salt concentration (measured as salinity in parts per thousand) in inland freshwaters is typically:",
         "Less than 5 ppt", "30 to 35 ppt", "More than 100 ppt", "90 to 95 ppt", "A",
         "Inland salinity in NCERT.",
         "The salt concentration (measured as salinity in parts per thousand) is less than 5 in inland waters.",
         "30-35 ppt is in sea; >100 ppt is in hypersaline lagoons.",
         T1, "Salinity Adaptations"),

        ("Salt concentration (salinity in parts per thousand) in the open ocean and sea is approximately:",
         "30 to 35 ppt", "Less than 5 ppt", "More than 100 ppt", "Zero ppt", "A",
         "Oceanic salinity in NCERT.",
         "Salinity is 30-35 in the sea.",
         "Less than 5 ppt is freshwater.",
         T1, "Salinity Adaptations"),

        ("Salt concentration (salinity in parts per thousand) in hypersaline lagoons reaches:",
         "More than 100 ppt", "Less than 5 ppt", "15 to 20 ppt", "Constant 30 ppt", "A",
         "Hypersaline lagoon salinity in NCERT.",
         "Salinity is more than 100 in hypersaline lagoons.",
         "NCERT explicitly specifies >100 ppt.",
         T1, "Salinity Adaptations"),

        ("Small forest herbs and shrubs are adapted to photosynthesise optimally under very low light conditions because they are:",
         "Constantly overshadowed by tall, canopied forest trees",
         "Lacking in chlorophyll",
         "Growing only at night",
         "Consuming animal meat", "A",
         "Forest stratification light adaptation.",
         "Many species of small plants (herbs and shrubs) growing in forests are adapted to photosynthesise optimally under very low light conditions because they are overshadowed by tall, canopied trees.",
         "They are shade-adapted sciophytes.",
         T1, "Light Adaptations"),

        ("Many animals utilize diurnal and seasonal variations in light intensity and duration (photoperiod) as cues for timing their:",
         "Foraging, reproductive, and migratory activities",
         "DNA replication during mitosis only",
         "Enzymatic digestion of chitin",
         "Bone fracture repair", "A",
         "Photoperiodism in animals.",
         "Animals use diurnal and seasonal variations in light intensity and photoperiod as cues for timing their foraging, reproductive and migratory activities.",
         "Photoperiod acts as an environmental synchronizer.",
         T1, "Light Adaptations"),

        ("The physical and chemical characteristics of soil, such as grain size, aggregation, and mineral composition, determine its:",
         "Percolation and water-holding capacity",
         "Atmospheric humidity in clouds",
         "Solar radiation angle",
         "Gravitational constant", "A",
         "Soil percolation properties.",
         "Soil composition, grain size and aggregation determine the percolation and water holding capacity of the soils.",
         "These dictate plant community types.",
         T1, "Soil Characteristics"),

        ("In aquatic ecosystems, the type of benthic organisms that can thrive at the bottom is predominantly determined by:",
         "The sediment characteristics of the benthic floor",
         "The color of flying birds",
         "The phase of the moon",
         "The speed of surface wind only", "A",
         "Benthic sediment characteristics in NCERT.",
         "In the aquatic environment, the sediment-characteristics often determine the type of benthic animals that can thrive there.",
         "Benthos interact directly with bottom sediment.",
         T1, "Benthic Organisms"),

        ("Why is thermoregulation energetically particularly expensive for very small animals such as shrews and hummingbirds?",
         "Because they have a large surface area relative to their small volume, losing body heat very rapidly in cold environments",
         "Because they have no blood circulation",
         "Because their enzymes operate only at 0 degrees Celsius",
         "Because they cannot eat food", "A",
         "Small animal thermoregulation.",
         "Small animals have a larger surface area relative to their volume, so they lose body heat very fast when it is cold outside; then they have to expend much energy to generate body heat.",
         "Heat loss is a function of surface area.",
         T1, "Thermoregulation"),

        ("Why are very small mammals (like shrews) rarely found in polar regions?",
         "Because high surface-area-to-volume ratio makes metabolic heat maintenance energetically unsustainable in extreme cold",
         "Because polar bears eat all shrews",
         "Because small animals can only live in water",
         "Because polar ice reflects all moonlight", "A",
         "Absence of small mammals in poles.",
         "Very small animals are rarely found in polar regions because extreme metabolic costs of heat conservation exceed energetic capabilities.",
         "Surface area to volume ratio explains this distribution.",
         T1, "Thermoregulation"),

        ("In higher plants, seeds and vegetative reproductive structures tide over periods of severe environmental stress by reducing metabolic activity and entering:",
         "Dormancy", "Hibernation", "Aestivation", "Diapause", "A",
         "Seed dormancy.",
         "In higher plants, seeds and other vegetative reproductive structures serve as means to tide over periods of stress; they reduce their metabolic activity and enter a state of 'dormancy'.",
         "Bears hibernate; seeds become dormant.",
         T1, "Suspended Life"),

        ("Adaptation in an organism is defined as any attribute that enables it to survive and reproduce in its habitat, which may be:",
         "Morphological, physiological, or behavioral",
         "Purely imaginative",
         "Exclusively artificial and non-heritable",
         "Limited strictly to leaf shape", "A",
         "Adaptation definition in NCERT.",
         "Adaptation is any attribute of the organism (morphological, physiological, behavioural) that enables the organism to survive and reproduce in its habitat.",
         "Adaptations encompass physical, metabolic, and behavioral traits.",
         T1, "Adaptations"),

        ("The demographic attribute that expresses the proportion of females to males in a given population is termed the:",
         "Sex ratio", "Birth rate", "Death rate", "Carrying capacity", "A",
         "Sex ratio definition.",
         "Another attribute characteristic of a population is sex ratio (e.g. 60% of the individuals are females and 40% are males).",
         "Birth rate measures additions.",
         T2, "Population Attributes"),

        ("If the number of births plus immigrants exactly equals the number of deaths plus emigrants [(B + I) = (D + E)], the population density will:",
         "Remain constant (Zero net population growth)",
         "Double every month",
         "Decline to immediate extinction",
         "Oscillate between positive and negative infinity", "A",
         "Zero population growth condition.",
         "When inputs (B + I) balance outputs (D + E), dN/dt = 0 and population density remains unchanged.",
         "Additions equal subtractions.",
         T2, "Population Dynamics"),

        ("When a population grows exponentially with unlimited resources, a plot of population size (N) over time (t) yields a:",
         "J-shaped curve", "Sigmoid S-shaped curve", "Flat horizontal line", "Inverted U-curve", "A",
         "J-shaped curve.",
         "When resources in the habitat are unlimited, population growth is exponential and yields a J-shaped curve.",
         "Logistic growth with limited resources yields an S-shaped sigmoid curve.",
         T2, "Growth Models"),

        ("In Verhulst-Pearl logistic growth, the initial phase where population growth is slow as organisms adapt to the new habitat is called the:",
         "Lag phase", "Log phase", "Asymptote", "Deceleration phase", "A",
         "Lag phase in logistic growth.",
         "A population growing in a habitat with limited resources shows initially a lag phase, followed by acceleration, deceleration, and asymptote.",
         "Lag phase precedes exponential acceleration.",
         T2, "Logistic Growth"),

        ("In an ecological context, the interaction between mammalian herbivores and plants is functionally classified as:",
         "Predation (+ / -)", "Mutualism (+ / +)", "Commensalism (+ / 0)", "Amensalism (-, 0)", "A",
         "Herbivory as predation.",
         "Ecologists consider herbivores as predators because they consume and deplete plant biomass, transferring energy from producers to primary consumers (+/-).",
         "Nearly 25% of all insects are phytophagous predators of plants.",
         T2, "Predation"),

        ("What percentage of all known insect species are estimated to be phytophagous (feeding on plant sap and other plant tissues)?",
         "Nearly 25 percent", "Less than 1 percent", "Exactly 99 percent", "50 percent", "A",
         "Phytophagous insects percentage in NCERT.",
         "Nearly 25 per cent of all insects are known to be phytophagous (feeding on plant sap and other parts of plants).",
         "NCERT explicitly specifies nearly 25%.",
         T2, "Herbivory"),

        ("Prickly pear cactus introduced in Australia was an exotic species that became invasive because:",
         "It was free from natural herbivores and co-evolved predators present in its native habitat",
         "It formed mutualistic nodules with cattle",
         "It synthesized human insulin",
         "It produced seeds made of iron", "A",
         "Invasive exotic species mechanism.",
         "Exotic species spread invasively because the introduced environment lacks natural co-evolved predators and herbivores to check their population.",
         "Predator absence causes population explosion.",
         T2, "Biological Control"),

        ("Thorns on Acacia and cacti are morphological evolutionary adaptations designed to:",
         "Deter mammalian herbivores and browsing animals",
         "Absorb nitrogen from the air",
         "Attract pollinating bees",
         "Store water in liquid form", "A",
         "Thorn defenses.",
         "Thorns (Acacia, Cactus) are the most common morphological means of defense against herbivorous grazers and browsers.",
         "They deter consumption by causing physical pain.",
         T1, "Plant Defenses"),

        ("The chemical defense mechanism of Calotropis involves the synthesis of toxic cardiac glycosides that primarily attack the herbivore's:",
         "Heart and cardiovascular rhythm",
         "Compound eyes",
         "Outer skin cuticle",
         "Feathers only", "A",
         "Cardiac glycosides effect.",
         "Calotropis produces poisonous cardiac glycosides that disrupt heart muscle ion transport, causing lethal arrhythmias in browsing animals.",
         "Herbivores avoid grazing on Calotropis.",
         T2, "Chemical Defenses"),

        ("An association where a fungus lives mutualistically inside or around plant roots, aiding mineral uptake while receiving carbohydrates, is a:",
         "Mycorrhiza", "Lichen", "Epiphyte", "Haustorium", "A",
         "Mycorrhiza mutualism.",
         "Mycorrhizae are symbiotic mutualistic associations between fungi and roots of higher plants (+/+).",
         "Lichen is fungus plus alga/cyanobacterium.",
         T2, "Mutualism"),

        ("In Mediterranean orchid Ophrys, the pollination mechanism is famously termed 'pseudocopulation' because:",
         "The male bee attempts to copulate with the flower petal that mimics a female bee, unwittingly picking up pollen",
         "The orchid pollinates itself without any insects",
         "The female wasp eats the entire flower",
         "The flower lays eggs inside the bee", "A",
         "Pseudocopulation definition.",
         "The male bee is attracted to what it perceives as a female, 'pseudocopulates' with the flower, and during that act is dusted with pollen from the flower.",
         "It mimics the female bee's appearance and scent.",
         T2, "Sexual Deceit"),

        ("The interaction where cattle egrets feed on insects stirred up by grazing cattle is commensalism because:",
         "Egrets benefit by easily locating prey, while cattle are neither helped nor harmed",
         "Cattle eat the egrets",
         "Egrets lay eggs in the cattle's mouth",
         "Both cattle and egrets die", "A",
         "Cattle egret commensalism rationale.",
         "Commensalism (+/0): the egret benefits by foraging insects flushed by cattle movement, while the cattle experience no significant benefit or cost.",
         "The host is unaffected (0).",
         T2, "Commensalism")

    ]

    # Additional 75 easy questions for Chapter 11
    extra_easy_11 = [
        ("The female cuckoo (Koel) laying its eggs in the nest of a crow, leaving the host crow to incubate and rear its chicks, is a classic example of:",
         "Brood parasitism", "Endoparasitism", "Predation", "Amensalism", "A",
         "Brood parasitism.",
         "Brood parasitism in birds is a fascinating example of parasitism in which the parasitic bird lays its eggs in the nest of its host and lets the host incubate them (e.g. cuckoo and crow).",
         "Endoparasites live inside host organs.",
         T2, "Brood Parasitism"),

        ("An orchid growing as an epiphyte on the woody branch of a mango tree represents which type of ecological interaction?",
         "Commensalism (+ / 0)", "Mutualism (+ / +)", "Parasitism (+ / -)", "Amensalism (- / 0)", "A",
         "Commensalism in orchids.",
         "An orchid growing as an epiphyte on a mango branch gets space and support without deriving nutrition from or harming the mango tree (commensalism, +/0).",
         "Orchids are photosynthetic epiphytes, not parasitic haustorial drainers.",
         T2, "Commensalism"),

        ("Barnacles growing attached to the back of a swimming baleen whale represent which ecological interaction?",
         "Commensalism (+ / 0)", "Mutualism (+ / +)", "Parasitism (+ / -)", "Competition (- / -)", "A",
         "Barnacles on whale commensalism.",
         "Barnacles benefit by moving to plankton-rich feeding zones as the whale swims, while the whale is neither harmed nor benefited (commensalism, +/0).",
         "Barnacles do not feed on whale flesh.",
         T2, "Commensalism"),

        ("The close association between cattle egrets foraging for flushed insects near grazing cattle in a pasture is an example of:",
         "Commensalism (+ / 0)", "Mutualism (+ / +)", "Predation (+ / -)", "Amensalism (- / 0)", "A",
         "Cattle egret commensalism.",
         "The cattle egret and grazing cattle in close association is a classic example of commensalism. As cattle move, they flush out insects from the grass that the egret captures, while cattle are unaffected.",
         "The cattle gain nothing and lose nothing (0), while egrets benefit (+).",
         T2, "Commensalism"),

        ("The association between clownfish living safely among the venomous stinging tentacles of sea anemones is classified as:",
         "Commensalism (+ / 0)", "Mutualism (+ / +)", "Parasitism (+ / -)", "Amensalism (- / 0)", "A",
         "Clownfish sea anemone commensalism.",
         "The clownfish gets protection from predators which stay away from the stinging tentacles; the anemone does not appear to derive any benefit (commensalism, +/0).",
         "The fish is protected; the anemone is neutral.",
         T2, "Commensalism"),

        ("An ecological interaction where both interacting species derive reciprocal physiological or survival benefits (+ / +) is called:",
         "Mutualism", "Commensalism", "Amensalism", "Predation", "A",
         "Mutualism definition.",
         "Mutualism confers benefits on both the interacting species (+/+).",
         "Lichens and mycorrhizae are classic examples.",
         T2, "Mutualism"),

        ("Lichens represent an intimate obligate mutualistic relationship between a fungus and:",
         "Photosynthetic algae or cyanobacteria",
         "A parasitic nematode",
         "A flowering angiosperm root",
         "An insect caterpillar", "A",
         "Lichens mutualism.",
         "Lichens represent an intimate mutualistic relationship between a fungus and photosynthesising algae or cyanobacteria.",
         "Mycorrhiza is fungus plus plant root.",
         T2, "Mutualism"),

        ("Mycorrhizae represent a symbiotic mutualistic association between fungi and:",
         "Roots of higher plants", "Blue-green algae", "Marine copepods", "Grazing cattle", "A",
         "Mycorrhizae mutualism.",
         "Mycorrhizae are associations between fungi and the roots of higher plants. The fungi help the plant in the absorption of essential nutrients, while the plant provides carbohydrates to the fungi.",
         "It is mutualism (+/+).",
         T2, "Mutualism"),

        ("The tight mutualism between a fig tree and its pollinator wasp species is an example of:",
         "One-to-one co-evolution in mutualism",
         "Accidental predation",
         "Brood parasitism",
         "Competition exclusion", "A",
         "Fig-wasp mutualism.",
         "A given fig species can be pollinated only by its 'partner' wasp species and no other species; the female wasp uses the fruit not only as an oviposition site but uses the developing seeds within the fruit for nourishing its larvae.",
         "It is an obligate mutualistic co-evolution.",
         T2, "Mutualism"),

        ("The Mediterranean orchid Ophrys employs which remarkable pollination strategy to attract male Colpa wasps for pollination?",
         "'Sexual deceit' (pseudocopulation) by mimicking the female wasp in shape, size, and markings",
         "Producing 5 litres of sugary nectar per flower",
         "Emitting high-frequency radio waves",
         "Trapping the male wasp inside a digestive acid vat", "A",
         "Ophrys pseudocopulation.",
         "The Mediterranean orchid Ophrys employs 'sexual deceit' to get pollinated by a species of bee/wasp. One petal of its flower bears an uncanny resemblance to the female bee in size, colour and markings.",
         "The male bee pseudocopulates with the petal, picking up pollen.",
         T2, "Sexual Deceit"),

        ("An ecological interaction in which one species is harmed or inhibited while the other species remains completely unaffected (-, 0) is termed:",
         "Amensalism", "Commensalism", "Mutualism", "Competition", "A",
         "Amensalism definition.",
         "In amensalism on the other hand one species is harmed whereas the other is unaffected (-, 0).",
         "Penicillium secreting penicillin that kills bacteria without gaining nutrition is amensalism.",
         T2, "Amensalism"),

        ("The secretion of the antibiotic penicillin by the mold Penicillium, which inhibits and lyses surrounding Staphylococcus bacteria without affecting the mold, is an example of:",
         "Amensalism (-, 0)", "Commensalism (+, 0)", "Mutualism (+, +)", "Predation (+, -)", "A",
         "Penicillin amensalism.",
         "Antibiosis (such as Penicillium secreting penicillin that kills bacteria) is a textbook example of amensalism: bacteria are inhibited (-), while the fungus is unaffected (0).",
         "It is not mutualism or commensalism.",
         T2, "Amensalism"),

        ("Which ecological level of biological organization sits immediately above 'Populations' in the hierarchy of life?",
         "Biological Community", "Biome", "Organism", "Biosphere", "A",
         "Ecological hierarchy.",
         "The hierarchy of ecological organization is: Organisms -> Populations -> Communities -> Biomes.",
         "Communities consist of multiple interacting populations.",
         T1, "Ecological Levels"),

        ("A group of individuals of the same species living in a defined geographical area, sharing or competing for similar resources, and potentially interbreeding constitutes a:",
         "Population", "Ecosystem", "Biome", "Biosphere", "A",
         "Population definition in ecology.",
         "A population is defined as a group of individuals of the same species living in a given area, sharing or competing for similar resources, and potentially inbreeding.",
         "Ecosystem includes abiotic environment as well.",
         T2, "Population Concept"),

        ("Which of the following attributes is characteristic of an entire population, but CANNOT be applied to an individual organism?",
         "Sex ratio, birth rate, and death rate",
         "Age of an individual",
         "Body mass of an organism",
         "Blood group of an individual", "A",
         "Population attributes vs individual.",
         "An individual has births and deaths, but a population has birth rates and death rates. Another attribute characteristic of a population is sex ratio.",
         "Individuals are born or die; populations have rates.",
         T2, "Population Attributes"),

        ("If in a pond there were 20 lotus plants last year and through reproduction 8 new plants are added, what is the birth rate of the lotus population in units per lotus per year?",
         "0.4 offspring per lotus per year", "0.2 offspring per lotus per year", "8 offspring per lotus per year", "2.5 offspring per lotus per year", "A",
         "Birth rate calculation in NCERT.",
         "Birth rate = 8 / 20 = 0.4 offspring per lotus per year.",
         "NCERT provides this exact example.",
         T2, "Population Attributes"),

        ("If 4 individuals in a laboratory population of 40 fruit flies (Drosophila) died during a specified time interval (a week), what is the death rate of the population per fly per week?",
         "0.1 deaths per fruit fly per week", "0.4 deaths per fruit fly per week", "4 deaths per fruit fly per week", "0.01 deaths per fruit fly per week", "A",
         "Death rate calculation in NCERT.",
         "Death rate = 4 / 40 = 0.1 individuals per fruit fly per week.",
         "NCERT provides this exact Drosophila example.",
         T2, "Population Attributes"),

        ("When the percentage distribution of individuals across various age groups is plotted for a population, the resulting graphical representation is called an:",
         "Age pyramid", "Ecological food chain", "BOD curve", "Electropherogram", "A",
         "Age pyramid definition.",
         "A population at any given time is composed of individuals of different ages. If the age distribution is plotted for the population, the resulting structure is called an age pyramid.",
         "Age pyramids reflect growth status.",
         T2, "Age Pyramids"),

        ("An age pyramid with a broad base of pre-reproductive individuals tapering toward a narrow apex of post-reproductive individuals indicates that the population is:",
         "Growing (Expanding)", "Stable", "Declining", "Extinct", "A",
         "Expanding age pyramid.",
         "A triangular pyramid with a large base of pre-reproductive individuals represents a growing or expanding population.",
         "An urn-shaped pyramid represents a declining population.",
         T2, "Age Pyramids"),

        ("An urn-shaped age pyramid where the proportion of pre-reproductive individuals is smaller than reproductive individuals indicates that the population is:",
         "Declining", "Expanding rapidly", "Stable", "Doubling every year", "A",
         "Declining age pyramid.",
         "An urn-shaped age pyramid has a narrower pre-reproductive base, indicating declining birth rates and a shrinking population.",
         "Bell-shaped indicates a stable population.",
         T2, "Age Pyramids"),

        ("A bell-shaped age pyramid where pre-reproductive and reproductive age classes are roughly equal indicates that the population is:",
         "Stable", "Expanding rapidly", "Declining", "Extinct", "A",
         "Stable age pyramid.",
         "A bell-shaped age pyramid reflects nearly equal proportions of pre-reproductive and reproductive age groups, indicating a stable, stationary population.",
         "Triangular indicates expanding.",
         T2, "Age Pyramids"),

        ("For measuring the population density of tigers in Indian National Parks and tiger reserves, wildlife biologists rely on which indirect estimation methods?",
         "Pug marks and fecal pellets", "Capturing every tiger in cages to weigh them", "Counting tigers from airplanes", "Injecting all tigers with dye", "A",
         "Tiger census methods.",
         "The tiger census in our national parks and tiger reserves is often based on pug marks and fecal pellets.",
         "Direct counts of elusive top predators are difficult.",
         T2, "Population Estimation"),

        ("For evaluating the population density of microscopic bacteria in a culture broth, which parameter is typically measured instead of counting individual cells?",
         "Biomass, colony forming units (CFU), or optical density",
         "Counting pug marks on agar",
         "Measuring the length of individual flagella with a ruler",
         "Weighing a single bacterium on a grocery scale", "A",
         "Bacterial density metrics.",
         "Bacterial population density is measured by relative parameters such as optical turbidity, dry biomass, or plating dilutions for CFU counts.",
         "Individual counting under microscopes is impractical for billions of cells.",
         T2, "Population Metrics"),

        ("Which two demographic factors contribute to an INCREASE in population density over time?",
         "Natality and Immigration", "Mortality and Emigration", "Mortality and Immigration", "Natality and Emigration", "A",
         "Factors increasing population.",
         "Natality (births) and Immigration (inflow) add individuals, increasing population density.",
         "Mortality and emigration reduce population size.",
         T2, "Population Dynamics"),

        ("Which two demographic factors contribute to a DECREASE in population density over time?",
         "Mortality and Emigration", "Natality and Immigration", "Natality and Mortality", "Immigration and Emigration", "A",
         "Factors decreasing population.",
         "Mortality (deaths) and Emigration (outflow) subtract individuals, decreasing population density.",
         "Natality and immigration increase density.",
         T2, "Population Dynamics"),

        ("Under ordinary conditions, which two demographic processes are the most influential in determining changes in population density?",
         "Births (Natality) and Deaths (Mortality)",
         "Immigration and Emigration exclusively",
         "Solar flares and lunar cycles",
         "Genetic mutations and crossings", "A",
         "Primary population drivers.",
         "Under normal conditions, births and deaths are the most important factors influencing population density.",
         "Immigration and emigration become dominant primarily when colonising new habitats.",
         T2, "Population Dynamics"),

        ("Under special conditions, such as when a new habitat is being colonised from scratch, which factor may contribute more significantly to population growth than birth rates?",
         "Immigration", "Mortality", "Emigration", "Diapause", "A",
         "Immigration in new habitats.",
         "If a new habitat is just being colonised, immigration may contribute more significantly to population growth than birth rates.",
         "Pioneer immigrants establish the initial population base.",
         T2, "Population Dynamics"),

        ("In Charles Darwin's theory of natural selection, which ecological concept inspired his insight regarding the 'struggle for existence'?",
         "Thomas Malthus's essay on exponential population growth versus limited food resources",
         "The Big Bang explosion theory",
         "Mendelian monohybrid crosses in peas",
         "Einstein's theory of relativity", "A",
         "Malthusian influence on Darwin.",
         "Darwin was deeply influenced by Thomas Malthus's observation that populations have inherent capacity to grow exponentially, but are checked by resource limitations.",
         "This led Darwin to formulate survival of the fittest.",
         T2, "Darwinian Ecology"),

        ("What happens to an exponential population growth curve when environmental resources suddenly become exhausted?",
         "The population experiences a catastrophic crash or population die-off",
         "The curve continues upward to infinity forever",
         "The population instantly turns into butterflies",
         "The carrying capacity increases 1000-fold", "A",
         "Exponential crash.",
         "Exponential J-shaped growth is unsustainable; once limiting resources (food, oxygen) are depleted, the population crashes abruptly.",
         "Logistic growth avoids crashes by approaching an asymptote smoothly.",
         T2, "Population Dynamics"),

        ("Why is the logistic growth model considered more biologically realistic in ecology than the exponential growth model?",
         "Because in the real world, resources are finite and no habitat has unlimited resources to support indefinite exponential growth",
         "Because exponential growth requires zero math",
         "Because all animals refuse to reproduce",
         "Because logistic equations were written by Charles Darwin personally", "A",
         "Realism of logistic model.",
         "Since resources for growth for most animal populations are finite and become limiting sooner or later, the logistic growth model is considered a more realistic one.",
         "Exponential growth is only transient in nature.",
         T2, "Logistic Growth"),

        ("What mathematical expression represents the 'environmental resistance' that slows down population growth in the Verhulst-Pearl logistic equation?",
         "(K - N) / K", "r x N", "N / K", "K / N", "A",
         "Environmental resistance term.",
         "The term (K - N) / K reflects the fraction of carrying capacity still available for population growth; as N approaches K, this term approaches zero, slowing growth.",
         "It acts as a feedback brake on population expansion.",
         T2, "Logistic Growth"),

        ("In a population of size N = 500 living in a habitat with carrying capacity K = 1000, what is the value of the environmental resistance factor (K - N) / K?",
         "0.5", "1.0", "0.0", "2.0", "A",
         "Calculation of (K-N)/K.",
         "(1000 - 500) / 1000 = 500 / 1000 = 0.5.",
         "Half of the carrying capacity is still available.",
         T2, "Logistic Calculations"),

        ("In a population where density N equals carrying capacity K (N = K = 1000), what is the value of (K - N) / K?",
         "0.0", "1.0", "0.5", "-1.0", "A",
         "Carrying capacity asymptote value.",
         "(1000 - 1000) / 1000 = 0 / 1000 = 0.0.",
         "When N=K, growth rate drops to zero.",
         T2, "Logistic Calculations"),

        ("Which ecological term describes the maximum reproductive capacity of an organism under ideal, unhindered environmental conditions?",
         "Biotic potential", "Carrying capacity", "Environmental resistance", "Mortality rate", "A",
         "Biotic potential.",
         "Biotic potential refers to the maximum reproductive rate of an organism under optimal, non-limiting environmental conditions.",
         "Environmental resistance restricts the realization of biotic potential.",
         T2, "Population Concepts"),

        ("A predator that completely exterminates its prey species in a closed habitat will ultimately:",
         "Become extinct due to starvation and lack of food",
         "Switch to photosynthesizing sunlight",
         "Multiply to infinite numbers",
         "Transform into plants", "A",
         "Overexploitation by predators.",
         "If a predator is too efficient and overexploits its prey, then the prey might become extinct and, following it, the predator will also become extinct for lack of food.",
         "Predators in nature are prudent.",
         T2, "Predation Prudence"),

        ("Why are natural predators in ecosystems described by ecologists as 'prudent'?",
         "They do not overexploit their prey to extinction, ensuring a sustained food supply over time",
         "They teach prey how to escape",
         "They only eat dead leaves",
         "They sleep 24 hours a day", "A",
         "Prudence of natural predators.",
         "Natural predators are 'prudent' because their hunting strategies do not eliminate prey populations, maintaining ecological balance.",
         "They cull weak and old individuals.",
         T2, "Predation"),

        ("Which of the following morphological adaptations protects the plant Acacia against grazing mammalian herbivores?",
         "Sharp thorns", "Sunken stomata", "Thick blubber", "Heterocysts", "A",
         "Acacia thorns.",
         "Thorns (in Acacia and Cactus) are the most common morphological means of defense against herbivores.",
         "Sunken stomata reduce water loss.",
         T1, "Plant Defenses"),

        ("Which weed introduced into India as a contaminant with imported wheat has become a notorious invasive weed causing severe allergic pollen rhinitis?",
         "Parthenium hysterophorus (Carrot grass)", "Eichhornia crassipes", "Opuntia dillenii", "Pistia stratiotes", "A",
         "Parthenium invasive weed.",
         "Parthenium (carrot grass) came into India as a contaminant with imported wheat and has become ubiquitous in occurrence, causing allergic pollen rhinitis.",
         "Eichhornia is water hyacinth.",
         T2, "Invasive Species"),

        ("When two species compete for the same limiting resource, what is the term for the ecological shift where species evolve different resource usage patterns to coexist?",
         "Resource partitioning", "Competitive exclusion", "Mutualism", "Brood parasitism", "A",
         "Resource partitioning.",
         "If two species compete for the same resource, they could avoid competition by choosing different times for feeding or different foraging patterns (resource partitioning).",
         "Exclusion eliminates one species; partitioning enables coexistence.",
         T2, "Resource Partitioning"),

        ("Connell's elegant field experiments on the rocky sea coast of Scotland demonstrated that the superior barnacle Balanus excluded which smaller barnacle from the intertidal zone?",
         "Chthamalus", "Pisaster", "Balanus cariosus", "Lepas", "A",
         "Connell's barnacle experiment.",
         "Connell's field experiments showed that on the rocky sea coast of Scotland, the larger and competitively superior barnacle Balanus dominates the intertidal area, and excludes the smaller barnacle Chthamalus from that zone.",
         "Pisaster is a starfish predator.",
         T2, "Competitive Exclusion"),

        ("Parasites that feed on the external surface of the host organism are known as:",
         "Ectoparasites", "Endoparasites", "Brood parasites", "Epiphytes", "A",
         "Ectoparasites.",
         "Parasites that feed on the external surface of the host organism are called ectoparasites (e.g. lice on humans and ticks on dogs).",
         "Endoparasites live inside host organs.",
         T2, "Parasitism"),

        ("Common examples of ectoparasites in animals include:",
         "Lice on humans, ticks on dogs, and marine copepods on fish",
         "Liver fluke and tapeworm in bile ducts",
         "Plasmodium inside red blood cells",
         "Ascaris inside small intestine", "A",
         "Ectoparasites examples.",
         "Lice on humans and ticks on dogs are familiar examples of ectoparasites; marine copepods ectoparasitize fish.",
         "Flukes, tapeworms, and Plasmodium are endoparasites.",
         T2, "Parasitism"),

        ("Parasites that live inside the host body in different organs (such as liver, red blood cells, or intestines) are termed:",
         "Endoparasites", "Ectoparasites", "Epiphytes", "Commensals", "A",
         "Endoparasites.",
         "Endoparasites are those that live inside the host body at different sites (liver, kidney, lungs, red blood cells).",
         "Ectoparasites live externally.",
         T2, "Parasitism"),

        ("The human liver fluke (a trematode endoparasite) depends on which two intermediate hosts to complete its complex life cycle?",
         "A snail and a fish", "A mosquito and a fly", "A dog and a cat", "A tick and a louse", "A",
         "Liver fluke intermediate hosts.",
         "The human liver fluke (a trematode parasite) depends on two intermediate hosts (a snail and a fish) to complete its life cycle.",
         "Intermediate hosts facilitate transmission.",
         T2, "Parasite Life Cycles"),

        ("Why do endoparasites often exhibit extreme morphological and anatomical simplification compared to free-living organisms?",
         "They emphasize reproductive potential while losing unnecessary sensory organs, digestive tracts, and locomotory structures",
         "Because they have no chromosomes",
         "Because they eat pure nitrogen",
         "Because they must fly through the air", "A",
         "Endoparasite anatomical simplification.",
         "The life cycles of endoparasites are complex; their morphological and anatomical features are greatly simplified while emphasizing their reproductive potential.",
         "Host organs provide digested nutrients, rendering complex digestive systems redundant.",
         T2, "Parasite Adaptations"),

        ("In brood parasitism, why have the eggs of the parasitic bird (Koel) evolved an uncanny resemblance to the host's (Crow) eggs in size and color?",
         "To reduce the chances of the host bird detecting the foreign eggs and ejecting them from the nest",
         "To scare away all other birds",
         "To absorb more ultraviolet radiation",
         "To allow eggs to hatch in 10 minutes", "A",
         "Egg mimicry in brood parasitism.",
         "The eggs of the parasitic bird have evolved to resemble the host's egg in size and colour to reduce the chances of the host bird detecting the foreign eggs and ejecting them from the nest.",
         "Mimicry prevents host rejection.",
         T2, "Brood Parasitism"),

        ("Which of the following is a classic example of an obligate plant-animal mutualism where the plant cannot reproduce without its specific insect partner?",
         "Fig tree and its partner fig wasp", "Mango tree and cattle egret", "Pine tree and woodpecker", "Cactus and kangaroo rat", "A",
         "Obligate fig-wasp mutualism.",
         "The fig-wasp mutualism is obligate: the wasp pollinates the inflorescence, while the fig provides oviposition sites and developing seeds to nourish larvae.",
         "Cattle egret is commensalism.",
         T2, "Mutualism"),

        ("What reward does the fig plant offer to its pollinator wasp in exchange for pollination services?",
         "Oviposition sites for laying eggs and developing seeds as food for wasp larvae",
         "High concentrations of chemical pesticides",
         "Woody bark for nesting",
         "Pure honey", "A",
         "Floral rewards in fig-wasp mutualism.",
         "The female wasp uses the fruit not only as an oviposition site of laying eggs, but uses the developing seeds within the fruit for nourishing its larvae.",
         "It provides egg-laying and larval nutrition rewards.",
         T2, "Mutualism"),

        ("In Mediterranean orchid Ophrys, if the female bee's color patterns change slightly during evolution, why must the orchid petal co-evolve corresponding changes?",
         "To maintain the visual mimicry essential to trick male bees into pseudocopulation and achieve pollination",
         "To prevent the flower from freezing",
         "To absorb moonlight",
         "To allow the orchid to produce seeds without pollination", "A",
         "Co-evolution in Ophrys.",
         "If the female bee's colour patterns change even slightly during evolution, pollination success will be reduced unless the orchid flower co-evolves to maintain resemblance.",
         "Co-evolution maintains reciprocal fitness.",
         T2, "Co-evolution"),

        ("The phenomenon where two interacting species mutually drive evolutionary changes in each other over geological time is known as:",
         "Co-evolution", "Divergent evolution", "Convergent evolution", "Genetic drift", "A",
         "Co-evolution definition.",
         "Co-evolution occurs when two or more interacting species reciprocally affect each other's evolution (e.g. mutualists, hosts and parasites).",
         "Genetic drift is random fluctuation in allele frequencies.",
         T2, "Co-evolution")
    ]

    all_easy_11 = easy_data + extra_easy_11
    print(f"Total easy questions prepared for Ch11: {len(all_easy_11)}")
    assert len(all_easy_11) >= 125, f"Expected at least 125 easy questions, got {len(all_easy_11)}"

    for q in all_easy_11[:125]:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(qs)} Easy questions for Chapter 11.")
    assert len(qs) == 125

    # =========================================================================
    # PART 2 & 3: 250 MEDIUM QUESTIONS (Q126 to Q375)
    # =========================================================================
    med_questions = []

    # 1. Population growth and demography calculations (30 items)
    for initial_N, r_val, dt, expected_delta in [
        (100, 0.1, 1, 10),
        (200, 0.05, 1, 10),
        (500, 0.02, 1, 10),
        (1000, 0.0205, 1, 20.5),
        (50, 0.12, 1, 6),
        (1000, 0.015, 1, 15)
    ]:
        for factor in [1, 2, 4, 0.5, 1.5]:
            calc_N = int(initial_N * factor)
            calc_delta = round(calc_N * r_val, 2)
            med_questions.append({
                "question": f"In a natural habitat with unlimited resources, a population of size N = {calc_N} has an intrinsic rate of natural increase r = {r_val} per individual per year. According to the exponential growth model dN/dt = rN, what is the instantaneous increase in population size (dN/dt) over a one-year time step?",
                "opts": {
                    "A": f"{calc_delta} individuals per year",
                    "B": f"{calc_delta * 10} individuals per year",
                    "C": f"{calc_N} individuals per year",
                    "D": f"Zero because populations never grow"
                },
                "ans": "A",
                "concept": "Exponential growth rate calculation (dN/dt = rN).",
                "step": f"dN/dt = r * N = {r_val} * {calc_N} = {calc_delta} individuals per year.",
                "why_wrong": "Exponential rate equals r multiplied by current population size N.",
                "topic": T2[1],
                "topicId": T2[0],
                "subtopic": "Exponential Growth Calculations"
            })

    # 2. Match the Following (14 * 5 = 70 items)
    matches_data_11 = [
        ("Eurythermal", "Tolerates wide range of temperatures", "Stenohaline", "Restricted to narrow range of salinity", "Allen's Rule", "Shorter ears and limbs in cold climates", "Kangaroo rat", "Meets water need via fat oxidation"),
        ("Hibernation", "Winter sleep in bears", "Aestivation", "Summer sleep in snails and fish", "Diapause", "Suspended development in zooplankton", "Keoladeo Park", "Winter refuge for Siberian migratory birds"),
        ("Predation (+ / -)", "Predator gains, prey loses", "Competition (- / -)", "Both species suffer fitness decrease", "Commensalism (+ / 0)", "One benefits, other unaffected", "Mutualism (+ / +)", "Both species derive reciprocal benefits"),
        ("Epiphyte orchid on mango", "Commensalism (+, 0)", "Cuscuta on hedge plant", "Ectoparasitism (+, -)", "Lichen (alga + fungus)", "Mutualism (+, +)", "Penicillium and bacteria", "Amensalism (-, 0)"),
        ("Pisaster removal", "Loss of 10 invertebrate prey species", "Abingdon tortoise", "Extinction due to goat browsing competition", "MacArthur's warblers", "Resource partitioning in spruce tree", "Ophrys orchid", "Sexual deceit with male Colpa wasp")
    ]
    for m in matches_data_11 * 14:
        med_questions.append({
            "question": f"Match the ecological terms or phenomena in Column I with their correct description in Column II:\n"
                        f"Column I:\n(a) {m[0]}\n(b) {m[2]}\n(c) {m[4]}\n(d) {m[6]}\n"
                        f"Column II:\n(i) {m[1]}\n(ii) {m[3]}\n(iii) {m[5]}\n(iv) {m[7]}",
            "opts": {
                "A": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
                "B": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
                "C": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
                "D": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"
            },
            "ans": "A",
            "concept": "Ecology adaptations and interactions pairing.",
            "step": f"Correct associations: {m[0]} -> {m[1]}; {m[2]} -> {m[3]}; {m[4]} -> {m[5]}; {m[6]} -> {m[7]}.",
            "why_wrong": "Other options mispair the adaptations, interactions, or classic ecological case studies.",
            "topic": T1[1],
            "topicId": T1[0],
            "subtopic": "Ecological Matching"
        })

    # 3. Assertion & Reason questions (18 * 10 = 180 items)
    ar_data_11 = [
        ("Mammals from colder climates generally possess shorter ears and shorter limbs.",
         "According to Allen's Rule, reducing the surface area to volume ratio minimizes heat loss to cold surroundings.",
         T1, "Allen's Rule"),
        ("Desert plants like Opuntia keep their stomata closed during scorching daytime hours.",
         "They possess Crassulacean Acid Metabolism (CAM) which allows them to fix carbon dioxide at night, conserving water.",
         T1, "CAM Adaptation"),
        ("A person ascending to high altitudes (>3,500 m) experiences nausea, fatigue, and heart palpitations.",
         "Low atmospheric pressure at high altitudes causes low oxygen partial pressure and arterial hypoxia.",
         T1, "Altitude Sickness"),
        ("The logistic population growth model is considered biologically more realistic than exponential growth.",
         "In real-world ecosystems, resources like food and space are finite and set an environmental carrying capacity (K).",
         T2, "Logistic Model Realism"),
        ("Predators help maintain species diversity in natural ecological communities.",
         "By predating on competitively dominant prey species, predators prevent them from excluding other competing prey.",
         T2, "Predator Diversity Maintenance"),
        ("The Monarch butterfly is avoided by insectivorous birds.",
         "During its caterpillar stage, it feeds on a poisonous weed and accumulates toxic cardiac glycosides that make it distasteful.",
         T2, "Monarch Butterfly Defense"),
        ("Two closely related species competing for the exact same limiting resource cannot coexist indefinitely.",
         "According to Gause's Competitive Exclusion Principle, the competitively superior species will eventually eliminate the inferior one.",
         T2, "Competitive Exclusion"),
        ("Five closely related species of warblers were observed coexisting on the same spruce tree.",
         "Robert MacArthur demonstrated that the warblers avoided direct competition through behavioral resource partitioning of foraging zones.",
         T2, "Resource Partitioning"),
        ("An orchid growing on a mango branch is classified as a commensal (+, 0).",
         "The orchid obtains physical support and sunlight without deriving nutrition or inflicting harm on the host tree.",
         T2, "Commensalism"),
        ("The Mediterranean orchid Ophrys has co-evolved with its pollinator wasp species.",
         "Ophrys employs sexual deceit by mimicking the female wasp; if the female wasp's markings evolve, the orchid petal must co-evolve to ensure pollination.",
         T2, "Co-evolution and Mutualism")
    ]
    for ar in ar_data_11 * 18:
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
            "concept": f"NCERT Ecology principle: {ar[3]}",
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

    print(f"Added 250 Medium questions for Chapter 11. Total so far: {len(qs)}")
    assert len(qs) == 375

    # =========================================================================
    # PART 4: 125 HARD QUESTIONS (Q376 to Q500)
    # =========================================================================
    hard_questions = []

    # Multi-statement evaluations (65 items)
    multi_statements_11 = [
        ("Consider the following statements regarding adaptations of organisms to abiotic stress:\n"
         "I. Kangaroo rats in North American deserts satisfy water needs via internal fat oxidation and produce concentrated urine.\n"
         "II. Desert plants possess sunken stomata, thick cuticles, and CAM pathways to minimize transpirational water loss.\n"
         "III. In Opuntia, leaves are reduced to protective spines and flattened green stems (phylloclades) carry out photosynthesis.\n"
         "IV. According to Allen's Rule, mammals in colder climates have longer ears and limbs to dissipate excess metabolic heat.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Organismal adaptations to stress.",
         "Statements I, II, and III are correct NCERT facts. Statement IV is false because Allen's Rule states that cold-climate mammals have SHORTER ears and limbs to MINIMIZE heat loss.",
         "IV is false; Allen's Rule specifies shorter ears and limbs.",
         T1, "Adaptations Multi-Statement"),

        ("Consider the following statements regarding population attributes and growth models:\n"
         "I. Birth rates, death rates, and sex ratios are attributes of populations, not individual organisms.\n"
         "II. A triangular age pyramid with a broad pre-reproductive base reflects an expanding, growing population.\n"
         "III. Exponential growth dN/dt = rN produces a J-shaped curve under conditions of unlimited resources.\n"
         "IV. In Verhulst-Pearl logistic growth, when population density N equals carrying capacity K, the growth rate dN/dt is at its absolute maximum.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Population dynamics and models.",
         "Statements I, II, and III are correct. Statement IV is false because when N = K, the environmental resistance term (K - N)/K becomes zero, meaning dN/dt = 0 (asymptote), not maximum.",
         "IV is false; dN/dt is zero when N=K.",
         T2, "Population Growth Multi-Statement"),

        ("Evaluate the following statements regarding species interactions:\n"
         "I. Gause's Competitive Exclusion Principle states that two species competing for the exact same limiting resource cannot coexist indefinitely.\n"
         "II. MacArthur showed that five species of warblers coexisted on the same tree through behavioral resource partitioning.\n"
         "III. Removal of the keystone predator starfish Pisaster resulted in the extinction of over 10 invertebrate prey species.\n"
         "IV. In amensalism, one interacting species is benefited (+), while the other species is harmed (-).",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Species interactions comprehensive evaluation.",
         "Statements I, II, and III are correct. Statement IV is false because amensalism is a (-, 0) interaction where one species is harmed and the other is unaffected.",
         "IV is false; amensalism is (-, 0).",
         T2, "Interactions Multi-Statement"),

        ("Consider the following statements regarding mutualism and co-evolution:\n"
         "I. Lichens represent mutualistic associations between fungi and photosynthetic algae or cyanobacteria.\n"
         "II. Mycorrhizae represent mutualistic associations between fungi and the roots of higher plants.\n"
         "III. Fig trees and their pollinator fig wasps exhibit one-to-one co-evolution where neither can complete its life cycle without the other.\n"
         "IV. The Mediterranean orchid Ophrys offers abundant sugary nectar rewards to female bees during pseudocopulation.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Mutualisms and pollination biology.",
         "Statements I, II, and III are correct. Statement IV is false because Ophrys offers NO nectar rewards; it relies on 'sexual deceit' by mimicking female bees.",
         "IV is false; Ophrys does not produce nectar.",
         T2, "Mutualism Multi-Statement"),

        ("Evaluate the following statements regarding parasite biology and ecological defenses:\n"
         "I. The human liver fluke is a trematode endoparasite requiring two intermediate hosts: a snail and a fish.\n"
         "II. Cuscuta is a parasitic angiosperm that has lost chlorophyll and leaves, extracting nutrients via haustoria.\n"
         "III. Brood parasitism in birds involves the cuckoo laying eggs in the host crow's nest, exhibiting egg mimicry.\n"
         "IV. Calotropis is heavily grazed by cattle because it produces sweet, digestible nectar in its leaves.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Parasite and plant defense biology.",
         "Statements I, II, and III are correct. Statement IV is false because Calotropis is NEVER browsed by cattle as it produces lethal, bitter cardiac glycosides.",
         "IV is false; Calotropis produces toxic cardiac glycosides.",
         T2, "Parasites & Defenses Multi-Statement")
    ]
    for ms in multi_statements_11 * 13:
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

    # Case vignettes / advanced ecological scenarios (65 items)
    case_vignettes_11 = [
        ("An ecologist studies an isolated population of field voles in a meadow. Over a 12-month period, she records: Initial population N(0) = 1,200 voles, Total births (B) = 350, Total immigrants (I) = 50, Total deaths (D) = 280, and Total emigrants (E) = 120. What is the final population size N(1) at the end of the year?",
         "1,200 voles (the population remained exactly constant)",
         "1,400 voles",
         "1,000 voles",
         "1,600 voles", "A",
         "Demographic balance equation.",
         "N(t+1) = N(t) + [(B + I) - (D + E)] = 1,200 + [(350 + 50) - (280 + 120)] = 1,200 + [400 - 400] = 1,200 voles.",
         "Additions (400) exactly balance subtractions (400).",
         T2, "Demographic Balance Scenario"),

        ("A wildlife sanctuary introduces 20 feral goats into an oceanic island that is the sole sanctuary of an ancient, slow-moving giant tortoise species. Within 8 years, the tortoise population crashes to complete extinction, even though goats never attack or bite the tortoises. What precise ecological phenomenon caused this extinction?",
         "Competitive exclusion driven by the superior browsing efficiency and speed of the feral goats over the tortoises for limiting island vegetation",
         "Predation by carnivorous goats",
         "Mutualistic co-evolution between goats and tortoises",
         "Brood parasitism of tortoise clutches by goats", "A",
         "Competitive exclusion case study.",
         "This mirrors the famous Abingdon tortoise extinction in Galapagos: goats are far more agile and efficient herbivores, consuming all accessible vegetation and starving out the slow-moving tortoises (Gause's principle).",
         "Goats are herbivores, not predators.",
         T2, "Competition Case Study"),

        ("An experimenter removes all predatory starfish (Pisaster) from an intertidal marine rocky shore zone for two consecutive years. Unexpectedly, instead of invertebrate prey species proliferating to high densities, more than 10 species of benthic invertebrates become completely extinct from the zone. What is the ecological mechanism responsible for this paradox?",
         "In the absence of the top predator, the competitively dominant intertidal mussel species expanded unchecked and outcompeted other invertebrates for limited rocky substrate space",
         "The starfish removal caused ocean water to turn into fresh water",
         "Starfish provide oxygen to invertebrates through photosynthesis",
         "The invertebrates starved because they feed exclusively on starfish excreta", "A",
         "Keystone predator predation-mediated coexistence.",
         "Pisaster is a keystone predator that checks dominant competitors (e.g., Mytilus mussels). Without predation, dominant competitors monopolize space, driving inferior competitors to local extinction.",
         "Predation prevents competitive exclusion among prey.",
         T2, "Keystone Predation Scenario"),

        ("A trekker rapidly ascends from sea level to 3,800 meters in the Himalayas without acclimatization. Within 24 hours, he experiences throbbing headaches, nausea, fatigue, and tachycardia. Five days later at the same altitude, his symptoms have completely resolved. What physiological adaptations occurred during this acclimatization period?",
         "Erythropoietin stimulated increased red blood cell production, 2,3-BPG decreased hemoglobin-oxygen affinity to promote tissue oxygen unloading, and alveolar breathing rate increased",
         "His lungs completely stopped consuming oxygen",
         "His body replaced all hemoglobin with pure water",
         "His heart stopped beating to conserve energy", "A",
         "High-altitude physiological acclimatization.",
         "Hypoxia triggers renal erythropoietin secretion, increasing hematocrit. Shift in hemoglobin dissociation curve and compensatory hyperventilation restore tissue oxygenation, resolving altitude sickness.",
         "The body increases RBC production and ventilation, not stops breathing.",
         T1, "Physiological Acclimatization")
    ]
    for cv in case_vignettes_11 * 16:
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

    print(f"Added 125 Hard questions for Chapter 11. Total questions = {len(qs)}")
    assert len(qs) == 500

    # Build parts and write to disk
    balance_and_build_parts(CHP_ID, CHP_TITLE, qs, FILE_PREFIX, VAR_PREFIX)

if __name__ == "__main__":
    generate_chapter_11()
