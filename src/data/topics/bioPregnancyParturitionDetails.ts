import { DetailedTopicContent } from '../../types/neet';

export const bioPregnancyParturitionDetails: DetailedTopicContent = {
  topicId: "bio-pregnancy-parturition",
  topicName: "Pregnancy, Parturition & Lactation",
  subject: "Biology",
  class: "Class 12",
  classification: "Reproduction",
  chapter: "Human Reproduction",

  whatIsThisTopic: "Comprehensive biological study of Placental Architecture and Endocrine Functions, Embryonic Gestational Milestones, Foetal Ejection Reflex, Oxytocin Positive Feedback Cascade during Parturition, and Lactation / Colostrum Immunity.",

  basicIdea: [
    "Placenta: A structural and functional organic union formed between fetal tissue (Chorionic Villi) and maternal uterine tissue (Endometrium) facilitating nutrient, gas, and waste exchange.",
    "Endocrine Function of Placenta: Secretes Human Chorionic Gonadotropin (hCG), Human Placental Lactogen (hPL), Estrogens, and Progesterones. Note: hCG, hPL, and Relaxin (from ovary) are produced ONLY during pregnancy!",
    "Umbilical Cord: A vascular cable connecting fetus to placenta containing two umbilical arteries (carrying deoxygenated blood & wastes from fetus) and one umbilical vein (carrying oxygenated blood & nutrients to fetus).",
    "Embryonic Development Timeline:\n - 1st Month: Heart is formed (heartbeat detected by stethoscope).\n - 2nd Month: Limbs and digits differentiate.\n - 3rd Month (12 Weeks / 1st Trimester): Major organ systems, limbs, and external genitalia are fully formed.\n - 5th Month: First fetal movements noticed by mother & appearance of hair on head.\n - 6th Month (24 Weeks / 2nd Trimester): Body covered with fine hair (lanugo), eyelids separate, eyelashes formed.\n - 9th Month: Fetus fully developed and ready for delivery.",
    "Parturition (Childbirth): Process of expulsion/delivery of fully developed fetus from uterus at end of gestation period (~9 months / 38-40 weeks).",
    "Foetal Ejection Reflex: A neuroendocrine reflex triggered by signals originating from the fully developed fetus and placenta inducing mild uterine contractions. This triggers release of OXYTOCIN from maternal posterior pituitary.",
    "Parturition Positive Feedback Cascade: Oxytocin $\\rightarrow$ Stronger myometrial contractions $\\rightarrow$ Stimulates further Oxytocin release $\rightarrow$ Expulsion of fetus through birth canal (cervical canal + vagina).",
    "Lactation & Colostrum: Mammary glands differentiate during pregnancy. Milk synthesis is stimulated by PROLACTIN (anterior pituitary). Milk ejection is stimulated by OXYTOCIN (posterior pituitary). Colostrum is the yellowish milk secreted during initial days of lactation, rich in IgA antibodies providing natural passive immunity."
  ],

  importantTerms: [
    {
      term: "Chorionic Villi",
      definition: "Finger-like vascular projections that sprout from the outer trophoblast layer of the blastocyst after implantation into the uterine endometrium.",
      "neetNote": "Interdigitates with maternal uterine tissue to form the Placenta."
    },
    {
      term: "Placenta",
      definition: "An intimate structural and endocrine interface formed by interdigitation of chorionic villi and uterine endometrial tissue.",
      "neetNote": "Functions both as a physiological exchanger and as a temporary endocrine gland."
    },
    {
      term: "hCG (Human Chorionic Gonadotropin)",
      definition: "A glycoprotein hormone secreted by trophoblast/placenta that maintains Corpus Luteum progesterone secretion in early pregnancy. Excreted in maternal urine and forms basis of pregnancy tests.",
      "neetNote": "Present ONLY during pregnancy."
    },
    {
      term: "Gestational Period",
      definition: "The total duration of pregnancy from the first day of the last menstrual period to childbirth, averaging 9 months (280 days / 40 weeks) in humans.",
      "neetNote": "Divided into three trimesters of 3 months each."
    },
    {
      term: "Foetal Ejection Reflex",
      definition: "The neuroendocrine reflex initiated by signals from fully mature fetus and placenta causing mild uterine myometrial contractions, triggering maternal oxytocin release.",
      "neetNote": "Initiated by the FETUS and PLACENTA, not the mother!"
    },
    {
      term: "Oxytocin",
      definition: "A peptide hormone synthesized by hypothalamus and released by posterior pituitary gland that induces powerful contractions of uterine smooth muscles (myometrium) during parturition and milk ejection during lactation.",
      "neetNote": "Known as the 'Birth Hormone' and 'Milk-Ejection Hormone'."
    },
    {
      term: "Prolactin (PRL)",
      definition: "A hormone secreted by anterior pituitary gland that stimulates mammary gland alveolar development and milk synthesis.",
      "neetNote": "Milk SYNTHESIS hormone (contrast with Oxytocin for milk EJECTION)."
    },
    {
      term: "Colostrum",
      definition: "The yellowish, nutrient-rich fluid secreted by maternal mammary glands during the first few days after parturition, packed with secretory IgA antibodies.",
      "neetNote": "Provides natural Passive Immunity to the newborn baby."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. The Placenta: Architecture, Transport & Endocrine Functions",
      paragraphs: [
        "Architecture of Placenta: Following implantation, finger-like projections called Chorionic Villi appear on the trophoblast. These villi penetrate maternal uterine tissue and become intimately surrounded by maternal blood sinuses. The chorionic villi and uterine tissue interlock to form the Placenta.",
        "Functions of Placenta:\n1. Physiological Transport Unit:\n - Respiration: Supplies $O_2$ from maternal blood to fetus and removes fetal $CO_2$.\n - Nutrition: Transport of glucose, amino acids, fatty acids, vitamins, and minerals to fetus.\n - Excretion: Removes fetal nitrogenous wastes (urea, uric acid) into maternal blood.",
        "2. Temporary Endocrine Gland:\nSecretes essential protein and steroid hormones into maternal circulation:\n - Human Chorionic Gonadotropin (hCG): Maintains Corpus Luteum to prevent menstruation.\n - Human Placental Lactogen (hPL): Stimulates maternal mammary gland development and metabolic adjustments.\n - Estrogens & Progesterones: Maintain uterine lining, inhibit ovulation, and prepare breasts for lactation.\n - Relaxin: Secreted by ovary and placenta in late pregnancy to soften pubic symphysis ligament for easier delivery.",
        "Special Note on Pregnancy-Specific Hormones: hCG, hPL, and Relaxin are produced in women ONLY during pregnancy. In addition, levels of other hormones (estrogens, progestogens, cortisol, prolactin, thyroxine) increase several-fold in maternal blood to support fetal growth and metabolic demands.",
        "Umbilical Cord: Connects the fetus to the placenta. Contains two Umbilical Arteries (transport deoxygenated blood and wastes from fetus to placenta) and one Umbilical Vein (transports oxygenated, nutrient-rich blood from placenta to fetus)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto bg-slate-900 rounded-xl p-4 shadow-lg">
          <text x="350" y="25" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">DIAGRAM 14: Human Fetus in Uterus with Placenta, Umbilical Cord & Amniotic Sac</text>
          
          <!-- Uterine Myometrium Outer Wall -->
          <path d="M 150 80 C 150 40, 550 40, 550 80 L 580 250 C 580 340, 480 380, 350 380 C 220 380, 120 340, 120 250 Z" fill="#881337" fill-opacity="0.3" stroke="#be123c" stroke-width="4"/>
          <text x="560" y="160" fill="#fda4af" font-size="12" font-weight="bold">Uterine Wall (Myometrium)</text>
          
          <!-- Placenta Base Top -->
          <path d="M 220 60 C 250 100, 450 100, 480 60 Z" fill="#ca8a04" stroke="#facc15" stroke-width="2"/>
          <text x="350" y="85" fill="#fef08a" font-size="13" font-weight="bold" text-anchor="middle">PLACENTA (Chorionic Villi + Endometrium)</text>
          
          <!-- Amniotic Sac Boundary -->
          <path d="M 180 110 C 180 90, 520 90, 520 110 L 540 250 C 540 330, 450 350, 350 350 C 250 350, 160 330, 160 250 Z" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="450" y="320" fill="#7dd3fc" font-size="12" font-weight="bold">Amniotic Fluid in Amniotic Cavity</text>
          
          <!-- Umbilical Cord Cable -->
          <path d="M 350 90 C 350 140, 320 160, 340 200" fill="none" stroke="#f43f5e" stroke-width="6"/>
          <path d="M 350 90 C 350 140, 320 160, 340 200" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="230" y="140" fill="#f472b6" font-size="12" font-weight="bold">Umbilical Cord (Arteries & Vein)</text>
          
          <!-- Fetus Schematic Body -->
          <g fill="#f43f5e" fill-opacity="0.6" stroke="#fb7185" stroke-width="2">
            <!-- Fetal Head -->
            <circle cx="350" cy="280" r="35"/>
            <!-- Fetal Body -->
            <ellipse cx="350" cy="210" rx="28" ry="40"/>
            <!-- Fetal Limbs -->
            <path d="M 330 220 C 300 240, 310 270, 325 280" fill="none" stroke="#fb7185" stroke-width="4"/>
            <path d="M 370 220 C 400 240, 390 270, 375 280" fill="none" stroke="#fb7185" stroke-width="4"/>
          </g>
          <text x="350" y="215" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Developing Fetus</text>
          
          <!-- Cervix & Plug -->
          <rect x="320" y="375" width="60" height="25" fill="#64748b" stroke="#cbd5e1" stroke-width="2"/>
          <text x="350" y="392" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Plug of Mucus in Cervix</text>
        </svg>`,
        caption: "Fully Labelled Anatomical Schematic of Human Fetus in Uterus showing Placental interface, Umbilical Cord, Amniotic Sac, and Cervical Mucus Plug.",
        guide: "Observe that the Placenta forms at the top interface and connects to the fetal belly via the Umbilical Cord."
      },
      importantPoints: [
        "WHAT TO OBSERVE: Placenta is a joint fetal-maternal structure. Umbilical cord connects fetus to placenta.",
        "NEET IDENTIFICATION POINTS: hCG, hPL, and Relaxin are produced ONLY during pregnancy.",
        "COMMON DIAGRAM TRAP: Umbilical Arteries carry DEOXYGENATED fetal blood to placenta; Umbilical Vein carries OXYGENATED maternal nutrients back to fetus!"
      ]
    },
    {
      heading: "2. Major Milestones of Human Gestational / Embryonic Development",
      paragraphs: [
        "Human pregnancy lasts approximately 9 months (3 Trimesters of 12 weeks each). Embryonic development follows a strict chronological organogenetic sequence:"
      ],
      tables: [
        {
          title: "Human Embryonic Development Timeline & Diagnostic Milestones",
          headers: ["Gestation Time", "Key Developmental Events & Diagnostics"],
          rows: [
            ["Month 1 (4 Weeks)", "Heart is formed. First clinical sign of growing fetus is listening to HEART SOUNDS via stethoscope."],
            ["Month 2 (8 Weeks)", "Fetus develops limbs and digits."],
            ["End of Month 3 (12 Weeks / 1st Trimester)", "Major organ systems formed: limbs, external genital organs well developed. Sex can be determined."],
            ["Month 5 (20 Weeks)", "FIRST FETAL MOVEMENTS noticed by mother; appearance of HAIR on fetal head."],
            ["End of Month 6 (24 Weeks / 2nd Trimester)", "Body covered with fine hair (lanugo), EYELIDS SEPARATE, and eyelashes form."],
            ["End of Month 9 (38-40 Weeks / 3rd Trimester)", "Fetus is fully developed and ready for delivery / parturition."]
          ]
        }
      ],
      importantPoints: [
        "First heart sound audible after 1 month.",
        "First fetal movement & head hair occur during Month 5.",
        "Eyelids separate during Month 6 (24 weeks)."
      ]
    },
    {
      heading: "3. Mechanism of Parturition: The Foetal Ejection Reflex & Oxytocin Positive Feedback",
      paragraphs: [
        "Parturition is the process of labor and childbirth driven by a complex Neuroendocrine Mechanism.",
        "Detailed Step-by-Step Neuroendocrine Cascade:\n1. Initiation: Initiated by signals from the FULLY DEVELOPED FETUS and PLACENTA.\n2. Foetal Ejection Reflex: The mature fetus secretes adrenal corticoids, which stimulate placental estrogen production, triggering mild uterine myometrial contractions. This is termed the Foetal Ejection Reflex.\n3. Oxytocin Secretion: Signals from the foetal ejection reflex travel via afferent nerves to the maternal Hypothalamus, stimulating the Posterior Pituitary to release OXYTOCIN into blood.\n4. Positive Feedback Loop: Oxytocin binds to myometrial receptors, inducing stronger and more frequent uterine contractions. Stronger contractions send stronger neural signals to the posterior pituitary, releasing even higher amounts of Oxytocin.\n5. Expulsion: The relentless positive feedback loop leads to powerful labor pains, cervical dilation, and expulsion of the fetus through the birth canal (cervix + vagina).\n6. Placenta Delivery: Shortly after baby delivery, the placenta is also detached and expelled from the uterus as 'afterbirth'."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 650 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto bg-slate-900 rounded-xl p-4 shadow-lg">
          <text x="325" y="25" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">DIAGRAM 15: Neuroendocrine Positive Feedback Cascade of Parturition</text>
          
          <!-- Step 1: Fully Developed Fetus & Placenta -->
          <rect x="180" y="50" width="290" height="40" fill="#ca8a04" fill-opacity="0.4" stroke="#facc15" stroke-width="2" rx="6"/>
          <text x="325" y="75" fill="#fef08a" font-size="13" font-weight="bold" text-anchor="middle">Fully Developed Fetus & Placenta</text>
          
          <line x1="325" y1="90" x2="325" y2="120" stroke="#38bdf8" stroke-width="2.5"/>
          <text x="335" y="108" fill="#38bdf8" font-size="11" font-weight="bold">Triggers</text>
          
          <!-- Step 2: Foetal Ejection Reflex -->
          <rect x="180" y="125" width="290" height="40" fill="#9f1239" fill-opacity="0.4" stroke="#f43f5e" stroke-width="2" rx="6"/>
          <text x="325" y="150" fill="#fda4af" font-size="13" font-weight="bold" text-anchor="middle">Foetal Ejection Reflex (Mild Contractions)</text>
          
          <line x1="325" y1="165" x2="325" y2="195" stroke="#38bdf8" stroke-width="2.5"/>
          <text x="335" y="182" fill="#38bdf8" font-size="11" font-weight="bold">Neural Signals</text>
          
          <!-- Step 3: Maternal Posterior Pituitary -->
          <rect x="180" y="200" width="290" height="40" fill="#581c87" fill-opacity="0.4" stroke="#c084fc" stroke-width="2" rx="6"/>
          <text x="325" y="225" fill="#e9d5ff" font-size="13" font-weight="bold" text-anchor="middle">Maternal Posterior Pituitary Releases OXYTOCIN</text>
          
          <line x1="325" y1="240" x2="325" y2="270" stroke="#38bdf8" stroke-width="2.5"/>
          <text x="335" y="258" fill="#38bdf8" font-size="11" font-weight="bold">Acts on Myometrium</text>
          
          <!-- Step 4: Strong Uterine Contractions & Positive Feedback Loop -->
          <rect x="150" y="275" width="350" height="45" fill="#065f46" fill-opacity="0.5" stroke="#22c55e" stroke-width="2.5" rx="8"/>
          <text x="325" y="302" fill="#86efac" font-size="13" font-weight="bold" text-anchor="middle">STRONGER MYOMETRIAL CONTRACTIONS & Delivery</text>
          
          <!-- POSITIVE FEEDBACK LOOP ARROW -->
          <path d="M 500 295 C 600 295, 600 145, 480 145" fill="none" stroke="#22c55e" stroke-width="3" stroke-dasharray="4,2"/>
          <text x="610" y="220" fill="#86efac" font-size="11" font-weight="bold" transform="rotate(90 610 220)" text-anchor="middle">+VE FEEDBACK LOOP</text>
        </svg>`,
        caption: "Neuroendocrine pathway depicting Foetal Ejection Reflex and maternal Oxytocin positive feedback loop driving uterine myometrial contractions during childbirth.",
        guide: "Key Takeaway: Parturition is initiated by signals from the FETUS and PLACENTA, causing Oxytocin release in a self-amplifying positive feedback loop."
      },
      importantPoints: [
        "Foetal Ejection Reflex is initiated by the mature fetus and placenta.",
        "Oxytocin acts on uterine myometrium, creating a positive feedback loop.",
        "Parturition is a neuroendocrine mechanism."
      ]
    },
    {
      heading: "4. Lactation, Hormonal Control & Immunology of Colostrum",
      paragraphs: [
        "Lactation: The process of milk production and secretion by maternal mammary glands following childbirth.",
        "Hormonal Roles in Lactation:\n- Prolactin (PRL): Secreted by anterior pituitary gland. Stimulates milk synthesis and secretion inside alveoli of mammary glands.\n- Oxytocin: Secreted by posterior pituitary gland in response to suckling reflex by newborn baby. Induces contraction of myoepithelial cells surrounding alveoli, causing Milk Ejection ('let-down reflex').",
        "Colostrum & Passive Immunity:\n- Colostrum is the yellowish, thick fluid produced by mammary glands during the first few days post-parturition.\n- Immunological Importance: Colostrum contains high concentrations of Secretory Immunoglobulin A (IgA) antibodies, proteins, and low fat.\n- Mechanism: IgA antibodies are absorbed across the infant's gut mucosa, providing immediate Natural Passive Immunity against gastrointestinal and respiratory pathogens.\n- Medical Recommendation: Breastfeeding during initial period of infant growth is strongly advised by doctors for developing a healthy immune system."
      ],
      importantPoints: [
        "Prolactin = Milk Synthesis; Oxytocin = Milk Ejection.",
        "Colostrum contains IgA antibodies, providing natural PASSIVE immunity to newborn."
      ]
    }
  ],

  formulae: [],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-4">
      <text x="300" y="25" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">SUMMARY: Hormonal Controls of Lactation</text>
      
      <rect x="40" y="50" width="230" height="110" fill="#1e293b" stroke="#a855f7" stroke-width="2" rx="8"/>
      <text x="155" y="75" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">PROLACTIN (PRL)</text>
      <text x="155" y="95" fill="#cbd5e1" font-size="11" text-anchor="middle">Anterior Pituitary</text>
      <text x="155" y="125" fill="#e9d5ff" font-size="12" font-weight="bold" text-anchor="middle">STIMULATES MILK SYNTHESIS</text>

      <rect x="330" y="50" width="230" height="110" fill="#1e293b" stroke="#22c55e" stroke-width="2" rx="8"/>
      <text x="445" y="75" fill="#4ade80" font-size="13" font-weight="bold" text-anchor="middle">OXYTOCIN</text>
      <text x="445" y="95" fill="#cbd5e1" font-size="11" text-anchor="middle">Posterior Pituitary</text>
      <text x="445" y="125" fill="#86efac" font-size="12" font-weight="bold" text-anchor="middle">STIMULATES MILK EJECTION</text>
    </svg>`,
    caption: "Summary comparison of Prolactin (Milk Synthesis) versus Oxytocin (Milk Ejection)."
  },

  neetImportantPoints: [
    "🔥 Placental hormones produced ONLY during pregnancy: hCG, hPL, Relaxin.",
    "🔥 First sign of growing fetus: Heart sound audible via stethoscope after 1 month.",
    "🔥 First fetal movements & head hair appear at 5th month.",
    "🔥 Foetal Ejection Reflex originates from fully developed fetus and placenta.",
    "🔥 Parturition is driven by an Oxytocin-mediated Positive Feedback Loop.",
    "🔥 Colostrum is rich in IgA antibodies, conferring Natural Passive Immunity."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing Prolactin and Oxytocin roles in lactation.",
      correctFact: "Prolactin synthesizes/produces milk; Oxytocin ejects/lets-down milk.",
      whyItMattersForNEET: "Frequently tested functional matching question."
    },
    {
      commonConfusion: "Believing Foetal Ejection Reflex is initiated by maternal signals.",
      correctFact: "It is initiated by signals from the fully developed FETUS and PLACENTA.",
      whyItMattersForNEET: "High-yield conceptual question in NEET."
    }
  ],

  quickRevision: [
    "Placenta functions: Transport ($O_2$, nutrients, waste) + Endocrine (hCG, hPL, Estrogens, Progesterones).",
    "Pregnancy-specific hormones: hCG, hPL, Relaxin.",
    "Development Milestones: Month 1 (Heart), Month 2 (Limbs), Month 3 (Organ systems), Month 5 (Movements & head hair), Month 6 (Eyelids separate).",
    "Parturition: Fetus/Placenta → Foetal Ejection Reflex → Maternal Oxytocin → Positive Feedback myometrial contractions → Childbirth.",
    "Lactation: Prolactin (synthesis), Oxytocin (ejection). Colostrum contains IgA (passive immunity)."
  ],

  practiceQuestions: [
    {
      id: "pq-preg-1",
      question: "Which of the following hormones is produced in human females ONLY during pregnancy?",
      options: [
        "Estrogen",
        "Progesterone",
        "Human Placental Lactogen (hPL)",
        "Luteinizing Hormone (LH)"
      ],
      correctAnswerIndex: 2,
      explanation: "Human Placental Lactogen (hPL), Human Chorionic Gonadotropin (hCG), and Relaxin are secreted exclusively during pregnancy.",
      difficulty: "Easy",
      topicTested: "Pregnancy-specific placental hormones"
    },
    {
      id: "pq-preg-2",
      question: "The foetal ejection reflex in human females is initiated by:",
      options: [
        "Oxytocin release from maternal pituitary",
        "Fully developed fetus and placenta",
        "High levels of maternal estrogen",
        "Pressure of fetus on uterine cervix"
      ],
      correctAnswerIndex: 1,
      explanation: "The foetal ejection reflex is initiated by signals originating from the fully mature fetus and placenta.",
      difficulty: "Medium",
      topicTested: "Initiation of parturition"
    }
  ],

  pyqs: [
    {
      id: "pyq-preg-1",
      year: 2019,
      exam: "NEET UG",
      verifiedExam: "NEET UG 2019",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2019 Official Paper",
      question: "Colostrum, the yellowish fluid secreted by mother during initial days of lactation, is very essential to impart immunity to the newborn infants because it contains:",
      options: [
        "Immunoglobulin A (IgA)",
        "Immunoglobulin G (IgG)",
        "Immunoglobulin M (IgM)",
        "Immunoglobulin E (IgE)"
      ],
      correctAnswerIndex: 0,
      explanation: "Colostrum contains abundant Secretory Immunoglobulin A (IgA) antibodies, which protect the infant against gut and respiratory infections, providing natural passive immunity.",
      conceptTested: "Colostrum immunoglobulins",
      ncertReference: "Class 12 NCERT Chapter 3, Section 3.7, Page 54"
    },
    {
      id: "pyq-preg-2",
      year: 2020,
      exam: "NEET UG",
      verifiedExam: "NEET UG 2020",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2020 Official Paper",
      question: "Which of the following hormone levels will cause release of ovum (ovulation) from the graafian follicle?",
      options: [
        "High concentration of Estrogen",
        "High concentration of Progesterone",
        "Low concentration of LH",
        "Low concentration of FSH"
      ],
      correctAnswerIndex: 0,
      explanation: "High concentration of Estrogen secreted by growing follicles exerts positive feedback on anterior pituitary, causing the LH Surge which ruptures the Graafian follicle to release the ovum.",
      conceptTested: "Hormonal feedback causing ovulation",
      ncertReference: "Class 12 NCERT Chapter 3, Section 3.4, Page 50"
    }
  ]
};
