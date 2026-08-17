// Comprehensive Terms, Deep First-Principles Explanations, Comparison Tables, Conceptual Q&A, and Revision for Dual Nature

export const DUAL_NATURE_CONSTANTS = {
  planckConstant: "h = 6.626 × 10⁻³⁴ J·s = 4.136 × 10⁻¹⁵ eV·s",
  speedOfLight: "c = 3.00 × 10⁸ m/s",
  elementaryCharge: "e = 1.602 × 10⁻¹⁹ C",
  electronMass: "m_e = 9.109 × 10⁻³¹ kg",
  protonMass: "m_p = 1.673 × 10⁻²⁷ kg",
  neutronMass: "m_n = 1.675 × 10⁻²⁷ kg",
  alphaMass: "m_α ≈ 4 × m_p = 6.644 × 10⁻²⁷ kg",
  eVtoJoule: "1 eV = 1.602 × 10⁻¹⁹ J",
  hcShortcut: "hc ≈ 12400 eV·Å = 1240 eV·nm = 1.986 × 10⁻²⁵ J·m",
  electronDeBroglieShortcut: "λ_e = 12.27 / √V  Å = 1.227 / √V  nm"
};

export const DUAL_NATURE_IMPORTANT_TERMS = [
  {
    term: "Photoelectric Effect",
    symbol: "PEE",
    definition: "The phenomenon of instantaneous emission of electrons from a clean metal surface when electromagnetic radiation of suitable frequency (greater than or equal to threshold frequency ν₀) falls on it.",
    neetNote: "First discovered by Heinrich Hertz (1887); systematically studied by Hallwachs and Lenard (1900-1902); theoretically explained by Albert Einstein (1905, Nobel Prize 1921)."
  },
  {
    term: "Photoelectrons",
    symbol: "e⁻",
    definition: "Electrons ejected from a photosensitive metal surface during the photoelectric effect. In all physical and electrical properties (mass, charge, spin), photoelectrons are identical to ordinary electrons.",
    neetNote: "The term 'photoelectron' only designates the mode of emission (induced by light photons), not a different type of subatomic particle."
  },
  {
    term: "Photocurrent",
    symbol: "I",
    definition: "The electric current produced in a photoelectric cell or evacuated discharge tube by the flow of emitted photoelectrons moving from the cathode (emitter) to the anode (collector). Measured in microamperes (μA).",
    neetNote: "Photocurrent is directly proportional to incident light intensity for a given frequency above threshold, because intensity determines the number of photons arriving per unit time."
  },
  {
    term: "Threshold Frequency",
    symbol: "ν₀",
    definition: "The minimum frequency of incident electromagnetic radiation required to just liberate an electron from a given metal surface with zero kinetic energy.",
    neetNote: "If ν < ν₀, no photoemission occurs regardless of how intense the light is or how long it illuminates the surface. ν₀ is a characteristic property of the metal."
  },
  {
    term: "Threshold Wavelength (Cut-off Wavelength)",
    symbol: "λ₀",
    definition: "The maximum wavelength of incident radiation capable of ejecting photoelectrons from a given metal surface, given by λ₀ = c / ν₀ = hc / φ₀.",
    neetNote: "NEET TRAP: While frequency must be GREATER than threshold (ν ≥ ν₀), wavelength must be LESS than or equal to threshold (λ ≤ λ₀) for photoemission to occur."
  },
  {
    term: "Work Function",
    symbol: "φ₀ or W₀",
    definition: "The minimum energy required to remove the most loosely bound electron from the surface layer of a metal against the attractive forces of the positive ion lattice. Related to threshold frequency by φ₀ = hν₀ = hc / λ₀.",
    neetNote: "Measured in electron-volts (eV). Lowest for Caesium (Cs ≈ 2.14 eV) and alkali metals; highest for Platinum (Pt ≈ 5.65 eV). Work function depends purely on the nature of the metal and surface cleanliness."
  },
  {
    term: "Photon",
    symbol: "γ",
    definition: "A localized quantum packet (quanta) of electromagnetic energy that travels at the speed of light in vacuum (c) and possesses discrete energy E = hν and momentum p = h/λ = E/c.",
    neetNote: "Photons are electrically neutral, have zero rest mass (m₀ = 0), and do not interact with external static electric or magnetic fields."
  },
  {
    term: "Stopping Potential (Cut-off Potential)",
    symbol: "V₀",
    definition: "The minimum retarding (negative) potential applied to the collector plate relative to the emitter plate that completely stops the most energetic photoelectrons, reducing the photocurrent to exactly zero.",
    neetNote: "Directly measures the maximum kinetic energy: K_max = e V₀. Stopping potential depends linearly on incident frequency (V₀ = (h/e)ν - φ₀/e) and is strictly independent of incident light intensity."
  },
  {
    term: "Saturation Current",
    symbol: "I_sat",
    definition: "The maximum constant photocurrent obtained when the accelerating positive collector potential is sufficiently high so that all photoelectrons emitted by the cathode per second are successfully collected.",
    neetNote: "I_sat is directly proportional to incident intensity. Increasing collector potential beyond this saturation threshold produces no further increase in current."
  },
  {
    term: "de Broglie Hypothesis",
    symbol: "λ = h/p",
    definition: "The physical hypothesis proposed by Louis de Broglie (1924) stating that material particles (such as electrons, protons, atoms) in motion exhibit wave-like properties with a characteristic wavelength λ = h/p = h/(mv).",
    neetNote: "Nature loves symmetry: since radiation exhibits dual (wave and particle) properties, matter must also possess dual wave-particle character."
  },
  {
    term: "Matter Wave (de Broglie Wave)",
    symbol: "Ψ (Matter Wave)",
    definition: "The wave associated with a moving material body representing the probability amplitude of finding the particle in space and time.",
    neetNote: "Matter waves are neither electromagnetic waves nor mechanical waves. They require no medium to propagate and are associated with neutral as well as charged moving particles."
  },
  {
    term: "Davisson–Germer Experiment",
    symbol: "D-G Exp",
    definition: "A landmark historical experiment (1927) that provided the first direct experimental proof of the wave nature of electrons by demonstrating diffraction of an accelerated electron beam from a nickel crystal lattice.",
    neetNote: "Peak constructive diffraction observed at accelerating voltage V = 54 V and scattering angle θ = 50° (glancing angle ϕ = 65°), yielding λ_exp = 1.65 Å, matching de Broglie's theoretical prediction 1.67 Å."
  }
];

