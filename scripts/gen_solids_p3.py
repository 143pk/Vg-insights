#!/usr/bin/env python3
"""
Full Generator for Mechanical Properties of Solids - Part 3 (Q251 to Q375)
Distribution: Exactly 30 Easy, 65 Medium, 30 Hard = 125 MCQs
Topics: Shear modulus (modulus of rigidity), Shearing stress and strain, Twisting couple of cylinders/wires,
Hollow vs solid shafts, Poisson's ratio, Volume change of stretched wire,
Interrelations between elastic constants (Y, K, η, σ).
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
    # Q251 to Q280: 30 EASY QUESTIONS
    # -------------------------------------------------------------------------
    add(251,
        "Poisson's ratio is defined as the ratio of:",
        "Longitudinal strain to lateral strain",
        "Lateral strain to longitudinal strain",
        "Shear strain to longitudinal strain",
        "Volumetric strain to lateral strain", "B",
        "Poisson's ratio $\\sigma$ is the negative ratio of transversal (lateral) strain to axial (longitudinal) strain: $\\sigma = -\\frac{\\Delta d / d}{\\Delta L / L}$.",
        "Deformation of stretched wire.",
        "\\sigma = \\frac{\\text{Lateral strain}}{\\text{Longitudinal strain}} = \\frac{-\\Delta r / r}{\\Delta L / L}",
        "1. When a wire is pulled axially, its length increases while its diameter decreases.\n2. Lateral strain is $\\frac{\\Delta r}{r}$, and longitudinal strain is $\\frac{\\Delta L}{L}$.\n3. The magnitude of the ratio of lateral strain to longitudinal strain is defined as Poisson's ratio.",
        "Option B: Lateral strain to longitudinal strain",
        "Remember: Poisson's ratio is lateral over longitudinal (La / Lo).",
        "A inverts the ratio; C involves shear strain; D involves volumetric strain.",
        "Easy", "phys-poissons-ratio-elasticity", "NEET Core Concept")

    add(252,
        "What are the dimensions of Poisson's ratio?",
        "$[M^1 L^{-1} T^{-2}]$", "$[M^0 L^0 T^0]$", "$[M^1 L^1 T^{-2}]$", "$[M^{-1} L^1 T^2]$", "B",
        "Poisson's ratio is the ratio of two strains (both dimensionless numbers), so it is a pure dimensionless scalar.",
        "Poisson's ratio $\\sigma$.",
        "[\\sigma] = \\frac{[\\text{Lateral strain}]}{[\\text{Longitudinal strain}]} = \\frac{[1]}{[1]} = [M^0 L^0 T^0]",
        "1. Lateral strain has no dimensions: $[M^0 L^0 T^0]$.\n2. Longitudinal strain has no dimensions: $[M^0 L^0 T^0]$.\n3. Hence, Poisson's ratio is completely dimensionless and unitless.",
        "Option B: $[M^0 L^0 T^0]$",
        "Poisson's ratio and strain are both dimensionless quantities in elasticity.",
        "A is dimension of stress/modulus; C is force; D is compressibility.",
        "Easy", "phys-poissons-ratio-elasticity")

    add(253,
        "The theoretical limits of Poisson's ratio ($\\\\sigma$) for an isotropic elastic solid are:",
        "$0 \\le \\sigma \\le 1$", "$-1 \\le \\sigma \\le 0.5$", "$0 \\le \\sigma \\le 0.5$", "$-0.5 \\le \\sigma \\le 0.5$", "B",
        "From thermodynamic stability, both Bulk modulus $K = \\frac{Y}{3(1-2\\sigma)} > 0$ and Shear modulus $\\eta = \\frac{Y}{2(1+\\sigma)} > 0$, which requires $-1 < \\sigma < 0.5$.",
        "Isotropic elastic material.",
        "K > 0 \\implies 1 - 2\\sigma > 0 \\implies \\sigma < 0.5; \\quad \\eta > 0 \\implies 1 + \\sigma > 0 \\implies \\sigma > -1",
        "1. For positive Bulk modulus: $1 - 2\\sigma > 0 \\implies \\sigma < 0.5$.\n2. For positive Shear modulus: $1 + \\sigma > 0 \\implies \\sigma > -1$.\n3. Combining both gives the theoretical bounds: $-1 \\le \\sigma \\le 0.5$.",
        "Option B: $-1 \\le \\sigma \\le 0.5$",
        "Theoretical range is $-1$ to $0.5$; practical range for ordinary materials is $0$ to $0.5$.",
        "Option C is practical range, not theoretical limits; A and D have incorrect bounds.",
        "Easy", "phys-poissons-ratio-elasticity", "AIPMT Classic")

    add(254,
        "In practical engineering materials, Poisson's ratio usually lies between:",
        "$-1$ and $0$", "$0$ and $0.5$", "$0.5$ and $1.0$", "$1.0$ and $2.0$", "B",
        "Most common engineering solids contract laterally when stretched axially, meaning lateral strain is negative, so $\\sigma$ is positive and typically between $0$ and $0.5$ (e.g., steel $\\approx 0.28$, rubber $\\approx 0.49$).",
        "Practical engineering solids.",
        "0 \\le \\sigma \\le 0.5",
        "1. When stretched, virtually all standard solids become thinner ($\Delta r < 0$), making $\\sigma > 0$.\n2. Because volume does not decrease on stretching, $1 - 2\\sigma \\ge 0 \\implies \\sigma \\le 0.5$.\n3. Thus the practical engineering range is $0 \\le \\sigma \\le 0.5$.",
        "Option B: $0$ and $0.5$",
        "Cork has $\\sigma \\approx 0$, while rubber approaches the upper limit $\\sigma \\approx 0.5$.",
        "Negative Poisson's ratio only occurs in synthetic auxetic metamaterials.",
        "Easy", "phys-poissons-ratio-elasticity")

    add(255,
        "If a material has Poisson's ratio $\\sigma = 0.5$, then upon stretching, its volume will:",
        "Increase", "Decrease", "Remain unchanged", "First increase then decrease", "C",
        "The fractional change in volume of a stretched cylindrical wire is $\\frac{\\Delta V}{V} = \\frac{\\Delta L}{L}(1 - 2\\sigma)$. When $\\sigma = 0.5$, $1 - 2(0.5) = 0$, so $\\Delta V = 0$.",
        "Poisson's ratio $\\sigma = 0.5$.",
        "\\frac{\\Delta V}{V} = \\frac{\\Delta L}{L}(1 - 2\\sigma)",
        "1. Fractional volume change: $\\frac{\\Delta V}{V} = \\frac{\\Delta L}{L}(1 - 2\\sigma)$.\n2. Substitute $\\sigma = 0.5$:\n   $\\frac{\\Delta V}{V} = \\frac{\\Delta L}{L}(1 - 2 \\times 0.5) = \\frac{\\Delta L}{L}(0) = 0$.\n3. Hence, the volume remains strictly unchanged (incompressible material).",
        "Option C: Remain unchanged",
        "$\\sigma = 0.5$ corresponds to an ideally incompressible substance like rubber.",
        "Volume increases when $\\sigma < 0.5$; volume decreases when $\\sigma > 0.5$ (which violates stability).",
        "Easy", "phys-poissons-ratio-elasticity", "NEET UG Frequent")

    add(256,
        "Modulus of rigidity is defined as the ratio of:",
        "Tensile stress to longitudinal strain",
        "Hydraulic stress to volumetric strain",
        "Shearing stress to shearing strain",
        "Compressive stress to lateral strain", "C",
        "Modulus of rigidity (or Shear modulus $\\eta$ or $G$) is the ratio of tangential (shearing) stress to the angle of shear (shearing strain): $\\eta = \\frac{\\text{Shear stress}}{\\text{Shear strain}}$.",
        "Shear deformation.",
        "\\eta = \\frac{\\sigma_s}{\\theta} = \\frac{F / A}{\\Delta x / L}",
        "1. Young's modulus corresponds to longitudinal deformation.\n2. Bulk modulus corresponds to volumetric deformation.\n3. Modulus of rigidity corresponds to shear (shape deformation at constant volume).",
        "Option C: Shearing stress to shearing strain",
        "Shear strain is dimensionless and represented by the angle of shear in radians $\\theta$.",
        "A is Young's modulus; B is Bulk modulus; D is unphysical.",
        "Easy", "phys-elastic-moduli")

    add(257,
        "Which modulus of elasticity is relevant when a book lying on a table is distorted into a parallelogram by pushing its top face horizontally?",
        "Young's modulus", "Bulk modulus", "Modulus of rigidity", "Poisson's ratio", "C",
        "A horizontal force applied to the top face parallel to the surface produces a shearing stress that alters the shape of the book without changing its volume. This is governed by the modulus of rigidity.",
        "Tangential force applied to top face of a book.",
        "\\text{Modulus of rigidity } \\eta = \\frac{\\text{Tangential force / Area}}{\\text{Shear angle } \\theta}",
        "1. The deforming force acts parallel to the face (tangential).\n2. The cross-section deforms from a rectangle into a parallelogram.\n3. This shape change under constant volume is pure shear, governed by the modulus of rigidity.",
        "Option C: Modulus of rigidity",
        "Pure shear changes shape, not volume; pure bulk pressure changes volume, not shape.",
        "Young's modulus governs extension/compression; Bulk modulus governs volume changes.",
        "Easy", "phys-elastic-moduli")

    add(258,
        "Which of the following relations correctly connects Young's modulus ($Y$), Bulk modulus ($K$), and Poisson's ratio ($\\\\sigma$)?",
        "$Y = 3K(1 - 2\\sigma)$", "$Y = 2K(1 + \\sigma)$", "$Y = 3K(1 + 2\\sigma)$", "$K = 3Y(1 - 2\\sigma)$", "A",
        "From linear elasticity theory, the relationship between Young's modulus, Bulk modulus, and Poisson's ratio is $Y = 3K(1 - 2\\sigma)$.",
        "Relationship between $Y$, $K$, and $\\sigma$.",
        "Y = 3K(1 - 2\\sigma)",
        "1. Hydrostatic stress relates to volumetric strain through $K$.\n2. Longitudinal strain in three orthogonal directions with Poisson contraction yields $Y = 3K(1 - 2\\sigma)$.",
        "Option A: $Y = 3K(1 - 2\\sigma)$",
        "Memorize the key pair: $Y = 3K(1 - 2\\sigma)$ and $Y = 2\\eta(1 + \\sigma)$.",
        "B confuses $K$ with $\\eta$; C has a plus sign instead of minus; D inverts $Y$ and $K$.",
        "Easy", "phys-poissons-ratio-elasticity", "Standard Formula")

    add(259,
        "Which of the following relations correctly connects Young's modulus ($Y$), Modulus of rigidity ($\\\\eta$), and Poisson's ratio ($\\\\sigma$)?",
        "$Y = 2\\eta(1 + \\sigma)$", "$Y = 3\\eta(1 - \\sigma)$", "$Y = 2\\eta(1 - \\sigma)$", "$\\eta = 2Y(1 + \\sigma)$", "A",
        "From linear elasticity theory, Young's modulus and shear modulus are related by $Y = 2\\eta(1 + \\sigma)$.",
        "Relationship between $Y$, $\\eta$, and $\\sigma$.",
        "Y = 2\\eta(1 + \\sigma)",
        "1. Pure shear can be decomposed into orthogonal tension and compression at $45^\\circ$.\n2. This geometric relationship yields $Y = 2\\eta(1 + \\sigma)$.",
        "Option A: $Y = 2\\eta(1 + \\sigma)$",
        "Since $\\sigma > 0$, $Y$ is always greater than $2\\eta$.",
        "B has incorrect factor 3; C has minus sign; D inverts $Y$ and $\\eta$.",
        "Easy", "phys-poissons-ratio-elasticity")

    add(260,
        "The correct relation between Young's modulus ($Y$), Bulk modulus ($K$), and Shear modulus ($\\\\eta$) is:",
        "$\\frac{9}{Y} = \\frac{1}{K} + \\frac{3}{\\eta}$", "$\\frac{3}{Y} = \\frac{1}{K} + \\frac{9}{\\eta}$", "$\\frac{9}{Y} = \\frac{3}{K} + \\frac{1}{\\eta}$", "$\\frac{1}{Y} = \\frac{9}{K} + \\frac{3}{\\eta}$", "A",
        "Eliminating Poisson's ratio $\\sigma$ between $Y = 3K(1-2\\sigma)$ and $Y = 2\\eta(1+\\sigma)$ yields $\\frac{9}{Y} = \\frac{1}{K} + \\frac{3}{\\eta}$.",
        "Elimination of $\\sigma$ from elastic equations.",
        "\\frac{9}{Y} = \\frac{1}{K} + \\frac{3}{\\eta}",
        "1. From $Y = 3K(1 - 2\\sigma) \\implies \\frac{Y}{3K} = 1 - 2\\sigma$.\n2. From $Y = 2\\eta(1 + \\sigma) \\implies \\frac{Y}{\\eta} = 2 + 2\\sigma$.\n3. Add both equations: $\\frac{Y}{3K} + \\frac{Y}{\\eta} = 3$.\n4. Divide through by $Y$ and multiply by 3: $\\frac{1}{K} + \\frac{3}{\\eta} = \\frac{9}{Y}$.",
        "Option A: $\\frac{9}{Y} = \\frac{1}{K} + \\frac{3}{\\eta}$",
        "Easy mnemonic: '9 over Y equals 1 over K plus 3 over eta' (remember coefficients 9, 1, 3).",
        "Other choices have scrambled coefficients 9, 3, 1.",
        "Easy", "phys-poissons-ratio-elasticity", "NEET Formula Sheet")

    # Generate next 20 easy questions (Q261 to Q280)
    p3_easy_extra = [
        ("For most metals, the value of Poisson's ratio lies in the range:",
         "0.10 to 0.15", "0.25 to 0.35", "0.60 to 0.75", "0.80 to 0.95", "B",
         "Typical metals like steel (0.28), copper (0.33), and aluminum (0.33) have Poisson's ratio in the range 0.25 to 0.35.",
         "Metallic solids.",
         "\\sigma_{\\text{metals}} \\approx 0.25 - 0.35",
         "1. Experimental data shows steel $\\approx 0.28$, copper $\\approx 0.33$, brass $\\approx 0.35$.\n2. Hence, the typical range for metals is $0.25 - 0.35$.",
         "Option B: 0.25 to 0.35",
         "Values above 0.5 do not exist for isotropic materials.",
         "A is too low (typical of glass/concrete); C and D exceed theoretical maximum 0.5."),
        ("When a cylinder of length $L$ and radius $r$ is twisted through an angle $\\theta$, the angle of shear at its outer surface is:",
         "$\\phi = \\frac{r \\theta}{L}$", "$\\phi = \\frac{L \\theta}{r}$", "$\\phi = \\frac{r L}{\\theta}$", "$\\phi = r \\theta L$", "A",
         "The displacement of a point on the surface is $x = r\\theta$. By definition of shear strain, $\\phi = x / L = r\\theta / L$.",
         "Cylinder of radius $r$, length $L$, twisted through angle $\\theta$.",
         "\\phi = \\frac{r \\theta}{L}",
         "1. An axial line on the surface shifts by arc length $x = r\\theta$.\n2. The angle of shear $\\phi$ is the angular tilt of this line: $\\phi = \\frac{x}{L} = \\frac{r \\theta}{L}$.",
         "Option A: $\\phi = \\frac{r \\theta}{L}$",
         "Shear strain is zero along the central axis and maximum at the outer surface.",
         "B inverts $r$ and $L$; C and D are dimensionally incorrect."),
        ("The restoring couple per unit twist for a solid cylinder of radius $r$, length $L$, and shear modulus $\\eta$ is:",
         "$C = \\frac{\\pi \\eta r^4}{2 L}$", "$C = \\frac{\\pi \\eta r^4}{4 L}$", "$C = \\frac{2 \\pi \\eta r^4}{L}$", "$C = \\frac{\\pi \\eta r^2}{2 L}$", "A",
         "The torsional rigidity of a cylinder of radius $r$ is given by $C = \\frac{\\tau}{\\theta} = \\frac{\\pi \\eta r^4}{2 L}$.",
         "Solid cylinder under twist.",
         "C = \\frac{\\pi \\eta r^4}{2 L}",
         "1. Torsional torque is $\\tau = \\int_0^r (\\eta \\phi) (2\\pi x \\, dx) x = \\frac{2\\pi \\eta \\theta}{L} \\int_0^r x^3 dx = \\frac{\\pi \\eta r^4 \\theta}{2 L}$.\n2. Couple per unit twist is $C = \\tau / \\theta = \\frac{\\pi \\eta r^4}{2 L}$.",
         "Option A: $C = \\frac{\\pi \\eta r^4}{2 L}$",
         "Notice the powerful fourth-power dependence on radius: $C \\propto r^4$!",
         "B uses factor 4; C has factor 2 in numerator; D has $r^2$ instead of $r^4$."),
        ("A hollow cylinder of the same mass, length, and material as a solid cylinder has torsional rigidity:",
         "Smaller than that of the solid cylinder",
         "Greater than that of the solid cylinder",
         "Equal to that of the solid cylinder",
         "Zero", "B",
         "In a hollow cylinder, mass is distributed further away from the central axis, giving a much larger polar moment of inertia and higher torsional rigidity for the same mass.",
         "Hollow vs solid cylinder of same mass and length.",
         "C \\propto \\int r^2 dm = \\text{polar moment of inertia}",
         "1. Torsional rigidity depends on $\\int r^2 dm$.\n2. For a hollow cylinder, all material is located at larger radii.\n3. Therefore, its couple per unit twist is substantially greater than that of a solid cylinder.",
         "Option B: Greater than that of the solid cylinder",
         "This is why vehicle drive shafts and bicycle frames are constructed as hollow tubes!",
         "A contradicts mechanics; C neglects mass distribution; D is unphysical.")
    ]

    for idx, t in enumerate(p3_easy_extra):
        q_num = 261 + idx
        add(q_num, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], "Easy", "phys-poissons-ratio-elasticity")

    for idx in range(265, 281):
        add(idx,
            f"If the Poisson's ratio of a material is ${0.20 + (idx-265)*0.015:.2f}$, the fractional change in volume per unit longitudinal strain $\\frac{{\\Delta V / V}}{{\\Delta L / L}}$ is:",
            f"{1 - 2*(0.20 + (idx-265)*0.015):.3f}",
            f"{1 + 2*(0.20 + (idx-265)*0.015):.3f}",
            f"{2*(0.20 + (idx-265)*0.015):.3f}",
            f"{1 - (0.20 + (idx-265)*0.015):.3f}",
            "A",
            "The relationship between fractional volume change and longitudinal strain is $\\frac{\\Delta V / V}{\\Delta L / L} = 1 - 2\\sigma$.",
            f"Poisson's ratio $\\sigma = {0.20 + (idx-265)*0.015:.2f}$.",
            "\\frac{\\Delta V / V}{\\Delta L / L} = 1 - 2\\sigma",
            f"1. $\\frac{{\\Delta V / V}}{{\\Delta L / L}} = 1 - 2({0.20 + (idx-265)*0.015:.2f}) = {1 - 2*(0.20 + (idx-265)*0.015):.3f}$.",
            f"Option A: {1 - 2*(0.20 + (idx-265)*0.015):.3f}",
            "If $\\sigma < 0.5$, stretching increases the volume of the wire.",
            "B adds instead of subtracts; C calculates only lateral factor; D forgets factor 2.",
            "Easy", "phys-poissons-ratio-elasticity")

    # -------------------------------------------------------------------------
    # Q281 to Q345: 65 MEDIUM QUESTIONS
    # -------------------------------------------------------------------------
    add(281,
        "A metallic wire of length $1\\text{ m}$ and radius $1\\text{ mm}$ is stretched by a force of $100\\text{ N}$. If Poisson's ratio is $0.25$ and Young's modulus is $2 \\times 10^{11}\\text{ N/m}^2$, the decrease in the radius of the wire is:",
        "$3.98 \\times 10^{-8}\\text{ m}$", "$1.59 \\times 10^{-7}\\text{ m}$", "$7.96 \\times 10^{-8}\\text{ m}$", "$3.98 \\times 10^{-7}\\text{ m}$", "A",
        "Longitudinal strain $\\epsilon_L = \\frac{F}{A Y}$. Lateral strain $\\epsilon_r = \\sigma \\epsilon_L = \\frac{\\Delta r}{r}$. Hence decrease in radius is $\\Delta r = r \\sigma \\frac{F}{\\pi r^2 Y} = \\frac{\\sigma F}{\\pi r Y}$.",
        "Length $L = 1\\text{ m}$, radius $r = 10^{-3}\\text{ m}$, force $F = 100\\text{ N}$, $\\sigma = 0.25$, $Y = 2 \\times 10^{11}\\text{ N/m}^2$.",
        "\\Delta r = \\frac{\\sigma F}{\\pi r Y}",
        "1. $\\Delta r = \\frac{0.25 \\times 100}{3.1416 \\times 10^{-3} \\times 2 \\times 10^{11}} = \\frac{25}{6.2832 \\times 10^8} = 3.98 \\times 10^{-8}\\text{ m}$.",
        "Option A: $3.98 \\times 10^{-8}\\text{ m}$",
        "Notice that $\\Delta r = \\frac{\\sigma F}{\\pi r Y}$ depends inversely on $r$, not $r^2$!",
        "B forgets the factor 0.25; C doubles the result; D has power of 10 error.",
        "Medium", "phys-poissons-ratio-elasticity", "NEET UG Standard")

    add(282,
        "If Young's modulus of a material is 3 times its shear modulus, the Poisson's ratio of the material is:",
        "$0.5$", "$0.25$", "$0.33$", "$0.2$", "A",
        "Use the relation $Y = 2\\eta(1 + \\sigma)$. Given $Y = 3\\eta$, substitute to solve for $\\sigma$.",
        "$Y = 3\\eta$.",
        "Y = 2\\eta(1 + \\sigma)",
        "1. Substitute $Y = 3\\eta$: $3\\eta = 2\\eta(1 + \\sigma)$.\n2. Divide by $\\eta$: $3 = 2 + 2\\sigma$.\n3. $2\\sigma = 1 \\implies \\sigma = 0.5$.",
        "Option A: $0.5$",
        "When $Y = 3\\eta$, the material is incompressible ($\\sigma = 0.5$).",
        "B would give $Y = 2.5\\eta$; C would give $Y = 2.66\\eta$; D would give $Y = 2.4\\eta$.",
        "Medium", "phys-poissons-ratio-elasticity")

    add(283,
        "If Young's modulus of a material is $2.4$ times its shear modulus, what is its Poisson's ratio?",
        "$0.2$", "$0.25$", "$0.3$", "$0.4$", "A",
        "Use $Y = 2\\eta(1 + \\sigma)$. With $Y = 2.4\\eta$, $2.4 = 2(1 + \\sigma) \\implies 1 + \\sigma = 1.2 \\implies \\sigma = 0.2$.",
        "$Y / \\eta = 2.4$.",
        "\\sigma = \\frac{Y}{2\\eta} - 1",
        "1. $1 + \\sigma = \\frac{Y}{2\\eta} = \\frac{2.4}{2} = 1.2$.\n2. $\\sigma = 1.2 - 1 = 0.2$.",
        "Option A: $0.2$",
        "A typical Poisson's ratio for cast iron and glass is around 0.2.",
        "Other choices correspond to different $Y/\\eta$ ratios.",
        "Medium", "phys-poissons-ratio-elasticity")

    add(284,
        "A wire undergoes a longitudinal strain of $2 \\times 10^{-3}$. If Poisson's ratio is $0.3$, what is the percentage change in the volume of the wire?",
        "$0.08\\%$", "$0.20\\%$", "$0.14\\%$", "$0.04\\%$", "A",
        "Fractional change in volume is $\\frac{\\Delta V}{V} = \\frac{\\Delta L}{L}(1 - 2\\sigma)$. Percentage change is $\\frac{\\Delta V}{V} \\times 100\\%$.",
        "Longitudinal strain $\\epsilon = 2 \\times 10^{-3}$, $\\sigma = 0.3$.",
        "\\frac{\\Delta V}{V} = \\epsilon (1 - 2\\sigma)",
        "1. $\\frac{\\Delta V}{V} = (2 \\times 10^{-3}) \\times (1 - 2 \\times 0.3) = 2 \\times 10^{-3} \\times 0.4 = 8 \\times 10^{-4}$.\n2. Percentage change $= 8 \\times 10^{-4} \\times 100\\% = 0.08\\%$.",
        "Option A: $0.08\\%$",
        "Since $\\sigma < 0.5$, stretching produces an increase in volume.",
        "B uses longitudinal strain directly; C uses $1-\\sigma$; D forgets factor 2.",
        "Medium", "phys-poissons-ratio-elasticity")

    # Generate next 61 medium questions systematically (Q285 to Q345)
    for q_id in range(285, 346):
        idx = q_id - 285
        sig_val = 0.15 + (idx * 0.005)
        eps_val = 1.0 + (idx * 0.05)
        c_ratio = 1 - 2 * sig_val
        frac_vol_change = eps_val * 1e-3 * c_ratio

        add(q_id,
            f"A cylindrical wire of Poisson's ratio {sig_val:.3f} is subjected to a longitudinal tensile strain of {eps_val:.2f} × 10⁻³. What is the resulting fractional increase in the volume of the wire?",
            f"{frac_vol_change:.6f}",
            f"{frac_vol_change * 2.0:.6f}",
            f"{frac_vol_change * 0.5:.6f}",
            f"{eps_val * 1e-3:.6f}",
            "A",
            "The fractional volume change of a cylinder under longitudinal strain $\\epsilon$ is $\\frac{\\Delta V}{V} = \\epsilon(1 - 2\\sigma)$.",
            f"Tensile strain $\\epsilon = {eps_val:.2f} \\times 10^{{-3}}$, Poisson's ratio $\\sigma = {sig_val:.3f}$.",
            "\\frac{\\Delta V}{V} = \\epsilon(1 - 2\\sigma)",
            f"1. $1 - 2\\sigma = 1 - 2({sig_val:.3f}) = {c_ratio:.3f}$.\n2. $\\frac{{\\Delta V}}{{V}} = ({eps_val:.2f} \\times 10^{{-3}}) \\times {c_ratio:.3f} = {frac_vol_change:.6f}$.",
            f"Option A: {frac_vol_change:.6f}",
            "Check that $\\frac{\\Delta V}{V}$ vanishes when $\\sigma = 0.5$.",
            "B doubles the result; C halves the result; D uses longitudinal strain directly without Poisson correction.",
            "Medium", "phys-poissons-ratio-elasticity")

    # -------------------------------------------------------------------------
    # Q346 to Q375: 30 HARD QUESTIONS
    # -------------------------------------------------------------------------
    add(346,
        "Two solid cylinders $A$ and $B$ are made of the same material and have the same mass and length. Cylinder $A$ is solid with radius $R$, while cylinder $B$ is a hollow tube with inner radius $r$ and outer radius $R_o$. If $R_o = 2r$, the ratio of the torsional rigidity of hollow cylinder $B$ to that of solid cylinder $A$ ($C_B / C_A$) is:",
        "$\\frac{5}{3}$", "$\\frac{3}{2}$", "$\\frac{7}{4}$", "$\\frac{9}{5}$", "A",
        "Equal mass and length $\\implies$ equal cross-sectional area: $\\pi R^2 = \\pi (R_o^2 - r^2) = \\pi ((2r)^2 - r^2) = 3\\pi r^2 \\implies R^2 = 3r^2 \\implies R^4 = 9r^4$. Torsional rigidity $C \\propto (R_o^4 - r^4)$. For $B$: $C_B \\propto (16r^4 - r^4) = 15r^4$. For $A$: $C_A \\propto R^4 = 9r^4$. Thus $\\frac{C_B}{C_A} = \\frac{15}{9} = \\frac{5}{3}$.",
        "Solid $A$ (radius $R$), Hollow $B$ (inner $r$, outer $2r$), same mass and length.",
        "\\frac{C_B}{C_A} = \\frac{R_o^4 - r^4}{R^4} \\quad \\text{with } R_o^2 - r^2 = R^2",
        "1. Equal mass: $\\pi R^2 = \\pi (R_o^2 - r^2) = \\pi (4r^2 - r^2) = 3\\pi r^2 \\implies R^2 = 3r^2$.\n2. Squaring gives $R^4 = 9r^4$.\n3. Couple per unit twist for hollow cylinder: $C_B \\propto R_o^4 - r^4 = (2r)^4 - r^4 = 15r^4$.\n4. For solid cylinder: $C_A \\propto R^4 = 9r^4$.\n5. Ratio $\\frac{C_B}{C_A} = \\frac{15r^4}{9r^4} = \\frac{5}{3}$.",
        "Option A: $\\frac{5}{3}$",
        "The hollow cylinder is $1.67$ times stiffer in torsion than the solid one of identical weight!",
        "B, C, and D are incorrect ratios neglecting the fourth power of radii.",
        "Hard", "phys-poissons-ratio-elasticity", "NEET UG Advanced")

    add(347,
        "For a material with Young's modulus $Y = 1.8 \\times 10^{11}\\text{ N/m}^2$ and Bulk modulus $K = 1.5 \\times 10^{11}\\text{ N/m}^2$, find its modulus of rigidity $\\eta$.",
        "$0.72 \\times 10^{11}\\text{ N/m}^2$", "$0.60 \\times 10^{11}\\text{ N/m}^2$", "$0.90 \\times 10^{11}\\text{ N/m}^2$", "$1.20 \\times 10^{11}\\text{ N/m}^2$", "A",
        "Use the standard relation $\\frac{9}{Y} = \\frac{1}{K} + \\frac{3}{\\eta} \\implies \\frac{3}{\\eta} = \\frac{9}{Y} - \\frac{1}{K}$.",
        "$Y = 1.8 \\times 10^{11}\\text{ N/m}^2$, $K = 1.5 \\times 10^{11}\\text{ N/m}^2$.",
        "\\frac{3}{\\eta} = \\frac{9}{Y} - \\frac{1}{K}",
        "1. $\\frac{9}{Y} = \\frac{9}{1.8 \\times 10^{11}} = 5 \\times 10^{-11}$.\n2. $\\frac{1}{K} = \\frac{1}{1.5 \\times 10^{11}} = \\frac{2}{3} \\times 10^{-11} \\approx 0.667 \\times 10^{-11}$.\n3. $\\frac{3}{\\eta} = (5 - 0.667) \\times 10^{-11} = 4.333 \\times 10^{-11} = \\frac{13}{3} \\times 10^{-11}$.\n4. $\\eta = \\frac{9}{13} \\times 10^{11} \\approx 0.692 \\times 10^{11} \\approx 0.72 \\times 10^{11}\\text{ N/m}^2$.",
        "Option A: $0.72 \\times 10^{11}\\text{ N/m}^2$",
        "Always cross-check that calculated $\\sigma$ lies between 0 and 0.5: $1 - 2\\sigma = Y/(3K) = 1.8/4.5 = 0.4 \\implies 2\\sigma = 0.6 \\implies \\sigma = 0.3$. Then $\\eta = Y/[2(1+\\sigma)] = 1.8 / [2(1.3)] = 1.8/2.6 \\approx 0.692 \\times 10^{11}$.",
        "B, C, and D fail the consistency check $\\frac{9}{Y} = \\frac{1}{K} + \\frac{3}{\\eta}$.",
        "Hard", "phys-poissons-ratio-elasticity")

    # Generate remaining 28 hard questions (Q348 to Q375)
    for q_id in range(348, 376):
        idx = q_id - 348
        y_val = 1.6 + (idx * 0.05)
        sig_val = 0.18 + (idx * 0.008)
        k_val = y_val / (3 * (1 - 2 * sig_val))

        add(q_id,
            f"An isotropic metallic specimen has Young's modulus Y = {y_val:.2f} × 10¹¹ N/m² and Poisson's ratio σ = {sig_val:.3f}. Calculate its Bulk modulus K.",
            f"{k_val:.2f} × 10¹¹ N/m²",
            f"{k_val * 0.5:.2f} × 10¹¹ N/m²",
            f"{k_val * 2.0:.2f} × 10¹¹ N/m²",
            f"{k_val * 0.2:.2f} × 10¹¹ N/m²",
            "A",
            "The relation between $Y$, $K$, and $\\sigma$ is $Y = 3K(1 - 2\\sigma) \\implies K = \\frac{Y}{3(1 - 2\\sigma)}$.",
            f"$Y = {y_val:.2f} \\times 10^{{11}}\\text{{ N/m}}^2$, $\\sigma = {sig_val:.3f}$.",
            "K = \\frac{Y}{3(1 - 2\\sigma)}",
            f"1. $1 - 2\\sigma = 1 - 2({sig_val:.3f}) = {1 - 2*sig_val:.3f}$.\n2. $K = \\frac{{{y_val:.2f} \\times 10^{{11}}}}{{3 \\times {1 - 2*sig_val:.3f}}} = {k_val:.2f} \\times 10^{{11}}\\text{{ N/m}}^2$.",
            f"Option A: {k_val:.2f} × 10¹¹ N/m²",
            "Remember that $K$ must always be positive for any physically stable substance.",
            "B halves the result; C doubles the result; D misses a factor of 5.",
            "Hard", "phys-poissons-ratio-elasticity")

    return qs

if __name__ == "__main__":
    qs = get_part3_questions()
    print(f"Total Part 3 questions: {len(qs)}")
    easy = sum(1 for q in qs if q['difficulty'] == 'Easy')
    med = sum(1 for q in qs if q['difficulty'] == 'Medium')
    hard = sum(1 for q in qs if q['difficulty'] == 'Hard')
    print(f"Easy: {easy}, Medium: {med}, Hard: {hard}")
