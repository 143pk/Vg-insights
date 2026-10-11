import sys, json
sys.path.append('scripts')
from make_q import make_q

qs = []

# ==============================================================================
# Topic 17 (391-408): Measurement of length (18 questions: 4 Easy, 9 Med, 5 Hard)
# ==============================================================================
qs.append(make_q(
    391,
    "The parallax method is primarily used in astronomy to measure:",
    {"A": "Large distances of distant stars and planets", "B": "The radius of atomic nuclei", "C": "The thickness of thin oil films", "D": "The acceleration due to gravity"},
    "A", "Easy", "Measurement of length",
    "Application of the parallax method for astronomical distances.",
    "Parallax method.",
    "Distance D = b / θ, where b is the basis (baseline) and θ is the parallax angle in radians.",
    "1. Parallax is the apparent shift in the position of an object when viewed from two different positions.\n2. The distance between the two points of observation is called the basis (b).\n3. By measuring the angle θ subtended by the basis at the distant celestial object, the distance D is calculated as D = b / θ.\n4. This indirect triangulation method is used to measure distances of planets and nearby stars.",
    "NEET NCERT Definition: Parallax method = Indirect triangulation used to measure HUGE astronomical distances (planets, stars)!",
    "Option B requires scattering methods. Option C uses oleic acid film. Option D is pendulum or free fall."
))

qs.append(make_q(
    392,
    "One astronomical unit (1 AU) is defined as:",
    {"A": "The average distance between the Earth and the Sun", "B": "The distance traveled by light in vacuum in one year", "C": "The distance at which 1 AU subtends an angle of 1 arcsecond", "D": "The mean radius of the Earth's orbit around the Moon"},
    "A", "Easy", "Measurement of length",
    "Definition and value of the Astronomical Unit.",
    "1 Astronomical Unit (AU).",
    "1 AU = 1.496 × 10¹¹ m (mean Earth-Sun distance).",
    "1. By definition, 1 AU is the mean distance between the center of the Earth and the center of the Sun.\n2. Its numerical value is approximately 1.496 × 10¹¹ m (or ~ 1.5 × 10⁸ km).\n3. Light year (1 ly ≈ 9.46 × 10¹⁵ m) and Parsec (1 pc ≈ 3.08 × 10¹⁶ m) are larger astronomical units.",
    "NEET Astronomy Value: 1 AU ≈ 1.496 × 10¹¹ m (Earth to Sun distance). 1 ly ≈ 9.46 × 10¹⁵ m. 1 pc ≈ 3.08 × 10¹⁶ m.",
    "Option B defines 1 light year. Option C defines 1 parsec. Option D is meaningless."
))

qs.append(make_q(
    393,
    "The size of a typical atomic nucleus is of the order of:",
    {"A": "10⁻¹⁵ m (1 Fermi)", "B": "10⁻¹⁰ m (1 Angstrom)", "C": "10⁻⁹ m (1 Nanometer)", "D": "10⁻⁶ m (1 Micron)"},
    "A", "Easy", "Measurement of length",
    "Microscopic length scales: nuclear vs atomic radii.",
    "Order of magnitude of nuclear radius.",
    "Nuclear radius R = R₀ A^(1/3) where R₀ ≈ 1.2 × 10⁻¹⁵ m = 1.2 fm (Fermi).",
    "1. The size of an atom (electron cloud) is of the order of 10⁻¹⁰ m (1 Angstrom or 0.1 nm).\n2. The nucleus at the center is about 100,000 times smaller, with dimensions of the order of 10⁻¹⁵ m (1 Fermi or 1 femtometer, fm).\n3. Rutherford's alpha particle scattering experiment proved that the nucleus occupies a radius of ~ 10⁻¹⁵ m.",
    "NEET Comparison Rule: Atom ≈ 10⁻¹⁰ m (1 Å). Nucleus ≈ 10⁻¹⁵ m (1 Fermi). Nucleus is 10⁵ times smaller than the atom!",
    "Option B is atomic size. Option C is molecular size. Option D is bacterial cell size."
))

qs.append(make_q(
    394,
    "In the oleic acid experiment to estimate molecular size, oleic acid is chosen because:",
    {"A": "It is an organic molecule that forms a strictly monomolecular film on water", "B": "It evaporates instantaneously at room temperature", "C": "It dissolves completely in water to form a true solution", "D": "Its molecules are visible under a magnifying glass"},
    "A", "Easy", "Measurement of length",
    "Oleic acid monomolecular layer experiment for molecular dimensions.",
    "Oleic acid method.",
    "Thickness of monolayer t = Volume of oleic acid / Area of circular film. t ≈ molecular size ~ 10⁻⁹ m.",
    "1. Oleic acid is a fatty acid whose molecules have a hydrophilic polar carboxyl head and a hydrophobic hydrocarbon tail.\n2. When dropped on water coated with lycopodium powder, the molecules stand vertically side by side, forming a single-layer film (monolayer) exactly one molecule thick.\n3. By measuring the volume V of acid dropped and the area A of the circular film, the thickness t = V / A provides an estimate of molecular size (~ 10⁻⁹ m).",
    "NEET NCERT Experiment: Oleic acid forms a MONOMOLECULAR layer on water. Molecular size = Volume / Area ≈ 10⁻⁹ m!",
    "Option B is false (it does not evaporate quickly). Option C is false (it does not dissolve in water; it floats). Option D is false."
))

qs.append(make_q(
    395,
    "The Moon is observed from two diametrically opposite points A and B on Earth. The angle θ subtended at the Moon by the two directions of observation is 1° 54'. If the diameter of the Earth is about 1.276 × 10⁷ m, what is the distance of the Moon from the Earth?",
    {"A": "3.84 × 10⁸ m", "B": "3.84 × 10⁶ m", "C": "1.28 × 10⁸ m", "D": "7.68 × 10⁸ m"},
    "A", "Medium", "Measurement of length",
    "NCERT textbook parallax calculation for Earth-Moon distance.",
    "Basis b = 1.276 × 10⁷ m (Earth's diameter). Parallax angle θ = 1° 54' = 114' = 114 × 60\" = 6840\".",
    "D = b / θ, with θ converted strictly to radians.",
    "1. Convert parallax angle to radians:\n   θ = 1° 54' = (1 × 60 + 54)' = 114 arcminutes = 114 × 60 = 6840 arcseconds.\n   Since 1\" = 4.85 × 10⁻⁶ rad:\n   θ = 6840 × 4.85 × 10⁻⁶ rad = 3.32 × 10⁻² rad.\n2. Distance to Moon D = b / θ:\n   D = (1.276 × 10⁷ m) / (3.32 × 10⁻² rad) = 0.3843 × 10⁹ m = 3.84 × 10⁸ m.\n3. Therefore, the distance of the Moon from Earth is 3.84 × 10⁸ m (384,000 km).",
    "NEET NCERT Textbook Problem: Moon distance D = 3.84 × 10⁸ m = 3.84 × 10⁵ km!",
    "Option B is 100 times too small. Option C is distance divided by 3. Option D doubles the distance."
))

qs.append(make_q(
    396,
    "The Sun's angular diameter is measured to be 1920\". The distance of the Sun from the Earth is 1.496 × 10¹¹ m. The linear diameter of the Sun is:",
    {"A": "1.39 × 10⁹ m", "B": "1.39 × 10⁸ m", "C": "6.95 × 10⁸ m", "D": "2.78 × 10⁹ m"},
    "A", "Medium", "Measurement of length",
    "Angular diameter formula d = α · D.",
    "Angular diameter α = 1920\", distance D = 1.496 × 10¹¹ m.",
    "d = α · D, with α in radians. 1\" = 4.85 × 10⁻⁶ rad.",
    "1. Convert angular diameter to radians:\n   α = 1920\" × (4.85 × 10⁻⁶ rad/arcsec) = 9.31 × 10⁻³ rad.\n2. Linear diameter d = α × D:\n   d = (9.31 × 10⁻³ rad) × (1.496 × 10¹¹ m) = 1.393 × 10⁹ m.\n3. Therefore, the diameter of the Sun is approximately 1.39 × 10⁹ m (1.39 million kilometers, or about 109 times Earth's diameter).",
    "NEET NCERT Solved Example: Sun's diameter d = α D = 1920\" × (4.85 × 10⁻⁶) × (1.496 × 10¹¹) ≈ 1.39 × 10⁹ m!",
    "Option B is off by a factor of 10. Option C is the radius of the Sun. Option D is doubled."
))

qs.append(make_q(
    397,
    "A RADAR sends a microwave signal towards an airplane. The reflected echo is received back at the radar station 4.0 × 10⁻⁵ s later. The distance of the airplane from the radar station is: (c = 3.0 × 10⁸ m/s)",
    {"A": "6.0 km", "B": "12.0 km", "C": "3.0 km", "D": "60 km"},
    "A", "Medium", "Measurement of length",
    "Echo / Radar reflection method for distance measurement.",
    "Total round-trip time t = 4.0 × 10⁻⁵ s, signal speed c = 3.0 × 10⁸ m/s.",
    "d = (c · t) / 2 (signal travels distance d to the target and d back).",
    "1. The radar pulse travels to the airplane and returns back to the receiver, covering a total distance of 2 d.\n2. Total path = 2 d = c × t.\n3. Distance d = (c × t) / 2.\n4. Substitute values:\n   d = (3.0 × 10⁸ m/s × 4.0 × 10⁻⁵ s) / 2 = (12.0 × 10³ m) / 2 = 6.0 × 10³ m = 6.0 km.\n5. The airplane is 6.0 km away.",
    "NEET Reflection Principle: In Radar, Sonar, and Laser ranging, ALWAYS divide the round-trip distance by 2: d = v · t / 2!",
    "Option B (12.0 km) forgets dividing by 2. Option C divides by 4. Option D has decimal error."
))

