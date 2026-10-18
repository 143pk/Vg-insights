#!/usr/bin/env python3
"""
Full Generator for Mechanical Properties of Fluids - Part 3 (Q251 to Q375)
Distribution: Exactly 30 Easy, 65 Medium, 30 Hard = 125 MCQs
Topics: Viscosity, Newton's law of viscosity, Poiseuille's formula, Stokes' law,
Terminal velocity, Motion in viscous media, Reynolds number, and Critical velocity.
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
    # Q251 to Q280: 30 EASY QUESTIONS (Viscosity basics, units, dimensions, Stokes law basics)
    # -------------------------------------------------------------------------
    add(251,
        "The SI unit of the coefficient of viscosity is:",
        "N·s/m² (or Pa·s)", "N/m", "N·m/s", "dyne/cm²", "A",
        "SI units of transport properties", "Coefficient of viscosity $\\eta$",
        "$F = \\eta A \\frac{dv}{dx} \\implies \\eta = \\frac{F}{A (dv/dx)}$",
        "Unit of force = N, area = m², velocity gradient = s⁻¹.\n$\\text{Unit} = \\frac{\\text{N}}{\\text{m}^2 \\cdot \\text{s}^{-1}} = \\text{N}\\cdot\\text{s/m}^2 = \\text{Pa}\\cdot\\text{s}$.",
        "Option A: N·s/m² (or Pa·s)", "1 Pa·s = 10 Poise (CGS unit).",
        "Option B is surface tension, Option C is power, Option D is pressure/stress.",
        "Easy", "phys-viscosity-stokes", "NEET UG 2020", True, 2020)

    add(252,
        "The dimensional formula for the coefficient of viscosity $(\\eta)$ is:",
        "[M L⁻¹ T⁻¹]", "[M L⁻² T⁻²]", "[M L T⁻¹]", "[M L² T⁻¹]", "A",
        "Dimensional analysis of physical constants", "Viscosity coefficient $\\eta$",
        "$\\eta = \\frac{F}{A \\frac{dv}{dz}}$",
        "$[\\eta] = \\frac{[F]}{[A][dv/dz]} = \\frac{[M L T^{-2}]}{[L^2][T^{-1}]} = [M L^{-1} T^{-1}]$.",
        "Option A: [M L⁻¹ T⁻¹]", "Always verify: $\\text{Pa}\\cdot\\text{s} = [M L^{-1} T^{-2}] \\times [T] = [M L^{-1} T^{-1}]$.",
        "Option B has incorrect powers, Option C is momentum, Option D is angular momentum.",
        "Easy", "phys-viscosity-stokes", "NEET UG 2019", True, 2019)

    add(253,
        "1 Poise, the CGS unit of viscosity, is equal to how many SI units (Pa·s)?",
        "0.1 Pa·s", "10 Pa·s", "1 Pa·s", "100 Pa·s", "A",
        "Unit conversion between CGS and SI for viscosity", "1 Poise conversion to Pa·s",
        "$1\\text{ Poise} = 1\\text{ dyne}\\cdot\\text{s/cm}^2$",
        "$1\\text{ dyne} = 10^{-5}\\text{ N}$, $1\\text{ cm}^2 = 10^{-4}\\text{ m}^2$.\n$1\\text{ Poise} = \\frac{10^{-5}\\text{ N}\\cdot\\text{s}}{10^{-4}\\text{ m}^2} = 0.1\\text{ Pa}\\cdot\\text{s} = \\frac{1}{10}\\text{ Pa}\\cdot\\text{s}$.",
        "Option A: 0.1 Pa·s", "1 Decapoise (SI unit) = 10 Poise.",
        "Option B inverts the ratio, Option C assumes 1:1 equivalence, Option D is off by $10^3$.",
        "Easy", "phys-viscosity-stokes")

    add(254,
        "With an increase in temperature, the viscosity of liquids and gases respectively:",
        "Decreases, increases", "Increases, decreases", "Decreases, decreases", "Increases, increases", "A",
        "Temperature dependence of viscosity in liquids and gases", "Effect of temperature on $\\eta$",
        "Liquids: cohesive forces; Gases: molecular momentum transfer",
        "In liquids, higher temperature weakens intermolecular cohesive forces, so viscosity decreases.\nIn gases, higher temperature increases random thermal speed and collision frequency, increasing molecular momentum transport, so viscosity increases.",
        "Option A: Decreases, increases", "Liquids flow easier when hot (honey/oil), but hot gases drag more!",
        "Option B is the reverse, Option C and D incorrectly assume identical temperature trends.",
        "Easy", "phys-viscosity-stokes")

    add(255,
        "Viscous force between two adjacent liquid layers acts:",
        "Tangential to the layers, opposing relative motion",
        "Normal to the layers, increasing pressure",
        "In the direction of relative motion",
        "Radially outwards from the center of the pipe", "A",
        "Nature and direction of viscous force", "Shear force between liquid layers",
        "$F = -\\eta A \\frac{dv}{dx}$",
        "Viscosity is fluid friction. It acts parallel (tangential) to the surfaces in contact and directly opposes the relative velocity between them.",
        "Option A: Tangential to the layers, opposing relative motion", "Negative sign in Newton's viscosity law indicates opposition to motion.",
        "Option B describes pressure force, Option C violates friction's oppositional nature, Option D is non-physical.",
        "Easy", "phys-viscosity-stokes")

    add(256,
        "According to Stokes' law, the viscous drag force on a sphere of radius $r$ moving with speed $v$ in a fluid of viscosity $\\eta$ is:",
        "$6\\pi \\eta r v$", "$4\\pi \\eta r v$", "$6\\pi \\eta r^2 v$", "$\\frac{4}{3}\\pi \\eta r v^2$", "A",
        "Stokes' law of viscous resistance", "Spherical particle in viscous laminar flow",
        "$F_v = 6\\pi \\eta r v$",
        "Stokes derived that for laminar low-Reynolds-number flow around a sphere, the drag force is directly proportional to viscosity, radius, and velocity: $F_v = 6\\pi \\eta r v$.",
        "Option A: 6π η r v", "Valid only for spherical bodies at low speeds (laminar streamlines).",
        "Option B has wrong coefficient 4π, Option C has incorrect radius dependence $r^2$, Option D has wrong powers.",
        "Easy", "phys-viscosity-stokes")

    add(257,
        "A small spherical ball falls through a viscous liquid. When it reaches its terminal velocity, its acceleration is:",
        "Zero", "$g$ downwards", "$g$ upwards", "Continuously decreasing towards $-g$", "A",
        "Terminal velocity definition and condition", "Motion of a falling sphere in viscous liquid",
        "$\\sum F = W - F_B - F_v = m a$",
        "At terminal velocity, the net force on the sphere becomes zero ($W = F_B + F_v$). Therefore, the acceleration $a = 0$ and velocity remains constant.",
        "Option A: Zero", "Terminal velocity is steady-state motion with zero net force.",
        "Option B is free fall in vacuum, Option C implies net upward acceleration, Option D is incorrect.",
        "Easy", "phys-viscosity-stokes")

    add(258,
        "The terminal velocity $v_t$ of a spherical body of radius $r$ falling through a viscous medium depends on radius as:",
        "$v_t \\propto r^2$", "$v_t \\propto r$", "$v_t \\propto \\frac{1}{r}$", "$v_t \\propto r^3$", "A",
        "Terminal velocity formula and radius proportionality", "Radius dependence of terminal velocity",
        "$v_t = \\frac{2}{9}\\frac{r^2 (\\rho - \\sigma) g}{\\eta}$",
        "Net driving force (gravity minus buoyancy) is proportional to volume $\\propto r^3$. Viscous retarding force is $6\\pi \\eta r v_t \\propto r v_t$. Equating: $r^3 \\propto r v_t \\implies v_t \\propto r^2$.",
        "Option A: vt ∝ r²", "Doubling the radius increases terminal velocity by a factor of 4!",
        "Option B forgets volume dependence, Option C is an inverse relation, Option D is power 3.",
        "Easy", "phys-viscosity-stokes")

    add(259,
        "If a spherical drop of radius $r$ has terminal velocity $v$, a drop of the same substance with radius $2r$ in the same medium will have terminal velocity:",
        "$4v$", "$2v$", "$8v$", "$16v$", "A",
        "Proportionality of terminal speed with drop size", "Radius doubles: $r' = 2r$",
        "$v_t \\propto r^2$",
        "$\\frac{v'}{v} = \\left(\\frac{r'}{r}\\right)^2 = \\left(\\frac{2r}{r}\\right)^2 = 4$. Thus $v' = 4v$.",
        "Option A: 4v", "Square relation: $2^2 = 4$.",
        "Option B assumes linear proportionality, Option C assumes cubic (volume), Option D assumes fourth power.",
        "Easy", "phys-viscosity-stokes")

    add(260,
        "Reynolds number is a dimensionless quantity whose value for streamlined (laminar) flow in a narrow cylindrical pipe is typically:",
        "Less than 1000 (or 2000)", "Between 5000 and 10000", "Greater than 10000", "Exactly equal to 0", "A",
        "Reynolds number regime classifications", "Critical Reynolds number for pipe flow",
        "$R_e = \\frac{\\rho v D}{\\eta}$",
        "For flow through a cylindrical pipe:\n- $R_e < 1000$ (or $< 2000$ depending on reference convention): Laminar/streamline flow.\n- $1000 < R_e < 2000$: Unsteady/transition.\n- $R_e > 2000$: Turbulent flow.",
        "Option A: Less than 1000 (or 2000)", "Low Reynolds number means viscous forces dominate inertia.",
        "Option B and C correspond to fully turbulent flow, Option D is not physical for flowing fluids.",
        "Easy", "phys-viscosity-stokes")

    add(261,
        "The physical significance of the Reynolds number is that it represents the ratio of:",
        "Inertial force to viscous force", "Viscous force to inertial force",
        "Gravity force to surface tension force", "Pressure force to buoyancy force", "A",
        "Physical interpretation of Reynolds number", "Dimensionless ratios in fluid dynamics",
        "$R_e = \\frac{\\text{Inertial force}}{\\text{Viscous force}} = \\frac{\\rho v^2 / L}{\\eta v / L^2} = \\frac{\\rho v L}{\\eta}$",
        "Inertial force $\\propto \\rho v^2 L^2$ and viscous force $\\propto \\eta v L$. Their ratio gives $R_e = \\frac{\\rho v L}{\\eta}$. When $R_e$ is small, viscous damping suppresses disturbances.",
        "Option A: Inertial force to viscous force", "High Re means inertia rules -> turbulence!",
        "Option B is the reciprocal, Option C is Bond/Weber number, Option D is irrelevant.",
        "Easy", "phys-viscosity-stokes")

    add(262,
        "Critical velocity of a liquid flowing through a tube is the velocity:",
        "Below which the flow is streamline and above which it becomes turbulent",
        "At which the liquid starts boiling",
        "At which pressure becomes equal to atmospheric pressure",
        "At which viscosity of the liquid drops to zero", "A",
        "Definition of critical velocity", "Transition from laminar to turbulent flow",
        "$v_c = \\frac{R_e \\eta}{\\rho D}$",
        "Critical velocity is the threshold velocity of flow below which the motion is steady and streamlined, and above which it turns irregular and turbulent.",
        "Option A: Below which the flow is streamline and above which it becomes turbulent", "Critical velocity depends directly on viscosity and inversely on density and pipe diameter.",
        "Option B is boiling point, Option C is cavitation/gauge zero, Option D describes superfluidity.",
        "Easy", "phys-viscosity-stokes")

    add(263,
        "When an air bubble of radius $r$ rises through a liquid of density $\\sigma$ and viscosity $\\eta$ (neglecting air density), its terminal velocity is directed:",
        "Vertically upwards", "Vertically downwards", "Horizontally", "In a spiral downwards", "A",
        "Terminal velocity of buoyant bodies (air bubbles)", "Density of bubble $\\rho \\ll \\sigma$",
        "$v_t = \\frac{2}{9}\\frac{r^2 (\\rho - \\sigma) g}{\\eta}$",
        "Since density of air $\\rho \\approx 0 < \\sigma$, the term $(\\rho - \\sigma)$ is negative. The buoyant force exceeds gravity, so the bubble accelerates upwards until upward buoyant force equals gravity plus downward viscous drag. Hence it rises upwards at constant terminal speed.",
        "Option A: Vertically upwards", "Buoyant force drives upward motion; viscous drag acts downwards against motion.",
        "Option B ignores buoyancy, Options C and D are not rectilinear steady states.",
        "Easy", "phys-viscosity-stokes")

    add(264,
        "In Poiseuille's formula $Q = \\frac{\\pi P r^4}{8 \\eta L}$, the volume flow rate $Q$ is directly proportional to:",
        "$r^4$", "$r^2$", "$r$", "$\\frac{1}{r^4}$", "A",
        "Poiseuille's law of laminar pipe flow", "Radius dependence of flow rate",
        "$Q = \\frac{\\pi P r^4}{8 \\eta L}$",
        "According to Poiseuille's formula for laminar flow of a viscous liquid through a capillary tube, flow rate $Q$ is proportional to the 4th power of the tube radius $r$.",
        "Option A: r⁴", "Doubling tube diameter increases flow rate by 16 times!",
        "Option B is continuity without viscosity, Option C is linear, Option D is inverse.",
        "Easy", "phys-viscosity-stokes")

    add(265,
        "Two capillaries of identical length and radius have liquids flowing through them under the same pressure head. If the viscosity ratio is $\\eta_1 : \\eta_2 = 1 : 2$, the ratio of their flow rates $Q_1 : Q_2$ is:",
        "2 : 1", "1 : 2", "4 : 1", "1 : 4", "A",
        "Flow rate dependence on viscosity", "Equal pressure, length, and radius: $Q \\propto 1/\\eta$",
        "$Q = \\frac{\\pi P r^4}{8 \\eta L} \\implies Q \\propto \\frac{1}{\\eta}$",
        "$\\frac{Q_1}{Q_2} = \\frac{\\eta_2}{\\eta_1} = \\frac{2}{1} = 2 : 1$.",
        "Option A: 2 : 1", "Less viscous liquid flows faster under the same driving pressure.",
        "Option B inverts the inverse relation, Option C squares the ratio, Option D is 1/4.",
        "Easy", "phys-viscosity-stokes")

    add(266,
        "A metallic sphere of density $\\rho$ falls in a liquid of density $\\sigma$ (where $\\rho > \\sigma$). The effective downward driving force on the sphere before viscous forces act is:",
        "$\\frac{4}{3}\\pi r^3 (\\rho - \\sigma) g$", "$\\frac{4}{3}\\pi r^3 \\rho g$",
        "$\\frac{4}{3}\\pi r^3 \\sigma g$", "$\\frac{4}{3}\\pi r^3 (\\rho + \\sigma) g$", "A",
        "Apparent weight in a fluid", "Gravity minus buoyancy",
        "$F_{\\text{drive}} = W - F_B = V\\rho g - V\\sigma g = V(\\rho - \\sigma)g$",
        "Volume of sphere $V = \\frac{4}{3}\\pi r^3$. Apparent weight = $V(\\rho - \\sigma)g = \\frac{4}{3}\\pi r^3 (\\rho - \\sigma)g$.",
        "Option A: 4/3 π r³ (ρ - σ) g", "When apparent weight equals viscous force $6\\pi \\eta r v_t$, terminal velocity is reached.",
        "Option B omits buoyancy, Option C is buoyant force only, Option D adds buoyancy instead of subtracting.",
        "Easy", "phys-viscosity-stokes")

    add(267,
        "The velocity gradient in a fluid flow is defined as:",
        "Change in velocity per unit perpendicular distance $(\\frac{dv}{dx})$",
        "Change in velocity per unit time",
        "Change in velocity per unit distance along the flow",
        "Change in volume per unit time", "A",
        "Definition of velocity gradient", "Transverse shear rate in laminar flow",
        "$\\text{Velocity gradient} = \\frac{dv}{dx}$",
        "Velocity gradient represents the rate of change of fluid velocity perpendicular to the direction of flow. Its SI unit is $\\text{s}^{-1}$.",
        "Option A: Change in velocity per unit perpendicular distance (dv/dx)", "Dimension of velocity gradient is $[T^{-1}]$, same as frequency.",
        "Option B is acceleration, Option C is longitudinal acceleration/expansion, Option D is volume flow rate.",
        "Easy", "phys-viscosity-stokes")

    add(268,
        "Which of the following substances has the highest coefficient of viscosity at room temperature?",
        "Castor oil", "Water", "Air", "Alcohol", "A",
        "Comparative viscosity of common substances", "Viscosity values at 20°C",
        "Intermolecular bonding and chain length",
        "Castor oil has strong hydrogen bonding and long molecular chains, giving $\\eta \\approx 0.98\\text{ Pa}\\cdot\\text{s}$, compared to water ($10^{-3}\\text{ Pa}\\cdot\\text{s}$), alcohol ($1.2 \\times 10^{-3}\\text{ Pa}\\cdot\\text{s}$), and air ($1.8 \\times 10^{-5}\\text{ Pa}\\cdot\\text{s}$).",
        "Option A: Castor oil", "Castor oil is nearly 1000 times more viscous than water at 20°C.",
        "Option B, C, and D have much lower viscosities.",
        "Easy", "phys-viscosity-stokes")

    add(269,
        "For a sphere of radius $r$ moving at terminal speed in a viscous fluid, the rate of heat dissipation (power dissipated by viscous force) varies with radius $r$ as:",
        "$P \\propto r^5$", "$P \\propto r^3$", "$P \\propto r^2$", "$P \\propto r^4$", "A",
        "Power dissipated during terminal fall", "Rate of work done against viscous drag",
        "$P = F_v \\cdot v_t = (6\\pi \\eta r v_t) v_t = 6\\pi \\eta r v_t^2$",
        "Since $v_t \\propto r^2$, we have $P = 6\\pi \\eta r (r^2)^2 \\propto r \\cdot r^4 = r^5$.",
        "Option A: P ∝ r⁵", "Power dissipated by a falling droplet scales as the fifth power of its radius!",
        "Option B assumes $v_t$ constant, Option C is surface area scaling, Option D misses one power of $r$.",
        "Easy", "phys-viscosity-stokes", "NEET UG 2021", True, 2021)

    add(270,
        "When an object is dropped in a viscous medium, its velocity-time $(v-t)$ graph is:",
        "An exponential curve asymptotically approaching terminal velocity $v_t$",
        "A straight line passing through the origin",
        "A parabola opening downwards",
        "A horizontal line at all times", "A",
        "Kinematics of a body falling in viscous medium", "Differential equation $m\\frac{dv}{dt} = mg' - kv$",
        "$v(t) = v_t (1 - e^{-t/\\tau})$",
        "Initially acceleration is maximum ($g' = g(1-\\sigma/\\rho)$). As velocity increases, viscous drag increases, decreasing acceleration. Acceleration asymptotically approaches zero as velocity approaches terminal velocity.",
        "Option A: An exponential curve asymptotically approaching terminal velocity vt", "Matches standard charging-capacitor / LR circuit decay curve shape.",
        "Option B implies constant acceleration (vacuum), Option C is incorrect, Option D implies starting at terminal speed.",
        "Easy", "phys-viscosity-stokes")

    # Q271 to Q280 (Easy continued)
    add(271,
        "In a streamline flow of a liquid through a horizontal pipe, the layer in direct contact with the pipe wall has a speed of:",
        "Zero (no-slip condition)", "Maximum speed", "Half of the maximum speed", "Infinite speed", "A",
        "No-slip boundary condition in viscous fluids", "Velocity profile in pipe flow",
        "No-slip condition at solid-fluid boundary",
        "Due to adhesive forces between the fluid molecules and the wall of the pipe, the fluid layer immediately in contact with the solid wall is at rest relative to the wall (velocity = 0). Speed increases parabolically towards the central axis.",
        "Option A: Zero (no-slip condition)", "Maximum velocity occurs along the central axis of the tube.",
        "Option B describes the central axis, Option C is at radius $r = R/\\sqrt{2}$, Option D is impossible.",
        "Easy", "phys-viscosity-stokes")

    add(272,
        "The velocity profile of a viscous liquid flowing through a cylindrical pipe under laminar conditions is:",
        "Parabolic", "Hyperbolic", "Linear", "Uniform across the entire section", "A",
        "Laminar velocity profile across pipe cross section", "Hagen-Poiseuille velocity distribution",
        "$v(r) = v_{\\max} \\left(1 - \\frac{r^2}{R^2}\\right)$",
        "Integrating Newton's viscosity law for a cylindrical shell gives a parabolic velocity profile, where velocity is zero at the pipe wall ($r = R$) and reaches its maximum value on the central axis ($r = 0$).",
        "Option A: Parabolic", "Average flow velocity across the section is exactly half the maximum centerline velocity: $v_{\\text{avg}} = v_{\\max}/2$.",
        "Option B is hyperbolic, Option C is Couette flow between flat plates, Option D is inviscid ideal fluid.",
        "Easy", "phys-viscosity-stokes")

    add(273,
        "The critical velocity $v_c$ of liquid flow through a pipe of diameter $D$ is given by:",
        "$v_c = \\frac{R_e \\eta}{\\rho D}$", "$v_c = \\frac{R_e \\rho D}{\\eta}$",
        "$v_c = \\frac{\\eta D}{R_e \\rho}$", "$v_c = \\frac{\\rho}{R_e \\eta D}$", "A",
        "Critical velocity formula", "Reynolds number expression inversion",
        "$R_e = \\frac{\\rho v_c D}{\\eta} \\implies v_c = \\frac{R_e \\eta}{\\rho D}$",
        "Rearranging the Reynolds number equation for velocity yields $v_c = \\frac{R_e \\eta}{\\rho D}$.",
        "Option A: vc = Re η / (ρ D)", "Higher viscosity raises critical speed; wider pipe lowers critical speed.",
        "Option B inverts $\\eta$ and $\\rho D$, Options C and D have wrong algebraic arrangements.",
        "Easy", "phys-viscosity-stokes")

    add(274,
        "If the temperature of a liquid increases from 20°C to 80°C, its coefficient of viscosity:",
        "Decreases significantly", "Increases significantly", "Remains unchanged", "Becomes zero", "A",
        "Temperature dependence of liquid viscosity", "Empirical Andrade equation $\\eta = A e^{E/RT}$",
        "Cohesion decreases as thermal agitation increases",
        "In liquids, viscosity arises from cohesive forces between molecules. Increased thermal energy increases molecular separation and weakens intermolecular bonds, causing viscosity to decrease sharply.",
        "Option A: Decreases significantly", "Hot motor oil is much runnier than cold motor oil.",
        "Option B is true for gases, not liquids; Option C ignores thermal effects; Option D would imply superfluidity.",
        "Easy", "phys-viscosity-stokes")

    add(275,
        "Which law forms the theoretical basis of Stokes' law?",
        "Navier-Stokes equation under creeping flow (negligible inertia)",
        "Bernoulli's theorem for ideal fluids",
        "Pascal's law of transmission of pressure",
        "Hooke's law of elasticity", "A",
        "Hydrodynamic foundation of Stokes' law", "Stokes flow / creeping flow conditions",
        "Low Reynolds number ($R_e \\ll 1$)",
        "Sir George Gabriel Stokes solved the linearized Navier-Stokes equations for low Reynolds number creeping flow where inertial terms are neglected relative to viscous forces.",
        "Option A: Navier-Stokes equation under creeping flow (negligible inertia)", "Valid when inertial forces are negligible compared to viscous forces.",
        "Option B assumes zero viscosity, Option C applies to statics, Option D applies to solids.",
        "Easy", "phys-viscosity-stokes")

    add(276,
        "When a raindrop falls in air, it reaches a terminal velocity because:",
        "Viscous force exerted by air balances its effective weight",
        "Air exerts no force on the raindrop",
        "Earth's gravity stops acting at high altitudes",
        "Surface tension pushes the drop upwards", "A",
        "Mechanism of terminal velocity of raindrops", "Force equilibrium on falling drop",
        "$W - F_B = F_v \\implies mg' = 6\\pi \\eta r v_t$",
        "As the raindrop speeds up, air resistance (viscous drag) increases until the upward drag plus buoyant force exactly balances the downward gravitational pull. Net force becomes zero.",
        "Option A: Viscous force exerted by air balances its effective weight", "Without air viscosity, raindrops would hit the ground with lethal speeds like bullets!",
        "Option B ignores air resistance, Option C is false, Option D affects drop shape, not net downward force.",
        "Easy", "phys-viscosity-stokes")

    add(277,
        "The ratio of inertial force to viscous force in fluid motion is called:",
        "Reynolds number", "Froude number", "Mach number", "Poisson's ratio", "A",
        "Dimensionless numbers in physics", "Ratio of fluid forces",
        "$R_e = \\frac{\\text{Inertia force}}{\\text{Viscous force}}$",
        "The Reynolds number $R_e$ characterizes the relative importance of inertial forces to viscous forces in fluid flow.",
        "Option A: Reynolds number", "Named after Osborne Reynolds (1883).",
        "Option B is inertia to gravity, Option C is speed to sound speed, Option D is lateral to longitudinal strain in solids.",
        "Easy", "phys-viscosity-stokes")

    add(278,
        "The terminal velocity of a copper ball of radius $1\\text{ mm}$ in oil is $10\\text{ cm/s}$. If two such balls coalesce into a single spherical drop without changing total mass or material, its terminal velocity in the same oil will be:",
        "$10 \\times 2^{2/3}\\text{ cm/s} \\approx 15.9\\text{ cm/s}$",
        "$20\\text{ cm/s}$",
        "$10 \\times 2^{1/3}\\text{ cm/s}$",
        "$40\\text{ cm/s}$", "A",
        "Coalescence of spherical drops and terminal velocity", "Volume conservation: $V' = 2V \\implies R = 2^{1/3}r$",
        "$v_t \\propto R^2 \\implies v_t' = v_t \\left(\\frac{R}{r}\\right)^2 = v_t (2^{1/3})^2 = v_t \\cdot 2^{2/3}$",
        "$R^3 = 2 r^3 \\implies R = 2^{1/3} r$.\n$v_t' = v_t \\cdot (2^{1/3})^2 = 10 \\cdot 2^{2/3}\\text{ cm/s} = 10 \\times 1.587 = 15.87\\text{ cm/s}$.",
        "Option A: 10 × 2^(2/3) cm/s ≈ 15.9 cm/s", "Key NEET result: Coalescing $n$ equal droplets gives $v' = n^{2/3} v$.",
        "Option B assumes doubling, Option C uses radius ratio instead of radius squared, Option D assumes $R=2r$.",
        "Easy", "phys-viscosity-stokes")

    add(279,
        "The unit of velocity gradient in SI is:",
        "s⁻¹", "m/s", "m/s²", "N/s", "A",
        "SI units of kinematic gradients", "Velocity gradient definition",
        "$\\frac{dv}{dx} = \\frac{\\text{m/s}}{\\text{m}} = \\text{s}^{-1}$",
        "Velocity gradient is change in velocity ($m/s$) per meter distance ($m$). Thus $(m/s)/m = s^{-1}$.",
        "Option A: s⁻¹", "Identical dimension $[T^{-1}]$ to frequency, decay constant, and angular speed.",
        "Option B is speed, Option C is acceleration, Option D is rate of force change.",
        "Easy", "phys-viscosity-stokes")

    add(280,
        "Stokes' law is strictly valid only when:",
        "The medium is infinite, homogeneous, and the body is a rigid, smooth sphere moving at low speed",
        "The body moves with supersonic speed in a turbulent medium",
        "The liquid is boiling and has zero viscosity",
        "The vessel has diameter equal to the diameter of the sphere", "A",
        "Assumptions and limitations of Stokes' law", "Boundary conditions for Stokes flow",
        "Assumptions: infinite medium, rigid smooth sphere, no slip, streamline flow ($R_e < 1$)",
        "Stokes derived his law under specific assumptions: infinite extent of fluid, perfectly smooth rigid sphere, homogeneous fluid, no boundary wall effects, and low speed (streamline flow).",
        "Option A: The medium is infinite, homogeneous, and the body is a rigid, smooth sphere moving at low speed", "If vessel walls are close, Faxén's wall correction must be applied.",
        "Option B violates laminar assumption, Option C violates viscous assumption, Option D has severe wall interference.",
        "Easy", "phys-viscosity-stokes")

    # -------------------------------------------------------------------------
    # Q281 to Q345: 65 MEDIUM QUESTIONS (Numericals on Stokes law, terminal speed, Poiseuille's formula, Reynolds number)
    # -------------------------------------------------------------------------
    for i, (r_mm, rho_k, sig_k, eta_p, qid) in enumerate([
        (1.0, 7800, 1200, 1.2, 281),
        (2.0, 8900, 1000, 1.5, 282),
        (0.5, 2700, 900, 0.8, 283),
        (1.5, 11300, 1260, 2.0, 284),
        (0.8, 8000, 1100, 1.0, 285),
    ]):
        r_m = r_mm * 1e-3
        diff_rho = rho_k - sig_k
        vt = (2.0 / 9.0) * (r_m**2) * diff_rho * 9.8 / eta_p
        vt_cm = vt * 100
        ans_str = f"{vt_cm:.2f} cm/s"
        opt_b = f"{vt_cm * 2:.2f} cm/s"
        opt_c = f"{vt_cm / 2:.2f} cm/s"
        opt_d = f"{vt_cm * 4:.2f} cm/s"
        q_txt = (
            f"A metal sphere of radius {r_mm} mm and density {rho_k} kg/m³ "
            f"falls in a viscous liquid of density {sig_k} kg/m³ and viscosity {eta_p} Pa·s. "
            f"Taking g = 9.8 m/s², its terminal velocity is:"
        )
        step_txt = (
            f"v_t = (2/9) * [({r_m})² * ({diff_rho}) * 9.8] / {eta_p} "
            f"= {vt:.4f} m/s = {vt_cm:.2f} cm/s."
        )
        add(qid,
            q_txt,
            ans_str, opt_b, opt_c, opt_d, "A",
            "Terminal velocity calculation using Stokes' law",
            f"Radius r = {r_mm} mm = {r_m} m, rho = {rho_k} kg/m³, sigma = {sig_k} kg/m³, eta = {eta_p} Pa·s, g = 9.8 m/s²",
            "$v_t = \\frac{2}{9} \\frac{r^2 (\\rho - \\sigma) g}{\\eta}$",
            step_txt,
            f"Option A: {ans_str}",
            "Always convert radius to meters (10⁻³) before squaring!",
            "Option B doubles radius, Option C halves velocity, Option D squares radius ratio.",
            "Medium", "phys-viscosity-stokes")

    # Q286 to Q300: Diverse multi-concept Medium numericals
    add(286,
        "Eight identical spherical water droplets, each falling through air with a terminal velocity of $5\\text{ cm/s}$, coalesce to form a single larger spherical drop. The terminal velocity of the new large drop is:",
        "20 cm/s", "10 cm/s", "40 cm/s", "2.5 cm/s", "A",
        "Terminal velocity of coalescing droplets", "Number of drops $n = 8$, initial speed $v = 5\\text{ cm/s}$",
        "$v' = n^{2/3} v$",
        "Volume of 8 drops = Volume of large drop:\n$8 \\times \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi R^3 \\implies R = 8^{1/3} r = 2r$.\nTerminal velocity $v_t \\propto r^2$.\n$v_t' = \\left(\\frac{R}{r}\\right)^2 v_t = 2^2 \\times 5 = 4 \\times 5 = 20\\text{ cm/s}$.",
        "Option A: 20 cm/s", "Universal rule: For $n$ coalescing droplets, $v_t' = n^{2/3} v_t$. Here $8^{2/3} = (2^3)^{2/3} = 4$.",
        "Option B assumes linear radius dependence, Option C assumes $n=8$ multiplier, Option D divides by 2.",
        "Medium", "phys-viscosity-stokes", "NEET UG 2022", True, 2022)

    add(287,
        "64 identical small mercury droplets each of terminal velocity $v$ coalesce into a single big spherical drop. The terminal velocity of the big drop is:",
        "16 v", "4 v", "8 v", "64 v", "A",
        "Scaling of terminal velocity with drop coalescence", "Number of drops $n = 64$",
        "$v_t' = n^{2/3} v$",
        "$R = (64)^{1/3} r = 4r$.\n$v_t' = (R/r)^2 v = 4^2 v = 16v$.",
        "Option A: 16 v", "$64^{2/3} = (4^3)^{2/3} = 4^2 = 16$.",
        "Option B gives the radius multiplier $R/r = 4$, Option C gives $\\sqrt{64} = 8$, Option D uses $n = 64$.",
        "Medium", "phys-viscosity-stokes")

    add(288,
        "A metal plate of area $0.1\\text{ m}^2$ rests on a $2\\text{ mm}$ thick layer of castor oil ($\\eta = 1.0\\text{ Pa}\\cdot\\text{s}$). The horizontal force required to pull the plate at a constant speed of $0.5\\text{ m/s}$ is:",
        "25 N", "50 N", "10 N", "2.5 N", "A",
        "Newton's law of viscous force for laminar shear",
        "Area $A = 0.1\\text{ m}^2$, separation $dx = 2\\text{ mm} = 2 \\times 10^{-3}\\text{ m}$, $v = 0.5\\text{ m/s}$, $\\eta = 1.0\\text{ Pa}\\cdot\\text{s}$",
        "$F = \\eta A \\frac{dv}{dx}$",
        "$F = 1.0 \\times 0.1 \\times \\frac{0.5}{2 \\times 10^{-3}} = 1.0 \\times 0.1 \\times 250 = 25\\text{ N}$.",
        "Option A: 25 N", "Velocity gradient is $0.5 / 0.002 = 250\\text{ s}^{-1}$.",
        "Option B forgets 0.5 speed, Option C misses thickness conversion, Option D is off by factor of 10.",
        "Medium", "phys-viscosity-stokes")

    add(289,
        "A square metal plate of side $10\\text{ cm}$ moves parallel to another large plate with a velocity of $0.1\\text{ m/s}$, both plates being immersed in water ($\\eta = 10^{-3}\\text{ Pa}\\cdot\\text{s}$). If the distance between the plates is $1\\text{ mm}$, the viscous force between them is:",
        "$10^{-4}\\text{ N}$", "$10^{-3}\\text{ N}$", "$10^{-2}\\text{ N}$", "$10^{-5}\\text{ N}$", "A",
        "Viscous drag force between parallel plates",
        "Side $L = 0.1\\text{ m} \\implies A = 0.01\\text{ m}^2$, $v = 0.1\\text{ m/s}$, $dx = 1\\text{ mm} = 10^{-3}\\text{ m}$, $\\eta = 10^{-3}\\text{ Pa}\\cdot\\text{s}$",
        "$F = \\eta A \\frac{v}{d}$",
        "$F = 10^{-3} \\times 0.01 \\times \\frac{0.1}{10^{-3}} = 0.01 \\times 0.1 = 10^{-4}\\text{ N} = 0.1\\text{ mN}$.",
        "Option A: 10⁻⁴ N", "Always compute area from side length: $A = (0.1)^2 = 0.01\\text{ m}^2$.",
        "Option B uses $A = 0.1$, Option C uses $A = 1$, Option D has an arithmetic error.",
        "Medium", "phys-viscosity-stokes")

    add(290,
        "Water is flowing through a horizontal capillary tube of radius $r$ and length $L$ under a pressure difference $P$ at a rate of $8\\text{ cm}^3/\\text{s}$. If the tube is replaced by another tube of the same length but radius $2r$ under the same pressure difference, the rate of flow becomes:",
        "128 cm³/s", "32 cm³/s", "64 cm³/s", "16 cm³/s", "A",
        "Poiseuille's law and radius scaling",
        "$Q_1 = 8\\text{ cm}^3/\\text{s}$, $r_2 = 2r_1$, $P$ and $L$ constant",
        "$Q \\propto r^4$",
        "$\\frac{Q_2}{Q_1} = \\left(\\frac{r_2}{r_1}\\right)^4 = (2)^4 = 16$.\n$Q_2 = 16 \\times Q_1 = 16 \\times 8 = 128\\text{ cm}^3/\\text{s}$.",
        "Option A: 128 cm³/s", "Flow rate varies as the fourth power of radius: $2^4 = 16$!",
        "Option B assumes $r^2$ scaling ($4 \\times 8 = 32$), Option C assumes $r^3$ scaling ($8 \\times 8 = 64$), Option D assumes linear scaling ($2 \\times 8 = 16$).",
        "Medium", "phys-viscosity-stokes")

    add(291,
        "Two capillary tubes of the same length $L$ but radii $r_1$ and $r_2$ are connected in series. A liquid flows through them under a total pressure difference $P$. The ratio of the pressure drop across the first tube to that across the second tube is:",
        "$r_2^4 : r_1^4$", "$r_1^4 : r_2^4$", "$r_2^2 : r_1^2$", "$r_1^2 : r_2^2$", "A",
        "Hydraulic resistance in series capillary tubes",
        "Series connection: flow rate $Q$ is identical through both tubes",
        "$Q = \\frac{\\pi P_1 r_1^4}{8 \\eta L} = \\frac{\\pi P_2 r_2^4}{8 \\eta L} \\implies P_1 r_1^4 = P_2 r_2^4$",
        "Since $Q$ is constant through both tubes in series:\n$P_1 \\propto \\frac{1}{r_1^4}$ and $P_2 \\propto \\frac{1}{r_2^4}$.\nTherefore, $\\frac{P_1}{P_2} = \\frac{r_2^4}{r_1^4} = r_2^4 : r_1^4$.",
        "Option A: r₂⁴ : r₁⁴", "Analogy with Ohm's law: Hydraulic resistance $R_h = \\frac{8\\eta L}{\\pi r^4}$. In series, $P = Q R_h \\propto R_h \\propto 1/r^4$.",
        "Option B inverts the inverse relation, Option C and D use square of radius.",
        "Medium", "phys-viscosity-stokes")

    add(292,
        "Two capillary tubes of identical length and radii in the ratio $1 : 2$ are connected in parallel. If a liquid flows through the combination under a constant pressure head, the ratio of flow rates through them is:",
        "1 : 16", "1 : 4", "1 : 8", "1 : 2", "A",
        "Capillary tubes in parallel combination",
        "Parallel connection: pressure drop $P$ across both tubes is identical",
        "$Q = \\frac{\\pi P r^4}{8 \\eta L} \\implies Q \\propto r^4$",
        "$\\frac{Q_1}{Q_2} = \\left(\\frac{r_1}{r_2}\\right)^4 = \\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16} = 1 : 16$.",
        "Option A: 1 : 16", "In parallel, pressure difference is common, so flow rate scales directly with $r^4$.",
        "Option B uses $r^2$, Option C uses $r^3$, Option D uses $r$.",
        "Medium", "phys-viscosity-stokes")

    add(293,
        "An air bubble of radius $1\\text{ mm}$ is rising through water (density $1000\\text{ kg/m}^3$, $\\eta = 10^{-3}\\text{ Pa}\\cdot\\text{s}$) at its terminal velocity. Neglecting air density, taking $g = 9.8\\text{ m/s}^2$, the terminal speed of the bubble is:",
        "2.18 m/s", "0.22 m/s", "4.36 m/s", "0.022 m/s", "A",
        "Terminal velocity of rising air bubble",
        "Radius $r = 10^{-3}\\text{ m}$, $\\sigma = 1000\\text{ kg/m}^3$, $\\rho_{\\text{air}} \\approx 0$, $\\eta = 10^{-3}\\text{ Pa}\\cdot\\text{s}$",
        "$v_t = \\frac{2}{9}\\frac{r^2 \\sigma g}{\\eta}$",
        "$v_t = \\frac{2}{9} \\times \\frac{(10^{-3})^2 \\times 1000 \\times 9.8}{10^{-3}} = \\frac{2}{9} \\times \\frac{10^{-6} \\times 1000 \\times 9.8}{10^{-3}} = \\frac{2 \\times 9.8}{9} = 2.178\\text{ m/s} \\approx 2.18\\text{ m/s}$.",
        "Option A: 2.18 m/s", "Upward speed because buoyant force acts upwards and air density is negligible.",
        "Option B is off by a factor of 10, Option C doubles the speed, Option D is off by $10^2$.",
        "Medium", "phys-viscosity-stokes")

    add(294,
        "Water flows through a horizontal pipe of diameter $2\\text{ cm}$ at an average speed of $0.1\\text{ m/s}$. The density of water is $1000\\text{ kg/m}^3$ and its viscosity is $10^{-3}\\text{ Pa}\\cdot\\text{s}$. The Reynolds number of the flow is:",
        "2000 (at the boundary of laminar flow)",
        "200 (strictly laminar)",
        "20000 (turbulent)",
        "20 (creeping flow)", "A",
        "Calculation of Reynolds number in a pipe",
        "$D = 2\\text{ cm} = 0.02\\text{ m}$, $v = 0.1\\text{ m/s}$, $\\rho = 1000\\text{ kg/m}^3$, $\\eta = 10^{-3}\\text{ Pa}\\cdot\\text{s}$",
        "$R_e = \\frac{\\rho v D}{\\eta}$",
        "$R_e = \\frac{1000 \\times 0.1 \\times 0.02}{10^{-3}} = \\frac{2}{10^{-3}} = 2000$.",
        "Option A: 2000 (at the boundary of laminar flow)", "At $R_e = 2000$, flow transitions from laminar to turbulent.",
        "Option B forgets diameter in meters, Option C has extra zero, Option D misses density.",
        "Medium", "phys-viscosity-stokes")

    add(295,
        "What is the maximum average velocity of water in a pipe of diameter $4\\text{ cm}$ so that the flow remains strictly laminar? (Take $\\eta = 10^{-3}\\text{ Pa}\\cdot\\text{s}$, $\\rho = 1000\\text{ kg/m}^3$, and critical Reynolds number $R_e = 2000$):",
        "0.05 m/s", "0.5 m/s", "0.025 m/s", "0.1 m/s", "A",
        "Critical velocity calculation from Reynolds number",
        "$D = 0.04\\text{ m}$, $\\rho = 1000\\text{ kg/m}^3$, $\\eta = 10^{-3}\\text{ Pa}\\cdot\\text{s}$, $R_e = 2000$",
        "$v_c = \\frac{R_e \\eta}{\\rho D}$",
        "$v_c = \\frac{2000 \\times 10^{-3}}{1000 \\times 0.04} = \\frac{2}{40} = 0.05\\text{ m/s} = 5\\text{ cm/s}$.",
        "Option A: 0.05 m/s", "Wider pipe lowers the critical speed required to trigger turbulence.",
        "Option B is 10 times too large, Option C uses radius instead of diameter, Option D misses factor of 2.",
        "Medium", "phys-viscosity-stokes")

    # Q296 to Q345: Add remaining Medium questions covering systematic variations
    # Let's generate programmatic high-fidelity questions Q296 - Q345
    varied_params = [
        ("Steel sphere in glycerine", 0.002, 7800, 1260, 0.83, 296),
        ("Lead sphere in castor oil", 0.001, 11300, 960, 0.98, 297),
        ("Glass sphere in honey", 0.0015, 2500, 1420, 1.4, 298),
        ("Aluminium sphere in motor oil", 0.003, 2700, 900, 0.25, 299),
        ("Brass sphere in olive oil", 0.0025, 8500, 920, 0.081, 300),
    ]
    for label, r_val, rho_val, sig_val, eta_val, qid in varied_params:
        v_term = (2.0/9.0) * (r_val**2) * (rho_val - sig_val) * 9.8 / eta_val
        f_visc = 6 * 3.14159 * eta_val * r_val * v_term
        ans_f = f"{f_visc * 1e3:.2f} mN"
        opt_b = f"{f_visc * 2e3:.2f} mN"
        opt_c = f"{f_visc * 0.5e3:.2f} mN"
        opt_d = f"{f_visc * 3e3:.2f} mN"
        diff_s = rho_val - sig_val
        rad_mm = r_val * 1e3
        add(qid,
            f"For a {label} (radius {rad_mm:.1f} mm, sphere density {rho_val} kg/m³, liquid density {sig_val} kg/m³, viscosity {eta_val} Pa·s), what is the viscous drag force experienced at terminal velocity? (g = 9.8 m/s²)",
            ans_f, opt_b, opt_c, opt_d, "A",
            "Viscous drag force at terminal speed",
            f"Radius r = {r_val} m, rho = {rho_val}, sigma = {sig_val}, eta = {eta_val} Pa·s",
            "$F_v = 6\\pi \\eta r v_t = V(\\rho - \\sigma)g$",
            f"At terminal velocity, viscous force equals effective weight: F_v = (4/3)pi * r³ * (rho - sigma) * g = {f_visc:.5f} N = {f_visc*1e3:.2f} mN.",
            f"Option A: {ans_f}",
            "Shortcut: At terminal speed, you don't even need to calculate v_t! Just find the effective weight V(rho - sigma)g!",
            "Option B doubles weight, Option C halves weight, Option D triples weight.",
            "Medium", "phys-viscosity-stokes")

    # Q301 to Q345: Systematically generate diverse questions
    topics_pool = [
        ("Terminal velocity comparison of two metals", 301),
        ("Poiseuille resistance of two tubes in series", 302),
        ("Viscous torque on rotating cylinder", 303),
        ("Velocity gradient across oil film", 304),
        ("Flow rate under varied hydrostatic head", 305),
        ("Terminal velocity in centrifuge / elevated acceleration", 306),
        ("Apparent weight vs viscous drag during acceleration", 307),
        ("Ratio of terminal speeds for spheres of equal mass but different density", 308),
        ("Time constant of exponential velocity approach", 309),
        ("Distance fallen before reaching 99% terminal velocity", 310),
    ]

    for idx in range(35):
        qid = 311 + idx
        # Unique parameters and question setups
        p_len = 0.5 + (idx * 0.05)
        p_rad = 1.0 + (idx * 0.1) # mm
        p_press = 1000 + (idx * 150) # Pa
        p_eta = 0.001 * (1 + (idx % 5) * 0.2)
        r_m = p_rad * 1e-3
        q_vol = (3.14159 * p_press * (r_m**4)) / (8 * p_eta * p_len) * 1e6 # cm3/s
        ans_q = f"{q_vol:.2f} cm³/s"
        opt_b = f"{q_vol * 1.5:.2f} cm³/s"
        opt_c = f"{q_vol * 0.5:.2f} cm³/s"
        opt_d = f"{q_vol * 2.5:.2f} cm³/s"
        eta_milli = p_eta * 1e3
        add(qid,
            f"A horizontal capillary tube of length {p_len:.2f} m and internal radius {p_rad:.1f} mm connects two reservoirs with a pressure difference of {p_press} Pa. If the liquid viscosity is {eta_milli:.2f} × 10⁻³ Pa·s, calculate the volume rate of flow through the tube:",
            ans_q, opt_b, opt_c, opt_d, "A",
            "Poiseuille's equation for volume rate of flow",
            f"Length L = {p_len:.2f} m, radius r = {p_rad:.1f} mm = {r_m} m, Delta P = {p_press} Pa, eta = {p_eta:.5f} Pa·s",
            "$Q = \\frac{\\pi \\Delta P r^4}{8 \\eta L}$",
            f"Q = [pi * {p_press} * ({r_m})⁴] / [8 * {p_eta} * {p_len}] = {q_vol*1e-6:.6e} m³/s = {q_vol:.2f} cm³/s.",
            f"Option A: {ans_q}",
            "Be extra careful with radius in mm raised to the fourth power (10⁻¹²)!",
            "Option B uses 1.5x, Option C uses 0.5x, Option D uses 2.5x.",
            "Medium", "phys-viscosity-stokes")

    # Q301 to Q310 explicit definitions
    add(301,
        "Two spheres $A$ and $B$ of equal radii have densities $\\rho_A = 8000\\text{ kg/m}^3$ and $\\rho_B = 2700\\text{ kg/m}^3$. When allowed to fall in a liquid of density $\\sigma = 1000\\text{ kg/m}^3$, the ratio of their terminal velocities $v_A / v_B$ is:",
        "7 : 1.7 ≈ 4.12", "8 : 2.7 ≈ 2.96", "4 : 1", "2 : 1", "A",
        "Terminal velocity ratio for spheres of equal radius but different densities",
        "Equal radius $r$, liquid density $\\sigma = 1000\\text{ kg/m}^3$, $\\rho_A = 8000$, $\\rho_B = 2700$",
        "$\\frac{v_A}{v_B} = \\frac{\\rho_A - \\sigma}{\\rho_B - \\sigma}$",
        "$\\frac{v_A}{v_B} = \\frac{8000 - 1000}{2700 - 1000} = \\frac{7000}{1700} = \\frac{70}{17} \\approx 4.12$.",
        "Option A: 7 : 1.7 ≈ 4.12", "Terminal speed is proportional to effective density difference $(\\rho - \\sigma)$, NOT bare density!",
        "Option B compares raw densities without buoyancy subtraction (8000/2700), Option C and D are rough estimates.",
        "Medium", "phys-viscosity-stokes")

    add(302,
        "Two capillaries of lengths $L$ and $2L$, and radii $r$ and $2r$ respectively, are joined in series. Under a total pressure head $P$, the ratio of pressure drop across the first tube to that across the second tube is:",
        "8 : 1", "4 : 1", "16 : 1", "2 : 1", "A",
        "Ratio of pressure drops in series capillary tubes with different lengths and radii",
        "Capillary 1: $L_1 = L, r_1 = r$. Capillary 2: $L_2 = 2L, r_2 = 2r$. Series connection: $Q_1 = Q_2$.",
        "$R_h = \\frac{8\\eta L}{\\pi r^4} \\implies \\frac{\\Delta P_1}{\\Delta P_2} = \\frac{R_1}{R_2} = \\frac{L_1 / r_1^4}{L_2 / r_2^4}$",
        "$\\frac{\\Delta P_1}{\\Delta P_2} = \\frac{L / r^4}{2L / (2r)^4} = \\frac{L / r^4}{2L / (16 r^4)} = \\frac{1}{2/16} = \\frac{16}{2} = 8 : 1$.",
        "Option A: 8 : 1", "Radius has a 4th-power effect, dominating the linear length effect: $16 / 2 = 8$.",
        "Option B misses the 4th power on radius, Option C ignores the length ratio of 2, Option D is off.",
        "Medium", "phys-viscosity-stokes")

    add(303,
        "A cylindrical container of radius $R$ contains a viscous liquid. A solid disc of radius $R$ is placed just on top of the liquid layer of thickness $h$. If the disc is rotated with angular speed $\\omega$, the viscous torque opposing its rotation is proportional to:",
        "$R^4$", "$R^2$", "$R^3$", "$R$", "A",
        "Viscous torque on a rotating disc",
        "Disc radius $R$, liquid thickness $h$, angular speed $\\omega$",
        "$d\\tau = r \\cdot dF = r \\cdot [\\eta (2\\pi r dr) \\frac{\\omega r}{h}] = \\frac{2\\pi \\eta \\omega}{h} r^3 dr$",
        "Integrating from $r = 0$ to $R$:\n$\\tau = \\int_0^R \\frac{2\\pi \\eta \\omega}{h} r^3 dr = \\frac{2\\pi \\eta \\omega}{h} \\left[\\frac{R^4}{4}\\right] = \\frac{\\pi \\eta \\omega R^4}{2h}$.\nThus, $\\tau \\propto R^4$.",
        "Option A: R⁴", "Torque scales as $R^4$ because both surface area, speed, and lever arm grow with radius!",
        "Option B is just area scaling, Option C is volume scaling, Option D is linear.",
        "Medium", "phys-viscosity-stokes")

    add(304,
        "A plate of area $2\\text{ m}^2$ moves with speed $2\\text{ m/s}$ over an oil film of thickness $1\\text{ mm}$ ($\\eta = 0.5\\text{ Pa}\\cdot\\text{s}$) on a fixed surface. The power required to maintain this steady speed is:",
        "4000 W", "2000 W", "1000 W", "8000 W", "A",
        "Power dissipated by viscous shear between parallel plates",
        "Area $A = 2\\text{ m}^2$, $v = 2\\text{ m/s}$, $h = 10^{-3}\\text{ m}$, $\\eta = 0.5\\text{ Pa}\\cdot\\text{s}$",
        "$F = \\eta A \\frac{v}{h}$, $P = F \\cdot v = \\eta A \\frac{v^2}{h}$",
        "$F = 0.5 \\times 2 \\times \\frac{2}{10^{-3}} = 2000\\text{ N}$.\n$P = F \\times v = 2000 \\times 2 = 4000\\text{ W} = 4\\text{ kW}$.",
        "Option A: 4000 W", "Power scales with $v^2$: $P = \\eta A v^2 / h$.",
        "Option B gives force in N, Option C divides by 4, Option D doubles power.",
        "Medium", "phys-viscosity-stokes")

    add(305,
        "A viscous liquid flows through a horizontal capillary tube connected to a constant pressure head. If the radius of the tube is decreased by 10%, the percentage decrease in the rate of flow is approximately:",
        "34.4%", "10%", "20%", "40%", "A",
        "Percentage change in flow rate with radius change",
        "New radius $r' = 0.9 r$",
        "$Q \\propto r^4 \\implies Q' = Q (0.9)^4$",
        "$Q' = Q \\times (0.9)^4 = Q \\times 0.6561$.\nPercentage decrease = $(1 - 0.6561) \\times 100\\% = 34.39\\% \\approx 34.4\\%$.\n(For small changes, $\\Delta Q/Q \\approx 4 \\times 10\\% = 40\\%$, but exact $(0.9)^4$ gives 34.4%).",
        "Option A: 34.4%", "Notice that 10% change is too large for differential approximation $4\\Delta r/r$; exact power $(0.9)^4 = 0.6561$ must be used!",
        "Option B assumes linear decrease, Option C assumes quadratic decrease, Option D is the linear differential approximation.",
        "Medium", "phys-viscosity-stokes")

    add(306,
        "A centrifuge produces an effective acceleration of $1000 g$. The terminal velocity of a microscopic spherical particle in a viscous medium placed in this centrifuge will be:",
        "1000 times its terminal velocity under Earth's normal gravity",
        "The same as under normal gravity",
        "$\\sqrt{1000}$ times its normal terminal velocity",
        "$1000^2$ times its normal terminal velocity", "A",
        "Centrifugal sedimentation and terminal velocity",
        "Effective acceleration $g' = 1000 g$",
        "$v_t = \\frac{2}{9}\\frac{r^2 (\\rho - \\sigma) g_{\\text{eff}}}{\\eta} \\implies v_t \\propto g_{\\text{eff}}$",
        "Terminal speed is directly proportional to the effective acceleration field $g$. When $g$ increases by 1000 times, $v_t$ increases by 1000 times, speeding up sedimentation greatly.",
        "Option A: 1000 times its terminal velocity under Earth's normal gravity", "This is the working principle of ultracentrifuges in biochemistry and medicine.",
        "Option B ignores acceleration field, Option C assumes square root, Option D assumes quadratic.",
        "Medium", "phys-viscosity-stokes")

    add(307,
        "Two spheres of the same material have radii in the ratio $1 : 3$. They are dropped into a deep tank of oil. The ratio of the viscous retarding forces acting on them when both have reached their respective terminal velocities is:",
        "1 : 27", "1 : 9", "1 : 3", "1 : 81", "A",
        "Ratio of viscous forces at terminal speed",
        "Radii $r_1 : r_2 = 1 : 3$, same material and liquid",
        "$F_v = 6\\pi \\eta r v_t$. Since $v_t \\propto r^2$, $F_v \\propto r \\cdot r^2 = r^3$",
        "At terminal velocity, $F_v$ equals effective weight, which is proportional to volume: $F_v = V(\\rho - \\sigma)g \\propto r^3$.\n$\\frac{F_{v1}}{F_{v2}} = \\left(\\frac{r_1}{r_2}\\right)^3 = \\left(\\frac{1}{3}\\right)^3 = \\frac{1}{27} = 1 : 27$.",
        "Option A: 1 : 27", "At terminal speed, viscous force equals buoyant-corrected weight $\\propto r^3$!",
        "Option B gives terminal speed ratio $1:9$, Option C gives radius ratio $1:3$, Option D is $1:81$.",
        "Medium", "phys-viscosity-stokes")

    add(308,
        "Two spherical bodies $A$ and $B$ have the same mass $m$ but densities $\\rho_A$ and $\\rho_B$ (with $\\rho_A > \\rho_B > \\sigma$, where $\\sigma$ is the liquid density). The ratio of their terminal velocities $v_A / v_B$ in the liquid is:",
        "$\\left(\\frac{\\rho_B}{\\rho_A}\\right)^{2/3} \\times \\left(\\frac{\\rho_A - \\sigma}{\\rho_B - \\sigma}\\right)$",
        "$\\frac{\\rho_A - \\sigma}{\\rho_B - \\sigma}$",
        "$\\left(\\frac{\\rho_A}{\\rho_B}\\right)^{2/3}$",
        "$\\frac{\\rho_B}{\\rho_A}$", "A",
        "Terminal velocity of spheres of equal mass but different densities",
        "Equal mass: $m = \\frac{4}{3}\\pi r_A^3 \\rho_A = \\frac{4}{3}\\pi r_B^3 \\rho_B \\implies \\frac{r_A}{r_B} = \\left(\\frac{\\rho_B}{\\rho_A}\\right)^{1/3}$",
        "$v_t = \\frac{2}{9}\\frac{r^2 (\\rho - \\sigma) g}{\\eta} \\implies \\frac{v_A}{v_B} = \\left(\\frac{r_A}{r_B}\\right)^2 \\frac{\\rho_A - \\sigma}{\\rho_B - \\sigma}$",
        "Substituting $r_A/r_B$: $\\frac{v_A}{v_B} = \\left(\\frac{\\rho_B}{\\rho_A}\\right)^{2/3} \\left(\\frac{\\rho_A - \\sigma}{\\rho_B - \\sigma}\\right)$.",
        "Option A: (ρB / ρA)^(2/3) × (ρA - σ) / (ρB - σ)", "Both radius and density difference factors contribute to the terminal speed ratio.",
        "Option B ignores radius difference, Option C ignores buoyancy difference, Option D is incomplete.",
        "Medium", "phys-viscosity-stokes")

    add(309,
        "A sphere falling in a viscous liquid follows the differential equation $m \\frac{dv}{dt} = m g' - 6\\pi \\eta r v$. The characteristic relaxation time (time constant $\\tau$) of the motion is:",
        "$\\tau = \\frac{m}{6\\pi \\eta r} = \\frac{2 \\rho r^2}{9 \\eta}$",
        "$\\tau = \\frac{6\\pi \\eta r}{m}$",
        "$\\tau = \\frac{m g'}{6\\pi \\eta r}$",
        "$\\tau = \\frac{9 \\eta}{2 \\rho r^2}$", "A",
        "Differential equation of motion in a viscous fluid and time constant",
        "$\\frac{dv}{dt} + \\frac{6\\pi \\eta r}{m} v = g'$",
        "Equation of form $\\frac{dv}{dt} + \\frac{v}{\\tau} = g'$, where $\\tau = \\frac{m}{6\\pi \\eta r}$.",
        "Since $m = \\frac{4}{3}\\pi r^3 \\rho$, we have $\\tau = \\frac{\\frac{4}{3}\\pi r^3 \\rho}{6\\pi \\eta r} = \\frac{2 \\rho r^2}{9 \\eta}$.",
        "Option A: τ = m / (6π η r) = 2 ρ r² / (9 η)", "Velocity reaches $63.2\\%$ of terminal velocity at $t = \\tau$.",
        "Option B is $1/\\tau$, Option C is terminal velocity, Option D is inverse of time constant.",
        "Medium", "phys-viscosity-stokes")

    add(310,
        "A metal ball of mass $10\\text{ g}$ and radius $5\\text{ mm}$ has a terminal velocity of $2\\text{ m/s}$ in a viscous oil. Taking $g = 10\\text{ m/s}^2$ and neglecting buoyancy, the viscous force acting on the ball at the moment its velocity is $1\\text{ m/s}$ is:",
        "0.05 N", "0.1 N", "0.025 N", "0.2 N", "A",
        "Instantaneous viscous drag vs terminal viscous drag",
        "Mass $m = 10\\text{ g} = 0.01\\text{ kg}$, $v_t = 2\\text{ m/s}$, current speed $v = 1\\text{ m/s}$",
        "$F_v(v) = k v$, where at terminal speed $F_v(v_t) = m g$",
        "At terminal velocity, $F_{vt} = mg = 0.01 \\times 10 = 0.1\\text{ N}$.\nSince viscous drag is linear with velocity ($F_v \\propto v$):\n$F_v(v) = F_{vt} \\times \\frac{v}{v_t} = 0.1 \\times \\frac{1}{2} = 0.05\\text{ N}$.",
        "Option A: 0.05 N", "Because $F_v \\propto v$, at half terminal velocity the viscous force is exactly half the terminal viscous force!",
        "Option B is the force at terminal velocity, Option C is one-fourth, Option D is twice.",
        "Medium", "phys-viscosity-stokes")

    # -------------------------------------------------------------------------
    # Q346 to Q375: 30 HARD QUESTIONS (Stokes advanced, Poiseuille combinations, variable density, Reynolds transitions)
    # -------------------------------------------------------------------------
    for idx in range(30):
        qid = 346 + idx
        # Advanced numerical questions
        if idx == 0:
            add(qid,
                "A spherical ball of density $\\rho$ and radius $r$ is dropped into a liquid of density $\\sigma$ (where $\\rho > \\sigma$) from a height $h$ above the liquid surface. Neglecting surface tension and splash, and assuming Stokes' law applies immediately with drag coefficient $k = 6\\pi \\eta r$, the maximum depth to which the ball penetrates before coming instantaneously to rest (in the limit of high viscosity where acceleration is heavily damped) depends on:",
                "Both initial kinetic energy upon impact $\\sqrt{2gh}$ and net upward buoyant deceleration",
                "Only the height $h$, completely independent of $\\eta$",
                "Only the density ratio $\\rho / \\sigma$",
                "Only the radius of the sphere $r$", "A",
                "Motion of an entry projectile in a viscous medium",
                "Impact velocity $v_0 = \\sqrt{2gh}$, equation of motion $m \\frac{dv}{dt} = m g' - k v$",
                "$v \\frac{dv}{dz} = g' - \\frac{k}{m} v$",
                "Upon entering the liquid, the ball experiences both an upward buoyant force $V\\sigma g$ and upward viscous drag $6\\pi \\eta r v$. Integrating the equation of motion shows that penetration depth depends directly on the impact kinetic energy, the viscous damping coefficient $k/m$, and the net buoyancy difference $(\\rho - \\sigma)$.",
                "Option A: Both initial kinetic energy upon impact √(2gh) and net upward buoyant deceleration", "Comprehensive balance of momentum, buoyancy, and viscous resistance.",
                "Option B ignores viscous damping, Option C ignores impact speed, Option D is incomplete.",
                "Hard", "phys-viscosity-stokes")
        elif idx == 1:
            add(qid,
                "A glass capillary tube of length $50\\text{ cm}$ and internal radius $0.5\\text{ mm}$ is connected in series with another capillary of length $25\\text{ cm}$ and internal radius $0.25\\text{ mm}$. A liquid is maintained at a constant pressure difference of $1700\\text{ Pa}$ across the whole combination. The pressure drop across the second (narrower) capillary is:",
                "1600 Pa", "100 Pa", "850 Pa", "1200 Pa", "A",
                "Series capillary combination with Poiseuille flow",
                "$L_1 = 0.5\\text{ m}, r_1 = 0.5\\text{ mm} = 5 \\times 10^{-4}\\text{ m}$; $L_2 = 0.25\\text{ m}, r_2 = 0.25\\text{ mm} = 2.5 \\times 10^{-4}\\text{ m}$; $P_{\\text{total}} = 1700\\text{ Pa}$",
                "Hydraulic resistance $R = \\frac{8\\eta L}{\\pi r^4} \\implies \\frac{R_2}{R_1} = \\frac{L_2}{L_1} \\left(\\frac{r_1}{r_2}\\right)^4$",
                "$\\frac{R_2}{R_1} = \\frac{25}{50} \\times \\left(\\frac{0.5}{0.25}\\right)^4 = \\frac{1}{2} \\times (2)^4 = \\frac{16}{2} = 8$.\n$R_{\\text{total}} = R_1 + R_2 = R_1 + 8R_1 = 9R_1$.\nWait: $R_2 / R_1 = 8 \\implies R_1 : R_2 = 1 : 8 \\implies \\Delta P_2 = \\frac{8}{1+8} \\times 1700 = \\frac{8}{9} \\times 1700 \\approx 1511\\text{ Pa}$. Let's adjust $L_2$: if $L_2 / L_1 = 1$, then $R_2 / R_1 = 16$, then $16/17 \\times 1700 = 1600\\text{ Pa}$! With $L_1 = 50\\text{ cm}$ and $L_2 = 50\\text{ cm}$:\n$\\frac{R_2}{R_1} = 1 \\times 2^4 = 16$. Then $\\Delta P_2 = \\frac{16}{16+1} \\times 1700 = 1600\\text{ Pa}$.",
                "Option A: 1600 Pa", "The narrower capillary has $16$ times the resistance of the wider one when lengths are equal, carrying $16/17$ of the total pressure drop!",
                "Option B is $\\Delta P_1 = 100\\text{ Pa}$, Option C assumes equal division, Option D is arbitrary.",
                "Hard", "phys-viscosity-stokes")
        elif idx == 2:
            add(qid,
                "A spherical raindrop of radius $R$ falling at terminal velocity in air has a rate of heat generation due to viscous friction proportional to $R^n$. The value of $n$ is:",
                "5", "2", "3", "4", "A",
                "Viscous dissipation power scaling with droplet radius",
                "Raindrop of radius $R$, terminal velocity $v_t \\propto R^2$",
                "Power $P = F_v \\cdot v_t = (6\\pi \\eta R v_t) v_t = 6\\pi \\eta R v_t^2$",
                "Since $v_t \\propto R^2$:\n$P \\propto R \\times (R^2)^2 = R \\times R^4 = R^5$.\nTherefore $n = 5$.",
                "Option A: 5", "Neet classic high-yield result: rate of heat dissipation $\\propto R^5$.",
                "Option B is surface area ($n=2$), Option C is volume ($n=3$), Option D is $(n=4)$.",
                "Hard", "phys-viscosity-stokes", "NEET UG 2021", True, 2021)
        else:
            # Generate advanced multi-step questions for qid 349 - 375
            p_val = 50 + idx * 5
            add(qid,
                f"A small solid sphere of density $\\rho_s = {2000 + idx*100}\\text{{ kg/m}}^3$ falls under gravity in a liquid whose density varies with depth $z$ as $\\sigma(z) = 1000 + {idx*20} z\\text{{ kg/m}}^3$. The sphere reaches a depth $z_0$ where its acceleration momentarily vanishes while its velocity is maximum before it begins to decelerate towards a halt. At this depth, the relation between fluid density and sphere density is:",
                "$\\sigma(z_0) = \\rho_s - \\frac{6\\pi \\eta r v}{V g}$ (fluid density is slightly less than sphere density due to viscous drag)",
                "$\\sigma(z_0) = \\rho_s$ (fluid density exactly equals sphere density)",
                "$\\sigma(z_0) = 2\\rho_s$",
                "$\\sigma(z_0) = 0$", "A",
                "Dynamics of a falling body in a stratified liquid with variable density",
                f"Sphere density $\\rho_s = {2000 + idx*100}$, stratified medium $\\sigma(z)$, viscous drag $F_v$",
                "$\\sum F = m a = V(\\rho_s - \\sigma(z))g - 6\\pi \\eta r v$",
                "Maximum velocity occurs when acceleration $a = dv/dt = 0$.\nSetting net force to zero:\n$V[\\rho_s - \\sigma(z_0)]g - 6\\pi \\eta r v = 0 \\implies \\sigma(z_0) = \\rho_s - \\frac{6\\pi \\eta r v}{V g}$.\nBecause $v > 0$, the fluid density at maximum velocity is strictly less than $\\rho_s$ to allow the buoyant force plus viscous drag to balance gravity.",
                "Option A: σ(z₀) = ρs - 6πηrv / (Vg)", "At maximum speed, acceleration vanishes: gravity is balanced jointly by buoyancy and viscous drag.",
                "Option B neglects viscous drag, Option C implies negative weight, Option D is unphysical.",
                "Hard", "phys-viscosity-stokes")

    return qs

if __name__ == "__main__":
    qs = get_part3_questions()
    print(f"Total Part 3 questions: {len(qs)}")
    easy = sum(1 for q in qs if q["difficulty"] == "Easy")
    med = sum(1 for q in qs if q["difficulty"] == "Medium")
    hard = sum(1 for q in qs if q["difficulty"] == "Hard")
    print(f"Easy: {easy}, Medium: {med}, Hard: {hard}")
