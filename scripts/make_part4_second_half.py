import sys, json
sys.path.append('scripts')
from make_q import make_q

qs = []

# ==============================================================================
# Topic 20 (446-464): Screw gauge and pitch (19 questions: 5 Easy, 9 Med, 5 Hard)
# ==============================================================================

qs.append(make_q(
    446,
    "The pitch of a micrometer screw gauge is defined as:",
    {"A": "The linear distance moved by the screw on the main scale in one complete rotation of the circular scale", "B": "The circumference of the circular thimble head", "C": "The minimum distance that can be measured by the screw gauge", "D": "The ratio of circular scale divisions to main scale divisions"},
    "A", "Easy", "Screw gauge and pitch",
    "Fundamental definition of the pitch of a screw gauge.",
    "Micrometer screw gauge pitch.",
    "Pitch = (Distance moved on linear/main scale) / (Number of full rotations).",
    "1. In a micrometer screw gauge, rotating the circular thimble moves the spindle linearly along the main scale.\n2. The linear distance advanced by the screw per one full (360°) revolution is defined as the pitch of the screw gauge.\n3. Common screw gauges have a pitch of 1 mm or 0.5 mm.",
    "NEET NCERT Definition: Pitch = Linear distance advanced in 1 complete rotation of the circular head.",
    "Option B is physical geometry. Option C defines Least Count. Option D is an arbitrary ratio."
))

qs.append(make_q(
    447,
    "The least count (LC) of a screw gauge is given by the formula:",
    {"A": "Pitch / Total number of circular scale divisions", "B": "Pitch × Total number of circular scale divisions", "C": "Total number of circular scale divisions / Pitch", "D": "1 MSD - 1 CSD"},
    "A", "Easy", "Screw gauge and pitch",
    "Formula for the least count of a micrometer screw gauge.",
    "Screw gauge least count calculation.",
    "Least Count (LC) = Pitch / (Number of circular scale divisions N).",
    "1. When the circular head is turned by 1 division, the spindle advances by a fraction (1/N) of the pitch.\n2. Therefore, the minimum measurable distance (Least Count) is given by:\n   LC = Pitch / Total number of circular scale divisions.\n3. For example, pitch = 0.5 mm, N = 50 divisions gives LC = 0.5 / 50 = 0.01 mm.",
    "NEET Formula: LC = Pitch / N (where N = number of divisions on circular/thimble scale).",
    "Option B multiplies instead of dividing. Option C is the reciprocal. Option D resembles Vernier calipers."
))

qs.append(make_q(
    448,
    "Backlash error in a micrometer screw gauge is caused by:",
    {"A": "Wear and tear of the screw threads leading to loose fitting", "B": "Unequal expansion of the metallic frame due to temperature changes", "C": "Misalignment of the zero mark on the circular scale", "D": "Excessive force applied on the ratchet knob"},
    "A", "Easy", "Screw gauge and pitch",
    "Origin and prevention of backlash error in screw gauges.",
    "Backlash error.",
    "Backlash error arises from play or looseness between the internal screw and external nut threads.",
    "1. Due to repeated wear and tear, the threads of the screw and nut develop mechanical play (space).\n2. When rotation is reversed, the screw rotates slightly without producing linear movement.\n3. This error is avoided by turning the ratchet in one direction continuously during measurement.",
    "NEET Practical Tip: Backlash error = thread play/wear. Always rotate the thimble in one direction only!",
    "Option B causes thermal error. Option C is zero error. Option D is prevented by the ratchet."
))

qs.append(make_q(
    449,
    "The main function of the ratchet at the end of a screw gauge thimble is to:",
    {"A": "Prevent over-tightening and ensure uniform, reproducible pressure on the object", "B": "Magnify the reading on the circular scale", "C": "Lock the spindle firmly after taking the measurement", "D": "Eliminate the zero error of the instrument"},
    "A", "Easy", "Screw gauge and pitch",
    "Role of the ratchet mechanism in screw gauges.",
    "Ratchet mechanism.",
    "Ratchet slips with a click when uniform pressure is reached.",
    "1. When turning the screw to clamp an object, excessive manual pressure can deform the object or damage the threads.\n2. The ratchet slips with a distinctive clicking sound when an optimal, uniform pressure is achieved.\n3. This ensures consistent and accurate measurements across trials.",
    "NEET NCERT Practical: Ratchet = avoids undue pressure and guarantees uniform clamping force.",
    "Option B is false (it does not magnify). Option C is done by the lock nut. Option D is incorrect."
))

qs.append(make_q(
    450,
    "When the two studs of a screw gauge are brought into contact, if the zero mark of the circular scale lies below the reference baseline, the zero error is:",
    {"A": "Positive, and must be subtracted from the observed reading", "B": "Negative, and must be added to the observed reading", "C": "Positive, and must be added to the observed reading", "D": "Negative, and must be subtracted from the observed reading"},
    "A", "Easy", "Screw gauge and pitch",
    "Identification and correction of positive zero error in a screw gauge.",
    "Zero of circular scale lies below baseline when jaws meet.",
    "Zero error is positive when circular zero is below baseline; Corrected = Observed - Zero Error.",
    "1. If the circular scale zero has not reached the baseline (lies below the reference line), the gauge already reads a positive value without any object.\n2. Hence, the zero error is positive (+e).\n3. True reading = Observed reading - Zero error. Since e > 0, the positive error must be subtracted.",
    "NEET Golden Rule: Zero below baseline = Positive error (+). Always SUBTRACT positive zero error!",
    "Option B confuses sign. Option C adds an already excessive reading. Option D reverses sign convention."
))

qs.append(make_q(
    451,
    "A micrometer screw gauge has a pitch of 0.5 mm and 50 divisions on its circular scale. Its least count is:",
    {"A": "0.01 mm", "B": "0.001 mm", "C": "0.02 mm", "D": "0.1 mm"},
    "A", "Medium", "Screw gauge and pitch",
    "Calculation of least count for a standard 0.5 mm pitch screw gauge.",
    "Pitch = 0.5 mm, circular divisions N = 50.",
    "LC = Pitch / N.",
    "1. Pitch = 0.5 mm.\n2. Number of circular divisions N = 50.\n3. LC = 0.5 mm / 50 = 0.01 mm (or 10 μm = 10⁻⁵ m).\n4. This is the standard resolution of typical school laboratory micrometer screw gauges.",
    "NEET Standard Value: 0.5 mm / 50 div = 0.01 mm.",
    "Option B is 0.001 mm (requires 500 divisions). Option C is 0.5/25. Option D is 0.1 mm."
))

qs.append(make_q(
    452,
    "While measuring the diameter of a wire with a screw gauge (pitch = 1 mm, 100 circular divisions, zero error = 0), the pitch scale reading is 2 mm and the 35th circular division coincides with the reference line. The diameter is:",
    {"A": "2.35 mm", "B": "2.035 mm", "C": "2.70 mm", "D": "3.35 mm"},
    "A", "Medium", "Screw gauge and pitch",
    "Reading calculation with a screw gauge without zero error.",
    "PSR = 2 mm, CSR = 35, Pitch = 1 mm, N = 100.",
    "Total reading = PSR + (CSR × LC).",
    "1. Calculate LC = Pitch / N = 1 mm / 100 = 0.01 mm.\n2. Circular scale reading = 35 × 0.01 mm = 0.35 mm.\n3. Total diameter = PSR + CSR × LC = 2 mm + 0.35 mm = 2.35 mm.",
    "NEET Reading Template: Observed = PSR + (CSR × LC) = 2 + 0.35 = 2.35 mm.",
    "Option B divides by 1000. Option C uses 2 × 35. Option D adds 1 mm erroneously."
))

qs.append(make_q(
    453,
    "A screw gauge has pitch = 1 mm and 100 circular divisions. When the two studs meet, the 4th circular division coincides with the baseline (positive zero error). While measuring the thickness of a plate, PSR = 3 mm and the 48th division coincides. The true thickness is:",
    {"A": "3.44 mm", "B": "3.52 mm", "C": "3.48 mm", "D": "3.40 mm"},
    "A", "Medium", "Screw gauge and pitch",
    "Applying positive zero correction to screw gauge measurement.",
    "Pitch = 1 mm, N = 100; Zero error = +4 div; PSR = 3 mm, CSR = 48.",
    "LC = 1/100 = 0.01 mm; Zero error e = +4 × 0.01 = +0.04 mm; True = Observed - e.",
    "1. LC = 1 mm / 100 = 0.01 mm.\n2. Zero error e = +4 × 0.01 mm = +0.04 mm.\n3. Observed reading = PSR + (CSR × LC) = 3 mm + (48 × 0.01 mm) = 3.48 mm.\n4. True thickness = Observed - Zero error = 3.48 mm - 0.04 mm = 3.44 mm.",
    "NEET Trap: Positive zero error MUST BE SUBTRACTED. 3.48 - 0.04 = 3.44 mm.",
    "Option B mistakenly adds the positive error (3.48 + 0.04 = 3.52). Option C forgets zero correction. Option D subtracts 0.08 mm."
))

qs.append(make_q(
    454,
    "A screw gauge has pitch = 0.5 mm and 50 circular divisions. When closed, the 45th division of circular scale coincides with reference line (negative zero error). When measuring a wire, PSR = 2.5 mm and CSR = 20. The corrected diameter is:",
    {"A": "2.75 mm", "B": "2.65 mm", "C": "2.70 mm", "D": "2.80 mm"},
    "A", "Medium", "Screw gauge and pitch",
    "Calculating negative zero error and true measurement with 0.5 mm pitch screw gauge.",
    "Pitch = 0.5 mm, N = 50; 45th div coincides on closure; PSR = 2.5 mm, CSR = 20.",
    "LC = 0.5/50 = 0.01 mm; Zero error e = -(50 - 45) × 0.01 = -0.05 mm; True = Observed - (-0.05).",
    "1. LC = 0.5 mm / 50 = 0.01 mm.\n2. When closed, 45th division coincides. Since 45 is above baseline, the zero has moved past the baseline by -(50 - 45) divisions.\n   Zero error = -5 × 0.01 mm = -0.05 mm.\n3. Observed reading = 2.5 mm + (20 × 0.01 mm) = 2.70 mm.\n4. True diameter = Observed - Zero error = 2.70 - (-0.05) = 2.70 + 0.05 = 2.75 mm.",
    "NEET Negative Zero Error Rule: If 45th div coincides out of 50, error = -(50 - 45) = -5 div = -0.05 mm. Subtracting negative error = ADDING 0.05 mm!",
    "Option B subtracts 0.05 mm. Option C forgets zero correction. Option D adds 0.10 mm."
))

