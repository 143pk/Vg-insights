# Photosynthesis Part 1: Q1 to Q125 (Easy)
import json

def get_part1_raw():
    return [
    {
        "q_num": 1,
        "q": "Who revealed the essential role of air in the growth of green plants using a bell jar, a candle, and a mouse in 1770?",
        "opts": {
            "A": "Joseph Priestley",
            "B": "Jan Ingenhousz",
            "C": "Julius von Sachs",
            "D": "T.W. Engelmann"
        },
        "ans": "A",
        "exp": "Joseph Priestley in 1770 performed a series of experiments showing that plants restore to the air whatever breathing animals and burning candles remove.",
        "topic": "pigments_light",
        "sub": "Historical Experiments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 2,
        "q": "Which gas was discovered by Joseph Priestley in the year 1774?",
        "opts": {
            "A": "Oxygen",
            "B": "Carbon dioxide",
            "C": "Nitrogen",
            "D": "Hydrogen"
        },
        "ans": "A",
        "exp": "Priestley discovered oxygen gas in 1774.",
        "topic": "pigments_light",
        "sub": "Historical Experiments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 3,
        "q": "Who showed that sunlight is essential to the plant process that purifies the air fouled by candles or animals, using an aquatic plant?",
        "opts": {
            "A": "Jan Ingenhousz",
            "B": "Joseph Priestley",
            "C": "Cornelius van Niel",
            "D": "Melvin Calvin"
        },
        "ans": "A",
        "exp": "Jan Ingenhousz showed that in bright sunlight, small bubbles were formed around the green parts of aquatic plants, while in the dark, they did not.",
        "topic": "pigments_light",
        "sub": "Historical Experiments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 4,
        "q": "Jan Ingenhousz identified that the small bubbles released by aquatic plants in bright sunlight were of:",
        "opts": {
            "A": "Oxygen",
            "B": "Carbon dioxide",
            "C": "Nitrogen",
            "D": "Methane"
        },
        "ans": "A",
        "exp": "Ingenhousz showed that the bubbles released by the green parts of an aquatic plant in sunlight were oxygen.",
        "topic": "pigments_light",
        "sub": "Historical Experiments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 5,
        "q": "Who provided evidence for the production of glucose when plants grow, and noted that glucose is usually stored as starch?",
        "opts": {
            "A": "Julius von Sachs",
            "B": "T.W. Engelmann",
            "C": "Cornelius van Niel",
            "D": "Jan Ingenhousz"
        },
        "ans": "A",
        "exp": "Julius von Sachs in 1854 provided evidence that glucose is produced during plant growth and stored as starch.",
        "topic": "pigments_light",
        "sub": "Historical Experiments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 6,
        "q": "Who described the first action spectrum of photosynthesis using a prism, green alga Cladophora, and aerobic bacteria?",
        "opts": {
            "A": "T.W. Engelmann",
            "B": "Julius von Sachs",
            "C": "Joseph Priestley",
            "D": "Cornelius van Niel"
        },
        "ans": "A",
        "exp": "T.W. Engelmann used a prism to split light into spectral components and illuminated Cladophora placed in a suspension of aerobic bacteria.",
        "topic": "pigments_light",
        "sub": "Historical Experiments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 7,
        "q": "In Engelmann's experiment, aerobic bacteria accumulated mainly in the regions of:",
        "opts": {
            "A": "Blue and red light",
            "B": "Green and yellow light",
            "C": "Orange and violet light",
            "D": "Infrared and ultraviolet light"
        },
        "ans": "A",
        "exp": "Bacteria accumulated mainly in the blue and red light regions of the split spectrum where maximum oxygen was evolved.",
        "topic": "pigments_light",
        "sub": "Historical Experiments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 8,
        "q": "A milestone contribution showing that photosynthesis is essentially a light-dependent reaction in which hydrogen reduces carbon dioxide was made by:",
        "opts": {
            "A": "Cornelius van Niel",
            "B": "Melvin Calvin",
            "C": "T.W. Engelmann",
            "D": "Peter Mitchell"
        },
        "ans": "A",
        "exp": "Cornelius van Niel, based on his studies on purple and green sulphur bacteria, demonstrated that photosynthesis is a light-dependent redox reaction.",
        "topic": "pigments_light",
        "sub": "Historical Experiments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 9,
        "q": "In purple and green sulphur bacteria, the hydrogen donor during photosynthesis is:",
        "opts": {
            "A": "H2S",
            "B": "H2O",
            "C": "CH4",
            "D": "NH3"
        },
        "ans": "A",
        "exp": "Purple and green sulphur bacteria use H2S as the hydrogen donor, releasing sulphur or sulphate instead of oxygen.",
        "topic": "pigments_light",
        "sub": "Historical Experiments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 10,
        "q": "The oxygen evolved during green plant photosynthesis comes from:",
        "opts": {
            "A": "Water (H2O)",
            "B": "Carbon dioxide (CO2)",
            "C": "Glucose (C6H12O6)",
            "D": "PGA"
        },
        "ans": "A",
        "exp": "Van Niel inferred and isotopic studies with 18O proved that O2 evolved by green plants comes from H2O, not from CO2.",
        "topic": "pigments_light",
        "sub": "Historical Experiments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 11,
        "q": "Which isotope was used by Ruben, Kamen and coworkers to prove that oxygen released in photosynthesis originates from water?",
        "opts": {
            "A": "18O (heavy isotope)",
            "B": "14C",
            "C": "32P",
            "D": "35S"
        },
        "ans": "A",
        "exp": "The heavy non-radioactive isotope of oxygen, 18O, was used to confirm water as the source of photosynthetic O2.",
        "topic": "pigments_light",
        "sub": "Historical Experiments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 12,
        "q": "In green plants, photosynthesis takes place primarily in the:",
        "opts": {
            "A": "Mesophyll cells of leaves",
            "B": "Epidermal cells of stem",
            "C": "Cortical cells of roots",
            "D": "Sclerenchyma fibers"
        },
        "ans": "A",
        "exp": "Photosynthesis occurs predominantly within chloroplast-rich mesophyll cells of leaves.",
        "topic": "pigments_light",
        "sub": "Chloroplast Structure",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 13,
        "q": "Within chloroplasts, the membranous system consisting of grana and stroma lamellae is responsible for:",
        "opts": {
            "A": "Trapping light energy and synthesizing ATP and NADPH",
            "B": "Enzymatic synthesis of sugars",
            "C": "Storage of starch granules",
            "D": "Synthesis of lipid droplets only"
        },
        "ans": "A",
        "exp": "The membrane system traps light energy and synthesizes ATP and NADPH (light reaction).",
        "topic": "pigments_light",
        "sub": "Chloroplast Structure",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 14,
        "q": "The enzymatic reactions that synthesize glucose and starch take place in the chloroplast:",
        "opts": {
            "A": "Stroma",
            "B": "Thylakoid lumen",
            "C": "Intermembrane space",
            "D": "Inner membrane"
        },
        "ans": "A",
        "exp": "Enzymatic dark reactions (Calvin cycle) occur in the stroma where soluble enzymes are located.",
        "topic": "pigments_light",
        "sub": "Chloroplast Structure",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 15,
        "q": "Light reactions are also known as:",
        "opts": {
            "A": "Photochemical phase",
            "B": "Biosynthetic phase",
            "C": "Thermochemical phase",
            "D": "Carbon reduction phase"
        },
        "ans": "A",
        "exp": "Light reactions trap light and generate assimilatory power, hence called the photochemical phase.",
        "topic": "pigments_light",
        "sub": "Light Reaction",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 16,
        "q": "Dark reactions are termed as such because they:",
        "opts": {
            "A": "Are not directly light-driven but depend on the products of light reactions",
            "B": "Occur exclusively at night in complete darkness",
            "C": "Are inhibited by light",
            "D": "Do not require enzymes"
        },
        "ans": "A",
        "exp": "Dark reactions are not directly dependent on light, but depend on products of light reaction (ATP and NADPH).",
        "topic": "pigments_light",
        "sub": "Dark Reaction",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 17,
        "q": "Stacks of flattened thylakoid discs in a chloroplast are called:",
        "opts": {
            "A": "Grana",
            "B": "Stroma lamellae",
            "C": "Cristae",
            "D": "Cisternae"
        },
        "ans": "A",
        "exp": "Thylakoids are arranged in stacks like piles of coins called grana.",
        "topic": "pigments_light",
        "sub": "Chloroplast Structure",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 18,
        "q": "Flat membranous tubules connecting the thylakoids of different grana are called:",
        "opts": {
            "A": "Stroma lamellae",
            "B": "Mesosomes",
            "C": "Tonoplasts",
            "D": "Cristae"
        },
        "ans": "A",
        "exp": "Stroma lamellae are membranous tubules connecting adjacent grana in the chloroplast stroma.",
        "topic": "pigments_light",
        "sub": "Chloroplast Structure",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 19,
        "q": "A chromatographic separation of leaf pigments reveals that the color of a leaf is due to:",
        "opts": {
            "A": "Four pigments: Chlorophyll a, Chlorophyll b, Xanthophylls, and Carotenoids",
            "B": "Only one pigment: Chlorophyll a",
            "C": "Only two pigments: Chlorophyll a and b",
            "D": "Anthocyanin and carotene only"
        },
        "ans": "A",
        "exp": "Paper chromatography separates leaf pigments into chlorophyll a, chlorophyll b, xanthophylls, and carotenoids.",
        "topic": "pigments_light",
        "sub": "Pigments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 20,
        "q": "On a chromatogram, Chlorophyll a appears:",
        "opts": {
            "A": "Bright or blue green",
            "B": "Yellow green",
            "C": "Yellow",
            "D": "Yellow to yellow-orange"
        },
        "ans": "A",
        "exp": "Chlorophyll a displays a bright or blue-green color on a chromatogram.",
        "topic": "pigments_light",
        "sub": "Pigments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 21,
        "q": "On a chromatogram, Chlorophyll b appears:",
        "opts": {
            "A": "Yellow green",
            "B": "Bright green",
            "C": "Yellow orange",
            "D": "Violet blue"
        },
        "ans": "A",
        "exp": "Chlorophyll b displays a yellow-green color on paper chromatography.",
        "topic": "pigments_light",
        "sub": "Pigments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 22,
        "q": "Xanthophylls show which color on a paper chromatogram?",
        "opts": {
            "A": "Yellow",
            "B": "Blue green",
            "C": "Yellow green",
            "D": "Orange red"
        },
        "ans": "A",
        "exp": "Xanthophylls appear yellow on chromatograms.",
        "topic": "pigments_light",
        "sub": "Pigments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 23,
        "q": "Carotenoids show which color on a paper chromatogram?",
        "opts": {
            "A": "Yellow to yellow-orange",
            "B": "Blue green",
            "C": "Bright green",
            "D": "Dark red"
        },
        "ans": "A",
        "exp": "Carotenoids show yellow to yellow-orange colors on paper chromatography.",
        "topic": "pigments_light",
        "sub": "Pigments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 24,
        "q": "Which pigment is the chief pigment associated with photosynthesis?",
        "opts": {
            "A": "Chlorophyll a",
            "B": "Chlorophyll b",
            "C": "Xanthophyll",
            "D": "Carotenoid"
        },
        "ans": "A",
        "exp": "Chlorophyll a is the chief photosynthetic pigment responsible for light-driven electron transport.",
        "topic": "pigments_light",
        "sub": "Pigments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 25,
        "q": "Chlorophyll a shows maximum light absorption in which two regions of the visible spectrum?",
        "opts": {
            "A": "Blue and red regions",
            "B": "Green and yellow regions",
            "C": "Yellow and orange regions",
            "D": "Violet and ultraviolet regions"
        },
        "ans": "A",
        "exp": "Chlorophyll a absorbs maximally in the blue (430 nm) and red (660 nm) wavelengths.",
        "topic": "pigments_light",
        "sub": "Pigments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 26,
        "q": "Accessory pigments include:",
        "opts": {
            "A": "Chlorophyll b, xanthophylls, and carotenoids",
            "B": "Chlorophyll a only",
            "C": "Cytochromes and ferredoxin",
            "D": "Plastoquinone and plastocyanin"
        },
        "ans": "A",
        "exp": "Chlorophyll b, carotenoids, and xanthophylls act as accessory pigments.",
        "topic": "pigments_light",
        "sub": "Pigments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 27,
        "q": "One major function of accessory pigments is to:",
        "opts": {
            "A": "Protect chlorophyll a from photo-oxidation and widen the range of absorbed light",
            "B": "Synthesize glucose directly",
            "C": "Split water molecules directly",
            "D": "Pump protons across inner membrane"
        },
        "ans": "A",
        "exp": "Accessory pigments enable a wider range of light absorption and shield chlorophyll a from photo-oxidation.",
        "topic": "pigments_light",
        "sub": "Pigments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 28,
        "q": "The light-harvesting complex (LHC) is made up of:",
        "opts": {
            "A": "Hundreds of pigment molecules bound to proteins",
            "B": "A single chlorophyll a molecule",
            "C": "Only carotenoids and lipid droplets",
            "D": "Enzymes of Calvin cycle"
        },
        "ans": "A",
        "exp": "The antennae or LHC consists of hundreds of pigment molecules bound to proteins.",
        "topic": "pigments_light",
        "sub": "Light Reaction",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 29,
        "q": "In Photosystem I (PS I), the reaction centre chlorophyll a has an absorption peak at:",
        "opts": {
            "A": "700 nm (P700)",
            "B": "680 nm (P680)",
            "C": "600 nm (P600)",
            "D": "720 nm (P720)"
        },
        "ans": "A",
        "exp": "The reaction centre of PS I is P700 with an absorption peak at 700 nm.",
        "topic": "pigments_light",
        "sub": "Light Reaction",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 30,
        "q": "In Photosystem II (PS II), the reaction centre chlorophyll a has an absorption peak at:",
        "opts": {
            "A": "680 nm (P680)",
            "B": "700 nm (P700)",
            "C": "650 nm (P650)",
            "D": "540 nm (P540)"
        },
        "ans": "A",
        "exp": "The reaction centre of PS II is P680 with an absorption peak at 680 nm.",
        "topic": "pigments_light",
        "sub": "Light Reaction",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 31,
        "q": "Photosystem I and Photosystem II are named according to:",
        "opts": {
            "A": "The sequence of their discovery",
            "B": "The sequence in which they function in electron transport",
            "C": "Their molecular weights",
            "D": "The wavelength of light they absorb"
        },
        "ans": "A",
        "exp": "The photosystems are numbered in the order of their discovery, not in the sequence of electron transfer.",
        "topic": "pigments_light",
        "sub": "Photosystem Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 32,
        "q": "In PS II, when P680 absorbs 680 nm red light, electrons become excited and jump to:",
        "opts": {
            "A": "An electron acceptor with a high redox potential",
            "B": "Photosystem I directly",
            "C": "Water molecule",
            "D": "Cytochrome b6f directly"
        },
        "ans": "A",
        "exp": "Excited electrons from P680 are picked up by a primary electron acceptor.",
        "topic": "pigments_light",
        "sub": "Z-Scheme",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 33,
        "q": "The movement of electrons in the Z-scheme from PS II downhill through an electron transport chain to PS I is driven by:",
        "opts": {
            "A": "Oxidation-reduction (redox) potential gradient",
            "B": "Hydrostatic pressure gradient",
            "C": "ATP hydrolysis",
            "D": "Osmotic potential"
        },
        "ans": "A",
        "exp": "Downhill electron movement occurs according to an oxidation-reduction or redox potential scale.",
        "topic": "pigments_light",
        "sub": "Z-Scheme",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 34,
        "q": "The electrons removed from PS II are continuously replaced by electrons derived from:",
        "opts": {
            "A": "The splitting of water",
            "B": "Photosystem I",
            "C": "Atmospheric oxygen",
            "D": "Glucose"
        },
        "ans": "A",
        "exp": "Splitting of water provides electrons to continuously replace those excited and lost from PS II.",
        "topic": "pigments_light",
        "sub": "Photolysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 35,
        "q": "The water splitting complex (Oxygen Evolving Complex) is physically associated with:",
        "opts": {
            "A": "Photosystem II on the inner side of the thylakoid membrane",
            "B": "Photosystem I on the stroma side",
            "C": "Cytochrome b6f complex",
            "D": "CF0-CF1 ATP synthase"
        },
        "ans": "A",
        "exp": "The water splitting complex is located on the inner side of the thylakoid membrane associated with PS II.",
        "topic": "pigments_light",
        "sub": "Photolysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 36,
        "q": "Which mineral elements are essentially required for the photolysis of water during photosynthesis?",
        "opts": {
            "A": "Manganese (Mn) and Chlorine (Cl)",
            "B": "Iron (Fe) and Copper (Cu)",
            "C": "Magnesium (Mg) and Zinc (Zn)",
            "D": "Molybdenum (Mo) and Boron (B)"
        },
        "ans": "A",
        "exp": "Mn2+ and Cl- are cofactors essential for water splitting in the oxygen-evolving complex.",
        "topic": "pigments_light",
        "sub": "Photolysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 37,
        "q": "The photolysis of two water molecules releases:",
        "opts": {
            "A": "4 H+, 4 electrons, and 1 O2 molecule",
            "B": "2 H+, 2 electrons, and 1 O2 molecule",
            "C": "2 H+, 4 electrons, and 2 O2 molecules",
            "D": "4 H+, 2 electrons, and 1 O2 molecule"
        },
        "ans": "A",
        "exp": "2 H2O -> 4 H+ + O2 + 4 e-.",
        "topic": "pigments_light",
        "sub": "Photolysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 38,
        "q": "The protons and oxygen produced by photolysis of water are released into the:",
        "opts": {
            "A": "Lumen of the thylakoid",
            "B": "Stroma of the chloroplast",
            "C": "Intermembrane space",
            "D": "Cytosol"
        },
        "ans": "A",
        "exp": "Protons and O2 produced by water splitting are released into the thylakoid lumen.",
        "topic": "pigments_light",
        "sub": "Photolysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 39,
        "q": "When both Photosystem I and Photosystem II work in series, the process is known as:",
        "opts": {
            "A": "Non-cyclic photophosphorylation",
            "B": "Cyclic photophosphorylation",
            "C": "Substrate-level phosphorylation",
            "D": "Oxidative phosphorylation"
        },
        "ans": "A",
        "exp": "When both photosystems operate in series via the Z-scheme, it is non-cyclic photophosphorylation.",
        "topic": "pigments_light",
        "sub": "Photophosphorylation",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 40,
        "q": "Non-cyclic photophosphorylation results in the formation of:",
        "opts": {
            "A": "Both ATP and NADPH",
            "B": "ATP only",
            "C": "NADPH only",
            "D": "Glucose directly"
        },
        "ans": "A",
        "exp": "Non-cyclic electron flow produces assimilatory power: both ATP and NADPH + H+.",
        "topic": "pigments_light",
        "sub": "Photophosphorylation",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 41,
        "q": "When only PS I is functional, the electron is circulated back to the reaction centre and generates:",
        "opts": {
            "A": "ATP only",
            "B": "Both ATP and NADPH",
            "C": "NADPH only",
            "D": "Oxygen only"
        },
        "ans": "A",
        "exp": "Cyclic photophosphorylation produces only ATP; neither NADPH nor O2 is produced.",
        "topic": "pigments_light",
        "sub": "Photophosphorylation",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 42,
        "q": "Cyclic photophosphorylation typically occurs in the:",
        "opts": {
            "A": "Stroma lamellae membranes",
            "B": "Appressed regions of grana thylakoids",
            "C": "Outer chloroplast membrane",
            "D": "Inner chloroplast membrane"
        },
        "ans": "A",
        "exp": "Stroma lamellae lack PS II and NADP reductase enzyme, so only cyclic photophosphorylation takes place there.",
        "topic": "pigments_light",
        "sub": "Photophosphorylation",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 43,
        "q": "Which of the following components is absent in the stroma lamellae membranes?",
        "opts": {
            "A": "PS II and NADP reductase",
            "B": "PS I only",
            "C": "ATP synthase",
            "D": "Chlorophyll a"
        },
        "ans": "A",
        "exp": "Stroma lamellae membranes lack PS II as well as NADP reductase enzyme.",
        "topic": "pigments_light",
        "sub": "Stroma Lamellae",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 44,
        "q": "Cyclic photophosphorylation is favoured when:",
        "opts": {
            "A": "Light of wavelengths beyond 680 nm is available",
            "B": "CO2 concentration is excessively high",
            "C": "Oxygen concentration is zero",
            "D": "Temperature is freezing"
        },
        "ans": "A",
        "exp": "Light of wavelength >680 nm selectively excites PS I (P700), favoring cyclic electron flow.",
        "topic": "pigments_light",
        "sub": "Photophosphorylation",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 45,
        "q": "The synthesis of ATP from ADP and inorganic phosphate in chloroplasts is called:",
        "opts": {
            "A": "Photophosphorylation",
            "B": "Oxidative phosphorylation",
            "C": "Substrate phosphorylation",
            "D": "Decarboxylation"
        },
        "ans": "A",
        "exp": "Photophosphorylation is the synthesis of ATP from ADP and Pi using light energy in chloroplasts.",
        "topic": "pigments_light",
        "sub": "Photophosphorylation",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 46,
        "q": "The chemiosmotic hypothesis to explain ATP synthesis was proposed by:",
        "opts": {
            "A": "Peter Mitchell",
            "B": "Melvin Calvin",
            "C": "Robert Hill",
            "D": "Robin Hill"
        },
        "ans": "A",
        "exp": "Peter Mitchell proposed the chemiosmotic mechanism coupling proton gradients to ATP synthesis.",
        "topic": "pigments_light",
        "sub": "Chemiosmosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 47,
        "q": "During light reactions, protons accumulate in high concentration inside the:",
        "opts": {
            "A": "Thylakoid lumen",
            "B": "Stroma",
            "C": "Peroxisome",
            "D": "Mitochondrial matrix"
        },
        "ans": "A",
        "exp": "Protons accumulate inside the thylakoid lumen, creating a high proton concentration (low pH).",
        "topic": "pigments_light",
        "sub": "Chemiosmosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 48,
        "q": "Which of the following processes contributes to proton accumulation in the thylakoid lumen?",
        "opts": {
            "A": "Photolysis of water inside the lumen",
            "B": "Reduction of NADP+ on the lumen side",
            "C": "Active transport of protons out of lumen",
            "D": "Synthesis of ATP in the lumen"
        },
        "ans": "A",
        "exp": "Water splitting occurs on the lumenal face, releasing H+ directly into the thylakoid lumen.",
        "topic": "pigments_light",
        "sub": "Chemiosmosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 49,
        "q": "As electrons move through photosystems, protons are pumped from the stroma to the lumen by:",
        "opts": {
            "A": "Cytochrome b6f / plastoquinone carrier mechanism",
            "B": "NADP reductase directly",
            "C": "RuBisCO",
            "D": "Water splitting complex"
        },
        "ans": "A",
        "exp": "Plastoquinone removes protons from the stroma when accepting electrons and releases them into the lumen.",
        "topic": "pigments_light",
        "sub": "Chemiosmosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 50,
        "q": "The enzyme NADP reductase is located on the:",
        "opts": {
            "A": "Stroma side of the thylakoid membrane",
            "B": "Lumen side of the thylakoid membrane",
            "C": "Outer chloroplast membrane",
            "D": "Inner chloroplast membrane"
        },
        "ans": "A",
        "exp": "NADP reductase is situated on the stromal side of the thylakoid membrane.",
        "topic": "pigments_light",
        "sub": "Light Reaction",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 51,
        "q": "Removal of protons from the stroma by NADP reductase contributes to:",
        "opts": {
            "A": "Increasing the proton gradient across the thylakoid membrane",
            "B": "Decreasing lumen proton concentration",
            "C": "Dissolving the proton gradient",
            "D": "Destroying the ATP synthase"
        },
        "ans": "A",
        "exp": "Consuming H+ in the stroma for NADPH formation steepens the proton gradient across the membrane.",
        "topic": "pigments_light",
        "sub": "Chemiosmosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 52,
        "q": "In chloroplasts, the thylakoid lumen becomes:",
        "opts": {
            "A": "Acidic (low pH)",
            "B": "Alkaline (high pH)",
            "C": "Neutral (pH 7)",
            "D": "Isotonic to cytosol"
        },
        "ans": "A",
        "exp": "Accumulation of protons drops the pH in the lumen, making it distinctly acidic.",
        "topic": "pigments_light",
        "sub": "Chemiosmosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 53,
        "q": "ATP synthase consists of two parts: CF0 and CF1. The CF0 part:",
        "opts": {
            "A": "Is embedded in the thylakoid membrane and forms a transmembrane proton channel",
            "B": "Protrudes on the outer surface of stroma",
            "C": "Catalyzes ATP hydrolysis in lumen",
            "D": "Splits water molecules"
        },
        "ans": "A",
        "exp": "CF0 is embedded in the thylakoid membrane and acts as a facilitated diffusion channel for protons.",
        "topic": "pigments_light",
        "sub": "ATP Synthase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 54,
        "q": "The CF1 part of ATP synthase:",
        "opts": {
            "A": "Protrudes into the stroma and contains the catalytic site for ATP synthesis",
            "B": "Is buried in the lipid bilayer",
            "C": "Pumps protons against gradient",
            "D": "Binds chlorophyll pigments"
        },
        "ans": "A",
        "exp": "CF1 faces the stroma and synthesizes ATP from ADP + Pi as protons flow through CF0.",
        "topic": "pigments_light",
        "sub": "ATP Synthase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 55,
        "q": "Breakdown of the proton gradient across the thylakoid membrane occurs via facilitated diffusion through:",
        "opts": {
            "A": "The CF0 channel of ATP synthase",
            "B": "Lipid bilayer directly",
            "C": "Cytochrome b6f",
            "D": "NADP reductase"
        },
        "ans": "A",
        "exp": "Protons traverse the membrane down their electrochemical gradient through CF0.",
        "topic": "pigments_light",
        "sub": "ATP Synthase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 56,
        "q": "The energy released by breakdown of the proton gradient causes conformational changes in:",
        "opts": {
            "A": "CF1 particle of ATP synthase",
            "B": "CF0 channel",
            "C": "Plastoquinone",
            "D": "Ferredoxin"
        },
        "ans": "A",
        "exp": "Proton flow drives conformational changes in CF1, activating catalytic synthesis of ATP.",
        "topic": "pigments_light",
        "sub": "ATP Synthase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 57,
        "q": "The primary electron acceptor from PS II (P680) is:",
        "opts": {
            "A": "Pheophytin",
            "B": "Plastocyanin",
            "C": "Ferredoxin",
            "D": "Cytochrome c"
        },
        "ans": "A",
        "exp": "Excited electrons from P680 are first transferred to pheophytin, a chlorophyll-related molecule lacking Mg.",
        "topic": "pigments_light",
        "sub": "Light Reaction",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 58,
        "q": "The mobile copper-containing electron carrier that transfers electrons from cytochrome b6f to PS I is:",
        "opts": {
            "A": "Plastocyanin",
            "B": "Plastoquinone",
            "C": "Ferredoxin",
            "D": "Pheophytin"
        },
        "ans": "A",
        "exp": "Plastocyanin is a small, water-soluble copper protein mediating electron transfer from cyt b6f to P700.",
        "topic": "pigments_light",
        "sub": "Light Reaction",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 59,
        "q": "The iron-sulfur protein that transfers electrons to NADP+ via FNR is:",
        "opts": {
            "A": "Ferredoxin",
            "B": "Plastoquinone",
            "C": "Plastocyanin",
            "D": "Cytochrome b6"
        },
        "ans": "A",
        "exp": "Ferredoxin receives electrons from PS I and transfers them to NADP+ via ferredoxin-NADP+ reductase.",
        "topic": "pigments_light",
        "sub": "Light Reaction",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 60,
        "q": "The assimilatory power generated in the light reaction consists of:",
        "opts": {
            "A": "ATP and NADPH",
            "B": "ATP and NADH",
            "C": "GTP and FADH2",
            "D": "Glucose and starch"
        },
        "ans": "A",
        "exp": "ATP and NADPH generated in the photochemical phase constitute assimilatory power for CO2 fixation.",
        "topic": "pigments_light",
        "sub": "Assimilatory Power",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 61,
        "q": "During non-cyclic electron transport, the sequence of electron flow is:",
        "opts": {
            "A": "H2O -> PS II -> Cyt b6f -> PS I -> NADP+",
            "B": "PS I -> PS II -> Cyt b6f -> NADP+",
            "C": "NADP+ -> PS I -> PS II -> H2O",
            "D": "H2O -> PS I -> PS II -> NADP+"
        },
        "ans": "A",
        "exp": "Electrons flow from water to PS II, then to cyt b6f, then to PS I, and finally to NADP+.",
        "topic": "pigments_light",
        "sub": "Z-Scheme",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 62,
        "q": "Which photosystem is responsible for photolysis of water?",
        "opts": {
            "A": "Photosystem II",
            "B": "Photosystem I",
            "C": "Both PS I and PS II equally",
            "D": "Neither photosystem"
        },
        "ans": "A",
        "exp": "PS II is associated with the oxygen-evolving complex responsible for water photolysis.",
        "topic": "pigments_light",
        "sub": "Photolysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 63,
        "q": "If a green plant is illuminated with monochromatic light of 710 nm, the major photosynthetic product will be:",
        "opts": {
            "A": "ATP only",
            "B": "ATP and NADPH",
            "C": "Oxygen and glucose",
            "D": "NADPH only"
        },
        "ans": "A",
        "exp": "Light of 710 nm excites only PS I (P700), driving cyclic photophosphorylation to produce ATP only.",
        "topic": "pigments_light",
        "sub": "Photophosphorylation",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 64,
        "q": "In chloroplasts, the highest concentration of protons is found in:",
        "opts": {
            "A": "Lumen of thylakoids",
            "B": "Stroma",
            "C": "Intermembrane space",
            "D": "Cytosol"
        },
        "ans": "A",
        "exp": "Protons are pumped into and generated inside the thylakoid lumen, reaching high concentration.",
        "topic": "pigments_light",
        "sub": "Chemiosmosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 65,
        "q": "What happens to the oxygen released during photolysis of water?",
        "opts": {
            "A": "Diffuses out of the chloroplast as molecular oxygen (O2)",
            "B": "Combines with CO2 in stroma",
            "C": "Reduces NADP+ to NADPH",
            "D": "Re-enters the water splitting complex"
        },
        "ans": "A",
        "exp": "Molecular oxygen (O2) diffuses out of the chloroplast into the intercellular spaces and leaves through stomata.",
        "topic": "pigments_light",
        "sub": "Photolysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 66,
        "q": "Which of the following is NOT required for chemiosmosis in chloroplasts?",
        "opts": {
            "A": "Outer membrane proton pump",
            "B": "A membrane",
            "C": "A proton pump",
            "D": "A proton gradient and ATP synthase"
        },
        "ans": "A",
        "exp": "Chemiosmosis requires the thylakoid membrane, a proton pump, a proton gradient, and ATP synthase.",
        "topic": "pigments_light",
        "sub": "Chemiosmosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 67,
        "q": "The movement of electrons in cyclic photophosphorylation involves:",
        "opts": {
            "A": "PS I -> Electron acceptor -> Cytochrome complex -> Plastocyanin -> PS I",
            "B": "PS II -> PS I -> PS II",
            "C": "PS I -> NADP+ -> PS I",
            "D": "H2O -> PS I -> PS II"
        },
        "ans": "A",
        "exp": "Cyclic flow passes electrons from P700 to acceptor, down cyt complex and plastocyanin, returning to P700.",
        "topic": "pigments_light",
        "sub": "Cyclic Photophosphorylation",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 68,
        "q": "How many electrons are required to reduce one molecule of NADP+ to NADPH?",
        "opts": {
            "A": "2 electrons",
            "B": "1 electron",
            "C": "4 electrons",
            "D": "3 electrons"
        },
        "ans": "A",
        "exp": "Reduction of NADP+ to NADPH + H+ requires 2 electrons and 2 protons.",
        "topic": "pigments_light",
        "sub": "Light Reaction",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 69,
        "q": "The pH of the thylakoid lumen during active photosynthesis can drop to approximately:",
        "opts": {
            "A": "4.5 to 5.0",
            "B": "7.0 to 7.5",
            "C": "8.0 to 8.5",
            "D": "1.0 to 2.0"
        },
        "ans": "A",
        "exp": "Lumen pH drops to around 4.5 to 5.0 due to heavy proton accumulation, while stroma pH is around 8.",
        "topic": "pigments_light",
        "sub": "Chemiosmosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 70,
        "q": "The Z-scheme name is derived from:",
        "opts": {
            "A": "The characteristic zigzag shape on the redox potential scale",
            "B": "The scientist Z. Scheme who discovered it",
            "C": "The z-axis alignment of thylakoids",
            "D": "Zinc cofactor in PS II"
        },
        "ans": "A",
        "exp": "The electron transport diagram forms a zigzag shape when carriers are arranged by redox potential.",
        "topic": "pigments_light",
        "sub": "Z-Scheme",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 71,
        "q": "Which of the following is true for the dark reaction of photosynthesis?",
        "opts": {
            "A": "It occurs in the stroma and is enzymatic",
            "B": "It occurs only in the dark at midnight",
            "C": "It does not need ATP or NADPH",
            "D": "It occurs inside the thylakoid lumen"
        },
        "ans": "A",
        "exp": "The dark reaction occurs in the stroma and consists of temperature-sensitive enzymatic steps.",
        "topic": "pigments_light",
        "sub": "Dark Reaction",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 72,
        "q": "The radioactive isotope used by Melvin Calvin to elucidate the pathway of carbon fixation was:",
        "opts": {
            "A": "14C",
            "B": "12C",
            "C": "18O",
            "D": "32P"
        },
        "ans": "A",
        "exp": "Melvin Calvin used 14C radioactive carbon in algal photosynthesis studies.",
        "topic": "pigments_light",
        "sub": "Calvin Cycle",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 73,
        "q": "Melvin Calvin performed his experiments on which organism?",
        "opts": {
            "A": "Chlorella (green alga)",
            "B": "Pisum sativum",
            "C": "Hydrilla",
            "D": "Nostoc"
        },
        "ans": "A",
        "exp": "Calvin worked with the unicellular green alga Chlorella.",
        "topic": "pigments_light",
        "sub": "Calvin Cycle",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 74,
        "q": "The first stable product of CO2 fixation identified by Melvin Calvin was:",
        "opts": {
            "A": "3-phosphoglyceric acid (3-PGA)",
            "B": "Oxaloacetic acid (OAA)",
            "C": "Phosphoenolpyruvate (PEP)",
            "D": "Ribulose-1,5-bisphosphate (RuBP)"
        },
        "ans": "A",
        "exp": "Calvin discovered that the first stable product was the 3-carbon organic acid, 3-PGA.",
        "topic": "pigments_light",
        "sub": "Calvin Cycle",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 75,
        "q": "Plants in which the first stable product of CO2 fixation is a 3-carbon compound are called:",
        "opts": {
            "A": "C3 plants",
            "B": "C4 plants",
            "C": "CAM plants",
            "D": "C2 plants"
        },
        "ans": "A",
        "exp": "Plants where the first product is 3-PGA (3C) are called C3 plants.",
        "topic": "pigments_light",
        "sub": "Calvin Cycle",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 76,
        "q": "The primary CO2 acceptor molecule in the C3 pathway (Calvin cycle) is a 5-carbon ketose sugar called:",
        "opts": {
            "A": "Ribulose-1,5-bisphosphate (RuBP)",
            "B": "Phosphoenolpyruvate (PEP)",
            "C": "Ribose-5-phosphate",
            "D": "Glucose-6-phosphate"
        },
        "ans": "A",
        "exp": "RuBP is a 5-carbon ketose sugar that serves as the primary acceptor of CO2 in C3 plants.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 77,
        "q": "The enzyme that catalyzes the carboxylation of RuBP is:",
        "opts": {
            "A": "RuBP carboxylase-oxygenase (RuBisCO)",
            "B": "PEP carboxylase",
            "C": "Carbonic anhydrase",
            "D": "Pyruvate kinase"
        },
        "ans": "A",
        "exp": "RuBisCO catalyzes the addition of CO2 to RuBP to form two molecules of 3-PGA.",
        "topic": "c3_c4",
        "sub": "RuBisCO",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 78,
        "q": "Which of the following is the most abundant protein in the whole biosphere?",
        "opts": {
            "A": "RuBisCO",
            "B": "Collagen",
            "C": "Myosin",
            "D": "Hemoglobin"
        },
        "ans": "A",
        "exp": "RuBisCO is recognized as the most abundant enzyme/protein in the biosphere.",
        "topic": "c3_c4",
        "sub": "RuBisCO",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 79,
        "q": "The three main stages of the Calvin cycle in sequential order are:",
        "opts": {
            "A": "Carboxylation, Reduction, and Regeneration",
            "B": "Reduction, Carboxylation, and Regeneration",
            "C": "Regeneration, Reduction, and Carboxylation",
            "D": "Carboxylation, Regeneration, and Reduction"
        },
        "ans": "A",
        "exp": "The Calvin cycle proceeds through Carboxylation, Reduction, and Regeneration.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Stages",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 80,
        "q": "Which stage of the Calvin cycle is the most crucial, where CO2 is fixed into a stable organic intermediate?",
        "opts": {
            "A": "Carboxylation",
            "B": "Reduction",
            "C": "Regeneration",
            "D": "Phosphorylation"
        },
        "ans": "A",
        "exp": "Carboxylation is the most crucial step where CO2 is utilized for the carboxylation of RuBP.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Stages",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 81,
        "q": "During the reduction stage of the Calvin cycle, how many molecules of ATP and NADPH are consumed per CO2 molecule fixed?",
        "opts": {
            "A": "2 ATP and 2 NADPH",
            "B": "3 ATP and 2 NADPH",
            "C": "1 ATP and 1 NADPH",
            "D": "2 ATP and 1 NADPH"
        },
        "ans": "A",
        "exp": "Reduction involves utilization of 2 molecules of ATP for phosphorylation and 2 of NADPH for reduction per CO2.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Stages",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 82,
        "q": "To make one molecule of glucose, how many turns of the Calvin cycle are required?",
        "opts": {
            "A": "6 turns",
            "B": "1 turn",
            "C": "3 turns",
            "D": "12 turns"
        },
        "ans": "A",
        "exp": "Six turns of the cycle are required to fix 6 CO2 molecules into one 6-carbon glucose molecule.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Numericals",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 83,
        "q": "For the synthesis of one molecule of glucose via the Calvin cycle, the total number of ATP and NADPH molecules consumed is:",
        "opts": {
            "A": "18 ATP and 12 NADPH",
            "B": "12 ATP and 18 NADPH",
            "C": "6 ATP and 6 NADPH",
            "D": "36 ATP and 24 NADPH"
        },
        "ans": "A",
        "exp": "6 CO2 x (3 ATP + 2 NADPH) = 18 ATP and 12 NADPH per glucose molecule synthesized.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Numericals",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 84,
        "q": "During the regeneration stage of the Calvin cycle, how many ATP molecules are required for phosphorylation to form one RuBP?",
        "opts": {
            "A": "1 ATP",
            "B": "2 ATP",
            "C": "3 ATP",
            "D": "6 ATP"
        },
        "ans": "A",
        "exp": "Regeneration of each RuBP molecule consumes 1 ATP.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Stages",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 85,
        "q": "In C4 plants, the first stable product of CO2 fixation is a 4-carbon organic acid called:",
        "opts": {
            "A": "Oxaloacetic acid (OAA)",
            "B": "3-phosphoglyceric acid (PGA)",
            "C": "Malic acid",
            "D": "Phosphoenolpyruvate (PEP)"
        },
        "ans": "A",
        "exp": "In C4 plants, the primary fixation of CO2 produces the 4-carbon acid oxaloacetate (OAA).",
        "topic": "c3_c4",
        "sub": "C4 Pathway",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 86,
        "q": "The primary CO2 acceptor in C4 plants is:",
        "opts": {
            "A": "Phosphoenolpyruvate (PEP)",
            "B": "RuBP",
            "C": "OAA",
            "D": "Pyruvate"
        },
        "ans": "A",
        "exp": "The primary CO2 acceptor in C4 mesophyll cells is the 3-carbon molecule phosphoenolpyruvate (PEP).",
        "topic": "c3_c4",
        "sub": "C4 Pathway",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 87,
        "q": "The enzyme responsible for the primary fixation of CO2 in mesophyll cells of C4 plants is:",
        "opts": {
            "A": "PEP carboxylase (PEPcase)",
            "B": "RuBisCO",
            "C": "Carbonic anhydrase",
            "D": "Malic dehydrogenase"
        },
        "ans": "A",
        "exp": "PEPcase catalyzes the carboxylation of PEP to form OAA in mesophyll cells.",
        "topic": "c3_c4",
        "sub": "C4 Pathway",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 88,
        "q": "Mesophyll cells of C4 plants lack which key enzyme?",
        "opts": {
            "A": "RuBisCO",
            "B": "PEPcase",
            "C": "Carbonic anhydrase",
            "D": "Pyruvate kinase"
        },
        "ans": "A",
        "exp": "Mesophyll cells of C4 plants contain PEPcase but completely lack RuBisCO.",
        "topic": "factors",
        "sub": "C4 Anatomy",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 89,
        "q": "The specialized ring-like anatomy around vascular bundles in leaves of C4 plants is called:",
        "opts": {
            "A": "Kranz anatomy",
            "B": "Anomalous anatomy",
            "C": "Isobilateral anatomy",
            "D": "Dorsiventral anatomy"
        },
        "ans": "A",
        "exp": "Kranz anatomy ('wreath' arrangement of bundle sheath cells) is diagnostic of C4 plants.",
        "topic": "c3_c4",
        "sub": "Kranz Anatomy",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 90,
        "q": "Which of the following plants exhibit Kranz anatomy and the C4 photosynthetic pathway?",
        "opts": {
            "A": "Maize and sugarcane",
            "B": "Wheat and rice",
            "C": "Pea and gram",
            "D": "Mango and potato"
        },
        "ans": "A",
        "exp": "Maize, sugarcane, and sorghum are classic C4 plants showing Kranz anatomy.",
        "topic": "c3_c4",
        "sub": "C4 Examples",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 91,
        "q": "Bundle sheath cells of C4 plants are characterized by:",
        "opts": {
            "A": "Large chloroplasts without grana (agranal), thick walls impervious to gases, and no intercellular spaces",
            "B": "Thin walls, intercellular spaces, and small chloroplasts",
            "C": "Absence of chloroplasts",
            "D": "High stomatal density"
        },
        "ans": "A",
        "exp": "Bundle sheath cells possess thick walls, no intercellular spaces, and numerous agranal chloroplasts rich in RuBisCO.",
        "topic": "c3_c4",
        "sub": "Kranz Anatomy",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 92,
        "q": "In C4 plants, decarboxylation of 4-carbon malic acid occurs in the:",
        "opts": {
            "A": "Bundle sheath cells",
            "B": "Mesophyll cells",
            "C": "Epidermal cells",
            "D": "Xylem vessels"
        },
        "ans": "A",
        "exp": "Malic acid is transported to bundle sheath cells where it is decarboxylated to release CO2 and pyruvate.",
        "topic": "c3_c4",
        "sub": "C4 Pathway",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 93,
        "q": "The released CO2 in the bundle sheath cells of C4 plants enters which pathway?",
        "opts": {
            "A": "Calvin C3 cycle",
            "B": "Glycolytic pathway",
            "C": "Fermentation",
            "D": "CAM pathway"
        },
        "ans": "A",
        "exp": "The released CO2 is fixed by RuBisCO in the bundle sheath cells via the Calvin cycle.",
        "topic": "c3_c4",
        "sub": "C4 Pathway",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 94,
        "q": "The 3-carbon pyruvate formed in bundle sheath cells is transported back to mesophyll cells where it is converted to:",
        "opts": {
            "A": "Phosphoenolpyruvate (PEP)",
            "B": "RuBP",
            "C": "Glucose",
            "D": "Citric acid"
        },
        "ans": "A",
        "exp": "Pyruvate returns to mesophyll cells to regenerate PEP, consuming 2 ATP equivalents (ATP -> AMP + PPi).",
        "topic": "c3_c4",
        "sub": "C4 Pathway",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 95,
        "q": "Total number of ATP molecules required to synthesize one molecule of glucose in a C4 plant is:",
        "opts": {
            "A": "30 ATP",
            "B": "18 ATP",
            "C": "12 ATP",
            "D": "36 ATP"
        },
        "ans": "A",
        "exp": "C4 plants consume 30 ATP per glucose molecule (18 ATP for Calvin cycle + 12 ATP for PEP regeneration).",
        "topic": "c3_c4",
        "sub": "C4 Numericals",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 96,
        "q": "Why are C4 plants photosynthetically more efficient than C3 plants at higher temperatures and light intensities?",
        "opts": {
            "A": "They avoid photorespiration by concentrating CO2 around RuBisCO",
            "B": "They do not use ATP in dark reactions",
            "C": "They have no RuBisCO enzyme",
            "D": "They split water in bundle sheath cells"
        },
        "ans": "A",
        "exp": "C4 plants pump CO2 into bundle sheath cells, maintaining high CO2 around RuBisCO and preventing photorespiration.",
        "topic": "c3_c4",
        "sub": "C4 Significance",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 97,
        "q": "Photorespiration is initiated when RuBisCO binds with:",
        "opts": {
            "A": "Oxygen (O2)",
            "B": "Carbon dioxide (CO2)",
            "C": "Water (H2O)",
            "D": "Nitrogen (N2)"
        },
        "ans": "A",
        "exp": "When RuBisCO binds O2 instead of CO2, it acts as an oxygenase, initiating photorespiration.",
        "topic": "c3_c4",
        "sub": "Photorespiration",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 98,
        "q": "In photorespiration, RuBP binds with O2 to form:",
        "opts": {
            "A": "One molecule of 3-PGA and one molecule of phosphoglycolate (2C)",
            "B": "Two molecules of 3-PGA",
            "C": "Two molecules of phosphoglycolate",
            "D": "One molecule of glucose"
        },
        "ans": "A",
        "exp": "RuBP + O2 -> 1 molecule of 3-PGA (3C) + 1 molecule of phosphoglycolate (2C).",
        "topic": "c3_c4",
        "sub": "Photorespiration",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 99,
        "q": "Which three cell organelles are involved in the photorespiratory (C2) cycle?",
        "opts": {
            "A": "Chloroplast, Peroxisome, and Mitochondria",
            "B": "Chloroplast, Golgi, and ER",
            "C": "Mitochondria, Vacuole, and Lysosome",
            "D": "Chloroplast, Ribosome, and Nucleus"
        },
        "ans": "A",
        "exp": "Photorespiration involves coordinated reactions across chloroplast, peroxisome, and mitochondria.",
        "topic": "c3_c4",
        "sub": "Photorespiration",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 100,
        "q": "Photorespiration is considered a wasteful process because:",
        "opts": {
            "A": "It consumes ATP and releases CO2 without producing sugar, ATP, or NADPH",
            "B": "It produces excess toxic glucose",
            "C": "It hydrolyzes water without sunlight",
            "D": "It destroys chloroplast membranes"
        },
        "ans": "A",
        "exp": "Photorespiration results in loss of fixed carbon (25%) and consumes energy with no biological gain.",
        "topic": "c3_c4",
        "sub": "Photorespiration",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 101,
        "q": "Photorespiration does NOT occur in C4 plants because:",
        "opts": {
            "A": "They have an internal mechanism that concentrates CO2 at the RuBisCO enzyme site",
            "B": "They lack RuBisCO enzyme",
            "C": "They lack chloroplasts in bundle sheath cells",
            "D": "They operate in the dark only"
        },
        "ans": "A",
        "exp": "Decarboxylation in bundle sheath cells raises CO2 concentration, ensuring RuBisCO functions purely as carboxylase.",
        "topic": "c3_c4",
        "sub": "Photorespiration",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 102,
        "q": "Blackman's Law of Limiting Factors was formulated in the year:",
        "opts": {
            "A": "1905",
            "B": "1854",
            "C": "1770",
            "D": "1930"
        },
        "ans": "A",
        "exp": "F.F. Blackman formulated the Law of Limiting Factors in 1905.",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 103,
        "q": "According to Blackman's Law of Limiting Factors, if a chemical process is affected by more than one factor, its rate is determined by:",
        "opts": {
            "A": "The factor which is nearest to its minimal value",
            "B": "The factor present in the highest amount",
            "C": "The average of all factors",
            "D": "Light intensity exclusively"
        },
        "ans": "A",
        "exp": "The rate of a multi-factorial process is limited by the factor closest to its minimal value.",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 104,
        "q": "Light saturation for photosynthesis in green plants usually occurs at what percentage of full sunlight?",
        "opts": {
            "A": "10%",
            "B": "25%",
            "C": "50%",
            "D": "100%"
        },
        "ans": "A",
        "exp": "Except for plants in dense shade or forests, light saturation occurs at 10% of full sunlight.",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 105,
        "q": "At very high light intensities, the rate of photosynthesis decreases primarily due to:",
        "opts": {
            "A": "Breakdown (photo-oxidation) of chlorophyll",
            "B": "Exhaustion of atmospheric CO2",
            "C": "Boiling of cell sap",
            "D": "Immediate stomatal closure"
        },
        "ans": "A",
        "exp": "Excessively high light intensities cause solarization and photo-oxidation of chlorophyll.",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 106,
        "q": "What is the major limiting factor for photosynthesis in nature under normal conditions?",
        "opts": {
            "A": "Carbon dioxide (CO2)",
            "B": "Light",
            "C": "Temperature",
            "D": "Oxygen"
        },
        "ans": "A",
        "exp": "Carbon dioxide is the major limiting factor for photosynthesis because its atmospheric concentration is very low (0.03-0.04%).",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 107,
        "q": "The concentration of CO2 in the atmosphere is currently around:",
        "opts": {
            "A": "0.03% to 0.04% (300 to 400 ppm)",
            "B": "0.3% to 0.4%",
            "C": "1.0% to 2.0%",
            "D": "0.003% to 0.004%"
        },
        "ans": "A",
        "exp": "Atmospheric CO2 concentration is approximately 0.03 to 0.04% (300-400 ppm).",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 108,
        "q": "An increase in atmospheric CO2 concentration up to what level can enhance CO2 fixation rates without causing harm?",
        "opts": {
            "A": "0.05%",
            "B": "0.10%",
            "C": "0.50%",
            "D": "1.00%"
        },
        "ans": "A",
        "exp": "Increasing CO2 up to 0.05% can enhance fixation rates; beyond this, it becomes damaging over long periods.",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 109,
        "q": "C4 plants show CO2 saturation at approximately:",
        "opts": {
            "A": "360 ppm (360 ul/L)",
            "B": "450 ppm (450 ul/L)",
            "C": "200 ppm (200 ul/L)",
            "D": "600 ppm (600 ul/L)"
        },
        "ans": "A",
        "exp": "C4 plants saturate at lower CO2 concentrations (~360 ppm) due to the high affinity of PEPcase.",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 110,
        "q": "C3 plants show CO2 saturation at approximately:",
        "opts": {
            "A": "450 ppm (450 ul/L)",
            "B": "360 ppm (360 ul/L)",
            "C": "300 ppm (300 ul/L)",
            "D": "250 ppm (250 ul/L)"
        },
        "ans": "A",
        "exp": "C3 plants saturate only beyond 450 ppm, meaning current atmospheric levels are limiting for C3 plants.",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 111,
        "q": "Which commercial greenhouse crops benefit from carbon dioxide fertilization to give higher yields?",
        "opts": {
            "A": "Tomatoes and bell peppers",
            "B": "Wheat and rice",
            "C": "Maize and sugarcane",
            "D": "Sorghum and pearl millet"
        },
        "ans": "A",
        "exp": "Tomatoes and bell peppers are grown in CO2-enriched greenhouse atmospheres to produce higher yields.",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 112,
        "q": "Why do C4 plants have a higher temperature optimum than C3 plants?",
        "opts": {
            "A": "C4 plants are adapted to tropical climates and their dark reactions are enzymatic with higher thermal optima",
            "B": "They do not have enzymes",
            "C": "Their chloroplasts lack membranes",
            "D": "Their stomata stay open at 100\u00b0C"
        },
        "ans": "A",
        "exp": "C4 plants are tropical plants adapted to high temperatures with enzyme systems optimized for 30-40\u00b0C.",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 113,
        "q": "The temperature optimum for photosynthesis in C3 plants is generally around:",
        "opts": {
            "A": "20\u00b0C to 25\u00b0C",
            "B": "35\u00b0C to 40\u00b0C",
            "C": "45\u00b0C to 50\u00b0C",
            "D": "10\u00b0C to 15\u00b0C"
        },
        "ans": "A",
        "exp": "C3 plants are temperate/subtropical with an optimum around 20-25\u00b0C.",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 114,
        "q": "Water stress affects photosynthesis indirectly primarily by causing:",
        "opts": {
            "A": "Stomatal closure, reducing CO2 availability and leaf wilting",
            "B": "Immediate destruction of chlorophyll",
            "C": "Denaturation of RuBisCO at room temperature",
            "D": "Reversal of electron flow in PS II"
        },
        "ans": "A",
        "exp": "Water stress causes stomata to close, restricting CO2 diffusion and wilting leaves to reduce surface area.",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 115,
        "q": "In C3 plants, how many molecules of ATP are required to produce one hexose sugar (glucose)?",
        "opts": {
            "A": "18 ATP",
            "B": "12 ATP",
            "C": "30 ATP",
            "D": "36 ATP"
        },
        "ans": "A",
        "exp": "C3 pathway consumes 18 ATP per glucose molecule.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Numericals",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 116,
        "q": "In C4 plants, how many molecules of NADPH are required to produce one hexose sugar (glucose)?",
        "opts": {
            "A": "12 NADPH",
            "B": "18 NADPH",
            "C": "6 NADPH",
            "D": "24 NADPH"
        },
        "ans": "A",
        "exp": "Both C3 and C4 plants require 12 NADPH per glucose molecule, as NADPH is used in the reduction stage.",
        "topic": "c3_c4",
        "sub": "Calvin Cycle Numericals",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 117,
        "q": "The internal factor of plants affecting photosynthesis includes:",
        "opts": {
            "A": "Number, size, age, and orientation of leaves, and mesophyll chloroplasts",
            "B": "Light intensity",
            "C": "Atmospheric CO2 concentration",
            "D": "Soil water content"
        },
        "ans": "A",
        "exp": "Plant factors include leaf traits, chloroplast numbers, internal CO2, and chlorophyll amount.",
        "topic": "factors",
        "sub": "Factors Affecting Photosynthesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 118,
        "q": "The active site of RuBisCO can bind:",
        "opts": {
            "A": "Both CO2 and O2 competitively",
            "B": "CO2 only",
            "C": "O2 only",
            "D": "Neither CO2 nor O2"
        },
        "ans": "A",
        "exp": "RuBisCO has competitive bifunctional affinity for both CO2 and O2.",
        "topic": "c3_c4",
        "sub": "RuBisCO",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 119,
        "q": "RuBisCO has a much greater affinity for:",
        "opts": {
            "A": "CO2 than for O2 when CO2 and O2 concentrations are nearly equal",
            "B": "O2 than for CO2",
            "C": "Nitrogen than for CO2",
            "D": "Methane than for O2"
        },
        "ans": "A",
        "exp": "RuBisCO's binding affinity for CO2 is significantly higher than for O2; binding is determined by relative concentration.",
        "topic": "c3_c4",
        "sub": "RuBisCO",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 120,
        "q": "In C4 plants, the bundle sheath cells are surrounded by:",
        "opts": {
            "A": "Concentric rings of mesophyll cells (Kranz arrangement)",
            "B": "A thick waxy cuticle only",
            "C": "Sclerenchymatous hypodermis",
            "D": "Phloem companion cells exclusively"
        },
        "ans": "A",
        "exp": "Mesophyll cells surround bundle sheath cells in concentric rings, forming Kranz anatomy.",
        "topic": "c3_c4",
        "sub": "Kranz Anatomy",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 121,
        "q": "Which of the following does NOT occur during the light-dependent phase of photosynthesis?",
        "opts": {
            "A": "Reduction of CO2 to carbohydrates",
            "B": "Photolysis of water",
            "C": "Synthesis of ATP",
            "D": "Reduction of NADP+ to NADPH"
        },
        "ans": "A",
        "exp": "Reduction of CO2 to sugars occurs in the dark reaction (stroma), not during the light-dependent phase.",
        "topic": "factors",
        "sub": "Light Reaction",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 122,
        "q": "The electron donor in oxygenic photosynthesis is:",
        "opts": {
            "A": "H2O",
            "B": "H2S",
            "C": "NADH",
            "D": "FADH2"
        },
        "ans": "A",
        "exp": "Water (H2O) is the universal electron donor in oxygenic photosynthetic organisms.",
        "topic": "factors",
        "sub": "Light Reaction",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 123,
        "q": "The primary product of the action of PEPcase in C4 plants is:",
        "opts": {
            "A": "Oxaloacetate (OAA)",
            "B": "Phosphoenolpyruvate",
            "C": "Malate",
            "D": "Aspartate"
        },
        "ans": "A",
        "exp": "PEP + HCO3- -> Oxaloacetate (OAA) catalyzed by PEP carboxylase.",
        "topic": "c3_c4",
        "sub": "C4 Pathway",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 124,
        "q": "Regeneration of one molecule of PEP in the mesophyll cells of C4 plants requires:",
        "opts": {
            "A": "2 high-energy phosphate bonds (equivalent to 2 ATP)",
            "B": "1 ATP",
            "C": "3 ATP",
            "D": "No energy"
        },
        "ans": "A",
        "exp": "Conversion of pyruvate to PEP via pyruvate-phosphate dikinase consumes ATP -> AMP + PPi (2 ATP equivalents).",
        "topic": "c3_c4",
        "sub": "C4 Pathway",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 125,
        "q": "In Engelmann's experiment, why did aerobic bacteria cluster in blue and red light?",
        "opts": {
            "A": "Maximum oxygen evolution occurred at these wavelengths due to highest photosynthetic activity",
            "B": "Bacteria preferred red and blue light for swimming",
            "C": "Chlorophyll pigments actively repelled bacteria in green light",
            "D": "Heat was generated exclusively in blue and red regions"
        },
        "ans": "A",
        "exp": "Aerobic bacteria detect oxygen and aggregated in blue/red zones where oxygenic photosynthesis was maximal.",
        "topic": "factors",
        "sub": "Historical Experiments",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    }
]
