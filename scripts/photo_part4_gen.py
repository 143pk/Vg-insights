# Photosynthesis Part 4: Q376 to Q500 (Hard)
import json

def get_part4_raw():
    return [
    {
        "q_num": 376,
        "q": "Given below are two statements:\nStatement I: The light reactions or 'photochemical' phase include light absorption, water splitting, oxygen release, and the formation of high-energy chemical intermediates, ATP and NADPH.\nStatement II: The dark reactions or 'biosynthetic' phase take place in the stroma and are totally independent of light, proceeding indefinitely in the absence of light.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct according to NCERT. Statement II is incorrect because the dark reaction is dependent on the products of the light reaction (ATP and NADPH); if light is withdrawn, dark reactions continue for some time and then stop.",
        "topic": "pigments_light",
        "sub": "Phases of Photosynthesis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 377,
        "q": "Given below are two statements:\nStatement I: Chlorophyll a is the chief pigment associated with photosynthesis, showing absorption peaks in the blue and red regions.\nStatement II: The action spectrum of photosynthesis shows that maximum photosynthesis occurs in the green region of the spectrum where chlorophyll a transmits light.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because maximum photosynthesis occurs in the blue and red regions, not the green region (which is minimally absorbed and mostly reflected/transmitted).",
        "topic": "pigments_light",
        "sub": "Absorption & Action Spectra",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 378,
        "q": "Given below are two statements:\nStatement I: The antenna pigments in LHC absorb light of different wavelengths and transfer the energy to the reaction centre through resonance transfer.\nStatement II: Accessory pigments also protect chlorophyll a from photo-oxidation.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT statements explaining the twin functions of accessory pigments.",
        "topic": "pigments_light",
        "sub": "Accessory Pigments",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 379,
        "q": "Given below are two statements:\nStatement I: In Photosystem I, the reaction centre chlorophyll a has an absorption peak at 700 nm, hence is called P700.\nStatement II: In Photosystem II, the reaction centre chlorophyll a has an absorption peak at 680 nm, hence is called P680.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are verbatim correct statements from NCERT regarding the reaction centres of PS I and PS II.",
        "topic": "pigments_light",
        "sub": "Reaction Centres",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 380,
        "q": "Given below are two statements:\nStatement I: The water splitting complex is associated with the PS II, which itself is physically located on the inner side of the membrane of the thylakoid.\nStatement II: The protons and O2 formed by splitting of water are released into the stroma of the chloroplast.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct (NCERT). Statement II is incorrect because protons and O2 from water splitting are released into the lumen of the thylakoid, not into the stroma.",
        "topic": "pigments_light",
        "sub": "Photolysis of Water",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 381,
        "q": "Given below are two statements:\nStatement I: When both photosystems work in series, first PS II and then the PS I, a process called non-cyclic photophosphorylation occurs.\nStatement II: In non-cyclic photophosphorylation, both ATP and NADPH + H+ are synthesized by this kind of electron flow.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are verbatim correct NCERT statements regarding non-cyclic photophosphorylation.",
        "topic": "pigments_light",
        "sub": "Z-Scheme",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 382,
        "q": "Given below are two statements:\nStatement I: The stroma lamellae membranes lack PS II as well as NADP reductase enzyme.\nStatement II: The grana thylakoid membranes carry out only cyclic photophosphorylation because they lack PS I.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct (NCERT). Statement II is incorrect because grana thylakoids possess both PS II and PS I and carry out non-cyclic photophosphorylation.",
        "topic": "pigments_light",
        "sub": "Stroma Lamellae vs Grana",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 383,
        "q": "Given below are two statements:\nStatement I: Cyclic photophosphorylation results only in the synthesis of ATP, but not of NADPH + H+.\nStatement II: Cyclic photophosphorylation also occurs when only light of wavelengths beyond 680 nm are available for excitation.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct verbatim NCERT statements explaining the conditions and products of cyclic photophosphorylation.",
        "topic": "pigments_light",
        "sub": "Cyclic Photophosphorylation",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 384,
        "q": "Given below are two statements:\nStatement I: According to the chemiosmotic hypothesis, ATP synthesis in chloroplasts is linked to the development of a proton gradient across the thylakoid membrane.\nStatement II: In chloroplasts, protons accumulate in the stroma, making the stroma acidic compared to the neutral lumen.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because protons accumulate inside the thylakoid lumen, rendering the lumen acidic and the stroma alkaline.",
        "topic": "pigments_light",
        "sub": "Chemiosmosis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 385,
        "q": "Given below are two statements:\nStatement I: The primary acceptor of electron from PS II transfers its electron not to an electron carrier but to an H carrier (Plastoquinone).\nStatement II: Plastoquinone removes a proton from the stroma while transporting an electron and releases this proton into the lumen.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT explanations for the proton pumping mechanism across the thylakoid membrane.",
        "topic": "pigments_light",
        "sub": "Chemiosmotic Proton Gradient",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 386,
        "q": "Given below are two statements:\nStatement I: The NADP reductase enzyme is located on the stroma side of the thylakoid membrane.\nStatement II: Protons are necessary for the reduction of NADP+ to NADPH + H+, and these protons are removed from the stroma, decreasing the proton concentration in the stroma.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT facts explaining how NADP+ reduction contributes to creating the trans-thylakoid proton gradient.",
        "topic": "pigments_light",
        "sub": "Chemiosmosis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 387,
        "q": "Given below are two statements:\nStatement I: The CF0 of ATP synthase is embedded in the thylakoid membrane and forms a transmembrane channel that carries out facilitated diffusion of protons across the membrane.\nStatement II: The CF1 part of ATP synthase protrudes on the outer surface of the thylakoid membrane facing the lumen.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because the CF1 catalytic portion protrudes on the stromal side of the thylakoid membrane, not the lumen.",
        "topic": "pigments_light",
        "sub": "ATP Synthase Structure",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 388,
        "q": "Given below are two statements:\nStatement I: The breakdown of the proton gradient provides enough energy to cause a conformational change in the CF1 particle of the ATP synthase, which makes the enzyme synthesize several molecules of energy-packed ATP.\nStatement II: Along with the NADPH produced by the movement of electrons, the ATP is used immediately in the biosynthetic reaction taking place in the stroma.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT descriptions of ATP synthesis and its utilization in the stroma.",
        "topic": "pigments_light",
        "sub": "Chemiosmosis & Calvin Cycle",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 389,
        "q": "Given below are two statements:\nStatement I: Melvin Calvin discovered that the first CO2 fixation product in Chlorella was a 3-carbon organic acid, 3-phosphoglyceric acid (PGA).\nStatement II: In C4 plants, the first stable product of CO2 fixation is the 4-carbon acid oxaloacetic acid (OAA).\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT facts contrasting C3 and C4 primary carbon fixation products.",
        "topic": "c3_c4",
        "sub": "C3 vs C4 Discovery",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 390,
        "q": "Given below are two statements:\nStatement I: The primary acceptor of CO2 in the Calvin cycle is a 5-carbon ketose sugar, ribulose-1,5-bisphosphate (RuBP).\nStatement II: The enzyme catalyzing the fixation of CO2 onto RuBP is ribulose-1,5-bisphosphate carboxylase-oxygenase (RuBisCO).\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are verbatim correct descriptions from NCERT of the primary CO2 acceptor and carboxylating enzyme.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Carboxylation",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 391,
        "q": "Given below are two statements:\nStatement I: In the reduction step of the Calvin cycle, two molecules of ATP for phosphorylation and two of NADPH for reduction are used per CO2 molecule fixed.\nStatement II: The fixation of six molecules of CO2 and 6 turns of the cycle are required for the formation of one molecule of glucose from the pathway.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct verbatim NCERT statements defining the reduction step and glucose yield of the Calvin cycle.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Reduction",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 392,
        "q": "Given below are two statements:\nStatement I: Regeneration of the CO2 acceptor molecule RuBP is crucial if the Calvin cycle is to continue uninterrupted.\nStatement II: The regeneration steps require one ATP for phosphorylation to form RuBP.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT statements detailing the regeneration step of the Calvin cycle.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Regeneration",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 393,
        "q": "Given below are two statements:\nStatement I: For every CO2 molecule entering the Calvin cycle, 3 molecules of ATP and 2 of NADPH are required.\nStatement II: To make one molecule of glucose, 18 ATP and 12 NADPH are consumed by the Calvin cycle.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT stoichiometric facts: 6 CO2 x (3 ATP + 2 NADPH) = 18 ATP + 12 NADPH per glucose.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Stoichiometry",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 394,
        "q": "Given below are two statements:\nStatement I: Plants that are adapted to dry tropical regions have the C4 pathway.\nStatement II: C4 plants lack the Calvin cycle and synthesize glucose exclusively through the Hatch and Slack pathway.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because C4 plants DO have the Calvin cycle; it operates in the bundle sheath cells as the main biosynthetic pathway.",
        "topic": "c3_c4",
        "sub": "C4 Plants & Calvin Cycle",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 395,
        "q": "Given below are two statements:\nStatement I: The particularly large cells around the vascular bundles of the C4 pathway plants are called bundle sheath cells, and the leaves which have such anatomy are said to have 'Kranz' anatomy.\nStatement II: Bundle sheath cells are characterized by having a large number of chloroplasts, thick walls impervious to gaseous exchange, and no intercellular spaces.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are verbatim correct statements from NCERT describing Kranz anatomy.",
        "topic": "c3_c4",
        "sub": "Kranz Anatomy",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 396,
        "q": "Given below are two statements:\nStatement I: In C4 plants, the primary CO2 acceptor is a 3-carbon molecule, phosphoenolpyruvate (PEP), present in the mesophyll cells.\nStatement II: The enzyme responsible for primary CO2 fixation in mesophyll cells of C4 plants is PEP carboxylase (PEPcase).\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT descriptions of C4 primary carboxylation in mesophyll cells.",
        "topic": "c3_c4",
        "sub": "C4 Carboxylation",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 397,
        "q": "Given below are two statements:\nStatement I: The mesophyll cells of C4 plants lack the RuBisCO enzyme.\nStatement II: The bundle sheath cells of C4 plants are rich in RuBisCO, but lack PEPcase.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct verbatim NCERT facts regarding enzyme distribution in C4 leaves.",
        "topic": "c3_c4",
        "sub": "C4 Enzyme Compartmentation",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 398,
        "q": "Given below are two statements:\nStatement I: In C4 plants, the C4 acid (malic acid or aspartic acid) is formed in mesophyll cells and transported to bundle sheath cells.\nStatement II: In bundle sheath cells, C4 acids are broken down to release CO2 and a 3-carbon molecule (pyruvate).\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT descriptions of organic acid transport and decarboxylation in C4 plants.",
        "topic": "c3_c4",
        "sub": "C4 Pathway Steps",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 399,
        "q": "Given below are two statements:\nStatement I: The 3-carbon pyruvate released in bundle sheath cells is transported back to the mesophyll where it is converted to PEP again, thus completing the cycle.\nStatement II: In C4 plants, the basic pathway that results in the formation of sugars is the C3 pathway (Calvin cycle), which takes place in the bundle sheath cells.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT points on the completion of the C4 cycle and sugar formation via the Calvin cycle.",
        "topic": "c3_c4",
        "sub": "C4 Cycle Completion",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 400,
        "q": "Given below are two statements:\nStatement I: RuBisCO is the most abundant enzyme in the world and is characterized by the fact that its active site can bind to both CO2 and O2.\nStatement II: RuBisCO has a much greater affinity for O2 than for CO2, which is why photorespiration occurs in all green plants.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because RuBisCO has a much greater affinity for CO2 than for O2 when concentrations are equal.",
        "topic": "c3_c4",
        "sub": "RuBisCO Dual Affinity",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 401,
        "q": "Given below are two statements:\nStatement I: In C3 plants, some O2 does bind to RuBisCO, and hence CO2 fixation is decreased.\nStatement II: In the photorespiratory pathway, RuBP binds with O2 to form one molecule of phosphoglycerate and one molecule of phosphoglycolate.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT descriptions of the oxygenase reaction of RuBisCO.",
        "topic": "c3_c4",
        "sub": "Photorespiration Initiation",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 402,
        "q": "Given below are two statements:\nStatement I: In the photorespiratory pathway, there is neither synthesis of sugars, nor of ATP; rather it results in the release of CO2 with the utilization of ATP.\nStatement II: In the photorespiratory pathway, NADPH is synthesized in large quantities.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct (NCERT). Statement II is incorrect because photorespiration does not produce ATP or NADPH; it is an energetically wasteful process.",
        "topic": "c3_c4",
        "sub": "Photorespiration Wastefulness",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 403,
        "q": "Given below are two statements:\nStatement I: In C4 plants photorespiration does not occur because they have a mechanism that increases the concentration of CO2 at the enzyme site.\nStatement II: Decarboxylation of C4 acids in the bundle sheath cells releases CO2, ensuring that RuBisCO functions purely as a carboxylase.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are verbatim correct NCERT explanations for why C4 plants lack photorespiration.",
        "topic": "c3_c4",
        "sub": "Absence of Photorespiration in C4",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 404,
        "q": "Given below are two statements:\nStatement I: C4 plants are photosynthetically more productive than C3 plants and show higher yields because they lack photorespiration.\nStatement II: C4 plants can tolerate higher temperatures than C3 plants.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT facts highlighting the physiological superiority of C4 plants in hot tropical conditions.",
        "topic": "c3_c4",
        "sub": "C4 Advantages",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 405,
        "q": "Given below are two statements:\nStatement I: According to Blackman's (1905) Law of Limiting Factors, if a chemical process is affected by more than one factor, then its rate will be determined by the factor which is nearest to its minimal value.\nStatement II: The factor which is nearest to its minimal value directly affects the process if its quantity is changed.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are verbatim correct NCERT definitions of Blackman's Law of Limiting Factors.",
        "topic": "factors",
        "sub": "Blackman's Law",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 406,
        "q": "Given below are two statements:\nStatement I: Light saturation occurs at 10 per cent of the full sunlight, except for plants in shade or in dense forests.\nStatement II: Light is rarely a limiting factor in nature for plants in open habitats.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are verbatim correct NCERT points on light saturation and availability in nature.",
        "topic": "factors",
        "sub": "Light as a Factor",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 407,
        "q": "Given below are two statements:\nStatement I: Carbon dioxide is the major limiting factor for photosynthesis, as its concentration is very low in the atmosphere (between 0.03 and 0.04 per cent).\nStatement II: An increase in CO2 concentration up to 0.05 per cent can cause an increase in CO2 fixation rates, but beyond this level it can become damaging over longer periods.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are verbatim correct NCERT facts regarding atmospheric CO2 limits and toxicity.",
        "topic": "factors",
        "sub": "CO2 as a Factor",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 408,
        "q": "Given below are two statements:\nStatement I: C4 plants show CO2 saturation at about 360 ul/L (ppm), whereas C3 plants saturate only beyond 450 ul/L (ppm).\nStatement II: Current availability of atmospheric CO2 levels (around 400 ppm) is limiting to the C3 plants, but not to C4 plants.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are verbatim correct NCERT facts explaining differential CO2 saturation in C3 and C4 plants.",
        "topic": "factors",
        "sub": "CO2 Saturation",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 409,
        "q": "Given below are two statements:\nStatement I: C3 plants respond to higher CO2 concentration by showing increased rates of photosynthesis leading to higher productivity, a principle utilized for greenhouse crops like tomatoes and bell pepper.\nStatement II: C4 plants respond to CO2 fertilization with much greater yield increases than C3 plants under high CO2 atmospheres.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct (NCERT). Statement II is incorrect because C4 plants are already CO2 saturated at ~360 ppm and do not show significant growth acceleration under elevated CO2.",
        "topic": "factors",
        "sub": "Greenhouse Crops",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 410,
        "q": "Given below are two statements:\nStatement I: The dark reactions, being enzymatic, are temperature controlled, whereas light reactions are also temperature sensitive but to a much lesser extent.\nStatement II: The C4 plants have a much lower temperature optimum than the plants adapted to temperate climates (C3 plants).\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because C4 plants have a HIGHER temperature optimum (30-40\u00b0C) than C3 plants (20-25\u00b0C).",
        "topic": "factors",
        "sub": "Temperature Optimum",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 411,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Photosynthesis is an essential process for life on earth.\nReason (R): It is the primary source of all food on earth and releases oxygen into the atmosphere.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) provides the exact reasons stated by NCERT for why photosynthesis is fundamental to biosphere survival.",
        "topic": "pigments_light",
        "sub": "Importance of Photosynthesis",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 412,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Chlorophyll a is considered the chief photosynthetic pigment.\nReason (R): The action spectrum of photosynthesis coincides closely with the absorption peaks of chlorophyll a.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains why chlorophyll a is identified as the chief pigment driving photosynthetic work.",
        "topic": "pigments_light",
        "sub": "Chief Pigment",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 413,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Accessory pigments enable a wider range of wavelength of incoming light to be utilized for photosynthesis.\nReason (R): Accessory pigments like chlorophyll b, xanthophylls, and carotenoids absorb light at different wavelengths and transfer the energy to chlorophyll a.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly explains how accessory pigments broaden the photosynthetic absorption spectrum.",
        "topic": "pigments_light",
        "sub": "Accessory Pigments",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 414,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): The splitting of water is associated with Photosystem II.\nReason (R): The water splitting complex is physically located on the inner side of the thylakoid membrane attached to PS II.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains the structural basis of water photolysis association with PS II.",
        "topic": "pigments_light",
        "sub": "Water Splitting",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 415,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): During light reactions, a proton gradient is established across the thylakoid membrane with higher proton concentration in the lumen.\nReason (R): Photolysis of water releases protons into the lumen, plastoquinone pumps protons from stroma to lumen, and NADP reductase removes protons from the stroma.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) provides the complete three-fold mechanistic explanation for proton gradient formation.",
        "topic": "pigments_light",
        "sub": "Chemiosmotic Hypothesis",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 416,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Protons move from the thylakoid lumen to the stroma through the CF0 channel of ATP synthase by facilitated diffusion.\nReason (R): The thylakoid membrane is impermeable to protons, and CF0 forms a transmembrane protein channel down the electrochemical gradient.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains why proton passage requires the facilitated CF0 channel.",
        "topic": "pigments_light",
        "sub": "ATP Synthase",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 417,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In stroma lamellae membranes, only cyclic photophosphorylation takes place.\nReason (R): Stroma lamellae membranes lack both Photosystem II and NADP reductase enzyme.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains the biochemical reason why only cyclic electron flow is possible in stroma lamellae.",
        "topic": "pigments_light",
        "sub": "Stroma Lamellae",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 418,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): The dark reactions of photosynthesis are not directly light-driven.\nReason (R): Dark reactions depend directly on the assimilatory products (ATP and NADPH) of the light reaction.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) provides the exact explanation for why dark reactions are called 'light-independent' yet stop soon after light is turned off.",
        "topic": "c3_c4",
        "sub": "Dark Reactions Nature",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 419,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Six turns of the Calvin cycle are required to produce one molecule of glucose.\nReason (R): Each turn of the Calvin cycle fixes one molecule of CO2, and glucose is a 6-carbon hexose sugar.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly explains the carbon arithmetic of glucose synthesis.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Numericals",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 420,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): RuBisCO is also called RuBP carboxylase-oxygenase.\nReason (R): RuBisCO has an active site that can bind to both CO2 and O2 in a competitive manner.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains why the enzyme bears both carboxylase and oxygenase in its name.",
        "topic": "c3_c4",
        "sub": "RuBisCO Dual Action",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 421,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Photorespiration is a wasteful process in C3 plants.\nReason (R): In photorespiration, there is neither synthesis of sugars nor of ATP or NADPH, and 25% of fixed carbon is lost as CO2.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) details why photorespiration is considered energetically and metabolically wasteful.",
        "topic": "c3_c4",
        "sub": "Photorespiration Wastefulness",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 422,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): C4 plants show greater productivity and biomass yield than C3 plants in tropical climates.\nReason (R): C4 plants have evolved a mechanism that prevents photorespiration by concentrating CO2 around RuBisCO.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) is the direct physiological explanation for higher C4 productivity.",
        "topic": "c3_c4",
        "sub": "C4 Productivity",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 423,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In C4 plants, RuBisCO does not function as an oxygenase.\nReason (R): The decarboxylation of malate in bundle sheath cells raises intracellular CO2 concentration to levels where oxygenase activity is completely suppressed.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains the biochemical suppression of oxygenase activity in bundle sheath cells.",
        "topic": "c3_c4",
        "sub": "C4 Mechanism",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 424,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Bundle sheath cells in C4 leaves have thick walls impervious to gaseous exchange.\nReason (R): Thick suberized walls prevent the leakage of concentrated CO2 back into the intercellular spaces of mesophyll.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains the adaptive anatomical role of thick bundle sheath walls.",
        "topic": "c3_c4",
        "sub": "Kranz Anatomy",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 425,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): C4 plants require more energy (30 ATP) than C3 plants (18 ATP) to synthesize one molecule of glucose.\nReason (R): Conversion of pyruvate back to phosphoenolpyruvate (PEP) in mesophyll cells consumes 2 ATP equivalents per CO2 fixed.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains the extra 12 ATP cost (6 x 2 ATP equivalents) incurred by the C4 pathway.",
        "topic": "c3_c4",
        "sub": "C4 Energetics",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 426,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Light is rarely a limiting factor for photosynthesis in plants growing in open fields.\nReason (R): Light saturation for green plants occurs at approximately 10% of full natural sunlight.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains why full sunlight easily exceeds the saturation point, making light non-limiting in open areas.",
        "topic": "factors",
        "sub": "Light Factor",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 427,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Carbon dioxide is the major limiting factor for photosynthesis in terrestrial plants.\nReason (R): The concentration of CO2 in the atmosphere is extremely low (0.03% - 0.04%), far below the saturation level for C3 plants.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly explains why CO2 is the principal limiting factor under normal conditions.",
        "topic": "factors",
        "sub": "CO2 Factor",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 428,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Tomatoes and bell peppers grown in CO2-enriched greenhouses produce significantly higher crop yields.\nReason (R): C3 plants saturate at around 450 ppm CO2, so elevating CO2 from 400 ppm to 500 ppm enhances their photosynthetic rate.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains the physiological mechanism of greenhouse carbon dioxide fertilization.",
        "topic": "factors",
        "sub": "Greenhouse Crops",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 429,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Water stress causes a marked decline in the rate of photosynthesis.\nReason (R): Water stress causes stomata to close, thereby reducing the availability of CO2 to mesophyll chloroplasts.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly identifies stomatal closure and CO2 deprivation as the primary pathway of water stress inhibition.",
        "topic": "factors",
        "sub": "Water Stress",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 430,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): C4 plants have a higher temperature optimum than C3 plants.\nReason (R): The enzymes of the C4 pathway, such as PEP carboxylase and PPDK, operate optimally at warmer tropical temperatures (30\u00b0C - 40\u00b0C).\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains the biochemical adaptation of C4 enzymes to high thermal regimes.",
        "topic": "factors",
        "sub": "Temperature Factor",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 431,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Dark reactions are also referred to as the carbon reactions or biosynthetic phase.\nReason (R): In this phase, ATP and NADPH generated in light reactions are utilized to synthesize carbohydrates from carbon dioxide.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains why the phase is called the biosynthetic or carbon reduction phase.",
        "topic": "c3_c4",
        "sub": "Biosynthetic Phase",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 432,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): CAM plants open their stomata at night and keep them closed during the daytime.\nReason (R): Nocturnal stomatal opening minimizes transpiration water loss in extreme arid environments.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) is the adaptive evolutionary explanation of scotoactive stomata in CAM plants.",
        "topic": "c3_c4",
        "sub": "CAM Plants",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 433,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): C4 plants are twice as efficient as C3 plants in terms of water usage (water-use efficiency).\nReason (R): C4 plants lose only half as much water as C3 plants for the same amount of CO2 fixed.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true verbatim NCERT facts regarding the water-use efficiency of C4 plants.",
        "topic": "c3_c4",
        "sub": "Water-Use Efficiency",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 434,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In green sulfur bacteria, oxygen is never evolved during photosynthesis.\nReason (R): Green sulfur bacteria use hydrogen sulfide (H2S) as the hydrogen and electron donor instead of water.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) is Van Niel's classic explanation for anoxygenic bacterial photosynthesis.",
        "topic": "pigments_light",
        "sub": "Bacterial Photosynthesis",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 435,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): When illuminated with light beyond 680 nm, photosynthesis in green plants shows a sharp decline ('red drop').\nReason (R): Light beyond 680 nm is unable to excite Photosystem II, shutting down non-cyclic electron transport.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains the biophysical cause of Emerson's red drop.",
        "topic": "pigments_light",
        "sub": "Red Drop",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 436,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Treatment with the herbicide DCMU inhibits oxygen evolution in photosynthesis.\nReason (R): DCMU competes with plastoquinone at the QB site of PS II, blocking electron flow from PS II to cytochrome b6f.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) provides the molecular pharmacology mechanism of DCMU action.",
        "topic": "pigments_light",
        "sub": "Photosynthetic Inhibitors",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 437,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): The pH of the thylakoid lumen drops sharply during light-driven electron transport.\nReason (R): Protons from water oxidation and plastoquinone Q-cycle are continuously pumped into the lumen.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains the acidification of the thylakoid lumen in light.",
        "topic": "pigments_light",
        "sub": "Lumen Acidification",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 438,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): The synthesis of ATP by ATP synthase requires the presence of a membrane.\nReason (R): The membrane maintains the proton gradient between the two compartments that drives proton movement through CF0.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains why intact, sealed membranes are mandatory for chemiosmosis.",
        "topic": "pigments_light",
        "sub": "Chemiosmotic Requirement",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 439,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In C3 plants, photorespiration increases with rising ambient temperature.\nReason (R): Higher temperature reduces the solubility of CO2 more than O2 and alters the kinetic properties of RuBisCO to favor oxygenation.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains why warm temperatures severely amplify photorespiratory losses in C3 plants.",
        "topic": "c3_c4",
        "sub": "Temperature & Photorespiration",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 440,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Photorespiration does not yield ATP or NADPH.\nReason (R): In fact, photorespiration consumes ATP and reducing equivalents to salvage carbon from phosphoglycolate.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) accurately details the net energetic cost of the C2 pathway.",
        "topic": "c3_c4",
        "sub": "Photorespiration Energetics",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 441,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Phosphoenolpyruvate carboxylase (PEPcase) has a much higher affinity for its substrate than RuBisCO.\nReason (R): PEPcase has a very low Km for bicarbonate (HCO3-), allowing efficient carbon fixation even at very low stomatal conductances.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) provides the kinetic enzyme basis for PEPcase's high affinity.",
        "topic": "c3_c4",
        "sub": "PEPcase Kinetics",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 442,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Uncouplers like DNP stop ATP synthesis without inhibiting the electron transport chain.\nReason (R): Uncouplers make the thylakoid membrane leaky to protons, thereby dissipating the proton gradient without blocking redox carriers.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) is the exact biophysical explanation of uncoupling action.",
        "topic": "pigments_light",
        "sub": "Uncouplers",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 443,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In Moll's half-leaf experiment, the leaf part outside the bottle tests positive for starch while the part inside tests negative.\nReason (R): KOH inside the bottle absorbs CO2, creating a CO2-free environment that prevents photosynthesis in the enclosed leaf section.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly explains the mechanism of Moll's half-leaf test.",
        "topic": "factors",
        "sub": "Moll's Experiment",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 444,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): C4 plants do not show a CO2 compensation point.\nReason (R): C4 plants possess no respiration or photorespiration under any conditions.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are false",
            "B": "(A) is true but (R) is false",
            "C": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are false. C4 plants do have a CO2 compensation point (though very low, 0-10 ppm), and they undergo normal dark respiration.",
        "topic": "factors",
        "sub": "Compensation Point",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 445,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Triose phosphates exported from chloroplasts are synthesized into sucrose in the cytosol.\nReason (R): The enzymes for sucrose synthesis are located in the cytosol, and triose phosphates are exchanged for inorganic phosphate (Pi) across the inner envelope.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly describes the compartmentalization and transport mechanism of sucrose synthesis.",
        "topic": "c3_c4",
        "sub": "Sucrose Synthesis",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 446,
        "q": "Match the historical scientists in Column I with their landmark contributions in Column II:\nColumn I:\n(p) Joseph Priestley\n(q) Jan Ingenhousz\n(r) Julius von Sachs\n(s) T.W. Engelmann\nColumn II:\n(i) Showed that sunlight is essential for plants to release oxygen\n(ii) Discovered oxygen and revealed role of air in plant growth\n(iii) First action spectrum of photosynthesis using Cladophora\n(iv) Evidence that green plant parts produce glucose stored as starch\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(i), r-(iv), s-(iii)",
            "B": "p-(i), q-(ii), r-(iv), s-(iii)",
            "C": "p-(ii), q-(iv), r-(i), s-(iii)",
            "D": "p-(iii), q-(i), r-(iv), s-(ii)"
        },
        "ans": "A",
        "exp": "Priestley: O2 discovery (ii); Ingenhousz: sunlight/aquatic bubbles (i); Sachs: glucose/starch (iv); Engelmann: action spectrum (iii).",
        "topic": "pigments_light",
        "sub": "Historical Experiments",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 447,
        "q": "Match the photosynthetic pigments in Column I with their chromatogram colors in Column II:\nColumn I:\n(p) Chlorophyll a\n(q) Chlorophyll b\n(r) Xanthophylls\n(s) Carotenoids\nColumn II:\n(i) Yellow to yellow-orange\n(ii) Yellow-green\n(iii) Bright or blue-green\n(iv) Yellow\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(ii), r-(iv), s-(i)",
            "B": "p-(ii), q-(iii), r-(i), s-(iv)",
            "C": "p-(iii), q-(iv), r-(ii), s-(i)",
            "D": "p-(i), q-(ii), r-(iv), s-(iii)"
        },
        "ans": "A",
        "exp": "Chlorophyll a: blue-green (iii); Chlorophyll b: yellow-green (ii); Xanthophylls: yellow (iv); Carotenoids: yellow to yellow-orange (i).",
        "topic": "pigments_light",
        "sub": "Pigments",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 448,
        "q": "Match the photosystem components in Column I with their features in Column II:\nColumn I:\n(p) Photosystem I\n(q) Photosystem II\n(r) Cytochrome b6f\n(s) CF0-CF1 complex\nColumn II:\n(i) Contains P680 and splits water on inner membrane face\n(ii) Contains P700 and located predominantly in non-appressed thylakoids\n(iii) Synthesizes ATP using trans-thylakoid proton gradient\n(iv) Mediates Q-cycle and pumps protons from stroma to lumen\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(i), r-(iv), s-(iii)",
            "B": "p-(i), q-(ii), r-(iv), s-(iii)",
            "C": "p-(ii), q-(iv), r-(i), s-(iii)",
            "D": "p-(iii), q-(i), r-(iv), s-(ii)"
        },
        "ans": "A",
        "exp": "PS I: P700 in non-appressed (ii); PS II: P680 & water splitting (i); Cyt b6f: Q-cycle (iv); CF0-CF1: ATP synthesis (iii).",
        "topic": "pigments_light",
        "sub": "Photosystems",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 449,
        "q": "Match the stages of the Calvin cycle in Column I with their descriptions in Column II:\nColumn I:\n(p) Carboxylation\n(q) Reduction\n(r) Regeneration\nColumn II:\n(i) Uses 2 ATP and 2 NADPH per CO2 to form triose phosphates\n(ii) Crucial step where RuBP binds CO2 catalyzed by RuBisCO to form 3-PGA\n(iii) Consumes 1 ATP to regenerate RuBP from triose phosphates\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(i), r-(iii)",
            "B": "p-(i), q-(ii), r-(iii)",
            "C": "p-(iii), q-(i), r-(ii)",
            "D": "p-(ii), q-(iii), r-(i)"
        },
        "ans": "A",
        "exp": "Carboxylation: RuBP binds CO2 (ii); Reduction: 2 ATP + 2 NADPH (i); Regeneration: 1 ATP (iii).",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Stages",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 450,
        "q": "Match the C4 pathway cell types in Column I with their features in Column II:\nColumn I:\n(p) Mesophyll cells of C4 plants\n(q) Bundle sheath cells of C4 plants\nColumn II:\n(i) Possess PEPcase but lack RuBisCO, granal chloroplasts\n(ii) Possess RuBisCO but lack PEPcase, agranal chloroplasts, thick gas-impermeable walls\n(iii) Site of decarboxylation of C4 acids and Calvin cycle\n(iv) Site of primary CO2 fixation to form oxaloacetate\nSelect the correct option:",
        "opts": {
            "A": "p-(i, iv), q-(ii, iii)",
            "B": "p-(ii, iii), q-(i, iv)",
            "C": "p-(i, iii), q-(ii, iv)",
            "D": "p-(ii, iv), q-(i, iii)"
        },
        "ans": "A",
        "exp": "Mesophyll: PEPcase, no RuBisCO, granal, primary fixation (i, iv); Bundle sheath: RuBisCO, no PEPcase, agranal, decarboxylation, Calvin cycle (ii, iii).",
        "topic": "c3_c4",
        "sub": "C4 Cell Features",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 451,
        "q": "Match the photosynthetic pathways in Column I with their primary CO2 acceptor and initial product in Column II:\nColumn I:\n(p) C3 pathway\n(q) C4 pathway\n(r) CAM pathway\nColumn II:\n(i) Primary acceptor PEP, primary product OAA (nocturnal fixation in vacuole)\n(ii) Primary acceptor RuBP (5C), primary product 3-PGA (3C)\n(iii) Primary acceptor PEP (3C), primary product OAA (4C) in mesophyll cytosol\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iii), r-(i)",
            "B": "p-(i), q-(ii), r-(iii)",
            "C": "p-(iii), q-(ii), r-(i)",
            "D": "p-(ii), q-(i), r-(iii)"
        },
        "ans": "A",
        "exp": "C3: RuBP -> 3-PGA (ii); C4: PEP -> OAA in mesophyll (iii); CAM: PEP -> OAA -> malate in vacuole at night (i).",
        "topic": "c3_c4",
        "sub": "Pathways Comparison",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 452,
        "q": "Match the organelles in Column I with their specific role in photorespiration in Column II:\nColumn I:\n(p) Chloroplast\n(q) Peroxisome\n(r) Mitochondria\nColumn II:\n(i) Condensation of 2 glycines to form serine, releasing CO2 and NH3\n(ii) Oxidation of glycolate to glyoxylate with H2O2 production by catalase\n(iii) Oxygenase reaction of RuBisCO forming phosphoglycolate and subsequent phosphorylation of glycerate\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(ii), r-(i)",
            "B": "p-(ii), q-(iii), r-(i)",
            "C": "p-(i), q-(ii), r-(iii)",
            "D": "p-(iii), q-(i), r-(ii)"
        },
        "ans": "A",
        "exp": "Chloroplast: RuBisCO oxygenation & glycerate phosphorylation (iii); Peroxisome: glycolate oxidase & catalase (ii); Mitochondria: glycine decarboxylation (i).",
        "topic": "c3_c4",
        "sub": "Photorespiration Organelles",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 453,
        "q": "Match the photosynthetic inhibitors in Column I with their target mechanisms in Column II:\nColumn I:\n(p) DCMU (Diuron)\n(q) Paraquat (Methyl viologen)\n(r) Gramicidin / CCCP\n(s) D-threo-chloramphenicol\nColumn II:\n(i) Intercepts electrons from PS I, generating lethal superoxide radicals\n(ii) Uncoupler that dissipates thylakoid proton gradient\n(iii) Blocks QB plastoquinone binding site of PS II\n(iv) Inhibits 70S translation of chloroplast-encoded proteins (e.g., D1, rbcL)\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(i), r-(ii), s-(iv)",
            "B": "p-(i), q-(iii), r-(ii), s-(iv)",
            "C": "p-(iii), q-(ii), r-(i), s-(iv)",
            "D": "p-(ii), q-(i), r-(iv), s-(iii)"
        },
        "ans": "A",
        "exp": "DCMU: blocks QB site (iii); Paraquat: intercepts electrons at PS I (i); CCCP: uncoupler (ii); Chloramphenicol: blocks chloroplast 70S ribosomes (iv).",
        "topic": "pigments_light",
        "sub": "Inhibitors",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 454,
        "q": "Match the mineral elements in Column I with their roles in photosynthesis in Column II:\nColumn I:\n(p) Manganese (Mn)\n(q) Magnesium (Mg)\n(r) Copper (Cu)\n(s) Iron (Fe)\nColumn II:\n(i) Constituent of plastocyanin\n(ii) Essential cofactor for photolysis of water in OEC\n(iii) Central atom of chlorophyll porphyrin ring and activator of RuBisCO\n(iv) Component of ferredoxin and cytochromes\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iii), r-(i), s-(iv)",
            "B": "p-(iii), q-(ii), r-(i), s-(iv)",
            "C": "p-(ii), q-(i), r-(iii), s-(iv)",
            "D": "p-(iv), q-(iii), r-(i), s-(ii)"
        },
        "ans": "A",
        "exp": "Mn: water photolysis (ii); Mg: chlorophyll central atom & RuBisCO activator (iii); Cu: plastocyanin (i); Fe: ferredoxin & cytochromes (iv).",
        "topic": "pigments_light",
        "sub": "Minerals in Photosynthesis",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 455,
        "q": "Match the environmental factors in Column I with their critical values in Column II:\nColumn I:\n(p) Light saturation in green plants\n(q) Current atmospheric CO2 concentration\n(r) CO2 saturation for C4 plants\n(s) CO2 saturation for C3 plants\nColumn II:\n(i) Approximately 360 ppm (ul/L)\n(ii) Approximately 10% of full sunlight\n(iii) Beyond 450 ppm (ul/L)\n(iv) 0.03% to 0.04% (300 to 400 ppm)\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iv), r-(i), s-(iii)",
            "B": "p-(iv), q-(ii), r-(i), s-(iii)",
            "C": "p-(ii), q-(i), r-(iv), s-(iii)",
            "D": "p-(i), q-(iv), r-(ii), s-(iii)"
        },
        "ans": "A",
        "exp": "Light saturation: 10% sunlight (ii); Ambient CO2: 0.03-0.04% (iv); C4 saturation: 360 ppm (i); C3 saturation: >450 ppm (iii).",
        "topic": "factors",
        "sub": "Environmental Values",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 456,
        "q": "Match the plant species in Column I with their photosynthetic pathway in Column II:\nColumn I:\n(p) Maize and Sugarcane\n(q) Wheat and Rice\n(r) Pineapple and Opuntia\n(s) Tomato and Bell pepper\nColumn II:\n(i) CAM pathway (succulent arid xerophytes)\n(ii) C4 pathway (Kranz anatomy, high temperature optimum)\n(iii) C3 greenhouse crops benefiting from CO2 fertilization\n(iv) C3 staple cereal crops with photorespiration\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iv), r-(i), s-(iii)",
            "B": "p-(iv), q-(ii), r-(i), s-(iii)",
            "C": "p-(ii), q-(i), r-(iv), s-(iii)",
            "D": "p-(i), q-(ii), r-(iii), s-(iv)"
        },
        "ans": "A",
        "exp": "Maize/Sugarcane: C4 (ii); Wheat/Rice: C3 cereals (iv); Pineapple/Opuntia: CAM (i); Tomato/Bell pepper: C3 greenhouse crops (iii).",
        "topic": "c3_c4",
        "sub": "Plant Pathways",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 457,
        "q": "Match the terms related to light reactions in Column I with their definitions in Column II:\nColumn I:\n(p) Red drop\n(q) Emerson enhancement effect\n(r) Quantum yield\n(s) Quantum requirement\nColumn II:\n(i) Number of photons required to evolve one O2 molecule (= 8)\n(ii) Decline in quantum yield at wavelengths > 680 nm\n(iii) Synergistic increase in photosynthesis under simultaneous 650 nm and 710 nm light\n(iv) Fraction of O2 molecule evolved per photon absorbed (= 0.125 or 12.5%)\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iii), r-(iv), s-(i)",
            "B": "p-(iii), q-(ii), r-(i), s-(iv)",
            "C": "p-(ii), q-(iv), r-(iii), s-(i)",
            "D": "p-(i), q-(ii), r-(iv), s-(iii)"
        },
        "ans": "A",
        "exp": "Red drop: decline >680 nm (ii); Enhancement: synergy of red + far red (iii); Quantum yield: 0.125 (iv); Quantum requirement: 8 (i).",
        "topic": "pigments_light",
        "sub": "Biophysical Terms",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 458,
        "q": "Match the electron transport components in Column I with their chemical natures in Column II:\nColumn I:\n(p) Pheophytin\n(q) Plastoquinone\n(r) Plastocyanin\n(s) Ferredoxin\nColumn II:\n(i) Copper-containing water-soluble lumen protein\n(ii) Iron-sulfur protein on the stromal face\n(iii) Lipid-soluble prenylquinone in the thylakoid lipid bilayer\n(iv) Chlorophyll a derivative lacking central magnesium\nSelect the correct option:",
        "opts": {
            "A": "p-(iv), q-(iii), r-(i), s-(ii)",
            "B": "p-(iii), q-(iv), r-(i), s-(ii)",
            "C": "p-(iv), q-(i), r-(iii), s-(ii)",
            "D": "p-(ii), q-(iii), r-(i), s-(iv)"
        },
        "ans": "A",
        "exp": "Pheophytin: Chl a lacking Mg (iv); Plastoquinone: lipid prenylquinone (iii); Plastocyanin: copper protein (i); Ferredoxin: Fe-S protein (ii).",
        "topic": "pigments_light",
        "sub": "Chemical Natures",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 459,
        "q": "Match the ATP requirements in Column I with their biological processes in Column II:\nColumn I:\n(p) Synthesis of 1 glucose via C3 Calvin cycle\n(q) Synthesis of 1 glucose via C4 Hatch-Slack pathway\n(r) Regeneration of 1 RuBP from triose phosphates\n(s) Regeneration of 1 PEP from pyruvate in C4 mesophyll\nColumn II:\n(i) 1 ATP\n(ii) 2 ATP equivalents (ATP -> AMP + PPi)\n(iii) 18 ATP\n(iv) 30 ATP\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(iv), r-(i), s-(ii)",
            "B": "p-(iv), q-(iii), r-(i), s-(ii)",
            "C": "p-(iii), q-(i), r-(iv), s-(ii)",
            "D": "p-(ii), q-(iv), r-(i), s-(iii)"
        },
        "ans": "A",
        "exp": "1 glucose C3: 18 ATP (iii); 1 glucose C4: 30 ATP (iv); 1 RuBP regeneration: 1 ATP (i); 1 PEP regeneration: 2 ATP equivalents (ii).",
        "topic": "c3_c4",
        "sub": "ATP Requirements",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 460,
        "q": "Match the enzymes in Column I with their cellular locations in Column II:\nColumn I:\n(p) RuBisCO\n(q) PEP carboxylase\n(r) Phosphoglycolate phosphatase\n(s) Glycolate oxidase\nColumn II:\n(i) Peroxisome matrix\n(ii) Chloroplast stroma\n(iii) Mesophyll cell cytosol in C4 plants\n(iv) Chloroplast stroma of bundle sheath cells in C4 / mesophyll in C3\nSelect the correct option:",
        "opts": {
            "A": "p-(iv), q-(iii), r-(ii), s-(i)",
            "B": "p-(ii), q-(iii), r-(iv), s-(i)",
            "C": "p-(iv), q-(i), r-(ii), s-(iii)",
            "D": "p-(iii), q-(iv), r-(i), s-(ii)"
        },
        "ans": "A",
        "exp": "RuBisCO: chloroplast stroma (iv); PEPcase: mesophyll cytosol (iii); Phosphoglycolate phosphatase: chloroplast stroma (ii); Glycolate oxidase: peroxisome (i).",
        "topic": "c3_c4",
        "sub": "Enzyme Locations",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 461,
        "q": "Match the intermediate compounds of photosynthesis in Column I with their carbon numbers in Column II:\nColumn I:\n(p) Ribulose-1,5-bisphosphate (RuBP)\n(q) 3-phosphoglyceric acid (3-PGA)\n(r) Phosphoglycolate\n(s) Oxaloacetic acid (OAA)\nColumn II:\n(i) 2 carbons\n(ii) 3 carbons\n(iii) 4 carbons\n(iv) 5 carbons\nSelect the correct option:",
        "opts": {
            "A": "p-(iv), q-(ii), r-(i), s-(iii)",
            "B": "p-(ii), q-(iv), r-(i), s-(iii)",
            "C": "p-(iv), q-(iii), r-(i), s-(ii)",
            "D": "p-(iii), q-(ii), r-(i), s-(iv)"
        },
        "ans": "A",
        "exp": "RuBP: 5C (iv); 3-PGA: 3C (ii); Phosphoglycolate: 2C (i); OAA: 4C (iii).",
        "topic": "c3_c4",
        "sub": "Carbon Numbers",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 462,
        "q": "Match the photophosphorylation types in Column I with their diagnostic features in Column II:\nColumn I:\n(p) Non-cyclic photophosphorylation\n(q) Cyclic photophosphorylation\nColumn II:\n(i) Involves both PS I and PS II\n(ii) Involves only PS I\n(iii) Produces both ATP and NADPH\n(iv) Produces ATP only, no O2 or NADPH\nSelect the correct option:",
        "opts": {
            "A": "p-(i, iii), q-(ii, iv)",
            "B": "p-(ii, iv), q-(i, iii)",
            "C": "p-(i, iv), q-(ii, iii)",
            "D": "p-(ii, iii), q-(i, iv)"
        },
        "ans": "A",
        "exp": "Non-cyclic: PS I + PS II, yields ATP + NADPH (i, iii); Cyclic: PS I only, yields ATP only (ii, iv).",
        "topic": "pigments_light",
        "sub": "Photophosphorylation Comparison",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 463,
        "q": "Match the experimental systems in Column I with the discovery in Column II:\nColumn I:\n(p) Priestley's bell jar with mint plant\n(q) Ingenhousz aquatic plant in light vs dark\n(r) Engelmann's split spectrum with Cladophora\n(s) Van Niel's purple and green sulfur bacteria\nColumn II:\n(i) Oxygen comes from water, not carbon dioxide\n(ii) First action spectrum matching chlorophyll absorption\n(iii) Green plants purify air spoiled by breathing animals\n(iv) Sunlight and green parts are essential for gas bubble evolution\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(iv), r-(ii), s-(i)",
            "B": "p-(iv), q-(iii), r-(ii), s-(i)",
            "C": "p-(iii), q-(i), r-(iv), s-(ii)",
            "D": "p-(i), q-(iv), r-(ii), s-(iii)"
        },
        "ans": "A",
        "exp": "Priestley: plants purify air (iii); Ingenhousz: light needed for bubbles (iv); Engelmann: action spectrum (ii); Van Niel: O2 from water (i).",
        "topic": "pigments_light",
        "sub": "Historical Discoveries",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 464,
        "q": "Match the chlorophyll features in Column I with the corresponding pigment in Column II:\nColumn I:\n(p) C55H72O5N4Mg (methyl group at C7)\n(q) C55H70O6N4Mg (aldehyde group at C7)\n(r) C40H56 (pure hydrocarbon)\n(s) C40H56O2 (oxygenated carotenoid)\nColumn II:\n(i) Xanthophyll\n(ii) Carotene (e.g., beta-carotene)\n(iii) Chlorophyll b\n(iv) Chlorophyll a\nSelect the correct option:",
        "opts": {
            "A": "p-(iv), q-(iii), r-(ii), s-(i)",
            "B": "p-(iii), q-(iv), r-(ii), s-(i)",
            "C": "p-(iv), q-(ii), r-(iii), s-(i)",
            "D": "p-(i), q-(iii), r-(ii), s-(iv)"
        },
        "ans": "A",
        "exp": "Chl a: C55H72O5N4Mg (iv); Chl b: C55H70O6N4Mg (iii); Carotene: C40H56 (ii); Xanthophyll: C40H56O2 (i).",
        "topic": "pigments_light",
        "sub": "Chemical Formulas",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 465,
        "q": "Match the following Calvin cycle inputs with their required amounts per glucose formed:\nColumn I:\n(p) CO2 input\n(q) ATP input\n(r) NADPH input\n(s) Turns of cycle\nColumn II:\n(i) 12 molecules\n(ii) 18 molecules\n(iii) 6 turns\n(iv) 6 molecules\nSelect the correct option:",
        "opts": {
            "A": "p-(iv), q-(ii), r-(i), s-(iii)",
            "B": "p-(ii), q-(iv), r-(i), s-(iii)",
            "C": "p-(iv), q-(i), r-(ii), s-(iii)",
            "D": "p-(iii), q-(ii), r-(i), s-(iv)"
        },
        "ans": "A",
        "exp": "6 CO2 (iv); 18 ATP (ii); 12 NADPH (i); 6 turns (iii).",
        "topic": "c3_c4",
        "sub": "Calvin Stoichiometry",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 466,
        "q": "Match the thylakoid membrane domains in Column I with their predominantly localized complexes in Column II:\nColumn I:\n(p) Appressed granal thylakoid membranes\n(q) Non-appressed stroma thylakoid membranes\nColumn II:\n(i) Photosystem II and major LHC II\n(ii) Photosystem I\n(iii) CF0-CF1 ATP synthase\n(iv) Water splitting complex\nSelect the correct option:",
        "opts": {
            "A": "p-(i, iv), q-(ii, iii)",
            "B": "p-(ii, iii), q-(i, iv)",
            "C": "p-(i, iii), q-(ii, iv)",
            "D": "p-(ii, iv), q-(i, iii)"
        },
        "ans": "A",
        "exp": "Appressed: PS II & water splitting (i, iv); Non-appressed: PS I & ATP synthase (ii, iii).",
        "topic": "pigments_light",
        "sub": "Thylakoid Domains",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 467,
        "q": "Match the primary photosynthetic parameters for C3 and C4 plants:\nColumn I:\n(p) CO2 compensation point of C3\n(q) CO2 compensation point of C4\n(r) Temperature optimum of C3\n(s) Temperature optimum of C4\nColumn II:\n(i) 0 to 10 ppm\n(ii) 40 to 50 ppm\n(iii) 30\u00b0C to 40\u00b0C\n(iv) 20\u00b0C to 25\u00b0C\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(i), r-(iv), s-(iii)",
            "B": "p-(i), q-(ii), r-(iv), s-(iii)",
            "C": "p-(ii), q-(iii), r-(iv), s-(i)",
            "D": "p-(iv), q-(i), r-(ii), s-(iii)"
        },
        "ans": "A",
        "exp": "C3 compensation: 40-50 ppm (ii); C4 compensation: 0-10 ppm (i); C3 temp: 20-25\u00b0C (iv); C4 temp: 30-40\u00b0C (iii).",
        "topic": "factors",
        "sub": "Physiological Parameters",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 468,
        "q": "Match the photosynthetic adaptations in Column I with their taxonomic examples in Column II:\nColumn I:\n(p) C3 plants\n(q) C4 plants\n(r) CAM plants\n(s) Anoxygenic photosynthetic bacteria\nColumn II:\n(i) Opuntia, Pineapple, Agave\n(ii) Chlorobium, Rhodospirillum\n(iii) Wheat, Rice, Barley, Spinach\n(iv) Maize, Sugarcane, Sorghum, Amaranthus\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(iv), r-(i), s-(ii)",
            "B": "p-(iv), q-(iii), r-(i), s-(ii)",
            "C": "p-(iii), q-(i), r-(iv), s-(ii)",
            "D": "p-(ii), q-(iv), r-(i), s-(iii)"
        },
        "ans": "A",
        "exp": "C3: Wheat, Rice (iii); C4: Maize, Sugarcane (iv); CAM: Opuntia, Pineapple (i); Anoxygenic: Chlorobium, Rhodospirillum (ii).",
        "topic": "c3_c4",
        "sub": "Taxonomic Examples",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 469,
        "q": "Match the reaction with its stoichiometric equation:\nColumn I:\n(p) Photolysis of 2 H2O\n(q) Net Calvin cycle for 1 hexose\n(r) RuBisCO oxygenation\nColumn II:\n(i) RuBP + O2 -> 3-PGA + Phosphoglycolate\n(ii) 6 CO2 + 18 ATP + 12 NADPH -> C6H12O6 + 18 ADP + 12 NADP+ + 18 Pi\n(iii) 2 H2O -> 4 H+ + O2 + 4 e-\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(ii), r-(i)",
            "B": "p-(ii), q-(iii), r-(i)",
            "C": "p-(iii), q-(i), r-(ii)",
            "D": "p-(i), q-(ii), r-(iii)"
        },
        "ans": "A",
        "exp": "Photolysis: 2 H2O -> 4 H+ + O2 + 4 e- (iii); Net Calvin: 6 CO2 + 18 ATP + 12 NADPH (ii); Oxygenation: RuBP + O2 -> 3-PGA + phosphoglycolate (i).",
        "topic": "c3_c4",
        "sub": "Stoichiometry Equations",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 470,
        "q": "Match the parts of ATP synthase in Column I with their features in Column II:\nColumn I:\n(p) CF0\n(q) CF1\nColumn II:\n(i) Transmembrane proton channel embedded in the thylakoid lipid bilayer\n(ii) Catalytic site synthesizing ATP from ADP and Pi\n(iii) Protrudes on the outer surface of the thylakoid membrane facing the stroma\n(iv) Translocates protons down electrochemical gradient by facilitated diffusion\nSelect the correct option:",
        "opts": {
            "A": "p-(i, iv), q-(ii, iii)",
            "B": "p-(ii, iii), q-(i, iv)",
            "C": "p-(i, iii), q-(ii, iv)",
            "D": "p-(ii, iv), q-(i, iii)"
        },
        "ans": "A",
        "exp": "CF0: embedded transmembrane channel, facilitated diffusion (i, iv); CF1: protruding catalytic site facing stroma (ii, iii).",
        "topic": "pigments_light",
        "sub": "ATP Synthase Anatomy",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 471,
        "q": "Match the following terms with their definitions:\nColumn I:\n(p) Photorespiration\n(q) Photophosphorylation\n(r) Solarization\n(s) Chemiosmosis\nColumn II:\n(i) Coupling of proton gradient to ATP synthesis across a biological membrane\n(ii) Synthesis of ATP from ADP and Pi using light energy\n(iii) Light-dependent consumption of O2 and evolution of CO2 without ATP synthesis\n(iv) Destruction/photo-oxidation of chlorophyll pigments under excessive light intensity\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(ii), r-(iv), s-(i)",
            "B": "p-(ii), q-(iii), r-(iv), s-(i)",
            "C": "p-(iii), q-(iv), r-(ii), s-(i)",
            "D": "p-(iv), q-(ii), r-(iii), s-(i)"
        },
        "ans": "A",
        "exp": "Photorespiration: O2 consumption & CO2 evolution (iii); Photophosphorylation: light-driven ATP synthesis (ii); Solarization: photo-oxidation of pigments (iv); Chemiosmosis: gradient-driven ATP synthesis (i).",
        "topic": "factors",
        "sub": "Key Terms",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 472,
        "q": "Match the photosynthetic gas exchange points in Column I with their conditions in Column II:\nColumn I:\n(p) Light compensation point\n(q) CO2 compensation point\n(r) Light saturation point\nColumn II:\n(i) Point where photosynthesis rate reaches plateau and light is no longer limiting\n(ii) CO2 concentration where photosynthetic CO2 uptake equals respiratory CO2 release\n(iii) Light intensity where rate of photosynthesis equals rate of respiration\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(ii), r-(i)",
            "B": "p-(ii), q-(iii), r-(i)",
            "C": "p-(iii), q-(i), r-(ii)",
            "D": "p-(i), q-(ii), r-(iii)"
        },
        "ans": "A",
        "exp": "Light compensation: photosynthesis = respiration (iii); CO2 compensation: CO2 uptake = release (ii); Light saturation: rate plateaus (i).",
        "topic": "factors",
        "sub": "Compensation Points",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 473,
        "q": "Match the intermediate acids in the C4 pathway with their cellular compartment:\nColumn I:\n(p) Oxaloacetate formation\n(q) Malate formation\n(r) Malate decarboxylation\n(s) PEP regeneration\nColumn II:\n(i) Mesophyll chloroplast stroma\n(ii) Mesophyll cytosol\n(iii) Bundle sheath chloroplast stroma\n(iv) Mesophyll chloroplast stroma\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(i), r-(iii), s-(iv)",
            "B": "p-(i), q-(ii), r-(iii), s-(iv)",
            "C": "p-(ii), q-(iii), r-(i), s-(iv)",
            "D": "p-(iii), q-(i), r-(iv), s-(ii)"
        },
        "ans": "A",
        "exp": "OAA: mesophyll cytosol (ii); Malate: mesophyll chloroplast (i); Decarboxylation: bundle sheath chloroplast (iii); PEP regeneration: mesophyll chloroplast (iv).",
        "topic": "c3_c4",
        "sub": "C4 Compartmentation",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 474,
        "q": "Match the wavelengths in Column I with their photosynthetic significance in Column II:\nColumn I:\n(p) 680 nm\n(q) 700 nm\n(r) 400 to 700 nm\n(s) > 680 nm\nColumn II:\n(i) Photosynthetically Active Radiation (PAR)\n(ii) Reaction centre absorption peak of PS I (P700)\n(iii) Causes Emerson red drop; drives cyclic photophosphorylation\n(iv) Reaction centre absorption peak of PS II (P680)\nSelect the correct option:",
        "opts": {
            "A": "p-(iv), q-(ii), r-(i), s-(iii)",
            "B": "p-(ii), q-(iv), r-(i), s-(iii)",
            "C": "p-(iv), q-(i), r-(ii), s-(iii)",
            "D": "p-(iii), q-(ii), r-(i), s-(iv)"
        },
        "ans": "A",
        "exp": "680 nm: PS II P680 (iv); 700 nm: PS I P700 (ii); 400-700 nm: PAR (i); >680 nm: red drop & cyclic flow (iii).",
        "topic": "pigments_light",
        "sub": "Wavelengths",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 475,
        "q": "Match the cofactors and enzymes of the C4 and Calvin cycles:\nColumn I:\n(p) RuBisCO\n(q) PEP carboxylase\n(r) Pyruvate-phosphate dikinase (PPDK)\n(s) Carbonic anhydrase\nColumn II:\n(i) Converts CO2 to HCO3- rapidly in mesophyll cytosol\n(ii) Regenerates PEP from pyruvate consuming ATP\n(iii) Carboxylates RuBP in bundle sheath / C3 mesophyll\n(iv) Carboxylates PEP using HCO3- in mesophyll cytosol\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(iv), r-(ii), s-(i)",
            "B": "p-(iv), q-(iii), r-(ii), s-(i)",
            "C": "p-(iii), q-(i), r-(ii), s-(iv)",
            "D": "p-(ii), q-(iv), r-(iii), s-(i)"
        },
        "ans": "A",
        "exp": "RuBisCO: carboxylates RuBP (iii); PEPcase: carboxylates PEP (iv); PPDK: regenerates PEP (ii); Carbonic anhydrase: CO2 -> HCO3- (i).",
        "topic": "c3_c4",
        "sub": "Enzyme Roles",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 476,
        "q": "Consider the following statements regarding chloroplast structure and function:\n(i) Grana lamellae contain both PS I and PS II.\n(ii) Stroma lamellae lack PS II and NADP reductase enzyme.\n(iii) The dark reactions occur in the stroma and are temperature-sensitive enzymatic steps.\n(iv) The lumen of thylakoid becomes alkaline during light reactions.\n(v) Water splitting complex is located on the outer stromal surface of the thylakoid.\nWhich of the above statements are correct?",
        "opts": {
            "A": "(i), (ii), and (iii) only",
            "B": "(i), (ii), (iii), and (iv)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iii) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), and (iii) are correct NCERT points. Statement (iv) is false because the lumen becomes acidic. Statement (v) is false because the water splitting complex is on the inner lumenal surface.",
        "topic": "pigments_light",
        "sub": "Chloroplast Organization",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 477,
        "q": "Read the following statements regarding the Z-scheme of light reactions:\n(i) Electrons from PS II are transferred downhill to PS I along an electron transport chain.\n(ii) Electrons excited in PS I are picked up by an electron acceptor and passed to NADP+ via ferredoxin.\n(iii) Water splitting supplies electrons continuously to PS II.\n(iv) The entire scheme from PS II uphill to acceptor, downhill to PS I, and to NADP+ is called the Z-scheme.\n(v) Non-cyclic electron flow produces ATP only, without NADPH.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (iii), and (iv) only",
            "D": "(ii) and (v) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct verbatim NCERT descriptions of the Z-scheme. Statement (v) is false because non-cyclic flow produces both ATP and NADPH.",
        "topic": "pigments_light",
        "sub": "Z-Scheme Features",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 478,
        "q": "Which of the following statements about cyclic photophosphorylation are correct?\n(i) It involves only Photosystem I.\n(ii) It occurs in stroma lamellae membranes.\n(iii) It produces ATP, but no NADPH or O2.\n(iv) It operates when light of wavelength beyond 680 nm is available.\n(v) It involves photolysis of water by PS I.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct NCERT points. Statement (v) is false because photolysis of water is associated exclusively with PS II.",
        "topic": "pigments_light",
        "sub": "Cyclic Photophosphorylation",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 479,
        "q": "Consider the following statements regarding the chemiosmotic hypothesis in chloroplasts:\n(i) Photolysis of water releases protons into the thylakoid lumen.\n(ii) As electrons move through photosystems, protons are pumped from stroma into the lumen.\n(iii) NADP reductase removes protons from the stroma to form NADPH.\n(iv) Proton concentration in the lumen increases, causing the lumen pH to drop.\n(v) Protons diffuse back to the stroma through CF0, activating CF1 to synthesize ATP.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), (iii), and (iv) only",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are verbatim correct NCERT explanations of Mitchell's chemiosmotic hypothesis.",
        "topic": "pigments_light",
        "sub": "Chemiosmotic Mechanism",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 480,
        "q": "Read the following statements regarding the Calvin cycle:\n(i) Carboxylation of RuBP yields two molecules of 3-PGA.\n(ii) Reduction consumes 2 ATP and 2 NADPH per CO2 fixed.\n(iii) Regeneration of RuBP consumes 1 ATP per CO2 fixed.\n(iv) Total consumption for one molecule of glucose is 18 ATP and 12 NADPH.\n(v) The primary CO2 acceptor is a 3-carbon phosphoglycerate.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because the primary CO2 acceptor is the 5-carbon sugar RuBP.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Summary",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 481,
        "q": "Which of the following statements about C4 plants are correct?\n(i) They possess Kranz anatomy in their leaves.\n(ii) Primary CO2 fixation occurs in mesophyll cells catalyzed by PEPcase.\n(iii) Primary stable product is the 4-carbon acid oxaloacetate (OAA).\n(iv) Bundle sheath cells contain RuBisCO and carry out the Calvin cycle.\n(v) They undergo high rates of photorespiration in hot sunlight.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct NCERT points. Statement (v) is false because C4 plants lack photorespiration.",
        "topic": "c3_c4",
        "sub": "C4 Characteristics",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 482,
        "q": "Consider the following statements regarding bundle sheath cells in C4 leaves:\n(i) They form several layers around the vascular bundles.\n(ii) They have a large number of chloroplasts.\n(iii) They have thick walls impervious to gaseous exchange.\n(iv) They lack intercellular spaces.\n(v) They possess high activity of PEP carboxylase and zero RuBisCO.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are verbatim correct NCERT descriptions of bundle sheath cells. Statement (v) is false because they are rich in RuBisCO and lack PEPcase.",
        "topic": "c3_c4",
        "sub": "Bundle Sheath Anatomy",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 483,
        "q": "Read the following statements regarding photorespiration in C3 plants:\n(i) It is initiated when RuBisCO binds O2 instead of CO2.\n(ii) RuBP is converted into one molecule of 3-PGA and one molecule of phosphoglycolate.\n(iii) It occurs across chloroplast, peroxisome, and mitochondria.\n(iv) It produces neither ATP nor NADPH.\n(v) It results in the release of CO2 with consumption of ATP.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), (iii), and (iv) only",
            "C": "(ii), (iii), and (v) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are verbatim correct NCERT points summarizing photorespiration.",
        "topic": "c3_c4",
        "sub": "Photorespiration Summary",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 484,
        "q": "Which of the following statements about Blackman's Law of Limiting Factors are correct?\n(i) Formulated by F.F. Blackman in 1905.\n(ii) If a process is affected by more than one factor, its rate is determined by the factor nearest to its minimal value.\n(iii) The limiting factor directly determines the rate if its magnitude is changed.\n(iv) It explains why increasing light intensity beyond saturation does not increase the rate if CO2 is limiting.\n(v) It states that the factor present in greatest excess always controls the rate.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i) and (iii) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because the minimal factor (limiting factor), not the factor in excess, controls the rate.",
        "topic": "factors",
        "sub": "Blackman's Law",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 485,
        "q": "Consider the following statements regarding light as a factor affecting photosynthesis:\n(i) There is a linear relationship between incident light and CO2 fixation rates at low light intensities.\n(ii) At higher light intensities, the rate does not show further increase as other factors become limiting.\n(iii) Light saturation occurs at about 10% of full sunlight.\n(iv) Light is rarely a limiting factor in nature for plants in open habitats.\n(v) Very high light intensities cause breakdown (photo-oxidation) of chlorophyll.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), (iii), and (iv) only",
            "C": "(ii), (iii), and (v) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are verbatim correct NCERT points regarding light response curves and solarization.",
        "topic": "factors",
        "sub": "Light Factor Summary",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 486,
        "q": "Read the following statements regarding carbon dioxide concentration as a factor in photosynthesis:\n(i) Current atmospheric CO2 concentration is around 0.03% to 0.04%.\n(ii) CO2 is the major limiting factor for photosynthesis in nature.\n(iii) C4 plants show CO2 saturation at about 360 ppm.\n(iv) C3 plants show CO2 saturation only beyond 450 ppm.\n(v) Greenhouse crops like tomatoes and bell peppers show higher yields when grown in CO2-enriched air.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), (iii), and (iv) only",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are verbatim correct NCERT facts detailing CO2 as a limiting factor.",
        "topic": "factors",
        "sub": "CO2 Factor Summary",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 487,
        "q": "Which of the following statements comparing C3 and C4 plants are correct?\n(i) C4 plants have Kranz anatomy, whereas C3 plants do not.\n(ii) C4 plants have PEPcase as the primary carboxylating enzyme, whereas C3 plants have RuBisCO.\n(iii) C4 plants have a higher temperature optimum (30-40\u00b0C) than C3 plants (20-25\u00b0C).\n(iv) C4 plants have zero photorespiration under normal conditions.\n(v) C4 plants require 30 ATP per glucose, whereas C3 plants require 18 ATP per glucose.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), (iii), and (iv) only",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are accurate comparative facts summarizing the distinctions between C3 and C4 plants.",
        "topic": "c3_c4",
        "sub": "C3 vs C4 Comprehensive",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 488,
        "q": "Consider the following statements regarding the Hill reaction and Van Niel's hypothesis:\n(i) Robert Hill showed that isolated chloroplasts can evolve O2 in the presence of an artificial electron acceptor without CO2.\n(ii) Cornelius van Niel showed that green sulfur bacteria use H2S and do not evolve O2.\n(iii) Van Niel correctly inferred that oxygen evolved by green plants comes from H2O, not CO2.\n(iv) Ruben and Kamen confirmed Van Niel's deduction using the heavy isotope 18O.\n(v) In green sulfur bacteria, oxygen is released by photolysis of H2S.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because photolysis of H2S produces sulfur or sulfate, not oxygen.",
        "topic": "pigments_light",
        "sub": "Historical Experiments",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 489,
        "q": "Read the following statements regarding photosynthetic pigments:\n(i) Paper chromatography separates leaf pigments into chlorophyll a, b, xanthophylls, and carotenoids.\n(ii) Chlorophyll a appears bright or blue-green on a chromatogram.\n(iii) Chlorophyll b appears yellow-green on a chromatogram.\n(iv) Xanthophylls appear yellow and carotenoids appear yellow to yellow-orange.\n(v) Chlorophyll a is an accessory pigment that funnels light to carotenoids.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are verbatim correct NCERT descriptions of paper chromatography pigments. Statement (v) is false because chlorophyll a is the reaction center pigment, not an accessory pigment.",
        "topic": "pigments_light",
        "sub": "Pigments Summary",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 490,
        "q": "Which of the following statements about CAM plants are correct?\n(i) They are adapted to arid, desert habitats with succulent photosynthetic tissues.\n(ii) They open their stomata at night (scotoactive) and close them during the day.\n(iii) At night, CO2 is fixed by PEPcase into malic acid stored in large vacuoles.\n(iv) During the day, malic acid is decarboxylated behind closed stomata to supply CO2 to RuBisCO.\n(v) They separate C4 carboxylation and Calvin cycle in different cells (mesophyll and bundle sheath).\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because CAM plants separate the two processes temporally within the same cell, not spatially in different cells.",
        "topic": "c3_c4",
        "sub": "CAM Summary",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 491,
        "q": "Consider the following statements regarding the energy requirements of photosynthesis:\n(i) Synthesis of one glucose in C3 plants consumes 18 ATP and 12 NADPH.\n(ii) Synthesis of one glucose in C4 plants consumes 30 ATP and 12 NADPH.\n(iii) Fixing one molecule of CO2 in C3 consumes 3 ATP and 2 NADPH.\n(iv) Fixing one molecule of CO2 in C4 consumes 5 ATP and 2 NADPH.\n(v) Photolysis of water directly produces ATP molecules without an electron transport chain.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct stoichiometric facts. Statement (v) is false because photolysis produces electrons and protons; ATP is produced by ATP synthase via the chemiosmotic gradient.",
        "topic": "c3_c4",
        "sub": "Energetics Summary",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 492,
        "q": "Read the following statements regarding the enzyme RuBisCO:\n(i) It is the most abundant protein in the biosphere.\n(ii) It possesses both carboxylase and oxygenase catalytic activities.\n(iii) It is located in the stroma of chloroplasts.\n(iv) In C4 plants, it is present in bundle sheath cells but absent in mesophyll cells.\n(v) It has a higher affinity for O2 than for CO2 under equal concentrations.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct NCERT facts. Statement (v) is false because RuBisCO's affinity for CO2 is significantly higher than for O2.",
        "topic": "c3_c4",
        "sub": "RuBisCO Properties",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 493,
        "q": "Which of the following statements about water stress affecting photosynthesis are correct?\n(i) It causes stomata to close, reducing CO2 availability.\n(ii) It causes leaves to wilt, reducing the surface area for light interception.\n(iii) It reduces the metabolic activity of photosynthetic enzymes.\n(iv) It directly acts by decomposing chlorophyll molecules into sugars.\n(v) Its effect on photosynthesis is predominantly indirect through stomatal closure.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (ii), and (iv) only",
            "D": "(ii) and (v) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (v) are verbatim correct NCERT points on water stress. Statement (iv) is false because water stress does not decompose chlorophyll into sugars.",
        "topic": "factors",
        "sub": "Water Stress Effects",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 494,
        "q": "Consider the following statements regarding the discovery of the first action spectrum by T.W. Engelmann:\n(i) He used a glass prism to split light into its spectral components.\n(ii) He illuminated a green alga, Cladophora, suspended in a culture of aerobic bacteria.\n(iii) The bacteria were used to detect the sites of oxygen evolution.\n(iv) Bacteria accumulated mainly in the blue and red light regions of the split spectrum.\n(v) Bacteria accumulated mostly in the green light region because green algae prefer green light.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i) and (iii) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct NCERT descriptions of Engelmann's experiment. Statement (v) is false because bacteria accumulated in blue and red regions, not green.",
        "topic": "pigments_light",
        "sub": "Engelmann Experiment",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 495,
        "q": "Read the following statements regarding the role of mineral elements in photosynthesis:\n(i) Manganese (Mn) and Chlorine (Cl) are required for photolysis of water.\n(ii) Magnesium (Mg) is the central constituent of the chlorophyll porphyrin ring.\n(iii) Iron (Fe) is a component of ferredoxin and cytochromes.\n(iv) Copper (Cu) is a component of plastocyanin.\n(v) Nitrogen is not required for photosynthesis because chlorophyll contains no nitrogen.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (ii), and (iv) only",
            "D": "(ii) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because chlorophyll contains four nitrogen atoms in its tetrapyrrole ring, and enzymes are nitrogenous proteins.",
        "topic": "pigments_light",
        "sub": "Minerals in Photosynthesis",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 496,
        "q": "Which of the following statements about the ATP synthase CF0-CF1 complex are correct?\n(i) CF0 is embedded in the thylakoid membrane forming a proton channel.\n(ii) CF1 protrudes on the stromal surface of the thylakoid membrane.\n(iii) Facilitated diffusion of protons through CF0 activates CF1 to synthesize ATP.\n(iv) Breakdown of the proton gradient across the thylakoid membrane provides the energy for ATP synthesis.\n(v) CF0 hydrolyzes ATP to pump protons into the stroma.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct NCERT points on ATP synthase. Statement (v) is false because CF0-CF1 synthesizes ATP during proton downhill flow; it does not pump protons in light reactions.",
        "topic": "pigments_light",
        "sub": "ATP Synthase Function",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 497,
        "q": "Consider the following statements regarding the regeneration phase of the Calvin cycle:\n(i) It is essential for the continuous operation of the Calvin cycle.\n(ii) It requires 1 molecule of ATP per RuBP regenerated.\n(iii) Out of every 6 triose phosphates formed, 5 are utilized in the regeneration of 3 RuBP molecules.\n(iv) It produces 1 molecule of glucose directly in the regeneration step.\n(v) Phosphoribulokinase (PRK) catalyzes the phosphorylation of ribulose-5-phosphate to RuBP.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i) and (v) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (v) are correct. Statement (iv) is false because glucose is formed by condensation of exported triose phosphates, not in the regeneration phase.",
        "topic": "c3_c4",
        "sub": "Regeneration Phase Details",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 498,
        "q": "Read the following statements regarding the differences between cyclic and non-cyclic photophosphorylation:\n(i) Non-cyclic involves both PS I and PS II; cyclic involves only PS I.\n(ii) Non-cyclic produces ATP and NADPH; cyclic produces ATP only.\n(iii) Non-cyclic involves photolysis of water and oxygen evolution; cyclic involves neither.\n(iv) Non-cyclic occurs in grana thylakoids; cyclic occurs predominantly in stroma lamellae.\n(v) Non-cyclic operates with electrons returning to the original reaction centre.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct NCERT comparative points. Statement (v) is false because electrons do not return to the original donor in non-cyclic flow (they end up in NADPH).",
        "topic": "pigments_light",
        "sub": "Photophosphorylation Comparison",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 499,
        "q": "Which of the following statements about photosynthesis in C4 plants are correct?\n(i) Kranz anatomy ensures high CO2 concentration around RuBisCO.\n(ii) Primary carboxylation in mesophyll is catalyzed by PEPcase to form OAA.\n(iii) Decarboxylation of C4 acid in bundle sheath releases CO2 and pyruvate.\n(iv) Pyruvate returns to mesophyll where it is converted to PEP using 2 ATP equivalents.\n(v) Bundle sheath chloroplasts contain large grana and split water actively.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because bundle sheath chloroplasts in C4 plants are typically agranal with minimal PS II activity.",
        "topic": "c3_c4",
        "sub": "C4 Pathway Integration",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 500,
        "q": "Read the following statements summarizing the fundamental principles of photosynthesis:\n(i) Photosynthesis is an enzyme-mediated anabolic redox process utilizing light energy to synthesize organic compounds.\n(ii) In oxygenic photosynthesis, water is oxidized to molecular oxygen and carbon dioxide is reduced to carbohydrates.\n(iii) Light reactions occur on thylakoid membranes, generating ATP and NADPH.\n(iv) Carbon fixation occurs in the stroma via the Calvin cycle in all photosynthetic plants.\n(v) C4 and CAM pathways are evolutionary adaptations that suppress photorespiration and enhance water-use efficiency.\nWhich of the above statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), (iii), and (iv) only",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are master summary statements encapsulating the core principles of plant photosynthesis.",
        "topic": "factors",
        "sub": "Photosynthesis Master Summary",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    }
]
