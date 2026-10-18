import json

def make_q(num, text, oA, oB, oC, oD, ans, exp, topic, sub, diff="Medium"):
    return {
        "q_num": num,
        "q": text,
        "opts": {"A": oA, "B": oB, "C": oC, "D": oD},
        "ans": ans,
        "exp": exp,
        "diff": diff,
        "topic_key": topic,
        "subtopic": sub,
        "q_type": "Standard MCQ"
    }

qs = []

# Q126-Q160: Epithelial & Connective Tissues (35 MCQs)
qs.append(make_q(126, "Which epithelial type lines the urinary bladder and is specialized to allow stretching without cell rupture?",
    "Transitional epithelium (urothelium)", "Simple squamous epithelium", "Keratinised stratified squamous epithelium", "Pseudostratified ciliated columnar epithelium",
    "A", "Transitional epithelium (urothelium) lines distensible urinary organs like the bladder and ureters, flattening as volume increases.", "tissues", "Epithelial Tissue"))

qs.append(make_q(127, "Non-keratinised stratified squamous epithelium is found lining which of the following moist surfaces?",
    "Oral cavity, pharynx, oesophagus, and vagina", "Dry epidermal surface of skin", "Alveoli of lungs", "Proximal convoluted tubule of nephron",
    "A", "Non-keratinised stratified squamous epithelium covers moist friction-prone surfaces such as the buccal cavity, oesophagus, and vagina.", "tissues", "Epithelial Tissue"))

qs.append(make_q(128, "Why does pseudostratified epithelium appear multilayered under a light microscope?",
    "All cells touch the basement membrane, but nuclei lie at different levels due to differing cell heights", "It consists of three distinct embryological layers", "Rapid mitosis produces multiple layers of dividing cells", "It lacks a basal lamina entirely",
    "A", "All cells rest on the basal lamina, but vary in height, placing nuclei at differing levels and simulating stratification.", "tissues", "Epithelial Tissue"))

qs.append(make_q(129, "Which cell junctions anchor intermediate keratin filaments between adjacent epithelial cells, conferring mechanical shear resistance?",
    "Desmosomes (maculae adherentes)", "Gap junctions", "Tight junctions", "Hemidesmosomes only",
    "A", "Desmosomes use transmembrane cadherins (desmoglein/desmocollin) linked to intermediate keratin filaments to resist mechanical shear.", "tissues", "Epithelial Tissue"))

qs.append(make_q(130, "The major transmembrane proteins that form the seal in tight junctions (zonulae occludentes) are:",
    "Claudins and occludins", "Connexins and integrins", "Cadherins and selectins", "Actin and myosin",
    "A", "Claudins and occludins polymerise to form the barrier strands of tight junctions that prevent paracellular water/solute leak.", "tissues", "Epithelial Tissue"))

qs.append(make_q(131, "Gap junctions are made of hexameric channel-forming protein complexes known as:",
    "Connexons, each made of six connexin subunits", "Integrons made of tubulin dimers", "Cadherin complexes", "Desmoplakins",
    "A", "A gap junction channel comprises two docked hexameric connexons, each composed of six transmembrane connexin proteins.", "tissues", "Epithelial Tissue"))

qs.append(make_q(132, "Mammary glands release portions of the apical cytoplasm along with secretory droplets. This secretory mechanism is classified as:",
    "Apocrine secretion", "Merocrine (eccrine) secretion", "Holocrine secretion", "Endocrine secretion",
    "A", "In apocrine secretion (e.g., mammary glands), the apical membrane-bound portion of the cytoplasm pinches off with the secretory product.", "tissues", "Epithelial Tissue"))

qs.append(make_q(133, "Sebaceous glands in mammalian skin discharge sebum by the complete lysis and disintegration of whole secretory cells. This is termed:",
    "Holocrine secretion", "Merocrine secretion", "Apocrine secretion", "Cytocrine secretion",
    "A", "In holocrine glands (e.g., sebaceous glands), the entire cell disintegrates to release its accumulated secretory content.", "tissues", "Epithelial Tissue"))

qs.append(make_q(134, "Sweat glands and salivary glands secrete products via exocytosis with no loss of cellular cytoplasm. This mode is:",
    "Merocrine (eccrine) secretion", "Apocrine secretion", "Holocrine secretion", "Paracrine secretion",
    "A", "Merocrine glands discharge secretory vesicles via exocytosis without damaging the secretory cell.", "tissues", "Epithelial Tissue"))

qs.append(make_q(135, "The basement membrane of epithelium consists of:",
    "Basal lamina (secreted by epithelial cells) and reticular lamina (secreted by connective tissue)", "Perichondrium and periosteum", "Endothelium and mesothelium", "Tunica intima and tunica media",
    "A", "The basement membrane has an epithelial-derived basal lamina (laminin, type IV collagen) and a connective tissue-derived reticular lamina.", "tissues", "Epithelial Tissue"))

qs.append(make_q(136, "Which type of collagen fibre provides high tensile strength in tendons, bone matrix, and the dermis?",
    "Type I collagen", "Type II collagen", "Type III collagen", "Type IV collagen",
    "A", "Type I collagen forms thick, non-elastic parallel bundles that resist longitudinal tension in tendons, ligaments, and bones.", "tissues", "Connective Tissue"))

qs.append(make_q(137, "Type II collagen is the predominant fibrillar collagen found in the matrix of:",
    "Hyaline cartilage and elastic cartilage", "Compact bone osteons", "Dense regular tendons", "Spleen reticular stroma",
    "A", "Type II collagen forms thin, delicate fibrillar networks characteristic of hyaline and elastic cartilage matrix.", "tissues", "Connective Tissue"))

qs.append(make_q(138, "Argyrophilic reticular fibres that form the structural framework (stroma) of lymph nodes, spleen, and bone marrow are composed of:",
    "Type III collagen", "Elastin", "Keratin", "Fibrillin",
    "A", "Reticular fibres are composed of Type III collagen and form fine branching meshworks supporting soft lymphoid parenchyma.", "tissues", "Connective Tissue"))

qs.append(make_q(139, "Elastic fibres consist of an amorphous elastin core surrounded by microfibrils composed of:",
    "Fibrillin", "Fibroin", "Actin", "Tropomyosin",
    "A", "Elastin core is surrounded by an outer scaffold of fibrillin glycoprotein microfibrils.", "tissues", "Connective Tissue"))

