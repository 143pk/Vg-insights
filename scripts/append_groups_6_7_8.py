import sys, json
sys.path.append('scripts')
from make_q import make_q

with open('scripts/part2_qs.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

print(f"Loaded {len(qs)} questions. Adding Groups 6, 7 & 8...")

# ==============================================================================
# Group 6 (226-240): Checking dimensional consistency of equations
# 4 Easy, 7 Medium, 4 Hard
# ==============================================================================
qs.append(make_q(
    226,
    "The displacement of a particle executing simple harmonic motion is given by y = A sin(ω t - k x). The dimensional formula of k is:",
    {"A": "[L⁻¹]", "B": "[L]", "C": "[T⁻¹]", "D": "[L T⁻¹]"},
    "A", "Easy", "Checking dimensional consistency of equations",
    "Principle of homogeneity for trigonometric arguments.",
    "Equation y = A sin(ω t - k x).",
    "Arguments of trigonometric functions must be dimensionless: [k x] = [M⁰ L⁰ T⁰]  =>  [k] = 1 / [x] = [L⁻¹].",
    "1. In the equation y = A sin(ω t - k x), the quantity inside the sine function represents a phase angle (in radians).\n2. Any angle or trigonometric argument is dimensionless [M⁰ L⁰ T⁰].\n3. Therefore, both [ω t] and [k x] must be dimensionless.\n4. [k x] = 1  =>  [k][L] = 1  =>  [k] = [L⁻¹].\n5. (The quantity k is the propagation constant or angular wavenumber k = 2π / λ).",
    "NEET Wave Shortcut: In y = A sin(ωt - kx): ω = 2π/T has dimension [T⁻¹]; k = 2π/λ has dimension [L⁻¹]; and ω/k = wave speed v has dimension [L T⁻¹]!",
    "Option B is wavelength λ. Option C is angular frequency ω. Option D is wave speed v."
))

qs.append(make_q(
    227,
    "In the relation P = α / β · e^(-α z / (k_B θ)), P is pressure, z is distance, k_B is Boltzmann constant, and θ is temperature. The dimensional formula of α is:",
    {"A": "[M L T⁻²]", "B": "[M L² T⁻²]", "C": "[M L⁻¹ T⁻²]", "D": "[M⁰ L⁰ T⁰]"},
    "A", "Easy", "Checking dimensional consistency of equations",
    "Exponential arguments must be dimensionless.",
    "Equation P = (α / β) e^(-α z / (k_B θ)). P = Pressure, z = distance, k_B = Boltzmann constant, θ = temperature.",
    "Exponent [-α z / (k_B θ)] is dimensionless: [α z] = [k_B θ]  =>  [α] = [k_B θ] / [z].",
    "1. The exponential function e^(...) requires its exponent to be a dimensionless number.\n2. Therefore, [α z / (k_B θ)] = [M⁰ L⁰ T⁰] = 1.\n3. The product k_B θ represents thermal energy: [k_B θ] = [M L² T⁻²].\n4. Distance z has dimension [L].\n5. Hence, [α] = [k_B θ] / [z] = [M L² T⁻²] / [L] = [M L T⁻²].\n6. [M L T⁻²] is the dimensional formula of Force.",
    "NEET Golden Rule: The argument of e^x, ln(x), and sin(x) is ALWAYS strictly dimensionless [M⁰ L⁰ T⁰]!",
    "Option B is energy. Option C is pressure. Option D is a dimensionless constant."
))

qs.append(make_q(
    228,
    "The position x of a particle at time t is given by x = v₀ / a · (1 - e^(-a t)), where v₀ is a constant velocity. The dimensional formula of constant a is:",
    {"A": "[T⁻¹]", "B": "[T]", "C": "[L T⁻²]", "D": "[L⁻¹]"},
    "A", "Easy", "Checking dimensional consistency of equations",
    "Principle of homogeneity applied to exponential arguments.",
    "Equation x = (v₀ / a) (1 - e^(-a t)).",
    "The exponent [a t] must be dimensionless: [a t] = 1  =>  [a] = 1 / [t] = [T⁻¹].",
    "1. In the exponential term e^(-a t), the exponent (-a t) must be dimensionless [M⁰ L⁰ T⁰].\n2. Therefore, [a] × [t] = 1.\n3. Since t is time [T], [a] = 1 / [T] = [T⁻¹].\n4. Check consistency of pre-factor: [v₀ / a] = [L T⁻¹] / [T⁻¹] = [L] = [x]. Both sides are completely consistent!",
    "NEET Quick Check: Exponent [at] = 1 => [a] = [T⁻¹]. Always verify the pre-factor [v₀/a] = [L] to double check!",
    "Option B is time. Option C is acceleration. Option D is inverse length."
))

qs.append(make_q(
    229,
    "In the equation v = A t + B / (t + C), where v is velocity and t is time, the dimensional formula of B is:",
    {"A": "[L]", "B": "[L T⁻¹]", "C": "[L T]", "D": "[L T⁻²]"},
    "A", "Easy", "Checking dimensional consistency of equations",
    "Principle of homogeneity for addition in denominator.",
    "Equation v = A t + B / (t + C). v = velocity [L T⁻¹], t = time [T].",
    "Quantities added must have identical dimensions: [C] = [t] = [T]. [B / (t + C)] = [v]  =>  [B] = [v] × [T].",
    "1. In the denominator (t + C), time t is added to C. By the principle of homogeneity, [C] = [t] = [T].\n2. The entire second term B / (t + C) must have the dimensions of velocity v [L T⁻¹].\n3. [B] / [T] = [L T⁻¹].\n4. Multiply by [T]: [B] = [L T⁻¹] × [T] = [L].\n5. Therefore, B has the dimensions of Length [L].",
    "NEET Classic Problem: 1. Denominator addition: [C] = [T]. 2. Whole term: [B]/[T] = [v] => [B] = [v][T] = [L]!",
    "Option B is velocity. Option C is [L T]. Option D is acceleration."
))

qs.append(make_q(
    230,
    "The Van der Waals equation of state for a real gas is (P + a / V²)(V - b) = R T. The dimensional formula of constant a is:",
    {"A": "[M L⁵ T⁻²]", "B": "[M L³ T⁻²]", "C": "[M L⁻¹ T⁻²]", "D": "[M L⁵ T⁻¹]"},
    "A", "Medium", "Checking dimensional consistency of equations",
    "Homogeneity in Van der Waals equation of state.",
    "Equation (P + a / V²)(V - b) = R T. P = pressure, V = volume.",
    "Quantities added must have identical dimensions: [a / V²] = [P]  =>  [a] = [P] × [V²].",
    "1. In the first factor, pressure P is added to (a / V²).\n2. By the principle of homogeneity, [a / V²] = [P].\n3. Dimensional formula of pressure: [P] = [M L⁻¹ T⁻²].\n4. Dimensional formula of volume: [V] = [L³], so [V²] = [L⁶].\n5. [a] = [P] × [V²] = [M L⁻¹ T⁻²] × [L⁶] = [M L⁵ T⁻²].",
    "NEET Top-Favorite Question: In Van der Waals equation: [a] = [M L⁵ T⁻²] (unit: N·m⁴); and [b] = [L³] (unit: m³).",
    "Option B has L³. Option C is pressure. Option D has T⁻¹."
))

qs.append(make_q(
    231,
    "In the Van der Waals equation (P + a / V²)(V - b) = R T, the dimensional formula of the ratio a / b is:",
    {"A": "[M L² T⁻²]", "B": "[M L³ T⁻²]", "C": "[M L T⁻²]", "D": "[M L⁻¹ T⁻²]"},
    "A", "Medium", "Checking dimensional consistency of equations",
    "Ratio of Van der Waals constants a and b.",
    "Constants a and b in (P + a / V²)(V - b) = R T.",
    "[a] = [P V²] = [M L⁵ T⁻²]; [b] = [V] = [L³]  =>  [a / b] = [M L⁵ T⁻²] / [L³] = [M L² T⁻²].",
    "1. From [a / V²] = [P], we found [a] = [M L⁵ T⁻²].\n2. From [V - b], volume b has dimensions [b] = [V] = [L³].\n3. Ratio [a / b] = [M L⁵ T⁻²] / [L³] = [M L² T⁻²].\n4. [M L² T⁻²] is the dimensional formula of Energy or Work.",
    "NEET High-Yield Insight: The ratio a/b represents molar energy (Joules)! Dimensions: [M L² T⁻²]!",
    "Option B has L³. Option C is force. Option D is pressure."
))

qs.append(make_q(
    232,
    "The force acting on a particle is given by F = a t + b t², where t is time. The dimensional formula of a / b is:",
    {"A": "[T]", "B": "[T⁻¹]", "C": "[T²]", "D": "[M⁰ L⁰ T⁰]"},
    "A", "Medium", "Checking dimensional consistency of equations",
    "Polynomial force relation and ratio of coefficients.",
    "F = a t + b t². F = force [M L T⁻²], t = time [T].",
    "[a t] = [F]  =>  [a] = [F] / [T]; [b t²] = [F]  =>  [b] = [F] / [T²]  =>  [a / b] = ([F] / [T]) / ([F] / [T²]) = [T].",
    "1. By the principle of homogeneity, each term added must have the dimension of Force [F].\n2. [a t] = [F]  =>  [a] = [F] [T⁻¹].\n3. [b t²] = [F]  =>  [b] = [F] [T⁻²].\n4. Divide the two coefficients: [a / b] = ([F] [T⁻¹]) / ([F] [T⁻²]) = [T⁻¹ / T⁻²] = [T].\n5. Therefore, a / b has the dimension of time [T].",
    "NEET Shortcut: Notice [a t] = [b t²] directly! Cancelling t gives [a] = [b t]  =>  [a / b] = [t] = [T]! No need to even write out force dimensions!",
    "Option B is [T⁻¹]. Option C is [T²]. Option D is dimensionless."
))

qs.append(make_q(
    233,
    "The pressure of a medium depends on time t and position x as P = A / B · ln(B x² + C t). The dimensions of C / B are:",
    {"A": "[L² T⁻¹]", "B": "[L T⁻¹]", "C": "[L² T]", "D": "[L⁻² T]"},
    "A", "Medium", "Checking dimensional consistency of equations",
    "Logarithmic argument homogeneity.",
    "P = (A / B) ln(B x² + C t). x = distance [L], t = time [T].",
    "Argument of logarithm is dimensionless: [B x²] = [C t] = 1  =>  [C / B] = [x² / t] = [L² T⁻¹].",
    "1. The argument of the natural logarithm ln(...) must be dimensionless.\n2. Inside the log, B x² is added to C t, so both terms must have the same dimension (dimensionless).\n3. [B x²] = [C t].\n4. Rearranging for the ratio C / B: [C / B] = [x² / t] = [L²] / [T] = [L² T⁻¹].\n5. [L² T⁻¹] represents kinematic viscosity or areal velocity.",
    "NEET Fast Trick: Inside ln(Bx² + Ct): Bx² and Ct must be dimensionally equal! So C/B = x²/t = [L² T⁻¹]!",
    "Option B is velocity. Option C is [L² T]. Option D is inverted."
))

qs.append(make_q(
    234,
    "The velocity v of water waves depends on their wavelength λ, density of water ρ, and acceleration due to gravity g as v = k λ^a g^b ρ^c. Dimensional analysis reveals that:",
    {"A": "a = 1/2, b = 1/2, c = 0", "B": "a = 1/2, b = -1/2, c = 0", "C": "a = 1, b = 1/2, c = 0", "D": "a = 1/2, b = 1/2, c = 1"},
    "A", "Medium", "Checking dimensional consistency of equations",
    "Gravity wave velocity derivation via dimensional analysis.",
    "v = k λ^a g^b ρ^c. [v] = [L T⁻¹], [λ] = [L], [g] = [L T⁻²], [ρ] = [M L⁻³].",
    "[L T⁻¹] = [L]^a [L T⁻²]^b [M L⁻³]^c = [M]^c [L]^(a + b - 3c) [T]^(-2b).",
    "1. Mass equation: c = 0 (velocity does not depend on water density!).\n2. Time equation: -2b = -1  =>  b = 1/2.\n3. Length equation: a + b - 3(0) = 1  =>  a + 1/2 = 1  =>  a = 1/2.\n4. Therefore, v ∝ √(g λ), with a = 1/2, b = 1/2, and c = 0.",
    "NEET Physical Fact: Deep water gravity waves have phase velocity v = √(gλ / 2π). Wave speed is completely independent of liquid density (c = 0)!",
    "Option B has negative gravity power. Option C has a = 1. Option D incorrectly includes density."
))

qs.append(make_q(
    235,
    "A particle moves according to the relation x = A cos(ω t) + B sin(ω t). Which of the following statements is dimensionally correct?",
    {"A": "[A] = [B] = [L], and [ω] = [T⁻¹]", "B": "[A] = [L], [B] = [L T⁻¹], and [ω] = [T]", "C": "[A] = [B] = [L T⁻¹], and [ω] = [T⁻¹]", "D": "[A] = [L], [B] = [M⁰ L⁰ T⁰], and [ω] = [T⁻¹]"},
    "A", "Medium", "Checking dimensional consistency of equations",
    "Harmonic displacement superposition consistency.",
    "x = A cos(ω t) + B sin(ω t). x = displacement [L], t = time [T].",
    "[cos(ω t)] and [sin(ω t)] are dimensionless. Principle of homogeneity: [A] = [B] = [x] = [L]. [ω t] = 1 => [ω] = [T⁻¹].",
    "1. Both sine and cosine are dimensionless trigonometric functions.\n2. In x = A cos(ω t) + B sin(ω t), the terms A cos(...) and B sin(...) are added to give displacement x.\n3. Therefore, both coefficients A and B must independently have dimensions of displacement [L].\n4. The argument of the trigonometric functions ω t must be dimensionless, so [ω] = 1 / [t] = [T⁻¹].\n5. Thus, [A] = [B] = [L], and [ω] = [T⁻¹].",
    "NEET SHM Formula: x = A cos(ωt) + B sin(ωt) = R sin(ωt + φ) where R = √(A² + B²). Amplitude R has dimension [L]!",
    "Options B, C, and D assign mismatched dimensions to the harmonic amplitudes."
))

qs.append(make_q(
    236,
    "The energy E of a system is given by E = a x² + b v², where x is displacement and v is velocity. The dimensional formula of a / b is:",
    {"A": "[T⁻²]", "B": "[T²]", "C": "[T⁻¹]", "D": "[M L⁻² T²]"},
    "A", "Medium", "Checking dimensional consistency of equations",
    "Harmonic oscillator total energy terms.",
    "E = a x² + b v². E = energy [M L² T⁻²], x = [L], v = [L T⁻¹].",
    "[a x²] = [b v²]  =>  [a / b] = [v² / x²] = ([L T⁻¹] / [L])² = [T⁻¹]² = [T⁻²].",
    "1. By the principle of homogeneity, both terms added must have the dimension of Energy E.\n2. [a x²] = [b v²].\n3. Rearrange directly: [a / b] = [v² / x²].\n4. Velocity over displacement is [v / x] = [L T⁻¹] / [L] = [T⁻¹].\n5. Squaring gives [a / b] = [T⁻¹]² = [T⁻²].\n6. (Physically, this represents the square of angular frequency ω² = k / m in SHM!).",
    "NEET SHM Analogy: E = (1/2)k x² + (1/2)m v². Here a = k/2, b = m/2. Ratio a/b = k/m = ω² = [T⁻²]!",
    "Option B is [T²]. Option C is [T⁻¹]. Option D is incorrect."
))

qs.append(make_q(
    237,
    "In the formula X = 3 Y Z², X and Z have dimensions of capacitance and magnetic induction respectively. What are the dimensions of Y in MKSQ system?",
    {"A": "[M⁻³ L⁻² T⁴ Q⁴]", "B": "[M⁻³ L⁻² T² Q⁴]", "C": "[M⁻³ L⁻² T⁴ Q²]", "D": "[M⁻² L⁻² T⁴ Q⁴]"},
    "A", "Hard", "Checking dimensional consistency of equations",
    "Multi-step dimensional equation with charge Q as base dimension.",
    "X = 3 Y Z². X = Capacitance C, Z = Magnetic field B. Charge Q = [Q].",
    "Y = X / (3 Z²). [C] = [M⁻¹ L⁻² T² Q²] (since Q = CV => C = Q²/2U). [B] = [F / (q v)] = [M L T⁻²] / ([Q][L T⁻¹]) = [M T⁻¹ Q⁻¹].",
    "1. Capacitance in terms of Q: U = (1/2) Q² / C  =>  [C] = [Q²] / [M L² T⁻²] = [M⁻¹ L⁻² T² Q²].\n2. Magnetic induction B: F = q v B  =>  [B] = [M L T⁻²] / ([Q][L T⁻¹]) = [M T⁻¹ Q⁻¹].\n3. Compute [Z²] = [B²] = [M² T⁻² Q⁻²].\n4. [Y] = [X] / [Z²] = [M⁻¹ L⁻² T² Q²] / [M² T⁻² Q⁻²] = [M⁻³ L⁻² T⁴ Q⁴].",
    "NEET Advanced Dimensions: When Charge Q is given instead of Ampere A, remember Q = A·T! Substitute A = Q T⁻¹ into standard formulas!",
    "Option B has T². Option C has Q². Option D has M⁻²."
))

qs.append(make_q(
    238,
    "The frequency of vibration ν of a mass m suspended from a spring of spring constant k is given by ν = C m^x k^y, where C is a dimensionless constant. The values of x and y are:",
    {"A": "x = -1/2, y = 1/2", "B": "x = 1/2, y = -1/2", "C": "x = 1/2, y = 1/2", "D": "x = -1, y = 1"},
    "A", "Hard", "Checking dimensional consistency of equations",
    "Spring-mass oscillator frequency derivation.",
    "ν = C m^x k^y. [ν] = [T⁻¹], [m] = [M], [k] = [M T⁻²].",
    "[T⁻¹] = [M]^x [M T⁻²]^y = [M]^(x + y) [T]^(-2y).",
    "1. Equate powers of mass M: x + y = 0  =>  x = -y.\n2. Equate powers of time T: -2y = -1  =>  y = 1/2.\n3. Therefore: x = -y = -1/2.\n4. Result: ν = C m^(-1/2) k^(1/2) = C √(k / m).\n5. (Since standard formula is ν = (1 / 2π) √(k / m), this matches perfectly with C = 1/2π).",
    "NEET Formula Check: Frequency is ν = (1/2π)√(k/m) = k^(1/2) m^(-1/2). So x = -1/2, y = 1/2!",
    "Option B inverts the powers (giving time period T). Options C and D are mathematically inconsistent."
))

qs.append(make_q(
    239,
    "A gas bubble from an explosion under water oscillates with a period T proportional to P^a d^b E^c, where P is static pressure, d is density of water, and E is total energy of the explosion. The values of a, b, and c are:",
    {"A": "a = -5/6, b = 1/2, c = 1/3", "B": "a = 5/6, b = -1/2, c = 1/3", "C": "a = -5/6, b = 1/3, c = 1/2", "D": "a = -1/2, b = 1/2, c = 1/3"},
    "A", "Hard", "Checking dimensional consistency of equations",
    "Rayleigh underwater bubble oscillation period.",
    "T ∝ P^a d^b E^c. [T] = [T], [P] = [M L⁻¹ T⁻²], [d] = [M L⁻³], [E] = [M L² T⁻²].",
    "[T] = [M L⁻¹ T⁻²]^a [M L⁻³]^b [M L² T⁻²]^c = [M]^(a + b + c) [L]^(-a - 3b + 2c) [T]^(-2a - 2c).",
    "1. Mass power: a + b + c = 0  =>  b = -(a + c).\n2. Time power: -2a - 2c = 1  =>  -2(a + c) = 1  =>  a + c = -1/2.\n   Substituting into mass equation gives: b = -(-1/2) = 1/2.\n3. Length power: -a - 3b + 2c = 0  =>  -a - 3(1/2) + 2c = 0  =>  2c - a = 3/2.\n4. We have two equations for a and c:\n   a + c = -1/2  =>  a = -1/2 - c.\n   2c - (-1/2 - c) = 3/2  =>  3c + 1/2 = 3/2  =>  3c = 1  =>  c = 1/3.\n5. Calculate a: a = -1/2 - 1/3 = -5/6.\n6. Summary: a = -5/6, b = 1/2, c = 1/3.",
    "NEET High-Yield Classic: This is Lord Rayleigh's underwater explosion bubble formula: T ∝ P^(-5/6) d^(1/2) E^(1/3)!",
    "Option B has positive power on pressure. Option C swaps powers of b and c. Option D has wrong pressure power."
))

qs.append(make_q(
    240,
    "The Bernoulli equation for fluid flow is P + (1/2) ρ v² + ρ g h = constant. Which of the following statements is true regarding its dimensional consistency?",
    {"A": "Every term has dimensions of pressure [M L⁻¹ T⁻²] and energy per unit volume.", "B": "Every term has dimensions of force [M L T⁻²].", "C": "The term ρ g h has dimensions of power.", "D": "The term (1/2) ρ v² has dimensions of momentum per unit volume."},
    "A", "Hard", "Checking dimensional consistency of equations",
    "Bernoulli's theorem dimensional breakdown.",
    "P + (1/2) ρ v² + ρ g h = constant.",
    "Dimensions of each term: [P] = [M L⁻¹ T⁻²]; [(1/2) ρ v²] = [M L⁻³][L² T⁻²] = [M L⁻¹ T⁻²]; [ρ g h] = [M L⁻³][L T⁻²][L] = [M L⁻¹ T⁻²].",
    "1. P is static pressure: [P] = [M L⁻¹ T⁻²].\n2. (1/2) ρ v² is dynamic pressure: [ρ v²] = [M L⁻³][L² T⁻²] = [M L⁻¹ T⁻²].\n3. ρ g h is hydrostatic pressure: [ρ g h] = [M L⁻³][L T⁻²][L] = [M L⁻¹ T⁻²].\n4. All three terms have identical dimensions [M L⁻¹ T⁻²] (Pascal or J/m³).\n5. Physically, each term represents energy per unit volume: Pressure Energy, Kinetic Energy per unit volume, and Potential Energy per unit volume.",
    "NEET Fluid Mechanics Insight: In Bernoulli's equation, every term represents Energy per unit volume (J/m³ = N/m² = Pascal)!",
    "Options B, C, and D assign incorrect physical dimensions to the terms in Bernoulli's equation."
))

# ==============================================================================
# Group 7 (241-255): Finding relationships between physical quantities
# 4 Easy, 8 Medium, 3 Hard
# ==============================================================================
qs.append(make_q(
    241,
    "The centripetal force F acting on a body of mass m moving with speed v in a circle of radius r depends on m, v, and r. Using dimensional analysis, F is proportional to:",
    {"A": "m v² / r", "B": "m v / r²", "C": "m² v / r", "D": "m v² r"},
    "A", "Easy", "Finding relationships between physical quantities",
    "Derivation of centripetal force formula.",
    "F = k m^a v^b r^c. [F] = [M L T⁻²], [m] = [M], [v] = [L T⁻¹], [r] = [L].",
    "[M L T⁻²] = [M]^a [L T⁻¹]^b [L]^c = [M]^a [L]^(b + c) [T]^(-b).",
    "1. Equate powers of mass: a = 1.\n2. Equate powers of time: -b = -2  =>  b = 2.\n3. Equate powers of length: b + c = 1  =>  2 + c = 1  =>  c = -1.\n4. Therefore, F = k m¹ v² r⁻¹ = k m v² / r.\n5. (Experimental constant k = 1, giving F = m v² / r).",
    "NEET Fundamental Formula: Centripetal force F = m v² / r.",
    "Option B has r² in denominator. Option C squares mass. Option D multiplies by radius instead of dividing."
))

qs.append(make_q(
    242,
    "The time period T of a simple pendulum depends on the length of the string l and acceleration due to gravity g as T ∝ l^a g^b. The values of a and b are:",
    {"A": "a = 1/2, b = -1/2", "B": "a = 1/2, b = 1/2", "C": "a = 1, b = -1/2", "D": "a = -1/2, b = 1/2"},
    "A", "Easy", "Finding relationships between physical quantities",
    "Simple pendulum period dependence on length and gravity.",
    "T ∝ l^a g^b. [T] = [T], [l] = [L], [g] = [L T⁻²].",
    "[T] = [L]^a [L T⁻²]^b = [L]^(a + b) [T]^(-2b).",
    "1. Equate powers of length: a + b = 0  =>  a = -b.\n2. Equate powers of time: -2b = 1  =>  b = -1/2.\n3. Therefore, a = -(-1/2) = 1/2.\n4. Thus, T ∝ l^(1/2) g^(-1/2) = √(l / g).\n5. (The complete formula is T = 2π √(l / g)).",
    "NEET Classic Result: T = 2π√(l/g). Period is directly proportional to √l and inversely proportional to √g.",
    "Option B gives velocity dimension. Option C has a = 1. Option D inverts the formula to √(g/l)."
))

qs.append(make_q(
    243,
    "The kinetic energy K of a rotating body depends on its moment of inertia I and angular velocity ω as K ∝ I^a ω^b. The exponents a and b are:",
    {"A": "a = 1, b = 2", "B": "a = 2, b = 1", "C": "a = 1, b = 1", "D": "a = 1/2, b = 2"},
    "A", "Easy", "Finding relationships between physical quantities",
    "Rotational kinetic energy derivation.",
    "K ∝ I^a ω^b. [K] = [M L² T⁻²], [I] = [M L²], [ω] = [T⁻¹].",
    "[M L² T⁻²] = [M L²]^a [T⁻¹]^b = [M]^a [L]^(2a) [T]^(-b).",
    "1. Equate powers of mass: a = 1.\n2. Verify length power: 2a = 2(1) = 2 (matches [L²]).\n3. Equate powers of time: -b = -2  =>  b = 2.\n4. Therefore, K ∝ I¹ ω².\n5. (The exact formula is K = (1/2) I ω², analogous to (1/2) m v²).",
    "NEET Analogy: Linear KE = (1/2) m v²  <==>  Rotational KE = (1/2) I ω². Power of I is 1, power of ω is 2!",
    "Option B squares moment of inertia. Option C is angular momentum (L = Iω). Option D has fractional power."
))

qs.append(make_q(
    244,
    "The viscous force F on a spherical ball falling through a fluid depends on viscosity η, radius r, and velocity v as F ∝ η^a r^b v^c. The values of a, b, and c are:",
    {"A": "a = 1, b = 1, c = 1", "B": "a = 1, b = 2, c = 1", "C": "a = 2, b = 1, c = 1", "D": "a = 1, b = 1, c = 2"},
    "A", "Easy", "Finding relationships between physical quantities",
    "Stokes' Law derivation via dimensional analysis.",
    "F = k η^a r^b v^c. [F] = [M L T⁻²], [η] = [M L⁻¹ T⁻¹], [r] = [L], [v] = [L T⁻¹].",
    "[M L T⁻²] = [M L⁻¹ T⁻¹]^a [L]^b [L T⁻¹]^c = [M]^a [L]^(-a + b + c) [T]^(-a - c).",
    "1. Equate mass powers: a = 1.\n2. Equate time powers: -a - c = -2  =>  -1 - c = -2  =>  c = 1.\n3. Equate length powers: -a + b + c = 1  =>  -1 + b + 1 = 1  =>  b = 1.\n4. Therefore: a = 1, b = 1, c = 1.\n5. This gives Stokes' Law: F = 6π η r v.",
    "NEET NCERT Milestone: Stokes' Law: F = 6πηrv. All powers are exactly 1!",
    "Options B, C, and D contain incorrect powers of radius, viscosity, or velocity."
))

qs.append(make_q(
    245,
    "The velocity of sound v in an ideal gas depends on pressure P and density ρ as v ∝ P^a ρ^b. The values of a and b are:",
    {"A": "a = 1/2, b = -1/2", "B": "a = 1/2, b = 1/2", "C": "a = 1, b = -1", "D": "a = -1/2, b = 1/2"},
    "A", "Medium", "Finding relationships between physical quantities",
    "Newton-Laplace formula for speed of sound in a gas.",
    "v = k P^a ρ^b. [v] = [L T⁻¹], [P] = [M L⁻¹ T⁻²], [ρ] = [M L⁻³].",
    "[L T⁻¹] = [M L⁻¹ T⁻²]^a [M L⁻³]^b = [M]^(a + b) [L]^(-a - 3b) [T]^(-2a).",
    "1. Equate mass powers: a + b = 0  =>  b = -a.\n2. Equate time powers: -2a = -1  =>  a = 1/2.\n3. Therefore, b = -1/2.\n4. Verify length power: -a - 3b = -1/2 - 3(-1/2) = -1/2 + 3/2 = 1 (matches [L¹]).\n5. Thus, v ∝ √(P / ρ).\n6. (Laplace correction gives v = √(γ P / ρ)).",
    "NEET Wave Physics: Speed of sound v = √(γ P / ρ)  =>  a = 1/2, b = -1/2.",
    "Option B has positive power on density. Option C has linear powers. Option D inverts the formula to √(ρ/P)."
))

qs.append(make_q(
    246,
    "The rate of volume flow of liquid Q (volume per second) through a capillary tube depends on pressure gradient (P / l), radius of tube r, and coefficient of viscosity η as Q ∝ (P / l)^a r^b η^c. The values of a, b, and c are:",
    {"A": "a = 1, b = 4, c = -1", "B": "a = 1, b = 2, c = -1", "C": "a = 2, b = 4, c = -1", "D": "a = 1, b = 3, c = 1"},
    "A", "Medium", "Finding relationships between physical quantities",
    "Poiseuille's formula derivation via dimensional analysis.",
    "Q = V / t = [L³ T⁻¹]. Pressure gradient (P / l) = [M L⁻² T⁻²]. Radius r = [L]. Viscosity η = [M L⁻¹ T⁻¹].",
    "[L³ T⁻¹] = [M L⁻² T⁻²]^a [L]^b [M L⁻¹ T⁻¹]^c = [M]^(a + c) [L]^(-2a + b - c) [T]^(-2a - c).",
    "1. Equate mass powers: a + c = 0  =>  c = -a.\n2. Equate time powers: -2a - c = -1  =>  -2a - (-a) = -1  =>  -a = -1  =>  a = 1.\n3. Since a = 1, c = -1.\n4. Equate length powers: -2a + b - c = 3  =>  -2(1) + b - (-1) = 3  =>  -2 + b + 1 = 3  =>  b - 1 = 3  =>  b = 4.\n5. Therefore: a = 1, b = 4, c = -1.\n6. This yields Poiseuille's formula: Q = (π P r⁴) / (8 η l).",
    "NEET Super-Important Rule: Poiseuille's formula has r⁴! Radius dependence is to the FOURTH power!",
    "Option B uses r² (which would give velocity, not volume flow). Option C squares pressure. Option D has r³."
))

qs.append(make_q(
    247,
    "The critical velocity v_c of a liquid flowing through a pipe depends on viscosity η, density ρ, and diameter D as v_c ∝ η^a ρ^b D^c. The values of a, b, and c are:",
    {"A": "a = 1, b = -1, c = -1", "B": "a = 1, b = 1, c = -1", "C": "a = -1, b = 1, c = 1", "D": "a = 1, b = -1, c = 1"},
    "A", "Medium", "Finding relationships between physical quantities",
    "Reynolds number and critical flow velocity.",
    "v_c ∝ η^a ρ^b D^c. [v_c] = [L T⁻¹], [η] = [M L⁻¹ T⁻¹], [ρ] = [M L⁻³], [D] = [L].",
    "[L T⁻¹] = [M L⁻¹ T⁻¹]^a [M L⁻³]^b [L]^c = [M]^(a + b) [L]^(-a - 3b + c) [T]^(-a).",
    "1. Equate time powers: -a = -1  =>  a = 1.\n2. Equate mass powers: a + b = 0  =>  1 + b = 0  =>  b = -1.\n3. Equate length powers: -a - 3b + c = 1  =>  -1 - 3(-1) + c = 1  =>  -1 + 3 + c = 1  =>  2 + c = 1  =>  c = -1.\n4. Therefore: a = 1, b = -1, c = -1.\n5. v_c ∝ η / (ρ D) = (R_e η) / (ρ D).",
    "NEET Fluid Dynamics: Critical velocity v_c = (N_R η) / (ρ D). Both density and diameter appear in the denominator!",
    "Option B has positive power on density. Option C has inverted powers. Option D has positive power on diameter."
))

qs.append(make_q(
    248,
    "The fundamental frequency ν of a vibrating stretched string depends on its length l, tension T, and mass per unit length μ (linear mass density) as ν ∝ l^a T^b μ^c. The values of a, b, and c are:",
    {"A": "a = -1, b = 1/2, c = -1/2", "B": "a = 1, b = 1/2, c = -1/2", "C": "a = -1, b = -1/2, c = 1/2", "D": "a = -1/2, b = 1/2, c = -1/2"},
    "A", "Medium", "Finding relationships between physical quantities",
    "Mersenne's laws of vibrating strings.",
    "ν ∝ l^a T^b μ^c. [ν] = [T⁻¹], [l] = [L], [T] = Force = [M L T⁻²], [μ] = Mass/Length = [M L⁻¹].",
    "[T⁻¹] = [L]^a [M L T⁻²]^b [M L⁻¹]^c = [M]^(b + c) [L]^(a + b - c) [T]^(-2b).",
    "1. Equate time powers: -2b = -1  =>  b = 1/2.\n2. Equate mass powers: b + c = 0  =>  1/2 + c = 0  =>  c = -1/2.\n3. Equate length powers: a + b - c = 0  =>  a + 1/2 - (-1/2) = 0  =>  a + 1 = 0  =>  a = -1.\n4. Therefore: a = -1, b = 1/2, c = -1/2.\n5. This gives ν = (1 / 2l) √(T / μ).",
    "NEET Wave Physics Law: Stretched string frequency ν = (1/2l)√(T/μ). Length l is inversely proportional (a = -1)!",
    "Option B has positive power on length. Option C has negative power on tension. Option D has fractional power on length."
))

qs.append(make_q(
    249,
    "The time period of oscillation T of a small liquid drop under surface tension depends on the drop radius r, density of liquid ρ, and surface tension S as T ∝ r^a ρ^b S^c. The values of a, b, and c are:",
    {"A": "a = 3/2, b = 1/2, c = -1/2", "B": "a = 1/2, b = 3/2, c = -1/2", "C": "a = 3/2, b = -1/2, c = 1/2", "D": "a = 1, b = 1/2, c = -1/2"},
    "A", "Medium", "Finding relationships between physical quantities",
    "Rayleigh's droplet oscillation period.",
    "T ∝ r^a ρ^b S^c. [T] = [T], [r] = [L], [ρ] = [M L⁻³], [S] = [M T⁻²].",
    "[T] = [L]^a [M L⁻³]^b [M T⁻²]^c = [M]^(b + c) [L]^(a - 3b) [T]^(-2c).",
    "1. Equate time powers: -2c = 1  =>  c = -1/2.\n2. Equate mass powers: b + c = 0  =>  b = -c = 1/2.\n3. Equate length powers: a - 3b = 0  =>  a = 3b = 3(1/2) = 3/2.\n4. Therefore: a = 3/2, b = 1/2, c = -1/2.\n5. This gives T ∝ √(ρ r³ / S).",
    "NEET Surface Tension Gem: Period of oscillating droplet T ∝ √(ρ r³ / S). Notice r has power 3 inside the square root!",
    "Option B swaps powers of r and ρ. Option C has positive power on S. Option D has linear power on r."
))

qs.append(make_q(
    250,
    "The energy E of a photon emitted in an atomic transition is proportional to h^a c^b λ^c, where h is Planck's constant, c is speed of light, and λ is wavelength. The values of a, b, and c are:",
    {"A": "a = 1, b = 1, c = -1", "B": "a = 1, b = -1, c = 1", "C": "a = 2, b = 1, c = -1", "D": "a = 1, b = 2, c = -1"},
    "A", "Medium", "Finding relationships between physical quantities",
    "De Broglie and Planck-Einstein photon energy relation.",
    "E = k h^a c^b λ^c. [E] = [M L² T⁻²], [h] = [M L² T⁻¹], [c] = [L T⁻¹], [λ] = [L].",
    "[M L² T⁻²] = [M L² T⁻¹]^a [L T⁻¹]^b [L]^c = [M]^a [L]^(2a + b + c) [T]^(-a - b).",
    "1. Equate mass powers: a = 1.\n2. Equate time powers: -a - b = -2  =>  -1 - b = -2  =>  b = 1.\n3. Equate length powers: 2a + b + c = 2  =>  2(1) + 1 + c = 2  =>  3 + c = 2  =>  c = -1.\n4. Therefore: a = 1, b = 1, c = -1.\n5. E = h c / λ.",
    "NEET Daily Formula: Photon energy E = h c / λ = 1240 eV·nm / λ(nm).",
    "Option B has negative power on c. Option C has h². Option D has c²."
))

qs.append(make_q(
    251,
    "The escape velocity v_e of a body from the surface of a planet depends on the gravitational constant G, mass of planet M, and radius R as v_e ∝ G^a M^b R^c. The values of a, b, and c are:",
    {"A": "a = 1/2, b = 1/2, c = -1/2", "B": "a = 1/2, b = -1/2, c = 1/2", "C": "a = 1, b = 1/2, c = -1/2", "D": "a = 1/2, b = 1/2, c = 1/2"},
    "A", "Medium", "Finding relationships between physical quantities",
    "Escape speed from a celestial body.",
    "v_e ∝ G^a M^b R^c. [v_e] = [L T⁻¹], [G] = [M⁻¹ L³ T⁻²], [M] = [M], [R] = [L].",
    "[L T⁻¹] = [M⁻¹ L³ T⁻²]^a [M]^b [L]^c = [M]^(-a + b) [L]^(3a + c) [T]^(-2a).",
    "1. Equate time powers: -2a = -1  =>  a = 1/2.\n2. Equate mass powers: -a + b = 0  =>  b = a = 1/2.\n3. Equate length powers: 3a + c = 1  =>  3(1/2) + c = 1  =>  c = 1 - 3/2 = -1/2.\n4. Therefore: a = 1/2, b = 1/2, c = -1/2.\n5. This gives v_e = √(2 G M / R).",
    "NEET Gravitation Standard: Escape velocity v_e = √(2GM/R) = √(2gR). All powers under the root are 1/2!",
    "Option B has negative mass power. Option C has a = 1. Option D has positive power on radius."
))

qs.append(make_q(
    252,
    "A physical quantity y depends on mass m, length L, time t, and electric current I as y = m^a L^b t^c I^d. If y represents magnetic dipole moment, then:",
    {"A": "a = 0, b = 2, c = 0, d = 1", "B": "a = 0, b = 1, c = 0, d = 1", "C": "a = 1, b = 2, c = -2, d = -1", "D": "a = 0, b = 2, c = -1, d = 1"},
    "A", "Medium", "Finding relationships between physical quantities",
    "Magnetic dipole moment dimensional exponents.",
    "Magnetic dipole moment M = I × A.",
    "[M] = [Current] × [Area] = [A][L²] = [M⁰ L² T⁰ A¹].",
    "1. Magnetic dipole moment of a current loop is M = I · A.\n2. Current has dimension I (or A) with power d = 1.\n3. Area has dimension L² with power b = 2.\n4. Mass m has power a = 0.\n5. Time t has power c = 0.\n6. Exponents: a = 0, b = 2, c = 0, d = 1.",
    "NEET Direct Hit: Magnetic dipole moment M = I A has dimensions [L² A] (or [M⁰ L² T⁰ A¹]).",
    "Option B has b = 1 (pole strength m = I·l). Option C is magnetic flux. Option D includes time."
))

qs.append(make_q(
    253,
    "Assuming that the mass M of the largest stone that can be moved by a flowing river depends upon the velocity of flow v, density of water ρ, and acceleration due to gravity g as M ∝ v^a ρ^b g^c, the value of exponent a is:",
    {"A": "6", "B": "4", "C": "3", "D": "2"},
    "A", "Hard", "Finding relationships between physical quantities",
    "River scouring capacity and Sixth Power Law of velocity.",
    "M ∝ v^a ρ^b g^c. [M] = [M], [v] = [L T⁻¹], [ρ] = [M L⁻³], [g] = [L T⁻²].",
    "[M] = [L T⁻¹]^a [M L⁻³]^b [L T⁻²]^c = [M]^b [L]^(a - 3b + c) [T]^(-a - 2c).",
    "1. Equate mass powers: b = 1.\n2. Equate length powers: a - 3b + c = 0  =>  a - 3(1) + c = 0  =>  a + c = 3  =>  c = 3 - a.\n3. Equate time powers: -a - 2c = 0  =>  a + 2c = 0.\n4. Substitute c = 3 - a:\n   a + 2(3 - a) = 0  =>  a + 6 - 2a = 0  =>  -a + 6 = 0  =>  a = 6!\n5. (Find c: c = 3 - 6 = -3. So M ∝ v⁶ ρ / g³).\n6. Therefore, a = 6.",
    "NEET Legendary Problem: The maximum mass of a boulder moved by a river varies with the SIXTH power of water velocity: M ∝ v⁶! Double the river speed, boulder mass increases by 2⁶ = 64 times!",
    "Options B, C, and D severely underestimate the velocity exponent (4, 3, and 2)."
))

qs.append(make_q(
    254,
    "A physical quantity Q depends on Planck's constant h, velocity of light c, and universal gravitational constant G such that Q has the dimensions of time. Then Q is proportional to:",
    {"A": "√(h G / c⁵)", "B": "√(h c / G)", "C": "√(h G / c³)", "D": "√(G c⁵ / h)"},
    "A", "Hard", "Finding relationships between physical quantities",
    "Planck time derivation.",
    "Q = t_p ∝ h^a c^b G^c. [Q] = [T], [h] = [M L² T⁻¹], [c] = [L T⁻¹], [G] = [M⁻¹ L³ T⁻²].",
    "[T] = [M L² T⁻¹]^a [L T⁻¹]^b [M⁻¹ L³ T⁻²]^c = [M]^(a - c) [L]^(2a + b + 3c) [T]^(-a - b - 2c).",
    "1. Mass equation: a - c = 0  =>  a = c.\n2. Length equation: 2a + b + 3c = 0  =>  2a + b + 3a = 0  =>  5a + b = 0  =>  b = -5a.\n3. Time equation: -a - b - 2c = 1  =>  -a - (-5a) - 2a = 1  =>  -a + 5a - 2a = 1  =>  2a = 1  =>  a = 1/2.\n4. Since a = 1/2: c = 1/2, and b = -5(1/2) = -5/2.\n5. Therefore: Q ∝ h^(1/2) G^(1/2) c^(-5/2) = √(h G / c⁵).\n6. This is Planck Time (t_p ≈ 5.39 × 10⁻⁴⁴ s).",
    "NEET Planck Quantities Summary: Planck time = √(hG/c⁵); Planck length = √(hG/c³); Planck mass = √(hc/G). Memorize all three!",
    "Option B is Planck mass. Option C is Planck length. Option D has inverted constants."
))

qs.append(make_q(
    255,
    "The lift force L on an airplane wing depends on air density ρ, flight speed v, wing area A, and a dimensionless lift coefficient C_L as L = (1/2) C_L ρ^a v^b A^c. The values of a, b, and c are:",
    {"A": "a = 1, b = 2, c = 1", "B": "a = 1, b = 1, c = 1", "C": "a = 1, b = 2, c = 2", "D": "a = 2, b = 2, c = 1"},
    "A", "Hard", "Finding relationships between physical quantities",
    "Aerodynamic lift force equation.",
    "L = (1/2) C_L ρ^a v^b A^c. [L] = Force = [M L T⁻²], [ρ] = [M L⁻³], [v] = [L T⁻¹], [A] = [L²].",
    "[M L T⁻²] = [M L⁻³]^a [L T⁻¹]^b [L²]^c = [M]^a [L]^(-3a + b + 2c) [T]^(-b).",
    "1. Equate mass powers: a = 1.\n2. Equate time powers: -b = -2  =>  b = 2.\n3. Equate length powers: -3a + b + 2c = 1  =>  -3(1) + 2 + 2c = 1  =>  -1 + 2c = 1  =>  2c = 2  =>  c = 1.\n4. Therefore: a = 1, b = 2, c = 1.\n5. The aerodynamic lift formula is L = (1/2) C_L ρ v² A.",
    "NEET Fluid Dynamics Formula: Lift Force L = (1/2) C_L ρ v² A. Notice that dynamic pressure is (1/2)ρv² multiplied by wing area A!",
    "Option B has linear velocity. Option C squares area. Option D squares density."
))

# ==============================================================================
# Group 8 (256-270): Limitations and applications of dimensional analysis
# 4 Easy, 7 Medium, 4 Hard
# ==============================================================================
qs.append(make_q(
    256,
    "Which of the following is an intrinsic limitation of dimensional analysis?",
    {"A": "It cannot determine dimensionless proportionality constants.", "B": "It cannot check the dimensional consistency of equations.", "C": "It cannot be used to convert units from one system to another.", "D": "It cannot find the dimensions of derived physical quantities."},
    "A", "Easy", "Limitations and applications of dimensional analysis",
    "Limitations of the method of dimensions.",
    "Method of dimensional analysis.",
    "Dimensional analysis cannot calculate numerical pure constants such as 1/2, 2π, or √2.",
    "1. Dimensional analysis deals strictly with powers of base dimensions [M], [L], [T], etc.\n2. Numerical factors like 2π in T = 2π√(l/g) or 1/2 in K = (1/2)mv² are pure dimensionless numbers [M⁰ L⁰ T⁰] and cannot be determined by this method.\n3. These constants must be obtained either through experiment or rigorous mathematical calculus.\n4. On the other hand, checking consistency, converting units, and finding derived dimensions are all standard applications of dimensional analysis.",
    "NEET NCERT Limitation #1: Dimensionless constants (e.g., 2π, 1/2, 6π) CANNOT be derived dimensionally—they require experimental determination.",
    "Options B, C, and D describe valid applications, not limitations."
))

qs.append(make_q(
    257,
    "Dimensional analysis FAILS to derive a formula when a physical quantity depends on:",
    {"A": "More than three independent mechanical variables (M, L, T)", "B": "Exactly three variables", "C": "Variables having different dimensions", "D": "Variables with negative powers"},
    "A", "Easy", "Limitations and applications of dimensional analysis",
    "Degrees of freedom limitation in mechanical dimensional equations.",
    "Mechanical quantities in [M, L, T].",
    "We only have three independent dimensional equations (one each for powers of M, L, and T).",
    "1. In mechanics, any dimensional equation yields at most three algebraic equations (by equating exponents of M, L, and T).\n2. If a physical quantity depends on four or more independent variables, we get more unknowns than available linear equations.\n3. Hence, a unique power-law relation cannot be determined without additional physical constraints.",
    "NEET NCERT Limitation #2: If a quantity depends on >3 factors involving M, L, and T, the 3 algebraic equations cannot uniquely solve for 4+ unknowns!",
    "Options B, C, and D are conditions under which dimensional analysis works reliably."
))

qs.append(make_q(
    258,
    "Can dimensional analysis derive an equation containing a sum or difference of terms, such as s = u t + (1/2) a t²?",
    {"A": "No, because it can only establish product-power relations.", "B": "Yes, by adding the dimensions directly.", "C": "Yes, if the time is squared.", "D": "Yes, but only for scalar quantities."},
    "A", "Easy", "Limitations and applications of dimensional analysis",
    "Inability to derive multi-term addition equations.",
    "Kinematic equation s = u t + (1/2) a t².",
    "Method of dimensions assumes a single product relation Q = k A^a B^b C^c.",
    "1. Dimensional analysis assumes that the dependent quantity can be expressed as a monomial: Q = k X^a Y^b Z^c.\n2. It cannot deduce whether an equation consists of a sum of multiple terms (such as s = ut + (1/2)at² or v² = u² + 2as).\n3. It can only TEST the dimensional consistency of each term in a sum, but cannot derive the additive structure itself.",
    "NEET NCERT Limitation #3: Equations containing sums/differences of terms cannot be derived dimensionally—only tested for homogeneity!",
    "Options B, C, and D are incorrect claims."
))

qs.append(make_q(
    259,
    "Which of the following functions CANNOT be present in a formula derived solely by dimensional analysis?",
    {"A": "Trigonometric, exponential, and logarithmic functions", "B": "Polynomial functions of degree 1", "C": "Square root functions", "D": "Inverse linear functions"},
    "A", "Easy", "Limitations and applications of dimensional analysis",
    "Transcendental functions limitation in dimensional analysis.",
    "Trigonometric (sin, cos), exponential (e^x), and logarithmic (ln x) functions.",
    "Arguments of transcendental functions must be dimensionless numbers.",
    "1. Transcendental functions such as sin(θ), cos(θ), e^x, and ln(x) are defined via infinite series of pure numbers.\n2. Dimensional analysis assumes power-law relations Q ∝ X^a Y^b Z^c.\n3. It cannot predict or derive relationships involving trigonometric, exponential, or logarithmic functions.",
    "NEET NCERT Limitation #4: Formulas involving sin, cos, e^x, or ln(x) cannot be derived using dimensional analysis.",
    "Options B, C, and D can all be derived using standard dimensional power matching."
))

qs.append(make_q(
    260,
    "Even if an equation is dimensionally correct, it may NOT be physically correct because:",
    {"A": "A dimensionless numerical constant in the equation may be wrong or missing.", "B": "The dimensions of base units change with temperature.", "C": "Physical quantities lose their dimensions at high speeds.", "D": "Vectors and scalars cannot have the same dimensions."},
    "A", "Medium", "Limitations and applications of dimensional analysis",
    "Dimensional correctness vs physical correctness.",
    "A dimensionally homogeneous equation.",
    "Dimensional consistency is a necessary condition, but NOT a sufficient condition for physical correctness.",
    "1. An equation is physically correct only if both its dimensions and numerical coefficients are accurate.\n2. For instance, the equation s = 2 u t + 5 a t² is completely dimensionally correct (all terms have dimension [L]).\n3. However, it is physically WRONG because the correct kinematic equation is s = u t + (1/2) a t².\n4. Dimensional analysis cannot detect errors in dimensionless numerical factors.",
    "NEET Cardinal Rule: A dimensionally correct equation may or may not be physically correct. But a dimensionally WRONG equation is GUARANTEED to be physically wrong!",
    "Options B and C are scientifically false statements. Option D is true but not the reason."
))

qs.append(make_q(
    261,
    "Can dimensional analysis determine whether a physical quantity is a scalar or a vector?",
    {"A": "No, because dimensions only convey magnitude units and contain no directional information.", "B": "Yes, vectors always have negative powers of time.", "C": "Yes, scalars always have positive powers of mass.", "D": "Yes, vectors have fractional powers of length."},
    "A", "Medium", "Limitations and applications of dimensional analysis",
    "Absence of directional information in dimensional formulae.",
    "Scalar vs vector quantities.",
    "Dimensional formulae [M^a L^b T^c] represent algebraic powers of fundamental quantities, with no directional vector components.",
    "1. Dimensions specify what fundamental units are involved in a physical quantity.\n2. For example, Work (scalar) and Torque (vector) have the identical dimensional formula [M L² T⁻²].\n3. Similarly, Speed (scalar) and Velocity (vector) both have dimensions [L T⁻¹].\n4. Dimensional analysis contains no spatial directional vector operators and therefore cannot distinguish between scalars and vectors.",
    "NEET NCERT Limitation #5: Dimensional analysis CANNOT tell whether a quantity is a scalar or a vector (e.g. Work vs Torque, Speed vs Velocity).",
    "Options B, C, and D are baseless rules."
))

qs.append(make_q(
    262,
    "Which of the following equations CANNOT be derived using dimensional analysis, even though all variables are known?",
    {"A": "T = 2π √(l / g)", "B": "v² = u² + 2 a s", "C": "F = 6π η r v", "D": "v = √(γ P / ρ)"},
    "B", "Medium", "Limitations and applications of dimensional analysis",
    "Distinguishing derivable monomial equations from additive kinematic equations.",
    "Equations: T = 2π√(l/g), v² = u² + 2as, F = 6πηrv, v = √(γP/ρ).",
    "Additive multi-term equations cannot be derived by the monomial assumption of dimensional analysis.",
    "1. T ∝ l^a g^b can be derived dimensionally up to the constant 2π.\n2. F ∝ η^a r^b v^c can be derived dimensionally up to the constant 6π.\n3. v ∝ P^a ρ^b can be derived dimensionally up to the constant √γ.\n4. However, v² = u² + 2as involves the addition of two distinct terms (u² and 2as). It is impossible to derive additive structures using dimensional analysis.",
    "NEET Identification Rule: Look for the plus '+' sign! Any formula with a '+' or '-' cannot be derived using dimensional analysis!",
    "Options A, C, and D are all single-term product formulas that can be derived dimensionally."
))

qs.append(make_q(
    263,
    "A student writes the equation for the distance fallen by an object from rest under gravity as s = (1/3) g t². Testing this equation with dimensional analysis shows that:",
    {"A": "The equation is dimensionally correct, but physically incorrect.", "B": "The equation is both dimensionally and physically correct.", "C": "The equation is dimensionally incorrect.", "D": "Dimensional analysis cannot be applied to gravity."},
    "A", "Medium", "Limitations and applications of dimensional analysis",
    "Distinguishing dimensional correctness from physical validity.",
    "Equation s = (1/3) g t².",
    "[s] = [L]; [(1/3) g t²] = [1][L T⁻²][T²] = [L].",
    "1. Left-hand side: [s] = [L].\n2. Right-hand side: The factor 1/3 is dimensionless [1].\n3. [g t²] = [L T⁻²][T²] = [L].\n4. LHS = RHS dimensionally, so the equation is dimensionally correct.\n5. However, from kinematic integration s = ∫ v dt = ∫ g t dt = (1/2) g t².\n6. The factor 1/3 is physically wrong. Thus, the equation is dimensionally correct but physically incorrect.",
    "NEET Conceptual Trap: Dimensional analysis checks power balancing, NOT numerical accuracy! s = (1/3)gt² is dimensionally correct, but physically wrong!",
    "Option B claims it is physically correct. Option C claims it is dimensionally incorrect. Option D is false."
))

qs.append(make_q(
    264,
    "If a physical quantity depends on three quantities P, Q, and R, and two of them have the same dimensional formula, can dimensional analysis be used to derive the relation?",
    {"A": "No, because the exponents cannot be uniquely solved.", "B": "Yes, by adding their dimensions together.", "C": "Yes, by ignoring one of the quantities.", "D": "Yes, because three equations are still available."},
    "A", "Medium", "Limitations and applications of dimensional analysis",
    "Degeneracy in dimensional equations when two variables have identical dimensions.",
    "Quantity X depends on P, Q, and R, where [P] = [Q].",
    "If [P] = [Q], their exponents cannot be independently determined from linear dimensional equations.",
    "1. Suppose X ∝ P^a Q^b R^c. Since P and Q have identical dimensions [P] = [Q], their dimensional powers combine into a single term [P]^(a + b).\n2. This reduces the number of independent dimensional variables from 3 to 2.\n3. We end up with fewer independent variables than needed, making it impossible to solve for 'a' and 'b' separately.\n4. Hence, dimensional analysis fails when two governing parameters share the same dimensional formula.",
    "NEET Advanced Limitation: If two controlling variables have the same dimensions (e.g. two lengths, or two energies), dimensional analysis CANNOT separate their exponents!",
    "Options B, C, and D are invalid procedures."
))

qs.append(make_q(
    265,
    "Which of the following is a successful, valid application of dimensional analysis?",
    {"A": "Checking the dimensional consistency of a complex physical equation", "B": "Converting a physical quantity from SI units to CGS units", "C": "Deducing relations among physical quantities", "D": "All of the above"},
    "D", "Medium", "Limitations and applications of dimensional analysis",
    "Primary applications of dimensional analysis in physics.",
    "The method of dimensional analysis.",
    "Three primary applications: (1) Checking consistency, (2) Unit conversion (n₁u₁ = n₂u₂), (3) Deriving relations.",
    "1. Application 1: Verifying whether an equation satisfies the principle of homogeneity.\n2. Application 2: Converting numerical values across different unit systems using n₂ = n₁ [M₁/M₂]^a [L₁/L₂]^b [T₁/T₂]^c.\n3. Application 3: Deriving power-law relationships between physical quantities.\n4. All three are core, standard applications of dimensional analysis taught in NCERT Class 11 Physics.",
    "NEET NCERT Summary: The three foundational applications of dimensional analysis are checking homogeneity, unit conversion, and deriving formulas.",
    "Options A, B, and C are all individually correct, making D the complete correct answer."
))

qs.append(make_q(
    266,
    "A formula for the pressure P exerted by a gas is proposed as P = (1/3) ρ v_rms². A student tests this formula dimensionally. What should the student conclude?",
    {"A": "The equation is dimensionally correct because [ρ v_rms²] = [M L⁻¹ T⁻²] = [P].", "B": "The equation is dimensionally incorrect because 1/3 has units.", "C": "The equation is dimensionally incorrect because v_rms has no dimensions.", "D": "The equation is dimensionally correct, but 1/3 must have dimensions of force."},
    "A", "Medium", "Limitations and applications of dimensional analysis",
    "Kinetic theory pressure formula verification.",
    "P = (1/3) ρ v_rms².",
    "[P] = [M L⁻¹ T⁻²]. [ρ] = [M L⁻³], [v_rms] = [L T⁻¹]  =>  [ρ v_rms²] = [M L⁻³][L² T⁻²] = [M L⁻¹ T⁻²].",
    "1. Left-hand side: Pressure P = Force / Area = [M L T⁻²] / [L²] = [M L⁻¹ T⁻²].\n2. Right-hand side: Factor 1/3 is a dimensionless pure number.\n3. Density ρ = [M L⁻³].\n4. Velocity squared v_rms² = [L² T⁻²].\n5. Product: [ρ v_rms²] = [M L⁻³][L² T⁻²] = [M L⁻¹ T⁻²].\n6. LHS = RHS dimensionally. The formula is dimensionally correct (and from kinetic theory, it is also physically correct!).",
    "NEET Kinetic Theory Link: P = (1/3) ρ v_rms² is both dimensionally and physically correct in thermodynamics!",
    "Options B, C, and D state incorrect dimensional premises."
))

qs.append(make_q(
    267,
    "Why does dimensional analysis fail to derive the formula for the time period of a simple pendulum when the angular amplitude θ₀ is large?",
    {"A": "Because the period becomes dependent on a dimensionless variable θ₀ via an infinite series: T = 2π √(l/g) [1 + (1/4) sin²(θ₀/2) + ...]", "B": "Because the string breaks at large amplitudes.", "C": "Because gravity ceases to act at large angles.", "D": "Because the mass of the bob changes with angle."},
    "A", "Hard", "Limitations and applications of dimensional analysis",
    "Nonlinear pendulum and dimensionless angle functions.",
    "Simple pendulum at large amplitude θ₀.",
    "T = 2π √(l/g) · f(θ₀), where f(θ₀) is a dimensionless infinite series.",
    "1. For small amplitudes (θ₀ << 1), sin θ ≈ θ, and the period is independent of amplitude: T = 2π √(l/g).\n2. For large amplitudes, the exact equation of motion is nonlinear: d²θ/dt² + (g/l) sin θ = 0.\n3. The exact period is given by an elliptic integral: T = 2π √(l/g) [1 + (1/4) sin²(θ₀/2) + (9/64) sin⁴(θ₀/2) + ...].\n4. Since θ₀ is dimensionless, dimensional analysis cannot predict the presence or functional form of f(θ₀).",
    "NEET Deep Concept: Dimensional analysis cannot determine any arbitrary dimensionless function f(θ₀) of dimensionless variables!",
    "Options B, C, and D are physically incorrect or irrelevant."
))

qs.append(make_q(
    268,
    "A student attempts to derive a formula for the heat energy H produced in a resistor using dimensional analysis by assuming H depends on current I, resistance R, and time t as H ∝ I^a R^b t^c. Why does dimensional analysis succeed in this case?",
    {"A": "Because heat has mechanical dimensions and current is a base SI quantity, giving 4 equations for 3 variables.", "B": "Because heat is dimensionless.", "C": "Because resistance has no dimensions.", "D": "Because time is squared."},
    "A", "Hard", "Limitations and applications of dimensional analysis",
    "Application of dimensional analysis in electrical systems.",
    "H ∝ I^a R^b t^c.",
    "[H] = [M L² T⁻²], [I] = [A], [R] = [M L² T⁻³ A⁻²], [t] = [T].",
    "1. Heat energy H has dimensions [M L² T⁻²].\n2. The governing variables are: I = [A], R = [M L² T⁻³ A⁻²], and t = [T].\n3. Equate dimensions: [M L² T⁻²] = [A]^a [M L² T⁻³ A⁻²]^b [T]^c = [M]^b [L]^(2b) [T]^(-3b + c) [A]^(a - 2b).\n4. Equating exponents:\n   Mass: b = 1\n   Current: a - 2b = 0  =>  a = 2(1) = 2\n   Time: -3b + c = -2  =>  -3(1) + c = -2  =>  c = 1.\n5. This yields H ∝ I² R t (Joule's law of heating!).\n6. The derivation succeeds because the electrical system provides four base dimensions (M, L, T, A) for three unknowns.",
    "NEET Joule Heating Milestone: Joule's Law H = I² R t is derived purely by dimensional analysis: a = 2, b = 1, c = 1!",
    "Options B, C, and D make scientifically absurd claims."
))

qs.append(make_q(
    269,
    "The method of dimensional analysis CANNOT be used to derive the relation for the distance traveled by a uniformly accelerated body in the n-th second: s_nth = u + (1/2) a (2n - 1). Why does this equation appear dimensionally inconsistent at first glance?",
    {"A": "Because s_nth is distance traveled per unit time (velocity), and the number 1 represents 1 second.", "B": "Because the acceleration a is not constant.", "C": "Because the initial velocity u is zero.", "D": "Because n is a vector quantity."},
    "A", "Hard", "Limitations and applications of dimensional analysis",
    "Dimensional consistency of n-th second displacement formula.",
    "Equation: s_nth = u + (1/2) a (2n - 1).",
    "s_nth = s_n - s_(n-1) = displacement in a 1-second interval. Its true physical unit is m / (1 s).",
    "1. Students often think s_nth is a distance [L], while u is velocity [L T⁻¹] and (1/2)a(2n - 1) is [L T⁻²][T] = [L T⁻¹], leading to apparent contradiction.\n2. In reality, s_nth is the displacement during a specific interval of Δt = 1 second: s_nth = u · (1 s) + (1/2) a (2n - 1 s) · (1 s).\n3. The hidden time factor of (1 s) is omitted numerically, giving the terms apparent dimensions of velocity [L T⁻¹].\n4. Because of this implicit time interval, dimensional analysis cannot be used to deduce this specific n-th second formula without explicit time dimensional accounting.",
    "NEET High-Yield Trap Buster: In s_nth = u + (1/2)a(2n - 1), every term is multiplied by a hidden (1 second)! All terms have dimensions of [L] when written fully!",
    "Options B, C, and D are false."
))

qs.append(make_q(
    270,
    "Which of the following physical relations CANNOT be derived by dimensional analysis alone, but CAN be checked for dimensional consistency?",
    {"A": "y = a sin(ω t)", "B": "E = m c²", "C": "F = G m₁ m₂ / r²", "D": "v = u + a t"},
    "A", "Hard", "Limitations and applications of dimensional analysis",
    "Trigonometric relations: testing vs deriving.",
    "Four equations: y = a sin(ωt), E = mc², F = G m₁m₂/r², v = u + at.",
    "Dimensional analysis can check that [y] = [a] and [ωt] = 1 in y = a sin(ωt), but cannot derive the sine function.",
    "1. In y = a sin(ω t), the sine function is transcendental. Dimensional analysis can test that [y] = [a] = [L] and [ω t] = 1, confirming consistency.\n2. However, it is fundamentally impossible to DERIVE the sine function using the power-law method of dimensions.\n3. (Note that v = u + at is also additive, but Option A tests a transcendental function, which represents the classic limitation).",
    "NEET Summary Rule: Any formula with sin, cos, tan, log, or exponential CAN be checked for consistency, but CANNOT be derived dimensionally!",
    "Options B and C are single-term monomial relations. Option D is an additive kinematic relation."
))

print(f"All 120 questions for Part 2 generated: {len(qs)} questions.")

with open('scripts/part2_qs.json', 'w', encoding='utf-8') as f:
    json.dump(qs, f, indent=2)

# Write src/data/chapterwise/physics/unitsPart2.ts
ts_out = '''import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';

export const UNITS_PART2_MCQS: ChapterwiseMCQ[] = ''' + json.dumps(qs, indent=2, ensure_ascii=False) + ';\n'

with open('src/data/chapterwise/physics/unitsPart2.ts', 'w', encoding='utf-8') as f:
    f.write(ts_out)

print("src/data/chapterwise/physics/unitsPart2.ts written successfully!")