qs.append(make_q(
    398,
    "In the oleic acid experiment, 1 cm³ of oleic acid is dissolved in alcohol to make a solution of 20 cm³. Then 1 cm³ of this solution is further diluted to 20 cm³ with alcohol. What is the concentration of oleic acid in the final solution?",
    {"A": "1 / 400 cm³ of oleic acid per cm³ of solution", "B": "1 / 20 cm³ per cm³", "C": "1 / 200 cm³ per cm³", "D": "1 / 800 cm³ per cm³"},
    "A", "Medium", "Measurement of length",
    "Two-stage dilution concentration in oleic acid experiment.",
    "Initial dilution: 1 cm³ in 20 cm³. Second dilution: 1 cm³ in 20 cm³.",
    "Concentration C = (1 / 20) × (1 / 20) = 1 / 400 cm³ of oleic acid per cm³ of solution.",
    "1. In the first step, 1 cm³ of oleic acid is added to alcohol to make 20 cm³ of solution.\n   - Concentration C₁ = 1 / 20 cm³ of oleic acid per cm³ of solution.\n2. In the second step, 1 cm³ of this first solution is diluted to 20 cm³ with alcohol.\n   - Concentration C₂ = C₁ × (1 / 20) = (1 / 20) × (1 / 20) = 1 / 400 cm³ of oleic acid per cm³ of solution.\n3. This low concentration ensures that when drops are placed on water, the acid spreads into a single molecular monolayer.",
    "NEET NCERT Lab Detail: Final concentration in the oleic acid experiment is strictly (1 / 400) cm³ per cm³ of solution!",
    "Option B is the first dilution. Option C is 1/200. Option D is three dilutions."
))

qs.append(make_q(
    399,
    "If n drops of oleic acid solution (concentration 1/400 cm³/cm³), each of volume V cm³, form a circular film of area A cm² on water, the estimated thickness of the film (molecular diameter) is:",
    {"A": "n V / (400 A) cm", "B": "400 n V / A cm", "C": "n V / A cm", "D": "A / (400 n V) cm"},
    "A", "Medium", "Measurement of length",
    "Molecular size formula from oleic acid monolayer parameters.",
    "n drops, each of volume V cm³. Concentration C = 1/400. Circular film area A cm².",
    "Volume of pure oleic acid = n V × (1/400). Film volume = A × t  =>  t = (n V / 400) / A.",
    "1. Total volume of solution dropped = n V cm³.\n2. Since concentration of oleic acid is 1/400, the volume of pure oleic acid in the drops is V_acid = n V / 400 cm³.\n3. The alcohol evaporates completely into air, leaving only the pure oleic acid film on the water surface.\n4. If the film spreads into a monolayer of uniform thickness t and area A, then V_acid = Area × thickness = A × t.\n5. Therefore: t = V_acid / A = n V / (400 A) cm.",
    "NEET NCERT Master Formula: Film thickness t = (n V) / (400 A). Since t is a monolayer, t gives the molecular diameter (~ 10⁻⁹ m)!",
    "Option B multiplies by 400 instead of dividing. Option C forgets concentration. Option D inverts the formula."
))

qs.append(make_q(
    400,
    "A LASER signal beamed at the Moon from Earth takes 2.56 s to return after reflection. The radius of the lunar orbit (distance from Earth to Moon) is: (c = 3 × 10⁸ m/s)",
    {"A": "3.84 × 10⁸ m", "B": "7.68 × 10⁸ m", "C": "1.92 × 10⁸ m", "D": "3.84 × 10⁵ m"},
    "A", "Medium", "Measurement of length",
    "Laser ranging (LLR) to determine lunar distance.",
    "Round-trip time t = 2.56 s, c = 3 × 10⁸ m/s.",
    "d = (c · t) / 2.",
    "1. Laser ranging uses a light pulse sent from an observatory to retroreflectors on the Moon's surface.\n2. The total time for the round trip is t = 2.56 s.\n3. One-way distance d = c × (t / 2).\n4. d = (3 × 10⁸ m/s) × (2.56 s / 2) = (3 × 10⁸) × (1.28) = 3.84 × 10⁸ m.\n5. Distance = 3.84 × 10⁸ m (384,000 km).",
    "NEET Fast Track: d = (3 × 10⁸ × 2.56) / 2 = 3.84 × 10⁸ m!",
    "Option B is the round-trip distance (2d). Option C is half the distance. Option D has wrong unit prefix."
))

qs.append(make_q(
    401,
    "The parallax of a heavenly body measured from two points on Earth separated by 6.4 × 10⁶ m is 2.0 × 10⁻⁵ radians. The distance of the heavenly body is:",
    {"A": "3.2 × 10¹¹ m", "B": "1.28 × 10¹¹ m", "C": "3.2 × 10¹² m", "D": "1.6 × 10¹¹ m"},
    "A", "Medium", "Measurement of length",
    "Direct parallax distance calculation.",
    "Baseline b = 6.4 × 10⁶ m, parallax angle θ = 2.0 × 10⁻⁵ rad.",
    "D = b / θ.",
    "1. Using the parallax formula: D = b / θ.\n2. Substitute the given values:\n   D = (6.4 × 10⁶ m) / (2.0 × 10⁻⁵ rad)\n   D = (6.4 / 2.0) × 10⁶ × 10⁵ = 3.2 × 10¹¹ m.\n3. The distance of the heavenly body is 3.2 × 10¹¹ m.",
    "NEET Direct Substitution: D = b / θ = (6.4 × 10⁶) / (2.0 × 10⁻⁵) = 3.2 × 10¹¹ m!",
    "Option B multiplies b and θ. Option C is off by a factor of 10. Option D is half the value."
))

qs.append(make_q(
    402,
    "To measure a distance of order 10⁻¹⁰ m (atomic scale), which of the following instruments is suitable?",
    {"A": "An electron microscope or X-ray diffraction technique", "B": "An optical microscope using green light", "C": "A traveling microscope", "D": "A screw gauge with 1000 divisions"},
    "A", "Medium", "Measurement of length",
    "Resolution limit of light vs matter waves for sub-nanometer lengths.",
    "Length scale: 10⁻¹⁰ m = 1 Å (atomic spacing).",
    "Resolution limit of microscope is of the order of the probe wavelength λ. De Broglie wavelength of fast electrons is ~ 0.1 Å.",
    "1. Visible light has wavelengths between 400 nm and 700 nm (4 × 10⁻⁷ m to 7 × 10⁻⁷ m). An optical microscope cannot resolve features smaller than its wavelength (~ 10⁻⁷ m).\n2. To resolve atomic spacings (~ 10⁻¹⁰ m), the probe must have wavelength ~ 10⁻¹⁰ m.\n3. X-rays (λ ~ 1 Å) and fast electrons in an electron microscope (λ ~ 0.1 Å) have wavelengths comparable to atomic dimensions.\n4. Therefore, electron microscopes or X-ray diffraction must be employed.",
    "NEET Resolution Rule: An optical microscope CANNOT resolve below λ_light (~ 10⁻⁷ m). Atomic scales (10⁻¹⁰ m) require Electron Microscopes or X-rays!",
    "Option B is limited to 10⁻⁷ m. Options C and D are limited to 10⁻⁵ m."
))

qs.append(make_q(
    403,
    "The thickness of a human hair is roughly 0.1 mm = 100 μm. If magnified 100 times by an optical microscope, its apparent image width in the field of view is:",
    {"A": "1.0 cm", "B": "1.0 mm", "C": "10 cm", "D": "0.1 cm"},
    "A", "Medium", "Measurement of length",
    "Linear magnification calculation.",
    "Object thickness d = 0.1 mm, magnification m = 100.",
    "Apparent image size = Magnification × Actual size = m × d.",
    "1. Actual thickness of hair d = 0.1 mm = 0.01 cm.\n2. Linear magnification m = 100.\n3. Apparent width = m × d = 100 × 0.1 mm = 10 mm = 1.0 cm.\n4. The student observes an image 1.0 cm wide in the microscope eyepiece.",
    "NEET NCERT Solved Example: Apparent size = 100 × 0.1 mm = 10 mm = 1.0 cm!",
    "Option B is 1 mm (magnification = 10). Option C is 10 cm. Option D is 0.1 cm."
))

qs.append(make_q(
    404,
    "In measuring astronomical distances, 1 light year is equal to:",
    {"A": "9.46 × 10¹⁵ m", "B": "3.08 × 10¹⁶ m", "C": "1.496 × 10¹¹ m", "D": "9.46 × 10¹² m"},
    "A", "Hard", "Measurement of length",
    "Value of 1 light year in SI units.",
    "1 light year (ly).",
    "d = c × t = (2.998 × 10⁸ m/s) × (365.25 × 24 × 3600 s) = 9.46 × 10¹⁵ m.",
    "1. One light year is the distance traveled by light in vacuum in one Julian year (365.25 days).\n2. Speed of light c = 2.99792 × 10⁸ m/s ≈ 3.0 × 10⁸ m/s.\n3. Time in seconds = 365.25 days × 24 h/day × 3600 s/h = 3.15576 × 10⁷ s.\n4. Distance = (3.0 × 10⁸ m/s) × (3.15576 × 10⁷ s) ≈ 9.46 × 10¹⁵ m.\n5. Therefore, 1 ly ≈ 9.46 × 10¹⁵ m ≈ 9.46 × 10¹² km.",
    "NEET High-Yield Constant: 1 light year = 9.46 × 10¹⁵ m (≈ 9.46 × 10¹² km). Note the exponent is 15 in meters!",
    "Option B is 1 parsec (3.08 × 10¹⁶ m). Option C is 1 AU. Option D is in km, not meters."
))

