// Part 4: Q376 to Q500 (Hard: 125 MCQs)
// Chapter: Redox Reactions & Electrochemistry (ID: electrochemistry) | Class 12 Chemistry
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const ELECTROCHEMISTRY_PART4_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "ec-mcq-376",
    "questionNumber": 376,
    "question": "Q376. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-377",
    "questionNumber": 377,
    "question": "Q377. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-378",
    "questionNumber": 378,
    "question": "Q378. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-379",
    "questionNumber": 379,
    "question": "Q379. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-380",
    "questionNumber": 380,
    "question": "Q380. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-381",
    "questionNumber": 381,
    "question": "Q381. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-382",
    "questionNumber": 382,
    "question": "Q382. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-383",
    "questionNumber": 383,
    "question": "Q383. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-384",
    "questionNumber": 384,
    "question": "Q384. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-385",
    "questionNumber": 385,
    "question": "Q385. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-386",
    "questionNumber": 386,
    "question": "Q386. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-387",
    "questionNumber": 387,
    "question": "Q387. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-388",
    "questionNumber": 388,
    "question": "Q388. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-389",
    "questionNumber": 389,
    "question": "Q389. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-390",
    "questionNumber": 390,
    "question": "Q390. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-391",
    "questionNumber": 391,
    "question": "Q391. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-392",
    "questionNumber": 392,
    "question": "Q392. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-393",
    "questionNumber": 393,
    "question": "Q393. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-394",
    "questionNumber": 394,
    "question": "Q394. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-395",
    "questionNumber": 395,
    "question": "Q395. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-396",
    "questionNumber": 396,
    "question": "Q396. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-397",
    "questionNumber": 397,
    "question": "Q397. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-398",
    "questionNumber": 398,
    "question": "Q398. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-399",
    "questionNumber": 399,
    "question": "Q399. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-400",
    "questionNumber": 400,
    "question": "Q400. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-401",
    "questionNumber": 401,
    "question": "Q401. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-402",
    "questionNumber": 402,
    "question": "Q402. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-403",
    "questionNumber": 403,
    "question": "Q403. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-404",
    "questionNumber": 404,
    "question": "Q404. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-405",
    "questionNumber": 405,
    "question": "Q405. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-406",
    "questionNumber": 406,
    "question": "Q406. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-407",
    "questionNumber": 407,
    "question": "Q407. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-408",
    "questionNumber": 408,
    "question": "Q408. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-409",
    "questionNumber": 409,
    "question": "Q409. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-410",
    "questionNumber": 410,
    "question": "Q410. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-411",
    "questionNumber": 411,
    "question": "Q411. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-412",
    "questionNumber": 412,
    "question": "Q412. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-413",
    "questionNumber": 413,
    "question": "Q413. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-414",
    "questionNumber": 414,
    "question": "Q414. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-415",
    "questionNumber": 415,
    "question": "Q415. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-416",
    "questionNumber": 416,
    "question": "Q416. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-417",
    "questionNumber": 417,
    "question": "Q417. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-418",
    "questionNumber": 418,
    "question": "Q418. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-419",
    "questionNumber": 419,
    "question": "Q419. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-420",
    "questionNumber": 420,
    "question": "Q420. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-421",
    "questionNumber": 421,
    "question": "Q421. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-422",
    "questionNumber": 422,
    "question": "Q422. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-423",
    "questionNumber": 423,
    "question": "Q423. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-424",
    "questionNumber": 424,
    "question": "Q424. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-425",
    "questionNumber": 425,
    "question": "Q425. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-426",
    "questionNumber": 426,
    "question": "Q426. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-427",
    "questionNumber": 427,
    "question": "Q427. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-428",
    "questionNumber": 428,
    "question": "Q428. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-429",
    "questionNumber": 429,
    "question": "Q429. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-430",
    "questionNumber": 430,
    "question": "Q430. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-431",
    "questionNumber": 431,
    "question": "Q431. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-432",
    "questionNumber": 432,
    "question": "Q432. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-433",
    "questionNumber": 433,
    "question": "Q433. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-434",
    "questionNumber": 434,
    "question": "Q434. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-435",
    "questionNumber": 435,
    "question": "Q435. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-436",
    "questionNumber": 436,
    "question": "Q436. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-437",
    "questionNumber": 437,
    "question": "Q437. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-438",
    "questionNumber": 438,
    "question": "Q438. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-439",
    "questionNumber": 439,
    "question": "Q439. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-440",
    "questionNumber": 440,
    "question": "Q440. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-441",
    "questionNumber": 441,
    "question": "Q441. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-442",
    "questionNumber": 442,
    "question": "Q442. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-443",
    "questionNumber": 443,
    "question": "Q443. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-444",
    "questionNumber": 444,
    "question": "Q444. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-445",
    "questionNumber": 445,
    "question": "Q445. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-446",
    "questionNumber": 446,
    "question": "Q446. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-447",
    "questionNumber": 447,
    "question": "Q447. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-448",
    "questionNumber": 448,
    "question": "Q448. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-449",
    "questionNumber": 449,
    "question": "Q449. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-450",
    "questionNumber": 450,
    "question": "Q450. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-451",
    "questionNumber": 451,
    "question": "Q451. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-452",
    "questionNumber": 452,
    "question": "Q452. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-453",
    "questionNumber": 453,
    "question": "Q453. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-454",
    "questionNumber": 454,
    "question": "Q454. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-455",
    "questionNumber": 455,
    "question": "Q455. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-456",
    "questionNumber": 456,
    "question": "Q456. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-457",
    "questionNumber": 457,
    "question": "Q457. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-458",
    "questionNumber": 458,
    "question": "Q458. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-459",
    "questionNumber": 459,
    "question": "Q459. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-460",
    "questionNumber": 460,
    "question": "Q460. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-461",
    "questionNumber": 461,
    "question": "Q461. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-462",
    "questionNumber": 462,
    "question": "Q462. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-463",
    "questionNumber": 463,
    "question": "Q463. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-464",
    "questionNumber": 464,
    "question": "Q464. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-465",
    "questionNumber": 465,
    "question": "Q465. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-466",
    "questionNumber": 466,
    "question": "Q466. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-467",
    "questionNumber": 467,
    "question": "Q467. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-468",
    "questionNumber": 468,
    "question": "Q468. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-469",
    "questionNumber": 469,
    "question": "Q469. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-470",
    "questionNumber": 470,
    "question": "Q470. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-471",
    "questionNumber": 471,
    "question": "Q471. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-472",
    "questionNumber": 472,
    "question": "Q472. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-473",
    "questionNumber": 473,
    "question": "Q473. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-474",
    "questionNumber": 474,
    "question": "Q474. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-475",
    "questionNumber": 475,
    "question": "Q475. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-476",
    "questionNumber": 476,
    "question": "Q476. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-477",
    "questionNumber": 477,
    "question": "Q477. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-478",
    "questionNumber": 478,
    "question": "Q478. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-479",
    "questionNumber": 479,
    "question": "Q479. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-480",
    "questionNumber": 480,
    "question": "Q480. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-481",
    "questionNumber": 481,
    "question": "Q481. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-482",
    "questionNumber": 482,
    "question": "Q482. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-483",
    "questionNumber": 483,
    "question": "Q483. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-484",
    "questionNumber": 484,
    "question": "Q484. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-485",
    "questionNumber": 485,
    "question": "Q485. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-486",
    "questionNumber": 486,
    "question": "Q486. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-487",
    "questionNumber": 487,
    "question": "Q487. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-488",
    "questionNumber": 488,
    "question": "Q488. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-489",
    "questionNumber": 489,
    "question": "Q489. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-490",
    "questionNumber": 490,
    "question": "Q490. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-491",
    "questionNumber": 491,
    "question": "Q491. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-492",
    "questionNumber": 492,
    "question": "Q492. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-493",
    "questionNumber": 493,
    "question": "Q493. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-494",
    "questionNumber": 494,
    "question": "Q494. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-495",
    "questionNumber": 495,
    "question": "Q495. [Advanced NEET Challenge] How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-496",
    "questionNumber": 496,
    "question": "Q496. [Advanced NEET Challenge] The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-497",
    "questionNumber": 497,
    "question": "Q497. [Advanced NEET Challenge] During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-498",
    "questionNumber": 498,
    "question": "Q498. [Advanced NEET Challenge] Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-499",
    "questionNumber": 499,
    "question": "Q499. [Advanced NEET Challenge] For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
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
    "difficulty": "Hard",
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
    "id": "ec-mcq-500",
    "questionNumber": 500,
    "question": "Q500. [Advanced NEET Challenge] According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
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
    "difficulty": "Hard",
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
  }
];
