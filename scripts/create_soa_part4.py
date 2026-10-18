import json

def make_q(num, text, oA, oB, oC, oD, ans, exp, topic, sub, qtype="Multi-statement MCQ", diff="Hard"):
    return {
        "q_num": num,
        "q": text,
        "opts": {"A": oA, "B": oB, "C": oC, "D": oD},
        "ans": ans,
        "exp": exp,
        "diff": diff,
        "topic_key": topic,
        "subtopic": sub,
        "q_type": qtype
    }

qs = []

# Q376-Q415: Animal Tissues (40 questions - Hard)
qs.append(make_q(376, "Given below are two statements:\nStatement I: Goblet cells of the alimentary canal are isolated unicellular glandular cells that secrete mucus.\nStatement II: Salivary glands consist of clusters of secretory cells and are classified as multicellular exocrine glands.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct. NCERT explicitly states that glandular epithelium is divided into unicellular (isolated cells, e.g., goblet cells of alimentary canal) and multicellular (clusters of cells, e.g., salivary gland).", "tissues", "Epithelial Tissue", "Statement I & II"))

qs.append(make_q(377, "Given below are two statements:\nStatement I: Tight junctions facilitate rapid intercellular communication by establishing open connexon pores between adjacent cells.\nStatement II: Adhering junctions perform cementing to keep neighbouring cells together, resisting mechanical detachment.\nIn the light of the above statements, choose the correct answer:",
    "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect",
    "A", "Statement I is incorrect (gap junctions facilitate communication; tight junctions stop leakage). Statement II is correct.", "tissues", "Epithelial Tissue", "Statement I & II"))

qs.append(make_q(378, "Assertion (A): Compound epithelium has a limited role in secretion and absorption.\nReason (R): Compound epithelium is made of more than one layer (multi-layered) of cells and its main function is to provide protection against chemical and mechanical stresses.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Because compound epithelium is multi-layered and thick, diffusion and active secretion/absorption across it are minimal; its structural thickness serves to resist abrasion and stress.", "tissues", "Epithelial Tissue", "Assertion & Reason"))

qs.append(make_q(379, "Assertion (A): Cartilage tissue is avascular and repairs much more slowly than compact bone when injured.\nReason (R): Chondrocytes are enclosed in lacunae and rely entirely on slow nutrient diffusion through the solid, pliable matrix from blood vessels in the perichondrium.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Lack of internal blood vessels forces chondrocytes to depend entirely on diffusion across a proteoglycan-dense matrix, causing extremely slow metabolic turnover and poor repair.", "tissues", "Connective Tissue", "Assertion & Reason"))

qs.append(make_q(380, "Match Column I (Tissue type) with Column II (Characteristic location/function):\nColumn I:\np. Simple squamous epithelium\nq. Simple cuboidal epithelium with brush border\nr. Ciliated columnar epithelium\ns. Non-keratinised stratified squamous epithelium\nColumn II:\n1. Lining of Fallopian tubes and bronchioles\n2. Wall of Bowman's capsule and lung alveoli\n3. Moist lining of buccal cavity and oesophagus\n4. Proximal convoluted tubule (PCT) of nephron\nSelect the correct option:",
    "p-2, q-4, r-1, s-3", "p-4, q-2, r-1, s-3", "p-2, q-1, r-4, s-3", "p-3, q-4, r-1, s-2",
    "A", "Squamous lines alveoli/Bowman's capsule (2); cuboidal brush border is in PCT (4); ciliated lines bronchioles/oviducts (1); stratified squamous lines buccal cavity (3).", "tissues", "Epithelial Tissue", "Matching"))

qs.append(make_q(381, "Match Column I (Connective Tissue Element) with Column II (Key Characteristic):\nColumn I:\np. Mast cells\nq. Fibroblasts\nr. Adipocytes\ns. Plasma cells\nColumn II:\n1. Secrete collagen and elastic fibres\n2. Synthesize and release circulating antibodies\n3. Release histamine, serotonin and heparin\n4. Store triglycerides in large unilocular droplets\nSelect the correct option:",
    "p-3, q-1, r-4, s-2", "p-1, q-3, r-4, s-2", "p-3, q-4, r-1, s-2", "p-2, q-1, r-4, s-3",
    "A", "Mast cells secrete histamine/heparin (3); fibroblasts produce matrix fibres (1); adipocytes store fat (4); plasma cells secrete antibodies (2).", "tissues", "Connective Tissue", "Matching"))

qs.append(make_q(382, "Match Column I (Specialized Connective Tissue) with Column II (Location):\nColumn I:\np. Hyaline cartilage\nq. Elastic cartilage\nr. White fibrocartilage\ns. Dense irregular connective tissue\nColumn II:\n1. Intervertebral discs and pubic symphysis\n2. External ear pinna and epiglottis\n3. Dermis of skin\n4. Costal cartilages and articular ends of long bones\nSelect the correct option:",
    "p-4, q-2, r-1, s-3", "p-2, q-4, r-1, s-3", "p-4, q-1, r-2, s-3", "p-3, q-2, r-1, s-4",
    "A", "Hyaline cartilage: costal/articular ends (4); Elastic: pinna/epiglottis (2); Fibrocartilage: intervertebral discs (1); Dense irregular: skin dermis (3).", "tissues", "Connective Tissue", "Matching"))

qs.append(make_q(383, "Consider the following four statements regarding areolar tissue:\n(i) It is a loose connective tissue present beneath the skin.\n(ii) It frequently serves as a support framework for epithelium.\n(iii) It contains fibroblasts, macrophages, and mast cells.\n(iv) In areolar tissue, collagen fibres are organized into densely packed parallel regular bundles.\nHow many of the above statements are CORRECT?",
    "Three (i, ii, and iii)", "Four (all)", "Two", "One",
    "A", "Statements (i), (ii), and (iii) are correct NCERT statements. Statement (iv) is incorrect because areolar tissue has loosely and irregularly arranged fibres, not dense regular parallel bundles.", "tissues", "Connective Tissue", "Multi-statement MCQ"))

qs.append(make_q(384, "Consider the following statements regarding bone histology:\n(i) Bone matrix is hard and non-pliable due to rich deposition of calcium salts and collagen fibres.\n(ii) Osteocytes reside in small fluid-filled cavities called lacunae.\n(iii) Haversian canals run longitudinally and contain blood vessels and nerves.\n(iv) Volkmann's canals run transversely, connecting adjacent Haversian canals with the periosteum.\nWhich of the above statements are correct?",
    "(i), (ii), (iii) and (iv)", "(i) and (ii) only", "(i), (ii) and (iii) only", "(ii) and (iv) only",
    "A", "All four statements accurately describe mammalian compact bone microarchitecture.", "tissues", "Connective Tissue", "Multi-statement MCQ"))

qs.append(make_q(385, "Assertion (A): Skeletal muscle fibres are termed syncytial in nature.\nReason (R): During embryonic development, skeletal muscle fibres form by the fusion of multiple myoblasts, resulting in multinucleated cylindrical cells with peripheral nuclei.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Myoblast fusion produces a shared continuous sarcoplasm containing multiple nuclei located beneath the sarcolemma (syncytium).", "tissues", "Muscular Tissue", "Assertion & Reason"))

qs.append(make_q(386, "Assertion (A): Smooth muscle fibres do not show cross-striations.\nReason (R): Actin and myosin myofilaments in smooth muscle are not arranged in regular repeating sarcomeric alignments.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Cross-striations arise from regular in-register sarcomeres; smooth muscle lacks sarcomeres, anchoring myofilaments obliquely to dense bodies.", "tissues", "Muscular Tissue", "Assertion & Reason"))

qs.append(make_q(387, "Match Column I (Muscle Type) with Column II (Distinguishing Feature):\nColumn I:\np. Skeletal muscle\nq. Smooth muscle\nr. Cardiac muscle\nColumn II:\n1. Involuntary, unstriated, fusiform cells with single central nucleus\n2. Involuntary, striated, branched cylindrical cells with intercalated discs\n3. Voluntary, striated, unbranched syncytial fibres with peripheral nuclei\nSelect the correct option:",
    "p-3, q-1, r-2", "p-1, q-3, r-2", "p-3, q-2, r-1", "p-2, q-1, r-3",
    "A", "Skeletal muscle is voluntary, striated, syncytial (3); Smooth is involuntary, unstriated, fusiform (1); Cardiac is involuntary, striated, branched with discs (2).", "tissues", "Muscular Tissue", "Matching"))

qs.append(make_q(388, "Given below are two statements regarding cardiac muscle:\nStatement I: Communication junctions (intercalated discs) at some fusion points allow cardiac cells to contract as a coordinated unit.\nStatement II: When one cardiac muscle cell receives a signal to contract, its neighbours are stimulated to contract almost simultaneously.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct verbatim from NCERT. Gap junctions within intercalated discs ensure rapid ionic conduction across the myocardium.", "tissues", "Muscular Tissue", "Statement I & II"))

qs.append(make_q(389, "Consider the following statements regarding neural tissue:\n(i) Neurons are excitable cells that constitute the functional units of the nervous system.\n(ii) Neuroglia are non-excitable supporting cells that make up more than one-half the volume of neural tissue.\n(iii) Schwann cells form myelin sheaths around axons in the peripheral nervous system.\n(iv) Impulses travel away from the cell body along dendrites and toward the cell body along axons.\nWhich of the above statements are correct?",
    "(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (iv) only", "(ii) and (iv) only",
    "A", "Statements (i), (ii), and (iii) are correct. Statement (iv) is incorrect: dendrites conduct impulses toward the cell body, whereas axons conduct impulses away from the cell body.", "tissues", "Neural Tissue", "Multi-statement MCQ"))