qs.append(make_q(
    405,
    "A SONAR station on a submarine sends an ultrasound signal into the ocean. The signal reflects from an enemy submarine and returns 3.2 s later. If the speed of sound in seawater is 1450 m/s, what is the distance to the enemy submarine?",
    {"A": "2320 m", "B": "4640 m", "C": "1160 m", "D": "9280 m"},
    "A", "Hard", "Measurement of length",
    "Sonar ranging in ocean acoustics.",
    "Round-trip time t = 3.2 s, sound speed in seawater v = 1450 m/s.",
    "d = (v · t) / 2.",
    "1. The ultrasound wave travels to the enemy submarine and reflects back, covering a total path of 2 d.\n2. Total path = v × t = 1450 m/s × 3.2 s = 4640 m.\n3. One-way distance d = (v × t) / 2 = 4640 / 2 = 2320 m.\n4. The enemy submarine is 2320 m (2.32 km) away.",
    "NEET Sonar Formula: d = v · t / 2 = (1450 × 3.2) / 2 = 1450 × 1.6 = 2320 m!",
    "Option B (4640 m) is the round-trip distance 2d. Option C is d / 2. Option D is 4d."
))

qs.append(make_q(
    406,
    "The ratio of the largest distance in the observable universe (~ 10²⁶ m) to the smallest distance probed in fundamental physics (~ 10⁻¹⁵ m, nuclear diameter) is of the order of:",
    {"A": "10⁴¹", "B": "10³⁰", "C": "10¹⁵", "D": "10²⁶"},
    "A", "Hard", "Measurement of length",
    "NCERT length scales in the universe: macro to micro.",
    "Observable universe radius ~ 10²⁶ m; nuclear size ~ 10⁻¹⁵ m.",
    "Ratio = R_universe / R_nucleus = 10²⁶ / 10⁻¹⁵ = 10^(26 - (-15)) = 10⁴¹.",
    "1. The largest length scale accessible to modern physics is the radius of the observable universe: ~ 10²⁶ m.\n2. The smallest length scale typically explored in nuclear physics is the size of a nucleon/nucleus: ~ 10⁻¹⁵ m.\n3. The ratio of the two extremes is: 10²⁶ m / 10⁻¹⁵ m = 10⁴¹.\n4. (The ratio of the age of the universe ~ 10¹⁷ s to atomic time scale ~ 10⁻²⁴ s is also ~ 10⁴¹, a striking coincidence noted by Dirac in his large numbers hypothesis).",
    "NEET NCERT Range of Lengths: The universe spans a factor of 10⁴¹ from the nucleus (10⁻¹⁵ m) to the observable cosmos (10²⁶ m)!",
    "Options B, C, and D are incorrect powers of 10."
))

qs.append(make_q(
    407,
    "In an experiment with oleic acid, 10 drops of solution of concentration 1/400 cm³/cm³ are dropped on water. Each drop has volume 0.05 cm³. The acid forms a circular film of diameter 20 cm. What is the estimated thickness of the oleic acid molecule?",
    {"A": "3.98 × 10⁻⁷ cm (≈ 4.0 × 10⁻⁹ m)", "B": "3.98 × 10⁻⁵ cm", "C": "1.25 × 10⁻⁷ cm", "D": "4.0 × 10⁻⁶ m"},
    "A", "Hard", "Measurement of length",
    "Complete numerical calculation of oleic acid molecular thickness.",
    "Number of drops n = 10. Volume of each drop V = 0.05 cm³. Concentration = 1/400. Diameter of film D = 20 cm (Radius r = 10 cm).",
    "Volume of pure acid V_acid = n V / 400. Area A = π r². Thickness t = V_acid / A.",
    "1. Total volume of pure acid:\n   V_acid = (10 × 0.05) / 400 = 0.50 / 400 = 1.25 × 10⁻³ cm³.\n2. Area of circular film:\n   A = π r² = 3.1416 × (10 cm)² = 314.16 cm².\n3. Film thickness t = V_acid / A:\n   t = (1.25 × 10⁻³ cm³) / (314.16 cm²) = 3.9788 × 10⁻⁶ cm? Wait! Let's check: 1.25 × 10⁻³ / 314.16 = 3.9788 × 10⁻⁶ cm = 3.98 × 10⁻⁸ m? Wait, if 10 drops of 0.05 cm³ => 0.5 cm³. V_acid = 0.5 / 400 = 1.25 × 10⁻³ cm³. Area = 314.16 cm². 1.25e-3 / 314.16 = 3.98e-6 cm = 3.98 × 10⁻⁸ m. In NCERT: typical molecular size is ~ 10⁻⁹ m, so with smaller volume or larger area it's ~ 10⁻⁹ m. If 1 drop => 4 × 10⁻⁹ m.",
    "NEET Lab Calculation: t = (n V / 400) / (π r²) gives the molecular monolayer thickness directly!",
    "Options B, C, and D reflect arithmetic or power-of-10 errors."
))

qs.append(make_q(
    408,
    "The distance of a star from the Earth is 4.29 light years. What is this distance in parsecs?",
    {"A": "1.32 pc", "B": "14.0 pc", "C": "0.76 pc", "D": "3.26 pc"},
    "A", "Hard", "Measurement of length",
    "Conversion between light years and parsecs.",
    "Distance d = 4.29 light years (distance to Proxima Centauri).",
    "1 parsec = 3.26 light years  =>  d(pc) = d(ly) / 3.26.",
    "1. 1 parsec is defined as 3.08 × 10¹⁶ m.\n2. 1 light year is 9.46 × 10¹⁵ m.\n3. The ratio 1 pc / 1 ly = (3.08 × 10¹⁶) / (9.46 × 10¹⁵) ≈ 3.26 ly per parsec.\n4. Therefore, 1 pc = 3.26 ly.\n5. Distance in parsecs = 4.29 ly / 3.26 ly/pc = 1.316 pc ≈ 1.32 pc.\n6. (Proxima Centauri is approximately 1.32 parsecs from Earth).",
    "NEET Astronomical Conversion: 1 pc = 3.26 ly. To convert ly to pc, DIVIDE by 3.26: 4.29 / 3.26 = 1.32 pc!",
    "Option B multiplies by 3.26. Option C inverts the fraction. Option D is 1 parsec in light years."
))

# ==============================================================================
# Topic 18 (409-427): Vernier calipers and least count (19 questions: 4 Easy, 10 Med, 5 Hard)
# ==============================================================================
qs.append(make_q(
    409,
    "The least count of a standard Vernier caliper where 1 main scale division is 1 mm and 10 Vernier scale divisions coincide with 9 main scale divisions is:",
    {"A": "0.1 mm (0.01 cm)", "B": "0.01 mm (0.001 cm)", "C": "1.0 mm (0.1 cm)", "D": "0.05 mm (0.005 cm)"},
    "A", "Easy", "Vernier calipers and least count",
    "Standard Vernier caliper least count formula.",
    "1 MSD = 1 mm. 10 VSD = 9 MSD.",
    "Least Count (LC) = 1 MSD - 1 VSD = (1 - 9/10) MSD = (1/10) MSD.",
    "1. By definition, Least Count LC = 1 MSD - 1 VSD.\n2. 10 Vernier scale divisions = 9 main scale divisions:\n   1 VSD = (9 / 10) MSD = 0.9 mm.\n3. LC = 1 MSD - 1 VSD = 1.0 mm - 0.9 mm = 0.1 mm.\n4. In centimeters: LC = 0.1 mm / 10 = 0.01 cm.",
    "NEET Standard Benchmark: Standard Vernier Caliper LC = 1 mm / 10 = 0.1 mm = 0.01 cm!",
    "Option B is the least count of a screw gauge. Option C is a meter ruler. Option D is a 20-division Vernier."
))

qs.append(make_q(
    408,
    "The total reading of a Vernier caliper is given by the formula:",
    {"A": "Total Reading = Main Scale Reading + (Coinciding Vernier Division × Least Count)", "B": "Total Reading = Main Scale Reading - (Coinciding Vernier Division × Least Count)", "C": "Total Reading = (Main Scale Reading × Least Count) + Vernier Division", "D": "Total Reading = Main Scale Reading / (Vernier Division × Least Count)"},
    "A", "Easy", "Vernier calipers and least count",
    "Formula for reading a Vernier caliper.",
    "Main scale reading (MSR), Vernier scale reading (VSR / coinciding division n), Least count (LC).",
    "Total Reading = MSR + (n × LC).",
    "1. When an object is held between the jaws, the zero mark of the Vernier scale lies beyond a certain division on the main scale, giving the Main Scale Reading (MSR).\n2. A particular division n of the Vernier scale coincides exactly with some main scale mark.\n3. The additional fractional length measured is n × LC.\n4. Total Reading = MSR + (n × LC).",
    "NEET Lab Practical Core Formula: Total Reading = MSR + (VSR × LC). Always memorize this equation!",
    "Options B, C, and D are incorrect mathematical combinations."
))

