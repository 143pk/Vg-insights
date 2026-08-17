export const CHEMICAL_KINETICS_TERMS_AND_CONCEPTS = {
  terms: [
    {
      term: "Chemical Kinetics",
      definition: "The branch of chemistry that studies reaction rates, reaction mechanisms, and the influence of temperature, pressure, concentration, and catalysts on reaction speeds.",
      neetNote: "Thermodynamics predicts spontaneity (ΔG < 0), while Kinetics determines feasibility in real time (reaction rate and activation energy)."
    },
    {
      term: "Rate of Reaction",
      symbol: "Rate = -Δ[R]/Δt = +Δ[P]/Δt",
      unit: "mol L⁻¹ s⁻¹ (or atm s⁻¹ for gaseous reactions)",
      definition: "The change in molar concentration of any reactant or product per unit time. Stoichiometrically normalized for a general reaction aA + bB → cC + dD: Rate = -(1/a) d[A]/dt = -(1/b) d[B]/dt = +(1/c) d[C]/dt = +(1/d) d[D]/dt.",
      neetNote: "Rate of reaction is always a positive quantity. Rate of disappearance of A is -d[A]/dt, while Rate of Reaction is -(1/a) d[A]/dt."
    },
    {
      term: "Rate Law / Rate Equation",
      symbol: "Rate = k [A]^x [B]^y",
      definition: "An experimentally determined algebraic expression that represents the reaction rate in terms of molar concentrations of reactants raised to powers (orders).",
      neetNote: "Exponents x and y can ONLY be determined by experiment; they are generally NOT equal to the stoichiometric coefficients in balanced equations for complex reactions."
    },
    {
      term: "Rate Constant / Specific Reaction Rate (k)",
      symbol: "k",
      unit: "(mol L⁻¹)^(1-n) s⁻¹ (where n is overall reaction order)",
      definition: "The proportionality constant in the rate law expression, representing the reaction rate when the concentration of each reactant is unity (1 mol L⁻¹).",
      neetNote: "k depends ONLY on temperature and catalyst. It is strictly INDEPENDENT of reactant concentrations."
    },
    {
      term: "Order of Reaction",
      symbol: "n = x + y",
      definition: "The sum of the powers of the concentration terms of reactants in the experimental rate law.",
      neetNote: "Order is an experimental quantity. It can be zero, positive integer (1, 2, 3), fractional (0.5, 1.5), or negative. It applies to overall reactions."
    },
    {
      term: "Molecularity of a Reaction",
      definition: "The total number of reacting atoms, ions, or molecules that collide simultaneously in an elementary (single-step) chemical reaction to bring about product formation.",
      neetNote: "Molecularity is a theoretical integer property (1 = unimolecular, 2 = bimolecular, 3 = trimolecular). Molecularity > 3 is practically zero due to simultaneous collision rarity. Molecularity CANNOT be zero, fractional, or negative, and has no meaning for complex multi-step reactions."
    },
    {
      term: "Elementary vs Complex Reactions",
      definition: "An elementary reaction completes in a single step with no intermediate (Order = Molecularity). A complex reaction occurs via a sequence of elementary steps (mechanism).",
      neetNote: "In a complex reaction, the SLOWEST step is the Rate Determining Step (RDS). Intermediate species do not appear in the overall rate law."
    },
    {
      term: "Zero-Order Reaction",
      symbol: "Rate = k [A]⁰ = k",
      unit: "k in mol L⁻¹ s⁻¹",
      definition: "A reaction whose rate is completely independent of reactant concentration. Integrated form: [A]_t = [A]₀ - kt. Half-life: t₁/₂ = [A]₀ / (2k). Completion time: t_100% = [A]₀ / k.",
      neetNote: "Classic NCERT examples: Decomposition of NH₃ on hot Pt surface at high pressure; decomposition of HI on gold; photochemical H₂ + Cl₂ over water."
    },
    {
      term: "First-Order Reaction",
      symbol: "Rate = k [A]¹",
      unit: "k in s⁻¹ (or min⁻¹, hr⁻¹)",
      definition: "A reaction whose rate is directly proportional to the first power of reactant concentration. Integrated form: k = (2.303/t) log₁₀([A]₀/[A]_t). Half-life: t₁/₂ = 0.693/k.",
      neetNote: "Half-life of a first-order reaction is completely independent of initial concentration. All natural and artificial radioactive decay processes follow first-order kinetics."
    },
    {
      term: "Pseudo-First-Order Reaction",
      definition: "A bimolecular reaction that behaves as first-order because one of the reactants is present in large excess, keeping its concentration practically constant.",
      neetNote: "Examples: Acid-catalyzed hydrolysis of ethyl acetate (CH₃COOC₂H₅ + H₂O → CH₃COOH + C₂H₅OH) and inversion of cane sugar (sucrose + H₂O → glucose + fructose)."
    },
    {
      term: "Arrhenius Equation",
      symbol: "k = A e^(-Ea / RT)",
      definition: "Mathematical equation relating rate constant k to absolute temperature T, activation energy Ea, and frequency factor A.",
      neetNote: "Logarithmic forms: ln k = ln A - Ea/RT; log₁₀ k = log₁₀ A - Ea/(2.303 RT). Slope of log₁₀ k vs 1/T is -Ea/(2.303 R)."
    },
    {
      term: "Activation Energy (Ea)",
      symbol: "Ea = E_threshold - E_reactants",
      unit: "J mol⁻¹ or kJ mol⁻¹",
      definition: "The minimum extra amount of kinetic energy that colliding reactant molecules must absorb to reach the threshold energy barrier and form the activated complex.",
      neetNote: "Higher Ea implies a slower reaction. A catalyst lowers Ea for both forward and reverse reactions by the exact same amount."
    },
    {
      term: "Collision Theory of Chemical Reactions",
      definition: "Theory stating that for a reaction to occur, reactant molecules must collide with (1) energy ≥ activation energy, and (2) proper spatial orientation (steric factor P). Rate = P × Z_AB × e^(-Ea/RT).",
      neetNote: "Collision frequency Z increases by only 1-2% for a 10 °C rise, but the fraction of molecules with energy ≥ Ea roughly doubles (Boltzmann factor e^(-Ea/RT))."
    }
  ]
};