qs.append(make_q(390, "Assertion (A): Conduction of nerve impulses along a myelinated axon is significantly faster than along an unmyelinated axon.\nReason (R): In myelinated axons, action potentials jump from one Node of Ranvier to the next via saltatory conduction.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Myelin acts as an insulator, restricting current generation and channel opening to unmyelinated Nodes of Ranvier (saltatory conduction), accelerating velocity up to 100-fold.", "tissues", "Neural Tissue", "Assertion & Reason"))

qs.append(make_q(391, "Match Column I (Neuroglial Cell) with Column II (Physiological Role):\nColumn I:\np. Astrocytes\nq. Oligodendrocytes\nr. Microglia\ns. Ependymal cells\nColumn II:\n1. Phagocytic scavenging of pathogens and debris in CNS\n2. Form myelin sheath around multiple CNS axons\n3. Maintain blood-brain barrier and regulate extracellular ion balance\n4. Line ventricles and central canal, circulating CSF\nSelect the correct option:",
    "p-3, q-2, r-1, s-4", "p-2, q-3, r-1, s-4", "p-3, q-1, r-2, s-4", "p-4, q-2, r-1, s-3",
    "A", "Astrocytes: BBB/ions (3); Oligodendrocytes: CNS myelin (2); Microglia: CNS macrophages (1); Ependymal: line ventricles/CSF (4).", "tissues", "Neural Tissue", "Matching"))

qs.append(make_q(392, "Given below are two statements regarding action potential transmission:\nStatement I: At resting potential, the axonal membrane is comparatively more permeable to K+ ions and nearly impermeable to Na+ ions.\nStatement II: Depolarisation during an action potential occurs due to the rapid efflux of K+ ions out of the axoplasm.\nIn the light of the above statements, choose the correct answer:",
    "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Statement I is correct. Statement II is incorrect: depolarisation is caused by rapid inward flux of Na+ ions, whereas K+ efflux causes repolarisation.", "tissues", "Neural Tissue", "Statement I & II"))

qs.append(make_q(393, "Consider the following statements regarding blood components:\n(i) Erythrocytes are the most abundant formed elements, lacking nuclei in mature human circulation.\n(ii) Leukocytes are nucleated and divided into granulocytes (neutrophils, eosinophils, basophils) and agranulocytes (lymphocytes, monocytes).\n(iii) Basophils secrete histamine, serotonin, and heparin, participating in inflammatory reactions.\n(iv) Platelets are true nucleated cells produced directly from reticulocytes.\nHow many of the above statements are INCORRECT?",
    "One (iv only)", "Two", "Three", "Zero (all are correct)",
    "A", "Only statement (iv) is incorrect: platelets are non-nucleated cell fragments shed from megakaryocytes in the bone marrow, not reticulocytes.", "tissues", "Connective Tissue", "Multi-statement MCQ"))

qs.append(make_q(394, "Assertion (A): Tendons attach skeletal muscles to bones, while ligaments attach one bone to another bone.\nReason (R): Tendons and ligaments are examples of dense regular connective tissue where collagen fibres are oriented in parallel bundles.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Both statements are correct facts from NCERT explaining the structure and respective anatomical roles of dense regular connective tissues.", "tissues", "Connective Tissue", "Assertion & Reason"))

qs.append(make_q(395, "Match Column I (Cellular structure) with Column II (Location/Type):\nColumn I:\np. Haversian canals\nq. Intercalated discs\nr. Chondrocytes in lacunae\ns. Nissl granules\nColumn II:\n1. Cartilage matrix\n2. Mammalian compact bone\n3. Cyton (soma) of neurons\n4. Cardiac muscle fibres\nSelect the correct option:",
    "p-2, q-4, r-1, s-3", "p-4, q-2, r-1, s-3", "p-2, q-1, r-4, s-3", "p-3, q-4, r-1, s-2",
    "A", "Haversian canals: compact bone (2); Intercalated discs: cardiac muscle (4); Chondrocytes: cartilage (1); Nissl granules: cyton of neuron (3).", "tissues", "Animal Tissues", "Matching"))

qs.append(make_q(396, "Given below are two statements regarding muscle proteins:\nStatement I: The light meromyosin (LMM) component contains the globular head and short arm.\nStatement II: The globular head of heavy meromyosin (HMM) acts as an active ATPase enzyme and has binding sites for ATP and active sites for actin.\nIn the light of the above statements, choose the correct answer:",
    "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect",
    "A", "Statement I is incorrect: heavy meromyosin (HMM) contains the head and short arm; light meromyosin (LMM) forms the tail. Statement II is correct.", "tissues", "Muscular Tissue", "Statement I & II"))

qs.append(make_q(397, "Which of the following events occur during skeletal muscle contraction according to the sliding filament theory?\n1. Z-lines pulled inward\n2. A-band retains its length\n3. I-band reduces in length\n4. H-zone disappears or narrows\n5. Myosin filament shortens in length\nChoose the correct combination:",
    "1, 2, 3 and 4 only", "1, 2, 3, 4 and 5", "2, 3 and 5 only", "1 and 4 only",
    "A", "Filaments slide without altering their individual lengths; therefore, thick myosin filaments do not shorten (5 is false).", "tissues", "Muscular Tissue", "Multi-statement MCQ"))

qs.append(make_q(398, "Assertion (A): Transmission of an impulse across an electrical synapse is always faster than that across a chemical synapse.\nReason (R): In electrical synapses, the membranes of pre- and post-synaptic neurons are in very close proximity and gap junctions allow direct flow of ionic current.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Direct ionic passage through connexon hemichannels eliminates the ~0.5 ms synaptic delay required for neurotransmitter exocytosis and receptor binding.", "tissues", "Neural Tissue", "Assertion & Reason"))

qs.append(make_q(399, "Consider the following statements regarding epithelial junctions:\n(i) Tight junctions help to stop substances from leaking across a tissue.\n(ii) Adhering junctions perform cementing to keep neighbouring cells together.\n(iii) Gap junctions facilitate the cells to communicate with each other by connecting the cytoplasm of adjoining cells.\n(iv) Desmosomes are specialised tight junctions found exclusively in heart valves.\nWhich of the above statements are correct?",
    "(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (iv) only", "(ii) and (iv) only",
    "A", "Statements (i), (ii), and (iii) are correct NCERT statements. Statement (iv) is incorrect: desmosomes are adhering junctions, not tight junctions.", "tissues", "Epithelial Tissue", "Multi-statement MCQ"))

qs.append(make_q(400, "Match Column I (Epithelium type) with Column II (Location):\nColumn I:\np. Simple squamous\nq. Simple cuboidal\nr. Simple columnar\ns. Pseudostratified ciliated columnar\nColumn II:\n1. Lining of stomach and intestine\n2. Ducts of glands and tubular parts of nephrons\n3. Trachea and large bronchi\n4. Walls of blood vessels and air sacs of lungs\nSelect the correct option:",
    "p-4, q-2, r-1, s-3", "p-2, q-4, r-1, s-3", "p-4, q-1, r-2, s-3", "p-3, q-2, r-1, s-4",
    "A", "Squamous: blood vessels/air sacs (4); Cuboidal: ducts/tubular nephron (2); Columnar: stomach/intestine (1); Pseudostratified: trachea/bronchi (3).", "tissues", "Epithelial Tissue", "Matching"))

qs.append(make_q(401, "Given below are two statements:\nStatement I: Dense irregular connective tissue contains fibroblasts and many fibres (mostly collagen) oriented differently, present in the skin dermis.\nStatement II: Tendons and ligaments are dense irregular connective tissues.\nIn the light of the above statements, choose the correct answer:",
    "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Statement I is correct. Statement II is incorrect because tendons and ligaments are classic examples of dense regular connective tissue.", "tissues", "Connective Tissue", "Statement I & II"))

qs.append(make_q(402, "Assertion (A): In all connective tissues except blood, cells secrete structural protein fibres like collagen and elastin.\nReason (R): Blood is a fluid connective tissue with a liquid extracellular matrix (plasma) where fibres are absent under normal uncoagulated conditions.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Blood cells (erythrocytes, leukocytes, thrombocytes) do not synthesize structural extracellular collagen or elastin fibres; its matrix is liquid plasma.", "tissues", "Connective Tissue", "Assertion & Reason"))

qs.append(make_q(403, "Consider the following four statements regarding connective tissues:\n(i) Adipose tissue is a specialised loose connective tissue whose cells store fats.\n(ii) Cartilage matrix is solid and pliable and resists compression.\n(iii) The intercellular matrix of bone is soft and pliable because it lacks calcium salts.\n(iv) Blood is a fluid connective tissue containing plasma, RBCs, WBCs, and platelets.\nHow many of the above statements are INCORRECT?",
    "One (iii only)", "Two", "Three", "Zero",
    "A", "Only statement (iii) is incorrect because bone matrix is hard and non-pliable due to rich calcium salts and collagen fibres.", "tissues", "Connective Tissue", "Multi-statement MCQ"))

qs.append(make_q(404, "Match Column I (Blood component) with Column II (Physiological Role):\nColumn I:\np. Fibrinogen\nq. Globulins\nr. Albumins\ns. Thrombocytes\nColumn II:\n1. Defense mechanisms / antibodies\n2. Osmotic balance of blood plasma\n3. Clotting or coagulation of blood\n4. Cell fragments essential for hemostasis\nSelect the correct option:",
    "p-3, q-1, r-2, s-4", "p-1, q-3, r-2, s-4", "p-3, q-2, r-1, s-4", "p-2, q-1, r-3, s-4",
    "A", "Fibrinogen: clotting (3); Globulins: defense/antibodies (1); Albumins: osmotic balance (2); Thrombocytes: clotting fragments (4).", "tissues", "Connective Tissue", "Matching"))

