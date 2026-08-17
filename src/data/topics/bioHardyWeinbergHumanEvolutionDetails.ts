import { DetailedTopicContent } from '../../types/neet';

export const bioHardyWeinbergHumanEvolutionDetails: DetailedTopicContent = {
  topicId: "bio-hardy-weinberg-human-evolution",
  topicName: "Hardy-Weinberg Principle, Speciation & Origin of Man",
  subject: "Biology",
  class: "Class 12",
  classification: "Genetics & Evolution",
  chapter: "Evolution",

  whatIsThisTopic: "Master-level NCERT & NEET UG exploration of population genetics, Hardy-Weinberg genetic equilibrium, mathematical derivations (p + q = 1 and p² + 2pq + q² = 1), five evolutionary forces disrupting equilibrium (Gene Migration/Gene Flow, Genetic Drift/Sewall Wright effect, Bottleneck effect, Founder effect, Mutation, Genetic Recombination, Natural Selection), three graphical modes of Natural Selection on quantitative traits (Stabilizing, Directional, and Disruptive selection with before/after distribution curves), and the complete chronological sequence of Human Evolution (Dryopithecus, Ramapithecus, Australopithecus, Homo habilis, Homo erectus, Homo neanderthalensis, Homo sapiens) with exact cranial capacities, dietary habits, tool-making, fire usage, cultural practices, and evolutionary milestones.",

  basicIdea: [
    "Population Genetics & Gene Pool: A gene pool is the total collection of all genes and their respective alleles present in a sexually reproducing population at a given time. Evolution is fundamentally a change in the allele frequencies of a population's gene pool over successive generations.",
    "Hardy-Weinberg Principle (1908 - G.H. Hardy & Wilhelm Weinberg): In a large, randomly mating population, allele frequencies and genotype frequencies remain constant (in genetic equilibrium) from generation to generation in the absence of evolutionary forces.",
    "Mathematical Equations: (1) Allele Frequency Equation: p + q = 1 (where p = frequency of dominant allele A, q = frequency of recessive allele a). (2) Genotype Frequency Equation: (p + q)² = p² + 2pq + q² = 1 (where p² = frequency of homozygous dominant AA, 2pq = frequency of heterozygous Aa, q² = frequency of homozygous recessive aa).",
    "Five Assumptions for Hardy-Weinberg Equilibrium: (1) Large population size; (2) Random mating (panmixia); (3) No gene mutation; (4) No gene flow/migration; (5) No natural selection.",
    "Five Factors Disrupting Hardy-Weinberg Equilibrium (Driving Forces of Evolution): (1) Gene Flow / Gene Migration; (2) Genetic Drift (Sewall Wright effect in small populations, including Bottleneck and Founder effects); (3) Gene Mutation; (4) Genetic Recombination (meiotic crossing over & independent assortment); (5) Natural Selection.",
    "Three Types of Natural Selection Operating on Phenotypic Distributions: (1) Stabilizing Selection (favors intermediate/mean phenotype, eliminates extremes, peak narrows; e.g., human birth weight ~3 kg); (2) Directional Selection (favors one extreme phenotype, curve shifts in one direction; e.g., Industrial melanism, antibiotic resistance); (3) Disruptive Selection (favors both extremes over the mean, produces two peaks, leads to speciation).",
    "Human Evolution Chronology & Cranial Capacities: Dryopithecus (~15 mya, ape-like) -> Ramapithecus (~15 mya, man-like) -> Two-legged hominids in Ethiopia/Tanzania (~3–4 mya, walked upright, <4 feet) -> Australopithecus (~2 mya, East Africa, bipedal, fruit-eating, stone weapons) -> Homo habilis (First hominid tool-maker, 650–800 cc, did not eat meat) -> Homo erectus (1.5 mya, Java man, 900 cc, ate meat, used fire) -> Neanderthal man (100,000–40,000 years ago, 1400 cc, buried dead, used hides) -> Homo sapiens (Modern man, arose in Africa 75,000–10,000 years ago, cave art 18,000 yrs ago at Bhimbetka, agriculture 10,000 yrs ago)."
  ],

  importantTerms: [
    {
      term: "Gene Pool",
      definition: "The complete set of unique genes and alleles found in all individuals of an interbreeding biological population at a given time.",
      neetNote: "Evolution occurs when the allele frequencies within the gene pool change over generations."
    },
    {
      term: "Hardy-Weinberg Equilibrium",
      definition: "The state of genetic stability in a population where allele and genotype frequencies remain constant across generations in the absence of disturbing evolutionary forces.",
      neetNote: "Mathematical formulation: p² + 2pq + q² = 1 and p + q = 1."
    },
    {
      term: "Genetic Drift (Sewall Wright Effect)",
      definition: "Random, non-directional fluctuations in allele frequencies from one generation to the next occurring purely due to chance events, operating most intensely in small populations.",
      neetNote: "Does not depend on adaptive value; can cause loss (frequency 0) or fixation (frequency 1) of alleles."
    },
    {
      term: "Founder Effect",
      definition: "The loss of genetic variation that occurs when a small group of individuals (founders) splits off from a larger parent population to colonize an isolated new territory, with the founding gene frequencies forming a new distinct population/species.",
      neetNote: "Classic mechanism of allopatric speciation; original small colony acts as 'founders'."
    },
    {
      term: "Bottleneck Effect",
      definition: "A severe, sharp reduction in population size caused by environmental catastrophes (floods, earthquakes, fires, epidemics), randomly eliminating alleles and drastically reducing genetic diversity.",
      neetNote: "Example: Cheetah population exhibiting extreme genetic homozygosity following prehistoric bottlenecks."
    },
    {
      term: "Stabilizing Selection (Centripetal Selection)",
      definition: "The mode of natural selection that favors intermediate (mean) phenotypic trait values while selecting against both phenotypic extremes, causing the distribution curve to become taller and narrower.",
      neetNote: "Example: Optimum human infant birth weight (~3.0 to 3.5 kg)."
    },
    {
      term: "Directional Selection (Progressive Selection)",
      definition: "The mode of natural selection that consistently favors phenotypes at one extreme of the distribution, causing the entire phenotypic curve to shift toward that direction.",
      neetNote: "Examples: Industrial melanism in Biston betularia, antibiotic resistance, DDT resistance."
    },
    {
      term: "Disruptive Selection (Diversifying Selection)",
      definition: "The mode of natural selection that simultaneously favors individuals at both extremes of a phenotypic distribution while eliminating intermediate phenotypes, producing a bimodal distribution with two distinct peaks.",
      neetNote: "Can split a single population into two divergent sub-populations (sympatric speciation)."
    },
    {
      term: "Cranial Capacity",
      definition: "The internal volume of the braincase (cranium) measured in cubic centimeters (cc), used as a metric for evolutionary encephalization in hominid fossils.",
      neetNote: "H. habilis (650–800 cc) -> H. erectus (900 cc) -> Neanderthal (1400 cc) -> Modern H. sapiens (1350–1400 cc)."
    },
    {
      term: "Bipedalism",
      definition: "The form of terrestrial locomotion where an organism moves using only its two rear/hind limbs in an upright posture.",
      neetNote: "First definitively seen in Australopithecines (~2 mya) and early African hominids (3–4 mya)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. The Hardy-Weinberg Principle & Genetic Equilibrium",
      paragraphs: [
        "In 1908, British mathematician Godfrey Harold Hardy and German physician Wilhelm Weinberg independently formulated the Hardy-Weinberg Principle of Population Genetics.",
        "Core Definition: In a diploid, sexually reproducing population that is large and randomly mating, allele frequencies and genotype frequencies remain constant (in genetic equilibrium) from generation to generation unless acted upon by evolutionary forces.",
        "Concept of Allele Frequency: In a population, the gene for a given trait exists in two allelic forms: dominant allele $A$ and recessive allele $a$.",
        "• Let the frequency of dominant allele $A$ in the gene pool be represented by $p$.",
        "• Let the frequency of recessive allele $a$ in the gene pool be represented by $q$.",
        "• Since these two alleles account for 100% of the alleles at this genetic locus: $$p + q = 1$$",
        "Derivation of Genotype Frequencies:",
        "When male gametes (sperm) carrying alleles $A$ ($p$) and $a$ ($q$) randomly fertilize female gametes (eggs) carrying alleles $A$ ($p$) and $a$ ($q$), the resulting diploid genotype frequencies in the next generation are obtained by expanding the binomial $(p + q)^2$:",
        "$$(p + q)^2 = p^2 + 2pq + q^2 = 1$$",
        "• $p^2$ = Frequency of Homozygous Dominant individuals ($AA$)",
        "• $2pq$ = Frequency of Heterozygous Carrier individuals ($Aa$)",
        "• $q^2$ = Frequency of Homozygous Recessive individuals ($aa$)",
        "Biological Significance: The sum of all genotype frequencies equals 1 (or 100%). Any measurable deviation from the predicted Hardy-Weinberg proportions indicates that evolutionary forces are actively operating on the population (Evolution is taking place)."
      ],
      importantPoints: [
        "Allele frequency equation: $p + q = 1$.",
        "Genotype frequency equation: $p^2 + 2pq + q^2 = 1$.",
        "Deviation from Hardy-Weinberg equilibrium indicates EVOLUTIONARY CHANGE in the gene pool."
      ]
    },
    {
      heading: "2. Five Conditions & Five Evolutionary Factors Disrupting Equilibrium",
      paragraphs: [
        "Hardy-Weinberg equilibrium holds true ONLY when five strict conditions are met:",
        "1. Large Population Size: The population must be infinitely or extremely large to prevent random sampling errors (genetic drift).",
        "2. Random Mating (Panmixis): Every individual has an equal probability of mating with any individual of the opposite sex (no sexual selection or assortative mating).",
        "3. No Gene Mutation: Alleles must not mutate from $A \\to a$ or $a \\to A$.",
        "4. No Gene Migration (Closed Population): No immigration of new individuals bringing foreign alleles, and no emigration removing alleles.",
        "5. No Natural Selection: All genotypes must possess equal reproductive fitness and survival rates.",
        "Five Factors Disrupting Equilibrium (The Five Drivers of Evolution):",
        "• 1. Gene Flow / Gene Migration: Movement of individuals (and their gametes) into (immigration) or out of (emigration) a population. Gene flow adds new alleles to the recipient gene pool and removes alleles from the donor pool, reducing genetic differences between populations.",
        "• 2. Genetic Drift (Sewall Wright Effect): Random fluctuations in allele frequencies from generation to generation due to chance events in SMALL populations. Over time, genetic drift leads to loss of genetic variation or fixation of alleles ($p = 1.0$ or $q = 1.0$):",
        "  - Bottleneck Effect: Severe population decline caused by environmental catastrophes (flood, fire, drought, epidemic) that indiscriminately wipes out the majority of individuals regardless of their fitness. The few survivors pass on an unrepresentative sample of alleles.",
        "  - Founder Effect: When a few individuals become geographically isolated from a parent population to establish a new colony. The founder group's allele frequencies differ sharply from the parental gene pool, and subsequent generations carry only this restricted gene set, often forming a new species.",
        "• 3. Gene Mutation: Spontaneous nucleotide changes generating novel alleles. Although mutation rates are low per generation, mutations provide the ultimate raw material for evolution.",
        "• 4. Genetic Recombination: Meiotic crossing over in pachytene and independent assortment in metaphase I generate novel combinations of pre-existing alleles.",
        "• 5. Natural Selection: Differential reproductive success among genotypes that increases the frequency of adaptive alleles over generations."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="700" height="360" fill="#0f172a" rx="16"/>
  <!-- Title -->
  <rect x="20" y="12" width="660" height="42" fill="#1e293b" rx="8" stroke="#334155" stroke-width="1.5"/>
  <text x="350" y="38" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">GENETIC DRIFT: THE FOUNDER EFFECT IN POPULATION GENETICS</text>
  
  <!-- Original Large Population -->
  <rect x="40" y="70" width="260" height="180" fill="#1e293b" rx="10" stroke="#38bdf8" stroke-width="2"/>
  <text x="170" y="95" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">ORIGINAL PARENT POPULATION</text>
  <text x="170" y="115" fill="#94a3b8" font-size="11" text-anchor="middle">(Large Genetic Diversity)</text>
  
  <!-- Circles representing diverse alleles -->
  <circle cx="80" cy="145" r="10" fill="#38bdf8"/>
  <circle cx="120" cy="145" r="10" fill="#38bdf8"/>
  <circle cx="160" cy="145" r="10" fill="#fbbf24"/>
  <circle cx="200" cy="145" r="10" fill="#34d399"/>
  <circle cx="240" cy="145" r="10" fill="#f87171"/>
  
  <circle cx="80" cy="185" r="10" fill="#fbbf24"/>
  <circle cx="120" cy="185" r="10" fill="#34d399"/>
  <circle cx="160" cy="185" r="10" fill="#f87171"/>
  <circle cx="200" cy="185" r="10" fill="#38bdf8"/>
  <circle cx="240" cy="185" r="10" fill="#a855f7"/>
  
  <text x="170" y="235" fill="#cbd5e1" font-size="10" text-anchor="middle">Equal mix of diverse alleles: A, B, C, D, E</text>
  
  <!-- Splinter / Migration Arrow -->
  <path d="M 310 160 Q 370 120 420 150" fill="none" stroke="#fbbf24" stroke-width="3" stroke-dasharray="6,6"/>
  <polygon points="425,150 415,142 418,155" fill="#fbbf24"/>
  <text x="365" y="130" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">Small Founder Group Splits Off</text>
  
  <!-- New Founder Colony -->
  <rect x="430" y="70" width="230" height="180" fill="#1e293b" rx="10" stroke="#f59e0b" stroke-width="2"/>
  <text x="545" y="95" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">FOUNDER COLONY (NEW SPECIES)</text>
  <text x="545" y="115" fill="#94a3b8" font-size="11" text-anchor="middle">(Restricted Gene Sample)</text>
  
  <circle cx="490" cy="155" r="12" fill="#fbbf24"/>
  <circle cx="545" cy="155" r="12" fill="#fbbf24"/>
  <circle cx="600" cy="155" r="12" fill="#38bdf8"/>
  <circle cx="515" cy="195" r="12" fill="#fbbf24"/>
  <circle cx="575" cy="195" r="12" fill="#fbbf24"/>
  
  <text x="545" y="235" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Allele 'B' Fixed; Other Alleles Lost</text>
  
  <!-- Bottom Explanation -->
  <rect x="40" y="270" width="620" height="70" fill="#182234" rx="8" stroke="#334155" stroke-width="1.5"/>
  <text x="350" y="292" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">NCERT FOUNDER EFFECT PRINCIPLE:</text>
  <text x="350" y="312" fill="#cbd5e1" font-size="10" text-anchor="middle">The original drifted population becomes founders and the effect is called Founder Effect.</text>
  <text x="350" y="328" fill="#a5f3fc" font-size="10" text-anchor="middle">Drastic change in allele frequencies forms a new species without natural selection.</text>
</svg>`,
        caption: "Figure 1: The Founder Effect demonstrating how a small migrant splinter group leads to altered allele frequencies in a new geographical area.",
        guide: "WHAT TO OBSERVE: A small unrepresentative sample of alleles colonizing a new island/habitat, leading to allele fixation and speciation."
      },
      importantPoints: [
        "Genetic Drift operates strictly in SMALL populations (chance-based).",
        "Founder Effect occurs when the original drifted population becomes 'founders' of a new population."
      ]
    },
    {
      heading: "3. Three Modes of Natural Selection on Phenotypic Distributions",
      paragraphs: [
        "When natural selection acts on continuous polygenic traits (such as body weight, height, or skin pigmentation), it produces three distinct patterns of phenotypic change:",
        "1. Stabilizing Selection (Centripetal Selection):",
        "• Environmental Conditions: Stable, unchanging environment.",
        "• Action: Natural selection favors intermediate (mean) phenotypes while eliminating both extreme phenotypic variations.",
        "• Graphical Effect: The phenotypic distribution curve becomes TALLER and NARROWER. Mean phenotypic value remains unchanged; phenotypic variance ($\sigma^2$) decreases.",
        "• Classic Biological Example: Human Infant Birth Weight. Newborns weighing significantly less than 3 kg suffer high infant mortality due to prematurity, while infants weighing over 4.5 kg suffer complications during parturition. Natural selection strongly favors intermediate weights (~3.0 to 3.5 kg).",
        "2. Directional Selection (Progressive Selection):",
        "• Environmental Conditions: Changing or shifted environmental conditions.",
        "• Action: Natural selection favors individuals at ONE extreme of the phenotypic range while selecting against the mean and the other extreme.",
        "• Graphical Effect: The peak of the phenotypic distribution curve SHIFTS toward one direction. Mean phenotypic value changes; variance may remain constant or transiently increase.",
        "• Classic Biological Examples: (a) Industrial Melanism in Biston betularia (shift toward dark melanic moths); (b) Antibiotic resistance in bacteria (shift toward high resistance); (c) DDT resistance in mosquitoes.",
        "3. Disruptive Selection (Diversifying Selection):",
        "• Environmental Conditions: Heterogeneous or patchy environments with multiple distinct ecological niches.",
        "• Action: Natural selection favors individuals at BOTH extremes of the phenotypic spectrum simultaneously, while strongly selecting against intermediate/mean phenotypes.",
        "• Graphical Effect: The central peak splits, producing TWO DISTINCT PEAKS (bimodal distribution).",
        "• Evolutionary Significance: Disruptive selection can split a single population into two reproductively isolated sub-populations, driving sympatric speciation.",
        "• Biological Example: Shell color in marine limpets (light limpets camouflaged on white rocks, dark limpets on dark rocks; intermediate limpets heavily predated by gulls)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="700" height="380" fill="#0f172a" rx="16"/>
  <!-- Title -->
  <rect x="20" y="12" width="660" height="42" fill="#1e293b" rx="8" stroke="#334155" stroke-width="1.5"/>
  <text x="350" y="38" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">THREE MODES OF NATURAL SELECTION (NCERT GRAPHS)</text>
  
  <!-- Graph 1: Stabilizing Selection -->
  <rect x="30" y="65" width="200" height="230" fill="#1e293b" rx="8" stroke="#10b981" stroke-width="1.5"/>
  <text x="130" y="88" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">A. STABILIZING</text>
  <text x="130" y="104" fill="#94a3b8" font-size="10" text-anchor="middle">Peak Higher &amp; Narrower</text>
  <!-- Axes -->
  <line x1="45" y1="230" x2="215" y2="230" stroke="#64748b" stroke-width="1.5"/>
  <line x1="45" y1="230" x2="45" y2="120" stroke="#64748b" stroke-width="1.5"/>
  <!-- Original Dotted Bell Curve -->
  <path d="M 55 230 Q 130 140 205 230" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <!-- Narrow Tall Selected Curve -->
  <path d="M 75 230 Q 130 115 185 230" fill="none" stroke="#10b981" stroke-width="3"/>
  <text x="130" y="250" fill="#a7f3d0" font-size="10" text-anchor="middle">Favors Intermediate</text>
  <text x="130" y="265" fill="#cbd5e1" font-size="9" text-anchor="middle">e.g. Human Birth Weight</text>
  <text x="130" y="280" fill="#94a3b8" font-size="9" text-anchor="middle">(Mean Unchanged)</text>
  
  <!-- Graph 2: Directional Selection -->
  <rect x="250" y="65" width="200" height="230" fill="#1e293b" rx="8" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="350" y="88" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">B. DIRECTIONAL</text>
  <text x="350" y="104" fill="#94a3b8" font-size="10" text-anchor="middle">Peak Shifts One Way</text>
  <!-- Axes -->
  <line x1="265" y1="230" x2="435" y2="230" stroke="#64748b" stroke-width="1.5"/>
  <line x1="265" y1="230" x2="265" y2="120" stroke="#64748b" stroke-width="1.5"/>
  <!-- Original Dotted Bell Curve -->
  <path d="M 275 230 Q 330 140 385 230" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <!-- Shifted Selected Curve -->
  <path d="M 315 230 Q 380 135 440 230" fill="none" stroke="#38bdf8" stroke-width="3"/>
  <line x1="330" y1="140" x2="380" y2="135" stroke="#fbbf24" stroke-width="2" marker-end="url(#arr-sel)"/>
  <text x="350" y="250" fill="#93c5fd" font-size="10" text-anchor="middle">Favors One Extreme</text>
  <text x="350" y="265" fill="#cbd5e1" font-size="9" text-anchor="middle">e.g. Industrial Melanism</text>
  <text x="350" y="280" fill="#94a3b8" font-size="9" text-anchor="middle">(Mean Shifts Right)</text>
  
  <!-- Graph 3: Disruptive Selection -->
  <rect x="470" y="65" width="200" height="230" fill="#1e293b" rx="8" stroke="#f472b6" stroke-width="1.5"/>
  <text x="570" y="88" fill="#f472b6" font-size="12" font-weight="bold" text-anchor="middle">C. DISRUPTIVE</text>
  <text x="570" y="104" fill="#94a3b8" font-size="10" text-anchor="middle">Two Peaks Form</text>
  <!-- Axes -->
  <line x1="485" y1="230" x2="655" y2="230" stroke="#64748b" stroke-width="1.5"/>
  <line x1="485" y1="230" x2="485" y2="120" stroke="#64748b" stroke-width="1.5"/>
  <!-- Original Dotted Bell Curve -->
  <path d="M 495 230 Q 570 140 645 230" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <!-- Bimodal Selected Curve -->
  <path d="M 495 230 Q 525 145 550 190 Q 575 220 600 190 Q 625 145 650 230" fill="none" stroke="#f472b6" stroke-width="3"/>
  <text x="570" y="250" fill="#fbcfe8" font-size="10" text-anchor="middle">Favors Both Extremes</text>
  <text x="570" y="265" fill="#cbd5e1" font-size="9" text-anchor="middle">Eliminates Intermediate</text>
  <text x="570" y="280" fill="#94a3b8" font-size="9" text-anchor="middle">(Splits into 2 Species)</text>
  
  <!-- Bottom Summary -->
  <rect x="30" y="310" width="640" height="55" fill="#182234" rx="8" stroke="#334155" stroke-width="1.5"/>
  <text x="350" y="332" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">DIRECT NCERT IDENTIFICATION KEY:</text>
  <text x="350" y="350" fill="#cbd5e1" font-size="10" text-anchor="middle">Stabilizing = Peak higher &amp; narrower | Directional = Peak shifts in one direction | Disruptive = Two peaks form</text>
  <defs>
    <marker id="arr-sel" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24"/>
    </marker>
  </defs>
</svg>`,
        caption: "Figure 2: The three classic modes of natural selection acting on polygenic phenotypic distributions.",
        guide: "WHAT TO OBSERVE: (A) Stabilizing selection narrows the peak around the mean; (B) Directional selection shifts the curve toward one extreme; (C) Disruptive selection splits the mean to form two peaks."
      },
      importantPoints: [
        "Stabilizing Selection: Peak gets higher and narrower (e.g., human birth weight).",
        "Directional Selection: Peak shifts in one direction (e.g., industrial melanism).",
        "Disruptive Selection: Two peaks form (elimination of mean phenotype)."
      ]
    },
    {
      heading: "4. Human Evolution: Detailed Chronological Sequence & Hominid Milestones",
      paragraphs: [
        "The evolutionary history of humans represents a branching phylogeny of hominids originating in Africa:",
        "1. Dryopithecus & Ramapithecus (~15 million years ago - mya):",
        "• Primates called Dryopithecus and Ramapithecus were existing ~15 mya.",
        "• Both were hairy and walked like gorillas and chimpanzees.",
        "• Dryopithecus: More ape-like, arboreal, possessed large canine teeth and thin dental enamel.",
        "• Ramapithecus: More man-like, had smaller canines, thick dental enamel, and semi-erect posture.",
        "2. Early Two-Legged African Hominids (~3 to 4 mya):",
        "• Fossils of man-like bones discovered in Ethiopia and Tanzania.",
        "• Walked upright on two legs (bipedal locomotion), but stature was not taller than 4 feet.",
        "3. Australopithecines (Australopithecus africanus, ~2 mya):",
        "• Lived in East African grasslands (e.g., 'Lucy' discovered in Afar triangle, Ethiopia by Donald Johanson).",
        "• Evidence shows they walked fully upright (bipedal) and hunted with stone weapons.",
        "• Dietary Habit: Essentially ate fruit (herbivorous/frugivorous).",
        "• Brain Capacity: ~450 to 500 cc.",
        "4. Homo habilis ('Handy Man' / First Human-like Hominid):",
        "• First creature with the genus Homo.",
        "• Cranial Capacity: 650 to 800 cc.",
        "• Significant Milestone: First hominid tool-maker (manufactured primitive chipped stone tools).",
        "• Dietary Habit: Did NOT eat meat (predominantly herbivorous).",
        "5. Homo erectus (Java Man / Peking Man, ~1.5 mya):",
        "• Fossils discovered in Java, Indonesia in 1891 (Pithecanthropus erectus).",
        "• Cranial Capacity: 900 cc.",
        "• Significant Milestones: Probably ate meat (carnivorous/omnivorous), used controlled fire for warmth and cooking, crafted refined Acheulean hand-axes.",
        "6. Neanderthal Man (Homo neanderthalensis, ~100,000 to 40,000 years ago):",
        "• Lived in Near East and Central Asia.",
        "• Cranial Capacity: 1400 cc (comparable to or slightly larger than modern humans).",
        "• Cultural Milestones: Used animal hides for clothing to survive ice age winters; first hominids to bury their dead with ceremonial rituals (indicating social/spiritual consciousness).",
        "7. Homo sapiens (Modern Man):",
        "• Arose in Africa during the last ice age between 75,000 and 10,000 years ago.",
        "• Migrated across continents and developed distinct racial geographic groups.",
        "• Cranial Capacity: 1350 to 1400 cc.",
        "• Prehistoric Cave Art: Developed around 18,000 years ago (e.g., Bhimbetka rock shelters in Raisen district, Madhya Pradesh).",
        "• Agriculture & Human Settlements: Agriculture started ~10,000 years ago, initiating organized human civilization."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="700" height="380" fill="#0f172a" rx="16"/>
  <!-- Title -->
  <rect x="20" y="12" width="660" height="42" fill="#1e293b" rx="8" stroke="#334155" stroke-width="1.5"/>
  <text x="350" y="38" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">HUMAN EVOLUTION CHRONOLOGY &amp; CRANIAL CAPACITIES</text>
  
  <!-- Hominid 1: Dryopithecus / Ramapithecus -->
  <rect x="35" y="68" width="145" height="110" fill="#1e293b" rx="8" stroke="#475569" stroke-width="1.5"/>
  <text x="107" y="90" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. DRYOPITHECUS &amp;</text>
  <text x="107" y="106" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">RAMAPITHECUS</text>
  <text x="107" y="125" fill="#f8fafc" font-size="10" text-anchor="middle">~15 mya</text>
  <text x="107" y="142" fill="#cbd5e1" font-size="9" text-anchor="middle">Dryo: Ape-like</text>
  <text x="107" y="157" fill="#cbd5e1" font-size="9" text-anchor="middle">Rama: Man-like</text>
  <rect x="45" y="163" width="125" height="12" fill="#0284c7" rx="3"/>
  <text x="107" y="172" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Hairy, Walked like Gorilla</text>
  
  <!-- Hominid 2: Australopithecus -->
  <rect x="195" y="68" width="145" height="110" fill="#1e293b" rx="8" stroke="#475569" stroke-width="1.5"/>
  <text x="267" y="90" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">2. AUSTRALOPITHECUS</text>
  <text x="267" y="106" fill="#94a3b8" font-size="10" text-anchor="middle">~2 mya (East Africa)</text>
  <text x="267" y="125" fill="#f8fafc" font-size="10" text-anchor="middle">Brain: ~500 cc</text>
  <text x="267" y="142" fill="#cbd5e1" font-size="9" text-anchor="middle">Bipedal walking</text>
  <text x="267" y="157" fill="#cbd5e1" font-size="9" text-anchor="middle">Hunted with stone</text>
  <rect x="205" y="163" width="125" height="12" fill="#047857" rx="3"/>
  <text x="267" y="172" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Ate Fruit (Herbivore)</text>
  
  <!-- Hominid 3: Homo habilis -->
  <rect x="355" y="68" width="145" height="110" fill="#1e293b" rx="8" stroke="#475569" stroke-width="1.5"/>
  <text x="427" y="90" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">3. HOMO HABILIS</text>
  <text x="427" y="106" fill="#94a3b8" font-size="10" text-anchor="middle">First Human Hominid</text>
  <text x="427" y="125" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">650 - 800 cc</text>
  <text x="427" y="142" fill="#cbd5e1" font-size="9" text-anchor="middle">First tool-maker</text>
  <text x="427" y="157" fill="#cbd5e1" font-size="9" text-anchor="middle">Handy Man</text>
  <rect x="365" y="163" width="125" height="12" fill="#b45309" rx="3"/>
  <text x="427" y="172" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Did NOT Eat Meat</text>
  
  <!-- Hominid 4: Homo erectus -->
  <rect x="515" y="68" width="150" height="110" fill="#1e293b" rx="8" stroke="#475569" stroke-width="1.5"/>
  <text x="590" y="90" fill="#f472b6" font-size="11" font-weight="bold" text-anchor="middle">4. HOMO ERECTUS</text>
  <text x="590" y="106" fill="#94a3b8" font-size="10" text-anchor="middle">~1.5 mya (Java 1891)</text>
  <text x="590" y="125" fill="#f472b6" font-size="11" font-weight="bold" text-anchor="middle">900 cc</text>
  <text x="590" y="142" fill="#cbd5e1" font-size="9" text-anchor="middle">Used fire &amp; axes</text>
  <text x="590" y="157" fill="#cbd5e1" font-size="9" text-anchor="middle">Java Man</text>
  <rect x="525" y="163" width="130" height="12" fill="#be185d" rx="3"/>
  <text x="590" y="172" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Probably Ate Meat</text>
  
  <!-- Bottom Row: Neanderthal & Homo sapiens -->
  <!-- Hominid 5: Neanderthal -->
  <rect x="110" y="195" width="225" height="115" fill="#1e293b" rx="8" stroke="#a855f7" stroke-width="1.5"/>
  <text x="222" y="218" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">5. NEANDERTHAL MAN</text>
  <text x="222" y="235" fill="#94a3b8" font-size="10" text-anchor="middle">100,000 - 40,000 yrs ago (Central Asia)</text>
  <text x="222" y="255" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">Cranial Capacity: 1400 cc</text>
  <text x="222" y="275" fill="#f8fafc" font-size="10" text-anchor="middle">• Used animal hides as clothes</text>
  <text x="222" y="292" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">• BURIED THEIR DEAD with rituals</text>
  
  <!-- Hominid 6: Homo sapiens -->
  <rect x="365" y="195" width="225" height="115" fill="#1e293b" rx="8" stroke="#10b981" stroke-width="1.5"/>
  <text x="477" y="218" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">6. HOMO SAPIENS (Modern)</text>
  <text x="477" y="235" fill="#94a3b8" font-size="10" text-anchor="middle">Arose in Africa (75,000 - 10,000 yrs ago)</text>
  <text x="477" y="255" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">Cranial Capacity: 1350 - 1400 cc</text>
  <text x="477" y="275" fill="#f8fafc" font-size="10" text-anchor="middle">• Cave Art ~18,000 yrs ago (Bhimbetka)</text>
  <text x="477" y="292" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">• Agriculture ~10,000 yrs ago</text>
  
  <!-- Bottom Timeline Bar -->
  <rect x="35" y="325" width="630" height="40" fill="#182234" rx="6" stroke="#334155" stroke-width="1"/>
  <text x="350" y="348" fill="#cbd5e1" font-size="10" text-anchor="middle">Sequence: Dryo/Rama (15 mya) -> Australo (2 mya) -> H. habilis (650-800 cc) -> H. erectus (900 cc) -> Neanderthal (1400 cc) -> H. sapiens</text>
</svg>`,
        caption: "Figure 3: Chronological progression of human hominid ancestors showing brain expansion and behavioral evolution.",
        guide: "WHAT TO OBSERVE: Stepwise enlargement of cranial capacity from Australopithecus (~500 cc) to H. habilis (650-800 cc), H. erectus (900 cc), and Neanderthal/H. sapiens (1400 cc), coupled with dietary and cultural shifts."
      },
      importantPoints: [
        "Homo habilis: 650–800 cc, first hominid tool-maker, did NOT eat meat.",
        "Homo erectus: 900 cc, Java 1891, probably ate meat.",
        "Neanderthal man: 1400 cc, buried their dead, lived in near east & central Asia.",
        "Homo sapiens: Arose in Africa (75,000–10,000 yrs ago); Bhimbetka cave art ~18,000 yrs ago; Agriculture ~10,000 yrs ago."
      ]
    },
    {
      heading: "5. Hardy-Weinberg Numerical Problem-Solving Masterclass",
      paragraphs: [
        "In NEET UG examinations, Hardy-Weinberg numerical problems follow a standardized mathematical protocol:",
        "Standard Step-by-Step Problem Solving Protocol:",
        "• Step 1: Identify what is given in the problem statement. Usually, the question gives the percentage or number of individuals showing the homozygous recessive phenotype ($aa$).",
        "• Step 2: Calculate the genotype frequency of $aa$: $$f(aa) = q^2$$",
        "• Step 3: Find the frequency of the recessive allele $q$ by taking the square root: $$q = \\sqrt{q^2}$$",
        "• Step 4: Calculate the frequency of the dominant allele $p$ using $p + q = 1$: $$p = 1 - q$$",
        "• Step 5: Calculate the carrier / heterozygous frequency ($2pq$): $$f(Aa) = 2pq = 2 \\times p \\times q$$",
        "• Step 6: Calculate homozygous dominant frequency ($p^2$): $$f(AA) = p^2$$",
        "• Step 7: If asked for total number of individuals, multiply the frequency by the total population size $N$.",
        "Worked Example: In a population of 1000 individuals, 160 individuals exhibit an autosomal recessive trait (e.g., albinism, $aa$). Calculate (a) the frequency of allele $a$, (b) the frequency of allele $A$, and (c) the number of heterozygous carriers ($Aa$) in this population.",
        "Solution:",
        "1. Frequency of homozygous recessive ($q^2$) = $160 / 1000 = 0.16$.",
        "2. Recessive allele frequency $q = \\sqrt{0.16} = 0.40$.",
        "3. Dominant allele frequency $p = 1 - q = 1 - 0.40 = 0.60$.",
        "4. Heterozygous frequency $2pq = 2 \\times 0.60 \\times 0.40 = 0.48$ (or 48%).",
        "5. Total number of carriers = $0.48 \\times 1000 = 488$ individuals."
      ],
      importantPoints: [
        "Always extract $q^2$ first from the homozygous recessive phenotype, because heterozygous ($Aa$) and homozygous dominant ($AA$) share the same dominant phenotype.",
        "Carrier frequency $= 2pq$."
      ]
    }
  ],

  formulae: [
    {
      title: "Hardy-Weinberg Equations",
      formula: "p + q = 1 \\quad \\text{and} \\quad p^2 + 2pq + q^2 = 1",
      meaning: "Mathematical relationships defining allele and genotype frequencies in genetic equilibrium",
      symbols: "p = freq of allele A, q = freq of allele a, p² = AA freq, 2pq = Aa freq, q² = aa freq",
      unit: "Dimensionless frequencies between 0 and 1",
      conditions: "Large population, random mating, no mutation, no gene flow, no natural selection",
      whenToUse: "Whenever solving population genetics and carrier frequency problems in NEET UG."
    },
    {
      title: "Recessive Allele Calculation",
      formula: "q = \\sqrt{\\frac{\\text{Number of homozygous recessive individuals (aa)}}{\\text{Total population size (N)}}}",
      meaning: "Direct determination of recessive allele frequency from phenotypic count",
      symbols: "q = recessive allele frequency, aa = recessive phenotype count, N = total population",
      unit: "Frequency (0 to 1)",
      conditions: "Hardy-Weinberg equilibrium assumed",
      whenToUse: "The indispensable first step in all Hardy-Weinberg numerical questions."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="700" height="240" fill="#0f172a" rx="14"/>
  <rect x="20" y="15" width="660" height="35" fill="#1e293b" rx="6" stroke="#334155" stroke-width="1"/>
  <text x="350" y="38" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">SUMMARY: HARDY-WEINBERG &amp; HUMAN EVOLUTION</text>
  
  <rect x="30" y="65" width="195" height="155" fill="#1e293b" rx="8" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="127" y="88" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">1. HARDY-WEINBERG</text>
  <text x="40" y="110" fill="#f8fafc" font-size="10">• p + q = 1 (Alleles)</text>
  <text x="40" y="128" fill="#f8fafc" font-size="10">• p² + 2pq + q² = 1 (Geno)</text>
  <text x="40" y="146" fill="#fbbf24" font-size="10">• Carrier = 2pq</text>
  <text x="40" y="164" fill="#f8fafc" font-size="10">• 5 Disrupting Forces:</text>
  <text x="40" y="182" fill="#94a3b8" font-size="10">  Gene flow, Genetic drift,</text>
  <text x="40" y="200" fill="#94a3b8" font-size="10">  Mutation, Recomb, Selection</text>
  
  <rect x="250" y="65" width="195" height="155" fill="#1e293b" rx="8" stroke="#10b981" stroke-width="1.5"/>
  <text x="347" y="88" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">2. SELECTION TYPES</text>
  <text x="260" y="110" fill="#f8fafc" font-size="10">• Stabilizing:</text>
  <text x="260" y="128" fill="#34d399" font-size="10">  Peak higher/narrower</text>
  <text x="260" y="146" fill="#f8fafc" font-size="10">• Directional:</text>
  <text x="260" y="164" fill="#38bdf8" font-size="10">  Peak shifts one way</text>
  <text x="260" y="182" fill="#f8fafc" font-size="10">• Disruptive:</text>
  <text x="260" y="200" fill="#f472b6" font-size="10">  Two peaks form</text>
  
  <rect x="470" y="65" width="200" height="155" fill="#1e293b" rx="8" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="570" y="88" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">3. HUMAN EVOLUTION</text>
  <text x="480" y="110" fill="#f8fafc" font-size="10">• Australo: Fruit, stone hunt</text>
  <text x="480" y="128" fill="#fbbf24" font-size="10">• H. habilis: 650-800 cc, no meat</text>
  <text x="480" y="146" fill="#f472b6" font-size="10">• H. erectus: 900 cc, ate meat</text>
  <text x="480" y="164" fill="#c084fc" font-size="10">• Neanderthal: 1400 cc, buried</text>
  <text x="480" y="182" fill="#34d399" font-size="10">• H. sapiens: 1400 cc (Africa)</text>
  <text x="480" y="200" fill="#cbd5e1" font-size="10">  Bhimbetka art 18,000 yrs ago</text>
</svg>`,
    caption: "High-yield visual reference matrix summarizing Hardy-Weinberg principles, natural selection graphs, and human evolutionary chronology."
  },

  neetImportantPoints: [
    "🔥 Hardy-Weinberg Equation: p² + 2pq + q² = 1 (where 2pq is the carrier frequency).",
    "🔥 Genetic Drift operates in SMALL populations; Founder effect creates new species from a small migrant founder group.",
    "🔥 Three Modes of Selection: Stabilizing (peak higher & narrower), Directional (peak shifts in one direction), Disruptive (two peaks form).",
    "🔥 Human Evolution Sequence: Dryopithecus -> Ramapithecus -> Australopithecus -> Homo habilis -> Homo erectus -> Neanderthal -> Homo sapiens.",
    "🔥 Homo habilis: 650–800 cc, first hominid tool-maker, did NOT eat meat.",
    "🔥 Homo erectus: 900 cc, fossils found in Java (1891), probably ate meat.",
    "🔥 Neanderthal man: 1400 cc, buried their dead with rituals, used animal hides.",
    "🔥 Modern Homo sapiens: Arose in Africa during ice age (75,000–10,000 yrs ago); cave art ~18,000 yrs ago at Bhimbetka; agriculture ~10,000 yrs ago."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming Homo habilis was a carnivorous predator.",
      correctFact: "NCERT explicitly states: 'Homo habilis probably did not eat meat.' Meat eating is first clearly noted in Homo erectus ('Homo erectus probably ate meat').",
      whyItMattersForNEET: "A frequent trick question in NEET statement-based MCQs."
    },
    {
      commonConfusion: "Confusing allele frequency (p, q) with genotype frequency (p², 2pq, q²).",
      correctFact: "Allele frequency represents individual alleles (A or a in range 0-1). Genotype frequency represents pairs of alleles in diploid individuals (AA, Aa, aa).",
      whyItMattersForNEET: "Essential to prevent calculation errors in Hardy-Weinberg numericals."
    },
    {
      commonConfusion: "Thinking Neanderthal man had a smaller brain than modern humans.",
      correctFact: "Neanderthal man had a brain capacity of 1400 cc, which is equal to or slightly larger than average modern Homo sapiens (1350–1400 cc).",
      whyItMattersForNEET: "Direct NCERT fact tested in NEET 2019 and 2021."
    }
  ],

  quickRevision: [
    "Hardy-Weinberg = p + q = 1, p² + 2pq + q² = 1.",
    "5 Disrupting factors = Gene flow, Genetic drift (Founder/Bottleneck), Mutation, Recombination, Selection.",
    "Stabilizing = Human birth weight; Directional = Industrial melanism; Disruptive = Bimodal curve.",
    "Dryo/Rama = 15 mya (Dryo = ape-like, Rama = man-like).",
    "Australopithecus = 2 mya, East Africa, bipedal, fruit-eating.",
    "Homo habilis = 650-800 cc, first tool-maker, did NOT eat meat.",
    "Homo erectus = 900 cc, Java 1891, ate meat, used fire.",
    "Neanderthal = 1400 cc, Near East/Central Asia, buried dead.",
    "Homo sapiens = Africa (75k-10k yrs ago), Bhimbetka art (18k yrs ago), Agriculture (10k yrs ago)."
  ],

  practiceQuestions: [
    {
      id: "prac-hwh-1",
      question: "In a random mating population of 10,000 individuals, 3600 individuals exhibit a recessive trait. How many individuals are expected to be heterozygous carriers according to Hardy-Weinberg equilibrium?",
      options: [
        "A) 2400",
        "B) 4800",
        "C) 1600",
        "D) 3600"
      ],
      correctAnswer: 1,
      explanation: "Step 1: q² = 3600/10000 = 0.36. Step 2: q = √0.36 = 0.6. Step 3: p = 1 - 0.6 = 0.4. Step 4: Heterozygous frequency (2pq) = 2 × 0.4 × 0.6 = 0.48. Step 5: Number of carriers = 0.48 × 10,000 = 4800.",
      topicTested: "Hardy-Weinberg Numerical Calculations"
    },
    {
      id: "prac-hwh-2",
      question: "Match the hominids with their correct cranial capacities:\n(a) Homo habilis - (i) 900 cc\n(b) Homo erectus - (ii) 1400 cc\n(c) Neanderthal man - (iii) 650-800 cc\n(d) Australopithecus - (iv) ~500 cc",
      options: [
        "A) (a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)",
        "B) (a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)",
        "C) (a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
        "D) (a)-(iv), (b)-(i), (c)-(ii), (d)-(iii)"
      ],
      correctAnswer: 0,
      explanation: "NCERT Cranial Capacities: Homo habilis (650-800 cc), Homo erectus (900 cc), Neanderthal man (1400 cc), Australopithecus (~500 cc).",
      topicTested: "Hominid Cranial Capacities"
    },
    {
      id: "prac-hwh-3",
      question: "A small group of organisms colonizes a newly formed isolated volcanic island. The allele frequencies of the new population differ dramatically from the parental mainland population. This is known as:",
      options: [
        "A) Disruptive selection",
        "B) Industrial melanism",
        "C) Founder effect",
        "D) Stabilizing selection"
      ],
      correctAnswer: 2,
      explanation: "The Founder Effect is a form of genetic drift that occurs when a small founding group colonizes a new geographical area, establishing a gene pool with different allele frequencies from the parent population.",
      topicTested: "Genetic Drift & Founder Effect"
    }
  ],

  pyqs: [
    {
      id: "pyq-hwh-2023",
      exam: "NEET UG",
      year: 2023,
      question: "In a gene pool, if the frequency of a recessive allele is 0.2, what will be the frequency of the heterozygous dominant individuals in a population at Hardy-Weinberg equilibrium?",
      options: [
        "A) 0.64",
        "B) 0.32",
        "C) 0.16",
        "D) 0.04"
      ],
      correctAnswer: 1,
      explanation: "Given q = 0.2. Since p + q = 1, p = 1 - 0.2 = 0.8. The frequency of heterozygous individuals (2pq) = 2 × 0.8 × 0.2 = 0.32.",
      conceptTested: "Hardy-Weinberg Equilibrium Calculation",
      verificationSource: "NEET UG 2023"
    },
    {
      id: "pyq-hwh-2021",
      exam: "NEET UG",
      year: 2021,
      question: "Which of the following had the cranial capacity of 1400 cc and used hides to protect their body and buried their dead?",
      options: [
        "A) Homo habilis",
        "B) Homo erectus",
        "C) Neanderthal man",
        "D) Australopithecus"
      ],
      correctAnswer: 2,
      explanation: "Neanderthal man (Homo neanderthalensis) had a cranial capacity of 1400 cc, lived in near east and central Asia between 100,000 and 40,000 years ago, used hides to protect their body, and buried their dead.",
      conceptTested: "Neanderthal Man Characteristics",
      verificationSource: "NEET UG 2021"
    },
    {
      id: "pyq-hwh-2019",
      exam: "NEET UG",
      year: 2019,
      question: "Variations caused by mutation, as proposed by Hugo de Vries, are:",
      options: [
        "A) Small and directionless",
        "B) Random and directional",
        "C) Random and directionless",
        "D) Small and directional"
      ],
      correctAnswer: 2,
      explanation: "Hugo de Vries proposed that mutations are Random and Directionless, whereas Darwinian variations are small and directional.",
      conceptTested: "De Vries Mutation vs Darwinian Variation",
      verificationSource: "NEET UG 2019"
    }
  ]
};
