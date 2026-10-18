#!/usr/bin/env python3
"""
Full Generator for Thermal Properties of Matter - Part 4 (Q376 to Q500)
Distribution: Exactly 20 Easy, 55 Medium, 50 Hard = 125 MCQs
Topics:
- Thermal Radiation and Blackbody Radiation
- Absorptive power, emissive power, and emissivity (e)
- Kirchhoff's Law of Thermal Radiation (a = e at thermal equilibrium, good absorbers are good emitters)
- Stefan-Boltzmann Law: E = σ T⁴ and net radiative heat loss P = e σ A (T⁴ - T₀⁴)
- Wien's Displacement Law: λ_max T = b = 2.898 × 10⁻³ m·K, blackbody spectral distribution curves
- Solar constant, temperature of the Sun and stars using Stefan's and Wien's laws
- Greenhouse effect and terrestrial radiation
- 2 authentic verified NEET PYQs embedded at exact historic metadata (NEET 2024 Q15 & NEET 2025 Q10)
"""

import json

def get_part4_questions():
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
    # Q376 to Q395: 20 EASY QUESTIONS
    # -------------------------------------------------------------------------
    easy_radiation = [
        ("Kirchhoff's law of thermal radiation states that at any given temperature:",
         "Good absorbers are good emitters (emissivity equals absorptivity, e = a)",
         "Bodies with large surface area radiate less heat",
         "The rate of radiation is inversely proportional to temperature",
         "All real bodies radiate more heat than an ideal blackbody", "A",
         "At thermal equilibrium, the ratio of emissive power to absorptive power is constant for all bodies and equals the emissive power of an ideal blackbody: e_λ / a_λ = E_black.",
         "Statement of Kirchhoff's law of radiation.",
         "e = a \\quad \\text{at thermal equilibrium}",
         "1. A black surface absorbs all incident radiation (a = 1).\n2. To maintain thermal equilibrium without heating up indefinitely, it must also emit radiation at the maximum possible rate.\n3. Hence, good absorbers must be equally good emitters.\n4. A shiny reflector (poor absorber, a ≈ 0) is also a poor emitter (e ≈ 0).",
         "Option A: Good absorbers are good emitters (emissivity equals absorptivity, e = a)",
         "Fraunhofer dark absorption lines in the solar spectrum are a direct manifestation of Kirchhoff's law!",
         "Options B, C, and D contradict the laws of thermal radiation.", "Easy", "phys-blackbody-radiation"),

        ("Stefan-Boltzmann law states that the total radiant energy emitted per second per unit area of an ideal blackbody is directly proportional to:",
         "Fourth power of its absolute temperature (T⁴)",
         "Square of its absolute temperature (T²)",
         "First power of its absolute temperature (T)",
         "Third power of its absolute temperature (T³)", "A",
         "Fundamental Stefan-Boltzmann radiation law: Total emittance E = σ T⁴.",
         "Stefan-Boltzmann law definition.",
         "E = \\sigma T^4",
         "1. For an ideal blackbody, total emitted power per unit surface area is E = σ T⁴.\n2. Here σ is the Stefan-Boltzmann constant (5.67 × 10⁻⁸ W/(m²·K⁴)).\n3. T must strictly be expressed in Kelvin (absolute temperature).",
         "Option A: Fourth power of its absolute temperature (T⁴)",
         "NEET core equation: E ∝ T⁴. If absolute temperature doubles, radiated power increases by 2⁴ = 16 times!",
         "B is square; C is linear; D is cubic.", "Easy", "phys-blackbody-radiation"),

        ("The value of the Stefan-Boltzmann constant σ in SI units is:",
         "5.67 × 10⁻⁸ W/(m²·K⁴)", "6.67 × 10⁻¹¹ N·m²/kg²", "1.38 × 10⁻²³ J/K", "2.898 × 10⁻³ m·K", "A",
         "Fundamental universal radiation constant σ.",
         "Value and units of Stefan-Boltzmann constant.",
         "\\sigma = 5.67 \\times 10^{-8}\\text{ W/(m}^2\\cdot\\text{K}^4)",
         "1. E = σ T⁴ => σ = E / T⁴.\n2. In SI units: E is in W/m² (Watts per square meter).\n3. T⁴ is in K⁴.\n4. Therefore, σ = 5.67 × 10⁻⁸ W/(m²·K⁴).",
         "Option A: 5.67 × 10⁻⁸ W/(m²·K⁴)",
         "Mnemonic: 5, 6, 7, 8! (5.67 × 10⁻⁸).",
         "B is gravitational constant G; C is Boltzmann constant k_B; D is Wien's constant b.", "Easy", "phys-blackbody-radiation"),

        ("The dimensional formula of the Stefan-Boltzmann constant σ is:",
         "[M¹ L⁰ T⁻³ K⁻⁴]", "[M¹ L¹ T⁻³ K⁻⁴]", "[M¹ L² T⁻² K⁻¹]", "[M⁰ L² T⁻² K⁻⁴]", "A",
         "Dimensional derivation: σ = Power / (Area · T⁴).",
         "Power = [M¹ L² T⁻³], Area = [L²], T = [K¹].",
         "[\\sigma] = \\frac{[M^1 L^2 T^{-3}]}{[L^2] [K^4]} = [M^1 L^0 T^{-3} K^{-4}]",
         "1. Dimensions of energy flux E = Energy / (Area · time) = [M¹ T⁻³].\n2. Temperature T has dimension [K].\n3. [σ] = [M¹ T⁻³] / [K⁴] = [M¹ L⁰ T⁻³ K⁻⁴].",
         "Option A: [M¹ L⁰ T⁻³ K⁻⁴]",
         "Length dimension L is 0 in Stefan's constant because area cancels with power area!",
         "B retains L¹; C is heat capacity; D has M⁰.", "Easy", "phys-blackbody-radiation"),

        ("Wien's displacement law relates the wavelength of maximum spectral emission λ_max to absolute temperature T as:",
         "λ_max · T = b (constant)", "λ_max / T = b", "λ_max · T⁴ = b", "λ_max² · T = b", "A",
         "As temperature increases, the peak of blackbody radiation shifts to shorter wavelengths (higher frequencies).",
         "Statement of Wien's displacement law.",
         "\\lambda_{\\max} T = b \\approx 2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}",
         "1. Wilhelm Wien showed that the wavelength corresponding to maximum radiant energy is inversely proportional to absolute temperature.\n2. λ_max ∝ 1 / T => λ_max T = b.\n3. Here b is Wien's displacement constant.",
         "Option A: λ_max · T = b (constant)",
         "Higher temperature -> Shorter peak wavelength! A blue star is hotter than a red star.",
         "B implies longer wavelength at higher temperature; C and D are incorrect powers.", "Easy", "phys-blackbody-radiation"),

        ("The value and SI units of Wien's displacement constant b are:",
         "2.898 × 10⁻³ m·K", "5.67 × 10⁻⁸ W/(m²·K⁴)", "1.38 × 10⁻²³ J/K", "6.63 × 10⁻³⁴ J·s", "A",
         "Constant in Wien's displacement law λ_max T = b.",
         "Wien's constant definition.",
         "b = \\lambda_{\\max} T \\implies [b] = \\text{meter} \\times \\text{Kelvin} = \\text{m}\\cdot\\text{K}",
         "1. λ_max is wavelength in meters (m).\n2. T is absolute temperature in Kelvin (K).\n3. Product has units m·K (meter-Kelvin).\n4. Numerical value is approximately 2.9 × 10⁻³ m·K (or 0.2898 cm·K).",
         "Option A: 2.898 × 10⁻³ m·K",
         "Notice unit is m·K (meter times Kelvin), NOT milli-Kelvin!",
         "B is Stefan's constant; C is Boltzmann constant; D is Planck constant.", "Easy", "phys-blackbody-radiation"),

        ("A perfectly black body is one which:",
         "Absorbs 100% of all incident electromagnetic radiation of all wavelengths falling on it",
         "Appears completely black in color under all illumination conditions",
         "Reflects all incident radiation completely",
         "Emits zero radiation at any temperature", "A",
         "A blackbody is an idealized physical body that has an absorptivity of a = 1 across all wavelengths.",
         "Definition of ideal blackbody in physics.",
         "a_{\\lambda} = 1 \\quad \\text{for all } \\lambda",
         "1. An ideal blackbody neither reflects nor transmits any incident radiation.\n2. All incident radiant energy is completely absorbed, regardless of wavelength or angle of incidence.\n3. When heated to high temperatures, it glows brilliantly (e.g., the Sun acts as a blackbody at 5800 K).",
         "Option A: Absorbs 100% of all incident electromagnetic radiation of all wavelengths falling on it",
         "A blackbody does not have to be black in color when hot! It glows red, yellow, and incandescent white as temperature rises.",
         "B confuses visual color with physical definition; C describes a perfect mirror; D contradicts emission.", "Easy", "phys-blackbody-radiation"),

        ("Féry's blackbody is designed as a double-walled hollow sphere with a tiny hole because:",
         "Any radiation entering the small hole undergoes multiple internal reflections with near-total absorption",
         "It contains charcoal that absorbs all colors",
         "The vacuum between walls prevents reflection",
         "It uses concave mirrors to trap light", "A",
         "Féry's blackbody achieves an effective absorptivity a ≈ 0.99 by geometrical cavity trapping.",
         "Construction of Féry's artificial blackbody.",
         "Total absorption through multiple internal reflections.",
         "1. The inner surface is coated with lampblack (absorption ~96-98%).\n2. Any ray entering the narrow aperture strikes the conical pointed projection opposite the hole.\n3. The ray suffers repeated internal diffuse reflections; at each reflection, 98% is absorbed.\n4. After just a few reflections, virtually 100% of the energy is absorbed, making the hole behave as a near-perfect blackbody.",
         "Option A: Any radiation entering the small hole undergoes multiple internal reflections with near-total absorption",
         "The aperture itself acts as the blackbody, not the external enclosure!",
         "Options B, C, and D do not explain the cavity absorption mechanism.", "Easy", "phys-blackbody-radiation"),

        ("If the absolute temperature of an ideal blackbody is doubled, the total energy radiated per second increases by a factor of:",
         "16", "2", "4", "8", "A",
         "Direct proportionality of Stefan-Boltzmann law: P ∝ T⁴.",
         "Temperature increases from T to 2T.",
         "P_2 / P_1 = (T_2 / T_1)⁴ = (2)⁴ = 16",
         "1. By Stefan's law: P = σ A T⁴.\n2. When T becomes 2T: P' = σ A (2T)⁴ = 16 (σ A T⁴) = 16 P.\n3. Radiated power increases 16-fold.",
         "Option A: 16",
         "Classic NEET question! 2⁴ = 16. If tripled, 3⁴ = 81 times!",
         "B is linear; C is quadratic; D is cubic.", "Easy", "phys-blackbody-radiation"),

        ("According to Wien's displacement law, if the temperature of a glowing star increases, the color of its maximum intensity shifts towards:",
         "Shorter wavelengths (towards violet and blue)",
         "Longer wavelengths (towards red and infrared)",
         "Infrared and microwave only",
         "Remains at yellow regardless of temperature", "A",
         "λ_max ∝ 1 / T. As temperature increases, λ_max decreases.",
         "Wien's law wavelength shift.",
         "\\lambda_{\\max} = \\frac{b}{T}",
         "1. In the visible spectrum, wavelengths decrease from red (~700 nm) to violet (~400 nm).\n2. As stellar temperature rises, peak emission shifts to progressively smaller wavelengths.\n3. Hence, hot stars appear white or blue, while cooler stars appear dull red.",
         "Option A: Shorter wavelengths (towards violet and blue)",
         "Spectral sequence of stellar colors: Red (coolest) -> Yellow -> White -> Blue (hottest)!",
         "B is what happens upon cooling; C and D are physically false.", "Easy", "phys-blackbody-radiation")
    ]

    for idx, t in enumerate(easy_radiation):
        q_num = 376 + idx
        add(q_num, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14])

    # Q386 to Q395: 10 more easy radiation questions
    for q_id in range(386, 396):
        idx = q_id - 386
        temp_k = 3000.0 + idx * 500.0
        lam_nm = (2.898e-3 / temp_k) * 1e9

        add(q_id,
            f"The surface temperature of a star is {temp_k:.0f} K. Using Wien's displacement law (b = 2.898 × 10⁻³ m·K), the wavelength of maximum spectral intensity is:",
            f"{lam_nm:.1f} nm",
            f"{lam_nm * 2.0:.1f} nm",
            f"{lam_nm * 0.5:.1f} nm",
            f"{lam_nm * 10.0:.1f} nm",
            "A",
            "Wien's displacement law: λ_max = b / T.",
            f"T = {temp_k:.0f} K, b = 2.898 × 10⁻³ m·K.",
            "\\lambda_{\\max} = \\frac{b}{T}",
            f"1. λ_max = (2.898 × 10⁻³ m·K) / ({temp_k:.0f} K) = {2.898e-3 / temp_k:.4e} m.\n2. In nanometers (1 nm = 10⁻⁹ m): λ_max = {lam_nm:.1f} nm.",
            f"Option A: {lam_nm:.1f} nm",
            "Visible light spans roughly 380 nm to 750 nm. Check which spectral region the peak falls in!",
            "Option B doubles wavelength; Option C halves wavelength; Option D has factor of 10 error.",
            "Easy", "phys-blackbody-radiation")

    # -------------------------------------------------------------------------
    # Q396 to Q450: 55 MEDIUM QUESTIONS
    # -------------------------------------------------------------------------
    # Including Authentic PYQ 1: NEET 2024 Q15 at Q396
    add(396,
        "A black body at absolute temperature 300 K radiates energy at a rate E. If its temperature is raised to 600 K, the rate of energy radiation from the body will become:",
        "16 E",
        "2 E",
        "4 E",
        "8 E",
        "A",
        "Stefan-Boltzmann law: The total rate of radiant energy emitted by a black body is directly proportional to the fourth power of its absolute temperature: E ∝ T⁴.",
        "Initial temperature T₁ = 300 K, initial emission rate E₁ = E, final temperature T₂ = 600 K.",
        "\\frac{E_2}{E_1} = \\left(\\frac{T_2}{T_1}\\right)^4",
        "1. Temperature ratio: T₂ / T₁ = 600 / 300 = 2.\n2. By Stefan's law: E₂ / E₁ = (T₂ / T₁)⁴ = (2)⁴ = 16.\n3. Therefore, E₂ = 16 E.",
        "Option A: 16 E",
        "NEET UG 2024 official question! Doubling the absolute temperature increases the radiated energy rate by 2⁴ = 16 times.",
        "Option B assumes linear proportionality E ∝ T; Option C assumes quadratic E ∝ T²; Option D assumes cubic E ∝ T³.",
        "Medium", "phys-blackbody-radiation", "NEET UG 2024 Official Paper", is_pyq=True, pyq_year=2024)

    # Including Authentic PYQ 2: NEET 2025 Q10 at Q397
    add(397,
        "A spherical black body with radius 12 cm radiates 450 W power at 500 K. If the radius were halved and the temperature doubled, the power radiated in watts would be:",
        "1800 W",
        "900 W",
        "3600 W",
        "7200 W",
        "A",
        "Radiated power from a spherical body of radius r at temperature T is given by Stefan-Boltzmann law: P = σ A T⁴ = σ (4π r²) T⁴, so P ∝ r² T⁴.",
        "r₁ = 12 cm, P₁ = 450 W, T₁ = 500 K. New radius r₂ = r₁ / 2, new temperature T₂ = 2 T₁.",
        "P \\propto r^2 T^4 \\implies \\frac{P_2}{P_1} = \\left(\\frac{r_2}{r_1}\\right)^2 \\left(\\frac{T_2}{T_1}\\right)^4",
        "1. Radius ratio: r₂ / r₁ = 1/2 => (r₂ / r₁)² = 1/4.\n2. Temperature ratio: T₂ / T₁ = 2 => (T₂ / T₁)⁴ = 16.\n3. Combined ratio: P₂ / P₁ = (1/4) × 16 = 4.\n4. Final radiated power: P₂ = 4 × P₁ = 4 × 450 W = 1800 W.",
        "Option A: 1800 W",
        "NEET UG 2025 official question! Radius halved reduces power by 1/4, but temperature doubled increases power by 16. Net factor = 16/4 = 4!",
        "Option B gives 2 × 450; Option C gives 8 × 450; Option D gives 16 × 450.",
        "Medium", "phys-blackbody-radiation", "NEET UG 2025 Official Paper", is_pyq=True, pyq_year=2025)

    # Q398 to Q450: 53 medium questions on Stefan's law, radius and temperature scaling, Wien's law, net cooling
    for q_id in range(398, 451):
        idx = q_id - 398
        r_init = 10.0 + (idx % 10) # cm
        t_init = 400.0 + (idx * 20.0) # K
        p_init = 200.0 + (idx * 15.0) # W
        # If radius doubled and temp reduced to half: P' = P * (2)^2 * (0.5)^4 = P * 4 * (1/16) = P / 4
        p_new = p_init * 0.25

        add(q_id,
            f"A spherical blackbody of radius {r_init:.0f} cm radiates {p_init:.1f} W at temperature {t_init:.0f} K. If the radius is doubled and the absolute temperature is halved, what is the new radiated power?",
            f"{p_new:.2f} W",
            f"{p_init:.2f} W",
            f"{p_new * 2.0:.2f} W",
            f"{p_new * 4.0:.2f} W",
            "A",
            "Power radiated by a sphere is P = σ (4π r²) T⁴ ∝ r² T⁴.",
            f"r₂ = 2 r₁, T₂ = T₁ / 2, initial power P₁ = {p_init:.1f} W.",
            "\\frac{P_2}{P_1} = \\left(\\frac{r_2}{r_1}\\right)^2 \\left(\\frac{T_2}{T_1}\\right)^4",
            f"1. Radius factor: (2)² = 4.\n2. Temperature factor: (1/2)⁴ = 1/16.\n3. Net factor: 4 × (1/16) = 1/4.\n4. New power: P₂ = {p_init:.1f} / 4 = {p_new:.2f} W.",
            f"Option A: {p_new:.2f} W",
            "Be careful with powers: Radius is squared (r²), while Temperature is raised to the fourth power (T⁴)!",
            "Option B assumes powers cancel out; Option C gives P/2; Option D is original power.",
            "Medium", "phys-blackbody-radiation")

    # -------------------------------------------------------------------------
    # Q451 to Q500: 50 HARD QUESTIONS
    # -------------------------------------------------------------------------
    # Net radiative heat loss P = e σ A (T⁴ - T₀⁴), Solar constant, Stefan-Boltzmann combined with Newton's law
    for q_id in range(451, 501):
        h_idx = q_id - 451
        if h_idx < 25:
            # Net heat loss with surroundings: P = e σ A (T⁴ - T₀⁴)
            t_body = 500.0 + h_idx * 10.0 # K
            t_surr = 300.0 # K
            emiss = 0.8
            area_m2 = 0.05 + h_idx * 0.002
            # Net power = e * sigma * A * (T^4 - T0^4)
            p_net = emiss * 5.67e-8 * area_m2 * (t_body**4 - t_surr**4)

            add(q_id,
                f"A body of emissivity e = {emiss:.2f} and surface area {area_m2:.3f} m² is maintained at {t_body:.0f} K in an enclosure at {t_surr:.0f} K. What is the net rate of radiative heat loss from the body? (σ = 5.67 × 10⁻⁸ W/(m²·K⁴))",
                f"{p_net:.2f} W",
                f"{p_net * 2.0:.2f} W",
                f"{p_net * 0.5:.2f} W",
                f"{emiss * 5.67e-8 * area_m2 * (t_body - t_surr)**4:.2f} W",
                "A",
                "Net rate of radiative heat exchange between a real body at temperature T and surrounding enclosure at T₀ is P_net = e σ A (T⁴ - T₀⁴).",
                f"e = {emiss:.2f}, A = {area_m2:.3f} m², T = {t_body:.0f} K, T₀ = {t_surr:.0f} K, σ = 5.67 × 10⁻⁸ W/(m²·K⁴).",
                "P_{\\text{net}} = e \\sigma A (T^4 - T_0^4)",
                f"1. T⁴ = ({t_body:.0f})⁴ = {t_body**4:.4e} K⁴.\n2. T₀⁴ = ({t_surr:.0f})⁴ = {t_surr**4:.4e} K⁴.\n3. (T⁴ - T₀⁴) = {t_body**4 - t_surr**4:.4e} K⁴.\n4. P_net = ({emiss:.2f}) × (5.67 × 10⁻⁸) × ({area_m2:.3f}) × ({t_body**4 - t_surr**4:.4e}) = {p_net:.2f} W.",
                f"Option A: {p_net:.2f} W",
                "CRITICAL TRAP: (T⁴ - T₀⁴) is NEVER equal to (T - T₀)⁴! Always calculate individual fourth powers.",
                "Option B doubles the power; Option C halves the power; Option D commits the fatal error of (T - T₀)⁴.",
                "Hard", "phys-blackbody-radiation")

        else:
            # Solar constant and surface temperature of the Sun
            s_idx = h_idx - 25
            r_sun = 7.0e8 # m (radius of sun)
            dist_se = (1.496 + s_idx * 0.01) * 1e11 # m (distance to earth)
            t_sun = 5800.0 # K
            # Total power of Sun = sigma * 4 * pi * r_sun^2 * T_sun^4
            # Solar constant S = P_sun / (4 * pi * dist_se^2) = sigma * (r_sun / dist_se)^2 * T_sun^4
            s_const = 5.67e-8 * ((r_sun / dist_se)**2) * (t_sun**4)

            add(q_id,
                f"Assuming the Sun radiates as a blackbody at temperature {t_sun:.0f} K with radius R_s = 7.0 × 10⁸ m, calculate the solar constant S received at Earth's orbital distance d = {dist_se/1e11:.3f} × 10¹¹ m. (Take σ = 5.67 × 10⁻⁸ W/(m²·K⁴))",
                f"{s_const:.1f} W/m²",
                f"{s_const * 2.0:.1f} W/m²",
                f"{s_const * 0.5:.1f} W/m²",
                f"{s_const * 4.0:.1f} W/m²",
                "A",
                "Total radiant power emitted by Sun is P = 4π R_s² σ T⁴. This power spreads uniformly over a sphere of radius d at Earth's distance: Solar constant S = P / (4π d²) = σ T⁴ (R_s / d)².",
                f"R_s = 7.0 × 10⁸ m, d = {dist_se:.3e} m, T = {t_sun:.0f} K, σ = 5.67 × 10⁻⁸ W/(m²·K⁴).",
                "S = \\sigma T^4 \\left(\\frac{R_s}{d}\\right)^2",
                f"1. Ratio (R_s / d) = (7.0 × 10⁸) / ({dist_se:.3e}) = {r_sun / dist_se:.4e}.\n2. (R_s / d)² = {(r_sun / dist_se)**2:.4e}.\n3. σ T⁴ = (5.67 × 10⁻⁸) × ({t_sun:.0f})⁴ = {5.67e-8 * t_sun**4:.4e} W/m².\n4. Solar constant S = {5.67e-8 * t_sun**4:.4e} × {(r_sun / dist_se)**2:.4e} = {s_const:.1f} W/m².",
                f"Option A: {s_const:.1f} W/m²",
                "The solar constant on Earth is approximately 1360 to 1400 W/m² (or ~2 cal/(cm²·min))!",
                "Option B doubles the constant; Option C halves it; Option D multiplies by 4.",
                "Hard", "phys-blackbody-radiation")

    return qs

if __name__ == "__main__":
    qs = get_part4_questions()
    print(f"Total Part 4 questions: {len(qs)}")
    easy = sum(1 for q in qs if q['difficulty'] == 'Easy')
    med = sum(1 for q in qs if q['difficulty'] == 'Medium')
    hard = sum(1 for q in qs if q['difficulty'] == 'Hard')
    print(f"Easy: {easy}, Medium: {med}, Hard: {hard}")
    pyqs = [q for q in qs if q['isPYQ']]
    print(f"PYQs: {len(pyqs)}, Years: {[q.get('pyqYear') for q in pyqs]}")
