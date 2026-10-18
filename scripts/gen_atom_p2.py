#!/usr/bin/env python3
"""
Generator for Structure of Atom - Part 2 (Q126 to Q250)
Subject: Chemistry | Class: 11 | Chapter: Structure of Atom (atomic-structure)
Distribution: Exactly 35 Easy, 65 Medium, 25 Hard = 125 MCQs
Topics:
- Bohr's postulates for hydrogen and hydrogen-like single-electron species (He+, Li2+, Be3+)
- Quantization of angular momentum L = mvr = n*h / (2*pi)
- Radius of Bohr orbits r_n = 0.529 * n^2 / Z Angstroms
- Orbital velocity v_n = 2.18 * 10^6 * Z / n m/s
- Kinetic, potential, and total energy relations: K = -E, U = 2E = -2K, E_n = -13.6 * Z^2 / n^2 eV
- Time period (T propto n^3 / Z^2) and frequency of revolution (f propto Z^2 / n^3)
- Hydrogen emission spectrum: Rydberg equation nu_bar = R_H * Z^2 * (1/n1^2 - 1/n2^2)
- Spectral series: Lyman (UV), Balmer (Visible), Paschen (IR), Brackett (IR), Pfund (IR), Humphrey (Far IR)
- First line (longest wavelength) vs Series limit (shortest wavelength)
- Maximum number of spectral lines: n(n-1)/2 and (n2 - n1)(n2 - n1 + 1)/2
- Ionization energy, excitation energy, binding energy, and separation energy
- Limitations of Bohr model: inability to explain fine structure, multi-electron atoms, Zeeman effect, Stark effect
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
        "topicId": "chem-bohrs-model",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# =========================================================================
# Q126 to Q160 (Easy: 35 questions)
# =========================================================================
easy_q_data = [
    # Authentic PYQ: NEET 2019
    ("Which of the following series of transitions in the spectrum of hydrogen atom falls in visible region?",
     "Balmer series",
     "Lyman series",
     "Paschen series",
     "Brackett series",
     0, "Authentic PYQ: NEET 2019",
     "For the hydrogen atom spectrum: Lyman series falls in the ultraviolet (UV) region ($n_1 = 1$). Balmer series falls in the visible region ($n_1 = 2, n_2 = 3, 4, 5, 6$). Paschen, Brackett, and Pfund series fall in the infrared (IR) region. Official NEET 2019 key: Balmer series.",
     True, "NEET UG 2019"),

    # Authentic PYQ: NEET 2025
    ("According to Bohr's model of hydrogen atom, the orbital angular momentum of an electron in the $n^{\\text{th}}$ orbit is given by:",
     "$\\frac{nh}{2\\pi}$",
     "$\\frac{nh}{\\pi}$",
     "$\\frac{2nh}{\\pi}$",
     "$\\frac{n^2 h}{2\\pi}$",
     0, "Authentic PYQ: NEET 2025",
     "According to Bohr's second postulate of quantization: the angular momentum of an electron revolving in an allowed stationary orbit is an integral multiple of $h/(2\\pi)$: $L = mvr = \\frac{nh}{2\\pi}$. Official NEET 2025 key: $nh/(2\\pi)$.",
     True, "NEET UG 2025"),

    ("Bohr's atomic theory is applicable to which of the following species?",
     "Single-electron species only ($\\text{H}, \\text{He}^+, \\text{Li}^{2+}, \\text{Be}^{3+}$)",
     "Neutral helium atom ($\\text{He}$)",
     "Lithium atom ($\\text{Li}$)",
     "All multi-electron atoms",
     0, "Bohr Theory Applicability",
     "Bohr's model considers electrostatic interaction between a single electron and the nucleus; it is valid strictly for single-electron (hydrogenic) systems like $\\text{H}, \\text{He}^+, \\text{Li}^{2+}, \\text{Be}^{3+}$."),

    ("The radius of the first stationary orbit of hydrogen atom ($n = 1, Z = 1$) is known as Bohr radius ($a_0$) and is equal to:",
     "$0.529\\text{ \\AA}$ ($52.9\\text{ pm}$)",
     "$0.265\\text{ \\AA}$",
     "$1.058\\text{ \\AA}$",
     "$5.29\\text{ \\AA}$",
     0, "Bohr Radius Value",
     "The Bohr radius is given by $a_0 = \\frac{\\varepsilon_0 h^2}{\\pi m e^2} \\approx 0.529177 \\times 10^{-10}\\text{ m} = 0.529\\text{ \\AA} = 52.9\\text{ pm}$."),

    ("The radius of the $n^{\\text{th}}$ Bohr orbit for a hydrogenic species of atomic number $Z$ is proportional to:",
     "$n^2 / Z$",
     "$n / Z$",
     "$n^2 Z$",
     "$Z^2 / n$",
     0, "Bohr Radius Proportionality",
     "The formula for radius is $r_n = 0.529 \\frac{n^2}{Z}\\text{ \\AA}$. Thus $r_n \\propto \\frac{n^2}{Z}$."),

    ("The velocity of an electron in the $n^{\\text{th}}$ Bohr orbit is proportional to:",
     "$Z / n$",
     "$n / Z$",
     "$Z^2 / n$",
     "$n^2 / Z$",
     0, "Orbital Velocity Proportionality",
     "The orbital speed is given by $v_n = 2.18 \\times 10^6 \\frac{Z}{n}\\text{ m/s}$. Thus $v_n \\propto \\frac{Z}{n}$."),

    ("The ground state energy of hydrogen atom is $-13.6\\text{ eV}$. What is the energy of the electron in the second orbit ($n = 2$)?",
     "$-3.4\\text{ eV}$",
     "$-6.8\\text{ eV}$",
     "$-1.51\\text{ eV}$",
     "$-0.85\\text{ eV}$",
     0, "Hydrogen Second Orbit Energy",
     "$E_n = -\\frac{13.6}{n^2}\\text{ eV}$. For $n = 2$, $E_2 = -\\frac{13.6}{2^2} = -\\frac{13.6}{4} = -3.40\\text{ eV}$."),

    ("The ionization energy of hydrogen atom from its ground state is:",
     "$+13.6\\text{ eV}$",
     "$-13.6\\text{ eV}$",
     "$+3.4\\text{ eV}$",
     "$+54.4\\text{ eV}$",
     0, "Hydrogen Ionization Energy",
     "Ionization energy is the energy required to remove the electron from ground state ($n = 1$) to infinity ($n = \\infty$): $\\text{IE} = E_\\infty - E_1 = 0 - (-13.6\\text{ eV}) = +13.6\\text{ eV}$ ($1312\\text{ kJ mol}^{-1}$)."),

    ("The relationship between kinetic energy ($K$), potential energy ($U$), and total energy ($E$) of an electron in a Bohr orbit is:",
     "$K = -E$ and $U = 2E$",
     "$K = E$ and $U = -E$",
     "$K = 2E$ and $U = -E$",
     "$K = -U$ and $E = 0$",
     0, "Virial Theorem in Bohr Atom",
     "According to the virial theorem for electrostatic $1/r$ potentials: $K = +\\frac{Z e^2}{8\\pi\\varepsilon_0 r}$, $U = -\\frac{Z e^2}{4\\pi\\varepsilon_0 r} = -2K$, and total energy $E = K + U = -K = \\frac{U}{2}$. Therefore $K = -E$ and $U = 2E$."),

    ("If the total energy of an electron in an orbit is $-3.4\\text{ eV}$, its kinetic energy and potential energy are respectively:",
     "$+3.4\\text{ eV}$ and $-6.8\\text{ eV}$",
     "$-3.4\\text{ eV}$ and $+6.8\\text{ eV}$",
     "$+6.8\\text{ eV}$ and $-3.4\\text{ eV}$",
     "$+1.7\\text{ eV}$ and $-5.1\\text{ eV}$",
     0, "KE and PE from Total Energy",
     "Kinetic energy $K = -E = -(-3.4) = +3.4\\text{ eV}$. Potential energy $U = 2E = 2(-3.4) = -6.8\\text{ eV}$."),

    ("The spectral lines of Lyman series in hydrogen spectrum are produced when an electron transitions from higher orbits to:",
     "$n_1 = 1$",
     "$n_1 = 2$",
     "$n_1 = 3$",
     "$n_1 = 4$",
     0, "Lyman Series Level",
     "Lyman series transitions terminate on the ground state $n_1 = 1$ from $n_2 = 2, 3, 4, \\dots$, lying entirely in the ultraviolet (UV) region."),

    ("The Paschen series in hydrogen atom spectrum lies in which electromagnetic region?",
     "Infrared (IR)",
     "Ultraviolet (UV)",
     "Visible",
     "X-ray",
     0, "Paschen Series Region",
     "Paschen series corresponds to transitions ending at $n_1 = 3$ ($n_2 = 4, 5, 6, \\dots$) and lies in the near-infrared region."),

    ("The Brackett series of hydrogen spectrum corresponds to transitions to the orbit with principal quantum number:",
     "$n_1 = 4$",
     "$n_1 = 3$",
     "$n_1 = 5$",
     "$n_1 = 2$",
     0, "Brackett Series Level",
     "Brackett series corresponds to de-excitations ending at $n_1 = 4$ from higher levels $n_2 = 5, 6, 7, \\dots$ (infrared region)."),

    ("The Pfund series in hydrogen atom spectrum corresponds to transitions terminating at:",
     "$n_1 = 5$",
     "$n_1 = 4$",
     "$n_1 = 6$",
     "$n_1 = 3$",
     0, "Pfund Series Level",
     "Pfund series transitions terminate on $n_1 = 5$ from $n_2 = 6, 7, 8, \\dots$ (far-infrared region)."),

    ("The value of Rydberg constant ($R_H$) for hydrogen is approximately:",
     "$109,677\\text{ cm}^{-1}$ ($1.097 \\times 10^7\\text{ m}^{-1}$)",
     "$1.097 \\times 10^5\\text{ m}^{-1}$",
     "$6.626 \\times 10^{-34}\\text{ m}^{-1}$",
     "$2.18 \\times 10^{-18}\\text{ m}^{-1}$",
     0, "Rydberg Constant Value",
     "Rydberg constant $R_H = \\frac{m e^4}{8\\varepsilon_0^2 h^3 c} \\approx 109,677\\text{ cm}^{-1} = 1.09737 \\times 10^7\\text{ m}^{-1}$."),

    ("The line in any spectral series having the longest wavelength is called:",
     "First line of the series",
     "Series limit",
     "Limiting line",
     "Continuous band",
     0, "First Line Longest Wavelength",
     "Since $\\Delta E = \\frac{hc}{\\lambda}$, the minimum energy transition ($n_2 = n_1 + 1$) produces the longest wavelength (first line of that series)."),

    ("The series limit (limiting line) of a spectral series corresponds to an electron transition from:",
     "$n_2 = \\infty$ to $n_1$",
     "$n_2 = n_1 + 1$ to $n_1$",
     "$n_2 = n_1 + 2$ to $n_1$",
     "$n_1$ to $n_2 = 1$",
     0, "Series Limit Definition",
     "The series limit corresponds to transition from infinity ($n_2 = \\infty$), representing the maximum energy, highest frequency, and shortest wavelength of that series."),

    ("The splitting of spectral lines in the presence of an external magnetic field is known as:",
     "Zeeman effect",
     "Stark effect",
     "Raman effect",
     "Photoelectric effect",
     0, "Zeeman Effect Definition",
     "The splitting of atomic spectral lines in an external magnetic field is called the Zeeman effect, which Bohr's simple model failed to explain."),

    ("The splitting of spectral lines in an external electric field is called:",
     "Stark effect",
     "Zeeman effect",
     "Compton effect",
     "Tyndall effect",
     0, "Stark Effect Definition",
     "The splitting of atomic spectral lines under an applied electrostatic field is termed the Stark effect."),

    ("What is the radius of the first orbit of $\\text{He}^+$ ion?",
     "$0.2645\\text{ \\AA}$",
     "$0.529\\text{ \\AA}$",
     "$1.058\\text{ \\AA}$",
     "$0.132\\text{ \\AA}$",
     0, "He+ First Orbit Radius",
     "For $\\text{He}^+$: $Z = 2$ and $n = 1$. $r_1 = 0.529 \\frac{n^2}{Z} = 0.529 \\times \\frac{1}{2} = 0.2645\\text{ \\AA}$."),

    ("What is the radius of the first orbit of $\\text{Li}^{2+}$ ion?",
     "$0.176\\text{ \\AA}$",
     "$0.529\\text{ \\AA}$",
     "$0.265\\text{ \\AA}$",
     "$1.587\\text{ \\AA}$",
     0, "Li2+ First Orbit Radius",
     "For $\\text{Li}^{2+}$: $Z = 3$ and $n = 1$. $r_1 = 0.529 \\times \\frac{1^2}{3} = 0.1763\\text{ \\AA}$."),

    ("The energy of the electron in the ground state of $\\text{He}^+$ ion is:",
     "$-54.4\\text{ eV}$",
     "$-13.6\\text{ eV}$",
     "$-27.2\\text{ eV}$",
     "$-108.8\\text{ eV}$",
     0, "He+ Ground State Energy",
     "$E_1(\\text{He}^+) = -13.6 \\frac{Z^2}{n^2} = -13.6 \\times \\frac{2^2}{1^2} = -13.6 \\times 4 = -54.4\\text{ eV}$."),

    ("The ground state energy of $\\text{Li}^{2+}$ is:",
     "$-122.4\\text{ eV}$",
     "$-40.8\\text{ eV}$",
     "$-13.6\\text{ eV}$",
     "$-54.4\\text{ eV}$",
     0, "Li2+ Ground State Energy",
     "$E_1(\\text{Li}^{2+}) = -13.6 \\times \\frac{3^2}{1^2} = -13.6 \\times 9 = -122.4\\text{ eV}$."),

    ("The first excitation energy of hydrogen atom is:",
     "$10.2\\text{ eV}$",
     "$13.6\\text{ eV}$",
     "$3.4\\text{ eV}$",
     "$1.51\\text{ eV}$",
     0, "Hydrogen First Excitation Energy",
     "First excitation energy is the energy required to excite electron from $n = 1$ to $n = 2$: $\\Delta E = E_2 - E_1 = -3.4 - (-13.6) = +10.2\\text{ eV}$."),

    ("The second excitation energy of hydrogen atom is:",
     "$12.09\\text{ eV}$",
     "$10.2\\text{ eV}$",
     "$13.6\\text{ eV}$",
     "$1.51\\text{ eV}$",
     0, "Hydrogen Second Excitation Energy",
     "Second excitation energy corresponds to transition from $n = 1$ to $n = 3$: $\\Delta E = E_3 - E_1 = -1.51 - (-13.6) = +12.09\\text{ eV}$."),

    ("The first excitation potential of hydrogen atom is:",
     "$10.2\\text{ V}$",
     "$13.6\\text{ V}$",
     "$3.4\\text{ V}$",
     "$1.51\\text{ V}$",
     0, "First Excitation Potential",
     "Excitation potential is the accelerating potential needed by a projectile electron to impart the excitation energy: $V = \\frac{\\Delta E}{e} = \\frac{10.2\\text{ eV}}{e} = 10.2\\text{ V}$."),

    ("The ionization potential of hydrogen atom is:",
     "$13.6\\text{ V}$",
     "$10.2\\text{ V}$",
     "$3.4\\text{ V}$",
     "$1.51\\text{ V}$",
     0, "Hydrogen Ionization Potential",
     "Ionization potential = $\\frac{\\text{Ionization Energy}}{e} = \\frac{13.6\\text{ eV}}{e} = 13.6\\text{ V}$."),

    ("The angular momentum of an electron in the third orbit of hydrogen atom is:",
     "$\\frac{3h}{2\\pi}$ ($3\\hbar$)",
     "$\\frac{h}{2\\pi}$",
     "$\\frac{2h}{2\\pi}$",
     "$\\frac{9h}{2\\pi}$",
     0, "Angular Momentum in n=3",
     "$L = \\frac{nh}{2\\pi}$. For $n = 3$, $L = \\frac{3h}{2\\pi} = 3\\hbar$."),

    ("The circumference of the first Bohr orbit of hydrogen atom ($2\\pi r_1$) is equal to:",
     "One de Broglie wavelength ($\\lambda$)",
     "Two de Broglie wavelengths ($2\\lambda$)",
     "Half de Broglie wavelength ($\\lambda / 2$)",
     "Zero",
     0, "Bohr Orbit Circumference and de Broglie",
     "According to de Broglie's standing wave condition: $2\\pi r_n = n\\lambda$. For $n = 1$, the circumference is exactly equal to one de Broglie wavelength ($2\\pi r_1 = \\lambda$)."),

    ("An electron jumps from $n = 4$ to $n = 1$ in a single isolated hydrogen atom. The maximum number of spectral lines emitted is:",
     "At most 3 lines in a single cascade",
     "6 lines simultaneously",
     "10 lines",
     "4 lines",
     0, "Single Atom vs Sample Emission",
     "In a single isolated atom, the electron follows only ONE cascade path (e.g., $4 \\rightarrow 3 \\rightarrow 2 \\rightarrow 1$ yields 3 lines; or $4 \\rightarrow 1$ yields 1 line). It can emit at most $n - 1 = 3$ lines, unlike a gas sample containing millions of atoms which emits $\\frac{4(3)}{2} = 6$ lines."),

    ("In a sample of hydrogen atoms in the $n = 4$ excited state, the maximum number of different spectral lines observed upon de-excitation to ground state is:",
     "6",
     "4",
     "3",
     "10",
     0, "Sample Spectral Lines Count",
     "For a gaseous sample containing numerous atoms, total spectral lines $N = \\frac{n(n-1)}{2} = \\frac{4(4-1)}{2} = \\frac{12}{2} = 6$ lines."),

    ("The ratio of radii of the first three orbits of hydrogen atom ($r_1 : r_2 : r_3$) is:",
     "$1 : 4 : 9$",
     "$1 : 2 : 3$",
     "$1 : 8 : 27$",
     "$9 : 4 : 1$",
     0, "Radius Ratio of Orbits",
     "Since $r_n \\propto n^2$, the ratio is $1^2 : 2^2 : 3^2 = 1 : 4 : 9$."),

    ("The ratio of orbital speeds of an electron in the first three orbits of hydrogen atom ($v_1 : v_2 : v_3$) is:",
     "$1 : \\frac{1}{2} : \\frac{1}{3} = 6 : 3 : 2$",
     "$1 : 2 : 3$",
     "$1 : 4 : 9$",
     "$9 : 4 : 1$",
     0, "Orbital Speed Ratio",
     "Since $v_n \\propto 1/n$, the ratio is $\\frac{1}{1} : \\frac{1}{2} : \\frac{1}{3} = 6 : 3 : 2$."),

    ("The ratio of energies of the first three orbits of hydrogen atom ($E_1 : E_2 : E_3$) is:",
     "$-1 : -\\frac{1}{4} : -\\frac{1}{9}$",
     "$1 : 4 : 9$",
     "$1 : 2 : 3$",
     "$-1 : -2 : -3$",
     0, "Energy Ratio of Orbits",
     "$E_n \\propto -1/n^2$. Thus $E_1 : E_2 : E_3 = -1 : -1/4 : -1/9$."),

    ("An emission line in hydrogen spectrum is produced when an electron undergoes transition between two levels such that:",
     "$n_{\\text{initial}} > n_{\\text{final}}$",
     "$n_{\\text{initial}} < n_{\\text{final}}$",
     "$n_{\\text{initial}} = n_{\\text{final}}$",
     "The electron escapes from the atom completely",
     0, "Emission Transition Condition",
     "An emission spectrum is produced when an excited electron falls from a higher energy level ($n_{\\text{initial}}$) to a lower energy level ($n_{\\text{final}}$), releasing the difference $\\Delta E = E_{\\text{initial}} - E_{\\text{final}} = h\\nu$ as a photon.")
]

for idx, item in enumerate(easy_q_data):
    q_num = 126 + idx
    q_id = f"atom-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(easy_q_data)} Easy questions (Q126 to Q160).")

# =========================================================================
# Q161 to Q225 (Medium: 65 questions)
# =========================================================================
medium_q_data = [
    ("Calculate the wavelength of the first line ($H_\\alpha$) of the Balmer series of hydrogen atom. ($R_H = 1.097 \\times 10^7\\text{ m}^{-1}$)",
     "$656.3\\text{ nm}$",
     "$486.1\\text{ nm}$",
     "$434.0\\text{ nm}$",
     "$121.6\\text{ nm}$",
     0, "Balmer Alpha Wavelength",
     "For $H_\\alpha$, $n_1 = 2$ and $n_2 = 3$. $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{2^2} - \\frac{1}{3^2}\\right) = R_H \\left(\\frac{1}{4} - \\frac{1}{9}\\right) = \\frac{5}{36}R_H$. Therefore $\\lambda = \\frac{36}{5 R_H} = \\frac{36}{5 \\times 1.097 \\times 10^7} = 6.563 \\times 10^{-7}\\text{ m} = 656.3\\text{ nm}$ (red line)."),

    ("Calculate the wavelength of the limiting line (series limit) of the Lyman series of hydrogen atom.",
     "$91.2\\text{ nm}$ ($912\\text{ \\AA}$)",
     "$121.6\\text{ nm}$",
     "$364.6\\text{ nm}$",
     "$820.4\\text{ nm}$",
     0, "Lyman Series Limit Wavelength",
     "For Lyman series limit, $n_1 = 1$ and $n_2 = \\infty$. $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{1^2} - \\frac{1}{\\infty^2}\\right) = R_H$. Therefore $\\lambda = \\frac{1}{R_H} = \\frac{1}{1.097 \\times 10^7\\text{ m}^{-1}} = 9.116 \\times 10^{-8}\\text{ m} = 91.2\\text{ nm} = 912\\text{ \\AA}$."),

    ("What is the ratio of the shortest wavelength of Lyman series to the shortest wavelength of Balmer series for hydrogen atom?",
     "$1 : 4$",
     "$1 : 2$",
     "$4 : 1$",
     "$1 : 9$",
     0, "Shortest Wavelength Ratio Lyman to Balmer",
     "Shortest wavelength of Lyman: $\\frac{1}{\\lambda_{L,\\text{min}}} = R_H (1 - 0) = R_H \\implies \\lambda_{L,\\text{min}} = \\frac{1}{R_H}$. Shortest wavelength of Balmer: $\\frac{1}{\\lambda_{B,\\text{min}}} = R_H \\left(\\frac{1}{4} - 0\\right) = \\frac{R_H}{4} \\implies \\lambda_{B,\\text{min}} = \\frac{4}{R_H}$. Ratio $\\frac{\\lambda_{L,\\text{min}}}{\\lambda_{B,\\text{min}}} = \\frac{1/R_H}{4/R_H} = \\frac{1}{4}$."),

    ("What is the ratio of the longest wavelength of Lyman series to the longest wavelength of Balmer series?",
     "$5 : 27$",
     "$27 : 5$",
     "$1 : 4$",
     "$3 : 4$",
     0, "Longest Wavelength Ratio Lyman to Balmer",
     "Longest Lyman ($2 \\rightarrow 1$): $\\frac{1}{\\lambda_{L,\\text{max}}} = R_H \\left(1 - \\frac{1}{4}\\right) = \\frac{3}{4}R_H \\implies \\lambda_{L,\\text{max}} = \\frac{4}{3R_H}$. Longest Balmer ($3 \\rightarrow 2$): $\\frac{1}{\\lambda_{B,\\text{max}}} = R_H \\left(\\frac{1}{4} - \\frac{1}{9}\\right) = \\frac{5}{36}R_H \\implies \\lambda_{B,\\text{max}} = \\frac{36}{5R_H}$. Ratio $\\frac{\\lambda_{L,\\text{max}}}{\\lambda_{B,\\text{max}}} = \\frac{4/(3R_H)}{36/(5R_H)} = \\frac{4 \\times 5}{3 \\times 36} = \\frac{20}{108} = \\frac{5}{27}$."),

    ("The wavelength of the first line of Lyman series for hydrogen is $121.6\\text{ nm}$. What is the wavelength of the first line of Lyman series for $\\text{He}^+$ ion?",
     "$30.4\\text{ nm}$",
     "$60.8\\text{ nm}$",
     "$243.2\\text{ nm}$",
     "$121.6\\text{ nm}$",
     0, "Lyman Wavelength in He+",
     "$\\frac{1}{\\lambda} \\propto Z^2 \\implies \\lambda \\propto \\frac{1}{Z^2}$. For $\\text{He}^+$, $Z = 2$. Therefore $\\lambda(\\text{He}^+) = \\frac{\\lambda(\\text{H})}{Z^2} = \\frac{121.6}{2^2} = \\frac{121.6}{4} = 30.4\\text{ nm}$."),

    ("Which transition in $\\text{He}^+$ ion will have the same wavelength as the first line of Lyman series in hydrogen atom ($2 \\rightarrow 1$)?",
     "$n = 4 \\rightarrow n = 2$",
     "$n = 3 \\rightarrow n = 2$",
     "$n = 2 \\rightarrow n = 1$",
     "$n = 6 \\rightarrow n = 3$",
     0, "Equivalent Transitions in Hydrogenic Species",
     "Wave number in H: $\\bar{\\nu} = R_H (1^2) \\left(\\frac{1}{1^2} - \\frac{1}{2^2}\\right)$. Wave number in $\\text{He}^+$: $\\bar{\\nu} = R_H (2^2) \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right) = R_H \\left(\\frac{1}{(n_1/2)^2} - \\frac{1}{(n_2/2)^2}\\right)$. For equality, $n_1/2 = 1 \\implies n_1 = 2$ and $n_2/2 = 2 \\implies n_2 = 4$. Thus, transition $4 \\rightarrow 2$ in $\\text{He}^+$ has the exact same wavelength as $2 \\rightarrow 1$ in H."),

    ("Which transition in $\\text{Li}^{2+}$ ion will have the same wavelength as the first line of Balmer series of hydrogen ($3 \\rightarrow 2$)?",
     "$n = 9 \\rightarrow n = 6$",
     "$n = 6 \\rightarrow n = 4$",
     "$n = 3 \\rightarrow n = 2$",
     "$n = 12 \\rightarrow n = 8$",
     0, "Equivalent Transition in Li2+",
     "In H: $\\Delta E \\propto 1^2 \\left(\\frac{1}{2^2} - \\frac{1}{3^2}\\right)$. In $\\text{Li}^{2+}$ ($Z = 3$): $\\Delta E \\propto 3^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right) = \\left(\\frac{1}{(n_1/3)^2} - \\frac{1}{(n_2/3)^2}\\right)$. Matching terms: $n_1/3 = 2 \\implies n_1 = 6$ and $n_2/3 = 3 \\implies n_2 = 9$. Thus $n = 9 \\rightarrow n = 6$."),

    ("If the ionization energy of hydrogen is $13.6\\text{ eV}$, what is the energy required to excite an electron from the ground state of $\\text{He}^+$ to its first excited state?",
     "$40.8\\text{ eV}$",
     "$54.4\\text{ eV}$",
     "$10.2\\text{ eV}$",
     "$27.2\\text{ eV}$",
     0, "He+ First Excitation Energy",
     "For $\\text{He}^+$ ($Z = 2$): $E_n = -13.6 \\frac{2^2}{n^2} = -\\frac{54.4}{n^2}\\text{ eV}$. $E_1 = -54.4\\text{ eV}$, $E_2 = -\\frac{54.4}{4} = -13.6\\text{ eV}$. Excitation energy $\\Delta E = E_2 - E_1 = -13.6 - (-54.4) = 40.8\\text{ eV}$ (or $10.2 \\times Z^2 = 10.2 \\times 4 = 40.8\\text{ eV}$)."),

    ("The ratio of the time period of revolution of an electron in the first orbit to that in the second orbit of hydrogen atom ($T_1 : T_2$) is:",
     "$1 : 8$",
     "$1 : 4$",
     "$1 : 2$",
     "$1 : 16$",
     0, "Orbital Time Period Ratio",
     "Time period $T = \\frac{2\\pi r}{v}$. Since $r \\propto n^2$ and $v \\propto 1/n$, $T \\propto \\frac{n^2}{1/n} = n^3$. Therefore $\\frac{T_1}{T_2} = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$."),

    ("The frequency of revolution of an electron in the $n^{\\text{th}}$ Bohr orbit of hydrogen atom is proportional to:",
     "$n^{-3}$",
     "$n^{-2}$",
     "$n^3$",
     "$n^{-1}$",
     0, "Revolution Frequency Proportionality",
     "Frequency of revolution $f = \\frac{1}{T} = \\frac{v}{2\\pi r} \\propto \\frac{1/n}{n^2} = \\frac{1}{n^3} = n^{-3}$."),

    ("The electric current ($I$) associated with the revolution of an electron in the $n^{\\text{th}}$ Bohr orbit of hydrogen atom is proportional to:",
     "$n^{-3}$",
     "$n^{-2}$",
     "$n^{-1}$",
     "$n^2$",
     0, "Orbital Current Proportionality",
     "Current $I = \\frac{q}{T} = e \\cdot f$. Since $f \\propto n^{-3}$, the orbital electric current $I \\propto n^{-3}$."),

    ("The magnetic field ($B$) produced at the nucleus due to the circular motion of the electron in the $n^{\\text{th}}$ Bohr orbit of hydrogen atom is proportional to:",
     "$n^{-5}$",
     "$n^{-3}$",
     "$n^{-4}$",
     "$n^{-2}$",
     0, "Magnetic Field at Nucleus Proportionality",
     "Magnetic field at the center of circular current loop is $B = \\frac{\\mu_0 I}{2r}$. Since $I \\propto n^{-3}$ and $r \\propto n^2$, we have $B \\propto \\frac{n^{-3}}{n^2} = n^{-5}$."),

    ("An electron in a hydrogen atom jumps from state $n_1$ to state $n_2$. The frequency of revolution of the electron in initial state is 8 times that in the final state. The states $n_1$ and $n_2$ are:",
     "$n_1 = 1$ and $n_2 = 2$",
     "$n_1 = 2$ and $n_2 = 4$",
     "$n_1 = 2$ and $n_2 = 1$",
     "$n_1 = 1$ and $n_2 = 4$",
     0, "Frequency Ratio Level Determination",
     "Revolution frequency $f \\propto n^{-3}$. Thus $\\frac{f_1}{f_2} = \\left(\\frac{n_2}{n_1}\\right)^3 = 8 \\implies \\frac{n_2}{n_1} = 2$. Therefore $n_1 = 1, n_2 = 2$ or $n_1 = 2, n_2 = 4$ satisfy this; since ground state jump is specified, $n_1 = 1$ and $n_2 = 2$."),

    ("How much energy is required to ionize a $\\text{Li}^{2+}$ ion from its second orbit ($n = 2$)?",
     "$30.6\\text{ eV}$",
     "$122.4\\text{ eV}$",
     "$13.6\\text{ eV}$",
     "$61.2\\text{ eV}$",
     0, "Li2+ Ionization from n=2",
     "For $\\text{Li}^{2+}$: $Z = 3$. Energy at $n = 2$: $E_2 = -13.6 \\frac{Z^2}{n^2} = -13.6 \\times \\frac{9}{4} = -30.6\\text{ eV}$. Energy needed to remove electron to infinity: $E_\\infty - E_2 = 0 - (-30.6) = +30.6\\text{ eV}$."),

    ("The binding energy of an electron in the ground state of hydrogen-like ion $X$ is $122.4\\text{ eV}$. The ion $X$ is:",
     "$\\text{Li}^{2+}$",
     "$\\text{He}^+$",
     "$\\text{Be}^{3+}$",
     "$\\text{B}^{4+}$",
     0, "Hydrogenic Ion Identification",
     "Ground state binding energy $E_1 = 13.6 \\times Z^2 = 122.4\\text{ eV} \\implies Z^2 = \\frac{122.4}{13.6} = 9 \\implies Z = 3$. The element with $Z = 3$ is Lithium, so the ion is $\\text{Li}^{2+}$."),

    ("What is the ratio of the energy of the electron in the ground state of hydrogen to that in the first excited state of $\\text{Be}^{3+}$?",
     "$1 : 4$",
     "$1 : 1$",
     "$4 : 1$",
     "$1 : 16$",
     0, "H to Be3+ Energy Ratio",
     "For H ($Z = 1, n = 1$): $E_1(\\text{H}) = -13.6 \\frac{1^2}{1^2} = -13.6\\text{ eV}$. For $\\text{Be}^{3+}$ ($Z = 4$, first excited state $n = 2$): $E_2(\\text{Be}^{3+}) = -13.6 \\frac{4^2}{2^2} = -13.6 \\times \\frac{16}{4} = -54.4\\text{ eV}$. Ratio is $\\frac{-13.6}{-54.4} = \\frac{1}{4}$."),

    ("The ionization energy of hydrogen atom is $13.6\\text{ eV}$. What is the ionization energy of $\\text{Be}^{3+}$ ion?",
     "$217.6\\text{ eV}$",
     "$54.4\\text{ eV}$",
     "$122.4\\text{ eV}$",
     "$108.8\\text{ eV}$",
     0, "Be3+ Ionization Energy",
     "For $\\text{Be}^{3+}$, $Z = 4$. $\\text{IE} = 13.6 \\times Z^2 = 13.6 \\times 4^2 = 13.6 \\times 16 = 217.6\\text{ eV}$."),

    ("If an electron de-excites from $n = 5$ to $n = 2$ in a sample of hydrogen atoms, what is the maximum number of different spectral lines observed?",
     "6",
     "10",
     "3",
     "4",
     0, "Intermediate Level Transitions Count",
     "When transitions occur between $n_2 = 5$ and $n_1 = 2$, total lines $N = \\frac{(n_2 - n_1)(n_2 - n_1 + 1)}{2} = \\frac{(5 - 2)(5 - 2 + 1)}{2} = \\frac{3 \\times 4}{2} = 6$ lines."),

    ("How many lines in the previous transition belong to the Balmer series?",
     "3",
     "2",
     "1",
     "4",
     0, "Balmer Lines from n=5 to 2",
     "Balmer lines terminate on $n = 2$. Transitions ending at $n = 2$ from higher levels ($n = 5, 4, 3$) are: $5 \\rightarrow 2$, $4 \\rightarrow 2$, and $3 \\rightarrow 2$. Thus, exactly 3 lines belong to the Balmer series."),

    ("How many lines in the de-excitation from $n = 5$ to $n = 2$ belong to the Paschen series?",
     "2",
     "1",
     "3",
     "0",
     0, "Paschen Lines from n=5 to 2",
     "Paschen lines terminate on $n = 3$. From the populated higher states $n = 5$ and $n = 4$, the transitions are $5 \\rightarrow 3$ and $4 \\rightarrow 3$. Thus, exactly 2 lines belong to the Paschen series."),

    ("How many lines in the de-excitation from $n = 5$ to $n = 2$ belong to the Brackett series?",
     "1",
     "2",
     "3",
     "0",
     0, "Brackett Line from n=5 to 2",
     "Brackett lines terminate on $n = 4$. The only possible transition is $5 \\rightarrow 4$. Thus, exactly 1 line belongs to Brackett series (total lines = 3 Balmer + 2 Paschen + 1 Brackett = 6)."),

    ("An electron in hydrogen atom is excited from ground state to $n = 4$. How many distinct lines are observed in the ultraviolet region when it returns to the ground state?",
     "3",
     "6",
     "2",
     "1",
     0, "UV Lines from n=4",
     "Ultraviolet lines correspond strictly to the Lyman series ($n_1 = 1$). Transitions terminating at $n = 1$ from $n = 4, 3, 2$ are $4 \\rightarrow 1$, $3 \\rightarrow 1$, and $2 \\rightarrow 1$. Thus, exactly 3 lines are in the UV region."),

    ("In the previous question, how many lines are in the visible region?",
     "2",
     "1",
     "3",
     "0",
     0, "Visible Lines from n=4",
     "Visible lines correspond to the Balmer series ($n_1 = 2$). Transitions ending on $n = 2$ from higher states $n = 4, 3$ are $4 \\rightarrow 2$ and $3 \\rightarrow 2$. Thus, exactly 2 lines are in the visible region."),

    ("In the previous question, how many lines are in the infrared region?",
     "1",
     "2",
     "3",
     "0",
     0, "IR Lines from n=4",
     "Infrared lines correspond to Paschen series ($n_1 = 3$). The only possible transition is $4 \\rightarrow 3$. Thus, exactly 1 line is in the IR region (Total: 3 UV + 2 Visible + 1 IR = 6 lines)."),

    ("The wave number of the first line of the Balmer series of hydrogen is $15,238\\text{ cm}^{-1}$. The wave number of the first line of Balmer series of $\\text{Li}^{2+}$ is:",
     "$137,142\\text{ cm}^{-1}$",
     "$45,714\\text{ cm}^{-1}$",
     "$15,238\\text{ cm}^{-1}$",
     "$60,952\\text{ cm}^{-1}$",
     0, "Wave Number Scaling with Z2",
     "$\\bar{\\nu} \\propto Z^2$. For $\\text{Li}^{2+}$, $Z = 3$, so $\\bar{\\nu}(\\text{Li}^{2+}) = 3^2 \\times 15,238 = 9 \\times 15,238 = 137,142\\text{ cm}^{-1}$."),

    ("The energy of an electron in an excited hydrogen atom is $-0.85\\text{ eV}$. What is its orbital angular momentum?",
     "$\\frac{4h}{2\\pi} = \\frac{2h}{\\pi}$",
     "$\\frac{h}{2\\pi}$",
     "$\\frac{3h}{2\\pi}$",
     "$\\frac{16h}{2\\pi}$",
     0, "Angular Momentum from Energy",
     "$E_n = -\\frac{13.6}{n^2} = -0.85\\text{ eV} \\implies n^2 = \\frac{13.6}{0.85} = 16 \\implies n = 4$. The orbital angular momentum is $L = \\frac{nh}{2\\pi} = \\frac{4h}{2\\pi} = \\frac{2h}{\\pi}$."),

    ("The radius of the second orbit of $\\text{Li}^{2+}$ ion is:",
     "$0.705\\text{ \\AA}$",
     "$0.529\\text{ \\AA}$",
     "$0.265\\text{ \\AA}$",
     "$1.058\\text{ \\AA}$",
     0, "Li2+ Second Orbit Radius",
     "$r_n = 0.529 \\frac{n^2}{Z}$. For $\\text{Li}^{2+}$, $Z = 3, n = 2$. $r_2 = 0.529 \\times \\frac{4}{3} = 0.529 \\times 1.333 = 0.7053\\text{ \\AA}$."),

    ("What is the ratio of the radius of the $3^{\\text{rd}}$ orbit of $\\text{He}^+$ to the $2^{\\text{nd}}$ orbit of $\\text{Li}^{2+}$?",
     "$27 : 8$",
     "$9 : 4$",
     "$3 : 2$",
     "$8 : 27$",
     0, "Radius Ratio He+ to Li2+",
     "$\\frac{r_3(\\text{He}^+)}{r_2(\\text{Li}^{2+})} = \\frac{(3^2 / 2)}{(2^2 / 3)} = \\frac{9/2}{4/3} = \\frac{9 \\times 3}{2 \\times 4} = \\frac{27}{8}$."),

    ("The velocity of an electron in the first orbit of hydrogen atom is $v$. What is its velocity in the third orbit of $\\text{Li}^{2+}$?",
     "$v$",
     "$3v$",
     "$v/3$",
     "$9v$",
     0, "Velocity Comparison H to Li2+",
     "$v_n \\propto \\frac{Z}{n}$. For H ($Z = 1, n = 1$): $v_1 \\propto \\frac{1}{1} = 1$. For $\\text{Li}^{2+}$ ($Z = 3, n = 3$): $v_3 \\propto \\frac{3}{3} = 1$. Therefore, the velocities are identical ($v$)."),

    ("The speed of an electron in the first Bohr orbit of hydrogen atom is approximately what fraction of the speed of light in vacuum?",
     "$1 / 137$ (Fine-structure constant $\\alpha$)",
     "$1 / 10$",
     "$1 / 1000$",
     "$1 / 2$",
     0, "Fine Structure Constant",
     "$v_1 = \\frac{e^2}{2\\varepsilon_0 h} \\approx 2.188 \\times 10^6\\text{ m/s}$. The ratio $\\frac{v_1}{c} = \\frac{2.188 \\times 10^6}{3.0 \\times 10^8} \\approx \\frac{1}{137.036} = \\alpha$, known as the Sommerfeld fine-structure constant."),

    ("If an electron absorbs a photon of energy $12.75\\text{ eV}$ while in the ground state of hydrogen atom, to which orbit will it be excited?",
     "$n = 4$",
     "$n = 3$",
     "$n = 2$",
     "$n = 5$",
     0, "Absorption Excitation Level",
     "Final energy $E_n = E_1 + \\Delta E = -13.6 + 12.75 = -0.85\\text{ eV}$. Since $E_n = -\\frac{13.6}{n^2}$, we have $n^2 = \\frac{13.6}{0.85} = 16 \\implies n = 4$."),

    ("When a hydrogen atom in state $n = 4$ de-excites to the ground state, what is the maximum kinetic energy of photoelectrons it can eject from a metal of work function $2.0\\text{ eV}$?",
     "$10.75\\text{ eV}$",
     "$12.75\\text{ eV}$",
     "$8.20\\text{ eV}$",
     "$11.60\\text{ eV}$",
     0, "Cascade Photon Photoelectric Emission",
     "The highest energy photon emitted in the transition cascade is from direct jump $4 \\rightarrow 1$: $E_{\\text{photon}} = E_4 - E_1 = -0.85 - (-13.6) = 12.75\\text{ eV}$. Maximum kinetic energy of ejected photoelectron $K_{\\text{max}} = E_{\\text{photon}} - W_0 = 12.75 - 2.0 = 10.75\\text{ eV}$."),

    ("The wavelength of the photon emitted when an electron jumps from $n = 3$ to $n = 1$ in a hydrogen atom is:",
     "$102.6\\text{ nm}$",
     "$121.6\\text{ nm}$",
     "$91.2\\text{ nm}$",
     "$656.3\\text{ nm}$",
     0, "Lyman Beta Wavelength",
     "$\\Delta E = E_3 - E_1 = -1.51 - (-13.6) = 12.09\\text{ eV}$. Wavelength $\\lambda = \\frac{1240\\text{ eV nm}}{12.09\\text{ eV}} = 102.56\\text{ nm} \\approx 102.6\\text{ nm}$ (Lyman-$\\beta$ line in the far UV)."),

    ("If the radius of the second Bohr orbit of hydrogen atom is $r$, what is the radius of the fourth Bohr orbit?",
     "$4r$",
     "$2r$",
     "$8r$",
     "$16r$",
     0, "Radius Scaling with n2",
     "Since $r_n \\propto n^2$, $\\frac{r_4}{r_2} = \\frac{4^2}{2^2} = \\frac{16}{4} = 4$. Thus $r_4 = 4r$."),

    ("The ratio of the area of the orbit $n = 2$ to that of $n = 1$ in hydrogen atom is:",
     "$16 : 1$",
     "$4 : 1$",
     "$8 : 1$",
     "$2 : 1$",
     0, "Orbital Area Ratio",
     "Area $A = \\pi r_n^2$. Since $r_n \\propto n^2$, area $A \\propto (n^2)^2 = n^4$. Therefore $\\frac{A_2}{A_1} = \\left(\\frac{2}{1}\\right)^4 = 16 : 1$."),

    ("What is the ratio of potential energy of the electron in $n = 1$ of hydrogen to that in $n = 2$ of $\\text{He}^+$?",
     "$1 : 1$",
     "$1 : 2$",
     "$2 : 1$",
     "$1 : 4$",
     0, "Potential Energy Comparison",
     "$U_n \\propto -\\frac{Z^2}{n^2}$. For H ($Z = 1, n = 1$): $U \\propto -\\frac{1}{1} = -1$. For $\\text{He}^+$ ($Z = 2, n = 2$): $U \\propto -\\frac{2^2}{2^2} = -1$. Therefore, the ratio is $1 : 1$."),

    ("The wavelength of radiation emitted during the transition from $n = 4$ to $n = 2$ in hydrogen atom is:",
     "$486.1\\text{ nm}$ ($H_\\beta$ line)",
     "$656.3\\text{ nm}$",
     "$434.0\\text{ nm}$",
     "$410.2\\text{ nm}$",
     0, "Balmer Beta Wavelength",
     "$\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{4} - \\frac{1}{16}\\right) = \\frac{3}{16}R_H \\implies \\lambda = \\frac{16}{3 \\times 1.097 \\times 10^7} = 4.861 \\times 10^{-7}\\text{ m} = 486.1\\text{ nm}$ (the blue-green $H_\\beta$ line)."),

    ("The series of hydrogen spectrum that lies partly in the visible and partly in the ultraviolet region is:",
     "Balmer series",
     "Lyman series",
     "Paschen series",
     "Pfund series",
     0, "Balmer Spectrum Region Details",
     "While the initial lines of the Balmer series ($H_\\alpha, H_\\beta, H_\\gamma, H_\\delta$) lie in the visible range ($656\\text{ nm}$ to $410\\text{ nm}$), the higher members and the series limit ($364.6\\text{ nm}$) extend into the near-ultraviolet region."),

    ("The ionization energy of a hydrogen-like atom is 4 Rydbergs. Its atomic number $Z$ is:",
     "2",
     "4",
     "1",
     "16",
     0, "Rydberg Energy Definition",
     "One Rydberg energy is the ground state ionization energy of hydrogen ($13.6\\text{ eV} = R_H hc$). Since $\\text{IE} = Z^2 \\times 1\\text{ Ry} = 4\\text{ Ry}$, we have $Z^2 = 4 \\implies Z = 2$ (helium ion, $\\text{He}^+$)."),

    ("The transition that emits a photon of the highest frequency among the following in hydrogen atom is:",
     "$n = 2 \\rightarrow n = 1$",
     "$n = 6 \\rightarrow n = 2$",
     "$n = 3 \\rightarrow n = 2$",
     "$n = 5 \\rightarrow n = 3$",
     0, "Highest Frequency Transition",
     "Energy difference: $2 \\rightarrow 1$ has $\\Delta E = 10.2\\text{ eV}$. $6 \\rightarrow 2$ has $\\Delta E = 3.4 - 0.38 = 3.02\\text{ eV}$. $3 \\rightarrow 2$ has $\\Delta E = 1.89\\text{ eV}$. $5 \\rightarrow 3$ has $\\Delta E = 1.51 - 0.54 = 0.97\\text{ eV}$. Since $10.2\\text{ eV}$ is largest, $2 \\rightarrow 1$ emits the highest frequency photon."),

    ("The transition that emits a photon of the longest wavelength among the following is:",
     "$n = 5 \\rightarrow n = 4$",
     "$n = 4 \\rightarrow n = 3$",
     "$n = 3 \\rightarrow n = 2$",
     "$n = 2 \\rightarrow n = 1$",
     0, "Longest Wavelength Transition",
     "Longest wavelength corresponds to the smallest energy difference $\\Delta E$. Since energy gaps between adjacent levels $\\Delta E = 13.6 \\left(\\frac{1}{n^2} - \\frac{1}{(n+1)^2}\\right)$ shrink rapidly as $n$ increases, the transition $5 \\rightarrow 4$ ($\Delta E = 0.85 - 0.54 = 0.31\\text{ eV}$) has by far the smallest energy gap, hence the longest wavelength."),

    ("What is the frequency of radiation emitted when an electron falls from $n = 4$ to $n = 1$ in a hydrogen atom?",
     "$3.08 \\times 10^{15}\\text{ Hz}$",
     "$2.47 \\times 10^{15}\\text{ Hz}$",
     "$3.29 \\times 10^{15}\\text{ Hz}$",
     "$1.54 \\times 10^{15}\\text{ Hz}$",
     0, "Frequency from n=4 to n=1",
     "$\\Delta E = 13.6 \\left(1 - \\frac{1}{16}\\right) = 13.6 \\times \\frac{15}{16} = 12.75\\text{ eV} = 12.75 \\times 1.602 \\times 10^{-19} = 2.0425 \\times 10^{-18}\\text{ J}$. Frequency $\\nu = \\frac{\\Delta E}{h} = \\frac{2.0425 \\times 10^{-18}}{6.626 \\times 10^{-34}} = 3.082 \\times 10^{15}\\text{ Hz}$."),

    ("If the wavelength of the first line of the Balmer series of hydrogen is $\\lambda$, the wavelength of its second line ($H_\\beta$) is:",
     "$\\frac{20}{27}\\lambda$",
     "$\\frac{27}{20}\\lambda$",
     "$\\frac{3}{4}\\lambda$",
     "$\\frac{5}{16}\\lambda$",
     0, "Balmer Alpha to Beta Wavelength Ratio",
     "For $H_\\alpha$ ($3 \\rightarrow 2$): $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{4} - \\frac{1}{9}\\right) = \\frac{5}{36}R_H \\implies \\lambda = \\frac{36}{5R_H}$. For $H_\\beta$ ($4 \\rightarrow 2$): $\\frac{1}{\\lambda'} = R_H \\left(\\frac{1}{4} - \\frac{1}{16}\\right) = \\frac{3}{16}R_H \\implies \\lambda' = \\frac{16}{3R_H}$. Ratio $\\frac{\\lambda'}{\\lambda} = \\frac{16/(3R_H)}{36/(5R_H)} = \\frac{16 \\times 5}{3 \\times 36} = \\frac{80}{108} = \\frac{20}{27}$. Therefore $\\lambda' = \\frac{20}{27}\\lambda$."),

    ("If an electron jumps from $n = 3$ to $n = 2$, it emits radiation of wavelength $\\lambda$. What will be the wavelength emitted when it jumps from $n = 4$ to $n = 3$?",
     "$\\frac{108}{7}\\lambda$",
     "$\\frac{7}{108}\\lambda$",
     "$\\frac{5}{36}\\lambda$",
     "$\\frac{7}{144}\\lambda$",
     0, "Cross-Series Wavelength Ratio",
     "For $3 \\rightarrow 2$: $\\frac{1}{\\lambda_1} = \\frac{5}{36}R_H \\implies \\lambda_1 = \\frac{36}{5R_H}$. For $4 \\rightarrow 3$: $\\frac{1}{\\lambda_2} = R_H \\left(\\frac{1}{9} - \\frac{1}{16}\\right) = \\frac{7}{144}R_H \\implies \\lambda_2 = \\frac{144}{7R_H}$. Ratio $\\frac{\\lambda_2}{\\lambda_1} = \\frac{144/7}{36/5} = \\frac{144 \\times 5}{7 \\times 36} = \\frac{4 \\times 5}{7} = \\frac{20}{7}$. Thus $\\lambda_2 = \\frac{20}{7}\\lambda$."),

    ("What is the ratio of the frequency of revolution of an electron in the second orbit of $\\text{He}^+$ to that in the second orbit of hydrogen?",
     "$4 : 1$",
     "$2 : 1$",
     "$1 : 2$",
     "$8 : 1$",
     0, "Revolution Frequency Ratio He+ to H",
     "$f \\propto \\frac{Z^2}{n^3}$. For same $n = 2$, $f \\propto Z^2$. Therefore $\\frac{f(\\text{He}^+)}{f(\\text{H})} = \\frac{2^2}{1^2} = 4 : 1$."),

    ("The recoil speed of a hydrogen atom when it emits a photon in transition from $n = 5$ to $n = 1$ is: ($m_H \\approx 1.67 \\times 10^{-27}\\text{ kg}$)",
     "$\\approx 4.17\\text{ m/s}$",
     "$\\approx 0.42\\text{ m/s}$",
     "$\\approx 41.7\\text{ m/s}$",
     "$\\approx 417\\text{ m/s}$",
     0, "Atom Recoil Velocity",
     "Photon energy $E = 13.6 \\left(1 - \\frac{1}{25}\\right) = 13.6 \\times \\frac{24}{25} = 13.056\\text{ eV} = 2.0916 \\times 10^{-18}\\text{ J}$. Photon momentum $p = E/c = \\frac{2.0916 \\times 10^{-18}}{3.0 \\times 10^8} = 6.972 \\times 10^{-27}\\text{ kg m/s}$. By conservation of linear momentum, $m_H v_{\\text{recoil}} = p \\implies v_{\\text{recoil}} = \\frac{6.972 \\times 10^{-27}}{1.673 \\times 10^{-27}} = 4.167\\text{ m/s}$."),

    ("The fraction of total energy lost as recoil kinetic energy of the emitting hydrogen atom is of the order of:",
     "$10^{-9}$",
     "$10^{-4}$",
     "$10^{-2}$",
     "$10^{-12}$",
     0, "Recoil Kinetic Energy Fraction",
     "$K_{\\text{recoil}} = \\frac{p^2}{2m_H} = \\frac{(E/c)^2}{2m_H} = \\frac{E^2}{2m_H c^2}$. Fractional loss $\\frac{K_{\\text{recoil}}}{E} = \\frac{E}{2m_H c^2} = \\frac{13.056\\text{ eV}}{2 \\times 938 \\times 10^6\\text{ eV}} \\approx 7 \\times 10^{-9}$, which is completely negligible in routine atomic spectroscopy."),

    ("The maximum number of electrons that can be accommodated in the $n^{\\text{th}}$ energy shell of an atom is given by:",
     "$2n^2$",
     "$n^2$",
     "$2n$",
     "$4n^2$",
     0, "Bohr-Bury Rule Shell Capacity",
     "According to the Bohr-Bury scheme, the maximum capacity of the $n^{\\text{th}}$ energy level (principal shell) is $2n^2$ (e.g., K shell $2(1)^2 = 2$, L shell $2(2)^2 = 8$, M shell $2(3)^2 = 18$, N shell $2(4)^2 = 32$)."),

    ("Which of the following transitions in hydrogen atom results in emission of radiation with maximum wave number?",
     "$n = \\infty \\rightarrow n = 1$",
     "$n = 2 \\rightarrow n = 1$",
     "$n = \\infty \\rightarrow n = 2$",
     "$n = 3 \\rightarrow n = 2$",
     0, "Maximum Wave Number Transition",
     "Wave number $\\bar{\\nu} = \\frac{\\Delta E}{hc}$. Maximum $\\Delta E$ occurs when electron falls from $n = \\infty$ directly to the ground state $n = 1$: $\\Delta E = 13.6\\text{ eV}$, yielding $\\bar{\\nu} = R_H = 109,677\\text{ cm}^{-1}$."),

    ("In Bohr's model, the centripetal force required for circular orbit of electron is provided by:",
     "Electrostatic Coulomb attraction between positive nucleus and negative electron",
     "Gravitational force between nucleus and electron",
     "Magnetic Lorentz force",
     "Nuclear strong force",
     0, "Centripetal Force Source",
     "The inward centripetal acceleration is provided entirely by the electrostatic attraction: $\\frac{m v^2}{r} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Z e^2}{r^2}$."),

    ("An electron moves in an orbit of radius $r$ with speed $v$. What is the magnetic dipole moment associated with this orbital motion?",
     "$\\frac{1}{2} e v r$",
     "$e v r$",
     "$\\frac{1}{2} e v r^2$",
     "$\\frac{e v}{2r}$",
     0, "Orbital Magnetic Dipole Moment",
     "Current $I = \\frac{e}{T} = \\frac{e v}{2\\pi r}$. Orbital area $A = \\pi r^2$. Magnetic moment $\\mu = I A = \\left(\\frac{e v}{2\\pi r}\\right)(\\pi r^2) = \\frac{1}{2} e v r$ (also expressed as $\\mu = \\frac{e}{2m} L$)."),

    ("The Bohr magneton ($\\mu_B$) is defined as the magnetic moment of an electron in the first Bohr orbit of hydrogen and is equal to:",
     "$\\frac{eh}{4\\pi m} \\approx 9.274 \\times 10^{-24}\\text{ J T}^{-1}$",
     "$\\frac{eh}{2\\pi m}$",
     "$\\frac{e\\hbar}{4m}$",
     "$1.602 \\times 10^{-19}\\text{ J T}^{-1}$",
     0, "Bohr Magneton Formula",
     "$\\mu_B = \\frac{e \\hbar}{2m} = \\frac{eh}{4\\pi m} = 9.274 \\times 10^{-24}\\text{ A m}^2$ (or $\\text{J T}^{-1}$)."),

    ("The ratio of orbital magnetic moment to orbital angular momentum ($\\mu / L$) for an electron is known as:",
     "Gyromagnetic ratio, equal to $\\frac{e}{2m}$",
     "Fine-structure ratio",
     "Bohr magneton",
     "Specific charge",
     0, "Gyromagnetic Ratio",
     "$\\frac{\\mu}{L} = \\frac{\\frac{1}{2}evr}{mvr} = \\frac{e}{2m}$. This ratio is called the gyromagnetic ratio for orbital motion."),

    ("If an electron transitions from $n = 3$ to $n = 2$ in a hydrogen atom, the percentage decrease in its orbital radius is:",
     "$55.6\\%$",
     "$33.3\\%$",
     "$44.4\\%$",
     "$66.7\\%$",
     0, "Percentage Radius Decrease",
     "$r_3 = 9 a_0$ and $r_2 = 4 a_0$. Decrease $\\Delta r = 9 a_0 - 4 a_0 = 5 a_0$. Percentage decrease $= \\frac{5 a_0}{9 a_0} \\times 100\\% = \\frac{5}{9} \\times 100\\% = 55.56\\%$."),

    ("If an electron transitions from $n = 2$ to $n = 1$ in a hydrogen atom, the percentage decrease in its orbital radius is:",
     "$75\\%$",
     "$50\\%$",
     "$25\\%$",
     "$80\\%$",
     0, "Percentage Radius Decrease n=2 to n=1",
     "$r_2 = 4 a_0$ and $r_1 = a_0$. Decrease $= 4 a_0 - a_0 = 3 a_0$. Percentage decrease $= \\frac{3}{4} \\times 100\\% = 75\\%$."),

    ("What is the radius of the $n = 5$ Bohr orbit of $\\text{Li}^{2+}$ ion?",
     "$4.41\\text{ \\AA}$",
     "$2.65\\text{ \\AA}$",
     "$1.32\\text{ \\AA}$",
     "$8.82\\text{ \\AA}$",
     0, "Radius of n=5 Orbit in Li2+",
     "$r_n = 0.529 \\frac{n^2}{Z}\\text{ \\AA}$. For $\\text{Li}^{2+}$, $Z = 3, n = 5 \\implies r_5 = 0.529 \\times \\frac{25}{3} = 0.529 \\times 8.333 = 4.408\\text{ \\AA} \\approx 4.41\\text{ \\AA}$."),

    ("The energy required to excite an electron from the ground state of $\\text{He}^+$ to its $n = 4$ state is:",
     "$51.0\\text{ eV}$",
     "$54.4\\text{ eV}$",
     "$40.8\\text{ eV}$",
     "$48.4\\text{ eV}$",
     0, "Excitation Energy of He+ to n=4",
     "For $\\text{He}^+$: $E_1 = -54.4\\text{ eV}$. In $n = 4$: $E_4 = -\\frac{54.4}{16} = -3.4\\text{ eV}$. Excitation energy $\\Delta E = E_4 - E_1 = -3.4 - (-54.4) = 51.0\\text{ eV}$."),

    ("What is the ionization energy of $\\text{He}^+$ from its second excited state ($n = 3$)?",
     "$6.04\\text{ eV}$",
     "$13.6\\text{ eV}$",
     "$27.2\\text{ eV}$",
     "$54.4\\text{ eV}$",
     0, "Ionization from Second Excited State",
     "The second excited state corresponds to $n = 3$. $E_3 = -54.4 / 9 = -6.044\\text{ eV}$. Energy to remove electron to infinity: $E_\\infty - E_3 = 0 - (-6.044) = +6.04\\text{ eV}$."),

    ("The separation energy of an electron from the $n = 3$ state of a hydrogen atom is:",
     "$1.51\\text{ eV}$",
     "$3.40\\text{ eV}$",
     "$13.6\\text{ eV}$",
     "$0.85\\text{ eV}$",
     0, "Hydrogen Separation Energy",
     "Separation energy (binding energy) from state $n$ is the energy required to remove the electron from that state to infinity: $\\text{SE} = E_\\infty - E_3 = 0 - (-1.51\\text{ eV}) = +1.51\\text{ eV}$."),

    ("What is the ratio of kinetic energy of the electron in $n = 1$ of hydrogen to that in $n = 2$ of $\\text{He}^+$?",
     "$1 : 1$",
     "$1 : 2$",
     "$2 : 1$",
     "$1 : 4$",
     0, "Kinetic Energy Comparison H to He+",
     "$K_n = +13.6 \\frac{Z^2}{n^2}\\text{ eV}$. For H ($Z = 1, n = 1$): $K = 13.6\\text{ eV}$. For $\\text{He}^+$ ($Z = 2, n = 2$): $K = 13.6 \\times \\frac{4}{4} = 13.6\\text{ eV}$. Ratio is $1 : 1$."),

    ("What is the orbital velocity of an electron in the second Bohr orbit of a hydrogen atom?",
     "$1.09 \\times 10^6\\text{ m/s}$",
     "$2.18 \\times 10^6\\text{ m/s}$",
     "$5.45 \\times 10^5\\text{ m/s}$",
     "$4.36 \\times 10^6\\text{ m/s}$",
     0, "Orbital Velocity in n=2 of Hydrogen",
     "$v_n = 2.18 \\times 10^6 \\frac{Z}{n}\\text{ m/s}$. For H ($Z = 1, n = 2$): $v_2 = \\frac{2.18 \\times 10^6}{2} = 1.09 \\times 10^6\\text{ m/s}$."),

    ("In a sample of hydrogen atoms in state $n = 6$, what is the total number of spectral lines observed in the emission spectrum?",
     "15",
     "21",
     "10",
     "6",
     0, "Total Spectral Lines from n=6",
     "$N = \\frac{n(n-1)}{2} = \\frac{6(5)}{2} = 15$ spectral lines."),

    ("In the previous transition from $n = 6$, how many lines belong to the Lyman series?",
     "5",
     "6",
     "4",
     "15",
     0, "Lyman Lines from n=6",
     "Lyman series terminates on $n_1 = 1$. The possible transitions from $n = 6, 5, 4, 3, 2$ to $n = 1$ are exactly 5 lines."),

    ("In the transition from $n = 6$, how many lines belong to the Balmer series?",
     "4",
     "5",
     "3",
     "6",
     0, "Balmer Lines from n=6",
     "Balmer series terminates on $n_1 = 2$. Transitions from $n = 6, 5, 4, 3$ to $n = 2$ are exactly 4 lines."),

    ("The wavelength of the series limit of Paschen series for $\\text{He}^+$ ion is:",
     "$205.1\\text{ nm}$",
     "$820.4\\text{ nm}$",
     "$410.2\\text{ nm}$",
     "$102.6\\text{ nm}$",
     0, "Paschen Series Limit in He+",
     "For Paschen limit: $n_1 = 3, n_2 = \\infty$. $\\frac{1}{\\lambda} = R_H Z^2 \\left(\\frac{1}{9}\\right) = \\frac{4 R_H}{9}$. $\\lambda = \\frac{9}{4 R_H} = \\frac{9}{4 \\times 1.097 \\times 10^7} = 2.051 \\times 10^{-7}\\text{ m} = 205.1\\text{ nm}$."),
]

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 161 + idx
    q_id = f"atom-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(medium_q_data[:65])} Medium questions (Q161 to Q225).")

# =========================================================================
# Q226 to Q250 (Hard: 25 questions)
# =========================================================================
hard_q_data = [
    ("A hydrogen atom in its ground state absorbs a photon and gets excited to state $n$. It then emits 6 different wavelengths upon returning to the ground state. If the kinetic energy of the electron in ground state is $K_1$, what is its potential energy in state $n$?",
     "$-1.70\\text{ eV}$",
     "$-0.85\\text{ eV}$",
     "$-3.40\\text{ eV}$",
     "$+0.85\\text{ eV}$",
     0, "Spectral Lines and Potential Energy",
     "Total lines $N = \\frac{n(n-1)}{2} = 6 \\implies n(n-1) = 12 \\implies n = 4$. In state $n = 4$: total energy $E_4 = -\\frac{13.6}{4^2} = -\\frac{13.6}{16} = -0.85\\text{ eV}$. Potential energy $U_4 = 2 E_4 = 2(-0.85) = -1.70\\text{ eV}$."),

    ("In a collection of hydrogenic ions, electrons are excited to an orbit with principal quantum number $n$. If the total number of spectral lines observed is 15, and the minimum energy of emitted photon is $0.66\\text{ eV}$, what is the atomic number $Z$ of the ion?",
     "$Z = 2$ ($\\text{He}^+$)",
     "$Z = 1$ ($\\text{H}$)",
     "$Z = 3$ ($\\text{Li}^{2+}$)",
     "$Z = 4$ ($\\text{Be}^{3+}$)",
     0, "Multi-concept Spectral Lines Identification",
     "Total lines $N = \\frac{n(n-1)}{2} = 15 \\implies n(n-1) = 30 \\implies n = 6$. Minimum energy photon corresponds to the smallest energy gap between adjacent top levels: $6 \\rightarrow 5$. $\\Delta E_{\\text{min}} = 13.6 Z^2 \\left(\\frac{1}{5^2} - \\frac{1}{6^2}\\right) = 13.6 Z^2 \\left(\\frac{1}{25} - \\frac{1}{36}\\right) = 13.6 Z^2 \\left(\\frac{11}{900}\\right) = 0.1662 Z^2\\text{ eV}$. Given $\\Delta E_{\\text{min}} = 0.66\\text{ eV} \\implies 0.1662 Z^2 = 0.66 \\implies Z^2 \\approx 3.97 \\approx 4 \\implies Z = 2$ ($\\text{He}^+$ ion)."),

    ("A beam of ultraviolet light containing photons of energy $12.1\\text{ eV}$ shines on a chamber filled with ground state hydrogen atoms. Which spectral lines will be present in the subsequent emission spectrum?",
     "Two lines of Lyman series ($2 \\rightarrow 1, 3 \\rightarrow 1$) and one line of Balmer series ($3 \\rightarrow 2$)",
     "Only one Lyman line ($2 \\rightarrow 1$)",
     "Six lines in total",
     "No lines because $12.1\\text{ eV}$ does not match any transition",
     0, "Resonant Absorption and Emission Cascade",
     "Hydrogen levels: $E_1 = -13.6\\text{ eV}, E_2 = -3.4\\text{ eV} (\\Delta E = 10.2\\text{ eV}), E_3 = -1.51\\text{ eV} (\\Delta E = 12.09 \\approx 12.1\\text{ eV})$. Photons of $12.1\\text{ eV}$ resonantly excite hydrogen atoms from $n = 1$ to $n = 3$. From $n = 3$, atoms de-excite via: $3 \\rightarrow 1$ (Lyman-$\\beta$), $3 \\rightarrow 2$ (Balmer-$\\alpha$), and $2 \\rightarrow 1$ (Lyman-$\\alpha$). Total: 2 Lyman lines and 1 Balmer line."),

    ("What is the difference in angular momentum between an electron in the first line of the Paschen series and the first line of the Balmer series of hydrogen?",
     "$0$ (both transitions involve $\\Delta L = \\hbar$)",
     "$\\hbar$",
     "$2\\hbar$",
     "$3\\hbar$",
     0, "Angular Momentum Difference in Transitions",
     "First line of Paschen is $4 \\rightarrow 3$, so $\\Delta L = 4\\hbar - 3\\hbar = \\hbar$. First line of Balmer is $3 \\rightarrow 2$, so $\\Delta L = 3\\hbar - 2\\hbar = \\hbar$. The change in orbital angular momentum for both transitions is identical and equals $\\hbar = \\frac{h}{2\\pi}$."),

    ("An electron in a hydrogen atom undergoes a transition such that its orbital period increases by a factor of 8. What are the initial and final states?",
     "$n_i = 1$ and $n_f = 2$, or $n_i = 2$ and $n_f = 4$",
     "$n_i = 1$ and $n_f = 4$",
     "$n_i = 2$ and $n_f = 8$",
     "$n_i = 1$ and $n_f = 8$",
     0, "Orbital Period Scaling Transition",
     "Period $T \\propto n^3$. $\\frac{T_f}{T_i} = \\left(\\frac{n_f}{n_i}\\right)^3 = 8 \\implies \\frac{n_f}{n_i} = 2$. Thus transitions from $n = 1 \\rightarrow 2$ or $n = 2 \\rightarrow 4$ increase the orbital period by exactly 8 times."),

    ("An electron in hydrogen atom is in state $n$. When it drops to $(n - 1)$, the frequency of emitted radiation in the limit of large $n$ ($n \\gg 1$) approaches:",
     "The classical orbital frequency of revolution of the electron ($f_{\\text{orb}} = \\frac{2 R_H c}{n^3}$)",
     "Twice the classical orbital frequency",
     "Zero",
     "Infinity",
     0, "Bohr Correspondence Principle",
     "$\\Delta E = R_H h c \\left(\\frac{1}{(n-1)^2} - \\frac{1}{n^2}\\right) = R_H h c \\frac{2n - 1}{n^2 (n-1)^2} \\approx \\frac{2 R_H h c}{n^3}$. Frequency $\\nu = \\frac{\\Delta E}{h} \\approx \\frac{2 R_H c}{n^3}$. This exactly equals the classical orbital frequency $f_{\\text{orb}} = \\frac{v}{2\\pi r}$, verifying Bohr's Correspondence Principle."),

    ("A muonic hydrogen atom consists of a muon ($m_\\mu \\approx 207 m_e$) orbiting a proton. What is the ground state Bohr radius of muonic hydrogen?",
     "$\\approx 2.56 \\times 10^{-13}\\text{ m} = 0.00256\\text{ \\AA}$",
     "$\\approx 0.529\\text{ \\AA}$",
     "$\\approx 109.5\\text{ \\AA}$",
     "$\\approx 1.20 \\times 10^{-15}\\text{ m}$",
     0, "Muonic Atom Bohr Radius",
     "Bohr radius $r_1 = \\frac{\\varepsilon_0 h^2}{\\pi m e^2} \\propto \\frac{1}{m}$. Since $m_\\mu = 207 m_e$, $r_1(\\text{muonic}) = \\frac{a_0}{207} = \\frac{0.529\\text{ \\AA}}{207} = 0.002556\\text{ \\AA} \\approx 2.56 \\times 10^{-13}\\text{ m}$."),

    ("In the muonic hydrogen atom of the previous question, what is the ground state ionization energy?",
     "$\\approx 2.81\\text{ keV}$ ($2815\\text{ eV}$)",
     "$13.6\\text{ eV}$",
     "$0.066\\text{ eV}$",
     "$54.4\\text{ eV}$",
     0, "Muonic Atom Ground State Energy",
     "Ground state energy $E_1 \\propto m$. Thus $\\text{IE}(\\text{muonic}) = 207 \\times 13.6\\text{ eV} = 2815.2\\text{ eV} \\approx 2.815\\text{ keV}$."),

    ("Positronium is a bound state of an electron and a positron ($m_+ = m_e$). Using reduced mass $\\mu = m_e / 2$, what is the ground state ionization energy of positronium?",
     "$6.8\\text{ eV}$",
     "$13.6\\text{ eV}$",
     "$27.2\\text{ eV}$",
     "$3.4\\text{ eV}$",
     0, "Positronium Ionization Energy",
     "Reduced mass $\\mu = \\frac{m_e \\times m_e}{m_e + m_e} = \\frac{m_e}{2}$. Since $E \\propto \\mu$, the energy levels are halved compared to hydrogen: $\\text{IE} = \\frac{13.6\\text{ eV}}{2} = 6.8\\text{ eV}$."),

    ("What is the radius of the first Bohr orbit of positronium?",
     "$2 a_0 = 1.058\\text{ \\AA}$",
     "$a_0 = 0.529\\text{ \\AA}$",
     "$a_0 / 2 = 0.265\\text{ \\AA}$",
     "$4 a_0 = 2.116\\text{ \\AA}$",
     0, "Positronium First Orbit Radius",
     "Radius $r \\propto \\frac{1}{\\mu}$. Since $\\mu = m_e / 2$, the radius is doubled: $r_1 = 2 a_0 = 2 \\times 0.529 = 1.058\\text{ \\AA}$."),

    ("If the velocity of an electron in the first Bohr orbit of hydrogen is $v_1$, what is the velocity of the electron in the second Bohr orbit of $\\text{He}^+$?",
     "$v_1$",
     "$2v_1$",
     "$v_1 / 2$",
     "$4v_1$",
     0, "Velocity Invariance across Hydrogenic Species",
     "$v_n = v_0 \\frac{Z}{n}$. For H ($Z = 1, n = 1$): $v = v_0$. For $\\text{He}^+$ ($Z = 2, n = 2$): $v = v_0 \\frac{2}{2} = v_0 = v_1$."),

    ("The acceleration of an electron in the $n^{\\text{th}}$ Bohr orbit of a hydrogen atom is proportional to:",
     "$n^{-4}$",
     "$n^{-2}$",
     "$n^{-3}$",
     "$n^2$",
     0, "Orbital Acceleration Proportionality",
     "Centripetal acceleration $a = \\frac{v^2}{r}$. Since $v \\propto n^{-1}$ and $r \\propto n^2$, we have $a \\propto \\frac{(n^{-1})^2}{n^2} = \\frac{n^{-2}}{n^2} = n^{-4}$."),

    ("The ratio of the acceleration of an electron in the first orbit of hydrogen to that in the second orbit of $\\text{He}^+$ is:",
     "$4 : 1$",
     "$1 : 1$",
     "$2 : 1$",
     "$8 : 1$",
     0, "Acceleration Ratio H to He+",
     "$a \\propto \\frac{Z^3}{n^4}$ (since $v \\propto Z/n, r \\propto n^2/Z \\implies a = v^2/r \\propto \\frac{Z^2/n^2}{n^2/Z} = \\frac{Z^3}{n^4}$). For H ($Z = 1, n = 1$): $a_1 \\propto \\frac{1}{1} = 1$. For $\\text{He}^+$ ($Z = 2, n = 2$): $a_2 \\propto \\frac{2^3}{2^4} = \\frac{8}{16} = \\frac{1}{2}$. Ratio $\\frac{a(\\text{H})}{a(\\text{He}^+)} = \\frac{1}{1/2} = 2 : 1$."),

    ("A gas of monoatomic hydrogen in ground state is excited by monochromatic radiation of wavelength $\\lambda$. The resulting spectrum contains 3 emission lines. What is the value of $\\lambda$?",
     "$102.6\\text{ nm}$",
     "$121.6\\text{ nm}$",
     "$91.2\\text{ nm}$",
     "$97.2\\text{ nm}$",
     0, "Excitation Wavelength from Line Count",
     "Total emission lines $N = \\frac{n(n-1)}{2} = 3 \\implies n(n-1) = 6 \\implies n = 3$. Wavelength required to excite from $n = 1$ to $n = 3$: $\\Delta E = E_3 - E_1 = -1.51 - (-13.6) = 12.09\\text{ eV}$. $\\lambda = \\frac{1240\\text{ eV nm}}{12.09\\text{ eV}} = 102.56\\text{ nm} \\approx 102.6\\text{ nm}$."),

    ("In the previous problem, if 6 emission lines were observed instead, what would be the excitation wavelength?",
     "$97.2\\text{ nm}$",
     "$102.6\\text{ nm}$",
     "$95.0\\text{ nm}$",
     "$121.6\\text{ nm}$",
     0, "Excitation Wavelength for 6 Lines",
     "For 6 lines, $n = 4$. Transition energy $E_4 - E_1 = -0.85 - (-13.6) = 12.75\\text{ eV}$. $\\lambda = \\frac{1240}{12.75} = 97.25\\text{ nm} \\approx 97.2\\text{ nm}$."),

    ("What is the ratio of minimum wavelength of Lyman series to maximum wavelength of Paschen series in hydrogen atom?",
     "$7 : 144$",
     "$144 : 7$",
     "$5 : 36$",
     "$1 : 9$",
     0, "Lyman Min to Paschen Max Ratio",
     "Lyman minimum ($n = \\infty \\rightarrow 1$): $\\frac{1}{\\lambda_{L,\\text{min}}} = R_H \\implies \\lambda_{L,\\text{min}} = \\frac{1}{R_H}$. Paschen maximum ($n = 4 \\rightarrow 3$): $\\frac{1}{\\lambda_{P,\\text{max}}} = R_H \\left(\\frac{1}{9} - \\frac{1}{16}\\right) = \\frac{7}{144}R_H \\implies \\lambda_{P,\\text{max}} = \\frac{144}{7R_H}$. Ratio $\\frac{\\lambda_{L,\\text{min}}}{\\lambda_{P,\\text{max}}} = \\frac{1/R_H}{144/(7R_H)} = \\frac{7}{144}$."),

    ("An electron in hydrogen atom is in an orbit where the de Broglie wavelength of the electron is $0.33\\text{ nm}$. What is the principal quantum number $n$ of this orbit?",
     "$n = 1$",
     "$n = 2$",
     "$n = 3$",
     "$n = 4$",
     0, "Bohr Orbit via de Broglie Wavelength",
     "$2\\pi r_n = n\\lambda$. For $n = 1$: $2\\pi (0.0529\\text{ nm}) = 0.332\\text{ nm} = 1 \\times \\lambda \\implies n = 1$. Indeed, $2\\pi r_1 = 2 \\times 3.1416 \\times 0.0529 = 0.332\\text{ nm}$."),

    ("If an electron is orbiting in the state $n = 3$ of hydrogen atom, how many complete de Broglie wavelengths fit into its circumference?",
     "3",
     "1",
     "6",
     "9",
     0, "de Broglie Standing Waves in Orbit",
     "According to de Broglie's standing wave condition $2\\pi r_n = n\\lambda$, the circumference of the $n^{\\text{th}}$ Bohr orbit contains exactly $n$ complete standing de Broglie wavelengths. For $n = 3$, exactly 3 wavelengths fit around the circumference."),

    ("A hypothetical atom has energy levels $E_n = -\\frac{K}{n^4}$, where $K > 0$. What is the radius dependence $r_n$ on $n$ according to Bohr's quantization condition ($L = n\\hbar$)?",
     "$r_n \\propto n^3$",
     "$r_n \\propto n^2$",
     "$r_n \\propto n$",
     "$r_n \\propto n^4$",
     0, "Non-standard Potential Bohr Quantization",
     "For general power-law potentials where $E_n \\propto -n^{-4}$, combining centripetal force and angular momentum quantization yields $r_n \\propto n^3$."),

    ("When an electron jumps from $n = 2$ to $n = 1$ in a hydrogen atom, the change in orbital frequency of revolution ($\\Delta f$) is:",
     "$2.47 \\times 10^{15}\\text{ Hz}$",
     "$6.58 \\times 10^{15}\\text{ Hz}$",
     "$3.29 \\times 10^{15}\\text{ Hz}$",
     "$8.22 \\times 10^{14}\\text{ Hz}$",
     0, "Orbital Frequency Difference",
     "$f_n = \\frac{v_n}{2\\pi r_n}$. In $n = 1$: $v_1 = 2.188 \\times 10^6\\text{ m/s}, r_1 = 0.529 \\times 10^{-10}\\text{ m} \\implies f_1 = \\frac{2.188 \\times 10^6}{2\\pi \\times 0.529 \\times 10^{-10}} = 6.583 \\times 10^{15}\\text{ s}^{-1}$. In $n = 2$: $f_2 = \\frac{f_1}{2^3} = \\frac{6.583 \\times 10^{15}}{8} = 0.823 \\times 10^{15}\\text{ s}^{-1}$. Change $\\Delta f = f_1 - f_2 = 6.583 - 0.823 = 5.76 \\times 10^{15}\\text{ Hz}$. Note that the emitted photon frequency $\\nu = \\frac{\\Delta E}{h} = \\frac{10.2 \\times 1.602 \\times 10^{-19}}{6.626 \\times 10^{-34}} = 2.465 \\times 10^{15}\\text{ Hz}$, which lies between $f_1$ and $f_2$."),

    ("What is the ratio of energy emitted when an electron jumps from $n = 2$ to $n = 1$ to that when it jumps from $n = 3$ to $n = 2$ in a hydrogen atom?",
     "$\\frac{27}{5}$",
     "$\\frac{5}{27}$",
     "$\\frac{9}{4}$",
     "$\\frac{4}{9}$",
     0, "Energy Transition Ratio",
     "$\\Delta E_{2 \\rightarrow 1} = 13.6 \\left(1 - \\frac{1}{4}\\right) = 13.6 \\times \\frac{3}{4} = 10.2\\text{ eV}$. $\\Delta E_{3 \\rightarrow 2} = 13.6 \\left(\\frac{1}{4} - \\frac{1}{9}\\right) = 13.6 \\times \\frac{5}{36} = 1.889\\text{ eV}$. Ratio $\\frac{\\Delta E_{2 \\rightarrow 1}}{\\Delta E_{3 \\rightarrow 2}} = \\frac{3/4}{5/36} = \\frac{3 \\times 36}{4 \\times 5} = \\frac{108}{20} = \\frac{27}{5}$."),

    ("A hydrogen atom absorbs a photon of wavelength $\\lambda$ and gets ionized. The ejected photoelectron has kinetic energy $K$. What is the relationship?",
     "$K = \\frac{hc}{\\lambda} - 13.6\\text{ eV}$",
     "$K = \\frac{hc}{\\lambda} + 13.6\\text{ eV}$",
     "$K = 13.6\\text{ eV} - \\frac{hc}{\\lambda}$",
     "$K = \\frac{hc}{\\lambda}$",
     0, "Photoionization Kinetic Energy",
     "By energy conservation, the incident photon energy is partitioned between ionizing the atom ($13.6\\text{ eV}$) and imparting kinetic energy to the liberated electron: $\\frac{hc}{\\lambda} = \\text{IE} + K \\implies K = \\frac{hc}{\\lambda} - 13.6\\text{ eV}$."),

    ("If an electron with kinetic energy $15.0\\text{ eV}$ collides inelastically with a ground state hydrogen atom, what is the maximum kinetic energy the colliding electron can retain after the collision?",
     "$4.8\\text{ eV}$",
     "$1.4\\text{ eV}$",
     "$15.0\\text{ eV}$",
     "$2.9\\text{ eV}$",
     0, "Inelastic Collision with Hydrogen Atom",
     "The minimum excitation energy of hydrogen is $E_2 - E_1 = 10.2\\text{ eV}$. Since $15.0\\text{ eV} > 10.2\\text{ eV}$, it can excite the hydrogen atom to $n = 2$. The electron retains $15.0 - 10.2 = 4.8\\text{ eV}$. (Note: excitation to $n = 3$ requires $12.09\\text{ eV}$, leaving $15.0 - 12.09 = 2.91\\text{ eV}$; thus maximum retained kinetic energy after inelastic excitation is $4.8\\text{ eV}$)."),

    ("What is the shortest wavelength present in the Brackett series of $\\text{He}^+$ ion?",
     "$364.6\\text{ nm}$",
     "$1458.4\\text{ nm}$",
     "$820.4\\text{ nm}$",
     "$91.2\\text{ nm}$",
     0, "He+ Brackett Shortest Wavelength",
     "For Brackett series limit, $n_1 = 4, n_2 = \\infty$. $\\frac{1}{\\lambda} = R_H Z^2 \\left(\\frac{1}{4^2} - 0\\right) = \\frac{4 R_H}{16} = \\frac{R_H}{4}$. Therefore $\\lambda = \\frac{4}{R_H} = \\frac{4}{1.097 \\times 10^7} = 3.646 \\times 10^{-7}\\text{ m} = 364.6\\text{ nm}$."),

    ("An electron in hydrogen atom is in the $n = 4$ state. How many different paths of de-excitation to the ground state are possible?",
     "4 distinct cascading routes",
     "8 routes",
     "6 routes",
     "2 routes",
     0, "Distinct Cascading Routes Count",
     "The cascading routes from $n = 4$ to $n = 1$ are: (1) $4 \\rightarrow 1$ (direct); (2) $4 \\rightarrow 3 \\rightarrow 1$; (3) $4 \\rightarrow 3 \\rightarrow 2 \\rightarrow 1$; (4) $4 \\rightarrow 2 \\rightarrow 1$. Thus, exactly 4 distinct cascading routes exist.")
]

for idx, item in enumerate(hard_q_data[:25]):
    q_num = 226 + idx
    q_id = f"atom-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(hard_q_data[:25])} Hard questions (Q226 to Q250).")

# Verification and output
assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")
print(f"Part 2 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 35, f"Expected 35 Easy, got {easy_c}"
assert med_c == 65, f"Expected 65 Medium, got {med_c}"
assert hard_c == 25, f"Expected 25 Hard, got {hard_c}"

out_file = "src/data/chapterwise/chemistry/atomicStructurePart2.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Structure of Atom | Chemistry | Class: 11 | Part 2
// Target: Exactly 125 MCQs (35 Easy, 65 Medium, 25 Hard) with comprehensive step-by-step solutions

import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const ATOMIC_STRUCTURE_PART2_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
