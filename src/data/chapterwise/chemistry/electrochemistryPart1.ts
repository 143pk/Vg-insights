// Part 1: Q1 to Q125 (Easy: 125 MCQs)
// Chapter: Redox Reactions & Electrochemistry (ID: electrochemistry) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const ELECTROCHEMISTRY_PART1_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "ec-mcq-001",
    "questionNumber": 1,
    "question": "Q1. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-002",
    "questionNumber": 2,
    "question": "Q2. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-003",
    "questionNumber": 3,
    "question": "Q3. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-004",
    "questionNumber": 4,
    "question": "Q4. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-005",
    "questionNumber": 5,
    "question": "Q5. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-006",
    "questionNumber": 6,
    "question": "Q6. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-007",
    "questionNumber": 7,
    "question": "Q7. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-008",
    "questionNumber": 8,
    "question": "Q8. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-009",
    "questionNumber": 9,
    "question": "Q9. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-010",
    "questionNumber": 10,
    "question": "Q10. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-011",
    "questionNumber": 11,
    "question": "Q11. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-012",
    "questionNumber": 12,
    "question": "Q12. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-013",
    "questionNumber": 13,
    "question": "Q13. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-014",
    "questionNumber": 14,
    "question": "Q14. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-015",
    "questionNumber": 15,
    "question": "Q15. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-016",
    "questionNumber": 16,
    "question": "Q16. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-017",
    "questionNumber": 17,
    "question": "Q17. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-018",
    "questionNumber": 18,
    "question": "Q18. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-019",
    "questionNumber": 19,
    "question": "Q19. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-020",
    "questionNumber": 20,
    "question": "Q20. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-021",
    "questionNumber": 21,
    "question": "Q21. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-022",
    "questionNumber": 22,
    "question": "Q22. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-023",
    "questionNumber": 23,
    "question": "Q23. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-024",
    "questionNumber": 24,
    "question": "Q24. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-025",
    "questionNumber": 25,
    "question": "Q25. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-026",
    "questionNumber": 26,
    "question": "Q26. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-027",
    "questionNumber": 27,
    "question": "Q27. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-028",
    "questionNumber": 28,
    "question": "Q28. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-029",
    "questionNumber": 29,
    "question": "Q29. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-030",
    "questionNumber": 30,
    "question": "Q30. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-031",
    "questionNumber": 31,
    "question": "Q31. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-032",
    "questionNumber": 32,
    "question": "Q32. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-033",
    "questionNumber": 33,
    "question": "Q33. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-034",
    "questionNumber": 34,
    "question": "Q34. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-035",
    "questionNumber": 35,
    "question": "Q35. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-036",
    "questionNumber": 36,
    "question": "Q36. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-037",
    "questionNumber": 37,
    "question": "Q37. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-038",
    "questionNumber": 38,
    "question": "Q38. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-039",
    "questionNumber": 39,
    "question": "Q39. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-040",
    "questionNumber": 40,
    "question": "Q40. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-041",
    "questionNumber": 41,
    "question": "Q41. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-042",
    "questionNumber": 42,
    "question": "Q42. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-043",
    "questionNumber": 43,
    "question": "Q43. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-044",
    "questionNumber": 44,
    "question": "Q44. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-045",
    "questionNumber": 45,
    "question": "Q45. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-046",
    "questionNumber": 46,
    "question": "Q46. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-047",
    "questionNumber": 47,
    "question": "Q47. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-048",
    "questionNumber": 48,
    "question": "Q48. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-049",
    "questionNumber": 49,
    "question": "Q49. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-050",
    "questionNumber": 50,
    "question": "Q50. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-051",
    "questionNumber": 51,
    "question": "Q51. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-052",
    "questionNumber": 52,
    "question": "Q52. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-053",
    "questionNumber": 53,
    "question": "Q53. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-054",
    "questionNumber": 54,
    "question": "Q54. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-055",
    "questionNumber": 55,
    "question": "Q55. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-056",
    "questionNumber": 56,
    "question": "Q56. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-057",
    "questionNumber": 57,
    "question": "Q57. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-058",
    "questionNumber": 58,
    "question": "Q58. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-059",
    "questionNumber": 59,
    "question": "Q59. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-060",
    "questionNumber": 60,
    "question": "Q60. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-061",
    "questionNumber": 61,
    "question": "Q61. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-062",
    "questionNumber": 62,
    "question": "Q62. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-063",
    "questionNumber": 63,
    "question": "Q63. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-064",
    "questionNumber": 64,
    "question": "Q64. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-065",
    "questionNumber": 65,
    "question": "Q65. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-066",
    "questionNumber": 66,
    "question": "Q66. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-067",
    "questionNumber": 67,
    "question": "Q67. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-068",
    "questionNumber": 68,
    "question": "Q68. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-069",
    "questionNumber": 69,
    "question": "Q69. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-070",
    "questionNumber": 70,
    "question": "Q70. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-071",
    "questionNumber": 71,
    "question": "Q71. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-072",
    "questionNumber": 72,
    "question": "Q72. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-073",
    "questionNumber": 73,
    "question": "Q73. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-074",
    "questionNumber": 74,
    "question": "Q74. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-075",
    "questionNumber": 75,
    "question": "Q75. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-076",
    "questionNumber": 76,
    "question": "Q76. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-077",
    "questionNumber": 77,
    "question": "Q77. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-078",
    "questionNumber": 78,
    "question": "Q78. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-079",
    "questionNumber": 79,
    "question": "Q79. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-080",
    "questionNumber": 80,
    "question": "Q80. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-081",
    "questionNumber": 81,
    "question": "Q81. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-082",
    "questionNumber": 82,
    "question": "Q82. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-083",
    "questionNumber": 83,
    "question": "Q83. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-084",
    "questionNumber": 84,
    "question": "Q84. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-085",
    "questionNumber": 85,
    "question": "Q85. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-086",
    "questionNumber": 86,
    "question": "Q86. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-087",
    "questionNumber": 87,
    "question": "Q87. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-088",
    "questionNumber": 88,
    "question": "Q88. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-089",
    "questionNumber": 89,
    "question": "Q89. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-090",
    "questionNumber": 90,
    "question": "Q90. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-091",
    "questionNumber": 91,
    "question": "Q91. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-092",
    "questionNumber": 92,
    "question": "Q92. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-093",
    "questionNumber": 93,
    "question": "Q93. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-094",
    "questionNumber": 94,
    "question": "Q94. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-095",
    "questionNumber": 95,
    "question": "Q95. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-096",
    "questionNumber": 96,
    "question": "Q96. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-097",
    "questionNumber": 97,
    "question": "Q97. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-098",
    "questionNumber": 98,
    "question": "Q98. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-099",
    "questionNumber": 99,
    "question": "Q99. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-100",
    "questionNumber": 100,
    "question": "Q100. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-101",
    "questionNumber": 101,
    "question": "Q101. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-102",
    "questionNumber": 102,
    "question": "Q102. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-103",
    "questionNumber": 103,
    "question": "Q103. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-104",
    "questionNumber": 104,
    "question": "Q104. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-105",
    "questionNumber": 105,
    "question": "Q105. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-106",
    "questionNumber": 106,
    "question": "Q106. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-107",
    "questionNumber": 107,
    "question": "Q107. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-108",
    "questionNumber": 108,
    "question": "Q108. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-109",
    "questionNumber": 109,
    "question": "Q109. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-110",
    "questionNumber": 110,
    "question": "Q110. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-111",
    "questionNumber": 111,
    "question": "Q111. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-112",
    "questionNumber": 112,
    "question": "Q112. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-113",
    "questionNumber": 113,
    "question": "Q113. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-114",
    "questionNumber": 114,
    "question": "Q114. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-115",
    "questionNumber": 115,
    "question": "Q115. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-116",
    "questionNumber": 116,
    "question": "Q116. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-117",
    "questionNumber": 117,
    "question": "Q117. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-118",
    "questionNumber": 118,
    "question": "Q118. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-119",
    "questionNumber": 119,
    "question": "Q119. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-120",
    "questionNumber": 120,
    "question": "Q120. Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-121",
    "questionNumber": 121,
    "question": "Q121. For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-122",
    "questionNumber": 122,
    "question": "Q122. According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-123",
    "questionNumber": 123,
    "question": "Q123. How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-124",
    "questionNumber": 124,
    "question": "Q124. The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Easy",
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
    "id": "ec-mcq-125",
    "questionNumber": 125,
    "question": "Q125. During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Easy",
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