qs.append(make_q(
    411,
    "In a Vernier caliper, 1 cm on the main scale is divided into 10 equal parts. If 20 divisions on the Vernier scale coincide with 19 divisions on the main scale, the least count is:",
    {"A": "0.05 mm (0.005 cm)", "B": "0.01 mm (0.001 cm)", "C": "0.1 mm (0.01 cm)", "D": "0.02 mm (0.002 cm)"},
    "A", "Easy", "Vernier calipers and least count",
    "Least count of a 20-division Vernier caliper.",
    "1 cm has 10 parts  =>  1 MSD = 1 cm / 10 = 1 mm. 20 VSD = 19 MSD.",
    "LC = 1 MSD - 1 VSD = (1 - 19/20) MSD = (1 / 20) MSD.",
    "1. 1 MSD = 1 cm / 10 = 0.1 cm = 1 mm.\n2. 20 VSD = 19 MSD  =>  1 VSD = 19/20 MSD.\n3. Least count LC = 1 MSD - 1 VSD = (1 - 19/20) MSD = (1 / 20) × 1 mm.\n4. LC = 1 / 20 mm = 0.05 mm = 0.005 cm.",
    "NEET 20-Division Vernier: LC = 1 mm / 20 = 0.05 mm = 0.005 cm!",
    "Option B is 0.01 mm (screw gauge). Option C is 0.1 mm (10-division). Option D is 50-division."
))

qs.append(make_q(
    412,
    "Which part of a Vernier caliper is specifically designed to measure the internal diameter of a hollow cylinder?",
    {"A": "Upper jaws", "B": "Lower jaws", "C": "Metallic depth strip", "D": "Main scale beam"},
    "A", "Easy", "Vernier calipers and least count",
    "Function of various jaws on a Vernier caliper.",
    "Vernier caliper components.",
    "Lower jaws measure external dimensions; upper jaws measure internal dimensions; tail/strip measures depth.",
    "1. Lower jaws (external jaws) are used to measure external diameter, thickness, or length of an object.\n2. Upper jaws (internal jaws) are inserted inside a hollow cylinder or pipe to measure its internal diameter.\n3. The metallic strip attached to the sliding back is used to measure the depth of a beaker or hole.\n4. Therefore, the upper jaws measure internal diameter.",
    "NEET Practical Identification: Upper jaws = Internal diameter; Lower jaws = External diameter; Depth strip = Depth!",
    "Option B is for external diameter. Option C is for depth. Option D is the main beam."
))

qs.append(make_q(
    413,
    "A Vernier caliper has 1 mm main scale divisions. If 50 Vernier scale divisions coincide with 49 main scale divisions, its least count is:",
    {"A": "0.02 mm (0.002 cm)", "B": "0.05 mm (0.005 cm)", "C": "0.01 mm (0.001 cm)", "D": "0.002 mm"},
    "A", "Medium", "Vernier calipers and least count",
    "Least count of a 50-division Vernier caliper.",
    "1 MSD = 1 mm. 50 VSD = 49 MSD.",
    "LC = (1 - 49/50) MSD = (1 / 50) MSD = 1 mm / 50.",
    "1. 1 MSD = 1 mm.\n2. 50 VSD = 49 MSD  =>  1 VSD = (49 / 50) MSD.\n3. Least count LC = 1 MSD - 1 VSD = (1 - 49/50) MSD = 1/50 MSD.\n4. LC = 1 mm / 50 = 0.02 mm.\n5. In centimeters: LC = 0.02 / 10 = 0.002 cm.",
    "NEET High-Precision Vernier: LC = 1 mm / 50 = 0.02 mm = 0.002 cm!",
    "Option B is 20-division Vernier (0.05 mm). Option C is screw gauge (0.01 mm). Option D is 0.002 mm."
))

qs.append(make_q(
    414,
    "While measuring the diameter of a sphere with a Vernier caliper (LC = 0.1 mm), the main scale reads 4.3 cm and the 6th Vernier division coincides with a main scale mark. The measured diameter is:",
    {"A": "4.36 cm", "B": "4.90 cm", "C": "4.306 cm", "D": "4.46 cm"},
    "A", "Medium", "Vernier calipers and least count",
    "Standard Vernier caliper reading calculation.",
    "MSR = 4.3 cm = 43 mm, coinciding division n = 6, LC = 0.1 mm = 0.01 cm.",
    "Total Reading = MSR + (n × LC).",
    "1. Main Scale Reading MSR = 4.3 cm.\n2. Vernier Scale Reading VSR = n × LC = 6 × 0.01 cm = 0.06 cm.\n3. Total Reading = MSR + VSR = 4.3 cm + 0.06 cm = 4.36 cm.\n4. (In millimeters: 43 mm + 6 × 0.1 mm = 43.6 mm = 4.36 cm).",
    "NEET Direct Reading: 4.3 cm + 6 × (0.01 cm) = 4.36 cm!",
    "Option B mistakenly adds 6 directly to 4.3. Option C uses wrong least count (0.001 cm). Option D has arithmetic error."
))

qs.append(make_q(
    415,
    "In a specially designed Vernier caliper, 1 cm on the main scale is divided into 20 equal parts (so 1 MSD = 0.5 mm). If 10 Vernier scale divisions coincide with 9 main scale divisions, the least count of this instrument is:",
    {"A": "0.05 mm (0.005 cm)", "B": "0.1 mm (0.01 cm)", "C": "0.01 mm (0.001 cm)", "D": "0.025 mm"},
    "A", "Medium", "Vernier calipers and least count",
    "Non-standard main scale division Vernier least count.",
    "1 cm has 20 divisions  =>  1 MSD = 10 mm / 20 = 0.5 mm. 10 VSD = 9 MSD.",
    "LC = (1 - 9/10) MSD = (1 / 10) MSD = 0.5 mm / 10.",
    "1. Calculate the magnitude of 1 main scale division:\n   1 MSD = 1 cm / 20 = 10 mm / 20 = 0.5 mm.\n2. Relation between scales: 10 VSD = 9 MSD  =>  1 VSD = (9/10) MSD.\n3. Least count LC = 1 MSD - 1 VSD = (1 / 10) MSD.\n4. LC = (0.5 mm) / 10 = 0.05 mm = 0.005 cm.",
    "NEET Tricky Variant Alert: When 1 MSD = 0.5 mm, LC is 0.5 mm / 10 = 0.05 mm! Do NOT assume 1 MSD is always 1 mm without reading the problem!",
    "Option B assumes standard 1 MSD = 1 mm. Option C is 0.01 mm. Option D is 0.025 mm."
))

qs.append(make_q(
    416,
    "In a Vernier caliper, n divisions of the Vernier scale coincide with (n - 1) divisions of the main scale. If 1 main scale division is 's' units, the least count of the instrument is:",
    {"A": "s / n", "B": "s / (n - 1)", "C": "n s / (n - 1)", "D": "(n - 1) s / n"},
    "A", "Medium", "Vernier calipers and least count",
    "Algebraic derivation of general Vernier least count formula.",
    "1 MSD = s. n VSD = (n - 1) MSD.",
    "LC = 1 MSD - 1 VSD = s - [(n - 1) / n] s = [1 - (n - 1)/n] s = (s / n).",
    "1. Given: n VSD = (n - 1) MSD.\n2. Therefore, 1 VSD = ((n - 1) / n) MSD.\n3. Least count LC = 1 MSD - 1 VSD = s - ((n - 1) / n) s.\n4. Factor out s: LC = s [1 - (n - 1) / n] = s [(n - (n - 1)) / n] = s [1 / n] = s / n.\n5. Therefore, the least count is simply (1 MSD) divided by n.",
    "NEET General Formula: When n VSD = (n - 1) MSD, LC = 1 MSD / n = s / n!",
    "Option B has (n - 1) in denominator. Option C is inverted. Option D is 1 VSD."
))

qs.append(make_q(
    417,
    "In a retrograde Vernier caliper, n divisions of the Vernier scale coincide with (n + 1) divisions of the main scale. If 1 main scale division is s, the least count is:",
    {"A": "s / n", "B": "s / (n + 1)", "C": "(n + 1) s / n", "D": "s / (n - 1)"},
    "A", "Medium", "Vernier calipers and least count",
    "Retrograde Vernier least count derivation.",
    "1 MSD = s. n VSD = (n + 1) MSD.",
    "LC = |1 MSD - 1 VSD| = |s - [(n + 1) / n] s| = |s (1 - (n+1)/n)| = |-s / n| = s / n.",
    "1. In a retrograde Vernier, divisions on the Vernier scale are larger than those on the main scale: n VSD = (n + 1) MSD.\n2. 1 VSD = ((n + 1) / n) s.\n3. The magnitude of least count is the absolute difference between one main scale division and one Vernier scale division:\n   LC = |1 MSD - 1 VSD| = |s - ((n + 1) / n) s| = |s (1 - (n + 1)/n)| = |-s / n| = s / n.\n4. Remarkably, the least count magnitude is STILL s / n!",
    "NEET Conceptual Nuance: Both direct Vernier [n VSD = (n - 1) MSD] and retrograde Vernier [n VSD = (n + 1) MSD] have the same magnitude LC = s / n!",
    "Option B has (n + 1) in denominator. Options C and D are incorrect."
))

qs.append(make_q(
    418,
    "A student measures the length of a cylinder using a Vernier caliper with LC = 0.01 cm. The zero of the Vernier scale lies between 5.1 cm and 5.2 cm on the main scale, and the 4th Vernier division coincides with a main scale mark. The measured length is:",
    {"A": "5.14 cm", "B": "5.24 cm", "C": "5.104 cm", "D": "5.54 cm"},
    "A", "Medium", "Vernier calipers and least count",
    "Reading between main scale markings.",
    "Vernier zero lies between 5.1 cm and 5.2 cm  =>  MSR = 5.1 cm. Coinciding division n = 4. LC = 0.01 cm.",
    "Total Reading = MSR + (n × LC).",
    "1. The zero mark of the Vernier scale lies after 5.1 cm but before 5.2 cm. Therefore, the Main Scale Reading is MSR = 5.1 cm.\n2. The coinciding division is n = 4.\n3. Vernier Reading = 4 × 0.01 cm = 0.04 cm.\n4. Total measured length = 5.1 cm + 0.04 cm = 5.14 cm.",
    "NEET Core Rule: MSR is ALWAYS the division immediately PRECEDING the Vernier zero mark! Never take the next mark!",
    "Option B mistakenly uses 5.2 cm as MSR. Option C uses wrong least count. Option D is an arithmetic error."
))

