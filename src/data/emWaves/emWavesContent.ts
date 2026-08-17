// Comprehensive Content Sections, Explanations, Formulas & Traps for Electromagnetic Waves

import { emDiagrams } from './emWavesDiagrams';
import { ConceptVisual } from '../../types/neet';

export const emImportantTerms = [
  {
    term: "Displacement Current (I_d)",
    definition: "The effective current that arises due to a time-varying electric field or time-varying electric flux between the plates of a capacitor or in free space: I_d = ε₀ (dΦ_E / dt).",
    neetNote: "NEET Key: Inside a charging capacitor gap, conduction current I_c = 0, but displacement current I_d = I_c. It produces a real magnetic field identical to conduction current."
  },
  {
    term: "Maxwell's Equations",
    definition: "The four fundamental partial differential equations of electromagnetism combining Gauss's Law of Electrostatics, Gauss's Law of Magnetism, Faraday's Law of Induction, and the Ampère-Maxwell Law.",
    neetNote: "Gauss's Law of Magnetism ∮ B · dA = 0 proves isolated magnetic monopoles do not exist."
  },
  {
    term: "Electromagnetic Wave",
    definition: "A self-sustaining, non-mechanical wave consisting of mutually perpendicular, time-varying electric (E) and magnetic (B) fields oscillating sinusoidally in directions perpendicular to the direction of wave propagation.",
    neetNote: "E and B are always in the same phase. When E reaches its peak, B also reaches its peak."
  },
  {
    term: "Wave Impedance of Free Space (Z₀)",
    definition: "The ratio of transverse electric field to transverse magnetic field in vacuum: Z₀ = √(μ₀ / ε₀) ≈ 376.73 Ω ≈ 120π Ω.",
    neetNote: "Z₀ has dimensions of electrical resistance [M L² T⁻³ A⁻²]."
  },
  {
    term: "Poynting Vector (S)",
    definition: "A vector representing the directional energy flux density (rate of energy transfer per unit area) of an electromagnetic field: S = (1/μ₀) (E × B).",
    neetNote: "Direction of S gives the instantaneous direction of wave energy propagation. Intensity I = ⟨S⟩ = ½ ε₀ c E₀²."
  },
  {
    term: "Radiation Pressure (P_rad)",
    definition: "The mechanical force per unit area exerted by electromagnetic radiation on any surface it strikes: P_rad = I/c (perfect absorption), P_rad = 2I/c (perfect reflection).",
    neetNote: "Comets' tails always point away from the Sun due to solar radiation pressure and solar wind."
  },
  {
    term: "Electromagnetic Spectrum",
    definition: "The continuous orderly classification of all electromagnetic waves according to their wavelength (λ), frequency (f), or photon energy (E = hf).",
    neetNote: "Order of increasing frequency: Radio < Microwave < Infrared < Visible < Ultraviolet < X-rays < Gamma rays."
  }
];

