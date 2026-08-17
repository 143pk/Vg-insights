import fs from 'fs';
import path from 'path';
import { TOPICS, CHAPTERS, CLASSIFICATIONS, SUBJECTS } from '../src/data/neetData';
import { TOPIC_DETAILS } from '../src/data/topicDetails';

function camelCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^[A-Z]/, c => c.toLowerCase());
}

function cleanVarName(id: string): string {
  const cleaned = id.replace(/[^a-zA-Z0-9]/g, ' ');
  const words = cleaned.trim().split(/\s+/);
  return words.map((w, idx) => idx === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('') + 'Details';
}

function determineSubject(topicId: string, title: string, chapterName: string): 'Physics' | 'Chemistry' | 'Biology' {
  if (topicId.startsWith('phys-')) return 'Physics';
  if (topicId.startsWith('chem-')) return 'Chemistry';
  if (topicId.startsWith('bio-')) return 'Biology';

  const lower = (topicId + ' ' + title + ' ' + chapterName).toLowerCase();
  if (lower.includes('phys') || lower.includes('motion') || lower.includes('force') || lower.includes('wave') || lower.includes('electric') || lower.includes('optics') || lower.includes('magnet')) return 'Physics';
  if (lower.includes('chem') || lower.includes('reaction') || lower.includes('bond') || lower.includes('acid') || lower.includes('atom') || lower.includes('element')) return 'Chemistry';
  return 'Biology';
}

function generateSvgForTopic(subject: string, title: string, topicId: string): { svgContent: string; caption: string } {
  if (subject === 'Physics') {
    return {
      svgContent: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto"><rect width="500" height="200" fill="#f8fafc" rx="12"/><line x1="40" y1="160" x2="460" y2="160" stroke="#64748b" stroke-width="3"/><rect x="80" y="100" width="70" height="60" fill="#3b82f6" rx="6"/><text x="115" y="135" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">System State</text><line x1="150" y1="130" x2="350" y2="130" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/><text x="250" y="115" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle">Interaction Vector</text><defs><marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/></marker></defs></svg>`,
      caption: `Schematic vector diagram illustrating fundamental physical principles for ${title}.`
    };
  } else if (subject === 'Chemistry') {
    return {
      svgContent: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto"><rect width="500" height="200" fill="#f8fafc" rx="12"/><circle cx="150" cy="100" r="40" fill="#ec4899" opacity="0.8"/><text x="150" y="105" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Species A</text><circle cx="350" cy="100" r="40" fill="#8b5cf6" opacity="0.8"/><text x="350" y="105" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Species B</text><path d="M 200 100 Q 250 60 300 100" fill="none" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-chem)"/><text x="250" y="70" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">Reaction Pathway</text><defs><marker id="arrow-chem" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/></marker></defs></svg>`,
      caption: `Reaction coordinate & molecular structural transition schematic for ${title}.`
    };
  } else {
    return {
      svgContent: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto"><rect width="500" height="200" fill="#f8fafc" rx="12"/><rect x="60" y="50" width="160" height="100" fill="#10b981" rx="12" opacity="0.2"/><rect x="70" y="60" width="140" height="80" fill="#10b981" rx="8" opacity="0.4"/><text x="140" y="105" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">Biological Structure</text><line x1="230" y1="100" x2="280" y2="100" stroke="#059669" stroke-width="3" marker-end="url(#arrow-bio)"/><rect x="290" y="60" width="150" height="80" fill="#047857" rx="8"/><text x="365" y="105" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Functional Outcome</text><defs><marker id="arrow-bio" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/></marker></defs></svg>`,
      caption: `Biological structure, cellular mechanism & physiological pathway diagram for ${title}.`
    };
  }
}

function processMissingTopics() {
  const missingKeys = Object.keys(TOPICS).filter(id =>
    !TOPIC_DETAILS[id] &&
    !TOPIC_DETAILS['phys-' + id] &&
    !TOPIC_DETAILS['chem-' + id] &&
    !TOPIC_DETAILS['bio-' + id] &&
    !TOPIC_DETAILS[id.replace(/^(phys|chem|bio)-/, '')]
  );

  console.log(`Found ${missingKeys.length} missing topics.`);

  const generatedFiles: { varName: string; filename: string; topicId: string }[] = [];

  for (const topicId of missingKeys) {
    const t = TOPICS[topicId];
    if (!t) continue;

    const ch = CHAPTERS[t.chapterId];
    const cl = ch ? CLASSIFICATIONS[ch.classificationId] : null;
    const sub = cl ? SUBJECTS[cl.subjectId] : null;

    const chapterName = ch ? ch.title : 'NEET Syllabus Chapter';
    const classificationName = cl ? cl.title : 'Core Concept';
    const subjectName = determineSubject(topicId, t.title, chapterName);
    const className = (ch && ch.chapterNumber > 15) || (cl && cl.title.toLowerCase().includes('12')) ? 'Class 12' : 'Class 11';

    const varName = cleanVarName(topicId);
    const filename = `${varName}.ts`;
    const filePath = path.join(process.cwd(), 'src/data/topics', filename);

    const learnList = t.notes?.learn || [
      `${t.title} is a core topic in NEET UG ${subjectName}.`,
      `Understanding step-by-step mechanisms and NCERT definitions is essential for solving high-yield MCQs.`
    ];

    const keyConceptsList = t.notes?.keyConcepts || [
      {
        term: t.title,
        symbol: '',
        definition: `Fundamental concept in ${chapterName} required for NEET UG examination.`,
        neetNote: `Directly tested in NCERT-based NEET questions.`
      }
    ];

    const formulasList = t.notes?.formulas || [];
    const neetImportantPointsList = t.notes?.neetImportantPoints || [
      `Official NEET UG 2026 syllabus topic: ${t.title}.`,
      `NCERT conceptual statements and diagrams must be thoroughly reviewed.`,
      `Key definitions and terms are high-yield for Match the Following and Statement-based MCQs.`
    ];

    const commonConfusionsList = t.notes?.commonConfusions || [
      {
        commonConfusion: `Confusing fundamental terminology in ${t.title}.`,
        correctFact: `NCERT definitions provide strict technical boundaries for ${t.title}.`,
        whyItMattersForNEET: `NEET tests exact conceptual distinctions to create distractor options.`
      }
    ];

    const quickRevisionList = t.notes?.quickRevision || [
      `${t.title}: Key concept in ${chapterName}.`,
      `NCERT Core: Remember key terminology, formulas, and diagrams.`
    ];

    const pyqsList = t.pyqs || [];
    const practiceQuestionsList = (t as any).practiceQuestions || [];

    const { svgContent, caption } = generateSvgForTopic(subjectName, t.title, topicId);

    const fileContent = `import { DetailedTopicContent } from '../../types/neet';

export const ${varName}: DetailedTopicContent = {
  topicId: ${JSON.stringify(topicId)},
  topicName: ${JSON.stringify(t.title)},
  subject: ${JSON.stringify(subjectName)},
  class: ${JSON.stringify(className)},
  classification: ${JSON.stringify(classificationName)},
  chapter: ${JSON.stringify(chapterName)},

  whatIsThisTopic: ${JSON.stringify(
    t.summary ||
      `${t.title} is a key NEET UG syllabus topic in ${chapterName}. It covers step-by-step principles, NCERT definitions, mathematical or structural formulations, and practical exam applications.`
  )},

  basicIdea: ${JSON.stringify(learnList, null, 4)},

  importantTerms: ${JSON.stringify(keyConceptsList, null, 4)},

  conceptExplanation: [
    {
      heading: ${JSON.stringify(`1. Fundamentals & Core Principles of ${t.title}`)},
      paragraphs: [
        ${JSON.stringify(`${t.title} forms a foundational component of ${chapterName} in NEET UG ${subjectName}.`)},
        ${JSON.stringify(`Mastering this topic requires a clear understanding of basic concepts, intermediate reasoning, and NEET-level applications. Students must focus on WHY physical/chemical/biological phenomena occur rather than merely memorizing facts.`)},
        ...${JSON.stringify(learnList.slice(0, 3))}
      ],
      visual: {
        type: 'svg',
        svgContent: ${JSON.stringify(svgContent)},
        caption: ${JSON.stringify(caption)},
        guide: ${JSON.stringify(`Diagram Guide: Observe the key structural components, vectors, or pathways illustrated in the diagram for ${t.title}.`)}
      },
      importantPoints: ${JSON.stringify(neetImportantPointsList.slice(0, 3))}
    },
    {
      heading: ${JSON.stringify(`2. Step-by-Step Mechanisms & NEET Application`)},
      paragraphs: [
        ${JSON.stringify(`In NEET UG questions on ${t.title}, examiners frequently test multi-step logical reasoning and NCERT textual statements.`)},
        ${JSON.stringify(`Step 1: Identify the underlying physical/chemical/biological system and key variables.`)},
        ${JSON.stringify(`Step 2: Apply standard NCERT principles or quantitative relations to evaluate the correct outcome.`)},
        ${JSON.stringify(`Step 3: Watch out for negative marking traps and common student misconceptions.`)}-
      ],
      importantPoints: ${JSON.stringify(neetImportantPointsList.slice(3))}
    }
  ],

  formulae: ${JSON.stringify(formulasList.map((f: any) => ({
    title: f.title || f.formulaName || t.title,
    formula: typeof f === 'string' ? f : f.formula || '',
    meaning: f.meaning || f.whatItRepresents || '',
    symbols: f.symbols || f.variables || '',
    unit: f.unit || '',
    conditions: f.conditions || f.note || '',
    whenToUse: f.whenToUse || f.explanation || 'Use in standard NEET problem solving.',
    calculationExample: f.calculationExample || undefined
  })), null, 4)},

  visualLearning: {
    type: 'svg',
    svgContent: ${JSON.stringify(svgContent)},
    caption: ${JSON.stringify(`Visual summary diagram for ${t.title}.`)}
  },

  neetImportantPoints: ${JSON.stringify(neetImportantPointsList, null, 4)},

  commonConfusions: ${JSON.stringify(commonConfusionsList, null, 4)},

  quickRevision: ${JSON.stringify(quickRevisionList, null, 4)},

  practiceQuestions: ${JSON.stringify(practiceQuestionsList, null, 4)},

  pyqs: ${JSON.stringify(pyqsList, null, 4)}
};
`;

    fs.writeFileSync(filePath, fileContent, 'utf-8');
    generatedFiles.push({ varName, filename, topicId });
  }

  console.log(`Successfully created ${generatedFiles.length} missing topic files.`);

  // Now update src/data/topicDetails.ts
  const topicDetailsPath = path.join(process.cwd(), 'src/data/topicDetails.ts');
  let topicDetailsContent = fs.readFileSync(topicDetailsPath, 'utf-8');

  // Generate import lines
  const importLines = generatedFiles
    .map(g => `import { ${g.varName} } from './topics/${g.filename.replace('.ts', '')}';`)
    .join('\n');

  // Insert imports before TOPIC_DETAILS export
  const exportIndex = topicDetailsContent.indexOf('export const TOPIC_DETAILS: Record<string, DetailedTopicContent> = {');
  if (exportIndex !== -1) {
    topicDetailsContent =
      topicDetailsContent.slice(0, exportIndex) +
      `\n// Auto-generated missing topic imports\n${importLines}\n\n` +
      topicDetailsContent.slice(exportIndex);

    // Insert entries into TOPIC_DETAILS object right after opening brace
    const mapEntryLines = generatedFiles
      .map(g => `  "${g.topicId}": ${g.varName},`)
      .join('\n');

    const openBraceIndex = topicDetailsContent.indexOf('export const TOPIC_DETAILS: Record<string, DetailedTopicContent> = {\n');
    if (openBraceIndex !== -1) {
      const insertPos = openBraceIndex + 'export const TOPIC_DETAILS: Record<string, DetailedTopicContent> = {\n'.length;
      topicDetailsContent =
        topicDetailsContent.slice(0, insertPos) +
        mapEntryLines + '\n' +
        topicDetailsContent.slice(insertPos);
    }
  }

  fs.writeFileSync(topicDetailsPath, topicDetailsContent, 'utf-8');
  console.log('Successfully updated src/data/topicDetails.ts with all missing topic imports and entries.');
}

processMissingTopics();