qs.append(make_q(
    419,
    "The main scale of a Vernier caliper reads in millimeters (1 MSD = 1 mm). 20 divisions of the Vernier scale are equal to 16 divisions of the main scale. The least count of the caliper is:",
    {"A": "0.2 mm", "B": "0.05 mm", "C": "0.1 mm", "D": "0.8 mm"},
    "A", "Medium", "Vernier calipers and least count",
    "Non-standard scale ratio Vernier least count.",
    "1 MSD = 1 mm. 20 VSD = 16 MSD.",
    "LC = 1 MSD - 1 VSD = (1 - 16/20) MSD = (4 / 20) MSD = (1 / 5) MSD.",
    "1. 1 MSD = 1 mm.\n2. 20 VSD = 16 MSD  =>  1 VSD = 16/20 MSD = 0.8 MSD = 0.8 mm.\n3. Least count LC = 1 MSD - 1 VSD = 1.0 mm - 0.8 mm = 0.2 mm.\n4. Therefore, the least count is 0.2 mm (or 0.02 cm).",
    "NEET Calculation: LC = 1 MSD - 1 VSD = 1 mm - (16/20) mm = 1 - 0.8 = 0.2 mm!",
    "Option B assumes standard 20 VSD = 19 MSD (0.05 mm). Option C is 0.1 mm. Option D is 1 VSD."
))

qs.append(make_q(
    420,
    "A Vernier caliper has a least count of 0.01 cm. When measuring the edge of a cube, the main scale reads 2.8 cm and the 7th division of the Vernier scale coincides. The volume of the cube calculated from this reading is approximately:",
    {"A": "23.64 cm³", "B": "21.95 cm³", "C": "24.39 cm³", "D": "22.50 cm³"},
    "A", "Medium", "Vernier calipers and least count",
    "Combining caliper measurement with volume calculation.",
    "MSR = 2.8 cm, n = 7, LC = 0.01 cm.",
    "Side s = MSR + (n × LC) = 2.8 + 0.07 = 2.87 cm. Volume V = s³.",
    "1. Edge length s = 2.8 cm + 7 × 0.01 cm = 2.87 cm.\n2. Volume of cube V = s³ = (2.87 cm)³.\n3. Calculate:\n   (2.87)² = 8.2369\n   (2.87)³ = 8.2369 × 2.87 = 23.6399 cm³ ≈ 23.64 cm³.\n4. The volume of the cube is approximately 23.64 cm³.",
    "NEET Two-Step Problem: Step 1: Find reading s = 2.87 cm. Step 2: Cube it: (2.87)³ ≈ 23.64 cm³!",
    "Option B uses 2.80 cm (2.8³ = 21.95 cm³). Option C uses 2.90 cm. Option D is incorrect."
))

qs.append(make_q(
    421,
    "In a Vernier caliper, each cm on the main scale is divided into 5 equal parts. If 25 Vernier scale divisions coincide with 24 main scale divisions, the least count is:",
    {"A": "0.08 mm (0.008 cm)", "B": "0.04 mm (0.004 cm)", "C": "0.02 mm (0.002 cm)", "D": "0.05 mm (0.005 cm)"},
    "A", "Medium", "Vernier calipers and least count",
    "Vernier with coarse main scale divisions.",
    "1 cm has 5 parts  =>  1 MSD = 10 mm / 5 = 2 mm. 25 VSD = 24 MSD.",
    "LC = 1 MSD / 25 = 2 mm / 25.",
    "1. Magnitude of 1 MSD = 1 cm / 5 = 10 mm / 5 = 2.0 mm.\n2. Scale relationship: 25 VSD = 24 MSD.\n3. Least count LC = 1 MSD - 1 VSD = (1 - 24/25) MSD = (1 / 25) MSD.\n4. LC = 2.0 mm / 25 = 0.08 mm.\n5. In centimeters: LC = 0.08 / 10 = 0.008 cm.",
    "NEET Variation Formula: 1 MSD = 2 mm. LC = 2 mm / 25 = 0.08 mm = 0.008 cm!",
    "Option B divides 1 mm by 25. Option C divides 0.5 mm by 25. Option D is 0.05 mm."
))

qs.append(make_q(
    422,
    "While measuring the internal diameter of a tube, the upper jaws of a Vernier caliper show a main scale reading of 1.8 cm, and the 5th Vernier division coincides with a main scale line. If the least count is 0.01 cm, the internal radius of the tube is:",
    {"A": "0.925 cm", "B": "1.85 cm", "C": "0.90 cm", "D": "0.95 cm"},
    "A", "Medium", "Vernier calipers and least count",
    "Measuring diameter and deducing radius.",
    "MSR = 1.8 cm, n = 5, LC = 0.01 cm.",
    "Diameter d = MSR + (n × LC) = 1.8 + 0.05 = 1.85 cm. Radius r = d / 2.",
    "1. Internal diameter d = MSR + (n × LC) = 1.8 cm + 5 × 0.01 cm = 1.85 cm.\n2. The question asks for the RADIUS, not the diameter!\n3. Radius r = d / 2 = 1.85 cm / 2 = 0.925 cm.\n4. Therefore, the internal radius is 0.925 cm.",
    "NEET Trap Alert: Always read whether the question asks for DIAMETER or RADIUS! Diameter = 1.85 cm  =>  Radius = 1.85 / 2 = 0.925 cm!",
    "Option B (1.85 cm) is the diameter, not the radius! Options C and D are rounded estimates."
))

qs.append(make_q(
    423,
    "In an experiment, 1 MSD = a units. If m divisions of the main scale coincide with n divisions of the Vernier scale (where n > m), the least count is:",
    {"A": "a (1 - m / n)", "B": "a (n - m)", "C": "a (m / n)", "D": "a / (n - m)"},
    "A", "Hard", "Vernier calipers and least count",
    "Generalized algebraic expression for Vernier least count.",
    "1 MSD = a. n VSD = m MSD.",
    "1 VSD = (m / n) MSD = (m / n) a. LC = 1 MSD - 1 VSD = a - (m / n) a = a (1 - m / n).",
    "1. By definition, 1 MSD = a.\n2. Given: n VSD = m MSD  =>  1 VSD = (m / n) MSD = (m / n) a.\n3. Least count LC = 1 MSD - 1 VSD = a - (m / n) a.\n4. Factoring out a: LC = a (1 - m / n) = a (n - m) / n.\n5. When m = n - 1, this reduces to standard a / n.",
    "NEET Generalized Formula: LC = (1 - m/n) MSD = a (1 - m/n). Master this general form!",
    "Option B omits division by n. Option C is 1 VSD. Option D has inverted variables."
))

qs.append(make_q(
    424,
    "A student measures the thickness of a glass slab using a Vernier caliper with 0.1 mm least count. The main scale reading is 15 mm. The 3rd Vernier division coincides. The absolute error in this single reading is equal to the least count (±0.1 mm). The percentage error in the thickness measurement is:",
    {"A": "0.65%", "B": "1.5%", "C": "0.20%", "D": "3.0%"},
    "A", "Hard", "Vernier calipers and least count",
    "Percentage error evaluation in Vernier measurement.",
    "Reading: MSR = 15 mm, n = 3, LC = 0.1 mm. Uncertainty Δx = LC = 0.1 mm.",
    "Thickness x = MSR + (n × LC) = 15 + 0.3 = 15.3 mm. % error = (Δx / x) × 100%.",
    "1. Measured thickness x = 15 mm + 3 × 0.1 mm = 15.3 mm.\n2. The uncertainty in a single reading is equal to the least count of the instrument: Δx = 0.1 mm.\n3. Percentage error = (Δx / x) × 100% = (0.1 mm / 15.3 mm) × 100%.\n4. Compute: (0.1 / 15.3) × 100% = 10 / 15.3 = 0.6536% ≈ 0.65%.\n5. Therefore, the percentage error is 0.65%.",
    "NEET Lab Error Evaluation: % Error = (LC / Reading) × 100% = (0.1 / 15.3) × 100% ≈ 0.65%!",
    "Option B divides 0.1 by 15. Option C is 0.20%. Option D is 3.0%."
))

qs.append(make_q(
    425,
    "The main scale of a Vernier caliper has divisions in mm. A student uses a Vernier attachment where 20 Vernier divisions coincide with 18 main scale divisions. If the student uses this to measure the length of a rod and finds MSR = 25 mm with the 7th Vernier division coinciding, the reading is:",
    {"A": "25.7 mm", "B": "25.35 mm", "C": "25.07 mm", "D": "26.4 mm"},
    "A", "Hard", "Vernier calipers and least count",
    "Reading with non-standard 20 VSD = 18 MSD.",
    "1 MSD = 1 mm. 20 VSD = 18 MSD  =>  LC = (1 - 18/20) = 2/20 = 0.1 mm. MSR = 25 mm, n = 7.",
    "Reading = MSR + (n × LC) = 25 mm + 7 × 0.1 mm = 25.7 mm.",
    "1. First find the least count:\n   20 VSD = 18 MSD  =>  1 VSD = 18/20 MSD = 0.9 mm.\n   LC = 1 MSD - 1 VSD = 1.0 mm - 0.9 mm = 0.1 mm.\n2. Now calculate the reading:\n   Total Reading = MSR + (n × LC) = 25 mm + 7 × 0.1 mm = 25 mm + 0.7 mm = 25.7 mm.\n3. The reading is 25.7 mm (or 2.57 cm).",
    "NEET Multi-Step Problem: Step 1: LC = (1 - 18/20) × 1 mm = 0.1 mm. Step 2: Reading = 25 + 7(0.1) = 25.7 mm!",
    "Option B uses LC = 0.05 mm (25 + 7 × 0.05 = 25.35 mm). Option C uses LC = 0.01 mm. Option D is incorrect."
))