qs.append(make_q(
    455,
    "A screw advances 1 mm on the main scale when rotated through 2 complete turns. The circular scale has 100 divisions. The pitch and least count are respectively:",
    {"A": "0.5 mm and 0.005 mm", "B": "1.0 mm and 0.01 mm", "C": "0.5 mm and 0.01 mm", "D": "2.0 mm and 0.02 mm"},
    "A", "Medium", "Screw gauge and pitch",
    "Deducing pitch and least count when rotation count differs from 1 turn.",
    "Distance moved = 1 mm in 2 complete rotations, N = 100.",
    "Pitch = Distance / Rotations; LC = Pitch / N.",
    "1. Distance in 2 turns = 1 mm.\n2. Distance in 1 complete turn (Pitch) = 1 mm / 2 = 0.5 mm.\n3. Circular scale has 100 divisions.\n4. LC = Pitch / N = 0.5 mm / 100 = 0.005 mm (or 5 μm).",
    "NEET Calculation: Pitch = 1 mm / 2 turns = 0.5 mm. LC = 0.5 / 100 = 0.005 mm.",
    "Option B treats 1 mm as pitch for 1 turn. Option C assumes 50 divisions. Option D multiplies by 2."
))

qs.append(make_q(
    456,
    "The diameter of a thin copper wire measured using a screw gauge gives PSR = 0 mm and CSR = 52. If pitch = 1 mm and circular scale has 100 divisions with zero error = 0, the cross-sectional area of the wire is approximately:",
    {"A": "0.21 mm²", "B": "0.85 mm²", "C": "0.42 mm²", "D": "0.11 mm²"},
    "A", "Medium", "Screw gauge and pitch",
    "Finding cross-sectional area from screw gauge reading.",
    "PSR = 0 mm, CSR = 52, LC = 1/100 = 0.01 mm.",
    "Diameter d = PSR + CSR × LC; Area A = π d² / 4.",
    "1. Diameter d = 0 + 52 × 0.01 mm = 0.52 mm.\n2. Area A = π (d/2)² = (3.1416 × (0.52)²) / 4.\n3. (0.52)² = 0.2704 mm².\n4. A = (3.1416 × 0.2704) / 4 ≈ 0.8495 / 4 ≈ 0.212 mm² ≈ 0.21 mm².",
    "NEET Formula: A = π d² / 4. With d = 0.52 mm, A ≈ 0.785 × (0.52)² ≈ 0.21 mm².",
    "Option B is π d² without dividing by 4. Option C is 2 × 0.21. Option D is half of the correct area."
))

qs.append(make_q(
    457,
    "A screw gauge has pitch = 0.5 mm and 100 divisions on circular head. When jaws are closed, the 0 of circular scale lies 3 divisions below the baseline. When a sheet is placed between jaws, PSR = 1.5 mm and CSR = 58. The true thickness is:",
    {"A": "1.775 mm", "B": "1.805 mm", "C": "1.790 mm", "D": "1.760 mm"},
    "A", "Medium", "Screw gauge and pitch",
    "Correcting reading with a 100-division, 0.5 mm pitch screw gauge with positive error.",
    "Pitch = 0.5 mm, N = 100; zero is 3 div below baseline (+3 div error); PSR = 1.5 mm, CSR = 58.",
    "LC = 0.5/100 = 0.005 mm; e = +3 × 0.005 = +0.015 mm; True = Observed - e.",
    "1. LC = 0.5 mm / 100 = 0.005 mm.\n2. Zero error: 3 divisions below baseline means positive error: e = +3 × 0.005 = +0.015 mm.\n3. Observed reading = PSR + CSR × LC = 1.5 mm + 58 × 0.005 mm = 1.5 + 0.290 = 1.790 mm.\n4. True thickness = 1.790 mm - 0.015 mm = 1.775 mm.",
    "NEET Multi-step: LC = 0.005 mm, e = +0.015 mm. Observed = 1.790 mm. True = 1.790 - 0.015 = 1.775 mm.",
    "Option B adds 0.015 mm (1.805 mm). Option C omits error correction. Option D subtracts double the error."
))

qs.append(make_q(
    458,
    "A micrometer screw gauge has 50 divisions on its circular scale. When rotated through 4 complete revolutions, the spindle advances by 2 mm. The least count is:",
    {"A": "0.01 mm", "B": "0.02 mm", "C": "0.005 mm", "D": "0.04 mm"},
    "A", "Medium", "Screw gauge and pitch",
    "Finding least count from multiple revolutions.",
    "Spindle advances 2 mm in 4 revolutions; N = 50 divisions.",
    "Pitch = 2 mm / 4 = 0.5 mm; LC = Pitch / N = 0.5 / 50 = 0.01 mm.",
    "1. Pitch = distance moved in 1 revolution = 2 mm / 4 = 0.5 mm.\n2. Circular scale divisions N = 50.\n3. LC = Pitch / N = 0.5 mm / 50 = 0.01 mm.",
    "NEET Quick Calculation: Pitch = 2/4 = 0.5 mm. LC = 0.5 / 50 = 0.01 mm.",
    "Option B forgets division by 2. Option C uses 100 divisions. Option D uses 2 mm pitch."
))

qs.append(make_q(
    459,
    "The diameter of a small steel sphere measured with a screw gauge (pitch = 0.5 mm, 50 circular divisions, zero error = 0) is observed with PSR = 5.5 mm and CSR = 28. The radius of the sphere is:",
    {"A": "2.89 mm", "B": "5.78 mm", "C": "2.75 mm", "D": "3.14 mm"},
    "A", "Medium", "Screw gauge and pitch",
    "Determining radius from diameter reading of a sphere.",
    "PSR = 5.5 mm, CSR = 28, LC = 0.5/50 = 0.01 mm.",
    "Diameter d = PSR + CSR × LC; Radius r = d / 2.",
    "1. LC = 0.5 mm / 50 = 0.01 mm.\n2. Diameter d = 5.5 mm + 28 × 0.01 mm = 5.5 + 0.28 = 5.78 mm.\n3. The question asks for RADIUS: r = d / 2 = 5.78 mm / 2 = 2.89 mm.",
    "NEET Common Trap: The question asks for RADIUS, not diameter! Always divide diameter by 2: 5.78 / 2 = 2.89 mm.",
    "Option B is the diameter (5.78 mm). Option C ignores circular reading. Option D is π."
))

qs.append(make_q(
    460,
    "A screw gauge has pitch = 1 mm and 200 circular divisions. When studs meet, the circular zero is 4 divisions above the reference line (negative error). When measuring a cylinder's diameter, PSR = 4 mm and CSR = 126. The true diameter is:",
    {"A": "4.650 mm", "B": "4.610 mm", "C": "4.630 mm", "D": "4.670 mm"},
    "A", "Hard", "Screw gauge and pitch",
    "Advanced negative error correction with 200-division screw gauge.",
    "Pitch = 1 mm, N = 200; zero is 4 divisions above line; PSR = 4 mm, CSR = 126.",
    "LC = 1/200 = 0.005 mm; Negative zero error e = -4 × 0.005 = -0.020 mm; True = Observed - (-0.020).",
    "1. LC = 1 mm / 200 = 0.005 mm.\n2. Zero is 4 divisions above reference line => Negative zero error: e = -4 × 0.005 mm = -0.020 mm.\n3. Observed reading = PSR + (CSR × LC) = 4 mm + (126 × 0.005 mm) = 4 mm + 0.630 mm = 4.630 mm.\n4. True diameter = Observed - e = 4.630 - (-0.020) = 4.630 + 0.020 = 4.650 mm.",
    "NEET Expert Level: N = 200 => LC = 0.005 mm. Zero above line => e = -0.020 mm. Corrected = 4.630 - (-0.020) = 4.650 mm.",
    "Option B subtracts 0.020 mm. Option C forgets zero correction. Option D adds 0.040 mm."
))

qs.append(make_q(
    461,
    "A student measures the diameter of a wire with a screw gauge (pitch = 0.5 mm, 100 circular divisions). PSR = 1 mm, CSR = 40. The student neglects an unnoticed zero error of -0.02 mm. The percentage error in the student's reported cross-sectional area is approximately:",
    {"A": "-3.3%", "B": "+3.3%", "C": "-1.7%", "D": "+1.7%"},
    "A", "Hard", "Screw gauge and pitch",
    "Error propagation in area from an uncorrected systematic zero error.",
    "LC = 0.5/100 = 0.005 mm; PSR = 1 mm, CSR = 40; neglected zero error = -0.02 mm.",
    "Observed d_obs = 1 + 40(0.005) = 1.20 mm; True d_true = 1.20 - (-0.02) = 1.22 mm; Area error ≈ 2 × (Δd/d).",
    "1. LC = 0.5/100 = 0.005 mm.\n2. Observed diameter d_obs = 1.0 mm + 40 × 0.005 mm = 1.20 mm.\n3. Actual true diameter d_true = d_obs - (-0.02 mm) = 1.22 mm.\n4. Error in diameter = d_obs - d_true = 1.20 - 1.22 = -0.02 mm.\n5. Fractional error in diameter = -0.02 / 1.22 ≈ -0.0164 (-1.64%).\n6. Since Area A ∝ d², percentage error in area ≈ 2 × (% error in d) = 2 × (-1.64%) ≈ -3.28% ≈ -3.3% (underestimated).",
    "NEET High-Yield: % error in Area = 2 × (% error in diameter) = 2 × (-0.02/1.22 × 100%) ≈ -3.3%.",
    "Option B has opposite sign. Option C is error in diameter without power 2. Option D is +1.7%."
))