export const DUAL_NATURE_COMPARISON_TABLES = [
  // Table 1: Intensity vs Frequency Effects
  {
    title: "Table 1: Effect of Intensity vs Frequency in Photoelectric Effect",
    headers: ["Parameter Changed", "Effect on Photon Energy (E=hν)", "Effect on Number of Photons/sec", "Effect on Max KE (K_max) & V₀", "Effect on Photocurrent & I_sat"],
    rows: [
      ["Increase Intensity (Fixed ν > ν₀)", "No Change (E stays hν)", "Increases proportionally", "NO CHANGE (V₀ constant)", "Increases proportionally"],
      ["Decrease Intensity (Fixed ν > ν₀)", "No Change (E stays hν)", "Decreases proportionally", "NO CHANGE (V₀ constant)", "Decreases proportionally"],
      ["Increase Frequency (Fixed Intensity, ν > ν₀)", "Increases (E = hν ↑)", "Decreases (N = Total Energy / hν)", "INCREASES linearly (V₀ ↑)", "Slightly decreases or constant"],
      ["Decrease Frequency (Below ν₀)", "Decreases (E < φ₀)", "Varies with intensity", "ZERO (No emission occurs)", "ZERO (Photocurrent = 0)"]
    ]
  },

  // Table 2: Wave Nature vs Particle Nature of Light
  {
    title: "Table 2: Wave Nature vs Particle Nature of Electromagnetic Radiation",
    headers: ["Phenomenon / Characteristic", "Wave Nature of Light (Classical EM Theory)", "Particle Nature of Light (Quantum Photon Theory)"],
    rows: [
      ["Primary Phenomena Explained", "Interference, Diffraction, Polarisation", "Photoelectric Effect, Compton Effect, Blackbody Radiation"],
      ["Energy Distribution", "Continuous spreading over expanding wavefront", "Concentrated in discrete, localized packets (quanta / photons)"],
      ["Emission Mechanism", "Continuous wave absorption by electrons over time", "Instantaneous 1-to-1 collision between one photon & one electron"],
      ["Energy Dependence", "Energy ∝ Amplitude² ∝ Intensity", "Energy ∝ Frequency (E = hν); Intensity = Photon flux"],
      ["Speed in Vacuum", "c = 3 × 10⁸ m/s (c = νλ)", "c = 3 × 10⁸ m/s for all individual photons"]
    ]
  },

  // Table 3: Photon vs Classical Wave Description
  {
    title: "Table 3: Photon Picture vs Classical Wave Picture",
    headers: ["Property", "Classical Wave Picture", "Einstein Photon Picture"],
    rows: [
      ["Entity", "Continuous spatial oscillation of electric and magnetic fields", "Discrete particle-like quantum of energy traveling at speed c"],
      ["Energy of Single Entity", "Continuous variable (can have any infinitesimal value)", "Quantized: E = hν = hc/λ"],
      ["Rest Mass", "Not applicable (wave disturbance)", "Exactly zero (m₀ = 0)"],
      ["Linear Momentum", "Radiation pressure p = U/c (volumetric)", "Individual packet momentum p = h/λ = E/c"],
      ["Charge", "Zero (electromagnetic field)", "Zero (electrically neutral, unbent by E and B fields)"],
      ["Collision Behavior", "Wave superposition and interference", "Elastic collisions obeying conservation of energy & linear momentum"]
    ]
  },

  // Table 4: Threshold Frequency vs Threshold Wavelength
  {
    title: "Table 4: Threshold Frequency (ν₀) vs Threshold Wavelength (λ₀)",
    headers: ["Attribute", "Threshold Frequency (ν₀)", "Threshold Wavelength (λ₀)"],
    rows: [
      ["Definition", "MINIMUM frequency for photoelectric emission", "MAXIMUM wavelength for photoelectric emission"],
      ["Formula", "ν₀ = φ₀ / h", "λ₀ = c / ν₀ = hc / φ₀"],
      ["Condition for Emission", "Incident frequency ν ≥ ν₀", "Incident wavelength λ ≤ λ₀"],
      ["Relation with Work Function", "Directly proportional (φ₀ ∝ ν₀)", "Inversely proportional (φ₀ ∝ 1/λ₀)"],
      ["Higher Value Implies", "Metal binds electrons more tightly (higher work function)", "Metal binds electrons more loosely (lower work function)"]
    ]
  },

  // Table 5: Saturation Current vs Stopping Potential
  {
    title: "Table 5: Saturation Current (I_sat) vs Stopping Potential (V₀)",
    headers: ["Feature", "Saturation Current (I_sat)", "Stopping Potential (V₀)"],
    rows: [
      ["What it Measures", "Total number of photoelectrons emitted and collected per second", "Maximum kinetic energy of the most energetic photoelectrons (K_max = eV₀)"],
      ["Determined Exclusively By", "Intensity of incident light (photon flux)", "Frequency of incident light and work function of metal"],
      ["Effect of Increasing Intensity", "Increases linearly (I_sat ∝ Intensity)", "NO EFFECT (V₀ remains completely unchanged)"],
      ["Effect of Increasing Frequency", "Almost unchanged (for constant energy flux)", "Increases linearly: V₀ = (h/e)ν - (φ₀/e)"],
      ["Circuit Polarity", "Positive (accelerating) collector potential", "Negative (retarding) collector potential"]
    ]
  },

  // Table 6: Photon Wavelength vs de Broglie Wavelength
  {
    title: "Table 6: Photon Wavelength vs de Broglie Wavelength of Material Particle",
    headers: ["Parameter", "Photon (Radiation Quanta)", "Material Particle (e⁻, Proton, Atom)"],
    rows: [
      ["Rest Mass", "m₀ = 0", "m > 0 (finite rest mass)"],
      ["Velocity", "v = c (always speed of light in vacuum)", "v < c (particle velocity)"],
      ["Energy Formula", "E = hν = pc", "Kinetic Energy K = p²/(2m) (non-relativistic)"],
      ["Wavelength Formula", "λ = c/ν = hc/E = h/p", "λ = h/p = h/(mv) = h/√(2mK)"],
      ["Wavelength vs Energy", "λ ∝ 1/E", "λ ∝ 1/√K"],
      ["Accelerated through V", "Not applicable (neutral, speed fixed at c)", "λ = h/√(2mqV); for electron: λ = 12.27/√V Å"]
    ]
  },

  // Table 7: Photoelectric Effect vs Electron Diffraction
  {
    title: "Table 7: Photoelectric Effect vs Electron Diffraction (The Dual Complementarity)",
    headers: ["Aspect", "Photoelectric Effect", "Davisson–Germer Electron Diffraction"],
    rows: [
      ["Primary System", "Electromagnetic Radiation (Light) incident on metal", "Material Particles (Electrons) incident on crystal"],
      ["Nature Revealed", "PARTICLE nature of Light (Photons)", "WAVE nature of Matter (Matter Waves)"],
      ["Key Equation", "Einstein Equation: hν = φ₀ + K_max", "de Broglie / Bragg: λ = h/p = 2d sin ϕ"],
      ["Historical Significance", "Disproved classical wave theory of light (1905)", "Confirmed wave hypothesis for material particles (1927)"],
      ["Nobel Prize", "Awarded to Albert Einstein (1921)", "Awarded to C.J. Davisson & G.P. Thomson (1937)"]
    ]
  },

  // Table 8: Classical Predictions vs Experimental Observations
  {
    title: "Table 8: Classical Wave Predictions vs Photoelectric Experimental Facts",
    headers: ["Characteristic", "Classical Wave Theory Prediction", "Actual Experimental Observation (Quantum Fact)", "Why Wave Theory Failed"],
    rows: [
      ["1. Threshold Frequency", "Any frequency should cause emission if light is bright enough", "Emission strictly requires ν ≥ ν₀; below ν₀, ZERO emission occurs", "Energy is absorbed in discrete quanta (hν), not continuously accumulated over the whole wavefront"],
      ["2. Maximum Kinetic Energy", "K_max should increase with wave amplitude (intensity)", "K_max is independent of intensity; depends linearly on frequency ν", "Intensity only increases the number of photons, not the energy of individual photons"],
      ["3. Time Delay", "Significant time lag (minutes/hours) needed for electron to absorb energy from wave", "Emission is instantaneous (< 10⁻⁹ seconds)", "Energy transfer is an instantaneous 1-to-1 collision between one photon and one electron"],
      ["4. Stopping Potential", "Stopping potential should increase with intense light", "Stopping potential is identical for all intensities at fixed frequency", "Stopping potential depends purely on individual photon energy minus work function"]
    ]
  }
];

