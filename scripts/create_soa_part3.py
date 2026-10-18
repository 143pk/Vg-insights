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

# Q251-Q285: Epithelial & Connective Tissues (35 MCQs)
qs.append(make_q(251, "Compound tubuloalveolar glands with branched duct systems are exemplified by which of the following?",
    "Submandibular salivary glands and pancreas", "Goblet cells of colon", "Simple tubular crypts of Lieberkühn", "Sweat glands of palm",
    "A", "The salivary glands and exocrine pancreas are compound branched tubuloalveolar glands consisting of multiple branched duct systems.", "tissues", "Epithelial Tissue"))

qs.append(make_q(252, "In which epithelium are cells anchored to the basal lamina by hemidesmosomes that contain alpha6-beta4 integrins?",
    "Stratified squamous epithelium of skin", "Simple squamous endothelial lining", "Pseudostratified columnar epithelium of trachea", "Simple cuboidal epithelium of thyroid follicles",
    "A", "Basal keratinocytes of stratified squamous epithelium anchor to the basement membrane via hemidesmosomes containing integrin heterodimers.", "tissues", "Epithelial Tissue"))

qs.append(make_q(253, "The mucociliary escalator of the human respiratory tract relies on the coordinated beating of cilia in:",
    "Pseudostratified ciliated columnar epithelium", "Non-keratinised stratified squamous epithelium", "Simple cuboidal epithelium with brush border", "Transitional epithelium",
    "A", "The pseudostratified ciliated columnar epithelium lining the trachea and bronchi beats metachronally to sweep mucus and entrapped particles upward.", "tissues", "Epithelial Tissue"))

qs.append(make_q(254, "Which component of the epithelial basement membrane acts as a molecular sieve preventing passage of large negatively charged proteins in kidney glomeruli?",
    "Heparan sulphate proteoglycan (perlecan) in the lamina densa", "Keratin intermediate filaments", "Elastin fibres in the reticular lamina", "Type I collagen bundles",
    "A", "Negatively charged heparan sulphate proteoglycans (perlecan) in the glomerular basement membrane provide an electrostatic barrier against albumin filtration.", "tissues", "Epithelial Tissue"))

qs.append(make_q(255, "Which type of simple epithelium forms the inner lining of the heart, blood vessels, and lymphatic vessels?",
    "Endothelium (simple squamous)", "Mesothelium", "Urothelium", "Germinal epithelium",
    "A", "The simple squamous lining of the cardiovascular and lymphatic system is called the endothelium.", "tissues", "Epithelial Tissue"))

qs.append(make_q(256, "The simple squamous epithelium lining the pleural, pericardial, and peritoneal coelomic cavities is termed:",
    "Mesothelium", "Endothelium", "Ependyma", "Epidermis",
    "A", "Mesothelium is the simple squamous epithelial monolayer derived from embryonic mesoderm that lines all serous coelomic cavities.", "tissues", "Epithelial Tissue"))

qs.append(make_q(257, "Which vitamin is an essential cofactor for prolyl hydroxylase and lysyl hydroxylase in collagen synthesis?",
    "Vitamin C (Ascorbic acid)", "Vitamin A (Retinol)", "Vitamin D (Calciferol)", "Vitamin K (Phylloquinone)",
    "A", "Vitamin C is required to hydroxylate proline and lysine residues; without it, triple helix tropocollagen fails to form stable fibres (scurvy).", "tissues", "Connective Tissue"))

qs.append(make_q(258, "Scurvy is characterized by bleeding gums, poor wound healing, and fragile capillaries due to defective synthesis of:",
    "Collagen fibres", "Elastin fibres", "Hyaluronic acid", "Keratin filaments",
    "A", "Ascorbic acid deficiency impairs post-translational hydroxylation of collagen, destabilising vascular basement membranes and connective tissue.", "tissues", "Connective Tissue"))

qs.append(make_q(259, "The primary cell responsible for wound contraction during scar formation by expressing smooth muscle actin is the:",
    "Myofibroblast", "Mast cell", "Macrophage", "Plasma cell",
    "A", "Myofibroblasts are differentiated fibroblasts expressing alpha-smooth muscle actin that exert contractile force to close open wounds.", "tissues", "Connective Tissue"))

qs.append(make_q(260, "The ground substance of areolar connective tissue is viscous and gel-like largely because of high concentrations of:",
    "Hyaluronic acid (hyaluronan)", "Glycogen", "Collagenase", "Heparin crystals",
    "A", "Hyaluronan is an enormous unsulphated glycosaminoglycan that traps water molecules, forming a viscous gel resisting mechanical deformation.", "tissues", "Connective Tissue"))

qs.append(make_q(261, "Which enzyme is secreted by invasive pathogenic bacteria like Streptococcus to liquefy connective tissue ground substance?",
    "Hyaluronidase", "Collagenase", "Elastase", "Lipase",
    "A", "Hyaluronidase ('spreading factor') degrades hyaluronic acid, reducing matrix viscosity and facilitating bacterial penetration through connective tissue.", "tissues", "Connective Tissue"))

qs.append(make_q(262, "White adipose tissue adipocytes are unilocular, meaning they contain:",
    "A single large central lipid droplet that displaces the nucleus and cytoplasm to the periphery", "Numerous small lipid droplets and high cytochrome content", "Multiple nuclei and no lipid vacuoles", "Abundant myofibrils and cross-striations",
    "A", "Mature white adipocytes feature a solitary large triglyceride droplet that compresses the nucleus into an eccentric crescent against the cell margin.", "tissues", "Connective Tissue"))

qs.append(make_q(263, "Adipocytes secrete which satiety hormone that acts on the hypothalamus to regulate long-term energy balance?",
    "Leptin", "Insulin", "Glucagon", "Adrenaline",
    "A", "Leptin is an adipokine produced by white fat cells that signals hypothalamic receptors to suppress appetite and increase energy expenditure.", "tissues", "Connective Tissue"))

qs.append(make_q(264, "Dense regular elastic connective tissue containing predominantly parallel elastic fibres is found in:",
    "Ligamenta flava between vertebrae and walls of large elastic arteries", "Dermis of skin", "Tendon of Achilles", "Submucosa of digestive tract",
    "A", "The ligamenta flava connecting adjacent vertebral laminae and large elastic artery walls consist of dense regular elastic tissue.", "tissues", "Connective Tissue"))

qs.append(make_q(265, "What enables articular hyaline cartilage to withstand repetitive compression without permanent deformation?",
    "High negative charge density of chondroitin sulphate drawing in water and generating swelling turgor pressure", "Inorganic hydroxyapatite mineral deposits", "Cross-linked keratin filaments", "Presence of dense capillary networks",
    "A", "Negatively charged sulphated glycosaminoglycans create osmotic swelling pressure contained by the tensile Type II collagen meshwork.", "tissues", "Connective Tissue"))

