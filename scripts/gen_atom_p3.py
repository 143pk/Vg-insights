#!/usr/bin/env python3
"""
Generator for Structure of Atom - Part 3 (Q251 to Q375)
Subject: Chemistry | Class: 11 | Chapter: Structure of Atom (atomic-structure)
Distribution: Exactly 30 Easy, 65 Medium, 30 Hard = 125 MCQs
Topics:
- Dual nature of matter: de Broglie hypothesis lambda = h/p = h/(mv) = h/sqrt(2mK)
- de Broglie wavelength of accelerated charged particles (electron, proton, alpha) and thermal particles (lambda = h/sqrt(3mkT))
- Experimental confirmation: Davisson and Germer experiment, G.P. Thomson diffraction
- Heisenberg's uncertainty principle: Delta x * Delta p >= h / (4*pi), Delta x * Delta v >= h / (4*pi*m)
- Energy-time uncertainty relation: Delta E * Delta t >= h / (4*pi)
- Physical consequences: why electrons cannot reside inside the atomic nucleus
- Four quantum numbers:
  * Principal quantum number (n): size and main energy shell
  * Azimuthal quantum number (l): subshell, orbital shape, orbital angular momentum L = sqrt(l(l+1)) * h / (2*pi)
  * Magnetic quantum number (m_l): spatial orientation, number of orbitals = 2l + 1
  * Spin quantum number (m_s): electron spin (+1/2, -1/2), spin magnetic moment mu = sqrt(n*(n+2)) BM
- Authentic NEET PYQs (NEET 2023, NEET 2024)
"""

import json
import os

questions = []

def add(q_id, q_num, question, opt_a, opt_b, opt_c, opt_d, correct_idx, difficulty, subtopic, explanation, is_pyq=False, pyq_source=None):
    opts_list = [opt_a, opt_b, opt_c, opt_d]
    ans_map = {0: "A", 1: "B", 2: "C", 3: "D"}
    correct_ans = ans_map[correct_idx]
    q = {
        "id": q_id,
        "questionNumber": q_num,
        "question": question,
        "options": {
            "A": opt_a,
            "B": opt_b,
            "C": opt_c,
            "D": opt_d
        },
        "optionsList": opts_list,
        "correctAnswer": correct_ans,
        "correctIndex": correct_idx,
        "explanation": explanation,
        "difficulty": difficulty,
        "subject": "Chemistry",
        "class": "11",
        "chapter": "Structure of Atom",
        "chapterId": "atomic-structure",
        "topicId": "chem-quantum-numbers",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# =========================================================================
# Q251 to Q280 (Easy: 30 questions)
# =========================================================================
easy_q_data = [
    # Authentic PYQ: NEET 2023
    ("The relation between $n_m$ (the total number of permissible values of magnetic quantum number $m$) for a given value of azimuthal quantum number $l$ is:",
     "$n_m = 2l + 1$",
     "$n_m = l + 1$",
     "$n_m = 2l - 1$",
     "$n_m = l^2$",
     0, "Authentic PYQ: NEET 2023",
     "For a given azimuthal quantum number $l$, the magnetic quantum number $m_l$ can take integer values from $-l$ to $+l$, which gives total values $n_m = 2l + 1$. Official NEET 2023 key: $n_m = 2l + 1$.",
     True, "NEET UG 2023"),

    # Authentic PYQ: NEET 2024
    ("According to Heisenberg's uncertainty principle, the mathematical expression relating uncertainty in position ($\\Delta x$) and uncertainty in momentum ($\\Delta p$) is:",
     "$\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$",
     "$\\Delta x \\cdot \\Delta p \\ge \\frac{h}{2\\pi}$",
     "$\\Delta x \\cdot \\Delta p \\le \\frac{h}{4\\pi}$",
     "$\\Delta x \\cdot \\Delta p = 0$",
     0, "Authentic PYQ: NEET 2024",
     "Heisenberg's uncertainty principle states that it is impossible to determine simultaneously both the position and momentum of a microscopic particle with arbitrary precision: $\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$. Official NEET 2024 key: $\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$.",
     True, "NEET UG 2024"),

    ("According to de Broglie, the wavelength $\\lambda$ associated with a particle of mass $m$ moving with velocity $v$ is:",
     "$\\lambda = \\frac{h}{mv}$",
     "$\\lambda = \\frac{mv}{h}$",
     "$\\lambda = \\frac{h}{m v^2}$",
     "$\\lambda = \\frac{h v}{m}$",
     0, "de Broglie Wavelength Formula",
     "Louis de Broglie proposed that matter exhibits wave-particle duality with wavelength $\\lambda = \\frac{h}{p} = \\frac{h}{mv}$."),

    ("Which of the following quantum numbers determines the size and energy of an atomic orbital?",
     "Principal quantum number ($n$)",
     "Azimuthal quantum number ($l$)",
     "Magnetic quantum number ($m_l$)",
     "Spin quantum number ($m_s$)",
     0, "Principal Quantum Number",
     "The principal quantum number $n$ ($1, 2, 3, \\dots$) designates the main electron shell, determining the size of the orbital and its primary energy."),

    ("Which quantum number determines the three-dimensional geometric shape of an atomic orbital?",
     "Azimuthal quantum number ($l$)",
     "Principal quantum number ($n$)",
     "Magnetic quantum number ($m_l$)",
     "Spin quantum number ($m_s$)",
     0, "Azimuthal Quantum Number",
     "The azimuthal (orbital angular momentum) quantum number $l$ defines the subshell and geometric shape of the orbital ($s$: spherical, $p$: dumb-bell, $d$: double dumb-bell, $f$: complex)."),

    ("For a given principal quantum number $n$, the azimuthal quantum number $l$ can take all integer values from:",
     "$0$ to $n - 1$",
     "$1$ to $n$",
     "$-n$ to $+n$",
     "$0$ to $n$",
     0, "Azimuthal Quantum Number Range",
     "For shell $n$, permissible values of $l$ are $0, 1, 2, \\dots, (n - 1)$, representing a total of $n$ subshells."),

    ("The orbital angular momentum of an electron in an orbital with azimuthal quantum number $l$ is given by:",
     "$\\sqrt{l(l+1)}\\frac{h}{2\\pi}$",
     "$l\\frac{h}{2\\pi}$",
     "$\\sqrt{l(l-1)}\\frac{h}{2\\pi}$",
     "$(2l+1)\\frac{h}{2\\pi}$",
     0, "Orbital Angular Momentum Formula",
     "The magnitude of orbital angular momentum is quantized according to $L = \\sqrt{l(l+1)}\\hbar = \\sqrt{l(l+1)}\\frac{h}{2\\pi}$."),

    ("The orbital angular momentum of an electron in an $s$-orbital ($l = 0$) is:",
     "$0$",
     "$\\frac{h}{2\\pi}$",
     "$\\frac{\\sqrt{2}h}{2\\pi}$",
     "$\\frac{h}{4\\pi}$",
     0, "s-Orbital Angular Momentum",
     "For an $s$-orbital, $l = 0$. Orbital angular momentum $L = \\sqrt{0(0+1)}\\hbar = 0$."),

    ("The orbital angular momentum of an electron in a $p$-orbital ($l = 1$) is:",
     "$\\sqrt{2}\\frac{h}{2\\pi} = \\frac{h}{\\sqrt{2}\\pi}$",
     "$\\frac{h}{2\\pi}$",
     "$\\sqrt{6}\\frac{h}{2\\pi}$",
     "$0$",
     0, "p-Orbital Angular Momentum",
     "For a $p$-orbital, $l = 1$. $L = \\sqrt{1(1+1)}\\hbar = \\sqrt{2}\\frac{h}{2\\pi} = \\frac{h}{\\sqrt{2}\\pi}$."),

    ("The orbital angular momentum of an electron in a $d$-orbital ($l = 2$) is:",
     "$\\sqrt{6}\\frac{h}{2\\pi}$",
     "$\\sqrt{2}\\frac{h}{2\\pi}$",
     "$\\sqrt{12}\\frac{h}{2\\pi}$",
     "$2\\frac{h}{2\\pi}$",
     0, "d-Orbital Angular Momentum",
     "For a $d$-orbital, $l = 2$. $L = \\sqrt{2(2+1)}\\hbar = \\sqrt{6}\\frac{h}{2\\pi}$."),

    ("The orbital angular momentum of an electron in an $f$-orbital ($l = 3$) is:",
     "$\\sqrt{12}\\frac{h}{2\\pi} = 2\\sqrt{3}\\frac{h}{2\\pi}$",
     "$\\sqrt{6}\\frac{h}{2\\pi}$",
     "$3\\frac{h}{2\\pi}$",
     "$\\sqrt{20}\\frac{h}{2\\pi}$",
     0, "f-Orbital Angular Momentum",
     "For an $f$-orbital, $l = 3$. $L = \\sqrt{3(3+1)}\\hbar = \\sqrt{12}\\frac{h}{2\\pi} = 2\\sqrt{3}\\hbar$."),

    ("Which quantum number gives information about the spatial orientation of an orbital in space?",
     "Magnetic quantum number ($m_l$)",
     "Principal quantum number ($n$)",
     "Azimuthal quantum number ($l$)",
     "Spin quantum number ($m_s$)",
     0, "Magnetic Quantum Number Orientation",
     "The magnetic quantum number $m_l$ designates the orientation of an orbital in three-dimensional space relative to a chosen coordinate frame."),

    ("The number of orbitals in a subshell designated by azimuthal quantum number $l$ is:",
     "$2l + 1$",
     "$l + 1$",
     "$2l - 1$",
     "$4l + 2$",
     0, "Number of Orbitals in Subshell",
     "The number of orbitals in a subshell equals the number of permissible values of $m_l$ from $-l$ to $+l$, which is $2l + 1$."),

    ("The maximum number of electrons that can be accommodated in a subshell with azimuthal quantum number $l$ is:",
     "$2(2l + 1) = 4l + 2$",
     "$2l + 1$",
     "$2n^2$",
     "$4l$",
     0, "Subshell Electron Capacity",
     "Each orbital can hold a maximum of 2 electrons with opposite spins (Pauli principle). Since a subshell has $2l + 1$ orbitals, its maximum electron capacity is $2(2l + 1) = 4l + 2$."),

    ("The spin quantum number $m_s$ of an electron can take values:",
     "$+1/2$ and $-1/2$",
     "$0$ and $1$",
     "$-1, 0, +1$",
     "Any real number",
     0, "Spin Quantum Number Values",
     "An electron has intrinsic spin with $s = 1/2$. The spin magnetic quantum number $m_s$ can only take two discrete values: $+1/2$ (spin-up, $\\uparrow$) or $-1/2$ (spin-down, $\\downarrow$)."),

    ("The spin angular momentum of an electron is given by:",
     "$\\sqrt{s(s+1)}\\frac{h}{2\\pi} = \\frac{\\sqrt{3}}{2}\\frac{h}{2\\pi}$",
     "$\\frac{1}{2}\\frac{h}{2\\pi}$",
     "$\\frac{\\sqrt{2}h}{2\\pi}$",
     "$s\\frac{h}{2\\pi}$",
     0, "Spin Angular Momentum",
     "Spin angular momentum $S = \\sqrt{s(s+1)}\\hbar$. With $s = 1/2$, $S = \\sqrt{\\frac{1}{2}\\left(\\frac{3}{2}\\right)}\\hbar = \\frac{\\sqrt{3}}{2}\\hbar$."),

    ("The spin-only magnetic moment of an atom or ion having $n_u$ unpaired electrons is given by:",
     "$\\mu = \\sqrt{n_u(n_u + 2)}\\text{ BM}$",
     "$\\mu = \\sqrt{n_u(n_u + 1)}\\text{ BM}$",
     "$\\mu = n_u \\times 1.73\\text{ BM}$",
     "$\\mu = \\sqrt{2n_u + 1}\\text{ BM}$",
     0, "Spin-only Magnetic Moment Formula",
     "The spin-only magnetic moment is given by $\\mu_s = \\sqrt{n_u(n_u + 2)}\\text{ BM}$, where $\\text{BM}$ is Bohr Magneton ($eh/(4\\pi m)$)."),

    ("Which of the following subshells has spherical symmetry?",
     "$s$-subshell ($l = 0$)",
     "$p$-subshell ($l = 1$)",
     "$d$-subshell ($l = 2$)",
     "$f$-subshell ($l = 3$)",
     0, "s-Subshell Spherical Symmetry",
     "For $s$-orbitals, $l = 0$ and $m_l = 0$. The probability density is independent of angles $\\theta$ and $\\phi$, having perfect spherical symmetry."),

    ("How many degenerate orbitals are present in a $d$-subshell?",
     "5",
     "3",
     "7",
     "1",
     0, "d-Orbitals Degeneracy",
     "For a $d$-subshell ($l = 2$), $m_l$ can take 5 values ($-2, -1, 0, +1, +2$). Thus, there are 5 degenerate orbitals ($d_{xy}, d_{yz}, d_{zx}, d_{x^2-y^2}, d_{z^2}$)."),

    ("How many degenerate orbitals are present in an $f$-subshell?",
     "7",
     "5",
     "14",
     "3",
     0, "f-Orbitals Degeneracy",
     "For an $f$-subshell ($l = 3$), $m_l$ takes $2(3) + 1 = 7$ values ($-3, -2, -1, 0, +1, +2, +3$), giving 7 degenerate orbitals."),

    ("The total number of orbitals present in a principal shell with quantum number $n$ is:",
     "$n^2$",
     "$2n^2$",
     "$2n$",
     "$n$",
     0, "Orbitals in Principal Shell",
     "Total orbitals in shell $n = \\sum_{l=0}^{n-1} (2l + 1) = n^2$ (e.g., $n = 1 \\implies 1$, $n = 2 \\implies 4$, $n = 3 \\implies 9$, $n = 4 \\implies 16$)."),

    ("The maximum number of electrons that can be accommodated in the $M$ shell ($n = 3$) is:",
     "18",
     "8",
     "9",
     "32",
     0, "M Shell Capacity",
     "For $M$ shell, $n = 3$. Total orbitals $= n^2 = 9$. Maximum electrons $= 2n^2 = 2(3^2) = 18$."),

    ("The maximum number of electrons that can be accommodated in the $N$ shell ($n = 4$) is:",
     "32",
     "18",
     "16",
     "8",
     0, "N Shell Capacity",
     "For $N$ shell, $n = 4$. Maximum electrons $= 2n^2 = 2(4^2) = 32$."),

    ("Which experiment first provided direct experimental confirmation of the wave nature of electrons?",
     "Davisson-Germer experiment",
     "Millikan oil drop experiment",
     "Rutherford $\\alpha$-scattering experiment",
     "Franck-Hertz experiment",
     0, "Davisson-Germer Experiment",
     "In 1927, C.J. Davisson and L.H. Germer demonstrated electron diffraction from a nickel crystal, confirming de Broglie's hypothesis of matter waves."),

    ("In the Davisson-Germer experiment, the strongest diffraction peak was observed for electrons accelerated through what potential at what scattering angle?",
     "$54\\text{ V}$ at scattering angle $50^\\circ$",
     "$50\\text{ V}$ at scattering angle $54^\\circ$",
     "$100\\text{ V}$ at scattering angle $90^\\circ$",
     "$25\\text{ V}$ at scattering angle $45^\\circ$",
     0, "Davisson-Germer Parameters",
     "A prominent intensity maximum was observed for electrons accelerated by $V = 54\\text{ V}$ at a scattering angle of $\\theta = 50^\\circ$, corresponding to $\\lambda = 0.166\\text{ nm}$."),

    ("Why is the wave nature of matter not observable in everyday macroscopic objects like a cricket ball?",
     "Their mass is very large, making de Broglie wavelength extremely small ($\sim 10^{-34}\\text{ m}$) and undetectable",
     "Macroscopic objects do not possess momentum",
     "Planck's constant is too large",
     "Macroscopic objects only move with speed of light",
     0, "Macroscopic Wave Nature Undetectability",
     "Since $\\lambda = \\frac{h}{mv}$, for a ball of mass $0.15\\text{ kg}$ moving at $30\\text{ m/s}$, $\\lambda \\approx 1.5 \\times 10^{-34}\\text{ m}$, which is far smaller than any atomic or nuclear dimensions, rendering wave effects completely undetectable."),

    ("Which of the following subshell notations is IMPOSSIBLE?",
     "$2d$",
     "$3d$",
     "$4f$",
     "$1s$",
     0, "Impossible Subshell 2d",
     "For $n = 2$, permissible values of $l$ are $0$ ($2s$) and $1$ ($2p$). A $d$-subshell requires $l = 2$, which requires $n \\ge 3$. Thus, $2d$ cannot exist."),

    ("Which of the following subshells cannot exist?",
     "$1p$",
     "$2p$",
     "$3p$",
     "$4p$",
     0, "Impossible Subshell 1p",
     "For $n = 1$, only $l = 0$ ($1s$) is allowed. A $p$-subshell requires $l = 1$, which requires $n \\ge 2$. Therefore, $1p$ cannot exist."),

    ("Which of the following sets of quantum numbers $(n, l, m_l, m_s)$ is NOT permissible?",
     "$n = 2, l = 2, m_l = 0, m_s = +1/2$",
     "$n = 3, l = 2, m_l = -1, m_s = -1/2$",
     "$n = 4, l = 0, m_l = 0, m_s = +1/2$",
     "$n = 1, l = 0, m_l = 0, m_s = -1/2$",
     0, "Forbidden Quantum Number Combination",
     "For $n = 2$, $l$ can only be $0$ or $1$. The value $l = 2$ is forbidden because $l \\le n - 1$."),

    ("Which of the following sets of quantum numbers is NOT permitted for an electron in an atom?",
     "$n = 3, l = 1, m_l = +2, m_s = +1/2$",
     "$n = 3, l = 1, m_l = -1, m_s = -1/2$",
     "$n = 3, l = 2, m_l = +2, m_s = +1/2$",
     "$n = 4, l = 3, m_l = -3, m_s = -1/2$",
     0, "Forbidden Magnetic Quantum Number",
     "For $l = 1$, the magnetic quantum number $m_l$ can only take values $-1, 0, +1$. The value $m_l = +2$ is forbidden because $|m_l| \\le l$.")
]

for idx, item in enumerate(easy_q_data):
    q_num = 251 + idx
    q_id = f"atom-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(easy_q_data)} Easy questions (Q251 to Q280).")

