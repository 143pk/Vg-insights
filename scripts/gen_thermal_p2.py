#!/usr/bin/env python3
"""
Full Generator for Thermal Properties of Matter - Part 2 (Q126 to Q250)
Distribution: Exactly 35 Easy, 65 Medium, 25 Hard = 125 MCQs
Topics:
- Specific Heat Capacity and Molar Heat Capacity (c, C_m, units and dimensions)
- Water Equivalent and Heat Capacity (W = m c / c_w, S = m c)
- Principle of Mixtures and Calorimetry (Heat lost = Heat gained)
- Latent Heat of Fusion (L_f = 80 cal/g = 3.36 × 10⁵ J/kg)
- Latent Heat of Vaporization (L_v = 540 cal/g = 2.26 × 10⁶ J/kg)
- Phase changes, ice-water-steam mixing problems, final equilibrium temperature
- Heating curves, temperature vs. time graphs, slopes (dT/dt = P / (m c))
"""

import json

def get_part2_questions():
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
    # Q126 to Q160: 35 EASY QUESTIONS
    # -------------------------------------------------------------------------
    easy_calorimetry = [
        ("The SI unit of specific heat capacity is:",
         "J/(kg·K)", "J/kg", "J/K", "cal/(g·°C)", "A",
         "Specific heat capacity is heat absorbed per unit mass per unit temperature rise.",
         "Definition of specific heat capacity c.",
         "c = ΔQ / (m ΔT)",
         "1. ΔQ is measured in Joules (J).\n2. Mass m is measured in kilograms (kg).\n3. Temperature change ΔT is measured in Kelvin (K).\n4. Therefore, [c] = J/(kg·K).",
         "Option A: J/(kg·K)",
         "Specific heat capacity is per unit mass J/(kg·K); latent heat is per unit mass without temperature J/kg; heat capacity is for whole body J/K.",
         "B is latent heat unit; C is heat capacity unit; D is CGS practical unit.", "Easy", "phys-thermal-expansion"),

        ("The dimensional formula of specific heat capacity is:",
         "[M⁰ L² T⁻² K⁻¹]", "[M¹ L² T⁻² K⁻¹]", "[M⁰ L¹ T⁻² K⁻¹]", "[M¹ L⁰ T⁻² K⁻¹]", "A",
         "Dimensional analysis of c = Q / (m ΔT).",
         "Q has dimensions [M¹ L² T⁻²], m has [M¹], ΔT has [K¹].",
         "[c] = [M¹ L² T⁻²] / ([M¹] [K¹]) = [M⁰ L² T⁻² K⁻¹]",
         "1. Heat energy Q: [M¹ L² T⁻²].\n2. Denominator m ΔT: [M¹ K¹].\n3. Dividing: [M¹⁻¹ L² T⁻² K⁻¹] = [M⁰ L² T⁻² K⁻¹].",
         "Option A: [M⁰ L² T⁻² K⁻¹]",
         "Notice mass dimension M is 0 because it is divided by mass!",
         "B retains mass M¹ (this is heat capacity); C has L¹; D has L⁰.", "Easy", "phys-thermal-expansion"),

        ("The specific heat capacity of water in SI units is approximately:",
         "4186 J/(kg·K)", "1000 J/(kg·K)", "2100 J/(kg·K)", "336000 J/(kg·K)", "A",
         "1 calorie is defined as 4.186 J, and 1 cal/(g·°C) converts to 4186 J/(kg·K).",
         "Standard physical constant: specific heat of liquid water.",
         "c_water = 1 cal/(g·°C) = 4.186 J / (10⁻³ kg · K) = 4186 J/(kg·K)",
         "1. 1 cal = 4.186 J.\n2. In SI units: c = 4.186 J / (0.001 kg × 1 K) = 4186 J/(kg·K).\n3. Often taken as 4200 J/(kg·K) for simplified calculations.",
         "Option A: 4186 J/(kg·K)",
         "Water has exceptionally high specific heat capacity, making it an ideal coolant in automobile radiators and industrial engines.",
         "B is 1000; C is specific heat of ice/steam (2100 J/(kg·K)); D is latent heat of fusion of ice.", "Easy", "phys-thermal-expansion"),

        ("The specific heat capacity of ice is approximately:",
         "2100 J/(kg·K) (or 0.5 cal/(g·°C))", "4200 J/(kg·K)", "336000 J/(kg·K)", "1000 J/(kg·K)", "A",
         "Solid ice has approximately half the specific heat capacity of liquid water.",
         "Specific heat capacity of ice.",
         "c_ice ≈ 0.5 cal/(g·°C) = 2.1 × 10³ J/(kg·K)",
         "1. The molecular lattice of ice requires less energy per degree temperature rise than liquid water.\n2. c_ice ≈ 0.5 cal/(g·°C) = 2100 J/(kg·K).\n3. Steam also has c_steam ≈ 0.48 cal/(g·°C) ≈ 2000 J/(kg·K).",
         "Option A: 2100 J/(kg·K) (or 0.5 cal/(g·°C))",
         "Remember: c_ice ≈ c_steam ≈ (1/2) c_water!",
         "B is liquid water; C is latent heat of fusion; D is 1000.", "Easy", "phys-thermal-expansion"),

        ("The SI unit of latent heat (fusion or vaporization) is:",
         "J/kg", "J/(kg·K)", "J/K", "W/m²", "A",
         "Latent heat is the heat required per unit mass to change phase at constant temperature.",
         "Definition of latent heat L = Q / m.",
         "[L] = [Q] / [m] = J / kg",
         "1. Latent heat involves phase change at constant temperature (ΔT = 0).\n2. Heat absorbed is Q = m L => L = Q / m.\n3. Unit is Joules per kilogram (J/kg).",
         "Option A: J/kg",
         "Latent heat has NO temperature in its denominator because temperature remains constant during phase change!",
         "B has Kelvin in denominator; C is heat capacity; D is intensity/flux.", "Easy", "phys-thermal-expansion"),

        ("The dimensional formula of latent heat is:",
         "[M⁰ L² T⁻²]", "[M¹ L² T⁻²]", "[M⁰ L² T⁻² K⁻¹]", "[M¹ L¹ T⁻²]", "A",
         "Latent heat L = Energy / Mass.",
         "Q = [M¹ L² T⁻²], m = [M¹].",
         "[L] = [M¹ L² T⁻²] / [M¹] = [M⁰ L² T⁻²]",
         "1. Dimensions of energy: [M¹ L² T⁻²].\n2. Dimensions of mass: [M¹].\n3. [L] = [M¹ L² T⁻²] / [M¹] = [M⁰ L² T⁻²].",
         "Option A: [M⁰ L² T⁻²]",
         "Latent heat has the exact same dimensions as square of velocity or gravitational potential [L² T⁻²]!",
         "B includes mass M¹; C includes temperature K⁻¹; D is force.", "Easy", "phys-thermal-expansion"),

        ("The latent heat of fusion of ice in CGS and SI units is:",
         "80 cal/g and 3.36 × 10⁵ J/kg", "540 cal/g and 2.26 × 10⁶ J/kg", "1 cal/g and 4186 J/kg", "100 cal/g and 4.2 × 10⁵ J/kg", "A",
         "Standard physical constant: L_f for ice at 0°C.",
         "L_f of ice.",
         "L_f = 80 cal/g = 80 × 4.186 × 10³ J/kg = 3.36 × 10⁵ J/kg",
         "1. In CGS units, 80 calories are needed to melt 1 g of ice at 0°C.\n2. In SI: 80 × 4.186 J / (10⁻³ kg) = 3.36 × 10⁵ J/kg.",
         "Option A: 80 cal/g and 3.36 × 10⁵ J/kg",
         "L_fusion = 80 cal/g; L_vaporization = 540 cal/g.",
         "B is latent heat of vaporization of water; C is calorie definition; D is arbitrary.", "Easy", "phys-thermal-expansion"),

        ("The latent heat of vaporization of water is approximately:",
         "540 cal/g (or 2.26 × 10⁶ J/kg)", "80 cal/g (or 3.36 × 10⁵ J/kg)", "100 cal/g (or 4.2 × 10⁵ J/kg)", "1000 cal/g (or 4.2 × 10⁶ J/kg)", "A",
         "Heat required to convert 1 g of water at 100°C into steam at 100°C.",
         "L_v of steam.",
         "L_v = 540 cal/g = 2.26 × 10⁶ J/kg",
         "1. Converting liquid water to steam requires breaking intermolecular hydrogen bonds and doing expansion work against atmospheric pressure.\n2. L_v ≈ 540 cal/g ≈ 2.26 × 10⁶ J/kg.\n3. Notice L_v is nearly 6.75 times larger than L_f (80 cal/g).",
         "Option A: 540 cal/g (or 2.26 × 10⁶ J/kg)",
         "Steam burns are far more severe than boiling water burns because steam releases an extra 540 cal/g upon condensing!",
         "B is latent heat of fusion; C and D are incorrect values.", "Easy", "phys-thermal-expansion"),

        ("Why does steam at 100°C cause much more severe burns than liquid water at 100°C?",
         "Steam contains extra latent heat of vaporization (540 cal/g) that is released upon condensation on the skin",
         "Steam has a higher temperature than boiling water",
         "Steam has a much higher specific heat capacity than liquid water",
         "Steam is under high pressure on the skin", "A",
         "Phase change from steam to water at 100°C releases latent heat of condensation Q = m L_v = 540 cal per gram before the resulting water cools down.",
         "Both water and steam are at 100°C.",
         "Q_steam = m L_v + m c ΔT, whereas Q_water = m c ΔT",
         "1. 1 g of water at 100°C cooling to body temperature (37°C) releases: Q_water = 1 × 1 × (100 - 37) = 63 cal.\n2. 1 g of steam at 100°C first condenses, releasing L_v = 540 cal, and then cools, releasing 63 cal.\n3. Total heat released by steam = 540 + 63 = 603 cal (nearly 10 times more heat!).",
         "Option A: Steam contains extra latent heat of vaporization (540 cal/g) that is released upon condensation on the skin",
         "NEET classic conceptual question: Latent heat makes steam burns 10x more damaging than water burns at 100°C.",
         "B is false (both are at 100°C); C is false (c_water > c_steam); D is irrelevant.", "Easy", "phys-thermal-expansion"),

        ("The water equivalent of a calorimeter of mass 100 g and specific heat capacity 0.1 cal/(g·°C) is:",
         "10 g", "100 g", "1000 g", "1 g", "A",
         "Water equivalent W is the mass of water that absorbs or emits the same amount of heat as the body for the same temperature change.",
         "Mass of calorimeter m = 100 g, specific heat c = 0.1 cal/(g·°C).",
         "W = m × c / c_w = m × c (in CGS where c_w = 1 cal/(g·°C))",
         "1. Heat capacity of calorimeter: S = m c = 100 g × 0.1 cal/(g·°C) = 10 cal/°C.\n2. Water equivalent: W = S / c_w = 10 cal/°C / (1 cal/(g·°C)) = 10 g.",
         "Option A: 10 g",
         "In CGS units, Water Equivalent (in grams) is simply m × c!",
         "B is the calorimeter mass; C multiplies by 10; D divides by 100.", "Easy", "phys-thermal-expansion")
    ]

    for idx, t in enumerate(easy_calorimetry):
        q_num = 126 + idx
        add(q_num, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14])

    # Q136 to Q160: 25 more easy calorimetry and temperature graph questions
    more_easy = [
        ("During a phase change of a pure substance at constant pressure, its temperature:",
         "Remains constant", "Increases linearly", "Decreases exponentially", "Fluctuates sinusoidally", "A",
         "During phase transition, all absorbed thermal energy is used to overcome intermolecular binding forces rather than increasing kinetic energy.",
         "Phase change (melting or boiling) of a pure substance.",
         "ΔQ = m L, while ΔT = 0.",
         "1. Temperature is a measure of average molecular kinetic energy.\n2. Latent heat changes molecular potential energy (bond configurations), not kinetic energy.\n3. Therefore, temperature remains strictly constant until the phase change is complete.",
         "Option A: Remains constant",
         "Horizontal plateaus on heating curves correspond to phase changes (melting point and boiling point).",
         "B occurs during sensible heating; C occurs during cooling; D is unphysical.", "Easy", "phys-thermal-expansion"),

        ("The slope of the temperature versus time graph for a substance being heated at constant power P is:",
         "P / (m c)", "m c / P", "P × m × c", "m / (P c)", "A",
         "From heat equation dQ/dt = P = m c (dT/dt), the slope is dT/dt = P / (m c).",
         "Constant heating rate dQ/dt = P.",
         "dT / dt = P / (m c)",
         "1. Heat supplied in time dt: dQ = P dt.\n2. Temperature rise: dQ = m c dT.\n3. P dt = m c dT => dT / dt = P / (m c).\n4. Slope of T vs t graph is inversely proportional to heat capacity (m c).",
         "Option A: P / (m c)",
         "Higher specific heat -> Lower slope (gentler rise). Lower specific heat -> Steeper slope (faster rise).",
         "B is inverse of slope; C is product; D has inverted terms.", "Easy", "phys-thermal-expansion"),

        ("On a heating curve (Temperature vs Time) at constant power, the slope of the liquid water region compared to the ice region is:",
         "Gentler (slope of water is about half the slope of ice)",
         "Steeper (slope of water is twice the slope of ice)",
         "Exactly identical",
         "Zero", "A",
         "Slope dT/dt = P / (m c). Since c_water ≈ 2 c_ice, the slope for water is half that of ice.",
         "Heating ice from -20°C to liquid water at 50°C at constant heating power.",
         "\\text{Slope} \\propto 1 / c",
         "1. c_water = 1 cal/(g·°C), while c_ice = 0.5 cal/(g·°C).\n2. (Slope)_water / (Slope)_ice = c_ice / c_water = 0.5 / 1 = 1/2.\n3. Thus the temperature of water rises half as fast as ice, producing a gentler slope.",
         "Option A: Gentler (slope of water is about half the slope of ice)",
         "Because water has twice the heat capacity of ice, it requires twice as long to heat by 1°C!",
         "B reverses the relationship; C assumes equal specific heat; D describes the melting plateau.", "Easy", "phys-thermal-expansion"),

        ("Heat energy of 8400 J is supplied to 200 g of water. What is the rise in temperature of the water? (Specific heat of water = 4200 J/(kg·K))",
         "10°C", "5°C", "20°C", "40°C", "A",
         "Direct calorimetry formula: Q = m c ΔT => ΔT = Q / (m c).",
         "Q = 8400 J, m = 200 g = 0.2 kg, c = 4200 J/(kg·K).",
         "ΔT = Q / (m c)",
         "1. m c = 0.2 kg × 4200 J/(kg·K) = 840 J/K.\n2. ΔT = 8400 J / 840 J/K = 10 K = 10°C.",
         "Option A: 10°C",
         "Remember to convert grams to kilograms in SI: 200 g = 0.2 kg!",
         "B divides by 2; C multiplies by 2; D divides by 0.05.", "Easy", "phys-thermal-expansion"),

        ("How much heat is required to completely melt 50 g of ice at 0°C into water at 0°C? (Latent heat of fusion of ice = 80 cal/g)",
         "4000 cal", "800 cal", "5000 cal", "400 cal", "A",
         "Heat required for phase change: Q = m L_f.",
         "m = 50 g, L_f = 80 cal/g.",
         "Q = m L_f",
         "1. Q = 50 g × 80 cal/g = 4000 calories.\n2. In Joules: 4000 × 4.186 ≈ 16744 J.",
         "Option A: 4000 cal",
         "Melting ice: Q = m × 80 calories.",
         "B divides 4000 by 5; C adds 50 + 80; D misses a zero.", "Easy", "phys-thermal-expansion")
    ]

    for idx, t in enumerate(more_easy):
        q_num = 136 + idx
        add(q_num, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14])

    # Fill Q141 to Q160 (20 questions) with direct numerical and conceptual questions
    for q_id in range(141, 161):
        idx = q_id - 141
        m_ice_g = 10.0 + idx * 5.0
        q_cal = m_ice_g * 80.0
        q_joule = q_cal * 4.186

        add(q_id,
            f"Calculate the heat energy required in Joules to melt {m_ice_g:.0f} g of ice at 0°C into water at 0°C. (Take L_f = 3.36 × 10⁵ J/kg)",
            f"{q_joule:.1f} J",
            f"{q_joule * 2.0:.1f} J",
            f"{q_joule * 0.5:.1f} J",
            f"{q_cal:.1f} J",
            "A",
            "Heat needed to melt ice at 0°C is Q = m L_f, where m is converted to kg.",
            f"Mass m = {m_ice_g:.0f} g = {m_ice_g * 1e-3:.3f} kg, L_f = 3.36 × 10⁵ J/kg.",
            "Q = m L_f",
            f"1. m = {m_ice_g * 1e-3:.3f} kg.\n2. Q = {m_ice_g * 1e-3:.3f} × (3.36 × 10⁵) = {q_joule:.1f} J.",
            f"Option A: {q_joule:.1f} J",
            "L_f = 80 cal/g ≈ 336 J/g. Thus Q = m(in grams) × 336 Joules.",
            "Option B doubles heat; Option C halves heat; Option D gives calories instead of Joules.",
            "Easy", "phys-thermal-expansion")

    # -------------------------------------------------------------------------
    # Q161 to Q225: 65 MEDIUM QUESTIONS
    # -------------------------------------------------------------------------
    # Calorimetry mixtures, ice + water equilibrium, steam + water equilibrium
    for q_id in range(161, 226):
        idx = q_id - 161
        if idx < 25:
            # Mixing hot water and cold water
            m1 = 100.0 + idx * 10.0
            t1 = 80.0
            m2 = 100.0 + idx * 5.0
            t2 = 20.0
            # m1*(80 - T) = m2*(T - 20) => T = (m1*80 + m2*20) / (m1 + m2)
            t_eq = (m1 * t1 + m2 * t2) / (m1 + m2)

            add(q_id,
                f"A mass of {m1:.0f} g of water at 80°C is mixed with {m2:.0f} g of water at 20°C in an insulated calorimeter of negligible heat capacity. What is the final equilibrium temperature of the mixture?",
                f"{t_eq:.2f}°C",
                f"{(t1 + t2)/2:.2f}°C",
                f"{t_eq + 5.0:.2f}°C",
                f"{t_eq - 5.0:.2f}°C",
                "A",
                "Principle of mixtures: Heat lost by hot water equals heat gained by cold water: m₁ c (T₁ - T) = m₂ c (T - T₂).",
                f"m₁ = {m1:.0f} g, T₁ = 80°C, m₂ = {m2:.0f} g, T₂ = 20°C, c = 1 cal/(g·°C).",
                "T = (m₁ T₁ + m₂ T₂) / (m₁ + m₂)",
                f"1. Heat lost by hot water: Q_lost = {m1:.0f} × 1 × (80 - T).\n2. Heat gained by cold water: Q_gain = {m2:.0f} × 1 × (T - 20).\n3. Equating: {m1:.0f}(80 - T) = {m2:.0f}(T - 20).\n4. ({m1:.0f} + {m2:.0f}) T = {m1*80:.0f} + {m2*20:.0f} = {m1*80 + m2*20:.0f}.\n5. T = {m1*80 + m2*20:.0f} / {m1 + m2:.0f} = {t_eq:.2f}°C.",
                f"Option A: {t_eq:.2f}°C",
                "When masses are not equal, the equilibrium temperature is a weighted average biased towards the larger mass!",
                "Option B is the unweighted average; Options C and D are arithmetic offsets.",
                "Medium", "phys-thermal-expansion")

        elif idx < 45:
            # Ice at 0°C added to water at T_w > 0°C (All melts or partial melts)
            m_ice = 10.0 + (idx - 25) * 2.0 # grams of ice at 0°C
            m_water = 100.0 # grams of water
            t_water = 40.0 + (idx - 25) * 2.0 # °C
            # Heat needed to melt ice: Q_melt = m_ice * 80
            # Heat released by water cooling to 0°C: Q_water_cool = m_water * 1 * t_water
            q_melt = m_ice * 80.0
            q_cool = m_water * 1.0 * t_water
            # Since q_cool > q_melt, all ice melts and final temp > 0°C
            # (m_water + m_ice) * T = q_cool - q_melt
            t_final = (q_cool - q_melt) / (m_water + m_ice)

            add(q_id,
                f"An ice cube of mass {m_ice:.0f} g at 0°C is dropped into {m_water:.0f} g of water at {t_water:.0f}°C in an insulated vessel. What is the final equilibrium temperature? (L_f = 80 cal/g, c_w = 1 cal/(g·°C))",
                f"{t_final:.2f}°C",
                f"0.00°C",
                f"{t_final * 1.5:.2f}°C",
                f"{(t_water)/2:.2f}°C",
                "A",
                "Step 1: Check if heat available from water cooling to 0°C exceeds heat required to melt all ice. Step 2: If yes, remaining heat warms the total mass (m_water + m_ice) above 0°C.",
                f"m_ice = {m_ice:.0f} g at 0°C, m_water = {m_water:.0f} g at {t_water:.0f}°C, L_f = 80 cal/g.",
                "Q_gain = m_ice L_f + m_ice c_w T, Q_lost = m_water c_w (T_w - T)",
                f"1. Heat to melt all ice: Q_melt = {m_ice:.0f} × 80 = {q_melt:.0f} cal.\n2. Heat released by water cooling to 0°C: Q_avail = {m_water:.0f} × 1 × {t_water:.0f} = {q_cool:.0f} cal.\n3. Since {q_cool:.0f} > {q_melt:.0f}, all ice melts completely!\n4. Remaining heat: ΔQ = {q_cool:.0f} - {q_melt:.0f} = {q_cool - q_melt:.0f} cal.\n5. Total mass of water = {m_water + m_ice:.0f} g.\n6. Final temperature T = {q_cool - q_melt:.0f} / {m_water + m_ice:.0f} = {t_final:.2f}°C.",
                f"Option A: {t_final:.2f}°C",
                "Always compare Q_available to Q_melt before calculating final temperature!",
                "Option B assumes incomplete melting; Option C is overestimated; Option D ignores latent heat of melting.",
                "Medium", "phys-thermal-expansion")

        else:
            # Steam at 100°C passed into ice/water at 0°C
            s_idx = idx - 45
            m_steam = 2.0 + s_idx * 0.5 # g steam at 100°C
            m_w = 50.0 + s_idx * 2.0 # g water at 20°C
            # Heat released by steam condensing + cooling to T: m_s * 540 + m_s * 1 * (100 - T)
            # Heat gained by water: m_w * 1 * (T - 20)
            # m_s * 540 + m_s * 100 - m_s * T = m_w * T - m_w * 20
            # T * (m_w + m_s) = m_s * 640 + m_w * 20
            t_steam_final = (m_steam * 640.0 + m_w * 20.0) / (m_w + m_steam)

            add(q_id,
                f"A mass of {m_steam:.1f} g of dry steam at 100°C is passed into {m_w:.1f} g of water at 20°C contained in a vessel of negligible heat capacity. What is the resulting temperature of the mixture? (L_v = 540 cal/g, c_w = 1 cal/(g·°C))",
                f"{t_steam_final:.2f}°C",
                f"100.00°C",
                f"{t_steam_final * 0.7:.2f}°C",
                f"{t_steam_final * 1.3:.2f}°C",
                "A",
                "Heat released by condensing steam (m_s L_v) and cooling condensed water (m_s c (100 - T)) equals heat absorbed by cool water (m_w c (T - 20)).",
                f"m_s = {m_steam:.1f} g at 100°C, m_w = {m_w:.1f} g at 20°C, L_v = 540 cal/g.",
                "m_s L_v + m_s c_w (100 - T) = m_w c_w (T - T_w)",
                f"1. Heat lost by steam: {m_steam:.1f} × 540 + {m_steam:.1f} × 1 × (100 - T) = {m_steam * 640:.1f} - {m_steam:.1f} T.\n2. Heat gained by water: {m_w:.1f} × 1 × (T - 20) = {m_w:.1f} T - {m_w * 20:.1f}.\n3. Equating: {m_steam * 640:.1f} + {m_w * 20:.1f} = ({m_w + m_steam:.1f}) T.\n4. T = {m_steam * 640 + m_w * 20:.1f} / {m_w + m_steam:.1f} = {t_steam_final:.2f}°C.",
                f"Option A: {t_steam_final:.2f}°C",
                "Condensed steam contributes to the total final mass of liquid water: total mass = m_w + m_s!",
                "Option B assumes boiling equilibrium; Option C ignores condensation latent heat; Option D is arbitrary.",
                "Medium", "phys-thermal-expansion")

    # -------------------------------------------------------------------------
    # Q226 to Q250: 25 HARD QUESTIONS
    # -------------------------------------------------------------------------
    # Incomplete melting mixture, ice below 0°C, multi-stage phase changes
    for q_id in range(226, 251):
        h_idx = q_id - 226
        if h_idx < 13:
            # Ice at -10°C mixed with water such that NOT all ice melts (Final temp = 0°C, find melted mass)
            m_ice_tot = 50.0 + h_idx * 5.0 # g of ice at -10°C
            t_ice_init = -10.0 # °C
            m_water_init = 50.0 + h_idx * 2.0 # g of water at 30°C
            t_water_init = 30.0 # °C
            # Heat needed to warm ice to 0°C: Q1 = m_ice_tot * 0.5 * 10 = m_ice_tot * 5 cal
            q1_warm = m_ice_tot * 0.5 * 10.0
            # Heat released by water cooling to 0°C: Q_avail = m_water_init * 1 * 30 cal
            q_avail = m_water_init * 1.0 * t_water_init
            # Remaining heat for melting ice: Q_melt = q_avail - q1_warm
            q_melt_rem = q_avail - q1_warm
            # Mass of ice melted = q_melt_rem / 80
            m_melted = q_melt_rem / 80.0
            # Final mixture consists of (m_water_init + m_melted) g of water and (m_ice_tot - m_melted) g of ice at 0°C!

            add(q_id,
                f"A block of ice of mass {m_ice_tot:.0f} g at -10°C is added to {m_water_init:.0f} g of water at {t_water_init:.0f}°C in an insulated container. What mass of ice melts, and what is the final equilibrium temperature? (Take c_ice = 0.5 cal/(g·°C), L_f = 80 cal/g, c_w = 1 cal/(g·°C))",
                f"{m_melted:.2f} g of ice melts, final temperature = 0°C",
                f"All {m_ice_tot:.0f} g melts, final temperature = 5°C",
                f"No ice melts (0 g), final temperature = -2°C",
                f"{m_melted * 0.5:.2f} g of ice melts, final temperature = 2°C",
                "A",
                "Step 1: Calculate heat needed to bring ice from -10°C to 0°C (Q₁ = m_ice c_ice ΔT). Step 2: Compare with heat released by water cooling to 0°C (Q₂ = m_w c_w ΔT). Step 3: If Q₂ > Q₁ but Q₂ - Q₁ < m_ice L_f, only a fraction of the ice melts and the system remains at 0°C in phase equilibrium.",
                f"m_ice = {m_ice_tot:.0f} g at -10°C, m_w = {m_water_init:.0f} g at {t_water_init:.0f}°C.",
                "Q_melt = Q_avail - Q_warm_ice, m_melted = Q_melt / L_f",
                f"1. Heat to warm ice to 0°C: Q₁ = {m_ice_tot:.0f} × 0.5 × 10 = {q1_warm:.0f} cal.\n2. Heat released by water cooling to 0°C: Q₂ = {m_water_init:.0f} × 1 × {t_water_init:.0f} = {q_avail:.0f} cal.\n3. Heat left to melt ice: ΔQ = {q_avail:.0f} - {q1_warm:.0f} = {q_melt_rem:.0f} cal.\n4. Heat needed to melt ALL ice: {m_ice_tot:.0f} × 80 = {m_ice_tot * 80:.0f} cal.\n5. Since {q_melt_rem:.0f} < {m_ice_tot * 80:.0f}, only part of the ice melts!\n6. Mass of ice melted = {q_melt_rem:.0f} / 80 = {m_melted:.2f} g.\n7. Since both ice and water coexist, the final temperature is strictly 0°C.",
                f"Option A: {m_melted:.2f} g of ice melts, final temperature = 0°C",
                "Crucial NEET rule: Whenever ice and water coexist at equilibrium under 1 atm, the temperature MUST be exactly 0°C!",
                "Option B falsely assumes complete melting; Option C ignores available heat; Option D gives non-zero temperature with ice present.",
                "Hard", "phys-thermal-expansion")
        else:
            # Complex multi-phase ice-water-steam mixture
            k_idx = h_idx - 13
            m_ice_3 = 20.0 + k_idx * 2.0 # g ice at 0°C
            m_steam_3 = 5.0 + k_idx * 0.5 # g steam at 100°C
            # Heat to melt ice: m_ice * 80 = Q_melt
            # Heat to warm melted ice to 100°C: m_ice * 100 = Q_warm
            # Total heat to convert ice to water at 100°C: m_ice * 180
            # Heat released by steam condensing: m_steam * 540
            q_ice_to_100 = m_ice_3 * 180.0
            q_steam_cond = m_steam_3 * 540.0
            # Case: steam condensing provides Q = m_steam * 540
            # If q_steam_cond < q_ice_to_100, final temp between 0 and 100°C
            # m_steam * 540 + m_steam * 1 * (100 - T) = m_ice * 80 + m_ice * 1 * T
            # m_steam * 640 - m_ice * 80 = T * (m_ice + m_steam)
            t_iso = (m_steam_3 * 640.0 - m_ice_3 * 80.0) / (m_ice_3 + m_steam_3)

            add(q_id,
                f"A mixture of {m_ice_3:.1f} g of ice at 0°C and {m_steam_3:.1f} g of steam at 100°C are mixed in an insulated calorimeter. What is the final equilibrium temperature of the mixture? (L_f = 80 cal/g, L_v = 540 cal/g)",
                f"{t_iso:.2f}°C",
                f"50.00°C",
                f"0.00°C",
                f"100.00°C",
                "A",
                "Multi-phase energy balance: Compare heat required to melt all ice and bring it to 100°C with heat released by steam condensation.",
                f"m_ice = {m_ice_3:.1f} g at 0°C, m_steam = {m_steam_3:.1f} g at 100°C.",
                "m_steam L_v + m_steam c_w (100 - T) = m_ice L_f + m_ice c_w T",
                f"1. Heat to melt all ice: {m_ice_3:.1f} × 80 = {m_ice_3 * 80:.1f} cal.\n2. Heat to bring melted ice to 100°C: {m_ice_3:.1f} × 100 = {m_ice_3 * 100:.1f} cal.\n3. Total heat to turn ice into water at 100°C: {q_ice_to_100:.1f} cal.\n4. Heat released by steam condensing alone: {m_steam_3:.1f} × 540 = {q_steam_cond:.1f} cal.\n5. Since {q_steam_cond:.1f} > {m_ice_3 * 80:.1f} and all steam condenses, final temperature T is between 0°C and 100°C.\n6. Energy balance: {m_steam_3 * 640:.1f} - {m_ice_3 * 80:.1f} = ({m_ice_3 + m_steam_3:.1f}) T => T = {t_iso:.2f}°C.",
                f"Option A: {t_iso:.2f}°C",
                "Notice that 1 g of steam at 100°C can melt nearly 540/80 = 6.75 g of ice at 0°C and still warm the resulting water!",
                "Option B is an unweighted average; Option C assumes ice doesn't melt; Option D assumes steam doesn't condense fully.",
                "Hard", "phys-thermal-expansion")

    return qs

if __name__ == "__main__":
    qs = get_part2_questions()
    print(f"Total Part 2 questions: {len(qs)}")
    easy = sum(1 for q in qs if q['difficulty'] == 'Easy')
    med = sum(1 for q in qs if q['difficulty'] == 'Medium')
    hard = sum(1 for q in qs if q['difficulty'] == 'Hard')
    print(f"Easy: {easy}, Medium: {med}, Hard: {hard}")