export const emConceptExplanations: Array<{
  heading: string;
  paragraphs: string[];
  visual?: ConceptVisual;
  importantPoints?: string[];
}> = [
  {
    heading: "1. Chapter Introduction & Conceptual Chain",
    paragraphs: [
      "In earlier chapters of Class 12 Physics, we studied two monumental discoveries: Oersted discovered that steady electric currents produce static magnetic fields, and Faraday discovered that changing magnetic fields induce electric fields (Electromagnetic Induction).",
      "In 1865, James Clerk Maxwell noticed a profound aesthetic and mathematical asymmetry: If a changing magnetic field can produce an electric field, can a changing electric field produce a magnetic field? Maxwell answered YES by introducing the concept of Displacement Current.",
      "This led directly to the unification of Electricity, Magnetism, and Optics: time-varying electric and magnetic fields regenerate each other continuously across empty space, propagating as an ELECTROMAGNETIC WAVE at the speed of light.",
      "• Conceptual Flow Chain:\n  Varying Potential Difference / Charge Motion ➔ Time-Varying Electric Field (dE/dt) ➔ Displacement Current (I_d) ➔ Time-Varying Magnetic Field (dB/dt) ➔ Induced Electric Field (Faraday) ➔ Self-Sustaining Wave Propagation Through Vacuum ➔ Electromagnetic Spectrum (Radio to Gamma Rays) ➔ Medical, Industrial & Communication Applications.",
      "• Why EM waves travel through vacuum: Unlike sound, water, or seismic waves that require elastic material particles to vibrate, EM waves consist of self-sustaining oscillating fields that require NO material medium."
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.selfPropagatingWave,
      caption: "Figure 1: Maxwell's Regenerative Mechanism — Time-varying E induces B, and time-varying B induces E.",
      guide: "Study how time variation in one field vector automatically creates the orthogonal field vector, sustaining propagation through empty space at c."
    },
    importantPoints: [
      "EM waves are self-sustaining oscillating field disturbances; they require NO physical medium.",
      "Maxwell unified electricity, magnetism, and light into a single comprehensive electromagnetic framework.",
      "Predicted by Maxwell in 1865; experimentally produced and detected by Heinrich Hertz in 1887."
    ]
  },
  {
    heading: "2. The Inconsistency in Ampère's Law & Displacement Current",
    paragraphs: [
      "Consider a parallel plate capacitor being charged by a time-dependent current I_c(t). Let us apply Ampère's Circuital Law ∮ B · dl = μ₀ I_enclosed to find the magnetic field around a loop outside and between the plates:",
      "1. Loop 1 (Flat disc surface cutting the connecting wire): Current piercing the surface is I_c. Hence ∮ B · dl = μ₀ I_c ≠ 0.",
      "2. Loop 2 (Pot-shaped surface whose rim is the same loop, but bulging between the capacitor plates): No actual electrons cross the insulating dielectric gap. Hence I_enclosed = 0, which gives ∮ B · dl = 0!",
      "This is a fatal logical contradiction: the magnetic field at a given point cannot depend on the arbitrary mathematical shape of the surface chosen!",
      "• Maxwell's Resolution: Between the plates, as charge accumulates, the electric field E increases. Electric flux is Φ_E = E · A = (Q / (ε₀ A)) · A = Q / ε₀. Differentiating with respect to time gives dΦ_E / dt = (1/ε₀) (dQ/dt) = I_c / ε₀.",
      "Maxwell defined the DISPLACEMENT CURRENT as: I_d = ε₀ (dΦ_E / dt). Adding this to conduction current resolves the paradox: inside the wire I = I_c (I_d = 0); inside the plate gap I = I_d (I_c = 0). Total current is continuous everywhere!"
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.chargingCapacitor,
      caption: "Figure 2: Conduction current I_c in connecting wires equals Displacement current I_d across the dielectric gap.",
      guide: "Notice how I_c smoothly transitions into I_d between the capacitor plates, ensuring continuity of total current ∮ B · dl = μ₀(I_c + I_d)."
    },
    importantPoints: [
      "Displacement Current Formula: I_d = ε₀ (dΦ_E / dt) = C (dV/dt).",
      "Displacement current is NOT a flow of physical charges (electrons); it is the rate of change of electric flux.",
      "Generalised Ampère-Maxwell Law: ∮ B · dl = μ₀ [ I_c + ε₀ (dΦ_E / dt) ].",
      "During steady DC (capacitor fully charged), dE/dt = 0, so I_d = 0 and no magnetic field is produced."
    ]
  },
  {
    heading: "3. Maxwell's Prediction of Electromagnetic Waves",
    paragraphs: [
      "Combining his 4 fundamental equations in source-free space (ρ = 0, J = 0), Maxwell derived the wave equations for electric and magnetic fields:",
      "∇²E = μ₀ ε₀ (∂²E / ∂t²)  and  ∇²B = μ₀ ε₀ (∂²B / ∂t²)",
      "Comparing this with the classical 3D wave equation ∇²ψ = (1/v²) (∂²ψ / ∂t²), Maxwell discovered that the speed of electromagnetic waves in vacuum is given by:",
      "c = 1 / √(μ₀ ε₀)",
      "Substituting known electrostatic and magnetostatic constants:\n  ε₀ = 8.854 × 10⁻¹² C²/(N·m²)\n  μ₀ = 4π × 10⁻⁷ T·m/A\n  c = 1 / √[ (4π × 10⁻⁷) × (8.854 × 10⁻¹²) ] = 2.998 × 10⁸ m/s ≈ 3.0 × 10⁸ m/s.",
      "This precisely matched the measured speed of light! Maxwell made the historic conclusion: 'Light itself is an electromagnetic wave.'"
    ],
    importantPoints: [
      "Wave speed equation in vacuum: c = 1 / √(μ₀ ε₀) = 3 × 10⁸ m/s.",
      "Wave speed in a dielectric medium: v = 1 / √(με) = c / √(μ_r ε_r) = c / n.",
      "Refractive index of a non-magnetic medium: n = √ε_r = √K (where K is the dielectric constant)."
    ]
  },
  {
    heading: "4. Structure of a Plane Transverse Electromagnetic Wave",
    paragraphs: [
      "A plane electromagnetic wave travelling along the +x direction is mathematically described by sinusoidal field functions:",
      "E_y(x,t) = E₀ sin(kx - ωt)  and  B_z(x,t) = B₀ sin(kx - ωt)",
      "Key Features of the Wave Structure:",
      "1. Mutual Orthogonality: The electric field E, the magnetic field B, and the propagation velocity vector v are all mutually perpendicular (E ⟂ B, E ⟂ v, B ⟂ v).",
      "2. Same Phase: E and B oscillate in exact phase. Both reach zero at the same position and time (nodes), and both reach their maximum positive and negative values simultaneously.",
      "3. Wave Vector & Direction of Propagation: The wave vector k = 2π/λ points in the direction of propagation. The unit vector of propagation is given by: v̂ = (Ê × B̂).",
      "4. Right-Hand Rule: If you curl the fingers of your right hand from E towards B, your thumb points along the direction of wave propagation."
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.transverseEmWave,
      caption: "Figure 3: 3D representation of a linearly polarised transverse EM wave propagating along the x-axis.",
      guide: "Verify that E oscillates purely in the y-axis, B oscillates in the z-axis, and the wave advances along the x-axis with wavelength λ."
    },
    importantPoints: [
      "Phase difference between E and B in vacuum is ZERO (Δφ = 0).",
      "Propagation direction vector is ALWAYS parallel to (E × B).",
      "Wave number k = 2π / λ = ω / c; Angular frequency ω = 2πf."
    ]
  },
  {
    heading: "5. Orthogonality & Amplitude Relationships (E₀ = c B₀)",
    paragraphs: [
      "At every point and every instant in a plane EM wave in vacuum, the ratio of electric field magnitude to magnetic field magnitude is strictly constant and equal to the speed of light:",
      "E / B = E₀ / B₀ = c = 3 × 10⁸ m/s",
      "• Why B appears so small in SI units: If E₀ = 300 V/m, then B₀ = 300 / (3 × 10⁸) = 10⁻⁶ T = 1 μT. While 10⁻⁶ looks small, the magnetic Lorentz force on a fast charge F_B = q(v × B) is comparable to electric force F_E = qE when v approaches c.",
      "• Vector Cross Product Rules for NEET:",
      "  - E · B = 0 (perpendicular fields)",
      "  - E · v̂ = 0 and B · v̂ = 0 (transverse nature)",
      "  - E × B points along +v̂ (propagation direction)",
      "  - B × E points along -v̂ (opposite to propagation!)"
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.orthogonalityVector,
      caption: "Figure 4: Trihedron showing mutual orthogonality of E, B, and propagation vector k̂.",
      guide: "Use the right-hand curl rule: E along +y crossed into B along +z produces velocity along +x (ĵ × k̂ = î)."
    },
    importantPoints: [
      "E₀ = c · B₀ in vacuum; in a medium E₀ = v · B₀.",
      "Electric and magnetic field vectors have zero dot product: E · B = 0.",
      "To find unknown field direction, use unit vector cross products: î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ."
    ]
  },
  {
    heading: "6. Energy Density, Intensity & Poynting Vector",
    paragraphs: [
      "Electromagnetic waves transport electromagnetic energy across space. The instantaneous energy density u is the sum of electrostatic and magnetostatic energy densities:",
      "u = u_E + u_B = ½ ε₀ E² + B² / (2μ₀)",
      "For sinusoidal waves, the time-average values over one complete cycle are:",
      "⟨u_E⟩ = ¼ ε₀ E₀²   and   ⟨u_B⟩ = B₀² / (4μ₀)",
      "Since E₀ = c B₀ and c² = 1/(μ₀ ε₀), substituting gives:\n  ⟨u_B⟩ = (E₀/c)² / (4μ₀) = ¼ ε₀ E₀² = ⟨u_E⟩.",
      "• Equipartition of Energy: In any electromagnetic wave, the total energy is divided EXACTLY EQUALLY between the electric field and the magnetic field! (Ratio ⟨u_E⟩ : ⟨u_B⟩ = 1 : 1).",
      "• Total Average Energy Density: ⟨u⟩ = ⟨u_E⟩ + ⟨u_B⟩ = ½ ε₀ E₀² = B₀² / (2μ₀) = ε₀ E_rms² = B_rms² / μ₀.",
      "• Intensity (I): The energy crossing per unit area per unit time normal to the direction of propagation is:\n  I = ⟨u⟩ · c = ½ ε₀ c E₀² = E₀ B₀ / (2μ₀) = (E_rms · B_rms) / μ₀."
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.amplitudeRelationship,
      caption: "Figure 5: Mathematical relationship between E₀, B₀, and 50-50 equipartition of energy.",
      guide: "Remember: While E₀/B₀ = c (amplitude ratio), the energy ratio ⟨u_E⟩/⟨u_B⟩ is strictly 1:1."
    },
    importantPoints: [
      "⟨u_E⟩ = ⟨u_B⟩ = ¼ ε₀ E₀² (Equal energy partition).",
      "Total average energy density ⟨u⟩ = ½ ε₀ E₀² = B₀² / (2μ₀).",
      "Intensity I = ⟨u⟩ · c = ½ ε₀ c E₀² = E_rms² / (μ₀ c).",
      "Poynting vector S = (1/μ₀)(E × B); time average ⟨S⟩ = Intensity I."
    ]
  },
  {
    heading: "7. Linear Momentum and Radiation Pressure",
    paragraphs: [
      "Electromagnetic waves carry not only energy, but also linear momentum. When an EM wave carrying total radiant energy U falls on a surface:",
      "1. Completely Absorbing Surface (Black surface):\n   - The entire momentum is absorbed: p = U / c.\n   - Average force exerted: F = dp/dt = (1/c)(dU/dt) = P / c (where P is optical power).\n   - Radiation Pressure: P_rad = Force / Area = (P/A) / c = I / c.",
      "2. Completely Reflecting Surface (Perfect mirror):\n   - The photons bounce back with reversed momentum: Δp = p_initial - (-p_initial) = 2U / c.\n   - Average force exerted: F = 2P / c.\n   - Radiation Pressure: P_rad = 2I / c.",
      "3. Surface with Reflection Coefficient 'r' (0 ≤ r ≤ 1):\n   - Radiation Pressure: P_rad = (I / c) · (1 + r).",
      "• Why we don't feel light pressure daily: For sunlight of 1400 W/m², P_rad = 1400 / (3 × 10⁸) ≈ 4.7 × 10⁻⁶ N/m² (negligible for macroscopic objects, but significant for solar sails and comet dust in deep space)."
    ],
    importantPoints: [
      "Momentum on complete absorption: p = U / c; Radiation Pressure P_rad = I / c.",
      "Momentum on complete reflection: p = 2U / c; Radiation Pressure P_rad = 2I / c.",
      "For oblique incidence at angle θ: P_rad = (I/c) cos²θ (absorption), P_rad = (2I/c) cos²θ (reflection)."
    ]
  },
  {
    heading: "8. Production and Fundamental Properties of EM Waves",
    paragraphs: [
      "How are electromagnetic waves generated?",
      "1. Static Charge (v = 0): Produces only a static electric field (no magnetic field, no wave).",
      "2. Uniformly Moving Charge (v = constant, a = 0): Produces a steady electric field and a steady magnetic field, but NO energy is radiated.",
      "3. Accelerating or Oscillating Charge (a ≠ 0): Produces time-varying electric and magnetic fields that radiate energy as ELECTROMAGNETIC WAVES. An LC oscillator circuit or an alternating dipole antenna radiates EM waves of frequency f = 1 / [2π√(LC)].",
      "• 13 Essential Properties of EM Waves for NEET:",
      "  1. Transverse in nature (E ⟂ B ⟂ v).",
      "  2. Propagate through vacuum with universal constant speed c = 3 × 10⁸ m/s.",
      "  3. Carry both energy and momentum; exert radiation pressure.",
      "  4. Exhibit all wave phenomena: Reflection, Refraction, Interference, Diffraction, and Polarisation.",
      "  5. Obey the Principle of Superposition.",
      "  6. Electrically neutral: Not deflected by static electric or magnetic fields.",
      "  7. Equal distribution of energy between E and B fields.",
      "  8. Phase difference between E and B is 0 rad.",
      "  9. Wave speed depends on permittivity and permeability of the medium (v = 1/√(με)).",
      "  10. Frequency remains unchanged when entering a new medium.",
      "  11. Wavelength decreases in denser optical media (λ' = λ/n).",
      "  12. Ratio of field amplitudes equals wave speed (E₀/B₀ = c).",
      "  13. Optical and physiological effects of light are caused primarily by the ELECTRIC FIELD vector (called the 'Light Vector')."
    ],
    importantPoints: [
      "Accelerated charge is the sole source of electromagnetic radiation.",
      "Electric field E is the 'Light Vector' responsible for optical, photographic, and retinal vision responses.",
      "EM waves are uncharged and cannot be deflected by external E or B fields."
    ]
  },
  {
    heading: "9. The Electromagnetic Spectrum Overview",
    paragraphs: [
      "The Electromagnetic Spectrum is the continuous range of all electromagnetic waves classified by frequency or wavelength. There are NO sharp boundaries between adjacent regions; classifications overlap and are named based on their method of production and detection.",
      "• Master Sequence in Decreasing Wavelength (Increasing Frequency & Photon Energy):\n  RADIO WAVES ➔ MICROWAVES ➔ INFRARED ➔ VISIBLE LIGHT ➔ ULTRAVIOLET ➔ X-RAYS ➔ GAMMA RAYS.",
      "• Memory Mnemonic: 'Rich Men In Velvet Use X-ray Glasses'\n  R = Radio, M = Micro, I = Infrared, V = Visible, U = Ultraviolet, X = X-rays, G = Gamma rays.",
      "• Speed in Vacuum: ALL seven regions travel at the EXACT SAME speed in vacuum: c = 3 × 10⁸ m/s. Gamma rays do NOT travel faster than Radio waves in vacuum!"
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.completeSpectrum,
      caption: "Figure 6: Complete Electromagnetic Spectrum with wavelength, frequency, and photon energy trends.",
      guide: "Follow the arrows: Frequency and Energy increase to the right; Wavelength increases to the left."
    },
    importantPoints: [
      "All EM waves have identical speed c = 3 × 10⁸ m/s in vacuum.",
      "Photon energy E = hf = hc / λ (h = 6.63 × 10⁻³⁴ J·s).",
      "Radio waves: Longest λ, Lowest f, Lowest energy.",
      "Gamma rays: Shortest λ, Highest f, Highest energy & penetrating power."
    ]
  },
  {
    heading: "10. Radio Waves (λ > 0.1 m, f < 3 GHz)",
    paragraphs: [
      "• Production: Rapid accelerated motion of charges in conducting wires (antennas) driven by LC oscillator circuits.",
      "• Frequency Bands & Propagation Modes:",
      "  1. Standard AM (Amplitude Modulated) Broadcast: 530 kHz to 1710 kHz (Ground wave & Sky wave propagation).",
      "  2. Shortwave Bands: Up to 54 MHz (Reflected back to Earth by the ionosphere).",
      "  3. TV Transmission: 54 MHz to 890 MHz (Space wave / Line-of-sight propagation).",
      "  4. FM (Frequency Modulated) Broadcast: 88 MHz to 108 MHz.",
      "  5. Cellular Telephony: Ultra High Frequency (UHF) band ~ 800 MHz to 2500 MHz (2.5 GHz)."
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.radioApplication,
      caption: "Figure 7: Radio wave transmission and reception in telecommunications.",
      guide: "Note the oscillating electrons in the transmitting aerial generating propagating radio wavefronts."
    },
    importantPoints: [
      "Wavelength λ > 0.1 m (can be tens of kilometers).",
      "FM radio range: 88 MHz - 108 MHz (frequently asked in NEET).",
      "Cellular communication uses UHF radio waves."
    ]
  },
  {
    heading: "11. Microwaves (λ: 1 mm - 0.1 m, f: 1 GHz - 300 GHz)",
    paragraphs: [
      "• Production: Generated by special vacuum tubes such as KLYSTRONS, MAGNETRONS, and semiconductor GUNN DIODES.",
      "• Why Microwaves for Radar: Due to their short wavelength (1 mm to 10 cm), microwaves travel in highly directional, narrow beams without significant diffraction around aircraft or ships.",
      "• Working Principle of Microwave Oven (2.45 GHz):",
      "  1. The oven produces microwaves at frequency f ≈ 2.45 GHz (λ ≈ 12.2 cm).",
      "  2. Water molecules are permanent electric dipoles with natural rotational modes in this frequency range.",
      "  3. The oscillating electric field exerts alternating torques (τ = p × E), causing water dipoles to rotate furiously.",
      "  4. Intermolecular friction converts rotational kinetic energy into heat throughout the food simultaneously.",
      "  5. Porcelain, glass, and plastic containers lack free permanent dipoles and do NOT absorb microwave energy, staying cool."
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.microwaveOven,
      caption: "Figure 8: Dielectric heating of polar water molecules in a microwave oven.",
      guide: "Understand why dry non-polar containers remain cool while moist food heats rapidly."
    },
    importantPoints: [
      "Sources: Klystron, Magnetron, Gunn diodes (direct NCERT question).",
      "Applications: Aircraft radar navigation, speed guns, satellite communications, microwave ovens.",
      "Microwave ovens heat via resonant molecular rotation of H₂O dipoles."
    ]
  },
  {
    heading: "12. Infrared Radiation / 'Heat Waves' (λ: 700 nm - 1 mm, f: 10¹¹ - 4×10¹⁴ Hz)",
    paragraphs: [
      "• Production: Emitted by hot bodies and vibrating molecules in thermal agitation.",
      "• Why called 'Heat Waves': Water molecules and other polar compounds readily absorb IR radiation, which excites vibrational and rotational modes, directly raising the temperature.",
      "• High-Yield Applications for NEET:",
      "  1. Remote Controls: IR LEDs transmit pulse-coded commands to TVs and air conditioners.",
      "  2. Greenhouse Effect: Solar visible light warms the Earth's surface. The warm Earth re-radiates long-wavelength infrared rays. Atmospheric greenhouse gases (CO₂, CH₄, H₂O) absorb this outgoing IR, trapping heat to maintain Earth's habitable temperature (~15°C average).",
      "  3. Thermal Imaging & Night Vision: Used by military and firefighters to detect human bodies through smoke and darkness.",
      "  4. Physical Therapy: IR lamps relieve muscular tension and joint pain.",
      "  5. Atmospheric Haze Penetration: IR waves have longer wavelength than visible light, so Rayleigh scattering (proportional to 1/λ⁴) is very small, allowing long-distance photography through fog."
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.infraredApplication,
      caption: "Figure 9: Infrared applications in thermal radiation, greenhouses, and TV remotes.",
      guide: "Rayleigh scattering ∝ 1/λ⁴ means infrared penetrates atmospheric dust and haze far better than visible light."
    },
    importantPoints: [
      "Called 'Heat waves' because they excite molecular vibrations in matter.",
      "Responsible for Earth's greenhouse effect.",
      "Used in TV remotes, night vision cameras, solar water heaters, and haze photography."
    ]
  },
  {
    heading: "13. Visible Light (λ: 400 nm - 700 nm, f: 4×10¹⁴ - 7.5×10¹⁴ Hz)",
    paragraphs: [
      "• The only region of the electromagnetic spectrum detectable by the human eye (retinal photoreceptors).",
      "• Production: Atomic electron transitions from higher to lower orbital energy levels, incandescent filaments, gas discharge lamps.",
      "• VIBGYOR Sequence with Exact NCERT Wavelengths:",
      "  - Violet: 400 nm to 450 nm (Shortest λ, Highest frequency ~ 7.5 × 10¹⁴ Hz, Max photon energy ~ 3.1 eV)",
      "  - Indigo: 450 nm to 480 nm",
      "  - Blue: 480 nm to 510 nm",
      "  - Green: 510 nm to 560 nm (Peak sensitivity of human eye ~ 555 nm in daylight)",
      "  - Yellow: 560 nm to 590 nm",
      "  - Orange: 590 nm to 620 nm",
      "  - Red: 620 nm to 700 nm (Longest λ, Lowest frequency ~ 4.3 × 10¹⁴ Hz, Min photon energy ~ 1.77 eV)",
      "• Animal Eyes vs Human Eyes: Some insects (e.g. honeybees) can see into the Ultraviolet region, while pit vipers can detect Infrared radiation."
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.visibleSpectrum,
      caption: "Figure 10: The narrow Visible Light window (VIBGYOR) spanning 400 nm to 700 nm.",
      guide: "Remember: Human daylight visual sensitivity peaks in the yellow-green region (~555 nm)."
    },
    importantPoints: [
      "Visible window: 400 nm (Violet) to 700 nm (Red) (or 4000 Å to 7000 Å).",
      "Red has maximum wavelength, minimum deviation in prisms, and minimum refractive index.",
      "Violet has minimum wavelength, maximum frequency, maximum deviation, and maximum refractive index."
    ]
  },
  {
    heading: "14. Ultraviolet Radiation (λ: 1 nm - 400 nm, f: 7.5×10¹⁴ - 10¹⁶ Hz)",
    paragraphs: [
      "• Production: Special arc lamps (Mercury arc, Carbon arc), extremely hot bodies (the Sun), and excimer lasers.",
      "• Stratospheric Ozone Shield: The stratospheric ozone layer (O₃) at 40-50 km altitude absorbs harmful solar UV rays (λ < 290 nm). Chlorofluorocarbons (CFCs) deplete this layer.",
      "• High-Yield Medical & Industrial Applications:",
      "  1. Water Purification: UV-C radiation (λ ≈ 254 nm) destroys the DNA of bacteria and viruses in domestic water purifiers (RO+UV).",
      "  2. LASIK Eye Surgery: Highly focused UV excimer lasers ablate corneal tissue with sub-micron precision to correct myopia.",
      "  3. Sterilisation: Disinfection of surgical instruments in operating theatres.",
      "  4. Forensics & Banking: Detecting forged banknotes, documents, and fluorescent security watermarks.",
      "• Hazards: UV produces melanin (tanning), causes sunburn, cataracts, and malignant melanoma (skin cancer). Ordinary window glass absorbs UV rays!"
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.uvApplication,
      caption: "Figure 11: UV water purification mechanism and stratospheric ozone absorption.",
      guide: "Note: Ordinary glass absorbs UV rays; quartz glass must be used to transmit UV light."
    },
    importantPoints: [
      "Wavelength: 1 nm to 400 nm (10 Å to 4000 Å).",
      "Germicidal lamp λ ≈ 254 nm destroys microbial DNA.",
      "Ordinary glass blocks UV rays (welders use glass goggles for eye protection)."
    ]
  },
  {
    heading: "15. X-Rays (λ: 10⁻³ nm - 1 nm, f: 10¹⁶ - 10¹⁹ Hz)",
    paragraphs: [
      "• Discovery & Production: Discovered by W. C. Röntgen in 1895. Produced in a COOLIDGE TUBE when high-energy electrons (accelerated through tens of kilovolts) strike a heavy metal target of high melting point (Tungsten or Molybdenum).",
      "• Mechanism: Deceleration of electrons produces continuous Bremsstrahlung radiation, and ejection of inner K-shell electrons produces characteristic X-rays.",
      "• High-Yield Applications for NEET:",
      "  1. Diagnostic Bone Radiography: Dense bone tissue contains Calcium (high atomic number Z = 20) and absorbs X-rays strongly via photoelectric effect, while soft flesh (C, H, O) is mostly transparent, casting sharp shadow images on photographic film.",
      "  2. Computed Tomography (CT Scans): 3D cross-sectional diagnostic imaging.",
      "  3. X-Ray Crystallography: X-ray wavelengths (~1 Å = 10⁻¹⁰ m) are comparable to interatomic spacing in crystal lattices, allowing crystal structure determination via Bragg's Law (2d sinθ = nλ).",
      "  4. Airport Luggage Screening: Detecting metallic contraband and explosives."
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.xrayApplication,
      caption: "Figure 12: X-ray generation in Coolidge tube and diagnostic bone radiography.",
      guide: "Bone absorbs X-rays strongly due to high atomic number (Calcium Z=20), producing high-contrast radiograph shadows."
    },
    importantPoints: [
      "Wavelength range: 1 nm to 10⁻³ nm (0.01 Å to 10 Å).",
      "Produced by bombarding heavy metal targets with high-speed electrons.",
      "Used in radiography, CT scans, airport security, and crystal structure analysis."
    ]
  },
  {
    heading: "16. Gamma Rays (λ < 10⁻³ nm, f > 10¹⁹ Hz)",
    paragraphs: [
      "• Origin & Production: Emitted from the NUCLEUS during radioactive nuclear decay (e.g. Cobalt-60, Radium-226) and nuclear reactions. When an excited daughter nucleus transitions to a lower nuclear energy state, it emits excess energy as a Gamma-ray photon.",
      "• Difference Between X-Rays and Gamma-Rays: X-rays originate from atomic electron transitions or electron decelerations OUTSIDE the nucleus. Gamma-rays originate exclusively INSIDE THE NUCLEUS. In overlapping wavelength regions, origin is the ONLY distinguishing factor!",
      "• Key Applications for NEET:",
      "  1. Cancer Radiotherapy: Focused beams of gamma rays (Cobalt-60 teletherapy, Gamma Knife) destroy malignant tumor cells.",
      "  2. Industrial Food Preservation: Gamma irradiation kills food-borne pathogens and inhibits sprouting in potatoes and onions without making food radioactive.",
      "  3. Nuclear Physics: Probing nuclear energy levels.",
      "• Hazards: Extremely high penetrating power; causes acute radiation sickness, severe genetic mutations, and cell death."
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.gammaApplication,
      caption: "Figure 13: Gamma-ray emission from nuclear transitions and Cobalt-60 cancer radiotherapy.",
      guide: "Crucial NEET distinction: X-rays are atomic in origin; Gamma rays are nuclear in origin."
    },
    importantPoints: [
      "Shortest wavelength (λ < 10⁻¹² m) and highest frequency (f > 10¹⁹ Hz).",
      "Highest photon energy (MeV range) and maximum penetrating capability.",
      "Produced exclusively by nuclear transitions and radioactive decay.",
      "Used in cancer radiotherapy (Cobalt-60) and sterilisation of packaged medical supplies."
    ]
  },
  {
    heading: "17. Polarisation: Conclusive Proof of Transverse Nature",
    paragraphs: [
      "Can longitudinal waves (like sound in air) be polarised? NO! In longitudinal waves, particle oscillations are parallel to the direction of propagation, leaving no possibility of asymmetric transverse orientation.",
      "• Transverse Proof: When unpolarised light passes through a polaroid sheet (Polariser P₁), only the electric field components parallel to the transmission pass-axis are transmitted. The transmitted intensity is I = I₀ / 2.",
      "When a second polaroid (Analyser P₂) is rotated at angle θ relative to P₁, the transmitted intensity follows Malus's Law: I = I₁ cos²θ.",
      "When θ = 90° (crossed polaroids), transmitted intensity drops to ZERO. This extinction proves beyond doubt that light waves are TRANSVERSE!",
      "• Brewster's Law: Unpolarised light reflected from a transparent medium of refractive index n at the Brewster angle i_p is completely plane-polarised: tan(i_p) = n. At this angle, reflected ray and refracted ray are mutually perpendicular (r + i_p = 90°)."
    ],
    visual: {
      type: 'svg',
      svgContent: emDiagrams.polarisationWave,
      caption: "Figure 14: Polarisation proving the transverse nature of electromagnetic waves.",
      guide: "Observe how crossed polaroids (90°) completely extinguish the transmitted beam."
    },
    importantPoints: [
      "Polarisation occurs ONLY in transverse waves (EM waves); longitudinal waves CANNOT be polarised.",
      "Malus's Law: I = I₁ cos²θ (where θ is the angle between transmission axes).",
      "Brewster's Law: tan(i_p) = n; reflected and refracted rays are at 90° to each other."
    ]
  }
];