qs.append(make_q(405, "Given below are two statements regarding muscle histology:\nStatement I: Skeletal muscle fibres are involuntary and multinucleate.\nStatement II: Smooth muscle fibres are fusiform, uninucleate, and involuntary.\nIn the light of the above statements, choose the correct answer:",
    "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect",
    "A", "Statement I is incorrect: skeletal muscles are voluntary. Statement II is correct.", "tissues", "Muscular Tissue", "Statement I & II"))

qs.append(make_q(406, "Assertion (A): Neural tissue exerts the greatest control over the body's responsiveness to changing conditions.\nReason (R): Neurons are excitable cells that generate and propagate electrical disturbances along their plasma membranes in response to stimulation.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Neurons respond rapidly to internal and external stimuli by depolarising and transmitting action potentials, coordinating rapid physiological responses.", "tissues", "Neural Tissue", "Assertion & Reason"))

qs.append(make_q(407, "Consider the following statements regarding types of neurons:\n(i) Multipolar neurons have one axon and two or more dendrites (found in cerebral cortex).\n(ii) Bipolar neurons have one axon and one dendrite (found in retina of eye).\n(iii) Unipolar neurons have a cell body with one axon only (found in embryonic stage).\n(iv) Pseudounipolar neurons have no axon and many dendrites.\nWhich of the above statements are correct according to NCERT?",
    "(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (ii) only", "(ii) and (iv) only",
    "A", "Statements (i), (ii), and (iii) are explicitly defined in NCERT. Statement (iv) is incorrect.", "tissues", "Neural Tissue", "Multi-statement MCQ"))

qs.append(make_q(408, "Match Column I (Epithelial Specialization) with Column II (Location):\nColumn I:\np. Ciliated cuboidal epithelium\nq. Non-ciliated simple columnar with microvilli\nr. Keratinised stratified squamous\ns. Transitional epithelium\nColumn II:\n1. Intestinal lining\n2. Urinary bladder\n3. Neck/tubules of nephron\n4. Epidermis of mammalian skin\nSelect the correct option:",
    "p-3, q-1, r-4, s-2", "p-1, q-3, r-4, s-2", "p-3, q-4, r-1, s-2", "p-2, q-1, r-4, s-3",
    "A", "Ciliated cuboidal: nephron tubules (3); Columnar with microvilli: intestine (1); Keratinised: skin epidermis (4); Transitional: urinary bladder (2).", "tissues", "Epithelial Tissue", "Matching"))

qs.append(make_q(409, "Given below are two statements:\nStatement I: Fibres of structural proteins provide strength, elasticity, and flexibility to connective tissues.\nStatement II: The modified polysaccharides secreted by connective tissue cells accumulate between cells and fibres, acting as ground substance.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct verbatim from NCERT regarding the structural components of connective tissues.", "tissues", "Connective Tissue", "Statement I & II"))

qs.append(make_q(410, "Assertion (A): Smooth muscles are termed 'involuntary' muscles.\nReason (R): Their contractions are not under the direct voluntary conscious control of the somatic nervous system.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Smooth muscles are regulated automatically by the autonomic nervous system and hormones, not under conscious will.", "tissues", "Muscular Tissue", "Assertion & Reason"))

qs.append(make_q(411, "Consider the following statements regarding cartilage:\n(i) The intercellular material of cartilage is solid and pliable and resists compression.\n(ii) Cells of cartilage (chondrocytes) are enclosed in small cavities within the matrix secreted by them.\n(iii) Most of the cartilages in vertebrate embryos are replaced by bones in adults.\n(iv) Cartilage is completely absent in the adult human body.\nHow many of the above statements are CORRECT?",
    "Three (i, ii, and iii)", "Four (all)", "Two", "One",
    "A", "Statements (i), (ii), and (iii) are correct. Statement (iv) is incorrect: cartilage persists in adult humans at the tip of the nose, outer ear pinna, joints, and between vertebrae.", "tissues", "Connective Tissue", "Multi-statement MCQ"))

qs.append(make_q(412, "Match Column I (Cell Type) with Column II (Staining / Microscopic Character):\nColumn I:\np. Neutrophil\nq. Eosinophil\nr. Basophil\ns. Monocyte\nColumn II:\n1. Coarse granules staining with basic dyes like methylene blue\n2. Multi-lobed nucleus with fine neutral granules\n3. Bilobed nucleus with coarse granules staining intensely with eosin\n4. Large kidney- or horseshoe-shaped nucleus, agranular\nSelect the correct option:",
    "p-2, q-3, r-1, s-4", "p-3, q-2, r-1, s-4", "p-2, q-1, r-3, s-4", "p-4, q-3, r-1, s-2",
    "A", "Neutrophil: multi-lobed neutral (2); Eosinophil: bilobed acidic/eosin (3); Basophil: coarse basic granules (1); Monocyte: kidney-shaped nucleus (4).", "tissues", "Connective Tissue", "Matching"))

qs.append(make_q(413, "Given below are two statements regarding neuroglia:\nStatement I: Neuroglia make up more than one-half the volume of neural tissue in our body.\nStatement II: When a neuroglial cell is suitably stimulated, an electrical disturbance is generated which travels along its plasma membrane.\nIn the light of the above statements, choose the correct answer:",
    "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Statement I is correct. Statement II is incorrect: neuroglia are non-excitable supporting cells; electrical disturbances are generated in neurons, not neuroglia.", "tissues", "Neural Tissue", "Statement I & II"))

qs.append(make_q(414, "Assertion (A): Bone marrow in certain long bones is the site of production of blood cells.\nReason (R): Hematopoietic stem cells reside within the active vascular stroma of red bone marrow.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Pluripotent hematopoietic stem cells in red marrow give rise to all myeloid and lymphoid lineages (erythropoiesis, leukopoiesis, thrombopoiesis).", "tissues", "Connective Tissue", "Assertion & Reason"))

qs.append(make_q(415, "Consider the following statements regarding cell junctions:\n(i) Three types of cell junctions are found in epithelium and other tissues: tight, adhering, and gap junctions.\n(ii) Gap junctions connect cytoplasm of adjacent cells for rapid transfer of ions, small molecules, and sometimes big molecules.\n(iii) Tight junctions cement cells together mechanically without sealing paracellular space.\n(iv) Adhering junctions help to stop substances from leaking across a tissue.\nWhich of the above statements are correct?",
    "(i) and (ii) only", "(i), (ii) and (iii)", "(iii) and (iv) only", "(i), (ii), (iii) and (iv)",
    "A", "Statements (i) and (ii) are correct. Statements (iii) and (iv) have their definitions reversed: tight junctions seal leaks, while adhering junctions cement cells.", "tissues", "Epithelial Tissue", "Multi-statement MCQ"))

# Q416-Q460: Cockroach Morphology & Anatomy (45 questions - Hard)
qs.append(make_q(416, "Given below are two statements regarding cockroach exoskeleton:\nStatement I: In each segment of cockroach, the exoskeleton consists of hardened plates called sclerites.\nStatement II: The dorsal sclerites are called sterna and the ventral sclerites are called terga.\nIn the light of the above statements, choose the correct answer:",
    "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Statement I is correct. Statement II is incorrect because dorsal plates are terga and ventral plates are sterna.", "cockroach", "Cockroach Morphology", "Statement I & II"))