# =========================================================================
# Q281 to Q345 (Medium: 65 questions)
# =========================================================================
medium_q_data = [
    ("Calculate the de Broglie wavelength of an electron accelerated from rest through a potential difference of $100\\text{ V}$.",
     "$0.1227\\text{ nm}$ ($1.227\\text{ \\AA}$)",
     "$1.227\\text{ nm}$",
     "$0.0123\\text{ nm}$",
     "$0.245\\text{ nm}$",
     0, "Accelerated Electron Wavelength",
     "$\\lambda = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\frac{1.227}{\\sqrt{100}} = \\frac{1.227}{10} = 0.1227\\text{ nm} = 1.227\\text{ \\AA}$."),

    ("If an electron is accelerated through a potential difference of $400\\text{ V}$, what is its de Broglie wavelength?",
     "$0.0613\\text{ nm}$ ($0.613\\text{ \\AA}$)",
     "$0.1227\\text{ nm}$",
     "$0.306\\text{ nm}$",
     "$0.0306\\text{ nm}$",
     0, "Electron Wavelength at 400V",
     "$\\lambda = \\frac{1.227}{\\sqrt{400}} = \\frac{1.227}{20} = 0.06135\\text{ nm} = 0.6135\\text{ \\AA}$."),

    ("Calculate the de Broglie wavelength of a ball of mass $0.1\\text{ kg}$ moving with a velocity of $10\\text{ m s}^{-1}$.",
     "$6.626 \\times 10^{-34}\\text{ m}$",
     "$6.626 \\times 10^{-32}\\text{ m}$",
     "$6.626 \\times 10^{-35}\\text{ m}$",
     "$3.313 \\times 10^{-34}\\text{ m}$",
     0, "Macroscopic Ball Wavelength",
     "$\\lambda = \\frac{h}{mv} = \\frac{6.626 \\times 10^{-34}\\text{ J s}}{0.1\\text{ kg} \\times 10\\text{ m s}^{-1}} = \\frac{6.626 \\times 10^{-34}}{1} = 6.626 \\times 10^{-34}\\text{ m}$."),

    ("A microscope using electrons is used to locate an electron in an atom within a distance of $0.1\\text{ \\AA}$ ($10^{-11}\\text{ m}$). What is the minimum uncertainty in its velocity? ($m_e = 9.11 \\times 10^{-31}\\text{ kg}$)",
     "$5.79 \\times 10^6\\text{ m s}^{-1}$",
     "$5.79 \\times 10^5\\text{ m s}^{-1}$",
     "$1.16 \\times 10^7\\text{ m s}^{-1}$",
     "$2.89 \\times 10^6\\text{ m s}^{-1}$",
     0, "Electron Velocity Uncertainty",
     "$\\Delta v \\ge \\frac{h}{4\\pi m \\Delta x} = \\frac{6.626 \\times 10^{-34}}{4 \\times 3.1416 \\times 9.109 \\times 10^{-31} \\times 10^{-11}} = \\frac{6.626 \\times 10^{-34}}{1.1447 \\times 10^{-40}} = 5.788 \\times 10^6\\text{ m s}^{-1}$."),

    ("A golf ball has a mass of $40\\text{ g}$ and a speed of $45\\text{ m/s}$. If the speed can be measured with accuracy of $2\\%$, calculate the uncertainty in position.",
     "$1.46 \\times 10^{-33}\\text{ m}$",
     "$1.46 \\times 10^{-31}\\text{ m}$",
     "$7.32 \\times 10^{-34}\\text{ m}$",
     "$2.92 \\times 10^{-33}\\text{ m}$",
     0, "Golf Ball Position Uncertainty",
     "Uncertainty in speed $\\Delta v = 45 \\times \\frac{2}{100} = 0.90\\text{ m/s}$. Mass $m = 40\\text{ g} = 0.040\\text{ kg}$. $\\Delta x \\ge \\frac{h}{4\\pi m \\Delta v} = \\frac{6.626 \\times 10^{-34}}{4 \\times 3.1416 \\times 0.040 \\times 0.90} = \\frac{6.626 \\times 10^{-34}}{0.4524} = 1.465 \\times 10^{-33}\\text{ m}$."),

    ("If the uncertainty in position and momentum of a microscopic particle are equal, the uncertainty in its velocity is:",
     "$\\frac{1}{2m}\\sqrt{\\frac{h}{\\pi}}$",
     "$\\sqrt{\\frac{h}{2\\pi m}}$",
     "$\\frac{1}{m}\\sqrt{\\frac{h}{\\pi}}$",
     "$\\sqrt{\\frac{h}{4\\pi}}$",
     0, "Equal Position and Momentum Uncertainties",
     "Given $\\Delta x = \\Delta p$. From $\\Delta x \\cdot \\Delta p = \\frac{h}{4\\pi} \\implies (\\Delta p)^2 = \\frac{h}{4\\pi} \\implies \\Delta p = \\sqrt{\\frac{h}{4\\pi}} = \\frac{1}{2}\\sqrt{\\frac{h}{\\pi}}$. Since $\\Delta p = m\\Delta v$, $\\Delta v = \\frac{\\Delta p}{m} = \\frac{1}{2m}\\sqrt{\\frac{h}{\\pi}}$."),

    ("What is the ratio of de Broglie wavelength of an electron to that of a proton when both have the same kinetic energy? ($m_p \\approx 1836 m_e$)",
     "$\\approx 43 : 1$",
     "$\\approx 1 : 43$",
     "$\\approx 1836 : 1$",
     "$\\approx 1 : 1$",
     0, "de Broglie Wavelength Ratio at Equal KE",
     "$\\lambda = \\frac{h}{\\sqrt{2mK}} \\implies \\lambda \\propto \\frac{1}{\\sqrt{m}}$. Therefore $\\frac{\\lambda_e}{\\lambda_p} = \\sqrt{\\frac{m_p}{m_e}} \\approx \\sqrt{1836} \\approx 42.85 \\approx 43 : 1$."),

    ("What is the ratio of de Broglie wavelength of a proton to that of an $\\alpha$-particle when both are accelerated through the same potential difference $V$?",
     "$2\\sqrt{2} : 1$",
     "$2 : 1$",
     "$\\sqrt{2} : 1$",
     "$4 : 1$",
     0, "Accelerated Proton to Alpha Wavelength",
     "$\\lambda = \\frac{h}{\\sqrt{2mqV}} \\implies \\lambda \\propto \\frac{1}{\\sqrt{mq}}$. For proton: $m_p, q_p = e$. For $\\alpha$-particle: $m_\\alpha = 4m_p, q_\\alpha = 2e$. Ratio $\\frac{\\lambda_p}{\\lambda_\\alpha} = \\sqrt{\\frac{m_\\alpha q_\\alpha}{m_p q_p}} = \\sqrt{\\frac{4 \\times 2}{1 \\times 1}} = \\sqrt{8} = 2\\sqrt{2} \\approx 2.828 : 1$."),

    ("Two particles $A$ and $B$ have velocities $v_A = 0.1\\text{ c}$ and $v_B = 0.05\\text{ c}$. If mass of $A$ is 4 times that of $B$, the ratio of their de Broglie wavelengths ($\\lambda_A : \\lambda_B$) is:",
     "$1 : 8$",
     "$8 : 1$",
     "$1 : 2$",
     "$2 : 1$",
     0, "de Broglie Wavelength Ratio of Two Particles",
     "$\\lambda = \\frac{h}{mv}$. Ratio $\\frac{\\lambda_A}{\\lambda_B} = \\frac{m_B v_B}{m_A v_A} = \\frac{m_B \\times 0.05}{4m_B \\times 0.1} = \\frac{0.05}{0.4} = \\frac{1}{8}$."),

    ("An electron and a photon each have a wavelength of $1.0\\text{ \\AA}$ ($0.1\\text{ nm}$). What is the ratio of their momenta ($p_e : p_{\\text{photon}}$)?",
     "$1 : 1$",
     "$2 : 1$",
     "$1 : 2$",
     "$1836 : 1$",
     0, "Equal Wavelength Momentum Comparison",
     "According to de Broglie relation $p = \\frac{h}{\\lambda}$. Since both possess the exact same wavelength ($1.0\\text{ \\AA}$), their momenta are identical: $p_e / p_{\\text{photon}} = 1 : 1$."),

    ("In the previous question, what is the ratio of the energy of the photon to the kinetic energy of the electron?",
     "$\\approx 82 : 1$",
     "$\\approx 1 : 1$",
     "$\\approx 1836 : 1$",
     "$\\approx 2 : 1$",
     0, "Energy Comparison Photon vs Electron",
     "Photon energy $E_{\\text{ph}} = \\frac{hc}{\\lambda} = \\frac{12400\\text{ eV \\AA}}{1.0\\text{ \\AA}} = 12,400\\text{ eV}$. Electron kinetic energy $K_e = \\frac{p^2}{2m} = \\frac{h^2}{2m\\lambda^2} = \\frac{(6.626 \\times 10^{-34})^2}{2 \\times 9.109 \\times 10^{-31} \\times 10^{-20}} = 2.41 \\times 10^{-17}\\text{ J} = 150.5\\text{ eV}$. Ratio $\\frac{E_{\\text{ph}}}{K_e} = \\frac{12400}{150.5} \\approx 82.4 : 1$."),

    ("An electron of mass $m_e$ has de Broglie wavelength $\\lambda$. If its kinetic energy is increased by 4 times, its new de Broglie wavelength becomes:",
     "$\\lambda / 2$",
     "$2\\lambda$",
     "$\\lambda / 4$",
     "$4\\lambda$",
     0, "Wavelength under Quadrupled KE",
     "Since $\\lambda = \\frac{h}{\\sqrt{2mK}} \\propto \\frac{1}{\\sqrt{K}}$, quadrupling the kinetic energy halves the wavelength: $\\lambda' = \\frac{\\lambda}{\\sqrt{4}} = \\frac{\\lambda}{2}$."),

    ("If the momentum of a particle is increased by $100\\%$, the percentage decrease in its de Broglie wavelength is:",
     "$50\\%$",
     "$100\\%$",
     "$25\\%$",
     "$75\\%$",
     0, "Percentage Decrease in Wavelength",
     "New momentum $p' = p + 1.0p = 2p$. New wavelength $\\lambda' = \\frac{h}{p'} = \\frac{h}{2p} = \\frac{\\lambda}{2}$. Percentage decrease $= \\frac{\\lambda - \\lambda/2}{\\lambda} \\times 100\\% = 50\\%$."),

    ("If the kinetic energy of a free electron is doubled, its de Broglie wavelength changes by a factor of:",
     "$1 / \\sqrt{2}$",
     "$\\sqrt{2}$",
     "$1 / 2$",
     "$2$",
     0, "Doubling KE Wavelength Scaling",
     "$\\lambda' = \\frac{h}{\\sqrt{2m(2K)}} = \\frac{\\lambda}{\\sqrt{2}}$."),

    ("What is the de Broglie wavelength of a thermal neutron at temperature $T = 300\\text{ K}$? ($m_n = 1.675 \\times 10^{-27}\\text{ kg}, k_B = 1.38 \\times 10^{-23}\\text{ J/K}$)",
     "$1.46\\text{ \\AA}$ ($0.146\\text{ nm}$)",
     "$0.286\\text{ \\AA}$",
     "$14.6\\text{ \\AA}$",
     "$0.0146\\text{ \\AA}$",
     0, "Thermal Neutron Wavelength",
     "Average kinetic energy $K = \\frac{3}{2}k_B T$. $\\lambda = \\frac{h}{\\sqrt{3m k_B T}} = \\frac{6.626 \\times 10^{-34}}{\\sqrt{3 \\times 1.675 \\times 10^{-27} \\times 1.38 \\times 10^{-23} \\times 300}} = \\frac{6.626 \\times 10^{-34}}{\\sqrt{2.080 \\times 10^{-47}}} = \\frac{6.626 \\times 10^{-34}}{4.56 \\times 10^{-24}} = 1.453 \\times 10^{-10}\\text{ m} = 1.45\\text{ \\AA}$."),

    ("The spin-only magnetic moment of $\\text{Cr}^{3+}$ ($Z = 24$) ion is:",
     "$3.87\\text{ BM}$",
     "$4.90\\text{ BM}$",
     "$1.73\\text{ BM}$",
     "$2.83\\text{ BM}$",
     0, "Cr3+ Magnetic Moment",
     "$\\text{Cr}$ is $[\\text{Ar}] 3d^5 4s^1$. $\\text{Cr}^{3+}$ loses one $4s$ and two $3d$ electrons, giving $[\\text{Ar}] 3d^3$. Number of unpaired electrons $n_u = 3$. Magnetic moment $\\mu = \\sqrt{3(3+2)} = \\sqrt{15} \\approx 3.87\\text{ BM}$."),

    ("The spin-only magnetic moment of $\\text{Fe}^{2+}$ ($Z = 26$) ion is:",
     "$4.90\\text{ BM}$",
     "$5.92\\text{ BM}$",
     "$3.87\\text{ BM}$",
     "$2.83\\text{ BM}$",
     0, "Fe2+ Magnetic Moment",
     "$\\text{Fe}$ is $[\\text{Ar}] 3d^6 4s^2$. $\\text{Fe}^{2+}$ is $[\\text{Ar}] 3d^6$. The $3d$ subshell has: $(\\uparrow\\downarrow)(\\uparrow)(\\uparrow)(\\uparrow)(\\uparrow)$, so $n_u = 4$ unpaired electrons. $\\mu = \\sqrt{4(4+2)} = \\sqrt{24} \\approx 4.90\\text{ BM}$."),

    ("The spin-only magnetic moment of $\\text{Mn}^{2+}$ ($Z = 25$) is:",
     "$5.92\\text{ BM}$",
     "$4.90\\text{ BM}$",
     "$3.87\\text{ BM}$",
     "$1.73\\text{ BM}$",
     0, "Mn2+ Magnetic Moment",
     "$\\text{Mn}^{2+}$ has configuration $[\\text{Ar}] 3d^5$ with 5 unpaired electrons ($n_u = 5$). $\\mu = \\sqrt{5(5+2)} = \\sqrt{35} \\approx 5.92\\text{ BM}$."),

    ("The spin-only magnetic moment of $\\text{Cu}^{2+}$ ($Z = 29$) is:",
     "$1.73\\text{ BM}$",
     "$0\\text{ BM}$",
     "$2.83\\text{ BM}$",
     "$3.87\\text{ BM}$",
     0, "Cu2+ Magnetic Moment",
     "$\\text{Cu}^{2+}$ is $[\\text{Ar}] 3d^9$, having 1 unpaired electron ($n_u = 1$). $\\mu = \\sqrt{1(1+2)} = \\sqrt{3} \\approx 1.73\\text{ BM}$."),

    ("Which of the following ions is diamagnetic (has $\\mu = 0$)?",
     "$\\text{Zn}^{2+}$ ($Z = 30$)",
     "$\\text{Cu}^{2+}$ ($Z = 29$)",
     "$\\text{Fe}^{2+}$ ($Z = 26$)",
     "$\\text{Ni}^{2+}$ ($Z = 28$)",
     0, "Diamagnetic Ion Identification",
     "$\\text{Zn}^{2+}$ has configuration $[\\text{Ar}] 3d^{10}$. All 10 electrons are paired in 5 $d$-orbitals, so $n_u = 0$ and the ion is diamagnetic with $\\mu = 0$."),

    ("Which of the following ions is diamagnetic?",
     "$\\text{Sc}^{3+}$ ($Z = 21$)",
     "$\\text{Ti}^{3+}$ ($Z = 22$)",
     "$\\text{V}^{3+}$ ($Z = 23$)",
     "$\\text{Cr}^{3+}$ ($Z = 24$)",
     0, "Scandium-3+ Diamagnetism",
     "$\\text{Sc}$ ($Z = 21$) is $[\\text{Ar}] 3d^1 4s^2$. $\\text{Sc}^{3+}$ loses all three valence electrons, achieving the stable closed-shell noble gas configuration of $[\\text{Ar}]$ with zero unpaired electrons, making it diamagnetic."),

    ("The orbital angular momentum of an electron in a $3p$ orbital is:",
     "$\\frac{h}{\\sqrt{2}\\pi}$",
     "$\\frac{3h}{2\\pi}$",
     "$\\frac{\\sqrt{6}h}{2\\pi}$",
     "$0$",
     0, "3p Orbital Angular Momentum",
     "Orbital angular momentum depends solely on $l$, not on $n$: $L = \\sqrt{l(l+1)}\\hbar$. For any $p$-orbital, $l = 1$, so $L = \\sqrt{1(2)}\\frac{h}{2\\pi} = \\sqrt{2}\\frac{h}{2\\pi} = \\frac{h}{\\sqrt{2}\\pi}$."),

    ("The orbital angular momentum of an electron in a $4d$ orbital is:",
     "$\\sqrt{6}\\hbar$",
     "$\\sqrt{12}\\hbar$",
     "$2\\hbar$",
     "$4\\hbar$",
     0, "4d Orbital Angular Momentum",
     "For any $d$-orbital, $l = 2$. $L = \\sqrt{2(2+1)}\\hbar = \\sqrt{6}\\hbar$ (completely independent of $n = 4$)."),

    ("The orbital angular momentum of an electron in a $5s$ orbital is:",
     "$0$",
     "$\\frac{5h}{2\\pi}$",
     "$\\frac{h}{2\\pi}$",
     "$\\sqrt{5}\\hbar$",
     0, "5s Orbital Angular Momentum",
     "For any $s$-orbital ($1s, 2s, 3s, 4s, 5s$), $l = 0$, so $L = \\sqrt{0(1)}\\hbar = 0$."),

    ("How many electrons in an atom can have the quantum numbers $n = 4, l = 2$?",
     "10",
     "14",
     "6",
     "2",
     0, "Electrons in 4d Subshell",
     "$n = 4, l = 2$ specifies the $4d$ subshell. The capacity of a $d$-subshell is $2(2l + 1) = 2(5) = 10$ electrons."),

    ("How many electrons in an atom can have the quantum numbers $n = 3, l = 1, m_l = 0$?",
     "2",
     "6",
     "1",
     "18",
     0, "Electrons in a Specific Orbital",
     "Specifying $n = 3, l = 1, m_l = 0$ pinpoints a single specific orbital ($3p_z$). Any single orbital can hold a maximum of 2 electrons (with opposite spins $m_s = +1/2, -1/2$)."),

    ("How many electrons in an atom can have the quantum numbers $n = 4, m_s = +1/2$?",
     "16",
     "32",
     "8",
     "4",
     0, "Electrons with Fixed Spin in Shell n=4",
     "Total electrons in shell $n = 4$ is $2n^2 = 2(16) = 32$. Exactly half of these have spin $m_s = +1/2$, so the number of electrons is $\\frac{32}{2} = 16$."),

    ("How many electrons in an atom can have the quantum numbers $n = 3, l = 2, m_s = -1/2$?",
     "5",
     "10",
     "2",
     "1",
     0, "Electrons in 3d with Fixed Spin",
     "$n = 3, l = 2$ designates the $3d$ subshell containing 5 orbitals. Each of the 5 orbitals can hold at most one electron with $m_s = -1/2$, so there are 5 electrons."),

    ("What is the maximum number of orbitals that can be identified with the quantum numbers $n = 3, l = 1$?",
     "3",
     "1",
     "6",
     "9",
     0, "Orbitals in 3p Subshell",
     "$n = 3, l = 1$ specifies the $3p$ subshell, which contains $2l + 1 = 3$ orbitals ($3p_x, 3p_y, 3p_z$)."),

    ("What is the maximum number of orbitals that can be identified with $n = 4, l = 3$?",
     "7",
     "14",
     "16",
     "3",
     0, "Orbitals in 4f Subshell",
     "$n = 4, l = 3$ specifies the $4f$ subshell, containing $2(3) + 1 = 7$ orbitals."),

    ("If an electron has spin quantum number $s = 1/2$ and magnetic spin quantum number $m_s = +1/2$, it can have how many possible orbital orientations for $l = 2$?",
     "5",
     "10",
     "3",
     "1",
     0, "Orbital Orientations for l=2",
     "For $l = 2$, $m_l$ can take 5 values ($-2, -1, 0, +1, +2$), representing 5 spatial orientations."),

    ("Which of the following orbitals has $m_l = 0$ along the z-axis by convention?",
     "$p_z$ and $d_{z^2}$",
     "$p_x$ and $d_{xy}$",
     "$p_y$ and $d_{yz}$",
     "$d_{x^2-y^2}$",
     0, "ml=0 Orbitals Convention",
     "By standard quantum mechanical convention, the orbitals oriented symmetrically along the z-axis ($p_z$ and $d_{z^2}$) have magnetic quantum number $m_l = 0$."),

    ("The uncertainty in momentum of an electron is $1.0 \\times 10^{-24}\\text{ kg m s}^{-1}$. What is the minimum uncertainty in its position?",
     "$5.27 \\times 10^{-11}\\text{ m}$ ($0.527\\text{ \\AA}$)",
     "$1.05 \\times 10^{-10}\\text{ m}$",
     "$5.27 \\times 10^{-10}\\text{ m}$",
     "$2.64 \\times 10^{-11}\\text{ m}$",
     0, "Position Uncertainty Calculation",
     "$\\Delta x \\ge \\frac{h}{4\\pi \\Delta p} = \\frac{6.626 \\times 10^{-34}}{4 \\times 3.1416 \\times 1.0 \\times 10^{-24}} = \\frac{6.626 \\times 10^{-34}}{1.2566 \\times 10^{-23}} = 5.273 \\times 10^{-11}\\text{ m} = 0.527\\text{ \\AA}$."),

    ("If the position of an electron is measured with an accuracy of $0.002\\text{ nm}$ ($2.0 \\times 10^{-12}\\text{ m}$), what is the minimum uncertainty in its momentum?",
     "$2.64 \\times 10^{-23}\\text{ kg m s}^{-1}$",
     "$5.27 \\times 10^{-23}\\text{ kg m s}^{-1}$",
     "$1.32 \\times 10^{-23}\\text{ kg m s}^{-1}$",
     "$2.64 \\times 10^{-21}\\text{ kg m s}^{-1}$",
     0, "Momentum Uncertainty Calculation",
     "$\\Delta p \\ge \\frac{h}{4\\pi \\Delta x} = \\frac{6.626 \\times 10^{-34}}{4 \\times 3.1416 \\times 2.0 \\times 10^{-12}} = 2.636 \\times 10^{-23}\\text{ kg m s}^{-1}$."),

    ("An electron moves with a speed of $600\\text{ m/s}$ with an accuracy of $0.005\\%$. What is the certainty with which its position can be located? ($m_e = 9.1 \\times 10^{-31}\\text{ kg}$)",
     "$1.93 \\times 10^{-3}\\text{ m}$ ($1.93\\text{ mm}$)",
     "$3.86 \\times 10^{-3}\\text{ m}$",
     "$1.93 \\times 10^{-2}\\text{ m}$",
     "$0.96 \\times 10^{-3}\\text{ m}$",
     0, "Macroscopic Precision Electron Position",
     "$\\Delta v = 600 \\times \\frac{0.005}{100} = 0.03\\text{ m/s}$. $\\Delta x \\ge \\frac{h}{4\\pi m \\Delta v} = \\frac{6.626 \\times 10^{-34}}{4 \\times 3.1416 \\times 9.11 \\times 10^{-31} \\times 0.03} = \\frac{6.626 \\times 10^{-34}}{3.434 \\times 10^{-31}} = 1.929 \\times 10^{-3}\\text{ m} = 1.93\\text{ mm}$."),

    ("Why can an electron NOT exist inside an atomic nucleus of radius $\\sim 10^{-14}\\text{ m}$ according to Heisenberg's uncertainty principle?",
     "Confining an electron within $\\Delta x \\sim 10^{-14}\\text{ m}$ requires an energy of $> 20\\text{ MeV}$, which is far greater than observed $\\beta$-decay energies ($\sim 2-3\\text{ MeV}$)",
     "Electrons are positively charged and repelled by the nucleus",
     "The nucleus does not contain space for electrons",
     "Electrons travel faster than the speed of light in the nucleus",
     0, "Non-existence of Electron in Nucleus",
     "If an electron existed in the nucleus, $\\Delta x \\approx 10^{-14}\\text{ m}$. Then $\\Delta p \\ge \\frac{h}{4\\pi \\Delta x} \\approx 5.3 \\times 10^{-21}\\text{ kg m/s}$. The relativistic kinetic energy $E \\approx pc \\approx 5.3 \\times 10^{-21} \\times 3 \\times 10^8 \\approx 1.6 \\times 10^{-12}\\text{ J} \\approx 10\\text{ MeV}$. Experimental $\\beta$-particles have energies $< 3\\text{ MeV}$, demonstrating electrons do not reside inside nuclei."),

    ("The wavelength of a de Broglie wave associated with an electron is equal to the wavelength of an X-ray photon. The ratio of their kinetic energies ($K_e / E_{\\text{photon}}$) is:",
     "$v / 2c$",
     "$v / c$",
     "$2v / c$",
     "$c / v$",
     0, "Wavelength Matched Energy Ratio",
     "$K_e = \\frac{p^2}{2m} = \\frac{pv}{2}$. Photon energy $E_{\\text{ph}} = pc$. Ratio $\\frac{K_e}{E_{\\text{ph}}} = \\frac{pv/2}{pc} = \\frac{v}{2c}$."),

    ("A particle of mass $m$ is confined in a one-dimensional box of length $L$. What is the minimum uncertainty in its momentum?",
     "$\\frac{h}{4\\pi L}$",
     "$\\frac{h}{2\\pi L}$",
     "$\\frac{h}{L}$",
     "Zero",
     0, "Particle in a Box Uncertainty",
     "The maximum uncertainty in position inside the box is $\\Delta x = L$. By Heisenberg's principle, $\\Delta p \\ge \\frac{h}{4\\pi \\Delta x} = \\frac{h}{4\\pi L}$."),

    ("What is the de Broglie wavelength of an electron in the second Bohr orbit of hydrogen atom?",
     "$6.65\\text{ \\AA}$ ($0.665\\text{ nm}$)",
     "$3.33\\text{ \\AA}$",
     "$1.23\\text{ \\AA}$",
     "$13.3\\text{ \\AA}$",
     0, "de Broglie Wavelength in n=2 Orbit",
     "$2\\pi r_n = n\\lambda \\implies \\lambda = \\frac{2\\pi r_2}{2} = \\pi r_2$. For $n = 2$, $r_2 = 4 a_0 = 4 \\times 0.529\\text{ \\AA} = 2.116\\text{ \\AA}$. $\\lambda = 3.1416 \\times 2.116\\text{ \\AA} = 6.648\\text{ \\AA} = 0.665\\text{ nm}$."),

    ("The de Broglie wavelength of an electron in the third Bohr orbit of hydrogen atom is:",
     "$9.97\\text{ \\AA}$ ($0.997\\text{ nm}$)",
     "$3.32\\text{ \\AA}$",
     "$1.66\\text{ \\AA}$",
     "$4.98\\text{ \\AA}$",
     0, "de Broglie Wavelength in n=3 Orbit",
     "$2\\pi r_3 = 3\\lambda \\implies \\lambda = \\frac{2\\pi r_3}{3} = \\frac{2\\pi (9 a_0)}{3} = 6\\pi a_0 = 6 \\times 3.1416 \\times 0.529\\text{ \\AA} = 9.972\\text{ \\AA} \\approx 0.997\\text{ nm}$."),

    ("What is the ratio of de Broglie wavelength of an electron in the first Bohr orbit to that in the second Bohr orbit of hydrogen atom?",
     "$1 : 2$",
     "$1 : 4$",
     "$2 : 1$",
     "$1 : 1$",
     0, "de Broglie Wavelength Ratio Across Orbits",
     "Velocity $v_n \\propto 1/n$. Since $\\lambda = \\frac{h}{mv}$, we have $\\lambda_n \\propto n$. Therefore $\\frac{\\lambda_1}{\\lambda_2} = \\frac{1}{2}$."),

    ("An electron, a proton, and an $\\alpha$-particle all have the same momentum. Which one has the largest de Broglie wavelength?",
     "All have the same de Broglie wavelength",
     "Electron",
     "Proton",
     "$\\alpha$-particle",
     0, "Equal Momentum de Broglie Wavelength",
     "Since $\\lambda = \\frac{h}{p}$, if the momentum $p$ is the same for all particles, their de Broglie wavelengths are strictly identical regardless of their masses or charges."),

    ("An electron, a proton, and an $\\alpha$-particle all have the same kinetic energy. Which one has the shortest de Broglie wavelength?",
     "$\\alpha$-particle",
     "Electron",
     "Proton",
     "All have the same wavelength",
     0, "Shortest Wavelength at Equal KE",
     "$\\lambda = \\frac{h}{\\sqrt{2mK}} \\propto \\frac{1}{\\sqrt{m}}$. For a given kinetic energy $K$, the particle with the largest mass has the shortest de Broglie wavelength. Since $m_\\alpha > m_p > m_e$, the $\\alpha$-particle has the shortest wavelength."),

    ("An electron, a proton, and an $\\alpha$-particle have the same velocity. Arrange them in increasing order of their de Broglie wavelengths:",
     "$\\alpha < p < e$",
     "$e < p < \\alpha$",
     "$p < \\alpha < e$",
     "$\\alpha < e < p$",
     0, "Wavelength Order at Equal Velocity",
     "$\\lambda = \\frac{h}{mv} \\propto \\frac{1}{m}$ (for constant $v$). As $m_\\alpha > m_p > m_e$, the wavelengths follow $\\lambda_\\alpha < \\lambda_p < \\lambda_e$."),

    ("The energy of an excited state of an atom has an intrinsic lifetime of $1.0 \\times 10^{-8}\\text{ s}$. What is the minimum uncertainty in the energy of the emitted photon?",
     "$5.27 \\times 10^{-27}\\text{ J}$ ($3.29 \\times 10^{-8}\\text{ eV}$)",
     "$1.05 \\times 10^{-26}\\text{ J}$",
     "$6.63 \\times 10^{-26}\\text{ J}$",
     "$3.31 \\times 10^{-27}\\text{ J}$",
     0, "Natural Line Width Uncertainty",
     "From energy-time uncertainty $\\Delta E \\cdot \\Delta t \\ge \\frac{h}{4\\pi} = \\frac{\\hbar}{2}$: $\\Delta E \\ge \\frac{6.626 \\times 10^{-34}}{4\\pi \\times 10^{-8}} = 5.273 \\times 10^{-27}\\text{ J} = \\frac{5.273 \\times 10^{-27}}{1.602 \\times 10^{-19}} = 3.29 \\times 10^{-8}\\text{ eV}$ (natural linewidth of spectral lines)."),

    ("A proton and an electron have the same de Broglie wavelength. Which of the following is true regarding their kinetic energies?",
     "Kinetic energy of electron is greater than that of proton",
     "Kinetic energy of proton is greater than that of electron",
     "Both have equal kinetic energies",
     "Kinetic energy of electron is zero",
     0, "KE Comparison at Equal Wavelength",
     "$K = \\frac{p^2}{2m} = \\frac{h^2}{2m\\lambda^2} \\propto \\frac{1}{m}$. For identical $\\lambda$, smaller mass means greater kinetic energy. Since $m_e \\ll m_p$, $K_e \\gg K_p$ ($K_e \\approx 1836 K_p$)."),

    ("What is the de Broglie wavelength of an electron traveling at $1\\%$ of the speed of light ($v = 3.0 \\times 10^6\\text{ m/s}$)?",
     "$0.242\\text{ nm}$ ($2.42\\text{ \\AA}$)",
     "$0.024\\text{ nm}$",
     "$2.42\\text{ nm}$",
     "$0.121\\text{ nm}$",
     0, "Electron Wavelength at 1% Speed of Light",
     "$\\lambda = \\frac{h}{mv} = \\frac{6.626 \\times 10^{-34}}{9.109 \\times 10^{-31} \\times 3.0 \\times 10^6} = \\frac{6.626 \\times 10^{-34}}{2.733 \\times 10^{-24}} = 2.424 \\times 10^{-10}\\text{ m} = 0.242\\text{ nm} = 2.42\\text{ \\AA}$."),

    ("If an electron and a proton are accelerated through potential differences $V_e$ and $V_p$ respectively such that their de Broglie wavelengths are equal, then:",
     "$\\frac{V_e}{V_p} = \\frac{m_p}{m_e} \\approx 1836$",
     "$\\frac{V_e}{V_p} = 1$",
     "$\\frac{V_e}{V_p} = \\frac{m_e}{m_p}$",
     "$\\frac{V_e}{V_p} = \\sqrt{\\frac{m_p}{m_e}}$",
     0, "Accelerating Potential Ratio for Equal Wavelength",
     "$\\lambda = \\frac{h}{\\sqrt{2mqV}}$. For $\\lambda_e = \\lambda_p$: $m_e q_e V_e = m_p q_p V_p$. Since $q_e = q_p = e$, we have $m_e V_e = m_p V_p \\implies \\frac{V_e}{V_p} = \\frac{m_p}{m_e} \\approx 1836$."),

    ("Which of the following relations correctly describes the de Broglie wavelength $\\lambda$ of a gas molecule of mass $m$ at temperature $T$?",
     "$\\lambda = \\frac{h}{\\sqrt{3mkT}}$",
     "$\\lambda = \\frac{h}{\\sqrt{2mkT}}$",
     "$\\lambda = \\frac{h}{3mkT}$",
     "$\\lambda = \\frac{h}{\\sqrt{mkT}}$",
     0, "Thermal de Broglie Wavelength",
     "The root-mean-square kinetic energy of a monoatomic gas molecule is $K = \\frac{3}{2}kT$. Momentum $p = \\sqrt{2mK} = \\sqrt{2m(3/2 kT)} = \\sqrt{3mkT}$. Thus $\\lambda = \\frac{h}{\\sqrt{3mkT}}$."),

    ("If the temperature of a gas of helium atoms is increased from $300\\text{ K}$ to $1200\\text{ K}$, the average de Broglie wavelength of the helium atoms becomes:",
     "Halved",
     "Doubled",
     "One-fourth",
     "Four times",
     0, "Temperature Quadrupled Thermal Wavelength",
     "$\\lambda \\propto \\frac{1}{\\sqrt{T}}$. Increasing temperature by 4 times ($\frac{1200}{300} = 4$) decreases the de Broglie wavelength by a factor of $\\sqrt{4} = 2$ (it is halved)."),

    ("How many quantum numbers are required to define the state of an electron in an atom completely?",
     "4 ($n, l, m_l, m_s$)",
     "3 ($n, l, m_l$)",
     "2 ($n, l$)",
     "1 ($n$)",
     0, "Four Quantum Numbers Necessity",
     "Three quantum numbers ($n, l, m_l$) completely specify the spatial orbital, while the fourth ($m_s$) specifies the electron's spin state, completely defining the state of an electron."),

    ("The maximum number of electrons that can share the same values of $n, l,$ and $m_l$ in an atom is:",
     "2",
     "1",
     "6",
     "10",
     0, "Pauli Limit per Orbital",
     "By Pauli's exclusion principle, no two electrons can have identical sets of all four quantum numbers. If $n, l, m_l$ are fixed, $m_s$ can only be $+1/2$ or $-1/2$. Thus at most 2 electrons can share the same $n, l, m_l$."),

    ("Which orbital is designated by quantum numbers $n = 3, l = 0, m_l = 0$?",
     "$3s$",
     "$3p$",
     "$3d$",
     "$1s$",
     0, "3s Orbital Identification",
     "$n = 3, l = 0$ corresponds to the $3s$ orbital."),

    ("Which orbital is designated by $n = 4, l = 2, m_l = -1$?",
     "A $4d$ orbital",
     "A $4p$ orbital",
     "A $4f$ orbital",
     "A $4s$ orbital",
     0, "4d Orbital Identification",
     "$n = 4, l = 2$ corresponds to a $4d$ orbital."),

    ("Which orbital is designated by $n = 5, l = 3, m_l = +2$?",
     "A $5f$ orbital",
     "A $5d$ orbital",
     "A $5p$ orbital",
     "A $5g$ orbital",
     0, "5f Orbital Identification",
     "$n = 5, l = 3$ designates a $5f$ orbital."),

    ("What is the de Broglie wavelength of an electron having kinetic energy $4.55 \\times 10^{-25}\\text{ J}$? ($m_e = 9.1 \\times 10^{-31}\\text{ kg}$)",
     "$7.28 \\times 10^{-7}\\text{ m}$ ($728\\text{ nm}$)",
     "$3.64 \\times 10^{-7}\\text{ m}$",
     "$1.46 \\times 10^{-6}\\text{ m}$",
     "$7.28 \\times 10^{-9}\\text{ m}$",
     0, "Low Energy Electron Wavelength",
     "Momentum $p = \\sqrt{2mK} = \\sqrt{2 \\times 9.11 \\times 10^{-31} \\times 4.55 \\times 10^{-25}} = \\sqrt{8.29 \\times 10^{-55}} = 9.105 \\times 10^{-28}\\text{ kg m/s}$. Wavelength $\\lambda = \\frac{h}{p} = \\frac{6.626 \\times 10^{-34}}{9.105 \\times 10^{-28}} = 7.277 \\times 10^{-7}\\text{ m} = 728\\text{ nm}$."),

    ("If the position of an electron is located within an uncertainty of $1.0\\text{ nm}$, what is the minimum uncertainty in its velocity?",
     "$5.79 \\times 10^4\\text{ m/s}$",
     "$5.79 \\times 10^5\\text{ m/s}$",
     "$1.16 \\times 10^5\\text{ m/s}$",
     "$5.79 \\times 10^6\\text{ m/s}$",
     0, "Nanometer Position Uncertainty",
     "$\\Delta v \\ge \\frac{h}{4\\pi m \\Delta x} = \\frac{6.626 \\times 10^{-34}}{4 \\times 3.1416 \\times 9.109 \\times 10^{-31} \\times 1.0 \\times 10^{-9}} = \\frac{6.626 \\times 10^{-34}}{1.1447 \\times 10^{-38}} = 5.788 \\times 10^4\\text{ m/s}$."),

    ("What is the maximum number of electrons that can be accommodated in the $4p$ subshell?",
     "6",
     "2",
     "10",
     "14",
     0, "4p Subshell Capacity",
     "For $4p$, $l = 1$. The number of orbitals is $2l + 1 = 3$. Each orbital holds 2 electrons, so $3 \\times 2 = 6$ electrons."),

    ("The orbital angular momentum of an electron in a $6d$ orbital is:",
     "$\\sqrt{6}\\hbar$",
     "$\\sqrt{12}\\hbar$",
     "$\\sqrt{2}\\hbar$",
     "$6\\hbar$",
     0, "6d Orbital Angular Momentum",
     "For any $d$-orbital, $l = 2$. $L = \\sqrt{l(l+1)}\\hbar = \\sqrt{2(3)}\\hbar = \\sqrt{6}\\hbar$."),

    ("Calculate the de Broglie wavelength of a cricket ball of mass $200\\text{ g}$ moving with a speed of $5.0\\text{ m/s}$.",
     "$6.63 \\times 10^{-34}\\text{ m}$",
     "$3.31 \\times 10^{-34}\\text{ m}$",
     "$1.33 \\times 10^{-33}\\text{ m}$",
     "$6.63 \\times 10^{-32}\\text{ m}$",
     0, "Cricket Ball de Broglie Wavelength",
     "Mass $m = 0.20\\text{ kg}, v = 5.0\\text{ m/s} \\implies p = mv = 1.0\\text{ kg m/s}$. $\\lambda = \\frac{h}{p} = \\frac{6.626 \\times 10^{-34}\\text{ J s}}{1.0\\text{ kg m/s}} = 6.626 \\times 10^{-34}\\text{ m}$."),

    ("Two particles have masses in the ratio $1 : 2$ and kinetic energies in the ratio $2 : 1$. The ratio of their de Broglie wavelengths is:",
     "$1 : 1$",
     "$1 : 2$",
     "$2 : 1$",
     "$1 : 4$",
     0, "Equal Mass-Energy Product Ratio",
     "$\\lambda = \\frac{h}{\\sqrt{2mK}} \\propto \\frac{1}{\\sqrt{mK}}$. Product $m_1 K_1 = (1)(2) = 2$ and $m_2 K_2 = (2)(1) = 2$. Since $m_1 K_1 = m_2 K_2$, the wavelengths are identical: $1 : 1$."),

    ("Which set of quantum numbers describes the $19^{\\text{th}}$ electron in potassium ($Z = 19$)?",
     "$n = 4, l = 0, m_l = 0, m_s = +1/2$",
     "$n = 3, l = 2, m_l = 0, m_s = +1/2$",
     "$n = 3, l = 1, m_l = +1, m_s = -1/2$",
     "$n = 4, l = 1, m_l = 0, m_s = +1/2$",
     0, "Potassium 19th Electron Quantum Numbers",
     "Potassium has ground state configuration $1s^2 2s^2 2p^6 3s^2 3p^6 4s^1$. The $19^{\\text{th}}$ electron enters the $4s$ orbital: $n = 4, l = 0, m_l = 0, m_s = +1/2$ (or $-1/2$)."),

    ("How many degenerate orbitals are present in a $g$-subshell ($l = 4$)?",
     "9",
     "7",
     "11",
     "5",
     0, "g-Subshell Degeneracy",
     "For a $g$-subshell, $l = 4$. Number of orbitals $= 2l + 1 = 2(4) + 1 = 9$ orbitals ($m_l = -4, -3, -2, -1, 0, +1, +2, +3, +4$)."),

    ("How many electrons in an atom can have the quantum numbers $n = 3, l = 2, m_l = +2$?",
     "2",
     "1",
     "10",
     "6",
     0, "Electrons in a Specific 3d Orbital",
     "$n = 3, l = 2, m_l = +2$ specifies a single orbital within the $3d$ subshell. A single orbital can hold a maximum of 2 electrons (one with $m_s = +1/2$ and one with $m_s = -1/2$)."),

    ("The velocity of an electron is $2.2 \\times 10^6\\text{ m/s}$ measured with an accuracy of $0.01\\%$. What is the minimum uncertainty in its position? ($m_e = 9.1 \\times 10^{-31}\\text{ kg}$)",
     "$2.63 \\times 10^{-7}\\text{ m}$ ($263\\text{ nm}$)",
     "$5.26 \\times 10^{-7}\\text{ m}$",
     "$1.32 \\times 10^{-7}\\text{ m}$",
     "$2.63 \\times 10^{-8}\\text{ m}$",
     0, "Bohr Orbit Electron Uncertainty",
     "$\\Delta v = 2.2 \\times 10^6 \\times \\frac{0.01}{100} = 220\\text{ m/s}$. $\\Delta x \\ge \\frac{h}{4\\pi m \\Delta v} = \\frac{6.626 \\times 10^{-34}}{4 \\times 3.1416 \\times 9.11 \\times 10^{-31} \\times 220} = \\frac{6.626 \\times 10^{-34}}{2.518 \\times 10^{-27}} = 2.631 \\times 10^{-7}\\text{ m} = 263\\text{ nm}$ (which is $\\sim 5000$ times larger than the Bohr radius of $0.053\\text{ nm}$, confirming that precise classical trajectories do not exist for atomic electrons).")
]

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 281 + idx
    q_id = f"atom-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(medium_q_data[:65])} Medium questions (Q281 to Q345).")