export const emFormulaSheet = [
  {
    title: "Displacement Current",
    formula: "I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = C \\frac{dV}{dt}",
    variables: "I_d = displacement current (A), \\varepsilon_0 = 8.854 \\times 10^{-12} \\text{ F/m}, \\Phi_E = \\text{electric flux (V}\\cdot\\text{m)}, C = \\text{capacitance (F)}, V = \\text{voltage (V)}"
  },
  {
    title: "Generalised Ampère-Maxwell Law",
    formula: "\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 \\left( I_c + I_d \\right) = \\mu_0 \\left( I_c + \\varepsilon_0 \\frac{d\\Phi_E}{dt} \\right)",
    variables: "B = \\text{magnetic field (T)}, I_c = \\text{conduction current (A)}, I_d = \\text{displacement current (A)}, \\mu_0 = 4\\pi \\times 10^{-7} \\text{ T}\\cdot\\text{m/A}"
  },
  {
    title: "Speed of EM Wave in Vacuum",
    formula: "c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = f \\lambda = 2.998 \\times 10^8 \\text{ m/s}",
    variables: "c = \\text{speed of light in vacuum (m/s)}, f = \\text{frequency (Hz)}, \\lambda = \\text{wavelength (m)}"
  },
  {
    title: "Speed of EM Wave in a Medium",
    formula: "v = \\frac{1}{\\sqrt{\\mu \\varepsilon}} = \\frac{c}{\\sqrt{\\mu_r \\varepsilon_r}} = \\frac{c}{n}",
    variables: "v = \\text{speed in medium (m/s)}, n = \\sqrt{\\mu_r \\varepsilon_r} = \\text{refractive index}, \\varepsilon_r = \\text{dielectric constant}, \\mu_r = \\text{relative permeability}"
  },
  {
    title: "Electric & Magnetic Field Amplitude Ratio",
    formula: "\\frac{E_0}{B_0} = \\frac{E}{B} = c \\implies E_0 = c B_0",
    variables: "E_0 = \\text{peak electric field (V/m or N/C)}, B_0 = \\text{peak magnetic field (T)}, c = \\text{speed of light (m/s)}"
  },
  {
    title: "Instantaneous & Average Energy Density",
    formula: "u = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{B^2}{2\\mu_0}, \\quad \\langle u \\rangle = \\frac{1}{2}\\varepsilon_0 E_0^2 = \\frac{B_0^2}{2\\mu_0} = \\varepsilon_0 E_{\\text{rms}}^2",
    variables: "u = \\text{energy density (J/m}^3\\text{)}, E_{\\text{rms}} = E_0/\\sqrt{2}, B_{\\text{rms}} = B_0/\\sqrt{2}"
  },
  {
    title: "Intensity of EM Radiation",
    formula: "I = \\langle u \\rangle c = \\frac{1}{2}\\varepsilon_0 c E_0^2 = \\frac{E_0 B_0}{2\\mu_0} = \\frac{E_{\\text{rms}} B_{\\text{rms}}}{\\mu_0}",
    variables: "I = \\text{intensity (W/m}^2\\text{)}, \\langle u \\rangle = \\text{average energy density (J/m}^3\\text{)}"
  },
  {
    title: "Poynting Vector",
    formula: "\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B}), \\quad \\langle \\vec{S} \\rangle = I \\hat{v}",
    variables: "\\vec{S} = \\text{instantaneous energy flux density (W/m}^2\\text{)}, \\hat{v} = \\text{propagation unit vector}"
  },
  {
    title: "Radiation Momentum & Pressure (Complete Absorption)",
    formula: "p = \\frac{U}{c}, \\quad P_{\\text{rad}} = \\frac{I}{c}, \\quad F = \\frac{P_{\\text{power}}}{c}",
    variables: "p = \\text{momentum (kg}\\cdot\\text{m/s)}, U = \\text{total energy (J)}, P_{\\text{rad}} = \\text{pressure (N/m}^2\\text{)}, F = \\text{radiation force (N)}"
  },
  {
    title: "Radiation Momentum & Pressure (Complete Reflection)",
    formula: "p = \\frac{2U}{c}, \\quad P_{\\text{rad}} = \\frac{2I}{c}, \\quad F = \\frac{2 P_{\\text{power}}}{c}",
    variables: "Doubled due to momentum reversal upon elastic reflection"
  },
  {
    title: "Photon Energy & Wavelength Relation",
    formula: "E = hf = \\frac{hc}{\\lambda} = \\frac{12400}{\\lambda \\text{ (\\AA)}} \\text{ eV} = \\frac{1240}{\\lambda \\text{ (nm)}} \\text{ eV}",
    variables: "h = 6.626 \\times 10^{-34} \\text{ J}\\cdot\\text{s}, 1 \\text{ eV} = 1.6 \\times 10^{-19} \\text{ J}"
  },
  {
    title: "Wave Propagation Direction",
    formula: "\\hat{v} = \\frac{\\vec{E} \\times \\vec{B}}{|\\vec{E} \\times \\vec{B}|} = \\hat{E} \\times \\hat{B}",
    variables: "\\hat{v} = \\text{unit vector in direction of wave travel}"
  }
];

