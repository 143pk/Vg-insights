import { PYQQuestion } from './pyqDatabase';

export const BIOLOGY_PYQS_ARCHIVE: PYQQuestion[] = [
  // ================= 2016 NEET UG BIOLOGY =================
  {
    id: 'bio-pyq-2016-bio-1',
    year: 2016,
    subject: 'biology',
    chapterId: 'reproductive-health',
    chapterTitle: 'Reproductive Health',
    topicId: 'contraception',
    topicTitle: 'Contraceptive Methods & IUDs',
    question: 'Which of the following is a hormone-releasing Intrauterine Device (IUD)?',
    options: [
      'Lippes loop',
      'CuT',
      'Multiload 375',
      'LNG-20'
    ],
    correctIndex: 3,
    explanation: 'LNG-20 and Progestasert are hormone-releasing IUDs. They make the uterus unsuitable for implantation and the cervix hostile to the sperms. CuT, Cu7, and Multiload 375 are copper-releasing IUDs; Lippes loop is a non-medicated IUD.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 4, Page 60'
  },
  {
    id: 'bio-pyq-2016-bio-2',
    year: 2016,
    subject: 'biology',
    chapterId: 'excretory-products-and-their-elimination',
    chapterTitle: 'Excretory Products and their Elimination',
    topicId: 'counter-current-mechanism',
    topicTitle: 'Counter Current Mechanism & Concentration of Urine',
    question: 'The high osmolarity (up to 1200 mOsmol/L) of the inner medullary interstitium in mammalian kidney is maintained by:',
    options: [
      'Active transport of glucose and amino acids',
      'Counter-current mechanism between Henle\'s loop and Vasa recta transporting NaCl and Urea',
      'Ultrafiltration at Bowman\'s capsule',
      'Secretion of renin by juxtaglomerular apparatus'
    ],
    correctIndex: 1,
    explanation: 'The proximity between Henle\'s loop and vasa recta, as well as the counter current in them, helps in maintaining an increasing osmolarity towards inner medullary interstitium (300 to 1200 mOsmol/L). This gradient is mainly caused by NaCl and urea.',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 11, Chapter 19, Page 296'
  },

  // ================= 2014 AIPMT / NEET BIOLOGY =================
  {
    id: 'bio-pyq-2014-bio-1',
    year: 2014,
    subject: 'biology',
    chapterId: 'evolution',
    chapterTitle: 'Evolution',
    topicId: 'hardy-weinberg-equilibrium',
    topicTitle: 'Hardy-Weinberg Principle & Allele Frequencies',
    question: 'In a population at Hardy-Weinberg equilibrium, the frequency of recessive allele (q) is 0.4. What is the percentage of heterozygous carriers (2pq) in this population?',
    options: [
      '16%',
      '24%',
      '48%',
      '36%'
    ],
    correctIndex: 2,
    explanation: 'According to Hardy-Weinberg law: p + q = 1. Given q = 0.4, therefore dominant allele frequency p = 1 - 0.4 = 0.6. The frequency of heterozygous individuals is 2pq = 2 × (0.6) × (0.4) = 0.48 = 48%.',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 12, Chapter 7, Page 137'
  },
  {
    id: 'bio-pyq-2014-bio-2',
    year: 2014,
    subject: 'biology',
    chapterId: 'biological-classification',
    chapterTitle: 'Biological Classification',
    topicId: 'viruses-viroids-prions',
    topicTitle: 'Viruses, Viroids & Prions Characteristics',
    question: 'Viroids differ from viruses in having:',
    options: [
      'DNA molecules with protein coat',
      'Free infectious RNA molecules without a protein coat',
      'Double-stranded RNA wrapped in capsomeres',
      'Infectious proteinaceous fibrils without nucleic acid'
    ],
    correctIndex: 1,
    explanation: 'Viroids were discovered by T.O. Diener in 1971 as an infectious agent that was smaller than viruses and caused potato spindle tuber disease. It was found to be a free RNA; it lacked the protein coat that is found in viruses, hence the name viroid.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 2, Page 27'
  }
];