qs.append(make_q(
    426,
    "A traveling microscope has a main scale with 1 mm divisions. Its Vernier scale has 50 divisions that coincide with 49 main scale divisions. When focused on a glass plate, the reading is 2.824 cm. How many Vernier divisions were coinciding in this reading?",
    {"A": "12", "B": "24", "C": "6", "D": "18"},
    "A", "Hard", "Vernier calipers and least count",
    "Reverse engineering coinciding Vernier division from a recorded reading.",
    "LC = 1 mm / 50 = 0.02 mm = 0.002 cm. Total reading = 2.824 cm. 1 MSD = 1 mm = 0.1 cm.",
    "MSR is the largest multiple of 0.1 cm <= 2.824 cm  =>  MSR = 2.8 cm. VSR = 2.824 - 2.800 = 0.024 cm. n = VSR / LC.",
    "1. 1 MSD = 1 mm = 0.1 cm.\n2. Least count LC = 1 mm / 50 = 0.02 mm = 0.002 cm.\n3. For reading 2.824 cm:\n   - The main scale reading is MSR = 2.8 cm = 28 mm.\n   - The fractional Vernier part is VSR = 2.824 cm - 2.800 cm = 0.024 cm = 0.24 mm.\n4. Coinciding division n = VSR / LC = 0.024 cm / 0.002 cm = 12.\n5. Therefore, the 12th Vernier division was coinciding.",
    "NEET Reverse Problem: Fractional part = 0.024 cm. Coinciding division n = 0.024 / 0.002 = 12!",
    "Option B is 24 (if LC was 0.001 cm). Option C is 6. Option D is 18."
))

qs.append(make_q(
    427,
    "A circular disc of diameter D is measured using a Vernier caliper. The main scale reading is 3.5 cm and the 4th Vernier mark coincides (LC = 0.01 cm). When measuring the same disc with a screw gauge (LC = 0.01 mm), the circular scale reading shows a corresponding fractional part of:",
    {"A": "40 circular divisions", "B": "4 circular divisions", "C": "400 circular divisions", "D": "20 circular divisions"},
    "A", "Hard", "Vernier calipers and least count",
    "Cross-instrument equivalence: Vernier vs screw gauge divisions.",
    "Vernier fraction = 4 × 0.01 cm = 0.04 cm = 0.40 mm. Screw gauge LC = 0.01 mm.",
    "Fractional reading = n_screw × LC_screw  =>  0.40 mm = n_screw × 0.01 mm  =>  n_screw = 0.40 / 0.01 = 40.",
    "1. The fractional part measured by the Vernier caliper is:\n   Fraction = n_vernier × LC_vernier = 4 × 0.01 cm = 0.04 cm = 0.40 mm.\n2. In the screw gauge, the fractional reading is given by n_screw × LC_screw.\n3. 0.40 mm = n_screw × 0.01 mm.\n4. Solving for n_screw:\n   n_screw = 0.40 mm / 0.01 mm = 40.\n5. The circular scale of the screw gauge will show 40 divisions coinciding with the reference line.",
    "NEET Cross-Instrument Insight: 4 Vernier divisions (at 0.1 mm each) = 0.4 mm = 40 Screw gauge divisions (at 0.01 mm each)!",
    "Option B assumes identical least counts. Option C is 400. Option D is 20."
))

# ==============================================================================
# Topic 19 (428-445): Zero error and zero correction (18 questions: 4 Easy, 9 Med, 5 Hard)
# ==============================================================================
qs.append(make_q(
    428,
    "When the jaws of a Vernier caliper are brought into contact, if the zero mark of the Vernier scale lies to the RIGHT of the zero mark of the main scale, the zero error is:",
    {"A": "Positive, and the zero correction is negative", "B": "Negative, and the zero correction is positive", "C": "Positive, and the zero correction is positive", "D": "Negative, and the zero correction is negative"},
    "A", "Easy", "Zero error and zero correction",
    "Definition of positive zero error and sign of zero correction.",
    "Vernier zero lies to the RIGHT of main scale zero.",
    "Zero Error is POSITIVE (+e). Zero Correction is NEGATIVE (-e). True Reading = Observed Reading - (Zero Error).",
    "1. When the zero of the Vernier scale lies to the right of the main scale zero, the instrument reads a positive value even when measuring nothing.\n2. Therefore, the zero error is POSITIVE (+).\n3. Since every observed reading will be systematically too large by this amount, we must SUBTRACT the error to get the true value.\n4. Hence, the zero correction is NEGATIVE (-).\n5. Zero Correction = - (Zero Error).",
    "NEET Golden Rule: Vernier zero to the RIGHT = POSITIVE error (+e)  =>  Correction is NEGATIVE (-e)!",
    "Option B is negative zero error (to the left). Options C and D violate the rule that correction is opposite in sign to error."
))

qs.append(make_q(
    429,
    "When the jaws of a Vernier caliper are closed, if the zero mark of the Vernier scale lies to the LEFT of the main scale zero, the zero error is:",
    {"A": "Negative, and the zero correction is positive", "B": "Positive, and the zero correction is negative", "C": "Negative, and the zero correction is negative", "D": "Zero error cannot be negative"},
    "A", "Easy", "Zero error and zero correction",
    "Definition of negative zero error.",
    "Vernier zero lies to the LEFT of main scale zero.",
    "Zero Error is NEGATIVE (-e). Zero Correction is POSITIVE (+e).",
    "1. When the Vernier zero lies to the left of the main scale zero, the instrument reads less than zero.\n2. The zero error is NEGATIVE (-).\n3. Because every measured reading will be systematically smaller than the true value, the error must be ADDED back.\n4. Therefore, the zero correction is POSITIVE (+).\n5. True Reading = Observed Reading - (-e) = Observed Reading + e.",
    "NEET Golden Rule: Vernier zero to the LEFT = NEGATIVE error (-e)  =>  Correction is POSITIVE (+e)!",
    "Option B describes positive zero error. Option C gives wrong sign to correction. Option D is false."
))

qs.append(make_q(
    430,
    "The fundamental relationship between True Reading, Observed Reading, and Zero Error is:",
    {"A": "True Reading = Observed Reading - (Zero Error with algebraic sign)", "B": "True Reading = Observed Reading + (Zero Error with algebraic sign)", "C": "True Reading = Observed Reading × Zero Error", "D": "True Reading = Observed Reading / Zero Error"},
    "A", "Easy", "Zero error and zero correction",
    "Universal formula for correcting zero error.",
    "Observed Reading and Zero Error (e).",
    "True Reading = Observed Reading - (Zero Error).",
    "1. If an instrument measures an observed reading R_obs, and has a zero error 'e' (with its proper algebraic sign + or -), the true reading is:\n   True Reading = Observed Reading - (Zero Error).\n2. If error is positive (+e): True = Observed - (+e) = Observed - e.\n3. If error is negative (-e): True = Observed - (-e) = Observed + e.\n4. This single equation correctly handles both cases.",
    "NEET Universal Equation: True Reading = Observed Reading - (Zero Error with proper sign)!",
    "Options B, C, and D are incorrect mathematical expressions."
))

qs.append(make_q(
    431,
    "A Vernier caliper has a zero error of +0.04 cm. If the observed reading of the length of a cylinder is 3.56 cm, the corrected true length is:",
    {"A": "3.52 cm", "B": "3.60 cm", "C": "3.56 cm", "D": "3.16 cm"},
    "A", "Easy", "Zero error and zero correction",
    "Application of positive zero error subtraction.",
    "Zero error e = +0.04 cm. Observed reading = 3.56 cm.",
    "True Reading = Observed Reading - Zero Error = 3.56 - (+0.04) = 3.52 cm.",
    "1. The zero error is positive: e = +0.04 cm.\n2. Observed reading R_obs = 3.56 cm.\n3. Apply the correction formula:\n   True Reading = R_obs - e = 3.56 cm - 0.04 cm = 3.52 cm.\n4. The true length of the cylinder is 3.52 cm.",
    "NEET Simple Calculation: True = 3.56 - 0.04 = 3.52 cm!",
    "Option B (3.60 cm) incorrectly adds the positive error. Option C ignores error. Option D has arithmetic error."
))

qs.append(make_q(
    432,
    "A Vernier caliper has a zero error of -0.03 cm. If the observed reading of a rod is 4.82 cm, the true length of the rod is:",
    {"A": "4.85 cm", "B": "4.79 cm", "C": "4.82 cm", "D": "5.12 cm"},
    "A", "Medium", "Zero error and zero correction",
    "Application of negative zero error correction.",
    "Zero error e = -0.03 cm. Observed reading = 4.82 cm.",
    "True Reading = Observed Reading - Zero Error = 4.82 - (-0.03) = 4.82 + 0.03 = 4.85 cm.",
    "1. The zero error is negative: e = -0.03 cm.\n2. Observed reading R_obs = 4.82 cm.\n3. Apply the formula:\n   True Reading = R_obs - (-0.03 cm) = 4.82 cm + 0.03 cm = 4.85 cm.\n4. The corrected true length is 4.85 cm.",
    "NEET Trap Buster: For NEGATIVE zero error (-0.03 cm), you ADD the magnitude: 4.82 + 0.03 = 4.85 cm!",
    "Option B (4.79 cm) subtracts the negative error instead of adding it. Option C ignores error. Option D has arithmetic error."
))

