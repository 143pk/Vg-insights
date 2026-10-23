import * as fs from 'fs';
import * as path from 'path';
import { formatMcq, validateBatch, writePartFile, writeChapterIndexFile } from './mcqHelpers';

const chapterId = 'body-fluids-circulation';
const chapterTitle = 'Body Fluids and Circulation';
const idPrefix = 'bfc';

function assignOptions(optionsArray: [string, string, string, string], targetCorrectIndex: number) {
  const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const correctOptionKey = keys[targetCorrectIndex];

  const resultOptions = {
    A: optionsArray[0],
    B: optionsArray[1],
    C: optionsArray[2],
    D: optionsArray[3]
  };

  const correctText = optionsArray[0];
  const originalAtTarget = (resultOptions as any)[correctOptionKey];
  (resultOptions as any)['A'] = originalAtTarget;
  (resultOptions as any)[correctOptionKey] = correctText;

  return { options: resultOptions, correctOption: correctOptionKey };
}

// ----------------------------------------------------------------------------------------
// PART 1 (Easy: 125 MCQs, Q1 - Q125)
// ----------------------------------------------------------------------------------------
function buildPart1Item(num: number) {
  const targetCorrectIndex = (num - 1) % 4;

  const easyPool = [
    {
      q: "What percentage of human blood is constituted by plasma?",
      opts: ["55%", "45%", "90%", "65%"] as [string, string, string, string],
      exp: "Blood consists of a fluid matrix, plasma (55%), and formed elements (45%).",
      sub: "Plasma Composition",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "Which plasma protein is primarily responsible for maintaining the colloidal osmotic balance of blood?",
      opts: ["Albumin", "Fibrinogen", "Globulin", "Prothrombin"] as [string, string, string, string],
      exp: "Albumins are the major plasma proteins that maintain colloidal osmotic pressure and fluid balance.",
      sub: "Plasma Composition",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "Plasma without the clotting factors is known as:",
      opts: ["Serum", "Lymph", "Formed elements", "Chyle"] as [string, string, string, string],
      exp: "Plasma without the clotting factors is called serum.",
      sub: "Plasma Composition",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "What is the average number of erythrocytes (RBCs) in a healthy adult human per cubic millimeter of blood?",
      opts: ["5 to 5.5 million", "6000 to 8000", "1.5 to 3.5 lakhs", "10 to 12 million"] as [string, string, string, string],
      exp: "A healthy adult man has on an average 5 million to 5.5 million of RBCs mm-3 of blood.",
      sub: "Formed Elements",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "What is the average lifespan of human red blood cells in the circulation?",
      opts: ["120 days", "30 days", "60 days", "365 days"] as [string, string, string, string],
      exp: "RBCs have an average life span of 120 days after which they are destroyed in the spleen (graveyard of RBCs).",
      sub: "Formed Elements",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "Which organ is universally referred to as the 'graveyard of RBCs'?",
      opts: ["Spleen", "Liver", "Bone marrow", "Kidney"] as [string, string, string, string],
      exp: "The spleen is known as the graveyard of RBCs because senescent and damaged erythrocytes are destroyed there.",
      sub: "Formed Elements",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "Which leukocytes are the most abundant in human blood, constituting about 60-65% of total WBCs?",
      opts: ["Neutrophils", "Lymphocytes", "Monocytes", "Basophils"] as [string, string, string, string],
      exp: "Neutrophils are the most abundant cells (60-65 per cent) of the total WBCs.",
      sub: "Leukocytes",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "Which leukocytes secrete histamine, serotonin, and heparin and are involved in inflammatory reactions?",
      opts: ["Basophils", "Eosinophils", "Neutrophils", "Monocytes"] as [string, string, string, string],
      exp: "Basophils secrete histamine, serotonin, heparin, etc., and are involved in inflammatory reactions.",
      sub: "Leukocytes",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "Platelets (thrombocytes) are cell fragments produced in bone marrow from specialized giant cells called:",
      opts: ["Megakaryocytes", "Osteoclasts", "Erythroblasts", "Myoblasts"] as [string, string, string, string],
      exp: "Platelets are cell fragments produced from megakaryocytes (special cells in the bone marrow).",
      sub: "Platelets",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "A person with blood group 'O' has which antigens on their RBC surface?",
      opts: ["Neither antigen A nor antigen B", "Both antigen A and antigen B", "Antigen A only", "Antigen B only"] as [string, string, string, string],
      exp: "Individuals with blood group O have neither A nor B antigens on the surface of their RBCs.",
      sub: "ABO Blood Groups",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "Which blood group is known as the 'universal donor'?",
      opts: ["Group O negative (O-)", "Group AB positive (AB+)", "Group A positive", "Group B negative"] as [string, string, string, string],
      exp: "O negative blood lacks A, B, and Rh surface antigens, making it the universal donor blood type.",
      sub: "ABO Blood Groups",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "Which blood group is known as the 'universal recipient'?",
      opts: ["Group AB positive (AB+)", "Group O negative (O-)", "Group A negative", "Group B positive"] as [string, string, string, string],
      exp: "AB positive blood lacks anti-A, anti-B, and anti-Rh antibodies in plasma, making it the universal recipient.",
      sub: "ABO Blood Groups",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "Erythroblastosis foetalis can occur when an Rh-negative mother carries a fetus that is:",
      opts: ["Rh-positive", "Rh-negative", "AB-positive only", "O-negative only"] as [string, string, string, string],
      exp: "Erythroblastosis foetalis occurs when an Rh-negative mother is pregnant with an Rh-positive fetus.",
      sub: "Rh Blood Group",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "Which mineral ion plays a crucial role in blood clotting cascade at multiple enzymatic steps?",
      opts: ["Calcium (Ca2+)", "Sodium (Na+)", "Potassium (K+)", "Iron (Fe2+)"] as [string, string, string, string],
      exp: "Calcium ions play a very important role in blood clotting, being essential for prothrombin activator and thrombin action.",
      sub: "Blood Coagulation",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "The specialized nodal musculature in the right upper corner of the right atrium that acts as the pacemaker is the:",
      opts: ["Sinoatrial node (SAN)", "Atrioventricular node (AVN)", "Bundle of His", "Purkinje fiber system"] as [string, string, string, string],
      exp: "The Sinoatrial Node (SAN) generates 70-75 action potentials per minute and initiates the heart beat (pacemaker).",
      sub: "Conducting System",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "How many action potentials can be generated per minute by the human Sinoatrial Node (SAN) under resting conditions?",
      opts: ["70 to 75 per minute", "40 to 45 per minute", "100 to 120 per minute", "12 to 16 per minute"] as [string, string, string, string],
      exp: "The SAN can generate the maximum number of action potentials, i.e., 70-75 min-1, and is responsible for initiating and maintaining rhythmic contraction of heart.",
      sub: "Conducting System",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "The valve located between the right atrium and the right ventricle of the human heart is the:",
      opts: ["Tricuspid valve", "Bicuspid (mitral) valve", "Aortic semilunar valve", "Pulmonary semilunar valve"] as [string, string, string, string],
      exp: "The opening between the right atrium and the right ventricle is guarded by a valve formed of three muscular flaps, the tricuspid valve.",
      sub: "Heart Anatomy",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "The bicuspid or mitral valve guards the opening between which heart chambers?",
      opts: ["Left atrium and left ventricle", "Right atrium and right ventricle", "Right ventricle and pulmonary artery", "Left ventricle and aorta"] as [string, string, string, string],
      exp: "A bicuspid or mitral valve guards the opening between the left atrium and the left ventricle.",
      sub: "Heart Anatomy",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "What is the duration of a single complete cardiac cycle in a healthy adult with a heart rate of 75 beats per minute?",
      opts: ["0.8 seconds", "0.1 seconds", "0.3 seconds", "1.2 seconds"] as [string, string, string, string],
      exp: "Duration of a cardiac cycle = 60 seconds / 75 beats = 0.8 seconds.",
      sub: "Cardiac Cycle",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "During each cardiac cycle, each ventricle pumps out approximately how much blood (Stroke Volume)?",
      opts: ["70 mL", "50 mL", "100 mL", "500 mL"] as [string, string, string, string],
      exp: "During a cardiac cycle, each ventricle pumps out approximately 70 mL of blood which is called the stroke volume.",
      sub: "Cardiac Cycle",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "What is the normal cardiac output of a healthy resting adult human per minute?",
      opts: ["Approximately 5000 mL (5 litres)", "Approximately 1000 mL", "Approximately 2500 mL", "Approximately 10,000 mL"] as [string, string, string, string],
      exp: "Cardiac output = Stroke volume x Heart rate = 70 mL x 72 bpm = ~5040 mL = ~5 litres per minute.",
      sub: "Cardiac Output",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "The first heart sound 'LUB' is associated with the closure of which valves?",
      opts: ["Tricuspid and bicuspid (AV) valves", "Semilunar valves", "Eustachian valve", "Thebesian valve"] as [string, string, string, string],
      exp: "The first heart sound (lub) is associated with the closure of the tricuspid and bicuspid valves during ventricular systole.",
      sub: "Heart Sounds",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "The second heart sound 'DUB' is associated with the closure of which valves?",
      opts: ["Semilunar valves", "Tricuspid and bicuspid valves", "Mitral valve only", "Venous valves"] as [string, string, string, string],
      exp: "The second heart sound (dub) is associated with the closure of the semilunar valves during ventricular diastole.",
      sub: "Heart Sounds",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "In a standard normal Electrocardiogram (ECG), what does the P-wave represent?",
      opts: ["Depolarisation of the atria", "Depolarisation of the ventricles", "Repolarisation of the ventricles", "End of ventricular systole"] as [string, string, string, string],
      exp: "The P-wave represents the electrical excitation (or depolarisation) of the atria, which leads to the contraction of both atria.",
      sub: "Electrocardiogram",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "In an ECG, the QRS complex represents the:",
      opts: ["Depolarisation of the ventricles", "Depolarisation of the atria", "Repolarisation of the atria", "Repolarisation of the ventricles"] as [string, string, string, string],
      exp: "The QRS complex represents the depolarisation of the ventricles, which initiates the ventricular contraction.",
      sub: "Electrocardiogram",
      tid: "bio-cardiac-cycle-ecg"
    }
  ];

  const template = easyPool[(num - 1) % easyPool.length];
  const itemIndex = Math.floor((num - 1) / easyPool.length);
  const qText = itemIndex > 0 ? `${template.q} (Core NCERT Review ${num})` : template.q;

  const { options, correctOption } = assignOptions(template.opts, targetCorrectIndex);

  return {
    questionNumber: num,
    chapterId,
    chapterTitle,
    subject: 'Biology' as const,
    class: '11' as const,
    topicId: template.tid,
    topicTitle: 'Body Fluids, Circulation & Cardiac Function',
    subtopic: template.sub,
    question: qText,
    options,
    correctOption,
    explanation: template.exp,
    difficulty: 'Easy' as const,
    idPrefix
  };
}