qs.append(make_q(
    462,
    "A screw gauge has pitch = 1 mm and 100 circular divisions. When measuring the thickness of a glass slab, PSR = 2 mm and CSR = 30 divisions. If the true thickness of the slab is known to be 2.26 mm, the zero error of the instrument is:",
    {"A": "+0.04 mm (+4 circular divisions)", "B": "-0.04 mm (-4 circular divisions)", "C": "+0.02 mm (+2 circular divisions)", "D": "-0.02 mm (-2 circular divisions)"},
    "A", "Hard", "Screw gauge and pitch",
    "Reverse determination of zero error from known true value and observed reading.",
    "Pitch = 1 mm, N = 100 => LC = 0.01 mm; PSR = 2 mm, CSR = 30; True thickness = 2.26 mm.",
    "Observed reading = PSR + CSR × LC; True = Observed - Zero Error => Zero Error = Observed - True.",
    "1. LC = 1 mm / 100 = 0.01 mm.\n2. Observed reading = 2 mm + 30 × 0.01 mm = 2.30 mm.\n3. By fundamental definition: True value = Observed value - Zero Error.\n4. Therefore, Zero Error = Observed value - True value = 2.30 mm - 2.26 mm = +0.04 mm.\n5. In terms of circular scale divisions: +0.04 mm / 0.01 mm = +4 divisions (zero lies below baseline).",
    "NEET Concept: Zero Error = Observed - True = 2.30 - 2.26 = +0.04 mm (+4 divisions).",
    "Option B reverses the sign. Option C and D use 0.02 mm."
))

qs.append(make_q(
    463,
    "Consider three measuring instruments:\nI. Vernier calliper: 1 MSD = 1 mm, 10 VSD = 9 MSD\nII. Screw gauge: Pitch = 0.5 mm, 100 circular divisions\nIII. Optical spherometer: Pitch = 0.5 mm, 200 circular divisions\nThe order of increasing precision (least count) is:",
    {"A": "I < II < III (III has finest precision)", "B": "III < II < I", "C": "II < I < III", "D": "I = II < III"},
    "A", "Hard", "Screw gauge and pitch",
    "Comparing precision and least count across multiple length measuring instruments.",
    "Instruments I (VC), II (SG), III (Spherometer).",
    "Precision is inversely proportional to least count: smaller LC = higher precision.",
    "1. Instrument I (Vernier Calliper): LC = 1 MSD - 1 VSD = 1 mm - 0.9 mm = 0.1 mm = 100 μm.\n2. Instrument II (Screw gauge): LC = Pitch / N = 0.5 mm / 100 = 0.005 mm = 5 μm.\n3. Instrument III (Optical spherometer): LC = Pitch / N = 0.5 mm / 200 = 0.0025 mm = 2.5 μm.\n4. Ordering by increasing precision (smallest LC = most precise): LC_I (0.1 mm) > LC_II (0.005 mm) > LC_III (0.0025 mm).\n5. Hence, precision rank: I < II < III.",
    "NEET Ranking Rule: Smaller Least Count = Greater Precision! 100 μm (I) < 5 μm (II) < 2.5 μm (III).",
    "Option B reverses precision and least count. Option C and D miscalculate values."
))

qs.append(make_q(
    464,
    "The thickness of a stack of 50 identical paper sheets is measured using a screw gauge with pitch = 1 mm and 100 circular divisions. PSR = 5 mm, CSR = 25 divisions, and the gauge has a zero error of +0.05 mm. The thickness of a single sheet is:",
    {"A": "0.104 mm", "B": "0.105 mm", "C": "0.106 mm", "D": "0.052 mm"},
    "A", "Hard", "Screw gauge and pitch",
    "Stack measurement and error correction for thin sheet thickness.",
    "50 sheets; Pitch = 1 mm, N = 100; PSR = 5 mm, CSR = 25; e = +0.05 mm.",
    "LC = 0.01 mm; Total Observed = PSR + CSR × LC; Total True = Observed - e; Sheet thickness = Total True / 50.",
    "1. LC = 1 mm / 100 = 0.01 mm.\n2. Total observed reading = 5 mm + 25 × 0.01 mm = 5.25 mm.\n3. True thickness of 50 sheets = Observed - Zero error = 5.25 mm - 0.05 mm = 5.20 mm.\n4. Thickness of one sheet = 5.20 mm / 50 = 0.104 mm (or 104 μm).",
    "NEET Multi-step Method: (5.25 - 0.05) / 50 = 5.20 / 50 = 0.104 mm.",
    "Option B omits zero correction: 5.25 / 50 = 0.105 mm. Option C adds error: 5.30 / 50 = 0.106 mm. Option D divides by 100."
))

# ==============================================================================
# Topic 21 (465-482): Measurement-based numerical problems (18 questions: 4 Easy, 9 Med, 5 Hard)
# ==============================================================================

qs.append(make_q(
    465,
    "The mass of a solid block is measured as 5.74 g and its volume is 1.2 cm³. The density of the block reported to the correct number of significant figures is:",
    {"A": "4.8 g/cm³", "B": "4.78 g/cm³", "C": "4.783 g/cm³", "D": "5.0 g/cm³"},
    "A", "Easy", "Measurement-based numerical problems",
    "Reporting quotient to appropriate significant figures in density measurement.",
    "Mass m = 5.74 g (3 significant figures), Volume V = 1.2 cm³ (2 significant figures).",
    "Density ρ = m / V; in multiplication/division, result has least number of significant figures.",
    "1. Mass m = 5.74 g has 3 significant figures.\n2. Volume V = 1.2 cm³ has 2 significant figures.\n3. Calculated density = 5.74 / 1.2 = 4.7833... g/cm³.\n4. The least number of significant figures among the inputs is 2 (from volume).\n5. Rounding 4.7833... to 2 significant figures gives 4.8 g/cm³.",
    "NEET Rule: Multiplication/division result must match the input with FEWEST sig figs (2 here) => 4.8 g/cm³.",
    "Option B has 3 sig figs. Option C has 4 sig figs. Option D rounds incorrectly."
))

qs.append(make_q(
    466,
    "The length and breadth of a rectangular field are measured as 25.2 m and 16.8 m respectively. The area of the field with appropriate significant figures is:",
    {"A": "423 m²", "B": "423.4 m²", "C": "423.36 m²", "D": "420 m²"},
    "A", "Easy", "Measurement-based numerical problems",
    "Area calculation following significant figure multiplication rules.",
    "Length l = 25.2 m (3 sig figs), breadth b = 16.8 m (3 sig figs).",
    "Area A = l × b; result must retain 3 significant figures.",
    "1. Length l = 25.2 m (3 sig figs).\n2. Breadth b = 16.8 m (3 sig figs).\n3. Product A = 25.2 × 16.8 = 423.36 m².\n4. Both inputs have 3 significant figures, so the result must be rounded to 3 significant figures.\n5. Rounding 423.36 to 3 sig figs: the next digit is 3 (< 5), so it rounds to 423 m².",
    "NEET Significant Figure Rule: 3 sig figs × 3 sig figs = 3 sig figs => 423 m².",
    "Option B has 4 sig figs. Option C has 5 sig figs (unrounded). Option D has 2 sig figs."
))

qs.append(make_q(
    467,
    "From a wire of length 5.234 m, a small piece of length 1.2 m is cut off. The remaining length expressed with correct precision is:",
    {"A": "4.0 m", "B": "4.03 m", "C": "4.034 m", "D": "4 m"},
    "A", "Easy", "Measurement-based numerical problems",
    "Decimal precision rule for subtraction in physical measurements.",
    "Initial length = 5.234 m (3 decimal places), cut length = 1.2 m (1 decimal place).",
    "In addition and subtraction, the result retains the least number of decimal places.",
    "1. Initial length = 5.234 m (3 decimal places).\n2. Cut piece = 1.2 m (1 decimal place).\n3. Difference = 5.234 - 1.2 = 4.034 m.\n4. In subtraction, the result cannot be more precise than the least precise measurement (1 decimal place).\n5. Rounding 4.034 to 1 decimal place gives 4.0 m.",
    "NEET Addition/Subtraction Rule: Result has least number of DECIMAL PLACES (1 decimal place here) => 4.0 m.",
    "Option B has 2 decimal places. Option C has 3 decimal places. Option D omits the significant zero."
))

qs.append(make_q(
    468,
    "Two metallic spheres of masses 2.015 kg and 15.2 kg are placed in a container. The total mass reported correctly is:",
    {"A": "17.2 kg", "B": "17.215 kg", "C": "17.22 kg", "D": "17 kg"},
    "A", "Easy", "Measurement-based numerical problems",
    "Addition of measured masses adhering to decimal place rules.",
    "m₁ = 2.015 kg (3 decimal places), m₂ = 15.2 kg (1 decimal place).",
    "Total mass m = m₁ + m₂; retain minimum decimal places (1 decimal place).",
    "1. Sphere 1 mass = 2.015 kg.\n2. Sphere 2 mass = 15.2 kg.\n3. Sum = 2.015 + 15.2 = 17.215 kg.\n4. 15.2 kg has only 1 decimal place, which dictates the precision of the sum.\n5. Rounding 17.215 to 1 decimal place gives 17.2 kg.",
    "NEET Addition Rule: 15.2 has 1 decimal place, so the sum must be rounded to 1 decimal place => 17.2 kg.",
    "Option B is unrounded (3 decimal places). Option C has 2 decimal places. Option D has 0 decimal places."
))

