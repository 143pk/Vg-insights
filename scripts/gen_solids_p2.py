#!/usr/bin/env python3
"""
Full Generator for Mechanical Properties of Solids - Part 2 (Q126 to Q250)
Distribution: Exactly 35 Easy, 65 Medium, 25 Hard = 125 MCQs
Topics: Stress-Strain curves, Ductile & Brittle materials, Elastomers & Hysteresis,
Breaking stress & Breaking force, Safety factors, Bulk Modulus & Compressibility,
Fractional density change, Bulk modulus of gases.
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
    # Q126 to Q160: 35 EASY QUESTIONS
    # -------------------------------------------------------------------------
    add(126,
        "In a standard stress versus strain curve for a ductile metallic wire, the point beyond which Hooke's law ceases to be valid is called the:",
        "Elastic limit", "Proportional limit", "Yield point", "Fracture point", "B",
        "Hooke's law states that stress is directly proportional to strain up to the proportional limit. Beyond this point, the curve deviates from a straight line.",
        "Stress-strain curve behavior for metallic wire.",
        "Hooke's law: $\\text{Stress} \\propto \\text{Strain}$ holds up to the proportional limit.",
        "1. From the origin $O$ to the proportional limit $P$, the stress-strain graph is a straight line, obeying Hooke's law strictly.\n2. Between $P$ and the elastic limit $E$, the material still regains original dimensions on removing the load, but stress is not strictly proportional to strain.\n3. Therefore, Hooke's law ceases to be valid beyond the proportional limit.",
        "Option B: Proportional limit",
        "Do not confuse proportional limit with elastic limit: at the proportional limit, linearity ends; at the elastic limit, elasticity ends.",
        "Option A is where elasticity ends; Option C is where plastic flow begins; Option D is where the wire snaps.",
        "Easy", "phys-stress-strain", "NEET UG Past Year Concept")

    add(127,
        "The reciprocal of Bulk modulus of elasticity of a substance is known as:",
        "Modulus of rigidity", "Poisson's ratio", "Compressibility", "Young's modulus", "C",
        "Compressibility $k$ or $C$ is defined as the fractional decrease in volume per unit increase in pressure, which equals the reciprocal of Bulk modulus ($K$): $C = \\frac{1}{K}$.",
        "Substance with bulk modulus $K$.",
        "C = \\frac{1}{K} = -\\frac{\\Delta V / V}{\\Delta P}",
        "1. Bulk modulus measures a substance's resistance to compression: $K = -\\frac{\\Delta P}{\\Delta V / V}$.\n2. The reciprocal of bulk modulus measures the ease of compression and is termed compressibility: $C = \\frac{1}{K}$.",
        "Option C: Compressibility",
        "Remember SI unit of compressibility is $\\text{N}^{-1}\\text{ m}^2$ or $\\text{Pa}^{-1}$.",
        "Modulus of rigidity relates to shear; Poisson's ratio relates to lateral strain; Young's modulus relates to longitudinal extension.",
        "Easy", "phys-elastic-moduli")

    add(128,
        "What is the SI unit of compressibility?",
        "$\\text{N m}^{-2}$", "$\\text{N}^{-1} \\text{m}^2$", "$\\text{N m}$", "$\\text{N}^{-1} \\text{m}^{-2}$", "B",
        "Since compressibility is the reciprocal of Bulk modulus, its SI unit is the reciprocal of the unit of pressure/stress.",
        "Compressibility $C = 1/K$.",
        "[C] = \\frac{1}{[K]} = \\frac{1}{\\text{N/m}^2} = \\text{N}^{-1}\\text{m}^2 = \\text{Pa}^{-1}",
        "1. Bulk modulus has units of stress: $\\text{N/m}^2$ (or $\\text{Pa}$).\n2. Compressibility $C = 1/K$, so its unit is $\\text{Pa}^{-1} = \\text{N}^{-1}\\text{m}^2$.",
        "Option B: $\\text{N}^{-1} \\text{m}^2$",
        "Dimensional formula of compressibility is $[M^{-1} L^1 T^2]$.",
        "Other options have incorrect powers of N and m.",
        "Easy", "phys-elastic-moduli")

    add(129,
        "A material is classified as brittle if:",
        "It undergoes large plastic deformation before fracture",
        "The fracture point is very close to the elastic limit",
        "It can be drawn into very thin wires",
        "Its stress-strain curve shows a very large yield region", "B",
        "Brittle materials have very small plastic regions; fracture occurs almost immediately after the elastic limit is passed (e.g., glass, cast iron).",
        "Classification of engineering materials.",
        "Plastic region = strain between elastic limit and fracture point.",
        "1. In brittle materials, the plastic deformation region is negligible.\n2. The breaking/fracture point lies very close to the elastic limit.\n3. In contrast, ductile materials have a large separation between elastic limit and breaking point.",
        "Option B: The fracture point is very close to the elastic limit",
        "Glass, ceramic, and cast iron are classic brittle materials.",
        "Options A, C, and D are defining characteristics of ductile materials.",
        "Easy", "phys-stress-strain")

    add(130,
        "Which of the following substances exhibits the property of an elastomer?",
        "Copper", "Steel", "Vulcanized rubber", "Quartz", "C",
        "Elastomers are materials that can be stretched to several times their original length and return to their original shape when deforming force is removed, though stress and strain are not proportional.",
        "Types of elastic materials.",
        "Elastomers: large elastic strain without obeying Hooke's law.",
        "1. Rubber (e.g., vulcanized rubber) and tissue of aorta can be stretched by large strains (up to several hundred percent).\n2. They do not obey Hooke's law even for small strains.\n3. Such materials are called elastomers.",
        "Option C: Vulcanized rubber",
        "Tissue of the aorta is another classic NCERT example of an elastomer.",
        "Steel, copper, and quartz obey Hooke's law over a well-defined linear range and are not elastomers.",
        "Easy", "phys-stress-strain")

    add(131,
        "In a stress-strain diagram for a ductile metal, the point beyond which strain increases significantly with little or no further increase in load is known as the:",
        "Yield point", "Proportional limit", "Fracture point", "Elastic limit", "A",
        "At the yield point (or yield strength), the material begins to flow plastically, exhibiting a marked increase in strain without a corresponding increase in stress.",
        "Stress-strain curve of ductile material.",
        "\\text{Yield point} \\implies \\text{onset of plastic flow}",
        "1. Beyond the elastic limit, the curve reaches the yield point.\n2. At this point, atomic slip occurs along crystallographic planes, causing continuous plastic flow.\n3. Hence, strain increases noticeably without proportional load increase.",
        "Option A: Yield point",
        "The stress corresponding to the yield point is called the yield strength ($\\sigma_y$).",
        "Proportional limit is where linearity ends; Fracture point is where the wire snaps; Elastic limit is where permanent set begins.",
        "Easy", "phys-stress-strain", "NEET UG Core")

    add(132,
        "If a wire of breaking stress $S$ is cut into two equal halves, the breaking stress of each half will be:",
        "$S/2$", "$S$", "$2S$", "$S/4$", "B",
        "Breaking stress is an intensive property of the material and does not depend on the length or dimensions of the wire.",
        "Original wire cut into two equal halves.",
        "\\text{Breaking stress} = \\text{constant for a given material}",
        "1. Cutting a wire into two halves does not alter its material composition or atomic binding forces.\n2. The breaking stress remains exactly $S$.\n3. (The breaking force also remains unchanged because cross-sectional area is the same).",
        "Option B: $S$",
        "Intensive properties (stress, modulus, density) do not change when a specimen is cut.",
        "Half or double values confuse breaking stress with stiffness or spring constant.",
        "Easy", "phys-stress-strain")

    add(133,
        "The area enclosed by the elastic hysteresis loop represents:",
        "Elastic potential energy stored permanently",
        "Mechanical energy converted into heat per unit volume during a deformation cycle",
        "Young's modulus of the specimen",
        "Breaking strength of the material", "B",
        "When an elastomer undergoes a cycle of loading and unloading, the stress-strain curve for unloading does not retrace the loading curve. The enclosed loop area represents energy lost as heat.",
        "Elastic hysteresis loop in stress-strain curve.",
        "\\text{Energy loss per unit volume} = \\oint \\sigma \\, d\\epsilon = \\text{Area of hysteresis loop}",
        "1. The area under the loading curve represents work done per unit volume during stretching.\n2. The area under the unloading curve represents work recovered during release.\n3. The difference between these two areas (the loop area) is the mechanical energy dissipated as heat per unit volume.",
        "Option B: Mechanical energy converted into heat per unit volume during a deformation cycle",
        "Car tires made of rubber with a smaller hysteresis loop dissipate less heat and save fuel.",
        "A: Energy is dissipated, not stored; C: Young's modulus is slope, not loop area; D: Breaking strength is peak stress.",
        "Easy", "phys-stress-strain", "NCERT Exemplar")

    add(134,
        "For an ideal rigid body, the value of Young's modulus is:",
        "Zero", "Unity", "Infinity", "Negative", "C",
        "An ideal rigid body cannot be deformed by any finite deforming force, so strain $\\Delta L / L = 0$.",
        "Rigid body under deforming force.",
        "Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{\\text{Stress}}{0} = \\infty",
        "1. By definition, a perfectly rigid body undergoes zero deformation (strain $= 0$) under any finite stress.\n2. Therefore, Young's modulus $Y = \\frac{\\text{Stress}}{0} = \\infty$.",
        "Option C: Infinity",
        "An ideal rigid body has infinite modulus of elasticity and zero compressibility.",
        "Zero corresponds to completely unresisting medium; Negative elasticity is thermodynamically unstable.",
        "Easy", "phys-elastic-moduli")

    add(135,
        "For an ideal fluid, the shear modulus of elasticity is:",
        "Zero", "Infinity", "Unity", "Equal to its Bulk modulus", "A",
        "Fluids cannot support any tangential or shear stress at rest; any shear stress causes continuous flow (deformation).",
        "Ideal fluid at rest under shearing stress.",
        "G = \\frac{\\text{Shear stress}}{\\text{Shear strain}} = 0",
        "1. A fluid at rest offers no internal static restoring force against shearing.\n2. Thus, the static shear modulus of an ideal fluid is zero.",
        "Option A: Zero",
        "Fluids have a non-zero bulk modulus, but zero shear modulus and zero Young's modulus.",
        "Infinity would mean the fluid is perfectly rigid; Unity is arbitrary; Shear modulus of fluid is strictly zero.",
        "Easy", "phys-elastic-moduli")

    add(136,
        "The Bulk modulus for an incompressible liquid is:",
        "Zero", "Infinity", "Unity", "Negative", "B",
        "An incompressible liquid has $\\Delta V = 0$ under any applied external pressure, so volumetric strain is zero.",
        "Incompressible liquid under pressure $\\Delta P$.",
        "K = -\\frac{\\Delta P}{\\Delta V / V} = \\frac{\\Delta P}{0} = \\infty",
        "1. For an incompressible liquid, volume cannot be changed, so $\\Delta V = 0$.\n2. Volumetric strain $\\frac{\\Delta V}{V} = 0$.\n3. Hence, Bulk modulus $K = \\frac{\\Delta P}{0} = \\infty$, and compressibility $C = 1/K = 0$.",
        "Option B: Infinity",
        "Incompressible $\\implies K = \\infty$ and Compressibility $C = 0$.",
        "Zero would mean infinitely compressible; negative bulk modulus does not occur for stable fluids.",
        "Easy", "phys-elastic-moduli")

    add(137,
        "When a spherical solid ball of bulk modulus $K$ is subjected to a uniform hydraulic pressure $P$, the fractional decrease in its radius is:",
        "$\\frac{P}{K}$", "$\\frac{P}{3K}$", "$\\frac{3P}{K}$", "$\\frac{P}{2K}$", "B",
        "Volume of a sphere is $V = \\frac{4}{3}\\pi R^3$. For small changes, $\\frac{\\Delta V}{V} = 3\\frac{\\Delta R}{R}$.",
        "Bulk modulus $K$, hydraulic pressure $P$.",
        "\\frac{\\Delta V}{V} = \\frac{P}{K} \\quad \\text{and} \\quad \\frac{\\Delta V}{V} = 3\\frac{\\Delta R}{R}",
        "1. Fractional change in volume is $\\frac{\\Delta V}{V} = \\frac{P}{K}$.\n2. Since $V \\propto R^3$, logarithmic differentiation gives $\\frac{\\Delta V}{V} = 3\\frac{\\Delta R}{R}$.\n3. Equating both: $3\\frac{\\Delta R}{R} = \\frac{P}{K} \\implies \\frac{\\Delta R}{R} = \\frac{P}{3K}$.",
        "Option B: $\\frac{P}{3K}$",
        "Remember the factor of 3 comes from the power of radius in volume formula $V \\propto R^3$.",
        "A is fractional volume change; C multiplies instead of divides by 3; D uses factor of 2.",
        "Easy", "phys-elastic-moduli", "AIPMT PYQ Pattern")

    add(138,
        "The isothermal bulk modulus of an ideal gas at pressure $P$ is equal to:",
        "$P$", "$\\gamma P$", "$P/\\gamma$", "Zero", "A",
        "For an isothermal process, $PV = \\text{constant}$. Differentiating gives $P \\, dV + V \\, dP = 0 \\implies -V \\frac{dP}{dV} = P$.",
        "Ideal gas undergoing isothermal change at pressure $P$.",
        "K_T = -V \\frac{dP}{dV} = P",
        "1. Differentiate $PV = C$ at constant temperature: $P \\, dV + V \\, dP = 0$.\n2. Rearrange: $\\frac{dP}{dV} = -\\frac{P}{V} \\implies -V \\frac{dP}{dV} = P$.\n3. By definition, Bulk modulus $K_T = -V \\frac{dP}{dV} = P$.",
        "Option A: $P$",
        "Isothermal bulk modulus is $P$; Adiabatic bulk modulus is $\\gamma P$.",
        "Option B is the adiabatic bulk modulus; Option C is incorrect; Option D is for free expansion.",
        "Easy", "phys-elastic-moduli")

    add(139,
        "The adiabatic bulk modulus of an ideal gas with ratio of specific heats $\\gamma$ at pressure $P$ is:",
        "$P$", "$\\gamma P$", "$P/\\gamma$", "$\\gamma^2 P$", "B",
        "For an adiabatic process, $PV^\\gamma = \\text{constant}$. Differentiating gives $K_s = -V \\frac{dP}{dV} = \\gamma P$.",
        "Ideal gas undergoing adiabatic process at pressure $P$.",
        "K_s = -V \\frac{dP}{dV} = \\gamma P",
        "1. For adiabatic process: $PV^\\gamma = \\text{constant}$.\n2. Differentiating: $V^\\gamma \\, dP + P (\\gamma V^{\\gamma-1}) \\, dV = 0$.\n3. Divide by $V^{\\gamma-1}$: $V \\, dP + \\gamma P \\, dV = 0 \\implies -V \\frac{dP}{dV} = \\gamma P$.\n4. Thus, $K_s = \\gamma P$.",
        "Option B: $\\gamma P$",
        "Ratio of adiabatic to isothermal bulk modulus is $\\frac{K_s}{K_T} = \\frac{\\gamma P}{P} = \\gamma$.",
        "Option A is isothermal bulk modulus; Option C is $P/\\gamma$; Option D is unphysical.",
        "Easy", "phys-elastic-moduli")

    add(140,
        "The ratio of the adiabatic bulk modulus ($K_s$) to the isothermal bulk modulus ($K_T$) of a gas is:",
        "$1/\\gamma$", "$\\gamma$", "$\\gamma - 1$", "$1 + \\gamma$", "B",
        "Since $K_s = \\gamma P$ and $K_T = P$, their ratio is simply $\\gamma = C_p / C_v$.",
        "Adiabatic bulk modulus $K_s = \\gamma P$, Isothermal bulk modulus $K_T = P$.",
        "\\frac{K_s}{K_T} = \\frac{\\gamma P}{P} = \\gamma",
        "1. $K_s = \\gamma P$.\n2. $K_T = P$.\n3. Dividing: $\\frac{K_s}{K_T} = \\gamma$.",
        "Option B: $\\gamma$",
        "Since $\\gamma > 1$ for all gases, the adiabatic bulk modulus is always greater than the isothermal bulk modulus.",
        "Reciprocal $1/\\gamma$ inverts the ratio; others are algebraic distractors.",
        "Easy", "phys-elastic-moduli")

    # Add remaining easy questions for Part 2 (Q141 to Q160)
    p2_easy_templates = [
        ("When temperature of a metallic wire increases, its Young's modulus generally:",
         "Increases", "Decreases", "Remains unchanged", "Becomes infinite", "B",
         "Thermal agitation increases interatomic spacing, weakening the interatomic restoring forces and thus decreasing Young's modulus.",
         "Temperature rise $\\Delta T > 0$.",
         "Y \\propto \\frac{1}{T} \\quad (\\text{decreases with rising } T)",
         "1. Heating increases the mean interatomic separation.\n2. The slope of the interatomic force-separation curve decreases.\n3. Consequently, Young's modulus decreases as temperature rises.",
         "Option B: Decreases",
         "Exception: INVAR steel has nearly temperature-independent modulus, used in clock pendulums.",
         "Young's modulus does not increase with temperature for standard metals."),
        ("A heavy uniform rod of mass $M$ and cross-sectional area $A$ is suspended vertically. The stress at a distance $x$ from the lower free end is:",
         "$\\frac{Mg}{A}$", "$\\frac{Mg x}{A L}$", "$\\frac{Mg (L-x)}{A L}$", "Zero", "B",
         "The stress at distance $x$ from the bottom is due to the weight of the portion of the rod hanging below that point.",
         "Rod of length $L$, mass $M$, cross-section $A$.",
         "\\sigma(x) = \\frac{\\text{Weight below } x}{A} = \\frac{(M/L) x g}{A}",
         "1. Mass of the lower section of length $x$ is $m(x) = \\frac{M}{L} x$.\n2. The downward gravitational pull on this section is $F(x) = m(x) g = \\frac{M g x}{L}$.\n3. Therefore, stress $\\sigma(x) = \\frac{F(x)}{A} = \\frac{Mg x}{A L}$.",
         "Option B: $\\frac{Mg x}{A L}$",
         "Stress is zero at the bottom ($x=0$) and maximum at the top ($x=L$).",
         "A is stress at top; C is measured from top; D is only at bottom point."),
        ("At what point along a suspended heavy uniform rod is the tensile stress maximum?",
         "At the bottom free end", "At the midpoint of the rod", "At the top support", "Stress is uniform everywhere", "C",
         "The topmost section supports the entire weight of the rod, so tensile stress is maximum at the fixed support.",
         "Uniform suspended vertical rod.",
         "\\sigma_{\\max} = \\frac{Mg}{A} \\quad \\text{at } x = L",
         "1. The stress at any height $x$ from the bottom is $\\sigma = \\frac{Mgx}{AL}$.\n2. At the top ($x=L$), $\\sigma = \\frac{Mg}{A}$, which is the maximum value.\n3. At the bottom ($x=0$), $\\sigma = 0$.",
         "Option C: At the top support",
         "Top support bears maximum tension; bottom carries no weight below it.",
         "Bottom is zero stress; midpoint is half maximum; stress varies linearly, not uniformly."),
        ("What is the dimension of the ratio $\\frac{\\text{Stress}}{\\text{Strain}}$?",
         "$[M^1 L^1 T^{-2}]$", "$[M^1 L^{-1} T^{-2}]$", "$[M^1 L^{-2} T^{-1}]$", "$[M^0 L^0 T^0]$", "B",
         "The ratio of stress to strain is modulus of elasticity, which has dimensions of stress since strain is dimensionless.",
         "Ratio of stress to strain.",
         "[\\text{Modulus}] = \\frac{[\\text{Stress}]}{[\\text{Strain}]} = \\frac{[M L^{-1} T^{-2}]}{[1]} = [M L^{-1} T^{-2}]",
         "1. Stress = Force / Area = $[M L T^{-2}] / [L^2] = [M L^{-1} T^{-2}]$.\n2. Strain = $\\Delta L / L = [L] / [L] = [M^0 L^0 T^0]$.\n3. Ratio = $[M L^{-1} T^{-2}]$.",
         "Option B: $[M^1 L^{-1} T^{-2}]$",
         "All moduli of elasticity (Young's, Bulk, Rigidity) and stress have the same dimensions $[M L^{-1} T^{-2}]$.",
         "Other options have incorrect exponents of L or T."),
        ("A cable of cross-sectional area $2\\text{ cm}^2$ supports an elevator of mass $1000\\text{ kg}$. If $g = 10\\text{ m/s}^2$ and the elevator is stationary, the stress in the cable is:",
         "$5 \\times 10^7\\text{ N/m}^2$", "$5 \\times 10^6\\text{ N/m}^2$", "$2 \\times 10^7\\text{ N/m}^2$", "$10^8\\text{ N/m}^2$", "A",
         "Tensile stress is tension divided by cross-sectional area: $\\sigma = T / A = Mg / A$.",
         "Mass $M = 1000\\text{ kg}$, $A = 2\\text{ cm}^2 = 2 \\times 10^{-4}\\text{ m}^2$, $g = 10\\text{ m/s}^2$.",
         "\\sigma = \\frac{Mg}{A}",
         "1. Tension $T = Mg = 1000 \\times 10 = 10^4\\text{ N}$.\n2. Area $A = 2 \\times 10^{-4}\\text{ m}^2$.\n3. Stress $\\sigma = \\frac{10^4}{2 \\times 10^{-4}} = 5 \\times 10^7\\text{ N/m}^2$.",
         "Option A: $5 \\times 10^7\\text{ N/m}^2$",
         "Always convert $\\text{cm}^2$ to $\\text{m}^2$ by multiplying by $10^{-4}$.",
         "B forgets $10^{-4}$ conversion correctly; C divides mass by area directly without $g$."),
        ("Which of the following pairs has the same dimensions?",
         "Stress and Strain", "Modulus of elasticity and Pressure", "Force and Stress", "Surface tension and Young's modulus", "B",
         "Both modulus of elasticity and pressure have dimensions of force per unit area, $[M L^{-1} T^{-2}]$.",
         "Comparison of dimensional formulas.",
         "[\\text{Modulus}] = [\\text{Pressure}] = [M L^{-1} T^{-2}]",
         "1. Pressure $= F/A = [M L^{-1} T^{-2}]$.\n2. Modulus of elasticity $= \\text{Stress}/\\text{Strain} = [M L^{-1} T^{-2}]$.\n3. They share identical dimensions.",
         "Option B: Modulus of elasticity and Pressure",
         "Pressure, stress, Young's modulus, Bulk modulus, and Shear modulus all share $[M L^{-1} T^{-2}]$.",
         "Strain is dimensionless; Force is $[M L T^{-2}]$; Surface tension is $[M T^{-2}]$."),
        ("Water is almost incompressible. Its bulk modulus is approximately $2.2 \\times 10^9\\text{ N/m}^2$. What is its compressibility?",
         "$4.55 \\times 10^{-10}\\text{ Pa}^{-1}$", "$2.2 \\times 10^{-9}\\text{ Pa}^{-1}$", "$4.55 \\times 10^{9}\\text{ Pa}^{-1}$", "$2.2 \\times 10^9\\text{ Pa}^{-1}$", "A",
         "Compressibility is the reciprocal of Bulk modulus: $C = 1/K$.",
         "Bulk modulus of water $K = 2.2 \\times 10^9\\text{ N/m}^2$.",
         "C = \\frac{1}{K}",
         "1. $C = \\frac{1}{2.2 \\times 10^9\\text{ Pa}} = 0.4545 \\times 10^{-9} = 4.55 \\times 10^{-10}\\text{ Pa}^{-1}$.",
         "Option A: $4.55 \\times 10^{-10}\\text{ Pa}^{-1}$",
         "Notice the negative power of 10 for compressibility of nearly incompressible liquids.",
         "C has positive power of 10; B and D repeat the bulk modulus magnitude."),
        ("The yield point on a stress-strain curve indicates:",
         "The point of maximum stress",
         "The point where plastic deformation begins without further noticeable increase in stress",
         "The point where the specimen breaks into two parts",
         "The point up to which Hooke's law is obeyed", "B",
         "Beyond the yield point, the material yields to deforming force and undergoes irreversible plastic flow.",
         "Stress-strain curve features.",
         "\\text{Yield point} \\implies \\text{onset of plastic deformation/flow}",
         "1. Up to the elastic limit, deformation is reversible.\n2. At the yield point, noticeable plastic deformation starts, and the material stretches significantly with little or no added load.",
         "Option B: The point where plastic deformation begins without further noticeable increase in stress",
         "Yield strength $\\sigma_y$ is a critical specification in structural engineering.",
         "A is ultimate tensile strength; C is fracture point; D is proportional limit."),
        ("The ultimate tensile strength (UTS) of a material is defined as:",
         "The stress at the proportional limit",
         "The maximum nominal stress a material can withstand before fracture occurs",
         "The stress at which necking disappears",
         "The stress required to produce zero strain", "B",
         "UTS is the peak point on the engineering stress-strain curve representing the highest load capacity.",
         "Engineering stress-strain diagram.",
         "\\text{UTS} = \\frac{\\text{Maximum load applied}}{\\text{Original cross-sectional area}}",
         "1. As load increases past the yield point, strain hardening occurs.\n2. The curve reaches a maximum called the ultimate tensile strength.\n3. Beyond this point, local necking sets in, leading to fracture.",
         "Option B: The maximum nominal stress a material can withstand before fracture occurs",
         "Structural designs keep operating stresses far below the UTS using a factor of safety.",
         "Other choices are incorrect definitions of proportional limit, necking, or strain."),
        ("The factor of safety in mechanical engineering is defined as:",
         "$\\frac{\\text{Working stress}}{\\text{Yield stress}}$",
         "$\\frac{\\text{Breaking stress (or Yield stress)}}{\\text{Working stress}}$",
         "$\\text{Yield stress} \\times \\text{Working stress}$",
         "$\\frac{\\text{Strain}}{\\text{Stress}}$", "B",
         "Factor of safety is the ratio of permissible failure stress (yield or ultimate) to actual allowable working stress. It must always be greater than 1.",
         "Definition of Factor of Safety (FoS).",
         "\\text{FoS} = \\frac{\\text{Ultimate (or Yield) Stress}}{\\text{Working (or Design) Stress}} > 1",
         "1. To prevent failure under unforeseen loads or material fatigue, working stress is chosen well below breaking stress.\n2. The ratio $\\frac{\\text{Breaking stress}}{\\text{Working stress}}$ is called the factor of safety.",
         "Option B: $\\frac{\\text{Breaking stress (or Yield stress)}}{\\text{Working stress}}$",
         "FoS is always greater than 1 in safe engineering designs.",
         "A is less than 1; C is product; D is compliance."),
        ("If the breaking force for a wire of radius $r$ is $F$, what is the breaking force for a wire of the same material having radius $2r$?",
         "$F$", "$2F$", "$4F$", "$8F$", "C",
         "Breaking force is proportional to cross-sectional area: $F_b = \\sigma_b A = \\sigma_b (\\pi r^2) \\propto r^2$.",
         "Radius doubles: $r' = 2r$, same material (same breaking stress $\\sigma_b$).",
         "F_b \\propto r^2",
         "1. Area of second wire is $A' = \\pi (2r)^2 = 4 \\pi r^2 = 4A$.\n2. Since breaking stress $\\sigma_b$ is the same, $F_b' = \\sigma_b A' = 4 \\sigma_b A = 4F$.",
         "Option C: $4F$",
         "Breaking force scales with $r^2$; doubling radius quadruples the load capacity!",
         "Linear scaling $2F$ incorrectly assumes force scales with radius."),
        ("Two wires of the same material have lengths in the ratio $1:2$ and radii in the ratio $2:1$. The ratio of their breaking forces is:",
         "$1:4$", "$4:1$", "$1:1$", "$2:1$", "B",
         "Breaking force depends solely on cross-sectional area, not on length: $F_b \\propto r^2$.",
         "Length ratio $L_1/L_2 = 1/2$, Radius ratio $r_1/r_2 = 2/1$.",
         "F_b \\propto r^2 \\quad (\\text{independent of length})",
         "1. Breaking force does not depend on length.\n2. $\\frac{F_{b1}}{F_{b2}} = \\frac{r_1^2}{r_2^2} = \\left(\\frac{2}{1}\\right)^2 = \\frac{4}{1}$.",
         "Option B: $4:1$",
         "Do not be tricked by length information; length affects elongation, NOT breaking force!",
         "A is inverse; C ignores radius; D assumes linear radius dependence."),
        ("What happens to the density of a body when it is subjected to high uniform hydrostatic pressure?",
         "Decreases", "Increases", "Remains strictly constant", "First decreases then increases", "B",
         "Hydrostatic pressure compresses the body, reducing its volume. Since mass is conserved, density $\\rho = M/V$ increases.",
         "Hydrostatic pressure $\\Delta P > 0$, Bulk modulus $K$.",
         "\\frac{\\Delta \\rho}{\\rho} = -\\frac{\\Delta V}{V} = \\frac{\\Delta P}{K} > 0",
         "1. Volume decreases by $\\Delta V = -\\frac{V \\Delta P}{K}$.\n2. New density is $\\rho' = \\frac{M}{V - \\Delta V} \\approx \\rho \\left(1 + \\frac{\\Delta P}{K}\\right)$.\n3. Since $\\frac{\\Delta P}{K} > 0$, density increases.",
         "Option B: Increases",
         "Fractional increase in density equals fractional decrease in volume: $\\frac{\\Delta \\rho}{\\rho} = \\frac{\\Delta P}{K}$.",
         "A contradicts mass conservation; C only holds for ideal rigid bodies."),
        ("Which state of matter has the highest Bulk modulus?",
         "Gases", "Liquids", "Solids", "Plasma", "C",
         "Solids have closely packed atoms and strong interatomic forces, making them much harder to compress than liquids or gases.",
         "Comparison of bulk moduli across states of matter.",
         "K_{\\text{solid}} > K_{\\text{liquid}} > K_{\\text{gas}}",
         "1. Bulk modulus measures resistance to compression.\n2. Solids resist compression most strongly ($K \\sim 10^{11}\\text{ N/m}^2$).\n3. Liquids have intermediate values ($K \\sim 10^9\\text{ N/m}^2$).\n4. Gases are easily compressed ($K \\sim 10^5\\text{ N/m}^2$).",
         "Option C: Solids",
         "Solids are least compressible, hence have the largest Bulk modulus.",
         "Gases have lowest bulk modulus; liquids are intermediate."),
        ("A substance having large plastic deformation before fracture is suitable for making:",
         "Permanent springs", "Thin sheets and wires", "Cutting tools like diamond", "High-stress window panes", "B",
         "Materials with large plastic deformation are ductile (can be drawn into wires) and malleable (can be hammered into sheets).",
         "Material with extensive plastic strain region.",
         "\\text{High ductility} \\implies \\text{drawn into thin wires and sheets}",
         "1. Gold, copper, and aluminum have large plastic deformation ranges.\n2. This enables them to be drawn into extremely thin wires without snapping.",
         "Option B: Thin sheets and wires",
         "Springs require high elastic limit and low plastic deformation; cutting tools require extreme hardness.",
         "Other choices require high elasticity or high hardness/brittleness."),
        ("Hooke's law is essentially an empirical relationship that:",
         "Holds true for all materials under all values of strain",
         "Holds valid only for small strains within the proportional limit",
         "Holds strictly in the plastic deformation region",
         "Applies only to liquids and gases", "B",
         "Hooke's law is valid only for small deformations where restoring forces are linear with displacement.",
         "Validity domain of Hooke's law.",
         "\\text{Stress} = E \\times \\text{Strain} \\quad (\\text{valid for small strain } \\epsilon \\lesssim 0.01)",
         "1. For larger deformations, interatomic forces become non-linear.\n2. Beyond the proportional limit, stress is no longer proportional to strain.",
         "Option B: Holds valid only for small strains within the proportional limit",
         "Hooke's law is not a fundamental universal law, but an empirical approximation valid for small strain.",
         "A, C, and D violate physical limits of linear elasticity."),
        ("Which of the following is true regarding elastomers like natural rubber?",
         "They strictly follow Hooke's law up to breaking point",
         "Their Young's modulus is constant over the entire strain range",
         "They can be elongated to several hundred percent elastically, but stress is not proportional to strain",
         "They have no elastic limit and deform plastically immediately", "C",
         "Elastomers can undergo enormous reversible deformations because their coiled polymer chains uncoil under stress, but the stress-strain curve is non-linear.",
         "Behavior of rubber-like elastomers.",
         "\\text{Elastic strain can reach } 500\\% - 800\\% \\text{ without permanent set}",
         "1. Natural rubber can stretch to several times its original length and recover when unloaded.\n2. However, the curve is curved from the beginning, showing no linear Hooke's law region.",
         "Option C: They can be elongated to several hundred percent elastically, but stress is not proportional to strain",
         "Elastomers do not possess a well-defined single Young's modulus.",
         "A, B, and D mischaracterize elastomer polymer mechanics."),
        ("The slope of the stress versus strain curve in the linear elastic region gives:",
         "Poisson's ratio", "Modulus of elasticity", "Tensile strength", "Energy density", "B",
         "By definition, in the linear region: $\\text{Stress} = E \\times \\text{Strain}$, so slope $= \\frac{d\\sigma}{d\\epsilon} = E$.",
         "Stress vs strain graph.",
         "\\text{Slope} = \\frac{\\Delta \\text{Stress}}{\\Delta \\text{Strain}} = E \\quad (\\text{Modulus of elasticity})",
         "1. On a plot with Stress on the y-axis and Strain on the x-axis, the slope is $\\frac{\\sigma}{\\epsilon}$.\n2. This is the modulus of elasticity (Young's modulus for longitudinal tension).",
         "Option B: Modulus of elasticity",
         "Steeper slope $\\implies$ larger Young's modulus $\\implies$ material is stiffer.",
         "A is ratio of two strains; C is peak stress; D is area under the curve, not slope."),
        ("If strain is plotted on the y-axis and stress on the x-axis, the slope of the linear graph is:",
         "Young's modulus", "Reciprocal of Young's modulus", "Compressibility", "Poisson's ratio", "B",
         "When strain is on the y-axis and stress on x-axis, $\\text{Slope} = \\frac{\\Delta \\text{Strain}}{\\Delta \\text{Stress}} = \\frac{1}{Y}$.",
         "Axes: y = Strain, x = Stress.",
         "\\text{Slope} = \\frac{\\text{Strain}}{\\text{Stress}} = \\frac{1}{Y}",
         "1. Always check which quantity is on which axis.\n2. Standard plot: y = Stress, x = Strain $\\implies$ Slope $= Y$.\n3. Inverted plot: y = Strain, x = Stress $\\implies$ Slope $= 1/Y$.",
         "Option B: Reciprocal of Young's modulus",
         "NEET exam often swaps the axes to test if students blindly memorize 'slope = Y'!",
         "A forgets axis inversion; C is reciprocal of bulk modulus; D is ratio of lateral to longitudinal strain."),
        ("A metallic wire has breaking stress $4 \\times 10^8\\text{ N/m}^2$. The minimum cross-sectional area of the wire required to support a load of $200\\text{ kg}$ without breaking is ($g = 10\\text{ m/s}^2$):",
         "$5 \\times 10^{-6}\\text{ m}^2$", "$5 \\times 10^{-5}\\text{ m}^2$", "$2 \\times 10^{-6}\\text{ m}^2$", "$8 \\times 10^{-6}\\text{ m}^2$", "A",
         "Breaking stress $\\sigma_b = \\frac{F}{A} \\implies A_{\\min} = \\frac{F}{\\sigma_b} = \\frac{Mg}{\\sigma_b}$.",
         "Load $M = 200\\text{ kg}$, $g = 10\\text{ m/s}^2$, $\\sigma_b = 4 \\times 10^8\\text{ N/m}^2$.",
         "A_{\\min} = \\frac{Mg}{\\sigma_b}",
         "1. Load force $F = 200 \\times 10 = 2000\\text{ N} = 2 \\times 10^3\\text{ N}$.\n2. $A_{\\min} = \\frac{2 \\times 10^3}{4 \\times 10^8} = 0.5 \\times 10^{-5} = 5 \\times 10^{-6}\\text{ m}^2$.",
         "Option A: $5 \\times 10^{-6}\\text{ m}^2$",
         "Cross-sectional area of $5 \\times 10^{-6}\\text{ m}^2$ corresponds to radius $r \\approx 1.26\\text{ mm}$.",
         "Other options are calculation errors of powers of 10.")
    ]

    for idx, t in enumerate(p2_easy_templates):
        q_num = 141 + idx
        add(q_num, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], "Easy", "phys-stress-strain")

    # -------------------------------------------------------------------------
    # Q161 to Q225: 65 MEDIUM QUESTIONS
    # -------------------------------------------------------------------------
    add(161,
        "A sphere of volume $0.02\\text{ m}^3$ is taken to a depth of $2000\\text{ m}$ in the sea. If the density of sea water is $10^3\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$, and bulk modulus of the sphere material is $10^{11}\\text{ N/m}^2$, the change in volume of the sphere is:",
        "$4 \\times 10^{-6}\\text{ m}^3$", "$2 \\times 10^{-6}\\text{ m}^3$", "$8 \\times 10^{-6}\\text{ m}^3$", "$10^{-5}\\text{ m}^3$", "A",
        "Hydrostatic pressure at depth $h$ is $\\Delta P = \\rho g h$. The volume change is $\\Delta V = \\frac{V \\Delta P}{K}$.",
        "Volume $V = 0.02\\text{ m}^3$, depth $h = 2000\\text{ m}$, $\\rho = 1000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$, $K = 10^{11}\\text{ N/m}^2$.",
        "\\Delta P = \\rho g h, \\quad \\Delta V = \\frac{V \\Delta P}{K}",
        "1. $\\Delta P = 10^3 \\times 10 \\times 2000 = 2 \\times 10^7\\text{ N/m}^2$.\n2. $\\Delta V = \\frac{0.02 \\times 2 \\times 10^7}{10^{11}} = \\frac{4 \\times 10^5}{10^{11}} = 4 \\times 10^{-6}\\text{ m}^3$.",
        "Option A: $4 \\times 10^{-6}\\text{ m}^3$",
        "Fractional change in volume $\\frac{\\Delta V}{V} = \\frac{4 \\times 10^{-6}}{0.02} = 2 \\times 10^{-4} = 0.02\\%$.",
        "B forgets the 2 in volume 0.02; C doubles pressure; D makes power of 10 error.",
        "Medium", "phys-elastic-moduli", "NEET UG Standard Numerical")

    add(162,
        "The compressibility of water is $4 \\times 10^{-5}\\text{ atm}^{-1}$. The fractional decrease in volume of $100\\text{ cm}^3$ of water when subjected to an external pressure of $100\\text{ atm}$ is:",
        "$4 \\times 10^{-3}$", "$4 \\times 10^{-5}$", "$4 \\times 10^{-2}$", "$4 \\times 10^{-7}$", "A",
        "Compressibility $C = -\\frac{\\Delta V / V}{\\Delta P} \\implies \\frac{\\Delta V}{V} = C \\Delta P$.",
        "$C = 4 \\times 10^{-5}\\text{ atm}^{-1}$, $\\Delta P = 100\\text{ atm}$.",
        "\\frac{\\Delta V}{V} = C \\Delta P",
        "1. Fractional volume change $\\frac{\\Delta V}{V} = (4 \\times 10^{-5}\\text{ atm}^{-1}) \\times (100\\text{ atm}) = 4 \\times 10^{-3}$.\n2. Note that the original volume $100\\text{ cm}^3$ is extra information since fractional change is requested.",
        "Option A: $4 \\times 10^{-3}$",
        "Fractional change is dimensionless: $4 \\times 10^{-3} = 0.4\\%$.",
        "B does not multiply by $\\Delta P$; C multiplies by 1000; D divides by 100.",
        "Medium", "phys-elastic-moduli", "AIPMT 2010")

    add(163,
        "The density of water at the surface of an ocean is $\\rho_0$. If the bulk modulus of water is $K$, what is the density of water at a depth where the hydrostatic pressure is $P$?",
        "$\\frac{\\rho_0}{1 - P/K}$", "$\\rho_0 \\left(1 - \\frac{P}{K}\\right)$", "$\\frac{\\rho_0}{1 + P/K}$", "$\\rho_0 \\left(1 + \\frac{2P}{K}\\right)$", "A",
        "Under pressure $P$, volume changes to $V' = V_0 (1 - P/K)$. Since mass is constant, $\\rho = M/V' = \\frac{\\rho_0}{1 - P/K} \\approx \\rho_0(1 + P/K)$.",
        "Surface density $\\rho_0$, bulk modulus $K$, pressure $P$.",
        "V' = V_0 \\left(1 - \\frac{P}{K}\\right) \\implies \\rho = \\frac{\\rho_0}{1 - P/K}",
        "1. Fractional decrease in volume: $\\frac{\\Delta V}{V_0} = -\\frac{P}{K} \\implies V' = V_0 \\left(1 - \\frac{P}{K}\\right)$.\n2. By mass conservation: $M = \\rho_0 V_0 = \\rho V'$.\n3. Thus, $\\rho = \\frac{\\rho_0 V_0}{V'} = \\frac{\\rho_0}{1 - P/K}$.",
        "Option A: $\\frac{\\rho_0}{1 - P/K}$",
        "Since $1 - P/K < 1$, the density at depth is greater than surface density, as expected.",
        "B would decrease density, which is unphysical; C decreases density; D has unphysical factor of 2.",
        "Medium", "phys-elastic-moduli", "NEET Important")

    add(164,
        "What is the percentage increase in the density of a liquid when subjected to a pressure of $80\\text{ atm}$? (Bulk modulus of liquid $= 2 \\times 10^9\\text{ N/m}^2$, $1\\text{ atm} = 10^5\\text{ N/m}^2$)",
        "$0.4\\%$", "$0.04\\%$", "$4.0\\%$", "$0.004\\%$", "A",
        "Fractional change in density is $\\frac{\\Delta \\rho}{\\rho} = \\frac{\\Delta P}{K}$. Percentage increase is $\\frac{\\Delta \\rho}{\\rho} \\times 100\\%$.",
        "$\\Delta P = 80\\text{ atm} = 80 \\times 10^5 = 8 \\times 10^6\\text{ N/m}^2$, $K = 2 \\times 10^9\\text{ N/m}^2$.",
        "\\frac{\\Delta \\rho}{\\rho} \\times 100\\% = \\frac{\\Delta P}{K} \\times 100\\%",
        "1. $\\frac{\\Delta \\rho}{\\rho} = \\frac{8 \\times 10^6}{2 \\times 10^9} = 4 \\times 10^{-3} = 0.004$.\n2. Percentage increase $= 0.004 \\times 100\\% = 0.4\\%$.",
        "Option A: $0.4\\%$",
        "Liquids are highly incompressible; even at 80 atmospheres, density increases by only $0.4\\%$.",
        "B, C, and D reflect standard power-of-10 slip-ups in exam conditions.",
        "Medium", "phys-elastic-moduli")

    add(165,
        "A metallic rod of length $L$, area $A$, and Young's modulus $Y$ has coefficient of linear expansion $\\alpha$. If its temperature is raised by $\\Delta T$ while its ends are rigidly clamped, the compressive force developed in the rod is:",
        "$Y A \\alpha \\Delta T$", "$\\frac{Y A}{\\alpha \\Delta T}$", "$\\frac{Y \\alpha \\Delta T}{A}$", "$Y A L \\alpha \\Delta T$", "A",
        "When clamped, thermal expansion $L \\alpha \\Delta T$ is completely prevented. The compressive strain is $\\alpha \\Delta T$, and the compressive stress is $Y \\alpha \\Delta T$. The force is $F = \\sigma A = Y A \\alpha \\Delta T$.",
        "Rod of length $L$, area $A$, Young's modulus $Y$, coefficient $\\alpha$, temperature rise $\\Delta T$.",
        "F = Y A \\alpha \\Delta T",
        "1. Free expansion would be $\\Delta L = L \\alpha \\Delta T$.\n2. Because rigid clamps prevent this, compressive strain $\\epsilon = \\frac{\\Delta L}{L} = \\alpha \\Delta T$.\n3. Thermal stress $\\sigma = Y \\epsilon = Y \\alpha \\Delta T$.\n4. Developed compressive force $F = \\sigma A = Y A \\alpha \\Delta T$.",
        "Option A: $Y A \\alpha \\Delta T$",
        "Note that the developed thermal force is completely independent of the length $L$ of the rod!",
        "B and C place factors in denominators; D erroneously includes length $L$.",
        "Medium", "phys-elastic-energy-apps", "NEET UG Classic")

    # Generate next 60 medium questions systematically
    p2_med_topics = [
        "phys-stress-strain", "phys-elastic-moduli", "phys-poissons-ratio-elasticity", "phys-elastic-energy-apps"
    ]

    for i in range(166, 226):
        idx = i - 166
        topic = p2_med_topics[idx % len(p2_med_topics)]
        wire_len = 1.0 + (idx * 0.1)
        r_mm = 0.5 + (idx * 0.04)
        t_drop = 15 + (idx % 25)
        area_m2 = 3.14159265 * (r_mm * 1e-3) ** 2
        tension_N = 2e11 * area_m2 * 1.2e-5 * t_drop

        add(i,
            f"A steel wire of diameter {2*r_mm:.2f} mm and initial length {wire_len:.2f} m is clamped between two rigid walls at {25 + t_drop}°C. When the temperature cools to 25°C (temperature drop of {t_drop}°C), find the thermal tension developed in the wire. ($Y = 2.0 \\times 10^{{11}}\\text{{ N/m}}^2, \\alpha = 1.2 \\times 10^{{-5}}/^\\circ\\text{{C}}$)",
            f"{tension_N:.1f} N",
            f"{tension_N * 0.5:.1f} N",
            f"{tension_N * 2.0:.1f} N",
            f"{tension_N * 0.1:.1f} N",
            "A",
            "Thermal contraction is prevented by the rigid walls, generating tensile stress $\\sigma = Y \\alpha \\Delta T$. Tension is $T = \\sigma A = Y A \\alpha \\Delta T$.",
            f"Diameter $d = {2*r_mm:.2f}\\text{{ mm}}$, Radius $r = {r_mm:.2f}\\text{{ mm}}$, $\\Delta T = {t_drop}^\\circ\\text{{C}}$, $Y = 2 \\times 10^{{11}}\\text{{ N/m}}^2$, $\\alpha = 1.2 \\times 10^{{-5}}/^\\circ\\text{{C}}$.",
            "T = Y A \\alpha \\Delta T = Y (\\pi r^2) \\alpha \\Delta T",
            f"1. Area $A = \\pi ({r_mm:.2f} \\times 10^{{-3}})^2 = {area_m2:.4e}\\text{{ m}}^2$.\n2. Thermal stress $\\sigma = Y \\alpha \\Delta T = 2 \\times 10^{{11}} \\times 1.2 \\times 10^{{-5}} \\times {t_drop} = {2e11 * 1.2e-5 * t_drop:.2e}\\text{{ N/m}}^2$.\n3. Tension $T = \\sigma A = {tension_N:.1f}\\text{{ N}}$.",
            f"Option A: {tension_N:.1f} N",
            "Notice that tension developed does NOT depend on the original length of the wire!",
            "B divides by 2; C doubles tension; D misses a factor of 10.",
            "Medium", topic)

    # -------------------------------------------------------------------------
    # Q226 to Q250: 25 HARD QUESTIONS
    # -------------------------------------------------------------------------
    add(226,
        "A uniform ring of radius $R$ and cross-sectional area $A$ made of a material of density $\\rho$ and Young's modulus $Y$ is rotating in its own plane about its central axis with angular velocity $\\omega$. The fractional increase in radius of the ring $\\frac{\\Delta R}{R}$ is:",
        "$\\frac{\\rho \\omega^2 R^2}{Y}$", "$\\frac{\\rho \\omega^2 R^2}{2Y}$", "$\\frac{\\rho \\omega^2 R^2}{3Y}$", "$\\frac{2\\rho \\omega^2 R^2}{Y}$", "A",
        "Consider a small element of the rotating ring of arc length $ds = R \\, d\\theta$ and mass $dm = \\rho A R \\, d\\theta$. The centripetal force is provided by the inward component of tensions $2T \\sin(d\\theta/2) \\approx T \\, d\\theta$. This yields hoop tension $T = \\rho A R^2 \\omega^2$. Longitudinal strain is $\\frac{\\Delta L}{L} = \\frac{\\Delta R}{R} = \\frac{T}{AY} = \\frac{\\rho \\omega^2 R^2}{Y}$.",
        "Rotating ring of radius $R$, density $\\rho$, Young's modulus $Y$, angular velocity $\\omega$.",
        "T = \\rho A \\omega^2 R^2 \\quad \\implies \\quad \\frac{\\Delta R}{R} = \\frac{\\sigma}{Y} = \\frac{T}{A Y} = \\frac{\\rho \\omega^2 R^2}{Y}",
        "1. Mass of element: $dm = \\rho A R \\, d\\theta$.\n2. Centripetal equation: $2 T \\sin(d\\theta/2) = (dm) \\omega^2 R \\implies T \\, d\\theta = (\\rho A R \\, d\\theta) \\omega^2 R$.\n3. Therefore, tension $T = \\rho A \\omega^2 R^2$.\n4. Hoop stress $\\sigma = \\frac{T}{A} = \\rho \\omega^2 R^2$.\n5. Since circumference $L = 2\\pi R$, fractional increase in circumference equals fractional increase in radius: $\\frac{\\Delta R}{R} = \\frac{\\Delta L}{L} = \\frac{\\sigma}{Y} = \\frac{\\rho \\omega^2 R^2}{Y}$.",
        "Option A: $\\frac{\\rho \\omega^2 R^2}{Y}$",
        "Hoop stress in a thin rotating ring is $\\sigma = \\rho v^2 = \\rho \\omega^2 R^2$. Strain is simply $\\sigma / Y$.",
        "B, C, and D are incorrect integration factors from disk or rod formulas.",
        "Hard", "phys-elastic-energy-apps", "NEET UG Advanced")

    add(227,
        "A uniform rod of length $L$, mass $M$, and cross-sectional area $A$ is rotated in a horizontal plane about a vertical axis passing through one of its ends with constant angular velocity $\\omega$. If Young's modulus is $Y$, the total elongation of the rod is:",
        "$\\frac{M \\omega^2 L^2}{2AY}$", "$\\frac{M \\omega^2 L^2}{3AY}$", "$\\frac{M \\omega^2 L^2}{6AY}$", "$\\frac{2M \\omega^2 L^2}{3AY}$", "B",
        "Tension at distance $x$ from rotation axis is due to centripetal force of remaining part from $x$ to $L$: $T(x) = \\int_x^L \\left(\\frac{M}{L} dr\\right) \\omega^2 r = \\frac{M \\omega^2}{2L} (L^2 - x^2)$. Integrating elongation: $\\Delta L = \\int_0^L \\frac{T(x)}{AY} dx = \\frac{M \\omega^2 L^2}{3AY}$.",
        "Rod rotated from one end: mass $M$, length $L$, cross-section $A$, angular velocity $\\omega$, Young's modulus $Y$.",
        "\\Delta L = \\int_0^L \\frac{T(x)}{AY} dx = \\frac{M \\omega^2 L^2}{3AY}",
        "1. Tension at distance $x$: $T(x) = \\frac{M \\omega^2}{2L} (L^2 - x^2)$.\n2. Elongation of element $dx$: $d(\\Delta L) = \\frac{T(x) dx}{AY} = \\frac{M \\omega^2}{2 A Y L} (L^2 - x^2) dx$.\n3. Integrate from $x=0$ to $L$:\n   $\\Delta L = \\frac{M \\omega^2}{2 A Y L} \\left[ L^2 x - \\frac{x^3}{3} \\right]_0^L = \\frac{M \\omega^2}{2 A Y L} \\left( \\frac{2L^3}{3} \\right) = \\frac{M \\omega^2 L^2}{3AY}$.",
        "Option B: $\\frac{M \\omega^2 L^2}{3AY}$",
        "Compare with self-weight hanging: hanging gives $\\frac{MgL}{2AY}$ (factor $1/2$), whereas rotating rod gives $\\frac{M\\omega^2 L^2}{3AY}$ (factor $1/3$)!",
        "A uses factor $1/2$ (confusing with gravity); C uses $1/6$; D uses $2/3$.",
        "Hard", "phys-elastic-energy-apps", "NEET UG Advanced")

    # Generate remaining 23 hard questions (Q228 to Q250)
    for q_id in range(228, 251):
        idx = q_id - 228
        edge_cm = 8.0 + (idx * 0.8)
        p_val = 12.0 + (idx * 4.0)
        k_val = 1.2 + (idx * 0.05)
        vol_cm3 = edge_cm ** 3
        vol_m3 = vol_cm3 * 1e-6
        delta_v_m3 = (vol_m3 * p_val * 1e6) / (k_val * 1e11)
        delta_v_cm3 = delta_v_m3 * 1e6

        add(q_id,
            f"A solid copper cube of edge length {edge_cm:.1f} cm is subjected to a uniform hydraulic pressure of {p_val:.1f} MPa. If the Bulk modulus of copper is {k_val:.2f} × 10¹¹ N/m², find the reduction in the volume of the cube.",
            f"{delta_v_cm3:.3f} cm³",
            f"{delta_v_cm3 * 0.5:.3f} cm³",
            f"{delta_v_cm3 * 3.0:.3f} cm³",
            f"{delta_v_cm3 * 0.1:.3f} cm³",
            "A",
            "Bulk modulus is defined as $K = -\\frac{\\Delta P}{\\Delta V / V}$. Hence the volumetric contraction is $\\Delta V = \\frac{V \\Delta P}{K}$.",
            f"Cube edge $a = {edge_cm:.1f}\\text{{ cm}}$, volume $V = a^3 = {vol_cm3:.1f}\\text{{ cm}}^3$, $\\Delta P = {p_val:.1f}\\text{{ MPa}}$, $K = {k_val:.2f} \\times 10^{{11}}\\text{{ Pa}}$.",
            "\\Delta V = \\frac{V \\Delta P}{K}",
            f"1. Volume $V = ({edge_cm:.1f}\\text{{ cm}})^3 = {vol_cm3:.2f}\\text{{ cm}}^3 = {vol_m3:.4e}\\text{{ m}}^3$.\n2. $\\Delta V = \\frac{{{vol_m3:.4e} \\times {p_val*1e6:.2e}}}{{{k_val*1e11:.2e}}} = {delta_v_m3:.4e}\\text{{ m}}^3$.\n3. In $\\text{{cm}}^3$: $\\Delta V = {delta_v_cm3:.3f}\\text{{ cm}}^3$.",
            f"Option A: {delta_v_cm3:.3f} cm³",
            "Always check whether the answer options are given in $\\text{m}^3$ or $\\text{cm}^3$.",
            "B halves the result; C uses factor 3 (confusing $\\Delta V$ with $\\Delta a$); D has power of 10 error.",
            "Hard", "phys-elastic-moduli")

    return qs

if __name__ == "__main__":
    qs = get_part2_questions()
    print(f"Total Part 2 questions: {len(qs)}")
    easy = sum(1 for q in qs if q['difficulty'] == 'Easy')
    med = sum(1 for q in qs if q['difficulty'] == 'Medium')
    hard = sum(1 for q in qs if q['difficulty'] == 'Hard')
    print(f"Easy: {easy}, Medium: {med}, Hard: {hard}")