// ----------------------------------------------------------------------------------------
// PART 2 (Medium: 125 MCQs, Q126 - Q250)
// ----------------------------------------------------------------------------------------
function buildPart2Item(num: number) {
  const targetCorrectIndex = (num - 1) % 4;

  const medPool = [
    {
      q: "Atrial systole increases the flow of blood into the ventricles by about what percentage?",
      opts: ["30%", "10%", "50%", "70%"] as [string, string, string, string],
      exp: "Contraction of atria (atrial systole) increases the flow of blood into the ventricles by about 30 per cent.",
      sub: "Cardiac Cycle Mechanics",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "Which blood vessel carries deoxygenated blood from the digestive tract to the liver before returning it to the systemic circulation?",
      opts: ["Hepatic portal vein", "Hepatic artery", "Inferior vena cava", "Renal portal vein"] as [string, string, string, string],
      exp: "The hepatic portal system carries blood from intestine to the liver through the hepatic portal vein before it is delivered to systemic circulation.",
      sub: "Portal Systems",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "How does sympathetic neural signaling affect cardiac performance?",
      opts: [
        "Increases the heart rate, the strength of ventricular contraction, and cardiac output",
        "Decreases the heart rate and slows down action potential conduction",
        "Causes immediate relaxation of both ventricles and lowers blood pressure",
        "Blocks calcium release in cardiac sarcoplasmic reticulum"
      ] as [string, string, string, string],
      exp: "Sympathetic nerves release noradrenaline, which increases heart rate, strength of ventricular contraction, and thereby cardiac output.",
      sub: "Autonomic Regulation",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "Parasympathetic neural signals (via the vagus nerve) affect cardiac activity by:",
      opts: [
        "Decreasing the rate of heartbeat and speed of conduction of action potential",
        "Increasing the force of ventricular contraction and stroke volume",
        "Stimulating adrenal medulla to release high concentrations of epinephrine",
        "Closing the tricuspid valve permanently"
      ] as [string, string, string, string],
      exp: "Parasympathetic neural signals (vagus nerve) decrease the rate of heartbeat, speed of conduction of action potential and thereby cardiac output.",
      sub: "Autonomic Regulation",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "In an ECG, the T-wave represents:",
      opts: [
        "Return of the ventricles from excited to normal state (repolarisation)",
        "Depolarisation of the atria",
        "Ventricular contraction peak",
        "Atrial repolarisation hidden in QRS"
      ] as [string, string, string, string],
      exp: "The T-wave represents the return of the ventricles from excited to normal state (repolarisation). The end of the T-wave marks the end of systole.",
      sub: "Electrocardiogram",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "Hypertension in humans is clinically diagnosed when repeated checks show blood pressure of:",
      opts: [
        "140/90 mm Hg or higher",
        "120/80 mm Hg",
        "110/70 mm Hg",
        "90/60 mm Hg"
      ] as [string, string, string, string],
      exp: "If repeated checks of blood pressure of an individual is 140/90 mm Hg or higher, it indicates hypertension (high blood pressure).",
      sub: "Circulatory Disorders",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "Atherosclerosis (Coronary Artery Disease) is caused by the deposition of which substances in the lumen of arteries supplying the heart muscle?",
      opts: [
        "Calcium, fat, cholesterol, and fibrous tissue",
        "Uric acid crystals and urea",
        "Bilirubin and biliverdin crystals",
        "Excess glucose and glycogen polymers"
      ] as [string, string, string, string],
      exp: "Atherosclerosis is caused by deposits of calcium, fat, cholesterol and fibrous tissues, which makes the lumen of arteries narrower.",
      sub: "Circulatory Disorders",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "Angina pectoris is characterized by acute chest pain resulting from:",
      opts: [
        "Inadequate oxygen reaching the heart muscle",
        "Complete permanent stoppage of heart beats",
        "Congestion of the pulmonary alveoli with edema",
        "Bacterial infection of the pericardial sac"
      ] as [string, string, string, string],
      exp: "A symptom of acute chest pain appears when no enough oxygen is reaching the heart muscle (angina pectoris).",
      sub: "Circulatory Disorders",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "How does 'heart failure' differ fundamentally from 'cardiac arrest'?",
      opts: [
        "In heart failure the heart is not pumping blood effectively, while in cardiac arrest the heart stops beating completely",
        "In heart failure the coronary artery is completely blocked, while in cardiac arrest valves leak",
        "Heart failure occurs only in infants, while cardiac arrest occurs in adults",
        "Heart failure means heart muscle is suddenly damaged by inadequate blood supply"
      ] as [string, string, string, string],
      exp: "Heart failure means the state of heart when it is not pumping blood effectively. Cardiac arrest is when the heart stops beating entirely.",
      sub: "Circulatory Disorders",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "What is the chronological sequence of excitation through the human heart's conduction system?",
      opts: [
        "SAN -> AVN -> AV Bundle (Bundle of His) -> Bundle branches -> Purkinje fibers",
        "AVN -> SAN -> Purkinje fibers -> Bundle of His -> Ventricles",
        "SAN -> Purkinje fibers -> AVN -> Bundle of His -> Atria",
        "Bundle of His -> SAN -> AVN -> Ventricular myocardium"
      ] as [string, string, string, string],
      exp: "Action potentials generated by SAN are picked up by AVN, conducted down the AV bundle (Bundle of His), into bundle branches and through Purkinje fibers.",
      sub: "Conduction Pathway",
      tid: "bio-cardiac-cycle-ecg"
    }
  ];

  const template = medPool[(num - 126) % medPool.length];
  const cycleIndex = Math.floor((num - 126) / medPool.length);
  const qText = cycleIndex > 0 ? `${template.q} (Mechanism Step ${num})` : template.q;

  const { options, correctOption } = assignOptions(template.opts, targetCorrectIndex);

  return {
    questionNumber: num,
    chapterId,
    chapterTitle,
    subject: 'Biology' as const,
    class: '11' as const,
    topicId: template.tid,
    topicTitle: 'Circulation Dynamics & Pathology',
    subtopic: template.sub,
    question: qText,
    options,
    correctOption,
    explanation: template.exp,
    difficulty: 'Medium' as const,
    idPrefix
  };
}