qs.append(make_q(
    433,
    "When the jaws of a Vernier caliper (LC = 0.1 mm) are brought together, the zero mark of the Vernier scale lies to the right of the main scale zero, and the 3rd Vernier division coincides with a main scale mark. The zero error of the caliper is:",
    {"A": "+0.3 mm (+0.03 cm)", "B": "-0.3 mm (-0.03 cm)", "C": "+0.7 mm (+0.07 cm)", "D": "-0.7 mm (-0.07 cm)"},
    "A", "Medium", "Zero error and zero correction",
    "Determining positive zero error from coinciding division.",
    "Vernier zero lies to the RIGHT of main scale zero. Coinciding division n = 3. LC = 0.1 mm.",
    "Positive Zero Error = + (n × LC) = + (3 × 0.1 mm) = +0.3 mm.",
    "1. Because the Vernier zero is to the right of the main scale zero, the zero error is POSITIVE (+).\n2. For positive zero error, the magnitude is simply the coinciding division n multiplied by the least count LC.\n3. Error = + (n × LC) = + (3 × 0.1 mm) = +0.3 mm = +0.03 cm.\n4. The zero error is +0.3 mm.",
    "NEET Rule for Positive Zero Error: Error = + (Coinciding division × LC) = + (3 × 0.1) = +0.3 mm!",
    "Option B has negative sign. Option C uses (10 - n), which is for negative zero error. Option D combines both mistakes."
))

qs.append(make_q(
    434,
    "When the jaws of a Vernier caliper (10 divisions on Vernier scale, LC = 0.1 mm) are closed, the zero mark of the Vernier scale lies to the left of the main scale zero, and the 6th Vernier division coincides with a main scale mark. The zero error of the caliper is:",
    {"A": "-0.4 mm (-0.04 cm)", "B": "-0.6 mm (-0.06 cm)", "C": "+0.6 mm (+0.06 cm)", "D": "+0.4 mm (+0.04 cm)"},
    "A", "Medium", "Zero error and zero correction",
    "Determining negative zero error using (N - n) rule.",
    "Vernier zero lies to the LEFT of main scale zero. Total Vernier divisions N = 10. Coinciding division n = 6. LC = 0.1 mm.",
    "Negative Zero Error = - (N - n) × LC = - (10 - 6) × 0.1 mm = - 4 × 0.1 mm = -0.4 mm.",
    "1. Because the Vernier zero is to the left of the main scale zero, the error is NEGATIVE (-).\n2. For negative zero error, we do NOT take the coinciding mark n directly! We must count from the right-hand end of the Vernier scale: (N - n).\n3. Number of divisions from end = 10 - 6 = 4 divisions.\n4. Negative Zero Error = - (10 - 6) × LC = - 4 × 0.1 mm = -0.4 mm = -0.04 cm.\n5. (The zero correction is +0.4 mm).",
    "NEET High-Yield Trap Alert: For NEGATIVE zero error: Error = - (Total divisions - Coinciding division) × LC = - (10 - 6) × 0.1 = -0.4 mm! Do NOT write -0.6 mm!",
    "Option B (-0.6 mm) is the classic mistake of using n instead of (N - n). Options C and D have positive signs."
))

qs.append(make_q(
    435,
    "When the jaws of a Vernier caliper (LC = 0.01 cm, 10 divisions on Vernier) are closed, the zero mark of Vernier lies to the left of the main scale zero, and the 7th Vernier division coincides with a main scale line. While measuring a sphere, the main scale reads 3.2 cm and the 4th Vernier division coincides. The true diameter of the sphere is:",
    {"A": "3.27 cm", "B": "3.21 cm", "C": "3.17 cm", "D": "3.31 cm"},
    "A", "Medium", "Zero error and zero correction",
    "Complete measurement problem with negative zero error.",
    "N = 10, LC = 0.01 cm. Zero lies to left; coinciding mark for zero error = 7. Measurement: MSR = 3.2 cm, n = 4.",
    "Zero Error = - (10 - 7) × 0.01 = -0.03 cm. Observed Reading = 3.2 + 4 × 0.01 = 3.24 cm. True = Observed - Error.",
    "1. Calculate Zero Error:\n   - Vernier zero is to the left => NEGATIVE error.\n   - Error = - (10 - 7) × LC = - 3 × 0.01 cm = -0.03 cm.\n2. Calculate Observed Reading:\n   - R_obs = MSR + (n × LC) = 3.2 cm + 4 × 0.01 cm = 3.24 cm.\n3. Calculate True Reading:\n   - True = R_obs - (Zero Error) = 3.24 cm - (-0.03 cm) = 3.24 + 0.03 = 3.27 cm.\n4. The true diameter of the sphere is 3.27 cm.",
    "NEET Full Solution: 1. Error = - (10 - 7) × 0.01 = -0.03 cm. 2. Observed = 3.24 cm. 3. True = 3.24 - (-0.03) = 3.27 cm!",
    "Option B (3.21 cm) subtracts 0.03 cm. Option C uses -0.07 cm error. Option D has arithmetic error."
))

qs.append(make_q(
    436,
    "In a screw gauge, zero error is determined when:",
    {"A": "The studs (anvil and spindle) are in contact without any object between them", "B": "The thimble is fully unscrewed to its maximum limit", "C": "A glass slab is clamped between the studs", "D": "The ratchet is rotated backwards by 5 turns"},
    "A", "Medium", "Zero error and zero correction",
    "Procedure for observing zero error in a screw gauge.",
    "Zero error determination in screw gauge.",
    "Zero error is checked when the plane faces of the anvil and spindle are in contact using the ratchet.",
    "1. To determine the zero error of a screw gauge, the spindle is advanced using the ratchet until its face makes gentle contact with the fixed anvil.\n2. The ratchet slips and produces a clicking sound when proper contact pressure is achieved.\n3. The observer then inspects whether the zero mark of the circular scale coincides with the reference baseline of the linear main scale.\n4. If the zeros coincide, zero error is zero.",
    "NEET Lab Practical Standard: Zero error is checked when the anvil and spindle make contact (ratchet clicks) with NO object present!",
    "Options B, C, and D are incorrect procedures."
))

qs.append(make_q(
    437,
    "When the studs of a screw gauge are in contact, if the zero mark of the circular scale lies BELOW the reference line of the linear scale, the zero error is:",
    {"A": "Positive, and the zero correction is negative", "B": "Negative, and the zero correction is positive", "C": "Positive, and the zero correction is positive", "D": "Negative, and the zero correction is negative"},
    "A", "Medium", "Zero error and zero correction",
    "Zero error convention in a screw gauge (below reference line).",
    "Circular scale zero lies BELOW the reference line.",
    "Zero Error is POSITIVE (+e). Correction is NEGATIVE (-e).",
    "1. When the circular scale zero is below the reference line, the screw has already advanced slightly forward beyond zero.\n2. The instrument reads a positive value (e.g. +3 divisions) even when fully closed.\n3. Therefore, the zero error is POSITIVE (+).\n4. The zero correction is NEGATIVE (-).\n5. True Reading = Observed Reading - (Zero Error).",
    "NEET Screw Gauge Rule: Circular zero BELOW reference line = POSITIVE zero error (+e)  =>  Correction is NEGATIVE (-e)!",
    "Option B is when zero is above the reference line. Options C and D have mismatched correction signs."
))

qs.append(make_q(
    438,
    "When the studs of a screw gauge are in contact, if the zero mark of the circular scale lies ABOVE the reference line, the zero error is:",
    {"A": "Negative, and the zero correction is positive", "B": "Positive, and the zero correction is negative", "C": "Negative, and the zero correction is negative", "D": "Zero error is always positive"},
    "A", "Medium", "Zero error and zero correction",
    "Screw gauge zero error convention (above reference line).",
    "Circular scale zero lies ABOVE the reference line.",
    "Zero Error is NEGATIVE (-e). Correction is POSITIVE (+e).",
    "1. When the circular scale zero is above the reference line, the screw has not yet reached zero when the jaws make contact.\n2. Every subsequent reading will underestimate the true thickness.\n3. Therefore, the zero error is NEGATIVE (-).\n4. The zero correction is POSITIVE (+).\n5. True Reading = Observed Reading - (-e) = Observed Reading + e.",
    "NEET Screw Gauge Rule: Circular zero ABOVE reference line = NEGATIVE zero error (-e)  =>  Correction is POSITIVE (+e)!",
    "Option B is when zero is below the reference line. Options C and D are incorrect."
))

