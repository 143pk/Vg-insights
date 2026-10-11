import sys, json
sys.path.append('scripts')
from make_q import make_q

# Load Group 1
with open('scripts/part2_qs.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

print(f"Loaded {len(qs)} from Group 1. Generating Groups 2 to 8...")

# ==============================================================================
# Group 2 (166-180): SI base quantities and base units
# 4 Easy, 7 Medium, 4 Hard
# ==============================================================================
qs.append(make_q(
    166,
    "How many base quantities are included in the International System of Units (SI)?",
    {"A": "5", "B": "7", "C": "9", "D": "8"},
    "B", "Easy", "SI base quantities and base units",
    "Fundamental base quantities defined under SI.",
    "The International System of Units (SI).",
    "SI defines strictly 7 base physical quantities.",
    "1. The 7 base physical quantities in SI are:\n   - Length (meter, m)\n   - Mass (kilogram, kg)\n   - Time (second, s)\n   - Electric current (ampere, A)\n   - Thermodynamic temperature (kelvin, K)\n   - Amount of substance (mole, mol)\n   - Luminous intensity (candela, cd).\n2. In addition, there are two supplementary units: plane angle (radian) and solid angle (steradian).\n3. The count of base quantities is strictly 7.",
    "NEET NCERT Line: Exactly seven base physical quantities form the foundation of the SI system.",
    "Options A and D are incorrect numbers. Option C counts the two supplementary units as base units, which is incorrect."
))

qs.append(make_q(
    167,
    "The SI base unit of thermodynamic temperature is:",
    {"A": "Degree Celsius (°C)", "B": "Degree Fahrenheit (°F)", "C": "Kelvin (K)", "D": "Rankine (R)"},
    "C", "Easy", "SI base quantities and base units",
    "Base SI unit of temperature.",
    "Physical quantity: Thermodynamic temperature.",
    "The fundamental thermodynamic temperature unit in SI is the Kelvin (K).",
    "1. Degree Celsius (°C) and degree Fahrenheit (°F) are practical temperature scales, but not SI base units.\n2. In SI, the kelvin (symbol: K, without degree symbol) is the fundamental base unit.\n3. It is defined by taking the fixed numerical value of the Boltzmann constant k = 1.380649 × 10⁻²³ J/K.",
    "NEET Convention Trap: Never write degree symbol with Kelvin! It is simply 'K', not '°K'.",
    "Options A, B, and D are non-SI or secondary scales."
))

qs.append(make_q(
    168,
    "Which of the following is the SI base unit for luminous intensity?",
    {"A": "Lumen (lm)", "B": "Lux (lx)", "C": "Candela (cd)", "D": "Watt (W)"},
    "C", "Easy", "SI base quantities and base units",
    "SI base unit of luminous intensity.",
    "Physical quantity: Luminous intensity.",
    "Base SI unit is candela (cd). Lumen is luminous flux (cd·sr); Lux is illuminance (lm/m²).",
    "1. Luminous intensity measures the perceived power emitted by a light source in a particular direction per unit solid angle.\n2. The SI base unit is the candela (symbol: cd).\n3. Lumen (lm = cd·sr) is the unit of luminous flux.\n4. Lux (lx = lm/m²) is the unit of illuminance.",
    "NEET Memory Aid: Candela (cd) is the base unit. Lumen (lm) and Lux (lx) are derived photometric units.",
    "Options A and B are derived units. Option D is radiometric power, not photometric."
))

qs.append(make_q(
    169,
    "The unit of plane angle, the radian, is classified in the SI system as a:",
    {"A": "Base unit", "B": "Supplementary unit", "C": "Derived unit with dimensions", "D": "Practical CGS unit"},
    "B", "Easy", "SI base quantities and base units",
    "Classification of angle units in the SI system.",
    "Plane angle θ = arc / radius (radian).",
    "Radian (rad) and steradian (sr) were defined by CGPM as supplementary units.",
    "1. Plane angle is measured in radians (rad), defined as the ratio of circular arc length to radius.\n2. Because it is the ratio of two lengths [L]/[L] = 1, it has no physical dimension.\n3. The SI system classifies radian and steradian as supplementary units (or dimensionless derived units).",
    "NEET Concept: Plane angle (rad) and Solid angle (sr) are dimensionless supplementary units.",
    "Option A is wrong because it is not one of the 7 base units. Option C is wrong because it has no dimensions."
))

qs.append(make_q(
    170,
    "Under the 2019 redefinition of SI base units, the kilogram is defined by fixing the exact numerical value of:",
    {"A": "The speed of light in vacuum c", "B": "Planck's constant h", "C": "The elementary charge e", "D": "Avogadro's constant NA"},
    "B", "Medium", "SI base quantities and base units",
    "Modern redefinition of SI base units via fundamental physical constants.",
    "Redefinition of the kilogram (effective May 20, 2019).",
    "E = h ν = m c²  =>  h has units kg·m²·s⁻¹. Fixing h and c, s defines the kilogram.",
    "1. Prior to 2019, the kilogram was defined by a physical platinum-iridium cylinder stored in France.\n2. On World Metrology Day 2019, the kilogram was redefined by fixing Planck's constant h to exactly 6.62607015 × 10⁻³⁴ J·s (kg·m²·s⁻¹).\n3. By combining fixed h with fixed c (meter) and fixed Δν_Cs (second), the kilogram is realized using a Kibble balance.",
    "NEET Modern Physics Connection: Kilogram -> Planck constant h; Meter -> Speed of light c; Second -> Cesium transition frequency; Ampere -> Elementary charge e.",
    "Option A defines the meter. Option C defines the ampere. Option D defines the mole."
))

qs.append(make_q(
    171,
    "The standard second is defined in the SI system based on the transition between the two hyperfine levels of the ground state of:",
    {"A": "Cesium-133 atom", "B": "Krypton-86 atom", "C": "Rubidium-87 atom", "D": "Carbon-12 atom"},
    "A", "Medium", "SI base quantities and base units",
    "Atomic clock definition of standard second in SI.",
    "Definition of 1 second (s).",
    "1 s = 9,192,631,770 periods of radiation corresponding to the transition between two hyperfine levels of Cs-133.",
    "1. The second was redefined in 1967 based on atomic frequency standards.\n2. Exactly 9,192,631,770 cycles of microwave radiation emitted during the transition between the two hyperfine levels of the ground state of Cesium-133 define 1 second.\n3. Cesium atomic clocks provide accuracy better than 1 part in 10¹⁴ (losing less than 1 second in 3 million years).",
    "NEET NCERT Gold Line: The atomic clock standard uses Cesium-133 with exactly 9,192,631,770 vibrations.",
    "Option B (Kr-86) was the historical 1960 standard for the meter. Option D is used for atomic mass units."
))

qs.append(make_q(
    172,
    "The maximum solid angle subtended by any closed surface at an internal point is:",
    {"A": "2π steradians", "B": "4π steradians", "C": "π steradians", "D": "8π steradians"},
    "B", "Medium", "SI base quantities and base units",
    "Solid angle subtended by a closed surface.",
    "A closed surface enclosing a point.",
    "dΩ = (dA cos θ) / r²; for a sphere, Ω_total = (4π r²) / r² = 4π sr.",
    "1. Solid angle subtended by a surface element dA at distance r is dΩ = dA_normal / r².\n2. Integrating over an entire sphere: Area = 4π r².\n3. Total solid angle = 4π r² / r² = 4π steradians.\n4. By Gauss's theorem/geometry, ANY arbitrary closed surface subtends 4π steradians at any internal point.",
    "NEET Electrostatics Tie-in: Gauss's Law Φ = q/ε₀ is intimately tied to the total solid angle of 4π sr around an enclosed charge!",
    "Option A (2π sr) is the solid angle subtended by a hemisphere. Options C and D are incorrect."
))

qs.append(make_q(
    173,
    "Which of the following physical quantities is NOT a base quantity in the SI system?",
    {"A": "Electric current", "B": "Electric charge", "C": "Luminous intensity", "D": "Amount of substance"},
    "B", "Medium", "SI base quantities and base units",
    "Distinction between base and derived electrical quantities in SI.",
    "Four candidate quantities: Current, Charge, Luminous intensity, Amount of substance.",
    "Electric charge q = I × t; Charge is derived from base quantities current (A) and time (s).",
    "1. In the SI system, Electric Current (Ampere, A) is chosen as the fundamental base quantity.\n2. Electric charge (Coulomb, C = A·s) is a DERIVED quantity.\n3. Luminous intensity (cd) and amount of substance (mol) are base quantities.",
    "NEET Common Mistake: Many students assume Charge is fundamental because electrons carry charge. In SI, CURRENT is the base quantity, NOT charge!",
    "Options A, C, and D are all fundamental SI base quantities."
))

qs.append(make_q(
    174,
    "One mole is defined as the amount of substance containing exactly:",
    {"A": "6.02214076 × 10²³ elementary entities", "B": "Mass equal to 1 gram of hydrogen-1", "C": "Number of atoms in exactly 12 grams of Carbon-14", "D": "3.011 × 10²³ elementary entities"},
    "A", "Medium", "SI base quantities and base units",
    "SI definition of the mole via the Avogadro constant.",
    "Definition of 1 mole (mol).",
    "1 mol contains exactly N_A = 6.02214076 × 10²³ elementary entities.",
    "1. The 2019 SI redefinition fixed the Avogadro constant N_A to exactly 6.02214076 × 10²³ mol⁻¹.\n2. One mole contains exactly this number of specified elementary entities (atoms, molecules, ions, electrons, etc.).\n3. The previous definition tied to 0.012 kg of Carbon-12 is now an experimental measurement rather than the definition.",
    "NEET Fact: 1 mole = 6.02214076 × 10²³ particles (exact defined integer/decimal constant).",
    "Option B is obsolete. Option C incorrectly specifies C-14 instead of C-12. Option D is half a mole."
))

qs.append(make_q(
    175,
    "The SI base unit of length, the meter, is defined as the distance traveled by light in vacuum in:",
    {"A": "1 / 300,000,000 of a second", "B": "1 / 299,792,458 of a second", "C": "1 / 186,000 of a second", "D": "1 / 3.0 × 10⁸ of a second"},
    "B", "Medium", "SI base quantities and base units",
    "Definition of the standard meter in terms of the speed of light.",
    "Definition of 1 meter (m).",
    "d = c × t  =>  1 m = c × (1 / 299,792,458 s).",
    "1. The meter was redefined by the 17th CGPM in 1983.\n2. By fixing the speed of light in vacuum c to exactly 299,792,458 m/s, the meter is defined as the length of the path traveled by light in vacuum during a time interval of 1 / 299,792,458 of a second.",
    "NEET NCERT Gold Line: c = 299,792,458 m/s exactly by definition. The meter is derived from the second and c.",
    "Option A and D are rounded approximations. Option C is miles per second."
))

qs.append(make_q(
    176,
    "Which of the following physical quantities has the SI base unit kg·m²·s⁻³·A⁻²?",
    {"A": "Electric resistance", "B": "Electric potential", "C": "Capacitance", "D": "Inductance"},
    "A", "Medium", "SI base quantities and base units",
    "Expressing derived electrical quantities in SI base units.",
    "Unit: kg·m²·s⁻³·A⁻².",
    "R = V / I = (Work / Charge) / I = (J / C) / A = (kg·m²·s⁻² / (A·s)) / A = kg·m²·s⁻³·A⁻².",
    "1. Electric resistance R = V / I.\n2. Potential V = W / q = (Force × distance) / (I × t) = (kg·m·s⁻² × m) / (A·s) = kg·m²·s⁻³·A⁻¹.\n3. Divide by current I (A): R = kg·m²·s⁻³·A⁻².\n4. Therefore, kg·m²·s⁻³·A⁻² is the Ohm (Ω), the SI unit of electric resistance.",
    "NEET Memory Rule: Resistance R = [M L² T⁻³ A⁻²]. Look at the powers: M¹ L² T⁻³ A⁻².",
    "Option B (Electric potential) has A⁻¹. Option C (Capacitance) has M⁻¹ L⁻² T⁴ A². Option D (Inductance) has T⁻²."
))

qs.append(make_q(
    177,
    "If a new system of units is chosen where the unit of mass is 2 kg, the unit of length is 5 m, and the unit of time is 10 s, the value of 10 N of force in this new system is:",
    {"A": "100 new units", "B": "10 new units", "C": "1000 new units", "D": "1 new unit"},
    "A", "Hard", "SI base quantities and base units",
    "Dimensional conversion of force into an arbitrary base unit system.",
    "Force F = 10 N. M₁ = 1 kg, L₁ = 1 m, T₁ = 1 s. M₂ = 2 kg, L₂ = 5 m, T₂ = 10 s.",
    "[F] = [M L T⁻²]. n₂ = n₁ (M₁/M₂)(L₁/L₂)(T₁/T₂)⁻².",
    "1. n₁ = 10.\n2. M₁/M₂ = 1/2.\n3. L₁/L₂ = 1/5.\n4. (T₁/T₂)⁻² = (1/10)⁻² = 10² = 100.\n5. n₂ = 10 × (1/2) × (1/5) × 100 = 10 × (1/10) × 100 = 100 new units.",
    "NEET Calculation Check: Always compute (T₁/T₂)⁻² carefully: (1 / 10)⁻² = 10² = 100. Then multiply: 10 × (1/10) × 100 = 100!",
    "Option B (10) forgets time scaling. Option C (1000) has an arithmetic error. Option D (1) inverts the ratio."
))

qs.append(make_q(
    178,
    "The permeability of free space μ₀ is 4π × 10⁻⁷ T·m/A. Expressed purely in SI base units (kg, m, s, A), μ₀ is:",
    {"A": "kg·m·s⁻²·A⁻²", "B": "kg·m²·s⁻²·A⁻²", "C": "kg·m⁻¹·s⁻²·A⁻²", "D": "kg·m·s⁻³·A⁻¹"},
    "A", "Hard", "SI base quantities and base units",
    "Reduction of magnetic permeability to SI base units.",
    "Quantity μ₀ = 4π × 10⁻⁷ N/A².",
    "F / l = (μ₀ I₁ I₂) / (2π d)  =>  μ₀ = (F · d) / (l · I²) => [F] / [A²] = (kg·m·s⁻²) / A² = kg·m·s⁻²·A⁻².",
    "1. From Ampere's force law between parallel currents: Force per unit length F/l = μ₀ I₁ I₂ / (2π r).\n2. Rearrange for μ₀: μ₀ has units (Force / Length) × Length / Current² = Force / Current².\n3. Force in SI base units = kg·m·s⁻².\n4. Dividing by A²: kg·m·s⁻²·A⁻².\n5. Hence, μ₀ has the base units kg·m·s⁻²·A⁻².",
    "NEET High-Yield Shortcut: μ₀ has units N/A² = (kg·m·s⁻²) / A² = kg·m·s⁻²·A⁻²!",
    "Option B has m² (unit of inductance H). Option C has m⁻¹ (unit of pressure / A²). Option D has wrong powers of s and A."
))

qs.append(make_q(
    179,
    "A system of units adopts the velocity of light c = 3 × 10⁸ m/s, gravitational constant G = 6.67 × 10⁻¹¹ N·m²/kg², and Planck's constant h = 6.63 × 10⁻³⁴ J·s as the fundamental units. The unit of length in this system is proportional to:",
    {"A": "√(h G / c³)", "B": "√(h c / G)", "C": "√(G c / h³)", "D": "√(h G c³)"},
    "A", "Hard", "SI base quantities and base units",
    "Derivation of the Planck length from fundamental constants.",
    "Constants c, G, h as fundamental units. Find Length L.",
    "L = c^x G^y h^z. [L] = [L T⁻¹]^x [M⁻¹ L³ T⁻²]^y [M L² T⁻¹]^z.",
    "1. Equate mass powers: -y + z = 0  =>  y = z.\n2. Equate length powers: x + 3y + 2z = 1  =>  x + 5y = 1.\n3. Equate time powers: -x - 2y - z = 0  =>  x + 3y = 0  =>  x = -3y.\n4. Substitute into length equation: -3y + 5y = 1  =>  2y = 1  =>  y = 1/2.\n5. Therefore, z = 1/2, and x = -3(1/2) = -3/2.\n6. L ∝ c^(-3/2) G^(1/2) h^(1/2) = √(h G / c³).",
    "NEET Gold Formula: Planck length l_p = √(h G / c³) ≈ 1.6 × 10⁻³⁵ m. Essential formula in high-energy physics!",
    "Option B is Planck mass √(hc/G). Option C and D have incorrect powers of c and h."
))

qs.append(make_q(
    180,
    "In terms of base units, the Stefan-Boltzmann constant σ is given by W/(m²·K⁴). Its expression in SI base units is:",
    {"A": "kg·s⁻³·K⁻⁴", "B": "kg·m·s⁻³·K⁻⁴", "C": "kg·m²·s⁻³·K⁻⁴", "D": "kg·s⁻²·K⁻⁴"},
    "A", "Hard", "SI base quantities and base units",
    "Expressing Stefan-Boltzmann constant in SI base units.",
    "Stefan's Law: E = σ T⁴  =>  σ = E / T⁴, where E is radiant energy per unit area per second (W/m²).",
    "σ = (W / m²) / K⁴ = (J / (s · m²)) / K⁴ = (kg·m²·s⁻² / (s · m²)) / K⁴ = kg·s⁻³·K⁻⁴.",
    "1. Radiant emittance E has units W/m².\n2. 1 Watt = 1 Joule/second = (kg·m²·s⁻²) / s = kg·m²·s⁻³.\n3. E = (kg·m²·s⁻³) / m² = kg·s⁻³.\n4. Divide by T⁴ (K⁴): σ = kg·s⁻³·K⁻⁴.\n5. Notice that the meter unit completely cancels out!",
    "NEET Trap Alert: Notice that meter [L] has power ZERO in the Stefan-Boltzmann constant: [σ] = [M T⁻³ K⁻⁴]! There is no length in σ!",
    "Option B incorrectly retains m. Option C retains m². Option D has s⁻² instead of s⁻³."
))

print(f"Groups 1 & 2 generated: {len(qs)} questions.")

with open('scripts/part2_qs.json', 'w', encoding='utf-8') as f:
    json.dump(qs, f, indent=2)