qs.append(make_q(417, "Assertion (A): Head of cockroach shows great mobility in all directions.\nReason (R): The head is connected with the thorax by a short flexible neck (cervix) containing cervical sclerites.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "The flexible articular membrane of the cervix allows the triangular hypognathous head to pivot freely in all directions.", "cockroach", "Cockroach Morphology", "Assertion & Reason"))

qs.append(make_q(418, "Match Column I (Cockroach Mouthpart) with Column II (Anatomical Homologue / Function):\nColumn I:\np. Labrum\nq. Mandibles\nr. Maxillae\ns. Labium\nColumn II:\n1. Lower lip (fused second maxillae)\n2. Upper lip\n3. Jaws bearing grinding teeth and incising teeth\n4. Paired appendages bearing 5-segmented palps\nSelect the correct option:",
    "p-2, q-3, r-4, s-1", "p-3, q-2, r-4, s-1", "p-2, q-4, r-3, s-1", "p-1, q-3, r-4, s-2",
    "A", "Labrum is upper lip (2); Mandibles are chewing jaws (3); Maxillae bear 5-segmented palps (4); Labium is lower lip (1).", "cockroach", "Cockroach Morphology", "Matching"))

qs.append(make_q(419, "Given below are two statements regarding cockroach wings:\nStatement I: Forewings (tegmina) arise from the mesothorax and are opaque, dark, and leathery.\nStatement II: Hindwings arise from the metathorax and are transparent, membranous, and used in flight.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct facts from NCERT regarding the origins and functions of cockroach wings.", "cockroach", "Cockroach Morphology", "Statement I & II"))

qs.append(make_q(420, "Assertion (A): Male cockroaches can be distinguished from female cockroaches by the presence of anal styles.\nReason (R): Anal styles are a pair of short, unjointed structures present on the 9th sternum of males but absent in females.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Anal styles occur exclusively on the 9th sternum of adult males, providing an unambiguous external sexual dimorphic feature.", "cockroach", "Cockroach Morphology", "Assertion & Reason"))

qs.append(make_q(421, "Consider the following statements regarding the abdomen of cockroach:\n(i) The abdomen in both males and females consists of 10 segments.\n(ii) In females, the 7th sternum is boat-shaped and together with the 8th and 9th sterna forms a brood or genital pouch.\n(iii) In both sexes, the 10th segment bears a pair of jointed filamentous structures called anal cerci.\n(iv) Anal styles are present on the 10th segment in both sexes.\nWhich of the above statements are correct?",
    "(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (iv) only", "(ii) and (iv) only",
    "A", "Statements (i), (ii), and (iii) are correct. Statement (iv) is incorrect: anal styles are present only in males on the 9th sternum.", "cockroach", "Cockroach Morphology", "Multi-statement MCQ"))

qs.append(make_q(422, "Match Column I (Digestive Region of Cockroach) with Column II (Structural Feature / Function):\nColumn I:\np. Crop\nq. Gizzard (proventriculus)\nr. Hepatic caeca\ns. Malpighian tubules\nColumn II:\n1. 6-8 blind tubules at foregut-midgut junction secreting digestive juices\n2. Sac-like structure used for storing food\n3. 100-150 yellow thin filamentous structures for excretion\n4. Muscular organ with six cuticular teeth for grinding food\nSelect the correct option:",
    "p-2, q-4, r-1, s-3", "p-4, q-2, r-1, s-3", "p-2, q-1, r-4, s-3", "p-3, q-4, r-1, s-2",
    "A", "Crop stores food (2); Gizzard has 6 teeth (4); Hepatic caeca secrete digestive enzymes (1); Malpighian tubules excrete waste (3).", "cockroach", "Cockroach Anatomy", "Matching"))

qs.append(make_q(423, "Given below are two statements regarding cockroach alimentary canal:\nStatement I: The entire foregut and hindgut of cockroach are lined internally by cuticle.\nStatement II: Cuticular lining is absent in the midgut (mesenteron).\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct. Foregut and hindgut are ectodermal invaginations lined with cuticle, while the midgut is endodermal.", "cockroach", "Cockroach Anatomy", "Statement I & II"))

qs.append(make_q(424, "Assertion (A): Cockroach has an open type of circulatory system.\nReason (R): Blood vessels are poorly developed and open into spaces (haemocoel) where visceral organs are bathed directly in blood (haemolymph).\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Blood is pumped into the open haemocoel rather than contained within closed endothelial capillaries (open circulatory system).", "cockroach", "Cockroach Anatomy", "Assertion & Reason"))

qs.append(make_q(425, "Consider the following statements regarding cockroach heart:\n(i) Heart is an elongated dorsal muscular tube lying along the mid-dorsal line of thorax and abdomen.\n(ii) It is differentiated into 13 funnel-shaped chambers with ostia on either side.\n(iii) Blood from sinuses enters the heart through ostia and is pumped anteriorly to sinuses again.\n(iv) Heart contains four chambers with bicuspid and tricuspid valves.\nWhich of the above statements are correct?",
    "(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(ii) and (iv) only", "(i) and (iv) only",
    "A", "Statements (i), (ii), and (iii) are correct NCERT facts. Statement (iv) is incorrect: cockroach heart has 13 chambers, not four.", "cockroach", "Cockroach Anatomy", "Multi-statement MCQ"))

qs.append(make_q(426, "Match Column I (Cockroach Structure) with Column II (Number / Count):\nColumn I:\np. Chambers of heart\nq. Pairs of respiratory spiracles\nr. Ovarioles per ovary in female\ns. Chitinous teeth inside gizzard\nColumn II:\n1. 10 pairs\n2. 13 chambers\n3. 6 teeth\n4. 8 ovarioles\nSelect the correct option:",
    "p-2, q-1, r-4, s-3", "p-1, q-2, r-4, s-3", "p-2, q-4, r-1, s-3", "p-3, q-1, r-4, s-2",
    "A", "Heart chambers: 13 (2); Spiracles: 10 pairs (1); Ovarioles per ovary: 8 (4); Gizzard teeth: 6 (3).", "cockroach", "Cockroach Anatomy", "Matching"))

qs.append(make_q(427, "Given below are two statements regarding cockroach respiration:\nStatement I: The respiratory system consists of a network of trachea opening through 10 pairs of spiracles.\nStatement II: Gas exchange takes place at the tracheoles by diffusion.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct NCERT statements regarding the insect tracheal system.", "cockroach", "Cockroach Anatomy", "Statement I & II"))

qs.append(make_q(428, "Assertion (A): Cockroach is a uricotelic animal.\nReason (R): Malpighian tubules extract potassium urate from hemolymph and excrete nitrogenous waste primarily in the form of uric acid crystals.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Uricotelism conserves water by precipitating non-toxic insoluble uric acid crystals passed out with feces.", "cockroach", "Cockroach Anatomy", "Assertion & Reason"))

qs.append(make_q(429, "Consider the following statements regarding the nervous system of cockroach:\n(i) The nervous system consists of a series of fused, segmentally arranged ganglia joined by paired longitudinal connectives on the ventral side.\n(ii) Three ganglia lie in the thorax and six in the abdomen.\n(iii) The brain is represented by supra-oesophageal ganglion which supplies nerves to antennae and compound eyes.\n(iv) If the head of a cockroach is cut off, it dies immediately within two seconds.\nWhich of the above statements are correct?",
    "(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (iv) only", "(ii) and (iv) only",
    "A", "Statements (i), (ii), and (iii) are correct. Statement (iv) is incorrect: a decapitated cockroach can survive for up to one week.", "cockroach", "Cockroach Anatomy", "Multi-statement MCQ"))

qs.append(make_q(430, "Assertion (A): Cockroach vision is known as mosaic vision with high sensitivity but less resolution.\nReason (R): Each compound eye consists of about 2000 hexagonal ommatidia, each receiving light from a narrow sector of the visual field.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Thousands of ommatidial sub-images merge into a compound mosaic image providing high sensitivity in dim light at the expense of sharp detail.", "cockroach", "Cockroach Morphology", "Assertion & Reason"))

qs.append(make_q(431, "Match Column I (Male Cockroach Reproductive Structure) with Column II (Location / Feature):\nColumn I:\np. Testes\nq. Mushroom-shaped gland\nr. Phallomeres (gonapophyses)\ns. Seminal vesicles\nColumn II:\n1. 6th-7th abdominal segments\n2. 4th-6th abdominal segments\n3. Store sperms and glue them into spermatophores\n4. Asymmetrical chitinous structures surrounding male gonopore\nSelect the correct option:",
    "p-2, q-1, r-4, s-3", "p-1, q-2, r-4, s-3", "p-2, q-4, r-1, s-3", "p-3, q-1, r-4, s-2",
    "A", "Testes: 4th-6th segments (2); Mushroom gland: 6th-7th segments (1); Phallomeres: external chitinous genitalia (4); Seminal vesicles: store sperms (3).", "cockroach", "Cockroach Anatomy", "Matching"))

qs.append(make_q(432, "Given below are two statements regarding female cockroach reproductive system:\nStatement I: A pair of ovaries lie laterally in the 2nd to 6th abdominal segments.\nStatement II: Each ovary is formed of a group of eight ovarian tubules or ovarioles containing a chain of developing ova.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct NCERT statements regarding the female reproductive anatomy of cockroach.", "cockroach", "Cockroach Anatomy", "Statement I & II"))

qs.append(make_q(433, "Assertion (A): The development of Periplaneta americana is paurometabolous.\nReason (R): There is development through nymphal stages where nymphs resemble adults and undergo 13 moults to reach the adult form.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Paurometabolous development (gradual metamorphosis) is characterised by nymphs looking similar to adults, lacking mature wings until the final moult.", "cockroach", "Cockroach Anatomy", "Assertion & Reason"))

qs.append(make_q(434, "Consider the following statements regarding ootheca in cockroach:\n(i) Fertilised eggs are encased in dark reddish to blackish brown capsules called oothecae.\n(ii) Ootheca is about 8 mm long.\n(iii) On average, a female produces 9-10 oothecae, each containing 14-16 eggs.\n(iv) Oothecae are carried inside the stomach of the male until hatching.\nWhich of the above statements are correct?",
    "(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (iv) only", "(ii) and (iv) only",
    "A", "Statements (i), (ii), and (iii) are correct NCERT facts. Statement (iv) is incorrect: oothecae are dropped or glued to a suitable surface near food by females.", "cockroach", "Cockroach Anatomy", "Multi-statement MCQ"))

qs.append(make_q(435, "Match Column I (Cockroach Appendage) with Column II (Thoracic Segment of Origin):\nColumn I:\np. Prothoracic walking leg\nq. Tegmina (forewings)\nr. Hindwings (flying wings)\ns. Pronotum (dorsal shield)\nColumn II:\n1. Prothorax\n2. Mesothorax\n3. Metathorax\nSelect the correct option:",
    "p-1, q-2, r-3, s-1", "p-2, q-1, r-3, s-1", "p-1, q-3, r-2, s-1", "p-3, q-2, r-1, s-3",
    "A", "Prothoracic leg: prothorax (1); Tegmina: mesothorax (2); Hindwings: metathorax (3); Pronotum: prothorax (1).", "cockroach", "Cockroach Morphology", "Matching"))

qs.append(make_q(436, "Given below are two statements regarding accessory excretory structures in cockroach:\nStatement I: Besides Malpighian tubules, fat body, nephrocytes, and urecose glands also help in excretion.\nStatement II: Malpighian tubules are lined by glandular and ciliated cells.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct NCERT statements regarding insect excretion.", "cockroach", "Cockroach Anatomy", "Statement I & II"))

qs.append(make_q(437, "Assertion (A): Only adult cockroaches possess fully developed wings.\nReason (R): The next to last (penultimate) nymphal stage has wing pads, but only adult cockroaches have wings.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Wings develop externally as wing pads in late nymphal instars, expanding into functional membranous structures only after the 13th final ecdysis.", "cockroach", "Cockroach Anatomy", "Assertion & Reason"))

qs.append(make_q(438, "Consider the following statements regarding cockroach head mouthparts:\n(i) Head bears biting and chewing type of mouthparts.\n(ii) Mouthparts consist of a labrum (upper lip), a pair of mandibles, a pair of maxillae, and a labium (lower lip).\n(iii) A median flexible lobe acting as tongue is hypopharynx.\n(iv) Mandibles possess 5-segmented sensory palps.\nHow many of the above statements are CORRECT?",
    "Three (i, ii, and iii)", "Four (all)", "Two", "One",
    "A", "Statements (i), (ii), and (iii) are correct. Statement (iv) is incorrect: maxillae have 5-segmented palps; mandibles lack palps.", "cockroach", "Cockroach Morphology", "Multi-statement MCQ"))

qs.append(make_q(439, "Match Column I (Cockroach Abdominal Segment) with Column II (Associated Structure):\nColumn I:\np. 7th sternum of female\nq. 9th sternum of male\nr. 10th segment of both sexes\ns. 6th segment of female\nColumn II:\n1. Boat-shaped plate forming brood pouch floor\n2. Bears unjointed anal styles\n3. Bears jointed anal cerci\n4. Houses spermatheca\nSelect the correct option:",
    "p-1, q-2, r-3, s-4", "p-2, q-1, r-3, s-4", "p-1, q-3, r-2, s-4", "p-4, q-2, r-3, s-1",
    "A", "7th sternum female: boat-shaped (1); 9th sternum male: anal styles (2); 10th segment: anal cerci (3); 6th segment: spermatheca (4).", "cockroach", "Cockroach Morphology", "Matching"))

qs.append(make_q(440, "Given below are two statements regarding cockroach leg:\nStatement I: Each walking leg of cockroach is composed of five podomeres.\nStatement II: The sequence of podomeres from proximal to distal is coxa, trochanter, femur, tibia, and tarsus.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct anatomical facts for insect leg morphology.", "cockroach", "Cockroach Morphology", "Statement I & II"))

qs.append(make_q(441, "Assertion (A): Alary muscles in cockroach are involved in hemolymph circulation.\nReason (R): Contraction of 12 pairs of fan-shaped alary muscles expands the pericardial sinus, pulling hemolymph from the perivisceral sinus.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Alary muscles attach to terga and the dorsal diaphragm; their rhythmic contraction alters sinus pressure to assist blood flow into heart ostia.", "cockroach", "Cockroach Anatomy", "Assertion & Reason"))

qs.append(make_q(442, "Consider the following statements regarding the female genital pouch of cockroach:\n(i) It is formed by the 7th, 8th, and 9th sterna.\n(ii) Its anterior part contains the female gonopore, spermathecal pores, and collateral glands.\n(iii) Fertilised eggs are stored here during ootheca formation.\n(iv) It opens directly into the midgut caeca.\nWhich of the above statements are correct?",
    "(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (iv) only", "(ii) and (iv) only",
    "A", "Statements (i), (ii), and (iii) are correct NCERT facts. Statement (iv) is completely false.", "cockroach", "Cockroach Anatomy", "Multi-statement MCQ"))

qs.append(make_q(443, "Match Column I (Digestive Secretion / Structure) with Column II (Cockroach Anatomy):\nColumn I:\np. Salivary glands\nq. Gizzard teeth\nr. Gastric caeca\ns. Rectum\nColumn II:\n1. 6 chitinous plates for mastication\n2. Reabsorbs water from undigested food\n3. Paired bilobed glands with reservoirs in thorax\n4. Ring of 6-8 tubules secreting digestive juice\nSelect the correct option:",
    "p-3, q-1, r-4, s-2", "p-1, q-3, r-4, s-2", "p-3, q-4, r-1, s-2", "p-4, q-1, r-3, s-2",
    "A", "Salivary glands: paired with reservoirs (3); Gizzard teeth: 6 chitinous plates (1); Gastric caeca: 6-8 tubules (4); Rectum: water reabsorption (2).", "cockroach", "Cockroach Anatomy", "Matching"))

qs.append(make_q(444, "Given below are two statements regarding cockroach sense organs:\nStatement I: The sense organs in cockroach are antennae, eyes, maxillary palps, labial palps, and anal cerci.\nStatement II: Compound eyes are situated at the dorsal surface of the head.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct NCERT facts regarding sensory structures of cockroach.", "cockroach", "Cockroach Morphology", "Statement I & II"))

qs.append(make_q(445, "Assertion (A): Cockroach blood (hemolymph) does not play an active role in transporting oxygen to tissues.\nReason (R): Hemolymph lacks respiratory pigments like hemoglobin or hemocyanin; oxygen is carried directly to cells by the tracheal system.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Insects uncouple circulation from respiration; the tracheal system directly delivers gaseous O2 to cells without respiratory pigments.", "cockroach", "Cockroach Anatomy", "Assertion & Reason"))

qs.append(make_q(446, "Consider the following statements regarding the reproductive system of male cockroach:\n(i) Sperms are stored in seminal vesicles.\n(ii) Sperms are glued together in the form of bundles called spermatophores.\n(iii) Spermatophores are discharged during copulation.\n(iv) A pair of testes is located in the 2nd to 4th abdominal segments.\nHow many of the above statements are CORRECT?",
    "Three (i, ii, and iii)", "Four (all)", "Two", "One",
    "A", "Statements (i), (ii), and (iii) are correct. Statement (iv) is incorrect: testes lie in the 4th to 6th abdominal segments.", "cockroach", "Cockroach Anatomy", "Multi-statement MCQ"))

qs.append(make_q(447, "Match Column I (Part of Hindgut) with Column II (Characteristic):\nColumn I:\np. Ileum\nq. Colon\nr. Rectum\nColumn II:\n1. Highly muscular terminal chamber bearing rectal pads for water reabsorption\n2. Narrow tubular region immediately following midgut junction\n3. Wider coiled tubular intermediate zone\nSelect the correct option:",
    "p-2, q-3, r-1", "p-1, q-2, r-3", "p-3, q-1, r-2", "p-2, q-1, r-3",
    "A", "Ileum is narrow short anterior tube (2); Colon is wider middle tube (3); Rectum is terminal chamber with rectal pads (1).", "cockroach", "Cockroach Anatomy", "Matching"))

qs.append(make_q(448, "Given below are two statements regarding cockroach respiration:\nStatement I: The opening of the spiracles is regulated by muscular sphincters.\nStatement II: Tracheoles lack cuticular lining and are the primary site of gas exchange with tissues.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct. Spiracular sphincters control ventilation and limit water loss, while thin-walled tracheoles mediate diffusion.", "cockroach", "Cockroach Anatomy", "Statement I & II"))

qs.append(make_q(449, "Assertion (A): Decapitated cockroach can survive for several days.\nReason (R): A major part of the cockroach nervous system lies along the ventral part of its body rather than in its head.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "The brain (supra-oesophageal ganglion) controls head appendages, while segmental ventral ganglia autonomously govern respiration, circulation, and reflex movements.", "cockroach", "Cockroach Anatomy", "Assertion & Reason"))

qs.append(make_q(450, "Consider the following statements regarding cockroach morphology:\n(i) Body is divided into three distinct regions: head, thorax, and abdomen.\n(ii) Sclerites are joined to each other by a thin, flexible articular membrane (arthrodial membrane).\n(iii) Terga are ventral sclerites and sterna are dorsal sclerites.\n(iv) Head is hypognathous and formed by the fusion of six segments.\nWhich of the above statements are correct?",
    "(i), (ii) and (iv) only", "(i), (ii), (iii) and (iv)", "(i) and (iii) only", "(ii) and (iv) only",
    "A", "Statements (i), (ii), and (iv) are correct. Statement (iii) is incorrect: terga are dorsal and sterna are ventral.", "cockroach", "Cockroach Morphology", "Multi-statement MCQ"))

qs.append(make_q(451, "Match Column I (Cockroach Gland) with Column II (Function / Secretion):\nColumn I:\np. Collaterial glands of female\nq. Mushroom-shaped gland of male\nr. Salivary glands\ns. Hepatic caeca\nColumn II:\n1. Secretes oothecal capsule wall\n2. Secretes salivary amylase\n3. Secretes digestive enzymes into midgut\n4. Accessory reproductive gland in 6th-7th segments\nSelect the correct option:",
    "p-1, q-4, r-2, s-3", "p-4, q-1, r-2, s-3", "p-1, q-2, r-4, s-3", "p-3, q-4, r-2, s-1",
    "A", "Collaterial glands: ootheca wall (1); Mushroom gland: male accessory (4); Salivary glands: amylase (2); Hepatic caeca: digestive juice (3).", "cockroach", "Cockroach Anatomy", "Matching"))

qs.append(make_q(452, "Given below are two statements regarding cockroach reproduction:\nStatement I: In male cockroach, sperms are transferred to the female during copulation in packets called spermatophores.\nStatement II: Fertilisation occurs internally inside the spermatheca.\nIn the light of the above statements, choose the correct answer:",
    "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Statement I is correct. Statement II is incorrect: fertilisation occurs in the genital chamber as eggs pass out from the common oviduct, not inside the spermatheca.", "cockroach", "Cockroach Anatomy", "Statement I & II"))

qs.append(make_q(453, "Assertion (A): The gizzard in cockroach has an outer layer of thick circular muscles and thick inner cuticle.\nReason (R): The gizzard functions in mechanical grinding and mastication of solid food particles.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Heavy circular musculature contracts the six cuticular teeth against ingested food to pulverise it into fine particles.", "cockroach", "Cockroach Anatomy", "Assertion & Reason"))

qs.append(make_q(454, "Consider the following statements regarding the thorax of cockroach:\n(i) Prothorax is the largest thoracic segment.\n(ii) Each thoracic segment bears a pair of walking legs.\n(iii) Tegmina arise from the prothorax.\n(iv) Hindwings arise from the metathorax.\nWhich of the above statements are correct?",
    "(i), (ii) and (iv) only", "(i), (ii), (iii) and (iv)", "(i) and (iii) only", "(ii) and (iii) only",
    "A", "Statements (i), (ii), and (iv) are correct. Statement (iii) is incorrect: tegmina arise from the mesothorax, not the prothorax (the prothorax never bears wings).", "cockroach", "Cockroach Morphology", "Multi-statement MCQ"))

qs.append(make_q(455, "Match Column I (Cockroach Excretory Component) with Column II (Action / Location):\nColumn I:\np. Malpighian tubules\nq. Urate cells\nr. Nephrocytes\ns. Uricose glands\nColumn II:\n1. Cells in the fat body storing uric acid\n2. Present in the pericardial sinus along the heart\n3. Glands associated with the male mushroom gland storing uric acid\n4. Extract potassium urate from hemolymph and discharge uric acid into hindgut\nSelect the correct option:",
    "p-4, q-1, r-2, s-3", "p-1, q-4, r-2, s-3", "p-4, q-2, r-1, s-3", "p-3, q-1, r-2, s-4",
    "A", "Malpighian tubules: discharge uric acid to gut (4); Urate cells: in fat body (1); Nephrocytes: pericardial (2); Uricose glands: in mushroom gland (3).", "cockroach", "Cockroach Anatomy", "Matching"))

qs.append(make_q(456, "Given below are two statements regarding cockroach eyes:\nStatement I: Each compound eye consists of about 2000 hexagonal ommatidia.\nStatement II: With the help of several ommatidia, a cockroach can receive several images of an object, known as mosaic vision.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct NCERT statements regarding insect compound eye vision.", "cockroach", "Cockroach Morphology", "Statement I & II"))

qs.append(make_q(457, "Assertion (A): In female cockroach, the 7th sternum is boat-shaped.\nReason (R): Together with the 8th and 9th sterna, the 7th sternum forms a brood or genital pouch.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "The expanded boat-shaped 7th sternum forms the structural ventral floor of the genital brood pouch.", "cockroach", "Cockroach Morphology", "Assertion & Reason"))

qs.append(make_q(458, "Consider the following statements regarding the reproductive structures of cockroach:\n(i) Female cockroach has two large ovaries lying in 2nd to 6th abdominal segments.\n(ii) Male cockroach has a pair of testes in 4th to 6th abdominal segments.\n(iii) Spermatheca is present in the 6th abdominal segment of female cockroach.\n(iv) External genitalia of male is represented by symmetrical phallomeres.\nWhich of the above statements are correct?",
    "(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (iv) only", "(ii) and (iv) only",
    "A", "Statements (i), (ii), and (iii) are correct. Statement (iv) is incorrect: male phallomeres (gonapophyses) are asymmetrical, not symmetrical.", "cockroach", "Cockroach Anatomy", "Multi-statement MCQ"))

qs.append(make_q(459, "Match Column I (Cockroach Mouthpart Component) with Column II (Location / Identity):\nColumn I:\np. Labrum\nq. Mandible\nr. Hypopharynx\ns. Labium\nColumn II:\n1. Median lobe acting as tongue\n2. Lower lip\n3. Upper lip\n4. Grinding jaw with teeth\nSelect the correct option:",
    "p-3, q-4, r-1, s-2", "p-4, q-3, r-1, s-2", "p-3, q-1, r-4, s-2", "p-2, q-4, r-1, s-3",
    "A", "Labrum is upper lip (3); Mandible is grinding jaw (4); Hypopharynx is tongue (1); Labium is lower lip (2).", "cockroach", "Cockroach Morphology", "Matching"))

qs.append(make_q(460, "Given below are two statements regarding development in cockroach:\nStatement I: The nymph grows by moulting about 13 times to reach the adult form.\nStatement II: The next to last nymphal stage has wing pads, but only adult cockroaches have fully developed wings.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct verbatim from NCERT regarding paurometabolous development in Periplaneta americana.", "cockroach", "Cockroach Anatomy", "Statement I & II"))

# Q461-Q500: Frog Morphology & Anatomy (40 questions - Hard)
qs.append(make_q(461, "Given below are two statements regarding frog morphology:\nStatement I: Frogs are poikilothermic and have the ability to change colour to hide from enemies (camouflage).\nStatement II: During peak summer and peak winter, frogs take shelter in deep burrows (aestivation and hibernation).\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct NCERT facts regarding amphibian temperature adaptation and mimicry.", "frog", "Frog Morphology", "Statement I & II"))

qs.append(make_q(462, "Assertion (A): Adult frogs never drink water by mouth.\nReason (R): Their skin is highly permeable and water is absorbed directly through the skin surface.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Cutaneous water absorption meets all hydration requirements in frogs, rendering oral water drinking unnecessary.", "frog", "Frog Morphology", "Assertion & Reason"))

qs.append(make_q(463, "Match Column I (Frog Feature) with Column II (Functional Significance):\nColumn I:\np. Nictitating membrane\nq. Tympanum\nr. Vocal sacs\ns. Copulatory pads\nColumn II:\n1. Receives sound signals (auditory organ)\n2. Protects eyes while in water\n3. Amplifies croaking sound in males during mating season\n4. Present on first digit of forelimb in males for amplexus\nSelect the correct option:",
    "p-2, q-1, r-3, s-4", "p-1, q-2, r-3, s-4", "p-2, q-3, r-1, s-4", "p-4, q-1, r-3, s-2",
    "A", "Nictitating membrane protects eyes (2); Tympanum receives sound (1); Vocal sacs amplify male croak (3); Copulatory pads aid amplexus (4).", "frog", "Frog Morphology", "Matching"))

qs.append(make_q(464, "Given below are two statements regarding sexual dimorphism in frogs:\nStatement I: Male frogs can be distinguished by the presence of sound-producing vocal sacs.\nStatement II: Male frogs possess a copulatory pad on the first digit of the forelimbs, which are absent in female frogs.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct NCERT criteria for sexual dimorphism in Rana tigrina.", "frog", "Frog Morphology", "Statement I & II"))

qs.append(make_q(465, "Assertion (A): The alimentary canal of frog is short.\nReason (R): Frogs are carnivores and carnivores have a shorter intestine because meat is more easily digested than plant cellulose.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Carnivorous diets do not require extended cecal or intestinal fermentation of plant cellulose, allowing a concise gut.", "frog", "Frog Anatomy", "Assertion & Reason"))

qs.append(make_q(466, "Consider the following statements regarding the digestive system of frog:\n(i) Food is captured by the bilobed tongue.\n(ii) Digestion of food takes place by the action of HCl and gastric juices secreted from the walls of the stomach.\n(iii) Partially digested food called chyme is passed from the stomach to the duodenum.\n(iv) Undigested solid waste passes into the cloaca and is discharged through the cloacal aperture.\nWhich of the above statements are correct?",
    "(i), (ii), (iii) and (iv)", "(i) and (ii) only", "(i), (iii) and (iv) only", "(ii) and (iv) only",
    "A", "All four statements accurately describe the sequential digestive physiology of Rana tigrina from NCERT.", "frog", "Frog Anatomy", "Multi-statement MCQ"))

qs.append(make_q(467, "Match Column I (Digestive Organ / Secretion of Frog) with Column II (Physiological Action):\nColumn I:\np. Liver\nq. Gall bladder\nr. Pancreas\ns. Microvilli in intestine\nColumn II:\n1. Stores bile temporarily\n2. Secretes pancreatic juice containing digestive enzymes\n3. Produces bile for fat emulsification\n4. Increase surface area for nutrient absorption\nSelect the correct option:",
    "p-3, q-1, r-2, s-4", "p-1, q-3, r-2, s-4", "p-3, q-2, r-1, s-4", "p-4, q-1, r-2, s-3",
    "A", "Liver produces bile (3); Gall bladder stores bile (1); Pancreas secretes enzymes (2); Microvilli absorb nutrients (4).", "frog", "Frog Anatomy", "Matching"))

qs.append(make_q(468, "Given below are two statements regarding respiration in frogs:\nStatement I: In water, skin acts as an aquatic respiratory organ (cutaneous respiration).\nStatement II: On land, the buccal cavity, skin, and lungs act as the respiratory organs.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct NCERT statements regarding amphibian modes of respiration.", "frog", "Frog Anatomy", "Statement I & II"))

qs.append(make_q(469, "Assertion (A): During aestivation and hibernation, gaseous exchange in frog takes place solely through the skin.\nReason (R): Lungs become non-functional and the mouth remains closed while the frog is buried in mud.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "While buried in dormancy, buccopharyngeal and pulmonary movements cease completely; cutaneous diffusion meets all basal metabolic oxygen requirements.", "frog", "Frog Anatomy", "Assertion & Reason"))

qs.append(make_q(470, "Consider the following statements regarding the vascular system of frog:\n(i) Frog has a closed circulatory system with a three-chambered heart.\n(ii) The heart has two atria and one ventricle, covered by a membrane called pericardium.\n(iii) A triangular structure called sinus venosus joins the right atrium.\n(iv) The ventricle opens into a sac-like conus arteriosus on the ventral side of the heart.\nWhich of the above statements are correct?",
    "(i), (ii), (iii) and (iv)", "(i) and (ii) only", "(i), (iii) and (iv) only", "(ii) and (iii) only",
    "A", "All four statements are correct NCERT anatomical descriptions of the frog cardiovascular system.", "frog", "Frog Anatomy", "Multi-statement MCQ"))

qs.append(make_q(471, "Match Column I (Heart Chamber / Vessel in Frog) with Column II (Blood Content / Connection):\nColumn I:\np. Sinus venosus\nq. Left atrium\nr. Conus arteriosus\ns. Pulmo-cutaneous arch\nColumn II:\n1. Receives oxygenated blood from the lungs via pulmonary veins\n2. Receives deoxygenated blood from major vena cavae\n3. Arises from ventricle on ventral side\n4. Carries blood to lungs and skin for oxygenation\nSelect the correct option:",
    "p-2, q-1, r-3, s-4", "p-1, q-2, r-3, s-4", "p-2, q-3, r-1, s-4", "p-4, q-1, r-3, s-2",
    "A", "Sinus venosus receives systemic venous blood (2); Left atrium receives pulmonary veins (1); Conus arteriosus arises from ventricle (3); Pulmo-cutaneous arch supplies lungs/skin (4).", "frog", "Frog Anatomy", "Matching"))

qs.append(make_q(472, "Given below are two statements regarding portal systems in frog:\nStatement I: A special venous connection between the liver and intestine is called the hepatic portal system.\nStatement II: A special venous connection between the kidney and lower parts of the body is called the renal portal system.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct. Frogs possess both hepatic portal and renal portal systems.", "frog", "Frog Anatomy", "Statement I & II"))

qs.append(make_q(473, "Assertion (A): Frog erythrocytes are nucleated, oval, and contain hemoglobin.\nReason (R): Unlike mammals, amphibians do not enucleate their red blood cells during erythropoiesis.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Non-mammalian vertebrates (amphibians, reptiles, birds, fish) retain nuclei in mature circulating red blood cells.", "frog", "Frog Anatomy", "Assertion & Reason"))

qs.append(make_q(474, "Consider the following statements regarding the excretory system of frog:\n(i) The excretory system consists of a pair of kidneys, ureters, cloaca, and urinary bladder.\n(ii) Kidneys are dark red and bean-like situated posteriorly in the body cavity on both sides of the vertebral column.\n(iii) Each kidney is composed of several structural and functional units called uriniferous tubules or nephrons.\n(iv) Adult frog is an ammonotelic animal.\nWhich of the above statements are correct?",
    "(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (iv) only", "(ii) and (iv) only",
    "A", "Statements (i), (ii), and (iii) are correct. Statement (iv) is incorrect: adult frogs excrete urea and are ureotelic (tadpoles are ammonotelic).", "frog", "Frog Anatomy", "Multi-statement MCQ"))

qs.append(make_q(475, "Match Column I (Male Frog Reproductive Structure) with Column II (Anatomical Role):\nColumn I:\np. Testes\nq. Mesorchium\nr. Vasa efferentia\ns. Bidder's canal\nColumn II:\n1. 10-12 ducts arising from testes that enter the kidneys\n2. Longitudinal canal inside kidney communicating with urinogenital duct\n3. Double fold of peritoneum adhering testes to the kidneys\n4. Paired yellowish ovoid organs producing spermatozoa\nSelect the correct option:",
    "p-4, q-3, r-1, s-2", "p-3, q-4, r-1, s-2", "p-4, q-1, r-3, s-2", "p-2, q-3, r-1, s-4",
    "A", "Testes: produce sperm (4); Mesorchium: peritoneal fold (3); Vasa efferentia: 10-12 ducts entering kidney (1); Bidder's canal: intra-renal canal (2).", "frog", "Frog Anatomy", "Matching"))

qs.append(make_q(476, "Given below are two statements regarding male frog urinogenital duct:\nStatement I: In male frog, the ureter acts as a urinogenital duct that carries both sperms and urine from the kidney.\nStatement II: The urinogenital ducts open into the cloaca.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct NCERT facts regarding the male frog urinogenital system.", "frog", "Frog Anatomy", "Statement I & II"))

qs.append(make_q(477, "Assertion (A): In female frogs, the ureters and oviducts open separately into the cloaca.\nReason (R): Ovaries in female frogs have no functional connection with the kidneys.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Unlike male frogs where sperm passes through the kidneys via Bidder's canal, female ovaries release ova into coelom to be picked up by separate oviducts.", "frog", "Frog Anatomy", "Assertion & Reason"))

qs.append(make_q(478, "Consider the following statements regarding the nervous system of frog:\n(i) The central nervous system consists of brain and spinal cord.\n(ii) Brain is enclosed in a bony structure called cranium.\n(iii) There are 10 pairs of cranial nerves arising from the brain.\n(iv) Midbrain is characterised by a pair of optic lobes.\nHow many of the above statements are CORRECT?",
    "Four (all statements are correct)", "Three", "Two", "One",
    "A", "All four statements are accurate NCERT descriptions of the frog nervous system.", "frog", "Frog Anatomy", "Multi-statement MCQ"))

qs.append(make_q(479, "Match Column I (Brain Region of Frog) with Column II (Constituent Structures):\nColumn I:\np. Forebrain\nq. Midbrain\nr. Hindbrain\nColumn II:\n1. Pair of optic lobes\n2. Cerebellum and medulla oblongata\n3. Olfactory lobes, paired cerebral hemispheres, and unpaired diencephalon\nSelect the correct option:",
    "p-3, q-1, r-2", "p-1, q-3, r-2", "p-3, q-2, r-1", "p-2, q-1, r-3",
    "A", "Forebrain: olfactory, hemispheres, diencephalon (3); Midbrain: optic lobes (1); Hindbrain: cerebellum, medulla (2).", "frog", "Frog Anatomy", "Matching"))

qs.append(make_q(480, "Given below are two statements regarding frog sense organs:\nStatement I: Frog has organs of touch (sensory papillae), taste (taste buds), smell (nasal epithelium), vision (eyes), and hearing (tympanum with internal ears).\nStatement II: Eyes in frog are simple units, not compound like cockroaches.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct NCERT statements regarding amphibian sensory organs.", "frog", "Frog Anatomy", "Statement I & II"))

qs.append(make_q(481, "Assertion (A): Fertilisation in frogs is external, taking place in water.\nReason (R): Male and female frogs release their gametes simultaneously into surrounding pond water during amplexus.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Simultaneous shedding of eggs and sperm into aquatic environment mediates external fertilisation outside parental bodies.", "frog", "Frog Anatomy", "Assertion & Reason"))

qs.append(make_q(482, "Consider the following statements regarding frog development:\n(i) Development involves a larval stage called tadpole.\n(ii) Tadpole larva breathes through gills and possesses a tail for swimming.\n(iii) Tadpole undergoes metamorphosis to form the adult frog.\n(iv) Tadpole is an ammonotelic herbivore while adult frog is a ureotelic carnivore.\nWhich of the above statements are correct?",
    "(i), (ii), (iii) and (iv)", "(i) and (iii) only", "(ii) and (iv) only", "(i), (ii) and (iii) only",
    "A", "All four statements correctly outline the life history, anatomy, and physiological metamorphosis of Rana tigrina.", "frog", "Frog Anatomy", "Multi-statement MCQ"))

qs.append(make_q(483, "Match Column I (Amphibian Respiratory Phase) with Column II (Mechanics / Gas Exchange Site):\nColumn I:\np. Cutaneous respiration in water\nq. Buccopharyngeal respiration on land\nr. Pulmonary respiration on land\ns. Dormancy (aestivation/hibernation)\nColumn II:\n1. Air pumped by buccal floor into lungs through glottis\n2. Dissolved oxygen diffuses across moist skin\n3. Solely through cutaneous diffusion in deep mud\n4. Mucous lining of oral cavity absorbs oxygen while floor oscillates\nSelect the correct option:",
    "p-2, q-4, r-1, s-3", "p-4, q-2, r-1, s-3", "p-2, q-1, r-4, s-3", "p-3, q-4, r-1, s-2",
    "A", "Cutaneous in water: dissolved O2 diffuses (2); Buccopharyngeal: oral cavity floor oscillates (4); Pulmonary: air forced to lungs (1); Dormancy: solely cutaneous (3).", "frog", "Frog Anatomy", "Matching"))

qs.append(make_q(484, "Given below are two statements regarding the cloaca of frog:\nStatement I: Cloaca is a small, median chamber used to pass faeces, urine, and sperms to the exterior.\nStatement II: The cloacal aperture is located at the posterior end of the trunk.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct verbatim from NCERT regarding the cloaca and its cloacal aperture.", "frog", "Frog Anatomy", "Statement I & II"))

qs.append(make_q(485, "Assertion (A): Adult frogs maintain high agricultural ecological importance.\nReason (R): Frogs eat insects and protect crops, serving as an important link in food chains and food webs in ecosystem balance.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "By preying on crop-destroying insect pests and serving as prey for predatory snakes and birds, frogs maintain food web equilibrium.", "frog", "Frog Morphology", "Assertion & Reason"))

qs.append(make_q(486, "Consider the following statements comparing cockroach and frog:\n(i) Cockroach has an open circulatory system, whereas frog has a closed circulatory system.\n(ii) Cockroach heart has 13 chambers, whereas frog heart has 3 chambers.\n(iii) Cockroach is uricotelic, whereas adult frog is ureotelic.\n(iv) Cockroach has 10 pairs of spiracles, whereas frog has 10 pairs of cranial nerves.\nWhich of the above statements are correct?",
    "(i), (ii), (iii) and (iv)", "(i) and (ii) only", "(i), (ii) and (iii) only", "(iii) and (iv) only",
    "A", "All four comparative statements between Periplaneta and Rana tigrina are correct according to NCERT.", "frog", "Cockroach vs Frog", "Multi-statement MCQ"))

qs.append(make_q(487, "Match Column I (Animal Structure) with Column II (Organism):\nColumn I:\np. Malpighian tubules\nq. Bidder's canal\nr. Intercalated discs\ns. Hepatic caeca\nColumn II:\n1. Cockroach midgut junction\n2. Male frog kidney\n3. Vertebrate cardiac muscle\n4. Cockroach hindgut junction\nSelect the correct option:",
    "p-4, q-2, r-3, s-1", "p-1, q-2, r-3, s-4", "p-4, q-3, r-2, s-1", "p-2, q-4, r-3, s-1",
    "A", "Malpighian tubules: cockroach hindgut junction (4); Bidder's canal: male frog kidney (2); Intercalated discs: cardiac muscle (3); Hepatic caeca: cockroach midgut junction (1).", "frog", "Comparative Anatomy", "Matching"))

qs.append(make_q(488, "Given below are two statements regarding frog reproduction:\nStatement I: A mature female frog can lay 2500 to 3000 ova at a time.\nStatement II: The oviducts in female frog enter Bidder's canal before opening into the cloaca.\nIn the light of the above statements, choose the correct answer:",
    "Statement I is correct but Statement II is incorrect", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Statement I is correct. Statement II is incorrect: female frogs lack Bidder's canal completely; oviducts open directly into the cloaca.", "frog", "Frog Anatomy", "Statement I & II"))

qs.append(make_q(489, "Assertion (A): In male frog, sperms enter the cloaca via the urinogenital ducts.\nReason (R): Vasa efferentia communicate with Bidder's canal inside the kidney, which leads into the urinogenital duct.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Sperms pass from testes through vasa efferentia, into Bidder's canal, into transverse collecting ducts, and exit via the common urinogenital duct.", "frog", "Frog Anatomy", "Assertion & Reason"))

qs.append(make_q(490, "Consider the following statements regarding sense organs in frog:\n(i) Nasal epithelium detects smell.\n(ii) Taste buds on sensory papillae detect taste.\n(iii) Eyes are simple eyes situated in orbits.\n(iv) External ear pinna is large and prominent.\nWhich of the above statements are correct?",
    "(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (iv) only", "(ii) and (iv) only",
    "A", "Statements (i), (ii), and (iii) are correct. Statement (iv) is incorrect: frogs lack external ears (pinnae); sound is received directly by the tympanum.", "frog", "Frog Morphology", "Multi-statement MCQ"))

qs.append(make_q(491, "Match Column I (Organ System of Frog) with Column II (Diagnostic Structure):\nColumn I:\np. Digestive system\nq. Excretory system\nr. Circulatory system\ns. Nervous system\nColumn II:\n1. Sinus venosus and conus arteriosus\n2. 10 pairs of cranial nerves\n3. Mesonephric kidneys and ureters\n4. Bilobed tongue and short intestine\nSelect the correct option:",
    "p-4, q-3, r-1, s-2", "p-3, q-4, r-1, s-2", "p-4, q-1, r-3, s-2", "p-2, q-3, r-1, s-4",
    "A", "Digestive: bilobed tongue/short intestine (4); Excretory: mesonephric kidneys (3); Circulatory: sinus venosus/conus arteriosus (1); Nervous: 10 cranial nerves (2).", "frog", "Frog Anatomy", "Matching"))

qs.append(make_q(492, "Given below are two statements regarding frog brain:\nStatement I: The medulla oblongata passes out through the foramen magnum and continues into the spinal cord.\nStatement II: The spinal cord is protected within the vertebral column.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct NCERT anatomical facts regarding the Central Nervous System of frog.", "frog", "Frog Anatomy", "Statement I & II"))

qs.append(make_q(493, "Assertion (A): Male frogs croak loudly during the rainy breeding season.\nReason (R): Sound-producing vocal sacs present under the throat in male frogs amplify mating calls to attract females.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Male frogs inflate vocal sacs that act as acoustic resonators to project species-specific mating croaks over long distances.", "frog", "Frog Morphology", "Assertion & Reason"))

qs.append(make_q(494, "Consider the following statements regarding the frog heart:\n(i) Frog heart is myogenic.\n(ii) Sinus venosus receives blood through two precavals and one postcaval vein.\n(iii) The ventricle pumps blood into the truncus arteriosus.\n(iv) Complete separation of oxygenated and deoxygenated blood occurs inside the single ventricle.\nHow many of the above statements are CORRECT?",
    "Three (i, ii, and iii)", "Four (all)", "Two", "One",
    "A", "Statements (i), (ii), and (iii) are correct. Statement (iv) is incorrect: because there is only one ventricle, partial mixing of oxygenated and deoxygenated blood occurs.", "frog", "Frog Anatomy", "Multi-statement MCQ"))

qs.append(make_q(495, "Match Column I (Larval / Adult Characteristic in Frog) with Column II (State):\nColumn I:\np. Ammonotelic excretion\nq. Ureotelic excretion\nr. Cutaneous and pulmonary respiration\ns. Branchial (gill) respiration\nColumn II:\n1. Adult frog\n2. Tadpole larva\nSelect the correct option:",
    "p-2, q-1, r-1, s-2", "p-1, q-2, r-1, s-2", "p-2, q-1, r-2, s-1", "p-1, q-2, r-2, s-1",
    "A", "Ammonotelic: tadpole (2); Ureotelic: adult (1); Cutaneous/pulmonary: adult (1); Gill: tadpole (2).", "frog", "Frog Anatomy", "Matching"))

qs.append(make_q(496, "Given below are two statements regarding frog blood:\nStatement I: Blood vascular system of frog comprises heart, blood vessels, and blood.\nStatement II: Lymph lacks few proteins and RBCs, differing from blood.\nIn the light of the above statements, choose the correct answer:",
    "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct",
    "A", "Both statements are correct verbatim from NCERT regarding frog blood and lymphatic fluid.", "frog", "Frog Anatomy", "Statement I & II"))

qs.append(make_q(497, "Assertion (A): Microvilli and villi are present in the inner wall of the frog intestine.\nReason (R): These mucosal projections drastically increase the absorptive surface area for digested nutrients.\nIn the light of the above statements, choose the correct answer:",
    "Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is not the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true",
    "A", "Finger-like mucosal villi and microscopic enterocyte microvilli maximize the contact area for hydrolysed nutrient transport.", "frog", "Frog Anatomy", "Assertion & Reason"))

qs.append(make_q(498, "Consider the following statements regarding the frog excretory and reproductive systems:\n(i) Excretory system consists of a pair of mesonephric kidneys, ureters, cloaca, and urinary bladder.\n(ii) In male frogs, ureters act as urinogenital ducts opening into the cloaca.\n(iii) In female frogs, ureters and oviducts open separately into the cloaca.\n(iv) A thin-walled urinary bladder is situated ventrally to the rectum and opens into the cloaca.\nWhich of the above statements are correct?",
    "(i), (ii), (iii) and (iv)", "(i) and (ii) only", "(i), (ii) and (iii) only", "(ii) and (iv) only",
    "A", "All four statements are correct NCERT anatomical descriptions of frog urogenital tracts.", "frog", "Frog Anatomy", "Multi-statement MCQ"))

qs.append(make_q(499, "Match Column I (Anatomical Duct in Animals) with Column II (Organism & Function):\nColumn I:\np. Malpighian tubules\nq. Bidder's canal\nr. Common salivary duct\ns. Oviduct (Müllerian duct)\nColumn II:\n1. Conducts sperms through kidney in male frog\n2. Discharges saliva at hypopharynx in cockroach\n3. Discharges nitrogenous waste at midgut-hindgut junction in cockroach\n4. Carries unfertilised eggs to cloaca in female frog\nSelect the correct option:",
    "p-3, q-1, r-2, s-4", "p-1, q-3, r-2, s-4", "p-3, q-4, r-2, s-1", "p-4, q-1, r-2, s-3",
    "A", "Malpighian tubules: cockroach excretion (3); Bidder's canal: male frog sperm passage (1); Salivary duct: cockroach saliva (2); Oviduct: frog ova passage (4).", "frog", "Comparative Anatomy", "Matching"))

qs.append(make_q(500, "Given below are two statements:\nStatement I: The body of a frog is divided into head, neck, trunk, and tail.\nStatement II: The body of a frog lacks both a neck and a tail in the adult stage.\nIn the light of the above statements, choose the correct answer:",
    "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect",
    "A", "Statement I is incorrect. Statement II is correct: adult frogs have only head and trunk; neck and tail are absent.", "frog", "Frog Morphology", "Statement I & II"))

print(f"Generated Part 4: {len(qs)} questions.")
assert len(qs) == 125, f"Expected 125, got {len(qs)}"

with open("scripts/soa_part4_gen.py", "w", encoding="utf-8") as f:
    f.write("# Structural Organisation in Animals Part 4: Q376 to Q500 (Hard)\n")
    f.write("import json\n\n")
    f.write("def get_part4_raw():\n")
    f.write("    return " + json.dumps(qs, indent=2) + "\n\n")
    f.write('print("SOA Part 4 raw helper ready.")\n')

print("Saved scripts/soa_part4_gen.py successfully.")
