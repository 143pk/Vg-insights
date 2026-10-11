import sys, json
sys.path.append('scripts')
from make_q import make_q

with open('scripts/part2_qs.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

print(f"Loaded {len(qs)} questions. Adding Groups 3 to 8...")

# ==============================================================================
# Group 3 (181-195): Derived quantities and derived units
# 4 Easy, 8 Medium, 3 Hard
# ==============================================================================
qs.append(make_q(
    181,
    "The SI derived unit of magnetic flux is the Weber (Wb). In terms of Volts and seconds, 1 Wb equals:",
    {"A": "1 V/s", "B": "1 V·s", "C": "1 V·s²", "D": "1 V/s²"},
    "B", "Easy", "Derived quantities and derived units",
    "Relation between magnetic flux and induced electromotive force.",
    "Quantity: Magnetic flux Φ.",
    "Faraday's law of electromagnetic induction: e = -dΦ/dt  =>  [Φ] = [e] × [t] = Volt × second.",
    "1. From Faraday's law, induced electromotive force e = -dΦ/dt.\n2. Rearranging gives dΦ = e dt.\n3. Therefore, 1 Weber (Wb) = 1 Volt · second (V·s).\n4. In base units, 1 Wb = 1 kg·m²·s⁻²·A⁻¹.",
    "NEET Memory Aid: 1 Wb = 1 V·s = 1 T·m².",
    "Option A is rate of change of voltage. Options C and D have wrong powers of time."
))

qs.append(make_q(
    182,
    "The derived unit of electrical capacitance, the Farad (F), can be expressed as:",
    {"A": "Coulomb per Volt (C/V)", "B": "Volt per Coulomb (V/C)", "C": "Coulomb-Volt (C·V)", "D": "Joule per Volt (J/V)"},
    "A", "Easy", "Derived quantities and derived units",
    "Definition and unit of electrical capacitance.",
    "Capacitance C of a conductor.",
    "Q = C · V  =>  C = Q / V.",
    "1. Capacitance is defined as the ratio of stored electric charge Q to potential difference V.\n2. Charge Q is measured in Coulombs (C).\n3. Potential difference V is measured in Volts (V).\n4. Hence, 1 Farad = 1 Coulomb / Volt (C/V).",
    "NEET High-Yield Tip: 1 Farad = 1 C/V = 1 A·s/V = 1 s/Ω.",
    "Option B is inverse capacitance (elastance, daraf). Option C is energy stored (or 2× energy). Option D is Coulomb."
))

qs.append(make_q(
    183,
    "Which of the following is the SI derived unit for electric conductance?",
    {"A": "Ohm (Ω)", "B": "Siemens (S)", "C": "Henry (H)", "D": "Weber (Wb)"},
    "B", "Easy", "Derived quantities and derived units",
    "Unit of electrical conductance.",
    "Conductance G = 1 / R.",
    "G = 1 / R  =>  unit is Ω⁻¹ (mho or Siemens, S).",
    "1. Electric conductance G is the reciprocal of electric resistance R.\n2. SI unit is reciprocal ohm (Ω⁻¹), named Siemens (symbol S, historically mho ℧).\n3. 1 S = 1 A / V.",
    "NEET Fact: Conductance has unit Siemens (S = Ω⁻¹). Conductivity has unit S/m (Ω⁻¹·m⁻¹).",
    "Option A is resistance. Option C is inductance. Option D is magnetic flux."
))

qs.append(make_q(
    184,
    "The unit of surface tension in SI is N/m. This can also be equivalently written as:",
    {"A": "J/m", "B": "J/m²", "C": "J·m", "D": "N/m²"},
    "B", "Easy", "Derived quantities and derived units",
    "Equivalence between surface tension and surface energy per unit area.",
    "Surface tension T (N/m).",
    "Surface energy U = T × ΔA  =>  T = U / ΔA  =>  J / m².",
    "1. Surface tension is force per unit length: T = F / l (N/m).\n2. Multiply numerator and denominator by meter: (N · m) / (m · m) = J / m².\n3. Physically, this represents the surface energy required to increase the surface area of a liquid film by 1 m².\n4. Both N/m and J/m² have identical dimensions [M T⁻²].",
    "NEET NCERT Line: Surface tension (N/m) and Surface energy per unit area (J/m²) are completely identical physical concepts and units.",
    "Option A is force. Option C is Joule-meter. Option D is pressure (Pascal)."
))

qs.append(make_q(
    185,
    "The SI unit of thermal conductivity K in heat transfer is:",
    {"A": "W/(m·K)", "B": "W/(m²·K)", "C": "J/(m·K)", "D": "W·m/K"},
    "A", "Medium", "Derived quantities and derived units",
    "Fourier's law of heat conduction and unit of thermal conductivity.",
    "Heat current Q/t through a slab of area A, thickness d, under temperature difference ΔT.",
    "dQ/dt = K A (ΔT / d)  =>  K = (dQ/dt · d) / (A · ΔT).",
    "1. Heat current dQ/dt has unit Watt (W = J/s).\n2. Thickness d has unit meter (m).\n3. Area A has unit m².\n4. Temperature difference ΔT has unit Kelvin (K).\n5. K = (W · m) / (m² · K) = W / (m · K) or J / (s · m · K).",
    "NEET Trap Warning: Do not confuse thermal conductivity K [W/(m·K)] with heat transfer coefficient h [W/(m²·K)]!",
    "Option B is heat transfer coefficient. Option C forgets time (s). Option D multiplies by m instead of dividing."
))

qs.append(make_q(
    186,
    "The SI derived unit of self-inductance L is the Henry (H). In terms of magnetic flux Φ and electric current I, 1 Henry is:",
    {"A": "1 Wb·A", "B": "1 Wb / A", "C": "1 A / Wb", "D": "1 Wb / A²"},
    "B", "Medium", "Derived quantities and derived units",
    "Definition and unit of self-inductance.",
    "Self-inductance L.",
    "Φ = L · I  =>  L = Φ / I.",
    "1. Total magnetic flux linkage Φ is proportional to current I: Φ = L I.\n2. Therefore, L = Φ / I.\n3. The unit of Φ is Weber (Wb) and current is Ampere (A).\n4. Hence, 1 Henry = 1 Weber / Ampere = 1 Wb/A (also 1 V·s/A or 1 Ω·s).",
    "NEET Connection: Inductance L = Φ/I = Wb/A = V·s/A = Ω·s.",
    "Option A is product of flux and current. Option C is inverse inductance. Option D is incorrect."
))

qs.append(make_q(
    187,
    "A student derives that the unit of a quantity X is Tesla · meter / Ampere (T·m/A). The quantity X is:",
    {"A": "Permittivity of free space ε₀", "B": "Permeability of free space μ₀", "C": "Electric resistance R", "D": "Magnetic susceptibility χ"},
    "B", "Medium", "Derived quantities and derived units",
    "Identification of physical constants from their derived units.",
    "Unit: T·m/A.",
    "B = μ₀ I / (2π r)  =>  μ₀ = 2π r B / I  =>  m · T / A = T·m/A.",
    "1. From Biot-Savart law or Ampere's law, magnetic field around a long wire is B = μ₀ I / (2π r).\n2. Rearrange for μ₀: μ₀ = 2π r B / I.\n3. The units are: (meter × Tesla) / Ampere = T·m/A.\n4. This can also be written as N/A² or H/m.\n5. Therefore, quantity X is the permeability of free space μ₀.",
    "NEET Memory Rule: μ₀ has units: T·m/A = N/A² = H/m. All three are identical!",
    "Option A is ε₀ (F/m). Option C is resistance (Ω). Option D is susceptibility (dimensionless)."
))

qs.append(make_q(
    188,
    "The unit of electric field intensity E can be expressed in two standard ways: N/C and:",
    {"A": "V·m", "B": "V/m", "C": "V/m²", "D": "J/C"},
    "B", "Medium", "Derived quantities and derived units",
    "Equivalence between force-based and potential-gradient-based units of electric field.",
    "Electric field E.",
    "E = F / q (N/C) and E = -dV/dr (V/m).",
    "1. From definition: E = Force / Charge = Newton / Coulomb (N/C).\n2. From relation with electric potential: E = -dV/dr = Volt / meter (V/m).\n3. Prove equivalence: 1 V = 1 J/C = 1 (N·m)/C  =>  1 V/m = 1 N/C.\n4. Both representations are standard in NEET physics.",
    "NEET Shortcut: E is always in V/m or N/C. Potential is V or J/C.",
    "Option A (V·m) is electric flux. Option C has m². Option D is electric potential."
))

qs.append(make_q(
    189,
    "The unit of pressure is Pascal (Pa). Which of the following is NOT equivalent to 1 Pa?",
    {"A": "1 N/m²", "B": "1 J/m³", "C": "1 kg·m⁻¹·s⁻²", "D": "1 N·m/s"},
    "D", "Medium", "Derived quantities and derived units",
    "Equivalent forms of pressure and energy density units.",
    "Pressure P = 1 Pa.",
    "P = F / A = N/m² = (N·m)/m³ = J/m³ (energy density) = (kg·m·s⁻²)/m² = kg·m⁻¹·s⁻².",
    "1. 1 Pa = 1 N/m² (force per unit area).\n2. Multiply numerator and denominator by m: (N·m)/m³ = J/m³ (energy density has units of pressure!).\n3. In SI base units: kg·m·s⁻² / m² = kg·m⁻¹·s⁻².\n4. Option D is N·m/s = J/s = Watt (power), which is NOT pressure.",
    "NEET Concept: Pressure and Energy Density have IDENTICAL units (Pa = J/m³) and dimensions [M L⁻¹ T⁻²]!",
    "Options A, B, and C are all perfectly equivalent to 1 Pascal."
))

qs.append(make_q(
    190,
    "The Becquerel (Bq) is the SI derived unit of radioactivity. 1 Bq corresponds to:",
    {"A": "1 disintegration per second", "B": "3.7 × 10¹⁰ disintegrations per second", "C": "10⁶ disintegrations per second", "D": "1 disintegration per minute"},
    "A", "Medium", "Derived quantities and derived units",
    "Units of radioactive decay activity.",
    "1 Becquerel (Bq).",
    "Activity A = -dN/dt; 1 Bq = 1 decay per second = 1 s⁻¹.",
    "1. The SI unit of radioactivity is the Becquerel (Bq), defined as exactly 1 radioactive decay (disintegration) per second (dps).\n2. The historical unit Curie (Ci) is equal to 3.7 × 10¹⁰ Bq.\n3. The Rutherford (Rd) is equal to 10⁶ Bq.",
    "NEET Nuclear Physics Facts: 1 Bq = 1 dps; 1 Rutherford = 10⁶ dps; 1 Curie = 3.7 × 10¹⁰ dps.",
    "Option B defines 1 Curie (Ci). Option C defines 1 Rutherford (Rd). Option D is dpm."
))

qs.append(make_q(
    191,
    "The unit of specific heat capacity s in the SI system is:",
    {"A": "J/(kg·K)", "B": "J/K", "C": "cal/(g·°C)", "D": "J·kg/K"},
    "A", "Medium", "Derived quantities and derived units",
    "Formula and unit of specific heat capacity.",
    "Specific heat capacity s.",
    "Q = m s ΔT  =>  s = Q / (m ΔT).",
    "1. Heat energy Q has SI unit Joule (J).\n2. Mass m has SI unit kilogram (kg).\n3. Temperature change ΔT has SI unit Kelvin (K).\n4. s = J / (kg · K).\n5. J/K is thermal capacity (without mass in denominator).",
    "NEET Trap: Heat capacity C = J/K. Specific heat capacity s = J/(kg·K). Molar heat capacity C_m = J/(mol·K).",
    "Option B is heat capacity (thermal capacity). Option C is CGS unit. Option D is incorrect."
))

qs.append(make_q(
    192,
    "The ratio of the magnetic field B to the magnetic field intensity H in a vacuum has the unit of:",
    {"A": "Permeability of free space (H/m)", "B": "Permittivity of free space (F/m)", "C": "Magnetic dipole moment (A·m²)", "D": "Dimensionless"},
    "A", "Medium", "Derived quantities and derived units",
    "Relationship between magnetic flux density B and magnetic field intensity H.",
    "Ratio B / H in vacuum.",
    "B = μ₀ H  =>  B / H = μ₀.",
    "1. In vacuum, magnetic induction B and magnetic intensity H are related by B = μ₀ H.\n2. Therefore, B / H = μ₀ (permeability of free space).\n3. The unit of μ₀ is Henry/meter (H/m) or T·m/A or N/A².",
    "NEET Magnetism Formula: B = μ₀(H + M). In vacuum M = 0, so B = μ₀ H  =>  B/H = μ₀.",
    "Option B is ε₀. Option C is magnetic moment. Option D is relative permeability μ_r (which is B/(μ₀H))."
))

qs.append(make_q(
    193,
    "A physical quantity has the derived unit Weber · Ampere / second. This quantity is:",
    {"A": "Energy", "B": "Power", "C": "Force", "D": "Inductance"},
    "B", "Hard", "Derived quantities and derived units",
    "Decomposition of electromagnetic units into mechanical power.",
    "Unit: Wb · A / s.",
    "1 Wb = 1 V·s  =>  (Wb · A) / s = (V · s · A) / s = V · A = Watt (Power).",
    "1. Express Weber in terms of Volts: 1 Wb = 1 V·s (from Faraday's law e = dΦ/dt).\n2. Substitute into the expression:\n   (Wb · A) / s = (V · s · A) / s = V · A.\n3. Electric power P = V · I, and Volt × Ampere = Watt (W) = Joule/second.\n4. Therefore, the quantity represents Power.",
    "NEET Shortcut: Wb/s is induced EMF in Volts! Volts × Amperes is electric power in Watts! Thus (Wb/s) × A = Power!",
    "Option A is energy (Wb·A). Option C is force. Option D is inductance (Wb/A)."
))

qs.append(make_q(
    194,
    "The characteristic impedance of free space Z₀ = √(μ₀ / ε₀) has the derived SI unit of:",
    {"A": "Ohm (Ω)", "B": "Farad (F)", "C": "Henry (H)", "D": "Siemens (S)"},
    "A", "Hard", "Derived quantities and derived units",
    "Wave impedance of electromagnetic waves in vacuum.",
    "Z₀ = √(μ₀ / ε₀).",
    "[μ₀] = [M L T⁻² A⁻²], [ε₀] = [M⁻¹ L⁻³ T⁴ A²]. [μ₀ / ε₀] = [M² L⁴ T⁻⁶ A⁻⁴].",
    "1. Take square root of dimensions: √([M² L⁴ T⁻⁶ A⁻⁴]) = [M L² T⁻³ A⁻²].\n2. This is the exact dimensional formula of electrical resistance (Ohm, Ω).\n3. Numerically, Z₀ = √(4π × 10⁻⁷ / (8.854 × 10⁻¹²)) ≈ 376.73 Ω ≈ 120π Ω.\n4. Therefore, its unit is the Ohm (Ω).",
    "NEET Constant to Remember: The wave impedance of vacuum Z₀ = √(μ₀/ε₀) ≈ 377 Ω (approx 120π Ω).",
    "Options B, C, and D are capacitance, inductance, and conductance, not impedance."
))

qs.append(make_q(
    195,
    "The derived unit Joule · second (J·s) is the SI unit for:",
    {"A": "Angular momentum and Planck's constant", "B": "Linear momentum and force", "C": "Power and torque", "D": "Work and kinetic energy"},
    "A", "Hard", "Derived quantities and derived units",
    "Action and angular momentum units in quantum and classical physics.",
    "Unit: J·s (Joule-second).",
    "E = h ν  =>  h = E / ν  =>  J / (1/s) = J·s. Angular momentum L = r × p  =>  m · (kg·m/s) = kg·m²/s = J·s.",
    "1. Energy E has unit Joule (J = kg·m²·s⁻²).\n2. Multiply by second: J·s = kg·m²·s⁻¹.\n3. Angular momentum L = m v r has unit kg · (m/s) · m = kg·m²·s⁻¹ = J·s.\n4. Planck's constant h has E = h ν => h = J / s⁻¹ = J·s.\n5. Both angular momentum and Planck's constant share the unit J·s and dimensions [M L² T⁻¹].",
    "NEET Bohr Model Link: Bohr's quantization condition states L = n (h / 2π). Since n/(2π) is dimensionless, L and h have identical units J·s!",
    "Option B has unit N·s. Option C has W and N·m. Option D has J."
))

print(f"Groups 1 to 3 generated: {len(qs)} questions.")

with open('scripts/part2_qs.json', 'w', encoding='utf-8') as f:
    json.dump(qs, f, indent=2)
