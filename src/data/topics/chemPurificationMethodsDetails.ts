import { DetailedTopicContent } from '../../types/neet';

export const chemPurificationMethodsDetails: DetailedTopicContent = {
  topicId: "chem-purification-methods",
  topicName: "Purification & Characterisation of Organic Compounds",
  subject: "Chemistry",
  class: "Class 11",
  classification: "Organic Chemistry (Class 11)",
  chapter: "Organic Chemistry: Some Basic Principles & Techniques",

  whatIsThisTopic: "Purification methods (crystallization, sublimation, distillation, chromatography) and qualitative/quantitative analysis (Lassaigne's test, Dumas, Kjeldahl estimation of N, S, P, halogens).",

  basicIdea: [
  "Purification Methods: Sublimation (sublimable from non-sublimable), Crystallization (difference in solubilities in suitable solvent), Distillation (volatile liquids from non-volatile/liquids with sufficient boiling point difference), Fractional Distillation (close boiling points), Steam Distillation (steam-volatile, water-immiscible e.g., aniline), Differential Extraction, and Chromatography (paper, column, thin layer).",
  "Qualitative Analysis: Lassaigne's Test detects N (Prussian blue [Fe₄[Fe(CN)₆]₃]), S (black PbS ppt or violet with sodium nitroprusside), and Halogens (AgCl white, AgBr pale yellow, AgI yellow ppt).",
  "Quantitative Analysis: Carbon & Hydrogen estimated as CO₂ and H₂O using CuO. Nitrogen estimated by Dumas Method (N₂ gas collected over KOH) and Kjeldahl Method (NH₃ absorbed in known excess H₂SO₄; not applicable to nitro, azo, and pyridine N). Halogens estimated by Carius Method (as AgX)."
],

  importantTerms: [
    {
        "term": "Lassaigne's Test",
        "definition": "Na + C + N -> NaCN; 4 NaCN + FeSO₄ -> Na₄[Fe(CN)₆]; 3 Na₄[Fe(CN)₆] + 4 FeCl₃ -> Fe₄[Fe(CN)₆]₃ (Prussian Blue).",
        "neetNote": "High-yield term for NEET UG examination."
    },
    {
        "term": "Kjeldahl Method %N = [1.4 × M × V (mEq acid consumed)] / Mass of organic compound (g).",
        "definition": "Key technical term in NCERT syllabus required for NEET UG examination.",
        "neetNote": "Essential concept for NEET MCQs."
    },
    {
        "term": "Chromatography Principle",
        "definition": "Differential adsorption/partitioning of components between stationary and mobile phases.",
        "neetNote": "High-yield term for NEET UG examination."
    }
],

  conceptExplanation: [
    {
      heading: "1. Fundamentals & Core Principles of Purification & Characterisation of Organic Compounds",
      paragraphs: [
        "Purification & Characterisation of Organic Compounds forms a foundational component of Organic Chemistry: Some Basic Principles & Techniques in NEET UG Chemistry.",
        "Mastering this topic requires a clear understanding of basic concepts, intermediate reasoning, and NEET-level applications. Students must focus on WHY physical/chemical/biological phenomena occur rather than merely memorizing facts.",
        ...["Purification Methods: Sublimation (sublimable from non-sublimable), Crystallization (difference in solubilities in suitable solvent), Distillation (volatile liquids from non-volatile/liquids with sufficient boiling point difference), Fractional Distillation (close boiling points), Steam Distillation (steam-volatile, water-immiscible e.g., aniline), Differential Extraction, and Chromatography (paper, column, thin layer).","Qualitative Analysis: Lassaigne's Test detects N (Prussian blue [Fe₄[Fe(CN)₆]₃]), S (black PbS ppt or violet with sodium nitroprusside), and Halogens (AgCl white, AgBr pale yellow, AgI yellow ppt).","Quantitative Analysis: Carbon & Hydrogen estimated as CO₂ and H₂O using CuO. Nitrogen estimated by Dumas Method (N₂ gas collected over KOH) and Kjeldahl Method (NH₃ absorbed in known excess H₂SO₄; not applicable to nitro, azo, and pyridine N). Halogens estimated by Carius Method (as AgX)."]
      ],
      visual: {
        type: 'svg',
        svgContent: "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-lg mx-auto\"><rect width=\"500\" height=\"200\" fill=\"#f8fafc\" rx=\"12\"/><circle cx=\"150\" cy=\"100\" r=\"40\" fill=\"#ec4899\" opacity=\"0.8\"/><text x=\"150\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species A</text><circle cx=\"350\" cy=\"100\" r=\"40\" fill=\"#8b5cf6\" opacity=\"0.8\"/><text x=\"350\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species B</text><path d=\"M 200 100 Q 250 60 300 100\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" marker-end=\"url(#arrow-chem)\"/><text x=\"250\" y=\"70\" fill=\"#2563eb\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Reaction Pathway</text><defs><marker id=\"arrow-chem\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#2563eb\"/></marker></defs></svg>",
        caption: "Reaction coordinate & molecular structural transition schematic for Purification & Characterisation of Organic Compounds.",
        guide: "Diagram Guide: Observe the key structural components, vectors, or pathways illustrated in the diagram for Purification & Characterisation of Organic Compounds."
      },
      importantPoints: ["Kjeldahl's method fails for compounds containing nitrogen in ring (e.g., pyridine, quinoline) and nitro (-NO₂) or azo (-N=N-) groups because nitrogen in these compounds is not converted to ammonium sulphate.","Aniline is purified by steam distillation because it is steam volatile and immiscible with water.","Chromatography R_f value = (Distance moved by substance) / (Distance moved by solvent front)."]
    },
    {
      heading: "2. Step-by-Step Mechanisms & NEET Application",
      paragraphs: [
        "In NEET UG questions on Purification & Characterisation of Organic Compounds, examiners frequently test multi-step logical reasoning and NCERT textual statements.",
        "Step 1: Identify the underlying physical/chemical/biological system and key variables.",
        "Step 2: Apply standard NCERT principles or quantitative relations to evaluate the correct outcome.",
        "Step 3: Watch out for negative marking traps and common student misconceptions."
      ],
      importantPoints: []
    }
  ],

  formulae: [
  {
    "title": "Kjeldahl Nitrogen Percentage",
    "formula": "% N = \frac{1.4 \times M \times V}{m}",
    "meaning": "",
    "symbols": "",
    "unit": "",
    "conditions": "",
    "whenToUse": "Use in standard NEET problem solving."
  },
  {
    "title": "Carius Halogen Percentage",
    "formula": "% X = \frac{\text{Atomic Mass of } X}{\text{Molar Mass of } AgX} \times \frac{\text{Mass of } AgX}{\text{Mass of Compound}} \times 100",
    "meaning": "",
    "symbols": "",
    "unit": "",
    "conditions": "",
    "whenToUse": "Use in standard NEET problem solving."
  },
  {
    "title": "Dumas Nitrogen Percentage",
    "formula": "% N = \frac{28}{22400} \times \frac{V_{STP}}{\text{Mass of Compound}} \times 100",
    "meaning": "",
    "symbols": "",
    "unit": "",
    "conditions": "",
    "whenToUse": "Use in standard NEET problem solving."
  }
],

  visualLearning: {
    type: 'svg',
    svgContent: "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-lg mx-auto\"><rect width=\"500\" height=\"200\" fill=\"#f8fafc\" rx=\"12\"/><circle cx=\"150\" cy=\"100\" r=\"40\" fill=\"#ec4899\" opacity=\"0.8\"/><text x=\"150\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species A</text><circle cx=\"350\" cy=\"100\" r=\"40\" fill=\"#8b5cf6\" opacity=\"0.8\"/><text x=\"350\" y=\"105\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Species B</text><path d=\"M 200 100 Q 250 60 300 100\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" marker-end=\"url(#arrow-chem)\"/><text x=\"250\" y=\"70\" fill=\"#2563eb\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Reaction Pathway</text><defs><marker id=\"arrow-chem\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#2563eb\"/></marker></defs></svg>",
    caption: "Visual summary diagram for Purification & Characterisation of Organic Compounds."
  },

  neetImportantPoints: [
  "Kjeldahl's method fails for compounds containing nitrogen in ring (e.g., pyridine, quinoline) and nitro (-NO₂) or azo (-N=N-) groups because nitrogen in these compounds is not converted to ammonium sulphate.",
  "Aniline is purified by steam distillation because it is steam volatile and immiscible with water.",
  "Chromatography R_f value = (Distance moved by substance) / (Distance moved by solvent front)."
],

  commonConfusions: [
  {
    "commonConfusion": "Confusing Kjeldahl applicability with all nitrogen compounds.",
    "correctFact": "Nitro, azo, and ring nitrogen (pyridine) CANNOT be estimated by Kjeldahl method; Dumas method must be used.",
    "whyItMattersForNEET": "Extremely high yield conceptual question tested repeatedly in NEET."
  }
],

  quickRevision: [
  "Prussian blue = Fe₄[Fe(CN)₆]₃ for Lassaigne N test",
  "Steam distillation for Aniline & o-nitrophenol",
  "Kjeldahl fails for nitro, azo, pyridine N"
],

  practiceQuestions: [],

  pyqs: []
};
