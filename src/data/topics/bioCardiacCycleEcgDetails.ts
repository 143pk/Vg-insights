import { DetailedTopicContent } from '../../types/neet';

export const bioCardiacCycleEcgDetails: DetailedTopicContent = {
  topicId: "bio-cardiac-cycle-ecg",
  topicName: "Human Heart Structure, Cardiac Cycle, ECG, Double Circulation & Disorders",
  subject: "Biology",
  class: "Class 11",
  classification: "Human Physiology",
  chapter: "Body Fluids and Circulation",

  whatIsThisTopic: "Comprehensive analysis of human heart anatomy, conducting system, nodal tissues (SAN, AVN, Purkinje fibers), cardiac cycle phases (0.8 sec), stroke volume and cardiac output calculations, heart sounds (LUB & DUB), electrocardiogram (ECG) wave interpretation, double circulation pathways, hepatic portal circulation, neural/hormonal regulation, and cardiovascular clinical disorders.",

  basicIdea: [
    "The human heart is a muscular 4-chambered organ (two upper atria, two lower ventricles) derived from embryonic mesoderm, enclosed in a double-walled pericardial sac with pericardial fluid.",
    "Nodal tissue is specialized cardiac musculature; Sino-Atrial Node (SAN) in the right atrium acts as the primary pacemaker, generating auto-rhythmic action potentials at a rate of 70–75/min.",
    "The Conduction Pathway follows: SAN → AVN → Bundle of His → Right & Left Bundle Branches → Purkinje Fibers in ventricular walls.",
    "The Cardiac Cycle lasts 0.8 seconds at a normal heart rate of 72 beats/min, divided into Joint Diastole (0.4s), Atrial Systole (0.1s), and Ventricular Systole (0.3s).",
    "Stroke Volume (SV) is the volume of blood pumped by each ventricle per cardiac cycle (~70 mL). Cardiac Output (CO) = Stroke Volume × Heart Rate ≈ 5000 mL/min (5 Liters/min).",
    "Heart Sounds: First sound 'LUB' is low-pitched, longer duration caused by closure of AV valves (tricuspid & bicuspid) at start of ventricular systole. Second sound 'DUB' is high-pitched, shorter duration caused by closure of semilunar valves at start of ventricular diastole.",
    "Electrocardiogram (ECG) records electrical activity: P-wave represents Atrial Depolarization, QRS-complex represents Ventricular Depolarization (determines heart rate), and T-wave represents Ventricular Repolarization.",
    "Double Circulation consists of Pulmonary Circulation (Right Ventricle → Deoxygenated blood to Lungs → Left Atrium) and Systemic Circulation (Left Ventricle → Oxygenated blood to Tissues → Right Atrium).",
    "Special Circulatory Systems include Coronary Circulation (supplying heart musculature) and Hepatic Portal System (carrying nutrient-rich blood from intestine to liver via hepatic portal vein before systemic venous return).",
    "Cardiac activity is regulated neurally by the medulla oblongata via sympathetic nerves (increases HR & contraction force) and parasympathetic/vagus nerves (decreases HR), as well as hormonally by adrenal medullary hormones (Epinephrine/Norepinephrine)."
  ],

  importantTerms: [
    {
      term: "Sino-Atrial Node (SAN / Pacemaker)",
      definition: "Specialized patch of auto-rhythmic nodal neuromuscular tissue located in the upper right corner of the right atrium that generates the highest frequency of action potentials (70–75/min) to initiate and maintain rhythmic heart contractions.",
      neetNote: "SAN sets the pace of the cardiac cycle; hence called the 'Natural Pacemaker'."
    },
    {
      term: "Atrio-Ventricular Node (AVN)",
      definition: "Nodal tissue mass located in the lower-left corner of the right atrium near the inter-atrial septum that receives action potentials from SAN and conducts them to the Bundle of His with a brief delay (~0.1s) allowing complete atrial emptying.",
      neetNote: "Acts as a 'Pace-setter' and delays impulse to ensure ventricles fill before contracting."
    },
    {
      term: "Purkinje Fibers & Bundle of His",
      definition: "Specialized conducting muscular fibers originating from AVN that pass through the inter-ventricular septum as right and left bundle branches and spread throughout ventricular myocardium for synchronized contraction.",
      neetNote: "Bundle of His + Purkinje fibers constitute the ventricular conducting system."
    },
    {
      term: "Cardiac Cycle",
      definition: "The complete sequence of mechanical and electrical events occurring in the heart during a single heartbeat, comprising alternating phases of contraction (systole) and relaxation (diastole) lasting 0.8 seconds.",
      neetNote: "Standard duration is 0.8 sec (calculated as 60 seconds / 72 beats)."
    },
    {
      term: "Stroke Volume (SV)",
      definition: "The volume of blood ejected by each ventricle during a single contraction (ventricular systole), equal to End-Diastolic Volume minus End-Systolic Volume (120 mL - 50 mL = ~70 mL).",
      neetNote: "Athletes have a significantly higher stroke volume and lower resting heart rate."
    },
    {
      term: "Cardiac Output (CO)",
      definition: "The total volume of blood pumped by each ventricle per minute, calculated as Cardiac Output = Stroke Volume × Heart Rate (70 mL × 72 beats/min = ~5040 mL/min ≈ 5 Liters/min).",
      neetNote: "Can be altered during strenuous exercise by increasing stroke volume or heart rate."
    },
    {
      term: "LUB (First Heart Sound - S1)",
      definition: "Low-pitched, longer duration (0.15s) heart sound produced by the sudden, synchronous closure of Atrioventricular (Tricuspid and Bicuspid/Mitral) valves at the onset of ventricular systole.",
      neetNote: "Associated with closure of AV valves at start of ventricular contraction."
    },
    {
      term: "DUB (Second Heart Sound - S2)",
      definition: "Higher-pitched, shorter duration (0.10s) heart sound produced by the sharp closure of Semilunar valves (Aortic and Pulmonary) at the onset of ventricular diastole.",
      neetNote: "Associated with closure of semilunar valves at end of ventricular contraction."
    },
    {
      term: "Electrocardiogram (ECG / EKG)",
      definition: "A graphical representation of the electrical activity of the cardiac muscle during a cardiac cycle, recorded using standard chest and limb electrical leads.",
      neetNote: "Standard diagnostic clinical lead placement uses 3 leads: one attached to each wrist and one to the left ankle."
    },
    {
      term: "QRS Complex",
      definition: "Prominent complex wave in an ECG corresponding to depolarization of the ventricles, triggering ventricular contraction. The number of QRS complexes per minute yields the heart rate.",
      neetNote: "Counting QRS complexes in a given time interval measures an individual's heart rate."
    },
    {
      term: "Double Circulation",
      definition: "A circulatory pathway where blood passes through the heart twice during one complete circuit around the body, separated into Pulmonary Circulation and Systemic Circulation.",
      neetNote: "Prevents mixing of oxygenated and deoxygenated blood in 4-chambered hearts (birds and mammals)."
    },
    {
      term: "Hepatic Portal System",
      definition: "A unique vascular connection in which venous blood drained from the gastrointestinal tract and stomach passes through the Hepatic Portal Vein into the liver capillaries before returning to systemic circulation via hepatic veins.",
      neetNote: "Allows the liver to process, detoxify, and store nutrients absorbed from digestion before systemic distribution."
    },
    {
      term: "Hypertension (High Blood Pressure)",
      definition: "Persistent elevation of systemic arterial blood pressure above normal resting limits (120/80 mmHg). Blood pressure consistently measuring 140/90 mmHg or higher is classified as hypertension.",
      neetNote: "120 = Systolic pressure (ventricular contraction); 80 = Diastolic pressure (resting ventricular relaxation)."
    },
    {
      term: "Coronary Artery Disease (CAD / Atherosclerosis)",
      definition: "Pathological narrowing of coronary arteries supplying blood to heart myocardium caused by lumen deposition of calcium, fat, cholesterol, and fibrous tissue.",
      neetNote: "Leads to reduced blood flow to heart muscle, causing angina pectoris or myocardial infarction."
    },
    {
      term: "Heart Failure vs Cardiac Arrest",
      definition: "Heart Failure is the state when the heart does not pump blood effectively enough to meet metabolic demands (often called congestive heart failure). Cardiac Arrest is when the heart stops beating completely.",
      neetNote: "Distinguish carefully: Heart Failure (insufficient pumping) vs Cardiac Arrest (abrupt cessation of heartbeat) vs Heart Attack (death of cardiac muscle due to ischemia)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Human Heart Anatomy, Chambers, Valves & Blood Flow Pathway",
      paragraphs: [
        "The human heart is a hollow, muscular, mesodermally derived organ situated in the thoracic cavity between the two lungs, slightly tilted towards the left. It is enclosed within a double-walled membranous pericardium containing pericardial fluid that cushions the heart and prevents friction during continuous cardiac contractions.",
        "Internal Chamber Structure: The heart is divided into four distinct chambers — two upper smaller chambers called Atria (Right Atrium and Left Atrium) separated by a thin inter-atrial septum, and two lower larger chambers called Ventricles (Right Ventricle and Left Ventricle) separated by a thick muscular inter-ventricular septum.",
        "Cardiac Valves & Unidirectional Flow: Heart valves ensure unidirectional blood flow and prevent backflow during contraction phases.",
        "1. Tricuspid Valve: Possesses three muscular cusps or flaps, guarding the opening between the Right Atrium and Right Ventricle.",
        "2. Bicuspid (Mitral) Valve: Possesses two cusps, guarding the opening between the Left Atrium and Left Ventricle.",
        "3. Semilunar Valves: Half-moon shaped pocket valves guarding the exit orifices of the Pulmonary Artery (from Right Ventricle) and the Aorta (from Left Ventricle).",
        "4. Chordae Tendineae: Tough fibrous cords attached to papillary muscles of ventricular walls that anchor the AV valve cusps, preventing them from turning inside out into the atria during powerful ventricular systole."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="360" fill="#0f172a" rx="16"/>
          <text x="375" y="30" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">ANATOMY OF HUMAN HEART &amp; UNIDIRECTIONAL BLOOD FLOW</text>
          
          <!-- Outer Heart Outline Box -->
          <rect x="180" y="55" width="390" height="280" fill="#1e293b" stroke="#ef4444" stroke-width="2" rx="20"/>
          
          <!-- Right Atrium -->
          <rect x="200" y="75" width="160" height="100" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5" rx="10"/>
          <text x="280" y="105" fill="#93c5fd" font-size="14" font-weight="bold" text-anchor="middle">RIGHT ATRIUM</text>
          <text x="280" y="125" fill="#cbd5e1" font-size="11" text-anchor="middle">Deox. Blood from Vena Cava</text>
          <text x="280" y="145" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Tricuspid Valve ↓</text>

          <!-- Left Atrium -->
          <rect x="390" y="75" width="160" height="100" fill="#831843" stroke="#f43f5e" stroke-width="1.5" rx="10"/>
          <text x="470" y="105" fill="#fda4af" font-size="14" font-weight="bold" text-anchor="middle">LEFT ATRIUM</text>
          <text x="470" y="125" fill="#cbd5e1" font-size="11" text-anchor="middle">Ox. Blood from Pulm. Veins</text>
          <text x="470" y="145" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Bicuspid (Mitral) Valve ↓</text>

          <!-- Interatrial Septum Line -->
          <line x1="375" y1="75" x2="375" y2="175" stroke="#64748b" stroke-width="3" stroke-dasharray="4 4"/>

          <!-- Right Ventricle -->
          <rect x="200" y="210" width="160" height="110" fill="#172554" stroke="#60a5fa" stroke-width="1.5" rx="10"/>
          <text x="280" y="240" fill="#bfdbfe" font-size="14" font-weight="bold" text-anchor="middle">RIGHT VENTRICLE</text>
          <text x="280" y="260" fill="#cbd5e1" font-size="11" text-anchor="middle">Pumps to Lungs via</text>
          <text x="280" y="280" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">Pulmonary Artery</text>

          <!-- Left Ventricle -->
          <rect x="390" y="210" width="160" height="110" fill="#701a75" stroke="#f472b6" stroke-width="1.5" rx="10"/>
          <text x="470" y="240" fill="#fbcfe8" font-size="14" font-weight="bold" text-anchor="middle">LEFT VENTRICLE</text>
          <text x="470" y="260" fill="#cbd5e1" font-size="11" text-anchor="middle">Thick Muscle Wall</text>
          <text x="470" y="280" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">Pumps to Body via Aorta</text>

          <!-- Interventricular Septum -->
          <rect x="365" y="210" width="20" height="110" fill="#475569" rx="4"/>
          <text x="375" y="270" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle" transform="rotate(-90 375 270)">Thick Septum</text>
        </svg>`,
        caption: "Figure 1: Internal chamber arrangement, valve positioning, and muscular thickness of the human heart.",
        guide: "Observe that the Left Ventricle possesses a significantly thicker muscular wall than the Right Ventricle because it must generate enough pressure to force blood through the entire systemic arterial network."
      },
      importantPoints: [
        "Tricuspid Valve guards Right Atrium-Ventricle junction; Bicuspid (Mitral) Valve guards Left Atrium-Ventricle junction.",
        "Semilunar valves prevent backflow into ventricles when ventricles relax.",
        "Left ventricular wall is ~3 times thicker than right ventricular wall due to systemic pressure workload."
      ]
    },
    {
      heading: "2. Nodal Tissue & Conduction System of Human Heart",
      paragraphs: [
        "The human heart is myogenic, meaning its rhythmic contractions are initiated spontaneously by specialized auto-rhythmic cardiac neuromuscular tissue without requiring external neural stimulation.",
        "Sino-Atrial Node (SAN): Located in the right upper corner of the right atrium near the opening of the superior vena cava. SAN generates maximum action potentials (70–75 per minute) and sets the fundamental cardiac rhythm; hence it is called the Natural Pacemaker.",
        "Atrio-Ventricular Node (AVN): Located in the lower left corner of the right atrium close to the inter-atrial septum. AVN receives waves of excitation from SAN and conducts them to ventricles after a short pause (~0.1s delay) to allow atria to complete mechanical contraction.",
        "Bundle of His & Purkinje Fibers: A mass of specialized nodal fibers called the AV Bundle (Bundle of His) emerges from AVN, passes through the inter-ventricular septum, and divides into Right and Left Bundle Branches. These branches give rise to fine Purkinje Fibers throughout the ventricular myocardium, causing rapid, uniform ventricular excitation."
      ],
      tables: [
        {
          title: "Sequence & Discharge Rates of Cardiac Conduction Components",
          headers: ["Conduction Component", "Anatomical Location", "Intrinsic Impulse Rate (/min)", "Functional Physiological Role"],
          rows: [
            ["Sino-Atrial Node (SAN)", "Upper right corner of Right Atrium", "70 – 75 / min (Highest)", "Primary Pacemaker; sets pace of cardiac cycle"],
            ["Atrio-Ventricular Node (AVN)", "Lower left corner of Right Atrium", "40 – 60 / min", "Pace-setter; delays impulse for complete atrial emptying"],
            ["Bundle of His", "Inter-ventricular septum", "36 – 40 / min", "Conduits wave of excitation from atria to ventricles"],
            ["Purkinje Fibers", "Ventricular myocardium walls", "30 – 35 / min", "Causes fast, synchronous contraction of ventricular muscle"]
          ]
        }
      ],
      importantPoints: [
        "Myogenic heart: Rhythm originates within specialized nodal cardiac muscle itself.",
        "If SAN fails, AVN can take over as pacemaker, but at a lower intrinsic rate (40–60 beats/min).",
        "Purkinje fibers ensure synchronized bottom-up ventricular contraction, driving blood upward into aorta and pulmonary artery."
      ]
    },
    {
      heading: "3. Phases of Cardiac Cycle (0.8 sec Breakdown) & Pressure Dynamics",
      paragraphs: [
        "At a standard resting heart rate of 72 beats per minute, one cardiac cycle lasts exactly $60 / 72 = 0.8 \\text{ seconds}$.",
        "Phase 1: Joint Diastole (Duration: 0.4 seconds)",
        "All four chambers (both atria and ventricles) are in a relaxed state. The tricuspid and bicuspid valves are OPEN because atrial pressure exceeds ventricular pressure. Deoxygenated blood from vena cava fills the right atrium and flows directly into the right ventricle; oxygenated blood from pulmonary veins fills the left atrium and flows into the left ventricle. Semilunar valves are CLOSED to prevent backflow from aorta and pulmonary artery. About 70% of ventricular filling occurs passively during joint diastole.",
        "Phase 2: Atrial Systole (Duration: 0.1 seconds)",
        "The SAN generates an action potential that spreads rapidly across both atria, causing simultaneous atrial contraction (Atrial Systole). This increases atrial blood pressure, forcing the remaining 30% of blood into the ventricles. Semilunar valves remain CLOSED.",
        "Phase 3: Ventricular Systole (Duration: 0.3 seconds)",
        "Action potential travels from AVN down the Bundle of His and Purkinje fibers into ventricular myocardium, triggering sharp Ventricular Systole. As ventricles contract, intra-ventricular pressure rises rapidly above atrial pressure. This instantly snaps shut the AV valves (Tricuspid and Bicuspid), producing the First Heart Sound ('LUB'). Closure of AV valves prevents backflow of blood into atria.",
        "As intra-ventricular pressure continues rising and exceeds arterial pressure in aorta and pulmonary artery, the Semilunar valves are forced OPEN. Blood is forcefully ejected from the right ventricle into the pulmonary artery and from the left ventricle into the aorta.",
        "Phase 4: Ventricular Diastole (Transition back to Joint Diastole)",
        "Ventricles begin relaxing (Ventricular Diastole). Intra-ventricular pressure falls rapidly below arterial pressure. Blood in aorta and pulmonary artery attempts to flow backward into ventricles, immediately catching the pocket-like Semilunar valves and snapping them CLOSED. This closure produces the Second Heart Sound ('DUB'). As ventricular pressure drops further below atrial pressure, AV valves open again, restarting Joint Diastole."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="280" fill="#0f172a" rx="16"/>
          <text x="375" y="30" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">CARDIAC CYCLE TIMELINE (Total Duration = 0.8 Seconds)</text>
          
          <!-- Timeline Bar -->
          <rect x="50" y="80" width="650" height="60" fill="#1e293b" stroke="#475569" stroke-width="2" rx="10"/>
          
          <!-- Atrial Systole Block (0.1s) -->
          <rect x="50" y="80" width="81.25" height="60" fill="#b45309" stroke="#f59e0b" stroke-width="2" rx="6"/>
          <text x="90.6" y="105" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Atrial Systole</text>
          <text x="90.6" y="125" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">0.1 sec</text>

          <!-- Ventricular Systole Block (0.3s) -->
          <rect x="131.25" y="80" width="243.75" height="60" fill="#991b1b" stroke="#ef4444" stroke-width="2" rx="6"/>
          <text x="253.1" y="105" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Ventricular Systole (LUB Sound at onset!)</text>
          <text x="253.1" y="125" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">0.3 sec</text>

          <!-- Joint Diastole Block (0.4s) -->
          <rect x="375" y="80" width="325" height="60" fill="#065f46" stroke="#10b981" stroke-width="2" rx="6"/>
          <text x="537.5" y="105" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Joint Diastole (DUB Sound at onset!)</text>
          <text x="537.5" y="125" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">0.4 sec</text>

          <!-- Events Callouts below -->
          <g transform="translate(50, 160)">
            <rect width="650" height="90" fill="#1e293b" rx="10" stroke="#334155"/>
            <text x="20" y="25" fill="#fde047" font-size="12" font-weight="bold">• Atrial Diastole lasts 0.7 sec (0.3s Vent. Systole + 0.4s Joint Diastole)</text>
            <text x="20" y="48" fill="#fca5a5" font-size="12" font-weight="bold">• Ventricular Diastole lasts 0.5 sec (0.1s Atrial Systole + 0.4s Joint Diastole)</text>
            <text x="20" y="71" fill="#38bdf8" font-size="12" font-weight="bold">• Passive ventricular filling = 70% (during Joint Diastole); Active filling = 30% (Atrial Systole)</text>
          </g>
        </svg>`,
        caption: "Figure 2: Time breakdown of cardiac cycle phases showing atrial and ventricular mechanical events.",
        guide: "High-Yield NEET Fact: Atrial diastole lasts 0.7 sec and Ventricular diastole lasts 0.5 sec during each 0.8 sec cycle."
      },
      importantPoints: [
        "70% of ventricular filling happens passively during Joint Diastole; Atrial Systole adds the remaining 30%.",
        "Atrial Diastole total duration = 0.7 seconds (0.3s Ventricular Systole + 0.4s Joint Diastole).",
        "Ventricular Diastole total duration = 0.5 seconds (0.1s Atrial Systole + 0.4s Joint Diastole)."
      ]
    },
    {
      heading: "4. Stroke Volume, Cardiac Output & Heart Sounds",
      paragraphs: [
        "Stroke Volume (SV): During each cardiac cycle, each ventricle pumps out approximately 70 mL of blood. This volume is called the Stroke Volume.",
        "End-Diastolic Volume (EDV): Volume of blood in ventricle at end of diastole (~120 mL).",
        "End-Systolic Volume (ESV): Residual volume remaining in ventricle after contraction (~50 mL).",
        "Formula: $Stroke Volume (SV) = EDV - ESV = 120\\text{ mL} - 50\\text{ mL} = 70\\text{ mL}$.",
        "Cardiac Output (CO): The volume of blood pumped by each ventricle per minute.",
        "Formula: $Cardiac Output = Stroke Volume \\times Heart Rate = 70\\text{ mL} \\times 72\\text{ beats/min} \\approx 5040\\text{ mL/min} \\approx 5\\text{ Liters/min}$.",
        "Physiological Alterations: Cardiac output is dynamic. In a trained athlete, stroke volume can increase to 100–120 mL, so cardiac output can reach 20–25 Liters/min during heavy exercise."
      ],
      tables: [
        {
          title: "Comparison of Heart Sounds (LUB vs DUB) — Clinical Features",
          headers: ["Feature", "First Heart Sound (LUB / S1)", "Second Heart Sound (DUB / S2)"],
          rows: [
            ["Cause of Sound", "Closure of AV valves (Tricuspid & Bicuspid)", "Closure of Semilunar valves (Aortic & Pulmonary)"],
            ["Timing in Cardiac Cycle", "Onset of Ventricular Systole", "Onset of Ventricular Diastole / End of Systole"],
            ["Pitch & Duration", "Low-pitched, booming, longer duration (~0.15 sec)", "High-pitched, sharp, shorter duration (~0.10 sec)"],
            ["Frequency Range", "25 – 45 Hz", "50 – 70 Hz"],
            ["Clinical Significance", "Defects cause AV regurgitation murmurs", "Defects cause semilunar stenosis / incompetence"]
          ]
        }
      ],
      importantPoints: [
        "Both heart sounds (LUB and DUB) are produced by VALVE CLOSURE, never by valve opening or blood flow.",
        "Cardiac output is identical for both right and left ventricles under normal physiological steady state.",
        "A stethoscope allows clinical detection of heart sounds to diagnose valvular disorders."
      ]
    },
    {
      heading: "5. Electrocardiogram (ECG) — Waves, Intervals & Clinical Interpretation",
      paragraphs: [
        "An Electrocardiogram (ECG) is a graphical recording of the electrical potential changes generated by the heart muscle during depolarization and repolarization phases of each cardiac cycle, recorded by an Electrocardiograph machine.",
        "Standard Lead Placement: To obtain a standard clinical ECG, three electrical leads are attached to the patient — one to each wrist and one to the left ankle.",
        "ECG Wave Component Analysis:",
        "1. P-Wave: Small upward wave representing Atrial Depolarization (electrical excitation of both atria leading to atrial contraction).",
        "2. QRS-Complex: Sharp prominent complex (Q wave negative, R wave high positive, S wave negative) representing Ventricular Depolarization (electrical excitation of ventricles leading to ventricular contraction starting shortly after Q).",
        "3. T-Wave: Smooth dome-shaped upward wave representing Ventricular Repolarization (return of ventricles from excited to normal relaxed state). End of T-wave marks the end of ventricular systole.",
        "Diagnostic Utility: By counting the number of QRS complexes in a given time period, an individual's heart rate can be determined. Deviations in shape or interval lengths indicate specific cardiac pathologies (e.g., elevated S-T segment indicates acute myocardial infarction / heart attack; enlarged P-wave indicates atrial enlargement)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="300" fill="#0f172a" rx="16"/>
          <text x="375" y="30" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">STANDARD ELECTROCARDIOGRAM (ECG) WAVEFORM</text>
          
          <!-- Grid Lines -->
          <g stroke="#1e293b" stroke-width="1">
            <line x1="50" y1="80" x2="700" y2="80"/>
            <line x1="50" y1="120" x2="700" y2="120"/>
            <line x1="50" y1="160" x2="700" y2="160"/>
            <line x1="50" y1="200" x2="700" y2="200"/>
          </g>

          <!-- Baseline Axis -->
          <line x1="50" y1="160" x2="700" y2="160" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 4"/>

          <!-- ECG Wave Path -->
          <path d="M 50 160 L 100 160 C 115 160, 125 120, 140 120 C 155 120, 165 160, 180 160 L 220 160 L 235 180 L 255 40 L 275 210 L 290 160 L 370 160 C 390 160, 410 100, 430 100 C 450 100, 470 160, 490 160 L 700 160" stroke="#4ade80" stroke-width="4" fill="none" stroke-linejoin="round"/>

          <!-- Labels -->
          <!-- P Wave -->
          <circle cx="140" cy="120" r="6" fill="#38bdf8"/>
          <text x="140" y="95" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">P Wave</text>
          <text x="140" y="240" fill="#cbd5e1" font-size="11" text-anchor="middle">Atrial Depolarization</text>

          <!-- QRS Complex -->
          <circle cx="255" cy="40" r="6" fill="#ef4444"/>
          <text x="255" y="25" fill="#ef4444" font-size="14" font-weight="bold" text-anchor="middle">QRS Complex</text>
          <text x="255" y="260" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">Ventricular Depolarization</text>
          <text x="255" y="275" fill="#cbd5e1" font-size="10" text-anchor="middle">(Determines Heart Rate!)</text>

          <!-- T Wave -->
          <circle cx="430" cy="100" r="6" fill="#f59e0b"/>
          <text x="430" y="75" fill="#f59e0b" font-size="14" font-weight="bold" text-anchor="middle">T Wave</text>
          <text x="430" y="240" fill="#cbd5e1" font-size="11" text-anchor="middle">Ventricular Repolarization</text>
        </svg>`,
        caption: "Figure 3: Graphical ECG wave components showing P-wave, QRS-complex, and T-wave corresponding to cardiac electrical events.",
        guide: "Remember: P-wave = Atrial Depolarization, QRS = Ventricular Depolarization, T-wave = Ventricular Repolarization. End of T-wave signals end of ventricular systole."
      },
      importantPoints: [
        "P-wave: Atrial Depolarization (excitation of atria).",
        "QRS-complex: Ventricular Depolarization (excitation of ventricles).",
        "T-wave: Ventricular Repolarization (relaxation of ventricles). End of T-wave marks end of systole.",
        "Counting QRS complexes in a given time interval determines Heart Rate."
      ]
    },
    {
      heading: "6. Double Circulation — Pulmonary, Systemic, Coronary & Hepatic Portal Systems",
      paragraphs: [
        "In humans, birds, and mammals, blood flows through the heart twice during a single complete circuit of the body, termed Double Circulation. This complete separation prevents any mixing of oxygenated and deoxygenated blood.",
        "1. Pulmonary Circulation: Deoxygenated blood from Right Ventricle → Pulmonary Artery → Lungs (oxygenation) → Pulmonary Veins → Left Atrium.",
        "2. Systemic Circulation: Oxygenated blood from Left Ventricle → Aorta → Arteries → Capillaries in Tissues → Veins → Vena Cava → Right Atrium. Systemic circulation supplies $O_2$, glucose, and essential nutrients to tissue cells and carries away $CO_2$ and metabolic wastes.",
        "Special Circulatory Circuits:",
        "• Coronary Circulation: Specialized system of coronary arteries and coronary veins that supplies oxygenated blood exclusively to cardiac muscle (myocardium) and drains deoxygenated blood into the right atrium via coronary sinus.",
        "• Hepatic Portal System: A unique vascular link where blood draining from the digestive tract (stomach and intestines) enters the Hepatic Portal Vein and flows through liver sinusoids before entering systemic circulation via hepatic veins. This ensures absorbed nutrients (glucose, amino acids) are processed and toxins filtered by liver hepatocytes first."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="300" fill="#0f172a" rx="16"/>
          <text x="375" y="28" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">SCHEMATIC DIAGRAM OF HUMAN DOUBLE CIRCULATION</text>
          
          <!-- Lungs Top -->
          <rect x="290" y="50" width="170" height="40" fill="#0284c7" rx="8"/>
          <text x="375" y="75" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">LUNGS (Gas Exchange)</text>

          <!-- Heart Center -->
          <rect x="260" y="120" width="230" height="80" fill="#1e293b" stroke="#ef4444" stroke-width="2" rx="12"/>
          <text x="375" y="145" fill="#f43f5e" font-size="15" font-weight="bold" text-anchor="middle">HUMAN HEART (4 Chambers)</text>
          <text x="315" y="175" fill="#60a5fa" font-size="11" text-anchor="middle">RA | RV</text>
          <text x="435" y="175" fill="#f472b6" font-size="11" text-anchor="middle">LA | LV</text>

          <!-- Body Tissues Bottom -->
          <rect x="290" y="230" width="170" height="40" fill="#15803d" rx="8"/>
          <text x="375" y="255" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">BODY TISSUES / ORGANS</text>

          <!-- Pulmonary Loop Lines -->
          <path d="M 315 120 L 315 90" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow-blue)"/>
          <text x="230" y="105" fill="#38bdf8" font-size="10">Pulmonary Artery</text>

          <path d="M 435 90 L 435 120" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow-pink)"/>
          <text x="445" y="105" fill="#f43f5e" font-size="10">Pulmonary Veins</text>

          <!-- Systemic Loop Lines -->
          <path d="M 435 200 L 435 230" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow-pink)"/>
          <text x="445" y="218" fill="#f43f5e" font-size="10">Systemic Aorta</text>

          <path d="M 315 230 L 315 200" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow-blue)"/>
          <text x="230" y="218" fill="#38bdf8" font-size="10">Vena Cava</text>

          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8"/></marker>
            <marker id="arrow-pink" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e"/></marker>
          </defs>
        </svg>`,
        caption: "Figure 4: Double circulation loops showing Pulmonary Circuit (Lungs) and Systemic Circuit (Body Tissues).",
        guide: "Observe that deoxygenated blood is pumped to lungs by Right Ventricle, while oxygenated blood is pumped to tissues by Left Ventricle."
      },
      importantPoints: [
        "Pulmonary Circulation: RV → Pulmonary Artery → Lungs → Pulmonary Veins → LA.",
        "Systemic Circulation: LV → Aorta → Body Tissues → Vena Cava → RA.",
        "Hepatic Portal Vein carries blood from intestine to liver BEFORE it enters systemic circulation."
      ]
    },
    {
      heading: "7. Neural & Hormonal Regulation of Cardiac Activity",
      paragraphs: [
        "Although the human heart is auto-rhythmic and myogenic, its rate and force of contraction are modulated neurally and hormonally to adapt to metabolic demands.",
        "Neural Control via Autonomic Nervous System (ANS): Controlled by the Cardiac Center in the Medulla Oblongata of the brainstem.",
        "1. Sympathetic Nervous System (SNS): Neural signals via sympathetic nerves release Norepinephrine (Noradrenaline) at cardiac receptors. This increases heart rate, speeds up SAN action potential generation, increases conduction velocity through AVN, and enhances ventricular contraction force, thereby increasing Cardiac Output.",
        "2. Parasympathetic Nervous System (PNS): Neural signals via Parasympathetic/Vagus (Xth cranial) nerves release Acetylcholine. This decreases heart rate, slows down SAN action potential firing, slows AVN conduction, and decreases cardiac output.",
        "Hormonal Regulation: Adrenal Medullary Hormones (Epinephrine / Adrenaline and Norepinephrine / Noradrenaline) released during emergency stress ('fight or flight') significantly increase heart rate, stroke volume, and cardiac output."
      ],
      importantPoints: [
        "Sympathetic stimulation = Increases Heart Rate, Conduction Speed & Cardiac Output.",
        "Parasympathetic / Vagus stimulation = Decreases Heart Rate & Cardiac Output.",
        "Adrenal medullary hormones (Epinephrine) increase heart rate and cardiac output during stress."
      ]
    },
    {
      heading: "8. Cardiovascular Disorders — Clinical Pathology",
      paragraphs: [
        "1. Hypertension (High Blood Pressure): Normal resting blood pressure is 120/80 mmHg (120 = Systolic pressure during ventricular contraction; 80 = Diastolic pressure during ventricular relaxation). If blood pressure repeatedly measures 140/90 mmHg or higher, it is diagnosed as Hypertension. Chronic hypertension damages vital organs like kidneys, brain (stroke), and heart.",
        "2. Coronary Artery Disease (CAD / Atherosclerosis): Caused by deposition of calcium, fat, cholesterol, and fibrous tissue in coronary arteries supplying heart muscle. This narrows the arterial lumen, reducing blood flow to myocardium.",
        "3. Angina Pectoris ('Chest Pain'): Acute severe chest pain occurring when insufficient oxygen reaches heart muscle (ischemia). Common in elderly individuals with narrowed coronary arteries.",
        "4. Heart Failure: A state where the heart fails to pump blood effectively to meet the metabolic demands of the body. Often called Congestive Heart Failure because lung congestion is a primary symptom.",
        "5. Cardiac Arrest: Complete, abrupt cessation of heartbeat where the heart stops pumping completely.",
        "6. Heart Attack (Myocardial Infarction): Sudden death of a segment of cardiac muscle tissue due to acute lack of blood supply (coronary artery thrombosis)."
      ],
      tables: [
        {
          title: "Differential Diagnosis of Major Cardiovascular Disorders — NEET Highlights",
          headers: ["Condition", "Primary Pathological Mechanism", "Key Clinical Symptom / Feature", "NEET High-Yield Diagnostic Identifier"],
          rows: [
            ["Hypertension", "Persistent BP >= 140/90 mmHg", "Headache, dizziness, renal & brain damage", "120 = Systolic; 80 = Diastolic pressure limits"],
            ["CAD / Atherosclerosis", "Lumen narrowing via fat/calcium/cholesterol deposition", "Reduced coronary blood flow to myocardium", "Affects vessels supplying blood to heart muscle"],
            ["Angina Pectoris", "Transient myocardial ischemia (O2 demand > supply)", "Acute crushing retrosternal chest pain", "Symptom of CAD; occurs during exertion"],
            ["Heart Failure", "Inability of heart to pump sufficient blood volume", "Lung congestion, fluid retention (edema)", "Also termed Congestive Heart Failure"],
            ["Cardiac Arrest", "Sudden cessation of cardiac electrical rhythm", "Heart stops beating entirely; loss of pulse", "Total failure of cardiac impulse generation"],
            ["Heart Attack (MI)", "Sudden cardiac muscle necrosis due to ischemia", "Irreversible muscle cell death, severe chest pain", "Segmental cardiac muscle damage due to blood clot"]
          ]
        }
      ],
      importantPoints: [
        "Normal BP = 120/80 mmHg; Hypertension = 140/90 mmHg or higher.",
        "CAD is caused by deposits of calcium, fat, cholesterol, and fibrous tissues in coronary arteries.",
        "Distinguish: Heart Failure (pumps inefficiently) vs Cardiac Arrest (stops beating) vs Heart Attack (muscle damage)."
      ]
    }
  ],

  formulae: [
    {
      title: "Cardiac Cycle Duration Formula",
      formula: "\\text{Cardiac Cycle Duration} = \\frac{60 \\text{ seconds}}{\\text{Heart Rate (beats/min)}} = \\frac{60}{72} = 0.8 \\text{ seconds}",
      meaning: "Calculates the total time allocated to one complete cardiac cycle at a given heart rate.",
      whenToUse: "Use to calculate cycle length when heart rate changes (e.g. during tachycardia or bradycardia)."
    },
    {
      title: "Stroke Volume Formula",
      formula: "\\text{Stroke Volume (SV)} = \\text{End-Diastolic Volume (EDV)} - \\text{End-Systolic Volume (ESV)} = 120 \\text{ mL} - 50 \\text{ mL} = 70 \\text{ mL}",
      meaning: "Measures blood ejected per ventricle per contraction.",
      whenToUse: "Use when EDV and ESV values are provided in physiological problems."
    },
    {
      title: "Cardiac Output Formula",
      formula: "\\text{Cardiac Output (CO)} = \\text{Stroke Volume (SV)} \\times \\text{Heart Rate (HR)} = 70 \\text{ mL} \\times 72 \\text{ beats/min} = 5040 \\text{ mL/min} \\approx 5 \\text{ L/min}",
      meaning: "Measures total blood volume pumped by each ventricle per minute.",
      whenToUse: "Use in numerical questions calculating cardiac performance or exercise output."
    }
  ],

  neetImportantPoints: [
    "🔥 Human heart is myogenic and auto-rhythmic; SAN is the natural pacemaker (70–75 impulses/min).",
    "🔥 Cardiac cycle duration = 0.8 seconds (0.1s Atrial Systole + 0.3s Ventricular Systole + 0.4s Joint Diastole).",
    "🔥 Stroke Volume = ~70 mL; Cardiac Output = SV × HR ≈ 5 Liters/min.",
    "🔥 First heart sound 'LUB' is caused by closure of AV valves (Tricuspid and Bicuspid) at start of ventricular systole.",
    "🔥 Second heart sound 'DUB' is caused by closure of Semilunar valves at start of ventricular diastole.",
    "🔥 ECG waves: P-wave (Atrial Depolarization), QRS-complex (Ventricular Depolarization), T-wave (Ventricular Repolarization).",
    "🔥 Number of QRS complexes in a given time interval determines Heart Rate.",
    "🔥 Hepatic Portal Vein carries blood from gastrointestinal tract to liver BEFORE returning to systemic circulation.",
    "🔥 Sympathetic nerves increase heart rate and contraction force; Parasympathetic (vagus) nerves decrease heart rate.",
    "🔥 Hypertension is diagnosed when blood pressure consistently measures 140/90 mmHg or higher.",
    "🔥 CAD (Atherosclerosis) is caused by calcium, fat, cholesterol, and fibrous tissue deposition in coronary arteries.",
    "🔥 Congestive Heart Failure is characterized by lung congestion and inefficient blood pumping."
  ],

  commonConfusions: [
    {
      commonConfusion: "Believing heart sounds are caused by opening of valves or blood flowing through chambers.",
      correctFact: "Heart sounds are produced EXCLUSIVELY by the sudden CLOSURE of heart valves (LUB = AV valve closure; DUB = Semilunar valve closure). Opening of normal valves is silent.",
      whyItMattersForNEET: "Frequently tested in statement-verification and assertion-reason questions in NEET."
    },
    {
      commonConfusion: "Confusing Heart Failure, Cardiac Arrest, and Heart Attack.",
      correctFact: "Heart Failure = heart pumps insufficiently to meet body needs; Cardiac Arrest = heart stops beating completely; Heart Attack = death of cardiac muscle due to inadequate blood supply.",
      whyItMattersForNEET: "A favorite conceptual distinction tested by NTA in NEET UG."
    },
    {
      commonConfusion: "Assuming T-wave represents ventricular contraction.",
      correctFact: "T-wave represents Ventricular REPOLARIZATION (relaxation). End of T-wave marks the end of ventricular systole.",
      whyItMattersForNEET: "Critical for matching ECG waves to cardiac mechanical events."
    },
    {
      commonConfusion: "Thinking the parasympathetic nervous system increases heart rate.",
      correctFact: "Sympathetic stimulation INCREASES heart rate and cardiac output. Parasympathetic (Vagus) stimulation DECREASES heart rate and cardiac output.",
      whyItMattersForNEET: "Direct question on neural regulation of cardiac activity."
    }
  ],

  quickRevision: [
    "Heart: 4-chambered, myogenic, enclosed in double-walled pericardium.",
    "SAN (Pacemaker): Upper Right Atrium, generates 70-75 action potentials/min.",
    "Conduction Pathway: SAN → AVN → Bundle of His → Right & Left Bundle Branches → Purkinje Fibers.",
    "Cardiac Cycle: 0.8s total duration. Joint Diastole (0.4s), Atrial Systole (0.1s), Ventricular Systole (0.3s).",
    "Stroke Volume = 70 mL. Cardiac Output = 70 mL × 72 = ~5 L/min.",
    "LUB = Closure of AV valves (start of Vent. Systole). DUB = Closure of Semilunar valves (end of Vent. Systole).",
    "ECG: P-wave (Atrial Depolarization), QRS (Ventricular Depolarization - measures HR), T-wave (Ventricular Repolarization).",
    "Double Circulation: Pulmonary (RV → Lungs → LA) and Systemic (LV → Body → RA).",
    "Hepatic Portal Vein: Gut → Liver → Systemic circulation.",
    "Regulation: Sympathetic (Increases HR), Parasympathetic (Decreases HR), Adrenaline (Increases HR).",
    "Disorders: Hypertension (>= 140/90), CAD (artery deposits), Angina (ischemic chest pain), Heart Failure (pumping failure + lung congestion)."
  ],

  practiceQuestions: [
    {
      id: "prac-cardiac-1",
      question: "NEET-Style Practice Question — NOT A PYQ: An individual has a resting heart rate of 75 beats per minute and an end-diastolic volume of 130 mL with an end-systolic volume of 60 mL. What is this individual's cardiac output?",
      options: [
        "4.5 Liters / min",
        "5.25 Liters / min",
        "5.85 Liters / min",
        "9.75 Liters / min"
      ],
      correctAnswerIndex: 1,
      explanation: "Step 1: Calculate Stroke Volume (SV) = End-Diastolic Volume - End-Systolic Volume = 130 mL - 60 mL = 70 mL.\nStep 2: Calculate Cardiac Output (CO) = Stroke Volume × Heart Rate = 70 mL × 75 beats/min = 5250 mL/min = 5.25 Liters/min.",
      conceptTested: "Calculation of stroke volume and cardiac output from EDV, ESV, and Heart Rate"
    },
    {
      id: "prac-cardiac-2",
      question: "NEET-Style Practice Question — NOT A PYQ: Which of the following events occurs simultaneously at the onset of ventricular systole?",
      options: [
        "Opening of AV valves and production of 'DUB' sound",
        "Closure of AV valves and production of 'LUB' sound",
        "Opening of Semilunar valves and production of 'LUB' sound",
        "Closure of Semilunar valves and production of 'DUB' sound"
      ],
      correctAnswerIndex: 1,
      explanation: "At the onset of ventricular systole, rising intra-ventricular pressure forces the AV valves (Tricuspid and Bicuspid) to snap shut, producing the first heart sound ('LUB'). Semilunar valves open later during ventricular systole when pressure exceeds arterial pressure.",
      conceptTested: "Mechanism and timing of first heart sound LUB"
    },
    {
      id: "prac-cardiac-3",
      question: "NEET-Style Practice Question — NOT A PYQ: Stimulation of the vagus nerve (parasympathetic system) affects heart function by doing which of the following?",
      options: [
        "Increasing heart rate and ventricular contraction force",
        "Decreasing heart rate and speed of action potential conduction",
        "Increasing action potential generation at SAN without altering AVN speed",
        "Promoting secretion of epinephrine from adrenal medulla"
      ],
      correctAnswerIndex: 1,
      explanation: "Parasympathetic neural signals (mediated via vagus nerve and acetylcholine) decrease the rate of action potential generation at the SAN and slow down conduction speed through the AVN, thereby decreasing heart rate and cardiac output.",
      conceptTested: "Neural regulation of cardiac activity via autonomic nervous system"
    }
  ],

  pyqs: [
    {
      id: "pyq-cardiac-2022",
      year: 2022,
      exam: "NEET UG",
      question: "Which wave in a standard ECG represents the depolarization of the ventricles?",
      options: [
        "P-wave",
        "QRS complex",
        "T-wave",
        "S-T segment"
      ],
      correctAnswerIndex: 1,
      explanation: "In a standard ECG waveform, the P-wave represents atrial depolarization, the QRS complex represents ventricular depolarization, and the T-wave represents ventricular repolarization.",
      conceptTested: "Interpretation of ECG wave components",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2022 Official Question Paper"
    },
    {
      id: "pyq-cardiac-2020",
      year: 2020,
      exam: "NEET UG",
      question: "Match Column-I with Column-II and select the correct option:\nColumn-I: (A) P-wave, (B) QRS complex, (C) T-wave, (D) Reduction in size of T-wave\nColumn-II: (i) Depolarization of ventricles, (ii) Repolarization of ventricles, (iii) Coronary ischemia, (iv) Depolarization of atria",
      options: [
        "(A)-(iv), (B)-(i), (C)-(ii), (D)-(iii)",
        "(A)-(iv), (B)-(ii), (C)-(i), (D)-(iii)",
        "(A)-(i), (B)-(iv), (C)-(ii), (D)-(iii)",
        "(A)-(ii), (B)-(i), (C)-(iv), (D)-(iii)"
      ],
      correctAnswerIndex: 0,
      explanation: "P-wave (A) = Depolarization of atria (iv). QRS complex (B) = Depolarization of ventricles (i). T-wave (C) = Repolarization of ventricles (ii). Reduction/inversion of T-wave (D) indicates coronary ischemia (iii).",
      conceptTested: "ECG waves matching and clinical significance",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2020 Official Question Paper"
    },
    {
      id: "pyq-cardiac-2019",
      year: 2019,
      exam: "NEET UG",
      question: "What would be the cardiac output of a person having a stroke volume of 50 mL and a heart rate of 72 beats per minute?",
      options: [
        "3600 mL",
        "7200 mL",
        "5000 mL",
        "2800 mL"
      ],
      correctAnswerIndex: 0,
      explanation: "Cardiac Output = Stroke Volume × Heart Rate = 50 mL × 72 beats/min = 3600 mL/min (3.6 Liters/min).",
      conceptTested: "Calculation of Cardiac Output",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2019 Official Question Paper"
    }
  ],

  neetMarksPotential: {
    averageQuestionsPerYear: 3,
    scoreWeightage: "12 Marks",
    difficultyRating: "Medium",
    highYieldStatus: true
  }
};
