#!/usr/bin/env python3
"""
Full Generator for Mechanical Properties of Fluids - Part 2 (Q126 to Q250)
Distribution: Exactly 35 Easy, 65 Medium, 25 Hard = 125 MCQs
Topics: Fluid Dynamics — Streamlines & Turbulences, Equation of Continuity,
Volume and Mass Flow Rates, Bernoulli's Principle & Applications,
Venturimeter, Aerofoil Lift, Magnus Effect, Torricelli's Law of Efflux,
Orifice Horizontal Range, Tank Emptying Time.
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
    # Q126 to Q160: 35 EASY QUESTIONS
    # -------------------------------------------------------------------------
    add(126,
        "The equation of continuity $A_1 v_1 = A_2 v_2$ for fluid flow is a direct consequence of the conservation of:",
        "Mass", "Energy", "Linear momentum", "Angular momentum", "A",
        "For an incompressible steady fluid, the mass of fluid entering a cross-section per second must equal the mass leaving per second: $\\frac{dm_1}{dt} = \\frac{dm_2}{dt} \\implies \\rho A_1 v_1 = \\rho A_2 v_2 \\implies A_1 v_1 = A_2 v_2$.",
        "Steady flow of incompressible fluid.",
        "\\frac{dm}{dt} = \\rho A v = \\text{constant} \\implies A v = \\text{constant}",
        "1. In steady flow, fluid cannot accumulate or be destroyed inside the pipe.\n2. Inflow mass rate = Outflow mass rate: $\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$.\n3. Since density $\\rho$ is constant for incompressible fluids, $A_1 v_1 = A_2 v_2$.\n4. This expresses conservation of mass.",
        "Option A: Mass",
        "Continuity equation = Conservation of Mass; Bernoulli's equation = Conservation of Energy.",
        "B is Bernoulli's principle; C is Newton's second law/Navier-Stokes; D is rotational dynamics.",
        "Easy", "phys-bernoullis-principle", "NEET Core Concept")

    add(127,
        "Bernoulli's theorem for ideal fluid flow is based fundamentally on the law of conservation of:",
        "Energy", "Mass", "Linear momentum", "Volume", "A",
        "Bernoulli's equation represents the work-energy theorem applied to a continuous ideal fluid element: work done by pressure forces equals change in kinetic and gravitational potential energy per unit volume.",
        "Ideal fluid in steady streamline flow.",
        "P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}",
        "1. Consider a volume element of ideal fluid flowing through a pipe.\n2. Work done by pressure difference = change in $(KE + PE)$.\n3. Dividing by volume yields $P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$.\n4. Thus, Bernoulli's equation expresses conservation of mechanical energy.",
        "Option A: Energy",
        "Remember the classic NEET pairing: Continuity $\\rightarrow$ Mass, Bernoulli $\\rightarrow$ Energy.",
        "B is continuity equation; C is momentum conservation; D is incompressibility.",
        "Easy", "phys-bernoullis-principle", "AIPMT Frequent")

    add(128,
        "Which of the following conditions is NOT assumed in the derivation of Bernoulli's equation for a fluid?",
        "The fluid must be highly viscous",
        "The flow must be steady (streamline)",
        "The fluid must be incompressible",
        "The flow must be irrotational", "A",
        "Bernoulli's equation strictly assumes an IDEAL fluid: non-viscous (zero viscosity), incompressible (constant density), steady flow, and irrotational.",
        "Assumptions of Bernoulli's theorem.",
        "\\text{Ideal fluid: non-viscous (}\\eta = 0\\text{), incompressible (}\\rho = \\text{const}), \\text{steady, irrotational}",
        "1. Viscous forces dissipate mechanical energy into heat, violating energy conservation along a streamline.\n2. Therefore, Bernoulli's equation strictly assumes non-viscous (zero viscosity) flow.\n3. Saying the fluid must be highly viscous is false.",
        "Option A: The fluid must be highly viscous",
        "For viscous fluids, a head-loss term must be added (Poiseuille / Darcy-Weisbach friction).",
        "B, C, and D are standard necessary assumptions for Bernoulli's equation.",
        "Easy", "phys-bernoullis-principle")

    add(129,
        "Two streamlines in a steady fluid flow:",
        "Can never intersect each other",
        "Intersect at right angles at high speed",
        "Always intersect at stagnation points",
        "Oscillate around each other periodically", "A",
        "At any point in steady flow, a fluid particle has a unique velocity vector tangent to the streamline. If two streamlines intersected, a particle at the intersection would have two different velocity directions at the same time, which is physically impossible.",
        "Properties of streamlines in steady flow.",
        "\\text{Tangent to streamline} = \\text{velocity vector } \\vec{v}",
        "1. In steady flow, velocity at each spatial point is unique and time-independent.\n2. The tangent to a streamline represents the velocity vector.\n3. If two streamlines crossed, there would be two different velocity vectors at the same point, which is impossible.\n4. Hence, streamlines can never intersect.",
        "Option A: Can never intersect each other",
        "Streamlines never cross, exactly like electric and magnetic field lines!",
        "B, C, and D violate the uniqueness of velocity in steady flow.",
        "Easy", "phys-bernoullis-principle")

    add(130,
        "Water flows through a horizontal pipe of variable cross-section. At a constriction where the cross-sectional area decreases, the fluid speed and pressure change as follows:",
        "Speed increases, and pressure decreases",
        "Speed decreases, and pressure increases",
        "Both speed and pressure increase",
        "Both speed and pressure decrease", "A",
        "By the continuity equation $A_1 v_1 = A_2 v_2$, where area $A$ decreases, speed $v$ must increase. By Bernoulli's equation for a horizontal pipe $P + \\frac{1}{2}\\rho v^2 = \\text{constant}$, an increase in speed $v$ requires a corresponding decrease in static pressure $P$.",
        "Horizontal pipe constriction: $A_2 < A_1$.",
        "A v = \\text{constant} \\implies v_2 > v_1; \\quad P + \\frac{1}{2}\\rho v^2 = \\text{constant} \\implies P_2 < P_1",
        "1. Continuity: $A_2 < A_1 \\implies v_2 = v_1 \\frac{A_1}{A_2} > v_1$ (speed increases).\n2. Bernoulli along horizontal streamline: $P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$.\n3. Since $v_2 > v_1$, $\\frac{1}{2}\\rho v_2^2 > \\frac{1}{2}\\rho v_1^2$.\n4. Therefore $P_2 = P_1 - \\frac{1}{2}\\rho(v_2^2 - v_1^2) < P_1$ (pressure decreases).",
        "Option A: Speed increases, and pressure decreases",
        "This is the Venturi effect: fast-moving fluid exerts lower lateral pressure!",
        "B inverts both relationships; C and D violate Bernoulli's energy trade-off.",
        "Easy", "phys-bernoullis-principle", "NEET UG Frequent")

    add(131,
        "The working of an atomizer (perfume sprayer or paint spray gun) is based on:",
        "Bernoulli's principle", "Archimedes' principle", "Stokes' law", "Pascal's law", "A",
        "Squeezing the rubber bulb blows high-speed air over the top of a vertical tube dipped in liquid. The high air speed creates low pressure above the tube, and atmospheric pressure on the liquid surface forces liquid up into the air stream where it is atomized into a fine spray.",
        "Working principle of an atomizer / spray gun.",
        "P_{\\text{top}} = P_0 - \\frac{1}{2}\\rho_{\\text{air}} v^2 < P_0",
        "1. Air blown rapidly across the narrow nozzle has high speed $v$.\n2. By Bernoulli's principle, pressure at the nozzle drops below atmospheric pressure $P_0$.\n3. Atmospheric pressure on the liquid in the reservoir pushes it up the suction tube.\n4. The emerging liquid is atomized into droplets by the fast air jet.",
        "Option A: Bernoulli's principle",
        "Carburetors in older engines and chimney draft also operate on this exact Bernoulli suction principle.",
        "Archimedes governs buoyancy; Stokes governs viscous drag; Pascal governs hydrostatic pressure transmission.",
        "Easy", "phys-bernoullis-principle")

    add(132,
        "The dynamic lift on an aeroplane wing (aerofoil) is primarily caused by:",
        "Higher air speed over the curved upper surface creating lower pressure above than below",
        "Buoyant force of air exceeding the plane's weight",
        "Viscous friction pulling the aircraft upwards",
        "Electrostatic repulsion from the runway", "A",
        "An aerofoil is shaped with greater curvature on top. Air flowing over the top travels faster than underneath. By Bernoulli's principle, pressure on the upper surface is lower than on the bottom surface, generating net upward aerodynamic lift.",
        "Aerofoil aerodynamics and Bernoulli's theorem.",
        "v_{\\text{top}} > v_{\\text{bottom}} \\implies P_{\\text{bottom}} > P_{\\text{top}} \\implies F_{\\text{lift}} = (P_{\\text{bottom}} - P_{\\text{top}}) A",
        "1. Air streamlines crowd together over the convex upper wing, so $v_{\\text{top}} > v_{\\text{bottom}}$.\n2. By Bernoulli: $P_{\\text{top}} + \\frac{1}{2}\\rho v_{\\text{top}}^2 = P_{\\text{bottom}} + \\frac{1}{2}\\rho v_{\\text{bottom}}^2$.\n3. Hence $P_{\\text{bottom}} - P_{\\text{top}} = \\frac{1}{2}\\rho (v_{\\text{top}}^2 - v_{\\text{bottom}}^2) > 0$.\n4. This pressure difference creates the upward aerodynamic lift force.",
        "Option A: Higher air speed over the curved upper surface creating lower pressure above than below",
        "Newton's third law (downward deflection of air/downwash) also contributes to the total aerodynamic lift.",
        "B is false because air buoyancy on a metal aircraft is negligible; C and D are unphysical.",
        "Easy", "phys-bernoullis-principle")

    add(133,
        "The curved trajectory of a spinning ball moving through air (Magnus effect) is explained by:",
        "Bernoulli's theorem", "Archimedes' principle", "Hooke's law", "Torricelli's law", "A",
        "As a spinning ball travels through air, dragging air layers along with it, air speed is higher on one side (where spin and airflow align) and lower on the opposite side. The resulting Bernoulli pressure difference deflects the ball towards the low-pressure side.",
        "Magnus effect on spinning sphere.",
        "\\Delta P = \\frac{1}{2}\\rho (v_{\\text{fast}}^2 - v_{\\text{slow}}^2) \\implies F_{\\text{side}} = \\Delta P \\cdot A",
        "1. Spin drags air: on one side, spin velocity adds to translation velocity ($v + \\omega r$); on other side, it opposes ($v - \\omega r$).\n2. By Bernoulli's theorem, higher speed produces lower pressure.\n3. The ball experiences a lateral net force toward the lower-pressure side, curving its flight path.\n4. This is the Magnus effect.",
        "Option A: Bernoulli's theorem",
        "The Magnus effect explains swing bowling in cricket, curved soccer kicks, and topspin in tennis.",
        "Archimedes is buoyancy; Hooke is elasticity; Torricelli is efflux.",
        "Easy", "phys-bernoullis-principle")

    add(134,
        "Torricelli's law states that the speed of efflux ($v$) of a liquid through a small hole at depth $h$ below the free surface of an open tank is:",
        "$v = \\sqrt{2gh}$", "$v = 2gh$", "$v = \\sqrt{gh}$", "$v = \\frac{1}{2}gh^2$", "A",
        "Applying Bernoulli's equation between the open top surface (where speed $\\approx 0$) and the exit orifice at depth $h$ gives $P_0 + \\rho gh = P_0 + \\frac{1}{2}\\rho v^2 \\implies v = \\sqrt{2gh}$.",
        "Open liquid tank with small orifice at depth $h$.",
        "v = \\sqrt{2gh}",
        "1. Top surface: pressure $P_0$, height $h$, velocity $v_1 \\approx 0$ (since tank area $A \\gg$ orifice area $a$).\n2. Exit orifice: pressure $P_0$, height $0$, velocity $v$.\n3. Bernoulli equation: $P_0 + \\rho gh + 0 = P_0 + 0 + \\frac{1}{2}\\rho v^2$.\n4. Simplifying: $\\frac{1}{2}\\rho v^2 = \\rho gh \\implies v = \\sqrt{2gh}$.",
        "Option A: $v = \\sqrt{2gh}$",
        "The speed of efflux is identical to the speed acquired by a freely falling body dropped from height $h$!",
        "B omits the square root; C misses factor 2; D is kinematic distance formula.",
        "Easy", "phys-bernoullis-principle")

    add(135,
        "In a Venturimeter, the difference in pressure between the wide section and the constriction is measured using a:",
        "Manometer", "Thermometer", "Hydrometer", "Spherometer", "A",
        "A Venturimeter uses a U-tube differential manometer connected between the wide inlet and the narrow throat to measure the hydrostatic pressure drop $\\Delta P = \\rho_m g h$.",
        "Venturimeter construction and measurement.",
        "\\Delta P = P_1 - P_2 = \\rho_m g h",
        "1. A Venturimeter consists of a convergent cone, throat, and divergent cone.\n2. The pressure difference between pipe and throat is measured by the liquid height difference in a U-tube manometer.\n3. This pressure difference allows calculating the volume flow rate.",
        "Option A: Manometer",
        "Manometers measure pressure differences in fluids.",
        "Thermometers measure temperature; hydrometers measure liquid density; spherometers measure curvature of lenses.",
        "Easy", "phys-bernoullis-principle")

    # Generate remaining 25 easy questions for Part 2 (Q136 to Q160)
    p2_easy_extra = [
        ("What are the SI units of volume flow rate (discharge $Q$)?",
         "$\\text{m}^3/\\text{s}$", "$\\text{m}^2/\\text{s}$", "$\\text{kg/s}$", "$\\text{m/s}$", "A",
         "Volume flow rate is volume per unit time: $Q = V / t = A v$, having units $\\text{m}^3/\\text{s}$.",
         "Volume flow rate $Q$.",
         "[Q] = [\\text{Area}] \\times [\\text{Speed}] = \\text{m}^2 \\times \\text{m/s} = \\text{m}^3/\\text{s}",
         "1. $Q = A v$.\n2. Area has unit $\\text{m}^2$, speed has unit $\\text{m/s}$.\n3. Product unit is $\\text{m}^3/\\text{s}$.",
         "Option A: $\\text{m}^3/\\text{s}$",
         "Mass flow rate has units $\\text{kg/s}$; volume flow rate has units $\\text{m}^3/\\text{s}$.",
         "B is kinematic viscosity; C is mass flow rate; D is velocity.", "Easy", "phys-bernoullis-principle"),

        ("What are the dimensions of volume flow rate?",
         "$[M^0 L^3 T^{-1}]$", "$[M^1 L^3 T^{-1}]$", "$[M^0 L^2 T^{-1}]$", "$[M^0 L^3 T^{-2}]$", "A",
         "Volume flow rate is volume divided by time: $[Q] = [L^3] / [T] = [L^3 T^{-1}]$.",
         "Volume flow rate dimensions.",
         "[Q] = [L^3 T^{-1}]",
         "1. $[\\text{Volume}] = [L^3]$.\n2. $[\\text{Time}] = [T]$.\n3. $[Q] = [L^3 T^{-1}] = [M^0 L^3 T^{-1}]$.",
         "Option A: $[M^0 L^3 T^{-1}]$",
         "Flow rate is dimensionless in mass: $[M^0 L^3 T^{-1}]$.",
         "B includes mass; C is kinematic viscosity; D has $T^{-2}$.", "Easy", "phys-bernoullis-principle"),

        ("In Bernoulli's equation, the term $\\frac{v^2}{2g}$ is known as:",
         "Velocity head", "Pressure head", "Elevation head", "Frictional head", "A",
         "Dividing Bernoulli's equation by $\\rho g$ gives $\\frac{P}{\\rho g} + \\frac{v^2}{2g} + h = \\text{constant}$, where each term has dimensions of length (meters). $\\frac{v^2}{2g}$ is the velocity head.",
         "Head form of Bernoulli's equation.",
         "\\frac{P}{\\rho g} + \\frac{v^2}{2g} + h = \\text{Total Head (meters)}",
         "1. Term $\\frac{P}{\\rho g}$ is pressure head.\n2. Term $\\frac{v^2}{2g}$ is velocity head.\n3. Term $h$ is datum (elevation) head.",
         "Option A: Velocity head",
         "Each head represents energy per unit weight of fluid, with units of length (meters).",
         "B is $P/\\rho g$; C is $h$; D represents frictional losses.", "Easy", "phys-bernoullis-principle"),

        ("In Bernoulli's equation, the term $\\frac{P}{\\rho g}$ has the dimensions of:",
         "Length ($[L]$)", "Pressure ($[M L^{-1} T^{-2}]$)", "Energy ($[M L^2 T^{-2}]$)", "Force ($[M L T^{-2}]$)", "A",
         "$\\frac{P}{\\rho g}$ is the pressure head, representing the height of a fluid column that produces pressure $P$. It has the dimensions of length $[L]$.",
         "Dimensions of pressure head.",
         "\\left[\\frac{P}{\\rho g}\\right] = \\frac{[M L^{-1} T^{-2}]}{[M L^{-3}] [L T^{-2}]} = \\frac{[M L^{-1} T^{-2}]}{[M L^{-2} T^{-2}]} = [L]",
         "1. Dimension of $P = [M L^{-1} T^{-2}]$.\n2. Dimension of $\\rho g = [M L^{-3}][L T^{-2}] = [M L^{-2} T^{-2}]$.\n3. Ratio: $\\frac{[M L^{-1} T^{-2}]}{[M L^{-2} T^{-2}]} = [L]$.",
         "Option A: Length ($[L]$)",
         "All three heads (pressure head, velocity head, elevation head) have units of meters ($[L]$).",
         "Other options ignore division by specific weight $\\rho g$.", "Easy", "phys-bernoullis-principle"),

        ("A tank of height $H$ is filled with water. A small hole is punched at depth $h = H/2$ below the surface. The horizontal range of the water jet on the ground level is:",
         "$H$", "$H/2$", "$2H$", "$H/4$", "A",
         "Range is $R = 2\\sqrt{h(H-h)}$. Substituting $h = H/2$ yields $R = 2\\sqrt{(H/2)(H/2)} = 2(H/2) = H$.",
         "Hole at depth $h = H/2$ in tank of height $H$.",
         "R = 2\\sqrt{h(H-h)} = 2\\sqrt{\\frac{H}{2} \\cdot \\frac{H}{2}} = H",
         "1. Efflux speed: $v = \\sqrt{2g(H/2)} = \\sqrt{gH}$.\n2. Height above ground: $y = H - h = H/2$.\n3. Time of flight: $t = \\sqrt{\\frac{2y}{g}} = \\sqrt{\\frac{2(H/2)}{g}} = \\sqrt{\\frac{H}{g}}$.\n4. Range: $R = v t = \\sqrt{gH} \\times \\sqrt{\\frac{H}{g}} = H$.",
         "Option A: $H$",
         "The maximum horizontal range occurs when the orifice is at the midpoint of the liquid column ($h = H/2$), and equals $H$!",
         "B is height of hole; C is double; D is quarter.", "Easy", "phys-bernoullis-principle", "AIPMT Frequent")
    ]

    for idx, t in enumerate(p2_easy_extra):
        q_num = 136 + idx
        add(q_num, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], "Easy", t[14])

    for q_id in range(141, 161):
        idx = q_id - 141
        depth_m = 1.0 + (idx * 0.4)
        efflux_v = (2 * 9.8 * depth_m) ** 0.5

        add(q_id,
            f"An open water tank has a small orifice at depth h = {depth_m:.2f} m below the free surface. Calculate the speed of efflux of water from the orifice. (Take g = 9.8 m/s²)",
            f"{efflux_v:.2f} m/s",
            f"{efflux_v * 0.5:.2f} m/s",
            f"{efflux_v * 2.0:.2f} m/s",
            f"{efflux_v ** 2:.2f} m/s",
            "A",
            "Torricelli's theorem gives the speed of efflux: $v = \\sqrt{2gh}$.",
            f"Depth $h = {depth_m:.2f}\\text{{ m}}$, $g = 9.8\\text{{ m/s}}^2$.",
            "v = \\sqrt{2gh}",
            f"1. $v = \\sqrt{{2 \\times 9.8 \\times {depth_m:.2f}}} = \\sqrt{{{2 * 9.8 * depth_m:.2f}}} = {efflux_v:.2f}\\text{{ m/s}}$.",
            f"Option A: {efflux_v:.2f} m/s",
            "Efflux velocity depends solely on vertical depth $h$, not on the cross-sectional area of the hole.",
            "B halves the result; C doubles the result; D forgets the square root.",
            "Easy", "phys-bernoullis-principle")

    # -------------------------------------------------------------------------
    # Q161 to Q225: 65 MEDIUM QUESTIONS
    # -------------------------------------------------------------------------
    add(161,
        "Water flows through a horizontal pipe of non-uniform cross-section. The velocity of water is $2\\text{ m/s}$ at a point where the pressure is $20\\text{ kPa}$. What is the pressure at another point in the pipe where the velocity is $4\\text{ m/s}$? (Density of water $= 1000\\text{ kg/m}^3$)",
        "$14\\text{ kPa}$", "$16\\text{ kPa}$", "$18\\text{ kPa}$", "$10\\text{ kPa}$", "A",
        "Applying Bernoulli's equation along a horizontal streamline: $P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2 \\implies P_2 = P_1 - \\frac{1}{2}\\rho(v_2^2 - v_1^2)$.",
        "$v_1 = 2\\text{ m/s}, P_1 = 20\\text{ kPa} = 20,000\\text{ Pa}, v_2 = 4\\text{ m/s}, \\rho = 1000\\text{ kg/m}^3$.",
        "P_2 = P_1 - \\frac{1}{2}\\rho(v_2^2 - v_1^2)",
        "1. Dynamic pressure change: $\\frac{1}{2}\\rho(v_2^2 - v_1^2) = \\frac{1}{2}(1000)(16 - 4) = 500 \\times 12 = 6000\\text{ Pa} = 6\\text{ kPa}$.\n2. Pressure $P_2 = 20\\text{ kPa} - 6\\text{ kPa} = 14\\text{ kPa}$.",
        "Option A: $14\\text{ kPa}$",
        "As velocity increases from $2\\text{ m/s}$ to $4\\text{ m/s}$, static pressure drops by $6\\text{ kPa}$.",
        "B subtracts only $4\\text{ kPa}$; C subtracts $2\\text{ kPa}$; D subtracts $10\\text{ kPa}$.",
        "Medium", "phys-bernoullis-principle", "NEET UG Standard")

    add(162,
        "A horizontal pipe of radius $4\\text{ cm}$ narrows down to a radius of $2\\text{ cm}$. If water flows through the wider section at $1\\text{ m/s}$, what is the flow speed in the narrow section?",
        "$4\\text{ m/s}$", "$2\\text{ m/s}$", "$8\\text{ m/s}$", "$16\\text{ m/s}$", "A",
        "By the equation of continuity, $A_1 v_1 = A_2 v_2 \\implies v_2 = v_1 \\left(\\frac{r_1}{r_2}\\right)^2$.",
        "$r_1 = 4\\text{ cm}, r_2 = 2\\text{ cm}, v_1 = 1\\text{ m/s}$.",
        "v_2 = v_1 \\left(\\frac{r_1}{r_2}\\right)^2",
        "1. Ratio of radii: $\\frac{r_1}{r_2} = \\frac{4}{2} = 2$.\n2. Ratio of areas: $\\frac{A_1}{A_2} = 2^2 = 4$.\n3. Speed $v_2 = v_1 \\times 4 = 1 \\times 4 = 4\\text{ m/s}$.",
        "Option A: $4\\text{ m/s}$",
        "Halving the radius quadruples the velocity: $v \\propto 1/r^2$!",
        "B assumes linear radius scaling; C uses cube; D uses fourth power.",
        "Medium", "phys-bernoullis-principle")

    add(163,
        "Water stands at depth $H = 9\\text{ m}$ in a large tank. Two small holes are punched in the side wall at depths $h_1 = 2\\text{ m}$ and $h_2 = 7\\text{ m}$ below the surface. What is the ratio of the horizontal ranges ($R_1 / R_2$) of the two water jets on the level ground?",
        "$1 : 1$", "$2 : 7$", "$7 : 2$", "$4 : 49$", "A",
        "Range is $R = 2\\sqrt{h(H-h)}$. For $h_1 = 2\\text{ m}$: $R_1 = 2\\sqrt{2 \\times (9-2)} = 2\\sqrt{14}$. For $h_2 = 7\\text{ m}$: $R_2 = 2\\sqrt{7 \\times (9-7)} = 2\\sqrt{14}$. Hence $R_1 / R_2 = 1:1$.",
        "Tank height $H = 9\\text{ m}, h_1 = 2\\text{ m}, h_2 = 7\\text{ m}$.",
        "R(h) = 2\\sqrt{h(H-h)} \\implies R(h) = R(H-h)",
        "1. Range formula is symmetric about midpoint $H/2$: $R(h) = 2\\sqrt{h(H-h)}$.\n2. Notice that $h_2 = 7\\text{ m} = 9 - 2\\text{ m} = H - h_1$.\n3. Therefore, $R_1 = R_2$, and the ratio is $1:1$.",
        "Option A: $1 : 1$",
        "Holes located symmetrically at depths $h$ and $H-h$ always have identical horizontal ranges!",
        "B uses depth ratio; C inverts; D squares the depth ratio.",
        "Medium", "phys-bernoullis-principle", "AIPMT 2014")

    # Generate next 62 programmatic medium questions for Q164 to Q225
    for q_id in range(164, 226):
        idx = q_id - 164
        r1_cm = 3.0 + (idx * 0.1)
        r2_cm = 1.5 + (idx * 0.05)
        v1_ms = 1.0 + (idx * 0.04)
        v2_ms = v1_ms * ((r1_cm / r2_cm) ** 2)
        delta_p_kpa = 0.5 * 1000 * (v2_ms**2 - v1_ms**2) / 1000

        add(q_id,
            f"Water flows through a horizontal pipe of inlet radius {r1_cm:.2f} cm at a speed of {v1_ms:.2f} m/s. The pipe constricts to a radius of {r2_cm:.2f} cm. What is the pressure drop ΔP across the constriction? (Density of water = 1000 kg/m³)",
            f"{delta_p_kpa:.2f} kPa",
            f"{delta_p_kpa * 0.5:.2f} kPa",
            f"{delta_p_kpa * 2.0:.2f} kPa",
            f"{v2_ms:.2f} kPa",
            "A",
            "By continuity $v_2 = v_1 (r_1 / r_2)^2$. By Bernoulli $\\Delta P = \\frac{1}{2}\\rho (v_2^2 - v_1^2)$.",
            f"Radii $r_1 = {r1_cm:.2f}\\text{{ cm}}, r_2 = {r2_cm:.2f}\\text{{ cm}}$, $v_1 = {v1_ms:.2f}\\text{{ m/s}}$, $\\rho = 1000\\text{{ kg/m}}^3$.",
            "\\Delta P = \\frac{1}{2}\\rho (v_2^2 - v_1^2)",
            f"1. Throat speed: $v_2 = {v1_ms:.2f} \\times ({r1_cm:.2f}/{r2_cm:.2f})^2 = {v2_ms:.2f}\\text{{ m/s}}$.\n2. Pressure drop: $\\Delta P = 0.5 \\times 1000 \\times ({v2_ms:.2f}^2 - {v1_ms:.2f}^2) = {delta_p_kpa*1000:.1f}\\text{{ Pa}} = {delta_p_kpa:.2f}\\text{{ kPa}}$.",
            f"Option A: {delta_p_kpa:.2f} kPa",
            "Pressure drop is proportional to the difference of squared speeds: $\\Delta P = \\frac{1}{2}\\rho(v_2^2 - v_1^2)$.",
            "B halves the drop; C doubles the drop; D confuses speed with pressure.",
            "Medium", "phys-bernoullis-principle")

    # -------------------------------------------------------------------------
    # Q226 to Q250: 25 HARD QUESTIONS
    # -------------------------------------------------------------------------
    add(226,
        "A cylindrical tank of large cross-sectional area $A$ is filled with water to a height $H$. A small hole of area $a$ ($a \\ll A$) is opened at the bottom. The total time taken to completely empty the tank is:",
        "$\\frac{A}{a} \\sqrt{\\frac{2H}{g}}$",
        "$\\frac{A}{a} \\sqrt{\\frac{H}{2g}}$",
        "$\\frac{2A}{a} \\sqrt{\\frac{2H}{g}}$",
        "$\\frac{A}{2a} \\sqrt{\\frac{2H}{g}}$", "A",
        "Rate of decrease of water level is $-A \\frac{dh}{dt} = a v = a \\sqrt{2gh}$. Integrating from $h = H$ to $0$: $t = \\frac{A}{a\\sqrt{2g}} \\int_0^H h^{-1/2} dh = \\frac{A}{a} \\sqrt{\\frac{2H}{g}}$.",
        "Tank area $A$, hole area $a$, initial height $H$.",
        "-A \\frac{dh}{dt} = a\\sqrt{2gh} \\implies t = \\frac{A}{a}\\sqrt{\\frac{2H}{g}}",
        "1. Continuity at free surface: $-A \\, dh = a v \\, dt = a \\sqrt{2gh} \\, dt$.\n2. Separate variables: $dt = -\\frac{A}{a\\sqrt{2g}} h^{-1/2} dh$.\n3. Integrate from $h = H$ to $0$:\n   $t = \\frac{A}{a\\sqrt{2g}} \\left[ 2h^{1/2} \\right]_0^H = \\frac{2A\\sqrt{H}}{a\\sqrt{2g}} = \\frac{A}{a} \\sqrt{\\frac{2H}{g}}$.",
        "Option A: $\\frac{A}{a} \\sqrt{\\frac{2H}{g}}$",
        "Notice that emptying the tank takes exactly TWICE as long as draining the same volume at the initial constant efflux speed!",
        "B has 2 in denominator of root; C has extra factor 2; D halves the time.",
        "Hard", "phys-bernoullis-principle", "NEET UG Advanced")

    add(227,
        "A cylindrical tank of cross-sectional area $A$ filled with water to height $H$ has a hole of area $a$ at the bottom. What is the time taken for the liquid level to fall from $H$ to $H/4$?",
        "$\\frac{A}{2a} \\sqrt{\\frac{2H}{g}}$",
        "$\\frac{A}{a} \\sqrt{\\frac{2H}{g}}$",
        "$\\frac{3A}{4a} \\sqrt{\\frac{2H}{g}}$",
        "$\\frac{A}{4a} \\sqrt{\\frac{2H}{g}}$", "A",
        "Time to fall from $H_1$ to $H_2$ is $t = \\frac{A}{a}\\sqrt{\\frac{2}{g}}(\\sqrt{H_1} - \\sqrt{H_2})$. With $H_1 = H$ and $H_2 = H/4$: $\\sqrt{H} - \\sqrt{H/4} = \\sqrt{H} - \\frac{1}{2}\\sqrt{H} = \\frac{1}{2}\\sqrt{H}$.",
        "Tank draining from $H$ to $H/4$.",
        "t = \\frac{A}{a}\\sqrt{\\frac{2}{g}}\\left(\\sqrt{H} - \\sqrt{H/4}\\right) = \\frac{1}{2} \\frac{A}{a}\\sqrt{\\frac{2H}{g}}",
        "1. Integral result: $t = \\frac{A}{a}\\sqrt{\\frac{2}{g}}(\\sqrt{H_1} - \\sqrt{H_2})$.\n2. Substitute $H_1 = H$ and $H_2 = H/4$:\n   $\\Delta\\sqrt{h} = \\sqrt{H} - \\frac{\\sqrt{H}}{2} = \\frac{1}{2}\\sqrt{H}$.\n3. Thus $t = \\frac{1}{2} \\frac{A}{a} \\sqrt{\\frac{2H}{g}}$.",
        "Option A: $\\frac{A}{2a} \\sqrt{\\frac{2H}{g}}$",
        "Draining the top $75\\%$ of volume takes the SAME time as draining the remaining bottom $25\\%$!",
        "B is total emptying time; C assumes linear draining; D is quarter.",
        "Hard", "phys-bernoullis-principle")

    # Generate 23 hard questions for Q228 to Q250
    for q_id in range(228, 251):
        idx = q_id - 228
        h_tank = 4.0 + (idx * 0.4)
        area_ratio = 400 + (idx * 25)
        empty_time_s = area_ratio * ((2 * h_tank / 9.8) ** 0.5)

        add(q_id,
            f"A cylindrical vessel of height H = {h_tank:.2f} m has a cross-sectional area that is {area_ratio} times the area of an orifice at its base (A/a = {area_ratio}). What is the total time required to drain the tank completely? (g = 9.8 m/s²)",
            f"{empty_time_s:.1f} s",
            f"{empty_time_s * 0.5:.1f} s",
            f"{empty_time_s * 2.0:.1f} s",
            f"{empty_time_s * 0.25:.1f} s",
            "A",
            "The total time to empty a cylindrical tank is $t = \\frac{A}{a} \\sqrt{\\frac{2H}{g}}$.",
            f"Height $H = {h_tank:.2f}\\text{{ m}}$, Area ratio $A/a = {area_ratio}$, $g = 9.8\\text{{ m/s}}^2$.",
            "t = \\frac{A}{a} \\sqrt{\\frac{2H}{g}}",
            f"1. Time formula: $t = {area_ratio} \\times \\sqrt{{\\frac{{2 \\times {h_tank:.2f}}}{{9.8}}}} = {area_ratio} \\times {((2*h_tank/9.8)**0.5):.4f} = {empty_time_s:.1f}\\text{{ s}}$.",
            f"Option A: {empty_time_s:.1f} s",
            "Time depends on $\\sqrt{H}$; doubling height increases draining time by a factor of $\\sqrt{2}$.",
            "B halves the time; C doubles the time; D divides by 4.",
            "Hard", "phys-bernoullis-principle")

    return qs

if __name__ == "__main__":
    qs = get_part2_questions()
    print(f"Total Part 2 questions: {len(qs)}")
    easy = sum(1 for q in qs if q['difficulty'] == 'Easy')
    med = sum(1 for q in qs if q['difficulty'] == 'Medium')
    hard = sum(1 for q in qs if q['difficulty'] == 'Hard')
    print(f"Easy: {easy}, Medium: {med}, Hard: {hard}")
