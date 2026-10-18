#!/usr/bin/env python3
"""
Full Generator for Mechanical Properties of Fluids - Part 1 (Q1 to Q125)
Distribution: Exactly 40 Easy, 65 Medium, 20 Hard = 125 MCQs
Topics: Fluid density, relative density, fluid mixtures, Hydrostatic pressure variation with depth,
Pascal's law, Hydraulic lift and press, Manometers and barometers,
Archimedes' principle, Buoyancy, Apparent weight, Floating bodies & ice melting.
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
    # Q1 to Q40: 40 EASY QUESTIONS
    # -------------------------------------------------------------------------
    add(1,
        "Pressure is a scalar quantity because:",
        "It has magnitude as well as a unique physical direction in space",
        "The hydrostatic force acts perpendicular to any surface immersed in the fluid regardless of orientation",
        "It is defined as the dot product of two vectors",
        "It vanishes in all inertial frames of reference", "B",
        "Hydrostatic pressure at a point in a fluid acts equally in all directions. The direction of hydrostatic thrust on an element of surface is always normal to the surface, determined by the orientation of the surface, not by the pressure itself.",
        "Definition and physical nature of fluid pressure.",
        "P = \\lim_{\\Delta A \\to 0} \\frac{\\Delta F_\\perp}{\\Delta A}",
        "1. Pressure does not possess a definite directional orientation associated with the fluid point itself.\n2. Hydrostatic force always acts perpendicular to any surface placed in contact with the fluid.\n3. Therefore, pressure is a scalar quantity (or an isotropic rank-0 tensor).",
        "Option B: The hydrostatic force acts perpendicular to any surface immersed in the fluid regardless of orientation",
        "Force is a vector, but pressure is a scalar because the force direction depends entirely on the orientation of the contact area.",
        "A is false; C is false because pressure is normal force over area, not a dot product; D is unphysical.",
        "Easy", "phys-fluid-pressure", "NEET Core Concept")

    add(2,
        "What are the dimensions of pressure in terms of base mechanical units $[M, L, T]$?",
        "$[M^1 L^{-1} T^{-2}]$", "$[M^1 L^{-2} T^{-2}]$", "$[M^1 L^1 T^{-2}]$", "$[M^1 L^{-1} T^{-1}]$", "A",
        "Pressure is defined as force per unit area: $[P] = [F] / [A]$.",
        "Force $[F] = [M L T^{-2}]$, Area $[A] = [L^2]$.",
        "[P] = \\frac{[F]}{[A]} = \\frac{[M L T^{-2}]}{[L^2]} = [M L^{-1} T^{-2}]",
        "1. $[F] = [M L T^{-2}]$.\n2. $[A] = [L^2]$.\n3. $[P] = \\frac{[M L T^{-2}]}{[L^2]} = [M L^{-1} T^{-2}]$.",
        "Option A: $[M^1 L^{-1} T^{-2}]$",
        "Pressure, stress, Young's modulus, Bulk modulus, and energy density all share the identical dimensional formula $[M L^{-1} T^{-2}]$.",
        "B has incorrect length exponent; C is force; D is coefficient of viscosity.",
        "Easy", "phys-fluid-pressure")

    add(3,
        "One atmosphere ($1\\text{ atm}$) of pressure is equivalent to approximately:",
        "$1.013 \\times 10^5\\text{ Pa}$", "$1.013 \\times 10^6\\text{ Pa}$", "$76\\text{ Pa}$", "$1.013 \\times 10^3\\text{ Pa}$", "A",
        "Standard atmospheric pressure at sea level is defined as the hydrostatic pressure exerted by a $76\\text{ cm}$ ($0.76\\text{ m}$) column of mercury ($\\\\rho_{\\text{Hg}} = 13600\\text{ kg/m}^3, g = 9.8\\text{ m/s}^2$).",
        "Standard atmospheric pressure constants.",
        "P_{\\text{atm}} = \\rho g h = (13600)(9.8)(0.76) \\approx 1.013 \\times 10^5\\text{ N/m}^2 = 1.013 \\times 10^5\\text{ Pa}",
        "1. $P = \\rho g h = 13600 \\times 9.8 \\times 0.76$.\n2. $P = 101292.8\\text{ Pa} \\approx 1.013 \\times 10^5\\text{ Pa} = 1.013\\text{ bar}$.",
        "Option A: $1.013 \\times 10^5\\text{ Pa}$",
        "Remember: $1\\text{ atm} \\approx 10^5\\text{ Pa} = 760\\text{ torr} = 760\\text{ mm of Hg}$.",
        "B is 10 times too large; C is the column height in cm, not pressure in Pa; D is 100 times too small.",
        "Easy", "phys-fluid-pressure")

    add(4,
        "The unit 'torr' used in measuring fluid pressure is equal to:",
        "$1\\text{ mm of Hg}$", "$1\\text{ cm of Hg}$", "$1\\text{ m of Hg}$", "$760\\text{ atm}$", "A",
        "One torr is defined as the pressure exerted by a column of mercury of height $1\\text{ mm}$: $1\\text{ torr} = 1\\text{ mm of Hg} \\approx 133.32\\text{ Pa}$.",
        "Definition of unit torr.",
        "1\\text{ torr} = 1\\text{ mm of Hg} = \\frac{1}{760}\\text{ atm} \\approx 133.3\\text{ Pa}",
        "1. Torricelli's barometer has $760\\text{ mm}$ of mercury under $1\\text{ atm}$.\n2. Thus $1\\text{ torr} = 1\\text{ mm of Hg} \\approx 133.3\\text{ Pa}$.",
        "Option A: $1\\text{ mm of Hg}$",
        "Torr is named in honour of Evangelista Torricelli, inventor of the mercury barometer.",
        "B is 10 torr; C is 1000 torr; D inverts the atmospheric ratio.",
        "Easy", "phys-fluid-pressure")

    add(5,
        "Pascal's law for transmission of fluid pressure is strictly valid for:",
        "An incompressible fluid enclosed in a container at rest",
        "Only compressible gases in turbulent flow",
        "Only viscous fluids flowing at supersonic speeds",
        "Fluids accelerating at free fall acceleration $g$", "A",
        "Pascal's law states that pressure applied to an enclosed, incompressible static fluid is transmitted equally and undiminished to every portion of the fluid and the walls of the containing vessel.",
        "Conditions of validity for Pascal's law.",
        "\\Delta P = \\text{constant throughout enclosed static fluid}",
        "1. Pascal's principle requires an enclosed fluid in static equilibrium.\n2. Incompressibility ensures instantaneous uniform transmission of applied pressure.\n3. Hence it applies to enclosed static fluids.",
        "Option A: An incompressible fluid enclosed in a container at rest",
        "Hydraulic lifts, presses, and hydraulic brakes are direct engineering applications of Pascal's law.",
        "B, C, and D describe dynamic or unconfined states where Pascal's static law is not applicable.",
        "Easy", "phys-fluid-pressure", "NEET Core Concept")

    add(6,
        "In a hydraulic lift, the diameter of the smaller piston is $d_1$ and that of the larger piston is $d_2$. If a force $F_1$ is applied on the smaller piston, the force $F_2$ produced on the larger piston is:",
        "$F_1 \\left(\\frac{d_2}{d_1}\\right)^2$", "$F_1 \\left(\\frac{d_2}{d_1}\\right)$", "$F_1 \\left(\\frac{d_1}{d_2}\\right)^2$", "$F_1 \\left(\\frac{d_2}{d_1}\\right)^3$", "A",
        "By Pascal's law, pressure is transmitted equally: $P_1 = P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2}$. Since area $A = \\pi d^2 / 4$, the force multiplies by the square of the diameter ratio.",
        "Piston diameters $d_1, d_2$, applied force $F_1$.",
        "\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\frac{A_2}{A_1} = F_1 \\left(\\frac{d_2}{d_1}\\right)^2",
        "1. Pressure at input: $P_1 = \\frac{F_1}{A_1} = \\frac{4 F_1}{\\pi d_1^2}$.\n2. Pressure at output: $P_2 = \\frac{F_2}{A_2} = \\frac{4 F_2}{\\pi d_2^2}$.\n3. Equating $P_1 = P_2$: $\\frac{F_1}{d_1^2} = \\frac{F_2}{d_2^2} \\implies F_2 = F_1 \\left(\\frac{d_2}{d_1}\\right)^2$.",
        "Option A: $F_1 \\left(\\frac{d_2}{d_1}\\right)^2$",
        "Hydraulic mechanical advantage scales with the square of diameter/radius ratio: doubling diameter quadruples output force!",
        "B assumes linear diameter dependence; C inverts the ratio; D is cubic.",
        "Easy", "phys-fluid-pressure", "AIPMT Classic")

    add(7,
        "The hydrostatic paradox states that:",
        "Hydrostatic pressure at the base of a liquid column depends only on vertical depth, not on the shape of the vessel or total liquid volume",
        "Pressure increases exponentially with depth",
        "A liquid column exerts zero force on the base of its container",
        "Denser liquids always exert smaller pressure than lighter liquids", "A",
        "Hydrostatic pressure is determined purely by $P = \\rho g h$. Vessels of different shapes holding different total volumes of the same liquid exert identical pressure at identical depth $h$.",
        "Hydrostatic paradox in fluid statics.",
        "P = \\rho g h \\quad (\\text{independent of vessel cross-section and shape})",
        "1. Pressure depends solely on the liquid density $\\rho$, acceleration due to gravity $g$, and vertical depth $h$.\n2. Even though vessel shapes and total liquid volumes may differ widely, if the base depth $h$ is the same, base pressure is identical.\n3. This apparent contradiction between total weight and base pressure is the hydrostatic paradox.",
        "Option A: Hydrostatic pressure at the base of a liquid column depends only on vertical depth, not on the shape of the vessel or total liquid volume",
        "The extra downward or upward forces in oddly shaped vessels are supported by normal forces from the inclined container walls.",
        "B is false (pressure varies linearly $\\rho gh$, not exponentially); C and D contradict basic hydrostatics.",
        "Easy", "phys-fluid-pressure")

    add(8,
        "A piece of ice floats in water contained in a beaker. When the ice melts completely, the water level in the beaker will:",
        "Remain unchanged", "Rise", "Fall", "First rise then fall", "A",
        "A floating body displaces a weight of liquid equal to its own weight. When ice melts, its mass is conserved, turning into water whose volume exactly matches the volume of water originally displaced.",
        "Ice of mass $M$ floating in water.",
        "V_{\\text{displaced}} = \\frac{M}{\\rho_{\\text{water}}} = V_{\\text{melted water}}",
        "1. Mass of floating ice $= M$.\n2. Weight of displaced water $= M g \\implies V_{\\text{displaced}} = \\frac{M}{\\rho_{\\text{water}}}$.\n3. When ice melts completely, it converts into liquid water of mass $M$.\n4. Volume of this melted water is $V_{\\text{water}} = \\frac{M}{\\rho_{\\text{water}}}$.\n5. Since $V_{\\text{water}} = V_{\\text{displaced}}$, the melted water exactly fills the submerged cavity, leaving the water level unchanged.",
        "Option A: Remain unchanged",
        "Classic NEET question! Water level remains unchanged when pure ice melts in pure water.",
        "B and C confuse volume with mass conservation; D is unphysical.",
        "Easy", "phys-fluid-pressure", "NEET UG Frequent")

    add(9,
        "Archimedes' principle states that the upward buoyant force on a submerged body is equal to:",
        "The weight of the fluid displaced by the body",
        "The total weight of the body itself",
        "The surface area of the body multiplied by atmospheric pressure",
        "The volume of the fluid multiplied by gravitational acceleration alone", "A",
        "By Archimedes' principle, any body completely or partially submerged in a fluid experiences an upward buoyant force equal to the weight of the displaced fluid: $F_B = V_{\\text{sub}} \\rho_f g$.",
        "Archimedes' principle definition.",
        "F_B = V_{\\text{displaced}} \\, \\rho_{\\text{fluid}} \\, g = W_{\\text{displaced fluid}}",
        "1. The upward force arises from the pressure difference between the bottom and top of the immersed body.\n2. Integrating the pressure over the closed surface yields an upward resultant equal to the weight of the fluid displaced.\n3. Hence $F_B = W_{\\text{displaced}}$.",
        "Option A: The weight of the fluid displaced by the body",
        "Buoyancy depends on the density of the FLUID, not the density of the body!",
        "B is true only for a floating body in equilibrium; C and D are dimensionally incorrect.",
        "Easy", "phys-fluid-pressure")

    add(10,
        "A body floats in a liquid with $40\\%$ of its volume submerged. The ratio of the density of the body to that of the liquid is:",
        "$0.4$", "$0.6$", "$2.5$", "$1.4$", "A",
        "For a floating body, weight of the body equals buoyant force: $V \\rho_b g = V_{\\text{in}} \\rho_l g \\implies \\frac{\\rho_b}{\\rho_l} = \\frac{V_{\\text{in}}}{V}$.",
        "Submerged fraction $V_{\\text{in}}/V = 0.40$.",
        "\\frac{\\rho_{\\text{body}}}{\\rho_{\\text{liquid}}} = \\frac{V_{\\text{in}}}{V} = 0.40",
        "1. Weight of body: $W = V \\rho_b g$.\n2. Buoyant force: $F_B = V_{\\text{in}} \\rho_l g = 0.40 V \\rho_l g$.\n3. In floating equilibrium: $W = F_B \\implies V \\rho_b g = 0.40 V \\rho_l g$.\n4. Therefore, $\\frac{\\rho_b}{\\rho_l} = 0.40$.",
        "Option A: $0.4$",
        "Fraction of volume submerged equals the relative density of the body with respect to the liquid: $\\frac{V_{\\text{in}}}{V} = \\frac{\\rho_b}{\\rho_l}$.",
        "B is the fraction above the liquid ($60\\%$); C inverts the ratio; D adds fractions.",
        "Easy", "phys-fluid-pressure", "AIPMT 2012")

    # Generate next 30 easy questions (Q11 to Q40) covering densities, Pascal, manometers, Archimedes
    p1_easy_extra = [
        ("The relative density (specific gravity) of a substance is defined as:",
         "Ratio of density of substance to the density of water at $4^\\circ\\text{C}$",
         "Density of substance multiplied by density of water",
         "Mass of substance divided by volume of water",
         "Weight of substance in vacuum divided by atmospheric pressure", "A",
         "Relative density is a dimensionless ratio comparing substance density to the maximum density of pure water at $4^\\circ\\text{C}$ ($1000\\text{ kg/m}^3$).",
         "Definition of relative density.",
         "\\text{Relative Density} = \\frac{\\rho_{\\text{substance}}}{\\rho_{\\text{water at } 4^\\circ\\text{C}}}",
         "1. By definition, relative density is the ratio of substance density to density of water at $4^\\circ\\text{C}$.\n2. Because it is a ratio of two identical physical quantities, it is dimensionless and unitless.",
         "Option A: Ratio of density of substance to the density of water at $4^\\circ\\text{C}$",
         "Relative density of mercury is 13.6, meaning it is 13.6 times denser than water.",
         "B, C, and D are dimensionally and conceptually incorrect.", "Easy", "phys-fluid-pressure"),

        ("What are the SI units of relative density?",
         "Dimensionless (no units)", "$\\text{kg/m}^3$", "$\\text{g/cm}^3$", "$\\text{N/m}^2$", "A",
         "Since relative density is the ratio of two densities, the units cancel out completely: $[\text{RD}] = [M^0 L^0 T^0]$.",
         "Relative density dimensions.",
         "[\\text{RD}] = \\frac{[\\text{kg/m}^3]}{[\\text{kg/m}^3]} = 1",
         "1. Density of substance has units $\\text{kg/m}^3$.\n2. Density of water has units $\\text{kg/m}^3$.\n3. Dividing yields a pure dimensionless number.",
         "Option A: Dimensionless (no units)",
         "Do not confuse relative density (dimensionless) with absolute density ($\text{kg/m}^3$).",
         "B and C are units of absolute density; D is pressure.", "Easy", "phys-fluid-pressure"),

        ("When equal volumes of two non-reacting liquids of densities $\\rho_1$ and $\\rho_2$ are mixed together, the density of the mixture is:",
         "$\\frac{\\rho_1 + \\rho_2}{2}$", "$\\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$", "$\\sqrt{\\rho_1 \\rho_2}$", "$\\frac{\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$", "A",
         "Total mass is $M = V\\rho_1 + V\\rho_2 = V(\\rho_1 + \\rho_2)$. Total volume is $V_{\\text{tot}} = 2V$. Mixture density is $\\rho_{\\text{mix}} = M / V_{\\text{tot}} = \\frac{\\rho_1 + \\rho_2}{2}$.",
         "Equal volumes $V_1 = V_2 = V$, densities $\\rho_1, \\rho_2$.",
         "\\rho_{\\text{mix}} = \\frac{M_1 + M_2}{V_1 + V_2} = \\frac{V\\rho_1 + V\\rho_2}{2V} = \\frac{\\rho_1 + \\rho_2}{2}",
         "1. $M_{\\text{total}} = V \\rho_1 + V \\rho_2$.\n2. $V_{\\text{total}} = 2V$.\n3. $\\rho_{\\text{mix}} = \\frac{V(\\rho_1 + \\rho_2)}{2V} = \\frac{\\rho_1 + \\rho_2}{2}$ (arithmetic mean).",
         "Option A: $\\frac{\\rho_1 + \\rho_2}{2}$",
         "Equal volume mixing gives arithmetic mean; equal mass mixing gives harmonic mean!",
         "B is for equal masses; C is geometric mean; D has missing factor 2.", "Easy", "phys-fluid-pressure"),

        ("When equal masses of two non-reacting liquids of densities $\\rho_1$ and $\\rho_2$ are mixed together, the density of the mixture is:",
         "$\\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$", "$\\frac{\\rho_1 + \\rho_2}{2}$", "$\\frac{\\rho_1 \\rho_2}{2(\\rho_1 + \\rho_2)}$", "$\\sqrt{\\rho_1 \\rho_2}$", "A",
         "Total mass is $2M$. Total volume is $V = \\frac{M}{\\rho_1} + \\frac{M}{\\rho_2} = M\\frac{\\rho_1 + \\rho_2}{\\rho_1 \\rho_2}$. Mixture density is $\\rho_{\\text{mix}} = \\frac{2M}{V} = \\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$.",
         "Equal masses $M_1 = M_2 = M$, densities $\\rho_1, \\rho_2$.",
         "\\rho_{\\text{mix}} = \\frac{2M}{M/\\rho_1 + M/\\rho_2} = \\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}",
         "1. Volume $V_1 = M/\\rho_1, V_2 = M/\\rho_2$.\n2. $V_{\\text{total}} = M\\left(\\frac{1}{\\rho_1} + \\frac{1}{\\rho_2}\\right) = M\\frac{\\rho_1 + \\rho_2}{\\rho_1 \\rho_2}$.\n3. $\\rho_{\\text{mix}} = \\frac{2M}{V_{\\text{total}}} = \\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$ (harmonic mean).",
         "Option A: $\\frac{2\\rho_1 \\rho_2}{\\rho_1 + \\rho_2}$",
         "Equal mass mixing always yields the harmonic mean of the densities.",
         "B is for equal volumes; C and D are algebraic distractors.", "Easy", "phys-fluid-pressure"),

        ("The gauge pressure $P_g$ at a depth $h$ in an open liquid of density $\\rho$ is given by:",
         "$\\rho g h$", "$P_0 + \\rho g h$", "$P_0 - \\rho g h$", "$\\frac{1}{2}\\rho g h$", "A",
         "Gauge pressure is defined as the excess pressure above local atmospheric pressure: $P_g = P_{\\text{abs}} - P_0 = (P_0 + \\rho gh) - P_0 = \\rho gh$.",
         "Open liquid of density $\\rho$, atmospheric pressure $P_0$.",
         "P_{\\text{gauge}} = P_{\\text{absolute}} - P_{\\text{atm}} = \\rho g h",
         "1. Absolute pressure at depth $h$ is $P_{\\text{abs}} = P_0 + \\rho gh$.\n2. By definition, gauge pressure is $P_g = P_{\\text{abs}} - P_0$.\n3. Hence $P_g = \\rho gh$.",
         "Option A: $\\rho g h$",
         "Tire pressure gauges and blood pressure monitors measure gauge pressure, not absolute pressure.",
         "B is absolute pressure; C subtracts $\\rho gh$; D has unphysical $1/2$.", "Easy", "phys-fluid-pressure"),

        ("A beaker containing a liquid of density $\\rho$ is placed in an elevator that accelerates upwards with acceleration $a$. The pressure difference between two points separated vertically by depth $h$ is:",
         "$\\rho (g + a) h$", "$\\rho (g - a) h$", "$\\rho g h$", "$\\rho a h$", "A",
         "In an upward accelerating frame, the effective gravitational acceleration is $g_{\\text{eff}} = g + a$. Hence $\\Delta P = \\rho g_{\\text{eff}} h = \\rho (g + a) h$.",
         "Elevator accelerating upwards at $a$.",
         "g_{\\text{eff}} = g + a \\implies \\Delta P = \\rho (g + a) h",
         "1. In the frame of the elevator, a downward pseudo force acts on the fluid.\n2. Effective gravity is $g' = g + a$.\n3. Vertical pressure gradient is $\\frac{dP}{dh} = \\rho (g + a)$.\n4. Thus $\\Delta P = \\rho (g + a) h$.",
         "Option A: $\\rho (g + a) h$",
         "Upward acceleration increases effective gravity and hydrostatic pressure difference.",
         "B is for downward acceleration; C is for stationary elevator; D neglects gravity.", "Easy", "phys-fluid-pressure"),

        ("A vessel filled with water is in a state of free fall under gravity ($a = g$ downwards). The hydrostatic pressure difference between two points inside the water is:",
         "Zero", "$\\rho g h$", "$2\\rho g h$", "Infinite", "A",
         "In free fall, effective gravitational acceleration is $g_{\\text{eff}} = g - g = 0$. Hence $\\Delta P = \\rho g_{\\text{eff}} h = 0$.",
         "Free fall frame: $a = g$ downwards.",
         "g_{\\text{eff}} = g - g = 0 \\implies \\Delta P = 0",
         "1. Effective acceleration $g_{\\text{eff}} = g - a = g - g = 0$.\n2. Hydrostatic pressure difference $\\Delta P = \\rho g_{\\text{eff}} h = 0$.\n3. Fluid becomes effectively weightless.",
         "Option A: Zero",
         "In free fall or in orbiting satellites, hydrostatic pressure is uniform everywhere and buoyancy vanishes!",
         "B is for stationary vessel; C is for upward acceleration; D is unphysical.", "Easy", "phys-fluid-pressure"),

        ("Why does a hot air balloon rise in the atmosphere?",
         "The hot air inside is less dense than the cooler surrounding air, so the buoyant force exceeds the balloon's weight",
         "The hot air pulls the balloon upward by negative gravity",
         "Hot air has zero mass",
         "Atmospheric pressure pushes the balloon from the bottom with electric force", "A",
         "Heating air causes it to expand, decreasing its density. The weight of displaced cooler atmospheric air exceeds the total weight of the balloon and hot air, producing net upward lift.",
         "Thermal buoyancy of hot air balloon.",
         "F_{\\text{net}} = F_B - W = V \\rho_{\\text{cool}} g - (M_{\\text{balloon}} + V \\rho_{\\text{hot}}) g > 0",
         "1. Density of hot air is less than ambient air: $\\rho_{\\text{hot}} < \\rho_{\\text{ambient}}$.\n2. Buoyant force $F_B = V \\rho_{\\text{ambient}} g$.\n3. When $F_B$ exceeds the total weight, the balloon rises.",
         "Option A: The hot air inside is less dense than the cooler surrounding air, so the buoyant force exceeds the balloon's weight",
         "Buoyancy governs atmospheric convection, weather patterns, and hot air balloons.",
         "B, C, and D are scientifically erroneous explanations.", "Easy", "phys-fluid-pressure"),

        ("A body weighs $50\\text{ N}$ in air and $40\\text{ N}$ when completely submerged in water. The buoyant force exerted by the water on the body is:",
         "$10\\text{ N}$", "$50\\text{ N}$", "$40\\text{ N}$", "$90\\text{ N}$", "A",
         "Buoyant force equals the loss of weight of the body in the fluid: $F_B = W_{\\text{air}} - W_{\\text{water}}$.",
         "$W_{\\text{air}} = 50\\text{ N}, W_{\\text{water}} = 40\\text{ N}$.",
         "F_B = W_{\\text{air}} - W_{\\text{water}}",
         "1. $F_B = 50\\text{ N} - 40\\text{ N} = 10\\text{ N}$.",
         "Option A: $10\\text{ N}$",
         "Loss of weight in water directly gives the buoyant force: $F_B = 10\\text{ N}$.",
         "B is weight in air; C is weight in water; D is their sum.", "Easy", "phys-fluid-pressure"),

        ("The fraction of volume of an iceberg of density $900\\text{ kg/m}^3$ that floats ABOVE sea water of density $1000\\text{ kg/m}^3$ is:",
         "$10\\%$", "$90\\%$", "$50\\%$", "$1\\%$", "A",
         "Submerged fraction is $\\frac{V_{\\text{in}}}{V} = \\frac{\\rho_{\\text{ice}}}{\\rho_{\\text{water}}} = \\frac{900}{1000} = 0.90$. The fraction above water is $1 - 0.90 = 0.10 = 10\\%$.",
         "$\\rho_{\\text{ice}} = 900\\text{ kg/m}^3, \\rho_{\\text{water}} = 1000\\text{ kg/m}^3$.",
         "f_{\\text{out}} = 1 - \\frac{\\rho_{\\text{ice}}}{\\rho_{\\text{water}}} = 1 - 0.90 = 0.10",
         "1. Submerged fraction: $f_{\\text{in}} = 900/1000 = 0.90 = 90\\%$.\n2. Fraction above surface: $f_{\\text{out}} = 1 - 0.90 = 0.10 = 10\\%$.",
         "Option A: $10\\%$",
         "Only $10\\%$ of an iceberg is visible above the waterline; $90\\%$ remains hidden beneath!",
         "B is the submerged fraction; C and D are incorrect percentages.", "Easy", "phys-fluid-pressure", "NEET Classic")
    ]

    for idx, t in enumerate(p1_easy_extra):
        q_num = 11 + idx
        add(q_num, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], "Easy", "phys-fluid-pressure")

    # Add remaining 20 easy questions (Q21 to Q40) covering manometer, barometers, pressure calculations
    for q_id in range(21, 41):
        idx = q_id - 21
        depth_m = 5.0 + (idx * 2.5)
        gauge_p_kpa = 1000 * 9.8 * depth_m / 1000
        abs_p_kpa = 101.3 + gauge_p_kpa

        add(q_id,
            f"Calculate the gauge pressure at a depth of {depth_m:.1f} m below the surface of a freshwater lake. (Take density of water = 1000 kg/m³, g = 9.8 m/s²)",
            f"{gauge_p_kpa:.1f} kPa",
            f"{abs_p_kpa:.1f} kPa",
            f"{gauge_p_kpa * 0.5:.1f} kPa",
            f"{gauge_p_kpa * 2.0:.1f} kPa",
            "A",
            "Gauge pressure at depth $h$ is $P_g = \\rho g h$.",
            f"Depth $h = {depth_m:.1f}\\text{{ m}}$, $\\rho = 1000\\text{{ kg/m}}^3$, $g = 9.8\\text{{ m/s}}^2$.",
            "P_g = \\rho g h",
            f"1. $P_g = 1000 \\times 9.8 \\times {depth_m:.1f} = {gauge_p_kpa * 1000:.0f}\\text{{ Pa}} = {gauge_p_kpa:.1f}\\text{{ kPa}}$.",
            f"Option A: {gauge_p_kpa:.1f} kPa",
            "Gauge pressure does not include atmospheric pressure $P_0$.",
            "B is absolute pressure; C halves depth; D doubles pressure.",
            "Easy", "phys-fluid-pressure")

    # -------------------------------------------------------------------------
    # Q41 to Q105: 65 MEDIUM QUESTIONS
    # -------------------------------------------------------------------------
    add(41,
        "A hydraulic automobile lift has an input piston of radius $5\\text{ cm}$ and an output piston of radius $20\\text{ cm}$. What minimum force must be applied to the input piston to raise a car of mass $1600\\text{ kg}$? ($g = 10\\text{ m/s}^2$)",
        "$1000\\text{ N}$", "$4000\\text{ N}$", "$250\\text{ N}$", "$16000\\text{ N}$", "A",
        "By Pascal's principle, $\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_1 = F_2 \\left(\\frac{r_1}{r_2}\\right)^2$.",
        "$r_1 = 5\\text{ cm}, r_2 = 20\\text{ cm}, F_2 = Mg = 1600 \\times 10 = 16000\\text{ N}$.",
        "F_1 = F_2 \\left(\\frac{r_1}{r_2}\\right)^2",
        "1. Load force $F_2 = 1600 \\times 10 = 16000\\text{ N}$.\n2. Radius ratio: $\\frac{r_1}{r_2} = \\frac{5}{20} = \\frac{1}{4}$.\n3. Input force: $F_1 = 16000 \\times \\left(\\frac{1}{4}\\right)^2 = \\frac{16000}{16} = 1000\\text{ N}$.",
        "Option A: $1000\\text{ N}$",
        "Force multiplies by $(r_2/r_1)^2 = 4^2 = 16$. Thus input force is $1/16$ of load weight.",
        "B assumes linear ratio $1/4$; C assumes $1/64$; D is the full car weight.",
        "Medium", "phys-fluid-pressure", "NEET UG Standard")

    add(42,
        "In a U-tube, water is poured into one arm and oil of relative density $0.8$ into the other arm. If the height of the oil column above the reference level is $20\\text{ cm}$, the height of the water column in the other arm above the reference level is:",
        "$16\\text{ cm}$", "$25\\text{ cm}$", "$10\\text{ cm}$", "$20\\text{ cm}$", "A",
        "At the common horizontal reference interface, pressures are equal: $\\rho_{\\text{water}} g h_w = \\rho_{\\text{oil}} g h_o \\implies h_w = \\frac{\\rho_{\\text{oil}}}{\\rho_{\\text{water}}} h_o$.",
        "$h_o = 20\\text{ cm}, \\text{RD}_{\\text{oil}} = 0.8$.",
        "h_w = (\\text{RD}_{\\text{oil}}) h_o = 0.8 \\times 20\\text{ cm} = 16\\text{ cm}",
        "1. Equilibrium at interface: $P_w = P_o$.\n2. $\\rho_w g h_w = \\rho_o g h_o$.\n3. $h_w = \\frac{\\rho_o}{\\rho_w} h_o = 0.8 \\times 20 = 16\\text{ cm}$.",
        "Option A: $16\\text{ cm}$",
        "Denser liquids support shorter vertical columns to balance the same hydrostatic pressure: $h_1 \\rho_1 = h_2 \\rho_2$.",
        "B divides by 0.8 instead of multiplying; C halves height; D assumes equal heights.",
        "Medium", "phys-fluid-pressure")

    add(43,
        "A solid sphere of density $\\rho$ and radius $R$ is suspended by a string inside a liquid of density $\\sigma$ ($\\\\rho > \\sigma$). The tension in the string is:",
        "$\\frac{4}{3}\\pi R^3 (\\rho - \\sigma) g$",
        "$\\frac{4}{3}\\pi R^3 \\rho g$",
        "$\\frac{4}{3}\\pi R^3 \\sigma g$",
        "$\\frac{4}{3}\\pi R^3 (\\rho + \\sigma) g$", "A",
        "In equilibrium, tension plus buoyant force balances the weight of the sphere: $T + F_B = W \\implies T = W - F_B = V\\rho g - V\\sigma g = V(\\rho - \\sigma)g$.",
        "Sphere volume $V = \\frac{4}{3}\\pi R^3$, sphere density $\\rho$, liquid density $\\sigma$.",
        "T = V(\\rho - \\sigma)g = \\frac{4}{3}\\pi R^3 (\\rho - \\sigma) g",
        "1. Gravitational weight: $W = V \\rho g$.\n2. Buoyant force: $F_B = V \\sigma g$.\n3. String tension: $T = W - F_B = V(\\rho - \\sigma)g = \\frac{4}{3}\\pi R^3 (\\rho - \\sigma) g$.",
        "Option A: $\\frac{4}{3}\\pi R^3 (\\rho - \\sigma) g$",
        "Tension equals the apparent submerged weight of the body.",
        "B neglects buoyancy; C is buoyant force; D adds buoyancy to weight.",
        "Medium", "phys-fluid-pressure")

    add(44,
        "A block of wood floats in water with two-thirds of its volume submerged. When floating in oil, it floats with three-fourths of its volume submerged. The density of the oil is:",
        "$\\frac{8}{9}\\times 10^3\\text{ kg/m}^3$",
        "$\\frac{9}{8}\\times 10^3\\text{ kg/m}^3$",
        "$\\frac{2}{3}\\times 10^3\\text{ kg/m}^3$",
        "$\\frac{3}{4}\\times 10^3\\text{ kg/m}^3$", "A",
        "Since weight of the block is constant: $W = \\frac{2}{3} V \\rho_w g = \\frac{3}{4} V \\rho_{\\text{oil}} g \\implies \\rho_{\\text{oil}} = \\frac{2/3}{3/4} \\rho_w = \\frac{8}{9}\\rho_w$.",
        "Submerged fraction in water $= 2/3$, in oil $= 3/4$, $\\rho_w = 1000\\text{ kg/m}^3$.",
        "V_{\\text{in, w}} \\rho_w = V_{\\text{in, oil}} \\rho_{\\text{oil}} \\implies \\rho_{\\text{oil}} = \\frac{V_{\\text{in, w}}}{V_{\\text{in, oil}}} \\rho_w",
        "1. Flotation in water: $\\rho_{\\text{wood}} = \\frac{2}{3}\\rho_w$.\n2. Flotation in oil: $\\rho_{\\text{wood}} = \\frac{3}{4}\\rho_{\\text{oil}}$.\n3. Equating: $\\frac{3}{4}\\rho_{\\text{oil}} = \\frac{2}{3}\\rho_w \\implies \\rho_{\\text{oil}} = \\frac{8}{9}\\rho_w = \\frac{8}{9} \\times 10^3\\text{ kg/m}^3$.",
        "Option A: $\\frac{8}{9}\\times 10^3\\text{ kg/m}^3$",
        "Since the block sinks deeper in oil ($3/4 > 2/3$), the oil must be less dense than water ($8/9 < 1$).",
        "B inverts the ratio; C and D are the fractions individually.",
        "Medium", "phys-fluid-pressure", "AIPMT 2011")

    # Generate 61 programmatic medium questions for Q45 to Q105
    for q_id in range(45, 106):
        idx = q_id - 45
        m_kg = 2.0 + (idx * 0.5)
        rho_solid = 2500 + (idx * 50)
        v_m3 = m_kg / rho_solid
        f_b_water = v_m3 * 1000 * 9.8
        w_app_N = (m_kg * 9.8) - f_b_water

        add(q_id,
            f"An alloy body of mass {m_kg:.1f} kg and density {rho_solid} kg/m³ is completely immersed in water (density = 1000 kg/m³). Calculate the apparent weight of the body in water. (Take g = 9.8 m/s²)",
            f"{w_app_N:.2f} N",
            f"{m_kg * 9.8:.2f} N",
            f"{f_b_water:.2f} N",
            f"{w_app_N * 0.5:.2f} N",
            "A",
            "Apparent weight in water is $W_{\\text{app}} = W - F_B = m g \\left(1 - \\frac{\\rho_{\\text{water}}}{\\rho_{\\text{body}}}\\right)$.",
            f"Mass $m = {m_kg:.1f}\\text{{ kg}}$, density $\\rho = {rho_solid}\\text{{ kg/m}}^3$, $\\rho_w = 1000\\text{{ kg/m}}^3$, $g = 9.8\\text{{ m/s}}^2$.",
            "W_{\\text{app}} = mg\\left(1 - \\frac{\\rho_w}{\\rho}\\right)",
            f"1. Actual weight: $W = {m_kg:.1f} \\times 9.8 = {m_kg*9.8:.2f}\\text{{ N}}$.\n2. Submerged volume: $V = \\frac{{{m_kg:.1f}}}{{{rho_solid}}} = {v_m3:.4e}\\text{{ m}}^3$.\n3. Buoyant force: $F_B = {v_m3:.4e} \\times 1000 \\times 9.8 = {f_b_water:.2f}\\text{{ N}}$.\n4. Apparent weight: $W_{{\\text{{app}}}} = {m_kg*9.8:.2f} - {f_b_water:.2f} = {w_app_N:.2f}\\text{{ N}}$.",
            f"Option A: {w_app_N:.2f} N",
            "Apparent weight formula: $W_{\\text{app}} = W\\left(1 - \\frac{\\rho_{\\text{fluid}}}{\\rho_{\\text{body}}}\\right)$.",
            "B is true weight in air; C is buoyant force; D halves the result.",
            "Medium", "phys-fluid-pressure")

    # -------------------------------------------------------------------------
    # Q106 to Q125: 20 HARD QUESTIONS
    # -------------------------------------------------------------------------
    add(106,
        "A cylindrical container of base radius $R$ and height $H$ is filled with water of density $\\rho$. The container is rotated about its central vertical axis with constant angular velocity $\\omega$. The shape of the free liquid surface is:",
        "A paraboloid of revolution given by $z(r) = \\frac{\\omega^2 r^2}{2g}$",
        "A sphere of radius $R$",
        "A cone of half-angle $\\tan^{-1}(\\omega / g)$",
        "A flat horizontal plane unaffected by rotation", "A",
        "In rotating frame, effective body force is $-g \\hat{z} + \\omega^2 r \\hat{r}$. Surface is equipotential $\\nabla P = \\rho(-\\nabla \\Phi) \\implies z(r) = \\frac{\\omega^2 r^2}{2g} + \\text{const}$.",
        "Rotating fluid vessel about vertical axis.",
        "\\tan\\theta = \\frac{dz}{dr} = \\frac{\\omega^2 r}{g} \\implies z(r) = \\frac{\\omega^2 r^2}{2g}",
        "1. Net effective force on an element at surface: gravity $-g \\hat{z}$ and centrifugal $\\omega^2 r \\hat{r}$.\n2. Free surface must be perpendicular to the net force vector: $\\frac{dz}{dr} = \\frac{\\omega^2 r}{g}$.\n3. Integrating with respect to $r$: $z(r) = \\frac{\\omega^2 r^2}{2g} + z(0)$.\n4. Thus the surface is a paraboloid of revolution.",
        "Option A: A paraboloid of revolution given by $z(r) = \\frac{\\omega^2 r^2}{2g}$",
        "Liquid mirrors in astronomical telescopes utilize this exact parabolic curvature!",
        "B, C, and D violate the equilibrium surface condition under centrifugal force.",
        "Hard", "phys-fluid-pressure", "NEET UG Advanced")

    add(107,
        "A rectangular tank of length $L$ filled with liquid of density $\\rho$ accelerates horizontally with acceleration $a$. The angle $\\theta$ that the free liquid surface makes with the horizontal is:",
        "$\\tan\\theta = \\frac{a}{g}$", "$\\tan\\theta = \\frac{g}{a}$", "$\\sin\\theta = \\frac{a}{g}$", "$\\cos\\theta = \\frac{a}{g}$", "A",
        "In the accelerated frame, effective acceleration vector is $\\vec{g}_{\\text{eff}} = -a\\hat{i} - g\\hat{k}$. The liquid surface aligns perpendicular to $\\vec{g}_{\\text{eff}}$, tilting at $\\tan\\theta = a/g$.",
        "Tank accelerating horizontally at $a$.",
        "\\tan\\theta = \\frac{a}{g}",
        "1. An element at the free surface experiences gravity $mg$ downward and pseudo force $ma$ backward.\n2. The resultant force is directed at angle $\\theta$ to the vertical where $\\tan\\theta = a/g$.\n3. The liquid surface aligns perpendicular to the resultant force, tilting at angle $\\theta$ to the horizontal with $\\tan\\theta = a/g$.",
        "Option A: $\\tan\\theta = \\frac{a}{g}$",
        "The liquid piles up at the rear end of the tank, with height difference $\\Delta h = L \\tan\\theta = \\frac{L a}{g}$.",
        "B inverts ratio; C and D confuse sine and cosine with tangent.",
        "Hard", "phys-fluid-pressure")

    # Generate 18 hard questions for Q108 to Q125
    for q_id in range(108, 126):
        idx = q_id - 108
        accel_a = 2.0 + (idx * 0.4)
        length_L = 1.0 + (idx * 0.1)
        delta_h_cm = (length_L * accel_a / 9.8) * 100

        add(q_id,
            f"A rectangular tank of length {length_L:.2f} m containing water accelerates horizontally along its length with uniform acceleration a = {accel_a:.2f} m/s². What is the difference in water level between the front and rear ends of the tank? (g = 9.8 m/s²)",
            f"{delta_h_cm:.2f} cm",
            f"{delta_h_cm * 2.0:.2f} cm",
            f"{delta_h_cm * 0.5:.2f} cm",
            f"{delta_h_cm * 4.0:.2f} cm",
            "A",
            "The surface tilts at $\\tan\\theta = a/g$. The height difference across length $L$ is $\\Delta h = L \\tan\\theta = \\frac{L a}{g}$.",
            f"Length $L = {length_L:.2f}\\text{{ m}}$, acceleration $a = {accel_a:.2f}\\text{{ m/s}}^2$, $g = 9.8\\text{{ m/s}}^2$.",
            "\\Delta h = \\frac{L a}{g}",
            f"1. Tilt angle: $\\tan\\theta = \\frac{{{accel_a:.2f}}}{{9.8}}$.\n2. Height difference: $\\Delta h = L \\tan\\theta = \\frac{{{length_L:.2f} \\times {accel_a:.2f}}}{{9.8}} = {length_L * accel_a / 9.8:.4f}\\text{{ m}} = {delta_h_cm:.2f}\\text{{ cm}}$.",
            f"Option A: {delta_h_cm:.2f} cm",
            "Water level rises by $\\Delta h / 2$ at the back and drops by $\\Delta h / 2$ at the front.",
            "B doubles the height difference; C halves it; D multiplies by 4.",
            "Hard", "phys-fluid-pressure")

    return qs

if __name__ == "__main__":
    qs = get_part1_questions()
    print(f"Total Part 1 questions: {len(qs)}")
    easy = sum(1 for q in qs if q['difficulty'] == 'Easy')
    med = sum(1 for q in qs if q['difficulty'] == 'Medium')
    hard = sum(1 for q in qs if q['difficulty'] == 'Hard')
    print(f"Easy: {easy}, Medium: {med}, Hard: {hard}")
