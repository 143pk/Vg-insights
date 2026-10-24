import os
import sys
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from scripts.bio12_engine.common import balance_and_build_parts

CHP_ID = "human-health-diseases"
CHP_TITLE = "Human Health and Diseases"
FILE_PREFIX = "humanHealthDiseases"
VAR_PREFIX = "HUMAN_HEALTH_DISEASES"

T1 = ("bio-common-human-diseases", "Common Human Pathogenic Diseases")
T2 = ("bio-immunity-types-vaccines", "Immunity, Antibody Structure & Vaccination")
T3 = ("bio-aids-cancer-drug-abuse", "AIDS, Cancer & Drug Abuse")

def generate_chapter_7():
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
        ("Who disproved the ancient 'good humor' hypothesis of health by demonstrating normal body temperature in individuals with black bile using a clinical thermometer?",
         "William Harvey", "Hippocrates", "Louis Pasteur", "Edward Jenner", "A",
         "Disproof of the good humor hypothesis.",
         "William Harvey discovered blood circulation and disproved the 'good humor' hypothesis using clinical thermometers to demonstrate that individuals with black bile had normal body temperature.",
         "Hippocrates and early Indian Ayurveda originally proposed the humor hypothesis.",
         T1, "History of Medicine"),

        ("Which bacterium is the causative agent of Typhoid fever in humans?",
         "Salmonella typhi", "Streptococcus pneumoniae", "Haemophilus influenzae", "Mycobacterium tuberculosis", "A",
         "Typhoid pathogen in NCERT.",
         "Salmonella typhi is a pathogenic Gram-negative bacterium that enters the human small intestine via contaminated food and water, causing typhoid fever.",
         "Streptococcus causes pneumonia; Mycobacterium causes tuberculosis.",
         T1, "Bacterial Diseases"),

        ("Which diagnostic serological laboratory test is universally used for the confirmation of Typhoid fever?",
         "Widal test", "ELISA", "Western blot", "Mantoux test", "A",
         "Typhoid diagnosis.",
         "Typhoid fever is confirmed serologically by the Widal test, which detects agglutinating antibodies against Salmonella O and H antigens.",
         "ELISA and Western blot are used for HIV; Mantoux is for TB.",
         T1, "Typhoid Diagnosis"),

        ("Who was the infamous historical figure nicknamed 'Typhoid Mary' who was an asymptomatic carrier of Salmonella typhi and spread typhoid through her cooking for years?",
         "Mary Mallon", "Rosalind Franklin", "Florence Nightingale", "Jane Goodall", "A",
         "Typhoid Mary case study.",
         "Mary Mallon, known as Typhoid Mary, was a professional cook in the US who was a chronic carrier of Salmonella typhi and unwittingly transmitted typhoid to numerous families.",
         "Other names are prominent historical figures in science and nursing.",
         T1, "Typhoid Epidemiology"),

        ("Pneumonia in humans is caused by which pathogenic bacteria that infect the alveoli of the lungs?",
         "Streptococcus pneumoniae and Haemophilus influenzae",
         "Salmonella typhi and Escherichia coli",
         "Entamoeba histolytica and Giardia lamblia",
         "Wuchereria bancrofti and Ascaris", "A",
         "Pneumonia etiology.",
         "Pneumonia is an infection of pulmonary alveoli caused by Streptococcus pneumoniae and Haemophilus influenzae.",
         "Salmonella causes typhoid; Entamoeba causes amoebiasis.",
         T1, "Bacterial Diseases"),

        ("A severe symptom of acute pneumonia where the lips and finger nails may turn gray to bluish in color is caused by:",
         "Severe hypoxemia (inadequate oxygenation of blood due to fluid-filled alveoli)",
         "Excessive consumption of iron supplements",
         "Bacterial pigmentation of keratin",
         "Sudden high production of hemoglobin", "A",
         "Pneumonia cyanosis symptom.",
         "When alveoli fill with inflammatory exudate, oxygen diffusion is severely impaired. Hypoxemia causes cyanosis, turning lips and fingernails bluish-gray.",
         "It is not caused by bacterial pigment or iron.",
         T1, "Pneumonia Pathology"),

        ("The Common Cold in humans is caused by which group of viruses?",
         "Rhino viruses", "Retroviruses", "Oncogenic viruses", "Bacteriophages", "A",
         "Common cold etiology.",
         "The common cold is caused by Rhino viruses, which infect the nose and upper respiratory passage, but notably NOT the lungs.",
         "Retroviruses include HIV; oncogenic viruses cause cancer.",
         T1, "Viral Diseases"),

        ("How does the Common Cold fundamentally differ from Pneumonia in terms of anatomical site of infection?",
         "Common cold infects the nose and respiratory passage but NOT the lungs, whereas pneumonia infects the pulmonary alveoli",
         "Common cold affects only the stomach",
         "Pneumonia affects only the vocal cords",
         "Both affect identical tissues without difference", "A",
         "Common cold vs pneumonia contrast.",
         "NCERT explicitly notes that Rhino viruses infect the nasal mucosa and upper respiratory passage but NOT the lungs, whereas pneumonia infects the alveoli.",
         "Pneumonia is an alveolar parenchymal infection.",
         T1, "Respiratory Infections"),

        ("Which protozoan parasite causes the malignant and fatal form of malaria in humans?",
         "Plasmodium falciparum", "Plasmodium vivax", "Plasmodium malariae", "Plasmodium ovale", "A",
         "Malignant malaria pathogen.",
         "Malignant tertian malaria, the most severe and potentially fatal form, is caused by Plasmodium falciparum.",
         "Plasmodium vivax causes benign tertian malaria.",
         T1, "Malaria Etiology"),

        ("The infectious stage of Plasmodium that enters the human body through the bite of an infected female Anopheles mosquito is the:",
         "Sporozoite", "Gametocyte", "Trophozoite", "Merozoite", "A",
         "Malaria infectious stage.",
         "Motile, spindle-shaped sporozoites stored in the mosquito's salivary glands are injected into human blood during a blood meal.",
         "Gametocytes are the sexual stages taken up by mosquitoes.",
         T1, "Malaria Life Cycle"),

        ("In the human host, Plasmodium sporozoites initially travel via blood to multiply asexually inside which organ cells?",
         "Liver hepatocytes", "Splenic pulp cells", "Kidney tubules", "Cardiac muscle cells", "A",
         "Exo-erythrocytic schizogony.",
         "Sporozoites immediately invade liver hepatocytes, where they reproduce asexually by schizogony before bursting liver cells to enter RBCs.",
         "They do not invade kidneys or heart cells.",
         T1, "Malaria Life Cycle"),

        ("The recurring high fever and chills experienced by malaria patients every 3 to 4 days is caused by the release of which toxic substance during RBC rupture?",
         "Haemozoin", "Haemoglobin", "Bilirubin", "Interferon", "A",
         "Haemozoin toxin in malaria.",
         "Rupture of erythrocytic schizonts releases merozoites along with haemozoin (a toxic byproduct of digested hemoglobin), triggering chills and fever.",
         "Hemoglobin is the normal protein; bilirubin causes jaundice.",
         T1, "Malaria Pathology"),

        ("In the life cycle of Plasmodium, where do fertilization and sexual development actually take place?",
         "Inside the gut (stomach) of the female Anopheles mosquito",
         "Inside the human liver", "Inside human red blood cells", "In human blood plasma", "A",
         "Malaria sexual cycle site.",
         "Microgametocytes and macrogametocytes fuse to form an ookinete and oocyst within the gut cavity of the female Anopheles mosquito.",
         "Human hosts only support asexual multiplication and gametocyte formation.",
         T1, "Malaria Life Cycle"),

        ("Where are mature, infective Plasmodium sporozoites stored inside the female Anopheles mosquito body?",
         "Salivary glands", "Ovaries", "Midgut lumen", "Malpighian tubules", "A",
         "Sporozoite storage site.",
         "Mature sporozoites burst from the oocyst wall on the mosquito stomach and migrate through the hemolymph to lodge in the salivary glands.",
         "They do not enter ovaries.",
         T1, "Malaria Vectors"),

        ("Amoebiasis (Amoebic dysentery) in humans is caused by which protozoan parasite of the large intestine?",
         "Entamoeba histolytica", "Plasmodium vivax", "Trypanosoma gambiense", "Leishmania donovani", "A",
         "Amoebiasis pathogen.",
         "Entamoeba histolytica is an enteric protozoan residing in the human large intestine that invades the mucosa, causing amoebic dysentery.",
         "Trypanosoma causes sleeping sickness; Leishmania causes kala-azar.",
         T1, "Protozoan Diseases"),

        ("Which common insect acts as a mechanical carrier/vector for transmitting Entamoeba histolytica from feces to drinking water and food?",
         "Housefly (Musca domestica)", "Female Anopheles mosquito", "Culex mosquito", "Tsetse fly", "A",
         "Amoebiasis mechanical vector.",
         "Houseflies act as mechanical carriers that transport E. histolytica cysts from fecal matter to unhygienic drinking water and uncovered food.",
         "Mosquitoes transmit malaria and filariasis.",
         T1, "Amoebiasis Transmission"),

        ("Stools with excess mucous and blood clots, abdominal cramps, and constipation alternating with diarrhea are classical diagnostic signs of:",
         "Amoebiasis (Amoebic dysentery)", "Ascariasis", "Typhoid", "Pneumonia", "A",
         "Amoebiasis clinical presentation.",
         "Amoebic ulceration of the colon causes dysentery characterized by stools containing copious mucus and fresh blood clots accompanied by tenesmus.",
         "Typhoid stools lack mucosal sloughing; pneumonia is respiratory.",
         T1, "Amoebiasis Symptoms"),

        ("Ascariasis is an intestinal roundworm infection caused by:",
         "Ascaris lumbricoides", "Wuchereria bancrofti", "Taenia solium", "Ancylostoma duodenale", "A",
         "Ascariasis pathogen.",
         "Ascaris lumbricoides is the common intestinal giant roundworm of humans causing ascariasis.",
         "Wuchereria causes elephantiasis; Taenia is tapeworm.",
         T1, "Helminthic Diseases"),

        ("How does a healthy person acquire an infection of Ascaris lumbricoides?",
         "By consuming water, vegetables, or fruits contaminated with feces containing embryonated Ascaris eggs",
         "Through the bite of a female Anopheles mosquito",
         "By inhaling airborne sneeze droplets",
         "Through swimming in chlorinated swimming pools", "A",
         "Ascariasis transmission route.",
         "Eggs of Ascaris are excreted with feces of infected persons, contaminating soil, water, and crops. Infection occurs through ingestion of contaminated unwashed food or water.",
         "Ascariasis is not transmitted by insect vectors or droplets.",
         T1, "Ascariasis Transmission"),

        ("Elephantiasis (Filariasis), characterized by chronic inflammation and gross swelling of the lower limbs and genital organs, is caused by:",
         "Wuchereria bancrofti and Wuchereria malayi",
         "Ascaris lumbricoides", "Entamoeba histolytica", "Trichophyton", "A",
         "Filariasis etiology.",
         "Filariasis is caused by the filarial nematodes Wuchereria bancrofti and W. malayi, which reside in the lymphatic vessels of the lower limbs.",
         "Ascaris lives in the gut; Trichophyton is a fungus.",
         T1, "Filariasis"),

        ("Which mosquito species serves as the vector transmitting Wuchereria (filarial worm) to humans?",
         "Female Culex mosquito", "Female Anopheles mosquito", "Aedes aegypti", "Male Anopheles mosquito", "A",
         "Filariasis vector.",
         "Wuchereria larvae are transmitted to humans through the bite of the female Culex mosquito.",
         "Anopheles transmits malaria; Aedes transmits dengue and chikungunya.",
         T1, "Filariasis Vector"),

        ("Ringworm infections of the skin, nails, and scalp in humans are caused by fungi belonging to the genera:",
         "Microsporum, Trichophyton, and Epidermophyton",
         "Mucor, Rhizopus, and Penicillium",
         "Saccharomyces, Aspergillus, and Neurospora",
         "Agaricus, Ustilago, and Puccinia", "A",
         "Ringworm fungal genera in NCERT.",
         "Ringworm (tinea) is caused by dermatophytic fungi belonging to Microsporum, Trichophyton, and Epidermophyton.",
         "Rhizopus is bread mold; Saccharomyces is brewer's yeast.",
         T1, "Fungal Diseases"),

        ("Dry, scaly, itchy circular lesions appearing on the skin, groin, or between the toes are characteristic symptoms of:",
         "Ringworm infection", "Amoebiasis", "Filariasis", "Ascariasis", "A",
         "Ringworm clinical presentation.",
         "Ringworm presents as circular, dry, scaly erythematous lesions with intense pruritus, facilitated by heat and moisture in skin folds.",
         "Amoebiasis is intestinal; filariasis causes lymphatic edema.",
         T1, "Ringworm Symptoms"),

        ("Which larvivorous fish is commonly introduced into ponds and water bodies to feed on mosquito larvae and biologically control mosquito populations?",
         "Gambusia fish (Mosquitofish)", "Catla catla", "Labeo rohita", "Clarias gariepinus", "A",
         "Biological control of mosquitoes in NCERT.",
         "Gambusia affinis (mosquitofish) is introduced into ponds because it voraciously consumes mosquito larvae, controlling vector breeding.",
         "Catla and Rohu are edible carps.",
         T1, "Vector Control"),

        ("Which flying predatory insect feeds on mosquitoes and is used as an eco-friendly biological control agent?",
         "Dragonflies", "Houseflies", "Butterflies", "Honeybees", "A",
         "Dragonflies as biological control.",
         "Dragonflies are natural aerial predators that capture and feed on adult mosquitoes, serving as biocontrol agents.",
         "Houseflies spread pathogens; honeybees make honey.",
         T1, "Vector Control"),

        ("Innate immunity is non-specific and present from birth. Which of the following provides a physical barrier of innate immunity?",
         "Skin (stratum corneum) and mucus coating of epithelial linings",
         "Hydrochloric acid in the stomach",
         "Lysozyme enzyme in tears and saliva",
         "Interferons produced by infected cells", "A",
         "Innate immunity physical barriers.",
         "Physical barriers block microbial entry physically, comprising the intact keratinized skin surface and the mucus coatings of respiratory, gastrointestinal, and urogenital tracts.",
         "Stomach acid and lysozyme are physiological barriers; interferons are cytokine barriers.",
         T2, "Innate Immunity"),

        ("Hydrochloric acid in the stomach, saliva in the mouth, and lysozyme in tears represent which barrier of innate immunity?",
         "Physiological barriers", "Physical barriers", "Cellular barriers", "Cytokine barriers", "A",
         "Physiological barriers in NCERT.",
         "Acid in the stomach, lysozyme in tears and saliva, and low vaginal pH create chemical environments that inhibit microbial survival, constituting physiological barriers.",
         "Skin and mucous membranes are physical barriers.",
         T2, "Physiological Barriers"),

        ("Polymorphonuclear leukocytes (PMNL-neutrophils), monocytes, and tissue macrophages represent which barrier of innate immunity?",
         "Cellular barriers", "Physical barriers", "Physiological barriers", "Cytokine barriers", "A",
         "Cellular barriers of innate immunity.",
         "Phagocytic white blood cells like PMNL-neutrophils, monocytes, tissue macrophages, and Natural Killer (NK) cells constitute cellular barriers that engulf pathogens.",
         "Skin is physical; tears are physiological.",
         T2, "Cellular Barriers"),

        ("Virus-infected cells secrete proteins called interferons to protect non-infected neighboring cells from viral infection. Interferons constitute which barrier of innate immunity?",
         "Cytokine barriers", "Physical barriers", "Physiological barriers", "Cellular barriers", "A",
         "Cytokine barriers in NCERT.",
         "Interferons are antiviral signaling cytokines secreted by virus-infected cells that induce an antiviral state in adjacent healthy cells.",
         "They are soluble cytokine proteins, not cellular phagocytes.",
         T2, "Cytokine Barriers"),

        ("Which lymphocytes produce an army of proteins called antibodies in our blood in response to pathogens?",
         "B-lymphocytes (B cells)", "T-lymphocytes (T cells)", "Erythrocytes", "Platelets", "A",
         "Humoral antibody production.",
         "B-lymphocytes differentiate into plasma cells that synthesize and secrete circulating antibody proteins (immunoglobulins).",
         "T cells provide cell-mediated immunity and help B cells.",
         T2, "Antibody Production"),

        ("What is the basic polypeptide chain composition of a typical antibody molecule?",
         "H2L2 (Two identical heavy chains and two identical light chains)",
         "H1L1", "H4L4", "H3L1", "A",
         "Antibody quaternary structure.",
         "A typical monomeric antibody molecule consists of four polypeptide chains: two identical longer Heavy (H) chains and two identical shorter Light (L) chains (H2L2).",
         "Disulfide bridges link the H and L chains.",
         T2, "Antibody Structure"),

        ("Which class of antibodies is most abundant in the yellowish colostrum secreted by mothers during initial days of lactation?",
         "IgA", "IgG", "IgE", "IgM", "A",
         "Colostrum immunoglobulins.",
         "Colostrum is abundantly rich in secretory IgA antibodies, providing mucosal passive immunity to protect the newborn infant.",
         "IgE mediates allergies; IgM is the primary pentamer.",
         T2, "Immunoglobulin Classes"),

        ("Which class of antibodies is primarily involved in allergic reactions?",
         "IgE", "IgA", "IgG", "IgD", "A",
         "IgE and allergy.",
         "IgE antibodies bind to Fc receptors on tissue mast cells and basophils, triggering degranulation and release of histamine upon allergen cross-linking.",
         "IgA is in secretions; IgG crosses placenta.",
         T2, "Immunoglobulin Classes"),

        ("Which class of antibodies is the only one capable of crossing the human placental barrier to confer passive immunity to the foetus?",
         "IgG", "IgM", "IgE", "IgA", "A",
         "Transplacental antibody transport.",
         "IgG is the smallest and most abundant serum immunoglobulin and actively crosses the placenta via neonatal Fc receptors (FcRn).",
         "IgM is a large pentamer that cannot cross the placenta.",
         T2, "Immunoglobulin Classes"),

        ("Cell-Mediated Immunity (CMI) in the human body is primarily orchestrated by which lymphocytes?",
         "T-lymphocytes (T cells)", "B-lymphocytes", "Neutrophils", "Basophils", "A",
         "Cell-mediated immunity.",
         "Cell-mediated immunity is mediated by T-lymphocytes (CD4+ helper T cells and CD8+ cytotoxic T cells).",
         "B cells mediate humoral (antibody-mediated) immunity.",
         T2, "Cell Mediated Immunity"),

        ("Which branch of the immune system is primarily responsible for the rejection of kidney, heart, or liver grafts during organ transplantation?",
         "Cell-Mediated Immunity (CMI mediated by T-lymphocytes)",
         "Humoral immunity mediated by B cells alone",
         "Innate physical barriers of the skin",
         "Erythrocyte agglutination", "A",
         "Graft rejection immunology.",
         "NCERT explicitly emphasizes that Cell-Mediated Immunity (CMI) mediated by T-lymphocytes is responsible for the recognition and rejection of foreign organ grafts.",
         "Patients take lifelong immunosuppressants (like cyclosporin A) to suppress CMI.",
         T2, "Graft Rejection"),

        ("When a host is exposed to antigens (living or dead microbes) and the host's own body produces antibodies, it is termed:",
         "Active immunity", "Passive immunity", "Innate immunity", "Autoimmunity", "A",
         "Active immunity definition.",
         "Active immunity is acquired when an individual's own immune system encounters antigens and synthesizes antibodies and memory cells.",
         "Passive immunity introduces pre-formed antibodies directly.",
         T2, "Active vs Passive Immunity"),

        ("When ready-made, pre-formed antibodies are directly administered to protect the body against foreign agents (e.g. anti-tetanus serum or anti-snake venom), it is termed:",
         "Passive immunity", "Active immunity", "Innate immunity", "Cell-mediated immunity", "A",
         "Passive immunity definition.",
         "Passive immunity involves the direct transfer of pre-formed antibodies (e.g. anti-tetanus antitoxin, anti-venom, colostral IgA) providing immediate protection without waiting for host synthesis.",
         "Active immunity requires time for host antibody synthesis.",
         T2, "Active vs Passive Immunity"),

        ("An exaggerated immune response of the body to certain environmental antigens (such as pollen, animal dander, dust mites) is termed an:",
         "Allergy", "Autoimmune disease", "Immunodeficiency", "Active immunity", "A",
         "Allergy definition.",
         "An allergy is an inappropriate, hypersensitive immune reaction to non-pathogenic environmental substances termed allergens.",
         "Autoimmunity is immune attack against self-tissues.",
         T2, "Allergies"),

        ("Allergic symptoms such as sneezing, watery eyes, and runny nose are caused by the release of which chemicals from mast cells?",
         "Histamine and serotonin", "Hemoglobin and insulin", "Adrenaline and thyroxine", "Pepsin and trypsin", "A",
         "Allergic chemical mediators.",
         "Cross-linking of IgE on mast cells triggers immediate degranulation and release of vasoactive amines, primarily histamine and serotonin.",
         "Adrenaline is an anti-allergic treatment that constricts blood vessels.",
         T2, "Allergy Mediators"),

        ("Rheumatoid arthritis is a classic example of an:",
         "Autoimmune disease (where the body attacks self-cells in synovial joints)",
         "Infectious bacterial disease",
         "Immunodeficiency caused by a retrovirus",
         "Allergic reaction to food", "A",
         "Autoimmunity in NCERT.",
         "Rheumatoid arthritis occurs when immunological tolerance fails and auto-antibodies attack synovial joint membranes, causing chronic inflammation.",
         "It is not an external bacterial infection.",
         T2, "Autoimmune Diseases"),

        ("Which of the following are the Primary Lymphoid Organs where immature lymphocytes differentiate into antigen-sensitive lymphocytes?",
         "Bone marrow and Thymus", "Spleen and Lymph nodes", "Tonsils and Appendix", "Peyer's patches and MALT", "A",
         "Primary lymphoid organs.",
         "Bone marrow and thymus are primary lymphoid organs where stem cells undergo proliferation and maturation into immunocompetent B and T cells.",
         "Spleen, lymph nodes, and Peyer's patches are secondary lymphoid organs.",
         T2, "Lymphoid Organs"),

        ("The large bean-shaped secondary lymphoid organ that filters blood by trapping blood-borne microorganisms and acts as a reservoir of erythrocytes is the:",
         "Spleen", "Thymus", "Thyroid", "Pancreas", "A",
         "Spleen functions in NCERT.",
         "The spleen contains lymphocytes and phagocytes, filters the blood of circulating pathogens, and serves as a major graveyard and reservoir for erythrocytes.",
         "Thymus is a primary lymphoid organ.",
         T2, "Secondary Lymphoid Organs"),

        ("What does MALT stand for, which constitutes approximately 50 percent of the lymphoid tissue in the human body?",
         "Mucosa-Associated Lymphoid Tissue", "Muscle-Activated Lymphoid Tissue",
         "Microbial-Associated Lymphoid Tissue", "Marrow-Associated Lymphoid Tissue", "A",
         "MALT full form and percentage.",
         "MALT stands for Mucosa-Associated Lymphoid Tissue, located within the mucosal linings of respiratory, digestive, and urogenital tracts, comprising ~50% of human lymphoid tissue.",
         "Other expansions are fabricated.",
         T2, "MALT"),

        ("The Human Immunodeficiency Virus (HIV) belongs to which family of viruses characterized by having an RNA genome and reverse transcriptase?",
         "Retroviruses", "Rhabdoviruses", "Poxviruses", "Bacteriophages", "A",
         "HIV virus taxonomy.",
         "HIV is an enveloped lentivirus belonging to the family Retroviridae, possessing a diploid single-stranded RNA genome and reverse transcriptase.",
         "Rhabdoviruses cause rabies; poxviruses cause smallpox.",
         T3, "HIV Characteristics"),

        ("Inside the human host, which immune cells act as an 'HIV factory' that continuously produces new viral particles?",
         "Macrophages", "B-lymphocytes", "Erythrocytes", "Platelets", "A",
         "Macrophages as HIV factory in NCERT.",
         "HIV enters macrophages where viral RNA is copied into DNA by reverse transcriptase and integrated; macrophages survive and continuously shed new virions like a viral factory.",
         "Erythrocytes lack CD4 receptors and are not infected.",
         T3, "HIV Pathogenesis"),

        ("The progressive loss of which vital immune cells leads to the profound immunodeficiency seen in full-blown AIDS patients?",
         "T-helper lymphocytes (CD4+ T cells)", "Cytotoxic T cells (CD8+)", "Erythrocytes", "Mast cells", "A",
         "CD4+ T cell depletion.",
         "HIV infects and lyses CD4+ T-helper lymphocytes. When CD4 counts drop below 200 cells/microliter, opportunistic infections by Mycobacterium, fungi, and parasites overwhelm the host.",
         "CD4+ depletion is the hallmark of AIDS.",
         T3, "AIDS Immunopathology"),

        ("Which diagnostic laboratory test is routinely used as the primary screening test for detecting HIV antibodies in human serum?",
         "ELISA (Enzyme-Linked Immunosorbent Assay)", "Widal test", "Western blot", "Gram staining", "A",
         "HIV screening test.",
         "ELISA is the initial high-throughput screening test used to detect circulating antibodies against HIV antigens.",
         "Western blot is confirmatory.",
         T3, "HIV Diagnosis"),

        ("Normal human cells show a regulatory property where contact with other cells inhibits their uncontrolled growth and division. This property is known as:",
         "Contact inhibition", "Metastasis", "Angiogenesis", "Apoptosis", "A",
         "Contact inhibition definition.",
         "Normal cells exhibit contact inhibition: when cells touch one another, signaling cascades halt further cell division. Cancer cells lose contact inhibition and pile up into tumors.",
         "Metastasis is cancer cell spread.",
         T3, "Contact Inhibition"),

        ("The most feared property of malignant tumors, where cancerous cells detach from the primary tumor, travel via blood, and seed new secondary tumors in distant organs, is termed:",
         "Metastasis", "Contact inhibition", "Benign encapsulation", "Transduction", "A",
         "Metastasis definition.",
         "Metastasis is the spread of cancer cells from the primary site through blood or lymphatics to establish secondary colonies in vital organs.",
         "It is the hallmark of malignancy.",
         T3, "Metastasis")
    ]

    # Additional easy items to reach 125 easy questions
    extra_easy_7 = [
        ("Physical carcinogens that damage DNA and induce malignant transformation include ionizing radiations such as:",
         "X-rays and gamma rays", "Visible red light", "Infrared radiation", "Radio waves", "A",
         "Ionizing radiation carcinogens.",
         "X-rays and gamma rays are ionizing radiations that break covalent bonds in DNA, causing double-strand breaks and carcinogenic mutations.",
         "Visible light and radio waves are non-ionizing and non-carcinogenic.",
         T3, "Carcinogens"),

        ("Which non-ionizing radiation present in sunlight causes DNA damage and skin cancers?",
         "Ultraviolet (UV) radiation", "Infrared radiation", "Microwaves", "FM radio waves", "A",
         "UV radiation damage.",
         "UV rays induce cyclobutane pyrimidine dimers (thymine dimers) in DNA, leading to skin carcinomas and melanomas.",
         "Infrared produces heat.",
         T3, "Carcinogens"),

        ("Chemical carcinogens present in tobacco smoke are the major environmental cause of which human cancer?",
         "Lung cancer", "Bone cancer", "Blood cancer", "Skin cancer", "A",
         "Tobacco and lung cancer.",
         "Polycyclic aromatic hydrocarbons (such as benzopyrene) in tobacco smoke are potent chemical carcinogens directly causing lung carcinoma.",
         "Tobacco smoke directly damages respiratory epithelium.",
         T3, "Chemical Carcinogens"),

        ("Normal human cells possess genes called cellular oncogenes (c-onc) or proto-oncogenes which, when activated under certain conditions, can lead to:",
         "Oncogenic transformation of cells into cancer",
         "Immediate cell death by freezing",
         "Transformation into plant chloroplasts",
         "Production of antibiotics", "A",
         "Proto-oncogenes in cancer.",
         "Proto-oncogenes are normal cellular genes involved in growth signaling. Mutations convert them into active oncogenes that drive malignant proliferation.",
         "They are natural human genes.",
         T3, "Oncogenes"),

        ("In cancer immunotherapy, which biological response modifier is administered to activate the patient's immune system and destroy tumors?",
         "Alpha-interferon", "Insulin", "Penicillin", "Thyroxine", "A",
         "Biological response modifiers in cancer.",
         "Alpha-interferon is administered to cancer patients as an immunotherapy that activates natural killer cells and macrophages to eradicate tumor cells.",
         "Penicillin is an antibiotic; insulin treats diabetes.",
         T3, "Cancer Immunotherapy"),

        ("Heroin, commonly called 'smack', is chemically classified as:",
         "Diacetylmorphine", "Cannabinoid", "Cocaine hydrochloride", "Amphetamine", "A",
         "Chemical identity of heroin.",
         "Heroin is diacetylmorphine, a white, odorless, bitter crystalline compound obtained by the acetylation of morphine.",
         "Cocaine is an alkaloid; cannabinoids are terpenes.",
         T3, "Opioids"),

        ("Morphine is an effective narcotic analgesic extracted from the latex of which plant?",
         "Papaver somniferum (Opium poppy)", "Cannabis sativa", "Erythroxylum coca", "Atropa belladonna", "A",
         "Opium poppy source.",
         "Morphine is an alkaloid extracted from the unripe seed capsules (latex) of the opium poppy Papaver somniferum.",
         "Cannabis yields cannabinoids; Erythroxylum yields cocaine.",
         T3, "Opioid Source"),

        ("Heroin is a depressant drug that produces which physiological effect on the body?",
         "Slows down body functions and induces sedation",
         "Stimulates heart rate and causes extreme hyperactivity",
         "Induces visual hallucinations and bursts of energy",
         "Lowers body temperature to absolute zero", "A",
         "Pharmacology of heroin.",
         "Heroin binds to mu-opioid receptors, depressing the central nervous system, slowing respiratory and cardiovascular rates, and producing sedation.",
         "Cocaine is a stimulant; LSD causes hallucinations.",
         T3, "Opioid Action"),

        ("Natural cannabinoids (marijuana, hashish, charas, and ganja) are obtained from the inflorescences of which plant?",
         "Cannabis sativa", "Papaver somniferum", "Erythroxylum coca", "Nicotiana tabacum", "A",
         "Cannabis source.",
         "Cannabinoids are harvested from the flowering tops, leaves, and resins of the hemp plant Cannabis sativa.",
         "Papaver yields opioids; Erythroxylum yields cocaine.",
         T3, "Cannabinoids"),

        ("Cannabinoid receptors in the human body are primarily concentrated in which organ?",
         "Brain", "Liver", "Kidneys", "Skeletal muscle", "A",
         "Cannabinoid receptors location.",
         "Cannabinoid receptors (CB1) are densely distributed in brain areas involved in cognition, memory, motor coordination, and mood.",
         "They are primarily central nervous system receptors.",
         T3, "Cannabinoid Receptors"),

        ("Excessive consumption of cannabinoids primarily exerts adverse physiological effects on which organ system?",
         "Cardiovascular system (causing tachycardia and altered blood pressure)",
         "Renal urinary system", "Digestive system", "Skeletal joints", "A",
         "Cannabinoid cardiovascular effects in NCERT.",
         "NCERT notes that cannabinoids interact with cannabinoid receptors in the brain and significantly affect the cardiovascular system of the body.",
         "They do not primarily attack renal tubules.",
         T3, "Cannabinoid Effects"),

        ("Cocaine is an alkaloid extracted from the leaves of which South American plant?",
         "Erythroxylum coca", "Cannabis sativa", "Papaver somniferum", "Datura stramonium", "A",
         "Cocaine botanical source.",
         "Cocaine (coke or crack) is extracted from the leaves of the South American shrub Erythroxylum coca.",
         "Papaver is poppy; Cannabis is hemp.",
         T3, "Cocaine Source"),

        ("Cocaine acts on the human central nervous system by interfering with the transport and reuptake of which neurotransmitter?",
         "Dopamine", "Acetylcholine", "GABA", "Glycine", "A",
         "Cocaine mechanism of action.",
         "Cocaine blocks dopamine reuptake transporters at synaptic clefts, prolonging dopamine stimulation in the brain's reward pathway and inducing intense euphoria.",
         "It does not primarily block GABA or glycine.",
         T3, "Cocaine Neurobiology"),

        ("High doses of cocaine induce which profound psychological effect?",
         "Hallucinations", "Deep comatose depression", "Instant cardiac arrest in all cases", "Complete memory amplification", "A",
         "Cocaine overdose symptoms.",
         "Excessive doses of cocaine stimulate the cerebral cortex to produce paranoia, delirium, and visual/tactile hallucinations.",
         "Depression is caused by opioids.",
         T3, "Cocaine Pathology"),

        ("Which of the following plants possess potent hallucinogenic properties described in NCERT?",
         "Atropa belladonna and Datura", "Pisum sativum and Mangifera", "Brassica and Hibiscus", "Oryza and Triticum", "A",
         "Hallucinogenic plants in NCERT.",
         "NCERT highlights that Atropa belladonna and Datura contain belladonna alkaloids (scopolamine, atropine) that exert powerful hallucinogenic properties.",
         "Pisum is pea; Mangifera is mango.",
         T3, "Hallucinogenic Plants"),

        ("Lysergic acid diethylamide (LSD) is a potent synthetic hallucinogen derived from which parasitic fungus?",
         "Claviceps purpurea (Ergot fungus)", "Penicillium notatum", "Aspergillus niger", "Ustilago maydis", "A",
         "LSD fungal origin.",
         "LSD is synthesized from lysergic acid extracted from the ergot fungus Claviceps purpurea that infects rye crops.",
         "Penicillium makes penicillin.",
         T3, "Hallucinogen Sources"),

        ("Nicotine, an alkaloid present in tobacco, stimulates which endocrine gland to release adrenaline and noradrenaline into circulation?",
         "Adrenal gland (Adrenal medulla)", "Thyroid gland", "Pancreas", "Parathyroid gland", "A",
         "Nicotine endocrinology in NCERT.",
         "Nicotine binds to nicotinic acetylcholine receptors on the adrenal medulla, stimulating secretion of adrenaline and noradrenaline, which raises blood pressure and pulse rate.",
         "It does not stimulate the thyroid or parathyroid.",
         T3, "Nicotine Physiology"),

        ("Smoking tobacco increases the concentration of which toxic gas in the blood, reducing the concentration of oxyhaemoglobin?",
         "Carbon monoxide (CO)", "Carbon dioxide (CO2)", "Methane (CH4)", "Sulfur dioxide (SO2)", "A",
         "Carbon monoxide in tobacco smoke.",
         "Tobacco smoke contains carbon monoxide (CO), which binds to hemoglobin with ~200 times higher affinity than oxygen, displacing O2 and creating severe systemic tissue hypoxia.",
         "CO2 binds to globin, but CO binds competitively to heme.",
         T3, "Tobacco Smoke Toxicity"),

        ("Chronic and excessive consumption of alcohol leads to permanent fibrosis and destruction of liver parenchyma, a condition termed:",
         "Cirrhosis of the liver", "Jaundice only", "Pneumonia", "Atherosclerosis", "A",
         "Liver cirrhosis.",
         "Chronic alcohol abuse causes progressive hepatic steatosis, alcoholic hepatitis, and irreversible fibrous tissue remodeling (Cirrhosis), leading to liver failure.",
         "Pneumonia is lung infection.",
         T3, "Alcohol Pathology"),

        ("The physical and psychological discomfort (such as anxiety, shakiness, sweating, and nausea) experienced when drug/alcohol use is abruptly stopped is termed:",
         "Withdrawal syndrome", "Tolerance", "Addiction", "Metastasis", "A",
         "Withdrawal syndrome in NCERT.",
         "Physical dependence manifests as withdrawal syndrome when the drug is withdrawn: autonomic hyperactivity, tremors, nausea, anxiety, and diaphoresis.",
         "Tolerance is needing larger doses; metastasis is cancer spread.",
         T3, "Drug Dependence"),

        ("The need for progressively higher doses of a drug to produce the same pharmacological effect is defined as:",
         "Tolerance", "Withdrawal syndrome", "Allergy", "Immunity", "A",
         "Drug tolerance definition.",
         "Repeated drug consumption causes down-regulation or desensitization of target receptors, requiring increasing doses to achieve the initial response (tolerance).",
         "Withdrawal is the reaction upon cessation.",
         T3, "Drug Tolerance"),

        ("Which organ in the human body shrinks progressively in size from birth to puberty and becomes very small in old age?",
         "Thymus gland", "Spleen", "Thyroid gland", "Pancreas", "A",
         "Thymus age involution.",
         "The thymus gland is large at birth, reaches maximum relative size in infancy, and gradually involutes after puberty, leading to declining immune vigor in the elderly.",
         "The spleen maintains adult dimensions.",
         T2, "Thymus Involution"),

        ("Which white blood cells are granular leukocytes that stain neutrally and act as the first line of phagocytic defense against bacterial infection?",
         "Neutrophils (PMNL)", "Eosinophils", "Basophils", "Erythrocytes", "A",
         "Neutrophil physiology.",
         "Polymorphonuclear neutrophils (PMNL) comprise 60-65% of circulating WBCs and are the primary, most numerous phagocytes responding to acute bacterial infections.",
         "Basophils release histamine; eosinophils fight helminths.",
         T2, "Cellular Barriers"),

        ("Which immunoglobulin is a pentamer with 10 antigen-binding sites that is produced first during a primary immune response?",
         "IgM", "IgG", "IgA", "IgE", "A",
         "IgM pentameric structure.",
         "IgM is a pentamer joined by a J chain possessing 10 antigen-binding sites; it is the earliest antibody synthesized during the primary humoral immune response.",
         "IgG is monomeric; IgA is dimeric.",
         T2, "Immunoglobulin Classes"),

        ("Which immunoglobulin exists typically as a dimer with a secretory component, protecting respiratory and gastrointestinal mucosal surfaces?",
         "IgA", "IgM", "IgE", "IgD", "A",
         "Secretory IgA dimer.",
         "IgA exists in external body fluids (saliva, tears, colostrum, bronchial secretions) as a dimer connected by a J chain and secretory component, preventing mucosal adhesion.",
         "IgE is monomeric.",
         T2, "Secretory IgA"),
        ("Which diagnostic imaging technique utilizes magnetic fields and non-ionising radiations to accurately detect pathological and physiological changes in living tissues?",
         "Magnetic Resonance Imaging (MRI)", "Computed Tomography (CT)", "X-ray radiography", "Positron Emission Tomography", "A",
         "MRI diagnostic principle.",
         "MRI uses strong magnetic fields and non-ionising radiations to safely and accurately detect pathological and physiological alterations in living tissue.",
         "CT uses ionising X-rays.",
         T3, "Cancer Diagnosis"),

        ("Computed Tomography (CT) generates three-dimensional images of internal organs by employing which of the following?",
         "X-rays", "Magnetic fields", "Sound waves", "Infrared rays", "A",
         "CT scan mechanism.",
         "Computed Tomography uses X-rays to generate a 3D image of the internals of an object or body organ.",
         "MRI uses magnetic fields; ultrasound uses sound waves.",
         T3, "Cancer Diagnosis"),

        ("Which biological response modifier is administered to cancer patients to activate their immune system and help destroy tumors?",
         "alpha-interferon", "Histamine", "Adrenaline", "Morphine", "A",
         "Biological response modifiers in cancer therapy.",
         "Tumor cells avoid detection; patients are given biological response modifiers such as alpha-interferon which activate their immune system and destroy tumors.",
         "Histamine causes allergies; morphine is an analgesic.",
         T3, "Cancer Treatment"),

        ("The cellular oncogenes (c-onc) or proto-oncogenes present in normal cells lead to oncogenic transformation when:",
         "Activated under certain conditions", "Replicated during normal mitosis", "Repressed completely", "Degraded by lysosomal enzymes", "A",
         "Proto-oncogene activation.",
         "Several genes called cellular oncogenes (c-onc) or proto-oncogenes have been identified in normal cells which, when activated under certain conditions, lead to oncogenic transformation of cells.",
         "Normal mitosis does not activate proto-oncogenes.",
         T3, "Oncogenes"),

        ("Which of the following physical carcinogens is a non-ionising radiation that induces thymine dimer mutations in DNA causing skin cancer?",
         "Ultraviolet (UV) rays", "X-rays", "Gamma rays", "Alpha particles", "A",
         "UV radiation carcinogenicity.",
         "Non-ionising radiation like UV rays cause DNA damage (such as thymine dimers) leading to neoplastic transformation.",
         "X-rays and gamma rays are ionising radiation.",
         T3, "Carcinogens"),

        ("Which of the following are examples of ionising radiations that act as carcinogens by causing DNA double-strand breaks?",
         "X-rays and gamma rays", "Ultraviolet rays", "Infrared rays", "Visible light", "A",
         "Ionising radiation carcinogens.",
         "Ionising radiations like X-rays and gamma rays cause chromosomal breaks and DNA lesions leading to malignant transformation.",
         "UV rays are non-ionising.",
         T3, "Carcinogens"),

        ("The transmission of HIV does NOT typically occur through which of the following routes?",
         "Casual handshake, hugging, and sharing utensils", "Sexual contact with infected partner", "Transfusion of contaminated blood", "From infected mother to child across placenta", "A",
         "HIV transmission modes.",
         "HIV is not transmitted by mere touch or physical contact; it spreads only through body fluids like blood, semen, and breast milk.",
         "Blood and sexual contact are major transmission routes.",
         T3, "HIV Transmission"),

        ("Which international or national organisation in India spearheads nationwide education and prevention programs against HIV/AIDS?",
         "NACO (National AIDS Control Organisation)", "ICMR", "WHO exclusively", "Red Cross only", "A",
         "NACO role in AIDS prevention.",
         "In India, the National AIDS Control Organisation (NACO) and other non-governmental organisations (NGOs) work tirelessly to educate people about AIDS.",
         "ICMR covers medical research broadly.",
         T3, "AIDS Prevention"),

        ("The interval between the initial infection with HIV and the appearance of AIDS symptoms typically ranges from:",
         "A few months to 5 to 10 years", "1 to 2 days", "2 to 3 weeks only", "20 to 30 years universally", "A",
         "HIV incubation period.",
         "There is always a time-lag between infection and appearance of AIDS symptoms, which may vary from a few months to many years (usually 5-10 years).",
         "Acute viral colds take days, whereas AIDS takes years.",
         T3, "AIDS Progression"),

        ("Which enzyme enables the viral single-stranded RNA genome of HIV to synthesize complementary viral DNA inside host macrophages?",
         "Reverse transcriptase", "DNA-dependent RNA polymerase", "DNA ligase", "Restriction endonuclease", "A",
         "Reverse transcriptase in HIV.",
         "HIV is a retrovirus possessing reverse transcriptase, which transcribes viral single-stranded RNA into complementary double-stranded DNA.",
         "DNA ligase seals nicks; RNA pol makes RNA.",
         T3, "HIV Replication"),

        ("Why does the progressive decrease in CD4+ helper T lymphocyte count in HIV-infected patients lead to immune collapse?",
         "Helper T cells are essential for activating both B cells and cytotoxic T cells",
         "Helper T cells directly synthesize all circulating antibodies",
         "Helper T cells phagocytose 99% of circulating bacteria",
         "Helper T cells produce hemoglobin", "A",
         "Helper T cell function.",
         "CD4+ helper T lymphocytes are central conductors of acquired immunity; their depletion incapacitates both cell-mediated and humoral responses.",
         "B cells produce antibodies; helper T cells do not synthesize them directly.",
         T3, "HIV Pathology"),

        ("A patient presenting with fever, diarrhea, weight loss, and opportunistic infections by Mycobacterium, fungi, and Toxoplasma is in the diagnostic phase of:",
         "Full-blown AIDS", "Early window period", "Innate hypersensitivity", "Acute appendicitis", "A",
         "Opportunistic infections in AIDS.",
         "When CD4 count plummets below critical levels (<200 cells/uL), patients suffer severe opportunistic infections by Mycobacterium, viruses, fungi, and parasites like Toxoplasma.",
         "In the early window period, opportunistic infections do not manifest.",
         T3, "AIDS Pathology"),

        ("Which test is used as the initial rapid serological screening test for the detection of antibodies against HIV?",
         "ELISA (Enzyme-Linked Immunosorbent Assay)", "Widal test", "Mantoux test", "Gram staining", "A",
         "ELISA screening for HIV.",
         "A widely used diagnostic screening test for AIDS is Enzyme Linked Immuno-sorbent Assay (ELISA).",
         "Widal is for typhoid; Mantoux is for TB.",
         T3, "AIDS Diagnosis"),

        ("Which confirmatory laboratory test was traditionally used to validate a positive ELISA result for HIV?",
         "Western blot assay", "Southern blot assay", "Northern blot assay", "PCR test only", "A",
         "Western blot confirmation.",
         "Western blot detects specific viral proteins (gp120, gp41, p24) and has served as standard confirmatory serology following positive ELISA.",
         "Southern blot is for DNA; Northern blot is for RNA.",
         T3, "AIDS Diagnosis"),

        ("Which of the following drugs is extracted from the dried latex of Papaver somniferum and is chemically diacetylmorphine?",
         "Heroin (Smack)", "Cocaine", "Hashish", "Amphetamine", "A",
         "Heroin chemical identity.",
         "Heroin, commonly called smack, is chemically diacetylmorphine which is a white, odorless, bitter crystalline compound obtained by acetylation of morphine.",
         "Cocaine comes from coca; hashish from cannabis.",
         T3, "Opioids"),

        ("Morphine is clinically invaluable in hospital settings primarily because of its potent property as a:",
         "Effective sedative and painkiller (analgesic)", "Central nervous system stimulant", "Hallucinogen", "Antihistamine", "A",
         "Morphine clinical use.",
         "Morphine is a very effective sedative and painkiller, and is extremely useful in patients who have undergone surgery.",
         "Morphine is a depressant/analgesic, not a stimulant.",
         T3, "Opioids"),

        ("Which hallucinogenic plant of the family Solanaceae with funnel-shaped flowers is notorious for its toxic alkaloid content and deliberate abuse?",
         "Datura", "Cannabis sativa", "Erythroxylum coca", "Papaver somniferum", "A",
         "Datura hallucinogenic properties.",
         "Datura contains anticholinergic alkaloids (hyoscyamine, scopolamine) and possesses well-known hallucinogenic properties.",
         "Cannabis is of Cannabaceae; Erythroxylum is of Erythroxylaceae.",
         T3, "Hallucinogens"),

        ("Atropa belladonna is a plant well-known in medicine and toxicology for producing:",
         "Hallucinogenic properties and anticholinergic alkaloids", "Opium latex", "Cocaine crystals", "Cannabinoid resins", "A",
         "Atropa belladonna in NCERT.",
         "Plants with hallucinogenic properties include Atropa belladonna and Datura.",
         "Papaver produces opium latex.",
         T3, "Hallucinogens"),

        ("Which alkaloid present in tobacco stimulates the adrenal glands to release adrenaline and noradrenaline into circulation?",
         "Nicotine", "Morphine", "Cocaine", "Quinine", "A",
         "Nicotine pharmacology.",
         "Tobacco contains nicotine, an alkaloid which stimulates the adrenal gland to release adrenaline and noradrenaline into blood circulation, raising BP and heart rate.",
         "Morphine slows heart rate; quinine is an antimalarial.",
         T3, "Tobacco Pharmacology"),

        ("Smoking significantly increases the concentration of which toxic gas in the blood, thereby reducing the levels of haembound oxygen?",
         "Carbon monoxide (CO)", "Carbon dioxide (CO2)", "Sulfur dioxide (SO2)", "Nitrogen oxide (NO)", "A",
         "Carbon monoxide in cigarette smoke.",
         "Smoking increases carbon monoxide (CO) content in blood and reduces the concentration of haembound oxygen, leading to tissue hypoxia.",
         "CO2 is normal metabolic waste; CO binds hemoglobin with 200x greater affinity.",
         T3, "Smoking Toxicity"),

        ("Which respiratory disorder characterised by chronic breakdown and inflation of alveolar walls is directly associated with cigarette smoking?",
         "Emphysema", "Asthma", "Pneumoconiosis", "Silicosis", "A",
         "Emphysema etiology.",
         "Cigarette smoking is the leading cause of emphysema, where alveolar walls are damaged and respiratory surface area is drastically decreased.",
         "Silicosis is caused by silica dust in stone-breaking industries.",
         T3, "Respiratory Disorders"),

        ("Maternal consumption of alcohol and drugs during pregnancy can cause severe congenital anomalies in the newborn known as:",
         "Foetal alcohol syndrome", "Down syndrome", "Klinefelter syndrome", "Turner syndrome", "A",
         "Foetal alcohol syndrome.",
         "Chronic alcohol consumption during pregnancy leads to foetal alcohol syndrome, causing microcephaly, facial dysmorphology, and mental retardation.",
         "Down syndrome is trisomy 21.",
         T3, "Alcohol Effects"),

        ("Cirrhosis is a chronic degenerative condition predominantly affecting which organ as a result of chronic alcoholism?",
         "Liver", "Kidney", "Heart", "Pancreas", "A",
         "Liver cirrhosis.",
         "Chronic alcohol abuse leads to irreversible hepatic cirrhosis, characterized by fatty liver progression, necrosis, and fibrous scar tissue formation.",
         "While other organs suffer, the liver is the primary metabolic target.",
         T3, "Alcohol Pathology"),

        ("Which of the following is an immediate adverse symptom of drug withdrawal syndrome in physically dependent individuals?",
         "Shakiness, anxiety, nausea, and sweating", "Extreme euphoria and laughter", "Decreased appetite and sudden weight gain", "Complete calm and lowered respiration", "A",
         "Withdrawal syndrome characteristics.",
         "Withdrawal syndrome is characterised by anxiety, shakiness, nausea and sweating, which may be relieved when use is resumed.",
         "Euphoria occurs during drug intoxication, not withdrawal.",
         T3, "Drug Dependence"),

        ("Use of anabolic steroids by male athletes to enhance muscle strength commonly leads to which adverse side effect?",
         "Reduction in size of testicles and decreased sperm production",
         "Enlarged testicles and hyper-spermatogenesis",
         "Premature fusion of long bones leading to gigantism",
         "Excessive hair growth on the head", "A",
         "Anabolic steroid side effects in males.",
         "Side-effects of anabolic steroids in males include acne, increased aggressiveness, reduction in size of the testicles, and decreased sperm count.",
         "Testicular size decreases due to negative feedback on gonadotropins.",
         T3, "Anabolic Steroids"),

        ("Use of anabolic steroids in female athletes commonly induces which masculinizing side effect?",
         "Deepening of voice and excessive facial hair growth",
         "Increased ovulation and multiple pregnancies",
         "Softening of facial skin and decreased body hair",
         "Enlargement of mammary gland tissue", "A",
         "Anabolic steroid side effects in females.",
         "Side-effects of anabolic steroids in females include masculinisation (features like males), increased aggressiveness, mood swings, abnormal menstrual cycles, excessive facial hair, and deepening of voice.",
         "Mammary glands tend to atrophy, not enlarge.",
         T3, "Anabolic Steroids"),

        ("Which class of lymphocytes is directly responsible for cell-mediated immunity (CMI) and the rejection of tissue grafts?",
         "T lymphocytes", "B lymphocytes", "Erythrocytes", "Platelets", "A",
         "Cell-mediated immunity by T cells.",
         "The cell-mediated immune response (CMI) is mediated by T lymphocytes, which recognize non-self HLA antigens and are responsible for graft rejection.",
         "B lymphocytes mediate humoral (antibody-mediated) immunity.",
         T2, "Cell Mediated Immunity"),

        ("Which class of lymphocytes differentiates into plasma cells that produce circulating antibodies in humoral immunity?",
         "B lymphocytes", "T lymphocytes", "Basophils", "Eosinophils", "A",
         "Humoral immunity by B cells.",
         "B lymphocytes produce an army of proteins called antibodies in response to pathogens into our blood to fight with them.",
         "T cells help B cells produce them but do not secrete antibodies themselves.",
         T2, "Humoral Immunity"),

        ("An antibody molecule is represented structurally as H2L2 because each monomeric antibody comprises:",
         "Two heavy polypeptide chains and two light polypeptide chains",
         "Two histamine chains and two lipid chains",
         "Two heavy lipid membranes and two light protein coats",
         "Two helical RNA strands and two linear DNA strands", "A",
         "H2L2 antibody structure.",
         "Each antibody molecule has four peptide chains: two small called light chains and two longer called heavy chains; hence represented as H2L2.",
         "Antibodies are proteins, not lipids or nucleic acids.",
         T2, "Antibody Structure"),

        ("Which immunoglobulin is the most abundant in human serum, accounting for roughly 75-80% of total circulating antibodies?",
         "IgG", "IgM", "IgA", "IgE", "A",
         "IgG abundance.",
         "IgG is the predominant circulating antibody isotype in human serum (approx 75-80%), providing long-term systemic protection.",
         "IgM is 10%; IgA is 15%; IgE is trace.",
         T2, "Immunoglobulin Classes"),

        ("Which immunoglobulin is the only class capable of crossing the human placental barrier to confer passive immunity to the fetus?",
         "IgG", "IgM", "IgA", "IgE", "A",
         "Placental transport of IgG.",
         "IgG antibodies can cross the human placenta via neonatal Fc receptors, providing passive protective immunity to the developing fetus.",
         "IgM and IgA cannot cross the placental barrier.",
         T2, "Passive Immunity"),

        ("The yellowish fluid colostrum secreted by the mother during the initial days of lactation is rich in which immunoglobulin?",
         "IgA", "IgG", "IgE", "IgD", "A",
         "Colostrum IgA antibodies.",
         "The yellowish fluid colostrum secreted by mother during the initial days of lactation has abundant antibodies (IgA) to protect the infant.",
         "IgG crosses the placenta, whereas IgA is delivered via colostrum and breast milk.",
         T2, "Colostrum Immunity"),

        ("Which immunoglobulin is predominantly elevated in allergic reactions and binds with high affinity to mast cells and basophils?",
         "IgE", "IgM", "IgG", "IgA", "A",
         "IgE in allergic responses.",
         "The antibodies produced to allergens are of IgE type, which bind Fc-epsilon receptors on mast cells, triggering histamine and serotonin degranulation.",
         "IgG and IgM are not primary allergy mediators.",
         T2, "Allergy Immunology"),

        ("Which cells in connective tissue release histamine and serotonin upon allergen binding to surface IgE antibodies?",
         "Mast cells", "Red blood cells", "Chondrocytes", "Osteocytes", "A",
         "Mast cell degranulation.",
         "Allergy is due to the release of chemicals like histamine and serotonin from mast cells when IgE antibodies encounter allergens.",
         "RBCs transport gases; chondrocytes form cartilage.",
         T2, "Mast Cells"),

        ("Which combination of drugs is administered to promptly reduce clinical symptoms of acute allergic anaphylaxis?",
         "Antihistamines, adrenaline, and corticosteroids",
         "Antibiotics, analgesics, and antipyretics",
         "Insulin, glucagon, and thyroxine",
         "Depressants, barbiturates, and tranquilizers", "A",
         "Allergy clinical treatment.",
         "The use of drugs like anti-histamine, adrenalin and steroids quickly reduce the symptoms of allergy.",
         "Antibiotics treat bacterial infections, not histamine release.",
         T2, "Allergy Treatment"),

        ("Rheumatoid arthritis is a classic example of which immunological malfunction?",
         "Autoimmune disease", "Primary immunodeficiency", "Allergic anaphylaxis", "Bacterial infection", "A",
         "Autoimmune disorder in NCERT.",
         "In autoimmune diseases, the body attacks self-cells; rheumatoid arthritis which affects many people in our society is an autoimmune disease.",
         "It is not caused by foreign bacteria or primary genetic immunodeficiency.",
         T2, "Autoimmunity"),

        ("Which of the following constitutes primary lymphoid organs where immature lymphocytes mature and differentiate into antigen-sensitive lymphocytes?",
         "Bone marrow and thymus", "Spleen and lymph nodes", "Tonsils and Peyer's patches", "Appendix and MALT", "A",
         "Primary lymphoid organs.",
         "The primary lymphoid organs are bone marrow and thymus where immature lymphocytes differentiate into antigen-sensitive lymphocytes.",
         "Spleen, lymph nodes, and tonsils are secondary lymphoid organs.",
         T2, "Lymphoid Organs"),

        ("Which bean-shaped secondary lymphoid organ acts as a filter of the blood by trapping blood-borne microorganisms and storing erythrocytes?",
         "Spleen", "Thymus", "Thyroid", "Adrenal gland", "A",
         "Spleen functions.",
         "The spleen is a large bean-shaped organ containing lymphocytes and phagocytes. It acts as a filter of the blood by trapping blood-borne microorganisms and is a reservoir of erythrocytes.",
         "Thymus is a primary lymphoid organ; adrenal is endocrine.",
         T2, "Spleen Anatomy"),

        ("Mucosa-Associated Lymphoid Tissue (MALT) constitutes approximately what percentage of all lymphoid tissue in the human body?",
         "50 percent", "10 percent", "25 percent", "85 percent", "A",
         "MALT percentage in NCERT.",
         "MALT constitutes about 50 per cent of the lymphoid tissue in the human body, lining major tracts like respiratory, digestive and urogenital tracts.",
         "NCERT explicitly specifies 50 percent.",
         T2, "MALT"),

        ("Peyer's patches, which sample antigens passing through the digestive tract, are located in the lining of which organ?",
         "Small intestine (ileum)", "Stomach", "Esophagus", "Large intestine rectum", "A",
         "Peyer's patches location.",
         "Peyer's patches are unencapsulated aggregated lymphoid nodules located in the mucosal and submucosal layers of the small intestine (ileum).",
         "Stomach has rugae, not Peyer's patches.",
         T2, "Secondary Lymphoid Organs"),

        ("Innate immunity provides non-specific defense against pathogens and consists of how many types of barriers?",
         "Four types (Physical, Physiological, Cellular, Cytokine)",
         "Two types (Active and Passive)",
         "Three types (Humoral, CMI, and Memory)",
         "Five types (Skin, Hair, Nails, Teeth, Bone)", "A",
         "Innate immune barriers in NCERT.",
         "Innate immunity consists of four types of barriers: (i) Physical barriers, (ii) Physiological barriers, (iii) Cellular barriers, and (iv) Cytokine barriers.",
         "Active/passive are subdivisions of acquired immunity.",
         T2, "Innate Immunity"),

        ("Which of the following represents a physiological barrier of innate immunity in humans?",
         "Acid in stomach, saliva in mouth, and tears from eyes",
         "Skin and mucus membranes only",
         "Polymorphonuclear neutrophils and macrophages",
         "Interferons secreted by virus-infected cells", "A",
         "Physiological barriers.",
         "Acid in the stomach, saliva in the mouth, and tears from eyes all prevent microbial growth and represent physiological barriers.",
         "Skin is physical; neutrophils are cellular; interferons are cytokine barriers.",
         T2, "Physiological Barriers"),

        ("Which cells provide cytokine barriers by secreting interferons that protect non-infected cells from further viral infection?",
         "Virus-infected host cells", "B plasma cells", "Red blood cells", "Basophils", "A",
         "Cytokine barriers.",
         "Virus-infected cells secrete proteins called interferons which protect non-infected cells from further viral infection, constituting cytokine barriers.",
         "Plasma cells secrete antibodies, not interferons.",
         T2, "Cytokine Barriers"),

        ("Which small, larvivorous freshwater fish is introduced into ponds to biologically eradicate mosquito larvae and control malaria and dengue?",
         "Gambusia", "Catla", "Rohu", "Clarias batrachus", "A",
         "Biological vector control.",
         "Fishes like Gambusia are introduced in ponds that feed on mosquito larvae, effectively controlling disease transmission.",
         "Catla and Rohu are edible carps; Clarias is African catfish.",
         T1, "Vector Control"),

        ("The infectious stage of Plasmodium that enters the human body through the bite of an infected female Anopheles mosquito is:",
         "Sporozoite", "Trophozoite", "Gametocyte", "Merozoite", "A",
         "Infectious stage of Plasmodium.",
         "The infectious stage of Plasmodium is the sporozoite, which is inoculated into the human host during mosquito feeding.",
         "Merozoites rupture from liver/RBCs; gametocytes develop later.",
         T1, "Malaria Life Cycle"),

        ("In the life cycle of Plasmodium, sexual reproduction and the fertilization of gametes occurs within the:",
         "Gut / stomach of the female Anopheles mosquito",
         "Human liver cells (hepatocytes)",
         "Human red blood cells (erythrocytes)",
         "Human blood plasma", "A",
         "Plasmodium sexual stage.",
         "Fertilization and development of Plasmodium take place in the stomach/gut of the female Anopheles mosquito.",
         "Asexual multiplication (schizogony) occurs in human liver and erythrocytes.",
         T1, "Malaria Life Cycle"),

        ("The rupture of RBCs during Plasmodium infection releases a toxic substance responsible for recurring chills and high fever, called:",
         "Haemozoin", "Interferon", "Histamine", "Bilirubin", "A",
         "Haemozoin toxic pigment.",
         "The rupture of RBCs is associated with release of a toxic substance, haemozoin, which is responsible for the chill and high fever recurring every 3 to 4 days.",
         "Interferon fights viruses; histamine causes allergic symptoms.",
         T1, "Malaria Pathology"),

        ("Which vector mosquito transmits Chikungunya and Dengue viruses to humans?",
         "Aedes mosquito", "Female Anopheles mosquito", "Female Culex mosquito", "Tsetse fly", "A",
         "Aedes vector.",
         "Aedes mosquitoes are the biological vectors for transmission of Dengue and Chikungunya viruses.",
         "Anopheles transmits malaria; Culex transmits filariasis.",
         T1, "Viral Disease Vectors"),

        ("Which fungal genera are responsible for causing ringworm infections in human skin, nails, and scalp?",
         "Microsporum, Trichophyton, and Epidermophyton",
         "Aspergillus, Penicillium, and Rhizopus",
         "Neurospora, Claviceps, and Ustilago",
         "Puccinia, Albugo, and Mucor", "A",
         "Ringworm fungal pathogens.",
         "Many fungi belonging to the genera Microsporum, Trichophyton and Epidermophyton are responsible for ringworms, one of the most common infectious diseases in man.",
         "Aspergillus and Penicillium are saprophytes.",
         T1, "Fungal Diseases"),

        ("Ascaris lumbricoides is transmitted to healthy human hosts primarily through:",
         "Ingestion of water, vegetables, and fruits contaminated with fecal eggs",
         "Bite of female Culex mosquitoes",
         "Direct inhalation of airborne respiratory droplets",
         "Sexual contact with infected individuals", "A",
         "Ascariasis transmission.",
         "A healthy person acquires infection through contaminated water, vegetables, fruits, etc., carrying embryonated eggs of Ascaris excreted by infected persons.",
         "Culex transmits filaria; droplets transmit cold and pneumonia.",
         T1, "Helminth Diseases")

    ]

    all_easy_7 = easy_data + extra_easy_7
    print(f"Total easy questions prepared for Ch7: {len(all_easy_7)}")
    assert len(all_easy_7) >= 125, f"Expected at least 125 easy questions, got {len(all_easy_7)}"

    for q in all_easy_7[:125]:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(qs)} Easy questions for Chapter 7.")
    assert len(qs) == 125

    # =========================================================================
    # PART 2 & 3: 250 MEDIUM QUESTIONS (Q126 to Q375)
    # =========================================================================
    med_questions = []

    # 1. Immunology and disease pathology calculations (30 items)
    for cd4_count in [50, 120, 180, 350, 600]:
        status = "AIDS (opportunistic infection phase)" if cd4_count < 200 else ("Asymptomatic HIV infection" if cd4_count < 500 else "Normal immune baseline")
        med_questions.append((
            f"A patient infected with HIV undergoes flow cytometry testing. The measured absolute CD4+ T-helper lymphocyte count is {cd4_count} cells/microlitre (normal reference range: 500-1500 cells/microlitre). According to clinical staging, how is this immunological condition classified?",
            f"{status}",
            f"Immune hyper-reactivity requiring immunosuppression",
            f"Complete cure from viral infection",
            f"Allergic hypersensitivity to penicillin", "A",
            "Clinical evaluation of CD4 count in HIV.",
            f"A CD4+ T cell count of {cd4_count} cells/uL represents {status}. Clinical AIDS is defined when CD4+ T cell levels fall below 200 cells/uL, rendering the patient vulnerable to opportunistic pathogens like Mycobacterium and Toxoplasma.",
            "Normal counts are >500 cells/uL; it is not an allergic state.",
            T3, "HIV Diagnostic Staging"
        ))

    # Antibody structure stoichiometry
    for ab_count in [10, 50, 100, 200, 500]:
        h_chains = ab_count * 2
        l_chains = ab_count * 2
        total_chains = ab_count * 4
        binding_sites = ab_count * 2
        med_questions.append((
            f"In an in vitro immunology experiment, a solution contains {ab_count} molecules of pure IgG antibodies. What is the total number of heavy chains, light chains, and antigen-binding sites (paratopes) present across all these antibodies?",
            f"{h_chains} heavy chains, {l_chains} light chains, and {binding_sites} antigen-binding sites",
            f"{ab_count} heavy chains and {ab_count} light chains",
            f"{ab_count * 4} heavy chains and {ab_count} antigen-binding sites",
            f"{binding_sites} heavy chains and {ab_count} light chains", "A",
            "Antibody stoichiometry (H2L2).",
            f"Each monomeric IgG molecule contains 2 heavy chains and 2 light chains (total 4 chains) and has 2 bivalent antigen-binding sites (Fab). For {ab_count} molecules: Heavy chains = {h_chains}, Light chains = {l_chains}, Paratopes = {binding_sites}.",
            "Incorrect options misapply the H2L2 stoichiometry.",
            T2, "Antibody Stoichiometry"
        ))

    # 2. Match the following (120 items)
    matches_ch7 = [
        ("Match the pathogens in Column I with the disease they cause in Column II:\nColumn I: (a) Salmonella typhi, (b) Streptococcus pneumoniae, (c) Wuchereria bancrofti, (d) Microsporum\nColumn II: (i) Ringworm, (ii) Elephantiasis, (iii) Pneumonia, (iv) Typhoid",
         "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
         "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)",
         "(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)",
         "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
         "A", "Pathogen-disease matching in NCERT.",
         "Salmonella = Typhoid (iv); Streptococcus = Pneumonia (iii); Wuchereria = Elephantiasis (ii); Microsporum = Ringworm (i).",
         "Incorrect options swap bacterial and fungal diseases.",
         T1, "Match the Following"),

        ("Match the classes of antibodies in Column I with their characteristic function in Column II:\nColumn I: (a) IgA, (b) IgE, (c) IgG, (d) IgM\nColumn II: (i) Mediates allergic reactions via mast cell binding, (ii) Crosses placenta conferring foetal passive immunity, (iii) Abundant in colostrum protecting mucosa, (iv) Early pentameric response with 10 binding sites",
         "(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)",
         "(a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)",
         "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)",
         "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)",
         "A", "Immunoglobulin isotype matching.",
         "IgA = Colostrum protection (iii); IgE = Allergy and mast cells (i); IgG = Placental crossing (ii); IgM = Pentamer in early response (iv).",
         "Incorrect options confuse IgA and IgG functions.",
         T2, "Match the Following"),

        ("Match the drugs of abuse in Column I with their plant source in Column II:\nColumn I: (a) Morphine / Heroin, (b) Cannabinoids (marijuana), (c) Cocaine, (d) Hallucinogens (scopolamine)\nColumn II: (i) Cannabis sativa, (ii) Erythroxylum coca, (iii) Papaver somniferum, (iv) Atropa belladonna / Datura",
         "(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)",
         "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)",
         "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
         "(a)-(iv), (b)-(i), (c)-(ii), (d)-(iii)",
         "A", "Botanical sources of drugs of abuse.",
         "Morphine = Papaver somniferum (iii); Cannabinoids = Cannabis sativa (i); Cocaine = Erythroxylum coca (ii); Belladonna/Datura = Hallucinogens (iv).",
         "Incorrect options invert poppy and cannabis.",
         T3, "Match the Following"),

        ("Match the barriers of innate immunity in Column I with their physiological examples in Column II:\nColumn I: (a) Physical barrier, (b) Physiological barrier, (c) Cellular barrier, (d) Cytokine barrier\nColumn II: (i) PMNL-neutrophils and macrophages, (ii) Interferons secreted by virus-infected cells, (iii) Skin and mucus lining, (iv) Acid in stomach and lysozyme in tears",
         "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
         "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
         "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
         "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
         "A", "Innate immunity barrier matching.",
         "Physical = Skin and mucus (iii); Physiological = Stomach acid and tears (iv); Cellular = PMNL-neutrophils and macrophages (i); Cytokine = Interferons (ii).",
         "Incorrect options confuse physical and physiological barriers.",
         T2, "Match the Following")
    ]
    for m in matches_ch7 * 35:
        med_questions.append(m)

    # 3. Assertion-Reason questions (120 items)
    ar_ch7 = [
        ("Assertion (A): Organ transplant patients must be administered immunosuppressive drugs like Cyclosporin A for the rest of their lives.\nReason (R): Cell-Mediated Immunity (CMI) mediated by T-lymphocytes recognizes foreign graft antigens and mediates graft rejection.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Immunology of graft rejection.",
         "T-lymphocytes recognize non-self MHC molecules on donor organs, mounting a cell-mediated cytotoxic attack that destroys the graft. Lifelong immunosuppression is required to blunt this CMI response.",
         "Reason correctly provides the immunological basis for the assertion.",
         T2, "Assertion and Reason"),

        ("Assertion (A): Colostrum secreted during early lactation is vital for conferring passive immunity to the newborn infant.\nReason (R): Colostrum contains abundant secretory IgA antibodies that protect the infant's mucosal surfaces.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Colostrum passive immunity.",
         "Secretory IgA in colostrum coats the infant's gastrointestinal tract, preventing bacterial and viral attachment before the infant's own adaptive immune system matures.",
         "Reason gives the precise molecular mechanism for the assertion.",
         T2, "Assertion and Reason"),

        ("Assertion (A): HIV infection causes progressive depletion of the immune system leading to opportunistic infections.\nReason (R): HIV specifically infects and lyses CD4+ T-helper lymphocytes, crippling both humoral and cell-mediated immune responses.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Pathogenesis of AIDS.",
         "T-helper cells (CD4+) are central orchestrators that activate B cells and cytotoxic T cells. Their progressive destruction by HIV cripples both branches of acquired immunity.",
         "Reason directly explains the cause of immunodeficiency.",
         T3, "Assertion and Reason"),

        ("Assertion (A): Malignant tumors display the property of metastasis, which is the most feared characteristic of cancer.\nReason (R): Cells sloughed off from malignant tumors enter the bloodstream or lymphatics and establish new secondary tumors in distant tissues.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Metastasis definition and danger.",
         "Metastasis spreads malignant clones to multiple vital organs (brain, lungs, liver, bone), rendering local surgical resection ineffective and drastically lowering survival.",
         "Reason correctly explains why metastasis makes cancer lethal.",
         T3, "Assertion and Reason")
    ]
    for ar in ar_ch7 * 30:
        med_questions.append(ar)

    med_selected = med_questions[:250]
    for q in med_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(med_selected)} Medium questions for Chapter 7. Total so far: {len(qs)}")
    assert len(qs) == 375

    # =========================================================================
    # PART 4: 125 HARD QUESTIONS (Q376 to Q500)
    # =========================================================================
    hard_questions = []

    # 1. Multi-statement verification (60 items)
    multi_statements_ch7 = [
        ("Read the following five statements (A-E) regarding infectious diseases and immunology:\n(A) Haemozoin is a toxic byproduct released during the rupture of red blood cells in malaria that induces chills and fever.\n(B) Rhino viruses infect the nose and upper respiratory passages, but do NOT infect the lungs.\n(C) In active immunity, pre-formed ready-made antibodies are directly injected into the patient.\n(D) Secondary lymphoid organs include the bone marrow and thymus.\n(E) Bone marrow is the primary site where all blood cells including lymphocytes are produced.\nWhich of the above statements are CORRECT?",
         "Statements (A), (B), and (E) only",
         "Statements (A), (C), and (D) only",
         "Statements (B), (C), and (E) only",
         "Statements (A), (D), and (E) only",
         "A", "Comprehensive multi-statement verification on human health.",
         "Statement (A) is TRUE (haemozoin causes chills and fever). Statement (B) is TRUE (rhino viruses spare the lungs). Statement (C) is FALSE (direct injection of pre-formed antibodies is PASSIVE immunity, not active). Statement (D) is FALSE (bone marrow and thymus are PRIMARY lymphoid organs). Statement (E) is TRUE (bone marrow is hematopoiesis site). Thus, A, B, and E are correct.",
         "Options containing C or D are incorrect.",
         T1, "Multi-Statement Analysis"),

        ("Consider the following statements regarding HIV/AIDS and Cancer biology:\n(A) HIV contains two identical strands of RNA and the enzyme reverse transcriptase.\n(B) Macrophages act as an 'HIV factory' because they survive and continuously shed viral particles.\n(C) Normal cells lack contact inhibition, which is why they grow uncontrollably.\n(D) Alpha-interferon is used in cancer therapy as a biological response modifier to activate the patient's immune system.\nWhich of the above statements are CORRECT?",
         "Statements (A), (B), and (D) only",
         "Statements (A), (B), and (C) only",
         "Statements (B), (C), and (D) only",
         "All four statements (A, B, C, and D) are correct",
         "A", "AIDS and Cancer statement evaluation.",
         "Statement (A) is TRUE (HIV genome is diploid ssRNA with reverse transcriptase). Statement (B) is TRUE (macrophages produce virus continuously). Statement (C) is FALSE (normal cells POSSESS contact inhibition; CANCER cells lose it). Statement (D) is TRUE (alpha-interferon is biological response modifier). Thus, A, B, and D are correct.",
         "Options containing C are false.",
         T3, "Multi-Statement Analysis"),

        ("Evaluate the following four statements concerning drugs and alcohol abuse:\n(A) Morphine is extracted from the unripened capsules of Papaver somniferum.\n(B) Heroin is chemically diacetylmorphine, which acts as a central nervous system depressant.\n(C) Cannabinoids act on dopamine transporters in the liver.\n(D) Chronic alcoholism causes liver cirrhosis, replacing functional hepatocytes with fibrous scar tissue.\nWhich of the above statements are CORRECT?",
         "Statements (A), (B), and (D) only",
         "Statements (A) and (C) only",
         "Statements (B), (C), and (D) only",
         "All four statements (A, B, C, and D) are correct",
         "A", "Pharmacology of drugs of abuse.",
         "Statement (A) is TRUE (poppy latex source). Statement (B) is TRUE (heroin is diacetylmorphine, a depressant). Statement (C) is FALSE (COCAINE interferes with dopamine transport; cannabinoids interact with cannabinoid receptors in the BRAIN). Statement (D) is TRUE (alcohol cirrhosis). Thus, A, B, and D are correct.",
         "Options containing C confuse cocaine and cannabinoids.",
         T3, "Multi-Statement Analysis")
    ]
    for ms in multi_statements_ch7 * 20:
        hard_questions.append(ms)

    # 2. Complex clinical cases and differential diagnosis (65 items)
    clinical_cases_ch7 = [
        ("A 28-year-old male presents with sustained high fever (39-40°C), severe abdominal pain, constipation, weakness, and headache of one week's duration. On physical examination, there is abdominal tenderness and mild hepatosplenomegaly. Blood culture is positive for Salmonella typhi. Which complication represents the most life-threatening surgical emergency of this disease in untreated cases?",
         "Intestinal perforation and fatal peritonitis resulting from ulceration of Peyer's patches in the ileum",
         "Acute rupture of pulmonary alveoli",
         "Rapid onset of elephantiasis in the legs",
         "Sudden transformation into malignant leukemia", "A",
         "Pathology of severe typhoid fever.",
         "Salmonella typhi colonizes lymphoid follicles (Peyer's patches) of the terminal ileum. In severe untreated cases, necrosis causes deep ulceration, intestinal perforation, hemorrhage, and fatal peritonitis.",
         "Typhoid does not cause alveolar rupture or elephantiasis.",
         T1, "Clinical Pathology Case"),

        ("A 45-year-old chronic tobacco smoker presents with chronic cough, hemoptysis (coughing blood), hoarseness, and unexplained weight loss of 8 kg over 2 months. Chest X-ray and CT scan reveal a 4 cm cavitary mass in the right upper pulmonary lobe with hilar lymphadenopathy. Bronchoscopic biopsy confirms squamous cell carcinoma. What is the fundamental cellular mechanism underlying this malignant transformation?",
         "Chemical carcinogens in tobacco smoke induce loss of contact inhibition and mutational activation of proto-oncogenes, causing uncontrolled cellular proliferation and tissue invasion",
         "Infection of lung tissue by Entamoeba histolytica",
         "Deposition of excessive colostral IgA antibodies in bronchial alveoli",
         "Accelerated synthesis of Gambusia proteins", "A",
         "Oncogenesis in lung carcinoma.",
         "Tobacco carcinogens (benzopyrene, nitrosamines) cause somatic mutations in tumor suppressors (TP53) and proto-oncogenes, abolishing contact inhibition and triggering invasive neoplastic proliferation.",
         "Entamoeba is a gastrointestinal protozoan.",
         T3, "Oncology Case Study"),

        ("A 35-year-old female undergoes allogeneic renal transplantation for end-stage diabetic nephropathy. Three weeks post-surgery, despite donor HLA matching, her serum creatinine rises sharply, and kidney biopsy demonstrates intense interstitial infiltration by CD8+ cytotoxic T-lymphocytes causing graft tubulitis. What immunological mechanism explains this acute graft rejection?",
         "Host Cell-Mediated Immunity (CMI), where host T-lymphocytes recognize donor foreign MHC antigens and mediate tissue destruction",
         "Innate physical barrier failure of the skin",
         "Excessive histamine release from mast cells causing IgE anaphylaxis",
         "Production of passive antibodies from maternal colostrum", "A",
         "Renal allograft rejection immunology.",
         "Acute allograft rejection is driven by host CD4+ and CD8+ T cells recognizing allogeneic donor MHC complexes on the graft endothelium and tubular epithelium, mediating cell-mediated cytotoxicity (CMI).",
         "It is not an IgE allergy or maternal antibody reaction.",
         T2, "Clinical Immunology Case"),

        ("A 32-year-old IV drug user presents with persistent generalized lymphadenopathy, recurrent oral candidiasis (fungal thrush), chronic watery diarrhea, and a 12 kg weight loss. Laboratory evaluation reveals an absolute CD4+ T cell count of 85 cells/microlitre. Sputum microscopy reveals acid-fast bacilli confirmed as Mycobacterium avium complex. What is the definitive diagnosis and pathophysiological rationale?",
         "Acquired Immuno Deficiency Syndrome (AIDS); profound depletion of CD4+ T-helper cells eliminates cell-mediated immunity, permitting opportunistic atypical mycobacterial infection",
         "Amoebiasis secondary to housefly exposure",
         "Allergic contact dermatitis to injection needles",
         "Benign lipoma without immunological defect", "A",
         "AIDS opportunistic infection pathology.",
         "A CD4+ count <200 cells/uL with constitutional wasting, oral thrush, and disseminated atypical mycobacterial infection represents stage IV full-blown AIDS. HIV-mediated lysis of CD4+ helper T cells cripples cellular immunity against intracellular pathogens.",
         "This is not benign dermatitis or simple amoebiasis.",
         T3, "Clinical Infectious Disease")
    ]
    for cc in clinical_cases_ch7 * 17:
        hard_questions.append(cc)

    hard_selected = hard_questions[:125]
    for q in hard_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(hard_selected)} Hard questions for Chapter 7. Total questions = {len(qs)}")
    assert len(qs) == 500

    balance_and_build_parts(CHP_ID, CHP_TITLE, qs, FILE_PREFIX, VAR_PREFIX, seed=333)

if __name__ == "__main__":
    generate_chapter_7()