export const DUAL_NATURE_CONCEPTUAL_QA = [
  {
    question: "What does 'dual nature' mean in modern physics?",
    answer: "Dual nature means that entities in the physical universe (both electromagnetic radiation and material particles) do not behave exclusively as classical waves or classical particles. Instead, they exhibit wave-like characteristics during propagation and interference/diffraction, and particle-like characteristics during localized emission, absorption, and collisions. These are complementary descriptions of a single underlying reality."
  },
  {
    question: "Why does light behave like a wave in some experiments and like a particle in others?",
    answer: "When light interacts with macroscopic apertures or slits of dimensions comparable to its wavelength (such as double slits or diffraction gratings), the collective phase of the wave disturbance dominates, producing interference and diffraction. However, when light interacts with microscopic entities like individual atomic electrons, energy and momentum are exchanged in localized discrete packets (photons, E = hν), producing particle-like effects such as the photoelectric effect and Compton scattering."
  },
  {
    question: "Why can't we observe matter waves for everyday macroscopic objects (like a moving cricket ball)?",
    answer: "Because Planck's constant h is extremely small (6.626 × 10⁻³⁴ J·s). For a cricket ball of mass m = 0.15 kg moving at v = 30 m/s, the de Broglie wavelength is λ = h/(mv) = 6.626×10⁻³⁴ / (0.15 × 30) ≈ 1.47 × 10⁻³⁴ m. This wavelength is unimaginably smaller than any atomic nucleus (~10⁻¹⁵ m), making wave phenomena like diffraction physically impossible to detect. For microscopic particles like electrons (m ~ 10⁻³¹ kg), λ is around 10⁻¹⁰ m (Ångströms), which matches crystal lattice spacings and produces readily observable diffraction."
  },
  {
    question: "Why is photoelectric emission essentially instantaneous?",
    answer: "Because the photoelectric effect is an elementary, localized, one-to-one elastic-like interaction between a single photon and a single bound electron. The entire quantum of energy hν is transferred to the electron instantaneously in a collision lasting less than 10⁻⁹ seconds (1 nanosecond), rather than through slow, continuous wave absorption."
  },
  {
    question: "What happens if incident light frequency is below threshold frequency (ν < ν₀) but its intensity is made extremely large?",
    answer: "NO photoelectric emission will occur, even if an ultra-intense laser is used. Photoemission is a one-photon/one-electron interaction. If each individual photon has energy E = hν < φ₀, no single photon has enough energy to overcome the surface work function barrier. Increasing intensity merely delivers more insufficient-energy photons per second, none of which can liberate an electron."
  },
  {
    question: "Why does stopping potential depend on frequency, but saturation current depends on intensity?",
    answer: "Stopping potential V₀ measures the maximum kinetic energy of ejected electrons: e V₀ = hν - φ₀. Since photon energy depends solely on frequency (E = hν), V₀ increases with frequency. Conversely, intensity is the total energy per unit area per second, which for fixed frequency corresponds to the number of photons arriving per second (photon flux). More photons eject more electrons per second, resulting in a higher saturation current."
  },
  {
    question: "Why do emitted photoelectrons possess a continuous range of kinetic energies from 0 to K_max?",
    answer: "While all incident photons have identical energy hν, electrons inside the metal occupy different energy levels within the conduction band and lie at varying depths from the surface. Electrons situated right at the surface escape with minimum energy loss (work function φ₀) and emerge with maximum kinetic energy K_max = hν - φ₀. Deeper electrons undergo random collisions with the positive lattice ions on their way to the surface, dissipating variable amounts of energy as heat, and thus emerge with kinetic energies less than K_max (0 ≤ K ≤ K_max)."
  },
  {
    question: "What is the physical significance of the slope and intercepts of the stopping potential (V₀) vs frequency (ν) graph?",
    answer: "From Einstein's equation, V₀ = (h/e)ν - (φ₀/e):\n1. Slope = h/e (a universal constant equal to Planck's constant divided by electron charge; identical for ALL metals).\n2. X-intercept (V₀ = 0) gives the threshold frequency ν₀ = φ₀/h.\n3. Y-intercept (ν = 0) gives -φ₀/e (the negative of the work function in electron-volts)."
  },
  {
    question: "What did the Davisson–Germer experiment prove, and how did it do so?",
    answer: "The Davisson–Germer experiment proved the wave nature of electrons (matter waves). It directed an accelerated beam of electrons (at 54 V) onto a nickel crystal target and measured scattered electron intensity at various angles. A sharp diffraction maximum was discovered at a scattering angle θ = 50° (glancing angle ϕ = 65°). Applying Bragg's law for crystal diffraction (2d sin ϕ = λ) yielded an experimental wavelength of 1.65 Å, which perfectly agreed with de Broglie's theoretical formula λ = h/√(2meV) = 12.27/√54 = 1.67 Å."
  },
  {
    question: "If the frequency of incident radiation is doubled, will the maximum kinetic energy of photoelectrons also double?",
    answer: "NO. K_max will become MORE THAN DOUBLE. Initial: K₁ = hν - φ₀. When frequency is doubled (2ν): K₂ = h(2ν) - φ₀ = 2(hν - φ₀) + φ₀ = 2K₁ + φ₀. Since the work function φ₀ is positive, K₂ > 2K₁."
  }
];