qs.append(make_q(140, "Mutations in the fibrillin-1 gene lead to defective elastic fibres, skeletal abnormalities, and aortic aneurysms in:",
    "Marfan syndrome", "Osteogenesis imperfecta", "Scurvy", "Rickets",
    "A", "Marfan syndrome results from FBN1 mutations, impairing elastic tissue integrity in the cardiovascular and musculoskeletal systems.", "tissues", "Connective Tissue"))

qs.append(make_q(141, "Brown adipose tissue generates heat without shivering due to the high concentration of which mitochondrial uncoupling protein?",
    "Thermogenin (UCP-1)", "Cytochrome c oxidase", "ATP synthase", "Hexokinase",
    "A", "Thermogenin (uncoupling protein-1) uncouples the mitochondrial proton gradient from ATP synthesis, generating heat.", "tissues", "Connective Tissue"))

qs.append(make_q(142, "Why is brown fat particularly abundant in human neonates and hibernating mammals?",
    "It maintains core body temperature via non-shivering thermogenesis", "It stores excess calcium for bone growth", "It provides mechanical insulation only", "It produces digestive enzymes during fasting",
    "A", "Neonates and hibernators rely on brown fat thermogenesis to combat hypothermia due to their high surface-area-to-volume ratio.", "tissues", "Connective Tissue"))

qs.append(make_q(143, "Heparin secreted by connective tissue mast cells is chemically a:",
    "Sulphated glycosaminoglycan", "Neutral triglyceride", "Globular protein enzyme", "Phospholipid",
    "A", "Heparin is an anticoagulant sulphated glycosaminoglycan that activates antithrombin III.", "tissues", "Connective Tissue"))

qs.append(make_q(144, "Histamine released by mast cells during allergic or inflammatory reactions causes:",
    "Arteriolar vasodilation and increased post-capillary venular permeability", "Vasoconstriction and decreased blood flow", "Bronchodilation and reduced mucus secretion", "Inhibition of neutrophil recruitment",
    "A", "Histamine stimulates vascular H1 receptors, inducing vasodilation, local redness, and plasma extravasation (oedema).", "tissues", "Connective Tissue"))

qs.append(make_q(145, "Plasma cells present in loose connective tissue are differentiated from which cells to produce antibodies?",
    "B-lymphocytes", "T-lymphocytes", "Monocytes", "Mast cells",
    "A", "Activated B-lymphocytes differentiate into antibody-secreting plasma cells with characteristic eccentric 'clock-face' nuclei.", "tissues", "Connective Tissue"))

qs.append(make_q(146, "The ground substance of cartilage consists of large proteoglycan aggregates (aggrecan) containing:",
    "Chondroitin sulphate and keratan sulphate", "Glycogen and starch", "Cellulose and pectin", "Hyaluronic acid only",
    "A", "Cartilage ground substance contains aggrecan aggregates rich in chondroitin sulphate and keratan sulphate bound to hyaluronan.", "tissues", "Connective Tissue"))

qs.append(make_q(147, "Which type of cartilage covers the articular surfaces of movable joints and forms costal cartilages?",
    "Hyaline cartilage", "Elastic cartilage", "White fibrocartilage", "Calcified cartilage",
    "A", "Hyaline cartilage provides a glassy, low-friction articulating surface at synovial joints, costal margins, and respiratory passages.", "tissues", "Connective Tissue"))

qs.append(make_q(148, "The pinna of the ear, epiglottis, and Eustachian tube are supported by which type of cartilage?",
    "Elastic cartilage", "Hyaline cartilage", "White fibrocartilage", "Fibrous dense connective tissue",
    "A", "Elastic cartilage contains dense networks of elastic fibres, allowing repeated deformation and recoil in the ear and epiglottis.", "tissues", "Connective Tissue"))

qs.append(make_q(149, "Intervertebral discs and the pubic symphysis require tremendous compression and shock resistance; they are composed of:",
    "White fibrocartilage", "Hyaline cartilage", "Elastic cartilage", "Areolar connective tissue",
    "A", "Fibrocartilage contains dense parallel Type I collagen bundles interspersed with chondrocytes, giving it maximal tensile and shock-absorbing capacity.", "tissues", "Connective Tissue"))

qs.append(make_q(150, "Cartilage lacks an internal vascular supply. How do chondrocytes receive oxygen and nutrients?",
    "By diffusion through the gel-like matrix from blood vessels in the perichondrium", "Through Haversian canals running within the matrix", "Directly from red blood cells embedded in lacunae", "Via canaliculi connecting to bone marrow",
    "A", "Cartilage is avascular; chondrocytes obtain nutrients and exchange metabolic wastes solely by diffusion from the outer perichondrium.", "tissues", "Connective Tissue"))

qs.append(make_q(151, "The outer fibrous connective tissue covering of bones that anchors tendons and contains osteogenic progenitor cells is the:",
    "Periosteum", "Endosteum", "Perichondrium", "Epimysium",
    "A", "The periosteum is a vascularised fibrous membrane covering the outer surface of bone, containing osteoprogenitor cells in its inner cambium layer.", "tissues", "Connective Tissue"))

qs.append(make_q(152, "In mammalian compact bone, each cylindrical structural subunit is known as an:",
    "Osteon (Haversian system)", "Osteoid", "Osteoclast", "Osteocyte lacuna",
    "A", "The osteon is the basic structural unit of compact bone, composed of concentric lamellae arranged around a neurovascular Haversian canal.", "tissues", "Connective Tissue"))

qs.append(make_q(153, "In a Haversian system, what structure connects osteocytes in adjacent lacunae to allow intercellular metabolite transfer?",
    "Canaliculi containing cytoplasmic processes and gap junctions", "Volkmann's perforating canals", "Endosteal sinuses", "Intercalated discs",
    "A", "Tiny micro-canals called canaliculi house slender osteocyte cytoplasmic processes joined by gap junctions for metabolic exchange.", "tissues", "Connective Tissue"))

qs.append(make_q(154, "Perforating canals that run transversely or obliquely to connect adjacent Haversian canals with the periosteum and marrow cavity are:",
    "Volkmann's canals", "Canaliculi", "Central Haversian canals", "Medullary sinuses",
    "A", "Volkmann's (perforating) canals transmit blood vessels from the periosteum across the bone shaft perpendicular to Haversian canals.", "tissues", "Connective Tissue"))

