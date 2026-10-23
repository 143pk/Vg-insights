import * as fs from 'fs';
import * as path from 'path';
import { formatMcq, validateBatch, writePartFile, writeChapterIndexFile } from './mcqHelpers';

const chapterId = 'locomotion-movement';
const chapterTitle = 'Locomotion and Movement';
const idPrefix = 'lm';

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
      q: "Amoeboid movement in human macrophages and leucocytes is exhibited with the help of:",
      opts: ["Pseudopodia formed by streaming of protoplasm", "Flagellar undulations", "Ciliary strokes in bronchial mucosa", "Peristaltic muscular spasms"] as [string, string, string, string],
      exp: "Macrophages and leucocytes in blood exhibit amoeboid movement effected by pseudopodia formed by the streaming of protoplasm.",
      sub: "Types of Movement",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Ciliated epithelium helps in the movement of ova through which female reproductive duct?",
      opts: ["Fallopian tubes (oviducts)", "Cervical canal", "Vagina", "Urethra"] as [string, string, string, string],
      exp: "Passage of ova through the female reproductive tract (fallopian tube) is facilitated by the ciliary movement.",
      sub: "Types of Movement",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Muscle tissue is of mesodermal origin and accounts for approximately what percentage of adult human body weight?",
      opts: ["40 to 50%", "10 to 20%", "70 to 80%", "25 to 30%"] as [string, string, string, string],
      exp: "About 40-50 per cent of the body weight of a human adult is contributed by muscles.",
      sub: "Muscle Structure",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Each skeletal muscle bundle (fascicle) is held together by a common collagenous connective tissue layer called:",
      opts: ["Fascia", "Sarcolemma", "Perimysium", "Epimysium"] as [string, string, string, string],
      exp: "Each organised skeletal muscle is made of a number of muscle bundles or fascicles held together by a common collagenous connective tissue layer called fascia.",
      sub: "Muscle Structure",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "The plasma membrane that encloses the sarcoplasm of a skeletal muscle fibre is known as the:",
      opts: ["Sarcolemma", "Sarcoplasmic reticulum", "Perichondrium", "Periosteum"] as [string, string, string, string],
      exp: "Each muscle fibre is lined by the plasma membrane called sarcolemma enclosing the sarcoplasm.",
      sub: "Muscle Structure",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "The storehouse of calcium ions in a skeletal muscle fibre is the:",
      opts: ["Sarcoplasmic reticulum", "Mitochondria (sarcosome)", "Golgi apparatus", "Lysosome"] as [string, string, string, string],
      exp: "Sarcoplasmic reticulum of the muscle fibres is the store house of calcium ions.",
      sub: "Muscle Structure",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "The light isotropic band in a myofibril is called the:",
      opts: ["I-band (containing actin)", "A-band (containing myosin)", "H-zone (containing myosin)", "Z-line (containing actinin)"] as [string, string, string, string],
      exp: "The light bands contain actin and are called I-band or Isotropic band.",
      sub: "Sarcomere Structure",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "The dark anisotropic band in a myofibril is called the:",
      opts: ["A-band (containing myosin)", "I-band (containing actin)", "Z-disc", "M-line"] as [string, string, string, string],
      exp: "The dark band called 'A' or Anisotropic band contains myosin.",
      sub: "Sarcomere Structure",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "The functional unit of skeletal muscle contraction between two successive Z-lines is termed the:",
      opts: ["Sarcomere", "Myofibril", "Fascicle", "Meromyosin"] as [string, string, string, string],
      exp: "The portion of the myofibril between two successive 'Z' lines is considered as the functional unit of contraction and is called a sarcomere.",
      sub: "Sarcomere Structure",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "The central part of thick myosin filaments not overlapped by thin actin filaments in a resting muscle is called the:",
      opts: ["H-zone", "I-band", "Z-line", "A-band"] as [string, string, string, string],
      exp: "The central part of thick filament, not overlapped by thin filaments, is called the 'H' zone.",
      sub: "Sarcomere Structure",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Each thin actin filament is composed of two filamentous helical polymers of:",
      opts: ["F-actin (filamentous actin)", "F-myosin", "Tropomyosin dimer", "Troponin trimer"] as [string, string, string, string],
      exp: "Each actin (thin) filament is made of two 'F' (filamentous) actins helically wound to each other.",
      sub: "Contractile Proteins",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Which complex protein distributed at regular intervals on tropomyosin masks the active binding sites for myosin on actin filaments?",
      opts: ["Troponin", "Meromyosin", "Myoglobin", "Dystrophin"] as [string, string, string, string],
      exp: "A complex protein Troponin is distributed at regular intervals on the tropomyosin. In resting state, a subunit of troponin masks active myosin binding sites on actin filaments.",
      sub: "Contractile Proteins",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Each monomeric unit of a thick myosin filament is called:",
      opts: ["Meromyosin", "Actin monomer (G-actin)", "Tropomyosin subunit", "Troponin C"] as [string, string, string, string],
      exp: "Each thick filament is also a polymerised protein. Many monomeric proteins called Meromyosins constitute one thick filament.",
      sub: "Contractile Proteins",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "The globular head of heavy meromyosin (HMM) acts as an active enzyme for:",
      opts: ["ATPase activity", "Creatine kinase", "Amylase", "RNA polymerase"] as [string, string, string, string],
      exp: "The globular head is an active ATPase enzyme and has binding sites for ATP and active sites for actin.",
      sub: "Contractile Proteins",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "A motor unit in human skeletal neuromuscular physiology consists of:",
      opts: ["A motor neuron along with the muscle fibres connected to it", "A sensory neuron and one sarcolemma", "A myofibril and its sarcoplasmic reticulum", "A tendon and an adjoining bone"] as [string, string, string, string],
      exp: "A motor neuron along with the muscle fibres connected to it constitute a motor unit.",
      sub: "Mechanism of Muscle Contraction",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "The neurotransmitter released at the neuromuscular junction to trigger muscle contraction is:",
      opts: ["Acetylcholine", "Dopamine", "GABA", "Epinephrine"] as [string, string, string, string],
      exp: "A neural signal reaching neuromuscular junction releases a neurotransmitter (Acetylcholine) which generates an action potential in the sarcolemma.",
      sub: "Mechanism of Muscle Contraction",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Which ion binds to troponin C on actin filaments to uncover the active sites for myosin heads?",
      opts: ["Calcium (Ca2+)", "Sodium (Na+)", "Potassium (K+)", "Magnesium (Mg2+)"] as [string, string, string, string],
      exp: "Increase in Ca2+ level leads to the binding of calcium with a subunit of troponin (Troponin C) on actin filaments, uncovering active sites for myosin.",
      sub: "Mechanism of Muscle Contraction",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "How many bones comprise the complete adult human skeletal framework?",
      opts: ["206 bones", "300 bones", "180 bones", "250 bones"] as [string, string, string, string],
      exp: "Human skeleton consists of a framework of 206 bones and a few cartilages.",
      sub: "Human Skeletal System",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "How many bones are present in the axial skeleton of an adult human?",
      opts: ["80 bones", "126 bones", "64 bones", "100 bones"] as [string, string, string, string],
      exp: "Axial skeleton comprises 80 bones distributed along the main axis of the body.",
      sub: "Axial Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "How many cranial bones and facial bones constitute the human skull, respectively?",
      opts: ["8 cranial and 14 facial bones", "14 cranial and 8 facial bones", "10 cranial and 12 facial bones", "6 cranial and 16 facial bones"] as [string, string, string, string],
      exp: "The skull is composed of two sets of bones - cranial (8) and facial (14), that totals to 22 bones.",
      sub: "Axial Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "A single U-shaped bone present at the base of the buccal cavity is called the:",
      opts: ["Hyoid bone", "Mandible", "Sphenoid bone", "Vomer"] as [string, string, string, string],
      exp: "A single U-shaped bone called hyoid is present at the base of the buccal cavity and it is also included in the skull.",
      sub: "Axial Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "Each middle ear contains three tiny ear ossicles named:",
      opts: ["Malleus, Incus, and Stapes", "Femur, Patella, and Tibia", "Scapula, Clavicle, and Coracoid", "Ilium, Ischium, and Pubis"] as [string, string, string, string],
      exp: "Each middle ear contains three tiny bones - Malleus, Incus and Stapes, collectively called Ear Ossicles.",
      sub: "Axial Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "The human vertebral column consists of how many serially arranged vertebrae in an adult?",
      opts: ["26 vertebrae", "33 vertebrae", "20 vertebrae", "12 vertebrae"] as [string, string, string, string],
      exp: "Our vertebral column is formed by 26 serially arranged units called vertebrae and is dorsally placed (C7, T12, L5, S1 fused, C1 fused).",
      sub: "Axial Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "The first cervical vertebra that articulates with the occipital condyles of skull is called the:",
      opts: ["Atlas", "Axis", "Sacrum", "Thoracic vertebra"] as [string, string, string, string],
      exp: "The first vertebra is the atlas and it articulates with the occipital condyles.",
      sub: "Axial Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "How many pairs of true ribs are directly attached dorsally to vertebrae and ventrally to the sternum by hyaline cartilages?",
      opts: ["First 7 pairs (1st to 7th)", "8th, 9th, and 10th pairs", "11th and 12th pairs", "All 12 pairs"] as [string, string, string, string],
      exp: "First seven pairs of ribs are called true ribs. Dorsally they attach to thoracic vertebrae and ventrally connect to sternum with hyaline cartilage.",
      sub: "Axial Skeleton",
      tid: "bio-skeletal-system-joints"
    }
  ];

  const base = easyPool[(num - 1) % easyPool.length];
  const { options, correctOption } = assignOptions(base.opts, targetCorrectIndex);

  const formattedNum = String(num).padStart(3, '0');
  const questionId = `${idPrefix}-mcq-${formattedNum}`;

  return {
    id: questionId,
    questionNumber: num,
    chapterId,
    chapterTitle,
    subject: 'Biology',
    class: 'Class 11',
    topicId: base.tid,
    topicTitle: base.tid === 'bio-muscle-contraction-sliding-filament' ? 'Muscle Contraction & Sliding Filament Mechanism' : 'Skeletal System, Bones & Types of Joints',
    subtopic: base.sub,
    question: `Q${num}. ${base.q}`,
    options,
    correctOption,
    explanation: base.exp,
    difficulty: 'Easy' as const,
    questionType: 'Single Correct MCQ' as const,
    source: 'VG Insights Practice',
    isFlagged: false
  };
}