qs.append(make_q(266, "Appositional growth of cartilage occurs through the activity of chondrogenic cells located in the:",
    "Inner cellular chondrogenic layer of the perichondrium", "Centre of the cartilaginous matrix (lacunae)", "Synovial fluid", "Haversian canals",
    "A", "Appositional growth adds new matrix to the cartilage surface via differentiation of chondroblasts in the inner perichondrium.", "tissues", "Connective Tissue"))

qs.append(make_q(267, "Interstitial growth of cartilage occurs through:",
    "Mitotic division of existing chondrocytes within their lacunae, forming isogenous groups", "Deposition of matrix by periosteal osteoblasts", "Calcification of Haversian systems", "Migration of monocytes from blood vessels",
    "A", "Interstitial growth expands cartilage from within as chondrocytes divide into isogenous nests and secrete new intercellular matrix.", "tissues", "Connective Tissue"))

qs.append(make_q(268, "Why does mature articular cartilage heal poorly or not at all following mechanical trauma?",
    "It is completely avascular and lacks a perichondrium on its articulating surface", "It contains high concentrations of osteoclasts", "Chondrocytes divide too rapidly, forming tumours", "Its matrix is entirely mineralised by calcium",
    "A", "Articular cartilage lacks both blood vessels and a perichondrium; thus, progenitor cells cannot migrate to repair damaged cartilage.", "tissues", "Connective Tissue"))

qs.append(make_q(269, "The primary hormone that stimulates osteoclastic bone resorption to elevate serum calcium levels is:",
    "Parathyroid hormone (PTH)", "Calcitonin", "Thyroxine", "Insulin",
    "A", "PTH promotes osteoclast maturation and bone resorption via the RANKL pathway, mobilizing calcium into the bloodstream.", "tissues", "Connective Tissue"))

qs.append(make_q(270, "Calcitonin, secreted by parafollicular C-cells of the thyroid gland, functions to:",
    "Inhibit osteoclast activity, promoting calcium deposition in bone and lowering serum calcium", "Stimulate osteoclasts to dissolve bone matrix", "Inhibit osteoblasts from synthesizing osteoid", "Promote renal calcium reabsorption exclusively",
    "A", "Calcitonin antagonises PTH by suppressing osteoclasts, leading to reduced bone resorption and lowered blood calcium.", "tissues", "Connective Tissue"))

qs.append(make_q(271, "In long bones, the growth in length occurs at the cartilaginous:",
    "Epiphyseal plate (growth plate)", "Diaphyseal marrow cavity", "Articular joint capsule", "Periosteal cambium",
    "A", "Endochondral ossification at the epiphyseal plate between the epiphysis and diaphysis drives longitudinal bone elongation.", "tissues", "Connective Tissue"))

qs.append(make_q(272, "The central shaft of a long bone is called the diaphysis, whereas the expanded flared ends are known as the:",
    "Epiphyses", "Metaphyses", "Trabeculae", "Osteons",
    "A", "The shaft of a long bone is the diaphysis, and the expanded articulating ends are the epiphyses.", "tissues", "Connective Tissue"))

qs.append(make_q(273, "What type of bone formation occurs directly within condensed mesenchymal sheets without a prior cartilage model?",
    "Intramembranous ossification (e.g., flat bones of skull, clavicle)", "Endochondral ossification", "Appositional cartilage growth", "Interstitial calcification",
    "A", "Flat bones of the cranium, facial bones, and clavicle develop directly from mesenchymal membranes via intramembranous ossification.", "tissues", "Connective Tissue"))

qs.append(make_q(274, "Howship's lacunae are shallow resorption pits on bone surfaces occupied by:",
    "Active osteoclasts", "Resting osteocytes", "Inactivated chondroblasts", "Blood megakaryocytes",
    "A", "Howship's lacunae are enzymatically eroded depressions formed by osteoclasts during bone remodelling.", "tissues", "Connective Tissue"))

qs.append(make_q(275, "Erythropoietin (EPO), the primary growth factor stimulating erythropoiesis in bone marrow, is synthesized mainly in the:",
    "Kidneys (renal peritubular interstitial cells)", "Spleen red pulp", "Thymus cortex", "Liver Kupffer cells",
    "A", "Renal interstitial peritubular cells produce erythropoietin in response to tissue hypoxia, stimulating red blood cell production in bone marrow.", "tissues", "Connective Tissue"))

qs.append(make_q(276, "The enzyme carbonic anhydrase is present in very high concentrations in which blood cells to facilitate CO2 transport?",
    "Erythrocytes (RBCs)", "Thrombocytes (Platelets)", "Neutrophils", "Monocytes",
    "A", "Erythrocytes contain abundant carbonic anhydrase, which reversibly converts carbon dioxide and water into carbonic acid (H2CO3).", "tissues", "Connective Tissue"))

qs.append(make_q(277, "Which blood group is considered the universal recipient for red blood cell transfusions because plasma lacks anti-A and anti-B antibodies?",
    "AB positive", "O negative", "A positive", "B negative",
    "A", "Individuals with AB positive blood possess both A and B antigens on RBCs and lack anti-A and anti-B agglutinins, receiving all ABO groups safely.", "tissues", "Connective Tissue"))

qs.append(make_q(278, "Which blood group is the universal red blood cell donor because erythrocytes lack both A and B surface agglutinogens?",
    "O negative", "AB positive", "O positive", "A negative",
    "A", "O negative red cells lack A, B, and Rh(D) antigens and will not trigger antibody-mediated hemolysis in recipients.", "tissues", "Connective Tissue"))

qs.append(make_q(279, "Erythroblastosis foetalis can develop when:",
    "An Rh-negative mother carries an Rh-positive foetus during a second or subsequent pregnancy", "An Rh-positive mother carries an Rh-negative foetus", "Both mother and father are Rh-negative", "Both parents have O-positive blood",
    "A", "Maternal anti-Rh (anti-D) IgG antibodies formed after a first Rh+ pregnancy cross the placenta and lyse fetal red cells in subsequent Rh+ gestations.", "tissues", "Connective Tissue"))

qs.append(make_q(280, "Which plasma clotting factor is activated by tissue factor (thromboplastin) to initiate the extrinsic coagulation pathway?",
    "Factor VII", "Factor VIII", "Factor XII", "Factor I",
    "A", "Tissue factor released from damaged vascular tissue binds and activates Factor VII, triggering the extrinsic coagulation cascade.", "tissues", "Connective Tissue"))

qs.append(make_q(281, "Vitamin K is essential for blood coagulation because it acts as a cofactor in the gamma-carboxylation of:",
    "Prothrombin (Factor II), Factors VII, IX, and X", "Fibrinogen and albumin", "Heparin and histamine", "Plasminogen and tissue plasminogen activator",
    "A", "Vitamin K is required for hepatic post-translational gamma-carboxylation of glutamate residues on clotting Factors II, VII, IX, and X.", "tissues", "Connective Tissue"))