qs.append(make_q(155, "Multinucleated bone-resorbing giant cells derived from macrophage precursors that dissolve mineralised bone matrix are:",
    "Osteoclasts", "Osteoblasts", "Osteocytes", "Chondroblasts",
    "A", "Osteoclasts are giant multinucleate cells that secrete hydrochloric acid and cathepsin K in Howship's lacunae to resorb bone matrix.", "tissues", "Connective Tissue"))

qs.append(make_q(156, "Osteoblasts synthesize and secrete the unmineralized organic component of bone matrix known as:",
    "Osteoid", "Chondrin", "Hydroxyapatite", "Ossein mineral",
    "A", "Osteoid is the unmineralized organic matrix secreted by osteoblasts, composed primarily of Type I collagen and ground substance.", "tissues", "Connective Tissue"))

qs.append(make_q(157, "The inorganic mineral crystals that confer hardness and rigidity to vertebrate bone matrix are primarily:",
    "Calcium hydroxyapatite [Ca10(PO4)6(OH)2]", "Calcium carbonate calcite crystals", "Sodium chloride crystals", "Magnesium sulphate",
    "A", "Hydroxyapatite microcrystals embedded in collagen fibrils account for roughly 65% of bone dry weight, resisting compression.", "tissues", "Connective Tissue"))

qs.append(make_q(158, "Which major plasma protein exerts approximately 80% of total plasma colloid oncotic pressure, preventing fluid leakage into tissues?",
    "Serum albumin", "Fibrinogen", "Gamma-globulin", "Prothrombin",
    "A", "Serum albumin is the most abundant plasma protein and maintains intravascular oncotic pressure against hydrostatic filtration.", "tissues", "Connective Tissue"))

qs.append(make_q(159, "What is the normal physiological lifespan of red blood cells in the human circulation before destruction in the spleen?",
    "About 120 days", "About 10 days", "About 24 hours", "About 2 years",
    "A", "Human erythrocytes circulate for approximately 120 days before being phagocytosed by reticuloendothelial macrophages in the spleen and liver.", "tissues", "Connective Tissue"))

qs.append(make_q(160, "The most abundant leukocyte in human blood, showing multi-lobed nuclei and active phagocytic defence against bacterial infections, is the:",
    "Neutrophil", "Eosinophil", "Basophil", "Lymphocyte",
    "A", "Neutrophils make up 60-65% of circulating WBCs and provide the primary first-line phagocytic response to bacterial invaders.", "tissues", "Connective Tissue"))

# Q161-Q195: Muscular & Neural Tissues (35 MCQs)
qs.append(make_q(161, "In skeletal muscle, a bundle of muscle fibres is known as a fascicle, and each fascicle is enveloped by:",
    "Perimysium", "Epimysium", "Endomysium", "Sarcolemma",
    "A", "A muscle is surrounded by epimysium; individual fascicles are wrapped by perimysium, and individual muscle fibres by endomysium.", "tissues", "Muscular Tissue"))

qs.append(make_q(162, "The repeating functional contractile unit of a skeletal muscle myofibril between two successive Z-lines is called a:",
    "Sarcomere", "Myofilament", "Fascicle", "T-tubule",
    "A", "The sarcomere is the segment between two consecutive Z-lines, representing the structural and functional contractile unit of striated muscle.", "tissues", "Muscular Tissue"))

qs.append(make_q(163, "During sarcomere shortening in muscle contraction, which band remains constant in width?",
    "A-band", "I-band", "H-zone", "Distance between Z-lines",
    "A", "The A-band corresponds to the full length of thick myosin filaments and remains constant in width during contraction.", "tissues", "Muscular Tissue"))

qs.append(make_q(164, "In resting skeletal muscle, the active myosin-binding sites on actin filaments are masked by:",
    "Tropomyosin", "Troponin C", "Meromyosin", "Titin",
    "A", "In resting muscle, filamentous tropomyosin lies in the groove of F-actin, physically blocking myosin-binding sites.", "tissues", "Muscular Tissue"))

qs.append(make_q(165, "Calcium ions released from the sarcoplasmic reticulum during excitation-contraction coupling bind directly to:",
    "Troponin C", "Troponin T", "Tropomyosin", "Myosin light chain",
    "A", "Ca2+ binds to the troponin C subunit, causing a conformational shift that pulls tropomyosin away from actin binding sites.", "tissues", "Muscular Tissue"))

qs.append(make_q(166, "Transverse tubules (T-tubules) in skeletal muscle are deep tubular invaginations of the:",
    "Sarcolemma", "Sarcoplasmic reticulum", "Nuclear envelope", "Endomysium",
    "A", "T-tubules are invaginations of the plasma membrane (sarcolemma) that propagate action potentials into the interior of the muscle fibre.", "tissues", "Muscular Tissue"))

qs.append(make_q(167, "A 'triad' in skeletal muscle fibres is composed of:",
    "One T-tubule flanked by two terminal cisternae of the sarcoplasmic reticulum", "Two T-tubules and one sarcolemma fold", "One Z-line and two M-lines", "Three cross-bridges per myosin filament",
    "A", "A triad consists of a central T-tubule and two adjacent terminal cisternae of sarcoplasmic reticulum at the A-I junction.", "tissues", "Muscular Tissue"))

qs.append(make_q(168, "Smooth muscle cells lack troponin. What calcium-binding protein activates myosin light-chain kinase (MLCK) in smooth muscle?",
    "Calmodulin", "Calsequestrin", "Parvalbumin", "Actinin",
    "A", "In smooth muscle, Ca2+ binds to calmodulin; the Ca2+-calmodulin complex activates MLCK to phosphorylate myosin regulatory light chains.", "tissues", "Muscular Tissue"))

qs.append(make_q(169, "Single-unit (visceral) smooth muscle contracts rhythmically as a coordinated functional syncytium because individual cells are coupled by:",
    "Abundant gap junctions", "Dense regular tendons", "Skeletal motor endplates", "Thick myelin sheaths",
    "A", "Abundant gap junctions electrically couple single-unit smooth muscle cells, allowing waves of depolarization (peristalsis) to spread across the organ wall.", "tissues", "Muscular Tissue"))

qs.append(make_q(170, "Multiunit smooth muscle is found in which of the following structures?",
    "Ciliary body of the eye and arrector pili muscles of skin", "Muscularis externa of small intestine", "Myometrium of uterus", "Wall of urinary bladder",
    "A", "Multiunit smooth muscle cells (e.g., iris, ciliary muscle, arrector pili) are individually innervated by autonomic nerve terminals with few gap junctions.", "tissues", "Muscular Tissue"))

