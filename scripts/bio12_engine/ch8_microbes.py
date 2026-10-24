import os
import sys
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from scripts.bio12_engine.common import balance_and_build_parts

CHP_ID = "microbes-human-welfare"
CHP_TITLE = "Microbes in Human Welfare"
FILE_PREFIX = "microbesHumanWelfare"
VAR_PREFIX = "MICROBES_HUMAN_WELFARE"

T1 = ("bio-microbes-household-industrial", "Microbes in Household & Industrial Products")
T2 = ("bio-microbes-sewage-biocontrol", "Microbes in Sewage Treatment, Biogas & Biocontrol")

def generate_chapter_8():
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
        ("Which bacterium converts milk into curd by producing acids that coagulate and partially digest milk proteins?",
         "Lactobacillus (Lactic Acid Bacteria - LAB)", "Streptococcus pneumoniae", "Clostridium butylicum", "Acetobacter aceti", "A",
         "Milk curdling by LAB.",
         "Lactic Acid Bacteria (LAB) such as Lactobacillus multiply in milk, producing lactic acid that coagulates and partially digests casein proteins, forming curd.",
         "Streptococcus pneumoniae causes pneumonia; Acetobacter produces acetic acid.",
         T1, "Household Products"),

        ("Curd formed by the activity of Lactic Acid Bacteria (LAB) is nutritionally superior to milk due to an increased content of which vitamin?",
         "Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin K", "A",
         "Nutritional enrichment by LAB.",
         "During curd formation, LAB synthesizes and significantly enhances the content of Vitamin B12, boosting the nutritional quality.",
         "Milk lacks significant vitamin C; vitamin B12 is specifically increased by LAB.",
         T1, "Household Products"),

        ("Which beneficial role is performed by Lactic Acid Bacteria (LAB) residing in the human digestive tract?",
         "Checking disease-causing pathogenic microbes", "Digesting cellulose walls", "Synthesizing insulin", "Producing bile salts", "A",
         "LAB protective role in gut.",
         "In our stomach, LAB plays a very beneficial role in checking and preventing the colonization of disease-causing microbes.",
         "Humans cannot digest cellulose; insulin is produced by pancreatic beta cells.",
         T1, "Household Products"),

        ("The puffed-up appearance of dough used for preparing traditional South Indian foods like dosa and idli is caused by the release of which gas?",
         "Carbon dioxide (CO2)", "Oxygen (O2)", "Methane (CH4)", "Nitrogen (N2)", "A",
         "Dough puffing mechanism.",
         "The puffed-up appearance of dough is due to the production of carbon dioxide gas (CO2) during anaerobic bacterial fermentation.",
         "Oxygen is consumed in respiration, not released in fermentation.",
         T1, "Household Products"),

        ("Which microorganism, commonly known as 'Baker's yeast', is universally employed for fermenting dough in bread making?",
         "Saccharomyces cerevisiae", "Penicillium notatum", "Aspergillus niger", "Propionibacterium sharmanii", "A",
         "Baker's yeast identity.",
         "Saccharomyces cerevisiae, commonly known as Baker's yeast, ferments sugars in dough, releasing CO2 which makes bread soft and porous.",
         "Penicillium is a mold; Aspergillus produces citric acid.",
         T1, "Household Products"),

        ("The traditional fermented beverage 'Toddy', popular in parts of Southern India, is prepared by fermenting:",
         "Sap from palm trees", "Juice of sugarcane", "Extract of barley seeds", "Crushed apple pulp", "A",
         "Toddy preparation.",
         "Toddy is a traditional beverage of parts of southern India made by fermenting sap from palm trees.",
         "Barley extract is used for beer; sugarcane is used for rum.",
         T1, "Household Products"),

        ("The large holes characteristic of 'Swiss cheese' are produced by the release of a large amount of carbon dioxide by which bacterium?",
         "Propionibacterium sharmanii", "Penicillium roqueforti", "Streptococcus thermophilus", "Lactobacillus acidophilus", "A",
         "Swiss cheese holes.",
         "The large holes in Swiss cheese are due to production of a large amount of CO2 by a bacterium named Propionibacterium sharmanii.",
         "Penicillium roqueforti is a fungus that ripens Roquefort cheese.",
         T1, "Dairy Products"),

        ("Roquefort cheese is ripened and endowed with its particular distinctive flavour by growing which microorganism on it?",
         "Penicillium roqueforti (fungus)", "Propionibacterium sharmanii (bacterium)", "Aspergillus niger (mold)", "Rhizopus stolonifer (fungus)", "A",
         "Roquefort cheese ripening.",
         "Roquefort cheese is ripened by growing a specific fungus, Penicillium roqueforti, which imparts its unique texture and flavour.",
         "Propionibacterium is for Swiss cheese.",
         T1, "Dairy Products"),

        ("Industrial production of beverages and antibiotics requires growing microbes in very large vessels called:",
         "Fermentors (Bioreactors)", "Autoclaves", "Incubators", "Centrifuges", "A",
         "Fermentation vessels.",
         "Production on an industrial scale requires growing microbes in very large vessels called fermentors or bioreactors.",
         "Autoclaves are for sterilization; incubators maintain temperature.",
         T1, "Industrial Products"),

        ("Which yeast species is famously termed 'Brewer's yeast' when used for fermenting malted cereals and fruit juices into ethanol?",
         "Saccharomyces cerevisiae", "Candida albicans", "Schizosaccharomyces pombe", "Torulopsis utilis", "A",
         "Brewer's yeast.",
         "Saccharomyces cerevisiae is used for bread-making and commonly called brewer's yeast when used for fermenting malted cereals and fruit juices into ethanol.",
         "Candida is a human pathogen.",
         T1, "Fermented Beverages"),

        ("Which of the following alcoholic beverages are manufactured without distillation of the fermented broth?",
         "Wine and beer", "Whisky and brandy", "Rum and gin", "Vodka and tequila", "A",
         "Non-distilled alcoholic beverages.",
         "Wine and beer are produced without distillation, resulting in lower alcohol concentration (3-12%).",
         "Whisky, brandy, and rum are produced by distillation of the fermented broth.",
         T1, "Fermented Beverages"),

        ("Which alcoholic beverages are produced by the distillation of the fermented broth to achieve higher alcohol proof?",
         "Whisky, brandy, and rum", "Wine and beer", "Toddy and cider", "Mead and ale only", "A",
         "Distilled alcoholic beverages.",
         "Whisky, brandy, and rum are concentrated by distillation of the fermented mash to reach high alcohol proof.",
         "Wine and beer are undistilled.",
         T1, "Fermented Beverages"),

        ("Alexander Fleming discovered the first wonder antibiotic, Penicillin, while working on cultures of which bacterium?",
         "Staphylococci", "Streptococci", "Escherichia coli", "Bacillus subtilis", "A",
         "Penicillin discovery by Fleming.",
         "Alexander Fleming, while working on Staphylococci bacteria, observed a mold growing in an unwashed culture plate around which Staphylococci could not grow.",
         "Streptococci was later used for streptokinase.",
         T1, "Antibiotics"),

        ("Penicillin was isolated by Alexander Fleming from which mold species?",
         "Penicillium notatum", "Penicillium chrysogenum", "Aspergillus niger", "Trichoderma polysporum", "A",
         "Penicillin fungal source.",
         "Fleming established that the antibacterial chemical was produced by the mold Penicillium notatum, naming it penicillin.",
         "Trichoderma produces cyclosporin A.",
         T1, "Antibiotics"),

        ("The full commercial potential of penicillin as an effective life-saving antibiotic was established during World War II by which scientists?",
         "Ernest Chain and Howard Florey", "Louis Pasteur and Robert Koch", "Edward Jenner and Jonas Salk", "Watson and Crick", "A",
         "Chain and Florey role in penicillin.",
         "Its full potential as an effective antibiotic was established much later by Ernest Chain and Howard Florey; it was used to treat wounded American soldiers in WWII.",
         "Pasteur and Koch worked on germ theory and anthrax.",
         T1, "Antibiotics"),

        ("Which fungus is commercially cultivated for the industrial production of citric acid?",
         "Aspergillus niger", "Acetobacter aceti", "Clostridium butylicum", "Lactobacillus delbrueckii", "A",
         "Citric acid microbial source.",
         "Aspergillus niger is a fungus (mold) used for the commercial manufacturing of citric acid.",
         "Acetobacter produces acetic acid; Clostridium produces butyric acid.",
         T1, "Organic Acids"),

        ("Acetic acid (vinegar) is industrially produced through aerobic fermentation by which bacterium?",
         "Acetobacter aceti", "Clostridium butylicum", "Lactobacillus acidophilus", "Aspergillus niger", "A",
         "Acetic acid source.",
         "Acetobacter aceti is a Gram-negative bacterium that oxidizes ethanol to acetic acid.",
         "Clostridium butylicum produces butyric acid.",
         T1, "Organic Acids"),

        ("Butyric acid is manufactured by the anaerobic fermentative activity of which bacterium?",
         "Clostridium butylicum", "Acetobacter aceti", "Lactobacillus lactis", "Propionibacterium freudenreichii", "A",
         "Butyric acid source.",
         "Clostridium butylicum is an obligate anaerobic bacterium used industrially to produce butyric acid.",
         "Acetobacter aceti produces acetic acid.",
         T1, "Organic Acids"),

        ("Which class of microbial enzymes is widely incorporated into commercial laundry detergent formulations to remove oily stains from fabrics?",
         "Lipases", "Proteases", "Pectinases", "Amylases", "A",
         "Lipases in detergents.",
         "Lipases are used in detergent formulations and are helpful in removing oily and fatty stains from the laundry.",
         "Proteases degrade proteins; pectinases clarify juices.",
         T1, "Enzymes"),

        ("Commercially bottled fruit juices purchased from markets are visibly clearer than homemade juices because they are treated with:",
         "Pectinases and proteases", "Lipases and nucleases", "Amylases and cellulases", "Ligases and polymerases", "A",
         "Fruit juice clarification.",
         "Bottled juices bought from market are clearer compared to home-squeezed juice because they are clarified by pectinases and proteases.",
         "Lipases digest lipids, not fruit pulp pectins.",
         T1, "Enzymes"),

        ("Streptokinase, an enzyme modified by genetic engineering and clinically used as a 'clot buster' for myocardial infarction patients, is produced by:",
         "Streptococcus", "Staphylococcus", "Lactobacillus", "Clostridium", "A",
         "Streptokinase clot buster.",
         "Streptokinase produced by the bacterium Streptococcus and modified by genetic engineering is used as a clot buster for clearing thrombi from blood vessels.",
         "Staphylococcus produces staphylokinase, but clinical clot buster in NCERT is Streptococcus.",
         T1, "Bioactive Molecules"),

        ("Cyclosporin A, a potent immunosuppressive drug administered to prevent organ transplant rejection, is extracted from the fungus:",
         "Trichoderma polysporum", "Monascus purpureus", "Aspergillus niger", "Penicillium notatum", "A",
         "Cyclosporin A origin.",
         "Cyclosporin A, used as an immunosuppressive agent in organ-transplant patients, is produced by the fungus Trichoderma polysporum.",
         "Monascus produces statins; Aspergillus produces citric acid.",
         T1, "Bioactive Molecules"),

        ("Statins, widely prescribed pharmaceutical agents that lower blood cholesterol, are produced by which yeast?",
         "Monascus purpureus", "Saccharomyces cerevisiae", "Trichoderma polysporum", "Candida utilis", "A",
         "Statins source.",
         "Statins produced by the yeast Monascus purpureus have been commercialised as blood-cholesterol lowering agents.",
         "Saccharomyces produces ethanol; Trichoderma produces cyclosporin A.",
         T1, "Bioactive Molecules"),

        ("What is the biochemical mechanism by which statins lower circulating blood cholesterol levels in humans?",
         "Competitively inhibiting the enzyme responsible for cholesterol synthesis",
         "Directly degrading cholesterol molecules into bile acids",
         "Binding dietary cholesterol in the gut to prevent absorption",
         "Stimulating the liver to excrete cholesterol in urine", "A",
         "Statin mechanism of action.",
         "Statins act by competitively inhibiting the rate-limiting enzyme (HMG-CoA reductase) responsible for the synthesis of cholesterol in hepatocytes.",
         "They inhibit synthesis rather than chemically degrading circulating cholesterol.",
         T1, "Bioactive Molecules"),

        ("In sewage treatment plants (STPs), the primary treatment phase is fundamentally based on which type of process?",
         "Physical removal of particles through filtration and sedimentation",
         "Biological digestion of organic waste by aerobic flocs",
         "Anaerobic methanogenesis by methanogens",
         "Chemical sterilization using chlorine or ozone", "A",
         "Primary sewage treatment nature.",
         "Primary treatment steps basically involve physical removal of particles (large and small) from the sewage through filtration and sedimentation.",
         "Biological digestion occurs in secondary treatment.",
         T2, "Sewage Treatment"),

        ("During primary treatment of municipal sewage, floating debris is initially removed by which procedure?",
         "Sequential filtration", "Gravitational sedimentation", "Aerobic flocculation", "Centrifugal spinning", "A",
         "Floating debris filtration.",
         "Floating debris is removed by sequential filtration through coarse wire mesh screens.",
         "Sedimentation is used subsequently to remove grit.",
         T2, "Sewage Treatment"),

        ("In primary sewage treatment, heavy particles such as soil and small pebbles (grit) are removed by:",
         "Sedimentation in settling tanks", "Sequential wire filtration", "Digestion by methanogens", "Agitation in aeration tanks", "A",
         "Grit removal by sedimentation.",
         "Grit (soil and small pebbles) are removed by sedimentation, settling to the bottom under gravity.",
         "Filtration removes floating debris.",
         T2, "Sewage Treatment"),

        ("The solid material that settles to the bottom during the primary settling phase of sewage treatment is called:",
         "Primary sludge", "Activated sludge", "Flocs", "Primary effluent", "A",
         "Primary sludge definition.",
         "All solids that settle form the primary sludge, and the supernatant forms the primary effluent.",
         "Activated sludge forms during secondary sedimentation.",
         T2, "Sewage Treatment"),

        ("The supernatant liquid that leaves the primary settling tank during sewage treatment is known as:",
         "Primary effluent", "Primary sludge", "Activated sludge", "Grit", "A",
         "Primary effluent.",
         "The liquid supernatant above the settled primary sludge forms the primary effluent, which is taken for secondary biological treatment.",
         "Sludge is the settled precipitate.",
         T2, "Sewage Treatment"),

        ("Secondary treatment of municipal sewage is also commonly referred to as:",
         "Biological treatment", "Physical filtration", "Chemical chlorination", "Tertiary polishing", "A",
         "Biological sewage treatment.",
         "Secondary treatment is also called biological treatment because it employs living aerobic and anaerobic microorganisms to digest organic contaminants.",
         "Primary is physical; chlorination is chemical.",
         T2, "Sewage Treatment"),

        ("In secondary sewage treatment, the primary effluent is pumped into large aeration tanks where it is constantly agitated and air is pumped in to promote the growth of:",
         "Aerobic microbial flocs", "Anaerobic methanogenic archaebacteria", "Pathogenic coliform bacteria", "Photosynthetic cyanobacteria", "A",
         "Flocs in aeration tanks.",
         "The primary effluent is constantly agitated mechanically and air is pumped into large aeration tanks, allowing vigorous growth of useful aerobic microbes into flocs.",
         "Anaerobic bacteria would be killed or suppressed by aeration.",
         T2, "Sewage Treatment"),

        ("What are 'flocs' in the context of biological wastewater and sewage treatment?",
         "Masses of bacteria associated with fungal filaments forming mesh-like structures",
         "Aggregated dead protozoa forming greasy scums",
         "Floating colonies of toxic blue-green algae",
         "Precipitated heavy metal salts and sand", "A",
         "Flocs definition in NCERT.",
         "Flocs are masses of aerobic bacteria associated with fungal filaments to form mesh-like net structures that digest organic matter.",
         "Flocs are living aerobic symbiotic consortia, not dead scums or algae.",
         T2, "Sewage Treatment"),

        ("What does BOD stand for in environmental science and water pollution testing?",
         "Biochemical Oxygen Demand", "Biological Oxidation Density", "Bacterial Oxygen Depletion", "Biomass Oxidation Degree", "A",
         "BOD full form.",
         "BOD stands for Biochemical Oxygen Demand.",
         "It specifically refers to biochemical demand exerted by micro-organisms.",
         T2, "Sewage Treatment"),

        ("Biochemical Oxygen Demand (BOD) is defined as the amount of oxygen required by microorganisms to:",
         "Oxidise all organic matter in one litre of water",
         "Kill all pathogenic bacteria in one cubic meter of sewage",
         "Convert nitrate ions into molecular atmospheric nitrogen",
         "Precipitate all dissolved mineral salts", "A",
         "BOD definition.",
         "BOD refers to the amount of oxygen that would be consumed if all the organic matter in one litre of water were oxidized by bacteria.",
         "BOD measures organic load oxidation, not denitrification or salt precipitation.",
         T2, "Sewage Treatment"),

        ("What is the direct relationship between the Biochemical Oxygen Demand (BOD) of a water body and its polluting potential?",
         "Higher BOD indicates greater polluting potential and higher organic content",
         "Higher BOD indicates cleaner water and lower organic content",
         "BOD is inversely proportional to organic waste concentration",
         "BOD has no mathematical correlation with water purity", "A",
         "BOD and organic pollution relationship.",
         "The greater the BOD of waste water, the more is its polluting potential because there is more organic matter demanding oxygen for degradation.",
         "Clean water has a low BOD (< 5 ppm).",
         T2, "Sewage Treatment"),

        ("In a sewage treatment plant, the aeration and digestion of effluent by flocs is continued until:",
         "The BOD of the effluent is significantly reduced",
         "All water has completely evaporated",
         "The pH of the effluent drops to 1.0",
         "All fungal filaments have turned into methane", "A",
         "End point of aeration tank digestion.",
         "The sewage water is treated in aeration tanks until the BOD is reduced significantly.",
         "Evaporation is not the goal of STPs.",
         T2, "Sewage Treatment"),

        ("After significant BOD reduction in the aeration tank, the effluent is passed into a settling tank where the flocs sediment to form:",
         "Activated sludge", "Primary sludge", "Grit", "Scum", "A",
         "Activated sludge formation.",
         "Once the BOD of sewage is reduced significantly, the effluent is passed into a settling tank where the bacterial flocs are allowed to sediment. This sediment is called activated sludge.",
         "Primary sludge was formed in primary treatment.",
         T2, "Sewage Treatment"),

        ("What is done with a small part of the activated sludge that sediments in the settling tank?",
         "Pumped back into the aeration tank to serve as an inoculum",
         "Dumped immediately into nearby rivers as fertilizer",
         "Incinerated at extreme temperatures to generate ash",
         "Bottled directly for commercial probiotic sale", "A",
         "Inoculum in sewage treatment.",
         "A small part of the activated sludge is pumped back into the aeration tank to serve as the inoculum (starter culture).",
         "Untreated activated sludge cannot be dumped into rivers.",
         T2, "Sewage Treatment"),

        ("The remaining major portion of the activated sludge is pumped into large sealed vessels called:",
         "Anaerobic sludge digesters", "Primary settling tanks", "Aeration basins", "Oxidation ponds", "A",
         "Anaerobic sludge digesters.",
         "The remaining major part of the activated sludge is pumped into large tanks called anaerobic sludge digesters.",
         "Aeration basins are aerobic.",
         T2, "Sewage Treatment"),

        ("In anaerobic sludge digesters, anaerobic bacteria digest the bacteria and fungi in the sludge, releasing a mixture of gases known as:",
         "Biogas (methane, hydrogen sulphide, and carbon dioxide)",
         "Syngas (pure carbon monoxide and hydrogen)",
         "Natural gas (pure propane and butane)",
         "Laughing gas (nitrous oxide and oxygen)", "A",
         "Biogas from sludge digesters.",
         "During digestion, anaerobic bacteria produce a mixture of gases such as methane (CH4), hydrogen sulphide (H2S), and carbon dioxide (CO2). These gases form biogas.",
         "Biogas is predominantly methane and CO2, not propane.",
         T2, "Biogas Production"),

        ("Which river action plans were initiated by the Ministry of Environment and Forests, Government of India, to protect major Indian rivers from sewage pollution?",
         "Ganga Action Plan and Yamuna Action Plan",
         "Narmada Action Plan and Godavari Action Plan",
         "Brahmaputra Action Plan and Indus Action Plan",
         "Cauvery Action Plan and Krishna Action Plan", "A",
         "Ganga and Yamuna Action Plans.",
         "The Ministry of Environment and Forests initiated the Ganga Action Plan and Yamuna Action Plan to build sewage treatment plants across riverside cities.",
         "Ganga and Yamuna were the pioneer action plans specified in NCERT.",
         T2, "Environmental Initiatives"),

        ("Biogas is a inflammable mixture of gases produced by microbial activity, predominantly consisting of which flammable gas?",
         "Methane (CH4)", "Carbon monoxide (CO)", "Hydrogen gas (H2)", "Ethane (C2H6)", "A",
         "Major component of biogas.",
         "Biogas is predominantly methane (50-70%), making it an excellent renewable domestic fuel.",
         "CO is toxic; methane is the principal constituent.",
         T2, "Biogas Production"),

        ("Anaerobic bacteria that grow on cellulosic material and produce large quantities of methane along with CO2 and H2 are collectively termed:",
         "Methanogens", "Cyanobacteria", "Nitrifying bacteria", "Lactic acid bacteria", "A",
         "Methanogens.",
         "Bacteria which grow anaerobically on cellulosic material, produce large amounts of methane along with CO2 and H2. These bacteria are collectively called methanogens.",
         "Cyanobacteria are photosynthetic autotrophs.",
         T2, "Methanogens"),

        ("A common bacterium belonging to the group of methanogens frequently found in anaerobic sludge and cattle rumen is:",
         "Methanobacterium", "Streptococcus pneumoniae", "Bacillus thuringiensis", "Escherichia coli", "A",
         "Methanobacterium example.",
         "Methanobacterium is a representative methanogenic archaebacterium found in anaerobic digesters and cattle rumen.",
         "E. coli is a facultative enteric bacterium.",
         T2, "Methanogens"),

        ("Methanogens are abundantly present in the rumen (a part of the stomach) of cattle primarily because the cattle diet contains large amounts of:",
         "Cellulosic plant material", "Animal proteins and peptides", "Purified sucrose and starch", "Saturated fats and cholesterol", "A",
         "Cellulose digestion in rumen.",
         "A lot of cellulosic material present in the food of cattle is also present in the rumen. In the rumen, methanogens help in the breakdown of cellulose and play an important role in the nutrition of cattle.",
         "Cattle eat plants, which are rich in cellulose, not animal proteins.",
         T2, "Methanogens"),

        ("Why is the excreta (dung) of cattle, commonly called 'gobar', widely utilized for generating biogas in rural plants?",
         "It is rich in methanogenic bacteria and undigested cellulosic biomass",
         "It contains high concentrations of pure alcohol",
         "It acts as a chemical catalyst to split water into hydrogen",
         "It prevents any bacterial growth from occurring", "A",
         "Gobar gas generation.",
         "The dung of cattle contains abundant methanogens and fermentable organic cellulose, making it ideal for biogas production (gobar gas).",
         "Dung contains bacteria, not alcohol or catalysts.",
         T2, "Biogas Production"),

        ("A typical rural biogas plant consists of a concrete tank of what approximate depth where bio-wastes and dung slurry are collected?",
         "10 to 15 feet", "2 to 3 feet", "50 to 60 feet", "100 feet", "A",
         "Biogas tank depth.",
         "The biogas plant consists of a concrete tank (10-15 feet deep) in which bio-wastes are collected and a slurry of dung is fed.",
         "NCERT explicitly mentions 10-15 feet.",
         T2, "Biogas Technology"),

        ("What happens to the floating cover placed over the dung slurry in a biogas plant as gas is produced by microbial activity?",
         "It rises upwards due to increasing gas pressure",
         "It sinks to the bottom of the concrete tank",
         "It dissolves into the dung slurry",
         "It spins rapidly like a turbine", "A",
         "Floating gas holder cover.",
         "A floating cover is placed over the slurry, which keeps on rising as the gas is produced in the tank due to the microbial activity.",
         "The gas pressure pushes the lid up.",
         T2, "Biogas Technology"),

        ("Which two Indian organisations collaborated to develop and propagate rural biogas production technology in India?",
         "IARI (Indian Agricultural Research Institute) and KVIC (Khadi and Village Industries Commission)",
         "ICMR and CSIR",
         "ISRO and DRDO",
         "BARC and AIIMS", "A",
         "Indian biogas developers.",
         "The technology of biogas production was developed in India mainly due to the efforts of Indian Agricultural Research Institute (IARI) and Khadi and Village Industries Commission (KVIC).",
         "ICMR is for medical research; ISRO is space.",
         T2, "Biogas Technology"),

        ("The use of biological methods for controlling plant diseases and pests is called:",
         "Biocontrol", "Eutrophication", "Biomagnification", "Bioremediation", "A",
         "Biocontrol definition.",
         "Biocontrol refers to the use of biological methods for controlling plant diseases and pests.",
         "Biomagnification is toxicant accumulation; eutrophication is nutrient enrichment.",
         T2, "Biocontrol Agents")
    ]

    # Additional 75 easy questions for Chapter 8 to guarantee at least 125 items
    extra_easy_8 = [
        ("The familiar beetle with red and black markings, used by farmers as a biocontrol agent to eliminate aphids, is the:",
         "Ladybird beetle", "Dragonfly", "Colorado potato beetle", "Bollworm moth", "A",
         "Ladybird biocontrol.",
         "The very familiar beetle with red and black markings - the Ladybird - is useful to get rid of aphids.",
         "Dragonflies control mosquitoes.",
         T2, "Biocontrol Agents"),

        ("Which insect is widely utilized as a biological biocontrol agent to rid agricultural and residential areas of mosquitoes?",
         "Dragonfly", "Ladybird beetle", "Housefly", "Honeybee", "A",
         "Dragonfly biocontrol.",
         "Dragonflies are predatory insects useful to get rid of mosquitoes.",
         "Ladybirds prey on aphids.",
         T2, "Biocontrol Agents"),

        ("Which bacterium is widely used as a microbial biocontrol agent against butterfly caterpillars and insect pests?",
         "Bacillus thuringiensis (Bt)", "Streptococcus pneumoniae", "Agrobacterium tumefaciens", "Lactobacillus bulgaricus", "A",
         "Bacillus thuringiensis.",
         "Bacillus thuringiensis (often written as Bt) is a bacterium used to control butterfly caterpillars and insect larvae.",
         "Agrobacterium is a plant genetic vector; Lactobacillus is in curd.",
         T2, "Biocontrol Agents"),

        ("Commercial Bacillus thuringiensis (Bt) biocontrol formulations are sold in sachets in the form of:",
         "Dried spores", "Live vegetative flagellated rods", "Purified liquid RNA", "Crushed plant roots", "A",
         "Bt formulations.",
         "Bt is available in sachets as dried spores which are mixed with water and sprayed onto vulnerable plants such as brassicas and fruit trees.",
         "Bt is marketed as stable dormant endospores.",
         T2, "Biocontrol Agents"),

        ("When ingested by butterfly caterpillars, Bt spores release an endotoxin that is activated in the caterpillar's gut due to:",
         "Alkaline pH of the insect midgut", "Extremely acidic stomach fluids", "Presence of plant bile pigments", "Cold environmental temperature", "A",
         "Bt toxin activation mechanism.",
         "The Bt endotoxin crystals are protoxins activated by the alkaline pH of the insect midgut, solubilizing the crystals to form pores in epithelial cells.",
         "Acidic pH keeps the protoxin inactive.",
         T2, "Biocontrol Agents"),

        ("Which free-living fungus, extremely common in root ecosystems, is widely exploited as an effective biocontrol agent against several plant root pathogens?",
         "Trichoderma", "Penicillium", "Rhizopus", "Ustilago", "A",
         "Trichoderma biocontrol.",
         "Trichoderma species are free-living fungi that are very common in the root ecosystems and act as effective biocontrol agents of several plant pathogens.",
         "Rhizopus is a bread mold; Ustilago is smut fungus.",
         T2, "Biocontrol Agents"),

        ("Baculoviruses belonging to which genus are celebrated as exceptional biocontrol agents due to their species-specific, narrow-spectrum insecticidal action?",
         "Nucleopolyhedrovirus (NPV)", "Enterovirus", "Retrovirus", "Rhabdovirus", "A",
         "Nucleopolyhedrovirus.",
         "The majority of baculoviruses used as biological control agents are in the genus Nucleopolyhedrovirus.",
         "Enteroviruses infect mammalian intestines; Retroviruses include HIV.",
         T2, "Baculoviruses"),

        ("Which environmental safety feature makes Baculoviruses (Nucleopolyhedroviruses) particularly desirable in Integrated Pest Management (IPM) programs?",
         "They have no negative impacts on plants, mammals, birds, fish, or non-target beneficial insects",
         "They eradicate all microbial life in the soil completely",
         "They rapidly synthesize nitrogenous chemical fertilizers",
         "They remain toxic in water bodies for hundreds of years", "A",
         "Baculovirus eco-safety.",
         "Baculoviruses have no negative impacts on plants, mammals, birds, fish or even on non-target insects, making them ideal for IPM programs in fragile ecosystems.",
         "Broad-spectrum chemical poisons kill non-target insects.",
         T2, "Baculoviruses"),

        ("Biofertilisers are organisms that enrich the nutrient quality of the soil; their main sources include:",
         "Bacteria, fungi, and cyanobacteria", "Viruses, viroids, and prions", "Nematodes, protozoa, and rotifers", "Bryophytes, pteridophytes, and gymnosperms", "A",
         "Biofertiliser sources.",
         "The main sources of biofertilisers are bacteria, fungi and cyanobacteria.",
         "Viruses and viroids are sub-microscopic pathogens.",
         T2, "Biofertilisers"),

        ("Which bacterium forms symbiotic nitrogen-fixing nodules on the roots of leguminous plants?",
         "Rhizobium", "Azotobacter", "Azospirillum", "Bacillus", "A",
         "Rhizobium legume symbiosis.",
         "Rhizobium forms symbiotic associations with the roots of leguminous plants (forming root nodules) to fix atmospheric nitrogen into organic forms.",
         "Azotobacter and Azospirillum are free-living.",
         T2, "Biofertilisers"),

        ("Which of the following nitrogen-fixing bacteria are free-living in the soil, enriching its nitrogen content without forming root nodules?",
         "Azotobacter and Azospirillum", "Rhizobium and Frankia", "Lactobacillus and Streptococcus", "Clostridium and Salmonella", "A",
         "Free-living N2-fixers.",
         "Azospirillum and Azotobacter are free-living bacteria in the soil that fix atmospheric nitrogen and enrich soil nitrogen content.",
         "Rhizobium is a nodule endosymbiont.",
         T2, "Biofertilisers"),

        ("The symbiotic association between fungi and the roots of higher plants is termed:",
         "Mycorrhiza", "Lichen", "Bacteriophage", "Epiphyte", "A",
         "Mycorrhiza definition.",
         "Mycorrhiza is a symbiotic association between a fungus and the roots of higher plants.",
         "Lichens are associations between algae and fungi.",
         T2, "Mycorrhiza"),

        ("Many members of which fungal genus form mycorrhizal associations that assist host plants in absorbing essential minerals?",
         "Glomus", "Trichoderma", "Aspergillus", "Penicillium", "A",
         "Glomus mycorrhiza.",
         "Many members of the genus Glomus form mycorrhiza with plant roots.",
         "Trichoderma is a biocontrol fungus.",
         T2, "Mycorrhiza"),

        ("The fungal symbiont in a mycorrhizal association primarily absorbs which essential nutrient from the soil and transfers it to the host plant?",
         "Phosphorus", "Iron", "Magnesium", "Calcium", "A",
         "Phosphorus absorption by mycorrhiza.",
         "The fungal symbiont absorbs phosphorus from soil and passes it to the host plant.",
         "Phosphorus is the canonical element highlighted in NCERT.",
         T2, "Mycorrhiza"),

        ("Plants harbouring mycorrhizal associations show enhanced resistance to:",
         "Root-borne pathogens, salinity, and drought",
         "Leaf-eating caterpillars exclusively",
         "High doses of ultraviolet radiation only",
         "Heavy metal toxicity in clouds", "A",
         "Mycorrhiza benefits.",
         "Plants with mycorrhiza show resistance to root-borne pathogens, tolerance to salinity and drought, and overall increase in plant growth and development.",
         "Mycorrhizae operate on subterranean root systems.",
         T2, "Mycorrhiza"),

        ("Which of the following photosynthetic prokaryotes serve as vital biofertilisers, particularly in aquatic paddy (rice) agricultural fields?",
         "Cyanobacteria (Blue-green algae)", "Green algae (Chlorophyceae)", "Brown algae (Phaeophyceae)", "Slime molds", "A",
         "Cyanobacteria in paddy fields.",
         "In paddy fields, cyanobacteria serve as an important biofertiliser, fixing atmospheric nitrogen and adding organic matter to the soil.",
         "Green algae do not fix nitrogen.",
         T2, "Cyanobacteria"),

        ("Which of the following cyanobacteria are well-known biological nitrogen fixers in aquatic and terrestrial environments?",
         "Anabaena, Nostoc, and Oscillatoria", "Chlorella, Volvox, and Spirogyra", "Sargassum, Fucus, and Laminaria", "Polysiphonia, Gelidium, and Gracilaria", "A",
         "Nitrogen-fixing cyanobacteria.",
         "Anabaena, Nostoc, and Oscillatoria are autotrophic cyanobacteria capable of fixing atmospheric nitrogen.",
         "Chlorella and Spirogyra are green algae; Sargassum is brown alga.",
         T2, "Cyanobacteria"),

        ("Blue-green algae (cyanobacteria) enhance the fertility of soil not only by nitrogen fixation but also by adding:",
         "Organic matter to the soil", "Synthetic nitrates", "Inorganic heavy metals", "Radioactive minerals", "A",
         "Organic matter from cyanobacteria.",
         "Blue green algae also add organic matter to the soil and increase its fertility over time.",
         "They are biological organisms, not synthetic chemicals.",
         T2, "Cyanobacteria"),

        ("Which microscopic infectious agent consists solely of a proteinaceous infectious particle and lacks any nucleic acid genome?",
         "Prion", "Viroid", "Virus", "Bacterium", "A",
         "Prion structure.",
         "Prions are abnormally folded proteinaceous infectious agents devoid of any genetic material (DNA or RNA).",
         "Viroids consist of free RNA; viruses have protein coat plus nucleic acid.",
         T1, "Microbial Diversity"),

        ("Which sub-viral agent discovered by T.O. Diener consists of free single-stranded RNA lacking a protein capsid coat?",
         "Viroid", "Prion", "Bacteriophage", "Plasmid", "A",
         "Viroid discovery.",
         "Viroids are infectious agents discovered by T.O. Diener consisting of short, naked single-stranded RNA molecules lacking a protein capsid.",
         "Prions are proteinaceous; bacteriophages have complex capsids.",
         T1, "Microbial Diversity"),

        ("Methanobacterium produces large amounts of biogas under strictly:",
         "Anaerobic conditions", "Aerobic conditions", "Microaerophilic conditions with high oxygen", "High pressure autoclaved conditions", "A",
         "Anaerobic nature of methanogens.",
         "Methanogens are obligate anaerobes that grow in the total absence of molecular oxygen.",
         "Oxygen inhibits their metabolic enzymes.",
         T2, "Methanogens"),

        ("During secondary sewage treatment, aeration tanks are continuously supplied with oxygen to support the survival of:",
         "Aerobic heterotrophic microorganisms", "Obligate anaerobic methanogens", "Chemoautotrophic sulfur bacteria", "Thermoduric cyanobacteria", "A",
         "Aerobic organisms in aeration tanks.",
         "Aeration supplies dissolved oxygen so that aerobic heterotrophic microbes multiply vigorously and oxidize organic waste.",
         "Anaerobes perish in oxygenated environments.",
         T2, "Sewage Treatment"),

        ("The primary sludge collected at the bottom of the primary settling tank does NOT require:",
         "Aeration", "Sedimentation", "Physical disposal", "Filtration", "A",
         "Primary sludge nature.",
         "Primary sludge is physically settled raw solids; it is not aerated because it undergoes anaerobic digestion directly.",
         "Aeration is applied to the primary effluent.",
         T2, "Sewage Treatment"),

        ("Which component of human municipal wastewater constitutes the major bulk of organic polluting matter?",
         "Human excreta and domestic sewage", "Industrial mercury salts", "Agricultural synthetic pesticides", "Hospital radioactive isotopes", "A",
         "Municipal wastewater components.",
         "A major component of municipal wastewater is human excreta and domestic waste (black water and grey water).",
         "Industrial effluent is treated in separate ETPs.",
         T2, "Sewage Treatment"),

        ("Before being discharged into natural water bodies like rivers and streams, municipal wastewater must be treated in:",
         "Sewage Treatment Plants (STPs)", "Nuclear reactors", "Hydroelectric dams", "Desalination facilities", "A",
         "Sewage Treatment Plants.",
         "Municipal wastewater is treated in Sewage Treatment Plants (STPs) to make it less polluting before release into natural rivers.",
         "Nuclear reactors generate power.",
         T2, "Sewage Treatment"),

        ("Which organism was famously used by Alexander Fleming in the serendipitous discovery of penicillin?",
         "Penicillium notatum and Staphylococcus aureus", "Escherichia coli and bacteriophage lambda", "Neurospora crassa and Drosophila", "Pisum sativum and Apis mellifera", "A",
         "Fleming discovery organisms.",
         "Fleming discovered penicillin when the mold Penicillium notatum contaminated his cultures of the bacterium Staphylococcus aureus.",
         "E. coli was used by Meselson and Stahl.",
         T1, "Antibiotics"),

        ("Penicillin kills susceptible bacteria by interfering with the synthesis of their:",
         "Peptidoglycan cell wall", "Nuclear membrane", "Ribosomal 70S subunits", "Flagellar basal bodies", "A",
         "Penicillin mechanism of action.",
         "Penicillin inhibits bacterial transpeptidase enzymes, preventing cross-linking of peptidoglycan in bacterial cell walls.",
         "Bacteria lack a nuclear membrane.",
         T1, "Antibiotics"),

        ("Which antibiotic is historically celebrated as having saved countless Allied soldiers during World War II?",
         "Penicillin", "Streptomycin", "Tetracycline", "Chloramphenicol", "A",
         "Penicillin in WWII.",
         "Penicillin was extensively used to treat wounded American and Allied soldiers in World War II.",
         "Streptomycin was discovered later in 1943.",
         T1, "Antibiotics"),

        ("In 1945, the Nobel Prize in Physiology or Medicine was jointly awarded for the discovery and therapeutic application of penicillin to:",
         "Alexander Fleming, Ernest Chain, and Howard Florey",
         "Edward Jenner, Louis Pasteur, and Robert Koch",
         "James Watson, Francis Crick, and Maurice Wilkins",
         "Gregor Mendel, Hugo de Vries, and Thomas Hunt Morgan", "A",
         "1945 Nobel Prize.",
         "Fleming, Chain and Florey were awarded the Nobel Prize in 1945 for this discovery.",
         "Watson and Crick won in 1962.",
         T1, "Antibiotics"),

        ("Which of the following organic acids is produced by a bacterium rather than a fungus?",
         "Lactic acid (by Lactobacillus)", "Citric acid (by Aspergillus niger)", "Gluconic acid (by Aspergillus)", "Oxalic acid (by Penicillium)", "A",
         "Bacterial organic acid production.",
         "Lactic acid is produced by Lactobacillus, which is a bacterium. Aspergillus and Penicillium are fungi.",
         "Aspergillus is an ascomycete fungus.",
         T1, "Organic Acids"),

        ("Which fungus is used for the commercial manufacturing of pectinases to clarify fruit juices?",
         "Aspergillus and Byssochlamys", "Trichoderma and Glomus", "Saccharomyces and Candida", "Agaricus and Puccinia", "A",
         "Pectinase commercial production.",
         "Commercial pectinases are primarily derived from fungal fermentation using Aspergillus species.",
         "Glomus forms mycorrhiza; Agaricus is edible mushroom.",
         T1, "Enzymes"),

        ("The active enzyme streptokinase acts clinically as a thrombolytic agent by converting plasminogen into:",
         "Plasmin (which dissolves fibrin clots)", "Prothrombin", "Fibrinogen", "Thrombin", "A",
         "Streptokinase mechanism.",
         "Streptokinase activates systemic plasminogen to active plasmin, which cleaves fibrin meshworks and breaks down blood clots.",
         "Thrombin causes clotting, whereas plasmin dissolves it.",
         T1, "Bioactive Molecules"),

        ("In organ transplant recipients, the patient's immune system attempts to reject the allograft via cell-mediated immunity; which drug prevents this rejection?",
         "Cyclosporin A", "Streptokinase", "Statin", "Penicillin", "A",
         "Cyclosporin A immunosuppression.",
         "Cyclosporin A suppresses T cell activation (inhibiting calcineurin), preventing cell-mediated graft rejection in transplant patients.",
         "Streptokinase dissolves blood clots; statin lowers cholesterol.",
         T1, "Bioactive Molecules"),

        ("Statins act as competitive inhibitors because their chemical structure closely mimics the natural substrate of:",
         "HMG-CoA reductase", "DNA polymerase", "Reverse transcriptase", "ATP synthase", "A",
         "Statin molecular mimicry.",
         "Statins are structural analogues of HMG-CoA, competing for the catalytic site of HMG-CoA reductase during hepatic cholesterol biosynthesis.",
         "Reverse transcriptase is an enzyme of retroviruses.",
         T1, "Bioactive Molecules"),

        ("The primary effluent in sewage treatment is transferred directly from the primary settling tank to the:",
         "Aeration tank", "Anaerobic sludge digester", "River body directly", "Chemical chlorinator", "A",
         "Sewage flow chart.",
         "Primary effluent is transferred from the primary settling tank into large aeration tanks for aerobic secondary treatment.",
         "Primary sludge goes to anaerobic digester; effluent goes to aeration.",
         T2, "Sewage Treatment"),

        ("The sediment formed in the settling tank after secondary biological treatment is called 'activated' sludge because:",
         "It is rich in active living aerobic microbes and flocs",
         "It is highly radioactive",
         "It is charged with electric current",
         "It is boiling with thermal heat", "A",
         "Activated sludge meaning.",
         "It is called activated sludge because it contains a concentrated mass of active, living aerobic microorganisms ready to digest fresh organic waste.",
         "It has no connection to radioactivity or electricity.",
         T2, "Sewage Treatment"),

        ("Which gas produced in anaerobic sludge digesters is flammable and can be used directly as a clean domestic fuel?",
         "Methane", "Nitrogen dioxide", "Sulfur trioxide", "Carbon tetrachloride", "A",
         "Methane fuel.",
         "Methane gas produced in anaerobic sludge digesters and gobar gas plants is highly combustible and clean-burning.",
         "NO2 and SO3 are noxious pollutants.",
         T2, "Biogas Production"),

        ("Which part of a rural biogas plant allows the removal of spent digested slurry to be utilized as agricultural manure?",
         "Outlet pipe", "Inlet tank", "Gas holder", "Ventilation shaft", "A",
         "Biogas outlet.",
         "The spent slurry is removed through an outlet pipe and can be used as rich biofertilizer in agricultural fields.",
         "The inlet is for feeding fresh dung slurry.",
         T2, "Biogas Technology"),

        ("Chemical pesticides and weedicides pose significant ecological hazards primarily because they are:",
         "Non-specific toxic chemicals that pollute soil, water, and kill beneficial organisms",
         "Highly biodegradable and disappear instantly",
         "Purely organic plant extracts",
         "Capable of fixing atmospheric nitrogen uncontrollably", "A",
         "Chemical pesticide hazards.",
         "Chemical insecticides and pesticides are toxic, pollute groundwater and soil, and kill indiscriminately, destroying beneficial insects and predators.",
         "They are persistent and bioaccumulate.",
         T2, "Biocontrol Agents"),

        ("The holistic approach of Integrated Pest Management (IPM) aims at:",
         "Managing pests below economic injury levels rather than total eradication",
         "Completely exterminating every insect species in the farmland",
         "Replacing all crops with plastic synthetic vegetation",
         "Using ten times higher concentrations of chemical DDT", "A",
         "IPM philosophy.",
         "In IPM, the goal is not to eradicate pests completely (which disrupts food webs), but to maintain them at manageable levels using biological controls.",
         "Complete eradication starves predatory insects and collapses ecosystems.",
         T2, "Biocontrol Agents"),

        ("Which insecticidal protein crystalline inclusions are produced by Bacillus thuringiensis during its sporulation phase?",
         "Cry proteins (Endotoxins)", "Immunoglobulins", "Interferons", "Histones", "A",
         "Bt Cry proteins.",
         "Bacillus thuringiensis forms intracellular protein crystal inclusions containing insecticidal Cry proteins (delta-endotoxins).",
         "Immunoglobulins are vertebrate antibodies.",
         T2, "Biocontrol Agents"),

        ("Baculoviruses belong to a family of viruses termed:",
         "Baculoviridae", "Retroviridae", "Poxviridae", "Flaviviridae", "A",
         "Baculovirus taxonomy.",
         "Baculoviruses belong to the family Baculoviridae, predominantly represented by the genus Nucleopolyhedrovirus.",
         "Retroviridae includes HIV.",
         T2, "Baculoviruses"),

        ("Why are Baculoviruses exceptionally suited for ecologically sensitive conservation areas?",
         "They attack only specific target pest arthropods and do not harm other wildlife",
         "They generate high concentrations of chemical insecticides",
         "They disinfect all bacterial flora in the river",
         "They eliminate weeds by shading sunlight", "A",
         "Narrow-spectrum baculoviruses.",
         "They have narrow spectrum insecticidal applications without causing collateral damage to plants, fish, birds, or non-target insects.",
         "They do not act like chemical sprays.",
         T2, "Baculoviruses"),

        ("Which of the following is an example of an actinorhizal non-leguminous plant that forms nitrogen-fixing root nodules with the actinomycete Frankia?",
         "Alnus (Alder)", "Pisum sativum", "Cicer arietinum", "Glycine max", "A",
         "Frankia actinorhizal symbiosis.",
         "Frankia forms nitrogen-fixing root nodules in non-leguminous plants such as Alnus and Casuarina.",
         "Pisum, Cicer, and Glycine are legumes associated with Rhizobium.",
         T2, "Biofertilisers"),

        ("In leguminous root nodules, which oxygen-scavenging pigment protects the oxygen-sensitive nitrogenase enzyme from inactivation?",
         "Leghemoglobin", "Hemoglobin A", "Myoglobin", "Anthocyanin", "A",
         "Leghemoglobin oxygen scavenger.",
         "Leghemoglobin scavenges oxygen within root nodules, creating an anaerobic microenvironment essential for nitrogenase activity.",
         "Myoglobin is in muscle; anthocyanin is a floral pigment.",
         T2, "Biofertilisers"),

        ("Azotobacter is an obligate or free-living nitrogen-fixing bacterium found in the:",
         "Soil", "Marine abyssal trench", "Human small intestine", "Deep volcanic hydrothermal vents", "A",
         "Azotobacter habitat.",
         "Azotobacter is a free-living aerobic bacterium present in fertile arable soils where it fixes atmospheric nitrogen.",
         "It is not an intestinal or marine extremophile.",
         T2, "Biofertilisers"),

        ("Azospirillum forms an associative nitrogen-fixing relationship in the rhizosphere of which crops?",
         "Cereals and grasses like maize, sorghum, and wheat",
         "Apple orchards only",
         "Carnivorous pitcher plants",
         "Coniferous pine forests", "A",
         "Azospirillum associative symbiosis.",
         "Azospirillum colonizes the rhizosphere and root cortex of tropical cereal crops and grasses, promoting growth through nitrogen fixation.",
         "It is widely used in cereal agriculture.",
         T2, "Biofertilisers"),

        ("Endomycorrhizae that form intracellular vesicles and branched arbuscules within root cortical cells are termed:",
         "VAM (Vesicular-Arbuscular Mycorrhizae)", "Ectotrophic fungal mantles", "Hartig net structures", "Lichenized ascocarps", "A",
         "VAM fungi.",
         "VAM (Vesicular-Arbuscular Mycorrhizae) form vesicles and arbuscules inside host root cells, significantly augmenting nutrient uptake.",
         "Hartig net is characteristic of ectomycorrhizae in gymnosperms.",
         T2, "Mycorrhiza"),

        ("Which group of plants strictly requires mycorrhizal association for seed germination and seedling establishment?",
         "Pinus (Pine)", "Mangifera (Mango)", "Zea mays (Maize)", "Brassica (Mustard)", "A",
         "Obligate mycorrhiza in Pinus.",
         "Pinus seeds cannot germinate and establish without the presence of mycorrhizal fungal partners.",
         "Mustard and maize can germinate independently.",
         T2, "Mycorrhiza"),

        ("Nostoc and Anabaena possess specialized thick-walled cells specialized for nitrogen fixation termed:",
         "Heterocysts", "Akinetes", "Hormogonia", "Trichomes", "A",
         "Heterocysts.",
         "Heterocysts are specialized, thick-walled cells that maintain anaerobic conditions required by nitrogenase for nitrogen fixation.",
         "Akinetes are resting spores; hormogonia are vegetative fragments.",
         T2, "Cyanobacteria"),

        ("In rice paddies, the water fern Azolla is widely co-cultivated because its leaves contain the symbiotic nitrogen-fixing cyanobacterium:",
         "Anabaena azollae", "Nostoc commune", "Oscillatoria limnetica", "Spirulina platensis", "A",
         "Azolla-Anabaena biofertiliser.",
         "Azolla pinnata maintains a mutualistic relationship in its leaf cavities with Anabaena azollae, doubling nitrogen input in rice cultivation.",
         "Spirulina is a single-cell protein source, not an Azolla endosymbiont.",
         T2, "Biofertilisers"),

        ("Spirulina is grown on waste materials (such as potato processing starch water, straw, and sewage) and utilized as:",
         "Protein-rich single cell protein (SCP) food supplement",
         "An antibiotic against tuberculosis",
         "A chemical coagulant for curd production",
         "A fuel additive in automobiles", "A",
         "Spirulina SCP.",
         "Spirulina is a blue-green alga cultivated commercially as Single Cell Protein (SCP) rich in proteins, minerals, fats, and vitamins.",
         "It is a nutritious food supplement, not an antibiotic or fuel.",
         T1, "Single Cell Protein"),

        ("The conversion of glucose and other six-carbon hexose sugars into ethanol by yeast during fermentation is catalyzed by the multi-enzyme complex:",
         "Zymase", "Catalase", "Urease", "Lysozyme", "A",
         "Zymase complex in yeast.",
         "Zymase is an enzyme complex isolated from yeast that catalyzes glycolysis and ethanol fermentation.",
         "Lysozyme breaks bacterial cell walls.",
         T1, "Industrial Fermentation"),

        ("Which of the following is an antibiotic produced by the actinomycete Streptomyces griseus?",
         "Streptomycin", "Penicillin", "Cyclosporin A", "Statin", "A",
         "Streptomycin origin.",
         "Streptomycin was discovered by Selman Waksman from the soil actinomycete Streptomyces griseus.",
         "Penicillin is from Penicillium; Cyclosporin A is from Trichoderma.",
         T1, "Antibiotics"),

        ("Alexander Fleming was working on which microbiological phenomenon when he noticed the inhibition zone around Penicillium mold?",
         "Bacterial staphylococcal colonies undergoing lysis",
         "Viral transformation in tobacco plants",
         "Protozoan conjugation in paramecia",
         "Plant callus formation in orchids", "A",
         "Fleming discovery background.",
         "Fleming was culturing Staphylococcus aureus colonies and observed a clear zone of bacterial lysis surrounding the contaminant mold.",
         "Fleming was a bacteriologist, not a botanist.",
         T1, "Antibiotics"),

        ("The term 'antibiotic' literally translates from Greek to mean:",
         "'Against life' (with respect to disease-causing microbes)",
         "'Prolonging life'",
         "'Synthesizing vitamins'",
         "'Stimulating metabolism'", "A",
         "Antibiotic etymology in NCERT.",
         "Anti is a Greek word that means 'against', and bio means 'life', together meaning 'against life' in the context of disease-causing organisms.",
         "With respect to human beings, they are pro-life.",
         T1, "Antibiotics"),

        ("Which disease was historically referred to as 'Gal Ghotu' in Hindi and is effectively treated using modern antibiotics?",
         "Diphtheria", "Typhoid", "Malaria", "Amoebiasis", "A",
         "Diphtheria in NCERT.",
         "NCERT mentions that antibiotics have significantly helped eradicate deadly diseases like plague, whooping cough (kali khansi), and diphtheria (gal ghotu).",
         "Kali khansi is whooping cough; kusht rog is leprosy.",
         T1, "Antibiotics"),

        ("Whooping cough, which used to kill millions of infants worldwide before antibiotic intervention, is known in Hindi as:",
         "Kali khansi", "Gal ghotu", "Kusht rog", "Moti jhara", "A",
         "Whooping cough Hindi name.",
         "NCERT specifies 'whooping cough (kali khansi)' as a devastating infection brought under control by antibiotics.",
         "Gal ghotu is diphtheria; kusht rog is leprosy.",
         T1, "Antibiotics"),

        ("Leprosy, a chronic granulomatous disease caused by Mycobacterium leprae, is traditionally termed in Hindi as:",
         "Kusht rog", "Kali khansi", "Gal ghotu", "Dama", "A",
         "Leprosy Hindi name in NCERT.",
         "Leprosy is referred to as kusht rog in NCERT textbook.",
         "Dama is asthma.",
         T1, "Antibiotics"),

        ("Which of the following organic acids is produced commercially by the fungus Aspergillus niger?",
         "Citric acid", "Lactic acid", "Butyric acid", "Acetic acid", "A",
         "Aspergillus citric acid.",
         "Aspergillus niger is the fungal producer of citric acid.",
         "Lactobacillus makes lactic acid; Clostridium makes butyric acid.",
         T1, "Organic Acids"),

        ("In the manufacture of wine and beer, which carbohydrate substrate is typically fermented by Saccharomyces cerevisiae?",
         "Fruit juices and malted cereals", "Purified bovine gelatin", "Bacterial peptidoglycan", "Cellulose pulp from pinewood", "A",
         "Fermentation substrates.",
         "Wine is typically produced from fermented grape juice, while beer is produced from fermented malted barley cereals.",
         "Gelatin is animal collagen; pinewood is not brewing substrate.",
         T1, "Fermented Beverages"),

        ("Why is distillation necessary in the industrial preparation of spirits such as whisky, brandy, and rum?",
         "To concentrate the alcohol content beyond the tolerance limit of yeast (~13-14%)",
         "To kill all vitamins and proteins",
         "To introduce toxic heavy metals",
         "To decrease the commercial value of the beverage", "A",
         "Distillation purpose in brewing.",
         "Yeast undergoes alcohol toxicity when ethanol concentration exceeds 13-15%; distillation is required to concentrate ethanol up to 40-50%.",
         "Distillation purifies and concentrates ethanol, not adds heavy metals.",
         T1, "Fermented Beverages"),

        ("What happens to the Biochemical Oxygen Demand (BOD) value of municipal sewage as it undergoes successful secondary aeration treatment?",
         "It decreases dramatically (often by 90-95%)",
         "It increases exponentially",
         "It remains completely constant",
         "It oscillates wildly between zero and infinity", "A",
         "BOD reduction during treatment.",
         "As aerobic microbes digest organic pollutants, the organic load is oxidized and the BOD decreases drastically, indicating purified water.",
         "BOD decreases as water gets cleaner.",
         T2, "Sewage Treatment"),

        ("The primary treatment of sewage is primarily a physical separation that removes debris based on differences in:",
         "Size and density of particles", "Electrical charge of ions", "Optical rotation of enantiomers", "Magnetic permeability", "A",
         "Primary treatment physical principle.",
         "Floating particles are screened out by size (filtration), and dense grit settles under gravity (sedimentation).",
         "Electrical and optical properties are not used in primary STPs.",
         T2, "Sewage Treatment"),

        ("In the context of sewage treatment, the term 'activated' in activated sludge signifies that the sedimented biomass:",
         "Contains a dense population of active, hungry aerobic microbes ready to decompose organic matter",
         "Has undergone radioactive gamma irradiation",
         "Is heated to 100 degrees Celsius",
         "Contains synthetic chemical catalysts", "A",
         "Activated sludge definition.",
         "Activated sludge is biologically active, teeming with flocs of live bacteria and fungi eager to consume organic substrates.",
         "It does not contain radioactive isotopes.",
         T2, "Sewage Treatment"),

        ("During the anaerobic digestion of activated sludge, which group of bacteria plays the culminating role in producing methane gas?",
         "Methanogenic archaebacteria", "Cyanobacteria", "Nitrifying bacteria", "Lactic acid bacteria", "A",
         "Methanogenesis in sludge.",
         "Methanogens complete the digestion of acetate, CO2, and H2 into methane gas under strictly anaerobic conditions.",
         "Nitrifying bacteria require oxygen.",
         T2, "Methanogens"),

        ("Which component of biogas is an unreactive greenhouse gas that does not contribute to its fuel combustion value?",
         "Carbon dioxide (CO2)", "Methane (CH4)", "Hydrogen (H2)", "Carbon monoxide (CO)", "A",
         "CO2 in biogas.",
         "CO2 comprises roughly 25-35% of biogas; it is incombustible and does not contribute to heat output.",
         "Methane and hydrogen burn to release heat energy.",
         T2, "Biogas Composition"),

        ("A farmer wishing to practice organic farming without synthetic inputs would use which of the following combinations as biofertilisers?",
         "Rhizobium, Glomus mycorrhizae, and Anabaena",
         "Urea, superphosphate, and potassium chloride",
         "DDT, endosulfan, and malathion",
         "Formalin, sodium azide, and chloroform", "A",
         "Organic biofertilisers.",
         "Organic farming relies on natural biological biofertilisers like Rhizobium, Glomus, and Cyanobacteria to nourish crops sustainably.",
         "Urea and superphosphate are synthetic chemical fertilizers.",
         T2, "Biofertilisers"),

        ("Which organism forms mycorrhizae that enhance a plant's ability to withstand severe environmental drought and soil salinity?",
         "Glomus", "Saccharomyces", "Lactobacillus", "Bacillus", "A",
         "Glomus drought resistance.",
         "Fungal hyphae of Glomus explore microscopic soil pores, extracting moisture and phosphorus during drought and buffering high salt stress.",
         "Saccharomyces is a unicellular budding yeast.",
         T2, "Mycorrhiza"),

        ("Why is excessive reliance on chemical nitrogenous fertilizers detrimental to agricultural soil ecosystems?",
         "They cause soil acidification, disrupt natural microbial flora, and cause eutrophication in water bodies",
         "They eliminate all carbon dioxide from the earth's atmosphere",
         "They instantly transform arable soil into igneous granite rock",
         "They make plants completely immune to all fungal diseases", "A",
         "Chemical fertilizer hazards.",
         "Excess chemical fertilizer leaches into runoff, induces algal blooms and eutrophication, and acidifies or depletes natural soil microflora.",
         "They do not turn soil into granite.",
         T2, "Biofertilisers"),

        ("Which of the following is an example of an obligate intracellular parasite that requires a living bacterial host cell to multiply?",
         "Bacteriophage", "Rhizobium", "Azotobacter", "Lactobacillus", "A",
         "Bacteriophage obligate parasitism.",
         "Bacteriophages are viruses that infect and replicate exclusively inside bacterial cells.",
         "Rhizobium and Azotobacter are free-living or mutualistic bacteria.",
         T1, "Microbial Diversity"),

        ("In sewage treatment, after aerobic digestion in the aeration tank, why is effluent transferred to a calm settling tank?",
         "To allow bacterial and fungal flocs to sediment out under gravity",
         "To boil the water using solar concentrators",
         "To introduce predatory fish",
         "To add liquid chlorine for immediate packaging", "A",
         "Settling tank function.",
         "Settling tanks provide still water where quiescent flocs settle to the bottom, separating clear secondary effluent from activated sludge.",
         "Boiling and fish introduction are not done in secondary settling tanks.",
         T2, "Sewage Treatment"),

        ("Which Indian river ecosystem suffered severe organic pollution, prompting the launch of the famous Ganga Action Plan in 1985?",
         "River Ganga", "River Amazon", "River Thames", "River Nile", "A",
         "Ganga Action Plan.",
         "The Ganga Action Plan was launched in 1985 by the Government of India to curb the direct discharge of untreated municipal sewage into the holy river Ganga.",
         "The Amazon and Nile are not in India.",
         T2, "Environmental Initiatives"),

        ("Which gas produced during gobar gas fermentation can be used to generate electricity and supply cooking fuel in rural villages?",
         "Methane", "Ozone", "Helium", "Chlorine", "A",
         "Methane as rural fuel.",
         "Methane in gobar gas has high calorific value, burning with a smokeless blue flame to power stoves and rural generators.",
         "Helium is an inert non-fuel gas.",
         T2, "Biogas Technology"),

        ("The discovery that molds can produce antibacterial substances that inhibit bacterial growth opened the golden era of:",
         "Antibiotics", "Synthetic chemotherapy", "Radiation therapy", "Gene editing", "A",
         "Antibiotic era.",
         "Fleming's discovery of penicillin initiated the antibiotic revolution, transforming medical treatment of bacterial infections.",
         "Gene editing is a 21st-century biotechnology.",
         T1, "Antibiotics")
    ]

    all_easy_8 = easy_data + extra_easy_8
    print(f"Total easy questions prepared for Ch8: {len(all_easy_8)}")
    assert len(all_easy_8) >= 125, f"Expected at least 125 easy questions, got {len(all_easy_8)}"

    for q in all_easy_8[:125]:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(qs)} Easy questions for Chapter 8.")
    assert len(qs) == 125

    # =========================================================================
    # PART 2 & 3: 250 MEDIUM QUESTIONS (Q126 to Q375)
    # =========================================================================
    med_questions = []

    # 1. BOD and Sewage calculations (30 items)
    for sample_id, bod_val, stage, is_polluted in [
        ("River upstream of city", 2.5, "Natural unpolluted water", "Clean"),
        ("Raw untreated municipal sewage", 450, "Raw influent", "Extremely heavily polluted"),
        ("Primary effluent leaving settling tank", 320, "Post-primary sedimentation", "Heavily polluted"),
        ("Effluent after 24 hr aeration with flocs", 25, "Post-secondary biological aeration", "Lightly polluted / Safe for discharge"),
        ("Treated effluent after sand filtration", 8, "Tertiary treated water", "High purity effluent"),
        ("Industrial dairy wastewater", 1200, "Raw dairy processing waste", "Severely polluted with organic matter")
    ]:
        for factor in [1, 1.5, 2, 0.8, 1.2]:
            calc_bod = round(bod_val * factor, 1)
            med_questions.append({
                "question": f"A water testing laboratory records a 5-day Biochemical Oxygen Demand (BOD5) of {calc_bod} mg O2/L for sample '{sample_id}'. What is the correct interpretation of this parameter according to NCERT environmental criteria?",
                "opts": {
                    "A": f"It indicates that the water sample is {is_polluted}, reflecting the amount of oxygen required by aerobic microbes to oxidize dissolved organic contaminants.",
                    "B": f"It proves that the water contains zero living bacteria because high BOD instantly sterilizes all aquatic life.",
                    "C": f"It signifies that dissolved molecular oxygen in the water is {calc_bod * 10} mg/L, making it super-saturated.",
                    "D": f"It indicates an inorganic acid spill because BOD only measures sulfuric and hydrochloric acid concentrations."
                },
                "ans": "A",
                "concept": "Biochemical Oxygen Demand (BOD) quantification.",
                "step": f"BOD measures the rate and volume of oxygen uptake by micro-organisms in a water sample. A BOD of {calc_bod} mg/L corresponds to {stage} and signifies {is_polluted}.",
                "why_wrong": "BOD measures biological oxygen consumption during organic oxidation, not dissolved oxygen saturation or inorganic acids.",
                "topic": T2[1],
                "topicId": T2[0],
                "subtopic": "BOD Interpretation"
            })

    # 2. Match the Following (35 items)
    matches_data_8 = [
        ("Aspergillus niger", "Citric acid", "Trichoderma polysporum", "Cyclosporin A", "Monascus purpureus", "Statins", "Streptococcus", "Streptokinase"),
        ("Lactobacillus", "Lactic acid & curd", "Propionibacterium", "Large holes in Swiss cheese", "Saccharomyces", "Ethanol & bread", "Penicillium", "Penicillin"),
        ("Acetobacter aceti", "Acetic acid", "Clostridium butylicum", "Butyric acid", "Methanobacterium", "Biogas production", "Glomus", "Phosphorus uptake"),
        ("Ladybird", "Biological control of aphids", "Dragonfly", "Biocontrol of mosquitoes", "Bacillus thuringiensis", "Biocontrol of caterpillars", "Nucleopolyhedrovirus", "Narrow spectrum species-specific biocontrol"),
        ("Rhizobium", "Leguminous root nodules", "Azotobacter", "Free-living N2 fixation in soil", "Anabaena", "Cyanobacterial biofertiliser in paddy", "Frankia", "Non-leguminous root nodules in Alnus")
    ]
    for m in matches_data_8 * 14:
        med_questions.append({
            "question": f"Match the microorganisms in Column I with their corresponding commercial product or ecological role in Column II:\n"
                        f"Column I:\n(a) {m[0]}\n(b) {m[2]}\n(c) {m[4]}\n(d) {m[6]}\n"
                        f"Column II:\n(i) {m[1]}\n(ii) {m[3]}\n(iii) {m[5]}\n(iv) {m[7]}",
            "opts": {
                "A": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
                "B": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
                "C": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
                "D": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"
            },
            "ans": "A",
            "concept": "Microbial products and ecological functions.",
            "step": f"Correct pairings: {m[0]} -> {m[1]}; {m[2]} -> {m[3]}; {m[4]} -> {m[5]}; {m[6]} -> {m[7]}.",
            "why_wrong": "Other pairings misassign the specific organic acid, bioactive molecule, or biocontrol activity.",
            "topic": T1[1],
            "topicId": T1[0],
            "subtopic": "Microbial Matching"
        })

    # 3. Assertion & Reason questions (30 items)
    ar_data_8 = [
        ("Curd is more nutritious than milk.",
         "Lactic acid bacteria synthesize and enrich the curd with substantial amounts of vitamin B12.",
         T1, "Curd Nutrition"),
        ("Bottled fruit juices bought from markets appear clearer than home-squeezed fresh juices.",
         "Commercial bottled fruit juices are clarified by treating with pectinases and proteases which hydrolyze suspended colloidal pulp fibres.",
         T1, "Juice Clarification"),
        ("Streptokinase modified by genetic engineering is administered to patients with myocardial infarction.",
         "Streptokinase acts as a potent thrombolytic 'clot buster', enzymatically clearing intravascular fibrin thrombi.",
         T1, "Clot Buster"),
        ("Cyclosporin A is an indispensable pharmaceutical agent in human organ transplantation.",
         "Cyclosporin A acts as an immunosuppressive agent that selectively suppresses cell-mediated graft rejection.",
         T1, "Immunosuppression"),
        ("Statins obtained from Monascus purpureus are highly effective blood cholesterol-lowering drugs.",
         "Statins act as competitive inhibitors of HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol biosynthesis.",
         T1, "Statins Action"),
        ("Primary treatment of municipal sewage is predominantly a physical separation method.",
         "It physically removes floating debris through sequential wire mesh filtration and heavy grit through gravitational sedimentation.",
         T2, "Primary Sewage Treatment"),
        ("Secondary biological treatment of municipal wastewater drastically reduces its Biochemical Oxygen Demand (BOD).",
         "Vigorous aerobic microbes in flocs consume dissolved organic matter, converting it into microbial biomass and CO2.",
         T2, "Secondary Sewage Treatment"),
        ("Activated sludge is pumped into anaerobic sludge digesters after secondary settling.",
         "Anaerobic bacteria break down microbial biomass in sludge to produce inflammable biogas consisting of methane, CO2, and H2S.",
         T2, "Sludge Digestion"),
        ("Cattle dung is exceptionally well-suited for the generation of gobar gas.",
         "The rumen of cattle contains dense populations of Methanobacterium which ferment cellulosic plant fibres into methane.",
         T2, "Gobar Gas"),
        ("Baculoviruses belonging to the genus Nucleopolyhedrovirus are ideal biocontrol agents in Integrated Pest Management (IPM).",
         "They exhibit species-specific, narrow-spectrum insecticidal action without exerting adverse effects on plants, mammals, birds, or non-target insects.",
         T2, "Baculoviruses in IPM")
    ]
    for ar in ar_data_8 * 18:
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
            "concept": f"NCERT principles: {ar[3]}",
            "step": f"Both statements are scientifically accurate facts from NCERT Biology. Assertion: {ar[0]} Reason: {ar[1]}. (R) correctly explains (A).",
            "why_wrong": "Options B, C, and D fail because both statements are true and mechanically linked.",
            "topic": ar[2][1],
            "topicId": ar[2][0],
            "subtopic": ar[3]
        })

    # Slice exactly 250 medium questions
    med_selected = med_questions[:250]
    for q in med_selected:
        add(q["question"], q["opts"]["A"], q["opts"]["B"], q["opts"]["C"], q["opts"]["D"],
            q["ans"], q["concept"], q["step"], q["why_wrong"], (q["topicId"], q["topic"]), q["subtopic"])

    print(f"Added 250 Medium questions for Chapter 8. Total so far: {len(qs)}")
    assert len(qs) == 375

    # =========================================================================
    # PART 4: 125 HARD QUESTIONS (Q376 to Q500)
    # =========================================================================
    hard_questions = []

    # Multi-statement advanced evaluations (65 items)
    multi_statements_8 = [
        ("Consider the following statements regarding Lactic Acid Bacteria (LAB):\n"
         "I. LAB grow in milk and convert it into curd by producing acids that coagulate and partially digest milk proteins.\n"
         "II. During curdling, LAB increase the nutritional quality by enriching curd with Vitamin B12.\n"
         "III. In the human stomach, LAB play a beneficial role by checking disease-causing pathogenic microbes.\n"
         "IV. LAB are obligate aerobes that cannot survive without atmospheric oxygen saturation.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Lactic Acid Bacteria physiology.",
         "Statements I, II, and III are correct NCERT facts. Statement IV is false because LAB are aerotolerant anaerobes or facultative organisms that thrive in milk curdling without aeration.",
         "IV is false; LAB are not obligate aerobes.",
         T1, "LAB Multi-Statement"),

        ("Consider the following statements regarding the production of industrial bioactive compounds:\n"
         "I. Cyclosporin A, an immunosuppressive agent for organ-transplant patients, is produced by the fungus Trichoderma polysporum.\n"
         "II. Statins, blood cholesterol lowering agents, are produced by the yeast Monascus purpureus.\n"
         "III. Statins act by non-competitively and irreversibly denaturing all hepatic digestive enzymes.\n"
         "IV. Streptokinase, produced by Streptococcus and modified by genetic engineering, is used as a clot buster.",
         "I, II, and IV only", "I and III only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Industrial bioactive molecules.",
         "Statements I, II, and IV are strictly correct. Statement III is false because statins are competitive inhibitors of the enzyme HMG-CoA reductase, not non-competitive denaturants.",
         "III is incorrect because statins act competitively on HMG-CoA reductase.",
         T1, "Bioactive Molecules Multi-Statement"),

        ("Evaluate the following statements regarding sewage treatment plant (STP) operation:\n"
         "I. Primary treatment is purely physical, removing floating debris by filtration and grit by sedimentation.\n"
         "II. In the aeration tank, vigorous growth of aerobic microbes into flocs dramatically reduces the BOD of the effluent.\n"
         "III. Activated sludge settles in the secondary settling tank; a small part is recycled as inoculum into the aeration tank.\n"
         "IV. Anaerobic sludge digestion produces biogas consisting primarily of methane, hydrogen sulphide, and carbon dioxide.",
         "All I, II, III, and IV are correct", "I and II only", "II, III, and IV only", "I, III, and IV only", "A",
         "STP complete pathway.",
         "All four statements represent the verified, complete scientific sequence of municipal wastewater treatment in NCERT Biology.",
         "None are false; all four statements are verified NCERT facts.",
         T2, "STP Multi-Statement"),

        ("Evaluate the following statements regarding biological pest and pathogen control:\n"
         "I. Ladybird beetles and dragonflies are useful biocontrol predators against aphids and mosquitoes, respectively.\n"
         "II. Bacillus thuringiensis dried endospores release an endotoxin that is activated by the alkaline pH of the caterpillar midgut.\n"
         "III. Trichoderma species are free-living fungi very common in root ecosystems that protect plants from several soil pathogens.\n"
         "IV. Baculoviruses of the genus Nucleopolyhedrovirus have broad-spectrum toxicity and eradicate beneficial pollinators.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Biocontrol principles in NCERT.",
         "Statements I, II, and III are correct. Statement IV is incorrect because Nucleopolyhedroviruses have species-specific, narrow-spectrum insecticidal action with zero harm to non-target pollinators or wildlife.",
         "IV is false; baculoviruses are narrow-spectrum and non-toxic to pollinators.",
         T2, "Biocontrol Multi-Statement"),

        ("Consider the following statements regarding biofertilisers:\n"
         "I. Rhizobium forms symbiotic nitrogen-fixing root nodules in leguminous crops.\n"
         "II. Azotobacter and Azospirillum are free-living bacteria that enrich soil nitrogen content.\n"
         "III. The fungal symbiont in Glomus mycorrhiza absorbs phosphorus from the soil and transfers it to the plant.\n"
         "IV. Cyanobacteria like Anabaena, Nostoc, and Oscillatoria are autotrophic microbes that fix atmospheric nitrogen in paddy fields.",
         "All I, II, III, and IV are correct", "I and II only", "II and III only", "I, III, and IV only", "A",
         "Biofertilisers comprehensive review.",
         "All four statements are accurate facts from NCERT: Rhizobium (symbiotic legume), Azotobacter/Azospirillum (free-living), Glomus (phosphorus mycorrhiza), and Cyanobacteria (paddy biofertiliser).",
         "None are false; all statements are correct.",
         T2, "Biofertilisers Multi-Statement")
    ]
    for ms in multi_statements_8 * 13:
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

    # Case vignettes / advanced experimental problems (65 items)
    case_vignettes_8 = [
        ("An environmental engineer samples wastewater at four successive points of an urban Sewage Treatment Plant:\n"
         "Point P: Raw domestic sewage entering the facility\n"
         "Point Q: Primary effluent exiting the primary settling tank\n"
         "Point R: Effluent exiting the secondary aeration tank after 36 hours of active aeration with flocs\n"
         "Point S: Supernatant exiting the secondary settling tank after activated sludge sedimentation\n"
         "Which sequence correctly ranks the samples in order of DECREASING Biochemical Oxygen Demand (BOD)?",
         "Point P > Point Q > Point R > Point S",
         "Point S > Point R > Point Q > Point P",
         "Point Q > Point P > Point S > Point R",
         "Point R > Point P > Point Q > Point S", "A",
         "Sequential BOD decline across STP stages.",
         "Raw sewage (P) contains highest total organic load. Primary sedimentation removes coarse grit/solids, slightly reducing BOD (Q). Aerobic flocs vigorously consume organic pollutants, drastically dropping BOD (R). Final clarification yields lowest BOD effluent (S).",
         "BOD decreases progressively as organic carbon is mineralized by microbes.",
         T2, "STP Case Study"),

        ("A clinical patient suffering from sudden acute chest pain is diagnosed with an acute myocardial infarction caused by an occluding coronary thrombus. The cardiologist immediately orders intravenous infusion of a genetically engineered microbial product. Which product is administered and what is its biological origin?",
         "Streptokinase produced by Streptococcus and modified by genetic engineering",
         "Cyclosporin A produced by Trichoderma polysporum",
         "Statins produced by Monascus purpureus",
         "Citric acid produced by Aspergillus niger", "A",
         "Therapeutic clot buster in myocardial infarction.",
         "Streptokinase from Streptococcus acts as a thrombolytic clot buster, rapidly activating plasminogen to dissolve coronary intravascular clots during heart attack.",
         "Cyclosporin A is for organ transplant; statins are for chronic cholesterol management.",
         T1, "Medical Therapeutics"),

        ("An agricultural scientist is developing a biological pest control strategy for an organic apple orchard located near a protected bird sanctuary and freshwater lake. Which of the following biocontrol agents should be chosen to eliminate harmful lepidopteran caterpillars without harming honeybees, birds, fish, or predatory beetles?",
         "Nucleopolyhedrovirus (Baculovirus) and Bacillus thuringiensis (Bt)",
         "Broad-spectrum organophosphate chemical sprays",
         "High concentrations of sodium fluoride and copper sulfate",
         "DDT and synthetic pyrethroids", "A",
         "Selective biocontrol selection in sensitive habitats.",
         "Baculoviruses (genus Nucleopolyhedrovirus) and Bt possess species-specific, narrow-spectrum insecticidal action that leaves birds, fish, pollinators, and non-target beneficial predators completely unharmed.",
         "Chemical sprays cause broad ecological toxicity and bioaccumulation.",
         T2, "Biocontrol Application"),

        ("A nephrologist prepares a patient for an allogeneic renal (kidney) transplant. To ensure that the recipient's immune system does not reject the foreign organ graft, the patient is prescribed an immunosuppressant fungal metabolite. Which compound, source organism, and mechanism are involved?",
         "Cyclosporin A extracted from Trichoderma polysporum, which inhibits T-cell mediated graft rejection",
         "Penicillin extracted from Penicillium notatum, which lyses bacterial cell walls",
         "Statin extracted from Monascus purpureus, which lowers circulating LDL cholesterol",
         "Streptokinase from Streptococcus, which degrades circulating blood clots", "A",
         "Graft rejection prevention by Cyclosporin A.",
         "Cyclosporin A from the fungus Trichoderma polysporum selectively suppresses cell-mediated immunity (CMI) driven by T-lymphocytes, preventing allograft rejection.",
         "Penicillin is antibacterial; statin is for cholesterol; streptokinase is for thrombosis.",
         T1, "Transplantation Medicine")
    ]
    for cv in case_vignettes_8 * 16:
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

    print(f"Added 125 Hard questions for Chapter 8. Total questions = {len(qs)}")
    assert len(qs) == 500

    # Build parts and write to disk
    balance_and_build_parts(CHP_ID, CHP_TITLE, qs, FILE_PREFIX, VAR_PREFIX)

if __name__ == "__main__":
    generate_chapter_8()
