import { DetailedTopicContent } from '../../types/neet';

export const bioCommonHumanDiseasesDetails: DetailedTopicContent = {
  topicId: "bio-common-human-diseases",
  topicName: "Common Infectious Human Diseases & Pathogens",
  subject: "Biology",
  class: "Class 12",
  classification: "Biology & Human Welfare",
  chapter: "Human Health and Diseases",

  whatIsThisTopic: "Comprehensive NCERT & NEET UG exploration of human health, the historical transition from the 'Good Humor' hypothesis to modern cellular pathology, classification of pathogens (Bacteria, Viruses, Protozoans, Helminths, Fungi), disease transmission routes, clinical manifestations, diagnosis, and vectors. Deep step-by-step mechanisms of Typhoid (Salmonella typhi & Widal test), Pneumonia (Streptococcus pneumoniae/Haemophilus influenzae vs Rhinovirus Common Cold), the complete multi-host sexual and asexual life cycle of Plasmodium (Malaria pathogenesis, Haemozoin toxicity, Schizogony, Gametocytes, Sporozoites), Amoebiasis (Entamoeba histolytica), Ascariasis (Ascaris lumbricoides), Filariasis/Elephantiasis (Wuchereria bancrofti/W. malayi & Culex vector), Ringworm (Microsporum, Trichophyton, Epidermophyton), and vector control strategies (Gambusia fish, Biocontrol, sanitation).",

  basicIdea: [
    "Definition of Health: Health is not simply the absence of disease or physical fitness. According to the WHO and NCERT, health is defined as a state of complete physical, mental, and social well-being. Good health increases productivity, enhances longevity, and reduces infant and maternal mortality.",
    "Historical Paradigm Shift: The ancient Greek Hippocratic medicine and Indian Ayurvedic systems posited the 'Good Humor' hypothesis (health held by a balance of four humors: blood, phlegm, black bile, yellow bile; a person with black bile was thought to have a hot personality and fever). This was disproved by William Harvey (discoverer of blood circulation) through experimental demonstration of blood circulation and precise thermometer measurements of normal body temperature in individuals with black bile.",
    "Factors Influencing Health: (1) Genetic disorders (defects inherited from birth); (2) Infections (bacterial, viral, protozoan, fungal, helminthic); (3) Life style (food and water intake, rest, exercise, hygiene, habits).",
    "Infectious vs Non-Infectious Diseases: Diseases easily transmitted from one person to another are infectious (e.g., AIDS, Common Cold, Typhoid). Non-infectious diseases remain confined to the host (e.g., Cancer, hypertension). Infectious diseases account for massive global morbidity.",
    "Bacterial Diseases: (1) Typhoid (Salmonella typhi) enters small intestine via contaminated food/water, produces sustained fever (39°–40°C), confirmed by Widal serological test. (2) Pneumonia (Streptococcus pneumoniae, Haemophilus influenzae) infects lung alveoli, filling them with fluid, leading to severe hypoxia with bluish/grayish nails and lips.",
    "Viral Diseases: Common Cold (Rhinoviruses) infects the nasal epithelium and upper respiratory tract, but STRICTLY SPARES the lungs (differentiating it from pneumonia). Lasts 3–7 days.",
    "Protozoan Diseases: (1) Malaria (Plasmodium vivax, P. malariae, P. falciparum): Digenetic parasite requiring two hosts—Female Anopheles mosquito (primary/definitive host, sexual syngamy) and Human (secondary/intermediate host, asexual schizogony). RBC lysis releases toxic Haemozoin causing recurring chills and fever. (2) Amoebiasis (Entamoeba histolytica): Inhabits large intestine, transmitted by houseflies (Musca domestica) as mechanical vectors.",
    "Helminthic & Fungal Diseases: Ascariasis (Ascaris lumbricoides) blocks intestine; Filariasis (Wuchereria bancrofti/malayi) causes chronic lymphatic inflammation (Elephantiasis) via Culex mosquito bite; Ringworm (Microsporum, Trichophyton, Epidermophyton) causes dry, scaly pruritic skin lesions flourishing in warmth and humidity."
  ],

  importantTerms: [
    {
      term: "Pathogen",
      definition: "A biological disease-causing organism, including bacteria, viruses, fungi, protozoans, and helminths, that adapts to survive within the host environment (e.g., resisting gastric acid and mucosal enzymes).",
      neetNote: "Pathogens must possess mechanisms to overcome host physiological defenses (e.g., Salmonella survives in low gastric pH)."
    },
    {
      term: "Good Humor Hypothesis",
      definition: "An ancient medical doctrine asserting that health is maintained by a harmony of four bodily humors; disproved by William Harvey's demonstration of blood circulation and thermometry.",
      neetNote: "William Harvey proved normal body temperature in black bile individuals using a thermometer, establishing modern physiological medicine."
    },
    {
      term: "Widal Test",
      definition: "A serological agglutination diagnostic test used to detect specific agglutinating antibodies (O and H antibodies) against Salmonella typhi antigens in patient serum.",
      neetNote: "Gold standard diagnostic test for enteric/typhoid fever in NCERT."
    },
    {
      term: "Haemozoin",
      definition: "A toxic, insoluble crystalline pigment formed by Plasmodium parasites from the digestion of host erythrocyte hemoglobin (heme dimer crystals).",
      neetNote: "The rupture of schizont-filled RBCs releases haemozoin and merozoites, directly triggering cyclic chills and high fever every 3–4 days."
    },
    {
      term: "Sporozoite",
      definition: "The infectious, motile, spindle-shaped stage of Plasmodium that develops in the mosquito gut wall (oocyst), migrates to mosquito salivary glands, and is injected into the human bloodstream during a mosquito bite.",
      neetNote: "Infectious stage to humans = Sporozoite; infectious stage to mosquito = Gametocyte."
    },
    {
      term: "Schizogony",
      definition: "Asexual multiple fission reproduction in Plasmodium occurring successively inside human hepatocytes (liver schizogony) and erythrocytes (erythrocytic schizogony).",
      neetNote: "Produces thousands of merozoites that infect new RBCs."
    },
    {
      term: "Mechanical Vector",
      definition: "An animal carrier that physically transports a pathogen on its body or feet from feces/fomites to food without serving as a site for pathogen reproduction (e.g., Musca domestica in Amoebiasis).",
      neetNote: "Contrasts with biological vectors (like Anopheles or Culex) where the pathogen undergoes development/multiplication."
    },
    {
      term: "Elephantiasis (Filariasis)",
      definition: "A chronic inflammatory disease of the lymphatic vessels (primarily of the lower limbs and external genitalia) caused by the filarial nematodes Wuchereria bancrofti and Wuchereria malayi.",
      neetNote: "Transmitted by the bite of female Culex mosquitoes; leads to grotesque deformities."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. The Concept of Health & Disease: From Humors to Cellular Pathology",
      paragraphs: [
        "For centuries, health was viewed as a state of equilibrium between bodily fluids. The 'Good Humor' hypothesis, propounded by Hippocrates and the ancient Ayurvedic system of medicine, asserted that a person with 'black bile' possessed a hot temperament and suffered fevers. This belief was conclusively dismantled by William Harvey's discovery of blood circulation using experimental demonstration and the subsequent measurement of normal body temperatures in individuals with black bile using thermometers.",
        "Biology has firmly established that the neural system and the endocrine system coordinate the immune system, and our immune system maintains our overall health. Health is shaped by three interactive pillars: (1) Genetic disorders inherited from parents, (2) Microbial and parasitic infections, and (3) Lifestyle choices including nutrition, hydration, sleep, exercise, and hygiene.",
        "Health is defined by the World Health Organization (WHO) and NCERT not merely as the absence of disease or infirmity, but as a state of complete physical, mental, and social well-being. Maintaining good health requires a balanced diet, personal cleanliness, regular exercise, yoga, awareness about diseases, vaccination (immunization), hygienic disposal of wastes, and control of disease vectors."
      ],
      visual: {
        type: 'flowchart',
        flowchartSteps: [
          { step: "Mind & Neural/Endocrine System", detail: "Perception of environment, stress, and physiological signals", arrowText: "Regulates" },
          { step: "Immune System", detail: "Cellular and humoral defense mechanisms maintaining homeostasis", arrowText: "Maintains" },
          { step: "State of Health", detail: "Complete Physical, Mental, and Social Well-being", arrowText: "Sustained by" },
          { step: "Lifestyle & Hygiene", detail: "Clean water, balanced diet, exercise, waste disposal, vector control", arrowText: "" }
        ],
        caption: "Neuro-Endocrine-Immune Axis & Determinants of Human Health (NCERT Paradigm)."
      },
      importantPoints: [
        "William Harvey used the scientific method, blood circulation discovery, and thermometers to disprove the Good Humor hypothesis.",
        "Mind influences the immune system via the neuro-endocrine system, proving psychosomatic links to physical well-being."
      ]
    },
    {
      heading: "2. Bacterial Diseases in Humans: Typhoid and Pneumonia",
      paragraphs: [
        "Salmonella typhi (Typhoid / Enteric Fever): A Gram-negative, pathogenic bacterium that enters the human small intestine via food and water contaminated with fecal matter. From the intestinal mucosa, the bacteria enter the bloodstream and disseminate to various body organs.",
        "Clinical Features of Typhoid: Characterized by constant high fever (39°C to 40°C / 102.2°F to 104°F), weakness, stomach pain, constipation, headache, and loss of appetite. In severe, untreated cases, bacterial ulceration leads to intestinal perforation and death. Diagnosis is routinely confirmed by the Widal Test (an agglutination reaction detecting anti-O somatic and anti-H flagellar antibodies). A classic historical epidemiological case is Mary Mallon, nicknamed 'Typhoid Mary,' an asymptomatic carrier and professional cook who spread typhoid fever to dozens of households for years.",
        "Pneumonia: Caused by Streptococcus pneumoniae (Diplococcus pneumoniae) and Haemophilus influenzae. Unlike upper respiratory infections, pneumonia targets the terminal alveoli of the human lungs. The infected alveolar air sacs become inflamed and filled with inflammatory fluid, lymph, and dead leukocytes, resulting in severe oxygen diffusion impairment.",
        "Clinical Features of Pneumonia: Symptoms include acute fever, shaking chills, productive cough, and headache. In severe cases of respiratory failure and hypoxia, the patient's lips and fingernails turn from gray to bluish-slate color (cyanosis). Transmission occurs by inhaling airborne droplets/aerosols released by an infected patient when coughing or sneezing, or by sharing contaminated utensils, glasses, and articles.",
        "Other Bacterial Diseases Highlighted in NCERT: Dysentery (Shigella dysenteriae), Plague / Black Death (Yersinia pestis, transmitted by rat fleas Xenopsylla cheopis), and Diphtheria (Corynebacterium diphtheriae, forming a pseudomembrane in the throat)."
      ],
      tables: [
        {
          title: "Differential Diagnosis: Bacterial Typhoid vs Bacterial Pneumonia vs Viral Common Cold",
          headers: ["Feature", "Typhoid Fever", "Pneumonia", "Common Cold"],
          rows: [
            ["Causative Agent", "Salmonella typhi (Bacterium)", "Streptococcus pneumoniae / Haemophilus influenzae", "Rhinoviruses (Group of viruses)"],
            ["Primary Site Infected", "Small intestine (mucosa & Peyer's patches)", "Alveoli of lungs (fluid accumulation)", "Nose and upper respiratory tract (Lungs NOT infected)"],
            ["Mode of Transmission", "Contaminated food and drinking water", "Inhaled droplets/aerosols, shared utensils", "Inhaled droplets, fomites (pens, books, cups, mouse)"],
            ["Characteristic Symptoms", "Sustained high fever (39°–40°C), stomach pain, intestinal perforation", "Fever, chills, cough, bluish/gray lips & nails (cyanosis)", "Nasal congestion & discharge, sore throat, hoarseness, cough"],
            ["Diagnostic / Key Fact", "Confirmed by Widal Test; Typhoid Mary carrier", "Alveoli filled with fluid; severe hypoxia", "Lasts 3 to 7 days; completely spares the lung alveoli"]
          ]
        }
      ],
      importantPoints: [
        "NEET Trap: Pneumonia infects lung alveoli; Common Cold infects nasal epithelium and respiratory passage but NEVER infects the lungs.",
        "Cyanosis (bluish discoloration of fingernails and lips) is a clinical hallmark of advanced pneumonia resulting from alveolar hypoxemia."
      ]
    },
    {
      heading: "3. Viral Diseases: Rhinovirus & Upper Respiratory Tract Infection",
      paragraphs: [
        "Rhinoviruses represent a large consortium of single-stranded RNA viruses that constitute one of the most infectious human ailments—the Common Cold. Rhinoviruses infect the epithelial lining of the nasal cavities and upper respiratory passage, but never infect the pulmonary alveoli (a critical distinction repeatedly examined in NEET).",
        "Transmission occurs with exceptional ease through two distinct mechanisms: (1) Direct inhalation of aerosolized droplet nuclei emitted during sneezing, coughing, or talking; and (2) Fomite transmission through contaminated inanimate surfaces such as door handles, computer keyboards, pens, books, utensils, and drinking glasses.",
        "Pathology & Course: Infection causes acute mucosal edema, hypersecretion of mucus, nasal congestion and profuse rhinorrhea (discharge), sore throat, hoarseness of voice, cough, frontal headache, and fatigue. The condition is self-limiting, typically resolving spontaneously within 3 to 7 days as the host's innate interferon and mucosal immune responses clear the viral load."
      ],
      importantPoints: [
        "Rhinovirus targets upper respiratory tract epithelium only; it lacks tropism for alveolar pneumocytes.",
        "Fomite transmission plays a dominant role in spread across schools, offices, and households."
      ]
    },
    {
      heading: "4. Protozoan Diseases: The Complete Life Cycle & Pathogenesis of Plasmodium (Malaria)",
      paragraphs: [
        "Malaria is caused by tiny protozoan endoparasites belonging to the genus Plasmodium. Different species produce varying severity of malarial fevers: Plasmodium vivax (Benign tertian malaria), Plasmodium malariae (Quartan malaria), Plasmodium ovale (Ovale tertian malaria), and Plasmodium falciparum (Malignant tertian malaria—the most dangerous, capable of causing cerebral malaria, renal failure, and death).",
        "Plasmodium is a Digenetic Parasite requiring two distinct biological hosts to complete its complex lifecycle: (1) Human (Intermediate / Secondary host) where asexual reproduction (schizogony) occurs; and (2) Female Anopheles mosquito (Definitive / Primary host) where sexual reproduction (gametogony/syngamy) and sporogony take place.",
        "Step 1: Inoculation into Human: When an infected female Anopheles mosquito bites a human to obtain a blood meal (required for oogenesis), it injects saliva containing anticoagulants and thousands of motile, spindle-shaped Sporozoites (the infectious stage for humans).",
        "Step 2: Pre-Erythrocytic Liver Schizogony: Sporozoites travel via the bloodstream within 30–60 minutes and invade human liver parenchymal cells (hepatocytes). Inside hepatocytes, the parasite undergoes asexual multiple fission (schizogony), transforming into schizonts and multiplying into thousands of cryptozoites/merozoites, ultimately lysing the liver cells.",
        "Step 3: Erythrocytic Schizogony & Toxic Haemozoin Release: Merozoites released from the liver enter the bloodstream and penetrate Red Blood Cells (erythrocytes). Inside the RBC, the parasite passes through the Trophozoite (Signet-ring) and Schizont stages, digesting hemoglobin into globin (consumed as amino acids) and toxic iron-porphyrin heme.",
        "Haemozoin Toxicity: The parasite polymerizes free toxic heme into insoluble crystalline Haemozoin. When the erythrocytic schizont matures, the RBC ruptures synchronously, releasing dozens of new merozoites along with Haemozoin crystals into the systemic circulation. Haemozoin triggers macrophages to secrete pyrogens (IL-1, TNF-alpha), causing the classic malarial paroxysm: violent shaking chills followed by burning high fever every 48 to 72 hours.",
        "Step 4: Gametocytogenesis: In human erythrocytes, some merozoites differentiate into sexual forms called Gametocytes: smaller male microgametocytes and larger female macrogametocytes. These gametocytes remain inside circulating RBCs awaiting ingestion by a mosquito.",
        "Step 5: Ingestion & Syngamy in Mosquito Gut: When a female Anopheles mosquito bites an infected person, it ingests RBCs containing gametocytes. In the mosquito's midgut (stomach), RBCs dissolve; microgametocytes undergo exflagellation producing motile microgametes that fertilize macrogametes (Syngamy/Fertilization) to form a motile diploid zygote called an Ookinete.",
        "Step 6: Oocyst Formation & Sporogony: The ookinete penetrates the peritrophic membrane and epithelial wall of the mosquito gut, encysting on the outer surface as an Oocyst. Inside the oocyst, intense asexual multiplication (Sporogony) produces thousands of slender, motile Sporozoites. The mature oocyst ruptures, releasing sporozoites into the mosquito's hemolymph.",
        "Step 7: Migration to Mosquito Salivary Glands: Sporozoites migrate through the hemolymph and accumulate in the mosquito's Salivary Glands. The mosquito is now infectious, poised to inject sporozoites into the next human host, perpetuating the life cycle."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto font-sans">
          <rect width="800" height="520" fill="#f8fafc" rx="16" stroke="#cbd5e1" stroke-width="2"/>
          <text x="400" y="32" fill="#0f172a" font-size="18" font-weight="bold" text-anchor="middle">Complete Digenetic Life Cycle of Plasmodium (Malaria)</text>
          
          <!-- Human Stage Box -->
          <rect x="30" y="55" width="355" height="440" fill="#eff6ff" rx="12" stroke="#3b82f6" stroke-width="2"/>
          <rect x="30" y="55" width="355" height="32" fill="#2563eb" rx="10"/>
          <text x="207" y="77" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">HUMAN HOST (Asexual Cycle / Schizogony)</text>
          
          <!-- Step 1: Bite -->
          <circle cx="90" cy="125" r="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="90" y="122" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">1. Mosquito</text>
          <text x="90" y="136" fill="#1e40af" font-size="10" text-anchor="middle">Bite</text>
          <text x="200" y="120" fill="#1e3a8a" font-size="11" font-weight="600">Infectious Sporozoites</text>
          <text x="200" y="135" fill="#475569" font-size="10">Injected into bloodstream with saliva</text>
          <path d="M 120 125 L 290 125" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
          
          <!-- Step 2: Liver -->
          <rect x="60" y="175" width="295" height="65" fill="#ffffff" rx="8" stroke="#93c5fd" stroke-width="1.5"/>
          <text x="75" y="195" fill="#1e40af" font-size="12" font-weight="bold">2. Liver Schizogony (Hepatocytes)</text>
          <text x="75" y="212" fill="#334155" font-size="10.5">• Sporozoites invade liver parenchymal cells</text>
          <text x="75" y="228" fill="#334155" font-size="10.5">• Asexual fission forms thousands of Merozoites</text>
          
          <!-- Step 3: RBC -->
          <rect x="60" y="255" width="295" height="95" fill="#ffffff" rx="8" stroke="#ef4444" stroke-width="1.5"/>
          <text x="75" y="275" fill="#b91c1c" font-size="12" font-weight="bold">3. Erythrocytic Cycle (RBC Lysis)</text>
          <text x="75" y="292" fill="#334155" font-size="10.5">• Merozoites infect Red Blood Cells (RBCs)</text>
          <text x="75" y="308" fill="#334155" font-size="10.5">• Hemoglobin digested -> Toxic HAEMOZOIN</text>
          <text x="75" y="324" fill="#b91c1c" font-size="10.5" font-weight="bold">• RBC bursts -> Recurring Chills & High Fever</text>
          <text x="75" y="340" fill="#334155" font-size="10">• Releases fresh merozoites every 48–72 hours</text>
          
          <!-- Step 4: Gametocytes -->
          <rect x="60" y="365" width="295" height="70" fill="#ffffff" rx="8" stroke="#8b5cf6" stroke-width="1.5"/>
          <text x="75" y="385" fill="#6d28d9" font-size="12" font-weight="bold">4. Gametocyte Formation (Sexual Stages)</text>
          <text x="75" y="402" fill="#334155" font-size="10.5">• Parasites differentiate into male (♂) & female (♀)</text>
          <text x="75" y="418" fill="#334155" font-size="10.5">  Gametocytes in circulating peripheral blood</text>
          
          <!-- Mosquito Stage Box -->
          <rect x="415" y="55" width="355" height="440" fill="#f0fdf4" rx="12" stroke="#16a34a" stroke-width="2"/>
          <rect x="415" y="55" width="355" height="32" fill="#15803d" rx="10"/>
          <text x="592" y="77" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">MOSQUITO HOST (Sexual Cycle / Syngamy)</text>
          
          <!-- Step 5: Meal -->
          <rect x="445" y="105" width="295" height="70" fill="#ffffff" rx="8" stroke="#86efac" stroke-width="1.5"/>
          <text x="460" y="125" fill="#166534" font-size="12" font-weight="bold">5. Blood Meal by Mosquito</text>
          <text x="460" y="142" fill="#334155" font-size="10.5">• Female Anopheles mosquito ingests</text>
          <text x="460" y="158" fill="#334155" font-size="10.5">  RBCs containing ♂ and ♀ Gametocytes</text>
          
          <!-- Step 6: Gut Syngamy -->
          <rect x="445" y="190" width="295" height="85" fill="#ffffff" rx="8" stroke="#16a34a" stroke-width="1.5"/>
          <text x="460" y="210" fill="#166534" font-size="12" font-weight="bold">6. Fertilization in Mosquito Gut</text>
          <text x="460" y="227" fill="#334155" font-size="10.5">• Gametes fuse in stomach -> Motile Ookinete</text>
          <text x="460" y="243" fill="#334155" font-size="10.5">• Penetrates gut wall -> Encysts as OOCYST</text>
          <text x="460" y="259" fill="#334155" font-size="10.5">• Undergoes Sporogony to form Sporozoites</text>
          
          <!-- Step 7: Salivary Glands -->
          <rect x="445" y="290" width="295" height="85" fill="#ffffff" rx="8" stroke="#22c55e" stroke-width="1.5"/>
          <text x="460" y="310" fill="#166534" font-size="12" font-weight="bold">7. Migration to Salivary Glands</text>
          <text x="460" y="327" fill="#334155" font-size="10.5">• Oocyst bursts, releasing Sporozoites into hemolymph</text>
          <text x="460" y="343" fill="#334155" font-size="10.5">• Motile Sporozoites store in SALIVARY GLANDS</text>
          <text x="460" y="359" fill="#15803d" font-size="10.5" font-weight="bold">• Mosquito becomes infective to next human</text>
          
          <!-- Cycle connector arrows -->
          <path d="M 207 435 C 207 480, 592 480, 592 380" fill="none" stroke="#8b5cf6" stroke-width="2.5" stroke-dasharray="6,4" marker-end="url(#arrow-purple)"/>
          <text x="400" y="475" fill="#6d28d9" font-size="11" font-weight="bold" text-anchor="middle">Mosquito ingests Gametocytes (Sexual stage)</text>
          
          <path d="M 592 105 C 592 50, 90 50, 90 95" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="6,4" marker-end="url(#arrow-blue)"/>
          <text x="340" y="47" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">Mosquito bites human & injects Sporozoites</text>
          
          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
            </marker>
            <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6"/>
            </marker>
          </defs>
        </svg>`,
        caption: "High-Yield NEET Diagram: Step-by-Step Digenetic Life Cycle of Plasmodium across Human and Mosquito Hosts.",
        guide: "WHAT TO OBSERVE: (1) Infectious stage to human = Sporozoite injected from mosquito salivary glands; (2) Liver schizogony precedes RBC invasion; (3) RBC rupture releases toxic Haemozoin causing high fever and chills; (4) Gametocytes develop in human blood but fertilize in mosquito stomach; (5) Sporozoites develop in mosquito oocyst and migrate to salivary glands."
      },
      importantPoints: [
        "Primary Host (Definitive): Female Anopheles mosquito (where sexual fertilization / syngamy occurs).",
        "Secondary Host (Intermediate): Human (where asexual multiple fission / schizogony occurs).",
        "Cause of fever paroxysm: Haemozoin pigment and pyrogens released upon synchronous RBC lysis.",
        "Malignant tertian malaria is caused by Plasmodium falciparum and is potentially fatal."
      ]
    },
    {
      heading: "5. Other Protozoan, Helminthic, and Fungal Diseases",
      paragraphs: [
        "Amoebiasis (Amoebic Dysentery): Caused by Entamoeba histolytica, an endoparasite residing in the mucosal and submucosal layers of the human large intestine. Houseflies (Musca domestica) serve as mechanical carriers, transmitting trophozoites/cysts from infected feces to uncovered food and drinking water.",
        "Symptoms of Amoebiasis: Constipation alternating with severe diarrhea, abdominal colic and cramping pain, and stools containing excess mucous and dark blood clots. The parasite feeds on erythrocytes and mucosal tissue by secreting histolytic enzymes.",
        "Ascariasis: Caused by Ascaris lumbricoides, the giant human intestinal roundworm (Nematoda). Parasite eggs are passed out with the feces of infected persons, contaminating soil, groundwater, agricultural crops, and vegetables. Infection is acquired by consuming unwashed raw vegetables, fruits, or water contaminated with embryonated eggs.",
        "Symptoms of Ascariasis: Internal mucosal bleeding, muscular aches, fever, anemia, nutritional deficiency, and physical intestinal obstruction caused by heavy worm boluses in children.",
        "Filariasis / Elephantiasis: Caused by filarial nematodes Wuchereria bancrofti and Wuchereria malayi. The adult worms dwell in the lymphatic vessels of the lower limbs and inguinal lymph nodes for years, instigating chronic, slow-developing progressive inflammation.",
        "Pathology of Filariasis: Results in massive obstruction of lymph drainage, extreme edema, and gross fibrous thickening of the skin and subcutaneous tissue of lower extremities and scrotum/genitalia (hence the name Elephantiasis). Transmitted to humans through the bite of the female Culex mosquito vector.",
        "Ringworm (Dermatophytosis / Tinea): Caused by fungi belonging to three distinct genera: Microsporum, Trichophyton, and Epidermophyton. These dermatophytic fungi are keratinophilic (feed on keratin in skin, hair, and nails).",
        "Symptoms of Ringworm: Appearance of dry, scaly, erythematous circular lesions with raised borders on the skin, nails, and scalp, accompanied by intense pruritus (itching). Fungal hyphae flourish in warm, humid conditions and skin folds (groin, axilla, interdigital spaces of toes as in Athlete's foot). Spread via soil contact, sharing towels, clothes, or combs of infected individuals."
      ],
      tables: [
        {
          title: "Comprehensive Pathogen, Vector, Host Tissue & Clinical Summary Table for NEET UG",
          headers: ["Disease", "Pathogen & Classification", "Vector / Route", "Target Organ", "Hallmark Symptoms"],
          rows: [
            ["Typhoid", "Salmonella typhi (Bacterium)", "Contaminated food & water", "Small intestine, blood", "Sustained high fever (39–40°C), stomach pain, Widal +ve"],
            ["Pneumonia", "Streptococcus pneumoniae (Bacterium)", "Inhaled aerosols, utensils", "Lung Alveoli", "Alveolar fluid, chills, cough, cyanosis (blue lips/nails)"],
            ["Common Cold", "Rhinoviruses (Group of viruses)", "Aerosols, fomites (pens, cups)", "Nose & upper respiratory tract", "Nasal congestion, sore throat, cough (spares lungs; 3–7 days)"],
            ["Malaria", "Plasmodium vivax/falciparum (Protozoan)", "Female Anopheles mosquito", "Liver & Red Blood Cells", "Cyclic chills & high fever (Haemozoin), anemia, splenomegaly"],
            ["Amoebiasis", "Entamoeba histolytica (Protozoan)", "Housefly (Musca domestica) mechanical", "Large intestine", "Abdominal cramps, stools with excess mucous & blood clots"],
            ["Ascariasis", "Ascaris lumbricoides (Helminth)", "Eggs in contaminated soil/water", "Small intestine", "Internal bleeding, muscular pain, anemia, intestinal blockage"],
            ["Filariasis", "Wuchereria bancrofti/malayi (Helminth)", "Female Culex mosquito", "Lymphatic vessels & lymph nodes", "Chronic inflammation, massive swelling of lower limbs & scrotum"],
            ["Ringworm", "Microsporum / Trichophyton (Fungus)", "Soil, towels, combs, clothes", "Skin, scalp, nails", "Dry, scaly circular lesions, intense itching, warmth/moisture loving"]
          ]
        }
      ],
      importantPoints: [
        "Musca domestica (housefly) is a mechanical vector in amoebiasis; Culex is a biological vector in filariasis.",
        "Ringworm is caused by FUNGI (Microsporum, Trichophyton, Epidermophyton), NOT a worm.",
        "Wuchereria causes chronic inflammation of lymphatic vessels of the lower limbs over many years."
      ]
    },
    {
      heading: "6. Prevention and Control of Infectious Diseases & Vector Eradication",
      paragraphs: [
        "Maintenance of personal and public hygiene is the foremost shield against infectious diseases: (1) Personal hygiene includes keeping the body clean, consuming uncontaminated drinking water, food, vegetables, and fruits; (2) Public hygiene includes proper disposal of waste and excreta, periodic cleaning and disinfection of water reservoirs, pools, cesspools, and overhead tanks, and strict hygiene standards in public catering.",
        "Vector Control Strategies: For diseases transmitted by insect vectors (Malaria, Filariasis, Dengue, Chikungunya), controlling the vector and eradicating breeding places is the most effective intervention.",
        "Biological and Environmental Measures: (1) Introduction of larvivorous fish such as Gambusia into ponds and wetlands to consume mosquito larvae; (2) Spraying of insecticides in breeding ditches, drainage channels, and swampy areas; (3) Using mosquito nets, wire mesh on windows and doors; (4) Eradicating stagnant water accumulations in coolers, flower pots, tires; (5) Application of Bacillus thuringiensis bio-insecticides.",
        "Viral Vector Vectors: Dengue and Chikungunya are transmitted by the bite of the female Aedes mosquito (Aedes aegypti). Eradication of Aedes breeding sites in domestic water containers is critical for outbreak prevention."
      ],
      importantPoints: [
        "Gambusia fish feeds voraciously on mosquito larvae, acting as a potent biocontrol agent in freshwater bodies.",
        "Aedes mosquito is the primary vector for Dengue and Chikungunya; Anopheles transmits Malaria; Culex transmits Filariasis."
      ]
    }
  ],

  formulae: [
    {
      title: "Malaria Lifecycle Host Classification",
      formula: "Definitive Host = Female Anopheles (Sexual / Syngamy) | Intermediate Host = Human (Asexual / Schizogony)",
      meaning: "Classifies the biological roles of hosts in Plasmodium propagation",
      symbols: "Sporozoite (infectious to human), Gametocyte (infectious to mosquito), Haemozoin (fever toxin)",
      conditions: "Plasmodium falciparum produces lethal malignant malaria",
      whenToUse: "High-yield identification questions in NEET regarding malaria transmission."
    },
    {
      title: "Vector-Disease Association Mapping",
      formula: "Anopheles -> Malaria | Culex -> Filariasis | Aedes -> Dengue & Chikungunya | Musca domestica -> Amoebiasis (Mechanical)",
      meaning: "Definitive mapping of insect vectors to respective human infectious diseases",
      symbols: "Biological vs Mechanical transmission",
      whenToUse: "Match the column questions in NEET Biology."
    }
  ],

  visualLearning: {
    type: 'flowchart',
    flowchartSteps: [
      { step: "Pathogen Ingestion/Inoculation", detail: "Sporozoite (Mosquito) / S. typhi (Water) / E. histolytica (Food)", arrowText: "Invades" },
      { step: "Tissue Tropism & Multiplication", detail: "RBCs (Plasmodium) / Peyer's Patches (Salmonella) / Alveoli (Pneumonia)", arrowText: "Produces" },
      { step: "Toxins & Cytopathic Effect", detail: "Haemozoin release / Alveolar exudate / Mucosal ulceration", arrowText: "Triggers" },
      { step: "Clinical Paroxysm", detail: "Cyclic chills & fever / Hypoxia & Cyanosis / Blood-mucus stools", arrowText: "" }
    ],
    caption: "General Pathophysiological Cascade of Major Human Pathogenic Infections."
  },

  neetImportantPoints: [
    "William Harvey disproved the 'Good Humor' hypothesis of Hippocrates by demonstrating blood circulation and measuring normal body temperature in black bile patients.",
    "Typhoid is confirmed by the Widal Test; it causes intestinal perforation in extreme cases; Mary Mallon was a carrier.",
    "Pneumonia (Streptococcus pneumoniae, Haemophilus influenzae) causes alveolar fluid filling and cyanosis (bluish nails/lips).",
    "Common Cold (Rhinoviruses) infects the nose and respiratory passage but NEVER infects the lungs; lasts 3 to 7 days.",
    "Infectious stage of Plasmodium for humans = Sporozoite; infectious stage for mosquito = Gametocyte.",
    "Haemozoin is the toxic byproduct of hemoglobin digestion released on RBC rupture, responsible for periodic chills and high fever.",
    "Sexual reproduction (fertilization / syngamy) of Plasmodium occurs in the mosquito gut; asexual schizogony occurs in human liver and RBCs.",
    "Entamoeba histolytica lives in the human large intestine; housefly (Musca domestica) acts as a mechanical carrier.",
    "Ascariasis is transmitted via embryonated eggs in contaminated soil and water; causes internal bleeding and intestinal blockage.",
    "Filariasis (Wuchereria bancrofti, W. malayi) causes chronic lymphatic inflammation of lower limbs; transmitted by Culex mosquito.",
    "Ringworm is caused by fungi of genera Microsporum, Trichophyton, and Epidermophyton (NOT worms); thrives in heat and moisture.",
    "Gambusia fish feeds on mosquito larvae in freshwater ponds, acting as a biological control agent.",
    "Aedes mosquito transmits Dengue and Chikungunya; Anopheles transmits Malaria; Culex transmits Filariasis."
  ],

  commonConfusions: [
    {
      commonConfusion: "Common Cold and Pneumonia infect the same anatomical sites in the human respiratory system.",
      correctFact: "Common Cold (Rhinovirus) infects only the nose and upper respiratory passages, sparing the lungs. Pneumonia (Streptococcus pneumoniae) infects the lung alveoli, filling them with fluid.",
      whyItMattersForNEET: "Frequently tested in Assertion-Reason and True/False questions in NEET."
    },
    {
      commonConfusion: "Sexual reproduction of Plasmodium occurs in the human bloodstream.",
      correctFact: "Asexual reproduction (schizogony) occurs in humans (liver and RBCs). Sexual reproduction (syngamy/fertilization) occurs exclusively in the mosquito gut.",
      whyItMattersForNEET: "A perennial NEET favorite testing the concept of definitive vs intermediate hosts."
    },
    {
      commonConfusion: "Ringworm is caused by a helminthic nematode worm like roundworm or tapeworm.",
      correctFact: "Ringworm is a dermatophytic fungal infection caused by Microsporum, Trichophyton, or Epidermophyton, named for its ring-shaped skin lesions.",
      whyItMattersForNEET: "Direct NCERT matching question testing taxonomic kingdom classification."
    },
    {
      commonConfusion: "Houseflies are biological vectors of Entamoeba histolytica where the parasite reproduces.",
      correctFact: "Houseflies (Musca domestica) are strictly MECHANICAL vectors; they physically transfer cysts from feces to uncovered food without any parasite multiplication.",
      whyItMattersForNEET: "Distinguishing biological vectors (mosquitoes) from mechanical carriers (houseflies) is crucial in NEET."
    }
  ],

  quickRevision: [
    "Typhoid: Salmonella typhi | Small intestine | Widal test | Intestinal perforation | Typhoid Mary.",
    "Pneumonia: Streptococcus pneumoniae, H. influenzae | Alveoli filled with fluid | Cyanosis (blue nails).",
    "Common Cold: Rhinoviruses | Upper respiratory tract ONLY (not lungs) | Fomites | 3–7 days.",
    "Malaria: Plasmodium vivax/falciparum | Vector: Female Anopheles | Infectious to man: Sporozoites | Toxin: Haemozoin (chills/fever) | Syngamy in mosquito gut.",
    "Amoebiasis: Entamoeba histolytica | Large intestine | Mechanical vector: Housefly | Blood-mucus stools.",
    "Ascariasis: Ascaris lumbricoides | Contaminated soil/water eggs | Intestinal blockage & anemia.",
    "Elephantiasis: Wuchereria bancrofti/malayi | Lymphatic vessels of lower limbs | Vector: Culex mosquito.",
    "Ringworm: Microsporum, Trichophyton, Epidermophyton | Keratinophilic fungi | Scaly pruritic lesions.",
    "Vector Control: Gambusia fish in ponds (eats larvae) | Aedes for Dengue/Chikungunya | Culex for Filariasis."
  ],

  practiceQuestions: [
    {
      question: "Which of the following stages of Plasmodium is directly responsible for the recurring chills and high fever observed in malarial patients?",
      options: [
        "Invasion of liver hepatocytes by motile sporozoites",
        "Synchronous rupture of RBCs releasing toxic haemozoin and merozoites into blood",
        "Formation of microgametes and macrogametes in peripheral circulation",
        "Penetration of the mosquito gut wall by ookinetes"
      ],
      correctAnswer: 1,
      explanation: "When erythrocytic schizonts mature inside human red blood cells, the RBCs rupture synchronously, releasing merozoites and the toxic insoluble pigment haemozoin (digested hemoglobin breakdown product). Haemozoin stimulates macrophages to release pyrogens that trigger cyclic chills and high fever.",
      difficulty: "Medium",
      conceptTested: "Malaria Pathogenesis & Haemozoin Toxicity"
    },
    {
      question: "Select the correct statement distinguishing Common Cold from Pneumonia:",
      options: [
        "Common cold is bacterial while pneumonia is caused by rhinoviruses.",
        "Pneumonia infects the lung alveoli causing fluid accumulation, whereas common cold infects the nose and respiratory passage but not the lungs.",
        "Common cold can be diagnosed using the Widal test whereas pneumonia requires biopsy.",
        "Pneumonia causes symptoms for 3–7 days while common cold leads to cyanosis of lips and fingernails."
      ],
      correctAnswer: 1,
      explanation: "As stated verbatim in NCERT, Rhinoviruses infect the nose and upper respiratory passages but do not infect the lungs, resolving in 3–7 days. In contrast, Pneumonia (Streptococcus pneumoniae, Haemophilus influenzae) infects the alveoli of the lungs, filling them with fluid and impairing gas exchange, leading to cyanosis in severe cases.",
      difficulty: "Easy",
      conceptTested: "Differential Diagnosis of Respiratory Infections"
    },
    {
      question: "A doctor examines a patient with severe chronic inflammation and swelling of the lower limbs and scrotum. The diagnostic test confirms lymphatic vessel obstruction. The vector transmitting this disease is:",
      options: [
        "Female Anopheles mosquito",
        "Female Aedes mosquito",
        "Female Culex mosquito",
        "Housefly (Musca domestica)"
      ],
      correctAnswer: 2,
      explanation: "The condition described is Filariasis / Elephantiasis caused by Wuchereria bancrofti or Wuchereria malayi. The biological vector that transmits the infective filarial larvae to humans through its bite is the female Culex mosquito.",
      difficulty: "Easy",
      conceptTested: "Filariasis Etiology and Vectors"
    },
    {
      question: "Which of the following combinations correctly matches the disease, its causative organism, and its primary mode of transmission?",
      options: [
        "Typhoid — Salmonella typhi — Inhaled airborne droplet nuclei",
        "Amoebic dysentery — Entamoeba histolytica — Contaminated food and water via houseflies as mechanical carriers",
        "Ringworm — Ascaris lumbricoides — Direct contact with infected animal fur",
        "Pneumonia — Rhinoviruses — Fecal-oral route through contaminated drinking water"
      ],
      correctAnswer: 1,
      explanation: "Entamoeba histolytica causes amoebiasis (amoebic dysentery) in the human large intestine. Houseflies (Musca domestica) act as mechanical carriers transporting cysts from feces to uncovered food and water, transmitting the infection through ingestion.",
      difficulty: "Medium",
      conceptTested: "Infectious Diseases & Modes of Transmission"
    }
  ],

  pyqs: [
    {
      id: "pyq-bio-health-1",
      year: 2023,
      exam: "NEET UG",
      examName: "NEET UG 2023",
      examYear: "2023",
      verifiedExam: "NEET UG 2023",
      question: "Match List I with List II:\nList I (Disease):\n(A) Typhoid\n(B) Elephantiasis\n(C) Ringworm\n(D) Filariasis vector\n\nList II (Causative agent/Vector):\n(I) Wuchereria bancrofti\n(II) Microsporum\n(III) Salmonella typhi\n(IV) Culex mosquito\n\nChoose the correct answer from the options given below:",
      options: [
        "A-III, B-I, C-II, D-IV",
        "A-I, B-III, C-II, D-IV",
        "A-III, B-IV, C-II, D-I",
        "A-II, B-I, C-III, D-IV"
      ],
      correctAnswer: 0,
      explanation: "Typhoid is caused by Salmonella typhi (A-III); Elephantiasis is caused by the filarial worm Wuchereria bancrofti (B-I); Ringworm is a fungal infection caused by Microsporum (C-II); and the vector for filariasis is the female Culex mosquito (D-IV). Thus, option 0 is correct.",
      difficulty: "Easy",
      conceptTested: "Common Human Pathogens and Vectors",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.1",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2023 Official Paper"
    },
    {
      id: "pyq-bio-health-2",
      year: 2021,
      exam: "NEET UG",
      examName: "NEET UG 2021",
      examYear: "2021",
      verifiedExam: "NEET UG 2021",
      question: "Which of the following stages of Plasmodium is infectious to human beings?",
      options: [
        "Trophozoite",
        "Sporozoite",
        "Gametocyte",
        "Merozoite"
      ],
      correctAnswer: 1,
      explanation: "The infectious stage of Plasmodium for humans is the Sporozoite. It is injected into human blood when an infected female Anopheles mosquito takes a blood meal.",
      difficulty: "Easy",
      conceptTested: "Plasmodium Life Cycle - Infectious Stage",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.1",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2021 Official Paper"
    },
    {
      id: "pyq-bio-health-3",
      year: 2020,
      exam: "NEET UG",
      examName: "NEET UG 2020",
      examYear: "2020",
      verifiedExam: "NEET UG 2020",
      question: "Identify the wrong statement with reference to the gene 'I' that controls ABO blood groups or infectious disease vectors:",
      options: [
        "A person will have only two of the three alleles.",
        "When IA and IB are present together, they both express the same type of sugar.",
        "Allele 'i' does not produce any sugar.",
        "The gene (I) has three alleles."
      ],
      correctAnswer: 1,
      explanation: "When IA and IB are present together, they express DIFFERENT types of sugars on RBC membranes because of co-dominance. IA produces A-antigen sugar, and IB produces B-antigen sugar.",
      difficulty: "Medium",
      conceptTested: "ABO Blood Grouping & Antigens",
      ncertReference: "NCERT Class 12 Biology, Chapter 5 & 8",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2020 Official Paper"
    },
    {
      id: "pyq-bio-health-4",
      year: 2019,
      exam: "NEET UG",
      examName: "NEET UG 2019",
      examYear: "2019",
      verifiedExam: "NEET UG 2019",
      question: "Which of the following is not a bacterial disease?",
      options: [
        "Cholera",
        "Plague",
        "Pneumonia",
        "Polio"
      ],
      correctAnswer: 3,
      explanation: "Polio (Poliomyelitis) is caused by Poliovirus (an enterovirus, RNA virus). Cholera (Vibrio cholerae), Plague (Yersinia pestis), and Pneumonia (Streptococcus pneumoniae / Haemophilus influenzae) are all bacterial diseases.",
      difficulty: "Easy",
      conceptTested: "Classification of Pathogens",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.1",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2019 Official Paper"
    },
    {
      id: "pyq-bio-health-5",
      year: 2016,
      exam: "NEET UG",
      examName: "NEET Phase-I 2016",
      examYear: "2016",
      verifiedExam: "NEET Phase-I 2016",
      question: "In which of the following diseases does the parasite replicate sexually inside the body of the mosquito vector?",
      options: [
        "Amoebiasis",
        "Malaria",
        "Filariasis",
        "Ascariasis"
      ],
      correctAnswer: 1,
      explanation: "In Malaria, Plasmodium undergoes sexual reproduction (fertilization / syngamy of microgametes and macrogametes) inside the stomach/gut of the female Anopheles mosquito vector.",
      difficulty: "Easy",
      conceptTested: "Plasmodium Life Cycle - Sexual Reproduction",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.1",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "AIPMT/NEET 2016 Official Paper"
    }
  ]
};
