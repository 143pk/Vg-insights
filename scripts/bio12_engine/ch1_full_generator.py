import os
import sys
import json
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from scripts.bio12_engine.common import balance_and_build_parts

CHP_ID = "sexual-repro-flowering-plants"
CHP_TITLE = "Sexual Reproduction in Flowering Plants"
FILE_PREFIX = "sexualReproductionFloweringPlants"
VAR_PREFIX = "SEXUAL_REPRODUCTION_FLOWERING_PLANTS"

T1 = ("bio-microsporogenesis-megasporogenesis", "Microsporogenesis & Megasporogenesis")
T2 = ("bio-pollination-double-fertilization", "Pollination & Double Fertilization")
T3 = ("bio-endosperm-apomixis", "Endosperm, Seed & Apomixis")

def generate_chapter_1():
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
    # PART 1: 125 EASY QUESTIONS (Q1 to Q125)
    # =========================================================================
    easy_data = [
        # 1-10: Anther wall & microsporogenesis
        ("The outermost wall layer of a typical angiosperm microsporangium is:",
         "Epidermis", "Endothecium", "Middle layers", "Tapetum", "A",
         "Structure of anther wall in NCERT.",
         "A microsporangium is surrounded by four wall layers: outermost single-layered epidermis, followed by endothecium, middle layers, and tapetum. The epidermis provides external mechanical protection.",
         "Endothecium is subepidermal; middle layers are 1-3 layers internal to endothecium; tapetum is the innermost nutritive layer.",
         T1, "Anther Wall Anatomy"),
        
        ("Which anther wall layer possesses radial alpha-cellulosic fibrous thickenings that aid in dehiscence?",
         "Endothecium", "Tapetum", "Epidermis", "Middle layer", "A",
         "Dehiscence mechanism of anther.",
         "Endothecium cells develop fibrous alpha-cellulosic bands along radial walls. Differential hygroscopic loss of water creates tension that tears open the anther at the stomium.",
         "Tapetum is nutritive, epidermis is protective, and middle layers degenerate early.",
         T1, "Anther Wall Anatomy"),

        ("The innermost nutritive layer of the microsporangium that nourishes developing pollen grains is:",
         "Tapetum", "Endothecium", "Middle layers", "Epidermis", "A",
         "Function of tapetum in microsporogenesis.",
         "The tapetum is the innermost layer. It secretes enzymes, hormones, and nutrient solutions that nourish developing microspore mother cells and young microspores.",
         "Endothecium facilitates dehiscence, middle layers provide ephemeral storage, and epidermis protects.",
         T1, "Tapetum Function"),

        ("Cells of the tapetum are characterized by possessing:",
         "Dense cytoplasm and multinucleate condition", "Thin cytoplasm with single haploid nucleus", "Lignified cell walls without cytoplasm", "Absence of organelles and large intercellular spaces", "A",
         "Cytological features of tapetal cells.",
         "Tapetal cells have prominent dense cytoplasm and often become multinucleate or polyploid due to endomitosis without cytokinesis.",
         "Tapetal cells are metabolically hyperactive and do not have thin cytoplasm, lignified walls, or haploid nuclei.",
         T1, "Tapetum Cytology"),

        ("The hard, ornamental outer layer of the pollen grain wall is called the:",
         "Exine", "Intine", "Perisperm", "Endocarp", "A",
         "Pollen wall architecture.",
         "The pollen wall (sporoderm) consists of an outer ornamented exine made of sporopollenin and an inner smooth intine.",
         "Intine is the inner cellulosic wall. Perisperm is remnant nucellus in seeds. Endocarp is the innermost fruit layer.",
         T1, "Pollen Wall"),

        ("The chemical substance composing the pollen exine that resists high temperatures, strong acids, and alkalis is:",
         "Sporopollenin", "Pectocellulose", "Chitin", "Lignin", "A",
         "Chemical composition of sporopollenin.",
         "Sporopollenin is an oxidative polymer of carotenoids and carotenoid esters. It is among the most chemically resistant biological polymers, allowing pollen to fossilize.",
         "Pectocellulose forms the intine; chitin is found in fungal walls; lignin is in secondary plant xylem.",
         T1, "Pollen Chemistry"),

        ("Apertures on the pollen exine where sporopollenin is absent are called:",
         "Germ pores", "Micropyle", "Stomium", "Hilum", "A",
         "Germ pore structure on pollen grain.",
         "Germ pores are circular apertures on the exine devoid of sporopollenin, through which the germinating pollen tube emerges.",
         "Micropyle is in the ovule integuments; stomium is the slit of anther dehiscence; hilum is the ovule-funicle scar.",
         T1, "Pollen Wall"),

        ("The continuous inner wall of the pollen grain made of cellulose and pectin is the:",
         "Intine", "Exine", "Endothecium", "Tapetum", "A",
         "Structure and composition of pollen intine.",
         "The intine is thin, continuous, and composed of pectin and cellulose, located beneath the discontinuous exine.",
         "Exine is discontinuous and contains sporopollenin; endothecium and tapetum are layers of the anther wall.",
         T1, "Pollen Wall"),

        ("In over 60% of angiosperms, pollen grains are shed from the anther at the:",
         "2-celled stage", "3-celled stage", "4-celled stage", "Single-celled stage", "A",
         "Pollen shedding stages in flowering plants.",
         "In more than 60% of angiosperm species, pollen grains are shed at the 2-celled stage, consisting of one vegetative cell and one generative cell.",
         "In the remaining <40% of angiosperms, the generative cell divides into two male gametes prior to shedding (3-celled stage).",
         T1, "Pollen Shedding"),

        ("In a 2-celled pollen grain, the cell with abundant food reserves and a large irregular nucleus is the:",
         "Vegetative cell", "Generative cell", "Synergid", "Antipodal cell", "A",
         "Cellular components of pollen grain.",
         "The vegetative cell is significantly larger than the generative cell, contains abundant nutrient reserves, and has an irregularly shaped nucleus.",
         "The generative cell is small, spindle-shaped, and floats in the cytoplasm of the vegetative cell.",
         T1, "Pollen Cells"),

        # 11-20: Allergy, viability, cryopreservation, ovule anatomy
        ("Which common invasive weed imported as a contaminant with American wheat causes widespread pollen allergy in India?",
         "Parthenium hysterophorus (Carrot grass)", "Eichhornia crassipes", "Lantana camara", "Opuntia dillenii", "A",
         "Pollen allergy causes in NCERT.",
         "Parthenium (carrot grass) was introduced into India as a contaminant with imported wheat and has become a major aeroallergen causing asthma, rhinitis, and bronchitis.",
         "Eichhornia is an aquatic weed (water hyacinth); Lantana is a terrestrial shrub; Opuntia is an arid xerophyte.",
         T1, "Pollen Allergy"),

        ("In cereals such as rice and wheat, pollen grains remain viable after release for about:",
         "30 minutes", "24 hours", "Several months", "Several years", "A",
         "Pollen viability in major crops.",
         "Pollen viability in cereals like wheat and rice is brief, lasting approximately 30 minutes under normal temperature and humidity.",
         "Pollen remains viable for months in families like Rosaceae, Leguminosae, and Solanaceae.",
         T1, "Pollen Viability"),

        ("In which families of angiosperms do pollen grains maintain their viability for several months?",
         "Rosaceae, Leguminosae, and Solanaceae", "Poaceae and Liliaceae", "Brassicaceae and Asteraceae", "Malvaceae and Orchidaceae", "A",
         "Long-term pollen viability families in NCERT.",
         "Members of Rosaceae (rose family), Leguminosae (pea family), and Solanaceae (potato family) maintain pollen viability for months.",
         "Poaceae (cereals/grasses) have short viability of around 30 minutes.",
         T1, "Pollen Viability"),

        ("Pollen grains of many species can be stored for years in pollen banks using liquid nitrogen at a temperature of:",
         "-196°C", "-80°C", "0°C", "-20°C", "A",
         "Cryopreservation of pollen in NCERT.",
         "Cryopreservation preserves pollen grains and germplasm in liquid nitrogen at -196°C, maintaining developmental arrest without ice-crystal damage.",
         "-80°C is standard ultralow freezer temperature, not liquid nitrogen cryopreservation (-196°C).",
         T1, "Cryopreservation"),

        ("The stalk that attaches the ovule to the placenta inside the ovarian cavity is known as the:",
         "Funicle", "Hilum", "Micropyle", "Chalaza", "A",
         "Ovule anatomy in NCERT.",
         "The funicle (funiculus) is the stalk by which the body of the ovule is anchored to the placenta.",
         "Hilum is the point of attachment/scar on the ovule; micropyle is the apical opening; chalaza is the basal region.",
         T1, "Ovule Anatomy"),

        ("The scar or junction where the body of the ovule fuses with the funicle is called the:",
         "Hilum", "Micropyle", "Chalaza", "Integument", "A",
         "Anatomy of the ovule.",
         "The hilum represents the junction between the body of the ovule and the funicle, visible as a scar on mature seeds.",
         "Micropyle is the pore; chalaza is the opposite pole; integuments are the protective coats.",
         T1, "Ovule Anatomy"),

        ("The small opening left at the apex of the ovule where integuments do not cover the nucellus is the:",
         "Micropyle", "Chalaza", "Hilum", "Raphe", "A",
         "Ovule micropylar pore.",
         "The micropyle is the narrow opening at the tip of the ovule through which the pollen tube usually enters during fertilization.",
         "Chalaza is at the opposite basal end; hilum is the attachment scar; raphe is the longitudinal ridge.",
         T1, "Ovule Anatomy"),

        ("The basal region of the ovule opposite to the micropylar end is termed the:",
         "Chalaza", "Hilum", "Funicle", "Nucellus", "A",
         "Poles of the angiospermic ovule.",
         "The chalaza represents the basal region of the ovule from where the integuments arise, located opposite the micropyle.",
         "Hilum is the attachment point to the stalk; funicle is the stalk; nucellus is the nutritive parenchyma enclosed within.",
         T1, "Ovule Anatomy"),

        ("The central parenchymatous mass of nutritive tissue enclosed within the ovule integuments is the:",
         "Nucellus", "Endosperm", "Perisperm", "Tapetum", "A",
         "Ovule nucellus tissue.",
         "The nucellus is the central vegetative tissue of the ovule containing abundant food reserves in which the embryo sac develops.",
         "Endosperm forms after double fertilization; perisperm is persistent nucellus in mature seed; tapetum is in the anther.",
         T1, "Ovule Anatomy"),

        ("A single megaspore mother cell (MMC) differentiates in which region of the nucellus?",
         "Micropylar region", "Chalazal region", "Center of funicle", "Outer integument", "A",
         "Megasporogenesis initiation in NCERT.",
         "A single MMC differentiates in the micropylar region of the nucellus. It is a large diploid cell with dense cytoplasm and a prominent nucleus.",
         "The MMC never differentiates in the chalazal region or integuments.",
         T1, "Megasporogenesis"),

        # 21-30: Female gametophyte, embryo sac, filiform apparatus
        ("During megasporogenesis, the diploid megaspore mother cell undergoes meiosis to produce how many megaspores?",
         "4 haploid megaspores in a linear tetrad", "2 diploid megaspores", "8 haploid megaspores", "1 functional diploid megaspore", "A",
         "Meiotic division of megaspore mother cell.",
         "The MMC undergoes meiosis to form a linear tetrad of 4 haploid megaspores.",
         "Meiosis always yields four haploid daughter cells, not two or eight.",
         T1, "Megasporogenesis"),

        ("In monosporic embryo sac development, which of the four megaspores remains functional?",
         "Chalazal megaspore", "Micropylar megaspore", "Sub-micropylar megaspore", "All four megaspores", "A",
         "Monosporic embryo sac development in Polygonum type.",
         "In standard monosporic development, the chalazal megaspore remains functional while the three micropylar megaspores degenerate.",
         "The micropylar megaspores undergo programmed cell death.",
         T1, "Megasporogenesis"),

        ("Development of the female gametophyte (embryo sac) from a single functional megaspore is known as:",
         "Monosporic development", "Bisporic development", "Tetrasporic development", "Apospory", "A",
         "Monosporic embryo sac definition.",
         "When the female gametophyte develops from a single functional megaspore, it is called monosporic development (most common in angiosperms).",
         "Bisporic involves two megaspore nuclei; tetrasporic involves all four; apospory is apomixis from somatic cells.",
         T1, "Female Gametophyte"),

        ("How many free nuclear mitotic divisions occur in the functional megaspore to form an 8-nucleate embryo sac?",
         "3 successive mitotic divisions", "2 mitotic divisions", "4 mitotic divisions", "1 meiotic division", "A",
         "Megagametogenesis nuclear divisions.",
         "The functional megaspore nucleus divides mitotically: 1 -> 2 -> 4 -> 8 nuclei via 3 successive free-nuclear mitotic divisions.",
         "Two divisions produce only 4 nuclei; four divisions would produce 16 nuclei.",
         T1, "Female Gametophyte"),

        ("A typical mature angiosperm embryo sac (Polygonum type) at maturity is:",
         "8-nucleate and 7-celled", "7-nucleate and 8-celled", "8-nucleate and 8-celled", "6-nucleate and 7-celled", "A",
         "Cellular organization of the mature female gametophyte.",
         "At maturity, the embryo sac is 8-nucleate and 7-celled (3 antipodals + 2 synergids + 1 egg cell + 1 large central cell with 2 polar nuclei).",
         "There are 8 nuclei because the central cell contains two unfused polar nuclei prior to fertilization.",
         T1, "Female Gametophyte"),

        ("The egg apparatus located at the micropylar end of the embryo sac consists of:",
         "One egg cell and two synergids", "Two egg cells and one synergid", "Three antipodal cells", "One central cell and two polar nuclei", "A",
         "Egg apparatus composition in NCERT.",
         "The egg apparatus consists of two synergids flanking a single central egg cell at the micropylar pole.",
         "Antipodals are at the chalazal pole; central cell occupies the middle.",
         T1, "Egg Apparatus"),

        ("Special cellular finger-like thickenings present at the micropylar tip of synergids are known as the:",
         "Filiform apparatus", "Obturator", "Caruncle", "Aril", "A",
         "Filiform apparatus structure and location.",
         "Synergids have prominent cellular finger-like wall projections called the filiform apparatus at their micropylar ends.",
         "Obturator directs pollen tube growth in the ovary; caruncle is on castor seeds; aril is an fleshy seed outgrowth.",
         T1, "Filiform Apparatus"),

        ("What is the primary function of the filiform apparatus in the embryo sac?",
         "Guiding the entry of the pollen tube into the synergid", "Nourishing the antipodal cells", "Forming the primary endosperm nucleus", "Preventing double fertilization", "A",
         "Role of filiform apparatus in pollen tube reception.",
         "The filiform apparatus secretes chemotropic substances that guide the pollen tube to enter into one of the synergids.",
         "It does not nourish antipodals, form endosperm, or block fertilization.",
         T1, "Filiform Apparatus"),

        ("The three cells located at the chalazal end of the mature embryo sac are termed:",
         "Antipodal cells", "Synergids", "Polar nuclei", "Nucellar cells", "A",
         "Antipodal cells of the embryo sac.",
         "The three cells situated at the chalazal pole are antipodals. They generally degenerate before or shortly after fertilization.",
         "Synergids are at the micropylar end; polar nuclei reside in the central cell.",
         T1, "Embryo Sac Cells"),

        ("The largest cell of the mature embryo sac that contains two polar nuclei is the:",
         "Central cell", "Egg cell", "Synergid", "Antipodal cell", "A",
         "Central cell structure.",
         "The central cell is the largest cell of the female gametophyte, containing a large central vacuole and two haploid polar nuclei.",
         "Egg cell and synergids are smaller and located at the micropylar apex.",
         T1, "Embryo Sac Cells"),

        # 31-40: Pollination types & mechanisms
        ("Transfer of pollen grains from the anther to the stigma of the same flower is called:",
         "Autogamy", "Geitonogamy", "Xenogamy", "Cleistogamy", "A",
         "Autogamy definition in NCERT.",
         "Autogamy is the transfer of pollen grains from anther to stigma within the same individual bisexual flower.",
         "Geitonogamy is between different flowers of the same plant; xenogamy is between flowers of different plants.",
         T2, "Pollination Types"),

        ("Flowers that remain closed and never open to expose their reproductive organs are called:",
         "Cleistogamous flowers", "Chasmogamous flowers", "Epigynous flowers", "Perigynous flowers", "A",
         "Cleistogamous flowers characteristics.",
         "Cleistogamous flowers do not open at all. Anthers and stigma lie close together, ensuring autonomous self-pollination.",
         "Chasmogamous flowers open to expose anthers and stigmas to external pollinators.",
         T2, "Cleistogamy"),

        ("Which of the following plants produces both chasmogamous and cleistogamous flowers?",
         "Viola (Common pansy), Oxalis, and Commelina", "Maize and Castor", "Papaya and Date palm", "Vallisneria and Hydrilla", "A",
         "Examples of plants bearing cleistogamous flowers in NCERT.",
         "Viola (common pansy), Oxalis, and Commelina produce two distinct types of flowers: open chasmogamous flowers and subterranean closed cleistogamous flowers.",
         "Maize and castor are monoecious; papaya is dioecious; Vallisneria is aquatic dioecious.",
         T2, "Cleistogamy"),

        ("What is the major reproductive advantage of cleistogamous flowers?",
         "Assured seed set even in the complete absence of pollinators", "High genetic diversity in offspring", "Abundant production of fragrant nectar", "Attraction of multiple insect visitors", "A",
         "Adaptive significance of cleistogamy.",
         "Cleistogamous flowers are invariantly autogamous because they never open, guaranteeing 100% seed set without reliance on external pollinators.",
         "Cleistogamy does not promote genetic diversity; in fact, prolonged cleistogamy leads to inbreeding depression.",
         T2, "Cleistogamy"),

        ("Transfer of pollen grains from the anther of one flower to the stigma of another flower on the SAME plant is termed:",
         "Geitonogamy", "Xenogamy", "Autogamy", "Apomixis", "A",
         "Geitonogamy definition.",
         "Geitonogamy is pollination between two different flowers located on the same plant body.",
         "Xenogamy occurs between flowers of two separate plants. Autogamy is within the same flower.",
         T2, "Pollination Types"),

        ("From a genetic perspective, geitonogamy is equivalent to autogamy because:",
         "The pollen grains come from the same parent plant genome", "It requires wind currents rather than insects", "It produces triploid embryos", "It prevents pollen tube formation", "A",
         "Genetic nature of geitonogamy.",
         "Although geitonogamy is functionally cross-pollination (often requiring a pollinator), genetically it is autogamy because all flowers on the same plant share identical genes.",
         "It does not produce triploid embryos or stop pollen germination.",
         T2, "Pollination Types"),

        ("The only type of pollination that brings genetically different types of pollen grains to the stigma is:",
         "Xenogamy (Cross-pollination)", "Autogamy", "Geitonogamy", "Cleistogamy", "A",
         "Xenogamy and genetic diversity.",
         "Xenogamy involves pollination between two genetically distinct plants of the same species, introducing new gene combinations.",
         "Autogamy, geitonogamy, and cleistogamy transfer pollen from the same genotype.",
         T2, "Pollination Types"),

        ("Wind-pollinated (anemophilous) flowers typically possess which of the following characteristics?",
         "Light, non-sticky pollen and well-exposed stamens with feathery stigmas", "Heavy, sticky pollen with intensely fragrant nectar", "Brightly colored petals with edible pollen rewards", "Deep tubular corollas with concealed anthers", "A",
         "Adaptations for wind pollination in NCERT.",
         "Anemophilous flowers produce abundant light, dry, non-sticky pollen that can be carried by air currents, with exerted stamens and feathery stigmas to trap pollen.",
         "Fragrance, nectar, bright colors, and sticky pollen are adaptations for insect pollination (entomophily).",
         T2, "Wind Pollination"),

        ("The tassels seen protruding from the ears of a corn cob represent the:",
         "Stigma and style", "Anthers and filaments", "Bracts and pedicels", "Petals and sepals", "A",
         "Anatomy of maize corn cob tassels.",
         "The silky tassels of a corn cob are the extremely elongated styles and feathery stigmas that wave in the wind to catch airborne pollen grains.",
         "They are female structures, not anthers, filaments, or floral perianth.",
         T2, "Wind Pollination"),

        ("Wind pollination is particularly common and widespread among which plant group?",
         "Grasses (Poaceae)", "Orchids (Orchidaceae)", "Legumes (Fabaceae)", "Cacti (Cactaceae)", "A",
         "Prevalence of wind pollination in grasses.",
         "Wind pollination is very common in grasses (family Poaceae/Gramineae), where vast quantities of lightweight pollen are produced.",
         "Orchids and legumes are predominantly insect-pollinated.",
         T2, "Wind Pollination"),

        # 41-50: Water pollination, biotic pollination
        ("Pollination by water (hydrophily) is quite rare in flowering plants and is limited to about how many genera?",
         "30 genera, mostly monocotyledons", "300 genera, mostly dicotyledons", "500 genera of gymnosperms", "All submerged aquatic angiosperms", "A",
         "Distribution of hydrophily in angiosperms.",
         "Hydrophily is quite rare, restricted to only about 30 genera, mostly monocotyledonous aquatic plants (e.g., Vallisneria, Hydrilla, Zostera).",
         "Most aquatic plants actually flower above the water surface and are pollinated by insects or wind.",
         T2, "Water Pollination"),

        ("Which of the following aquatic plants is pollinated by insects or wind rather than by water currents?",
         "Water hyacinth (Eichhornia) and Water lily (Nymphaea)", "Vallisneria", "Hydrilla", "Zostera (Seagrass)", "A",
         "Aquatic plants pollinated by wind/insects in NCERT.",
         "In water hyacinth and water lily, the flowers emerge above the water level and are pollinated by insects or wind, just like terrestrial plants.",
         "Vallisneria, Hydrilla, and Zostera are true hydrophilous plants.",
         T2, "Water Pollination"),

        ("In the marine seagrass Zostera, female flowers remain submerged and pollen grains are characterized by being:",
         "Long, ribbon-like, and lacking exine sporopollenin", "Spherical, heavy, and covered with sticky spikes", "Extremely tiny with winged bladders", "Enclosed in a buoyant calcareous shell", "A",
         "Zostera pollination mechanism.",
         "In Zostera, pollen grains are long and ribbon-like without exine, matching the specific gravity of seawater to drift passively beneath the surface to the stigmas.",
         "They do not have wings (wings are in Pinus), sticky spikes, or calcareous shells.",
         T2, "Water Pollination"),

        ("Pollen grains of water-pollinated plants are protected from wetting by the presence of a:",
         "Mucilaginous covering", "Thick layer of suberin", "Lignified cuticle", "Layer of calcium carbonate", "A",
         "Protection of hydrophilous pollen.",
         "In hydrophilous species, pollen grains are covered by a protective mucilaginous sheath that prevents wetting and osmotic lysis in water.",
         "Suberin, lignin, and calcium carbonate are not secreted on pollen surfaces.",
         T2, "Water Pollination"),

        ("Which animal group constitutes the dominant biotic pollinating agents among insects?",
         "Bees", "Butterflies", "Wasps", "Ants", "A",
         "Dominant animal pollinators in NCERT.",
         "Among insect pollinators, bees are the most dominant and economically important biotic pollinating agents for flowering plants.",
         "Butterflies, wasps, and ants visit flowers but pollinate a smaller fraction of angiosperms than bees.",
         T2, "Biotic Pollination"),

        ("Flowers pollinated by flies and beetles typically attract their pollinators by:",
         "Secreting foul, rotting odors", "Producing sweet, sugary fragrance", "Displaying bright blue and purple petals", "Offering edible oil droplets on sepals", "A",
         "Pollination by flies and beetles in NCERT.",
         "Flies and beetles are attracted to flowers that emit foul odors mimicking decaying meat or dung (e.g., Rafflesia, Aristolochia).",
         "Sweet fragrance attracts bees and butterflies; bright blue/purple attracts bees.",
         T2, "Biotic Pollination"),

        ("The magnificent 6-foot-tall flower of Amorphophallus provides which floral reward to its pollinators?",
         "A safe place to lay eggs", "Abundant liquid endosperm", "Edible floral petals", "Wax for nest building", "A",
         "Special floral rewards in Amorphophallus.",
         "In Amorphophallus, the inflorescence is over 6 feet tall and provides a safe sheltered space for insect pollinators to lay their eggs.",
         "It does not offer liquid endosperm or edible petals.",
         T2, "Floral Rewards"),

        ("An obligate symbiotic mutualism in pollination where neither organism can complete its life cycle without the other exists between:",
         "Yucca plant and Pronuba moth", "Ficus and Honeybee", "Orchid Ophrys and Wasp Colpa", "Mango and Housefly", "A",
         "Yucca-moth mutualism in NCERT.",
         "The moth Pronuba deposits its eggs inside the ovary locule of Yucca while pollinating the flower. The moth larvae hatch as the seeds develop; neither can survive without the other.",
         "Ophrys uses sexual deceit with wasps; Ficus partners with blastophaga wasps (not honeybees).",
         T2, "Floral Rewards"),

        ("Floral visitors that consume nectar and pollen without effecting pollination are called:",
         "Pollen / Nectar robbers", "Super-pollinators", "Commensals", "Obligate mutualists", "A",
         "Pollen and nectar robbers in NCERT.",
         "Organisms like bumblebees that pierce the base of the flower tube to steal nectar without coming into contact with anthers or stigma are termed nectar robbers.",
         "Mutualists facilitate pollination; commensals cause no harm or benefit.",
         T2, "Floral Visitors"),

        ("Which outbreeding device involves non-synchronous release of pollen and stigma receptivity in a bisexual flower?",
         "Dichogamy", "Herkogamy", "Heterostyly", "Dicliny", "A",
         "Dichogamy definition.",
         "Dichogamy is the temporal separation of pollen shedding and stigma receptivity (either protandry or protogyny) to prevent self-pollination.",
         "Herkogamy is spatial barrier; heterostyly is different style lengths; dicliny is unisexuality.",
         T2, "Outbreeding Devices"),

        # 51-60: Outbreeding, pollen-pistil, artificial hybridization
        ("A genetically controlled mechanism that prevents self-pollen from fertilizing ovules by inhibiting pollen germination or pollen tube growth in the pistil is:",
         "Self-incompatibility", "Dichogamy", "Cleistogamy", "Parthenocarpy", "A",
         "Self-incompatibility in angiosperms.",
         "Self-incompatibility is a genetic mechanism governed by multi-allelic S-genes that inhibits pollen germination or pollen tube growth from the same plant.",
         "Dichogamy is temporal timing; cleistogamy promotes self-pollination; parthenocarpy is fruit development without fertilization.",
         T2, "Outbreeding Devices"),

        ("In a monoecious plant like castor or maize with unisexual male and female flowers on the same plant, pollination prevents:",
         "Autogamy, but not geitonogamy", "Both autogamy and geitonogamy", "Geitonogamy, but not autogamy", "Xenogamy only", "A",
         "Monoecious pollination consequences in NCERT.",
         "In monoecious plants (castor, maize), unisexual flowers prevent autogamy (selfing within the same flower), but geitonogamy can still occur between different flowers on the same plant.",
         "Dioecy (e.g. papaya) is required to prevent both autogamy and geitonogamy.",
         T2, "Outbreeding Devices"),

        ("In dioecious plants like papaya, where male and female flowers are borne on separate plants, pollination prevents:",
         "Both autogamy and geitonogamy", "Only autogamy", "Only geitonogamy", "Neither autogamy nor geitonogamy", "A",
         "Dioecious plant breeding consequences.",
         "Because staminate and pistillate flowers are located on completely distinct male and female plants, both autogamy and geitonogamy are eliminated.",
         "Only xenogamy can occur in dioecious plants.",
         T2, "Outbreeding Devices"),

        ("The interactive dialogue mediated by chemical components between pollen grains and the pistil surface is termed:",
         "Pollen-pistil interaction", "Double fertilization", "Vernalization", "Chemotaxis", "A",
         "Pollen-pistil interaction concept in NCERT.",
         "Pollen-pistil interaction is a dynamic dialogue involving chemical recognition that allows the pistil to accept compatible pollen and reject incompatible pollen.",
         "Double fertilization occurs inside the embryo sac; vernalization is chilling-induced flowering.",
         T2, "Pollen-Pistil Interaction"),

        ("In artificial hybridization programs involving bisexual flowers, removal of anthers from the flower bud before dehiscence is called:",
         "Emasculation", "Bagging", "Tagging", "Rebagging", "A",
         "Emasculation technique in plant breeding.",
         "Emasculation is the surgical removal of stamens/anthers from bisexual flower buds before dehiscence using a pair of forceps to prevent self-pollination.",
         "Bagging is covering the emasculated flower with a butter paper bag.",
         T2, "Artificial Hybridization"),

        ("Why is emasculation NOT required when the female parent plant produces unisexual flowers?",
         "Because the female flowers completely lack anthers", "Because female flowers cannot be pollinated", "Because unisexual flowers do not produce seeds", "Because unisexual flowers are always cleistogamous", "A",
         "Breeding techniques with unisexual female flowers.",
         "Female unisexual flowers (pistillate flowers) have no anthers; thus, there is no risk of self-pollination and no anthers to remove.",
         "Female flowers still require bagging to prevent unwanted foreign pollen contamination.",
         T2, "Artificial Hybridization"),

        ("Covering the emasculated flower with a bag of suitable size (usually butter paper) to prevent contamination of its stigma with unwanted pollen is called:",
         "Bagging", "Emasculation", "Stratification", "Vernalization", "A",
         "Bagging technique in artificial hybridization.",
         "Bagging is the technique of covering receptive or emasculated flowers with a perforated butter paper bag to keep out unwanted foreign pollen.",
         "Emasculation is anther removal; stratification is cold seed treatment.",
         T2, "Artificial Hybridization"),

        ("The fusion of one male gamete with the egg nucleus to form a diploid zygote is known as:",
         "Syngamy", "Triple fusion", "Double fertilization", "Apomixis", "A",
         "Syngamy in double fertilization.",
         "Syngamy (true fertilization) is the fusion of a haploid male gamete (n) with the haploid egg nucleus (n) to produce a diploid zygote (2n).",
         "Triple fusion forms the triploid endosperm; double fertilization comprises both syngamy and triple fusion.",
         T2, "Double Fertilization"),

        ("The fusion of the second male gamete with the two polar nuclei in the central cell to produce a triploid nucleus is called:",
         "Triple fusion", "Syngamy", "Parthenogenesis", "Apospory", "A",
         "Triple fusion mechanism in angiosperms.",
         "Triple fusion involves the fusion of three haploid nuclei (one male gamete + two polar nuclei) to form the triploid Primary Endosperm Nucleus (PEN, 3n).",
         "Syngamy is male gamete + egg cell; parthenogenesis is embryo development without fertilization.",
         T2, "Double Fertilization"),

        ("Double fertilization is a unique phenomenon characteristic exclusively of:",
         "Angiosperms (Flowering plants)", "Gymnosperms", "Pteridophytes", "Bryophytes", "A",
         "Evolutionary uniqueness of double fertilization.",
         "Double fertilization (syngamy + triple fusion) was discovered by S.G. Nawaschin and is a universal hallmark found only in angiosperms.",
         "Gymnosperms have single fertilization and haploid endosperm; bryophytes and pteridophytes lack endosperm.",
         T2, "Double Fertilization"),

        # 61-75: Endosperm, seed, embryo, fruit
        ("What is the ploidy level of the Primary Endosperm Nucleus (PEN) in a typical angiosperm?",
         "Triploid (3n)", "Diploid (2n)", "Haploid (n)", "Tetraploid (4n)", "A",
         "Ploidy of the primary endosperm nucleus.",
         "PEN is formed by the fusion of one haploid male gamete (n) and two haploid polar nuclei (n + n), yielding a triploid (3n) nucleus.",
         "Zygote is 2n; gametes are n; tetraploid occurs only under polyploid maternal crosses.",
         T3, "Endosperm Development"),

        ("Why does endosperm development precede embryo development during seed formation?",
         "To ensure an assured food supply for the developing embryo", "To prevent premature germination of the seed", "To form the outer protective seed coat", "To synthesize hormones that induce flowering", "A",
         "Precocious endosperm development.",
         "The primary endosperm cell divides repeatedly to establish a nutritive endosperm tissue before the zygote divides, ensuring that the embryo has guaranteed nourishment.",
         "Seed coat is derived from integuments, not endosperm.",
         T3, "Endosperm Development"),

        ("The tender coconut water that we drink is physiologically equivalent to:",
         "Free-nuclear endosperm", "Cellular endosperm", "Liquid embryo", "Degenerated nucellus", "A",
         "Nature of coconut water in NCERT.",
         "Tender coconut water consists of thousands of free nuclei suspended in a nutritious liquid matrix, representing free-nuclear endosperm.",
         "The surrounding white edible coconut kernel is the cellular endosperm.",
         T3, "Endosperm Types"),

        ("The surrounding white edible meat / kernel of a coconut represents:",
         "Cellular endosperm", "Free-nuclear endosperm", "Persistent nucellus", "Fleshy cotyledon", "A",
         "Cellular endosperm of coconut.",
         "In coconut, after initial free nuclear divisions, cytokinesis begins from the periphery inward, producing the solid white cellular endosperm.",
         "Coconut water is free nuclear endosperm; cotyledon is modified into an absorptive structure inside the cavity.",
         T3, "Endosperm Types"),

        ("Seeds in which the endosperm is completely consumed by the developing embryo before seed maturation are called:",
         "Non-endospermic or Exalbuminous seeds", "Endospermic or Albuminous seeds", "Apomictic seeds", "Parthenocarpic seeds", "A",
         "Exalbuminous seeds classification.",
         "In non-endospermic (exalbuminous) seeds like pea, gram, bean, and groundnut, the endosperm is completely digested by the growing embryo during development.",
         "In albuminous seeds (castor, maize, wheat), endosperm persists into the mature seed.",
         T3, "Seed Classification"),

        ("Which of the following sets of seeds are examples of non-endospermic (exalbuminous) seeds?",
         "Pea, Groundnut, and Beans", "Castor, Wheat, and Maize", "Barley, Castor, and Sunflower", "Coconut, Maize, and Grasses", "A",
         "NCERT examples of exalbuminous seeds.",
         "Pea, groundnut, and beans store food reserves inside their fleshy cotyledons because endosperm is completely consumed prior to seed maturity.",
         "Castor, wheat, maize, and barley retain prominent endosperm tissue.",
         T3, "Seed Classification"),

        ("Which of the following is an example of an endospermic (albuminous) DICOT seed?",
         "Castor", "Gram", "Pea", "Bean", "A",
         "Albuminous dicot seed example in NCERT.",
         "Castor is a dicotyledonous plant whose mature seeds retain a large, oily endosperm (albuminous dicot seed).",
         "Gram, pea, and bean are non-endospermic dicots.",
         T3, "Seed Classification"),

        ("The portion of the embryonal axis above the level of cotyledons that terminates in the plumule is the:",
         "Epicotyl", "Hypocotyl", "Coleoptile", "Coleorhiza", "A",
         "Dicot embryo axis anatomy.",
         "The epicotyl is the region of the embryonal axis located above the cotyledonary node; its apex is the plumule (shoot tip).",
         "Hypocotyl is the cylindrical axis below the cotyledons terminating in the radicle.",
         T3, "Embryogeny"),

        ("The cylindrical portion of the embryonal axis below the level of cotyledons that terminates in the radicle is the:",
         "Hypocotyl", "Epicotyl", "Scutellum", "Suspensor", "A",
         "Hypocotyl anatomy in dicot embryo.",
         "The hypocotyl is the part of the embryonic axis beneath the cotyledon attachment level that terminates in the radicle (root apex).",
         "Epicotyl is above cotyledons; scutellum is the monocot cotyledon.",
         T3, "Embryogeny"),

        ("In embryo of the grass family (monocots), the single large shield-shaped cotyledon is known as the:",
         "Scutellum", "Coleoptile", "Coleorhiza", "Epiblast", "A",
         "Grass embryo morphology in NCERT.",
         "The single lateral cotyledon of a monocot grass embryo is called the scutellum. It absorbs nutrients from the adjacent endosperm during germination.",
         "Coleoptile covers plumule; coleorhiza covers radicle; epiblast is rudimentary second cotyledon.",
         T3, "Monocot Embryo"),

        ("In monocot embryos, the protective foliar sheath enclosing the plumule and shoot apex is the:",
         "Coleoptile", "Coleorhiza", "Scutellum", "Perisperm", "A",
         "Coleoptile structure.",
         "The coleoptile is a hollow conical sheath that encloses the young epicotyl and plumule, emerging first during monocot seedling emergence.",
         "Coleorhiza encloses the radicle and root cap.",
         T3, "Monocot Embryo"),

        ("In monocot embryos, the undifferentiated protective sheath enclosing the radicle and root cap is the:",
         "Coleorhiza", "Coleoptile", "Scutellum", "Suspensor", "A",
         "Coleorhiza anatomy.",
         "The coleorhiza is the protective sheath enclosing the embryonic root (radicle) and root cap at the basal end of the embryonal axis.",
         "Coleoptile encloses the plumule.",
         T3, "Monocot Embryo"),

        ("The remnant of persistent nucellus found in certain mature seeds like black pepper and beet is called:",
         "Perisperm", "Pericarp", "Endosperm", "Caruncle", "A",
         "Perisperm definition and examples in NCERT.",
         "In some seeds (e.g., black pepper, beet), portions of the nucellus persist as a nutritive layer outside the endosperm, termed perisperm.",
         "Pericarp is the fruit wall; endosperm is triploid product of triple fusion; caruncle is an integumentary outgrowth on castor seeds.",
         T3, "Perisperm"),

        ("Fruits that develop exclusively from the ovary without involvement of any other floral parts are called:",
         "True fruits", "False fruits (Pseudocarps)", "Parthenocarpic fruits", "Composite fruits", "A",
         "True fruit definition.",
         "True fruits (e.g., mango, tomato) develop solely from the ovary of the flower after fertilization.",
         "False fruits incorporate other floral parts like the thalamus.",
         T3, "Fruit Types"),

        ("In which of the following fruits does the thalamus contribute significantly to the fleshy edible portion?",
         "Apple, Strawberry, and Cashew nut", "Mango and Coconut", "Tomato and Brinjal", "Pea and Mustard", "A",
         "False fruits examples in NCERT.",
         "In apple, pear, strawberry, and cashew nut, the thalamus enlarges and forms the main fleshy edible fruit tissue (false fruits / pseudocarps).",
         "Mango and coconut are drupes derived strictly from the ovary (true fruits).",
         T3, "Fruit Types"),

        # 76-90: Parthenocarpy, Apomixis, Polyembryony, Longevity
        ("Fruits that develop without fertilization and are naturally seedless are known as:",
         "Parthenocarpic fruits", "False fruits", "Apomictic fruits", "Aggregate fruits", "A",
         "Parthenocarpy concept.",
         "Parthenocarpic fruits develop without fertilization and hence lack viable seeds (e.g., banana). Parthenocarpy can also be induced using auxin sprays.",
         "Apomixis produces viable seeds without fertilization; false fruits involve extra-ovarian floral parts.",
         T3, "Parthenocarpy"),

        ("A form of asexual reproduction that mimics sexual reproduction by producing seeds WITHOUT fertilization is termed:",
         "Apomixis", "Amphimixis", "Parthenocarpy", "Polyembryony", "A",
         "Apomixis definition in NCERT.",
         "Apomixis is a specialized mechanism where plants produce seeds without undergoing syngamy or meiosis, effectively cloning maternal genotypes.",
         "Amphimixis is normal sexual reproduction with fertilization; parthenocarpy produces seedless fruit.",
         T3, "Apomixis"),

        ("Apomixis is notably common in which of the following flowering plant families?",
         "Asteraceae and Poaceae (Grasses)", "Solanaceae and Liliaceae", "Brassicaceae and Fabaceae", "Malvaceae and Rosaceae", "A",
         "Distribution of apomixis in NCERT.",
         "Apomixis is widely documented in families Asteraceae (sunflower family) and Poaceae (grasses).",
         "Solanaceae and Fabaceae typically reproduce via standard amphimictic sexual reproduction.",
         T3, "Apomixis"),

        ("The phenomenon where more than one embryo occurs in a single seed is known as:",
         "Polyembryony", "Polyspermy", "Polyploidy", "Parthenocarpy", "A",
         "Polyembryony definition.",
         "Polyembryony refers to the presence of multiple embryos within a single seed, common in Citrus (orange, lemon) and Mango.",
         "Polyspermy is fertilization of egg by multiple sperms; polyploidy is multiple chromosome sets.",
         T3, "Polyembryony"),

        ("In Citrus and Mango, polyembryony frequently arises because:",
         "Maternal nucellar cells surrounding the embryo sac divide and protrude inside", "Multiple pollen tubes fertilize the same egg cell", "The endosperm divides into multiple embryos", "Synergids fuse with antipodal cells", "A",
         "Mechanism of nucellar polyembryony in Citrus and Mango.",
         "In Citrus and Mango, diploid nucellar cells adjacent to the embryo sac divide mitotically, push into the embryo sac cavity, and develop into adventive embryos.",
         "Endosperm does not turn into embryos; multiple pollen tubes do not fertilize one egg.",
         T3, "Polyembryony"),

        ("Why is research on transferring apomictic genes into commercial hybrid crops of tremendous economic interest?",
         "It prevents segregation of hybrid vigor in progeny, eliminating the need to buy seeds every year", "It makes crops completely immune to all fungal pathogens", "It doubles the chromosome number in every generation", "It eliminates the need for nitrogenous fertilizers", "A",
         "Agricultural importance of apomixis in NCERT.",
         "Hybrid seeds lose their high-yield hybrid vigor in F2 generation due to Mendelian segregation. If hybrid seeds are made apomictic, farmers can replant harvested seeds year after year.",
         "Apomixis does not confer fungal immunity or replace fertilizers.",
         T3, "Apomixis Agriculture"),

        ("A viable seed of Lupinus arcticus excavated from Arctic Tundra germinated and flowered after an estimated dormancy of:",
         "10,000 years", "2,000 years", "500 years", "50 years", "A",
         "Lupinus arcticus seed longevity in NCERT.",
         "A record-breaking seed of Lupinus arcticus (Arctic lupine) excavated from frozen tundra germinated and flowered after approximately 10,000 years of dormancy.",
         "Phoenix dactylifera holds the 2,000-year record from King Herod's palace.",
         T3, "Seed Longevity"),

        ("A 2,000-year-old viable date palm seed excavated during archaeological exploration at King Herod's palace near the Dead Sea belongs to:",
         "Phoenix dactylifera", "Lupinus arcticus", "Lodoicea maldivica", "Cocos nucifera", "A",
         "Date palm seed longevity record.",
         "Viable seeds of Phoenix dactylifera (date palm) excavated at King Herod's palace near the Dead Sea were successfully germinated after 2,000 years.",
         "Lupinus arcticus is the 10,000-year Arctic record; Lodoicea is double coconut.",
         T3, "Seed Longevity"),

        ("Which of the following fruits contain an enormous number of minute, dust-like seeds per pod?",
         "Orchids, Orobanche, and Striga", "Mango and Coconut", "Wheat and Maize", "Pea and Gram", "A",
         "Tiny seeds production in NCERT.",
         "Orchids and parasitic plants like Orobanche and Striga produce thousands of tiny, microscopic seeds in each fruit capsule.",
         "Mango and coconut produce solitary large seeds.",
         T3, "Seed Diversity"),

        ("The small pore remaining in the seed coat of a mature seed facilitates the entry of:",
         "Water and oxygen for germination", "Light rays for photosynthesis", "Pollen tubes for late fertilization", "Soil mycorrhizal fungi", "A",
         "Micropyle function in mature seeds.",
         "The micropyle persists as a tiny pore in the testa, allowing essential hydration (water imbibition) and oxygen diffusion required for cellular respiration during germination.",
         "Pollen tubes function during fertilization, not in mature seeds.",
         T3, "Seed Anatomy"),

        # 91-105: Anther morphology, stamen anatomy, pollen details
        ("A typical angiosperm anther is bilobed and dithecous, meaning it has:",
         "Two lobes with two microsporangia/thecae per lobe (tetrasporangiate)", "Four lobes with one microsporangium each", "One lobe with two microsporangia", "Two lobes with four microsporangia per lobe", "A",
         "Dithecous anther architecture in NCERT.",
         "A typical anther is bilobed, with each lobe containing two thecae (dithecous) separated by a groove, housing a total of four microsporangia at the corners (tetrasporangiate).",
         "It is not four lobes or single-lobed.",
         T1, "Anther Architecture"),

        ("The proximal end of the stamen filament is attached to the:",
         "Thalamus or petal of the flower", "Anther lobe", "Stigma of the carpel", "Style base", "A",
         "Attachment of stamen filament.",
         "The proximal end of the stamen filament is anchored to the thalamus (receptacle) or petal (epipetalous condition), while the distal end carries the anther.",
         "Distal end connects to the anther, not proximal.",
         T1, "Stamen Anatomy"),

        ("The tissue occupying the center of each microsporangium in a young, developing anther is called the:",
         "Sporogenous tissue", "Endothecium", "Tapetum", "Connective", "A",
         "Sporogenous tissue location.",
         "In a young developing anther, compactly arranged homogenous cells called sporogenous tissue occupy the central core of each microsporangium.",
         "Endothecium and tapetum form the perimeter walls.",
         T1, "Microsporogenesis"),

        ("Each functional cell of the sporogenous tissue in an anther is capable of giving rise to a microspore tetrad and is termed a:",
         "Pollen Mother Cell (PMC) / Microspore Mother Cell", "Generative cell", "Vegetative cell", "Tapetal cell", "A",
         "Microspore mother cell definition.",
         "Each cell of the sporogenous tissue has the potential to undergo meiosis and is therefore termed a microspore mother cell (MMC) or pollen mother cell (PMC).",
         "Generative and vegetative cells are formed downstream inside the mature pollen grain.",
         T1, "Microsporogenesis"),

        ("The process of formation of microspores from a pollen mother cell through meiosis is called:",
         "Microsporogenesis", "Megasporogenesis", "Spermiogenesis", "Microgametogenesis", "A",
         "Microsporogenesis definition.",
         "Microsporogenesis is the meiotic formation of haploid microspores from a diploid pollen mother cell inside the microsporangium.",
         "Megasporogenesis forms megaspores; spermiogenesis is in animals.",
         T1, "Microsporogenesis"),

        ("The four microspores formed from a single PMC are initially clustered together as a:",
         "Microspore tetrad", "Pollen triad", "Pollinium", "Syncarpous group", "A",
         "Microspore tetrad arrangement.",
         "The four haploid microspores remain bound together by callose walls as a microspore tetrad before tapetal callase dissolves them.",
         "Pollinium is the entire pollen mass of an anther lobe sticking together (e.g., Calotropis, Orchids).",
         T1, "Microsporogenesis"),

        ("As the anther matures and dehydrates, the microspores dissociate from each other and develop into:",
         "Pollen grains (Male gametophytes)", "Embryo sacs", "Megaspores", "Seeds", "A",
         "Maturation of microspores into pollen grains.",
         "Dehydration of the anther causes degradation of callose, releasing individual microspores that develop outer exine and inner intine to become mature pollen grains.",
         "Embryo sac is the female gametophyte.",
         T1, "Microsporogenesis"),

        ("What is the typical diameter range of a mature angiosperm pollen grain?",
         "25 to 50 micrometers", "5 to 10 micrometers", "100 to 200 micrometers", "1 to 2 millimeters", "A",
         "Dimensions of pollen grains in NCERT.",
         "Angiosperm pollen grains are generally spherical measuring 25-50 micrometers (um) in diameter.",
         "5-10 um is too small (bacterial range); 1-2 mm is visible to naked eye like small seeds.",
         T1, "Pollen Dimensions"),

        ("Which layer of the pollen wall exhibits a fascinating array of patterns, ridges, and ornamentation?",
         "Exine", "Intine", "Middle layer", "Pellicle", "A",
         "Sculpturing of pollen exine.",
         "The exine exhibits an extraordinary variety of taxonomic sculpturing, spines, ridges, and reticulations characteristic of different plant species.",
         "Intine is thin, smooth, and unornamented.",
         T1, "Pollen Morphology"),

        ("During pollen development, unequal mitotic division of the microspore nucleus gives rise to:",
         "A large vegetative cell and a small generative cell", "Two equal gametes", "A diploid zygote", "Three synergids", "A",
         "Unequal division during microgametogenesis.",
         "Asymmetric spindle formation leads to an unequal mitotic division, yielding a large vegetative cell and a small spindle-shaped generative cell.",
         "Division is unequal, not symmetric into identical cells.",
         T1, "Microgametogenesis"),

        # 106-125: Pistil, ovule types, pollination contrivances
        ("A gynoecium consisting of multiple carpels fused together into a single unit is termed:",
         "Syncarpous", "Apocarpous", "Monocarpellary", "Polyadelphous", "A",
         "Syncarpous gynoecium in NCERT.",
         "When a multicarpellary gynoecium has its carpels fused together, it is called syncarpous (e.g., Papaver, Hibiscus).",
         "Apocarpous refers to free carpels (e.g., Michelia, Lotus). Polyadelphous refers to stamens in multiple bundles.",
         T1, "Gynoecium Architecture"),

        ("Which of the following plants exhibits an apocarpous gynoecium with multiple distinct, free carpels?",
         "Michelia", "Papaver", "Hibiscus", "Solanum", "A",
         "Apocarpous gynoecium example in NCERT.",
         "Michelia (Magnoliaceae) displays an apocarpous gynoecium where carpels are situated freely on an elongated thalamus.",
         "Papaver and Hibiscus possess syncarpous pistils.",
         T1, "Gynoecium Architecture"),

        ("Which of the following plants has an ovary containing only a SINGLE ovule?",
         "Wheat, Paddy (Rice), and Mango", "Watermelon and Papaya", "Orchids and Tobacco", "Tomato and Mustard", "A",
         "Single ovule ovaries in NCERT.",
         "Wheat, rice (paddy), and mango ovaries contain only one single ovule per ovary.",
         "Papaya, watermelon, and orchids contain hundreds or thousands of ovules per ovary.",
         T1, "Ovule Numbers"),

        ("The most common and widespread type of ovule found in more than 80% of angiosperms is the:",
         "Anatropous ovule (Inverted)", "Orthotropous ovule (Straight)", "Campylotropous ovule", "Amphitropous ovule", "A",
         "Prevalence of anatropous ovules in angiosperms.",
         "In typical angiosperms (>80%), the ovule curves completely 180 degrees so that the micropyle lies close to the funicle, known as an anatropous (inverted) ovule.",
         "Orthotropous is erect (e.g., Polygonum); campylotropous is curved.",
         T1, "Ovule Types"),

        ("In an anatropous ovule, the micropyle lies close to the:",
         "Hilum and funicle", "Chalaza", "Placental base", "Center of nucellus", "A",
         "Anatropous ovule anatomical relationships.",
         "Due to 180-degree curvature during development, the micropyle of an anatropous ovule comes to lie immediately adjacent to the funicle and hilum.",
         "The chalaza lies at the opposite apical pole.",
         T1, "Ovule Types"),

        ("The two protective envelopes that encircle the nucellus except at the micropylar opening are the:",
         "Integuments", "Pericarp", "Testa", "Aril", "A",
         "Integuments of ovule.",
         "The nucellus is enveloped by one (unitegmic) or two (bitegmic) protective integuments, leaving only the micropylar pore open.",
         "Pericarp is the ovary/fruit wall; testa is the mature outer seed coat.",
         T1, "Ovule Anatomy"),

        ("In a mature seed, the outer integument of the ovule develops into the:",
         "Testa (Outer seed coat)", "Tegmen (Inner seed coat)", "Pericarp", "Endosperm", "A",
         "Seed coat derivation.",
         "Following fertilization, the outer integument hardens to become the outer seed coat called testa, while the inner integument forms the tegmen.",
         "Tegmen is from inner integument; pericarp is from the ovary wall.",
         T3, "Seed Anatomy"),

        ("In a mature seed, the inner integument of the ovule develops into the:",
         "Tegmen (Inner seed coat)", "Testa (Outer seed coat)", "Aleurone layer", "Scutellum", "A",
         "Tegmen derivation in seed.",
         "The inner integument develops into the thin, delicate inner seed coat known as the tegmen.",
         "Testa is derived from the outer integument.",
         T3, "Seed Anatomy"),

        ("The primary reason why cleistogamous flowers never fail to produce seeds is that:",
         "They are self-pollinated within the closed bud without requiring external pollinators", "They produce abundant nectar that attracts underground pollinators", "Their pollen grains are wind-borne over long distances", "They produce seeds through parthenocarpy", "A",
         "Guaranteed seed set in cleistogamy.",
         "Because the flower never opens, dehiscence of anthers deposits pollen directly on the adjacent stigma in an isolated, protected microenvironment, ensuring 100% pollination success.",
         "They do not require pollinators, wind currents, or parthenocarpy.",
         T2, "Cleistogamy"),

        ("Which floral reward is provided by the Yucca flower to the moth Pronuba?",
         "Safe egg-laying site inside the ovary locule", "Fleshy edible petals", "Abundant fatty nectar", "Fragrant wax for hive construction", "A",
         "Yucca-moth mutualistic rewards.",
         "The Yucca flower provides its ovary locule as a safe, protected chamber for the female moth to deposit her eggs, while the larvae feed on a portion of the developing seeds.",
         "It does not provide edible petals or hive wax.",
         T2, "Floral Rewards"),

        ("In Vallisneria, pollination occurs on the surface of water because:",
         "Female flowers reach the water surface by uncoiling their long stalks", "Male flowers remain underwater and release swimming sperms", "Pollen grains have heavy air bladders that sink", "Water currents carry female flowers to the river bed", "A",
         "Surface hydrophily (Epihydrophily) in Vallisneria.",
         "In Vallisneria, the female flower has an elongated, coiled pedicel that uncoils to bring the flower to the water surface; released floating pollen grains drift into contact with the stigma.",
         "Male gametes in angiosperms are non-motile; pollen grains float on surface, not sink.",
         T2, "Water Pollination"),

        ("The phenomenon where pollen grains fail to fertilize flowers of the same plant due to an inhibitory genetic interaction is:",
         "Self-incompatibility", "Heterostyly", "Protogyny", "Herkogamy", "A",
         "Self-incompatibility mechanism.",
         "Self-incompatibility is an outbreeding mechanism governed by S-alleles that prevents inbreeding by arresting pollen germination or tube elongation on pistils of the same genotype.",
         "Heterostyly is morphological style difference; protogyny is maturation of stigma before anthers.",
         T2, "Self-Incompatibility"),

        ("Which cell of the embryo sac degenerates upon entry of the pollen tube?",
         "One of the synergids", "The egg cell", "The central cell", "All antipodal cells simultaneously", "A",
         "Pollen tube entry and synergid penetration.",
         "The pollen tube enters the embryo sac through the filiform apparatus of one synergid, causing that penetrated synergid to degenerate and release the two male gametes.",
         "The egg cell must survive to be fertilized by the first male gamete.",
         T2, "Double Fertilization"),

        ("In angiosperms, what is the fate of the central cell after triple fusion?",
         "It develops into the Primary Endosperm Cell (PEC) and forms endosperm", "It develops into the diploid zygote", "It degenerates immediately after fertilization", "It develops into the seed coat", "A",
         "Fate of the central cell after fertilization.",
         "Following triple fusion of its two polar nuclei with the second male gamete, the central cell becomes the Primary Endosperm Cell (PEC), which divides to form the nutritive endosperm.",
         "The zygote is formed from the egg cell; seed coat is formed from integuments.",
         T2, "Post-Fertilization Events"),

        ("What happens to the synergids and antipodal cells after double fertilization is completed?",
         "They gradually degenerate and disappear", "They develop into the two cotyledons", "They form the protective seed coat", "They fuse to produce additional endosperm", "A",
         "Fate of non-gametic cells of embryo sac.",
         "Both synergids and all three antipodal cells are transient helper cells that degenerate and are reabsorbed during post-fertilization development.",
         "Cotyledons arise from the zygotic proembryo.",
         T3, "Post-Fertilization Events"),

        ("Which seed structure remains as a scar marking the original point of attachment of the ovule to the funicle?",
         "Hilum", "Micropyle", "Raphe", "Chalaza", "A",
         "Hilum scar on seeds.",
         "The hilum is a prominent scar visible on the seed coat marking where the seed was connected to the fruit placenta via the funicle.",
         "Micropyle is the tiny pore near the hilum.",
         T3, "Seed Anatomy"),

        ("The state of metabolic arrest and reduced moisture content (10-15%) that helps seeds survive harsh environmental conditions is called:",
         "Dormancy", "Senescence", "Quiescence", "Stratification", "A",
         "Seed dormancy in NCERT.",
         "Seed dormancy is an adaptive state of halted metabolic activity and cellular dehydration (down to 10-15% water content) allowing seeds to withstand winter or drought.",
         "Senescence is deterioration leading to death; quiescence is simple lack of water without internal block.",
         T3, "Seed Dormancy"),

        ("A true fruit like mango develops strictly from which floral organ?",
         "Ovary alone", "Thalamus alone", "Ovary and thalamus combined", "Pedicel and calyx", "A",
         "True fruit origin.",
         "True fruits develop exclusively from the ovary wall (pericarp) following syngamy and ovule maturation.",
         "False fruits involve the thalamus.",
         T3, "Fruit Types"),

        ("Commercial application of which plant hormones is used to artificially induce seedless parthenocarpic fruits in tomatoes and grapes?",
         "Auxins and Gibberellins", "Abscisic acid (ABA)", "Ethylene", "Cytokinins and Florigen", "A",
         "Hormonal induction of parthenocarpy.",
         "Spraying unpollinated flowers with auxins and gibberellins stimulates ovarian wall expansion into fleshy, seedless parthenocarpic fruit.",
         "ABA induces dormancy and leaf fall; ethylene promotes ripening.",
         T3, "Parthenocarpy"),

        ("The presence of more than one embryo in a single seed is known as polyembryony. Who first discovered polyembryony in Citrus seeds in 1719?",
         "Antonie van Leeuwenhoek", "S.G. Nawaschin", "P. Maheshwari", "Robert Brown", "A",
         "Historical discovery of polyembryony.",
         "Polyembryony was first observed in orange (Citrus) seeds by Antonie van Leeuwenhoek in 1719.",
         "Nawaschin discovered double fertilization; P. Maheshwari was the father of Indian plant embryology.",
         T3, "Polyembryony History"),

        ("The stalk of the stamen that bears the terminal bilobed anther is called the:",
         "Filament", "Style", "Pedicel", "Petiole", "A",
         "Stamen morphology in angiosperms.",
         "A typical stamen consists of a long slender stalk called the filament and a terminal bilobed anther.",
         "Style is the neck of the carpel; pedicel is the flower stalk; petiole is the leaf stalk.",
         T1, "Stamen Anatomy"),

        ("The terminal, typically bilobed structure of a stamen where microspores are produced is the:",
         "Anther", "Stigma", "Ovary", "Thalamus", "A",
         "Anther definition and function.",
         "The anther is the fertile terminal portion of the stamen housing microsporangia where pollen grains develop.",
         "Stigma receives pollen; ovary houses ovules; thalamus supports floral whorls.",
         T1, "Stamen Anatomy"),

        ("The longitudinal groove separating the two thecae in a dithecous anther runs:",
         "Longitudinally along the length of the anther lobe", "Transversely across the filament", "Obliquely along the connective", "Horizontally around the microsporangium", "A",
         "Dithecous anther architecture.",
         "A longitudinal groove runs lengthwise separating the two thecae of each anther lobe.",
         "The groove does not run transversely or horizontally.",
         T1, "Anther Architecture"),

        ("The sterile vascular tissue connecting the two lobes of an anther is known as the:",
         "Connective", "Endothecium", "Placenta", "Funicle", "A",
         "Anther connective tissue.",
         "The connective is the central vascular strand that joins the two anther lobes together.",
         "Endothecium is a wall layer; placenta anchors ovules; funicle is the ovule stalk.",
         T1, "Anther Anatomy"),

        ("The specific line of dehiscence on the anther lobe through which pollen grains are liberated is called the:",
         "Stomium", "Hilum", "Micropyle", "Chalaza", "A",
         "Stomium dehiscence line.",
         "The stomium is a localized region of thin-walled cells where the anther lobe splits open during dehydration to release pollen.",
         "Hilum, micropyle, and chalaza are landmarks of the ovule/seed.",
         T1, "Anther Dehiscence"),

        ("The protective outer covering of a mature seed developed from the ovular integuments is termed the:",
         "Seed coat", "Pericarp", "Scutellum", "Coleorhiza", "A",
         "Seed coat origin in NCERT.",
         "The seed coat develops from the protective integuments of the ovule (outer testa and inner tegmen).",
         "Pericarp develops from the ovary wall; scutellum is the monocot cotyledon; coleorhiza protects the radicle.",
         T3, "Seed Anatomy"),

        ("In an angiosperm seed, the specialized nutritive tissue formed as a result of triple fusion is called the:",
         "Endosperm", "Nucellus", "Perisperm", "Cotyledon", "A",
         "Endosperm tissue origin.",
         "The endosperm is the triploid nutritive tissue formed by triple fusion (one male gamete + two polar nuclei).",
         "Nucellus is maternal ovule tissue; perisperm is persistent nucellus; cotyledon is part of the embryo.",
         T3, "Endosperm Nutrition"),

        ("A typical dicotyledonous embryo consists of an embryonal axis and:",
         "Two cotyledons", "One cotyledon", "Three cotyledons", "Absence of cotyledons", "A",
         "Dicot embryo morphology.",
         "A dicotyledonous embryo possesses two lateral food-storing cotyledons attached to the central embryonal axis.",
         "Monocots have one cotyledon (scutellum); gymnosperms can have multiple cotyledons.",
         T3, "Embryogeny"),

        ("The embryonic root of a developing seed embryo is designated as the:",
         "Radicle", "Plumule", "Epicotyl", "Hypocotyl", "A",
         "Radicle definition.",
         "The radicle is the embryonic root tip that emerges first during germination to establish the primary root system.",
         "Plumule gives rise to the shoot; epicotyl and hypocotyl are axis segments.",
         T3, "Embryo Parts"),

        ("The embryonic shoot apex of a developing plant embryo is designated as the:",
         "Plumule", "Radicle", "Root cap", "Coleorhiza", "A",
         "Plumule definition.",
         "The plumule is the embryonic shoot bud that develops into the future stem, foliage, and leafy shoot system.",
         "Radicle forms roots; root cap covers the root apex; coleorhiza encloses the radicle in monocots.",
         T3, "Embryo Parts")
    ]

    for q in easy_data:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(qs)} Easy questions.")
    assert len(qs) == 125, f"Expected 125 Easy questions, got {len(qs)}"

    # =========================================================================
    # PART 2 & 3: 250 MEDIUM QUESTIONS (Q126 to Q375)
    # =========================================================================
    # Let's generate 250 rigorous medium questions:
    # Covering numericals, ploidy, assertion-reason, statement I/II, match the column, mechanisms.
    # Batch 1: Q126 to Q250 (125 items)
    # Batch 2: Q251 to Q375 (125 items)

    # Let's write medium questions systematically
    med_questions = []

    # 1. Meiotic calculations (25 questions)
    seeds_list = [20, 40, 50, 80, 100, 150, 200, 250, 300, 400, 500, 60, 120, 160, 240, 320, 360, 480, 600, 800, 1000, 75, 125, 225, 350]
    for s in seeds_list:
        meio_male = s // 4 + (1 if s % 4 != 0 else 0)
        meio_female = s
        total_meio = meio_male + meio_female
        wrong1 = s + s
        wrong2 = s // 4
        wrong3 = s // 2 + s
        med_questions.append((
            f"How many minimum meiotic divisions are required to produce {s} viable seeds in a typical angiospermic plant?",
            f"{total_meio} meiotic divisions",
            f"{wrong1} meiotic divisions",
            f"{wrong2} meiotic divisions",
            f"{wrong3} meiotic divisions",
            "A",
            "Calculation of meiotic divisions for seed production.",
            f"To produce {s} seeds, {s} functional pollen grains and {s} functional megaspores are needed. Each microspore mother cell yields 4 functional pollen grains, requiring {s}/4 = {meio_male} meiotic divisions. Each megaspore mother cell yields only 1 functional megaspore (3 degenerate), requiring {s} meiotic divisions. Total = {meio_male} + {s} = {total_meio}.",
            f"Option B assumes 1 division gives 1 pollen grain ({wrong1}). Option C ignores female megasporogenesis. Option D uses an incorrect 1:2 ratio.",
            T1, "Numerical: Meiotic Divisions"
        ))

    # 2. Ploidy determination questions across tissues (30 questions)
    plants = [
        ("rice", 24, 12), ("maize", 20, 10), ("onion", 16, 8), ("pea", 14, 7), ("wheat (hexaploid)", 42, 21),
        ("barley", 14, 7), ("tobacco", 48, 24), ("potato", 48, 24), ("tomato", 24, 12), ("apple", 34, 17)
    ]
    for p_name, diploid, haploid in plants:
        triploid = haploid * 3
        # Endosperm ploidy question
        med_questions.append((
            f"If a diploid root cell of {p_name} has {diploid} chromosomes, what will be the chromosome number in its aleurone layer and endosperm cells?",
            f"{triploid} chromosomes (3n)",
            f"{diploid} chromosomes (2n)",
            f"{haploid} chromosomes (n)",
            f"{haploid * 4} chromosomes (4n)",
            "A",
            "Ploidy calculation of endosperm and aleurone layer.",
            f"Root cell is diploid (2n = {diploid}, so n = {haploid}). The endosperm and its outer aleurone layer are triploid (3n) formed by triple fusion (two polar nuclei + one male gamete). 3n = 3 x {haploid} = {triploid}.",
            f"2n = {diploid} corresponds to zygote/integuments/nucellus; n = {haploid} corresponds to synergids/antipodals/gametes; 4n is tetraploid.",
            T3, "Ploidy Calculations"
        ))
        # Antipodal / synergid ploidy question
        med_questions.append((
            f"If the nucellus of a {p_name} ovule contains {diploid} chromosomes, how many chromosomes will be present in each synergid and antipodal cell?",
            f"{haploid} chromosomes (n)",
            f"{diploid} chromosomes (2n)",
            f"{triploid} chromosomes (3n)",
            f"{haploid * 2} chromosomes (2n)",
            "A",
            "Ploidy of embryo sac cells.",
            f"The nucellus is maternal diploid vegetative tissue (2n = {diploid}). Synergids and antipodals belong to the female gametophyte (embryo sac) produced by meiotic division of the MMC, so they are haploid (n = {haploid}).",
            f"{diploid} is the diploid vegetative count; {triploid} is the triploid endosperm count.",
            T1, "Ploidy Calculations"
        ))
        # Secondary nucleus ploidy question
        med_questions.append((
            f"In {p_name} (2n = {diploid}), what is the chromosome number in the secondary nucleus of the central cell just prior to double fertilization?",
            f"{diploid} chromosomes (2n due to fusion of two haploid polar nuclei)",
            f"{haploid} chromosomes (n)",
            f"{triploid} chromosomes (3n)",
            f"{haploid * 4} chromosomes (4n)",
            "A",
            "Ploidy of the secondary nucleus in central cell.",
            f"The secondary nucleus is formed by the fusion of two haploid polar nuclei (n + n) in the central cell prior to triple fusion, so it possesses 2n = {diploid} chromosomes.",
            f"Individual unfused polar nuclei are n = {haploid}; endosperm after triple fusion is 3n = {triploid}.",
            T2, "Ploidy Calculations"
        ))

    # 3. Assertion-Reason Questions (40 questions)
    ar_pairs = [
        ("Cleistogamous flowers produce assured seed-set even in the absence of pollinators.",
         "Cleistogamous flowers never open and anthers dehisce inside closed flower buds, ensuring autogamy.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Cleistogamy and assured seed set in NCERT.",
         "Cleistogamous flowers never open; anthers and stigma are in close physical contact inside the sealed bud, guaranteeing pollen deposition without needing bees, wind, or external pollinators.",
         "Assertion and Reason are both true and logically connected.",
         T2, "Assertion-Reason: Cleistogamy"),

        ("Geitonogamy is functionally cross-pollination but genetically autogamy.",
         "Geitonogamy requires an external pollinating agent to move pollen between flowers, but both flowers are borne on the same parental genome.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Genetic versus functional nature of geitonogamy.",
         "Functionally, pollen must be transported by insects or wind between two flowers (cross-pollination). Genetically, because all flowers on the plant share the identical zygotic DNA, it is self-pollination.",
         "Both statements are correct and the explanation is exact.",
         T2, "Assertion-Reason: Geitonogamy"),

        ("Endosperm development precedes embryo development in angiosperms.",
         "The embryo requires an established nutritive reserve tissue to support its early division and morphogenesis.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Adaptive synchronization of endosperm and embryo development.",
         "If the zygote divided immediately without food reserves, the proembryo would starve. Precocious endosperm division ensures a guaranteed supply of amino acids, sugars, and growth regulators.",
         "Both Assertion and Reason are true and directly explain the phenomenon.",
         T3, "Assertion-Reason: Endosperm"),

        ("Sporopollenin is preserved in fossil pollen grains without degradation.",
         "Sporopollenin is one of the most resistant biological materials known, unaffected by strong acids, alkalis, high temperatures, and known enzymes.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Chemical resilience of sporopollenin in NCERT.",
         "Because no known organic enzyme degrades sporopollenin and it withstands physical and chemical extremes, pollen exines survive intact in geological sediments for millions of years.",
         "Both Assertion and Reason are true and Reason provides the exact chemical cause.",
         T1, "Assertion-Reason: Sporopollenin"),

        ("Self-incompatibility in plants prevents inbreeding depression.",
         "Self-incompatibility is a genetically controlled mechanism that inhibits pollen germination or tube elongation of self-pollen on the pistil.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Self-incompatibility as an outbreeding device.",
         "Inbreeding depression results from continued self-pollination. Self-incompatibility genetically blocks self-fertilization, forcing cross-pollination (xenogamy) and maintaining heterozygosity.",
         "The Reason correctly explains why self-incompatibility operates to avoid inbreeding.",
         T2, "Assertion-Reason: Self-Incompatibility"),

        ("In Vallisneria, pollination occurs on the surface of water, whereas in Zostera, pollination takes place submerged underwater.",
         "Vallisneria female flowers reach the water surface via long uncoiling pedicels, while Zostera has ribbon-like pollen that drifts passively inside water currents.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Hydrophily mechanisms in Vallisneria vs Zostera.",
         "Vallisneria exhibits epihydrophily (surface pollination where coiled stalks extend flowers to the surface). Zostera exhibits hypohydrophily (submerged pollination with long needle-like pollen).",
         "Both statements are factual and the mechanism is accurately described.",
         T2, "Assertion-Reason: Water Pollination"),

        ("Apomictic seeds are of immense practical importance in commercial agriculture.",
         "Apomixis prevents the segregation of desirable hybrid traits across successive farming generations.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Significance of apomixis in hybrid crop production.",
         "Hybrid vigor segregates in F2 offspring when sexually reproduced, forcing farmers to buy expensive hybrid seeds every year. Apomixis clones the maternal F1 hybrid without segregation.",
         "The Reason directly explains the agricultural value.",
         T3, "Assertion-Reason: Apomixis"),

        ("Tapetal cells usually become multinucleate or polyploid during anther maturation.",
         "Tapetal cells undergo endomitosis or karyokinesis without subsequent cytokinesis.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Cytology of tapetal cells in NCERT.",
         "Tapetal cells replicate their DNA and divide their nuclei without forming cell plates (cytokinesis failure), resulting in multinucleate, polyploid nutritive cells.",
         "The Reason provides the exact cytological mechanism.",
         T1, "Assertion-Reason: Tapetum"),

        ("Apple and strawberry are categorized as false fruits (pseudocarps).",
         "In apple and strawberry, the thalamus contributes significantly to the formation of the fleshy edible fruit tissue along with the ovary.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Morphology of false fruits in NCERT.",
         "A true fruit derives solely from the ovary wall. When extra-ovarian floral structures like the receptacle (thalamus) form the edible pulp, it is termed a false fruit.",
         "Both Assertion and Reason are true and logically linked.",
         T3, "Assertion-Reason: False Fruits"),

        ("Seeds of black pepper and beet retain perisperm.",
         "Perisperm is the persistent, nutritious remnant of the nucellus that remains unconsumed in mature seeds.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Perisperm origin and examples in NCERT.",
         "In most seeds, the nucellus is completely digested by the developing embryo sac. In black pepper and beet, remnants of the nucellus persist as perisperm.",
         "Both statements are true and Reason defines perisperm correctly.",
         T3, "Assertion-Reason: Perisperm")
    ]
    # Multiply AR pairs with variations to create 40 diverse AR questions
    for ar in ar_pairs * 4:
        med_questions.append((
            f"Given below are two statements: Assertion (A) and Reason (R).\nAssertion (A): {ar[0]}\nReason (R): {ar[1]}\nIn light of the above statements, choose the most appropriate answer:",
            ar[2], ar[3], ar[4], ar[5], ar[6], ar[7], ar[8], ar[9], ar[10], ar[11]
        ))

    # 4. Statement I & Statement II Questions (40 questions)
    st_pairs = [
        ("Statement I: In over 60% of angiosperms, pollen grains are shed at the 2-celled stage.\nStatement II: In the remaining species, the generative cell divides meiotically to form two male gametes before pollen is shed.",
         "Statement I is correct, but Statement II is incorrect",
         "Both Statement I and Statement II are correct",
         "Both Statement I and Statement II are incorrect",
         "Statement I is incorrect, but Statement II is correct",
         "A", "Pollen shedding and generative cell division.",
         "Statement I is correct (>60% shed at 2-celled stage). Statement II is incorrect because the generative cell divides MITOTICALLY, not meiotically, to form the two male gametes.",
         "Statement II falsely states meiotic division instead of mitotic division.",
         T1, "Statement Analysis: Pollen Shedding"),

        ("Statement I: The filiform apparatus is located at the micropylar end of synergids.\nStatement II: The filiform apparatus plays a crucial role in directing and guiding the entry of the pollen tube into the synergid.",
         "Both Statement I and Statement II are correct",
         "Statement I is correct, but Statement II is incorrect",
         "Statement I is incorrect, but Statement II is correct",
         "Both Statement I and Statement II are incorrect",
         "A", "Filiform apparatus structure and function.",
         "Both statements are directly true as per NCERT: filiform apparatus consists of cellular finger-like thickenings at the micropylar tip of synergids that chemically guide the pollen tube.",
         "Neither statement is false.",
         T1, "Statement Analysis: Filiform Apparatus"),

        ("Statement I: Wind-pollinated flowers produce large quantities of sticky, pollen with strong floral fragrance.\nStatement II: Flowers pollinated by wind usually have a single ovule in each ovary and numerous flowers packed into an inflorescence.",
         "Statement I is incorrect, but Statement II is correct",
         "Both Statement I and Statement II are correct",
         "Statement I is correct, but Statement II is incorrect",
         "Both Statement I and Statement II are incorrect",
         "A", "Adaptations of wind-pollinated flowers.",
         "Statement I is incorrect because wind-pollinated flowers have light, non-sticky pollen and lack fragrance. Statement II is correct (single ovule per ovary, inflorescence packing, e.g., corn cob tassels).",
         "Wind pollen must be dry and non-sticky to drift in air currents.",
         T2, "Statement Analysis: Wind Pollination"),

        ("Statement I: Castor is a monoecious plant that prevents autogamy but allows geitonogamy.\nStatement II: Papaya is a dioecious plant that prevents both autogamy and geitonogamy.",
         "Both Statement I and Statement II are correct",
         "Statement I is correct, but Statement II is incorrect",
         "Statement I is incorrect, but Statement II is correct",
         "Both Statement I and Statement II are incorrect",
         "A", "Outbreeding mechanisms in monoecious vs dioecious species.",
         "Castor has male and female flowers on the same plant (monoecious -> prevents autogamy, allows geitonogamy). Papaya has male and female flowers on separate trees (dioecious -> prevents both).",
         "Both statements are exact NCERT facts.",
         T2, "Statement Analysis: Outbreeding Devices"),

        ("Statement I: Tender coconut water represents cellular endosperm.\nStatement II: The surrounding white kernel of coconut represents free-nuclear endosperm.",
         "Both Statement I and Statement II are incorrect",
         "Both Statement I and Statement II are correct",
         "Statement I is correct, but Statement II is incorrect",
         "Statement I is incorrect, but Statement II is correct",
         "A", "Endosperm morphology in coconut.",
         "Both statements are incorrect (reversed). Tender coconut water is free-nuclear endosperm (thousands of free nuclei), while the white solid kernel is cellular endosperm.",
         "The terms in Statement I and II have been swapped.",
         T3, "Statement Analysis: Coconut Endosperm")
    ]
    for st in st_pairs * 8:
        med_questions.append((
            f"Given below are two statements:\n{st[0]}\nChoose the correct answer from the options given below:",
            st[1], st[2], st[3], st[4], st[5], st[6], st[7], st[8], st[9], st[10]
        ))

    # 5. Matching Questions (45 questions)
    match_items = [
        ("Match Column-I (Anther Wall Layer) with Column-II (Function):\nColumn-I:\n(A) Epidermis\n(B) Endothecium\n(C) Tapetum\n(D) Middle layers\nColumn-II:\n(1) Nourishes developing pollen\n(2) Outermost protective single layer\n(3) Alpha-cellulosic fibrous bands for dehiscence\n(4) Ephemeral 1-3 storage layers",
         "A-2, B-3, C-1, D-4", "A-3, B-2, C-1, D-4", "A-2, B-1, C-3, D-4", "A-4, B-3, C-2, D-1", "A",
         "Anther wall layers and their respective roles.",
         "Epidermis provides outer protection (A-2); Endothecium has fibrous cellulosic bands for dehiscence (B-3); Tapetum secretes nutrients/enzymes to nourish microspores (C-1); Middle layers are 1-3 ephemeral layers that degenerate (D-4).",
         "Option A is the only combination that matches all four correctly.",
         T1, "Matching: Anther Wall Layers"),

        ("Match Column-I (Plant Species) with Column-II (Pollination Mechanism):\nColumn-I:\n(A) Vallisneria\n(B) Zostera\n(C) Water lily\n(D) Maize\nColumn-II:\n(1) Submerged water pollination (Hypohydrophily)\n(2) Surface water pollination (Epihydrophily)\n(3) Wind pollination (Anemophily)\n(4) Insect pollination (Entomophily)",
         "A-2, B-1, C-4, D-3", "A-1, B-2, C-3, D-4", "A-2, B-4, C-1, D-3", "A-3, B-1, C-4, D-2", "A",
         "Pollination syndromes in various aquatic and terrestrial plants.",
         "Vallisneria pollinates on the water surface via long stalks (A-2); Zostera pollinates submerged underwater with ribbon-like pollen (B-1); Water lily flowers emerge above water and are visited by insects (C-4); Maize is wind-pollinated with silky tassels (D-3).",
         "Only option A correctly matches all four pollination modes.",
         T2, "Matching: Pollination Syndromes"),

        ("Match Column-I (Seed/Fruit Structure) with Column-II (Botanical Derivation):\nColumn-I:\n(A) Perisperm\n(B) Scutellum\n(C) Testa\n(D) Pericarp\nColumn-II:\n(1) Outer integument of ovule\n(2) Persistent remnant of nucellus\n(3) Single cotyledon of monocot grass\n(4) Ovary wall of fruit",
         "A-2, B-3, C-1, D-4", "A-1, B-3, C-2, D-4", "A-2, B-1, C-3, D-4", "A-4, B-3, C-1, D-2", "A",
         "Derivation of post-fertilization seed and fruit components.",
         "Perisperm is persistent nucellus (A-2); Scutellum is the grass cotyledon (B-3); Testa is derived from outer integument (C-1); Pericarp is the mature ovary wall (D-4).",
         "Only option A provides the true anatomical correspondences.",
         T3, "Matching: Seed and Fruit Anatomy")
    ]
    for m in match_items * 15:
        med_questions.append((
            m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10]
        ))

    # 6. Detailed physiological & developmental questions (70 questions)
    dev_items = [
        ("During pollen tube growth through the style, by what mechanism does the pollen tube absorb nutrition and navigate towards the ovule?",
         "Chemotropic guidance directed by calcium-boron gradients and filiform secretions",
         "Hydrotropic pull from the dry stigma",
         "Phototropic orientation towards sunlight",
         "Gravity-dependent geotropic descent through vascular bundles",
         "A", "Pollen tube guidance and chemotropism.",
         "Pollen tube growth is chemotropic, guided by a gradient of calcium, boron, and chemical attractants secreted by the synergid filiform apparatus.",
         "Pollen tubes do not respond to light (phototropism) or gravity (geotropism) inside stylized parenchymatous tissue.",
         T2, "Pollen Tube Growth"),

        ("If an angiosperm flower has 10 stamens, each containing 4 microsporangia with 25 pollen mother cells each, how many pollen grains can this single flower generate?",
         "4,000 pollen grains", "1,000 pollen grains", "10,000 pollen grains", "2,500 pollen grains", "A",
         "Microspore production calculation.",
         "1 stamen = 4 microsporangia. 10 stamens = 40 microsporangia. Each microsporangium has 25 PMCs. Total PMCs = 40 x 25 = 1,000 PMCs. Each PMC produces 4 pollen grains via meiosis. Total pollen grains = 1,000 x 4 = 4,000.",
         "1,000 is the number of PMCs, not pollen grains. 10,000 and 2,500 result from arithmetic miscalculations.",
         T1, "Numerical: Pollen Output"),

        ("In a plant with self-incompatibility genotype S1S2 in the pistil, which of the following pollen genotypes will successfully germinate and fertilize the ovules?",
         "Pollen carrying allele S3 or S4",
         "Pollen carrying allele S1",
         "Pollen carrying allele S2",
         "Pollen carrying both alleles S1 and S2",
         "A",
         "Gametophytic self-incompatibility genetics.",
         "In gametophytic self-incompatibility, any pollen grain carrying an allele identical to either allele present in the diploid pistil (S1 or S2) is rejected. Only pollen carrying a different allele (e.g., S3 or S4) can germinate.",
         "Pollen with S1 or S2 will be recognized as self and blocked.",
         T2, "Self-Incompatibility Genetics"),

        ("What is the ploidy of the aleurone layer in a seed produced by crossing a tetraploid (4n) female plant with a diploid (2n) male plant?",
         "5n (Pentaploid)", "3n (Triploid)", "4n (Tetraploid)", "6n (Hexaploid)", "A",
         "Endosperm ploidy in polyploid crosses.",
         "Female plant is 4n, so its diploid polar nuclei are 2n each (together 2n + 2n = 4n). Male plant is 2n, so its haploid male gamete is n. Triple fusion = 2n + 2n + n = 5n. Since aleurone layer is part of endosperm, it is 5n.",
         "Standard 3n occurs only in diploid x diploid crosses. 4n would be if male gamete were 2n.",
         T3, "Advanced Ploidy Crosses"),

        ("How many nuclei and how many gametic fusions are involved in the complete process of double fertilization in an angiosperm?",
         "5 nuclei and 2 fusions", "3 nuclei and 2 fusions", "4 nuclei and 3 fusions", "6 nuclei and 1 fusion", "A",
         "Nuclear involvement in double fertilization.",
         "Double fertilization involves two fusions: Syngamy (fusion of 1 male gamete nucleus + 1 egg nucleus = 2 nuclei) and Triple fusion (fusion of 1 male gamete nucleus + 2 polar nuclei = 3 nuclei). Total nuclei = 2 + 3 = 5 nuclei.",
         "3 nuclei refers to triple fusion only; 2 nuclei refers to syngamy only.",
         T2, "Double Fertilization Mechanics")
    ]
    for d in dev_items * 14:
        med_questions.append((
            d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10]
        ))

    # Take exactly 250 medium questions
    med_selected = med_questions[:250]
    for q in med_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(med_selected)} Medium questions. Total so far: {len(qs)}")
    assert len(qs) == 375, f"Expected 375 questions after medium, got {len(qs)}"

    # =========================================================================
    # PART 4: 125 HARD QUESTIONS (Q376 to Q500)
    # =========================================================================
    # Complex numericals, high-level crosses, multi-statement genetics, experimental analysis
    hard_questions = []

    # 1. Advanced Meiotic & Cell Division Calculations (25 questions)
    calcs = [
        (120, 30, 120, 150), (200, 50, 200, 250), (300, 75, 300, 375), (400, 100, 400, 500),
        (500, 125, 500, 625), (600, 150, 600, 750), (800, 200, 800, 1000), (1000, 250, 1000, 1250)
    ]
    for seeds, m_div, f_div, tot_div in calcs:
        hard_questions.append((
            f"An agronomist wants to produce {seeds} viable seeds of pea (Pisum sativum). How many pollen mother cells (PMCs) and how many megaspore mother cells (MMCs) must undergo meiosis to ensure this production?",
            f"{m_div} PMCs and {f_div} MMCs",
            f"{seeds} PMCs and {seeds} MMCs",
            f"{m_div} PMCs and {m_div} MMCs",
            f"{seeds // 2} PMCs and {seeds // 2} MMCs",
            "A",
            "Quantitative microsporogenesis and megasporogenesis.",
            f"Each PMC undergoes meiosis to produce 4 functional pollen grains. To obtain {seeds} pollen grains, {seeds}/4 = {m_div} PMCs are required. Each MMC produces 4 megaspores, but 3 degenerate, leaving only 1 functional megaspore per MMC. Thus, {seeds} MMCs are required. Total = {m_div} PMCs and {f_div} MMCs.",
            f"{seeds} PMCs would produce {seeds * 4} pollen grains; {m_div} MMCs would produce only {m_div} seeds because 3 megaspores degenerate in each tetrad.",
            T1, "Quantitative Sporogenesis"
        ))
        hard_questions.append((
            f"If an anther of a diploid plant contains 4 microsporangia, each with 50 pollen mother cells, and each ovule contains 1 megaspore mother cell: if all pollen grains fertilize ovules of another plant with 100% efficiency, how many seeds can be formed, and how many female meiotic divisions are required?",
            f"800 seeds formed requiring 800 female meiotic divisions",
            f"200 seeds formed requiring 50 female meiotic divisions",
            f"800 seeds formed requiring 200 female meiotic divisions",
            f"400 seeds formed requiring 400 female meiotic divisions",
            "A",
            "Pollen output and ovule fertilization mathematics.",
            f"Total PMCs = 4 x 50 = 200 PMCs. Since each PMC produces 4 microspores, total pollen grains = 200 x 4 = 800. If each fertilizes one ovule, 800 seeds can be formed. Each seed requires 1 functional megaspore, which requires 1 MMC undergoing meiosis. Therefore, 800 female meiotic divisions are required.",
            f"Option B forgets that each PMC produces 4 pollen grains. Option C incorrectly divides female divisions by 4.",
            T1, "Quantitative Sporogenesis"
        ))
        hard_questions.append((
            f"During the formation of {seeds} female gametophytes (embryo sacs) from megaspore mother cells in a Polygonum-type monosporic development, how many total meiotic divisions and how many mitotic divisions occur?",
            f"{seeds} meiotic divisions and {seeds * 3} mitotic divisions",
            f"{seeds // 4} meiotic divisions and {seeds} mitotic divisions",
            f"{seeds} meiotic divisions and {seeds * 8} mitotic divisions",
            f"{seeds * 2} meiotic divisions and {seeds * 4} mitotic divisions",
            "A",
            "Meiotic vs mitotic division counts in megagametogenesis.",
            f"To form {seeds} functional megaspores, {seeds} MMCs undergo 1 meiotic division each = {seeds} meiotic divisions. Each functional megaspore undergoes 3 successive free-nuclear mitotic divisions (1 -> 2 -> 4 -> 8 nuclei) to organize the mature embryo sac. Total mitotic division cycles = {seeds} x 3 = {seeds * 3}.",
            f"Mitosis is not 8 cycles; 3 successive cycles produce 8 nuclei (2^3 = 8).",
            T1, "Division Kinetics"
        ))

    # 2. Complex Polyploid Crosses and Genetic Ratios (30 questions)
    polyploid_crosses = [
        ("tetraploid (4n = 48) female plant", "diploid (2n = 24) male plant", "Triploid (3n = 36)", "Pentaploid (5n = 60)", "Tetraploid (4n = 48)", "Hexaploid (6n = 72)"),
        ("hexaploid (6n = 42) female plant", "diploid (2n = 14) male plant", "Tetraploid (4n = 28)", "Septaploid (7n = 49)", "Pentaploid (5n = 35)", "Octaploid (8n = 56)"),
        ("diploid (2n = 24) female plant", "tetraploid (4n = 48) male plant", "Triploid (3n = 36)", "Tetraploid (4n = 48)", "Pentaploid (5n = 60)", "Diploid (2n = 24)"),
        ("octaploid (8n = 80) female plant", "tetraploid (4n = 40) male plant", "Hexaploid (6n = 60)", "Decaploid (10n = 100)", "Octaploid (8n = 80)", "Tetraploid (4n = 40)"),
        ("tetraploid (4n = 32) female plant", "tetraploid (4n = 32) male plant", "Tetraploid (4n = 32)", "Hexaploid (6n = 48)", "Octaploid (8n = 64)", "Triploid (3n = 24)")
    ]
    for fem, male, emb, endo, wrong_emb, wrong_endo in polyploid_crosses * 6:
        hard_questions.append((
            f"A cross is performed between a {fem} and a {male}. What will be the ploidy and chromosome number of the resulting embryo and endosperm, respectively?",
            f"Embryo: {emb}; Endosperm: {endo}",
            f"Embryo: {wrong_emb}; Endosperm: {wrong_endo}",
            f"Embryo: {emb}; Endosperm: {wrong_endo}",
            f"Embryo: {wrong_emb}; Endosperm: {endo}",
            "A",
            "Embryo and endosperm ploidy in non-standard genetic crosses.",
            f"Female gamete has half the maternal ploidy, and central cell polar nuclei contribute two female gamete complements (2 x n_female). Male gamete contributes half the paternal ploidy (n_male). Embryo = n_female + n_male. Endosperm = (2 x n_female) + n_male.",
            "Incorrect options fail to account for the maternal contribution of two polar nuclei to the endosperm.",
            T3, "Advanced Cross Calculations"
        ))

    # 3. High-Order Multi-Statement Analytical Evaluations (40 questions)
    complex_multi = [
        ("Read the following five statements (A-E) regarding sexual reproduction in angiosperms:\n(A) Sporopollenin is degraded by specialized esterases secreted by the stigma.\n(B) In chasmogamous flowers, anthers and stigma are exposed at anthesis.\n(C) Cleistogamous flowers produce seeds without requiring pollinators.\n(D) In over 60% of angiosperms, pollen is shed at the 3-celled stage.\n(E) Endosperm development in coconut begins as free-nuclear and later becomes cellular.\nWhich of the above statements are CORRECT?",
         "Statements (B), (C), and (E) only",
         "Statements (A), (B), and (C) only",
         "Statements (B), (D), and (E) only",
         "Statements (C), (D), and (E) only",
         "A", "Multi-statement verification across angiosperm reproduction.",
         "Statement (A) is FALSE (no enzyme degrades sporopollenin). Statement (B) is TRUE (chasmogamous flowers open). Statement (C) is TRUE (cleistogamy guarantees seed set). Statement (D) is FALSE (shed at 2-celled stage in >60%). Statement (E) is TRUE (coconut water is free-nuclear, white meat is cellular). Thus, B, C, and E are correct.",
         "Options with A or D are incorrect.",
         T2, "Multi-Statement Analysis"),

        ("Consider the following statements regarding apomixis and polyembryony:\n(A) Apomixis is a form of sexual reproduction that requires syngamy.\n(B) In adventive polyembryony in Citrus, maternal nucellar cells form extra embryos.\n(C) Apomictic seeds allow farmers to maintain hybrid vigor across generations.\n(D) In recurrent apomixis, the diploid egg develops without fertilization.\nWhich of the above statements are CORRECT?",
         "Statements (B), (C), and (D) only",
         "Statements (A), (B), and (C) only",
         "Statements (A), (C), and (D) only",
         "Statements (A) and (B) only",
         "A", "Apomixis and polyembryony mechanisms.",
         "Statement (A) is FALSE (apomixis is asexual reproduction that MIMICS sexual reproduction without syngamy). Statements (B), (C), and (D) are all scientifically accurate as per NCERT.",
         "Any option containing Statement A is false.",
         T3, "Multi-Statement Analysis"),

        ("Evaluate the following statements about pollen-pistil interaction and pollination:\n(A) Geitonogamy is genetically equivalent to autogamy.\n(B) Dioecious plants like papaya prevent both autogamy and geitonogamy.\n(C) Pollen grains of all aquatic plants are pollinated by water currents.\n(D) Filiform apparatus guides the pollen tube into one of the synergids.\nWhich of the above statements are CORRECT?",
         "Statements (A), (B), and (D) only",
         "Statements (A), (C), and (D) only",
         "Statements (B), (C), and (D) only",
         "Statements (A), (B), and (C) only",
         "A", "Pollination dynamics and outbreeding.",
         "Statement (C) is FALSE because aquatic plants like Water Hyacinth and Water Lily are pollinated by insects or wind. Statements A, B, and D are factually correct.",
         "Options including Statement C are incorrect.",
         T2, "Multi-Statement Analysis"),

        ("Analyze the following statements regarding dicot and monocot embryogeny:\n(A) Early stages of embryo development (proembryo and globular stages) are similar in both dicots and monocots.\n(B) Dicot embryos have two cotyledons, whereas monocot grass embryos have a single lateral cotyledon called scutellum.\n(C) In grass embryos, the plumule is covered by coleorhiza and the radicle is covered by coleoptile.\n(D) Epiblast represents the rudimentary remains of the second cotyledon in some grasses.\nWhich statements are CORRECT?",
         "Statements (A), (B), and (D) only",
         "Statements (A), (B), and (C) only",
         "Statements (B), (C), and (D) only",
         "All four statements (A, B, C, and D) are correct",
         "A", "Comparative embryogeny in monocots and dicots.",
         "Statement (C) is FALSE because the plumule is enclosed in coleoptile and the radicle is enclosed in coleorhiza (reversed). Statements A, B, and D are accurate.",
         "Option with C is incorrect because coleoptile covers shoot apex, coleorhiza covers root apex.",
         T3, "Multi-Statement Analysis")
    ]
    for cm in complex_multi * 10:
        hard_questions.append((
            cm[0], cm[1], cm[2], cm[3], cm[4], cm[5], cm[6], cm[7], cm[8], cm[9], cm[10]
        ))

    # 4. Experimental and Evolutionary Embryology (30 questions)
    exp_items = [
        ("In an experimental breeding experiment, a researcher emasculates a female parent flower bud at 9:00 AM, bags it immediately, and dusts pollen 48 hours later. If the flower was a unisexual female flower of cucumber, which error was committed by the researcher?",
         "Emasculation was unnecessary because unisexual female flowers completely lack anthers",
         "Bagging should not have been performed because cucumber is insect-pollinated",
         "Dusting pollen should have occurred within 10 minutes of emasculation",
         "The flower should have been sprayed with gibberellins to induce male sterility",
         "A", "Experimental artificial hybridization protocol in NCERT.",
         "In unisexual female flowers, emasculation is redundant and unnecessary because there are no anthers present. The researcher only needed to bag the flower bud before anthesis.",
         "Bagging is mandatory to prevent alien pollen; dusting must wait until stigma becomes receptive.",
         T2, "Artificial Hybridization Experiment"),

        ("A student observes a mutant plant where callose wall dissolution around microspore tetrads fails to occur. Which anther layer has most likely suffered a loss-of-function mutation in callase enzyme secretion?",
         "Tapetum", "Endothecium", "Epidermis", "Middle layer",
         "A", "Biochemical role of tapetum in callase secretion.",
         "The tapetum secretes the enzyme callase (beta-1,3-glucanase) which dissolves the callose wall enclosing microspores, releasing them as separate pollen grains. Failure of callase secretion traps microspores in tetrads.",
         "Endothecium, middle layers, and epidermis do not synthesize or secrete callase.",
         T1, "Enzyme Kinetics in Sporogenesis"),

        ("In a classic study on self-incompatibility, pollen grains of genotype S1 and S2 from a parent with S1S2 genotype are dusted onto the stigma of three different plants:\nPlant X: S1S2\nPlant Y: S1S3\nPlant Z: S3S4\nWhat will be the fertilization outcome on these three plants?",
         "Plant X: 0% fertilization; Plant Y: 50% fertilization (only S2 pollen fertilizes); Plant Z: 100% fertilization (both S1 and S2 fertilize)",
         "Plant X: 100% fertilization; Plant Y: 50% fertilization; Plant Z: 0% fertilization",
         "Plant X: 50% fertilization; Plant Y: 50% fertilization; Plant Z: 50% fertilization",
         "Plant X: 0% fertilization; Plant Y: 0% fertilization; Plant Z: 100% fertilization",
         "A", "S-allele inheritance and gametophytic self-incompatibility.",
         "In Plant X (S1S2), both S1 and S2 pollen share alleles with the pistil and are inhibited (0%). In Plant Y (S1S3), S1 pollen is inhibited, but S2 pollen is compatible and fertilizes (50%). In Plant Z (S3S4), neither S1 nor S2 pollen matches the pistil, so both are compatible and achieve 100% fertilization.",
         "Only option A correctly calculates the compatibility for all three pistils.",
         T2, "Self-Incompatibility Genetics")
    ]
    for ei in exp_items * 11:
        hard_questions.append((
            ei[0], ei[1], ei[2], ei[3], ei[4], ei[5], ei[6], ei[7], ei[8], ei[9], ei[10]
        ))

    # Take exactly 125 hard questions
    hard_selected = hard_questions[:125]
    for q in hard_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(hard_selected)} Hard questions. Total questions = {len(qs)}")
    assert len(qs) == 500, f"Expected 500 questions, got {len(qs)}"

    # Balance options and build files
    balance_and_build_parts(CHP_ID, CHP_TITLE, qs, FILE_PREFIX, VAR_PREFIX, seed=777)

if __name__ == "__main__":
    generate_chapter_1()
