# Structural Organisation in Animals Part 2: Q126 to Q250 (Medium)
import json

def get_part2_raw():
    return [
  {
    "q_num": 126,
    "q": "Which epithelial type lines the urinary bladder and is specialized to allow stretching without cell rupture?",
    "opts": {
      "A": "Transitional epithelium (urothelium)",
      "B": "Simple squamous epithelium",
      "C": "Keratinised stratified squamous epithelium",
      "D": "Pseudostratified ciliated columnar epithelium"
    },
    "ans": "A",
    "exp": "Transitional epithelium (urothelium) lines distensible urinary organs like the bladder and ureters, flattening as volume increases.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Epithelial Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 127,
    "q": "Non-keratinised stratified squamous epithelium is found lining which of the following moist surfaces?",
    "opts": {
      "A": "Oral cavity, pharynx, oesophagus, and vagina",
      "B": "Dry epidermal surface of skin",
      "C": "Alveoli of lungs",
      "D": "Proximal convoluted tubule of nephron"
    },
    "ans": "A",
    "exp": "Non-keratinised stratified squamous epithelium covers moist friction-prone surfaces such as the buccal cavity, oesophagus, and vagina.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Epithelial Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 128,
    "q": "Why does pseudostratified epithelium appear multilayered under a light microscope?",
    "opts": {
      "A": "All cells touch the basement membrane, but nuclei lie at different levels due to differing cell heights",
      "B": "It consists of three distinct embryological layers",
      "C": "Rapid mitosis produces multiple layers of dividing cells",
      "D": "It lacks a basal lamina entirely"
    },
    "ans": "A",
    "exp": "All cells rest on the basal lamina, but vary in height, placing nuclei at differing levels and simulating stratification.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Epithelial Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 129,
    "q": "Which cell junctions anchor intermediate keratin filaments between adjacent epithelial cells, conferring mechanical shear resistance?",
    "opts": {
      "A": "Desmosomes (maculae adherentes)",
      "B": "Gap junctions",
      "C": "Tight junctions",
      "D": "Hemidesmosomes only"
    },
    "ans": "A",
    "exp": "Desmosomes use transmembrane cadherins (desmoglein/desmocollin) linked to intermediate keratin filaments to resist mechanical shear.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Epithelial Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 130,
    "q": "The major transmembrane proteins that form the seal in tight junctions (zonulae occludentes) are:",
    "opts": {
      "A": "Claudins and occludins",
      "B": "Connexins and integrins",
      "C": "Cadherins and selectins",
      "D": "Actin and myosin"
    },
    "ans": "A",
    "exp": "Claudins and occludins polymerise to form the barrier strands of tight junctions that prevent paracellular water/solute leak.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Epithelial Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 131,
    "q": "Gap junctions are made of hexameric channel-forming protein complexes known as:",
    "opts": {
      "A": "Connexons, each made of six connexin subunits",
      "B": "Integrons made of tubulin dimers",
      "C": "Cadherin complexes",
      "D": "Desmoplakins"
    },
    "ans": "A",
    "exp": "A gap junction channel comprises two docked hexameric connexons, each composed of six transmembrane connexin proteins.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Epithelial Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 132,
    "q": "Mammary glands release portions of the apical cytoplasm along with secretory droplets. This secretory mechanism is classified as:",
    "opts": {
      "A": "Apocrine secretion",
      "B": "Merocrine (eccrine) secretion",
      "C": "Holocrine secretion",
      "D": "Endocrine secretion"
    },
    "ans": "A",
    "exp": "In apocrine secretion (e.g., mammary glands), the apical membrane-bound portion of the cytoplasm pinches off with the secretory product.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Epithelial Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 133,
    "q": "Sebaceous glands in mammalian skin discharge sebum by the complete lysis and disintegration of whole secretory cells. This is termed:",
    "opts": {
      "A": "Holocrine secretion",
      "B": "Merocrine secretion",
      "C": "Apocrine secretion",
      "D": "Cytocrine secretion"
    },
    "ans": "A",
    "exp": "In holocrine glands (e.g., sebaceous glands), the entire cell disintegrates to release its accumulated secretory content.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Epithelial Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 134,
    "q": "Sweat glands and salivary glands secrete products via exocytosis with no loss of cellular cytoplasm. This mode is:",
    "opts": {
      "A": "Merocrine (eccrine) secretion",
      "B": "Apocrine secretion",
      "C": "Holocrine secretion",
      "D": "Paracrine secretion"
    },
    "ans": "A",
    "exp": "Merocrine glands discharge secretory vesicles via exocytosis without damaging the secretory cell.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Epithelial Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 135,
    "q": "The basement membrane of epithelium consists of:",
    "opts": {
      "A": "Basal lamina (secreted by epithelial cells) and reticular lamina (secreted by connective tissue)",
      "B": "Perichondrium and periosteum",
      "C": "Endothelium and mesothelium",
      "D": "Tunica intima and tunica media"
    },
    "ans": "A",
    "exp": "The basement membrane has an epithelial-derived basal lamina (laminin, type IV collagen) and a connective tissue-derived reticular lamina.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Epithelial Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 136,
    "q": "Which type of collagen fibre provides high tensile strength in tendons, bone matrix, and the dermis?",
    "opts": {
      "A": "Type I collagen",
      "B": "Type II collagen",
      "C": "Type III collagen",
      "D": "Type IV collagen"
    },
    "ans": "A",
    "exp": "Type I collagen forms thick, non-elastic parallel bundles that resist longitudinal tension in tendons, ligaments, and bones.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 137,
    "q": "Type II collagen is the predominant fibrillar collagen found in the matrix of:",
    "opts": {
      "A": "Hyaline cartilage and elastic cartilage",
      "B": "Compact bone osteons",
      "C": "Dense regular tendons",
      "D": "Spleen reticular stroma"
    },
    "ans": "A",
    "exp": "Type II collagen forms thin, delicate fibrillar networks characteristic of hyaline and elastic cartilage matrix.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 138,
    "q": "Argyrophilic reticular fibres that form the structural framework (stroma) of lymph nodes, spleen, and bone marrow are composed of:",
    "opts": {
      "A": "Type III collagen",
      "B": "Elastin",
      "C": "Keratin",
      "D": "Fibrillin"
    },
    "ans": "A",
    "exp": "Reticular fibres are composed of Type III collagen and form fine branching meshworks supporting soft lymphoid parenchyma.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 139,
    "q": "Elastic fibres consist of an amorphous elastin core surrounded by microfibrils composed of:",
    "opts": {
      "A": "Fibrillin",
      "B": "Fibroin",
      "C": "Actin",
      "D": "Tropomyosin"
    },
    "ans": "A",
    "exp": "Elastin core is surrounded by an outer scaffold of fibrillin glycoprotein microfibrils.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 140,
    "q": "Mutations in the fibrillin-1 gene lead to defective elastic fibres, skeletal abnormalities, and aortic aneurysms in:",
    "opts": {
      "A": "Marfan syndrome",
      "B": "Osteogenesis imperfecta",
      "C": "Scurvy",
      "D": "Rickets"
    },
    "ans": "A",
    "exp": "Marfan syndrome results from FBN1 mutations, impairing elastic tissue integrity in the cardiovascular and musculoskeletal systems.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 141,
    "q": "Brown adipose tissue generates heat without shivering due to the high concentration of which mitochondrial uncoupling protein?",
    "opts": {
      "A": "Thermogenin (UCP-1)",
      "B": "Cytochrome c oxidase",
      "C": "ATP synthase",
      "D": "Hexokinase"
    },
    "ans": "A",
    "exp": "Thermogenin (uncoupling protein-1) uncouples the mitochondrial proton gradient from ATP synthesis, generating heat.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 142,
    "q": "Why is brown fat particularly abundant in human neonates and hibernating mammals?",
    "opts": {
      "A": "It maintains core body temperature via non-shivering thermogenesis",
      "B": "It stores excess calcium for bone growth",
      "C": "It provides mechanical insulation only",
      "D": "It produces digestive enzymes during fasting"
    },
    "ans": "A",
    "exp": "Neonates and hibernators rely on brown fat thermogenesis to combat hypothermia due to their high surface-area-to-volume ratio.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 143,
    "q": "Heparin secreted by connective tissue mast cells is chemically a:",
    "opts": {
      "A": "Sulphated glycosaminoglycan",
      "B": "Neutral triglyceride",
      "C": "Globular protein enzyme",
      "D": "Phospholipid"
    },
    "ans": "A",
    "exp": "Heparin is an anticoagulant sulphated glycosaminoglycan that activates antithrombin III.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 144,
    "q": "Histamine released by mast cells during allergic or inflammatory reactions causes:",
    "opts": {
      "A": "Arteriolar vasodilation and increased post-capillary venular permeability",
      "B": "Vasoconstriction and decreased blood flow",
      "C": "Bronchodilation and reduced mucus secretion",
      "D": "Inhibition of neutrophil recruitment"
    },
    "ans": "A",
    "exp": "Histamine stimulates vascular H1 receptors, inducing vasodilation, local redness, and plasma extravasation (oedema).",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 145,
    "q": "Plasma cells present in loose connective tissue are differentiated from which cells to produce antibodies?",
    "opts": {
      "A": "B-lymphocytes",
      "B": "T-lymphocytes",
      "C": "Monocytes",
      "D": "Mast cells"
    },
    "ans": "A",
    "exp": "Activated B-lymphocytes differentiate into antibody-secreting plasma cells with characteristic eccentric 'clock-face' nuclei.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 146,
    "q": "The ground substance of cartilage consists of large proteoglycan aggregates (aggrecan) containing:",
    "opts": {
      "A": "Chondroitin sulphate and keratan sulphate",
      "B": "Glycogen and starch",
      "C": "Cellulose and pectin",
      "D": "Hyaluronic acid only"
    },
    "ans": "A",
    "exp": "Cartilage ground substance contains aggrecan aggregates rich in chondroitin sulphate and keratan sulphate bound to hyaluronan.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 147,
    "q": "Which type of cartilage covers the articular surfaces of movable joints and forms costal cartilages?",
    "opts": {
      "A": "Hyaline cartilage",
      "B": "Elastic cartilage",
      "C": "White fibrocartilage",
      "D": "Calcified cartilage"
    },
    "ans": "A",
    "exp": "Hyaline cartilage provides a glassy, low-friction articulating surface at synovial joints, costal margins, and respiratory passages.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 148,
    "q": "The pinna of the ear, epiglottis, and Eustachian tube are supported by which type of cartilage?",
    "opts": {
      "A": "Elastic cartilage",
      "B": "Hyaline cartilage",
      "C": "White fibrocartilage",
      "D": "Fibrous dense connective tissue"
    },
    "ans": "A",
    "exp": "Elastic cartilage contains dense networks of elastic fibres, allowing repeated deformation and recoil in the ear and epiglottis.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 149,
    "q": "Intervertebral discs and the pubic symphysis require tremendous compression and shock resistance; they are composed of:",
    "opts": {
      "A": "White fibrocartilage",
      "B": "Hyaline cartilage",
      "C": "Elastic cartilage",
      "D": "Areolar connective tissue"
    },
    "ans": "A",
    "exp": "Fibrocartilage contains dense parallel Type I collagen bundles interspersed with chondrocytes, giving it maximal tensile and shock-absorbing capacity.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 150,
    "q": "Cartilage lacks an internal vascular supply. How do chondrocytes receive oxygen and nutrients?",
    "opts": {
      "A": "By diffusion through the gel-like matrix from blood vessels in the perichondrium",
      "B": "Through Haversian canals running within the matrix",
      "C": "Directly from red blood cells embedded in lacunae",
      "D": "Via canaliculi connecting to bone marrow"
    },
    "ans": "A",
    "exp": "Cartilage is avascular; chondrocytes obtain nutrients and exchange metabolic wastes solely by diffusion from the outer perichondrium.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 151,
    "q": "The outer fibrous connective tissue covering of bones that anchors tendons and contains osteogenic progenitor cells is the:",
    "opts": {
      "A": "Periosteum",
      "B": "Endosteum",
      "C": "Perichondrium",
      "D": "Epimysium"
    },
    "ans": "A",
    "exp": "The periosteum is a vascularised fibrous membrane covering the outer surface of bone, containing osteoprogenitor cells in its inner cambium layer.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 152,
    "q": "In mammalian compact bone, each cylindrical structural subunit is known as an:",
    "opts": {
      "A": "Osteon (Haversian system)",
      "B": "Osteoid",
      "C": "Osteoclast",
      "D": "Osteocyte lacuna"
    },
    "ans": "A",
    "exp": "The osteon is the basic structural unit of compact bone, composed of concentric lamellae arranged around a neurovascular Haversian canal.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 153,
    "q": "In a Haversian system, what structure connects osteocytes in adjacent lacunae to allow intercellular metabolite transfer?",
    "opts": {
      "A": "Canaliculi containing cytoplasmic processes and gap junctions",
      "B": "Volkmann's perforating canals",
      "C": "Endosteal sinuses",
      "D": "Intercalated discs"
    },
    "ans": "A",
    "exp": "Tiny micro-canals called canaliculi house slender osteocyte cytoplasmic processes joined by gap junctions for metabolic exchange.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 154,
    "q": "Perforating canals that run transversely or obliquely to connect adjacent Haversian canals with the periosteum and marrow cavity are:",
    "opts": {
      "A": "Volkmann's canals",
      "B": "Canaliculi",
      "C": "Central Haversian canals",
      "D": "Medullary sinuses"
    },
    "ans": "A",
    "exp": "Volkmann's (perforating) canals transmit blood vessels from the periosteum across the bone shaft perpendicular to Haversian canals.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 155,
    "q": "Multinucleated bone-resorbing giant cells derived from macrophage precursors that dissolve mineralised bone matrix are:",
    "opts": {
      "A": "Osteoclasts",
      "B": "Osteoblasts",
      "C": "Osteocytes",
      "D": "Chondroblasts"
    },
    "ans": "A",
    "exp": "Osteoclasts are giant multinucleate cells that secrete hydrochloric acid and cathepsin K in Howship's lacunae to resorb bone matrix.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 156,
    "q": "Osteoblasts synthesize and secrete the unmineralized organic component of bone matrix known as:",
    "opts": {
      "A": "Osteoid",
      "B": "Chondrin",
      "C": "Hydroxyapatite",
      "D": "Ossein mineral"
    },
    "ans": "A",
    "exp": "Osteoid is the unmineralized organic matrix secreted by osteoblasts, composed primarily of Type I collagen and ground substance.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 157,
    "q": "The inorganic mineral crystals that confer hardness and rigidity to vertebrate bone matrix are primarily:",
    "opts": {
      "A": "Calcium hydroxyapatite [Ca10(PO4)6(OH)2]",
      "B": "Calcium carbonate calcite crystals",
      "C": "Sodium chloride crystals",
      "D": "Magnesium sulphate"
    },
    "ans": "A",
    "exp": "Hydroxyapatite microcrystals embedded in collagen fibrils account for roughly 65% of bone dry weight, resisting compression.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 158,
    "q": "Which major plasma protein exerts approximately 80% of total plasma colloid oncotic pressure, preventing fluid leakage into tissues?",
    "opts": {
      "A": "Serum albumin",
      "B": "Fibrinogen",
      "C": "Gamma-globulin",
      "D": "Prothrombin"
    },
    "ans": "A",
    "exp": "Serum albumin is the most abundant plasma protein and maintains intravascular oncotic pressure against hydrostatic filtration.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 159,
    "q": "What is the normal physiological lifespan of red blood cells in the human circulation before destruction in the spleen?",
    "opts": {
      "A": "About 120 days",
      "B": "About 10 days",
      "C": "About 24 hours",
      "D": "About 2 years"
    },
    "ans": "A",
    "exp": "Human erythrocytes circulate for approximately 120 days before being phagocytosed by reticuloendothelial macrophages in the spleen and liver.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 160,
    "q": "The most abundant leukocyte in human blood, showing multi-lobed nuclei and active phagocytic defence against bacterial infections, is the:",
    "opts": {
      "A": "Neutrophil",
      "B": "Eosinophil",
      "C": "Basophil",
      "D": "Lymphocyte"
    },
    "ans": "A",
    "exp": "Neutrophils make up 60-65% of circulating WBCs and provide the primary first-line phagocytic response to bacterial invaders.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Connective Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 161,
    "q": "In skeletal muscle, a bundle of muscle fibres is known as a fascicle, and each fascicle is enveloped by:",
    "opts": {
      "A": "Perimysium",
      "B": "Epimysium",
      "C": "Endomysium",
      "D": "Sarcolemma"
    },
    "ans": "A",
    "exp": "A muscle is surrounded by epimysium; individual fascicles are wrapped by perimysium, and individual muscle fibres by endomysium.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 162,
    "q": "The repeating functional contractile unit of a skeletal muscle myofibril between two successive Z-lines is called a:",
    "opts": {
      "A": "Sarcomere",
      "B": "Myofilament",
      "C": "Fascicle",
      "D": "T-tubule"
    },
    "ans": "A",
    "exp": "The sarcomere is the segment between two consecutive Z-lines, representing the structural and functional contractile unit of striated muscle.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 163,
    "q": "During sarcomere shortening in muscle contraction, which band remains constant in width?",
    "opts": {
      "A": "A-band",
      "B": "I-band",
      "C": "H-zone",
      "D": "Distance between Z-lines"
    },
    "ans": "A",
    "exp": "The A-band corresponds to the full length of thick myosin filaments and remains constant in width during contraction.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 164,
    "q": "In resting skeletal muscle, the active myosin-binding sites on actin filaments are masked by:",
    "opts": {
      "A": "Tropomyosin",
      "B": "Troponin C",
      "C": "Meromyosin",
      "D": "Titin"
    },
    "ans": "A",
    "exp": "In resting muscle, filamentous tropomyosin lies in the groove of F-actin, physically blocking myosin-binding sites.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 165,
    "q": "Calcium ions released from the sarcoplasmic reticulum during excitation-contraction coupling bind directly to:",
    "opts": {
      "A": "Troponin C",
      "B": "Troponin T",
      "C": "Tropomyosin",
      "D": "Myosin light chain"
    },
    "ans": "A",
    "exp": "Ca2+ binds to the troponin C subunit, causing a conformational shift that pulls tropomyosin away from actin binding sites.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 166,
    "q": "Transverse tubules (T-tubules) in skeletal muscle are deep tubular invaginations of the:",
    "opts": {
      "A": "Sarcolemma",
      "B": "Sarcoplasmic reticulum",
      "C": "Nuclear envelope",
      "D": "Endomysium"
    },
    "ans": "A",
    "exp": "T-tubules are invaginations of the plasma membrane (sarcolemma) that propagate action potentials into the interior of the muscle fibre.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 167,
    "q": "A 'triad' in skeletal muscle fibres is composed of:",
    "opts": {
      "A": "One T-tubule flanked by two terminal cisternae of the sarcoplasmic reticulum",
      "B": "Two T-tubules and one sarcolemma fold",
      "C": "One Z-line and two M-lines",
      "D": "Three cross-bridges per myosin filament"
    },
    "ans": "A",
    "exp": "A triad consists of a central T-tubule and two adjacent terminal cisternae of sarcoplasmic reticulum at the A-I junction.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 168,
    "q": "Smooth muscle cells lack troponin. What calcium-binding protein activates myosin light-chain kinase (MLCK) in smooth muscle?",
    "opts": {
      "A": "Calmodulin",
      "B": "Calsequestrin",
      "C": "Parvalbumin",
      "D": "Actinin"
    },
    "ans": "A",
    "exp": "In smooth muscle, Ca2+ binds to calmodulin; the Ca2+-calmodulin complex activates MLCK to phosphorylate myosin regulatory light chains.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 169,
    "q": "Single-unit (visceral) smooth muscle contracts rhythmically as a coordinated functional syncytium because individual cells are coupled by:",
    "opts": {
      "A": "Abundant gap junctions",
      "B": "Dense regular tendons",
      "C": "Skeletal motor endplates",
      "D": "Thick myelin sheaths"
    },
    "ans": "A",
    "exp": "Abundant gap junctions electrically couple single-unit smooth muscle cells, allowing waves of depolarization (peristalsis) to spread across the organ wall.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 170,
    "q": "Multiunit smooth muscle is found in which of the following structures?",
    "opts": {
      "A": "Ciliary body of the eye and arrector pili muscles of skin",
      "B": "Muscularis externa of small intestine",
      "C": "Myometrium of uterus",
      "D": "Wall of urinary bladder"
    },
    "ans": "A",
    "exp": "Multiunit smooth muscle cells (e.g., iris, ciliary muscle, arrector pili) are individually innervated by autonomic nerve terminals with few gap junctions.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 171,
    "q": "Cardiac muscle fibres are connected end-to-end by intercalated discs that contain fascia adherens, desmosomes, and:",
    "opts": {
      "A": "Gap junctions",
      "B": "Tight junctions only",
      "C": "Neuromuscular junctions",
      "D": "Myelin lamellae"
    },
    "ans": "A",
    "exp": "Intercalated discs contain desmosomes and fascia adherens for mechanical adhesion, and gap junctions for electrical syncytial coupling.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 172,
    "q": "Why does cardiac muscle resist fatigue under continuous lifetime pumping activity?",
    "opts": {
      "A": "It possesses extremely high mitochondrial volume, rich myoglobin content, and dense capillary vascularity",
      "B": "It relies entirely on anaerobic glycolysis",
      "C": "It lacks a sarcoplasmic reticulum",
      "D": "It does not hydrolyse ATP"
    },
    "ans": "A",
    "exp": "Cardiac myocytes have a very high volume fraction of mitochondria (~40%) and continuous coronary blood flow supporting aerobic metabolism.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 173,
    "q": "The sodium-potassium pump (Na+/K+-ATPase) in the axonal membrane maintains the resting potential by transporting:",
    "opts": {
      "A": "3 Na+ outward for every 2 K+ inward, consuming 1 ATP",
      "B": "2 Na+ outward for every 3 K+ inward",
      "C": "3 Na+ inward and 2 K+ outward passively",
      "D": "Equal amounts of Na+ and K+ outward"
    },
    "ans": "A",
    "exp": "The electrogenic Na+/K+-ATPase actively extrudes 3 Na+ ions and imports 2 K+ ions per ATP consumed, maintaining negative resting interior.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 174,
    "q": "The normal resting membrane potential of a mammalian neuron is approximately:",
    "opts": {
      "A": "-70 mV",
      "B": "+30 mV",
      "C": "0 mV",
      "D": "-120 mV"
    },
    "ans": "A",
    "exp": "The interior of a resting excitable axon is polarized at about -70 mV relative to the extracellular fluid.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 175,
    "q": "Depolarisation of an axon during an action potential is triggered when membrane potential reaches threshold, opening:",
    "opts": {
      "A": "Voltage-gated sodium channels",
      "B": "Voltage-gated potassium channels",
      "C": "Ligand-gated chloride channels",
      "D": "Leakage potassium channels"
    },
    "ans": "A",
    "exp": "Reaching threshold triggers opening of activation gates of voltage-gated Na+ channels, driving rapid inward Na+ flux.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 176,
    "q": "Repolarisation of an action potential back towards the resting potential is driven by:",
    "opts": {
      "A": "Opening of voltage-gated K+ channels and potassium efflux",
      "B": "Continued influx of sodium ions",
      "C": "Activation of calcium pumps",
      "D": "Inflow of chloride ions through desmosomes"
    },
    "ans": "A",
    "exp": "Inactivation of Na+ channels accompanied by delayed opening of voltage-gated K+ channels drives K+ efflux, restoring negative interior potential.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 177,
    "q": "Saltatory conduction in myelinated axons increases impulse velocity because:",
    "opts": {
      "A": "Action potentials regenerate exclusively at the Nodes of Ranvier",
      "B": "The entire internodal myelin is depolarised simultaneously",
      "C": "Schwann cells synthesise ATP along the axon",
      "D": "Myelin contains open sodium pores"
    },
    "ans": "A",
    "exp": "Myelin acts as an electrical insulator; ionic current flows longitudinally beneath myelin and depolarises only the next Node of Ranvier.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 178,
    "q": "Which neuroglial cells form the myelin sheath around axons within the Central Nervous System (CNS)?",
    "opts": {
      "A": "Oligodendrocytes",
      "B": "Schwann cells",
      "C": "Astrocytes",
      "D": "Microglia"
    },
    "ans": "A",
    "exp": "Oligodendrocytes extend multiple processes that myelinate several CNS axons, whereas Schwann cells myelinate single axon internodes in the PNS.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 179,
    "q": "Which glial cells extend vascular end-feet around brain capillaries to form the blood-brain barrier (BBB)?",
    "opts": {
      "A": "Astrocytes",
      "B": "Microglia",
      "C": "Oligodendrocytes",
      "D": "Ependymal cells"
    },
    "ans": "A",
    "exp": "Astrocytes envelope capillary endothelium with foot processes, inducing tight junction formation that creates the blood-brain barrier.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 180,
    "q": "Resident phagocytes of the Central Nervous System that engulf dead cells and debris are the:",
    "opts": {
      "A": "Microglial cells",
      "B": "Astrocytes",
      "C": "Ependymal cells",
      "D": "Oligodendrocytes"
    },
    "ans": "A",
    "exp": "Microglia are specialized mesoderm-derived macrophages that act as the active immune defence in the brain and spinal cord.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 181,
    "q": "The lining of brain ventricles and the central canal of the spinal cord is composed of ciliated glial cells called:",
    "opts": {
      "A": "Ependymal cells",
      "B": "Schwann cells",
      "C": "Satellite cells",
      "D": "Astrocytes"
    },
    "ans": "A",
    "exp": "Ependymal cells form a simple ciliated cuboidal-to-columnar epithelium lining CSF-filled ventricles and canals, facilitating CSF flow.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 182,
    "q": "At chemical synapses, neurotransmitter exocytosis from synaptic vesicles is triggered directly by the influx of:",
    "opts": {
      "A": "Calcium ions (Ca2+)",
      "B": "Potassium ions (K+)",
      "C": "Chloride ions (Cl-)",
      "D": "Magnesium ions (Mg2+)"
    },
    "ans": "A",
    "exp": "Action potential depolarisation opens voltage-gated Ca2+ channels at the terminal; Ca2+ influx binds synaptotagmin, driving vesicle fusion.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 183,
    "q": "Which enzyme rapidly degrades acetylcholine in the synaptic cleft into choline and acetate?",
    "opts": {
      "A": "Acetylcholinesterase",
      "B": "Choline acetyltransferase",
      "C": "Monoamine oxidase",
      "D": "Catechol-O-methyltransferase"
    },
    "ans": "A",
    "exp": "Acetylcholinesterase in the synaptic cleft hydrolyses acetylcholine in fractions of a millisecond, preventing persistent stimulation.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 184,
    "q": "The primary inhibitory neurotransmitter in the vertebrate cerebral cortex is:",
    "opts": {
      "A": "GABA (Gamma-aminobutyric acid)",
      "B": "Glutamate",
      "C": "Acetylcholine",
      "D": "Norepinephrine"
    },
    "ans": "A",
    "exp": "GABA activates GABAA receptors, opening ligand-gated chloride channels that hyperpolarise postsynaptic neuronal membranes.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 185,
    "q": "The primary excitatory neurotransmitter in the mammalian central nervous system is:",
    "opts": {
      "A": "Glutamate",
      "B": "GABA",
      "C": "Glycine",
      "D": "Serotonin"
    },
    "ans": "A",
    "exp": "Glutamate binds ionotropic AMPA and NMDA receptors to generate excitatory postsynaptic potentials (EPSPs).",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 186,
    "q": "Sensory neurons in the dorsal root ganglion of spinal nerves are morphologically:",
    "opts": {
      "A": "Pseudounipolar neurons",
      "B": "Multipolar neurons",
      "C": "Bipolar neurons",
      "D": "Anaxonic neurons"
    },
    "ans": "A",
    "exp": "Dorsal root ganglion sensory neurons are pseudounipolar, possessing a single stem axon that bifurcates into peripheral and central branches.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 187,
    "q": "Which neurons are typically bipolar, having one axon and one dendrite?",
    "opts": {
      "A": "Neurons of the retina of the eye and olfactory epithelium",
      "B": "Motor neurons of spinal cord ventral horn",
      "C": "Pyramidal cells of cerebral cortex",
      "D": "Purkinje cells of cerebellum"
    },
    "ans": "A",
    "exp": "Bipolar neurons with one dendrite and one axon are located in specialized sensory structures like the retinal neural layer and olfactory mucosa.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 188,
    "q": "During the absolute refractory period of a nerve fibre:",
    "opts": {
      "A": "No new action potential can be triggered because voltage-gated Na+ channels are inactivated",
      "B": "A supramaximal stimulus can trigger an impulse",
      "C": "The membrane potential is deeply hyperpolarised",
      "D": "Potassium channels are completely blocked"
    },
    "ans": "A",
    "exp": "Inactivation gates of voltage-gated Na+ channels remain closed and unresponsive during the absolute refractory period, preventing re-excitation.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 189,
    "q": "A motor unit consists of:",
    "opts": {
      "A": "One motor neuron and all the skeletal muscle fibres it innervates",
      "B": "All motor neurons in one spinal segment",
      "C": "One muscle fibre and all its myofibrils",
      "D": "A tendon and its attached muscle"
    },
    "ans": "A",
    "exp": "A motor unit comprises a single somatic motor neuron and all the muscle fibres it branches to innervate.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 190,
    "q": "Nissl bodies present in the soma of neurons represent:",
    "opts": {
      "A": "Aggregates of rough endoplasmic reticulum and polyribosomes",
      "B": "Damaged lysosomes filled with lipofuscin",
      "C": "Mitochondrial clusters",
      "D": "Secretory vesicles containing neurotransmitters"
    },
    "ans": "A",
    "exp": "Nissl granules are dense basophilic clusters of rough endoplasmic reticulum and ribosomes specialized for protein synthesis in neurons.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 191,
    "q": "Which region of a neuron typically lacks Nissl granules?",
    "opts": {
      "A": "Axon and axon hillock",
      "B": "Dendritic arbor",
      "C": "Perikaryon (soma)",
      "D": "Nucleolus"
    },
    "ans": "A",
    "exp": "The axon hillock and the entire axon lack Nissl bodies; axonal proteins are synthesized in the soma and transported via axoplasmic flow.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 192,
    "q": "The reflex arc responsible for the knee-jerk (patellar) reflex is classified as:",
    "opts": {
      "A": "Monosynaptic stretch reflex",
      "B": "Polysynaptic withdrawal reflex",
      "C": "Conditioned reflex",
      "D": "Autonomic reflex"
    },
    "ans": "A",
    "exp": "The knee-jerk reflex is a monosynaptic reflex where sensory afferents from muscle spindles synapse directly onto alpha motor neurons in the spinal cord.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 193,
    "q": "In an electrical synapse, the distance between presynaptic and postsynaptic membranes is only ~2 nm, bridged by:",
    "opts": {
      "A": "Gap junctions",
      "B": "Synaptic cleft containing enzymes",
      "C": "Intermediate filaments",
      "D": "Desmosomal dense plaques"
    },
    "ans": "A",
    "exp": "Electrical synapses are bridged directly by connexon channels (gap junctions), ensuring bidirectional, practically instantaneous electrical conduction.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Neural Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 194,
    "q": "Which muscle protein has ATPase activity and forms the cross-bridges with actin?",
    "opts": {
      "A": "Heavy meromyosin (HMM) globular head",
      "B": "Light meromyosin (LMM)",
      "C": "Troponin I",
      "D": "Tropomyosin"
    },
    "ans": "A",
    "exp": "The globular head of heavy meromyosin (HMM) has actin-binding sites and an active ATPase site that drives the power stroke.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 195,
    "q": "Rigor mortis that sets in after death is caused by:",
    "opts": {
      "A": "Exhaustion of ATP, preventing detachment of myosin cross-bridges from actin",
      "B": "Excessive production of lactic acid",
      "C": "Rupture of sarcolemma membranes",
      "D": "Hypersecretion of acetylcholine"
    },
    "ans": "A",
    "exp": "ATP is required to detach myosin heads from actin filaments; when ATP depletes post-mortem, cross-bridges remain locked in rigor mortis.",
    "diff": "Medium",
    "topic_key": "tissues",
    "subtopic": "Muscular Tissue",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 196,
    "q": "The triangular head capsule of cockroach is formed embryologically by the fusion of how many segments?",
    "opts": {
      "A": "Six embryonic segments",
      "B": "Three embryonic segments",
      "C": "Ten embryonic segments",
      "D": "Four embryonic segments"
    },
    "ans": "A",
    "exp": "The head of cockroach is formed by the fusion of six embryonic segments, conferring high mobility in all planes on a flexible neck.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 197,
    "q": "The compound eyes of cockroach are made of approximately 2,000 hexagonal visual units termed:",
    "opts": {
      "A": "Ommatidia",
      "B": "Ocelli",
      "C": "Rhabdomes",
      "D": "Sensillae"
    },
    "ans": "A",
    "exp": "Each compound eye consists of ~2,000 hexagonal ommatidia that combine to produce a mosaic image.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 198,
    "q": "The vision of cockroach is termed mosaic vision, which is characterised by:",
    "opts": {
      "A": "High light sensitivity but low resolution, suitable for nocturnal vision",
      "B": "High resolution but low sensitivity during daylight",
      "C": "Binocular stereoscopic vision with color perception",
      "D": "Infrared thermal image detection"
    },
    "ans": "A",
    "exp": "Mosaic vision gives cockroaches exceptional sensitivity in dim nocturnal light, though image resolution is relatively coarse.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 199,
    "q": "The antennae of cockroach arise from membranous sockets and bear sensory receptors for:",
    "opts": {
      "A": "Tactile (touch) and olfactory (smell) sensations",
      "B": "Sound frequency analysis only",
      "C": "Vision and light intensity",
      "D": "Thermoregulation exclusively"
    },
    "ans": "A",
    "exp": "Antennae are covered in sensory sensillae that monitor tactile, olfactory, and thermal cues in the environment.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 200,
    "q": "The mouthparts of cockroach include a median flexible lobe acting as a tongue, known as the:",
    "opts": {
      "A": "Hypopharynx",
      "B": "Labrum",
      "C": "Labium",
      "D": "Galea"
    },
    "ans": "A",
    "exp": "The hypopharynx lies within the preoral cavity, functioning as the tongue, with salivary ducts opening at its base.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 201,
    "q": "The five segments of a cockroach walking leg in order from proximal to distal are:",
    "opts": {
      "A": "Coxa, Trochanter, Femur, Tibia, Tarsus",
      "B": "Femur, Tibia, Coxa, Trochanter, Tarsus",
      "C": "Coxa, Femur, Trochanter, Tibia, Tarsus",
      "D": "Trochanter, Coxa, Femur, Tibia, Pretarsus"
    },
    "ans": "A",
    "exp": "From base to tip, the podomeres are: large coxa, small trochanter, stout femur, spiny tibia, and 5-segmented tarsus.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 202,
    "q": "The adhesive pad present on the pretarsus between the two claws of cockroach leg is the:",
    "opts": {
      "A": "Arolium",
      "B": "Plantula",
      "C": "Coxa",
      "D": "Galea"
    },
    "ans": "A",
    "exp": "The arolium is an adhesive pad on the pretarsus enabling the cockroach to climb smooth vertical walls and inverted ceilings.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 203,
    "q": "Forewings (tegmina) of cockroach arise from the mesothorax and function to:",
    "opts": {
      "A": "Cover and protect the delicate membranous hindwings when at rest",
      "B": "Provide primary lift and propulsion during flight",
      "C": "Produce courtship sounds by friction",
      "D": "Perform gas exchange in humid air"
    },
    "ans": "A",
    "exp": "Tegmina are dark, opaque, leathery mesothoracic wings that protect the transparent metathoracic hindwings at rest.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 204,
    "q": "Anal styles are present in male cockroaches but absent in females. They arise from the sternum of the:",
    "opts": {
      "A": "9th abdominal segment",
      "B": "10th abdominal segment",
      "C": "7th abdominal segment",
      "D": "8th abdominal segment"
    },
    "ans": "A",
    "exp": "A pair of unjointed anal styles projects from the 9th sternum of male cockroaches only.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 205,
    "q": "Anal cerci are sensitive auditory and mechanoreceptive filamentous structures present in both sexes on the:",
    "opts": {
      "A": "10th abdominal segment",
      "B": "9th abdominal segment",
      "C": "8th abdominal segment",
      "D": "7th abdominal segment"
    },
    "ans": "A",
    "exp": "Anal cerci are 15-segmented jointed sensory appendages borne on the 10th abdominal tergum of both sexes.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 206,
    "q": "The crop of cockroach alimentary canal opens into the gizzard (proventriculus), which contains:",
    "opts": {
      "A": "An outer circular muscular layer and an inner thick cuticle with six chitinous teeth",
      "B": "A ring of 100 Malpighian tubules",
      "C": "Ten pairs of respiratory spiracles",
      "D": "A glandular ciliated epithelium without cuticle"
    },
    "ans": "A",
    "exp": "The gizzard has circular muscles and six cuticular teeth that crush solid food particles before filtration.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 207,
    "q": "Why are the foregut and hindgut of cockroach lined internally by a chitinous cuticle?",
    "opts": {
      "A": "They are derived from embryonic ectoderm (stomodaeum and proctodaeum)",
      "B": "They are derived from endodermal coelomic epithelium",
      "C": "They undergo continuous secondary growth",
      "D": "To prevent absorption of toxic nutrients"
    },
    "ans": "A",
    "exp": "The foregut and hindgut are ectodermal invaginations, retaining an internal protective chitinous cuticular lining.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 208,
    "q": "The midgut (mesenteron) of cockroach is endodermal and not cuticular; it is protected from food abrasion by:",
    "opts": {
      "A": "A peritrophic membrane secreted by midgut cells",
      "B": "An arthrodial membrane",
      "C": "A layer of dense bone lamellae",
      "D": "A thick keratinised stratum corneum"
    },
    "ans": "A",
    "exp": "The midgut epithelium secretes a permeable chitin-protein peritrophic membrane around the food bolus.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 209,
    "q": "A ring of 6 to 8 blind tubules at the junction of foregut and midgut that secrete digestive juices is the:",
    "opts": {
      "A": "Hepatic (gastric) caeca",
      "B": "Malpighian tubules",
      "C": "Salivary receptacles",
      "D": "Colleterial glands"
    },
    "ans": "A",
    "exp": "Hepatic caeca secrete digestive enzymes into the mesenteron for carbohydrate and protein hydrolysis.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 210,
    "q": "Malpighian tubules in cockroach are located at the junction of:",
    "opts": {
      "A": "Midgut and hindgut",
      "B": "Foregut and midgut",
      "C": "Crop and gizzard",
      "D": "Ileum and colon"
    },
    "ans": "A",
    "exp": "About 100-150 yellow, hair-like Malpighian tubules arise at the junction between the mesenteron and ileum.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 211,
    "q": "The heart of cockroach lies along the mid-dorsal line of the thorax and abdomen and consists of how many funnel-shaped chambers?",
    "opts": {
      "A": "13 chambers",
      "B": "10 chambers",
      "C": "8 chambers",
      "D": "4 chambers"
    },
    "ans": "A",
    "exp": "The dorsal tubular heart of cockroach comprises 13 funnel-shaped contractile chambers (3 thoracic and 10 abdominal).",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 212,
    "q": "Hemolymph enters the chambers of cockroach heart from the pericardial sinus through paired lateral openings called:",
    "opts": {
      "A": "Ostia",
      "B": "Spiracles",
      "C": "Fenestrae",
      "D": "Ommatidia"
    },
    "ans": "A",
    "exp": "Each heart chamber has a pair of lateral valvular ostia through which hemolymph enters during diastolic relaxation.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 213,
    "q": "Paired fan-shaped muscles attached to the terga and dorsal diaphragm that assist heart pumping are:",
    "opts": {
      "A": "Alary muscles (12 pairs)",
      "B": "Intercostal muscles",
      "C": "Circular proventricular muscles",
      "D": "Coxal retractor muscles"
    },
    "ans": "A",
    "exp": "Twelve pairs of triangular alary muscles expand the pericardial sinus, driving hemolymph flow into heart ostia.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 214,
    "q": "Cockroach hemolymph is colourless because it lacks haemoglobin; how is oxygen delivered to tissues?",
    "opts": {
      "A": "Tracheal tubes and microscopic fluid-filled tracheoles deliver air directly to cells",
      "B": "Oxygen dissolves in open pericardial fluid",
      "C": "Oxygen diffuses across the waxy abdominal cuticle",
      "D": "Book lungs pump air into the ventral sinus"
    },
    "ans": "A",
    "exp": "Insects breathe via a branching tracheal system delivering atmospheric air directly to tissues through tracheoles.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 215,
    "q": "The respiratory spiracles in cockroach consist of 10 pairs located:",
    "opts": {
      "A": "2 pairs on the thorax and 8 pairs on the abdomen",
      "B": "3 pairs on thorax and 7 pairs on abdomen",
      "C": "1 pair on head and 9 on body",
      "D": "10 pairs all on abdomen"
    },
    "ans": "A",
    "exp": "Cockroaches possess 10 pairs of spiracles: 2 thoracic (meso- and metathoracic) and 8 abdominal pairs.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 216,
    "q": "Cockroaches excrete nitrogenous waste primarily as crystals of uric acid, which makes them:",
    "opts": {
      "A": "Uricotelic animals",
      "B": "Ureotelic animals",
      "C": "Ammonotelic animals",
      "D": "Guanotelic animals"
    },
    "ans": "A",
    "exp": "Malpighian tubules convert potassium urate into insoluble uric acid crystals, conserving water (uricotelism).",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 217,
    "q": "Besides Malpighian tubules, which of the following tissues assist in storage excretion in cockroach?",
    "opts": {
      "A": "Fat body urate cells, pericardial nephrocytes, and uricose glands",
      "B": "Flame cells and solenocytes",
      "C": "Green antennal glands",
      "D": "Bidder's organs"
    },
    "ans": "A",
    "exp": "Cockroach excretion is supplemented by urate cells of the fat body, nephrocytes, and male uricose glands.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 218,
    "q": "The ventral double nerve cord of cockroach bears how many ganglia?",
    "opts": {
      "A": "9 ganglia (3 thoracic and 6 abdominal)",
      "B": "10 ganglia (all abdominal)",
      "C": "6 ganglia (2 thoracic and 4 abdominal)",
      "D": "12 ganglia"
    },
    "ans": "A",
    "exp": "The ventral nerve cord has 3 large thoracic ganglia and 6 abdominal ganglia, with the 6th abdominal ganglion being the largest.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 219,
    "q": "The 'brain' of a cockroach is represented by the:",
    "opts": {
      "A": "Supra-oesophageal ganglion",
      "B": "Sub-oesophageal ganglion",
      "C": "Prothoracic ganglion",
      "D": "Sixth abdominal ganglion"
    },
    "ans": "A",
    "exp": "The supra-oesophageal ganglion lies above the oesophagus, innervating the compound eyes and antennae.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 220,
    "q": "In male cockroach, the testes are located in which abdominal segments?",
    "opts": {
      "A": "4th to 6th abdominal segments",
      "B": "2nd to 4th abdominal segments",
      "C": "7th to 9th abdominal segments",
      "D": "1st to 3rd abdominal segments"
    },
    "ans": "A",
    "exp": "A pair of 3-lobed testes lies dorsolaterally in the 4th to 6th abdominal segments.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 221,
    "q": "The mushroom-shaped gland (utricular gland) of male cockroach functions as an accessory gland and lies in segments:",
    "opts": {
      "A": "6th and 7th abdominal segments",
      "B": "2nd and 3rd abdominal segments",
      "C": "4th and 5th abdominal segments",
      "D": "9th and 10th abdominal segments"
    },
    "ans": "A",
    "exp": "The mushroom-shaped gland in segments 6-7 consists of small and long tubules secreting nourishment for sperms.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 222,
    "q": "Sperms in male cockroach are bundled together into packets called:",
    "opts": {
      "A": "Spermatophores",
      "B": "Spermatids",
      "C": "Spermatozoa",
      "D": "Seminal sacs"
    },
    "ans": "A",
    "exp": "Sperms are glued into multilayered packets called spermatophores, transferred to the female during copulation.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 223,
    "q": "In female cockroach, each ovary consists of how many ovarian tubules (ovarioles)?",
    "opts": {
      "A": "Eight ovarioles",
      "B": "Six ovarioles",
      "C": "Twelve ovarioles",
      "D": "Two ovarioles"
    },
    "ans": "A",
    "exp": "Each of the two ovaries consists of 8 ovarioles containing a linear chain of developing ova.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 224,
    "q": "The spermatheca in female cockroach is located in which segment and functions to:",
    "opts": {
      "A": "6th abdominal segment; store sperms received during copulation",
      "B": "2nd abdominal segment; secrete the egg shell",
      "C": "10th segment; produce ova",
      "D": "7th segment; digest food"
    },
    "ans": "A",
    "exp": "A pair of unequal spermathecae in the 6th segment receives and stores spermatophores until fertilisation.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 225,
    "q": "The development of cockroach is paurometabolous, with nymphs undergoing how many moults to become adults?",
    "opts": {
      "A": "13 moults",
      "B": "7 moults",
      "C": "5 moults",
      "D": "20 moults"
    },
    "ans": "A",
    "exp": "Nymphs undergo 13 instars/moults; wing pads appear in the penultimate stage, but only adults possess mature wings.",
    "diff": "Medium",
    "topic_key": "cockroach",
    "subtopic": "Cockroach Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 226,
    "q": "The skin of Rana tigrina is covered in dark spots and has a protective olive-green dorsal colouration; this adaptation is:",
    "opts": {
      "A": "Camouflage (protective mimicry)",
      "B": "Warning colouration (aposematism)",
      "C": "Bioluminescence",
      "D": "Thermal radiation emission"
    },
    "ans": "A",
    "exp": "Frogs exhibit camouflage to match wetland vegetation, shielding them from visual avian and mammalian predators.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 227,
    "q": "Why does a frog never swallow water through its mouth?",
    "opts": {
      "A": "It absorbs water directly through its moist, highly vascularized skin",
      "B": "It metabolises all water from fat breakdown",
      "C": "Its stomach lacks water channels",
      "D": "Its cloaca excretes dry uric acid"
    },
    "ans": "A",
    "exp": "Frogs satisfy their water needs by absorbing water directly across their thin, mucus-coated cutaneous membrane.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 228,
    "q": "In male frogs, nuptial pads (copulatory pads) develop during the breeding season on:",
    "opts": {
      "A": "The first digit of the forelimbs",
      "B": "All five digits of the hindlimbs",
      "C": "The throat region above vocal sacs",
      "D": "The dorsal surface of the tympanum"
    },
    "ans": "A",
    "exp": "Male frogs possess a copulatory (nuptial) pad on the ventral surface of the first digit of each forelimb for amplexus clasping.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 229,
    "q": "The tympanic membrane of frog functions to:",
    "opts": {
      "A": "Receive environmental sound vibrations directly, as external ears are absent",
      "B": "Assist in cutaneous gas exchange",
      "C": "Detect changes in water salinity",
      "D": "Secrete lubricant for the nictitating membrane"
    },
    "ans": "A",
    "exp": "Frogs lack an external pinna; sound waves directly vibrate the surface tympanum, transmitting vibrations to the columella auris.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Morphology",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 230,
    "q": "The digestive tract of a frog is relatively short compared to that of herbivores because:",
    "opts": {
      "A": "Frogs are carnivores whose insect food is concentrated and rapidly digested",
      "B": "Frogs absorb nutrients through cutaneous capillaries",
      "C": "Frogs do not possess a true stomach",
      "D": "Bacterial fermentation occurs in the cloaca"
    },
    "ans": "A",
    "exp": "Carnivorous animals have shorter digestive tracts because animal tissues are more easily digested than fibrous plant cellulose.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 231,
    "q": "The frog tongue is specialized for prey capture by being:",
    "opts": {
      "A": "Muscular, bilobed at the tip, and attached anteriorly to the lower jaw",
      "B": "Unilobed and fixed to the back of the pharynx",
      "C": "Trifid and non-extensile",
      "D": "Cartilaginous and barbed"
    },
    "ans": "A",
    "exp": "The tongue is attached to the anterior margin of the lower jaw, allowing it to rapidly flip out and snare insects.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 232,
    "q": "In frog, the bile produced by liver hepatocytes is stored in the gall bladder and enters the duodenum via the:",
    "opts": {
      "A": "Common bile duct (hepatopancreatic duct)",
      "B": "Cystic duct directly into stomach",
      "C": "Bidder's canal",
      "D": "Ureter"
    },
    "ans": "A",
    "exp": "Bile from the gall bladder and pancreatic juice pass through the common hepatopancreatic duct into the duodenum.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 233,
    "q": "During hibernation (winter sleep) and aestivation (summer sleep), frogs respire exclusively through:",
    "opts": {
      "A": "Cutaneous respiration (skin)",
      "B": "Pulmonary respiration (lungs)",
      "C": "Buccopharyngeal cavity",
      "D": "Gills"
    },
    "ans": "A",
    "exp": "While buried in mud during dormancy, frogs rely exclusively on cutaneous diffusion for oxygen and carbon dioxide exchange.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 234,
    "q": "The heart of frog is 3-chambered and receives deoxygenated blood from the body into an accessory triangular chamber called the:",
    "opts": {
      "A": "Sinus venosus",
      "B": "Conus arteriosus",
      "C": "Truncus arteriosus",
      "D": "Left atrium"
    },
    "ans": "A",
    "exp": "Venous blood from two precavals and one postcaval empties into the dorsal triangular sinus venosus, which enters the right atrium.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 235,
    "q": "Ventrally, the single muscular ventricle of the frog heart pumps blood into the:",
    "opts": {
      "A": "Conus arteriosus (truncus arteriosus)",
      "B": "Sinus venosus",
      "C": "Pulmonary vein",
      "D": "Bidder's canal"
    },
    "ans": "A",
    "exp": "The ventricle pumps mixed blood into the conus arteriosus, which directs flow into the three paired arterial arches.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 236,
    "q": "In frog, the pulmo-cutaneous arch carries blood from the heart to the:",
    "opts": {
      "A": "Lungs and skin for oxygenation",
      "B": "Brain and ocular orbits",
      "C": "Liver and intestinal villi",
      "D": "Kidneys and testes"
    },
    "ans": "A",
    "exp": "The pulmo-cutaneous arch branches into pulmonary and cutaneous arteries supplying the respiratory lungs and vascular skin.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 237,
    "q": "Frog erythrocytes differ from human erythrocytes in being:",
    "opts": {
      "A": "Nucleated, oval, and biconvex",
      "B": "Non-nucleated, biconcave, and circular",
      "C": "Spherical and lacking haemoglobin",
      "D": "Sickle-shaped and polyploid"
    },
    "ans": "A",
    "exp": "Frog RBCs are large, oval, biconvex, and retain a functional nucleus throughout their lifespan.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 238,
    "q": "The special venous connection in frogs that carries blood from the posterior limbs and alimentary canal to the kidneys is the:",
    "opts": {
      "A": "Renal portal system",
      "B": "Hepatic portal system",
      "C": "Hypophyseal portal system",
      "D": "Pulmonary portal system"
    },
    "ans": "A",
    "exp": "Frogs possess a well-developed renal portal system transporting venous blood from hindlimbs to kidney capillary beds.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 239,
    "q": "In male frogs, the testes are attached to the kidneys by a peritoneal fold termed the:",
    "opts": {
      "A": "Mesorchium",
      "B": "Mesovarium",
      "C": "Mesentery",
      "D": "Falciform ligament"
    },
    "ans": "A",
    "exp": "A pair of yellowish ovoid testes is suspended from the anteroventral surface of the kidneys by the mesorchium.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 240,
    "q": "In male frogs, 10 to 12 vasa efferentia leave the testes and enter the kidney to open into:",
    "opts": {
      "A": "Bidder's canal",
      "B": "Wolffian duct directly",
      "C": "Urinary bladder directly",
      "D": "Oviduct"
    },
    "ans": "A",
    "exp": "Vasa efferentia enter the kidney and communicate with Bidder's canal, which connects to the longitudinal collecting urinogenital duct.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 241,
    "q": "Because the ureter in male frog carries both urine and spermatozoa, it is termed the:",
    "opts": {
      "A": "Urinogenital duct",
      "B": "Vas deferens exclusively",
      "C": "Bidder's canal",
      "D": "Cloacal papilla"
    },
    "ans": "A",
    "exp": "In male frogs, the duct from the kidney conveys both excretory urine and sperm into the cloaca, functioning as a urinogenital duct.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 242,
    "q": "In female frogs, the oviducts and ureters:",
    "opts": {
      "A": "Open separately into the cloaca",
      "B": "Fuse to form a single urinogenital duct",
      "C": "Connect directly to Bidder's canal",
      "D": "Empty into the urinary bladder"
    },
    "ans": "A",
    "exp": "In female frogs, ureters and elongated coiled oviducts open completely independently into the cloaca; they have no connection to ovaries.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 243,
    "q": "A single mature female frog can lay how many eggs during one spawning event?",
    "opts": {
      "A": "2,500 to 3,000 ova",
      "B": "10 to 20 ova",
      "C": "50 to 100 ova",
      "D": "50,000 ova"
    },
    "ans": "A",
    "exp": "Female frogs release 2,500-3,000 ova into water, where external fertilisation by the amplexing male occurs.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 244,
    "q": "The cranial box of the frog gives origin to how many pairs of cranial nerves?",
    "opts": {
      "A": "10 pairs",
      "B": "12 pairs",
      "C": "31 pairs",
      "D": "8 pairs"
    },
    "ans": "A",
    "exp": "Amphibians like frogs possess 10 pairs of cranial nerves (unlike reptiles, birds, and mammals which have 12).",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 245,
    "q": "The midbrain of frog consists of a prominent pair of:",
    "opts": {
      "A": "Optic lobes (corpora bigemina)",
      "B": "Olfactory bulbs",
      "C": "Cerebral hemispheres",
      "D": "Corpora quadrigemina"
    },
    "ans": "A",
    "exp": "The frog midbrain consists of a prominent pair of optic lobes (corpora bigemina) that process visual input.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 246,
    "q": "The frog hindbrain consists of which two structures?",
    "opts": {
      "A": "Cerebellum and medulla oblongata",
      "B": "Cerebral cortex and thalamus",
      "C": "Pons and hypothalamus",
      "D": "Optic chiasma and infundibulum"
    },
    "ans": "A",
    "exp": "The hindbrain consists of a narrow transverse cerebellum and a medulla oblongata passing into the spinal cord.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 247,
    "q": "The single ear ossicle present in the middle ear cavity of frog is the:",
    "opts": {
      "A": "Columella auris (stapes homologue)",
      "B": "Malleus",
      "C": "Incus",
      "D": "Hyoid horn"
    },
    "ans": "A",
    "exp": "Frogs have a single middle ear ossicle, the rod-like columella auris, transmitting sound waves from the tympanum to the inner ear.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 248,
    "q": "The yellow, finger-like fat bodies located immediately anterior to each kidney in frog function to:",
    "opts": {
      "A": "Store reserve lipids for hibernation, aestivation, and gamete maturation",
      "B": "Filter nitrogenous wastes from lymph",
      "C": "Secrete digestive enzymes into the stomach",
      "D": "Produce red blood cells during larval life"
    },
    "ans": "A",
    "exp": "Fat bodies store lipid reserves utilised during dormancy (hibernation/aestivation) and provide energy for breeding.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 249,
    "q": "Amphibian metamorphosis of a gill-breathing herbivorous tadpole into an air-breathing carnivorous frog is stimulated by:",
    "opts": {
      "A": "Thyroxine hormone (produced by the thyroid gland)",
      "B": "Growth hormone",
      "C": "Adrenaline",
      "D": "Insulin"
    },
    "ans": "A",
    "exp": "Thyroxine promotes tail resorption, limb development, lung formation, and digestive tract remodeling during metamorphosis.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  },
  {
    "q_num": 250,
    "q": "Adult frogs excrete nitrogenous waste primarily as urea and are therefore ureotelic, whereas tadpole larvae excrete:",
    "opts": {
      "A": "Ammonia (ammonotelic)",
      "B": "Uric acid crystals (uricotelic)",
      "C": "Guanine crystals (guanotelic)",
      "D": "Amino acids directly"
    },
    "ans": "A",
    "exp": "Aquatic tadpoles excrete toxic ammonia directly into surrounding water, switching to urea production upon metamorphosing into terrestrial adults.",
    "diff": "Medium",
    "topic_key": "frog",
    "subtopic": "Frog Anatomy",
    "q_type": "Standard MCQ"
  }
]

print("SOA Part 2 raw helper ready.")