qs.append(make_q(282, "Haemophilia A is an X-linked recessive bleeding disorder caused by a genetic deficiency of which clotting factor?",
    "Factor VIII (anti-haemophilic factor)", "Factor IX (Christmas factor)", "Factor XI", "Factor I (fibrinogen)",
    "A", "Haemophilia A results from deficiency or mutation in clotting Factor VIII, disrupting the intrinsic pathway of blood coagulation.", "tissues", "Connective Tissue"))

qs.append(make_q(283, "Haemophilia B (Christmas disease) is caused by the inherited deficiency of:",
    "Factor IX", "Factor VIII", "Factor V", "Factor VII",
    "A", "Deficiency of Factor IX leads to Haemophilia B, which is clinically similar to Haemophilia A and inherited in an X-linked pattern.", "tissues", "Connective Tissue"))

qs.append(make_q(284, "The specialized blind-ended lymphatic capillaries in the intestinal villi that absorb dietary dietary lipids are:",
    "Lacteals", "Canaliculi", "Haversian canals", "Volkmann's canals",
    "A", "Lacteals are wide lymphatic capillaries in intestinal villi that absorb dietary triglycerides assembled into chylomicrons.", "tissues", "Connective Tissue"))

qs.append(make_q(285, "The largest lymphoid organ in the human body, serving as an erythrocyte reservoir and blood filter, is the:",
    "Spleen", "Thymus", "Tonsil", "Appendix",
    "A", "The spleen is the largest secondary lymphoid organ; its red pulp filters aged RBCs and white pulp initiates adaptive immune responses.", "tissues", "Connective Tissue"))

# Q286-Q320: Muscular & Neural Tissues (35 MCQs)
qs.append(make_q(286, "Red (slow-twitch, Type I) skeletal muscle fibres are characterized by:",
    "High myoglobin content, abundant mitochondria, rich vascularity, and high fatigue resistance", "Low myoglobin, few mitochondria, and rapid fatigue", "Absence of actin and myosin filaments", "Lack of a sarcoplasmic reticulum",
    "A", "Type I slow-twitch fibres are adapted for sustained aerobic posture-holding, with rich capillary beds, high myoglobin, and oxidative enzymes.", "tissues", "Muscular Tissue"))

qs.append(make_q(287, "White (fast-twitch, Type IIb) muscle fibres are adapted for:",
    "Rapid, powerful bursts of contraction relying primarily on anaerobic glycolysis", "Continuous slow aerobic endurance exercise", "Involuntary peristalsis in blood vessels", "Auto-rhythmic pacemaker activity",
    "A", "Fast-twitch glycolytic fibres contract quickly with high peak force, relying on glycogenolysis and anaerobic glycolysis, but fatigue quickly.", "tissues", "Muscular Tissue"))

qs.append(make_q(288, "In skeletal muscle contraction, what event directly causes the power stroke of the myosin cross-bridge?",
    "Release of inorganic phosphate (Pi) and ADP from the myosin head", "Binding of ATP to the myosin head", "Hydrolysis of ATP into ADP and Pi", "Influx of magnesium ions",
    "A", "The release of Pi triggers conformational change in the myosin neck (the power stroke), pulling the thin actin filament toward the M-line.", "tissues", "Muscular Tissue"))

qs.append(make_q(289, "Detachment of the myosin head from the actin binding site at the end of a power stroke requires:",
    "Binding of a new ATP molecule to the myosin ATPase site", "Efflux of calcium from the sarcoplasm", "Hydrolysis of acetylcholine by acetylcholinesterase", "Movement of the Z-line away from the M-line",
    "A", "Binding of fresh ATP induces an allosteric release of the myosin head from actin; lack of ATP keeps cross-bridges permanently bound (rigor mortis).", "tissues", "Muscular Tissue"))

qs.append(make_q(290, "The calcium release channels located on the terminal cisternae of the sarcoplasmic reticulum are known as:",
    "Ryanodine receptors (RyR1)", "Dihydropyridine receptors (DHPR) on T-tubules", "Sodium-potassium ATPase pumps", "Voltage-gated potassium channels",
    "A", "Ryanodine receptor 1 (RyR1) is the calcium release channel in the sarcoplasmic reticulum opened via conformational coupling with DHPR.", "tissues", "Muscular Tissue"))

qs.append(make_q(291, "Active reuptake of calcium ions from the sarcoplasm back into the sarcoplasmic reticulum lumen to end contraction is performed by:",
    "SERCA (Sarco/Endoplasmic Reticulum Ca2+-ATPase)", "Ryanodine receptor channels", "Sodium-calcium exchanger", "Calmodulin-kinase complex",
    "A", "SERCA pumps use ATP to pump Ca2+ back into the sarcoplasmic reticulum against steep concentration gradients, terminating contraction.", "tissues", "Muscular Tissue"))

qs.append(make_q(292, "The giant elastic protein that anchors thick myosin filaments to the Z-disc and provides passive muscle recoil is:",
    "Titin (connectin)", "Nebulin", "Actinin", "Dystrophin",
    "A", "Titin is an enormous elastic polypeptide that spans half a sarcomere, centering thick filaments and providing resting elastic tension.", "tissues", "Muscular Tissue"))

qs.append(make_q(293, "Nebulin in skeletal muscle myofibrils functions as a molecular ruler that:",
    "Regulates and stabilizes the precise length of thin actin filaments", "Transports calcium across the sarcolemma", "Anchors the sarcolemma to the extracellular basal lamina", "Phosphorylates myosin light chains",
    "A", "Nebulin associates with actin filaments along their entire length, acting as a molecular template determining thin filament length.", "tissues", "Muscular Tissue"))

qs.append(make_q(294, "Mutations in the gene encoding dystrophin cause muscular sarcolemma tears and muscle degeneration in:",
    "Duchenne muscular dystrophy", "Myasthenia gravis", "Tetany", "Parkinson's disease",
    "A", "Dystrophin connects the internal actin cytoskeleton to the extracellular matrix; its absence in DMD leads to sarcolemmal fragility and necrosis.", "tissues", "Muscular Tissue"))

qs.append(make_q(295, "Myasthenia gravis is an autoimmune disorder characterized by muscle weakness due to antibodies directed against:",
    "Nicotinic acetylcholine receptors (nAChR) at the neuromuscular junction", "Ryanodine calcium channels", "Voltage-gated sodium channels", "Troponin C subunits",
    "A", "In myasthenia gravis, autoantibodies block and degrade post-synaptic acetylcholine receptors on the motor endplate, causing progressive weakness.", "tissues", "Muscular Tissue"))

