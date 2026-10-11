import sys, json
sys.path.append('scripts')
from make_q import make_q

qs = []

# ==============================================================================
# Group 1 (151-165): Physical quantities and units
# 4 Easy, 7 Medium, 4 Hard
# ==============================================================================
qs.append(make_q(
    151,
    "Which of the following physical quantities has a unit but no dimensions?",
    {
        "A": "Refractive index",
        "B": "Solid angle",
        "C": "Relative density",
        "D": "Strain"
    },
    "B",
    "Easy",
    "Physical quantities and units",
    "Quantities that possess units but are dimensionless.",
    "Four physical quantities: Refractive index, Solid angle, Relative density, Strain.",
    "Solid angle dΩ = dA / r² (measured in steradians, unit sr), but [sr] = [L²]/[L²] = [M⁰ L⁰ T⁰].",
    "1. Refractive index is the ratio of speeds of light: no unit and no dimensions.\n2. Relative density is the ratio of densities: no unit and no dimensions.\n3. Strain is the ratio of change in dimension to original dimension: no unit and no dimensions.\n4. Solid angle has the SI supplementary unit 'steradian' (sr), but its dimensional formula is [M⁰ L⁰ T⁰].",
    "NEET Memory Aid: The two supplementary SI units—radian (plane angle) and steradian (solid angle)—are the ONLY standard quantities that have units but zero dimensions!",
    "Options A, C, and D are dimensionless ratios that also have no units at all."
))

qs.append(make_q(
    152,
    "One parsec is defined as the distance at which:",
    {
        "A": "An arc of length 1 astronomical unit subtends an angle of 1 second of arc.",
        "B": "Light travels in vacuum in exactly one Julian year.",
        "C": "The mean distance between the Earth and the Sun is subtended by 1 radian.",
        "D": "An arc of length 1 light year subtends an angle of 1 minute of arc."
    },
    "A",
    "Easy",
    "Physical quantities and units",
    "Astronomical units of length and parsec definition.",
    "Definition of 1 parsec (pc).",
    "θ = arc / radius  =>  1 arcsec = (1 AU) / (1 pc)  =>  1 pc = (1 AU) / (1\").",
    "1. By definition, 1 parsec (parallactic second) is the distance from which the semi-major axis of Earth's orbit (1 AU) subtends an angle of 1 second of arc (1\").\n2. 1 pc = 1.496 × 10¹¹ m / (1 / 3600 × π / 180 rad) ≈ 3.08 × 10¹⁶ m ≈ 3.26 light years.",
    "NEET Fact: Parsec stands for 'Parallactic Second'. 1 pc ≈ 3.08 × 10¹⁶ m ≈ 3.26 ly > 1 ly > 1 AU.",
    "Option B defines 1 light year. Options C and D are fictitious definitions."
))

qs.append(make_q(
    153,
    "Which of the following is NOT a unit of energy?",
    {
        "A": "Electron volt (eV)",
        "B": "Kilowatt-hour (kWh)",
        "C": "Watt-second (W·s)",
        "D": "Pascal-second (Pa·s)"
    },
    "D",
    "Easy",
    "Physical quantities and units",
    "Units of energy vs coefficient of viscosity.",
    "Four candidate units: eV, kWh, W·s, Pa·s.",
    "Energy = Power × Time = Force × Distance. Viscosity η has unit Pa·s = N·s/m².",
    "1. 1 eV = 1.6 × 10⁻¹⁹ J (energy).\n2. 1 kWh = 3.6 × 10⁶ J (electrical energy).\n3. 1 W·s = 1 (J/s) · s = 1 J (energy).\n4. 1 Pa·s = 1 (N/m²)·s = unit of dynamic viscosity (poiseuille), not energy.",
    "NEET Shortcut: Whenever you see Pascal (pressure) multiplied by time (second), it represents viscosity, NOT energy! Energy is Pascal × Volume (Pa·m³).",
    "Options A, B, and C are all valid derived units of energy."
))

qs.append(make_q(
    154,
    "The SI unit of magnetic dipole moment is:",
    {
        "A": "A·m²",
        "B": "A/m",
        "C": "T·m²",
        "D": "N/(A·m)"
    },
    "A",
    "Easy",
    "Physical quantities and units",
    "Unit of magnetic dipole moment.",
    "Physical quantity: Magnetic dipole moment (M).",
    "M = I × A, where I is current in amperes and A is planar loop area in square meters.",
    "1. Current I has SI unit Ampere (A).\n2. Area A has SI unit meter squared (m²).\n3. Product M = I A has SI unit A·m² (also expressed as J/T).",
    "NEET Memory Aid: Magnetic dipole moment M = I A (A·m²) or M = m × 2l where pole strength m is in A·m.",
    "Option B (A/m) is magnetic field intensity H. Option C (T·m²) is magnetic flux. Option D is magnetic field B."
))

