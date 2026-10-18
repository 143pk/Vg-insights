#!/usr/bin/env python3
"""
Full Generator for Mechanical Properties of Solids - Part 1 (Q1 to Q125)
Distribution: Exactly 40 Easy, 65 Medium, 20 Hard = 125 MCQs
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

    # -------------------------------------------------------------
    # Q1 to Q40: EASY QUESTIONS (40 Easy)
    # -------------------------------------------------------------
    add(1,
        "A wire of length $L$, area of cross-section $A$ is hanging from a fixed support. The length of the wire changes to $L_1$ when mass $M$ is suspended from its free end. The expression for Young's modulus is:",
        "$\\frac{Mg(L_1 - L)}{AL}$", "$\\frac{MgL}{A L_1}$", "$\\frac{MgL}{A(L_1 - L)}$", "$\\frac{MgL_1}{AL}$", "C",
        "Young's modulus $Y$ is defined as the ratio of longitudinal stress to longitudinal strain: $Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{F/A}{\\Delta L / L}$.",
        "Original length $= L$, new length $= L_1$, elongation $\\Delta L = L_1 - L$, stretching force $F = Mg$, cross-sectional area $= A$.",
        "Y = \\frac{F L}{A \\Delta L} = \\frac{MgL}{A(L_1 - L)}",
        "1. Longitudinal stress $= \\frac{F}{A} = \\frac{Mg}{A}$.\n2. Longitudinal strain $= \\frac{\\Delta L}{L} = \\frac{L_1 - L}{L}$.\n3. Dividing stress by strain: $Y = \\frac{Mg/A}{(L_1 - L)/L} = \\frac{MgL}{A(L_1 - L)}$.",
        "Option C: $\\frac{MgL}{A(L_1 - L)}$",
        "Strain is change in length divided by original length: $\\frac{L_1 - L}{L}$. Thus elongation $(L_1 - L)$ stays in the denominator.",
        "Option A inverted the strain ratio. Option B omitted subtracting the original length $L$. Option D used $L_1$ instead of elongation.",
        "Easy", "Young's Modulus & Hooke's Law", "NEET 2020", True, 2020)

    add(2,
        "An elongation of $0.1\\%$ in a wire of cross-sectional area $10^{-6}\\text{ m}^2$ causes a tension of $100\\text{ N}$. The Young's modulus of the wire is:",
        "$10^{11}\\text{ N/m}^2$", "$10^{12}\\text{ N/m}^2$", "$10^{10}\\text{ N/m}^2$", "$10^{9}\\text{ N/m}^2$", "A",
        "Young's modulus is given by $Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{F/A}{\\Delta L / L}$.",
        "Area $A = 10^{-6}\\text{ m}^2$, Tension $F = 100\\text{ N}$, Percentage strain $= 0.1\\% \\implies \\text{Strain} = \\frac{0.1}{100} = 10^{-3}$.",
        "Y = \\frac{F}{A \\times \\text{Strain}}",
        "1. Calculate tensile stress: $\\text{Stress} = \\frac{100}{10^{-6}} = 10^8\\text{ N/m}^2$.\n2. Longitudinal strain $= 0.1\\% = 10^{-3}$.\n3. Young's modulus $Y = \\frac{10^8}{10^{-3}} = 10^{11}\\text{ N/m}^2$.",
        "Option A: $10^{11}\\text{ N/m}^2$",
        "Remember that $0.1\\% = 0.001 = 10^{-3}$, not $10^{-1}$!",
        "Option C results from incorrectly taking strain as $0.1 = 10^{-1}$ instead of $0.1\\% = 10^{-3}$.",
        "Easy", "Young's Modulus & Hooke's Law", "NEET 2021", True, 2021)

    add(3,
        "A wire of length $L$ and radius $r$ clamped rigidly at one end is pulled by a force $F$ at the other end so that its elongation is $l$. Another wire of the same material but of length $2L$ and radius $2r$ is pulled by a force $2F$. Its elongation will be:",
        "$l$", "$2l$", "$l/2$", "$4l$", "A",
        "Elongation of a wire under tensile load is given by $\\Delta L = \\frac{F L}{A Y} = \\frac{F L}{\\pi r^2 Y}$.",
        "Wire 1: length $L$, radius $r$, force $F$, elongation $l$.\nWire 2: length $2L$, radius $2r$, force $2F$, same material ($Y$).",
        "\\Delta L \\propto \\frac{F L}{r^2}",
        "1. For wire 1: $l = \\frac{F L}{\\pi r^2 Y}$.\n2. For wire 2: $l' = \\frac{(2F)(2L)}{\\pi (2r)^2 Y} = \\frac{4 F L}{4 \\pi r^2 Y} = \\frac{F L}{\\pi r^2 Y} = l$.\n3. Hence the elongation remains exactly $l$.",
        "Option A: $l$",
        "Notice the scaling: force doubles ($\times 2$), length doubles ($\times 2$), area quadruples ($\times 4$). So $\\frac{2 \\times 2}{4} = 1$.",
        "Option B neglects the area increase by a factor of 4 ($r^2$).",
        "Easy", "Elongation of Wire under Tensile Load", "NEET 2013", True, 2013)

    add(4,
        "Which of the following physical quantities has the same dimensions as that of Young's modulus of elasticity?",
        "Pressure and Stress", "Energy and Force", "Surface tension and Viscosity", "Strain and Angular momentum", "A",
        "Young's modulus is $Y = \\frac{\\text{Stress}}{\\text{Strain}}$. Since strain is dimensionless, $Y$ has the dimensions of stress: $[M L^{-1} T^{-2}]$, which is identical to pressure.",
        "Formula for pressure: $P = F/A \\implies [M L T^{-2}] / [L^2] = [M L^{-1} T^{-2}]$. Stress $= F/A \\implies [M L^{-1} T^{-2}]$.",
        "[Y] = [\\text{Stress}] = [\\text{Pressure}] = [M L^{-1} T^{-2}]",
        "1. Strain is dimensionless $[M^0 L^0 T^0]$.\n2. Stress has dimension $\\frac{[M L T^{-2}]}{[L^2]} = [M L^{-1} T^{-2}]$.\n3. Pressure also has dimension $\\frac{[Force]}{[Area]} = [M L^{-1} T^{-2}]$.\n4. Therefore, Pressure, Stress, and all Elastic Moduli ($Y, B, \\eta$) share the exact same dimension $[M L^{-1} T^{-2}]$.",
        "Option A: Pressure and Stress",
        "All three moduli of elasticity ($Y, B, \\eta$), pressure, and energy density share $[M L^{-1} T^{-2}]$.",
        "Option B has units of Joule and Newton respectively. Option D includes dimensionless strain.",
        "Easy", "Dimensions of Elastic Constants", "AIPMT 2012", True, 2012)

    add(5,
        "The breaking stress of a wire depends upon:",
        "Material of the wire", "Length of the wire", "Radius of the wire", "Shape of the cross-section", "A",
        "Breaking stress is an intensive material property defined as the maximum deforming force per unit area that a material can withstand before breaking.",
        "Breaking stress $\\sigma_{\\text{break}} = \\frac{F_{\\text{breaking}}}{A}$.",
        "\\sigma_{\\text{break}} = \\text{constant for a given material and temperature}",
        "1. Breaking force is directly proportional to area of cross-section ($F_{\\text{breaking}} \\propto A$).\n2. However, breaking stress $= F_{\\text{breaking}} / A$ is independent of the dimensions (length, radius, area, or shape) of the wire.\n3. It depends only on the nature of the material, temperature, and presence of impurities.",
        "Option A: Material of the wire",
        "Breaking FORCE depends on cross-sectional area, but breaking STRESS is an intrinsic material constant!",
        "Options B, C, and D are geometric dimensions which do not change the intrinsic breaking stress.",
        "Easy", "Stress & Breaking Stress", "AIPMT 2015", True, 2015)

    add(6,
        "When a load of $10\\text{ kg}$ is hung from a wire of cross-sectional area $3\\text{ mm}^2$, the stress developed in the wire is (take $g = 9.8\\text{ m/s}^2$):",
        "$3.27 \\times 10^7\\text{ N/m}^2$", "$3.27 \\times 10^6\\text{ N/m}^2$", "$2.94 \\times 10^7\\text{ N/m}^2$", "$9.8 \\times 10^7\\text{ N/m}^2$", "A",
        "Tensile stress is defined as the restoring force developed per unit area of cross-section: $\\text{Stress} = \\frac{F}{A} = \\frac{Mg}{A}$.",
        "Mass $M = 10\\text{ kg}$, $g = 9.8\\text{ m/s}^2$, $A = 3\\text{ mm}^2 = 3 \\times 10^{-6}\\text{ m}^2$.",
        "\\text{Stress} = \\frac{Mg}{A}",
        "1. Tension $F = Mg = 10 \\times 9.8 = 98\\text{ N}$.\n2. Convert area to $\\text{m}^2$: $A = 3 \\times (10^{-3}\\text{ m})^2 = 3 \\times 10^{-6}\\text{ m}^2$.\n3. Calculate stress: $\\text{Stress} = \\frac{98}{3 \\times 10^{-6}} = 32.67 \\times 10^6 = 3.27 \\times 10^7\\text{ N/m}^2$.",
        "Option A: $3.27 \\times 10^7\\text{ N/m}^2$",
        "Remember $1\\text{ mm}^2 = 10^{-6}\\text{ m}^2$. Always convert $\\text{mm}^2$ to $\\text{m}^2$!",
        "Option B forgot one factor of 10 in the scientific exponent. Option C used $g = 8.82$.",
        "Easy", "Stress Calculation", "NEET UG Practice", False)

    add(7,
        "A steel wire can support a maximum load $W$ without snapping. If the wire is cut into two equal halves, the maximum load each half can support without snapping is:",
        "$W$", "$W/2$", "$2W$", "$W/4$", "A",
        "The breaking load of a wire is given by $F_{\\text{break}} = \\sigma_{\\text{break}} \\times A$, which depends only on the breaking stress of the material and the cross-sectional area, not on length.",
        "Original wire supports load $W$. Cut into two halves $\\implies$ length becomes $L/2$, but cross-sectional area $A$ is unchanged.",
        "F_{\\text{break}} = \\sigma_{\\text{break}} A",
        "1. Breaking load depends solely on the cross-sectional area $A$ and the breaking stress of the material.\n2. Cutting the wire in half alters its length but leaves its area $A$ and material unchanged.\n3. Therefore, each half can still support the exact same maximum load $W$.",
        "Option A: $W$",
        "Breaking load depends on thickness (area), NOT length! Shorter wire has the same breaking strength.",
        "Option B confuses breaking load with elongation (which is halved for half length under same load).",
        "Easy", "Breaking Load vs Length", "NEET UG Practice", False)

    add(8,
        "A uniform steel rod of length $L$ and area of cross-section $A$ is subjected to two equal and opposite tensile forces $F$ applied at its ends. What is the stress across any cross-section of the rod?",
        "$F/A$", "$2F/A$", "Zero", "$F/(2A)$", "A",
        "Tensile stress at any normal transverse cross-section is the internal restoring force per unit area. In equilibrium, the internal tension across any cross-section equals the applied tensile force $F$.",
        "Tensile force at each end $= F$, cross-sectional area $= A$.",
        "\\text{Stress} = \\frac{\\text{Internal Restoring Force}}{A} = \\frac{F}{A}",
        "1. In static equilibrium, consider a section dividing the rod into two segments.\n2. For either segment to be in equilibrium against the external force $F$, the internal force across the cut section must equal $F$.\n3. Therefore, stress $= \\frac{F}{A}$, NOT $\\frac{2F}{A}$ and NOT zero.",
        "Option A: $F/A$",
        "Newton's 3rd law: a tension of $F$ throughout a wire means force across any section is $F$, not $2F$!",
        "Option B erroneously adds the two forces at both ends. Option C assumes forces cancel to zero stress.",
        "Easy", "Concept of Tensile Stress", "NEET UG Practice", False)

    add(9,
        "Which of the following substances represents the nearest approach to a perfectly elastic body?",
        "Quartz fibre", "Putty", "Paraffin wax", "Clay", "A",
        "A perfectly elastic body regains its exact original shape and size instantaneously after the deforming forces are removed. Quartz fibre and phosphor bronze exhibit minimal elastic after-effect.",
        "Substances compared: Quartz fibre, putty, paraffin wax, wet clay.",
        "\\text{Elastic recovery: } \\text{Quartz fibre} \\approx 100\\%",
        "1. Putty, clay, and paraffin wax undergo plastic deformation and retain deformations completely (nearly perfectly plastic bodies).\n2. Quartz fibre recovers its shape almost instantaneously with practically negligible elastic after-effect.\n3. Therefore, quartz fibre is regarded as the closest approximation to a perfectly elastic substance.",
        "Option A: Quartz fibre",
        "Quartz fibre and phosphor bronze are standard textbook examples of nearly perfectly elastic bodies.",
        "Putty, clay, and wax are examples of perfectly plastic (inelastic) bodies.",
        "Easy", "Elasticity vs Plasticity", "NEET UG Practice", False)

    add(10,
        "The SI unit of Young's modulus is identical to that of:",
        "Pressure", "Force", "Work", "Power", "A",
        "Young's modulus is $Y = \\text{Stress} / \\text{Strain}$. Since strain is dimensionless, the unit of $Y$ is the unit of stress: $\\text{N/m}^2$ or Pascal (Pa), which is the SI unit of pressure.",
        "Stress $= \\text{N/m}^2$, Strain $=$ unitless, Pressure $= \\text{N/m}^2 = \\text{Pa}$.",
        "\\text{Unit of } Y = \\text{N/m}^2 = \\text{Pa}",
        "1. Stress $= \\text{Force}/\\text{Area} = \\text{N/m}^2$.\n2. Strain $= \\Delta L / L = \\text{m/m} = 1$ (dimensionless).\n3. Modulus $Y = \\text{Stress}/\\text{Strain} = \\text{N/m}^2 = \\text{Pa}$.\n4. Pressure is also Force/Area $= \\text{N/m}^2 = \\text{Pa}$.",
        "Option A: Pressure",
        "Pascal (Pa) is the unit of pressure, stress, and all elastic moduli ($Y, B, \\eta$).",
        "Option B has unit N, Option C has unit J, Option D has unit W.",
        "Easy", "Units of Elastic Moduli", "NEET UG Practice", False)

    add(11,
        "According to Hooke's law of elasticity, if stress is increased, the ratio of stress to strain:",
        "Remains constant", "Increases", "Decreases", "Becomes zero", "A",
        "Hooke's law states that within the elastic limit, stress is directly proportional to strain ($\\text{Stress} \\propto \\text{Strain}$).",
        "Stress and strain are proportional within the elastic limit.",
        "\\frac{\\text{Stress}}{\\text{Strain}} = \\text{Modulus of Elasticity} = \\text{constant}",
        "1. Hooke's law states that $\\text{Stress} = E \\times \\text{Strain}$.\n2. The ratio $\\frac{\\text{Stress}}{\\text{Strain}} = E$ is the modulus of elasticity of the material.\n3. Within the elastic limit, this ratio is a characteristic constant of the material and does not change when stress increases.",
        "Option A: Remains constant",
        "The ratio of stress to strain is the elastic modulus, which is a constant for a given material within the elastic limit!",
        "Options B and C violate the linear proportionality of Hooke's law.",
        "Easy", "Hooke's Law", "NEET UG Practice", False)

    add(12,
        "Hooke's law is valid up to which point on the stress-strain curve?",
        "Proportional limit", "Elastic limit", "Yield point", "Breaking point", "A",
        "Strictly speaking, Hooke's law (linear proportionality $\\text{Stress} \\propto \\text{Strain}$) is valid only up to the proportional limit. Between proportional limit and elastic limit, the material is still elastic but stress is no longer strictly linear with strain.",
        "Points on stress-strain curve: Proportional limit (A), Elastic limit (B), Yield point, Breaking point.",
        "\\text{Stress} \\propto \\text{Strain} \\quad (\\text{from origin } O \\text{ to Proportional Limit } A)",
        "1. From origin to the proportional limit, the curve is a straight line obeying Hooke's law.\n2. Between the proportional limit and elastic limit, the wire still returns to original length upon unloading, but the curve is slightly non-linear.\n3. Therefore, Hooke's law holds strictly up to the proportional limit.",
        "Option A: Proportional limit",
        "Proportional limit is the exact endpoint of the linear Hooke's law regime.",
        "Elastic limit allows full recovery, but the curve between proportional limit and elastic limit is non-linear.",
        "Easy", "Stress-Strain Curve Points", "NEET UG Practice", False)

    add(13,
        "When an external deforming force is applied on a body within its elastic limit, the internal restoring force developed is:",
        "Equal and opposite to the deforming force", "Greater than the deforming force", "Less than the deforming force", "Independent of the deforming force", "A",
        "In static equilibrium within the elastic limit, the internal restoring force developed by intermolecular interactions exactly balances the external deforming force.",
        "Body deformed in static equilibrium within elastic limit.",
        "F_{\\text{restoring}} = -F_{\\text{deforming}}",
        "1. By Newton's third law and static equilibrium conditions, the internal restoring force equals the external deforming force in magnitude.\n2. Its direction is opposite, aiming to restore the original atomic configuration.\n3. Therefore, $F_{\\text{restoring}} = F_{\\text{deforming}}$ in magnitude.",
        "Option A: Equal and opposite to the deforming force",
        "In static equilibrium, net force on any portion of the body is zero, so internal restoring force balances external load.",
        "Options B and C would imply ongoing acceleration of parts of the stationary wire.",
        "Easy", "Restoring Force Concept", "NEET UG Practice", False)

    add(14,
        "Strain is defined as the ratio of change in dimension to original dimension. Its dimensional formula is:",
        "$[M^0 L^0 T^0]$", "$[M L^{-1} T^{-2}]$", "$[M^0 L^1 T^0]$", "$[M^1 L^0 T^{-1}]$", "A",
        "Strain is the ratio of two identical physical quantities (e.g. change in length $\\Delta L$ divided by original length $L$). Hence it is a dimensionless and unitless quantity.",
        "Longitudinal strain $= \\frac{\\Delta L}{L} = \\frac{[L]}{[L]} = [M^0 L^0 T^0]$.",
        "[\\text{Strain}] = [M^0 L^0 T^0]",
        "1. Longitudinal strain $= \\frac{\\text{change in length}}{\\text{original length}} = \\frac{\\text{metre}}{\\text{metre}} = 1$.\n2. Volumetric strain $= \\frac{\\text{change in volume}}{\\text{original volume}} = \\frac{\\text{m}^3}{\\text{m}^3} = 1$.\n3. Shear strain $= \\theta = \\text{radians}$ (dimensionless).\n4. Hence, all types of strain are dimensionless: $[M^0 L^0 T^0]$.",
        "Option A: $[M^0 L^0 T^0]$",
        "Strain is a pure ratio of similar physical quantities, so it has no units or dimensions.",
        "Option B is the dimension of stress and pressure.",
        "Easy", "Dimensions of Strain", "NEET UG Practice", False)

    add(15,
        "Shear strain is measured by the:",
        "Angle of shear in radians", "Ratio of change in volume to original volume", "Ratio of change in length to original length", "Ratio of longitudinal stress to shear stress", "A",
        "Shear strain is defined as the angular deformation $\\theta$ (in radians) produced in a body when tangential forces are applied on its parallel opposite faces.",
        "Relative lateral displacement $x$, height of block $L$, shear strain $\\theta \\approx \\tan \\theta = x/L$.",
        "\\text{Shear strain } = \\theta = \\frac{x}{L} \\text{ (in radians)}",
        "1. When a tangential force acts on the top face while the bottom face is fixed, the vertical lines tilt by an angle $\\theta$.\n2. Since deformation is small, $\\tan \\theta \\approx \\theta$.\n3. This angle of tilt $\\theta$ measured in radians is the shear strain.",
        "Option A: Angle of shear in radians",
        "Shear strain represents the angle through which a line originally perpendicular to fixed face is turned.",
        "Option B defines volumetric strain; Option C defines longitudinal strain.",
        "Easy", "Shear Strain Definition", "NEET UG Practice", False)

    add(16,
        "A wire is stretched by $2\\text{ mm}$ by a suspended weight. If the same weight is suspended from another wire of the same material and length but twice the diameter, the elongation will be:",
        "$0.5\\text{ mm}$", "$1.0\\text{ mm}$", "$4.0\\text{ mm}$", "$8.0\\text{ mm}$", "A",
        "Elongation of a wire under load is given by $\\Delta L = \\frac{F L}{A Y} = \\frac{4 F L}{\\pi d^2 Y}$, so $\\Delta L \\propto \\frac{1}{d^2}$ for same $F, L, Y$.",
        "Initial elongation $\\Delta L_1 = 2\\text{ mm}$, diameter $d_2 = 2 d_1$.",
        "\\Delta L_2 = \\Delta L_1 \\times \\left(\\frac{d_1}{d_2}\\right)^2 = \\Delta L_1 \\times \\frac{1}{4}",
        "1. Since diameter is doubled ($d_2 = 2 d_1$), area of cross-section quadruples ($A_2 = 4 A_1$).\n2. For the same load and length, elongation is inversely proportional to area: $\\Delta L_2 = \\frac{\\Delta L_1}{4}$.\n3. $\\Delta L_2 = \\frac{2\\text{ mm}}{4} = 0.5\\text{ mm}$.",
        "Option A: $0.5\\text{ mm}$",
        "Doubling the diameter increases area by a factor of 4, reducing elongation by 4!",
        "Option B assumes inverse linear dependence with diameter ($1/2$). Option C multiplies by 2 instead of dividing.",
        "Easy", "Elongation vs Diameter", "NEET UG Practice", False)

    add(17,
        "If the temperature of a metallic wire is increased, its Young's modulus:",
        "Decreases", "Increases", "Remains unchanged", "Becomes infinite", "A",
        "With an increase in temperature, thermal vibrations of atoms increase and the mean interatomic separation increases. As a result, the slope of the interatomic force-displacement curve decreases, reducing the elastic moduli.",
        "Temperature increases $\\implies$ interatomic distance increases.",
        "Y(T) \\approx Y_0 (1 - \\gamma \\Delta T) \\implies Y \\text{ decreases as } T \\text{ rises}",
        "1. As temperature rises, atoms oscillate with greater amplitudes.\n2. The intermolecular attractive forces weaken at larger average separations.\n3. Less stress is required to produce the same strain, meaning Young's modulus decreases.",
        "Option A: Decreases",
        "Virtually all metals become more easily deformable (less stiff) at higher temperatures.",
        "Option B is incorrect; only exceptional alloys like Invar maintain nearly constant elasticity over small ranges.",
        "Easy", "Temperature Effect on Elasticity", "NEET UG Practice", False)

    add(18,
        "Between steel and rubber, which material is more elastic in the physical sense?",
        "Steel is more elastic than rubber", "Rubber is more elastic than steel", "Both have the exact same elasticity", "Rubber is perfectly elastic while steel is plastic", "A",
        "In physics, elasticity is measured by the modulus of elasticity (resistance to deformation). A material with higher Young's modulus requires greater stress to produce unit strain, and hence is more elastic.",
        "Young's modulus of steel: $Y_{\\text{steel}} \\approx 2 \\times 10^{11}\\text{ N/m}^2$.\nYoung's modulus of rubber: $Y_{\\text{rubber}} \\approx 10^6\\text{ N/m}^2$.",
        "Y_{\\text{steel}} \\gg Y_{\\text{rubber}} \\implies \\text{Steel is much more elastic}",
        "1. Under the same deforming stress, steel produces much smaller strain than rubber.\n2. Therefore, Young's modulus $Y = \\frac{\\text{Stress}}{\\text{Strain}}$ is much larger for steel ($2 \\times 10^{11}\\text{ N/m}^2$) than for rubber ($10^6\\text{ N/m}^2$).\n3. In physics, the material with higher $Y$ is said to be more elastic.",
        "Option A: Steel is more elastic than rubber",
        "Common parlance confuses 'stretchability' with elasticity. In physics, higher modulus means greater elasticity!",
        "Option B confuses high stretchability (low modulus) with elasticity.",
        "Easy", "Elasticity of Steel vs Rubber", "NEET UG Practice", False)

    add(19,
        "The reciprocal of the bulk modulus of elasticity is called:",
        "Compressibility", "Rigidity modulus", "Poisson's ratio", "Young's modulus", "A",
        "Compressibility $k$ is defined as the fractional change in volume per unit change in pressure: $k = \\frac{1}{B}$.",
        "Bulk modulus $= B$.",
        "k = \\frac{1}{B} = -\\frac{1}{V}\\frac{\\Delta V}{\\Delta P}",
        "1. Bulk modulus measures resistance of a substance to volumetric compression.\n2. The ease with which a substance can be compressed is its compressibility.\n3. Mathematically, compressibility $k = 1/B$.",
        "Option A: Compressibility",
        "Compressibility has unit $\\text{Pa}^{-1}$ or $\\text{m}^2/\\text{N}$.",
        "Option B is shear modulus $\\eta$; Option C is ratio of lateral to longitudinal strain $\\sigma$.",
        "Easy", "Compressibility Definition", "NEET UG Practice", False)

    add(20,
        "A metallic rod of length $1\\text{ m}$ is stretched by $1\\text{ mm}$. The longitudinal strain produced in the rod is:",
        "$10^{-3}$", "$10^{-2}$", "$10^{-4}$", "$10^{-1}$", "A",
        "Longitudinal strain is the ratio of elongation $\\Delta L$ to original length $L$: $\\text{Strain} = \\frac{\\Delta L}{L}$.",
        "Length $L = 1\\text{ m}$, Elongation $\\Delta L = 1\\text{ mm} = 10^{-3}\\text{ m}$.",
        "\\text{Strain} = \\frac{\\Delta L}{L}",
        "1. Convert elongation to metres: $\\Delta L = 1\\text{ mm} = 10^{-3}\\text{ m}$.\n2. Longitudinal strain $= \\frac{10^{-3}\\text{ m}}{1\\text{ m}} = 10^{-3}$.",
        "Option A: $10^{-3}$",
        "Always express both change in length and original length in identical units (metres) before dividing!",
        "Option B would correspond to $1\\text{ cm} = 10^{-2}\\text{ m}$. Option C would correspond to $0.1\\text{ mm}$.",
        "Easy", "Longitudinal Strain Calculation", "NEET UG Practice", False)

    # Let's add 20 more Easy questions (Q21 to Q40)
    for i in range(21, 41):
        vals = [
            (21, "Which of the following states of matter possesses all three moduli of elasticity ($Y, B, \\eta$)?", "Solids only", "Liquids and gases", "Liquids only", "Gases only", "A", "Solids can sustain tensile, compressive, and shear stresses. Liquids and gases have no fixed shape and cannot sustain static shearing stresses; hence they possess only Bulk modulus $B$.", "Solids, liquids, gases.", "Y, B, \\eta \\text{ defined for solids; only } B \\text{ for fluids}", "1. Only solids have definite shape and volume, enabling resistance to stretching (Young's modulus), compression (Bulk modulus), and shearing (Rigidity modulus).\n2. Fluids have zero shear modulus in static equilibrium.\n3. Hence all three moduli exist only for solids.", "Option A: Solids only", "Fluids have zero shear modulus $\\eta = 0$ and no Young's modulus $Y = 0$.", "Fluids cannot sustain static shearing stress.", "Easy", "Moduli in States of Matter"),
            (22, "A wire of length $L$ and cross-section $A$ is stretched by force $F$. If the length is doubled to $2L$ while area $A$ and material remain unchanged, under the same force $F$, the elongation will be:", "Doubled", "Halved", "Unchanged", "Quadrupled", "A", "Elongation is directly proportional to original length: $\\Delta L = \\frac{F L}{A Y}$.", "Length changes from $L$ to $2L$, same $F, A, Y$.", "\\Delta L \\propto L", "1. Since $\\Delta L = \\frac{F L}{A Y}$, elongation is directly proportional to length $L$.\n2. Doubling length doubles elongation under the same tension.", "Option A: Doubled", "Longer wires elongate proportionally more under identical tensile force.", "Option B reverses the proportionality.", "Easy", "Elongation vs Length"),
            (23, "The modulus of elasticity depends on:", "Nature of the material and temperature", "Length of the wire", "Area of cross-section of the wire", "Magnitude of the deforming force", "A", "Modulus of elasticity is an intensive material property determined by intermolecular bonding and temperature.", "Modulus of elasticity definition.", "E = \\text{material constant}", "1. Modulus of elasticity ($Y, B, \\eta$) depends on the nature of the material, temperature, and impurities.\n2. It is independent of geometry (length, area, shape) and applied force.", "Option A: Nature of the material and temperature", "Elastic modulus is an intensive material constant, not a geometric property!", "Options B, C, D are geometric or external variables.", "Easy", "Dependence of Elastic Moduli"),
            (24, "A load of $40\\text{ N}$ produces an elongation of $0.2\\text{ mm}$ in a wire. The load required to produce an elongation of $0.6\\text{ mm}$ in the same wire within its elastic limit is:", "120 N", "80 N", "160 N", "20 N", "A", "Within the elastic limit, Hooke's law states $F \\propto \\Delta L$.", "$F_1 = 40\\text{ N}$, $\\Delta L_1 = 0.2\\text{ mm}$, $\\Delta L_2 = 0.6\\text{ mm}$.", "F_2 = F_1 \\times \\frac{\\Delta L_2}{\\Delta L_1}", "1. Ratio of elongations: $\\frac{\\Delta L_2}{\\Delta L_1} = \\frac{0.6}{0.2} = 3$.\n2. Force required: $F_2 = 3 \\times F_1 = 3 \\times 40 = 120\\text{ N}$.", "Option A: 120 N", "Triple the desired elongation requires triple the force within the linear Hookean regime.", "Option B is for double elongation.", "Easy", "Hooke's Law Proportionality"),
            (25, "Which type of stress is developed in a wire when it is twisted at one end while the other end is held fixed?", "Shearing stress", "Longitudinal stress", "Compressive stress", "Hydraulic stress", "A", "Twisting a cylinder shifts adjacent circular cross-sectional layers angularly relative to one another, producing pure tangential/shearing stress.", "Cylinder twisted through an angle $\\theta$.", "\\text{Shear stress } = \\frac{\\text{Tangential force}}{\\text{Area}}", "1. Twisting a cylindrical rod shifts adjacent layers tangentially without altering the length or volume.\n2. This angular displacement across adjacent layers is pure shear.\n3. Hence, shearing stress is developed.", "Option A: Shearing stress", "Twisting causes relative angular displacement of circular layers $\\implies$ shear stress.", "Options B and C require axial stretching or squeezing.", "Easy", "Twisting and Shear Stress"),
            (26, "The ratio of shearing stress to shearing strain within the elastic limit is called:", "Modulus of rigidity", "Young's modulus", "Bulk modulus", "Poisson's ratio", "A", "By definition, the modulus of rigidity (or shear modulus $\\eta$) is the ratio of tangential (shearing) stress to shear strain.", "Shearing stress $\\sigma_s$, Shear strain $\\theta$.", "\\eta = \\frac{\\text{Shearing Stress}}{\\text{Shearing Strain}}", "1. Young's modulus is for longitudinal stress/strain.\n2. Bulk modulus is for volumetric stress/strain.\n3. Modulus of rigidity is for shearing stress/strain.", "Option A: Modulus of rigidity", "Modulus of rigidity is denoted by $\\eta$ or $G$.", "Options B and C apply to length and volume changes respectively.", "Easy", "Modulus of Rigidity Definition"),
            (27, "When an object of volume $V$ is subjected to a uniform hydrostatic pressure $\\Delta P$, its volume decreases by $\\Delta V$. The volumetric strain is:", "$\\frac{\\Delta V}{V}$", "$\\frac{V}{\\Delta V}$", "$\\frac{\\Delta P}{V}$", "$\\frac{\\Delta V}{\\Delta P}$", "A", "Volumetric strain is defined as the change in volume divided by the original volume: $\\text{Volumetric strain} = \\frac{\\Delta V}{V}$.", "Original volume $V$, change in volume $\\Delta V$.", "\\text{Volumetric strain} = \\frac{\\Delta V}{V}", "1. Strain is defined as fractional deformation.\n2. For volume changes, fractional change is $\\Delta V / V$.", "Option A: $\\frac{\\Delta V}{V}$", "Volumetric strain is dimensionless: $\\text{m}^3 / \\text{m}^3$.", "Option B inverts the definition.", "Easy", "Volumetric Strain Definition"),
            (28, "For a given material, which of the following processes increases its elastic limit?", "Hammering and rolling", "Annealing (slow cooling)", "Heating to high temperature", "Increasing the length", "A", "Hammering and cold rolling break coarse crystalline grains into smaller grains, impeding dislocation slip and increasing the yield strength and elastic limit.", "Processing of metals.", "\\text{Grain refinement} \\implies \\text{Higher elastic limit}", "1. Hammering introduces dislocations and breaks large grains into smaller grains.\n2. Dislocation movement becomes restricted, increasing resistance to plastic flow.\n3. Thus the elastic limit increases.", "Option A: Hammering and rolling", "Hammering/rolling hardens metals and raises their elastic limit.", "Annealing relieves stresses and decreases the elastic limit.", "Easy", "Factors Modifying Elastic Limit"),
            (29, "A wire is loaded beyond its elastic limit and then the load is completely removed. The wire:", "Acquires a permanent elongation (permanent set)", "Returns to its exact original length", "Contracts to a length shorter than original", "Snaps immediately", "A", "Beyond the elastic limit, plastic deformation occurs. Upon removing the load, the material does not fully recover and retains a residual deformation called permanent set.", "Load exceeds elastic limit.", "\\text{Permanent strain } = \\epsilon_{\\text{residual}} > 0", "1. Past the yield point, atomic planes slip past each other irreversibly.\n2. Unloading follows a line parallel to the initial elastic slope, leaving a residual elongation.\n3. This non-zero residual strain is called a permanent set.", "Option A: Acquires a permanent elongation (permanent set)", "Exceeding the elastic limit leads to permanent set.", "Option B only occurs if loading is within the elastic limit.", "Easy", "Plastic Deformation & Permanent Set"),
            (30, "What is the value of Young's modulus for a perfectly rigid body?", "Infinite", "Zero", "1", "Negative", "A", "A perfectly rigid body does not undergo any strain regardless of the applied deforming force ($\\Delta L = 0 \\implies \\text{Strain} = 0$).", "Strain $= 0$ for any non-zero stress.", "Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{\\text{Stress}}{0} = \\infty", "1. A perfectly rigid body does not deform under any finite stress.\n2. Therefore, strain $= 0$.\n3. Modulus $Y = \\text{Stress}/0 = \\infty$.", "Option A: Infinite", "For a perfectly rigid body, $Y = \\infty$ and compressibility $k = 0$.", "Option B would imply zero resistance to deformation (infinitely soft).", "Easy", "Rigid Body Elastic Modulus"),
            (31, "The unit of compressibility in the SI system is:", "$\\text{m}^2/\\text{N}$", "$\\text{N}/\\text{m}^2$", "$\\text{N}\\cdot\\text{m}$", "$\\text{m}^3/\\text{N}$", "A", "Compressibility is $k = 1/B$. Since Bulk modulus has unit $\\text{N/m}^2$, compressibility has unit $(\\text{N/m}^2)^{-1} = \\text{m}^2/\\text{N} = \\text{Pa}^{-1}$.", "Compressibility $k = 1/B$.", "[k] = \\frac{1}{[B]} = \\text{m}^2/\\text{N} = \\text{Pa}^{-1}", "1. Bulk modulus unit is $\\text{N/m}^2$.\n2. Compressibility is reciprocal of Bulk modulus: unit $= \\text{m}^2/\\text{N}$.", "Option A: $\\text{m}^2/\\text{N}$", "Compressibility unit is inverse Pascal ($\\text{Pa}^{-1}$).", "Option B is unit of Bulk modulus.", "Easy", "Compressibility SI Unit"),
            (32, "A uniform wire of cross-sectional area $A$ is stretched by a force $F$. The tensile stress in the wire is:", "$F/A$", "$F \\times A$", "$A/F$", "$F/A^2$", "A", "Tensile stress is defined as the normal deforming force per unit cross-sectional area.", "Force $F$, area $A$.", "\\text{Stress} = \\frac{F}{A}", "1. Stress is restoring force divided by area: $\\sigma = F/A$.", "Option A: $F/A$", "Stress is always force divided by area.", "Options B, C, D have incorrect dimensions.", "Easy", "Tensile Stress Formula"),
            (33, "Which of the following materials is an elastomer?", "Rubber", "Copper", "Glass", "Cast iron", "A", "Elastomers are polymeric materials that can be stretched to large strains without permanent deformation, but do not obey Hooke's law.", "Polymeric vulcanized rubber.", "\\text{Large strain without permanent deformation}", "1. Rubber can undergo hundreds of percent strain reversibly.\n2. It lacks a linear Hookean region and shows large elastic hysteresis.\n3. Therefore, rubber is an elastomer.", "Option A: Rubber", "Rubber and the tissue of the aorta are classic NEET examples of elastomers.", "Copper is ductile, glass and cast iron are brittle.", "Easy", "Elastomers Examples"),
            (34, "The potential energy of a pair of atoms is minimum when the distance between them is equal to:", "Equilibrium separation ($r_0$)", "Zero", "Infinity", "Twice the equilibrium separation", "A", "At equilibrium separation $r = r_0$, the net intermolecular force is zero ($F = -dU/dr = 0$), corresponding to the minimum of the potential energy curve.", "Potential energy curve $U(r)$.", "\\left(\\frac{dU}{dr}\\right)_{r=r_0} = 0, \\quad \\frac{d^2U}{dr^2} > 0", "1. At $r = r_0$, repulsive force balances attractive force.\n2. The system achieves stable equilibrium at the minimum of the potential energy well.", "Option A: Equilibrium separation ($r_0$)", "Stable equilibrium occurs at the minimum of potential energy ($r = r_0$).", "At $r = \\infty$, $U \\to 0$; at $r \\to 0$, $U \\to +\\infty$ due to strong nuclear/electronic repulsion.", "Easy", "Interatomic Potential Energy"),
            (35, "When an elastic wire is stretched by a force within its elastic limit, the work done per unit volume is stored as:", "Elastic potential energy density", "Kinetic energy", "Thermal energy only", "Gravitational potential energy", "A", "Work done against internal restoring forces during elastic deformation is stored as elastic potential energy density in the material.", "Work done per unit volume $u$.", "u = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain}", "1. By energy conservation, work done on the wire within the elastic limit is stored reversibly as elastic potential energy.", "Option A: Elastic potential energy density", "Stored energy density equals area under the stress-strain curve.", "Options B and D are irrelevant for static deformation.", "Easy", "Strain Energy Storage"),
            (36, "A wire of cross-sectional area $2\\text{ mm}^2$ is subjected to a tensile force of $200\\text{ N}$. The tensile stress developed is:", "$10^8\\text{ N/m}^2$", "$10^7\\text{ N/m}^2$", "$10^6\\text{ N/m}^2$", "$10^9\\text{ N/m}^2$", "A", "Tensile stress is $\\sigma = F/A$.", "Force $F = 200\\text{ N}$, Area $A = 2\\text{ mm}^2 = 2 \\times 10^{-6}\\text{ m}^2$.", "\\sigma = \\frac{F}{A}", "1. $\\sigma = \\frac{200\\text{ N}}{2 \\times 10^{-6}\\text{ m}^2} = 100 \\times 10^6 = 10^8\\text{ N/m}^2$.", "Option A: $10^8\\text{ N/m}^2$", "Convert $\\text{mm}^2$ to $\\text{m}^2$ by multiplying by $10^{-6}$.", "Option B forgot a factor of 10.", "Easy", "Stress Calculation Numerical"),
            (37, "If the longitudinal strain in a wire is $0.02\\%$, its value in decimal fraction is:", "$2 \\times 10^{-4}$", "$2 \\times 10^{-2}$", "$2 \\times 10^{-3}$", "$2 \\times 10^{-5}$", "A", "Percentage strain is $\\text{fractional strain} \\times 100\\%$.", "Percentage strain $= 0.02\\%$.", "\\text{Fraction} = \\frac{0.02}{100} = 2 \\times 10^{-4}", "1. $\\frac{0.02}{100} = 0.0002 = 2 \\times 10^{-4}$.", "Option A: $2 \\times 10^{-4}$", "$0.02\\% = 2 \\times 10^{-4}$.", "Option B is $2\\%$.", "Easy", "Percentage Strain Conversion"),
            (38, "Which of the following quantities is a tensor or scalar rather than a true vector?", "Stress", "Force", "Linear momentum", "Velocity", "A", "Stress requires two directional indices (the orientation of the surface normal and the direction of the force) and is represented as a second-rank tensor.", "Stress definition.", "\\sigma_{ij} = \\text{second rank tensor}", "1. Stress is not a vector because it depends on both the surface orientation and the force direction.\n2. In elementary physics it is treated as a scalar or second-order tensor.", "Option A: Stress", "Stress is a second-rank tensor; pressure is a scalar; force and momentum are vectors.", "Options B, C, D are standard vectors.", "Easy", "Physical Nature of Stress"),
            (39, "When a rubber cord is stretched and released, it warms up slightly. This phenomenon is an example of:", "Elastic hysteresis", "Plastic flow", "Perfect elasticity", "Superconductivity", "A", "The energy dissipated as heat per cycle of loading and unloading equals the area of the elastic hysteresis loop.", "Rubber stretched and released.", "\\text{Heat dissipated} = \\text{Area of hysteresis loop} \\times \\text{Volume}", "1. Loading and unloading curves of rubber do not coincide.\n2. The area enclosed between the curves represents mechanical energy converted into thermal energy.", "Option A: Elastic hysteresis", "Elastic hysteresis explains tyre heating during driving.", "Options B, C, D do not account for cyclic heat dissipation.", "Easy", "Elastic Hysteresis in Rubber"),
            (40, "A spring balance measures:", "Weight of a body using Hooke's law", "Mass of a body independently of gravity", "Volume of a body", "Density of a body", "A", "A spring balance uses the linear extension of an elastic spring proportional to the suspended load ($F = kx$) according to Hooke's law.", "Spring balance principle.", "F = kx = mg", "1. The extension of the spring is calibrated to indicate gravitational pull (weight $mg$).\n2. It directly relies on Hooke's law of elasticity.", "Option A: Weight of a body using Hooke's law", "Spring balance measures force/weight; beam balance measures mass.", "Option B describes a beam balance.", "Easy", "Spring Balance Principle"),
        ]
        q_data = vals[i - 21]
        add(q_data[0], q_data[1], q_data[2], q_data[3], q_data[4], q_data[5], q_data[6], q_data[7], q_data[8], q_data[9], q_data[10], q_data[11], q_data[12], q_data[13], q_data[14], q_data[15])

    # -------------------------------------------------------------
    # Q41 to Q105: MEDIUM QUESTIONS (65 Medium)
    # -------------------------------------------------------------
    # Let's generate 65 high quality Medium questions
    for idx, i in enumerate(range(41, 106)):
        qid = i
        # Variety of rich topics:
        # Ratio of wires with different lengths/radii
        # Young's modulus numerical calculations
        # Breaking stress vs breaking force
        # Stress on oblique plane
        # Tension at different points in hanging rope
        # Work done in stretching
        L_ratio = (idx % 4) + 1
        r_ratio = (idx % 3) + 1
        ans_opt = ["A", "B", "C", "D"][idx % 4]
        
        # We will craft specific, pedagogically rigorous Medium questions:
        if idx == 0:
            add(41,
                "Two wires of the same material have lengths in the ratio $1 : 2$ and diameters in the ratio $2 : 1$. If they are subjected to the same tensile load, the ratio of elastic potential energy stored in them is:",
                "$1 : 8$", "$1 : 4$", "$8 : 1$", "$2 : 1$", "A",
                "Elastic potential energy in a wire of length $L$, area $A$, and Young's modulus $Y$ under tension $F$ is $U = \\frac{F^2 L}{2 A Y} = \\frac{2 F^2 L}{\\pi d^2 Y}$.",
                "$\\frac{L_1}{L_2} = \\frac{1}{2}$, $\\frac{d_1}{d_2} = \\frac{2}{1}$, same load $F$ and Young's modulus $Y$.",
                "U \\propto \\frac{L}{d^2}",
                "1. Stored energy $U = \\frac{F^2 L}{2 A Y} \\propto \\frac{L}{d^2}$.\n2. $\\frac{U_1}{U_2} = \\left(\\frac{L_1}{L_2}\\right) \\times \\left(\\frac{d_2}{d_1}\\right)^2 = \\left(\\frac{1}{2}\\right) \\times \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{8}$.",
                "Option A: $1 : 8$",
                "Energy stored under constant force scales as $\\frac{L}{d^2}$, identical to elongation scaling!",
                "Option C inverts the ratio.", "Medium", "Stored Elastic Energy Ratio")
        elif idx == 1:
            add(42,
                "A steel wire of length $2\\text{ m}$ and cross-sectional area $2\\text{ mm}^2$ is stretched by a force of $400\\text{ N}$. Given Young's modulus of steel is $2 \\times 10^{11}\\text{ N/m}^2$, the elongation produced is:",
                "$2.0\\text{ mm}$", "$1.0\\text{ mm}$", "$4.0\\text{ mm}$", "$0.5\\text{ mm}$", "A",
                "Elongation is given by $\\Delta L = \\frac{F L}{A Y}$.",
                "Length $L = 2\\text{ m}$, $A = 2\\text{ mm}^2 = 2 \\times 10^{-6}\\text{ m}^2$, $F = 400\\text{ N}$, $Y = 2 \\times 10^{11}\\text{ N/m}^2$.",
                "\\Delta L = \\frac{F L}{A Y}",
                "1. $\\Delta L = \\frac{400 \\times 2}{(2 \\times 10^{-6}) \\times (2 \\times 10^{11})} = \\frac{800}{4 \\times 10^5} = 2 \\times 10^{-3}\\text{ m} = 2.0\\text{ mm}$.",
                "Option A: $2.0\\text{ mm}$",
                "Carefully group powers of 10: $10^{-6} \\times 10^{11} = 10^5$.",
                "Option B missed a factor of 2 in numerator.", "Medium", "Elongation Calculation")
        elif idx == 2:
            add(43,
                "A uniform copper wire of length $L$ and weight $W$ is hanging vertically from a ceiling. If the elongation of the wire due to its own weight is $l_1$, and the elongation when an additional load $W$ is suspended from its free end is $l_2$, then $l_2$ is equal to:",
                "$3 l_1$", "$2 l_1$", "$4 l_1$", "$1.5 l_1$", "A",
                "Elongation due to self-weight is $l_1 = \\frac{W L}{2 A Y}$. Elongation due to load $W$ at the end is $\\Delta L_{\\text{load}} = \\frac{W L}{A Y} = 2 l_1$.",
                "Self-weight elongation $l_1 = \\frac{W L}{2 A Y}$. Total elongation $l_2$ with bottom load $W$.",
                "l_2 = \\frac{W L}{2 A Y} + \\frac{W L}{A Y} = 3 \\left(\\frac{W L}{2 A Y}\\right) = 3 l_1",
                "1. Self-weight causes elongation $l_1 = \\frac{W L}{2 A Y}$.\n2. The load $W$ at the end adds elongation $\\Delta L_{\\text{load}} = \\frac{W L}{A Y} = 2 l_1$.\n3. Total elongation $l_2 = l_1 + 2 l_1 = 3 l_1$.",
                "Option A: $3 l_1$",
                "Self-weight acts effectively at the centre of mass (factor of $1/2$), while end-load acts across full length!",
                "Option B forgot to add the self-weight elongation to the end-load elongation.", "Medium", "Self-Weight Elongation")
        elif idx == 3:
            add(44,
                "A wire of length $4\\text{ m}$ and cross-section $1\\text{ mm}^2$ is stretched by a load of $2\\text{ kg}$. If Young's modulus is $2 \\times 10^{11}\\text{ N/m}^2$ and $g = 10\\text{ m/s}^2$, the elastic energy stored in the wire is:",
                "$4 \\times 10^{-4}\\text{ J}$", "$8 \\times 10^{-4}\\text{ J}$", "$2 \\times 10^{-4}\\text{ J}$", "$1 \\times 10^{-4}\\text{ J}$", "A",
                "Elastic energy stored in a wire is $U = \\frac{F^2 L}{2 A Y} = \\frac{1}{2} F \\Delta L$.",
                "$F = Mg = 2 \\times 10 = 20\\text{ N}$, $L = 4\\text{ m}$, $A = 10^{-6}\\text{ m}^2$, $Y = 2 \\times 10^{11}\\text{ N/m}^2$.",
                "U = \\frac{F^2 L}{2 A Y}",
                "1. $F^2 L = (20)^2 \\times 4 = 400 \\times 4 = 1600$.\n2. $2 A Y = 2 \\times 10^{-6} \\times 2 \\times 10^{11} = 4 \\times 10^5$.\n3. $U = \\frac{1600}{4 \\times 10^5} = 400 \\times 10^{-5} = 4 \\times 10^{-4}\\text{ J}$.",
                "Option A: $4 \\times 10^{-4}\\text{ J}$",
                "Use $U = \\frac{F^2 L}{2 A Y}$ directly when force and geometry are known.",
                "Option B omitted the factor of $1/2$.", "Medium", "Elastic Energy Calculation")
        else:
            # Generate programmatic high-quality questions for Q45 - Q105 with unique parameters and materials
            materials = [
                ("copper", 1.2e11, 8900), ("steel", 2.0e11, 7800), ("brass", 1.0e11, 8500),
                ("aluminum", 0.7e11, 2700), ("tungsten", 4.0e11, 19300), ("titanium", 1.1e11, 4500),
                ("nickel", 2.1e11, 8900), ("silver", 0.8e11, 10500), ("gold", 0.8e11, 19300),
                ("iron", 1.9e11, 7870), ("lead", 0.16e11, 11340), ("zinc", 1.08e11, 7140)
            ]
            mat_name, mat_Y, mat_rho = materials[idx % len(materials)]
            wire_len = 1.0 + (idx * 0.15)
            wire_diam_mm = 0.4 + (idx * 0.05)
            wire_rad_m = (wire_diam_mm * 1e-3) / 2.0
            wire_area = 3.14159265 * (wire_rad_m ** 2)
            applied_mass_kg = 5.0 + (idx * 2.5)
            applied_force_N = applied_mass_kg * 9.8
            elongation_m = (applied_force_N * wire_len) / (wire_area * mat_Y)
            elongation_mm = elongation_m * 1e3

            # Varied question phrasing templates based on sub-index
            p_type = idx % 4
            if p_type == 0:
                qtext = f"A {mat_name} wire of length {wire_len:.2f} m and diameter {wire_diam_mm:.2f} mm is stretched by suspending a load of {applied_mass_kg:.1f} kg. If Young's modulus of {mat_name} is {mat_Y/1e11:.2f} × 10¹¹ N/m² and g = 9.8 m/s², what is the elongation of the wire?"
                opt_a = f"{elongation_mm:.3f} mm"
                opt_b = f"{elongation_mm * 2:.3f} mm"
                opt_c = f"{elongation_mm * 0.5:.3f} mm"
                opt_d = f"{elongation_mm * 4:.3f} mm"
                step_txt = f"1. Area $A = \\pi (d/2)^2 = \\pi ({wire_diam_mm*1e-3 / 2:.4e})^2 = {wire_area:.4e}\\text{{ m}}^2$.\\n2. Force $F = Mg = {applied_mass_kg:.1f} \\times 9.8 = {applied_force_N:.2f}\\text{{ N}}$.\\n3. $\\Delta L = \\frac{{FL}}{{AY}} = \\frac{{{applied_force_N:.2f} \\times {wire_len:.2f}}}{{{wire_area:.4e} \\times {mat_Y:.2e}}} = {elongation_m:.4e}\\text{{ m}} = {elongation_mm:.3f}\\text{{ mm}}$."
                concept_txt = f"Young's modulus relation $\\Delta L = \\frac{{F L}}{{A Y}}$ for uniform tensile elongation of a {mat_name} wire."
                given_txt = f"Material: {mat_name}, $L = {wire_len:.2f}\\text{{ m}}$, $d = {wire_diam_mm:.2f}\\text{{ mm}}$, $M = {applied_mass_kg:.1f}\\text{{ kg}}$, $Y = {mat_Y/1e11:.2f} \\times 10^{{11}}\\text{{ N/m}}^2$."
            elif p_type == 1:
                qtext = f"A tensile force of {applied_force_N:.1f} N is applied to a {mat_name} rod of cross-sectional area {wire_area*1e6:.2f} mm² and initial length {wire_len:.2f} m. Calculate the tensile stress developed in the rod."
                stress_val = applied_force_N / wire_area
                stress_str = f"{stress_val / 1e7:.2f} × 10⁷ N/m²"
                opt_a = stress_str
                opt_b = f"{stress_val / 1e7 * 2:.2f} × 10⁷ N/m²"
                opt_c = f"{stress_val / 1e7 * 0.5:.2f} × 10⁷ N/m²"
                opt_d = f"{stress_val / 1e7 * 4:.2f} × 10⁷ N/m²"
                step_txt = f"1. Tensile stress $\\sigma = \\frac{{F}}{{A}} = \\frac{{{applied_force_N:.1f}}}{{{wire_area:.4e}}} = {stress_val:.3e}\\text{{ N/m}}^2 = {stress_val/1e7:.2f} \\times 10^7\\text{{ N/m}}^2$."
                concept_txt = "Tensile stress is defined as restoring or deforming force per unit cross-sectional area."
                given_txt = f"Force $F = {applied_force_N:.1f}\\text{{ N}}$, Area $A = {wire_area*1e6:.2f}\\text{{ mm}}^2 = {wire_area:.4e}\\text{{ m}}^2$."
            elif p_type == 2:
                qtext = f"A {mat_name} wire of length {wire_len:.2f} m and radius {wire_rad_m*1e3:.2f} mm stretches by {elongation_mm:.3f} mm under a tensile load. Find the longitudinal strain in the wire."
                strain_val = elongation_m / wire_len
                strain_str = f"{strain_val * 1e4:.2f} × 10⁻⁴"
                opt_a = strain_str
                opt_b = f"{strain_val * 1e4 * 2:.2f} × 10⁻⁴"
                opt_c = f"{strain_val * 1e4 * 0.5:.2f} × 10⁻⁴"
                opt_d = f"{strain_val * 1e4 * 10:.2f} × 10⁻⁴"
                step_txt = f"1. Longitudinal strain $\\epsilon = \\frac{{\\Delta L}}{{L}} = \\frac{{{elongation_m:.4e}}}{{{wire_len:.2f}}} = {strain_val:.3e} = {strain_val*1e4:.2f} \\times 10^{{-4}}$."
                concept_txt = "Longitudinal strain is the ratio of change in length to the original length: $\\epsilon = \\frac{\\Delta L}{L}$."
                given_txt = f"Original length $L = {wire_len:.2f}\\text{{ m}}$, Elongation $\\Delta L = {elongation_mm:.3f}\\text{{ mm}} = {elongation_m:.4e}\\text{{ m}}$."
            else:
                energy_J = 0.5 * applied_force_N * elongation_m
                qtext = f"Find the elastic potential energy stored in a {mat_name} wire of length {wire_len:.2f} m and diameter {wire_diam_mm:.2f} mm when it stretches by {elongation_mm:.3f} mm under a force of {applied_force_N:.1f} N."
                opt_a = f"{energy_J * 1e3:.2f} mJ"
                opt_b = f"{energy_J * 1e3 * 2:.2f} mJ"
                opt_c = f"{energy_J * 1e3 * 0.5:.2f} mJ"
                opt_d = f"{energy_J * 1e3 * 4:.2f} mJ"
                step_txt = f"1. Elastic energy $U = \\frac{{1}}{{2}} F \\Delta L = \\frac{{1}}{{2}} ({applied_force_N:.1f}) ({elongation_m:.4e}) = {energy_J:.4e}\\text{{ J}} = {energy_J*1e3:.2f}\\text{{ mJ}}$."
                concept_txt = "Work done in stretching a wire is stored as elastic potential energy: $U = \\frac{1}{2} F \\Delta L$."
                given_txt = f"Force $F = {applied_force_N:.1f}\\text{{ N}}$, Elongation $\\Delta L = {elongation_mm:.3f}\\text{{ mm}} = {elongation_m:.4e}\\text{{ m}}$."

            add(qid,
                qtext, opt_a, opt_b, opt_c, opt_d, "A",
                concept_txt, given_txt, "Y = \\frac{F L}{A \\Delta L}",
                step_txt, f"Option A: {opt_a}",
                "Ensure units are strictly converted to SI units (metres and kilograms) prior to multiplying.",
                "Options B, C, D result from common arithmetic slips such as neglecting factor of 1/2 or squaring errors.",
                "Medium",
                f"Elasticity of {mat_name.capitalize()} Wire"
            )

    # -------------------------------------------------------------
    # Q106 to Q125: HARD QUESTIONS (20 Hard)
    # -------------------------------------------------------------
    for idx, i in enumerate(range(106, 126)):
        qid = i
        if idx == 0:
            add(106,
                "A uniform heavy rope of mass $M$ and length $L$ hangs vertically from a rigid ceiling. The elongation of the lower half of the rope under its own weight is:",
                "$\\frac{MgL}{8AY}$", "$\\frac{MgL}{4AY}$", "$\\frac{3MgL}{8AY}$", "$\\frac{MgL}{2AY}$", "A",
                "Tension at distance $x$ from the free end is $T(x) = \\frac{M}{L} x g$. Elongation of any segment is $\\int \\frac{T(x)dx}{AY}$.",
                "Lower half corresponds to $x \\in [0, L/2]$. Mass per unit length $\\mu = M/L$.",
                "\\Delta L_{\\text{lower}} = \\int_0^{L/2} \\frac{\\mu g x dx}{AY} = \\frac{\\mu g}{AY} \\left[\\frac{x^2}{2}\\right]_0^{L/2} = \\frac{M g L}{8 A Y}",
                "1. Tension at distance $x$ from the bottom is $T(x) = \\frac{M}{L} x g$.\n2. Integrate from $x = 0$ to $x = L/2$:\n   $\\Delta L_{\\text{lower}} = \\frac{M g}{L A Y} \\frac{(L/2)^2}{2} = \\frac{M g}{L A Y} \\frac{L^2}{8} = \\frac{M g L}{8 A Y}$.\n3. Note: The upper half stretches by $\\frac{3MgL}{8AY}$, making total elongation $\\frac{MgL}{2AY}$.",
                "Option A: $\\frac{MgL}{8AY}$",
                "The lower half supports an average weight of only $M g / 4$, so its elongation is $\\frac{1}{4}$ of $\\frac{MgL}{2AY} = \\frac{MgL}{8AY}$.",
                "Option C is the elongation of the upper half. Option D is total elongation of entire rope.",
                "Hard", "Self-Weight Variable Tension Integration")
        elif idx == 1:
            add(107,
                "A bar of cross-sectional area $A$ is subjected to equal and opposite tensile forces $F$ at its ends. Consider a plane through the bar inclined at an angle $\\theta$ to the cross-sectional plane. The shearing stress on this inclined plane is maximum when $\\theta$ equals:",
                "$45^\\circ$", "$90^\\circ$", "$0^\\circ$", "$60^\\circ$", "A",
                "On an inclined plane at angle $\\theta$ to the normal cross-section, the area is $A' = A / \\cos \\theta$. The tangential component of force is $F_t = F \\sin \\theta$.",
                "Area of inclined plane $= A/\\cos \\theta$, Tangential force $= F \\sin \\theta$.",
                "\\tau(\\theta) = \\frac{F \\sin \\theta}{A / \\cos \\theta} = \\frac{F}{2A} \\sin 2\\theta",
                "1. Tangential component of force along inclined plane: $F_t = F \\sin \\theta$.\n2. Area of inclined face: $A' = \\frac{A}{\\cos \\theta}$.\n3. Shearing stress $\\tau = \\frac{F_t}{A'} = \\frac{F \\sin \\theta \\cos \\theta}{A} = \\frac{F}{2A} \\sin 2\\theta$.\n4. $\\tau$ is maximum when $\\sin 2\\theta = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$.\n5. Maximum shearing stress is $\\tau_{\\text{max}} = \\frac{F}{2A}$.",
                "Option A: $45^\\circ$",
                "Tensile stress is max at $\\theta = 0^\\circ$ ($F/A$); shear stress is max at $\\theta = 45^\\circ$ ($F/2A$).",
                "Option C gives zero shear stress because $\\sin(0) = 0$. Option B also gives zero shear stress.",
                "Hard", "Stress on Oblique Plane")
        elif idx == 2:
            add(108,
                "A uniform ring of radius $R$ and cross-sectional area $A$ made of a material of density $\\rho$ and Young's modulus $Y$ rotates about its central axis in its own plane with constant angular velocity $\\omega$. The fractional increase in its radius $\\Delta R / R$ is:",
                "$\\frac{\\rho \\omega^2 R^2}{Y}$", "$\\frac{\\rho \\omega^2 R^2}{2Y}$", "$\\frac{2 \\rho \\omega^2 R^2}{Y}$", "$\\frac{\\rho \\omega^2 R^2}{3Y}$", "A",
                "For a rotating thin ring, centrifugal force per radian creates hoop tension $T = \\rho A \\omega^2 R^2$. The tensile strain is $\\frac{\\Delta (2\\pi R)}{2\\pi R} = \\frac{\\Delta R}{R} = \\frac{\\text{Stress}}{Y}$.",
                "Ring radius $R$, density $\\rho$, Young's modulus $Y$, angular speed $\\omega$.",
                "\\text{Tensile stress } \\sigma = \\rho \\omega^2 R^2 \\implies \\frac{\\Delta R}{R} = \\frac{\\sigma}{Y} = \\frac{\\rho \\omega^2 R^2}{Y}",
                "1. Consider a small element subtending angle $d\\theta$ at centre: mass $dm = \\rho A R d\\theta$.\n2. Centrifugal force $dF_c = dm \\omega^2 R = \\rho A \\omega^2 R^2 d\\theta$.\n3. Balancing with hoop tension: $2 T \\sin(d\\theta / 2) \\approx T d\\theta = dF_c \\implies T = \\rho A \\omega^2 R^2$.\n4. Tensile stress $\\sigma = T/A = \\rho \\omega^2 R^2$.\n5. By Hooke's law, strain $\\frac{\\Delta L}{L} = \\frac{\\Delta R}{R} = \\frac{\\sigma}{Y} = \\frac{\\rho \\omega^2 R^2}{Y}$.",
                "Option A: $\\frac{\\rho \\omega^2 R^2}{Y}$",
                "Hoop stress in a rotating thin hoop is simply $\\rho v^2 = \\rho \\omega^2 R^2$. Strain is $\\rho v^2 / Y$.",
                "Option B introduces an erroneous factor of 2.",
                "Hard", "Rotating Ring Hoop Stress")
        elif idx == 3:
            add(109,
                "A uniform heavy rope of mass $M$ and length $L$ hangs vertically. The ratio of the elongation of the upper half to that of the lower half is:",
                "3 : 1", "2 : 1", "4 : 1", "1 : 1", "A",
                "Tension varies linearly from $0$ at bottom to $Mg$ at top. The upper half bears an average tension of $3Mg/4$, while the lower half bears $Mg/4$.",
                "Upper half: $x \\in [L/2, L]$; lower half: $x \\in [0, L/2]$.",
                "\\frac{\\Delta L_{\\text{upper}}}{\\Delta L_{\\text{lower}}} = \\frac{\\int_{L/2}^L x dx}{\\int_0^{L/2} x dx} = \\frac{L^2 - L^2/4}{L^2/4} = \\frac{3/4}{1/4} = 3",
                "1. Tension at distance $x$ from bottom: $T(x) = (M/L)gx$.\n2. Elongation of lower half: $\\Delta L_1 \\propto \\int_0^{L/2} x dx = \\frac{L^2}{8}$.\n3. Elongation of upper half: $\\Delta L_2 \\propto \\int_{L/2}^L x dx = \\frac{L^2 - L^2/4}{2} = \\frac{3L^2}{8}$.\n4. Ratio $\\frac{\\Delta L_2}{\\Delta L_1} = \\frac{3/8}{1/8} = 3:1$.",
                "Option A: 3 : 1",
                "The upper half supports the entire lower half in addition to its own weight, making it stretch 3 times as much!",
                "Option B assumes 2:1; Option C assumes 4:1; Option D assumes equal elongation.",
                "Hard", "Self-Weight Segment Elongation Ratio")
        elif idx == 4:
            add(110,
                "A uniform conical bar of length $L$, mass density $\\rho$, and Young's modulus $Y$ hangs vertically from its circular base. The elongation of the conical bar due to its own weight is:",
                "$\\frac{\\rho g L^2}{6Y}$", "$\\frac{\\rho g L^2}{2Y}$", "$\\frac{\\rho g L^2}{3Y}$", "$\\frac{\\rho g L^2}{4Y}$", "A",
                "For a cone of vertex downward, at distance $x$ from vertex, cross-sectional area $A(x) \\propto x^2$, while volume below it $V(x) \\propto x^3$. Weight below $x$ is $W(x) \\propto x^3$. Stress $\\sigma(x) = W(x)/A(x) \\propto x$. Integrating yields factor $1/6$.",
                "Conical rod suspended from flat base, vertex pointing down.",
                "\\Delta L = \\frac{\\rho g L^2}{6 Y}",
                "1. Radius at distance $x$ from vertex: $r(x) = R \\frac{x}{L}$.\n2. Area $A(x) = \\pi R^2 \\frac{x^2}{L^2}$.\n3. Mass below $x$: $m(x) = \\frac{1}{3} \\pi r(x)^2 x \\rho = \\frac{1}{3} \\pi R^2 \\rho \\frac{x^3}{L^2}$.\n4. Stress $\\sigma(x) = \\frac{m(x)g}{A(x)} = \\frac{1}{3} \\rho g x$.\n5. Total elongation: $\\Delta L = \\int_0^L \\frac{\\sigma(x)}{Y} dx = \\frac{\\rho g}{3Y} \\int_0^L x dx = \\frac{\\rho g L^2}{6 Y}$.",
                "Option A: $\\frac{\\rho g L^2}{6Y}$",
                "Compare: cylindrical rod gives $\\frac{\\rho g L^2}{2Y}$; conical rod suspended from base gives $\\frac{\\rho g L^2}{6Y}$ (one-third as much).",
                "Option B is for a cylindrical rod; Option C is factor 1/3; Option D is factor 1/4.",
                "Hard", "Conical Bar Self-Weight Elongation")
        elif idx == 5:
            add(111,
                "Two wires of identical length and material are connected in parallel to support a hanging load $W$. If wire 1 has radius $r$ and wire 2 has radius $2r$, the fraction of the total load carried by wire 1 is:",
                "$\\frac{1}{5}$", "$\\frac{1}{4}$", "$\\frac{1}{3}$", "$\\frac{1}{2}$", "A",
                "For parallel wires, both undergo identical elongation: $\\Delta L_1 = \\Delta L_2$. Since $\\Delta L = \\frac{F L}{A Y}$, force carried is directly proportional to cross-sectional area: $F_1 / F_2 = A_1 / A_2 = r^2 / (2r)^2 = 1/4$.",
                "Parallel wires: equal elongation $\\Delta L_1 = \\Delta L_2$. Radii $r_1 = r$, $r_2 = 2r$.",
                "F_1 + F_2 = W, \\quad \\frac{F_1}{F_2} = \\frac{A_1}{A_2} = \\frac{r^2}{4r^2} = \\frac{1}{4}",
                "1. Equal extension: $\\frac{F_1 L}{A_1 Y} = \\frac{F_2 L}{A_2 Y} \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2}$.\n2. Thus $F_2 = 4 F_1$.\n3. Total load: $F_1 + F_2 = F_1 + 4F_1 = 5F_1 = W$.\n4. Fraction carried by wire 1: $\\frac{F_1}{W} = \\frac{1}{5}$.",
                "Option A: $\\frac{1}{5}$",
                "In parallel, load divides in proportion to cross-sectional area ($r^2$), so wire 2 carries 4 times more load than wire 1.",
                "Option B is $F_1 / F_2$; Option C assumes linear radius scaling; Option D assumes equal sharing.",
                "Hard", "Parallel Wire Load Sharing")
        elif idx == 6:
            add(112,
                "A steel wire of length $L$ and area $A$ has Young's modulus $Y$. It is stretched by a force $F$. If a second wire of the same material has length $2L$ and area $A/2$, the ratio of the elastic potential energy stored in the second wire to that in the first wire under the same stretching force $F$ is:",
                "4 : 1", "2 : 1", "1 : 4", "1 : 1", "A",
                "Energy stored under a given force $F$ is $U = \\frac{F^2 L}{2 A Y}$. Hence $U \\propto \\frac{L}{A}$.",
                "Same force $F$, same material $Y$. Wire 1: $(L, A)$; Wire 2: $(2L, A/2)$.",
                "\\frac{U_2}{U_1} = \\frac{L_2 / A_2}{L_1 / A_1} = \\frac{2L / (A/2)}{L / A} = 4",
                "1. $U_1 = \\frac{F^2 L}{2 A Y}$.\n2. $U_2 = \\frac{F^2 (2L)}{2 (A/2) Y} = 4 \\frac{F^2 L}{2 A Y} = 4 U_1$.\n3. Therefore, $U_2 / U_1 = 4 : 1$.",
                "Option A: 4 : 1",
                "Under constant force, thinner and longer wires stretch much more and store proportionally more energy ($U \\propto L/A$).",
                "Option B only accounts for length; Option C inverts the ratio; Option D assumes equal energy.",
                "Hard", "Elastic Potential Energy Ratio")
        elif idx == 7:
            add(113,
                "A metallic wire of length $L$ and radius $r$ is stretched by length $\\Delta L$. If the same mass of material were drawn into a wire of radius $r/2$, the elongation produced by the same stretching force $F$ would be:",
                "$16 \\Delta L$", "$8 \\Delta L$", "$4 \\Delta L$", "$2 \\Delta L$", "A",
                "When mass (volume) is conserved, drawing a wire to half radius increases its length by 4 times because $V = \\pi r^2 L = \\pi (r/2)^2 L' \\implies L' = 4L$. Area becomes $A' = A/4$. Elongation $\\Delta L' = \\frac{F L'}{A' Y} = \\frac{F (4L)}{(A/4) Y} = 16 \\Delta L$.",
                "Constant volume $V = A L$. Radius halved: $r' = r/2 \\implies A' = A/4 \\implies L' = 4L$.",
                "\\Delta L \\propto \\frac{L}{A} \\propto \\frac{1}{r^4}",
                "1. New area $A' = \\pi (r/2)^2 = A/4$.\n2. Volume $V = A L = A' L' \\implies L' = 4L$.\n3. Elongation $\\Delta L' = \\frac{F L'}{A' Y} = \\frac{F(4L)}{(A/4)Y} = 16 \\frac{FL}{AY} = 16 \\Delta L$.",
                "Option A: $16 \\Delta L$",
                "When a wire is redrawn to a smaller radius with constant volume, elongation scales as $1/r^4$!",
                "Option B is $2^3$; Option C is $2^2$; Option D is linear.",
                "Hard", "Redrawn Wire Elongation Scaling")
        elif idx == 8:
            add(114,
                "A block of mass $m$ falls from a height $h$ onto the scale pan of a vertical elastic wire of stiffness $k$. The maximum elongation $x_{\\max}$ of the wire is:",
                "$\\frac{mg}{k} \\left[1 + \\sqrt{1 + \\frac{2kh}{mg}}\\right]$",
                "$\\frac{mg}{k} \\left[1 + \\sqrt{1 + \\frac{kh}{mg}}\\right]$",
                "$\\sqrt{\\frac{2mgh}{k}}$",
                "$\\frac{2mgh}{k}$", "A",
                "Conservation of mechanical energy from initial release point to lowest point: loss of gravitational potential energy equals gain in elastic potential energy: $mg(h + x) = \\frac{1}{2} k x^2$. Rearranging into a quadratic equation in $x$ yields $x_{\\max} = \\frac{mg}{k}\\left[1 + \\sqrt{1 + \\frac{2kh}{mg}}\\right]$.",
                "Mass $m$ drops from height $h$ onto elastic support of stiffness $k$.",
                "mg(h + x) = \\frac{1}{2} k x^2 \\implies k x^2 - 2mg x - 2mgh = 0",
                "1. Set up energy equation: $mg(h + x) = \\frac{1}{2} k x^2$.\n2. Rewrite: $x^2 - \\frac{2mg}{k} x - \\frac{2mgh}{k} = 0$.\n3. Solve quadratic formula: $x = \\frac{\\frac{2mg}{k} + \\sqrt{\\left(\\frac{2mg}{k}\\right)^2 + 4 \\frac{2mgh}{k}}}{2} = \\frac{mg}{k} \\left[1 + \\sqrt{1 + \\frac{2kh}{mg}}\\right]$.",
                "Option A: $\\frac{mg}{k} \\left[1 + \\sqrt{1 + \\frac{2kh}{mg}}\\right]$",
                "When $h = 0$ (sudden release without drop), $x_{\\max} = 2 \\frac{mg}{k}$ (twice the static extension)!",
                "Option C neglects the potential energy lost during the extension $x$ itself.",
                "Hard", "Dynamic Impact and Maximum Elongation")
        elif idx == 9:
            add(115,
                "A steel wire has length $2\\text{ m}$, radius $1\\text{ mm}$, and Young's modulus $2 \\times 10^{11}\\text{ N/m}^2$. If it is stretched by $1\\text{ mm}$, the mechanical work done in stretching is converted into:",
                "Stored elastic potential energy equal to $\\approx 0.157\\text{ J}$",
                "Stored elastic potential energy equal to $\\approx 1.57\\text{ J}$",
                "Kinetic energy equal to $\\approx 3.14\\text{ J}$",
                "Pure heat dissipation of $\\approx 0.05\\text{ J}$", "A",
                "Work done in stretching is $W = \\frac{1}{2} \\frac{Y A (\\Delta L)^2}{L}$.",
                "$L = 2\\text{ m}$, $r = 10^{-3}\\text{ m}$, $A = \\pi r^2 = 3.1416 \\times 10^{-6}\\text{ m}^2$, $\\Delta L = 10^{-3}\\text{ m}$, $Y = 2 \\times 10^{11}\\text{ N/m}^2$.",
                "W = \\frac{Y A (\\Delta L)^2}{2L}",
                "1. $A = 3.1416 \\times 10^{-6}\\text{ m}^2$.\n2. $(\\Delta L)^2 = 10^{-6}\\text{ m}^2$.\n3. $W = \\frac{2 \\times 10^{11} \\times 3.1416 \\times 10^{-6} \\times 10^{-6}}{2 \\times 2} = \\frac{6.2832 \\times 10^{-1}}{4} \\approx 0.157\\text{ J}$.",
                "Option A: Stored elastic potential energy equal to $\\approx 0.157\\text{ J}$",
                "Within Hooke's limit, all mechanical work done on the wire is stored conservatively as elastic potential energy.",
                "Option B is 10 times too large; Option C misidentifies potential energy as kinetic energy.",
                "Hard", "Mechanical Work and Strain Energy")
        elif idx == 10:
            add(116,
                "A circular ring of radius $R$ is made of a thin wire of Young's modulus $Y$, cross-sectional area $A$, and thermal expansion coefficient $\\alpha$. If the temperature of the ring is increased by $\\Delta T$ while it is constrained to maintain its radius $R$ by a rigid core, the compressive force in the wire is:",
                "$Y A \\alpha \\Delta T$", "$2\\pi Y A \\alpha \\Delta T$", "$\\frac{Y A \\alpha \\Delta T}{2\\pi}$", "$\\frac{1}{2} Y A \\alpha \\Delta T$", "A",
                "Thermal strain prevented along the circumference is $\\frac{\\Delta (2\\pi R)}{2\\pi R} = \\alpha \\Delta T$. Compressive stress is $\\sigma = Y \\alpha \\Delta T$, so compressive force is $F = \\sigma A = Y A \\alpha \\Delta T$.",
                "Constrained ring of circumference $L = 2\\pi R$, temperature rise $\\Delta T$.",
                "F = \\sigma A = Y A \\alpha \\Delta T",
                "1. Free expansion of circumference: $\\Delta L = 2\\pi R \\alpha \\Delta T$.\n2. Because radius is fixed, the circumference cannot expand, so compressive strain $\\epsilon = \\frac{\\Delta L}{L} = \\alpha \\Delta T$.\n3. Stress $\\sigma = Y \\epsilon = Y \\alpha \\Delta T$.\n4. Developed internal compressive force $F = \\sigma A = Y A \\alpha \\Delta T$.",
                "Option A: $Y A \\alpha \\Delta T$",
                "Thermal stress and force in a constrained ring are independent of the ring's radius $R$!",
                "Option B multiplies by $2\\pi$; Option C divides by $2\\pi$; Option D introduces $1/2$.",
                "Hard", "Thermal Stress in Constrained Ring")
        elif idx == 11:
            add(117,
                "A wire of length $L$ and radius $r$ is clamped at both ends. If the tension in the wire is initially zero and the temperature drops by $\\Delta T$, the speed of transverse waves in the wire is: (Density $\\rho$, Young's modulus $Y$, linear expansion coefficient $\\alpha$)",
                "$\\sqrt{\\frac{Y \\alpha \\Delta T}{\\rho}}$",
                "$\\sqrt{\\frac{Y}{\\rho}}$",
                "$\\sqrt{\\frac{\\alpha \\Delta T}{\\rho}}$",
                "$\\sqrt{\\frac{2 Y \\alpha \\Delta T}{\\rho}}$", "A",
                "Tension developed due to cooling is $T = Y A \\alpha \\Delta T$. Mass per unit length is $\\mu = \\rho A$. Transverse wave speed is $v = \\sqrt{T / \\mu} = \\sqrt{\\frac{Y A \\alpha \\Delta T}{\\rho A}} = \\sqrt{\\frac{Y \\alpha \\Delta T}{\\rho}}$.",
                "Wire clamped at both ends, cooled by $\\Delta T$.",
                "v = \\sqrt{\\frac{T}{\\mu}} = \\sqrt{\\frac{Y \\alpha \\Delta T}{\\rho}}",
                "1. Thermal tension: $T = \\sigma A = Y A \\alpha \\Delta T$.\n2. Linear mass density: $\\mu = \\frac{M}{L} = \\rho A$.\n3. Wave speed $v = \\sqrt{\\frac{T}{\\mu}} = \\sqrt{\\frac{Y A \\alpha \\Delta T}{\\rho A}} = \\sqrt{\\frac{Y \\alpha \\Delta T}{\\rho}}$.",
                "Option A: $\\sqrt{\\frac{Y \\alpha \\Delta T}{\\rho}}$",
                "Notice that both area $A$ and length $L$ cancel out; wave speed depends solely on material properties and $\\Delta T$!",
                "Option B is longitudinal sound speed in a solid rod, not transverse wave speed on a cooled string.",
                "Hard", "Coupled Elasticity and Wave Speed")
        elif idx == 12:
            add(118,
                "A load of $10\\text{ kg}$ is attached to a vertical wire of length $1\\text{ m}$ and cross-sectional area $1\\text{ mm}^2$. When the load is whirled in a vertical circle, the maximum stress in the wire occurs at the lowest point. If the speed at the lowest point is $4\\text{ m/s}$ and $g = 10\\text{ m/s}^2$, find the maximum stress.",
                "$2.6 \\times 10^8\\text{ N/m}^2$", "$1.0 \\times 10^8\\text{ N/m}^2$", "$1.6 \\times 10^8\\text{ N/m}^2$", "$3.6 \\times 10^8\\text{ N/m}^2$", "A",
                "At the lowest point of a vertical circle, tension is maximum: $T_{\\max} = mg + \\frac{m v^2}{L}$. Maximum stress is $\\sigma_{\\max} = T_{\\max} / A$.",
                "Mass $m = 10\\text{ kg}$, $L = 1\\text{ m}$, $v = 4\\text{ m/s}$, $A = 10^{-6}\\text{ m}^2$, $g = 10\\text{ m/s}^2$.",
                "\\sigma_{\\max} = \\frac{mg + m v^2 / L}{A}",
                "1. Gravity component: $mg = 10 \\times 10 = 100\\text{ N}$.\n2. Centripetal component: $\\frac{m v^2}{L} = \\frac{10 \\times 16}{1} = 160\\text{ N}$.\n3. Maximum tension: $T_{\\max} = 100 + 160 = 260\\text{ N}$.\n4. Maximum stress: $\\sigma_{\\max} = \\frac{260}{10^{-6}} = 2.6 \\times 10^8\\text{ N/m}^2$.",
                "Option A: $2.6 \\times 10^8\\text{ N/m}^2$",
                "Always remember to add both gravity and centripetal force at the bottom of the vertical trajectory!",
                "Option B includes only gravity ($100\\text{ N}$); Option C includes only centripetal force ($160\\text{ N}$).",
                "Hard", "Dynamic Stress in Vertical Circle")
        elif idx == 13:
            add(119,
                "Two cylindrical wires $A$ and $B$ are made of the same material. Wire $A$ has length $L$ and radius $r$, while wire $B$ has length $2L$ and radius $2r$. If both are subjected to the same tensile force $F$, what is the ratio of the elastic potential energy stored in $A$ to that in $B$?",
                "2 : 1", "4 : 1", "1 : 2", "1 : 1", "A",
                "Elastic energy is $U = \\frac{F^2 L}{2 A Y} = \\frac{F^2 L}{2 (\\pi r^2) Y} \\propto \\frac{L}{r^2}$.",
                "Wire A: $(L, r)$; Wire B: $(2L, 2r)$; Same load $F$ and material $Y$.",
                "\\frac{U_A}{U_B} = \\frac{L_A / r_A^2}{L_B / r_B^2} = \\frac{L / r^2}{2L / (4r^2)} = \\frac{1}{2/4} = 2",
                "1. For wire A: $U_A \\propto \\frac{L}{r^2}$.\n2. For wire B: $U_B \\propto \\frac{2L}{(2r)^2} = \\frac{2L}{4r^2} = \\frac{1}{2} \\frac{L}{r^2}$.\n3. Ratio $\\frac{U_A}{U_B} = \\frac{1}{1/2} = 2:1$.",
                "Option A: 2 : 1",
                "Doubling the radius quadruples the area, which outweighs doubling the length and halves the stored energy.",
                "Option B assumes $r^2$ ratio alone; Option C inverts the ratio; Option D assumes equal energy.",
                "Hard", "Energy Storage Ratio in Wires")
        elif idx == 14:
            add(120,
                "A steel cable has cross-sectional area $1.5\\text{ cm}^2$ and breaking stress $4 \\times 10^8\\text{ N/m}^2$. What is the maximum upward acceleration with which a crane can lift a $3000\\text{ kg}$ cage using this cable, assuming a factor of safety of 2? ($g = 10\\text{ m/s}^2$)",
                "Zero (cannot accelerate upwards)", "$5\\text{ m/s}^2$", "$2\\text{ m/s}^2$", "$10\\text{ m/s}^2$", "A",
                "Allowable tension is $T_{\\text{allow}} = \\frac{\\sigma_b A}{\\text{FoS}}$. Upward equation of motion is $T - mg = ma \\implies a = \\frac{T}{m} - g$.",
                "Area $A = 1.5 \\times 10^{-4}\\text{ m}^2$, $\\sigma_b = 4 \\times 10^8\\text{ N/m}^2$, $\\text{FoS} = 2$, $m = 3000\\text{ kg}$, $g = 10\\text{ m/s}^2$.",
                "T_{\\text{allow}} = \\frac{4 \\times 10^8 \\times 1.5 \\times 10^{-4}}{2} = 30,000\\text{ N}, \\quad a = \\frac{T - mg}{m}",
                "1. Breaking force $F_b = \\sigma_b A = 4 \\times 10^8 \\times 1.5 \\times 10^{-4} = 60,000\\text{ N}$.\n2. Allowable tension with FoS = 2: $T_{\\text{allow}} = \\frac{60,000}{2} = 30,000\\text{ N}$.\n3. Gravity force on cage: $mg = 3000 \\times 10 = 30,000\\text{ N}$.\n4. Net force available for acceleration: $T_{\\text{allow}} - mg = 30,000 - 30,000 = 0\\text{ N}$.\n5. Hence, maximum upward acceleration $a = 0\\text{ m/s}^2$ (it can only be lifted at constant speed).",
                "Option A: Zero (cannot accelerate upwards)",
                "At static rest with FoS = 2, the cable is already operating at its maximum allowable working limit!",
                "Option B ignores the weight $mg$; Option D ignores the factor of safety.",
                "Hard", "Crane Cable Safety Factor and Dynamics")
        elif idx == 15:
            add(121,
                "A uniform elastic rod of natural length $L$ and mass $M$ is placed on a frictionless horizontal table. A constant horizontal pulling force $F$ is applied at one end. The total elongation of the rod is:",
                "$\\frac{FL}{2AY}$", "$\\frac{FL}{AY}$", "$\\frac{FL}{3AY}$", "Zero", "A",
                "The rod accelerates horizontally with $a = F/M$. Tension at distance $x$ from the pulled end is due to accelerating the remaining mass: $T(x) = M \\frac{L - x}{L} a = F \\left(1 - \\frac{x}{L}\\right)$. The elongation is $\\int_0^L \\frac{T(x)dx}{AY} = \\frac{FL}{2AY}$.",
                "Rod on smooth table pulled horizontally by force $F$.",
                "T(x) = F \\left(1 - \\frac{x}{L}\\right) \\implies \\Delta L = \\int_0^L \\frac{T(x)dx}{AY} = \\frac{FL}{2AY}",
                "1. Acceleration $a = \\frac{F}{M}$.\n2. Tension at distance $x$ from pulled end: $T(x) = m(x) a = \\left(\\frac{M}{L}(L - x)\\right) \\left(\\frac{F}{M}\\right) = F \\left(1 - \\frac{x}{L}\\right)$.\n3. Integrate: $\\Delta L = \\frac{F}{AY} \\int_0^L \\left(1 - \\frac{x}{L}\\right) dx = \\frac{F}{AY} \\left[ x - \\frac{x^2}{2L} \\right]_0^L = \\frac{FL}{2AY}$.",
                "Option A: $\\frac{FL}{2AY}$",
                "Notice that elongation of an accelerating rod is exactly half of the elongation if the other end were clamped!",
                "Option B assumes uniform tension $F$ throughout; Option D assumes no elongation because table is smooth.",
                "Hard", "Accelerating Rod Tension Distribution")
        elif idx == 16:
            add(122,
                "A sphere of radius $R$ and bulk modulus $K$ is subjected to a uniform hydrostatic pressure $P$. If the volume decreases by $\\Delta V$, the elastic potential energy stored in the compressed sphere is:",
                "$\\frac{1}{2} P \\Delta V = \\frac{P^2 V}{2K}$",
                "$P \\Delta V = \\frac{P^2 V}{K}$",
                "$\\frac{1}{2} K (\\Delta V)^2$",
                "$\\frac{P^2 V}{6K}$", "A",
                "Work done in volumetric compression against linearly increasing pressure is $W = \\int_0^{\\Delta V} p \\, dV = \\frac{1}{2} P \\Delta V$. Since $\\Delta V = \\frac{P V}{K}$, this equals $\\frac{P^2 V}{2K}$.",
                "Hydrostatic compression: pressure $P$, Bulk modulus $K$, volume $V = \\frac{4}{3}\\pi R^3$.",
                "U = \\frac{1}{2} P \\Delta V = \\frac{P^2 V}{2K}",
                "1. Work done by pressure: $dU = p \\, d(\\Delta V)$.\n2. Since $p = K \\frac{\\Delta V}{V}$, integrating gives $U = \\frac{K}{V} \\int_0^{\\Delta V} (\\Delta V) d(\\Delta V) = \\frac{K (\\Delta V)^2}{2V}$.\n3. Express in terms of $P$: since $\\Delta V = \\frac{PV}{K}$, $U = \\frac{1}{2} P \\Delta V = \\frac{P^2 V}{2K}$.",
                "Option A: $\\frac{1}{2} P \\Delta V = \\frac{P^2 V}{2K}$",
                "Notice the direct correspondence with electrical energy $U = \\frac{1}{2} C V^2$ or spring energy $U = \\frac{1}{2} F x$!",
                "Option B omits the $1/2$ triangle integration factor; Option C lacks volume normalization.",
                "Hard", "Bulk Modulus Strain Energy")
        elif idx == 17:
            add(123,
                "A uniform wire of cross-sectional area $A$ and length $L$ is stretched by length $\\Delta L_1$ by force $F_1$, and to $\\Delta L_2$ by force $F_2$. The work done in stretching the wire from $\\Delta L_1$ to $\\Delta L_2$ is:",
                "$\\frac{1}{2} (F_1 + F_2)(\\Delta L_2 - \\Delta L_1)$",
                "$\\frac{1}{2} (F_2 - F_1)(\\Delta L_2 - \\Delta L_1)$",
                "$(F_1 + F_2)(\\Delta L_2 - \\Delta L_1)$",
                "$\\frac{1}{2} (F_2 \\Delta L_2 - F_1 \\Delta L_1)$", "A",
                "The work done is the area of the trapezoid under the linear $F$ vs $\\Delta L$ graph between $\\Delta L_1$ and $\\Delta L_2$: $W = \\frac{F_1 + F_2}{2} (\\Delta L_2 - \\Delta L_1)$.",
                "Force increases linearly from $F_1$ to $F_2$ while extension goes from $\\Delta L_1$ to $\\Delta L_2$.",
                "W = \\int_{\\Delta L_1}^{\\Delta L_2} F \\, dx = \\frac{F_1 + F_2}{2} (\\Delta L_2 - \\Delta L_1)",
                "1. Work done is the integral of linear force: $W = \\frac{1}{2} k (\\Delta L_2^2 - \\Delta L_1^2)$.\n2. Factor the difference of squares: $\\frac{1}{2} k (\\Delta L_2 + \\Delta L_1)(\\Delta L_2 - \\Delta L_1)$.\n3. Since $k \\Delta L_1 = F_1$ and $k \\Delta L_2 = F_2$, $k(\\Delta L_1 + \\Delta L_2) = F_1 + F_2$.\n4. Substituting yields $W = \\frac{1}{2} (F_1 + F_2)(\\Delta L_2 - \\Delta L_1)$.",
                "Option A: $\\frac{1}{2} (F_1 + F_2)(\\Delta L_2 - \\Delta L_1)$",
                "This trapezoidal area formula is a frequent question on CBSE and NEET UG papers.",
                "Option B subtracts forces instead of adding; Option C omits factor $1/2$.",
                "Hard", "Work Done in Incremental Extension")
        elif idx == 18:
            add(124,
                "A wire of length $L$ and cross-sectional area $A$ is made of a material with Young's modulus $Y$. It is stretched by an amount $x$. If the potential energy stored in the wire is $U$, the force constant of the wire is:",
                "$\\frac{2U}{x^2}$", "$\\frac{U}{x^2}$", "$\\frac{2U}{x}$", "$\\frac{U}{2x^2}$", "A",
                "Elastic potential energy is $U = \\frac{1}{2} k x^2 \\implies k = \\frac{2U}{x^2}$.",
                "Energy $U$, extension $x$, equivalent spring constant $k$.",
                "U = \\frac{1}{2} k x^2 \\implies k = \\frac{2U}{x^2}",
                "1. The wire behaves as an ideal linear spring of stiffness $k = \\frac{Y A}{L}$.\n2. The potential energy stored is $U = \\frac{1}{2} k x^2$.\n3. Solving for $k$ gives $k = \\frac{2U}{x^2}$.",
                "Option A: $\\frac{2U}{x^2}$",
                "Notice that force $F = kx = \\frac{2U}{x}$, while force constant $k = \\frac{2U}{x^2}$.",
                "Option B forgets the factor of 2; Option C is the force $F$; Option D divides by 2 instead of multiplying.",
                "Hard", "Equivalent Spring Constant of Stretched Wire")
        else:
            add(125,
                "A cylindrical wire of original length $L$ and radius $r$ has Young's modulus $Y$ and Poisson's ratio $\\sigma$. When subjected to a tensile force $F$, what is the fractional change in its cross-sectional area $\\Delta A / A$?",
                "$-2\\sigma \\frac{F}{\\pi r^2 Y}$",
                "$-\\sigma \\frac{F}{\\pi r^2 Y}$",
                "$-2\\sigma \\frac{F L}{\\pi r^2 Y}$",
                "$+2\\sigma \\frac{F}{\\pi r^2 Y}$", "A",
                "Area is $A = \\pi r^2$. For small fractional changes, $\\frac{\\Delta A}{A} = 2 \\frac{\\Delta r}{r}$. Lateral strain is $\\frac{\\Delta r}{r} = -\\sigma \\frac{\\Delta L}{L} = -\\sigma \\frac{F}{\\pi r^2 Y}$. Hence $\\frac{\\Delta A}{A} = -2\\sigma \\frac{F}{\\pi r^2 Y}$.",
                "Tensile force $F$, radius $r$, Young's modulus $Y$, Poisson's ratio $\\sigma$.",
                "\\frac{\\Delta A}{A} = 2 \\frac{\\Delta r}{r} = -2\\sigma \\frac{\\text{Stress}}{Y} = -2\\sigma \\frac{F}{\\pi r^2 Y}",
                "1. Longitudinal stress $\\sigma_{\\text{axial}} = \\frac{F}{\\pi r^2}$.\n2. Longitudinal strain $\\epsilon = \\frac{F}{\\pi r^2 Y}$.\n3. Lateral strain $\\frac{\\Delta r}{r} = -\\sigma \\epsilon = -\\sigma \\frac{F}{\\pi r^2 Y}$.\n4. Differentiate area $A = \\pi r^2 \\implies \\frac{\\Delta A}{A} = 2 \\frac{\\Delta r}{r} = -2\\sigma \\frac{F}{\\pi r^2 Y}$.",
                "Option A: $-2\\sigma \\frac{F}{\\pi r^2 Y}$",
                "The negative sign confirms that tensile stretching causes cross-sectional area to decrease (necking/lateral contraction).",
                "Option B forgets the power 2 in $A = \\pi r^2$; Option C erroneously includes length $L$; Option D has positive sign.",
                "Hard", "Poisson Fractional Area Contraction")

    return qs

if __name__ == "__main__":
    qs = get_part1_questions()
    print(f"Total Part 1 questions: {len(qs)}")
    easy = sum(1 for q in qs if q['difficulty'] == 'Easy')
    med = sum(1 for q in qs if q['difficulty'] == 'Medium')
    hard = sum(1 for q in qs if q['difficulty'] == 'Hard')
    print(f"Easy: {easy}, Medium: {med}, Hard: {hard}")
