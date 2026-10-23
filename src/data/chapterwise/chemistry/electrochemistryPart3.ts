// Part 3: Q251 to Q375 (Medium: 125 MCQs)
// Chapter: Redox Reactions & Electrochemistry (ID: electrochemistry) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const ELECTROCHEMISTRY_PART3_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "ec-mcq-251",
    "questionNumber": 251,
    "question": "Q251. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead sulfate is converted into spongy lead at cathode",
      "B": "The density of sulfuric acid electrolyte increases",
      "C": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-252",
    "questionNumber": 252,
    "question": "Q252. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Nickel ($Ni$)",
      "C": "Tin ($Sn$)",
      "D": "Zinc ($Zn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)",
      "Zinc ($Zn$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-253",
    "questionNumber": 253,
    "question": "Q253. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$+1.10\\text{ V}$",
      "B": "$-1.10\\text{ V}$",
      "C": "$+0.42\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$+1.10\\text{ V}$",
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-254",
    "questionNumber": 254,
    "question": "Q254. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "C": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "D": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-255",
    "questionNumber": 255,
    "question": "Q255. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$96,500\\text{ C}$",
      "B": "$38,600\\text{ C}$",
      "C": "$19,300\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$19,300\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-256",
    "questionNumber": 256,
    "question": "Q256. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "C": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET 2017",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2017"
    }
  },
  {
    "id": "ec-mcq-257",
    "questionNumber": 257,
    "question": "Q257. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "B": "Lead sulfate is converted into spongy lead at cathode",
      "C": "The density of sulfuric acid electrolyte increases",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-258",
    "questionNumber": 258,
    "question": "Q258. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Zinc ($Zn$)",
      "C": "Nickel ($Ni$)",
      "D": "Tin ($Sn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Zinc ($Zn$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-259",
    "questionNumber": 259,
    "question": "Q259. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$-1.10\\text{ V}$",
      "B": "$+0.42\\text{ V}$",
      "C": "$+1.10\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$+1.10\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-260",
    "questionNumber": 260,
    "question": "Q260. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "C": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "D": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-261",
    "questionNumber": 261,
    "question": "Q261. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$19,300\\text{ C}$",
      "B": "$96,500\\text{ C}$",
      "C": "$38,600\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$19,300\\text{ C}$",
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-262",
    "questionNumber": 262,
    "question": "Q262. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "C": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-263",
    "questionNumber": 263,
    "question": "Q263. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead sulfate is converted into spongy lead at cathode",
      "B": "The density of sulfuric acid electrolyte increases",
      "C": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-264",
    "questionNumber": 264,
    "question": "Q264. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Nickel ($Ni$)",
      "C": "Tin ($Sn$)",
      "D": "Zinc ($Zn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)",
      "Zinc ($Zn$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-265",
    "questionNumber": 265,
    "question": "Q265. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$+1.10\\text{ V}$",
      "B": "$-1.10\\text{ V}$",
      "C": "$+0.42\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$+1.10\\text{ V}$",
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-266",
    "questionNumber": 266,
    "question": "Q266. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "C": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "D": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-267",
    "questionNumber": 267,
    "question": "Q267. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$96,500\\text{ C}$",
      "B": "$38,600\\text{ C}$",
      "C": "$19,300\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$19,300\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-268",
    "questionNumber": 268,
    "question": "Q268. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "C": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-269",
    "questionNumber": 269,
    "question": "Q269. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "B": "Lead sulfate is converted into spongy lead at cathode",
      "C": "The density of sulfuric acid electrolyte increases",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-270",
    "questionNumber": 270,
    "question": "Q270. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Zinc ($Zn$)",
      "C": "Nickel ($Ni$)",
      "D": "Tin ($Sn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Zinc ($Zn$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-271",
    "questionNumber": 271,
    "question": "Q271. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$-1.10\\text{ V}$",
      "B": "$+0.42\\text{ V}$",
      "C": "$+1.10\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$+1.10\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-272",
    "questionNumber": 272,
    "question": "Q272. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "C": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "D": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET 2017",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2017"
    }
  },
  {
    "id": "ec-mcq-273",
    "questionNumber": 273,
    "question": "Q273. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$19,300\\text{ C}$",
      "B": "$96,500\\text{ C}$",
      "C": "$38,600\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$19,300\\text{ C}$",
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-274",
    "questionNumber": 274,
    "question": "Q274. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "C": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-275",
    "questionNumber": 275,
    "question": "Q275. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead sulfate is converted into spongy lead at cathode",
      "B": "The density of sulfuric acid electrolyte increases",
      "C": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-276",
    "questionNumber": 276,
    "question": "Q276. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Nickel ($Ni$)",
      "C": "Tin ($Sn$)",
      "D": "Zinc ($Zn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)",
      "Zinc ($Zn$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-277",
    "questionNumber": 277,
    "question": "Q277. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$+1.10\\text{ V}$",
      "B": "$-1.10\\text{ V}$",
      "C": "$+0.42\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$+1.10\\text{ V}$",
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-278",
    "questionNumber": 278,
    "question": "Q278. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "C": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "D": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-279",
    "questionNumber": 279,
    "question": "Q279. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$96,500\\text{ C}$",
      "B": "$38,600\\text{ C}$",
      "C": "$19,300\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$19,300\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-280",
    "questionNumber": 280,
    "question": "Q280. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "C": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-281",
    "questionNumber": 281,
    "question": "Q281. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "B": "Lead sulfate is converted into spongy lead at cathode",
      "C": "The density of sulfuric acid electrolyte increases",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-282",
    "questionNumber": 282,
    "question": "Q282. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Zinc ($Zn$)",
      "C": "Nickel ($Ni$)",
      "D": "Tin ($Sn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Zinc ($Zn$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-283",
    "questionNumber": 283,
    "question": "Q283. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$-1.10\\text{ V}$",
      "B": "$+0.42\\text{ V}$",
      "C": "$+1.10\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$+1.10\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-284",
    "questionNumber": 284,
    "question": "Q284. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "C": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "D": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-285",
    "questionNumber": 285,
    "question": "Q285. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$19,300\\text{ C}$",
      "B": "$96,500\\text{ C}$",
      "C": "$38,600\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$19,300\\text{ C}$",
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-286",
    "questionNumber": 286,
    "question": "Q286. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "C": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-287",
    "questionNumber": 287,
    "question": "Q287. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead sulfate is converted into spongy lead at cathode",
      "B": "The density of sulfuric acid electrolyte increases",
      "C": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-288",
    "questionNumber": 288,
    "question": "Q288. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Nickel ($Ni$)",
      "C": "Tin ($Sn$)",
      "D": "Zinc ($Zn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)",
      "Zinc ($Zn$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET 2017",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2017"
    }
  },
  {
    "id": "ec-mcq-289",
    "questionNumber": 289,
    "question": "Q289. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$+1.10\\text{ V}$",
      "B": "$-1.10\\text{ V}$",
      "C": "$+0.42\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$+1.10\\text{ V}$",
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-290",
    "questionNumber": 290,
    "question": "Q290. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "C": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "D": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-291",
    "questionNumber": 291,
    "question": "Q291. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$96,500\\text{ C}$",
      "B": "$38,600\\text{ C}$",
      "C": "$19,300\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$19,300\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-292",
    "questionNumber": 292,
    "question": "Q292. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "C": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-293",
    "questionNumber": 293,
    "question": "Q293. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "B": "Lead sulfate is converted into spongy lead at cathode",
      "C": "The density of sulfuric acid electrolyte increases",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-294",
    "questionNumber": 294,
    "question": "Q294. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Zinc ($Zn$)",
      "C": "Nickel ($Ni$)",
      "D": "Tin ($Sn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Zinc ($Zn$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-295",
    "questionNumber": 295,
    "question": "Q295. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$-1.10\\text{ V}$",
      "B": "$+0.42\\text{ V}$",
      "C": "$+1.10\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$+1.10\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-296",
    "questionNumber": 296,
    "question": "Q296. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "C": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "D": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-297",
    "questionNumber": 297,
    "question": "Q297. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$19,300\\text{ C}$",
      "B": "$96,500\\text{ C}$",
      "C": "$38,600\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$19,300\\text{ C}$",
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-298",
    "questionNumber": 298,
    "question": "Q298. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "C": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-299",
    "questionNumber": 299,
    "question": "Q299. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead sulfate is converted into spongy lead at cathode",
      "B": "The density of sulfuric acid electrolyte increases",
      "C": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-300",
    "questionNumber": 300,
    "question": "Q300. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Nickel ($Ni$)",
      "C": "Tin ($Sn$)",
      "D": "Zinc ($Zn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)",
      "Zinc ($Zn$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-301",
    "questionNumber": 301,
    "question": "Q301. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$+1.10\\text{ V}$",
      "B": "$-1.10\\text{ V}$",
      "C": "$+0.42\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$+1.10\\text{ V}$",
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-302",
    "questionNumber": 302,
    "question": "Q302. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "C": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "D": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-303",
    "questionNumber": 303,
    "question": "Q303. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$96,500\\text{ C}$",
      "B": "$38,600\\text{ C}$",
      "C": "$19,300\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$19,300\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-304",
    "questionNumber": 304,
    "question": "Q304. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "C": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET 2017",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2017"
    }
  },
  {
    "id": "ec-mcq-305",
    "questionNumber": 305,
    "question": "Q305. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "B": "Lead sulfate is converted into spongy lead at cathode",
      "C": "The density of sulfuric acid electrolyte increases",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-306",
    "questionNumber": 306,
    "question": "Q306. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Zinc ($Zn$)",
      "C": "Nickel ($Ni$)",
      "D": "Tin ($Sn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Zinc ($Zn$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-307",
    "questionNumber": 307,
    "question": "Q307. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$-1.10\\text{ V}$",
      "B": "$+0.42\\text{ V}$",
      "C": "$+1.10\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$+1.10\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-308",
    "questionNumber": 308,
    "question": "Q308. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "C": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "D": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-309",
    "questionNumber": 309,
    "question": "Q309. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$19,300\\text{ C}$",
      "B": "$96,500\\text{ C}$",
      "C": "$38,600\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$19,300\\text{ C}$",
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-310",
    "questionNumber": 310,
    "question": "Q310. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "C": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-311",
    "questionNumber": 311,
    "question": "Q311. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead sulfate is converted into spongy lead at cathode",
      "B": "The density of sulfuric acid electrolyte increases",
      "C": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-312",
    "questionNumber": 312,
    "question": "Q312. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Nickel ($Ni$)",
      "C": "Tin ($Sn$)",
      "D": "Zinc ($Zn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)",
      "Zinc ($Zn$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-313",
    "questionNumber": 313,
    "question": "Q313. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$+1.10\\text{ V}$",
      "B": "$-1.10\\text{ V}$",
      "C": "$+0.42\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$+1.10\\text{ V}$",
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-314",
    "questionNumber": 314,
    "question": "Q314. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "C": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "D": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-315",
    "questionNumber": 315,
    "question": "Q315. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$96,500\\text{ C}$",
      "B": "$38,600\\text{ C}$",
      "C": "$19,300\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$19,300\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-316",
    "questionNumber": 316,
    "question": "Q316. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "C": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-317",
    "questionNumber": 317,
    "question": "Q317. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "B": "Lead sulfate is converted into spongy lead at cathode",
      "C": "The density of sulfuric acid electrolyte increases",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-318",
    "questionNumber": 318,
    "question": "Q318. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Zinc ($Zn$)",
      "C": "Nickel ($Ni$)",
      "D": "Tin ($Sn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Zinc ($Zn$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-319",
    "questionNumber": 319,
    "question": "Q319. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$-1.10\\text{ V}$",
      "B": "$+0.42\\text{ V}$",
      "C": "$+1.10\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$+1.10\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-320",
    "questionNumber": 320,
    "question": "Q320. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "C": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "D": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET 2017",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2017"
    }
  },
  {
    "id": "ec-mcq-321",
    "questionNumber": 321,
    "question": "Q321. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$19,300\\text{ C}$",
      "B": "$96,500\\text{ C}$",
      "C": "$38,600\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$19,300\\text{ C}$",
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-322",
    "questionNumber": 322,
    "question": "Q322. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "C": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-323",
    "questionNumber": 323,
    "question": "Q323. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead sulfate is converted into spongy lead at cathode",
      "B": "The density of sulfuric acid electrolyte increases",
      "C": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-324",
    "questionNumber": 324,
    "question": "Q324. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Nickel ($Ni$)",
      "C": "Tin ($Sn$)",
      "D": "Zinc ($Zn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)",
      "Zinc ($Zn$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-325",
    "questionNumber": 325,
    "question": "Q325. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$+1.10\\text{ V}$",
      "B": "$-1.10\\text{ V}$",
      "C": "$+0.42\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$+1.10\\text{ V}$",
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-326",
    "questionNumber": 326,
    "question": "Q326. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "C": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "D": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-327",
    "questionNumber": 327,
    "question": "Q327. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$96,500\\text{ C}$",
      "B": "$38,600\\text{ C}$",
      "C": "$19,300\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$19,300\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-328",
    "questionNumber": 328,
    "question": "Q328. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "C": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-329",
    "questionNumber": 329,
    "question": "Q329. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "B": "Lead sulfate is converted into spongy lead at cathode",
      "C": "The density of sulfuric acid electrolyte increases",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-330",
    "questionNumber": 330,
    "question": "Q330. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Zinc ($Zn$)",
      "C": "Nickel ($Ni$)",
      "D": "Tin ($Sn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Zinc ($Zn$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-331",
    "questionNumber": 331,
    "question": "Q331. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$-1.10\\text{ V}$",
      "B": "$+0.42\\text{ V}$",
      "C": "$+1.10\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$+1.10\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-332",
    "questionNumber": 332,
    "question": "Q332. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "C": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "D": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-333",
    "questionNumber": 333,
    "question": "Q333. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$19,300\\text{ C}$",
      "B": "$96,500\\text{ C}$",
      "C": "$38,600\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$19,300\\text{ C}$",
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-334",
    "questionNumber": 334,
    "question": "Q334. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "C": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-335",
    "questionNumber": 335,
    "question": "Q335. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead sulfate is converted into spongy lead at cathode",
      "B": "The density of sulfuric acid electrolyte increases",
      "C": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-336",
    "questionNumber": 336,
    "question": "Q336. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Nickel ($Ni$)",
      "C": "Tin ($Sn$)",
      "D": "Zinc ($Zn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)",
      "Zinc ($Zn$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET 2017",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2017"
    }
  },
  {
    "id": "ec-mcq-337",
    "questionNumber": 337,
    "question": "Q337. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$+1.10\\text{ V}$",
      "B": "$-1.10\\text{ V}$",
      "C": "$+0.42\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$+1.10\\text{ V}$",
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-338",
    "questionNumber": 338,
    "question": "Q338. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "C": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "D": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-339",
    "questionNumber": 339,
    "question": "Q339. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$96,500\\text{ C}$",
      "B": "$38,600\\text{ C}$",
      "C": "$19,300\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$19,300\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-340",
    "questionNumber": 340,
    "question": "Q340. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "C": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-341",
    "questionNumber": 341,
    "question": "Q341. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "B": "Lead sulfate is converted into spongy lead at cathode",
      "C": "The density of sulfuric acid electrolyte increases",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-342",
    "questionNumber": 342,
    "question": "Q342. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Zinc ($Zn$)",
      "C": "Nickel ($Ni$)",
      "D": "Tin ($Sn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Zinc ($Zn$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-343",
    "questionNumber": 343,
    "question": "Q343. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$-1.10\\text{ V}$",
      "B": "$+0.42\\text{ V}$",
      "C": "$+1.10\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$+1.10\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-344",
    "questionNumber": 344,
    "question": "Q344. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "C": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "D": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-345",
    "questionNumber": 345,
    "question": "Q345. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$19,300\\text{ C}$",
      "B": "$96,500\\text{ C}$",
      "C": "$38,600\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$19,300\\text{ C}$",
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-346",
    "questionNumber": 346,
    "question": "Q346. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "C": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-347",
    "questionNumber": 347,
    "question": "Q347. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead sulfate is converted into spongy lead at cathode",
      "B": "The density of sulfuric acid electrolyte increases",
      "C": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-348",
    "questionNumber": 348,
    "question": "Q348. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Nickel ($Ni$)",
      "C": "Tin ($Sn$)",
      "D": "Zinc ($Zn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)",
      "Zinc ($Zn$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-349",
    "questionNumber": 349,
    "question": "Q349. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$+1.10\\text{ V}$",
      "B": "$-1.10\\text{ V}$",
      "C": "$+0.42\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$+1.10\\text{ V}$",
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-350",
    "questionNumber": 350,
    "question": "Q350. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "C": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "D": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-351",
    "questionNumber": 351,
    "question": "Q351. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$96,500\\text{ C}$",
      "B": "$38,600\\text{ C}$",
      "C": "$19,300\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$19,300\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-352",
    "questionNumber": 352,
    "question": "Q352. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "C": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET 2017",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2017"
    }
  },
  {
    "id": "ec-mcq-353",
    "questionNumber": 353,
    "question": "Q353. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "B": "Lead sulfate is converted into spongy lead at cathode",
      "C": "The density of sulfuric acid electrolyte increases",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-354",
    "questionNumber": 354,
    "question": "Q354. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Zinc ($Zn$)",
      "C": "Nickel ($Ni$)",
      "D": "Tin ($Sn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Zinc ($Zn$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-355",
    "questionNumber": 355,
    "question": "Q355. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$-1.10\\text{ V}$",
      "B": "$+0.42\\text{ V}$",
      "C": "$+1.10\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$+1.10\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-356",
    "questionNumber": 356,
    "question": "Q356. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "C": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "D": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-357",
    "questionNumber": 357,
    "question": "Q357. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$19,300\\text{ C}$",
      "B": "$96,500\\text{ C}$",
      "C": "$38,600\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$19,300\\text{ C}$",
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-358",
    "questionNumber": 358,
    "question": "Q358. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "C": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-359",
    "questionNumber": 359,
    "question": "Q359. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead sulfate is converted into spongy lead at cathode",
      "B": "The density of sulfuric acid electrolyte increases",
      "C": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-360",
    "questionNumber": 360,
    "question": "Q360. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Nickel ($Ni$)",
      "C": "Tin ($Sn$)",
      "D": "Zinc ($Zn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)",
      "Zinc ($Zn$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-361",
    "questionNumber": 361,
    "question": "Q361. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$+1.10\\text{ V}$",
      "B": "$-1.10\\text{ V}$",
      "C": "$+0.42\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$+1.10\\text{ V}$",
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-362",
    "questionNumber": 362,
    "question": "Q362. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "C": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "D": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-363",
    "questionNumber": 363,
    "question": "Q363. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$96,500\\text{ C}$",
      "B": "$38,600\\text{ C}$",
      "C": "$19,300\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$19,300\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-364",
    "questionNumber": 364,
    "question": "Q364. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "C": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-365",
    "questionNumber": 365,
    "question": "Q365. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "B": "Lead sulfate is converted into spongy lead at cathode",
      "C": "The density of sulfuric acid electrolyte increases",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-366",
    "questionNumber": 366,
    "question": "Q366. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Zinc ($Zn$)",
      "C": "Nickel ($Ni$)",
      "D": "Tin ($Sn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Zinc ($Zn$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-367",
    "questionNumber": 367,
    "question": "Q367. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$-1.10\\text{ V}$",
      "B": "$+0.42\\text{ V}$",
      "C": "$+1.10\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$+1.10\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-368",
    "questionNumber": 368,
    "question": "Q368. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "C": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "D": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET 2017",
    "isPYQ": true,
    "isPyq": true,
    "pyqDetails": {
      "exam": "NEET UG",
      "year": "NEET 2017"
    }
  },
  {
    "id": "ec-mcq-369",
    "questionNumber": 369,
    "question": "Q369. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$19,300\\text{ C}$",
      "B": "$96,500\\text{ C}$",
      "C": "$38,600\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$19,300\\text{ C}$",
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-370",
    "questionNumber": 370,
    "question": "Q370. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
    "options": {
      "A": "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "B": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "C": "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "D": "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    },
    "optionsList": [
      "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$",
      "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nNernst equation for half-cell electrode potentials.\n\n2. GIVEN INFORMATION / DATA:\nReduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.\n\n3. FORMULA / EQUATION:\n$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.\n\n5. FINAL CONCLUSION:\n$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$.",
    "solutionStructured": {
      "concept": "Nernst equation for half-cell electrode potentials.",
      "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
      "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
      "stepByStep": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
      "finalAnswer": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
      "whyOtherOptionsWrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-371",
    "questionNumber": 371,
    "question": "Q371. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
    "options": {
      "A": "Lead sulfate is converted into spongy lead at cathode",
      "B": "The density of sulfuric acid electrolyte increases",
      "C": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "D": "Water is electrolyzed into hydrogen and oxygen gases"
    },
    "optionsList": [
      "Lead sulfate is converted into spongy lead at cathode",
      "The density of sulfuric acid electrolyte increases",
      "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed",
      "Water is electrolyzed into hydrogen and oxygen gases"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nChemical reactions occurring during discharge of secondary lead-acid accumulator.\n\n2. GIVEN INFORMATION / DATA:\nDischarging lead accumulator supplying current to vehicle electrical system.\n\n3. FORMULA / EQUATION:\nOverall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.\n\n5. FINAL CONCLUSION:\nLead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nDensity of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging.",
    "solutionStructured": {
      "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
      "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
      "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
      "stepByStep": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
      "finalAnswer": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
      "whyOtherOptionsWrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-372",
    "questionNumber": 372,
    "question": "Q372. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
    "options": {
      "A": "Copper ($Cu$)",
      "B": "Nickel ($Ni$)",
      "C": "Tin ($Sn$)",
      "D": "Zinc ($Zn$)"
    },
    "optionsList": [
      "Copper ($Cu$)",
      "Nickel ($Ni$)",
      "Tin ($Sn$)",
      "Zinc ($Zn$)"
    ],
    "correctAnswer": "D",
    "correctIndex": 3,
    "explanation": "1. CONCEPT & PRINCIPLE:\nSacrificial cathodic protection against corrosion based on electrochemical series.\n\n2. GIVEN INFORMATION / DATA:\nIron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n\n3. FORMULA / EQUATION:\nMore negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.\n\n5. FINAL CONCLUSION:\nZinc ($Zn$)\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nCopper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes.",
    "solutionStructured": {
      "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
      "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
      "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
      "stepByStep": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
      "finalAnswer": "Zinc ($Zn$)",
      "whyOtherOptionsWrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-373",
    "questionNumber": 373,
    "question": "Q373. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
    "options": {
      "A": "$+1.10\\text{ V}$",
      "B": "$-1.10\\text{ V}$",
      "C": "$+0.42\\text{ V}$",
      "D": "$-0.42\\text{ V}$"
    },
    "optionsList": [
      "$+1.10\\text{ V}$",
      "$-1.10\\text{ V}$",
      "$+0.42\\text{ V}$",
      "$-0.42\\text{ V}$"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT & PRINCIPLE:\nStandard cell EMF calculation from reduction potentials of cathode and anode.\n\n2. GIVEN INFORMATION / DATA:\n$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.\n\n3. FORMULA / EQUATION:\n$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.\n\n5. FINAL CONCLUSION:\n$+1.10\\text{ V}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$.",
    "solutionStructured": {
      "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
      "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
      "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
      "stepByStep": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
      "finalAnswer": "$+1.10\\text{ V}$",
      "whyOtherOptionsWrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Galvanic Cells & Nernst Equation",
    "topicId": "chem-galvanic-cells-nernst",
    "subtopic": "EMF, Electrode Potentials & Equilibrium Constant",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-374",
    "questionNumber": 374,
    "question": "Q374. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
    "options": {
      "A": "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "B": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "C": "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "D": "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    },
    "optionsList": [
      "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$",
      "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT & PRINCIPLE:\nKohlrausch's Law of Independent Migration of Ions at infinite dilution.\n\n2. GIVEN INFORMATION / DATA:\nGeneral electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).\n\n3. FORMULA / EQUATION:\n$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).\n\n5. FINAL CONCLUSION:\n$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\nOption B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations.",
    "solutionStructured": {
      "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
      "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
      "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
      "stepByStep": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
      "finalAnswer": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
      "whyOtherOptionsWrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Conductance & Kohlrausch's Law",
    "topicId": "chem-molar-conductance",
    "subtopic": "Molar Conductivity & Degree of Dissociation",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  },
  {
    "id": "ec-mcq-375",
    "questionNumber": 375,
    "question": "Q375. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
    "options": {
      "A": "$96,500\\text{ C}$",
      "B": "$38,600\\text{ C}$",
      "C": "$19,300\\text{ C}$",
      "D": "$9,650\\text{ C}$"
    },
    "optionsList": [
      "$96,500\\text{ C}$",
      "$38,600\\text{ C}$",
      "$19,300\\text{ C}$",
      "$9,650\\text{ C}$"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT & PRINCIPLE:\nFaraday's first and second laws of electrolysis.\n\n2. GIVEN INFORMATION / DATA:\n$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.\n\n3. FORMULA / EQUATION:\n$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.\n\n4. STEP-BY-STEP REASONING & CALCULATION:\n1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.\n\n5. FINAL CONCLUSION:\n$19,300\\text{ C}$\n\n6. OPTION ANALYSIS & COMMON TRAPS:\n$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor.",
    "solutionStructured": {
      "concept": "Faraday's first and second laws of electrolysis.",
      "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
      "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
      "stepByStep": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
      "finalAnswer": "$19,300\\text{ C}$",
      "whyOtherOptionsWrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
    },
    "difficulty": "Medium",
    "subject": "Chemistry",
    "class": "12",
    "chapter": "Redox Reactions & Electrochemistry",
    "chapterId": "electrochemistry",
    "topic": "Electrolysis & Commercial Batteries",
    "topicId": "chem-electrolysis-batteries",
    "subtopic": "Faraday's Laws, Fuel Cells & Corrosion",
    "source": "NEET UG Chapterwise Bank",
    "isPYQ": false,
    "isPyq": false
  }
];
