export interface VerifiedPyq {
  id: string;
  year: string;
  exam: string;
  topicId: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  conceptTested: string;
}

export const BIOMOLECULES_VERIFIED_PYQS: VerifiedPyq[] = [
  {
    id: "pyq-biomol-2023-1",
    year: "2023",
    exam: "NEET UG",
    topicId: "chem-carbohydrates-structure",
    question: "Which of the following statements is NOT correct regarding (+)-Lactose?",
    options: [
      "(+)-Lactose is a reducing sugar and gives Fehling's test.",
      "(+)-Lactose contains β-D-galactose and β-D-glucose units.",
      "(+)-Lactose is an aldohexose.",
      "(+)-Lactose has β(1→4) glycosidic linkage between C1 of galactose and C4 of glucose."
    ],
    correctAnswer: 2,
    explanation: "Option C is INCORRECT (and hence the correct answer). Lactose is a DISACCHARIDE (C₁₂H₂₂O₁₁), NOT an aldohexose (which is a 6-carbon monosaccharide like glucose or galactose). Lactose is composed of β-D-galactopyranose and β-D-glucopyranose joined by a β(1→4) glycosidic linkage. Because the C1 hemiacetal group of the glucose ring is free, it acts as a reducing sugar and reduces Fehling's solution.",
    conceptTested: "Structure and classification of Lactose as a reducing disaccharide with β(1→4) linkage"
  },
  {
    id: "pyq-biomol-2023-2",
    year: "2023",
    exam: "NEET UG",
    topicId: "chem-nucleic-acids-enzymes",
    question: "The correct statement regarding RNA and DNA is:",
    options: [
      "The sugar component in RNA is 2′-deoxyribose and the base is thymine.",
      "The sugar component in RNA is arabinose and the base is uracil.",
      "The sugar component in DNA is 2′-deoxyribose and the base is thymine.",
      "The sugar component in DNA is ribose and the base is uracil."
    ],
    correctAnswer: 2,
    explanation: "DNA contains β-D-2′-deoxyribose as its pentose sugar and the nitrogenous base Thymine (along with Adenine, Guanine, and Cytosine). In contrast, RNA contains β-D-ribose and Uracil (in place of Thymine). Thus, Option C is the correct factual statement from NCERT.",
    conceptTested: "Distinction between sugars and nitrogenous bases of DNA vs RNA"
  },
  {
    id: "pyq-biomol-2022-1",
    year: "2022",
    exam: "NEET UG",
    topicId: "chem-carbohydrates-structure",
    question: "Which of the following is a non-reducing sugar?",
    options: [
      "Glucose",
      "Sucrose",
      "Maltose",
      "Lactose"
    ],
    correctAnswer: 1,
    explanation: "Sucrose is a non-reducing sugar because its glycosidic bond joins the reducing anomeric carbon of α-D-glucose (C-1) directly to the reducing anomeric carbon of β-D-fructose (C-2). Both potential carbonyl/hemiacetal groups are locked in the glycosidic linkage, so it cannot mutarotate or reduce Tollens' or Fehling's reagents.",
    conceptTested: "Identification of reducing vs non-reducing sugars based on glycosidic linkage"
  },
  {
    id: "pyq-biomol-2022-2",
    year: "2022",
    exam: "NEET UG",
    topicId: "chem-nucleic-acids-enzymes",
    question: "Which of the following nitrogenous bases is NOT present in DNA?",
    options: [
      "Adenine",
      "Guanine",
      "Cytosine",
      "Uracil"
    ],
    correctAnswer: 3,
    explanation: "DNA contains four nitrogenous bases: Adenine (A), Guanine (G), Cytosine (C), and Thymine (T). Uracil (U) is a pyrimidine base present exclusively in RNA in place of Thymine.",
    conceptTested: "Nitrogenous base composition in DNA vs RNA"
  },
  {
    id: "pyq-biomol-2021-1",
    year: "2021",
    exam: "NEET UG",
    topicId: "chem-proteins-amino-acids",
    question: "The non-essential amino acid among the following is:",
    options: [
      "Lysine",
      "Valine",
      "Leucine",
      "Alanine"
    ],
    correctAnswer: 3,
    explanation: "Alanine is a non-essential amino acid because it can be synthesized internally by human metabolic pathways (transamination of pyruvate). Lysine, Valine, and Leucine are essential amino acids that must be supplied through the diet.",
    conceptTested: "Classification of essential vs non-essential amino acids"
  },
  {
    id: "pyq-biomol-2020-1",
    year: "2020",
    exam: "NEET UG",
    topicId: "chem-carbohydrates-structure",
    question: "Sucrose on hydrolysis gives:",
    options: [
      "β-D-Glucose + α-D-Fructose",
      "α-D-Glucose + β-D-Glucose",
      "α-D-Glucose + β-D-Fructose",
      "α-D-Fructose + β-D-Fructose"
    ],
    correctAnswer: 2,
    explanation: "Sucrose (cane sugar) is a dextrorotatory disaccharide. Upon acid-catalysed or enzymatic (invertase) hydrolysis, it yields an equimolar mixture of α-D-glucopyranose and β-D-fructofuranose. This mixture is called Invert Sugar because the optical rotation inverts from dextrorotatory (+66.5°) to laevorotatory (-20°).",
    conceptTested: "Hydrolysis products of sucrose and invert sugar"
  },
  {
    id: "pyq-biomol-2020-2",
    year: "2020",
    exam: "NEET UG",
    topicId: "chem-proteins-amino-acids",
    question: "Which of the following is a basic amino acid?",
    options: [
      "Lysine",
      "Valine",
      "Tyrosine",
      "Glutamic acid"
    ],
    correctAnswer: 0,
    explanation: "Lysine contains two amino groups (an α-NH₂ and an ε-NH₂ on its side chain) and one carboxylic acid group (-COOH), giving it a net basic character (isoelectric pH > 7). Valine and Tyrosine are neutral amino acids, whereas Glutamic acid is an acidic amino acid with two -COOH groups.",
    conceptTested: "Classification of amino acids based on acidic, basic, and neutral side chains"
  },
  {
    id: "pyq-biomol-2019-1",
    year: "2019",
    exam: "NEET UG",
    topicId: "chem-carbohydrates-structure",
    question: "The difference between amylose and amylopectin is:",
    options: [
      "Amylopectin have 1→4 α-linkage and 1→6 α-linkage",
      "Amylose have 1→4 α-linkage and 1→6 β-linkage",
      "Amylopectin have 1→4 α-linkage and 1→6 β-linkage",
      "Amylose is composed of galactose and glucose"
    ],
    correctAnswer: 0,
    explanation: "Amylose is a linear unbranched polymer of α-D-glucose joined exclusively by α(1→4) glycosidic linkages. Amylopectin is a branched polymer containing α-D-glucose units joined by α(1→4) linkages in the linear chains and α(1→6) linkages at branch points (occurring every 20–25 glucose units).",
    conceptTested: "Structural differences and glycosidic linkage types in Amylose vs Amylopectin"
  },
  {
    id: "pyq-biomol-2018-1",
    year: "2018",
    exam: "NEET UG",
    topicId: "chem-proteins-amino-acids",
    question: "Which of the following statements is NOT correct?",
    options: [
      "Ovalbumin is a simple food reserve in egg white.",
      "Blood proteins thrombin and fibrinogen are involved in blood clotting.",
      "Denaturation makes protein more active.",
      "Insulin maintains sugar level in the blood of a human body."
    ],
    correctAnswer: 2,
    explanation: "Option C is INCORRECT (and the correct answer). Denaturation causes unfolding of globular proteins and uncoiling of helices due to disruption of hydrogen bonds and secondary/tertiary structures, resulting in a COMPLETE LOSS of biological activity, not an increase in activity.",
    conceptTested: "Denaturation of proteins and biological function"
  },
  {
    id: "pyq-biomol-2017-1",
    year: "2017",
    exam: "NEET UG",
    topicId: "chem-proteins-amino-acids",
    question: "Which of the following statements is NOT correct of enzymes?",
    options: [
      "Enzymes are highly specific in their action on a substrate.",
      "Enzymes are biocatalysts.",
      "Enzymes change the value of equilibrium constant of a reaction.",
      "Most enzymes are globular proteins."
    ],
    correctAnswer: 2,
    explanation: "Option C is incorrect because catalysts (including biological enzymes) accelerate both forward and backward reactions equally by lowering activation energy (Ea); they do NOT alter the equilibrium constant (Keq) or standard Gibbs free energy (ΔG°).",
    conceptTested: "Enzymatic properties and catalytic kinetics"
  },
  {
    id: "pyq-biomol-2016-1",
    year: "2016",
    exam: "NEET UG Phase-I",
    topicId: "chem-proteins-amino-acids",
    question: "Which of the following is a water-soluble vitamin?",
    options: [
      "Vitamin E",
      "Vitamin K",
      "Vitamin A",
      "Vitamin B₁"
    ],
    correctAnswer: 3,
    explanation: "Vitamins are classified into fat-soluble (A, D, E, K) and water-soluble (B-complex group and Vitamin C). Vitamin B₁ (Thiamine) is water-soluble and must be regularly supplied in the diet as it is readily excreted in urine.",
    conceptTested: "Classification and solubility of vitamins"
  },
  {
    id: "pyq-biomol-2012-1",
    year: "2012",
    exam: "AIPMT Prelims",
    topicId: "chem-proteins-amino-acids",
    question: "Deficiency of Vitamin B₁ causes the disease:",
    options: [
      "Cheilosis",
      "Sterility",
      "Convulsions",
      "Beriberi"
    ],
    correctAnswer: 3,
    explanation: "Deficiency of Vitamin B₁ (Thiamine) causes Beriberi, characterized by loss of appetite, muscle weakness, and neurological disorders. Cheilosis is caused by Vitamin B₂ deficiency, convulsions by Vitamin B₆ deficiency, and sterility/muscular weakness by Vitamin E deficiency.",
    conceptTested: "Vitamin deficiency diseases and clinical manifestations"
  }
];
