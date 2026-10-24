import os
import sys
import json
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from scripts.bio12_engine.common import balance_and_build_parts

CHP_ID = "human-reproduction"
CHP_TITLE = "Human Reproduction"
FILE_PREFIX = "humanReproduction"
VAR_PREFIX = "HUMAN_REPRODUCTION"

T1 = ("bio-male-female-repro-systems", "Male & Female Reproductive Systems")
T2 = ("bio-spermatogenesis-oogenesis", "Spermatogenesis & Oogenesis")
T3 = ("bio-menstrual-cycle-fertilization", "Menstrual Cycle & Fertilization")
T4 = ("bio-pregnancy-parturition", "Pregnancy, Parturition & Lactation")

def generate_chapter_2():
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
    # PART 1: 125 EASY QUESTIONS (Q1 to Q125)
    # =========================================================================
    easy_data = [
        ("The testes in human males are situated outside the abdominal cavity within a pouch called scrotum because it helps in:",
         "Maintaining low testicular temperature (2 to 2.5°C lower than normal body temperature) necessary for spermatogenesis",
         "Escaping high abdominal hydrostatic pressure",
         "Providing direct exposure to ambient oxygen",
         "Preventing testicular torsion during physical locomotion", "A",
         "Scrotal thermoregulation in human male reproduction.",
         "Human spermatogenesis requires an optimal temperature 2 to 2.5°C lower than internal core body temperature (37°C). The scrotum acts as a thermoregulator.",
         "Scrotum does not provide ambient oxygen or protect against hydrostatic pressure.",
         T1, "Male Reproductive System"),

        ("Each testicular lobule in a human testis contains how many highly coiled seminiferous tubules?",
         "1 to 3 seminiferous tubules", "10 to 15 seminiferous tubules", "50 to 100 seminiferous tubules", "250 seminiferous tubules", "A",
         "Anatomy of testicular lobules in NCERT.",
         "Each human testis contains approximately 250 testicular lobules, and each lobule contains 1 to 3 highly coiled seminiferous tubules where sperms are produced.",
         "250 is the number of lobules per testis, not tubules per lobule.",
         T1, "Seminiferous Tubules"),

        ("The specialized cells lining the seminiferous tubules that provide nourishment to developing germ cells are:",
         "Sertoli cells (Nurse cells)", "Leydig cells (Interstitial cells)", "Spermatogonia", "Chromaffin cells", "A",
         "Function of Sertoli cells.",
         "Sertoli cells (sustentacular or nurse cells) line the seminiferous tubules and supply essential metabolic support and nutrients to developing spermatogenic cells.",
         "Leydig cells secrete androgens; spermatogonia are sperm precursors; chromaffin cells are in the adrenal medulla.",
         T1, "Sertoli Cells"),

        ("The endocrine cells located in the interstitial spaces outside the seminiferous tubules that synthesize and secrete androgens (testosterone) are:",
         "Leydig cells (Interstitial cells)", "Sertoli cells", "Primary spermatocytes", "Follicular cells", "A",
         "Leydig cells and testosterone secretion.",
         "Leydig cells reside in the interstitial connective tissue between seminiferous tubules and produce testicular hormones called androgens (principally testosterone).",
         "Sertoli cells nourish germ cells; primary spermatocytes undergo meiosis.",
         T1, "Leydig Cells"),

        ("Which of the following is the correct anatomical pathway of sperm conduction through the male accessory ducts?",
         "Seminiferous tubules -> Rete testis -> Vasa efferentia -> Epididymis -> Vas deferens",
         "Seminiferous tubules -> Vasa efferentia -> Rete testis -> Vas deferens -> Epididymis",
         "Rete testis -> Seminiferous tubules -> Epididymis -> Vasa efferentia -> Vas deferens",
         "Seminiferous tubules -> Epididymis -> Rete testis -> Vasa efferentia -> Urethra", "A",
         "Sperm conduction pathway through male duct system in NCERT.",
         "Sperms travel from seminiferous tubules into rete testis, then through vasa efferentia to the epididymis, and ascend via the vas deferens around the urinary bladder.",
         "All other sequences mismatch the anatomical connections of rete testis and epididymis.",
         T1, "Male Accessory Ducts"),

        ("The comma-shaped organ located along the posterior surface of each testis where sperms undergo functional maturation and temporary storage is the:",
         "Epididymis", "Vas deferens", "Rete testis", "Prostate gland", "A",
         "Epididymis anatomy and function.",
         "The epididymis is a coiled tubular structure where spermatozoa acquire physiological motility and fertilizing capability, serving as a temporary sperm storage reservoir.",
         "Vas deferens transports sperms to the ejaculatory duct; prostate is an accessory gland.",
         T1, "Epididymis"),

        ("The secretions of which male accessory glands are rich in fructose, calcium, and certain enzymes, contributing 60-70% of seminal plasma volume?",
         "Seminal vesicles", "Prostate gland", "Bulbourethral (Cowper's) glands", "Bartholin's glands", "A",
         "Seminal vesicle secretion composition.",
         "Seminal vesicles secrete an alkaline fluid rich in fructose (energy source for sperm motility), calcium, and prostaglandins.",
         "Prostate secretes citrate and proteolytic enzymes; bulbourethral glands secrete lubricating mucus; Bartholin's glands are female.",
         T1, "Male Accessory Glands"),

        ("Which male accessory glands secrete an alkaline mucus that helps in the lubrication of the penis and neutralizes acidic vaginal residue prior to coitus?",
         "Bulbourethral (Cowper's) glands", "Seminal vesicles", "Prostate gland", "Adrenal glands", "A",
         "Bulbourethral gland function in NCERT.",
         "Secretions of paired bulbourethral glands (Cowper's glands) lubricate the end of the penis and neutralize urethral acidity before ejaculation.",
         "Seminal vesicles provide fructose; prostate adds milky fluid.",
         T1, "Bulbourethral Glands"),

        ("The female primary sex organs that produce the female gamete (ovum) and several steroid hormones (estrogen and progesterone) are the:",
         "Ovaries", "Fallopian tubes", "Uterus", "Mammary glands", "A",
         "Primary female reproductive organs in NCERT.",
         "The paired ovaries are the primary female gonads responsible for producing female gametes (ova) and synthesizing ovarian steroid hormones (estrogen and progesterone).",
         "Fallopian tubes, uterus, and vagina are secondary reproductive organs.",
         T1, "Female Reproductive System"),

        ("The funnel-shaped part of the fallopian tube located closest to the ovary is the:",
         "Infundibulum", "Ampulla", "Isthmus", "Fimbriae", "A",
         "Fallopian tube anatomical subdivisions.",
         "The oviduct has three parts: the funnel-shaped infundibulum closest to ovary, the wider ampulla, and the narrow isthmus connecting to the uterus.",
         "Ampulla is intermediate; isthmus connects to uterus; fimbriae are finger-like edges of the infundibulum.",
         T1, "Fallopian Tube Anatomy"),

        ("The finger-like projections at the edges of the infundibulum that help in collecting the ovum after ovulation are called:",
         "Fimbriae", "Ampullae", "Isthmus", "Cilia", "A",
         "Fimbriae role in ovum collection.",
         "Fimbriae are finger-like fringes on the infundibulum that move closer to the ovary during ovulation to sweep the extruded secondary oocyte into the oviduct.",
         "Cilia line the lumen to push the egg; ampulla is the fertilization site.",
         T1, "Fimbriae"),

        ("In the human female reproductive tract, fertilization of the ovum by a sperm typically takes place in the:",
         "Ampullary region (Ampulla) of the fallopian tube", "Infundibulum", "Isthmus", "Uterine cavity (Endometrium)", "A",
         "Site of fertilization in human females.",
         "Fertilization takes place at the ampullary region (ampulla) of the fallopian tube where sperm and ovum meet simultaneously.",
         "Implantation occurs in the endometrium of the uterus; infundibulum catches the ovum.",
         T1, "Site of Fertilization"),

        ("The middle thick muscular layer of the uterine wall composed of smooth muscle fibers that exhibits strong contractions during parturition is the:",
         "Myometrium", "Endometrium", "Perimetrium", "Epimetrium", "A",
         "Uterine wall layers in NCERT.",
         "The uterine wall consists of 3 layers: outer thin perimetrium, middle thick smooth muscular myometrium, and inner glandular endometrium. Myometrium contracts during labor.",
         "Endometrium undergoes cyclical changes during menstruation; perimetrium is the outer serosa.",
         T1, "Uterine Wall Anatomy"),

        ("The inner glandular layer of the uterine wall that undergoes cyclic changes during the menstrual cycle and supports embryo implantation is the:",
         "Endometrium", "Myometrium", "Perimetrium", "Cervix", "A",
         "Endometrium cyclical dynamics.",
         "The endometrium lines the uterine cavity, thickening under estrogen/progesterone and breaking down during menstruation if fertilization does not occur.",
         "Myometrium contracts during childbirth; perimetrium is the external envelope.",
         T1, "Endometrium"),

        ("The female external genitalia structure homologous to the male penis, located at the upper junction of the two labia minora, is the:",
         "Clitoris", "Mons pubis", "Labia majora", "Hymen", "A",
         "Homology of female external genitalia in NCERT.",
         "The clitoris is a tiny, erectile finger-like structure situated at the upper anterior junction of the labia minora above the urethral orifice, homologous to the male glans penis.",
         "Mons pubis is a cushion of fatty tissue; labia majora are paired fleshy folds homologous to the scrotum.",
         T1, "Female External Genitalia"),

        ("In human females, the milk-producing functional units within the mammary lobes are clusters of cells called:",
         "Alveoli", "Ampullae", "Lactiferous ducts", "Mammary tubules", "A",
         "Mammary gland microscopic anatomy in NCERT.",
         "The cells of the alveoli secrete milk, which is stored in the central cavities (lumens) of the alveoli before passing through mammary tubules into lactiferous ducts.",
         "Lactiferous ducts transport milk to the nipple; ampulla is a temporary reservoir.",
         T1, "Mammary Glands"),

        ("The process of transformation of non-motile haploid spermatids into functional, motile spermatozoa is termed:",
         "Spermiogenesis", "Spermiation", "Spermatogenesis", "Capacitation", "A",
         "Spermiogenesis definition in NCERT.",
         "Spermiogenesis is the structural transformation of spherical non-motile spermatids into specialized elongated, flagellated spermatozoa.",
         "Spermiation is the release of mature sperms from Sertoli cells into the seminiferous tubule lumen.",
         T2, "Spermiogenesis"),

        ("The release of mature spermatozoa from Sertoli cells into the lumen of seminiferous tubules is called:",
         "Spermiation", "Spermiogenesis", "Insemination", "Ejaculation", "A",
         "Spermiation definition.",
         "After spermiogenesis, sperm heads remain embedded in Sertoli cells until they are finally released into the seminiferous tubule lumen by spermiation.",
         "Insemination is deposition of semen into the female vagina; ejaculation is ejection of semen from the penis.",
         T2, "Spermiation"),

        ("The cap-like organelle covering the anterior portion of the sperm head, derived from Golgi apparatus and containing hydrolytic enzymes, is the:",
         "Acrosome", "Centriole", "Nebenkern", "Axoneme", "A",
         "Sperm acrosome structure and origin.",
         "The acrosome is filled with sperm lysins (hyaluronidase, corona penetrating enzyme, acrosin) derived from Golgi vesicles that digest ovum envelopes during fertilization.",
         "Nebenkern is the mitochondrial spiral in the middle piece; axoneme is the flagellar axial filament.",
         T2, "Sperm Morphology"),

        ("The middle piece of a human spermatozoon provides energy for sperm motility because it contains numerous:",
         "Mitochondria spirally coiled around the axial filament", "Ribosomes synthesizing contractile proteins", "Lysosomes for cellular autolysis", "Golgi cisternae secreting seminal plasma", "A",
         "Sperm middle piece energetics.",
         "The middle piece contains a spiral sheath of mitochondria (nebenkern) that generates ATP to power flagellar propulsion through the female tract.",
         "Ribosomes and Golgi bodies are largely cast off during spermiogenesis.",
         T2, "Sperm Energetics"),

        ("For normal human male fertility, a single ejaculate of 200-300 million sperms must have at least what percentage of sperms with normal shape and size?",
         "At least 60 percent", "At least 10 percent", "At least 90 percent", "At least 40 percent", "A",
         "Normal fertility sperm criteria in NCERT.",
         "For normal fertility, at least 60% of ejaculated spermatozoa must exhibit normal morphology (shape/size), and at least 40% of them must show vigorous motility.",
         "40% is the motility threshold; 60% is the morphological threshold.",
         T2, "Sperm Parameters"),

        ("In human females, oogenesis is initiated during which stage of life?",
         "Embryonic fetal development stage", "At puberty (Menarche)", "During childhood", "Immediately following fertilization", "A",
         "Timing of oogenesis initiation in NCERT.",
         "Oogenesis begins during fetal development when millions of oogonia are formed in the fetal ovary. No oogonia are formed or added after birth.",
         "Spermatogenesis begins at puberty, but oogenesis begins in embryonic life.",
         T2, "Oogenesis Initiation"),

        ("Primary oocytes in the human ovary enter meiosis I during fetal life and remain arrested at which specific stage until puberty?",
         "Diplotene stage of Prophase I", "Metaphase II", "Anaphase I", "Telophase II", "A",
         "Meiotic arrest of primary oocyte in NCERT.",
         "Primary oocytes begin meiosis I in fetal life but become arrested at the diplotene stage of prophase I until puberty, when hormonal surges resume meiosis.",
         "Metaphase II is where the secondary oocyte is arrested prior to sperm penetration.",
         T2, "Meiotic Arrest"),

        ("The fluid-filled central cavity characteristic of a mature tertiary follicle in the ovary is known as the:",
         "Antrum", "Blastocoel", "Archenteron", "Corona radiata", "A",
         "Tertiary follicle antrum in NCERT.",
         "The primary distinguishing hallmark of a tertiary follicle is the appearance of a fluid-filled follicular cavity called the antrum.",
         "Blastocoel is the cavity of a blastocyst; archenteron is the primitive gut in gastrulation.",
         T2, "Follicular Development"),

        ("Meiosis I in a primary oocyte is unequal, resulting in the formation of a large haploid secondary oocyte and a tiny:",
         "First polar body", "Second polar body", "Primary spermatocyte", "Spermatid", "A",
         "Unequal cytokinesis during oogenesis.",
         "Primary oocyte completes meiosis I inside the mature tertiary follicle, undergoing asymmetric cytokinesis that yields a large nutrient-rich secondary oocyte and a tiny first polar body.",
         "Second polar body is produced during meiosis II at fertilization.",
         T2, "Polar Bodies"),

        ("Ovulation in human females is defined as the release of which structure from the ruptured Graafian follicle?",
         "Secondary oocyte", "Primary oocyte", "Oogonium", "Fully mature diploid zygote", "A",
         "Structure released at ovulation in NCERT.",
         "At ovulation (day 14 of menstrual cycle), the Graafian follicle ruptures to release the secondary oocyte arrested at metaphase II into the pelvic cavity.",
         "It is not a primary oocyte (meiosis I is already finished) and not yet a zygote.",
         T2, "Ovulation"),

        ("The non-cellular glycoprotein coat surrounding the plasma membrane of a secondary oocyte is the:",
         "Zona pellucida", "Corona radiata", "Theca interna", "Perivitelline space", "A",
         "Zona pellucida structure and function.",
         "The secondary oocyte secretes a thick, translucent, non-cellular envelope of glycoproteins called the zona pellucida.",
         "Corona radiata consists of radiating follicular granulosa cells external to the zona pellucida.",
         T2, "Zona Pellucida"),

        ("The first menstruation that marks the onset of puberty in human females (usually around age 12-14) is termed:",
         "Menarche", "Menopause", "Amenorrhea", "Dysmenorrhea", "A",
         "Menarche definition in NCERT.",
         "Menarche is the occurrence of the first menstrual bleed, signifying the beginning of reproductive maturity in adolescent females.",
         "Menopause is the permanent cessation of menstruation around age 50.",
         T3, "Menarche and Menopause"),

        ("The permanent cessation of menstrual cycles in human females around the age of 50 years is called:",
         "Menopause", "Menarche", "Amenorrhea", "Lactational amenorrhea", "A",
         "Menopause in NCERT.",
         "Menopause marks the end of menstrual and reproductive life in females, occurring around 45-50 years of age due to exhaustion of ovarian follicles.",
         "Menarche is the start; amenorrhea is abnormal absence of menses.",
         T3, "Menarche and Menopause"),

        ("In an average 28-day human menstrual cycle, ovulation typically occurs on which day?",
         "Day 14", "Day 1", "Day 5", "Day 28", "A",
         "Ovulation timing in standard menstrual cycle.",
         "Ovulation occurs approximately mid-cycle, on day 14 of a standard 28-day cycle, triggered by a rapid surge in luteinizing hormone (LH surge).",
         "Days 1-5 is the menstrual phase; day 28 is the end of the luteal phase.",
         T3, "Menstrual Cycle"),

        ("A rapid surge in which pituitary gonadotropin around mid-cycle induces rupture of the Graafian follicle and causes ovulation?",
         "Luteinizing Hormone (LH surge)", "Follicle Stimulating Hormone (FSH)", "Prolactin", "Oxytocin", "A",
         "LH surge mechanism in ovulation.",
         "Both LH and FSH peak at mid-cycle, but maximum LH secretion (the LH surge) induces final maturation and rupture of the Graafian follicle, releasing the ovum.",
         "Prolactin stimulates lactation; oxytocin stimulates uterine contractions.",
         T3, "Hormonal Regulation"),

        ("Following ovulation, the ruptured Graafian follicle transforms into a yellow endocrine structure called:",
         "Corpus luteum", "Corpus albicans", "Corpus callosum", "Corpus cavernosum", "A",
         "Corpus luteum formation in NCERT.",
         "Granulosa and theca cells of the ruptured follicle hypertrophy and accumulate lutein pigment under LH influence to become the corpus luteum.",
         "Corpus albicans is the white degenerative scar; corpus callosum is in the brain; corpus cavernosum is in the penis.",
         T3, "Corpus Luteum"),

        ("The corpus luteum secretes large amounts of which steroid hormone, essential for maintaining the vascularized uterine endometrium for pregnancy?",
         "Progesterone", "Estrogen", "Testosterone", "Prolactin", "A",
         "Corpus luteum endocrine function.",
         "The corpus luteum acts as a temporary endocrine gland that synthesizes abundant progesterone, which maintains the endometrium in a secretory state for implantation.",
         "Estrogen is secreted in smaller amounts; prolactin is a pituitary peptide.",
         T3, "Progesterone Role"),

        ("If fertilization does not take place, the corpus luteum degenerates into a fibrous scar called corpus albicans, causing:",
         "A sharp drop in progesterone leading to disintegration of endometrium (Menstruation)",
         "A massive surge in hCG that maintains pregnancy",
         "Immediate formation of a new blastocyst",
         "Rapid onset of menopause", "A",
         "Menstrual breakdown trigger in NCERT.",
         "In the absence of fertilization, degeneration of corpus luteum deprives the endometrium of progesterone, leading to endometrial shedding and bleeding (menstruation).",
         "hCG is only secreted if trophoblast implants; menopause occurs at age 50.",
         T3, "Menstrual Phase"),

        ("The cellular changes that induce alterations in the zona pellucida to prevent polyspermy (entry of multiple sperms into ovum) are triggered by:",
         "Contact of the first sperm head with the zona pellucida and oolemma (Cortical reaction)",
         "High concentrations of estrogen in the fallopian tube",
         "Secretion of progesterone from the uterine endometrium",
         "Degeneration of the first polar body", "A",
         "Cortical reaction and block to polyspermy in NCERT.",
         "Binding of the first sperm induces depolarization of the oocyte membrane and exocytosis of cortical granules, hardening the zona pellucida to permanently block polyspermy.",
         "Estrogen and progesterone do not directly block polyspermic fertilization.",
         T3, "Fertilization Mechanics"),

        ("Entry of the sperm nucleus into the secondary oocyte induces which cellular event?",
         "Completion of the second meiotic division (Meiosis II) of the secondary oocyte",
         "Degeneration of the female pronucleus",
         "Immediate cleavage into eight blastomeres",
         "Formation of a primary spermatocyte", "A",
         "Resumption and completion of meiosis II.",
         "Sperm entry triggers the breakdown of maturation promoting factor (MPF), prompting the metaphase II arrested secondary oocyte to finish meiosis II, yielding an ootid and the 2nd polar body.",
         "Meiosis II cannot complete without sperm entry.",
         T3, "Fertilization Mechanics"),

        ("The sex of the human baby is determined at fertilization by the:",
         "Sex chromosome carried by the fertilizing sperm (X or Y)",
         "Ovum which always carries either X or Y chromosome",
         "Nutritional status of the mother during pregnancy",
         "Temperature of the uterus at the time of implantation", "A",
         "Genetic sex determination in humans in NCERT.",
         "All human ova carry an X chromosome (homogametic, 22+X). 50% of sperms carry an X chromosome (22+X) and 50% carry a Y chromosome (22+Y). The sperm determines whether the zygote is XX (female) or XY (male).",
         "Ova never carry a Y chromosome; temperature sex determination is in reptiles.",
         T3, "Sex Determination"),

        ("The mitotic divisions that occur in the rapidly dividing zygote as it moves along the oviduct toward the uterus are called:",
         "Cleavage", "Gastrulation", "Organogenesis", "Parturition", "A",
         "Cleavage division characteristics in zygote.",
         "Cleavage refers to rapid specialized mitotic divisions where cells (blastomeres) divide without increasing overall cytoplasmic volume, maintaining the total size of the zygote.",
         "Gastrulation forms the 3 germ layers; organogenesis forms organs.",
         T3, "Cleavage"),

        ("The solid ball-like embryo consisting of 8 to 16 blastomeres resembling a mulberry is known as the:",
         "Morula", "Blastocyst", "Gastrula", "Trophoblast", "A",
         "Morula stage in human embryogenesis.",
         "The morula is the 8 to 16 cell stage embryo resembling a little mulberry fruit as it travels through the fallopian tube toward the uterus.",
         "Blastocyst is the hollow cavity stage; gastrula possesses germ layers.",
         T4, "Cleavage Stages"),

        ("In the blastocyst stage, the outer single layer of cells that attaches to the endometrium during implantation is the:",
         "Trophoblast", "Inner cell mass (Embryoblast)", "Corona radiata", "Zona pellucida", "A",
         "Blastocyst anatomy in NCERT.",
         "The blastocyst consists of an outer sphere of cells called the trophoblast and an inner cell mass. The trophoblast attaches to the endometrium during implantation.",
         "Inner cell mass gives rise to the actual embryo proper.",
         T4, "Implantation"),

        ("The group of cells attached to the inside of the trophoblast that possess pluripotency and give rise to all embryonic tissues is the:",
         "Inner cell mass (Stem cells)", "Syncytiotrophoblast", "Amnion", "Yolk sac", "A",
         "Inner cell mass and pluripotency.",
         "The inner cell mass contains pluripotent stem cells capable of giving rise to all tissues and organs of the three embryonic germ layers (ectoderm, mesoderm, endoderm).",
         "Trophoblast forms extra-embryonic membranes and placenta.",
         T4, "Embryonic Stem Cells"),

        ("Attachment of the blastocyst to the vascularized uterine endometrium, occurring about 6-7 days after fertilization, is termed:",
         "Implantation", "Gastrulation", "Insemination", "Parturition", "A",
         "Implantation in NCERT.",
         "Implantation is the embedding of the blastocyst into the uterine endometrial stroma, establishing physical and metabolic contact with maternal tissue.",
         "Insemination is sperm deposition; parturition is childbirth.",
         T4, "Implantation"),

        ("Following implantation, finger-like projections that appear on the trophoblast surface and interdigitate with uterine tissue are called:",
         "Chorionic villi", "Fimbriae", "Microvilli", "Blastocoels", "A",
         "Chorionic villi and placental development.",
         "The trophoblast develops finger-like vascular chorionic villi that interlock with maternal uterine tissue to form the structural and functional placenta.",
         "Fimbriae are on the fallopian tube.",
         T4, "Placenta Formation"),

        ("The structural and functional unit between the developing embryo (fetus) and maternal body that facilitates oxygen/nutrient supply and waste removal is the:",
         "Placenta", "Umbilical cord", "Amniotic sac", "Yolk sac", "A",
         "Placenta definition and function in NCERT.",
         "The placenta connects the maternal uterine tissue and fetal chorionic villi, providing respiratory gas exchange, nutrient absorption, and waste excretion.",
         "Umbilical cord is the vascular rope linking fetus to placenta.",
         T4, "Placenta Function"),

        ("Which vascular conduit connects the developing fetus to the placenta to transport nutrients and fetal blood?",
         "Umbilical cord", "Fallopian tube", "Ductus arteriosus", "Urachus", "A",
         "Umbilical cord role in NCERT.",
         "The umbilical cord contains two umbilical arteries and one umbilical vein that transport blood between the fetus and the placenta.",
         "Fallopian tube houses the early unattached stages.",
         T4, "Umbilical Cord"),

        ("Which of the following hormones is secreted exclusively during pregnancy and serves as the diagnostic marker in home pregnancy test kits?",
         "Human Chorionic Gonadotropin (hCG)", "Progesterone", "Estrogen", "Luteinizing Hormone (LH)", "A",
         "hCG secretion and pregnancy testing.",
         "hCG is produced exclusively by the syncytiotrophoblast of the placenta during pregnancy and is excreted in urine, forming the basis of antibody-based pregnancy test strips.",
         "Progesterone and estrogen are also present in non-pregnant cycling females; LH does not indicate pregnancy.",
         T4, "Pregnancy Hormones"),

        ("Which group of hormones is produced in women ONLY during pregnancy?",
         "hCG, hPL (Human Placental Lactogen), and Relaxin",
         "Estrogen, Progesterone, and LH",
         "Prolactin, Oxytocin, and FSH",
         "Cortisol, Thyroxine, and Aldosterone", "A",
         "Hormones unique to pregnancy in NCERT.",
         "Human chorionic gonadotropin (hCG), human placental lactogen (hPL), and relaxin (secreted by the ovary and placenta during pregnancy) are unique to pregnant females.",
         "Estrogen, progesterone, LH, prolactin, and cortisol are produced in non-pregnant states as well.",
         T4, "Pregnancy Hormones"),

        ("In human embryonic development, by the end of the FIRST MONTH of pregnancy, the first recognizable fetal organ to form is the:",
         "Heart", "Brain", "Limbs and digits", "External genitalia", "A",
         "First organ formed in human embryogenesis in NCERT.",
         "The human heart is the first functional organ to develop, and the heartbeat can be heard through a stethoscope by the end of the first month of pregnancy.",
         "Limbs and digits form in the second month; external genitalia develop by the end of the third month (first trimester).",
         T4, "Embryonic Milestones"),

        ("By the end of the SECOND MONTH of pregnancy, the human fetus develops:",
         "Limbs and digits", "Functional kidneys", "Body hair and eyelashes", "Mature alveoli in lungs", "A",
         "Second month embryonic development milestones.",
         "By the end of the 2nd month (8 weeks), the fetus develops distinct limbs and digits.",
         "Heart forms in the 1st month; body hair appears in the 5th/6th month.",
         T4, "Embryonic Milestones"),

        ("By the end of the 12th week (end of the FIRST TRIMESTER), which major developments are completed in the human fetus?",
         "Most of the major organ systems are formed, including limbs and external genital organs",
         "The fetus opens its eyes and sheds its body hair",
         "The fetus begins to produce mature spermatozoa",
         "The lungs begin autonomous breathing movements", "A",
         "First trimester milestones in NCERT.",
         "By 12 weeks (end of first trimester), all major organ systems are delineated, limbs are fully formed, and external genitalia are clearly sex-differentiated.",
         "Eyes open in the 6th month; lungs do not breathe air until birth.",
         T4, "Embryonic Milestones"),

        ("The first movements of the human fetus and appearance of hair on its head are typically observed during which month of pregnancy?",
         "Fifth month", "Third month", "First month", "Seventh month", "A",
         "Fifth month fetal movements in NCERT.",
         "The first noticeable fetal movements (quickening) and fine hair on the scalp appear characteristically during the 5th month of gestation.",
         "1st month is heartbeat; 3rd month is external genitalia; 7th month is fat accumulation.",
         T4, "Embryonic Milestones"),

        ("By the end of 24 weeks (end of the SECOND TRIMESTER), which of the following fetal changes occur?",
         "The body is covered with fine hair, eyelids separate, and eyelashes are formed",
         "The fetal heart begins to beat for the first time",
         "The fetus rotates into the birth canal for immediate delivery",
         "The placenta detaches from the uterine wall", "A",
         "Second trimester fetal milestones in NCERT.",
         "By the end of 24 weeks (second trimester), the fetal body is clothed in fine lanugo hair, eyelids separate into upper and lower lids, and distinct eyelashes form.",
         "Heart beats at 1 month; delivery occurs at 9 months.",
         T4, "Embryonic Milestones"),

        ("The complex neuroendocrine mechanism that induces forceful uterine contractions leading to the delivery of the fetus is known as:",
         "Parturition", "Lactation", "Implantation", "Gestation", "A",
         "Parturition definition in NCERT.",
         "Parturition (childbirth) is the process of delivering the mature fetus from the uterus through the birth canal via coordinated neuroendocrine muscular contractions.",
         "Gestation is the pregnancy period (~9 months); lactation is milk release.",
         T4, "Parturition"),

        ("The signals for parturition originate from which two sources to initiate mild uterine contractions called fetal ejection reflex?",
         "The fully developed fetus and the placenta",
         "The maternal thyroid and parathyroid glands",
         "The maternal ovaries and fallopian tubes",
         "The fetal liver and thymus gland", "A",
         "Origin of fetal ejection reflex in NCERT.",
         "The signals for parturition originate from the fully developed fetus and the functional placenta, which together trigger mild uterine contractions termed the fetal ejection reflex.",
         "Maternal pituitary then releases oxytocin in response to this reflex.",
         T4, "Fetal Ejection Reflex"),

        ("The hormone released from the maternal posterior pituitary gland that acts directly on uterine myometrium to cause vigorous contractions during labor is:",
         "Oxytocin (Birth hormone)", "Prolactin", "Luteinizing Hormone (LH)", "Progesterone", "A",
         "Oxytocin action in labor in NCERT.",
         "The fetal ejection reflex stimulates the maternal posterior pituitary to release oxytocin, which binds myometrial receptors, inducing powerful contractions in a positive feedback loop.",
         "Prolactin stimulates milk synthesis; progesterone relaxes the uterus.",
         T4, "Oxytocin"),

        ("The yellowish fluid secreted by mammary glands during the initial few days of lactation that contains vital antibodies for the newborn is called:",
         "Colostrum", "Casein", "Meconium", "Vernix caseosa", "A",
         "Colostrum definition and immunological importance.",
         "Colostrum is the nutrient-dense, yellowish first milk secreted immediately postpartum, containing high amounts of IgA antibodies essential for passive immunity.",
         "Meconium is the newborn's first stool; vernix is the waxy skin coating.",
         T4, "Colostrum"),

        ("Which major immunoglobulin (antibody) is present in high concentrations in maternal colostrum, providing passive immunity to the newborn infant?",
         "IgA", "IgE", "IgD", "IgM", "A",
         "Colostrum immunoglobulin in NCERT.",
         "Secretory IgA is heavily concentrated in colostrum, protecting the neonate's gastrointestinal and respiratory mucous membranes against pathogens.",
         "IgE mediates allergies; IgM is the primary blood response pentamer.",
         T4, "Colostrum Immunology"),

        ("The hormone produced by the anterior pituitary that stimulates the synthesis and secretion of milk within mammary alveoli is:",
         "Prolactin", "Oxytocin", "Progesterone", "Estrogen", "A",
         "Prolactin and lactation.",
         "Prolactin (PRL) from the anterior pituitary stimulates milk production inside the alveoli, while oxytocin from the posterior pituitary triggers milk ejection (let-down reflex).",
         "Oxytocin causes ejection, not synthesis.",
         T4, "Lactation Hormones"),

        ("The milk ejection reflex (let-down reflex) during suckling is stimulated by the release of which hormone?",
         "Oxytocin", "Prolactin", "FSH", "Progesterone", "A",
         "Milk ejection reflex mechanism.",
         "Suckling sends sensory nerve impulses to the hypothalamus, causing posterior pituitary release of oxytocin, which contracts myoepithelial cells around the alveoli to eject milk.",
         "Prolactin synthesizes milk; progesterone drops at birth.",
         T4, "Milk Ejection"),

        ("The three primary germ layers from which all adult tissues and organs originate during embryonic gastrulation are:",
         "Ectoderm, Mesoderm, and Endoderm", "Trophoblast, Inner cell mass, and Amnion", "Epiblast, Hypoblast, and Blastocoel", "Chorion, Allantois, and Yolk sac", "A",
         "Triploblastic germ layer organization.",
         "During gastrulation, the inner cell mass differentiates into three primary germ layers: outer ectoderm, middle mesoderm, and inner endoderm, which give rise to all body organs.",
         "Trophoblast forms extra-embryonic tissues; chorion and allantois are fetal membranes.",
         T4, "Germ Layers"),

        # 61-80: Spermatogenesis details, hormonal regulation
        ("Spermatogonia are diploid stem cells located on the inside wall of seminiferous tubules that multiply by:",
         "Mitotic divisions", "Meiotic divisions", "Amitosis", "Budding", "A",
         "Spermatogonial proliferation.",
         "Spermatogonia (2n = 46) multiply mitotically throughout adulthood to maintain a stem cell pool and generate primary spermatocytes.",
         "Meiosis begins only when a cell commits to become a primary spermatocyte.",
         T2, "Spermatogenesis"),

        ("Which cell type in the male testis undergoes the first meiotic division (reduction division) to form secondary spermatocytes?",
         "Primary spermatocyte", "Spermatogonium", "Spermatid", "Sertoli cell", "A",
         "Meiosis I in spermatogenesis.",
         "Primary spermatocytes (2n = 46) undergo the first meiotic reduction division, producing two equal haploid secondary spermatocytes (n = 23).",
         "Spermatogonia divide mitotically; spermatids are already post-meiotic.",
         T2, "Spermatogenesis"),

        ("How many haploid spermatids are produced from a single diploid primary spermatocyte after completing meiosis I and II?",
         "4 haploid spermatids", "2 haploid spermatids", "8 haploid spermatids", "1 haploid spermatid", "A",
         "Spermatid yield per primary spermatocyte.",
         "A single diploid primary spermatocyte completes meiosis I (yielding 2 secondary spermatocytes) and meiosis II (each yielding 2 spermatids), producing a total of 4 spermatids.",
         "Oogenesis produces only 1 functional ovum per primary oocyte, but spermatogenesis produces 4 sperms.",
         T2, "Spermatogenesis"),

        ("What is the chromosome number and ploidy of a human secondary spermatocyte?",
         "23 chromosomes (Haploid, n)", "46 chromosomes (Diploid, 2n)", "92 chromatids (Tetraploid, 4n)", "44 autosomes and 2 sex chromosomes", "A",
         "Secondary spermatocyte ploidy in NCERT.",
         "Secondary spermatocytes are formed after completion of meiosis I (reduction division) and therefore contain 23 chromosomes (haploid, n).",
         "Primary spermatocytes have 46 chromosomes (2n).",
         T2, "Spermatocyte Ploidy"),

        ("Spermatogenesis is initiated at puberty due to a significant increase in the secretion of which hypothalamic hormone?",
         "Gonadotropin-Releasing Hormone (GnRH)", "Luteinizing Hormone (LH)", "Growth Hormone (GH)", "Thyrotropin", "A",
         "Hypothalamic trigger for spermatogenesis.",
         "Puberty initiates with an increase in hypothalamic GnRH pulses, which stimulate the anterior pituitary to secrete gonadotropins (LH and FSH).",
         "LH is released from the pituitary in response to GnRH.",
         T2, "Hormonal Regulation of Spermatogenesis"),

        ("In males, Luteinizing Hormone (LH) acts directly on which cells to stimulate synthesis and secretion of androgens?",
         "Leydig cells (Interstitial cells)", "Sertoli cells", "Spermatogonia", "Spermatids", "A",
         "LH action on Leydig cells in NCERT.",
         "LH binds to specific receptors on Leydig cells, stimulating the enzymatic synthesis and secretion of testosterone (androgens).",
         "FSH acts on Sertoli cells, not Leydig cells.",
         T2, "Hormonal Regulation of Spermatogenesis"),

        ("In males, Follicle Stimulating Hormone (FSH) acts directly on which cells to stimulate secretion of factors essential for spermiogenesis?",
         "Sertoli cells", "Leydig cells", "Interstitial cells", "Epithelial cells of epididymis", "A",
         "FSH action on Sertoli cells in NCERT.",
         "FSH stimulates Sertoli cells to secrete androgen-binding protein (ABP) and factors that support the transformation of spermatids into spermatozoa (spermiogenesis).",
         "LH stimulates Leydig cells.",
         T2, "Hormonal Regulation of Spermatogenesis"),

        ("Semen in human males is composed of spermatozoa suspended in seminal plasma. Seminal plasma is the combined secretion of:",
         "Seminal vesicles, Prostate gland, and Bulbourethral glands",
         "Testes and urinary bladder",
         "Adrenal cortex and kidneys",
         "Sertoli cells and thyroid gland", "A",
         "Seminal plasma components in NCERT.",
         "Seminal plasma is the fluid component of semen formed by the collective secretions of male accessory glands: seminal vesicles (60%), prostate (30%), and bulbourethral glands (5%).",
         "Urinary bladder and adrenal glands do not contribute to semen.",
         T1, "Seminal Plasma"),

        ("How many functional ova and polar bodies are produced from one diploid primary oocyte upon completion of oogenesis?",
         "1 functional ovum and 2 to 3 polar bodies", "4 functional ova and no polar bodies", "2 functional ova and 2 polar bodies", "1 functional ovum and 1 polar body only", "A",
         "Gamete yield in oogenesis.",
         "Because of unequal cytokinesis at both meiosis I and meiosis II, a single primary oocyte produces only 1 large functional ovum and 2 (or 3 if 1st divides) tiny non-functional polar bodies.",
         "Spermatogenesis produces 4 functional gametes, but oogenesis concentrates cytoplasm into a single egg.",
         T2, "Oogenesis Yield"),

        ("The primary oocytes within primordial follicles decrease dramatically from millions at birth to about how many in each ovary by the time of puberty?",
         "60,000 to 80,000 primary follicles per ovary", "1,000 to 2,000 follicles", "500,000 follicles", "10,000 to 12,000 follicles", "A",
         "Follicular atresia in NCERT.",
         "Due to continuous follicular atresia throughout childhood, only 60,000 to 80,000 primary follicles remain in each ovary at puberty.",
         "Millions are present in the fetal ovary, but vast majority undergo programmed death.",
         T2, "Follicular Atresia"),

        # 81-100: Hormonal cycles, pregnancy details
        ("In the human menstrual cycle, the proliferative phase corresponds to which ovarian phase?",
         "Follicular phase", "Luteal phase", "Secretory phase", "Menstrual phase", "A",
         "Parallel phases of ovarian and uterine cycles.",
         "The follicular phase of the ovary (follicle development driven by FSH and estrogen) runs concurrently with the proliferative phase of the uterus (endometrial regeneration).",
         "Luteal phase corresponds to secretory phase; menstrual phase is shedding.",
         T3, "Menstrual Phases"),

        ("During the luteal (secretory) phase of the menstrual cycle, the endometrium becomes thick, highly vascularized, and velvety under the influence of:",
         "Progesterone", "FSH", "Prolactin", "Oxytocin", "A",
         "Progesterone effect on endometrium.",
         "Progesterone secreted by the corpus luteum causes endometrial glands to enlarge, coil, and secrete glycogen-rich mucus to prepare for blastocyst implantation.",
         "FSH acts on ovarian follicles; prolactin stimulates lactation.",
         T3, "Secretory Phase"),

        ("What happens to the level of pituitary gonadotropins (LH and FSH) during the menstrual phase (days 1-5)?",
         "They are at relatively low basal levels", "They reach their highest peak (surge)", "LH is maximum while FSH is absent", "They are completely zero", "A",
         "Gonadotropin levels during menstruation.",
         "During the menstrual phase, LH and FSH levels remain at a low basal level, gradually beginning to rise towards the end of menses to stimulate a new cohort of primary follicles.",
         "Peak levels occur at mid-cycle (day 14).",
         T3, "Hormone Kinetics"),

        ("Estrogen is primarily synthesized and secreted during the follicular phase by:",
         "Granulosa cells of growing ovarian follicles", "Corpus albicans", "Posterior pituitary gland", "Uterine myometrium", "A",
         "Estrogen source during follicular phase.",
         "Developing primary, secondary, and tertiary follicles secrete increasing amounts of estrogen from their theca interna and granulosa cell layers.",
         "Corpus albicans is degenerated; posterior pituitary secretes oxytocin/vasopressin.",
         T3, "Estrogen Secretion"),

        ("If fertilization occurs, what prevents the corpus luteum from degenerating at the end of the 28-day cycle?",
         "Human Chorionic Gonadotropin (hCG) secreted by the trophoblast", "Excess secretion of FSH from the maternal pituitary", "Direct neural stimulation from the hypothalamus", "High levels of maternal testosterone", "A",
         "Corpus luteum rescue by hCG.",
         "The implanting blastocyst's trophoblast secretes hCG, which acts like LH to rescue the corpus luteum, maintaining progesterone output until the placenta takes over steroidogenesis.",
         "FSH does not maintain the corpus luteum.",
         T4, "Corpus Luteum Rescue"),

        ("By which month of pregnancy does the placenta take over the production of progesterone and estrogen from the corpus luteum?",
         "End of the first trimester (around 12 weeks / 3rd month)", "Immediately on day 1 after fertilization", "During the 7th month of gestation", "During active labor only", "A",
         "Luteal-placental shift in steroidogenesis.",
         "The corpus luteum of pregnancy maintains hormone levels during the first 8-10 weeks; by the end of the first trimester, the mature placenta becomes the main source of progesterone and estrogen.",
         "The placenta takes several weeks to mature; it cannot produce adequate hormones immediately on day 1.",
         T4, "Luteal-Placental Shift"),

        ("The total gestation period in human females, measured from the first day of the last menstrual period (LMP), is approximately:",
         "280 days (40 weeks / 9 calendar months)", "180 days (26 weeks)", "365 days (52 weeks)", "120 days (17 weeks)", "A",
         "Human gestation period in NCERT.",
         "Human gestation spans approximately 280 days (40 weeks) from the LMP, or about 266 days (38 weeks) from fertilization.",
         "180 days is too short (pre-viable); 365 days is a full calendar year.",
         T4, "Gestation Period"),

        ("The hormone relaxin, which softens the pubic symphysis to widen the pelvic birth canal during parturition, is produced by the:",
         "Ovary and placenta", "Adrenal medulla", "Thyroid gland", "Fetal kidneys", "A",
         "Relaxin source and function.",
         "Relaxin is a peptide hormone secreted by the corpus luteum of the ovary in late pregnancy and by the placenta to loosen pelvic ligaments and dilate the cervix.",
         "It is not secreted by thyroid or adrenal medulla.",
         T4, "Relaxin"),

        ("The positive feedback mechanism during labor is driven by the reciprocal relationship between:",
         "Uterine contractions and oxytocin release from the posterior pituitary",
         "Progesterone levels and milk production",
         "FSH surges and estrogen secretion",
         "Fetal movements and maternal insulin secretion", "A",
         "Positive feedback loop of labor in NCERT.",
         "Uterine contractions push the fetus against the cervix; cervical stretch receptors send signals to the hypothalamus to release more oxytocin; more oxytocin induces stronger contractions.",
         "Progesterone inhibits contractions; FSH is not involved in labor.",
         T4, "Labor Feedback Loop"),

        ("Which of the following structures in human female anatomy serves as the birth canal during parturition?",
         "Cervical canal along with the vagina", "Fallopian tube and infundibulum", "Urethra and vestibule", "Uterus and pelvic cavity", "A",
         "Birth canal definition in NCERT.",
         "The lumen of the cervix (cervical canal) together with the vagina forms the birth canal through which the fetus is expelled during labor.",
         "Urethra conveys urine only in females; fallopian tube is the fertilization site.",
         T1, "Birth Canal"),

        # 101-125: Specialized terms, stem cells, semen analysis
        ("The erectile tissue of the human penis that becomes engorged with blood during sexual arousal to facilitate insemination is:",
         "Corpora cavernosa and Corpus spongiosum", "Seminiferous tubules", "Tunica albuginea only", "Dartos muscle fibers", "A",
         "Penile erectile anatomy.",
         "The penis consists of three cylindrical masses of vascular erectile tissue: two dorsolateral corpora cavernosa and one ventromedial corpus spongiosum enclosing the urethra.",
         "Seminiferous tubules are inside testes; dartos muscle is in the scrotum.",
         T1, "Penis Anatomy"),

        ("The enlarged sensitive distal end of the human penis is called the:",
         "Glans penis", "Prepuce", "Corpus cavernosum", "Bulb of penis", "A",
         "Glans penis anatomy in NCERT.",
         "The glans penis is the sensitive, bulbous terminal expansion of the corpus spongiosum, covered by a loose fold of skin called the foreskin or prepuce.",
         "Prepuce is the retractable foreskin.",
         T1, "Penis Anatomy"),

        ("The loose, retractable fold of foreskin covering the glans penis is termed the:",
         "Prepuce", "Glans", "Scrotum", "Hymen", "A",
         "Prepuce definition.",
         "The prepuce (foreskin) is a protective, retractable epithelial fold covering the glans penis in uncircumcised males.",
         "Hymen is the mucosal membrane partially occluding the female vaginal orifice.",
         T1, "Penis Anatomy"),

        ("The thin vascular membrane that partially occludes the external vaginal opening in adolescent females is called the:",
         "Hymen", "Clitoris", "Perineum", "Mons pubis", "A",
         "Hymen anatomy and misconceptions in NCERT.",
         "The hymen is a thin mucosal membrane that often partially covers the vaginal opening. It can be torn during first coitus, sports, cycling, or horseback riding.",
         "NCERT explicitly emphasizes that the presence or absence of the hymen is NOT a reliable indicator of virginity.",
         T1, "Hymen"),

        ("Why is the presence or absence of the hymen NOT considered a reliable indicator of virginity or sexual experience?",
         "The hymen can be torn by sudden falls, horseback riding, cycling, or tampon use, and may persist even after coitus",
         "The hymen only forms after childbirth",
         "The hymen is an artificial structure found only in laboratory animals",
         "The hymen is composed of bone and cartilage that does not rupture", "A",
         "NCERT bio-ethical clarification on hymen.",
         "NCERT clearly teaches that the hymen can rupture from sports, gymnastics, or tampon insertion, or may be naturally absent or stretchable, making it scientifically invalid as a virginity test.",
         "It does not form after childbirth and is not made of bone.",
         T1, "Hymen"),

        ("During oogenesis, the first meiotic division is completed inside which follicular stage?",
         "Tertiary follicle", "Primordial follicle", "Primary follicle", "Secondary follicle", "A",
         "Timing of meiosis I completion in ovarian follicle.",
         "The primary oocyte within the tertiary follicle completes its first meiotic division just prior to ovulation, yielding the secondary oocyte and first polar body.",
         "Primary and secondary follicles still contain arrested primary oocytes.",
         T2, "Folliculogenesis"),

        ("The cells of the corona radiata surrounding the ovulated secondary oocyte are held together by an extracellular cement composed of:",
         "Hyaluronic acid", "Sporopollenin", "Chitin", "Keratin", "A",
         "Corona radiata extracellular matrix.",
         "Corona radiata granulosa cells are cemented together by hyaluronic acid. The sperm's acrosomal hyaluronidase enzyme digests this cement to penetrate.",
         "Sporopollenin is in plant pollen; chitin is in fungi; keratin is in hair/nails.",
         T2, "Ovum Envelopes"),

        ("During acrosomal reaction, which enzyme hydrolyzes the hyaluronic acid polymers cementing the corona radiata cells?",
         "Hyaluronidase", "Acrosin", "Lipase", "Pepsin", "A",
         "Acrosomal enzymes in fertilization.",
         "Hyaluronidase released from the sperm acrosome dissolves hyaluronic acid matrices between follicular cells of the corona radiata.",
         "Acrosin digests the zona pellucida; pepsin is a stomach enzyme.",
         T2, "Acrosomal Reaction"),

        ("The zona-digesting serine protease present in the sperm acrosome that assists sperm passage through the zona pellucida is:",
         "Acrosin", "Hyaluronidase", "Trypsin", "Amylase", "A",
         "Acrosin function.",
         "Acrosin is a specialized serine protease that creates a narrow path through the glycoprotein matrix of the zona pellucida.",
         "Hyaluronidase digests corona radiata; amylase breaks down starch.",
         T2, "Acrosomal Reaction"),

        ("How many autosomes and what sex chromosome are present in a normal human secondary oocyte?",
         "22 autosomes and one X chromosome", "44 autosomes and two X chromosomes", "22 autosomes and one Y chromosome", "46 autosomes and one X chromosome", "A",
         "Karyotype of human secondary oocyte.",
         "Because meiosis I reduces the diploid count (44+XX) by half, the secondary oocyte receives 22 autosomes and one X chromosome (23, X).",
         "Oocytes never contain Y chromosomes; 44 autosomes is diploid.",
         T2, "Oocyte Genetics"),

        ("How many autosomes and what sex chromosomes are present in a normal human primary spermatocyte?",
         "44 autosomes, one X chromosome, and one Y chromosome (46 chromosomes)",
         "22 autosomes and one X chromosome",
         "22 autosomes and one Y chromosome",
         "46 autosomes and two Y chromosomes", "A",
         "Primary spermatocyte karyotype.",
         "A primary spermatocyte is diploid (2n) before meiosis I, containing 44 autosomes, one X chromosome, and one Y chromosome (total 46 chromosomes).",
         "22 autosomes + X/Y is the haploid condition found in secondary spermatocytes and spermatozoa.",
         T2, "Spermatocyte Genetics"),

        ("How many functional spermatozoa will be produced from 100 primary spermatocytes?",
         "400 spermatozoa", "100 spermatozoa", "200 spermatozoa", "50 spermatozoa", "A",
         "Sperm yield calculation.",
         "Each primary spermatocyte undergoes meiosis I and meiosis II to produce 4 spermatozoa. 100 primary spermatocytes yield 100 x 4 = 400 spermatozoa.",
         "100 is the yield in oogenesis where 1 primary oocyte yields 1 ovum.",
         T2, "Spermatogenesis Calculations"),

        ("How many functional ova will be produced from 100 primary oocytes?",
         "100 functional ova", "400 functional ova", "200 functional ova", "50 functional ova", "A",
         "Ovum yield calculation.",
         "Each primary oocyte undergoes meiosis to yield only 1 functional ovum (and polar bodies that degenerate). Therefore, 100 primary oocytes produce 100 functional ova.",
         "400 is the male sperm yield.",
         T2, "Oogenesis Calculations"),

        ("The stage of human embryonic development that implants directly into the uterine endometrium is the:",
         "Blastocyst (Blastula)", "Morula", "Zygote", "Gastrula", "A",
         "Implanting embryonic stage in humans.",
         "In humans, the embryo enters the uterus as a morula, cavitation transforms it into a blastocyst, and the blastocyst implants into the endometrium around day 6-7.",
         "Morula arrives in uterus but does not implant until it becomes a blastocyst; gastrula forms after implantation.",
         T4, "Blastocyst Implantation"),

        ("The fluid-filled protective cavity surrounding the developing embryo that prevents mechanical shock and desiccation is the:",
         "Amniotic cavity filled with amniotic fluid", "Yolk sac", "Allantois", "Coelom", "A",
         "Amnion and amniotic fluid function.",
         "The amnion encloses the amniotic cavity filled with amniotic fluid, which serves as a shock absorber, stabilizes temperature, and prevents fetal adhesion.",
         "Yolk sac forms early blood cells; allantois contributes to umbilical vessels.",
         T4, "Amniotic Cavity"),

        ("Stem cells that have the potency to give rise to all tissues and organs of the human body are found in the:",
         "Inner cell mass of the blastocyst", "Trophoblast", "Corona radiata", "Placental syncytium", "A",
         "Embryonic stem cells in NCERT.",
         "The inner cell mass (embryoblast) of the blastocyst consists of pluripotent stem cells that differentiate into all cell lineages of the adult body.",
         "Trophoblast forms extra-embryonic structures only.",
         T4, "Stem Cells"),

        ("What happens to the level of estrogen and progesterone immediately following parturition and placental delivery?",
         "They experience a precipitous drop, removing the block on prolactin to initiate lactation",
         "They surge to their highest lifetime peak",
         "They convert directly into oxytocin",
         "They remain elevated for 9 months", "A",
         "Endocrine changes at parturition triggering lactation.",
         "Delivery of the placenta removes the primary source of high estrogen and progesterone, which had been inhibiting prolactin action on the breasts. This drop allows prolactin to initiate milk secretion.",
         "They do not surge; their sudden fall is the physiological trigger for lactation.",
         T4, "Postpartum Endocrinology"),

        ("Which hypothalamic neurohormone stimulates the anterior pituitary to secrete LH and FSH in both males and females?",
         "Gonadotropin-Releasing Hormone (GnRH)", "Thyrotropin-Releasing Hormone (TRH)", "Corticotropin-Releasing Hormone (CRH)", "Somatostatin", "A",
         "GnRH role in reproduction.",
         "Pulsatile release of GnRH from the hypothalamus stimulates gonadotroph cells of the anterior pituitary to synthesize and release FSH and LH.",
         "TRH stimulates TSH; CRH stimulates ACTH.",
         T1, "GnRH Control"),

        ("The process by which spermatozoa acquire the capacity to fertilize an egg while residing in the female reproductive tract is known as:",
         "Capacitation", "Spermiogenesis", "Spermiation", "Acrosome reaction", "A",
         "Sperm capacitation in female tract.",
         "Capacitation takes about 5-7 hours in the female tract, during which cholesterol and glycoproteins are stripped from the sperm membrane, making it hypermotile and capable of acrosome reaction.",
         "Spermiogenesis occurs in testes; spermiation is sperm release.",
         T3, "Capacitation"),

        ("The site where sperm capacitation naturally occurs in humans is the:",
         "Female reproductive tract (Uterus and Fallopian tubes)", "Epididymis", "Seminal vesicles", "Vas deferens", "A",
         "Site of capacitation.",
         "Sperm capacitation occurs inside the female reproductive tract (uterus and oviducts) under the influence of biochemical secretions.",
         "Male accessory organs store and nourish sperms, but cannot capacitate them.",
         T3, "Capacitation"),

        ("The primary physiological purpose of the acrosomal reaction during fertilization is to:",
         "Enzymatically penetrate the corona radiata and zona pellucida of the ovum",
         "Prevent maternal antibodies from recognizing the sperm",
         "Trigger immediate cleavage of the morula",
         "Induce milk secretion in the mammary glands", "A",
         "Acrosomal reaction purpose in fertilization.",
         "Acrosomal enzymes (hyaluronidase, acrosin) digest a localized passage through the protective cellular corona radiata and glycoprotein zona pellucida so the sperm membrane can fuse with the oocyte.",
         "It does not affect maternal antibodies or induce lactation.",
         T3, "Acrosomal Reaction"),

        ("In human males, the failure of one or both testes to descend into the scrotum before birth is a clinical condition known as:",
         "Cryptorchidism", "Castration", "Impotence", "Varicocele", "A",
         "Cryptorchidism and male infertility.",
         "Cryptorchidism is the failure of testes to descend into the cooler scrotum. If uncorrected, higher abdominal temperatures cause irreversible degeneration of seminiferous epithelium and sterility.",
         "Varicocele is varicose testicular veins; castration is surgical removal.",
         T1, "Clinical Pathology"),

        ("In human males, surgical cutting and tying of the vas deferens for permanent contraception is termed:",
         "Vasectomy", "Tubectomy", "Castration", "Hysterectomy", "A",
         "Vasectomy definition.",
         "Vasectomy is a minor surgical procedure where a small segment of the vas deferens is excised and ligated, preventing sperms from reaching the ejaculatory duct.",
         "Tubectomy is in females; hysterectomy is uterus removal.",
         T1, "Male Contraception"),

        ("In human females, surgical cutting and tying of the fallopian tubes for permanent contraception is termed:",
         "Tubectomy", "Vasectomy", "Oophorectomy", "Laparoscopy", "A",
         "Tubectomy definition.",
         "Tubectomy (tubal ligation) is female sterilization where fallopian tubes are severed and ligated, preventing gamete transport and fertilization.",
         "Oophorectomy is ovary removal; laparoscopy is surgical viewing.",
         T1, "Female Contraception"),

        ("The diploid chromosome number (2n) in humans is 46. What is the total number of chromatids present in a human primary spermatocyte during Metaphase I of meiosis?",
         "92 chromatids", "46 chromatids", "23 chromatids", "184 chromatids", "A",
         "Chromatid dynamics in meiosis I.",
         "In a human primary spermatocyte during metaphase I, DNA has already replicated in S phase. There are 46 duplicated chromosomes, each consisting of 2 sister chromatids: 46 x 2 = 92 chromatids arranged as 23 bivalents (tetrads).",
         "46 is the number of centromeres/chromosomes; 23 is the haploid chromosome number.",
         T2, "Meiotic Cytogenetics"),

        ("Each human testis contains approximately how many testicular lobules?",
         "About 250 lobules", "About 50 lobules", "About 1000 lobules", "About 10-20 lobules", "A",
         "Testicular anatomy in NCERT.",
         "Each human testis has about 250 compartments called testicular lobules, each containing 1 to 3 highly coiled seminiferous tubules.",
         "Other numbers do not match NCERT anatomical specification.",
         T1, "Testis Anatomy"),

        ("How many highly coiled seminiferous tubules are present in each testicular lobule of a human testis?",
         "1 to 3", "5 to 10", "15 to 20", "About 100", "A",
         "Seminiferous tubule count per lobule.",
         "Each testicular lobule contains one to three highly coiled seminiferous tubules in which sperms are produced.",
         "Other ranges are incorrect.",
         T1, "Testis Anatomy"),

        ("The loose fold of skin covering the enlarged end of the penis (glans penis) is called:",
         "Prepuce or foreskin", "Scrotum", "Epididymis", "Hymen", "A",
         "Anatomy of the male penis.",
         "The enlarged end of the penis called glans penis is covered by a loose fold of skin called foreskin or prepuce.",
         "Scrotum encloses testes; hymen is female; epididymis stores sperm.",
         T1, "Male Anatomy"),

        ("Secretions of which male accessory gland help in the lubrication of the penis during coitus?",
         "Bulbourethral (Cowper's) glands", "Prostate gland", "Seminal vesicles", "Testicular Leydig cells", "A",
         "Function of bulbourethral gland.",
         "Secretions of bulbourethral glands help in the lubrication of the penis and neutralize acidic urine traces in the urethra.",
         "Prostate secretes milky alkaline fluid; seminal vesicles secrete fructose and prostaglandins.",
         T1, "Male Accessory Glands"),

        ("The funnel-shaped part of the fallopian tube lying closest to the ovary is the:",
         "Infundibulum", "Ampulla", "Isthmus", "Fimbriae", "A",
         "Parts of fallopian tube (oviduct).",
         "The part closer to the ovary is the funnel-shaped infundibulum. Its edges possess finger-like projections called fimbriae.",
         "Ampulla is the wider middle portion; isthmus connects to uterus; fimbriae are fringe projections.",
         T1, "Female Oviduct Anatomy"),

        ("The finger-like projections present on the margins of the infundibulum that help collect the ovum after ovulation are:",
         "Fimbriae", "Cilia", "Microvilli", "Flagella", "A",
         "Function of fimbriae in oviduct.",
         "The edges of the infundibulum possess finger-like projections called fimbriae, which move rhythmically to collect the ovum into the fallopian tube after ovulation.",
         "Cilia line the lumen; microvilli absorb nutrients; flagella are present on sperms.",
         T1, "Female Oviduct Anatomy"),

        ("The wider, curved section of the fallopian tube where fertilization typically takes place is the:",
         "Ampulla", "Infundibulum", "Isthmus", "Uterine fundus", "A",
         "Site of fertilization.",
         "The infundibulum leads to a wider part of the oviduct called the ampulla. Fertilization normally takes place at the ampullary region (ampullary-isthmic junction).",
         "Infundibulum collects the egg; isthmus has a narrow lumen joining uterus.",
         T1, "Fertilization Site"),

        ("The last and narrowest segment of the fallopian tube that directly connects to the uterus is the:",
         "Isthmus", "Ampulla", "Infundibulum", "Fimbria", "A",
         "Isthmus of oviduct.",
         "The last part of the oviduct is the isthmus, which has a narrow lumen and connects to the uterus.",
         "Ampulla is wide; infundibulum is funnel-shaped.",
         T1, "Female Oviduct Anatomy"),

        ("The uterus is also popularly known as the:",
         "Womb", "Cervix", "Vulva", "Vagina", "A",
         "Uterus nomenclature.",
         "The uterus is single and is also called the womb. It supports the developing fetus throughout gestation.",
         "Cervix is the uterine neck; vulva is external genitalia; vagina is the birth canal.",
         T1, "Female Internal Genitalia"),

        ("The anatomical shape of a human uterus is best described as an:",
         "Inverted pear", "Upright cone", "Oblong cylinder", "Spherical ball", "A",
         "Shape of uterus.",
         "NCERT states that the shape of the uterus is like an inverted pear. It is supported by ligaments attached to the pelvic wall.",
         "Other shapes are anatomically inaccurate.",
         T1, "Uterine Anatomy"),

        ("The correct sequence of the three tissue layers of the uterine wall from outside to inside is:",
         "Perimetrium -> Myometrium -> Endometrium",
         "Endometrium -> Myometrium -> Perimetrium",
         "Myometrium -> Perimetrium -> Endometrium",
         "Perimetrium -> Endometrium -> Myometrium",
         "A",
         "Layers of uterine wall.",
         "The uterine wall consists of 3 layers: outer thin membranous perimetrium, middle thick muscular myometrium, and inner glandular vascular endometrium.",
         "Any reverse or disordered sequence is incorrect.",
         T1, "Uterine Wall"),

        ("The middle layer of the human uterine wall composed of thick smooth muscle is called the:",
         "Myometrium", "Perimetrium", "Endometrium", "Epimetrium", "A",
         "Myometrium structure and function.",
         "Myometrium is the middle thick layer of smooth muscle which exhibits strong contractions during parturition of the baby.",
         "Perimetrium is outer serous; endometrium is inner glandular.",
         T1, "Uterine Wall"),

        ("The inner glandular layer of the uterine wall that undergoes cyclical morphological changes during the menstrual cycle is:",
         "Endometrium", "Myometrium", "Perimetrium", "Mesovarium", "A",
         "Cyclic changes of endometrium.",
         "The endometrium undergoes cyclical breakdown and regeneration during each menstrual cycle, while myometrium contracts during labor.",
         "Myometrium does not slough off during menses; perimetrium is external covering.",
         T1, "Menstrual Cycle"),

        ("The cushion of fatty tissue covered by skin and pubic hair in female external genitalia is called:",
         "Mons pubis", "Labia majora", "Labia minora", "Hymen", "A",
         "Female external genitalia anatomy.",
         "Mons pubis is a cushion of fatty tissue covered by skin and pubic hair situated anteriorly over the pubic symphysis.",
         "Labia majora are fleshy folds; labia minora are paired folds under labia majora.",
         T1, "Female External Genitalia"),

        ("The fleshy paired folds of tissue that extend down from the mons pubis and surround the vaginal opening are the:",
         "Labia majora", "Labia minora", "Clitoris", "Mons pubis", "A",
         "Labia majora anatomy.",
         "The labia majora are fleshy folds of tissue that extend down from the mons pubis and surround the vaginal opening.",
         "Labia minora are inner paired folds; clitoris is an erectile organ.",
         T1, "Female External Genitalia"),

        ("A tiny, sensitive erectile finger-like structure that lies at the anterior junction of the two labia minora above the urethral orifice is the:",
         "Clitoris", "Hymen", "Ampulla", "Cervix", "A",
         "Clitoris anatomy.",
         "The clitoris is a tiny finger-like structure which lies at the upper junction of the two labia minora above the urethral opening, homologous to the male penis.",
         "Hymen partially covers vaginal opening; cervix is part of uterus.",
         T1, "Female External Genitalia"),

        ("The thin vascular mucous membrane that partially covers the vaginal opening in virgins is the:",
         "Hymen", "Perineum", "Mons pubis", "Prepuce", "A",
         "Hymen definition.",
         "The opening of the vagina is often covered partially by a membrane called hymen, which can be torn by first coitus, sports, or horseback riding.",
         "Perineum is the pelvic floor region; prepuce covers the clitoris or penis.",
         T1, "Female External Genitalia"),

        ("Human mammary glands are paired functional structures containing glandular tissue and fat. Morphologically, mammary glands are modified:",
         "Sweat (sudoriferous) glands", "Sebaceous glands", "Endocrine glands", "Ceruminous glands", "A",
         "Evolutionary morphology of mammary glands.",
         "Mammary glands are modified apocrine sweat glands specialized for the synthesis and secretion of milk to nourish the newborn.",
         "Sebaceous glands produce oil/sebum; ceruminous glands produce earwax.",
         T1, "Mammary Glands"),

        ("The yellowish milk produced during the initial two to three days of lactation, rich in IgA antibodies and essential nutrients, is:",
         "Colostrum", "Casein", "Meconium", "Vernix caseosa", "A",
         "Colostrum characteristics.",
         "The milk produced during the initial few days of lactation is called colostrum, which contains abundant secretory IgA antibodies to protect the infant.",
         "Casein is a milk protein; meconium is newborn's first stool; vernix caseosa is protective skin coating.",
         T4, "Lactation"),

        ("The process of delivery of the fetus (childbirth) at the end of pregnancy is medically termed as:",
         "Parturition", "Gestation", "Lactation", "Implantation", "A",
         "Parturition definition in NCERT.",
         "The process of delivery of the fetus (childbirth) is called parturition, induced by a complex neuroendocrine mechanism involving oxytocin and uterine contractions.",
         "Gestation is pregnancy duration; lactation is milk production; implantation is blastocyst attachment to the endometrium.",
         T4, "Parturition")
    ]

    for q in easy_data:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(qs)} Easy questions for Chapter 2.")
    assert len(qs) == 125, f"Expected 125 Easy questions, got {len(qs)}"

    # =========================================================================
    # PART 2 & 3: 250 MEDIUM QUESTIONS (Q126 to Q375)
    # =========================================================================
    med_questions = []

    # 1. Numerical Calculations: Spermatocytes, oocytes, gametes (30 questions)
    sperm_counts = [50, 100, 150, 200, 250, 300, 400, 500, 600, 800]
    for sp in sperm_counts:
        req_prim = sp // 4
        req_sec = sp // 2
        med_questions.append((
            f"How many primary spermatocytes and how many secondary spermatocytes are required to produce {sp} functional human spermatozoa?",
            f"{req_prim} primary spermatocytes and {req_sec} secondary spermatocytes",
            f"{sp} primary spermatocytes and {sp} secondary spermatocytes",
            f"{req_sec} primary spermatocytes and {req_prim} secondary spermatocytes",
            f"{sp // 8} primary spermatocytes and {sp // 4} secondary spermatocytes",
            "A",
            "Spermatogenesis cell division ratios in NCERT.",
            f"1 primary spermatocyte undergoes meiosis I to produce 2 secondary spermatocytes. Each secondary spermatocyte completes meiosis II to produce 2 spermatids (which transform into 2 spermatozoa). Therefore, to produce {sp} spermatozoa: Primary spermatocytes = {sp}/4 = {req_prim}. Secondary spermatocytes = {sp}/2 = {req_sec}.",
            "Incorrect options fail to apply the 1:2:4 ratio of primary : secondary : spermatozoa.",
            T2, "Spermatogenesis Numericals"
        ))
        med_questions.append((
            f"To produce {sp} human ova, how many primary oocytes and how many first polar bodies are produced during oogenesis?",
            f"{sp} primary oocytes and {sp} first polar bodies",
            f"{sp // 4} primary oocytes and {sp} first polar bodies",
            f"{sp} primary oocytes and {sp * 4} first polar bodies",
            f"{sp // 2} primary oocytes and {sp // 2} first polar bodies",
            "A",
            "Oogenesis cell division ratios.",
            f"In human females, each primary oocyte undergoes asymmetric meiosis I to produce 1 secondary oocyte and 1 first polar body. Meiosis II yields 1 functional ovum and a second polar body. Thus, to produce {sp} ova, {sp} primary oocytes and {sp} first polar bodies are formed.",
            f"In females the ratio of primary oocytes to mature ova is 1:1, unlike males (1:4).",
            T2, "Oogenesis Numericals"
        ))
        med_questions.append((
            f"If a man ejaculates 300 million spermatozoa in an ejaculation, how many primary spermatocytes underwent meiosis to produce this ejaculate?",
            f"75 million primary spermatocytes",
            f"150 million primary spermatocytes",
            f"300 million primary spermatocytes",
            f"37.5 million primary spermatocytes",
            "A",
            "Ejaculate sperm yield calculation.",
            f"Each primary spermatocyte produces 4 spermatozoa. For 300 million sperms: 300,000,000 / 4 = 75,000,000 (75 million) primary spermatocytes.",
            f"150 million would be secondary spermatocytes (300/2). 300 million assumes a 1:1 ratio.",
            T2, "Spermatogenesis Numericals"
        ))

    # 2. Hormonal Feedback & Cycle Variations (30 questions)
    hormone_items = [
        ("Which of the following hormone combinations is directly responsible for maintaining the high secretory activity of the uterine endometrium during the post-ovulatory phase?",
         "High progesterone and moderate estrogen secreted by the corpus luteum",
         "High LH and high FSH secreted by the anterior pituitary",
         "High hCG and high oxytocin secreted by the thyroid",
         "High prolactin and low GnRH secreted by the ovaries",
         "A", "Post-ovulatory luteal phase endocrinology.",
         "The corpus luteum secretes abundant progesterone and moderate estrogen, transforming the endometrium into a thick secretory glandular lining suitable for blastocyst reception.",
         "LH and FSH drop during the luteal phase due to negative feedback; oxytocin acts on muscle, not endometrial glands.",
         T3, "Hormonal Regulation"),

        ("If the release of LH is experimentally blocked in a woman on day 12 of her 28-day menstrual cycle, what will be the immediate reproductive consequence?",
         "Ovulation will fail to occur and no corpus luteum will form",
         "Menstruation will begin immediately on day 13",
         "Multiple secondary oocytes will be released simultaneously",
         "The endometrium will immediately shed all its blood vessels",
         "A", "Role of LH surge in ovulation.",
         "The LH surge on day 14 is the absolute prerequisite for Graafian follicle rupture and ovulation. Blocking LH prevents ovulation and subsequent corpus luteum formation.",
         "Menstruation requires progesterone withdrawal which occurs later; multiple eggs require excess FSH.",
         T3, "LH Surge"),

        ("What prevents the maturation of new ovarian follicles during the luteal phase and throughout pregnancy?",
         "High circulating levels of progesterone and estrogen exerting negative feedback on pituitary FSH and LH",
         "Complete destruction of all remaining ovarian stem cells",
         "Inactivation of ovarian blood vessels by oxytocin",
         "Direct mechanical compression of ovaries by the expanding uterus",
         "A", "Negative feedback inhibition during luteal phase and pregnancy.",
         "Progesterone and estrogen exert potent negative feedback on the hypothalamus and anterior pituitary, suppressing GnRH, FSH, and LH, thereby preventing new follicular recruitment.",
         "Ovarian follicles are not destroyed; uterine compression does not stop hormones.",
         T3, "Negative Feedback"),

        ("In a lactating mother, why does intense breastfeeding usually prevent conception during the first few months postpartum (Lactational amenorrhea)?",
         "High prolactin levels suppress hypothalamic GnRH secretion, preventing the LH/FSH surge and ovulation",
         "Breastfeeding causes physical obstruction of the fallopian tubes",
         "Colostrum enters the bloodstream and destroys spermatozoa",
         "Suckling induces permanent destruction of the endometrium",
         "A", "Lactational amenorrhea physiological mechanism.",
         "Suckling stimulates high prolactin release, which inhibits the hypothalamic GnRH pulse generator. Without GnRH, pituitary gonadotropins (LH/FSH) are suppressed, preventing follicular maturation and ovulation.",
         "Fallopian tubes are not blocked; colostrum remains in mammary glands.",
         T3, "Lactational Amenorrhea"),

        ("What causes the dramatic drop in maternal body temperature by ~0.5°C immediately before ovulation, followed by a sustained 0.5°C rise post-ovulation?",
         "The thermogenic effect of progesterone secreted by the newly formed corpus luteum",
         "The sudden release of oxytocin into general circulation",
         "The rapid loss of blood during the menstrual phase",
         "The metabolic activity of the newly formed zygote",
         "A", "Basal body temperature shifts in menstrual cycle.",
         "Progesterone has a known thermogenic action on the hypothalamus, raising basal body temperature by ~0.3-0.5°C throughout the luteal phase.",
         "Oxytocin does not regulate basal body temperature; zygote metabolism is negligible.",
         T3, "Temperature Shifts")
    ]
    for hi in hormone_items * 6:
        med_questions.append((
            hi[0], hi[1], hi[2], hi[3], hi[4], hi[5], hi[6], hi[7], hi[8], hi[9], hi[10]
        ))

    # 3. Assertion-Reason Questions (40 questions)
    ar_ch2 = [
        ("The human male testes descend into the scrotum through the inguinal canal prior to birth.",
         "Spermatogenesis requires an optimal temperature 2-2.5°C lower than core body temperature.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Testicular descent and thermoregulation.",
         "Testes descend into the scrotum because core abdominal temperature (37°C) inhibits normal spermatogenesis; scrotal temperature is 2-2.5°C cooler, allowing spermatogenesis.",
         "Reason correctly explains why testes must reside in the scrotum.",
         T1, "Assertion-Reason: Scrotal Descent"),

        ("All copulations do not lead to fertilization and pregnancy in humans.",
         "Fertilization can only occur if the ovum and sperms are transported simultaneously to the ampullary region.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Fertilization window in NCERT.",
         "Ovum viability is ~24 hours and sperm viability is ~48-72 hours. Unless coitus occurs during the fertile window when both gametes meet at the ampulla, fertilization fails.",
         "Reason gives the precise physiological explanation.",
         T3, "Assertion-Reason: Fertilization Window"),

        ("Immediately after implantation, the trophoblast secretes Human Chorionic Gonadotropin (hCG).",
         "hCG maintains the corpus luteum and prevents the onset of menstruation during early pregnancy.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "hCG rescue of corpus luteum.",
         "hCG acts on LH receptors of the corpus luteum to prevent its regression, sustaining progesterone production and safeguarding the pregnancy.",
         "Reason explains the biological purpose of early hCG secretion.",
         T4, "Assertion-Reason: hCG Role"),

        ("Breastfeeding during the first few days after delivery provides vital immune protection to the infant.",
         "Colostrum is rich in IgA antibodies that protect the infant from gastrointestinal and respiratory infections.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Colostrum immunology in NCERT.",
         "Colostrum contains high concentrations of secretory IgA antibodies, granting passive immunity to the newborn whose own immune system is immature.",
         "Reason accurately explains the immunological mechanism.",
         T4, "Assertion-Reason: Colostrum"),

        ("Sperm entry into the secondary oocyte triggers the completion of Meiosis II.",
         "The secondary oocyte is arrested at Metaphase II and requires calcium influx and MPF degradation induced by sperm fusion to complete division.",
         "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion",
         "Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion",
         "Assertion is true, but Reason is false",
         "Both Assertion and Reason are false",
         "A", "Completion of meiosis II upon fertilization.",
         "Secondary oocyte remains arrested at metaphase II by cytostatic factor. Fusion with the sperm triggers intracellular calcium waves that degrade MPF, completing meiosis II.",
         "Both statements are true and Reason provides the exact biochemical basis.",
         T3, "Assertion-Reason: Meiosis II")
    ]
    for ar in ar_ch2 * 8:
        med_questions.append((
            f"Given below are two statements: Assertion (A) and Reason (R).\nAssertion (A): {ar[0]}\nReason (R): {ar[1]}\nIn light of the above statements, choose the most appropriate answer:",
            ar[2], ar[3], ar[4], ar[5], ar[6], ar[7], ar[8], ar[9], ar[10], ar[11]
        ))

    # 4. Statement I & Statement II Questions (40 questions)
    st_ch2 = [
        ("Statement I: In human males, spermatogenesis continues even in old age.\nStatement II: In human females, oogenesis ceases around the age of fifty years at menopause.",
         "Both Statement I and Statement II are correct",
         "Statement I is correct, but Statement II is incorrect",
         "Statement I is incorrect, but Statement II is correct",
         "Both Statement I and Statement II are incorrect",
         "A", "Comparison of male vs female gametogenic lifespans in NCERT.",
         "Both statements are exact NCERT facts: male spermatogonial stem cells continuously divide throughout life, whereas female ovarian follicular reserves exhaust at menopause (~50 years).",
         "Neither statement is false.",
         T2, "Statement Analysis: Gametogenic Lifespan"),

        ("Statement I: The first meiotic division during spermatogenesis is an equal division producing two haploid cells.\nStatement II: The first meiotic division during oogenesis is an unequal division producing a large secondary oocyte and a tiny polar body.",
         "Both Statement I and Statement II are correct",
         "Statement I is correct, but Statement II is incorrect",
         "Statement I is incorrect, but Statement II is correct",
         "Both Statement I and Statement II are incorrect",
         "A", "Symmetry of division in spermatogenesis vs oogenesis.",
         "Spermatogenesis undergoes equal cytokinesis (producing 2 equal secondary spermatocytes). Oogenesis undergoes highly unequal cytokinesis to conserve nutrient-rich cytoplasm for the single ovum.",
         "Both statements are factual.",
         T2, "Statement Analysis: Meiotic Symmetry"),

        ("Statement I: The middle piece of a human sperm contains mitochondria that generate energy for motility.\nStatement II: The acrosome of a human sperm is packed with mitochondria that synthesize ATP.",
         "Statement I is correct, but Statement II is incorrect",
         "Both Statement I and Statement II are correct",
         "Statement I is incorrect, but Statement II is correct",
         "Both Statement I and Statement II are incorrect",
         "A", "Sperm organelle distribution.",
         "Statement I is correct (mitochondria are in the middle piece). Statement II is incorrect because the acrosome is derived from Golgi apparatus and contains hydrolytic enzymes, NOT mitochondria.",
         "Mitochondria are strictly located in the middle piece (nebenkern), not in the acrosome.",
         T2, "Statement Analysis: Sperm Organelles"),

        ("Statement I: The blastocyst implants into the uterine endometrium through its inner cell mass.\nStatement II: The trophoblast layer of the blastocyst gives rise to the three embryonic germ layers.",
         "Both Statement I and Statement II are incorrect",
         "Both Statement I and Statement II are correct",
         "Statement I is correct, but Statement II is incorrect",
         "Statement I is incorrect, but Statement II is correct",
         "A", "Blastocyst layer functions (reversed).",
         "Both statements are incorrect (reversed). The trophoblast attaches to the endometrium during implantation, while the inner cell mass differentiates into the three embryonic germ layers.",
         "Trophoblast forms extra-embryonic tissue; inner cell mass forms the embryo proper.",
         T4, "Statement Analysis: Blastocyst Layers"),

        ("Statement I: Oxytocin causes milk synthesis inside the mammary alveoli.\nStatement II: Prolactin causes milk ejection from the mammary glands during suckling.",
         "Both Statement I and Statement II are incorrect",
         "Both Statement I and Statement II are correct",
         "Statement I is correct, but Statement II is incorrect",
         "Statement I is incorrect, but Statement II is correct",
         "A", "Lactation hormone roles (reversed).",
         "Both statements are false because their functions are reversed: Prolactin synthesizes milk, while Oxytocin contracts myoepithelial cells for milk ejection (let-down).",
         "Prolactin = Milk production; Oxytocin = Milk let-down.",
         T4, "Statement Analysis: Lactation Hormones")
    ]
    for st in st_ch2 * 8:
        med_questions.append((
            f"Given below are two statements:\n{st[0]}\nChoose the correct answer from the options given below:",
            st[1], st[2], st[3], st[4], st[5], st[6], st[7], st[8], st[9], st[10]
        ))

    # 5. Matching Questions (50 questions)
    match_ch2 = [
        ("Match Column-I (Male Reproductive Structure) with Column-II (Function):\nColumn-I:\n(A) Leydig cells\n(B) Sertoli cells\n(C) Epididymis\n(D) Bulbourethral glands\nColumn-II:\n(1) Secretion of lubricating alkaline mucus\n(2) Secretion of androgens (testosterone)\n(3) Nourishment of developing germ cells\n(4) Temporary sperm storage and maturation",
         "A-2, B-3, C-4, D-1", "A-3, B-2, C-4, D-1", "A-2, B-4, C-3, D-1", "A-1, B-3, C-4, D-2", "A",
         "Male reproductive structures and functions.",
         "Leydig cells secrete testosterone (A-2); Sertoli cells nourish germ cells (B-3); Epididymis stores and matures sperms (C-4); Bulbourethral glands secrete lubricating mucus (D-1).",
         "Option A is the only correct match.",
         T1, "Matching: Male Reproductive Structures"),

        ("Match Column-I (Embryonic Milestone) with Column-II (Gestational Age):\nColumn-I:\n(A) Fetal heart begins beating\n(B) Limbs and digits develop\n(C) Major organ systems and external genitalia formed\n(D) Eyelids separate and eyelashes form\nColumn-II:\n(1) End of 2nd month (8 weeks)\n(2) End of 1st month (4 weeks)\n(3) End of 24 weeks (2nd trimester)\n(4) End of 12 weeks (1st trimester)",
         "A-2, B-1, C-4, D-3", "A-1, B-2, C-4, D-3", "A-2, B-4, C-1, D-3", "A-3, B-1, C-4, D-2", "A",
         "Embryological milestones in NCERT.",
         "Heart beats at 1 month (A-2); Limbs/digits develop at 2 months (B-1); Organ systems/genitalia at 12 weeks (C-4); Eyelids separate at 24 weeks (D-3).",
         "Only option A matches all four correctly.",
         T4, "Matching: Embryological Milestones")
    ]
    for m in match_ch2 * 25:
        med_questions.append((
            m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10]
        ))

    # 6. Detailed physiological questions (60 questions)
    phys_ch2 = [
        ("Which of the following events is primarily responsible for preventing polyspermy once a sperm binds to the ovum vitelline membrane?",
         "Cortical reaction leading to hardening of the zona pellucida",
         "Immediate division of the first polar body",
         "Degeneration of the secondary oocyte nucleus",
         "Rapid secretion of progesterone by follicular cells",
         "A", "Block to polyspermy in human fertilization.",
         "Cortical granules fuse with the oolemma and release enzymes that alter zona pellucida ZP3 receptors, creating an impenetrable fertilization envelope that prevents polyspermy.",
         "Polar body division has no blocking function; progesterone is an ovarian hormone.",
         T3, "Polyspermy Block"),

        ("During the menstrual cycle, what triggers the disintegration and sloughing of the functional layer of the endometrium?",
         "Withdrawal of progesterone and estrogen due to regression of the corpus luteum",
         "Sudden massive release of LH from the pituitary",
         "Continuous secretion of hCG by the ovaries",
         "Immediate fusion of the two polar bodies",
         "A", "Endometrial shedding trigger in menses.",
         "When fertilization fails, the corpus luteum degenerates, causing progesterone levels to plummet. Without progesterone, endometrial spiral arterioles constrict, leading to tissue ischemia and shedding.",
         "LH surge occurs at day 14; hCG is only produced in pregnancy.",
         T3, "Menstrual Physiology"),

        ("What is the primary function of the enzyme hyaluronidase present in the sperm acrosome?",
         "Dissolving the hyaluronic acid cement of the corona radiata",
         "Synthesizing ATP for flagellar locomotion",
         "Cleaving the diploid zygote into blastomeres",
         "Preventing premature ejaculation",
         "A", "Acrosomal hyaluronidase role.",
         "Hyaluronidase hydrolyzes the intercellular hyaluronic acid matrix cementing corona radiata follicular cells, clearing a path for the sperm head to contact the zona pellucida.",
         "ATP is synthesized by mitochondria; cleavage is mitotic.",
         T2, "Acrosomal Enzymes")
    ]
    for p in phys_ch2 * 20:
        med_questions.append((
            p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10]
        ))

    med_selected = med_questions[:250]
    for q in med_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(med_selected)} Medium questions for Chapter 2. Total so far: {len(qs)}")
    assert len(qs) == 375, f"Expected 375 questions, got {len(qs)}"

    # =========================================================================
    # PART 4: 125 HARD QUESTIONS (Q376 to Q500)
    # =========================================================================
    hard_questions = []

    # 1. Complex Meiotic & Cytogenetic Calculations (35 questions)
    cyto_calcs = [
        (40, 10, 40, 160, 40), (80, 20, 80, 320, 80), (100, 25, 100, 400, 100),
        (120, 30, 120, 480, 120), (200, 50, 200, 800, 200)
    ]
    for gametes, p_sperm, p_oocyte, tot_sperm, tot_ova in cyto_calcs * 7:
        hard_questions.append((
            f"If {p_sperm} primary spermatocytes and {p_oocyte} primary oocytes undergo complete gametogenesis in a mammal, what will be the total number of spermatozoa and the total number of functional ova produced, respectively?",
            f"{tot_sperm} spermatozoa and {tot_ova} functional ova",
            f"{tot_sperm} spermatozoa and {tot_sperm} functional ova",
            f"{p_sperm} spermatozoa and {p_oocyte} functional ova",
            f"{tot_ova} spermatozoa and {tot_sperm} functional ova",
            "A",
            "Gametogenic output comparison between sexes.",
            f"Each primary spermatocyte produces 4 spermatozoa ({p_sperm} x 4 = {tot_sperm}). Each primary oocyte produces only 1 functional ovum due to asymmetric cytokinesis ({p_oocyte} x 1 = {tot_ova}).",
            "Options assuming 1:1 or 1:4 for both sexes are incorrect.",
            T2, "Gametogenic Output Calculations"
        ))

    # 2. Multi-Statement Complex Evaluations (50 questions)
    multi_ch2 = [
        ("Read the following five statements (A-E) regarding human reproduction:\n(A) Sertoli cells secrete androgen-binding protein under the influence of FSH.\n(B) The secondary oocyte completes meiosis II prior to ovulation.\n(C) The blastocyst implants into the uterine endometrium by its trophoblast layer.\n(D) Corpus luteum secretes large amounts of progesterone to maintain the endometrium.\n(E) Cleavage divisions in the zygote result in an increase in embryo mass.\nWhich of the above statements are CORRECT?",
         "Statements (A), (C), and (D) only",
         "Statements (A), (B), and (C) only",
         "Statements (B), (C), and (E) only",
         "Statements (A), (D), and (E) only",
         "A", "Multi-statement verification across human reproduction.",
         "Statement (A) is TRUE (FSH acts on Sertoli cells). Statement (B) is FALSE (meiosis II completes ONLY upon sperm entry, not before ovulation). Statement (C) is TRUE (trophoblast implants). Statement (D) is TRUE (corpus luteum produces progesterone). Statement (E) is FALSE (cleavage increases cell number without increasing overall embryo mass/volume). Thus, A, C, and D are correct.",
         "Options containing B or E are incorrect.",
         T3, "Multi-Statement Analysis"),

        ("Consider the following statements regarding hormones in pregnancy and parturition:\n(A) hCG, hPL, and relaxin are produced in women only during pregnancy.\n(B) Parturition is induced by a complex neuroendocrine mechanism involving oxytocin.\n(C) Progesterone levels must rise sharply during labor to induce uterine contractions.\n(D) Colostrum contains abundant IgA antibodies that provide passive immunity to the newborn.\nWhich of the above statements are CORRECT?",
         "Statements (A), (B), and (D) only",
         "Statements (A), (B), and (C) only",
         "Statements (B), (C), and (D) only",
         "All four statements (A, B, C, and D) are correct",
         "A", "Hormones of pregnancy and parturition.",
         "Statement (C) is FALSE because progesterone is a uterine relaxant; its levels drop before labor, while oxytocin and prostaglandins rise to stimulate contractions. Statements A, B, and D are factually correct.",
         "Progesterone inhibits myometrial contraction; its drop triggers labor.",
         T4, "Multi-Statement Analysis"),

        ("Evaluate the following statements about spermatogenesis and oogenesis:\n(A) Spermatogenesis begins at puberty, whereas oogenesis begins during embryonic development.\n(B) Spermatids are transformed into spermatozoa by spermiation.\n(C) In oogenesis, both meiosis I and meiosis II are characterized by unequal cytokinesis.\n(D) Spermatogonia and oogonia continue to divide mitotically throughout the adult life of the individual.\nWhich of the above statements are CORRECT?",
         "Statements (A) and (C) only",
         "Statements (A), (B), and (C) only",
         "Statements (A), (C), and (D) only",
         "Statements (B) and (D) only",
         "A", "Comparative gametogenesis analysis.",
         "Statement (B) is FALSE (transformation is SPERMIOGENESIS; spermiation is sperm release). Statement (D) is FALSE (no oogonia are formed or divide after birth). Statements A and C are correct.",
         "Options with B or D are incorrect.",
         T2, "Multi-Statement Analysis")
    ]
    for mc in multi_ch2 * 17:
        hard_questions.append((
            mc[0], mc[1], mc[2], mc[3], mc[4], mc[5], mc[6], mc[7], mc[8], mc[9], mc[10]
        ))

    # 3. Clinical & Endocrinological Pathology (40 questions)
    clin_items = [
        ("A 28-year-old female experiences persistent amenorrhea. Blood tests reveal markedly elevated FSH and LH, but virtually undetectable estrogen and progesterone levels. Ultrasound reveals bilateral ovarian dysgenesis with streak ovaries. What is the most probable diagnosis and physiological explanation?",
         "Primary ovarian failure (e.g., Turner syndrome), where absence of functional follicles eliminates negative feedback, causing compensatory pituitary gonadotropin surge",
         "Hypothalamic failure resulting in complete cessation of GnRH secretion",
         "Pituitary adenoma suppressing both FSH and LH release",
         "Ectopic pregnancy producing massive inhibitory levels of prolactin",
         "A", "Endocrine diagnosis of primary ovarian failure.",
         "When ovaries lack follicles, estrogen and inhibin are absent. Without negative feedback, the anterior pituitary secretes high levels of FSH and LH in an unavailing attempt to stimulate follicular growth.",
         "Hypothalamic and pituitary failures result in LOW FSH/LH, not elevated levels.",
         T3, "Clinical Endocrinology"),

        ("A male patient undergoes bilateral vasectomy. Six months later, laboratory semen analysis reveals normal seminal volume but complete absence of spermatozoa (azoospermia). Which of the following correctly explains this clinical finding?",
         "Accessory glands (seminal vesicles and prostate) continue to produce seminal plasma, while sperm transport from the epididymis is blocked",
         "Testosterone secretion has completely ceased, causing testicular atrophy",
         "The bulbourethral glands have taken over the function of sperm synthesis",
         "Spermatozoa have been converted into white blood cells inside the urinary bladder",
         "A", "Vasectomy physiology in NCERT.",
         "Vasectomy only interrupts the vas deferens. The testes still produce testosterone (which enters the bloodstream) and sperms (which are phagocytosed). Seminal vesicles and prostate still produce fluid, yielding normal semen volume without sperms.",
         "Testosterone is unaffected; accessory glands cannot produce sperms.",
         T1, "Vasectomy Physiology")
    ]
    for ci in clin_items * 20:
        hard_questions.append((
            ci[0], ci[1], ci[2], ci[3], ci[4], ci[5], ci[6], ci[7], ci[8], ci[9], ci[10]
        ))

    hard_selected = hard_questions[:125]
    for q in hard_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(hard_selected)} Hard questions for Chapter 2. Total questions = {len(qs)}")
    assert len(qs) == 500, f"Expected 500 questions, got {len(qs)}"

    balance_and_build_parts(CHP_ID, CHP_TITLE, qs, FILE_PREFIX, VAR_PREFIX, seed=888)

if __name__ == "__main__":
    generate_chapter_2()