qs.append(make_q(
    155,
    "The value of 1 poise in SI units (Pa·s) is:",
    {
        "A": "10 Pa·s",
        "B": "1 Pa·s",
        "C": "0.1 Pa·s",
        "D": "0.01 Pa·s"
    },
    "C",
    "Medium",
    "Physical quantities and units",
    "Conversion between CGS and SI units of viscosity.",
    "1 poise (CGS unit of coefficient of viscosity).",
    "1 poise = 1 dyne·s/cm²; 1 Pa·s = 1 N·s/m².",
    "1. 1 dyne = 10⁻⁵ N, and 1 cm² = 10⁻⁴ m².\n2. 1 poise = (10⁻⁵ N) · s / (10⁻⁴ m²) = 10⁻¹ N·s/m² = 0.1 Pa·s.\n3. Conversely, 1 SI unit of viscosity (poiseuille or Pa·s) = 10 poise.",
    "NEET Warning: 1 SI unit (Decapoise or Pa·s) = 10 Poise. Therefore, 1 Poise = 0.1 SI unit. Do not confuse which is larger!",
    "Option A is the conversion in the opposite direction (1 Pa·s = 10 poise). Options B and D are numerically incorrect."
))

qs.append(make_q(
    156,
    "Which of the following pairs of units represents the same physical quantity?",
    {
        "A": "J/kg and m²/s²",
        "B": "N/m and N·m",
        "C": "W/m² and J/s",
        "D": "kg·m/s and kg·m²/s"
    },
    "A",
    "Medium",
    "Physical quantities and units",
    "Equivalence of derived and base unit combinations.",
    "Pairs of units.",
    "1 J = 1 N·m = 1 kg·m²·s⁻². Therefore, J/kg = (kg·m²·s⁻²) / kg = m²/s².",
    "1. Joule per kilogram is the unit of specific energy (or latent heat, gravitational potential).\n2. Express Joule in base units: J = kg·m²·s⁻².\n3. Dividing by kg gives: J/kg = m²·s⁻² = m²/s².\n4. Both J/kg and m²/s² represent the same physical quantity (specific energy or potential).",
    "NEET Tip: Gravitational potential V = -GM/r has dimensions [L² T⁻²] and SI unit J/kg or m²/s².",
    "Option B pairs surface tension (N/m) with torque/energy (N·m). Option C pairs intensity (W/m²) with power (J/s). Option D pairs linear momentum with angular momentum."
))

qs.append(make_q(
    157,
    "The unit 'barn' is used to measure:",
    {
        "A": "Astronomical distance",
        "B": "Nuclear scattering cross-section",
        "C": "Mass of subatomic particles",
        "D": "Extremely high pressure"
    },
    "B",
    "Medium",
    "Physical quantities and units",
    "Nuclear physics units of area.",
    "Unit: 1 barn.",
    "1 barn = 10⁻²⁸ m² = 10⁻²⁴ cm².",
    "1. In nuclear and particle physics, the probability of an interaction between particles is expressed as an effective cross-sectional area.\n2. A typical atomic nucleus has a radius of ~ 10⁻¹⁴ m, so its geometric area is ~ 10⁻²⁸ m².\n3. The unit 'barn' was coined during the Manhattan Project and is defined as exactly 10⁻²⁸ m².",
    "NEET Fact: 1 barn = 10⁻²⁸ m² (unit of area / nuclear cross-section).",
    "Options A, C, and D describe distance, mass, and pressure, none of which are measured in barns."
))

qs.append(make_q(
    158,
    "If the unit of force is 1 kN, length is 1 km, and time is 100 s, the unit of mass in this system is:",
    {
        "A": "10⁴ kg",
        "B": "10² kg",
        "C": "10³ kg",
        "D": "10⁵ kg"
    },
    "A",
    "Medium",
    "Physical quantities and units",
    "System of units conversion using dimensional equations.",
    "Force [F] = 10³ N, Length [L] = 10³ m, Time [T] = 100 s = 10² s.",
    "[F] = [M L T⁻²]  =>  [M] = [F] [L]⁻¹ [T]².",
    "1. Mass M = F · T² / L.\n2. Substitute the given units:\n   M = (10³ N) × (10² s)² / (10³ m)\n   M = (10³ × 10⁴) / 10³ kg = 10⁴ kg.\n3. Thus, the derived unit of mass in this system is 10⁴ kg (10,000 kg).",
    "NEET Shortcut: Always express the required fundamental quantity in terms of the given quantities: M = F · L⁻¹ · T². Then directly substitute magnitudes!",
    "Option B (10² kg) forgets squaring time. Option C (10³ kg) uses T instead of T². Option D (10⁵ kg) has an arithmetic power error."
))