qs.append(make_q(
    469,
    "In an experiment, the mass of a solid sphere is measured with an error of 1.5% and its radius is measured with an error of 1.0%. The maximum percentage error in the determination of its density is:",
    {"A": "4.5%", "B": "2.5%", "C": "3.5%", "D": "5.5%"},
    "A", "Medium", "Measurement-based numerical problems",
    "Percentage error propagation in sphere density calculation.",
    "ΔM/M × 100% = 1.5%, ΔR/R × 100% = 1.0%.",
    "Density ρ = M / ((4/3)π R³) => Δρ/ρ = ΔM/M + 3(ΔR/R).",
    "1. Volume of sphere V = (4/3) π R³.\n2. Density ρ = M / V = M / ((4/3) π R³).\n3. Fractional error formula: Δρ/ρ = ΔM/M + 3 (ΔR/R).\n4. In terms of percentage error:\n   % error in ρ = (% error in M) + 3 × (% error in R)\n                = 1.5% + 3 × (1.0%)\n                = 1.5% + 3.0% = 4.5%.",
    "NEET High-Yield: Power of radius is 3! % error in ρ = % error in M + 3 × (% error in R) = 1.5 + 3(1) = 4.5%.",
    "Option B adds linearly (1.5 + 1.0 = 2.5%). Option C uses 2(1.0). Option D adds an extra 1%."
))

qs.append(make_q(
    470,
    "The acceleration due to gravity g is determined using a simple pendulum via g = 4π² L / T². If the error in measuring length L is 2% and the error in measuring time period T is 3%, the maximum percentage error in g is:",
    {"A": "8%", "B": "5%", "C": "11%", "D": "7%"},
    "A", "Medium", "Measurement-based numerical problems",
    "Error propagation in gravitational acceleration using simple pendulum formula.",
    "ΔL/L × 100% = 2%, ΔT/T × 100% = 3%.",
    "g = 4π² L T⁻² => Δg/g = ΔL/L + 2(ΔT/T).",
    "1. The formula is g = 4π² L / T².\n2. Relative error in g: Δg/g = ΔL/L + 2 (ΔT/T).\n3. Multiply by 100% for percentage error:\n   % error in g = (% error in L) + 2 × (% error in T)\n                = 2% + 2 × (3%)\n                = 2% + 6% = 8%.",
    "NEET Classic: T is in denominator squared, so its percentage error is multiplied by 2: 2% + 2(3%) = 8%.",
    "Option B does not multiply T error by 2 (2 + 3 = 5%). Option C cubes T. Option D adds 2 + 5."
))

qs.append(make_q(
    471,
    "The voltage across a resistor is V = (100 ± 5) V and the current flowing through it is I = (10 ± 0.2) A. The value of resistance R with absolute error is:",
    {"A": "(10 ± 0.7) Ω", "B": "(10 ± 5.2) Ω", "C": "(10 ± 0.5) Ω", "D": "(10 ± 0.3) Ω"},
    "A", "Medium", "Measurement-based numerical problems",
    "Calculating resistance and combining fractional errors to find absolute error.",
    "V = (100 ± 5) V, I = (10 ± 0.2) A.",
    "R = V / I; ΔR/R = ΔV/V + ΔI/I; ΔR = R × (ΔR/R).",
    "1. Mean value of R = V / I = 100 / 10 = 10 Ω.\n2. Fractional error: ΔR/R = ΔV/V + ΔI/I = 5/100 + 0.2/10 = 0.05 + 0.02 = 0.07 (7%).\n3. Absolute error ΔR = R × 0.07 = 10 Ω × 0.07 = 0.7 Ω.\n4. Therefore, R = (10 ± 0.7) Ω.",
    "NEET Step-by-Step: % error = 5% + 2% = 7%. Absolute error ΔR = 7% of 10 Ω = 0.7 Ω => (10 ± 0.7) Ω.",
    "Option B simply adds absolute errors (5 + 0.2). Option C takes only voltage error. Option D takes 0.5 - 0.2."
))

qs.append(make_q(
    472,
    "In an experiment to determine Young's modulus Y = (4 M g L) / (π d² l), the percentage errors in M, L, d, and l are 1%, 1%, 2%, and 3% respectively (g is exact). The maximum percentage error in Y is:",
    {"A": "9%", "B": "7%", "C": "11%", "D": "5%"},
    "A", "Medium", "Measurement-based numerical problems",
    "Young's modulus error propagation with multiple experimental variables.",
    "Errors: M = 1%, L = 1%, d = 2%, l = 3%.",
    "ΔY/Y = ΔM/M + ΔL/L + 2(Δd/d) + Δl/l.",
    "1. Formula: Y = (4 M g L) / (π d² l).\n2. Relative error: ΔY/Y = ΔM/M + ΔL/L + 2 (Δd/d) + Δl/l.\n3. Substitute given percentage errors:\n   % error in Y = 1% + 1% + 2(2%) + 3%\n                = 1% + 1% + 4% + 3% = 9%.",
    "NEET High-Yield Trap: Notice diameter d has power 2 in denominator: 2 × 2% = 4%. Total = 1 + 1 + 4 + 3 = 9%.",
    "Option B forgets factor of 2 for diameter (1 + 1 + 2 + 3 = 7%). Option C adds 4 to everything. Option D subtracts errors."
))

qs.append(make_q(
    473,
    "The kinetic energy of a body is K = (1/2) m v². If the error in measuring mass is 2% and the error in measuring velocity is 3%, the percentage error in kinetic energy is:",
    {"A": "8%", "B": "5%", "C": "12%", "D": "6%"},
    "A", "Medium", "Measurement-based numerical problems",
    "Kinetic energy percentage error propagation.",
    "% error in m = 2%, % error in v = 3%.",
    "K = (1/2) m v² => ΔK/K = Δm/m + 2(Δv/v).",
    "1. Kinetic energy formula: K = (1/2) m v².\n2. Fractional error: ΔK/K = Δm/m + 2 (Δv/v).\n3. Percentage error = 2% + 2 × (3%) = 2% + 6% = 8%.",
    "NEET Rule: v is squared, so multiply its percentage error by 2: 2% + 2(3%) = 8%.",
    "Option B adds directly (2 + 3 = 5%). Option C squares the 3% (2 + 9). Option D multiplies (2 × 3)."
))

qs.append(make_q(
    474,
    "In a calorimetry experiment, heat absorbed is Q = m c Δθ. The percentage errors in measuring heat Q, mass m, and temperature rise Δθ are 2%, 1%, and 2% respectively. The percentage error in the specific heat capacity c is:",
    {"A": "5%", "B": "1%", "C": "3%", "D": "4%"},
    "A", "Medium", "Measurement-based numerical problems",
    "Specific heat capacity error combination.",
    "% error in Q = 2%, % error in m = 1%, % error in Δθ = 2%.",
    "c = Q / (m Δθ) => Δc/c = ΔQ/Q + Δm/m + Δ(Δθ)/Δθ.",
    "1. Express specific heat capacity: c = Q / (m · Δθ).\n2. Maximum fractional error: Δc/c = ΔQ/Q + Δm/m + Δ(Δθ)/Δθ.\n3. Percentage error in c = 2% + 1% + 2% = 5%.",
    "NEET Principle: All terms in quotient contribute positively to MAXIMUM error: 2% + 1% + 2% = 5%.",
    "Option B subtracts errors (2 - 1). Option C cancels out terms. Option D misses one term."
))

qs.append(make_q(
    475,
    "A physical quantity P is related to four observables a, b, c, and d as P = a³ b² / (√c · d). The percentage errors in measuring a, b, c, and d are 1%, 3%, 4%, and 2% respectively. The maximum percentage error in P is:",
    {"A": "13%", "B": "11%", "C": "15%", "D": "17%"},
    "A", "Medium", "Measurement-based numerical problems",
    "Error propagation in a multi-variable power formula.",
    "P = a³ b² c⁻¹/² d⁻¹; errors: a=1%, b=3%, c=4%, d=2%.",
    "ΔP/P = 3(Δa/a) + 2(Δb/b) + (1/2)(Δc/c) + (Δd/d).",
    "1. P = a³ b² / (c^(1/2) · d).\n2. Maximum fractional error: ΔP/P = 3 (Δa/a) + 2 (Δb/b) + 0.5 (Δc/c) + (Δd/d).\n3. Substitute percentage errors:\n   % error in P = 3(1%) + 2(3%) + 0.5(4%) + 2%\n                = 3% + 6% + 2% + 2% = 13%.",
    "NEET NCERT Exemplar Question: Sum powers × % errors: 3(1) + 2(3) + 0.5(4) + 2 = 3 + 6 + 2 + 2 = 13%.",
    "Option B uses 1 for c error instead of half. Option C adds instead of halving for c. Option D doubles c."
))

qs.append(make_q(
    476,
    "The focal length f of a concave mirror is determined from mirror formula 1/f = 1/v + 1/u. If object distance u = (20 ± 0.2) cm and image distance v = (30 ± 0.3) cm, the fractional error in focal length (Δf / f) is:",
    {"A": "0.02 (2%)", "B": "0.01 (1%)", "C": "0.05 (5%)", "D": "0.005 (0.5%)"},
    "A", "Medium", "Measurement-based numerical problems",
    "Error in focal length from mirror formula using differential method.",
    "u = (20 ± 0.2) cm, v = (30 ± 0.3) cm.",
    "1/f = 1/v + 1/u => df/f² = dv/v² + du/u² => Δf/f = f × (Δv/v² + Δu/u²).",
    "1. Mean focal length f: 1/f = 1/20 + 1/30 = (3 + 2)/60 = 5/60 => f = 12 cm.\n2. Differentiating 1/f = 1/v + 1/u gives: Δf / f² = Δv / v² + Δu / u².\n3. Multiply by f: Δf / f = f × [Δv / v² + Δu / u²].\n4. Calculate bracket:\n   Δu / u² = 0.2 / (20)² = 0.2 / 400 = 0.0005 cm⁻¹.\n   Δv / v² = 0.3 / (30)² = 0.3 / 900 = 0.000333 cm⁻¹.\n   Sum = 0.0005 + 0.000333 = 0.000833 cm⁻¹.\n5. Δf / f = 12 × 0.000833 = 0.010 = 0.01 (or 1% relative error).",
    "NEET Mirror Error Formula: Δf/f = f(Δu/u² + Δv/v²). Here f = 12 cm, Δf/f = 12(0.0005 + 0.000333) = 0.01 = 1%.",
    "Option A is 2%. Option C is 5%. Option D is 0.5%."
))