qs.append(make_q(296, "Tetanic contraction (tetanus) of a skeletal muscle occurs when:",
    "Successive stimuli arrive at a frequency high enough that the muscle cannot relax between twitches", "Calcium is entirely cleared from the sarcoplasm", "ATP is depleted, locking cross-bridges permanently", "Motor neurons are irreversibly damaged",
    "A", "High-frequency stimulation leads to wave summation where sarcoplasmic Ca2+ remains elevated, resulting in a sustained smooth contraction.", "tissues", "Muscular Tissue"))

qs.append(make_q(297, "The toxin produced by Clostridium tetani causes spastic paralysis by blocking the release of:",
    "Inhibitory neurotransmitters (GABA and glycine) from spinal interneurons", "Acetylcholine from neuromuscular junctions", "Calcium from sarcoplasmic reticulum", "Dopamine in the basal ganglia",
    "A", "Tetanospasmin prevents vesicular release of glycine and GABA from Renshaw cells, causing uncontrolled motor neuron firing and spastic spasms.", "tissues", "Neural Tissue"))

qs.append(make_q(298, "Botulinum toxin (Botox) produced by Clostridium botulinum induces flaccid paralysis by:",
    "Cleaving SNARE proteins and blocking acetylcholine exocytosis at the motor endplate", "Permanently opening voltage-gated sodium channels", "Inhibiting acetylcholinesterase in the synaptic cleft", "Binding and activating nicotinic ACh receptors",
    "A", "Botulinum neurotoxin degrades SNAP-25 and syntaxin (SNARE complex), blocking ACh release and causing flaccid muscular paralysis.", "tissues", "Neural Tissue"))

qs.append(make_q(299, "Temporal summation in a post-synaptic neuron occurs when:",
    "A single presynaptic terminal fires multiple action potentials in rapid succession", "Multiple different presynaptic terminals fire simultaneously at different dendritic locations", "A neuron runs out of neurotransmitter vesicles", "Myelin sheaths become thinner along the axon",
    "A", "Temporal summation is the cumulative effect of repeated EPSPs arriving in rapid sequence from the same presynaptic input.", "tissues", "Neural Tissue"))

qs.append(make_q(300, "Spatial summation in a post-synaptic neuron occurs when:",
    "Multiple distinct presynaptic inputs fire simultaneously at different dendritic locations", "A single terminal fires at very high frequency", "Chloride channels open across all dendrites", "Action potentials jump across Nodes of Ranvier",
    "A", "Spatial summation is the algebraic addition of EPSPs and IPSPs originating from separate synapses across the neuron's receptive arbor.", "tissues", "Neural Tissue"))

qs.append(make_q(301, "Opening of ligand-gated chloride channels by GABA or glycine produces an:",
    "Inhibitory post-synaptic potential (IPSP) via membrane hyperpolarisation", "Excitatory post-synaptic potential (EPSP) via depolarisation", "Immediate threshold action potential", "Irreversible muscle contraction",
    "A", "Inward flux of negatively charged Cl- ions hyperpolarises the neuronal membrane (moves it further from threshold), generating an IPSP.", "tissues", "Neural Tissue"))

qs.append(make_q(302, "The part of a neuron where the highest density of voltage-gated Na+ channels is found and where action potentials are initiated is the:",
    "Axon initial segment (axon hillock)", "Dendritic spine", "Nucleolus", "Myelin sheath",
    "A", "The axon initial segment has the lowest threshold for excitation due to a high clustering of Nav1.6 voltage-gated sodium channels.", "tissues", "Neural Tissue"))

qs.append(make_q(303, "Retrograde axonal transport (from axon terminal back toward the soma) is mediated by which molecular motor protein?",
    "Dynein", "Kinesin", "Myosin II", "Tubulin",
    "A", "Cytoplasmic dynein motors drive retrograde transport along microtubules, carrying endosomes, trophic factors, and viruses (e.g., rabies) to the soma.", "tissues", "Neural Tissue"))

qs.append(make_q(304, "Anterograde axonal transport (from soma toward the axon terminal) is primarily driven by:",
    "Kinesin", "Dynein", "Actin", "Clathrin",
    "A", "Kinesin motors move cargo vesicles toward the plus-ends of microtubules (anterograde transport toward axon terminals).", "tissues", "Neural Tissue"))

qs.append(make_q(305, "The connective tissue sheath that wraps around an entire peripheral nerve trunk is called the:",
    "Epineurium", "Perineurium", "Endoneurium", "Neurilemma",
    "A", "An entire peripheral nerve is enclosed by epineurium; nerve fascicles are bound by perineurium, and individual axons by endoneurium.", "tissues", "Neural Tissue"))

qs.append(make_q(306, "Which nerve connective tissue sheath creates the blood-nerve barrier via tight junctions between its lamellar cells?",
    "Perineurium", "Epineurium", "Endoneurium", "Sarcolemma",
    "A", "Perineurial cells are connected by zonula occludens tight junctions, establishing an effective blood-nerve barrier protecting axons.", "tissues", "Neural Tissue"))

qs.append(make_q(307, "The Neurilemma (sheath of Schwann) surrounding peripheral nerve axons is the:",
    "Outermost nucleated cytoplasmic layer of a Schwann cell", "Central core axoplasm", "Reticular lamina of the epineurium", "Basal lamina of the astrocyte",
    "A", "The neurilemma is the outermost rim of cytoplasm and nucleus of the Schwann cell surrounding the myelin sheath in the PNS.", "tissues", "Neural Tissue"))

qs.append(make_q(308, "Why can transected peripheral axons regenerate while severed central nervous system axons typically cannot?",
    "Schwann cells form a guiding regeneration tube (bands of Büngner) and secrete neurotrophic factors, whereas CNS oligodendrocytes and astrocytes inhibit axonal regrowth", "CNS axons lack nuclei in their soma", "Peripheral nerves do not require ATP for protein synthesis", "PNS neurons undergo continuous mitosis",
    "A", "Schwann cells facilitate repair by clearing debris and forming bands of Büngner, whereas CNS myelin produces Nogo and glial scars that block regrowth.", "tissues", "Neural Tissue"))

qs.append(make_q(309, "Wallerian degeneration refers to the structural breakdown of:",
    "The distal segment of an axon and its myelin sheath following transection from the cell body", "The entire cerebral cortex after trauma", "Dendritic spines during long-term depression", "Neuroglial cells during embryonic life",
    "A", "Following axonal transection, the axon segment distal to the cut degenerates and is cleared by macrophages (Wallerian degeneration).", "tissues", "Neural Tissue"))

qs.append(make_q(310, "Which division of the autonomic nervous system uses noradrenaline (norepinephrine) as the postganglionic neurotransmitter at target organs?",
    "Sympathetic nervous system", "Parasympathetic nervous system", "Somatic nervous system", "Enteric nervous system exclusively",
    "A", "Most postganglionic sympathetic axons release noradrenaline onto adrenergic receptors of target viscera (fight-or-flight).", "tissues", "Neural Tissue"))

