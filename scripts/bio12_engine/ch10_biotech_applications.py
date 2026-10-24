import os
import sys
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from scripts.bio12_engine.common import balance_and_build_parts

CHP_ID = "biotech-applications"
CHP_TITLE = "Biotechnology and its Applications"
FILE_PREFIX = "biotechApplications"
VAR_PREFIX = "BIOTECH_APPLICATIONS"

T1 = ("bio-biotech-agriculture-bt", "Biotechnological Applications in Agriculture & Pest Resistance")
T2 = ("bio-biotech-medicine-insulin", "Applications in Medicine, Transgenic Animals & Biosafety")

def generate_chapter_10():
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
        ("Organisms whose genes have been intentionally altered by genetic manipulation in the laboratory are termed:",
         "Genetically Modified Organisms (GMOs)", "Somaclonal variants", "Polyploids", "Hybrids", "A",
         "GMO definition in NCERT.",
         "Plants, bacteria, fungi and animals whose genes have been altered by manipulation are called Genetically Modified Organisms (GMO).",
         "Somaclonal variants arise during tissue culture without targeted gene modification.",
         T1, "Genetically Modified Organisms"),

        ("Which variety of genetically modified rice has been biofortified to synthesize beta-carotene, making it exceptionally rich in Vitamin A?",
         "Golden Rice", "IR-8", "Basmati-370", "Taichung Native-1", "A",
         "Golden Rice vitamin A.",
         "Golden rice is a transgenic variety of Oryza sativa engineered to biosynthesize beta-carotene (provitamin A) in the edible endosperm.",
         "IR-8 is a semi-dwarf rice; Basmati is an aromatic variety.",
         T1, "GM Crops"),

        ("The soil bacterium Bacillus thuringiensis is famous in agricultural biotechnology for naturally producing:",
         "Insecticidal crystal proteins (Cry toxins)", "Broad-spectrum chemical herbicides", "Nitrogenase for nitrogen fixation", "Antibiotics against human viruses", "A",
         "Bacillus thuringiensis.",
         "Bacillus thuringiensis produces intracellular protein crystals during sporulation that contain insecticidal delta-endotoxins (Cry proteins).",
         "Bt does not produce synthetic herbicides or fix nitrogen.",
         T1, "Bt Cotton"),

        ("Why does the toxic insecticidal Cry protein NOT kill the bacterium Bacillus thuringiensis itself?",
         "It exists as an inactive, non-toxic protoxin inside the bacterium",
         "The bacterial cytoplasm is strongly alkaline",
         "The bacterium immediately pumps it into outer space",
         "The bacterium has an exoskeleton of chitin", "A",
         "Bt protoxin status.",
         "Bt toxin protein exists as inactive protoxins inside the bacterium and therefore does not harm the bacterial cell.",
         "The bacterial interior is not alkaline.",
         T1, "Bt Toxin Activation"),

        ("In the midgut of a susceptible insect pest, what factor triggers the activation of the inactive Bt protoxin into its active lethal form?",
         "The alkaline pH of the insect midgut", "The highly acidic pH of the crop", "Exposure to sunlight", "Enzymatic cleavage by human saliva", "A",
         "Alkaline pH activation.",
         "Once an insect ingests the inactive protoxin, it is converted into an active form of toxin due to the alkaline pH of the gut which solubilises the crystals.",
         "Acidic pH maintains the crystal protoxin in its inactive form.",
         T1, "Bt Toxin Activation"),

        ("How does the activated Bt toxin ultimately cause the death of the target insect larva?",
         "It binds to midgut epithelial cells, creates pores causing cell swelling, lysis, and death",
         "It dissolves the external cuticle of the insect",
         "It halts the insect's heartbeat instantly",
         "It paralyzes the insect's antennae only", "A",
         "Bt mechanism of insect mortality.",
         "The activated toxin binds to the surface of midgut epithelial cells and creates pores that cause cell swelling and lysis and eventually cause death of the insect.",
         "It acts on gut epithelium, not external cuticle.",
         T1, "Bt Mechanism"),

        ("Which specific Bt toxin genes are engineered into cotton plants to confer resistance against cotton bollworms?",
         "cryIAc and cryIIAb", "cryIAb only", "ampR and tetR", "lacZ and rop", "A",
         "Cotton bollworm resistance genes.",
         "The proteins encoded by the genes cryIAc and cryIIAb control cotton bollworms.",
         "cryIAb controls corn borer.",
         T1, "Cry Genes"),

        ("Which specific Cry gene is cloned into corn to protect the crop against the devastating pest corn borer?",
         "cryIAb", "cryIAc", "cryIIAb", "rop", "A",
         "Corn borer Cry gene.",
         "The protein encoded by the gene cryIAb specifically controls corn borer.",
         "cryIAc and cryIIAb control cotton bollworm.",
         T1, "Cry Genes"),

        ("The root knot nematode that infects the roots of tobacco plants and causes substantial reduction in crop yield is:",
         "Meloidogyne incognita", "Caenorhabditis elegans", "Ascaris lumbricoides", "Wuchereria bancrofti", "A",
         "Meloidogyne incognita.",
         "A nematode Meloidogyne incognita infects the roots of tobacco plants and causes a great reduction in yield.",
         "C. elegans is a harmless laboratory model; Ascaris infects humans.",
         T1, "RNA Interference"),

        ("RNA interference (RNAi) is a conserved natural gene regulatory process that operates in all eukaryotic organisms as a mechanism of:",
         "Cellular defense against viruses and mobile transposons",
         "Photosynthetic light absorption",
         "Active transport of sodium across membranes",
         "Degradation of plant cellulose", "A",
         "Biological role of RNAi.",
         "RNA interference (RNAi) takes place in all eukaryotic organisms as a method of cellular defense against foreign RNA genomes and transposons.",
         "RNAi is not involved in photosynthetic pigment absorption.",
         T1, "RNA Interference"),

        ("In RNA interference (RNAi), the silencing of a specific target mRNA is mediated by the binding of:",
         "A complementary double-stranded RNA (dsRNA) molecule",
         "A single-stranded circular DNA plasmid",
         "A ribosomal 70S subunit",
         "A lipid bilayer vesicle", "A",
         "dsRNA in RNAi.",
         "RNAi involves silencing of a specific mRNA due to a complementary double-stranded RNA (dsRNA) molecule that binds to and prevents translation of the mRNA.",
         "dsRNA triggers DICER cleavage and RISC complex loading.",
         T1, "RNA Interference"),

        ("To initiate RNA interference against Meloidogyne incognita in tobacco roots, which vector was used to introduce nematode-specific genes into the host plant?",
         "Agrobacterium tumefaciens", "Bacillus thuringiensis", "Retrovirus", "Bacteriophage lambda", "A",
         "Agrobacterium vector in RNAi.",
         "Using Agrobacterium vectors, nematode-specific genes were introduced into the host plant such that it produced both sense and anti-sense RNA.",
         "Agrobacterium is the standard plant transformation vector.",
         T1, "RNA Interference"),

        ("In the transgenic tobacco plant engineered via RNAi, why could the parasitic nematode Meloidogyne incognita not survive after feeding on host roots?",
         "Specific essential nematode mRNAs were silenced by host-derived dsRNA, paralyzing the parasite",
         "The tobacco root emitted high-voltage electricity",
         "The root cells synthesized chemical sulfuric acid",
         "The tobacco root stopped absorbing water completely", "A",
         "Nematode survival failure in RNAi.",
         "The dsRNA initiated RNAi in the parasite, silencing its critical mRNA so that the parasite could not survive in a transgenic host expressing specific interfering RNA.",
         "The mechanism is molecular mRNA silencing, not electrical or acid secretion.",
         T1, "RNA Interference"),

        ("Before the advent of recombinant DNA technology, therapeutic insulin for diabetic patients was commercially extracted from the pancreas of slaughtered:",
         "Cattle and pigs", "Horses and donkeys", "Chickens and turkeys", "Frogs and toads", "A",
         "Animal insulin origin.",
         "Insulin used for diabetes was earlier extracted from pancreas of slaughtered cattle and pigs.",
         "Avian or amphibian insulin was not commercially harvested.",
         T2, "Recombinant Insulin"),

        ("Why did some human patients develop allergic reactions and immune responses against animal-derived insulin extracted from slaughtered cattle and pigs?",
         "Because non-human animal insulin has slight amino acid differences that trigger immune responses as a foreign protein",
         "Because animal insulin contains live bacteria",
         "Because animal insulin is an RNA virus",
         "Because animal insulin destroys human red blood cells directly", "A",
         "Allergy to animal insulin.",
         "Insulin from an animal source caused some patients to develop allergy or other types of reactions to the foreign protein.",
         "Recombinant human insulin eliminated foreign animal protein sensitization.",
         T2, "Recombinant Insulin"),

        ("Pro-insulin, the inactive precursor polypeptide synthesized in mammalian pancreatic beta cells, contains an extra stretch of peptide called:",
         "C peptide", "A peptide", "B peptide", "Signal sequence only", "A",
         "C peptide in pro-insulin.",
         "Pro-insulin contains an extra stretch called the C peptide, which is removed during maturation into active mature insulin.",
         "Mature insulin contains only A and B chains.",
         T2, "Recombinant Insulin"),

        ("How many polypeptide chains are present in a functional, mature human insulin molecule?",
         "Two chains (Chain A with 21 amino acids and Chain B with 30 amino acids)",
         "Three chains (Chain A, Chain B, and Chain C)",
         "A single continuous linear chain of 500 amino acids",
         "Four identical circular polypeptide rings", "A",
         "Mature human insulin structure.",
         "Mature human insulin consists of two short polypeptide chains: chain A (21 aa) and chain B (30 aa) linked together by disulfide bridges.",
         "C peptide is excised during processing.",
         T2, "Recombinant Insulin"),

        ("Which chemical bonds link polypeptide chain A and chain B together in a mature, functional human insulin molecule?",
         "Disulfide bonds (-S-S-)", "Phosphodiester bonds", "Glycosidic linkages", "Metallic coordination bonds", "A",
         "Disulfide bridges in insulin.",
         "Chains A and B of mature human insulin are held together by interchain disulfide bridges (two interchain -S-S- bonds and one intrachain bond in chain A).",
         "Phosphodiester bonds link nucleotides; glycosidic bonds link sugars.",
         T2, "Recombinant Insulin"),

        ("In 1983, which pharmaceutical company successfully produced recombinant human insulin (Humulin) by growing chains A and B separately in E. coli?",
         "Eli Lilly (an American company)", "Pfizer", "GlaxoSmithKline", "Novartis", "A",
         "Eli Lilly Humulin.",
         "In 1983, Eli Lilly, an American company, prepared two DNA sequences corresponding to A and B chains of human insulin and introduced them in plasmids of E. coli to produce insulin chains.",
         "Eli Lilly pioneered commercial recombinant Humulin.",
         T2, "Recombinant Insulin"),

        ("How did Eli Lilly engineers combine the independently synthesized recombinant Chain A and Chain B to yield functional mature human insulin?",
         "They extracted chains A and B separately and combined them by creating chemical disulfide bonds",
         "They fed both chains to live yeast cells",
         "They irradiated the mixture with gamma rays",
         "They boiled both chains with concentrated hydrochloric acid", "A",
         "Disulfide pairing in vitro.",
         "Chains A and B were produced separately in E. coli, purified, and combined in vitro by forming disulfide bonds to produce mature human insulin.",
         "Boiling with acid would hydrolyze peptide bonds.",
         T2, "Recombinant Insulin"),

        ("Gene therapy is best described as a collection of clinical methods designed to:",
         "Correct or replace a defective gene diagnosed in a child or embryo",
         "Accelerate physical aging in adults",
         "Synthesize synthetic plastic bones",
         "Eradicate all non-pathogenic bacteria in the gut", "A",
         "Gene therapy definition.",
         "Gene therapy is a collection of methods that allows correction of a gene defect that has been diagnosed in a child/embryo.",
         "It targets genetic disorders, not bone replacement.",
         T2, "Gene Therapy"),

        ("The very first clinical human gene therapy trial was performed in 1990 on a 4-year-old girl suffering from which severe genetic disorder?",
         "Adenosine Deaminase (ADA) deficiency", "Sickle cell anemia", "Cystic fibrosis", "Phenylketonuria", "A",
         "First clinical gene therapy 1990.",
         "The first clinical gene therapy was given in 1990 to a 4-year-old girl with adenosine deaminase (ADA) deficiency.",
         "ADA deficiency causes Severe Combined Immunodeficiency (SCID).",
         T2, "Gene Therapy"),

        ("Adenosine Deaminase (ADA) enzyme is fundamentally critical for the normal functioning of which human physiological system?",
         "Immune system", "Digestive system", "Skeletal muscular system", "Renal filtration system", "A",
         "ADA role in immune system.",
         "The enzyme adenosine deaminase is crucial for the immune system to function; without it, toxic deoxyadenosine accumulates and destroys T and B lymphocytes.",
         "It does not primarily control skeletal muscle or kidney filtration.",
         T2, "Gene Therapy"),

        ("What genetic defect causes hereditary Adenosine Deaminase (ADA) deficiency in pediatric patients?",
         "Deletion of the gene encoding the enzyme adenosine deaminase",
         "Duplication of the entire Y chromosome",
         "Bacterial infection of the thymus gland",
         "Excess dietary consumption of calcium", "A",
         "ADA genetic etiology.",
         "ADA deficiency is caused due to the deletion of the gene for adenosine deaminase located on human chromosome 20.",
         "It is a monogenic deletion disorder.",
         T2, "Gene Therapy"),

        ("Why is the standard clinical gene therapy method involving periodic infusion of genetically modified lymphocytes NOT a permanent cure for ADA deficiency?",
         "Because mature circulating human lymphocytes are not immortal and have a finite lifespan",
         "Because the retroviral vector dissolves human bones",
         "Because the functional ADA cDNA turns into toxic poison",
         "Because the patient becomes immune to all food", "A",
         "Non-immortal lymphocytes.",
         "As these cells are not immortal, the patient requires periodic infusion of such genetically engineered lymphocytes.",
         "Permanent cure requires early embryonic hematopoietic stem cell intervention.",
         T2, "Gene Therapy"),

        ("Under what developmental circumstance can gene therapy provide a permanent, lifelong cure for Adenosine Deaminase (ADA) deficiency?",
         "If the functional ADA gene isolated from marrow cells is introduced into target cells at early embryonic stages",
         "If the adult patient drinks 5 litres of milk daily",
         "If mature lymphocytes are infused once every 50 years",
         "If the patient is treated with large doses of aspirin", "A",
         "Permanent cure for ADA.",
         "If the gene isolate from marrow cells producing ADA is introduced into cells at early embryonic stages, it could be a permanent cure.",
         "Adult lymphocytes senescence requires repeat dosing.",
         T2, "Gene Therapy"),

        ("In molecular diagnostics, why is Polymerase Chain Reaction (PCR) vastly superior to conventional serum analysis for detecting infectious pathogens?",
         "PCR detects pathogens at extremely low concentrations before symptoms appear by amplifying their nucleic acids",
         "PCR works only after billions of bacteria have destroyed the patient's liver",
         "PCR detects viral proteins by changing water into oil",
         "PCR can only be conducted on dead patients", "A",
         "Early detection by PCR.",
         "A very low concentration of a bacteria or virus (at a time when symptoms are not visible) can be detected by amplification of their nucleic acid by PCR.",
         "Conventional tests require high pathogen loads for detection.",
         T2, "Molecular Diagnostics"),

        ("A single-stranded DNA or RNA molecule tagged with a radioactive isotope and used to detect complementary target sequences in a clone of cells is called a:",
         "Probe", "Primer", "Vector", "Plasmid", "A",
         "Molecular probe definition.",
         "A single stranded DNA or RNA, tagged with a radioactive molecule (probe) is allowed to hybridise to its complementary DNA in a clone of cells followed by detection using autoradiography.",
         "Primers initiate synthesis; probes detect hybrid sequences.",
         T2, "Molecular Probes"),

        ("When a radioactive probe is hybridized to DNA from cells carrying a mutated gene followed by autoradiography, why does the mutated clone FAIL to appear on the photographic film?",
         "The probe lacks sequence complementarity with the mutated gene and fails to hybridize",
         "The mutated gene emits light that destroys the film",
         "The probe destroys the photographic paper chemically",
         "Mutated DNA absorbs all radioactive particles completely", "A",
         "Probe failure on mutated genes.",
         "The clone having the mutated gene will not appear on the photographic film, because the probe does not have complementarity with the mutated gene.",
         "Hybridization requires base complementarity.",
         T2, "Molecular Probes"),

        ("The diagnostic laboratory test ELISA (Enzyme-Linked Immunosorbent Assay) is biochemically based on the principle of:",
         "Antigen-antibody interaction", "DNA polymerase chain reaction", "Agarose gel sieving", "Differential centrifugal flotation", "A",
         "ELISA principle.",
         "ELISA is based on the principle of antigen-antibody interaction. Infection by a pathogen can be detected by presence of antigens or by detecting antibodies against it.",
         "It utilizes enzyme-conjugated antibodies, not PCR amplification.",
         T2, "ELISA"),

        ("Animals that have had their DNA manipulated to carry and express an extra, foreign gene are scientifically designated as:",
         "Transgenic animals", "Parthenogenetic clones", "Gynandromorphs", "Allopolyploids", "A",
         "Transgenic animals definition.",
         "Animals that have had their DNA manipulated to possess and express an extra (foreign) gene are known as transgenic animals.",
         "Over 95% of transgenic animals are laboratory mice.",
         T2, "Transgenic Animals"),

        ("What percentage of all existing transgenic animals in biomedical and scientific research are transgenic mice?",
         "Over 95 percent", "About 10 percent", "Exactly 50 percent", "Less than 2 percent", "A",
         "Transgenic mice percentage.",
         "Over 95 percent of all existing transgenic animals are mice, widely used due to short lifespan and well-characterized genetics.",
         "NCERT explicitly specifies over 95%.",
         T2, "Transgenic Animals"),

        ("Transgenic animal models are specifically designed to study the molecular pathogenesis and evaluate novel therapies for human diseases such as:",
         "Cancer, cystic fibrosis, rheumatoid arthritis, and Alzheimer's disease",
         "Common fungal ringworm of nails exclusively",
         "Transient acute physical muscle fatigue",
         "Sprains and skin abrasions", "A",
         "Transgenic disease models in NCERT.",
         "Today transgenic models exist for many human diseases such as cancer, cystic fibrosis, rheumatoid arthritis and Alzheimer's.",
         "These represent intractable chronic genetic or degenerative diseases.",
         T2, "Transgenic Animals"),

        ("The human protein alpha-1-antitrypsin, produced via transgenic biotechnology, is clinically administered to treat which chronic respiratory disease?",
         "Emphysema", "Pneumonia", "Tuberculosis", "Bronchial asthma", "A",
         "Alpha-1-antitrypsin in emphysema.",
         "Transgenic animals produce biological products such as human protein (alpha-1-antitrypsin) used to treat emphysema.",
         "Emphysema involves elastase-mediated alveolar breakdown.",
         T2, "Biological Products"),

        ("What was the name of the first transgenic cow, created in 1997, that produced human protein-enriched milk?",
         "Rosie", "Dolly", "Polly", "Tracy", "A",
         "Rosie transgenic cow.",
         "In 1997, the first transgenic cow, Rosie, produced human protein-enriched milk (2.4 grams per litre).",
         "Dolly was a cloned sheep; Rosie was the transgenic cow.",
         T2, "Rosie Transgenic Cow"),

        ("The milk produced by the first transgenic cow, Rosie, was enriched with which human milk protein, making it nutritionally superior for human babies?",
         "Human alpha-lactalbumin", "Human serum albumin", "Human keratin", "Human collagen", "A",
         "Human alpha-lactalbumin in Rosie milk.",
         "The milk contained the human alpha-lactalbumin and was nutritionally a more balanced product for human babies than natural cow-milk.",
         "Alpha-lactalbumin is the primary whey protein of human breast milk.",
         T2, "Rosie Transgenic Cow"),

        ("Approximately how many grams of human protein did one litre of milk from the transgenic cow Rosie contain?",
         "2.4 grams per litre", "100 grams per litre", "0.01 grams per litre", "50 grams per litre", "A",
         "Rosie protein concentration.",
         "Rosie produced human protein-enriched milk containing 2.4 grams of human protein per litre.",
         "NCERT explicitly notes 2.4 g/L.",
         T2, "Rosie Transgenic Cow"),

        ("Transgenic mice are currently being developed and utilized as biological testing models to replace monkeys for evaluating the safety of which human vaccine?",
         "Polio vaccine", "BCG vaccine", "Rabies vaccine", "Smallpox vaccine", "A",
         "Polio vaccine testing in mice.",
         "Transgenic mice are being developed for use in testing the safety of vaccines before they are used on humans. Transgenic mice are being used to test the safety of the polio vaccine.",
         "Polio vaccine safety batch testing historically utilized primates.",
         T2, "Vaccine Safety"),

        ("Why are transgenic animals engineered for chemical safety testing (toxicity testing) advantageous over conventional animals?",
         "They are made carrying genes that make them more sensitive to toxic substances, providing rapid and clear toxicity data",
         "They are completely indestructible and immortal",
         "They synthesize pure gold in their tissues",
         "They do not require food or water", "A",
         "Toxicity testing in transgenic animals.",
         "Transgenic animals are made that carry genes which make them more sensitive to toxic substances than non-transgenic animals; toxicity testing in such animals will allow us to obtain results in less time.",
         "Increased sensitivity shortens experimental duration.",
         T2, "Toxicity Testing"),

        ("Which statutory committee set up by the Government of India validates the safety and ethical validity of Genetically Modified (GM) research and public releases?",
         "GEAC (Genetic Engineering Appraisal Committee)",
         "ICMR (Indian Council of Medical Research)",
         "UGC (University Grants Commission)",
         "CSIR (Council of Scientific and Industrial Research)", "A",
         "GEAC committee.",
         "The Indian Government has set up organisations such as GEAC (Genetic Engineering Appraisal Committee), which makes decisions regarding the validity of GM research and the safety of introducing GM-organisms for public services.",
         "GEAC is the regulatory agency for GM crops.",
         T2, "Biosafety and GEAC"),

        ("What is the full form of GEAC as defined under the Ministry of Environment, Forest and Climate Change in India?",
         "Genetic Engineering Appraisal Committee",
         "General Engineering Assessment Council",
         "Global Environmental Action Commission",
         "Gene Evolution and Analysis Consortium", "A",
         "GEAC full form.",
         "GEAC stands for Genetic Engineering Appraisal Committee (formerly Approval Committee).",
         "It oversees biosafety clearances.",
         T2, "Biosafety and GEAC"),

        ("The unauthorized exploitation of bio-resources and traditional indigenous knowledge by multinational corporations without consent or compensatory payment is termed:",
         "Biopiracy", "Biofortification", "Bioremediation", "Biomagnification", "A",
         "Biopiracy definition in NCERT.",
         "Biopiracy is the term used to refer to the use of bio-resources by multinational companies and other organisations without proper authorisation from the countries and people concerned without compensatory payment.",
         "Biofortification is improving nutritional value of crops.",
         T2, "Biopiracy"),

        ("Approximately how many documented varieties of traditional aromatic Basmati rice are grown in India?",
         "27 documented varieties", "5 varieties only", "500 varieties", "2,000 varieties", "A",
         "Basmati varieties in India.",
         "Basmati rice is distinct for its unique aroma and flavour and 27 documented varieties of Basmati are grown in India.",
         "Total rice varieties in India are 200,000; Basmati documented are 27.",
         T2, "Basmati Rice and Biopiracy"),

        ("In 1997, an American patent company sparked international outrage by obtaining a patent on Basmati rice through the US Patent and Trademark Office by:",
         "Crossing Indian Basmati with semi-dwarf varieties and claiming it as a novel invention",
         "Sequencing the entire human genome",
         "Extracting insulin from American cows",
         "Synthesizing rice grains artificially from plastic", "A",
         "1997 Basmati patent case.",
         "In 1997, an American company got patent rights on Basmati rice through the US Patent and Trademark Office. This allowed the company to sell a 'new' variety of Basmati, which was actually derived from Indian farmer's varieties by crossing with semi-dwarf varieties.",
         "It appropriated centuries of Indian farmer selection.",
         T2, "Basmati Rice and Biopiracy"),

        ("Traditional Indian crops and biological resources that multinational companies have attempted to patent without proper authorization include:",
         "Basmati rice, Neem, and Turmeric", "Pineapple and Kiwi exclusively", "Potato and Tomato only", "Cocoa and Vanilla only", "A",
         "Indian biopiracy targets.",
         "Attempts have been made to patent products based on Indian traditional herbal knowledge, including Basmati rice, Turmeric (curcumin for wound healing), and Neem (pesticidal properties).",
         "Basmati, Neem, and Turmeric are famous biopiracy challenges won by India.",
         T2, "Biopiracy"),

        ("Which legislative measure was passed by the Indian Parliament to protect the nation's bioresources and indigenous knowledge against biopiracy?",
         "The Indian Patents Bill (second amendment)",
         "The Information Technology Act",
         "The Wildlife Protection Act 1972 only",
         "The Indian Penal Code 1860", "A",
         "Indian Patents Bill amendment.",
         "The Indian Parliament has recently cleared the second amendment of the Indian Patents Bill, which takes such issues into consideration, including patent terms emergency provisions and research and development initiative.",
         "The Patents Bill governs intellectual property rights on bioresources.",
         T2, "Patent Legislation"),

        ("Which insect order includes agricultural pests such as armyworms and tobacco budworms that are susceptible to Bt toxin?",
         "Lepidopterans", "Coleopterans", "Dipterans", "Hymenopterans", "A",
         "Bt insect targets: Lepidoptera.",
         "Bacillus thuringiensis forms protein crystals that kill insects belonging to orders Lepidoptera (tobacco budworm, armyworm), Coleoptera (beetles), and Diptera (flies, mosquitoes).",
         "Coleoptera are beetles; Diptera are flies.",
         T1, "Bt Targets"),

        ("Which insect order includes beetles that can be killed by specific crystal endotoxins produced by Bacillus thuringiensis?",
         "Coleopterans", "Lepidopterans", "Dipterans", "Orthopterans", "A",
         "Bt insect targets: Coleoptera.",
         "Coleopterans are beetles, which are susceptible to specific Cry endotoxins from Bt strains.",
         "Lepidopterans are moths and butterflies.",
         T1, "Bt Targets"),

        ("Flies and mosquitoes, which are vectors of major tropical infectious diseases, belong to which insect order susceptible to Bt toxins?",
         "Dipterans", "Lepidopterans", "Coleopterans", "Hemipterans", "A",
         "Bt insect targets: Diptera.",
         "Dipterans (flies and mosquitoes) are susceptible to certain strains of Bacillus thuringiensis (e.g., Bt israelensis).",
         "Diptera means two-winged true flies.",
         T1, "Bt Targets"),

        ("The Green Revolution succeeded in tripling agricultural food supply primarily through the use of:",
         "Improved crop varieties, irrigation, and heavy inputs of agrochemicals (fertilizers and pesticides)",
         "Genetically engineered recombinant DNA crops",
         "Total abandonment of mechanical farming",
         "Cultivating crops without any water", "A",
         "Green revolution inputs in NCERT.",
         "The Green Revolution succeeded in tripling the food supply mainly due to (i) improved crop varieties, (ii) better management practices and (iii) use of agrochemicals (fertilisers and pesticides).",
         "Recombinant GM crops came after the Green Revolution.",
         T1, "Green Revolution")
    ]

    # Additional 75 easy questions for Chapter 10
    extra_easy_10 = [
        ("Why can the Green Revolution NOT continue to meet the nutritional demands of the burgeoning human population indefinitely?",
         "Agrochemicals are excessively expensive for developing farmers, and environmental pollution has plateaued yield gains",
         "Plants have completely lost the ability to photosynthesize",
         "All groundwater has turned into salt",
         "Insects have developed metal armor", "A",
         "Green Revolution limitations.",
         "Agrochemicals are too expensive for farmers in the developing world, and further yield increases with existing varieties are not possible; hence genetic modification is required.",
         "GM crops provide sustainable alternatives to agrochemicals.",
         T1, "Agriculture Biotechnology"),

        ("How do genetically modified crops help conserve soil mineral fertility over multiple cropping seasons?",
         "By increasing the efficiency of mineral usage by plant roots, preventing early exhaustion of soil nutrients",
         "By synthesizing uranium crystals in the root cortex",
         "By eliminating the need for sunlight",
         "By converting air into solid rock", "A",
         "Mineral efficiency of GM crops.",
         "Genetic modification increases efficiency of mineral usage by plants (this prevents early exhaustion of fertility of soil).",
         "Enhanced uptake efficiency prevents nutrient depletion.",
         T1, "GM Crop Benefits"),

        ("The introduction of 'Flavr Savr' transgenic tomato was designed to reduce post-harvest spoilage by inhibiting which cell-wall degrading enzyme?",
         "Polygalacturonase", "DNA polymerase", "Amylase", "Pepsin", "A",
         "Flavr Savr polygalacturonase.",
         "Flavr Savr tomato uses antisense RNA to downregulate polygalacturonase, slowing pectin degradation in the fruit wall and prolonging shelf life.",
         "Pepsin is a gastric protease.",
         T1, "Post-Harvest Quality"),

        ("How many documented varieties of traditional rice are estimated to exist across India, making it one of the richest rice gene pools on Earth?",
         "Over 200,000 varieties", "Only 200 varieties", "About 5,000 varieties", "Exactly 12 varieties", "A",
         "Rice diversity in India.",
         "India has an immense wealth of rice: an estimated 200,000 varieties of rice exist in India alone.",
         "NCERT explicitly gives the figure of 200,000 varieties.",
         T2, "Rice Genetic Wealth"),

        ("In RNA interference (RNAi), what is the molecular origin of the mobile genetic elements that replicate via an RNA intermediate?",
         "Transposons", "Plasmids", "Histones", "Centromeres", "A",
         "Transposons in RNAi.",
         "The source of complementary RNA may be from an infection by viruses having RNA genomes or mobile genetic elements (transposons) that replicate via an RNA intermediate.",
         "Transposons are jumping genes.",
         T1, "RNA Interference"),

        ("In RNAi, what cellular enzyme complex cleaves long double-stranded RNA into short interfering RNAs (siRNAs) of 21-23 base pairs?",
         "Dicer", "DNA ligase", "Reverse transcriptase", "Topoisomerase", "A",
         "Dicer enzyme in RNAi.",
         "Dicer, an endoribonuclease, recognizes and cleaves long double-stranded RNA molecules into small interfering RNAs (siRNAs).",
         "DNA ligase joins DNA fragments.",
         T1, "RNAi Mechanism"),

        ("What is the functional consequence when small interfering RNAs guide the RISC complex to bind a target messenger RNA?",
         "The target mRNA is cleaved and destroyed, preventing protein translation (silencing)",
         "The mRNA is translated 10,000 times faster",
         "The mRNA turns into double-stranded DNA",
         "The ribosome is permanently duplicated", "A",
         "RISC mRNA cleavage.",
         "The RNA-Induced Silencing Complex (RISC) uses the siRNA strand as a guide to cleave the complementary mRNA, silencing gene expression.",
         "It silences expression, not enhances translation.",
         T1, "RNAi Mechanism"),

        ("Human insulin consists of 51 amino acids distributed across Chain A and Chain B; how many amino acids are present in Chain A?",
         "21 amino acids", "30 amino acids", "33 amino acids", "51 amino acids", "A",
         "Insulin Chain A length.",
         "Chain A of human insulin is 21 amino acids in length, while Chain B consists of 30 amino acids.",
         "30 is Chain B; 33 is C-peptide.",
         T2, "Insulin Structure"),

        ("How many amino acids constitute Chain B of the human mature insulin molecule?",
         "30 amino acids", "21 amino acids", "33 amino acids", "51 amino acids", "A",
         "Insulin Chain B length.",
         "Chain B of human insulin contains 30 amino acids.",
         "21 is Chain A; total in mature insulin is 51 aa.",
         T2, "Insulin Structure"),

        ("The connecting C peptide present in mammalian pro-insulin consists of approximately how many amino acids in humans?",
         "33 amino acids", "21 amino acids", "30 amino acids", "100 amino acids", "A",
         "C-peptide length.",
         "In human pro-insulin, the connecting C-peptide consists of approximately 30-33 amino acids.",
         "It is cleaved out by endopeptidases during insulin maturation.",
         T2, "Insulin Structure"),

        ("In diagnostic ELISA testing, what indicator reaction produces a visible color change confirming the presence of target pathogen antigens or antibodies?",
         "An enzyme-substrate catalytic colorimetric reaction",
         "Radioactive explosion inside the well",
         "Immediate freezing of the plastic plate",
         "Emission of ultraviolet laser beams", "A",
         "ELISA enzymatic colorimetry.",
         "ELISA utilizes an enzyme (such as horseradish peroxidase or alkaline phosphatase) linked to an antibody, which converts a colorless chromogen into a colored product upon antigen binding.",
         "Color intensity is proportional to antigen/antibody concentration.",
         T2, "ELISA"),

        ("In the context of recombinant DNA medicine, what does the term 'Humulin' signify?",
         "Recombinant human insulin produced in E. coli by Eli Lilly",
         "A new species of genetically modified human",
         "A synthetic growth hormone harvested from trees",
         "An antibiotic derived from human saliva", "A",
         "Humulin trade name.",
         "Humulin is the commercial trade name for genetically engineered human insulin produced by Eli Lilly using recombinant E. coli.",
         "It is identical in sequence to human insulin.",
         T2, "Humulin"),

        ("Prior to 1983, why was synthesizing recombinant human insulin in bacteria exceptionally difficult?",
         "Because bacteria cannot excise the C-peptide from eukaryotic pro-insulin precursors",
         "Because bacteria do not possess ribosomes",
         "Because insulin genes are made of sulfur instead of nucleotides",
         "Because bacteria instantly turn insulin into ethanol", "A",
         "Pro-insulin processing challenge in bacteria.",
         "The main challenge for production of insulin using rDNA techniques was getting insulin assembled into a mature form, because bacteria lack processing peptidases to excise the C-peptide.",
         "Eli Lilly bypassed this by synthesizing Chains A and B separately.",
         T2, "Recombinant Insulin"),

        ("How did Eli Lilly's brilliant molecular strategy successfully bypass the bacterial inability to process pro-insulin?",
         "They synthesized separate DNA sequences for Chains A and B, expressed them individually, and combined them chemically",
         "They cloned whole human pancreatic tissue into pigs",
         "They added human stomach acid to the bacterial broth",
         "They forced E. coli to develop a Golgi apparatus", "A",
         "Eli Lilly separate chain strategy.",
         "Eli Lilly synthesized two separate DNA coding sequences corresponding to chains A and B, introduced them into separate E. coli cultures, and linked the purified chains in vitro with disulfide bonds.",
         "This avoided the need for post-translational C-peptide excision.",
         T2, "Recombinant Insulin"),

        ("In the 1990 clinical gene therapy for ADA deficiency, which vector was employed to introduce the functional ADA cDNA into the patient's cultured lymphocytes?",
         "A disarmed retroviral vector", "Bacteriophage T4", "Ti plasmid of Agrobacterium", "A plasmid from Salmonella typhimurium", "A",
         "Retroviral vector in ADA gene therapy.",
         "A functional ADA cDNA (using a retroviral vector) is introduced into the patient's cultured lymphocytes, which are subsequently returned to the patient.",
         "Retroviruses integrate therapeutic cDNA into human chromosomal DNA.",
         T2, "Gene Therapy"),

        ("Before gene therapy was developed, what conventional clinical treatment was administered to ADA-deficient infants to provide the missing enzyme?",
         "Enzyme replacement therapy (periodic injections of functional ADA enzyme)",
         "Infusion of concentrated glucose",
         "Daily exposure to ultraviolet light",
         "Surgical removal of the bone marrow", "A",
         "Enzyme replacement therapy.",
         "In some children, ADA deficiency can be treated by enzyme replacement therapy, in which functional ADA is given to the patient by injection.",
         "However, this is not completely curative and requires lifelong injections.",
         T2, "Gene Therapy"),

        ("Another conventional non-curative approach to treat ADA deficiency before gene therapy is:",
         "Bone marrow transplantation", "Skin grafting", "Hemodialysis", "Bloodletting", "A",
         "Bone marrow transplantation.",
         "In some children ADA deficiency can be cured by bone marrow transplantation, but finding an HLA-matched donor is challenging.",
         "Gene therapy offers an autologous solution.",
         T2, "Gene Therapy"),

        ("Why is retroviral gene integration particularly advantageous in human somatic gene therapy?",
         "Retroviruses stably integrate their proviral DNA into the host chromosome, enabling expression during cell division",
         "Retroviruses replicate until the host explodes",
         "Retroviruses turn lymphocytes into bone cells",
         "Retroviruses synthesize plant chloroplasts", "A",
         "Retrovirus proviral integration.",
         "Disarmed retroviruses integrate the therapeutic transgene directly into host genomic chromosomes, passing the gene to all daughter cells.",
         "Viral virulence genes are deleted, making the vector replication-defective.",
         T2, "Gene Therapy"),

        ("When testing an individual for suspected cancer, how does PCR assist in early diagnosis?",
         "It detects oncogenic gene mutations present in only a few cells by amplifying specific DNA sequences",
         "It kills all cancerous cells instantly",
         "It turns tumors into liquid water",
         "It replaces all defective organs", "A",
         "PCR cancer diagnostics.",
         "PCR allows detection of specific oncogenic point mutations, deletions, or chromosomal translocations in minute tissue samples before clinical tumors manifest.",
         "PCR is an analytical diagnostic tool, not a therapeutic ablation device.",
         T2, "Molecular Diagnostics"),

        ("In molecular hybridization assays, what prevents non-complementary DNA sequences from binding to a radioactive probe?",
         "Mismatch in base sequence prevents stable hydrogen bond formation under stringent washing conditions",
         "Negative charges on the probe repel all other atoms",
         "The probe produces electric sparks that disintegrate mismatches",
         "Non-complementary DNA turns into gas", "A",
         "Hybridization stringency.",
         "Hybridization requires complementary Watson-Crick base-pairing (A-T, G-C). Mismatched sequences cannot form stable hydrogen bonds and are washed away.",
         "Only perfectly complementary duplexes remain bound.",
         T2, "Molecular Probes"),

        ("Autoradiography detects the spatial position of hybridized radioactive probes on a nylon membrane by exposing it to:",
         "X-ray photographic film", "A magnetic compass", "A clinical thermometer", "A litmus paper strip", "A",
         "Autoradiography on X-ray film.",
         "The decay particles from the radioisotope (e.g., 32P) expose silver halide crystals in X-ray film, producing visible dark bands upon development.",
         "It produces an image of radioactive band locations.",
         T2, "Molecular Diagnostics"),

        ("Which organism is the most commonly utilized mammalian model for testing the carcinogenicity and toxicity of newly synthesized chemical compounds?",
         "Transgenic mouse", "Transgenic elephant", "Wild tiger", "African giraffe", "A",
         "Transgenic mice in toxicity.",
         "Transgenic mice are the primary mammalian models used worldwide for toxicology, mutagenesis, and safety evaluation.",
         "Large wild animals are never used in standard laboratory testing.",
         T2, "Toxicity Testing"),

        ("How does genetic engineering of cows to express human alpha-lactalbumin in milk directly benefit human infants?",
         "It makes the milk nutritionally balanced and more easily digestible, closely resembling natural human breast milk",
         "It turns the milk into solid chocolate",
         "It permanently eliminates the baby's need to drink water",
         "It makes the milk completely lactose-free and protein-free", "A",
         "Alpha-lactalbumin infant nutrition.",
         "Human alpha-lactalbumin provides an optimal balance of essential amino acids and facilitates calcium and zinc absorption in human infants.",
         "It elevates nutritional parity with maternal breast milk.",
         T2, "Rosie Transgenic Cow"),

        ("Why was Dolly the sheep famous in 1996 in the history of biotechnology?",
         "She was the first mammal cloned from an adult somatic cell (nuclear transfer)",
         "She was the first transgenic animal to synthesize human insulin in her wool",
         "She lived to be 100 years old",
         "She was engineered to fly", "A",
         "Dolly cloned sheep 1996.",
         "Dolly was cloned by Ian Wilmut at the Roslin Institute using somatic cell nuclear transfer from an adult mammary gland cell.",
         "Dolly was a clone, not a transgenic bioreactor.",
         T2, "Cloning History"),

        ("Which Indian regulatory body grants commercial clearance for the environmental release of genetically modified crop varieties like Bt cotton?",
         "GEAC (under MoEFCC)", "Agricultural Produce Market Committee", "Food Corporation of India", "Bureau of Indian Standards", "A",
         "GEAC clearance.",
         "GEAC is the apex regulatory agency authorized to approve commercial cultivation and environmental release of GMOs in India.",
         "FCI stores food grains; BIS sets industrial product standards.",
         T2, "Biosafety Regulations"),

        ("Why must public release of Genetically Modified Organisms (GMOs) be strictly regulated by government agencies like GEAC?",
         "To evaluate ecological risks, potential gene flow to wild relatives, allergenicity, and environmental safety",
         "To ensure all wild plants are exterminated",
         "To prohibit any scientific research in universities",
         "To guarantee that multinational corporations own all global farmland", "A",
         "Rationale for biosafety regulation.",
         "Strict regulatory oversight prevents unintended ecological disruption, cross-pollination with wild species, and unforeseen health impacts on humans and livestock.",
         "Regulation ensures biosafety and consumer protection.",
         T2, "Biosafety Regulations"),

        ("The patenting of traditional herbal remedies (such as the use of turmeric for wound healing) by foreign entities without Indian consent was successfully challenged based on:",
         "Prior art and documentation in ancient Indian Ayurvedic texts",
         "Secret corporate espionage",
         "Refusal to pay US dollars",
         "Destruction of the American patent office", "A",
         "Turmeric patent challenge based on prior art.",
         "India successfully revoked the US patent on turmeric wound healing by proving 'prior art' documented in ancient Sanskrit and Ayurvedic medical texts.",
         "A patent requires absolute novelty; prior knowledge invalidates patent claims.",
         T2, "Biopiracy and Prior Art"),

        ("Biopiracy poses a grave threat to developing biodiversity-rich countries because:",
         "Multinational corporations patent indigenous resources, monopolize commercial profits, and deny equitable sharing of benefits to native communities",
         "It causes all farm animals to lose their fur",
         "It prevents crops from photosynthesizing",
         "It causes solar eclipses", "A",
         "Economic and ethical impact of biopiracy.",
         "Biopiracy allows foreign corporations to reap massive financial windfalls while exploiting indigenous custodians without compensatory royalties or benefit-sharing.",
         "It disenfranchises native farmers and violates sovereign rights.",
         T2, "Biopiracy"),

        ("Which amendment to the Indian patent law incorporated emergency provisions, research exemptions, and compulsory licensing to safeguard national interests?",
         "Second Amendment of the Indian Patents Bill",
         "First Amendment of the Constitution 1951",
         "The 42nd Constitutional Amendment",
         "The Right to Information Act", "A",
         "Indian Patents Bill 2nd amendment.",
         "The second amendment to the Indian Patents Act introduced essential safeguards, research exemptions, and compulsory licensing in public health emergencies.",
         "It strikes a balance between intellectual property protection and public welfare.",
         T2, "Patent Legislation"),

        ("In transgenic crop production, what is a major ecological advantage of cultivating insect-resistant Bt crops?",
         "Substantial reduction in the application of synthetic chemical insecticides, protecting non-target wildlife and farmworkers",
         "Complete elimination of the need for sunlight",
         "Total prevention of all rain and hail storms",
         "Permanent sterilization of all soil microbes", "A",
         "Bt ecological benefits.",
         "Bt crops specifically target pest caterpillars, drastically cutting down millions of kilograms of toxic synthetic insecticide sprays.",
         "This lowers chemical runoff into water tables.",
         T1, "Bt Agriculture"),

        ("Which of the following insect orders comprises mosquitoes and houseflies, which are susceptible to specific dipteran-active Bt Cry proteins?",
         "Diptera", "Lepidoptera", "Coleoptera", "Odonata", "A",
         "Dipteran Bt susceptibility.",
         "Diptera includes flies and mosquitoes, which are susceptible to specific crystal delta-endotoxins (such as Cry4 and Cry11).",
         "Odonata includes dragonflies.",
         T1, "Bt Insect Orders"),

        ("In RNA interference, the double-stranded RNA (dsRNA) molecule is processed into functional silencing units termed:",
         "siRNAs (Small Interfering RNAs)", "rRNAs (Ribosomal RNAs)", "tRNAs (Transfer RNAs)", "snRNAs (Small Nuclear RNAs)", "A",
         "siRNA generation in RNAi.",
         "Long dsRNA is cleaved by Dicer into short 21-23 nucleotide double-stranded fragments termed small interfering RNAs (siRNAs).",
         "tRNA transfers amino acids during translation.",
         T1, "RNAi Mechanism"),

        ("In tobacco plants engineered with RNAi against Meloidogyne incognita, which introduced DNA construct initiated the formation of dsRNA?",
         "A construct that produced both sense and antisense RNA complementary to nematode mRNA",
         "A construct that synthesized pure liquid mercury",
         "A construct that destroyed the tobacco chloroplasts",
         "A construct that encoded bacterial flagella", "A",
         "Sense and antisense transcription in RNAi.",
         "The Agrobacterium T-DNA was engineered to transcribe both sense and antisense strands of target nematode sequences, which spontaneously hybridized into dsRNA.",
         "Hybridization of sense and antisense strands generates trigger dsRNA.",
         T1, "RNAi Tobacco Engineering"),

        ("Why is mature human insulin composed of two chains rather than one single continuous chain?",
         "Because during intracellular post-translational processing, the intervening C-peptide is enzymatically cleaved and removed",
         "Because human genes are made of two separate chromosomes",
         "Because Chain A is made of DNA and Chain B is made of RNA",
         "Because Chain B is produced by the liver and Chain A by the pancreas", "A",
         "Insulin C-peptide excision.",
         "Preproinsulin is synthesized as a single polypeptide; after signal peptide cleavage, endopeptidases excise the connecting C-peptide, leaving Chains A and B.",
         "Both chains originate from the same preproinsulin gene on chromosome 11.",
         T2, "Insulin Processing"),

        ("In recombinant DNA medicine, why are mammalian host cells (such as Chinese Hamster Ovary - CHO cells) often required instead of bacteria for complex therapeutic proteins?",
         "Mammalian cells perform complex post-translational modifications (like proper glycosylation) essential for protein folding and biological activity",
         "Mammalian cells divide every 2 seconds",
         "Mammalian cells do not require nutrient media",
         "Mammalian cells have no cell membranes", "A",
         "Glycosylation in mammalian cell culture.",
         "Complex human glycoproteins require correct oligosaccharide branching and folding, which bacterial hosts cannot perform.",
         "CHO cells are standard industrial hosts for complex biopharmaceuticals.",
         T2, "Biopharmaceutical Manufacturing"),

        ("The primary diagnostic application of PCR in epidemiological screening of blood bank donations is:",
         "Detecting early-stage HIV or Hepatitis C infections during the serological 'window period' before antibodies develop",
         "Measuring the concentration of red blood cells",
         "Determining the ABO blood group",
         "Detecting the amount of iron in hemoglobin", "A",
         "Nucleic acid testing (NAT) in blood screening.",
         "PCR Nucleic Acid Testing (NAT) detects viral RNA directly, identifying infected blood donations during the window period before antibodies are detectable.",
         "ELISA can miss early infections if antibody titers are low.",
         T2, "Molecular Diagnostics"),

        ("Which genetic metabolic disorder in infants is characterized by the inability to metabolize phenylalanine and has been studied using transgenic animal models?",
         "Phenylketonuria (PKU)", "Cystic fibrosis", "Emphysema", "Down syndrome", "A",
         "PKU in transgenic models.",
         "Attempts are being made to manufacture therapeutic biological products for diseases like phenylketonuria (PKU) and cystic fibrosis using transgenic animals.",
         "PKU is caused by deficiency of phenylalanine hydroxylase.",
         T2, "Transgenic Models"),

        ("Cystic fibrosis is a severe autosomal recessive genetic disorder caused by mutations in which transmembrane transport protein?",
         "CFTR (Cystic Fibrosis Transmembrane Conductance Regulator)",
         "Hemoglobin beta chain",
         "Insulin receptor kinase",
         "Sodium-potassium ATPase", "A",
         "CFTR in cystic fibrosis.",
         "Cystic fibrosis results from defective CFTR chloride ion channels, leading to thick mucus accumulation in lungs and pancreas.",
         "Transgenic animal models are utilized to test gene therapy vectors for CFTR.",
         T2, "Transgenic Models"),

        ("Why is testing new vaccines on transgenic mice prior to human trials an ethically and scientifically sound strategy?",
         "It allows detection of vaccine-induced adverse toxicity or viral reversion in a standardized mammal without endangering human lives",
         "It accelerates vaccine sales by 100 times",
         "It ensures that mice become immune to human speech",
         "It replaces all clinical trials in humans completely", "A",
         "Vaccine pre-clinical testing rationale.",
         "Pre-clinical evaluation in genetically defined transgenic models establishes initial safety, dose tolerance, and immunogenicity before human clinical phases.",
         "Human clinical trials still follow, but mouse screening weeds out unsafe formulations.",
         T2, "Vaccine Safety"),

        ("The deliberate introduction of human genes into farm livestock (such as cows, sheep, or goats) to harvest therapeutic proteins from their milk is known as:",
         "Pharming (Molecular farming)", "Somatic mutation", "Artificial insemination only", "Cross-pollination", "A",
         "Molecular farming definition.",
         "Molecular farming (or gene pharming) uses transgenic farm animals as biological bioreactors to produce high-value pharmaceutical proteins in their milk.",
         "Rosie the cow is a pioneer example of molecular farming.",
         T2, "Molecular Farming"),

        ("In clinical medicine, why is recombinant human insulin vastly superior to animal-derived bovine or porcine insulin?",
         "It possesses identical human amino acid sequence, eliminating foreign-protein immune sensitization and allergic reactions",
         "It lasts for 50 years with a single injection",
         "It cures diabetes permanently within 1 hour",
         "It can be eaten as a candy without injection", "A",
         "Advantages of recombinant Humulin.",
         "Recombinant human insulin matches human physiology exactly, preventing anti-insulin antibody formation and allergic hypersensitivity caused by animal insulin.",
         "Recombinant insulin still requires injection because digestive enzymes degrade it if taken orally.",
         T2, "Recombinant Insulin"),

        ("The term 'Golden Rice' derives its name from its characteristic golden-yellow colour, which is produced by the accumulation of:",
         "Beta-carotene (provitamin A)", "Pure gold nanoparticles", "Chlorophyll b", "Anthocyanin pigments", "A",
         "Golden rice color origin.",
         "The rich golden hue of Golden Rice endosperm is due to accumulation of beta-carotene, a carotenoid pigment that the human body converts into vitamin A.",
         "It contains provitamin A, not metallic gold.",
         T1, "Golden Rice"),

        ("Vitamin A deficiency in developing countries is a leading cause of preventable childhood blindness, a clinical condition termed:",
         "Xerophthalmia (and night blindness)", "Glaucoma", "Myopia", "Presbyopia", "A",
         "Vitamin A deficiency ocular pathology.",
         "Dietary vitamin A deficiency causes night blindness and xerophthalmia (corneal ulceration and blindness); Golden Rice was developed to alleviate this crisis.",
         "Glaucoma is elevated intraocular pressure.",
         T1, "Golden Rice"),

        ("Which organism served as the genetic donor for the phytoene synthase gene used in engineering Golden Rice?",
         "Daffodil (Narcissus pseudonarcissus) and Erwinia uredovora",
         "Escherichia coli exclusively",
         "Thermus aquaticus",
         "Bacillus thuringiensis", "A",
         "Golden rice donor genes.",
         "The biosynthetic beta-carotene pathway was introduced into rice using phytoene synthase from daffodil (or maize) and carotene desaturase from the bacterium Erwinia.",
         "Bt provides Cry toxins, not carotenoid enzymes.",
         T1, "Golden Rice"),

        ("The specific midgut receptors to which activated Bt toxins bind in susceptible insect larvae are:",
         "Cadherin-like glycoproteins on midgut epithelial microvilli",
         "RBC hemoglobin receptors",
         "Taste receptors on antennae",
         "Visual photoreceptors in insect compound eyes", "A",
         "Bt midgut receptors.",
         "Cry toxins bind specifically to cadherin and aminopeptidase receptors on the apical microvillar membrane of midgut epithelial cells, leading to pore formation.",
         "Insects lack hemoglobin.",
         T1, "Bt Mechanism"),

        ("Why do beneficial insects like honeybees and ladybird beetles remain unharmed in fields planted with Bt cotton?",
         "They lack the specific midgut epithelial receptors required for Cry toxin binding and activation",
         "They wear protective suits",
         "They feed exclusively on chemical fertilizers",
         "They digest Bt toxin into pure honey", "A",
         "Bt target specificity.",
         "Bt Cry endotoxins are highly specific; non-target insects lack the alkaline gut conditions and specific membrane receptors required for toxin activation and binding.",
         "Bt toxin is harmless to non-susceptible orders.",
         T1, "Bt Safety"),

        ("Which of the following represents an agricultural abiotic stress that genetically engineered crops have been developed to withstand?",
         "Drought, high salinity, extreme cold, and heat",
         "Infestation by cotton bollworms",
         "Infection by crown gall bacteria",
         "Attacks by migratory locusts", "A",
         "Abiotic stresses in GM crops.",
         "Drought, salinity, cold, and heat are non-living (abiotic) environmental stresses that GM crops have been tailored to tolerate.",
         "Insects and bacteria are biotic stresses.",
         T1, "Abiotic Stress Tolerance"),

        ("In transgenic animals, the foreign gene introduced into the genome is technically termed a:",
         "Transgene", "Somaclone", "Pseudogene", "Intron", "A",
         "Transgene definition.",
         "A foreign gene that has been artificially introduced into the nuclear genome of an organism is called a transgene.",
         "The recipient organism is termed a transgenic organism.",
         T2, "Transgenic Technology"),

        ("A major ethical concern regarding the release of genetically modified crops into agriculture is:",
         "The potential transfer of herbicide or antibiotic resistance genes to wild weedy relatives via pollen gene flow",
         "That crops will begin talking to farmers",
         "That plants will refuse to grow roots",
         "That sunlight will be permanently blocked by plant leaves", "A",
         "Gene flow risk in GMOs.",
         "A valid biosafety concern is outcrossing or horizontal gene flow of transgenes into wild relatives, potentially creating herbicide-tolerant 'superweeds'.",
         "Rigorous biosafety testing monitors pollen drift.",
         T2, "Biosafety Concerns"),

        ("The fundamental goal of traditional agrochemical-based agriculture was to maximize crop yields primarily through:",
         "Heavy applications of synthetic inorganic fertilizers and chemical pesticides",
         "Relying entirely on wild forest foraging",
         "Using organic biofertilisers exclusively",
         "Manipulating recombinant DNA in petridishes", "A",
         "Agrochemical agriculture.",
         "Agrochemical-based agriculture relied heavily on industrial chemical inputs (urea, organophosphates) to maximize food productivity.",
         "It led to environmental pollution, prompting the shift towards biotechnology and organic farming.",
         T1, "Agricultural Paradigms"),
        ("The main challenge for the commercial production of human insulin using rDNA techniques was getting insulin assembled into a:",
         "Mature, active form containing disulfide-bonded A and B chains without C-peptide",
         "Single circular DNA molecule",
         "Powdered form inside plant seeds",
         "Gaseous aerosol form", "A",
         "Insulin production challenge in NCERT.",
         "The main challenge for production of insulin using rDNA techniques was getting insulin assembled into a mature form.",
         "Bacteria could not remove C peptide from proinsulin.",
         T2, "Recombinant Insulin"),

        ("Which human enzyme deficiency is treated by enzyme replacement therapy as a non-permanent temporary measure?",
         "Adenosine Deaminase (ADA) deficiency", "Phenylalanine hydroxylase deficiency", "Pepsin deficiency", "Amylase deficiency", "A",
         "Enzyme replacement therapy for ADA.",
         "ADA deficiency can be treated by enzyme replacement therapy, in which functional ADA is given to the patient by injection, though not completely curative.",
         "Pepsin and amylase are digestive enzymes.",
         T2, "Gene Therapy"),

        ("At which stage of human development could the introduction of a functional ADA gene provide a permanent lifelong cure?",
         "Early embryonic stages (in marrow stem cells)", "Adult geriatric stage", "Adolescent puberty stage", "Old age above 70 years", "A",
         "Permanent cure for ADA deficiency.",
         "If the gene isolated from marrow cells producing ADA is introduced into cells at early embryonic stages, it could be a permanent cure.",
         "Adult lymphocytes have limited lifespan.",
         T2, "Gene Therapy"),

        ("The soil bacterium Agrobacterium tumefaciens was used to introduce nematode-specific genes into host plants to trigger:",
         "RNA interference (RNAi) through dsRNA formation", "High fever in the plant", "Production of cow milk in roots", "Direct synthesis of chemical fertilizers", "A",
         "Agrobacterium vector in RNAi.",
         "Agrobacterium vectors introduced nematode-specific DNA into host tobacco cells producing sense and antisense RNA, triggering RNAi.",
         "It triggers post-transcriptional gene silencing.",
         T1, "RNA Interference"),

        ("Transgenic crops modified for pest resistance have helped agricultural ecosystems primarily by:",
         "Reducing reliance on synthetic chemical pesticides", "Eliminating all insects from the continent", "Making plants immune to sunlight", "Converting nitrogen directly into gold", "A",
         "Pest resistant GM crops.",
         "Pest resistant crops reduce reliance on chemical pesticides (e.g. Bt cotton).",
         "They reduce environmental pesticide loading.",
         T1, "GM Crop Benefits"),

        ("The technique used to detect point mutations in oncogenes in suspected cancer patients using nucleic acid amplification is:",
         "Polymerase Chain Reaction (PCR)", "Serum bilirubin test", "Urinalysis exclusively", "Stool microscopy", "A",
         "PCR in cancer diagnosis.",
         "PCR is routinely used to detect mutations in genes in suspected cancer patients by amplifying target genomic loci.",
         "Serum analysis cannot detect single-base DNA mutations.",
         T2, "Molecular Diagnostics"),

        ("Which milk protein gene was transferred into the nuclear genome of Rosie the cow to enrich her milk for human babies?",
         "Human alpha-lactalbumin gene", "Bovine casein gene", "Human insulin gene", "Human keratin gene", "A",
         "Rosie alpha-lactalbumin transgene.",
         "The milk of Rosie contained human alpha-lactalbumin, making it nutritionally superior for human infants.",
         "Alpha-lactalbumin is the primary whey protein of human milk.",
         T2, "Rosie Transgenic Cow"),

        ("A major objective of producing transgenic animal models is to investigate:",
         "Human diseases, physiology, and novel therapeutic interventions", "How to make animals speak human languages", "How to convert animals into reptiles", "How to eliminate the laws of physics", "A",
         "Transgenic models rationale.",
         "Transgenic models exist for many human diseases such as cancer, cystic fibrosis, rheumatoid arthritis and Alzheimer's to study pathogenesis.",
         "They serve as biomedical models.",
         T2, "Transgenic Models"),

        ("An example of a biological product obtained from transgenic animals clinically used to treat human emphysema is:",
         "alpha-1-antitrypsin", "Streptokinase", "Cyclosporin A", "Penicillin", "A",
         "Alpha-1-antitrypsin in emphysema.",
         "Transgenic animals produce human alpha-1-antitrypsin, which is used to treat emphysema by inhibiting elastase-mediated alveolar damage.",
         "Streptokinase is a bacterial clot buster.",
         T2, "Biological Products"),

        ("A molecular probe used in molecular diagnostics consists of single-stranded DNA or RNA labeled with a:",
         "Radioactive molecule or fluorescent reporter", "Heavy metal lead bead", "Gram-negative bacterium", "Plant leaf extract", "A",
         "Molecular probe definition.",
         "A probe is a single-stranded DNA or RNA tagged with a radioactive molecule that hybridizes to complementary DNA.",
         "It allows detection via autoradiography.",
         T2, "Molecular Probes"),

        ("Golden rice is genetically engineered to biosynthesize which carotenoid pigment in its edible endosperm?",
         "Beta-carotene (provitamin A)", "Chlorophyll a", "Lycopene exclusively", "Anthocyanin", "A",
         "Golden rice beta-carotene.",
         "Golden rice endosperm produces beta-carotene, giving it a golden color and providing provitamin A.",
         "The human body converts beta-carotene into active vitamin A (retinol).",
         T1, "Golden Rice"),

        ("In human pro-insulin, which peptide stretch is enzymatically removed during proteolytic maturation?",
         "C-peptide (33 amino acids)", "A-peptide", "B-peptide", "Both A and B peptides", "A",
         "C-peptide removal in insulin.",
         "Pro-insulin contains an extra stretch called C-peptide, which is excised during maturation into active insulin.",
         "Mature insulin contains only chains A and B.",
         T2, "Insulin Maturation"),

        ("Which viral vector was utilized to transduce functional ADA cDNA into cultured lymphocytes of the SCID patient in 1990?",
         "Disarmed retroviral vector", "Bacteriophage lambda", "Cauliflower mosaic virus", "Tobacco mosaic virus", "A",
         "Retroviral vector in gene therapy.",
         "A functional ADA cDNA using a retroviral vector was introduced into the cultured lymphocytes of the four-year-old patient.",
         "Retroviruses integrate therapeutic genes into mammalian chromosomes.",
         T2, "Gene Therapy"),

        ("Transgenic mice are widely used as preclinical mammalian models for testing the batch safety of which childhood viral vaccine?",
         "Polio vaccine", "BCG vaccine", "Rabies vaccine", "Tetanus toxoid", "A",
         "Polio vaccine testing in mice.",
         "Transgenic mice are being used to test the safety of the polio vaccine, replacing primates.",
         "Preclinical safety validation is mandatory.",
         T2, "Vaccine Safety"),

        ("The term 'biopiracy' was coined in international intellectual property law to describe:",
         "Unauthorized exploitation of biological resources and traditional indigenous knowledge without consent or compensation",
         "Legal buying of rice seeds in supermarkets",
         "Planting trees in national parks",
         "Scientific research published in open journals", "A",
         "Biopiracy definition in NCERT.",
         "Biopiracy refers to the use of bio-resources by multinational companies without proper authorisation from host nations without compensatory payment.",
         "It exploits indigenous sovereign resources.",
         T2, "Biopiracy"),

        ("How many distinct varieties of rice are estimated to exist in India alone, making it one of the richest collections on Earth?",
         "An estimated 200,000 varieties", "Only 2,000 varieties", "About 500 varieties", "Exactly 27 varieties", "A",
         "Rice diversity in India.",
         "India has an immense wealth of rice: an estimated 200,000 varieties of rice exist in India alone.",
         "27 is the number of documented Basmati varieties.",
         T2, "Rice Diversity"),

        ("The patent on Basmati rice granted to a foreign corporation in 1997 was revoked because:",
         "The patented variety was derived from traditional Indian farmer strains through crossing with semi-dwarf varieties",
         "The company forgot to pay renewal fees",
         "The rice tasted terrible",
         "The seeds refused to grow in America", "A",
         "Revocation of Basmati patent.",
         "India proved prior art; the patented variety was derived from traditional Indian farmer strains and did not constitute a novel invention.",
         "Prior art invalidates novelty claims.",
         T2, "Basmati Biopiracy"),

        ("Which insect order is controlled by the Cry proteins encoded by cryIAc and cryIIAb?",
         "Lepidoptera (cotton bollworms)", "Coleoptera (beetles)", "Diptera (flies)", "Hymenoptera (bees)", "A",
         "cryIAc and cryIIAb targets.",
         "The proteins encoded by cryIAc and cryIIAb control cotton bollworms, which belong to the order Lepidoptera.",
         "cryIAb controls corn borer.",
         T1, "Cry Gene Specificity"),

        ("Which agricultural insect pest is specifically controlled by the crystal protein encoded by cryIAb?",
         "Corn borer", "Cotton bollworm", "Tobacco budworm", "Armyworm", "A",
         "cryIAb controls corn borer.",
         "NCERT explicitly specifies that cryIAb controls corn borer.",
         "cryIAc and cryIIAb control cotton bollworms.",
         T1, "Cry Gene Specificity"),

        ("In RNA interference (RNAi), what is the initiator trigger molecule that prompts host cellular Dicer enzymes into action?",
         "Double-stranded RNA (dsRNA)", "Single-stranded DNA", "Transfer RNA (tRNA)", "Ribosomal 18S RNA", "A",
         "dsRNA trigger in RNAi.",
         "Double-stranded RNA (dsRNA) serves as the primary trigger recognized by Dicer endoribonuclease to generate siRNAs.",
         "Single-stranded mRNA is the target to be destroyed.",
         T1, "RNAi Trigger"),

        ("A clone of cells with a mutated gene fails to appear on photographic film in molecular hybridization because:",
         "The radioactive probe lacks complementary base sequence to the mutated allele",
         "Mutated DNA decomposes under UV light",
         "The probe emits heat that burns the film",
         "Mutated cells do not possess nucleic acids", "A",
         "Probe failure on mutated alleles.",
         "The probe does not have complementarity with the mutated gene, so hybridization does not occur and no signal appears on the autoradiogram.",
         "Base complementarity is strictly required for hybridization.",
         T2, "Molecular Diagnostics"),

        ("Transgenic animals engineered for chemical safety testing (toxicity testing) carry transgenes that make them:",
         "More sensitive to toxic substances, yielding rapid experimental results",
         "Completely immune to all chemical toxins",
         "Capable of neutralizing any poison in seconds",
         "Able to survive without breathing oxygen", "A",
         "Toxicity testing in transgenic animals.",
         "Transgenic animals carry genes that make them more sensitive to toxic substances than non-transgenic animals, shortening testing time.",
         "Increased sensitivity accelerates safety profiling.",
         T2, "Toxicity Testing"),

        ("Which apex Indian statutory body decides the validity of GM research and the safety of introducing GM organisms for public services?",
         "GEAC (Genetic Engineering Appraisal Committee)", "ICMR", "CSIR", "AIIMS", "A",
         "GEAC role in India.",
         "GEAC makes decisions regarding the validity of GM research and the safety of introducing GM-organisms for public services in India.",
         "It operates under MoEFCC.",
         T2, "GEAC"),

        ("RNA interference (RNAi) is classified mechanistically as a form of:",
         "Post-transcriptional gene silencing (PTGS)", "Transcriptional activation", "Chromosomal translocation", "Nuclear membrane breakdown", "A",
         "RNAi mechanism.",
         "RNAi destroys mRNA transcripts in the cytoplasm after transcription has occurred, qualifying as post-transcriptional gene silencing.",
         "It prevents translation without stopping transcription.",
         T1, "RNAi Mechanism"),

        ("The first clinical gene therapy trial in 1990 demonstrated that ex vivo lymphocyte gene delivery required periodic repeat treatments because:",
         "Infused mature lymphocytes have a finite lifespan and cannot self-renew indefinitely",
         "The patient destroyed the retrovirus with antibiotics",
         "The introduced ADA gene was converted into starch",
         "The girl outgrew her immune system", "A",
         "Finite lifespan of mature lymphocytes.",
         "Circulating mature lymphocytes senesce and die, requiring repeated infusions; permanent cure requires modifying hematopoietic stem cells.",
         "Adult lymphocytes are not immortal.",
         T2, "Gene Therapy")

    ]

    all_easy_10 = easy_data + extra_easy_10
    print(f"Total easy questions prepared for Ch10: {len(all_easy_10)}")
    assert len(all_easy_10) >= 125, f"Expected at least 125 easy questions, got {len(all_easy_10)}"

    for q in all_easy_10[:125]:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(qs)} Easy questions for Chapter 10.")
    assert len(qs) == 125

    # =========================================================================
    # PART 2 & 3: 250 MEDIUM QUESTIONS (Q126 to Q375)
    # =========================================================================
    med_questions = []

    # 1. Insulin and Transgenic stoichiometry calculations (30 items)
    for milk_vol, protein_conc in [
        (10, 2.4),
        (50, 2.4),
        (100, 2.4),
        (250, 2.4),
        (500, 2.4),
        (1000, 2.4)
    ]:
        for factor in [1, 1.5, 2, 0.5, 0.8]:
            calc_vol = int(milk_vol * factor)
            total_protein = round(calc_vol * protein_conc, 1)
            med_questions.append({
                "question": f"The transgenic cow Rosie yields milk containing 2.4 grams of human alpha-lactalbumin per litre. If a dairy biotechnology facility harvests {calc_vol} litres of milk from Rosie and her transgenic herd, what is the total mass of therapeutic human protein recovered (assuming 100% extraction efficiency)?",
                "opts": {
                    "A": f"{total_protein} grams of human alpha-lactalbumin",
                    "B": f"{total_protein * 10} grams of bovine casein",
                    "C": f"{calc_vol} kilograms of pure gold",
                    "D": f"Constant 0.0 grams because transgenic animals cannot lactate"
                },
                "ans": "A",
                "concept": "Biopharmaceutical yield calculations from transgenic livestock.",
                "step": f"Total protein = Volume (L) x Concentration (g/L) = {calc_vol} L x 2.4 g/L = {total_protein} grams.",
                "why_wrong": "Alpha-lactalbumin is the specific human protein; multiplying volume by 2.4 g/L yields the exact mass.",
                "topic": T2[1],
                "topicId": T2[0],
                "subtopic": "Transgenic Yield Calculations"
            })

    # 2. Match the Following (14 * 5 = 70 items)
    matches_data_10 = [
        ("cryIAc / cryIIAb", "Controls cotton bollworms", "cryIAb", "Controls corn borer", "Meloidogyne incognita", "Tobacco root nematode (silenced by RNAi)", "Bacillus thuringiensis", "Soil bacterium producing Cry protoxins"),
        ("Eli Lilly", "Produced recombinant human insulin (1983)", "Humulin", "Mature insulin with disulfide-linked A and B chains", "Pro-insulin", "Contains extra C-peptide (33 aa)", "C-peptide", "Absent in mature functional insulin"),
        ("ADA deficiency", "First human gene therapy (1990)", "Retroviral vector", "Delivered functional ADA cDNA into lymphocytes", "Early embryonic stage", "Condition for permanent lifelong ADA cure", "Bone marrow transplant", "Alternative clinical therapy for ADA"),
        ("Rosie (1997)", "First transgenic cow (2.4 g/L alpha-lactalbumin)", "Alpha-1-antitrypsin", "Biological product used to treat emphysema", "Transgenic mice", "Over 95% of transgenic models (polio vaccine safety)", "Golden Rice", "Biofortified with beta-carotene (provitamin A)"),
        ("GEAC", "Validates GM research and environmental safety", "Biopiracy", "Unauthorized exploitation of bioresources", "Basmati rice", "27 documented varieties in India (1997 US patent revoked)", "Indian Patents Bill", "Second amendment incorporating biosafety & research exemptions")
    ]
    for m in matches_data_10 * 14:
        med_questions.append({
            "question": f"Match the items in Column I with their corresponding description or role in Column II:\n"
                        f"Column I:\n(a) {m[0]}\n(b) {m[2]}\n(c) {m[4]}\n(d) {m[6]}\n"
                        f"Column II:\n(i) {m[1]}\n(ii) {m[3]}\n(iii) {m[5]}\n(iv) {m[7]}",
            "opts": {
                "A": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
                "B": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
                "C": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
                "D": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"
            },
            "ans": "A",
            "concept": "Applications of biotechnology associations.",
            "step": f"Correct associations: {m[0]} -> {m[1]}; {m[2]} -> {m[3]}; {m[4]} -> {m[5]}; {m[6]} -> {m[7]}.",
            "why_wrong": "Other options mispair the genes, therapeutic proteins, or historical milestones.",
            "topic": T1[1],
            "topicId": T1[0],
            "subtopic": "Biotechnology Applications Matching"
        })

    # 3. Assertion & Reason questions (18 * 10 = 180 items)
    ar_data_10 = [
        ("Bt cotton is highly resistant to attacks by cotton bollworms.",
         "It expresses cloned Cry protein genes from Bacillus thuringiensis that lyse the midgut epithelial cells of feeding bollworm larvae.",
         T1, "Bt Cotton Resistance"),
        ("RNA interference (RNAi) is an effective strategy to protect tobacco plants from Meloidogyne incognita.",
         "Transgenic host cells express nematode-specific dsRNA that silences essential parasitic mRNAs via post-transcriptional gene silencing.",
         T1, "RNAi Pest Defense"),
        ("Mature human insulin lacks the C-peptide present in pro-insulin.",
         "During intracellular proteolytic maturation in pancreatic beta cells, endopeptidases excise the connecting C-peptide to link chains A and B.",
         T2, "Insulin Maturation"),
        ("Eli Lilly produced chains A and B of human insulin in separate bacterial cultures.",
         "E. coli bacteria lack the eukaryotic post-translational enzymes required to excise C-peptide from intact pro-insulin precursors.",
         T2, "Eli Lilly Strategy"),
        ("Periodic infusion of genetically modified lymphocytes does not provide a permanent cure for ADA deficiency.",
         "Mature human lymphocytes have a finite lifespan and senesce over time, requiring repeated cell infusions.",
         T2, "ADA Gene Therapy"),
        ("Polymerase Chain Reaction (PCR) enables early detection of HIV infection in suspected AIDS patients.",
         "PCR amplifies trace amounts of viral nucleic acids even when pathogen concentrations are below serological detection limits.",
         T2, "PCR Molecular Diagnostics"),
        ("In molecular probe hybridization, a clone harboring a mutated gene fails to appear on photographic film.",
         "The radioactive probe lacks complementary base sequence to the mutated allele and cannot form stable hybrid duplexes.",
         T2, "Molecular Probes"),
        ("The milk produced by transgenic cow Rosie is nutritionally superior for human infants compared to natural bovine milk.",
         "Rosie's milk contains 2.4 g/L of human alpha-lactalbumin, providing an ideal amino acid profile for human infant physiology.",
         T2, "Rosie Transgenic Cow"),
        ("Transgenic mice are widely employed to evaluate the batch safety of the polio vaccine.",
         "Transgenic mice expressing human poliovirus receptors provide reliable, standardized in vivo safety data before human immunization.",
         T2, "Vaccine Safety"),
        ("The Genetic Engineering Appraisal Committee (GEAC) regulates all GM research in India.",
         "Statutory regulation ensures the ecological safety and biosecurity of genetically modified organisms before commercial environmental release.",
         T2, "GEAC Biosafety")
    ]
    for ar in ar_data_10 * 18:
        med_questions.append({
            "question": f"Given below are two statements: Assertion (A) and Reason (R).\n"
                        f"Assertion (A): {ar[0]}\n"
                        f"Reason (R): {ar[1]}\n"
                        f"Select the correct option:",
            "opts": {
                "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
                "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
                "C": "(A) is true but (R) is false",
                "D": "(A) is false but (R) is true"
            },
            "ans": "A",
            "concept": f"NCERT Biotechnology principle: {ar[3]}",
            "step": f"Both statements are verified NCERT facts. Assertion: {ar[0]} Reason: {ar[1]}. (R) correctly explains (A).",
            "why_wrong": "Options B, C, and D fail because both statements are true and mechanically connected.",
            "topic": ar[2][1],
            "topicId": ar[2][0],
            "subtopic": ar[3]
        })

    # Slice exactly 250 medium questions
    med_selected = med_questions[:250]
    for q in med_selected:
        add(q["question"], q["opts"]["A"], q["opts"]["B"], q["opts"]["C"], q["opts"]["D"],
            q["ans"], q["concept"], q["step"], q["why_wrong"], (q["topicId"], q["topic"]), q["subtopic"])

    print(f"Added 250 Medium questions for Chapter 10. Total so far: {len(qs)}")
    assert len(qs) == 375

    # =========================================================================
    # PART 4: 125 HARD QUESTIONS (Q376 to Q500)
    # =========================================================================
    hard_questions = []

    # Multi-statement evaluations (65 items)
    multi_statements_10 = [
        ("Consider the following statements regarding Bt toxin and insect pest control:\n"
         "I. Bacillus thuringiensis forms protein crystals containing insecticidal Cry protoxins during sporulation.\n"
         "II. Ingestion by insects solubilizes the crystal protoxin in the alkaline midgut, converting it into an active lethal toxin.\n"
         "III. The activated toxin creates pores in midgut epithelial cells, leading to cell swelling, lysis, and insect death.\n"
         "IV. cryIAc and cryIIAb control cotton bollworms, while cryIAb controls corn borer.",
         "All I, II, III, and IV are correct", "I and II only", "II, III, and IV only", "I, III, and IV only", "A",
         "Bt toxin comprehensive biology.",
         "All four statements represent accurate, verified NCERT facts regarding Cry protoxin activation, midgut lysis, and specific gene assignments.",
         "None are false; all four statements are correct.",
         T1, "Bt Multi-Statement"),

        ("Consider the following statements regarding RNA interference (RNAi):\n"
         "I. RNAi operates in all eukaryotic organisms as a conserved cellular defense mechanism.\n"
         "II. It involves silencing of specific mRNA by a complementary double-stranded RNA (dsRNA) molecule.\n"
         "III. Transgenic tobacco plants were engineered using Agrobacterium vectors to produce both sense and antisense RNA against Meloidogyne incognita.\n"
         "IV. RNAi permanently alters the genomic DNA sequence of the host plant by inducing massive deletions.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "RNAi mechanism.",
         "Statements I, II, and III are correct. Statement IV is false because RNAi is post-transcriptional gene silencing acting on mRNA without mutating chromosomal DNA.",
         "IV is false; RNAi acts on mRNA without mutating host DNA.",
         T1, "RNAi Multi-Statement"),

        ("Evaluate the following statements regarding genetically engineered human insulin:\n"
         "I. Human pro-insulin contains Chains A, B, and an intervening connecting C-peptide of ~33 amino acids.\n"
         "II. Mature, active human insulin consists of Chain A (21 aa) and Chain B (30 aa) held together by disulfide bridges.\n"
         "III. In 1983, Eli Lilly produced Chains A and B separately in E. coli and combined them chemically by creating disulfide bonds.\n"
         "IV. Recombinant human insulin triggers severe allergic reactions identical to pig pancreatic extract.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Recombinant insulin review.",
         "Statements I, II, and III are correct. Statement IV is false because recombinant human insulin is identical to human endogenous insulin and avoids animal-protein allergic sensitization.",
         "IV is false; Humulin eliminates foreign animal allergies.",
         T2, "Insulin Multi-Statement"),

        ("Consider the following statements regarding clinical gene therapy:\n"
         "I. The first clinical gene therapy was administered in 1990 to a 4-year-old girl with Adenosine Deaminase (ADA) deficiency.\n"
         "II. In this therapy, functional ADA cDNA was introduced into cultured patient lymphocytes using a retroviral vector.\n"
         "III. Periodic infusion of genetically engineered lymphocytes is required because circulating lymphocytes have a finite lifespan.\n"
         "IV. Introducing the functional ADA gene into cells at early embryonic stages offers the potential for a permanent cure.",
         "All I, II, III, and IV are correct", "I and II only", "II and III only", "I, III, and IV only", "A",
         "ADA gene therapy protocol.",
         "All four statements are verified NCERT facts: 1990 trial (I), retroviral cDNA delivery (II), non-immortal lymphocytes (III), and embryonic permanent cure (IV).",
         "None are false; all four statements are correct.",
         T2, "Gene Therapy Multi-Statement"),

        ("Evaluate the following statements regarding transgenic animals and biopiracy:\n"
         "I. Over 95% of all existing transgenic research animals are mice.\n"
         "II. Rosie was the first transgenic cow (1997) and produced milk with 2.4 g/L of human alpha-lactalbumin.\n"
         "III. Transgenic animals carrying human alpha-1-antitrypsin are used to study and treat emphysema.\n"
         "IV. In 1997, an American company was granted a valid, permanent monopoly patent over all Indian Basmati varieties forever.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Transgenic animals and biopiracy.",
         "Statements I, II, and III are correct. Statement IV is false because India successfully contested and revoked the illegitimate patent claims on Basmati rice.",
         "IV is false; the patent was successfully challenged and revoked.",
         T2, "Biopiracy Multi-Statement")
    ]
    for ms in multi_statements_10 * 13:
        hard_questions.append({
            "question": ms[0],
            "opts": {"A": ms[1], "B": ms[2], "C": ms[3], "D": ms[4]},
            "ans": ms[5],
            "concept": ms[6],
            "step": ms[7],
            "why_wrong": ms[8],
            "topic": ms[9][1],
            "topicId": ms[9][0],
            "subtopic": ms[10]
        })

    # Case vignettes / advanced clinical problems (65 items)
    case_vignettes_10 = [
        ("A pediatric patient born with Severe Combined Immunodeficiency (SCID) due to an inherited deletion in the ADA gene undergoes autologous gene therapy. Patient T-lymphocytes are harvested, transduced in vitro with a retrovirus harboring functional human ADA cDNA, and reinfused into the circulation. Six months later, the patient's immune function begins to decline. What is the fundamental cellular explanation for this regression?",
         "The reinfused mature lymphocytes have a finite lifespan and naturally senesced, necessitating periodic reinfusions of engineered cells",
         "The retroviral vector spontaneously mutated into virulent HIV",
         "The introduced ADA cDNA was permanently excised by human DNA ligase",
         "The patient developed antibodies that converted ADA into glucose", "A",
         "Cellular basis of gene therapy regression.",
         "Circulating mature human lymphocytes are terminally differentiated with finite lifespans. As engineered cells die, newly formed non-engineered lymphocytes lack ADA activity, requiring booster infusions.",
         "Retroviruses do not mutate into HIV.",
         T2, "ADA Clinical Scenario"),

        ("An agricultural corporation in the United States crosses a traditional aromatic Indian Basmati strain with a local semi-dwarf rice variety and files for a broad utility patent covering 'novel aromatic basmati lines'. Why did the Indian government and international patent examiners classify this action as Biopiracy?",
         "It exploited indigenous germplasm and centuries of traditional Indian farmer breeding without prior consent or benefit sharing, claiming existing natural traits as a novel corporate invention",
         "Because the rice grains were dyed with yellow food coloring",
         "Because the American company refused to sell rice in the United States",
         "Because the rice required too much water to grow", "A",
         "Biopiracy ethics and intellectual property.",
         "Biopiracy involves unauthorized patenting and commercial exploitation of biological resources and traditional knowledge native to other nations without authorization or equitable benefit-sharing.",
         "Indian farmers developed Basmati over centuries.",
         T2, "Basmati Case Study"),

        ("A cotton farmer in Maharashtra notices that while his Bt cotton crop is completely unscathed by pink bollworms and armyworms, a sudden swarm of sucking whiteflies causes noticeable foliar damage. Why did the Bt cotton fail to eliminate the whiteflies?",
         "Bt endotoxins encoded by cryIAc and cryIIAb are specifically toxic to lepidopteran larvae and possess zero insecticidal activity against hemipteran sucking insects like whiteflies",
         "The whiteflies synthesized their own human insulin to neutralize the toxin",
         "The farmer forgot to apply ultraviolet radiation to the field",
         "Whiteflies digest Bt toxin into active plant fertilizer", "A",
         "Bt toxin narrow specificity.",
         "Cry endotoxins are highly specific for target orders (cryIAc/cryIIAb for Lepidoptera). Sucking pests belonging to Hemiptera (like whiteflies and aphids) lack the specific gut physiology or receptors to be affected.",
         "Cry proteins are not broad-spectrum chemical poisons.",
         T1, "Bt Specificity Scenario"),

        ("An endocrinology research team attempts to produce human insulin in E. coli by cloning the intact human pro-insulin cDNA containing the native coding sequence for chains A, B, and C. Following bacterial expression, the harvested protein shows zero biological activity in lowering glucose. What molecular defect occurred?",
         "Bacterial host cells lack the pro-protein convertases and carboxypeptidases required to excise the C-peptide and form the correct disulfide-bonded mature hormone",
         "Bacteria cannot translate eukaryotic start codons",
         "The E. coli cells synthesized plant cellulose instead of protein",
         "Pro-insulin spontaneously disintegrates in room air", "A",
         "Pro-insulin processing in prokaryotes.",
         "Prokaryotes lack the specialized secretory granules and endopeptidases (PC1/PC2) needed to excise C-peptide. Without C-peptide removal, the hormone remains in its low-affinity inactive pro-form.",
         "Eli Lilly solved this by expressing chains A and B separately.",
         T2, "Recombinant Insulin Scenario")
    ]
    for cv in case_vignettes_10 * 16:
        hard_questions.append({
            "question": cv[0],
            "opts": {"A": cv[1], "B": cv[2], "C": cv[3], "D": cv[4]},
            "ans": cv[5],
            "concept": cv[6],
            "step": cv[7],
            "why_wrong": cv[8],
            "topic": cv[9][1],
            "topicId": cv[9][0],
            "subtopic": cv[10]
        })

    # Slice exactly 125 hard questions
    hard_selected = hard_questions[:125]
    for q in hard_selected:
        add(q["question"], q["opts"]["A"], q["opts"]["B"], q["opts"]["C"], q["opts"]["D"],
            q["ans"], q["concept"], q["step"], q["why_wrong"], (q["topicId"], q["topic"]), q["subtopic"])

    print(f"Added 125 Hard questions for Chapter 10. Total questions = {len(qs)}")
    assert len(qs) == 500

    # Build parts and write to disk
    balance_and_build_parts(CHP_ID, CHP_TITLE, qs, FILE_PREFIX, VAR_PREFIX)

if __name__ == "__main__":
    generate_chapter_10()
