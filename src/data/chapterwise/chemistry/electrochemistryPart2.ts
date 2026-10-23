// Part 2: Q126 to Q250 (Medium: 125 MCQs)
// Chapter: Redox Reactions & Electrochemistry (ID: electrochemistry) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const ELECTROCHEMISTRY_PART2_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "ec-mcq-126",
    "questionNumber": 126,
    "question": "Q126. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-127",
    "questionNumber": 127,
    "question": "Q127. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-128",
    "questionNumber": 128,
    "question": "Q128. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-129",
    "questionNumber": 129,
    "question": "Q129. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-130",
    "questionNumber": 130,
    "question": "Q130. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-131",
    "questionNumber": 131,
    "question": "Q131. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-132",
    "questionNumber": 132,
    "question": "Q132. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-133",
    "questionNumber": 133,
    "question": "Q133. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-134",
    "questionNumber": 134,
    "question": "Q134. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-135",
    "questionNumber": 135,
    "question": "Q135. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-136",
    "questionNumber": 136,
    "question": "Q136. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-137",
    "questionNumber": 137,
    "question": "Q137. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-138",
    "questionNumber": 138,
    "question": "Q138. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-139",
    "questionNumber": 139,
    "question": "Q139. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-140",
    "questionNumber": 140,
    "question": "Q140. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-141",
    "questionNumber": 141,
    "question": "Q141. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-142",
    "questionNumber": 142,
    "question": "Q142. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-143",
    "questionNumber": 143,
    "question": "Q143. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-144",
    "questionNumber": 144,
    "question": "Q144. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-145",
    "questionNumber": 145,
    "question": "Q145. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-146",
    "questionNumber": 146,
    "question": "Q146. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-147",
    "questionNumber": 147,
    "question": "Q147. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-148",
    "questionNumber": 148,
    "question": "Q148. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-149",
    "questionNumber": 149,
    "question": "Q149. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-150",
    "questionNumber": 150,
    "question": "Q150. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-151",
    "questionNumber": 151,
    "question": "Q151. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-152",
    "questionNumber": 152,
    "question": "Q152. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-153",
    "questionNumber": 153,
    "question": "Q153. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-154",
    "questionNumber": 154,
    "question": "Q154. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-155",
    "questionNumber": 155,
    "question": "Q155. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-156",
    "questionNumber": 156,
    "question": "Q156. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-157",
    "questionNumber": 157,
    "question": "Q157. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-158",
    "questionNumber": 158,
    "question": "Q158. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-159",
    "questionNumber": 159,
    "question": "Q159. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-160",
    "questionNumber": 160,
    "question": "Q160. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-161",
    "questionNumber": 161,
    "question": "Q161. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-162",
    "questionNumber": 162,
    "question": "Q162. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-163",
    "questionNumber": 163,
    "question": "Q163. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-164",
    "questionNumber": 164,
    "question": "Q164. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-165",
    "questionNumber": 165,
    "question": "Q165. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-166",
    "questionNumber": 166,
    "question": "Q166. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-167",
    "questionNumber": 167,
    "question": "Q167. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-168",
    "questionNumber": 168,
    "question": "Q168. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-169",
    "questionNumber": 169,
    "question": "Q169. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-170",
    "questionNumber": 170,
    "question": "Q170. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-171",
    "questionNumber": 171,
    "question": "Q171. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-172",
    "questionNumber": 172,
    "question": "Q172. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-173",
    "questionNumber": 173,
    "question": "Q173. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-174",
    "questionNumber": 174,
    "question": "Q174. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-175",
    "questionNumber": 175,
    "question": "Q175. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-176",
    "questionNumber": 176,
    "question": "Q176. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-177",
    "questionNumber": 177,
    "question": "Q177. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-178",
    "questionNumber": 178,
    "question": "Q178. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-179",
    "questionNumber": 179,
    "question": "Q179. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-180",
    "questionNumber": 180,
    "question": "Q180. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-181",
    "questionNumber": 181,
    "question": "Q181. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-182",
    "questionNumber": 182,
    "question": "Q182. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-183",
    "questionNumber": 183,
    "question": "Q183. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-184",
    "questionNumber": 184,
    "question": "Q184. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-185",
    "questionNumber": 185,
    "question": "Q185. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-186",
    "questionNumber": 186,
    "question": "Q186. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-187",
    "questionNumber": 187,
    "question": "Q187. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-188",
    "questionNumber": 188,
    "question": "Q188. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-189",
    "questionNumber": 189,
    "question": "Q189. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-190",
    "questionNumber": 190,
    "question": "Q190. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-191",
    "questionNumber": 191,
    "question": "Q191. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-192",
    "questionNumber": 192,
    "question": "Q192. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-193",
    "questionNumber": 193,
    "question": "Q193. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-194",
    "questionNumber": 194,
    "question": "Q194. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-195",
    "questionNumber": 195,
    "question": "Q195. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-196",
    "questionNumber": 196,
    "question": "Q196. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-197",
    "questionNumber": 197,
    "question": "Q197. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-198",
    "questionNumber": 198,
    "question": "Q198. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-199",
    "questionNumber": 199,
    "question": "Q199. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-200",
    "questionNumber": 200,
    "question": "Q200. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-201",
    "questionNumber": 201,
    "question": "Q201. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-202",
    "questionNumber": 202,
    "question": "Q202. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-203",
    "questionNumber": 203,
    "question": "Q203. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-204",
    "questionNumber": 204,
    "question": "Q204. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-205",
    "questionNumber": 205,
    "question": "Q205. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-206",
    "questionNumber": 206,
    "question": "Q206. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-207",
    "questionNumber": 207,
    "question": "Q207. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-208",
    "questionNumber": 208,
    "question": "Q208. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-209",
    "questionNumber": 209,
    "question": "Q209. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-210",
    "questionNumber": 210,
    "question": "Q210. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-211",
    "questionNumber": 211,
    "question": "Q211. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-212",
    "questionNumber": 212,
    "question": "Q212. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-213",
    "questionNumber": 213,
    "question": "Q213. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-214",
    "questionNumber": 214,
    "question": "Q214. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-215",
    "questionNumber": 215,
    "question": "Q215. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-216",
    "questionNumber": 216,
    "question": "Q216. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-217",
    "questionNumber": 217,
    "question": "Q217. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-218",
    "questionNumber": 218,
    "question": "Q218. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-219",
    "questionNumber": 219,
    "question": "Q219. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-220",
    "questionNumber": 220,
    "question": "Q220. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-221",
    "questionNumber": 221,
    "question": "Q221. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-222",
    "questionNumber": 222,
    "question": "Q222. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-223",
    "questionNumber": 223,
    "question": "Q223. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-224",
    "questionNumber": 224,
    "question": "Q224. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-225",
    "questionNumber": 225,
    "question": "Q225. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-226",
    "questionNumber": 226,
    "question": "Q226. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-227",
    "questionNumber": 227,
    "question": "Q227. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-228",
    "questionNumber": 228,
    "question": "Q228. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-229",
    "questionNumber": 229,
    "question": "Q229. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-230",
    "questionNumber": 230,
    "question": "Q230. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-231",
    "questionNumber": 231,
    "question": "Q231. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-232",
    "questionNumber": 232,
    "question": "Q232. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-233",
    "questionNumber": 233,
    "question": "Q233. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-234",
    "questionNumber": 234,
    "question": "Q234. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-235",
    "questionNumber": 235,
    "question": "Q235. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-236",
    "questionNumber": 236,
    "question": "Q236. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-237",
    "questionNumber": 237,
    "question": "Q237. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-238",
    "questionNumber": 238,
    "question": "Q238. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-239",
    "questionNumber": 239,
    "question": "Q239. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-240",
    "questionNumber": 240,
    "question": "Q240. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-241",
    "questionNumber": 241,
    "question": "Q241. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-242",
    "questionNumber": 242,
    "question": "Q242. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-243",
    "questionNumber": 243,
    "question": "Q243. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-244",
    "questionNumber": 244,
    "question": "Q244. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "id": "ec-mcq-245",
    "questionNumber": 245,
    "question": "Q245. (NEET Medium) During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "id": "ec-mcq-246",
    "questionNumber": 246,
    "question": "Q246. (NEET Medium) Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "id": "ec-mcq-247",
    "questionNumber": 247,
    "question": "Q247. (NEET Medium) For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "id": "ec-mcq-248",
    "questionNumber": 248,
    "question": "Q248. (NEET Medium) According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "id": "ec-mcq-249",
    "questionNumber": 249,
    "question": "Q249. (NEET Medium) How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "id": "ec-mcq-250",
    "questionNumber": 250,
    "question": "Q250. (NEET Medium) The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
  }
];
