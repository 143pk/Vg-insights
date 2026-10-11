# scripts/generate_medium.py
import json

medium_questions = [
    # Q41 (Verified PYQ NEET 2026)
    {
        "questionNumber": 41,
        "question": "A screw gauge has a pitch of 0.5 mm and 50 divisions on its circular scale. When measured without any object, the 0 of circular scale lies 3 divisions below the reference line (positive zero error). For a wire, the main scale reads 2 mm and the circular scale reads 28 divisions. The correct diameter of the wire is:",
        "options": {
            "A": "2.25 mm",
            "B": "2.28 mm",
            "C": "2.31 mm",
            "D": "2.22 mm"
        },
        "correctAnswer": "A",
        "topic": "Zero error",
        "difficulty": "Medium",
        "isPYQ": True,
        "source": "NEET 2026",
        "pyqYear": 2026,
        "concept": "Correction of positive zero error in a micrometer screw gauge.",
        "given": "Pitch = 0.5 mm, Circular divisions N = 50, Zero error = +3 divisions, MSR = 2 mm, CSR = 28 divisions.",
        "formula": "LC = Pitch / N; Observed reading = MSR + (CSR × LC); Correct reading = Observed reading - Zero Error",
        "stepByStep": "1. Least count LC = 0.5 mm / 50 = 0.01 mm.\n2. Zero Error: Since zero of circular scale is 3 divisions below the reference line, Zero Error = +3 × 0.01 mm = +0.03 mm.\n3. Observed reading = 2 mm + (28 × 0.01 mm) = 2.00 mm + 0.28 mm = 2.28 mm.\n4. Correct diameter = Observed reading - Zero Error = 2.28 mm - (+0.03 mm) = 2.25 mm.",
        "finalAnswer": "Option A: 2.25 mm",
        "whyOtherOptionsWrong": "Option B (2.28 mm) neglects the zero error. Option C (2.31 mm) mistakenly adds the positive zero error. Option D (2.22 mm) subtracts twice the zero error."
    },

    # Q42 (Verified PYQ NEET 2024)
    {
        "questionNumber": 42,
        "question": "A physical quantity X is given by X = ε₀ L (ΔV / Δt), where ε₀ is the permittivity of free space, L is length, ΔV is electric potential difference, and Δt is time interval. The dimensional formula of X is identical to that of:",
        "options": {
            "A": "Electric Current",
            "B": "Electric Resistance",
            "C": "Magnetic Field",
            "D": "Electric Potential"
        },
        "correctAnswer": "A",
        "topic": "Dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": True,
        "source": "NEET 2024",
        "pyqYear": 2024,
        "concept": "Dimensional identification of electromagnetic terms (displacement current relation).",
        "given": "X = ε₀ L (ΔV / Δt).",
        "formula": "Capacitance C ≈ ε₀ L; Electric Current I = C (dV / dt) = dq / dt.",
        "stepByStep": "1. Recall that capacitance of a spherical conductor of radius L is C = 4π ε₀ L, so [ε₀ L] = [C] (Capacitance).\n2. Electric current through a capacitor is I = C (ΔV / Δt).\n3. Substituting [C] into the expression: [X] = [C] [ΔV / Δt] = [C ΔV / Δt] = [Q / t] = [Current] = [A] = [M⁰ L⁰ T⁰ A¹].\n4. Hence, the dimensional formula of X is that of Electric Current.",
        "finalAnswer": "Option A: Electric Current",
        "whyOtherOptionsWrong": "Option B (Resistance) has dimensions [M L² T⁻³ A⁻²]. Option C (Magnetic field) is [M T⁻² A⁻¹]. Option D (Electric potential) is [M L² T⁻³ A⁻¹]."
    },

    # Q43 (Verified PYQ NEET 2023)
    {
        "questionNumber": 43,
        "question": "A metal wire has mass m = (0.4 ± 0.002) g, radius r = (0.3 ± 0.001) mm, and length l = (5 ± 0.02) cm. The maximum possible percentage error in the measurement of its density is approximately:",
        "options": {
            "A": "1.6%",
            "B": "1.2%",
            "C": "2.1%",
            "D": "0.8%"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Medium",
        "isPYQ": True,
        "source": "NEET 2023",
        "pyqYear": 2023,
        "concept": "Propagation of errors in density of a cylindrical wire.",
        "given": "m = 0.4 g, Δm = 0.002 g; r = 0.3 mm, Δr = 0.001 mm; l = 5 cm, Δl = 0.02 cm.",
        "formula": "Density ρ = m / (π r² l); (Δρ/ρ) = (Δm/m) + 2(Δr/r) + (Δl/l)",
        "stepByStep": "1. Calculate fractional error in mass: Δm/m = 0.002 / 0.4 = 2 / 400 = 0.005 (0.5%).\n2. Calculate fractional error in radius: Δr/r = 0.001 / 0.3 = 1 / 300 ≈ 0.00333 (0.333%).\n3. Since radius is squared, its contribution is 2(Δr/r) = 2 × (1 / 300) = 2 / 300 ≈ 0.00667 (0.667%).\n4. Calculate fractional error in length: Δl/l = 0.02 / 5 = 2 / 500 = 0.004 (0.4%).\n5. Total fractional error: Δρ/ρ = 0.005 + 0.00667 + 0.004 = 0.01567.\n6. Percentage error = 0.01567 × 100% ≈ 1.57% ≈ 1.6%.",
        "finalAnswer": "Option A: 1.6%",
        "whyOtherOptionsWrong": "Option B (1.2%) forgets the factor of 2 for the radius exponent. Option C and D result from decimal conversion mistakes."
    },

    # Q44 (Verified PYQ NEET 2022)
    {
        "questionNumber": 44,
        "question": "The dimensions [M L T⁻² A⁻²] belong to the physical quantity:",
        "options": {
            "A": "Magnetic permeability of vacuum (μ₀)",
            "B": "Electric permittivity of vacuum (ε₀)",
            "C": "Magnetic flux (Φ)",
            "D": "Self-inductance (L)"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": True,
        "source": "NEET 2022",
        "pyqYear": 2022,
        "concept": "Dimensional formula of magnetic permeability (μ₀).",
        "given": "Dimensional formula [M L T⁻² A⁻²].",
        "formula": "Biot-Savart Law / Force between parallel wires: F/l = (μ₀ I₁ I₂) / (2π r) => μ₀ = 2π r F / (l I₁ I₂)",
        "stepByStep": "1. Force per unit length between parallel wires: [F/l] = [M L T⁻²] / [L] = [M T⁻²].\n2. [μ₀] = [F/l] · [r] / [I²] = [M T⁻²][L] / [A²] = [M L T⁻² A⁻²].\n3. Electric permittivity [ε₀] is [M⁻¹ L⁻³ T⁴ A²].\n4. Self-inductance [L] is [M L² T⁻² A⁻²].\n5. Magnetic flux [Φ] is [M L² T⁻² A⁻¹].\n6. Thus, [M L T⁻² A⁻²] uniquely belongs to μ₀.",
        "finalAnswer": "Option A: Magnetic permeability of vacuum (μ₀)",
        "whyOtherOptionsWrong": "Self-inductance has L² instead of L; magnetic flux has A⁻¹; permittivity has negative mass power M⁻¹."
    },

    # Q45 (Verified PYQ NEET 2017)
    {
        "questionNumber": 45,
        "question": "A physical quantity of the dimensions of length that can be formed out of c, G and e² / (4πε₀) is [where c is velocity of light, G is universal gravitational constant and e is elementary charge]:",
        "options": {
            "A": "(1 / c²) [G e² / (4πε₀)]^(1/2)",
            "B": "c² [G e² / (4πε₀)]^(1/2)",
            "C": "(1 / c²) [G / (4πε₀ e²)]^(1/2)",
            "D": "(1 / c) [G e² / (4πε₀)]"
        },
        "correctAnswer": "A",
        "topic": "Dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": True,
        "source": "NEET 2017",
        "pyqYear": 2017,
        "concept": "Constructing a physical quantity of dimensions of length using dimensional analysis.",
        "given": "c = [L T⁻¹], G = [M⁻¹ L³ T⁻²], e²/(4πε₀) = [Force × r²] = [M L³ T⁻²].",
        "formula": "L = c^x · G^y · [e² / (4πε₀)]^z",
        "stepByStep": "1. Dimensions: [c] = [L T⁻¹], [G] = [M⁻¹ L³ T⁻²], [e²/(4πε₀)] = [F · r²] = [M L T⁻²][L²] = [M L³ T⁻²].\n2. Note that [G · e²/(4πε₀)] = [M⁻¹ L³ T⁻²] [M L³ T⁻²] = [L⁶ T⁻⁴].\n3. Taking square root: [G · e²/(4πε₀)]^(1/2) = [L³ T⁻²].\n4. Now, [c²] = [L² T⁻²].\n5. Dividing by c²: [L³ T⁻²] / [L² T⁻²] = [L].\n6. Therefore, the quantity of dimension of length is (1 / c²) [G e² / (4πε₀)]^(1/2).",
        "finalAnswer": "Option A: (1 / c²) [G e² / (4πε₀)]^(1/2)",
        "whyOtherOptionsWrong": "Option B gives dimensions [L⁵ T⁻⁴]. Option C inverts the charge term giving non-length dimensions. Option D has incorrect powers of c."
    },

    # Q46 (Verified PYQ NEET 2016)
    {
        "questionNumber": 46,
        "question": "Planck's constant (h), speed of light in vacuum (c) and Newton's gravitational constant (G) are three fundamental constants. Which of the following combinations of these has the dimension of length?",
        "options": {
            "A": "√(G h / c³)",
            "B": "√(G c / h³)",
            "C": "√(h c / G)",
            "D": "√(G h / c⁵)"
        },
        "correctAnswer": "A",
        "topic": "Dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": True,
        "source": "NEET 2016",
        "pyqYear": 2016,
        "concept": "Planck length derivation using dimensional analysis.",
        "given": "h = [M L² T⁻¹], c = [L T⁻¹], G = [M⁻¹ L³ T⁻²].",
        "formula": "Planck length l_p = √(G h / c³)",
        "stepByStep": "1. Multiply G and h: [G h] = [M⁻¹ L³ T⁻²] [M L² T⁻¹] = [L⁵ T⁻³].\n2. Divide by c³: [c³] = [L³ T⁻³].\n3. [G h / c³] = [L⁵ T⁻³] / [L³ T⁻³] = [L²].\n4. Taking the square root gives [√(G h / c³)] = [L] (Planck length).\n5. Hence, √(G h / c³) has the dimension of length.",
        "finalAnswer": "Option A: √(G h / c³)",
        "whyOtherOptionsWrong": "Option C (√(h c / G)) gives the Planck mass [M]. Option D (√(G h / c⁵)) gives the Planck time [T]. Option B does not yield length."
    },

    # Q47 (Practice Medium)
    {
        "questionNumber": 47,
        "question": "The dimensional formula of the coefficient of viscosity (η) is:",
        "options": {
            "A": "[M L⁻¹ T⁻¹]",
            "B": "[M L⁻¹ T⁻²]",
            "C": "[M L T⁻¹]",
            "D": "[M L² T⁻¹]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Stokes' law / Newton's law of viscous force.",
        "given": "F = 6πηrv or F = -η A (dv/dx).",
        "formula": "η = F / (6π r v) => [η] = [F] / ([r][v])",
        "stepByStep": "1. Dimensions of force: [F] = [M L T⁻²].\n2. Dimensions of radius: [r] = [L].\n3. Dimensions of velocity: [v] = [L T⁻¹].\n4. [η] = [M L T⁻²] / ([L][L T⁻¹]) = [M L T⁻²] / [L² T⁻¹] = [M L⁻¹ T⁻¹].\n5. SI unit of η is Pa·s (or N·s/m² or kg·m⁻¹·s⁻¹).",
        "finalAnswer": "Option A: [M L⁻¹ T⁻¹]",
        "whyOtherOptionsWrong": "Option B is pressure / stress [M L⁻¹ T⁻²]. Option C is momentum [M L T⁻¹]. Option D is angular momentum [M L² T⁻¹]."
    },

    # Q48 (Practice Medium)
    {
        "questionNumber": 48,
        "question": "In the van der Waals equation of state: (P + a / V²)(V - b) = R T, the dimensional formula of the constant 'a' is:",
        "options": {
            "A": "[M L⁵ T⁻²]",
            "B": "[M L³ T⁻²]",
            "C": "[M L⁻¹ T⁻²]",
            "D": "[M L⁴ T⁻²]"
        },
        "correctAnswer": "A",
        "topic": "Dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Principle of homogeneity of dimensions in equations.",
        "given": "Van der Waals equation: (P + a/V²)(V - b) = RT.",
        "formula": "By principle of homogeneity, [a / V²] must equal [P].",
        "stepByStep": "1. Since a/V² is added to pressure P, [a / V²] = [P].\n2. Therefore, [a] = [P] · [V²].\n3. [P] = [Force/Area] = [M L⁻¹ T⁻²].\n4. [V] = [L³] => [V²] = [L⁶].\n5. [a] = [M L⁻¹ T⁻²] · [L⁶] = [M L⁵ T⁻²].",
        "finalAnswer": "Option A: [M L⁵ T⁻²]",
        "whyOtherOptionsWrong": "Option B has L³ (which would be P · V). Option C is pressure. Option D has L⁴."
    },

    # Q49 (Practice Medium)
    {
        "questionNumber": 49,
        "question": "The displacement of a particle executing motion is given by x = a t + b t² - c t³, where x is in meters and t is in seconds. The dimensional formula of b² / (a · c) is:",
        "options": {
            "A": "[M⁰ L⁰ T⁰]",
            "B": "[M⁰ L T⁻¹]",
            "C": "[M⁰ L⁰ T⁻¹]",
            "D": "[M⁰ L² T⁻²]"
        },
        "correctAnswer": "A",
        "topic": "Dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Principle of homogeneity and combination of dimensional constants.",
        "given": "x = a t + b t² - c t³.",
        "formula": "[a t] = [x] => [a] = [L T⁻¹]; [b t²] = [x] => [b] = [L T⁻²]; [c t³] = [x] => [c] = [L T⁻³]",
        "stepByStep": "1. Find dimension of a: [a] = [x]/[t] = [L T⁻¹].\n2. Find dimension of b: [b] = [x]/[t²] = [L T⁻²].\n3. Find dimension of c: [c] = [x]/[t³] = [L T⁻³].\n4. Compute [b²]: [b²] = ([L T⁻²])² = [L² T⁻⁴].\n5. Compute [a · c]: [a][c] = [L T⁻¹][L T⁻³] = [L² T⁻⁴].\n6. Ratio: [b² / (a c)] = [L² T⁻⁴] / [L² T⁻⁴] = [M⁰ L⁰ T⁰] (dimensionless).",
        "finalAnswer": "Option A: [M⁰ L⁰ T⁰]",
        "whyOtherOptionsWrong": "Options B, C, and D contain non-zero powers of length and time, which contradict the exact cancellation of dimensions."
    },

    # Q50 (Practice Medium)
    {
        "questionNumber": 50,
        "question": "The resistance R of a wire is given by R = V / I, where V = (100 ± 5) V and I = (10 ± 0.2) A. The percentage error in the measurement of resistance is:",
        "options": {
            "A": "7%",
            "B": "3%",
            "C": "5.2%",
            "D": "2.5%"
        },
        "correctAnswer": "A",
        "topic": "Percentage error",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Percentage error in quotient.",
        "given": "V = (100 ± 5) V, I = (10 ± 0.2) A.",
        "formula": "R = V / I => (ΔR/R) × 100% = (ΔV/V × 100%) + (ΔI/I × 100%)",
        "stepByStep": "1. Percentage error in V: (5 / 100) × 100% = 5%.\n2. Percentage error in I: (0.2 / 10) × 100% = 2%.\n3. Maximum percentage error in R = 5% + 2% = 7%.",
        "finalAnswer": "Option A: 7%",
        "whyOtherOptionsWrong": "Option B (3%) subtracts percentage errors (5% - 2%), which violates the rule for maximum possible error. Option C and D result from dividing percentages."
    }
]

print(f"Defined {len(medium_questions)} medium questions so far...")
