import sys, json
sys.path.append('scripts')
from make_q import make_q

with open('scripts/part2_qs.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

print(f"Loaded {len(qs)} questions. Adding Groups 4 & 5...")

# ==============================================================================
# Group 4 (196-210): Dimensions and dimensional formulae
# 3 Easy, 8 Medium, 4 Hard
# ==============================================================================
qs.append(make_q(
    196,
    "The dimensional formula of linear momentum is identical to that of:",
    {"A": "Force", "B": "Torque", "C": "Impulse", "D": "Pressure"},
    "C", "Easy", "Dimensions and dimensional formulae",
    "Impulse-momentum theorem and dimensional equality.",
    "Linear momentum p = m v.",
    "[p] = [m][v] = [M][L T⁻¹] = [M L T⁻¹]. Impulse J = F · Δt  =>  [J] = [M L T⁻²][T] = [M L T⁻¹].",
    "1. Linear momentum p = mass × velocity = [M][L T⁻¹] = [M L T⁻¹].\n2. Impulse J = Force × time = [M L T⁻²][T] = [M L T⁻¹].\n3. According to Newton's second law, Impulse equals the change in momentum (J = Δp).\n4. Therefore, both have the identical dimensional formula [M L T⁻¹].",
    "NEET High-Yield Pair: Impulse and Momentum always have the same dimensions: [M L T⁻¹].",
    "Option A is [M L T⁻²]. Option B is [M L² T⁻²]. Option D is [M L⁻¹ T⁻²]."
))

qs.append(make_q(
    197,
    "Which of the following physical quantities has the dimensional formula [M L² T⁻²]?",
    {"A": "Power", "B": "Torque", "C": "Force", "D": "Pressure"},
    "B", "Easy", "Dimensions and dimensional formulae",
    "Dimensions of torque and energy.",
    "Dimensional formula [M L² T⁻²].",
    "Torque τ = r × F  =>  [τ] = [L][M L T⁻²] = [M L² T⁻²].",
    "1. Torque is the rotational analogue of force, defined as τ = r × F.\n2. Dimensional formula: [r][F] = [L] × [M L T⁻²] = [M L² T⁻²].\n3. Note that Work and Energy also possess the formula [M L² T⁻²], although torque is a vector (cross product) while work is a scalar (dot product).",
    "NEET Concept: Torque, Work, Energy, and Heat all have dimensions [M L² T⁻²].",
    "Option A (Power) is [M L² T⁻³]. Option C (Force) is [M L T⁻²]. Option D (Pressure) is [M L⁻¹ T⁻²]."
))

qs.append(make_q(
    198,
    "The dimensional formula of frequency is:",
    {"A": "[T⁻¹]", "B": "[T]", "C": "[M⁰ L T⁻¹]", "D": "[T⁻²]"},
    "A", "Easy", "Dimensions and dimensional formulae",
    "Dimensional formula of frequency and period.",
    "Frequency ν = 1 / T.",
    "ν = 1 / Time  =>  [ν] = [T]⁻¹ = [M⁰ L⁰ T⁻¹].",
    "1. Frequency is the number of cycles per second: ν = 1 / T.\n2. In dimensions: [ν] = [T⁻¹] = [M⁰ L⁰ T⁻¹].\n3. Angular velocity (ω), angular frequency (ω), decay constant (λ), and velocity gradient (dv/dx) also have the same dimension [T⁻¹].",
    "NEET Frequency Family: Frequency, Angular velocity, Angular frequency, Decay constant, and Velocity gradient ALL have dimensions [T⁻¹]!",
    "Option B is time period. Option C is velocity. Option D is angular acceleration."
))

qs.append(make_q(
    199,
    "The dimensional formula of the coefficient of viscosity η is:",
    {"A": "[M L⁻¹ T⁻¹]", "B": "[M L⁻² T⁻¹]", "C": "[M L T⁻¹]", "D": "[M L⁻¹ T⁻²]"},
    "A", "Medium", "Dimensions and dimensional formulae",
    "Newton's law of viscous force and dimensions of viscosity.",
    "Viscous force F = -η A (dv / dx).",
    "η = F / (A · (dv/dx))  =>  [η] = [M L T⁻²] / ([L²] · [L T⁻¹ / L]) = [M L T⁻²] / ([L²][T⁻¹]) = [M L⁻¹ T⁻¹].",
    "1. From Newton's law of viscosity: F = η A (dv/dx).\n2. Rearrange for η: η = F / (A · dv/dx).\n3. Substitute dimensions: [F] = [M L T⁻²], [A] = [L²], [dv/dx] = [T⁻¹].\n4. Compute: [η] = [M L T⁻²] / [L² T⁻¹] = [M L⁻¹ T⁻¹].",
    "NEET Top-Repeat Question: Viscosity η has dimensions [M L⁻¹ T⁻¹]. In SI units, 1 Pa·s = 1 kg/(m·s).",
    "Option B has L⁻². Option C is momentum. Option D is pressure or modulus of elasticity."
))

qs.append(make_q(
    200,
    "The dimensional formula of Planck's constant h is:",
    {"A": "[M L² T⁻¹]", "B": "[M L² T⁻²]", "C": "[M L T⁻¹]", "D": "[M L² T⁻³]"},
    "A", "Medium", "Dimensions and dimensional formulae",
    "Planck's quantum relation E = h ν.",
    "Planck's constant h.",
    "E = h ν  =>  h = E / ν  =>  [h] = [M L² T⁻²] / [T⁻¹] = [M L² T⁻¹].",
    "1. Energy of a photon is E = h ν, where ν is frequency.\n2. Dimensional formula of energy: [E] = [M L² T⁻²].\n3. Dimensional formula of frequency: [ν] = [T⁻¹].\n4. [h] = [E] / [ν] = [M L² T⁻²] / [T⁻¹] = [M L² T⁻¹].\n5. This is identical to the dimensional formula of angular momentum L = mvr.",
    "NEET Match: [Planck's constant h] = [Angular momentum L] = [M L² T⁻¹].",
    "Option B is energy. Option C is linear momentum. Option D is power."
))

qs.append(make_q(
    201,
    "The dimensional formula of the universal gas constant R in the ideal gas equation PV = nRT is:",
    {"A": "[M L² T⁻² K⁻¹ mol⁻¹]", "B": "[M L² T⁻¹ K⁻¹ mol⁻¹]", "C": "[M L⁻¹ T⁻² K⁻¹ mol⁻¹]", "D": "[M L² T⁻² K mol⁻¹]"},
    "A", "Medium", "Dimensions and dimensional formulae",
    "Ideal gas law PV = nRT and dimensions of gas constant.",
    "Equation PV = nRT.",
    "R = (P V) / (n T). [P V] = Energy = [M L² T⁻²]. [n] = [mol], [T] = [K].",
    "1. Pressure P = [M L⁻¹ T⁻²], Volume V = [L³].\n2. The product [P V] = [M L⁻¹ T⁻²][L³] = [M L² T⁻²] (Work / Energy).\n3. Number of moles has dimension [mol], Temperature has dimension [K].\n4. [R] = [M L² T⁻²] / ([mol][K]) = [M L² T⁻² K⁻¹ mol⁻¹].",
    "NEET Pro-Tip: PV is work done (Joule). So R = Joules / (mole · Kelvin) = [M L² T⁻² K⁻¹ mol⁻¹].",
    "Option B has T⁻¹. Option C has L⁻¹. Option D has positive K."
))

qs.append(make_q(
    202,
    "The dimensional formula of magnetic flux Φ is:",
    {"A": "[M L² T⁻² A⁻¹]", "B": "[M L T⁻² A⁻¹]", "C": "[M L² T⁻¹ A⁻¹]", "D": "[M L⁰ T⁻² A⁻¹]"},
    "A", "Medium", "Dimensions and dimensional formulae",
    "Magnetic flux definition Φ = B · A.",
    "Magnetic flux Φ.",
    "F = q v B  =>  [B] = [F] / ([q][v]) = [M L T⁻²] / ([A T][L T⁻¹]) = [M T⁻² A⁻¹]. [Φ] = [B][A] = [M T⁻² A⁻¹][L²] = [M L² T⁻² A⁻¹].",
    "1. From magnetic force F = q v B: [B] = [M T⁻² A⁻¹].\n2. Magnetic flux Φ = B · A: [Φ] = [B] × [Area] = [M T⁻² A⁻¹] × [L²] = [M L² T⁻² A⁻¹].\n3. Alternatively, e = dΦ/dt  =>  [Φ] = [e][t] = [Volt][s] = ([M L² T⁻³ A⁻¹])[T] = [M L² T⁻² A⁻¹].",
    "NEET Memory Aid: Φ = Energy / Current = [M L² T⁻²] / [A] = [M L² T⁻² A⁻¹] (Weber).",
    "Option B is [B] × L. Option C has T⁻¹. Option D is magnetic field B."
))

qs.append(make_q(
    203,
    "The dimensional formula of self-inductance L is:",
    {"A": "[M L² T⁻² A⁻²]", "B": "[M L² T⁻³ A⁻²]", "C": "[M L T⁻² A⁻²]", "D": "[M L² T⁻² A⁻¹]"},
    "A", "Medium", "Dimensions and dimensional formulae",
    "Energy stored in an inductor U = (1/2) L I².",
    "Self-inductance L.",
    "U = (1/2) L I²  =>  L = 2 U / I²  =>  [L] = [Energy] / [I]² = [M L² T⁻²] / [A²] = [M L² T⁻² A⁻²].",
    "1. Stored magnetic energy in an inductor is U = (1/2) L I².\n2. Rearrange for L: [L] = [U] / [I²].\n3. Energy has dimensions [M L² T⁻²].\n4. Current squared has dimensions [A²].\n5. Therefore, [L] = [M L² T⁻² A⁻²].",
    "NEET High-Yield Shortcut: L = Energy / Current² = [M L² T⁻² A⁻²]. Resistance R = Power / Current² = [M L² T⁻³ A⁻²]. Compare powers of T!",
    "Option B is Resistance R (has T⁻³). Option C has L¹. Option D is magnetic flux Φ."
))

qs.append(make_q(
    204,
    "The dimensional formula of capacitance C is:",
    {"A": "[M⁻¹ L⁻² T⁴ A²]", "B": "[M L² T⁻³ A⁻²]", "C": "[M⁻¹ L⁻² T³ A²]", "D": "[M L⁻² T⁴ A²]"},
    "A", "Medium", "Dimensions and dimensional formulae",
    "Capacitor energy U = (1/2) Q² / C.",
    "Capacitance C.",
    "U = Q² / (2 C)  =>  C = Q² / (2 U). [Q] = [A T], [U] = [M L² T⁻²].",
    "1. Electric charge Q has dimensions [A T], so [Q²] = [A² T²].\n2. Energy U has dimensions [M L² T⁻²].\n3. [C] = [A² T²] / [M L² T⁻²] = [M⁻¹ L⁻² T⁴ A²].\n4. Note the negative powers on M and L, and positive power 4 on T.",
    "NEET Shortcut: Remember Capacitance starts with [M⁻¹ L⁻²], and has T⁴ A²!",
    "Option B is Resistance R. Option C has T³. Option D has positive mass power."
))

qs.append(make_q(
    205,
    "The dimensional formula of the Boltzmann constant kB is:",
    {"A": "[M L² T⁻² K⁻¹]", "B": "[M L² T⁻¹ K⁻¹]", "C": "[M L T⁻² K⁻¹]", "D": "[M L² T⁻² K]"},
    "A", "Medium", "Dimensions and dimensional formulae",
    "Equipartition theorem and Boltzmann constant dimensions.",
    "Average kinetic energy per degree of freedom E = (1/2) kB T.",
    "kB = 2 E / T  =>  [kB] = [Energy] / [Temperature] = [M L² T⁻²] / [K] = [M L² T⁻² K⁻¹].",
    "1. Thermal kinetic energy is given by E = (3/2) kB T.\n2. Rearrange for kB: kB = E / T (ignoring dimensionless constant 3/2).\n3. Dimensions of energy: [E] = [M L² T⁻²].\n4. Dimensions of temperature: [T] = [K].\n5. [kB] = [M L² T⁻² K⁻¹].",
    "NEET Connection: Boltzmann constant kB and Entropy S (ΔS = ΔQ/T) have identical dimensions [M L² T⁻² K⁻¹] and SI unit J/K!",
    "Option B has T⁻¹. Option C has L¹. Option D has positive K."
))

qs.append(make_q(
    206,
    "The dimensional formula of the permittivity of free space ε₀ is:",
    {"A": "[M⁻¹ L⁻³ T⁴ A²]", "B": "[M⁻¹ L⁻³ T² A²]", "C": "[M L³ T⁻⁴ A⁻²]", "D": "[M⁻¹ L⁻² T⁴ A²]"},
    "A", "Medium", "Dimensions and dimensional formulae",
    "Coulomb's Law and permittivity dimensions.",
    "Coulomb's Law: F = (1 / (4πε₀)) · (q₁ q₂ / r²).",
    "ε₀ = (q₁ q₂) / (4π F r²)  =>  [ε₀] = [A T]² / ([M L T⁻²][L²]) = [A² T²] / [M L³ T⁻²] = [M⁻¹ L⁻³ T⁴ A²].",
    "1. Force F = [M L T⁻²], distance r = [L], charge q = [A T].\n2. Product q² = [A² T²], and F r² = [M L³ T⁻²].\n3. Divide: [ε₀] = [A² T²] / [M L³ T⁻²] = [M⁻¹ L⁻³ T⁴ A²].",
    "NEET Formula Check: ε₀ = [M⁻¹ L⁻³ T⁴ A²]. Notice: M⁻¹, L⁻³, T⁺⁴, A⁺².",
    "Option B has T². Option C has all signs inverted. Option D has L⁻² (which is capacitance C)."
))

qs.append(make_q(
    207,
    "The physical quantity having dimensional formula [M⁻¹ L³ T⁻²] is:",
    {"A": "Universal gravitational constant G", "B": "Gravitational potential", "C": "Planck's constant", "D": "Coefficient of viscosity"},
    "A", "Hard", "Dimensions and dimensional formulae",
    "Identifying universal gravitational constant from dimensions.",
    "Dimensions: [M⁻¹ L³ T⁻²].",
    "F = G m₁ m₂ / r²  =>  G = F r² / (m₁ m₂)  =>  [M L T⁻²][L²] / [M²] = [M⁻¹ L³ T⁻²].",
    "1. Universal law of gravitation: F = G m₁ m₂ / r².\n2. G = F r² / m².\n3. [G] = [M L T⁻²][L²] / [M²] = [M⁻¹ L³ T⁻²].\n4. Gravitational potential is [L² T⁻²]. Planck's constant is [M L² T⁻¹]. Viscosity is [M L⁻¹ T⁻¹].",
    "NEET Flashcard: G = [M⁻¹ L³ T⁻²]. Notice the mass power is -1 and length power is +3!",
    "Option B has no mass. Option C is [M L² T⁻¹]. Option D is [M L⁻¹ T⁻¹]."
))

qs.append(make_q(
    208,
    "Which of the following physical quantities has the dimensions of [M L T⁻³ K⁻¹]?",
    {"A": "Thermal conductivity K", "B": "Specific heat capacity", "C": "Stefan-Boltzmann constant", "D": "Latent heat"},
    "A", "Hard", "Dimensions and dimensional formulae",
    "Thermal conductivity dimensional derivation.",
    "Fourier law: dQ/dt = K A (ΔT / x).",
    "K = (dQ/dt · x) / (A · ΔT)  =>  [K] = ([M L² T⁻³][L]) / ([L²][K]) = [M L³ T⁻³] / [L² K] = [M L T⁻³ K⁻¹].",
    "1. Rate of heat flow dQ/dt is power = [M L² T⁻³].\n2. Distance x = [L].\n3. Area A = [L²].\n4. Temperature difference ΔT = [K].\n5. [K] = [M L² T⁻³][L] / ([L²][K]) = [M L T⁻³ K⁻¹].",
    "NEET Dimension Breakdown: [Thermal conductivity] = [M L T⁻³ K⁻¹]. Unit: W/(m·K).",
    "Option B is [L² T⁻² K⁻¹]. Option C is [M T⁻³ K⁻⁴]. Option D is [L² T⁻²]."
))

qs.append(make_q(
    209,
    "The dimensional formula of the ratio of magnetic field B to electric field E, (B / E), is:",
    {"A": "[L⁻¹ T]", "B": "[L T⁻¹]", "C": "[M⁰ L⁰ T⁰]", "D": "[L⁻² T²]"},
    "A", "Hard", "Dimensions and dimensional formulae",
    "Ratio of electromagnetic fields in wave propagation.",
    "Ratio B / E in electromagnetic theory.",
    "c = E / B  =>  B / E = 1 / c = 1 / [L T⁻¹] = [L⁻¹ T].",
    "1. For an electromagnetic wave in vacuum, the ratio of electric field to magnetic field is the speed of light: E / B = c.\n2. The speed of light c has dimensions [L T⁻¹].\n3. Therefore, the inverted ratio B / E has dimensions 1 / c = [L T⁻¹]⁻¹ = [L⁻¹ T].",
    "NEET Trap Alert: E/B is velocity [L T⁻¹]! Therefore, B/E is inverse velocity [L⁻¹ T]! Read the question numerator and denominator carefully!",
    "Option B is E/B (velocity). Option C is dimensionless. Option D has squared powers."
))

qs.append(make_q(
    210,
    "If e is the elementary electric charge, h is Planck's constant, c is the speed of light in vacuum, and ε₀ is the permittivity of free space, the dimensional formula of the fine-structure constant α = e² / (4πε₀ ℏ c) is:",
    {"A": "[M⁰ L⁰ T⁰]", "B": "[M L² T⁻¹]", "C": "[M⁻¹ L⁻² T²]", "D": "[M L T⁻²]"},
    "A", "Hard", "Dimensions and dimensional formulae",
    "Fine-structure constant dimensionless character.",
    "α = e² / (4πε₀ ℏ c).",
    "[e² / (4πε₀)] = [Force × r²] = [M L³ T⁻²]; [ℏ c] = [M L² T⁻¹][L T⁻¹] = [M L³ T⁻²].",
    "1. The electrostatic potential energy of two elementary charges at distance r is U = e² / (4πε₀ r).\n2. Therefore, [e² / (4πε₀)] = [U · r] = [M L² T⁻²][L] = [M L³ T⁻²].\n3. The product ℏ c has dimensions: [ℏ] = [M L² T⁻¹], [c] = [L T⁻¹] => [ℏ c] = [M L³ T⁻²].\n4. Divide: [α] = [M L³ T⁻²] / [M L³ T⁻²] = [M⁰ L⁰ T⁰].\n5. The fine-structure constant is completely dimensionless with numerical value ≈ 1/137.",
    "NEET Quantum Milestone: The fine-structure constant α ≈ 1/137 is one of the most famous dimensionless pure numbers in physics!",
    "Options B, C, and D assign non-zero dimensions to a known dimensionless constant."
))

# ==============================================================================
# Group 5 (211-225): Dimensional analysis
# 3 Easy, 8 Medium, 4 Hard
# ==============================================================================
qs.append(make_q(
    211,
    "Which of the following pairs of physical quantities has the same dimensional formula?",
    {"A": "Work and Torque", "B": "Stress and Strain", "C": "Momentum and Force", "D": "Power and Energy"},
    "A", "Easy", "Dimensional analysis",
    "Quantities possessing identical dimensions.",
    "Pairs of quantities.",
    "Work W = F · d  =>  [M L² T⁻²]; Torque τ = r × F  =>  [M L² T⁻²].",
    "1. Work = Force × displacement = [M L T⁻²][L] = [M L² T⁻²].\n2. Torque = Force × perpendicular distance = [M L T⁻²][L] = [M L² T⁻²].\n3. Both quantities share the identical dimensional formula [M L² T⁻²].\n4. Stress is [M L⁻¹ T⁻²], but strain is dimensionless [M⁰ L⁰ T⁰].\n5. Momentum is [M L T⁻¹], force is [M L T⁻²]. Power is [M L² T⁻³], energy is [M L² T⁻²].",
    "NEET Classic Pair: Work and Torque have the same dimensions [M L² T⁻²] but different scalar/vector characters.",
    "Option B pairs stress with dimensionless strain. Option C pairs momentum with force. Option D pairs power with energy."
))

qs.append(make_q(
    212,
    "The dimensional formula of the product of resistance R and capacitance C (R · C) is:",
    {"A": "[T]", "B": "[T⁻¹]", "C": "[M L² T⁻²]", "D": "[M⁰ L⁰ T⁰]"},
    "A", "Easy", "Dimensional analysis",
    "RC time constant dimensions.",
    "Product R · C.",
    "R = V / I, C = Q / V  =>  R · C = (V / I) · (Q / V) = Q / I = (I · t) / I = t = [T].",
    "1. Electric resistance R = V / I.\n2. Capacitance C = Q / V.\n3. Multiply R and C: R · C = (V / I) × (Q / V) = Q / I.\n4. Since charge Q = current × time (I · t), Q / I = time t.\n5. Therefore, [R · C] = [T] (seconds).",
    "NEET High-Speed Trick: RC = (V/I) × (Q/V) = Q/I = Time [T]! No need to derive base unit monsters!",
    "Option B is 1/(RC) (frequency). Option C is energy. Option D is dimensionless."
))

qs.append(make_q(
    213,
    "The expression 1 / √(μ₀ ε₀) has the same dimensions as that of:",
    {"A": "Acceleration", "B": "Velocity", "C": "Force", "D": "Energy"},
    "B", "Easy", "Dimensional analysis",
    "Maxwell's speed of electromagnetic waves.",
    "Expression: c = 1 / √(μ₀ ε₀).",
    "In Maxwell's equations, c = 1 / √(μ₀ ε₀) represents the speed of light in vacuum.",
    "1. From Maxwell's electromagnetic theory, the propagation speed of EM waves in vacuum is given by c = 1 / √(μ₀ ε₀).\n2. Speed has dimensions of length divided by time: [L T⁻¹].\n3. Therefore, 1 / √(μ₀ ε₀) has the dimensions of velocity.",
    "NEET NCERT Gold Formula: c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s [L T⁻¹].",
    "Option A is [L T⁻²]. Option C is [M L T⁻²]. Option D is [M L² T⁻²]."
))

qs.append(make_q(
    214,
    "Which of the following combinations of physical quantities has dimensions of frequency [T⁻¹]?",
    {"A": "R / L", "B": "L / R", "C": "R · C", "D": "√(L · C)"},
    "A", "Medium", "Dimensional analysis",
    "Electrical resonance and circuit time constants.",
    "Combinations of R, L, C.",
    "L/R is inductive time constant [T]  =>  R/L is inverse time constant = [T⁻¹].",
    "1. The inductive time constant of an RL circuit is τ = L / R, which has dimensions of time [T].\n2. The reciprocal R / L has dimensions 1 / [T] = [T⁻¹] (frequency).\n3. RC has dimensions [T].\n4. √(LC) has dimensions [T].",
    "NEET Shortcut: Inductive decay factor is e^(-Rt/L) = e^(-t / (L/R)). The exponent must be dimensionless, so [Rt/L] = 1 => [R/L] = [T⁻¹]!",
    "Options B, C, and D all have dimensions of time [T]."
))

qs.append(make_q(
    215,
    "The dimension of √(L / C) is identical to the dimension of:",
    {"A": "Inductance", "B": "Capacitance", "C": "Resistance", "D": "Magnetic field"},
    "C", "Medium", "Dimensional analysis",
    "Characteristic impedance of an LC transmission line.",
    "Expression: √(L / C).",
    "[L] = [M L² T⁻² A⁻²], [C] = [M⁻¹ L⁻² T⁴ A²]  =>  [L / C] = [M² L⁴ T⁻⁶ A⁻⁴]  =>  √(L/C) = [M L² T⁻³ A⁻²].",
    "1. Substitute dimensions of L and C:\n   [L] = [M L² T⁻² A⁻²]\n   [C] = [M⁻¹ L⁻² T⁴ A²]\n2. Divide: [L / C] = [M² L⁴ T⁻⁶ A⁻⁴].\n3. Take square root: √([L / C]) = [M L² T⁻³ A⁻²].\n4. [M L² T⁻³ A⁻²] is the dimensional formula of electric resistance (Ohm).\n5. This quantity is known as the surge impedance of an LC circuit.",
    "NEET Memory Aid: √(L/C) has unit Ohm (Ω) and represents surge impedance!",
    "Option A is Henry. Option B is Farad. Option D is Tesla."
))

qs.append(make_q(
    216,
    "The ratio of energy to frequency, E / ν, has the same dimensions as:",
    {"A": "Torque", "B": "Angular momentum", "C": "Linear momentum", "D": "Power"},
    "B", "Medium", "Dimensional analysis",
    "Planck relation and angular momentum dimensions.",
    "Ratio E / ν.",
    "E = h ν  =>  E / ν = h (Planck's constant). [h] = [Angular momentum L] = [M L² T⁻¹].",
    "1. From Einstein-Planck formula, E / ν = h (Planck's constant).\n2. Dimensional formula of energy: [E] = [M L² T⁻²].\n3. Dimensional formula of frequency: [ν] = [T⁻¹].\n4. [E / ν] = [M L² T⁻²] / [T⁻¹] = [M L² T⁻¹].\n5. Angular momentum L = m v r has dimensions: [M][L T⁻¹][L] = [M L² T⁻¹].\n6. Therefore, E / ν has the dimensions of angular momentum.",
    "NEET Bohr Link: E/ν = h, and L = n(h/2π). Hence [E/ν] = [L] = [M L² T⁻¹].",
    "Option A is [M L² T⁻²]. Option C is [M L T⁻¹]. Option D is [M L² T⁻³]."
))

qs.append(make_q(
    217,
    "If the energy density of a magnetic field is u = B² / (2 μ₀), the dimensional formula of B² / μ₀ is:",
    {"A": "[M L⁻¹ T⁻²]", "B": "[M L² T⁻²]", "C": "[M L⁻² T⁻²]", "D": "[M L⁻¹ T⁻¹]"},
    "A", "Medium", "Dimensional analysis",
    "Magnetic energy density dimensions.",
    "Magnetic energy density u_B = B² / (2 μ₀).",
    "Energy density = Energy / Volume = [M L² T⁻²] / [L³] = [M L⁻¹ T⁻²].",
    "1. Energy density u is energy per unit volume: u = Energy / Volume.\n2. Dimensional formula: [Energy] / [Volume] = [M L² T⁻²] / [L³] = [M L⁻¹ T⁻²].\n3. Since 2 is a dimensionless constant, [B² / μ₀] = [u] = [M L⁻¹ T⁻²].\n4. Notice this is also identical to the dimensions of Pressure and Stress (Pascal = J/m³).",
    "NEET Universal Equality: Energy density u = (1/2)ε₀E² = B²/(2μ₀) = Pressure = Stress = Young's modulus = [M L⁻¹ T⁻²]!",
    "Option B is total energy. Option C has L⁻². Option D has T⁻¹."
))

qs.append(make_q(
    218,
    "Which of the following physical quantities has the same dimensions as the spring constant k?",
    {"A": "Surface tension", "B": "Viscosity", "C": "Pressure", "D": "Gravitational potential"},
    "A", "Medium", "Dimensional analysis",
    "Spring constant vs surface tension dimensions.",
    "Spring constant k and surface tension T.",
    "Hooke's Law: F = k x  =>  k = F / x. Surface tension: T = F / l.",
    "1. Spring constant k = Force / extension = [M L T⁻²] / [L] = [M T⁻²].\n2. Surface tension T = Force / length = [M L T⁻²] / [L] = [M T⁻²].\n3. Surface energy per unit area = Energy / Area = [M L² T⁻²] / [L²] = [M T⁻²].\n4. All three quantities share the exact dimensions [M T⁻²] (or [M L⁰ T⁻²]).",
    "NEET High-Yield Match: Spring constant (N/m), Surface tension (N/m), and Surface energy per unit area (J/m²) all have dimensions [M T⁻²]!",
    "Option B is [M L⁻¹ T⁻¹]. Option C is [M L⁻¹ T⁻²]. Option D is [L² T⁻²]."
))

qs.append(make_q(
    219,
    "The dimension of velocity gradient (dv / dx) is equal to that of:",
    {"A": "Acceleration", "B": "Decay constant", "C": "Velocity", "D": "Viscosity"},
    "B", "Medium", "Dimensional analysis",
    "Velocity gradient and radioactive decay constant dimensions.",
    "Velocity gradient = dv / dx.",
    "[dv / dx] = [Velocity] / [Distance] = [L T⁻¹] / [L] = [T⁻¹].",
    "1. Velocity gradient dv/dx measures the change in fluid speed per unit perpendicular distance.\n2. Dimensions: [dv/dx] = [L T⁻¹] / [L] = [T⁻¹].\n3. In radioactivity, law of decay is N = N₀ e^(-λt). The exponent λt is dimensionless, so [λ] = [T⁻¹].\n4. Therefore, velocity gradient has the same dimension [T⁻¹] as the radioactive decay constant (and frequency).",
    "NEET Connection: Decay constant λ, Frequency ν, Angular speed ω, and Velocity gradient dv/dx all share the dimension [T⁻¹]!",
    "Option A is [L T⁻²]. Option C is [L T⁻¹]. Option D is [M L⁻¹ T⁻¹]."
))

qs.append(make_q(
    220,
    "A physical quantity X is defined as X = G M / R², where G is the gravitational constant, M is the mass of a planet, and R is its radius. The dimensional formula of X is:",
    {"A": "[M L T⁻²]", "B": "[L T⁻²]", "C": "[L² T⁻²]", "D": "[M⁰ L T⁻¹]"},
    "B", "Medium", "Dimensional analysis",
    "Surface gravitational acceleration.",
    "X = G M / R².",
    "F = G M m / R² = m g  =>  g = G M / R² = acceleration due to gravity.",
    "1. Substitute the dimensions of each variable:\n   [G] = [M⁻¹ L³ T⁻²]\n   [M] = [M]\n   [R²] = [L²]\n2. Multiply: [X] = ([M⁻¹ L³ T⁻²][M]) / [L²] = [L³ T⁻²] / [L²] = [L T⁻²].\n3. [L T⁻²] is the dimensional formula of acceleration (specifically, gravitational acceleration g).",
    "NEET Quick Recognition: G M / R² is the standard formula for surface gravitational acceleration g = 9.8 m/s² [L T⁻²]!",
    "Option A is force. Option C is gravitational potential. Option D is velocity."
))

qs.append(make_q(
    221,
    "The ratio of the electric force to the gravitational force between two electrons separated by a distance r is Fe / Fg = e² / (4πε₀ G m²). The dimensional formula of this ratio is:",
    {"A": "[M⁰ L⁰ T⁰]", "B": "[M L T⁻²]", "C": "[M⁻¹ L³ T⁻²]", "D": "[M L² T⁻¹]"},
    "A", "Medium", "Dimensional analysis",
    "Ratio of two fundamental forces.",
    "Ratio Fe / Fg.",
    "Fe and Fg are both forces: [Fe / Fg] = [Force] / [Force] = [M L T⁻²] / [M L T⁻²] = [M⁰ L⁰ T⁰].",
    "1. Fe is electrostatic force in Newtons [M L T⁻²].\n2. Fg is gravitational force in Newtons [M L T⁻²].\n3. The ratio of two quantities of the same physical nature is always a pure, dimensionless number.\n4. [Fe / Fg] = [M⁰ L⁰ T⁰].\n5. (Numerically, Fe / Fg ≈ 4.17 × 10⁴² for two electrons).",
    "NEET Golden Rule: ANY ratio of two identical physical quantities (Force/Force, Energy/Energy, Length/Length) is strictly DIMENSIONLESS [M⁰ L⁰ T⁰]!",
    "Options B, C, and D are non-zero dimensions."
))

qs.append(make_q(
    222,
    "The dimensional formula of ε₀ E² (where ε₀ is permittivity of free space and E is electric field) is identical to:",
    {"A": "Energy", "B": "Pressure", "C": "Power", "D": "Force"},
    "B", "Hard", "Dimensional analysis",
    "Electrostatic energy density and equivalence to pressure.",
    "Quantity: ε₀ E².",
    "Electrostatic energy density u_E = (1/2) ε₀ E² = Energy / Volume.",
    "1. Energy density u_E is the energy stored per unit volume in an electric field.\n2. Dimensional formula of energy: [M L² T⁻²].\n3. Dimensional formula of volume: [L³].\n4. [u_E] = [M L² T⁻²] / [L³] = [M L⁻¹ T⁻²].\n5. Pressure P = Force / Area = [M L T⁻²] / [L²] = [M L⁻¹ T⁻²].\n6. Therefore, ε₀ E² has the dimensions of Pressure.",
    "NEET Dual Identity: Both (1/2)ε₀E² and B²/(2μ₀) have dimensions of Pressure [M L⁻¹ T⁻²]. Both are called 'radiation pressure'!",
    "Option A is energy [M L² T⁻²]. Option C is power [M L² T⁻³]. Option D is force [M L T⁻²]."
))

qs.append(make_q(
    223,
    "A physical quantity P is defined as P = √(ħ c / G), where ħ is reduced Planck constant, c is speed of light, and G is universal gravitational constant. The quantity P has the dimension of:",
    {"A": "Mass", "B": "Length", "C": "Time", "D": "Energy"},
    "A", "Hard", "Dimensional analysis",
    "Planck mass derivation from fundamental constants.",
    "P = √(ħ c / G).",
    "[ħ] = [M L² T⁻¹], [c] = [L T⁻¹], [G] = [M⁻¹ L³ T⁻²].",
    "1. Numerator: [ħ c] = [M L² T⁻¹][L T⁻¹] = [M L³ T⁻²].\n2. Divide by [G]: [ħ c / G] = [M L³ T⁻²] / [M⁻¹ L³ T⁻²] = [M²].\n3. Take square root: √([M²]) = [M].\n4. Therefore, P represents the Planck Mass (m_p ≈ 2.18 × 10⁻⁸ kg).\n5. It has the dimensions of Mass [M].",
    "NEET Fundamental Formula: Planck Mass m_p = √(ħc/G) [M]. One of the most famous dimensional combinations in physics!",
    "Option B is Planck length. Option C is Planck time. Option D is Planck energy."
))

qs.append(make_q(
    224,
    "If the dimensions of a physical quantity are given by [M^a L^b T^c], then the physical quantity is:",
    {"A": "Force if a = 1, b = -1, c = -2", "B": "Pressure if a = 1, b = -1, c = -2", "C": "Velocity if a = 1, b = 0, c = -1", "D": "Acceleration if a = 1, b = 1, c = -2"},
    "B", "Hard", "Dimensional analysis",
    "Matching dimensional exponents to physical quantities.",
    "Dimensions [M^a L^b T^c].",
    "Pressure P = Force / Area = [M L T⁻²] / [L²] = [M¹ L⁻¹ T⁻²].",
    "1. Let's test Option A (Force): [Force] = [M¹ L¹ T⁻²]. Here b = 1, but option says b = -1 (Incorrect).\n2. Test Option B (Pressure): [Pressure] = [M¹ L⁻¹ T⁻²]. Here a = 1, b = -1, c = -2 (Matches perfectly!).\n3. Test Option C (Velocity): [Velocity] = [M⁰ L¹ T⁻¹]. Here a should be 0, not 1.\n4. Test Option D (Acceleration): [Acceleration] = [M⁰ L¹ T⁻²]. Here a should be 0, not 1.\n5. Therefore, Option B is the correct match.",
    "NEET Elimination Technique: Check mass power 'a' first! Velocity and acceleration have a = 0 (no mass). That immediately eliminates C and D!",
    "Option A has wrong sign on length power for force. Options C and D include mass in kinematic quantities."
))

qs.append(make_q(
    225,
    "The dimensions of (μ₀ ε₀)⁻¹/² are [L T⁻¹]. What are the dimensions of (μ₀ / ε₀)¹/²?",
    {"A": "[M L² T⁻³ A⁻²]", "B": "[M L T⁻² A⁻¹]", "C": "[M⁻¹ L⁻² T³ A²]", "D": "[M L² T⁻² A⁻²]"},
    "A", "Hard", "Dimensional analysis",
    "Wave impedance of free space dimensions.",
    "Expression: √(μ₀ / ε₀).",
    "[μ₀] = [M L T⁻² A⁻²], [ε₀] = [M⁻¹ L⁻³ T⁴ A²].",
    "1. Divide dimensions: [μ₀ / ε₀] = [M L T⁻² A⁻²] / [M⁻¹ L⁻³ T⁴ A²] = [M² L⁴ T⁻⁶ A⁻⁴].\n2. Take square root: √([M² L⁴ T⁻⁶ A⁻⁴]) = [M L² T⁻³ A⁻²].\n3. This is the dimensional formula of Electrical Resistance (Ohm).\n4. In electromagnetic theory, √(μ₀ / ε₀) is the intrinsic impedance of free space (≈ 377 Ω).",
    "NEET Dual Relation: 1/√(μ₀ε₀) = velocity c [L T⁻¹]. √(μ₀/ε₀) = resistance R [M L² T⁻³ A⁻²] (377 Ω)!",
    "Option B is magnetic field B. Option C is conductance G. Option D is inductance L."
))

print(f"Groups 1 to 5 generated: {len(qs)} questions.")

with open('scripts/part2_qs.json', 'w', encoding='utf-8') as f:
    json.dump(qs, f, indent=2)