# Note: for 476, correct answer is B (0.01 = 1%). Let's adjust options so A is correct!
qs[-1] = make_q(
    476,
    "The focal length f of a concave mirror is determined from mirror formula 1/f = 1/v + 1/u. If object distance u = (20 ± 0.2) cm and image distance v = (30 ± 0.3) cm, the fractional error in focal length (Δf / f) is:",
    {"A": "0.01 (1.0%)", "B": "0.02 (2.0%)", "C": "0.05 (5.0%)", "D": "0.005 (0.5%)"},
    "A", "Medium", "Measurement-based numerical problems",
    "Error in focal length from mirror formula using differential method.",
    "u = (20 ± 0.2) cm, v = (30 ± 0.3) cm.",
    "1/f = 1/v + 1/u => df/f² = dv/v² + du/u² => Δf/f = f × (Δv/v² + Δu/u²).",
    "1. Mean focal length f: 1/f = 1/20 + 1/30 = 5/60 => f = 12 cm.\n2. Differentiating 1/f = 1/v + 1/u gives: Δf / f² = Δv / v² + Δu / u².\n3. Multiply by f: Δf / f = f × [Δv / v² + Δu / u²].\n4. Δu / u² = 0.2 / 400 = 0.0005 cm⁻¹; Δv / v² = 0.3 / 900 = 0.000333 cm⁻¹.\n5. Δf / f = 12 × (0.0005 + 0.000333) = 12 × 0.000833 = 0.01 (1.0%).",
    "NEET Mirror Error Formula: Δf/f = f(Δu/u² + Δv/v²) = 12(0.000833) = 0.010 = 1.0%.",
    "Option B is 2%. Option C is 5%. Option D is 0.5%."
)

qs.append(make_q(
    477,
    "In measuring the surface tension of a liquid by capillary rise method T = (r h ρ g) / 2, the percentage errors in radius r, height h, and density ρ are 2%, 3%, and 1% respectively (g is exact). The maximum percentage error in surface tension T is:",
    {"A": "6%", "B": "5%", "C": "7%", "D": "4%"},
    "A", "Medium", "Measurement-based numerical problems",
    "Surface tension percentage error propagation.",
    "% error in r = 2%, % error in h = 3%, % error in ρ = 1%.",
    "T = (r h ρ g)/2 => ΔT/T = Δr/r + Δh/h + Δρ/ρ.",
    "1. Capillary rise formula: T = (r h ρ g) / 2.\n2. Maximum fractional error: ΔT/T = Δr/r + Δh/h + Δρ/ρ.\n3. Percentage error = 2% + 3% + 1% = 6%.",
    "NEET Capillary Rise: All variables have power 1, so add percentage errors directly: 2% + 3% + 1% = 6%.",
    "Option B omits density error. Option C adds an extra 1%. Option D subtracts radius error."
))

qs.append(make_q(
    478,
    "The coefficient of viscosity η of a liquid flowing through a capillary tube is given by Poiseuille's formula: η = (π P r⁴) / (8 V l). Which measured physical quantity contributes the greatest relative error to η?",
    {"A": "Radius of the capillary tube (r)", "B": "Pressure difference (P)", "C": "Length of the tube (l)", "D": "Rate of liquid flow (V)"},
    "A", "Hard", "Measurement-based numerical problems",
    "Dominant error contribution in Poiseuille's viscosity equation.",
    "η = (π P r⁴) / (8 V l).",
    "Fractional error Δη/η = ΔP/P + 4(Δr/r) + ΔV/V + Δl/l.",
    "1. In Poiseuille's formula, the radius r appears to the fourth power (r⁴).\n2. The relative error contribution from radius is 4 × (Δr/r).\n3. Because of the factor of 4, any small uncertainty in measuring the tiny capillary radius is multiplied fourfold.\n4. Therefore, radius measurement contributes the greatest fractional error to viscosity.",
    "NEET Experimental Insight: Highest power = greatest error contributor. r⁴ contributes 4 × (Δr/r)!",
    "Options B, C, and D all appear to power 1, so their errors are not magnified by a factor of 4."
))

qs.append(make_q(
    479,
    "In an experiment to determine g using a simple pendulum, length L = 20.0 cm is measured with an accuracy of 1 mm, and time for 100 oscillations is 90 s measured with a stopwatch of 1 s resolution. The percentage accuracy in g is approximately:",
    {"A": "2.7%", "B": "1.6%", "C": "3.8%", "D": "4.5%"},
    "A", "Hard", "Measurement-based numerical problems",
    "Accuracy determination of g combining length scale and oscillation time errors.",
    "L = 20.0 cm, ΔL = 1 mm = 0.1 cm; t = 90 s for 100 oscillations, Δt = 1 s.",
    "Δg/g = ΔL/L + 2(Δt/t); multiply by 100%.",
    "1. L = 20.0 cm, ΔL = 0.1 cm => ΔL/L = 0.1 / 20.0 = 0.005 (0.5%).\n2. Time t = 90 s, Δt = 1 s => Δt/t = 1 / 90 ≈ 0.0111 (1.11%).\n3. Since g ∝ L / T² and T = t / n, ΔT/T = Δt/t.\n4. Relative error in g: Δg/g = ΔL/L + 2 (Δt/t) = 0.005 + 2(1/90) = 0.005 + 0.0222 = 0.0272.\n5. Percentage error = 0.0272 × 100% ≈ 2.7%.",
    "NEET Classic NCERT Problem: % error in g = (0.1/20 × 100%) + 2 × (1/90 × 100%) = 0.5% + 2.22% = 2.72% ≈ 2.7%.",
    "Option B forgets the factor of 2 for time (0.5 + 1.11 = 1.6%). Option C adds 1% extra. Option D is 4.5%."
))

qs.append(make_q(
    480,
    "Two resistors R₁ = (100 ± 3) Ω and R₂ = (200 ± 4) Ω are connected in parallel. The equivalent resistance R_p with its absolute error is:",
    {"A": "(66.7 ± 1.8) Ω", "B": "(66.7 ± 7.0) Ω", "C": "(66.7 ± 3.5) Ω", "D": "(66.7 ± 0.9) Ω"},
    "A", "Hard", "Measurement-based numerical problems",
    "Parallel resistance error propagation using differential formula.",
    "R₁ = (100 ± 3) Ω, R₂ = (200 ± 4) Ω.",
    "1/R_p = 1/R₁ + 1/R₂ => ΔR_p / R_p² = ΔR₁ / R₁² + ΔR₂ / R₂².",
    "1. Equivalent resistance R_p = (R₁ R₂) / (R₁ + R₂) = (100 × 200) / 300 = 200/3 ≈ 66.7 Ω.\n2. Differentiating 1/R_p = 1/R₁ + 1/R₂ yields: ΔR_p / R_p² = ΔR₁ / R₁² + ΔR₂ / R₂².\n3. ΔR₁ / R₁² = 3 / (100)² = 3 / 10000 = 0.0003 Ω⁻¹.\n4. ΔR₂ / R₂² = 4 / (200)² = 4 / 40000 = 0.0001 Ω⁻¹.\n5. Sum = 0.0003 + 0.0001 = 0.0004 Ω⁻¹.\n6. ΔR_p = R_p² × 0.0004 = (66.67)² × 0.0004 = 4444.4 × 0.0004 ≈ 1.78 Ω ≈ 1.8 Ω.\n7. Hence, R_p = (66.7 ± 1.8) Ω.",
    "NEET Parallel Resistor Error: ΔR_p = R_p² × [ΔR₁/R₁² + ΔR₂/R₂²] = (66.7)² × (0.0004) = 1.78 ≈ 1.8 Ω.",
    "Option B simply adds absolute errors (3 + 4 = 7). Option C uses average error. Option D halves the error."
))

qs.append(make_q(
    481,
    "The radius of a wire is r = (0.24 ± 0.02) cm, length l = (4.80 ± 0.02) cm, and mass m = (2.15 ± 0.01) g. The maximum percentage error in the calculated density of the wire is approximately:",
    {"A": "17.6%", "B": "9.2%", "C": "12.4%", "D": "21.0%"},
    "A", "Hard", "Measurement-based numerical problems",
    "Comprehensive cylindrical density error propagation.",
    "r = (0.24 ± 0.02) cm, l = (4.80 ± 0.02) cm, m = (2.15 ± 0.01) g.",
    "ρ = m / (π r² l) => Δρ/ρ = Δm/m + 2(Δr/r) + Δl/l.",
    "1. Wire volume V = π r² l => Density ρ = m / (π r² l).\n2. Fractional error: Δρ/ρ = Δm/m + 2 (Δr/r) + Δl/l.\n3. Compute each percentage error:\n   Δm/m × 100% = (0.01 / 2.15) × 100% ≈ 0.465%.\n   Δr/r × 100% = (0.02 / 0.24) × 100% = 1/12 × 100% ≈ 8.333%.\n   Δl/l × 100% = (0.02 / 4.80) × 100% = 1/240 × 100% ≈ 0.417%.\n4. Total percentage error:\n   % error = 0.465% + 2 × (8.333%) + 0.417%\n           = 0.465% + 16.666% + 0.417% = 17.548% ≈ 17.6%.",
    "NEET High-Yield Trap: Notice radius percentage error is high (~8.33%) and multiplied by 2 (~16.67%)! Total ≈ 17.6%.",
    "Option B forgets factor of 2 for radius (0.47 + 8.33 + 0.42 = 9.2%). Option C uses 12.4%. Option D adds extra terms."
))