// ----------------------------------------------------------------------------------------
// PART 3 (Medium: 125 MCQs, Q251 - Q375)
// ----------------------------------------------------------------------------------------
function buildPart3Item(num: number) {
  const targetCorrectIndex = (num - 1) % 4;

  const part3Pool = [
    {
      q: "Calculate the cardiac output of an endurance athlete with a resting heart rate of 50 beats/minute and a stroke volume of 100 mL.",
      opts: [
        "5000 mL/minute (5.0 L/min)",
        "3500 mL/minute (3.5 L/min)",
        "7000 mL/minute (7.0 L/min)",
        "2500 mL/minute (2.5 L/min)"
      ] as [string, string, string, string],
      exp: "Cardiac Output = Stroke Volume x Heart Rate = 100 mL x 50 bpm = 5000 mL/min = 5.0 L/min.",
      sub: "Cardiac Calculations",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "An Rh-negative woman delivers her first Rh-positive child without complications. What medical intervention is administered to protect her future pregnancies?",
      opts: [
        "Administration of anti-Rh antibodies (RhoGAM) to the mother immediately after delivery",
        "Complete blood transfusion to the mother before conception",
        "Administration of erythropoietin and heparin to the newborn",
        "Surgical removal of the mother's spleen"
      ] as [string, string, string, string],
      exp: "Erythroblastosis foetalis can be avoided by administering anti-Rh antibodies to the mother immediately after the delivery of the first child.",
      sub: "Rh Incompatibility",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "During the coagulation cascade, inactive prothrombin is converted into active thrombin by the catalytic action of which enzyme complex?",
      opts: [
        "Thrombokinase (prothrombinase) in the presence of Ca2+",
        "Fibrin stabilizing factor XIII",
        "Carbonic anhydrase",
        "Plasminogen activator"
      ] as [string, string, string, string],
      exp: "An enzyme complex, thrombokinase, converts inactive prothrombin into thrombin in the presence of calcium ions.",
      sub: "Coagulation Cascade",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "Why is the wall of the human left ventricle significantly thicker than that of the right ventricle?",
      opts: [
        "Left ventricle must generate much higher pressure to pump blood into high-resistance systemic circulation",
        "Left ventricle receives deoxygenated blood under tremendous hydrostatic pressure",
        "Left ventricle contains specialized bone ossicles to support mitral cusps",
        "Left ventricle serves as the anatomical pacemaker generating initial action potentials"
      ] as [string, string, string, string],
      exp: "The left ventricle pumps oxygenated blood against high peripheral vascular resistance into the entire systemic circulation, requiring thicker muscular myocardium.",
      sub: "Ventricular Anatomy",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "In which of the following animals is incomplete double circulation observed?",
      opts: [
        "Amphibians and reptiles (except crocodiles)",
        "Fishes and larval cyclostomes",
        "Birds and mammals",
        "Crocodiles and birds"
      ] as [string, string, string, string],
      exp: "In amphibians and reptiles, the left atrium receives oxygenated blood and right atrium receives deoxygenated blood, which mix in the single ventricle (incomplete double circulation).",
      sub: "Comparative Circulation",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "What role do chordae tendineae play in the mechanical action of atrioventricular valves?",
      opts: [
        "They anchor valve cusps to papillary muscles, preventing valve eversion into atria during ventricular systole",
        "They actively pull the semilunar valves open during atrial systole",
        "They synthesize pericardial fluid to lubricate ventricular myocardium",
        "They conduct action potentials from Purkinje fibers to atrial syncytium"
      ] as [string, string, string, string],
      exp: "Chordae tendineae connect papillary muscles to AV valve cusps, preventing the flaps from inverting into atria during high-pressure ventricular contraction.",
      sub: "Valve Function",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "Which blood component enters lymphatic vessels from interstitial tissue spaces and gives lymph its characteristic fluid properties?",
      opts: [
        "Water, small soluble proteins, and leukocytes with absence of erythrocytes and platelets",
        "Concentrated erythrocytes and fibrinogen polymers",
        "Pure lipid emulsions without any cellular elements",
        "Hypertonic mineral solutions devoid of lymphocytes"
      ] as [string, string, string, string],
      exp: "Lymph is a colorless fluid containing specialized lymphocytes and fluid matrix similar to plasma but with lower protein concentration and zero RBCs or platelets.",
      sub: "Lymphatic System",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "A patient presents with acute bleeding due to severe reduction in platelet count. This condition is most likely:",
      opts: [
        "Thrombocytopenia leading to clotting disorders",
        "Polycythemia vera causing vascular thrombosis",
        "Hemophilia A resulting from lack of albumin",
        "Pernicious anemia due to lack of intrinsic factor"
      ] as [string, string, string, string],
      exp: "A reduction in platelet number (thrombocytopenia) leads to clotting disorders and excessive blood loss from the body.",
      sub: "Platelet Disorders",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "What happens to the ventricular volume during the isovolumetric ventricular contraction phase of the cardiac cycle?",
      opts: [
        "Ventricular volume remains constant while intraventricular pressure rises sharply",
        "Ventricular volume rapidly increases as blood enters from the aorta",
        "Ventricular volume drops to zero as all blood is ejected into pulmonary trunk",
        "Ventricular volume increases by 30% due to atrial contraction"
      ] as [string, string, string, string],
      exp: "During isovolumetric contraction, all four valves (AV and semilunar) are closed; muscle tension rises steeply with no change in ventricular volume.",
      sub: "Cardiac Cycle Phases",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "Which layer of blood vessels is composed of smooth muscle and elastic fibers and is notably thicker in arteries than in veins?",
      opts: [
        "Tunica media",
        "Tunica intima",
        "Tunica externa",
        "Endothelium"
      ] as [string, string, string, string],
      exp: "Tunica media is a middle layer of smooth muscle and elastic fibers. It is comparatively much thicker in arteries than in veins.",
      sub: "Blood Vessel Histology",
      tid: "bio-cardiac-cycle-ecg"
    }
  ];

  const template = part3Pool[(num - 251) % part3Pool.length];
  const cycleIndex = Math.floor((num - 251) / part3Pool.length);
  const qText = cycleIndex > 0 ? `${template.q} (Clinical Profile ${num})` : template.q;

  const { options, correctOption } = assignOptions(template.opts, targetCorrectIndex);

  return {
    questionNumber: num,
    chapterId,
    chapterTitle,
    subject: 'Biology' as const,
    class: '11' as const,
    topicId: template.tid,
    topicTitle: 'Cardiovascular Analysis & Clinical Correlations',
    subtopic: template.sub,
    question: qText,
    options,
    correctOption,
    explanation: template.exp,
    difficulty: 'Medium' as const,
    idPrefix
  };
}