export const emCommonConfusions = [
  {
    misconception: "Displacement current is actual movement of electrons across the capacitor gap.",
    correction: "No physical charges flow across the insulating dielectric gap. Displacement current is purely the time rate of change of electric flux: I_d = ε₀ (dΦ_E/dt).",
    whyItMattersForNEET: "Frequently tested in Assertion-Reason questions."
  },
  {
    misconception: "The electric field carries more energy than the magnetic field in an EM wave because E₀ = c B₀.",
    correction: "Although E₀ is numerically larger than B₀ in SI units, the average energy densities are EXACTLY EQUAL: ⟨u_E⟩ = ⟨u_B⟩ = ¼ ε₀ E₀² (1:1 ratio).",
    whyItMattersForNEET: "One of the most frequent NEET traps (NEET 2021)."
  },
  {
    misconception: "Gamma rays travel faster than radio waves in vacuum because they have higher frequency.",
    correction: "ALL electromagnetic waves travel at the EXACT SAME speed in vacuum: c = 3.0 × 10⁸ m/s, regardless of frequency or wavelength.",
    whyItMattersForNEET: "Common conceptual trap in option elimination."
  },
  {
    misconception: "Sound waves can be polarised using high-grade optical polaroids.",
    correction: "Sound waves in air are LONGITUDINAL and CANNOT be polarised. Polarisation is exclusive to TRANSVERSE waves.",
    whyItMattersForNEET: "Standard question on wave optics and wave properties."
  },
  {
    misconception: "When light enters glass, its color changes because its wavelength decreases.",
    correction: "Color is determined solely by FREQUENCY, which remains strictly unchanged across media. The perceived color remains the same.",
    whyItMattersForNEET: "Critical ray optics & wave optics principle."
  },
  {
    misconception: "X-rays and Gamma rays differ in nature and speed.",
    correction: "Both are identical high-energy electromagnetic photons travelling at speed c. They differ ONLY in their origin: X-rays are atomic (electron transitions), Gamma rays are nuclear.",
    whyItMattersForNEET: "Repeatedly asked in AIPMT/NEET."
  },
  {
    misconception: "Uniformly moving charges (constant velocity) emit electromagnetic radiation.",
    correction: "Only ACCELERATED charges (or oscillating charges) radiate electromagnetic waves. Constant velocity produces steady, non-radiating fields.",
    whyItMattersForNEET: "Direct NCERT theoretical statement (NEET 2016)."
  },
  {
    misconception: "Cross product B × E gives the direction of wave propagation.",
    correction: "Direction of propagation is E × B. B × E points in the OPPOSITE direction (-v̂)!",
    whyItMattersForNEET: "Common sign error in vector questions."
  },
  {
    misconception: "Ordinary glass allows UV rays to pass through easily.",
    correction: "Ordinary window glass STRONGLY ABSORBS ultraviolet radiation. Welder masks use ordinary glass to block harmful UV arc radiation.",
    whyItMattersForNEET: "Direct NCERT practical application."
  },
  {
    misconception: "Infrared radiation is invisible, so it has no optical energy.",
    correction: "Infrared is genuine electromagnetic radiation carrying energy E = hf, heating water molecules via vibrational resonance.",
    whyItMattersForNEET: "Core greenhouse & thermal radiation concept."
  }
];

