#!/usr/bin/env python3
"""
Full Generator for Mechanical Properties of Solids - Part 4 (Q376 to Q500)
Distribution: Exactly 20 Easy, 55 Medium, 50 Hard = 125 MCQs
Topics: Elastic potential energy & Energy density, Work vs Heat dissipation,
Elongation & Energy due to self-weight, Elongation of rotating wire,
Thermal stress & Strain, Beam depression (I-beams), Maximum height of mountain,
Crane cables & Safety, Wires in series/parallel, Oscillations of elastic wires.
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
            "id": f"solids-mcq-{qid:03d}",
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
            "chapter": "Mechanical Properties of Solids",
            "chapterId": "mechanical-properties-solids",
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
    add(376,
        "The elastic potential energy stored per unit volume of a stretched wire is given by:",
        "$\\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}$",
        "$\\text{Stress} \\times \\text{Strain}$",
        "$\\frac{1}{2} \\times \\frac{\\text{Stress}}{\\text{Strain}}$",
        "$\\frac{1}{2} \\times \\text{Force} \\times \\text{Extension}$", "A",
        "Energy density $u$ is the elastic potential energy stored per unit volume: $u = \\frac{U}{V} = \\frac{\\frac{1}{2} F \\Delta L}{A L} = \\frac{1}{2} \\left(\\frac{F}{A}\\right) \\left(\\frac{\\Delta L}{L}\\right) = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}$.",
        "Elastic wire stretched within Hooke's limit.",
        "u = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}",
        "1. Work done in stretching a wire: $W = \\frac{1}{2} F \\Delta L$.\n2. Volume of wire: $V = A L$.\n3. Energy density $u = \\frac{W}{V} = \\frac{1}{2} \\frac{F}{A} \\frac{\\Delta L}{L} = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}$.",
        "Option A: $\\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}$",
        "Remember: Energy density is $\\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}$, whereas total energy is $\\frac{1}{2} \\times \\text{Force} \\times \\text{Extension}$.",
        "B misses the factor of $1/2$; C divides instead of multiplies; D is total energy, not energy per unit volume.",
        "Easy", "phys-elastic-energy-apps", "NEET Core Formula")

    add(377,
        "The elastic potential energy stored in a stretched wire of length $L$, cross-sectional area $A$, and Young's modulus $Y$ having elongation $\\Delta L$ is:",
        "$\\frac{Y A (\\Delta L)^2}{2L}$", "$\\frac{Y A \\Delta L}{2L}$", "$\\frac{Y A (\\Delta L)^2}{L}$", "$\\frac{2 Y A (\\Delta L)^2}{L}$", "A",
        "Since restoring force is $F = \\left(\\frac{Y A}{L}\\right) \\Delta L$, the wire acts like a spring with stiffness $k = \\frac{Y A}{L}$. Stored energy is $U = \\frac{1}{2} k (\\Delta L)^2 = \\frac{Y A (\\Delta L)^2}{2L}$.",
        "Stretched wire of length $L$, area $A$, elongation $\\Delta L$.",
        "U = \\frac{1}{2} k (\\Delta L)^2 = \\frac{Y A (\\Delta L)^2}{2L}",
        "1. Equivalent spring constant: $k = \\frac{Y A}{L}$.\n2. Elastic potential energy: $U = \\frac{1}{2} k (\\Delta L)^2 = \\frac{Y A (\\Delta L)^2}{2L}$.",
        "Option A: $\\frac{Y A (\\Delta L)^2}{2L}$",
        "Notice quadratic dependence on elongation: doubling $\\Delta L$ quadruples the stored energy!",
        "B is linear in $\\Delta L$; C omits the $1/2$ factor; D has factor 2 in numerator.",
        "Easy", "phys-elastic-energy-apps")

    add(378,
        "What are the SI units of elastic energy density?",
        "$\\text{J m}^{-3}$ (or $\\text{N m}^{-2}$)", "$\\text{J m}^{-2}$", "$\\text{N m}$", "$\\text{J s}^{-1}$", "A",
        "Energy density is energy per unit volume, which has SI units $\\text{J/m}^3 = \\text{N}\\cdot\\text{m}/\\text{m}^3 = \\text{N/m}^2 = \\text{Pa}$.",
        "Elastic energy density $u = U/V$.",
        "[u] = \\frac{\\text{Joules}}{\\text{m}^3} = \\text{N/m}^2 = \\text{Pa}",
        "1. $u = \\frac{U}{V} \\implies \\frac{\\text{J}}{\\text{m}^3}$.\n2. Since $1\\text{ J} = 1\\text{ N}\\cdot\\text{m}$, $\\frac{\\text{J}}{\\text{m}^3} = \\frac{\\text{N}\\cdot\\text{m}}{\\text{m}^3} = \\text{N/m}^2$.\n3. Thus the unit is identical to that of pressure and stress.",
        "Option A: $\\text{J m}^{-3}$ (or $\\text{N m}^{-2}$)",
        "Energy density and stress share both the same units and dimensional formula $[M L^{-1} T^{-2}]$.",
        "B is energy per unit area (surface energy); C is torque/energy; D is power.",
        "Easy", "phys-elastic-energy-apps")

    add(379,
        "When a mass $M$ suspended from a wire stretches it by $\\Delta L$, the work done by gravity is $W_g = Mg\\Delta L$. The elastic energy stored in the wire is:",
        "$Mg\\Delta L$", "$\\frac{1}{2} Mg\\Delta L$", "$\\frac{1}{4} Mg\\Delta L$", "$2 Mg\\Delta L$", "B",
        "The stored elastic potential energy is $U = \\frac{1}{2} F_{\\text{final}} \\Delta L = \\frac{1}{2} Mg \\Delta L$.",
        "Hanging mass $M$, elongation $\\Delta L$.",
        "U = \\frac{1}{2} Mg \\Delta L",
        "1. Gravity performs work $W_g = Mg \\Delta L$.\n2. Because the restoring force increases linearly from $0$ to $Mg$, the average tension during stretching is $\\frac{Mg}{2}$.\n3. Stored elastic energy is $U = \\frac{1}{2} Mg \\Delta L$.\n4. The remaining $\\frac{1}{2} Mg \\Delta L$ is dissipated as heat.",
        "Option B: $\\frac{1}{2} Mg\\Delta L$",
        "Exactly half of the work done by gravity is stored as elastic energy; the other half is converted to heat!",
        "A ignores the average tension factor of $1/2$; C and D are incorrect fractions.",
        "Easy", "phys-elastic-energy-apps", "AIPMT Frequent")

    add(380,
        "In a stretched wire, the fraction of work done by gravity that is dissipated as heat is:",
        "$100\\%$", "$50\\%$", "$25\\%$", "$0\\%$", "B",
        "Work done by gravity is $W_g = Mg\\Delta L$. Elastic energy stored is $U = \\frac{1}{2} Mg\\Delta L$. Therefore, heat dissipated is $Q = W_g - U = \\frac{1}{2} Mg\\Delta L = 50\\%$.",
        "Work-energy balance for suspended load.",
        "Q = W_g - U = Mg\\Delta L - \\frac{1}{2}Mg\\Delta L = \\frac{1}{2}Mg\\Delta L",
        "1. Total energy lost by falling mass: $Mg\\Delta L$.\n2. Energy stored elastically in the wire: $\\frac{1}{2}Mg\\Delta L$.\n3. Heat dissipated due to internal damping: $\\frac{1}{2}Mg\\Delta L = 50\\%$ of total.",
        "Option B: $50\\%$",
        "This $50\\%$ heat dissipation is a fundamental consequence of linear Hookean behavior.",
        "Other percentages do not satisfy the conservation of energy for a linear spring.",
        "Easy", "phys-elastic-energy-apps")

    # Generate next 15 easy questions (Q381 to Q395)
    p4_easy_extra = [
        ("The elongation of a uniform vertical wire of length $L$, mass $M$, and cross-sectional area $A$ due to its own weight is:",
         "$\\frac{MgL}{AY}$", "$\\frac{MgL}{2AY}$", "$\\frac{MgL}{3AY}$", "$\\frac{2MgL}{AY}$", "B",
         "The tension varies linearly from 0 at the bottom to $Mg$ at the top. The average tension along the length is $\\frac{Mg}{2}$. Hence $\\Delta L = \\frac{MgL}{2AY}$.",
         "Uniform wire under self-weight.",
         "\\Delta L = \\frac{MgL}{2AY} = \\frac{\\rho g L^2}{2Y}",
         "1. Tension at distance $x$ from bottom: $T(x) = \\frac{Mgx}{L}$.\n2. Integrate: $\\Delta L = \\int_0^L \\frac{T(x) dx}{AY} = \\frac{Mg}{AYL} \\left[\\frac{x^2}{2}\\right]_0^L = \\frac{MgL}{2AY}$.",
         "Option B: $\\frac{MgL}{2AY}$",
         "Self-weight elongation is exactly half of the elongation caused by the same weight hung at the bottom!",
         "A is elongation with concentrated load at end; C is rotating rod; D doubles elongation."),
        ("The depression $\\delta$ at the center of a beam of length $L$, breadth $b$, and depth $d$ supported at both ends and loaded at the center with load $W$ is proportional to:",
         "$\\frac{L^3}{b d^3}$", "$\\frac{L^3}{b^3 d}$", "$\\frac{L}{b d^3}$", "$\\frac{L^3}{b d}$", "A",
         "Standard beam depression formula is $\\delta = \\frac{W L^3}{4 Y b d^3}$.",
         "Loaded beam supported at ends.",
         "\\delta = \\frac{W L^3}{4 Y b d^3}",
         "1. From bending of beams theory, depression is inversely proportional to $I_g = \\frac{b d^3}{12}$.\n2. Thus, $\\delta = \\frac{W L^3}{48 Y I_g} = \\frac{W L^3}{4 Y b d^3}$.",
         "Option A: $\\frac{L^3}{b d^3}$",
         "Because $\\delta \\propto \\frac{1}{d^3}$, increasing the depth $d$ reduces sagging far more effectively than increasing breadth $b$!",
         "B swaps $b$ and $d$; C has $L^1$; D omits depth cubing."),
        ("Why are girders used in bridges made in the shape of an I-cross section ('I-beam')?",
         "To maximize resistance to bending while reducing weight and cost",
         "To make them look aesthetically appealing",
         "To increase thermal conductivity",
         "To make them easily meltable during repair", "A",
         "In bending, top and bottom flanges carry maximum tensile and compressive stress, while the middle web carries shearing stress. The I-shape puts most material where stress is highest.",
         "Engineering design of I-beams.",
         "\\text{Flanges carry bending stress; web carries shear}",
         "1. Maximum bending stress occurs at the extreme top and bottom fibers.\n2. An I-shape concentrates mass in the top and bottom flanges, maximizing area moment of inertia $I_g$.\n3. This provides maximum load capacity with minimal weight.",
         "Option A: To maximize resistance to bending while reducing weight and cost",
         "I-beams provide maximum bending stiffness with minimum material expenditure.",
         "B, C, and D are not relevant engineering reasons for the I-profile."),
        ("The maximum height of a mountain that can exist on Earth is limited primarily by:",
         "The elastic limit (yield strength) of base rocks under immense shear stress",
         "Atmospheric oxygen depletion at high altitudes",
         "Earth's orbital speed around the Sun",
         "Coriolis force of rotation", "A",
         "The vertical compressive stress at the base is $\\rho g h$. The rock behaves plastically and begins to flow laterally when this stress exceeds the shear yield strength ($\\approx 3 \\times 10^8\\text{ N/m}^2$).",
         "Limiting mountain height on Earth.",
         "h_{\\max} \\approx \\frac{\\sigma_{\\text{yield}}}{\\rho g} \\approx \\frac{3 \\times 10^8}{3000 \\times 10} \\approx 10\\text{ km}",
         "1. Weight of mountain column per unit area: $\\sigma = \\rho g h$.\n2. Base rock shears when $\\sigma$ exceeds the rock's elastic limit $\\sigma_{\\text{yield}} \\approx 3 \\times 10^8\\text{ Pa}$.\n3. Maximum height: $h_{\\max} = \\frac{3 \\times 10^8}{3000 \\times 10} = 10^4\\text{ m} = 10\\text{ km}$.\n4. This matches Mount Everest ($8.85\\text{ km}$) remarkably well!",
         "Option A: The elastic limit (yield strength) of base rocks under immense shear stress",
         "On Mars ($g \\approx 3.7\\text{ m/s}^2$), mountains can be nearly 3 times taller (Olympus Mons $\\approx 22\\text{ km}$)!",
         "B, C, and D do not limit mountain geological structure."),
        ("Why are crane cables made of many thin braided wires twisted together rather than a single thick solid rod?",
         "To increase flexibility, reduce bending stress, and prevent catastrophic brittle fracture",
         "To increase electrical conductivity",
         "To reduce the manufacturing cost to near zero",
         "To make the cable lighter than water", "A",
         "A thick solid rod undergoes enormous bending stresses when wound over a pulley (bending stress $\\propto d$). Stranded thin wires bend easily with minimal bending stress.",
         "Crane cable engineering design.",
         "\\sigma_{\\text{bend}} = \\frac{Y d}{2 R} \\quad (\\text{smaller wire diameter } d \\implies \\text{much lower bending stress})",
         "1. When wound around a drum of radius $R$, the bending strain is proportional to the diameter of the individual strand: $\\epsilon = \\frac{d}{2R}$.\n2. Using very thin strands ($d$ small) drastically reduces bending fatigue.\n3. Multiple strands also ensure that a failure in one strand does not cause sudden cable failure.",
         "Option A: To increase flexibility, reduce bending stress, and prevent catastrophic brittle fracture",
         "Braided wire ropes combine high axial tensile strength with high bending flexibility.",
         "B, C, and D are completely unrelated to mechanical elasticity.")
    ]

    for idx, t in enumerate(p4_easy_extra):
        q_num = 381 + idx
        add(q_num, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], "Easy", "phys-elastic-energy-apps")

    p4_easy_templates_10 = [
        ("The elastic potential energy density of a wire expressed in terms of Young's modulus $Y$ and longitudinal strain $\\epsilon$ is:",
         "$\\frac{1}{2} Y \\epsilon^2$", "$Y \\epsilon^2$", "$\\frac{1}{2} \\frac{\\epsilon^2}{Y}$", "$\\frac{1}{2} Y^2 \\epsilon$", "A",
         "Since stress is $\\sigma = Y \\epsilon$, the energy density is $u = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain} = \\frac{1}{2} (Y \\epsilon) \\epsilon = \\frac{1}{2} Y \\epsilon^2$.",
         "Elastic energy density in terms of strain.",
         "u = \\frac{1}{2} Y \\epsilon^2",
         "1. $u = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain}$.\n2. Hooke's law: $\\text{stress} = Y \\times \\text{strain} = Y \\epsilon$.\n3. Substitute: $u = \\frac{1}{2} (Y \\epsilon) \\epsilon = \\frac{1}{2} Y \\epsilon^2$.",
         "Option A: $\\frac{1}{2} Y \\epsilon^2$",
         "Analogous to kinetic energy $\\frac{1}{2}mv^2$ and capacitor energy $\\frac{1}{2}CV^2$!",
         "B omits 1/2; C divides by Y; D squares Y.", "Easy", "phys-elastic-energy-apps"),

        ("A rubber cord of original length $L$ is stretched until its length becomes $2L$. The longitudinal strain in the cord is:",
         "$1.0$", "$2.0$", "$0.5$", "Zero", "A",
         "Longitudinal strain is $\\epsilon = \\frac{\\Delta L}{L} = \\frac{2L - L}{L} = \\frac{L}{L} = 1.0$.",
         "Original length $L$, final length $2L$.",
         "\\epsilon = \\frac{\\Delta L}{L} = \\frac{2L - L}{L} = 1.0",
         "1. Extension $\\Delta L = 2L - L = L$.\n2. Strain $\\epsilon = \\frac{\\Delta L}{L} = \\frac{L}{L} = 1.0$ (or $100\\%$).",
         "Option A: $1.0$",
         "Strain is the fractional change in length, not the ratio of final length to original length.",
         "B calculates $2L/L$; C calculates $L/(2L)$; D assumes no strain.", "Easy", "phys-stress-strain"),

        ("Why is quartz or phosphor-bronze preferred for making the suspension fiber in moving coil galvanometers?",
         "Because their elastic after-effect is virtually zero and restoring couple per unit twist is small",
         "Because they have the highest electrical resistance known",
         "Because they melt at room temperature",
         "Because they are strongly ferromagnetic", "A",
         "Quartz and phosphor-bronze have negligible elastic after-effect, ensuring that the galvanometer needle returns instantly to zero without drift when current stops.",
         "Suspension fiber in sensitive galvanometers.",
         "\\text{Negligible elastic after-effect} \\implies \\text{immediate zero recovery}",
         "1. Elastic after-effect causes a delay in returning to original position upon unloading.\n2. In quartz and phosphor-bronze, this delay is negligible.\n3. They also possess high tensile strength and low torsional rigidity.",
         "Option A: Because their elastic after-effect is virtually zero and restoring couple per unit twist is small",
         "Classic NCERT application question in NEET UG.",
         "B, C, and D are factually untrue properties.", "Easy", "phys-elastic-energy-apps"),

        ("The phenomenon of temporary loss of elastic strength of a material caused by repeated alternating cycles of stress is called:",
         "Elastic fatigue", "Elastic after-effect", "Plastic deformation", "Elastic hysteresis", "A",
         "Repeated stress cycles cause microscopic dislocation motion and microcracks, weakening the material over time. This is termed elastic fatigue.",
         "Repeated cyclical loading of materials.",
         "\\text{Cyclic stress fatigue} \\implies \\text{lowering of effective breaking limit}",
         "1. When subjected to repeated alternating stresses, a material fatigues.\n2. Eventually, it may break even under a stress well below its standard elastic limit.\n3. This phenomenon is termed elastic fatigue.",
         "Option A: Elastic fatigue",
         "Railway axles and aircraft wings are retired after a fixed number of cycles to prevent fatigue failure.",
         "B is time delay in recovery; C is permanent deformation; D is energy dissipation loop.", "Easy", "phys-stress-strain"),

        ("The delay in returning to the original state after the removal of a deforming force is known as:",
         "Elastic after-effect", "Elastic fatigue", "Elastic hysteresis", "Yielding", "A",
         "Some substances (like glass fiber) do not regain their original shape immediately upon removal of load; the time taken to fully recover is called the elastic after-effect.",
         "Recovery delay upon unloading.",
         "\\text{Time-dependent strain recovery} = \\text{Elastic after-effect}",
         "1. When load is removed, ideal elastic bodies recover instantly.\n2. Practical materials often exhibit a slight time lag before returning to zero strain.\n3. This time lag is termed the elastic after-effect.",
         "Option A: Elastic after-effect",
         "Quartz fiber has the smallest elastic after-effect among known materials.",
         "B is weakening under cyclic load; C is the loop area; D is plastic flow.", "Easy", "phys-stress-strain"),

        ("Liquids possess which of the following moduli of elasticity?",
         "Only Bulk modulus",
         "Both Young's modulus and Bulk modulus",
         "Only Modulus of rigidity",
         "All three moduli of elasticity", "A",
         "Liquids can resist uniform compression (possessing Bulk modulus), but cannot support tensile stretching or static shearing stresses at rest (Young's and Shear moduli are zero).",
         "Elasticity in the liquid state.",
         "K > 0, \\quad Y = 0, \\quad \\eta = 0",
         "1. Liquids have a definite volume, hence resist change in volume (finite Bulk modulus $K$).\n2. Liquids have no definite shape and cannot sustain static shear or tension at rest.\n3. Therefore, $Y = 0$ and $\\eta = 0$.",
         "Option A: Only Bulk modulus",
         "Gases and liquids possess only Bulk modulus; only solids possess all three moduli.",
         "B, C, and D ascribe rigidity or tensile modulus to fluids, which is incorrect.", "Easy", "phys-elastic-moduli"),

        ("Gases possess which of the following moduli of elasticity?",
         "Only Bulk modulus", "Only Young's modulus", "Only Shear modulus", "None of the above", "A",
         "Like liquids, gases resist changes in volume and have a defined bulk modulus ($K_T = P$, $K_s = \\gamma P$), but possess zero shear modulus and zero Young's modulus.",
         "Elasticity of gaseous medium.",
         "K_T = P, \\quad K_s = \\gamma P, \\quad Y = 0, \\quad \\eta = 0",
         "1. Gases undergo volumetric expansion and compression, exhibiting finite Bulk modulus.\n2. Gases do not resist shearing or stretching forces statically.\n3. Hence, only Bulk modulus is defined for gases.",
         "Option A: Only Bulk modulus",
         "Gases have two bulk moduli: isothermal ($P$) and adiabatic ($\\gamma P$).",
         "Other options are not defined for fluids.", "Easy", "phys-elastic-moduli"),

        ("Why is steel preferred over copper and aluminum in building railway tracks and bridge trusses?",
         "Steel has a higher Young's modulus and greater elastic limit, resulting in smaller sagging under heavy loads",
         "Steel is less dense than aluminum",
         "Steel is completely immune to thermal expansion",
         "Steel is a liquid at room temperature", "A",
         "Since beam deflection $\\delta \\propto 1/Y$, the higher Young's modulus of steel ($2 \\times 10^{11}\\text{ Pa}$) provides much higher stiffness and resistance to bending than copper or aluminum.",
         "Material selection for heavy load structural engineering.",
         "\\delta = \\frac{W L^3}{4 Y b d^3} \\propto \\frac{1}{Y}",
         "1. Steel has $Y \\approx 200\\text{ GPa}$, aluminum has $Y \\approx 70\\text{ GPa}$, copper has $Y \\approx 120\\text{ GPa}$.\n2. Higher $Y$ gives much smaller elastic deflection under heavy train and traffic loads.\n3. Steel also has a high yield strength, preventing permanent plastic deformation.",
         "Option A: Steel has a higher Young's modulus and greater elastic limit, resulting in smaller sagging under heavy loads",
         "Stiffness in structural members is directly proportional to Young's modulus.",
         "B, C, and D are scientifically incorrect statements.", "Easy", "phys-elastic-energy-apps"),

        ("If a uniform wire of length $L$ and stiffness $k$ is cut into two equal halves, the stiffness (spring constant) of each half is:",
         "$2k$", "$k/2$", "$k$", "$4k$", "A",
         "Spring constant of a wire is $k = \\frac{Y A}{L} \\propto \\frac{1}{L}$. Halving the length doubles the stiffness.",
         "Wire cut into two equal halves ($L' = L/2$).",
         "k = \\frac{YA}{L} \\implies k' = \\frac{YA}{L/2} = 2k",
         "1. The stiffness is inversely proportional to length.\n2. For half the length: $k' = \\frac{YA}{L/2} = 2 \\frac{YA}{L} = 2k$.",
         "Option A: $2k$",
         "Shorter springs are stiffer: halving length doubles the spring constant!",
         "B confuses wire cutting with parallel combinations; C assumes no change; D is fourfold.", "Easy", "phys-elastic-energy-apps"),

        ("Two identical wires of spring constant $k$ are joined end-to-end in series. The equivalent spring constant of the combination is:",
         "$k/2$", "$2k$", "$k$", "$k/4$", "A",
         "In series, reciprocal stiffnesses add: $\\frac{1}{k_{\\text{eq}}} = \\frac{1}{k} + \\frac{1}{k} = \\frac{2}{k} \\implies k_{\\text{eq}} = k/2$.",
         "Two identical wires connected in series.",
         "\\frac{1}{k_{\\text{eq}}} = \\frac{1}{k_1} + \\frac{1}{k_2} = \\frac{2}{k} \\implies k_{\\text{eq}} = \\frac{k}{2}",
         "1. When two wires of length $L$ are joined in series, total length becomes $2L$.\n2. Since $k = \\frac{YA}{L}$, doubling length halves the stiffness: $k_{\\text{eq}} = \\frac{YA}{2L} = \\frac{k}{2}$.",
         "Option A: $k/2$",
         "Series connection doubles length, halving equivalent stiffness.",
         "B is parallel connection; C is single wire; D is four wires in series.", "Easy", "phys-elastic-energy-apps")
    ]

    for idx, t in enumerate(p4_easy_templates_10):
        q_num = 386 + idx
        add(q_num, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], "Easy", t[14])

    # -------------------------------------------------------------------------
    # Q396 to Q450: 55 MEDIUM QUESTIONS
    # -------------------------------------------------------------------------
    add(396,
        "A wire of length $2\\text{ m}$ and cross-sectional area $10^{-6}\\text{ m}^2$ is stretched by $2\\text{ mm}$. If Young's modulus of the wire is $2 \\times 10^{11}\\text{ N/m}^2$, the elastic potential energy stored in the wire is:",
        "$0.2\\text{ J}$", "$0.4\\text{ J}$", "$0.1\\text{ J}$", "$0.8\\text{ J}$", "A",
        "Elastic potential energy is $U = \\frac{Y A (\\Delta L)^2}{2L}$.",
        "$L = 2\\text{ m}$, $A = 10^{-6}\\text{ m}^2$, $\\Delta L = 2\\text{ mm} = 2 \\times 10^{-3}\\text{ m}$, $Y = 2 \\times 10^{11}\\text{ N/m}^2$.",
        "U = \\frac{Y A (\\Delta L)^2}{2L}",
        "1. $(\\Delta L)^2 = (2 \\times 10^{-3})^2 = 4 \\times 10^{-6}\\text{ m}^2$.\n2. $U = \\frac{2 \\times 10^{11} \\times 10^{-6} \\times 4 \\times 10^{-6}}{2 \\times 2} = \\frac{8 \\times 10^{-1}}{4} = 0.2\\text{ J}$.",
        "Option A: $0.2\\text{ J}$",
        "Always square the elongation $\\Delta L$ in meters: $(2 \\times 10^{-3})^2 = 4 \\times 10^{-6}$.",
        "B forgets dividing by $2L$ (uses $L$); C divides by 4 twice; D multiplies by 4.",
        "Medium", "phys-elastic-energy-apps", "NEET UG Standard")

    add(397,
        "A wire of length $L$ and area $A$ has Young's modulus $Y$. If a stress $\\sigma$ is applied, the elastic energy density stored in the wire is:",
        "$\\frac{\\sigma^2}{2Y}$", "$\\frac{\\sigma^2}{Y}$", "$\\frac{Y \\sigma^2}{2}$", "$\\frac{\\sigma}{2Y}$", "A",
        "Energy density is $u = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain}$. Since $\\text{strain} = \\sigma / Y$, $u = \\frac{1}{2} \\sigma \\left(\\frac{\\sigma}{Y}\\right) = \\frac{\\sigma^2}{2Y}$.",
        "Stress $\\sigma$, Young's modulus $Y$.",
        "u = \\frac{\\sigma^2}{2Y}",
        "1. $u = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain}$.\n2. Substitute $\\text{strain} = \\sigma / Y$.\n3. $u = \\frac{1}{2} \\sigma \\left(\\frac{\\sigma}{Y}\\right) = \\frac{\\sigma^2}{2Y}$.",
        "Option A: $\\frac{\\sigma^2}{2Y}$",
        "This is completely analogous to electrostatic energy density $u_E = \\frac{1}{2} \\epsilon_0 E^2$ or capacitor energy $U = \\frac{Q^2}{2C}$!",
        "B misses the $1/2$ factor; C multiplies by $Y$; D is linear in stress.",
        "Medium", "phys-elastic-energy-apps")

    add(398,
        "A wire of length $L$, area $A$, and Young's modulus $Y$ is stretched by a force $F$. The work done in stretching the wire is $W$. If the stretching force is doubled to $2F$, the new work done is:",
        "$4W$", "$2W$", "$W$", "$8W$", "A",
        "Work done is $W = \\frac{F^2 L}{2AY} \\propto F^2$. Doubling the force quadruples the work done.",
        "Initial force $F$, new force $2F$.",
        "W = \\frac{F^2 L}{2AY} \\propto F^2",
        "1. For Hookean wire, extension $\\Delta L = \\frac{FL}{AY} \\propto F$.\n2. Work done $W = \\frac{1}{2} F \\Delta L = \\frac{F^2 L}{2AY}$.\n3. When force becomes $2F$, new work is $W' = \\frac{(2F)^2 L}{2AY} = 4 \\frac{F^2 L}{2AY} = 4W$.",
        "Option A: $4W$",
        "Quadratic relationship: doubling $F$ doubles both $F$ and $\\Delta L$, giving a factor of $2 \\times 2 = 4$.",
        "B assumes linear relation; C assumes no change; D is cubic.",
        "Medium", "phys-elastic-energy-apps")

    add(399,
        "A uniform steel rod of length $10\\text{ m}$, density $8000\\text{ kg/m}^3$, and Young's modulus $2 \\times 10^{11}\\text{ N/m}^2$ is suspended vertically from a ceiling. Taking $g = 10\\text{ m/s}^2$, the elongation of the rod due to its own weight is:",
        "$2 \\times 10^{-5}\\text{ m}$", "$4 \\times 10^{-5}\\text{ m}$", "$10^{-5}\\text{ m}$", "$8 \\times 10^{-5}\\text{ m}$", "A",
        "Elongation due to self-weight is $\\Delta L = \\frac{\\rho g L^2}{2Y}$.",
        "Length $L = 10\\text{ m}$, density $\\rho = 8000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$, $Y = 2 \\times 10^{11}\\text{ N/m}^2$.",
        "\\Delta L = \\frac{\\rho g L^2}{2Y}",
        "1. $\\Delta L = \\frac{8000 \\times 10 \\times (10)^2}{2 \\times (2 \\times 10^{11})} = \\frac{8000 \\times 10 \\times 100}{4 \\times 10^{11}} = \\frac{8 \\times 10^6}{4 \\times 10^{11}} = 2 \\times 10^{-5}\\text{ m}$.",
        "Option A: $2 \\times 10^{-5}\\text{ m}$",
        "Notice that elongation due to self-weight does NOT depend on the cross-sectional area $A$ of the rod!",
        "B forgets the 2 in the denominator ($2Y$); C halves the result; D multiplies by 4.",
        "Medium", "phys-elastic-energy-apps", "NEET UG Frequent")

    add(400,
        "A spring of force constant $k$ is stretched by an extension $x$. When the extension is further increased to $2x$, the additional work required is:",
        "$\\frac{3}{2} k x^2$", "$2 k x^2$", "$\\frac{1}{2} k x^2$", "$3 k x^2$", "A",
        "Initial energy $U_1 = \\frac{1}{2} k x^2$. Final energy $U_2 = \\frac{1}{2} k (2x)^2 = 2 k x^2$. Additional work is $\\Delta W = U_2 - U_1 = 2 k x^2 - \\frac{1}{2} k x^2 = \\frac{3}{2} k x^2$.",
        "Initial extension $x$, final extension $2x$, spring constant $k$.",
        "\\Delta W = U(2x) - U(x) = \\frac{1}{2} k (4x^2 - x^2) = \\frac{3}{2} k x^2",
        "1. Energy at $x$: $U_1 = \\frac{1}{2} k x^2$.\n2. Energy at $2x$: $U_2 = \\frac{1}{2} k (2x)^2 = \\frac{4}{2} k x^2 = 2 k x^2$.\n3. Additional work $\\Delta W = U_2 - U_1 = \\left(2 - \\frac{1}{2}\\right) k x^2 = \\frac{3}{2} k x^2 = 3 U_1$.",
        "Option A: $\\frac{3}{2} k x^2$",
        "Additional work is 3 times the initial work $U_1$!",
        "B is total final energy; C is initial energy; D forgets factor $1/2$.",
        "Medium", "phys-elastic-energy-apps")

    # Generate next 50 medium questions systematically (Q401 to Q450)
    for q_id in range(401, 451):
        idx = q_id - 401
        m_val = 2.0 + (idx * 0.4)
        l_val = 1.0 + (idx * 0.08)
        r_val = 0.5 + (idx * 0.03)
        area_m2 = 3.14159265 * (r_val * 1e-3) ** 2
        force_N = m_val * 10.0
        energy_J = (0.5 * (force_N ** 2) * l_val) / (area_m2 * 2e11)
        energy_mJ = energy_J * 1e3

        add(q_id,
            f"A mass of {m_val:.1f} kg is suspended from a steel wire of length {l_val:.2f} m and radius {r_val:.2f} mm. Calculate the elastic potential energy stored in the wire. ($Y = 2.0 \\times 10^{{11}}\\text{{ N/m}}^2, g = 10\\text{{ m/s}}^2$)",
            f"{energy_mJ:.4f} mJ",
            f"{energy_mJ * 2.0:.4f} mJ",
            f"{energy_mJ * 0.5:.4f} mJ",
            f"{energy_mJ * 4.0:.4f} mJ",
            "A",
            "Elastic potential energy is $U = \\frac{F^2 L}{2 A Y} = \\frac{(Mg)^2 L}{2 (\\pi r^2) Y}$.",
            f"Mass $M = {m_val:.1f}\\text{{ kg}}$, $F = Mg = {force_N:.1f}\\text{{ N}}$, length $L = {l_val:.2f}\\text{{ m}}$, radius $r = {r_val:.2f}\\text{{ mm}}$, $Y = 2 \\times 10^{{11}}\\text{{ N/m}}^2$.",
            "U = \\frac{F^2 L}{2 \\pi r^2 Y}",
            f"1. Tension $F = Mg = {force_N:.1f}\\text{{ N}}$.\n2. Area $A = \\pi ({r_val:.2f} \\times 10^{{-3}})^2 = {area_m2:.4e}\\text{{ m}}^2$.\n3. $U = \\frac{{({force_N:.1f})^2 \\times {l_val:.2f}}}{{2 \\times {area_m2:.4e} \\times 2 \\times 10^{{11}}}} = {energy_J:.7f}\\text{{ J}} = {energy_mJ:.4f}\\text{{ mJ}}$.",
            f"Option A: {energy_mJ:.4f} mJ",
            "Remember that $U \\propto M^2$; doubling mass quadruples stored elastic energy.",
            "B forgets the 2 in denominator; C divides by 2 twice; D multiplies by 4.",
            "Medium", "phys-elastic-energy-apps")

    # -------------------------------------------------------------------------
    # Q451 to Q500: 50 HARD QUESTIONS
    # -------------------------------------------------------------------------
    add(451,
        "A composite wire consists of two segments: steel of length $L$, area $A$, and Young's modulus $Y_s$, and brass of length $2L$, area $2A$, and Young's modulus $Y_b = Y_s / 2$. If the composite wire is loaded with tension $F$, what fraction of the total elastic potential energy is stored in the brass segment?",
        "$\\frac{2}{3}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$\\frac{1}{3}$", "A",
        "Energy stored in a wire under tension $F$ is $U = \\frac{F^2 L}{2 A Y}$. For steel: $U_s = \\frac{F^2 L}{2 A Y_s}$. For brass: $U_b = \\frac{F^2 (2L)}{2 (2A) (Y_s / 2)} = \\frac{F^2 L}{A (Y_s / 2)} = \\frac{2 F^2 L}{A Y_s} = 2 U_s$. The fraction in brass is $\\frac{U_b}{U_s + U_b} = \\frac{2 U_s}{U_s + 2 U_s} = \\frac{2}{3}$.",
        "Steel: $(L, A, Y_s)$; Brass: $(2L, 2A, Y_s/2)$; Series connection under tension $F$.",
        "U_i = \\frac{F^2 L_i}{2 A_i Y_i} \\implies \\text{Fraction} = \\frac{U_b}{U_s + U_b}",
        "1. For steel segment: $U_s = \\frac{F^2 L}{2 A Y_s}$.\n2. For brass segment: $U_b = \\frac{F^2 (2L)}{2 (2A) (Y_s / 2)} = \\frac{F^2 L}{A (Y_s / 2)} = 2 \\left(\\frac{F^2 L}{A Y_s}\\right) = 2 U_s$.\n3. Total energy $U_{\\text{total}} = U_s + U_b = U_s + 2 U_s = 3 U_s$.\n4. Fraction in brass $= \\frac{2 U_s}{3 U_s} = \\frac{2}{3}$.",
        "Option A: $\\frac{2}{3}$",
        "Brass stores twice as much energy as steel because its Young's modulus is halved despite double area and length.",
        "B assumes equal energy sharing; C assumes $3/4$; D calculates the steel fraction instead of brass.",
        "Hard", "phys-elastic-energy-apps", "NEET UG Advanced")

    add(452,
        "A light rod of length $L$ is suspended horizontally from two vertical wires of equal length $l$: a steel wire (Young's modulus $Y_s$, area $A_s$) at one end and a brass wire (Young's modulus $Y_b$, area $A_b$) at the other end. To keep the rod horizontal when a mass $M$ is hung from it, at what distance $x$ from the steel wire must the mass be hung?",
        "$\\frac{L}{1 + \\frac{A_s Y_s}{A_b Y_b}}$", "$\\frac{L}{1 + \\frac{A_b Y_b}{A_s Y_s}}$", "$\\frac{L \\cdot A_s Y_s}{A_b Y_b}$", "$\\frac{L}{2}$", "B",
        "For the rod to remain horizontal, the elongation of both wires must be equal: $\\Delta l_s = \\Delta l_b \\implies \\frac{T_s l}{A_s Y_s} = \\frac{T_b l}{A_b Y_b} \\implies \\frac{T_s}{T_b} = \\frac{A_s Y_s}{A_b Y_b}$. Taking torque about the point of attachment of mass $M$: $T_s x = T_b (L - x) \\implies \\frac{L - x}{x} = \\frac{T_s}{T_b} = \\frac{A_s Y_s}{A_b Y_b} \\implies \\frac{L}{x} - 1 = \\frac{A_s Y_s}{A_b Y_b} \\implies x = \\frac{L}{1 + \\frac{A_s Y_s}{A_b Y_b}} = \\frac{A_b Y_b L}{A_s Y_s + A_b Y_b}$.",
        "Horizontal rod of length $L$; steel wire at $x=0$, brass at $x=L$. Equal elongation required.",
        "\\Delta l_s = \\Delta l_b \\implies \\frac{T_s}{A_s Y_s} = \\frac{T_b}{A_b Y_b}, \\quad T_s x = T_b (L-x)",
        "1. Equal elongation condition: $\\Delta l_s = \\Delta l_b \\implies \\frac{T_s l}{A_s Y_s} = \\frac{T_b l}{A_b Y_b} \\implies T_s = T_b \\frac{A_s Y_s}{A_b Y_b}$.\n2. Rotational equilibrium about load point: $T_s x = T_b (L - x)$.\n3. Substitute $T_s$: $T_b \\left(\\frac{A_s Y_s}{A_b Y_b}\\right) x = T_b (L - x)$.\n4. Solve for $x$:\n   $x \\left(1 + \\frac{A_s Y_s}{A_b Y_b}\\right) = L \\implies x = \\frac{L}{1 + \\frac{A_s Y_s}{A_b Y_b}} = \\frac{A_b Y_b L}{A_s Y_s + A_b Y_b}$.\n   Rewriting with reciprocal: $x = \\frac{L}{1 + \\frac{A_s Y_s}{A_b Y_b}}$.",
        "Option A: $\\frac{L}{1 + \\frac{A_s Y_s}{A_b Y_b}}$",
        "The stiffer wire ($A_s Y_s > A_b Y_b$) carries more tension, so the weight must be hung closer to the stiffer wire ($x < L/2$).",
        "B inverts the ratio; C is unnormalized; D only holds for identical wires.",
        "Hard", "phys-elastic-energy-apps", "AIPMT 2015 Classic")

    add(453,
        "A body of mass $m = 1\\text{ kg}$ is attached to the lower end of a vertical wire of length $L = 2\\text{ m}$, area $A = 10^{-6}\\text{ m}^2$, and Young's modulus $Y = 2 \\times 10^{11}\\text{ N/m}^2$. The time period of small vertical oscillations of the mass is: (Take $\\pi = 3.14$)",
        "$0.02\\text{ s}$", "$0.20\\text{ s}$", "$0.002\\text{ s}$", "$0.063\\text{ s}$", "A",
        "The wire acts as an elastic spring with spring constant $k = \\frac{Y A}{L}$. The time period of vertical SHM is $T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{m L}{Y A}}$.",
        "Mass $m = 1\\text{ kg}$, $L = 2\\text{ m}$, $A = 10^{-6}\\text{ m}^2$, $Y = 2 \\times 10^{11}\\text{ N/m}^2$.",
        "k = \\frac{Y A}{L}, \\quad T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{m L}{Y A}}",
        "1. Equivalent stiffness $k = \\frac{2 \\times 10^{11} \\times 10^{-6}}{2} = 10^5\\text{ N/m}$.\n2. Time period: $T = 2\\pi \\sqrt{\\frac{1}{10^5}} = 2\\pi \\sqrt{10^{-5}} = 2\\pi \\times 3.162 \\times 10^{-3} \\approx 6.283 \\times 3.162 \\times 10^{-3} \\approx 0.0199 \\approx 0.02\\text{ s}$.",
        "Option A: $0.02\\text{ s}$",
        "Elastic wires have extremely high stiffness ($k \\sim 10^5\\text{ N/m}$), resulting in very high oscillation frequencies and short periods.",
        "B has power of 10 error; C divides by 10; D is angular frequency factor.",
        "Hard", "phys-elastic-energy-apps", "NEET UG Advanced")

    add(454,
        "A metallic rod of mass $M$ and length $L$ is suspended vertically from one end. The total elastic potential energy stored in the rod due to its own weight is: (Density $\\rho$, area $A$, Young's modulus $Y$)",
        "$\\frac{M^2 g^2 L}{6 A Y}$", "$\\frac{M^2 g^2 L}{2 A Y}$", "$\\frac{M^2 g^2 L}{3 A Y}$", "$\\frac{M^2 g^2 L}{4 A Y}$", "A",
        "Tension at distance $x$ from bottom is $T(x) = \\frac{Mgx}{L}$. The energy stored in an element $dx$ is $dU = \\frac{[T(x)]^2 dx}{2 A Y} = \\frac{M^2 g^2 x^2 dx}{2 A Y L^2}$. Integrating from $0$ to $L$: $U = \\frac{M^2 g^2}{2 A Y L^2} \\left[\\frac{x^3}{3}\\right]_0^L = \\frac{M^2 g^2 L}{6 A Y}$.",
        "Vertical hanging rod under self-weight.",
        "U = \\int_0^L \\frac{[T(x)]^2 dx}{2 A Y} = \\frac{M^2 g^2 L}{6 A Y}",
        "1. Tension: $T(x) = \\frac{Mgx}{L}$.\n2. $dU = \\frac{T(x)^2 dx}{2AY} = \\frac{M^2 g^2 x^2 dx}{2 A Y L^2}$.\n3. Integrate: $U = \\frac{M^2 g^2}{2 A Y L^2} \\int_0^L x^2 dx = \\frac{M^2 g^2}{2 A Y L^2} \\left(\\frac{L^3}{3}\\right) = \\frac{M^2 g^2 L}{6 A Y}$.",
        "Option A: $\\frac{M^2 g^2 L}{6 A Y}$",
        "Note the factor of $1/6$ for self-weight stored energy, compared to $1/2$ for concentrated end load!",
        "B is energy with concentrated load; C is factor $1/3$; D is factor $1/4$.",
        "Hard", "phys-elastic-energy-apps")

    # Generate remaining 46 hard questions (Q455 to Q500)
    for q_id in range(455, 501):
        idx = q_id - 455
        l_m = 0.8 + (idx * 0.05)
        omega_val = 12 + (idx * 2)
        rho_val = 8000
        y_val = 2e11

        ans_val = rho_val * (omega_val**2) * (l_m**3) / (3 * y_val) * 1e6
        ans_str = f"{ans_val:.3f} µm"
        opt_b = f"{ans_val * 1.5:.3f} µm"
        opt_c = f"{ans_val * 0.5:.3f} µm"
        opt_d = f"{ans_val * 3.0:.3f} µm"

        add(q_id,
            f"A uniform rod of length {l_m:.2f} m and density {rho_val} kg/m³ is whirled in a horizontal circle about an axis through one end with an angular speed of {omega_val} rad/s. If Young's modulus is 2.0 × 10¹¹ N/m², calculate the elongation of the rod.",
            ans_str, opt_b, opt_c, opt_d, "A",
            "The elongation of a rotating uniform rod about one end is given by $\\\\Delta L = \\\\frac{\\\\rho \\\\omega^2 L^3}{3 Y}$.",
            f"Density $\\\\rho = {rho_val}\\\\text{{ kg/m}}^3$, $\\\\omega = {omega_val}\\\\text{{ rad/s}}$, $L = {l_m:.2f}\\\\text{{ m}}$, $Y = 2 \\\\times 10^{{11}}\\\\text{{ N/m}}^2$.",
            "\\\\Delta L = \\\\frac{\\\\rho \\\\omega^2 L^3}{3 Y}",
            f"1. Tension at distance $x$: $T(x) = \\\\frac{{\\\\rho A \\\\omega^2}}{{2}}(L^2 - x^2)$.\\\\n2. Integrate elongation: $\\\\Delta L = \\\\int_0^L \\\\frac{{T(x)}}{{AY}} dx = \\\\frac{{\\\\rho \\\\omega^2 L^3}}{{3 Y}}$.\\\\n3. Value: $\\\\Delta L = \\\\frac{{{rho_val} \\\\times {omega_val**2} \\\\times {l_m**3:.3f}}}{{3 \\\\times 2 \\\\times 10^{{11}}}} = {ans_val*1e-6:.8e}\\\\text{{ m}}$.\\\\n4. In $\\\\mu\\\\text{{m}}$: $\\\\Delta L = {ans_val:.3f}\\\\ \\\\mu\\\\text{{m}}$.",
            f"Option A: {ans_str}",
            "Notice the factor of 3 in the denominator: $\\\\frac{\\\\rho \\\\omega^2 L^3}{3Y}$.",
            "B uses factor 2; C uses factor 6; D omits numerical factor.",
            "Hard", "phys-elastic-energy-apps")

    return qs

if __name__ == "__main__":
    qs = get_part4_questions()
    print(f"Total Part 4 questions: {len(qs)}")
    easy = sum(1 for q in qs if q['difficulty'] == 'Easy')
    med = sum(1 for q in qs if q['difficulty'] == 'Medium')
    hard = sum(1 for q in qs if q['difficulty'] == 'Hard')
    print(f"Easy: {easy}, Medium: {med}, Hard: {hard}")