qs.append(make_q(311, "Postganglionic parasympathetic neurons release which neurotransmitter to activate muscarinic receptors on target organs?",
    "Acetylcholine (ACh)", "Noradrenaline", "Dopamine", "Serotonin",
    "A", "Parasympathetic postganglionic terminals release acetylcholine, binding muscarinic receptors to promote 'rest and digest' responses.", "tissues", "Neural Tissue"))

qs.append(make_q(312, "Preganglionic neurons of BOTH sympathetic and parasympathetic autonomic systems release:",
    "Acetylcholine (acting on nicotinic receptors in ganglia)", "Noradrenaline", "Adrenaline", "Glutamate",
    "A", "All autonomic preganglionic neurons (sympathetic and parasympathetic) are cholinergic and stimulate nicotinic receptors on postganglionic soma.", "tissues", "Neural Tissue"))

qs.append(make_q(313, "Which cranial nerve provides the major parasympathetic innervation to thoracic and abdominal viscera?",
    "Vagus nerve (Cranial Nerve X)", "Trigeminal nerve (Cranial Nerve V)", "Facial nerve (Cranial Nerve VII)", "Glossopharyngeal nerve (Cranial Nerve IX)",
    "A", "The vagus nerve (CN X) carries ~75% of all parasympathetic fibres in the body, innervating the heart, lungs, and gut down to the transverse colon.", "tissues", "Neural Tissue"))

qs.append(make_q(314, "The enteric nervous system (ENS) that autonomously regulates gut peristalsis and secretion contains two primary plexuses:",
    "Myenteric (Auerbach's) plexus and Submucosal (Meissner's) plexus", "Brachial and lumbosacral plexuses", "Cardiac and celiac plexuses", "Cervical and sacral plexuses",
    "A", "The ENS consists of the myenteric plexus (regulating motility) and the submucosal plexus (regulating mucosal secretion and blood flow).", "tissues", "Neural Tissue"))

qs.append(make_q(315, "In sensory receptors, the local, graded, non-propagated change in membrane potential produced by a stimulus is called a:",
    "Receptor (generator) potential", "Action potential", "All-or-none potential", "Refractory potential",
    "A", "Sensory receptors transduce physical stimuli into graded receptor potentials whose amplitude is proportional to stimulus intensity.", "tissues", "Neural Tissue"))

qs.append(make_q(316, "Pacinian corpuscles located deep in the dermis and joints are specialized mechanoreceptors sensitive to:",
    "High-frequency vibration and transient deep pressure", "Constant light touch only", "Temperature changes exclusively", "Tissue damage and painful chemicals",
    "A", "Pacinian corpuscles feature concentric lamellar capsules that rapidly adapt, making them sensitive detectors of vibration and pressure changes.", "tissues", "Neural Tissue"))

qs.append(make_q(317, "Meissner's corpuscles located in the dermal papillae of fingertips and lips are specialized for:",
    "Fine, discriminative touch and low-frequency flutter", "Painful mechanical tearing", "Sustained deep hydrostatic pressure", "Proprioception in muscle spindles",
    "A", "Meissner's corpuscles are rapidly adapting mechanoreceptors in hairless skin that mediate two-point tactile discrimination.", "tissues", "Neural Tissue"))

qs.append(make_q(318, "Muscle spindles located within skeletal muscles function as proprioceptors that monitor:",
    "Muscle length and rate of change of length (stretch)", "Tendon tension generated during active contraction", "Joint cavity fluid pressure", "Deep cutaneous temperature",
    "A", "Muscle spindles contain intrafusal fibres innervated by gamma motor neurons that detect muscle stretch, initiating the stretch reflex.", "tissues", "Neural Tissue"))

qs.append(make_q(319, "Golgi tendon organs located at the junctions between muscles and tendons function to:",
    "Sense muscle contraction tension and protect muscles from over-contraction via inverse stretch reflex", "Detect muscle passive stretch and trigger immediate contraction", "Monitor blood glucose delivery to myocytes", "Store excess calcium ions for contraction",
    "A", "Golgi tendon organs are arranged in series with muscle fibres, firing in response to tension to prevent tendon avulsion via autogenic inhibition.", "tissues", "Neural Tissue"))

qs.append(make_q(320, "Which cells in the central nervous system act as neural stem cells capable of generating adult neurogenesis in the subventricular zone?",
    "Radial glia-like astrocytes", "Mature oligodendrocytes", "Activated microglia", "Myelinating Schwann cells",
    "A", "Subpopulations of specialized subventricular zone astrocytes function as neural stem cells that generate new neurons in the adult mammalian brain.", "tissues", "Neural Tissue"))

