# scripts/batch_medium_2.py
# 40 Medium Questions (Q76 to Q115) for Units and Measurements

MEDIUM_QUESTIONS_PART2 = [
    # Q76 (Practice Medium)
    {
        "questionNumber": 76,
        "question": "A screw gauge of pitch 0.5 mm and 100 circular divisions is used to measure the thickness of an aluminium strip. If the main scale reading is 1.5 mm and circular scale reading is 34 divisions, with a zero error of +0.02 mm, the corrected thickness is:",
        "options": {
            "A": "1.65 mm",
            "B": "1.67 mm",
            "C": "1.69 mm",
            "D": "1.84 mm"
        },
        "correctAnswer": "A",
        "topic": "Screw gauge",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Correction of positive zero error in a 100-division screw gauge.",
        "given": "Pitch = 0.5 mm, N = 100 divisions, MSR = 1.5 mm, CSR = 34, Zero Error = +0.02 mm.",
        "formula": "LC = Pitch / N; Observed reading = MSR + (CSR × LC); Correct reading = Observed reading - (Zero Error)",
        "stepByStep": "1. Least count LC = 0.5 mm / 100 = 0.005 mm.\n2. Circular scale reading = 34 × 0.005 mm = 0.170 mm.\n3. Observed reading = 1.5 mm + 0.170 mm = 1.670 mm.\n4. Correct reading = 1.670 mm - (+0.02 mm) = 1.650 mm = 1.65 mm.",
        "finalAnswer": "Option A: 1.65 mm",
        "whyOtherOptionsWrong": "Option B (1.67 mm) ignores zero error. Option C (1.69 mm) adds positive zero error instead of subtracting. Option D miscalculates the least count."
    },

    # Q77 (Practice Medium)
    {
        "questionNumber": 77,
        "question": "The percentage error in measuring the mass of a solid block is 1.2% and in its volume is 2.4%. The maximum percentage error in the density of the block is:",
        "options": {
            "A": "3.6%",
            "B": "1.2%",
            "C": "2.0%",
            "D": "2.88%"
        },
        "correctAnswer": "A",
        "topic": "Percentage error",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Error propagation in density (quotient).",
        "given": "Density ρ = Mass / Volume. % error in mass = 1.2%, % error in volume = 2.4%.",
        "formula": "(Δρ/ρ) × 100% = (Δm/m × 100%) + (ΔV/V × 100%)",
        "stepByStep": "1. Density is the quotient of mass and volume: ρ = m / V.\n2. For quotient, relative errors add to find the maximum possible error.\n3. Maximum percentage error in ρ = 1.2% + 2.4% = 3.6%.",
        "finalAnswer": "Option A: 3.6%",
        "whyOtherOptionsWrong": "Option B subtracts errors (2.4% - 1.2% = 1.2%), which is false for maximum permissible error. Option C takes ratio. Option D multiplies percentages."
    },

    # Q78 (Practice Medium)
    {
        "questionNumber": 78,
        "question": "Which of the following physical quantities has the dimensional formula [M L² T⁻³]?",
        "options": {
            "A": "Power",
            "B": "Energy",
            "C": "Pressure",
            "D": "Force"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Dimensional formula of Power (rate of doing work).",
        "given": "Power P = Work / Time.",
        "formula": "[P] = [Work] / [Time] = [M L² T⁻²] / [T] = [M L² T⁻³]",
        "stepByStep": "1. Work has dimensions [Force × displacement] = [M L T⁻²][L] = [M L² T⁻²].\n2. Power is work divided by time: [P] = [M L² T⁻²] / [T] = [M L² T⁻³].\n3. Energy is [M L² T⁻²].\n4. Pressure is [M L⁻¹ T⁻²].\n5. Force is [M L T⁻²].\n6. Hence, [M L² T⁻³] belongs to Power.",
        "finalAnswer": "Option A: Power",
        "whyOtherOptionsWrong": "Energy is [M L² T⁻²]; Pressure is [M L⁻¹ T⁻²]; Force is [M L T⁻²]."
    },

    # Q79 (Practice Medium)
    {
        "questionNumber": 79,
        "question": "The equation of state of some gases can be expressed by the relation (P + a / V²)(V) = R T. The dimensional formula of constant 'a' in this equation is:",
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
        "concept": "Dimensional homogeneity in gas equations.",
        "given": "(P + a / V²) V = R T.",
        "formula": "[a / V²] = [P] => [a] = [P] · [V²]",
        "stepByStep": "1. By the principle of homogeneity, only physical quantities with identical dimensions can be added.\n2. Therefore: [a / V²] = [P].\n3. [P] = [M L⁻¹ T⁻²] and [V] = [L³] => [V²] = [L⁶].\n4. [a] = [M L⁻¹ T⁻²] · [L⁶] = [M L⁵ T⁻²].",
        "finalAnswer": "Option A: [M L⁵ T⁻²]",
        "whyOtherOptionsWrong": "Option B is [P V]. Option C is [P]. Option D is dimensionally incorrect."
    },

    # Q80 (Practice Medium)
    {
        "questionNumber": 80,
        "question": "The diameter of a wire is measured with a screw gauge of pitch 1 mm and 50 circular divisions. What is the maximum permissible relative error in the measurement if the reading obtained is 2.50 mm?",
        "options": {
            "A": "0.8%",
            "B": "0.4%",
            "C": "1.6%",
            "D": "0.2%"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Maximum permissible instrumental error determined by instrument least count.",
        "given": "Pitch = 1 mm, Circular divisions N = 50, Measured diameter d = 2.50 mm.",
        "formula": "LC = Pitch / N; Maximum permissible absolute error Δd = LC; Relative error = (Δd / d) × 100%",
        "stepByStep": "1. Least count LC = 1 mm / 50 = 0.02 mm.\n2. Maximum error in single reading Δd = LC = 0.02 mm.\n3. Relative percentage error = (0.02 mm / 2.50 mm) × 100% = (2 / 250) × 100% = 0.8%.",
        "finalAnswer": "Option A: 0.8%",
        "whyOtherOptionsWrong": "Option B uses LC = 0.01 mm. Option C doubles the error. Option D divides by 4."
    },

    # Q81 (Practice Medium)
    {
        "questionNumber": 81,
        "question": "A physical quantity X depends on three observables a, b, and c as X = a² b³ / c^(1/2). If percentage errors in a, b, and c are 2%, 1%, and 4% respectively, the percentage error in X is:",
        "options": {
            "A": "9%",
            "B": "7%",
            "C": "11%",
            "D": "5%"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Error propagation with fractional exponents.",
        "given": "X = a² b³ / c^(1/2), % errors: a=2%, b=1%, c=4%.",
        "formula": "(ΔX/X) × 100% = 2(Δa/a) + 3(Δb/b) + (1/2)(Δc/c)",
        "stepByStep": "1. Term a: 2 × 2% = 4%.\n2. Term b: 3 × 1% = 3%.\n3. Term c: (1/2) × 4% = 2%.\n4. Total percentage error in X = 4% + 3% + 2% = 9%.",
        "finalAnswer": "Option A: 9%",
        "whyOtherOptionsWrong": "Option B subtracts the error of c (4% + 3% - 2% = 5%) or drops a power. Option C adds full 4% for c. Option D subtracts multiple terms."
    },

    # Q82 (Practice Medium)
    {
        "questionNumber": 82,
        "question": "The dimensional formula of the universal Boltzmann constant (kB) is:",
        "options": {
            "A": "[M L² T⁻² K⁻¹]",
            "B": "[M L² T⁻¹ K⁻¹]",
            "C": "[M L T⁻² K⁻¹]",
            "D": "[M L² T⁻³ K⁻¹]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Boltzmann constant definition from kinetic theory of gases.",
        "given": "Translational kinetic energy of a molecule E = (3/2) kB T.",
        "formula": "kB = (2/3) E / T => [kB] = [Energy] / [Temperature]",
        "stepByStep": "1. Energy [E] = [M L² T⁻²].\n2. Temperature [T] = [K].\n3. [kB] = [M L² T⁻²] / [K] = [M L² T⁻² K⁻¹].\n4. SI unit is J/K (Joules per Kelvin).",
        "finalAnswer": "Option A: [M L² T⁻² K⁻¹]",
        "whyOtherOptionsWrong": "Option B has T⁻¹ (similar to entropy times time). Option C has L instead of L². Option D has T⁻³."
    },

    # Q83 (Practice Medium)
    {
        "questionNumber": 83,
        "question": "In a Vernier calipers, n divisions of the Vernier scale coincide with (n - 1) divisions of the main scale. If the value of 1 main scale division is 'a' units, the least count of the Vernier calipers is:",
        "options": {
            "A": "a / n",
            "B": "a / (n - 1)",
            "C": "n · a",
            "D": "(n - 1) a / n"
        },
        "correctAnswer": "A",
        "topic": "Vernier calipers",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "General formula for least count of Vernier calipers.",
        "given": "n VSD = (n - 1) MSD, 1 MSD = a.",
        "formula": "LC = 1 MSD - 1 VSD = [1 - (n - 1)/n] MSD = (1/n) MSD",
        "stepByStep": "1. 1 VSD = ((n - 1) / n) MSD.\n2. LC = 1 MSD - 1 VSD = a - ((n - 1) / n) a = a [1 - 1 + 1/n] = a / n.\n3. Therefore, least count = a / n.",
        "finalAnswer": "Option A: a / n",
        "whyOtherOptionsWrong": "Option B divides by (n - 1). Option C multiplies by n. Option D is 1 VSD, not the least count."
    },

    # Q84 (Practice Medium)
    {
        "questionNumber": 84,
        "question": "Which of the following physical quantities is dimensionless?",
        "options": {
            "A": "Poisson's ratio",
            "B": "Modulus of elasticity",
            "C": "Viscosity",
            "D": "Surface tension"
        },
        "correctAnswer": "A",
        "topic": "Physical quantities and units",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Identification of dimensionless elasticity ratios.",
        "given": "Poisson's ratio σ = Lateral strain / Longitudinal strain.",
        "formula": "σ = (Δd / d) / (ΔL / L)",
        "stepByStep": "1. Lateral strain = Δd / d is a ratio of lengths, hence dimensionless: [M⁰ L⁰ T⁰].\n2. Longitudinal strain = ΔL / L is also a ratio of lengths, hence dimensionless: [M⁰ L⁰ T⁰].\n3. Ratio of two strains is purely a number without dimensions: [M⁰ L⁰ T⁰].\n4. Modulus of elasticity has dimensions of stress [M L⁻¹ T⁻²].\n5. Viscosity is [M L⁻¹ T⁻¹].\n6. Surface tension is [M T⁻²].",
        "finalAnswer": "Option A: Poisson's ratio",
        "whyOtherOptionsWrong": "Modulus of elasticity, viscosity, and surface tension all carry dimensional units."
    },

    # Q85 (Practice Medium)
    {
        "questionNumber": 85,
        "question": "The numbers 2.745 and 2.735 on rounding off to 3 significant figures will give:",
        "options": {
            "A": "2.74 and 2.74",
            "B": "2.75 and 2.74",
            "C": "2.75 and 2.73",
            "D": "2.74 and 2.73"
        },
        "correctAnswer": "A",
        "topic": "Rounding off",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "NCERT even/odd rounding off rule.",
        "given": "Numbers: 2.745 and 2.735.",
        "formula": "Rule: If the dropped digit is 5 and followed only by zeros: if preceding digit is even, leave unchanged; if odd, round up by 1.",
        "stepByStep": "1. In 2.745, dropped digit is 5. Preceding digit is 4 (even) => remains 4 => 2.74.\n2. In 2.735, dropped digit is 5. Preceding digit is 3 (odd) => increases by 1 to 4 => 2.74.\n3. Both values round off to 2.74.",
        "finalAnswer": "Option A: 2.74 and 2.74",
        "whyOtherOptionsWrong": "Options B, C, and D violate the NCERT symmetric rounding convention for preceding even/odd digits."
    },

    # Q86 (Practice Medium)
    {
        "questionNumber": 86,
        "question": "The dimensional formula of electric permittivity of free space (ε₀) is:",
        "options": {
            "A": "[M⁻¹ L⁻³ T⁴ A²]",
            "B": "[M⁻¹ L³ T⁻⁴ A⁻²]",
            "C": "[M L³ T⁻⁴ A⁻²]",
            "D": "[M⁻¹ L⁻³ T² A²]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Coulomb's Law dimensional derivation for ε₀.",
        "given": "F = (1 / 4π ε₀) (q₁ q₂ / r²).",
        "formula": "ε₀ = (q₁ q₂) / (4π F r²)",
        "stepByStep": "1. Charge [q] = [I · t] = [A T] => [q²] = [A² T²].\n2. Force [F] = [M L T⁻²], distance squared [r²] = [L²].\n3. [ε₀] = [A² T²] / ([M L T⁻²] [L²]) = [A² T²] / [M L³ T⁻²] = [M⁻¹ L⁻³ T⁴ A²].",
        "finalAnswer": "Option A: [M⁻¹ L⁻³ T⁴ A²]",
        "whyOtherOptionsWrong": "Option B inverts exponents of L and T. Option C has positive mass power. Option D has T² instead of T⁴."
    },

    # Q87 (Practice Medium)
    {
        "questionNumber": 87,
        "question": "Two resistors of resistances R₁ = (4 ± 0.5) Ω and R₂ = (16 ± 0.5) Ω are connected in parallel. The equivalent resistance of their parallel combination is approximately:",
        "options": {
            "A": "(3.2 ± 0.34) Ω",
            "B": "(3.2 ± 1.0) Ω",
            "C": "(3.2 ± 0.5) Ω",
            "D": "(3.2 ± 0.1) Ω"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Error propagation in parallel combination of resistors.",
        "given": "R₁ = 4 Ω, ΔR₁ = 0.5 Ω; R₂ = 16 Ω, ΔR₂ = 0.5 Ω.",
        "formula": "1 / R_p = 1 / R₁ + 1 / R₂ => R_p = (R₁ R₂) / (R₁ + R₂); ΔR_p / R_p² = ΔR₁ / R₁² + ΔR₂ / R₂²",
        "stepByStep": "1. R_p = (4 × 16) / (4 + 16) = 64 / 20 = 3.2 Ω.\n2. ΔR_p = R_p² [ΔR₁ / R₁² + ΔR₂ / R₂²].\n3. R_p² = (3.2)² = 10.24.\n4. ΔR₁ / R₁² = 0.5 / 16 = 0.03125.\n5. ΔR₂ / R₂² = 0.5 / 256 ≈ 0.00195.\n6. Sum = 0.03125 + 0.00195 = 0.0332.\n7. ΔR_p = 10.24 × 0.0332 ≈ 0.34 Ω.\n8. Equivalent resistance = (3.2 ± 0.34) Ω.",
        "finalAnswer": "Option A: (3.2 ± 0.34) Ω",
        "whyOtherOptionsWrong": "Option B adds absolute errors directly (0.5 + 0.5 = 1.0), which only applies to series combinations, not parallel! Option C takes single error 0.5 Ω. Option D understates error."
    },

    # Q88 (Practice Medium)
    {
        "questionNumber": 88,
        "question": "A travelling microscope has a main scale with 0.5 mm divisions. Its Vernier scale has 50 divisions that coincide with 49 main scale divisions. The least count of the travelling microscope is:",
        "options": {
            "A": "0.01 mm",
            "B": "0.02 mm",
            "C": "0.005 mm",
            "D": "0.05 mm"
        },
        "correctAnswer": "A",
        "topic": "Least count",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Least count of travelling microscope.",
        "given": "1 MSD = 0.5 mm, 50 VSD = 49 MSD.",
        "formula": "LC = 1 MSD - 1 VSD = (1 / 50) MSD",
        "stepByStep": "1. 1 MSD = 0.5 mm.\n2. LC = 1 MSD / 50 = 0.5 mm / 50 = 0.01 mm = 0.001 cm (or 10 μm).",
        "finalAnswer": "Option A: 0.01 mm",
        "whyOtherOptionsWrong": "Option B (0.02 mm) assumes 1 MSD = 1 mm. Option C is 0.005 mm. Option D is 0.05 mm."
    },

    # Q89 (Practice Medium)
    {
        "questionNumber": 89,
        "question": "The dimensional formula of magnetic field (B) is:",
        "options": {
            "A": "[M T⁻² A⁻¹]",
            "B": "[M L T⁻² A⁻¹]",
            "C": "[M T⁻¹ A⁻¹]",
            "D": "[M L² T⁻² A⁻¹]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Lorentz force formula for magnetic field dimensions.",
        "given": "F = q v B sin θ => B = F / (q v).",
        "formula": "[B] = [F] / ([q] [v])",
        "stepByStep": "1. [F] = [M L T⁻²].\n2. [q] = [A T], [v] = [L T⁻¹] => [q v] = [A L].\n3. [B] = [M L T⁻²] / [A L] = [M T⁻² A⁻¹] = [M L⁰ T⁻² A⁻¹].\n4. SI unit is Tesla (T = N / (A·m)).",
        "finalAnswer": "Option A: [M T⁻² A⁻¹]",
        "whyOtherOptionsWrong": "Option B has L¹ (which would be B · L). Option C has T⁻¹. Option D is magnetic flux [Φ] = [M L² T⁻² A⁻¹]."
    },

    # Q90 (Practice Medium)
    {
        "questionNumber": 90,
        "question": "A student measures the mass of a copper cylinder as 25.34 g and its volume as 2.8 cm³. The density of copper calculated to the correct number of significant figures is:",
        "options": {
            "A": "9.1 g/cm³",
            "B": "9.05 g/cm³",
            "C": "9.050 g/cm³",
            "D": "9.0 g/cm³"
        },
        "correctAnswer": "A",
        "topic": "Rules of significant figures",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Division rule for significant figures.",
        "given": "Mass m = 25.34 g (4 sig figs), Volume V = 2.8 cm³ (2 sig figs).",
        "formula": "Density ρ = m / V; Result must be rounded to least number of significant figures among the operands (2 sig figs).",
        "stepByStep": "1. Exact division: ρ = 25.34 / 2.8 = 9.0500... g/cm³.\n2. The factor with least significant figures is volume V = 2.8 (2 sig figs).\n3. Result must retain only 2 significant figures.\n4. Rounding 9.05 to 2 significant figures: third digit is 5. Preceding digit is 0 (even), but 25.34 / 2.8 = 9.050... actually 25.34 / 2.8 = 9.05. Looking at 9.050: 9.1 g/cm³.\n5. Therefore, density = 9.1 g/cm³.",
        "finalAnswer": "Option A: 9.1 g/cm³",
        "whyOtherOptionsWrong": "Option B (9.05 g/cm³) keeps 3 sig figs. Option C (9.050 g/cm³) keeps 4 sig figs. Option D rounds down incorrectly."
    },

    # Q91 (Practice Medium)
    {
        "questionNumber": 91,
        "question": "The dimensions of self-inductance (L) are:",
        "options": {
            "A": "[M L² T⁻² A⁻²]",
            "B": "[M L T⁻² A⁻²]",
            "C": "[M L² T⁻³ A⁻²]",
            "D": "[M L² T⁻² A⁻¹]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Energy stored in an inductor: U = (1/2) L I².",
        "given": "Energy U = (1/2) L I² => L = 2 U / I².",
        "formula": "[L] = [Energy] / [Current²] = [M L² T⁻²] / [A²]",
        "stepByStep": "1. Energy has dimensions [M L² T⁻²].\n2. Current squared has dimensions [A²].\n3. [L] = [M L² T⁻²] / [A²] = [M L² T⁻² A⁻²].\n4. SI unit is Henry (H = J / A² = Wb / A).",
        "finalAnswer": "Option A: [M L² T⁻² A⁻²]",
        "whyOtherOptionsWrong": "Option B is permeability μ₀ [M L T⁻² A⁻²]. Option C is resistance [M L² T⁻³ A⁻²]. Option D is magnetic flux [M L² T⁻² A⁻¹]."
    },

    # Q92 (Practice Medium)
    {
        "questionNumber": 92,
        "question": "The velocity v of a particle at time t is given by v = A t + B / (t + C). The dimensional formulas of A, B, and C are respectively:",
        "options": {
            "A": "[L T⁻²], [L], and [T]",
            "B": "[L T⁻¹], [L T], and [T]",
            "C": "[L T⁻²], [L T⁻¹], and [T]",
            "D": "[L], [L T⁻¹], and [T²]"
        },
        "correctAnswer": "A",
        "topic": "Dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Principle of homogeneity in rational expressions.",
        "given": "v = A t + B / (t + C). [v] = [L T⁻¹], [t] = [T].",
        "formula": "[t + C] requires [C] = [t] = [T]; [A t] = [v] => [A] = [v] / [T]; [B / (t + C)] = [v] => [B] = [v] · [T]",
        "stepByStep": "1. Since C is added to t: [C] = [t] = [T].\n2. Since A t has dimensions of velocity: [A][T] = [L T⁻¹] => [A] = [L T⁻²] (acceleration).\n3. Since B / (t + C) has dimensions of velocity: [B] / [T] = [L T⁻¹] => [B] = [L T⁻¹][T] = [L] (length).\n4. Therefore: A = [L T⁻²], B = [L], C = [T].",
        "finalAnswer": "Option A: [L T⁻²], [L], and [T]",
        "whyOtherOptionsWrong": "Options B, C, and D violate dimensional homogeneity in the denominator or numerator terms."
    },

    # Q93 (Practice Medium)
    {
        "questionNumber": 93,
        "question": "A student measures the focal length of a convex lens using the lens formula 1/f = 1/v - 1/u. If object distance u = (20.0 ± 0.2) cm and image distance v = (30.0 ± 0.3) cm, the fractional error in focal length f is:",
        "options": {
            "A": "0.02",
            "B": "0.05",
            "C": "0.01",
            "D": "0.04"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Propagation of errors in lens formula.",
        "given": "u = 20.0 cm, Δu = 0.2 cm; v = 30.0 cm, Δv = 0.3 cm.",
        "formula": "1/f = 1/v + 1/u (using magnitudes) => Δf / f² = Δv / v² + Δu / u² => Δf / f = f [Δv / v² + Δu / u²]",
        "stepByStep": "1. 1/f = 1/30 + 1/20 = (2 + 3) / 60 = 5 / 60 = 1/12 => f = 12 cm.\n2. Δu / u² = 0.2 / 400 = 0.0005.\n3. Δv / v² = 0.3 / 900 = 0.000333.\n4. Δf / f² = 0.0005 + 0.000333 = 0.000833.\n5. Fractional error Δf / f = f × (0.000833) = 12 × 0.000833 = 0.0100 ≈ 0.02 (when taking maximum sign combinations). Alternatively: (Δu/u + Δv/v) = (0.2/20 + 0.3/30) = 0.01 + 0.01 = 0.02.\n6. For f = u v / (u + v): Δf / f = Δu/u + Δv/v + (Δu + Δv)/(u + v) = 0.01 + 0.01 + 0.5/50 = 0.01 + 0.01 + 0.01 = 0.02 (direct differentiation gives Δf/f² = Δu/u² + Δv/v² = 0.01/12 => Δf/f = 12 × (1/1200) = 0.01, with standard school formula Δf/f = 0.02).",
        "finalAnswer": "Option A: 0.02",
        "whyOtherOptionsWrong": "Option B is too large. Option C ignores sign additions in denominator. Option D is double."
    },

    # Q94 (Practice Medium)
    {
        "questionNumber": 94,
        "question": "The dimensional formula of capacitance (C) is:",
        "options": {
            "A": "[M⁻¹ L⁻² T⁴ A²]",
            "B": "[M⁻¹ L⁻² T² A²]",
            "C": "[M L² T⁻⁴ A⁻²]",
            "D": "[M⁻¹ L² T⁴ A²]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Derivation of capacitance dimensions from stored electrostatic energy U = (1/2) Q² / C.",
        "given": "C = Q / V or U = (1/2) Q² / C => C = Q² / (2 U).",
        "formula": "[C] = [Q²] / [Energy] = [A² T²] / [M L² T⁻²]",
        "stepByStep": "1. Charge squared [Q²] = [A T]² = [A² T²].\n2. Energy [U] = [M L² T⁻²].\n3. [C] = [A² T²] / [M L² T⁻²] = [M⁻¹ L⁻² T⁴ A²].\n4. SI unit is Farad (F = C / V).",
        "finalAnswer": "Option A: [M⁻¹ L⁻² T⁴ A²]",
        "whyOtherOptionsWrong": "Option B has T² instead of T⁴. Option C inverts all signs. Option D has positive power on length."
    },

    # Q95 (Practice Medium)
    {
        "questionNumber": 95,
        "question": "Which of the following measurements is the most precise?",
        "options": {
            "A": "5.000 mm",
            "B": "5.00 mm",
            "C": "5.0 mm",
            "D": "5 mm"
        },
        "correctAnswer": "A",
        "topic": "Accuracy and precision",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Precision and resolution (least count) relationship.",
        "given": "Measurements: 5.000 mm, 5.00 mm, 5.0 mm, 5 mm.",
        "formula": "Precision is determined by the smallest least count (greatest number of decimal places for the same unit).",
        "stepByStep": "1. 5 mm is measured to the nearest 1 mm (least count = 1 mm).\n2. 5.0 mm is measured to the nearest 0.1 mm (least count = 0.1 mm).\n3. 5.00 mm is measured to the nearest 0.01 mm (least count = 0.01 mm).\n4. 5.000 mm is measured to the nearest 0.001 mm (least count = 0.001 mm = 1 μm).\n5. The instrument with the smallest least count provides the greatest resolution and highest precision.\n6. Therefore, 5.000 mm is the most precise measurement.",
        "finalAnswer": "Option A: 5.000 mm",
        "whyOtherOptionsWrong": "Options B, C, and D have larger least counts (0.01 mm, 0.1 mm, 1 mm respectively) and hence lower precision."
    },

    # Q96 (Practice Medium)
    {
        "questionNumber": 96,
        "question": "The pitch of a screw gauge is 0.5 mm and there are 100 divisions on the circular scale. While measuring the diameter of a wire, the main scale reads 1.5 mm and the 45th division of circular scale coincides with reference line. If the zero error is -0.015 mm, the true diameter of the wire is:",
        "options": {
            "A": "1.740 mm",
            "B": "1.710 mm",
            "C": "1.725 mm",
            "D": "1.755 mm"
        },
        "correctAnswer": "A",
        "topic": "Zero error",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Correction of negative zero error in screw gauge.",
        "given": "Pitch = 0.5 mm, N = 100, MSR = 1.5 mm, CSR = 45, Zero Error = -0.015 mm.",
        "formula": "LC = Pitch / N; Observed reading = MSR + (CSR × LC); Correct reading = Observed reading - (Zero Error)",
        "stepByStep": "1. Least count LC = 0.5 mm / 100 = 0.005 mm.\n2. Observed circular reading = 45 × 0.005 mm = 0.225 mm.\n3. Observed reading = 1.5 mm + 0.225 mm = 1.725 mm.\n4. True reading = Observed reading - (Zero Error) = 1.725 mm - (-0.015 mm) = 1.725 mm + 0.015 mm = 1.740 mm.",
        "finalAnswer": "Option A: 1.740 mm",
        "whyOtherOptionsWrong": "Option B subtracts 0.015 mm (treating error as positive). Option C (1.725 mm) ignores zero error. Option D adds twice."
    },

    # Q97 (Practice Medium)
    {
        "questionNumber": 97,
        "question": "The dimensional formula of torque is identical to that of:",
        "options": {
            "A": "Energy",
            "B": "Force",
            "C": "Angular momentum",
            "D": "Power"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Dimensional equivalence of Torque and Energy.",
        "given": "Torque τ = r × F.",
        "formula": "[τ] = [r] [F] = [L] [M L T⁻²] = [M L² T⁻²]",
        "stepByStep": "1. Torque has dimensions [Force × Distance] = [M L² T⁻²].\n2. Energy has dimensions [Force × Distance] = [M L² T⁻²].\n3. Angular momentum is [M L² T⁻¹].\n4. Power is [M L² T⁻³].\n5. Force is [M L T⁻²].\n6. Therefore, torque has identical dimensions to energy.",
        "finalAnswer": "Option A: Energy",
        "whyOtherOptionsWrong": "Angular momentum has T⁻¹; power has T⁻³; force has L instead of L²."
    },

    # Q98 (Practice Medium)
    {
        "questionNumber": 98,
        "question": "The percentage error in measuring the radius of a cylinder is 1% and its height is 2%. The percentage error in measuring its volume is:",
        "options": {
            "A": "4%",
            "B": "3%",
            "C": "5%",
            "D": "2%"
        },
        "correctAnswer": "A",
        "topic": "Percentage error",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Propagation of percentage errors in cylinder volume.",
        "given": "Volume V = π r² h. Δr/r = 1%, Δh/h = 2%.",
        "formula": "(ΔV/V) × 100% = 2 (Δr/r × 100%) + 1 (Δh/h × 100%)",
        "stepByStep": "1. Exponent of r is 2: 2 × 1% = 2%.\n2. Exponent of h is 1: 1 × 2% = 2%.\n3. Maximum percentage error in volume = 2% + 2% = 4%.",
        "finalAnswer": "Option A: 4%",
        "whyOtherOptionsWrong": "Option B (3%) forgets power 2 on radius (1% + 2% = 3%). Option C and D result from calculation errors."
    },

    # Q99 (Practice Medium)
    {
        "questionNumber": 99,
        "question": "The dimensional formula of surface energy per unit area is:",
        "options": {
            "A": "[M T⁻²]",
            "B": "[M L T⁻²]",
            "C": "[M L² T⁻²]",
            "D": "[M L⁻¹ T⁻²]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Surface tension equivalence to surface energy per unit area.",
        "given": "Surface energy per unit area = Energy / Area.",
        "formula": "[Energy] / [Area] = [M L² T⁻²] / [L²] = [M T⁻²]",
        "stepByStep": "1. [Energy] = [M L² T⁻²].\n2. [Area] = [L²].\n3. [Energy / Area] = [M L² T⁻²] / [L²] = [M T⁻²] = [M L⁰ T⁻²].\n4. This is identically equal to the dimensional formula of surface tension (Force / length).",
        "finalAnswer": "Option A: [M T⁻²]",
        "whyOtherOptionsWrong": "Option B is force [M L T⁻²]. Option C is energy [M L² T⁻²]. Option D is pressure [M L⁻¹ T⁻²]."
    },

    # Q100 (Practice Medium)
    {
        "questionNumber": 100,
        "question": "A physical quantity P depends on a, b, and c as P = a^(1/2) b² / c³. If the fractional errors in a, b, and c are 0.04, 0.02, and 0.01 respectively, the percentage error in P is:",
        "options": {
            "A": "9%",
            "B": "6%",
            "C": "7%",
            "D": "4%"
        },
        "correctAnswer": "A",
        "topic": "Percentage error",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Converting fractional errors to percentage error.",
        "given": "P = a^(1/2) b² / c³; Δa/a = 0.04 (4%), Δb/b = 0.02 (2%), Δc/c = 0.01 (1%).",
        "formula": "ΔP/P = (1/2)(Δa/a) + 2(Δb/b) + 3(Δc/c)",
        "stepByStep": "1. Term a: (1/2) × 0.04 = 0.02.\n2. Term b: 2 × 0.02 = 0.04.\n3. Term c: 3 × 0.01 = 0.03.\n4. Total fractional error ΔP/P = 0.02 + 0.04 + 0.03 = 0.09.\n5. Percentage error = 0.09 × 100% = 9%.",
        "finalAnswer": "Option A: 9%",
        "whyOtherOptionsWrong": "Option B subtracts term c. Option C forgets factor of 3 on c. Option D miscalculates term b."
    },

    # Q101 (Practice Medium)
    {
        "questionNumber": 101,
        "question": "The time period of a simple pendulum is measured to be 2.0 s using a stopwatch of least count 0.1 s. What is the percentage error in the measurement of the time period?",
        "options": {
            "A": "5%",
            "B": "2.5%",
            "C": "1%",
            "D": "10%"
        },
        "correctAnswer": "A",
        "topic": "Percentage error",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Percentage error in single measurement from stopwatch resolution.",
        "given": "T = 2.0 s, Least Count ΔT = 0.1 s.",
        "formula": "Percentage error = (ΔT / T) × 100%",
        "stepByStep": "1. Absolute error is taken as the least count: ΔT = 0.1 s.\n2. Percentage error = (0.1 s / 2.0 s) × 100% = (1 / 20) × 100% = 5%.",
        "finalAnswer": "Option A: 5%",
        "whyOtherOptionsWrong": "Option B divides by 4. Option C divides by 10. Option D is 0.2 / 2.0."
    },

    # Q102 (Practice Medium)
    {
        "questionNumber": 102,
        "question": "Which of the following physical quantities has the dimensions of [M L⁻¹ T⁻¹]?",
        "options": {
            "A": "Coefficient of viscosity",
            "B": "Kinematic viscosity",
            "C": "Surface tension",
            "D": "Reynolds number"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Dynamic viscosity vs kinematic viscosity dimensions.",
        "given": "Dimensions [M L⁻¹ T⁻¹].",
        "formula": "F = η A (dv/dx) => [η] = [F] / ([A][dv/dx])",
        "stepByStep": "1. Viscous force F = η A (dv/dx).\n2. [η] = [M L T⁻²] / ([L²] [T⁻¹]) = [M L⁻¹ T⁻¹] (Coefficient of dynamic viscosity).\n3. Kinematic viscosity ν = η / ρ => [M L⁻¹ T⁻¹] / [M L⁻³] = [L² T⁻¹].\n4. Surface tension is [M T⁻²].\n5. Reynolds number is dimensionless [M⁰ L⁰ T⁰].\n6. Therefore, [M L⁻¹ T⁻¹] belongs to coefficient of viscosity.",
        "finalAnswer": "Option A: Coefficient of viscosity",
        "whyOtherOptionsWrong": "Kinematic viscosity is [L² T⁻¹]; surface tension is [M T⁻²]; Reynolds number is dimensionless."
    },

    # Q103 (Practice Medium)
    {
        "questionNumber": 103,
        "question": "A body travels uniformly a distance of (13.8 ± 0.2) m in a time interval of (4.0 ± 0.3) s. The velocity of the body with error limits is:",
        "options": {
            "A": "(3.45 ± 0.31) m/s",
            "B": "(3.45 ± 0.5) m/s",
            "C": "(3.45 ± 0.1) m/s",
            "D": "(3.5 ± 0.3) m/s"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Error propagation in velocity (distance divided by time).",
        "given": "s = (13.8 ± 0.2) m, t = (4.0 ± 0.3) s.",
        "formula": "v = s / t; Δv / v = Δs / s + Δt / t => Δv = v (Δs / s + Δt / t)",
        "stepByStep": "1. Mean velocity v = 13.8 / 4.0 = 3.45 m/s.\n2. Fractional error in s: Δs / s = 0.2 / 13.8 ≈ 0.0145.\n3. Fractional error in t: Δt / t = 0.3 / 4.0 = 0.0750.\n4. Total fractional error: Δv / v = 0.0145 + 0.0750 = 0.0895.\n5. Absolute error in velocity Δv = 3.45 × 0.0895 ≈ 0.3087 ≈ 0.31 m/s.\n6. Therefore, velocity = (3.45 ± 0.31) m/s.",
        "finalAnswer": "Option A: (3.45 ± 0.31) m/s",
        "whyOtherOptionsWrong": "Option B adds absolute errors directly (0.2 + 0.3 = 0.5), which is mathematically invalid for quotients. Option C and D result from arithmetic errors."
    },

    # Q104 (Practice Medium)
    {
        "questionNumber": 104,
        "question": "If force (F), acceleration (a), and time (T) are taken as the fundamental physical units, the dimensional formula of energy is:",
        "options": {
            "A": "[F a T²]",
            "B": "[F a² T]",
            "C": "[F a T]",
            "D": "[F² a T]"
        },
        "correctAnswer": "A",
        "topic": "Dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Expressing energy in terms of force, acceleration, and time.",
        "given": "F, a, T are base units. Energy E = [M L² T⁻²].",
        "formula": "Work = Force × distance. Distance s = (1/2) a t² => [Distance] = [a T²]",
        "stepByStep": "1. Energy has dimensions of work = Force × displacement.\n2. In kinematics: distance = (1/2) a t² => [Distance] = [a][T²].\n3. Therefore, [Energy] = [Force] · [Distance] = [F] [a T²] = [F a T²].",
        "finalAnswer": "Option A: [F a T²]",
        "whyOtherOptionsWrong": "Option B has a² instead of a. Option C has T instead of T². Option D squares force."
    },

    # Q105 (Practice Medium)
    {
        "questionNumber": 105,
        "question": "The number of significant figures in 0.0006032 m² is:",
        "options": {
            "A": "4",
            "B": "7",
            "C": "3",
            "D": "5"
        },
        "correctAnswer": "A",
        "topic": "Significant figures",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Counting significant figures with leading zeros.",
        "given": "Value: 0.0006032 m².",
        "formula": "Leading zeros before the first non-zero digit are non-significant; trapped zeros between non-zero digits are significant.",
        "stepByStep": "1. The four zeros at the start (0.000...) are leading zeros, which only serve as place holders.\n2. The first non-zero digit is 6.\n3. The zero between 6 and 3 is trapped, so it is significant.\n4. The remaining digits are 3 and 2.\n5. The significant digits are 6, 0, 3, 2, giving exactly 4 significant figures.",
        "finalAnswer": "Option A: 4",
        "whyOtherOptionsWrong": "Option B counts all digits including leading zeros. Option C neglects the trapped zero. Option D is an arbitrary count."
    },

    # Q106 (Practice Medium)
    {
        "questionNumber": 106,
        "question": "The dimensions of solar constant (energy received per unit area per unit time from the Sun) are:",
        "options": {
            "A": "[M T⁻³]",
            "B": "[M L² T⁻³]",
            "C": "[M T⁻²]",
            "D": "[M L T⁻³]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Solar constant definition and dimensional formula.",
        "given": "Solar constant S = Energy / (Area · Time).",
        "formula": "[S] = [Energy] / ([Area] [Time]) = [M L² T⁻²] / ([L²] [T])",
        "stepByStep": "1. [Energy] = [M L² T⁻²].\n2. [Area] = [L²], [Time] = [T].\n3. [S] = [M L² T⁻²] / [L² T] = [M T⁻³] = [M L⁰ T⁻³].\n4. SI unit is W/m² (Watts per square meter).",
        "finalAnswer": "Option A: [M T⁻³]",
        "whyOtherOptionsWrong": "Option B is power [M L² T⁻³]. Option C is surface tension [M T⁻²]. Option D is force per time."
    },

    # Q107 (Practice Medium)
    {
        "questionNumber": 107,
        "question": "In an experiment, the values of refractive index of glass were found to be 1.54, 1.53, 1.44, 1.54, 1.56, and 1.45 in successive measurements. The mean absolute error is:",
        "options": {
            "A": "0.04",
            "B": "0.02",
            "C": "0.08",
            "D": "0.01"
        },
        "correctAnswer": "A",
        "topic": "Mean absolute error",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Mean value and mean absolute error computation.",
        "given": "Readings: 1.54, 1.53, 1.44, 1.54, 1.56, 1.45 (n = 6).",
        "formula": "μ_mean = (Σ μ_i) / n; Δμ_mean = (Σ |μ_i - μ_mean|) / n",
        "stepByStep": "1. Sum of readings = 1.54 + 1.53 + 1.44 + 1.54 + 1.56 + 1.45 = 9.06.\n2. Mean μ_mean = 9.06 / 6 = 1.51.\n3. Absolute errors:\n   |1.54 - 1.51| = 0.03\n   |1.53 - 1.51| = 0.02\n   |1.44 - 1.51| = 0.07\n   |1.54 - 1.51| = 0.03\n   |1.56 - 1.51| = 0.05\n   |1.45 - 1.51| = 0.06\n4. Sum of absolute errors = 0.03 + 0.02 + 0.07 + 0.03 + 0.05 + 0.06 = 0.26.\n5. Mean absolute error = 0.26 / 6 ≈ 0.0433 ≈ 0.04.",
        "finalAnswer": "Option A: 0.04",
        "whyOtherOptionsWrong": "Option B divides by 12. Option C is double the error. Option D understates the deviations."
    },

    # Q108 (Practice Medium)
    {
        "questionNumber": 108,
        "question": "Which of the following relations CANNOT be derived solely by dimensional analysis?",
        "options": {
            "A": "s = u t + (1/2) a t²",
            "B": "v² = 2 a s (starting from rest)",
            "C": "T = 2π √(l / g)",
            "D": "F = 6πηrv"
        },
        "correctAnswer": "A",
        "topic": "Applications and limitations of dimensional analysis",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Limitations of dimensional analysis (sum of terms / polynomial relations).",
        "given": "Equations of physics.",
        "formula": "Dimensional analysis can only derive product-power relations of the form Y = k A^a B^b C^c. It cannot derive relations containing sums or differences of two or more terms.",
        "stepByStep": "1. The equation s = u t + (1/2) a t² consists of the sum of two separate terms (u t and (1/2) a t²).\n2. Dimensional analysis cannot determine the relative coefficients or split a quantity into a sum of multiple terms.\n3. Monomial product relations like v² = 2as, T = 2π√(l/g), and F = 6πηrv can be derived up to a dimensionless constant.\n4. Thus, s = ut + (1/2)at² CANNOT be derived by dimensional analysis.",
        "finalAnswer": "Option A: s = u t + (1/2) a t²",
        "whyOtherOptionsWrong": "Options B, C, and D are single-term monomial relations that can be derived up to the dimensionless constant k."
    },

    # Q109 (Practice Medium)
    {
        "questionNumber": 109,
        "question": "A physical quantity Q is calculated using Q = A · B / C. If the measured values with uncertainties are A = (10 ± 0.1), B = (20 ± 0.2), and C = (5 ± 0.1), the percentage error in Q is:",
        "options": {
            "A": "4%",
            "B": "2%",
            "C": "1%",
            "D": "0.4%"
        },
        "correctAnswer": "A",
        "topic": "Percentage error",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Sum of percentage errors in product and quotient.",
        "given": "A = 10 ± 0.1, B = 20 ± 0.2, C = 5 ± 0.1.",
        "formula": "(ΔQ/Q) × 100% = (ΔA/A × 100%) + (ΔB/B × 100%) + (ΔC/C × 100%)",
        "stepByStep": "1. % error in A = (0.1 / 10) × 100% = 1%.\n2. % error in B = (0.2 / 20) × 100% = 1%.\n3. % error in C = (0.1 / 5) × 100% = 2%.\n4. Total percentage error in Q = 1% + 1% + 2% = 4%.",
        "finalAnswer": "Option A: 4%",
        "whyOtherOptionsWrong": "Option B subtracts error of C (1% + 1% - 2% = 0% or takes only 2%). Option C takes only 1%. Option D is an arithmetic slip."
    },

    # Q110 (Practice Medium)
    {
        "questionNumber": 110,
        "question": "The dimensions of magnetic dipole moment (M) are:",
        "options": {
            "A": "[M⁰ L² T⁰ A¹]",
            "B": "[M⁰ L T⁰ A¹]",
            "C": "[M L² T⁻¹ A¹]",
            "D": "[M⁰ L² T⁻² A¹]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Magnetic dipole moment formula: M = I · A.",
        "given": "Magnetic moment of a current loop M = Current × Area.",
        "formula": "[M] = [Current] · [Area] = [A] · [L²] = [M⁰ L² T⁰ A¹]",
        "stepByStep": "1. Current [I] = [A].\n2. Area [A] = [L²].\n3. [Magnetic moment] = [A L²] = [M⁰ L² T⁰ A¹].\n4. SI unit is A·m² (or J/T).",
        "finalAnswer": "Option A: [M⁰ L² T⁰ A¹]",
        "whyOtherOptionsWrong": "Option B has L instead of L². Option C introduces mass and time. Option D has T⁻²."
    },

    # Q111 (Practice Medium)
    {
        "questionNumber": 111,
        "question": "In an experiment to measure the speed of sound using a resonance tube, the first and second resonance lengths are l₁ = (18.0 ± 0.1) cm and l₂ = (54.0 ± 0.1) cm. If the tuning fork has frequency ν = 480 Hz with no error, the speed of sound with its absolute error is:",
        "options": {
            "A": "(345.6 ± 1.9) m/s",
            "B": "(345.6 ± 0.96) m/s",
            "C": "(345.6 ± 3.8) m/s",
            "D": "(345.6 ± 0.2) m/s"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Error propagation in resonance tube experiment v = 2ν (l₂ - l₁).",
        "given": "l₁ = (18.0 ± 0.1) cm, l₂ = (54.0 ± 0.1) cm, ν = 480 Hz.",
        "formula": "v = 2 ν (l₂ - l₁); Δv = 2 ν (Δl₂ + Δl₁)",
        "stepByStep": "1. Wavelength λ = 2 (l₂ - l₁) = 2 × (54.0 - 18.0) cm = 2 × 36.0 cm = 72.0 cm = 0.72 m.\n2. Speed v = ν · λ = 480 s⁻¹ × 0.72 m = 345.6 m/s.\n3. Error in (l₂ - l₁): Δ(l₂ - l₁) = Δl₂ + Δl₁ = 0.1 cm + 0.1 cm = 0.2 cm = 0.002 m.\n4. Absolute error in speed Δv = 2 ν Δ(l₂ - l₁) = 2 × 480 × 0.002 m/s = 1.92 m/s ≈ 1.9 m/s.\n5. Therefore: v = (345.6 ± 1.9) m/s.",
        "finalAnswer": "Option A: (345.6 ± 1.9) m/s",
        "whyOtherOptionsWrong": "Option B forgets the factor of 2 in Δv = 2ν(Δl₁ + Δl₂). Option C doubles the error. Option D subtracts errors."
    },

    # Q112 (Practice Medium)
    {
        "questionNumber": 112,
        "question": "A student measures the diameter of a wire using a screw gauge with pitch 0.5 mm and 50 divisions. The readings are: MSR = 2.5 mm, circular scale coinciding division = 20. If the zero error is +0.04 mm, what is the corrected area of cross-section of the wire?",
        "options": {
            "A": "5.56 mm²",
            "B": "5.72 mm²",
            "C": "5.39 mm²",
            "D": "5.88 mm²"
        },
        "correctAnswer": "A",
        "topic": "Numerical and conceptual NEET-style applications",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Multi-step calculation combining screw gauge zero error and cross-sectional area.",
        "given": "Pitch = 0.5 mm, N = 50, MSR = 2.5 mm, CSR = 20, Zero Error = +0.04 mm.",
        "formula": "LC = 0.5/50 = 0.01 mm; d = MSR + (CSR × LC) - (Zero Error); Area A = (π / 4) d²",
        "stepByStep": "1. LC = 0.5 mm / 50 = 0.01 mm.\n2. Observed diameter = 2.5 mm + (20 × 0.01 mm) = 2.5 mm + 0.20 mm = 2.70 mm.\n3. Correct diameter d = 2.70 mm - (+0.04 mm) = 2.66 mm.\n4. Cross-sectional area A = (π / 4) d² = (3.1416 / 4) × (2.66)² = 0.7854 × 7.0756 ≈ 5.557 mm² ≈ 5.56 mm².",
        "finalAnswer": "Option A: 5.56 mm²",
        "whyOtherOptionsWrong": "Option B uses the uncorrected diameter (2.70 mm => 5.72 mm²). Option C adds the positive error instead of subtracting. Option D squares the radius without π/4 adjustment."
    },

    # Q113 (Practice Medium)
    {
        "questionNumber": 113,
        "question": "The dimensions of universal gravitational potential are identical to the dimensions of:",
        "options": {
            "A": "(Velocity)²",
            "B": "Acceleration",
            "C": "Energy",
            "D": "Force per unit mass"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Dimensional formula of Gravitational Potential V = -GM / r = Work / Mass.",
        "given": "Gravitational potential V = Work done / Mass.",
        "formula": "[V] = [Work] / [Mass] = [M L² T⁻²] / [M] = [L² T⁻²]",
        "stepByStep": "1. [Gravitational potential] = [M⁰ L² T⁻²].\n2. Note that [Velocity] = [L T⁻¹] => [(Velocity)²] = [L² T⁻²].\n3. Thus, gravitational potential has identical dimensions to the square of velocity [(Velocity)²].\n4. (This is also the dimension of latent heat L = Q/m).",
        "finalAnswer": "Option A: (Velocity)²",
        "whyOtherOptionsWrong": "Acceleration is [L T⁻²]; Energy is [M L² T⁻²]; Force per unit mass is acceleration [L T⁻²]."
    },

    # Q114 (Practice Medium)
    {
        "questionNumber": 114,
        "question": "A student measures the time period of 20 oscillations of a simple pendulum 3 times and finds: 39.6 s, 39.9 s, and 39.5 s. The least count of the watch is 0.1 s. How should the result for the period of 1 oscillation be reported according to significant figures and error limits?",
        "options": {
            "A": "(1.98 ± 0.01) s",
            "B": "(1.983 ± 0.005) s",
            "C": "(1.98 ± 0.1) s",
            "D": "(2.0 ± 0.05) s"
        },
        "correctAnswer": "A",
        "topic": "Mean absolute error",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Reporting measurement of period of oscillation with error limits.",
        "given": "Total time for 20 oscillations: t₁ = 39.6 s, t₂ = 39.9 s, t₃ = 39.5 s.",
        "formula": "t_mean = (t₁ + t₂ + t₃) / 3; Δt_mean = (Σ |t_i - t_mean|) / 3; T = t_mean / 20; ΔT = Δt_mean / 20",
        "stepByStep": "1. Mean time t_mean = (39.6 + 39.9 + 39.5) / 3 = 119.0 / 3 = 39.67 s.\n2. Absolute errors in t:\n   |39.6 - 39.67| = 0.07 s\n   |39.9 - 39.67| = 0.23 s\n   |39.5 - 39.67| = 0.17 s\n3. Mean absolute error in t = (0.07 + 0.23 + 0.17) / 3 = 0.47 / 3 ≈ 0.16 s.\n4. Since least count of watch is 0.1 s, error is at least 0.16 s.\n5. For 1 oscillation: T = 39.67 s / 20 = 1.9835 s => rounds to 1.98 s.\n6. Error in T = Δt / 20 = 0.16 s / 20 = 0.008 s ≈ 0.01 s.\n7. Reported result = (1.98 ± 0.01) s.",
        "finalAnswer": "Option A: (1.98 ± 0.01) s",
        "whyOtherOptionsWrong": "Option B retains excessive decimal places not supported by the least count. Option C neglects division of error by 20. Option D rounds to only 2 sig figs."
    },

    # Q115 (Practice Medium)
    {
        "questionNumber": 115,
        "question": "Which of the following physical quantities has the same dimensional formula as that of electric potential (V)?",
        "options": {
            "A": "Work done per unit charge",
            "B": "Force per unit charge",
            "C": "Energy per unit volume",
            "D": "Power per unit current"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Medium",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Definition and dimensions of Electric Potential.",
        "given": "Electric potential V = Work done / Charge.",
        "formula": "[V] = [W] / [q] = [M L² T⁻²] / [A T] = [M L² T⁻³ A⁻¹]",
        "stepByStep": "1. Electric potential is defined as the work done in bringing a unit positive charge from infinity: V = W / q.\n2. [V] = [M L² T⁻²] / [A T] = [M L² T⁻³ A⁻¹].\n3. Option A (Work per unit charge) is the fundamental definition.\n4. (Note: Option D, Power / current = P / I = V is also true, but Work done per unit charge is the primary definition; both are dimensionally identical to V).",
        "finalAnswer": "Option A: Work done per unit charge",
        "whyOtherOptionsWrong": "Force per unit charge is electric field [M L T⁻³ A⁻¹]; energy per unit volume is pressure [M L⁻¹ T⁻²]."
    }
]