qs.append(make_q(
    159,
    "Which of the following is a unitless and dimensionless quantity?",
    {
        "A": "Angle",
        "B": "Specific gravity",
        "C": "Specific heat capacity",
        "D": "Permeability of vacuum"
    },
    "B",
    "Medium",
    "Physical quantities and units",
    "Pure ratios vs dimensional physical quantities.",
    "Four quantities: Angle, Specific gravity, Specific heat capacity, Permeability.",
    "Specific gravity = (Density of substance) / (Density of water at 4°C).",
    "1. Specific gravity is a pure ratio of two identical physical quantities (densities).\n2. Therefore, it has no units and its dimensions are [M⁰ L⁰ T⁰].\n3. Angle has units (radian/degree) though it is dimensionless.\n4. Specific heat capacity has unit J/(kg·K) and dimensions [L² T⁻² K⁻¹].\n5. Permeability has unit T·m/A and dimensions [M L T⁻² A⁻²].",
    "NEET Memory Aid: Specific gravity, refractive index, mechanical advantage, dielectric constant, strain, and Poisson's ratio are completely unitless AND dimensionless.",
    "Option A has unit radian. Option C has unit J/(kg·K). Option D has unit H/m."
))

qs.append(make_q(
    160,
    "The ratio of the SI unit of power to the CGS unit of power is:",
    {
        "A": "10⁵",
        "B": "10⁷",
        "C": "10⁶",
        "D": "10⁸"
    },
    "B",
    "Medium",
    "Physical quantities and units",
    "Conversion between SI and CGS power units.",
    "SI unit of power = Watt (W) = J/s. CGS unit of power = erg/s.",
    "Power P = Work / Time; 1 J = 10⁷ erg.",
    "1. SI unit of power is 1 Watt = 1 Joule / 1 second.\n2. CGS unit of power is 1 erg / 1 second.\n3. Since 1 Joule = 10⁷ erg, 1 W = 10⁷ erg/s.\n4. The ratio (SI unit) / (CGS unit) = (10⁷ erg/s) / (1 erg/s) = 10⁷.",
    "NEET Connection: 1 N = 10⁵ dyne; 1 J = 10⁷ erg; 1 W = 10⁷ erg/s.",
    "Option A (10⁵) is the ratio for force (N to dyne). Options C and D are wrong powers of 10."
))

qs.append(make_q(
    161,
    "The unit of electric permittivity ε₀ can be expressed as:",
    {
        "A": "C²·N⁻¹·m⁻²",
        "B": "F·m⁻¹",
        "C": "A²·s⁴·kg⁻¹·m⁻³",
        "D": "All of the above"
    },
    "D",
    "Medium",
    "Physical quantities and units",
    "Equivalent forms of permittivity units in SI.",
    "Permittivity of free space ε₀.",
    "Coulomb's law F = q₁q₂ / (4πε₀r²); Capacitance C = ε₀A / d.",
    "1. From Coulomb's law: ε₀ = q² / (F r²) => unit is C²/(N·m²) = C²·N⁻¹·m⁻².\n2. From parallel plate capacitor: C = ε₀A/d => ε₀ = C d / A => unit is Farad·meter / meter² = F·m⁻¹.\n3. Express in base SI units: C = A·s, N = kg·m·s⁻² => ε₀ = (A·s)² / (kg·m·s⁻² · m²) = A²·s⁴·kg⁻¹·m⁻³.\n4. All three representations are strictly identical.",
    "NEET Exam Pro-Tip: Whenever you see 'All of the above' on equivalent units of ε₀ or μ₀, systematically verify the capacitance/inductance form (F/m for ε₀, H/m for μ₀)!",
    "Options A, B, and C are each correct individual representations, making D the complete correct answer."
))

qs.append(make_q(
    162,
    "In a new system of units, the unit of mass is α kg, the unit of length is β m, and the unit of time is γ s. The numerical value of 1 Joule of energy in this new system is:",
    {
        "A": "α⁻¹ β⁻² γ²",
        "B": "α β² γ⁻²",
        "C": "α⁻¹ β² γ⁻²",
        "D": "α β⁻² γ²"
    },
    "A",
    "Hard",
    "Physical quantities and units",
    "Conversion of numerical value across arbitrary unit systems: n₁u₁ = n₂u₂.",
    "Quantity Q = 1 J (Energy). Old system: M₁ = 1 kg, L₁ = 1 m, T₁ = 1 s, n₁ = 1. New system: M₂ = α kg, L₂ = β m, T₂ = γ s.",
    "[Energy] = [M L² T⁻²]. n₂ = n₁ [M₁/M₂]¹ [L₁/L₂]² [T₁/T₂]⁻².",
    "1. Dimensions of energy: a = 1, b = 2, c = -2.\n2. n₂ = 1 × (1 / α)¹ × (1 / β)² × (1 / γ)⁻²\n3. n₂ = α⁻¹ · β⁻² · (γ⁻¹)⁻² = α⁻¹ β⁻² γ².\n4. Therefore, the magnitude in the new system is α⁻¹ β⁻² γ².",
    "NEET Shortcut: Remember n₂ = n₁ (M₁/M₂)^a (L₁/L₂)^b (T₁/T₂)^c. Take inverse powers carefully when new units are in the denominator!",
    "Option B inverts the sign of powers. Option C has wrong sign on β and γ. Option D has wrong sign on α."
))