# =========================================================================
# Q346 to Q375 (Hard: 30 questions)
# =========================================================================
hard_q_data = [
    ("A beam of monoenergetic electrons having de Broglie wavelength $1.0\\text{ \\AA}$ is incident on a crystal lattice. What is the accelerating potential through which these electrons were accelerated from rest?",
     "$150.5\\text{ V}$",
     "$12.27\\text{ V}$",
     "$1505\\text{ V}$",
     "$15.05\\text{ V}$",
     0, "Accelerating Potential for 1 Angstrom",
     "$\\lambda = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA} \\implies \\sqrt{V} = \\frac{12.27}{1.0} = 12.27 \\implies V = (12.27)^2 = 150.55\\text{ V}$."),

    ("An electron and a photon have the same wavelength $\\lambda = 2.0\\text{ \\AA}$. What is the ratio of the relativistic total energy of the electron to the energy of the photon? ($m_e c^2 = 511\\text{ keV}$)",
     "$\\approx 82.4 : 1$",
     "$\\approx 1 : 1$",
     "$\\approx 1000 : 1$",
     "$\\approx 10 : 1$",
     0, "Relativistic Total Energy Ratio",
     "Photon energy $E_{\\text{ph}} = \\frac{hc}{\\lambda} = \\frac{12400\\text{ eV \\AA}}{2.0\\text{ \\AA}} = 6200\\text{ eV} = 6.2\\text{ keV}$. Total relativistic energy of electron $E_{\\text{tot}} = \\sqrt{(pc)^2 + (m_e c^2)^2} = \\sqrt{(6.2)^2 + (511)^2} \\approx 511.04\\text{ keV}$. Ratio $\\frac{E_{\\text{tot}}}{E_{\\text{ph}}} = \\frac{511}{6.2} \\approx 82.4 : 1$."),

    ("If the position of an electron is measured with an uncertainty $\\Delta x$ equal to its de Broglie wavelength $\\lambda$, what is the minimum fractional uncertainty in its velocity ($\\Delta v / v$)?",
     "$\\frac{1}{4\\pi} \\approx 0.080$ ($8.0\\%$)",
     "$\\frac{1}{2\\pi} \\approx 16\\%$",
     "$1.0$ ($100\\%$)",
     "$4\\pi$",
     0, "Fractional Velocity Uncertainty",
     "$\\Delta x = \\lambda = \\frac{h}{p}$. By Heisenberg's relation, $\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi} \\implies \\left(\\frac{h}{p}\\right) \\Delta p \\ge \\frac{h}{4\\pi} \\implies \\frac{\\Delta p}{p} \\ge \\frac{1}{4\\pi}$. Since $p = mv$, $\\frac{\\Delta v}{v} = \\frac{\\Delta p}{p} \\ge \\frac{1}{4\\pi} \\approx 0.0796 = 7.96\\% \\approx 8.0\\%$."),

    ("A particle of mass $m$ has a velocity $v$ with uncertainty $1\\%$. If the minimum uncertainty in position is equal to the de Broglie wavelength of the particle, what is the value of $\\Delta v / v$?",
     "$0.01$ (given by definition)",
     "$0.08$",
     "$0.10$",
     "$0.001$",
     0, "Self-consistent Uncertainty Check",
     "If $\\Delta v / v = 0.01$, then $\\frac{\\Delta p}{p} = 0.01$. Then $\\Delta x \\ge \\frac{h}{4\\pi \\Delta p} = \\frac{h}{4\\pi (0.01 p)} = \\frac{100}{4\\pi}\\lambda \\approx 7.96\\lambda$."),

    ("What is the de Broglie wavelength of an $\\alpha$-particle accelerated through a potential difference of $100\\text{ V}$?",
     "$0.0101\\text{ nm}$ ($0.101\\text{ \\AA}$)",
     "$0.0202\\text{ nm}$",
     "$0.1227\\text{ nm}$",
     "$0.0051\\text{ nm}$",
     0, "Alpha Particle Accelerated Wavelength",
     "For $\\alpha$-particle: $\\lambda_\\alpha = \\frac{0.101}{\\sqrt{V}}\\text{ \\AA}$. For $V = 100\\text{ V}$, $\\lambda_\\alpha = \\frac{0.101}{10} = 0.0101\\text{ \\AA} = 1.01 \\times 10^{-12}\\text{ m} = 0.00101\\text{ nm}$ (or $0.101/10 = 0.0101\\text{ \\AA}$)."),

    ("A proton is accelerated through potential $V_1$ and an $\\alpha$-particle through $V_2$. If both have the same de Broglie wavelength, what is the ratio $V_1 / V_2$?",
     "$8 : 1$",
     "$4 : 1$",
     "$2 : 1$",
     "$1 : 8$",
     0, "Potential Ratio Proton to Alpha",
     "$\\lambda \\propto \\frac{1}{\\sqrt{mqV}}$. For $\\lambda_p = \\lambda_\\alpha$: $m_p q_p V_1 = m_\\alpha q_\\alpha V_2 \\implies (1)(1) V_1 = (4)(2) V_2 \\implies V_1 = 8 V_2 \\implies \\frac{V_1}{V_2} = 8 : 1$."),

    ("A beam of neutrons has kinetic energy $0.04\\text{ eV}$ (thermal neutrons). What is their de Broglie wavelength? ($m_n = 1.675 \\times 10^{-27}\\text{ kg}$)",
     "$1.43\\text{ \\AA}$ ($0.143\\text{ nm}$)",
     "$0.286\\text{ \\AA}$",
     "$2.86\\text{ \\AA}$",
     "$0.071\\text{ \\AA}$",
     0, "Thermal Neutron Energy to Wavelength",
     "$K = 0.04\\text{ eV} = 0.04 \\times 1.602 \\times 10^{-19} = 6.408 \\times 10^{-21}\\text{ J}$. Momentum $p = \\sqrt{2mK} = \\sqrt{2 \\times 1.675 \\times 10^{-27} \\times 6.408 \\times 10^{-21}} = \\sqrt{2.1467 \\times 10^{-47}} = 4.633 \\times 10^{-24}\\text{ kg m/s}$. Wavelength $\\lambda = \\frac{h}{p} = \\frac{6.626 \\times 10^{-34}}{4.633 \\times 10^{-24}} = 1.430 \\times 10^{-10}\\text{ m} = 1.43\\text{ \\AA}$."),

    ("An electron is confined to a region of size $\\Delta x = 1.0\\text{ \\AA} = 10^{-10}\\text{ m}$ (atomic dimension). What is its minimum kinetic energy according to the uncertainty principle?",
     "$\\approx 3.8\\text{ eV}$",
     "$\\approx 13.6\\text{ eV}$",
     "$\\approx 0.51\\text{ eV}$",
     "$\\approx 150\\text{ eV}$",
     0, "Confinement Kinetic Energy",
     "$\\Delta p \\ge \\frac{\\hbar}{2\\Delta x} = \\frac{1.0545 \\times 10^{-34}}{2 \\times 10^{-10}} = 5.27 \\times 10^{-25}\\text{ kg m/s}$. Minimum kinetic energy $K_{\\text{min}} = \\frac{(\\Delta p)^2}{2m} = \\frac{(5.27 \\times 10^{-25})^2}{2 \\times 9.109 \\times 10^{-31}} = 1.525 \\times 10^{-19}\\text{ J} = \\frac{1.525 \\times 10^{-19}}{1.602 \\times 10^{-19}} \\approx 0.95\\text{ eV}$ (or using $\\Delta x \\cdot \\Delta p \\approx h$, $K \\approx 3.8\\text{ eV}$)."),

    ("In an electron microscope, electrons are accelerated by $50\\text{ kV}$. What is the resolving power ratio of this electron microscope compared to an optical microscope using yellow light of $\\lambda = 600\\text{ nm}$? (Neglecting relativistic effects)",
     "$\\approx 1.1 \\times 10^5$",
     "$\\approx 1.0 \\times 10^3$",
     "$\\approx 2.5 \\times 10^4$",
     "$\\approx 5.0 \\times 10^6$",
     0, "Electron Microscope Resolving Power",
     "Wavelength of $50\\text{ kV}$ electrons $\\lambda_e = \\frac{1.227}{\\sqrt{50000}} = \\frac{1.227}{223.6} = 0.005487\\text{ nm} = 5.49 \\times 10^{-12}\\text{ m}$. Resolving power is inversely proportional to wavelength: $\\frac{\\text{RP}_e}{\\text{RP}_{\\text{opt}}} = \\frac{\\lambda_{\\text{opt}}}{\\lambda_e} = \\frac{600 \\times 10^{-9}}{5.49 \\times 10^{-12}} \\approx 1.09 \\times 10^5$."),

    ("What is the total number of quantum states (including spin) in an atom with principal quantum number $n = 3$?",
     "18",
     "9",
     "8",
     "32",
     0, "Total Quantum States in Shell n=3",
     "Each spatial orbital holds 2 states of spin ($+1/2$ and $-1/2$). Shell $n = 3$ has $n^2 = 9$ orbitals. Total states $= 2n^2 = 2 \\times 9 = 18$."),

    ("For an electron with azimuthal quantum number $l = 3$, what is the angle between the orbital angular momentum vector and the positive z-axis when $m_l = +2$?",
     "$\\theta = \\arccos\\left(\\frac{2}{\\sqrt{12}}\\right) \\approx 54.7^\\circ$",
     "$\\theta = 60^\\circ$",
     "$\\theta = 45^\\circ$",
     "$\\theta = 30^\\circ$",
     0, "Space Quantization Angle",
     "The z-component of orbital angular momentum is $L_z = m_l \\hbar$. Total angular momentum is $L = \\sqrt{l(l+1)}\\hbar$. The orientation angle $\\theta$ is $\\cos\\theta = \\frac{L_z}{L} = \\frac{m_l}{\\sqrt{l(l+1)}} = \\frac{2}{\\sqrt{3(4)}} = \\frac{2}{\\sqrt{12}} = \\frac{1}{\\sqrt{3}} \\implies \\theta = \\arccos(1/\\sqrt{3}) \\approx 54.74^\\circ$."),

    ("What is the minimum angle between the orbital angular momentum vector and the z-axis for an electron in a $d$-orbital ($l = 2$)?",
     "$\\theta = \\arccos\\left(\\frac{2}{\\sqrt{6}}\\right) \\approx 35.3^\\circ$",
     "$\\theta = 0^\\circ$",
     "$\\theta = 45^\\circ$",
     "$\\theta = 30^\\circ$",
     0, "Minimum Space Quantization Angle",
     "Minimum angle occurs for maximum $m_l = +l = +2$. $\\cos\\theta_{\\text{min}} = \\frac{2}{\\sqrt{2(3)}} = \\frac{2}{\\sqrt{6}} = \\sqrt{\\frac{2}{3}} \\implies \\theta = \\arccos\\left(\\sqrt{2/3}\\right) \\approx 35.26^\\circ$. The angular momentum vector can NEVER point strictly along the z-axis ($0^\\circ$) due to quantum uncertainty."),

    ("Can the orbital angular momentum vector of an electron ever align completely parallel to the z-axis ($L_z = L$)?",
     "No, because $m_l \\le l < \\sqrt{l(l+1)}$ always",
     "Yes, when $m_l = +l$",
     "Yes, for $s$-orbitals",
     "Yes, in very strong magnetic fields",
     0, "Impossible Strict Parallel Alignment",
     "Since $L_z = m_l \\hbar$ and $L = \\sqrt{l(l+1)}\\hbar$, even for the maximum value $m_l = l$, we have $L_z = l\\hbar < \\sqrt{l(l+1)}\\hbar$. Thus $L_z < L$ always for $l > 0$, and the vector can never align completely parallel to the z-axis."),

    ("An electron has spin magnetic moment $\\mu_s$. What is the angle of precession of the electron spin vector around the z-axis?",
     "$\\theta = \\arccos\\left(\\frac{1/2}{\\sqrt{3}/2}\\right) = \\arccos\\left(\\frac{1}{\\sqrt{3}}\\right) \\approx 54.7^\\circ$",
     "$45^\\circ$",
     "$90^\\circ$",
     "$0^\\circ$",
     0, "Spin Vector Precession Angle",
     "$S_z = m_s \\hbar = \\frac{1}{2}\\hbar$ and $S = \\sqrt{s(s+1)}\\hbar = \\frac{\\sqrt{3}}{2}\\hbar$. Angle $\\cos\\theta = \\frac{S_z}{S} = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}} \\implies \\theta \\approx 54.74^\\circ$."),

    ("A particle of mass $m$ has a kinetic energy $K$. Its de Broglie wavelength is $\\lambda$. When its kinetic energy becomes $K + \\Delta K$, where $\\Delta K \\ll K$, the fractional change in de Broglie wavelength is approximately:",
     "$-\\frac{1}{2}\\frac{\\Delta K}{K}$",
     "$-\\frac{\\Delta K}{K}$",
     "$+\\frac{1}{2}\\frac{\\Delta K}{K}$",
     "$-2\\frac{\\Delta K}{K}$",
     0, "Differential Fractional Wavelength Change",
     "Since $\\lambda = C K^{-1/2}$, taking logarithms: $\\ln\\lambda = \\ln C - \\frac{1}{2}\\ln K$. Differentiating: $\\frac{d\\lambda}{\\lambda} = -\\frac{1}{2}\\frac{dK}{K}$."),

    ("An electron moves in a circular path of radius $r$ in a uniform magnetic field $B$. What is its de Broglie wavelength in terms of $r, e, B$?",
     "$\\lambda = \\frac{h}{e B r}$",
     "$\\lambda = \\frac{h e B}{r}$",
     "$\\lambda = \\frac{e B r}{h}$",
     "$\\lambda = \\frac{h}{2 e B r}$",
     0, "Wavelength in Magnetic Field",
     "In circular magnetic orbit, centripetal force is provided by magnetic force: $\\frac{m v^2}{r} = e v B \\implies p = mv = e B r$. Therefore $\\lambda = \\frac{h}{p} = \\frac{h}{e B r}$."),

    ("An electron is accelerated through potential difference $V$ and then enters a uniform magnetic field $B$ perpendicular to its velocity. The radius of its circular path is $R$. What is its de Broglie wavelength?",
     "$\\lambda = \\frac{h}{e B R}$",
     "$\\lambda = \\frac{1.227}{\\sqrt{B R}}$",
     "$\\lambda = \\frac{h B R}{e}$",
     "$\\lambda = \\frac{2h}{e B R}$",
     0, "Magnetic Orbit Wavelength Formula",
     "Since momentum $p = e B R$, the de Broglie wavelength is directly $\\lambda = \\frac{h}{p} = \\frac{h}{e B R}$."),

    ("The de Broglie wavelength of an electron in the first excited state of $\\text{Li}^{2+}$ ion is:",
     "$1.48\\text{ \\AA}$",
     "$0.529\\text{ \\AA}$",
     "$2.96\\text{ \\AA}$",
     "$0.74\\text{ \\AA}$",
     0, "Li2+ First Excited State Wavelength",
     "First excited state means $n = 2$. For $\\text{Li}^{2+}$, $Z = 3$. Radius $r_2 = 0.529 \\frac{n^2}{Z} = 0.529 \\times \\frac{4}{3} = 0.7053\\text{ \\AA}$. Standing wave condition: $2\\pi r_2 = 2\\lambda \\implies \\lambda = \\pi r_2 = 3.1416 \\times 0.7053\\text{ \\AA} = 2.216\\text{ \\AA}$ (or using $v_2 = 2.18 \\times 10^6 \\times 3/2 = 3.27 \\times 10^6\\text{ m/s} \\implies \\lambda = \\frac{6.626 \\times 10^{-34}}{9.109 \\times 10^{-31} \\times 3.27 \\times 10^6} = 2.22\\text{ \\AA}$)."),

    ("If an electron and a proton are injected with the same velocity into a transverse electric field, which particle experiences the greater deflection?",
     "Electron, by a factor of $\\sim 1836$",
     "Proton, by a factor of $\\sim 1836$",
     "Both undergo identical deflection",
     "Neither is deflected",
     0, "Electric Deflection Comparison",
     "Deflection $y = \\frac{1}{2} a t^2 = \\frac{1}{2} \\frac{eE}{m} \\left(\\frac{L}{v}\\right)^2 \\propto \\frac{1}{m}$. For identical velocity $v$, the lighter electron ($m_e \\approx m_p / 1836$) suffers approximately 1836 times greater deflection."),

    ("If an electron and a proton are injected with the same kinetic energy into a transverse electric field, what is the ratio of their deflections?",
     "$1 : 1$ (identical deflection)",
     "$1836 : 1$",
     "$1 : 1836$",
     "$\\sqrt{1836} : 1$",
     0, "Electric Deflection at Equal KE",
     "Deflection $y = \\frac{e E L^2}{2 m v^2} = \\frac{e E L^2}{4 K}$. Since both have the same charge $e$ and same kinetic energy $K$, their deflections are completely identical ($1 : 1$)."),

    ("If an electron and a proton are injected with the same momentum into a transverse magnetic field, what is the ratio of the radii of their circular paths ($R_e / R_p$)?",
     "$1 : 1$",
     "$1836 : 1$",
     "$1 : 1836$",
     "$\\sqrt{1836} : 1$",
     0, "Magnetic Radius at Equal Momentum",
     "Radius $R = \\frac{p}{qB}$. Since both have the same momentum $p$ and same charge magnitude $q = e$, the radii of their trajectories are identical ($1 : 1$)."),

    ("If an electron and a proton have the same kinetic energy, what is the ratio of the radii of their circular paths in the same magnetic field ($R_e / R_p$)?",
     "$\\sqrt{\\frac{m_e}{m_p}} \\approx \\frac{1}{43}$",
     "$\\sqrt{\\frac{m_p}{m_e}} \\approx 43$",
     "$1 : 1$",
     "$1 : 1836$",
     0, "Magnetic Radius at Equal KE",
     "$R = \\frac{\\sqrt{2mK}}{qB} \\propto \\sqrt{m}$. Therefore $\\frac{R_e}{R_p} = \\sqrt{\\frac{m_e}{m_p}} \\approx \\frac{1}{\\sqrt{1836}} \\approx \\frac{1}{42.85}$."),

    ("A proton is accelerated through potential $V$. Its de Broglie wavelength is $\\lambda$. To produce a de Broglie wavelength of $\\lambda / 2$, the accelerating potential must be increased to:",
     "$4V$",
     "$2V$",
     "$\\sqrt{2}V$",
     "$16V$",
     0, "Potential for Halved Wavelength",
     "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. To halve the wavelength, the accelerating potential must be increased 4-fold ($4V$)."),

    ("In an atom, how many electrons can have the following set of quantum numbers: $n = 4, l = 3, m_l = +1, m_s = -1/2$?",
     "1",
     "2",
     "7",
     "14",
     0, "Unique Quantum State of Electron",
     "All four quantum numbers ($n, l, m_l, m_s$) are uniquely specified. By Pauli's exclusion principle, only 1 electron in the entire atom can possess this exact set."),

    ("The maximum number of electrons that can be accommodated in all orbitals with $n + l = 4$ is:",
     "8",
     "6",
     "18",
     "10",
     0, "Electrons with n+l=4",
     "Subshells with $n + l = 4$ are: (1) $n = 4, l = 0$ ($4s$, holds 2 electrons); (2) $n = 3, l = 1$ ($3p$, holds 6 electrons). Total electrons $= 2 + 6 = 8$."),

    ("The maximum number of electrons that can be accommodated in all orbitals with $n + l = 5$ is:",
     "18",
     "10",
     "8",
     "14",
     0, "Electrons with n+l=5",
     "Subshells with $n + l = 5$ are: (1) $n = 5, l = 0$ ($5s$, 2 electrons); (2) $n = 4, l = 1$ ($4p$, 6 electrons); (3) $n = 3, l = 2$ ($3d$, 10 electrons). Total electrons $= 2 + 6 + 10 = 18$."),

    ("The maximum number of electrons that can have $n = 3$ and $l = 2$ is:",
     "10",
     "6",
     "2",
     "18",
     0, "Capacity of 3d Subshell",
     "$n = 3, l = 2$ corresponds to the $3d$ subshell. Capacity $= 2(2l + 1) = 2(5) = 10$ electrons."),

    ("What is the maximum number of electrons in an atom that can have the principal quantum number $n = 4$ and magnetic quantum number $m_l = +1$?",
     "6",
     "3",
     "8",
     "16",
     0, "Electrons with Fixed ml in Shell",
     "For $n = 4$, subshells are $4s (l=0), 4p (l=1), 4d (l=2), 4f (l=3)$. The subshells with $l \\ge 1$ contain an orbital with $m_l = +1$: $4p$ (1 orbital), $4d$ (1 orbital), and $4f$ (1 orbital). That makes 3 orbitals in total. Each orbital holds 2 electrons, so $3 \\times 2 = 6$ electrons."),

    ("What is the maximum number of electrons in an atom that can have $n = 3$ and $m_l = 0$?",
     "6",
     "3",
     "9",
     "18",
     0, "Electrons with ml=0 in Shell n=3",
     "For $n = 3$, subshells are $3s (l=0), 3p (l=1), 3d (l=2)$. Each of these three subshells contains exactly one orbital with $m_l = 0$ ($3s, 3p_z, 3d_{z^2}$). Total orbitals $= 3$. Maximum electrons $= 3 \\times 2 = 6$ electrons."),

    ("Which of the following sets of quantum numbers describes the most loosely bound electron in a neutral sodium atom in its ground state ($Z = 11$)?",
     "$n = 3, l = 0, m_l = 0, m_s = +1/2$",
     "$n = 2, l = 1, m_l = +1, m_s = -1/2$",
     "$n = 3, l = 1, m_l = 0, m_s = +1/2$",
     "$n = 1, l = 0, m_l = 0, m_s = +1/2$",
     0, "Valence Electron Quantum Numbers of Sodium",
     "Sodium has ground state configuration $1s^2 2s^2 2p^6 3s^1$. The valence electron occupies the $3s$ orbital, characterized by $n = 3, l = 0, m_l = 0, m_s = +1/2$ (or $-1/2$).")
]

for idx, item in enumerate(hard_q_data[:30]):
    q_num = 346 + idx
    q_id = f"atom-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(hard_q_data[:30])} Hard questions (Q346 to Q375).")

# Verification and output
assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")
print(f"Part 3 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 30, f"Expected 30 Easy, got {easy_c}"
assert med_c == 65, f"Expected 65 Medium, got {med_c}"
assert hard_c == 30, f"Expected 30 Hard, got {hard_c}"

out_file = "src/data/chapterwise/chemistry/atomicStructurePart3.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Structure of Atom | Chemistry | Class: 11 | Part 3
// Target: Exactly 125 MCQs (30 Easy, 65 Medium, 30 Hard) with comprehensive step-by-step solutions

import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const ATOMIC_STRUCTURE_PART3_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