export const DUAL_NATURE_5_MIN_REVISION = [
  "1. Photon Fundamentals: Quanta of EM radiation. Energy E = hν = hc/λ. Momentum p = h/λ = E/c. Rest mass m₀ = 0. Speed = c = 3×10⁸ m/s in vacuum.",
  "2. Photoelectric Effect: Ejection of electrons when light of frequency ν ≥ ν₀ strikes a photosensitive metal. Instantaneous (< 10⁻⁹ s).",
  "3. Threshold Frequency & Wavelength: Minimum frequency ν₀ = φ₀/h. Maximum wavelength λ₀ = hc/φ₀. Emission occurs ONLY when ν ≥ ν₀ (or λ ≤ λ₀).",
  "4. Work Function φ₀: Minimum energy to liberate an electron. φ₀ = hν₀ = hc/λ₀. Measured in eV (1 eV = 1.602 × 10⁻¹⁹ J). Lowest for Cs (2.14 eV), highest for Pt (5.65 eV).",
  "5. Einstein's Photoelectric Equation: Energy conservation: hν = φ₀ + K_max ⟹ K_max = hν - φ₀ = hc(1/λ - 1/λ₀) = ½ m v_max².",
  "6. Stopping Potential V₀: Negative collector potential reducing photocurrent to zero. K_max = eV₀ ⟹ V₀ = (h/e)ν - (φ₀/e). Independent of intensity!",
  "7. Intensity vs Frequency: Intensity ∝ Number of photons/sec ∝ Photocurrent ∝ Saturation current (V₀ & K_max UNCHANGED). Frequency determines Photon Energy ∝ K_max ∝ V₀.",
  "8. Stopping Potential vs Frequency Graph: Straight line with universal slope = h/e for all metals. X-intercept = ν₀; Y-intercept = -φ₀/e.",
  "9. Classical Wave Theory Failure: Failed to explain existence of threshold frequency, instantaneous emission, and dependence of K_max on frequency rather than intensity.",
  "10. de Broglie Hypothesis: Moving particle of mass m, velocity v has matter wave wavelength λ = h/p = h/(mv).",
  "11. de Broglie Forms: In terms of Kinetic Energy: λ = h/√(2mK). For particle of charge q accelerated through potential V: λ = h/√(2mqV).",
  "12. Electron Golden Shortcut: For an electron accelerated through V volts: λ = 12.27 / √V  Å = 1.227 / √V  nm.",
  "13. Thermal Neutrons: Thermal equilibrium at temperature T: K = 3/2 kT ⟹ λ = h / √(3mkT).",
  "14. Davisson-Germer Experiment: Verified electron matter waves using Nickel crystal diffraction. Peak at V = 54 V, θ = 50° ⟹ λ = 1.65 Å (theory: 1.67 Å).",
  "15. Wave-Particle Duality: Light acts as wave in propagation (interference/diffraction) and particle in interaction (photoelectric/Compton). Matter acts as particle in mechanics and wave in diffraction."
];