qs.append(make_q(171, "Cardiac muscle fibres are connected end-to-end by intercalated discs that contain fascia adherens, desmosomes, and:",
    "Gap junctions", "Tight junctions only", "Neuromuscular junctions", "Myelin lamellae",
    "A", "Intercalated discs contain desmosomes and fascia adherens for mechanical adhesion, and gap junctions for electrical syncytial coupling.", "tissues", "Muscular Tissue"))

qs.append(make_q(172, "Why does cardiac muscle resist fatigue under continuous lifetime pumping activity?",
    "It possesses extremely high mitochondrial volume, rich myoglobin content, and dense capillary vascularity", "It relies entirely on anaerobic glycolysis", "It lacks a sarcoplasmic reticulum", "It does not hydrolyse ATP",
    "A", "Cardiac myocytes have a very high volume fraction of mitochondria (~40%) and continuous coronary blood flow supporting aerobic metabolism.", "tissues", "Muscular Tissue"))

qs.append(make_q(173, "The sodium-potassium pump (Na+/K+-ATPase) in the axonal membrane maintains the resting potential by transporting:",
    "3 Na+ outward for every 2 K+ inward, consuming 1 ATP", "2 Na+ outward for every 3 K+ inward", "3 Na+ inward and 2 K+ outward passively", "Equal amounts of Na+ and K+ outward",
    "A", "The electrogenic Na+/K+-ATPase actively extrudes 3 Na+ ions and imports 2 K+ ions per ATP consumed, maintaining negative resting interior.", "tissues", "Neural Tissue"))

qs.append(make_q(174, "The normal resting membrane potential of a mammalian neuron is approximately:",
    "-70 mV", "+30 mV", "0 mV", "-120 mV",
    "A", "The interior of a resting excitable axon is polarized at about -70 mV relative to the extracellular fluid.", "tissues", "Neural Tissue"))

qs.append(make_q(175, "Depolarisation of an axon during an action potential is triggered when membrane potential reaches threshold, opening:",
    "Voltage-gated sodium channels", "Voltage-gated potassium channels", "Ligand-gated chloride channels", "Leakage potassium channels",
    "A", "Reaching threshold triggers opening of activation gates of voltage-gated Na+ channels, driving rapid inward Na+ flux.", "tissues", "Neural Tissue"))

qs.append(make_q(176, "Repolarisation of an action potential back towards the resting potential is driven by:",
    "Opening of voltage-gated K+ channels and potassium efflux", "Continued influx of sodium ions", "Activation of calcium pumps", "Inflow of chloride ions through desmosomes",
    "A", "Inactivation of Na+ channels accompanied by delayed opening of voltage-gated K+ channels drives K+ efflux, restoring negative interior potential.", "tissues", "Neural Tissue"))

qs.append(make_q(177, "Saltatory conduction in myelinated axons increases impulse velocity because:",
    "Action potentials regenerate exclusively at the Nodes of Ranvier", "The entire internodal myelin is depolarised simultaneously", "Schwann cells synthesise ATP along the axon", "Myelin contains open sodium pores",
    "A", "Myelin acts as an electrical insulator; ionic current flows longitudinally beneath myelin and depolarises only the next Node of Ranvier.", "tissues", "Neural Tissue"))

qs.append(make_q(178, "Which neuroglial cells form the myelin sheath around axons within the Central Nervous System (CNS)?",
    "Oligodendrocytes", "Schwann cells", "Astrocytes", "Microglia",
    "A", "Oligodendrocytes extend multiple processes that myelinate several CNS axons, whereas Schwann cells myelinate single axon internodes in the PNS.", "tissues", "Neural Tissue"))

qs.append(make_q(179, "Which glial cells extend vascular end-feet around brain capillaries to form the blood-brain barrier (BBB)?",
    "Astrocytes", "Microglia", "Oligodendrocytes", "Ependymal cells",
    "A", "Astrocytes envelope capillary endothelium with foot processes, inducing tight junction formation that creates the blood-brain barrier.", "tissues", "Neural Tissue"))

qs.append(make_q(180, "Resident phagocytes of the Central Nervous System that engulf dead cells and debris are the:",
    "Microglial cells", "Astrocytes", "Ependymal cells", "Oligodendrocytes",
    "A", "Microglia are specialized mesoderm-derived macrophages that act as the active immune defence in the brain and spinal cord.", "tissues", "Neural Tissue"))

qs.append(make_q(181, "The lining of brain ventricles and the central canal of the spinal cord is composed of ciliated glial cells called:",
    "Ependymal cells", "Schwann cells", "Satellite cells", "Astrocytes",
    "A", "Ependymal cells form a simple ciliated cuboidal-to-columnar epithelium lining CSF-filled ventricles and canals, facilitating CSF flow.", "tissues", "Neural Tissue"))

qs.append(make_q(182, "At chemical synapses, neurotransmitter exocytosis from synaptic vesicles is triggered directly by the influx of:",
    "Calcium ions (Ca2+)", "Potassium ions (K+)", "Chloride ions (Cl-)", "Magnesium ions (Mg2+)",
    "A", "Action potential depolarisation opens voltage-gated Ca2+ channels at the terminal; Ca2+ influx binds synaptotagmin, driving vesicle fusion.", "tissues", "Neural Tissue"))

qs.append(make_q(183, "Which enzyme rapidly degrades acetylcholine in the synaptic cleft into choline and acetate?",
    "Acetylcholinesterase", "Choline acetyltransferase", "Monoamine oxidase", "Catechol-O-methyltransferase",
    "A", "Acetylcholinesterase in the synaptic cleft hydrolyses acetylcholine in fractions of a millisecond, preventing persistent stimulation.", "tissues", "Neural Tissue"))

qs.append(make_q(184, "The primary inhibitory neurotransmitter in the vertebrate cerebral cortex is:",
    "GABA (Gamma-aminobutyric acid)", "Glutamate", "Acetylcholine", "Norepinephrine",
    "A", "GABA activates GABAA receptors, opening ligand-gated chloride channels that hyperpolarise postsynaptic neuronal membranes.", "tissues", "Neural Tissue"))

qs.append(make_q(185, "The primary excitatory neurotransmitter in the mammalian central nervous system is:",
    "Glutamate", "GABA", "Glycine", "Serotonin",
    "A", "Glutamate binds ionotropic AMPA and NMDA receptors to generate excitatory postsynaptic potentials (EPSPs).", "tissues", "Neural Tissue"))

