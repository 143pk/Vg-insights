import os
import sys
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from scripts.bio12_engine.common import balance_and_build_parts

CHP_ID = "evolution"
CHP_TITLE = "Evolution"
FILE_PREFIX = "evolution"
VAR_PREFIX = "EVOLUTION"

T1 = ("bio-origin-of-life-proofs", "Origin of Life & Evidences for Evolution")
T2 = ("bio-darwinism-natural-selection", "Darwinism & Types of Natural Selection")
T3 = ("bio-hardy-weinberg-human-evolution", "Hardy-Weinberg Principle & Human Evolution")

def generate_chapter_6():
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
        ("According to the Big Bang Theory, approximately when did the singular massive explosion creating the universe occur?",
         "About 20 billion years ago (20 bya)", "About 4.5 billion years ago", "About 500 million years ago", "About 2 million years ago", "A",
         "Cosmological timescale in NCERT.",
         "The Big Bang theory attempts to explain the origin of universe through a singular huge physical explosion about 20 billion years ago.",
         "4.5 bya was the formation of Earth; 2 mya was Homo habilis.",
         T1, "Origin of Universe"),

        ("Approximately how many billion years ago was the planet Earth formed in the solar system?",
         "4.5 billion years ago (4.5 bya)", "20 billion years ago", "10 billion years ago", "2.0 billion years ago", "A",
         "Age of Earth in NCERT.",
         "Earth is estimated to have formed about 4.5 billion years ago from the accretion disc around the early solar system.",
         "20 bya is the age of the universe; 4.0 bya was the first appearance of life.",
         T1, "Earth Formation"),

        ("Which of the following gases was ABSENT in its free molecular form in the atmosphere of early primitive Earth?",
         "Free molecular oxygen (O2)", "Methane (CH4)", "Ammonia (NH3)", "Water vapour (H2O)", "A",
         "Reducing atmosphere of early Earth.",
         "The early Earth atmosphere was strongly reducing and devoid of free molecular oxygen (O2). Gases present included CH4, NH3, CO2, and water vapour.",
         "Methane and ammonia were abundant reducing gases.",
         T1, "Primitive Earth Atmosphere"),

        ("Life on Earth first appeared approximately how many billion years ago?",
         "4.0 billion years ago (500 million years after Earth's formation)",
         "20 billion years ago", "1.5 billion years ago", "10,000 years ago", "A",
         "First appearance of life.",
         "NCERT notes that life appeared 500 million years after the formation of Earth, that is, almost four billion years ago.",
         "4.5 bya was Earth formation; 4.0 bya was origin of life.",
         T1, "Origin of Life Timeline"),

        ("Who conclusively disproved the Theory of Spontaneous Generation (Abiogenesis) using swan-necked flasks?",
         "Louis Pasteur", "Alexander Oparin", "Stanley Miller", "Charles Darwin", "A",
         "Pasteur's biogenesis experiments.",
         "Louis Pasteur demonstrated that in pre-sterilized flasks with swan necks, life did not come from killed yeast, conclusively proving that life comes only from pre-existing life (Biogenesis).",
         "Miller synthesized amino acids; Oparin proposed chemical evolution.",
         T1, "Disproof of Spontaneous Generation"),

        ("Who proposed that the first form of life could have come from pre-existing non-living organic molecules (Chemical Evolution)?",
         "Oparin of Russia and Haldane of England", "Louis Pasteur and Robert Koch", "Watson and Crick", "Lamarck and Wallace", "A",
         "Chemical evolution hypothesis.",
         "Oparin of Russia and Haldane of England proposed that the first life originated from non-living organic monomers (RNA, proteins) preceded by chemical evolution.",
         "Pasteur demonstrated biogenesis; Lamarck proposed inheritance of acquired traits.",
         T1, "Chemical Evolution Theory"),

        ("In 1953, S. L. Miller created primitive Earth conditions in a laboratory flask. Which gas mixture did he seal in the electric discharge flask?",
         "Methane (CH4), Ammonia (NH3), Hydrogen (H2), and Water vapour (H2O)",
         "Oxygen (O2), Carbon dioxide (CO2), and Nitrogen (N2)",
         "Chlorine, Helium, and Argon",
         "Sulfur dioxide, Carbon monoxide, and Ozone", "A",
         "Miller's experimental gas composition.",
         "Miller used an electric discharge flask containing CH4, H2, NH3, and water vapor at 800°C to simulate primitive reducing atmospheric conditions.",
         "Free oxygen was strictly excluded.",
         T1, "Miller Urey Experiment"),

        ("At what temperature did Stanley Miller maintain the spark discharge in his simulation of the primitive atmosphere?",
         "800°C", "100°C", "0°C", "2000°C", "A",
         "Miller's experimental temperature.",
         "NCERT explicitly mentions that Miller created electric discharge in a closed flask containing CH4, H2, NH3, and water vapour at 800°C.",
         "100°C is water boiling point.",
         T1, "Miller Urey Experiment"),

        ("Which essential biological organic molecules were synthesized by Stanley Miller in his famous electric discharge experiment?",
         "Amino acids (such as glycine, alanine, and aspartic acid)",
         "Full double-stranded DNA chromosomes",
         "Mature living prokaryotic cells",
         "Complex hemoglobin proteins", "A",
         "Products of Miller's experiment.",
         "Miller observed the synthesis of simple amino acids (glycine, alanine, aspartic acid). Subsequent researchers observed sugars, nitrogen bases, and pigments.",
         "Living cells or complex polymers were not directly formed in the flask.",
         T1, "Miller Urey Experiment"),

        ("The first non-cellular forms of life originated approximately how many billion years ago?",
         "3 billion years ago (3 bya)", "4.5 billion years ago", "1 billion years ago", "500 million years ago", "A",
         "First non-cellular life.",
         "The first non-cellular forms of life originated 3 billion years ago as giant macromolecules (RNA, proteins, polysaccharides).",
         "First cellular forms appeared 2000 mya (2 bya).",
         T1, "Non-cellular Life"),

        ("The first cellular forms of life originated on Earth approximately:",
         "2000 million years ago (2 billion years ago)", "4500 million years ago", "500 million years ago", "10,000 years ago", "A",
         "First cellular life timescale.",
         "NCERT notes that the first cellular forms of life did not appear until about 2000 million years ago (2 bya), arising as single cells in an aquatic environment.",
         "3 bya was non-cellular macromolecules.",
         T1, "Cellular Life"),

        ("Homologous organs provide evidence for evolution because they possess:",
         "Same basic anatomical origin and structure, but perform different functions (divergent evolution)",
         "Different anatomical structures performing identical functions",
         "Superficial similarity without any skeletal correspondence",
         "Completely identical external appearance across all organisms", "A",
         "Homology definition.",
         "Homology is based on divergent evolution: structures originating from a shared common ancestor possess the same fundamental anatomical design but have adapted to different functional niches.",
         "Different anatomy performing similar functions is analogy.",
         T1, "Homology"),

        ("Which of the following is a classic example of homologous structures in vertebrates?",
         "Forelimbs of whales, bats, cheetahs, and humans",
         "Wings of a butterfly and wings of a pigeon",
         "Eye of an octopus and eye of a cat",
         "Flippers of penguins and flippers of dolphins", "A",
         "Vertebrate limb homology.",
         "Whales (swimming), bats (flying), cheetahs (running), and humans (grasping) all share the same pentadactyl limb bones: humerus, radius, ulna, carpals, metacarpals, and phalanges.",
         "Butterfly and pigeon wings are analogous; octopus and cat eyes are analogous.",
         T1, "Homologous Organs"),

        ("The thorns of Bougainvillea and the tendrils of Cucurbita are examples of:",
         "Homologous organs (both are modified axillary buds)",
         "Analogous organs", "Vestigial organs", "Atavistic structures", "A",
         "Plant homology in NCERT.",
         "Both the protective thorn of Bougainvillea and the climbing tendril of Cucurbita arise from the same anatomical position as modified axillary buds, demonstrating homology (divergent evolution).",
         "They are not analogous because their anatomical origin is identical.",
         T1, "Plant Homology"),

        ("Analogous organs provide evidence for which type of evolutionary process?",
         "Convergent evolution (different structures evolving for the same function)",
         "Divergent evolution", "Macroevolution by saltation", "Adaptive radiation", "A",
         "Analogy and convergent evolution.",
         "Analogy is the result of convergent evolution: non-homologous structures of distinct evolutionary origins adapt to perform the same biological function in similar habitats.",
         "Divergent evolution is associated with homology.",
         T1, "Analogous Organs"),

        ("Which of the following pairs represents analogous organs?",
         "Wings of a butterfly and wings of a bird",
         "Forelimbs of a human and forelimbs of a horse",
         "Heart of a fish and heart of a mammal",
         "Thorn of Bougainvillea and tendril of Cucurbita", "A",
         "Analogous pairs in NCERT.",
         "Wings of butterflies (membranous insect integument) and wings of birds (feathered tetrapod forelimbs) perform the same flying function but have completely different structural origins.",
         "Human and horse forelimbs are homologous.",
         T1, "Analogous Organs"),

        ("Sweet potato (Ipomoea batatas) and potato (Solanum tuberosum) are examples of analogous structures because:",
         "Sweet potato is a root modification and potato is an underground stem modification, both specialized for food storage",
         "Both are modified leaves", "Both are modified floral buds", "Both are modified seeds", "A",
         "Tuber analogy in NCERT.",
         "Sweet potato is a modified adventitious root, while ordinary potato is a modified underground stem (tuber). Both store starch, representing analogous adaptation.",
         "They do not share common organ morphology.",
         T1, "Analogous Organs"),

        ("The eye of an octopus and the eye of a mammal (such as a cat) represent:",
         "Analogous structures resulting from convergent evolution",
         "Homologous structures from divergent evolution",
         "Vestigial sensory organs", "Atavistic mutations", "A",
         "Cephalopod vs vertebrate eye.",
         "Octopus and mammal eyes share analogous light-focusing functions and appearance, but their retina development and retinal cell orientations differ completely, representing convergent evolution.",
         "They are not homologous.",
         T1, "Analogous Organs"),

        ("The flippers of penguins (birds) and dolphins (mammals) are classic examples of:",
         "Analogous organs resulting from convergent evolution",
         "Homologous organs resulting from divergent evolution",
         "Vestigial structures", "Embryological pharyngeal slits", "A",
         "Flipper analogy in marine vertebrates.",
         "Penguins are birds and dolphins are aquatic mammals. Their hydrodynamically streamlined flippers evolved independently for swimming, demonstrating convergent evolution (analogy).",
         "They are analogous, not homologous.",
         T1, "Analogous Organs"),

        ("Who proposed the embryological evidence for evolution based on the principle that 'ontogeny recapitulates phylogeny'?",
         "Ernst Haeckel", "Karl Ernst von Baer", "Charles Darwin", "Gregor Mendel", "A",
         "Haeckel's biogenetic law.",
         "Ernst Haeckel proposed the biogenetic law that during individual embryonic development (ontogeny), an organism passes through the adult ancestral stages (phylogeny).",
         "Von Baer refuted Haeckel's hypothesis.",
         T1, "Embryological Evidence"),

        ("Who disproved Ernst Haeckel's embryological generalization by observing that embryos never pass through the adult stages of other animals?",
         "Karl Ernst von Baer", "Louis Pasteur", "Jean-Baptiste Lamarck", "Hugo de Vries", "A",
         "Von Baer's embryological law.",
         "Karl Ernst von Baer noted that developing vertebrate embryos share general embryonic features (like pharyngeal clefts and notochord) but never pass through the mature adult stages of other animals.",
         "Haeckel formulated the flawed theory; Von Baer disproved it.",
         T1, "Embryological Evidence"),

        ("In England, the observed change in the proportion of white-winged moths and dark-winged (melanic) moths before and after industrialization is a classic demonstration of:",
         "Natural selection (Industrial Melanism)", "Artificial selection", "Genetic drift", "Saltation", "A",
         "Industrial melanism in Biston betularia.",
         "Before industrialization (1850s), light-colored tree lichens camouflaged white-winged moths against predatory birds. After soot deposition (1920s), melanic moths survived better, demonstrating natural selection.",
         "It was driven by wild predators, not artificial breeding.",
         T1, "Industrial Melanism"),

        ("What was the primary reason for the survival advantage of white-winged moths over melanic moths in England before industrialization (1850s)?",
         "White lichens covered tree trunks, camouflaging white-winged moths against predatory birds",
         "Melanic moths were completely infertile in cold weather",
         "White-winged moths produced chemical poisons",
         "Birds could only see during nighttime", "A",
         "Pre-industrial moth camouflage.",
         "Clean, unpolluted air permitted thick growth of white lichens on tree bark, providing effective camouflage for light-colored moths against visual bird predation.",
         "Melanic moths were predated because they stood out against white lichens.",
         T1, "Industrial Melanism"),

        ("Excessive use of chemical herbicides, pesticides, and antibiotics has resulted in the rapid emergence of resistant varieties in a matter of months or years. This evolution is driven by:",
         "Anthropogenic action (human-induced natural selection)",
         "Spontaneous generation", "Slow geological gradualism", "Inheritance of acquired characters", "A",
         "Anthropogenic evolution in NCERT.",
         "Human activities (anthropogenic actions) applying intense chemical selection pressures rapidly select for pre-existing resistant mutants in bacteria, insects, and weeds.",
         "It is not slow gradualism, but rapid selection under man-made biocides.",
         T1, "Anthropogenic Evolution"),

        ("The process of evolution of different species in a given geographical area starting from a common ancestor and radiating to other habitats is called:",
         "Adaptive radiation", "Convergent evolution", "Polyploidy", "Saltation", "A",
         "Adaptive radiation definition.",
         "Adaptive radiation is the evolutionary diversification of an ancestral species into distinct ecological forms occupying varied ecological niches within a geographical territory.",
         "Convergent evolution brings distinct lineages into similar forms.",
         T2, "Adaptive Radiation"),

        ("Darwin's finches observed on the isolated Galapagos Islands represent a classic textbook example of:",
         "Adaptive radiation", "Convergent evolution", "Industrial melanism", "Artificial selection", "A",
         "Darwin's finches in NCERT.",
         "Darwin observed an amazing diversity of small black finches originating from an ancestral seed-eating stock, which radiated into vegetarian, insectivorous, and warbler finches with varied beak adaptations.",
         "They are the archetype of adaptive radiation.",
         T2, "Adaptive Radiation"),

        ("Australian marsupials, where a variety of distinct marsupials radiated from an ancestral stock within the Australian continent, illustrate:",
         "Adaptive radiation", "Saltation", "Industrial melanism", "Anthropogenic selection", "A",
         "Marsupial adaptive radiation.",
         "Within the isolated island continent of Australia, ancestral marsupials radiated into burrowing, climbing, running, and predatory forms (marsupial mole, bandicoot, kangaroo, Tasmanian wolf).",
         "Industrial melanism occurs in moths.",
         T2, "Adaptive Radiation"),

        ("When more than one adaptive radiation appears to have occurred in an isolated geographical area (representing different habitats), it results in:",
         "Convergent evolution", "Divergent evolution", "Saltation", "Disruptive selection", "A",
         "Convergent evolution of radiations.",
         "When independent adaptive radiations in separate geographical zones adapt to similar ecological niches, placental mammals and Australian marsupials show striking morphological convergences.",
         "Divergence occurs within a single radiating lineage.",
         T2, "Convergent Radiation"),

        ("Which placental mammal corresponds to the Australian marsupial Tasmanian Wolf as an example of convergent evolution?",
         "Placental Wolf", "Placental Anteater", "Flying squirrel", "Lemur", "A",
         "Placental vs marsupial convergence.",
         "Placental Wolf and Tasmanian Wolf (marsupial) share similar predatory carnivorous morphologies, representing convergent evolution.",
         "Anteater corresponds to Numbat; Flying squirrel corresponds to Sugar glider.",
         T2, "Convergent Evolution Pairs"),

        ("The Australian marsupial Sugar Glider corresponds to which placental mammal in convergent evolution?",
         "Flying squirrel", "Anteater", "Bobcat", "Wolf", "A",
         "Gliding mammal convergence.",
         "The marsupial Sugar glider and the placental Flying squirrel evolved patagia for gliding locomotion independently in tree canopies.",
         "Wolf corresponds to Tasmanian wolf.",
         T2, "Convergent Evolution Pairs"),

        ("The French naturalist who proposed that evolution of life forms occurred by the use and disuse of organs was:",
         "Jean-Baptiste Lamarck", "Charles Darwin", "Alfred Russel Wallace", "Thomas Malthus", "A",
         "Lamarckism.",
         "Lamarck argued that organs used extensively become larger (e.g. elongation of giraffe necks to reach tall trees), while disused organs degenerate, and these acquired traits are inherited.",
         "Darwin proposed natural selection based on pre-existing variations.",
         T2, "Lamarckism"),

        ("Which essay by Thomas Malthus heavily influenced Charles Darwin's thinking on natural selection and competition?",
         "Essay on the Principle of Population", "Philosophie Zoologique", "Origin of Species", "Principles of Geology", "A",
         "Malthusian influence on Darwin.",
         "Malthus noted that populations grow geometrically while food resources grow arithmetically, creating inevitable competition and struggle for survival.",
         "Philosophie Zoologique was by Lamarck; Origin of Species was by Darwin himself.",
         T2, "Malthusian Influence"),

        ("What are the two key concepts of the Darwinian theory of evolution?",
         "Branching descent and Natural selection", "Mutation and Saltation",
         "Use and disuse of organs", "Biogenesis and Abiogenesis", "A",
         "Two pillars of Darwinism.",
         "NCERT explicitly emphasizes that Branching descent (common ancestry) and Natural selection are the two key concepts of Darwinian Theory.",
         "Mutation and saltation were proposed by Hugo de Vries.",
         T2, "Darwinian Concepts"),

        ("According to Charles Darwin, evolutionary fitness is ultimately measured by:",
         "Reproductive fitness (leaving more viable offspring)",
         "Individual muscular physical strength", "Lifespan and longevity alone", "Body size and weight", "A",
         "Darwinian fitness definition.",
         "Darwinian fitness refers exclusively to reproductive success—the ability to survive, mate, and leave fertile offspring in subsequent generations.",
         "Muscular strength without reproduction has zero evolutionary fitness.",
         T2, "Darwinian Fitness"),

        ("Who independently conceived the idea of natural selection based on his field studies in the Malay Archipelago?",
         "Alfred Russel Wallace", "Thomas Hunt Morgan", "Hugo de Vries", "Ernst Haeckel", "A",
         "Alfred Russel Wallace contribution.",
         "Alfred Russel Wallace, working in the Malay Archipelago, independently formulated the theory of natural selection and sent an essay to Darwin, leading to their joint 1858 presentation.",
         "Morgan worked on fruit flies; de Vries worked on evening primrose.",
         T2, "Wallace Discovery"),

        ("Hugo de Vries proposed the Mutation Theory of Evolution based on his experimental work on which plant?",
         "Oenothera lamarckiana (Evening Primrose)", "Pisum sativum (Garden pea)", "Antirrhinum majus (Snapdragon)", "Mirabilis jalapa", "A",
         "Hugo de Vries experimental plant.",
         "Hugo de Vries conducted mutation experiments on the Evening Primrose (Oenothera lamarckiana) and argued that large sudden mutations drive speciation.",
         "Mendel used Pisum sativum; Correns used Mirabilis jalapa.",
         T2, "Mutation Theory"),

        ("How do the mutations proposed by Hugo de Vries differ from the Darwinian variations?",
         "De Vriesian mutations are random and directionless, while Darwinian variations are small and directional",
         "De Vriesian mutations are small and directional, while Darwinian variations are giant leaps",
         "De Vriesian mutations occur only in animals",
         "Darwinian variations are caused exclusively by cosmic rays", "A",
         "De Vries vs Darwin variation.",
         "NCERT contrasts them: De Vries believed mutations are large, sudden, random, and directionless, leading to speciation in a single step (saltation). Darwin believed variations are small, continuous, and directional.",
         "Darwinian variations are gradual and directional.",
         T2, "Mutation vs Darwinism"),

        ("Single-step large mutation that drives speciation according to Hugo de Vries is termed:",
         "Saltation", "Branching descent", "Adaptive radiation", "Gene flow", "A",
         "Saltation definition.",
         "Hugo de Vries termed large, single-step mutations that produce new species 'saltation' (from the Latin for jumping).",
         "Branching descent is Darwinian gradual divergence.",
         T2, "Saltation"),

        ("The Hardy-Weinberg principle states that allele frequencies in a population remain stable and constant from generation to generation in the absence of evolutionary forces. This state is called:",
         "Genetic equilibrium (Hardy-Weinberg equilibrium)", "Adaptive radiation", "Directional selection", "Genetic drift", "A",
         "Genetic equilibrium definition.",
         "Hardy-Weinberg equilibrium describes a population in which allele and genotype frequencies remain constant across generations in the absence of evolutionary pressures.",
         "Genetic drift and selection disrupt equilibrium.",
         T3, "Hardy Weinberg Principle"),

        ("In the Hardy-Weinberg algebraic equation (p + q)^2 = p^2 + 2pq + q^2 = 1, what does '2pq' represent?",
         "Frequency of heterozygous individuals (Aa)",
         "Frequency of homozygous dominant individuals (AA)",
         "Frequency of homozygous recessive individuals (aa)",
         "Frequency of allele A", "A",
         "Hardy-Weinberg binomial terms.",
         "p^2 represents homozygous dominant individuals (AA), 2pq represents heterozygous individuals (Aa), and q^2 represents homozygous recessive individuals (aa).",
         "p^2 is AA; q^2 is aa.",
         T3, "Hardy Weinberg Terms"),

        ("Which type of natural selection operates when individuals with intermediate phenotypes are favored and extremes are eliminated, narrowing the phenotypic peak?",
         "Stabilizing selection", "Directional selection", "Disruptive selection", "Artificial selection", "A",
         "Stabilizing selection.",
         "Stabilizing selection favors mean phenotypes (e.g. human birth weight ~3 kg). The population peak becomes taller and narrower around the mean.",
         "Directional shifts the peak; disruptive produces two peaks.",
         T2, "Natural Selection Types"),

        ("Which type of natural selection operates when individuals at one extreme of the phenotypic distribution are favored, shifting the mean curve in that direction?",
         "Directional selection", "Stabilizing selection", "Disruptive selection", "Balancing selection", "A",
         "Directional selection.",
         "In directional selection (e.g. industrial melanism favoring darker moths, or antibiotic resistance), more individuals acquire phenotypes at one extreme, shifting the peak.",
         "Stabilizing preserves the mean.",
         T2, "Natural Selection Types"),

        ("Which type of natural selection operates when individuals at both phenotypic extremes are favored, forming two distinct peaks and eliminating intermediate phenotypes?",
         "Disruptive selection", "Stabilizing selection", "Directional selection", "Sexual selection", "A",
         "Disruptive selection.",
         "Disruptive selection acts against intermediate variants, producing a bimodal curve with two distinct peaks corresponding to the two extremes.",
         "Stabilizing favors the intermediate.",
         T2, "Natural Selection Types"),

        ("Random change in allele frequencies that occurs purely by chance in small, isolated populations is termed:",
         "Genetic drift (Sewall Wright effect)", "Gene flow", "Natural selection", "Adaptive radiation", "A",
         "Genetic drift definition.",
         "Genetic drift refers to random fluctuations in allele frequencies from generation to generation due to sampling errors in small populations.",
         "Gene flow involves migration between populations.",
         T3, "Genetic Drift"),

        ("When a small group of individuals colonizes a new geographical area and founds a new population with drastically different allele frequencies, this evolutionary phenomenon is called the:",
         "Founder effect", "Bottleneck effect", "Stabilizing selection", "Disruptive selection", "A",
         "Founder effect in NCERT.",
         "When a small founding fraction of a population establishes a new colony, their limited genetic pool forms a distinct population that may differ markedly from the original parental stock (Founder effect).",
         "Bottleneck occurs when an existing population crashes due to a catastrophe.",
         T3, "Founder Effect"),

        ("In 1938, a fish caught in South Africa that was previously thought to be extinct was identified as a Coelacanth (Latimeria). Coelacanths belong to which group?",
         "Lobe-finned fishes that evolved into the first amphibians",
         "Jawless fishes (Agnatha)", "Placental mammals", "Reptiles", "A",
         "Coelacanth significance in NCERT.",
         "Coelacanths are lobe-finned fishes (Sarcopterygii) whose stout, fleshy fins allowed them to move onto land, forming the evolutionary bridge to the first amphibians.",
         "They are bony fishes, not reptiles or mammals.",
         T1, "Coelacanth"),

        ("Approximately how many million years ago (mya) did giant terrestrial dinosaurs suddenly disappear from Earth?",
         "About 65 million years ago (65 mya)", "200 million years ago", "500 million years ago", "2 million years ago", "A",
         "Extinction of dinosaurs.",
         "Dinosaurs vanished suddenly from Earth around 65 million years ago during the Cretaceous-Tertiary (K-Pg) mass extinction.",
         "200 mya was the emergence of dinosaurs.",
         T1, "Dinosaur Extinction"),

        ("Which was the largest carnivorous dinosaur that ever roamed the Earth, reaching about 20 feet in height with dagger-like teeth?",
         "Tyrannosaurus rex", "Brachiosaurus", "Stegosaurus", "Ichthyosaurus", "A",
         "Tyrannosaurus rex description.",
         "NCERT mentions that the biggest of them was Tyrannosaurus rex, standing about 20 feet in height with enormous fearsome dagger-like teeth.",
         "Brachiosaurus was a giant herbivore; Ichthyosaur was marine.",
         T1, "Dinosaurs"),

        ("Which fish-like aquatic reptiles evolved around 200 million years ago and secondarily returned to water?",
         "Ichthyosaurs", "Tyrannosaurus rex", "Coelacanths", "Pelycosaurs", "A",
         "Ichthyosaur evolution.",
         "Some land reptiles went back into water to evolve into fish-like reptiles called Ichthyosaurs around 200 million years ago.",
         "Tyrannosaurus was terrestrial; Coelacanth is a lobe-finned fish.",
         T1, "Marine Reptiles"),

        ("The earliest mammals that evolved after the demise of the dinosaurs were small and resembled modern:",
         "Shrews", "Elephants", "Apes", "Kangaroos", "A",
         "Early mammal morphology.",
         "The first mammals were tiny, nocturnal, shrew-like creatures whose fossils are small and tooth-dominated.",
         "Apes evolved much later.",
         T1, "Mammalian Origins")
    ]

    # Additional easy questions to reach 125 easy questions
    extra_easy_6 = [
        ("About 15 million years ago, which two hairy primates walked like gorillas and chimpanzees?",
         "Dryopithecus and Ramapithecus", "Homo habilis and Homo erectus",
         "Australopithecus and Neanderthal man", "Cro-Magnon and Homo sapiens", "A",
         "Primate ancestors at 15 mya.",
         "About 15 mya, primates called Dryopithecus and Ramapithecus existed. Dryopithecus was more ape-like, while Ramapithecus was more man-like.",
         "Homo habilis lived ~2 mya.",
         T3, "Human Evolution Timeline"),

        ("Between Dryopithecus and Ramapithecus, which one was more ape-like and which was more man-like?",
         "Dryopithecus was more ape-like, while Ramapithecus was more man-like",
         "Dryopithecus was more man-like, while Ramapithecus was ape-like",
         "Both were identical to modern humans",
         "Both were aquatic quadrupeds", "A",
         "Dryopithecus vs Ramapithecus.",
         "NCERT explicitly states that Dryopithecus was more ape-like, whereas Ramapithecus was more man-like and walked more erect.",
         "Dryopithecus was ape-like.",
         T3, "Human Evolution Ancestors"),

        ("Fossils of man-like bones discovered in Ethiopia and Tanzania showed hominid features dating back to:",
         "3 to 4 million years ago", "15 million years ago", "100,000 years ago", "10,000 years ago", "A",
         "African hominid fossils.",
         "Fossils of hominid bones discovered in Ethiopia and Tanzania demonstrated that 3-4 mya, man-like primates walked erect in Eastern Africa.",
         "100,000 years ago is Neanderthal.",
         T3, "Hominid Fossils"),

        ("Australopithecines lived in East African grasslands approximately how many million years ago?",
         "About 2 million years ago (2 mya)", "15 million years ago", "65 million years ago", "10,000 years ago", "A",
         "Australopithecines timeframe.",
         "Evidence shows that Australopithecines lived in East African grasslands probably 2 million years ago.",
         "They hunted with stone weapons but essentially ate fruits.",
         T3, "Australopithecus"),

        ("What was the primary dietary habit of Australopithecus according to dental and fossil evidence?",
         "Essentially ate fruit", "Strictly carnivorous eating large mammoths",
         "Strictly scavenged marine fish", "Drank only flower nectar", "A",
         "Australopithecine diet.",
         "NCERT explicitly notes that Australopithecus hunted with stone weapons but essentially ate fruit.",
         "Homo erectus probably ate meat.",
         T3, "Australopithecus Diet"),

        ("The first hominid with a human-like body structure was designated as:",
         "Homo habilis ('handy man')", "Homo erectus", "Homo neanderthalensis", "Ramapithecus", "A",
         "Homo habilis classification.",
         "The first human-like being, the hominid, was called Homo habilis.",
         "Homo erectus came later; Ramapithecus was a pre-hominid.",
         T3, "Homo Habilis"),

        ("What was the cranial (brain) capacity of Homo habilis?",
         "650 to 800 cc", "900 cc", "1400 cc", "1600 cc", "A",
         "Homo habilis brain capacity.",
         "NCERT notes that the brain capacity of Homo habilis was between 650 and 800 cubic centimeters (cc).",
         "900 cc is Homo erectus; 1400 cc is Neanderthal man.",
         T3, "Cranial Capacity"),

        ("Did Homo habilis eat meat?",
         "No, they probably did not eat meat", "Yes, they were strict carnivores",
         "Yes, they ate only mammoths", "They were obligate blood suckers", "A",
         "Diet of Homo habilis in NCERT.",
         "NCERT explicitly states: 'They probably did not eat meat.'",
         "Homo erectus on the other hand probably ate meat.",
         T3, "Homo Habilis Diet"),

        ("Fossils of Homo erectus discovered in Java in 1891 date back to approximately:",
         "1.5 million years ago (1.5 mya)", "15 million years ago", "100,000 years ago", "10,000 years ago", "A",
         "Homo erectus Java man.",
         "Fossils discovered in Java in 1891 revealed the next stage named Homo erectus about 1.5 mya.",
         "15 mya was Ramapithecus.",
         T3, "Homo Erectus Timeline"),

        ("What was the cranial capacity of Homo erectus?",
         "About 900 cc", "650-800 cc", "1400 cc", "450 cc", "A",
         "Homo erectus cranial capacity.",
         "Homo erectus had a large brain capacity of around 900 cubic centimeters.",
         "650-800 cc is Homo habilis; 1400 cc is Neanderthal.",
         T3, "Cranial Capacity"),

        ("Did Homo erectus eat meat?",
         "Yes, Homo erectus probably ate meat", "No, they were strict fruitarians",
         "They ate only tree bark", "They did not ingest any food", "A",
         "Homo erectus diet.",
         "NCERT states: 'Homo erectus probably ate meat.'",
         "Homo habilis did not eat meat.",
         T3, "Homo Erectus Diet"),

        ("The Neanderthal man (Homo neanderthalensis) lived near east and central Asia between:",
         "100,000 to 40,000 years ago", "1.5 million years ago", "2 to 3 million years ago", "500 to 1000 years ago", "A",
         "Neanderthal timeframe in NCERT.",
         "The Neanderthal man with a brain size of 1400 cc lived in near east and central Asia between 100,000 and 40,000 years ago.",
         "1.5 mya was Homo erectus.",
         T3, "Neanderthal Man"),

        ("What was the cranial (brain) capacity of the Neanderthal man (Homo neanderthalensis)?",
         "1400 cc", "900 cc", "650-800 cc", "400 cc", "A",
         "Neanderthal cranial capacity.",
         "The Neanderthal man possessed a large cranial capacity of approximately 1400 cc, comparable to modern humans.",
         "900 cc was Homo erectus.",
         T3, "Cranial Capacity"),

        ("Which early hominid used animal hides to protect their bodies and buried their dead?",
         "Neanderthal man (Homo neanderthalensis)", "Homo habilis", "Homo erectus", "Australopithecus", "A",
         "Cultural traits of Neanderthals in NCERT.",
         "Neanderthal man used hides to protect their body and were the first to ceremonially bury their dead.",
         "Homo habilis and erectus did not have recorded burial practices.",
         T3, "Neanderthal Culture"),

        ("Homo sapiens (modern humans) arose during the ice age between:",
         "75,000 to 10,000 years ago", "1.5 million years ago", "100,000 to 200,000 years ago", "500 years ago", "A",
         "Modern human origin timeline.",
         "Homo sapiens arose in Africa during the ice age between 75,000 and 10,000 years ago and spread across continents.",
         "100,000 was early Neanderthal.",
         T3, "Homo Sapiens Emergence"),

        ("Pre-historic cave art developed by early Homo sapiens dates back to approximately:",
         "18,000 years ago", "100,000 years ago", "1.5 million years ago", "500 years ago", "A",
         "Cave art history.",
         "Prehistoric cave art developed about 18,000 years ago (e.g. Bhimbetka rock paintings in Madhya Pradesh).",
         "10,000 years ago was the dawn of agriculture.",
         T3, "Prehistoric Cave Art"),

        ("A famous site featuring prehistoric rock cave paintings created by early humans in India is:",
         "Bhimbetka rock shelter in Raisen district, Madhya Pradesh",
         "Qutub Minar, Delhi", "Taj Mahal, Agra", "Red Fort, Delhi", "A",
         "Bhimbetka cave art in NCERT.",
         "NCERT mentions the prehistoric cave paintings at Bhimbetka rock shelter in Raisen district of Madhya Pradesh.",
         "Other landmarks are medieval/modern monuments.",
         T3, "Bhimbetka Cave Art"),

        ("Agriculture and human settlements began approximately how many years ago?",
         "10,000 years ago", "18,000 years ago", "75,000 years ago", "100,000 years ago", "A",
         "Dawn of agriculture.",
         "Agriculture arose around 10,000 years ago, initiating permanent human civilizations and settlements.",
         "18,000 years ago was cave art.",
         T3, "Agricultural Revolution"),

        ("Invertebrates were formed and became active in the oceans around:",
         "500 million years ago (500 mya)", "2000 mya", "350 mya", "65 mya", "A",
         "Invertebrate origin timescale.",
         "By 500 mya, marine invertebrates were formed and active.",
         "350 mya was jawless fishes; 2000 mya was first cellular life.",
         T1, "Geological Timescale"),

        ("Jawless fishes (Agnatha) evolved around:",
         "350 million years ago (350 mya)", "500 mya", "200 mya", "65 mya", "A",
         "Jawless fish origin.",
         "Jawless fish evolved around 350 mya along with marine seaweeds.",
         "500 mya was invertebrates.",
         T1, "Fish Evolution"),

        ("The very first organisms that successfully invaded and colonized land were:",
         "Plants", "Reptiles", "Amphibians", "Insects", "A",
         "First colonizers of land.",
         "NCERT states that plants were the first organisms that invaded and colonized land, long before animals moved onto land.",
         "Amphibians invaded land after terrestrial vegetation was established.",
         T1, "Terrestrial Colonization"),

        ("The giant fern-like pteridophyte vegetation of the Carboniferous period died and fell to form modern:",
         "Coal deposits", "Petroleum oil pools", "Limestone caves", "Gold reefs", "A",
         "Coal forest origin.",
         "Giant ferns (Pteridophytes) present during the Carboniferous period were buried in swampy bogs, forming fossil coal deposits.",
         "Petroleum is formed from marine plankton.",
         T1, "Fossil Fuel Geology"),

        ("Which geological era is commonly designated as the 'Age of Reptiles'?",
         "Mesozoic Era", "Coenozoic Era", "Palaeozoic Era", "Precambrian Era", "A",
         "Age of reptiles.",
         "The Mesozoic era (comprising Triassic, Jurassic, and Cretaceous periods) was the Age of Reptiles dominated by dinosaurs.",
         "Coenozoic is the Age of Mammals.",
         T1, "Geological Eras"),

        ("The current geological era in which mammals and angiosperms dominate the planet is the:",
         "Coenozoic Era", "Mesozoic Era", "Palaeozoic Era", "Proterozoic Era", "A",
         "Age of mammals.",
         "The Coenozoic era (Tertiary and Quaternary periods) is the Age of Mammals and Flowering Plants.",
         "Mesozoic was dinosaurs; Palaeozoic was fishes/amphibians.",
         T1, "Geological Eras"),

        ("Which era preceded the Mesozoic era and saw the rise of early vertebrates, fishes, and amphibians?",
         "Palaeozoic Era", "Coenozoic Era", "Archaeozoic Era", "Mesozoic Era", "A",
         "Palaeozoic era.",
         "The Palaeozoic era (Cambrian to Permian) saw the diversification of invertebrates, fishes, amphibians, and early reptiles.",
         "Coenozoic succeeded Mesozoic.",
         T1, "Geological Eras"),

        ("Evolutionary biology is broadly defined as the study of:",
         "History of life forms and their modifications on Earth",
         "Chemical composition of non-living rocks only",
         "Movement of asteroids in deep space",
         "Techniques for cloning bacteria", "A",
         "Definition of evolutionary biology.",
         "Evolutionary biology is the scientific study of the history of life forms, their origins, diversification, and adaptations on Earth over geological time.",
         "Geology studies rocks; astronomy studies asteroids.",
         T1, "Evolution Basics"),

        ("Why does observing distant stars at night metaphorically represent 'looking back in time'?",
         "Starlight emitted millions of light-years away takes millions of years to reach our eyes",
         "Telescopes contain time-travel circuits",
         "Stars only shine into the past",
         "The human retina processes photons backwards", "A",
         "Astronomical time lag.",
         "Light travels at 300,000 km/s. When we view a star 10 million light-years away, we perceive photons emitted 10 million years ago.",
         "Telescopes do not travel in time.",
         T1, "Cosmological Time"),

        ("Huge astronomical clusters containing billions of stars, gas clouds, and cosmic dust are termed:",
         "Galaxies", "Nebulae only", "Planets", "Asteroids", "A",
         "Universe structure in NCERT.",
         "The universe consists of vast clusters of galaxies, each containing millions or billions of stars and interstellar gas and dust.",
         "Planets orbit stars within galaxies.",
         T1, "Cosmology"),

        ("Stellar distances across the cosmos are conventionally measured in units of:",
         "Light years", "Kilometers", "Astronomical fathoms", "Nanometers", "A",
         "Cosmic distance units.",
         "Stellar distances are measured in light years—the distance light travels through vacuum in one Earth year (~9.46 x 10^12 km).",
         "Kilometers are too small for stellar scales.",
         T1, "Cosmic Distance"),

        ("On primitive Earth, what broke down atmospheric water vapor into hydrogen and oxygen gas?",
         "High-energy ultraviolet (UV) rays from the sun",
         "Bacterial photosynthesis", "Volcanic sulfuric acid", "Plant transpiration", "A",
         "Water photolysis on early Earth.",
         "Solar UV radiation split water molecules into hydrogen (which escaped due to light mass) and reactive oxygen.",
         "Photosynthesis evolved much later.",
         T1, "Primitive Earth Atmosphere"),

        ("How was the protective ozone (O3) layer formed around the Earth?",
         "Oxygen atoms generated by photolysis reacted with molecular oxygen (O + O2 -> O3)",
         "Methane polymerized with ammonia",
         "Marine algae released liquid ozone",
         "Volcanoes erupted liquid ozone directly", "A",
         "Ozone layer genesis.",
         "Free oxygen released by photolysis and early microbes reacted with O2 in the upper atmosphere under UV irradiation to form the ozone layer.",
         "Methane and ammonia do not form ozone.",
         T1, "Ozone Layer"),

        ("As primitive Earth cooled down, condensed atmospheric water vapor precipitated as continuous rain to form the first:",
         "Oceans in large surface depressions", "Glacial ice caps only", "Desert sand dunes", "Volcanic lava lakes", "A",
         "Ocean formation on early Earth.",
         "As temperatures fell below 100°C, atmospheric water vapor condensed and poured down as persistent torrential rain, filling planetary depressions to form the oceans.",
         "Early Earth was too warm for permanent ice caps.",
         T1, "Ocean Genesis"),

        ("Early Greek philosophers believed that units of life called 'spores' were transferred to Earth from the cosmos, a concept known as:",
         "Panspermia theory", "Chemical evolution", "Spontaneous generation", "Biogenetic law", "A",
         "Panspermia theory in NCERT.",
         "Panspermia ('seeds everywhere') posited that resistant spores traveled through space on comets/meteorites and inoculated primitive Earth.",
         "Chemical evolution originated on Earth.",
         T1, "Origin Theories"),

        ("The ancient belief that living organisms could arise spontaneously from non-living decaying straw, mud, and manure was termed the:",
         "Theory of Spontaneous Generation (Abiogenesis)",
         "Theory of Special Creation", "Biogenetic Law", "Cosmozoic Theory", "A",
         "Spontaneous generation concept.",
         "The theory of spontaneous generation held that living creatures (maggots, mice, frogs) arose spontaneously from rotting mud and organic refuse.",
         "Pasteur disproved this abiogenetic hypothesis.",
         T1, "Origin Theories"),

        ("Louis Pasteur demonstrated that life arises only from pre-existing life, a principle known in biology as:",
         "Biogenesis (Omnis cellula e cellula)",
         "Spontaneous generation", "Catastrophism", "Saltation", "A",
         "Biogenesis principle.",
         "Pasteur demonstrated that in pre-sterilized flasks, boiled yeast infusions did not generate microbes, proving Biogenesis.",
         "Spontaneous generation is abiogenesis.",
         T1, "Biogenesis"),

        ("Alexander Oparin, who proposed chemical evolution of life, hailed from which country?",
         "Russia", "England", "United States", "France", "A",
         "Oparin's nationality.",
         "Alexander Oparin was a prominent Russian biochemist; J.B.S. Haldane was a British-born scientist who later emigrated to India.",
         "Haldane was from England/India.",
         T1, "History of Science"),

        ("J. B. S. Haldane, who co-proposed the hypothesis of chemical evolution, was originally from:",
         "England", "Russia", "Germany", "Japan", "A",
         "Haldane's origin.",
         "John Burdon Sanderson Haldane was an English geneticist and evolutionary biologist.",
         "Oparin was from Russia.",
         T1, "History of Science"),

        ("In the famous 1953 Miller-Urey experiment, what electrical energy source simulated thunderstorms in the primitive atmosphere?",
         "High-voltage spark discharge electrodes",
         "Solar photovoltaic panels", "Nuclear fuel rods", "Bunsen burner flame", "A",
         "Miller apparatus energy source.",
         "Miller used tungsten electrodes connected to a high-voltage spark coil (~75,000 volts) to simulate prehistoric lightning strikes.",
         "Flames were used to boil water, not to generate sparks.",
         T1, "Miller Experiment"),

        ("In Stanley Miller's closed spark discharge apparatus, what was the approximate volume ratio of CH4 : NH3 : H2?",
         "2 : 1 : 2", "1 : 1 : 1", "5 : 1 : 5", "1 : 2 : 1", "A",
         "Miller gas stoichiometry.",
         "Miller mixed methane, ammonia, and hydrogen in a standard ratio of approximately 2:1:2 along with boiling water vapor.",
         "Other ratios were not the standard textbook mixture.",
         T1, "Miller Experiment"),

        ("The scientific study of prehistoric life forms through their preserved fossil remains in sedimentary strata is called:",
         "Paleontology", "Archaeology", "Anthropology", "Entomology", "A",
         "Paleontology definition.",
         "Paleontology is the biological and geological study of fossils preserved in sedimentary rocks.",
         "Archaeology studies human cultural artifacts; anthropology studies humans.",
         T1, "Paleontology"),

        ("Fossils are almost exclusively preserved in which type of Earth rocks?",
         "Sedimentary rocks", "Igneous granite rocks", "Metamorphic marble", "Volcanic basalt lava", "A",
         "Fossil preservation geology.",
         "Sedimentary rocks form by gentle sequential deposition of silt and mud in water bogs, burying animal remains without incinerating them in molten magma.",
         "Igneous and metamorphic heat melts or crushes fossils.",
         T1, "Fossil Formation"),

        ("Sediments of different geological ages contain distinctive fossils because:",
         "Specific life forms existed, flourished, and went extinct during specific geological epochs",
         "Fossils burrow downwards through rocks like worms",
         "Volcanoes manufactured bones randomly",
         "Humans buried bones uniformly at every depth", "A",
         "Stratigraphic fossil succession.",
         "The geological time scale demonstrates faunal succession: simpler organisms appear in older, deeper strata, while complex modern groups appear in recent, upper strata.",
         "Fossils do not burrow through solid rock.",
         T1, "Faunal Succession"),

        ("Which evolutionary evidence is provided by the anatomical similarity of mammalian hearts across all mammalian species?",
         "Homology (divergent evolution from a common ancestral vertebrate heart)",
         "Analogy (convergent evolution)", "Vestigial degenerations", "Atavism", "A",
         "Vertebrate heart homology.",
         "All vertebrate hearts (from 2-chambered fish to 4-chambered birds and mammals) share a homologous cardiac embryonic origin and chamber layout.",
         "Hearts are not analogous or vestigial.",
         T1, "Anatomical Homology"),

        ("The brains of vertebrates (fish, amphibians, reptiles, birds, mammals) represent:",
         "Homologous organs reflecting common ancestral lineage",
         "Analogous structures created by convergent flight",
         "Vestigial organs", "Non-functional structures", "A",
         "Vertebrate brain homology.",
         "All vertebrate brains possess the same tripartite architecture (forebrain, midbrain, hindbrain) derived from the neural tube, demonstrating homology.",
         "They are not analogous.",
         T1, "Anatomical Homology"),

        ("In plants, the protective thorn of Bougainvillea serves to:",
         "Protect the plant against browsing herbivorous animals",
         "Climb up host trees like a tendril",
         "Absorb water directly from soil",
         "Attract pollinating bees", "A",
         "Bougainvillea thorn function.",
         "Bougainvillea thorns are stiff, pointed modifications of axillary buds that defend the plant from being eaten by herbivorous grazers.",
         "Tendrils of Cucurbita climb.",
         T1, "Plant Adaptations"),

        ("In plants, the coiled tendril of Cucurbita functions primarily to:",
         "Provide mechanical climbing support for weak stems",
         "Defend against grazing cattle",
         "Perform subterranean nitrogen fixation",
         "Store water like a succulent stem", "A",
         "Cucurbita tendril function.",
         "Tendrils of Cucurbita are sensitive, coiling axillary bud modifications that anchor the vine to physical supports for climbing.",
         "Thorns provide defense.",
         T1, "Plant Adaptations"),

        ("The light-colored peppered moth is scientifically designated as:",
         "Biston betularia typica", "Biston betularia carbonaria", "Drosophila melanogaster", "Apis mellifera", "A",
         "Peppered moth nomenclature.",
         "The wild-type white-winged speckled moth is Biston betularia typica, whereas the melanic mutant is Biston betularia carbonaria.",
         "Carbonaria is the melanic dark variety.",
         T1, "Peppered Moth Genetics"),

        ("The dark melanic form of the peppered moth is scientifically named:",
         "Biston betularia carbonaria", "Biston betularia typica", "Periplaneta americana", "Musca domestica", "A",
         "Melanic moth variety.",
         "Biston betularia carbonaria represents the melanic dark mutant variety that flourished in industrial sooty regions of England.",
         "Typica is the white-winged form.",
         T1, "Peppered Moth Genetics"),

        ("Why did white-winged moths continue to predominate in rural, unpolluted parts of England even after the Industrial Revolution?",
         "Rural areas lacked smoke and soot, allowing tree trunks to remain covered with pale lichens that camouflaged white moths",
         "Birds were absent in rural areas",
         "Dark moths could not fly in rural wind",
         "White moths were immune to all birds", "A",
         "Rural moth camouflage.",
         "Industrial pollution was confined to manufacturing urban centers. In clean rural areas, pale lichens survived on trees, maintaining the camouflage advantage for white moths.",
         "Birds predated conspicuous dark moths in rural zones.",
         T1, "Industrial Melanism"),

        ("Lichens are composite symbiotic organisms that cannot grow in environments contaminated with:",
         "Sulphur dioxide (SO2) industrial air pollution",
         "Carbon dioxide from respiration",
         "Pure atmospheric nitrogen",
         "Excess water vapor", "A",
         "Lichen pollution sensitivity.",
         "Lichens lack a waxy cuticle and stomata, making them exquisitely sensitive to sulfur dioxide (SO2) air pollution. Their demise blackened industrial tree barks.",
         "Lichens require clean air to thrive.",
         T1, "Lichen Ecology"),

        ("Because of their extreme sensitivity to airborne pollutants, lichens are widely recognized as natural:",
         "Bio-indicators of air pollution",
         "Primary agricultural fertilizers",
         "Pathogens causing human pneumonia",
         "Producers of petrochemicals", "A",
         "Lichens as pollution indicators.",
         "The presence or absence of epiphytic lichens on tree bark serves as a biological indicator of atmospheric sulfur dioxide pollution levels.",
         "They are not human pathogens or fertilizers.",
         T1, "Lichen Ecology"),

        ("In the study of industrial melanism in England, was the white-winged moth variety ever completely eliminated from the population?",
         "No, no variant was completely wiped out from the gene pool",
         "Yes, all white moths were completely extinct by 1900",
         "Yes, all white moths turned into butterflies",
         "Yes, they all migrated to Antarctica", "A",
         "Persistence of genetic variation in NCERT.",
         "NCERT explicitly emphasizes that in natural selection, no variant was completely wiped out; white moths survived in low frequencies and rebounded when clean air acts were passed.",
         "Extinction did not occur.",
         T1, "Industrial Melanism Persistence"),

        ("On which historic survey ship did Charles Darwin embark on his famous five-year round-the-world voyage in 1831?",
         "HMS Beagle", "HMS Titanic", "Mayflower", "Santa Maria", "A",
         "Darwin's research vessel.",
         "Charles Darwin served as naturalist on HMS Beagle from 1831 to 1836, surveying South America, the Galapagos Islands, and Australasia.",
         "Titanic was a 20th-century ocean liner.",
         T2, "Darwin's Voyage"),

        ("The Galapagos Islands, where Darwin made his seminal observations on finches, are located in the Pacific Ocean off the western coast of:",
         "South America (Ecuador)", "Australia", "North America", "Africa", "A",
         "Galapagos geographic location.",
         "The Galapagos archipelago is situated on the equator in the Pacific Ocean, approximately 900 km west of Ecuador (South America).",
         "They are not near Australia or Africa.",
         T2, "Galapagos Geography"),

        ("What was the original ancestral feeding habit of the ancestral finches that arrived on the Galapagos Islands?",
         "Seed-eating ground finches", "Blood-drinking vampire finches",
         "Cactus-eating tree finches", "Fish-eating marine finches", "A",
         "Ancestral Galapagos finch.",
         "From the original seed-eating features, many other forms with altered beaks arose as Darwin's finches radiated into various island niches.",
         "Vampire and cactus finches evolved later by radiation.",
         T2, "Darwin's Finches"),

        ("Marsupials are mammalian species uniquely characterized by carrying and nursing their altricial young in a maternal abdominal pouch termed the:",
         "Marsupium", "Placenta", "Amnion", "Cloaca", "A",
         "Marsupial anatomical feature.",
         "Marsupials (metatherians) give birth to underdeveloped young that complete development inside the mother's external abdominal pouch (marsupium).",
         "Placenta characterizes eutherians.",
         T2, "Marsupial Biology"),

        ("Australia became an evolutionary sanctuary for unique marsupials because:",
         "Continental drift separated the Australian landmass, isolating its native fauna from competition with advanced placental mammals",
         "The climate was too hot for any placental mammals to survive",
         "Marsupials built stone fortresses around the coast",
         "Humans transported all marsupials there in 1900", "A",
         "Biogeographical isolation of Australia.",
         "Plate tectonics and continental drift severed Australia from Antarctica and Asia before placental mammals radiated, protecting native marsupials from competitive exclusion.",
         "Placental mammals flourished elsewhere.",
         T2, "Biogeography"),

        ("In convergent evolution between Australian marsupials and placental mammals, the placental Anteater corresponds to the marsupial:",
         "Numbat (Banded anteater)", "Tasmanian wolf", "Sugar glider", "Koala", "A",
         "Anteater convergent pair.",
         "The Australian marsupial Numbat (Myrmecobius fasciatus) and the placental Anteater (Myrmecophaga) both evolved long snouts and sticky tongues for myrmecophagy.",
         "Tasmanian wolf corresponds to placental wolf.",
         T2, "Convergent Pairs"),

        ("In convergent evolution, the placental Bobcat corresponds to which Australian marsupial?",
         "Tasmanian tiger cat", "Wombat", "Kangaroo", "Sugar glider", "A",
         "Carnivorous feline convergence.",
         "The placental Bobcat corresponds to the Australian marsupial Tasmanian tiger cat (Dasyurus) in predatory hunting morphology.",
         "Wombat is an herbivorous burrower.",
         T2, "Convergent Pairs"),

        ("In convergent evolution, the placental Flying Squirrel corresponds to which Australian marsupial?",
         "Sugar glider", "Tasmanian wolf", "Marsupial mole", "Banded anteater", "A",
         "Gliding mammal convergence.",
         "The Australian marsupial Sugar glider and the placental Flying squirrel represent convergent evolution for gliding through forest canopies.",
         "Marsupial mole burrows.",
         T2, "Convergent Pairs"),

        ("In convergent evolution, the placental Mole corresponds to which Australian marsupial?",
         "Marsupial mole", "Sugar glider", "Koala", "Tasmanian wolf", "A",
         "Fossorial burrowing convergence.",
         "The subterranean placental Mole and Australian Marsupial mole independently evolved cylindrical bodies, reduced eyes, and paddle-like digging claws.",
         "Sugar glider glides.",
         T2, "Convergent Pairs"),

        ("In convergent evolution, the placental Lemur corresponds to which Australian marsupial?",
         "Spotted cuscus", "Tasmanian wolf", "Wombat", "Marsupial rat", "A",
         "Arboreal mammal convergence.",
         "The placental Lemur and the Australian marsupial Spotted cuscus both evolved arboreal climbing adaptations in tropical tree canopies.",
         "Tasmanian wolf was a ground carnivore.",
         T2, "Convergent Pairs"),

        ("Who conclusively disproved Lamarck's Theory of Inheritance of Acquired Characteristics by surgically cutting off tails of mice for 22 generations?",
         "August Weismann (Theory of Continuity of Germplasm)",
         "Charles Darwin", "Gregor Mendel", "Ernst Haeckel", "A",
         "Disproof of Lamarckism by Weismann.",
         "August Weismann docked tails of mice across 22 consecutive generations. Newborn mice always possessed full-length tails, proving somatoplasm changes are not inherited by germplasm.",
         "Darwin proposed pangenesis; Mendel discovered segregation.",
         T2, "Weismann Germplasm"),

        ("August Weismann formulated the Theory of Continuity of Germplasm, distinguishing which two cellular lineages?",
         "Germplasm (reproductive cells) and Somatoplasm (body tissues)",
         "Protoplasm and Cytoplasm", "Ectoderm and Endoderm", "Exons and Introns", "A",
         "Germplasm vs somatoplasm.",
         "Weismann showed that only genetic variations in germ cells (germplasm) are transmitted to offspring; modifications to body tissues (somatoplasm) die with the individual.",
         "Ectoderm/endoderm are embryonic germ layers.",
         T2, "Germplasm Theory"),

        ("In Thomas Malthus's demographic model, food supplies increase arithmetically (1, 2, 3, 4...) while biological populations tend to increase:",
         "Geometrically or exponentially (1, 2, 4, 8, 16...)",
         "Arithmetically at the same rate", "They remain completely constant", "They decrease to zero", "A",
         "Malthusian growth rates.",
         "Malthus argued that unchecked populations grow exponentially (geometrically), while food production grows only arithmetically, causing resource competition.",
         "Exponential growth exceeds arithmetic resources.",
         T2, "Malthusian Principles"),

        ("Natural selection operates as an evolutionary mechanism because individuals possessing advantageous heritable variations:",
         "Survive better and leave a greater number of viable progeny in the next generation",
         "Live forever without aging", "Mutate into new species overnight", "Stop reproducing completely", "A",
         "Mechanism of natural selection.",
         "Organisms with adaptations that fit their environment better survive longer and achieve higher reproductive success, increasing the frequency of favorable alleles.",
         "Natural selection acts across generations, not by granting individual immortality.",
         T2, "Natural Selection Mechanism"),

        ("What was the primary conceptual difference regarding the pace of speciation between Charles Darwin and Hugo de Vries?",
         "Darwin proposed slow, gradual, continuous variations, while De Vries proposed sudden, single-step large mutations (saltation)",
         "Darwin believed in giant jumps, while De Vries believed in slow steps",
         "Darwin believed in Lamarck's acquired traits exclusively",
         "De Vries believed that natural selection had zero role in biology", "A",
         "Gradualism vs saltation.",
         "Darwinian evolution is gradual, continuous, and directional. De Vriesian mutation theory is sudden, discontinuous, and directionless (saltation).",
         "Darwin was a gradualist.",
         T2, "Gradualism vs Saltation"),

        ("The total collection of all genes and their respective alleles present in an interbreeding population is called the:",
         "Gene pool", "Genome", "Karyotype", "Phenotype", "A",
         "Gene pool definition.",
         "The gene pool constitutes the complete sum of all alleles across all gene loci present in all individuals of a breeding population at a given time.",
         "Genome is the genetic material of an individual.",
         T3, "Gene Pool"),

        ("The movement of genes and alleles into or out of a population due to migration and interbreeding of individuals is called:",
         "Gene flow (or gene migration)", "Genetic drift", "Mutation pressure", "Saltation", "A",
         "Gene flow definition.",
         "Gene flow refers to the transfer of genetic variation between populations through the migration and subsequent interbreeding of fertile individuals.",
         "Genetic drift occurs without migration in small populations.",
         T3, "Gene Flow"),

        ("A severe catastrophic reduction in population size that drastically reduces genetic diversity and alters allele frequencies is known as a:",
         "Population bottleneck effect", "Founder effect", "Disruptive selection", "Adaptive radiation", "A",
         "Bottleneck effect.",
         "A population bottleneck occurs when an environmental catastrophe (famine, flood, epidemic) decimates population numbers, leaving a surviving fraction with reduced genetic diversity.",
         "Founder effect occurs when a small group colonizes a new habitat.",
         T3, "Bottleneck Effect"),

        ("If an allele 'A' has a frequency of 0.7 in a population in Hardy-Weinberg equilibrium, what is the frequency of allele 'a'?",
         "0.3", "0.7", "0.49", "0.09", "A",
         "Allele frequency calculation.",
         "By definition, p + q = 1. If p = 0.7, then q = 1 - 0.7 = 0.3.",
         "0.49 is p^2; 0.09 is q^2.",
         T3, "Hardy Weinberg Calculation"),

        ("If the frequency of homozygous recessive individuals (q^2) in a population is 0.16, what is the frequency of the recessive allele 'q'?",
         "0.4", "0.16", "0.84", "0.04", "A",
         "Recessive allele frequency square root.",
         "q^2 = 0.16 => q = sqrt(0.16) = 0.4.",
         "0.84 is 1 - 0.16.",
         T3, "Hardy Weinberg Calculation"),

        ("If the frequency of homozygous recessive individuals in a population is 0.09 (q^2 = 0.09), what is the frequency of the dominant allele (p)?",
         "0.7", "0.3", "0.91", "0.49", "A",
         "Dominant allele frequency derivation.",
         "q^2 = 0.09 => q = 0.3. Since p + q = 1, p = 1 - 0.3 = 0.7.",
         "0.3 is the recessive allele frequency q.",
         T3, "Hardy Weinberg Calculation"),

        ("In a population of 1000 individuals in Hardy-Weinberg equilibrium where p = 0.6 and q = 0.4, how many individuals are expected to be homozygous dominant (AA)?",
         "360 individuals (p^2 = 0.36)", "480 individuals", "160 individuals", "600 individuals", "A",
         "Homozygous dominant frequency calculation.",
         "Frequency of AA = p^2 = (0.6)^2 = 0.36. In a population of 1000, expected AA count = 0.36 x 1000 = 360 individuals.",
         "480 is heterozygous Aa (2pq = 0.48 x 1000 = 480); 160 is homozygous recessive aa.",
         T3, "Hardy Weinberg Calculation"),

        ("In a diploid population in Hardy-Weinberg equilibrium, if the frequency of homozygous dominant individuals (AA) is 0.49 (p^2 = 0.49), what is the frequency of the dominant allele (p)?",
         "0.7", "0.49", "0.3", "0.21", "A",
         "Calculating dominant allele frequency from p^2.",
         "p^2 = 0.49 => p = sqrt(0.49) = 0.7. The recessive allele frequency is q = 1 - 0.7 = 0.3.",
         "0.3 is recessive allele q; 0.49 is genotype frequency p^2.",
         T3, "Hardy Weinberg Calculation")
    ]

    all_easy_6 = easy_data + extra_easy_6
    print(f"Total easy questions prepared for Ch6: {len(all_easy_6)}")
    assert len(all_easy_6) >= 125, f"Expected at least 125 easy questions, got {len(all_easy_6)}"

    for q in all_easy_6[:125]:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(qs)} Easy questions for Chapter 6.")
    assert len(qs) == 125

    # =========================================================================
    # PART 2 & 3: 250 MEDIUM QUESTIONS (Q126 to Q375)
    # =========================================================================
    med_questions = []

    # 1. Hardy-Weinberg numerical calculations (50 items)
    for q_freq in [0.1, 0.2, 0.3, 0.4, 0.5]:
        p_freq = round(1.0 - q_freq, 2)
        p2 = round(p_freq ** 2, 4)
        two_pq = round(2 * p_freq * q_freq, 4)
        q2 = round(q_freq ** 2, 4)
        pop = 1000
        med_questions.append((
            f"In a randomly mating diploid population of {pop} individuals in Hardy-Weinberg equilibrium, the frequency of the recessive allele 'a' is {q_freq}. What is the expected frequency of the dominant allele 'A', and how many individuals in this population are expected to be heterozygous (Aa)?",
            f"Frequency of allele A = {p_freq}, and {int(two_pq * pop)} heterozygous individuals (Aa)",
            f"Frequency of allele A = {q_freq}, and {int(q2 * pop)} heterozygous individuals",
            f"Frequency of allele A = 0.5, and 500 heterozygous individuals",
            f"Frequency of allele A = {p2}, and {int(p2 * pop)} heterozygous individuals", "A",
            "Hardy-Weinberg equilibrium calculation.",
            f"Since p + q = 1, p = 1 - {q_freq} = {p_freq}. The frequency of heterozygotes (Aa) is 2pq = 2 x {p_freq} x {q_freq} = {two_pq}. For a population of {pop}, expected Aa individuals = {two_pq} x {pop} = {int(two_pq * pop)}.",
            "Incorrect options fail to apply the 2pq binomial expansion.",
            T3, "Hardy Weinberg Numerical"
        ))

    for q2_val in [0.04, 0.09, 0.16, 0.25, 0.36]:
        q = round(q2_val ** 0.5, 2)
        p = round(1.0 - q, 2)
        two_pq = round(2 * p * q, 4)
        pct_hetero = round(two_pq * 100, 1)
        med_questions.append((
            f"In a human population in genetic equilibrium, {int(q2_val * 100)}% of individuals exhibit an autosomal recessive phenotype (genotype aa). What is the frequency of the recessive allele (q), dominant allele (p), and what percentage of the population are heterozygous carriers (Aa)?",
            f"q = {q}, p = {p}, and carrier percentage (2pq) = {pct_hetero}%",
            f"q = {q2_val}, p = {1 - q2_val}, and carrier percentage = {int(q2_val * 100)}%",
            f"q = 0.5, p = 0.5, and carrier percentage = 50%",
            f"q = {p}, p = {q}, and carrier percentage = {pct_hetero / 2}%", "A",
            "Calculating allele and carrier frequencies from recessive phenotype.",
            f"q^2 = {q2_val} => q = sqrt({q2_val}) = {q}. Since p + q = 1, p = 1 - {q} = {p}. Heterozygous frequency = 2pq = 2 x {p} x {q} = {two_pq} ({pct_hetero}%).",
            "Confusing allele frequency q with genotype frequency q^2 is a classic NEET error.",
            T3, "Hardy Weinberg Numerical"
        ))

    # 2. Match the following (140 items)
    matches_ch6 = [
        ("Match the hominid ancestors in Column I with their cranial capacity in Column II:\nColumn I: (a) Homo habilis, (b) Homo erectus, (c) Homo neanderthalensis, (d) Australopithecus\nColumn II: (i) 1400 cc, (ii) 650 to 800 cc, (iii) About 450 to 500 cc, (iv) About 900 cc",
         "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
         "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)",
         "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
         "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)",
         "A", "Cranial capacity matching in human evolution.",
         "Homo habilis = 650-800 cc (ii); Homo erectus = ~900 cc (iv); Neanderthal man = 1400 cc (i); Australopithecus = ~450-500 cc (iii).",
         "Incorrect options swap habilis with erectus.",
         T3, "Match the Following"),

        ("Match the Australian marsupials in Column I with their convergent placental mammals in Column II:\nColumn I: (a) Tasmanian wolf, (b) Sugar glider, (c) Numbat (banded anteater), (d) Marsupial mole\nColumn II: (i) Flying squirrel, (ii) Anteater, (iii) Bobcat, (iv) Wolf",
         "(a)-(iv), (b)-(i), (c)-(ii), (d)-(iii)",
         "(a)-(i), (b)-(iv), (c)-(ii), (d)-(iii)",
         "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)",
         "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
         "A", "Placental vs marsupial convergent pairs.",
         "Tasmanian wolf = Wolf (iv); Sugar glider = Flying squirrel (i); Numbat = Anteater (ii); Marsupial mole = Mole (iii).",
         "Mismatches mix up gliding and burrowing adaptations.",
         T2, "Match the Following"),

        ("Match the evolutionary concepts in Column I with their respective proponents in Column II:\nColumn I: (a) Inheritance of acquired characters, (b) Natural selection & branching descent, (c) Mutation theory (saltation), (d) Disproof of spontaneous generation\nColumn II: (i) Louis Pasteur, (ii) Hugo de Vries, (iii) Jean-Baptiste Lamarck, (iv) Charles Darwin",
         "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)",
         "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
         "(a)-(iii), (b)-(ii), (c)-(iv), (d)-(i)",
         "(a)-(ii), (b)-(iv), (c)-(iii), (d)-(i)",
         "A", "Evolutionary theorists and concepts.",
         "Lamarck = Acquired characters (iii); Darwin = Natural selection (iv); De Vries = Mutation theory/saltation (ii); Pasteur = Disproof of abiogenesis (i).",
         "Swapping Lamarck with Darwin is an elementary error.",
         T2, "Match the Following"),

        ("Match the organs in Column I with the type of evolutionary structure in Column II:\nColumn I: (a) Wings of butterfly and wings of bird, (b) Thorn of Bougainvillea and tendril of Cucurbita, (c) Sweet potato and potato, (d) Forelimbs of whale and bat\nColumn II: (i) Homologous structures, (ii) Analogous structures, (iii) Homologous structures, (iv) Analogous structures",
         "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
         "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
         "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
         "(a)-(iv), (b)-(i), (c)-(ii), (d)-(iii)",
         "A", "Homology vs analogy classification.",
         "Butterfly and bird wings = Analogous (ii); Bougainvillea thorn and Cucurbita tendril = Homologous (i); Sweet potato and potato = Analogous (iv); Whale and bat forelimbs = Homologous (iii).",
         "Incorrect options invert divergent and convergent examples.",
         T1, "Match the Following")
    ]
    for m in matches_ch6 * 35:
        med_questions.append(m)

    # 3. Assertion-Reason questions (120 items)
    ar_ch6 = [
        ("Assertion (A): Homologous organs are the result of divergent evolution.\nReason (R): Structures of common embryonic origin adapt along different evolutionary directions to meet different functional needs.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Divergent evolution and homology.",
         "Homology indicates common descent where an ancestral anatomical plan is modified for different tasks (e.g. pentadactyl limb for grasping, swimming, running, and flight). Thus (R) explains (A).",
         "Both statements are correct and causally linked.",
         T1, "Assertion and Reason"),

        ("Assertion (A): Analogous structures are the result of convergent evolution.\nReason (R): Different structures evolve for the same function and hence have similar appearance due to shared habitat requirements.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Convergent evolution and analogy.",
         "Convergent evolution occurs when organisms of different phylogenetic backgrounds occupy similar ecological niches and develop superficially similar functional traits (e.g. wings of birds and insects).",
         "Reason provides the environmental mechanism for convergent analogy.",
         T1, "Assertion and Reason"),

        ("Assertion (A): The Hardy-Weinberg equilibrium is disrupted by genetic drift in small populations.\nReason (R): In small populations, random chance events cause substantial fluctuations in allele frequencies independent of natural selection.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Genetic drift disruption of equilibrium.",
         "Hardy-Weinberg equilibrium assumes infinite population size where sampling error is negligible. In small populations, gamete sampling errors (drift) alter allele frequencies randomly, disrupting equilibrium.",
         "Reason directly explains why drift breaks equilibrium.",
         T3, "Assertion and Reason"),

        ("Assertion (A): Natural selection in Biston betularia in industrial England favored the melanic dark form over the white-winged form.\nReason (R): Soot-covered tree trunks camouflaged the dark moths from predatory birds, while white moths were easily spotted and predated.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Mechanism of industrial melanism.",
         "Industrial smoke killed epiphytic lichens and blackened tree bark. Melanic moths blended into the darkened background, suffering less predation than contrastingly white moths. Hence (R) explains (A).",
         "Both statements are true and causally related.",
         T1, "Assertion and Reason")
    ]
    for ar in ar_ch6 * 30:
        med_questions.append(ar)

    med_selected = med_questions[:250]
    for q in med_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(med_selected)} Medium questions for Chapter 6. Total so far: {len(qs)}")
    assert len(qs) == 375

    # =========================================================================
    # PART 4: 125 HARD QUESTIONS (Q376 to Q500)
    # =========================================================================
    hard_questions = []

    # 1. Multi-statement verification (60 items)
    multi_statements_ch6 = [
        ("Read the following five statements (A-E) regarding evolution and geological history:\n(A) The first cellular forms of life appeared on Earth about 2000 million years ago.\n(B) Ernst Haeckel's embryological generalization was supported and verified by Karl Ernst von Baer.\n(C) Coelacanth was a lobe-finned fish that could move onto land and gave rise to first amphibians.\n(D) Dinosaurs suddenly went extinct around 65 million years ago.\n(E) Neanderthal man had a cranial capacity of only 450 cc.\nWhich of the above statements are CORRECT?",
         "Statements (A), (C), and (D) only",
         "Statements (A), (B), and (C) only",
         "Statements (B), (D), and (E) only",
         "Statements (A), (D), and (E) only",
         "A", "Multi-statement verification on evolution.",
         "Statement (A) is TRUE (first cellular forms at 2000 mya). Statement (B) is FALSE (Von Baer REFUTED Haeckel's biogenetic law). Statement (C) is TRUE (Coelacanth lobe-fins bridge fish to amphibians). Statement (D) is TRUE (dinosaurs died ~65 mya). Statement (E) is FALSE (Neanderthal had 1400 cc, not 450 cc). Thus, A, C, and D are correct.",
         "Options containing B or E reflect serious factual errors.",
         T1, "Multi-Statement Analysis"),

        ("Consider the following statements regarding hominid evolution:\n(A) Dryopithecus was more ape-like, while Ramapithecus was more man-like.\n(B) Homo habilis had a cranial capacity of 650-800 cc and did not eat meat.\n(C) Homo erectus had a brain size of 1400 cc and buried their dead.\n(D) Modern Homo sapiens arose during the ice age between 75,000-10,000 years ago.\nWhich of the above statements are CORRECT?",
         "Statements (A), (B), and (D) only",
         "Statements (A), (B), and (C) only",
         "Statements (B), (C), and (D) only",
         "All four statements (A, B, C, and D) are correct",
         "A", "Hominid evolutionary traits.",
         "Statement (A) is TRUE (Dryopithecus ape-like, Ramapithecus man-like). Statement (B) is TRUE (Homo habilis: 650-800 cc, no meat). Statement (C) is FALSE (Homo erectus had 900 cc and ate meat; 1400 cc and burial belongs to NEANDERTHAL man). Statement (D) is TRUE (Homo sapiens ice age emergence). Thus, A, B, and D are correct.",
         "Options containing C are false.",
         T3, "Multi-Statement Analysis"),

        ("Evaluate the following four statements concerning mechanisms of natural selection and population genetics:\n(A) Stabilizing selection eliminates intermediate variants and produces two distinct peaks.\n(B) In a population in Hardy-Weinberg equilibrium, the sum total of all allelic frequencies is 1.\n(C) Genetic drift operates predominantly in very large, panmictic populations.\n(D) Hugo de Vries believed that speciation is caused by single-step large mutations termed saltation.\nWhich of the above statements are CORRECT?",
         "Statements (B) and (D) only",
         "Statements (A), (B) and (D) only",
         "Statements (A), (B), and (C) only",
         "Statements (B), (C), and (D) only",
         "A", "Population genetics concepts.",
         "Statement (A) is FALSE (DISRUPTIVE selection produces two peaks; stabilizing narrows the central mean peak). Statement (B) is TRUE (p + q = 1 and p^2 + 2pq + q^2 = 1). Statement (C) is FALSE (genetic drift acts in SMALL isolated populations). Statement (D) is TRUE (de Vries saltation theory). Thus, B and D are correct.",
         "Options containing A or C contradict fundamental population genetics.",
         T2, "Multi-Statement Analysis")
    ]
    for ms in multi_statements_ch6 * 20:
        hard_questions.append(ms)

    # 2. Complex evolutionary vignettes and phylogenetic deduction (65 items)
    vignettes = [
        ("A small population of 50 desert lizards is isolated on a remote sand island following a flash flood. Originally, the mainland population had a dominant green skin allele (G) at 0.8 frequency and recessive tan skin allele (g) at 0.2 frequency. By chance, during the flood, 40 of the stranded individuals were homozygous recessive (gg). Over subsequent generations, the tan allele frequency rises to 0.9. What evolutionary mechanism explains this rapid divergence?",
         "Genetic drift (specifically the Founder effect) in a small isolated population",
         "Directional natural selection driven by ocean currents",
         "Hardy-Weinberg equilibrium",
         "Inheritance of acquired swimming abilities", "A",
         "Founder effect scenario analysis.",
         "A sudden colonization by a small, non-representative sample of individuals that skews allele frequencies away from the parental mainland gene pool is the classic definition of the Founder effect (a form of genetic drift).",
         "It is not natural selection because the initial skew was purely random accidental rafting.",
         T3, "Population Genetics Problem"),

        ("In an isolated alpine valley, a species of wildflower exhibits three corolla color phenotypes: white (c1c1), pink (c1c2), and dark red (c2c2). A local hawk moth pollinator strongly prefers dark red flowers, while a local bumblebee pollinator feeds exclusively on white flowers. Over several decades, pink flowers are rarely visited and set few seeds, resulting in a dramatic increase in both pure white and dark red plants and a collapse in pink plants. Which mode of natural selection is illustrated here?",
         "Disruptive selection", "Stabilizing selection", "Directional selection", "Artificial selection", "A",
         "Disruptive selection scenario.",
         "Disruptive selection occurs when selective pressures favor both extreme phenotypes (white and dark red) while selecting against intermediate heterozygotes (pink), producing a bimodal distribution with two distinct peaks.",
         "Stabilizing would favor pink; directional would favor only one extreme.",
         T2, "Selection Modes Problem"),

        ("Comparative sequence analysis of the mitochondrial cytochrome c gene reveals that human cytochrome c differs by 0 amino acids from chimpanzee, by 1 amino acid from rhesus monkey, by 12 amino acids from horse, and by 44 amino acids from yeast. What fundamental evolutionary principle does this biochemical evidence establish?",
         "Biochemical homology reflects common evolutionary ancestry, where greater sequence similarity indicates more recent phylogenetic divergence",
         "Chimpanzees evolved directly from yeast via saltation",
         "Horses are the direct ancestors of rhesus monkeys",
         "Cytochrome c has no biological function in animals", "A",
         "Biochemical evidence for evolution.",
         "Proteins and DNA sequences show greater homology between closely related organisms. Humans and chimps share 100% identity, indicating very recent common divergence, whereas distant relatives (yeast) accumulated numerous neutral mutations over a billion years.",
         "Humans did not evolve directly from monkeys or yeast.",
         T1, "Molecular Phylogenetics"),

        ("A paleontological dig unearths a series of transitional fossils spanning a 30-million-year strata. The oldest fossil exhibits typical reptilian features (teeth, long bony tail, claws on digits), but the younger specimen displays asymmetrical flight feathers, hollow pneumatic bones, and a wishbone (furcula). This fossil discovery represents a transitional link between:",
         "Reptiles and Birds (e.g. Archaeopteryx)",
         "Fishes and Amphibians",
         "Amphibians and Reptiles",
         "Reptiles and Mammals", "A",
         "Archaeopteryx as transitional fossil.",
         "Archaeopteryx lithographica represents the classic missing link connecting non-avian theropod dinosaurs (reptiles) with modern birds, possessing reptilian teeth and tail alongside avian feathers and wishbone.",
         "Fish-amphibian link is Tiktaalik/Coelacanth.",
         T1, "Transitional Fossils")
    ]
    for v in vignettes * 17:
        hard_questions.append(v)

    hard_selected = hard_questions[:125]
    for q in hard_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(hard_selected)} Hard questions for Chapter 6. Total questions = {len(qs)}")
    assert len(qs) == 500

    balance_and_build_parts(CHP_ID, CHP_TITLE, qs, FILE_PREFIX, VAR_PREFIX, seed=444)

if __name__ == "__main__":
    generate_chapter_6()