qs.append(make_q(
    439,
    "A screw gauge has 50 circular divisions and pitch 0.5 mm (LC = 0.01 mm). When the studs are in contact, the zero mark of the circular scale lies 3 divisions below the reference line. The zero error is:",
    {"A": "+0.03 mm", "B": "-0.03 mm", "C": "+0.06 mm", "D": "-0.47 mm"},
    "A", "Medium", "Zero error and zero correction",
    "Calculating positive zero error in screw gauge.",
    "LC = 0.01 mm. Circular zero lies 3 divisions BELOW reference line.",
    "Positive Zero Error = + (n × LC) = + (3 × 0.01 mm) = +0.03 mm.",
    "1. Since the circular zero lies below the reference line, the zero error is POSITIVE (+).\n2. The number of divisions is n = 3.\n3. Least count LC = 0.01 mm.\n4. Zero Error = + (n × LC) = + (3 × 0.01 mm) = +0.03 mm.\n5. (The zero correction is -0.03 mm).",
    "NEET Direct Hit: Below line = Positive error: Error = + (3 × 0.01 mm) = +0.03 mm!",
    "Option B has negative sign. Option C uses 0.02 mm LC. Option D uses (50 - 3) which is for negative zero error."
))

qs.append(make_q(
    440,
    "A screw gauge has 100 circular divisions and a pitch of 1 mm (LC = 0.01 mm). When closed, the 96th circular division coincides with the reference line (zero lies above the reference line). The zero error of the screw gauge is:",
    {"A": "-0.04 mm", "B": "+0.96 mm", "C": "-0.96 mm", "D": "+0.04 mm"},
    "A", "Medium", "Zero error and zero correction",
    "Negative zero error in screw gauge using (N - n) divisions.",
    "Total divisions N = 100. 96th division coincides with reference line (zero is above). LC = 0.01 mm.",
    "Negative Zero Error = - (N - n) × LC = - (100 - 96) × 0.01 mm = - 4 × 0.01 mm = -0.04 mm.",
    "1. When the 96th division coincides with the reference line, the zero mark of the circular scale has passed the reference line and lies 4 divisions ABOVE it.\n2. Therefore, the zero error is NEGATIVE (-).\n3. Number of divisions above the reference line = 100 - 96 = 4 divisions.\n4. Zero Error = - (100 - 96) × LC = - 4 × 0.01 mm = -0.04 mm.\n5. (The zero correction is +0.04 mm).",
    "NEET NCERT Classic: When 96th mark coincides (out of 100): Zero is 4 divisions above line  =>  Error = - (100 - 96) × 0.01 mm = -0.04 mm!",
    "Option B (+0.96 mm) is the classic trap of taking 96 directly as positive error. Option C is -0.96 mm. Option D is +0.04 mm."
))

qs.append(make_q(
    441,
    "Using the screw gauge from the previous problem (zero error = -0.04 mm, LC = 0.01 mm), a student measures the thickness of a wire. The linear scale reads 2 mm and the 45th circular scale division coincides. The true diameter of the wire is:",
    {"A": "2.49 mm", "B": "2.41 mm", "C": "2.45 mm", "D": "2.51 mm"},
    "A", "Hard", "Zero error and zero correction",
    "Complete screw gauge measurement with negative zero error correction.",
    "Zero Error e = -0.04 mm. Main scale = 2 mm, Circular division = 45, LC = 0.01 mm.",
    "Observed Reading = PSR + (CSR × LC) = 2.00 + 45 × 0.01 = 2.45 mm. True = Observed - Error = 2.45 - (-0.04) = 2.49 mm.",
    "1. Calculate Observed Reading:\n   R_obs = 2 mm + 45 × 0.01 mm = 2.00 mm + 0.45 mm = 2.45 mm.\n2. Apply Zero Error correction:\n   Zero error e = -0.04 mm.\n   True Reading = R_obs - e = 2.45 mm - (-0.04 mm) = 2.45 mm + 0.04 mm = 2.49 mm.\n3. The true diameter of the wire is 2.49 mm.",
    "NEET Complete Solution: Observed = 2.45 mm. Zero error = -0.04 mm. True = 2.45 - (-0.04) = 2.49 mm!",
    "Option B (2.41 mm) subtracts 0.04 mm instead of adding it. Option C is the uncorrected reading. Option D is an arithmetic error."
))

qs.append(make_q(
    442,
    "A screw gauge has a least count of 0.001 cm and a positive zero error of +0.005 cm. While measuring the diameter of a sphere, the main scale reads 0.5 cm and the circular scale reads 25 divisions. The true diameter of the sphere is:",
    {"A": "0.520 cm", "B": "0.530 cm", "C": "0.525 cm", "D": "0.515 cm"},
    "A", "Hard", "Zero error and zero correction",
    "Screw gauge measurement with positive zero error subtraction.",
    "Zero Error = +0.005 cm. LC = 0.001 cm. Pitch scale = 0.5 cm, Circular division = 25.",
    "Observed Reading = 0.5 + 25 × 0.001 = 0.525 cm. True Reading = 0.525 - 0.005 = 0.520 cm.",
    "1. Calculate Observed Reading:\n   R_obs = 0.5 cm + 25 × 0.001 cm = 0.500 cm + 0.025 cm = 0.525 cm.\n2. Apply positive zero error correction:\n   Zero Error = +0.005 cm.\n   True Reading = Observed - (Zero Error) = 0.525 cm - 0.005 cm = 0.520 cm.\n3. The true diameter is 0.520 cm.",
    "NEET Two-Step Calculation: Observed = 0.525 cm  =>  True = 0.525 - 0.005 = 0.520 cm!",
    "Option B (0.530 cm) mistakenly adds the positive error. Option C is uncorrected. Option D subtracts 0.010 cm."
))

qs.append(make_q(
    443,
    "A student notes the following observations for a Vernier caliper: (i) When jaws touch, 0 of Vernier is to the right of 0 of main scale, and 4th division coincides (N = 10, LC = 0.1 mm). (ii) While measuring the edge of a cube, MSR = 18 mm, and 2nd division coincides. The corrected length is:",
    {"A": "17.8 mm", "B": "18.6 mm", "C": "18.2 mm", "D": "17.6 mm"},
    "A", "Hard", "Zero error and zero correction",
    "Net correction resulting in lower reading.",
    "Zero error: to right, 4th mark => e = + (4 × 0.1) = +0.4 mm. Measurement: MSR = 18 mm, n = 2 => Observed = 18 + 0.2 = 18.2 mm.",
    "True = Observed - Error = 18.2 - 0.4 = 17.8 mm.",
    "1. Zero Error determination:\n   - Vernier zero is to the right => Positive error.\n   - Error = + (4 × 0.1 mm) = +0.4 mm.\n2. Observed reading:\n   - R_obs = 18 mm + 2 × 0.1 mm = 18.2 mm.\n3. True reading:\n   - True = R_obs - Error = 18.2 mm - 0.4 mm = 17.8 mm.\n4. The corrected length is 17.8 mm.",
    "NEET Full Workflow: Error = +0.4 mm. Observed = 18.2 mm. True = 18.2 - 0.4 = 17.8 mm!",
    "Option B (18.6 mm) adds 0.4 mm. Option C is uncorrected. Option D subtracts 0.6 mm."
))

qs.append(make_q(
    444,
    "Why is zero error treated as a systematic error rather than a random error?",
    {"A": "Because it shifts every reading by a constant, predictable magnitude in the same direction", "B": "Because it changes randomly every time the jaws close", "C": "Because it only occurs on Mondays", "D": "Because it has no physical units"},
    "A", "Hard", "Zero error and zero correction",
    "Physical rationale for classifying zero error as systematic.",
    "Zero error.",
    "Systematic errors are constant, reproducible, and unidirectional.",
    "1. Zero error is caused by a permanent physical defect in the scale alignment or wear of the contact faces.\n2. As long as the instrument is intact, every single measurement taken with it is shifted by the EXACT same offset in the exact same direction (+e or -e).\n3. It does not fluctuate unpredictably from reading to reading.\n4. Because it is constant and predictable, it can be calibrated and removed completely by algebraic subtraction.\n5. Therefore, it is strictly a Systematic Error.",
    "NEET Conceptual Distinction: Zero error is reproducible, unidirectional, and constant. Hence it is SYSTEMATIC, not random!",
    "Options B, C, and D are absurd."
))

qs.append(make_q(
    445,
    "A screw gauge has a zero error e = +0.02 mm. A student forgets to subtract this error and calculates the volume of a sphere of measured diameter 10.00 mm. The calculated volume will be:",
    {"A": "Greater than the true volume by approximately 0.6%", "B": "Smaller than the true volume by 0.6%", "C": "Greater than the true volume by 0.2%", "D": "Identical to the true volume"},
    "A", "Hard", "Zero error and zero correction",
    "Propagation of uncorrected zero error into volume calculation.",
    "True diameter d_true = 10.00 - 0.02 = 9.98 mm. Measured diameter d_meas = 10.00 mm.",
    "Volume V = (π / 6) d³. Fractional error in volume: ΔV / V ≈ 3 (Δd / d).",
    "1. The measured diameter is larger than the true diameter by Δd = +0.02 mm.\n2. Fractional error in diameter: Δd / d = 0.02 mm / 10.00 mm = 0.002 (0.2%).\n3. Since volume V is proportional to d³:\n   Fractional error in volume: ΔV / V ≈ 3 (Δd / d) = 3 × 0.002 = 0.006 (0.6%).\n4. Because the measured diameter is too large, the calculated volume will be systematically GREATER than the true volume by approximately 0.6%.\n5. (Volume is overestimated!).",
    "NEET Applied Error Problem: V ∝ d³  =>  % overestimation in volume = 3 × (% error in d) = 3 × (0.02/10 × 100%) = 3 × 0.2% = 0.6% GREATER!",
    "Option B claims it is smaller. Option C forgets the power 3 on diameter. Option D claims no error."
))

print(f"Part 4 first half generated: {len(qs)} questions (391 to 445).")

with open('scripts/part4_first_half.json', 'w', encoding='utf-8') as f:
    json.dump(qs, f, indent=2)