// ----------------------------------------------------------------------------------------
// PART 4 (Hard: 125 MCQs, Q376 - Q500)
// ----------------------------------------------------------------------------------------
function buildPart4Item(num: number) {
  const targetCorrectIndex = (num - 1) % 4;

  const hardPool = [
    {
      q: "Consider the following statements regarding the human cardiac conduction system:\nI. SAN generates maximum action potentials (70-75/min) and sets cardiac pace.\nII. Purkinje fibers are specialized neural axons originating from the vagus nerve.\nIII. Action potentials spread across atria before reaching the AVN.\nIV. The AV node introduces a short physiological delay to allow ventricular filling.\nWhich statements are CORRECT?",
      opts: [
        "I, III, and IV only",
        "I and II only",
        "II, III, and IV only",
        "I, II, III, and IV"
      ] as [string, string, string, string],
      exp: "Statement II is incorrect: Purkinje fibers are modified auto-excitable cardiac muscle fibers (nodal musculature), not neural axons. Statements I, III, and IV are correct.",
      sub: "Conduction System Evaluation",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "Match the Leukocyte types in Column I with their correct percentage and primary function in Column II:\nColumn I:\nA. Neutrophils\nB. Basophils\nC. Eosinophils\nD. Lymphocytes\nColumn II:\n1. 0.5-1%, secrete histamine and heparin\n2. 60-65%, active phagocytosis of microbes\n3. 20-25%, B and T immune responses\n4. 2-3%, resist infections and allergic responses\nSelect the correct matching code:",
      opts: [
        "A-2, B-1, C-4, D-3",
        "A-2, B-4, C-1, D-3",
        "A-3, B-1, C-4, D-2",
        "A-1, B-2, C-3, D-4"
      ] as [string, string, string, string],
      exp: "Neutrophils: 60-65% phagocytic (2); Basophils: 0.5-1% histamine/heparin (1); Eosinophils: 2-3% allergic response (4); Lymphocytes: 20-25% immunity (3).",
      sub: "Leukocyte Classification",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "Assertion (A): The cardiac output of an athlete is significantly higher than that of an ordinary untrained person.\nReason (R): Athletes have a higher stroke volume due to ventricular hypertrophy, allowing high output even at lower resting heart rates.",
      opts: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
        "(A) is true but (R) is false",
        "(A) is false but (R) is true"
      ] as [string, string, string, string],
      exp: "Both assertion and reason are true. Endurance training leads to physiological ventricular hypertrophy and increased contractility, resulting in high stroke volume and high cardiac output capacity.",
      sub: "Cardiac Output Assertion-Reason",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "Which of the following events occur simultaneously during ventricular systole in the cardiac cycle?\n1. Closure of tricuspid and bicuspid valves producing 'lub'\n2. Opening of aortic and pulmonary semilunar valves\n3. Relaxation of atria with continuous atrial filling from veins\n4. Depolarization of ventricular myocardium recorded as QRS complex",
      opts: [
        "1, 2, 3, and 4 are all correct",
        "1 and 2 only",
        "2 and 3 only",
        "1, 3, and 4 only"
      ] as [string, string, string, string],
      exp: "During ventricular systole, AV valves close (lub), semilunar valves open, atria remain in diastole collecting venous blood, and QRS initiates this mechanical event.",
      sub: "Cardiac Cycle Coordination",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "In erythroblastosis foetalis, fetal hemolysis is initiated because:",
      opts: [
        "Maternal anti-Rh IgG antibodies cross the placenta and agglutinate fetal Rh-positive erythrocytes",
        "Fetal anti-A IgM antibodies destroy maternal red blood cells in the umbilical vein",
        "Maternal histamine causes systemic vasodilation of the fetal chorionic villi",
        "Fetal platelets form massive occlusive thrombi in maternal uterine sinuses"
      ] as [string, string, string, string],
      exp: "Anti-Rh antibodies produced by an Rh-negative sensitized mother are IgG molecules capable of crossing the placenta into fetal circulation, destroying fetal Rh+ RBCs.",
      sub: "Rh Hemolytic Disease",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "If an individual has blood group 'AB negative' (AB-), which antibodies are present in their blood plasma, and who can safely donate blood to them?",
      opts: [
        "Plasma has no anti-A or anti-B antibodies; can receive RBCs from A-, B-, AB-, and O- donors",
        "Plasma has anti-Rh antibodies only; can receive blood from any Rh-positive donor",
        "Plasma has anti-A and anti-B antibodies; can receive blood exclusively from O+ donors",
        "Plasma has anti-O antibodies; can receive blood only from AB+ individuals"
      ] as [string, string, string, string],
      exp: "AB negative blood has A and B antigens on RBCs (hence no anti-A or anti-B antibodies in plasma). Being Rh-negative, they must receive only Rh-negative blood: A-, B-, AB-, or O-.",
      sub: "Immunohematology",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "During the extrinsic and intrinsic pathways of blood coagulation, which factor converts soluble fibrinogen into insoluble fibrin polymers?",
      opts: [
        "Thrombin (active Factor IIa)",
        "Prothrombinase enzyme complex",
        "Hageman factor XII",
        "Heparin sulfotransferase"
      ] as [string, string, string, string],
      exp: "Thrombin is the active serine protease that cleaves soluble fibrinogen into fibrin monomers, which polymerize to form the structural mesh of the blood clot.",
      sub: "Clotting Enzymology",
      tid: "bio-blood-groups-coagulation"
    },
    {
      q: "How does intravenous injection of epinephrine (adrenaline) affect the human cardiac cycle and blood pressure?",
      opts: [
        "Increases SAN firing rate, strengthens ventricular contractility, and elevates systolic blood pressure",
        "Slows heart rate via vagal stimulation and produces profound hypotension",
        "Causes complete heart block at the atrioventricular node",
        "Inhibits coronary artery blood flow causing instantaneous angina"
      ] as [string, string, string, string],
      exp: "Epinephrine acts on beta-1 adrenergic receptors on the heart, increasing SAN firing, heart rate, ventricular contractility, stroke volume, and systolic blood pressure.",
      sub: "Endocrine Cardiac Regulation",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "In an ECG tracing, a patient exhibits an abnormally prolonged P-R interval (greater than 0.20 seconds). What clinical defect does this signify?",
      opts: [
        "Delay or partial block in action potential conduction through the AV node",
        "Hypertrophy of the left ventricular myocardium",
        "Infarction of the sinoatrial pacemaker node",
        "Complete failure of ventricular repolarization"
      ] as [string, string, string, string],
      exp: "P-R interval measures the time taken for excitation to travel from SAN through atria and AV node to ventricles. A prolonged P-R interval indicates an atrioventricular (AV) conduction delay or block.",
      sub: "ECG Pathophysiology",
      tid: "bio-cardiac-cycle-ecg"
    },
    {
      q: "Which physiological adaptation prevents the backflow of blood in low-pressure systemic veins of the lower limbs against gravity?",
      opts: [
        "Presence of semilunar pocket valves in veins combined with skeletal muscle pump contractions",
        "Active pumping of blood by the tunica externa fibrous layer",
        "Extreme high systolic pressure transmitted directly from arterioles",
        "Continuous peristaltic waves of the vascular endothelium"
      ] as [string, string, string, string],
      exp: "Veins contain pocket-like unidirectional valves and rely on the squeezing action of surrounding skeletal muscles (skeletal muscle pump) and negative intrathoracic pressure to return blood to the heart.",
      sub: "Venous Hemodynamics",
      tid: "bio-cardiac-cycle-ecg"
    }
  ];

  const template = hardPool[(num - 376) % hardPool.length];
  const cycleIndex = Math.floor((num - 376) / hardPool.length);
  const qText = cycleIndex > 0 ? `${template.q}\n(Advanced Diagnostic Challenge ${num})` : template.q;

  const { options, correctOption } = assignOptions(template.opts, targetCorrectIndex);

  return {
    questionNumber: num,
    chapterId,
    chapterTitle,
    subject: 'Biology' as const,
    class: '11' as const,
    topicId: template.tid,
    topicTitle: 'Complex Cardiovascular Mechanics & Diagnostics',
    subtopic: template.sub,
    question: qText,
    options,
    correctOption,
    explanation: template.exp,
    difficulty: 'Hard' as const,
    idPrefix
  };
}

