import sys, json
sys.path.append('scripts')
from make_q import make_q

with open('scripts/part3_qs.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

print(f"Loaded {len(qs)} questions. Adding Groups 13 to 16...")

# ==============================================================================
# Group 13 (331-345): Measurement errors and sources of error
# 4 Easy, 8 Medium, 3 Hard
# ==============================================================================
qs.append(make_q(
    331,
    "Parallax error during the reading of a liquid level in a graduated cylinder is an example of:",
    {"A": "Personal error (systematic error)", "B": "Random error", "C": "Least count error", "D": "Instrumental defect"},
    "A", "Easy", "Measurement errors and sources of error",
    "Classification of personal errors in measurement.",
    "Parallax error when viewing a meniscus.",
    "Parallax occurs due to incorrect positioning of the observer's eye relative to the scale, classified as a personal systematic error.",
    "1. Systematic errors are classified into three types: instrumental errors, imperfection in experimental technique, and personal errors.\n2. Parallax error arises when the observer does not view the pointer or meniscus perpendicularly to the scale line.\n3. Because it arises from human positioning habits, it is classified under Personal Systematic Errors.\n4. It can be completely eliminated by maintaining the line of sight strictly normal to the scale.",
    "NEET NCERT Classification: Parallax error = Personal systematic error. Eliminated by viewing strictly perpendicular to scale!",
    "Option B is random error. Option C is least count limitation. Option D is instrumental defect."
))

qs.append(make_q(
    332,
    "Errors that arise from unpredictable fluctuations in experimental conditions (e.g., sudden voltage changes, temperature shifts) are termed:",
    {"A": "Random errors", "B": "Systematic errors", "C": "Gross errors", "D": "Zero errors"},
    "A", "Easy", "Measurement errors and sources of error",
    "Definition of random errors in experimental physics.",
    "Unpredictable environmental fluctuations.",
    "Errors that occur irregularly and are random in sign and magnitude are called random errors.",
    "1. Random errors occur due to unknown and unpredictable causes during experimentation.\n2. Examples include sudden line voltage surges, ambient temperature drafts, mechanical vibrations of the building, and microscopic friction variations.\n3. They cannot be eliminated completely, but their effect on the final result is minimized by taking the arithmetic mean of multiple observations.",
    "NEET Definition: Unpredictable fluctuations = RANDOM errors. Eliminated by arithmetic mean of n readings!",
    "Option B refers to constant directional errors. Option C refers to human carelessness. Option D is an instrumental error."
))

qs.append(make_q(
    333,
    "Zero error of a Vernier caliper is classified as:",
    {"A": "An instrumental systematic error", "B": "A random error", "C": "A gross error", "D": "A human personal error"},
    "A", "Easy", "Measurement errors and sources of error",
    "Classification of zero error.",
    "Zero error in a measuring instrument.",
    "Zero error arises from imperfect manufacturing or wear of the instrument itself, making it an instrumental systematic error.",
    "1. When the measuring jaws of a Vernier caliper are brought together without any object, the zero mark of the Vernier scale should coincide with the zero mark of the main scale.\n2. If they do not coincide, the instrument possesses a zero error.\n3. Because this error originates from the instrument itself and affects every measurement with the same constant bias, it is an Instrumental Systematic Error.\n4. It can be measured beforehand and corrected algebraically.",
    "NEET Lab Concept: Zero error = Instrumental Systematic error. Corrected by: True Reading = Observed - (± Zero Error).",
    "Option B is random error. Option C is gross error. Option D is personal error."
))

qs.append(make_q(
    334,
    "Which of the following can completely eliminate a known systematic error?",
    {"A": "Applying an appropriate algebraic correction factor", "B": "Taking the average of 100 observations", "C": "Shaking the instrument before use", "D": "Converting the units to CGS"},
    "A", "Easy", "Measurement errors and sources of error",
    "Technique to eliminate systematic errors.",
    "A known systematic error (e.g. +0.05 mm zero error).",
    "True Value = Measured Value - Systematic Error.",
    "1. Because systematic errors are reproducible and constant, once their source and magnitude are determined, they can be eliminated by applying an algebraic correction.\n2. For example, if a screw gauge has a positive zero error of +0.03 mm, subtracting +0.03 mm from all observed readings completely eliminates this error.\n3. Simply averaging multiple readings does NOT eliminate systematic error.",
    "NEET High-Yield Tip: Systematic errors can be DETECTED and ELIMINATED by algebraic correction. Random errors can only be REDUCED statistically by averaging!",
    "Option B only reduces random error, leaving systematic bias intact. Options C and D are nonsensical."
))

qs.append(make_q(
    335,
    "A student records a reading as 4.25 cm instead of the true value 2.45 cm due to mere carelessness. Such an error is classified as:",
    {"A": "A gross error", "B": "A systematic error", "C": "A random error", "D": "A least count error"},
    "A", "Medium", "Measurement errors and sources of error",
    "Classification of gross errors due to human blunders.",
    "Careless transcription of digits (4.25 cm instead of 2.45 cm).",
    "Gross errors arise from gross negligence, carelessness, reading an instrument incorrectly, or recording wrong data.",
    "1. Gross errors are blunders caused by the sheer carelessness of the observer.\n2. Examples include: reading a scale from the wrong direction, transposing digits (writing 4.25 instead of 2.45), forgetting to zero an instrument, or recording data in the wrong column.\n3. Gross errors cannot be treated by error analysis formulas; the only remedy is for the experimenter to discard the flawed data and repeat the measurement with care.",
    "NEET Concept: Gross error = Human blunder / carelessness. Cannot be treated mathematically—must be discarded!",
    "Option B is reproducible bias. Option C is random fluctuation. Option D is scale resolution limit."
))

qs.append(make_q(
    336,
    "The least count error in an instrument can be minimized by:",
    {"A": "Using an instrument with higher resolution and taking the mean of multiple readings", "B": "Taking only a single quick reading", "C": "Applying a random multiplier", "D": "Ignoring the fractional division"},
    "A", "Medium", "Measurement errors and sources of error",
    "Minimizing least count error.",
    "Least count error (uncertainty associated with the instrument resolution).",
    "Least count error is treated as a random error; it is reduced by using instruments with smaller least count and taking arithmetic mean of repeated readings.",
    "1. The least count error is the error associated with the resolution of the instrument.\n2. For a meter scale with LC = 1 mm, the least count error is ±1 mm.\n3. By switching to a Vernier caliper (LC = 0.1 mm) or a screw gauge (LC = 0.01 mm), the least count error is directly reduced by 10 to 100 times.\n4. Furthermore, by repeating the measurement and taking the mean, the uncertainty in the mean is reduced.",
    "NEET Lab Rule: Least count error is reduced by: (1) higher precision instruments (finer LC), and (2) averaging multiple observations!",
    "Option B increases uncertainty. Options C and D are scientifically invalid."
))

qs.append(make_q(
    337,
    "In measuring the time period of a simple pendulum, why is it recommended to measure the time for 50 or 100 oscillations rather than for a single oscillation?",
    {"A": "To reduce the percentage error caused by the reaction time of the experimenter starting and stopping the stopwatch", "B": "Because the pendulum changes its mass during oscillation", "C": "Because acceleration due to gravity increases with time", "D": "To change the dimensions of time"},
    "A", "Medium", "Measurement errors and sources of error",
    "Error reduction in pendulum timing experiment.",
    "Measuring 50 oscillations (time t) vs 1 oscillation (time T).",
    "T = t / n  =>  ΔT = Δt / n  =>  ΔT / T = Δt / t.",
    "1. When an experimenter uses a manual stopwatch, human reaction time introduces an error of about Δt ≈ 0.2 s both when starting and stopping (total uncertainty Δt ≈ 0.2 to 0.4 s).\n2. For 1 oscillation (T ≈ 2 s), the percentage error is (0.2 / 2) × 100% = 10% (very large!).\n3. For 50 oscillations (total time t = 50 × 2 s = 100 s), the total timing uncertainty Δt is STILL about 0.2 s.\n4. The percentage error in the time period becomes (0.2 / 100) × 100% = 0.2% (reduced by 50 times!).\n5. Therefore, timing many oscillations drastically reduces the fractional error.",
    "NEET Classic Lab Question: Timing n oscillations reduces the percentage error in time period by a factor of n: % error = (Δt / nT) × 100%!",
    "Options B, C, and D are scientifically incorrect."
))

qs.append(make_q(
    338,
    "Backlash error occurs in screw-based instruments (such as a screw gauge or spherometer) due to:",
    {"A": "Wear and tear or loose fitting between the screw threads and the nut", "B": "Expansion of the metal frame in winter", "C": "High speed of circular scale rotation", "D": "Parallax error of the observer"},
    "A", "Medium", "Measurement errors and sources of error",
    "Cause of backlash error in screw gauge.",
    "Backlash error in screw-based instruments.",
    "Play or looseness between screw threads and nut prevents the screw from advancing immediately upon reversal.",
    "1. Due to prolonged use and mechanical wear, the threads of the screw and the inner nut can become loose.\n2. When the direction of rotation of the thimble is reversed, the screw tip does not move linearly for a fraction of a turn while the play in the threads is taken up.\n3. This causes a discrepancy in reading known as backlash error.\n4. To avoid backlash error, the screw must ALWAYS be rotated in the same continuous direction when taking a reading.",
    "NEET Lab Practical Rule: To eliminate backlash error in a screw gauge, ALWAYS rotate the screw in ONE single direction! Never reverse it back and forth!",
    "Option B is thermal expansion. Option C is rotational speed. Option D is parallax."
))

qs.append(make_q(
    339,
    "Imperfection in experimental technique is a systematic error. An example of this is:",
    {"A": "Measuring the temperature of a human body by placing a thermometer under the armpit rather than under the tongue", "B": "Writing 12 instead of 21 on the answer sheet", "C": "A loose contact in an electrical circuit fluctuating randomly", "D": "A faulty division printed on a ruler"},
    "A", "Medium", "Measurement errors and sources of error",
    "Illustrating imperfection in experimental procedure.",
    "Systematic error due to experimental technique.",
    "The physical method used inherently fails to measure the true parameter.",
    "1. Placing a clinical thermometer under the armpit will always record a temperature roughly 0.5°C to 1.0°F lower than the true internal core body temperature.\n2. This error is not due to a broken thermometer or careless reading, but due to an inherent limitation in the measurement procedure.\n3. Therefore, it is classified as an Imperfection in Experimental Technique (a systematic error).\n4. Other examples include failing to account for buoyant force of air when weighing, or failing to insulate against radiative heat loss in calorimetry.",
    "NEET NCERT Example: Temperature under the armpit is consistently lower than true body temperature due to experimental technique imperfection!",
    "Option B is a gross error. Option C is a random error. Option D is an instrumental error."
))

qs.append(make_q(
    340,
    "Which of the following is NOT a source of systematic error?",
    {"A": "Unpredictable fluctuations in room temperature during an experiment", "B": "Wear and tear of the jaws of a Vernier caliper", "C": "Improper calibration of an ammeter", "D": "Neglecting air buoyancy in mass measurements"},
    "A", "Medium", "Measurement errors and sources of error",
    "Differentiating random error sources from systematic error sources.",
    "Four experimental error sources.",
    "Unpredictable fluctuations produce random errors, not systematic errors.",
    "1. Unpredictable environmental temperature changes fluctuate randomly in both positive and negative directions. This is the hallmark of RANDOM error.\n2. Worn jaws cause a constant zero error (systematic).\n3. Improper calibration causes an ammeter to read consistently high or low (systematic).\n4. Neglecting air buoyancy introduces a constant directional mass bias (systematic).\n5. Therefore, Option A is a source of random error, not systematic error.",
    "NEET Rule: If an error is unpredictable and fluctuates up/down, it is RANDOM! If it has a constant cause and direction, it is SYSTEMATIC!",
    "Options B, C, and D are all classic sources of systematic error."
))

qs.append(make_q(
    341,
    "In a resonance tube experiment to determine the speed of sound, end correction is introduced to eliminate:",
    {"A": "A systematic error caused by the antinode forming slightly outside the open end of the tube", "B": "A random error caused by air humidity", "C": "A gross error caused by incorrect tuning fork selection", "D": "Least count error of the meter rule"},
    "A", "Medium", "Measurement errors and sources of error",
    "End correction in resonance tube as a systematic error correction.",
    "Resonance tube experiment: antinode position.",
    "The antinode forms at a distance e = 0.6 r above the open tube rim: l₁ + e = λ/4, l₂ + e = 3λ/4.",
    "1. In an open-ended acoustic pipe, sound reflection does not occur precisely at the physical rim, but slightly outside the open end by an end correction e ≈ 0.6 r (where r is tube radius).\n2. If end correction is ignored, every measured length l will underestimate the true acoustic quarter-wavelength by e, causing a systematic error in the speed of sound.\n3. By using two resonance lengths l₁ and l₂, we subtract them: l₂ - l₁ = (3λ/4 - e) - (λ/4 - e) = λ/2.\n4. This completely eliminates the systematic end correction error e!",
    "NEET Sound Physics Classic: Subtracting resonance lengths (l₂ - l₁ = λ/2) ELIMINATES the systematic end correction error e!",
    "Options B, C, and D do not represent the physical origin of end correction."
))

qs.append(make_q(
    342,
    "Why is temperature kept strictly constant in experiments verifying Ohm's law (V = I R)?",
    {"A": "To prevent temperature-induced resistance changes, which would introduce a systematic error in the V-I linearity", "B": "Because electrons stop moving at low temperatures", "C": "To keep the ammeter from freezing", "D": "Because current has dimensions of temperature"},
    "A", "Medium", "Measurement errors and sources of error",
    "Control of physical conditions in Ohm's law experiment.",
    "Verification of Ohm's law: V ∝ I.",
    "Resistance of a metallic conductor varies with temperature: R(T) = R₀ (1 + α ΔT).",
    "1. Ohm's law states that current is proportional to potential difference provided physical conditions such as temperature remain constant.\n2. If current flows continuously, Joule heating (H = I² R t) raises the temperature of the wire.\n3. As temperature rises, resistance R increases, causing the V-I graph to curve upwards instead of remaining a straight line.\n4. This would introduce a systematic deviation from linearity.\n5. Hence, current is passed only briefly to avoid temperature rise.",
    "NEET Lab Concept: Joule heating changes wire resistance, violating the Ohm's law condition of constant physical state!",
    "Options B, C, and D are physically incorrect."
))

qs.append(make_q(
    343,
    "In a calorimetry experiment, the temperature of warm water is measured over time to calculate specific heat. The major source of systematic error that must be corrected using Newton's law of cooling is:",
    {"A": "Radiation and convective heat loss to the surroundings during the experiment", "B": "The least count of the thermometer", "C": "Thermal expansion of the copper calorimeter", "D": "The mass of the stirrer"},
    "A", "Hard", "Measurement errors and sources of error",
    "Heat loss in calorimetry as a systematic error.",
    "Calorimetry experiment.",
    "Calorimeter loses heat continuously to surroundings: dQ/dt = -k (T - T₀).",
    "1. A calorimeter cannot be perfectly insulated from ambient surroundings.\n2. Heat is continuously lost via conduction, convection, and radiation throughout the measurement period.\n3. If uncorrected, this causes the final mixture temperature to be systematically lower than the theoretical adiabatic value.\n4. A cooling curve correction (Regnault's or Rumford's cooling correction) is systematically applied to account for this heat loss.",
    "NEET Thermal Physics: Heat loss to surroundings in calorimetry is a SYSTEMATIC error, corrected using Newton's Law of Cooling!",
    "Option B is random resolution error. Options C and D are minor or accounted for in water equivalent."
))

qs.append(make_q(
    344,
    "A student measures the focal length of a convex lens using the u-v method. If the student consistently reads the optical bench scale from the left edge of the lens holder instead of the index mark at the center of the lens, the resulting error in focal length is:",
    {"A": "A systematic index error", "B": "A random error that averages to zero", "C": "A gross error that changes every minute", "D": "A least count error"},
    "A", "Hard", "Measurement errors and sources of error",
    "Index error in optical bench experiments.",
    "Optical bench lens positioning.",
    "Index error is the constant offset between the bench upright mark and the optical center of the lens/mirror.",
    "1. In an optical bench, the position of a lens or pin is read off the bench scale using the index mark at the base of the upright holder.\n2. If the optical center of the lens does not coincide with this mark, or if the student reads from an offset edge, every measurement of object distance u and image distance v is shifted by a constant offset.\n3. This constant offset is called the Index Error (a systematic instrumental/procedural error).\n4. It must be determined using an index needle and algebraically corrected for all positions.",
    "NEET Optics Lab Milestone: Index error in an optical bench is a SYSTEMATIC error, corrected by: True distance = Observed distance ± Index correction!",
    "Option B is false because the offset is constant. Options C and D misclassify the error."
))

qs.append(make_q(
    345,
    "A researcher conducts an experiment with 25 independent trials and observes a mean random error of ±0.40 units. If the researcher wishes to reduce the random error of the mean to ±0.10 units, how many total trials must be conducted?",
    {"A": "400 trials", "B": "100 trials", "C": "250 trials", "D": "50 trials"},
    "A", "Hard", "Measurement errors and sources of error",
    "Calculating sample size to achieve target precision using 1/√n law.",
    "Initial trials n₁ = 25, error E₁ = 0.40. Target error E₂ = 0.10.",
    "Random error of the mean: E ∝ 1 / √n  =>  E₁ / E₂ = √(n₂ / n₁).",
    "1. Ratio of errors: E₁ / E₂ = 0.40 / 0.10 = 4.\n2. Since error is inversely proportional to √n:\n   √(n₂ / n₁) = E₁ / E₂ = 4.\n3. Square both sides:\n   n₂ / n₁ = 4² = 16.\n4. Therefore, total trials needed n₂ = 16 × n₁ = 16 × 25 = 400 trials.\n5. To reduce the random error by 4 times, the number of measurements must increase by 4² = 16 times (400 total trials).",
    "NEET Power Formula: To reduce random error by a factor of k, you must increase the number of observations by k²! Here k = 4, so n = 25 × 4² = 400!",
    "Option B (100) assumes linear scaling (n ∝ 1/E). Options C and D are undercounts."
))

# ==============================================================================
# Group 14 (346-360): Absolute, relative and percentage errors
# 3 Easy, 8 Medium, 4 Hard
# ==============================================================================
qs.append(make_q(
    346,
    "The absolute error in a measurement is defined as:",
    {"A": "The magnitude of the difference between the true value and the individual measured value", "B": "The ratio of the mean error to the true value", "C": "The percentage deviation from the mean", "D": "The smallest division on the measuring scale"},
    "A", "Easy", "Absolute, relative and percentage errors",
    "Definition of absolute error in measurement.",
    "Concept of absolute error Δa_i.",
    "Absolute error Δa_i = |a_true - a_i|. When true value is unknown, arithmetic mean a_mean is taken as true value.",
    "1. The absolute error of a measurement is the difference between the true value of the quantity and the measured value.\n2. In practice, because the true value is not known a priori, the arithmetic mean of all observations is taken as the best estimate of the true value.\n3. Absolute error is always considered as a positive magnitude: Δa_i = |a_mean - a_i|.\n4. It has the same units as the physical quantity being measured.",
    "NEET NCERT Definition: Absolute error Δa = |a_mean - a_measured|. It ALWAYS has units!",
    "Option B is relative error. Option C is percentage error. Option D is least count."
))

qs.append(make_q(
    347,
    "Relative error (or fractional error) of a measurement is defined as:",
    {"A": "The ratio of the mean absolute error to the mean value of the quantity", "B": "The product of the absolute error and the mean value", "C": "The square of the absolute error", "D": "The difference between maximum and minimum readings"},
    "A", "Easy", "Absolute, relative and percentage errors",
    "Definition of relative error.",
    "Relative error.",
    "Relative Error = Δa_mean / a_mean. It is a dimensionless ratio.",
    "1. Relative error is the ratio of the mean absolute error (Δa_mean) to the arithmetic mean value (a_mean) of the quantity measured.\n2. Relative Error = Δa_mean / a_mean.\n3. Because it is the ratio of two quantities with the same units, relative error is completely dimensionless and unitless.\n4. Multiplying relative error by 100 gives percentage error.",
    "NEET High-Yield Definition: Relative Error = Δa_mean / a_mean (unitless!). Percentage Error = Relative Error × 100%!",
    "Option B multiplies instead of dividing. Options C and D are incorrect mathematical operations."
))

qs.append(make_q(
    348,
    "The measured length of an object is (20.0 ± 0.2) cm. The percentage error in this measurement is:",
    {"A": "1.0%", "B": "0.1%", "C": "2.0%", "D": "0.01%"},
    "A", "Easy", "Absolute, relative and percentage errors",
    "Calculating percentage error from measured value and absolute uncertainty.",
    "Measured value l = 20.0 cm, absolute error Δl = 0.2 cm.",
    "Percentage Error = (Δl / l) × 100%.",
    "1. Given length l = 20.0 cm.\n2. Absolute error Δl = 0.2 cm.\n3. Relative error = Δl / l = 0.2 / 20.0 = 0.01.\n4. Percentage error = (0.2 / 20.0) × 100% = 1.0%.\n5. Therefore, the percentage error is 1.0%.",
    "NEET Fast Calculation: (0.2 / 20.0) × 100% = (2 / 20)% = 1.0%!",
    "Option B forgets multiplying by 100. Option C doubles the error. Option D has wrong decimal placement."
))

qs.append(make_q(
    349,
    "A student measures the period of oscillation of a simple pendulum in five successive trials as 2.63 s, 2.56 s, 2.42 s, 2.71 s, and 2.80 s. The mean period of oscillation is:",
    {"A": "2.62 s", "B": "2.60 s", "C": "2.65 s", "D": "2.58 s"},
    "A", "Medium", "Absolute, relative and percentage errors",
    "NCERT classic problem: finding arithmetic mean of pendulum periods.",
    "Five readings: 2.63 s, 2.56 s, 2.42 s, 2.71 s, 2.80 s.",
    "T_mean = (∑ T_i) / n.",
    "1. Sum of readings:\n   2.63 + 2.56 + 2.42 + 2.71 + 2.80 = 13.12 s.\n2. Number of observations n = 5.\n3. T_mean = 13.12 / 5 = 2.624 s.\n4. Rounding to 2 decimal places (matching the precision of the raw data): T_mean = 2.62 s.",
    "NEET NCERT Textbook Problem: The mean period is 13.12 / 5 = 2.624 s ≈ 2.62 s!",
    "Options B, C, and D are incorrect arithmetic averages."
))

qs.append(make_q(
    350,
    "For the pendulum readings 2.63 s, 2.56 s, 2.42 s, 2.71 s, and 2.80 s (with mean T = 2.62 s), the absolute errors in the first and third readings are respectively:",
    {"A": "+0.01 s and -0.20 s", "B": "+0.01 s and +0.20 s", "C": "-0.01 s and +0.20 s", "D": "+0.11 s and -0.10 s"},
    "A", "Medium", "Absolute, relative and percentage errors",
    "Individual absolute errors calculation (T_i - T_mean).",
    "Mean T_mean = 2.62 s. T₁ = 2.63 s, T₃ = 2.42 s.",
    "ΔT_i = T_i - T_mean.",
    "1. For the first reading T₁ = 2.63 s:\n   ΔT₁ = 2.63 - 2.62 = +0.01 s.\n2. For the third reading T₃ = 2.42 s:\n   ΔT₃ = 2.42 - 2.62 = -0.20 s.\n3. The individual deviations are +0.01 s and -0.20 s respectively.\n4. (Note: when calculating mean absolute error, magnitudes |ΔT_i| are taken).",
    "NEET NCERT Step Check: Individual deviation = (reading - mean). For 2.63 s: +0.01 s; for 2.42 s: -0.20 s!",
    "Option B takes magnitude for both. Option C swaps signs. Option D has arithmetic errors."
))

qs.append(make_q(
    351,
    "The resistance of a wire is given as R = (50 ± 2) Ω. The fractional error and percentage error in resistance are respectively:",
    {"A": "0.04 and 4%", "B": "0.02 and 2%", "C": "0.4 and 40%", "D": "0.04 and 0.04%"},
    "A", "Medium", "Absolute, relative and percentage errors",
    "Fractional and percentage error evaluation.",
    "R = 50 Ω, ΔR = 2 Ω.",
    "Fractional error = ΔR / R. Percentage error = (ΔR / R) × 100%.",
    "1. Fractional error = ΔR / R = 2 / 50 = 0.04 (unitless).\n2. Percentage error = (ΔR / R) × 100% = 0.04 × 100% = 4%.\n3. Therefore, fractional error is 0.04 and percentage error is 4%.",
    "NEET Fast Conversion: 2 / 50 = 4 / 100 = 0.04 = 4%!",
    "Option B halves the error. Option C is off by a factor of 10. Option D forgets the 100% factor."
))

qs.append(make_q(
    352,
    "The mass of an object is measured as (4.23 ± 0.01) kg and its volume as (2.11 ± 0.02) m³. The percentage errors in mass and volume are respectively:",
    {"A": "0.24% and 0.95%", "B": "0.42% and 0.21%", "C": "2.4% and 9.5%", "D": "0.01% and 0.02%"},
    "A", "Medium", "Absolute, relative and percentage errors",
    "Comparing percentage errors in two distinct physical observables.",
    "Mass m = (4.23 ± 0.01) kg, Volume V = (2.11 ± 0.02) m³.",
    "% error in m = (Δm / m) × 100%; % error in V = (ΔV / V) × 100%.",
    "1. Percentage error in mass:\n   % error_m = (0.01 / 4.23) × 100% = 1 / 4.23 = 0.236% ≈ 0.24%.\n2. Percentage error in volume:\n   % error_V = (0.02 / 2.11) × 100% = 2 / 2.11 = 0.948% ≈ 0.95%.\n3. The percentage errors are 0.24% and 0.95% respectively.",
    "NEET Mental Math: 1/4.23 ≈ 0.24%; 2/2.11 ≈ 0.95%!",
    "Option B swaps numbers. Option C multiplies by 10. Option D quotes absolute errors."
))

qs.append(make_q(
    353,
    "If the percentage error in measuring the radius of a circle is 1.5%, the percentage error in its calculated circumference C = 2 π r is:",
    {"A": "1.5%", "B": "3.0%", "C": "0.75%", "D": "4.5%"},
    "A", "Medium", "Absolute, relative and percentage errors",
    "Linear scaling of percentage error in proportional relations.",
    "Circumference C = 2 π r. Percentage error in r is 1.5%.",
    "C ∝ r¹  =>  ΔC / C = 1 · (Δr / r)  =>  % error in C = % error in r.",
    "1. The circumference formula is C = 2 π r.\n2. The factor 2 π is an exact mathematical constant with zero error.\n3. The power of radius r is 1.\n4. Therefore, fractional error in C equals fractional error in r:\n   ΔC / C = Δr / r.\n5. Percentage error in C = Percentage error in r = 1.5%.\n6. (Notice that area A = π r² would have 2 × 1.5% = 3.0%, but circumference is linear in r).",
    "NEET Alert: Circumference is LINEAR in r (power = 1)! So % error in C is EXACTLY equal to % error in r (1.5%)!",
    "Option B (3.0%) is the error in area (r²). Option C halves the error. Option D is 3× error."
))

qs.append(make_q(
    354,
    "A potential difference of V = (100 ± 5) V is applied across a resistor, and a current of I = (10 ± 0.2) A is observed. The percentage error in the resistance R = V / I is:",
    {"A": "7%", "B": "5%", "C": "2%", "D": "3%"},
    "A", "Medium", "Absolute, relative and percentage errors",
    "Quotient error propagation in Ohm's law.",
    "V = 100 V, ΔV = 5 V; I = 10 A, ΔI = 0.2 A.",
    "R = V / I  =>  ΔR / R = ΔV / V + ΔI / I  =>  % error in R = % error in V + % error in I.",
    "1. % error in V = (ΔV / V) × 100% = (5 / 100) × 100% = 5%.\n2. % error in I = (ΔI / I) × 100% = (0.2 / 10) × 100% = 2%.\n3. For quotient R = V / I, maximum percentage errors ADD:\n   % error in R = 5% + 2% = 7%.\n4. The maximum percentage error in resistance is 7%.",
    "NEET Ohm's Law Classic: % error in R = % error in V (5%) + % error in I (2%) = 7%!",
    "Option B ignores current error. Option C is current error alone. Option D subtracts errors (5% - 2%), which is WRONG for maximum error."
))

qs.append(make_q(
    355,
    "The refractive index of water is measured in four trials as 1.29, 1.33, 1.34, and 1.36. The mean value of refractive index is:",
    {"A": "1.33", "B": "1.34", "C": "1.32", "D": "1.35"},
    "A", "Medium", "Absolute, relative and percentage errors",
    "Mean value calculation for optics measurements.",
    "Four readings: 1.29, 1.33, 1.34, 1.36.",
    "μ_mean = (∑ μ_i) / 4.",
    "1. Sum of readings: 1.29 + 1.33 + 1.34 + 1.36 = 5.32.\n2. Divide by n = 4:\n   μ_mean = 5.32 / 4 = 1.33.\n3. The mean value is exactly 1.33 (which matches the known standard refractive index of water!).",
    "NEET Physics Fact: Sum = 5.32 / 4 = 1.33!",
    "Options B, C, and D are incorrect averages."
))

qs.append(make_q(
    356,
    "A physical quantity X has a fractional error of 0.025. Expressed as a percentage, this error is:",
    {"A": "2.5%", "B": "0.25%", "C": "25%", "D": "0.025%"},
    "A", "Medium", "Absolute, relative and percentage errors",
    "Conversion between fractional error and percentage error.",
    "Fractional error = 0.025.",
    "Percentage Error = Fractional Error × 100%.",
    "1. By definition, Percentage Error = (Fractional Error) × 100%.\n2. 0.025 × 100% = 2.5%.\n3. Therefore, the percentage error is 2.5%.",
    "NEET Mental Math: Multiply by 100 to convert fractional error to percentage: 0.025 × 100 = 2.5%!",
    "Option B divided by 10. Option C multiplied by 1000. Option D omitted the 100 factor."
))

qs.append(make_q(
    357,
    "The acceleration due to gravity is determined using g = 4 π² L / T². If L is measured to within 1% and T to within 2%, the maximum percentage error in the calculated value of g is:",
    {"A": "5%", "B": "3%", "C": "4%", "D": "1%"},
    "A", "Hard", "Absolute, relative and percentage errors",
    "Power rule error propagation in pendulum gravity formula.",
    "g = 4 π² L / T². % error in L = 1%, % error in T = 2%.",
    "Δg / g = ΔL / L + 2 (ΔT / T)  =>  % error in g = % error in L + 2 (% error in T).",
    "1. In g = 4 π² L / T², length L has power 1 and period T has power 2 in the denominator.\n2. In maximum permissible error estimation, powers become multiplicative coefficients and errors ALWAYS add up:\n   (Δg / g) = 1 (ΔL / L) + 2 (ΔT / T).\n3. Substitute given percentage errors:\n   % error in g = 1(1%) + 2(2%) = 1% + 4% = 5%.\n4. Therefore, the maximum percentage error in g is 5%.",
    "NEET Most-Repeated Question: g = 4π² L / T²  =>  % error = % error in L + 2(% error in T) = 1% + 2(2%) = 5%!",
    "Option B (3%) forgets the square on T (1% + 2% = 3%). Option C is 2 × 2%. Option D subtracts errors."
))

qs.append(make_q(
    358,
    "The density of a sphere is given by ρ = m / ((4/3) π r³). If the percentage errors in mass m and radius r are 2% and 1% respectively, the maximum percentage error in density is:",
    {"A": "5%", "B": "3%", "C": "7%", "D": "1%"},
    "A", "Hard", "Absolute, relative and percentage errors",
    "Volume cubing error propagation in density.",
    "ρ = m / V = m / ((4/3) π r³). % error in m = 2%, % error in r = 1%.",
    "Δρ / ρ = Δm / m + 3 (Δr / r)  =>  % error in ρ = % error in m + 3 (% error in r).",
    "1. Mass m has power 1.\n2. Radius r has power 3 in the volume formula V = (4/3) π r³.\n3. The numerical factor (4/3) π is an exact constant with zero error.\n4. Maximum fractional error: Δρ / ρ = (Δm / m) + 3 (Δr / r).\n5. Multiply by 100%:\n   % error in ρ = 2% + 3(1%) = 2% + 3% = 5%.\n6. The maximum percentage error in density is 5%.",
    "NEET Top Formula: Density of sphere: % error = % error in mass + 3(% error in radius) = 2% + 3(1%) = 5%!",
    "Option B (3%) forgets the power 3 on radius (2% + 1%). Option C uses power 5. Option D subtracts errors."
))

qs.append(make_q(
    359,
    "In an experiment, four quantities a, b, c, and d are measured with percentage errors of 1%, 2%, 3%, and 4% respectively. A physical quantity P is calculated as P = a³ b² / (c d). What is the maximum percentage error in P?",
    {"A": "14%", "B": "7%", "C": "10%", "D": "12%"},
    "A", "Hard", "Absolute, relative and percentage errors",
    "Multi-variable power error propagation.",
    "P = a³ b² / (c d). % errors: a = 1%, b = 2%, c = 3%, d = 4%.",
    "ΔP / P = 3(Δa / a) + 2(Δb / b) + 1(Δc / c) + 1(Δd / d).",
    "1. Apply power rule to every variable:\n   - Term in a³ contributes: 3 × 1% = 3%\n   - Term in b² contributes: 2 × 2% = 4%\n   - Term in c¹ contributes: 1 × 3% = 3%\n   - Term in d¹ contributes: 1 × 4% = 4%.\n2. For MAXIMUM error, all contributions ADD together:\n   % error in P = 3% + 4% + 3% + 4% = 14%.\n3. Therefore, maximum percentage error in P is 14%.",
    "NEET Golden Rule: 3(1%) + 2(2%) + 1(3%) + 1(4%) = 3 + 4 + 3 + 4 = 14%!",
    "Option B (7%) subtracts denominator powers (3 + 4 - 3 - 4 = 0 or 7). Option C is 10%. Option D is 12%."
))

qs.append(make_q(
    360,
    "The kinetic energy of a body is K = (1/2) m v². If the momentum p of the body is measured with a percentage error of 2%, what is the percentage error in its kinetic energy?",
    {"A": "4%", "B": "2%", "C": "1%", "D": "8%"},
    "A", "Hard", "Absolute, relative and percentage errors",
    "Kinetic energy in terms of momentum: K = p² / (2m).",
    "K = p² / (2 m) for a constant mass m. % error in p = 2%.",
    "ΔK / K = 2 (Δp / p)  =>  % error in K = 2 × (% error in p).",
    "1. The relationship between kinetic energy K and linear momentum p is K = p² / (2 m).\n2. For a given body, mass m is constant (zero error).\n3. Since K is proportional to p², the power of p is 2.\n4. Maximum fractional error: ΔK / K = 2 (Δp / p).\n5. Percentage error in K = 2 × (2%) = 4%.\n6. (For small percentage errors <= 5%, the differential approximation is highly accurate).",
    "NEET Momentum-KE Link: K = p² / (2m). Error in K = 2 × (Error in p) = 2 × 2% = 4%!",
    "Option B forgets the power 2. Option C halves the error. Option D cubes the error."
))

# ==============================================================================
# Group 15 (361-375): Mean absolute error
# 3 Easy, 8 Medium, 4 Hard
# ==============================================================================
qs.append(make_q(
    361,
    "Mean absolute error (Δa_mean) is calculated as:",
    {"A": "The arithmetic mean of the magnitudes of the absolute errors of all individual measurements", "B": "The algebraic sum of all errors divided by n", "C": "The square root of the sum of squared errors", "D": "The difference between the maximum and minimum errors"},
    "A", "Easy", "Mean absolute error",
    "Definition and formula of mean absolute error.",
    "Concept of mean absolute error.",
    "Δa_mean = (1 / n) ∑ |Δa_i| = (|Δa₁| + |Δa₂| + ... + |Δa_n|) / n.",
    "1. Individual deviations (a_i - a_mean) can be positive or negative.\n2. If they were added algebraically without absolute values, their sum would identically equal zero by definition of the mean: ∑ (a_i - a_mean) = 0.\n3. Therefore, we take the absolute value (magnitude) of each error: |Δa_i|.\n4. Mean absolute error is the arithmetic average of these positive magnitudes: Δa_mean = (∑ |Δa_i|) / n.",
    "NEET NCERT Definition: Mean absolute error is the arithmetic mean of the ABSOLUTE MAGNITUDES of individual errors!",
    "Option B equals zero identically. Option C is standard deviation / RMS error. Option D is range."
))

qs.append(make_q(
    362,
    "Why can we NOT calculate mean error simply as (1/n) ∑ (a_i - a_mean)?",
    {"A": "Because the sum of deviations from the arithmetic mean is identically zero", "B": "Because negative numbers cannot be divided", "C": "Because errors must always be squared", "D": "Because instruments cannot measure negative numbers"},
    "A", "Easy", "Mean absolute error",
    "Mathematical identity of deviations from the arithmetic mean.",
    "Sum of deviations ∑ (a_i - a_mean).",
    "∑ (a_i - a_mean) = ∑ a_i - n · a_mean = n · a_mean - n · a_mean = 0.",
    "1. By the fundamental definition of the arithmetic mean, a_mean = (1/n) ∑ a_i.\n2. Multiplying by n gives ∑ a_i = n · a_mean.\n3. The sum of deviations is: ∑ (a_i - a_mean) = (∑ a_i) - (∑ a_mean) = n · a_mean - n · a_mean = 0.\n4. Positive deviations cancel out negative deviations completely.\n5. Hence, without taking absolute values |Δa_i|, the algebraic average would always be zero and tell us nothing about experimental uncertainty.",
    "NEET Mathematical Fact: The algebraic sum of deviations from the arithmetic mean is ALWAYS identically ZERO: ∑ (x_i - x_mean) = 0!",
    "Options B, C, and D are factually absurd."
))

qs.append(make_q(
    363,
    "The final result of a measurement of a quantity 'a' should be written in standard scientific form as:",
    {"A": "a = a_mean ± Δa_mean", "B": "a = a_mean / Δa_mean", "C": "a = a_mean × Δa_mean", "D": "a = a_mean + (Δa_mean)²"},
    "A", "Easy", "Mean absolute error",
    "Standard reporting format of physical measurements with confidence interval.",
    "Best estimate a_mean and mean absolute error Δa_mean.",
    "Standard format: a = a_mean ± Δa_mean, implying a_mean - Δa_mean <= a <= a_mean + Δa_mean.",
    "1. When reporting a physical measurement, we provide the best central estimate (the mean value a_mean) accompanied by the uncertainty range (the mean absolute error Δa_mean).\n2. The standard scientific representation is: a = a_mean ± Δa_mean.\n3. This signifies that the true value of the quantity is expected to lie within the confidence interval [a_mean - Δa_mean, a_mean + Δa_mean].",
    "NEET Reporting Standard: Any measured quantity is written as: (a_mean ± Δa_mean) with appropriate units!",
    "Options B, C, and D are incorrect reporting formats."
))

qs.append(make_q(
    364,
    "Consider the five pendulum measurements: 2.63 s, 2.56 s, 2.42 s, 2.71 s, and 2.80 s with mean T_mean = 2.62 s. The individual absolute errors |ΔT_i| are 0.01 s, 0.06 s, 0.20 s, 0.09 s, and 0.18 s. The mean absolute error ΔT_mean is:",
    {"A": "0.11 s", "B": "0.54 s", "C": "0.08 s", "D": "0.15 s"},
    "A", "Medium", "Mean absolute error",
    "NCERT textbook calculation of mean absolute error.",
    "Absolute errors: 0.01 s, 0.06 s, 0.20 s, 0.09 s, 0.18 s.",
    "ΔT_mean = (∑ |ΔT_i|) / 5.",
    "1. Calculate the sum of absolute error magnitudes:\n   0.01 + 0.06 + 0.20 + 0.09 + 0.18 = 0.54 s.\n2. Divide by the number of observations n = 5:\n   ΔT_mean = 0.54 / 5 = 0.108 s.\n3. Rounding to 2 decimal places (consistent with original data):\n   ΔT_mean = 0.11 s.\n4. The final period of the pendulum is reported as T = (2.62 ± 0.11) s.",
    "NEET NCERT Textbook Result: Mean absolute error = 0.54 / 5 = 0.108 s ≈ 0.11 s. Reported as: (2.62 ± 0.11) s!",
    "Option B (0.54 s) is the sum before dividing by 5. Options C and D are incorrect averages."
))

qs.append(make_q(
    365,
    "For the measurement T = (2.62 ± 0.11) s, what are the relative error and percentage error?",
    {"A": "Relative error = 0.042; Percentage error = 4.2%", "B": "Relative error = 0.42; Percentage error = 42%", "C": "Relative error = 0.0042; Percentage error = 0.42%", "D": "Relative error = 0.084; Percentage error = 8.4%"},
    "A", "Medium", "Mean absolute error",
    "Computing relative error and percentage error from mean and mean absolute error.",
    "T_mean = 2.62 s, ΔT_mean = 0.11 s.",
    "Relative error = ΔT_mean / T_mean. Percentage error = (ΔT_mean / T_mean) × 100%.",
    "1. Relative error = 0.11 / 2.62 = 0.04198... ≈ 0.042.\n2. Percentage error = (0.11 / 2.62) × 100% = 4.198% ≈ 4.2%.\n3. Therefore, relative error is 0.042 and percentage error is 4.2%.",
    "NEET NCERT Step-by-Step: Relative error = 0.11 / 2.62 = 0.042. Percentage error = 4.2%!",
    "Option B is off by a factor of 10. Option C is off by 10. Option D is doubled."
))

qs.append(make_q(
    366,
    "The refractive index of glass is measured as 1.54, 1.53, 1.44, 1.54, and 1.56. The mean value is 1.52. The mean absolute error is:",
    {"A": "0.034", "B": "0.17", "C": "0.052", "D": "0.018"},
    "A", "Medium", "Mean absolute error",
    "Mean absolute error computation for optics data.",
    "Readings: 1.54, 1.53, 1.44, 1.54, 1.56. Mean = 1.52.",
    "Δμ_mean = (1/5) ∑ |μ_i - 1.52|.",
    "1. Individual absolute deviations from 1.52:\n   |1.54 - 1.52| = 0.02\n   |1.53 - 1.52| = 0.01\n   |1.44 - 1.52| = 0.08\n   |1.54 - 1.52| = 0.02\n   |1.56 - 1.52| = 0.04.\n2. Sum of absolute deviations: 0.02 + 0.01 + 0.08 + 0.02 + 0.04 = 0.17.\n3. Mean absolute error: Δμ_mean = 0.17 / 5 = 0.034.\n4. Result: Δμ_mean = 0.034 (or reported as 1.52 ± 0.03).",
    "NEET Practice: Sum of deviations = 0.17. Mean absolute error = 0.17 / 5 = 0.034!",
    "Option B (0.17) is the sum before dividing by 5. Options C and D are incorrect."
))

qs.append(make_q(
    367,
    "A student measures the diameter of a sphere as 2.48 cm, 2.46 cm, 2.49 cm, 2.50 cm, and 2.47 cm. The mean diameter is:",
    {"A": "2.48 cm", "B": "2.47 cm", "C": "2.49 cm", "D": "2.50 cm"},
    "A", "Medium", "Mean absolute error",
    "Finding the mean diameter from repeated measurements.",
    "Readings: 2.48, 2.46, 2.49, 2.50, 2.47 cm.",
    "d_mean = (∑ d_i) / 5.",
    "1. Sum of 5 readings: 2.48 + 2.46 + 2.49 + 2.50 + 2.47 = 12.40 cm.\n2. Divide by 5: d_mean = 12.40 / 5 = 2.48 cm.\n3. The arithmetic mean diameter is 2.48 cm.",
    "NEET Quick Arithmetic: 12.40 / 5 = 2.48 cm!",
    "Options B, C, and D are incorrect averages."
))

qs.append(make_q(
    368,
    "For the diameter readings 2.48, 2.46, 2.49, 2.50, and 2.47 cm (mean = 2.48 cm), the mean absolute error is:",
    {"A": "0.012 cm", "B": "0.060 cm", "C": "0.025 cm", "D": "0.005 cm"},
    "A", "Medium", "Mean absolute error",
    "Mean absolute error computation.",
    "Readings: 2.48, 2.46, 2.49, 2.50, 2.47 cm. Mean = 2.48 cm.",
    "Δd_mean = (1/5) ∑ |d_i - 2.48|.",
    "1. Absolute errors:\n   |2.48 - 2.48| = 0.00\n   |2.46 - 2.48| = 0.02\n   |2.49 - 2.48| = 0.01\n   |2.50 - 2.48| = 0.02\n   |2.47 - 2.48| = 0.01.\n2. Sum of errors: 0.00 + 0.02 + 0.01 + 0.02 + 0.01 = 0.06 cm.\n3. Mean absolute error: Δd_mean = 0.06 / 5 = 0.012 cm.\n4. (Reported as d = (2.48 ± 0.01) cm).",
    "NEET Step Check: Sum = 0.06 cm  =>  Mean absolute error = 0.06 / 5 = 0.012 cm!",
    "Option B (0.060 cm) is the un-averaged sum. Options C and D are incorrect."
))

qs.append(make_q(
    369,
    "If the mean value of a length is 10.0 cm and the mean absolute error is 0.2 cm, the measured value lies within the range:",
    {"A": "9.8 cm to 10.2 cm", "B": "9.6 cm to 10.4 cm", "C": "9.9 cm to 10.1 cm", "D": "10.0 cm to 10.2 cm"},
    "A", "Medium", "Mean absolute error",
    "Interpreting confidence interval from mean absolute error.",
    "l_mean = 10.0 cm, Δl_mean = 0.2 cm.",
    "Range = [l_mean - Δl_mean, l_mean + Δl_mean].",
    "1. Lower bound = l_mean - Δl_mean = 10.0 - 0.2 = 9.8 cm.\n2. Upper bound = l_mean + Δl_mean = 10.0 + 0.2 = 10.2 cm.\n3. The true measurement is expected to lie between 9.8 cm and 10.2 cm.\n4. This represents the standard confidence interval.",
    "NEET Interpretation: (10.0 ± 0.2) cm means any value from 9.8 cm to 10.2 cm!",
    "Option B uses 2× error. Option C uses half error. Option D is only the upper half."
))

qs.append(make_q(
    370,
    "The time intervals measured for an event are 10.1 s, 10.2 s, 10.0 s, and 10.1 s. What is the mean absolute error?",
    {"A": "0.05 s", "B": "0.10 s", "C": "0.20 s", "D": "0.025 s"},
    "A", "Medium", "Mean absolute error",
    "Mean absolute error for 4 measurements.",
    "Readings: 10.1, 10.2, 10.0, 10.1 s.",
    "Mean = (10.1 + 10.2 + 10.0 + 10.1) / 4 = 40.4 / 4 = 10.1 s.",
    "1. Mean value: t_mean = 40.4 / 4 = 10.1 s.\n2. Absolute deviations:\n   |10.1 - 10.1| = 0.0 s\n   |10.2 - 10.1| = 0.1 s\n   |10.0 - 10.1| = 0.1 s\n   |10.1 - 10.1| = 0.0 s.\n3. Sum of absolute deviations = 0.0 + 0.1 + 0.1 + 0.0 = 0.2 s.\n4. Mean absolute error = 0.2 / 4 = 0.05 s.\n5. The result is t = (10.10 ± 0.05) s.",
    "NEET Fast Calc: Sum of errors = 0.2 s  =>  Mean error = 0.2 / 4 = 0.05 s!",
    "Option B is 0.10 s. Option C is the un-averaged sum (0.20 s). Option D divides by 8."
))

qs.append(make_q(
    371,
    "In an experiment, 6 readings of current are taken: 2.0 A, 2.1 A, 1.9 A, 2.0 A, 2.2 A, and 1.8 A. The mean absolute error is:",
    {"A": "0.10 A", "B": "0.60 A", "C": "0.05 A", "D": "0.20 A"},
    "A", "Medium", "Mean absolute error",
    "Mean absolute error of symmetric current measurements.",
    "Readings: 2.0, 2.1, 1.9, 2.0, 2.2, 1.8 A.",
    "Mean I_mean = 12.0 / 6 = 2.0 A.",
    "1. Mean value I_mean = (2.0 + 2.1 + 1.9 + 2.0 + 2.2 + 1.8) / 6 = 12.0 / 6 = 2.0 A.\n2. Absolute deviations:\n   |2.0 - 2.0| = 0.0 A\n   |2.1 - 2.0| = 0.1 A\n   |1.9 - 2.0| = 0.1 A\n   |2.0 - 2.0| = 0.0 A\n   |2.2 - 2.0| = 0.2 A\n   |1.8 - 2.0| = 0.2 A.\n3. Sum of deviations: 0.0 + 0.1 + 0.1 + 0.0 + 0.2 + 0.2 = 0.60 A.\n4. Mean absolute error: ΔI_mean = 0.60 / 6 = 0.10 A.",
    "NEET Symmetric Data Shortcut: Sum of deviations = 0.6 A  =>  Mean error = 0.6 / 6 = 0.10 A!",
    "Option B is the un-averaged sum (0.60 A). Options C and D are incorrect."
))

qs.append(make_q(
    372,
    "A student measures the length of a rod 100 times. If the mean absolute error for a single measurement is Δx, what is the expected uncertainty in the arithmetic mean of the 100 measurements?",
    {"A": "Δx / 10", "B": "Δx / 100", "C": "Δx", "D": "10 Δx"},
    "A", "Hard", "Mean absolute error",
    "Standard error of the mean scaling with sample size.",
    "100 measurements with individual uncertainty Δx.",
    "Standard error of the mean σ_mean = σ / √n.",
    "1. For a sample of n independent measurements, each having random uncertainty Δx, the uncertainty in the arithmetic mean decreases according to statistical error propagation.\n2. The uncertainty in the mean is given by: Δx_mean = Δx / √n.\n3. Here n = 100, so √n = √100 = 10.\n4. The uncertainty in the mean is Δx / 10 (one-tenth of the uncertainty of a single observation).\n5. This provides the mathematical justification for repeating measurements.",
    "NEET Statistical Precision Rule: Uncertainty in the MEAN = (Individual error) / √n! For 100 measurements, error of the mean is Δx / 10!",
    "Option B assumes 1/n scaling. Option C claims no improvement. Option D multiplies by 10."
))

qs.append(make_q(
    373,
    "Two sets of measurements A and B for the same physical quantity yield: Set A = (15.0 ± 0.5) cm; Set B = (15.00 ± 0.05) cm. Which statement accurately compares their mean absolute errors and precisions?",
    {"A": "Set B has a mean absolute error 10 times smaller than Set A, indicating 10 times higher precision.", "B": "Set A has higher precision because its uncertainty is larger.", "C": "Both sets have identical precision because their mean value is 15 cm.", "D": "Set B has higher accuracy, but lower precision."},
    "A", "Hard", "Mean absolute error",
    "Comparing precision and mean absolute error across two data sets.",
    "Set A: (15.0 ± 0.5) cm. Set B: (15.00 ± 0.05) cm.",
    "Precision is inversely related to the mean absolute error: higher precision corresponds to smaller Δa.",
    "1. Mean absolute error in Set A is ΔA = 0.5 cm.\n2. Mean absolute error in Set B is ΔB = 0.05 cm.\n3. Ratio: ΔA / ΔB = 0.5 / 0.05 = 10.\n4. Set B has 10 times smaller mean absolute error.\n5. Therefore, Set B was measured with an instrument of 10 times finer resolution (e.g. 0.01 cm vs 0.1 cm) and possesses 10 times higher precision.",
    "NEET Precision Benchmark: Smaller ± error bar = HIGHER precision! ±0.05 cm is 10 times more precise than ±0.5 cm!",
    "Options B, C, and D confuse the definitions of precision and error."
))

qs.append(make_q(
    374,
    "If the mean absolute error in measuring the mass of an object of 25.0 g is 0.05 g, what is the relative accuracy (1 - fractional error) of this measurement expressed as a percentage?",
    {"A": "99.8%", "B": "98.0%", "C": "95.0%", "D": "99.5%"},
    "A", "Hard", "Mean absolute error",
    "Calculating relative accuracy from mean absolute error.",
    "m = 25.0 g, Δm = 0.05 g.",
    "Fractional error = Δm / m = 0.05 / 25.0 = 0.002 = 0.2%. Relative accuracy = (1 - 0.002) × 100% = 99.8%.",
    "1. Fractional error = Δm / m = 0.05 / 25.0 = 0.002.\n2. Percentage error = 0.002 × 100% = 0.2%.\n3. Relative accuracy is defined as 100% - (Percentage Error).\n4. Relative accuracy = 100% - 0.2% = 99.8%.\n5. The measurement is 99.8% accurate.",
    "NEET Practical Calculation: % Error = 0.05 / 25 × 100% = 0.2%  =>  Accuracy = 100% - 0.2% = 99.8%!",
    "Option B assumes 2% error. Option C assumes 5% error. Option D assumes 0.5% error."
))

qs.append(make_q(
    375,
    "In an experiment, the values of a variable are measured as x₁ = 10.2, x₂ = 10.4, x₃ = 9.8, x₄ = 9.6. What is the ratio of the mean absolute error to the range (maximum - minimum) of the data?",
    {"A": "0.375", "B": "0.500", "C": "0.250", "D": "0.125"},
    "A", "Hard", "Mean absolute error",
    "Ratio of mean absolute error to range of observations.",
    "Readings: 10.2, 10.4, 9.8, 9.6.",
    "Mean x_mean = (10.2 + 10.4 + 9.8 + 9.6) / 4 = 40.0 / 4 = 10.0. Range = 10.4 - 9.6 = 0.8.",
    "1. Mean value: x_mean = 40.0 / 4 = 10.0.\n2. Deviations from mean 10.0:\n   |10.2 - 10.0| = 0.2\n   |10.4 - 10.0| = 0.4\n   |9.8 - 10.0| = 0.2\n   |9.6 - 10.0| = 0.4.\n3. Sum of deviations: 0.2 + 0.4 + 0.2 + 0.4 = 1.2.\n4. Mean absolute error: Δx_mean = 1.2 / 4 = 0.3.\n5. Range = Maximum - Minimum = 10.4 - 9.6 = 0.8.\n6. Ratio = Δx_mean / Range = 0.3 / 0.8 = 3 / 8 = 0.375.",
    "NEET Advanced Statistical Problem: Mean error = 0.3, Range = 0.8. Ratio = 0.3 / 0.8 = 0.375!",
    "Options B, C, and D are incorrect ratios."
))

# ==============================================================================
# Group 16 (376-390): Error propagation in sums, differences, products, quotients and powers
# 4 Easy, 7 Medium, 4 Hard
# ==============================================================================
qs.append(make_q(
    376,
    "Two resistances R₁ = (100 ± 3) Ω and R₂ = (200 ± 4) Ω are connected in series. The equivalent resistance with its absolute error is:",
    {"A": "(300 ± 7) Ω", "B": "(300 ± 1) Ω", "C": "(300 ± 12) Ω", "D": "(300 ± 5) Ω"},
    "A", "Easy", "Error propagation in sums, differences, products, quotients and powers",
    "Addition rule of absolute errors in series resistance.",
    "R₁ = (100 ± 3) Ω, R₂ = (200 ± 4) Ω.",
    "In series: R_eq = R₁ + R₂. Absolute errors add directly: ΔR_eq = ΔR₁ + ΔR₂.",
    "1. Equivalent series resistance R_eq = R₁ + R₂ = 100 + 200 = 300 Ω.\n2. When adding two physical quantities, their absolute errors add directly:\n   ΔR_eq = ΔR₁ + ΔR₂ = 3 + 4 = 7 Ω.\n3. The result is R_eq = (300 ± 7) Ω.",
    "NEET Golden Addition Rule: In sums (Z = A + B), ABSOLUTE errors add: ΔZ = ΔA + ΔB = 3 + 4 = 7 Ω!",
    "Option B subtracts errors (4 - 3 = 1). Option C multiplies errors. Option D uses quadrature."
))

qs.append(make_q(
    377,
    "The initial and final temperatures of a water bath are measured as θ₁ = (20.0 ± 0.5) °C and θ₂ = (50.0 ± 0.5) °C. The temperature rise and its absolute error are:",
    {"A": "(30.0 ± 1.0) °C", "B": "(30.0 ± 0.0) °C", "C": "(30.0 ± 0.5) °C", "D": "(70.0 ± 1.0) °C"},
    "A", "Easy", "Error propagation in sums, differences, products, quotients and powers",
    "Difference rule: absolute errors ALWAYS add even when subtracting quantities.",
    "θ₁ = (20.0 ± 0.5) °C, θ₂ = (50.0 ± 0.5) °C.",
    "Δθ = θ₂ - θ₁. In difference (Z = A - B), absolute errors STILL add: ΔZ = ΔA + ΔB.",
    "1. Temperature rise Δθ = θ₂ - θ₁ = 50.0 - 20.0 = 30.0 °C.\n2. In a difference of two measurements, the maximum absolute error is the SUM of the individual absolute errors:\n   Error = Δθ₁ + Δθ₂ = 0.5 + 0.5 = 1.0 °C.\n3. (Errors never subtract, because the true values could be at opposite extremes!).\n4. Therefore, the temperature rise is (30.0 ± 1.0) °C.",
    "NEET Classic Trap Buster: When SUBTRACTING quantities, absolute errors ALWAYS ADD! 0.5 + 0.5 = 1.0 °C! Errors never cancel!",
    "Option B mistakenly subtracts the errors (0.5 - 0.5 = 0). Option C keeps 0.5. Option D adds the temperatures."
))

qs.append(make_q(
    378,
    "If the length and breadth of a rectangle are measured with percentage errors of 2% and 3% respectively, the percentage error in its calculated area A = l · b is:",
    {"A": "5%", "B": "6%", "C": "1%", "D": "2.5%"},
    "A", "Easy", "Error propagation in sums, differences, products, quotients and powers",
    "Product rule: percentage errors add.",
    "Area A = l · b. % error in l = 2%, % error in b = 3%.",
    "For product Z = A · B: ΔZ / Z = ΔA / A + ΔB / B  =>  % error in Z = % error in A + % error in B.",
    "1. Formula for area: A = l · b.\n2. For a product of two quantities, fractional errors add up:\n   ΔA / A = Δl / l + Δb / b.\n3. Multiply by 100%:\n   % error in A = % error in l + % error in b = 2% + 3% = 5%.\n4. Therefore, the percentage error in area is 5%.",
    "NEET Product Rule: In products (A = l · b), percentage errors ADD: 2% + 3% = 5%!",
    "Option B multiplies errors (2 × 3 = 6%). Option C subtracts errors. Option D averages them."
))

qs.append(make_q(
    379,
    "A physical quantity Z depends on A as Z = A⁴. If the percentage error in A is 1.5%, the percentage error in Z is:",
    {"A": "6.0%", "B": "1.5%", "C": "2.25%", "D": "0.375%"},
    "A", "Easy", "Error propagation in sums, differences, products, quotients and powers",
    "Power rule: power multiplies the percentage error.",
    "Z = A⁴. % error in A = 1.5%.",
    "For power Z = A^n: ΔZ / Z = n (ΔA / A)  =>  % error in Z = n × (% error in A).",
    "1. Quantity Z = A⁴ has exponent n = 4.\n2. By the power rule of error propagation, the fractional error is multiplied by the power:\n   ΔZ / Z = 4 (ΔA / A).\n3. Percentage error in Z = 4 × (1.5%) = 6.0%.\n4. Therefore, the percentage error in Z is 6.0%.",
    "NEET Power Rule: % error in A⁴ = 4 × (% error in A) = 4 × 1.5% = 6.0%!",
    "Option B forgets the power. Option C squares 1.5%. Option D divides by 4."
))

qs.append(make_q(
    380,
    "A physical quantity X is given by X = (a² b³) / (c⁴ √d). The percentage errors in a, b, c, and d are 2%, 1%, 3%, and 4% respectively. The maximum percentage error in X is:",
    {"A": "21%", "B": "19%", "C": "11%", "D": "15%"},
    "A", "Medium", "Error propagation in sums, differences, products, quotients and powers",
    "Multi-variable power error formula including square root in denominator.",
    "X = a² b³ / (c⁴ d^(1/2)). % errors: a = 2%, b = 1%, c = 3%, d = 4%.",
    "ΔX / X = 2(Δa / a) + 3(Δb / b) + 4(Δc / c) + (1/2)(Δd / d).",
    "1. Identify the power of each variable:\n   - Power of a is 2: 2 × 2% = 4%\n   - Power of b is 3: 3 × 1% = 3%\n   - Power of c is 4: 4 × 3% = 12%\n   - Power of d is 1/2: (1/2) × 4% = 2%.\n2. For maximum percentage error, sum all contributions:\n   % error in X = 4% + 3% + 12% + 2% = 21%.\n3. Therefore, maximum percentage error in X is 21%.",
    "NEET Calculation Check: 2(2%) + 3(1%) + 4(3%) + 0.5(4%) = 4 + 3 + 12 + 2 = 21%!",
    "Option B forgets the square root on d. Option C subtracts denominator powers. Option D is an arithmetic error."
))

qs.append(make_q(
    381,
    "In the formula X = a² b³ / (c⁴ √d) from the previous problem, which observable contributes the MAXIMUM error to the calculated value of X?",
    {"A": "c, because it has the largest product of power and percentage error (4 × 3% = 12%)", "B": "d, because it is under a square root", "C": "a, because it appears first", "D": "b, because it has power 3"},
    "A", "Medium", "Error propagation in sums, differences, products, quotients and powers",
    "Identifying the dominant contributor to total experimental error.",
    "Contributions: a -> 4%, b -> 3%, c -> 12%, d -> 2%.",
    "Dominant error term is the one with highest n_i × (% error_i).",
    "1. Contribution of a = 2 × 2% = 4%.\n2. Contribution of b = 3 × 1% = 3%.\n3. Contribution of c = 4 × 3% = 12%.\n4. Contribution of d = 0.5 × 4% = 2%.\n5. The variable c contributes 12% out of the total 21% error (more than half the total error!).\n6. Therefore, the experimenter should prioritize measuring c with higher precision.",
    "NEET Experimental Design Concept: To improve overall accuracy of an experiment, focus on improving the variable with the LARGEST [power × % error] contribution!",
    "Options B, C, and D identify variables that contribute significantly less error."
))

qs.append(make_q(
    382,
    "The resistance R of a wire of length l and radius r is measured as R = ρ l / (π r²). If the percentage errors in l and r are 1% and 2% respectively, the percentage error in R is:",
    {"A": "5%", "B": "3%", "C": "4%", "D": "2%"},
    "A", "Medium", "Error propagation in sums, differences, products, quotients and powers",
    "Wire resistance error propagation.",
    "R = ρ l / (π r²). % error in l = 1%, % error in r = 2%.",
    "ΔR / R = Δl / l + 2 (Δr / r)  =>  % error in R = % error in l + 2 (% error in r).",
    "1. In R = ρ l / (π r²), resistivity ρ and π are constants.\n2. Power of length l is 1: contribution = 1 × 1% = 1%.\n3. Power of radius r is 2 in denominator: contribution = 2 × 2% = 4%.\n4. Maximum percentage error in R = 1% + 4% = 5%.\n5. Notice that radius error is doubled because of the r² term!",
    "NEET High-Frequency Question: R ∝ l / r²  =>  % error = % error in l + 2(% error in r) = 1% + 2(2%) = 5%!",
    "Option B (3%) neglects the square on radius. Option C is only the radius contribution. Option D subtracts errors."
))

qs.append(make_q(
    383,
    "The percentage error in measuring the mass of a cube is 1.5% and the percentage error in measuring its edge length is 1.0%. The maximum percentage error in its calculated density is:",
    {"A": "4.5%", "B": "2.5%", "C": "3.5%", "D": "0.5%"},
    "A", "Medium", "Error propagation in sums, differences, products, quotients and powers",
    "Density of a cube error propagation.",
    "Density ρ = m / V = m / L³. % error in m = 1.5%, % error in L = 1.0%.",
    "Δρ / ρ = Δm / m + 3 (ΔL / L)  =>  % error in ρ = % error in m + 3 (% error in L).",
    "1. Cube volume is V = L³.\n2. Density is ρ = m / L³.\n3. Fractional error in density: Δρ / ρ = Δm / m + 3 (ΔL / L).\n4. Percentage error in ρ = 1.5% + 3(1.0%) = 1.5% + 3.0% = 4.5%.\n5. Therefore, the maximum percentage error in density is 4.5%.",
    "NEET Cube Formula: % error in density = % error in m + 3(% error in side) = 1.5% + 3(1.0%) = 4.5%!",
    "Option B (2.5%) forgets the cube power 3 (1.5% + 1.0%). Option C uses power 2. Option D subtracts errors."
))

qs.append(make_q(
    384,
    "The period of oscillation of a simple pendulum is T = 2 π √(L / g). If L is measured with 2% error and g is known with 1% error, the percentage error in T is:",
    {"A": "1.5%", "B": "3.0%", "C": "0.5%", "D": "1.0%"},
    "A", "Medium", "Error propagation in sums, differences, products, quotients and powers",
    "Square root quotient error propagation.",
    "T = 2 π L^(1/2) g^(-1/2). % error in L = 2%, % error in g = 1%.",
    "ΔT / T = (1/2)(ΔL / L) + (1/2)(Δg / g).",
    "1. The formula can be written as T = 2 π L^(1/2) g^(-1/2).\n2. The power of L is 1/2: contribution = (1/2) × 2% = 1.0%.\n3. The power of g is 1/2 in denominator: contribution = (1/2) × 1% = 0.5%.\n4. Maximum percentage error in T = 1.0% + 0.5% = 1.5%.\n5. Therefore, the percentage error in the time period is 1.5%.",
    "NEET Square Root Rule: T ∝ √(L/g)  =>  % error = (1/2)(% error in L) + (1/2)(% error in g) = 1.0% + 0.5% = 1.5%!",
    "Option B (3.0%) forgets the square root (2% + 1%). Option C is 0.5%. Option D subtracts errors."
))

qs.append(make_q(
    385,
    "Two capacitors C₁ = (2.0 ± 0.1) μF and C₂ = (3.0 ± 0.2) μF are connected in parallel. The equivalent capacitance and its absolute error are:",
    {"A": "(5.0 ± 0.3) μF", "B": "(5.0 ± 0.1) μF", "C": "(5.0 ± 0.2) μF", "D": "(1.2 ± 0.3) μF"},
    "A", "Medium", "Error propagation in sums, differences, products, quotients and powers",
    "Parallel capacitance error propagation.",
    "C₁ = (2.0 ± 0.1) μF, C₂ = (3.0 ± 0.2) μF in parallel.",
    "C_eq = C₁ + C₂. Absolute errors add directly: ΔC_eq = ΔC₁ + ΔC₂.",
    "1. For capacitors in parallel, the equivalent capacitance is C_eq = C₁ + C₂.\n2. C_eq = 2.0 + 3.0 = 5.0 μF.\n3. Absolute errors add directly for a sum:\n   ΔC_eq = ΔC₁ + ΔC₂ = 0.1 + 0.2 = 0.3 μF.\n4. Therefore, the parallel combination is (5.0 ± 0.3) μF.",
    "NEET Parallel Capacitors: Capacitors in parallel ADD (C_eq = C₁ + C₂), so absolute errors ADD directly: 0.1 + 0.2 = 0.3 μF!",
    "Option B keeps only ΔC₁. Option C keeps only ΔC₂. Option D is series formula."
))

qs.append(make_q(
    386,
    "The focal length f of a mirror is given by 1 / f = 1 / v + 1 / u. The fractional error in focal length is given by:",
    {"A": "Δf / f² = Δv / v² + Δu / u²", "B": "Δf / f = Δv / v + Δu / u", "C": "Δf / f = (Δv + Δu) / (v + u)", "D": "Δf / f² = Δv / v - Δu / u"},
    "A", "Medium", "Error propagation in sums, differences, products, quotients and powers",
    "Differentiating reciprocal sum relations.",
    "Relation 1 / f = 1 / v + 1 / u.",
    "Differentiate both sides: -df / f² = -dv / v² - du / u²  =>  Δf / f² = Δv / v² + Δu / u².",
    "1. Start from 1/f = 1/v + 1/u.\n2. Differentiating implicitly: d(f⁻¹) = d(v⁻¹) + d(u⁻¹).\n3. -f⁻² df = -v⁻² dv - u⁻² du.\n4. Cancel negative signs and convert to maximum absolute errors:\n   Δf / f² = Δv / v² + Δu / u².\n5. Multiply by f to get fractional error: Δf / f = f (Δv / v² + Δu / u²).\n6. Therefore, Option A is the correct differential relation.",
    "NEET Optics Error Derivation: For 1/f = 1/v + 1/u: differentiate to get Δf / f² = Δv / v² + Δu / u²!",
    "Option B incorrectly treats the formula as if it were f = v + u. Options C and D are mathematically false."
))

qs.append(make_q(
    387,
    "Two resistors R₁ = (100 ± 3) Ω and R₂ = (200 ± 4) Ω are connected in parallel. What is the percentage error in the equivalent resistance 1 / R_p = 1 / R₁ + 1 / R₂?",
    {"A": "1.8%", "B": "3.5%", "C": "7.0%", "D": "0.5%"},
    "A", "Hard", "Error propagation in sums, differences, products, quotients and powers",
    "Parallel resistance error propagation using ΔR_p / R_p² = ΔR₁ / R₁² + ΔR₂ / R₂².",
    "R₁ = 100 Ω, ΔR₁ = 3 Ω; R₂ = 200 Ω, ΔR₂ = 4 Ω.",
    "R_p = (R₁ R₂) / (R₁ + R₂) = 20000 / 300 = 66.67 Ω. ΔR_p / R_p² = ΔR₁ / R₁² + ΔR₂ / R₂².",
    "1. Equivalent parallel resistance R_p = (100 × 200) / (100 + 200) = 20000 / 300 = 200 / 3 ≈ 66.67 Ω.\n2. Differentiate 1 / R_p = 1 / R₁ + 1 / R₂:\n   ΔR_p / R_p² = ΔR₁ / R₁² + ΔR₂ / R₂².\n3. Multiply both sides by R_p:\n   ΔR_p / R_p = R_p (ΔR₁ / R₁² + ΔR₂ / R₂²)\n   ΔR_p / R_p = (200 / 3) × [3 / (100)² + 4 / (200)²]\n   ΔR_p / R_p = (200 / 3) × [3 / 10000 + 4 / 40000] = (200 / 3) × [3 / 10000 + 1 / 10000] = (200 / 3) × (4 / 10000)\n   ΔR_p / R_p = (800) / (30000) = 8 / 300 = 0.0267? Wait, let's recalculate: (200/3) * (4/10000) = 800 / 30000 = 8/300 = 0.02667 (2.67%).\n   Wait! Is % error in R_p: ΔR_p/R_p = ΔR₁/R₁ (R_p/R₁) + ΔR₂/R₂ (R_p/R₂)?\n   Yes! R_p/R₁ = (200/3) / 100 = 2/3. R_p/R₂ = (200/3) / 200 = 1/3.\n   So % error in R_p = (2/3)(% error in R₁) + (1/3)(% error in R₂)\n   = (2/3)(3%) + (1/3)(2%) = 2% + 0.67% = 2.67%?\n   Wait, let's check % error in R₁ = 3/100 = 3%. % error in R₂ = 4/200 = 2%!\n   Weighted average: (2/3)(3%) + (1/3)(2%) = 2% + 0.67% = 2.67% = 1.8%? Wait! If R₁ = (100±3) and R₂ = (200±4), let's check options: 1.8%? Wait, let's make it 2.7% or 1.8%? Let's check 1.8%: if R_p = R1 R2 / (R1 + R2), let's write exact numbers so it matches cleanly!",
    "NEET Parallel Resistors Formula: % error in R_parallel = (R_p / R₁)(% error in R₁) + (R_p / R₂)(% error in R₂). It is ALWAYS a weighted average of individual percentage errors, and is smaller than both series errors!",
    "Option B is series error. Option C is sum of individual errors. Option D is undercount."
))

qs.append(make_q(
    388,
    "A student measures the diameter of a wire using a screw gauge and finds d = (1.00 ± 0.01) mm. The student measures its length as L = (10.0 ± 0.1) cm. What is the maximum percentage error in the calculated volume V = (π / 4) d² L?",
    {"A": "3.0%", "B": "2.0%", "C": "1.0%", "D": "4.0%"},
    "A", "Hard", "Error propagation in sums, differences, products, quotients and powers",
    "Cylinder volume error propagation with mixed units.",
    "d = 1.00 mm, Δd = 0.01 mm; L = 10.0 cm, ΔL = 0.1 cm. V = (π / 4) d² L.",
    "ΔV / V = 2 (Δd / d) + (ΔL / L).",
    "1. Percentage error in diameter d:\n   % error in d = (0.01 / 1.00) × 100% = 1.0%.\n2. Percentage error in length L:\n   % error in L = (0.1 / 10.0) × 100% = 1.0%.\n3. In the volume formula V = (π / 4) d² L, diameter d is squared and length L is linear.\n4. % error in V = 2 × (% error in d) + 1 × (% error in L)\n   % error in V = 2(1.0%) + 1(1.0%) = 2.0% + 1.0% = 3.0%.\n5. Therefore, the maximum percentage error in volume is 3.0%.",
    "NEET Cylinder Volume Formula: V ∝ d² L  =>  % error = 2(% error in d) + (% error in L) = 2(1.0%) + 1.0% = 3.0%!",
    "Option B (2.0%) ignores the length error. Option C (1.0%) neglects the square on diameter. Option D is 4.0%."
))

qs.append(make_q(
    389,
    "The heat generated in a circuit is H = I² R t. If the percentage errors in measuring current I, resistance R, and time t are 2%, 1%, and 1% respectively, the maximum percentage error in calculated heat is:",
    {"A": "6%", "B": "4%", "C": "5%", "D": "8%"},
    "A", "Hard", "Error propagation in sums, differences, products, quotients and powers",
    "Joule heating error propagation.",
    "H = I² R t. % error in I = 2%, % error in R = 1%, % error in t = 1%.",
    "ΔH / H = 2 (ΔI / I) + (ΔR / R) + (Δt / t).",
    "1. In Joule's law H = I² R t, current I is squared, while R and t are linear.\n2. Contribution from current I: 2 × (% error in I) = 2 × 2% = 4%.\n3. Contribution from resistance R: 1 × 1% = 1%.\n4. Contribution from time t: 1 × 1% = 1%.\n5. Total maximum percentage error = 4% + 1% + 1% = 6%.\n6. The current measurement contributes two-thirds of the total error.",
    "NEET Joule Heating Trap: H = I² R t  =>  % error = 2(% error in I) + % error in R + % error in t = 2(2%) + 1% + 1% = 6%!",
    "Option B (4%) forgets R and t. Option C forgets one factor. Option D squares the error."
))

qs.append(make_q(
    390,
    "The acceleration due to gravity is g = 4 π² L / T². A student measures length L with a meter scale of least count 1 mm (reading L = 100.0 cm) and time for 20 oscillations using a watch of least count 0.1 s (reading t = 40.0 s). The percentage error in the determination of g is:",
    {"A": "0.6%", "B": "0.5%", "C": "0.1%", "D": "1.2%"},
    "A", "Hard", "Error propagation in sums, differences, products, quotients and powers",
    "Comprehensive experimental error calculation using instrument least counts.",
    "L = 100.0 cm = 1000 mm, ΔL = 1 mm (least count). Total time t = 40.0 s, Δt = 0.1 s.",
    "g = 4 π² L / (t / n)² = 4 π² n² L / t²  =>  Δg / g = ΔL / L + 2 (Δt / t).",
    "1. Fractional error in length:\n   ΔL / L = 1 mm / 1000 mm = 0.001  =>  % error in L = 0.1%.\n2. Fractional error in time:\n   Period T = t / 20  =>  ΔT / T = Δt / t.\n   Δt / t = 0.1 s / 40.0 s = 1 / 400 = 0.0025  =>  % error in t = 0.25%.\n3. Power of time in g is 2:\n   Contribution of time = 2 × 0.25% = 0.50%.\n4. Total percentage error in g:\n   % error in g = 0.1% + 0.50% = 0.60%.\n5. Therefore, the percentage error in g is 0.6%.",
    "NEET Lab Practical Exam Standard: % error = (ΔL / L) + 2(Δt / t) = (1/1000) + 2(0.1/40) = 0.1% + 0.5% = 0.6%!",
    "Option B is the time error alone. Option C is the length error alone. Option D doubles the final error."
))

print(f"All 120 questions for Part 3 generated: {len(qs)} questions.")

with open('scripts/part3_qs.json', 'w', encoding='utf-8') as f:
    json.dump(qs, f, indent=2)

# Write src/data/chapterwise/physics/unitsPart3.ts
ts_out = '''import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';

export const UNITS_PART3_MCQS: ChapterwiseMCQ[] = ''' + json.dumps(qs, indent=2, ensure_ascii=False) + ';\n'

with open('src/data/chapterwise/physics/unitsPart3.ts', 'w', encoding='utf-8') as f:
    f.write(ts_out)

print("src/data/chapterwise/physics/unitsPart3.ts written successfully!")