qs.append(make_q(
    482,
    "In an experiment to determine the refractive index μ of a prism of angle A = 60° (assumed exact), the angle of minimum deviation is measured as δ_m = (30.0 ± 0.5)°. The percentage error in the determined refractive index is approximately (Given: cos 45° ≈ 0.707, 1° ≈ 0.0175 rad):",
    {"A": "1.2%", "B": "2.5%", "C": "0.6%", "D": "3.1%"},
    "A", "Hard", "Measurement-based numerical problems",
    "Error propagation in prism formula using differentiation.",
    "A = 60°, δ_m = 30.0° ± 0.5°, Δδ_m = 0.5° = 0.5 × 0.0175 = 0.00873 rad.",
    "μ = sin((A + δ_m)/2) / sin(A/2) => dμ = [cos((A + δ_m)/2) / sin(A/2)] × (dδ_m / 2).",
    "1. Prism formula: μ = sin((A + δ_m)/2) / sin(A/2).\n2. With A = 60° and δ_m = 30°: (A + δ_m)/2 = 45° and A/2 = 30°.\n3. Mean μ = sin 45° / sin 30° = (1/√2) / (1/2) = √2 ≈ 1.414.\n4. Differentiating with respect to δ_m (keeping A constant):\n   dμ = [cos 45° / sin 30°] × (dδ_m / 2).\n5. Substitute dδ_m = 0.5° in radians = 0.5 × (π / 180) ≈ 0.008727 rad:\n   dμ = [ (1/√2) / (1/2) ] × (0.008727 / 2) = √2 × 0.004363 ≈ 1.414 × 0.004363 ≈ 0.00617.\n6. Fractional error dμ / μ = 0.00617 / 1.414 = 0.004363 = (1/2) × dδ_m / tan 45° ≈ 0.008727 / 2 ≈ 0.00436 = 0.44%.\nWait, let's recalculate fractional error:\n   dμ / μ = [cos 45° / sin 45°] × (dδ_m / 2) = cot 45° × (dδ_m / 2) = 1 × (0.008727 / 2) ≈ 0.00436 (0.44%).\nWait, if dδ_m = 1°, it would be 0.87%. For 0.5°, it is ~ 0.44%.",
    "NEET Prism Formula Error: dμ/μ = cot((A+δ_m)/2) × (dδ_m / 2).",
    "Option B is 2.5%. Option C is 0.6%. Option D is 3.1%."
))

# Let's adjust 482 options with exact value:
qs[-1] = make_q(
    482,
    "In an experiment to determine the refractive index μ of a prism of angle A = 60° (exact), the angle of minimum deviation is measured as δ_m = (30.0 ± 0.6)°. The percentage error in the determined refractive index is approximately (take 1° = 0.0175 rad):",
    {"A": "0.52%", "B": "1.05%", "C": "2.10%", "D": "0.26%"},
    "A", "Hard", "Measurement-based numerical problems",
    "Error propagation in prism formula using differentiation with respect to minimum deviation.",
    "A = 60°, δ_m = 30.0°, Δδ_m = 0.6° = 0.6 × 0.0175 rad = 0.0105 rad.",
    "μ = sin((A + δ_m)/2) / sin(A/2) => dμ/μ = cot((A + δ_m)/2) × (dδ_m / 2).",
    "1. Mean angle: (A + δ_m)/2 = (60° + 30°)/2 = 45°.\n2. Differentiating μ = sin((A + δ_m)/2) / sin(A/2):\n   dμ = cos((A + δ_m)/2) · (dδ_m / 2) / sin(A/2).\n3. Dividing by μ gives the fractional error:\n   dμ / μ = cot((A + δ_m)/2) × (dδ_m / 2) = cot 45° × (dδ_m / 2).\n4. Since cot 45° = 1:\n   dμ / μ = 1 × (dδ_m / 2).\n5. Convert dδ_m to radians: dδ_m = 0.6° = 0.6 × 0.0175 rad = 0.0105 rad.\n6. Fractional error = 0.0105 / 2 = 0.00525.\n7. Percentage error = 0.00525 × 100% ≈ 0.52%.",
    "NEET Golden Formula: For minimum deviation, dμ/μ = cot((A+δ_m)/2) × (dδ_m / 2). At 45°, cot 45° = 1 => % error = 0.5 × (dδ_m in rad) × 100% = 0.52%!",
    "Option B forgets the 1/2 factor (1.05%). Option C multiplies by 2. Option D divides by 4."
)

# ==============================================================================
# Topic 22 (483-500): Mixed-concept NEET-level questions (18 questions: 4 Easy, 9 Med, 5 Hard)
# ==============================================================================

qs.append(make_q(
    483,
    "Which of the following pairs of physical quantities share the exact same dimensional formula [M L² T⁻²] and the same SI unit (Joule)?",
    {"A": "Work and Kinetic Energy", "B": "Work and Torque", "C": "Torque and Angular Momentum", "D": "Pressure and Energy Density"},
    "A", "Easy", "Mixed-concept NEET-level questions",
    "Differentiating dimensionally equivalent quantities and unit conventions.",
    "Pairs of quantities with [M L² T⁻²].",
    "Work = Force × Displacement [M L² T⁻²]; KE = (1/2) m v² [M L² T⁻²].",
    "1. Both Work and Kinetic Energy have dimensional formula [M L² T⁻²].\n2. Both are scalar quantities and their SI unit is officially the Joule (J).\n3. While Torque also has dimensions [M L² T⁻²], torque is a rotational vector and its SI unit is strictly Newton-metre (N·m), never Joule.",
    "NEET Conceptual Distinction: Work & Kinetic Energy = Joule (J). Torque = N·m (never called Joule, even though dimensions match!).",
    "Option B: Torque is not expressed in Joules. Option C: Angular momentum has [M L² T⁻¹]. Option D: Pressure has [M L⁻¹ T⁻²]."
))

qs.append(make_q(
    484,
    "Which fundamental physical constant has the dimensional formula [M⁻¹ L³ T⁻²]?",
    {"A": "Universal Gravitational Constant (G)", "B": "Planck's Constant (h)", "C": "Permittivity of free space (ε₀)", "D": "Permeability of free space (μ₀)"},
    "A", "Easy", "Mixed-concept NEET-level questions",
    "Identifying dimensional formula of universal gravitational constant.",
    "Constant with [M⁻¹ L³ T⁻²].",
    "F = G m₁ m₂ / r² => G = F r² / m².",
    "1. Newton's law: F = G m₁ m₂ / r².\n2. Rearrange: G = F r² / m².\n3. Substitute dimensions: [G] = [M L T⁻²][L²] / [M²] = [M⁻¹ L³ T⁻²].\n4. SI unit is N·m²/kg² or m³·kg⁻¹·s⁻².",
    "NEET Memory Aid: G = [M⁻¹ L³ T⁻²]. Remember: -1 mass, +3 length, -2 time!",
    "Option B: [h] = [M L² T⁻¹]. Option C: [ε₀] = [M⁻¹ L⁻³ T⁴ A²]. Option D: [μ₀] = [M L T⁻² A⁻²]."
))

qs.append(make_q(
    485,
    "If momentum (P), area (A), and time (T) are taken to be the fundamental physical quantities, the dimensional formula for energy is:",
    {"A": "[P A¹/² T⁻¹]", "B": "[P² A T⁻¹]", "C": "[P A T⁻²]", "D": "[P A⁻¹/² T]"},
    "A", "Easy", "Mixed-concept NEET-level questions",
    "Expressing energy in an alternate system of fundamental quantities.",
    "Energy E in terms of P (momentum), A (area), and T (time).",
    "E = Force × distance = (dP/dt) × length = (P / T) × √A = P A¹/² T⁻¹.",
    "1. Energy E has dimensions [M L² T⁻²].\n2. Momentum P = m v has dimensions [M L T⁻¹].\n3. Notice that Energy = P × v = P × (L / T).\n4. Since Area A has dimension [L²], length L has dimension [A^(1/2)].\n5. Substitute L = A^(1/2): E = P × A^(1/2) × T⁻¹ = [P A^(1/2) T⁻¹].",
    "NEET Shortcut: E = Momentum × Velocity = P × (Distance / Time) = P × (√Area / T) = P A¹/² T⁻¹!",
    "Option B squares P. Option C uses A instead of √A. Option D inverts powers."
))

qs.append(make_q(
    486,
    "Which of the following statements is unconditionally TRUE regarding dimensional analysis?",
    {"A": "A dimensionally consistent equation may or may not be physically correct", "B": "A dimensionally consistent equation is always physically correct", "C": "A dimensionally inconsistent equation can sometimes be physically correct", "D": "Dimensional analysis can determine dimensionless proportionality constants"},
    "A", "Easy", "Mixed-concept NEET-level questions",
    "Fundamental limitations and core logic of dimensional analysis.",
    "Truth value of dimensional consistency.",
    "Principle of Homogeneity is a necessary but NOT sufficient condition.",
    "1. If an equation violates dimensional homogeneity, it is definitively WRONG.\n2. However, if an equation is dimensionally consistent, dimensionless factors (like 1/2, 2π, etc.) or extra dimensionless terms could still be missing or incorrect.\n3. For example, s = ut + at² is dimensionally consistent, but physically incorrect (it should be 1/2 at²).\n4. Hence, dimensional consistency is necessary, but not sufficient.",
    "NEET Axiom: Dimensional consistency = Necessary condition, NOT sufficient condition!",
    "Option B is false (constants can be wrong). Option C is impossible. Option D is a known limitation."
))

qs.append(make_q(
    487,
    "In a new system of units, the unit of mass is 10 kg, the unit of length is 1 km, and the unit of time is 1 minute (60 s). The value of 1 Joule of energy in this new system is:",
    {"A": "3.6 × 10⁻⁴ new units", "B": "3.6 × 10⁻⁵ new units", "C": "3.6 × 10⁶ new units", "D": "2.78 × 10⁻² new units"},
    "A", "Medium", "Mixed-concept NEET-level questions",
    "Unit conversion using dimensional transformation formula n₂ = n₁ [M₁/M₂]^a [L₁/L₂]^b [T₁/T₂]^c.",
    "1 Joule in SI: M₁ = 1 kg, L₁ = 1 m, T₁ = 1 s. New system: M₂ = 10 kg, L₂ = 1000 m, T₂ = 60 s.",
    "n₂ = n₁ [M₁/M₂]¹ [L₁/L₂]² [T₁/T₂]⁻².",
    "1. Dimensions of energy: [E] = [M¹ L² T⁻²]. Here a = 1, b = 2, c = -2.\n2. Conversion formula:\n   n₂ = 1 × [1 kg / 10 kg]¹ × [1 m / 1000 m]² × [1 s / 60 s]⁻²\n3. Evaluate each bracket:\n   [1/10]¹ = 10⁻¹.\n   [1/1000]² = 10⁻⁶.\n   [1/60]⁻² = (60)² = 3600.\n4. Multiply together:\n   n₂ = 10⁻¹ × 10⁻⁶ × 3600 = 10⁻⁷ × 3600 = 3.6 × 10⁻⁴ new units.",
    "NEET Unit Conversion: n₂ = 1 × (1/10) × (1/1000)² × (60)² = 3600 × 10⁻⁷ = 3.6 × 10⁻⁴ new units.",
    "Option B has power -5. Option C has positive power 10⁶. Option D is an erroneous calculation."
))

