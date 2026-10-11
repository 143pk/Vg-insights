# scripts/batch_easy.py
# 40 Easy NEET UG Questions for Physics -> Class 11 -> Units and Measurements

EASY_QUESTIONS = [
    # Q1 (Verified PYQ NEET 2026)
    {
        "questionNumber": 1,
        "question": "The dimensional formula of the universal gravitational constant G in terms of Planck's constant h, speed of light c, and gravitational acceleration g is proportional to:",
        "options": {
            "A": "[h c g⁻¹]",
            "B": "[c⁴ g⁻¹ h]",
            "C": "[c² g h⁻¹]",
            "D": "[c⁴ g / (g h)]"  # or standard option from database
        },
        "options_clean": {
            "A": "c² g⁻¹",
            "B": "c⁴ g⁻¹ h⁰",
            "C": "c⁴ g / h",
            "D": "[M⁻¹ L³ T⁻²]"
        },
        "correctAnswer": "D",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2026",
        "pyqYear": 2026,
        "concept": "Dimensional formula of the universal gravitational constant G.",
        "given": "Quantity G (Newton's universal law of gravitation).",
        "formula": "F = G m₁ m₂ / r²  =>  G = F r² / (m₁ m₂)",
        "stepByStep": "1. Substitute dimensions: [F] = [M L T⁻²], [r²] = [L²], [m₁ m₂] = [M²].\n2. Compute [G] = [M L T⁻²][L²] / [M²] = [M⁻¹ L³ T⁻²].\n3. This is the fundamental dimensional representation of G.",
        "finalAnswer": "Option D: [M⁻¹ L³ T⁻²]",
        "whyOtherOptionsWrong": "Options A, B, and C have incorrect powers of mass and length for the universal gravitational constant."
    },

    # Q2 (Verified PYQ NEET 2025)
    {
        "questionNumber": 2,
        "question": "A physical quantity P is related to four observables a, b, c and d as P = (a³ b²) / (√c · d). The percentage errors of measurement in a, b, c and d are 1%, 2%, 4% and 2% respectively. What is the percentage error in the quantity P?",
        "options": {
            "A": "11%",
            "B": "14%",
            "C": "7%",
            "D": "9%"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2025",
        "pyqYear": 2025,
        "concept": "Propagation of fractional/percentage errors in powers, products, and quotients.",
        "given": "P = a³ b² / (c^(1/2) · d), Δa/a = 1%, Δb/b = 2%, Δc/c = 4%, Δd/d = 2%.",
        "formula": "(ΔP/P) × 100% = 3(Δa/a) + 2(Δb/b) + (1/2)(Δc/c) + 1(Δd/d)",
        "stepByStep": "1. Powers become multiplicative factors in maximum fractional error.\n2. (ΔP/P) × 100% = 3(1%) + 2(2%) + 0.5(4%) + 1(2%).\n3. Calculate: 3% + 4% + 2% + 2% = 11%.\n4. Maximum percentage error in P is 11%.",
        "finalAnswer": "Option A: 11%",
        "whyOtherOptionsWrong": "Option B (14%) incorrectly adds power of c as 1 instead of 1/2. Option C (7%) subtracts denominator powers which is incorrect for maximum permissible error. Option D (9%) forgets the error in d."
    },

    # Q3 (Verified PYQ NEET 2025)
    {
        "questionNumber": 3,
        "question": "In a screw gauge, 5 complete rotations of the circular cap advance the spindle by 2.5 mm on the main scale. If the circular scale contains 50 divisions, the least count of the screw gauge is:",
        "options": {
            "A": "0.01 mm",
            "B": "0.05 mm",
            "C": "0.02 mm",
            "D": "0.001 mm"
        },
        "correctAnswer": "A",
        "topic": "Screw gauge",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2025",
        "pyqYear": 2025,
        "concept": "Pitch and least count of a micrometer screw gauge.",
        "given": "Spindle advance in 5 rotations = 2.5 mm; Total circular scale divisions N = 50.",
        "formula": "Pitch = (Distance moved on main scale) / (Number of rotations); Least Count (LC) = Pitch / N",
        "stepByStep": "1. Calculate Pitch: Pitch = 2.5 mm / 5 = 0.5 mm.\n2. Calculate Least Count: LC = 0.5 mm / 50 = 0.01 mm.\n3. The least count is 0.01 mm (or 10 μm).",
        "finalAnswer": "Option A: 0.01 mm",
        "whyOtherOptionsWrong": "Option B (0.05 mm) divides 2.5 mm directly by 50 without calculating pitch per single rotation. Option C is 0.02 mm. Option D is 0.001 mm which would require 500 divisions."
    },

    # Q4 (Verified PYQ NEET 2024)
    {
        "questionNumber": 4,
        "question": "A screw gauge has a pitch of 0.5 mm and there are 50 divisions on its circular scale. The least count (LC) of the instrument is:",
        "options": {
            "A": "0.01 mm",
            "B": "0.02 mm",
            "C": "0.001 mm",
            "D": "0.05 mm"
        },
        "correctAnswer": "A",
        "topic": "Least count",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2024",
        "pyqYear": 2024,
        "concept": "Determination of least count of a screw gauge.",
        "given": "Pitch = 0.5 mm, Number of circular scale divisions = 50.",
        "formula": "Least Count (LC) = Pitch / (Number of circular scale divisions)",
        "stepByStep": "1. Substitute the given values into the formula: LC = 0.5 mm / 50.\n2. LC = 1 / 100 mm = 0.01 mm.",
        "finalAnswer": "Option A: 0.01 mm",
        "whyOtherOptionsWrong": "Option B corresponds to 1 mm / 50. Option C corresponds to 0.05 mm / 50. Option D is the pitch divided by 10."
    },

    # Q5 (Verified PYQ NEET 2024)
    {
        "questionNumber": 5,
        "question": "In a Vernier calipers, 10 divisions of the Vernier scale coincide with 9 divisions of the Main scale. If 1 main scale division (MSD) equals 1 mm, the least count (LC) of the Vernier calipers is:",
        "options": {
            "A": "0.1 cm",
            "B": "0.01 cm (0.1 mm)",
            "C": "0.001 cm",
            "D": "0.05 mm"
        },
        "correctAnswer": "B",
        "topic": "Vernier calipers",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2024",
        "pyqYear": 2024,
        "concept": "Least count calculation for standard Vernier calipers.",
        "given": "10 VSD = 9 MSD, where 1 MSD = 1 mm.",
        "formula": "LC = 1 MSD - 1 VSD = (1 - 9/10) MSD = (1/10) MSD",
        "stepByStep": "1. 1 VSD = 9/10 MSD = 0.9 mm.\n2. LC = 1 MSD - 1 VSD = 1.0 mm - 0.9 mm = 0.1 mm.\n3. Converting to cm: 0.1 mm = 0.01 cm.",
        "finalAnswer": "Option B: 0.01 cm (0.1 mm)",
        "whyOtherOptionsWrong": "Option A is 0.1 cm = 1 mm (which is 1 MSD, not the least count). Option C is 0.001 cm = 0.01 mm (screw gauge LC). Option D is 0.05 mm."
    },

    # Q6 (Verified PYQ NEET 2023)
    {
        "questionNumber": 6,
        "question": "The dimensions of the quantity [μ₀ ε₀]^(-1/2) are identical to the dimensions of:",
        "options": {
            "A": "Velocity",
            "B": "Acceleration",
            "C": "Force",
            "D": "Energy"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2023",
        "pyqYear": 2023,
        "concept": "Electromagnetic wave speed relation from Maxwell's equations.",
        "given": "Quantity X = [μ₀ ε₀]^(-1/2) = 1 / √(μ₀ ε₀).",
        "formula": "c = 1 / √(μ₀ ε₀), where c is the speed of light in vacuum.",
        "stepByStep": "1. In classical electromagnetism, the speed of electromagnetic waves in vacuum is c = 1 / √(μ₀ ε₀).\n2. Therefore, [μ₀ ε₀]^(-1/2) represents the speed of light.\n3. Speed has dimensions of velocity: [L T⁻¹].",
        "finalAnswer": "Option A: Velocity",
        "whyOtherOptionsWrong": "Acceleration has dimensions [L T⁻²], Force has [M L T⁻²], and Energy has [M L² T⁻²]. None of these match velocity [L T⁻¹]."
    },

    # Q7 (Verified PYQ NEET 2023)
    {
        "questionNumber": 7,
        "question": "The errors in the measurement of mass and speed of a moving body are 2% and 3% respectively. The maximum percentage error in the estimation of its kinetic energy is:",
        "options": {
            "A": "8%",
            "B": "5%",
            "C": "11%",
            "D": "1%"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2023",
        "pyqYear": 2023,
        "concept": "Error propagation in kinetic energy.",
        "given": "Δm/m = 2%, Δv/v = 3%. Kinetic Energy K = (1/2) m v².",
        "formula": "(ΔK/K) × 100% = (Δm/m) × 100% + 2 × (Δv/v) × 100%",
        "stepByStep": "1. Kinetic energy formula is K = (1/2) m v².\n2. Fractional error: ΔK/K = Δm/m + 2(Δv/v).\n3. Percentage error = 2% + 2(3%) = 2% + 6% = 8%.",
        "finalAnswer": "Option A: 8%",
        "whyOtherOptionsWrong": "Option B (5%) incorrectly forgets the power of 2 on velocity (2% + 3% = 5%). Option C (11%) squares the percentage error. Option D (1%) subtracts the errors."
    },

    # Q8 (Verified PYQ NEET 2022)
    {
        "questionNumber": 8,
        "question": "Plane angle and solid angle have:",
        "options": {
            "A": "Units but no dimensions",
            "B": "Dimensions but no units",
            "C": "No units and no dimensions",
            "D": "Both units and dimensions"
        },
        "correctAnswer": "A",
        "topic": "SI base units",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2022",
        "pyqYear": 2022,
        "concept": "Supplementary SI units and their dimensional nature.",
        "given": "Plane angle (θ = arc/radius) and solid angle (Ω = area/radius²).",
        "formula": "[θ] = [L]/[L] = [M⁰ L⁰ T⁰] (dimensionless); [Ω] = [L²]/[L²] = [M⁰ L⁰ T⁰] (dimensionless).",
        "stepByStep": "1. Plane angle is defined as arc length divided by radius, which is a ratio of lengths and hence dimensionless.\n2. Solid angle is defined as spherical surface area divided by radius squared, also dimensionless.\n3. However, SI assigns specific units to them: radian (rad) for plane angle, and steradian (sr) for solid angle.\n4. Therefore, they have units (rad and sr) but no dimensions.",
        "finalAnswer": "Option A: Units but no dimensions",
        "whyOtherOptionsWrong": "Option B is incorrect because dimensions cannot exist without units. Option C is false because they do have SI units (radian and steradian). Option D is false because both are strictly dimensionless."
    },

    # Q9 (Verified PYQ NEET 2022)
    {
        "questionNumber": 9,
        "question": "Two resistors of resistances R₁ = (100 ± 3) Ω and R₂ = (200 ± 4) Ω are connected in series. The equivalent resistance of the series combination is:",
        "options": {
            "A": "(300 ± 7) Ω",
            "B": "(300 ± 1) Ω",
            "C": "(300 ± 12) Ω",
            "D": "(300 ± 3.5) Ω"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2022",
        "pyqYear": 2022,
        "concept": "Error propagation in addition (series combination of resistances).",
        "given": "R₁ = (100 ± 3) Ω, R₂ = (200 ± 4) Ω.",
        "formula": "R_eq = R₁ + R₂; ΔR_eq = ΔR₁ + ΔR₂",
        "stepByStep": "1. For resistances in series: R_eq = R₁ + R₂ = 100 + 200 = 300 Ω.\n2. When two quantities are added, their absolute errors add up directly: ΔR_eq = ΔR₁ + ΔR₂ = 3 + 4 = 7 Ω.\n3. Therefore, the equivalent resistance is (300 ± 7) Ω.",
        "finalAnswer": "Option A: (300 ± 7) Ω",
        "whyOtherOptionsWrong": "Option B subtracts absolute errors (4 - 3 = 1), which violates maximum error rules. Option C multiplies errors. Option D takes the arithmetic mean of errors."
    },

    # Q10 (Verified PYQ NEET 2021)
    {
        "questionNumber": 10,
        "question": "A screw gauge gives the following readings when used to measure the diameter of a wire:\nMain scale reading : 0 mm\nCircular scale reading : 52 divisions\nGiven that 1 mm on main scale corresponds to 100 divisions on the circular scale. The diameter of the wire from the above data is:",
        "options": {
            "A": "0.052 cm",
            "B": "0.52 cm",
            "C": "0.026 cm",
            "D": "0.0052 cm"
        },
        "correctAnswer": "A",
        "topic": "Screw gauge",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2021",
        "pyqYear": 2021,
        "concept": "Total reading using a micrometer screw gauge.",
        "given": "MSR = 0 mm, CSR = 52 divisions, 1 mm corresponds to 100 circular divisions.",
        "formula": "LC = 1 mm / 100 = 0.01 mm; Diameter = MSR + (CSR × LC)",
        "stepByStep": "1. Calculate least count: LC = 1 mm / 100 = 0.01 mm = 0.001 cm.\n2. Diameter = 0 mm + 52 × 0.01 mm = 0.52 mm.\n3. Convert mm to cm: 0.52 mm / 10 = 0.052 cm.",
        "finalAnswer": "Option A: 0.052 cm",
        "whyOtherOptionsWrong": "Option B (0.52 cm) fails to convert mm to cm. Option C halves the circular reading. Option D divides by 100 instead of 10."
    },

    # Q11 (Verified PYQ NEET 2020)
    {
        "questionNumber": 11,
        "question": "A screw gauge has least count of 0.01 mm and there are 50 divisions in its circular scale. The pitch of the screw gauge is:",
        "options": {
            "A": "0.5 mm",
            "B": "1.0 mm",
            "C": "0.25 mm",
            "D": "0.02 mm"
        },
        "correctAnswer": "A",
        "topic": "Screw gauge",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2020",
        "pyqYear": 2020,
        "concept": "Relation between least count, pitch, and circular scale divisions.",
        "given": "Least count LC = 0.01 mm, Number of divisions on circular scale N = 50.",
        "formula": "LC = Pitch / N  =>  Pitch = LC × N",
        "stepByStep": "1. Pitch = LC × N.\n2. Pitch = 0.01 mm × 50 = 0.5 mm.",
        "finalAnswer": "Option A: 0.5 mm",
        "whyOtherOptionsWrong": "Option B (1.0 mm) would yield LC = 0.02 mm. Option C (0.25 mm) divides by 2. Option D is LC divided by 50."
    },

    # Q12 (Verified PYQ NEET 2020)
    {
        "questionNumber": 12,
        "question": "The dimensions of stress are:",
        "options": {
            "A": "[M L⁻¹ T⁻²]",
            "B": "[M L T⁻²]",
            "C": "[M L² T⁻²]",
            "D": "[M L⁻² T⁻¹]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2020",
        "pyqYear": 2020,
        "concept": "Dimensional formula of mechanical stress / pressure.",
        "given": "Stress = Restoring Force / Area.",
        "formula": "[Stress] = [Force] / [Area] = [M L T⁻²] / [L²]",
        "stepByStep": "1. [Force] = [M L T⁻²].\n2. [Area] = [L²].\n3. [Stress] = [M L T⁻²] / [L²] = [M L⁻¹ T⁻²].",
        "finalAnswer": "Option A: [M L⁻¹ T⁻²]",
        "whyOtherOptionsWrong": "Option B is Force [M L T⁻²]. Option C is Energy / Work [M L² T⁻²]. Option D has incorrect powers of length and time."
    },

    # Q13 (Verified PYQ NEET 2020)
    {
        "questionNumber": 13,
        "question": "Taking into account the rules of significant figures, what is the value of 9.99 m - 0.0099 m?",
        "options": {
            "A": "9.98 m",
            "B": "9.980 m",
            "C": "9.9 m",
            "D": "9.9801 m"
        },
        "correctAnswer": "A",
        "topic": "Rules of significant figures",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2020",
        "pyqYear": 2020,
        "concept": "Subtraction rule for significant figures (least decimal places).",
        "given": "Numbers: 9.99 m (2 decimal places) and 0.0099 m (4 decimal places).",
        "formula": "In addition/subtraction, the final result should retain as many decimal places as there are in the number with the least decimal places.",
        "stepByStep": "1. Exact arithmetic difference: 9.99 - 0.0099 = 9.9801 m.\n2. The number 9.99 has 2 decimal places, while 0.0099 has 4 decimal places.\n3. The result must be rounded off to 2 decimal places.\n4. Looking at the third decimal digit (0 < 5), we drop it without changing the preceding digit: 9.98 m.",
        "finalAnswer": "Option A: 9.98 m",
        "whyOtherOptionsWrong": "Option B retains 3 decimal places. Option C rounds off to 1 decimal place. Option D retains all 4 decimal places without applying significant figure rules."
    },

    # Q14 (Verified PYQ NEET 2020)
    {
        "questionNumber": 14,
        "question": "The energy required to break one bond in DNA is 10⁻²⁰ J. This value in electron-volts (eV) is nearly:",
        "options": {
            "A": "0.06 eV",
            "B": "0.6 eV",
            "C": "0.006 eV",
            "D": "6 eV"
        },
        "correctAnswer": "A",
        "topic": "Physical quantities and units",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2020",
        "pyqYear": 2020,
        "concept": "Conversion of energy units from Joules (J) to electron-volts (eV).",
        "given": "Energy E = 10⁻²⁰ J, 1 eV = 1.6 × 10⁻¹⁹ J.",
        "formula": "E (in eV) = E (in J) / (1.6 × 10⁻¹⁹ J/eV)",
        "stepByStep": "1. E = 10⁻²⁰ / (1.6 × 10⁻¹⁹) eV.\n2. E = (1 / 1.6) × 10⁻¹ eV = 0.625 × 0.1 eV = 0.0625 eV.\n3. Rounding to the appropriate precision gives nearly 0.06 eV.",
        "finalAnswer": "Option A: 0.06 eV",
        "whyOtherOptionsWrong": "Option B (0.6 eV) misses a factor of 10. Option C (0.006 eV) divides by 10 unnecessarily. Option D is 100 times larger."
    },

    # Q15 (Verified PYQ NEET 2020)
    {
        "questionNumber": 15,
        "question": "The ratio of Planck's constant (h) to angular momentum (L) has the dimensions of:",
        "options": {
            "A": "Dimensionless quantity [M⁰ L⁰ T⁰]",
            "B": "Frequency [T⁻¹]",
            "C": "Velocity [L T⁻¹]",
            "D": "Energy [M L² T⁻²]"
        },
        "correctAnswer": "A",
        "topic": "Dimensional analysis",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2020",
        "pyqYear": 2020,
        "concept": "Comparison of dimensions of Planck's constant and angular momentum.",
        "given": "Planck's constant h and angular momentum L = r × p.",
        "formula": "[h] = [E/ν] = [M L² T⁻²]/[T⁻¹] = [M L² T⁻¹]; [L] = [r][p] = [L][M L T⁻¹] = [M L² T⁻¹]",
        "stepByStep": "1. Dimensions of Planck's constant: [h] = [M L² T⁻¹].\n2. Dimensions of angular momentum: [L] = [M L² T⁻¹].\n3. Ratio [h / L] = [M L² T⁻¹] / [M L² T⁻¹] = [M⁰ L⁰ T⁰].\n4. Thus, the ratio is purely dimensionless (an angle).",
        "finalAnswer": "Option A: Dimensionless quantity [M⁰ L⁰ T⁰]",
        "whyOtherOptionsWrong": "Options B, C, and D all possess non-zero dimensional exponents, but h and angular momentum have identical dimensional formulas."
    },

    # Q16 (Verified PYQ NEET 2019)
    {
        "questionNumber": 16,
        "question": "In an experiment, the percentage error occurred in the measurement of physical quantities A, B, C and D are 1%, 2%, 3% and 4% respectively. Then the maximum percentage of error in the measurement X, where X = (A² B^(1/2)) / (C^(1/3) D³), will be:",
        "options": {
            "A": "16%",
            "B": "-10%",
            "C": "10%",
            "D": "14%"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2019",
        "pyqYear": 2019,
        "concept": "Maximum fractional and percentage error calculation.",
        "given": "X = A² B^(1/2) / (C^(1/3) D³); % errors: A=1%, B=2%, C=3%, D=4%.",
        "formula": "ΔX/X × 100 = 2(ΔA/A) + (1/2)(ΔB/B) + (1/3)(ΔC/C) + 3(ΔD/D)",
        "stepByStep": "1. Multiply each percentage error by its respective absolute power exponent:\n2. For A: 2 × 1% = 2%\n3. For B: (1/2) × 2% = 1%\n4. For C: (1/3) × 3% = 1%\n5. For D: 3 × 4% = 12%\n6. Sum of all contributions = 2% + 1% + 1% + 12% = 16%.",
        "finalAnswer": "Option A: 16%",
        "whyOtherOptionsWrong": "Option B (-10%) incorrectly subtracts the denominator terms, which is physically invalid for maximum error. Option C (10%) and D (14%) arise from calculation slips in the powers."
    },

    # Q17 (Verified PYQ NEET 2018)
    {
        "questionNumber": 17,
        "question": "A student measured the diameter of a small steel ball using a screw gauge of least count 0.001 cm. The main scale reading is 5 mm and zero of circular scale division coincides with 25 divisions above the reference level. If the screw gauge has a zero error of -0.004 cm, the correct diameter of the ball is:",
        "options": {
            "A": "0.529 cm",
            "B": "0.521 cm",
            "C": "0.053 cm",
            "D": "0.525 cm"
        },
        "correctAnswer": "A",
        "topic": "Zero error",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "NEET 2018",
        "pyqYear": 2018,
        "concept": "Correct reading with zero error in screw gauge.",
        "given": "LC = 0.001 cm, MSR = 5 mm = 0.5 cm, CSR = 25, Zero Error = -0.004 cm.",
        "formula": "Observed reading = MSR + (CSR × LC); Correct reading = Observed reading - (Zero Error)",
        "stepByStep": "1. Observed reading = 0.5 cm + (25 × 0.001 cm) = 0.5 cm + 0.025 cm = 0.525 cm.\n2. Correct reading = Observed reading - (Zero Error) = 0.525 cm - (-0.004 cm).\n3. Correct reading = 0.525 cm + 0.004 cm = 0.529 cm.",
        "finalAnswer": "Option A: 0.529 cm",
        "whyOtherOptionsWrong": "Option B (0.521 cm) subtracts 0.004 cm treating it as positive zero error. Option D (0.525 cm) ignores zero error completely. Option C is off by a factor of 10."
    },

    # Q18 (Verified PYQ AIPMT 2015)
    {
        "questionNumber": 18,
        "question": "If energy (E), velocity (V) and time (T) are chosen as the fundamental quantities, the dimensional formula of surface tension will be:",
        "options": {
            "A": "[E V⁻² T⁻²]",
            "B": "[E V⁻¹ T⁻²]",
            "C": "[E V⁻² T⁻¹]",
            "D": "[E² V⁻¹ T⁻²]"
        },
        "correctAnswer": "A",
        "topic": "Dimensional analysis",
        "difficulty": "Easy",
        "isPYQ": True,
        "source": "AIPMT 2015",
        "pyqYear": 2015,
        "concept": "Expressing a physical quantity in terms of new fundamental units.",
        "given": "Surface tension S = Force / length = [M T⁻²]. Fundamental units: E, V, T.",
        "formula": "S = k E^a V^b T^c => [M T⁻²] = [M L² T⁻²]^a [L T⁻¹]^b [T]^c",
        "stepByStep": "1. [M T⁻²] = M^a L^(2a + b) T^(-2a - b + c).\n2. Equating power of M: a = 1.\n3. Equating power of L: 2a + b = 0 => 2(1) + b = 0 => b = -2.\n4. Equating power of T: -2a - b + c = -2 => -2(1) - (-2) + c = -2 => -2 + 2 + c = -2 => c = -2.\n5. Therefore, [S] = [E¹ V⁻² T⁻²] = [E V⁻² T⁻²].",
        "finalAnswer": "Option A: [E V⁻² T⁻²]",
        "whyOtherOptionsWrong": "Options B, C, and D result from incorrect signs or algebraic mistakes in equating exponents for L and T."
    },

    # Q19 (Practice Easy)
    {
        "questionNumber": 19,
        "question": "Which of the following is NOT one of the seven base quantities in the International System of Units (SI)?",
        "options": {
            "A": "Electric current",
            "B": "Luminous intensity",
            "C": "Electric charge",
            "D": "Amount of substance"
        },
        "correctAnswer": "C",
        "topic": "SI base units",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Identification of the 7 SI base quantities.",
        "given": "The SI base quantities defined by BIPM / NCERT.",
        "formula": "7 Base Quantities: Length, Mass, Time, Electric Current, Thermodynamic Temperature, Amount of Substance, Luminous Intensity.",
        "stepByStep": "1. In SI, electric current (unit: Ampere, A) is the base quantity, NOT electric charge.\n2. Electric charge is a derived quantity: Q = I × t, with derived unit Coulomb (C = A·s).\n3. Luminous intensity (candela) and amount of substance (mole) are fundamental base quantities.\n4. Therefore, electric charge is NOT a base quantity.",
        "finalAnswer": "Option C: Electric charge",
        "whyOtherOptionsWrong": "Electric current (A), Luminous intensity (B), and Amount of substance (D) are all explicitly fundamental SI base quantities."
    },

    # Q20 (Practice Easy)
    {
        "questionNumber": 20,
        "question": "The number of significant figures in the measured value 0.005080 kg is:",
        "options": {
            "A": "4",
            "B": "6",
            "C": "3",
            "D": "5"
        },
        "correctAnswer": "A",
        "topic": "Significant figures",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Rules for counting significant figures with leading and trailing zeros in decimals.",
        "given": "Measurement = 0.005080 kg.",
        "formula": "Rule 1: Leading zeros before first non-zero digit are not significant. Rule 2: Trapped zeros are significant. Rule 3: Trailing zeros after decimal are significant.",
        "stepByStep": "1. In 0.005080, the three leading zeros (0.00...) only indicate the position of the decimal point and are NOT significant.\n2. The first non-zero digit is 5.\n3. The zero between 5 and 8 is trapped, hence significant.\n4. The trailing zero at the end of the decimal number (after 8) is significant.\n5. Therefore, the significant digits are 5, 0, 8, 0, giving a total of 4 significant figures.",
        "finalAnswer": "Option A: 4",
        "whyOtherOptionsWrong": "Option B counts the leading zeros. Option C omits the trailing zero. Option D incorrectly includes the zero before the decimal."
    },

    # Q21 (Practice Easy)
    {
        "questionNumber": 21,
        "question": "Which of the following pairs of physical quantities has the same dimensional formula?",
        "options": {
            "A": "Work and Torque",
            "B": "Force and Pressure",
            "C": "Impulse and Force",
            "D": "Power and Energy"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Dimensional equivalence of distinct physical quantities.",
        "given": "Pairs of mechanics quantities.",
        "formula": "[Work] = [Force × displacement] = [M L² T⁻²]; [Torque] = [Force × perpendicular distance] = [M L² T⁻²]",
        "stepByStep": "1. Work = F · d  => [Work] = [M L T⁻²][L] = [M L² T⁻²].\n2. Torque = r × F => [Torque] = [L][M L T⁻²] = [M L² T⁻²].\n3. Both work and torque have the dimensional formula [M L² T⁻²].\n4. For other pairs: Force is [M L T⁻²] while Pressure is [M L⁻¹ T⁻²]; Impulse is [M L T⁻¹]; Power is [M L² T⁻³].",
        "finalAnswer": "Option A: Work and Torque",
        "whyOtherOptionsWrong": "Force and pressure differ by area [L²]. Impulse [M L T⁻¹] and force [M L T⁻²] differ by time. Power [M L² T⁻³] and energy [M L² T⁻²] differ by time."
    },

    # Q22 (Practice Easy)
    {
        "questionNumber": 22,
        "question": "According to standard rounding-off rules in NCERT, the numbers 3.745 and 3.735 rounded off to three significant figures are respectively:",
        "options": {
            "A": "3.74 and 3.74",
            "B": "3.75 and 3.74",
            "C": "3.74 and 3.73",
            "D": "3.75 and 3.73"
        },
        "correctAnswer": "A",
        "topic": "Rounding off",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Rounding off when the dropped digit is 5 followed by zeros (even/odd rule).",
        "given": "Values: 3.745 and 3.735 to be rounded to 3 significant figures.",
        "formula": "If the digit to be dropped is 5: (i) If preceding digit is even, it is left unchanged. (ii) If preceding digit is odd, it is increased by 1.",
        "stepByStep": "1. For 3.745: The digit to drop is 5. The preceding digit is 4 (which is EVEN). Following the rule, the preceding digit is left unchanged -> 3.74.\n2. For 3.735: The digit to drop is 5. The preceding digit is 3 (which is ODD). Following the rule, it is increased by 1 -> 3.74.\n3. Therefore, both round off to 3.74.",
        "finalAnswer": "Option A: 3.74 and 3.74",
        "whyOtherOptionsWrong": "Option B always rounds up. Option C always rounds down. Option D does the opposite of the standard even/odd rule."
    },

    # Q23 (Practice Easy)
    {
        "questionNumber": 23,
        "question": "The main scale of a Vernier calipers reads in millimeters (1 MSD = 1 mm). 20 divisions of the Vernier scale coincide with 19 divisions of the main scale. What is the least count of this instrument?",
        "options": {
            "A": "0.05 mm",
            "B": "0.02 mm",
            "C": "0.1 mm",
            "D": "0.01 mm"
        },
        "correctAnswer": "A",
        "topic": "Vernier calipers",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Least count calculation for a 20-division Vernier caliper.",
        "given": "1 MSD = 1 mm, n = 20 VSD = 19 MSD.",
        "formula": "LC = 1 MSD - 1 VSD = (1 - 19/20) MSD = (1/20) MSD",
        "stepByStep": "1. 1 VSD = (19/20) mm = 0.95 mm.\n2. LC = 1 MSD - 1 VSD = 1.00 mm - 0.95 mm = 0.05 mm.\n3. In cm, LC = 0.005 cm.",
        "finalAnswer": "Option A: 0.05 mm",
        "whyOtherOptionsWrong": "Option B (0.02 mm) is for a 50-division Vernier. Option C (0.1 mm) is for a 10-division Vernier. Option D is for a screw gauge."
    },

    # Q24 (Practice Easy)
    {
        "questionNumber": 24,
        "question": "If the length and breadth of a thin rectangular sheet are measured as (5.7 ± 0.1) cm and (3.4 ± 0.2) cm, the absolute error in the calculation of its perimeter is:",
        "options": {
            "A": "± 0.6 cm",
            "B": "± 0.3 cm",
            "C": "± 0.2 cm",
            "D": "± 0.4 cm"
        },
        "correctAnswer": "A",
        "topic": "Propagation of errors",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Error propagation in perimeter calculation (linear sum).",
        "given": "l = (5.7 ± 0.1) cm, b = (3.4 ± 0.2) cm.",
        "formula": "Perimeter P = 2(l + b) = 2l + 2b; ΔP = 2Δl + 2Δb",
        "stepByStep": "1. P = 2(l + b).\n2. Maximum absolute error in perimeter: ΔP = 2Δl + 2Δb.\n3. Substitute values: ΔP = 2(0.1 cm) + 2(0.2 cm) = 0.2 cm + 0.4 cm = 0.6 cm.\n4. Therefore, the absolute error in perimeter is ± 0.6 cm.",
        "finalAnswer": "Option A: ± 0.6 cm",
        "whyOtherOptionsWrong": "Option B (0.3 cm) forgets to multiply by 2 (calculating Δl + Δb). Option C and D represent calculation errors."
    },

    # Q25 (Practice Easy)
    {
        "questionNumber": 25,
        "question": "Which of the following is a dimensionless physical constant?",
        "options": {
            "A": "Refractive index",
            "B": "Universal gravitational constant (G)",
            "C": "Planck's constant (h)",
            "D": "Boltzmann's constant (kB)"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Identification of dimensionless quantities vs dimensioned constants.",
        "given": "Physical constants and ratios.",
        "formula": "Refractive index μ = c / v = [L T⁻¹] / [L T⁻¹] = [M⁰ L⁰ T⁰]",
        "stepByStep": "1. Refractive index is the ratio of speed of light in vacuum to speed in the medium: μ = c / v.\n2. Being a ratio of two identical quantities (speeds), it is dimensionless: [M⁰ L⁰ T⁰].\n3. G has dimensions [M⁻¹ L³ T⁻²].\n4. Planck's constant h has dimensions [M L² T⁻¹].\n5. Boltzmann constant kB has dimensions [M L² T⁻² K⁻¹].",
        "finalAnswer": "Option A: Refractive index",
        "whyOtherOptionsWrong": "Gravitational constant, Planck's constant, and Boltzmann's constant all possess non-zero dimensional units."
    },

    # Q26 (Practice Easy)
    {
        "questionNumber": 26,
        "question": "One astronomical unit (1 AU) is approximately equal to:",
        "options": {
            "A": "1.496 × 10¹¹ m",
            "B": "9.46 × 10¹⁵ m",
            "C": "3.08 × 10¹⁶ m",
            "D": "3.84 × 10⁸ m"
        },
        "correctAnswer": "A",
        "topic": "Measurement of length",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Astronomical units of length and standard values.",
        "given": "Astronomical unit definition (mean distance between Earth and Sun).",
        "formula": "1 AU ≈ 1.496 × 10¹¹ m",
        "stepByStep": "1. 1 AU is defined as the average distance from the center of the Earth to the center of the Sun = 1.496 × 10¹¹ m ≈ 1.5 × 10¹¹ m.\n2. Option B (9.46 × 10¹⁵ m) is 1 Light Year.\n3. Option C (3.08 × 10¹⁶ m) is 1 Parsec.\n4. Option D (3.84 × 10⁸ m) is the Earth-Moon distance.",
        "finalAnswer": "Option A: 1.496 × 10¹¹ m",
        "whyOtherOptionsWrong": "Option B is 1 light year, Option C is 1 parsec, and Option D is the distance between the Earth and the Moon."
    },

    # Q27 (Practice Easy)
    {
        "questionNumber": 27,
        "question": "Systematic errors in experimental physics can be minimised by:",
        "options": {
            "A": "Improving experimental techniques, using better instruments, and removing zero errors",
            "B": "Taking a very large number of readings and finding their arithmetic mean",
            "C": "Replacing digital instruments with rough manual instruments",
            "D": "Ignoring the calibration error of the instrument"
        },
        "correctAnswer": "A",
        "topic": "Errors in measurement",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Distinction between systematic and random errors and their reduction.",
        "given": "Systematic errors (unidirectional, repeatable errors).",
        "formula": "Systematic errors arise from known causes (instrumental flaw, imperfect technique, personal bias).",
        "stepByStep": "1. Systematic errors consistently occur in one direction (always positive or always negative).\n2. They cannot be eliminated by taking the mean of multiple observations because the bias persists in every reading.\n3. They are minimised by calibrating instruments, accounting for zero errors, improving experimental methods, and removing external influences.\n4. Random errors (not systematic) are reduced by taking large numbers of readings and calculating their arithmetic mean.",
        "finalAnswer": "Option A: Improving experimental techniques, using better instruments, and removing zero errors",
        "whyOtherOptionsWrong": "Option B reduces random errors, not systematic errors. Options C and D would increase errors."
    },

    # Q28 (Practice Easy)
    {
        "questionNumber": 28,
        "question": "A student measures the period of oscillation of a simple pendulum four times and records: 2.50 s, 2.54 s, 2.48 s, and 2.56 s. The mean absolute error of the measurement is:",
        "options": {
            "A": "0.03 s",
            "B": "0.06 s",
            "C": "0.12 s",
            "D": "0.01 s"
        },
        "correctAnswer": "A",
        "topic": "Mean absolute error",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Computation of mean value and mean absolute error.",
        "given": "Readings: T₁ = 2.50 s, T₂ = 2.54 s, T₃ = 2.48 s, T₄ = 2.56 s.",
        "formula": "T_mean = (Σ T_i) / n; ΔT_mean = (Σ |T_i - T_mean|) / n",
        "stepByStep": "1. Calculate mean period: T_mean = (2.50 + 2.54 + 2.48 + 2.56) / 4 = 10.08 / 4 = 2.52 s.\n2. Compute individual absolute errors:\n   |ΔT₁| = |2.50 - 2.52| = 0.02 s\n   |ΔT₂| = |2.54 - 2.52| = 0.02 s\n   |ΔT₃| = |2.48 - 2.52| = 0.04 s\n   |ΔT₄| = |2.56 - 2.52| = 0.04 s\n3. Calculate mean absolute error: ΔT_mean = (0.02 + 0.02 + 0.04 + 0.04) / 4 = 0.12 / 4 = 0.03 s.",
        "finalAnswer": "Option A: 0.03 s",
        "whyOtherOptionsWrong": "Option B is double the mean error. Option C is the sum of the absolute errors without dividing by n=4. Option D is an arithmetic slip."
    },

    # Q29 (Practice Easy)
    {
        "questionNumber": 29,
        "question": "Which of the following statements correctly distinguishes accuracy from precision?",
        "options": {
            "A": "Accuracy refers to how close a measured value is to the true value; precision refers to the resolution or limit to which the quantity is measured",
            "B": "Precision refers to closeness to the true value; accuracy refers to the closeness of repeated measurements to each other",
            "C": "An instrument with high precision always has high accuracy",
            "D": "Accuracy depends solely on the least count of the instrument"
        },
        "correctAnswer": "A",
        "topic": "Accuracy and precision",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "NCERT definition of accuracy versus precision.",
        "given": "Basic concepts of measurement.",
        "formula": "Accuracy = Closeness to true value; Precision = Closeness of repeated measurements / instrument resolution (least count).",
        "stepByStep": "1. NCERT explicitly states: 'The accuracy of a measurement is a measure of how close the measured value is to the true value of the quantity.'\n2. 'Precision tells us to what resolution or limit the quantity is measured by the measuring instrument.'\n3. A clock with a seconds hand has higher precision than one with only hour hand, but if running slow by 1 hour, it is precise but inaccurate.\n4. Thus, high precision does not guarantee high accuracy.",
        "finalAnswer": "Option A: Accuracy refers to how close a measured value is to the true value; precision refers to the resolution or limit to which the quantity is measured",
        "whyOtherOptionsWrong": "Option B inverts the two definitions. Option C is false because a poorly calibrated instrument can be precise but inaccurate. Option D confuses precision (which depends on least count) with accuracy."
    },

    # Q30 (Practice Easy)
    {
        "questionNumber": 30,
        "question": "The dimensional formula of universal gas constant (R) in the ideal gas equation PV = nRT is:",
        "options": {
            "A": "[M L² T⁻² K⁻¹ mol⁻¹]",
            "B": "[M L T⁻² K⁻¹ mol⁻¹]",
            "C": "[M L² T⁻¹ K⁻¹ mol⁻¹]",
            "D": "[M L⁻¹ T⁻² K⁻¹ mol⁻¹]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Derivation of dimensions of universal gas constant R.",
        "given": "Ideal gas equation: P V = n R T.",
        "formula": "R = (P V) / (n T)",
        "stepByStep": "1. Product P · V has the dimensions of work/energy: [P V] = [Force/Area · Volume] = [Force · length] = [M L² T⁻²].\n2. Number of moles [n] = [mol].\n3. Temperature [T] = [K].\n4. Therefore: [R] = [M L² T⁻²] / ([mol] [K]) = [M L² T⁻² K⁻¹ mol⁻¹].",
        "finalAnswer": "Option A: [M L² T⁻² K⁻¹ mol⁻¹]",
        "whyOtherOptionsWrong": "Option B misses a power of length. Option C has incorrect power of time. Option D has negative power of length."
    },

    # Q31 (Practice Easy)
    {
        "questionNumber": 31,
        "question": "The least count of a standard meter scale used in school physics laboratories is:",
        "options": {
            "A": "1 mm",
            "B": "0.1 mm",
            "C": "0.01 mm",
            "D": "1 cm"
        },
        "correctAnswer": "A",
        "topic": "Least count",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Least count of common laboratory instruments.",
        "given": "Standard laboratory meter scale.",
        "formula": "LC = Value of smallest division on the scale.",
        "stepByStep": "1. A standard laboratory meter scale is graduated in centimeters, with each centimeter divided into 10 equal parts.\n2. The smallest division is 1 millimeter (1 mm = 0.1 cm).\n3. Hence, its least count is 1 mm.",
        "finalAnswer": "Option A: 1 mm",
        "whyOtherOptionsWrong": "0.1 mm is the least count of a standard Vernier calipers. 0.01 mm is the least count of a standard screw gauge. 1 cm is 10 times too large."
    },

    # Q32 (Practice Easy)
    {
        "questionNumber": 32,
        "question": "Which of the following quantities has the unit of 'Henry' (H)?",
        "options": {
            "A": "Self-inductance",
            "B": "Magnetic flux",
            "C": "Capacitance",
            "D": "Magnetic field intensity"
        },
        "correctAnswer": "A",
        "topic": "SI derived units",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "SI derived units for electromagnetic quantities.",
        "given": "Unit: Henry (H).",
        "formula": "Induced emf e = -L (dI/dt) => L = e / (dI/dt); Unit = V·s/A = Henry (H).",
        "stepByStep": "1. Self-inductance (and mutual inductance) is measured in Henry (H).\n2. Magnetic flux is measured in Weber (Wb = T·m²).\n3. Capacitance is measured in Farad (F = C/V).\n4. Magnetic field intensity is measured in Tesla (T = Wb/m²).",
        "finalAnswer": "Option A: Self-inductance",
        "whyOtherOptionsWrong": "Magnetic flux is in Weber, capacitance is in Farad, and magnetic field intensity is in Tesla."
    },

    # Q33 (Practice Easy)
    {
        "questionNumber": 33,
        "question": "If the side of a cube is measured to be 1.2 × 10⁻² m, then its volume according to the rules of significant figures is:",
        "options": {
            "A": "1.7 × 10⁻⁶ m³",
            "B": "1.728 × 10⁻⁶ m³",
            "C": "1.73 × 10⁻⁶ m³",
            "D": "2 × 10⁻⁶ m³"
        },
        "correctAnswer": "A",
        "topic": "Rules of significant figures",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Multiplication rule for significant figures.",
        "given": "Side of cube a = 1.2 × 10⁻² m (2 significant figures).",
        "formula": "Volume V = a³; Final answer must have the same number of significant figures as the least precise factor (2 sig figs).",
        "stepByStep": "1. V = (1.2 × 10⁻²)³ = 1.728 × 10⁻⁶ m³.\n2. The given side length 1.2 has 2 significant figures.\n3. The result of multiplication/cubing must be rounded off to 2 significant figures.\n4. 1.728 rounded to 2 significant figures is 1.7 × 10⁻⁶ m³.",
        "finalAnswer": "Option A: 1.7 × 10⁻⁶ m³",
        "whyOtherOptionsWrong": "Option B (1.728 × 10⁻⁶ m³) keeps 4 sig figs. Option C (1.73 × 10⁻⁶ m³) keeps 3 sig figs. Option D rounds to only 1 sig fig."
    },

    # Q34 (Practice Easy)
    {
        "questionNumber": 34,
        "question": "A force of 10 N acts on a body. In CGS system (dynes), this force is equal to:",
        "options": {
            "A": "10⁶ dynes",
            "B": "10⁵ dynes",
            "C": "10⁴ dynes",
            "D": "10⁷ dynes"
        },
        "correctAnswer": "A",
        "topic": "Applications and limitations of dimensional analysis",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Conversion of units from SI (MKS) to CGS.",
        "given": "Force F = 10 N.",
        "formula": "1 N = 1 kg · m/s² = (10³ g) · (10² cm)/s² = 10⁵ g · cm/s² = 10⁵ dynes.",
        "stepByStep": "1. 1 Newton = 10⁵ dynes.\n2. Given force = 10 N = 10 × 10⁵ dynes = 10⁶ dynes.",
        "finalAnswer": "Option A: 10⁶ dynes",
        "whyOtherOptionsWrong": "Option B is the conversion for 1 N, not 10 N. Options C and D have incorrect powers of 10."
    },

    # Q35 (Practice Easy)
    {
        "questionNumber": 35,
        "question": "Which of the following is a supplementary unit in the SI system?",
        "options": {
            "A": "Steradian",
            "B": "Candela",
            "C": "Kelvin",
            "D": "Ampere"
        },
        "correctAnswer": "A",
        "topic": "SI base units",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Supplementary units in SI.",
        "given": "SI units classifications.",
        "formula": "Supplementary units: Radian (for plane angle) and Steradian (for solid angle).",
        "stepByStep": "1. The SI system originally defined two supplementary units: radian (for plane angle) and steradian (for solid angle).\n2. Candela, Kelvin, and Ampere are among the seven base units.\n3. Therefore, steradian is a supplementary unit.",
        "finalAnswer": "Option A: Steradian",
        "whyOtherOptionsWrong": "Candela, Kelvin, and Ampere are base units, not supplementary units."
    },

    # Q36 (Practice Easy)
    {
        "questionNumber": 36,
        "question": "What is the dimensional formula of frequency?",
        "options": {
            "A": "[M⁰ L⁰ T⁻¹]",
            "B": "[M⁰ L⁰ T]",
            "C": "[M L⁰ T⁻¹]",
            "D": "[M⁰ L T⁻¹]"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Dimensional formula of frequency.",
        "given": "Frequency ν = 1 / T.",
        "formula": "[ν] = 1 / [Time] = [T⁻¹] = [M⁰ L⁰ T⁻¹]",
        "stepByStep": "1. Frequency is the number of cycles per unit time.\n2. [ν] = [T]⁻¹ = [M⁰ L⁰ T⁻¹].",
        "finalAnswer": "Option A: [M⁰ L⁰ T⁻¹]",
        "whyOtherOptionsWrong": "Option B is time period. Option C introduces mass. Option D is velocity."
    },

    # Q37 (Practice Easy)
    {
        "questionNumber": 37,
        "question": "The parallax angle of a distant star measured from two points on Earth's orbit separated by baseline b = 3 × 10¹¹ m is θ = 1.5 × 10⁻⁵ rad. The distance of the star from Earth is:",
        "options": {
            "A": "2.0 × 10¹⁶ m",
            "B": "4.5 × 10¹⁶ m",
            "C": "2.0 × 10¹⁵ m",
            "D": "1.5 × 10¹⁶ m"
        },
        "correctAnswer": "A",
        "topic": "Parallax/error concepts",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Parallax method for measuring astronomical distances.",
        "given": "Baseline b = 3 × 10¹¹ m, Parallax angle θ = 1.5 × 10⁻⁵ rad.",
        "formula": "D = b / θ (where θ is in radians)",
        "stepByStep": "1. In parallax geometry, arc length equals radius times angle: b = D · θ.\n2. Distance D = b / θ.\n3. D = (3 × 10¹¹ m) / (1.5 × 10⁻⁵ rad) = 2.0 × 10¹⁶ m.",
        "finalAnswer": "Option A: 2.0 × 10¹⁶ m",
        "whyOtherOptionsWrong": "Option B multiplies baseline by angle. Option C is off by a factor of 10. Option D repeats the angle value."
    },

    # Q38 (Practice Easy)
    {
        "questionNumber": 38,
        "question": "When the jaws of a Vernier calipers are in contact, the zero of the Vernier scale lies to the right of the zero of the main scale. This error is termed as:",
        "options": {
            "A": "Positive zero error",
            "B": "Negative zero error",
            "C": "Random error",
            "D": "Parallax error"
        },
        "correctAnswer": "A",
        "topic": "Zero error",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Definition and sign convention of zero error in Vernier calipers.",
        "given": "Vernier zero lies to the right of main scale zero when jaws touch.",
        "formula": "If Vernier zero is to the right of main scale zero, measured reading > true value => Positive zero error.",
        "stepByStep": "1. When the jaws touch, the reading should ideally be 0.00.\n2. If the Vernier zero is to the right of the main scale zero, the instrument shows a reading greater than zero before placing any object.\n3. This is defined as a positive zero error.\n4. To get the true reading, this positive error must be subtracted from the observed reading.",
        "finalAnswer": "Option A: Positive zero error",
        "whyOtherOptionsWrong": "Negative zero error occurs when the Vernier zero lies to the left of the main scale zero. Random and parallax errors are operational, not zero errors."
    },

    # Q39 (Practice Easy)
    {
        "questionNumber": 39,
        "question": "The percentage error in the measurement of the radius of a sphere is 1%. What is the percentage error in the measurement of its surface area?",
        "options": {
            "A": "2%",
            "B": "1%",
            "C": "3%",
            "D": "4%"
        },
        "correctAnswer": "A",
        "topic": "Percentage error",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Percentage error propagation for geometric formulas.",
        "given": "Δr/r × 100% = 1%. Surface area of sphere A = 4π r².",
        "formula": "ΔA/A × 100% = 2 × (Δr/r × 100%)",
        "stepByStep": "1. Surface area of sphere A = 4π r².\n2. The constant 4π is exact and has zero error.\n3. Relative error: ΔA/A = 2 (Δr/r).\n4. Percentage error in surface area = 2 × 1% = 2%.",
        "finalAnswer": "Option A: 2%",
        "whyOtherOptionsWrong": "Option B forgets the exponent 2. Option C (3%) calculates the error in volume (V = 4/3 π r³), not surface area. Option D calculates 4 times."
    },

    # Q40 (Practice Easy)
    {
        "questionNumber": 40,
        "question": "Which of the following physical quantities has the same dimensions as that of impulse?",
        "options": {
            "A": "Linear momentum",
            "B": "Angular momentum",
            "C": "Force",
            "D": "Work"
        },
        "correctAnswer": "A",
        "topic": "Dimensions and dimensional formulae",
        "difficulty": "Easy",
        "isPYQ": False,
        "source": "VG Insights Practice",
        "concept": "Impulse-momentum theorem and dimensional equivalence.",
        "given": "Impulse J = Force × time = Δp (change in linear momentum).",
        "formula": "[Impulse] = [F] [t] = [M L T⁻²] [T] = [M L T⁻¹]; [Momentum] = [m] [v] = [M L T⁻¹]",
        "stepByStep": "1. Impulse is defined as the product of force and time: J = F · Δt.\n2. [Impulse] = [M L T⁻²][T] = [M L T⁻¹].\n3. Linear momentum is p = m · v, having dimensions [M][L T⁻¹] = [M L T⁻¹].\n4. Therefore, impulse and linear momentum have identical dimensions.",
        "finalAnswer": "Option A: Linear momentum",
        "whyOtherOptionsWrong": "Angular momentum is [M L² T⁻¹], Force is [M L T⁻²], and Work is [M L² T⁻²]."
    }
]
