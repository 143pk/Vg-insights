#!/usr/bin/env python3
"""
Full Generator for Thermal Properties of Matter - Part 1 (Q1 to Q125)
Distribution: Exactly 40 Easy, 65 Medium, 20 Hard = 125 MCQs
Topics:
- Temperature and Scales (Celsius, Fahrenheit, Kelvin, faulty thermometers, triple point)
- Heat vs. Internal Energy vs. Work
- Thermal Expansion of Solids: Linear, Superficial, and Cubical expansion (alpha, beta, gamma relations)
- Differential expansion, bimetallic strips, pendulum clocks, expansion of holes/cavities
- Thermal Stress and Strain in constrained rods, breaking stress under temperature change
"""

import json

def get_part1_questions():
    qs = []

    def add(qid, qtext, a, b, c, d, correct, concept, given, formula, step, final, tip, why_wrong, diff, topic, source="NEET UG Practice", is_pyq=False, pyq_year=None):
        opts = {"A": a, "B": b, "C": c, "D": d}
        c_idx = {"A": 0, "B": 1, "C": 2, "D": 3}[correct]
        expl = (
            f"1. CONCEPT:\n{concept}\n\n"
            f"2. GIVEN:\n{given}\n\n"
            f"3. FORMULA / PRINCIPLE:\n{formula}\n\n"
            f"4. STEP-BY-STEP SOLUTION:\n{step}\n\n"
            f"5. FINAL ANSWER:\n{final}\n\n"
            f"6. QUICK TIP:\n{tip}"
        )
        item = {
            "id": f"thermal-mcq-{qid:03d}",
            "questionNumber": qid,
            "question": qtext,
            "options": opts,
            "optionsList": [a, b, c, d],
            "correctAnswer": correct,
            "correctIndex": c_idx,
            "explanation": expl,
            "solutionStructured": {
                "concept": concept,
                "given": given,
                "formula": formula,
                "stepByStep": step,
                "finalAnswer": final,
                "whyOtherOptionsWrong": why_wrong
            },
            "difficulty": diff,
            "subject": "Physics",
            "class": "11",
            "chapter": "Thermal Properties of Matter",
            "chapterId": "thermal-properties-matter",
            "topic": topic,
            "source": source,
            "isPYQ": is_pyq
        }
        if is_pyq and pyq_year:
            item["pyqYear"] = pyq_year
        qs.append(item)

    # -------------------------------------------------------------------------
    # Q1 to Q40: 40 EASY QUESTIONS
    # -------------------------------------------------------------------------
    add(1,
        "At what temperature do the Celsius and Fahrenheit temperature scales read the exact same numerical value?",
        "-40°",
        "0°",
        "40°",
        "-273°",
        "A",
        "The relation between Celsius (°C) and Fahrenheit (°F) scales is linear and intersects at a specific negative temperature.",
        "Temperature reading on Celsius scale C equals temperature reading on Fahrenheit scale F.",
        "C / 5 = (F - 32) / 9",
        "1. Let the common temperature reading be x.\n2. Then x / 5 = (x - 32) / 9.\n3. Cross-multiplying: 9x = 5x - 160.\n4. 4x = -160 => x = -40.",
        "Option A: -40°",
        "Remember the landmark values: -40°C = -40°F, and 574.25 K = 574.25°F.",
        "Option B gives 0°C = 32°F; Option C gives 40°C = 104°F; Option D gives -273°C = -459.4°F.",
        "Easy", "phys-thermal-expansion")

    add(2,
        "The SI base unit of thermodynamic temperature is:",
        "Degree Celsius (°C)",
        "Kelvin (K)",
        "Degree Fahrenheit (°F)",
        "Joule (J)",
        "B",
        "Thermodynamic temperature is one of the seven SI fundamental base quantities, measured in Kelvin.",
        "SI base unit of temperature.",
        "SI standard definitions (Kelvin is the SI base unit).",
        "1. Thermodynamic temperature is measured on an absolute scale.\n2. The SI unit is the Kelvin (symbol: K), written without a degree symbol (°).\n3. Degree Celsius is a derived unit of temperature interval.",
        "Option B: Kelvin (K)",
        "Never write °K! Kelvin does not take a degree symbol.",
        "Option A is a metric derived unit; Option C is imperial; Option D is the unit of energy/work.",
        "Easy", "phys-thermal-expansion")

    add(3,
        "The absolute zero of temperature corresponds to:",
        "0°C",
        "-273.15°C",
        "273.15 K",
        "-32°F",
        "B",
        "Absolute zero is the theoretical temperature at which the thermodynamic system has the lowest energy, defined as 0 K.",
        "Absolute zero = 0 K.",
        "T(K) = T(°C) + 273.15 => T(°C) = T(K) - 273.15",
        "1. Setting T(K) = 0 gives T(°C) = 0 - 273.15 = -273.15°C.\n2. At this point, classical molecular translational motion ceases.",
        "Option B: -273.15°C",
        "0 K = -273.15°C = -459.67°F.",
        "Option A is the ice point of water; Option C is 0°C in Kelvin; Option D is -35.56°C.",
        "Easy", "phys-thermal-expansion")

    add(4,
        "A temperature change of 25°C is equivalent to a temperature change on the Kelvin scale of:",
        "25 K",
        "298 K",
        "248 K",
        "45 K",
        "A",
        "A unit change on the Celsius scale is numerically identical to a unit change on the Kelvin scale (1°C interval = 1 K interval).",
        "ΔT_C = 25°C.",
        "ΔT_K = ΔT_C",
        "1. T_K = T_C + 273.15.\n2. For a change in temperature: ΔT_K = (T_2 + 273.15) - (T_1 + 273.15) = T_2 - T_1 = ΔT_C.\n3. Therefore, ΔT_K = 25 K.",
        "Option A: 25 K",
        "Always distinguish between absolute temperature T and temperature change ΔT! ΔT in °C equals ΔT in K.",
        "Option B adds 273, confusing temperature change with absolute temperature; Option C subtracts 25 from 273; Option D is 25 × 1.8.",
        "Easy", "phys-thermal-expansion")

    add(5,
        "A temperature difference of 50°F corresponds to a temperature difference on the Celsius scale of:",
        "27.8°C",
        "10°C",
        "90°C",
        "18°C",
        "A",
        "Fahrenheit and Celsius scale division ratio is 180 : 100 = 9 : 5.",
        "ΔF = 50°F.",
        "ΔC / 5 = ΔF / 9 => ΔC = (5/9) ΔF",
        "1. ΔC = (5/9) × 50 = 250 / 9 ≈ 27.78°C ≈ 27.8°C.\n2. Notice that no 32 is subtracted because we are converting a temperature DIFFERENCE, not an absolute temperature.",
        "Option A: 27.8°C",
        "For temperature intervals: ΔC = 5/9 ΔF and ΔF = 9/5 ΔC. Never add or subtract 32 for temperature intervals!",
        "Option B is 50 - 32 = 18 and dividing wrongly; Option C multiplies by 9/5; Option D is (50-32).",
        "Easy", "phys-thermal-expansion")

    add(6,
        "The coefficient of linear expansion α has the SI unit of:",
        "m/K",
        "K⁻¹",
        "m·K",
        "J/K",
        "B",
        "The coefficient of linear expansion is defined as fractional change in length per unit temperature change.",
        "Definition of coefficient of linear expansion α.",
        "α = ΔL / (L₀ ΔT)",
        "1. The unit of ΔL is meters (m), L₀ is meters (m), and ΔT is Kelvin (K).\n2. [α] = m / (m · K) = K⁻¹ (or °C⁻¹).\n3. It is dimensionally [M⁰ L⁰ T⁰ K⁻¹].",
        "Option B: K⁻¹",
        "All thermal expansion coefficients (α, β, γ) have the exact same dimensions: K⁻¹ (or θ⁻¹).",
        "Option A has meters in numerator; Option C is product of length and temperature; Option D is heat capacity unit.",
        "Easy", "phys-thermal-expansion")

    add(7,
        "For an isotropic solid, the relationship between the coefficients of linear expansion (α), superficial expansion (β), and cubical expansion (γ) is:",
        "α : β : γ = 1 : 2 : 3",
        "α : β : γ = 3 : 2 : 1",
        "α : β : γ = 1 : 1 : 1",
        "α : β : γ = 1 : 4 : 9",
        "A",
        "In an isotropic material, expansion occurs equally in all spatial dimensions.",
        "Isotropic material under small expansion approximation (αΔT << 1).",
        "β = 2α and γ = 3α",
        "1. For an area A = L²: ΔA/A₀ = 2 ΔL/L₀ = 2α ΔT => β = 2α.\n2. For a volume V = L³: ΔV/V₀ = 3 ΔL/L₀ = 3α ΔT => γ = 3α.\n3. Therefore, α : β : γ = α : 2α : 3α = 1 : 2 : 3.",
        "Option A: α : β : γ = 1 : 2 : 3",
        "Think of dimensions: 1D (length) -> 1, 2D (area) -> 2, 3D (volume) -> 3. Thus α/1 = β/2 = γ/3.",
        "Option B reverses the order; Option C assumes identical coefficients; Option D squares the values.",
        "Easy", "phys-thermal-expansion")

    add(8,
        "A circular hole is drilled in a metal plate. When the plate is uniformly heated, the diameter of the hole:",
        "Increases",
        "Decreases",
        "Remains unchanged",
        "First decreases then increases",
        "A",
        "Thermal expansion is photographic; every linear dimension increases in the same ratio as if the material were solid.",
        "A metal sheet with a hole heated uniformly.",
        "ΔL = α L₀ ΔT for any two points in the body.",
        "1. Thermal expansion can be thought of as a photographic enlargement of the object.\n2. The distance between any two points in the material increases.\n3. Any cavity or hole expands exactly as if it were filled with the same material.",
        "Option A: Increases",
        "Remember: Photographic enlargement rule! Holes, cavities, and gaps ALWAYS expand upon heating.",
        "Option B is a common misconception that atoms expand into the hole; Options C and D are incorrect.",
        "Easy", "phys-thermal-expansion")

    add(9,
        "A bimetallic strip is made of two strips of brass and steel welded together. If α_brass > α_steel, on heating the strip bends with:",
        "Brass on the convex side and steel on the concave side",
        "Steel on the convex side and brass on the concave side",
        "No curvature (remains straight)",
        "Twisting into a spiral without bending",
        "A",
        "The metal with the larger coefficient of linear expansion expands more and forms the longer outer arc (convex side).",
        "α_brass > α_steel, temperature increases.",
        "Curvature radius R ∝ 1 / [(α₁ - α₂) ΔT]; outer arc must be the longer strip.",
        "1. When heated, brass expands more in length than steel.\n2. Since they are firmly bonded together, the longer strip (brass) must occupy the outer radius of the curve.\n3. The outer radius is the convex side, while the shorter strip (steel) is on the concave side.",
        "Option A: Brass on the convex side and steel on the concave side",
        "Hot: Larger α on the OUTSIDE (convex). Cold: Larger α on the INSIDE (concave).",
        "Option B is what happens when cooled; Option C would only occur if α₁ = α₂; Option D is unphysical.",
        "Easy", "phys-thermal-expansion")

    add(10,
        "A clock with a brass pendulum keeps correct time at 20°C. If the ambient temperature rises to 35°C, the clock will:",
        "Lose time (run slow)",
        "Gain time (run fast)",
        "Keep correct time",
        "Stop oscillating immediately",
        "A",
        "The time period of a simple pendulum is T = 2π √(L/g). Length increases with temperature.",
        "Temperature increases from 20°C to 35°C.",
        "T = 2π √(L/g) => ΔT / T = (1/2) (ΔL / L) = (1/2) α Δθ",
        "1. When temperature rises, the brass pendulum rod expands, so length L increases.\n2. Since T ∝ √L, the time period of each oscillation increases.\n3. Taking longer for each tick means fewer ticks per day, so the clock loses time (runs slow).",
        "Option A: Lose time (run slow)",
        "Summer: Length increases -> Period increases -> Clock runs SLOW (loses time). Winter: Clock runs FAST.",
        "Option B occurs in winter when temperature drops; Option C neglects expansion; Option D is absurd.",
        "Easy", "phys-thermal-expansion")

    add(11,
        "Water has maximum density at a temperature of:",
        "0°C",
        "4°C",
        "100°C",
        "-4°C",
        "B",
        "Water exhibits anomalous expansion between 0°C and 4°C where its volume decreases, reaching minimum volume and maximum density at 4°C.",
        "Temperature of maximum density of pure water under 1 atm.",
        "ρ = m / V, minimum V occurs at 4°C (specifically 3.98°C).",
        "1. Between 0°C and 4°C, hydrogen bonds break down allowing water molecules to pack more tightly.\n2. Hence volume decreases and density increases from 0°C to 4°C.\n3. Above 4°C, normal thermal expansion dominates and density decreases.",
        "Option B: 4°C",
        "Remember 4°C (approx 277 K) enables aquatic life to survive at the bottom of frozen lakes in winter!",
        "Option A is the freezing point; Option C is the boiling point; Option D is below freezing.",
        "Easy", "phys-thermal-expansion")

    add(12,
        "When water is heated from 0°C to 10°C, its volume:",
        "Increases continuously",
        "Decreases continuously",
        "First decreases then increases",
        "First increases then decreases",
        "C",
        "Due to anomalous expansion, volume of water contracts from 0°C to 4°C and expands above 4°C.",
        "Heating water from 0°C to 10°C.",
        "Volume V(T) has a local minimum at T = 4°C.",
        "1. From 0°C to 4°C, water contracts (volume decreases).\n2. At 4°C, volume is minimum.\n3. From 4°C to 10°C, water expands normally (volume increases).\n4. Therefore, volume first decreases then increases.",
        "Option C: First decreases then increases",
        "Volume: Minimum at 4°C. Density: Maximum at 4°C. The curves are exact inverses of each other.",
        "Option A is for normal liquids; Option B is only partially true up to 4°C; Option D describes density, not volume.",
        "Easy", "phys-thermal-expansion")

    add(13,
        "A metallic rod of length 1 m expands by 1 mm when its temperature is raised by 50°C. The coefficient of linear expansion of the metal is:",
        "2 × 10⁻⁵ K⁻¹",
        "1 × 10⁻⁵ K⁻¹",
        "4 × 10⁻⁵ K⁻¹",
        "5 × 10⁻⁶ K⁻¹",
        "A",
        "Direct formula for linear expansion: ΔL = L₀ α ΔT.",
        "L₀ = 1 m, ΔL = 1 mm = 10⁻³ m, ΔT = 50°C = 50 K.",
        "α = ΔL / (L₀ ΔT)",
        "1. α = 10⁻³ m / (1 m × 50 K).\n2. α = 1 / 50000 = 2 × 10⁻⁵ K⁻¹.",
        "Option A: 2 × 10⁻⁵ K⁻¹",
        "Quick mental math: 1 mm / 50 = 0.02 mm = 20 μm = 2 × 10⁻⁵ m.",
        "Option B is 10⁻⁵; Option C is 4 × 10⁻⁵; Option D is 5 × 10⁻⁶.",
        "Easy", "phys-thermal-expansion")

    add(14,
        "Thermal stress produced in a rigidly clamped rod heated by ΔT depends on:",
        "Young's modulus and coefficient of linear expansion",
        "Length of the rod only",
        "Cross-sectional area of the rod only",
        "Mass of the rod only",
        "A",
        "Thermal stress in a fully constrained rod is σ = Y α ΔT, completely independent of the rod's length and cross-sectional area.",
        "A rod rigidly fixed at both ends and heated by ΔT.",
        "Stress σ = Y × Strain = Y × (ΔL / L₀) = Y × (L₀ α ΔT / L₀) = Y α ΔT",
        "1. If free, the rod would expand by ΔL = L₀ α ΔT.\n2. Since it is rigidly clamped, the supports compress it back by ΔL.\n3. Thermal strain = ΔL / L₀ = α ΔT.\n4. Thermal stress = Y × strain = Y α ΔT.\n5. Notice that L₀ cancels out completely!",
        "Option A: Young's modulus and coefficient of linear expansion",
        "Thermal STRESS (Y α ΔT) is independent of length L and area A! But thermal FORCE (Y A α ΔT) depends on area A.",
        "Options B, C, and D are incorrect because stress is an intensive property.",
        "Easy", "phys-thermal-expansion")

    add(15,
        "If a rod of cross-sectional area A and Young's modulus Y is clamped between rigid walls and heated by ΔT, the force exerted by the rod on each wall is:",
        "Y A α ΔT",
        "Y α ΔT / A",
        "Y A / (α ΔT)",
        "A α ΔT / Y",
        "A",
        "Force exerted on supports equals thermal stress multiplied by the cross-sectional area.",
        "Rigid clamp, cross-sectional area A, Young's modulus Y, expansion coefficient α, temperature increase ΔT.",
        "F = Stress × Area = (Y α ΔT) × A = Y A α ΔT",
        "1. Thermal stress σ = Y α ΔT.\n2. Compressive force F = σ × A = Y A α ΔT.\n3. By Newton's third law, the rod exerts this force on each support.",
        "Option A: Y A α ΔT",
        "Force is directly proportional to area A, Young's modulus Y, expansion coefficient α, and temperature rise ΔT.",
        "Options B, C, and D have incorrect dimensional forms.",
        "Easy", "phys-thermal-expansion")

    add(16,
        "The ratio of the coefficient of volume expansion of an ideal gas at constant pressure to its absolute temperature T is:",
        "1 / T²",
        "1 / T",
        "T",
        "Independent of temperature",
        "A",
        "For an ideal gas at constant pressure, volume expansion coefficient is γ_p = 1 / T. Hence the ratio γ_p / T is 1 / T².",
        "Ideal gas equation PV = nRT, constant pressure P.",
        "γ_p = (1/V) (∂V/∂T)_p = (1/V) (nR/P) = 1/T",
        "1. For an ideal gas: V = nRT / P.\n2. Differentiating with respect to T at constant P: (∂V/∂T)_p = nR / P.\n3. Coefficient of volume expansion: γ = (1/V)(∂V/∂T)_p = (nR/P) / (nRT/P) = 1/T.\n4. Therefore, the ratio of γ to T is (1/T) / T = 1 / T².",
        "Option A: 1 / T²",
        "Note the question carefully asks for the RATIO of γ to T! Since γ = 1/T, the ratio is 1/T².",
        "Option B is γ itself, not the ratio of γ to T; Option C is inverse of γ; Option D is incorrect.",
        "Easy", "phys-thermal-expansion")

    add(17,
        "Two rods of the same material have lengths in the ratio 1 : 2 and diameters in the ratio 2 : 1. If their temperatures are raised by the same amount, the ratio of their expansions ΔL₁ : ΔL₂ is:",
        "1 : 2",
        "2 : 1",
        "1 : 4",
        "4 : 1",
        "A",
        "Linear expansion ΔL = L₀ α ΔT depends only on the initial length L₀, coefficient α, and temperature rise ΔT, NOT on the diameter or cross-sectional area.",
        "L₁ / L₂ = 1/2, d₁ / d₂ = 2/1, same material (α₁ = α₂), same ΔT.",
        "ΔL = L₀ α ΔT => ΔL₁ / ΔL₂ = L₁ / L₂",
        "1. ΔL₁ = L₁ α ΔT.\n2. ΔL₂ = L₂ α ΔT.\n3. Ratio ΔL₁ / ΔL₂ = L₁ / L₂ = 1 / 2.\n4. The diameter or thickness has zero effect on the longitudinal expansion.",
        "Option A: 1 : 2",
        "Expansion along length depends only on length! Diameter only determines expansion of the diameter.",
        "Options B, C, and D incorrectly bring the diameter ratio into the calculation.",
        "Easy", "phys-thermal-expansion")

    add(18,
        "A steel tape measures the length of a copper rod as 90.0 cm at a calibration temperature of 20°C. If both are taken to 0°C, and α_copper > α_steel, the reading on the tape will be:",
        "Less than 90.0 cm",
        "Greater than 90.0 cm",
        "Exactly 90.0 cm",
        "Zero",
        "A",
        "When cooled, both contract. Since copper contracts more than steel, the true length of copper decreases faster than the tape marks.",
        "T decreases from 20°C to 0°C, α_Cu > α_steel.",
        "L_Cu = L₀(1 - α_Cu ΔT), L_tape_unit = 1(1 - α_steel ΔT). Measured reading = L_Cu / L_tape_unit.",
        "1. True length of copper at 0°C: L_Cu = 90(1 - α_Cu × 20).\n2. The scale of the tape also contracts: L_scale = 90(1 - α_steel × 20).\n3. Since α_Cu > α_steel, copper contracted by a larger percentage than the steel scale.\n4. Therefore, the rod covers fewer divisions on the tape, giving a reading less than 90.0 cm.",
        "Option A: Less than 90.0 cm",
        "Cooling with α_object > α_scale causes the object to shrink more, giving a lower reading.",
        "Option B occurs when heated; Option C ignores the difference in expansion coefficients; Option D is unphysical.",
        "Easy", "phys-thermal-expansion")

    add(19,
        "When a liquid in a glass vessel is heated, the apparent expansion coefficient γ_app is related to the real expansion coefficient γ_real and vessel expansion coefficient γ_glass by:",
        "γ_real = γ_app + γ_glass",
        "γ_app = γ_real + γ_glass",
        "γ_real = γ_app - γ_glass",
        "γ_real = γ_app × γ_glass",
        "A",
        "Real expansion of liquid equals apparent expansion plus the expansion of the container.",
        "Liquid of real expansion γ_real inside a container of cubical expansion γ_glass.",
        "ΔV_real = ΔV_app + ΔV_vessel => γ_real = γ_app + γ_vessel",
        "1. As the system is heated, the container expands, increasing its internal volume by ΔV_vessel = V₀ γ_glass ΔT.\n2. The liquid expands by its true volume ΔV_real = V₀ γ_real ΔT.\n3. The apparent rise in liquid volume is ΔV_app = ΔV_real - ΔV_vessel.\n4. Therefore, γ_app = γ_real - γ_glass, or γ_real = γ_app + γ_glass.",
        "Option A: γ_real = γ_app + γ_glass",
        "Real = Apparent + Vessel. Real expansion is always the true intrinsic property of the liquid.",
        "Option B states apparent is larger than real, which is false for normal expanding containers; Options C and D are incorrect.",
        "Easy", "phys-thermal-expansion")

    add(20,
        "If the coefficient of cubical expansion of a liquid is equal to the coefficient of cubical expansion of the container material, then on heating, the liquid level in the container will:",
        "Remain at the exact same level",
        "Rise",
        "Fall",
        "Overflow immediately",
        "A",
        "Apparent expansion coefficient is γ_app = γ_liquid - γ_vessel. If γ_liquid = γ_vessel, γ_app = 0.",
        "γ_liquid = γ_vessel.",
        "ΔV_app = V₀ (γ_liquid - γ_vessel) ΔT = 0",
        "1. The container expands and creates extra volume ΔV_c = V₀ γ_vessel ΔT.\n2. The liquid expands by ΔV_L = V₀ γ_liquid ΔT.\n3. Since both volumes increase by the exact same amount, the liquid exactly fills the same fraction of the container.\n4. Hence the liquid level remains unchanged.",
        "Option A: Remain at the exact same level",
        "If γ_L > γ_C, level rises. If γ_L < γ_C, level falls. If γ_L = γ_C, level stays constant.",
        "Option B occurs if γ_L > γ_C; Option C occurs if γ_L < γ_C; Option D occurs if γ_L >> γ_C.",
        "Easy", "phys-thermal-expansion")

    # Q21 to Q40: 20 more easy questions
    p1_easy_extra = [
        ("The density ρ of a substance at temperature T in terms of its density ρ₀ at 0°C and cubical expansion coefficient γ is approximately (for γΔT << 1):",
         "ρ ≈ ρ₀ (1 - γΔT)", "ρ ≈ ρ₀ (1 + γΔT)", "ρ ≈ ρ₀ / (1 - γΔT)", "ρ ≈ ρ₀ (1 - γΔT / 2)", "A",
         "Mass remains constant during thermal expansion, so density decreases as volume increases.",
         "Mass m is constant, V = V₀ (1 + γΔT).",
         "ρ = m / V = m / [V₀ (1 + γΔT)] = ρ₀ (1 + γΔT)⁻¹ ≈ ρ₀ (1 - γΔT)",
         "1. Density is inversely proportional to volume: ρ / ρ₀ = V₀ / V.\n2. Since V = V₀ (1 + γΔT), we have ρ = ρ₀ / (1 + γΔT).\n3. Using binomial approximation (1 + x)⁻¹ ≈ 1 - x for x << 1:\n4. ρ ≈ ρ₀ (1 - γΔT).",
         "Option A: ρ ≈ ρ₀ (1 - γΔT)",
         "Density always DECREASES with increasing temperature (except anomalous water between 0°C and 4°C).",
         "Option B shows density increasing with temperature; Option C has wrong sign; Option D has factor 1/2.",
         "Easy", "phys-thermal-expansion"),

        ("A metal wire of length L and cross-sectional area A is heated through ΔT without being allowed to expand. If Young's modulus is Y and linear expansion coefficient is α, the elastic potential energy stored in the wire is:",
         "(1/2) Y A L (α ΔT)²", "Y A L (α ΔT)²", "(1/2) Y A (α ΔT)² / L", "(1/2) Y (α ΔT)² / (A L)", "A",
         "Elastic potential energy per unit volume is u = (1/2) × Stress × Strain.",
         "Strain ε = α ΔT, Stress σ = Y α ΔT, Volume = A L.",
         "U = u × Volume = [(1/2) Y (α ΔT)²] × (A L) = (1/2) Y A L (α ΔT)²",
         "1. Thermal strain produced by rigid constraint is ε = α ΔT.\n2. Thermal stress is σ = Y ε = Y α ΔT.\n3. Energy density u = (1/2) σ ε = (1/2) Y (α ΔT)².\n4. Total stored elastic energy U = u × V = (1/2) Y A L (α ΔT)².",
         "Option A: (1/2) Y A L (α ΔT)²",
         "Remember: U = (1/2) × Y × Volume × (thermal strain)².",
         "Option B misses the 1/2 factor; Option C divides by L; Option D divides by volume.",
         "Easy", "phys-thermal-expansion"),

        ("On a new temperature scale X, the freezing point of water is marked as 20°X and the boiling point is marked as 120°X. A temperature of 50°C on this scale corresponds to:",
         "70°X", "50°X", "60°X", "80°X", "A",
         "Linear interpolation formula for any arbitrary thermometer scale: (Reading - LFP) / (UFP - LFP) = Constant.",
         "Scale X: LFP = 20°X, UFP = 120°X. Celsius: LFP = 0°C, UFP = 100°C. Temperature C = 50°C.",
         "(X - LFP_X) / (UFP_X - LFP_X) = (C - 0) / 100",
         "1. (X - 20) / (120 - 20) = 50 / 100.\n2. (X - 20) / 100 = 1 / 2.\n3. X - 20 = 50 => X = 70°X.",
         "Option A: 70°X",
         "50°C is exactly halfway between 0°C and 100°C. Therefore on scale X, the temperature must be halfway between 20°X and 120°X, which is (20 + 120) / 2 = 70°X!",
         "Option B gives 50; Option C gives 60; Option D gives 80.",
         "Easy", "phys-thermal-expansion"),

        ("A faulty thermometer has its lower fixed point marked as -2°C and upper fixed point as 98°C. What is the correct temperature when this thermometer reads 48°C?",
         "50°C", "46°C", "48°C", "52°C", "A",
         "The standard faulty thermometer equation: (Faulty reading - LFP) / (UFP - LFP) = C / 100.",
         "Faulty reading F' = 48°C, LFP = -2°C, UFP = 98°C.",
         "C / 100 = [F' - (-2)] / [98 - (-2)]",
         "1. C / 100 = (48 + 2) / (98 + 2) = 50 / 100.\n2. C = 50°C.",
         "Option A: 50°C",
         "The scale span is 98 - (-2) = 100 divisions! Since 48 is 50 divisions above -2, it corresponds to exactly 50°C.",
         "Option B subtracts 2; Option C assumes thermometer is correct; Option D adds 4.",
         "Easy", "phys-thermal-expansion"),

        ("In a constant-volume gas thermometer, the thermometric property utilized is:",
         "Pressure of the gas", "Volume of the gas", "Density of the gas", "Mass of the gas", "A",
         "In a constant-volume gas thermometer, volume is kept fixed and the variation of gas pressure with temperature is measured.",
         "Constant-volume gas thermometer.",
         "P ∝ T at constant V (Gay-Lussac's Law).",
         "1. According to the ideal gas law PV = nRT, if V is held constant, P is directly proportional to absolute temperature T.\n2. The pressure P is measured using a manometer column.\n3. Thus, pressure is the thermometric property.",
         "Option A: Pressure of the gas",
         "Constant volume -> Pressure varies. Constant pressure -> Volume varies.",
         "Option B is for a constant-pressure thermometer; Options C and D are not thermometric properties here.",
         "Easy", "phys-thermal-expansion"),

        ("The triple point of water is chosen as an absolute standard fixed point in modern thermometry because:",
         "It occurs at a uniquely reproducible temperature and pressure without variation",
         "Water has maximum density at the triple point",
         "Ice, water, and steam exist in equal volumes",
         "It occurs at 0°C and 1 atm pressure", "A",
         "The triple point of water is a unique thermodynamic state where solid, liquid, and vapour phases coexist in equilibrium at 273.16 K and 611.65 Pa.",
         "Definition of the triple point of water.",
         "Gibbs Phase Rule: F = C - P + 2 = 1 - 3 + 2 = 0 (zero degrees of freedom).",
         "1. By Gibbs phase rule, when three phases of a single substance coexist, the system has zero degrees of freedom (F = 0).\n2. This means it occurs at a single, precisely fixed, invariant temperature (273.16 K) and pressure (0.006 atm).\n3. Unlike melting or boiling points, it does not depend on ambient atmospheric pressure variations.",
         "Option A: It occurs at a uniquely reproducible temperature and pressure without variation",
         "Triple point temperature of water = 273.16 K = 0.01°C at P = 4.58 mmHg.",
         "Option B is true at 4°C, not at 0.01°C; Option C is false (masses/volumes need not be equal); Option D has wrong pressure.",
         "Easy", "phys-thermal-expansion"),

        ("A rectangular sheet of brass of dimensions 20 cm × 10 cm is heated through 50°C. If α_brass = 2 × 10⁻⁵ K⁻¹, the increase in its surface area is:",
         "0.40 cm²", "0.20 cm²", "0.80 cm²", "0.04 cm²", "A",
         "Superficial expansion: ΔA = A₀ β ΔT = A₀ (2α) ΔT.",
         "A₀ = 20 cm × 10 cm = 200 cm², ΔT = 50°C, α = 2 × 10⁻⁵ K⁻¹.",
         "ΔA = A₀ (2α) ΔT",
         "1. β = 2α = 2 × (2 × 10⁻⁵) = 4 × 10⁻⁵ K⁻¹.\n2. ΔA = 200 cm² × (4 × 10⁻⁵ K⁻¹) × 50 K.\n3. ΔA = 200 × 50 × 4 × 10⁻⁵ = 10000 × 4 × 10⁻⁵ = 0.40 cm².",
         "Option A: 0.40 cm²",
         "Remember to double α for area expansion: β = 2α!",
         "Option B forgets to double α (using α instead of 2α); Option C uses 4α; Option D has a decimal error.",
         "Easy", "phys-thermal-expansion"),

        ("A solid sphere and a hollow sphere of the same material and identical outer radius are heated through the same temperature rise. Which sphere expands more in volume?",
         "Both expand by the exact same amount", "The solid sphere expands more", "The hollow sphere expands more", "The solid sphere expands 8 times more", "A",
         "Thermal expansion of an enclosed cavity is identical to that of the solid material occupying that space.",
         "Two spheres of identical material and identical outer radius R.",
         "ΔV = V₀ γ ΔT",
         "1. Thermal expansion is a photographic magnification of the object.\n2. The outer surface expands based solely on the volume enclosed by that outer surface V₀ = (4/3)πR³.\n3. The presence of a cavity does not alter the displacement of the boundary atoms on the outer surface.\n4. Therefore, both spheres experience the exact same increase in outer volume ΔV.",
         "Option A: Both expand by the exact same amount",
         "Cavities expand just like solid matter! The outer volume expansion depends only on the outer radius.",
         "Option B mistakenly assumes extra internal mass causes greater expansion; Options C and D are incorrect.",
         "Easy", "phys-thermal-expansion"),

        ("The fractional change in density of a solid when heated by ΔT is:",
         "-γ ΔT", "+γ ΔT", "-α ΔT", "+3α / ΔT", "A",
         "As temperature increases, volume increases and density decreases: Δρ / ρ₀ ≈ -γ ΔT.",
         "Density ρ = m / V.",
         "dρ / ρ = -dV / V = -γ ΔT",
         "1. ρ = m V⁻¹.\n2. Taking logarithms and differentiating: ln ρ = ln m - ln V => dρ / ρ = - dV / V.\n3. Since dV / V = γ ΔT, we have dρ / ρ = - γ ΔT.\n4. The negative sign signifies that density decreases with temperature rise.",
         "Option A: -γ ΔT",
         "Fractional change in volume is +γ ΔT; fractional change in density is -γ ΔT = -3α ΔT.",
         "Option B misses the minus sign (density decreases, not increases); Option C uses linear coefficient; Option D has wrong formula.",
         "Easy", "phys-thermal-expansion"),

        ("A steel rod of length 2 m has a cross-sectional area of 4 cm². Young's modulus is 2 × 10¹¹ N/m² and α = 1.2 × 10⁻⁵ K⁻¹. If it is clamped between two rigid walls and its temperature is raised by 10°C, the thermal tension/compression force developed is:",
         "9.6 × 10⁴ N", "4.8 × 10⁴ N", "9.6 × 10³ N", "1.92 × 10⁵ N", "A",
         "Thermal compressive force F = Y A α ΔT.",
         "Y = 2 × 10¹¹ N/m², A = 4 cm² = 4 × 10⁻⁴ m², α = 1.2 × 10⁻⁵ K⁻¹, ΔT = 10 K.",
         "F = Y A α ΔT",
         "1. F = (2 × 10¹¹ N/m²) × (4 × 10⁻⁴ m²) × (1.2 × 10⁻⁵ K⁻¹) × (10 K).\n2. F = 2 × 4 × 1.2 × 10 × 10^(11 - 4 - 5) = 96 × 10² = 96000 N = 9.6 × 10⁴ N.",
         "Option A: 9.6 × 10⁴ N",
         "Notice length L = 2 m is not needed! F = Y A α ΔT is completely independent of the length of the rod.",
         "Option B halves the value; Option C misses a factor of 10; Option D doubles the value.",
         "Easy", "phys-thermal-expansion"),

        ("If the temperature of a patient is measured as 104°F, what is the temperature in degrees Celsius?",
         "40°C", "38.5°C", "42°C", "37°C", "A",
         "Temperature conversion from Fahrenheit to Celsius scale.",
         "F = 104°F.",
         "C = (5/9) (F - 32)",
         "1. C = (5/9) × (104 - 32) = (5/9) × 72.\n2. 72 / 9 = 8.\n3. C = 5 × 8 = 40°C.",
         "Option A: 40°C",
         "Standard high fever: 104°F = 40°C! Normal body temp: 98.6°F = 37°C.",
         "Option B is approx 101.3°F; Option C is 107.6°F; Option D is 98.6°F.",
         "Easy", "phys-thermal-expansion"),

        ("The relation between temperature reading on Celsius scale C and Kelvin scale K is given by:",
         "K = C + 273.15", "C = K + 273.15", "K = (C - 32) × 5/9", "K = C - 273.15", "A",
         "The Kelvin scale is shifted by 273.15 units from the Celsius scale.",
         "Definition of the Kelvin temperature scale.",
         "T(K) = T(°C) + 273.15",
         "1. The ice point of water is 0°C, which corresponds to 273.15 K.\n2. Both scales have identical division size.\n3. Therefore, K = C + 273.15.",
         "Option A: K = C + 273.15",
         "Always add 273.15 to go from Celsius to Kelvin.",
         "Option B swaps K and C; Option C confuses with Fahrenheit; Option D subtracts 273.15.",
         "Easy", "phys-thermal-expansion"),

        ("Small gaps are left between successive lengths of railway tracks because:",
         "To allow for linear thermal expansion of the rails during hot summers",
         "To allow rainwater to drain easily",
         "To reduce the friction of the moving train wheels",
         "To prevent sound waves from propagating along the track", "A",
         "Metals expand on heating; without expansion gaps, the compressive thermal stress would buckle the tracks.",
         "Practical application of thermal expansion in civil engineering.",
         "ΔL = L₀ α ΔT",
         "1. During hot summer days, railway rails expand in length by ΔL = L₀ α ΔT.\n2. If no gap is left, extreme thermal compressive force develops (F = Y A α ΔT), which bends and buckles the tracks.\n3. Gaps provide room for this expansion.",
         "Option A: To allow for linear thermal expansion of the rails during hot summers",
         "Rail gaps, roller bearings on bridge ends, and loop bends in steam pipelines all accommodate thermal expansion.",
         "Options B, C, and D are secondary or incorrect explanations.",
         "Easy", "phys-thermal-expansion"),

        ("Why is invar (a nickel-iron alloy) preferred for making measuring tapes and pendulum rods?",
         "It has an extremely low coefficient of thermal expansion",
         "It is the lightest available metal alloy",
         "It has zero electrical resistance at room temperature",
         "It never undergoes elastic deformation", "A",
         "Invar has an anomalously small coefficient of thermal expansion (α ≈ 1.2 × 10⁻⁶ K⁻¹).",
         "Material properties of invar alloy (64% Fe, 36% Ni).",
         "ΔL = L₀ α ΔT ≈ 0 due to very small α.",
         "1. Invar exhibits an 'Invar effect' where volume magnetostriction compensates for normal thermal expansion.\n2. Its thermal expansion coefficient is nearly 10 to 20 times smaller than that of brass or copper.\n3. Consequently, lengths remain virtually constant across everyday temperature variations.",
         "Option A: It has an extremely low coefficient of thermal expansion",
         "Invar = Invariable length with temperature!",
         "Option B is false (it is dense, ~8 g/cm³); Option C confuses it with superconductors; Option D violates elasticity.",
         "Easy", "phys-thermal-expansion"),

        ("A glass tumbler often cracks when boiling water is poured into it because:",
         "Unequal expansion of the inner and outer surfaces due to poor thermal conductivity of glass",
         "Glass chemically reacts with boiling water",
         "Glass has an unusually high thermal conductivity",
         "The boiling water exerts excessive hydrostatic pressure", "A",
         "Glass is a poor conductor of heat; the inner surface expands rapidly while the outer surface remains cool, creating fracture stress.",
         "Pouring boiling water into a thick glass tumbler.",
         "Thermal stress σ = Y α ΔT due to non-uniform thermal gradient.",
         "1. When hot water touches the inner surface, the inner layer heats up and expands immediately.\n2. Because glass has low thermal conductivity, heat takes time to reach the outer surface.\n3. The outer layer remains cold and unexpanded, resisting the expansion of the inner layer.\n4. This sets up large shearing/tensile stresses that exceed the breaking strength of glass, causing it to crack.",
         "Option A: Unequal expansion of the inner and outer surfaces due to poor thermal conductivity of glass",
         "Pyrex glass has very low α (3 × 10⁻⁶ K⁻¹), so it does not crack even with sudden temperature changes!",
         "Options B, C, and D are factually false.",
         "Easy", "phys-thermal-expansion"),

        ("A metallic rod of length L₀ has a linear expansion coefficient α. If its temperature is raised by ΔT, the new length L is:",
         "L = L₀ (1 + α ΔT)", "L = L₀ (1 - α ΔT)", "L = L₀ / (1 + α ΔT)", "L = L₀ α ΔT", "A",
         "Standard definition of linear thermal expansion.",
         "Initial length L₀, linear expansion coefficient α, temperature increase ΔT.",
         "L = L₀ + ΔL = L₀ + L₀ α ΔT = L₀ (1 + α ΔT)",
         "1. By definition, expansion ΔL = L₀ α ΔT.\n2. Final length L = L₀ + ΔL = L₀ (1 + α ΔT).",
         "Option A: L = L₀ (1 + α ΔT)",
         "L = L₀ (1 + α ΔT) is the fundamental linear expansion equation.",
         "Option B is for cooling; Option C is inverse; Option D is the change in length ΔL, not the new length L.",
         "Easy", "phys-thermal-expansion"),

        ("Which of the following physical quantities is an intensive thermodynamic property?",
         "Temperature", "Internal energy", "Heat capacity", "Volume", "A",
         "An intensive property does not depend on the mass or size of the system.",
         "Classification of thermodynamic properties.",
         "Intensive properties are independent of system size (e.g., T, P, density).",
         "1. If a system in thermal equilibrium is divided into two halves, each half will still be at the exact same temperature T.\n2. Therefore, temperature is an intensive variable.\n3. In contrast, internal energy, volume, and total heat capacity are halved, making them extensive variables.",
         "Option A: Temperature",
         "Temperature, pressure, density, and specific heat capacity are intensive. Total heat capacity, volume, and mass are extensive.",
         "Options B, C, and D are all extensive properties.",
         "Easy", "phys-thermal-expansion"),

        ("The heat capacity of a body is defined as:",
         "The amount of heat required to raise the temperature of the entire body by 1 K",
         "The amount of heat required to raise the temperature of unit mass of the body by 1 K",
         "The maximum heat a body can absorb before melting",
         "The rate of heat transfer per unit area", "A",
         "Heat capacity (thermal capacity) applies to the entire body, whereas specific heat capacity applies to unit mass.",
         "Definition of heat capacity S.",
         "S = ΔQ / ΔT = m c",
         "1. Heat capacity S = ΔQ / ΔT is the total heat required to produce a unit temperature rise in the whole body.\n2. Its SI unit is J/K.\n3. Specific heat capacity c = S / m is per unit mass (J/(kg·K)).",
         "Option A: The amount of heat required to raise the temperature of the entire body by 1 K",
         "Heat capacity S = m × c (J/K). Specific heat capacity c = S / m (J/(kg·K)).",
         "Option B defines specific heat capacity; Option C defines latent heat; Option D defines heat flux.",
         "Easy", "phys-thermal-expansion"),

        ("The dimensional formula for the coefficient of thermal expansion is:",
         "[M⁰ L⁰ T⁰ K⁻¹]", "[M⁰ L¹ T⁰ K⁻¹]", "[M¹ L⁰ T⁻² K⁻¹]", "[M⁰ L⁰ T¹ K⁻¹]", "A",
         "Thermal expansion coefficient α is fractional change in length per Kelvin: (ΔL/L₀) / ΔT.",
         "α = (ΔL / L₀) / ΔT.",
         "[α] = [L] / ([L] [K]) = [K⁻¹] = [M⁰ L⁰ T⁰ K⁻¹]",
         "1. Strain (ΔL / L₀) is dimensionless: [M⁰ L⁰ T⁰].\n2. Temperature has dimension [K] (or [θ]).\n3. Therefore, [α] = [M⁰ L⁰ T⁰] / [K] = [M⁰ L⁰ T⁰ K⁻¹].",
         "Option A: [M⁰ L⁰ T⁰ K⁻¹]",
         "All three expansion coefficients (α, β, γ) have the exact same dimensional formula: [K⁻¹].",
         "Options B, C, and D contain incorrect powers of length, mass, or time.",
         "Easy", "phys-thermal-expansion"),

        ("When an iron tyre is to be fitted on a wooden wheel, its diameter is initially kept slightly smaller than that of the wheel. It is fitted by:",
         "Heating the iron tyre so that it expands, slipping it on, and allowing it to cool and shrink",
         "Compressing the wooden wheel under huge hydraulic pressure",
         "Cooling the iron tyre with liquid nitrogen",
         "Heating the wooden wheel until it shrinks", "A",
         "Thermal expansion followed by contraction upon cooling creates a tight shrink fit.",
         "Shrink-fitting of metal rim on cart wheels.",
         "ΔD = D₀ α ΔT > difference in diameters.",
         "1. The inner diameter of the iron tyre is slightly less than the wheel diameter.\n2. When heated uniformly, the tyre expands until its diameter exceeds that of the wooden wheel.\n3. It is slipped over the rim and immediately cooled with cold water.\n4. Upon cooling, the tyre contracts powerfully, binding tightly to the wheel.",
         "Option A: Heating the iron tyre so that it expands, slipping it on, and allowing it to cool and shrink",
         "This ancient engineering technique is called shrink-fitting and uses thermal expansion.",
         "Options B, C, and D are impractical or physically incorrect.",
         "Easy", "phys-thermal-expansion")
    ]

    for idx, t in enumerate(p1_easy_extra):
        q_num = 21 + idx
        add(q_num, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14])

    # -------------------------------------------------------------------------
    # Q41 to Q105: 65 MEDIUM QUESTIONS
    # -------------------------------------------------------------------------
    # Generate 65 mathematically distinct medium questions covering expansion, differential expansion, pendulum error, thermal stress
    for q_id in range(41, 106):
        idx = q_id - 41
        if idx < 15:
            # Linear expansion calculations with distinct materials and temperature intervals
            materials = [
                ("copper", 1.7e-5, 2.0 + idx * 0.5, 30.0 + idx * 5.0),
                ("aluminum", 2.4e-5, 1.5 + idx * 0.4, 40.0 + idx * 4.0),
                ("brass", 1.9e-5, 3.0 + idx * 0.3, 50.0 + idx * 3.0),
                ("steel", 1.2e-5, 4.0 + idx * 0.6, 60.0 + idx * 2.0),
                ("invar", 0.12e-5, 5.0 + idx * 0.2, 70.0 + idx * 2.5)
            ]
            mat_name, alpha_val, l_init, dt_val = materials[idx % len(materials)]
            l_init = round(l_init, 2)
            dt_val = round(dt_val, 1)
            dl_mm = l_init * alpha_val * dt_val * 1000.0

            add(q_id,
                f"A {mat_name} rod has a length of {l_init:.2f} m at 20°C. If its temperature is raised to {20 + dt_val:.1f}°C, calculate the elongation in the rod. (Coefficient of linear expansion of {mat_name} α = {alpha_val*1e5:.2f} × 10⁻⁵ K⁻¹)",
                f"{dl_mm:.3f} mm",
                f"{dl_mm * 2.0:.3f} mm",
                f"{dl_mm * 0.5:.3f} mm",
                f"{dl_mm * 1.5:.3f} mm",
                "A",
                "Linear thermal expansion is directly proportional to initial length, temperature change, and linear expansion coefficient.",
                f"L₀ = {l_init:.2f} m, ΔT = {dt_val:.1f} K, α = {alpha_val:.2e} K⁻¹.",
                "ΔL = L₀ α ΔT",
                f"1. ΔL = {l_init:.2f} × ({alpha_val:.2e}) × {dt_val:.1f} = {l_init * alpha_val * dt_val:.6e} m.\n2. In millimeters: ΔL = {dl_mm:.3f} mm.",
                f"Option A: {dl_mm:.3f} mm",
                "Always ensure length units are converted properly: 1 m = 1000 mm.",
                "Option B doubles the expansion; Option C halves it; Option D multiplies by 1.5.",
                "Medium", "phys-thermal-expansion")

        elif idx < 30:
            # Pendulum clock time gain/loss calculations
            p_idx = idx - 15
            alpha_p = 2.0e-5 # brass pendulum
            dt_pend = 10.0 + p_idx * 2.0
            # seconds lost per day = (1/2) * alpha * dt * 86400
            sec_lost = 0.5 * alpha_p * dt_pend * 86400.0

            add(q_id,
                f"A pendulum clock has a brass pendulum rod (α = 2.0 × 10⁻⁵ K⁻¹) and keeps correct time at 15°C. How many seconds per day will the clock lose if the temperature rises to {15 + dt_pend:.0f}°C?",
                f"{sec_lost:.1f} s/day",
                f"{sec_lost * 2.0:.1f} s/day",
                f"{sec_lost * 0.5:.1f} s/day",
                f"{sec_lost * 4.0:.1f} s/day",
                "A",
                "Fractional change in period of a simple pendulum is ΔT / T = (1/2) α Δθ. Time lost per day is Δt = (1/2) α Δθ × 86400 s.",
                f"α = 2.0 × 10⁻⁵ K⁻¹, Δθ = {dt_pend:.0f} K, 1 day = 86400 s.",
                "Δt = (1/2) α Δθ × 86400",
                f"1. ΔT / T = (1/2) × (2.0 × 10⁻⁵) × {dt_pend:.0f} = 1.0 × 10⁻⁵ × {dt_pend:.0f} = {1.0e-5 * dt_pend:.2e}.\n2. Time lost per day: Δt = {1.0e-5 * dt_pend:.2e} × 86400 s = {sec_lost:.1f} s.",
                f"Option A: {sec_lost:.1f} s/day",
                "Shortcut formula for daily time gain/loss: Δt = 43200 × α × Δθ seconds!",
                "Option B forgets the factor of 1/2 from square root; Option C halves the loss; Option D multiplies by 4.",
                "Medium", "phys-thermal-expansion")

        elif idx < 45:
            # Thermal stress in constrained wires/rods
            s_idx = idx - 30
            y_val = (1.8 + s_idx * 0.1) * 1e11
            alpha_s = (1.2 + s_idx * 0.05) * 1e-5
            dt_s = 20.0 + s_idx * 5.0
            stress_mpa = y_val * alpha_s * dt_s / 1e6

            add(q_id,
                f"A steel wire rigidly clamped at both ends is under zero tension at 40°C. If the temperature drops to {40 - dt_s:.0f}°C, calculate the tensile stress developed in the wire. (Given Y = {y_val/1e11:.2f} × 10¹¹ N/m², α = {alpha_s*1e5:.2f} × 10⁻⁵ K⁻¹)",
                f"{stress_mpa:.1f} MPa",
                f"{stress_mpa * 2.0:.1f} MPa",
                f"{stress_mpa * 0.5:.1f} MPa",
                f"{stress_mpa * 1.5:.1f} MPa",
                "A",
                "When a wire clamped between fixed supports is cooled, it attempts to contract. The fixed ends exert tensile force to maintain original length, producing thermal tensile stress σ = Y α ΔT.",
                f"Y = {y_val:.2e} N/m², α = {alpha_s:.2e} K⁻¹, ΔT = {dt_s:.0f} K.",
                "σ = Y α ΔT",
                f"1. Thermal strain ε = α ΔT = ({alpha_s:.2e}) × {dt_s:.0f} = {alpha_s * dt_s:.2e}.\n2. Tensile stress σ = Y ε = ({y_val:.2e}) × ({alpha_s * dt_s:.2e}) = {stress_mpa * 1e6:.2e} N/m² = {stress_mpa:.1f} MPa.",
                f"Option A: {stress_mpa:.1f} MPa",
                "Cooling creates TENSILE stress; heating creates COMPRESSIVE stress.",
                "Option B doubles the stress; Option C halves it; Option D multiplies by 1.5.",
                "Medium", "phys-thermal-expansion")

        else:
            # Apparent vs Real expansion of liquids
            l_idx = idx - 45
            gamma_r = (6.0 + l_idx * 0.4) * 1e-4
            alpha_g = (9.0 + l_idx * 0.5) * 1e-6
            gamma_g = 3.0 * alpha_g
            gamma_a = gamma_r - gamma_g

            add(q_id,
                f"A liquid with real coefficient of cubical expansion γ_real = {gamma_r*1e4:.2f} × 10⁻⁴ K⁻¹ is placed in a glass flask having linear expansion coefficient α_glass = {alpha_g*1e6:.1f} × 10⁻⁶ K⁻¹. What is the coefficient of apparent expansion of the liquid?",
                f"{gamma_a*1e4:.3f} × 10⁻⁴ K⁻¹",
                f"{(gamma_r + gamma_g)*1e4:.3f} × 10⁻⁴ K⁻¹",
                f"{gamma_r*1e4:.3f} × 10⁻⁴ K⁻¹",
                f"{(gamma_r - alpha_g)*1e4:.3f} × 10⁻⁴ K⁻¹",
                "A",
                "Apparent expansion coefficient is the difference between the real volume expansion coefficient of the liquid and the cubical expansion coefficient of the vessel: γ_app = γ_real - γ_vessel = γ_real - 3α_glass.",
                f"γ_real = {gamma_r:.2e} K⁻¹, α_glass = {alpha_g:.2e} K⁻¹ => γ_glass = 3α_glass = {gamma_g:.2e} K⁻¹.",
                "γ_app = γ_real - 3α_glass",
                f"1. Cubical expansion coefficient of glass flask: γ_glass = 3 × ({alpha_g:.2e}) = {gamma_g:.2e} K⁻¹.\n2. Apparent expansion coefficient: γ_app = {gamma_r:.2e} - {gamma_g:.2e} = {gamma_a:.3e} K⁻¹ = {gamma_a*1e4:.3f} × 10⁻⁴ K⁻¹.",
                f"Option A: {gamma_a*1e4:.3f} × 10⁻⁴ K⁻¹",
                "Crucial trap: Container coefficient is usually given as α (linear)! Always multiply by 3 to get γ_vessel = 3α.",
                "Option B adds instead of subtracting; Option C ignores vessel expansion; Option D subtracts α instead of 3α.",
                "Medium", "phys-thermal-expansion")

    # -------------------------------------------------------------------------
    # Q106 to Q125: 20 HARD QUESTIONS
    # -------------------------------------------------------------------------
    # Advanced thermal expansion, combined composite rods, differential expansion gaps, temperature-dependent density floating
    for q_id in range(106, 126):
        h_idx = q_id - 106
        if h_idx < 10:
            # Composite rod with fixed length difference (L1 α1 = L2 α2)
            c_l1 = 40.0 + h_idx * 5.0
            a1 = 1.8e-5 # brass
            a2 = 1.2e-5 # steel
            # L1 * a1 = L2 * a2 => L2 = L1 * (a1 / a2)
            c_l2 = c_l1 * (a1 / a2)
            diff_l = c_l2 - c_l1

            add(q_id,
                f"A brass rod of length {c_l1:.1f} cm (α₁ = 1.8 × 10⁻⁵ K⁻¹) and a steel rod (α₂ = 1.2 × 10⁻⁵ K⁻¹) are combined such that the difference between their lengths remains constant at all temperatures. What must be the length of the steel rod at 0°C?",
                f"{c_l2:.1f} cm",
                f"{c_l1:.1f} cm",
                f"{c_l2 * 1.5:.1f} cm",
                f"{c_l2 * 0.8:.1f} cm",
                "A",
                "For the difference in lengths (L₂ - L₁) to be independent of temperature, the rate of expansion of both rods must be identical: ΔL₁ = ΔL₂ => L₁ α₁ ΔT = L₂ α₂ ΔT => L₁ α₁ = L₂ α₂.",
                f"L₁ = {c_l1:.1f} cm, α₁ = 1.8 × 10⁻⁵ K⁻¹, α₂ = 1.2 × 10⁻⁵ K⁻¹.",
                "L₁ α₁ = L₂ α₂ => L₂ = L₁ (α₁ / α₂)",
                f"1. To keep (L₂ - L₁) constant: d(L₂ - L₁)/dT = 0 => L₂ α₂ - L₁ α₁ = 0.\n2. Therefore, L₂ = L₁ × (α₁ / α₂) = {c_l1:.1f} × (1.8 × 10⁻⁵ / 1.2 × 10⁻⁵) = {c_l1:.1f} × 1.5 = {c_l2:.1f} cm.",
                f"Option A: {c_l2:.1f} cm",
                "Constant length difference condition: L₁ α₁ = L₂ α₂. The rod with smaller α must be proportionally longer!",
                "Option B sets lengths equal; Option C multiplies by 1.5 twice; Option D divides wrongly.",
                "Hard", "phys-thermal-expansion")
        else:
            # Thermal stress breaking force and constrained compound rod
            f_idx = h_idx - 10
            r_rad = 1.0 + f_idx * 0.2 # mm
            r_area = 3.14159 * (r_rad * 1e-3)**2
            y_comp = 2.0e11
            alpha_comp = 1.2e-5
            dt_comp = 50.0 + f_idx * 5.0
            force_comp = y_comp * r_area * alpha_comp * dt_comp

            add(q_id,
                f"A steel wire of radius {r_rad:.1f} mm is stretched tightly between two rigid immovable walls at 60°C. When cooled to {60 - dt_comp:.1f}°C, calculate the tension produced in the wire. (Take Y = 2.0 × 10¹¹ N/m², α = 1.2 × 10⁻⁵ K⁻¹)",
                f"{force_comp:.1f} N",
                f"{force_comp * 2.0:.1f} N",
                f"{force_comp * 0.5:.1f} N",
                f"{force_comp * 4.0:.1f} N",
                "A",
                "Tension in a cooled constrained wire is F = Y A α ΔT, where A = π r² is the circular cross-sectional area.",
                f"r = {r_rad:.1f} mm = {r_rad*1e-3:.4f} m, Y = 2.0 × 10¹¹ N/m², α = 1.2 × 10⁻⁵ K⁻¹, ΔT = {dt_comp:.1f} K.",
                "F = Y A α ΔT = Y (π r²) α ΔT",
                f"1. Area A = π ({r_rad*1e-3:.4f})² = {r_area:.4e} m².\n2. Tension F = (2.0 × 10¹¹) × ({r_area:.4e}) × (1.2 × 10⁻⁵) × {dt_comp:.1f} = {force_comp:.1f} N.",
                f"Option A: {force_comp:.1f} N",
                "Area A ∝ r². Doubling radius quadruples tension force for the exact same temperature drop!",
                "Option B doubles the force; Option C halves it; Option D quadruples it.",
                "Hard", "phys-thermal-expansion")

    return qs

if __name__ == "__main__":
    qs = get_part1_questions()
    print(f"Total Part 1 questions: {len(qs)}")
    easy = sum(1 for q in qs if q['difficulty'] == 'Easy')
    med = sum(1 for q in qs if q['difficulty'] == 'Medium')
    hard = sum(1 for q in qs if q['difficulty'] == 'Hard')
    print(f"Easy: {easy}, Medium: {med}, Hard: {hard}")