# Q321-Q350: Cockroach Morphology & Anatomy (30 MCQs)
qs.append(make_q(321, "The head of cockroach is joined to the thorax by a flexible, short neck called the:",
    "Cervix", "Pedicel", "Scape", "Pronotum",
    "A", "The cervix is the membranous neck containing cervical sclerites connecting the occipital region of the head to the prothorax.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(322, "The broad, anterior-most shield-like dorsal sclerite covering the prothorax and part of the head in cockroach is the:",
    "Pronotum", "Mesonotum", "Metanotum", "Prosternum",
    "A", "The pronotum is the enlarged, prominent dorsal plate of the prothorax that protects the cervical joint and base of the head.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(323, "In the mouthparts of cockroach, which structures possess grinding (molar) surfaces and cutting (incisor) teeth for mastication?",
    "Mandibles", "Maxillae", "Labium", "Labrum",
    "A", "Each heavily sclerotized mandible has sharp anterior incising teeth and a posterior serrated molar surface for chewing solid food.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(324, "The first pair of maxillae in cockroach bears a 5-segmented sensory structure known as the:",
    "Maxillary palp", "Labial palp", "Antennal flagellum", "Anal circus",
    "A", "Each maxilla bears a 5-segmented maxillary palp that tests the physical and chemical nature of food.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(325, "The lower lip (labium) of cockroach bears a pair of sensory appendages called:",
    "Labial palps (3-segmented)", "Maxillary palps (5-segmented)", "Mandibular teeth", "Galea lobes",
    "A", "The labium represents the fused second maxillae and carries a pair of 3-segmented gustatory and tactile labial palps.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(326, "The three parts of the cockroach antenna from proximal attachment to distal end are:",
    "Scape, Pedicel, Flagellum", "Pedicel, Scape, Flagellum", "Coxa, Trochanter, Flagellum", "Cardo, Stipes, Flagellum",
    "A", "The antenna consists of a basal scape set in an antennal socket, a middle pedicel, and an elongated multi-articulate flagellum.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(327, "In the female cockroach, the 7th abdominal sternum is boat-shaped and together with the 8th and 9th sterna forms the:",
    "Genital pouch (gynatrium)", "Mushroom gland", "Conglobate organ", "Proventricular chamber",
    "A", "The enlarged 7th sternum forms the floor of the genital pouch where ootheca formation and egg fertilization occur.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(328, "The female cockroach genital pouch consists of an anterior genital chamber and a posterior:",
    "Oothecal chamber (vestibulum)", "Spermathecal reservoir", "Anal canal", "Bursa copulatrix exclusively",
    "A", "The gynatrium comprises an anterior genital atrium and a posterior oothecal chamber where fertilized eggs are packaged into oothecae.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(329, "In male cockroach, the genital pouch lies at the posterior end of abdomen bounded dorsally by 9th and 10th terga and ventrally by the:",
    "9th sternum", "7th sternum", "10th sternum", "8th pleuron",
    "A", "The male genital pouch is bounded dorsally by the 9th and 10th terga and ventrally by the 9th sternum; it contains the anus and gonopore.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(330, "The conglobate (phallic) gland in male cockroach lies below the ejaculatory duct and functions to:",
    "Secrete the outermost third layer of the spermatophore", "Produce mature spermatozoa", "Store urine crystals", "Secrete digestive amylase",
    "A", "The phallic (conglobate) gland is an accessory reproductive gland whose secretion forms the external fibrous coat of the spermatophore.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(331, "The paired branched colleterial glands in female cockroach secrete:",
    "The proteinaceous tanning fluid that forms the hard protective shell of the ootheca", "Yolk proteins for oocyte growth", "Spermatophore capsules", "Salivary amylase into the crop",
    "A", "Colleterial glands secrete an opalescent fluid whose polyphenols and proteins harden by quinone tanning into the tough oothecal capsule.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(332, "The stomatogastric (visceral) nervous system of cockroach includes which ganglion located on the dorsal surface of the crop?",
    "Ingluvial ganglion", "Frontal ganglion", "Hypocerebral ganglion", "Occipital ganglion",
    "A", "The ingluvial ganglion is a paired visceral ganglion resting on the posterodorsal surface of the crop, innervating the crop and gizzard.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(333, "In the cockroach eye, each ommatidium is covered by a transparent biconvex cuticular lens called the:",
    "Corneal lens (cornea)", "Crystalline cone", "Rhabdome", "Retinula",
    "A", "The outer surface of each ommatidium is a hexagonal transparent cuticular cornea secreted by underlying corneagen cells.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(334, "Beneath the cornea of a cockroach ommatidium lies a transparent, light-focusing structure called the:",
    "Crystalline cone (formed by four Semper cells)", "Rhabdome", "Fenestra", "Pigment sheath",
    "A", "Four crystalline cone cells (vitrellae or Semper cells) form a clear, refractive crystalline cone that focuses light onto the rhabdome.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(335, "The photosensitive central photoreceptor rod formed by the inner borders of eight retinular cells in each ommatidium is the:",
    "Rhabdome", "Cornea", "Cone cell", "Ocellus",
    "A", "The rhabdome is the optical waveguide formed by microvillar arrays of retinular cells that contain rhodopsin-like visual pigments.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(336, "In cockroach, apposition images (mosaic vision) are formed when pigment granules in iris and retinal pigment cells:",
    "Extend completely to optically isolate each ommatidium from its neighbours", "Retract fully toward the basement membrane", "Degenerate permanently under dim light", "Dissolve in hemolymph",
    "A", "Extended pigment sheaths absorb oblique light rays, ensuring only rays parallel to the ommatidial axis hit the rhabdome, yielding a mosaic image.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(337, "The salivary apparatus of cockroach consists of:",
    "A pair of bilobed salivary glands and a pair of salivary receptacles (reservoirs)", "A single tubular parotid gland", "Ten pairs of salivary caeca", "A ductless endocrine cluster",
    "A", "Cockroach has a pair of bilobed salivary glands with branching acini and a pair of thin-walled median salivary reservoirs.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(338, "The common salivary duct of cockroach opens into the preoral cavity at the base of the:",
    "Hypopharynx", "Labrum", "Mandible", "Maxilla",
    "A", "Saliva from the receptacles discharges via the median salivary duct opening into the preoral space at the base of the hypopharynx.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(339, "Cockroach saliva contains which active digestive enzyme to initiate food breakdown in the crop?",
    "Salivary amylase", "Pepsin", "Trypsin", "Cellulase",
    "A", "Cockroach saliva contains salivary amylase, which hydrolyses starches into simpler sugars inside the crop.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(340, "The peritrophic membrane enclosing the food mass in cockroach midgut is chemically composed of:",
    "Chitin and proteins", "Pure calcium carbonate", "Keratin and collagen", "Cellulose and lignin",
    "A", "The peritrophic membrane is a permeable sleeve of chitin microfibrils embedded in a protein matrix secreted by midgut epithelial cells.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(341, "The respiratory spiracles of cockroach are kept closed when at rest by muscular valves to:",
    "Minimize respiratory water loss via evaporation", "Prevent food particles from escaping", "Increase blood pressure in the aorta", "Store nitrogenous gas in fat bodies",
    "A", "Spiracular closure valves prevent evaporative water loss through the tracheal system, a vital terrestrial adaptation.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(342, "The innermost microscopic branches of the cockroach tracheal system that penetrate between cells are filled with fluid called:",
    "Tracheoles containing tracheolar fluid", "Ostia with lymph", "Sinuses with red blood", "Spiracular ducts with bile",
    "A", "Tracheoles are delicate, blind-ended tubes (~0.2-1 µm wide) containing fluid; oxygen dissolves in this fluid and diffuses into adjacent cells.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(343, "During vigorous muscular activity in cockroach, the fluid level inside tracheoles retreats into tissues because:",
    "Accumulated metabolites increase tissue osmotic pressure, drawing water out of tracheoles and allowing air closer to cells", "Blood pressure collapses the tracheoles", "Alary muscles stop contracting", "Cuticular spirals (taenidia) dissolve",
    "A", "Lactic acid buildup increases tissue osmolarity, drawing tracheolar fluid into cells by osmosis so oxygen gas directly reaches active mitochondria.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(344, "The internal cuticular spiral ridges that prevent tracheal tubes from collapsing under negative pressure are called:",
    "Taenidia (intima spirals)", "Sclerites", "Ommatidia", "Phallomeres",
    "A", "Taenidia are spiral thickenings of the cuticular lining of tracheae that maintain luminal patency during respiratory movements.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(345, "The fat body (corpus adiposum) of cockroach contains four distinct cell types: trophocytes, oenocytes, mycetocytes, and:",
    "Urate cells (cells storing uric acid)", "Chondrocytes", "Osteocytes", "Goblet cells",
    "A", "The fat body contains trophocytes (food storage), urate cells (storage excretion), mycetocytes (symbiotic bacteria), and oenocytes (lipid synthesis).", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(346, "Mycetocytes in the cockroach fat body harbour symbiotic microorganisms that provide:",
    "Essential vitamins and amino acids for the host insect", "Digestive bile salts", "Chitinase enzymes to shed wings", "Hemoglobin molecules for oxygen transport",
    "A", "Intracellular bacteroids in mycetocytes synthesize essential B-complex vitamins and amino acids for the omnivorous host cockroach.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(347, "The endocrine gland in cockroach head that secretes juvenile hormone (neotenin) to maintain nymphal characteristics is the:",
    "Corpus allatum (corpora allata)", "Corpus cardiacum", "Prothoracic gland", "Mushroom gland",
    "A", "Corpora allata secrete juvenile hormone; high levels during moulting ensure the insect remains in nymphal stages without premature adult metamorphosis.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(348, "Ecdysone (moulting hormone) in insects like cockroach is synthesized and secreted by the:",
    "Prothoracic glands", "Corpora allata", "Sub-oesophageal ganglion", "Malpighian tubules",
    "A", "The prothoracic glands secrete ecdysone (moulting hormone) in response to prothoracicotropic hormone (PTTH) from the brain.", "cockroach", "Cockroach Anatomy"))

qs.append(make_q(349, "Hardening and dark pigmentation of the newly moulted cockroach cuticle is mediated by quinone tanning, a process termed:",
    "Sclerotization", "Ecdysis", "Amplexus", "Endocytosis",
    "A", "Sclerotization involves cross-linking cuticular proteins with ortho-quinones, converting soft pale arthropodin into rigid, dark sclerotin.", "cockroach", "Cockroach Morphology"))

qs.append(make_q(350, "The nymphal stage that immediately precedes the adult winged cockroach is the:",
    "Penultimate (last) nymphal instar bearing wing pads", "Pupa", "Trochophore larva", "Caterpillar",
    "A", "Cockroaches lack a pupal stage; the 13th (last) nymphal instar possesses distinct wing pads that develop into fully functional wings after the final moult.", "cockroach", "Cockroach Anatomy"))

# Q351-Q375: Frog Morphology & Anatomy (25 MCQs)
qs.append(make_q(351, "Cutaneous respiration in Rana tigrina is possible on land and in water because the skin is:",
    "Thin, highly vascularised with extensive capillary networks, and kept constantly moist by mucous gland secretions", "Covered in thick keratinised scales preventing water loss", "Equipped with thousands of spiracular openings", "Connected directly to the peritoneal coelom",
    "A", "Thin epidermis, a rich subepidermal capillary plexus, and continuous mucus secretion allow oxygen to dissolve and diffuse across the skin.", "frog", "Frog Anatomy"))

qs.append(make_q(352, "In frog, the buccal cavity acts as a force-pump during pulmonary ventilation because:",
    "Frogs lack a thoracic diaphragm and ribs to expand the lung cavity", "Lungs are muscular and pump air spontaneously", "Air is drawn in through cutaneous pores exclusively", "The tongue seals the trachea permanently",
    "A", "Because frogs lack a rib cage and diaphragm, lowering and raising the floor of the buccal cavity drives air in and out like a piston pump.", "frog", "Frog Anatomy"))

qs.append(make_q(353, "When a frog inspires air through the external nares into the buccal cavity, the glottis remains:",
    "Closed while the buccal floor drops, drawing air into the buccopharyngeal cavity", "Open while air is blown out into water", "Permanently fused with the stomach", "Open wide to the esophagus",
    "A", "The glottis stays shut initially while the buccal floor lowers, pulling atmospheric air into the mouth; then nares close and the glottis opens to force air into lungs.", "frog", "Frog Anatomy"))

qs.append(make_q(354, "The internal mucosal lining of frog lungs contains a network of shallow air-filled pockets termed:",
    "Alveoli (pulmonary infundibula)", "Tracheoles", "Book lungs", "Pores of Kohn",
    "A", "Frog lungs are simple ovoid sacs whose inner walls possess vascular trabeculae dividing the lumen into shallow air chambers (alveoli).", "frog", "Frog Anatomy"))

qs.append(make_q(355, "In frog heart, the pacemaker responsible for initiating the rhythmic heartbeat is situated in the:",
    "Sinus venosus", "Left atrium", "Ventricle apex", "Conus arteriosus",
    "A", "Specialized cardiac muscle cells in the wall of the sinus venosus generate rhythmic pacing impulses that spread to the atria.", "frog", "Frog Anatomy"))

qs.append(make_q(356, "The spiral valve (spiral fold) inside the conus arteriosus of the frog heart functions to:",
    "Direct deoxygenated blood toward the pulmo-cutaneous arches and oxygen-rich blood toward the carotid and systemic arches", "Prevent blood from entering the liver", "Pump blood into the lymphatic spaces exclusively", "Close the sinus venosus during diastole",
    "A", "The spiral valve twists within the lumen of the synangium/pylangium to separate blood streams, routing low-oxygen blood to lungs and skin.", "frog", "Frog Anatomy"))

qs.append(make_q(357, "The carotid labyrinth located at the base of the internal carotid artery in frog functions as a:",
    "Baroreceptor and chemoreceptor monitoring arterial blood pressure and oxygenation to the brain", "Valve preventing backflow into the sinus venosus", "Site of white blood cell formation", "Salt-excreting organ",
    "A", "The carotid labyrinth is an expanded spongy vascular swelling acting as a baroreceptor and oxygen chemoreceptor for cerebral blood flow.", "frog", "Frog Anatomy"))

qs.append(make_q(358, "In the frog arterial system, the right and left systemic arches curve dorsally around the esophagus and unite to form the:",
    "Dorsal aorta", "Ventral aorta", "Pulmonary trunk", "Postcaval vein",
    "A", "The two systemic arches encircle the alimentary canal and merge mid-dorsally to form the single large dorsal aorta distributing blood to the body.", "frog", "Frog Anatomy"))

qs.append(make_q(359, "The coeliaco-mesenteric artery branching from the dorsal aorta in frog delivers oxygenated blood to the:",
    "Stomach, liver, pancreas, spleen, and intestine", "Kidneys and testes exclusively", "Hindlimbs and pelvic muscles", "Brain and orbits",
    "A", "The coeliaco-mesenteric artery divides into the coeliac artery (stomach, liver, pancreas) and anterior mesenteric artery (intestine, spleen).", "frog", "Frog Anatomy"))

qs.append(make_q(360, "The hepatic portal system of frog carries venous blood containing absorbed nutrients from the digestive tract directly into:",
    "Capillary sinusoids of the liver before returning to the heart", "The postcaval vein without processing", "Bidder's canal in the kidneys", "The pulmonary veins",
    "A", "Venous blood from the stomach and intestine travels via the hepatic portal vein to be filtered and processed by hepatic sinusoids.", "frog", "Frog Anatomy"))

qs.append(make_q(361, "The renal portal system of frog collects venous blood from:",
    "Hindlimbs and pelvic region and directs it to the kidneys", "Head and forelimbs to the brain", "Lungs to the left atrium", "Liver to the sinus venosus",
    "A", "Femoral and sciatic veins contribute to the renal portal vein, carrying blood from the hind extremities to kidney tubules.", "frog", "Frog Anatomy"))

qs.append(make_q(362, "The functional kidneys of adult frogs are developmentally classified as:",
    "Mesonephric kidneys", "Pronephric kidneys", "Metanephric kidneys", "Archinephric nephridia",
    "A", "Adult amphibians retain mesonephric (opisthonephric) kidneys; pronephric kidneys function only in early embryo and tadpole stages.", "frog", "Frog Anatomy"))

qs.append(make_q(363, "In frog kidney, Bowman's capsule and the glomerulus together constitute a:",
    "Malpighian body (renal corpuscle)", "Malpighian tubule", "Bidder's organ", "Nephrocyte",
    "A", "Each renal nephron begins with a Malpighian corpuscle consisting of a vascular glomerulus enclosed within a double-walled Bowman's capsule.", "frog", "Frog Anatomy"))

qs.append(make_q(364, "Urine produced by the kidneys in frog passes through ureters into the cloaca and is temporarily stored in the:",
    "Thin-walled bilobed urinary bladder attached to the ventral wall of the cloaca", "Gall bladder", "Mesorchium", "Sinus venosus",
    "A", "Urine leaves the cloacal chamber and enters the ventral bilobed urinary bladder for temporary storage before expulsion.", "frog", "Frog Anatomy"))

qs.append(make_q(365, "When a frog is dehydrated on land, the urinary bladder can reabsorb water back into circulation under the influence of:",
    "Arginine vasotocin (amphibian ADH)", "Insulin", "Thyroxine", "Gastrin",
    "A", "Arginine vasotocin (AVT) increases water permeability of the frog bladder wall, allowing stored dilute urine to be reabsorbed into blood.", "frog", "Frog Anatomy"))

qs.append(make_q(366, "Cranial nerve X in frog is the vagus nerve, which carries parasympathetic motor fibres to:",
    "Heart, lungs, larynx, and digestive tract", "Tongue muscles exclusively", "Olfactory mucosa", "Retinal photoreceptors",
    "A", "The 10th cranial nerve (vagus) innervates visceral organs including the cardiac branches that slow heart rate.", "frog", "Frog Anatomy"))

qs.append(make_q(367, "In frog skull, the condition where the cranium articulates with the first vertebra (atlas) via two occipital condyles is termed:",
    "Dicondylic skull", "Monocondylic skull", "Acondylic skull", "Polycondylic skull",
    "A", "Amphibian skulls have two exoccipital condyles that fit into the articular facets of the atlas vertebra (dicondylic skull).", "frog", "Frog Anatomy"))

qs.append(make_q(368, "The tympanic cavity (middle ear) of frog communicates with the buccopharyngeal cavity via the:",
    "Eustachian tube", "Bidder's canal", "Foramen magnum", "Optic canal",
    "A", "The Eustachian tube connects the middle ear cavity to the pharynx, equalising air pressure on either side of the tympanum.", "frog", "Frog Anatomy"))

qs.append(make_q(369, "The inner ear of frog contains three semicircular canals and the utricle-saccule complex, which function primarily in:",
    "Hearing and dynamic/static equilibrium (balance)", "Detecting water salinity", "Producing endolymphatic hormones", "Regulating blood pH",
    "A", "The membranous labyrinth of the internal ear acts as an acoustico-lateral organ monitoring body equilibrium and sound frequencies.", "frog", "Frog Anatomy"))

qs.append(make_q(370, "The pelvic girdle of frog is composed of two symmetrical halves (os innominatum), each consisting of three fused bones:",
    "Ilium, Ischium, and Pubis", "Scapula, Coracoid, and Clavicle", "Femur, Tibia, and Fibula", "Atlas, Urostyle, and Sternum",
    "A", "Each half of the pelvic girdle consists of an elongated ilium, a posterior ischium, and an anteroventral cartilaginous pubis.", "frog", "Frog Anatomy"))

qs.append(make_q(371, "The elongated ilium of the pelvic girdle in frog articulates anteriorly with the transverse processes of the:",
    "9th (sacral) vertebra", "1st (atlas) vertebra", "Urostyle only", "Rib cage",
    "A", "The extended ilia connect to the transverse processes of the 9th sacral vertebra, providing a firm skeletal lever for jumping.", "frog", "Frog Anatomy"))

qs.append(make_q(372, "The radio-ulna of the frog forelimb represents a fused bone of the forearm; similarly, the shank of the hindlimb contains the:",
    "Tibio-fibula", "Femur", "Humerus", "Tarsus",
    "A", "To strengthen limb mechanics for hopping and swimming, the radius and ulna fuse into a radio-ulna, and the tibia and fibula fuse into a tibio-fibula.", "frog", "Frog Anatomy"))

qs.append(make_q(373, "The proximal tarsal bones in the ankle of the frog are uniquely elongated to provide extra jumping leverage; they are:",
    "Astragalus (talus) and Calcaneum (fibulare)", "Malleus and Incus", "Ilium and Ischium", "Scaphoid and Lunate",
    "A", "The astragalus and calcaneum are elongated rod-like bones in the frog ankle that form an extra limb segment for powerful jumping.", "frog", "Frog Anatomy"))

qs.append(make_q(374, "During amplexus in frogs, the male grasps the female behind her forelimbs with his copulatory pads to:",
    "Synchronise the simultaneous release of ova and spermatozoa directly into the water for external fertilisation", "Inject venom into the female skin", "Transfer an internal spermatophore into the cloaca", "Carry the female into a terrestrial burrow",
    "A", "Amplexus ensures that eggs and sperm are deposited simultaneously into surrounding water, maximizing fertilisation efficiency.", "frog", "Frog Anatomy"))

qs.append(make_q(375, "Metamorphosis in the frog tadpole involves the resorption of the tail and gills via programmed cell death (apoptosis) executed by:",
    "Lysosomal hydrolytic enzymes stimulated by thyroid hormones", "Peroxisomal catalase", "Insulin-like growth factors", "Bile salts in the stomach",
    "A", "Thyroxine triggers autolysis in tadpole tail tissue, where lysosomal acid hydrolases digest tail proteins and recycle nutrients for froglet growth.", "frog", "Frog Anatomy"))

print(f"Generated Part 3: {len(qs)} questions.")
assert len(qs) == 125, f"Expected 125, got {len(qs)}"

with open("scripts/soa_part3_gen.py", "w", encoding="utf-8") as f:
    f.write("# Structural Organisation in Animals Part 3: Q251 to Q375 (Medium)\n")
    f.write("import json\n\n")
    f.write("def get_part3_raw():\n")
    f.write("    return " + json.dumps(qs, indent=2) + "\n\n")
    f.write('print("SOA Part 3 raw helper ready.")\n')

print("Saved scripts/soa_part3_gen.py successfully.")