qs.append(make_q(
    488,
    "If the speed of light c, universal gravitational constant G, and Planck's constant h are chosen as fundamental units, the dimensional formula of length is proportional to:",
    {"A": "c⁻³/² G¹/² h¹/²", "B": "c³ G⁻¹/² h¹/²", "C": "c¹/² G¹/² h⁻³/²", "D": "c⁻⁵/² G¹/² h¹/²"},
    "A", "Medium", "Mixed-concept NEET-level questions",
    "Derivation of Planck length in terms of fundamental constants.",
    "Length L ∝ c^x G^y h^z.",
    "[c] = [L T⁻¹], [G] = [M⁻¹ L³ T⁻²], [h] = [M L² T⁻¹].",
    "1. [L] = [L T⁻¹]^x [M⁻¹ L³ T⁻²]^y [M L² T⁻¹]^z.\n2. Mass power: -y + z = 0 => y = z.\n3. Length power: x + 3y + 2z = 1 => x + 5y = 1.\n4. Time power: -x - 2y - z = 0 => x + 3y = 0 => x = -3y.\n5. Substitute into length equation: -3y + 5y = 1 => 2y = 1 => y = 1/2.\n6. Then z = 1/2 and x = -3(1/2) = -3/2.\n7. Therefore, L ∝ c^(-3/2) G^(1/2) h^(1/2) = √(h G / c³). This is the famous Planck length!",
    "NEET High-Yield: Planck Length l_p = √(h G / c³) = c⁻³/² G¹/² h¹/² ≈ 1.6 × 10⁻³⁵ m.",
    "Option B has positive power for c. Option C has negative power for h. Option D has -5/2 for c."
))

qs.append(make_q(
    489,
    "In the relation P = (α / β) exp(-α z / (k_B θ)), where P is pressure, z is distance, k_B is Boltzmann constant, and θ is temperature, the dimensional formula of β is:",
    {"A": "[M⁰ L² T⁰]", "B": "[M L⁻¹ T⁻²]", "C": "[M⁰ L⁻² T⁰]", "D": "[M L² T⁻²]"},
    "A", "Medium", "Mixed-concept NEET-level questions",
    "Finding dimension of variable using exponential argument dimensionless rule.",
    "P = (α / β) exp(-α z / (k_B θ)), where k_B θ is thermal energy.",
    "Argument of exponential is dimensionless: [α z / (k_B θ)] = 1.",
    "1. In physics, arguments of exponential functions must be dimensionless:\n   [α z / (k_B θ)] = [M⁰ L⁰ T⁰].\n2. Note that k_B θ has dimensions of energy [M L² T⁻²] and z is distance [L]:\n   [α] = [k_B θ / z] = [M L² T⁻²] / [L] = [M L T⁻²] (force).\n3. Since the exponential factor is dimensionless, [P] = [α / β]:\n   [β] = [α / P].\n4. Pressure has dimensions [M L⁻¹ T⁻²]:\n   [β] = [M L T⁻²] / [M L⁻¹ T⁻²] = [M⁰ L² T⁰] (area).",
    "NEET Classic: [k_B θ] = Energy = [M L² T⁻²]. [α] = Energy/L = Force. [β] = Force/Pressure = Area = [L²]!",
    "Option B is dimensions of pressure. Option C is inverse area. Option D is energy."
))

qs.append(make_q(
    490,
    "A student measures the diameter of a thin wire as 0.02050 cm. The number of significant figures in this measurement and its correct representation in scientific notation are:",
    {"A": "4 significant figures; 2.050 × 10⁻² cm", "B": "3 significant figures; 2.05 × 10⁻² cm", "C": "5 significant figures; 2.0500 × 10⁻² cm", "D": "2 significant figures; 2.1 × 10⁻² cm"},
    "A", "Medium", "Mixed-concept NEET-level questions",
    "Significant figure counting with leading and trailing zeroes in decimals.",
    "Measurement = 0.02050 cm.",
    "Leading zeroes are never significant; trailing zeroes after a decimal point ARE significant.",
    "1. In 0.02050 cm:\n   - The first two zeroes (0.0...) are leading zeroes; they merely indicate the position of the decimal point and are NOT significant.\n   - The digits '2', '0' (between 2 and 5), and '5' are significant (3 figures).\n   - The trailing zero at the very end ('0' after 5) is significant because it appears after the decimal point to indicate measurement precision.\n2. Total count = 4 significant figures (2, 0, 5, 0).\n3. In scientific notation, all significant figures must be retained: 2.050 × 10⁻² cm.",
    "NEET Golden Rule: Leading zeroes NEVER count. Trailing zero in a decimal DOES count! 0.0[2050] => 4 sig figs.",
    "Option B drops the trailing zero. Option C invents an extra zero. Option D rounds aggressively."
))

qs.append(make_q(
    491,
    "The velocity v of surface water ripples depends on surface tension T, density of water ρ, and wavelength λ as v ∝ T^a ρ^b λ^c. The values of a, b, and c are:",
    {"A": "a = 1/2, b = -1/2, c = -1/2", "B": "a = 1/2, b = 1/2, c = 1/2", "C": "a = 1, b = -1, c = -1", "D": "a = -1/2, b = 1/2, c = -1/2"},
    "A", "Medium", "Mixed-concept NEET-level questions",
    "Dimensional derivation of capillary wave velocity.",
    "v ∝ T^a ρ^b λ^c.",
    "[v] = [L T⁻¹], [T] = [M T⁻²], [ρ] = [M L⁻³], [λ] = [L].",
    "1. Dimensions: [L T⁻¹] = [M T⁻²]^a [M L⁻³]^b [L]^c = [M^(a+b) L^(-3b+c) T^(-2a)].\n2. Equating power of T: -2a = -1 => a = 1/2.\n3. Equating power of M: a + b = 0 => b = -a = -1/2.\n4. Equating power of L: -3b + c = 1 => -3(-1/2) + c = 1 => 3/2 + c = 1 => c = 1 - 3/2 = -1/2.\n5. Therefore: v ∝ √(T / (ρ λ)). Values are a = 1/2, b = -1/2, c = -1/2.",
    "NEET Formula: Ripple speed v = √(T / (ρ λ)) => Powers are (1/2, -1/2, -1/2).",
    "Option B has all positive powers. Option C has integer powers. Option D inverts powers of T and ρ."
))

qs.append(make_q(
    492,
    "An experiment measures three quantities A, B, and C with percentage errors 1%, 2%, and 3% respectively. If a physical quantity X is given by X = A² B / C³, the maximum percentage error in X is:",
    {"A": "13%", "B": "7%", "C": "11%", "D": "9%"},
    "A", "Medium", "Mixed-concept NEET-level questions",
    "Maximum percentage error in power-product combination.",
    "X = A² B / C³; % errors: A=1%, B=2%, C=3%.",
    "ΔX/X = 2(ΔA/A) + (ΔB/B) + 3(ΔC/C).",
    "1. In X = A² B / C³, exponents are: A has 2, B has 1, C has 3.\n2. For MAXIMUM percentage error, all terms are added with positive signs:\n   % error in X = 2 × (% error in A) + 1 × (% error in B) + 3 × (% error in C)\n3. Substitute values:\n   % error in X = 2(1%) + 2% + 3(3%)\n                = 2% + 2% + 9% = 13%.",
    "NEET High-Yield Rule: Exponent of denominator is ADDED, never subtracted, for maximum error! 2(1) + 2 + 3(3) = 13%.",
    "Option B subtracts C (2 + 2 - 9 = -5%). Option C misses power of C (2 + 2 + 3 = 7%). Option D uses 9%."
))

qs.append(make_q(
    493,
    "If force (F), velocity (v), and time (t) are taken as the fundamental physical quantities, the dimensional formula of mass is:",
    {"A": "[F v⁻¹ t]", "B": "[F v t⁻¹]", "C": "[F v⁻² t]", "D": "[F² v⁻¹ t]"},
    "A", "Medium", "Mixed-concept NEET-level questions",
    "Expressing mass in terms of fundamental dynamical quantities F, v, t.",
    "Mass m in terms of F, v, t.",
    "Newton's second law: F = m a = m (v / t) => m = F v⁻¹ t.",
    "1. We know Force F = mass × acceleration.\n2. Acceleration = velocity / time = v / t.\n3. Therefore, F = m (v / t).\n4. Rearranging for mass: m = F t / v = F v⁻¹ t.\n5. Hence, the dimensional formula of mass is [F v⁻¹ t].",
    "NEET 5-Second Shortcut: F = m a = m v / t => m = F t / v = [F v⁻¹ t]!",
    "Option B multiplies by v. Option C uses v⁻². Option D squares F."
))

qs.append(make_q(
    494,
    "According to Stefan-Boltzmann law, the total energy radiated per unit area per second by a black body is E = σ T⁴. The dimensional formula of Stefan's constant σ is:",
    {"A": "[M L⁰ T⁻³ K⁻⁴]", "B": "[M L² T⁻³ K⁻⁴]", "C": "[M L⁻¹ T⁻² K⁻⁴]", "D": "[M L⁰ T⁻² K⁻⁴]"},
    "A", "Medium", "Mixed-concept NEET-level questions",
    "Derivation of dimensional formula for Stefan-Boltzmann constant.",
    "E = σ T⁴, where E is radiant energy per unit area per second (Intensity).",
    "[σ] = [E] / [T]⁴ = ([Energy] / ([Area] [Time])) / [K]⁴.",
    "1. E is emissive power: Energy / (Area × Time).\n2. Dimensions of E: [M L² T⁻²] / ([L²] [T]) = [M T⁻³] (or [M L⁰ T⁻³]).\n3. Since E = σ T⁴, we have: [σ] = [E] / [T⁴].\n4. Substituting dimensions: [σ] = [M L⁰ T⁻³] / [K⁴] = [M L⁰ T⁻³ K⁻⁴].\n5. SI unit is W/(m²·K⁴).",
    "NEET High-Yield Constant: Stefan's constant σ = [M T⁻³ K⁻⁴]. Unit = W·m⁻²·K⁻⁴.",
    "Option B retains [L²] (confusing emissive power with total power). Option C is pressure. Option D has [T⁻²]."
))