qs.append(make_q(186, "Sensory neurons in the dorsal root ganglion of spinal nerves are morphologically:",
    "Pseudounipolar neurons", "Multipolar neurons", "Bipolar neurons", "Anaxonic neurons",
    "A", "Dorsal root ganglion sensory neurons are pseudounipolar, possessing a single stem axon that bifurcates into peripheral and central branches.", "tissues", "Neural Tissue"))

qs.append(make_q(187, "Which neurons are typically bipolar, having one axon and one dendrite?",
    "Neurons of the retina of the eye and olfactory epithelium", "Motor neurons of spinal cord ventral horn", "Pyramidal cells of cerebral cortex", "Purkinje cells of cerebellum",
    "A", "Bipolar neurons with one dendrite and one axon are located in specialized sensory structures like the retinal neural layer and olfactory mucosa.", "tissues", "Neural Tissue"))

qs.append(make_q(188, "During the absolute refractory period of a nerve fibre:",
    "No new action potential can be triggered because voltage-gated Na+ channels are inactivated", "A supramaximal stimulus can trigger an impulse", "The membrane potential is deeply hyperpolarised", "Potassium channels are completely blocked",
    "A", "Inactivation gates of voltage-gated Na+ channels remain closed and unresponsive during the absolute refractory period, preventing re-excitation.", "tissues", "Neural Tissue"))

qs.append(make_q(189, "A motor unit consists of:",
    "One motor neuron and all the skeletal muscle fibres it innervates", "All motor neurons in one spinal segment", "One muscle fibre and all its myofibrils", "A tendon and its attached muscle",
    "A", "A motor unit comprises a single somatic motor neuron and all the muscle fibres it branches to innervate.", "tissues", "Muscular Tissue"))

qs.append(make_q(190, "Nissl bodies present in the soma of neurons represent:",
    "Aggregates of rough endoplasmic reticulum and polyribosomes", "Damaged lysosomes filled with lipofuscin", "Mitochondrial clusters", "Secretory vesicles containing neurotransmitters",
    "A", "Nissl granules are dense basophilic clusters of rough endoplasmic reticulum and ribosomes specialized for protein synthesis in neurons.", "tissues", "Neural Tissue"))

qs.append(make_q(191, "Which region of a neuron typically lacks Nissl granules?",
    "Axon and axon hillock", "Dendritic arbor", "Perikaryon (soma)", "Nucleolus",
    "A", "The axon hillock and the entire axon lack Nissl bodies; axonal proteins are synthesized in the soma and transported via axoplasmic flow.", "tissues", "Neural Tissue"))

qs.append(make_q(192, "The reflex arc responsible for the knee-jerk (patellar) reflex is classified as:",
    "Monosynaptic stretch reflex", "Polysynaptic withdrawal reflex", "Conditioned reflex", "Autonomic reflex",
    "A", "The knee-jerk reflex is a monosynaptic reflex where sensory afferents from muscle spindles synapse directly onto alpha motor neurons in the spinal cord.", "tissues", "Neural Tissue"))

qs.append(make_q(193, "In an electrical synapse, the distance between presynaptic and postsynaptic membranes is only ~2 nm, bridged by:",
    "Gap junctions", "Synaptic cleft containing enzymes", "Intermediate filaments", "Desmosomal dense plaques",
    "A", "Electrical synapses are bridged directly by connexon channels (gap junctions), ensuring bidirectional, practically instantaneous electrical conduction.", "tissues", "Neural Tissue"))

qs.append(make_q(194, "Which muscle protein has ATPase activity and forms the cross-bridges with actin?",
    "Heavy meromyosin (HMM) globular head", "Light meromyosin (LMM)", "Troponin I", "Tropomyosin",
    "A", "The globular head of heavy meromyosin (HMM) has actin-binding sites and an active ATPase site that drives the power stroke.", "tissues", "Muscular Tissue"))

qs.append(make_q(195, "Rigor mortis that sets in after death is caused by:",
    "Exhaustion of ATP, preventing detachment of myosin cross-bridges from actin", "Excessive production of lactic acid", "Rupture of sarcolemma membranes", "Hypersecretion of acetylcholine",
    "A", "ATP is required to detach myosin heads from actin filaments; when ATP depletes post-mortem, cross-bridges remain locked in rigor mortis.", "tissues", "Muscular Tissue"))