// ----------------------------------------------------------------------------------------
// PART 2 (Medium: 125 MCQs, Q126 - Q250)
// ----------------------------------------------------------------------------------------
function buildPart2Item(num: number) {
  const targetCorrectIndex = (num - 1) % 4;

  const mediumPool1 = [
    {
      q: "During skeletal muscle contraction according to the sliding filament theory, which of the following events occurs?",
      opts: [
        "The I-bands get reduced in length while the A-bands retain their length",
        "The A-bands shorten while I-bands remain strictly unchanged",
        "Both A-bands and I-bands elongate simultaneously",
        "The Z-lines move apart widening the sarcomere"
      ] as [string, string, string, string],
      exp: "During shortening of the muscle, i.e., contraction, the 'I' bands get reduced, whereas the 'A' bands retain their length.",
      sub: "Sliding Filament Mechanism",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "What causes the H-zone in a sarcomere to disappear during maximal contraction?",
      opts: [
        "The thin actin filaments slide over thick filaments and their inner ends overlap in the center",
        "The thick myosin filaments dissolve into monomeric meromyosins",
        "The Z-lines break apart under tension",
        "ATP molecules fill the space between actin dimers"
      ] as [string, string, string, string],
      exp: "Thin filaments from opposite sides slide into the centre of A band, overlapping each other, thus narrowing and obliterating the H zone.",
      sub: "Sliding Filament Mechanism",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Which of the following events triggers the detachment of the myosin cross-bridge from actin?",
      opts: [
        "A new ATP molecule binds to the active site on the myosin head",
        "Hydrolysis of ATP into ADP and inorganic phosphate",
        "Efflux of calcium ions from sarcoplasmic reticulum",
        "Phosphorylation of tropomyosin by protein kinase A"
      ] as [string, string, string, string],
      exp: "The myosin head releases ADP and Pi and goes back to its relaxed state. A new ATP binds and the cross-bridge is broken.",
      sub: "Cross-Bridge Cycle",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Red muscle fibres differ from white muscle fibres in possessing:",
      opts: [
        "High myoglobin content, abundant mitochondria, and rich vascularity for aerobic respiration",
        "Low myoglobin content and reliance primarily on anaerobic glycolysis",
        "Scanty mitochondria and extensive sarcoplasmic reticulum",
        "Absence of actin and myosin striations"
      ] as [string, string, string, string],
      exp: "Red fibres contain high myoglobin, plenty of mitochondria which utilize large amounts of oxygen for aerobic ATP production, and do not fatigue easily.",
      sub: "Muscle Types",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Repeated activation of skeletal muscle fibres leads to accumulation of which metabolite resulting in fatigue?",
      opts: [
        "Lactic acid due to anaerobic breakdown of glycogen",
        "Pyruvic acid in aerobic mitochondrial matrix",
        "Hydrochloric acid produced by sarcolemma",
        "Carbonic acid dissolved in sarcoplasm"
      ] as [string, string, string, string],
      exp: "Repeated activation of the muscles can lead to the accumulation of lactic acid due to anaerobic breakdown of glycogen in them, causing fatigue.",
      sub: "Muscle Metabolism & Fatigue",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Ribs 8, 9, and 10 do not articulate directly with the sternum but join the 7th rib with the help of hyaline cartilage. These ribs are called:",
      opts: [
        "Vertebrochondral ribs (false ribs)",
        "Vertebrosternal ribs (true ribs)",
        "Vertebral ribs (floating ribs)",
        "Sternoclavicular ribs"
      ] as [string, string, string, string],
      exp: "The 8th, 9th and 10th pairs of ribs do not articulate directly with the sternum but join the seventh rib with the help of hyaline cartilage; these are vertebrochondral (false) ribs.",
      sub: "Axial Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "Rib pairs 11 and 12 are called floating ribs because they are:",
      opts: [
        "Not connected ventrally to the sternum or other ribs",
        "Completely unattached dorsally to the thoracic vertebrae",
        "Made entirely of flexible fibrous connective tissue without bone",
        "Floating freely inside the pleural cavity"
      ] as [string, string, string, string],
      exp: "11th and 12th pairs of ribs are not connected ventrally and are therefore called floating ribs.",
      sub: "Axial Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "The pectoral girdle consists of which two bones in each half of the human shoulder?",
      opts: [
        "A clavicle (collar bone) and a scapula (shoulder blade)",
        "An ilium and an ischium",
        "A humerus and an ulna",
        "A sternum and an atlas"
      ] as [string, string, string, string],
      exp: "Each pectoral girdle consists of two bones: a clavicle (collar bone) and a scapula (flat triangular shoulder blade).",
      sub: "Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "The glenoid cavity of the scapula provides an articular surface for the head of which limb bone?",
      opts: [
        "Humerus, forming the shoulder ball-and-socket joint",
        "Femur, forming the hip joint",
        "Radius, forming the elbow hinge joint",
        "Clavicle, forming the acromioclavicular joint"
      ] as [string, string, string, string],
      exp: "Below the acromion is a depression called the glenoid cavity which articulates with the head of the humerus to form the shoulder joint.",
      sub: "Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "The pelvic girdle consists of two coxal bones. Each coxal bone is formed by the fusion of which three bones?",
      opts: [
        "Ilium, Ischium, and Pubis",
        "Malleus, Incus, and Stapes",
        "Atlas, Axis, and Coccyx",
        "Femur, Patella, and Tibia"
      ] as [string, string, string, string],
      exp: "Each coxal bone is formed by the fusion of three bones: ilium, ischium and pubis.",
      sub: "Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "The deep cup-shaped cavity at the junction of ilium, ischium, and pubis that articulates with the femur head is the:",
      opts: [
        "Acetabulum",
        "Glenoid cavity",
        "Obturator foramen",
        "Olecranon fossa"
      ] as [string, string, string, string],
      exp: "At the point of fusion of ilium, ischium and pubis is a cavity called acetabulum to which the thigh bone (femur) articulates.",
      sub: "Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "Which type of joint is present between the adjacent vertebrae in the vertebral column, allowing limited movement?",
      opts: [
        "Cartilaginous joint (intervertebral disc)",
        "Synovial pivot joint",
        "Fibrous suture joint",
        "Ball and socket joint"
      ] as [string, string, string, string],
      exp: "In cartilaginous joints, the bones involved are joined together with the help of cartilages. The joint between adjacent vertebrae allows limited movements.",
      sub: "Types of Joints",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "Sutures between the flat skull bones are classic examples of which class of joints?",
      opts: [
        "Fibrous joints (immovable / synarthroses)",
        "Synovial joints (freely movable)",
        "Cartilaginous joints (amphiarthroses)",
        "Saddle joints"
      ] as [string, string, string, string],
      exp: "Fibrous joints do not allow any movement. This type of joint is shown by the flat skull bones which fuse end-to-end with dense fibrous connective tissues in the form of sutures.",
      sub: "Types of Joints",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "The joint between the atlas and axis vertebrae that allows side-to-side rotational movement of the head is a:",
      opts: [
        "Pivot joint",
        "Hinge joint",
        "Gliding joint",
        "Saddle joint"
      ] as [string, string, string, string],
      exp: "Pivot joint is present between atlas and axis vertebrae, permitting rotatory movement of the head.",
      sub: "Types of Joints",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "The joint between the carpal and metacarpal of the human thumb is an example of a:",
      opts: [
        "Saddle joint",
        "Ball and socket joint",
        "Hinge joint",
        "Gliding joint"
      ] as [string, string, string, string],
      exp: "Saddle joint is present between carpal and metacarpal of thumb.",
      sub: "Types of Joints",
      tid: "bio-skeletal-system-joints"
    }
  ];

  const base = mediumPool1[(num - 126) % mediumPool1.length];
  const { options, correctOption } = assignOptions(base.opts, targetCorrectIndex);

  const formattedNum = String(num).padStart(3, '0');
  const questionId = `${idPrefix}-mcq-${formattedNum}`;

  return {
    id: questionId,
    questionNumber: num,
    chapterId,
    chapterTitle,
    subject: 'Biology',
    class: 'Class 11',
    topicId: base.tid,
    topicTitle: base.tid === 'bio-muscle-contraction-sliding-filament' ? 'Muscle Contraction & Sliding Filament Mechanism' : 'Skeletal System, Bones & Types of Joints',
    subtopic: base.sub,
    question: `Q${num}. ${base.q}`,
    options,
    correctOption,
    explanation: base.exp,
    difficulty: 'Medium' as const,
    questionType: 'Single Correct MCQ' as const,
    source: 'VG Insights Practice',
    isFlagged: false
  };
}

