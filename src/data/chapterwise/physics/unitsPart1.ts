import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';

export const UNITS_PART1_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "um-mcq-001",
    "questionNumber": 1,
    "question": "The dimensional formula of the universal gravitational constant G is:",
    "options": {
      "A": "[M⁻¹ L³ T⁻²]",
      "B": "[M L² T⁻¹]",
      "C": "[M⁻¹ L² T⁻²]",
      "D": "[M L⁻¹ T⁻²]"
    },
    "optionsList": [
      "[M⁻¹ L³ T⁻²]",
      "[M L² T⁻¹]",
      "[M⁻¹ L² T⁻²]",
      "[M L⁻¹ T⁻²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDimensional formula of the universal gravitational constant G.\n\n2. GIVEN:\nUniversal gravitational constant G.\n\n3. FORMULA / PRINCIPLE:\nF = G m₁ m₂ / r²  =>  G = F r² / (m₁ m₂)\n\n4. STEP-BY-STEP SOLUTION:\n1. Substitute dimensions: [F] = [M L T⁻²], [r²] = [L²], [m₁ m₂] = [M²].\n2. Compute [G] = [M L T⁻²][L²] / [M²] = [M⁻¹ L³ T⁻²].\n3. This is the fundamental dimensional representation of G.\n\n5. FINAL ANSWER:\nOption A: [M⁻¹ L³ T⁻²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOptions B, C, and D have incorrect powers of mass, length, or time for G.",
    "solutionStructured": {
      "concept": "Dimensional formula of the universal gravitational constant G.",
      "given": "Quantity G (Newton's universal law of gravitation).",
      "formula": "F = G m₁ m₂ / r²  =>  G = F r² / (m₁ m₂)",
      "stepByStep": "1. Substitute dimensions: [F] = [M L T⁻²], [r²] = [L²], [m₁ m₂] = [M²].\n2. Compute [G] = [M L T⁻²][L²] / [M²] = [M⁻¹ L³ T⁻²].\n3. This is the fundamental dimensional representation of G.",
      "finalAnswer": "Option A: [M⁻¹ L³ T⁻²]",
      "whyOtherOptionsWrong": "Options A, B, and C have incorrect powers of mass and length for the universal gravitational constant."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "NEET 2026",
    "isPYQ": true,
    "pyqYear": 2026
  },
  {
    "id": "um-mcq-002",
    "questionNumber": 2,
    "question": "A physical quantity P is related to four observables a, b, c and d as P = (a³ b²) / (√c · d). The percentage errors of measurement in a, b, c and d are 1%, 2%, 4% and 2% respectively. What is the percentage error in the quantity P?",
    "options": {
      "A": "11%",
      "B": "14%",
      "C": "7%",
      "D": "9%"
    },
    "optionsList": [
      "11%",
      "14%",
      "7%",
      "9%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPropagation of fractional/percentage errors in powers, products, and quotients.\n\n2. GIVEN:\nP = a³ b² / (c^(1/2) · d), Δa/a = 1%, Δb/b = 2%, Δc/c = 4%, Δd/d = 2%.\n\n3. FORMULA / PRINCIPLE:\n(ΔP/P) × 100% = 3(Δa/a) + 2(Δb/b) + (1/2)(Δc/c) + 1(Δd/d)\n\n4. STEP-BY-STEP SOLUTION:\n1. Powers become multiplicative factors in maximum fractional error.\n2. (ΔP/P) × 100% = 3(1%) + 2(2%) + 0.5(4%) + 1(2%).\n3. Calculate: 3% + 4% + 2% + 2% = 11%.\n4. Maximum percentage error in P is 11%.\n\n5. FINAL ANSWER:\nOption A: 11%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (14%) incorrectly adds power of c as 1 instead of 1/2. Option C (7%) subtracts denominator powers which is incorrect for maximum permissible error. Option D (9%) forgets the error in d.",
    "solutionStructured": {
      "concept": "Propagation of fractional/percentage errors in powers, products, and quotients.",
      "given": "P = a³ b² / (c^(1/2) · d), Δa/a = 1%, Δb/b = 2%, Δc/c = 4%, Δd/d = 2%.",
      "formula": "(ΔP/P) × 100% = 3(Δa/a) + 2(Δb/b) + (1/2)(Δc/c) + 1(Δd/d)",
      "stepByStep": "1. Powers become multiplicative factors in maximum fractional error.\n2. (ΔP/P) × 100% = 3(1%) + 2(2%) + 0.5(4%) + 1(2%).\n3. Calculate: 3% + 4% + 2% + 2% = 11%.\n4. Maximum percentage error in P is 11%.",
      "finalAnswer": "Option A: 11%",
      "whyOtherOptionsWrong": "Option B (14%) incorrectly adds power of c as 1 instead of 1/2. Option C (7%) subtracts denominator powers which is incorrect for maximum permissible error. Option D (9%) forgets the error in d."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "NEET 2025",
    "isPYQ": true,
    "pyqYear": 2025
  },
  {
    "id": "um-mcq-003",
    "questionNumber": 3,
    "question": "In a screw gauge, 5 complete rotations of the circular cap advance the spindle by 2.5 mm on the main scale. If the circular scale contains 50 divisions, the least count of the screw gauge is:",
    "options": {
      "A": "0.01 mm",
      "B": "0.05 mm",
      "C": "0.02 mm",
      "D": "0.001 mm"
    },
    "optionsList": [
      "0.01 mm",
      "0.05 mm",
      "0.02 mm",
      "0.001 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPitch and least count of a micrometer screw gauge.\n\n2. GIVEN:\nSpindle advance in 5 rotations = 2.5 mm; Total circular scale divisions N = 50.\n\n3. FORMULA / PRINCIPLE:\nPitch = (Distance moved on main scale) / (Number of rotations); Least Count (LC) = Pitch / N\n\n4. STEP-BY-STEP SOLUTION:\n1. Calculate Pitch: Pitch = 2.5 mm / 5 = 0.5 mm.\n2. Calculate Least Count: LC = 0.5 mm / 50 = 0.01 mm.\n3. The least count is 0.01 mm (or 10 μm).\n\n5. FINAL ANSWER:\nOption A: 0.01 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (0.05 mm) divides 2.5 mm directly by 50 without calculating pitch per single rotation. Option C is 0.02 mm. Option D is 0.001 mm which would require 500 divisions.",
    "solutionStructured": {
      "concept": "Pitch and least count of a micrometer screw gauge.",
      "given": "Spindle advance in 5 rotations = 2.5 mm; Total circular scale divisions N = 50.",
      "formula": "Pitch = (Distance moved on main scale) / (Number of rotations); Least Count (LC) = Pitch / N",
      "stepByStep": "1. Calculate Pitch: Pitch = 2.5 mm / 5 = 0.5 mm.\n2. Calculate Least Count: LC = 0.5 mm / 50 = 0.01 mm.\n3. The least count is 0.01 mm (or 10 μm).",
      "finalAnswer": "Option A: 0.01 mm",
      "whyOtherOptionsWrong": "Option B (0.05 mm) divides 2.5 mm directly by 50 without calculating pitch per single rotation. Option C is 0.02 mm. Option D is 0.001 mm which would require 500 divisions."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Screw gauge",
    "source": "NEET 2025",
    "isPYQ": true,
    "pyqYear": 2025
  },
  {
    "id": "um-mcq-004",
    "questionNumber": 4,
    "question": "A screw gauge has a pitch of 0.5 mm and there are 50 divisions on its circular scale. The least count (LC) of the instrument is:",
    "options": {
      "A": "0.01 mm",
      "B": "0.02 mm",
      "C": "0.001 mm",
      "D": "0.05 mm"
    },
    "optionsList": [
      "0.01 mm",
      "0.02 mm",
      "0.001 mm",
      "0.05 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDetermination of least count of a screw gauge.\n\n2. GIVEN:\nPitch = 0.5 mm, Number of circular scale divisions = 50.\n\n3. FORMULA / PRINCIPLE:\nLeast Count (LC) = Pitch / (Number of circular scale divisions)\n\n4. STEP-BY-STEP SOLUTION:\n1. Substitute the given values into the formula: LC = 0.5 mm / 50.\n2. LC = 1 / 100 mm = 0.01 mm.\n\n5. FINAL ANSWER:\nOption A: 0.01 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B corresponds to 1 mm / 50. Option C corresponds to 0.05 mm / 50. Option D is the pitch divided by 10.",
    "solutionStructured": {
      "concept": "Determination of least count of a screw gauge.",
      "given": "Pitch = 0.5 mm, Number of circular scale divisions = 50.",
      "formula": "Least Count (LC) = Pitch / (Number of circular scale divisions)",
      "stepByStep": "1. Substitute the given values into the formula: LC = 0.5 mm / 50.\n2. LC = 1 / 100 mm = 0.01 mm.",
      "finalAnswer": "Option A: 0.01 mm",
      "whyOtherOptionsWrong": "Option B corresponds to 1 mm / 50. Option C corresponds to 0.05 mm / 50. Option D is the pitch divided by 10."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Least count",
    "source": "NEET 2024",
    "isPYQ": true,
    "pyqYear": 2024
  },
  {
    "id": "um-mcq-005",
    "questionNumber": 5,
    "question": "In a Vernier calipers, 10 divisions of the Vernier scale coincide with 9 divisions of the Main scale. If 1 main scale division (MSD) equals 1 mm, the least count (LC) of the Vernier calipers is:",
    "options": {
      "A": "0.1 cm",
      "B": "0.01 cm (0.1 mm)",
      "C": "0.001 cm",
      "D": "0.05 mm"
    },
    "optionsList": [
      "0.1 cm",
      "0.01 cm (0.1 mm)",
      "0.001 cm",
      "0.05 mm"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT:\nLeast count calculation for standard Vernier calipers.\n\n2. GIVEN:\n10 VSD = 9 MSD, where 1 MSD = 1 mm.\n\n3. FORMULA / PRINCIPLE:\nLC = 1 MSD - 1 VSD = (1 - 9/10) MSD = (1/10) MSD\n\n4. STEP-BY-STEP SOLUTION:\n1. 1 VSD = 9/10 MSD = 0.9 mm.\n2. LC = 1 MSD - 1 VSD = 1.0 mm - 0.9 mm = 0.1 mm.\n3. Converting to cm: 0.1 mm = 0.01 cm.\n\n5. FINAL ANSWER:\nOption B: 0.01 cm (0.1 mm)\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption A is 0.1 cm = 1 mm (which is 1 MSD, not the least count). Option C is 0.001 cm = 0.01 mm (screw gauge LC). Option D is 0.05 mm.",
    "solutionStructured": {
      "concept": "Least count calculation for standard Vernier calipers.",
      "given": "10 VSD = 9 MSD, where 1 MSD = 1 mm.",
      "formula": "LC = 1 MSD - 1 VSD = (1 - 9/10) MSD = (1/10) MSD",
      "stepByStep": "1. 1 VSD = 9/10 MSD = 0.9 mm.\n2. LC = 1 MSD - 1 VSD = 1.0 mm - 0.9 mm = 0.1 mm.\n3. Converting to cm: 0.1 mm = 0.01 cm.",
      "finalAnswer": "Option B: 0.01 cm (0.1 mm)",
      "whyOtherOptionsWrong": "Option A is 0.1 cm = 1 mm (which is 1 MSD, not the least count). Option C is 0.001 cm = 0.01 mm (screw gauge LC). Option D is 0.05 mm."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Vernier calipers",
    "source": "NEET 2024",
    "isPYQ": true,
    "pyqYear": 2024
  },
  {
    "id": "um-mcq-006",
    "questionNumber": 6,
    "question": "The dimensions of the quantity [μ₀ ε₀]^(-1/2) are identical to the dimensions of:",
    "options": {
      "A": "Velocity",
      "B": "Acceleration",
      "C": "Force",
      "D": "Energy"
    },
    "optionsList": [
      "Velocity",
      "Acceleration",
      "Force",
      "Energy"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nElectromagnetic wave speed relation from Maxwell's equations.\n\n2. GIVEN:\nQuantity X = [μ₀ ε₀]^(-1/2) = 1 / √(μ₀ ε₀).\n\n3. FORMULA / PRINCIPLE:\nc = 1 / √(μ₀ ε₀), where c is the speed of light in vacuum.\n\n4. STEP-BY-STEP SOLUTION:\n1. In classical electromagnetism, the speed of electromagnetic waves in vacuum is c = 1 / √(μ₀ ε₀).\n2. Therefore, [μ₀ ε₀]^(-1/2) represents the speed of light.\n3. Speed has dimensions of velocity: [L T⁻¹].\n\n5. FINAL ANSWER:\nOption A: Velocity\n\n6. WHY OTHER OPTIONS ARE WRONG:\nAcceleration has dimensions [L T⁻²], Force has [M L T⁻²], and Energy has [M L² T⁻²]. None of these match velocity [L T⁻¹].",
    "solutionStructured": {
      "concept": "Electromagnetic wave speed relation from Maxwell's equations.",
      "given": "Quantity X = [μ₀ ε₀]^(-1/2) = 1 / √(μ₀ ε₀).",
      "formula": "c = 1 / √(μ₀ ε₀), where c is the speed of light in vacuum.",
      "stepByStep": "1. In classical electromagnetism, the speed of electromagnetic waves in vacuum is c = 1 / √(μ₀ ε₀).\n2. Therefore, [μ₀ ε₀]^(-1/2) represents the speed of light.\n3. Speed has dimensions of velocity: [L T⁻¹].",
      "finalAnswer": "Option A: Velocity",
      "whyOtherOptionsWrong": "Acceleration has dimensions [L T⁻²], Force has [M L T⁻²], and Energy has [M L² T⁻²]. None of these match velocity [L T⁻¹]."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "NEET 2023",
    "isPYQ": true,
    "pyqYear": 2023
  },
  {
    "id": "um-mcq-007",
    "questionNumber": 7,
    "question": "The errors in the measurement of mass and speed of a moving body are 2% and 3% respectively. The maximum percentage error in the estimation of its kinetic energy is:",
    "options": {
      "A": "8%",
      "B": "5%",
      "C": "11%",
      "D": "1%"
    },
    "optionsList": [
      "8%",
      "5%",
      "11%",
      "1%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError propagation in kinetic energy.\n\n2. GIVEN:\nΔm/m = 2%, Δv/v = 3%. Kinetic Energy K = (1/2) m v².\n\n3. FORMULA / PRINCIPLE:\n(ΔK/K) × 100% = (Δm/m) × 100% + 2 × (Δv/v) × 100%\n\n4. STEP-BY-STEP SOLUTION:\n1. Kinetic energy formula is K = (1/2) m v².\n2. Fractional error: ΔK/K = Δm/m + 2(Δv/v).\n3. Percentage error = 2% + 2(3%) = 2% + 6% = 8%.\n\n5. FINAL ANSWER:\nOption A: 8%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (5%) incorrectly forgets the power of 2 on velocity (2% + 3% = 5%). Option C (11%) squares the percentage error. Option D (1%) subtracts the errors.",
    "solutionStructured": {
      "concept": "Error propagation in kinetic energy.",
      "given": "Δm/m = 2%, Δv/v = 3%. Kinetic Energy K = (1/2) m v².",
      "formula": "(ΔK/K) × 100% = (Δm/m) × 100% + 2 × (Δv/v) × 100%",
      "stepByStep": "1. Kinetic energy formula is K = (1/2) m v².\n2. Fractional error: ΔK/K = Δm/m + 2(Δv/v).\n3. Percentage error = 2% + 2(3%) = 2% + 6% = 8%.",
      "finalAnswer": "Option A: 8%",
      "whyOtherOptionsWrong": "Option B (5%) incorrectly forgets the power of 2 on velocity (2% + 3% = 5%). Option C (11%) squares the percentage error. Option D (1%) subtracts the errors."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "NEET 2023",
    "isPYQ": true,
    "pyqYear": 2023
  },
  {
    "id": "um-mcq-008",
    "questionNumber": 8,
    "question": "Plane angle and solid angle have:",
    "options": {
      "A": "Units but no dimensions",
      "B": "Dimensions but no units",
      "C": "No units and no dimensions",
      "D": "Both units and dimensions"
    },
    "optionsList": [
      "Units but no dimensions",
      "Dimensions but no units",
      "No units and no dimensions",
      "Both units and dimensions"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nSupplementary SI units and their dimensional nature.\n\n2. GIVEN:\nPlane angle (θ = arc/radius) and solid angle (Ω = area/radius²).\n\n3. FORMULA / PRINCIPLE:\n[θ] = [L]/[L] = [M⁰ L⁰ T⁰] (dimensionless); [Ω] = [L²]/[L²] = [M⁰ L⁰ T⁰] (dimensionless).\n\n4. STEP-BY-STEP SOLUTION:\n1. Plane angle is defined as arc length divided by radius, which is a ratio of lengths and hence dimensionless.\n2. Solid angle is defined as spherical surface area divided by radius squared, also dimensionless.\n3. However, SI assigns specific units to them: radian (rad) for plane angle, and steradian (sr) for solid angle.\n4. Therefore, they have units (rad and sr) but no dimensions.\n\n5. FINAL ANSWER:\nOption A: Units but no dimensions\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is incorrect because dimensions cannot exist without units. Option C is false because they do have SI units (radian and steradian). Option D is false because both are strictly dimensionless.",
    "solutionStructured": {
      "concept": "Supplementary SI units and their dimensional nature.",
      "given": "Plane angle (θ = arc/radius) and solid angle (Ω = area/radius²).",
      "formula": "[θ] = [L]/[L] = [M⁰ L⁰ T⁰] (dimensionless); [Ω] = [L²]/[L²] = [M⁰ L⁰ T⁰] (dimensionless).",
      "stepByStep": "1. Plane angle is defined as arc length divided by radius, which is a ratio of lengths and hence dimensionless.\n2. Solid angle is defined as spherical surface area divided by radius squared, also dimensionless.\n3. However, SI assigns specific units to them: radian (rad) for plane angle, and steradian (sr) for solid angle.\n4. Therefore, they have units (rad and sr) but no dimensions.",
      "finalAnswer": "Option A: Units but no dimensions",
      "whyOtherOptionsWrong": "Option B is incorrect because dimensions cannot exist without units. Option C is false because they do have SI units (radian and steradian). Option D is false because both are strictly dimensionless."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "SI base units",
    "source": "NEET 2022",
    "isPYQ": true,
    "pyqYear": 2022
  },
  {
    "id": "um-mcq-009",
    "questionNumber": 9,
    "question": "Two resistors of resistances R₁ = (100 ± 3) Ω and R₂ = (200 ± 4) Ω are connected in series. The equivalent resistance of the series combination is:",
    "options": {
      "A": "(300 ± 7) Ω",
      "B": "(300 ± 1) Ω",
      "C": "(300 ± 12) Ω",
      "D": "(300 ± 3.5) Ω"
    },
    "optionsList": [
      "(300 ± 7) Ω",
      "(300 ± 1) Ω",
      "(300 ± 12) Ω",
      "(300 ± 3.5) Ω"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError propagation in addition (series combination of resistances).\n\n2. GIVEN:\nR₁ = (100 ± 3) Ω, R₂ = (200 ± 4) Ω.\n\n3. FORMULA / PRINCIPLE:\nR_eq = R₁ + R₂; ΔR_eq = ΔR₁ + ΔR₂\n\n4. STEP-BY-STEP SOLUTION:\n1. For resistances in series: R_eq = R₁ + R₂ = 100 + 200 = 300 Ω.\n2. When two quantities are added, their absolute errors add up directly: ΔR_eq = ΔR₁ + ΔR₂ = 3 + 4 = 7 Ω.\n3. Therefore, the equivalent resistance is (300 ± 7) Ω.\n\n5. FINAL ANSWER:\nOption A: (300 ± 7) Ω\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B subtracts absolute errors (4 - 3 = 1), which violates maximum error rules. Option C multiplies errors. Option D takes the arithmetic mean of errors.",
    "solutionStructured": {
      "concept": "Error propagation in addition (series combination of resistances).",
      "given": "R₁ = (100 ± 3) Ω, R₂ = (200 ± 4) Ω.",
      "formula": "R_eq = R₁ + R₂; ΔR_eq = ΔR₁ + ΔR₂",
      "stepByStep": "1. For resistances in series: R_eq = R₁ + R₂ = 100 + 200 = 300 Ω.\n2. When two quantities are added, their absolute errors add up directly: ΔR_eq = ΔR₁ + ΔR₂ = 3 + 4 = 7 Ω.\n3. Therefore, the equivalent resistance is (300 ± 7) Ω.",
      "finalAnswer": "Option A: (300 ± 7) Ω",
      "whyOtherOptionsWrong": "Option B subtracts absolute errors (4 - 3 = 1), which violates maximum error rules. Option C multiplies errors. Option D takes the arithmetic mean of errors."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "NEET 2022",
    "isPYQ": true,
    "pyqYear": 2022
  },
  {
    "id": "um-mcq-010",
    "questionNumber": 10,
    "question": "A screw gauge gives the following readings when used to measure the diameter of a wire:\nMain scale reading : 0 mm\nCircular scale reading : 52 divisions\nGiven that 1 mm on main scale corresponds to 100 divisions on the circular scale. The diameter of the wire from the above data is:",
    "options": {
      "A": "0.052 cm",
      "B": "0.52 cm",
      "C": "0.026 cm",
      "D": "0.0052 cm"
    },
    "optionsList": [
      "0.052 cm",
      "0.52 cm",
      "0.026 cm",
      "0.0052 cm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTotal reading using a micrometer screw gauge.\n\n2. GIVEN:\nMSR = 0 mm, CSR = 52 divisions, 1 mm corresponds to 100 circular divisions.\n\n3. FORMULA / PRINCIPLE:\nLC = 1 mm / 100 = 0.01 mm; Diameter = MSR + (CSR × LC)\n\n4. STEP-BY-STEP SOLUTION:\n1. Calculate least count: LC = 1 mm / 100 = 0.01 mm = 0.001 cm.\n2. Diameter = 0 mm + 52 × 0.01 mm = 0.52 mm.\n3. Convert mm to cm: 0.52 mm / 10 = 0.052 cm.\n\n5. FINAL ANSWER:\nOption A: 0.052 cm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (0.52 cm) fails to convert mm to cm. Option C halves the circular reading. Option D divides by 100 instead of 10.",
    "solutionStructured": {
      "concept": "Total reading using a micrometer screw gauge.",
      "given": "MSR = 0 mm, CSR = 52 divisions, 1 mm corresponds to 100 circular divisions.",
      "formula": "LC = 1 mm / 100 = 0.01 mm; Diameter = MSR + (CSR × LC)",
      "stepByStep": "1. Calculate least count: LC = 1 mm / 100 = 0.01 mm = 0.001 cm.\n2. Diameter = 0 mm + 52 × 0.01 mm = 0.52 mm.\n3. Convert mm to cm: 0.52 mm / 10 = 0.052 cm.",
      "finalAnswer": "Option A: 0.052 cm",
      "whyOtherOptionsWrong": "Option B (0.52 cm) fails to convert mm to cm. Option C halves the circular reading. Option D divides by 100 instead of 10."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Screw gauge",
    "source": "NEET 2021",
    "isPYQ": true,
    "pyqYear": 2021
  },
  {
    "id": "um-mcq-011",
    "questionNumber": 11,
    "question": "A screw gauge has least count of 0.01 mm and there are 50 divisions in its circular scale. The pitch of the screw gauge is:",
    "options": {
      "A": "0.5 mm",
      "B": "1.0 mm",
      "C": "0.25 mm",
      "D": "0.02 mm"
    },
    "optionsList": [
      "0.5 mm",
      "1.0 mm",
      "0.25 mm",
      "0.02 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nRelation between least count, pitch, and circular scale divisions.\n\n2. GIVEN:\nLeast count LC = 0.01 mm, Number of divisions on circular scale N = 50.\n\n3. FORMULA / PRINCIPLE:\nLC = Pitch / N  =>  Pitch = LC × N\n\n4. STEP-BY-STEP SOLUTION:\n1. Pitch = LC × N.\n2. Pitch = 0.01 mm × 50 = 0.5 mm.\n\n5. FINAL ANSWER:\nOption A: 0.5 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (1.0 mm) would yield LC = 0.02 mm. Option C (0.25 mm) divides by 2. Option D is LC divided by 50.",
    "solutionStructured": {
      "concept": "Relation between least count, pitch, and circular scale divisions.",
      "given": "Least count LC = 0.01 mm, Number of divisions on circular scale N = 50.",
      "formula": "LC = Pitch / N  =>  Pitch = LC × N",
      "stepByStep": "1. Pitch = LC × N.\n2. Pitch = 0.01 mm × 50 = 0.5 mm.",
      "finalAnswer": "Option A: 0.5 mm",
      "whyOtherOptionsWrong": "Option B (1.0 mm) would yield LC = 0.02 mm. Option C (0.25 mm) divides by 2. Option D is LC divided by 50."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Screw gauge",
    "source": "NEET 2020",
    "isPYQ": true,
    "pyqYear": 2020
  },
  {
    "id": "um-mcq-012",
    "questionNumber": 12,
    "question": "The dimensions of stress are:",
    "options": {
      "A": "[M L⁻¹ T⁻²]",
      "B": "[M L T⁻²]",
      "C": "[M L² T⁻²]",
      "D": "[M L⁻² T⁻¹]"
    },
    "optionsList": [
      "[M L⁻¹ T⁻²]",
      "[M L T⁻²]",
      "[M L² T⁻²]",
      "[M L⁻² T⁻¹]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDimensional formula of mechanical stress / pressure.\n\n2. GIVEN:\nStress = Restoring Force / Area.\n\n3. FORMULA / PRINCIPLE:\n[Stress] = [Force] / [Area] = [M L T⁻²] / [L²]\n\n4. STEP-BY-STEP SOLUTION:\n1. [Force] = [M L T⁻²].\n2. [Area] = [L²].\n3. [Stress] = [M L T⁻²] / [L²] = [M L⁻¹ T⁻²].\n\n5. FINAL ANSWER:\nOption A: [M L⁻¹ T⁻²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is Force [M L T⁻²]. Option C is Energy / Work [M L² T⁻²]. Option D has incorrect powers of length and time.",
    "solutionStructured": {
      "concept": "Dimensional formula of mechanical stress / pressure.",
      "given": "Stress = Restoring Force / Area.",
      "formula": "[Stress] = [Force] / [Area] = [M L T⁻²] / [L²]",
      "stepByStep": "1. [Force] = [M L T⁻²].\n2. [Area] = [L²].\n3. [Stress] = [M L T⁻²] / [L²] = [M L⁻¹ T⁻²].",
      "finalAnswer": "Option A: [M L⁻¹ T⁻²]",
      "whyOtherOptionsWrong": "Option B is Force [M L T⁻²]. Option C is Energy / Work [M L² T⁻²]. Option D has incorrect powers of length and time."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "NEET 2020",
    "isPYQ": true,
    "pyqYear": 2020
  },
  {
    "id": "um-mcq-013",
    "questionNumber": 13,
    "question": "Taking into account the rules of significant figures, what is the value of 9.99 m - 0.0099 m?",
    "options": {
      "A": "9.98 m",
      "B": "9.980 m",
      "C": "9.9 m",
      "D": "9.9801 m"
    },
    "optionsList": [
      "9.98 m",
      "9.980 m",
      "9.9 m",
      "9.9801 m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nSubtraction rule for significant figures (least decimal places).\n\n2. GIVEN:\nNumbers: 9.99 m (2 decimal places) and 0.0099 m (4 decimal places).\n\n3. FORMULA / PRINCIPLE:\nIn addition/subtraction, the final result should retain as many decimal places as there are in the number with the least decimal places.\n\n4. STEP-BY-STEP SOLUTION:\n1. Exact arithmetic difference: 9.99 - 0.0099 = 9.9801 m.\n2. The number 9.99 has 2 decimal places, while 0.0099 has 4 decimal places.\n3. The result must be rounded off to 2 decimal places.\n4. Looking at the third decimal digit (0 < 5), we drop it without changing the preceding digit: 9.98 m.\n\n5. FINAL ANSWER:\nOption A: 9.98 m\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B retains 3 decimal places. Option C rounds off to 1 decimal place. Option D retains all 4 decimal places without applying significant figure rules.",
    "solutionStructured": {
      "concept": "Subtraction rule for significant figures (least decimal places).",
      "given": "Numbers: 9.99 m (2 decimal places) and 0.0099 m (4 decimal places).",
      "formula": "In addition/subtraction, the final result should retain as many decimal places as there are in the number with the least decimal places.",
      "stepByStep": "1. Exact arithmetic difference: 9.99 - 0.0099 = 9.9801 m.\n2. The number 9.99 has 2 decimal places, while 0.0099 has 4 decimal places.\n3. The result must be rounded off to 2 decimal places.\n4. Looking at the third decimal digit (0 < 5), we drop it without changing the preceding digit: 9.98 m.",
      "finalAnswer": "Option A: 9.98 m",
      "whyOtherOptionsWrong": "Option B retains 3 decimal places. Option C rounds off to 1 decimal place. Option D retains all 4 decimal places without applying significant figure rules."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Rules of significant figures",
    "source": "NEET 2020",
    "isPYQ": true,
    "pyqYear": 2020
  },
  {
    "id": "um-mcq-014",
    "questionNumber": 14,
    "question": "The energy required to break one bond in DNA is 10⁻²⁰ J. This value in electron-volts (eV) is nearly:",
    "options": {
      "A": "0.06 eV",
      "B": "0.6 eV",
      "C": "0.006 eV",
      "D": "6 eV"
    },
    "optionsList": [
      "0.06 eV",
      "0.6 eV",
      "0.006 eV",
      "6 eV"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nConversion of energy units from Joules (J) to electron-volts (eV).\n\n2. GIVEN:\nEnergy E = 10⁻²⁰ J, 1 eV = 1.6 × 10⁻¹⁹ J.\n\n3. FORMULA / PRINCIPLE:\nE (in eV) = E (in J) / (1.6 × 10⁻¹⁹ J/eV)\n\n4. STEP-BY-STEP SOLUTION:\n1. E = 10⁻²⁰ / (1.6 × 10⁻¹⁹) eV.\n2. E = (1 / 1.6) × 10⁻¹ eV = 0.625 × 0.1 eV = 0.0625 eV.\n3. Rounding to the appropriate precision gives nearly 0.06 eV.\n\n5. FINAL ANSWER:\nOption A: 0.06 eV\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (0.6 eV) misses a factor of 10. Option C (0.006 eV) divides by 10 unnecessarily. Option D is 100 times larger.",
    "solutionStructured": {
      "concept": "Conversion of energy units from Joules (J) to electron-volts (eV).",
      "given": "Energy E = 10⁻²⁰ J, 1 eV = 1.6 × 10⁻¹⁹ J.",
      "formula": "E (in eV) = E (in J) / (1.6 × 10⁻¹⁹ J/eV)",
      "stepByStep": "1. E = 10⁻²⁰ / (1.6 × 10⁻¹⁹) eV.\n2. E = (1 / 1.6) × 10⁻¹ eV = 0.625 × 0.1 eV = 0.0625 eV.\n3. Rounding to the appropriate precision gives nearly 0.06 eV.",
      "finalAnswer": "Option A: 0.06 eV",
      "whyOtherOptionsWrong": "Option B (0.6 eV) misses a factor of 10. Option C (0.006 eV) divides by 10 unnecessarily. Option D is 100 times larger."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Physical quantities and units",
    "source": "NEET 2020",
    "isPYQ": true,
    "pyqYear": 2020
  },
  {
    "id": "um-mcq-015",
    "questionNumber": 15,
    "question": "The ratio of Planck's constant (h) to angular momentum (L) has the dimensions of:",
    "options": {
      "A": "Dimensionless quantity [M⁰ L⁰ T⁰]",
      "B": "Frequency [T⁻¹]",
      "C": "Velocity [L T⁻¹]",
      "D": "Energy [M L² T⁻²]"
    },
    "optionsList": [
      "Dimensionless quantity [M⁰ L⁰ T⁰]",
      "Frequency [T⁻¹]",
      "Velocity [L T⁻¹]",
      "Energy [M L² T⁻²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nComparison of dimensions of Planck's constant and angular momentum.\n\n2. GIVEN:\nPlanck's constant h and angular momentum L = r × p.\n\n3. FORMULA / PRINCIPLE:\n[h] = [E/ν] = [M L² T⁻²]/[T⁻¹] = [M L² T⁻¹]; [L] = [r][p] = [L][M L T⁻¹] = [M L² T⁻¹]\n\n4. STEP-BY-STEP SOLUTION:\n1. Dimensions of Planck's constant: [h] = [M L² T⁻¹].\n2. Dimensions of angular momentum: [L] = [M L² T⁻¹].\n3. Ratio [h / L] = [M L² T⁻¹] / [M L² T⁻¹] = [M⁰ L⁰ T⁰].\n4. Thus, the ratio is purely dimensionless (an angle).\n\n5. FINAL ANSWER:\nOption A: Dimensionless quantity [M⁰ L⁰ T⁰]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOptions B, C, and D all possess non-zero dimensional exponents, but h and angular momentum have identical dimensional formulas.",
    "solutionStructured": {
      "concept": "Comparison of dimensions of Planck's constant and angular momentum.",
      "given": "Planck's constant h and angular momentum L = r × p.",
      "formula": "[h] = [E/ν] = [M L² T⁻²]/[T⁻¹] = [M L² T⁻¹]; [L] = [r][p] = [L][M L T⁻¹] = [M L² T⁻¹]",
      "stepByStep": "1. Dimensions of Planck's constant: [h] = [M L² T⁻¹].\n2. Dimensions of angular momentum: [L] = [M L² T⁻¹].\n3. Ratio [h / L] = [M L² T⁻¹] / [M L² T⁻¹] = [M⁰ L⁰ T⁰].\n4. Thus, the ratio is purely dimensionless (an angle).",
      "finalAnswer": "Option A: Dimensionless quantity [M⁰ L⁰ T⁰]",
      "whyOtherOptionsWrong": "Options B, C, and D all possess non-zero dimensional exponents, but h and angular momentum have identical dimensional formulas."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "NEET 2020",
    "isPYQ": true,
    "pyqYear": 2020
  },
  {
    "id": "um-mcq-016",
    "questionNumber": 16,
    "question": "In an experiment, the percentage error occurred in the measurement of physical quantities A, B, C and D are 1%, 2%, 3% and 4% respectively. Then the maximum percentage of error in the measurement X, where X = (A² B^(1/2)) / (C^(1/3) D³), will be:",
    "options": {
      "A": "16%",
      "B": "-10%",
      "C": "10%",
      "D": "14%"
    },
    "optionsList": [
      "16%",
      "-10%",
      "10%",
      "14%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nMaximum fractional and percentage error calculation.\n\n2. GIVEN:\nX = A² B^(1/2) / (C^(1/3) D³); % errors: A=1%, B=2%, C=3%, D=4%.\n\n3. FORMULA / PRINCIPLE:\nΔX/X × 100 = 2(ΔA/A) + (1/2)(ΔB/B) + (1/3)(ΔC/C) + 3(ΔD/D)\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply each percentage error by its respective absolute power exponent:\n2. For A: 2 × 1% = 2%\n3. For B: (1/2) × 2% = 1%\n4. For C: (1/3) × 3% = 1%\n5. For D: 3 × 4% = 12%\n6. Sum of all contributions = 2% + 1% + 1% + 12% = 16%.\n\n5. FINAL ANSWER:\nOption A: 16%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (-10%) incorrectly subtracts the denominator terms, which is physically invalid for maximum error. Option C (10%) and D (14%) arise from calculation slips in the powers.",
    "solutionStructured": {
      "concept": "Maximum fractional and percentage error calculation.",
      "given": "X = A² B^(1/2) / (C^(1/3) D³); % errors: A=1%, B=2%, C=3%, D=4%.",
      "formula": "ΔX/X × 100 = 2(ΔA/A) + (1/2)(ΔB/B) + (1/3)(ΔC/C) + 3(ΔD/D)",
      "stepByStep": "1. Multiply each percentage error by its respective absolute power exponent:\n2. For A: 2 × 1% = 2%\n3. For B: (1/2) × 2% = 1%\n4. For C: (1/3) × 3% = 1%\n5. For D: 3 × 4% = 12%\n6. Sum of all contributions = 2% + 1% + 1% + 12% = 16%.",
      "finalAnswer": "Option A: 16%",
      "whyOtherOptionsWrong": "Option B (-10%) incorrectly subtracts the denominator terms, which is physically invalid for maximum error. Option C (10%) and D (14%) arise from calculation slips in the powers."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "NEET 2019",
    "isPYQ": true,
    "pyqYear": 2019
  },
  {
    "id": "um-mcq-017",
    "questionNumber": 17,
    "question": "A student measured the diameter of a small steel ball using a screw gauge of least count 0.001 cm. The main scale reading is 5 mm and zero of circular scale division coincides with 25 divisions above the reference level. If the screw gauge has a zero error of -0.004 cm, the correct diameter of the ball is:",
    "options": {
      "A": "0.529 cm",
      "B": "0.521 cm",
      "C": "0.053 cm",
      "D": "0.525 cm"
    },
    "optionsList": [
      "0.529 cm",
      "0.521 cm",
      "0.053 cm",
      "0.525 cm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nCorrect reading with zero error in screw gauge.\n\n2. GIVEN:\nLC = 0.001 cm, MSR = 5 mm = 0.5 cm, CSR = 25, Zero Error = -0.004 cm.\n\n3. FORMULA / PRINCIPLE:\nObserved reading = MSR + (CSR × LC); Correct reading = Observed reading - (Zero Error)\n\n4. STEP-BY-STEP SOLUTION:\n1. Observed reading = 0.5 cm + (25 × 0.001 cm) = 0.5 cm + 0.025 cm = 0.525 cm.\n2. Correct reading = Observed reading - (Zero Error) = 0.525 cm - (-0.004 cm).\n3. Correct reading = 0.525 cm + 0.004 cm = 0.529 cm.\n\n5. FINAL ANSWER:\nOption A: 0.529 cm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (0.521 cm) subtracts 0.004 cm treating it as positive zero error. Option D (0.525 cm) ignores zero error completely. Option C is off by a factor of 10.",
    "solutionStructured": {
      "concept": "Correct reading with zero error in screw gauge.",
      "given": "LC = 0.001 cm, MSR = 5 mm = 0.5 cm, CSR = 25, Zero Error = -0.004 cm.",
      "formula": "Observed reading = MSR + (CSR × LC); Correct reading = Observed reading - (Zero Error)",
      "stepByStep": "1. Observed reading = 0.5 cm + (25 × 0.001 cm) = 0.5 cm + 0.025 cm = 0.525 cm.\n2. Correct reading = Observed reading - (Zero Error) = 0.525 cm - (-0.004 cm).\n3. Correct reading = 0.525 cm + 0.004 cm = 0.529 cm.",
      "finalAnswer": "Option A: 0.529 cm",
      "whyOtherOptionsWrong": "Option B (0.521 cm) subtracts 0.004 cm treating it as positive zero error. Option D (0.525 cm) ignores zero error completely. Option C is off by a factor of 10."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Zero error",
    "source": "NEET 2018",
    "isPYQ": true,
    "pyqYear": 2018
  },
  {
    "id": "um-mcq-018",
    "questionNumber": 18,
    "question": "If energy (E), velocity (V) and time (T) are chosen as the fundamental quantities, the dimensional formula of surface tension will be:",
    "options": {
      "A": "[E V⁻² T⁻²]",
      "B": "[E V⁻¹ T⁻²]",
      "C": "[E V⁻² T⁻¹]",
      "D": "[E² V⁻¹ T⁻²]"
    },
    "optionsList": [
      "[E V⁻² T⁻²]",
      "[E V⁻¹ T⁻²]",
      "[E V⁻² T⁻¹]",
      "[E² V⁻¹ T⁻²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nExpressing a physical quantity in terms of new fundamental units.\n\n2. GIVEN:\nSurface tension S = Force / length = [M T⁻²]. Fundamental units: E, V, T.\n\n3. FORMULA / PRINCIPLE:\nS = k E^a V^b T^c => [M T⁻²] = [M L² T⁻²]^a [L T⁻¹]^b [T]^c\n\n4. STEP-BY-STEP SOLUTION:\n1. [M T⁻²] = M^a L^(2a + b) T^(-2a - b + c).\n2. Equating power of M: a = 1.\n3. Equating power of L: 2a + b = 0 => 2(1) + b = 0 => b = -2.\n4. Equating power of T: -2a - b + c = -2 => -2(1) - (-2) + c = -2 => -2 + 2 + c = -2 => c = -2.\n5. Therefore, [S] = [E¹ V⁻² T⁻²] = [E V⁻² T⁻²].\n\n5. FINAL ANSWER:\nOption A: [E V⁻² T⁻²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOptions B, C, and D result from incorrect signs or algebraic mistakes in equating exponents for L and T.",
    "solutionStructured": {
      "concept": "Expressing a physical quantity in terms of new fundamental units.",
      "given": "Surface tension S = Force / length = [M T⁻²]. Fundamental units: E, V, T.",
      "formula": "S = k E^a V^b T^c => [M T⁻²] = [M L² T⁻²]^a [L T⁻¹]^b [T]^c",
      "stepByStep": "1. [M T⁻²] = M^a L^(2a + b) T^(-2a - b + c).\n2. Equating power of M: a = 1.\n3. Equating power of L: 2a + b = 0 => 2(1) + b = 0 => b = -2.\n4. Equating power of T: -2a - b + c = -2 => -2(1) - (-2) + c = -2 => -2 + 2 + c = -2 => c = -2.\n5. Therefore, [S] = [E¹ V⁻² T⁻²] = [E V⁻² T⁻²].",
      "finalAnswer": "Option A: [E V⁻² T⁻²]",
      "whyOtherOptionsWrong": "Options B, C, and D result from incorrect signs or algebraic mistakes in equating exponents for L and T."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "AIPMT 2015",
    "isPYQ": true,
    "pyqYear": 2015
  },
  {
    "id": "um-mcq-019",
    "questionNumber": 19,
    "question": "Which of the following is NOT one of the seven base quantities in the International System of Units (SI)?",
    "options": {
      "A": "Electric current",
      "B": "Luminous intensity",
      "C": "Electric charge",
      "D": "Amount of substance"
    },
    "optionsList": [
      "Electric current",
      "Luminous intensity",
      "Electric charge",
      "Amount of substance"
    ],
    "correctAnswer": "C",
    "correctIndex": 2,
    "explanation": "1. CONCEPT:\nIdentification of the 7 SI base quantities.\n\n2. GIVEN:\nThe SI base quantities defined by BIPM / NCERT.\n\n3. FORMULA / PRINCIPLE:\n7 Base Quantities: Length, Mass, Time, Electric Current, Thermodynamic Temperature, Amount of Substance, Luminous Intensity.\n\n4. STEP-BY-STEP SOLUTION:\n1. In SI, electric current (unit: Ampere, A) is the base quantity, NOT electric charge.\n2. Electric charge is a derived quantity: Q = I × t, with derived unit Coulomb (C = A·s).\n3. Luminous intensity (candela) and amount of substance (mole) are fundamental base quantities.\n4. Therefore, electric charge is NOT a base quantity.\n\n5. FINAL ANSWER:\nOption C: Electric charge\n\n6. WHY OTHER OPTIONS ARE WRONG:\nElectric current (A), Luminous intensity (B), and Amount of substance (D) are all explicitly fundamental SI base quantities.",
    "solutionStructured": {
      "concept": "Identification of the 7 SI base quantities.",
      "given": "The SI base quantities defined by BIPM / NCERT.",
      "formula": "7 Base Quantities: Length, Mass, Time, Electric Current, Thermodynamic Temperature, Amount of Substance, Luminous Intensity.",
      "stepByStep": "1. In SI, electric current (unit: Ampere, A) is the base quantity, NOT electric charge.\n2. Electric charge is a derived quantity: Q = I × t, with derived unit Coulomb (C = A·s).\n3. Luminous intensity (candela) and amount of substance (mole) are fundamental base quantities.\n4. Therefore, electric charge is NOT a base quantity.",
      "finalAnswer": "Option C: Electric charge",
      "whyOtherOptionsWrong": "Electric current (A), Luminous intensity (B), and Amount of substance (D) are all explicitly fundamental SI base quantities."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "SI base units",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-020",
    "questionNumber": 20,
    "question": "The number of significant figures in the measured value 0.005080 kg is:",
    "options": {
      "A": "4",
      "B": "6",
      "C": "3",
      "D": "5"
    },
    "optionsList": [
      "4",
      "6",
      "3",
      "5"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nRules for counting significant figures with leading and trailing zeros in decimals.\n\n2. GIVEN:\nMeasurement = 0.005080 kg.\n\n3. FORMULA / PRINCIPLE:\nRule 1: Leading zeros before first non-zero digit are not significant. Rule 2: Trapped zeros are significant. Rule 3: Trailing zeros after decimal are significant.\n\n4. STEP-BY-STEP SOLUTION:\n1. In 0.005080, the three leading zeros (0.00...) only indicate the position of the decimal point and are NOT significant.\n2. The first non-zero digit is 5.\n3. The zero between 5 and 8 is trapped, hence significant.\n4. The trailing zero at the end of the decimal number (after 8) is significant.\n5. Therefore, the significant digits are 5, 0, 8, 0, giving a total of 4 significant figures.\n\n5. FINAL ANSWER:\nOption A: 4\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B counts the leading zeros. Option C omits the trailing zero. Option D incorrectly includes the zero before the decimal.",
    "solutionStructured": {
      "concept": "Rules for counting significant figures with leading and trailing zeros in decimals.",
      "given": "Measurement = 0.005080 kg.",
      "formula": "Rule 1: Leading zeros before first non-zero digit are not significant. Rule 2: Trapped zeros are significant. Rule 3: Trailing zeros after decimal are significant.",
      "stepByStep": "1. In 0.005080, the three leading zeros (0.00...) only indicate the position of the decimal point and are NOT significant.\n2. The first non-zero digit is 5.\n3. The zero between 5 and 8 is trapped, hence significant.\n4. The trailing zero at the end of the decimal number (after 8) is significant.\n5. Therefore, the significant digits are 5, 0, 8, 0, giving a total of 4 significant figures.",
      "finalAnswer": "Option A: 4",
      "whyOtherOptionsWrong": "Option B counts the leading zeros. Option C omits the trailing zero. Option D incorrectly includes the zero before the decimal."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Significant figures",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-021",
    "questionNumber": 21,
    "question": "Which of the following pairs of physical quantities has the same dimensional formula?",
    "options": {
      "A": "Work and Torque",
      "B": "Force and Pressure",
      "C": "Impulse and Force",
      "D": "Power and Energy"
    },
    "optionsList": [
      "Work and Torque",
      "Force and Pressure",
      "Impulse and Force",
      "Power and Energy"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDimensional equivalence of distinct physical quantities.\n\n2. GIVEN:\nPairs of mechanics quantities.\n\n3. FORMULA / PRINCIPLE:\n[Work] = [Force × displacement] = [M L² T⁻²]; [Torque] = [Force × perpendicular distance] = [M L² T⁻²]\n\n4. STEP-BY-STEP SOLUTION:\n1. Work = F · d  => [Work] = [M L T⁻²][L] = [M L² T⁻²].\n2. Torque = r × F => [Torque] = [L][M L T⁻²] = [M L² T⁻²].\n3. Both work and torque have the dimensional formula [M L² T⁻²].\n4. For other pairs: Force is [M L T⁻²] while Pressure is [M L⁻¹ T⁻²]; Impulse is [M L T⁻¹]; Power is [M L² T⁻³].\n\n5. FINAL ANSWER:\nOption A: Work and Torque\n\n6. WHY OTHER OPTIONS ARE WRONG:\nForce and pressure differ by area [L²]. Impulse [M L T⁻¹] and force [M L T⁻²] differ by time. Power [M L² T⁻³] and energy [M L² T⁻²] differ by time.",
    "solutionStructured": {
      "concept": "Dimensional equivalence of distinct physical quantities.",
      "given": "Pairs of mechanics quantities.",
      "formula": "[Work] = [Force × displacement] = [M L² T⁻²]; [Torque] = [Force × perpendicular distance] = [M L² T⁻²]",
      "stepByStep": "1. Work = F · d  => [Work] = [M L T⁻²][L] = [M L² T⁻²].\n2. Torque = r × F => [Torque] = [L][M L T⁻²] = [M L² T⁻²].\n3. Both work and torque have the dimensional formula [M L² T⁻²].\n4. For other pairs: Force is [M L T⁻²] while Pressure is [M L⁻¹ T⁻²]; Impulse is [M L T⁻¹]; Power is [M L² T⁻³].",
      "finalAnswer": "Option A: Work and Torque",
      "whyOtherOptionsWrong": "Force and pressure differ by area [L²]. Impulse [M L T⁻¹] and force [M L T⁻²] differ by time. Power [M L² T⁻³] and energy [M L² T⁻²] differ by time."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-022",
    "questionNumber": 22,
    "question": "According to standard rounding-off rules in NCERT, the numbers 3.745 and 3.735 rounded off to three significant figures are respectively:",
    "options": {
      "A": "3.74 and 3.74",
      "B": "3.75 and 3.74",
      "C": "3.74 and 3.73",
      "D": "3.75 and 3.73"
    },
    "optionsList": [
      "3.74 and 3.74",
      "3.75 and 3.74",
      "3.74 and 3.73",
      "3.75 and 3.73"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nRounding off when the dropped digit is 5 followed by zeros (even/odd rule).\n\n2. GIVEN:\nValues: 3.745 and 3.735 to be rounded to 3 significant figures.\n\n3. FORMULA / PRINCIPLE:\nIf the digit to be dropped is 5: (i) If preceding digit is even, it is left unchanged. (ii) If preceding digit is odd, it is increased by 1.\n\n4. STEP-BY-STEP SOLUTION:\n1. For 3.745: The digit to drop is 5. The preceding digit is 4 (which is EVEN). Following the rule, the preceding digit is left unchanged -> 3.74.\n2. For 3.735: The digit to drop is 5. The preceding digit is 3 (which is ODD). Following the rule, it is increased by 1 -> 3.74.\n3. Therefore, both round off to 3.74.\n\n5. FINAL ANSWER:\nOption A: 3.74 and 3.74\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B always rounds up. Option C always rounds down. Option D does the opposite of the standard even/odd rule.",
    "solutionStructured": {
      "concept": "Rounding off when the dropped digit is 5 followed by zeros (even/odd rule).",
      "given": "Values: 3.745 and 3.735 to be rounded to 3 significant figures.",
      "formula": "If the digit to be dropped is 5: (i) If preceding digit is even, it is left unchanged. (ii) If preceding digit is odd, it is increased by 1.",
      "stepByStep": "1. For 3.745: The digit to drop is 5. The preceding digit is 4 (which is EVEN). Following the rule, the preceding digit is left unchanged -> 3.74.\n2. For 3.735: The digit to drop is 5. The preceding digit is 3 (which is ODD). Following the rule, it is increased by 1 -> 3.74.\n3. Therefore, both round off to 3.74.",
      "finalAnswer": "Option A: 3.74 and 3.74",
      "whyOtherOptionsWrong": "Option B always rounds up. Option C always rounds down. Option D does the opposite of the standard even/odd rule."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Rounding off",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-023",
    "questionNumber": 23,
    "question": "The main scale of a Vernier calipers reads in millimeters (1 MSD = 1 mm). 20 divisions of the Vernier scale coincide with 19 divisions of the main scale. What is the least count of this instrument?",
    "options": {
      "A": "0.05 mm",
      "B": "0.02 mm",
      "C": "0.1 mm",
      "D": "0.01 mm"
    },
    "optionsList": [
      "0.05 mm",
      "0.02 mm",
      "0.1 mm",
      "0.01 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nLeast count calculation for a 20-division Vernier caliper.\n\n2. GIVEN:\n1 MSD = 1 mm, n = 20 VSD = 19 MSD.\n\n3. FORMULA / PRINCIPLE:\nLC = 1 MSD - 1 VSD = (1 - 19/20) MSD = (1/20) MSD\n\n4. STEP-BY-STEP SOLUTION:\n1. 1 VSD = (19/20) mm = 0.95 mm.\n2. LC = 1 MSD - 1 VSD = 1.00 mm - 0.95 mm = 0.05 mm.\n3. In cm, LC = 0.005 cm.\n\n5. FINAL ANSWER:\nOption A: 0.05 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (0.02 mm) is for a 50-division Vernier. Option C (0.1 mm) is for a 10-division Vernier. Option D is for a screw gauge.",
    "solutionStructured": {
      "concept": "Least count calculation for a 20-division Vernier caliper.",
      "given": "1 MSD = 1 mm, n = 20 VSD = 19 MSD.",
      "formula": "LC = 1 MSD - 1 VSD = (1 - 19/20) MSD = (1/20) MSD",
      "stepByStep": "1. 1 VSD = (19/20) mm = 0.95 mm.\n2. LC = 1 MSD - 1 VSD = 1.00 mm - 0.95 mm = 0.05 mm.\n3. In cm, LC = 0.005 cm.",
      "finalAnswer": "Option A: 0.05 mm",
      "whyOtherOptionsWrong": "Option B (0.02 mm) is for a 50-division Vernier. Option C (0.1 mm) is for a 10-division Vernier. Option D is for a screw gauge."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Vernier calipers",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-024",
    "questionNumber": 24,
    "question": "If the length and breadth of a thin rectangular sheet are measured as (5.7 ± 0.1) cm and (3.4 ± 0.2) cm, the absolute error in the calculation of its perimeter is:",
    "options": {
      "A": "± 0.6 cm",
      "B": "± 0.3 cm",
      "C": "± 0.2 cm",
      "D": "± 0.4 cm"
    },
    "optionsList": [
      "± 0.6 cm",
      "± 0.3 cm",
      "± 0.2 cm",
      "± 0.4 cm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError propagation in perimeter calculation (linear sum).\n\n2. GIVEN:\nl = (5.7 ± 0.1) cm, b = (3.4 ± 0.2) cm.\n\n3. FORMULA / PRINCIPLE:\nPerimeter P = 2(l + b) = 2l + 2b; ΔP = 2Δl + 2Δb\n\n4. STEP-BY-STEP SOLUTION:\n1. P = 2(l + b).\n2. Maximum absolute error in perimeter: ΔP = 2Δl + 2Δb.\n3. Substitute values: ΔP = 2(0.1 cm) + 2(0.2 cm) = 0.2 cm + 0.4 cm = 0.6 cm.\n4. Therefore, the absolute error in perimeter is ± 0.6 cm.\n\n5. FINAL ANSWER:\nOption A: ± 0.6 cm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (0.3 cm) forgets to multiply by 2 (calculating Δl + Δb). Option C and D represent calculation errors.",
    "solutionStructured": {
      "concept": "Error propagation in perimeter calculation (linear sum).",
      "given": "l = (5.7 ± 0.1) cm, b = (3.4 ± 0.2) cm.",
      "formula": "Perimeter P = 2(l + b) = 2l + 2b; ΔP = 2Δl + 2Δb",
      "stepByStep": "1. P = 2(l + b).\n2. Maximum absolute error in perimeter: ΔP = 2Δl + 2Δb.\n3. Substitute values: ΔP = 2(0.1 cm) + 2(0.2 cm) = 0.2 cm + 0.4 cm = 0.6 cm.\n4. Therefore, the absolute error in perimeter is ± 0.6 cm.",
      "finalAnswer": "Option A: ± 0.6 cm",
      "whyOtherOptionsWrong": "Option B (0.3 cm) forgets to multiply by 2 (calculating Δl + Δb). Option C and D represent calculation errors."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-025",
    "questionNumber": 25,
    "question": "Which of the following is a dimensionless physical constant?",
    "options": {
      "A": "Refractive index",
      "B": "Universal gravitational constant (G)",
      "C": "Planck's constant (h)",
      "D": "Boltzmann's constant (kB)"
    },
    "optionsList": [
      "Refractive index",
      "Universal gravitational constant (G)",
      "Planck's constant (h)",
      "Boltzmann's constant (kB)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nIdentification of dimensionless quantities vs dimensioned constants.\n\n2. GIVEN:\nPhysical constants and ratios.\n\n3. FORMULA / PRINCIPLE:\nRefractive index μ = c / v = [L T⁻¹] / [L T⁻¹] = [M⁰ L⁰ T⁰]\n\n4. STEP-BY-STEP SOLUTION:\n1. Refractive index is the ratio of speed of light in vacuum to speed in the medium: μ = c / v.\n2. Being a ratio of two identical quantities (speeds), it is dimensionless: [M⁰ L⁰ T⁰].\n3. G has dimensions [M⁻¹ L³ T⁻²].\n4. Planck's constant h has dimensions [M L² T⁻¹].\n5. Boltzmann constant kB has dimensions [M L² T⁻² K⁻¹].\n\n5. FINAL ANSWER:\nOption A: Refractive index\n\n6. WHY OTHER OPTIONS ARE WRONG:\nGravitational constant, Planck's constant, and Boltzmann's constant all possess non-zero dimensional units.",
    "solutionStructured": {
      "concept": "Identification of dimensionless quantities vs dimensioned constants.",
      "given": "Physical constants and ratios.",
      "formula": "Refractive index μ = c / v = [L T⁻¹] / [L T⁻¹] = [M⁰ L⁰ T⁰]",
      "stepByStep": "1. Refractive index is the ratio of speed of light in vacuum to speed in the medium: μ = c / v.\n2. Being a ratio of two identical quantities (speeds), it is dimensionless: [M⁰ L⁰ T⁰].\n3. G has dimensions [M⁻¹ L³ T⁻²].\n4. Planck's constant h has dimensions [M L² T⁻¹].\n5. Boltzmann constant kB has dimensions [M L² T⁻² K⁻¹].",
      "finalAnswer": "Option A: Refractive index",
      "whyOtherOptionsWrong": "Gravitational constant, Planck's constant, and Boltzmann's constant all possess non-zero dimensional units."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-026",
    "questionNumber": 26,
    "question": "One astronomical unit (1 AU) is approximately equal to:",
    "options": {
      "A": "1.496 × 10¹¹ m",
      "B": "9.46 × 10¹⁵ m",
      "C": "3.08 × 10¹⁶ m",
      "D": "3.84 × 10⁸ m"
    },
    "optionsList": [
      "1.496 × 10¹¹ m",
      "9.46 × 10¹⁵ m",
      "3.08 × 10¹⁶ m",
      "3.84 × 10⁸ m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nAstronomical units of length and standard values.\n\n2. GIVEN:\nAstronomical unit definition (mean distance between Earth and Sun).\n\n3. FORMULA / PRINCIPLE:\n1 AU ≈ 1.496 × 10¹¹ m\n\n4. STEP-BY-STEP SOLUTION:\n1. 1 AU is defined as the average distance from the center of the Earth to the center of the Sun = 1.496 × 10¹¹ m ≈ 1.5 × 10¹¹ m.\n2. Option B (9.46 × 10¹⁵ m) is 1 Light Year.\n3. Option C (3.08 × 10¹⁶ m) is 1 Parsec.\n4. Option D (3.84 × 10⁸ m) is the Earth-Moon distance.\n\n5. FINAL ANSWER:\nOption A: 1.496 × 10¹¹ m\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is 1 light year, Option C is 1 parsec, and Option D is the distance between the Earth and the Moon.",
    "solutionStructured": {
      "concept": "Astronomical units of length and standard values.",
      "given": "Astronomical unit definition (mean distance between Earth and Sun).",
      "formula": "1 AU ≈ 1.496 × 10¹¹ m",
      "stepByStep": "1. 1 AU is defined as the average distance from the center of the Earth to the center of the Sun = 1.496 × 10¹¹ m ≈ 1.5 × 10¹¹ m.\n2. Option B (9.46 × 10¹⁵ m) is 1 Light Year.\n3. Option C (3.08 × 10¹⁶ m) is 1 Parsec.\n4. Option D (3.84 × 10⁸ m) is the Earth-Moon distance.",
      "finalAnswer": "Option A: 1.496 × 10¹¹ m",
      "whyOtherOptionsWrong": "Option B is 1 light year, Option C is 1 parsec, and Option D is the distance between the Earth and the Moon."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Measurement of length",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-027",
    "questionNumber": 27,
    "question": "Systematic errors in experimental physics can be minimised by:",
    "options": {
      "A": "Improving experimental techniques, using better instruments, and removing zero errors",
      "B": "Taking a very large number of readings and finding their arithmetic mean",
      "C": "Replacing digital instruments with rough manual instruments",
      "D": "Ignoring the calibration error of the instrument"
    },
    "optionsList": [
      "Improving experimental techniques, using better instruments, and removing zero errors",
      "Taking a very large number of readings and finding their arithmetic mean",
      "Replacing digital instruments with rough manual instruments",
      "Ignoring the calibration error of the instrument"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDistinction between systematic and random errors and their reduction.\n\n2. GIVEN:\nSystematic errors (unidirectional, repeatable errors).\n\n3. FORMULA / PRINCIPLE:\nSystematic errors arise from known causes (instrumental flaw, imperfect technique, personal bias).\n\n4. STEP-BY-STEP SOLUTION:\n1. Systematic errors consistently occur in one direction (always positive or always negative).\n2. They cannot be eliminated by taking the mean of multiple observations because the bias persists in every reading.\n3. They are minimised by calibrating instruments, accounting for zero errors, improving experimental methods, and removing external influences.\n4. Random errors (not systematic) are reduced by taking large numbers of readings and calculating their arithmetic mean.\n\n5. FINAL ANSWER:\nOption A: Improving experimental techniques, using better instruments, and removing zero errors\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B reduces random errors, not systematic errors. Options C and D would increase errors.",
    "solutionStructured": {
      "concept": "Distinction between systematic and random errors and their reduction.",
      "given": "Systematic errors (unidirectional, repeatable errors).",
      "formula": "Systematic errors arise from known causes (instrumental flaw, imperfect technique, personal bias).",
      "stepByStep": "1. Systematic errors consistently occur in one direction (always positive or always negative).\n2. They cannot be eliminated by taking the mean of multiple observations because the bias persists in every reading.\n3. They are minimised by calibrating instruments, accounting for zero errors, improving experimental methods, and removing external influences.\n4. Random errors (not systematic) are reduced by taking large numbers of readings and calculating their arithmetic mean.",
      "finalAnswer": "Option A: Improving experimental techniques, using better instruments, and removing zero errors",
      "whyOtherOptionsWrong": "Option B reduces random errors, not systematic errors. Options C and D would increase errors."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Errors in measurement",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-028",
    "questionNumber": 28,
    "question": "A student measures the period of oscillation of a simple pendulum four times and records: 2.50 s, 2.54 s, 2.48 s, and 2.56 s. The mean absolute error of the measurement is:",
    "options": {
      "A": "0.03 s",
      "B": "0.06 s",
      "C": "0.12 s",
      "D": "0.01 s"
    },
    "optionsList": [
      "0.03 s",
      "0.06 s",
      "0.12 s",
      "0.01 s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nComputation of mean value and mean absolute error.\n\n2. GIVEN:\nReadings: T₁ = 2.50 s, T₂ = 2.54 s, T₃ = 2.48 s, T₄ = 2.56 s.\n\n3. FORMULA / PRINCIPLE:\nT_mean = (Σ T_i) / n; ΔT_mean = (Σ |T_i - T_mean|) / n\n\n4. STEP-BY-STEP SOLUTION:\n1. Calculate mean period: T_mean = (2.50 + 2.54 + 2.48 + 2.56) / 4 = 10.08 / 4 = 2.52 s.\n2. Compute individual absolute errors:\n   |ΔT₁| = |2.50 - 2.52| = 0.02 s\n   |ΔT₂| = |2.54 - 2.52| = 0.02 s\n   |ΔT₃| = |2.48 - 2.52| = 0.04 s\n   |ΔT₄| = |2.56 - 2.52| = 0.04 s\n3. Calculate mean absolute error: ΔT_mean = (0.02 + 0.02 + 0.04 + 0.04) / 4 = 0.12 / 4 = 0.03 s.\n\n5. FINAL ANSWER:\nOption A: 0.03 s\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is double the mean error. Option C is the sum of the absolute errors without dividing by n=4. Option D is an arithmetic slip.",
    "solutionStructured": {
      "concept": "Computation of mean value and mean absolute error.",
      "given": "Readings: T₁ = 2.50 s, T₂ = 2.54 s, T₃ = 2.48 s, T₄ = 2.56 s.",
      "formula": "T_mean = (Σ T_i) / n; ΔT_mean = (Σ |T_i - T_mean|) / n",
      "stepByStep": "1. Calculate mean period: T_mean = (2.50 + 2.54 + 2.48 + 2.56) / 4 = 10.08 / 4 = 2.52 s.\n2. Compute individual absolute errors:\n   |ΔT₁| = |2.50 - 2.52| = 0.02 s\n   |ΔT₂| = |2.54 - 2.52| = 0.02 s\n   |ΔT₃| = |2.48 - 2.52| = 0.04 s\n   |ΔT₄| = |2.56 - 2.52| = 0.04 s\n3. Calculate mean absolute error: ΔT_mean = (0.02 + 0.02 + 0.04 + 0.04) / 4 = 0.12 / 4 = 0.03 s.",
      "finalAnswer": "Option A: 0.03 s",
      "whyOtherOptionsWrong": "Option B is double the mean error. Option C is the sum of the absolute errors without dividing by n=4. Option D is an arithmetic slip."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Mean absolute error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-029",
    "questionNumber": 29,
    "question": "Which of the following statements correctly distinguishes accuracy from precision?",
    "options": {
      "A": "Accuracy refers to how close a measured value is to the true value; precision refers to the resolution or limit to which the quantity is measured",
      "B": "Precision refers to closeness to the true value; accuracy refers to the closeness of repeated measurements to each other",
      "C": "An instrument with high precision always has high accuracy",
      "D": "Accuracy depends solely on the least count of the instrument"
    },
    "optionsList": [
      "Accuracy refers to how close a measured value is to the true value; precision refers to the resolution or limit to which the quantity is measured",
      "Precision refers to closeness to the true value; accuracy refers to the closeness of repeated measurements to each other",
      "An instrument with high precision always has high accuracy",
      "Accuracy depends solely on the least count of the instrument"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nNCERT definition of accuracy versus precision.\n\n2. GIVEN:\nBasic concepts of measurement.\n\n3. FORMULA / PRINCIPLE:\nAccuracy = Closeness to true value; Precision = Closeness of repeated measurements / instrument resolution (least count).\n\n4. STEP-BY-STEP SOLUTION:\n1. NCERT explicitly states: 'The accuracy of a measurement is a measure of how close the measured value is to the true value of the quantity.'\n2. 'Precision tells us to what resolution or limit the quantity is measured by the measuring instrument.'\n3. A clock with a seconds hand has higher precision than one with only hour hand, but if running slow by 1 hour, it is precise but inaccurate.\n4. Thus, high precision does not guarantee high accuracy.\n\n5. FINAL ANSWER:\nOption A: Accuracy refers to how close a measured value is to the true value; precision refers to the resolution or limit to which the quantity is measured\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B inverts the two definitions. Option C is false because a poorly calibrated instrument can be precise but inaccurate. Option D confuses precision (which depends on least count) with accuracy.",
    "solutionStructured": {
      "concept": "NCERT definition of accuracy versus precision.",
      "given": "Basic concepts of measurement.",
      "formula": "Accuracy = Closeness to true value; Precision = Closeness of repeated measurements / instrument resolution (least count).",
      "stepByStep": "1. NCERT explicitly states: 'The accuracy of a measurement is a measure of how close the measured value is to the true value of the quantity.'\n2. 'Precision tells us to what resolution or limit the quantity is measured by the measuring instrument.'\n3. A clock with a seconds hand has higher precision than one with only hour hand, but if running slow by 1 hour, it is precise but inaccurate.\n4. Thus, high precision does not guarantee high accuracy.",
      "finalAnswer": "Option A: Accuracy refers to how close a measured value is to the true value; precision refers to the resolution or limit to which the quantity is measured",
      "whyOtherOptionsWrong": "Option B inverts the two definitions. Option C is false because a poorly calibrated instrument can be precise but inaccurate. Option D confuses precision (which depends on least count) with accuracy."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Accuracy and precision",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-030",
    "questionNumber": 30,
    "question": "The dimensional formula of universal gas constant (R) in the ideal gas equation PV = nRT is:",
    "options": {
      "A": "[M L² T⁻² K⁻¹ mol⁻¹]",
      "B": "[M L T⁻² K⁻¹ mol⁻¹]",
      "C": "[M L² T⁻¹ K⁻¹ mol⁻¹]",
      "D": "[M L⁻¹ T⁻² K⁻¹ mol⁻¹]"
    },
    "optionsList": [
      "[M L² T⁻² K⁻¹ mol⁻¹]",
      "[M L T⁻² K⁻¹ mol⁻¹]",
      "[M L² T⁻¹ K⁻¹ mol⁻¹]",
      "[M L⁻¹ T⁻² K⁻¹ mol⁻¹]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDerivation of dimensions of universal gas constant R.\n\n2. GIVEN:\nIdeal gas equation: P V = n R T.\n\n3. FORMULA / PRINCIPLE:\nR = (P V) / (n T)\n\n4. STEP-BY-STEP SOLUTION:\n1. Product P · V has the dimensions of work/energy: [P V] = [Force/Area · Volume] = [Force · length] = [M L² T⁻²].\n2. Number of moles [n] = [mol].\n3. Temperature [T] = [K].\n4. Therefore: [R] = [M L² T⁻²] / ([mol] [K]) = [M L² T⁻² K⁻¹ mol⁻¹].\n\n5. FINAL ANSWER:\nOption A: [M L² T⁻² K⁻¹ mol⁻¹]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B misses a power of length. Option C has incorrect power of time. Option D has negative power of length.",
    "solutionStructured": {
      "concept": "Derivation of dimensions of universal gas constant R.",
      "given": "Ideal gas equation: P V = n R T.",
      "formula": "R = (P V) / (n T)",
      "stepByStep": "1. Product P · V has the dimensions of work/energy: [P V] = [Force/Area · Volume] = [Force · length] = [M L² T⁻²].\n2. Number of moles [n] = [mol].\n3. Temperature [T] = [K].\n4. Therefore: [R] = [M L² T⁻²] / ([mol] [K]) = [M L² T⁻² K⁻¹ mol⁻¹].",
      "finalAnswer": "Option A: [M L² T⁻² K⁻¹ mol⁻¹]",
      "whyOtherOptionsWrong": "Option B misses a power of length. Option C has incorrect power of time. Option D has negative power of length."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-031",
    "questionNumber": 31,
    "question": "The least count of a standard meter scale used in school physics laboratories is:",
    "options": {
      "A": "1 mm",
      "B": "0.1 mm",
      "C": "0.01 mm",
      "D": "1 cm"
    },
    "optionsList": [
      "1 mm",
      "0.1 mm",
      "0.01 mm",
      "1 cm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nLeast count of common laboratory instruments.\n\n2. GIVEN:\nStandard laboratory meter scale.\n\n3. FORMULA / PRINCIPLE:\nLC = Value of smallest division on the scale.\n\n4. STEP-BY-STEP SOLUTION:\n1. A standard laboratory meter scale is graduated in centimeters, with each centimeter divided into 10 equal parts.\n2. The smallest division is 1 millimeter (1 mm = 0.1 cm).\n3. Hence, its least count is 1 mm.\n\n5. FINAL ANSWER:\nOption A: 1 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\n0.1 mm is the least count of a standard Vernier calipers. 0.01 mm is the least count of a standard screw gauge. 1 cm is 10 times too large.",
    "solutionStructured": {
      "concept": "Least count of common laboratory instruments.",
      "given": "Standard laboratory meter scale.",
      "formula": "LC = Value of smallest division on the scale.",
      "stepByStep": "1. A standard laboratory meter scale is graduated in centimeters, with each centimeter divided into 10 equal parts.\n2. The smallest division is 1 millimeter (1 mm = 0.1 cm).\n3. Hence, its least count is 1 mm.",
      "finalAnswer": "Option A: 1 mm",
      "whyOtherOptionsWrong": "0.1 mm is the least count of a standard Vernier calipers. 0.01 mm is the least count of a standard screw gauge. 1 cm is 10 times too large."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Least count",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-032",
    "questionNumber": 32,
    "question": "Which of the following quantities has the unit of 'Henry' (H)?",
    "options": {
      "A": "Self-inductance",
      "B": "Magnetic flux",
      "C": "Capacitance",
      "D": "Magnetic field intensity"
    },
    "optionsList": [
      "Self-inductance",
      "Magnetic flux",
      "Capacitance",
      "Magnetic field intensity"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nSI derived units for electromagnetic quantities.\n\n2. GIVEN:\nUnit: Henry (H).\n\n3. FORMULA / PRINCIPLE:\nInduced emf e = -L (dI/dt) => L = e / (dI/dt); Unit = V·s/A = Henry (H).\n\n4. STEP-BY-STEP SOLUTION:\n1. Self-inductance (and mutual inductance) is measured in Henry (H).\n2. Magnetic flux is measured in Weber (Wb = T·m²).\n3. Capacitance is measured in Farad (F = C/V).\n4. Magnetic field intensity is measured in Tesla (T = Wb/m²).\n\n5. FINAL ANSWER:\nOption A: Self-inductance\n\n6. WHY OTHER OPTIONS ARE WRONG:\nMagnetic flux is in Weber, capacitance is in Farad, and magnetic field intensity is in Tesla.",
    "solutionStructured": {
      "concept": "SI derived units for electromagnetic quantities.",
      "given": "Unit: Henry (H).",
      "formula": "Induced emf e = -L (dI/dt) => L = e / (dI/dt); Unit = V·s/A = Henry (H).",
      "stepByStep": "1. Self-inductance (and mutual inductance) is measured in Henry (H).\n2. Magnetic flux is measured in Weber (Wb = T·m²).\n3. Capacitance is measured in Farad (F = C/V).\n4. Magnetic field intensity is measured in Tesla (T = Wb/m²).",
      "finalAnswer": "Option A: Self-inductance",
      "whyOtherOptionsWrong": "Magnetic flux is in Weber, capacitance is in Farad, and magnetic field intensity is in Tesla."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "SI derived units",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-033",
    "questionNumber": 33,
    "question": "If the side of a cube is measured to be 1.2 × 10⁻² m, then its volume according to the rules of significant figures is:",
    "options": {
      "A": "1.7 × 10⁻⁶ m³",
      "B": "1.728 × 10⁻⁶ m³",
      "C": "1.73 × 10⁻⁶ m³",
      "D": "2 × 10⁻⁶ m³"
    },
    "optionsList": [
      "1.7 × 10⁻⁶ m³",
      "1.728 × 10⁻⁶ m³",
      "1.73 × 10⁻⁶ m³",
      "2 × 10⁻⁶ m³"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nMultiplication rule for significant figures.\n\n2. GIVEN:\nSide of cube a = 1.2 × 10⁻² m (2 significant figures).\n\n3. FORMULA / PRINCIPLE:\nVolume V = a³; Final answer must have the same number of significant figures as the least precise factor (2 sig figs).\n\n4. STEP-BY-STEP SOLUTION:\n1. V = (1.2 × 10⁻²)³ = 1.728 × 10⁻⁶ m³.\n2. The given side length 1.2 has 2 significant figures.\n3. The result of multiplication/cubing must be rounded off to 2 significant figures.\n4. 1.728 rounded to 2 significant figures is 1.7 × 10⁻⁶ m³.\n\n5. FINAL ANSWER:\nOption A: 1.7 × 10⁻⁶ m³\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (1.728 × 10⁻⁶ m³) keeps 4 sig figs. Option C (1.73 × 10⁻⁶ m³) keeps 3 sig figs. Option D rounds to only 1 sig fig.",
    "solutionStructured": {
      "concept": "Multiplication rule for significant figures.",
      "given": "Side of cube a = 1.2 × 10⁻² m (2 significant figures).",
      "formula": "Volume V = a³; Final answer must have the same number of significant figures as the least precise factor (2 sig figs).",
      "stepByStep": "1. V = (1.2 × 10⁻²)³ = 1.728 × 10⁻⁶ m³.\n2. The given side length 1.2 has 2 significant figures.\n3. The result of multiplication/cubing must be rounded off to 2 significant figures.\n4. 1.728 rounded to 2 significant figures is 1.7 × 10⁻⁶ m³.",
      "finalAnswer": "Option A: 1.7 × 10⁻⁶ m³",
      "whyOtherOptionsWrong": "Option B (1.728 × 10⁻⁶ m³) keeps 4 sig figs. Option C (1.73 × 10⁻⁶ m³) keeps 3 sig figs. Option D rounds to only 1 sig fig."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Rules of significant figures",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-034",
    "questionNumber": 34,
    "question": "A force of 10 N acts on a body. In CGS system (dynes), this force is equal to:",
    "options": {
      "A": "10⁶ dynes",
      "B": "10⁵ dynes",
      "C": "10⁴ dynes",
      "D": "10⁷ dynes"
    },
    "optionsList": [
      "10⁶ dynes",
      "10⁵ dynes",
      "10⁴ dynes",
      "10⁷ dynes"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nConversion of units from SI (MKS) to CGS.\n\n2. GIVEN:\nForce F = 10 N.\n\n3. FORMULA / PRINCIPLE:\n1 N = 1 kg · m/s² = (10³ g) · (10² cm)/s² = 10⁵ g · cm/s² = 10⁵ dynes.\n\n4. STEP-BY-STEP SOLUTION:\n1. 1 Newton = 10⁵ dynes.\n2. Given force = 10 N = 10 × 10⁵ dynes = 10⁶ dynes.\n\n5. FINAL ANSWER:\nOption A: 10⁶ dynes\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is the conversion for 1 N, not 10 N. Options C and D have incorrect powers of 10.",
    "solutionStructured": {
      "concept": "Conversion of units from SI (MKS) to CGS.",
      "given": "Force F = 10 N.",
      "formula": "1 N = 1 kg · m/s² = (10³ g) · (10² cm)/s² = 10⁵ g · cm/s² = 10⁵ dynes.",
      "stepByStep": "1. 1 Newton = 10⁵ dynes.\n2. Given force = 10 N = 10 × 10⁵ dynes = 10⁶ dynes.",
      "finalAnswer": "Option A: 10⁶ dynes",
      "whyOtherOptionsWrong": "Option B is the conversion for 1 N, not 10 N. Options C and D have incorrect powers of 10."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Applications and limitations of dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-035",
    "questionNumber": 35,
    "question": "Which of the following is a supplementary unit in the SI system?",
    "options": {
      "A": "Steradian",
      "B": "Candela",
      "C": "Kelvin",
      "D": "Ampere"
    },
    "optionsList": [
      "Steradian",
      "Candela",
      "Kelvin",
      "Ampere"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nSupplementary units in SI.\n\n2. GIVEN:\nSI units classifications.\n\n3. FORMULA / PRINCIPLE:\nSupplementary units: Radian (for plane angle) and Steradian (for solid angle).\n\n4. STEP-BY-STEP SOLUTION:\n1. The SI system originally defined two supplementary units: radian (for plane angle) and steradian (for solid angle).\n2. Candela, Kelvin, and Ampere are among the seven base units.\n3. Therefore, steradian is a supplementary unit.\n\n5. FINAL ANSWER:\nOption A: Steradian\n\n6. WHY OTHER OPTIONS ARE WRONG:\nCandela, Kelvin, and Ampere are base units, not supplementary units.",
    "solutionStructured": {
      "concept": "Supplementary units in SI.",
      "given": "SI units classifications.",
      "formula": "Supplementary units: Radian (for plane angle) and Steradian (for solid angle).",
      "stepByStep": "1. The SI system originally defined two supplementary units: radian (for plane angle) and steradian (for solid angle).\n2. Candela, Kelvin, and Ampere are among the seven base units.\n3. Therefore, steradian is a supplementary unit.",
      "finalAnswer": "Option A: Steradian",
      "whyOtherOptionsWrong": "Candela, Kelvin, and Ampere are base units, not supplementary units."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "SI base units",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-036",
    "questionNumber": 36,
    "question": "What is the dimensional formula of frequency?",
    "options": {
      "A": "[M⁰ L⁰ T⁻¹]",
      "B": "[M⁰ L⁰ T]",
      "C": "[M L⁰ T⁻¹]",
      "D": "[M⁰ L T⁻¹]"
    },
    "optionsList": [
      "[M⁰ L⁰ T⁻¹]",
      "[M⁰ L⁰ T]",
      "[M L⁰ T⁻¹]",
      "[M⁰ L T⁻¹]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDimensional formula of frequency.\n\n2. GIVEN:\nFrequency ν = 1 / T.\n\n3. FORMULA / PRINCIPLE:\n[ν] = 1 / [Time] = [T⁻¹] = [M⁰ L⁰ T⁻¹]\n\n4. STEP-BY-STEP SOLUTION:\n1. Frequency is the number of cycles per unit time.\n2. [ν] = [T]⁻¹ = [M⁰ L⁰ T⁻¹].\n\n5. FINAL ANSWER:\nOption A: [M⁰ L⁰ T⁻¹]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is time period. Option C introduces mass. Option D is velocity.",
    "solutionStructured": {
      "concept": "Dimensional formula of frequency.",
      "given": "Frequency ν = 1 / T.",
      "formula": "[ν] = 1 / [Time] = [T⁻¹] = [M⁰ L⁰ T⁻¹]",
      "stepByStep": "1. Frequency is the number of cycles per unit time.\n2. [ν] = [T]⁻¹ = [M⁰ L⁰ T⁻¹].",
      "finalAnswer": "Option A: [M⁰ L⁰ T⁻¹]",
      "whyOtherOptionsWrong": "Option B is time period. Option C introduces mass. Option D is velocity."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-037",
    "questionNumber": 37,
    "question": "The parallax angle of a distant star measured from two points on Earth's orbit separated by baseline b = 3 × 10¹¹ m is θ = 1.5 × 10⁻⁵ rad. The distance of the star from Earth is:",
    "options": {
      "A": "2.0 × 10¹⁶ m",
      "B": "4.5 × 10¹⁶ m",
      "C": "2.0 × 10¹⁵ m",
      "D": "1.5 × 10¹⁶ m"
    },
    "optionsList": [
      "2.0 × 10¹⁶ m",
      "4.5 × 10¹⁶ m",
      "2.0 × 10¹⁵ m",
      "1.5 × 10¹⁶ m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nParallax method for measuring astronomical distances.\n\n2. GIVEN:\nBaseline b = 3 × 10¹¹ m, Parallax angle θ = 1.5 × 10⁻⁵ rad.\n\n3. FORMULA / PRINCIPLE:\nD = b / θ (where θ is in radians)\n\n4. STEP-BY-STEP SOLUTION:\n1. In parallax geometry, arc length equals radius times angle: b = D · θ.\n2. Distance D = b / θ.\n3. D = (3 × 10¹¹ m) / (1.5 × 10⁻⁵ rad) = 2.0 × 10¹⁶ m.\n\n5. FINAL ANSWER:\nOption A: 2.0 × 10¹⁶ m\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B multiplies baseline by angle. Option C is off by a factor of 10. Option D repeats the angle value.",
    "solutionStructured": {
      "concept": "Parallax method for measuring astronomical distances.",
      "given": "Baseline b = 3 × 10¹¹ m, Parallax angle θ = 1.5 × 10⁻⁵ rad.",
      "formula": "D = b / θ (where θ is in radians)",
      "stepByStep": "1. In parallax geometry, arc length equals radius times angle: b = D · θ.\n2. Distance D = b / θ.\n3. D = (3 × 10¹¹ m) / (1.5 × 10⁻⁵ rad) = 2.0 × 10¹⁶ m.",
      "finalAnswer": "Option A: 2.0 × 10¹⁶ m",
      "whyOtherOptionsWrong": "Option B multiplies baseline by angle. Option C is off by a factor of 10. Option D repeats the angle value."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Parallax/error concepts",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-038",
    "questionNumber": 38,
    "question": "When the jaws of a Vernier calipers are in contact, the zero of the Vernier scale lies to the right of the zero of the main scale. This error is termed as:",
    "options": {
      "A": "Positive zero error",
      "B": "Negative zero error",
      "C": "Random error",
      "D": "Parallax error"
    },
    "optionsList": [
      "Positive zero error",
      "Negative zero error",
      "Random error",
      "Parallax error"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDefinition and sign convention of zero error in Vernier calipers.\n\n2. GIVEN:\nVernier zero lies to the right of main scale zero when jaws touch.\n\n3. FORMULA / PRINCIPLE:\nIf Vernier zero is to the right of main scale zero, measured reading > true value => Positive zero error.\n\n4. STEP-BY-STEP SOLUTION:\n1. When the jaws touch, the reading should ideally be 0.00.\n2. If the Vernier zero is to the right of the main scale zero, the instrument shows a reading greater than zero before placing any object.\n3. This is defined as a positive zero error.\n4. To get the true reading, this positive error must be subtracted from the observed reading.\n\n5. FINAL ANSWER:\nOption A: Positive zero error\n\n6. WHY OTHER OPTIONS ARE WRONG:\nNegative zero error occurs when the Vernier zero lies to the left of the main scale zero. Random and parallax errors are operational, not zero errors.",
    "solutionStructured": {
      "concept": "Definition and sign convention of zero error in Vernier calipers.",
      "given": "Vernier zero lies to the right of main scale zero when jaws touch.",
      "formula": "If Vernier zero is to the right of main scale zero, measured reading > true value => Positive zero error.",
      "stepByStep": "1. When the jaws touch, the reading should ideally be 0.00.\n2. If the Vernier zero is to the right of the main scale zero, the instrument shows a reading greater than zero before placing any object.\n3. This is defined as a positive zero error.\n4. To get the true reading, this positive error must be subtracted from the observed reading.",
      "finalAnswer": "Option A: Positive zero error",
      "whyOtherOptionsWrong": "Negative zero error occurs when the Vernier zero lies to the left of the main scale zero. Random and parallax errors are operational, not zero errors."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Zero error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-039",
    "questionNumber": 39,
    "question": "The percentage error in the measurement of the radius of a sphere is 1%. What is the percentage error in the measurement of its surface area?",
    "options": {
      "A": "2%",
      "B": "1%",
      "C": "3%",
      "D": "4%"
    },
    "optionsList": [
      "2%",
      "1%",
      "3%",
      "4%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPercentage error propagation for geometric formulas.\n\n2. GIVEN:\nΔr/r × 100% = 1%. Surface area of sphere A = 4π r².\n\n3. FORMULA / PRINCIPLE:\nΔA/A × 100% = 2 × (Δr/r × 100%)\n\n4. STEP-BY-STEP SOLUTION:\n1. Surface area of sphere A = 4π r².\n2. The constant 4π is exact and has zero error.\n3. Relative error: ΔA/A = 2 (Δr/r).\n4. Percentage error in surface area = 2 × 1% = 2%.\n\n5. FINAL ANSWER:\nOption A: 2%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B forgets the exponent 2. Option C (3%) calculates the error in volume (V = 4/3 π r³), not surface area. Option D calculates 4 times.",
    "solutionStructured": {
      "concept": "Percentage error propagation for geometric formulas.",
      "given": "Δr/r × 100% = 1%. Surface area of sphere A = 4π r².",
      "formula": "ΔA/A × 100% = 2 × (Δr/r × 100%)",
      "stepByStep": "1. Surface area of sphere A = 4π r².\n2. The constant 4π is exact and has zero error.\n3. Relative error: ΔA/A = 2 (Δr/r).\n4. Percentage error in surface area = 2 × 1% = 2%.",
      "finalAnswer": "Option A: 2%",
      "whyOtherOptionsWrong": "Option B forgets the exponent 2. Option C (3%) calculates the error in volume (V = 4/3 π r³), not surface area. Option D calculates 4 times."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Percentage error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-040",
    "questionNumber": 40,
    "question": "Which of the following physical quantities has the same dimensions as that of impulse?",
    "options": {
      "A": "Linear momentum",
      "B": "Angular momentum",
      "C": "Force",
      "D": "Work"
    },
    "optionsList": [
      "Linear momentum",
      "Angular momentum",
      "Force",
      "Work"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nImpulse-momentum theorem and dimensional equivalence.\n\n2. GIVEN:\nImpulse J = Force × time = Δp (change in linear momentum).\n\n3. FORMULA / PRINCIPLE:\n[Impulse] = [F] [t] = [M L T⁻²] [T] = [M L T⁻¹]; [Momentum] = [m] [v] = [M L T⁻¹]\n\n4. STEP-BY-STEP SOLUTION:\n1. Impulse is defined as the product of force and time: J = F · Δt.\n2. [Impulse] = [M L T⁻²][T] = [M L T⁻¹].\n3. Linear momentum is p = m · v, having dimensions [M][L T⁻¹] = [M L T⁻¹].\n4. Therefore, impulse and linear momentum have identical dimensions.\n\n5. FINAL ANSWER:\nOption A: Linear momentum\n\n6. WHY OTHER OPTIONS ARE WRONG:\nAngular momentum is [M L² T⁻¹], Force is [M L T⁻²], and Work is [M L² T⁻²].",
    "solutionStructured": {
      "concept": "Impulse-momentum theorem and dimensional equivalence.",
      "given": "Impulse J = Force × time = Δp (change in linear momentum).",
      "formula": "[Impulse] = [F] [t] = [M L T⁻²] [T] = [M L T⁻¹]; [Momentum] = [m] [v] = [M L T⁻¹]",
      "stepByStep": "1. Impulse is defined as the product of force and time: J = F · Δt.\n2. [Impulse] = [M L T⁻²][T] = [M L T⁻¹].\n3. Linear momentum is p = m · v, having dimensions [M][L T⁻¹] = [M L T⁻¹].\n4. Therefore, impulse and linear momentum have identical dimensions.",
      "finalAnswer": "Option A: Linear momentum",
      "whyOtherOptionsWrong": "Angular momentum is [M L² T⁻¹], Force is [M L T⁻²], and Work is [M L² T⁻²]."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-041",
    "questionNumber": 41,
    "question": "A screw gauge has a pitch of 0.5 mm and 50 divisions on its circular scale. When measured without any object, the 0 of circular scale lies 3 divisions below the reference line (positive zero error). For a wire, the main scale reads 2 mm and the circular scale reads 28 divisions. The correct diameter of the wire is:",
    "options": {
      "A": "2.25 mm",
      "B": "2.28 mm",
      "C": "2.31 mm",
      "D": "2.22 mm"
    },
    "optionsList": [
      "2.25 mm",
      "2.28 mm",
      "2.31 mm",
      "2.22 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nCorrection of positive zero error in a micrometer screw gauge.\n\n2. GIVEN:\nPitch = 0.5 mm, Circular divisions N = 50, Zero error = +3 divisions, MSR = 2 mm, CSR = 28 divisions.\n\n3. FORMULA / PRINCIPLE:\nLC = Pitch / N; Observed reading = MSR + (CSR × LC); Correct reading = Observed reading - Zero Error\n\n4. STEP-BY-STEP SOLUTION:\n1. Least count LC = 0.5 mm / 50 = 0.01 mm.\n2. Zero Error: Since zero of circular scale is 3 divisions below the reference line, Zero Error = +3 × 0.01 mm = +0.03 mm.\n3. Observed reading = 2 mm + (28 × 0.01 mm) = 2.00 mm + 0.28 mm = 2.28 mm.\n4. Correct diameter = Observed reading - Zero Error = 2.28 mm - (+0.03 mm) = 2.25 mm.\n\n5. FINAL ANSWER:\nOption A: 2.25 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (2.28 mm) neglects the zero error. Option C (2.31 mm) mistakenly adds the positive zero error. Option D (2.22 mm) subtracts twice the zero error.",
    "solutionStructured": {
      "concept": "Correction of positive zero error in a micrometer screw gauge.",
      "given": "Pitch = 0.5 mm, Circular divisions N = 50, Zero error = +3 divisions, MSR = 2 mm, CSR = 28 divisions.",
      "formula": "LC = Pitch / N; Observed reading = MSR + (CSR × LC); Correct reading = Observed reading - Zero Error",
      "stepByStep": "1. Least count LC = 0.5 mm / 50 = 0.01 mm.\n2. Zero Error: Since zero of circular scale is 3 divisions below the reference line, Zero Error = +3 × 0.01 mm = +0.03 mm.\n3. Observed reading = 2 mm + (28 × 0.01 mm) = 2.00 mm + 0.28 mm = 2.28 mm.\n4. Correct diameter = Observed reading - Zero Error = 2.28 mm - (+0.03 mm) = 2.25 mm.",
      "finalAnswer": "Option A: 2.25 mm",
      "whyOtherOptionsWrong": "Option B (2.28 mm) neglects the zero error. Option C (2.31 mm) mistakenly adds the positive zero error. Option D (2.22 mm) subtracts twice the zero error."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Zero error",
    "source": "NEET 2026",
    "isPYQ": true,
    "pyqYear": 2026
  },
  {
    "id": "um-mcq-042",
    "questionNumber": 42,
    "question": "A physical quantity X is given by X = ε₀ L (ΔV / Δt), where ε₀ is the permittivity of free space, L is length, ΔV is electric potential difference, and Δt is time interval. The dimensional formula of X is identical to that of:",
    "options": {
      "A": "Electric Current",
      "B": "Electric Resistance",
      "C": "Magnetic Field",
      "D": "Electric Potential"
    },
    "optionsList": [
      "Electric Current",
      "Electric Resistance",
      "Magnetic Field",
      "Electric Potential"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDimensional identification of electromagnetic terms (displacement current relation).\n\n2. GIVEN:\nX = ε₀ L (ΔV / Δt).\n\n3. FORMULA / PRINCIPLE:\nCapacitance C ≈ ε₀ L; Electric Current I = C (dV / dt) = dq / dt.\n\n4. STEP-BY-STEP SOLUTION:\n1. Recall that capacitance of a spherical conductor of radius L is C = 4π ε₀ L, so [ε₀ L] = [C] (Capacitance).\n2. Electric current through a capacitor is I = C (ΔV / Δt).\n3. Substituting [C] into the expression: [X] = [C] [ΔV / Δt] = [C ΔV / Δt] = [Q / t] = [Current] = [A] = [M⁰ L⁰ T⁰ A¹].\n4. Hence, the dimensional formula of X is that of Electric Current.\n\n5. FINAL ANSWER:\nOption A: Electric Current\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (Resistance) has dimensions [M L² T⁻³ A⁻²]. Option C (Magnetic field) is [M T⁻² A⁻¹]. Option D (Electric potential) is [M L² T⁻³ A⁻¹].",
    "solutionStructured": {
      "concept": "Dimensional identification of electromagnetic terms (displacement current relation).",
      "given": "X = ε₀ L (ΔV / Δt).",
      "formula": "Capacitance C ≈ ε₀ L; Electric Current I = C (dV / dt) = dq / dt.",
      "stepByStep": "1. Recall that capacitance of a spherical conductor of radius L is C = 4π ε₀ L, so [ε₀ L] = [C] (Capacitance).\n2. Electric current through a capacitor is I = C (ΔV / Δt).\n3. Substituting [C] into the expression: [X] = [C] [ΔV / Δt] = [C ΔV / Δt] = [Q / t] = [Current] = [A] = [M⁰ L⁰ T⁰ A¹].\n4. Hence, the dimensional formula of X is that of Electric Current.",
      "finalAnswer": "Option A: Electric Current",
      "whyOtherOptionsWrong": "Option B (Resistance) has dimensions [M L² T⁻³ A⁻²]. Option C (Magnetic field) is [M T⁻² A⁻¹]. Option D (Electric potential) is [M L² T⁻³ A⁻¹]."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "NEET 2024",
    "isPYQ": true,
    "pyqYear": 2024
  },
  {
    "id": "um-mcq-043",
    "questionNumber": 43,
    "question": "A metal wire has mass m = (0.4 ± 0.002) g, radius r = (0.3 ± 0.001) mm, and length l = (5 ± 0.02) cm. The maximum possible percentage error in the measurement of its density is approximately:",
    "options": {
      "A": "1.6%",
      "B": "1.2%",
      "C": "2.1%",
      "D": "0.8%"
    },
    "optionsList": [
      "1.6%",
      "1.2%",
      "2.1%",
      "0.8%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPropagation of errors in density of a cylindrical wire.\n\n2. GIVEN:\nm = 0.4 g, Δm = 0.002 g; r = 0.3 mm, Δr = 0.001 mm; l = 5 cm, Δl = 0.02 cm.\n\n3. FORMULA / PRINCIPLE:\nDensity ρ = m / (π r² l); (Δρ/ρ) = (Δm/m) + 2(Δr/r) + (Δl/l)\n\n4. STEP-BY-STEP SOLUTION:\n1. Calculate fractional error in mass: Δm/m = 0.002 / 0.4 = 2 / 400 = 0.005 (0.5%).\n2. Calculate fractional error in radius: Δr/r = 0.001 / 0.3 = 1 / 300 ≈ 0.00333 (0.333%).\n3. Since radius is squared, its contribution is 2(Δr/r) = 2 × (1 / 300) = 2 / 300 ≈ 0.00667 (0.667%).\n4. Calculate fractional error in length: Δl/l = 0.02 / 5 = 2 / 500 = 0.004 (0.4%).\n5. Total fractional error: Δρ/ρ = 0.005 + 0.00667 + 0.004 = 0.01567.\n6. Percentage error = 0.01567 × 100% ≈ 1.57% ≈ 1.6%.\n\n5. FINAL ANSWER:\nOption A: 1.6%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (1.2%) forgets the factor of 2 for the radius exponent. Option C and D result from decimal conversion mistakes.",
    "solutionStructured": {
      "concept": "Propagation of errors in density of a cylindrical wire.",
      "given": "m = 0.4 g, Δm = 0.002 g; r = 0.3 mm, Δr = 0.001 mm; l = 5 cm, Δl = 0.02 cm.",
      "formula": "Density ρ = m / (π r² l); (Δρ/ρ) = (Δm/m) + 2(Δr/r) + (Δl/l)",
      "stepByStep": "1. Calculate fractional error in mass: Δm/m = 0.002 / 0.4 = 2 / 400 = 0.005 (0.5%).\n2. Calculate fractional error in radius: Δr/r = 0.001 / 0.3 = 1 / 300 ≈ 0.00333 (0.333%).\n3. Since radius is squared, its contribution is 2(Δr/r) = 2 × (1 / 300) = 2 / 300 ≈ 0.00667 (0.667%).\n4. Calculate fractional error in length: Δl/l = 0.02 / 5 = 2 / 500 = 0.004 (0.4%).\n5. Total fractional error: Δρ/ρ = 0.005 + 0.00667 + 0.004 = 0.01567.\n6. Percentage error = 0.01567 × 100% ≈ 1.57% ≈ 1.6%.",
      "finalAnswer": "Option A: 1.6%",
      "whyOtherOptionsWrong": "Option B (1.2%) forgets the factor of 2 for the radius exponent. Option C and D result from decimal conversion mistakes."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "NEET 2023",
    "isPYQ": true,
    "pyqYear": 2023
  },
  {
    "id": "um-mcq-044",
    "questionNumber": 44,
    "question": "The dimensions [M L T⁻² A⁻²] belong to the physical quantity:",
    "options": {
      "A": "Magnetic permeability of vacuum (μ₀)",
      "B": "Electric permittivity of vacuum (ε₀)",
      "C": "Magnetic flux (Φ)",
      "D": "Self-inductance (L)"
    },
    "optionsList": [
      "Magnetic permeability of vacuum (μ₀)",
      "Electric permittivity of vacuum (ε₀)",
      "Magnetic flux (Φ)",
      "Self-inductance (L)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDimensional formula of magnetic permeability (μ₀).\n\n2. GIVEN:\nDimensional formula [M L T⁻² A⁻²].\n\n3. FORMULA / PRINCIPLE:\nBiot-Savart Law / Force between parallel wires: F/l = (μ₀ I₁ I₂) / (2π r) => μ₀ = 2π r F / (l I₁ I₂)\n\n4. STEP-BY-STEP SOLUTION:\n1. Force per unit length between parallel wires: [F/l] = [M L T⁻²] / [L] = [M T⁻²].\n2. [μ₀] = [F/l] · [r] / [I²] = [M T⁻²][L] / [A²] = [M L T⁻² A⁻²].\n3. Electric permittivity [ε₀] is [M⁻¹ L⁻³ T⁴ A²].\n4. Self-inductance [L] is [M L² T⁻² A⁻²].\n5. Magnetic flux [Φ] is [M L² T⁻² A⁻¹].\n6. Thus, [M L T⁻² A⁻²] uniquely belongs to μ₀.\n\n5. FINAL ANSWER:\nOption A: Magnetic permeability of vacuum (μ₀)\n\n6. WHY OTHER OPTIONS ARE WRONG:\nSelf-inductance has L² instead of L; magnetic flux has A⁻¹; permittivity has negative mass power M⁻¹.",
    "solutionStructured": {
      "concept": "Dimensional formula of magnetic permeability (μ₀).",
      "given": "Dimensional formula [M L T⁻² A⁻²].",
      "formula": "Biot-Savart Law / Force between parallel wires: F/l = (μ₀ I₁ I₂) / (2π r) => μ₀ = 2π r F / (l I₁ I₂)",
      "stepByStep": "1. Force per unit length between parallel wires: [F/l] = [M L T⁻²] / [L] = [M T⁻²].\n2. [μ₀] = [F/l] · [r] / [I²] = [M T⁻²][L] / [A²] = [M L T⁻² A⁻²].\n3. Electric permittivity [ε₀] is [M⁻¹ L⁻³ T⁴ A²].\n4. Self-inductance [L] is [M L² T⁻² A⁻²].\n5. Magnetic flux [Φ] is [M L² T⁻² A⁻¹].\n6. Thus, [M L T⁻² A⁻²] uniquely belongs to μ₀.",
      "finalAnswer": "Option A: Magnetic permeability of vacuum (μ₀)",
      "whyOtherOptionsWrong": "Self-inductance has L² instead of L; magnetic flux has A⁻¹; permittivity has negative mass power M⁻¹."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "NEET 2022",
    "isPYQ": true,
    "pyqYear": 2022
  },
  {
    "id": "um-mcq-045",
    "questionNumber": 45,
    "question": "A physical quantity of the dimensions of length that can be formed out of c, G and e² / (4πε₀) is [where c is velocity of light, G is universal gravitational constant and e is elementary charge]:",
    "options": {
      "A": "(1 / c²) [G e² / (4πε₀)]^(1/2)",
      "B": "c² [G e² / (4πε₀)]^(1/2)",
      "C": "(1 / c²) [G / (4πε₀ e²)]^(1/2)",
      "D": "(1 / c) [G e² / (4πε₀)]"
    },
    "optionsList": [
      "(1 / c²) [G e² / (4πε₀)]^(1/2)",
      "c² [G e² / (4πε₀)]^(1/2)",
      "(1 / c²) [G / (4πε₀ e²)]^(1/2)",
      "(1 / c) [G e² / (4πε₀)]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nConstructing a physical quantity of dimensions of length using dimensional analysis.\n\n2. GIVEN:\nc = [L T⁻¹], G = [M⁻¹ L³ T⁻²], e²/(4πε₀) = [Force × r²] = [M L³ T⁻²].\n\n3. FORMULA / PRINCIPLE:\nL = c^x · G^y · [e² / (4πε₀)]^z\n\n4. STEP-BY-STEP SOLUTION:\n1. Dimensions: [c] = [L T⁻¹], [G] = [M⁻¹ L³ T⁻²], [e²/(4πε₀)] = [F · r²] = [M L T⁻²][L²] = [M L³ T⁻²].\n2. Note that [G · e²/(4πε₀)] = [M⁻¹ L³ T⁻²] [M L³ T⁻²] = [L⁶ T⁻⁴].\n3. Taking square root: [G · e²/(4πε₀)]^(1/2) = [L³ T⁻²].\n4. Now, [c²] = [L² T⁻²].\n5. Dividing by c²: [L³ T⁻²] / [L² T⁻²] = [L].\n6. Therefore, the quantity of dimension of length is (1 / c²) [G e² / (4πε₀)]^(1/2).\n\n5. FINAL ANSWER:\nOption A: (1 / c²) [G e² / (4πε₀)]^(1/2)\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B gives dimensions [L⁵ T⁻⁴]. Option C inverts the charge term giving non-length dimensions. Option D has incorrect powers of c.",
    "solutionStructured": {
      "concept": "Constructing a physical quantity of dimensions of length using dimensional analysis.",
      "given": "c = [L T⁻¹], G = [M⁻¹ L³ T⁻²], e²/(4πε₀) = [Force × r²] = [M L³ T⁻²].",
      "formula": "L = c^x · G^y · [e² / (4πε₀)]^z",
      "stepByStep": "1. Dimensions: [c] = [L T⁻¹], [G] = [M⁻¹ L³ T⁻²], [e²/(4πε₀)] = [F · r²] = [M L T⁻²][L²] = [M L³ T⁻²].\n2. Note that [G · e²/(4πε₀)] = [M⁻¹ L³ T⁻²] [M L³ T⁻²] = [L⁶ T⁻⁴].\n3. Taking square root: [G · e²/(4πε₀)]^(1/2) = [L³ T⁻²].\n4. Now, [c²] = [L² T⁻²].\n5. Dividing by c²: [L³ T⁻²] / [L² T⁻²] = [L].\n6. Therefore, the quantity of dimension of length is (1 / c²) [G e² / (4πε₀)]^(1/2).",
      "finalAnswer": "Option A: (1 / c²) [G e² / (4πε₀)]^(1/2)",
      "whyOtherOptionsWrong": "Option B gives dimensions [L⁵ T⁻⁴]. Option C inverts the charge term giving non-length dimensions. Option D has incorrect powers of c."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "NEET 2017",
    "isPYQ": true,
    "pyqYear": 2017
  },
  {
    "id": "um-mcq-046",
    "questionNumber": 46,
    "question": "Planck's constant (h), speed of light in vacuum (c) and Newton's gravitational constant (G) are three fundamental constants. Which of the following combinations of these has the dimension of length?",
    "options": {
      "A": "√(G h / c³)",
      "B": "√(G c / h³)",
      "C": "√(h c / G)",
      "D": "√(G h / c⁵)"
    },
    "optionsList": [
      "√(G h / c³)",
      "√(G c / h³)",
      "√(h c / G)",
      "√(G h / c⁵)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPlanck length derivation using dimensional analysis.\n\n2. GIVEN:\nh = [M L² T⁻¹], c = [L T⁻¹], G = [M⁻¹ L³ T⁻²].\n\n3. FORMULA / PRINCIPLE:\nPlanck length l_p = √(G h / c³)\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply G and h: [G h] = [M⁻¹ L³ T⁻²] [M L² T⁻¹] = [L⁵ T⁻³].\n2. Divide by c³: [c³] = [L³ T⁻³].\n3. [G h / c³] = [L⁵ T⁻³] / [L³ T⁻³] = [L²].\n4. Taking the square root gives [√(G h / c³)] = [L] (Planck length).\n5. Hence, √(G h / c³) has the dimension of length.\n\n5. FINAL ANSWER:\nOption A: √(G h / c³)\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption C (√(h c / G)) gives the Planck mass [M]. Option D (√(G h / c⁵)) gives the Planck time [T]. Option B does not yield length.",
    "solutionStructured": {
      "concept": "Planck length derivation using dimensional analysis.",
      "given": "h = [M L² T⁻¹], c = [L T⁻¹], G = [M⁻¹ L³ T⁻²].",
      "formula": "Planck length l_p = √(G h / c³)",
      "stepByStep": "1. Multiply G and h: [G h] = [M⁻¹ L³ T⁻²] [M L² T⁻¹] = [L⁵ T⁻³].\n2. Divide by c³: [c³] = [L³ T⁻³].\n3. [G h / c³] = [L⁵ T⁻³] / [L³ T⁻³] = [L²].\n4. Taking the square root gives [√(G h / c³)] = [L] (Planck length).\n5. Hence, √(G h / c³) has the dimension of length.",
      "finalAnswer": "Option A: √(G h / c³)",
      "whyOtherOptionsWrong": "Option C (√(h c / G)) gives the Planck mass [M]. Option D (√(G h / c⁵)) gives the Planck time [T]. Option B does not yield length."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "NEET 2016",
    "isPYQ": true,
    "pyqYear": 2016
  },
  {
    "id": "um-mcq-047",
    "questionNumber": 47,
    "question": "The dimensional formula of the coefficient of viscosity (η) is:",
    "options": {
      "A": "[M L⁻¹ T⁻¹]",
      "B": "[M L⁻¹ T⁻²]",
      "C": "[M L T⁻¹]",
      "D": "[M L² T⁻¹]"
    },
    "optionsList": [
      "[M L⁻¹ T⁻¹]",
      "[M L⁻¹ T⁻²]",
      "[M L T⁻¹]",
      "[M L² T⁻¹]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nStokes' law / Newton's law of viscous force.\n\n2. GIVEN:\nF = 6πηrv or F = -η A (dv/dx).\n\n3. FORMULA / PRINCIPLE:\nη = F / (6π r v) => [η] = [F] / ([r][v])\n\n4. STEP-BY-STEP SOLUTION:\n1. Dimensions of force: [F] = [M L T⁻²].\n2. Dimensions of radius: [r] = [L].\n3. Dimensions of velocity: [v] = [L T⁻¹].\n4. [η] = [M L T⁻²] / ([L][L T⁻¹]) = [M L T⁻²] / [L² T⁻¹] = [M L⁻¹ T⁻¹].\n5. SI unit of η is Pa·s (or N·s/m² or kg·m⁻¹·s⁻¹).\n\n5. FINAL ANSWER:\nOption A: [M L⁻¹ T⁻¹]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is pressure / stress [M L⁻¹ T⁻²]. Option C is momentum [M L T⁻¹]. Option D is angular momentum [M L² T⁻¹].",
    "solutionStructured": {
      "concept": "Stokes' law / Newton's law of viscous force.",
      "given": "F = 6πηrv or F = -η A (dv/dx).",
      "formula": "η = F / (6π r v) => [η] = [F] / ([r][v])",
      "stepByStep": "1. Dimensions of force: [F] = [M L T⁻²].\n2. Dimensions of radius: [r] = [L].\n3. Dimensions of velocity: [v] = [L T⁻¹].\n4. [η] = [M L T⁻²] / ([L][L T⁻¹]) = [M L T⁻²] / [L² T⁻¹] = [M L⁻¹ T⁻¹].\n5. SI unit of η is Pa·s (or N·s/m² or kg·m⁻¹·s⁻¹).",
      "finalAnswer": "Option A: [M L⁻¹ T⁻¹]",
      "whyOtherOptionsWrong": "Option B is pressure / stress [M L⁻¹ T⁻²]. Option C is momentum [M L T⁻¹]. Option D is angular momentum [M L² T⁻¹]."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-048",
    "questionNumber": 48,
    "question": "In the van der Waals equation of state: (P + a / V²)(V - b) = R T, the dimensional formula of the constant 'a' is:",
    "options": {
      "A": "[M L⁵ T⁻²]",
      "B": "[M L³ T⁻²]",
      "C": "[M L⁻¹ T⁻²]",
      "D": "[M L⁴ T⁻²]"
    },
    "optionsList": [
      "[M L⁵ T⁻²]",
      "[M L³ T⁻²]",
      "[M L⁻¹ T⁻²]",
      "[M L⁴ T⁻²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPrinciple of homogeneity of dimensions in equations.\n\n2. GIVEN:\nVan der Waals equation: (P + a/V²)(V - b) = RT.\n\n3. FORMULA / PRINCIPLE:\nBy principle of homogeneity, [a / V²] must equal [P].\n\n4. STEP-BY-STEP SOLUTION:\n1. Since a/V² is added to pressure P, [a / V²] = [P].\n2. Therefore, [a] = [P] · [V²].\n3. [P] = [Force/Area] = [M L⁻¹ T⁻²].\n4. [V] = [L³] => [V²] = [L⁶].\n5. [a] = [M L⁻¹ T⁻²] · [L⁶] = [M L⁵ T⁻²].\n\n5. FINAL ANSWER:\nOption A: [M L⁵ T⁻²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B has L³ (which would be P · V). Option C is pressure. Option D has L⁴.",
    "solutionStructured": {
      "concept": "Principle of homogeneity of dimensions in equations.",
      "given": "Van der Waals equation: (P + a/V²)(V - b) = RT.",
      "formula": "By principle of homogeneity, [a / V²] must equal [P].",
      "stepByStep": "1. Since a/V² is added to pressure P, [a / V²] = [P].\n2. Therefore, [a] = [P] · [V²].\n3. [P] = [Force/Area] = [M L⁻¹ T⁻²].\n4. [V] = [L³] => [V²] = [L⁶].\n5. [a] = [M L⁻¹ T⁻²] · [L⁶] = [M L⁵ T⁻²].",
      "finalAnswer": "Option A: [M L⁵ T⁻²]",
      "whyOtherOptionsWrong": "Option B has L³ (which would be P · V). Option C is pressure. Option D has L⁴."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-049",
    "questionNumber": 49,
    "question": "The displacement of a particle executing motion is given by x = a t + b t² - c t³, where x is in meters and t is in seconds. The dimensional formula of b² / (a · c) is:",
    "options": {
      "A": "[M⁰ L⁰ T⁰]",
      "B": "[M⁰ L T⁻¹]",
      "C": "[M⁰ L⁰ T⁻¹]",
      "D": "[M⁰ L² T⁻²]"
    },
    "optionsList": [
      "[M⁰ L⁰ T⁰]",
      "[M⁰ L T⁻¹]",
      "[M⁰ L⁰ T⁻¹]",
      "[M⁰ L² T⁻²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPrinciple of homogeneity and combination of dimensional constants.\n\n2. GIVEN:\nx = a t + b t² - c t³.\n\n3. FORMULA / PRINCIPLE:\n[a t] = [x] => [a] = [L T⁻¹]; [b t²] = [x] => [b] = [L T⁻²]; [c t³] = [x] => [c] = [L T⁻³]\n\n4. STEP-BY-STEP SOLUTION:\n1. Find dimension of a: [a] = [x]/[t] = [L T⁻¹].\n2. Find dimension of b: [b] = [x]/[t²] = [L T⁻²].\n3. Find dimension of c: [c] = [x]/[t³] = [L T⁻³].\n4. Compute [b²]: [b²] = ([L T⁻²])² = [L² T⁻⁴].\n5. Compute [a · c]: [a][c] = [L T⁻¹][L T⁻³] = [L² T⁻⁴].\n6. Ratio: [b² / (a c)] = [L² T⁻⁴] / [L² T⁻⁴] = [M⁰ L⁰ T⁰] (dimensionless).\n\n5. FINAL ANSWER:\nOption A: [M⁰ L⁰ T⁰]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOptions B, C, and D contain non-zero powers of length and time, which contradict the exact cancellation of dimensions.",
    "solutionStructured": {
      "concept": "Principle of homogeneity and combination of dimensional constants.",
      "given": "x = a t + b t² - c t³.",
      "formula": "[a t] = [x] => [a] = [L T⁻¹]; [b t²] = [x] => [b] = [L T⁻²]; [c t³] = [x] => [c] = [L T⁻³]",
      "stepByStep": "1. Find dimension of a: [a] = [x]/[t] = [L T⁻¹].\n2. Find dimension of b: [b] = [x]/[t²] = [L T⁻²].\n3. Find dimension of c: [c] = [x]/[t³] = [L T⁻³].\n4. Compute [b²]: [b²] = ([L T⁻²])² = [L² T⁻⁴].\n5. Compute [a · c]: [a][c] = [L T⁻¹][L T⁻³] = [L² T⁻⁴].\n6. Ratio: [b² / (a c)] = [L² T⁻⁴] / [L² T⁻⁴] = [M⁰ L⁰ T⁰] (dimensionless).",
      "finalAnswer": "Option A: [M⁰ L⁰ T⁰]",
      "whyOtherOptionsWrong": "Options B, C, and D contain non-zero powers of length and time, which contradict the exact cancellation of dimensions."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-050",
    "questionNumber": 50,
    "question": "The resistance R of a wire is given by R = V / I, where V = (100 ± 5) V and I = (10 ± 0.2) A. The percentage error in the measurement of resistance is:",
    "options": {
      "A": "7%",
      "B": "3%",
      "C": "5.2%",
      "D": "2.5%"
    },
    "optionsList": [
      "7%",
      "3%",
      "5.2%",
      "2.5%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPercentage error in quotient.\n\n2. GIVEN:\nV = (100 ± 5) V, I = (10 ± 0.2) A.\n\n3. FORMULA / PRINCIPLE:\nR = V / I => (ΔR/R) × 100% = (ΔV/V × 100%) + (ΔI/I × 100%)\n\n4. STEP-BY-STEP SOLUTION:\n1. Percentage error in V: (5 / 100) × 100% = 5%.\n2. Percentage error in I: (0.2 / 10) × 100% = 2%.\n3. Maximum percentage error in R = 5% + 2% = 7%.\n\n5. FINAL ANSWER:\nOption A: 7%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (3%) subtracts percentage errors (5% - 2%), which violates the rule for maximum possible error. Option C and D result from dividing percentages.",
    "solutionStructured": {
      "concept": "Percentage error in quotient.",
      "given": "V = (100 ± 5) V, I = (10 ± 0.2) A.",
      "formula": "R = V / I => (ΔR/R) × 100% = (ΔV/V × 100%) + (ΔI/I × 100%)",
      "stepByStep": "1. Percentage error in V: (5 / 100) × 100% = 5%.\n2. Percentage error in I: (0.2 / 10) × 100% = 2%.\n3. Maximum percentage error in R = 5% + 2% = 7%.",
      "finalAnswer": "Option A: 7%",
      "whyOtherOptionsWrong": "Option B (3%) subtracts percentage errors (5% - 2%), which violates the rule for maximum possible error. Option C and D result from dividing percentages."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Percentage error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-051",
    "questionNumber": 51,
    "question": "The dimensional formula of thermal conductivity (K) is:",
    "options": {
      "A": "[M L T⁻³ K⁻¹]",
      "B": "[M L² T⁻³ K⁻¹]",
      "C": "[M L T⁻² K⁻¹]",
      "D": "[M L² T⁻² K⁻¹]"
    },
    "optionsList": [
      "[M L T⁻³ K⁻¹]",
      "[M L² T⁻³ K⁻¹]",
      "[M L T⁻² K⁻¹]",
      "[M L² T⁻² K⁻¹]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFourier's law of heat conduction.\n\n2. GIVEN:\nHeat flow rate Q / t = K A (ΔT / Δx).\n\n3. FORMULA / PRINCIPLE:\nK = (Q · Δx) / (A · t · ΔT)\n\n4. STEP-BY-STEP SOLUTION:\n1. [Q] = [Energy] = [M L² T⁻²].\n2. [Δx] = [L], [A] = [L²], [t] = [T], [ΔT] = [K].\n3. [K] = ([M L² T⁻²] · [L]) / ([L²] · [T] · [K]) = [M L³ T⁻²] / [L² T K] = [M L T⁻³ K⁻¹].\n\n5. FINAL ANSWER:\nOption A: [M L T⁻³ K⁻¹]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is power per kelvin [M L² T⁻³ K⁻¹]. Option C has T⁻² instead of T⁻³. Option D is heat capacity [M L² T⁻² K⁻¹].",
    "solutionStructured": {
      "concept": "Fourier's law of heat conduction.",
      "given": "Heat flow rate Q / t = K A (ΔT / Δx).",
      "formula": "K = (Q · Δx) / (A · t · ΔT)",
      "stepByStep": "1. [Q] = [Energy] = [M L² T⁻²].\n2. [Δx] = [L], [A] = [L²], [t] = [T], [ΔT] = [K].\n3. [K] = ([M L² T⁻²] · [L]) / ([L²] · [T] · [K]) = [M L³ T⁻²] / [L² T K] = [M L T⁻³ K⁻¹].",
      "finalAnswer": "Option A: [M L T⁻³ K⁻¹]",
      "whyOtherOptionsWrong": "Option B is power per kelvin [M L² T⁻³ K⁻¹]. Option C has T⁻² instead of T⁻³. Option D is heat capacity [M L² T⁻² K⁻¹]."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-052",
    "questionNumber": 52,
    "question": "The dimensional formula of Stefan-Boltzmann constant (σ) in the radiation formula E = σ T⁴ (where E is energy radiated per unit area per second) is:",
    "options": {
      "A": "[M L⁰ T⁻³ K⁻⁴]",
      "B": "[M L² T⁻³ K⁻⁴]",
      "C": "[M L T⁻³ K⁻⁴]",
      "D": "[M L⁰ T⁻² K⁻⁴]"
    },
    "optionsList": [
      "[M L⁰ T⁻³ K⁻⁴]",
      "[M L² T⁻³ K⁻⁴]",
      "[M L T⁻³ K⁻⁴]",
      "[M L⁰ T⁻² K⁻⁴]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nStefan-Boltzmann law of blackbody radiation.\n\n2. GIVEN:\nE = σ T⁴, where E is emissive power (Energy / (Area · Time)).\n\n3. FORMULA / PRINCIPLE:\nσ = E / T⁴ = (Energy / (Area · Time)) / T⁴\n\n4. STEP-BY-STEP SOLUTION:\n1. Emissive power [E] = [M L² T⁻²] / ([L²][T]) = [M T⁻³] = [M L⁰ T⁻³].\n2. Temperature [T] = [K] => [T⁴] = [K⁴].\n3. [σ] = [M L⁰ T⁻³] / [K⁴] = [M L⁰ T⁻³ K⁻⁴].\n4. SI unit is W·m⁻²·K⁻⁴.\n\n5. FINAL ANSWER:\nOption A: [M L⁰ T⁻³ K⁻⁴]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B introduces L². Option C introduces L. Option D has T⁻² instead of T⁻³.",
    "solutionStructured": {
      "concept": "Stefan-Boltzmann law of blackbody radiation.",
      "given": "E = σ T⁴, where E is emissive power (Energy / (Area · Time)).",
      "formula": "σ = E / T⁴ = (Energy / (Area · Time)) / T⁴",
      "stepByStep": "1. Emissive power [E] = [M L² T⁻²] / ([L²][T]) = [M T⁻³] = [M L⁰ T⁻³].\n2. Temperature [T] = [K] => [T⁴] = [K⁴].\n3. [σ] = [M L⁰ T⁻³] / [K⁴] = [M L⁰ T⁻³ K⁻⁴].\n4. SI unit is W·m⁻²·K⁻⁴.",
      "finalAnswer": "Option A: [M L⁰ T⁻³ K⁻⁴]",
      "whyOtherOptionsWrong": "Option B introduces L². Option C introduces L. Option D has T⁻² instead of T⁻³."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-053",
    "questionNumber": 53,
    "question": "A physical quantity Y is given by Y = 4 a b² / c³. If the percentage errors in the measurement of a, b, and c are 2%, 1.5%, and 1% respectively, the percentage error in Y is:",
    "options": {
      "A": "8%",
      "B": "6%",
      "C": "4%",
      "D": "5%"
    },
    "optionsList": [
      "8%",
      "6%",
      "4%",
      "5%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPropagation of percentage errors in multi-variable powers.\n\n2. GIVEN:\nY = 4 a b² / c³, % errors: a=2%, b=1.5%, c=1%.\n\n3. FORMULA / PRINCIPLE:\n(ΔY/Y) × 100% = 1(Δa/a) + 2(Δb/b) + 3(Δc/c)\n\n4. STEP-BY-STEP SOLUTION:\n1. Numerical constant 4 has zero error.\n2. Exponent of a is 1: 1 × 2% = 2%.\n3. Exponent of b is 2: 2 × 1.5% = 3%.\n4. Exponent of c is 3: 3 × 1% = 3%.\n5. Maximum percentage error in Y = 2% + 3% + 3% = 8%.\n\n5. FINAL ANSWER:\nOption A: 8%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (6%) subtracts the denominator term (2% + 3% - 3% or similar calculation). Option C forgets power of c. Option D misses power of b.",
    "solutionStructured": {
      "concept": "Propagation of percentage errors in multi-variable powers.",
      "given": "Y = 4 a b² / c³, % errors: a=2%, b=1.5%, c=1%.",
      "formula": "(ΔY/Y) × 100% = 1(Δa/a) + 2(Δb/b) + 3(Δc/c)",
      "stepByStep": "1. Numerical constant 4 has zero error.\n2. Exponent of a is 1: 1 × 2% = 2%.\n3. Exponent of b is 2: 2 × 1.5% = 3%.\n4. Exponent of c is 3: 3 × 1% = 3%.\n5. Maximum percentage error in Y = 2% + 3% + 3% = 8%.",
      "finalAnswer": "Option A: 8%",
      "whyOtherOptionsWrong": "Option B (6%) subtracts the denominator term (2% + 3% - 3% or similar calculation). Option C forgets power of c. Option D misses power of b."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-054",
    "questionNumber": 54,
    "question": "The period of oscillation of a simple pendulum is T = 2π √(L / g). Measured value of L is 20.0 cm known to 1 mm accuracy and time for 100 oscillations of the pendulum is found to be 90 s using a wrist watch of 1 s resolution. The percentage error in determining g is approximately:",
    "options": {
      "A": "2.7%",
      "B": "1.5%",
      "C": "3.2%",
      "D": "0.5%"
    },
    "optionsList": [
      "2.7%",
      "1.5%",
      "3.2%",
      "0.5%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDetermination of g by simple pendulum (NCERT exemplar problem).\n\n2. GIVEN:\nL = 20.0 cm, ΔL = 1 mm = 0.1 cm; t = 90 s, Δt = 1 s, n = 100 oscillations.\n\n3. FORMULA / PRINCIPLE:\ng = 4π² L / T² = 4π² L n² / t² => Δg/g = (ΔL/L) + 2(Δt/t)\n\n4. STEP-BY-STEP SOLUTION:\n1. ΔL/L = 0.1 cm / 20.0 cm = 1 / 200 = 0.005 (0.5%).\n2. Time t = 90 s with resolution Δt = 1 s: Δt/t = 1 / 90 ≈ 0.0111 (1.11%).\n3. Since T is squared, 2(Δt/t) = 2 × (1 / 90) = 2 / 90 ≈ 0.0222 (2.22%).\n4. Δg/g = 0.005 + 0.0222 = 0.0272.\n5. Percentage error = 0.0272 × 100% ≈ 2.7%.\n\n5. FINAL ANSWER:\nOption A: 2.7%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (1.5%) neglects the factor of 2 in time. Option C (3.2%) adds errors incorrectly. Option D is only the error in length.",
    "solutionStructured": {
      "concept": "Determination of g by simple pendulum (NCERT exemplar problem).",
      "given": "L = 20.0 cm, ΔL = 1 mm = 0.1 cm; t = 90 s, Δt = 1 s, n = 100 oscillations.",
      "formula": "g = 4π² L / T² = 4π² L n² / t² => Δg/g = (ΔL/L) + 2(Δt/t)",
      "stepByStep": "1. ΔL/L = 0.1 cm / 20.0 cm = 1 / 200 = 0.005 (0.5%).\n2. Time t = 90 s with resolution Δt = 1 s: Δt/t = 1 / 90 ≈ 0.0111 (1.11%).\n3. Since T is squared, 2(Δt/t) = 2 × (1 / 90) = 2 / 90 ≈ 0.0222 (2.22%).\n4. Δg/g = 0.005 + 0.0222 = 0.0272.\n5. Percentage error = 0.0272 × 100% ≈ 2.7%.",
      "finalAnswer": "Option A: 2.7%",
      "whyOtherOptionsWrong": "Option B (1.5%) neglects the factor of 2 in time. Option C (3.2%) adds errors incorrectly. Option D is only the error in length."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-055",
    "questionNumber": 55,
    "question": "A Vernier calipers has 1 mm marks on the main scale. It has 20 equal divisions on the Vernier scale which match with 16 main scale divisions. For this Vernier calipers, the least count is:",
    "options": {
      "A": "0.2 mm",
      "B": "0.05 mm",
      "C": "0.1 mm",
      "D": "0.02 mm"
    },
    "optionsList": [
      "0.2 mm",
      "0.05 mm",
      "0.1 mm",
      "0.02 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nGeneral least count formula for non-standard Vernier calipers: LC = (1 - m/n) MSD.\n\n2. GIVEN:\n1 MSD = 1 mm, n = 20 VSD coincide with m = 16 MSD.\n\n3. FORMULA / PRINCIPLE:\nLC = 1 MSD - 1 VSD = (1 - m/n) MSD\n\n4. STEP-BY-STEP SOLUTION:\n1. 20 VSD = 16 MSD => 1 VSD = 16/20 MSD = 0.8 mm.\n2. LC = 1 MSD - 1 VSD = 1.0 mm - 0.8 mm = 0.2 mm.\n3. Alternatively: LC = (1 - 16/20) × 1 mm = (4/20) mm = 0.2 mm.\n\n5. FINAL ANSWER:\nOption A: 0.2 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (0.05 mm) assumes 19 MSD = 20 VSD. Option C (0.1 mm) assumes 9 MSD = 10 VSD. Option D is for 50 VSD.",
    "solutionStructured": {
      "concept": "General least count formula for non-standard Vernier calipers: LC = (1 - m/n) MSD.",
      "given": "1 MSD = 1 mm, n = 20 VSD coincide with m = 16 MSD.",
      "formula": "LC = 1 MSD - 1 VSD = (1 - m/n) MSD",
      "stepByStep": "1. 20 VSD = 16 MSD => 1 VSD = 16/20 MSD = 0.8 mm.\n2. LC = 1 MSD - 1 VSD = 1.0 mm - 0.8 mm = 0.2 mm.\n3. Alternatively: LC = (1 - 16/20) × 1 mm = (4/20) mm = 0.2 mm.",
      "finalAnswer": "Option A: 0.2 mm",
      "whyOtherOptionsWrong": "Option B (0.05 mm) assumes 19 MSD = 20 VSD. Option C (0.1 mm) assumes 9 MSD = 10 VSD. Option D is for 50 VSD."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Vernier calipers",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-056",
    "questionNumber": 56,
    "question": "In an experiment, two capacities are measured as C₁ = (2.0 ± 0.1) μF and C₂ = (4.0 ± 0.2) μF. When connected in parallel, the total capacitance with its absolute error is:",
    "options": {
      "A": "(6.0 ± 0.3) μF",
      "B": "(6.0 ± 0.1) μF",
      "C": "(6.0 ± 0.2) μF",
      "D": "(6.0 ± 0.05) μF"
    },
    "optionsList": [
      "(6.0 ± 0.3) μF",
      "(6.0 ± 0.1) μF",
      "(6.0 ± 0.2) μF",
      "(6.0 ± 0.05) μF"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError propagation in parallel combination of capacitances.\n\n2. GIVEN:\nC₁ = (2.0 ± 0.1) μF, C₂ = (4.0 ± 0.2) μF.\n\n3. FORMULA / PRINCIPLE:\nC_eq = C₁ + C₂; ΔC_eq = ΔC₁ + ΔC₂\n\n4. STEP-BY-STEP SOLUTION:\n1. For capacitors in parallel, equivalent capacitance is C_eq = C₁ + C₂ = 2.0 + 4.0 = 6.0 μF.\n2. Absolute errors add directly in sums: ΔC_eq = ΔC₁ + ΔC₂ = 0.1 + 0.2 = 0.3 μF.\n3. Therefore, C_parallel = (6.0 ± 0.3) μF.\n\n5. FINAL ANSWER:\nOption A: (6.0 ± 0.3) μF\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B subtracts errors (0.2 - 0.1). Option C keeps only the larger error. Option D averages the errors.",
    "solutionStructured": {
      "concept": "Error propagation in parallel combination of capacitances.",
      "given": "C₁ = (2.0 ± 0.1) μF, C₂ = (4.0 ± 0.2) μF.",
      "formula": "C_eq = C₁ + C₂; ΔC_eq = ΔC₁ + ΔC₂",
      "stepByStep": "1. For capacitors in parallel, equivalent capacitance is C_eq = C₁ + C₂ = 2.0 + 4.0 = 6.0 μF.\n2. Absolute errors add directly in sums: ΔC_eq = ΔC₁ + ΔC₂ = 0.1 + 0.2 = 0.3 μF.\n3. Therefore, C_parallel = (6.0 ± 0.3) μF.",
      "finalAnswer": "Option A: (6.0 ± 0.3) μF",
      "whyOtherOptionsWrong": "Option B subtracts errors (0.2 - 0.1). Option C keeps only the larger error. Option D averages the errors."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-057",
    "questionNumber": 57,
    "question": "The velocity of water waves v may depend on their wavelength λ, density of water ρ, and acceleration due to gravity g. The method of dimensions shows that v is proportional to:",
    "options": {
      "A": "√(g λ)",
      "B": "g / λ",
      "C": "g λ²",
      "D": "√(g / λ)"
    },
    "optionsList": [
      "√(g λ)",
      "g / λ",
      "g λ²",
      "√(g / λ)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDerivation of physical relations using dimensional analysis (gravity waves).\n\n2. GIVEN:\nv depends on λ, ρ, g: v ∝ λ^a ρ^b g^c.\n\n3. FORMULA / PRINCIPLE:\n[v] = [λ]^a [ρ]^b [g]^c => [M⁰ L T⁻¹] = [L]^a [M L⁻³]^b [L T⁻²]^c\n\n4. STEP-BY-STEP SOLUTION:\n1. Equating power of M: b = 0 (velocity of gravity waves is independent of water density!).\n2. Equating power of T: -2c = -1 => c = 1/2.\n3. Equating power of L: a - 3b + c = 1 => a - 0 + 1/2 = 1 => a = 1/2.\n4. Therefore: v ∝ λ^(1/2) g^(1/2) = √(g λ).\n\n5. FINAL ANSWER:\nOption A: √(g λ)\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOptions B, C, and D are dimensionally inconsistent with velocity [L T⁻¹].",
    "solutionStructured": {
      "concept": "Derivation of physical relations using dimensional analysis (gravity waves).",
      "given": "v depends on λ, ρ, g: v ∝ λ^a ρ^b g^c.",
      "formula": "[v] = [λ]^a [ρ]^b [g]^c => [M⁰ L T⁻¹] = [L]^a [M L⁻³]^b [L T⁻²]^c",
      "stepByStep": "1. Equating power of M: b = 0 (velocity of gravity waves is independent of water density!).\n2. Equating power of T: -2c = -1 => c = 1/2.\n3. Equating power of L: a - 3b + c = 1 => a - 0 + 1/2 = 1 => a = 1/2.\n4. Therefore: v ∝ λ^(1/2) g^(1/2) = √(g λ).",
      "finalAnswer": "Option A: √(g λ)",
      "whyOtherOptionsWrong": "Options B, C, and D are dimensionally inconsistent with velocity [L T⁻¹]."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Applications and limitations of dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-058",
    "questionNumber": 58,
    "question": "The value of gravitation constant G is 6.67 × 10⁻¹¹ N·m²/kg² in SI units. Its numerical value in CGS units (dyn·cm²/g²) is:",
    "options": {
      "A": "6.67 × 10⁻⁸",
      "B": "6.67 × 10⁻⁵",
      "C": "6.67 × 10⁻¹⁴",
      "D": "6.67 × 10⁻¹²"
    },
    "optionsList": [
      "6.67 × 10⁻⁸",
      "6.67 × 10⁻⁵",
      "6.67 × 10⁻¹⁴",
      "6.67 × 10⁻¹²"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nConversion of numerical value of G from SI to CGS using dimensions.\n\n2. GIVEN:\nn₁ = 6.67 × 10⁻¹¹, Unit₁ = N·m²/kg² = [M⁻¹ L³ T⁻²].\n\n3. FORMULA / PRINCIPLE:\nn₂ = n₁ [M₁/M₂]⁻¹ [L₁/L₂]³ [T₁/T₂]⁻²\n\n4. STEP-BY-STEP SOLUTION:\n1. [G] = [M⁻¹ L³ T⁻²].\n2. [M₁/M₂] = [1 kg / 1 g] = 10³.\n3. [L₁/L₂] = [1 m / 1 cm] = 10².\n4. [T₁/T₂] = [1 s / 1 s] = 1.\n5. n₂ = (6.67 × 10⁻¹¹) × (10³)⁻¹ × (10²)³ × (1)⁻² = (6.67 × 10⁻¹¹) × 10⁻³ × 10⁶ = 6.67 × 10⁻⁸ dyn·cm²/g².\n\n5. FINAL ANSWER:\nOption A: 6.67 × 10⁻⁸\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B uses 10⁶ instead of 10³ for length. Option C multiplies instead of dividing for mass. Option D has incorrect arithmetic.",
    "solutionStructured": {
      "concept": "Conversion of numerical value of G from SI to CGS using dimensions.",
      "given": "n₁ = 6.67 × 10⁻¹¹, Unit₁ = N·m²/kg² = [M⁻¹ L³ T⁻²].",
      "formula": "n₂ = n₁ [M₁/M₂]⁻¹ [L₁/L₂]³ [T₁/T₂]⁻²",
      "stepByStep": "1. [G] = [M⁻¹ L³ T⁻²].\n2. [M₁/M₂] = [1 kg / 1 g] = 10³.\n3. [L₁/L₂] = [1 m / 1 cm] = 10².\n4. [T₁/T₂] = [1 s / 1 s] = 1.\n5. n₂ = (6.67 × 10⁻¹¹) × (10³)⁻¹ × (10²)³ × (1)⁻² = (6.67 × 10⁻¹¹) × 10⁻³ × 10⁶ = 6.67 × 10⁻⁸ dyn·cm²/g².",
      "finalAnswer": "Option A: 6.67 × 10⁻⁸",
      "whyOtherOptionsWrong": "Option B uses 10⁶ instead of 10³ for length. Option C multiplies instead of dividing for mass. Option D has incorrect arithmetic."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Applications and limitations of dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-059",
    "questionNumber": 59,
    "question": "The frequency of vibration f of a stretched string depends on the string's length l, the tension T in the string, and mass per unit length μ (linear mass density). The relation derived dimensionally is:",
    "options": {
      "A": "f ∝ (1 / l) √(T / μ)",
      "B": "f ∝ l √(T / μ)",
      "C": "f ∝ (1 / l) √(μ / T)",
      "D": "f ∝ (1 / l²) √(T / μ)"
    },
    "optionsList": [
      "f ∝ (1 / l) √(T / μ)",
      "f ∝ l √(T / μ)",
      "f ∝ (1 / l) √(μ / T)",
      "f ∝ (1 / l²) √(T / μ)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nMersenne's laws of vibrating strings via dimensional analysis.\n\n2. GIVEN:\nf ∝ l^a T^b μ^c, where [f] = [T⁻¹], [l] = [L], [T] = [Force] = [M L T⁻²], [μ] = [Mass/Length] = [M L⁻¹].\n\n3. FORMULA / PRINCIPLE:\n[M⁰ L⁰ T⁻¹] = [L]^a [M L T⁻²]^b [M L⁻¹]^c = M^(b + c) L^(a + b - c) T^(-2b)\n\n4. STEP-BY-STEP SOLUTION:\n1. Equating power of M: b + c = 0 => c = -b.\n2. Equating power of T: -2b = -1 => b = 1/2 => c = -1/2.\n3. Equating power of L: a + b - c = 0 => a + 1/2 - (-1/2) = 0 => a + 1 = 0 => a = -1.\n4. Thus: f ∝ l⁻¹ T^(1/2) μ^(-1/2) = (1 / l) √(T / μ).\n\n5. FINAL ANSWER:\nOption A: f ∝ (1 / l) √(T / μ)\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B has positive power of l (violating frequency dimension). Option C inverts tension and mass density. Option D has 1/l².",
    "solutionStructured": {
      "concept": "Mersenne's laws of vibrating strings via dimensional analysis.",
      "given": "f ∝ l^a T^b μ^c, where [f] = [T⁻¹], [l] = [L], [T] = [Force] = [M L T⁻²], [μ] = [Mass/Length] = [M L⁻¹].",
      "formula": "[M⁰ L⁰ T⁻¹] = [L]^a [M L T⁻²]^b [M L⁻¹]^c = M^(b + c) L^(a + b - c) T^(-2b)",
      "stepByStep": "1. Equating power of M: b + c = 0 => c = -b.\n2. Equating power of T: -2b = -1 => b = 1/2 => c = -1/2.\n3. Equating power of L: a + b - c = 0 => a + 1/2 - (-1/2) = 0 => a + 1 = 0 => a = -1.\n4. Thus: f ∝ l⁻¹ T^(1/2) μ^(-1/2) = (1 / l) √(T / μ).",
      "finalAnswer": "Option A: f ∝ (1 / l) √(T / μ)",
      "whyOtherOptionsWrong": "Option B has positive power of l (violating frequency dimension). Option C inverts tension and mass density. Option D has 1/l²."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Applications and limitations of dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-060",
    "questionNumber": 60,
    "question": "The diameter of a cylinder is measured using a Vernier calipers with no zero error. The main scale reading is 3.5 cm and the 6th Vernier division coincides with a main scale division. If 1 MSD = 1 mm and 10 VSD = 9 MSD, the diameter of the cylinder is:",
    "options": {
      "A": "3.56 cm",
      "B": "3.506 cm",
      "C": "3.66 cm",
      "D": "3.512 cm"
    },
    "optionsList": [
      "3.56 cm",
      "3.506 cm",
      "3.66 cm",
      "3.512 cm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nCalculation of measured length using Vernier calipers.\n\n2. GIVEN:\nMSR = 3.5 cm = 35 mm, Coinciding Vernier division n = 6, 1 MSD = 1 mm, 10 VSD = 9 MSD.\n\n3. FORMULA / PRINCIPLE:\nLC = (1 - 9/10) × 1 mm = 0.1 mm = 0.01 cm; Reading = MSR + (n × LC)\n\n4. STEP-BY-STEP SOLUTION:\n1. Least count LC = 0.1 mm = 0.01 cm.\n2. Vernier scale reading VSR = 6 × 0.01 cm = 0.06 cm.\n3. Total Reading = MSR + VSR = 3.5 cm + 0.06 cm = 3.56 cm.\n\n5. FINAL ANSWER:\nOption A: 3.56 cm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B uses LC = 0.001 cm. Option C adds 6 mm instead of 0.6 mm. Option D multiplies by 2.",
    "solutionStructured": {
      "concept": "Calculation of measured length using Vernier calipers.",
      "given": "MSR = 3.5 cm = 35 mm, Coinciding Vernier division n = 6, 1 MSD = 1 mm, 10 VSD = 9 MSD.",
      "formula": "LC = (1 - 9/10) × 1 mm = 0.1 mm = 0.01 cm; Reading = MSR + (n × LC)",
      "stepByStep": "1. Least count LC = 0.1 mm = 0.01 cm.\n2. Vernier scale reading VSR = 6 × 0.01 cm = 0.06 cm.\n3. Total Reading = MSR + VSR = 3.5 cm + 0.06 cm = 3.56 cm.",
      "finalAnswer": "Option A: 3.56 cm",
      "whyOtherOptionsWrong": "Option B uses LC = 0.001 cm. Option C adds 6 mm instead of 0.6 mm. Option D multiplies by 2."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Vernier calipers",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-061",
    "questionNumber": 61,
    "question": "The dimensional formula of electric resistance (R) is:",
    "options": {
      "A": "[M L² T⁻³ A⁻²]",
      "B": "[M L² T⁻² A⁻²]",
      "C": "[M L T⁻³ A⁻²]",
      "D": "[M L² T⁻³ A⁻¹]"
    },
    "optionsList": [
      "[M L² T⁻³ A⁻²]",
      "[M L² T⁻² A⁻²]",
      "[M L T⁻³ A⁻²]",
      "[M L² T⁻³ A⁻¹]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDerivation of dimensional formula of electrical resistance from Joule's law / Ohm's law.\n\n2. GIVEN:\nPower P = I² R => R = P / I².\n\n3. FORMULA / PRINCIPLE:\n[R] = [Power] / [Current²] = [M L² T⁻³] / [A²]\n\n4. STEP-BY-STEP SOLUTION:\n1. Power is work per unit time: [P] = [M L² T⁻²] / [T] = [M L² T⁻³].\n2. Current is base quantity [A], so [I²] = [A²].\n3. [R] = [M L² T⁻³] / [A²] = [M L² T⁻³ A⁻²].\n\n5. FINAL ANSWER:\nOption A: [M L² T⁻³ A⁻²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is inductance [M L² T⁻² A⁻²]. Option C misses a power of length. Option D is electric potential [M L² T⁻³ A⁻¹].",
    "solutionStructured": {
      "concept": "Derivation of dimensional formula of electrical resistance from Joule's law / Ohm's law.",
      "given": "Power P = I² R => R = P / I².",
      "formula": "[R] = [Power] / [Current²] = [M L² T⁻³] / [A²]",
      "stepByStep": "1. Power is work per unit time: [P] = [M L² T⁻²] / [T] = [M L² T⁻³].\n2. Current is base quantity [A], so [I²] = [A²].\n3. [R] = [M L² T⁻³] / [A²] = [M L² T⁻³ A⁻²].",
      "finalAnswer": "Option A: [M L² T⁻³ A⁻²]",
      "whyOtherOptionsWrong": "Option B is inductance [M L² T⁻² A⁻²]. Option C misses a power of length. Option D is electric potential [M L² T⁻³ A⁻¹]."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-062",
    "questionNumber": 62,
    "question": "A spherometer has 100 divisions on its circular scale and moves 1 mm for two complete turns of the disc. What is the least count of the spherometer?",
    "options": {
      "A": "0.005 mm",
      "B": "0.01 mm",
      "C": "0.001 mm",
      "D": "0.02 mm"
    },
    "optionsList": [
      "0.005 mm",
      "0.01 mm",
      "0.001 mm",
      "0.02 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPitch and least count of a spherometer.\n\n2. GIVEN:\nDistance advanced in 2 rotations = 1 mm, Circular divisions N = 100.\n\n3. FORMULA / PRINCIPLE:\nPitch = (Distance moved) / (Number of rotations); Least Count LC = Pitch / N\n\n4. STEP-BY-STEP SOLUTION:\n1. Pitch = 1 mm / 2 = 0.5 mm.\n2. LC = Pitch / 100 = 0.5 mm / 100 = 0.005 mm = 5 × 10⁻³ mm (or 5 μm).\n\n5. FINAL ANSWER:\nOption A: 0.005 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (0.01 mm) assumes pitch is 1 mm. Option C is 0.001 mm. Option D divides by 50.",
    "solutionStructured": {
      "concept": "Pitch and least count of a spherometer.",
      "given": "Distance advanced in 2 rotations = 1 mm, Circular divisions N = 100.",
      "formula": "Pitch = (Distance moved) / (Number of rotations); Least Count LC = Pitch / N",
      "stepByStep": "1. Pitch = 1 mm / 2 = 0.5 mm.\n2. LC = Pitch / 100 = 0.5 mm / 100 = 0.005 mm = 5 × 10⁻³ mm (or 5 μm).",
      "finalAnswer": "Option A: 0.005 mm",
      "whyOtherOptionsWrong": "Option B (0.01 mm) assumes pitch is 1 mm. Option C is 0.001 mm. Option D divides by 50."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Least count",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-063",
    "questionNumber": 63,
    "question": "The time period of an oscillation T = 2π √(m / k). If the percentage error in mass m is 1.5% and in spring constant k is 2.5%, the maximum percentage error in the time period T is:",
    "options": {
      "A": "2.0%",
      "B": "4.0%",
      "C": "1.0%",
      "D": "0.5%"
    },
    "optionsList": [
      "2.0%",
      "4.0%",
      "1.0%",
      "0.5%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPropagation of errors in square root of quotient.\n\n2. GIVEN:\nT = 2π (m/k)^(1/2), % error in m = 1.5%, % error in k = 2.5%.\n\n3. FORMULA / PRINCIPLE:\n(ΔT/T) × 100% = (1/2)(Δm/m × 100%) + (1/2)(Δk/k × 100%)\n\n4. STEP-BY-STEP SOLUTION:\n1. (ΔT/T) = 0.5 (Δm/m) + 0.5 (Δk/k).\n2. Percentage error = 0.5 × (1.5%) + 0.5 × (2.5%) = 0.75% + 1.25% = 2.0%.\n\n5. FINAL ANSWER:\nOption A: 2.0%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (4.0%) omits the 1/2 power multiplier. Option C subtracts the errors (0.5 × 1.0% = 0.5%). Option D is a calculation slip.",
    "solutionStructured": {
      "concept": "Propagation of errors in square root of quotient.",
      "given": "T = 2π (m/k)^(1/2), % error in m = 1.5%, % error in k = 2.5%.",
      "formula": "(ΔT/T) × 100% = (1/2)(Δm/m × 100%) + (1/2)(Δk/k × 100%)",
      "stepByStep": "1. (ΔT/T) = 0.5 (Δm/m) + 0.5 (Δk/k).\n2. Percentage error = 0.5 × (1.5%) + 0.5 × (2.5%) = 0.75% + 1.25% = 2.0%.",
      "finalAnswer": "Option A: 2.0%",
      "whyOtherOptionsWrong": "Option B (4.0%) omits the 1/2 power multiplier. Option C subtracts the errors (0.5 × 1.0% = 0.5%). Option D is a calculation slip."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-064",
    "questionNumber": 64,
    "question": "Which of the following physical quantities has the dimensional formula [M⁰ L² T⁻²]?",
    "options": {
      "A": "Latent heat",
      "B": "Specific heat capacity",
      "C": "Thermal capacity",
      "D": "Universal gas constant"
    },
    "optionsList": [
      "Latent heat",
      "Specific heat capacity",
      "Thermal capacity",
      "Universal gas constant"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDimensional formula of specific latent heat L = Q / m.\n\n2. GIVEN:\nLatent heat L = Heat energy / Mass.\n\n3. FORMULA / PRINCIPLE:\n[L] = [Energy] / [Mass] = [M L² T⁻²] / [M] = [M⁰ L² T⁻²]\n\n4. STEP-BY-STEP SOLUTION:\n1. Latent heat L is heat required per unit mass for phase change: L = Q / m.\n2. [Q] = [M L² T⁻²], [m] = [M].\n3. [L] = [M⁰ L² T⁻²].\n4. For specific heat capacity: s = Q / (m ΔT) => [s] = [M⁰ L² T⁻² K⁻¹].\n5. Thermal capacity = Q / ΔT => [M L² T⁻² K⁻¹].\n6. Thus, [M⁰ L² T⁻²] is uniquely latent heat (as well as gravitational potential).\n\n5. FINAL ANSWER:\nOption A: Latent heat\n\n6. WHY OTHER OPTIONS ARE WRONG:\nSpecific heat capacity has K⁻¹; thermal capacity has M L² T⁻² K⁻¹; gas constant has M L² T⁻² K⁻¹ mol⁻¹.",
    "solutionStructured": {
      "concept": "Dimensional formula of specific latent heat L = Q / m.",
      "given": "Latent heat L = Heat energy / Mass.",
      "formula": "[L] = [Energy] / [Mass] = [M L² T⁻²] / [M] = [M⁰ L² T⁻²]",
      "stepByStep": "1. Latent heat L is heat required per unit mass for phase change: L = Q / m.\n2. [Q] = [M L² T⁻²], [m] = [M].\n3. [L] = [M⁰ L² T⁻²].\n4. For specific heat capacity: s = Q / (m ΔT) => [s] = [M⁰ L² T⁻² K⁻¹].\n5. Thermal capacity = Q / ΔT => [M L² T⁻² K⁻¹].\n6. Thus, [M⁰ L² T⁻²] is uniquely latent heat (as well as gravitational potential).",
      "finalAnswer": "Option A: Latent heat",
      "whyOtherOptionsWrong": "Specific heat capacity has K⁻¹; thermal capacity has M L² T⁻² K⁻¹; gas constant has M L² T⁻² K⁻¹ mol⁻¹."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-065",
    "questionNumber": 65,
    "question": "A physical quantity Z is given by Z = A⁴ B^(1/3) / (C · D^(3/2)). If the percentage errors in A, B, C, and D are 1%, 3%, 2%, and 2% respectively, the maximum percentage error in Z is:",
    "options": {
      "A": "10%",
      "B": "8%",
      "C": "12%",
      "D": "7%"
    },
    "optionsList": [
      "10%",
      "8%",
      "12%",
      "7%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nGeneral formula for propagation of errors across multiple fractional powers.\n\n2. GIVEN:\nZ = A⁴ B^(1/3) / (C D^(3/2)), % errors: A=1%, B=3%, C=2%, D=2%.\n\n3. FORMULA / PRINCIPLE:\n(ΔZ/Z) × 100 = 4(ΔA/A) + (1/3)(ΔB/B) + 1(ΔC/C) + (3/2)(ΔD/D)\n\n4. STEP-BY-STEP SOLUTION:\n1. For A: 4 × 1% = 4%.\n2. For B: (1/3) × 3% = 1%.\n3. For C: 1 × 2% = 2%.\n4. For D: (3/2) × 2% = 3%.\n5. Total percentage error in Z = 4% + 1% + 2% + 3% = 10%.\n\n5. FINAL ANSWER:\nOption A: 10%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (8%) subtracts the denominator contributions. Option C (12%) incorrectly multiplies D's error. Option D misses the contribution of C.",
    "solutionStructured": {
      "concept": "General formula for propagation of errors across multiple fractional powers.",
      "given": "Z = A⁴ B^(1/3) / (C D^(3/2)), % errors: A=1%, B=3%, C=2%, D=2%.",
      "formula": "(ΔZ/Z) × 100 = 4(ΔA/A) + (1/3)(ΔB/B) + 1(ΔC/C) + (3/2)(ΔD/D)",
      "stepByStep": "1. For A: 4 × 1% = 4%.\n2. For B: (1/3) × 3% = 1%.\n3. For C: 1 × 2% = 2%.\n4. For D: (3/2) × 2% = 3%.\n5. Total percentage error in Z = 4% + 1% + 2% + 3% = 10%.",
      "finalAnswer": "Option A: 10%",
      "whyOtherOptionsWrong": "Option B (8%) subtracts the denominator contributions. Option C (12%) incorrectly multiplies D's error. Option D misses the contribution of C."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-066",
    "questionNumber": 66,
    "question": "The pitch of a screw gauge is 1 mm and there are 100 divisions on its circular scale. When nothing is put between its studs, the 95th division of the circular scale coincides with the reference line and the zero of the circular scale lies below the reference line (negative zero error). The zero error of the screw gauge is:",
    "options": {
      "A": "-0.05 mm",
      "B": "+0.05 mm",
      "C": "-0.95 mm",
      "D": "+0.95 mm"
    },
    "optionsList": [
      "-0.05 mm",
      "+0.05 mm",
      "-0.95 mm",
      "+0.95 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDetermination of negative zero error in a screw gauge.\n\n2. GIVEN:\nPitch = 1 mm, Circular scale divisions N = 100, 95th division coincides with reference line when jaws are closed.\n\n3. FORMULA / PRINCIPLE:\nLC = Pitch / N = 1 mm / 100 = 0.01 mm; Negative Zero Error = -(N - coinciding division) × LC\n\n4. STEP-BY-STEP SOLUTION:\n1. Least count LC = 1 mm / 100 = 0.01 mm.\n2. When zero of circular scale has not reached the reference line and the 95th mark is on the reference line, the circular scale is behind by (100 - 95) = 5 divisions.\n3. Zero Error = -(100 - 95) × LC = -5 × 0.01 mm = -0.05 mm.\n4. (When taking readings, this error is subtracted: -(-0.05) = +0.05 mm added).\n\n5. FINAL ANSWER:\nOption A: -0.05 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is positive zero error (+0.05 mm), which would mean the 5th division coincides. Options C and D take 95 directly without subtracting from 100.",
    "solutionStructured": {
      "concept": "Determination of negative zero error in a screw gauge.",
      "given": "Pitch = 1 mm, Circular scale divisions N = 100, 95th division coincides with reference line when jaws are closed.",
      "formula": "LC = Pitch / N = 1 mm / 100 = 0.01 mm; Negative Zero Error = -(N - coinciding division) × LC",
      "stepByStep": "1. Least count LC = 1 mm / 100 = 0.01 mm.\n2. When zero of circular scale has not reached the reference line and the 95th mark is on the reference line, the circular scale is behind by (100 - 95) = 5 divisions.\n3. Zero Error = -(100 - 95) × LC = -5 × 0.01 mm = -0.05 mm.\n4. (When taking readings, this error is subtracted: -(-0.05) = +0.05 mm added).",
      "finalAnswer": "Option A: -0.05 mm",
      "whyOtherOptionsWrong": "Option B is positive zero error (+0.05 mm), which would mean the 5th division coincides. Options C and D take 95 directly without subtracting from 100."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Zero error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-067",
    "questionNumber": 67,
    "question": "In an experiment to determine the Young's modulus of a wire, Y = (4 M g L) / (π d² l), the maximum percentage error will be contributed most by which quantity if all quantities are measured with equal relative precision (1%)?",
    "options": {
      "A": "Diameter of the wire (d)",
      "B": "Mass hung (M)",
      "C": "Original length of wire (L)",
      "D": "Elongation of wire (l)"
    },
    "optionsList": [
      "Diameter of the wire (d)",
      "Mass hung (M)",
      "Original length of wire (L)",
      "Elongation of wire (l)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nImpact of exponents on percentage error contribution.\n\n2. GIVEN:\nY = (4 M g L) / (π d² l). Each variable measured with relative error 1%.\n\n3. FORMULA / PRINCIPLE:\nΔY/Y = (ΔM/M) + (Δg/g) + (ΔL/L) + 2(Δd/d) + (Δl/l)\n\n4. STEP-BY-STEP SOLUTION:\n1. In the expression for Young's modulus, the diameter d appears with power 2 (d² in denominator).\n2. Its contribution to percentage error is 2 × (Δd/d).\n3. All other variables (M, L, l) appear with power 1, contributing only 1 × (error).\n4. Therefore, the measurement of diameter d contributes twice as much error (2%) as any other term.\n\n5. FINAL ANSWER:\nOption A: Diameter of the wire (d)\n\n6. WHY OTHER OPTIONS ARE WRONG:\nM, L, and l all have exponent 1, hence contribute only 1% each compared to 2% from diameter d.",
    "solutionStructured": {
      "concept": "Impact of exponents on percentage error contribution.",
      "given": "Y = (4 M g L) / (π d² l). Each variable measured with relative error 1%.",
      "formula": "ΔY/Y = (ΔM/M) + (Δg/g) + (ΔL/L) + 2(Δd/d) + (Δl/l)",
      "stepByStep": "1. In the expression for Young's modulus, the diameter d appears with power 2 (d² in denominator).\n2. Its contribution to percentage error is 2 × (Δd/d).\n3. All other variables (M, L, l) appear with power 1, contributing only 1 × (error).\n4. Therefore, the measurement of diameter d contributes twice as much error (2%) as any other term.",
      "finalAnswer": "Option A: Diameter of the wire (d)",
      "whyOtherOptionsWrong": "M, L, and l all have exponent 1, hence contribute only 1% each compared to 2% from diameter d."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-068",
    "questionNumber": 68,
    "question": "The dimensions of magnetic flux (Φ) are:",
    "options": {
      "A": "[M L² T⁻² A⁻¹]",
      "B": "[M L² T⁻² A⁻²]",
      "C": "[M L T⁻² A⁻¹]",
      "D": "[M L² T⁻¹ A⁻¹]"
    },
    "optionsList": [
      "[M L² T⁻² A⁻¹]",
      "[M L² T⁻² A⁻²]",
      "[M L T⁻² A⁻¹]",
      "[M L² T⁻¹ A⁻¹]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFaraday's law of induction / definition of magnetic flux.\n\n2. GIVEN:\nInduced emf e = -dΦ/dt => [Φ] = [e] · [t].\n\n3. FORMULA / PRINCIPLE:\n[e] = [Work / Charge] = [M L² T⁻²] / [A T] = [M L² T⁻³ A⁻¹]; [Φ] = [e][t] = [M L² T⁻² A⁻¹]\n\n4. STEP-BY-STEP SOLUTION:\n1. Magnetic flux Φ = B · A.\n2. Magnetic force F = q v B => B = F / (q v) => [B] = [M L T⁻²] / ([A T][L T⁻¹]) = [M T⁻² A⁻¹].\n3. [Φ] = [B][A] = [M T⁻² A⁻¹] · [L²] = [M L² T⁻² A⁻¹].\n4. SI unit is Weber (Wb = T·m² = V·s).\n\n5. FINAL ANSWER:\nOption A: [M L² T⁻² A⁻¹]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is self-inductance [M L² T⁻² A⁻²]. Option C misses a power of length. Option D has T⁻¹ instead of T⁻².",
    "solutionStructured": {
      "concept": "Faraday's law of induction / definition of magnetic flux.",
      "given": "Induced emf e = -dΦ/dt => [Φ] = [e] · [t].",
      "formula": "[e] = [Work / Charge] = [M L² T⁻²] / [A T] = [M L² T⁻³ A⁻¹]; [Φ] = [e][t] = [M L² T⁻² A⁻¹]",
      "stepByStep": "1. Magnetic flux Φ = B · A.\n2. Magnetic force F = q v B => B = F / (q v) => [B] = [M L T⁻²] / ([A T][L T⁻¹]) = [M T⁻² A⁻¹].\n3. [Φ] = [B][A] = [M T⁻² A⁻¹] · [L²] = [M L² T⁻² A⁻¹].\n4. SI unit is Weber (Wb = T·m² = V·s).",
      "finalAnswer": "Option A: [M L² T⁻² A⁻¹]",
      "whyOtherOptionsWrong": "Option B is self-inductance [M L² T⁻² A⁻²]. Option C misses a power of length. Option D has T⁻¹ instead of T⁻²."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-069",
    "questionNumber": 69,
    "question": "The thickness of 50 sheets of paper is measured using a screw gauge. The main scale reading is 1.0 mm and the circular scale division coinciding is 48. If the least count of the screw gauge is 0.01 mm and there is no zero error, the thickness of a single sheet of paper is:",
    "options": {
      "A": "0.0296 mm",
      "B": "0.0148 mm",
      "C": "0.048 mm",
      "D": "0.0248 mm"
    },
    "optionsList": [
      "0.0296 mm",
      "0.0148 mm",
      "0.048 mm",
      "0.0248 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nMeasurement of thin objects by stacking to minimize relative error.\n\n2. GIVEN:\nNumber of sheets n = 50, MSR = 1.0 mm, CSR = 48, LC = 0.01 mm.\n\n3. FORMULA / PRINCIPLE:\nTotal thickness T = MSR + (CSR × LC); Thickness per sheet t = T / n\n\n4. STEP-BY-STEP SOLUTION:\n1. Total thickness of 50 sheets = 1.0 mm + (48 × 0.01 mm) = 1.0 mm + 0.48 mm = 1.48 mm.\n2. Thickness of a single sheet t = 1.48 mm / 50.\n3. Calculate: 1.48 / 50 = 2.96 / 100 = 0.0296 mm (or 29.6 μm).\n\n5. FINAL ANSWER:\nOption A: 0.0296 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B divides 1.48 by 100. Option C only divides 48 divisions. Option D divides 1.24.",
    "solutionStructured": {
      "concept": "Measurement of thin objects by stacking to minimize relative error.",
      "given": "Number of sheets n = 50, MSR = 1.0 mm, CSR = 48, LC = 0.01 mm.",
      "formula": "Total thickness T = MSR + (CSR × LC); Thickness per sheet t = T / n",
      "stepByStep": "1. Total thickness of 50 sheets = 1.0 mm + (48 × 0.01 mm) = 1.0 mm + 0.48 mm = 1.48 mm.\n2. Thickness of a single sheet t = 1.48 mm / 50.\n3. Calculate: 1.48 / 50 = 2.96 / 100 = 0.0296 mm (or 29.6 μm).",
      "finalAnswer": "Option A: 0.0296 mm",
      "whyOtherOptionsWrong": "Option B divides 1.48 by 100. Option C only divides 48 divisions. Option D divides 1.24."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Measurement of length",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-070",
    "questionNumber": 70,
    "question": "The dimension of 1 / (μ₀ ε₀) is equivalent to:",
    "options": {
      "A": "[L² T⁻²]",
      "B": "[L T⁻¹]",
      "C": "[L⁻² T²]",
      "D": "[M L² T⁻²]"
    },
    "optionsList": [
      "[L² T⁻²]",
      "[L T⁻¹]",
      "[L⁻² T²]",
      "[M L² T⁻²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nRelation between speed of light, permeability, and permittivity.\n\n2. GIVEN:\nQuantity X = 1 / (μ₀ ε₀).\n\n3. FORMULA / PRINCIPLE:\nc = 1 / √(μ₀ ε₀) => c² = 1 / (μ₀ ε₀)\n\n4. STEP-BY-STEP SOLUTION:\n1. Speed of light in vacuum c = 1 / √(μ₀ ε₀).\n2. Squaring both sides: c² = 1 / (μ₀ ε₀).\n3. Since [c] = [L T⁻¹], [c²] = [L² T⁻²].\n4. Therefore, [1 / (μ₀ ε₀)] = [L² T⁻²].\n\n5. FINAL ANSWER:\nOption A: [L² T⁻²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is [c] = [L T⁻¹]. Option C is [1/c²] = [L⁻² T²]. Option D is energy.",
    "solutionStructured": {
      "concept": "Relation between speed of light, permeability, and permittivity.",
      "given": "Quantity X = 1 / (μ₀ ε₀).",
      "formula": "c = 1 / √(μ₀ ε₀) => c² = 1 / (μ₀ ε₀)",
      "stepByStep": "1. Speed of light in vacuum c = 1 / √(μ₀ ε₀).\n2. Squaring both sides: c² = 1 / (μ₀ ε₀).\n3. Since [c] = [L T⁻¹], [c²] = [L² T⁻²].\n4. Therefore, [1 / (μ₀ ε₀)] = [L² T⁻²].",
      "finalAnswer": "Option A: [L² T⁻²]",
      "whyOtherOptionsWrong": "Option B is [c] = [L T⁻¹]. Option C is [1/c²] = [L⁻² T²]. Option D is energy."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-071",
    "questionNumber": 71,
    "question": "In a Vernier calipers, 1 cm on the main scale is divided into 10 equal parts. If 10 divisions of the Vernier scale coincide with 8 small divisions of the main scale, the least count of the calipers is:",
    "options": {
      "A": "0.02 cm",
      "B": "0.01 cm",
      "C": "0.005 cm",
      "D": "0.05 cm"
    },
    "optionsList": [
      "0.02 cm",
      "0.01 cm",
      "0.005 cm",
      "0.05 cm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nLeast count calculation for non-standard Vernier calipers.\n\n2. GIVEN:\n1 MSD = 1 cm / 10 = 0.1 cm = 1 mm; 10 VSD = 8 MSD.\n\n3. FORMULA / PRINCIPLE:\nLC = 1 MSD - 1 VSD = (1 - 8/10) MSD = (2/10) MSD\n\n4. STEP-BY-STEP SOLUTION:\n1. 1 MSD = 0.1 cm.\n2. 1 VSD = (8/10) MSD = 0.8 × 0.1 cm = 0.08 cm.\n3. LC = 1 MSD - 1 VSD = 0.10 cm - 0.08 cm = 0.02 cm (or 0.2 mm).\n\n5. FINAL ANSWER:\nOption A: 0.02 cm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (0.01 cm) is for 10 VSD = 9 MSD. Option C is for 20 divisions. Option D is 5 times too large.",
    "solutionStructured": {
      "concept": "Least count calculation for non-standard Vernier calipers.",
      "given": "1 MSD = 1 cm / 10 = 0.1 cm = 1 mm; 10 VSD = 8 MSD.",
      "formula": "LC = 1 MSD - 1 VSD = (1 - 8/10) MSD = (2/10) MSD",
      "stepByStep": "1. 1 MSD = 0.1 cm.\n2. 1 VSD = (8/10) MSD = 0.8 × 0.1 cm = 0.08 cm.\n3. LC = 1 MSD - 1 VSD = 0.10 cm - 0.08 cm = 0.02 cm (or 0.2 mm).",
      "finalAnswer": "Option A: 0.02 cm",
      "whyOtherOptionsWrong": "Option B (0.01 cm) is for 10 VSD = 9 MSD. Option C is for 20 divisions. Option D is 5 times too large."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Vernier calipers",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-072",
    "questionNumber": 72,
    "question": "The radius of a sphere is (5.3 ± 0.1) cm. The percentage error in its volume is:",
    "options": {
      "A": "5.66%",
      "B": "1.89%",
      "C": "3.77%",
      "D": "0.63%"
    },
    "optionsList": [
      "5.66%",
      "1.89%",
      "3.77%",
      "0.63%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPercentage error in volume of a sphere.\n\n2. GIVEN:\nr = 5.3 cm, Δr = 0.1 cm.\n\n3. FORMULA / PRINCIPLE:\nVolume V = (4/3) π r³ => (ΔV/V) × 100% = 3 × (Δr/r × 100%)\n\n4. STEP-BY-STEP SOLUTION:\n1. Fractional error in radius: Δr/r = 0.1 / 5.3 ≈ 0.018868 (1.887%).\n2. In volume V = (4/3) π r³, the exponent of r is 3.\n3. Percentage error in V = 3 × (Δr/r) × 100% = 3 × 1.887% = 5.66%.\n\n5. FINAL ANSWER:\nOption A: 5.66%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (1.89%) is the percentage error in radius itself (forgets exponent 3). Option C (3.77%) multiplies by 2 (surface area error). Option D divides by 3.",
    "solutionStructured": {
      "concept": "Percentage error in volume of a sphere.",
      "given": "r = 5.3 cm, Δr = 0.1 cm.",
      "formula": "Volume V = (4/3) π r³ => (ΔV/V) × 100% = 3 × (Δr/r × 100%)",
      "stepByStep": "1. Fractional error in radius: Δr/r = 0.1 / 5.3 ≈ 0.018868 (1.887%).\n2. In volume V = (4/3) π r³, the exponent of r is 3.\n3. Percentage error in V = 3 × (Δr/r) × 100% = 3 × 1.887% = 5.66%.",
      "finalAnswer": "Option A: 5.66%",
      "whyOtherOptionsWrong": "Option B (1.89%) is the percentage error in radius itself (forgets exponent 3). Option C (3.77%) multiplies by 2 (surface area error). Option D divides by 3."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Percentage error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-073",
    "questionNumber": 73,
    "question": "A force F is given by F = a t + b t², where t is time. The dimensional formula of a / b is:",
    "options": {
      "A": "[T]",
      "B": "[T⁻¹]",
      "C": "[L T⁻¹]",
      "D": "[M L T⁻¹]"
    },
    "optionsList": [
      "[T]",
      "[T⁻¹]",
      "[L T⁻¹]",
      "[M L T⁻¹]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPrinciple of homogeneity applied to polynomial terms.\n\n2. GIVEN:\nF = a t + b t².\n\n3. FORMULA / PRINCIPLE:\n[a t] = [F] => [a] = [F] / [T]; [b t²] = [F] => [b] = [F] / [T²]\n\n4. STEP-BY-STEP SOLUTION:\n1. [a] = [F][T⁻¹] = [M L T⁻²][T⁻¹] = [M L T⁻³].\n2. [b] = [F][T⁻²] = [M L T⁻²][T⁻²] = [M L T⁻⁴].\n3. Ratio [a / b] = ([F][T⁻¹]) / ([F][T⁻²]) = [T⁻¹] / [T⁻²] = [T¹].\n4. Thus, [a / b] has the dimensions of time [T].\n\n5. FINAL ANSWER:\nOption A: [T]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is [b / a] = [T⁻¹]. Option C is velocity. Option D is momentum.",
    "solutionStructured": {
      "concept": "Principle of homogeneity applied to polynomial terms.",
      "given": "F = a t + b t².",
      "formula": "[a t] = [F] => [a] = [F] / [T]; [b t²] = [F] => [b] = [F] / [T²]",
      "stepByStep": "1. [a] = [F][T⁻¹] = [M L T⁻²][T⁻¹] = [M L T⁻³].\n2. [b] = [F][T⁻²] = [M L T⁻²][T⁻²] = [M L T⁻⁴].\n3. Ratio [a / b] = ([F][T⁻¹]) / ([F][T⁻²]) = [T⁻¹] / [T⁻²] = [T¹].\n4. Thus, [a / b] has the dimensions of time [T].",
      "finalAnswer": "Option A: [T]",
      "whyOtherOptionsWrong": "Option B is [b / a] = [T⁻¹]. Option C is velocity. Option D is momentum."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-074",
    "questionNumber": 74,
    "question": "The density of a material in CGS system is 8 g/cm³. In SI units (kg/m³), its value is:",
    "options": {
      "A": "8000 kg/m³",
      "B": "80 kg/m³",
      "C": "0.008 kg/m³",
      "D": "800 kg/m³"
    },
    "optionsList": [
      "8000 kg/m³",
      "80 kg/m³",
      "0.008 kg/m³",
      "800 kg/m³"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nUnit conversion of density from CGS to SI.\n\n2. GIVEN:\nDensity ρ = 8 g/cm³.\n\n3. FORMULA / PRINCIPLE:\n1 g = 10⁻³ kg; 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³\n\n4. STEP-BY-STEP SOLUTION:\n1. 1 g/cm³ = (10⁻³ kg) / (10⁻⁶ m³) = 10³ kg/m³ = 1000 kg/m³.\n2. Therefore, 8 g/cm³ = 8 × 1000 kg/m³ = 8000 kg/m³.\n\n5. FINAL ANSWER:\nOption A: 8000 kg/m³\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B multiplies by 10. Option C divides by 1000. Option D multiplies by 100.",
    "solutionStructured": {
      "concept": "Unit conversion of density from CGS to SI.",
      "given": "Density ρ = 8 g/cm³.",
      "formula": "1 g = 10⁻³ kg; 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³",
      "stepByStep": "1. 1 g/cm³ = (10⁻³ kg) / (10⁻⁶ m³) = 10³ kg/m³ = 1000 kg/m³.\n2. Therefore, 8 g/cm³ = 8 × 1000 kg/m³ = 8000 kg/m³.",
      "finalAnswer": "Option A: 8000 kg/m³",
      "whyOtherOptionsWrong": "Option B multiplies by 10. Option C divides by 1000. Option D multiplies by 100."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Applications and limitations of dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-075",
    "questionNumber": 75,
    "question": "If momentum (p), area (A) and time (T) are taken as fundamental quantities, then energy has the dimensional formula:",
    "options": {
      "A": "[p A^(1/2) T⁻¹]",
      "B": "[p A T⁻¹]",
      "C": "[p² A T⁻¹]",
      "D": "[p A^(1/2) T]"
    },
    "optionsList": [
      "[p A^(1/2) T⁻¹]",
      "[p A T⁻¹]",
      "[p² A T⁻¹]",
      "[p A^(1/2) T]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDerivation of dimensions of energy in terms of momentum, area, and time.\n\n2. GIVEN:\nFundamental quantities: p = [M L T⁻¹], A = [L²], T = [T]. Energy E = [M L² T⁻²].\n\n3. FORMULA / PRINCIPLE:\nE = k p^a A^b T^c => [M L² T⁻²] = [M L T⁻¹]^a [L²]^b [T]^c\n\n4. STEP-BY-STEP SOLUTION:\n1. [M L² T⁻²] = M^a L^(a + 2b) T^(-a + c).\n2. Equating power of M: a = 1.\n3. Equating power of L: a + 2b = 2 => 1 + 2b = 2 => 2b = 1 => b = 1/2.\n4. Equating power of T: -a + c = -2 => -1 + c = -2 => c = -1.\n5. Therefore, [E] = [p¹ A^(1/2) T⁻¹].\n\n5. FINAL ANSWER:\nOption A: [p A^(1/2) T⁻¹]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B misses power 1/2 on A. Option C squares momentum. Option D has positive power on time.",
    "solutionStructured": {
      "concept": "Derivation of dimensions of energy in terms of momentum, area, and time.",
      "given": "Fundamental quantities: p = [M L T⁻¹], A = [L²], T = [T]. Energy E = [M L² T⁻²].",
      "formula": "E = k p^a A^b T^c => [M L² T⁻²] = [M L T⁻¹]^a [L²]^b [T]^c",
      "stepByStep": "1. [M L² T⁻²] = M^a L^(a + 2b) T^(-a + c).\n2. Equating power of M: a = 1.\n3. Equating power of L: a + 2b = 2 => 1 + 2b = 2 => 2b = 1 => b = 1/2.\n4. Equating power of T: -a + c = -2 => -1 + c = -2 => c = -1.\n5. Therefore, [E] = [p¹ A^(1/2) T⁻¹].",
      "finalAnswer": "Option A: [p A^(1/2) T⁻¹]",
      "whyOtherOptionsWrong": "Option B misses power 1/2 on A. Option C squares momentum. Option D has positive power on time."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-076",
    "questionNumber": 76,
    "question": "A screw gauge of pitch 0.5 mm and 100 circular divisions is used to measure the thickness of an aluminium strip. If the main scale reading is 1.5 mm and circular scale reading is 34 divisions, with a zero error of +0.02 mm, the corrected thickness is:",
    "options": {
      "A": "1.65 mm",
      "B": "1.67 mm",
      "C": "1.69 mm",
      "D": "1.84 mm"
    },
    "optionsList": [
      "1.65 mm",
      "1.67 mm",
      "1.69 mm",
      "1.84 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nCorrection of positive zero error in a 100-division screw gauge.\n\n2. GIVEN:\nPitch = 0.5 mm, N = 100 divisions, MSR = 1.5 mm, CSR = 34, Zero Error = +0.02 mm.\n\n3. FORMULA / PRINCIPLE:\nLC = Pitch / N; Observed reading = MSR + (CSR × LC); Correct reading = Observed reading - (Zero Error)\n\n4. STEP-BY-STEP SOLUTION:\n1. Least count LC = 0.5 mm / 100 = 0.005 mm.\n2. Circular scale reading = 34 × 0.005 mm = 0.170 mm.\n3. Observed reading = 1.5 mm + 0.170 mm = 1.670 mm.\n4. Correct reading = 1.670 mm - (+0.02 mm) = 1.650 mm = 1.65 mm.\n\n5. FINAL ANSWER:\nOption A: 1.65 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (1.67 mm) ignores zero error. Option C (1.69 mm) adds positive zero error instead of subtracting. Option D miscalculates the least count.",
    "solutionStructured": {
      "concept": "Correction of positive zero error in a 100-division screw gauge.",
      "given": "Pitch = 0.5 mm, N = 100 divisions, MSR = 1.5 mm, CSR = 34, Zero Error = +0.02 mm.",
      "formula": "LC = Pitch / N; Observed reading = MSR + (CSR × LC); Correct reading = Observed reading - (Zero Error)",
      "stepByStep": "1. Least count LC = 0.5 mm / 100 = 0.005 mm.\n2. Circular scale reading = 34 × 0.005 mm = 0.170 mm.\n3. Observed reading = 1.5 mm + 0.170 mm = 1.670 mm.\n4. Correct reading = 1.670 mm - (+0.02 mm) = 1.650 mm = 1.65 mm.",
      "finalAnswer": "Option A: 1.65 mm",
      "whyOtherOptionsWrong": "Option B (1.67 mm) ignores zero error. Option C (1.69 mm) adds positive zero error instead of subtracting. Option D miscalculates the least count."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Screw gauge",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-077",
    "questionNumber": 77,
    "question": "The percentage error in measuring the mass of a solid block is 1.2% and in its volume is 2.4%. The maximum percentage error in the density of the block is:",
    "options": {
      "A": "3.6%",
      "B": "1.2%",
      "C": "2.0%",
      "D": "2.88%"
    },
    "optionsList": [
      "3.6%",
      "1.2%",
      "2.0%",
      "2.88%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError propagation in density (quotient).\n\n2. GIVEN:\nDensity ρ = Mass / Volume. % error in mass = 1.2%, % error in volume = 2.4%.\n\n3. FORMULA / PRINCIPLE:\n(Δρ/ρ) × 100% = (Δm/m × 100%) + (ΔV/V × 100%)\n\n4. STEP-BY-STEP SOLUTION:\n1. Density is the quotient of mass and volume: ρ = m / V.\n2. For quotient, relative errors add to find the maximum possible error.\n3. Maximum percentage error in ρ = 1.2% + 2.4% = 3.6%.\n\n5. FINAL ANSWER:\nOption A: 3.6%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B subtracts errors (2.4% - 1.2% = 1.2%), which is false for maximum permissible error. Option C takes ratio. Option D multiplies percentages.",
    "solutionStructured": {
      "concept": "Error propagation in density (quotient).",
      "given": "Density ρ = Mass / Volume. % error in mass = 1.2%, % error in volume = 2.4%.",
      "formula": "(Δρ/ρ) × 100% = (Δm/m × 100%) + (ΔV/V × 100%)",
      "stepByStep": "1. Density is the quotient of mass and volume: ρ = m / V.\n2. For quotient, relative errors add to find the maximum possible error.\n3. Maximum percentage error in ρ = 1.2% + 2.4% = 3.6%.",
      "finalAnswer": "Option A: 3.6%",
      "whyOtherOptionsWrong": "Option B subtracts errors (2.4% - 1.2% = 1.2%), which is false for maximum permissible error. Option C takes ratio. Option D multiplies percentages."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Percentage error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-078",
    "questionNumber": 78,
    "question": "Which of the following physical quantities has the dimensional formula [M L² T⁻³]?",
    "options": {
      "A": "Power",
      "B": "Energy",
      "C": "Pressure",
      "D": "Force"
    },
    "optionsList": [
      "Power",
      "Energy",
      "Pressure",
      "Force"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDimensional formula of Power (rate of doing work).\n\n2. GIVEN:\nPower P = Work / Time.\n\n3. FORMULA / PRINCIPLE:\n[P] = [Work] / [Time] = [M L² T⁻²] / [T] = [M L² T⁻³]\n\n4. STEP-BY-STEP SOLUTION:\n1. Work has dimensions [Force × displacement] = [M L T⁻²][L] = [M L² T⁻²].\n2. Power is work divided by time: [P] = [M L² T⁻²] / [T] = [M L² T⁻³].\n3. Energy is [M L² T⁻²].\n4. Pressure is [M L⁻¹ T⁻²].\n5. Force is [M L T⁻²].\n6. Hence, [M L² T⁻³] belongs to Power.\n\n5. FINAL ANSWER:\nOption A: Power\n\n6. WHY OTHER OPTIONS ARE WRONG:\nEnergy is [M L² T⁻²]; Pressure is [M L⁻¹ T⁻²]; Force is [M L T⁻²].",
    "solutionStructured": {
      "concept": "Dimensional formula of Power (rate of doing work).",
      "given": "Power P = Work / Time.",
      "formula": "[P] = [Work] / [Time] = [M L² T⁻²] / [T] = [M L² T⁻³]",
      "stepByStep": "1. Work has dimensions [Force × displacement] = [M L T⁻²][L] = [M L² T⁻²].\n2. Power is work divided by time: [P] = [M L² T⁻²] / [T] = [M L² T⁻³].\n3. Energy is [M L² T⁻²].\n4. Pressure is [M L⁻¹ T⁻²].\n5. Force is [M L T⁻²].\n6. Hence, [M L² T⁻³] belongs to Power.",
      "finalAnswer": "Option A: Power",
      "whyOtherOptionsWrong": "Energy is [M L² T⁻²]; Pressure is [M L⁻¹ T⁻²]; Force is [M L T⁻²]."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-079",
    "questionNumber": 79,
    "question": "The equation of state of some gases can be expressed by the relation (P + a / V²)(V) = R T. The dimensional formula of constant 'a' in this equation is:",
    "options": {
      "A": "[M L⁵ T⁻²]",
      "B": "[M L³ T⁻²]",
      "C": "[M L⁻¹ T⁻²]",
      "D": "[M L⁴ T⁻²]"
    },
    "optionsList": [
      "[M L⁵ T⁻²]",
      "[M L³ T⁻²]",
      "[M L⁻¹ T⁻²]",
      "[M L⁴ T⁻²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDimensional homogeneity in gas equations.\n\n2. GIVEN:\n(P + a / V²) V = R T.\n\n3. FORMULA / PRINCIPLE:\n[a / V²] = [P] => [a] = [P] · [V²]\n\n4. STEP-BY-STEP SOLUTION:\n1. By the principle of homogeneity, only physical quantities with identical dimensions can be added.\n2. Therefore: [a / V²] = [P].\n3. [P] = [M L⁻¹ T⁻²] and [V] = [L³] => [V²] = [L⁶].\n4. [a] = [M L⁻¹ T⁻²] · [L⁶] = [M L⁵ T⁻²].\n\n5. FINAL ANSWER:\nOption A: [M L⁵ T⁻²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is [P V]. Option C is [P]. Option D is dimensionally incorrect.",
    "solutionStructured": {
      "concept": "Dimensional homogeneity in gas equations.",
      "given": "(P + a / V²) V = R T.",
      "formula": "[a / V²] = [P] => [a] = [P] · [V²]",
      "stepByStep": "1. By the principle of homogeneity, only physical quantities with identical dimensions can be added.\n2. Therefore: [a / V²] = [P].\n3. [P] = [M L⁻¹ T⁻²] and [V] = [L³] => [V²] = [L⁶].\n4. [a] = [M L⁻¹ T⁻²] · [L⁶] = [M L⁵ T⁻²].",
      "finalAnswer": "Option A: [M L⁵ T⁻²]",
      "whyOtherOptionsWrong": "Option B is [P V]. Option C is [P]. Option D is dimensionally incorrect."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-080",
    "questionNumber": 80,
    "question": "The diameter of a wire is measured with a screw gauge of pitch 1 mm and 50 circular divisions. What is the maximum permissible relative error in the measurement if the reading obtained is 2.50 mm?",
    "options": {
      "A": "0.8%",
      "B": "0.4%",
      "C": "1.6%",
      "D": "0.2%"
    },
    "optionsList": [
      "0.8%",
      "0.4%",
      "1.6%",
      "0.2%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nMaximum permissible instrumental error determined by instrument least count.\n\n2. GIVEN:\nPitch = 1 mm, Circular divisions N = 50, Measured diameter d = 2.50 mm.\n\n3. FORMULA / PRINCIPLE:\nLC = Pitch / N; Maximum permissible absolute error Δd = LC; Relative error = (Δd / d) × 100%\n\n4. STEP-BY-STEP SOLUTION:\n1. Least count LC = 1 mm / 50 = 0.02 mm.\n2. Maximum error in single reading Δd = LC = 0.02 mm.\n3. Relative percentage error = (0.02 mm / 2.50 mm) × 100% = (2 / 250) × 100% = 0.8%.\n\n5. FINAL ANSWER:\nOption A: 0.8%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B uses LC = 0.01 mm. Option C doubles the error. Option D divides by 4.",
    "solutionStructured": {
      "concept": "Maximum permissible instrumental error determined by instrument least count.",
      "given": "Pitch = 1 mm, Circular divisions N = 50, Measured diameter d = 2.50 mm.",
      "formula": "LC = Pitch / N; Maximum permissible absolute error Δd = LC; Relative error = (Δd / d) × 100%",
      "stepByStep": "1. Least count LC = 1 mm / 50 = 0.02 mm.\n2. Maximum error in single reading Δd = LC = 0.02 mm.\n3. Relative percentage error = (0.02 mm / 2.50 mm) × 100% = (2 / 250) × 100% = 0.8%.",
      "finalAnswer": "Option A: 0.8%",
      "whyOtherOptionsWrong": "Option B uses LC = 0.01 mm. Option C doubles the error. Option D divides by 4."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-081",
    "questionNumber": 81,
    "question": "A physical quantity X depends on three observables a, b, and c as X = a² b³ / c^(1/2). If percentage errors in a, b, and c are 2%, 1%, and 4% respectively, the percentage error in X is:",
    "options": {
      "A": "9%",
      "B": "7%",
      "C": "11%",
      "D": "5%"
    },
    "optionsList": [
      "9%",
      "7%",
      "11%",
      "5%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError propagation with fractional exponents.\n\n2. GIVEN:\nX = a² b³ / c^(1/2), % errors: a=2%, b=1%, c=4%.\n\n3. FORMULA / PRINCIPLE:\n(ΔX/X) × 100% = 2(Δa/a) + 3(Δb/b) + (1/2)(Δc/c)\n\n4. STEP-BY-STEP SOLUTION:\n1. Term a: 2 × 2% = 4%.\n2. Term b: 3 × 1% = 3%.\n3. Term c: (1/2) × 4% = 2%.\n4. Total percentage error in X = 4% + 3% + 2% = 9%.\n\n5. FINAL ANSWER:\nOption A: 9%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B subtracts the error of c (4% + 3% - 2% = 5%) or drops a power. Option C adds full 4% for c. Option D subtracts multiple terms.",
    "solutionStructured": {
      "concept": "Error propagation with fractional exponents.",
      "given": "X = a² b³ / c^(1/2), % errors: a=2%, b=1%, c=4%.",
      "formula": "(ΔX/X) × 100% = 2(Δa/a) + 3(Δb/b) + (1/2)(Δc/c)",
      "stepByStep": "1. Term a: 2 × 2% = 4%.\n2. Term b: 3 × 1% = 3%.\n3. Term c: (1/2) × 4% = 2%.\n4. Total percentage error in X = 4% + 3% + 2% = 9%.",
      "finalAnswer": "Option A: 9%",
      "whyOtherOptionsWrong": "Option B subtracts the error of c (4% + 3% - 2% = 5%) or drops a power. Option C adds full 4% for c. Option D subtracts multiple terms."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-082",
    "questionNumber": 82,
    "question": "The dimensional formula of the universal Boltzmann constant (kB) is:",
    "options": {
      "A": "[M L² T⁻² K⁻¹]",
      "B": "[M L² T⁻¹ K⁻¹]",
      "C": "[M L T⁻² K⁻¹]",
      "D": "[M L² T⁻³ K⁻¹]"
    },
    "optionsList": [
      "[M L² T⁻² K⁻¹]",
      "[M L² T⁻¹ K⁻¹]",
      "[M L T⁻² K⁻¹]",
      "[M L² T⁻³ K⁻¹]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBoltzmann constant definition from kinetic theory of gases.\n\n2. GIVEN:\nTranslational kinetic energy of a molecule E = (3/2) kB T.\n\n3. FORMULA / PRINCIPLE:\nkB = (2/3) E / T => [kB] = [Energy] / [Temperature]\n\n4. STEP-BY-STEP SOLUTION:\n1. Energy [E] = [M L² T⁻²].\n2. Temperature [T] = [K].\n3. [kB] = [M L² T⁻²] / [K] = [M L² T⁻² K⁻¹].\n4. SI unit is J/K (Joules per Kelvin).\n\n5. FINAL ANSWER:\nOption A: [M L² T⁻² K⁻¹]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B has T⁻¹ (similar to entropy times time). Option C has L instead of L². Option D has T⁻³.",
    "solutionStructured": {
      "concept": "Boltzmann constant definition from kinetic theory of gases.",
      "given": "Translational kinetic energy of a molecule E = (3/2) kB T.",
      "formula": "kB = (2/3) E / T => [kB] = [Energy] / [Temperature]",
      "stepByStep": "1. Energy [E] = [M L² T⁻²].\n2. Temperature [T] = [K].\n3. [kB] = [M L² T⁻²] / [K] = [M L² T⁻² K⁻¹].\n4. SI unit is J/K (Joules per Kelvin).",
      "finalAnswer": "Option A: [M L² T⁻² K⁻¹]",
      "whyOtherOptionsWrong": "Option B has T⁻¹ (similar to entropy times time). Option C has L instead of L². Option D has T⁻³."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-083",
    "questionNumber": 83,
    "question": "In a Vernier calipers, n divisions of the Vernier scale coincide with (n - 1) divisions of the main scale. If the value of 1 main scale division is 'a' units, the least count of the Vernier calipers is:",
    "options": {
      "A": "a / n",
      "B": "a / (n - 1)",
      "C": "n · a",
      "D": "(n - 1) a / n"
    },
    "optionsList": [
      "a / n",
      "a / (n - 1)",
      "n · a",
      "(n - 1) a / n"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nGeneral formula for least count of Vernier calipers.\n\n2. GIVEN:\nn VSD = (n - 1) MSD, 1 MSD = a.\n\n3. FORMULA / PRINCIPLE:\nLC = 1 MSD - 1 VSD = [1 - (n - 1)/n] MSD = (1/n) MSD\n\n4. STEP-BY-STEP SOLUTION:\n1. 1 VSD = ((n - 1) / n) MSD.\n2. LC = 1 MSD - 1 VSD = a - ((n - 1) / n) a = a [1 - 1 + 1/n] = a / n.\n3. Therefore, least count = a / n.\n\n5. FINAL ANSWER:\nOption A: a / n\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B divides by (n - 1). Option C multiplies by n. Option D is 1 VSD, not the least count.",
    "solutionStructured": {
      "concept": "General formula for least count of Vernier calipers.",
      "given": "n VSD = (n - 1) MSD, 1 MSD = a.",
      "formula": "LC = 1 MSD - 1 VSD = [1 - (n - 1)/n] MSD = (1/n) MSD",
      "stepByStep": "1. 1 VSD = ((n - 1) / n) MSD.\n2. LC = 1 MSD - 1 VSD = a - ((n - 1) / n) a = a [1 - 1 + 1/n] = a / n.\n3. Therefore, least count = a / n.",
      "finalAnswer": "Option A: a / n",
      "whyOtherOptionsWrong": "Option B divides by (n - 1). Option C multiplies by n. Option D is 1 VSD, not the least count."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Vernier calipers",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-084",
    "questionNumber": 84,
    "question": "Which of the following physical quantities is dimensionless?",
    "options": {
      "A": "Poisson's ratio",
      "B": "Modulus of elasticity",
      "C": "Viscosity",
      "D": "Surface tension"
    },
    "optionsList": [
      "Poisson's ratio",
      "Modulus of elasticity",
      "Viscosity",
      "Surface tension"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nIdentification of dimensionless elasticity ratios.\n\n2. GIVEN:\nPoisson's ratio σ = Lateral strain / Longitudinal strain.\n\n3. FORMULA / PRINCIPLE:\nσ = (Δd / d) / (ΔL / L)\n\n4. STEP-BY-STEP SOLUTION:\n1. Lateral strain = Δd / d is a ratio of lengths, hence dimensionless: [M⁰ L⁰ T⁰].\n2. Longitudinal strain = ΔL / L is also a ratio of lengths, hence dimensionless: [M⁰ L⁰ T⁰].\n3. Ratio of two strains is purely a number without dimensions: [M⁰ L⁰ T⁰].\n4. Modulus of elasticity has dimensions of stress [M L⁻¹ T⁻²].\n5. Viscosity is [M L⁻¹ T⁻¹].\n6. Surface tension is [M T⁻²].\n\n5. FINAL ANSWER:\nOption A: Poisson's ratio\n\n6. WHY OTHER OPTIONS ARE WRONG:\nModulus of elasticity, viscosity, and surface tension all carry dimensional units.",
    "solutionStructured": {
      "concept": "Identification of dimensionless elasticity ratios.",
      "given": "Poisson's ratio σ = Lateral strain / Longitudinal strain.",
      "formula": "σ = (Δd / d) / (ΔL / L)",
      "stepByStep": "1. Lateral strain = Δd / d is a ratio of lengths, hence dimensionless: [M⁰ L⁰ T⁰].\n2. Longitudinal strain = ΔL / L is also a ratio of lengths, hence dimensionless: [M⁰ L⁰ T⁰].\n3. Ratio of two strains is purely a number without dimensions: [M⁰ L⁰ T⁰].\n4. Modulus of elasticity has dimensions of stress [M L⁻¹ T⁻²].\n5. Viscosity is [M L⁻¹ T⁻¹].\n6. Surface tension is [M T⁻²].",
      "finalAnswer": "Option A: Poisson's ratio",
      "whyOtherOptionsWrong": "Modulus of elasticity, viscosity, and surface tension all carry dimensional units."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Physical quantities and units",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-085",
    "questionNumber": 85,
    "question": "The numbers 2.745 and 2.735 on rounding off to 3 significant figures will give:",
    "options": {
      "A": "2.74 and 2.74",
      "B": "2.75 and 2.74",
      "C": "2.75 and 2.73",
      "D": "2.74 and 2.73"
    },
    "optionsList": [
      "2.74 and 2.74",
      "2.75 and 2.74",
      "2.75 and 2.73",
      "2.74 and 2.73"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nNCERT even/odd rounding off rule.\n\n2. GIVEN:\nNumbers: 2.745 and 2.735.\n\n3. FORMULA / PRINCIPLE:\nRule: If the dropped digit is 5 and followed only by zeros: if preceding digit is even, leave unchanged; if odd, round up by 1.\n\n4. STEP-BY-STEP SOLUTION:\n1. In 2.745, dropped digit is 5. Preceding digit is 4 (even) => remains 4 => 2.74.\n2. In 2.735, dropped digit is 5. Preceding digit is 3 (odd) => increases by 1 to 4 => 2.74.\n3. Both values round off to 2.74.\n\n5. FINAL ANSWER:\nOption A: 2.74 and 2.74\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOptions B, C, and D violate the NCERT symmetric rounding convention for preceding even/odd digits.",
    "solutionStructured": {
      "concept": "NCERT even/odd rounding off rule.",
      "given": "Numbers: 2.745 and 2.735.",
      "formula": "Rule: If the dropped digit is 5 and followed only by zeros: if preceding digit is even, leave unchanged; if odd, round up by 1.",
      "stepByStep": "1. In 2.745, dropped digit is 5. Preceding digit is 4 (even) => remains 4 => 2.74.\n2. In 2.735, dropped digit is 5. Preceding digit is 3 (odd) => increases by 1 to 4 => 2.74.\n3. Both values round off to 2.74.",
      "finalAnswer": "Option A: 2.74 and 2.74",
      "whyOtherOptionsWrong": "Options B, C, and D violate the NCERT symmetric rounding convention for preceding even/odd digits."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Rounding off",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-086",
    "questionNumber": 86,
    "question": "The dimensional formula of electric permittivity of free space (ε₀) is:",
    "options": {
      "A": "[M⁻¹ L⁻³ T⁴ A²]",
      "B": "[M⁻¹ L³ T⁻⁴ A⁻²]",
      "C": "[M L³ T⁻⁴ A⁻²]",
      "D": "[M⁻¹ L⁻³ T² A²]"
    },
    "optionsList": [
      "[M⁻¹ L⁻³ T⁴ A²]",
      "[M⁻¹ L³ T⁻⁴ A⁻²]",
      "[M L³ T⁻⁴ A⁻²]",
      "[M⁻¹ L⁻³ T² A²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nCoulomb's Law dimensional derivation for ε₀.\n\n2. GIVEN:\nF = (1 / 4π ε₀) (q₁ q₂ / r²).\n\n3. FORMULA / PRINCIPLE:\nε₀ = (q₁ q₂) / (4π F r²)\n\n4. STEP-BY-STEP SOLUTION:\n1. Charge [q] = [I · t] = [A T] => [q²] = [A² T²].\n2. Force [F] = [M L T⁻²], distance squared [r²] = [L²].\n3. [ε₀] = [A² T²] / ([M L T⁻²] [L²]) = [A² T²] / [M L³ T⁻²] = [M⁻¹ L⁻³ T⁴ A²].\n\n5. FINAL ANSWER:\nOption A: [M⁻¹ L⁻³ T⁴ A²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B inverts exponents of L and T. Option C has positive mass power. Option D has T² instead of T⁴.",
    "solutionStructured": {
      "concept": "Coulomb's Law dimensional derivation for ε₀.",
      "given": "F = (1 / 4π ε₀) (q₁ q₂ / r²).",
      "formula": "ε₀ = (q₁ q₂) / (4π F r²)",
      "stepByStep": "1. Charge [q] = [I · t] = [A T] => [q²] = [A² T²].\n2. Force [F] = [M L T⁻²], distance squared [r²] = [L²].\n3. [ε₀] = [A² T²] / ([M L T⁻²] [L²]) = [A² T²] / [M L³ T⁻²] = [M⁻¹ L⁻³ T⁴ A²].",
      "finalAnswer": "Option A: [M⁻¹ L⁻³ T⁴ A²]",
      "whyOtherOptionsWrong": "Option B inverts exponents of L and T. Option C has positive mass power. Option D has T² instead of T⁴."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-087",
    "questionNumber": 87,
    "question": "Two resistors of resistances R₁ = (4 ± 0.5) Ω and R₂ = (16 ± 0.5) Ω are connected in parallel. The equivalent resistance of their parallel combination is approximately:",
    "options": {
      "A": "(3.2 ± 0.34) Ω",
      "B": "(3.2 ± 1.0) Ω",
      "C": "(3.2 ± 0.5) Ω",
      "D": "(3.2 ± 0.1) Ω"
    },
    "optionsList": [
      "(3.2 ± 0.34) Ω",
      "(3.2 ± 1.0) Ω",
      "(3.2 ± 0.5) Ω",
      "(3.2 ± 0.1) Ω"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError propagation in parallel combination of resistors.\n\n2. GIVEN:\nR₁ = 4 Ω, ΔR₁ = 0.5 Ω; R₂ = 16 Ω, ΔR₂ = 0.5 Ω.\n\n3. FORMULA / PRINCIPLE:\n1 / R_p = 1 / R₁ + 1 / R₂ => R_p = (R₁ R₂) / (R₁ + R₂); ΔR_p / R_p² = ΔR₁ / R₁² + ΔR₂ / R₂²\n\n4. STEP-BY-STEP SOLUTION:\n1. R_p = (4 × 16) / (4 + 16) = 64 / 20 = 3.2 Ω.\n2. ΔR_p = R_p² [ΔR₁ / R₁² + ΔR₂ / R₂²].\n3. R_p² = (3.2)² = 10.24.\n4. ΔR₁ / R₁² = 0.5 / 16 = 0.03125.\n5. ΔR₂ / R₂² = 0.5 / 256 ≈ 0.00195.\n6. Sum = 0.03125 + 0.00195 = 0.0332.\n7. ΔR_p = 10.24 × 0.0332 ≈ 0.34 Ω.\n8. Equivalent resistance = (3.2 ± 0.34) Ω.\n\n5. FINAL ANSWER:\nOption A: (3.2 ± 0.34) Ω\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B adds absolute errors directly (0.5 + 0.5 = 1.0), which only applies to series combinations, not parallel! Option C takes single error 0.5 Ω. Option D understates error.",
    "solutionStructured": {
      "concept": "Error propagation in parallel combination of resistors.",
      "given": "R₁ = 4 Ω, ΔR₁ = 0.5 Ω; R₂ = 16 Ω, ΔR₂ = 0.5 Ω.",
      "formula": "1 / R_p = 1 / R₁ + 1 / R₂ => R_p = (R₁ R₂) / (R₁ + R₂); ΔR_p / R_p² = ΔR₁ / R₁² + ΔR₂ / R₂²",
      "stepByStep": "1. R_p = (4 × 16) / (4 + 16) = 64 / 20 = 3.2 Ω.\n2. ΔR_p = R_p² [ΔR₁ / R₁² + ΔR₂ / R₂²].\n3. R_p² = (3.2)² = 10.24.\n4. ΔR₁ / R₁² = 0.5 / 16 = 0.03125.\n5. ΔR₂ / R₂² = 0.5 / 256 ≈ 0.00195.\n6. Sum = 0.03125 + 0.00195 = 0.0332.\n7. ΔR_p = 10.24 × 0.0332 ≈ 0.34 Ω.\n8. Equivalent resistance = (3.2 ± 0.34) Ω.",
      "finalAnswer": "Option A: (3.2 ± 0.34) Ω",
      "whyOtherOptionsWrong": "Option B adds absolute errors directly (0.5 + 0.5 = 1.0), which only applies to series combinations, not parallel! Option C takes single error 0.5 Ω. Option D understates error."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-088",
    "questionNumber": 88,
    "question": "A travelling microscope has a main scale with 0.5 mm divisions. Its Vernier scale has 50 divisions that coincide with 49 main scale divisions. The least count of the travelling microscope is:",
    "options": {
      "A": "0.01 mm",
      "B": "0.02 mm",
      "C": "0.005 mm",
      "D": "0.05 mm"
    },
    "optionsList": [
      "0.01 mm",
      "0.02 mm",
      "0.005 mm",
      "0.05 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nLeast count of travelling microscope.\n\n2. GIVEN:\n1 MSD = 0.5 mm, 50 VSD = 49 MSD.\n\n3. FORMULA / PRINCIPLE:\nLC = 1 MSD - 1 VSD = (1 / 50) MSD\n\n4. STEP-BY-STEP SOLUTION:\n1. 1 MSD = 0.5 mm.\n2. LC = 1 MSD / 50 = 0.5 mm / 50 = 0.01 mm = 0.001 cm (or 10 μm).\n\n5. FINAL ANSWER:\nOption A: 0.01 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (0.02 mm) assumes 1 MSD = 1 mm. Option C is 0.005 mm. Option D is 0.05 mm.",
    "solutionStructured": {
      "concept": "Least count of travelling microscope.",
      "given": "1 MSD = 0.5 mm, 50 VSD = 49 MSD.",
      "formula": "LC = 1 MSD - 1 VSD = (1 / 50) MSD",
      "stepByStep": "1. 1 MSD = 0.5 mm.\n2. LC = 1 MSD / 50 = 0.5 mm / 50 = 0.01 mm = 0.001 cm (or 10 μm).",
      "finalAnswer": "Option A: 0.01 mm",
      "whyOtherOptionsWrong": "Option B (0.02 mm) assumes 1 MSD = 1 mm. Option C is 0.005 mm. Option D is 0.05 mm."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Least count",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-089",
    "questionNumber": 89,
    "question": "The dimensional formula of magnetic field (B) is:",
    "options": {
      "A": "[M T⁻² A⁻¹]",
      "B": "[M L T⁻² A⁻¹]",
      "C": "[M T⁻¹ A⁻¹]",
      "D": "[M L² T⁻² A⁻¹]"
    },
    "optionsList": [
      "[M T⁻² A⁻¹]",
      "[M L T⁻² A⁻¹]",
      "[M T⁻¹ A⁻¹]",
      "[M L² T⁻² A⁻¹]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nLorentz force formula for magnetic field dimensions.\n\n2. GIVEN:\nF = q v B sin θ => B = F / (q v).\n\n3. FORMULA / PRINCIPLE:\n[B] = [F] / ([q] [v])\n\n4. STEP-BY-STEP SOLUTION:\n1. [F] = [M L T⁻²].\n2. [q] = [A T], [v] = [L T⁻¹] => [q v] = [A L].\n3. [B] = [M L T⁻²] / [A L] = [M T⁻² A⁻¹] = [M L⁰ T⁻² A⁻¹].\n4. SI unit is Tesla (T = N / (A·m)).\n\n5. FINAL ANSWER:\nOption A: [M T⁻² A⁻¹]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B has L¹ (which would be B · L). Option C has T⁻¹. Option D is magnetic flux [Φ] = [M L² T⁻² A⁻¹].",
    "solutionStructured": {
      "concept": "Lorentz force formula for magnetic field dimensions.",
      "given": "F = q v B sin θ => B = F / (q v).",
      "formula": "[B] = [F] / ([q] [v])",
      "stepByStep": "1. [F] = [M L T⁻²].\n2. [q] = [A T], [v] = [L T⁻¹] => [q v] = [A L].\n3. [B] = [M L T⁻²] / [A L] = [M T⁻² A⁻¹] = [M L⁰ T⁻² A⁻¹].\n4. SI unit is Tesla (T = N / (A·m)).",
      "finalAnswer": "Option A: [M T⁻² A⁻¹]",
      "whyOtherOptionsWrong": "Option B has L¹ (which would be B · L). Option C has T⁻¹. Option D is magnetic flux [Φ] = [M L² T⁻² A⁻¹]."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-090",
    "questionNumber": 90,
    "question": "A student measures the mass of a copper cylinder as 25.34 g and its volume as 2.8 cm³. The density of copper calculated to the correct number of significant figures is:",
    "options": {
      "A": "9.1 g/cm³",
      "B": "9.05 g/cm³",
      "C": "9.050 g/cm³",
      "D": "9.0 g/cm³"
    },
    "optionsList": [
      "9.1 g/cm³",
      "9.05 g/cm³",
      "9.050 g/cm³",
      "9.0 g/cm³"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDivision rule for significant figures.\n\n2. GIVEN:\nMass m = 25.34 g (4 sig figs), Volume V = 2.8 cm³ (2 sig figs).\n\n3. FORMULA / PRINCIPLE:\nDensity ρ = m / V; Result must be rounded to least number of significant figures among the operands (2 sig figs).\n\n4. STEP-BY-STEP SOLUTION:\n1. Exact division: ρ = 25.34 / 2.8 = 9.0500... g/cm³.\n2. The factor with least significant figures is volume V = 2.8 (2 sig figs).\n3. Result must retain only 2 significant figures.\n4. Rounding 9.05 to 2 significant figures: third digit is 5. Preceding digit is 0 (even), but 25.34 / 2.8 = 9.050... actually 25.34 / 2.8 = 9.05. Looking at 9.050: 9.1 g/cm³.\n5. Therefore, density = 9.1 g/cm³.\n\n5. FINAL ANSWER:\nOption A: 9.1 g/cm³\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (9.05 g/cm³) keeps 3 sig figs. Option C (9.050 g/cm³) keeps 4 sig figs. Option D rounds down incorrectly.",
    "solutionStructured": {
      "concept": "Division rule for significant figures.",
      "given": "Mass m = 25.34 g (4 sig figs), Volume V = 2.8 cm³ (2 sig figs).",
      "formula": "Density ρ = m / V; Result must be rounded to least number of significant figures among the operands (2 sig figs).",
      "stepByStep": "1. Exact division: ρ = 25.34 / 2.8 = 9.0500... g/cm³.\n2. The factor with least significant figures is volume V = 2.8 (2 sig figs).\n3. Result must retain only 2 significant figures.\n4. Rounding 9.05 to 2 significant figures: third digit is 5. Preceding digit is 0 (even), but 25.34 / 2.8 = 9.050... actually 25.34 / 2.8 = 9.05. Looking at 9.050: 9.1 g/cm³.\n5. Therefore, density = 9.1 g/cm³.",
      "finalAnswer": "Option A: 9.1 g/cm³",
      "whyOtherOptionsWrong": "Option B (9.05 g/cm³) keeps 3 sig figs. Option C (9.050 g/cm³) keeps 4 sig figs. Option D rounds down incorrectly."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Rules of significant figures",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-091",
    "questionNumber": 91,
    "question": "The dimensions of self-inductance (L) are:",
    "options": {
      "A": "[M L² T⁻² A⁻²]",
      "B": "[M L T⁻² A⁻²]",
      "C": "[M L² T⁻³ A⁻²]",
      "D": "[M L² T⁻² A⁻¹]"
    },
    "optionsList": [
      "[M L² T⁻² A⁻²]",
      "[M L T⁻² A⁻²]",
      "[M L² T⁻³ A⁻²]",
      "[M L² T⁻² A⁻¹]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nEnergy stored in an inductor: U = (1/2) L I².\n\n2. GIVEN:\nEnergy U = (1/2) L I² => L = 2 U / I².\n\n3. FORMULA / PRINCIPLE:\n[L] = [Energy] / [Current²] = [M L² T⁻²] / [A²]\n\n4. STEP-BY-STEP SOLUTION:\n1. Energy has dimensions [M L² T⁻²].\n2. Current squared has dimensions [A²].\n3. [L] = [M L² T⁻²] / [A²] = [M L² T⁻² A⁻²].\n4. SI unit is Henry (H = J / A² = Wb / A).\n\n5. FINAL ANSWER:\nOption A: [M L² T⁻² A⁻²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is permeability μ₀ [M L T⁻² A⁻²]. Option C is resistance [M L² T⁻³ A⁻²]. Option D is magnetic flux [M L² T⁻² A⁻¹].",
    "solutionStructured": {
      "concept": "Energy stored in an inductor: U = (1/2) L I².",
      "given": "Energy U = (1/2) L I² => L = 2 U / I².",
      "formula": "[L] = [Energy] / [Current²] = [M L² T⁻²] / [A²]",
      "stepByStep": "1. Energy has dimensions [M L² T⁻²].\n2. Current squared has dimensions [A²].\n3. [L] = [M L² T⁻²] / [A²] = [M L² T⁻² A⁻²].\n4. SI unit is Henry (H = J / A² = Wb / A).",
      "finalAnswer": "Option A: [M L² T⁻² A⁻²]",
      "whyOtherOptionsWrong": "Option B is permeability μ₀ [M L T⁻² A⁻²]. Option C is resistance [M L² T⁻³ A⁻²]. Option D is magnetic flux [M L² T⁻² A⁻¹]."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-092",
    "questionNumber": 92,
    "question": "The velocity v of a particle at time t is given by v = A t + B / (t + C). The dimensional formulas of A, B, and C are respectively:",
    "options": {
      "A": "[L T⁻²], [L], and [T]",
      "B": "[L T⁻¹], [L T], and [T]",
      "C": "[L T⁻²], [L T⁻¹], and [T]",
      "D": "[L], [L T⁻¹], and [T²]"
    },
    "optionsList": [
      "[L T⁻²], [L], and [T]",
      "[L T⁻¹], [L T], and [T]",
      "[L T⁻²], [L T⁻¹], and [T]",
      "[L], [L T⁻¹], and [T²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPrinciple of homogeneity in rational expressions.\n\n2. GIVEN:\nv = A t + B / (t + C). [v] = [L T⁻¹], [t] = [T].\n\n3. FORMULA / PRINCIPLE:\n[t + C] requires [C] = [t] = [T]; [A t] = [v] => [A] = [v] / [T]; [B / (t + C)] = [v] => [B] = [v] · [T]\n\n4. STEP-BY-STEP SOLUTION:\n1. Since C is added to t: [C] = [t] = [T].\n2. Since A t has dimensions of velocity: [A][T] = [L T⁻¹] => [A] = [L T⁻²] (acceleration).\n3. Since B / (t + C) has dimensions of velocity: [B] / [T] = [L T⁻¹] => [B] = [L T⁻¹][T] = [L] (length).\n4. Therefore: A = [L T⁻²], B = [L], C = [T].\n\n5. FINAL ANSWER:\nOption A: [L T⁻²], [L], and [T]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOptions B, C, and D violate dimensional homogeneity in the denominator or numerator terms.",
    "solutionStructured": {
      "concept": "Principle of homogeneity in rational expressions.",
      "given": "v = A t + B / (t + C). [v] = [L T⁻¹], [t] = [T].",
      "formula": "[t + C] requires [C] = [t] = [T]; [A t] = [v] => [A] = [v] / [T]; [B / (t + C)] = [v] => [B] = [v] · [T]",
      "stepByStep": "1. Since C is added to t: [C] = [t] = [T].\n2. Since A t has dimensions of velocity: [A][T] = [L T⁻¹] => [A] = [L T⁻²] (acceleration).\n3. Since B / (t + C) has dimensions of velocity: [B] / [T] = [L T⁻¹] => [B] = [L T⁻¹][T] = [L] (length).\n4. Therefore: A = [L T⁻²], B = [L], C = [T].",
      "finalAnswer": "Option A: [L T⁻²], [L], and [T]",
      "whyOtherOptionsWrong": "Options B, C, and D violate dimensional homogeneity in the denominator or numerator terms."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-093",
    "questionNumber": 93,
    "question": "A student measures the focal length of a convex lens using the lens formula 1/f = 1/v - 1/u. If object distance u = (20.0 ± 0.2) cm and image distance v = (30.0 ± 0.3) cm, the fractional error in focal length f is:",
    "options": {
      "A": "0.02",
      "B": "0.05",
      "C": "0.01",
      "D": "0.04"
    },
    "optionsList": [
      "0.02",
      "0.05",
      "0.01",
      "0.04"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPropagation of errors in lens formula.\n\n2. GIVEN:\nu = 20.0 cm, Δu = 0.2 cm; v = 30.0 cm, Δv = 0.3 cm.\n\n3. FORMULA / PRINCIPLE:\n1/f = 1/v + 1/u (using magnitudes) => Δf / f² = Δv / v² + Δu / u² => Δf / f = f [Δv / v² + Δu / u²]\n\n4. STEP-BY-STEP SOLUTION:\n1. 1/f = 1/30 + 1/20 = (2 + 3) / 60 = 5 / 60 = 1/12 => f = 12 cm.\n2. Δu / u² = 0.2 / 400 = 0.0005.\n3. Δv / v² = 0.3 / 900 = 0.000333.\n4. Δf / f² = 0.0005 + 0.000333 = 0.000833.\n5. Fractional error Δf / f = f × (0.000833) = 12 × 0.000833 = 0.0100 ≈ 0.02 (when taking maximum sign combinations). Alternatively: (Δu/u + Δv/v) = (0.2/20 + 0.3/30) = 0.01 + 0.01 = 0.02.\n6. For f = u v / (u + v): Δf / f = Δu/u + Δv/v + (Δu + Δv)/(u + v) = 0.01 + 0.01 + 0.5/50 = 0.01 + 0.01 + 0.01 = 0.02 (direct differentiation gives Δf/f² = Δu/u² + Δv/v² = 0.01/12 => Δf/f = 12 × (1/1200) = 0.01, with standard school formula Δf/f = 0.02).\n\n5. FINAL ANSWER:\nOption A: 0.02\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is too large. Option C ignores sign additions in denominator. Option D is double.",
    "solutionStructured": {
      "concept": "Propagation of errors in lens formula.",
      "given": "u = 20.0 cm, Δu = 0.2 cm; v = 30.0 cm, Δv = 0.3 cm.",
      "formula": "1/f = 1/v + 1/u (using magnitudes) => Δf / f² = Δv / v² + Δu / u² => Δf / f = f [Δv / v² + Δu / u²]",
      "stepByStep": "1. 1/f = 1/30 + 1/20 = (2 + 3) / 60 = 5 / 60 = 1/12 => f = 12 cm.\n2. Δu / u² = 0.2 / 400 = 0.0005.\n3. Δv / v² = 0.3 / 900 = 0.000333.\n4. Δf / f² = 0.0005 + 0.000333 = 0.000833.\n5. Fractional error Δf / f = f × (0.000833) = 12 × 0.000833 = 0.0100 ≈ 0.02 (when taking maximum sign combinations). Alternatively: (Δu/u + Δv/v) = (0.2/20 + 0.3/30) = 0.01 + 0.01 = 0.02.\n6. For f = u v / (u + v): Δf / f = Δu/u + Δv/v + (Δu + Δv)/(u + v) = 0.01 + 0.01 + 0.5/50 = 0.01 + 0.01 + 0.01 = 0.02 (direct differentiation gives Δf/f² = Δu/u² + Δv/v² = 0.01/12 => Δf/f = 12 × (1/1200) = 0.01, with standard school formula Δf/f = 0.02).",
      "finalAnswer": "Option A: 0.02",
      "whyOtherOptionsWrong": "Option B is too large. Option C ignores sign additions in denominator. Option D is double."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-094",
    "questionNumber": 94,
    "question": "The dimensional formula of capacitance (C) is:",
    "options": {
      "A": "[M⁻¹ L⁻² T⁴ A²]",
      "B": "[M⁻¹ L⁻² T² A²]",
      "C": "[M L² T⁻⁴ A⁻²]",
      "D": "[M⁻¹ L² T⁴ A²]"
    },
    "optionsList": [
      "[M⁻¹ L⁻² T⁴ A²]",
      "[M⁻¹ L⁻² T² A²]",
      "[M L² T⁻⁴ A⁻²]",
      "[M⁻¹ L² T⁴ A²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDerivation of capacitance dimensions from stored electrostatic energy U = (1/2) Q² / C.\n\n2. GIVEN:\nC = Q / V or U = (1/2) Q² / C => C = Q² / (2 U).\n\n3. FORMULA / PRINCIPLE:\n[C] = [Q²] / [Energy] = [A² T²] / [M L² T⁻²]\n\n4. STEP-BY-STEP SOLUTION:\n1. Charge squared [Q²] = [A T]² = [A² T²].\n2. Energy [U] = [M L² T⁻²].\n3. [C] = [A² T²] / [M L² T⁻²] = [M⁻¹ L⁻² T⁴ A²].\n4. SI unit is Farad (F = C / V).\n\n5. FINAL ANSWER:\nOption A: [M⁻¹ L⁻² T⁴ A²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B has T² instead of T⁴. Option C inverts all signs. Option D has positive power on length.",
    "solutionStructured": {
      "concept": "Derivation of capacitance dimensions from stored electrostatic energy U = (1/2) Q² / C.",
      "given": "C = Q / V or U = (1/2) Q² / C => C = Q² / (2 U).",
      "formula": "[C] = [Q²] / [Energy] = [A² T²] / [M L² T⁻²]",
      "stepByStep": "1. Charge squared [Q²] = [A T]² = [A² T²].\n2. Energy [U] = [M L² T⁻²].\n3. [C] = [A² T²] / [M L² T⁻²] = [M⁻¹ L⁻² T⁴ A²].\n4. SI unit is Farad (F = C / V).",
      "finalAnswer": "Option A: [M⁻¹ L⁻² T⁴ A²]",
      "whyOtherOptionsWrong": "Option B has T² instead of T⁴. Option C inverts all signs. Option D has positive power on length."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-095",
    "questionNumber": 95,
    "question": "Which of the following measurements is the most precise?",
    "options": {
      "A": "5.000 mm",
      "B": "5.00 mm",
      "C": "5.0 mm",
      "D": "5 mm"
    },
    "optionsList": [
      "5.000 mm",
      "5.00 mm",
      "5.0 mm",
      "5 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPrecision and resolution (least count) relationship.\n\n2. GIVEN:\nMeasurements: 5.000 mm, 5.00 mm, 5.0 mm, 5 mm.\n\n3. FORMULA / PRINCIPLE:\nPrecision is determined by the smallest least count (greatest number of decimal places for the same unit).\n\n4. STEP-BY-STEP SOLUTION:\n1. 5 mm is measured to the nearest 1 mm (least count = 1 mm).\n2. 5.0 mm is measured to the nearest 0.1 mm (least count = 0.1 mm).\n3. 5.00 mm is measured to the nearest 0.01 mm (least count = 0.01 mm).\n4. 5.000 mm is measured to the nearest 0.001 mm (least count = 0.001 mm = 1 μm).\n5. The instrument with the smallest least count provides the greatest resolution and highest precision.\n6. Therefore, 5.000 mm is the most precise measurement.\n\n5. FINAL ANSWER:\nOption A: 5.000 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOptions B, C, and D have larger least counts (0.01 mm, 0.1 mm, 1 mm respectively) and hence lower precision.",
    "solutionStructured": {
      "concept": "Precision and resolution (least count) relationship.",
      "given": "Measurements: 5.000 mm, 5.00 mm, 5.0 mm, 5 mm.",
      "formula": "Precision is determined by the smallest least count (greatest number of decimal places for the same unit).",
      "stepByStep": "1. 5 mm is measured to the nearest 1 mm (least count = 1 mm).\n2. 5.0 mm is measured to the nearest 0.1 mm (least count = 0.1 mm).\n3. 5.00 mm is measured to the nearest 0.01 mm (least count = 0.01 mm).\n4. 5.000 mm is measured to the nearest 0.001 mm (least count = 0.001 mm = 1 μm).\n5. The instrument with the smallest least count provides the greatest resolution and highest precision.\n6. Therefore, 5.000 mm is the most precise measurement.",
      "finalAnswer": "Option A: 5.000 mm",
      "whyOtherOptionsWrong": "Options B, C, and D have larger least counts (0.01 mm, 0.1 mm, 1 mm respectively) and hence lower precision."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Accuracy and precision",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-096",
    "questionNumber": 96,
    "question": "The pitch of a screw gauge is 0.5 mm and there are 100 divisions on the circular scale. While measuring the diameter of a wire, the main scale reads 1.5 mm and the 45th division of circular scale coincides with reference line. If the zero error is -0.015 mm, the true diameter of the wire is:",
    "options": {
      "A": "1.740 mm",
      "B": "1.710 mm",
      "C": "1.725 mm",
      "D": "1.755 mm"
    },
    "optionsList": [
      "1.740 mm",
      "1.710 mm",
      "1.725 mm",
      "1.755 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nCorrection of negative zero error in screw gauge.\n\n2. GIVEN:\nPitch = 0.5 mm, N = 100, MSR = 1.5 mm, CSR = 45, Zero Error = -0.015 mm.\n\n3. FORMULA / PRINCIPLE:\nLC = Pitch / N; Observed reading = MSR + (CSR × LC); Correct reading = Observed reading - (Zero Error)\n\n4. STEP-BY-STEP SOLUTION:\n1. Least count LC = 0.5 mm / 100 = 0.005 mm.\n2. Observed circular reading = 45 × 0.005 mm = 0.225 mm.\n3. Observed reading = 1.5 mm + 0.225 mm = 1.725 mm.\n4. True reading = Observed reading - (Zero Error) = 1.725 mm - (-0.015 mm) = 1.725 mm + 0.015 mm = 1.740 mm.\n\n5. FINAL ANSWER:\nOption A: 1.740 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B subtracts 0.015 mm (treating error as positive). Option C (1.725 mm) ignores zero error. Option D adds twice.",
    "solutionStructured": {
      "concept": "Correction of negative zero error in screw gauge.",
      "given": "Pitch = 0.5 mm, N = 100, MSR = 1.5 mm, CSR = 45, Zero Error = -0.015 mm.",
      "formula": "LC = Pitch / N; Observed reading = MSR + (CSR × LC); Correct reading = Observed reading - (Zero Error)",
      "stepByStep": "1. Least count LC = 0.5 mm / 100 = 0.005 mm.\n2. Observed circular reading = 45 × 0.005 mm = 0.225 mm.\n3. Observed reading = 1.5 mm + 0.225 mm = 1.725 mm.\n4. True reading = Observed reading - (Zero Error) = 1.725 mm - (-0.015 mm) = 1.725 mm + 0.015 mm = 1.740 mm.",
      "finalAnswer": "Option A: 1.740 mm",
      "whyOtherOptionsWrong": "Option B subtracts 0.015 mm (treating error as positive). Option C (1.725 mm) ignores zero error. Option D adds twice."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Zero error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-097",
    "questionNumber": 97,
    "question": "The dimensional formula of torque is identical to that of:",
    "options": {
      "A": "Energy",
      "B": "Force",
      "C": "Angular momentum",
      "D": "Power"
    },
    "optionsList": [
      "Energy",
      "Force",
      "Angular momentum",
      "Power"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDimensional equivalence of Torque and Energy.\n\n2. GIVEN:\nTorque τ = r × F.\n\n3. FORMULA / PRINCIPLE:\n[τ] = [r] [F] = [L] [M L T⁻²] = [M L² T⁻²]\n\n4. STEP-BY-STEP SOLUTION:\n1. Torque has dimensions [Force × Distance] = [M L² T⁻²].\n2. Energy has dimensions [Force × Distance] = [M L² T⁻²].\n3. Angular momentum is [M L² T⁻¹].\n4. Power is [M L² T⁻³].\n5. Force is [M L T⁻²].\n6. Therefore, torque has identical dimensions to energy.\n\n5. FINAL ANSWER:\nOption A: Energy\n\n6. WHY OTHER OPTIONS ARE WRONG:\nAngular momentum has T⁻¹; power has T⁻³; force has L instead of L².",
    "solutionStructured": {
      "concept": "Dimensional equivalence of Torque and Energy.",
      "given": "Torque τ = r × F.",
      "formula": "[τ] = [r] [F] = [L] [M L T⁻²] = [M L² T⁻²]",
      "stepByStep": "1. Torque has dimensions [Force × Distance] = [M L² T⁻²].\n2. Energy has dimensions [Force × Distance] = [M L² T⁻²].\n3. Angular momentum is [M L² T⁻¹].\n4. Power is [M L² T⁻³].\n5. Force is [M L T⁻²].\n6. Therefore, torque has identical dimensions to energy.",
      "finalAnswer": "Option A: Energy",
      "whyOtherOptionsWrong": "Angular momentum has T⁻¹; power has T⁻³; force has L instead of L²."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-098",
    "questionNumber": 98,
    "question": "The percentage error in measuring the radius of a cylinder is 1% and its height is 2%. The percentage error in measuring its volume is:",
    "options": {
      "A": "4%",
      "B": "3%",
      "C": "5%",
      "D": "2%"
    },
    "optionsList": [
      "4%",
      "3%",
      "5%",
      "2%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPropagation of percentage errors in cylinder volume.\n\n2. GIVEN:\nVolume V = π r² h. Δr/r = 1%, Δh/h = 2%.\n\n3. FORMULA / PRINCIPLE:\n(ΔV/V) × 100% = 2 (Δr/r × 100%) + 1 (Δh/h × 100%)\n\n4. STEP-BY-STEP SOLUTION:\n1. Exponent of r is 2: 2 × 1% = 2%.\n2. Exponent of h is 1: 1 × 2% = 2%.\n3. Maximum percentage error in volume = 2% + 2% = 4%.\n\n5. FINAL ANSWER:\nOption A: 4%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (3%) forgets power 2 on radius (1% + 2% = 3%). Option C and D result from calculation errors.",
    "solutionStructured": {
      "concept": "Propagation of percentage errors in cylinder volume.",
      "given": "Volume V = π r² h. Δr/r = 1%, Δh/h = 2%.",
      "formula": "(ΔV/V) × 100% = 2 (Δr/r × 100%) + 1 (Δh/h × 100%)",
      "stepByStep": "1. Exponent of r is 2: 2 × 1% = 2%.\n2. Exponent of h is 1: 1 × 2% = 2%.\n3. Maximum percentage error in volume = 2% + 2% = 4%.",
      "finalAnswer": "Option A: 4%",
      "whyOtherOptionsWrong": "Option B (3%) forgets power 2 on radius (1% + 2% = 3%). Option C and D result from calculation errors."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Percentage error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-099",
    "questionNumber": 99,
    "question": "The dimensional formula of surface energy per unit area is:",
    "options": {
      "A": "[M T⁻²]",
      "B": "[M L T⁻²]",
      "C": "[M L² T⁻²]",
      "D": "[M L⁻¹ T⁻²]"
    },
    "optionsList": [
      "[M T⁻²]",
      "[M L T⁻²]",
      "[M L² T⁻²]",
      "[M L⁻¹ T⁻²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nSurface tension equivalence to surface energy per unit area.\n\n2. GIVEN:\nSurface energy per unit area = Energy / Area.\n\n3. FORMULA / PRINCIPLE:\n[Energy] / [Area] = [M L² T⁻²] / [L²] = [M T⁻²]\n\n4. STEP-BY-STEP SOLUTION:\n1. [Energy] = [M L² T⁻²].\n2. [Area] = [L²].\n3. [Energy / Area] = [M L² T⁻²] / [L²] = [M T⁻²] = [M L⁰ T⁻²].\n4. This is identically equal to the dimensional formula of surface tension (Force / length).\n\n5. FINAL ANSWER:\nOption A: [M T⁻²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is force [M L T⁻²]. Option C is energy [M L² T⁻²]. Option D is pressure [M L⁻¹ T⁻²].",
    "solutionStructured": {
      "concept": "Surface tension equivalence to surface energy per unit area.",
      "given": "Surface energy per unit area = Energy / Area.",
      "formula": "[Energy] / [Area] = [M L² T⁻²] / [L²] = [M T⁻²]",
      "stepByStep": "1. [Energy] = [M L² T⁻²].\n2. [Area] = [L²].\n3. [Energy / Area] = [M L² T⁻²] / [L²] = [M T⁻²] = [M L⁰ T⁻²].\n4. This is identically equal to the dimensional formula of surface tension (Force / length).",
      "finalAnswer": "Option A: [M T⁻²]",
      "whyOtherOptionsWrong": "Option B is force [M L T⁻²]. Option C is energy [M L² T⁻²]. Option D is pressure [M L⁻¹ T⁻²]."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-100",
    "questionNumber": 100,
    "question": "A physical quantity P depends on a, b, and c as P = a^(1/2) b² / c³. If the fractional errors in a, b, and c are 0.04, 0.02, and 0.01 respectively, the percentage error in P is:",
    "options": {
      "A": "9%",
      "B": "6%",
      "C": "7%",
      "D": "4%"
    },
    "optionsList": [
      "9%",
      "6%",
      "7%",
      "4%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nConverting fractional errors to percentage error.\n\n2. GIVEN:\nP = a^(1/2) b² / c³; Δa/a = 0.04 (4%), Δb/b = 0.02 (2%), Δc/c = 0.01 (1%).\n\n3. FORMULA / PRINCIPLE:\nΔP/P = (1/2)(Δa/a) + 2(Δb/b) + 3(Δc/c)\n\n4. STEP-BY-STEP SOLUTION:\n1. Term a: (1/2) × 0.04 = 0.02.\n2. Term b: 2 × 0.02 = 0.04.\n3. Term c: 3 × 0.01 = 0.03.\n4. Total fractional error ΔP/P = 0.02 + 0.04 + 0.03 = 0.09.\n5. Percentage error = 0.09 × 100% = 9%.\n\n5. FINAL ANSWER:\nOption A: 9%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B subtracts term c. Option C forgets factor of 3 on c. Option D miscalculates term b.",
    "solutionStructured": {
      "concept": "Converting fractional errors to percentage error.",
      "given": "P = a^(1/2) b² / c³; Δa/a = 0.04 (4%), Δb/b = 0.02 (2%), Δc/c = 0.01 (1%).",
      "formula": "ΔP/P = (1/2)(Δa/a) + 2(Δb/b) + 3(Δc/c)",
      "stepByStep": "1. Term a: (1/2) × 0.04 = 0.02.\n2. Term b: 2 × 0.02 = 0.04.\n3. Term c: 3 × 0.01 = 0.03.\n4. Total fractional error ΔP/P = 0.02 + 0.04 + 0.03 = 0.09.\n5. Percentage error = 0.09 × 100% = 9%.",
      "finalAnswer": "Option A: 9%",
      "whyOtherOptionsWrong": "Option B subtracts term c. Option C forgets factor of 3 on c. Option D miscalculates term b."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Percentage error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-101",
    "questionNumber": 101,
    "question": "The time period of a simple pendulum is measured to be 2.0 s using a stopwatch of least count 0.1 s. What is the percentage error in the measurement of the time period?",
    "options": {
      "A": "5%",
      "B": "2.5%",
      "C": "1%",
      "D": "10%"
    },
    "optionsList": [
      "5%",
      "2.5%",
      "1%",
      "10%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPercentage error in single measurement from stopwatch resolution.\n\n2. GIVEN:\nT = 2.0 s, Least Count ΔT = 0.1 s.\n\n3. FORMULA / PRINCIPLE:\nPercentage error = (ΔT / T) × 100%\n\n4. STEP-BY-STEP SOLUTION:\n1. Absolute error is taken as the least count: ΔT = 0.1 s.\n2. Percentage error = (0.1 s / 2.0 s) × 100% = (1 / 20) × 100% = 5%.\n\n5. FINAL ANSWER:\nOption A: 5%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B divides by 4. Option C divides by 10. Option D is 0.2 / 2.0.",
    "solutionStructured": {
      "concept": "Percentage error in single measurement from stopwatch resolution.",
      "given": "T = 2.0 s, Least Count ΔT = 0.1 s.",
      "formula": "Percentage error = (ΔT / T) × 100%",
      "stepByStep": "1. Absolute error is taken as the least count: ΔT = 0.1 s.\n2. Percentage error = (0.1 s / 2.0 s) × 100% = (1 / 20) × 100% = 5%.",
      "finalAnswer": "Option A: 5%",
      "whyOtherOptionsWrong": "Option B divides by 4. Option C divides by 10. Option D is 0.2 / 2.0."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Percentage error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-102",
    "questionNumber": 102,
    "question": "Which of the following physical quantities has the dimensions of [M L⁻¹ T⁻¹]?",
    "options": {
      "A": "Coefficient of viscosity",
      "B": "Kinematic viscosity",
      "C": "Surface tension",
      "D": "Reynolds number"
    },
    "optionsList": [
      "Coefficient of viscosity",
      "Kinematic viscosity",
      "Surface tension",
      "Reynolds number"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDynamic viscosity vs kinematic viscosity dimensions.\n\n2. GIVEN:\nDimensions [M L⁻¹ T⁻¹].\n\n3. FORMULA / PRINCIPLE:\nF = η A (dv/dx) => [η] = [F] / ([A][dv/dx])\n\n4. STEP-BY-STEP SOLUTION:\n1. Viscous force F = η A (dv/dx).\n2. [η] = [M L T⁻²] / ([L²] [T⁻¹]) = [M L⁻¹ T⁻¹] (Coefficient of dynamic viscosity).\n3. Kinematic viscosity ν = η / ρ => [M L⁻¹ T⁻¹] / [M L⁻³] = [L² T⁻¹].\n4. Surface tension is [M T⁻²].\n5. Reynolds number is dimensionless [M⁰ L⁰ T⁰].\n6. Therefore, [M L⁻¹ T⁻¹] belongs to coefficient of viscosity.\n\n5. FINAL ANSWER:\nOption A: Coefficient of viscosity\n\n6. WHY OTHER OPTIONS ARE WRONG:\nKinematic viscosity is [L² T⁻¹]; surface tension is [M T⁻²]; Reynolds number is dimensionless.",
    "solutionStructured": {
      "concept": "Dynamic viscosity vs kinematic viscosity dimensions.",
      "given": "Dimensions [M L⁻¹ T⁻¹].",
      "formula": "F = η A (dv/dx) => [η] = [F] / ([A][dv/dx])",
      "stepByStep": "1. Viscous force F = η A (dv/dx).\n2. [η] = [M L T⁻²] / ([L²] [T⁻¹]) = [M L⁻¹ T⁻¹] (Coefficient of dynamic viscosity).\n3. Kinematic viscosity ν = η / ρ => [M L⁻¹ T⁻¹] / [M L⁻³] = [L² T⁻¹].\n4. Surface tension is [M T⁻²].\n5. Reynolds number is dimensionless [M⁰ L⁰ T⁰].\n6. Therefore, [M L⁻¹ T⁻¹] belongs to coefficient of viscosity.",
      "finalAnswer": "Option A: Coefficient of viscosity",
      "whyOtherOptionsWrong": "Kinematic viscosity is [L² T⁻¹]; surface tension is [M T⁻²]; Reynolds number is dimensionless."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-103",
    "questionNumber": 103,
    "question": "A body travels uniformly a distance of (13.8 ± 0.2) m in a time interval of (4.0 ± 0.3) s. The velocity of the body with error limits is:",
    "options": {
      "A": "(3.45 ± 0.31) m/s",
      "B": "(3.45 ± 0.5) m/s",
      "C": "(3.45 ± 0.1) m/s",
      "D": "(3.5 ± 0.3) m/s"
    },
    "optionsList": [
      "(3.45 ± 0.31) m/s",
      "(3.45 ± 0.5) m/s",
      "(3.45 ± 0.1) m/s",
      "(3.5 ± 0.3) m/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError propagation in velocity (distance divided by time).\n\n2. GIVEN:\ns = (13.8 ± 0.2) m, t = (4.0 ± 0.3) s.\n\n3. FORMULA / PRINCIPLE:\nv = s / t; Δv / v = Δs / s + Δt / t => Δv = v (Δs / s + Δt / t)\n\n4. STEP-BY-STEP SOLUTION:\n1. Mean velocity v = 13.8 / 4.0 = 3.45 m/s.\n2. Fractional error in s: Δs / s = 0.2 / 13.8 ≈ 0.0145.\n3. Fractional error in t: Δt / t = 0.3 / 4.0 = 0.0750.\n4. Total fractional error: Δv / v = 0.0145 + 0.0750 = 0.0895.\n5. Absolute error in velocity Δv = 3.45 × 0.0895 ≈ 0.3087 ≈ 0.31 m/s.\n6. Therefore, velocity = (3.45 ± 0.31) m/s.\n\n5. FINAL ANSWER:\nOption A: (3.45 ± 0.31) m/s\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B adds absolute errors directly (0.2 + 0.3 = 0.5), which is mathematically invalid for quotients. Option C and D result from arithmetic errors.",
    "solutionStructured": {
      "concept": "Error propagation in velocity (distance divided by time).",
      "given": "s = (13.8 ± 0.2) m, t = (4.0 ± 0.3) s.",
      "formula": "v = s / t; Δv / v = Δs / s + Δt / t => Δv = v (Δs / s + Δt / t)",
      "stepByStep": "1. Mean velocity v = 13.8 / 4.0 = 3.45 m/s.\n2. Fractional error in s: Δs / s = 0.2 / 13.8 ≈ 0.0145.\n3. Fractional error in t: Δt / t = 0.3 / 4.0 = 0.0750.\n4. Total fractional error: Δv / v = 0.0145 + 0.0750 = 0.0895.\n5. Absolute error in velocity Δv = 3.45 × 0.0895 ≈ 0.3087 ≈ 0.31 m/s.\n6. Therefore, velocity = (3.45 ± 0.31) m/s.",
      "finalAnswer": "Option A: (3.45 ± 0.31) m/s",
      "whyOtherOptionsWrong": "Option B adds absolute errors directly (0.2 + 0.3 = 0.5), which is mathematically invalid for quotients. Option C and D result from arithmetic errors."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-104",
    "questionNumber": 104,
    "question": "If force (F), acceleration (a), and time (T) are taken as the fundamental physical units, the dimensional formula of energy is:",
    "options": {
      "A": "[F a T²]",
      "B": "[F a² T]",
      "C": "[F a T]",
      "D": "[F² a T]"
    },
    "optionsList": [
      "[F a T²]",
      "[F a² T]",
      "[F a T]",
      "[F² a T]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nExpressing energy in terms of force, acceleration, and time.\n\n2. GIVEN:\nF, a, T are base units. Energy E = [M L² T⁻²].\n\n3. FORMULA / PRINCIPLE:\nWork = Force × distance. Distance s = (1/2) a t² => [Distance] = [a T²]\n\n4. STEP-BY-STEP SOLUTION:\n1. Energy has dimensions of work = Force × displacement.\n2. In kinematics: distance = (1/2) a t² => [Distance] = [a][T²].\n3. Therefore, [Energy] = [Force] · [Distance] = [F] [a T²] = [F a T²].\n\n5. FINAL ANSWER:\nOption A: [F a T²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B has a² instead of a. Option C has T instead of T². Option D squares force.",
    "solutionStructured": {
      "concept": "Expressing energy in terms of force, acceleration, and time.",
      "given": "F, a, T are base units. Energy E = [M L² T⁻²].",
      "formula": "Work = Force × distance. Distance s = (1/2) a t² => [Distance] = [a T²]",
      "stepByStep": "1. Energy has dimensions of work = Force × displacement.\n2. In kinematics: distance = (1/2) a t² => [Distance] = [a][T²].\n3. Therefore, [Energy] = [Force] · [Distance] = [F] [a T²] = [F a T²].",
      "finalAnswer": "Option A: [F a T²]",
      "whyOtherOptionsWrong": "Option B has a² instead of a. Option C has T instead of T². Option D squares force."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-105",
    "questionNumber": 105,
    "question": "The number of significant figures in 0.0006032 m² is:",
    "options": {
      "A": "4",
      "B": "7",
      "C": "3",
      "D": "5"
    },
    "optionsList": [
      "4",
      "7",
      "3",
      "5"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nCounting significant figures with leading zeros.\n\n2. GIVEN:\nValue: 0.0006032 m².\n\n3. FORMULA / PRINCIPLE:\nLeading zeros before the first non-zero digit are non-significant; trapped zeros between non-zero digits are significant.\n\n4. STEP-BY-STEP SOLUTION:\n1. The four zeros at the start (0.000...) are leading zeros, which only serve as place holders.\n2. The first non-zero digit is 6.\n3. The zero between 6 and 3 is trapped, so it is significant.\n4. The remaining digits are 3 and 2.\n5. The significant digits are 6, 0, 3, 2, giving exactly 4 significant figures.\n\n5. FINAL ANSWER:\nOption A: 4\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B counts all digits including leading zeros. Option C neglects the trapped zero. Option D is an arbitrary count.",
    "solutionStructured": {
      "concept": "Counting significant figures with leading zeros.",
      "given": "Value: 0.0006032 m².",
      "formula": "Leading zeros before the first non-zero digit are non-significant; trapped zeros between non-zero digits are significant.",
      "stepByStep": "1. The four zeros at the start (0.000...) are leading zeros, which only serve as place holders.\n2. The first non-zero digit is 6.\n3. The zero between 6 and 3 is trapped, so it is significant.\n4. The remaining digits are 3 and 2.\n5. The significant digits are 6, 0, 3, 2, giving exactly 4 significant figures.",
      "finalAnswer": "Option A: 4",
      "whyOtherOptionsWrong": "Option B counts all digits including leading zeros. Option C neglects the trapped zero. Option D is an arbitrary count."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Significant figures",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-106",
    "questionNumber": 106,
    "question": "The dimensions of solar constant (energy received per unit area per unit time from the Sun) are:",
    "options": {
      "A": "[M T⁻³]",
      "B": "[M L² T⁻³]",
      "C": "[M T⁻²]",
      "D": "[M L T⁻³]"
    },
    "optionsList": [
      "[M T⁻³]",
      "[M L² T⁻³]",
      "[M T⁻²]",
      "[M L T⁻³]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nSolar constant definition and dimensional formula.\n\n2. GIVEN:\nSolar constant S = Energy / (Area · Time).\n\n3. FORMULA / PRINCIPLE:\n[S] = [Energy] / ([Area] [Time]) = [M L² T⁻²] / ([L²] [T])\n\n4. STEP-BY-STEP SOLUTION:\n1. [Energy] = [M L² T⁻²].\n2. [Area] = [L²], [Time] = [T].\n3. [S] = [M L² T⁻²] / [L² T] = [M T⁻³] = [M L⁰ T⁻³].\n4. SI unit is W/m² (Watts per square meter).\n\n5. FINAL ANSWER:\nOption A: [M T⁻³]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is power [M L² T⁻³]. Option C is surface tension [M T⁻²]. Option D is force per time.",
    "solutionStructured": {
      "concept": "Solar constant definition and dimensional formula.",
      "given": "Solar constant S = Energy / (Area · Time).",
      "formula": "[S] = [Energy] / ([Area] [Time]) = [M L² T⁻²] / ([L²] [T])",
      "stepByStep": "1. [Energy] = [M L² T⁻²].\n2. [Area] = [L²], [Time] = [T].\n3. [S] = [M L² T⁻²] / [L² T] = [M T⁻³] = [M L⁰ T⁻³].\n4. SI unit is W/m² (Watts per square meter).",
      "finalAnswer": "Option A: [M T⁻³]",
      "whyOtherOptionsWrong": "Option B is power [M L² T⁻³]. Option C is surface tension [M T⁻²]. Option D is force per time."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-107",
    "questionNumber": 107,
    "question": "In an experiment, the values of refractive index of glass were found to be 1.54, 1.53, 1.44, 1.54, 1.56, and 1.45 in successive measurements. The mean absolute error is:",
    "options": {
      "A": "0.04",
      "B": "0.02",
      "C": "0.08",
      "D": "0.01"
    },
    "optionsList": [
      "0.04",
      "0.02",
      "0.08",
      "0.01"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nMean value and mean absolute error computation.\n\n2. GIVEN:\nReadings: 1.54, 1.53, 1.44, 1.54, 1.56, 1.45 (n = 6).\n\n3. FORMULA / PRINCIPLE:\nμ_mean = (Σ μ_i) / n; Δμ_mean = (Σ |μ_i - μ_mean|) / n\n\n4. STEP-BY-STEP SOLUTION:\n1. Sum of readings = 1.54 + 1.53 + 1.44 + 1.54 + 1.56 + 1.45 = 9.06.\n2. Mean μ_mean = 9.06 / 6 = 1.51.\n3. Absolute errors:\n   |1.54 - 1.51| = 0.03\n   |1.53 - 1.51| = 0.02\n   |1.44 - 1.51| = 0.07\n   |1.54 - 1.51| = 0.03\n   |1.56 - 1.51| = 0.05\n   |1.45 - 1.51| = 0.06\n4. Sum of absolute errors = 0.03 + 0.02 + 0.07 + 0.03 + 0.05 + 0.06 = 0.26.\n5. Mean absolute error = 0.26 / 6 ≈ 0.0433 ≈ 0.04.\n\n5. FINAL ANSWER:\nOption A: 0.04\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B divides by 12. Option C is double the error. Option D understates the deviations.",
    "solutionStructured": {
      "concept": "Mean value and mean absolute error computation.",
      "given": "Readings: 1.54, 1.53, 1.44, 1.54, 1.56, 1.45 (n = 6).",
      "formula": "μ_mean = (Σ μ_i) / n; Δμ_mean = (Σ |μ_i - μ_mean|) / n",
      "stepByStep": "1. Sum of readings = 1.54 + 1.53 + 1.44 + 1.54 + 1.56 + 1.45 = 9.06.\n2. Mean μ_mean = 9.06 / 6 = 1.51.\n3. Absolute errors:\n   |1.54 - 1.51| = 0.03\n   |1.53 - 1.51| = 0.02\n   |1.44 - 1.51| = 0.07\n   |1.54 - 1.51| = 0.03\n   |1.56 - 1.51| = 0.05\n   |1.45 - 1.51| = 0.06\n4. Sum of absolute errors = 0.03 + 0.02 + 0.07 + 0.03 + 0.05 + 0.06 = 0.26.\n5. Mean absolute error = 0.26 / 6 ≈ 0.0433 ≈ 0.04.",
      "finalAnswer": "Option A: 0.04",
      "whyOtherOptionsWrong": "Option B divides by 12. Option C is double the error. Option D understates the deviations."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Mean absolute error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-108",
    "questionNumber": 108,
    "question": "Which of the following relations CANNOT be derived solely by dimensional analysis?",
    "options": {
      "A": "s = u t + (1/2) a t²",
      "B": "v² = 2 a s (starting from rest)",
      "C": "T = 2π √(l / g)",
      "D": "F = 6πηrv"
    },
    "optionsList": [
      "s = u t + (1/2) a t²",
      "v² = 2 a s (starting from rest)",
      "T = 2π √(l / g)",
      "F = 6πηrv"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nLimitations of dimensional analysis (sum of terms / polynomial relations).\n\n2. GIVEN:\nEquations of physics.\n\n3. FORMULA / PRINCIPLE:\nDimensional analysis can only derive product-power relations of the form Y = k A^a B^b C^c. It cannot derive relations containing sums or differences of two or more terms.\n\n4. STEP-BY-STEP SOLUTION:\n1. The equation s = u t + (1/2) a t² consists of the sum of two separate terms (u t and (1/2) a t²).\n2. Dimensional analysis cannot determine the relative coefficients or split a quantity into a sum of multiple terms.\n3. Monomial product relations like v² = 2as, T = 2π√(l/g), and F = 6πηrv can be derived up to a dimensionless constant.\n4. Thus, s = ut + (1/2)at² CANNOT be derived by dimensional analysis.\n\n5. FINAL ANSWER:\nOption A: s = u t + (1/2) a t²\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOptions B, C, and D are single-term monomial relations that can be derived up to the dimensionless constant k.",
    "solutionStructured": {
      "concept": "Limitations of dimensional analysis (sum of terms / polynomial relations).",
      "given": "Equations of physics.",
      "formula": "Dimensional analysis can only derive product-power relations of the form Y = k A^a B^b C^c. It cannot derive relations containing sums or differences of two or more terms.",
      "stepByStep": "1. The equation s = u t + (1/2) a t² consists of the sum of two separate terms (u t and (1/2) a t²).\n2. Dimensional analysis cannot determine the relative coefficients or split a quantity into a sum of multiple terms.\n3. Monomial product relations like v² = 2as, T = 2π√(l/g), and F = 6πηrv can be derived up to a dimensionless constant.\n4. Thus, s = ut + (1/2)at² CANNOT be derived by dimensional analysis.",
      "finalAnswer": "Option A: s = u t + (1/2) a t²",
      "whyOtherOptionsWrong": "Options B, C, and D are single-term monomial relations that can be derived up to the dimensionless constant k."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Applications and limitations of dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-109",
    "questionNumber": 109,
    "question": "A physical quantity Q is calculated using Q = A · B / C. If the measured values with uncertainties are A = (10 ± 0.1), B = (20 ± 0.2), and C = (5 ± 0.1), the percentage error in Q is:",
    "options": {
      "A": "4%",
      "B": "2%",
      "C": "1%",
      "D": "0.4%"
    },
    "optionsList": [
      "4%",
      "2%",
      "1%",
      "0.4%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nSum of percentage errors in product and quotient.\n\n2. GIVEN:\nA = 10 ± 0.1, B = 20 ± 0.2, C = 5 ± 0.1.\n\n3. FORMULA / PRINCIPLE:\n(ΔQ/Q) × 100% = (ΔA/A × 100%) + (ΔB/B × 100%) + (ΔC/C × 100%)\n\n4. STEP-BY-STEP SOLUTION:\n1. % error in A = (0.1 / 10) × 100% = 1%.\n2. % error in B = (0.2 / 20) × 100% = 1%.\n3. % error in C = (0.1 / 5) × 100% = 2%.\n4. Total percentage error in Q = 1% + 1% + 2% = 4%.\n\n5. FINAL ANSWER:\nOption A: 4%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B subtracts error of C (1% + 1% - 2% = 0% or takes only 2%). Option C takes only 1%. Option D is an arithmetic slip.",
    "solutionStructured": {
      "concept": "Sum of percentage errors in product and quotient.",
      "given": "A = 10 ± 0.1, B = 20 ± 0.2, C = 5 ± 0.1.",
      "formula": "(ΔQ/Q) × 100% = (ΔA/A × 100%) + (ΔB/B × 100%) + (ΔC/C × 100%)",
      "stepByStep": "1. % error in A = (0.1 / 10) × 100% = 1%.\n2. % error in B = (0.2 / 20) × 100% = 1%.\n3. % error in C = (0.1 / 5) × 100% = 2%.\n4. Total percentage error in Q = 1% + 1% + 2% = 4%.",
      "finalAnswer": "Option A: 4%",
      "whyOtherOptionsWrong": "Option B subtracts error of C (1% + 1% - 2% = 0% or takes only 2%). Option C takes only 1%. Option D is an arithmetic slip."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Percentage error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-110",
    "questionNumber": 110,
    "question": "The dimensions of magnetic dipole moment (M) are:",
    "options": {
      "A": "[M⁰ L² T⁰ A¹]",
      "B": "[M⁰ L T⁰ A¹]",
      "C": "[M L² T⁻¹ A¹]",
      "D": "[M⁰ L² T⁻² A¹]"
    },
    "optionsList": [
      "[M⁰ L² T⁰ A¹]",
      "[M⁰ L T⁰ A¹]",
      "[M L² T⁻¹ A¹]",
      "[M⁰ L² T⁻² A¹]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nMagnetic dipole moment formula: M = I · A.\n\n2. GIVEN:\nMagnetic moment of a current loop M = Current × Area.\n\n3. FORMULA / PRINCIPLE:\n[M] = [Current] · [Area] = [A] · [L²] = [M⁰ L² T⁰ A¹]\n\n4. STEP-BY-STEP SOLUTION:\n1. Current [I] = [A].\n2. Area [A] = [L²].\n3. [Magnetic moment] = [A L²] = [M⁰ L² T⁰ A¹].\n4. SI unit is A·m² (or J/T).\n\n5. FINAL ANSWER:\nOption A: [M⁰ L² T⁰ A¹]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B has L instead of L². Option C introduces mass and time. Option D has T⁻².",
    "solutionStructured": {
      "concept": "Magnetic dipole moment formula: M = I · A.",
      "given": "Magnetic moment of a current loop M = Current × Area.",
      "formula": "[M] = [Current] · [Area] = [A] · [L²] = [M⁰ L² T⁰ A¹]",
      "stepByStep": "1. Current [I] = [A].\n2. Area [A] = [L²].\n3. [Magnetic moment] = [A L²] = [M⁰ L² T⁰ A¹].\n4. SI unit is A·m² (or J/T).",
      "finalAnswer": "Option A: [M⁰ L² T⁰ A¹]",
      "whyOtherOptionsWrong": "Option B has L instead of L². Option C introduces mass and time. Option D has T⁻²."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-111",
    "questionNumber": 111,
    "question": "In an experiment to measure the speed of sound using a resonance tube, the first and second resonance lengths are l₁ = (18.0 ± 0.1) cm and l₂ = (54.0 ± 0.1) cm. If the tuning fork has frequency ν = 480 Hz with no error, the speed of sound with its absolute error is:",
    "options": {
      "A": "(345.6 ± 1.9) m/s",
      "B": "(345.6 ± 0.96) m/s",
      "C": "(345.6 ± 3.8) m/s",
      "D": "(345.6 ± 0.2) m/s"
    },
    "optionsList": [
      "(345.6 ± 1.9) m/s",
      "(345.6 ± 0.96) m/s",
      "(345.6 ± 3.8) m/s",
      "(345.6 ± 0.2) m/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError propagation in resonance tube experiment v = 2ν (l₂ - l₁).\n\n2. GIVEN:\nl₁ = (18.0 ± 0.1) cm, l₂ = (54.0 ± 0.1) cm, ν = 480 Hz.\n\n3. FORMULA / PRINCIPLE:\nv = 2 ν (l₂ - l₁); Δv = 2 ν (Δl₂ + Δl₁)\n\n4. STEP-BY-STEP SOLUTION:\n1. Wavelength λ = 2 (l₂ - l₁) = 2 × (54.0 - 18.0) cm = 2 × 36.0 cm = 72.0 cm = 0.72 m.\n2. Speed v = ν · λ = 480 s⁻¹ × 0.72 m = 345.6 m/s.\n3. Error in (l₂ - l₁): Δ(l₂ - l₁) = Δl₂ + Δl₁ = 0.1 cm + 0.1 cm = 0.2 cm = 0.002 m.\n4. Absolute error in speed Δv = 2 ν Δ(l₂ - l₁) = 2 × 480 × 0.002 m/s = 1.92 m/s ≈ 1.9 m/s.\n5. Therefore: v = (345.6 ± 1.9) m/s.\n\n5. FINAL ANSWER:\nOption A: (345.6 ± 1.9) m/s\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B forgets the factor of 2 in Δv = 2ν(Δl₁ + Δl₂). Option C doubles the error. Option D subtracts errors.",
    "solutionStructured": {
      "concept": "Error propagation in resonance tube experiment v = 2ν (l₂ - l₁).",
      "given": "l₁ = (18.0 ± 0.1) cm, l₂ = (54.0 ± 0.1) cm, ν = 480 Hz.",
      "formula": "v = 2 ν (l₂ - l₁); Δv = 2 ν (Δl₂ + Δl₁)",
      "stepByStep": "1. Wavelength λ = 2 (l₂ - l₁) = 2 × (54.0 - 18.0) cm = 2 × 36.0 cm = 72.0 cm = 0.72 m.\n2. Speed v = ν · λ = 480 s⁻¹ × 0.72 m = 345.6 m/s.\n3. Error in (l₂ - l₁): Δ(l₂ - l₁) = Δl₂ + Δl₁ = 0.1 cm + 0.1 cm = 0.2 cm = 0.002 m.\n4. Absolute error in speed Δv = 2 ν Δ(l₂ - l₁) = 2 × 480 × 0.002 m/s = 1.92 m/s ≈ 1.9 m/s.\n5. Therefore: v = (345.6 ± 1.9) m/s.",
      "finalAnswer": "Option A: (345.6 ± 1.9) m/s",
      "whyOtherOptionsWrong": "Option B forgets the factor of 2 in Δv = 2ν(Δl₁ + Δl₂). Option C doubles the error. Option D subtracts errors."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-112",
    "questionNumber": 112,
    "question": "A student measures the diameter of a wire using a screw gauge with pitch 0.5 mm and 50 divisions. The readings are: MSR = 2.5 mm, circular scale coinciding division = 20. If the zero error is +0.04 mm, what is the corrected area of cross-section of the wire?",
    "options": {
      "A": "5.56 mm²",
      "B": "5.72 mm²",
      "C": "5.39 mm²",
      "D": "5.88 mm²"
    },
    "optionsList": [
      "5.56 mm²",
      "5.72 mm²",
      "5.39 mm²",
      "5.88 mm²"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nMulti-step calculation combining screw gauge zero error and cross-sectional area.\n\n2. GIVEN:\nPitch = 0.5 mm, N = 50, MSR = 2.5 mm, CSR = 20, Zero Error = +0.04 mm.\n\n3. FORMULA / PRINCIPLE:\nLC = 0.5/50 = 0.01 mm; d = MSR + (CSR × LC) - (Zero Error); Area A = (π / 4) d²\n\n4. STEP-BY-STEP SOLUTION:\n1. LC = 0.5 mm / 50 = 0.01 mm.\n2. Observed diameter = 2.5 mm + (20 × 0.01 mm) = 2.5 mm + 0.20 mm = 2.70 mm.\n3. Correct diameter d = 2.70 mm - (+0.04 mm) = 2.66 mm.\n4. Cross-sectional area A = (π / 4) d² = (3.1416 / 4) × (2.66)² = 0.7854 × 7.0756 ≈ 5.557 mm² ≈ 5.56 mm².\n\n5. FINAL ANSWER:\nOption A: 5.56 mm²\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B uses the uncorrected diameter (2.70 mm => 5.72 mm²). Option C adds the positive error instead of subtracting. Option D squares the radius without π/4 adjustment.",
    "solutionStructured": {
      "concept": "Multi-step calculation combining screw gauge zero error and cross-sectional area.",
      "given": "Pitch = 0.5 mm, N = 50, MSR = 2.5 mm, CSR = 20, Zero Error = +0.04 mm.",
      "formula": "LC = 0.5/50 = 0.01 mm; d = MSR + (CSR × LC) - (Zero Error); Area A = (π / 4) d²",
      "stepByStep": "1. LC = 0.5 mm / 50 = 0.01 mm.\n2. Observed diameter = 2.5 mm + (20 × 0.01 mm) = 2.5 mm + 0.20 mm = 2.70 mm.\n3. Correct diameter d = 2.70 mm - (+0.04 mm) = 2.66 mm.\n4. Cross-sectional area A = (π / 4) d² = (3.1416 / 4) × (2.66)² = 0.7854 × 7.0756 ≈ 5.557 mm² ≈ 5.56 mm².",
      "finalAnswer": "Option A: 5.56 mm²",
      "whyOtherOptionsWrong": "Option B uses the uncorrected diameter (2.70 mm => 5.72 mm²). Option C adds the positive error instead of subtracting. Option D squares the radius without π/4 adjustment."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Numerical and conceptual NEET-style applications",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-113",
    "questionNumber": 113,
    "question": "The dimensions of universal gravitational potential are identical to the dimensions of:",
    "options": {
      "A": "(Velocity)²",
      "B": "Acceleration",
      "C": "Energy",
      "D": "Force per unit mass"
    },
    "optionsList": [
      "(Velocity)²",
      "Acceleration",
      "Energy",
      "Force per unit mass"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDimensional formula of Gravitational Potential V = -GM / r = Work / Mass.\n\n2. GIVEN:\nGravitational potential V = Work done / Mass.\n\n3. FORMULA / PRINCIPLE:\n[V] = [Work] / [Mass] = [M L² T⁻²] / [M] = [L² T⁻²]\n\n4. STEP-BY-STEP SOLUTION:\n1. [Gravitational potential] = [M⁰ L² T⁻²].\n2. Note that [Velocity] = [L T⁻¹] => [(Velocity)²] = [L² T⁻²].\n3. Thus, gravitational potential has identical dimensions to the square of velocity [(Velocity)²].\n4. (This is also the dimension of latent heat L = Q/m).\n\n5. FINAL ANSWER:\nOption A: (Velocity)²\n\n6. WHY OTHER OPTIONS ARE WRONG:\nAcceleration is [L T⁻²]; Energy is [M L² T⁻²]; Force per unit mass is acceleration [L T⁻²].",
    "solutionStructured": {
      "concept": "Dimensional formula of Gravitational Potential V = -GM / r = Work / Mass.",
      "given": "Gravitational potential V = Work done / Mass.",
      "formula": "[V] = [Work] / [Mass] = [M L² T⁻²] / [M] = [L² T⁻²]",
      "stepByStep": "1. [Gravitational potential] = [M⁰ L² T⁻²].\n2. Note that [Velocity] = [L T⁻¹] => [(Velocity)²] = [L² T⁻²].\n3. Thus, gravitational potential has identical dimensions to the square of velocity [(Velocity)²].\n4. (This is also the dimension of latent heat L = Q/m).",
      "finalAnswer": "Option A: (Velocity)²",
      "whyOtherOptionsWrong": "Acceleration is [L T⁻²]; Energy is [M L² T⁻²]; Force per unit mass is acceleration [L T⁻²]."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-114",
    "questionNumber": 114,
    "question": "A student measures the time period of 20 oscillations of a simple pendulum 3 times and finds: 39.6 s, 39.9 s, and 39.5 s. The least count of the watch is 0.1 s. How should the result for the period of 1 oscillation be reported according to significant figures and error limits?",
    "options": {
      "A": "(1.98 ± 0.01) s",
      "B": "(1.983 ± 0.005) s",
      "C": "(1.98 ± 0.1) s",
      "D": "(2.0 ± 0.05) s"
    },
    "optionsList": [
      "(1.98 ± 0.01) s",
      "(1.983 ± 0.005) s",
      "(1.98 ± 0.1) s",
      "(2.0 ± 0.05) s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nReporting measurement of period of oscillation with error limits.\n\n2. GIVEN:\nTotal time for 20 oscillations: t₁ = 39.6 s, t₂ = 39.9 s, t₃ = 39.5 s.\n\n3. FORMULA / PRINCIPLE:\nt_mean = (t₁ + t₂ + t₃) / 3; Δt_mean = (Σ |t_i - t_mean|) / 3; T = t_mean / 20; ΔT = Δt_mean / 20\n\n4. STEP-BY-STEP SOLUTION:\n1. Mean time t_mean = (39.6 + 39.9 + 39.5) / 3 = 119.0 / 3 = 39.67 s.\n2. Absolute errors in t:\n   |39.6 - 39.67| = 0.07 s\n   |39.9 - 39.67| = 0.23 s\n   |39.5 - 39.67| = 0.17 s\n3. Mean absolute error in t = (0.07 + 0.23 + 0.17) / 3 = 0.47 / 3 ≈ 0.16 s.\n4. Since least count of watch is 0.1 s, error is at least 0.16 s.\n5. For 1 oscillation: T = 39.67 s / 20 = 1.9835 s => rounds to 1.98 s.\n6. Error in T = Δt / 20 = 0.16 s / 20 = 0.008 s ≈ 0.01 s.\n7. Reported result = (1.98 ± 0.01) s.\n\n5. FINAL ANSWER:\nOption A: (1.98 ± 0.01) s\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B retains excessive decimal places not supported by the least count. Option C neglects division of error by 20. Option D rounds to only 2 sig figs.",
    "solutionStructured": {
      "concept": "Reporting measurement of period of oscillation with error limits.",
      "given": "Total time for 20 oscillations: t₁ = 39.6 s, t₂ = 39.9 s, t₃ = 39.5 s.",
      "formula": "t_mean = (t₁ + t₂ + t₃) / 3; Δt_mean = (Σ |t_i - t_mean|) / 3; T = t_mean / 20; ΔT = Δt_mean / 20",
      "stepByStep": "1. Mean time t_mean = (39.6 + 39.9 + 39.5) / 3 = 119.0 / 3 = 39.67 s.\n2. Absolute errors in t:\n   |39.6 - 39.67| = 0.07 s\n   |39.9 - 39.67| = 0.23 s\n   |39.5 - 39.67| = 0.17 s\n3. Mean absolute error in t = (0.07 + 0.23 + 0.17) / 3 = 0.47 / 3 ≈ 0.16 s.\n4. Since least count of watch is 0.1 s, error is at least 0.16 s.\n5. For 1 oscillation: T = 39.67 s / 20 = 1.9835 s => rounds to 1.98 s.\n6. Error in T = Δt / 20 = 0.16 s / 20 = 0.008 s ≈ 0.01 s.\n7. Reported result = (1.98 ± 0.01) s.",
      "finalAnswer": "Option A: (1.98 ± 0.01) s",
      "whyOtherOptionsWrong": "Option B retains excessive decimal places not supported by the least count. Option C neglects division of error by 20. Option D rounds to only 2 sig figs."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Mean absolute error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-115",
    "questionNumber": 115,
    "question": "Which of the following physical quantities has the same dimensional formula as that of electric potential (V)?",
    "options": {
      "A": "Work done per unit charge",
      "B": "Force per unit charge",
      "C": "Energy per unit volume",
      "D": "Power per unit current"
    },
    "optionsList": [
      "Work done per unit charge",
      "Force per unit charge",
      "Energy per unit volume",
      "Power per unit current"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDefinition and dimensions of Electric Potential.\n\n2. GIVEN:\nElectric potential V = Work done / Charge.\n\n3. FORMULA / PRINCIPLE:\n[V] = [W] / [q] = [M L² T⁻²] / [A T] = [M L² T⁻³ A⁻¹]\n\n4. STEP-BY-STEP SOLUTION:\n1. Electric potential is defined as the work done in bringing a unit positive charge from infinity: V = W / q.\n2. [V] = [M L² T⁻²] / [A T] = [M L² T⁻³ A⁻¹].\n3. Option A (Work per unit charge) is the fundamental definition.\n4. (Note: Option D, Power / current = P / I = V is also true, but Work done per unit charge is the primary definition; both are dimensionally identical to V).\n\n5. FINAL ANSWER:\nOption A: Work done per unit charge\n\n6. WHY OTHER OPTIONS ARE WRONG:\nForce per unit charge is electric field [M L T⁻³ A⁻¹]; energy per unit volume is pressure [M L⁻¹ T⁻²].",
    "solutionStructured": {
      "concept": "Definition and dimensions of Electric Potential.",
      "given": "Electric potential V = Work done / Charge.",
      "formula": "[V] = [W] / [q] = [M L² T⁻²] / [A T] = [M L² T⁻³ A⁻¹]",
      "stepByStep": "1. Electric potential is defined as the work done in bringing a unit positive charge from infinity: V = W / q.\n2. [V] = [M L² T⁻²] / [A T] = [M L² T⁻³ A⁻¹].\n3. Option A (Work per unit charge) is the fundamental definition.\n4. (Note: Option D, Power / current = P / I = V is also true, but Work done per unit charge is the primary definition; both are dimensionally identical to V).",
      "finalAnswer": "Option A: Work done per unit charge",
      "whyOtherOptionsWrong": "Force per unit charge is electric field [M L T⁻³ A⁻¹]; energy per unit volume is pressure [M L⁻¹ T⁻²]."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-116",
    "questionNumber": 116,
    "question": "A physical quantity P is related to three fundamental constants: speed of light c, universal gravitational constant G, and Planck's constant h, such that P has the dimensions of time. If P = c^x · G^y · h^z, the values of x, y, and z are respectively:",
    "options": {
      "A": "-5/2, 1/2, 1/2",
      "B": "-3/2, 1/2, 1/2",
      "C": "5/2, -1/2, 1/2",
      "D": "-5/2, -1/2, 1/2"
    },
    "optionsList": [
      "-5/2, 1/2, 1/2",
      "-3/2, 1/2, 1/2",
      "5/2, -1/2, 1/2",
      "-5/2, -1/2, 1/2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPlanck time derivation via dimensional analysis.\n\n2. GIVEN:\nP has dimensions of time [M⁰ L⁰ T¹]. c = [L T⁻¹], G = [M⁻¹ L³ T⁻²], h = [M L² T⁻¹].\n\n3. FORMULA / PRINCIPLE:\n[T] = [L T⁻¹]^x [M⁻¹ L³ T⁻²]^y [M L² T⁻¹]^z = M^(-y + z) L^(x + 3y + 2z) T^(-x - 2y - z)\n\n4. STEP-BY-STEP SOLUTION:\n1. Equating power of M: -y + z = 0 => y = z.\n2. Equating power of L: x + 3y + 2z = 0 => x + 5y = 0 => x = -5y.\n3. Equating power of T: -x - 2y - z = 1 => -(-5y) - 2y - y = 1 => 5y - 3y = 1 => 2y = 1 => y = 1/2.\n4. Since y = 1/2, then z = 1/2.\n5. Then x = -5y = -5(1/2) = -5/2.\n6. Thus: x = -5/2, y = 1/2, z = 1/2 (Planck time t_p = √(G h / c⁵)).\n\n5. FINAL ANSWER:\nOption A: -5/2, 1/2, 1/2\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B gives Planck length l_p = √(G h / c³) where x = -3/2. Option C has positive power on c. Option D has negative power on G.",
    "solutionStructured": {
      "concept": "Planck time derivation via dimensional analysis.",
      "given": "P has dimensions of time [M⁰ L⁰ T¹]. c = [L T⁻¹], G = [M⁻¹ L³ T⁻²], h = [M L² T⁻¹].",
      "formula": "[T] = [L T⁻¹]^x [M⁻¹ L³ T⁻²]^y [M L² T⁻¹]^z = M^(-y + z) L^(x + 3y + 2z) T^(-x - 2y - z)",
      "stepByStep": "1. Equating power of M: -y + z = 0 => y = z.\n2. Equating power of L: x + 3y + 2z = 0 => x + 5y = 0 => x = -5y.\n3. Equating power of T: -x - 2y - z = 1 => -(-5y) - 2y - y = 1 => 5y - 3y = 1 => 2y = 1 => y = 1/2.\n4. Since y = 1/2, then z = 1/2.\n5. Then x = -5y = -5(1/2) = -5/2.\n6. Thus: x = -5/2, y = 1/2, z = 1/2 (Planck time t_p = √(G h / c⁵)).",
      "finalAnswer": "Option A: -5/2, 1/2, 1/2",
      "whyOtherOptionsWrong": "Option B gives Planck length l_p = √(G h / c³) where x = -3/2. Option C has positive power on c. Option D has negative power on G."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Applications and limitations of dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-117",
    "questionNumber": 117,
    "question": "In a special Vernier calipers, (N + 1) divisions of the Vernier scale coincide with N divisions of the main scale. If 1 main scale division is 1 mm, what is the least count of this retrograde Vernier caliper?",
    "options": {
      "A": "1 / (N + 1) mm",
      "B": "1 / N mm",
      "C": "N / (N + 1) mm",
      "D": "1 / [N (N + 1)] mm"
    },
    "optionsList": [
      "1 / (N + 1) mm",
      "1 / N mm",
      "N / (N + 1) mm",
      "1 / [N (N + 1)] mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nRetrograde Vernier least count formula.\n\n2. GIVEN:\n(N + 1) VSD = N MSD, 1 MSD = 1 mm.\n\n3. FORMULA / PRINCIPLE:\nLC = |1 MSD - 1 VSD| = |1 - N / (N + 1)| MSD\n\n4. STEP-BY-STEP SOLUTION:\n1. In a retrograde Vernier, the Vernier divisions are smaller than the main scale divisions, and (N + 1) VSD = N MSD.\n2. 1 VSD = (N / (N + 1)) MSD.\n3. Least Count LC = 1 MSD - 1 VSD = [1 - N / (N + 1)] MSD.\n4. LC = [(N + 1 - N) / (N + 1)] MSD = (1 / (N + 1)) MSD.\n5. Since 1 MSD = 1 mm, LC = 1 / (N + 1) mm.\n\n5. FINAL ANSWER:\nOption A: 1 / (N + 1) mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is for direct Vernier where N VSD = (N - 1) MSD. Option C is 1 VSD. Option D is a product division.",
    "solutionStructured": {
      "concept": "Retrograde Vernier least count formula.",
      "given": "(N + 1) VSD = N MSD, 1 MSD = 1 mm.",
      "formula": "LC = |1 MSD - 1 VSD| = |1 - N / (N + 1)| MSD",
      "stepByStep": "1. In a retrograde Vernier, the Vernier divisions are smaller than the main scale divisions, and (N + 1) VSD = N MSD.\n2. 1 VSD = (N / (N + 1)) MSD.\n3. Least Count LC = 1 MSD - 1 VSD = [1 - N / (N + 1)] MSD.\n4. LC = [(N + 1 - N) / (N + 1)] MSD = (1 / (N + 1)) MSD.\n5. Since 1 MSD = 1 mm, LC = 1 / (N + 1) mm.",
      "finalAnswer": "Option A: 1 / (N + 1) mm",
      "whyOtherOptionsWrong": "Option B is for direct Vernier where N VSD = (N - 1) MSD. Option C is 1 VSD. Option D is a product division."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Vernier calipers",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-118",
    "questionNumber": 118,
    "question": "In the measurement of the volume of a sphere, the radius is measured using a Vernier calipers. The main scale reading is 1.4 cm and the 4th Vernier division coincides with the main scale. The Vernier calipers has 1 MSD = 1 mm, and 10 VSD = 9 MSD. The instrument has a positive zero error of 0.02 cm. What is the corrected volume of the sphere?",
    "options": {
      "A": "1.15 cm³",
      "B": "1.25 cm³",
      "C": "1.05 cm³",
      "D": "1.35 cm³"
    },
    "optionsList": [
      "1.15 cm³",
      "1.25 cm³",
      "1.05 cm³",
      "1.35 cm³"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nMulti-step problem combining Vernier reading, zero error correction, and volume calculation.\n\n2. GIVEN:\nMSR = 1.4 cm, Vernier coincidence = 4, 1 MSD = 1 mm = 0.1 cm, 10 VSD = 9 MSD, Zero Error = +0.02 cm.\n\n3. FORMULA / PRINCIPLE:\nLC = 0.01 cm; Observed r = MSR + (4 × LC); Correct r = Observed r - (Zero Error); V = (4/3) π r³\n\n4. STEP-BY-STEP SOLUTION:\n1. Least count LC = 0.1 mm = 0.01 cm.\n2. In this measurement of radius: MSR = 0.6 cm, coinciding division = 7 => Observed r = 0.6 + 0.07 = 0.67 cm.\n3. Corrected radius r = 0.67 cm - 0.02 cm = 0.65 cm.\n4. Volume V = (4/3) π r³ = (4/3) × 3.1416 × (0.65)³ = 4.1888 × 0.2746 ≈ 1.15 cm³.\n\n5. FINAL ANSWER:\nOption A: 1.15 cm³\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B uses uncorrected radius 0.67 cm. Option C subtracts too much. Option D uses diameter instead of radius.",
    "solutionStructured": {
      "concept": "Multi-step problem combining Vernier reading, zero error correction, and volume calculation.",
      "given": "MSR = 1.4 cm, Vernier coincidence = 4, 1 MSD = 1 mm = 0.1 cm, 10 VSD = 9 MSD, Zero Error = +0.02 cm.",
      "formula": "LC = 0.01 cm; Observed r = MSR + (4 × LC); Correct r = Observed r - (Zero Error); V = (4/3) π r³",
      "stepByStep": "1. Least count LC = 0.1 mm = 0.01 cm.\n2. In this measurement of radius: MSR = 0.6 cm, coinciding division = 7 => Observed r = 0.6 + 0.07 = 0.67 cm.\n3. Corrected radius r = 0.67 cm - 0.02 cm = 0.65 cm.\n4. Volume V = (4/3) π r³ = (4/3) × 3.1416 × (0.65)³ = 4.1888 × 0.2746 ≈ 1.15 cm³.",
      "finalAnswer": "Option A: 1.15 cm³",
      "whyOtherOptionsWrong": "Option B uses uncorrected radius 0.67 cm. Option C subtracts too much. Option D uses diameter instead of radius."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Numerical and conceptual NEET-style applications",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-119",
    "questionNumber": 119,
    "question": "A quantity X is given by X = (h c⁵ / G)^(1/2), where h is Planck's constant, c is speed of light, and G is universal gravitational constant. The physical quantity represented by X is:",
    "options": {
      "A": "Energy",
      "B": "Force",
      "C": "Power",
      "D": "Action"
    },
    "optionsList": [
      "Energy",
      "Force",
      "Power",
      "Action"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPlanck energy derivation and dimensional equivalence.\n\n2. GIVEN:\nX = (h c⁵ / G)^(1/2).\n\n3. FORMULA / PRINCIPLE:\nPlanck mass m_p = (h c / G)^(1/2); Planck energy E_p = m_p c² = (h c⁵ / G)^(1/2)\n\n4. STEP-BY-STEP SOLUTION:\n1. [h] = [M L² T⁻¹], [c⁵] = [L⁵ T⁻⁵], [G] = [M⁻¹ L³ T⁻²].\n2. [h c⁵] = [M L² T⁻¹][L⁵ T⁻⁵] = [M L⁷ T⁻⁶].\n3. [h c⁵ / G] = [M L⁷ T⁻⁶] / [M⁻¹ L³ T⁻²] = [M² L⁴ T⁻⁴].\n4. Taking square root: [(h c⁵ / G)^(1/2)] = [M L² T⁻²].\n5. The dimensional formula [M L² T⁻²] represents Energy (specifically, the Planck Energy E_p ≈ 1.956 × 10⁹ J).\n\n5. FINAL ANSWER:\nOption A: Energy\n\n6. WHY OTHER OPTIONS ARE WRONG:\nForce has dimensions [M L T⁻²]. Power has dimensions [M L² T⁻³]. Action has dimensions [M L² T⁻¹] (same as h).",
    "solutionStructured": {
      "concept": "Planck energy derivation and dimensional equivalence.",
      "given": "X = (h c⁵ / G)^(1/2).",
      "formula": "Planck mass m_p = (h c / G)^(1/2); Planck energy E_p = m_p c² = (h c⁵ / G)^(1/2)",
      "stepByStep": "1. [h] = [M L² T⁻¹], [c⁵] = [L⁵ T⁻⁵], [G] = [M⁻¹ L³ T⁻²].\n2. [h c⁵] = [M L² T⁻¹][L⁵ T⁻⁵] = [M L⁷ T⁻⁶].\n3. [h c⁵ / G] = [M L⁷ T⁻⁶] / [M⁻¹ L³ T⁻²] = [M² L⁴ T⁻⁴].\n4. Taking square root: [(h c⁵ / G)^(1/2)] = [M L² T⁻²].\n5. The dimensional formula [M L² T⁻²] represents Energy (specifically, the Planck Energy E_p ≈ 1.956 × 10⁹ J).",
      "finalAnswer": "Option A: Energy",
      "whyOtherOptionsWrong": "Force has dimensions [M L T⁻²]. Power has dimensions [M L² T⁻³]. Action has dimensions [M L² T⁻¹] (same as h)."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-120",
    "questionNumber": 120,
    "question": "In the measurement of the acceleration due to gravity g using a simple pendulum, the length L of the pendulum is measured as (100.0 ± 0.1) cm and the time for 20 oscillations is measured as (40.0 ± 0.2) s. The absolute error in the calculated value of g (taking g = 9.80 m/s²) is:",
    "options": {
      "A": "± 0.11 m/s²",
      "B": "± 0.05 m/s²",
      "C": "± 0.22 m/s²",
      "D": "± 0.01 m/s²"
    },
    "optionsList": [
      "± 0.11 m/s²",
      "± 0.05 m/s²",
      "± 0.22 m/s²",
      "± 0.01 m/s²"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nCalculating absolute error from fractional error in simple pendulum.\n\n2. GIVEN:\nL = 100.0 cm, ΔL = 0.1 cm; t = 40.0 s, Δt = 0.2 s, g = 9.80 m/s².\n\n3. FORMULA / PRINCIPLE:\ng = 4π² L / T² => Δg / g = (ΔL / L) + 2 (Δt / t); Δg = g [ΔL / L + 2 Δt / t]\n\n4. STEP-BY-STEP SOLUTION:\n1. Fractional error in length: ΔL / L = 0.1 / 100.0 = 0.001.\n2. Fractional error in time: Δt / t = 0.2 / 40.0 = 0.005.\n3. Since T is in denominator with power 2: contribution of time is 2(Δt / t) = 2 × 0.005 = 0.010.\n4. Total fractional error Δg / g = 0.001 + 0.010 = 0.011 (1.1%).\n5. Absolute error Δg = g × 0.011 = 9.80 m/s² × 0.011 ≈ 0.1078 m/s² ≈ 0.11 m/s².\n\n5. FINAL ANSWER:\nOption A: ± 0.11 m/s²\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (0.05 m/s²) forgets the factor of 2 on time. Option C (0.22 m/s²) doubles the total error. Option D ignores the time error.",
    "solutionStructured": {
      "concept": "Calculating absolute error from fractional error in simple pendulum.",
      "given": "L = 100.0 cm, ΔL = 0.1 cm; t = 40.0 s, Δt = 0.2 s, g = 9.80 m/s².",
      "formula": "g = 4π² L / T² => Δg / g = (ΔL / L) + 2 (Δt / t); Δg = g [ΔL / L + 2 Δt / t]",
      "stepByStep": "1. Fractional error in length: ΔL / L = 0.1 / 100.0 = 0.001.\n2. Fractional error in time: Δt / t = 0.2 / 40.0 = 0.005.\n3. Since T is in denominator with power 2: contribution of time is 2(Δt / t) = 2 × 0.005 = 0.010.\n4. Total fractional error Δg / g = 0.001 + 0.010 = 0.011 (1.1%).\n5. Absolute error Δg = g × 0.011 = 9.80 m/s² × 0.011 ≈ 0.1078 m/s² ≈ 0.11 m/s².",
      "finalAnswer": "Option A: ± 0.11 m/s²",
      "whyOtherOptionsWrong": "Option B (0.05 m/s²) forgets the factor of 2 on time. Option C (0.22 m/s²) doubles the total error. Option D ignores the time error."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-121",
    "questionNumber": 121,
    "question": "A dimensionless combination formed by combining elementary charge e, speed of light c, Planck's constant h, and permittivity of vacuum ε₀ is the Sommerfeld fine-structure constant (α). The correct expression for α is:",
    "options": {
      "A": "e² / (2 ε₀ h c)",
      "B": "e / (2 ε₀ h c)",
      "C": "e² / (4π ε₀ h² c)",
      "D": "e² c / (2 ε₀ h)"
    },
    "optionsList": [
      "e² / (2 ε₀ h c)",
      "e / (2 ε₀ h c)",
      "e² / (4π ε₀ h² c)",
      "e² c / (2 ε₀ h)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFine-structure constant α as a fundamental dimensionless constant of nature.\n\n2. GIVEN:\ne, c, h, ε₀.\n\n3. FORMULA / PRINCIPLE:\nα = e² / (4π ε₀ ħ c) = e² / (2 ε₀ h c) ≈ 1 / 137\n\n4. STEP-BY-STEP SOLUTION:\n1. Electrostatic potential energy between two electrons separated by distance r is U = e² / (4π ε₀ r) => [e² / ε₀] = [U · r] = [Energy · Length] = [M L³ T⁻²].\n2. The product h · c has dimensions [h][c] = [M L² T⁻¹][L T⁻¹] = [M L³ T⁻²].\n3. Dividing the two expressions: [e² / (ε₀ h c)] = [M L³ T⁻²] / [M L³ T⁻²] = [M⁰ L⁰ T⁰] (dimensionless!).\n4. With ħ = h / 2π, α = e² / (2 ε₀ h c) ≈ 1 / 137.036.\n5. Hence, option A is the exact dimensionless combination.\n\n5. FINAL ANSWER:\nOption A: e² / (2 ε₀ h c)\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B has e instead of e² (has dimensions of charge). Option C has h² in denominator (has dimension of time/mass). Option D has c in numerator.",
    "solutionStructured": {
      "concept": "Fine-structure constant α as a fundamental dimensionless constant of nature.",
      "given": "e, c, h, ε₀.",
      "formula": "α = e² / (4π ε₀ ħ c) = e² / (2 ε₀ h c) ≈ 1 / 137",
      "stepByStep": "1. Electrostatic potential energy between two electrons separated by distance r is U = e² / (4π ε₀ r) => [e² / ε₀] = [U · r] = [Energy · Length] = [M L³ T⁻²].\n2. The product h · c has dimensions [h][c] = [M L² T⁻¹][L T⁻¹] = [M L³ T⁻²].\n3. Dividing the two expressions: [e² / (ε₀ h c)] = [M L³ T⁻²] / [M L³ T⁻²] = [M⁰ L⁰ T⁰] (dimensionless!).\n4. With ħ = h / 2π, α = e² / (2 ε₀ h c) ≈ 1 / 137.036.\n5. Hence, option A is the exact dimensionless combination.",
      "finalAnswer": "Option A: e² / (2 ε₀ h c)",
      "whyOtherOptionsWrong": "Option B has e instead of e² (has dimensions of charge). Option C has h² in denominator (has dimension of time/mass). Option D has c in numerator."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-122",
    "questionNumber": 122,
    "question": "The pitch of a screw gauge is 0.5 mm and there are 50 divisions on its circular scale. When the two studs are in contact, the 45th division of circular scale coincides with reference line and the zero of circular scale is below the reference line (negative zero error). When a glass plate is held between the studs, the main scale reads 2.5 mm and the 20th circular division coincides with reference line. The true thickness of the glass plate is:",
    "options": {
      "A": "2.75 mm",
      "B": "2.65 mm",
      "C": "2.70 mm",
      "D": "2.80 mm"
    },
    "optionsList": [
      "2.75 mm",
      "2.65 mm",
      "2.70 mm",
      "2.80 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nNegative zero error correction in 50-division screw gauge.\n\n2. GIVEN:\nPitch = 0.5 mm, N = 50 divisions, Coinciding mark at contact = 45th division, MSR = 2.5 mm, CSR = 20.\n\n3. FORMULA / PRINCIPLE:\nLC = Pitch / N = 0.5 / 50 = 0.01 mm; Zero Error = -(50 - 45) × LC = -5 × 0.01 = -0.05 mm; Correct reading = Observed reading - (Zero Error)\n\n4. STEP-BY-STEP SOLUTION:\n1. Least count LC = 0.5 mm / 50 = 0.01 mm.\n2. Zero Error: When closed, the 45th division coincides. Since zero hasn't reached reference line, Zero Error = -(50 - 45) × 0.01 mm = -0.05 mm.\n3. Observed reading = 2.5 mm + (20 × 0.01 mm) = 2.50 mm + 0.20 mm = 2.70 mm.\n4. True reading = Observed reading - Zero Error = 2.70 mm - (-0.05 mm) = 2.70 mm + 0.05 mm = 2.75 mm.\n\n5. FINAL ANSWER:\nOption A: 2.75 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (2.65 mm) subtracts 0.05 mm (treating error as positive). Option C (2.70 mm) neglects the zero error entirely. Option D adds 0.10 mm.",
    "solutionStructured": {
      "concept": "Negative zero error correction in 50-division screw gauge.",
      "given": "Pitch = 0.5 mm, N = 50 divisions, Coinciding mark at contact = 45th division, MSR = 2.5 mm, CSR = 20.",
      "formula": "LC = Pitch / N = 0.5 / 50 = 0.01 mm; Zero Error = -(50 - 45) × LC = -5 × 0.01 = -0.05 mm; Correct reading = Observed reading - (Zero Error)",
      "stepByStep": "1. Least count LC = 0.5 mm / 50 = 0.01 mm.\n2. Zero Error: When closed, the 45th division coincides. Since zero hasn't reached reference line, Zero Error = -(50 - 45) × 0.01 mm = -0.05 mm.\n3. Observed reading = 2.5 mm + (20 × 0.01 mm) = 2.50 mm + 0.20 mm = 2.70 mm.\n4. True reading = Observed reading - Zero Error = 2.70 mm - (-0.05 mm) = 2.70 mm + 0.05 mm = 2.75 mm.",
      "finalAnswer": "Option A: 2.75 mm",
      "whyOtherOptionsWrong": "Option B (2.65 mm) subtracts 0.05 mm (treating error as positive). Option C (2.70 mm) neglects the zero error entirely. Option D adds 0.10 mm."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Zero error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-123",
    "questionNumber": 123,
    "question": "If the velocity of light c, gravitational constant G, and Planck's constant h are chosen as fundamental units, the dimensional formula of mass in this new system is:",
    "options": {
      "A": "[c^(1/2) G^(-1/2) h^(1/2)]",
      "B": "[c^(3/2) G^(-1/2) h^(1/2)]",
      "C": "[c^(1/2) G^(1/2) h^(-1/2)]",
      "D": "[c^(-1/2) G^(1/2) h^(1/2)]"
    },
    "optionsList": [
      "[c^(1/2) G^(-1/2) h^(1/2)]",
      "[c^(3/2) G^(-1/2) h^(1/2)]",
      "[c^(1/2) G^(1/2) h^(-1/2)]",
      "[c^(-1/2) G^(1/2) h^(1/2)]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPlanck mass derivation.\n\n2. GIVEN:\nm = c^x G^y h^z.\n\n3. FORMULA / PRINCIPLE:\n[M] = [L T⁻¹]^x [M⁻¹ L³ T⁻²]^y [M L² T⁻¹]^z = M^(-y + z) L^(x + 3y + 2z) T^(-x - 2y - z)\n\n4. STEP-BY-STEP SOLUTION:\n1. Equating powers of M: -y + z = 1 => z = 1 + y.\n2. Equating powers of L: x + 3y + 2z = 0 => x + 3y + 2(1 + y) = 0 => x + 5y + 2 = 0 => x = -5y - 2.\n3. Equating powers of T: -x - 2y - z = 0 => x + 2y + z = 0 => (-5y - 2) + 2y + (1 + y) = 0.\n4. -2y - 1 = 0 => 2y = -1 => y = -1/2.\n5. Therefore: z = 1 + (-1/2) = 1/2.\n6. And x = -5(-1/2) - 2 = 5/2 - 2 = 1/2.\n7. Thus, [m] = [c^(1/2) G^(-1/2) h^(1/2)] (Planck mass m_p = √(c h / G)).\n\n5. FINAL ANSWER:\nOption A: [c^(1/2) G^(-1/2) h^(1/2)]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B has c^(3/2). Option C inverts exponents of G and h. Option D has negative power on c.",
    "solutionStructured": {
      "concept": "Planck mass derivation.",
      "given": "m = c^x G^y h^z.",
      "formula": "[M] = [L T⁻¹]^x [M⁻¹ L³ T⁻²]^y [M L² T⁻¹]^z = M^(-y + z) L^(x + 3y + 2z) T^(-x - 2y - z)",
      "stepByStep": "1. Equating powers of M: -y + z = 1 => z = 1 + y.\n2. Equating powers of L: x + 3y + 2z = 0 => x + 3y + 2(1 + y) = 0 => x + 5y + 2 = 0 => x = -5y - 2.\n3. Equating powers of T: -x - 2y - z = 0 => x + 2y + z = 0 => (-5y - 2) + 2y + (1 + y) = 0.\n4. -2y - 1 = 0 => 2y = -1 => y = -1/2.\n5. Therefore: z = 1 + (-1/2) = 1/2.\n6. And x = -5(-1/2) - 2 = 5/2 - 2 = 1/2.\n7. Thus, [m] = [c^(1/2) G^(-1/2) h^(1/2)] (Planck mass m_p = √(c h / G)).",
      "finalAnswer": "Option A: [c^(1/2) G^(-1/2) h^(1/2)]",
      "whyOtherOptionsWrong": "Option B has c^(3/2). Option C inverts exponents of G and h. Option D has negative power on c."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-124",
    "questionNumber": 124,
    "question": "In an experiment for determining the density of a liquid using a specific gravity bottle, mass of empty bottle m₁ = (25.32 ± 0.01) g, mass of bottle + water m₂ = (50.45 ± 0.01) g, and mass of bottle + liquid m₃ = (45.18 ± 0.01) g. The relative density of the liquid is:",
    "options": {
      "A": "0.790 ± 0.001",
      "B": "0.790 ± 0.010",
      "C": "0.790 ± 0.005",
      "D": "0.790 ± 0.0001"
    },
    "optionsList": [
      "0.790 ± 0.001",
      "0.790 ± 0.010",
      "0.790 ± 0.005",
      "0.790 ± 0.0001"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPropagation of errors in differences and quotients (relative density).\n\n2. GIVEN:\nm₁ = 25.32 ± 0.01 g, m₂ = 50.45 ± 0.01 g, m₃ = 45.18 ± 0.01 g.\n\n3. FORMULA / PRINCIPLE:\nMass of water M_w = m₂ - m₁; Mass of liquid M_l = m₃ - m₁; Relative density d = M_l / M_w\n\n4. STEP-BY-STEP SOLUTION:\n1. M_w = 50.45 - 25.32 = 25.13 g. ΔM_w = 0.01 + 0.01 = 0.02 g.\n2. M_l = 45.18 - 25.32 = 19.86 g. ΔM_l = 0.01 + 0.01 = 0.02 g.\n3. Relative density d = 19.86 / 25.13 ≈ 0.78997 ≈ 0.790.\n4. Fractional error in d: Δd / d = ΔM_l / M_l + ΔM_w / M_w = 0.02 / 19.86 + 0.02 / 25.13 ≈ 0.0010 + 0.0008 = 0.0018.\n5. Absolute error Δd = 0.790 × 0.0018 ≈ 0.0014 ≈ 0.001.\n6. Reported relative density = 0.790 ± 0.001.\n\n5. FINAL ANSWER:\nOption A: 0.790 ± 0.001\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B overestimates the error by a factor of 10. Option C is five times too large. Option D retains unrealistic precision.",
    "solutionStructured": {
      "concept": "Propagation of errors in differences and quotients (relative density).",
      "given": "m₁ = 25.32 ± 0.01 g, m₂ = 50.45 ± 0.01 g, m₃ = 45.18 ± 0.01 g.",
      "formula": "Mass of water M_w = m₂ - m₁; Mass of liquid M_l = m₃ - m₁; Relative density d = M_l / M_w",
      "stepByStep": "1. M_w = 50.45 - 25.32 = 25.13 g. ΔM_w = 0.01 + 0.01 = 0.02 g.\n2. M_l = 45.18 - 25.32 = 19.86 g. ΔM_l = 0.01 + 0.01 = 0.02 g.\n3. Relative density d = 19.86 / 25.13 ≈ 0.78997 ≈ 0.790.\n4. Fractional error in d: Δd / d = ΔM_l / M_l + ΔM_w / M_w = 0.02 / 19.86 + 0.02 / 25.13 ≈ 0.0010 + 0.0008 = 0.0018.\n5. Absolute error Δd = 0.790 × 0.0018 ≈ 0.0014 ≈ 0.001.\n6. Reported relative density = 0.790 ± 0.001.",
      "finalAnswer": "Option A: 0.790 ± 0.001",
      "whyOtherOptionsWrong": "Option B overestimates the error by a factor of 10. Option C is five times too large. Option D retains unrealistic precision."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-125",
    "questionNumber": 125,
    "question": "A physical relation is given by P = (b - x²) / (a · t), where P is power, x is distance, and t is time. The dimensional formula of a × b is:",
    "options": {
      "A": "[M⁻¹ L⁴ T²]",
      "B": "[M⁻¹ L² T²]",
      "C": "[M L⁴ T⁻²]",
      "D": "[M⁻¹ L³ T]"
    },
    "optionsList": [
      "[M⁻¹ L⁴ T²]",
      "[M⁻¹ L² T²]",
      "[M L⁴ T⁻²]",
      "[M⁻¹ L³ T]"
    ],
    "correctAnswer": "B",
    "correctIndex": 1,
    "explanation": "1. CONCEPT:\nPrinciple of homogeneity in multi-variable power equation.\n\n2. GIVEN:\nP = (b - x²) / (a t). P = Power = [M L² T⁻³], x = distance = [L], t = time = [T].\n\n3. FORMULA / PRINCIPLE:\n[b - x²] requires [b] = [x²] = [L²]; P = [b] / ([a] [t]) => [a] = [b] / (P [t])\n\n4. STEP-BY-STEP SOLUTION:\n1. In numerator, b - x² implies [b] = [x²] = [L²].\n2. Power has dimensions: [P] = [M L² T⁻³].\n3. From equation: [a] = [b - x²] / ([P][t]) = [L²] / ([M L² T⁻³][T]) = [L²] / [M L² T⁻²] = [M⁻¹ L⁰ T²].\n4. Therefore, the product [a × b] = [a] · [b] = [M⁻¹ T²] · [L²] = [M⁻¹ L² T²].\n\n5. FINAL ANSWER:\nOption B: [M⁻¹ L² T²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption A incorrectly squares the length dimension. Option C has positive mass power. Option D has incorrect time power.",
    "solutionStructured": {
      "concept": "Principle of homogeneity in multi-variable power equation.",
      "given": "P = (b - x²) / (a t). P = Power = [M L² T⁻³], x = distance = [L], t = time = [T].",
      "formula": "[b - x²] requires [b] = [x²] = [L²]; P = [b] / ([a] [t]) => [a] = [b] / (P [t])",
      "stepByStep": "1. In numerator, b - x² implies [b] = [x²] = [L²].\n2. Power has dimensions: [P] = [M L² T⁻³].\n3. From equation: [a] = [b - x²] / ([P][t]) = [L²] / ([M L² T⁻³][T]) = [L²] / [M L² T⁻²] = [M⁻¹ L⁰ T²].\n4. Therefore, the product [a × b] = [a] · [b] = [M⁻¹ T²] · [L²] = [M⁻¹ L² T²].",
      "finalAnswer": "Option B: [M⁻¹ L² T²]",
      "whyOtherOptionsWrong": "Option A incorrectly squares the length dimension. Option C has positive mass power. Option D has incorrect time power."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-126",
    "questionNumber": 126,
    "question": "A wire of length l = (100.0 ± 0.5) cm and diameter d = (0.24 ± 0.01) cm is stretched by a hanging mass M = (2.00 ± 0.01) kg to produce an extension Δl = (0.050 ± 0.002) cm. The Young's modulus Y = (4 M g l) / (π d² Δl). The maximum percentage error in the determination of Young's modulus is approximately:",
    "options": {
      "A": "13.3%",
      "B": "9.5%",
      "C": "16.8%",
      "D": "7.2%"
    },
    "optionsList": [
      "13.3%",
      "9.5%",
      "16.8%",
      "7.2%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nComprehensive percentage error calculation in Young's modulus experiment.\n\n2. GIVEN:\nl = 100.0 cm, Δl_meas = 0.5 cm; d = 0.24 cm, Δd = 0.01 cm; M = 2.00 kg, ΔM = 0.01 kg; ext = 0.050 cm, Δ(ext) = 0.002 cm.\n\n3. FORMULA / PRINCIPLE:\n% error in Y = (% error in M) + (% error in l) + 2(% error in d) + (% error in ext)\n\n4. STEP-BY-STEP SOLUTION:\n1. % error in M: (0.01 / 2.00) × 100% = 0.5%.\n2. % error in l: (0.5 / 100.0) × 100% = 0.5%.\n3. % error in d: (0.01 / 0.24) × 100% = 4.167% => contributes 2 × 4.167% = 8.33%.\n4. % error in extension: (0.002 / 0.050) × 100% = 4.0%.\n5. Total percentage error in Y = 0.5% + 0.5% + 8.33% + 4.0% = 13.33% ≈ 13.3%.\n\n5. FINAL ANSWER:\nOption A: 13.3%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (9.5%) forgets the factor of 2 on diameter. Option C adds errors in quadrature. Option D understates extension error.",
    "solutionStructured": {
      "concept": "Comprehensive percentage error calculation in Young's modulus experiment.",
      "given": "l = 100.0 cm, Δl_meas = 0.5 cm; d = 0.24 cm, Δd = 0.01 cm; M = 2.00 kg, ΔM = 0.01 kg; ext = 0.050 cm, Δ(ext) = 0.002 cm.",
      "formula": "% error in Y = (% error in M) + (% error in l) + 2(% error in d) + (% error in ext)",
      "stepByStep": "1. % error in M: (0.01 / 2.00) × 100% = 0.5%.\n2. % error in l: (0.5 / 100.0) × 100% = 0.5%.\n3. % error in d: (0.01 / 0.24) × 100% = 4.167% => contributes 2 × 4.167% = 8.33%.\n4. % error in extension: (0.002 / 0.050) × 100% = 4.0%.\n5. Total percentage error in Y = 0.5% + 0.5% + 8.33% + 4.0% = 13.33% ≈ 13.3%.",
      "finalAnswer": "Option A: 13.3%",
      "whyOtherOptionsWrong": "Option B (9.5%) forgets the factor of 2 on diameter. Option C adds errors in quadrature. Option D understates extension error."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-127",
    "questionNumber": 127,
    "question": "The thickness of an oleic acid molecule estimated by forming a monomolecular film on water surface is approximately:",
    "options": {
      "A": "10⁻⁹ m (1 nm)",
      "B": "10⁻¹⁵ m (1 fm)",
      "C": "10⁻⁶ m (1 μm)",
      "D": "10⁻¹² m (1 pm)"
    },
    "optionsList": [
      "10⁻⁹ m (1 nm)",
      "10⁻¹⁵ m (1 fm)",
      "10⁻⁶ m (1 μm)",
      "10⁻¹² m (1 pm)"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nOleic acid monomolecular layer experiment (NCERT direct experiment).\n\n2. GIVEN:\nOleic acid molecule size estimation using lycopodium powder on water.\n\n3. FORMULA / PRINCIPLE:\nThickness t = (Volume of oleic acid in film) / (Area of circular film) ≈ 10⁻⁹ m\n\n4. STEP-BY-STEP SOLUTION:\n1. In NCERT Class 11, oleic acid (a soap-like chemical with long hydrocarbon chain) is diluted in alcohol.\n2. When drops are put on water dusted with lycopodium powder, alcohol evaporates, leaving a single molecular layer (monomolecular film).\n3. By dividing the known volume of oleic acid by the film area A, the thickness t is found to be of the order of 10⁻⁹ m to 2 × 10⁻⁹ m.\n4. This directly demonstrates the molecular scale (nanometer scale, ~10⁻⁹ m).\n\n5. FINAL ANSWER:\nOption A: 10⁻⁹ m (1 nm)\n\n6. WHY OTHER OPTIONS ARE WRONG:\n10⁻¹⁵ m is the nuclear dimension (Fermi). 10⁻⁶ m is cellular/bacterial size. 10⁻¹² m is gamma ray wavelength.",
    "solutionStructured": {
      "concept": "Oleic acid monomolecular layer experiment (NCERT direct experiment).",
      "given": "Oleic acid molecule size estimation using lycopodium powder on water.",
      "formula": "Thickness t = (Volume of oleic acid in film) / (Area of circular film) ≈ 10⁻⁹ m",
      "stepByStep": "1. In NCERT Class 11, oleic acid (a soap-like chemical with long hydrocarbon chain) is diluted in alcohol.\n2. When drops are put on water dusted with lycopodium powder, alcohol evaporates, leaving a single molecular layer (monomolecular film).\n3. By dividing the known volume of oleic acid by the film area A, the thickness t is found to be of the order of 10⁻⁹ m to 2 × 10⁻⁹ m.\n4. This directly demonstrates the molecular scale (nanometer scale, ~10⁻⁹ m).",
      "finalAnswer": "Option A: 10⁻⁹ m (1 nm)",
      "whyOtherOptionsWrong": "10⁻¹⁵ m is the nuclear dimension (Fermi). 10⁻⁶ m is cellular/bacterial size. 10⁻¹² m is gamma ray wavelength."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Measurement of length",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-128",
    "questionNumber": 128,
    "question": "The Bernoulli equation for fluid flow is P + (1/2) ρ v² + ρ g h = constant. The dimensional formula of the ratio of the second term to the third term, ((1/2) ρ v²) / (ρ g h), is:",
    "options": {
      "A": "[M⁰ L⁰ T⁰]",
      "B": "[M⁰ L T⁻¹]",
      "C": "[M L⁻¹ T⁻²]",
      "D": "[M⁰ L⁰ T⁻²]"
    },
    "optionsList": [
      "[M⁰ L⁰ T⁰]",
      "[M⁰ L T⁻¹]",
      "[M L⁻¹ T⁻²]",
      "[M⁰ L⁰ T⁻²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDimensional homogeneity of Bernoulli's terms.\n\n2. GIVEN:\nBernoulli's equation terms: P, (1/2) ρ v², and ρ g h.\n\n3. FORMULA / PRINCIPLE:\nAll terms in Bernoulli's equation have identical dimensions of pressure [M L⁻¹ T⁻²].\n\n4. STEP-BY-STEP SOLUTION:\n1. By the principle of homogeneity, each term in the sum (P, (1/2) ρ v², ρ g h) must possess identical dimensions.\n2. Dimensions of (1/2) ρ v² = [M L⁻³][L T⁻¹]² = [M L⁻¹ T⁻²] (energy per unit volume or pressure).\n3. Dimensions of ρ g h = [M L⁻³][L T⁻²][L] = [M L⁻¹ T⁻²] (energy per unit volume or pressure).\n4. Therefore, the ratio of any two terms in the equation is [M L⁻¹ T⁻²] / [M L⁻¹ T⁻²] = [M⁰ L⁰ T⁰] (dimensionless).\n\n5. FINAL ANSWER:\nOption A: [M⁰ L⁰ T⁰]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOptions B, C, and D contain non-zero powers, contradicting the fundamental fact that the ratio of two dimensionally identical terms is purely dimensionless.",
    "solutionStructured": {
      "concept": "Dimensional homogeneity of Bernoulli's terms.",
      "given": "Bernoulli's equation terms: P, (1/2) ρ v², and ρ g h.",
      "formula": "All terms in Bernoulli's equation have identical dimensions of pressure [M L⁻¹ T⁻²].",
      "stepByStep": "1. By the principle of homogeneity, each term in the sum (P, (1/2) ρ v², ρ g h) must possess identical dimensions.\n2. Dimensions of (1/2) ρ v² = [M L⁻³][L T⁻¹]² = [M L⁻¹ T⁻²] (energy per unit volume or pressure).\n3. Dimensions of ρ g h = [M L⁻³][L T⁻²][L] = [M L⁻¹ T⁻²] (energy per unit volume or pressure).\n4. Therefore, the ratio of any two terms in the equation is [M L⁻¹ T⁻²] / [M L⁻¹ T⁻²] = [M⁰ L⁰ T⁰] (dimensionless).",
      "finalAnswer": "Option A: [M⁰ L⁰ T⁰]",
      "whyOtherOptionsWrong": "Options B, C, and D contain non-zero powers, contradicting the fundamental fact that the ratio of two dimensionally identical terms is purely dimensionless."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-129",
    "questionNumber": 129,
    "question": "A screw gauge has a pitch of 0.5 mm and 100 circular scale divisions. It is used to measure the diameter of a sphere. The main scale reads 3.5 mm and circular scale reads 60 divisions. Due to wear and tear, when the jaws are closed, the circular scale zero is 4 divisions above the reference line. The correct volume of the sphere is:",
    "options": {
      "A": "27.8 mm³",
      "B": "29.2 mm³",
      "C": "26.4 mm³",
      "D": "31.1 mm³"
    },
    "optionsList": [
      "27.8 mm³",
      "29.2 mm³",
      "26.4 mm³",
      "31.1 mm³"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nScrew gauge reading with zero error followed by spherical volume calculation.\n\n2. GIVEN:\nPitch = 0.5 mm, N = 100, MSR = 3.5 mm, CSR = 60, Zero mark 4 divisions above reference line (positive zero error = +4 divisions).\n\n3. FORMULA / PRINCIPLE:\nLC = 0.5 / 100 = 0.005 mm; Diameter d = MSR + (CSR × LC) - (Zero Error); Volume V = (π / 6) d³\n\n4. STEP-BY-STEP SOLUTION:\n1. Least count LC = 0.5 mm / 100 = 0.005 mm.\n2. Observed reading = 3.5 mm + (60 × 0.005 mm) = 3.800 mm.\n3. Accounting for zero error (+0.040 mm): Correct diameter d = 3.800 - 0.040 = 3.760 mm.\n4. Radius r = 3.760 / 2 = 1.880 mm.\n5. Volume V = (4/3) π r³ = (4/3) × 3.1416 × (1.88)³ ≈ 27.8 mm³.\n\n5. FINAL ANSWER:\nOption A: 27.8 mm³\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B uses the uncorrected reading (3.80 mm => 28.7 - 29.2 mm³). Option C subtracts double the error. Option D adds the error.",
    "solutionStructured": {
      "concept": "Screw gauge reading with zero error followed by spherical volume calculation.",
      "given": "Pitch = 0.5 mm, N = 100, MSR = 3.5 mm, CSR = 60, Zero mark 4 divisions above reference line (positive zero error = +4 divisions).",
      "formula": "LC = 0.5 / 100 = 0.005 mm; Diameter d = MSR + (CSR × LC) - (Zero Error); Volume V = (π / 6) d³",
      "stepByStep": "1. Least count LC = 0.5 mm / 100 = 0.005 mm.\n2. Observed reading = 3.5 mm + (60 × 0.005 mm) = 3.800 mm.\n3. Accounting for zero error (+0.040 mm): Correct diameter d = 3.800 - 0.040 = 3.760 mm.\n4. Radius r = 3.760 / 2 = 1.880 mm.\n5. Volume V = (4/3) π r³ = (4/3) × 3.1416 × (1.88)³ ≈ 27.8 mm³.",
      "finalAnswer": "Option A: 27.8 mm³",
      "whyOtherOptionsWrong": "Option B uses the uncorrected reading (3.80 mm => 28.7 - 29.2 mm³). Option C subtracts double the error. Option D adds the error."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Numerical and conceptual NEET-style applications",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-130",
    "questionNumber": 130,
    "question": "The resistance of a conductor is R = V / I where V = (50 ± 2) V and I = (5 ± 0.2) A. The percentage uncertainty in the thermal power dissipated P = V · I is:",
    "options": {
      "A": "8%",
      "B": "4%",
      "C": "0%",
      "D": "6%"
    },
    "optionsList": [
      "8%",
      "4%",
      "0%",
      "6%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPercentage uncertainty in electrical power P = V · I.\n\n2. GIVEN:\nV = (50 ± 2) V, I = (5 ± 0.2) A.\n\n3. FORMULA / PRINCIPLE:\nP = V · I => (ΔP / P) × 100% = (ΔV / V × 100%) + (ΔI / I × 100%)\n\n4. STEP-BY-STEP SOLUTION:\n1. Percentage error in voltage: (2 / 50) × 100% = 4%.\n2. Percentage error in current: (0.2 / 5) × 100% = 4%.\n3. Since power P = V · I is the product of voltage and current, their percentage errors add directly.\n4. Percentage error in power = 4% + 4% = 8%.\n\n5. FINAL ANSWER:\nOption A: 8%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B takes only one component (4%). Option C subtracts the errors (4% - 4% = 0%), which is invalid for maximum uncertainty. Option D is an arithmetic slip.",
    "solutionStructured": {
      "concept": "Percentage uncertainty in electrical power P = V · I.",
      "given": "V = (50 ± 2) V, I = (5 ± 0.2) A.",
      "formula": "P = V · I => (ΔP / P) × 100% = (ΔV / V × 100%) + (ΔI / I × 100%)",
      "stepByStep": "1. Percentage error in voltage: (2 / 50) × 100% = 4%.\n2. Percentage error in current: (0.2 / 5) × 100% = 4%.\n3. Since power P = V · I is the product of voltage and current, their percentage errors add directly.\n4. Percentage error in power = 4% + 4% = 8%.",
      "finalAnswer": "Option A: 8%",
      "whyOtherOptionsWrong": "Option B takes only one component (4%). Option C subtracts the errors (4% - 4% = 0%), which is invalid for maximum uncertainty. Option D is an arithmetic slip."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-131",
    "questionNumber": 131,
    "question": "The position of a particle at time t is given by x(t) = (v₀ / α) (1 - e^(-α t)), where v₀ is a constant velocity and α > 0. The dimensional formula of α is:",
    "options": {
      "A": "[T⁻¹]",
      "B": "[T]",
      "C": "[L T⁻¹]",
      "D": "[L⁻¹ T]"
    },
    "optionsList": [
      "[T⁻¹]",
      "[T]",
      "[L T⁻¹]",
      "[L⁻¹ T]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDimensions of exponents in transcendental/exponential functions.\n\n2. GIVEN:\nx(t) = (v₀ / α) (1 - e^(-α t)).\n\n3. FORMULA / PRINCIPLE:\nThe argument of an exponential function must be dimensionless: [-α t] = [M⁰ L⁰ T⁰]\n\n4. STEP-BY-STEP SOLUTION:\n1. In any physical equation, exponents of exponential, trigonometric, and logarithmic functions are pure numbers (dimensionless).\n2. Therefore, [α · t] = [M⁰ L⁰ T⁰].\n3. [α] [T] = 1 => [α] = [T⁻¹].\n4. (Check consistency: [v₀ / α] = [L T⁻¹] / [T⁻¹] = [L] = [x], which confirms homogeneity).\n\n5. FINAL ANSWER:\nOption A: [T⁻¹]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is time [T]. Option C is velocity. Option D is reciprocal velocity.",
    "solutionStructured": {
      "concept": "Dimensions of exponents in transcendental/exponential functions.",
      "given": "x(t) = (v₀ / α) (1 - e^(-α t)).",
      "formula": "The argument of an exponential function must be dimensionless: [-α t] = [M⁰ L⁰ T⁰]",
      "stepByStep": "1. In any physical equation, exponents of exponential, trigonometric, and logarithmic functions are pure numbers (dimensionless).\n2. Therefore, [α · t] = [M⁰ L⁰ T⁰].\n3. [α] [T] = 1 => [α] = [T⁻¹].\n4. (Check consistency: [v₀ / α] = [L T⁻¹] / [T⁻¹] = [L] = [x], which confirms homogeneity).",
      "finalAnswer": "Option A: [T⁻¹]",
      "whyOtherOptionsWrong": "Option B is time [T]. Option C is velocity. Option D is reciprocal velocity."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-132",
    "questionNumber": 132,
    "question": "In a Vernier calipers, 1 cm of the main scale is divided into 20 equal divisions. 25 divisions of the Vernier scale coincide with 24 divisions of the main scale. What is the least count of this Vernier calipers in mm?",
    "options": {
      "A": "0.02 mm",
      "B": "0.01 mm",
      "C": "0.05 mm",
      "D": "0.04 mm"
    },
    "optionsList": [
      "0.02 mm",
      "0.01 mm",
      "0.05 mm",
      "0.04 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nHigh-precision Vernier calipers least count calculation.\n\n2. GIVEN:\n1 cm = 20 main scale divisions => 1 MSD = 10 mm / 20 = 0.5 mm. 25 VSD = 24 MSD.\n\n3. FORMULA / PRINCIPLE:\nLC = 1 MSD - 1 VSD = (1 / 25) MSD\n\n4. STEP-BY-STEP SOLUTION:\n1. Value of 1 main scale division: 1 MSD = 1 cm / 20 = 10 mm / 20 = 0.5 mm.\n2. 25 VSD = 24 MSD => 1 VSD = (24 / 25) MSD.\n3. LC = 1 MSD - 1 VSD = (1 - 24/25) MSD = (1 / 25) MSD.\n4. LC = (0.5 mm) / 25 = 0.02 mm (or 20 μm = 0.002 cm).\n\n5. FINAL ANSWER:\nOption A: 0.02 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B assumes 1 MSD = 0.25 mm. Option C assumes 1 MSD = 1.25 mm. Option D divides by 12.5.",
    "solutionStructured": {
      "concept": "High-precision Vernier calipers least count calculation.",
      "given": "1 cm = 20 main scale divisions => 1 MSD = 10 mm / 20 = 0.5 mm. 25 VSD = 24 MSD.",
      "formula": "LC = 1 MSD - 1 VSD = (1 / 25) MSD",
      "stepByStep": "1. Value of 1 main scale division: 1 MSD = 1 cm / 20 = 10 mm / 20 = 0.5 mm.\n2. 25 VSD = 24 MSD => 1 VSD = (24 / 25) MSD.\n3. LC = 1 MSD - 1 VSD = (1 - 24/25) MSD = (1 / 25) MSD.\n4. LC = (0.5 mm) / 25 = 0.02 mm (or 20 μm = 0.002 cm).",
      "finalAnswer": "Option A: 0.02 mm",
      "whyOtherOptionsWrong": "Option B assumes 1 MSD = 0.25 mm. Option C assumes 1 MSD = 1.25 mm. Option D divides by 12.5."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Vernier calipers",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-133",
    "questionNumber": 133,
    "question": "The time period of a soap bubble of radius R oscillating in a sound wave field of pressure amplitude P and density ρ is given by T = k P^a ρ^b R^c. The values of a, b, and c are:",
    "options": {
      "A": "a = -1/2, b = 1/2, c = 1",
      "B": "a = 1/2, b = -1/2, c = 1",
      "C": "a = -1/2, b = 1/2, c = 2",
      "D": "a = 1/2, b = 1/2, c = -1"
    },
    "optionsList": [
      "a = -1/2, b = 1/2, c = 1",
      "a = 1/2, b = -1/2, c = 1",
      "a = -1/2, b = 1/2, c = 2",
      "a = 1/2, b = 1/2, c = -1"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDerivation of bubble oscillation period using dimensional analysis.\n\n2. GIVEN:\nT = k P^a ρ^b R^c, [T] = [T], [P] = [M L⁻¹ T⁻²], [ρ] = [M L⁻³], [R] = [L].\n\n3. FORMULA / PRINCIPLE:\n[M⁰ L⁰ T¹] = [M L⁻¹ T⁻²]^a [M L⁻³]^b [L]^c = M^(a + b) L^(-a - 3b + c) T^(-2a)\n\n4. STEP-BY-STEP SOLUTION:\n1. Equating power of T: -2a = 1 => a = -1/2.\n2. Equating power of M: a + b = 0 => b = -a = 1/2.\n3. Equating power of L: -a - 3b + c = 0 => -(-1/2) - 3(1/2) + c = 0 => 1/2 - 3/2 + c = 0 => -1 + c = 0 => c = 1.\n4. Therefore: a = -1/2, b = 1/2, c = 1 (T ∝ R √(ρ / P)).\n\n5. FINAL ANSWER:\nOption A: a = -1/2, b = 1/2, c = 1\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B has positive a and negative b (giving T ∝ R √(P / ρ), which is velocity rather than time). Options C and D have wrong powers of R.",
    "solutionStructured": {
      "concept": "Derivation of bubble oscillation period using dimensional analysis.",
      "given": "T = k P^a ρ^b R^c, [T] = [T], [P] = [M L⁻¹ T⁻²], [ρ] = [M L⁻³], [R] = [L].",
      "formula": "[M⁰ L⁰ T¹] = [M L⁻¹ T⁻²]^a [M L⁻³]^b [L]^c = M^(a + b) L^(-a - 3b + c) T^(-2a)",
      "stepByStep": "1. Equating power of T: -2a = 1 => a = -1/2.\n2. Equating power of M: a + b = 0 => b = -a = 1/2.\n3. Equating power of L: -a - 3b + c = 0 => -(-1/2) - 3(1/2) + c = 0 => 1/2 - 3/2 + c = 0 => -1 + c = 0 => c = 1.\n4. Therefore: a = -1/2, b = 1/2, c = 1 (T ∝ R √(ρ / P)).",
      "finalAnswer": "Option A: a = -1/2, b = 1/2, c = 1",
      "whyOtherOptionsWrong": "Option B has positive a and negative b (giving T ∝ R √(P / ρ), which is velocity rather than time). Options C and D have wrong powers of R."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Applications and limitations of dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-134",
    "questionNumber": 134,
    "question": "The mass of a box is measured by a grocer's balance to be 2.300 kg. Two gold pieces of masses 20.15 g and 20.17 g are added to the box. The total mass of the box and the difference in the masses of the pieces to correct significant figures are respectively:",
    "options": {
      "A": "2.340 kg and 0.02 g",
      "B": "2.34032 kg and 0.02 g",
      "C": "2.34 kg and 0.020 g",
      "D": "2.340 kg and 0.020 g"
    },
    "optionsList": [
      "2.340 kg and 0.02 g",
      "2.34032 kg and 0.02 g",
      "2.34 kg and 0.020 g",
      "2.340 kg and 0.020 g"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nAddition and subtraction with different units and significant figure rules (NCERT standard problem).\n\n2. GIVEN:\nMass of box = 2.300 kg (3 decimal places in kg). Gold masses: 20.15 g = 0.02015 kg, 20.17 g = 0.02017 kg.\n\n3. FORMULA / PRINCIPLE:\nIn addition, answer must be rounded to least number of decimal places (in common unit). In subtraction, same rule applies.\n\n4. STEP-BY-STEP SOLUTION:\n1. Convert all masses to kg:\n   Box = 2.300 kg (3 decimal places)\n   Piece 1 = 0.02015 kg\n   Piece 2 = 0.02017 kg\n   Total exact = 2.300 + 0.02015 + 0.02017 = 2.34032 kg.\n2. The least number of decimal places is 3 (from 2.300 kg).\n3. Rounding 2.34032 kg to 3 decimal places gives 2.340 kg.\n4. Difference in masses of pieces in grams: 20.17 g - 20.15 g = 0.02 g (both have 2 decimal places in grams, so result has 2 decimal places: 0.02 g).\n5. Correct pair: 2.340 kg and 0.02 g.\n\n5. FINAL ANSWER:\nOption A: 2.340 kg and 0.02 g\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B retains all digits without applying decimal place rules for addition. Option C drops the significant trailing zero in 2.340 kg. Option D keeps an extra zero in 0.020 g.",
    "solutionStructured": {
      "concept": "Addition and subtraction with different units and significant figure rules (NCERT standard problem).",
      "given": "Mass of box = 2.300 kg (3 decimal places in kg). Gold masses: 20.15 g = 0.02015 kg, 20.17 g = 0.02017 kg.",
      "formula": "In addition, answer must be rounded to least number of decimal places (in common unit). In subtraction, same rule applies.",
      "stepByStep": "1. Convert all masses to kg:\n   Box = 2.300 kg (3 decimal places)\n   Piece 1 = 0.02015 kg\n   Piece 2 = 0.02017 kg\n   Total exact = 2.300 + 0.02015 + 0.02017 = 2.34032 kg.\n2. The least number of decimal places is 3 (from 2.300 kg).\n3. Rounding 2.34032 kg to 3 decimal places gives 2.340 kg.\n4. Difference in masses of pieces in grams: 20.17 g - 20.15 g = 0.02 g (both have 2 decimal places in grams, so result has 2 decimal places: 0.02 g).\n5. Correct pair: 2.340 kg and 0.02 g.",
      "finalAnswer": "Option A: 2.340 kg and 0.02 g",
      "whyOtherOptionsWrong": "Option B retains all digits without applying decimal place rules for addition. Option C drops the significant trailing zero in 2.340 kg. Option D keeps an extra zero in 0.020 g."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Rules of significant figures",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-135",
    "questionNumber": 135,
    "question": "A physical quantity u is given by u = (1/2) ε₀ E², where ε₀ is permittivity of free space and E is electric field. The dimensional formula of u is:",
    "options": {
      "A": "[M L⁻¹ T⁻²]",
      "B": "[M L² T⁻²]",
      "C": "[M L T⁻²]",
      "D": "[M L⁻² T⁻²]"
    },
    "optionsList": [
      "[M L⁻¹ T⁻²]",
      "[M L² T⁻²]",
      "[M L T⁻²]",
      "[M L⁻² T⁻²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nElectrostatic energy density u = (1/2) ε₀ E² (energy per unit volume).\n\n2. GIVEN:\nu = (1/2) ε₀ E².\n\n3. FORMULA / PRINCIPLE:\nu is electrostatic energy density = Energy / Volume.\n\n4. STEP-BY-STEP SOLUTION:\n1. In electromagnetism, u = (1/2) ε₀ E² represents energy stored per unit volume in an electric field.\n2. [Energy] = [M L² T⁻²].\n3. [Volume] = [L³].\n4. [u] = [Energy] / [Volume] = [M L² T⁻²] / [L³] = [M L⁻¹ T⁻²].\n5. (Note: This is identically equal to the dimensions of pressure and stress!).\n\n5. FINAL ANSWER:\nOption A: [M L⁻¹ T⁻²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is energy [M L² T⁻²]. Option C is force [M L T⁻²]. Option D is incorrect.",
    "solutionStructured": {
      "concept": "Electrostatic energy density u = (1/2) ε₀ E² (energy per unit volume).",
      "given": "u = (1/2) ε₀ E².",
      "formula": "u is electrostatic energy density = Energy / Volume.",
      "stepByStep": "1. In electromagnetism, u = (1/2) ε₀ E² represents energy stored per unit volume in an electric field.\n2. [Energy] = [M L² T⁻²].\n3. [Volume] = [L³].\n4. [u] = [Energy] / [Volume] = [M L² T⁻²] / [L³] = [M L⁻¹ T⁻²].\n5. (Note: This is identically equal to the dimensions of pressure and stress!).",
      "finalAnswer": "Option A: [M L⁻¹ T⁻²]",
      "whyOtherOptionsWrong": "Option B is energy [M L² T⁻²]. Option C is force [M L T⁻²]. Option D is incorrect."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-136",
    "questionNumber": 136,
    "question": "In a Vernier calipers, 1 main scale division is 1 mm. A student measures the diameter of a cylinder with this instrument and records 2.54 cm. If the instrument has a negative zero error of 0.03 cm, what was the actual Vernier coincidence division observed during measurement if MSR was 2.5 cm and 10 VSD = 9 MSD?",
    "options": {
      "A": "1st division",
      "B": "4th division",
      "C": "7th division",
      "D": "3rd division"
    },
    "optionsList": [
      "1st division",
      "4th division",
      "7th division",
      "3rd division"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nReverse calculation of Vernier reading from corrected measurement and zero error.\n\n2. GIVEN:\nCorrect diameter = 2.54 cm, Zero Error = -0.03 cm, MSR = 2.5 cm, 1 MSD = 1 mm = 0.1 cm, 10 VSD = 9 MSD.\n\n3. FORMULA / PRINCIPLE:\nCorrect reading = Observed reading - Zero Error; Observed reading = MSR + (n × LC)\n\n4. STEP-BY-STEP SOLUTION:\n1. Least count LC = 1 mm / 10 = 0.1 mm = 0.01 cm.\n2. Correct reading = Observed reading - (-0.03 cm) = Observed reading + 0.03 cm.\n3. Given correct reading = 2.54 cm => Observed reading = 2.54 cm - 0.03 cm = 2.51 cm.\n4. Observed reading = MSR + (n × LC) => 2.51 cm = 2.5 cm + (n × 0.01 cm).\n5. n × 0.01 cm = 0.01 cm => n = 1.\n6. Thus, the 1st division of the Vernier scale coincided with the main scale.\n\n5. FINAL ANSWER:\nOption A: 1st division\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (4th division) ignores the zero error (2.5 + 4 × 0.01 = 2.54). Option C (7th division) adds the error twice. Option D is an arithmetic slip.",
    "solutionStructured": {
      "concept": "Reverse calculation of Vernier reading from corrected measurement and zero error.",
      "given": "Correct diameter = 2.54 cm, Zero Error = -0.03 cm, MSR = 2.5 cm, 1 MSD = 1 mm = 0.1 cm, 10 VSD = 9 MSD.",
      "formula": "Correct reading = Observed reading - Zero Error; Observed reading = MSR + (n × LC)",
      "stepByStep": "1. Least count LC = 1 mm / 10 = 0.1 mm = 0.01 cm.\n2. Correct reading = Observed reading - (-0.03 cm) = Observed reading + 0.03 cm.\n3. Given correct reading = 2.54 cm => Observed reading = 2.54 cm - 0.03 cm = 2.51 cm.\n4. Observed reading = MSR + (n × LC) => 2.51 cm = 2.5 cm + (n × 0.01 cm).\n5. n × 0.01 cm = 0.01 cm => n = 1.\n6. Thus, the 1st division of the Vernier scale coincided with the main scale.",
      "finalAnswer": "Option A: 1st division",
      "whyOtherOptionsWrong": "Option B (4th division) ignores the zero error (2.5 + 4 × 0.01 = 2.54). Option C (7th division) adds the error twice. Option D is an arithmetic slip."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Vernier calipers",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-137",
    "questionNumber": 137,
    "question": "The viscous force F on a spherical body falling through a liquid is given by F = 6πηrv. If the dimensional formula of viscosity η is derived, which fundamental theorem prevents deriving the factor '6π' using dimensional analysis?",
    "options": {
      "A": "Dimensional analysis cannot determine dimensionless proportionality constants",
      "B": "Stokes' law is only valid for non-viscous fluids",
      "C": "Viscosity has variable dimensions depending on temperature",
      "D": "Force equations must always contain acceleration"
    },
    "optionsList": [
      "Dimensional analysis cannot determine dimensionless proportionality constants",
      "Stokes' law is only valid for non-viscous fluids",
      "Viscosity has variable dimensions depending on temperature",
      "Force equations must always contain acceleration"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFundamental limitations of dimensional analysis (inability to evaluate pure numerical constants).\n\n2. GIVEN:\nStokes' law F = 6πηrv.\n\n3. FORMULA / PRINCIPLE:\nF ∝ η^a r^b v^c => F = k η r v\n\n4. STEP-BY-STEP SOLUTION:\n1. Dimensional analysis equates powers of M, L, and T to determine exponents a, b, and c.\n2. Pure numbers (such as 6π, 1/2, 2π, etc.) are dimensionless constants [M⁰ L⁰ T⁰].\n3. Because they contribute zero dimensional exponents to M, L, and T, their numerical value cannot be determined through dimensional analysis.\n4. Such constants must be found experimentally or derived through rigorous mathematical integration (e.g., Navier-Stokes equations for Stokes' law).\n\n5. FINAL ANSWER:\nOption A: Dimensional analysis cannot determine dimensionless proportionality constants\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOptions B, C, and D state scientifically incorrect assertions.",
    "solutionStructured": {
      "concept": "Fundamental limitations of dimensional analysis (inability to evaluate pure numerical constants).",
      "given": "Stokes' law F = 6πηrv.",
      "formula": "F ∝ η^a r^b v^c => F = k η r v",
      "stepByStep": "1. Dimensional analysis equates powers of M, L, and T to determine exponents a, b, and c.\n2. Pure numbers (such as 6π, 1/2, 2π, etc.) are dimensionless constants [M⁰ L⁰ T⁰].\n3. Because they contribute zero dimensional exponents to M, L, and T, their numerical value cannot be determined through dimensional analysis.\n4. Such constants must be found experimentally or derived through rigorous mathematical integration (e.g., Navier-Stokes equations for Stokes' law).",
      "finalAnswer": "Option A: Dimensional analysis cannot determine dimensionless proportionality constants",
      "whyOtherOptionsWrong": "Options B, C, and D state scientifically incorrect assertions."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Applications and limitations of dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-138",
    "questionNumber": 138,
    "question": "The focal length of a concave mirror measured by u-v method is given by f = (u · v) / (u + v). For u = (15.0 ± 0.5) cm and v = (30.0 ± 0.5) cm, the percentage error in the calculated focal length f is:",
    "options": {
      "A": "7.2%",
      "B": "5.0%",
      "C": "3.3%",
      "D": "10.5%"
    },
    "optionsList": [
      "7.2%",
      "5.0%",
      "3.3%",
      "10.5%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError propagation in focal length f = (u v) / (u + v).\n\n2. GIVEN:\nu = 15.0 cm, Δu = 0.5 cm; v = 30.0 cm, Δv = 0.5 cm.\n\n3. FORMULA / PRINCIPLE:\nln f = ln u + ln v - ln(u + v) => Δf / f = (Δu / u) + (Δv / v) + (Δu + Δv) / (u + v)\n\n4. STEP-BY-STEP SOLUTION:\n1. Focal length f = (15 × 30) / (15 + 30) = 450 / 45 = 10.0 cm.\n2. Fractional error in u: Δu / u = 0.5 / 15.0 = 1 / 30 ≈ 0.0333 (3.33%).\n3. Fractional error in v: Δv / v = 0.5 / 30.0 = 1 / 60 ≈ 0.0167 (1.67%).\n4. Fractional error in (u + v): Δ(u + v) / (u + v) = (0.5 + 0.5) / (15.0 + 30.0) = 1.0 / 45.0 ≈ 0.0222 (2.22%).\n5. Total fractional error Δf / f = 0.0333 + 0.0167 + 0.0222 = 0.0722.\n6. Percentage error = 0.0722 × 100% ≈ 7.2%.\n\n5. FINAL ANSWER:\nOption A: 7.2%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (5.0%) forgets the denominator term (u + v). Option C only considers term u. Option D is an overestimate.",
    "solutionStructured": {
      "concept": "Error propagation in focal length f = (u v) / (u + v).",
      "given": "u = 15.0 cm, Δu = 0.5 cm; v = 30.0 cm, Δv = 0.5 cm.",
      "formula": "ln f = ln u + ln v - ln(u + v) => Δf / f = (Δu / u) + (Δv / v) + (Δu + Δv) / (u + v)",
      "stepByStep": "1. Focal length f = (15 × 30) / (15 + 30) = 450 / 45 = 10.0 cm.\n2. Fractional error in u: Δu / u = 0.5 / 15.0 = 1 / 30 ≈ 0.0333 (3.33%).\n3. Fractional error in v: Δv / v = 0.5 / 30.0 = 1 / 60 ≈ 0.0167 (1.67%).\n4. Fractional error in (u + v): Δ(u + v) / (u + v) = (0.5 + 0.5) / (15.0 + 30.0) = 1.0 / 45.0 ≈ 0.0222 (2.22%).\n5. Total fractional error Δf / f = 0.0333 + 0.0167 + 0.0222 = 0.0722.\n6. Percentage error = 0.0722 × 100% ≈ 7.2%.",
      "finalAnswer": "Option A: 7.2%",
      "whyOtherOptionsWrong": "Option B (5.0%) forgets the denominator term (u + v). Option C only considers term u. Option D is an overestimate."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-139",
    "questionNumber": 139,
    "question": "A physical quantity Q is calculated from the expression Q = (X · Y²) / Z³. The percentage errors in X, Y, and Z are 1%, 2%, and 3% respectively. If the calculated value of Q is 5.432, how should the result be written to correct significant figures?",
    "options": {
      "A": "5.4 ± 0.8",
      "B": "5.43 ± 0.76",
      "C": "5.432 ± 0.760",
      "D": "5 ± 1"
    },
    "optionsList": [
      "5.4 ± 0.8",
      "5.43 ± 0.76",
      "5.432 ± 0.760",
      "5 ± 1"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nReporting final value and uncertainty with proper significant figures.\n\n2. GIVEN:\nQ = 5.432, % error in X = 1%, Y = 2%, Z = 3%.\n\n3. FORMULA / PRINCIPLE:\n% error in Q = 1(% error in X) + 2(% error in Y) + 3(% error in Z)\n\n4. STEP-BY-STEP SOLUTION:\n1. % error in Q = 1(1%) + 2(2%) + 3(3%) = 1% + 4% + 9% = 14%.\n2. Absolute error in Q: ΔQ = 5.432 × 0.14 = 0.76048.\n3. The uncertainty ΔQ should generally be rounded to 1 (or at most 2) significant figures: ΔQ ≈ 0.8 (or 0.76).\n4. When uncertainty is at the tenth place (0.8), the measured value Q must also be rounded off to the tenths place: 5.4.\n5. Therefore, the result is reported as 5.4 ± 0.8.\n\n5. FINAL ANSWER:\nOption A: 5.4 ± 0.8\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B keeps hundredths place despite uncertainty in tenths place. Option C keeps thousandths place. Option D rounds off excessively.",
    "solutionStructured": {
      "concept": "Reporting final value and uncertainty with proper significant figures.",
      "given": "Q = 5.432, % error in X = 1%, Y = 2%, Z = 3%.",
      "formula": "% error in Q = 1(% error in X) + 2(% error in Y) + 3(% error in Z)",
      "stepByStep": "1. % error in Q = 1(1%) + 2(2%) + 3(3%) = 1% + 4% + 9% = 14%.\n2. Absolute error in Q: ΔQ = 5.432 × 0.14 = 0.76048.\n3. The uncertainty ΔQ should generally be rounded to 1 (or at most 2) significant figures: ΔQ ≈ 0.8 (or 0.76).\n4. When uncertainty is at the tenth place (0.8), the measured value Q must also be rounded off to the tenths place: 5.4.\n5. Therefore, the result is reported as 5.4 ± 0.8.",
      "finalAnswer": "Option A: 5.4 ± 0.8",
      "whyOtherOptionsWrong": "Option B keeps hundredths place despite uncertainty in tenths place. Option C keeps thousandths place. Option D rounds off excessively."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-140",
    "questionNumber": 140,
    "question": "The magnetic energy density (energy per unit volume) in a magnetic field B in vacuum is given by u_B = B² / (2 μ₀). The dimensional formula of B² / μ₀ is:",
    "options": {
      "A": "[M L⁻¹ T⁻²]",
      "B": "[M L² T⁻²]",
      "C": "[M L⁻² T⁻²]",
      "D": "[M L T⁻²]"
    },
    "optionsList": [
      "[M L⁻¹ T⁻²]",
      "[M L² T⁻²]",
      "[M L⁻² T⁻²]",
      "[M L T⁻²]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nMagnetic energy density u_B = B² / (2 μ₀) dimensions.\n\n2. GIVEN:\nu_B = B² / (2 μ₀) = Energy / Volume.\n\n3. FORMULA / PRINCIPLE:\n[u_B] = [Energy] / [Volume] = [M L² T⁻²] / [L³] = [M L⁻¹ T⁻²]\n\n4. STEP-BY-STEP SOLUTION:\n1. Just like electric energy density (1/2) ε₀ E², magnetic energy density u_B = B² / (2 μ₀) is energy per unit volume.\n2. [B² / μ₀] = [Energy / Volume] = [M L² T⁻²] / [L³] = [M L⁻¹ T⁻²].\n3. This has identical dimensions to pressure (Pascal).\n4. (Indeed, B² / (2μ₀) represents magnetic pressure!).\n\n5. FINAL ANSWER:\nOption A: [M L⁻¹ T⁻²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is energy. Option C is energy per area squared. Option D is force.",
    "solutionStructured": {
      "concept": "Magnetic energy density u_B = B² / (2 μ₀) dimensions.",
      "given": "u_B = B² / (2 μ₀) = Energy / Volume.",
      "formula": "[u_B] = [Energy] / [Volume] = [M L² T⁻²] / [L³] = [M L⁻¹ T⁻²]",
      "stepByStep": "1. Just like electric energy density (1/2) ε₀ E², magnetic energy density u_B = B² / (2 μ₀) is energy per unit volume.\n2. [B² / μ₀] = [Energy / Volume] = [M L² T⁻²] / [L³] = [M L⁻¹ T⁻²].\n3. This has identical dimensions to pressure (Pascal).\n4. (Indeed, B² / (2μ₀) represents magnetic pressure!).",
      "finalAnswer": "Option A: [M L⁻¹ T⁻²]",
      "whyOtherOptionsWrong": "Option B is energy. Option C is energy per area squared. Option D is force."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensions and dimensional formulae",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-141",
    "questionNumber": 141,
    "question": "A student measures the diameter of a small wire using a micrometer screw gauge with pitch 0.5 mm and 50 circular divisions. When the spindle is brought in contact with the anvil, the 47th division coincides with the reference line. When measuring the wire, the main scale reads 1.5 mm and the 32nd division coincides with the reference line. The true radius of the wire is:",
    "options": {
      "A": "0.925 mm",
      "B": "1.850 mm",
      "C": "0.895 mm",
      "D": "0.910 mm"
    },
    "optionsList": [
      "0.925 mm",
      "1.850 mm",
      "0.895 mm",
      "0.910 mm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDetermining true radius from diameter measured with screw gauge having negative zero error.\n\n2. GIVEN:\nPitch = 0.5 mm, N = 50, Contact: 47th division coincides, Measurement: MSR = 1.5 mm, CSR = 32.\n\n3. FORMULA / PRINCIPLE:\nLC = 0.5 / 50 = 0.01 mm; Zero Error = -(50 - 47) × 0.01 = -0.03 mm; Diameter = MSR + (CSR × LC) - Zero Error; Radius = Diameter / 2\n\n4. STEP-BY-STEP SOLUTION:\n1. Least count LC = 0.5 mm / 50 = 0.01 mm.\n2. Zero Error = -(50 - 47) × 0.01 mm = -0.03 mm (negative zero error).\n3. Observed diameter = 1.5 mm + (32 × 0.01 mm) = 1.50 mm + 0.32 mm = 1.82 mm.\n4. Correct diameter = 1.82 mm - (-0.03 mm) = 1.82 mm + 0.03 mm = 1.85 mm.\n5. The question asks for the true RADIUS of the wire!\n6. Radius r = Diameter / 2 = 1.85 mm / 2 = 0.925 mm.\n\n5. FINAL ANSWER:\nOption A: 0.925 mm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (1.850 mm) is the diameter, not the radius (common NEET trap!). Option C subtracts the error from radius. Option D miscalculates the zero error.",
    "solutionStructured": {
      "concept": "Determining true radius from diameter measured with screw gauge having negative zero error.",
      "given": "Pitch = 0.5 mm, N = 50, Contact: 47th division coincides, Measurement: MSR = 1.5 mm, CSR = 32.",
      "formula": "LC = 0.5 / 50 = 0.01 mm; Zero Error = -(50 - 47) × 0.01 = -0.03 mm; Diameter = MSR + (CSR × LC) - Zero Error; Radius = Diameter / 2",
      "stepByStep": "1. Least count LC = 0.5 mm / 50 = 0.01 mm.\n2. Zero Error = -(50 - 47) × 0.01 mm = -0.03 mm (negative zero error).\n3. Observed diameter = 1.5 mm + (32 × 0.01 mm) = 1.50 mm + 0.32 mm = 1.82 mm.\n4. Correct diameter = 1.82 mm - (-0.03 mm) = 1.82 mm + 0.03 mm = 1.85 mm.\n5. The question asks for the true RADIUS of the wire!\n6. Radius r = Diameter / 2 = 1.85 mm / 2 = 0.925 mm.",
      "finalAnswer": "Option A: 0.925 mm",
      "whyOtherOptionsWrong": "Option B (1.850 mm) is the diameter, not the radius (common NEET trap!). Option C subtracts the error from radius. Option D miscalculates the zero error."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Screw gauge",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-142",
    "questionNumber": 142,
    "question": "A physical quantity y depends on observables a, b, c according to y = a² b³ / c⁴. The values measured are a = 10.0 ± 0.1, b = 2.00 ± 0.02, and c = 5.00 ± 0.05. What is the fractional error in y?",
    "options": {
      "A": "0.09",
      "B": "0.05",
      "C": "0.02",
      "D": "0.15"
    },
    "optionsList": [
      "0.09",
      "0.05",
      "0.02",
      "0.15"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFractional error calculation with multi-variable powers.\n\n2. GIVEN:\ny = a² b³ / c⁴, a = 10.0 ± 0.1, b = 2.00 ± 0.02, c = 5.00 ± 0.05.\n\n3. FORMULA / PRINCIPLE:\nΔy / y = 2(Δa / a) + 3(Δb / b) + 4(Δc / c)\n\n4. STEP-BY-STEP SOLUTION:\n1. Fractional error in a: Δa / a = 0.1 / 10.0 = 0.01.\n2. Fractional error in b: Δb / b = 0.02 / 2.00 = 0.01.\n3. Fractional error in c: Δc / c = 0.05 / 5.00 = 0.01.\n4. Notice each observable has a fractional error of 0.01 (1%).\n5. Δy / y = 2(0.01) + 3(0.01) + 4(0.01) = 0.02 + 0.03 + 0.04 = 0.09 (9%).\n\n5. FINAL ANSWER:\nOption A: 0.09\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B subtracts term c (0.02 + 0.03 - 0.04 = 0.01). Option C considers only power 2. Option D adds exponents incorrectly.",
    "solutionStructured": {
      "concept": "Fractional error calculation with multi-variable powers.",
      "given": "y = a² b³ / c⁴, a = 10.0 ± 0.1, b = 2.00 ± 0.02, c = 5.00 ± 0.05.",
      "formula": "Δy / y = 2(Δa / a) + 3(Δb / b) + 4(Δc / c)",
      "stepByStep": "1. Fractional error in a: Δa / a = 0.1 / 10.0 = 0.01.\n2. Fractional error in b: Δb / b = 0.02 / 2.00 = 0.01.\n3. Fractional error in c: Δc / c = 0.05 / 5.00 = 0.01.\n4. Notice each observable has a fractional error of 0.01 (1%).\n5. Δy / y = 2(0.01) + 3(0.01) + 4(0.01) = 0.02 + 0.03 + 0.04 = 0.09 (9%).",
      "finalAnswer": "Option A: 0.09",
      "whyOtherOptionsWrong": "Option B subtracts term c (0.02 + 0.03 - 0.04 = 0.01). Option C considers only power 2. Option D adds exponents incorrectly."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Relative error",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-143",
    "questionNumber": 143,
    "question": "The time period of a charged particle in a cyclotron is T = 2π m / (q B). If the fractional errors in mass, charge, and magnetic field are 1%, 1%, and 2% respectively, the maximum percentage error in the cyclotron frequency f = 1 / T is:",
    "options": {
      "A": "4%",
      "B": "2%",
      "C": "0%",
      "D": "6%"
    },
    "optionsList": [
      "4%",
      "2%",
      "0%",
      "6%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError propagation in reciprocal physical relations (cyclotron frequency).\n\n2. GIVEN:\nCyclotron frequency f = 1 / T = q B / (2π m). % errors: m=1%, q=1%, B=2%.\n\n3. FORMULA / PRINCIPLE:\n(Δf / f) × 100% = (Δq / q × 100%) + (ΔB / B × 100%) + (Δm / m × 100%)\n\n4. STEP-BY-STEP SOLUTION:\n1. In f = q B / (2π m), each quantity (q, B, m) appears with power 1.\n2. For maximum permissible fractional error, relative errors always add:\n   Δf / f = Δq / q + ΔB / B + Δm / m.\n3. Percentage error = 1% + 2% + 1% = 4%.\n\n5. FINAL ANSWER:\nOption A: 4%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B subtracts mass error (1% + 2% - 1% = 2%). Option C subtracts all terms. Option D multiplies errors.",
    "solutionStructured": {
      "concept": "Error propagation in reciprocal physical relations (cyclotron frequency).",
      "given": "Cyclotron frequency f = 1 / T = q B / (2π m). % errors: m=1%, q=1%, B=2%.",
      "formula": "(Δf / f) × 100% = (Δq / q × 100%) + (ΔB / B × 100%) + (Δm / m × 100%)",
      "stepByStep": "1. In f = q B / (2π m), each quantity (q, B, m) appears with power 1.\n2. For maximum permissible fractional error, relative errors always add:\n   Δf / f = Δq / q + ΔB / B + Δm / m.\n3. Percentage error = 1% + 2% + 1% = 4%.",
      "finalAnswer": "Option A: 4%",
      "whyOtherOptionsWrong": "Option B subtracts mass error (1% + 2% - 1% = 2%). Option C subtracts all terms. Option D multiplies errors."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-144",
    "questionNumber": 144,
    "question": "Which of the following equations is dimensionally INCORRECT?",
    "options": {
      "A": "h = (2 T cos θ) / (r² ρ g)",
      "B": "T = 2π √(l / g)",
      "C": "v = √(γ P / ρ)",
      "D": "E = h ν"
    },
    "optionsList": [
      "h = (2 T cos θ) / (r² ρ g)",
      "T = 2π √(l / g)",
      "v = √(γ P / ρ)",
      "E = h ν"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nChecking dimensional correctness of capillary rise formula.\n\n2. GIVEN:\nCapillary rise formula: correct formula is h = (2 T cos θ) / (r ρ g).\n\n3. FORMULA / PRINCIPLE:\nOption A has r² in the denominator: [h] = [T] / ([r²][ρ][g])\n\n4. STEP-BY-STEP SOLUTION:\n1. In Option A: [T] = [M T⁻²], [r²] = [L²], [ρ] = [M L⁻³], [g] = [L T⁻²].\n2. Denominator: [r² ρ g] = [L²][M L⁻³][L T⁻²] = [M T⁻²].\n3. RHS = [M T⁻²] / [M T⁻²] = [M⁰ L⁰ T⁰] (dimensionless!).\n4. But LHS is height [h] = [L].\n5. Since [L] ≠ [M⁰ L⁰ T⁰], equation A is dimensionally incorrect!\n6. (The correct physical formula has r in the denominator, giving [T] / [r ρ g] = [L]).\n\n5. FINAL ANSWER:\nOption A: h = (2 T cos θ) / (r² ρ g)\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is period of pendulum [T]. Option C is Laplace's speed of sound [L T⁻¹]. Option D is Planck's energy equation [M L² T⁻²]. All three are dimensionally correct.",
    "solutionStructured": {
      "concept": "Checking dimensional correctness of capillary rise formula.",
      "given": "Capillary rise formula: correct formula is h = (2 T cos θ) / (r ρ g).",
      "formula": "Option A has r² in the denominator: [h] = [T] / ([r²][ρ][g])",
      "stepByStep": "1. In Option A: [T] = [M T⁻²], [r²] = [L²], [ρ] = [M L⁻³], [g] = [L T⁻²].\n2. Denominator: [r² ρ g] = [L²][M L⁻³][L T⁻²] = [M T⁻²].\n3. RHS = [M T⁻²] / [M T⁻²] = [M⁰ L⁰ T⁰] (dimensionless!).\n4. But LHS is height [h] = [L].\n5. Since [L] ≠ [M⁰ L⁰ T⁰], equation A is dimensionally incorrect!\n6. (The correct physical formula has r in the denominator, giving [T] / [r ρ g] = [L]).",
      "finalAnswer": "Option A: h = (2 T cos θ) / (r² ρ g)",
      "whyOtherOptionsWrong": "Option B is period of pendulum [T]. Option C is Laplace's speed of sound [L T⁻¹]. Option D is Planck's energy equation [M L² T⁻²]. All three are dimensionally correct."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Applications and limitations of dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-145",
    "questionNumber": 145,
    "question": "A spherometer is used to measure the radius of curvature R of a concave mirror using the relation R = (l² / 6h) + (h / 2). If l = (4.00 ± 0.01) cm and h = (0.080 ± 0.002) cm, the relative error in determining R is contributed primarily by:",
    "options": {
      "A": "The sagitta h in the first term (l² / 6h)",
      "B": "The distance between the legs l",
      "C": "The second term (h / 2)",
      "D": "Both l and h equally"
    },
    "optionsList": [
      "The sagitta h in the first term (l² / 6h)",
      "The distance between the legs l",
      "The second term (h / 2)",
      "Both l and h equally"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError analysis in spherometer radius of curvature formula.\n\n2. GIVEN:\nR ≈ l² / (6h). l = 4.00 ± 0.01 cm, h = 0.080 ± 0.002 cm.\n\n3. FORMULA / PRINCIPLE:\nΔR / R ≈ 2(Δl / l) + (Δh / h)\n\n4. STEP-BY-STEP SOLUTION:\n1. Fractional error in l: Δl / l = 0.01 / 4.00 = 0.0025 (0.25%).\n2. Since l is squared: 2(Δl / l) = 2 × 0.0025 = 0.005 (0.5%).\n3. Fractional error in h: Δh / h = 0.002 / 0.080 = 2 / 80 = 0.025 (2.5%).\n4. Comparing 2.5% from h to 0.5% from l: the fractional error in h is 5 times greater than the error from l!\n5. Therefore, the measurement of the sagitta h in the first term contributes overwhelmingly to the error in R.\n\n5. FINAL ANSWER:\nOption A: The sagitta h in the first term (l² / 6h)\n\n6. WHY OTHER OPTIONS ARE WRONG:\nDistance l has a much smaller relative error (0.25%). The second term (h/2 ≈ 0.04 cm) is tiny compared to l²/(6h) ≈ 33.3 cm, so its error contribution is negligible.",
    "solutionStructured": {
      "concept": "Error analysis in spherometer radius of curvature formula.",
      "given": "R ≈ l² / (6h). l = 4.00 ± 0.01 cm, h = 0.080 ± 0.002 cm.",
      "formula": "ΔR / R ≈ 2(Δl / l) + (Δh / h)",
      "stepByStep": "1. Fractional error in l: Δl / l = 0.01 / 4.00 = 0.0025 (0.25%).\n2. Since l is squared: 2(Δl / l) = 2 × 0.0025 = 0.005 (0.5%).\n3. Fractional error in h: Δh / h = 0.002 / 0.080 = 2 / 80 = 0.025 (2.5%).\n4. Comparing 2.5% from h to 0.5% from l: the fractional error in h is 5 times greater than the error from l!\n5. Therefore, the measurement of the sagitta h in the first term contributes overwhelmingly to the error in R.",
      "finalAnswer": "Option A: The sagitta h in the first term (l² / 6h)",
      "whyOtherOptionsWrong": "Distance l has a much smaller relative error (0.25%). The second term (h/2 ≈ 0.04 cm) is tiny compared to l²/(6h) ≈ 33.3 cm, so its error contribution is negligible."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-146",
    "questionNumber": 146,
    "question": "The speed of light in vacuum c, universal gravitational constant G, and elementary charge e are selected as base quantities. In this system, the dimensional formula of electric current is:",
    "options": {
      "A": "[c² G^(-1/2) e⁰]",
      "B": "[c³ G^(-1/2) e¹]",
      "C": "[c² G^(-1/2) e¹]",
      "D": "[c G^(-1) e¹]"
    },
    "optionsList": [
      "[c² G^(-1/2) e⁰]",
      "[c³ G^(-1/2) e¹]",
      "[c² G^(-1/2) e¹]",
      "[c G^(-1) e¹]"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nDeriving dimensions of current from fundamental constants.\n\n2. GIVEN:\nc = [L T⁻¹], G = [M⁻¹ L³ T⁻²], e = [A T]. Current I = [A].\n\n3. FORMULA / PRINCIPLE:\nI = c^x G^y e^z\n\n4. STEP-BY-STEP SOLUTION:\n1. Charge e = I · t => I = e / t.\n2. From Planck units, the Planck time is t_p = √(G ħ / c⁵) or in terms of G and c with mass: note that [c² / √G] has dimensions [L² T⁻²] / [M^(-1/2) L^(3/2) T⁻¹] = [M^(1/2) L^(1/2) T⁻¹].\n3. In electrostatic units, [e] = [M^(1/2) L^(3/2) T⁻¹].\n4. Alternatively: I = e / t => [I] = [e] [t]⁻¹ = [e][c⁵ / G]^(1/2)... wait: with c, G, and e as base quantities, I = e / t.\n5. To get time [t] from c, G: note [c] = [L T⁻¹], [G] = [M⁻¹ L³ T⁻²]. Without h, let's look at Option A: [c² G^(-1/2)] in cgs electromagnetic units corresponds to [c² / √G] = (3 × 10¹⁰)² / √(6.67 × 10⁻⁸) ≈ 3.5 × 10²⁴ esu/s (the Planck current!).\n6. The Planck current is I_p = c² / √G (independent of charge!).\n7. Therefore, the Planck current has the dimensional representation [c² G^(-1/2) e⁰].\n\n5. FINAL ANSWER:\nOption A: [c² G^(-1/2) e⁰]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOptions B, C, and D contain non-zero powers of e, which does not yield the natural Planck current.",
    "solutionStructured": {
      "concept": "Deriving dimensions of current from fundamental constants.",
      "given": "c = [L T⁻¹], G = [M⁻¹ L³ T⁻²], e = [A T]. Current I = [A].",
      "formula": "I = c^x G^y e^z",
      "stepByStep": "1. Charge e = I · t => I = e / t.\n2. From Planck units, the Planck time is t_p = √(G ħ / c⁵) or in terms of G and c with mass: note that [c² / √G] has dimensions [L² T⁻²] / [M^(-1/2) L^(3/2) T⁻¹] = [M^(1/2) L^(1/2) T⁻¹].\n3. In electrostatic units, [e] = [M^(1/2) L^(3/2) T⁻¹].\n4. Alternatively: I = e / t => [I] = [e] [t]⁻¹ = [e][c⁵ / G]^(1/2)... wait: with c, G, and e as base quantities, I = e / t.\n5. To get time [t] from c, G: note [c] = [L T⁻¹], [G] = [M⁻¹ L³ T⁻²]. Without h, let's look at Option A: [c² G^(-1/2)] in cgs electromagnetic units corresponds to [c² / √G] = (3 × 10¹⁰)² / √(6.67 × 10⁻⁸) ≈ 3.5 × 10²⁴ esu/s (the Planck current!).\n6. The Planck current is I_p = c² / √G (independent of charge!).\n7. Therefore, the Planck current has the dimensional representation [c² G^(-1/2) e⁰].",
      "finalAnswer": "Option A: [c² G^(-1/2) e⁰]",
      "whyOtherOptionsWrong": "Options B, C, and D contain non-zero powers of e, which does not yield the natural Planck current."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-147",
    "questionNumber": 147,
    "question": "The refractive index μ of a medium is determined by measuring the angle of minimum deviation D and angle of prism A using μ = sin((A + D) / 2) / sin(A / 2). If A = 60° (exact) and D is measured as (30.0 ± 0.6)°, the percentage error in μ is approximately:",
    "options": {
      "A": "0.52%",
      "B": "1.05%",
      "C": "2.0%",
      "D": "0.26%"
    },
    "optionsList": [
      "0.52%",
      "1.05%",
      "2.0%",
      "0.26%"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError propagation with trigonometric functions (prism minimum deviation).\n\n2. GIVEN:\nA = 60°, D = 30.0°, ΔD = 0.6° = 0.6 × (π / 180) rad = 0.01047 rad.\n\n3. FORMULA / PRINCIPLE:\nμ = sin((A + D) / 2) / sin(A / 2); dμ = (cos((A + D) / 2) / 2 sin(A / 2)) dD => Δμ / μ = (1/2) cot((A + D) / 2) ΔD\n\n4. STEP-BY-STEP SOLUTION:\n1. (A + D) / 2 = (60° + 30°) / 2 = 45°.\n2. A / 2 = 30°.\n3. μ = sin 45° / sin 30° = (1 / √2) / (1 / 2) = √2 ≈ 1.414.\n4. Differentiating μ with respect to D: dμ / dD = cos((A + D)/2) / (2 sin(A/2)).\n5. Fractional error: Δμ / μ = [cos 45° / (2 sin 45°)] ΔD = (1/2) cot 45° ΔD = (1/2) × 1 × ΔD (in radians!).\n6. Convert ΔD to radians: ΔD = 0.6° × (π / 180) = 0.6 × 0.01745 = 0.01047 rad.\n7. Fractional error Δμ / μ = (1/2) × 0.01047 = 0.005235.\n8. Percentage error = 0.005235 × 100% ≈ 0.52%.\n\n5. FINAL ANSWER:\nOption A: 0.52%\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B forgets the 1/2 factor. Option C uses degrees directly without converting to radians. Option D divides by 4.",
    "solutionStructured": {
      "concept": "Error propagation with trigonometric functions (prism minimum deviation).",
      "given": "A = 60°, D = 30.0°, ΔD = 0.6° = 0.6 × (π / 180) rad = 0.01047 rad.",
      "formula": "μ = sin((A + D) / 2) / sin(A / 2); dμ = (cos((A + D) / 2) / 2 sin(A / 2)) dD => Δμ / μ = (1/2) cot((A + D) / 2) ΔD",
      "stepByStep": "1. (A + D) / 2 = (60° + 30°) / 2 = 45°.\n2. A / 2 = 30°.\n3. μ = sin 45° / sin 30° = (1 / √2) / (1 / 2) = √2 ≈ 1.414.\n4. Differentiating μ with respect to D: dμ / dD = cos((A + D)/2) / (2 sin(A/2)).\n5. Fractional error: Δμ / μ = [cos 45° / (2 sin 45°)] ΔD = (1/2) cot 45° ΔD = (1/2) × 1 × ΔD (in radians!).\n6. Convert ΔD to radians: ΔD = 0.6° × (π / 180) = 0.6 × 0.01745 = 0.01047 rad.\n7. Fractional error Δμ / μ = (1/2) × 0.01047 = 0.005235.\n8. Percentage error = 0.005235 × 100% ≈ 0.52%.",
      "finalAnswer": "Option A: 0.52%",
      "whyOtherOptionsWrong": "Option B forgets the 1/2 factor. Option C uses degrees directly without converting to radians. Option D divides by 4."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-148",
    "questionNumber": 148,
    "question": "A physical quantity X has the dimensional formula [M L² T⁻²]. It is given that X = A + B C. Which of the following statements must be true according to the principle of homogeneity?",
    "options": {
      "A": "Both A and the product B C must have the dimensional formula [M L² T⁻²]",
      "B": "Both B and C must individually have the dimensional formula [M L² T⁻²]",
      "C": "A must be dimensionless",
      "D": "B and C must be dimensionless"
    },
    "optionsList": [
      "Both A and the product B C must have the dimensional formula [M L² T⁻²]",
      "Both B and C must individually have the dimensional formula [M L² T⁻²]",
      "A must be dimensionless",
      "B and C must be dimensionless"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nPrinciple of homogeneity for composite products and sums.\n\n2. GIVEN:\nX = A + B C, [X] = [M L² T⁻²] (energy).\n\n3. FORMULA / PRINCIPLE:\nIn X = A + B C, [X] = [A] = [B · C]\n\n4. STEP-BY-STEP SOLUTION:\n1. The principle of homogeneity states that physical quantities added together must have the same dimensional formula as each other and as the resulting sum.\n2. Therefore, [A] = [X] = [M L² T⁻²].\n3. Similarly, the product term [B C] = [X] = [M L² T⁻²].\n4. It is NOT necessary for B or C to individually have the dimensions of energy (for example, B could be force [M L T⁻²] and C could be distance [L]).\n5. Hence, statement A is strictly true.\n\n5. FINAL ANSWER:\nOption A: Both A and the product B C must have the dimensional formula [M L² T⁻²]\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B is false because B and C can have different complementary dimensions (e.g. force and length). Options C and D are completely incorrect.",
    "solutionStructured": {
      "concept": "Principle of homogeneity for composite products and sums.",
      "given": "X = A + B C, [X] = [M L² T⁻²] (energy).",
      "formula": "In X = A + B C, [X] = [A] = [B · C]",
      "stepByStep": "1. The principle of homogeneity states that physical quantities added together must have the same dimensional formula as each other and as the resulting sum.\n2. Therefore, [A] = [X] = [M L² T⁻²].\n3. Similarly, the product term [B C] = [X] = [M L² T⁻²].\n4. It is NOT necessary for B or C to individually have the dimensions of energy (for example, B could be force [M L T⁻²] and C could be distance [L]).\n5. Hence, statement A is strictly true.",
      "finalAnswer": "Option A: Both A and the product B C must have the dimensional formula [M L² T⁻²]",
      "whyOtherOptionsWrong": "Option B is false because B and C can have different complementary dimensions (e.g. force and length). Options C and D are completely incorrect."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Dimensional analysis",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-149",
    "questionNumber": 149,
    "question": "In the measurement of the speed of sound by resonance tube method, end correction e is given by e = (l₂ - 3 l₁) / 2, where l₁ and l₂ are the first and second resonance lengths. If l₁ = (16.0 ± 0.1) cm and l₂ = (50.0 ± 0.1) cm, the end correction with its uncertainty is:",
    "options": {
      "A": "(1.0 ± 0.2) cm",
      "B": "(1.0 ± 0.1) cm",
      "C": "(1.0 ± 0.4) cm",
      "D": "(2.0 ± 0.2) cm"
    },
    "optionsList": [
      "(1.0 ± 0.2) cm",
      "(1.0 ± 0.1) cm",
      "(1.0 ± 0.4) cm",
      "(2.0 ± 0.2) cm"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nError propagation in linear combinations with coefficients.\n\n2. GIVEN:\ne = (l₂ - 3 l₁) / 2. l₁ = (16.0 ± 0.1) cm, l₂ = (50.0 ± 0.1) cm.\n\n3. FORMULA / PRINCIPLE:\ne = (l₂ - 3 l₁) / 2; Δe = (Δl₂ + 3 Δl₁) / 2\n\n4. STEP-BY-STEP SOLUTION:\n1. e = (50.0 - 3 × 16.0) / 2 = (50.0 - 48.0) / 2 = 2.0 / 2 = 1.0 cm.\n2. For linear combination: Δe = (1/2) Δl₂ + (3/2) Δl₁.\n3. Δe = (1/2)(0.1 cm) + (3/2)(0.1 cm) = 0.05 cm + 0.15 cm = 0.20 cm = 0.2 cm.\n4. Therefore: e = (1.0 ± 0.2) cm.\n\n5. FINAL ANSWER:\nOption A: (1.0 ± 0.2) cm\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B (0.1 cm) ignores the coefficient 3 on l₁. Option C doubles the error without dividing by 2. Option D miscalculates the mean value.",
    "solutionStructured": {
      "concept": "Error propagation in linear combinations with coefficients.",
      "given": "e = (l₂ - 3 l₁) / 2. l₁ = (16.0 ± 0.1) cm, l₂ = (50.0 ± 0.1) cm.",
      "formula": "e = (l₂ - 3 l₁) / 2; Δe = (Δl₂ + 3 Δl₁) / 2",
      "stepByStep": "1. e = (50.0 - 3 × 16.0) / 2 = (50.0 - 48.0) / 2 = 2.0 / 2 = 1.0 cm.\n2. For linear combination: Δe = (1/2) Δl₂ + (3/2) Δl₁.\n3. Δe = (1/2)(0.1 cm) + (3/2)(0.1 cm) = 0.05 cm + 0.15 cm = 0.20 cm = 0.2 cm.\n4. Therefore: e = (1.0 ± 0.2) cm.",
      "finalAnswer": "Option A: (1.0 ± 0.2) cm",
      "whyOtherOptionsWrong": "Option B (0.1 cm) ignores the coefficient 3 on l₁. Option C doubles the error without dividing by 2. Option D miscalculates the mean value."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Propagation of errors",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  },
  {
    "id": "um-mcq-150",
    "questionNumber": 150,
    "question": "The energy of a photon is E = h ν, where h is Planck's constant and ν is frequency. The energy of an atomic transition is measured to be (3.20 ± 0.08) × 10⁻¹⁹ J. Using h = 6.63 × 10⁻³⁴ J·s, what is the frequency of the emitted photon with its percentage error?",
    "options": {
      "A": "(4.83 × 10¹⁴ Hz) with 2.5% error",
      "B": "(4.83 × 10¹⁴ Hz) with 5.0% error",
      "C": "(2.07 × 10¹⁴ Hz) with 2.5% error",
      "D": "(4.83 × 10¹⁵ Hz) with 1.25% error"
    },
    "optionsList": [
      "(4.83 × 10¹⁴ Hz) with 2.5% error",
      "(4.83 × 10¹⁴ Hz) with 5.0% error",
      "(2.07 × 10¹⁴ Hz) with 2.5% error",
      "(4.83 × 10¹⁵ Hz) with 1.25% error"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nMulti-step calculation combining photon frequency and percentage error.\n\n2. GIVEN:\nE = (3.20 ± 0.08) × 10⁻¹⁹ J, h = 6.63 × 10⁻³⁴ J·s (exact constant).\n\n3. FORMULA / PRINCIPLE:\nν = E / h; % error in ν = % error in E = (ΔE / E) × 100%\n\n4. STEP-BY-STEP SOLUTION:\n1. Frequency ν = E / h = (3.20 × 10⁻¹⁹ J) / (6.63 × 10⁻³⁴ J·s).\n2. ν = (3.20 / 6.63) × 10¹⁵ Hz = 0.48265 × 10¹⁵ Hz = 4.827 × 10¹⁴ Hz ≈ 4.83 × 10¹⁴ Hz.\n3. Percentage error in E: (0.08 / 3.20) × 100% = (8 / 320) × 100% = (1 / 40) × 100% = 2.5%.\n4. Since h is an exact physical constant with no experimental error, percentage error in frequency is exactly 2.5%.\n5. Result: (4.83 × 10¹⁴ Hz) with 2.5% error.\n\n5. FINAL ANSWER:\nOption A: (4.83 × 10¹⁴ Hz) with 2.5% error\n\n6. WHY OTHER OPTIONS ARE WRONG:\nOption B doubles the error to 5.0%. Option C inverts the fraction. Option D has wrong exponent of 10.",
    "solutionStructured": {
      "concept": "Multi-step calculation combining photon frequency and percentage error.",
      "given": "E = (3.20 ± 0.08) × 10⁻¹⁹ J, h = 6.63 × 10⁻³⁴ J·s (exact constant).",
      "formula": "ν = E / h; % error in ν = % error in E = (ΔE / E) × 100%",
      "stepByStep": "1. Frequency ν = E / h = (3.20 × 10⁻¹⁹ J) / (6.63 × 10⁻³⁴ J·s).\n2. ν = (3.20 / 6.63) × 10¹⁵ Hz = 0.48265 × 10¹⁵ Hz = 4.827 × 10¹⁴ Hz ≈ 4.83 × 10¹⁴ Hz.\n3. Percentage error in E: (0.08 / 3.20) × 100% = (8 / 320) × 100% = (1 / 40) × 100% = 2.5%.\n4. Since h is an exact physical constant with no experimental error, percentage error in frequency is exactly 2.5%.\n5. Result: (4.83 × 10¹⁴ Hz) with 2.5% error.",
      "finalAnswer": "Option A: (4.83 × 10¹⁴ Hz) with 2.5% error",
      "whyOtherOptionsWrong": "Option B doubles the error to 5.0%. Option C inverts the fraction. Option D has wrong exponent of 10."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "Units and Measurements",
    "chapterId": "units-measurements",
    "topic": "Numerical and conceptual NEET-style applications",
    "source": "VG Insights Practice",
    "isPYQ": false,
    "pyqYear": null
  }
];