# Q196-Q225: Cockroach Morphology & Anatomy (30 MCQs)
qs.append(make_q(196, "The triangular head capsule of cockroach is formed embryologically by the fusion of how many segments?",
    "Six embryonic segments", "Three embryonic segments", "Ten embryonic segments", "Four embryonic segments",
    "A", "The head of cockroach is formed by the fusion of six embryonic segments, conferring high mobility in all planes on a flexible neck.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(197, "The compound eyes of cockroach are made of approximately 2,000 hexagonal visual units termed:",
    "Ommatidia", "Ocelli", "Rhabdomes", "Sensillae",
    "A", "Each compound eye consists of ~2,000 hexagonal ommatidia that combine to produce a mosaic image.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(198, "The vision of cockroach is termed mosaic vision, which is characterised by:",
    "High light sensitivity but low resolution, suitable for nocturnal vision", "High resolution but low sensitivity during daylight", "Binocular stereoscopic vision with color perception", "Infrared thermal image detection",
    "A", "Mosaic vision gives cockroaches exceptional sensitivity in dim nocturnal light, though image resolution is relatively coarse.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(199, "The antennae of cockroach arise from membranous sockets and bear sensory receptors for:",
    "Tactile (touch) and olfactory (smell) sensations", "Sound frequency analysis only", "Vision and light intensity", "Thermoregulation exclusively",
    "A", "Antennae are covered in sensory sensillae that monitor tactile, olfactory, and thermal cues in the environment.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(200, "The mouthparts of cockroach include a median flexible lobe acting as a tongue, known as the:",
    "Hypopharynx", "Labrum", "Labium", "Galea",
    "A", "The hypopharynx lies within the preoral cavity, functioning as the tongue, with salivary ducts opening at its base.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(201, "The five segments of a cockroach walking leg in order from proximal to distal are:",
    "Coxa, Trochanter, Femur, Tibia, Tarsus", "Femur, Tibia, Coxa, Trochanter, Tarsus", "Coxa, Femur, Trochanter, Tibia, Tarsus", "Trochanter, Coxa, Femur, Tibia, Pretarsus",
    "A", "From base to tip, the podomeres are: large coxa, small trochanter, stout femur, spiny tibia, and 5-segmented tarsus.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(202, "The adhesive pad present on the pretarsus between the two claws of cockroach leg is the:",
    "Arolium", "Plantula", "Coxa", "Galea",
    "A", "The arolium is an adhesive pad on the pretarsus enabling the cockroach to climb smooth vertical walls and inverted ceilings.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(203, "Forewings (tegmina) of cockroach arise from the mesothorax and function to:",
    "Cover and protect the delicate membranous hindwings when at rest", "Provide primary lift and propulsion during flight", "Produce courtship sounds by friction", "Perform gas exchange in humid air",
    "A", "Tegmina are dark, opaque, leathery mesothoracic wings that protect the transparent metathoracic hindwings at rest.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(204, "Anal styles are present in male cockroaches but absent in females. They arise from the sternum of the:",
    "9th abdominal segment", "10th abdominal segment", "7th abdominal segment", "8th abdominal segment",
    "A", "A pair of unjointed anal styles projects from the 9th sternum of male cockroaches only.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(205, "Anal cerci are sensitive auditory and mechanoreceptive filamentous structures present in both sexes on the:",
    "10th abdominal segment", "9th abdominal segment", "8th abdominal segment", "7th abdominal segment",
    "A", "Anal cerci are 15-segmented jointed sensory appendages borne on the 10th abdominal tergum of both sexes.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(206, "The crop of cockroach alimentary canal opens into the gizzard (proventriculus), which contains:",
    "An outer circular muscular layer and an inner thick cuticle with six chitinous teeth", "A ring of 100 Malpighian tubules", "Ten pairs of respiratory spiracles", "A glandular ciliated epithelium without cuticle",
    "A", "The gizzard has circular muscles and six cuticular teeth that crush solid food particles before filtration.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(207, "Why are the foregut and hindgut of cockroach lined internally by a chitinous cuticle?",
    "They are derived from embryonic ectoderm (stomodaeum and proctodaeum)", "They are derived from endodermal coelomic epithelium", "They undergo continuous secondary growth", "To prevent absorption of toxic nutrients",
    "A", "The foregut and hindgut are ectodermal invaginations, retaining an internal protective chitinous cuticular lining.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(208, "The midgut (mesenteron) of cockroach is endodermal and not cuticular; it is protected from food abrasion by:",
    "A peritrophic membrane secreted by midgut cells", "An arthrodial membrane", "A layer of dense bone lamellae", "A thick keratinised stratum corneum",
    "A", "The midgut epithelium secretes a permeable chitin-protein peritrophic membrane around the food bolus.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(209, "A ring of 6 to 8 blind tubules at the junction of foregut and midgut that secrete digestive juices is the:",
    "Hepatic (gastric) caeca", "Malpighian tubules", "Salivary receptacles", "Colleterial glands",
    "A", "Hepatic caeca secrete digestive enzymes into the mesenteron for carbohydrate and protein hydrolysis.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(210, "Malpighian tubules in cockroach are located at the junction of:",
    "Midgut and hindgut", "Foregut and midgut", "Crop and gizzard", "Ileum and colon",
    "A", "About 100-150 yellow, hair-like Malpighian tubules arise at the junction between the mesenteron and ileum.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(211, "The heart of cockroach lies along the mid-dorsal line of the thorax and abdomen and consists of how many funnel-shaped chambers?",
    "13 chambers", "10 chambers", "8 chambers", "4 chambers",
    "A", "The dorsal tubular heart of cockroach comprises 13 funnel-shaped contractile chambers (3 thoracic and 10 abdominal).", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(212, "Hemolymph enters the chambers of cockroach heart from the pericardial sinus through paired lateral openings called:",
    "Ostia", "Spiracles", "Fenestrae", "Ommatidia",
    "A", "Each heart chamber has a pair of lateral valvular ostia through which hemolymph enters during diastolic relaxation.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(213, "Paired fan-shaped muscles attached to the terga and dorsal diaphragm that assist heart pumping are:",
    "Alary muscles (12 pairs)", "Intercostal muscles", "Circular proventricular muscles", "Coxal retractor muscles",
    "A", "Twelve pairs of triangular alary muscles expand the pericardial sinus, driving hemolymph flow into heart ostia.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(214, "Cockroach hemolymph is colourless because it lacks haemoglobin; how is oxygen delivered to tissues?",
    "Tracheal tubes and microscopic fluid-filled tracheoles deliver air directly to cells", "Oxygen dissolves in open pericardial fluid", "Oxygen diffuses across the waxy abdominal cuticle", "Book lungs pump air into the ventral sinus",
    "A", "Insects breathe via a branching tracheal system delivering atmospheric air directly to tissues through tracheoles.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(215, "The respiratory spiracles in cockroach consist of 10 pairs located:",
    "2 pairs on the thorax and 8 pairs on the abdomen", "3 pairs on thorax and 7 pairs on abdomen", "1 pair on head and 9 on body", "10 pairs all on abdomen",
    "A", "Cockroaches possess 10 pairs of spiracles: 2 thoracic (meso- and metathoracic) and 8 abdominal pairs.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(216, "Cockroaches excrete nitrogenous waste primarily as crystals of uric acid, which makes them:",
    "Uricotelic animals", "Ureotelic animals", "Ammonotelic animals", "Guanotelic animals",
    "A", "Malpighian tubules convert potassium urate into insoluble uric acid crystals, conserving water (uricotelism).", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(217, "Besides Malpighian tubules, which of the following tissues assist in storage excretion in cockroach?",
    "Fat body urate cells, pericardial nephrocytes, and uricose glands", "Flame cells and solenocytes", "Green antennal glands", "Bidder's organs",
    "A", "Cockroach excretion is supplemented by urate cells of the fat body, nephrocytes, and male uricose glands.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(218, "The ventral double nerve cord of cockroach bears how many ganglia?",
    "9 ganglia (3 thoracic and 6 abdominal)", "10 ganglia (all abdominal)", "6 ganglia (2 thoracic and 4 abdominal)", "12 ganglia",
    "A", "The ventral nerve cord has 3 large thoracic ganglia and 6 abdominal ganglia, with the 6th abdominal ganglion being the largest.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(219, "The 'brain' of a cockroach is represented by the:",
    "Supra-oesophageal ganglion", "Sub-oesophageal ganglion", "Prothoracic ganglion", "Sixth abdominal ganglion",
    "A", "The supra-oesophageal ganglion lies above the oesophagus, innervating the compound eyes and antennae.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(220, "In male cockroach, the testes are located in which abdominal segments?",
    "4th to 6th abdominal segments", "2nd to 4th abdominal segments", "7th to 9th abdominal segments", "1st to 3rd abdominal segments",
    "A", "A pair of 3-lobed testes lies dorsolaterally in the 4th to 6th abdominal segments.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(221, "The mushroom-shaped gland (utricular gland) of male cockroach functions as an accessory gland and lies in segments:",
    "6th and 7th abdominal segments", "2nd and 3rd abdominal segments", "4th and 5th abdominal segments", "9th and 10th abdominal segments",
    "A", "The mushroom-shaped gland in segments 6-7 consists of small and long tubules secreting nourishment for sperms.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(222, "Sperms in male cockroach are bundled together into packets called:",
    "Spermatophores", "Spermatids", "Spermatozoa", "Seminal sacs",
    "A", "Sperms are glued into multilayered packets called spermatophores, transferred to the female during copulation.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(223, "In female cockroach, each ovary consists of how many ovarian tubules (ovarioles)?",
    "Eight ovarioles", "Six ovarioles", "Twelve ovarioles", "Two ovarioles",
    "A", "Each of the two ovaries consists of 8 ovarioles containing a linear chain of developing ova.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(224, "The spermatheca in female cockroach is located in which segment and functions to:",
    "6th abdominal segment; store sperms received during copulation", "2nd abdominal segment; secrete the egg shell", "10th segment; produce ova", "7th segment; digest food",
    "A", "A pair of unequal spermathecae in the 6th segment receives and stores spermatophores until fertilisation.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(225, "The development of cockroach is paurometabolous, with nymphs undergoing how many moults to become adults?",
    "13 moults", "7 moults", "5 moults", "20 moults",
    "A", "Nymphs undergo 13 instars/moults; wing pads appear in the penultimate stage, but only adults possess mature wings.", "cockroach", "Cockroach Anatomy"))

# Q226-Q250: Frog Morphology & Anatomy (25 MCQs)
qs.append(make_q(226, "The skin of Rana tigrina is covered in dark spots and has a protective olive-green dorsal colouration; this adaptation is:",
    "Camouflage (protective mimicry)", "Warning colouration (aposematism)", "Bioluminescence", "Thermal radiation emission",
    "A", "Frogs exhibit camouflage to match wetland vegetation, shielding them from visual avian and mammalian predators.", "frog", "Frog Morphology"))

qs.append(make_q(227, "Why does a frog never swallow water through its mouth?",
    "It absorbs water directly through its moist, highly vascularized skin", "It metabolises all water from fat breakdown", "Its stomach lacks water channels", "Its cloaca excretes dry uric acid",
    "A", "Frogs satisfy their water needs by absorbing water directly across their thin, mucus-coated cutaneous membrane.", "frog", "Frog Morphology"))

qs.append(make_q(228, "In male frogs, nuptial pads (copulatory pads) develop during the breeding season on:",
    "The first digit of the forelimbs", "All five digits of the hindlimbs", "The throat region above vocal sacs", "The dorsal surface of the tympanum",
    "A", "Male frogs possess a copulatory (nuptial) pad on the ventral surface of the first digit of each forelimb for amplexus clasping.", "frog", "Frog Morphology"))

qs.append(make_q(229, "The tympanic membrane of frog functions to:",
    "Receive environmental sound vibrations directly, as external ears are absent", "Assist in cutaneous gas exchange", "Detect changes in water salinity", "Secrete lubricant for the nictitating membrane",
    "A", "Frogs lack an external pinna; sound waves directly vibrate the surface tympanum, transmitting vibrations to the columella auris.", "frog", "Frog Morphology"))

qs.append(make_q(230, "The digestive tract of a frog is relatively short compared to that of herbivores because:",
    "Frogs are carnivores whose insect food is concentrated and rapidly digested", "Frogs absorb nutrients through cutaneous capillaries", "Frogs do not possess a true stomach", "Bacterial fermentation occurs in the cloaca",
    "A", "Carnivorous animals have shorter digestive tracts because animal tissues are more easily digested than fibrous plant cellulose.", "frog", "Frog Anatomy"))

qs.append(make_q(231, "The frog tongue is specialized for prey capture by being:",
    "Muscular, bilobed at the tip, and attached anteriorly to the lower jaw", "Unilobed and fixed to the back of the pharynx", "Trifid and non-extensile", "Cartilaginous and barbed",
    "A", "The tongue is attached to the anterior margin of the lower jaw, allowing it to rapidly flip out and snare insects.", "frog", "Frog Anatomy"))

qs.append(make_q(232, "In frog, the bile produced by liver hepatocytes is stored in the gall bladder and enters the duodenum via the:",
    "Common bile duct (hepatopancreatic duct)", "Cystic duct directly into stomach", "Bidder's canal", "Ureter",
    "A", "Bile from the gall bladder and pancreatic juice pass through the common hepatopancreatic duct into the duodenum.", "frog", "Frog Anatomy"))

qs.append(make_q(233, "During hibernation (winter sleep) and aestivation (summer sleep), frogs respire exclusively through:",
    "Cutaneous respiration (skin)", "Pulmonary respiration (lungs)", "Buccopharyngeal cavity", "Gills",
    "A", "While buried in mud during dormancy, frogs rely exclusively on cutaneous diffusion for oxygen and carbon dioxide exchange.", "frog", "Frog Anatomy"))

qs.append(make_q(234, "The heart of frog is 3-chambered and receives deoxygenated blood from the body into an accessory triangular chamber called the:",
    "Sinus venosus", "Conus arteriosus", "Truncus arteriosus", "Left atrium",
    "A", "Venous blood from two precavals and one postcaval empties into the dorsal triangular sinus venosus, which enters the right atrium.", "frog", "Frog Anatomy"))

qs.append(make_q(235, "Ventrally, the single muscular ventricle of the frog heart pumps blood into the:",
    "Conus arteriosus (truncus arteriosus)", "Sinus venosus", "Pulmonary vein", "Bidder's canal",
    "A", "The ventricle pumps mixed blood into the conus arteriosus, which directs flow into the three paired arterial arches.", "frog", "Frog Anatomy"))

qs.append(make_q(236, "In frog, the pulmo-cutaneous arch carries blood from the heart to the:",
    "Lungs and skin for oxygenation", "Brain and ocular orbits", "Liver and intestinal villi", "Kidneys and testes",
    "A", "The pulmo-cutaneous arch branches into pulmonary and cutaneous arteries supplying the respiratory lungs and vascular skin.", "frog", "Frog Anatomy"))

qs.append(make_q(237, "Frog erythrocytes differ from human erythrocytes in being:",
    "Nucleated, oval, and biconvex", "Non-nucleated, biconcave, and circular", "Spherical and lacking haemoglobin", "Sickle-shaped and polyploid",
    "A", "Frog RBCs are large, oval, biconvex, and retain a functional nucleus throughout their lifespan.", "frog", "Frog Anatomy"))

qs.append(make_q(238, "The special venous connection in frogs that carries blood from the posterior limbs and alimentary canal to the kidneys is the:",
    "Renal portal system", "Hepatic portal system", "Hypophyseal portal system", "Pulmonary portal system",
    "A", "Frogs possess a well-developed renal portal system transporting venous blood from hindlimbs to kidney capillary beds.", "frog", "Frog Anatomy"))

qs.append(make_q(239, "In male frogs, the testes are attached to the kidneys by a peritoneal fold termed the:",
    "Mesorchium", "Mesovarium", "Mesentery", "Falciform ligament",
    "A", "A pair of yellowish ovoid testes is suspended from the anteroventral surface of the kidneys by the mesorchium.", "frog", "Frog Anatomy"))

qs.append(make_q(240, "In male frogs, 10 to 12 vasa efferentia leave the testes and enter the kidney to open into:",
    "Bidder's canal", "Wolffian duct directly", "Urinary bladder directly", "Oviduct",
    "A", "Vasa efferentia enter the kidney and communicate with Bidder's canal, which connects to the longitudinal collecting urinogenital duct.", "frog", "Frog Anatomy"))

qs.append(make_q(241, "Because the ureter in male frog carries both urine and spermatozoa, it is termed the:",
    "Urinogenital duct", "Vas deferens exclusively", "Bidder's canal", "Cloacal papilla",
    "A", "In male frogs, the duct from the kidney conveys both excretory urine and sperm into the cloaca, functioning as a urinogenital duct.", "frog", "Frog Anatomy"))

qs.append(make_q(242, "In female frogs, the oviducts and ureters:",
    "Open separately into the cloaca", "Fuse to form a single urinogenital duct", "Connect directly to Bidder's canal", "Empty into the urinary bladder",
    "A", "In female frogs, ureters and elongated coiled oviducts open completely independently into the cloaca; they have no connection to ovaries.", "frog", "Frog Anatomy"))

qs.append(make_q(243, "A single mature female frog can lay how many eggs during one spawning event?",
    "2,500 to 3,000 ova", "10 to 20 ova", "50 to 100 ova", "50,000 ova",
    "A", "Female frogs release 2,500-3,000 ova into water, where external fertilisation by the amplexing male occurs.", "frog", "Frog Anatomy"))

qs.append(make_q(244, "The cranial box of the frog gives origin to how many pairs of cranial nerves?",
    "10 pairs", "12 pairs", "31 pairs", "8 pairs",
    "A", "Amphibians like frogs possess 10 pairs of cranial nerves (unlike reptiles, birds, and mammals which have 12).", "frog", "Frog Anatomy"))

qs.append(make_q(245, "The midbrain of frog consists of a prominent pair of:",
    "Optic lobes (corpora bigemina)", "Olfactory bulbs", "Cerebral hemispheres", "Corpora quadrigemina",
    "A", "The frog midbrain consists of a prominent pair of optic lobes (corpora bigemina) that process visual input.", "frog", "Frog Anatomy"))

qs.append(make_q(246, "The frog hindbrain consists of which two structures?",
    "Cerebellum and medulla oblongata", "Cerebral cortex and thalamus", "Pons and hypothalamus", "Optic chiasma and infundibulum",
    "A", "The hindbrain consists of a narrow transverse cerebellum and a medulla oblongata passing into the spinal cord.", "frog", "Frog Anatomy"))

qs.append(make_q(247, "The single ear ossicle present in the middle ear cavity of frog is the:",
    "Columella auris (stapes homologue)", "Malleus", "Incus", "Hyoid horn",
    "A", "Frogs have a single middle ear ossicle, the rod-like columella auris, transmitting sound waves from the tympanum to the inner ear.", "frog", "Frog Anatomy"))

qs.append(make_q(248, "The yellow, finger-like fat bodies located immediately anterior to each kidney in frog function to:",
    "Store reserve lipids for hibernation, aestivation, and gamete maturation", "Filter nitrogenous wastes from lymph", "Secrete digestive enzymes into the stomach", "Produce red blood cells during larval life",
    "A", "Fat bodies store lipid reserves utilised during dormancy (hibernation/aestivation) and provide energy for breeding.", "frog", "Frog Anatomy"))

qs.append(make_q(249, "Amphibian metamorphosis of a gill-breathing herbivorous tadpole into an air-breathing carnivorous frog is stimulated by:",
    "Thyroxine hormone (produced by the thyroid gland)", "Growth hormone", "Adrenaline", "Insulin",
    "A", "Thyroxine promotes tail resorption, limb development, lung formation, and digestive tract remodeling during metamorphosis.", "frog", "Frog Anatomy"))

qs.append(make_q(250, "Adult frogs excrete nitrogenous waste primarily as urea and are therefore ureotelic, whereas tadpole larvae excrete:",
    "Ammonia (ammonotelic)", "Uric acid crystals (uricotelic)", "Guanine crystals (guanotelic)", "Amino acids directly",
    "A", "Aquatic tadpoles excrete toxic ammonia directly into surrounding water, switching to urea production upon metamorphosing into terrestrial adults.", "frog", "Frog Anatomy"))

print(f"Generated Part 2: {len(qs)} questions.")
assert len(qs) == 125, f"Expected 125, got {len(qs)}"

with open("scripts/soa_part2_gen.py", "w", encoding="utf-8") as f:
    f.write("# Structural Organisation in Animals Part 2: Q126 to Q250 (Medium)\n")
    f.write("import json\n\n")
    f.write("def get_part2_raw():\n")
    f.write("    return " + json.dumps(qs, indent=2) + "\n\n")
    f.write('print("SOA Part 2 raw helper ready.")\n')

print("Saved scripts/soa_part2_gen.py successfully.")
