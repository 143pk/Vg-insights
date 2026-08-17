import { DetailedTopicContent } from '../../types/neet';

export const bioNeuronImpulseConductionDetails: DetailedTopicContent = {
  topicId: "bio-neuron-impulse-conduction",
  topicName: "Neuron, Nerve Impulse Conduction & Synaptic Transmission",
  subject: "Biology",
  class: "Class 11",
  classification: "Human Physiology",
  chapter: "Neural Control and Coordination",

  whatIsThisTopic: "Structural and functional anatomy of neurons and neuroglia, resting membrane potential (-70 mV), generation and propagation of action potential (+30 mV), saltatory conduction in myelinated axons, electrical vs chemical synapses, step-by-step neurotransmitter transmission across synaptic clefts, and reflex arc physiology.",

  basicIdea: [
    "Neural Control is a rapid, point-to-point systemic coordination mechanism mediated by electrochemical nerve impulses, contrasting with slower, blood-borne hormonal regulation.",
    "The Human Nervous System is anatomically organized into Central Nervous System (CNS: Brain & Spinal Cord) and Peripheral Nervous System (PNS: Cranial & Spinal Nerves). PNS is further subdivided into Somatic Nervous System (skeletal muscle) and Autonomic Nervous System (ANS: Sympathetic 'fight or flight' vs Parasympathetic 'rest and digest').",
    "Neurons are the structural and functional units of the nervous system, consisting of three main regions: Cell Body (Soma containing Nissl's granules), Dendrites (afferent processes), and Axon (efferent process terminating in synaptic knobs).",
    "Neuroglia (Glial cells) are non-excitable supporting cells outnumbering neurons by 10:1, providing structural framework, myelination (Schwann cells in PNS, Oligodendrocytes in CNS), and immune defence (Microglia).",
    "Resting Membrane Potential (RMP ≈ -70 mV): The axonal membrane is polarized at rest—more permeable to K⁺ than Na⁺, and completely impermeable to negatively charged proteins inside the axoplasm. Maintained actively by Na⁺/K⁺ ATPase pump (3 Na⁺ pumped OUT for every 2 K⁺ pumped IN).",
    "Action Potential (Nerve Impulse): Initiated by a threshold stimulus (-55 mV) opening voltage-gated Na⁺ channels. Rapid Na⁺ influx causes DEPOLARIZATION (reversing membrane potential from -70 mV to +30 mV). Repolarization occurs as Na⁺ channels close and voltage-gated K⁺ channels open, permitting K⁺ efflux.",
    "Propagation: Conducted continuously in unmyelinated fibers, but via Rapid Saltatory Conduction in myelinated fibers (jumping from one Node of Ranvier to the next, increasing speed up to 50 times).",
    "Synaptic Transmission: Transmission across a Chemical Synapse involves Ca²⁺ influx at the presynaptic terminal, exocytosis of Acetylcholine (ACh) into the 20 nm synaptic cleft, ligand-binding on postsynaptic receptors, and generation of EPSP or IPSP.",
    "Reflex Action: An involuntary, automatic, rapid motor response to a sensory stimulus mediated by a neural pathway called the Reflex Arc (Receptor → Sensory Neuron → CNS/Interneuron → Motor Neuron → Effector)."
  ],

  importantTerms: [
    {
      term: "Nissl's Granules",
      definition: "Large granular structures composed of dense aggregates of Rough Endoplasmic Reticulum (RER) and free ribosomes found in the Cell Body (Soma) and Dendrites of neurons (absent in Axon and Axon Hillock), responsible for active protein synthesis.",
      neetNote: "NCERT Highlight: Present in Soma and Dendrites, strictly ABSENT in Axon and Axon Hillock."
    },
    {
      term: "Axon Hillock",
      definition: "The conical trigger zone connecting the soma to the axon, lacking Nissl's granules, containing the highest density of voltage-gated Na⁺ channels where action potentials are generated.",
      neetNote: "Acts as the impulse-generating trigger zone of the neuron."
    },
    {
      term: "Nodes of Ranvier",
      definition: "Unmyelinated gaps occurring at regular intervals along a myelinated axon where the axolemma is exposed to extracellular fluid, packed with voltage-gated Na⁺ channels for saltatory impulse propagation.",
      neetNote: "Location of action potential regeneration in myelinated nerve fibers."
    },
    {
      term: "Resting Membrane Potential (RMP)",
      definition: "The electrical potential difference across the axonal membrane when a neuron is not conducting an impulse, measured as -70 mV (inside negative relative to outside).",
      neetNote: "Maintained by 3 Na⁺ OUT / 2 K⁺ IN electrogenic pump."
    },
    {
      term: "Saltatory Conduction",
      definition: "The mode of nerve impulse propagation in myelinated axons where the action potential 'jumps' from one Node of Ranvier to the next, dramatically increasing conduction velocity while conserving ATP.",
      neetNote: "50x faster than continuous conduction in unmyelinated fibers."
    },
    {
      term: "Synaptic Cleft",
      definition: "A fluid-filled microscopic gap (~20 nm wide) separating the presynaptic membrane of the axon terminal from the postsynaptic membrane of the dendrite/soma.",
      neetNote: "Absent or negligible (<0.2 nm) in electrical synapses."
    },
    {
      term: "Reflex Arc",
      definition: "The specific anatomical pathway traversed by nerve impulses to produce a reflex action, consisting of receptor, sensory neuron, integration center, motor neuron, and effector organ.",
      neetNote: "Knee-jerk reflex is a monosynaptic stretch reflex."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Biological Need for Coordination & Structural Hierarchy of the Nervous System",
      paragraphs: [
        "Coordination is the physiological process through which two or more organs interact and complement the functions of one another to maintain homeostasis. In human body, two systems provide integrated coordination: Neural System and Endocrine System.",
        "Neural Coordination vs Hormonal Coordination:",
        "1. Speed: Neural responses are instantaneous (milliseconds), whereas hormonal responses are slower (seconds to hours).",
        "2. Targeting: Neural system provides point-to-point, highly specific connections; hormonal system broadcasts signals widely via blood transport.",
        "3. Duration: Neural effects are short-lived; hormonal effects are prolonged and widespread.",
        "Structural Organization of the Human Nervous System:",
        "• Central Nervous System (CNS): Includes the Brain and Spinal Cord; acts as the primary processing and control center.",
        "• Peripheral Nervous System (PNS): Comprises all nerves arising from CNS throughout the body (12 pairs of Cranial Nerves + 31 pairs of Spinal Nerves).",
        "Subdivisions of PNS:",
        "1. Somatic Nervous System (SNS): Relays impulses from CNS to voluntary skeletal muscles.",
        "2. Autonomic Nervous System (ANS): Relays impulses from CNS to involuntary organs and smooth muscles. Subdivided into Sympathetic Nervous System ('fight or flight', energy expenditure) and Parasympathetic Nervous System ('rest and digest', energy conservation)."
      ],
      tables: [
        {
          title: "Comprehensive Comparison: Neural vs Hormonal Coordination",
          headers: ["Property / Parameter", "Neural Coordination System", "Hormonal (Endocrine) System"],
          rows: [
            ["Messenger Signal", "Electrochemical action potentials & Neurotransmitters", "Chemical hormones released into bloodstream"],
            ["Speed of Transmission", "Ultra-rapid (up to 120 meters/second)", "Relatively slow transport via circulatory system"],
            ["Target Specificity", "Point-to-point specific synaptic connections", "Widespread target cells with specific receptors"],
            ["Duration of Action", "Transient, short-lived (milliseconds)", "Long-lasting, persistent biological effects"],
            ["Functional Purpose", "Rapid reflex adjustments & motor control", "Metabolic regulation, growth, reproduction"]
          ]
        }
      ],
      importantPoints: [
        "CNS consists of Brain and Spinal Cord.",
        "PNS consists of Cranial Nerves (12 pairs) and Spinal Nerves (31 pairs).",
        "Somatic NS controls voluntary skeletal muscles; Autonomic NS controls involuntary organs.",
        "Sympathetic NS prepares body for emergency ('fight or flight'); Parasympathetic NS promotes relaxation ('rest and digest')."
      ]
    },
    {
      heading: "2. The Neuron — Micro-Anatomy & Structural Classification",
      paragraphs: [
        "A Neuron is a specialized, excitable cell designed for receiving, processing, and transmitting electrochemical information.",
        "Anatomical Components of a Neuron:",
        "1. Cell Body (Soma or Perikaryon): Contains a prominent spherical nucleus, cytoplasm (neuroplasm), neurofibrils, and Nissl's granules (aggregates of rough ER and free ribosomes). Nissl's granules actively synthesize neuroproteins.",
        "2. Dendrites: Short, highly branched, tapering processes extending from the soma that contain Nissl's granules. They receive incoming signals from other neurons and conduct impulses TOWARD the soma (centripetal transmission).",
        "3. Axon: A single, long, cylindrical process that conducts impulses AWAY from the soma (centrifugal transmission). Originates at the Axon Hillock (devoid of Nissl's granules). The cytoplasm of axon is called Axoplasm, enclosed by Axolemma.",
        "4. Axon Terminals & Synaptic Knobs: The axon branches distally into terminal arborizations ending in bulbous structures called Synaptic Knobs, which contain synaptic vesicles filled with neurotransmitter chemicals (e.g., Acetylcholine)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="300" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="2"/>
          <text x="375" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Detailed Micro-Anatomy of a Myelinated Neuron</text>

          <!-- Soma (Cell Body) -->
          <g transform="translate(40, 50)">
            <path d="M 60,60 C 20,20 0,60 10,90 C -10,130 30,160 60,140 C 90,160 130,130 110,90 C 130,50 90,20 60,60 Z" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
            <!-- Nucleus -->
            <circle cx="60" cy="90" r="18" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
            <circle cx="60" cy="90" r="6" fill="#78350f"/>
            <text x="60" y="118" fill="#78350f" font-size="9" font-weight="bold" text-anchor="middle">Soma / Nucleus</text>

            <!-- Nissl Granules -->
            <circle cx="35" cy="70" r="3" fill="#b45309"/>
            <circle cx="80" cy="65" r="3" fill="#b45309"/>
            <circle cx="45" cy="115" r="3" fill="#b45309"/>
            <circle cx="75" cy="115" r="3" fill="#b45309"/>
            <text x="60" y="45" fill="#b45309" font-size="9" font-weight="bold" text-anchor="middle">Nissl's Granules</text>

            <!-- Dendrites -->
            <path d="M 15,40 L -15,10" stroke="#d97706" stroke-width="2.5"/>
            <path d="M 10,90 L -20,90" stroke="#d97706" stroke-width="2.5"/>
            <path d="M 25,135 L -5,165" stroke="#d97706" stroke-width="2.5"/>
            <path d="M 90,30 L 110,-5" stroke="#d97706" stroke-width="2.5"/>
            <text x="-25" y="10" fill="#b45309" font-size="10" font-weight="bold">Dendrites</text>
          </g>

          <!-- Axon Hillock & Axon Shaft -->
          <g transform="translate(150, 120)">
            <path d="M 0,20 L 30,10 L 450,10 L 450,30 L 30,30 L 0,20" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
            <text x="15" y="-5" fill="#0369a1" font-size="10" font-weight="bold">Axon Hillock</text>
            <text x="220" y="24" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">Axon Shaft (Axoplasm)</text>
          </g>

          <!-- Myelin Sheath & Schwann Cells -->
          <g transform="translate(210, 115)">
            <!-- Myelin Segments -->
            <rect x="0" y="0" width="80" height="30" fill="#bae6fd" stroke="#0369a1" stroke-width="2" rx="6"/>
            <circle cx="40" cy="8" r="4" fill="#0284c7"/>
            <text x="40" y="22" fill="#0c4a6e" font-size="9" text-anchor="middle">Schwann Cell</text>

            <rect x="100" y="0" width="80" height="30" fill="#bae6fd" stroke="#0369a1" stroke-width="2" rx="6"/>
            <circle cx="140" cy="8" r="4" fill="#0284c7"/>

            <rect x="200" y="0" width="80" height="30" fill="#bae6fd" stroke="#0369a1" stroke-width="2" rx="6"/>
            <circle cx="240" cy="8" r="4" fill="#0284c7"/>

            <!-- Nodes of Ranvier -->
            <text x="90" y="48" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">Node of Ranvier</text>
            <line x1="90" y1="38" x2="90" y2="15" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="2,2"/>

            <text x="190" y="48" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">Node of Ranvier</text>
            <line x1="190" y1="38" x2="190" y2="15" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="2,2"/>
          </g>

          <!-- Axon Terminals & Synaptic Knobs -->
          <g transform="translate(600, 120)">
            <path d="M 0,20 L 30,0 L 50,-10" stroke="#0284c7" stroke-width="2"/>
            <circle cx="53" cy="-12" r="6" fill="#16a34a"/>

            <path d="M 0,20 L 35,20 L 55,20" stroke="#0284c7" stroke-width="2"/>
            <circle cx="58" cy="20" r="6" fill="#16a34a"/>

            <path d="M 0,20 L 30,40 L 50,50" stroke="#0284c7" stroke-width="2"/>
            <circle cx="53" cy="52" r="6" fill="#16a34a"/>

            <text x="65" y="24" fill="#15803d" font-size="10" font-weight="bold">Synaptic Knobs</text>
          </g>

          <!-- Bottom Legend -->
          <rect x="30" y="255" width="690" height="35" fill="#ffffff" stroke="#cbd5e1" rx="6"/>
          <text x="40" y="276" fill="#334155" font-size="10" font-weight="bold">• Impulse Direction: Dendrites → Soma → Axon Hillock → Axon → Axon Terminals (Unidirectional)</text>
        </svg>`,
        caption: "Anatomy of a Myelinated Neuron showing Dendrites, Cell Body with Nissl's granules, Axon Hillock, Schwann cell myelin sheath, Nodes of Ranvier, and Synaptic Knobs.",
        guide: "WHAT TO OBSERVE: Nissl's granules are present in Soma and Dendrites, but strictly ABSENT in Axon and Axon Hillock. Nodes of Ranvier are bare axonal gaps between adjacent Schwann cell myelin sheaths where action potentials jump."
      },
      tables: [
        {
          title: "NCERT Structural Types of Neurons Based on Number of Processes",
          headers: ["Type of Neuron", "Number of Axons & Dendrites", "NCERT Anatomical Location", "NEET Significance"],
          rows: [
            ["Unipolar Neuron", "One Axon only (zero dendrites)", "Embryonic stage of vertebrates", "Primitive structural configuration."],
            ["Bipolar Neuron", "One Axon and One Dendrite", "Retina of the eye, Olfactory epithelium", "Specialized for sensory perception."],
            ["Multipolar Neuron", "One Axon and Two or More Dendrites", "Cerebral Cortex of human brain", "Most common neuronal type in human CNS."]
          ]
        },
        {
          title: "Functional Classification of Neurons",
          headers: ["Functional Category", "Direction of Impulse", "Primary Anatomical Location", "Reflex Arc Role"],
          rows: [
            ["Sensory (Afferent) Neuron", "From Sensory Receptors TO Central Nervous System (CNS)", "Dorsal root ganglion of spinal nerves", "Conveys input environmental stimulus."],
            ["Motor (Efferent) Neuron", "From CNS TO Effector organs (Muscles/Glands)", "Ventral horn of spinal cord", "Triggers muscular/glandular response."],
            ["Interneuron (Association)", "Connects Sensory and Motor neurons within CNS", "Grey matter of Brain and Spinal Cord", "Integrates and processes complex reflexes."]
          ]
        }
      ],
      importantPoints: [
        "Nissl's granules are present in Soma and Dendrites; absent in Axon and Axon Hillock.",
        "Unipolar neurons are found in Embryonic stage.",
        "Bipolar neurons are found in Retina of the Eye and Olfactory epithelium.",
        "Multipolar neurons are found in Cerebral Cortex (most abundant).",
        "Sensory = Afferent (toward CNS); Motor = Efferent (away from CNS)."
      ]
    },
    {
      heading: "3. Neuroglia (Glial Cells) — The Supporting Network",
      paragraphs: [
        "Neuroglia (Glial cells) are non-neuronal, non-excitable supporting cells that constitute more than 50% of the total volume of neural tissue in the human brain.",
        "Unlike neurons, glial cells retain the ability to undergo cell division (mitosis) throughout life.",
        "Types of Neuroglia in Human Nervous System:",
        "1. Schwann Cells (PNS): Form the protective insulating Myelin Sheath around peripheral nerve axons. Ensheath both myelinated and unmyelinated PNS axons (unmyelinated axons are enclosed by Schwann cells without forming concentric myelin wraps).",
        "2. Oligodendrocytes (CNS): Form myelin sheaths around axons located specifically inside the Central Nervous System (Brain and Spinal cord). One oligodendrocyte can myelinate up to 30 adjacent CNS axons.",
        "3. Astrocytes (CNS): Star-shaped glial cells that form the structural framework of CNS, regulate extracellular $K^+$ ion concentration, and form the protective Blood-Brain Barrier (BBB).",
        "4. Microglia (CNS): Small phagocytic glial cells derived from mesoderm that clear cellular debris and pathogens in CNS.",
        "5. Ependymal Cells (CNS): Ciliated epithelial cells lining the brain ventricles and central canal of spinal cord, assisting in the circulation of Cerebrospinal Fluid (CSF)."
      ],
      importantPoints: [
        "Schwann cells myelinate PNS axons; Oligodendrocytes myelinate CNS axons.",
        "Unmyelinated nerve fibers in PNS are ALSO enclosed by Schwann cells, but lack myelin wrapping.",
        "Astrocytes form the Blood-Brain Barrier (BBB).",
        "Microglia act as phagocytes in the CNS."
      ]
    },
    {
      heading: "4. Nerve Impulse Generation I: Resting Membrane Potential (RMP)",
      paragraphs: [
        "Neurons are electrically excitable cells because their axonal membrane exists in a POLARIZED state.",
        "Resting Membrane Potential (RMP) is the electrical potential difference across the axonal membrane when the neuron is NOT conducting an impulse, equal to -70 mV (inside negative relative to outside).",
        "Physiological Basis of Resting Membrane Potential:",
        "1. Ionic Distribution at Rest:",
        "   • Extracellular Fluid (ECF): High concentration of Sodium ions ($Na^+$) and Chloride ions ($Cl^-$).",
        "   • Intracellular Fluid (Axoplasm): High concentration of Potassium ions ($K^+$) and negatively charged organic proteins ($A^-$).",
        "2. Differential Membrane Permeability at Rest:",
        "   • The resting axonal membrane is significantly MORE permeable to Potassium ions ($K^+$) than to Sodium ions ($Na^+$) because resting $K^+$ leak channels are open.",
        "   • The membrane is completely IMPERMEABLE to negatively charged organic proteins ($A^-$) in the axoplasm.",
        "   • Consequently, $K^+$ ions continuously diffuse OUT of the axoplasm along their concentration gradient, leaving behind an excess of uncompensated negative charges inside.",
        "3. Active $Na^+/K^+$ ATPase Pump (Electrogenic Maintenance):",
        "   • To maintain this resting concentration gradient against ongoing leakage, the membrane utilizes an active, ATP-dependent transport protein called the $Na^+/K^+$ ATPase Pump.",
        "   • For every molecule of ATP hydrolyzed, the pump actively transports 3 $Na^+$ ions OUT of the neuron and 2 $K^+$ ions IN to the neuron.",
        "   • Net effect: Translocates more positive charges outwards than inwards, establishing and maintaining the resting potential of -70 mV."
      ],
      importantPoints: [
        "Resting Membrane Potential = -70 mV (inside negative).",
        "Axolemma at rest is permeable to K⁺, nearly impermeable to Na⁺, and completely impermeable to negative organic proteins.",
        "Na⁺/K⁺ pump actively transports 3 Na⁺ OUT and 2 K⁺ IN per ATP molecule."
      ]
    },
    {
      heading: "5. Nerve Impulse Generation II: Action Potential & Depolarisation",
      paragraphs: [
        "When an adequate electrical or chemical stimulus is applied at a point (e.g., Point A) on a polarized axonal membrane, it induces a sequence of rapid permeability changes called an Action Potential (Nerve Impulse).",
        "Step-by-Step Mechanism of Action Potential Generation:",
        "1. Threshold Stimulus:",
        "   • A stimulus must reach a minimum threshold value (-55 mV) to trigger an action potential ('All-or-None Law'). Sub-threshold stimuli fail to produce an impulse.",
        "2. Depolarisation Phase (Na⁺ Influx):",
        "   • At Point A, the threshold stimulus causes rapid opening of Voltage-Gated Sodium ($Na^+$) Channels.",
        "   • $Na^+$ ions rush explosively into the axoplasm down their steep electrochemical gradient.",
        "   • This massive positive entry reverses the membrane polarity: the inner surface becomes POSITIVELY charged (+30 mV) and the outer surface becomes NEGATIVELY charged.",
        "   • This electrical potential reversal from -70 mV to +30 mV is called DEPOLARISATION (or Action Potential).",
        "3. Repolarisation Phase (K⁺ Efflux):",
        "   • Within a fraction of a millisecond, voltage-gated $Na^+$ channels become inactivated/closed, halting $Na^+$ entry.",
        "   • Simultaneously, Voltage-Gated Potassium ($K^+$) Channels open.",
        "   • $K^+$ ions diffuse rapidly OUT of the axoplasm to the exterior, restoring the internal negativity of the membrane.",
        "   • This restoration of negative resting potential (-70 mV) is called REPOLARISATION.",
        "4. Hyperpolarisation & Refractory Period:",
        "   • Voltage-gated $K^+$ channels close relatively slowly, causing a temporary excess outward flow of $K^+$ ions that drops potential to -80 mV (Hyperpolarisation).",
        "   • During the Refractory Period, the $Na^+/K^+$ ATPase pump restores original ionic concentrations ($Na^+$ outside, $K^+$ inside), restoring responsiveness."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="320" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="2"/>
          <text x="375" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Voltage-Time Curve of Action Potential in Axolemma</text>

          <!-- Axes -->
          <line x1="80" y1="260" x2="680" y2="260" stroke="#475569" stroke-width="2"/>
          <line x1="80" y1="40" x2="80" y2="260" stroke="#475569" stroke-width="2"/>

          <text x="380" y="295" fill="#475569" font-size="11" font-weight="bold" text-anchor="middle">Time (Milliseconds)</text>
          <text x="25" y="150" fill="#475569" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 25 150)">Membrane Potential (mV)</text>

          <!-- Y-Axis Gridlines & Voltage Labels -->
          <line x1="75" y1="60" x2="680" y2="60" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="70" y="64" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="end">+30 mV (Peak Depolarisation)</text>

          <line x1="75" y1="160" x2="680" y2="160" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="70" y="164" fill="#d97706" font-size="10" font-weight="bold" text-anchor="end">-55 mV (Threshold Stimulus)</text>

          <line x1="75" y1="200" x2="680" y2="200" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,4"/>
          <text x="70" y="204" fill="#0284c7" font-size="10" font-weight="bold" text-anchor="end">-70 mV (Resting Potential RMP)</text>

          <line x1="75" y1="235" x2="680" y2="235" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="70" y="239" fill="#9333ea" font-size="10" font-weight="bold" text-anchor="end">-80 mV (Hyperpolarisation)</text>

          <!-- Curve -->
          <path d="M 80,200 L 160,200 L 200,160 L 260,60 L 360,200 L 420,235 L 500,200 L 680,200" fill="none" stroke="#2563eb" stroke-width="3.5"/>

          <!-- Curve Highlights & Annotations -->
          <circle cx="200" cy="160" r="5" fill="#d97706"/>
          <text x="200" y="145" fill="#d97706" font-size="9" font-weight="bold" text-anchor="middle">Threshold (-55 mV)</text>

          <circle cx="260" cy="60" r="5" fill="#16a34a"/>
          <text x="260" y="45" fill="#16a34a" font-size="10" font-weight="bold" text-anchor="middle">Na⁺ Influx (Depolarisation)</text>

          <text x="320" y="110" fill="#dc2626" font-size="10" font-weight="bold">K⁺ Efflux (Repolarisation)</text>

          <circle cx="420" cy="235" r="5" fill="#9333ea"/>
          <text x="420" y="252" fill="#9333ea" font-size="9" font-weight="bold" text-anchor="middle">Hyperpolarisation</text>
        </svg>`,
        caption: "Action Potential Voltage-Time Graph: Resting potential (-70 mV), Threshold stimulus (-55 mV), Rapid Na⁺ influx causing Depolarisation (+30 mV), K⁺ efflux causing Repolarisation, and temporary Hyperpolarisation (-80 mV).",
        guide: "WHAT TO OBSERVE: Depolarisation is caused strictly by Na⁺ INFLUX through voltage-gated Na⁺ channels. Repolarisation is caused strictly by K⁺ EFFLUX through voltage-gated K⁺ channels."
      },
      importantPoints: [
        "Threshold potential = -55 mV.",
        "Depolarisation is caused by rapid Na⁺ INFLUX (+30 mV).",
        "Repolarisation is caused by K⁺ EFFLUX back to -70 mV.",
        "All-or-None Law: Action potential occurs fully or not at all."
      ]
    },
    {
      heading: "6. Propagation of Nerve Impulse & Saltatory Conduction",
      paragraphs: [
        "Propagation along Unmyelinated Axon (Continuous Conduction):",
        "• When Point A depolarizes (outer negative, inner positive), adjacent Point B remains in resting state (outer positive, inner negative).",
        "• Local current flows on inner surface from Point A to Point B, and on outer surface from Point B to Point A, completing a circuit.",
        "• This local current flow depolarizes Point B to threshold, generating a new action potential at B while Point A repolarizes.",
        "• The impulse advances sequentially along the length of the unmyelinated axon at speeds of ~1–2 m/s.",
        "Propagation along Myelinated Axon (Saltatory Conduction):",
        "• Myelin is a lipid-rich insulator that prevents ion leakage across the axolemma.",
        "• Voltage-gated Na⁺ channels are densely concentrated ONLY at the bare Nodes of Ranvier.",
        "• Electrical current flows through axoplasm from one node directly to the next node, causing the action potential to 'jump' from node to node.",
        "• Advantages of Saltatory Conduction:",
        "  1. Speed: Conduction velocity is up to 50 times faster (up to 120 m/s).",
        "  2. Energy Efficiency: $Na^+/K^+$ ATPase pump works only at Nodes of Ranvier, conserving massive amounts of cellular ATP."
      ],
      tables: [
        {
          title: "Continuous Conduction vs Saltatory Conduction",
          headers: ["Parameter", "Continuous Conduction", "Saltatory Conduction"],
          rows: [
            ["Axon Fiber Type", "Unmyelinated nerve fibers (e.g. Autonomic / Somatic PNS)", "Myelinated nerve fibers (e.g. Cranial / Spinal nerves)"],
            ["Role of Myelin", "Absent; entire axolemma exposed to ECF", "Present; insulating sheath interrupted at Nodes of Ranvier"],
            ["Location of Ion Channels", "Distributed uniformly along entire length of axon", "Concentrated densely ONLY at Nodes of Ranvier"],
            ["Mechanism of Propagation", "Continuous sequential depolarisation of adjacent membrane", "Action potential 'jumps' from one node to next node"],
            ["Conduction Velocity", "Slow (0.5 to 2 meters/second)", "Ultra-fast (up to 120 meters/second)"],
            ["ATP Energy Consumption", "High (Na⁺/K⁺ pump operates along whole axon)", "Low (Na⁺/K⁺ pump operates only at Nodes of Ranvier)"]
          ]
        }
      ],
      importantPoints: [
        "Saltatory conduction occurs in myelinated nerve fibers.",
        "Action potentials jump from Node of Ranvier to Node of Ranvier.",
        "Saltatory conduction is faster and consumes less ATP."
      ]
    },
    {
      heading: "7. Synapse Anatomy & Mechanism of Chemical Transmission",
      paragraphs: [
        "A Synapse is a specialized functional junction through which a nerve impulse is transmitted from a presynaptic neuron to a postsynaptic neuron or effector cell.",
        "Two Types of Synapses:",
        "1. Electrical Synapse:",
        "   • Presynaptic and postsynaptic membranes lie in extremely close proximity (<0.2 nm gap).",
        "   • Connected directly by tubular protein channels called Gap Junctions (Connexons).",
        "   • Electrical current flows directly from one neuron into another without neurotransmitter chemical delay.",
        "   • Impulse transmission is faster than chemical synapse, but rare in human body (e.g. cardiac muscle cells, embryonic CNS).",
        "2. Chemical Synapse:",
        "   • Presynaptic and postsynaptic membranes are separated by a fluid-filled gap called the Synaptic Cleft (~20 nm).",
        "   • Uses chemical messengers called Neurotransmitters (e.g., Acetylcholine, Noradrenaline) stored in synaptic vesicles.",
        "   • Transmission is strictly UNIDIRECTIONAL."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="320" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="2"/>
          <text x="375" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Step-by-Step Chemical Synaptic Transmission</text>

          <!-- Presynaptic Terminal -->
          <g transform="translate(60, 45)">
            <path d="M 0,0 L 220,0 C 260,0 280,60 280,120 L 0,120 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
            <text x="120" y="25" fill="#0369a1" font-size="11" font-weight="bold">Presynaptic Knob</text>

            <!-- Ca2+ Channels -->
            <rect x="270" y="30" width="12" height="25" fill="#e11d48" rx="2"/>
            <text x="210" y="45" fill="#e11d48" font-size="9" font-weight="bold">Ca²⁺ Channel</text>
            <path d="M 310,42 L 285,42" stroke="#e11d48" stroke-width="2" marker-end="url(#arr-ca)"/>

            <!-- Vesicles -->
            <circle cx="80" cy="60" r="12" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
            <circle cx="140" cy="75" r="12" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
            <circle cx="210" cy="90" r="12" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
            <text x="120" y="105" fill="#0c4a6e" font-size="9" text-anchor="middle">Synaptic Vesicles (ACh)</text>

            <!-- Docking & Exocytosis -->
            <path d="M 260,115 C 270,115 275,120 280,120" fill="none" stroke="#16a34a" stroke-width="2"/>
            <circle cx="265" cy="125" r="2" fill="#16a34a"/>
            <circle cx="272" cy="130" r="2" fill="#16a34a"/>
            <circle cx="278" cy="122" r="2" fill="#16a34a"/>
          </g>

          <!-- Synaptic Cleft -->
          <rect x="340" y="45" width="40" height="230" fill="#fef08a" opacity="0.4"/>
          <text x="360" y="160" fill="#854d0e" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 360 160)">Synaptic Cleft (~20 nm)</text>

          <!-- Postsynaptic Membrane -->
          <g transform="translate(380, 45)">
            <path d="M 0,0 L 260,0 L 260,230 L 0,230 C 0,170 20,120 0,0 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
            <text x="120" y="25" fill="#15803d" font-size="11" font-weight="bold">Postsynaptic Membrane</text>

            <!-- Receptors -->
            <rect x="-8" y="70" width="12" height="20" fill="#16a34a" rx="2"/>
            <rect x="-8" y="140" width="12" height="20" fill="#16a34a" rx="2"/>
            <text x="20" y="83" fill="#15803d" font-size="9" font-weight="bold">Ligand-Gated Na⁺ Receptors</text>
            <text x="20" y="153" fill="#15803d" font-size="9" font-weight="bold">New Action Potential Generated</text>
          </g>

          <defs>
            <marker id="arr-ca" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#e11d48"/>
            </marker>
          </defs>
        </svg>`,
        caption: "Sequence of events at a Chemical Synapse: AP arrival → Ca²⁺ influx → Vesicle exocytosis releasing Acetylcholine into synaptic cleft → Receptor binding on postsynaptic membrane → Na⁺ influx generating new potential.",
        guide: "WHAT TO OBSERVE: Transmission is strictly UNIDIRECTIONAL because synaptic vesicles containing neurotransmitter are located ONLY in the presynaptic knob, and receptors are located ONLY on the postsynaptic membrane."
      },
      tables: [
        {
          title: "Detailed Comparison: Electrical Synapse vs Chemical Synapse",
          headers: ["Property", "Electrical Synapse", "Chemical Synapse"],
          rows: [
            ["Synaptic Cleft Width", "Extremely narrow (<0.2 nm gap junction)", "Fluid-filled cleft (~20 nm wide)"],
            ["Connecting Structure", "Gap Junctions (Connexon protein channels)", "No direct physical channel; neurotransmitters"],
            ["Chemical Messenger", "None required (Direct ionic current)", "Neurotransmitters (e.g. Acetylcholine)"],
            ["Transmission Speed", "Instantaneous, ultra-fast", "Slight delay (~0.5 ms synaptic delay)"],
            ["Directionality", "Can be bidirectional", "Strictly UNIDIRECTIONAL"],
            ["Abundance in Body", "Very rare in human body", "Most predominant synapse type in human body"]
          ]
        }
      ],
      importantPoints: [
        "Chemical transmission is strictly UNIDIRECTIONAL.",
        "Ca²⁺ influx into presynaptic terminal triggers vesicle exocytosis.",
        "Acetylcholine (ACh) is degraded in synaptic cleft by Acetylcholinesterase enzyme.",
        "Electrical synapses are faster but rare in human body."
      ]
    },
    {
      heading: "8. Reflex Action & The Reflex Arc",
      paragraphs: [
        "A Reflex Action is an immediate, involuntary, rapid motor response to a peripheral sensory stimulus that occurs without conscious thought or brain involvement.",
        "Physiological Significance: Protects body tissues from sudden mechanical, chemical, or thermal injuries.",
        "Components of the Reflex Arc (5-Step Pathway):",
        "1. Sensory Receptor: Detects stimulus (e.g., muscle spindle detecting stretch in patellar tendon, or skin nociceptor detecting heat).",
        "2. Sensory (Afferent) Neuron: Transmits sensory action potentials via the Dorsal Root of spinal nerve into the Spinal Cord.",
        "3. Integration Center (Spinal Cord Grey Matter): Sensory neuron synapses directly with a motor neuron (Monosynaptic reflex e.g., Knee-jerk) or via one or more Interneurons (Polysynaptic reflex).",
        "4. Motor (Efferent) Neuron: Transmits efferent motor command out of spinal cord via Ventral Root to effector muscle.",
        "5. Effector Organ: Skeletal muscle contracts to produce protective motor response (e.g., quadriceps contraction causing knee jerk, or flexor withdrawal from hot object)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="300" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="2"/>
          <text x="375" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Neural Circuitry of the Reflex Arc (Knee-Jerk Reflex)</text>

          <!-- Spinal Cord Cross-Section -->
          <g transform="translate(450, 45)">
            <rect width="240" height="200" fill="#ffffff" stroke="#94a3b8" stroke-width="2" rx="12"/>
            <!-- Butterfly Grey Matter -->
            <path d="M 60,60 C 90,80 90,120 60,140 C 40,110 40,90 60,60 Z" fill="#cbd5e1" stroke="#64748b"/>
            <path d="M 180,60 C 150,80 150,120 180,140 C 200,110 200,90 180,60 Z" fill="#cbd5e1" stroke="#64748b"/>
            <line x1="80" y1="100" x2="160" y2="100" stroke="#64748b" stroke-width="8"/>
            <text x="120" y="104" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Spinal Cord Grey Matter</text>

            <!-- Dorsal Root & Ganglion -->
            <path d="M -80,40 L 40,60" stroke="#dc2626" stroke-width="3"/>
            <circle cx="-20" cy="50" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
            <text x="-20" y="54" fill="#991b1b" font-size="8" font-weight="bold" text-anchor="middle">DRG</text>

            <!-- Ventral Root -->
            <path d="M 40,140 L -80,160" stroke="#2563eb" stroke-width="3"/>
          </g>

          <!-- Receptor & Effector Panel -->
          <g transform="translate(40, 60)">
            <rect width="180" height="60" fill="#fef2f2" stroke="#f87171" stroke-width="2" rx="6"/>
            <text x="90" y="25" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">1. Sensory Receptor</text>
            <text x="90" y="42" fill="#7f1d1d" font-size="9" text-anchor="middle">(Muscle Spindle / Skin)</text>

            <rect width="180" height="60" x="0" y="140" fill="#eff6ff" stroke="#60a5fa" stroke-width="2" rx="6"/>
            <text x="90" y="165" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">5. Effector Muscle</text>
            <text x="90" y="182" fill="#1e3a8a" font-size="9" text-anchor="middle">(Quadriceps Contraction)</text>
          </g>

          <!-- Annotations & Pathway Arrows -->
          <text x="290" y="80" fill="#dc2626" font-size="10" font-weight="bold">2. Afferent Sensory Pathway</text>
          <text x="290" y="210" fill="#2563eb" font-size="10" font-weight="bold">4. Efferent Motor Pathway</text>
        </svg>`,
        caption: "Cross-section of Spinal Cord illustrating the Reflex Arc: Sensory cell body in Dorsal Root Ganglion (DRG), synaptic integration in dorsal horn, and motor axon exiting via Ventral Root to effector muscle.",
        guide: "WHAT TO OBSERVE: Cell bodies of sensory afferent neurons are ALWAYS located in the Dorsal Root Ganglion (DRG) outside the spinal cord. Efferent motor axons exit the spinal cord through the Ventral Root."
      },
      importantPoints: [
        "Reflex actions are rapid, involuntary, and protective.",
        "Sensory cell bodies reside in the Dorsal Root Ganglion (DRG).",
        "Sensory inputs enter via Dorsal Root; Motor outputs exit via Ventral Root."
      ]
    }
  ],

  formulae: [
    {
      title: "Resting Membrane Potential Ionic Flux Ratio",
      formula: "3 \\text{ Na}^+ \\text{ (Out)} : 2 \\text{ K}^+ \\text{ (In)} \\quad [\\text{Powered by 1 ATP}]",
      meaning: "For every single molecule of ATP hydrolyzed by the Na+/K+ ATPase pump, 3 Na+ ions are actively transported out of the axoplasm and 2 K+ ions are actively transported into the axoplasm.",
      symbols: "Na+ = Sodium ion, K+ = Potassium ion, ATP = Adenosine Triphosphate",
      unit: "Ions per ATP molecule",
      conditions: "Operates continuously during resting membrane potential and post-action potential recovery.",
      whenToUse: "Use in NEET questions testing active membrane transport stoichiometry."
    }
  ],

  neetImportantPoints: [
    "Nissl's granules are present in Soma and Dendrites, but strictly ABSENT in Axon and Axon Hillock.",
    "Unipolar neurons occur in Embryonic stage; Bipolar in Retina and Olfactory epithelium; Multipolar in Cerebral Cortex.",
    "Schwann cells myelinate PNS axons; Oligodendrocytes myelinate CNS axons.",
    "Unmyelinated axons in PNS are also enclosed by Schwann cells, but lack myelin wrapping.",
    "Resting Membrane Potential = -70 mV; Threshold = -55 mV; Action Potential Peak = +30 mV.",
    "Na⁺/K⁺ pump transports 3 Na⁺ OUT and 2 K⁺ IN per ATP molecule.",
    "Depolarisation is caused by Na⁺ INFLUX; Repolarisation is caused by K⁺ EFFLUX.",
    "Saltatory conduction in myelinated fibers is up to 50x faster and conserves ATP energy.",
    "Chemical synaptic transmission is strictly UNIDIRECTIONAL.",
    "Ca²⁺ influx into presynaptic knob triggers neurotransmitter (Acetylcholine) exocytosis into synaptic cleft.",
    "Sensory neuron cell bodies are located in Dorsal Root Ganglion (DRG); motor axons exit via Ventral Root."
  ],

  commonConfusions: [
    {
      commonConfusion: "Believing that unmyelinated PNS axons are completely free of Schwann cells.",
      correctFact: "Unmyelinated nerve fibers in the Peripheral Nervous System ARE enclosed by Schwann cells, but the Schwann cells do NOT wrap repeatedly to form a myelin sheath around them.",
      whyItMattersForNEET: "Direct NCERT textual line statement frequently tested in NEET true/false questions."
    },
    {
      commonConfusion: "Confusing the ion movements responsible for Depolarisation and Repolarisation.",
      correctFact: "Depolarisation is caused strictly by Na⁺ INFLUX into the axon. Repolarisation is caused strictly by K⁺ EFFLUX out of the axon.",
      whyItMattersForNEET: "High-yield conceptual trap in NEET UG membrane physiology questions."
    },
    {
      commonConfusion: "Assuming electrical synapses are the predominant type in the human body.",
      correctFact: "Chemical synapses are the most abundant in the human nervous system. Electrical synapses are very rare in humans.",
      whyItMattersForNEET: "Tested in comparative assertion-reason questions."
    }
  ],

  quickRevision: [
    "CNS = Brain + Spinal Cord; PNS = Cranial Nerves (12 pairs) + Spinal Nerves (31 pairs).",
    "Somatic NS = Voluntary skeletal muscle; Autonomic NS = Involuntary organs (Sympathetic vs Parasympathetic).",
    "Neuron soma contains Nissl's granules (RER + Ribosomes); absent in Axon and Axon Hillock.",
    "Unipolar = Embryo; Bipolar = Retina/Olfactory; Multipolar = Cerebral Cortex.",
    "Glia: Schwann (PNS myelin), Oligodendrocytes (CNS myelin), Astrocytes (BBB), Microglia (Phagocytes).",
    "RMP = -70 mV; Na⁺/K⁺ pump = 3 Na⁺ OUT, 2 K⁺ IN.",
    "Depolarisation = Na⁺ INFLUX (+30 mV); Repolarisation = K⁺ EFFLUX (-70 mV).",
    "Saltatory conduction = Action potential jumps between Nodes of Ranvier in myelinated fibers.",
    "Chemical synapse: Ca²⁺ influx → ACh vesicle exocytosis → ~20 nm cleft → Postsynaptic Na⁺ receptors.",
    "Reflex Arc: Receptor → Sensory (DRG) → Spinal Cord Interneuron → Motor (Ventral Root) → Effector."
  ],

  practiceQuestions: [
    {
      questionId: "prac-neur-001",
      questionText: "Which of the following statements correctly describes the ionic movement during the repolarisation phase of an action potential in a nerve fiber?",
      options: [
        "A) Rapid entry of Na⁺ ions into the axoplasm through voltage-gated Na⁺ channels",
        "B) Active pumping of 3 K⁺ ions outward by the Na⁺/K⁺ ATPase pump",
        "C) Rapid efflux of K⁺ ions out of the axoplasm through voltage-gated K⁺ channels",
        "D) Influx of negatively charged organic proteins into the axoplasm"
      ],
      correctAnswerIndex: 2,
      explanation: "Repolarisation is the restoration of the resting negative potential (-70 mV) following depolarisation. It occurs when voltage-gated Na⁺ channels close and voltage-gated K⁺ channels open, permitting rapid outward diffusion (efflux) of K⁺ ions down their concentration gradient.",
      difficulty: "Easy",
      topicTested: "Action Potential Phases",
      conceptTested: "Ionic Basis of Repolarisation"
    },
    {
      questionId: "prac-neur-002",
      questionText: "Nissl's granules, actively involved in protein synthesis in neurons, are present in which of the following neuronal regions?",
      options: [
        "A) Axon and Axon Hillock only",
        "B) Cell Body (Soma) and Dendrites only",
        "C) Axon Hillock and Synaptic Knobs only",
        "D) Entire length of Axon, Axon Hillock, and Dendrites"
      ],
      correctAnswerIndex: 1,
      explanation: "According to NCERT, Nissl's granules (composed of rough ER and free ribosomes) are present in the Cell Body (Soma) and Dendrites of a neuron, but are strictly ABSENT in the Axon and Axon Hillock.",
      difficulty: "Easy",
      topicTested: "Neuron Micro-Anatomy",
      conceptTested: "Distribution of Nissl's Granules"
    },
    {
      questionId: "prac-neur-003",
      questionText: "Why is nerve impulse conduction significantly faster in myelinated nerve fibers compared to unmyelinated nerve fibers?",
      options: [
        "A) Myelinated fibers have a larger number of synaptic vesicles at terminals",
        "B) Action potentials jump from one Node of Ranvier to another via saltatory conduction",
        "C) Myelin sheath increases axoplasmic resistance to ionic movement",
        "D) Unmyelinated fibers lack Na⁺/K⁺ ATPase pumps along their axolemma"
      ],
      correctAnswerIndex: 1,
      explanation: "In myelinated nerve fibers, the insulating myelin sheath prevents ion leakage across the axolemma. Voltage-gated channels are concentrated at Nodes of Ranvier, allowing action potentials to 'jump' from node to node via saltatory conduction, which increases speed up to 50 times.",
      difficulty: "Medium",
      topicTested: "Nerve Impulse Propagation",
      conceptTested: "Mechanism of Saltatory Conduction"
    }
  ],

  pyqs: [
    {
      id: "pyq-neur-2023-1",
      year: 2023,
      exam: "NEET UG",
      verifiedExam: "NEET UG 2023",
      question: "Which of the following functions is carried out by the Na⁺/K⁺ ATPase pump during resting membrane potential in a neuron?",
      options: [
        "A) Transport of 2 Na⁺ outwards and 3 K⁺ inwards",
        "B) Transport of 3 Na⁺ outwards and 2 K⁺ inwards",
        "C) Transport of 3 Na⁺ inwards and 2 K⁺ outwards",
        "D) Transport of equal numbers of Na⁺ and K⁺ ions across the membrane"
      ],
      correctAnswerIndex: 1,
      explanation: "The electrogenic Na⁺/K⁺ ATPase pump actively transports 3 Na⁺ ions OUT of the axon into ECF and 2 K⁺ ions IN to the axoplasm per ATP molecule, maintaining resting membrane potential (-70 mV).",
      topicTested: "Resting Membrane Potential",
      difficulty: "Easy",
      conceptTested: "Na+/K+ ATPase Pump Stoichiometry",
      ncertReference: "NCERT Class 11 Biology Chapter 21 - Section 21.3.1",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2023 Official Question Paper"
    },
    {
      id: "pyq-neur-2022-1",
      year: 2022,
      exam: "NEET UG",
      verifiedExam: "NEET UG 2022",
      question: "Unmyelinated nerve fibers are enclosed by a Schwann cell that does NOT form a myelin sheath around the axon. In which of the following nervous system divisions are unmyelinated nerve fibers commonly found?",
      options: [
        "A) Cranial Nerves",
        "B) Spinal Nerves",
        "C) Autonomous and Somatic Neural Systems",
        "D) Cerebral Cortex only"
      ],
      correctAnswerIndex: 2,
      explanation: "NCERT Chapter 21 explicitly states: Unmyelinated nerve fiber is enclosed by a Schwann cell that does not form a myelin sheath around the axon, and is commonly found in Autonomous and Somatic neural systems. Myelinated fibers are found in Cranial and Spinal nerves.",
      topicTested: "Types of Nerve Fibers",
      difficulty: "Medium",
      conceptTested: "Anatomical Location of Unmyelinated Axons",
      ncertReference: "NCERT Class 11 Biology Chapter 21 - Section 21.2",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2022 Official Question Paper"
    },
    {
      id: "pyq-neur-2021-1",
      year: 2021,
      exam: "NEET UG",
      verifiedExam: "NEET UG 2021",
      question: "Match Column I with Column II regarding neuronal types:\n(a) Unipolar neuron - (i) Retina of eye\n(b) Bipolar neuron - (ii) Embryonic stage\n(c) Multipolar neuron - (iii) Cerebral cortex",
      options: [
        "A) (a)-(ii), (b)-(i), (c)-(iii)",
        "B) (a)-(i), (b)-(ii), (c)-(iii)",
        "C) (a)-(iii), (b)-(i), (c)-(ii)",
        "D) (a)-(ii), (b)-(iii), (c)-(i)"
      ],
      correctAnswerIndex: 0,
      explanation: "Unipolar neurons occur in the embryonic stage; Bipolar neurons occur in the retina of the eye and olfactory epithelium; Multipolar neurons occur in the cerebral cortex.",
      topicTested: "Types of Neurons",
      difficulty: "Easy",
      conceptTested: "NCERT Classification of Neurons",
      ncertReference: "NCERT Class 11 Biology Chapter 21 - Section 21.2",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2021 Official Question Paper"
    },
    {
      id: "pyq-neur-2020-1",
      year: 2020,
      exam: "NEET UG",
      verifiedExam: "NEET UG 2020",
      question: "Receptors for neurotransmitters released at a chemical synapse are located on:",
      options: [
        "A) Presynaptic membrane",
        "B) Postsynaptic membrane",
        "C) Synaptic vesicles",
        "D) Axon hillock"
      ],
      correctAnswerIndex: 1,
      explanation: "Neurotransmitters released from presynaptic vesicles diffuse across the synaptic cleft and bind to specific ligand-gated ion channel receptors located on the POSTSYNAPTIC membrane.",
      topicTested: "Synaptic Transmission",
      difficulty: "Easy",
      conceptTested: "Postsynaptic Receptor Location",
      ncertReference: "NCERT Class 11 Biology Chapter 21 - Section 21.3.2",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2020 Official Question Paper"
    }
  ]
};