export const emQuickRevisionPoints = [
  "1. Displacement current I_d = ε₀(dΦ_E/dt) ensures continuity of total current: I_c (in wire) = I_d (in capacitor gap).",
  "2. Generalised Ampère-Maxwell Law: ∮ B · dl = μ₀(I_c + ε₀ dΦ_E/dt).",
  "3. Speed of EM wave in vacuum: c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s; in medium: v = c/√(μ_r ε_r) = c/n.",
  "4. Transverse Wave Property: E ⟂ B ⟂ v̂. Direction of wave travel is given by Ê × B̂.",
  "5. Field Amplitudes: E₀ = c B₀. Phase difference between E and B in vacuum is ZERO (Δφ = 0).",
  "6. Energy Equipartition: ⟨u_E⟩ = ⟨u_B⟩ = ¼ ε₀ E₀². Ratio of electric to magnetic energy is strictly 1:1.",
  "7. Total Energy Density: ⟨u⟩ = ½ ε₀ E₀² = B₀²/(2μ₀). Intensity I = ⟨u⟩c = ½ ε₀ c E₀².",
  "8. Radiation Momentum: p = U/c (complete absorption), p = 2U/c (complete reflection).",
  "9. Radiation Pressure: P_rad = I/c (absorption), P_rad = 2I/c (reflection).",
  "10. Source of EM Waves: Accelerated or oscillating electric charges (e.g. LC oscillator circuit).",
  "11. Spectrum Order (Increasing f & E, Decreasing λ): Radio < Microwave < Infrared < Visible < UV < X-rays < Gamma rays.",
  "12. Visible Light Range: 400 nm (Violet) to 700 nm (Red). VIBGYOR.",
  "13. Microwaves: Produced by Klystron/Magnetron/Gunn diode; used in radar & microwave ovens (2.45 GHz resonant water heating).",
  "14. Infrared ('Heat Waves'): Emitted by hot bodies; causes greenhouse effect; used in TV remotes and haze photography.",
  "15. Ultraviolet: Absorbed by stratospheric ozone; used in water purification (UV-C 254 nm) & LASIK; blocked by ordinary glass.",
  "16. X-Rays: Produced by Coolidge tube (fast electrons on Tungsten); used in bone radiography, CT scan, crystallography.",
  "17. Gamma Rays: Nuclear origin; highest frequency, minimum wavelength, highest penetrating power; used in cancer radiotherapy (Co-60).",
  "18. Polarisation: Conclusively proves the TRANSVERSE nature of EM waves. Longitudinal waves cannot be polarised."
];

