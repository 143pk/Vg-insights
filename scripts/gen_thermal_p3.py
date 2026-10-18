#!/usr/bin/env python3
"""
Full Generator for Thermal Properties of Matter - Part 3 (Q251 to Q375)
Distribution: Exactly 30 Easy, 65 Medium, 30 Hard = 125 MCQs
Topics:
- Modes of Heat Transfer: Conduction, Convection, and Radiation (distinctions, mechanisms)
- Thermal Conductivity k (definition, units W/(m·K), dimensions [M¹ L¹ T⁻³ K⁻¹])
- Steady-state heat current H = dQ/dt = k A (T₁ - T₂) / L
- Temperature gradient dT/dx
- Thermal Resistance R_th = L / (k A)
- Composite slabs and rods in series: R_eq = R₁ + R₂, interface temperature T_junction
- Composite slabs and rods in parallel: K_eq = (k₁ A₁ + k₂ A₂) / (A₁ + A₂)
- Convection (natural and forced, trade winds, sea breeze, land breeze)
- Newton's Law of Cooling: dQ/dt = -K(T - T₀) and approx form (T₁ - T₂)/t = K' [(T₁ + T₂)/2 - T₀]
"""

import json

def get_part3_questions():
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
    # Q251 to Q280: 30 EASY QUESTIONS
    # -------------------------------------------------------------------------
    easy_heat_transfer = [
        ("The SI unit of thermal conductivity k is:",
         "W/(m·K)", "J/(m·s)", "W·m/K", "J/(kg·K)", "A",
         "Thermal conductivity k relates heat current H to temperature gradient.",
         "Definition of thermal conductivity from Fourier's law of heat conduction.",
         "H = \\frac{dQ}{dt} = k A \\frac{\\Delta T}{L} \\implies k = \\frac{H L}{A \\Delta T}",
         "1. Unit of heat current H (dQ/dt) is Watts (W = J/s).\n2. Length L is meters (m), Area A is m², and ΔT is Kelvin (K).\n3. [k] = W · m / (m² · K) = W / (m · K) = J / (s · m · K).",
         "Option A: W/(m·K)",
         "Common NEET unit trap: Thermal conductivity is W/(m·K); specific heat capacity is J/(kg·K).",
         "B misses temperature in denominator; C multiplies by length; D is specific heat capacity.", "Easy", "phys-heat-transfer"),

        ("The dimensional formula of thermal conductivity k is:",
         "[M¹ L¹ T⁻³ K⁻¹]", "[M¹ L² T⁻³ K⁻¹]", "[M¹ L¹ T⁻² K⁻¹]", "[M⁰ L² T⁻² K⁻¹]", "A",
         "Dimensional analysis of k = (Q · L) / (A · t · ΔT).",
         "Q = [M¹ L² T⁻²], L = [L¹], A = [L²], t = [T¹], ΔT = [K¹].",
         "[k] = \\frac{[M^1 L^2 T^{-2}] [L^1]}{[L^2] [T^1] [K^1]} = [M^1 L^1 T^{-3} K^{-1}]",
         "1. Heat Q has dimension [M¹ L² T⁻²].\n2. Q/t (heat current) has dimension [M¹ L² T⁻³].\n3. [k] = [M¹ L² T⁻³] · [L] / ([L²] · [K]) = [M¹ L¹ T⁻³ K⁻¹].",
         "Option A: [M¹ L¹ T⁻³ K⁻¹]",
         "Thermal conductivity has L¹ and T⁻³ (like power density per temperature gradient).",
         "B has L²; C has T⁻²; D is specific heat.", "Easy", "phys-heat-transfer"),

        ("Thermal resistance R_th of a conducting slab of thickness L, cross-sectional area A, and thermal conductivity k is given by:",
         "L / (k A)", "k A / L", "k L / A", "A / (k L)", "A",
         "Thermal resistance is defined analogously to electrical resistance R = ρ L / A = L / (σ A).",
         "Analogy between electric conduction and thermal conduction.",
         "R_{th} = \\frac{\\Delta T}{H} = \\frac{L}{k A}",
         "1. By Ohm's law analogy: Current I = ΔV / R_el; Heat current H = ΔT / R_th.\n2. Since H = k A ΔT / L, we have ΔT / H = L / (k A).\n3. Therefore, thermal resistance R_th = L / (k A).",
         "Option A: L / (k A)",
         "Remember: Thermal resistance R_th = Length / (Conductivity × Area). Longer slab -> More resistance; Thicker/wider slab -> Less resistance.",
         "B is thermal conductance (inverse of resistance); C and D have inverted factors.", "Easy", "phys-heat-transfer"),

        ("The SI unit of thermal resistance is:",
         "K/W (or °C/W)", "W/K", "J/K", "W/(m·K)", "A",
         "Thermal resistance is temperature difference per unit heat current: R_th = ΔT / H.",
         "Definition of thermal resistance.",
         "[R_{th}] = \\frac{[\\Delta T]}{[H]} = \\frac{\\text{K}}{\\text{W}}",
         "1. Temperature difference ΔT is measured in Kelvin (K).\n2. Heat current H is measured in Watts (W = J/s).\n3. Therefore, [R_th] = K/W (Kelvin per Watt).",
         "Option A: K/W (or °C/W)",
         "Electrical resistance is V/A = Ohm; Thermal resistance is K/W (thermal ohm).",
         "B is thermal conductance; C is heat capacity; D is thermal conductivity.", "Easy", "phys-heat-transfer"),

        ("In which mode of heat transfer is no material medium required for propagation?",
         "Radiation", "Conduction", "Convection", "Advection", "A",
         "Radiation transfers energy via electromagnetic waves, which travel through vacuum at the speed of light.",
         "Comparison of the three modes of heat transfer.",
         "Electromagnetic radiation requires zero intervening medium.",
         "1. Conduction requires microscopic lattice vibrations and free electron collisions in a medium.\n2. Convection requires actual bulk movement of fluid molecules.\n3. Radiation propagates as electromagnetic waves (photons) through vacuum (e.g., sunlight reaching Earth across outer space).",
         "Option A: Radiation",
         "Radiation is the fastest mode of heat transfer and the only one that operates across vacuum.",
         "B and C strictly require a material medium; D is horizontal convective bulk fluid flow.", "Easy", "phys-heat-transfer"),

        ("Sea breeze and land breeze are coastal meteorological phenomena caused primarily by:",
         "Natural convection in air due to differential heating of land and water",
         "Thermal conduction through beach sand",
         "Radiation directly reflected from ocean waves",
         "Sublimation of coastal sea salt", "A",
         "Water has a much higher specific heat capacity than land (soil/rock). Land heats up and cools down much faster than the sea, establishing convective air currents.",
         "Mechanism of coastal breezes.",
         "Convection currents generated by temperature and density differences.",
         "1. During the daytime, land heats up faster than water. Air above land expands, becomes less dense, and rises.\n2. Cooler, denser air from the sea flows inland to replace it, forming a SEA BREEZE.\n3. At night, land cools faster than the sea. The warm air above the sea rises, and cooler air flows from land to sea, forming a LAND BREEZE.\n4. Both are classic examples of natural convection.",
         "Option A: Natural convection in air due to differential heating of land and water",
         "Daytime = Sea breeze (sea to land). Nighttime = Land breeze (land to sea). Driven by convection!",
         "Options B, C, and D are secondary or physically incorrect.", "Easy", "phys-heat-transfer"),

        ("Newton's law of cooling states that the rate of loss of heat of a body is directly proportional to:",
         "The temperature excess of the body over that of its surroundings",
         "The fourth power of the absolute temperature of the body",
         "The square of the temperature of the surroundings",
         "The mass of the body divided by its surface area", "A",
         "Newton's law of cooling is an approximation of Stefan-Boltzmann radiation for small temperature differences (ΔT << T₀).",
         "Newton's law of cooling statement.",
         "\\frac{dQ}{dt} = -k (T - T_0)",
         "1. For small temperature difference between body temperature T and ambient surrounding temperature T₀:\n2. Rate of heat loss dQ/dt ∝ (T - T₀).\n3. Here (T - T₀) is known as the excess temperature.",
         "Option A: The temperature excess of the body over that of its surroundings",
         "Newton's law of cooling is strictly valid ONLY for small temperature differences (typically < 30°C) with constant surrounding temperature and cooling mainly by natural convection.",
         "B is Stefan's fourth-power law for large temperature differences; C and D are incorrect.", "Easy", "phys-heat-transfer"),

        ("The temperature of a body in steady state of thermal conduction:",
         "Decreases linearly along the direction of heat flow, but remains constant with time at any given cross-section",
         "Increases continuously with time at all points",
         "Remains identical at all points along the conductor",
         "Oscillates sinusoidally with time", "A",
         "In steady state, no heat is absorbed by any section of the rod; heat entering equals heat leaving.",
         "Definition of steady state in 1D heat conduction.",
         "\\frac{\\partial T}{\\partial t} = 0, \\text{ while } \\frac{dT}{dx} = \\text{constant} < 0",
         "1. During initial transient heating, each section absorbs heat to raise its own temperature.\n2. Once steady state is achieved, the temperature at any fixed point no longer changes with time (∂T/∂t = 0).\n3. However, temperature varies continuously along the length, decreasing uniformly from the hot end to the cold end.",
         "Option A: Decreases linearly along the direction of heat flow, but remains constant with time at any given cross-section",
         "Steady state means time derivative is zero (∂T/∂t = 0), NOT that the temperature gradient is zero!",
         "B describes transient heating; C describes thermal equilibrium (no heat flow); D is unphysical.", "Easy", "phys-heat-transfer"),

        ("Which of the following metals has the highest thermal conductivity at room temperature?",
         "Silver", "Copper", "Aluminum", "Iron", "A",
         "Silver has the highest thermal and electrical conductivity among all metals due to its high free-electron density and low lattice scattering.",
         "Thermal conductivity values of common metals.",
         "k_{silver} \\approx 420\\text{ W/(m·K)} > k_{copper} \\approx 385\\text{ W/(m·K)} > k_{aluminum} \\approx 205\\text{ W/(m·K)}",
         "1. Silver has k ≈ 420 W/(m·K).\n2. Copper has k ≈ 385 W/(m·K).\n3. Aluminum has k ≈ 205 W/(m·K).\n4. Iron has k ≈ 80 W/(m·K).\n5. Silver is the best conductor of heat.",
         "Option A: Silver",
         "Thermal conductivity order: Silver > Copper > Gold > Aluminum > Iron.",
         "Copper is widely used commercially because silver is too expensive, but silver remains the highest.", "Easy", "phys-heat-transfer"),

        ("Cooking utensils are often provided with wooden or ebonite handles because:",
         "Wood and ebonite have extremely low thermal conductivities (good thermal insulators)",
         "Wood has a high specific heat capacity",
         "Wood conducts heat faster to the hand",
         "Wood prevents thermal expansion of the pan", "A",
         "Bad conductors of heat prevent burn injuries by dramatically reducing heat conduction from the pan to the user's hand.",
         "Practical application of thermal insulators.",
         "H = k A \\frac{\\Delta T}{L} \\approx 0 \\quad \\text{because } k \\text{ is tiny}",
         "1. Metals conduct heat rapidly (high k), making bare metal handles scalding hot.\n2. Wood and ebonite are excellent thermal insulators (low k ≈ 0.1 W/(m·K)).\n3. The rate of heat conduction through the handle is virtually negligible, keeping it safe to touch.",
         "Option A: Wood and ebonite have extremely low thermal conductivities (good thermal insulators)",
         "Low thermal conductivity = Insulator. High thermal conductivity = Conductor.",
         "Options B, C, and D are incorrect explanations.", "Easy", "phys-heat-transfer")
    ]

    for idx, t in enumerate(easy_heat_transfer):
        q_num = 251 + idx
        add(q_num, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14])

    # Q261 to Q280: 20 more easy questions on conduction, convection, and cooling
    for q_id in range(261, 281):
        idx = q_id - 261
        l_cm = 20.0 + idx * 2.0
        t_hot = 100.0
        t_cold = 0.0
        grad = (t_hot - t_cold) / (l_cm / 100.0) # °C/m

        add(q_id,
            f"A metal rod of length {l_cm:.1f} cm has its ends maintained at 100°C and 0°C in steady state. What is the temperature gradient along the rod?",
            f"-{grad:.1f} °C/m",
            f"-{grad * 0.01:.1f} °C/m",
            f"+{grad * 2.0:.1f} °C/m",
            f"-{grad * 0.5:.1f} °C/m",
            "A",
            "Temperature gradient is defined as the rate of change of temperature with distance along the heat flow path: dT/dx = (T₂ - T₁) / L.",
            f"T₁ = 100°C, T₂ = 0°C, L = {l_cm:.1f} cm = {l_cm/100:.3f} m.",
            "\\frac{dT}{dx} = \\frac{T_2 - T_1}{L}",
            f"1. Change in temperature: ΔT = 0 - 100 = -100°C.\n2. Length in meters: L = {l_cm/100:.3f} m.\n3. Temperature gradient: dT/dx = -100 / {l_cm/100:.3f} = -{grad:.1f} °C/m (or K/m).\n4. The negative sign indicates temperature falls in the direction of heat flow.",
            f"Option A: -{grad:.1f} °C/m",
            "Always convert centimeters to meters in temperature gradient calculations: 100 cm = 1 m!",
            "Option B forgets cm to m conversion; Option C has positive sign; Option D halves the value.",
            "Easy", "phys-heat-transfer")

    # -------------------------------------------------------------------------
    # Q281 to Q345: 65 MEDIUM QUESTIONS
    # -------------------------------------------------------------------------
    for q_id in range(281, 346):
        idx = q_id - 281
        if idx < 25:
            # Steady state heat current through uniform rod
            k_val = 400.0 if idx % 2 == 0 else 200.0 # Cu or Al
            area_cm2 = 5.0 + idx * 0.5
            area_m2 = area_cm2 * 1e-4
            len_m = 0.5 + idx * 0.02
            dt_k = 80.0
            h_watts = k_val * area_m2 * dt_k / len_m

            add(q_id,
                f"A uniform conducting rod of cross-sectional area {area_cm2:.1f} cm² and length {len_m:.2f} m has thermal conductivity k = {k_val:.0f} W/(m·K). If its ends are maintained at temperatures of 100°C and 20°C, calculate the rate of heat flow through the rod in steady state.",
                f"{h_watts:.2f} W",
                f"{h_watts * 2.0:.2f} W",
                f"{h_watts * 0.5:.2f} W",
                f"{h_watts * 10000:.2f} W",
                "A",
                "Fourier's law of thermal conduction: Heat current H = k A (T₁ - T₂) / L.",
                f"k = {k_val:.0f} W/(m·K), A = {area_cm2:.1f} cm² = {area_m2:.4e} m², L = {len_m:.2f} m, ΔT = 80 K.",
                "H = k A \\frac{\\Delta T}{L}",
                f"1. Area in m²: A = {area_cm2:.1f} × 10⁻⁴ m².\n2. Temperature difference: ΔT = 100 - 20 = 80 K.\n3. Heat current H = ({k_val:.0f}) × ({area_m2:.4e}) × (80) / ({len_m:.2f}) = {h_watts:.2f} W (J/s).",
                f"Option A: {h_watts:.2f} W",
                "Be vigilant about area conversion: 1 cm² = 10⁻⁴ m² (NOT 10⁻² m²!).",
                "Option B doubles the heat current; Option C halves it; Option D forgets the 10⁻⁴ area conversion.",
                "Medium", "phys-heat-transfer")

        elif idx < 45:
            # Composite slabs in series (Interface temperature)
            c_idx = idx - 25
            k1 = 200.0 + c_idx * 10.0 # slab 1
            k2 = 100.0 + c_idx * 5.0 # slab 2
            l1 = 0.1 # m
            l2 = 0.1 # m (equal lengths)
            t1 = 100.0
            t2 = 0.0
            # H1 = H2 => k1 * A * (T1 - Tj) / l1 = k2 * A * (Tj - T2) / l2
            # For equal lengths: k1 * (100 - Tj) = k2 * (Tj - 0)
            # (k1 + k2) Tj = 100 k1 => Tj = 100 * k1 / (k1 + k2)
            t_junction = 100.0 * k1 / (k1 + k2)

            add(q_id,
                f"Two slabs of equal thickness and identical cross-sectional area are placed in perfect thermal contact in series. The thermal conductivities are k₁ = {k1:.0f} W/(m·K) and k₂ = {k2:.0f} W/(m·K). If the outer face of the first slab is at 100°C and that of the second slab is at 0°C, what is the temperature at the interface in steady state?",
                f"{t_junction:.2f}°C",
                f"50.00°C",
                f"{t_junction * 0.8:.2f}°C",
                f"{t_junction * 1.2:.2f}°C",
                "A",
                "In series steady state, heat current through slab 1 equals heat current through slab 2: H₁ = H₂ => k₁ A (T₁ - T_j) / L₁ = k₂ A (T_j - T₂) / L₂.",
                f"k₁ = {k1:.0f} W/(m·K), k₂ = {k2:.0f} W/(m·K), L₁ = L₂, T₁ = 100°C, T₂ = 0°C.",
                "T_j = \\frac{k_1 T_1 + k_2 T_2}{k_1 + k_2}",
                f"1. Heat current through slab 1: H = k₁ A (100 - T_j) / L.\n2. Heat current through slab 2: H = k₂ A (T_j - 0) / L.\n3. Equating both: k₁(100 - T_j) = k₂ T_j.\n4. (k₁ + k₂) T_j = 100 k₁ => T_j = (100 × {k1:.0f}) / ({k1 + k2:.0f}) = {t_junction:.2f}°C.",
                f"Option A: {t_junction:.2f}°C",
                "Shortcut: Interface temperature is closer to the end of the BETTER conductor (higher k)!",
                "Option B is the unweighted average; Options C and D are incorrect ratios.",
                "Medium", "phys-heat-transfer")

        else:
            # Newton's law of cooling calculations
            n_idx = idx - 45
            t_init = 80.0
            t_after = 60.0 - n_idx * 1.0
            t_surr = 20.0
            time_min = 5.0
            # Average cooling rate: (t_init - t_after) / time_min = K' * [ (t_init + t_after)/2 - t_surr ]
            t_avg1 = (t_init + t_after) / 2.0
            rate1 = (t_init - t_after) / time_min
            k_prime = rate1 / (t_avg1 - t_surr)
            # Find time to cool further from t_after to (t_after - 10)
            t_next = t_after - 10.0
            t_avg2 = (t_after + t_next) / 2.0
            rate2 = k_prime * (t_avg2 - t_surr)
            time_next = 10.0 / rate2

            add(q_id,
                f"A liquid cools from 80°C to {t_after:.0f}°C in 5 minutes in a room maintained at 20°C. Using Newton's law of cooling, how long will it take to cool from {t_after:.0f}°C to {t_next:.0f}°C?",
                f"{time_next:.2f} minutes",
                f"5.00 minutes",
                f"{time_next * 0.6:.2f} minutes",
                f"{time_next * 1.8:.2f} minutes",
                "A",
                "Approximate form of Newton's law of cooling: Rate of fall of temperature (T₁ - T₂)/t = K' [(T₁ + T₂)/2 - T₀].",
                f"Stage 1: 80°C to {t_after:.0f}°C in 5 min, T₀ = 20°C. Stage 2: {t_after:.0f}°C to {t_next:.0f}°C.",
                "\\frac{T_1 - T_2}{t} = K' \\left(\\frac{T_1 + T_2}{2} - T_0\\right)",
                f"1. Stage 1: (80 - {t_after:.0f}) / 5 = K' [({80 + t_after:.0f})/2 - 20] => {rate1:.2f} = K' ({t_avg1 - t_surr:.1f}) => K' = {k_prime:.4f} min⁻¹.\n2. Stage 2: ({t_after:.0f} - {t_next:.0f}) / t₂ = K' [({t_after + t_next:.0f})/2 - 20].\n3. 10 / t₂ = ({k_prime:.4f}) × ({t_avg2 - t_surr:.1f}) = {rate2:.3f} °C/min.\n4. t₂ = 10 / {rate2:.3f} = {time_next:.2f} minutes.",
                f"Option A: {time_next:.2f} minutes",
                "As the body cools, its excess temperature over surroundings decreases, so cooling rate SLOWS DOWN. Thus taking MORE time for equal temperature drops!",
                "Option B assumes linear cooling rate; Option C predicts faster cooling; Option D overestimates.",
                "Medium", "phys-heat-transfer")

    # -------------------------------------------------------------------------
    # Q346 to Q375: 30 HARD QUESTIONS
    # -------------------------------------------------------------------------
    # Composite slabs equivalent conductivity, series and parallel rods, thermal resistance network
    for q_id in range(346, 376):
        h_idx = q_id - 346
        if h_idx < 15:
            # Equivalent thermal conductivity of two slabs of equal thickness L in series
            k1_s = 100.0 + h_idx * 10.0
            k2_s = 200.0 + h_idx * 15.0
            # R_eq = R1 + R2 => 2L / (K_eq * A) = L / (k1 * A) + L / (k2 * A)
            # 2 / K_eq = 1/k1 + 1/k2 => K_eq = 2 k1 k2 / (k1 + k2) (Harmonic mean!)
            k_eq_series = 2.0 * k1_s * k2_s / (k1_s + k2_s)

            add(q_id,
                f"Two slabs of identical cross-sectional area and equal thickness are joined in series. If their thermal conductivities are k₁ = {k1_s:.0f} W/(m·K) and k₂ = {k2_s:.0f} W/(m·K), what is the equivalent thermal conductivity k_eq of the composite combination?",
                f"{k_eq_series:.2f} W/(m·K)",
                f"{(k1_s + k2_s)/2:.2f} W/(m·K)",
                f"{k1_s * k2_s / (k1_s + k2_s):.2f} W/(m·K)",
                f"{2 * (k1_s + k2_s):.2f} W/(m·K)",
                "A",
                "Thermal resistances in series add directly: R_eq = R₁ + R₂. For equal thickness slabs, the equivalent thermal conductivity is the harmonic mean of the individual conductivities.",
                f"k₁ = {k1_s:.0f} W/(m·K), k₂ = {k2_s:.0f} W/(m·K), L₁ = L₂ = L, Total thickness = 2L.",
                "\\frac{2L}{k_{\\text{eq}} A} = \\frac{L}{k_1 A} + \\frac{L}{k_2 A} \\implies k_{\\text{eq}} = \\frac{2 k_1 k_2}{k_1 + k_2}",
                f"1. Total thermal resistance: R_eq = R₁ + R₂.\n2. (2L) / (k_eq A) = (L / k₁ A) + (L / k₂ A).\n3. Canceling L/A: 2 / k_eq = (1/k₁) + (1/k₂) = (k₁ + k₂) / (k₁ k₂).\n4. Therefore, k_eq = 2 k₁ k₂ / (k₁ + k₂) = 2 × ({k1_s:.0f} × {k2_s:.0f}) / ({k1_s + k2_s:.0f}) = {k_eq_series:.2f} W/(m·K).",
                f"Option A: {k_eq_series:.2f} W/(m·K)",
                "Series composite slabs = HARMONIC MEAN: k_eq = 2 k₁ k₂ / (k₁ + k₂). Parallel slabs = ARITHMETIC MEAN: k_eq = (k₁ + k₂) / 2.",
                "Option B is for parallel connection (arithmetic mean); Option C misses the factor of 2; Option D is arbitrary.",
                "Hard", "phys-heat-transfer")
        else:
            # Parallel composite slab equivalent conductivity
            p_idx = h_idx - 15
            k1_p = 150.0 + p_idx * 10.0
            k2_p = 300.0 + p_idx * 20.0
            # Parallel: H_tot = H1 + H2 => K_eq (2A) ΔT / L = k1 A ΔT / L + k2 A ΔT / L
            # K_eq = (k1 + k2) / 2
            k_eq_parallel = (k1_p + k2_p) / 2.0

            add(q_id,
                f"Two slabs of equal thickness L and equal cross-sectional area A are connected in parallel between two thermal reservoirs at temperatures T₁ and T₂. If their conductivities are k₁ = {k1_p:.0f} W/(m·K) and k₂ = {k2_p:.0f} W/(m·K), what is the effective thermal conductivity of the combination?",
                f"{k_eq_parallel:.2f} W/(m·K)",
                f"{2.0 * k1_p * k2_p / (k1_p + k2_p):.2f} W/(m·K)",
                f"{k1_p + k2_p:.2f} W/(m·K)",
                f"{(k1_p * k2_p)**0.5:.2f} W/(m·K)",
                "A",
                "In parallel, heat flows through both slabs independently under the same temperature difference ΔT. Total heat current H_tot = H₁ + H₂.",
                f"k₁ = {k1_p:.0f} W/(m·K), k₂ = {k2_p:.0f} W/(m·K), Total area = 2A, same thickness L.",
                "H_{\\text{tot}} = H_1 + H_2 \\implies k_{\\text{eq}} (2A) \\frac{\\Delta T}{L} = k_1 A \\frac{\\Delta T}{L} + k_2 A \\frac{\\Delta T}{L} \\implies k_{\\text{eq}} = \\frac{k_1 + k_2}{2}",
                f"1. Total heat current: H = H₁ + H₂.\n2. k_eq (2A) (ΔT/L) = k₁ A (ΔT/L) + k₂ A (ΔT/L).\n3. Canceling common factors: 2 k_eq = k₁ + k₂.\n4. k_eq = (k₁ + k₂) / 2 = ({k1_p:.0f} + {k2_p:.0f}) / 2 = {k_eq_parallel:.2f} W/(m·K).",
                f"Option A: {k_eq_parallel:.2f} W/(m·K)",
                "Parallel = Arithmetic mean: k_eq = (k₁ + k₂) / 2. Series = Harmonic mean: k_eq = 2 k₁ k₂ / (k₁ + k₂).",
                "Option B is for series connection; Option C forgets to divide by total area 2A; Option D is geometric mean.",
                "Hard", "phys-heat-transfer")

    return qs

if __name__ == "__main__":
    qs = get_part3_questions()
    print(f"Total Part 3 questions: {len(qs)}")
    easy = sum(1 for q in qs if q['difficulty'] == 'Easy')
    med = sum(1 for q in qs if q['difficulty'] == 'Medium')
    hard = sum(1 for q in qs if q['difficulty'] == 'Hard')
    print(f"Easy: {easy}, Medium: {med}, Hard: {hard}")
