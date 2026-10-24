import sys, os
from typing import List, Dict, Any

T1 = ("bio-microsporogenesis-megasporogenesis", "Microsporogenesis & Megasporogenesis")
T2 = ("bio-pollination-double-fertilization", "Pollination & Double Fertilization")
T3 = ("bio-endosperm-apomixis", "Endosperm, Seed & Apomixis")

def get_ch1_questions() -> List[Dict[str, Any]]:
    qs = []
    
    def add_q(q, a, b, c, d, ans, concept, step, why_wrong, top_tuple, subtopic):
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

    # Let's write the questions systematically:
    # -------------------------------------------------------------
    # PART 1: 125 Easy Questions (Q1 to Q125)
    # -------------------------------------------------------------
    # Q1 - Q40: Microsporogenesis, Anther, Pollen grain
    add_q(
        "Which of the following represents the outermost protective wall layer of a typical angiospermic anther?",
        "Epidermis", "Endothecium", "Middle layers", "Tapetum",
        "A",
        "Anther wall layers and their functions in NCERT.",
        "The wall of a typical microsporangium consists of four layers: outer epidermis, endothecium, middle layers, and the innermost tapetum. The epidermis is the outermost single-cell thick protective layer.",
        "Endothecium is the second sub-epidermal layer with fibrous thickenings. Middle layers consist of 1-3 ephemeral layers. Tapetum is the innermost nutritive layer.",
        T1, "Anther Wall Layers"
    )
    add_q(
        "Which anther wall layer possesses alpha-cellulosic fibrous bands and helps in the dehiscence of anther at maturity?",
        "Endothecium", "Epidermis", "Tapetum", "Middle layers",
        "A",
        "Structure and function of endothecium in anther dehiscence.",
        "Cells of the endothecium develop radial and tangential cellulosic bands of fibrous thickening. As the anther matures and loses water, hygroscopic tension develops, facilitating dehiscence along the stomium.",
        "Epidermis is protective without cellulosic fibrous bands. Tapetum secretes callase and nourishes pollen. Middle layers degenerate early.",
        T1, "Anther Wall Layers"
    )
    add_q(
        "The innermost layer of the anther wall that provides nourishment to the developing microspores is called:",
        "Tapetum", "Endothecium", "Middle layer", "Epidermis",
        "A",
        "Structure and physiological role of the tapetum.",
        "Tapetum is the innermost layer of the microsporangial wall. Its cells have dense cytoplasm, are often multinucleate, and nourish the developing microspore mother cells and microspores.",
        "Endothecium is mechanical for dehiscence. Middle layers are ephemeral storage tissues. Epidermis is outer protective.",
        T1, "Tapetum Function"
    )
    add_q(
        "Tapetal cells are characterized by having:",
        "Dense cytoplasm and multiple nuclei", "Thin cytoplasm and single haploid nucleus", "Lignified cell walls and absence of cytoplasm", "Abundant intercellular spaces and chloroplasts",
        "A",
        "Cytological characteristics of tapetal cells in NCERT.",
        "Tapetal cells possess dense cytoplasm and often become binucleate or multinucleate due to endomitosis or free nuclear division without cytokinesis.",
        "Tapetal cells do not have thin cytoplasm; they are metabolically very active with dense cytoplasm and polyploid or multinucleate nuclei.",
        T1, "Tapetum Cytology"
    )
    add_q(
        "The exine of a pollen grain is composed of one of the most resistant organic substances known, which is:",
        "Sporopollenin", "Cellulose", "Pectin", "Chitin",
        "A",
        "Pollen grain wall layers: Exine and sporopollenin.",
        "The hard outer layer of pollen called exine is made of sporopollenin, a complex oxidative polymer of carotenoids. It is resistant to high temperatures, strong acids, alkalis, and no enzyme that degrades sporopollenin is known.",
        "Cellulose and pectin form the intine. Chitin forms fungal cell walls.",
        T1, "Pollen Wall Chemistry"
    )
    add_q(
        "The apertures on the exine where sporopollenin is absent are known as:",
        "Germ pores", "Stomium", "Micropyle", "Chalaza",
        "A",
        "Structure of germ pores on the pollen exine.",
        "Germ pores are prominent apertures or circular areas on the pollen exine where sporopollenin is absent, allowing the pollen tube to emerge during germination.",
        "Stomium is the line of dehiscence on the anther lobe. Micropyle is the pore in ovule integuments. Chalaza is the base of the ovule.",
        T1, "Pollen Anatomy"
    )
    add_q(
        "The inner wall layer of the pollen grain, which is thin and continuous, is termed:",
        "Intine", "Exine", "Perisperm", "Endothecium",
        "A",
        "Pollen intine composition and structure.",
        "The intine is the inner wall layer of the pollen grain. It is a thin, continuous layer made of cellulose and pectin.",
        "Exine is the outer discontinuous layer made of sporopollenin. Perisperm is persistent nucellus in seeds. Endothecium is an anther wall layer.",
        T1, "Pollen Anatomy"
    )
    add_q(
        "In over 60 percent of angiosperms, pollen grains are shed from the anther at which developmental stage?",
        "2-celled stage", "3-celled stage", "4-celled stage", "1-celled stage",
        "A",
        "Pollen shedding stages in angiosperms according to NCERT.",
        "In over 60% of angiosperms, pollen grains are shed at the 2-celled stage consisting of one larger vegetative cell and one smaller generative cell.",
        "In remaining <40% of species, the generative cell divides mitotically to form two male gametes before shedding (3-celled stage).",
        T1, "Pollen Shedding"
    )
    add_q(
        "Which cell in a 2-celled pollen grain is larger, contains abundant food reserves, and has a large irregularly shaped nucleus?",
        "Vegetative cell", "Generative cell", "Synergid", "Antipodal cell",
        "A",
        "Characteristics of vegetative and generative cells of pollen.",
        "The vegetative cell (tube cell) is bigger, has abundant food reserves, and possesses a large, irregularly shaped nucleus.",
        "The generative cell is small and floats in the cytoplasm of the vegetative cell. Synergids and antipodals are components of the female embryo sac.",
        T1, "Pollen Cells"
    )
    add_q(
        "Which invasive weed introduced into India as a contaminant with imported wheat has become a widespread cause of pollen allergy?",
        "Parthenium hysterophorus (Carrot grass)", "Eichhornia crassipes (Water hyacinth)", "Lantana camara", "Prosopis juliflora",
        "A",
        "Pollen allergies and Parthenium contamination in NCERT.",
        "Parthenium (carrot grass) came to India as a contaminant with imported wheat and has become ubiquitous in occurrence, causing severe pollen allergies and bronchial afflictions.",
        "Eichhornia is an aquatic weed (Terror of Bengal). Lantana and Prosopis are invasive alien shrubs, not the primary cause of cereal-imported pollen allergy.",
        T1, "Pollen Allergy"
    )

    # Let's add questions covering the full spectrum of NCERT Class 12 Chapter 1
    # We will write a programmatic expansion covering all 500 questions cleanly.
    return qs

print("unit1_ch1 scaffold loaded.")