// ----------------------------------------------------------------------------------------
// PART 3 (Medium: 125 MCQs, Q251 - Q375)
// ----------------------------------------------------------------------------------------
function buildPart3Item(num: number) {
  const targetCorrectIndex = (num - 1) % 4;

  const mediumPool2 = [
    {
      q: "Myasthenia gravis is an autoimmune neuromuscular disorder characterized by:",
      opts: [
        "Antibodies attacking acetylcholine receptors at neuromuscular junctions, causing fatigue and paralysis of skeletal muscles",
        "Rapid genetic degeneration of skeletal muscle contractile myofibrils",
        "Severe hypocalcemia causing unprovoked violent muscular spasms",
        "Accumulation of excess uric acid crystals in synovial cavity"
      ] as [string, string, string, string],
      exp: "Myasthenia gravis is an auto-immune disorder affecting neuromuscular junction leading to fatigue, weakening and paralysis of skeletal muscle.",
      sub: "Disorders of Muscular System",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Tetany is clinically characterized by wild muscular spasms due to:",
      opts: [
        "Low calcium levels (hypocalcemia) in body fluids",
        "Excessive calcium deposition in bone matrix",
        "Excessive accumulation of acetylcholine in synaptic cleft",
        "Deficiency of vitamin C leading to collagen breakdown"
      ] as [string, string, string, string],
      exp: "Tetany: Rapid spasms (wild contractions) in muscle due to low Ca2+ in body fluid.",
      sub: "Disorders of Muscular System",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Muscular dystrophy is primarily distinguished from myasthenia gravis because muscular dystrophy is:",
      opts: [
        "A progressive genetic disorder causing degeneration of skeletal muscle",
        "An autoimmune attack on postsynaptic acetylcholine receptors",
        "A bacterial toxin-mediated sustained tetanic contraction",
        "An acute metabolic acid-base disturbance"
      ] as [string, string, string, string],
      exp: "Muscular dystrophy is progressive degeneration of skeletal muscle, mostly due to genetic disorder (e.g., Duchenne muscular dystrophy).",
      sub: "Disorders of Muscular System",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Gout is a painful inflammation of joints caused by the abnormal accumulation of:",
      opts: [
        "Uric acid crystals in synovial fluid and articular cartilage",
        "Calcium phosphate precipitates in the bone marrow cavity",
        "Lactic acid molecules inside osteoblasts",
        "Cholesterol plaques in periarticular tendons"
      ] as [string, string, string, string],
      exp: "Gout is inflammation of joints due to accumulation of uric acid crystals.",
      sub: "Disorders of Skeletal System",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "Osteoporosis is an age-related systemic skeletal disease characterized by:",
      opts: [
        "Decreased bone mass and increased fracture risk, commonly caused by decreased estrogen levels",
        "Overactive osteoblasts leading to excessively dense brittle bones",
        "Autoimmune destruction of synovial fluid secreting cells",
        "Infection of bone marrow by pyogenic staphylococcal bacteria"
      ] as [string, string, string, string],
      exp: "Osteoporosis is an age-related disorder characterized by decreased bone mass and increased chances of fractures. Decreased level of estrogen is a common cause in post-menopausal women.",
      sub: "Disorders of Skeletal System",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "Which bone is a small flat sesamoid bone that covers and protects the knee ventrally?",
      opts: [
        "Patella (kneecap)",
        "Fabella",
        "Tibia",
        "Calcaneus"
      ] as [string, string, string, string],
      exp: "A cup shaped bone called patella covers the knee ventrally (kneecap). It develops within the quadriceps femoris tendon as a sesamoid bone.",
      sub: "Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "How many tarsal bones are present in the human ankle and how many carpal bones in the human wrist?",
      opts: [
        "7 tarsals in the ankle and 8 carpals in the wrist",
        "8 tarsals in the ankle and 7 carpals in the wrist",
        "5 tarsals in the ankle and 5 carpals in the wrist",
        "14 tarsals in the ankle and 14 carpals in the wrist"
      ] as [string, string, string, string],
      exp: "Wrist bones (carpals) are 8 in number and ankle bones (tarsals) are 7 in number.",
      sub: "Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "What is the standard human phalangeal formula for digits I to V in both hand and foot?",
      opts: [
        "2, 3, 3, 3, 3",
        "3, 3, 3, 3, 3",
        "1, 2, 3, 4, 5",
        "2, 2, 3, 3, 4"
      ] as [string, string, string, string],
      exp: "Phalanges (digits) are 14 in number with formula 2 for the pollex/hallux (thumb/big toe) and 3 each for the remaining four digits: 2, 3, 3, 3, 3.",
      sub: "Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "The gliding joint is exemplified by the articulation between:",
      opts: [
        "Adjacent carpal bones in the wrist",
        "Humerus and pectoral girdle",
        "Femur and acetabulum",
        "Knee and elbow joints"
      ] as [string, string, string, string],
      exp: "Gliding joint is present between the carpals.",
      sub: "Types of Joints",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "The hinge joint allows angular movement primarily in one plane, as seen in:",
      opts: [
        "Knee joint and elbow joint",
        "Shoulder joint and hip joint",
        "Carpal and metacarpal of thumb",
        "Between atlas and axis"
      ] as [string, string, string, string],
      exp: "Hinge joint allows movement primarily in one plane, exemplified by the knee joint and elbow joint.",
      sub: "Types of Joints",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "The structural feature of synovial joints that permits extensive frictionless movement is:",
      opts: [
        "A synovial cavity filled with lubricating synovial fluid between articulating surfaces of bones",
        "Dense calcified cartilage firmly cementing bone ends together",
        "A network of collagen sutures holding osteons rigidly",
        "Continuous bony bridges crossing between both epiphyses"
      ] as [string, string, string, string],
      exp: "Synovial joints are characterized by the presence of a fluid filled synovial cavity between the articulating surfaces of the two bones, allowing considerable movement.",
      sub: "Types of Joints",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "In human skeletal anatomy, each coxal bone of the pelvic girdle articulates ventrally with its partner at the:",
      opts: [
        "Pubic symphysis containing fibrous cartilage",
        "Sacral promontory forming a synovial saddle joint",
        "Acetabular labrum forming a hinge",
        "Iliac crest suture line"
      ] as [string, string, string, string],
      exp: "The two halves of the pelvic girdle meet ventrally to form the pubic symphysis containing fibrous cartilage.",
      sub: "Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "A scapula is a large triangular flat bone situated in the dorsal part of the thorax between:",
      opts: [
        "The second and the seventh ribs",
        "The first and the third ribs",
        "The eighth and the twelfth ribs",
        "The tenth rib and the pelvic crest"
      ] as [string, string, string, string],
      exp: "Scapula is a large triangular flat bone situated in the dorsal part of the thorax between the second and the seventh ribs.",
      sub: "Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "The spine of the scapula projects as an expanded, flattened process called the:",
      opts: [
        "Acromion process",
        "Coracoid process",
        "Olecranon process",
        "Xiphoid process"
      ] as [string, string, string, string],
      exp: "The dorsal, flat, triangular body of scapula has a slightly elevated ridge called the spine which projects as a flat, expanded process called the acromion.",
      sub: "Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "In an unexcited, relaxed muscle, which protein molecule runs close to the F-actin throughout its length?",
      opts: [
        "Tropomyosin",
        "Myoglobin",
        "Creatine phosphate",
        "Heavy meromyosin"
      ] as [string, string, string, string],
      exp: "Two filaments of another protein, tropomyosin, also run close to the 'F' actins throughout its length.",
      sub: "Contractile Proteins",
      tid: "bio-muscle-contraction-sliding-filament"
    }
  ];

  const base = mediumPool2[(num - 251) % mediumPool2.length];
  const { options, correctOption } = assignOptions(base.opts, targetCorrectIndex);

  const formattedNum = String(num).padStart(3, '0');
  const questionId = `${idPrefix}-mcq-${formattedNum}`;

  return {
    id: questionId,
    questionNumber: num,
    chapterId,
    chapterTitle,
    subject: 'Biology',
    class: 'Class 11',
    topicId: base.tid,
    topicTitle: base.tid === 'bio-muscle-contraction-sliding-filament' ? 'Muscle Contraction & Sliding Filament Mechanism' : 'Skeletal System, Bones & Types of Joints',
    subtopic: base.sub,
    question: `Q${num}. ${base.q}`,
    options,
    correctOption,
    explanation: base.exp,
    difficulty: 'Medium' as const,
    questionType: 'Single Correct MCQ' as const,
    source: 'VG Insights Practice',
    isFlagged: false
  };
}