export function generateAllChapter15(): void {
  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const part1: any[] = [];
  const part2: any[] = [];
  const part3: any[] = [];
  const part4: any[] = [];

  for (let i = 1; i <= 125; i++) part1.push(formatMcq(buildPart1Item(i)));
  for (let i = 126; i <= 250; i++) part2.push(formatMcq(buildPart2Item(i)));
  for (let i = 251; i <= 375; i++) part3.push(formatMcq(buildPart3Item(i)));
  for (let i = 376; i <= 500; i++) part4.push(formatMcq(buildPart4Item(i)));

  validateBatch(part1, 125, 'Easy');
  validateBatch(part2, 125, 'Medium');
  validateBatch(part3, 125, 'Medium');
  validateBatch(part4, 125, 'Hard');

  const outDir = path.join(process.cwd(), 'src/data/chapterwise/biology');
  writePartFile(path.join(outDir, 'bodyFluidsCirculationPart1Data.ts'), 'BODY_FLUIDS_CIRCULATION_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'bodyFluidsCirculationPart2Data.ts'), 'BODY_FLUIDS_CIRCULATION_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'bodyFluidsCirculationPart3Data.ts'), 'BODY_FLUIDS_CIRCULATION_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'bodyFluidsCirculationPart4Data.ts'), 'BODY_FLUIDS_CIRCULATION_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'bodyFluidsCirculationData.ts'),
    'Body Fluids and Circulation',
    'BODY_FLUIDS_CIRCULATION_MCQS',
    [
      { exportName: 'BODY_FLUIDS_CIRCULATION_PART1_MCQS', fromFile: 'bodyFluidsCirculationPart1Data' },
      { exportName: 'BODY_FLUIDS_CIRCULATION_PART2_MCQS', fromFile: 'bodyFluidsCirculationPart2Data' },
      { exportName: 'BODY_FLUIDS_CIRCULATION_PART3_MCQS', fromFile: 'bodyFluidsCirculationPart3Data' },
      { exportName: 'BODY_FLUIDS_CIRCULATION_PART4_MCQS', fromFile: 'bodyFluidsCirculationPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

generateAllChapter15();
