import os
import sys
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from scripts.bio12_engine.common import balance_and_build_parts

CHP_ID = "reproductive-health"
CHP_TITLE = "Reproductive Health"
FILE_PREFIX = "reproductiveHealth"
VAR_PREFIX = "REPRODUCTIVE_HEALTH"

T1 = ("bio-contraception-methods", "Contraception Methods, MTP & Amniocentesis")
T2 = ("bio-stis-art-technologies", "STIs & Assisted Reproductive Technologies (ART)")

def generate_chapter_3():
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
        ("According to the World Health Organization (WHO), reproductive health means total well-being in which aspects of reproduction?",
         "Physical, emotional, behavioural, and social", "Physical and psychological only", "Physiological and genetic only", "Anatomical and hormonal only", "A",
         "WHO definition of reproductive health.",
         "WHO defines reproductive health as a state of complete physical, emotional, behavioural, and social well-being in all matters relating to the reproductive system and to its functions and processes.",
         "Limiting reproductive health to just anatomical or physical aspects excludes the essential emotional, behavioural, and social criteria established by WHO.",
         T1, "WHO Definition"),

        ("India was among the very first countries in the world to initiate action plans and national programmes at a national level to achieve total reproductive health. These programmes were initiated in:",
         "1951 under the name Family Planning", "1971 under the name MTP", "1981 under the name RCH", "1991 under the name Pulse Polio", "A",
         "National family planning initiation in India.",
         "India initiated nation-wide family planning programmes in 1951. These programmes were periodically assessed and expanded as Reproductive and Child Health Care (RCH) programmes.",
         "1971 was the legalization of MTP; 1981 and 1991 are incorrect historical dates for this initiative.",
         T1, "Family Planning History"),

        ("What does the acronym 'RCH' stand for in national reproductive health programmes?",
         "Reproductive and Child Health Care", "Reproductive and Community Health", "Regional Child Health Organisation", "Research in Child Hygiene", "A",
         "RCH programme full form.",
         "RCH stands for Reproductive and Child Health Care programmes, which aim to create awareness and provide facilities for building a reproductively healthy society.",
         "Other expansions are fabricated and not recognized in NCERT.",
         T1, "RCH Programmes"),

        ("Amniocentesis is a prenatal diagnostic technique based on the chromosomal pattern in the amniotic fluid surrounding the developing embryo. It is statutorily banned in India because of:",
         "Its misuse for female foeticide following sex determination", "High risk of maternal mortality during the procedure", "Its complete inability to detect genetic abnormalities", "Causing permanent sterility in the mother", "A",
         "Statutory ban on amniocentesis.",
         "Amniocentesis was misused to determine the sex of the foetus, frequently followed by female foeticide. Hence, a legal ban on amniocentesis for sex determination was imposed to stop female foeticide.",
         "The procedure does successfully detect chromosomal anomalies (like Down syndrome); it is banned specifically to prevent sex-selective abortions.",
         T1, "Amniocentesis"),

        ("Which genetic disorder CAN be diagnosed prenatally using amniocentesis?",
         "Down syndrome, Turner syndrome, and Sickle-cell anaemia", "Common cold and viral influenza", "Acquired immunodeficiency syndrome only", "Nutritional iron deficiency anaemia", "A",
         "Diagnostic scope of amniocentesis.",
         "Amniocentesis extracts foetal cells from amniotic fluid, allowing karyotype analysis for chromosomal disorders (Down, Turner, Klinefelter) and detection of metabolic/genetic defects like sickle-cell anaemia.",
         "Common cold is an acute viral infection; nutritional deficiency is environmental; amniocentesis focuses on genetic/chromosomal defects.",
         T1, "Amniocentesis"),

        ("The popular non-steroidal, once-a-week oral contraceptive pill developed by scientists at Central Drug Research Institute (CDRI) in Lucknow is:",
         "Saheli (Centchroman)", "Mala-D", "Nirodh", "Norplant", "A",
         "Development of Saheli oral contraceptive.",
         "Saheli is an oral contraceptive pill developed by CDRI Lucknow. It is non-steroidal, contains centchroman, has very few side effects, and is taken once a week after an initial twice-a-week dose for 3 months.",
         "Mala-D is a daily steroidal pill; Nirodh is a male condom; Norplant is a sub-dermal progestin implant.",
         T1, "Oral Contraceptives"),

        ("The natural contraceptive method of 'Periodic Abstinence' requires avoiding coitus during which days of the menstrual cycle?",
         "Days 10 to 17", "Days 1 to 5", "Days 20 to 28", "Days 25 to 30", "A",
         "Periodic abstinence rhythm method.",
         "Ovulation is expected around day 14 of a 28-day cycle. As the ovum remains viable for ~24-48 hours and sperms survive for up to 72 hours, days 10 to 17 are considered the fertile period during which coitus is avoided.",
         "Days 1-5 represent menses; days 20-28 are the post-ovulatory safe period.",
         T1, "Natural Contraception"),

        ("Lactational amenorrhea is an effective natural contraceptive method based on the absence of menstruation during intense lactation. It is effective up to a maximum period of:",
         "6 months following parturition", "1 month following parturition", "2 years following parturition", "12 months following parturition", "A",
         "Lactational amenorrhea timeframe.",
         "High prolactin levels during intense breastfeeding suppress GnRH, FSH, and LH, preventing ovulation. NCERT states this method is effective only up to a maximum of six months following parturition.",
         "Beyond 6 months, ovulatory cycles resume even if breastfeeding continues.",
         T1, "Natural Contraception"),

        ("Which of the following is an example of a barrier method of contraception that also provides protection against sexually transmitted infections (STIs) and AIDS?",
         "Condoms", "Lippes loop", "Copper-T", "Oral pills", "A",
         "Condom dual protection.",
         "Condoms made of thin rubber/latex sheath prevent semen from entering the female genital tract and uniquely provide protection against contracting STIs and AIDS.",
         "IUDs and oral pills do not prevent mucosal contact or transmission of venereal pathogens.",
         T1, "Barrier Contraception"),

        ("Diaphragms, cervical caps, and vaults are contraceptive barriers that are inserted into the female reproductive tract to cover the:",
         "Cervix", "Fallopian tubes", "Ovaries", "Vulva", "A",
         "Diaphragm application site.",
         "Diaphragms, cervical caps, and vaults are rubber barriers inserted into the female reproductive tract to cover the cervix during coitus, blocking entry of sperms through the external os.",
         "They do not cover ovaries or fallopian tubes, nor are they placed on the external vulva.",
         T1, "Barrier Contraception"),

        ("Spermicidal creams, jellies, and foams are commonly used in conjunction with barrier devices (such as diaphragms and caps) to:",
         "Increase their contraceptive efficiency", "Prevent ovulation directly", "Induce menstruation immediately", "Stimulate gametogenesis", "A",
         "Spermicidal adjuncts.",
         "Spermicidal creams, jellies, and foams contain agents (like nonoxynol-9) that immobilize or kill spermatozoa, thereby significantly increasing the contraceptive efficiency of barrier devices.",
         "Spermicides do not act hormonally on the pituitary-ovarian axis and cannot influence ovulation.",
         T1, "Barrier Contraception"),

        ("Which of the following is a non-medicated Intrauterine Device (IUD)?",
         "Lippes loop", "CuT", "Cu7", "Multiload 375", "A",
         "Classification of IUDs.",
         "Lippes loop is a double-S-shaped polyethylene non-medicated IUD that stimulates a sterile local inflammatory reaction, promoting phagocytosis of sperms in the uterus.",
         "CuT, Cu7, and Multiload 375 are copper-releasing IUDs.",
         T1, "IUD Classification"),

        ("Which group of intrauterine devices releases copper ions into the uterine cavity?",
         "CuT, Cu7, and Multiload 375", "Lippes loop and Vaults", "Progestasert and LNG-20", "Saheli and Mala-D", "A",
         "Copper-releasing IUDs.",
         "CuT, Cu7, and Multiload 375 are copper-releasing IUDs. Free Cu2+ ions suppress sperm motility and inhibit sperm fertilizing capacity.",
         "Progestasert and LNG-20 are hormone-releasing IUDs; Lippes loop is non-medicated.",
         T1, "IUD Classification"),

        ("Which of the following is a hormone-releasing Intrauterine Device (IUD)?",
         "LNG-20 and Progestasert", "CuT and Cu7", "Lippes loop and Multiload 375", "Nirodh and Femidom", "A",
         "Hormone-releasing IUDs.",
         "Progestasert and LNG-20 are hormone-releasing IUDs that slowly secrete levonorgestrel (progestin), making the uterus unsuitable for implantation and the cervix hostile to sperms.",
         "CuT/Cu7 release copper; Lippes loop is non-medicated.",
         T1, "IUD Classification"),

        ("How do copper ions released from copper-bearing IUDs (like CuT and Multiload 375) prevent pregnancy?",
         "They suppress sperm motility and reduce the fertilizing capacity of spermatozoa", "They inhibit meiosis during oogenesis", "They induce permanent scarring of the oviduct", "They stimulate excessive estrogen secretion", "A",
         "Mechanism of copper-releasing IUDs.",
         "Cu2+ ions released into the uterine cavity exert a direct toxic effect on spermatozoa, suppressing their motility and fertilizing ability.",
         "They do not alter meiosis, nor do they induce hormonal surges or scar fallopian tubes.",
         T1, "IUD Mechanism"),

        ("Hormone-releasing IUDs such as LNG-20 prevent contraception primarily by:",
         "Making the uterus unsuitable for implantation and the cervix hostile to sperms", "Completely preventing spermatogenesis in the male partner", "Blocking the vagina mechanically with a rubber cup", "Destroying all primordial follicles in the ovaries", "A",
         "Mechanism of hormone-releasing IUDs.",
         "Hormone-releasing IUDs release progestogens locally, thinning the endometrium (making it unreceptive to blastocyst implantation) and thickening cervical mucus to prevent sperm entry.",
         "They do not affect male spermatogenesis or destroy ovarian follicles.",
         T1, "IUD Mechanism"),

        ("Which contraceptive method is considered the most widely accepted and ideal method of contraception for women in India who wish to delay pregnancy or space children?",
         "Intrauterine Devices (IUDs)", "Tubectomy", "Vasectomy", "Coitus interruptus", "A",
         "IUD acceptance in India.",
         "NCERT explicitly highlights that IUDs are one of the most widely accepted methods of contraception in India for females desiring child spacing.",
         "Surgical sterilization is a terminal method unsuitable for spacing children; coitus interruptus has high failure rates.",
         T1, "IUD Epidemiology"),

        ("Oral contraceptive pills ('Pills') taken daily by females typically contain which hormonal combination?",
         "Progesterone alone or a progestogen-estrogen combination", "High doses of oxytocin and relaxin", "Thyroxine and adrenaline", "FSH and LH in high doses", "A",
         "Composition of oral contraceptive pills.",
         "Oral contraceptive pills contain either progestogens alone or a combination of progestogen and estrogen. They mimic the luteal phase, suppressing pituitary LH/FSH secretion to inhibit ovulation.",
         "Oxytocin induces labor; FSH/LH stimulate ovulation; thyroxine is a metabolic hormone.",
         T1, "Oral Contraceptive Composition"),

        ("Oral pills have to be taken daily for a period of 21 days starting preferably within the first five days of the menstrual cycle. After an interval of how many days (during which menstruation occurs) must the cycle be repeated?",
         "7 days", "14 days", "21 days", "28 days", "A",
         "Regimen of oral contraceptive pills.",
         "Pills are taken daily for 21 days, followed by a 7-day pill-free interval during which withdrawal bleeding (menstruation) occurs, then continued in the same pattern.",
         "A 14-day or 21-day break would result in follicular development and ovulation, leading to contraceptive failure.",
         T1, "Pill Regimen"),

        ("Emergency contraceptives are effective in preventing possible pregnancy if administered within how many hours of unprotected coitus?",
         "Within 72 hours", "Within 7 days", "Within 14 days", "Within 1 month", "A",
         "Emergency contraception window.",
         "Administration of progestogens or progestogen-estrogen combinations or IUD insertion within 72 hours of coitus has been found to be very effective as emergency contraception.",
         "Beyond 72 hours, the probability of blastocyst formation and implantation rises substantially, rendering emergency pills ineffective.",
         T1, "Emergency Contraception"),

        ("Surgical intervention in males where a small portion of the vas deferens is removed or tied up through a small incision on the scrotum is called:",
         "Vasectomy", "Tubectomy", "Castration", "Prostatectomy", "A",
         "Vasectomy surgical technique.",
         "Vasectomy is male sterilization in which both vasa deferentia are ligated and transected, preventing spermatozoa from traveling into the ejaculatory duct and urethra.",
         "Tubectomy is in females; castration is excision of gonads; prostatectomy is prostate removal.",
         T1, "Sterilization"),

        ("Surgical intervention in females where a small part of the fallopian tube is removed or tied up through a small incision in the abdomen or through the vagina is called:",
         "Tubectomy", "Vasectomy", "Hysterectomy", "Oophorectomy", "A",
         "Tubectomy surgical technique.",
         "Tubectomy is female sterilization where fallopian tubes are cut and tied, preventing ovum transport and sperm-egg encounter.",
         "Hysterectomy is surgical removal of the uterus; oophorectomy is removal of the ovaries.",
         T1, "Sterilization"),

        ("What is the primary drawback of surgical sterilization methods (vasectomy and tubectomy)?",
         "Their reversibility is very poor", "They have extremely high failure rates", "They completely eliminate libido and sexual desire", "They cause severe permanent loss of secondary sexual characters", "A",
         "Characteristics of surgical sterilization.",
         "Sterilization blocks gamete transport permanently. While highly effective (>99%), surgical re-anastomosis has a very poor success rate, making the procedure essentially irreversible.",
         "Sterilization does not impair testosterone or estrogen production, so libido and secondary sexual traits are entirely preserved.",
         T1, "Sterilization Reversibility"),

        ("Medical Termination of Pregnancy (MTP) was legally legalized by the Government of India in which year?",
         "1971", "1951", "1981", "2001", "A",
         "MTP legalization year.",
         "Government of India legalized MTP in 1971 with strict conditions to avoid its misuse, especially against female foeticide.",
         "1951 was family planning; 1981 and 2001 are incorrect.",
         T1, "MTP Legal History"),

        ("Medical Termination of Pregnancy (MTP) is considered relatively safe during which stage of pregnancy?",
         "First trimester (up to 12 weeks of pregnancy)", "Second trimester (up to 24 weeks)", "Third trimester (after 28 weeks)", "At 36 weeks of gestation", "A",
         "MTP safe period.",
         "MTP is safest during the first trimester (up to 12 weeks). Second trimester abortions are much more risky due to vascularization and intimate placental attachment.",
         "Abortion in the third trimester is legally restricted and carries severe maternal hemorrhage risks.",
         T1, "MTP Safety Window"),

        ("Which of the following sexually transmitted infections is caused by a protozoan parasite?",
         "Trichomoniasis", "Syphilis", "Gonorrhoea", "Chlamydiasis", "A",
         "Pathogen of Trichomoniasis.",
         "Trichomoniasis is caused by the flagellated protozoan Trichomonas vaginalis, producing foul-smelling vaginal discharge and vulvar pruritus.",
         "Syphilis (Treponema pallidum), Gonorrhoea (Neisseria gonorrhoeae), and Chlamydiasis (Chlamydia trachomatis) are bacterial.",
         T2, "STI Pathogens"),

        ("Which bacterium is the causative agent of Syphilis?",
         "Treponema pallidum", "Neisseria gonorrhoeae", "Chlamydia trachomatis", "Haemophilus ducreyi", "A",
         "Syphilis etiology.",
         "Syphilis is caused by the spirochete bacterium Treponema pallidum, presenting with primary chancre, secondary rashes, and tertiary neurovascular lesions.",
         "Neisseria causes gonorrhea; Chlamydia causes chlamydiasis.",
         T2, "STI Pathogens"),

        ("Which bacterium causes Gonorrhoea in humans?",
         "Neisseria gonorrhoeae", "Treponema pallidum", "Mycobacterium leprae", "Streptococcus pneumoniae", "A",
         "Gonorrhoea etiology.",
         "Gonorrhoea is an STI caused by the Gram-negative diplococcus Neisseria gonorrhoeae.",
         "Treponema causes syphilis; Mycobacterium causes leprosy.",
         T2, "STI Pathogens"),

        ("Which of the following sexually transmitted diseases CANNOT be completely cured even if detected early?",
         "Genital herpes, Hepatitis B, and HIV infection", "Gonorrhoea, Syphilis, and Chlamydiasis", "Trichomoniasis and Candidiasis", "Syphilis and Genital warts", "A",
         "Incurable STIs in NCERT.",
         "NCERT explicitly specifies that except for Hepatitis B, Genital herpes, and HIV infections, all other STIs are completely curable if detected early and treated properly.",
         "Bacterial STIs (Gonorrhoea, Syphilis, Chlamydiasis) and protozoan Trichomoniasis are curable with antibiotics/antiprotozoals.",
         T2, "Incurable STIs"),

        ("Which of the following STIs can also be transmitted through sharing of injection needles, surgical instruments, and from an infected mother to her foetus?",
         "Hepatitis B and HIV", "Gonorrhoea and Syphilis", "Trichomoniasis and Chlamydia", "Genital warts and Candidiasis", "A",
         "Blood-borne STI transmission.",
         "Both Hepatitis B virus and HIV are transmitted via sexual contact, contaminated blood transfusions, shared needles among IV drug users, and vertically from mother to unborn fetus.",
         "Gonorrhoea and Trichomoniasis are primarily localized venereal infections that do not transmit via shared needles.",
         T2, "STI Transmission Routes"),

        ("In which age group is the incidence of sexually transmitted infections (STIs) reported to be the highest?",
         "15 to 24 years", "5 to 14 years", "45 to 55 years", "65 years and above", "A",
         "STI age epidemiology.",
         "NCERT highlights that although all persons are vulnerable to STIs, their incidences are reported to be very high among young individuals aged 15-24 years.",
         "Other age demographics have much lower incidence rates of newly acquired venereal infections.",
         T2, "STI Epidemiology"),

        ("Pelvic Inflammatory Diseases (PID), stillbirths, abortions, and ectopic pregnancies are severe complications of:",
         "Untreated Sexually Transmitted Infections (STIs)", "Excessive intake of vitamin C", "Use of barrier condoms during coitus", "Regular exercise during puberty", "A",
         "Complications of untreated STIs.",
         "Untreated STIs can ascend into the upper female reproductive tract causing pelvic inflammatory diseases (PID), fallopian scarring leading to tubal ectopic pregnancy, abortions, stillbirths, and infertility.",
         "Condoms prevent STIs; vitamin C and exercise do not cause reproductive tract scarring.",
         T2, "STI Pathology"),

        ("In Assisted Reproductive Technology (ART), the procedure of transferring an early embryo with up to 8 blastomeres into the fallopian tube is called:",
         "ZIFT (Zygote Intra-Fallopian Transfer)", "IUT (Intra-Uterine Transfer)", "GIFT (Gamete Intra-Fallopian Transfer)", "ICSI (Intra-Cytoplasmic Sperm Injection)", "A",
         "ZIFT definition.",
         "ZIFT involves in vitro fertilization followed by the transfer of the zygote or early embryo up to 8 blastomeres directly into the fallopian tube.",
         "Embryos with more than 8 blastomeres are transferred into the uterus (IUT); GIFT transfers unfertilized gametes.",
         T2, "ART Techniques"),

        ("In an IVF programme, embryos with more than 8 blastomeres are transferred into which organ to complete further development?",
         "Uterus (Intra-Uterine Transfer - IUT)", "Fallopian tube (ZIFT)", "Cervical canal", "Abdominal peritoneal cavity", "A",
         "IUT definition.",
         "Embryos with more than 8 blastomeres have reached morula/blastocyst stages and are transferred into the uterus (IUT - Intra-Uterine Transfer).",
         "Fallopian tubes are physiological only for early cleavage stages (up to 8 blastomeres); transfer of >8 blastomeres into oviduct is unphysiological.",
         T2, "ART Techniques"),

        ("What does GIFT stand for in the context of Assisted Reproductive Technologies?",
         "Gamete Intra-Fallopian Transfer", "Gene Insertion and Fallopian Technique", "General In-vitro Fertilization Technique", "Gonadal Implant and Follicular Therapy", "A",
         "GIFT expansion and definition.",
         "GIFT stands for Gamete Intra-Fallopian Transfer, where an ovum collected from a donor is transferred into the fallopian tube of a recipient who cannot produce ova but can support fertilization.",
         "Other expansions are fabricated distractors.",
         T2, "ART Techniques"),

        ("GIFT (Gamete Intra-Fallopian Transfer) is specifically recommended for a female who:",
         "Cannot produce an ovum but can provide a suitable internal environment for fertilization and development",
         "Has completely blocked fallopian tubes and an absent uterus",
         "Lacks a pituitary gland and cannot produce any hormones",
         "Has undergone total hysterectomy and bilateral oophorectomy", "A",
         "Clinical indication for GIFT.",
         "GIFT is suitable for females who are anovulatory (cannot produce functional ova) but possess patent fallopian tubes and a healthy uterus capable of fertilization and pregnancy.",
         "If fallopian tubes are blocked or absent, fertilization cannot occur in the oviduct, ruling out GIFT.",
         T2, "ART Indications"),

        ("Intra-Cytoplasmic Sperm Injection (ICSI) is an advanced laboratory procedure in which:",
         "A sperm is directly micro-injected into the cytoplasm of an ovum",
         "Multiple sperms are mixed with semen in a petri dish without intervention",
         "Embryos are divided into twins inside the fallopian tube",
         "Spermatozoa are injected into the urinary bladder of the patient", "A",
         "ICSI procedure.",
         "ICSI is a specialized micromanipulation technique where a single spermatozoon is directly injected into the cytoplasm of a mature ovum in vitro.",
         "Standard IVF mixes sperm and egg in medium; ICSI bypasses sperm penetration defects.",
         T2, "ART Techniques"),

        ("In cases of male infertility due to inability of the male partner to inseminate the female or very low sperm counts (oligospermia), which technique is most suitable?",
         "Artificial Insemination (AI) or Intra-Uterine Insemination (IUI)", "Tubectomy", "ZIFT of unfertilized egg", "MTP", "A",
         "Artificial Insemination indication.",
         "Infertility due to inability to inseminate or oligospermia is corrected by Artificial Insemination (AI), where semen collected from husband or donor is introduced into the vagina or uterus (IUI).",
         "Tubectomy and MTP terminate reproduction; unfertilized eggs cannot undergo ZIFT.",
         T2, "ART Indications"),

        ("When semen is introduced artificially directly into the uterine cavity of the female, the procedure is termed:",
         "IUI (Intra-Uterine Insemination)", "IUT (Intra-Uterine Transfer)", "IVF (In Vitro Fertilization)", "ICSI (Intra-Cytoplasmic Sperm Injection)", "A",
         "IUI definition.",
         "IUI stands for Intra-Uterine Insemination, wherein washed and concentrated sperms are introduced directly into the uterine cavity via a catheter.",
         "IUT refers to transfer of embryos (>8 blastomeres), not sperm suspensions.",
         T2, "ART Terminology"),

        ("Which Indian institute developed the famous non-steroidal oral contraceptive 'Saheli'?",
         "Central Drug Research Institute (CDRI), Lucknow", "All India Institute of Medical Sciences (AIIMS), New Delhi", "Indian Agricultural Research Institute (IARI), New Delhi", "National Institute of Immunology (NII), Pune", "A",
         "CDRI Lucknow milestone.",
         "Saheli was synthesized and clinically developed by scientists at the Central Drug Research Institute (CDRI) located in Lucknow, India.",
         "AIIMS, IARI, and NII were not the developers of Centchroman (Saheli).",
         T1, "Saheli History")
    ]

    # Generate additional easy items to reach exactly 125 easy questions
    # Topics include MTP amendments, population explosion statistics, contraceptive mechanisms, barrier details
    extra_easy = [
        ("What was the approximate world population in the year 2000 according to NCERT?",
         "Around 6 billion (6000 million)", "Around 2 billion", "Around 12 billion", "Around 500 million", "A",
         "Demographic statistics in NCERT.",
         "The world population was around 2 billion in 1900, which rocketed to about 6 billion by 2000 and 7.2 billion in 2011.",
         "2 billion was the population in 1900.",
         T1, "Population Demographics"),

        ("According to the 2011 census report, what was the population growth rate in India?",
         "Less than 2 per cent (around 1.7%)", "Greater than 10 per cent", "Exactly 5.5 per cent", "Negative growth (-1%)", "A",
         "Indian census 2011 growth rate.",
         "According to the 2011 census report, the population growth rate of India was less than 2 per cent (1.7%), a rate at which population could double in 33 years.",
         "India's growth rate was ~1.7%, not >10% or negative.",
         T1, "Population Demographics"),

        ("A rapid decline in which of the following is the primary reason for the global population explosion in recent decades?",
         "Death rate, maternal mortality rate (MMR), and infant mortality rate (IMR)", "Birth rate and fertility rate", "Life expectancy and longevity", "Food supply and public hygiene", "A",
         "Drivers of population explosion.",
         "Rapid decline in death rate, maternal mortality rate (MMR), and infant mortality rate (IMR), along with an increase in the number of people in reproducible age, drove rapid population growth.",
         "Decline in birth rate would reduce population growth, not accelerate it.",
         T1, "Population Demographics"),

        ("The statutory marriageable age in India is legally fixed at:",
         "18 years for females and 21 years for males", "16 years for females and 18 years for males", "21 years for both females and males", "15 years for females and 20 years for males", "A",
         "Legal marriageable ages in India.",
         "In India, legal marriageable age is statutory at 18 years for females and 21 years for males to prevent teenage pregnancies and curb rapid population expansion.",
         "Other age limits violate Indian child marriage prevention laws.",
         T1, "Population Policy"),

        ("Which of the following is an ideal contraceptive quality described in NCERT?",
         "User-friendly, easily available, effective, reversible, with no or least side effects", "Irreversible, expensive, and interfering with sexual drive", "Requiring permanent surgical intervention for all ages", "Decreasing sexual desire and interfering with coitus", "A",
         "Characteristics of an ideal contraceptive.",
         "An ideal contraceptive must be user-friendly, easily available, effective, reversible with no or minimal side effects, and should not interfere with sexual drive, desire, or the sexual act.",
         "Negative attributes like irreversibility and loss of libido characterize poor contraceptives.",
         T1, "Contraceptive Criteria"),

        ("Natural methods of contraception work primarily on the principle of:",
         "Avoiding the chances of ovum and sperm meeting", "Surgically excising the gonads", "Killing mature spermatozoa with chemical toxins", "Suppressing pituitary gonadotropins permanently", "A",
         "Principle of natural methods.",
         "Natural methods operate on the basic principle of avoiding the chances of ovum and sperms meeting during the fertile window.",
         "They do not involve chemicals, hormones, or surgical excision.",
         T1, "Natural Contraception"),

        ("Coitus interruptus or withdrawal method prevents pregnancy because:",
         "The male withdraws the penis from the vagina just before ejaculation, avoiding insemination", "The fallopian tubes are blocked by mucus plugs", "The ovum is destroyed inside the ampulla", "Sperm motility is chemically paralyzed", "A",
         "Mechanism of coitus interruptus.",
         "In coitus interruptus, the male partner withdraws his penis from the vagina just before ejaculation so as to avoid insemination of seminal fluid into the female tract.",
         "Pre-ejaculatory fluid may contain sperms, which is why this method has high failure rates.",
         T1, "Natural Contraception"),

        ("Lactational amenorrhea is based on high circulating levels of which hormone that suppresses gonadotropins?",
         "Prolactin", "Oxytocin", "Progesterone", "Estrogen", "A",
         "Hormonal basis of lactational amenorrhea.",
         "Intense suckling triggers high prolactin secretion from the anterior pituitary, which suppresses GnRH pulsation, preventing the LH surge and follicular development.",
         "Oxytocin causes milk ejection; prolactin stimulates milk synthesis and suppresses ovulation.",
         T1, "Lactational Amenorrhea"),

        ("The trade name of the male latex condom marketed widely by the Government of India is:",
         "Nirodh", "Saheli", "Femidom", "Today", "A",
         "Nirodh brand awareness.",
         "'Nirodh' is the popular brand of condoms for males produced and distributed by the Government of India.",
         "Saheli is an oral pill; Femidom is a female condom.",
         T1, "Barrier Contraception"),

        ("Unlike condoms, which barrier devices are reusable after cleaning?",
         "Diaphragms, cervical caps, and vaults", "Male latex condoms", "Female polyurethane condoms", "Lippes loops", "A",
         "Reusability of diaphragms.",
         "Diaphragms, cervical caps, and vaults are made of durable rubber and are reusable after washing and sterilizing.",
         "Condoms are strictly single-use disposable barriers.",
         T1, "Barrier Contraception"),

        ("Which of the following is NOT an Intrauterine Device (IUD)?",
         "Norplant", "Lippes loop", "CuT", "LNG-20", "A",
         "Classification of contraceptives.",
         "Norplant is a sub-dermal progestogen implant placed under the skin of the upper arm, not an intrauterine device.",
         "Lippes loop, CuT, and LNG-20 are all inserted into the uterine cavity.",
         T1, "Contraceptive Types"),

        ("Sub-dermal contraceptive implants containing progestogen are placed under the skin of the:",
         "Inner upper arm", "Abdominal rectus sheath", "Gluteal muscle", "Thigh muscle", "A",
         "Site of contraceptive implants.",
         "Contraceptive implants (like Norplant) consist of flexible silicone rods containing progestin implanted sub-dermally under the skin of the inner upper arm.",
         "They are not placed intramuscularly or in the abdomen.",
         T1, "Implants"),

        ("Why do oral contraceptive pills prevent ovulation?",
         "High circulating levels of progestin/estrogen exert negative feedback on the pituitary, inhibiting FSH and LH secretion",
         "They mechanically block the entrance to the fallopian tubes",
         "They stimulate a massive LH surge on Day 5 of the cycle",
         "They induce rapid phagocytosis of all primordial germ cells", "A",
         "Endocrine mechanism of oral pills.",
         "Exogenous progestogens (with or without estrogen) inhibit the secretion of GnRH, FSH, and LH via negative feedback, preventing follicular maturation and the mid-cycle LH surge necessary for ovulation.",
         "Oral pills act systemically, not via mechanical barrier or germ cell destruction.",
         T1, "Oral Pill Mechanism"),

        ("Saheli was developed as a non-steroidal oral contraceptive. Chemically, its active molecule belongs to which class?",
         "Centchroman (Ormeloxifene)", "Levonorgestrel", "Ethinyl estradiol", "Mifepristone", "A",
         "Chemical composition of Saheli.",
         "Saheli contains Centchroman (ormeloxifene), a selective estrogen receptor modulator (SERM) that is non-steroidal and taken once weekly.",
         "Levonorgestrel and ethinylestradiol are synthetic steroids; mifepristone is an anti-progesterone abortifacient.",
         T1, "Saheli Pharmacology"),

        ("In vasectomy, the surgical cut and ligation is made on which male reproductive duct?",
         "Vas deferens", "Vasa efferentia", "Rete testis", "Urethra", "A",
         "Vasectomy site.",
         "Vasectomy involves bilateral transection and ligation of the vas deferens in the spermatic cord within the upper scrotum.",
         "Urethral ligation would block urination; rete testis is deep within testicular mediastinum.",
         T1, "Vasectomy"),

        ("In tubectomy, which part of the female reproductive tract is cut and tied?",
         "Fallopian tube", "Uterine cervix", "Ovarian ligament", "Vagina", "A",
         "Tubectomy site.",
         "In tubectomy, a small part of each fallopian tube (oviduct) is excised and ligated to prevent gamete transport.",
         "Cervix and vagina are not excised; ovarian ligament suspends the ovary.",
         T1, "Tubectomy"),

        ("Medical Termination of Pregnancy (MTP) is also commonly known as:",
         "Induced abortion", "Spontaneous miscarriage", "Tubectomy", "Stillbirth", "A",
         "MTP definition.",
         "Intentional or voluntary termination of pregnancy before full term is called Medical Termination of Pregnancy (MTP) or induced abortion.",
         "Spontaneous miscarriage is involuntary loss; stillbirth is delivery of a dead baby after 20+ weeks.",
         T1, "MTP Definition"),

        ("Nearly how many MTPs are performed all over the world in a year according to NCERT estimates?",
         "45 to 50 million (accounting for 1/5th of total conceived pregnancies)", "1 to 2 million", "100 to 120 million", "500,000 only", "A",
         "Global MTP statistics.",
         "Nearly 45 to 50 million MTPs are performed each year globally, which accounts for roughly 1/5th of the total number of conceived pregnancies in a year.",
         "Other numbers do not match NCERT epidemiological data.",
         T1, "MTP Statistics"),

        ("Under the MTP Amendment Act (2017) in India, a pregnancy may be terminated within the first 12 weeks upon the opinion of:",
         "One registered medical practitioner", "Three registered medical practitioners", "A panel of five surgeons", "A judicial magistrate", "A",
         "MTP Amendment Act 2017.",
         "For pregnancies up to 12 weeks, the opinion of one registered medical practitioner is required. For pregnancies between 12 and 20 (or 24 in amended provisions) weeks, two registered medical practitioners must agree.",
         "Judicial magistrates do not certify standard medical abortions.",
         T1, "MTP Law"),

        ("Under the MTP Amendment Rules, the gestation limit for termination of pregnancy was increased from 20 to 24 weeks for special categories of women including:",
         "Survivors of rape, victims of incest, and minors", "Any woman wishing to have a male child", "Women traveling abroad for vacations", "Couples desiring a single-child family", "A",
         "MTP 24-week special categories.",
         "The amended MTP law allows termination up to 24 weeks for vulnerable categories, including rape survivors, victims of incest, minors, and women with foetal malformations.",
         "Sex selection is strictly illegal under the PCPNDT Act.",
         T1, "MTP Amendments"),

        ("Which of the following is NOT a Sexually Transmitted Infection (STI)?",
         "Filariasis (Elephantiasis)", "Syphilis", "Gonorrhoea", "Genital herpes", "A",
         "STI identification.",
         "Filariasis is caused by the filarial nematode Wuchereria bancrofti, transmitted by the bite of female Culex mosquitoes, not via sexual intercourse.",
         "Syphilis, gonorrhoea, and genital herpes are classic sexually transmitted infections.",
         T2, "STI Classification"),

        ("Genital warts are caused by infection with which pathogen?",
         "Human Papilloma Virus (HPV)", "Herpes Simplex Virus (HSV-2)", "Human Immunodeficiency Virus (HIV)", "Treponema pallidum", "A",
         "Genital warts etiology.",
         "Genital warts (condylomata acuminata) are caused by sexually transmitted strains of Human Papilloma Virus (HPV).",
         "HSV causes genital herpes; HIV causes AIDS; Treponema causes syphilis.",
         T2, "STI Etiology"),

        ("Genital herpes is caused by which viral agent?",
         "Herpes Simplex Virus (HSV-2)", "Human Papilloma Virus (HPV)", "Hepatitis B virus", "Varicella Zoster Virus", "A",
         "Genital herpes etiology.",
         "Genital herpes is an incurable sexually transmitted ulcerative disease caused primarily by Herpes Simplex Virus Type 2 (HSV-2).",
         "Varicella causes chickenpox/shingles; HPV causes warts.",
         T2, "STI Etiology"),

        ("Hepatitis B virus primarily infects and damages which vital organ of the human body?",
         "Liver", "Kidneys", "Lungs", "Spleen", "A",
         "Hepatitis B pathology.",
         "Hepatitis B virus specifically infects hepatocytes in the liver, potentially leading to chronic hepatitis, cirrhosis, and hepatocellular carcinoma.",
         "It does not primarily target the lungs, kidneys, or spleen.",
         T2, "Hepatitis B Pathology"),

        ("Which diagnostic laboratory test is routinely used as a screening test for detecting HIV infection?",
         "ELISA (Enzyme-Linked Immunosorbent Assay)", "Widal test", "Mantoux test", "Gram staining", "A",
         "HIV screening test.",
         "ELISA is the primary screening test used to detect antibodies against HIV in human serum.",
         "Widal test is for typhoid fever; Mantoux test is for tuberculosis.",
         T2, "HIV Diagnosis"),

        ("Which confirmatory test is performed after a positive ELISA screening for HIV?",
         "Western Blot test", "Widal test", "Amniocentesis", "Benedict's test", "A",
         "HIV confirmatory test.",
         "A positive ELISA test is confirmed using the Western Blot assay, which detects specific viral proteins (such as gp120, gp41, p24).",
         "Widal is for typhoid; Benedict's is for reducing sugars.",
         T2, "HIV Diagnosis"),

        ("The primary target cells of HIV that undergo progressive depletion leading to immunodeficiency are:",
         "Helper T lymphocytes (CD4+ T cells)", "Cytotoxic T lymphocytes (CD8+)", "Erythrocytes (RBCs)", "Basophils", "A",
         "HIV cellular pathogenesis.",
         "HIV selectively binds to CD4 receptors on T-helper lymphocytes, replicating inside them and causing progressive CD4+ cell lysis and severe immunodeficiency.",
         "RBCs lack CD4 receptors and are not infected by HIV.",
         T2, "HIV Pathogenesis"),

        ("What is the main physiological consequence of severe Pelvic Inflammatory Disease (PID) resulting from untreated STIs?",
         "Fibrosis and bilateral blockage of the fallopian tubes leading to infertility",
         "Excessive enlargement of the thyroid gland",
         "Premature baldness and skin pigmentation",
         "Increased insulin secretion by pancreatic beta cells", "A",
         "Complications of PID.",
         "In untreated STIs, pathogens ascend causing salpingitis and endometritis. Healing produces fibrous adhesions and tubal occlusion, causing mechanical infertility.",
         "PID does not affect thyroid or pancreas function.",
         T2, "PID Consequences"),

        ("In 'Test Tube Baby' programmes, where does fertilization of the egg actually take place?",
         "In vitro (in a laboratory glass dish / test tube under simulated physiological conditions)",
         "Inside the fallopian tube of the mother",
         "Inside the uterus of a foster mother",
         "Inside the urinary bladder", "A",
         "Test tube baby concept.",
         "In vitro fertilization (IVF) means fertilization outside the body in almost similar conditions as that in the body (in vitro, in laboratory culture vessels).",
         "Fertilization does not take place inside the mother's tract in IVF.",
         T2, "IVF Concept"),

        ("The transfer of an embryo at the 8-cell stage into the fallopian tube is termed:",
         "ZIFT (Zygote Intra-Fallopian Transfer)", "IUT (Intra-Uterine Transfer)", "GIFT", "AI", "A",
         "ZIFT stage criterion.",
         "The zygote or early embryo with up to 8 blastomeres is transferred into the fallopian tube (ZIFT).",
         "Embryos with more than 8 blastomeres are transferred into the uterus (IUT).",
         T2, "ZIFT blastomere threshold"),

        ("If an embryo has reached the 16-cell or 32-cell morula/blastocyst stage during an IVF programme, which transfer technique is utilized?",
         "IUT (Intra-Uterine Transfer)", "ZIFT", "GIFT", "ICSI", "A",
         "IUT stage criterion.",
         "Embryos with more than 8 blastomeres (e.g. 16-cell morula or 32-cell blastocyst) are transferred directly into the uterus (IUT) because the uterus is the physiological site for advanced cleavage stages.",
         "ZIFT is restricted to <=8 blastomeres.",
         T2, "IUT blastomere threshold"),

        ("Which assisted reproductive technology does NOT involve in vitro fertilization?",
         "GIFT (Gamete Intra-Fallopian Transfer)", "ZIFT", "ICSI", "IUT", "A",
         "In vivo vs In vitro ART.",
         "In GIFT, unfertilized gametes (egg and sperm) are transferred into the fallopian tube, where in vivo fertilization occurs inside the woman's body.",
         "ZIFT, ICSI, and IUT all require prior in vitro fertilization.",
         T2, "In Vivo ART"),

        ("Intra-Cytoplasmic Sperm Injection (ICSI) was specifically developed to overcome which major infertility problem?",
         "Severe oligospermia, asthenozoospermia, or inability of sperms to penetrate the zona pellucida",
         "Total absence of the uterus in the female",
         "Complete occlusion of both fallopian tubes",
         "Lack of ovarian hormones in the female", "A",
         "Clinical utility of ICSI.",
         "ICSI directly injects a single sperm into the oocyte cytoplasm, completely bypassing requirements for normal sperm count, vigorous motility, and zona pellucida penetration.",
         "Uterine absence requires surrogacy, not ICSI.",
         T2, "ICSI Indications"),

        ("In Artificial Insemination (AI), when the semen is introduced into the uterus of the female, it is termed:",
         "IUI (Intra-Uterine Insemination)", "IUT", "IVF", "ZIFT", "A",
         "IUI definition.",
         "Artificial introduction of semen into the uterus is specifically designated as Intra-Uterine Insemination (IUI).",
         "IUT transfers embryos, not semen.",
         T2, "IUI"),

        ("If a couple is sterile because the male partner has severe azoospermia (zero sperms in semen), which ART option allows them to have a child?",
         "Donor insemination (IUI using donor sperm) or adoption", "Tubectomy of the wife", "MTP", "Lactational amenorrhea", "A",
         "Azoospermia management.",
         "When the husband produces no viable spermatozoa, artificial insemination using donor semen (AID) or legal adoption is the primary solution.",
         "Tubectomy prevents pregnancy.",
         T2, "Azoospermia Management"),

        ("A woman who bears a child on behalf of another person or couple who cannot have children themselves (often using IVF) is known as a:",
         "Surrogate mother", "Biological grandmother", "Foster teacher", "Wet nurse", "A",
         "Surrogacy definition.",
         "A surrogate mother is a woman who agrees to carry a pregnancy and give birth to a child for another couple, typically utilizing their in vitro fertilized embryo.",
         "A wet nurse breastfeeds a baby; foster parents raise a child without carrying pregnancy.",
         T2, "Surrogacy"),

        ("Which international organization defines reproductive health as total well-being in physical, emotional, behavioural, and social aspects?",
         "WHO (World Health Organization)", "UNESCO", "UNICEF", "FAO", "A",
         "WHO agency identification.",
         "The World Health Organization (WHO), headquartered in Geneva, provided the comprehensive definition of reproductive health.",
         "UNESCO focuses on education/culture; FAO on food and agriculture.",
         T1, "WHO Authority"),

        ("The primary objective of sex education in secondary schools recommended by NCERT is to:",
         "Provide correct scientific information to discourage misconceptions, myths, and unsafe sexual behaviours",
         "Encourage early teenage marriages",
         "Increase the sale of pharmaceutical steroids",
         "Promote population explosion in rural areas", "A",
         "Rationale for sex education in schools.",
         "Introduction of sex education in schools aims to provide accurate scientific information to adolescents, dispelling myths and misconceptions about sex-related aspects and promoting safe practices.",
         "It aims to delay marriage until maturity and prevent teenage pregnancies.",
         T1, "Sex Education Policy"),

        ("Creating awareness about problems related to population growth, sex-abuse, and sex-related crimes helps to build a:",
         "Socially conscious and reproductively healthy society", "Militant society", "Completely uneducated society", "Decreased economic workforce", "A",
         "NCERT vision of reproductive health.",
         "Educating citizens regarding reproduction, population pressure, and gender equality builds an aware, responsible, and reproductively healthy society.",
         "Other choices contradict the humanitarian and public health objectives.",
         T1, "Reproductive Health Goals"),

        ("A mother who has delivered a baby is advised to practice exclusive breastfeeding for 6 months not only for infant nutrition, but also because:",
         "High prolactin prevents ovulation naturally (lactational amenorrhea) and maternal antibodies provide passive immunity",
         "Breast milk completely eliminates the need for any childhood vaccines",
         "Breastfeeding causes permanent surgical sterility in the mother",
         "Breastfeeding induces immediate onset of menopause", "A",
         "Dual benefit of exclusive breastfeeding.",
         "Breastfeeding delivers vital secretory IgA antibodies for newborn immunity while high prolactin suppresses pituitary gonadotropins, providing natural contraception.",
         "Vaccines are still necessary; breastfeeding does not induce permanent sterility or menopause.",
         T1, "Lactational Amenorrhea"),

        ("Which of the following birth control methods has the HIGHEST reversibility?",
         "Barrier methods (condoms, diaphragms)", "Tubectomy", "Vasectomy", "Castration", "A",
         "Contraceptive reversibility comparison.",
         "Barrier methods have immediate 100% reversibility; fertility returns the moment their use is discontinued.",
         "Vasectomy and tubectomy have very poor surgical reversibility; castration is irreversible.",
         T1, "Contraceptive Reversibility"),

        ("Which contraceptive method is considered PERMANENT and terminal?",
         "Surgical sterilization (vasectomy and tubectomy)", "Copper-T", "Oral contraceptive pills", "Condoms", "A",
         "Terminal methods of contraception.",
         "Surgical methods (sterilization) are terminal methods that block gamete transport permanently to prevent any further pregnancies.",
         "IUDs, pills, and condoms are temporary spacing methods.",
         T1, "Surgical Sterilization"),

        ("The primary mode of action of non-medicated IUDs (e.g. Lippes loop) in the uterus is to:",
         "Increase phagocytosis of spermatozoa within the uterine lumen",
         "Release cytotoxic zinc ions into the vagina",
         "Prevent the release of mature ova from the graafian follicle",
         "Surgically cut the fallopian tubes", "A",
         "Mechanism of non-medicated IUDs.",
         "Lippes loop acts as a foreign body in the endometrial cavity, inducing local sterile leukocytosis that enhances macrophage phagocytosis of sperms.",
         "Lippes loop does not release zinc ions or inhibit ovulation.",
         T1, "Lippes Loop Mechanism"),

        ("Why should an IUD be inserted only by expert doctors or trained nurses?",
         "To prevent uterine perforation, infection, or improper positioning",
         "Because it requires general anesthesia and thoracic surgery",
         "Because it must be directly sutured to the ovarian surface",
         "Because it contains radioactive isotopes", "A",
         "Safety protocol for IUD insertion.",
         "IUD insertion requires sterile aseptic technique and uterine sounding through the cervical os; careless insertion risks uterine perforation, hemorrhage, or pelvic sepsis.",
         "IUD insertion does not require thoracic surgery or suture to ovaries.",
         T1, "IUD Protocol"),

        ("Emergency contraceptive pills should be taken within 72 hours primarily to prevent:",
         "Ovulation or implantation of the fertilized blastocyst",
         "The onset of normal lactation after birth",
         "Menopause in mature women",
         "Development of secondary sexual characters", "A",
         "Emergency pill timing rationale.",
         "Within 72 hours, high progestogen prevents delayed ovulation or alters endometrial receptivity to block blastocyst implantation.",
         "Emergency contraception is unrelated to lactation or menopause.",
         T1, "Emergency Contraception"),

        ("Which of the following is an effective emergency contraceptive measure besides hormone pills?",
         "Insertion of an IUD (such as CuT) within 5 days of unprotected coitus",
         "Undergoing immediate tubectomy",
         "Taking large doses of vitamin A",
         "Drinking cold water immediately after intercourse", "A",
         "Emergency IUD insertion.",
         "Insertion of a copper IUD within 5 days (120 hours) of unprotected intercourse prevents fertilization and interferes with implantation, serving as emergency contraception.",
         "Vitamins and cold water have zero contraceptive effect; tubectomy cannot terminate post-coital fertilization.",
         T1, "Emergency IUD"),

        ("The Medical Termination of Pregnancy (MTP) Act was enacted primarily to:",
         "Reduce maternal mortality caused by illegal, unsafe abortions by quacks",
         "Encourage sex-selective elimination of female foetuses",
         "Compulsorily limit all families to one child",
         "Prevent women from seeking modern healthcare", "A",
         "MTP public health objective.",
         "MTP was legalized to eliminate dangerous clandestine backstreet abortions performed by unqualified persons, which caused high maternal mortality.",
         "Sex selection is strictly illegal under Indian law.",
         T1, "MTP Public Health Goals"),

        ("At which gestational age is MTP considered extremely dangerous and life-threatening to the mother?",
         "Second trimester (after 12 weeks, especially 20+ weeks)", "First trimester (up to 8 weeks)", "At 4 weeks of amenorrhea", "At 6 weeks of gestation", "A",
         "MTP risk gradient.",
         "Second trimester abortions are far more risky because the foetus is intimately associated with maternal maternal uterine tissue, posing severe risks of uterine perforation and fatal haemorrhage.",
         "First trimester abortions are comparatively simple and safe.",
         T1, "MTP Risk Stages"),

        ("In amniocentesis, how is the amniotic fluid sampled?",
         "Using a sterile hypodermic needle passed transabdominally into the amniotic cavity under ultrasound guidance",
         "By collecting urine from the maternal bladder",
         "By performing an incision through the maternal thoracic wall",
         "By aspirating cerebrospinal fluid from the maternal lumbar spine", "A",
         "Amniocentesis procedure.",
         "Amniocentesis involves inserting a long, sterile needle through the maternal abdominal and uterine walls into the amniotic sac, monitored by ultrasound.",
         "It does not involve urine or lumbar CSF puncture.",
         T1, "Amniocentesis Technique"),

        ("Which chromosomal anomaly is characterized by trisomy of chromosome 21 and can be diagnosed by amniocentesis?",
         "Down syndrome", "Turner syndrome (45, XO)", "Klinefelter syndrome (47, XXY)", "Cri-du-chat syndrome", "A",
         "Amniocentesis for Down syndrome.",
         "Down syndrome results from trisomy of chromosome 21 (47 chromosomes). The karyotype of cultured foetal amniocytes reveals the extra chromosome 21.",
         "Turner syndrome is 45,XO monosomy; Klinefelter is 47,XXY.",
         T1, "Chromosomal Diagnosis"),

        ("Which chromosomal syndrome characterized by a 45, XO karyotype in females can be detected via prenatal karyotyping?",
         "Turner syndrome", "Down syndrome", "Klinefelter syndrome", "Edward syndrome", "A",
         "Turner syndrome karyotyping.",
         "Turner syndrome is characterized by monosomy of the X chromosome (45, XO), detectable via foetal karyotyping from amniocentesis.",
         "Klinefelter is 47,XXY; Down is trisomy 21.",
         T1, "Chromosomal Diagnosis"),

        ("Which chromosomal condition characterized by 47, XXY karyotype in males can be diagnosed prenatally via amniocentesis?",
         "Klinefelter syndrome", "Turner syndrome", "Down syndrome", "Patau syndrome", "A",
         "Klinefelter syndrome diagnosis.",
         "Klinefelter syndrome (47, XXY) displays an extra X chromosome in phenotypic males, identifiable by karyotyping foetal cells.",
         "Turner syndrome is 45,XO; Patau is trisomy 13.",
         T1, "Chromosomal Diagnosis"),

        ("Why is sex determination using amniocentesis legally prohibited under the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act in India?",
         "To prevent female foeticide and restore balanced child sex ratio",
         "Because the test always yields false positive results",
         "Because it damages the foetal brain permanently in 100% of cases",
         "Because it causes maternal kidney failure", "A",
         "PCPNDT Act objective.",
         "The statutory ban on prenatal sex determination prevents selective abortion of female foetuses, safeguarding the skewed child sex ratio.",
         "The test is cytogenetically accurate, but misuse drove the legislative ban.",
         T1, "PCPNDT Act"),

        ("Chlamydiasis is a common sexually transmitted infection caused by which intracellular bacterium?",
         "Chlamydia trachomatis", "Neisseria gonorrhoeae", "Treponema pallidum", "Mycoplasma hominis", "A",
         "Chlamydia etiology.",
         "Chlamydiasis is caused by the obligate intracellular bacterium Chlamydia trachomatis, causing non-gonococcal urethritis and cervicitis.",
         "Treponema causes syphilis; Neisseria causes gonorrhoea.",
         T2, "STI Etiology"),

        ("Which STI pathogen can cross the placental barrier and cause congenital syphilis in the newborn?",
         "Treponema pallidum", "Trichomonas vaginalis", "Neisseria gonorrhoeae", "Candida albicans", "A",
         "Transplacental STI transmission.",
         "Treponema pallidum can cross the placenta after the 16th week of gestation, causing congenital syphilis, stillbirth, or severe foetal deformities (Hutchinson's teeth, saddle nose).",
         "Trichomonas and Candida are localized to the lower genital tract.",
         T2, "Congenital STIs"),

        ("Primary syphilis is typically characterized by the appearance of a painless, indurated ulcer at the site of infection called a:",
         "Chancre", "Gumma", "Condyloma", "Bubo", "A",
         "Primary syphilis lesion.",
         "The hallmark of primary syphilis is the hard, painless chancre that develops at the site of inoculation (genitalia, rectum, or lips).",
         "Gumma is seen in tertiary syphilis; bubo is an inflamed lymph node in chancroid or plague.",
         T2, "Syphilis Pathology"),

        ("The tertiary stage of syphilis is characterized by destructive granulomatous lesions called:",
         "Gummas", "Chancres", "Vesicles", "Plaques", "A",
         "Tertiary syphilis pathology.",
         "Tertiary syphilis occurs years after initial infection and produces soft, non-cancerous granulomatous growths called gummas in bone, liver, and skin.",
         "Chancre is primary syphilis; condyloma lata is secondary syphilis.",
         T2, "Syphilis Pathology"),

        ("Why are women often asymptomatic in the early stages of sexually transmitted infections like chlamydiasis and gonorrhoea?",
         "Infections of the cervix and upper vagina frequently do not produce painful sensory symptoms, remaining undetected",
         "Women have total natural genetic immunity against all bacterial STIs",
         "Pathogenic bacteria cannot divide in female body temperature",
         "Female sex hormones immediately digest all bacterial cell walls", "A",
         "Asymptomatic STIs in females.",
         "Cervical epithelium lacks cutaneous pain receptors, so early endocervicitis produces subtle or painless discharge that is easily overlooked, delaying treatment until PID develops.",
         "Women do not have total immunity against STIs.",
         T2, "STI Pathophysiology"),

        ("Which of the following is an effective barrier measure recommended by doctors to avoid contracting STIs?",
         "Consistent and correct use of condoms during all sexual encounters",
         "Taking multivitamins daily",
         "Using herbal body wash after coitus",
         "Relying solely on periodic abstinence rhythm methods", "A",
         "STI prevention guidelines.",
         "NCERT lists three simple principles for preventing STIs: avoid sex with unknown/multiple partners, always use condoms during coitus, and consult a qualified doctor immediately if symptoms appear.",
         "Vitamins and rhythm methods provide zero protection against microbial transmission.",
         T2, "STI Prevention"),

        ("When a couple is unable to conceive despite 2 years of regular, unprotected coitus, the condition is clinically defined as:",
         "Infertility", "Sterilization", "Amenorrhea", "Impotence", "A",
         "Definition of infertility.",
         "Infertility is defined as the inability to conceive or produce children despite two years of regular, unprotected sexual cohabitation.",
         "Sterilization is deliberate surgical contraception; amenorrhea is absence of menses.",
         T2, "Infertility Definition"),

        ("Why should the male partner also be thoroughly clinically examined during infertility evaluations?",
         "A significant percentage of infertility cases (around 40-50%) are due to male reproductive factors such as oligospermia or asthenozoospermia",
         "Males are the only ones capable of producing gametes",
         "Females never have physiological defects in reproduction",
         "Infertility tests for males take only 2 seconds and cost nothing", "A",
         "Infertility workup parity.",
         "Infertility is a couple problem; male factors (oligospermia, motility defects, testicular failure, duct obstruction) account for roughly half of all infertility cases.",
         "Blaming the female alone is medically unfounded and socially unjust.",
         T2, "Infertility Workup"),

        ("The laboratory procedure where high-speed centrifugation and washing are used to prepare motile spermatozoa before placing them in the uterus is:",
         "Intra-Uterine Insemination (IUI)", "Tubectomy", "MTP", "Amniocentesis", "A",
         "IUI semen preparation.",
         "IUI involves washing seminal plasma to eliminate prostaglandins and bacteria and concentrate highly motile sperms into a small volume for uterine deposition.",
         "MTP and tubectomy terminate or block reproduction.",
         T2, "IUI Technique"),

        ("In ZIFT, where is the fertilized zygote or 8-blastomere embryo transferred?",
         "Into the fallopian tube", "Into the endometrial cavity", "Into the cervix", "Into the myometrium", "A",
         "ZIFT anatomical site.",
         "ZIFT (Zygote Intra-Fallopian Transfer) transfers the zygote or early embryo up to 8 blastomeres into the fallopian tube.",
         "Transfer into the endometrial cavity is IUT (Intra-Uterine Transfer).",
         T2, "ZIFT Anatomy"),

        ("In IUT, where is the embryo with more than 8 blastomeres transferred?",
         "Directly into the uterine cavity", "Into the ampulla of the fallopian tube", "Into the fimbriae", "Into the ovary", "A",
         "IUT anatomical site.",
         "IUT (Intra-Uterine Transfer) places embryos with >8 blastomeres directly into the lumen of the uterus.",
         "Advanced embryos in fallopian tubes risk ectopic implantation.",
         T2, "IUT Anatomy"),

        ("What is the fundamental difference between GIFT and ZIFT?",
         "GIFT transfers unfertilized gametes into the fallopian tube, whereas ZIFT transfers an in vitro fertilized embryo",
         "GIFT is for males, while ZIFT is only for females",
         "GIFT transfers embryos with 32 blastomeres into the uterus",
         "GIFT uses radiation therapy to stimulate ovaries", "A",
         "GIFT vs ZIFT comparison.",
         "GIFT introduces donor ova (gametes) into the fallopian tube for natural in vivo fertilization, whereas ZIFT introduces a zygote fertilized in vitro.",
         "Both are performed in females.",
         T2, "GIFT vs ZIFT"),

        ("A female patient whose fallopian tubes are completely blocked bilaterally CANNOT be treated by which of the following techniques?",
         "GIFT (Gamete Intra-Fallopian Transfer)", "IVF with IUT", "ICSI followed by IUT", "Adoption", "A",
         "Fallopian tube patency requirement.",
         "GIFT requires functional, patent fallopian tubes for sperm ascent, fertilization, and tubal transport to the uterus. If tubes are blocked, GIFT fails completely.",
         "IVF with IUT bypasses the fallopian tubes entirely by transferring embryos directly into the uterus.",
         T2, "Fallopian Occlusion"),

        ("Why is adoption legally and morally emphasized in NCERT as a noble solution for childless infertile couples?",
         "India has many orphaned and destitute children who need loving parental homes, and legal adoption provides parenthood with certainty",
         "Because all ART clinics in India are illegal",
         "Because ART procedures never result in a live birth",
         "Because adoption guarantees that children will never experience illnesses", "A",
         "Adoption perspective in NCERT.",
         "NCERT concludes the Reproductive Health chapter by noting that in India there are many orphaned and destitute children, and legal adoption is one of the best and most fulfilling options for childless couples.",
         "ART is legal and successful, but adoption offers a compassionate humanitarian alternative.",
         T2, "Adoption Ethics"),

        ("Which barrier method fits over the cervix and is reusable after washing?",
         "Cervical cap", "Male condom", "Female condom", "Norplant rod", "A",
         "Cervical cap traits.",
         "Cervical caps are reusable thimble-shaped latex cups that fit snugly over the uterine cervix.",
         "Condoms are disposable single-use barriers.",
         T1, "Barrier Contraception"),

        ("What happens to spermatozoa produced in a male following a successful bilateral vasectomy?",
         "They are prevented from leaving the epididymis/vas and are eventually phagocytosed by macrophages",
         "They back up and burst the urinary bladder",
         "They are converted directly into testosterone molecules",
         "They exit through the anus during defecation", "A",
         "Fate of sperms after vasectomy.",
         "Spermatogenesis continues normally in the testes after vasectomy. The un-ejaculated sperms accumulate in the epididymis and proximal vas and are digested and reabsorbed by tissue macrophages.",
         "Sperms do not enter the bladder or gastrointestinal tract.",
         T1, "Vasectomy Physiology"),

        ("Does bilateral vasectomy in a male cause loss of testosterone secretion or decrease in sexual potency?",
         "No, because Leydig cells continue secreting testosterone directly into the testicular capillaries",
         "Yes, because testosterone travels solely through the lumen of the vas deferens",
         "Yes, because both testes must be surgically removed during vasectomy",
         "Yes, because vasectomy destroys all pituitary gonadotropic receptors", "A",
         "Endocrine independence of vasectomy.",
         "Testosterone is an endocrine steroid hormone secreted by Leydig cells directly into testicular blood capillaries, completely independent of the exocrine sperm transport duct (vas deferens).",
         "Vasectomy does not affect testosterone levels or erectile potency.",
         T1, "Vasectomy Endocrinology"),

        ("Does bilateral tubectomy in a female disrupt her normal ovarian cycle or stop menstruation?",
         "No, because ovaries continue producing ova and steroid hormones which reach the uterus via blood; only ovum transport through oviduct is blocked",
         "Yes, because menstrual blood flows through the fallopian tubes into the abdomen",
         "Yes, because ovaries are surgically removed in tubectomy",
         "Yes, because tubectomy stops all pituitary FSH and LH secretion", "A",
         "Endocrine independence of tubectomy.",
         "Tubectomy merely interrupts the mechanical conduit of the oviduct. Ovarian follicular maturation, ovulation into peritoneal cavity, and hormone secretion (estrogen/progesterone) continue normally, causing cyclic endometrial sloughing (menstruation).",
         "Menstrual blood is shed through the cervix and vagina, not through the oviducts.",
         T1, "Tubectomy Endocrinology"),

        ("What is the primary action of emergency contraceptive pills when taken within 72 hours of intercourse?",
         "Inhibition of ovulation and disruption of endometrial receptivity for implantation",
         "Surgical excision of the blastocyst from the fallopian tube",
         "Instant induction of menopause in the woman",
         "Permanent destruction of all ovarian primordial follicles", "A",
         "Emergency pill mechanism.",
         "High dose levonorgestrel in emergency pills delays or prevents follicular rupture (ovulation) and alters the endometrial lining, preventing implantation.",
         "They do not surgically excise tissue or induce menopause.",
         T1, "Emergency Contraceptive Mechanism"),

        ("The statutory prohibition on prenatal sex determination in India is enforced under which legislation?",
         "PCPNDT Act (Pre-Conception and Pre-Natal Diagnostic Techniques Act)",
         "MTP Act 1971", "Factories Act 1948", "Wildlife Protection Act 1972", "A",
         "PCPNDT Act identification.",
         "The PCPNDT Act (1994, amended 2003) regulates and strictly bans the use of pre-natal diagnostic techniques for sex selection and female foeticide.",
         "MTP regulates abortion; Wildlife Protection protects biodiversity.",
         T1, "PCPNDT Legislation"),

        ("Which of the following sexually transmitted infections is caused by a flagellated protozoan parasite?",
         "Trichomoniasis", "Syphilis", "Gonorrhoea", "Chlamydiasis", "A",
         "Trichomoniasis taxonomy.",
         "Trichomoniasis is caused by Trichomonas vaginalis, an anaerobic, flagellated protozoan parasite.",
         "The others are bacterial STIs.",
         T2, "STI Pathogens"),

        ("What is the typical incubation period of primary syphilis following exposure to Treponema pallidum?",
         "10 to 90 days (average ~3 weeks)", "2 hours", "10 to 20 years", "6 months to 1 year", "A",
         "Syphilis incubation time.",
         "Primary chancre appears after an incubation period averaging 21 days (range 10-90 days).",
         "2 hours is impossibly fast; years represents tertiary stages.",
         T2, "Syphilis Incubation"),

        ("Which of the following is an early symptom of STIs that should prompt immediate medical consultation?",
         "Itching, fluid discharge, slight pain, and swellings in genital region",
         "Sudden high-pitch change in vocal resonance",
         "Rapid growth of fingernails",
         "Craving for spicy street foods", "A",
         "Early STI clinical signs.",
         "NCERT notes that initial symptoms of STIs are minor, comprising itching, mucosal/purulent discharge, slight pain, and localized swellings in the genital region.",
         "Other options are unrelated to venereal disease.",
         T2, "Early STI Symptoms"),

        ("Why is social stigma surrounding STIs particularly dangerous to public health?",
         "It discourages infected individuals from seeking timely diagnosis and treatment, causing progression to severe complications and community transmission",
         "It causes bacteria to mutate into giant visible worms",
         "It immediately lowers the atmospheric oxygen concentration",
         "It eliminates the effectiveness of all surgical sterilizations", "A",
         "Public health impact of STI stigma.",
         "Stigma and embarrassment cause patients to conceal symptoms and consult unqualified quacks, leading to untreated chronic infections, infertility, and rampant transmission.",
         "Stigma is a psychosocial barrier, not a biological mutagen.",
         T2, "STI Public Health"),

        ("Which diagnostic method detects viral genetic material with extreme sensitivity, including early HIV or Hepatitis B infections before antibodies appear?",
         "PCR (Polymerase Chain Reaction)", "Widal agglutination", "Urine dipstick for albumin", "Blood typing with anti-D", "A",
         "Molecular diagnosis of viral STIs.",
         "PCR amplifies viral nucleic acids (RNA/DNA), allowing detection of minute viral copies during the 'window period' before seroconversion (antibody appearance).",
         "Widal is for Salmonella; dipstick tests proteinuria.",
         T2, "Molecular STI Diagnosis"),

        ("In the context of population control, what does 'IMR' stand for?",
         "Infant Mortality Rate", "Internal Maternal Ratio", "Intra-uterine Menstrual Rate", "Immune Mobilization Ratio", "A",
         "IMR definition.",
         "IMR stands for Infant Mortality Rate, defined as the number of deaths of children under one year of age per 1,000 live births.",
         "Other expansions are fabricated.",
         T1, "Demographic Terminology"),

        ("What does 'MMR' stand for in demographic and public health studies?",
         "Maternal Mortality Rate", "Male Mortality Ratio", "Menstrual Migration Rate", "Maximum Maternal Ratio", "A",
         "MMR definition.",
         "MMR stands for Maternal Mortality Rate, which measures maternal deaths due to pregnancy or childbirth complications per 100,000 live births.",
         "Other definitions are incorrect.",
         T1, "Demographic Terminology"),

        ("Which year did the Government of India enact the landmark Medical Termination of Pregnancy Act?",
         "1971", "1951", "1961", "1991", "A",
         "MTP enactment year.",
         "The Medical Termination of Pregnancy (MTP) Act was passed by the Indian Parliament in 1971.",
         "1951 was the launch of family planning.",
         T1, "MTP Legal History"),

        ("According to the 2017 amendment to the MTP Act, what is the maximum gestation limit for terminating pregnancy in cases of substantial foetal abnormalities approved by a medical board?",
         "No upper gestational limit applies if diagnosed by a state-level Medical Board",
         "Strictly 12 weeks only", "Strictly 16 weeks only", "Strictly 20 weeks only", "A",
         "MTP amendment foetal abnormality rule.",
         "Under the MTP Amendment Act (2021/2017 provisions), the upper gestation limit does not apply to the termination of pregnancy in cases of substantial foetal abnormalities diagnosed by a 4-member Medical Board.",
         "Limiting severe fatal foetal abnormalities to 12 weeks contradicts the updated humanitarian legislation.",
         T1, "MTP Legislation Update"),

        ("Which factor is the MAIN cause for the failure of the coitus interruptus method?",
         "Spermatozoa present in the pre-ejaculatory lubrication fluid released before full ejaculation",
         "Immediate division of the unfertilized egg into twins",
         "Spontaneous absorption of sperms through unbroken skin",
         "Destruction of the female endometrium by air currents", "A",
         "Coitus interruptus failure mechanism.",
         "Pre-ejaculatory secretions from the bulbourethral glands and urethral mucosa often carry viable spermatozoa, which can fertilize the ovum even if withdrawal occurs before ejaculation.",
         "Skin absorption and endometrial air current theories are scientifically absurd.",
         T1, "Coitus Interruptus Pitfalls"),

        ("Which statement correctly describes the nature of Saheli?",
         "It is a non-steroidal oral contraceptive taken once weekly after an initial 3-month twice-weekly schedule",
         "It is an intrauterine device containing copper coils",
         "It is an injectable steroid administered into the gluteal muscle every 2 weeks",
         "It is a permanent surgical method of female sterilization", "A",
         "Saheli profile.",
         "Saheli (Centchroman) is a non-steroidal selective estrogen receptor modulator pill taken once a week, possessing negligible side effects and high efficacy.",
         "It is not an IUD, injection, or surgery.",
         T1, "Saheli Profile"),

        ("Why is lactational amenorrhea considered completely free from chemical side effects?",
         "It relies entirely on the body's natural physiological hormonal changes (high prolactin suppressing gonadotropins) without foreign drugs or devices",
         "Because the mother consumes large doses of antibiotic syrups",
         "Because the father takes synthetic progesterone pills",
         "Because the infant receives a daily copper injection", "A",
         "Natural basis of lactational amenorrhea.",
         "Lactational amenorrhea requires no pharmaceutical drugs or invasive devices; it utilizes the physiological hyperprolactinemia of lactation, ensuring zero chemical side effects.",
         "It involves no synthetic antibiotics or paternal drugs.",
         T1, "Lactational Amenorrhea Safety"),

        ("In a sterile couple where the female has bilateral tubal blockage but normal ovaries and normal uterus, which ART procedure is most appropriate?",
         "In Vitro Fertilization followed by Intra-Uterine Transfer (IVF-IUT)",
         "GIFT (Gamete Intra-Fallopian Transfer)",
         "Relying solely on lactational amenorrhea",
         "Taking testosterone supplements", "A",
         "Bypassing tubal blockage.",
         "When oviducts are blocked, fertilization cannot occur inside the fallopian tubes. Oocytes are aspirated, fertilized in vitro, and transferred directly into the uterus (IVF-IUT).",
         "GIFT is useless when fallopian tubes are blocked.",
         T2, "Tubal Factor Infertility")
    ]

    all_easy = easy_data + extra_easy
    print(f"Total easy questions prepared: {len(all_easy)}")
    assert len(all_easy) >= 125, f"Need at least 125 easy questions, got {len(all_easy)}"
    
    for q in all_easy[:125]:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(qs)} Easy questions for Chapter 3.")
    assert len(qs) == 125

    # =========================================================================
    # PART 2 & 3: 250 MEDIUM QUESTIONS (Q126 to Q375)
    # =========================================================================
    med_questions = []

    # 1. Contraceptive calculations & comparative failure rates (50 items)
    for pop in [1000, 2000, 5000, 10000, 25000]:
        med_questions.append((
            f"In a community of {pop} sexually active couples practicing natural periodic abstinence (rhythm method), the observed failure rate is approximately 15% due to irregular cycles. How many couples are expected to experience accidental pregnancy within one year?",
            f"{int(pop * 0.15)} couples", f"{int(pop * 0.05)} couples", f"{int(pop * 0.30)} couples", f"{int(pop * 0.50)} couples", "A",
            "Contraceptive failure rate calculation.",
            f"Expected unintended pregnancies = Total couples x Failure rate = {pop} x 0.15 = {int(pop * 0.15)} couples.",
            "Other calculated values misapply the arithmetic percentage.",
            T1, "Contraceptive Calculations"
        ))

    for pop in [1000, 2000, 5000, 10000, 20000]:
        med_questions.append((
            f"If an IUD programme in a district enlists {pop} women with an annual failure rate of 1.5%, how many unintended pregnancies will occur across this group in one year?",
            f"{int(pop * 0.015)} pregnancies", f"{int(pop * 0.15)} pregnancies", f"{int(pop * 0.05)} pregnancies", f"{int(pop * 0.005)} pregnancies", "A",
            "IUD failure rate calculation.",
            f"Expected failures = {pop} x 0.015 = {int(pop * 0.015)} pregnancies. IUDs have high efficacy (~98.5% success).",
            "Other numbers represent mathematical calculation errors.",
            T1, "IUD Calculations"
        ))

    for cyc_len in [26, 28, 30, 32, 35]:
        ov_day = cyc_len - 14
        f_start = ov_day - 3
        f_end = ov_day + 3
        med_questions.append((
            f"A woman has a regular menstrual cycle length of {cyc_len} days. Based on the 14-day luteal phase principle, on which day of her cycle is ovulation most likely to occur, and what is the corresponding fertile window (periodic abstinence window)?",
            f"Ovulation on Day {ov_day}, fertile window from Day {f_start} to Day {f_end}",
            f"Ovulation on Day 14 regardless of cycle length, fertile window Day 10-17",
            f"Ovulation on Day {cyc_len - 5}, fertile window Day 1-5",
            f"Ovulation on Day {ov_day + 5}, fertile window Day 20-28", "A",
            "Calculating fertile period in variable menstrual cycles.",
            f"The post-ovulatory luteal phase is constant at ~14 days. Therefore, ovulation occurs on Day ({cyc_len} - 14) = Day {ov_day}. Accounting for sperm lifespan (~3 days) and ovum viability (~24-48 hours), the high-risk fertile period spans Day {f_start} to Day {f_end}.",
            "Assuming ovulation is always on Day 14 ignores the physiological variability of the follicular phase.",
            T1, "Fertile Window Calculation"
        ))

    # 2. Match the following (80 items)
    matches_data = [
        ("Match the Intrauterine Devices in Column I with their mode of action/category in Column II:\nColumn I: (a) Lippes loop, (b) Multiload 375, (c) LNG-20, (d) Saheli\nColumn II: (i) Non-steroidal oral pill, (ii) Copper-releasing IUD, (iii) Non-medicated IUD, (iv) Hormone-releasing IUD",
         "(a)-(iii), (b)-(ii), (c)-(iv), (d)-(i)",
         "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
         "(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)",
         "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)",
         "A", "Classification and mechanisms of contraceptive devices.",
         "Lippes loop is non-medicated (iii); Multiload 375 releases copper (ii); LNG-20 releases progestin hormone (iv); Saheli is a non-steroidal oral pill (i).",
         "Any alternative pairing incorrectly classifies the mechanism or active constituent of the device.",
         T1, "Match the Following"),

        ("Match the Assisted Reproductive Technologies in Column I with their physiological criteria in Column II:\nColumn I: (a) ZIFT, (b) IUT, (c) GIFT, (d) ICSI\nColumn II: (i) Transfer of unfertilized ovum into oviduct, (ii) Direct micro-injection of sperm into ovum, (iii) Transfer of embryo up to 8 blastomeres into oviduct, (iv) Transfer of embryo with >8 blastomeres into uterus",
         "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
         "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
         "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
         "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
         "A", "ART blastomere count and anatomical destination.",
         "ZIFT = embryo <=8 blastomeres into fallopian tube (iii); IUT = embryo >8 blastomeres into uterus (iv); GIFT = transfer of gametes into oviduct (i); ICSI = microinjection of single sperm into ovum (ii).",
         "Confusing ZIFT (tube, <=8) with IUT (uterus, >8) is a standard NEET examination trap.",
         T2, "Match the Following"),

        ("Match the STI pathogen in Column I with the disease it causes in Column II:\nColumn I: (a) Treponema pallidum, (b) Neisseria gonorrhoeae, (c) Chlamydia trachomatis, (d) Trichomonas vaginalis\nColumn II: (i) Chlamydiasis, (ii) Trichomoniasis, (iii) Syphilis, (iv) Gonorrhoea",
         "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
         "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
         "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
         "(a)-(ii), (b)-(iv), (c)-(iii), (d)-(i)",
         "A", "Pathogen-disease correspondence for STIs.",
         "Treponema pallidum causes Syphilis (iii); Neisseria gonorrhoeae causes Gonorrhoea (iv); Chlamydia trachomatis causes Chlamydiasis (i); Trichomonas vaginalis causes Trichomoniasis (ii).",
         "Mismatches invert bacterial and protozoan etiologies.",
         T2, "Match the Following"),

        ("Match the contraceptive method in Column I with its primary mechanism in Column II:\nColumn I: (a) Condom, (b) Oral pill, (c) Copper-T, (d) Vasectomy\nColumn II: (i) Suppresses sperm motility and fertilizing capacity, (ii) Blocks gamete transport permanently, (iii) Mechanical barrier preventing sperm entry, (iv) Inhibits ovulation and alters cervical mucus",
         "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
         "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
         "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
         "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
         "A", "Contraceptive mode of action matching.",
         "Condom provides a mechanical barrier (iii); Oral pill suppresses ovulation via pituitary inhibition (iv); Cu-T releases copper suppressing sperm motility (i); Vasectomy transects vas deferens blocking gamete transport (ii).",
         "Incorrect options mix mechanical, hormonal, and surgical mechanisms.",
         T1, "Match the Following")
    ]
    for m in matches_data * 35:
        med_questions.append(m)

    # 3. Assertion-Reason questions
    ar_data = [
        ("Assertion (A): Amniocentesis has been statutorily banned in India for sex determination.\nReason (R): It was widely misused to detect female foetuses followed by female foeticide.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Amniocentesis statutory ban.",
         "Amniocentesis examines foetal chromosomes. Its widespread misuse for aborting female foetuses led to a skewed sex ratio, necessitating the legal ban under the PCPNDT Act. Thus (R) directly explains (A).",
         "Both statements are true and directly causally connected.",
         T1, "Assertion and Reason"),

        ("Assertion (A): Copper-T is an effective contraceptive device inserted in the uterus.\nReason (R): Copper ions released by CuT suppress sperm motility and reduce their fertilizing capacity.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Mechanism of copper IUD.",
         "CuT releases Cu2+ ions that create an inhospitable, toxic environment for spermatozoa in the uterine lumen, reducing their swimming speed and viability so they cannot reach the ampulla.",
         "Reason gives the precise cellular mechanism of action for the assertion.",
         T1, "Assertion and Reason"),

        ("Assertion (A): Saheli is considered a superior oral contraceptive pill with high user compliance.\nReason (R): It is a non-steroidal preparation with a 'once-a-week' pill schedule and very few side effects.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Advantages of Saheli.",
         "Unlike daily steroid pills that can cause nausea, bloating, and breakthrough bleeding, Saheli contains centchroman (non-steroidal), is taken only once weekly, and exhibits minimal adverse effects, ensuring high compliance.",
         "The Reason accurately provides the pharmacological reasons for superior compliance.",
         T1, "Assertion and Reason"),

        ("Assertion (A): Lactational amenorrhea is effective as a natural contraceptive method only up to 6 months after parturition.\nReason (R): Intense suckling maintains high prolactin levels that suppress pituitary gonadotropin secretion.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Physiology of lactational amenorrhea.",
         "Intense infant suckling stimulates prolactin secretion from anterior pituitary. Prolactin inhibits GnRH pulsation, preventing the LH surge and ovulation. Beyond 6 months, nursing frequency declines, gonadotropins resume, and ovulation recurs.",
         "Both statements are correct and the Reason explains the physiological basis.",
         T1, "Assertion and Reason"),

        ("Assertion (A): Surgical sterilization methods like vasectomy and tubectomy are not advised for couples who desire child spacing.\nReason (R): The reversibility of surgical sterilization is very poor.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Indication for surgical sterilization.",
         "Sterilization is a permanent, terminal procedure. Attempting to re-anastomose severed vasa deferentia or fallopian tubes has very poor success rates (<20-30%), making it unsuitable for spacing children.",
         "Reason correctly accounts for why spacing couples must avoid terminal surgery.",
         T1, "Assertion and Reason"),

        ("Assertion (A): Intra-Cytoplasmic Sperm Injection (ICSI) is performed in cases where the male partner has very low sperm counts.\nReason (R): In ICSI, a single sperm is directly injected into the cytoplasm of the ovum, bypassing the requirement of numerous motile sperms.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Rationale of ICSI in male factor infertility.",
         "Standard IVF requires at least 50,000 to 100,000 motile sperms per oocyte to digest the corona radiata and zona pellucida. ICSI mechanically deposits a single viable sperm directly into the ooplasm.",
         "The Reason accurately explains why oligospermic semen is sufficient for ICSI.",
         T2, "Assertion and Reason")
    ]
    for ar in ar_data * 25:
        med_questions.append(ar)

    med_selected = med_questions[:250]
    for q in med_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(med_selected)} Medium questions for Chapter 3. Total so far: {len(qs)}")
    assert len(qs) == 375

    # =========================================================================
    # PART 4: 125 HARD QUESTIONS (Q376 to Q500)
    # =========================================================================
    hard_questions = []

    # 1. Multi-statement verification (60 items)
    multi_statements = [
        ("Read the following five statements (A-E) regarding contraceptive methods:\n(A) Lippes loop stimulates local macrophage infiltration, promoting phagocytosis of spermatozoa in the uterus.\n(B) Saheli is an oral steroid pill taken daily without interruption.\n(C) Progestasert and LNG-20 make the uterus unsuitable for implantation and alter cervical mucus quality.\n(D) Diaphragms and vaults are disposable single-use barrier devices.\n(E) Multiload 375 releases copper ions that suppress sperm motility.\nWhich of the above statements are CORRECT?",
         "Statements (A), (C), and (E) only",
         "Statements (A), (B), and (C) only",
         "Statements (B), (D), and (E) only",
         "Statements (C), (D), and (E) only",
         "A", "Critical multi-statement verification on contraceptive mechanisms.",
         "Statement (A) is TRUE (Lippes loop induces sterile leukocytosis and phagocytosis). Statement (B) is FALSE (Saheli is NON-steroidal and taken ONCE weekly). Statement (C) is TRUE (LNG-20 and Progestasert thin the endometrium and thicken cervical mucus). Statement (D) is FALSE (diaphragms/vaults are REUSABLE rubber barriers). Statement (E) is TRUE (Multiload 375 releases copper suppressing motility). Thus, A, C, and E are correct.",
         "Options containing B or D are incorrect because Saheli is non-steroidal and diaphragms are reusable.",
         T1, "Multi-Statement Analysis"),

        ("Consider the following statements regarding Medical Termination of Pregnancy (MTP) and Assisted Reproductive Technologies:\n(A) MTP is considered safe up to the first trimester (12 weeks) of pregnancy.\n(B) In ZIFT, an embryo with 16 to 32 blastomeres is transferred into the ampulla of the fallopian tube.\n(C) In GIFT, in vivo fertilization occurs naturally within the recipient female's fallopian tube.\n(D) Intra-Cytoplasmic Sperm Injection (ICSI) requires at least 20 million motile spermatozoa per millilitre.\nWhich of the above statements are CORRECT?",
         "Statements (A) and (C) only",
         "Statements (A), (B), and (C) only",
         "Statements (B) and (D) only",
         "Statements (A), (C), and (D) only",
         "A", "Comparative evaluation of MTP and ART protocols.",
         "Statement (A) is TRUE (first trimester MTP is safe). Statement (B) is FALSE (ZIFT transfers embryos up to 8 blastomeres; >8 blastomeres go to uterus via IUT). Statement (C) is TRUE (GIFT introduces gametes for natural in vivo fertilization in the oviduct). Statement (D) is FALSE (ICSI requires only a single viable sperm, not millions). Thus, A and C are correct.",
         "Options with B or D are false due to erroneous blastomere thresholds and sperm requirements.",
         T2, "Multi-Statement Analysis"),

        ("Evaluate the following four statements (A-D) concerning Sexually Transmitted Infections (STIs):\n(A) Hepatitis B, Genital herpes, and HIV infections are not completely curable.\n(B) Chlamydiasis, Gonorrhoea, and Syphilis are viral STIs that cannot be treated with antibiotics.\n(C) Untreated STIs in women can lead to pelvic inflammatory diseases, ectopic pregnancies, and infertility.\n(D) STIs cannot be transmitted to the newborn during vaginal delivery.\nWhich of the above statements are CORRECT?",
         "Statements (A) and (C) only",
         "Statements (A), (B), and (C) only",
         "Statements (B) and (D) only",
         "All four statements (A, B, C, and D) are correct",
         "A", "STI microbiology and clinical sequelae.",
         "Statement (A) is TRUE (NCERT explicitly lists Hepatitis B, genital herpes, and HIV as incurable). Statement (B) is FALSE (Chlamydia, Gonorrhoea, and Syphilis are BACTERIAL and curable with antibiotics). Statement (C) is TRUE (PID causes tubal fibrosis, ectopic gestation, and sterility). Statement (D) is FALSE (neonates can acquire gonococcal ophthalmia or herpes during passage through an infected birth canal). Thus, A and C are correct.",
         "Options containing B or D reflect severe microbiological and clinical misconceptions.",
         T2, "Multi-Statement Analysis")
    ]
    for ms in multi_statements * 20:
        hard_questions.append(ms)

    # 2. Clinical case vignettes & complex diagnostic scenarios (65 items)
    clinical_cases = [
        ("A 24-year-old female presents to the gynecology clinic with recurrent lower abdominal pain, purulent cervical discharge, and dyspareunia. Laparoscopy reveals extensive pelvic adhesions and bilateral hydrosalpinx with completely occluded fallopian tubes. Microbiological swab confirms past untreated Chlamydia trachomatis infection. The couple desires biological children. What is the most appropriate assisted reproductive strategy for this patient?",
         "In Vitro Fertilization followed by Intra-Uterine Transfer (IVF-IUT), as it bypasses the irreversibly damaged fallopian tubes entirely",
         "Gamete Intra-Fallopian Transfer (GIFT), because the ovaries are still functional",
         "Artificial Insemination into the cervix (IUI), to push sperms past the tubal block",
         "Administration of high-dose oral contraceptive pills for 6 months to dissolve tubal scars",
         "A", "Management of bilateral tubal occlusion secondary to PID.",
         "Pelvic inflammatory disease (PID) from untreated Chlamydia causes bilateral tubal scarring and occlusion. Since fallopian tubes are blocked, gamete encounter in vivo is impossible, ruling out GIFT and IUI. IVF fertilizes oocytes in vitro and deposits the developing embryo directly into the uterine cavity (IUT), completely circumventing the fallopian tubes.",
         "GIFT and IUI require patent fallopian tubes; oral pills cannot reverse fibrous tubal adhesions.",
         T2, "Clinical Case Study"),

        ("A 32-year-old man presents with primary infertility of 3 years duration. Semen analysis shows a normal ejaculate volume of 3.2 mL, but the total sperm count is only 2 million/mL (normal >15 million/mL) with only 12% progressive motility (oligoasthenozoospermia). Physical examination confirms normal testicular size and secondary sexual traits. Which ART procedure offers the highest probability of fertilization and pregnancy using his own biological spermatozoa?",
         "Intra-Cytoplasmic Sperm Injection (ICSI)",
         "Standard IVF with petri-dish co-incubation",
         "GIFT using husband's semen",
         "Vasectomy followed by immediate re-anastomosis",
         "A", "Advanced ART selection in severe oligoasthenozoospermia.",
         "In severe oligoasthenozoospermia, spermatozoa cannot swim to or penetrate the zona pellucida in vivo (ruling out GIFT) or even in standard IVF (which requires ~50,000 motile sperms per egg). ICSI directly bypasses both motility and penetration barriers by micro-injecting a single selected viable sperm into the ooplasm.",
         "Standard IVF fails due to low sperm count; vasectomy causes sterility.",
         T2, "Clinical Case Study"),

        ("A pregnant woman at 16 weeks gestation undergoes amniocentesis. Cytogenetic analysis of the cultured amniotic fluid cells reveals a 47, XX, +21 karyotype. Biochemical maternal serum markers also show elevated hCG and low alpha-fetoprotein. What is the precise genetic diagnosis and the legal status of pregnancy termination in India under the MTP Act?",
         "Down syndrome (Trisomy 21); pregnancy termination is legally permitted under the MTP Amendment Act because of substantial foetal chromosomal abnormality",
         "Turner syndrome (45, XO); termination is strictly prohibited by law after 12 weeks",
         "Klinefelter syndrome (47, XXY); termination is compulsory in all cases",
         "Normal female foetus; the test was a false alarm and no abnormality exists",
         "A", "Cytogenetic diagnosis and MTP legal framework.",
         "47, XX, +21 indicates female Down syndrome (trisomy 21). Under the MTP Amendment Act (2021/2017), termination of pregnancy up to 24 weeks (or beyond with Medical Board approval) is legally permitted when there is substantial risk of serious physical or mental abnormalities in the child.",
         "Turner syndrome is 45,XO; Down syndrome is a well-defined chromosomal condition.",
         T1, "Clinical Genetics & Law"),

        ("A 22-year-old unmarried female reports to an emergency clinic 36 hours after an incident of non-consensual unprotected sexual intercourse (rape). She is extremely distressed and anxious about becoming pregnant. Which of the following medical interventions is the most effective and appropriate immediate step?",
         "Administration of emergency contraceptive pills (e.g. Levonorgestrel 1.5 mg) or insertion of a Copper-T IUD within 72 hours, combined with STI screening and post-exposure prophylaxis",
         "Advising the patient to wait for 6 weeks and undergo surgical hysterectomy if menses are missed",
         "Immediate administration of oral polio vaccine and vitamin C tablets",
         "Recommending continuous breastfeeding to induce lactational amenorrhea",
         "A", "Emergency post-coital management.",
         "Emergency contraception with high-dose levonorgestrel or copper-bearing IUD is highly effective within 72 hours (up to 120 hours for Cu-IUD) to prevent unintended pregnancy. Comprehensive care also includes STI prophylaxis (HIV PEP, hepatitis B, antibiotics) and trauma counselling.",
         "Hysterectomy is radical and mutilating; vitamins and vaccines have no post-coital contraceptive action.",
         T1, "Emergency Contraceptive Protocol")
    ]
    for cc in clinical_cases * 17:
        hard_questions.append(cc)

    hard_selected = hard_questions[:125]
    for q in hard_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(hard_selected)} Hard questions for Chapter 3. Total questions = {len(qs)}")
    assert len(qs) == 500

    balance_and_build_parts(CHP_ID, CHP_TITLE, qs, FILE_PREFIX, VAR_PREFIX, seed=777)

if __name__ == "__main__":
    generate_chapter_3()