qs.append(make_q(
    163,
    "A student measures a physical quantity X and discovers that [X] = [h c⁵ / G]^(1/2), where h is Planck's constant, c is speed of light, and G is gravitational constant. The SI unit of X is:",
    {
        "A": "Joule",
        "B": "Kilogram",
        "C": "Meter",
        "D": "Second"
    },
    "A",
    "Hard",
    "Physical quantities and units",
    "Planck energy derived from fundamental constants.",
    "X = √(h c⁵ / G). [h] = [M L² T⁻¹], [c] = [L T⁻¹], [G] = [M⁻¹ L³ T⁻²].",
    "[X] = [ (M L² T⁻¹) (L⁵ T⁻⁵) / (M⁻¹ L³ T⁻²) ]^(1/2).",
    "1. Numerator: [h c⁵] = [M L² T⁻¹][L⁵ T⁻⁵] = [M L⁷ T⁻⁶].\n2. Divide by [G]: [M L⁷ T⁻⁶] / [M⁻¹ L³ T⁻²] = [M² L⁴ T⁻⁴].\n3. Take square root: [M² L⁴ T⁻⁴]^(1/2) = [M L² T⁻²].\n4. [M L² T⁻²] is the dimensional formula of Energy (Planck Energy Ep).\n5. The SI unit of energy is the Joule.",
    "NEET Key Formula: Planck mass = √(hc/G) [kg]; Planck length = √(hG/c³) [m]; Planck time = √(hG/c⁵) [s]; Planck energy = √(hc⁵/G) [J].",
    "Option B is Planck mass. Option C is Planck length. Option D is Planck time."
))

qs.append(make_q(
    164,
    "The solar constant is defined as the radiant solar energy received per unit area per unit time at the outer boundary of Earth's atmosphere. Its SI unit is:",
    {
        "A": "W/m²",
        "B": "J/m²",
        "C": "W/(m²·K⁴)",
        "D": "J/(s·m³)"
    },
    "A",
    "Hard",
    "Physical quantities and units",
    "Solar constant definition and unit derivation.",
    "Solar constant S = Energy / (Area × Time).",
    "S = E / (A · t) = Power / Area = W / m².",
    "1. Energy E is in Joules (J), Area A is in m², and time t is in seconds (s).\n2. S = J / (m² · s).\n3. Since J/s = Watt (W), S is expressed as W/m² (or kg·s⁻³ in base units).\n4. Its standard value is approximately 1.36 kW/m² or 1360 W/m².",
    "NEET Connection: Solar constant has the same units and dimensions as Intensity of any radiation: [I] = [P/A] = [M T⁻³] = W/m².",
    "Option B (J/m²) forgets time. Option C is the unit of Stefan-Boltzmann constant σ. Option D has m³ instead of m²."
))

qs.append(make_q(
    165,
    "Which of the following combinations of physical constants does NOT have the unit of time?",
    {
        "A": "R · C",
        "B": "L / R",
        "C": "√(L · C)",
        "D": "C / L"
    },
    "D",
    "Hard",
    "Physical quantities and units",
    "Electrical time constants in RC, RL, and LC circuits.",
    "Combinations of R (Resistance), L (Inductance), and C (Capacitance).",
    "RC = time constant τ; L/R = inductive time constant; ω = 1/√(LC) => √(LC) = 1/ω = time T.",
    "1. RC has units of seconds [T] (capacitive discharge time constant).\n2. L/R has units of seconds [T] (inductive growth time constant).\n3. √(LC) has units of seconds [T] (since resonance angular frequency ω₀ = 1/√(LC) has unit s⁻¹).\n4. C/L has dimensions [T]/[Ω] / ([Ω][T]) = 1/Ω² = [M⁻² L⁻⁴ T⁶ A⁴], which is NOT time.",
    "NEET High-Yield Trap: (R C), (L / R), and √(L C) are the classic 'Holy Trinity' of electrical time constants [T]. Their inverses have dimensions of frequency [T⁻¹]!",
    "Options A, B, and C are all valid expressions for time."
))

print(f"Group 1 generated: {len(qs)} questions.")

with open('scripts/part2_qs.json', 'w', encoding='utf-8') as f:
    json.dump(qs, f, indent=2)
