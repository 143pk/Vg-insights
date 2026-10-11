import { PYQQuestion } from './pyqDatabase';

export const CHEMISTRY_PYQS_ARCHIVE: PYQQuestion[] = [
  // ================= 2016 NEET UG CHEMISTRY =================
  {
    id: 'chem-pyq-2016-chem-1',
    year: 2016,
    subject: 'chemistry',
    chapterId: 'redox-reactions',
    chapterTitle: 'Redox Reactions',
    topicId: 'oxidation-number-balancing',
    topicTitle: 'Oxidation Number & Balancing Redox Equations',
    question: 'The oxidation state of Chromium (Cr) in potassium dichromate (K₂Cr₂O₇) is:',
    options: [
      '+3',
      '+4',
      '+6',
      '+7'
    ],
    correctIndex: 2,
    explanation: 'Let oxidation state of Cr be x. In neutral K₂Cr₂O₇: 2(+1) + 2(x) + 7(-2) = 0 ⇒ 2 + 2x - 14 = 0 ⇒ 2x = 12 ⇒ x = +6.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 8, Page 260'
  },
  {
    id: 'chem-pyq-2016-chem-2',
    year: 2016,
    subject: 'chemistry',
    chapterId: 'chemical-bonding-and-molecular-structure',
    chapterTitle: 'Chemical Bonding and Molecular Structure',
    topicId: 'molecular-orbital-theory',
    topicTitle: 'Molecular Orbital Theory & Bond Order',
    question: 'According to Molecular Orbital (MO) Theory, the bond order of diatomic Oxygen molecule (O₂) and its magnetic character are:',
    options: [
      'Bond order = 2, Paramagnetic (2 unpaired electrons in π*2px and π*2py)',
      'Bond order = 2, Diamagnetic',
      'Bond order = 3, Paramagnetic',
      'Bond order = 1.5, Diamagnetic'
    ],
    correctIndex: 0,
    explanation: 'For O₂ (16 electrons): Electronic configuration is σ1s² σ*1s² σ2s² σ*2s² σ2pz² (π2px² = π2py²) (π*2px¹ = π*2py¹). Number of bonding electrons N_b = 10, anti-bonding N_a = 6. Bond order = (N_b - N_a) / 2 = (10 - 6) / 2 = 2. Due to two unpaired electrons in degenerate π* antibonding orbitals, O₂ is paramagnetic.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 4, Page 129'
  },

  // ================= 2014 AIPMT / NEET CHEMISTRY =================
  {
    id: 'chem-pyq-2014-chem-1',
    year: 2014,
    subject: 'chemistry',
    chapterId: 'electrochemistry',
    chapterTitle: 'Electrochemistry',
    topicId: 'faradays-laws-electrolysis',
    topicTitle: 'Faraday\'s 1st and 2nd Laws of Electrolysis',
    question: 'How many Faradays of electric charge are required to electroplate 1 mole of aluminum from molten Al₂O₃ (Al³⁺ + 3 e⁻ → Al)?',
    options: [
      '1 F',
      '2 F',
      '3 F (3 × 96500 C)',
      '6 F'
    ],
    correctIndex: 2,
    explanation: 'The cathodic reduction reaction is: Al³⁺ + 3 e⁻ → Al. To produce 1 mole of aluminum metal, 3 moles of electrons are required. Since 1 mole of electrons carries 1 Faraday (F) of electric charge, total charge required = 3 Faradays (3F).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 3, Page 85'
  },
  {
    id: 'chem-pyq-2014-chem-2',
    year: 2014,
    subject: 'chemistry',
    chapterId: 'organic-chemistry-some-basic-principles-and-techniques',
    chapterTitle: 'Organic Chemistry: Basic Principles & Techniques',
    topicId: 'inductive-mesomeric-effects',
    topicTitle: 'Acidity of Carboxylic Acids & Substituted Benzoic Acids',
    question: 'Which of the following carboxylic acids has the HIGHEST acidity (lowest pKa value) due to strong electron-withdrawing (-I) inductive effect?',
    options: [
      'Formic acid (HCOOH)',
      'Acetic acid (CH₃COOH)',
      'Trichloroacetic acid (CCl₃COOH)',
      'Chloroacetic acid (CH₂ClCOOH)'
    ],
    correctIndex: 2,
    explanation: 'Three electronegative chlorine atoms on the α-carbon in CCl₃COOH exert powerful electron-withdrawing (-I) inductive effects, dispersing the negative charge on the conjugate carboxylate anion (CCl₃COO⁻) and vastly increasing acid strength.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 12, Page 382'
  }
];
