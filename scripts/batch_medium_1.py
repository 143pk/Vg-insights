# scripts/batch_medium_1.py
# 35 Medium Questions (Q41 to Q75) for Units and Measurements

MEDIUM_QUESTIONS_PART1 = [
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
    },

    # Q51 (Practice Medium)
    {
        "questionNumber": 51,
        "question": "The dimensional formula of thermal conductivity (K) is:",
        "options": {
            "A": "[M L T⁻³ K⁻¹]",
            "B": "[M L² T⁻³ K⁻¹]",
            "C": "[M L T⁻² K⁻¹]",
            "D": "[M L² T⁻² K⁻¹]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Fourier's law of heat conduction.",
        "given": "Heat flow rate Q / t = K A (ΔT / Δx).",
        "formula": "K = (Q · Δx) / (A · t · ΔT)",
        "stepByStep": "1. [Q] = [Energy] = [M L² T⁻²].\n2. [Δx] = [L], [A] = [L²], [t] = [T], [ΔT] = [K].\n3. [K] = ([M L² T⁻²] · [L]) / ([L²] · [T] · [K]) = [M L³ T⁻²] / [L² T K] = [M L T⁻³ K⁻¹].",
        "finalAnswer": "Option A: [M L T⁻³ K⁻¹]",
        "whyOtherOptionsWrong": "Option B is power per kelvin [M L² T⁻³ K⁻¹]. Option C has T⁻² instead of T⁻³. Option D is heat capacity [M L² T⁻² K⁻¹]."
    },

    # Q52 (Practice Medium)
    {
        "questionNumber": 52,
        "question": "The dimensional formula of Stefan-Boltzmann constant (σ) in the radiation formula E = σ T⁴ (where E is energy radiated per unit area per second) is:",
        "options": {
            "A": "[M L⁰ T⁻³ K⁻⁴]",
            "B": "[M L² T⁻³ K⁻⁴]",
            "C": "[M L T⁻³ K⁻⁴]",
            "D": "[M L⁰ T⁻² K⁻⁴]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Stefan-Boltzmann law of blackbody radiation.",
        "given": "E = σ T⁴, where E is emissive power (Energy / (Area · Time)).",
        "formula": "σ = E / T⁴ = (Energy / (Area · Time)) / T⁴",
        "stepByStep": "1. Emissive power [E] = [M L² T⁻²] / ([L²][T]) = [M T⁻³] = [M L⁰ T⁻³].\n2. Temperature [T] = [K] => [T⁴] = [K⁴].\n3. [σ] = [M L⁰ T⁻³] / [K⁴] = [M L⁰ T⁻³ K⁻⁴].\n4. SI unit is W·m⁻²·K⁻⁴.",
        "finalAnswer": "Option A: [M L⁰ T⁻³ K⁻⁴]",
        "whyOtherOptionsWrong": "Option B introduces L². Option C introduces L. Option D has T⁻² instead of T⁻³."
    },

    # Q53 (Practice Medium)
    {
        "questionNumber": 53,
        "question": "A physical quantity Y is given by Y = 4 a b² / c³. If the percentage errors in the measurement of a, b, and c are 2%, 1.5%, and 1% respectively, the percentage error in Y is:",
        "options": {
            "A": "8%",
            "B": "6%",
            "C": "4%",
            "D": "5%"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Propagation of percentage errors in multi-variable powers.",
        "given": "Y = 4 a b² / c³, % errors: a=2%, b=1.5%, c=1%.",
        "formula": "(ΔY/Y) × 100% = 1(Δa/a) + 2(Δb/b) + 3(Δc/c)",
        "stepByStep": "1. Numerical constant 4 has zero error.\n2. Exponent of a is 1: 1 × 2% = 2%.\n3. Exponent of b is 2: 2 × 1.5% = 3%.\n4. Exponent of c is 3: 3 × 1% = 3%.\n5. Maximum percentage error in Y = 2% + 3% + 3% = 8%.",
        "finalAnswer": "Option A: 8%",
        "whyOtherOptionsWrong": "Option B (6%) subtracts the denominator term (2% + 3% - 3% or similar calculation). Option C forgets power of c. Option D misses power of b."
    },

    # Q54 (Practice Medium)
    {
        "questionNumber": 54,
        "question": "The period of oscillation of a simple pendulum is T = 2π √(L / g). Measured value of L is 20.0 cm known to 1 mm accuracy and time for 100 oscillations of the pendulum is found to be 90 s using a wrist watch of 1 s resolution. The percentage error in determining g is approximately:",
        "options": {
            "A": "2.7%",
            "B": "1.5%",
            "C": "3.2%",
            "D": "0.5%"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Determination of g by simple pendulum (NCERT exemplar problem).",
        "given": "L = 20.0 cm, ΔL = 1 mm = 0.1 cm; t = 90 s, Δt = 1 s, n = 100 oscillations.",
        "formula": "g = 4π² L / T² = 4π² L n² / t² => Δg/g = (ΔL/L) + 2(Δt/t)",
        "stepByStep": "1. ΔL/L = 0.1 cm / 20.0 cm = 1 / 200 = 0.005 (0.5%).\n2. Time t = 90 s with resolution Δt = 1 s: Δt/t = 1 / 90 ≈ 0.0111 (1.11%).\n3. Since T is squared, 2(Δt/t) = 2 × (1 / 90) = 2 / 90 ≈ 0.0222 (2.22%).\n4. Δg/g = 0.005 + 0.0222 = 0.0272.\n5. Percentage error = 0.0272 × 100% ≈ 2.7%.",
        "finalAnswer": "Option A: 2.7%",
        "whyOtherOptionsWrong": "Option B (1.5%) neglects the factor of 2 in time. Option C (3.2%) adds errors incorrectly. Option D is only the error in length."
    },

    # Q55 (Practice Medium)
    {
        "questionNumber": 55,
        "question": "A Vernier calipers has 1 mm marks on the main scale. It has 20 equal divisions on the Vernier scale which match with 16 main scale divisions. For this Vernier calipers, the least count is:",
        "options": {
            "A": "0.2 mm",
            "B": "0.05 mm",
            "C": "0.1 mm",
            "D": "0.02 mm"
        },
        "correctAnswer": "A",
        "topic": "Vernier calipers",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "General least count formula for non-standard Vernier calipers: LC = (1 - m/n) MSD.",
        "given": "1 MSD = 1 mm, n = 20 VSD coincide with m = 16 MSD.",
        "formula": "LC = 1 MSD - 1 VSD = (1 - m/n) MSD",
        "stepByStep": "1. 20 VSD = 16 MSD => 1 VSD = 16/20 MSD = 0.8 mm.\n2. LC = 1 MSD - 1 VSD = 1.0 mm - 0.8 mm = 0.2 mm.\n3. Alternatively: LC = (1 - 16/20) × 1 mm = (4/20) mm = 0.2 mm.",
        "finalAnswer": "Option A: 0.2 mm",
        "whyOtherOptionsWrong": "Option B (0.05 mm) assumes 19 MSD = 20 VSD. Option C (0.1 mm) assumes 9 MSD = 10 VSD. Option D is for 50 VSD."
    },

    # Q56 (Practice Medium)
    {
        "questionNumber": 56,
        "question": "In an experiment, two capacities are measured as C₁ = (2.0 ± 0.1) μF and C₂ = (4.0 ± 0.2) μF. When connected in parallel, the total capacitance with its absolute error is:",
        "options": {
            "A": "(6.0 ± 0.3) μF",
            "B": "(6.0 ± 0.1) μF",
            "C": "(6.0 ± 0.2) μF",
            "D": "(6.0 ± 0.05) μF"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Error propagation in parallel combination of capacitances.",
        "given": "C₁ = (2.0 ± 0.1) μF, C₂ = (4.0 ± 0.2) μF.",
        "formula": "C_eq = C₁ + C₂; ΔC_eq = ΔC₁ + ΔC₂",
        "stepByStep": "1. For capacitors in parallel, equivalent capacitance is C_eq = C₁ + C₂ = 2.0 + 4.0 = 6.0 μF.\n2. Absolute errors add directly in sums: ΔC_eq = ΔC₁ + ΔC₂ = 0.1 + 0.2 = 0.3 μF.\n3. Therefore, C_parallel = (6.0 ± 0.3) μF.",
        "finalAnswer": "Option A: (6.0 ± 0.3) μF",
        "whyOtherOptionsWrong": "Option B subtracts errors (0.2 - 0.1). Option C keeps only the larger error. Option D averages the errors."
    },

    # Q57 (Practice Medium)
    {
        "questionNumber": 57,
        "question": "The velocity of water waves v may depend on their wavelength λ, density of water ρ, and acceleration due to gravity g. The method of dimensions shows that v is proportional to:",
        "options": {
            "A": "√(g λ)",
            "B": "g / λ",
            "C": "g λ²",
            "D": "√(g / λ)"
        },
        "correctAnswer": "A",
        "topic": "Applications and limitations of dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Derivation of physical relations using dimensional analysis (gravity waves).",
        "given": "v depends on λ, ρ, g: v ∝ λ^a ρ^b g^c.",
        "formula": "[v] = [λ]^a [ρ]^b [g]^c => [M⁰ L T⁻¹] = [L]^a [M L⁻³]^b [L T⁻²]^c",
        "stepByStep": "1. Equating power of M: b = 0 (velocity of gravity waves is independent of water density!).\n2. Equating power of T: -2c = -1 => c = 1/2.\n3. Equating power of L: a - 3b + c = 1 => a - 0 + 1/2 = 1 => a = 1/2.\n4. Therefore: v ∝ λ^(1/2) g^(1/2) = √(g λ).",
        "finalAnswer": "Option A: √(g λ)",
        "whyOtherOptionsWrong": "Options B, C, and D are dimensionally inconsistent with velocity [L T⁻¹]."
    },

    # Q58 (Practice Medium)
    {
        "questionNumber": 58,
        "question": "The value of gravitation constant G is 6.67 × 10⁻¹¹ N·m²/kg² in SI units. Its numerical value in CGS units (dyn·cm²/g²) is:",
        "options": {
            "A": "6.67 × 10⁻⁸",
            "B": "6.67 × 10⁻⁵",
            "C": "6.67 × 10⁻¹⁴",
            "D": "6.67 × 10⁻¹²"
        },
        "correctAnswer": "A",
        "topic": "Applications and limitations of dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Conversion of numerical value of G from SI to CGS using dimensions.",
        "given": "n₁ = 6.67 × 10⁻¹¹, Unit₁ = N·m²/kg² = [M⁻¹ L³ T⁻²].",
        "formula": "n₂ = n₁ [M₁/M₂]⁻¹ [L₁/L₂]³ [T₁/T₂]⁻²",
        "stepByStep": "1. [G] = [M⁻¹ L³ T⁻²].\n2. [M₁/M₂] = [1 kg / 1 g] = 10³.\n3. [L₁/L₂] = [1 m / 1 cm] = 10².\n4. [T₁/T₂] = [1 s / 1 s] = 1.\n5. n₂ = (6.67 × 10⁻¹¹) × (10³)⁻¹ × (10²)³ × (1)⁻² = (6.67 × 10⁻¹¹) × 10⁻³ × 10⁶ = 6.67 × 10⁻⁸ dyn·cm²/g².",
        "finalAnswer": "Option A: 6.67 × 10⁻⁸",
        "whyOtherOptionsWrong": "Option B uses 10⁶ instead of 10³ for length. Option C multiplies instead of dividing for mass. Option D has incorrect arithmetic."
    },

    # Q59 (Practice Medium)
    {
        "questionNumber": 59,
        "question": "The frequency of vibration f of a stretched string depends on the string's length l, the tension T in the string, and mass per unit length μ (linear mass density). The relation derived dimensionally is:",
        "options": {
            "A": "f ∝ (1 / l) √(T / μ)",
            "B": "f ∝ l √(T / μ)",
            "C": "f ∝ (1 / l) √(μ / T)",
            "D": "f ∝ (1 / l²) √(T / μ)"
        },
        "correctAnswer": "A",
        "topic": "Applications and limitations of dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Mersenne's laws of vibrating strings via dimensional analysis.",
        "given": "f ∝ l^a T^b μ^c, where [f] = [T⁻¹], [l] = [L], [T] = [Force] = [M L T⁻²], [μ] = [Mass/Length] = [M L⁻¹].",
        "formula": "[M⁰ L⁰ T⁻¹] = [L]^a [M L T⁻²]^b [M L⁻¹]^c = M^(b + c) L^(a + b - c) T^(-2b)",
        "stepByStep": "1. Equating power of M: b + c = 0 => c = -b.\n2. Equating power of T: -2b = -1 => b = 1/2 => c = -1/2.\n3. Equating power of L: a + b - c = 0 => a + 1/2 - (-1/2) = 0 => a + 1 = 0 => a = -1.\n4. Thus: f ∝ l⁻¹ T^(1/2) μ^(-1/2) = (1 / l) √(T / μ).",
        "finalAnswer": "Option A: f ∝ (1 / l) √(T / μ)",
        "whyOtherOptionsWrong": "Option B has positive power of l (violating frequency dimension). Option C inverts tension and mass density. Option D has 1/l²."
    },

    # Q60 (Practice Medium)
    {
        "questionNumber": 60,
        "question": "The diameter of a cylinder is measured using a Vernier calipers with no zero error. The main scale reading is 3.5 cm and the 6th Vernier division coincides with a main scale division. If 1 MSD = 1 mm and 10 VSD = 9 MSD, the diameter of the cylinder is:",
        "options": {
            "A": "3.56 cm",
            "B": "3.506 cm",
            "C": "3.66 cm",
            "D": "3.512 cm"
        },
        "correctAnswer": "A",
        "topic": "Vernier calipers",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Calculation of measured length using Vernier calipers.",
        "given": "MSR = 3.5 cm = 35 mm, Coinciding Vernier division n = 6, 1 MSD = 1 mm, 10 VSD = 9 MSD.",
        "formula": "LC = (1 - 9/10) × 1 mm = 0.1 mm = 0.01 cm; Reading = MSR + (n × LC)",
        "stepByStep": "1. Least count LC = 0.1 mm = 0.01 cm.\n2. Vernier scale reading VSR = 6 × 0.01 cm = 0.06 cm.\n3. Total Reading = MSR + VSR = 3.5 cm + 0.06 cm = 3.56 cm.",
        "finalAnswer": "Option A: 3.56 cm",
        "whyOtherOptionsWrong": "Option B uses LC = 0.001 cm. Option C adds 6 mm instead of 0.6 mm. Option D multiplies by 2."
    },

    # Q61 (Practice Medium)
    {
        "questionNumber": 61,
        "question": "The dimensional formula of electric resistance (R) is:",
        "options": {
            "A": "[M L² T⁻³ A⁻²]",
            "B": "[M L² T⁻² A⁻²]",
            "C": "[M L T⁻³ A⁻²]",
            "D": "[M L² T⁻³ A⁻¹]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Derivation of dimensional formula of electrical resistance from Joule's law / Ohm's law.",
        "given": "Power P = I² R => R = P / I².",
        "formula": "[R] = [Power] / [Current²] = [M L² T⁻³] / [A²]",
        "stepByStep": "1. Power is work per unit time: [P] = [M L² T⁻²] / [T] = [M L² T⁻³].\n2. Current is base quantity [A], so [I²] = [A²].\n3. [R] = [M L² T⁻³] / [A²] = [M L² T⁻³ A⁻²].",
        "finalAnswer": "Option A: [M L² T⁻³ A⁻²]",
        "whyOtherOptionsWrong": "Option B is inductance [M L² T⁻² A⁻²]. Option C misses a power of length. Option D is electric potential [M L² T⁻³ A⁻¹]."
    },

    # Q62 (Practice Medium)
    {
        "questionNumber": 62,
        "question": "A spherometer has 100 divisions on its circular scale and moves 1 mm for two complete turns of the disc. What is the least count of the spherometer?",
        "options": {
            "A": "0.005 mm",
            "B": "0.01 mm",
            "C": "0.001 mm",
            "D": "0.02 mm"
        },
        "correctAnswer": "A",
        "topic": "Least count",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Pitch and least count of a spherometer.",
        "given": "Distance advanced in 2 rotations = 1 mm, Circular divisions N = 100.",
        "formula": "Pitch = (Distance moved) / (Number of rotations); Least Count LC = Pitch / N",
        "stepByStep": "1. Pitch = 1 mm / 2 = 0.5 mm.\n2. LC = Pitch / 100 = 0.5 mm / 100 = 0.005 mm = 5 × 10⁻³ mm (or 5 μm).",
        "finalAnswer": "Option A: 0.005 mm",
        "whyOtherOptionsWrong": "Option B (0.01 mm) assumes pitch is 1 mm. Option C is 0.001 mm. Option D divides by 50."
    },

    # Q63 (Practice Medium)
    {
        "questionNumber": 63,
        "question": "The time period of an oscillation T = 2π √(m / k). If the percentage error in mass m is 1.5% and in spring constant k is 2.5%, the maximum percentage error in the time period T is:",
        "options": {
            "A": "2.0%",
            "B": "4.0%",
            "C": "1.0%",
            "D": "0.5%"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Propagation of errors in square root of quotient.",
        "given": "T = 2π (m/k)^(1/2), % error in m = 1.5%, % error in k = 2.5%.",
        "formula": "(ΔT/T) × 100% = (1/2)(Δm/m × 100%) + (1/2)(Δk/k × 100%)",
        "stepByStep": "1. (ΔT/T) = 0.5 (Δm/m) + 0.5 (Δk/k).\n2. Percentage error = 0.5 × (1.5%) + 0.5 × (2.5%) = 0.75% + 1.25% = 2.0%.",
        "finalAnswer": "Option A: 2.0%",
        "whyOtherOptionsWrong": "Option B (4.0%) omits the 1/2 power multiplier. Option C subtracts the errors (0.5 × 1.0% = 0.5%). Option D is a calculation slip."
    },

    # Q64 (Practice Medium)
    {
        "questionNumber": 64,
        "question": "Which of the following physical quantities has the dimensional formula [M⁰ L² T⁻²]?",
        "options": {
            "A": "Latent heat",
            "B": "Specific heat capacity",
            "C": "Thermal capacity",
            "D": "Universal gas constant"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Dimensional formula of specific latent heat L = Q / m.",
        "given": "Latent heat L = Heat energy / Mass.",
        "formula": "[L] = [Energy] / [Mass] = [M L² T⁻²] / [M] = [M⁰ L² T⁻²]",
        "stepByStep": "1. Latent heat L is heat required per unit mass for phase change: L = Q / m.\n2. [Q] = [M L² T⁻²], [m] = [M].\n3. [L] = [M⁰ L² T⁻²].\n4. For specific heat capacity: s = Q / (m ΔT) => [s] = [M⁰ L² T⁻² K⁻¹].\n5. Thermal capacity = Q / ΔT => [M L² T⁻² K⁻¹].\n6. Thus, [M⁰ L² T⁻²] is uniquely latent heat (as well as gravitational potential).",
        "finalAnswer": "Option A: Latent heat",
        "whyOtherOptionsWrong": "Specific heat capacity has K⁻¹; thermal capacity has M L² T⁻² K⁻¹; gas constant has M L² T⁻² K⁻¹ mol⁻¹."
    },

    # Q65 (Practice Medium)
    {
        "questionNumber": 65,
        "question": "A physical quantity Z is given by Z = A⁴ B^(1/3) / (C · D^(3/2)). If the percentage errors in A, B, C, and D are 1%, 3%, 2%, and 2% respectively, the maximum percentage error in Z is:",
        "options": {
            "A": "10%",
            "B": "8%",
            "C": "12%",
            "D": "7%"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "General formula for propagation of errors across multiple fractional powers.",
        "given": "Z = A⁴ B^(1/3) / (C D^(3/2)), % errors: A=1%, B=3%, C=2%, D=2%.",
        "formula": "(ΔZ/Z) × 100 = 4(ΔA/A) + (1/3)(ΔB/B) + 1(ΔC/C) + (3/2)(ΔD/D)",
        "stepByStep": "1. For A: 4 × 1% = 4%.\n2. For B: (1/3) × 3% = 1%.\n3. For C: 1 × 2% = 2%.\n4. For D: (3/2) × 2% = 3%.\n5. Total percentage error in Z = 4% + 1% + 2% + 3% = 10%.",
        "finalAnswer": "Option A: 10%",
        "whyOtherOptionsWrong": "Option B (8%) subtracts the denominator contributions. Option C (12%) incorrectly multiplies D's error. Option D misses the contribution of C."
    },

    # Q66 (Practice Medium)
    {
        "questionNumber": 66,
        "question": "The pitch of a screw gauge is 1 mm and there are 100 divisions on its circular scale. When nothing is put between its studs, the 95th division of the circular scale coincides with the reference line and the zero of the circular scale lies below the reference line (negative zero error). The zero error of the screw gauge is:",
        "options": {
            "A": "-0.05 mm",
            "B": "+0.05 mm",
            "C": "-0.95 mm",
            "D": "+0.95 mm"
        },
        "correctAnswer": "A",
        "topic": "Zero error",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Determination of negative zero error in a screw gauge.",
        "given": "Pitch = 1 mm, Circular scale divisions N = 100, 95th division coincides with reference line when jaws are closed.",
        "formula": "LC = Pitch / N = 1 mm / 100 = 0.01 mm; Negative Zero Error = -(N - coinciding division) × LC",
        "stepByStep": "1. Least count LC = 1 mm / 100 = 0.01 mm.\n2. When zero of circular scale has not reached the reference line and the 95th mark is on the reference line, the circular scale is behind by (100 - 95) = 5 divisions.\n3. Zero Error = -(100 - 95) × LC = -5 × 0.01 mm = -0.05 mm.\n4. (When taking readings, this error is subtracted: -(-0.05) = +0.05 mm added).",
        "finalAnswer": "Option A: -0.05 mm",
        "whyOtherOptionsWrong": "Option B is positive zero error (+0.05 mm), which would mean the 5th division coincides. Options C and D take 95 directly without subtracting from 100."
    },

    # Q67 (Practice Medium)
    {
        "questionNumber": 67,
        "question": "In an experiment to determine the Young's modulus of a wire, Y = (4 M g L) / (π d² l), the maximum percentage error will be contributed most by which quantity if all quantities are measured with equal relative precision (1%)?",
        "options": {
            "A": "Diameter of the wire (d)",
            "B": "Mass hung (M)",
            "C": "Original length of wire (L)",
            "D": "Elongation of wire (l)"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Impact of exponents on percentage error contribution.",
        "given": "Y = (4 M g L) / (π d² l). Each variable measured with relative error 1%.",
        "formula": "ΔY/Y = (ΔM/M) + (Δg/g) + (ΔL/L) + 2(Δd/d) + (Δl/l)",
        "stepByStep": "1. In the expression for Young's modulus, the diameter d appears with power 2 (d² in denominator).\n2. Its contribution to percentage error is 2 × (Δd/d).\n3. All other variables (M, L, l) appear with power 1, contributing only 1 × (error).\n4. Therefore, the measurement of diameter d contributes twice as much error (2%) as any other term.",
        "finalAnswer": "Option A: Diameter of the wire (d)",
        "whyOtherOptionsWrong": "M, L, and l all have exponent 1, hence contribute only 1% each compared to 2% from diameter d."
    },

    # Q68 (Practice Medium)
    {
        "questionNumber": 68,
        "question": "The dimensions of magnetic flux (Φ) are:",
        "options": {
            "A": "[M L² T⁻² A⁻¹]",
            "B": "[M L² T⁻² A⁻²]",
            "C": "[M L T⁻² A⁻¹]",
            "D": "[M L² T⁻¹ A⁻¹]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Faraday's law of induction / definition of magnetic flux.",
        "given": "Induced emf e = -dΦ/dt => [Φ] = [e] · [t].",
        "formula": "[e] = [Work / Charge] = [M L² T⁻²] / [A T] = [M L² T⁻³ A⁻¹]; [Φ] = [e][t] = [M L² T⁻² A⁻¹]",
        "stepByStep": "1. Magnetic flux Φ = B · A.\n2. Magnetic force F = q v B => B = F / (q v) => [B] = [M L T⁻²] / ([A T][L T⁻¹]) = [M T⁻² A⁻¹].\n3. [Φ] = [B][A] = [M T⁻² A⁻¹] · [L²] = [M L² T⁻² A⁻¹].\n4. SI unit is Weber (Wb = T·m² = V·s).",
        "finalAnswer": "Option A: [M L² T⁻² A⁻¹]",
        "whyOtherOptionsWrong": "Option B is self-inductance [M L² T⁻² A⁻²]. Option C misses a power of length. Option D has T⁻¹ instead of T⁻²."
    },

    # Q69 (Practice Medium)
    {
        "questionNumber": 69,
        "question": "The thickness of 50 sheets of paper is measured using a screw gauge. The main scale reading is 1.0 mm and the circular scale division coinciding is 48. If the least count of the screw gauge is 0.01 mm and there is no zero error, the thickness of a single sheet of paper is:",
        "options": {
            "A": "0.0296 mm",
            "B": "0.0148 mm",
            "C": "0.048 mm",
            "D": "0.0248 mm"
        },
        "correctAnswer": "A",
        "topic": "Measurement of length",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Measurement of thin objects by stacking to minimize relative error.",
        "given": "Number of sheets n = 50, MSR = 1.0 mm, CSR = 48, LC = 0.01 mm.",
        "formula": "Total thickness T = MSR + (CSR × LC); Thickness per sheet t = T / n",
        "stepByStep": "1. Total thickness of 50 sheets = 1.0 mm + (48 × 0.01 mm) = 1.0 mm + 0.48 mm = 1.48 mm.\n2. Thickness of a single sheet t = 1.48 mm / 50.\n3. Calculate: 1.48 / 50 = 2.96 / 100 = 0.0296 mm (or 29.6 μm).",
        "finalAnswer": "Option A: 0.0296 mm",
        "whyOtherOptionsWrong": "Option B divides 1.48 by 100. Option C only divides 48 divisions. Option D divides 1.24."
    },

    # Q70 (Practice Medium)
    {
        "questionNumber": 70,
        "question": "The dimension of 1 / (μ₀ ε₀) is equivalent to:",
        "options": {
            "A": "[L² T⁻²]",
            "B": "[L T⁻¹]",
            "C": "[L⁻² T²]",
            "D": "[M L² T⁻²]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Relation between speed of light, permeability, and permittivity.",
        "given": "Quantity X = 1 / (μ₀ ε₀).",
        "formula": "c = 1 / √(μ₀ ε₀) => c² = 1 / (μ₀ ε₀)",
        "stepByStep": "1. Speed of light in vacuum c = 1 / √(μ₀ ε₀).\n2. Squaring both sides: c² = 1 / (μ₀ ε₀).\n3. Since [c] = [L T⁻¹], [c²] = [L² T⁻²].\n4. Therefore, [1 / (μ₀ ε₀)] = [L² T⁻²].",
        "finalAnswer": "Option A: [L² T⁻²]",
        "whyOtherOptionsWrong": "Option B is [c] = [L T⁻¹]. Option C is [1/c²] = [L⁻² T²]. Option D is energy."
    },

    # Q71 (Practice Medium)
    {
        "questionNumber": 71,
        "question": "In a Vernier calipers, 1 cm on the main scale is divided into 10 equal parts. If 10 divisions of the Vernier scale coincide with 8 small divisions of the main scale, the least count of the calipers is:",
        "options": {
            "A": "0.02 cm",
            "B": "0.01 cm",
            "C": "0.005 cm",
            "D": "0.05 cm"
        },
        "correctAnswer": "A",
        "topic": "Vernier calipers",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Least count calculation for non-standard Vernier calipers.",
        "given": "1 MSD = 1 cm / 10 = 0.1 cm = 1 mm; 10 VSD = 8 MSD.",
        "formula": "LC = 1 MSD - 1 VSD = (1 - 8/10) MSD = (2/10) MSD",
        "stepByStep": "1. 1 MSD = 0.1 cm.\n2. 1 VSD = (8/10) MSD = 0.8 × 0.1 cm = 0.08 cm.\n3. LC = 1 MSD - 1 VSD = 0.10 cm - 0.08 cm = 0.02 cm (or 0.2 mm).",
        "finalAnswer": "Option A: 0.02 cm",
        "whyOtherOptionsWrong": "Option B (0.01 cm) is for 10 VSD = 9 MSD. Option C is for 20 divisions. Option D is 5 times too large."
    },

    # Q72 (Practice Medium)
    {
        "questionNumber": 72,
        "question": "The radius of a sphere is (5.3 ± 0.1) cm. The percentage error in its volume is:",
        "options": {
            "A": "5.66%",
            "B": "1.89%",
            "C": "3.77%",
            "D": "0.63%"
        },
        "correctAnswer": "A",
        "topic": "Percentage error",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Percentage error in volume of a sphere.",
        "given": "r = 5.3 cm, Δr = 0.1 cm.",
        "formula": "Volume V = (4/3) π r³ => (ΔV/V) × 100% = 3 × (Δr/r × 100%)",
        "stepByStep": "1. Fractional error in radius: Δr/r = 0.1 / 5.3 ≈ 0.018868 (1.887%).\n2. In volume V = (4/3) π r³, the exponent of r is 3.\n3. Percentage error in V = 3 × (Δr/r) × 100% = 3 × 1.887% = 5.66%.",
        "finalAnswer": "Option A: 5.66%",
        "whyOtherOptionsWrong": "Option B (1.89%) is the percentage error in radius itself (forgets exponent 3). Option C (3.77%) multiplies by 2 (surface area error). Option D divides by 3."
    },

    # Q73 (Practice Medium)
    {
        "questionNumber": 73,
        "question": "A force F is given by F = a t + b t², where t is time. The dimensional formula of a / b is:",
        "options": {
            "A": "[T]",
            "B": "[T⁻¹]",
            "C": "[L T⁻¹]",
            "D": "[M L T⁻¹]"
        },
        "correctAnswer": "A",
        "topic": "Dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Principle of homogeneity applied to polynomial terms.",
        "given": "F = a t + b t².",
        "formula": "[a t] = [F] => [a] = [F] / [T]; [b t²] = [F] => [b] = [F] / [T²]",
        "stepByStep": "1. [a] = [F][T⁻¹] = [M L T⁻²][T⁻¹] = [M L T⁻³].\n2. [b] = [F][T⁻²] = [M L T⁻²][T⁻²] = [M L T⁻⁴].\n3. Ratio [a / b] = ([F][T⁻¹]) / ([F][T⁻²]) = [T⁻¹] / [T⁻²] = [T¹].\n4. Thus, [a / b] has the dimensions of time [T].",
        "finalAnswer": "Option A: [T]",
        "whyOtherOptionsWrong": "Option B is [b / a] = [T⁻¹]. Option C is velocity. Option D is momentum."
    },

    # Q74 (Practice Medium)
    {
        "questionNumber": 74,
        "question": "The density of a material in CGS system is 8 g/cm³. In SI units (kg/m³), its value is:",
        "options": {
            "A": "8000 kg/m³",
            "B": "80 kg/m³",
            "C": "0.008 kg/m³",
            "D": "800 kg/m³"
        },
        "correctAnswer": "A",
        "topic": "Applications and limitations of dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Unit conversion of density from CGS to SI.",
        "given": "Density ρ = 8 g/cm³.",
        "formula": "1 g = 10⁻³ kg; 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³",
        "stepByStep": "1. 1 g/cm³ = (10⁻³ kg) / (10⁻⁶ m³) = 10³ kg/m³ = 1000 kg/m³.\n2. Therefore, 8 g/cm³ = 8 × 1000 kg/m³ = 8000 kg/m³.",
        "finalAnswer": "Option A: 8000 kg/m³",
        "whyOtherOptionsWrong": "Option B multiplies by 10. Option C divides by 1000. Option D multiplies by 100."
    },

    # Q75 (Practice Medium)
    {
        "questionNumber": 75,
        "question": "If momentum (p), area (A) and time (T) are taken as fundamental quantities, then energy has the dimensional formula:",
        "options": {
            "A": "[p A^(1/2) T⁻¹]",
            "B": "[p A T⁻¹]",
            "C": "[p² A T⁻¹]",
            "D": "[p A^(1/2) T]"
        },
        "correctAnswer": "A",
        "topic": "Dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Derivation of dimensions of energy in terms of momentum, area, and time.",
        "given": "Fundamental quantities: p = [M L T⁻¹], A = [L²], T = [T]. Energy E = [M L² T⁻²].",
        "formula": "E = k p^a A^b T^c => [M L² T⁻²] = [M L T⁻¹]^a [L²]^b [T]^c",
        "stepByStep": "1. [M L² T⁻²] = M^a L^(a + 2b) T^(-a + c).\n2. Equating power of M: a = 1.\n3. Equating power of L: a + 2b = 2 => 1 + 2b = 2 => 2b = 1 => b = 1/2.\n4. Equating power of T: -a + c = -2 => -1 + c = -2 => c = -1.\n5. Therefore, [E] = [p¹ A^(1/2) T⁻¹].",
        "finalAnswer": "Option A: [p A^(1/2) T⁻¹]",
        "whyOtherOptionsWrong": "Option B misses power 1/2 on A. Option C squares momentum. Option D has positive power on time."
    }
]