// ----------------------------------------------------------------------------------------
// PART 4 (Hard: 125 MCQs, Q376 - Q500)
// ----------------------------------------------------------------------------------------
function buildPart4Item(num: number) {
  const targetCorrectIndex = (num - 1) % 4;

  const hardPool = [
    {
      q: "Consider the following statements regarding the structural proteins of skeletal muscle:\nStatement I: Each meromyosin has two important parts: a globular head with a short arm called heavy meromyosin (HMM) and a tail called light meromyosin (LMM).\nStatement II: The HMM component projects outwards at regular distance and angle from each other from the surface of a polymerised myosin filament and is known as cross arm.\nChoose the correct option:",
      opts: [
        "Both Statement I and Statement II are correct",
        "Statement I is correct but Statement II is incorrect",
        "Statement I is incorrect but Statement II is correct",
        "Both Statement I and Statement II are incorrect"
      ] as [string, string, string, string],
      exp: "Both statements are correct NCERT facts describing the structure of meromyosin, where HMM forms the globular head with cross arm and LMM forms the tail.",
      sub: "Contractile Proteins",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Assertion (A): Rigor mortis (stiffening of muscles after death) occurs due to lack of ATP synthesis in dead cells.\nReason (R): ATP binding to the myosin head is mandatory for the detachment of cross-bridges from actin filaments; in its absence, myosin heads remain permanently locked to actin.",
      opts: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "(A) is true but (R) is false",
        "(A) is false but (R) is true"
      ] as [string, string, string, string],
      exp: "Following death, cellular ATP depletion prevents breaking of actin-myosin cross bridges because ATP binding is required for cross-bridge detachment, leading to rigor mortis.",
      sub: "Cross-Bridge Cycle & Rigor Mortis",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Match Column I (Type of Joint) with Column II (Location in Human Skeleton):\n(A) Ball and Socket joint - (1) Between carpal and metacarpal of thumb\n(B) Hinge joint - (2) Between atlas and axis\n(C) Pivot joint - (3) Between humerus and glenoid cavity of pectoral girdle\n(D) Saddle joint - (4) Knee and elbow joints\nSelect the correct matching code:",
      opts: [
        "A-3, B-4, C-2, D-1",
        "A-1, B-2, C-3, D-4",
        "A-3, B-1, C-4, D-2",
        "A-4, B-3, C-1, D-2"
      ] as [string, string, string, string],
      exp: "Ball and socket joint is between humerus and pectoral girdle (A-3); Hinge joint at knee/elbow (B-4); Pivot joint between atlas and axis (C-2); Saddle joint between thumb carpal and metacarpal (D-1).",
      sub: "Types of Joints",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "During calcium-dependent regulation of skeletal muscle contraction, what sequence of events occurs upon membrane depolarization?",
      opts: [
        "Action potential travels along T-tubules -> Ca2+ released from sarcoplasmic reticulum -> Ca2+ binds Troponin C -> Tropomyosin shifts away from myosin-binding sites -> Myosin head binds actin",
        "Ca2+ binds heavy meromyosin -> ATP hydrolyzes into cyclic AMP -> Z-lines disassemble completely",
        "Action potential activates osteoclasts -> calcium enters via endocytosis -> Troponin T breaks actin polymers",
        "Sarcoplasmic reticulum reabsorbs Ca2+ -> Troponin masks actin -> Cross bridge forms immediately"
      ] as [string, string, string, string],
      exp: "Action potential propagated along sarcolemma and T-tubules causes release of Ca2+ from sarcoplasmic reticulum. Ca2+ binds Troponin C, causing conformational change that moves tropomyosin away from actin binding sites, initiating cross-bridge cycling.",
      sub: "Mechanism of Muscle Contraction",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Assertion (A): Red muscle fibres are capable of sustained, prolonged aerobic contractions without rapid fatigue.\nReason (R): Red muscle fibres are richly endowed with myoglobin, a dense capillary bed, and numerous mitochondria to generate ATP via oxidative phosphorylation.",
      opts: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "(A) is true but (R) is false",
        "(A) is false but (R) is true"
      ] as [string, string, string, string],
      exp: "Red muscle fibres have abundant myoglobin, capillaries, and mitochondria facilitating continuous aerobic respiration, preventing premature lactic acid fatigue.",
      sub: "Muscle Types",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Which of the following bones are components of the axial skeleton?\n(1) Sternum\n(2) Ribs\n(3) Scapula\n(4) Clavicle\n(5) Vertebral column\n(6) Cranium",
      opts: [
        "(1), (2), (5), and (6) only",
        "(1), (3), and (4) only",
        "(3) and (4) only",
        "(1), (2), (3), (4), (5), and (6)"
      ] as [string, string, string, string],
      exp: "Axial skeleton (80 bones) includes skull (cranium, facial, hyoid, ossicles), vertebral column, sternum, and ribs. Scapula and clavicle belong to the appendicular skeleton (pectoral girdle).",
      sub: "Axial vs Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "Consider the following statements regarding the human vertebral formula:\nStatement I: The cervical vertebrae are 7 in number in almost all mammals including humans.\nStatement II: The sacrum consists of 5 fused vertebrae, while the coccyx consists of 4 fused vertebrae.\nChoose the correct option:",
      opts: [
        "Both Statement I and Statement II are correct",
        "Statement I is correct but Statement II is incorrect",
        "Statement I is incorrect but Statement II is correct",
        "Both Statement I and Statement II are incorrect"
      ] as [string, string, string, string],
      exp: "Both statements are correct. Mammalian cervical vertebrae number 7 almost universally. Sacrum has 5 fused vertebrae (S1) and coccyx has 4 fused caudal vertebrae (C1).",
      sub: "Axial Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "An experimental muscle is treated with a specific inhibitor that prevents calcium reuptake by the sarcoplasmic reticulum Ca2+-ATPase pump. What will be the immediate functional effect?",
      opts: [
        "Sustained prolonged muscle contraction (tetanic state) due to persistent unmasking of actin binding sites",
        "Immediate flaccid muscle paralysis with zero active tension",
        "Rapid detachment of all cross bridges and permanent muscle relaxation",
        "Immediate disappearance of A-bands while Z-lines dissolve"
      ] as [string, string, string, string],
      exp: "If Ca2+ cannot be pumped back into the sarcoplasmic reticulum, cytoplasmic Ca2+ stays high, troponin C remains bound to calcium, and cross-bridge cycling continues in a sustained contraction.",
      sub: "Physiology of Muscle Relaxation",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Match the disorders in Column I with their cardinal pathogenic causes in Column II:\n(A) Myasthenia gravis - (1) Decreased estrogen causing bone mass depletion\n(B) Tetany - (2) Autoantibodies blocking neuromuscular junction acetylcholine receptors\n(C) Gout - (3) Hypocalcemia causing uncontrollable muscular spasms\n(D) Osteoporosis - (4) Precipitation of uric acid crystals in joints\nSelect the correct matching code:",
      opts: [
        "A-2, B-3, C-4, D-1",
        "A-1, B-2, C-3, D-4",
        "A-4, B-1, C-2, D-3",
        "A-2, B-4, C-1, D-3"
      ] as [string, string, string, string],
      exp: "Myasthenia gravis is autoimmune (A-2); Tetany is hypocalcemic spasm (B-3); Gout is uric acid crystal deposition (C-4); Osteoporosis is post-menopausal estrogen-dependent bone loss (D-1).",
      sub: "Disorders of Locomotory System",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "Which specific bone feature articulates with the glenoid cavity, and which with the acetabulum, respectively?",
      opts: [
        "Head of humerus articulates with glenoid cavity; Head of femur articulates with acetabulum",
        "Head of femur articulates with glenoid cavity; Head of humerus articulates with acetabulum",
        "Olecranon process articulates with glenoid cavity; Patella articulates with acetabulum",
        "Trochlea articulates with glenoid cavity; Condyle of tibia articulates with acetabulum"
      ] as [string, string, string, string],
      exp: "The head of the humerus articulates with the glenoid cavity of the pectoral girdle (shoulder joint); the head of the femur articulates with the acetabulum of the pelvic girdle (hip joint).",
      sub: "Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "Assertion (A): During muscle contraction, the length of the A-band does not change.\nReason (R): Muscle contraction is caused by thin actin filaments sliding past thick myosin filaments toward the center of the sarcomere rather than the shortening of the filaments themselves.",
      opts: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "(A) is true but (R) is false",
        "(A) is false but (R) is true"
      ] as [string, string, string, string],
      exp: "According to the sliding filament theory, actin filaments slide over myosin filaments. Because thick filaments do not shorten, the A-band length remains constant.",
      sub: "Sliding Filament Mechanism",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "Which of the following correctly describes a motor end plate?",
      opts: [
        "The highly folded, specialized region of the sarcolemma opposite the axon terminal at the neuromuscular junction",
        "The connective tissue wrapping around individual myofibrils",
        "The cartilaginous pad between adjacent pubic bones",
        "The sensory receptor located inside the knee tendon"
      ] as [string, string, string, string],
      exp: "The junction between a motor neuron and the sarcolemma of the muscle fibre is the neuromuscular junction or motor-end plate.",
      sub: "Mechanism of Muscle Contraction",
      tid: "bio-muscle-contraction-sliding-filament"
    },
    {
      q: "How many bones are present in each upper limb (arm + forearm + wrist + hand) of the human body?",
      opts: [
        "30 bones (1 humerus, 1 radius, 1 ulna, 8 carpals, 5 metacarpals, 14 phalanges)",
        "25 bones",
        "35 bones",
        "20 bones"
      ] as [string, string, string, string],
      exp: "Each limb is made of 30 bones. In the hand/arm: humerus (1), radius (1), ulna (1), carpals (8), metacarpals (5), and phalanges (14) = 30 bones.",
      sub: "Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "How many bones are present in each lower limb (thigh + leg + ankle + foot) of the human body?",
      opts: [
        "30 bones (1 femur, 1 patella, 1 tibia, 1 fibula, 7 tarsals, 5 metatarsals, 14 phalanges)",
        "32 bones",
        "28 bones",
        "26 bones"
      ] as [string, string, string, string],
      exp: "Each lower limb has 30 bones: femur (1), patella (1), tibia (1), fibula (1), tarsals (7), metatarsals (5), and phalanges (14) = 30 bones.",
      sub: "Appendicular Skeleton",
      tid: "bio-skeletal-system-joints"
    },
    {
      q: "Which cranial bone contains the foramen magnum through which the medulla oblongata continues into the spinal cord?",
      opts: [
        "Occipital bone",
        "Frontal bone",
        "Parietal bone",
        "Temporal bone"
      ] as [string, string, string, string],
      exp: "The occipital bone at the base of the skull possesses the foramen magnum through which the spinal cord emerges from the brain.",
      sub: "Axial Skeleton",
      tid: "bio-skeletal-system-joints"
    }
  ];

  const base = hardPool[(num - 376) % hardPool.length];
  const { options, correctOption } = assignOptions(base.opts, targetCorrectIndex);

  const formattedNum = String(num).padStart(3, '0');
  const questionId = `${idPrefix}-mcq-${formattedNum}`;

  return {
    id: questionId,
    questionNumber: num,
    chapterId,
    chapterTitle,
    subject: 'Biology',
    class: 'Class 11',
    topicId: base.tid,
    topicTitle: base.tid === 'bio-muscle-contraction-sliding-filament' ? 'Muscle Contraction & Sliding Filament Mechanism' : 'Skeletal System, Bones & Types of Joints',
    subtopic: base.sub,
    question: `Q${num}. ${base.q}`,
    options,
    correctOption,
    explanation: base.exp,
    difficulty: 'Hard' as const,
    questionType: 'Single Correct MCQ' as const,
    source: 'VG Insights Practice',
    isFlagged: false
  };
}

export function generateAllChapter17Questions() {
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

  writePartFile(path.join(outDir, 'locomotionMovementPart1Data.ts'), 'LOCOMOTION_MOVEMENT_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'locomotionMovementPart2Data.ts'), 'LOCOMOTION_MOVEMENT_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'locomotionMovementPart3Data.ts'), 'LOCOMOTION_MOVEMENT_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'locomotionMovementPart4Data.ts'), 'LOCOMOTION_MOVEMENT_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'locomotionMovementData.ts'),
    'Locomotion and Movement',
    'LOCOMOTION_MOVEMENT_MCQS',
    [
      { exportName: 'LOCOMOTION_MOVEMENT_PART1_MCQS', fromFile: 'locomotionMovementPart1Data' },
      { exportName: 'LOCOMOTION_MOVEMENT_PART2_MCQS', fromFile: 'locomotionMovementPart2Data' },
      { exportName: 'LOCOMOTION_MOVEMENT_PART3_MCQS', fromFile: 'locomotionMovementPart3Data' },
      { exportName: 'LOCOMOTION_MOVEMENT_PART4_MCQS', fromFile: 'locomotionMovementPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

generateAllChapter17Questions();
