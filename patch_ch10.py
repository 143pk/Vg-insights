with open('scripts/bio12_engine/ch10_biotech_applications.py') as f:
    text = f.read()

# Let's inspect where extra_easy_10 ends
pos = text.find('all_easy_10 = easy_data + extra_easy_10')
print('Found pos:', pos)

extra_25 = '''
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
'''

target = '        T1, "Agricultural Paradigms")\n    ]'
replacement = '        T1, "Agricultural Paradigms"),' + extra_25 + '\n    ]'

if target in text:
    new_text = text.replace(target, replacement, 1)
    with open('scripts/bio12_engine/ch10_biotech_applications.py', 'w') as f:
        f.write(new_text)
    print('Successfully patched ch10!')
else:
    print('Target not found in ch10 text!')
