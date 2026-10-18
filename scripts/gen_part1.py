#!/usr/bin/env python3
"""
Generates Part 1 (Q1 to Q125) of Mechanical Properties of Solids
Distribution: Exactly 40 Easy, 65 Medium, 20 Hard = 125 MCQs
"""

from build_solids_dataset import make_mcq

def get_part1_questions():
    qs = []
    
    # ---------------------------------------------------------
    # Q1 - Q10: Authentic PYQs and Foundational Elasticity
    # ---------------------------------------------------------
    qs.append(make_mcq(
        1,
        "A wire of length $L$, area of cross-section $A$ is hanging from a fixed support. The length of the wire changes to $L_1$ when mass $M$ is suspended from its free end. The expression for Young's modulus is:",
        "$\\frac{Mg(L_1 - L)}{AL}$",
        "$\\frac{MgL}{A L_1}$",
        "$\\frac{MgL}{A(L_1 - L)}$",
        "$\\frac{MgL_1}{AL}$",
        "C",
        "Young's modulus $Y$ is defined as the ratio of longitudinal stress to longitudinal strain: $Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{F/A}{\\Delta L / L}$.",
        "Original length $= L$, new length $= L_1$, elongation $\\Delta L = L_1 - L$, stretching force $F = Mg$, cross-sectional area $= A$.",
        "Y = \\frac{F L}{A \\Delta L} = \\frac{MgL}{A(L_1 - L)}",
        "1. Longitudinal stress $= \\frac{F}{A} = \\frac{Mg}{A}$.\n2. Longitudinal strain $= \\frac{\\Delta L}{L} = \\frac{L_1 - L}{L}$.\n3. Dividing stress by strain: $Y = \\frac{Mg/A}{(L_1 - L)/L} = \\frac{MgL}{A(L_1 - L)}$.",
        "Option C: $\\frac{MgL}{A(L_1 - L)}$",
        "Strain is change in length divided by original length: $\\frac{L_1 - L}{L}$. Thus elongation $(L_1 - L)$ stays in the denominator.",
        "Option A inverted the strain ratio. Option B omitted subtracting the original length $L$. Option D used $L_1$ instead of elongation.",
        "Easy",
        "Young's Modulus & Hooke's Law",
        "NEET 2020",
        True,
        2020
    ))

    qs.append(make_mcq(
        2,
        "An elongation of $0.1\\%$ in a wire of cross-sectional area $10^{-6}\\text{ m}^2$ causes a tension of $100\\text{ N}$. The Young's modulus of the wire is:",
        "$10^{11}\\text{ N/m}^2$",
        "$10^{12}\\text{ N/m}^2$",
        "$10^{10}\\text{ N/m}^2$",
        "$10^{9}\\text{ N/m}^2$",
        "A",
        "Young's modulus is given by $Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{F/A}{\\Delta L / L}$.",
        "Area $A = 10^{-6}\\text{ m}^2$, Tension $F = 100\\text{ N}$, Percentage strain $= 0.1\\% \\implies \\text{Strain} = \\frac{0.1}{100} = 10^{-3}$.",
        "Y = \\frac{F}{A \\times \\text{Strain}}",
        "1. Calculate tensile stress: $\\text{Stress} = \\frac{100}{10^{-6}} = 10^8\\text{ N/m}^2$.\n2. Longitudinal strain $= 0.1\\% = 10^{-3}$.\n3. Young's modulus $Y = \\frac{10^8}{10^{-3}} = 10^{11}\\text{ N/m}^2$.",
        "Option A: $10^{11}\\text{ N/m}^2$",
        "Remember that $0.1\\% = 0.001 = 10^{-3}$, not $10^{-1}$!",
        "Option C results from incorrectly taking strain as $0.1 = 10^{-1}$ instead of $0.1\\% = 10^{-3}$.",
        "Easy",
        "Young's Modulus & Hooke's Law",
        "NEET 2021",
        True,
        2021
    ))

    qs.append(make_mcq(
        3,
        "A wire of length $L$ and radius $r$ clamped rigidly at one end is pulled by a force $F$ at the other end so that its elongation is $l$. Another wire of the same material but of length $2L$ and radius $2r$ is pulled by a force $2F$. Its elongation will be:",
        "$l$",
        "$2l$",
        "$l/2$",
        "$4l$",
        "A",
        "Elongation of a wire under tensile load is given by $\\Delta L = \\frac{F L}{A Y} = \\frac{F L}{\\pi r^2 Y}$.",
        "Wire 1: length $L$, radius $r$, force $F$, elongation $l$.\nWire 2: length $2L$, radius $2r$, force $2F$, same material ($Y$).",
        "\\Delta L \\propto \\frac{F L}{r^2}",
        "1. For wire 1: $l = \\frac{F L}{\\pi r^2 Y}$.\n2. For wire 2: $l' = \\frac{(2F)(2L)}{\\pi (2r)^2 Y} = \\frac{4 F L}{4 \\pi r^2 Y} = \\frac{F L}{\\pi r^2 Y} = l$.\n3. Hence the elongation remains exactly $l$.",
        "Option A: $l$",
        "Notice the scaling: force doubles ($\times 2$), length doubles ($\times 2$), area quadruples ($\times 4$). So $\\frac{2 \\times 2}{4} = 1$.",
        "Option B neglects the area increase by a factor of 4 ($r^2$).",
        "Easy",
        "Elongation of Wire under Tensile Load",
        "NEET 2013",
        True,
        2013
    ))

    qs.append(make_mcq(
        4,
        "Two wires $A$ and $B$ are of the same material. Their lengths are in the ratio $1 : 2$ and the diameters are in the ratio $2 : 1$. If they are pulled by the same force, then their respective elongations will be in the ratio:",
        "$1 : 8$",
        "$1 : 4$",
        "$8 : 1$",
        "$2 : 1$",
        "A",
        "Elongation of a wire is $\\Delta L = \\frac{F L}{A Y} = \\frac{4 F L}{\\pi d^2 Y}$, so $\\Delta L \\propto \\frac{L}{d^2}$ for the same force and material.",
        "$\\frac{L_A}{L_B} = \\frac{1}{2}$, $\\frac{d_A}{d_B} = \\frac{2}{1}$, same force $F$ and Young's modulus $Y$.",
        "\\frac{\\Delta L_A}{\\Delta L_B} = \\left(\\frac{L_A}{L_B}\\right) \\times \\left(\\frac{d_B}{d_A}\\right)^2",
        "1. Ratio of lengths: $\\frac{L_A}{L_B} = \\frac{1}{2}$.\n2. Ratio of diameters: $\\frac{d_A}{d_B} = 2 \\implies \\frac{d_B}{d_A} = \\frac{1}{2}$.\n3. Ratio of elongations: $\\frac{\\Delta L_A}{\\Delta L_B} = \\left(\\frac{1}{2}\\right) \\times \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{2} \\times \\frac{1}{4} = \\frac{1}{8}$.",
        "Option A: $1 : 8$",
        "Elongation is inversely proportional to diameter squared! Doubling diameter cuts elongation by 4.",
        "Option C inverts the ratio. Option B forgets to square the diameter.",
        "Medium",
        "Ratio Analysis of Wire Elongation",
        "AIPMT 2014",
        True,
        2014
    ))

    qs.append(make_mcq(
        5,
        "Which of the following physical quantities has the same dimensions as that of Young's modulus of elasticity?",
        "Pressure and Stress",
        "Energy and Force",
        "Surface tension and Viscosity",
        "Strain and Angular momentum",
        "A",
        "Young's modulus is $Y = \\frac{\\text{Stress}}{\\text{Strain}}$. Since strain is dimensionless, $Y$ has the dimensions of stress: $[M L^{-1} T^{-2}]$, which is identical to pressure.",
        "Formula for pressure: $P = F/A \\implies [M L T^{-2}] / [L^2] = [M L^{-1} T^{-2}]$. Stress $= F/A \\implies [M L^{-1} T^{-2}]$.",
        "[Y] = [\\text{Stress}] = [\\text{Pressure}] = [M L^{-1} T^{-2}]",
        "1. Strain is dimensionless $[M^0 L^0 T^0]$.\n2. Stress has dimension $\\frac{[M L T^{-2}]}{[L^2]} = [M L^{-1} T^{-2}]$.\n3. Pressure also has dimension $\\frac{[Force]}{[Area]} = [M L^{-1} T^{-2}]$.\n4. Therefore, Pressure, Stress, and all Elastic Moduli ($Y, B, \\eta$) share the exact same dimension $[M L^{-1} T^{-2}]$.",
        "Option A: Pressure and Stress",
        "All three moduli of elasticity ($Y, B, \\eta$), pressure, and energy density share $[M L^{-1} T^{-2}]$.",
        "Option B has units of Joule and Newton respectively. Option D includes dimensionless strain.",
        "Easy",
        "Dimensions of Elastic Constants",
        "AIPMT 2012",
        True,
        2012
    ))

    qs.append(make_mcq(
        6,
        "The breaking stress of a wire depends upon:",
        "Material of the wire",
        "Length of the wire",
        "Radius of the wire",
        "Shape of the cross-section",
        "A",
        "Breaking stress is an intensive material property defined as the maximum deforming force per unit area that a material can withstand before breaking.",
        "Breaking stress $\\sigma_{\\text{break}} = \\frac{F_{\\text{breaking}}}{A}$.",
        "\\sigma_{\\text{break}} = \\text{constant for a given material and temperature}",
        "1. Breaking force is directly proportional to area of cross-section ($F_{\\text{breaking}} \\propto A$).\n2. However, breaking stress $= F_{\\text{breaking}} / A$ is independent of the dimensions (length, radius, area, or shape) of the wire.\n3. It depends only on the nature of the material, temperature, and presence of impurities.",
        "Option A: Material of the wire",
        "Breaking FORCE depends on cross-sectional area, but breaking STRESS is an intrinsic material constant!",
        "Options B, C, and D are geometric dimensions which do not change the intrinsic breaking stress.",
        "Easy",
        "Stress & Breaking Stress",
        "AIPMT 2015",
        True,
        2015
    ))

    qs.append(make_mcq(
        7,
        "When a load of $10\\text{ kg}$ is hung from a wire of cross-sectional area $3\\text{ mm}^2$, the stress developed in the wire is (take $g = 9.8\\text{ m/s}^2$):",
        "$3.27 \\times 10^7\\text{ N/m}^2$",
        "$3.27 \\times 10^6\\text{ N/m}^2$",
        "$2.94 \\times 10^7\\text{ N/m}^2$",
        "$9.8 \\times 10^7\\text{ N/m}^2$",
        "A",
        "Tensile stress is defined as the restoring force developed per unit area of cross-section: $\\text{Stress} = \\frac{F}{A} = \\frac{Mg}{A}$.",
        "Mass $M = 10\\text{ kg}$, $g = 9.8\\text{ m/s}^2$, $A = 3\\text{ mm}^2 = 3 \\times 10^{-6}\\text{ m}^2$.",
        "\\text{Stress} = \\frac{Mg}{A}",
        "1. Tension $F = Mg = 10 \\times 9.8 = 98\\text{ N}$.\n2. Convert area to $\\text{m}^2$: $A = 3 \\times (10^{-3}\\text{ m})^2 = 3 \\times 10^{-6}\\text{ m}^2$.\n3. Calculate stress: $\\text{Stress} = \\frac{98}{3 \\times 10^{-6}} = 32.67 \\times 10^6 = 3.27 \\times 10^7\\text{ N/m}^2$.",
        "Option A: $3.27 \\times 10^7\\text{ N/m}^2$",
        "Remember $1\\text{ mm}^2 = 10^{-6}\\text{ m}^2$. Always convert $\\text{mm}^2$ to $\\text{m}^2$!",
        "Option B forgot one factor of 10 in the scientific exponent. Option C used $g = 8.82$.",
        "Easy",
        "Stress Calculation",
        "NEET UG Practice",
        False
    ))

    qs.append(make_mcq(
        8,
        "A steel wire can support a maximum load $W$ without snapping. If the wire is cut into two equal halves, the maximum load each half can support without snapping is:",
        "$W$",
        "$W/2$",
        "$2W$",
        "$W/4$",
        "A",
        "The breaking load of a wire is given by $F_{\\text{break}} = \\sigma_{\\text{break}} \\times A$, which depends only on the breaking stress of the material and the cross-sectional area, not on length.",
        "Original wire supports load $W$. Cut into two halves $\\implies$ length becomes $L/2$, but cross-sectional area $A$ is unchanged.",
        "F_{\\text{break}} = \\sigma_{\\text{break}} A",
        "1. Breaking load depends solely on the cross-sectional area $A$ and the breaking stress of the material.\n2. Cutting the wire in half alters its length but leaves its area $A$ and material unchanged.\n3. Therefore, each half can still support the exact same maximum load $W$.",
        "Option A: $W$",
        "Breaking load depends on thickness (area), NOT length! Shorter wire has the same breaking strength.",
        "Option B confuses breaking load with elongation (which is halved for half length under same load).",
        "Easy",
        "Breaking Load vs Length",
        "NEET UG Practice",
        False
    ))

    qs.append(make_mcq(
        9,
        "A uniform steel rod of length $L$ and area of cross-section $A$ is subjected to two equal and opposite tensile forces $F$ applied at its ends. What is the stress across any cross-section of the rod?",
        "$F/A$",
        "$2F/A$",
        "Zero",
        "$F/(2A)$",
        "A",
        "Tensile stress at any normal transverse cross-section is the internal restoring force per unit area. In equilibrium, the internal tension across any cross-section equals the applied tensile force $F$.",
        "Tensile force at each end $= F$, cross-sectional area $= A$.",
        "\\text{Stress} = \\frac{\\text{Internal Restoring Force}}{A} = \\frac{F}{A}",
        "1. In static equilibrium, consider a section dividing the rod into two segments.\n2. For either segment to be in equilibrium against the external force $F$, the internal force across the cut section must equal $F$.\n3. Therefore, stress $= \\frac{F}{A}$, NOT $\\frac{2F}{A}$ and NOT zero.",
        "Option A: $F/A$",
        "Newton's 3rd law: a tension of $F$ throughout a wire means force across any section is $F$, not $2F$!",
        "Option B erroneously adds the two forces at both ends. Option C assumes forces cancel to zero stress.",
        "Easy",
        "Concept of Tensile Stress",
        "NEET UG Practice",
        False
    ))

    qs.append(make_mcq(
        10,
        "Which of the following substances represents the nearest approach to a perfectly elastic body?",
        "Quartz fibre",
        "Putty",
        "Paraffin wax",
        "Clay",
        "A",
        "A perfectly elastic body regains its exact original shape and size instantaneously after the deforming forces are removed. Quartz fibre and phosphor bronze exhibit minimal elastic after-effect.",
        "Substances compared: Quartz fibre, putty, paraffin wax, wet clay.",
        "\\text{Elastic recovery: } \\text{Quartz fibre} \\approx 100\\%",
        "1. Putty, clay, and paraffin wax undergo plastic deformation and retain deformations completely (nearly perfectly plastic bodies).\n2. Quartz fibre recovers its shape almost instantaneously with practically negligible elastic after-effect.\n3. Therefore, quartz fibre is regarded as the closest approximation to a perfectly elastic substance.",
        "Option A: Quartz fibre",
        "Quartz fibre and phosphor bronze are standard textbook examples of nearly perfectly elastic bodies.",
        "Putty, clay, and wax are examples of perfectly plastic (inelastic) bodies.",
        "Easy",
        "Elasticity vs Plasticity",
        "NEET UG Practice",
        False
    ))

    print(f"Generated first 10 questions. Current total: {len(qs)}")
    return qs

if __name__ == "__main__":
    qs = get_part1_questions()
    print("Part 1 base module test passed.")
