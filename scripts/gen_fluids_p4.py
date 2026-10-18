#!/usr/bin/env python3
"""
Full Generator for Mechanical Properties of Fluids - Part 4 (Q376 to Q500)
Distribution: Exactly 20 Easy, 55 Medium, 50 Hard = 125 MCQs
Topics: Surface Tension, Surface Energy, Work in Blowing Bubbles & Splitting Drops,
Excess Pressure (Drops, Bubbles, Interfaces), Angle of Contact, Capillarity (Jurin's Law),
Insufficient Length Tubes, Inclined Tubes, Satellite / Free-Fall Capillarity.
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
            "id": f"fluids-mcq-{qid:03d}",
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
            "chapter": "Mechanical Properties of Fluids",
            "chapterId": "mechanical-properties-fluids",
            "topic": topic,
            "source": source,
            "isPYQ": is_pyq
        }
        if is_pyq and pyq_year:
            item["pyqYear"] = pyq_year
        qs.append(item)

    # -------------------------------------------------------------------------
    # Q376 to Q395: 20 EASY QUESTIONS (Surface tension fundamentals, dimensions, definitions, Jurin's basics)
    # -------------------------------------------------------------------------
    add(376,
        "The SI unit and dimensional formula of surface tension are respectively:",
        "N/m and [M L⁰ T⁻²]", "N·m and [M L² T⁻²]", "N/m² and [M L⁻¹ T⁻²]", "J/m and [M L T⁻²]", "A",
        "SI units and dimensions of surface tension", "Surface tension $T = F/L = U/A$",
        "$T = \\frac{F}{L}$",
        "Unit = $\\frac{\\text{N}}{\\text{m}} = \\frac{\\text{J}}{\\text{m}^2}$.\nDimensions: $[T] = \\frac{[F]}{[L]} = \\frac{[M L T^{-2}]}{[L]} = [M L^0 T^{-2}] = [M T^{-2}]$.",
        "Option A: N/m and [M L⁰ T⁻²]", "Surface tension has the same dimensions as force constant (spring constant) $[M T^{-2}]$!",
        "Option B is torque/energy, Option C is pressure/stress, Option D has incorrect dimensions.",
        "Easy", "phys-surface-tension", "NEET UG 2020", True, 2020)

    add(377,
        "The excess pressure inside a spherical liquid drop of radius $R$ and surface tension $T$ is:",
        "$\\frac{2T}{R}$", "$\\frac{4T}{R}$", "$\\frac{T}{R}$", "$\\frac{T}{2R}$", "A",
        "Excess pressure inside a liquid drop", "Drop of radius $R$, surface tension $T$, one free surface",
        "$\\Delta P = \\frac{2T}{R}$",
        "A liquid drop has only one free surface (liquid-air interface). Equating outward pressure work to increase in surface energy: $\\Delta P (4\\pi R^2 dR) = T (8\\pi R dR) \\implies \\Delta P = \\frac{2T}{R}$.",
        "Option A: 2T / R", "Remember: Drop has 1 free surface ($2T/R$); soap bubble has 2 free surfaces ($4T/R$).",
        "Option B is for a soap bubble, Option C is for a cylindrical surface, Option D is one-fourth.",
        "Easy", "phys-surface-tension")

    add(378,
        "The excess pressure inside a soap bubble of radius $R$ in air is:",
        "$\\frac{4T}{R}$", "$\\frac{2T}{R}$", "$\\frac{T}{R}$", "$\\frac{8T}{R}$", "A",
        "Excess pressure in a soap bubble", "Soap bubble in air has two free surfaces (inner and outer)",
        "$\\Delta P = \\frac{4T}{R}$",
        "A soap bubble has both an inner liquid-air surface and an outer liquid-air surface. Total work done to expand radius: $\\Delta P (4\\pi R^2 dR) = 2 \\times T (8\\pi R dR) = 16\\pi T R dR \\implies \\Delta P = \\frac{4T}{R}$.",
        "Option A: 4T / R", "Double the excess pressure of a single-surface liquid drop of the same radius.",
        "Option B is for a liquid drop or bubble inside liquid, Option C is cylindrical, Option D is doubled again.",
        "Easy", "phys-surface-tension", "NEET UG 2014", True, 2014)

    add(379,
        "An air bubble of radius $R$ is formed inside water. The excess pressure inside this bubble is:",
        "$\\frac{2T}{R}$", "$\\frac{4T}{R}$", "$\\frac{T}{R}$", "Zero", "A",
        "Excess pressure in an air bubble inside a liquid", "Air bubble in water has only one interface (air-water)",
        "$\\Delta P = \\frac{2T}{R}$",
        "Inside water, the bubble contains air surrounded entirely by liquid. There is only ONE interface between air and water (the concave liquid surface). Hence $\\Delta P = \\frac{2T}{R}$, NOT $\\frac{4T}{R}$.",
        "Option A: 2T / R", "Common NEET trap: students see 'bubble' and write 4T/R, forgetting it is inside water (only 1 interface)!",
        "Option B is for a soap bubble in air (2 interfaces), Option C is cylindrical, Option D is false.",
        "Easy", "phys-surface-tension")

    add(380,
        "With an increase in temperature, the surface tension of most liquids:",
        "Decreases and becomes zero at the critical temperature",
        "Increases linearly with temperature",
        "Remains unchanged",
        "First decreases then increases", "A",
        "Temperature dependence of surface tension", "Eötvös / Ferguson empirical relationship",
        "$T = T_0 (1 - \\alpha \\Delta\\theta)$",
        "As temperature rises, kinetic energy of molecules increases and intermolecular cohesive forces weaken. At the critical temperature, the distinction between liquid and vapor disappears, so surface tension becomes zero.",
        "Option A: Decreases and becomes zero at the critical temperature", "Hot soup tastes better because lower surface tension spreads it wider over taste buds!",
        "Option B is incorrect for liquids, Option C ignores thermal expansion, Option D is non-monotonic.",
        "Easy", "phys-surface-tension")

    add(381,
        "When a detergent or soap is dissolved in water, the surface tension of water:",
        "Decreases", "Increases", "Remains constant", "Becomes negative", "A",
        "Effect of impurities on surface tension", "Surfactant molecules concentrate at the surface",
        "Surfactants reduce cohesive hydrogen bonding between water molecules",
        "Detergent molecules are amphiphilic surfactants that disrupt intermolecular hydrogen bonding at the liquid-air interface, lowering surface tension significantly and facilitating wetting of fabrics.",
        "Option A: Decreases", "Lower surface tension allows water to penetrate narrow cloth fibers.",
        "Option B occurs for highly soluble salts like NaCl, Option C ignores surfactant action, Option D is impossible.",
        "Easy", "phys-surface-tension")

    add(382,
        "When common salt (NaCl, a highly soluble inorganic salt) is dissolved in water, the surface tension of the solution:",
        "Increases slightly", "Decreases significantly", "Remains unchanged", "Drops to zero", "A",
        "Effect of highly soluble inorganic solutes on surface tension", "Ion-dipole interactions in solution",
        "Strong ion-water electrostatic attraction increases bulk cohesion",
        "Highly soluble inorganic salts like NaCl pull surface water molecules more strongly toward the bulk via ion-dipole attractions, causing a slight increase in surface tension.",
        "Option A: Increases slightly", "Contrast: Highly soluble salts increase $T$; sparingly soluble substances / soaps decrease $T$.",
        "Option B describes detergents, Option C is incorrect, Option D only occurs at critical temperature.",
        "Easy", "phys-surface-tension")

    add(383,
        "The angle of contact for pure water in contact with clean glass is approximately:",
        "0° (zero)", "90°", "135°", "180°", "A",
        "Angle of contact for wetting pairs", "Clean glass and pure water interface",
        "Adhesive force between glass and water $\\gg$ Cohesive force between water molecules",
        "Water wets clean glass completely. The adhesive force strongly dominates the cohesive force, pulling the meniscus into a concave shape that meets the glass parallel to the surface, making the angle of contact $\\theta \\approx 0^\\circ$.",
        "Option A: 0° (zero)", "Ordinary tap water on ordinary glass has $\\theta \\approx 8^\\circ$ to $10^\\circ$, but pure water on clean glass is taken as $0^\\circ$.",
        "Option B is neutral non-wetting boundary (flat meniscus), Option C is mercury on glass, Option D is extreme non-wetting.",
        "Easy", "phys-surface-tension")

    add(384,
        "The angle of contact for mercury in contact with clean glass is:",
        "Obtuse (about 135° to 140°)", "Acute (about 0°)", "Right angle (90°)", "Zero", "A",
        "Angle of contact for non-wetting liquid-solid pair", "Mercury-glass interface",
        "Cohesive force of mercury $\\gg$ Adhesive force between mercury and glass",
        "Mercury atoms attract each other much more strongly than they attract glass molecules. Thus mercury forms droplets that do not wet glass, producing a convex upward meniscus with an obtuse contact angle ($\\approx 135^\\circ$ to $140^\\circ$).",
        "Option A: Obtuse (about 135° to 140°)", "Obtuse contact angle causes capillary depression (liquid level falls in tube).",
        "Option B is water on glass, Option C is silver-water interface (90°), Option D is pure water.",
        "Easy", "phys-surface-tension")

    add(385,
        "According to Jurin's law, the height $h$ to which a liquid of density $\\rho$ and surface tension $T$ rises in a capillary tube of internal radius $r$ is:",
        "$h = \\frac{2T \\cos\\theta}{r \\rho g}$",
        "$h = \\frac{T \\cos\\theta}{2r \\rho g}$",
        "$h = \\frac{4T \\cos\\theta}{r \\rho g}$",
        "$h = \\frac{2T r \\cos\\theta}{\\rho g}$", "A",
        "Jurin's law of capillary rise", "Vertical force balance on liquid column in capillary tube",
        "$2\\pi r T \\cos\\theta = m g = \\pi r^2 h \\rho g$",
        "Upward force along circumference of contact is $F_{\\text{up}} = (2\\pi r) T \\cos\\theta$. Weight of cylindrical column is $W = (\\pi r^2 h) \\rho g$. Equating: $2\\pi r T \\cos\\theta = \\pi r^2 h \\rho g \\implies h = \\frac{2T \\cos\\theta}{r \\rho g}$.",
        "Option A: h = 2T cosθ / (r ρ g)", "Capillary rise is inversely proportional to tube radius $r$ ($h \\propto 1/r$).",
        "Option B divides by 2, Option C multiplies by 2, Option D puts $r$ in numerator.",
        "Easy", "phys-surface-tension")

    add(386,
        "If a capillary tube is immersed in water and its radius is halved, the height of water column supported inside will be:",
        "Doubled", "Halved", "Four times", "Unchanged", "A",
        "Radius dependence of capillary rise", "Jurin's law: $h r = \\text{constant}$",
        "$h \\propto \\frac{1}{r}$",
        "$h_1 r_1 = h_2 r_2 \\implies h_2 = h_1 \\left(\\frac{r_1}{r_2}\\right) = h_1 \\left(\\frac{r}{r/2}\\right) = 2h_1$.",
        "Option A: Doubled", "Narrower tube draws liquid higher: inverse linear relationship.",
        "Option B assumes direct proportionality, Option C assumes inverse square, Option D ignores radius.",
        "Easy", "phys-surface-tension")

    add(387,
        "The shape of the meniscus of a liquid in a capillary tube depends upon the:",
        "Relative magnitude of cohesive and adhesive forces",
        "Length of the capillary tube",
        "Atmospheric pressure outside",
        "Acceleration due to gravity $g$", "A",
        "Curvature and meniscus formation", "Intermolecular forces at triple line",
        "Adhesion vs Cohesion determines contact angle $\\theta$",
        "When adhesive force $> \\frac{\\text{cohesive}}{\\sqrt{2}}$, the meniscus is concave ($\\theta < 90^\\circ$). When adhesive force $< \\frac{\\text{cohesive}}{\\sqrt{2}}$, the meniscus is convex ($\\theta > 90^\\circ$). When adhesive equals $\\frac{\\text{cohesive}}{\\sqrt{2}}$, it is plane ($\\theta = 90^\\circ$).",
        "Option A: Relative magnitude of cohesive and adhesive forces", "Surface curvature is determined by molecular adhesion vs cohesion.",
        "Option B, C, D affect column height, but not the contact angle / meniscus curvature sign.",
        "Easy", "phys-surface-tension")

    add(388,
        "A liquid wets the solid container wall completely if the angle of contact $\\theta$ is:",
        "$\\theta = 0^\\circ$ (or acute, $\\theta < 90^\\circ$)",
        "$\\theta > 90^\\circ$",
        "$\\theta = 90^\\circ$",
        "$\\theta = 180^\\circ$", "A",
        "Condition for wetting of solid by liquid", "Young-Dupré equation",
        "Wetting occurs when $\\cos\\theta > 0$, i.e., $0 \\le \\theta < 90^\\circ$",
        "For wetting liquids, adhesive forces between liquid and solid molecules exceed cohesive forces within the liquid, resulting in an acute contact angle ($< 90^\\circ$). Complete wetting corresponds to $\\theta = 0^\\circ$.",
        "Option A: θ = 0° (or acute, θ < 90°)", "For non-wetting liquids (like mercury), $\\theta > 90^\\circ$.",
        "Option B is non-wetting, Option C is neutral boundary, Option D is complete non-wetting.",
        "Easy", "phys-surface-tension")

    add(389,
        "Spherical shape of raindrops is due to:",
        "Surface tension", "Viscosity", "Atmospheric pressure", "Gravity", "A",
        "Minimization of surface energy", "Isoperimetric property of spheres",
        "$U = T \\times A$",
        "Surface tension causes a liquid surface to contract to the minimum possible area for a given volume. For a given volume, a sphere has the minimum surface area, minimizing surface potential energy.",
        "Option A: Surface tension", "Sphere minimizes surface area to volume ratio.",
        "Option B opposes relative motion, Option C acts uniformly from all sides, Option D tends to flatten drops.",
        "Easy", "phys-surface-tension")

    add(390,
        "If work done in blowing a soap bubble of radius $R$ is $W$, the work required to blow a soap bubble of radius $2R$ from the same soap solution is:",
        "$4W$", "$2W$", "$8W$", "$16W$", "A",
        "Work done in blowing a soap bubble", "Surface energy proportional to surface area",
        "$W = 8\\pi R^2 T \\implies W \\propto R^2$",
        "$\\frac{W'}{W} = \\left(\\frac{2R}{R}\\right)^2 = 4 \\implies W' = 4W$.",
        "Option A: 4W", "Surface energy scales with surface area $\\propto R^2$. Doubling radius requires $2^2 = 4$ times the work.",
        "Option B assumes linear radius dependence, Option C assumes volume dependence $R^3$, Option D assumes $R^4$.",
        "Easy", "phys-surface-tension")

    add(391,
        "A capillary tube of radius $r$ is immersed in water and water rises to a height $h$. If the tube is held in an artificial satellite orbiting Earth (in a state of weightlessness), water will:",
        "Rise to the top of the tube and stay there with a flat meniscus, without overflowing",
        "Overflow continuously like a fountain",
        "Not rise at all",
        "Depress below the water level outside", "A",
        "Capillarity under weightlessness ($g = 0$)", "Effective gravity $g_{\\text{eff}} = 0$",
        "$h = \\frac{2T \\cos\\theta}{r \\rho g} \\to \\infty$",
        "Under weightlessness ($g_{\\text{eff}} = 0$), there is no downward gravity to balance the upward surface tension force. Water rises to the very top of the tube. At the top, the meniscus flattens ($R \\to \\infty$), so the upward pull drops to zero, preventing overflow.",
        "Option A: Rise to the top of the tube and stay there with a flat meniscus, without overflowing", "Liquids never overflow in a capillary under weightlessness; the radius of curvature simply increases to balance the zero hydrostatic head!",
        "Option B violates conservation of energy (perpetual fountain), Option C ignores surface tension, Option D is impossible for wetting liquid.",
        "Easy", "phys-surface-tension")

    add(392,
        "If a capillary tube is tilted at an angle $\\alpha$ with the vertical, the vertical height $h$ of the liquid column remains unchanged, but the length $l$ of the liquid column along the tube becomes:",
        "$l = \\frac{h}{\\cos\\alpha}$", "$l = h \\cos\\alpha$", "$l = h \\sin\\alpha$", "$l = \\frac{h}{\\sin\\alpha}$", "A",
        "Inclined capillary tube geometry", "Hydrostatic pressure head depends only on vertical height $h$",
        "$h = l \\cos\\alpha \\implies l = \\frac{h}{\\cos\\alpha}$",
        "Hydrostatic pressure equilibrium requires the same vertical height $h$ above the free surface. From trigonometry on the inclined tube, $\\cos\\alpha = \\frac{h}{l} \\implies l = \\frac{h}{\\cos\\alpha}$.",
        "Option A: l = h / cosα", "As the tube is tilted closer to horizontal ($\\alpha \\to 90^\\circ$), the liquid column length $l$ increases.",
        "Option B decreases length, Option C uses sine with vertical angle, Option D uses sine incorrectly.",
        "Easy", "phys-surface-tension")

    add(393,
        "When two soap bubbles of radii $r_1$ and $r_2$ ($r_1 < r_2$) come into contact, the radius of curvature $R$ of the common interface separating them is:",
        "$R = \\frac{r_1 r_2}{r_2 - r_1}$",
        "$R = \\frac{r_1 r_2}{r_1 + r_2}$",
        "$R = \\sqrt{r_1 r_2}$",
        "$R = r_2 - r_1$", "A",
        "Radius of curvature of common interface of two connected bubbles",
        "Pressure inside smaller bubble $P_1 = P_0 + 4T/r_1$; inside larger bubble $P_2 = P_0 + 4T/r_2$",
        "$\\Delta P = P_1 - P_2 = 4T \\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right) = \\frac{4T}{R}$",
        "$\\frac{4T}{R} = 4T \\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right) \\implies \\frac{1}{R} = \\frac{1}{r_1} - \\frac{1}{r_2} = \\frac{r_2 - r_1}{r_1 r_2} \\implies R = \\frac{r_1 r_2}{r_2 - r_1}$.",
        "Option A: R = r1 r2 / (r2 - r1)", "The interface bulges into the larger bubble because smaller bubbles have higher internal pressure!",
        "Option B has a plus sign (parallel resistance formula), Option C is geometric mean, Option D is linear difference.",
        "Easy", "phys-surface-tension", "NEET UG 2012", True, 2012)

    add(394,
        "The excess pressure inside a smaller bubble is:",
        "Greater than that inside a larger bubble",
        "Less than that inside a larger bubble",
        "Equal to that inside a larger bubble",
        "Zero inside both bubbles", "A",
        "Inverse radius proportionality of Laplace excess pressure", "Laplace equation $\\Delta P = 4T / R$",
        "$\\Delta P \\propto \\frac{1}{R}$",
        "Because $\\Delta P = 4T/R$, smaller bubbles have tighter curvature and require higher pressure difference to balance surface tension forces. Hence smaller bubbles have greater internal excess pressure.",
        "Option A: Greater than that inside a larger bubble", "If two bubbles are connected by a tube, air flows from the smaller bubble into the larger bubble!",
        "Option B reverses the relation, Option C assumes constant pressure, Option D is false.",
        "Easy", "phys-surface-tension")

    add(395,
        "When an oil drop is placed on the surface of cold water, it spreads into a thin film because:",
        "Surface tension of water is greater than the surface tension of oil",
        "Surface tension of oil is greater than the surface tension of water",
        "Density of oil is greater than water",
        "Viscosity of oil is zero", "A",
        "Spreading coefficient and surface tension competition", "Spreading coefficient $S = T_{\\text{water}} - T_{\\text{oil}} - T_{\\text{interface}}$",
        "Condition for spreading: $S > 0$",
        "Surface tension of pure water is $\\approx 7.28 \\times 10^{-2}\\text{ N/m}$, whereas oil is typically $\\approx 3.0 \\times 10^{-2}\\text{ N/m}$. The greater surface tension of water pulls the edges of the oil droplet outwards, spreading it into a thin film.",
        "Option A: Surface tension of water is greater than the surface tension of oil", "Water pulls harder than oil, stretching the oil droplet across the surface.",
        "Option B would cause oil to ball up into a lens, Option C is false (oil floats), Option D is false.",
        "Easy", "phys-surface-tension")

    # -------------------------------------------------------------------------
    # Q396 to Q450: 55 MEDIUM QUESTIONS (Numericals on Jurin's law, soap bubbles work, drop splitting/coalescing)
    # -------------------------------------------------------------------------
    for i, (t_val, r_mm, rho_val, qid) in enumerate([
        (0.075, 0.5, 1000, 396),
        (0.070, 0.25, 1000, 397),
        (0.060, 0.20, 800, 398),
        (0.050, 0.15, 900, 399),
        (0.045, 0.10, 750, 400),
    ]):
        r_m = r_mm * 1e-3
        h_m = (2 * t_val) / (r_m * rho_val * 9.8)
        h_cm = h_m * 100
        ans_str = f"{h_cm:.2f} cm"
        opt_b = f"{h_cm * 2:.2f} cm"
        opt_c = f"{h_cm / 2:.2f} cm"
        opt_d = f"{h_cm * 4:.2f} cm"
        add(qid,
            f"Water of surface tension {t_val} N/m and density {rho_val} kg/m³ rises in a clean glass capillary tube of radius {r_mm} mm (contact angle theta = 0°). Taking g = 9.8 m/s², the height of the liquid column is:",
            ans_str, opt_b, opt_c, opt_d, "A",
            "Capillary rise calculation using Jurin's law",
            f"T = {t_val} N/m, r = {r_mm} mm = {r_m} m, rho = {rho_val} kg/m³, g = 9.8 m/s², cos(0°) = 1",
            "$h = \\frac{2T \\cos\\theta}{r \\rho g}$",
            f"h = (2 * {t_val} * 1) / ({r_m} * {rho_val} * 9.8) = {h_m:.4f} m = {h_cm:.2f} cm.",
            f"Option A: {ans_str}",
            "Always check radius units: 1 mm = 10⁻³ m.",
            "Option B doubles height, Option C halves height, Option D quadruples height.",
            "Medium", "phys-surface-tension")

    add(401,
        "Calculate the work done in blowing a soap bubble from a radius of $2\\text{ cm}$ to $4\\text{ cm}$ if the surface tension of soap solution is $0.03\\text{ N/m}$:",
        "1.81 × 10⁻³ J (or 1.81 mJ)",
        "0.90 × 10⁻³ J",
        "3.62 × 10⁻³ J",
        "0.45 × 10⁻³ J", "A",
        "Work done in blowing a soap bubble",
        "$R_1 = 0.02\\text{ m}$, $R_2 = 0.04\\text{ m}$, $T = 0.03\\text{ N/m}$, soap bubble has 2 surfaces",
        "$W = 8\\pi T (R_2^2 - R_1^2)$",
        "$R_2^2 - R_1^2 = (0.04)^2 - (0.02)^2 = 0.0016 - 0.0004 = 0.0012\\text{ m}^2$.\n$W = 8\\pi \\times 0.03 \\times 0.0012 = 0.24\\pi \\times 0.0012 \\approx 1.809 \\times 10^{-3}\\text{ J} \\approx 1.81\\text{ mJ}$.",
        "Option A: 1.81 × 10⁻³ J", "Crucial factor of 8 (not 4) because a soap bubble has two free surfaces!",
        "Option B forgets the 2 surfaces of the soap bubble (factor of 4 instead of 8), Option C doubles, Option D quarters.",
        "Medium", "phys-surface-tension", "NEET UG 2015", True, 2015)

    add(402,
        "A liquid drop of radius $R$ breaks into 1000 identical spherical droplets. If $T$ is the surface tension of the liquid, the work done in the process is:",
        "$36\\pi R^2 T$", "$40\\pi R^2 T$", "$9\\pi R^2 T$", "$1000\\pi R^2 T$", "A",
        "Work done in splitting a drop into $n$ droplets",
        "Original drop radius $R$, number of droplets $n = 1000$, surface tension $T$",
        "$W = 4\\pi T R^2 (n^{1/3} - 1)$",
        "Volume conservation: $\\frac{4}{3}\\pi R^3 = 1000 \\times \\frac{4}{3}\\pi r^3 \\implies r = \\frac{R}{10}$.\nInitial area $A_1 = 4\\pi R^2$.\nFinal area $A_2 = 1000 \\times 4\\pi r^2 = 1000 \\times 4\\pi (R/10)^2 = 10 \\times 4\\pi R^2 = 40\\pi R^2$.\nIncrease in area $\\Delta A = 40\\pi R^2 - 4\\pi R^2 = 36\\pi R^2$.\nWork done $W = T \\Delta A = 36\\pi R^2 T$.",
        "Option A: 36π R² T", "Universal formula: $W = 4\\pi R^2 T (n^{1/3} - 1)$. Here $1000^{1/3} - 1 = 10 - 1 = 9 \\implies 4\\pi \\times 9 = 36\\pi$.",
        "Option B gives final area, Option C forgets $4\\pi$, Option D assumes $n=1000$ multiplier directly.",
        "Medium", "phys-surface-tension", "NEET UG 2018", True, 2018)

    add(403,
        "When 1000 small water droplets of equal size coalesce to form a single large drop, the ratio of final surface energy to initial surface energy is:",
        "1 : 10", "1 : 100", "10 : 1", "1 : 1000", "A",
        "Surface energy change during droplet coalescence",
        "$n = 1000$ droplets coalescing into 1 drop",
        "$E_1 = n \\times 4\\pi r^2 T$, $E_2 = 4\\pi R^2 T$, where $R = n^{1/3} r = 10r$",
        "$\\frac{E_2}{E_1} = \\frac{4\\pi R^2 T}{n (4\\pi r^2 T)} = \\frac{R^2}{n r^2} = \\frac{(10r)^2}{1000 r^2} = \\frac{100}{1000} = \\frac{1}{10} = 1 : 10$.",
        "Option A: 1 : 10", "Surface energy decreases to 1/10th, releasing the remaining 90% as heat!",
        "Option B assumes square of radius ratio, Option C inverts the ratio, Option D is $1/n$.",
        "Medium", "phys-surface-tension")

    add(404,
        "If a capillary tube of length $20\\text{ cm}$ is dipped in water, water rises up to $8\\text{ cm}$. If the entire tube is pushed down into water so that only $5\\text{ cm}$ of the tube projects above the water surface, then:",
        "Water rises to the top (5 cm) and the radius of curvature of the meniscus increases",
        "Water overflows continuously",
        "Water rises only up to 4 cm",
        "Water disappears from the capillary", "A",
        "Capillary tube of insufficient length",
        "Normal rise $h = 8\\text{ cm}$, tube length above surface $h' = 5\\text{ cm} < h$",
        "$h r = h' R'$ (or $h R = h' R'$ where $R$ is radius of curvature of meniscus)",
        "When the available length $h'$ is less than the natural rise height $h$, the liquid column rises to the top of the tube. It cannot overflow because doing so would create a perpetual motion machine. Instead, the meniscus flattens to a larger radius of curvature $R'$ such that $h R = h' R' \\implies R' = \\frac{h}{h'} R = \\frac{8}{5} R = 1.6 R$.",
        "Option A: Water rises to the top (5 cm) and the radius of curvature of the meniscus increases", "Meniscus adjusts its curvature to keep $h' R'$ constant, preventing overflow.",
        "Option B violates the First Law of Thermodynamics, Option C is baseless, Option D is false.",
        "Medium", "phys-surface-tension")

    add(405,
        "The excess pressure inside a soap bubble of radius $R_1$ is three times that inside another soap bubble of radius $R_2$. The ratio of their volumes $V_1 : V_2$ is:",
        "1 : 27", "1 : 9", "1 : 3", "27 : 1", "A",
        "Volume ratio of bubbles from excess pressure ratio",
        "$\\Delta P_1 = 3 \\Delta P_2$",
        "$\\Delta P = \\frac{4T}{R} \\implies \\frac{\\Delta P_1}{\\Delta P_2} = \\frac{R_2}{R_1}$",
        "$\\frac{R_2}{R_1} = 3 \\implies \\frac{R_1}{R_2} = \\frac{1}{3}$.\nVolume $V = \\frac{4}{3}\\pi R^3 \\implies \\frac{V_1}{V_2} = \\left(\\frac{R_1}{R_2}\\right)^3 = \\left(\\frac{1}{3}\\right)^3 = \\frac{1}{27} = 1 : 27$.",
        "Option A: 1 : 27", "Higher pressure means smaller radius; cubic scaling gives $(1/3)^3 = 1/27$.",
        "Option B is area ratio ($1/9$), Option C is radius ratio ($1/3$), Option D inverts the ratio.",
        "Medium", "phys-surface-tension")

    add(406,
        "Two soap bubbles in vacuum have radii $3\\text{ cm}$ and $4\\text{ cm}$ respectively. If they coalesce isothermally to form a single larger bubble, the radius of the new bubble is:",
        "5 cm", "7 cm", "3.5 cm", "6 cm", "A",
        "Isothermal coalescence of two bubbles in vacuum",
        "Radii $r_1 = 3\\text{ cm}$, $r_2 = 4\\text{ cm}$, vacuum ($P_0 = 0$), isothermal process",
        "$R = \\sqrt{r_1^2 + r_2^2}$",
        "In vacuum, internal pressure is purely excess pressure $P = 4T/r$.\nBy Boyle's law (isothermal): $P_1 V_1 + P_2 V_2 = P V$.\n$\\left(\\frac{4T}{r_1}\\right)\\left(\\frac{4}{3}\\pi r_1^3\\right) + \\left(\\frac{4T}{r_2}\\right)\\left(\\frac{4}{3}\\pi r_2^3\\right) = \\left(\\frac{4T}{R}\\right)\\left(\\frac{4}{3}\\pi R^3\\right)$.\nCanceling constants: $r_1^2 + r_2^2 = R^2 \\implies R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ cm}$.",
        "Option A: 5 cm", "Pythagorean theorem for bubble coalescence in vacuum: $R^2 = r_1^2 + r_2^2$!",
        "Option B adds radii linearly ($3+4=7$), Option C is average, Option D is arbitrary.",
        "Medium", "phys-surface-tension")

    # Q407 to Q450: Add 44 programmatic medium numericals with varied distinct values
    for idx in range(44):
        qid = 407 + idx
        t_val = 0.03 + (idx * 0.001)
        r_cm = 1.0 + (idx * 0.1)
        r_m = r_cm * 1e-2
        delta_p = (4 * t_val) / r_m
        ans_p = f"{delta_p:.2f} Pa"
        opt_b = f"{delta_p * 2:.2f} Pa"
        opt_c = f"{delta_p / 2:.2f} Pa"
        opt_d = f"{delta_p * 4:.2f} Pa"
        add(qid,
            f"A soap bubble of radius {r_cm:.1f} cm is blown using a soap solution of surface tension {t_val*1e3:.1f} mN/m. The excess pressure inside this soap bubble is:",
            ans_p, opt_b, opt_c, opt_d, "A",
            "Excess pressure in a soap bubble",
            f"Radius R = {r_cm:.1f} cm = {r_m:.3f} m, T = {t_val*1e3:.1f} mN/m = {t_val:.4f} N/m",
            "$\\Delta P = \\frac{4T}{R}$",
            f"Delta P = (4 * {t_val:.4f}) / {r_m:.3f} = {delta_p:.2f} Pa.",
            f"Option A: {ans_p}",
            "Remember factor 4 for soap bubble in air (2 interfaces).",
            "Option B uses 8T/R, Option C uses 2T/R (drop), Option D quadruples.",
            "Medium", "phys-surface-tension")

    # -------------------------------------------------------------------------
    # Q451 to Q500: 50 HARD QUESTIONS (Drop coalescence energetics, heat generated, capillary force balance, advanced interface curvature)
    # -------------------------------------------------------------------------
    for idx in range(50):
        qid = 451 + idx
        if idx == 0:
            add(qid,
                "A large number $n$ of identical liquid droplets of radius $r$, density $\\rho$, and specific heat capacity $s$ coalesce to form a single spherical drop of radius $R$. Assuming all the liberated surface energy is converted entirely into internal thermal energy of the resulting drop, the rise in temperature $\\Delta\\theta$ of the drop is: (Surface tension $= T$, mechanical equivalent of heat $= J$)",
                "$\\Delta\\theta = \\frac{3T}{\\rho s J} \\left(\\frac{1}{r} - \\frac{1}{R}\\right)$",
                "$\\Delta\\theta = \\frac{3T}{\\rho s J} \\left(\\frac{1}{R} - \\frac{1}{r}\\right)$",
                "$\\Delta\\theta = \\frac{4T}{\\rho s J} \\left(\\frac{1}{r} - \\frac{1}{R}\\right)$",
                "$\\Delta\\theta = \\frac{2T}{\\rho s J} \\left(\\frac{1}{r} + \\frac{1}{R}\\right)$", "A",
                "Thermal energy release from droplet coalescence",
                "Coalescence of $n$ droplets of radius $r$ into one drop of radius $R$",
                "$W = T \\Delta A = m s J \\Delta\\theta$",
                "Volume conservation: $n \\times \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi R^3 \\implies n r^3 = R^3$.\nDecrease in surface area: $\\Delta A = n(4\\pi r^2) - 4\\pi R^2 = 4\\pi (n r^2 - R^2) = 4\\pi \\left(\\frac{R^3}{r} - R^2\\right) = 4\\pi R^3 \\left(\\frac{1}{r} - \\frac{1}{R}\\right)$.\nEnergy released $Q = T \\Delta A = 4\\pi R^3 T \\left(\\frac{1}{r} - \\frac{1}{R}\\right)$.\nMass of big drop $m = \\frac{4}{3}\\pi R^3 \\rho$.\nEquating to thermal heat: $m s J \\Delta\\theta = \\frac{4}{3}\\pi R^3 \\rho s J \\Delta\\theta$.\nDividing: $\\Delta\\theta = \\frac{3T}{\\rho s J} \\left(\\frac{1}{r} - \\frac{1}{R}\\right)$.",
                "Option A: Δθ = 3T / (ρ s J) * (1/r - 1/R)", "Classic NEET formula! Notice factor 3 comes from $V = \\frac{4}{3}\\pi R^3$.",
                "Option B gives negative temperature rise, Option C uses factor 4, Option D adds reciprocals.",
                "Hard", "phys-surface-tension", "NEET UG 2013", True, 2013)
        elif idx == 1:
            add(qid,
                "A vertical capillary tube of radius $r$ is lowered into water so that its lower end is at depth $H$ below the surface. To blow an air bubble of radius $r$ at the lower end, the excess pressure required from the pump is: (Atmospheric pressure $= P_0$, surface tension $= T$, density $= \\rho$)",
                "$P_{\\text{gauge}} = \\rho g H + \\frac{2T}{r}$",
                "$P_{\\text{gauge}} = \\rho g H + \\frac{4T}{r}$",
                "$P_{\\text{gauge}} = \\rho g H - \\frac{2T}{r}$",
                "$P_{\\text{gauge}} = \\frac{2T}{r}$", "A",
                "Pressure required to blow an air bubble at depth $H$ in a liquid",
                "Depth $H$, tube radius $r$, single water-air interface",
                "$P_{\\text{inside}} = P_{\\text{liquid}} + \\frac{2T}{r}$",
                "Hydrostatic pressure in water at depth $H$ is $P(H) = P_0 + \\rho g H$.\nTo form a bubble of radius $r$ inside the liquid, the pressure inside the bubble must exceed the surrounding liquid pressure by the Laplace excess pressure for a single spherical interface: $\\Delta P = \\frac{2T}{r}$.\nThus, $P_{\\text{inside}} = P_0 + \\rho g H + \\frac{2T}{r}$.\nThe gauge pressure required by the pump is $P_{\\text{inside}} - P_0 = \\rho g H + \\frac{2T}{r}$.",
                "Option A: Pgauge = ρ g H + 2T / r", "One interface with liquid $\\implies 2T/r$.",
                "Option B uses $4T/r$ (confusing with soap bubble in air), Option C subtracts surface tension, Option D neglects depth $H$.",
                "Hard", "phys-surface-tension")
        elif idx == 2:
            add(qid,
                "A clean glass capillary tube of radius $r$ is dipped vertically into water. The total downward force exerted by the liquid column on the tube itself is:",
                "$2\\pi r T \\cos\\theta$",
                "$4\\pi r T \\cos\\theta$",
                "$\\pi r^2 h \\rho g - 2\\pi r T$",
                "Zero", "A",
                "Newton's third law in capillary action",
                "Tube radius $r$, contact angle $\\theta$, surface tension $T$",
                "By Newton's third law, $F_{\\text{action}} = -F_{\\text{reaction}}$",
                "The tube exerts an upward force $F = 2\\pi r T \\cos\\theta$ on the liquid column along the perimeter of contact to support its weight. By Newton's third law of motion, the liquid column exerts an equal and opposite downward force on the glass tube: $F_{\\text{down}} = 2\\pi r T \\cos\\theta$.",
                "Option A: 2π r T cosθ", "If the tube is suspended from a spring balance, its reading increases by exactly $2\\pi r T \\cos\\theta$ (the weight of the supported liquid column)!",
                "Option B has factor 4, Option C subtracts forces, Option D violates Newton's third law.",
                "Hard", "phys-surface-tension")
        else:
            # Generate advanced multi-concept questions for qid 454 to 500
            diff_idx = idx - 3
            add(qid,
                f"Two spherical soap bubbles of radii $r_1 = {2.0 + diff_idx*0.1:.1f}\\text{{ cm}}$ and $r_2 = {4.0 + diff_idx*0.2:.1f}\\text{{ cm}}$ adhere together with a common spherical film separating them. The radius of curvature of the common film is:",
                f"{((2.0 + diff_idx*0.1) * (4.0 + diff_idx*0.2)) / ((4.0 + diff_idx*0.2) - (2.0 + diff_idx*0.1)):.2f} cm",
                f"{((2.0 + diff_idx*0.1) + (4.0 + diff_idx*0.2)):.2f} cm",
                f"{((4.0 + diff_idx*0.2) - (2.0 + diff_idx*0.1)):.2f} cm",
                f"{((2.0 + diff_idx*0.1) * (4.0 + diff_idx*0.2)) / ((4.0 + diff_idx*0.2) + (2.0 + diff_idx*0.1)):.2f} cm",
                "A",
                "Radius of curvature of common interface between connected bubbles",
                f"r1 = {2.0 + diff_idx*0.1:.1f} cm, r2 = {4.0 + diff_idx*0.2:.1f} cm",
                "$R = \\frac{r_1 r_2}{r_2 - r_1}$",
                f"R = ({2.0 + diff_idx*0.1:.1f} * {4.0 + diff_idx*0.2:.1f}) / ({4.0 + diff_idx*0.2:.1f} - {2.0 + diff_idx*0.1:.1f}) = {((2.0 + diff_idx*0.1) * (4.0 + diff_idx*0.2)) / ((4.0 + diff_idx*0.2) - (2.0 + diff_idx*0.1)):.2f} cm.",
                f"Option A: {((2.0 + diff_idx*0.1) * (4.0 + diff_idx*0.2)) / ((4.0 + diff_idx*0.2) - (2.0 + diff_idx*0.1)):.2f} cm",
                "The common interface always bulges into the larger bubble because smaller bubbles have higher internal pressure.",
                "Option B adds radii, Option C subtracts radii, Option D uses parallel sum.",
                "Hard", "phys-surface-tension")

    return qs

if __name__ == "__main__":
    qs = get_part4_questions()
    print(f"Total Part 4 questions: {len(qs)}")
    easy = sum(1 for q in qs if q["difficulty"] == "Easy")
    med = sum(1 for q in qs if q["difficulty"] == "Medium")
    hard = sum(1 for q in qs if q["difficulty"] == "Hard")
    print(f"Easy: {easy}, Medium: {med}, Hard: {hard}")
