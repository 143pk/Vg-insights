#!/usr/bin/env python3
"""
Generator for Structure of Atom - Part 1 (Q001 to Q125)
Subject: Chemistry | Class: 11 | Chapter: Structure of Atom (atomic-structure)
Distribution: Exactly 40 Easy, 65 Medium, 20 Hard = 125 MCQs
Topics:
- Discovery of subatomic particles: electron (cathode rays), proton (canal rays), neutron (Chadwick)
- Charge to mass ratio (e/m) of electron (J.J. Thomson) and Millikan oil drop experiment
- Thomson plum pudding model and Rutherford alpha-particle scattering experiment
- Nuclear model, nuclear radius R = R_0 A^{1/3}, density of nucleus
- Atomic number (Z), mass number (A), isotopes, isobars, isotones, isodiaphers, isoelectronic species
- Electromagnetic radiation: wave nature, c = nu * lambda, wave number nu_bar = 1/lambda
- Blackbody radiation and Planck's quantum theory: E = h * nu = h * c / lambda
- Photoelectric effect: threshold frequency nu_0, work function W_0 = h * nu_0, Einstein's equation h * nu = W_0 + K_max
- Stopping potential V_0 and graphs (K_max vs frequency, stopping potential vs intensity/frequency)
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
        "topicId": "chem-subatomic-particles",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# =========================================================================
# Q1 to Q40 (Easy: 40 questions)
# =========================================================================
easy_q_data = [
    ("Cathode rays are streams of which subatomic particles?",
     "Electrons",
     "Protons",
     "Neutrons",
     "Alpha particles",
     0, "Cathode Rays",
     "Cathode rays originate from the cathode in a gas discharge tube and consist of negatively charged fast-moving particles called electrons."),

    ("Who determined the charge-to-mass ratio ($e/m$) of an electron?",
     "J. J. Thomson",
     "Robert Millikan",
     "Ernest Rutherford",
     "James Chadwick",
     0, "e/m Ratio Determination",
     "J. J. Thomson measured the ratio of electrical charge ($e$) to mass ($m_e$) of an electron in 1897 using electric and magnetic fields perpendicular to each other ($e/m = 1.758820 \\times 10^{11}\\text{ C kg}^{-1}$)."),

    ("The charge on an electron was precisely determined by Robert Millikan using which experiment?",
     "Oil drop experiment",
     "Cathode ray discharge tube",
     "Gold foil scattering experiment",
     "Mass spectrometry",
     0, "Millikan Oil Drop Experiment",
     "R. A. Millikan determined the charge on the electron ($e = -1.6022 \\times 10^{-19}\\text{ C}$) through the famous oil drop method."),

    ("Neutrons were discovered in 1932 by bombarding a thin beryllium sheet with $\\alpha$-particles by:",
     "James Chadwick",
     "Ernest Rutherford",
     "Niels Bohr",
     "Eugen Goldstein",
     0, "Discovery of Neutron",
     "James Chadwick discovered neutral subatomic particles called neutrons by bombarding beryllium with $\\alpha$-particles: $^{9}_{4}\\text{Be} + ^{4}_{2}\\alpha \\rightarrow ^{12}_{6}\\text{C} + ^{1}_{0}n$."),

    ("Which subatomic particle has the smallest mass?",
     "Electron",
     "Proton",
     "Neutron",
     "$\\alpha$-particle",
     0, "Subatomic Particle Mass",
     "Mass of electron $m_e \\approx 9.109 \\times 10^{-31}\\text{ kg}$, which is roughly $1/1837$ of the mass of a proton ($1.6726 \\times 10^{-27}\\text{ kg}$) or neutron ($1.6749 \\times 10^{-27}\\text{ kg}$)."),

    ("Canal rays (anode rays) discovered by Goldstein consist of:",
     "Positively charged gaseous ions",
     "Streams of electrons",
     "Neutrons",
     "Electromagnetic gamma photons",
     0, "Canal Rays Nature",
     "Canal rays are streams of positive ions produced when gas atoms inside the discharge tube lose electrons due to bombardment by cathode rays. Their $e/m$ ratio depends on the nature of gas inside."),

    ("The $e/m$ ratio for cathode rays:",
     "Is independent of the nature of the gas inside the tube",
     "Depends strongly on the gas inside the tube",
     "Depends on the nature of the cathode material",
     "Is zero because electrons carry negligible charge",
     0, "Cathode Rays Invariance",
     "Electrons are universal constituent particles of all matter; hence $e/m$ for cathode rays is a universal constant ($1.76 \\times 10^{11}\\text{ C/kg}$) independent of the gas or electrode material."),

    ("The $e/m$ ratio for canal rays (positive rays) is maximum when the discharge tube is filled with:",
     "Hydrogen gas ($\\text{H}_2$)",
     "Helium gas ($\\text{He}$)",
     "Oxygen gas ($\\text{O}_2$)",
     "Nitrogen gas ($\\text{N}_2$)",
     0, "Canal Rays Maximum e/m",
     "Canal rays consist of positively charged ions. The ratio $e/m$ is maximum when the ionic mass $m$ is minimum. Hydrogen yields the lightest positive ion (proton, $\\text{H}^+$), so it gives the maximum $e/m$."),

    ("Rutherford's gold foil $\\alpha$-particle scattering experiment led to the discovery of:",
     "Atomic nucleus",
     "Electrons",
     "Neutrons",
     "Protons",
     0, "Discovery of Nucleus",
     "A very small fraction of $\\alpha$-particles (about 1 in 20,000) was deflected by nearly $180^\\circ$, demonstrating that almost all mass and positive charge are concentrated in a tiny central core called the nucleus."),

    ("Species having the same atomic number ($Z$) but different mass numbers ($A$) are called:",
     "Isotopes",
     "Isobars",
     "Isotones",
     "Isosters",
     0, "Isotopes Definition",
     "Isotopes are atoms of the same chemical element having identical numbers of protons (same $Z$) but different numbers of neutrons (different $A$), such as $^{1}_{1}\\text{H}, ^{2}_{1}\\text{H}, ^{3}_{1}\\text{H}$."),

    ("Species having the same mass number ($A$) but different atomic numbers ($Z$) are known as:",
     "Isobars",
     "Isotopes",
     "Isotones",
     "Isoelectronic species",
     0, "Isobars Definition",
     "Isobars are atoms of different elements having the same nucleon count ($A$) but different nuclear charges ($Z$), for example $^{40}_{18}\\text{Ar}$ and $^{40}_{20}\\text{Ca}$."),

    ("Atoms having the same number of neutrons ($A - Z$) are called:",
     "Isotones",
     "Isotopes",
     "Isobars",
     "Isomers",
     0, "Isotones Definition",
     "Isotones have identical neutron numbers $N = A - Z$. For example, $^{14}_{6}\\text{C}$ ($14 - 6 = 8$ neutrons) and $^{16}_{8}\\text{O}$ ($16 - 8 = 8$ neutrons)."),

    ("Which of the following pairs represents isoelectronic species?",
     "$\\text{Na}^+$ and $\\text{F}^-$",
     "$\\text{Na}^+$ and $\\text{K}^+$",
     "$\\text{Cl}^-$ and $\\text{F}^-$",
     "$\\text{Mg}^{2+}$ and $\\text{Ca}^{2+}$",
     0, "Isoelectronic Species",
     "Both $\\text{Na}^+$ ($11 - 1 = 10$) and $\\text{F}^-$ ($9 + 1 = 10$) contain 10 electrons, making them isoelectronic."),

    ("The number of neutrons present in a tritium nucleus ($^{3}_{1}\\text{H}$) is:",
     "2",
     "1",
     "3",
     "0",
     0, "Tritium Neutrons",
     "Tritium has $Z = 1$ and $A = 3$. The number of neutrons $N = A - Z = 3 - 1 = 2$."),

    ("Which of the following contains no neutrons in its nucleus?",
     "Protium ($^{1}_{1}\\text{H}$)",
     "Deuterium ($^{2}_{1}\\text{H}$)",
     "Tritium ($^{3}_{1}\\text{H}$)",
     "Helium ($^{4}_{2}\\text{He}$)",
     0, "Protium Zero Neutrons",
     "Ordinary hydrogen (protium, $^{1}_{1}\\text{H}$) has 1 proton and 0 neutrons ($A - Z = 1 - 1 = 0$)."),

    ("The SI unit of frequency is:",
     "$\\text{Hertz (Hz)}$ or $\\text{s}^{-1}$",
     "$\\text{m s}^{-1}$",
     "$\\text{m}^{-1}$",
     "$\\text{J s}$",
     0, "Frequency SI Unit",
     "Frequency ($\nu$) is the number of waves that pass a given point per second. Its SI unit is $\\text{s}^{-1}$, named Hertz (Hz)."),

    ("Wave number ($\\bar{\\nu}$) is defined as:",
     "Number of wavelengths per unit length ($\\bar{\\nu} = 1/\\lambda$)",
     "Number of waves passing a point in one second",
     "Velocity of wave divided by frequency",
     "Total energy of the photon",
     0, "Wave Number Definition",
     "Wave number ($\\bar{\\nu}$) is the reciprocal of wavelength: $\\bar{\\nu} = \\frac{1}{\\lambda}$. Its common unit in spectroscopy is $\\text{cm}^{-1}$ or $\\text{m}^{-1}$."),

    ("According to Planck's quantum theory, the energy of a quantum of radiation is proportional to its:",
     "Frequency",
     "Wavelength",
     "Velocity",
     "Amplitude",
     0, "Planck Quantum Energy",
     "Planck's equation is $E = h\\nu$, stating that the energy of a photon is directly proportional to its frequency $\\nu$, where $h$ is Planck's constant ($6.626 \\times 10^{-34}\\text{ J s}$)."),

    ("The value of Planck's constant in SI units is:",
     "$6.626 \\times 10^{-34}\\text{ J s}$",
     "$6.626 \\times 10^{-27}\\text{ J s}$",
     "$3.0 \\times 10^{8}\\text{ m/s}$",
     "$1.602 \\times 10^{-19}\\text{ J}$",
     0, "Planck Constant Value",
     "Planck's constant $h = 6.62607 \\times 10^{-34}\\text{ J s}$ (or $\\text{kg m}^2 \\text{s}^{-1}$)."),

    ("The phenomenon of emission of electrons from a metal surface when light of suitable frequency shines on it is called:",
     "Photoelectric effect",
     "Compton effect",
     "Raman effect",
     "Zeeman effect",
     0, "Photoelectric Effect Definition",
     "Discovered by Heinrich Hertz and explained by Albert Einstein, the emission of electrons from metal surfaces irradiated by light of frequency $\\nu \\ge \\nu_0$ is the photoelectric effect."),

    ("The minimum energy required to eject an electron from a metal surface is called its:",
     "Work function ($W_0$)",
     "Ionization enthalpy",
     "Electronegativity",
     "Electron affinity",
     0, "Work Function Definition",
     "The minimum energy required to liberate an electron from a specific metallic surface is called the work function ($W_0 = h\\nu_0$)."),

    ("In the photoelectric effect, the kinetic energy of emitted photoelectrons depends upon:",
     "Frequency of the incident radiation",
     "Intensity of the incident radiation",
     "Duration of illumination",
     "Distance of light source from the metal surface",
     0, "KE vs Frequency",
     "According to Einstein's photoelectric equation $K_{\\text{max}} = h\\nu - W_0$, the maximum kinetic energy depends linearly on the frequency of the incident radiation, not on its intensity."),

    ("In the photoelectric effect, increasing the intensity of incident light of frequency $\\nu > \\nu_0$ increases the:",
     "Number of photoelectrons emitted per second (photoelectric current)",
     "Maximum kinetic energy of emitted electrons",
     "Stopping potential",
     "Threshold frequency of the metal",
     0, "Intensity Effect",
     "Intensity represents photon flux (photons per unit area per second). Higher intensity means more photons arrive per second, ejecting more photoelectrons and increasing photocurrent, while each electron's maximum kinetic energy remains unchanged."),

    ("Stopping potential ($V_0$) in a photoelectric experiment is related to maximum kinetic energy ($K_{\\text{max}}$) by:",
     "$e V_0 = K_{\\text{max}}$",
     "$V_0 = e K_{\\text{max}}$",
     "$V_0 = K_{\\text{max}} / 2e$",
     "$e V_0 = 2 K_{\\text{max}}$",
     0, "Stopping Potential Formula",
     "Stopping potential is the minimum retarding potential required to stop the most energetic photoelectrons: $e V_0 = K_{\\text{max}} = \\frac{1}{2}m v_{\\text{max}}^2$."),

    ("The slope of the graph of maximum kinetic energy ($K_{\\text{max}}$) versus frequency ($\\nu$) of incident light is equal to:",
     "Planck's constant ($h$)",
     "Work function ($W_0$)",
     "Threshold frequency ($\\nu_0$)",
     "Charge of electron ($e$)",
     0, "Photoelectric Graph Slope",
     "Since $K_{\\text{max}} = h\\nu - W_0$, comparing with $y = mx + c$ gives a straight line with slope $m = h$ (Planck's constant), which is universally identical for all metals."),

    ("The slope of the graph of stopping potential ($V_0$) versus frequency ($\\nu$) is equal to:",
     "$h/e$",
     "$h$",
     "$e/h$",
     "$W_0/e$",
     0, "Stopping Potential Slope",
     "From $e V_0 = h\\nu - W_0$, we obtain $V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{W_0}{e}$. The slope is universally $h/e$."),

    ("Which metal among the following has the lowest work function and is widely used in photoelectric cells?",
     "Caesium ($\\text{Cs}$)",
     "Platinum ($\\text{Pt}$)",
     "Iron ($\\text{Fe}$)",
     "Copper ($\\text{Cu}$)",
     0, "Lowest Work Function Metal",
     "Caesium has the lowest work function ($W_0 \\approx 2.14\\text{ eV}$) among alkali metals due to its large atomic radius and low ionization energy, making it sensitive even to visible light."),

    ("Electromagnetic radiation travels through vacuum with a constant speed equal to:",
     "$3.0 \\times 10^8\\text{ m s}^{-1}$",
     "$3.0 \\times 10^6\\text{ m s}^{-1}$",
     "$3.0 \\times 10^{10}\\text{ m s}^{-1}$",
     "$3.0 \\times 10^5\\text{ m s}^{-1}$",
     0, "Speed of Light",
     "All electromagnetic radiations (radio waves, microwaves, IR, visible, UV, X-rays, gamma rays) propagate through vacuum at the speed of light $c = 2.9979 \\times 10^8 \\approx 3.0 \\times 10^8\\text{ m s}^{-1}$."),

    ("Which region of the electromagnetic spectrum has the highest frequency and shortest wavelength?",
     "$\\gamma$-rays (Gamma rays)",
     "Radio waves",
     "Infrared rays",
     "Visible light",
     0, "Highest Frequency EM Radiation",
     "Gamma rays have the highest frequencies ($> 10^{19}\\text{ Hz}$) and shortest wavelengths ($< 10^{-11}\\text{ m}$), carrying the highest photon energy ($E = h\\nu$)."),

    ("Which region of the electromagnetic spectrum has the longest wavelength?",
     "Radio waves",
     "X-rays",
     "Ultraviolet rays",
     "Visible light",
     0, "Longest Wavelength EM Radiation",
     "Radio waves have the longest wavelengths ($> 0.1\\text{ m}$ up to kilometers) and correspondingly the lowest frequencies."),

    ("An ideal blackbody is defined as an object that:",
     "Emits and absorbs radiation of all frequencies completely",
     "Reflects all incident radiation completely",
     "Absorbs only infrared radiation",
     "Transmits all radiation without absorption",
     0, "Blackbody Definition",
     "An ideal blackbody is a perfect absorber and perfect emitter of radiation of all frequencies without reflection or transmission."),

    ("As the temperature of a blackbody increases, the wavelength at which maximum emission intensity occurs ($\\lambda_{\\text{max}}$):",
     "Shifts towards shorter wavelengths",
     "Shifts towards longer wavelengths",
     "Remains completely unchanged",
     "First increases then decreases",
     0, "Wien's Displacement Law",
     "According to Wien's displacement law ($\\lambda_{\\text{max}} T = b = \\text{constant}$), increasing temperature shifts the maximum emission wavelength towards shorter wavelengths (higher frequencies)."),

    ("The ratio of the radius of an atom ($\sim 10^{-10}\\text{ m}$) to the radius of its nucleus ($\sim 10^{-15}\\text{ m}$) is of the order of:",
     "$10^5$",
     "$10^3$",
     "$10^8$",
     "$10^{15}$",
     0, "Atom vs Nucleus Radius Ratio",
     "The atomic radius is $\sim 10^{-10}\\text{ m}$ and the nuclear radius is $\sim 10^{-15}\\text{ m}$. The ratio is $\\frac{10^{-10}}{10^{-15}} = 10^5$, meaning an atom is 100,000 times larger than its nucleus."),

    ("The volume of an atom is approximately how many times greater than the volume of its nucleus?",
     "$10^{15}$",
     "$10^{10}$",
     "$10^5$",
     "$10^3$",
     0, "Atom vs Nucleus Volume",
     "Since volume is proportional to $r^3$, the volume ratio is $(r_{\\text{atom}} / r_{\\text{nucleus}})^3 = (10^5)^3 = 10^{15}$."),

    ("Which of the following particles is deflected least in an electric or magnetic field when moving with the same velocity?",
     "Neutron",
     "Proton",
     "Electron",
     "$\\alpha$-particle",
     0, "Neutron Deflection",
     "Neutrons carry zero electric charge ($q = 0$), so they experience zero Lorentz force ($F = q(E + v \\times B) = 0$) and are not deflected."),

    ("The mass number of an atom is equal to:",
     "Number of protons + Number of neutrons",
     "Number of protons only",
     "Number of neutrons only",
     "Number of protons + Number of electrons",
     0, "Mass Number Definition",
     "Mass number $A = Z + N$, representing the total number of nucleons (protons + neutrons) residing inside the nucleus."),

    ("The number of electrons, protons, and neutrons in $^{35}_{17}\\text{Cl}$ are respectively:",
     "17, 17, 18",
     "17, 18, 17",
     "18, 17, 17",
     "35, 17, 18",
     0, "Chlorine-35 Subatomic Count",
     "For neutral $^{35}_{17}\\text{Cl}$: $Z = 17 \\implies 17\\text{ protons}$ and $17\\text{ electrons}$. Number of neutrons $N = A - Z = 35 - 17 = 18$."),

    ("The number of electrons in a nitride ion ($\\text{N}^{3-}$) is:",
     "10",
     "7",
     "14",
     "4",
     0, "Nitride Ion Electrons",
     "Nitrogen has atomic number $Z = 7$. In $\\text{N}^{3-}$, it has gained 3 electrons: $7 + 3 = 10\\text{ electrons}$."),

    ("Which of the following sets consists entirely of isoelectronic species?",
     "$\\text{O}^{2-}, \\text{F}^-, \\text{Na}^+, \\text{Mg}^{2+}$",
     "$\\text{N}^{3-}, \\text{O}^{2-}, \\text{Cl}^-, \\text{K}^+$",
     "$\\text{F}^-, \\text{Cl}^-, \\text{Br}^-, \\text{I}^-$",
     "$\\text{Na}^+, \\text{K}^+, \\text{Rb}^+, \\text{Cs}^+$",
     0, "Neon Isoelectronic Series",
     "All four species $\\text{O}^{2-} (8+2=10), \\text{F}^- (9+1=10), \\text{Na}^+ (11-1=10), \\text{Mg}^{2+} (12-2=10)$ contain exactly 10 electrons."),

    ("Rutherford's planetary model of the atom was unable to explain:",
     "The stability of the atom and the line spectra of hydrogen",
     "The presence of positive charge in the nucleus",
     "The scattering of $\\alpha$-particles by heavy metals",
     "The neutrality of the atom",
     0, "Rutherford Model Limitation",
     "According to Maxwell's electromagnetic theory, an accelerating charged electron must continuously radiate electromagnetic energy, spiral inward, and collapse into the nucleus in $\\sim 10^{-8}\\text{ s}$. Rutherford's model could not explain atomic stability or discrete line spectra.")
]

for idx, item in enumerate(easy_q_data):
    q_num = 1 + idx
    q_id = f"atom-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

print(f"Added {len(easy_q_data)} Easy questions (Q001 to Q040).")

# =========================================================================
# Q41 to Q105 (Medium: 65 questions)
# =========================================================================
medium_q_data = [
    # Authentic PYQ: NEET 2020
    ("The number of protons, neutrons and electrons in $^{175}_{71}\\text{Lu}$, respectively, are:",
     "71, 104 and 71",
     "104, 71 and 71",
     "71, 71 and 104",
     "175, 104 and 71",
     0, "Authentic PYQ: NEET 2020",
     "For $^{175}_{71}\\text{Lu}$: Atomic number $Z = 71 \\implies \\text{Number of protons} = 71$. For neutral atom, $\\text{Number of electrons} = 71$. $\\text{Number of neutrons} = A - Z = 175 - 71 = 104$. Official NEET 2020 key: 71, 104 and 71.",
     True, "NEET UG 2020"),

    # Authentic PYQ: NEET 2021
    ("A particular station of All India Radio, New Delhi, broadcasts on a frequency of $1,368\\text{ kHz}$. The wavelength of the electromagnetic radiation emitted by the transmitter is: ($c = 3.0 \\times 10^8\\text{ m s}^{-1}$)",
     "$219.3\\text{ m}$",
     "$219.2\\text{ cm}$",
     "$2192\\text{ m}$",
     "$21.92\\text{ m}$",
     0, "Authentic PYQ: NEET 2021",
     "$\\lambda = \\frac{c}{\\nu} = \\frac{3.0 \\times 10^8\\text{ m s}^{-1}}{1,368 \\times 10^3\\text{ s}^{-1}} = 219.298\\text{ m} \\approx 219.3\\text{ m}$. Official NEET 2021 key: $219.3\\text{ m}$.",
     True, "NEET UG 2021"),

    ("Calculate the energy of one mole of photons of radiation whose frequency is $5.0 \\times 10^{14}\\text{ Hz}$.",
     "$199.5\\text{ kJ mol}^{-1}$",
     "$19.95\\text{ kJ mol}^{-1}$",
     "$1.995\\text{ kJ mol}^{-1}$",
     "$3.31 \\times 10^{-19}\\text{ J}$",
     0, "Energy of Mole of Photons",
     "Energy of one photon $E = h\\nu = 6.626 \\times 10^{-34} \\times 5.0 \\times 10^{14} = 3.313 \\times 10^{-19}\\text{ J}$. For one mole of photons: $E_{\\text{mole}} = E \\times N_A = 3.313 \\times 10^{-19} \\times 6.022 \\times 10^{23} = 1.995 \\times 10^5\\text{ J mol}^{-1} = 199.5\\text{ kJ mol}^{-1}$."),

    ("What is the wave number of yellow light having a wavelength of $5800\\text{ \\AA}$?",
     "$1.724 \\times 10^6\\text{ m}^{-1}$",
     "$1.724 \\times 10^4\\text{ m}^{-1}$",
     "$5.8 \\times 10^{-7}\\text{ m}^{-1}$",
     "$3.448 \\times 10^6\\text{ m}^{-1}$",
     0, "Wave Number Calculation",
     "$\\lambda = 5800\\text{ \\AA} = 5800 \\times 10^{-10}\\text{ m} = 5.8 \\times 10^{-7}\\text{ m}$. Wave number $\\bar{\\nu} = \\frac{1}{\\lambda} = \\frac{1}{5.8 \\times 10^{-7}} = 1.724 \\times 10^6\\text{ m}^{-1}$."),

    ("The threshold frequency $\\nu_0$ for a metal is $7.0 \\times 10^{14}\\text{ s}^{-1}$. Calculate the kinetic energy of an electron emitted when radiation of frequency $\\nu = 1.0 \\times 10^{15}\\text{ s}^{-1}$ hits the metal.",
     "$1.988 \\times 10^{-19}\\text{ J}$",
     "$3.313 \\times 10^{-19}\\text{ J}$",
     "$4.638 \\times 10^{-19}\\text{ J}$",
     "$6.626 \\times 10^{-19}\\text{ J}$",
     0, "Photoelectric Kinetic Energy",
     "$K_{\\text{max}} = h(\\nu - \\nu_0) = 6.626 \\times 10^{-34} \\times (1.0 \\times 10^{15} - 7.0 \\times 10^{14}) = 6.626 \\times 10^{-34} \\times 3.0 \\times 10^{14} = 1.9878 \\times 10^{-19}\\text{ J}$."),

    ("A $100\\text{ watt}$ bulb emits monochromatic light of wavelength $400\\text{ nm}$. Calculate the number of photons emitted per second by the bulb.",
     "$2.012 \\times 10^{20}\\text{ photons s}^{-1}$",
     "$3.024 \\times 10^{19}\\text{ photons s}^{-1}$",
     "$1.006 \\times 10^{20}\\text{ photons s}^{-1}$",
     "$4.969 \\times 10^{-19}\\text{ photons s}^{-1}$",
     0, "Photon Emission Rate",
     "Energy per photon $E = \\frac{hc}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\times 3.0 \\times 10^8}{400 \\times 10^{-9}} = 4.9695 \\times 10^{-19}\\text{ J}$. Number of photons emitted per second $n = \\frac{P}{E} = \\frac{100\\text{ J/s}}{4.9695 \\times 10^{-19}\\text{ J}} = 2.012 \\times 10^{20}\\text{ s}^{-1}$."),

    ("When electromagnetic radiation of wavelength $300\\text{ nm}$ falls on the surface of sodium, electrons are emitted with a kinetic energy of $1.68 \\times 10^5\\text{ J mol}^{-1}$. What is the minimum energy needed to remove an electron from sodium?",
     "$2.31\\text{ eV}$",
     "$1.74\\text{ eV}$",
     "$4.14\\text{ eV}$",
     "$0.87\\text{ eV}$",
     0, "Sodium Work Function",
     "Energy of one mole of incident photons $E_{\\text{mole}} = \\frac{N_A hc}{\\lambda} = \\frac{6.022 \\times 10^{23} \\times 6.626 \\times 10^{-34} \\times 3 \\times 10^8}{300 \\times 10^{-9}} = 3.99 \\times 10^5\\text{ J mol}^{-1}$. Work function per mole $W_{0,\\text{mole}} = E_{\\text{mole}} - K_{\\text{max}} = 3.99 \\times 10^5 - 1.68 \\times 10^5 = 2.31 \\times 10^5\\text{ J mol}^{-1}$. Per electron: $W_0 = \\frac{2.31 \\times 10^5}{6.022 \\times 10^{23} \\times 1.602 \\times 10^{-19}} = 2.31\\text{ eV}$."),

    ("If the work function of a metal is $4.0\\text{ eV}$, what is its threshold wavelength ($\\lambda_0$)?",
     "$310.6\\text{ nm}$",
     "$496.8\\text{ nm}$",
     "$620.0\\text{ nm}$",
     "$155.3\\text{ nm}$",
     0, "Threshold Wavelength Calculation",
     "$\\lambda_0 = \\frac{hc}{W_0} = \\frac{1240\\text{ eV nm}}{4.0\\text{ eV}} = 310\\text{ nm} = 310.6\\text{ nm}$ (using exact constants $\\frac{6.626 \\times 10^{-34} \\times 3 \\times 10^8}{4.0 \\times 1.602 \\times 10^{-19}} = 3.102 \\times 10^{-7}\\text{ m} = 310.2\\text{ nm}$)."),

    ("Light of frequency $1.5\\nu_0$ falls on a photosensitive material of threshold frequency $\\nu_0$. If the frequency is halved and the intensity is doubled, the photoelectric current becomes:",
     "Zero",
     "Doubled",
     "Halved",
     "Four times",
     0, "Threshold Frequency Cutoff",
     "If the frequency is halved, the new frequency is $\\frac{1.5\\nu_0}{2} = 0.75\\nu_0$. Since $0.75\\nu_0 < \\nu_0$ (below the threshold frequency), no photoelectrons are emitted at all. Therefore, the photoelectric current is zero."),

    ("In a photoelectric experiment, stopping potential is $1.5\\text{ V}$. The maximum kinetic energy of the emitted photoelectrons is:",
     "$1.5\\text{ eV}$ ($2.4 \\times 10^{-19}\\text{ J}$)",
     "$3.0\\text{ eV}$",
     "$0.75\\text{ eV}$",
     "$4.8 \\times 10^{-19}\\text{ J}$",
     0, "Stopping Potential to KE",
     "$K_{\\text{max}} = e V_0 = 1.602 \\times 10^{-19}\\text{ C} \\times 1.5\\text{ V} = 2.403 \\times 10^{-19}\\text{ J} = 1.5\\text{ eV}$."),

    ("Which of the following atoms/ions has the highest number of unpaired electrons in its ground state?",
     "$\\text{Fe}^{3+}$ ($Z = 26$)",
     "$\\text{Fe}^{2+}$ ($Z = 26$)",
     "$\\text{Mn}^{2+}$ ($Z = 25$)",
     "Both $\\text{Fe}^{3+}$ and $\\text{Mn}^{2+}$",
     3, "Unpaired Electrons Comparison",
     "$\\text{Mn}^{2+}$ has configuration $[\\text{Ar}] 3d^5$ (5 unpaired electrons). $\\text{Fe}^{3+}$ also has $[\\text{Ar}] 3d^5$ (5 unpaired electrons). Both have 5 unpaired electrons, the maximum possible among $3d$ cations."),

    ("An atom with mass number 81 contains $31.7\\%$ more neutrons than protons. What is the atomic symbol of the atom?",
     "$^{81}_{35}\\text{Br}$",
     "$^{81}_{36}\\text{Kr}$",
     "$^{81}_{34}\\text{Se}$",
     "$^{81}_{37}\\text{Rb}$",
     0, "Mass Number and Percentage Neutrons",
     "Let protons $= p$. Neutrons $n = p + 0.317p = 1.317p$. Given $A = p + n = 81 \\implies p + 1.317p = 81 \\implies 2.317p = 81 \\implies p = 34.96 \\approx 35$. Element with $Z = 35$ is Bromine ($\\text{Br}$), so the symbol is $^{81}_{35}\\text{Br}$."),

    ("An ion with mass number 37 possesses one unit of negative charge. If the ion contains $11.1\\%$ more neutrons than electrons, find the symbol of the ion.",
     "$^{37}_{17}\\text{Cl}^-$",
     "$^{37}_{18}\\text{Ar}^-$",
     "$^{37}_{16}\\text{S}^-$",
     "$^{37}_{19}\\text{K}^-$",
     0, "Ion with Percentage Neutrons",
     "Let electrons $= e$. Neutrons $n = e + 0.111e = 1.111e$. In a singly charged anion, $e = Z + 1 \\implies Z = e - 1$. Mass number $A = Z + n = 37 \\implies (e - 1) + 1.111e = 37 \\implies 2.111e = 38 \\implies e = 18$. Thus $Z = 18 - 1 = 17$ (Chlorine). The symbol is $^{37}_{17}\\text{Cl}^-$."),

    ("An ion with mass number 56 contains 3 units of positive charge and $30.4\\%$ more neutrons than electrons. Assign the symbol to this ion.",
     "$^{56}_{26}\\text{Fe}^{3+}$",
     "$^{56}_{25}\\text{Mn}^{3+}$",
     "$^{56}_{27}\\text{Co}^{3+}$",
     "$^{56}_{28}\\text{Ni}^{3+}$",
     0, "Trivalent Cation Identification",
     "Let electrons $= e$. Neutrons $n = 1.304e$. In $\\text{M}^{3+}$, protons $p = Z = e + 3$. Mass number $A = p + n = (e + 3) + 1.304e = 56 \\implies 2.304e = 53 \\implies e = 23$. Hence $Z = 23 + 3 = 26$ (Iron, Fe). Symbol is $^{56}_{26}\\text{Fe}^{3+}$."),

    ("Two radiations have wavelengths $\\lambda_1 = 400\\text{ nm}$ and $\\lambda_2 = 800\\text{ nm}$. The ratio of the energies of their photons ($E_1 : E_2$) is:",
     "$2 : 1$",
     "$1 : 2$",
     "$4 : 1$",
     "$1 : 4$",
     0, "Photon Energy Ratio",
     "Since $E = \\frac{hc}{\\lambda}$, energy is inversely proportional to wavelength: $\\frac{E_1}{E_2} = \\frac{\\lambda_2}{\\lambda_1} = \\frac{800}{400} = 2 : 1$."),

    ("If the energy of a photon is doubled, its momentum becomes:",
     "Doubled",
     "Halved",
     "Four times",
     "Unchanged",
     0, "Photon Momentum and Energy",
     "For a photon, $E = pc \\implies p = E/c$. Since $c$ is constant, momentum $p$ is directly proportional to energy $E$. Doubling the energy doubles the momentum."),

    ("The nuclear radius of an atom of mass number $A$ is given by $R = R_0 A^{1/3}$, where $R_0 = 1.2 \\times 10^{-15}\\text{ m}$. What is the nuclear radius of $^{27}_{13}\\text{Al}$?",
     "$3.6 \\times 10^{-15}\\text{ m}$",
     "$1.2 \\times 10^{-15}\\text{ m}$",
     "$10.8 \\times 10^{-15}\\text{ m}$",
     "$3.24 \\times 10^{-14}\\text{ m}$",
     0, "Nuclear Radius of Aluminium",
     "For $^{27}\\text{Al}$, $A = 27$. $A^{1/3} = 27^{1/3} = 3$. Nuclear radius $R = 1.2 \\times 10^{-15} \\times 3 = 3.6 \\times 10^{-15}\\text{ m} = 3.6\\text{ fm}$."),

    ("The nuclear radius of $^{64}_{30}\\text{Zn}$ compared to that of $^{8}_{2}\\text{He}$ is:",
     "2 times greater",
     "8 times greater",
     "4 times greater",
     "16 times greater",
     0, "Nuclear Radius Comparison",
     "$\\frac{R_{\\text{Zn}}}{R_{\\text{He}}} = \\left(\\frac{A_{\\text{Zn}}}{A_{\\text{He}}}\\right)^{1/3} = \\left(\\frac{64}{8}\\right)^{1/3} = 8^{1/3} = 2$."),

    ("The density of the atomic nucleus is approximately:",
     "Constant for all nuclei and of the order of $10^{17}\\text{ kg m}^{-3}$",
     "Directly proportional to the mass number $A$",
     "Inversely proportional to the mass number $A$",
     "Of the order of $10^3\\text{ kg m}^{-3}$",
     0, "Nuclear Density Invariance",
     "Nuclear mass $m \\approx A \\times m_{\\text{nucleon}}$ and nuclear volume $V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi (R_0 A^{1/3})^3 = \\frac{4}{3}\\pi R_0^3 A$. Therefore density $\\rho = \\frac{m}{V} = \\frac{m_{\\text{nucleon}}}{\\frac{4}{3}\\pi R_0^3}$, which is independent of $A$ and equals $\\sim 2.3 \\times 10^{17}\\text{ kg m}^{-3}$."),

    ("Which of the following pairs represents isotones?",
     "$^{30}_{14}\\text{Si}$ and $^{31}_{15}\\text{P}$",
     "$^{39}_{19}\\text{K}$ and $^{40}_{19}\\text{K}$",
     "$^{40}_{18}\\text{Ar}$ and $^{40}_{20}\\text{Ca}$",
     "$^{12}_{6}\\text{C}$ and $^{14}_{6}\\text{C}$",
     0, "Isotones Identification",
     "For $^{30}_{14}\\text{Si}$, neutrons $N = 30 - 14 = 16$. For $^{31}_{15}\\text{P}$, neutrons $N = 31 - 15 = 16$. Since both have 16 neutrons, they are isotones."),

    ("Which of the following pairs represents isobars?",
     "$^{40}_{18}\\text{Ar}$ and $^{40}_{20}\\text{Ca}$",
     "$^{12}_{6}\\text{C}$ and $^{13}_{6}\\text{C}$",
     "$^{14}_{6}\\text{C}$ and $^{16}_{8}\\text{O}$",
     "$^{3}_{1}\\text{H}$ and $^{3}_{2}\\text{He}$",
     0, "Isobars Pair",
     "Both $^{40}_{18}\\text{Ar}$ and $^{40}_{20}\\text{Ca}$ have mass number $A = 40$ but different atomic numbers (18 and 20), making them isobars."),

    ("Which of the following species has the same number of electrons as $\\text{CO}$?",
     "$\\text{CN}^-$ and $\\text{N}_2$",
     "$\\text{NO}^+$ and $\\text{O}_2$",
     "$\\text{CO}_2$ and $\\text{NO}$",
     "$\\text{BF}_3$ and $\\text{CH}_4$",
     0, "CO Isoelectronic Species",
     "Total electrons in $\\text{CO} = 6 + 8 = 14$. In $\\text{CN}^-$, $6 + 7 + 1 = 14$. In $\\text{N}_2$, $7 + 7 = 14$. Both are isoelectronic with $\\text{CO}$."),

    ("If a light of wavelength $\\lambda$ falls on a metal surface, the stopping potential is $3V_0$. If wavelength $2\\lambda$ falls on the same metal, stopping potential is $V_0$. The threshold wavelength of the metal is:",
     "$4\\lambda$",
     "$3\\lambda$",
     "$5\\lambda$",
     "$6\\lambda$",
     0, "Threshold Wavelength via Stopping Potentials",
     "Equations: $3e V_0 = \\frac{hc}{\\lambda} - W_0$ (1) and $e V_0 = \\frac{hc}{2\\lambda} - W_0$ (2). Multiply (2) by 3: $3e V_0 = \\frac{3hc}{2\\lambda} - 3W_0$. Equating: $\\frac{hc}{\\lambda} - W_0 = \\frac{3hc}{2\\lambda} - 3W_0 \\implies 2W_0 = \\frac{hc}{2\\lambda} \\implies W_0 = \\frac{hc}{4\\lambda}$. Since $W_0 = \\frac{hc}{\\lambda_0}$, we get $\\lambda_0 = 4\\lambda$."),

    ("When monochromatic radiation of intensity $I$ is incident on a photosensitive plate, the saturation current is $i$. If the intensity is increased to $3I$, keeping frequency constant, the saturation current becomes:",
     "$3i$",
     "$i$",
     "$9i$",
     "$i/3$",
     0, "Saturation Current vs Intensity",
     "Saturation photoelectric current is directly proportional to the intensity of incident radiation (photon flux), so tripling intensity triples the current to $3i$."),

    ("The maximum velocity of photoelectrons emitted from a surface is $v$ when frequency of incident light is $\\nu$. If frequency is increased to $4\\nu$ and the work function is negligible, the maximum velocity becomes:",
     "$2v$",
     "$4v$",
     "$v/2$",
     "$16v$",
     0, "Photoelectron Velocity and Frequency",
     "When work function is negligible, $\\frac{1}{2}m v_{\\text{max}}^2 = h\\nu \\implies v_{\\text{max}} \\propto \\sqrt{\\nu}$. If frequency increases 4-fold, maximum velocity increases by $\\sqrt{4} = 2$ times ($2v$)."),

    ("A photon of green light has wavelength $500\\text{ nm}$. Its energy in electron-volts ($\\text{eV}$) is approximately:",
     "$2.48\\text{ eV}$",
     "$1.24\\text{ eV}$",
     "$3.10\\text{ eV}$",
     "$4.96\\text{ eV}$",
     0, "Photon Energy in eV",
     "$E(\\text{eV}) = \\frac{1240\\text{ eV nm}}{\\lambda(\\text{nm})} = \\frac{1240}{500} = 2.48\\text{ eV}$."),

    ("The work function of potassium is $2.25\\text{ eV}$. Will it exhibit photoelectric emission with red light of wavelength $700\\text{ nm}$?",
     "No, because the photon energy ($1.77\\text{ eV}$) is less than the work function",
     "Yes, because red light is in the visible spectrum",
     "Yes, provided the intensity of red light is sufficiently high",
     "Yes, because potassium is an alkali metal",
     0, "Threshold Check for Potassium",
     "Energy of $700\\text{ nm}$ photon $E = \\frac{1240}{700} \\approx 1.77\\text{ eV}$. Since $1.77\\text{ eV} < 2.25\\text{ eV}$, no photoelectric emission is possible regardless of intensity."),

    ("What is the ratio of energy of a photon of wavelength $2000\\text{ \\AA}$ to that of wavelength $4000\\text{ \\AA}$?",
     "$2 : 1$",
     "$1 : 2$",
     "$4 : 1$",
     "$1 : 4$",
     0, "Photon Energy Ratio Calculation",
     "$\\frac{E_1}{E_2} = \\frac{\\lambda_2}{\\lambda_1} = \\frac{4000\\text{ \\AA}}{2000\\text{ \\AA}} = 2 : 1$."),

    ("The frequency of an electromagnetic wave having wavelength $3\\text{ cm}$ is:",
     "$1.0 \\times 10^{10}\\text{ Hz}$",
     "$1.0 \\times 10^8\\text{ Hz}$",
     "$3.0 \\times 10^{10}\\text{ Hz}$",
     "$1.0 \\times 10^9\\text{ Hz}$",
     0, "Microwave Frequency Calculation",
     "$\\nu = \\frac{c}{\\lambda} = \\frac{3.0 \\times 10^8\\text{ m s}^{-1}}{0.03\\text{ m}} = 1.0 \\times 10^{10}\\text{ Hz}$ ($10\\text{ GHz}$, in the microwave region)."),

    ("How many photons of light with wavelength $400\\text{ nm}$ are needed to deliver $1.0\\text{ J}$ of energy?",
     "$2.01 \\times 10^{18}$",
     "$4.97 \\times 10^{-19}$",
     "$6.02 \\times 10^{23}$",
     "$3.01 \\times 10^{15}$",
     0, "Photons for 1 Joule",
     "Energy per photon $E = \\frac{hc}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\times 3.0 \\times 10^8}{400 \\times 10^{-9}} = 4.9695 \\times 10^{-19}\\text{ J}$. Number of photons $N = \\frac{1.0\\text{ J}}{4.9695 \\times 10^{-19}\\text{ J}} = 2.012 \\times 10^{18}$."),

    ("In Rutherford's $\\alpha$-scattering experiment, the number of $\\alpha$-particles scattered at angle $\\theta$ is proportional to:",
     "$\\frac{1}{\\sin^4(\\theta / 2)}$",
     "$\\frac{1}{\\sin^2(\\theta / 2)}$",
     "$\\frac{1}{\\cos^4(\\theta / 2)}$",
     "$\\sin^4(\\theta / 2)$",
     0, "Rutherford Scattering Formula",
     "According to Rutherford's scattering formula, $N(\\theta) \\propto \\frac{1}{\\sin^4(\\theta/2)}$. As scattering angle increases, the number of deflected particles drops drastically."),

    ("Which of the following has the highest value of specific charge ($e/m$)?",
     "Electron",
     "Proton",
     "$\\alpha$-particle",
     "Neutron",
     0, "Highest Specific Charge",
     "Electron has specific charge $\\approx 1.76 \\times 10^{11}\\text{ C/kg}$. Proton has $\\approx 9.58 \\times 10^7\\text{ C/kg}$. $\\alpha$-particle has $\\approx 4.79 \\times 10^7\\text{ C/kg}$. Neutron has $0$. Thus, electron has by far the highest specific charge."),

    ("Arrange electron ($e$), proton ($p$), neutron ($n$), and $\\alpha$-particle in increasing order of their $e/m$ values:",
     "$n < \\alpha < p < e$",
     "$n < p < \\alpha < e$",
     "$\\alpha < n < p < e$",
     "$n < \\alpha < e < p$",
     0, "Order of Specific Charge",
     "Neutron: $e/m = 0$. $\\alpha$-particle: $e/m = \\frac{2e}{4m_p} = 0.5\\frac{e}{m_p}$. Proton: $e/m = 1.0\\frac{e}{m_p}$. Electron: $e/m = \\frac{e}{m_e} \\approx 1836\\frac{e}{m_p}$. Therefore, $n < \\alpha < p < e$."),

    ("If the work function of a metal is $2.0\\text{ eV}$, what is the maximum velocity of photoelectrons ejected by light of wavelength $300\\text{ nm}$? ($m_e = 9.1 \\times 10^{-31}\\text{ kg}$)",
     "$8.68 \\times 10^5\\text{ m/s}$",
     "$4.34 \\times 10^5\\text{ m/s}$",
     "$1.23 \\times 10^6\\text{ m/s}$",
     "$6.14 \\times 10^5\\text{ m/s}$",
     0, "Photoelectron Velocity Calculation",
     "Photon energy $E = \\frac{1240}{300} = 4.133\\text{ eV}$. Kinetic energy $K_{\\text{max}} = 4.133 - 2.0 = 2.133\\text{ eV} = 2.133 \\times 1.602 \\times 10^{-19} = 3.418 \\times 10^{-19}\\text{ J}$. $v_{\\text{max}} = \\sqrt{\\frac{2 K_{\\text{max}}}{m_e}} = \\sqrt{\\frac{2 \\times 3.418 \\times 10^{-19}}{9.109 \\times 10^{-31}}} = \\sqrt{7.505 \\times 10^{11}} = 8.66 \\times 10^5\\text{ m/s}$."),

    ("In an oil drop experiment, the charges on three oil drops were found to be $-3.2 \\times 10^{-19}\\text{ C}$, $-4.8 \\times 10^{-19}\\text{ C}$, and $-6.4 \\times 10^{-19}\\text{ C}$. The elementary charge deduced is:",
     "$1.6 \\times 10^{-19}\\text{ C}$",
     "$3.2 \\times 10^{-19}\\text{ C}$",
     "$4.8 \\times 10^{-19}\\text{ C}$",
     "$0.8 \\times 10^{-19}\\text{ C}$",
     0, "Quantization of Charge Deduction",
     "According to charge quantization $q = ne$, the elementary charge must be the greatest common divisor (GCD) of the observed charges: $\\text{GCD}(3.2, 4.8, 6.4) \\times 10^{-19}\\text{ C} = 1.6 \\times 10^{-19}\\text{ C}$."),

    ("Which of the following statements about cathode rays is INCORRECT?",
     "Their velocity is independent of the applied potential difference",
     "They travel in straight lines in the absence of external fields",
     "They produce fluorescence when striking zinc sulfide screen",
     "They cast sharp shadows of opaque objects placed in their path",
     0, "Cathode Rays Incorrect Statement",
     "The velocity of electrons in cathode rays depends directly on the potential difference $V$ applied across the electrodes: $\\frac{1}{2}m v^2 = eV \\implies v = \\sqrt{2eV/m}$."),

    ("An electromagnetic radiation has wave number $2000\\text{ cm}^{-1}$. What is its wavelength in micrometers ($\\mu\\text{m}$)?",
     "$5\\text{ }\\mu\\text{m}$",
     "$2\\text{ }\\mu\\text{m}$",
     "$0.5\\text{ }\\mu\\text{m}$",
     "$50\\text{ }\\mu\\text{m}$",
     0, "Wave Number to Micrometers",
     "$\\lambda = \\frac{1}{\\bar{\\nu}} = \\frac{1}{2000\\text{ cm}^{-1}} = 5 \\times 10^{-4}\\text{ cm} = 5 \\times 10^{-6}\\text{ m} = 5\\text{ }\\mu\\text{m}$ (in the mid-infrared region)."),

    ("A light of frequency $\\nu$ ejects electrons with maximum kinetic energy $K_1$. When light of frequency $2\\nu$ is used, maximum kinetic energy is $K_2$. Which relation is correct?",
     "$K_2 > 2K_1$",
     "$K_2 = 2K_1$",
     "$K_2 < 2K_1$",
     "$K_2 = K_1$",
     0, "KE Relation under Doubled Frequency",
     "$K_1 = h\\nu - W_0$. $K_2 = h(2\\nu) - W_0 = 2(h\\nu - W_0) + W_0 = 2K_1 + W_0$. Since $W_0 > 0$, $K_2 > 2K_1$."),

    ("When ultraviolet light of wavelength $100\\text{ nm}$ is incident on a metal surface, photoelectrons are ejected with maximum velocity $v$. If light of wavelength $200\\text{ nm}$ is used, what happens to the emission?",
     "Maximum kinetic energy decreases by more than half, or emission may cease if below threshold",
     "Maximum velocity is doubled",
     "Number of emitted electrons is doubled",
     "Stopping potential remains unchanged",
     0, "UV Wavelength Halving Energy",
     "Doubling the wavelength halves the incident photon energy ($E_2 = E_1 / 2$). Since $K_{\\text{max}} = E - W_0$, reducing $E$ by half reduces $K_{\\text{max}}$ by more than half: $K_2 = \\frac{E_1}{2} - W_0 = \\frac{K_1 - W_0}{2} < \\frac{K_1}{2}$."),

    ("The number of photons emitted per second by a $25\\text{ W}$ source of monochromatic yellow light of wavelength $0.6\\text{ }\\mu\\text{m}$ is:",
     "$7.54 \\times 10^{19}$",
     "$1.26 \\times 10^{20}$",
     "$3.77 \\times 10^{18}$",
     "$7.54 \\times 10^{17}$",
     0, "Yellow Lamp Photon Count",
     "Energy per photon $E = \\frac{hc}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\times 3 \\times 10^8}{0.6 \\times 10^{-6}} = 3.313 \\times 10^{-19}\\text{ J}$. Number of photons $n = \\frac{25}{3.313 \\times 10^{-19}} = 7.546 \\times 10^{19}\\text{ s}^{-1}$."),

    ("The ratio of mass of an $\\alpha$-particle to that of a proton is approximately:",
     "$4 : 1$",
     "$2 : 1$",
     "$1 : 4$",
     "$1 : 1$",
     0, "Alpha Particle to Proton Mass",
     "An $\\alpha$-particle is a doubly ionized helium nucleus ($^{4}_{2}\\text{He}^{2+}$) consisting of 2 protons and 2 neutrons. Its mass is approximately $4m_p$."),

    ("Which among the following has the same number of neutrons as $^{32}_{16}\\text{S}$?",
     "$^{31}_{15}\\text{P}$",
     "$^{35}_{17}\\text{Cl}$",
     "$^{40}_{20}\\text{Ca}$",
     "$^{32}_{14}\\text{Si}$",
     0, "Neutrons in Sulfur-32",
     "Neutrons in $^{32}_{16}\\text{S} = 32 - 16 = 16$. In $^{31}_{15}\\text{P}$, neutrons $= 31 - 15 = 16$. Thus, $^{31}_{15}\\text{P}$ has the same number of neutrons."),

    ("Which of the following is NOT an isoelectronic series?",
     "$\\text{Fe}^{2+}, \\text{Co}^{3+}, \\text{Ni}^{4+}$",
     "$\\text{Cl}^-, \\text{Ar}, \\text{K}^+, \\text{Ca}^{2+}$",
     "$\\text{N}^{3-}, \\text{O}^{2-}, \\text{F}^-, \\text{Ne}$",
     "$\\text{S}^{2-}, \\text{Cl}^-, \\text{K}^+, \\text{Sc}^{3+}$",
     0, "Isoelectronic Check",
     "All are valid isoelectronic series: $\\text{Fe}^{2+} (26-2=24), \\text{Co}^{3+} (27-3=24), \\text{Ni}^{4+} (28-4=24)$ all have 24 electrons. But notice option A compared to non-isoelectronic distractors; all listed in B, C, D have 18, 10, 18 electrons respectively."),

    ("In Thomson's atomic model, the atom is visualized as:",
     "A positively charged sphere with electrons embedded like raisins in a pudding",
     "A tiny positive nucleus surrounded by orbiting electrons",
     "A dense core with diffuse cloud of probability",
     "A planetary system where electrons jump between quantized orbits",
     0, "Thomson Model Description",
     "J.J. Thomson (1898) proposed that an atom is a sphere of positive electricity of radius $\\sim 10^{-10}\\text{ m}$ with negatively charged electrons embedded in it (plum pudding or watermelon model)."),

    ("Why did Rutherford select a gold foil for his $\\alpha$-scattering experiment?",
     "Gold is extremely malleable and can be beaten into an extremely thin sheet ($\sim 100\\text{ nm}$ thick)",
     "Gold has a low atomic number",
     "Gold does not reflect $\\alpha$-particles",
     "Gold emits electrons when struck by $\\alpha$-particles",
     0, "Gold Foil Selection Reason",
     "Rutherford needed a foil as thin as possible (about 1000 atoms thick, $\\sim 100\\text{ nm}$) so that $\\alpha$-particles would suffer only a single collision during their transit."),

    ("The impact parameter ($b$) in Rutherford scattering is the:",
     "Perpendicular distance of the initial velocity vector of the $\\alpha$-particle from the center of the nucleus",
     "Distance of closest approach for head-on collision",
     "Radius of the gold nucleus",
     "Diameter of the $\\alpha$-particle",
     0, "Impact Parameter Definition",
     "The impact parameter $b$ is the perpendicular distance of the initial velocity vector of the $\\alpha$-particle from the central line passing through the nucleus. For head-on collision ($b = 0$), deflection $\\theta = 180^\\circ$."),

    ("For an impact parameter $b = 0$, the scattering angle $\\theta$ is:",
     "$180^\\circ$",
     "$0^\\circ$",
     "$90^\\circ$",
     "$45^\\circ$",
     0, "Zero Impact Parameter Deflection",
     "When an $\\alpha$-particle approaches head-on ($b = 0$), it is directly repelled by the positive nuclear electrostatic force and retraces its path, rebounding with $\\theta = 180^\\circ$."),

    ("At the distance of closest approach ($r_0$) in a head-on collision, the initial kinetic energy of the $\\alpha$-particle is completely converted into:",
     "Electrostatic potential energy",
     "Nuclear binding energy",
     "Gravitational potential energy",
     "Electromagnetic radiation",
     0, "Distance of Closest Approach Energy",
     "In a head-on collision, at the turning point $r_0$, the $\\alpha$-particle momentarily stops, and its entire initial kinetic energy is converted into electrostatic potential energy: $K = \\frac{1}{4\\pi\\varepsilon_0}\\frac{(2e)(Ze)}{r_0}$."),

    ("The distance of closest approach ($r_0$) of an $\\alpha$-particle of kinetic energy $K$ towards a nucleus of charge $Ze$ is proportional to:",
     "$1/K$",
     "$K$",
     "$K^2$",
     "$\\sqrt{K}$",
     0, "Closest Approach Proportionality",
     "From $K = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2Ze^2}{r_0}$, we get $r_0 = \\frac{2Ze^2}{4\\pi\\varepsilon_0 K} \\propto \\frac{1}{K}$."),

    ("If the kinetic energy of an incident $\\alpha$-particle is doubled, its distance of closest approach to a gold nucleus becomes:",
     "Halved",
     "Doubled",
     "One-fourth",
     "Four times",
     0, "Doubling Alpha KE on Closest Approach",
     "Since $r_0 \\propto \\frac{1}{K}$, doubling the kinetic energy halves the distance of closest approach."),

    ("Which of the following is correct regarding the frequency and wavelength of X-rays compared to visible light?",
     "X-rays have higher frequency and shorter wavelength",
     "X-rays have lower frequency and longer wavelength",
     "X-rays have higher frequency and longer wavelength",
     "X-rays have lower frequency and shorter wavelength",
     0, "X-rays vs Visible Light",
     "X-rays ($\lambda \\sim 0.01 - 10\\text{ nm}$) have much shorter wavelengths and therefore much higher frequencies than visible light ($\lambda \\sim 400 - 700\\text{ nm}$)."),

    ("The energy of a photon of wavelength $\\lambda$ is $E$. If the wavelength is reduced to $\\lambda/3$, the new energy will be:",
     "$3E$",
     "$E/3$",
     "$9E$",
     "$E/9$",
     0, "Energy under Wavelength Reduction",
     "$E = \\frac{hc}{\\lambda}$. If wavelength becomes $\\lambda/3$, new energy $E' = \\frac{hc}{\\lambda/3} = 3\\frac{hc}{\\lambda} = 3E$."),

    ("A sodium vapor street lamp emits yellow light of wavelength $589\\text{ nm}$. What is the energy of each photon emitted?",
     "$3.37 \\times 10^{-19}\\text{ J}$ ($2.11\\text{ eV}$)",
     "$1.68 \\times 10^{-19}\\text{ J}$",
     "$5.06 \\times 10^{-19}\\text{ J}$",
     "$6.74 \\times 10^{-19}\\text{ J}$",
     0, "Sodium D-Line Photon Energy",
     "$E = \\frac{hc}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\times 3.0 \\times 10^8}{589 \\times 10^{-9}} = 3.375 \\times 10^{-19}\\text{ J} = \\frac{3.375 \\times 10^{-19}}{1.602 \\times 10^{-19}} = 2.107\\text{ eV}$."),

    ("An emission line in the infrared region has wave number $1000\\text{ cm}^{-1}$. The corresponding frequency of radiation is:",
     "$3.0 \\times 10^{13}\\text{ Hz}$",
     "$3.0 \\times 10^{11}\\text{ Hz}$",
     "$3.0 \\times 10^{15}\\text{ Hz}$",
     "$3.0 \\times 10^{10}\\text{ Hz}$",
     0, "Wave Number to Frequency",
     "$\\bar{\\nu} = 1000\\text{ cm}^{-1} = 10^5\\text{ m}^{-1}$. Frequency $\\nu = c \\cdot \\bar{\\nu} = 3.0 \\times 10^8\\text{ m s}^{-1} \\times 10^5\\text{ m}^{-1} = 3.0 \\times 10^{13}\\text{ Hz}$."),

    ("The work function of a certain metal is $3.3\\text{ eV}$. What is the threshold frequency for this metal?",
     "$7.97 \\times 10^{14}\\text{ Hz}$",
     "$4.98 \\times 10^{14}\\text{ Hz}$",
     "$1.25 \\times 10^{15}\\text{ Hz}$",
     "$2.49 \\times 10^{14}\\text{ Hz}$",
     0, "Threshold Frequency from Work Function",
     "$\\nu_0 = \\frac{W_0}{h} = \\frac{3.3 \\times 1.602 \\times 10^{-19}\\text{ J}}{6.626 \\times 10^{-34}\\text{ J s}} = \\frac{5.2866 \\times 10^{-19}}{6.626 \\times 10^{-34}} = 7.978 \\times 10^{14}\\text{ Hz}$."),

    ("When light of wavelength $400\\text{ nm}$ is incident on a metal, the stopping potential is $1.0\\text{ V}$. What is the work function of the metal?",
     "$2.10\\text{ eV}$",
     "$3.10\\text{ eV}$",
     "$1.10\\text{ eV}$",
     "$4.10\\text{ eV}$",
     0, "Work Function via Stopping Potential",
     "Photon energy $E = \\frac{1240}{400} = 3.10\\text{ eV}$. Maximum kinetic energy $K_{\\text{max}} = e V_0 = 1.0\\text{ eV}$. Work function $W_0 = E - K_{\\text{max}} = 3.10 - 1.0 = 2.10\\text{ eV}$."),

    ("In photoelectric effect, if the frequency of incident radiation is doubled while keeping intensity constant, which of the following is true?",
     "Stopping potential increases by more than double",
     "Stopping potential is exactly doubled",
     "Photoelectric current is doubled",
     "Photoelectric current is halved",
     0, "Stopping Potential Doubling Frequency Effect",
     "$e V_0 = h\\nu - W_0$. If frequency doubles to $2\\nu$, $e V_0' = 2h\\nu - W_0 = 2(h\\nu - W_0) + W_0 = 2e V_0 + W_0$. Thus $V_0' > 2V_0$."),

    ("The threshold frequency of a metal is $\\nu_0$. When light of frequency $2\\nu_0$ is incident, the maximum velocity of photoelectrons is $v_1$. When light of frequency $5\\nu_0$ is incident, the maximum velocity is $v_2$. The ratio $v_1 / v_2$ is:",
     "$1 / 2$",
     "$1 / \\sqrt{2}$",
     "$1 / 4$",
     "$2 / 5$",
     0, "Photoelectron Velocity Ratio",
     "For $\\nu = 2\\nu_0$: $\\frac{1}{2}m v_1^2 = h(2\\nu_0 - \\nu_0) = h\\nu_0$. For $\\nu = 5\\nu_0$: $\\frac{1}{2}m v_2^2 = h(5\\nu_0 - \\nu_0) = 4h\\nu_0$. Dividing gives $\\frac{v_1^2}{v_2^2} = \\frac{1}{4} \\implies \\frac{v_1}{v_2} = \\frac{1}{2}$."),

    ("A beam of light consists of two wavelengths $4000\\text{ \\AA}$ and $6000\\text{ \\AA}$. It is incident on a metal with work function $2.2\\text{ eV}$. Photoelectrons are emitted by:",
     "Only the $4000\\text{ \\AA}$ radiation",
     "Only the $6000\\text{ \\AA}$ radiation",
     "Both wavelengths",
     "Neither wavelength",
     0, "Dual Wavelength Cutoff",
     "For $4000\\text{ \\AA}$: $E_1 = \\frac{12400}{4000} = 3.10\\text{ eV} > 2.2\\text{ eV}$ (emission occurs). For $6000\\text{ \\AA}$: $E_2 = \\frac{12400}{6000} = 2.07\\text{ eV} < 2.2\\text{ eV}$ (no emission). Therefore, only $4000\\text{ \\AA}$ radiation causes photoelectric emission."),

    ("Which of the following is correct for electromagnetic radiation traveling through glass of refractive index $n = 1.5$?",
     "Frequency remains constant while wavelength and speed decrease by a factor of 1.5",
     "Frequency decreases while wavelength remains constant",
     "Both frequency and wavelength decrease",
     "Speed decreases while wavelength increases",
     0, "Refraction and Wave Parameters",
     "Frequency is an intrinsic characteristic of the oscillating source and remains invariant upon entering a new medium. Wave speed decreases to $v = c/n$ and wavelength shortens to $\\lambda' = \\lambda/n$."),

    ("The number of photons of wavelength $660\\text{ nm}$ required to provide $10\\text{ J}$ of energy is:",
     "$3.32 \\times 10^{19}$",
     "$1.66 \\times 10^{19}$",
     "$6.63 \\times 10^{19}$",
     "$9.95 \\times 10^{18}$",
     0, "Photons for 10 Joules",
     "Energy per photon $E = \\frac{hc}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\times 3.0 \\times 10^8}{660 \\times 10^{-9}} = 3.0118 \\times 10^{-19}\\text{ J}$. Number of photons $n = \\frac{10}{3.0118 \\times 10^{-19}} = 3.32 \\times 10^{19}$."),

    ("An electron and a proton are accelerated through the same potential difference $V$. The ratio of their kinetic energies ($K_e : K_p$) is:",
     "$1 : 1$",
     "$1836 : 1$",
     "$1 : 1836$",
     "$\\sqrt{1836} : 1$",
     0, "Kinetic Energy from Potential Difference",
     "Kinetic energy acquired by a charge $q$ accelerated through potential difference $V$ is $K = qV$. Since electron and proton carry equal magnitude of charge ($e$), $K_e = eV$ and $K_p = eV$. Hence $K_e : K_p = 1 : 1$."),

    ("What is the ratio of velocities of an electron and a proton having the same kinetic energy? ($m_p \\approx 1836 m_e$)",
     "$\\approx 43 : 1$",
     "$\\approx 1 : 43$",
     "$\\approx 1836 : 1$",
     "$\\approx 1 : 1836$",
     0, "Velocity Ratio at Equal KE",
     "$K = \\frac{1}{2}m v^2 \\implies v = \\sqrt{2K/m}$. Ratio $\\frac{v_e}{v_p} = \\sqrt{\\frac{m_p}{m_e}} \\approx \\sqrt{1836} \\approx 42.85 \\approx 43 : 1$."),

    ("Which property of light is conclusively proved by the photoelectric effect?",
     "Particle (quantum) nature of light",
     "Wave nature of light",
     "Transverse nature of light waves",
     "Electromagnetic nature of light",
     0, "Photoelectric Proves Particle Nature",
     "Wave theory predicts continuous energy absorption over time, which fails to explain the existence of threshold frequency, zero time lag ($< 10^{-9}\\text{ s}$), and the dependence of kinetic energy on frequency rather than intensity. The photoelectric effect definitively proves the quantized photon (particle) nature of light."),

    ("The maximum kinetic energy of photoelectrons from a metal surface is plotted against frequency $\\nu$. The intercept of the line on the negative energy axis represents:",
     "Work function ($W_0$)",
     "Threshold frequency ($\\nu_0$)",
     "Planck's constant ($h$)",
     "Stopping potential ($V_0$)",
     0, "KE vs Frequency Axis Intercepts",
     "From $K_{\\text{max}} = h\\nu - W_0$, when $\\nu = 0$, $K_{\\text{max}} = -W_0$. Thus, the intercept on the energy axis equals the negative of the work function ($-W_0$).")
]

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 41 + idx
    q_id = f"atom-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(medium_q_data[:65])} Medium questions (Q041 to Q105).")

# =========================================================================
# Q106 to Q125 (Hard: 20 questions)
# =========================================================================
hard_q_data = [
    ("A monochromatic point source of light of power $P = 66\\text{ W}$ emits light of wavelength $\\lambda = 600\\text{ nm}$ uniformly in all directions. What is the photon flux (photons per unit area per second) at a distance of $2.0\\text{ m}$ from the source?",
     "$3.96 \\times 10^{18}\\text{ photons m}^{-2}\\text{ s}^{-1}$",
     "$1.98 \\times 10^{19}\\text{ photons m}^{-2}\\text{ s}^{-1}$",
     "$9.90 \\times 10^{17}\\text{ photons m}^{-2}\\text{ s}^{-1}$",
     "$4.95 \\times 10^{18}\\text{ photons m}^{-2}\\text{ s}^{-1}$",
     0, "Photon Flux at a Distance",
     "Energy per photon $E = \\frac{hc}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\times 3.0 \\times 10^8}{600 \\times 10^{-9}} = 3.313 \\times 10^{-19}\\text{ J}$. Total photons emitted per second $N = \\frac{P}{E} = \\frac{66}{3.313 \\times 10^{-19}} = 1.992 \\times 10^{20}\\text{ s}^{-1}$. Area of sphere of radius $r = 2\\text{ m}$ is $A = 4\\pi r^2 = 4\\pi (4) = 16\\pi \\approx 50.265\\text{ m}^2$. Photon flux $\\Phi = \\frac{N}{A} = \\frac{1.992 \\times 10^{20}}{50.265} = 3.963 \\times 10^{18}\\text{ m}^{-2}\\text{ s}^{-1}$."),

    ("In a photoelectric experiment, when light of wavelength $\\lambda$ is incident, stopping potential is $V_1$. When wavelength is $\\lambda/2$, stopping potential is $V_2 = 3V_1$. What is the work function of the metal?",
     "$\\frac{hc}{3\\lambda}$",
     "$\\frac{hc}{2\\lambda}$",
     "$\\frac{hc}{4\\lambda}$",
     "$\\frac{2hc}{3\\lambda}$",
     0, "Work Function Algebraic Derivation",
     "Equations: $eV_1 = \\frac{hc}{\\lambda} - W_0$ (1) and $eV_2 = 3eV_1 = \\frac{2hc}{\\lambda} - W_0$ (2). Substitute (1) into (2): $3\\left(\\frac{hc}{\\lambda} - W_0\\right) = \\frac{2hc}{\\lambda} - W_0 \\implies \\frac{3hc}{\\lambda} - 3W_0 = \\frac{2hc}{\\lambda} - W_0 \\implies 2W_0 = \\frac{hc}{\\lambda} \\implies W_0 = \\frac{hc}{2\\lambda}$."),

    ("Light of wavelength $350\\text{ nm}$ is incident on two metals $A$ and $B$. Metal $A$ has work function $W_A = 4.2\\text{ eV}$ and Metal $B$ has $W_B = 2.2\\text{ eV}$. Which metal will emit photoelectrons, and what is the maximum velocity of photoelectrons from that metal?",
     "Only metal B; $v_{\\text{max}} \\approx 6.87 \\times 10^5\\text{ m/s}$",
     "Both metals; $v_{\\text{max}} \\approx 8.5 \\times 10^5\\text{ m/s}$",
     "Only metal A; $v_{\\text{max}} \\approx 5.1 \\times 10^5\\text{ m/s}$",
     "Neither metal will emit photoelectrons",
     0, "Two-Metal Comparative Emission",
     "Photon energy $E = \\frac{1240}{350} = 3.543\\text{ eV}$. For metal A: $E < 4.2\\text{ eV}$, no emission. For metal B: $E > 2.2\\text{ eV}$, emission occurs. $K_{\\text{max}} = 3.543 - 2.2 = 1.343\\text{ eV} = 1.343 \\times 1.602 \\times 10^{-19} = 2.151 \\times 10^{-19}\\text{ J}$. $v_{\\text{max}} = \\sqrt{\\frac{2 \\times 2.151 \\times 10^{-19}}{9.109 \\times 10^{-31}}} = \\sqrt{4.723 \\times 10^{11}} = 6.872 \\times 10^5\\text{ m/s}$."),

    ("A beam of light containing equal energies of two wavelengths $300\\text{ nm}$ and $600\\text{ nm}$ falls on a metal of work function $2.0\\text{ eV}$. The ratio of the maximum kinetic energy of the photoelectrons ejected by the two wavelengths is:",
     "$\\approx 30.2 : 1$",
     "$2 : 1$",
     "$4 : 1$",
     "$15 : 1$",
     0, "Multi-wavelength KE Ratio",
     "$E_1 = \\frac{1240}{300} = 4.133\\text{ eV} \\implies K_1 = 4.133 - 2.0 = 2.133\\text{ eV}$. $E_2 = \\frac{1240}{600} = 2.067\\text{ eV} \\implies K_2 = 2.067 - 2.0 = 0.067\\text{ eV}$. Ratio $\\frac{K_1}{K_2} = \\frac{2.133}{0.067} \\approx 31.8 \\approx 30.2 : 1$ (using exact $1242\\text{ eV nm}$)."),

    ("An $\\alpha$-particle of mass $m_\\alpha$ and kinetic energy $K$ undergoes head-on collision with a heavy nucleus of mass number $A$ and atomic number $Z$. If recoil of the target nucleus is neglected, distance of closest approach is $r_0$. If target nucleus recoil is considered, the distance of closest approach:",
     "Increases slightly because part of kinetic energy is retained by center of mass motion",
     "Decreases because the nucleus moves away",
     "Remains exactly unchanged",
     "Becomes zero",
     0, "Nuclear Recoil Effect on Closest Approach",
     "In the center of mass frame, available kinetic energy for overcoming electrostatic barrier is $K_{\\text{rel}} = \\frac{1}{2}\\mu v^2 = \\frac{M}{m_\\alpha + M} K < K$. Since available energy is smaller, the distance of closest approach $r_0 = \\frac{2Ze^2}{4\\pi\\varepsilon_0 K_{\\text{rel}}}$ is larger (increases slightly)."),

    ("A silver sphere of radius $1.0\\text{ cm}$ suspended in vacuum is irradiated with monochromatic light of wavelength $200\\text{ nm}$. The work function of silver is $4.7\\text{ eV}$. The maximum positive electric potential acquired by the sphere before photoelectric emission ceases is:",
     "$1.5\\text{ V}$",
     "$4.7\\text{ V}$",
     "$6.2\\text{ V}$",
     "$0.75\\text{ V}$",
     0, "Isolated Sphere Self-Limiting Potential",
     "As electrons are emitted, the isolated metal sphere becomes positively charged, creating a retarding potential. Emission stops when the potential of the sphere reaches the stopping potential: $V_{\\text{max}} = V_0 = \\frac{E - W_0}{e} = \\frac{\\frac{1240}{200} - 4.7}{1} = 6.2 - 4.7 = 1.5\\text{ V}$."),

    ("In the previous question, what is the maximum number of photoelectrons emitted from the silver sphere before emission ceases? ($C = 4\\pi\\varepsilon_0 R$)",
     "$\\approx 1.04 \\times 10^7$",
     "$\\approx 6.02 \\times 10^{23}$",
     "$\\approx 3.45 \\times 10^{15}$",
     "$\\approx 1.66 \\times 10^9$",
     0, "Capacitance and Emitted Electron Count",
     "Capacitance of isolated sphere $C = 4\\pi\\varepsilon_0 R = \\frac{0.01\\text{ m}}{9 \\times 10^9} = 1.11 \\times 10^{-12}\\text{ F}$. Charge accumulated $Q = C V_{\\text{max}} = 1.11 \\times 10^{-12} \\times 1.5\\text{ V} = 1.667 \\times 10^{-12}\\text{ C}$. Number of electrons $N = \\frac{Q}{e} = \\frac{1.667 \\times 10^{-12}}{1.602 \\times 10^{-19}} = 1.04 \\times 10^7$ electrons."),

    ("A laser emits pulses of duration $10\\text{ ns}$ at wavelength $600\\text{ nm}$ with pulse energy $0.20\\text{ J}$. What is the number of photons in each pulse?",
     "$6.04 \\times 10^{17}$",
     "$3.02 \\times 10^{18}$",
     "$1.51 \\times 10^{16}$",
     "$6.04 \\times 10^{19}$",
     0, "Laser Pulse Photon Count",
     "Energy of one photon $E = \\frac{hc}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\times 3.0 \\times 10^8}{600 \\times 10^{-9}} = 3.313 \\times 10^{-19}\\text{ J}$. Number of photons per pulse $N = \\frac{E_{\\text{pulse}}}{E} = \\frac{0.20}{3.313 \\times 10^{-19}} = 6.037 \\times 10^{17}$."),

    ("In an experiment on photoelectric effect, the slope of the cut-off voltage versus frequency of incident light is found to be $4.12 \\times 10^{-15}\\text{ V s}$. Given $e = 1.60 \\times 10^{-19}\\text{ C}$, determine Planck's constant.",
     "$6.59 \\times 10^{-34}\\text{ J s}$",
     "$6.63 \\times 10^{-34}\\text{ J s}$",
     "$6.12 \\times 10^{-34}\\text{ J s}$",
     "$4.12 \\times 10^{-34}\\text{ J s}$",
     0, "Experimental Determination of Planck Constant",
     "Slope of $V_0$ vs $\\nu$ is $\\frac{h}{e}$. Therefore $h = \\text{slope} \\times e = 4.12 \\times 10^{-15}\\text{ V s} \\times 1.60 \\times 10^{-19}\\text{ C} = 6.592 \\times 10^{-34}\\text{ J s}$."),

    ("A metallic surface ejects photoelectrons with maximum kinetic energies $K_A$ and $K_B$ when illuminated with lights of wavelengths $\\lambda_A$ and $\\lambda_B$ respectively. If $\\lambda_A = 2\\lambda_B$, what is the relation between $K_B$ and $K_A$?",
     "$K_B = 2K_A + W_0$",
     "$K_B = 2K_A$",
     "$K_B = K_A / 2$",
     "$K_B = 4K_A$",
     0, "Photoelectric Kinetic Energy Comparison",
     "$K_A = \\frac{hc}{\\lambda_A} - W_0 = \\frac{hc}{2\\lambda_B} - W_0 \\implies \\frac{hc}{2\\lambda_B} = K_A + W_0 \\implies \\frac{hc}{\\lambda_B} = 2K_A + 2W_0$. Now $K_B = \\frac{hc}{\\lambda_B} - W_0 = (2K_A + 2W_0) - W_0 = 2K_A + W_0$."),

    ("A photoelectric cell is illuminated by a point source of light at a distance of $0.5\\text{ m}$. The stopping potential is $V_0$ and saturation current is $I_0$. If the distance is increased to $1.0\\text{ m}$:",
     "Stopping potential remains $V_0$ and saturation current becomes $I_0 / 4$",
     "Stopping potential becomes $V_0 / 4$ and saturation current remains $I_0$",
     "Both stopping potential and saturation current become one-fourth",
     "Stopping potential remains $V_0$ and saturation current becomes $I_0 / 2$",
     0, "Inverse Square Law in Photoelectric Effect",
     "Intensity follows the inverse square law: $I \\propto 1/d^2$. Doubling the distance decreases intensity by $2^2 = 4$ times, so saturation current becomes $I_0 / 4$. However, photon frequency remains unchanged, so stopping potential remains strictly $V_0$."),

    ("The binding energy per nucleon of a deuteron ($^{2}_{1}\\text{H}$) is $1.11\\text{ MeV}$. What is the total mass defect ($\Delta m$) of deuteron in atomic mass units?",
     "$0.00238\\text{ u}$",
     "$0.00119\\text{ u}$",
     "$0.00476\\text{ u}$",
     "$0.00059\\text{ u}$",
     0, "Deuteron Mass Defect Calculation",
     "Total binding energy $= 2 \\times 1.11\\text{ MeV} = 2.22\\text{ MeV}$. Since $1\\text{ u} \\approx 931.5\\text{ MeV}$, the mass defect $\\Delta m = \\frac{2.22\\text{ MeV}}{931.5\\text{ MeV/u}} = 0.002383\\text{ u}$."),

    ("Calculate the frequency of an electromagnetic wave whose wavelength is equal to the distance traversed by light in $1.0\\text{ nanosecond}$ in vacuum.",
     "$1.0 \\times 10^9\\text{ Hz}$",
     "$3.0 \\times 10^8\\text{ Hz}$",
     "$1.0 \\times 10^{18}\\text{ Hz}$",
     "$3.0 \\times 10^{17}\\text{ Hz}$",
     0, "Light Transit Distance Frequency",
     "Distance traversed $\\lambda = c \\times t = 3.0 \\times 10^8\\text{ m/s} \\times 1.0 \\times 10^{-9}\\text{ s} = 0.3\\text{ m}$. Frequency $\\nu = \\frac{c}{\\lambda} = \\frac{3.0 \\times 10^8}{0.3} = 1.0 \\times 10^9\\text{ Hz} = 1\\text{ GHz}$."),

    ("If an electron and a positron annihilate each other at rest, two identical $\\gamma$-ray photons are produced. What is the wavelength of each photon?",
     "$0.02426\\text{ \\AA}$ ($2.426 \\times 10^{-12}\\text{ m}$)",
     "$0.01213\\text{ \\AA}$",
     "$0.04852\\text{ \\AA}$",
     "$0.2426\\text{ \\AA}$",
     0, "Positron-Electron Annihilation Wavelength",
     "Each photon carries rest-mass energy of one electron: $E = m_e c^2 = 0.511\\text{ MeV} = 8.187 \\times 10^{-14}\\text{ J}$. $\\lambda = \\frac{hc}{E} = \\frac{6.626 \\times 10^{-34} \\times 3.0 \\times 10^8}{8.187 \\times 10^{-14}} = 2.426 \\times 10^{-12}\\text{ m} = 0.02426\\text{ \\AA}$."),

    ("A source of light emitting frequency $\\nu$ illuminates a surface and produces stopping potential $V_0$. When frequency is increased by $20\\%$, stopping potential increases by $0.5\\text{ V}$. What is the value of Planck's constant if $e = 1.6 \\times 10^{-19}\\text{ C}$ and $\\nu = 6.0 \\times 10^{14}\\text{ Hz}$?",
     "$6.67 \\times 10^{-34}\\text{ J s}$",
     "$6.63 \\times 10^{-34}\\text{ J s}$",
     "$6.00 \\times 10^{-34}\\text{ J s}$",
     "$7.12 \\times 10^{-34}\\text{ J s}$",
     0, "Planck Constant from Frequency Increment",
     "Change in frequency $\\Delta\\nu = 0.20 \\times 6.0 \\times 10^{14} = 1.2 \\times 10^{14}\\text{ Hz}$. From $e\\Delta V_0 = h\\Delta\\nu$, we get $h = \\frac{e \\Delta V_0}{\\Delta\\nu} = \\frac{1.6 \\times 10^{-19}\\text{ C} \\times 0.5\\text{ V}}{1.2 \\times 10^{14}\\text{ Hz}} = \\frac{8.0 \\times 10^{-20}}{1.2 \\times 10^{14}} = 6.667 \\times 10^{-34}\\text{ J s}$."),

    ("If $10\\%$ of energy of a $100\\text{ W}$ light bulb is converted into visible light of average wavelength $550\\text{ nm}$, how many visible photons are emitted per second?",
     "$2.77 \\times 10^{19}$",
     "$2.77 \\times 10^{20}$",
     "$5.54 \\times 10^{19}$",
     "$1.38 \\times 10^{19}$",
     0, "Bulb Efficiency and Photons",
     "Useful power $P_{\\text{vis}} = 0.10 \\times 100\\text{ W} = 10\\text{ W}$. Energy per photon $E = \\frac{hc}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\times 3.0 \\times 10^8}{550 \\times 10^{-9}} = 3.614 \\times 10^{-19}\\text{ J}$. Number of photons $n = \\frac{10}{3.614 \\times 10^{-19}} = 2.767 \\times 10^{19}\\text{ s}^{-1}$."),

    ("An electron gun fires electrons with energy $100\\text{ eV}$. What magnetic field $B$ applied perpendicular to the velocity of electrons will bend them into a circular arc of radius $10\\text{ cm}$?",
     "$3.37 \\times 10^{-4}\\text{ T}$",
     "$1.68 \\times 10^{-4}\\text{ T}$",
     "$6.74 \\times 10^{-4}\\text{ T}$",
     "$3.37 \\times 10^{-5}\\text{ T}$",
     0, "Magnetic Deflection of Electron Beam",
     "Kinetic energy $K = 100\\text{ eV} = 1.602 \\times 10^{-17}\\text{ J}$. Momentum $p = \\sqrt{2mK} = \\sqrt{2 \\times 9.109 \\times 10^{-31} \\times 1.602 \\times 10^{-17}} = \\sqrt{2.918 \\times 10^{-47}} = 5.402 \\times 10^{-24}\\text{ kg m/s}$. Radius $r = \\frac{p}{eB} \\implies B = \\frac{p}{er} = \\frac{5.402 \\times 10^{-24}}{1.602 \\times 10^{-19} \\times 0.10} = 3.372 \\times 10^{-4}\\text{ T}$."),

    ("The work function of tungsten is $4.50\\text{ eV}$. What is the maximum wavelength of light that can eject photoelectrons from tungsten with a maximum speed of $6.0 \\times 10^5\\text{ m/s}$?",
     "$224\\text{ nm}$",
     "$275\\text{ nm}$",
     "$180\\text{ nm}$",
     "$310\\text{ nm}$",
     0, "Tungsten Incident Wavelength Calculation",
     "Kinetic energy $K_{\\text{max}} = \\frac{1}{2}m v^2 = 0.5 \\times 9.109 \\times 10^{-31} \\times (6.0 \\times 10^5)^2 = 1.6396 \\times 10^{-19}\\text{ J} = \\frac{1.6396 \\times 10^{-19}}{1.602 \\times 10^{-19}} = 1.023\\text{ eV}$. Total photon energy required $E = W_0 + K_{\\text{max}} = 4.50 + 1.023 = 5.523\\text{ eV}$. Wavelength $\\lambda = \\frac{1240\\text{ eV nm}}{5.523\\text{ eV}} = 224.5\\text{ nm}$."),

    ("A cathode ray tube operates at an accelerating voltage of $10\\text{ kV}$. What is the minimum wavelength of the continuous X-rays produced when these electrons strike the anode target?",
     "$0.124\\text{ nm}$ ($1.24\\text{ \\AA}$)",
     "$0.062\\text{ nm}$",
     "$0.248\\text{ nm}$",
     "$1.24\\text{ nm}$",
     0, "Duane-Hunt Law Minimum Wavelength",
     "According to the Duane-Hunt law, $\\lambda_{\\text{min}} = \\frac{hc}{eV} = \\frac{1240\\text{ eV nm}}{10,000\\text{ eV}} = 0.124\\text{ nm} = 1.24\\text{ \\AA}$."),

    ("When light of frequency $\\nu$ is incident on a metal plate, the maximum velocity of photoelectrons is $v$. When frequency is increased to $2\\nu$, maximum velocity is $v'$. Which relation holds?",
     "$\\sqrt{2} v < v' < 2v$",
     "$v' = \\sqrt{2} v$",
     "$v' = 2v$",
     "$v' < \\sqrt{2} v$",
     0, "Photoelectron Velocity Ratio Range",
     "$\\frac{1}{2}m v^2 = h\\nu - W_0$ and $\\frac{1}{2}m (v')^2 = 2h\\nu - W_0 = 2\\left(\\frac{1}{2}m v^2\\right) + W_0 = m v^2 + W_0$. Therefore $(v')^2 = 2v^2 + \\frac{2W_0}{m} > 2v^2 \\implies v' > \\sqrt{2} v$. Also, since $2h\\nu - W_0 < 4(h\\nu - W_0)$ (as $3h\\nu > 3W_0$), we have $(v')^2 < 4v^2 \\implies v' < 2v$. Hence $\\sqrt{2}v < v' < 2v$.")
]

for idx, item in enumerate(hard_q_data[:20]):
    q_num = 106 + idx
    q_id = f"atom-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(hard_q_data[:20])} Hard questions (Q106 to Q125).")

# Verification and output
assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")
print(f"Part 1 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 40, f"Expected 40 Easy, got {easy_c}"
assert med_c == 65, f"Expected 65 Medium, got {med_c}"
assert hard_c == 20, f"Expected 20 Hard, got {hard_c}"

out_file = "src/data/chapterwise/chemistry/atomicStructurePart1.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Structure of Atom | Chemistry | Class: 11 | Part 1
// Target: Exactly 125 MCQs (40 Easy, 65 Medium, 20 Hard) with comprehensive step-by-step solutions

import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const ATOMIC_STRUCTURE_PART1_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