export const emConceptualQuestions = [
  {
    question: "Q1. Why does a charging capacitor exhibit a magnetic field in the region between its plates where no actual electrons flow?",
    answer: "Between the plates of a charging capacitor, the electric field is continuously increasing with time (dE/dt ≠ 0), creating a time-varying electric flux (dΦ_E/dt ≠ 0). According to the Ampère-Maxwell Law, this changing electric flux produces a Displacement Current I_d = ε₀(dΦ_E/dt), which acts as a genuine source of a magnetic field exactly like an ordinary conduction current."
  },
  {
    question: "Q2. Why is the ratio of electric energy density to magnetic energy density in a plane EM wave equal to 1, even though E₀ = c B₀?",
    answer: "Electric energy density is ⟨u_E⟩ = ¼ ε₀ E₀². Magnetic energy density is ⟨u_B⟩ = B₀²/(4μ₀). Substituting B₀ = E₀/c and c² = 1/(μ₀ε₀) gives ⟨u_B⟩ = (E₀/c)²/(4μ₀) = (E₀² · μ₀ε₀)/(4μ₀) = ¼ ε₀ E₀² = ⟨u_E⟩. Thus, despite the numerical difference in field units, their energy storage is exactly 50% electric and 50% magnetic (ratio 1:1)."
  },
  {
    question: "Q3. Why are microwave ovens designed to operate specifically around 2.45 GHz rather than at visible or ultraviolet frequencies?",
    answer: "Water is a polar molecule with a permanent electric dipole moment. The frequency 2.45 GHz matches the natural rotational relaxation frequency of liquid water molecules. At this resonant frequency, the oscillating electric field efficiently exerts torque on the dipoles, causing intense rotation. Friction among rotating molecules converts this energy directly into heat throughout the food."
  },
  {
    question: "Q4. Why does the stratospheric ozone layer absorb UV rays but allow visible light to reach the Earth's surface?",
    answer: "The photon energy of UV radiation (h·f ≥ 4 eV) matches the molecular bond dissociation energy required to break O₃ molecules into O₂ and O (photodissociation). Visible light photons (1.8 to 3.1 eV) lack sufficient energy to break ozone bonds, so visible light passes through the atmosphere unabsorbed."
  },
  {
    question: "Q5. If all EM waves travel at speed c in vacuum, why does a glass prism separate white light into a rainbow spectrum?",
    answer: "In a material medium like glass, the speed is v = c/n, where refractive index n depends on frequency (Cauchy's dispersion formula: n(λ) = A + B/λ²). Violet light has a shorter wavelength and experiences a higher refractive index than red light (n_violet > n_red). Therefore, violet travels slower, bends (deviates) more, and separates from red."
  },
  {
    question: "Q6. Why can transverse waves be polarised while longitudinal sound waves cannot?",
    answer: "Transverse waves have oscillations perpendicular to the direction of wave travel, creating an infinite number of possible vibration planes in 3D space. A polariser restricts these oscillations to a single plane. In longitudinal waves, vibrations occur strictly parallel to the direction of propagation, so there is only one direction of vibration which cannot be filtered or rotated."
  },
  {
    question: "Q7. Why do welders wear goggles with ordinary glass faceplates to protect their eyes from arc radiation?",
    answer: "Welding arcs produce intense Ultraviolet (UV) radiation along with visible light. Ordinary silicate glass is completely opaque to UV radiation (it absorbs UV photons), protecting the welder's retinas and corneas from painful photokeratitis ('arc eye') and cataracts."
  },
  {
    question: "Q8. Why is the electric field called the 'optical vector' or 'light vector'?",
    answer: "When light interacts with matter (e.g. photographic film, retinal rod/cone cells, photoelectric emitters), the force on electrons is F = q(E + v × B). Because the speed of atomic electrons is much less than c (v ≪ c), the magnetic Lorentz force q(v × B) is negligible compared to the electric force qE. Hence, all chemical, optical, and visual effects are governed almost entirely by the electric field vector."
  }
];