qs.append(make_q(
    495,
    "A wire has mass m = (0.3 ± 0.003) g, radius r = (0.5 ± 0.005) mm, and length l = (6.0 ± 0.06) cm. The maximum percentage error in the measurement of its density is:",
    {"A": "4%", "B": "3%", "C": "2%", "D": "5%"},
    "A", "Medium", "Mixed-concept NEET-level questions",
    "Percentage error in wire density with mixed measuring units.",
    "m = (0.3 ± 0.003) g, r = (0.5 ± 0.005) mm, l = (6.0 ± 0.06) cm.",
    "Density ρ = m / (π r² l) => % error = % error in m + 2(% error in r) + % error in l.",
    "1. Calculate percentage errors of individual measurements:\n   - Mass: (0.003 / 0.3) × 100% = 1%.\n   - Radius: (0.005 / 0.5) × 100% = 1%.\n   - Length: (0.06 / 6.0) × 100% = 1%.\n2. Density formula: ρ = m / (π r² l).\n3. Relative error: Δρ/ρ = Δm/m + 2 (Δr/r) + Δl/l.\n4. Total percentage error:\n   % error = 1% + 2(1%) + 1% = 1% + 2% + 1% = 4%.",
    "NEET NCERT Classic: % error in m = 1%, % error in r = 1%, % error in l = 1%. Total = 1 + 2(1) + 1 = 4%!",
    "Option B forgets factor of 2 for radius (1 + 1 + 1 = 3%). Option C uses 2%. Option D uses 5%."
))

qs.append(make_q(
    496,
    "The Reynolds number Re governing fluid flow in a pipe of diameter d is given by Re = (ρ v d) / η, where ρ is density, v is flow speed, and η is viscosity. If the flow speed v increases by 10% and the pipe diameter d decreases by 10% (with ρ and η unchanged), the percentage change in Reynolds number is:",
    {"A": "Decreases by 1%", "B": "Increases by 1%", "C": "Remains unchanged (0%)", "D": "Decreases by 2%"},
    "A", "Hard", "Mixed-concept NEET-level questions",
    "Dimensionless Reynolds number and fractional change calculation under opposite percentage shifts.",
    "Re ∝ v · d; v' = 1.10 v, d' = 0.90 d.",
    "Re' = Re × (1 + Δv/v)(1 + Δd/d) = Re × (1.10)(0.90) = 0.99 Re.",
    "1. Re is directly proportional to the product (v · d).\n2. New speed: v' = v (1 + 0.10) = 1.10 v.\n3. New diameter: d' = d (1 - 0.10) = 0.90 d.\n4. New Reynolds number: Re' ∝ (1.10 v) × (0.90 d) = 0.99 (v · d).\n5. Fractional change: (Re' - Re) / Re = 0.99 - 1 = -0.01 = -1%.\n6. Thus, Reynolds number decreases by 1%.",
    "NEET Math Trap: (+10%) and (-10%) do NOT cancel! (1.10)(0.90) = 0.99 => Decreases by exactly 1%!",
    "Option B claims an increase. Option C falls into the zero-cancellation trap. Option D doubles the decrease."
))

qs.append(make_q(
    497,
    "The fundamental frequency of transverse vibration ν of a stretched string depends on length l, tension T, and mass per unit length μ as ν = k l^a T^b μ^c. Using dimensional analysis, the correct formula is:",
    {"A": "ν ∝ (1/l) √(T / μ)", "B": "ν ∝ l √(T / μ)", "C": "ν ∝ (1/l) √(μ / T)", "D": "ν ∝ (1/l²) (T / μ)"},
    "A", "Hard", "Mixed-concept NEET-level questions",
    "Derivation of Mersenne's law for stretched string frequency using dimensions.",
    "ν ∝ l^a T^b μ^c.",
    "[ν] = [T⁻¹], [l] = [L], [T] = [M L T⁻²] (tension force), [μ] = [M L⁻¹] (linear mass density).",
    "1. Write dimensional equation:\n   [T⁻¹] = [L]^a [M L T⁻²]^b [M L⁻¹]^c = [M^(b+c) L^(a+b-c) T^(-2b)].\n2. Equating power of M: b + c = 0 => c = -b.\n3. Equating power of T: -2b = -1 => b = 1/2.\n4. Then c = -1/2.\n5. Equating power of L: a + b - c = 0 => a + 1/2 - (-1/2) = 0 => a + 1 = 0 => a = -1.\n6. Therefore: ν ∝ l⁻¹ T^(1/2) μ^(-1/2) = (1/l) √(T / μ).",
    "NEET Standard Formula: Frequency of string ν = (1 / 2l) √(T / μ) => a = -1, b = 1/2, c = -1/2.",
    "Option B puts l in numerator. Option C inverts T and μ. Option D uses l²."
))

qs.append(make_q(
    498,
    "In the van der Waals equation of state (P + a / V²)(V - b) = R T for 1 mole of a real gas, the ratio (a / b) has the same dimensional formula as:",
    {"A": "Work or Energy [M L² T⁻²]", "B": "Pressure [M L⁻¹ T⁻²]", "C": "Force [M L T⁻²]", "D": "Power [M L² T⁻³]"},
    "A", "Hard", "Mixed-concept NEET-level questions",
    "Dimensional analysis of the ratio of van der Waals constants a and b.",
    "(P + a/V²)(V - b) = RT.",
    "[a/V²] = [P] => [a] = [P V²]; [b] = [V]; [a/b] = [P V²]/[V] = [P V].",
    "1. By Principle of Homogeneity, terms added together must share identical dimensions:\n   [a / V²] = [P] => [a] = [P] [V²].\n   [b] = [V].\n2. Therefore, the ratio [a / b] is:\n   [a / b] = [P] [V²] / [V] = [P] [V].\n3. Pressure × Volume: [P V] = [Force / Area] × [Volume] = [Force × Length] = [Work/Energy].\n4. Dimensional formula: [P V] = [M L⁻¹ T⁻²][L³] = [M L² T⁻²].",
    "NEET Elegant Insight: [a/b] = [P V² / V] = [P V] = Work / Energy = [M L² T⁻²]!",
    "Option B is pressure. Option C is force. Option D is power."
))

qs.append(make_q(
    499,
    "A theoretical physicist constructs a physical quantity X defined as X = √(h c⁵ / G), where h is Planck's constant, c is speed of light, and G is gravitational constant. The quantity X has the dimensions of:",
    {"A": "Energy [M L² T⁻²]", "B": "Mass [M]", "C": "Force [M L T⁻²]", "D": "Power [M L² T⁻³]"},
    "A", "Hard", "Mixed-concept NEET-level questions",
    "Dimensional identification of the Planck energy formula E_p = √(h c⁵ / G).",
    "X = √(h c⁵ / G).",
    "[h] = [M L² T⁻¹], [c] = [L T⁻¹], [G] = [M⁻¹ L³ T⁻²].",
    "1. Substitute dimensions into numerator: [h c⁵] = [M L² T⁻¹][L⁵ T⁻⁵] = [M L⁷ T⁻⁶].\n2. Divide by [G]: [h c⁵ / G] = [M L⁷ T⁻⁶] / [M⁻¹ L³ T⁻²] = [M² L⁴ T⁻⁴].\n3. Take the square root: √[M² L⁴ T⁻⁴] = [M L² T⁻²].\n4. [M L² T⁻²] is the dimensional formula of Energy.\n5. In theoretical astrophysics, X is known as the Planck Energy (E_p ≈ 1.956 × 10⁹ J).",
    "NEET Planck Units: Planck Energy E_p = √(h c⁵ / G) = [M L² T⁻²] (Energy)!",
    "Option B is Planck mass (which is √(h c / G)). Option C is Planck force (c⁴ / G). Option D is Planck power."
))

qs.append(make_q(
    500,
    "The electric permittivity of free space ε₀, magnetic permeability μ₀, and capacitance C are fundamental electromagnetic quantities. The quantity 1 / √(μ₀ ε₀) has the dimensional formula of:",
    {"A": "Velocity [M⁰ L T⁻¹]", "B": "Resistance [M L² T⁻³ A⁻²]", "C": "Inductance [M L² T⁻² A⁻²]", "D": "Electric field [M L T⁻³ A⁻¹]"},
    "A", "Hard", "Mixed-concept NEET-level questions",
    "Maxwell's relation for the speed of light in vacuum c = 1 / √(μ₀ ε₀).",
    "Quantity 1 / √(μ₀ ε₀).",
    "c = 1 / √(μ₀ ε₀) where c is the speed of electromagnetic waves in vacuum.",
    "1. In Maxwell's electromagnetic theory, the propagation speed of light in vacuum is given by c = 1 / √(μ₀ ε₀).\n2. Therefore, the quantity 1 / √(μ₀ ε₀) is identical to the speed of light c.\n3. Its dimensional formula is that of velocity: [M⁰ L T⁻¹].\n4. SI unit is m/s (numerical value ≈ 3 × 10⁸ m/s).",
    "NEET Golden Maxwell Relation: 1 / √(μ₀ ε₀) = c = Speed of light = [L T⁻¹]!",
    "Option B is impedance/resistance (√(μ₀ / ε₀) = 377 Ω). Option C is inductance. Option D is electric field."
))

print(f"Part 4 second half generated: {len(qs)} questions (446 to 500).")

with open('scripts/part4_second_half.json', 'w', encoding='utf-8') as f:
    json.dump(qs, f, indent=2, ensure_ascii=False)
