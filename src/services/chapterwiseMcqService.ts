import { ChapterwiseMCQ, ChapterMCQProgress } from '../types/chapterwiseMcq';
import { MistakeBookService, MistakeRecord } from './mistakeBookService';
import { db, auth, handleFirestoreError, OperationType } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { TOPICS, CHAPTERS } from '../data/neetData';

const STORAGE_PREFIX = 'vg_neet_chapter_mcq_progress_';

function extractFormula(text: string): string {
  if (!text) return '';
  const match = text.match(/\$([^$]{3,80}=[^$]{3,80})\$/) || text.match(/\$([^$]{3,80}\\(?:propto|approx|Delta|le|ge)[^$]{3,80})\$/);
  if (match) return match[1].trim();
  return '';
}

export function formatTopicIdToTitle(id: string): string {
  const clean = id.replace(/^(phys|chem|bio)-/, '').replace(/-/g, ' ');
  return clean.replace(/\b\w/g, c => c.toUpperCase());
}

function isInvalidTopicLabel(topic: string | undefined | null): boolean {
  if (!topic) return true;
  const t = String(topic).trim();
  if (t === '' || t.toLowerCase() === 'undefined' || t.toLowerCase() === 'null') return true;
  if (t.length <= 2) return true; // Truncated codes like "E", "Mi", "Ma", "O"
  if (t.startsWith('phys-') || t.startsWith('chem-') || t.startsWith('bio-')) return true; // Raw slug IDs
  if (t.toLowerCase().startsWith('authentic pyq') || t.toLowerCase().startsWith('pyq:')) return true; // PYQ tags
  if (t === 'NEET' || t === 'AIPMT' || t === 'JEE' || t === 'NCERT') return true;
  return false;
}

/**
 * Parses structured sections from an explanation string if it contains standard numbered headers.
 */
function parseStructuredSectionsFromExplanation(
  explanation: string,
  correctAnswer: 'A' | 'B' | 'C' | 'D',
  options: { A: string; B: string; C: string; D: string },
  resolvedTopic: string,
  subject: string
) {
  const text = String(explanation || '').trim();
  const hasConceptHeader = /1\.\s*CONCEPT:/i.test(text);
  const hasStepHeader = /4\.\s*STEP-BY-STEP/i.test(text);

  const safeFinalAnswer = `Option ${correctAnswer}: ${options[correctAnswer] || ''}`;

  if (hasConceptHeader && hasStepHeader) {
    const extractSection = (regex: RegExp, nextRegex: RegExp): string => {
      const match = text.match(regex);
      if (!match) return '';
      const startIndex = match.index! + match[0].length;
      const rest = text.slice(startIndex);
      const nextMatch = rest.match(nextRegex);
      const sectionContent = nextMatch ? rest.slice(0, nextMatch.index!) : rest;
      return sectionContent.trim();
    };

    const concept = extractSection(/1\.\s*CONCEPT:/i, /2\.\s*GIVEN:|3\.\s*FORMULA|4\.\s*STEP/i);
    const given = extractSection(/2\.\s*GIVEN:/i, /3\.\s*FORMULA|4\.\s*STEP/i);
    const formula = extractSection(/3\.\s*(?:FORMULA\s*\/\s*PRINCIPLE|PRINCIPLE\s*\/\s*FORMULA|FORMULA):/i, /4\.\s*STEP/i);
    const stepByStep = extractSection(/4\.\s*STEP-BY-STEP\s*SOLUTION:/i, /5\.\s*FINAL|6\.\s*WHY/i);
    const finalAnswer = extractSection(/5\.\s*FINAL\s*ANSWER:/i, /6\.\s*WHY|7\.\s*QUICK/i);
    const whyOtherOptionsWrong = extractSection(/6\.\s*WHY\s*OTHER\s*OPTIONS\s*(?:ARE\s*)?WRONG:/i, /7\.\s*QUICK|$/i);

    return {
      concept: concept || `Testing fundamental principles of ${resolvedTopic} in NEET ${subject}.`,
      given: given || undefined,
      formula: formula || undefined,
      stepByStep: stepByStep || text,
      finalAnswer: finalAnswer && !finalAnswer.includes('undefined') ? finalAnswer : safeFinalAnswer,
      whyOtherOptionsWrong: whyOtherOptionsWrong || ''
    };
  }

  // Continuous prose explanation (e.g., in Chemistry, Biology, etc.)
  const formula = extractFormula(text);
  return {
    concept: `Testing fundamental principles of ${resolvedTopic} in NEET ${subject}.`,
    given: undefined,
    formula: formula || undefined,
    stepByStep: text || `Option ${correctAnswer} is correct based on standard NCERT principles.`,
    finalAnswer: safeFinalAnswer,
    whyOtherOptionsWrong: ''
  };
}

/**
 * Canonical Schema Adapter for Chapterwise MCQs.
 * Normalizes topic metadata, structured solutions, options, answers, and PYQ tags across all legacy and bulk-generated chapters.
 */
export function normalizeQuestion(rawQ: ChapterwiseMCQ, chapterId: string, itemIndex?: number): ChapterwiseMCQ {
  const normChapterId = normalizeChapterId(chapterId || rawQ.chapterId || (rawQ as any).chapter || 'units-measurements');

  // 1. Resolve canonical topic label
  // Preserve valid existing labels (e.g. "Screw gauge", "Young's Modulus & Hooke's Law", "Vernier calipers")
  let resolvedTopic = '';
  if (!isInvalidTopicLabel(rawQ.topic)) {
    resolvedTopic = String(rawQ.topic).trim();
  } else if (rawQ.topic && (rawQ.topic.startsWith('phys-') || rawQ.topic.startsWith('chem-') || rawQ.topic.startsWith('bio-'))) {
    // If rawQ.topic was a slug ID
    if (TOPICS[rawQ.topic]?.title) {
      resolvedTopic = TOPICS[rawQ.topic].title;
    } else {
      resolvedTopic = formatTopicIdToTitle(rawQ.topic);
    }
  } else if (!isInvalidTopicLabel((rawQ as any).subtopic)) {
    // Genuine subtopic concept label
    resolvedTopic = String((rawQ as any).subtopic).trim();
  } else if (!isInvalidTopicLabel((rawQ as any).subTopic)) {
    resolvedTopic = String((rawQ as any).subTopic).trim();
  } else {
    // Try topicId lookup or formatting
    const tid = (rawQ as any).topicId;
    if (tid && !isInvalidTopicLabel(tid)) {
      if (TOPICS[tid]?.title) {
        resolvedTopic = TOPICS[tid].title;
      } else {
        resolvedTopic = formatTopicIdToTitle(tid);
      }
    } else {
      const ch = CHAPTERS[normChapterId];
      resolvedTopic = ch?.title || CHAPTER_STATS_REGISTRY[normChapterId]?.chapterTitle || 'General';
    }
  }

  // Ensure resolvedTopic is never "undefined", "null", or empty
  if (isInvalidTopicLabel(resolvedTopic)) {
    resolvedTopic = CHAPTERS[normChapterId]?.title || CHAPTER_STATS_REGISTRY[normChapterId]?.chapterTitle || 'General';
  }

  // 2. Resolve topicId (preserve existing valid ID or lookup/derive)
  let resolvedTopicId = (rawQ as any).topicId;
  if (!resolvedTopicId || isInvalidTopicLabel(resolvedTopicId)) {
    if (rawQ.topic && (rawQ.topic.startsWith('phys-') || rawQ.topic.startsWith('chem-') || rawQ.topic.startsWith('bio-'))) {
      resolvedTopicId = rawQ.topic;
    } else {
      const ch = CHAPTERS[normChapterId];
      if (ch && ch.topicIds && ch.topicIds.length > 0) {
        resolvedTopicId = ch.topicIds[0];
      } else {
        resolvedTopicId = `topic-${resolvedTopic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
      }
    }
  }

  // 3. Normalize PYQ flags & Source label
  const isPYQ = Boolean(rawQ.isPYQ || (rawQ as any).isPyq);
  let source = rawQ.source;
  if (!source || source === 'undefined' || source === 'null' || source.trim() === '') {
    if (isPYQ) {
      const year = (rawQ as any).pyqDetails?.year || (rawQ as any).pyqYear || 'Verified';
      const exam = (rawQ as any).pyqDetails?.exam || 'NEET';
      source = `${exam} ${year}`;
    } else {
      source = 'VG Insights Practice';
    }
  }

  // 4. Normalize Subject, Class, and Chapter metadata
  const stats = CHAPTER_STATS_REGISTRY[normChapterId];
  const subject = rawQ.subject || stats?.subject || (normChapterId.includes('chem') ? 'Chemistry' : (normChapterId.includes('bio') ? 'Biology' : 'Physics'));
  const classLevel = rawQ.class || stats?.class || '11';
  const chapterTitle = rawQ.chapter || stats?.chapterTitle || CHAPTERS[normChapterId]?.title || 'Chapter Practice';

  // 5. Robust Question Number resolution
  let questionNumber: number = (typeof rawQ.questionNumber === 'number' && rawQ.questionNumber > 0)
    ? rawQ.questionNumber
    : (typeof (rawQ as any).q_num === 'number' && (rawQ as any).q_num > 0)
      ? (rawQ as any).q_num
      : (typeof (rawQ as any).qNum === 'number' && (rawQ as any).qNum > 0)
        ? (rawQ as any).qNum
        : 0;

  if (!questionNumber) {
    const idMatch = String(rawQ.id || '').match(/(\d+)$/);
    if (idMatch) {
      questionNumber = parseInt(idMatch[1], 10);
    } else if (typeof itemIndex === 'number' && itemIndex >= 0) {
      questionNumber = itemIndex + 1;
    } else {
      questionNumber = 1;
    }
  }

  // 6. Robust Correct Answer resolution
  const rawAns = rawQ.correctAnswer || (rawQ as any).correctOption || (rawQ as any).answer || (rawQ as any).ans;
  let correctAnswer: 'A' | 'B' | 'C' | 'D' = 'A';
  if (typeof rawAns === 'number') {
    const numToLetter: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
    correctAnswer = numToLetter[rawAns] || 'A';
  } else if (typeof rawAns === 'string') {
    const trimmed = rawAns.trim().toUpperCase();
    if (['A', 'B', 'C', 'D'].includes(trimmed)) {
      correctAnswer = trimmed as 'A' | 'B' | 'C' | 'D';
    } else if (/^[0-3]$/.test(trimmed)) {
      const numToLetter: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
      correctAnswer = numToLetter[parseInt(trimmed, 10)] || 'A';
    }
  }

  // 7. Robust Options and OptionsList resolution (strip any "A. ", "B. " prefixes)
  const stripPrefix = (str: any) => String(str ?? '').replace(/^[A-D][\.\:\-\)]\s*/, '').trim();

  let options: { A: string; B: string; C: string; D: string };
  let optionsList: string[];

  if (Array.isArray(rawQ.options)) {
    const cleaned = rawQ.options.map(stripPrefix);
    options = {
      A: cleaned[0] || '',
      B: cleaned[1] || '',
      C: cleaned[2] || '',
      D: cleaned[3] || '',
    };
    optionsList = [options.A, options.B, options.C, options.D];
  } else if (rawQ.options && typeof rawQ.options === 'object') {
    options = {
      A: stripPrefix(rawQ.options.A),
      B: stripPrefix(rawQ.options.B),
      C: stripPrefix(rawQ.options.C),
      D: stripPrefix(rawQ.options.D),
    };
    if (Array.isArray(rawQ.optionsList) && rawQ.optionsList.length === 4 && rawQ.optionsList.every(o => Boolean(o))) {
      optionsList = rawQ.optionsList.map(stripPrefix);
    } else {
      optionsList = [options.A, options.B, options.C, options.D];
    }
  } else {
    options = { A: '', B: '', C: '', D: '' };
    optionsList = ['', '', '', ''];
  }

  // 8. Correct Index guarantee
  const correctIndices: Record<string, number> = { A: 0, B: 1, C: 2, D: 3 };
  const correctIndex = typeof rawQ.correctIndex === 'number' && rawQ.correctIndex >= 0 && rawQ.correctIndex <= 3
    ? rawQ.correctIndex
    : (correctIndices[correctAnswer] ?? 0);

  // 9. Ensure explanation is non-empty string
  const rawExplanation = rawQ.explanation || (rawQ as any).solution || (rawQ as any).solutionText || (rawQ as any).stepByStep;
  const explanation = rawExplanation
    ? String(rawExplanation).trim()
    : `Option ${correctAnswer} is correct based on standard NCERT principles of ${resolvedTopic}.`;

  // 10. Structured Solution Adapter
  const safeFinalAnswer = `Option ${correctAnswer}: ${options[correctAnswer] || ''}`;

  let solutionStructured = rawQ.solutionStructured;
  if (solutionStructured && solutionStructured.stepByStep && solutionStructured.stepByStep.trim()) {
    // Keep existing structured solution, filling in any gaps
    solutionStructured = {
      concept: solutionStructured.concept || `Testing fundamental principles of ${resolvedTopic} in NEET ${subject}.`,
      given: solutionStructured.given,
      formula: solutionStructured.formula,
      stepByStep: solutionStructured.stepByStep,
      finalAnswer: (solutionStructured.finalAnswer && !solutionStructured.finalAnswer.includes('undefined'))
        ? solutionStructured.finalAnswer
        : safeFinalAnswer,
      whyOtherOptionsWrong: solutionStructured.whyOtherOptionsWrong || ''
    };
  } else {
    // Synthesize cleanly from explanation
    solutionStructured = parseStructuredSectionsFromExplanation(explanation, correctAnswer, options, resolvedTopic, subject);
  }

  return {
    ...rawQ,
    id: rawQ.id,
    questionNumber,
    question: rawQ.question,
    options,
    optionsList,
    correctAnswer,
    correctOption: correctAnswer,
    correctIndex,
    difficulty: rawQ.difficulty || 'Medium',
    subject,
    class: classLevel,
    chapter: chapterTitle,
    chapterId: normChapterId,
    topic: resolvedTopic,
    topicId: resolvedTopicId,
    isPYQ,
    source,
    explanation,
    solutionStructured
  };
}

export interface ChapterwiseStats {
  chapterId: string;
  chapterTitle: string;
  subject: string;
  class: string;
  totalQuestions: number;
  easyCount: number;
  mediumCount: number;
  hardCount: number;
  pyqCount: number;
  practiceCount: number;
}

// Lightweight static registry for instant O(1) stats & counts without loading full question datasets
export const CHAPTER_STATS_REGISTRY: Record<string, ChapterwiseStats> = {
  'units-measurements': {
    chapterId: 'units-measurements',
    chapterTitle: 'Units and Measurements',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 24,
    practiceCount: 476,
  },
  'motion-straight-line': {
    chapterId: 'motion-straight-line',
    chapterTitle: 'Motion in a Straight Line',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 13,
    practiceCount: 487,
  },
  'motion-plane': {
    chapterId: 'motion-plane',
    chapterTitle: 'Motion in a Plane',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 11,
    practiceCount: 489,
  },
  'laws-of-motion': {
    chapterId: 'laws-of-motion',
    chapterTitle: 'Laws of Motion',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 12,
    practiceCount: 488,
  },
  'work-energy-power': {
    chapterId: 'work-energy-power',
    chapterTitle: 'Work, Energy and Power',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 10,
    practiceCount: 490,
  },
  'rotational-motion': {
    chapterId: 'rotational-motion',
    chapterTitle: 'System of Particles and Rotational Motion',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 8,
    practiceCount: 492,
  },
  gravitation: {
    chapterId: 'gravitation',
    chapterTitle: 'Gravitation',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 8,
    practiceCount: 492,
  },
  'mechanical-properties-solids': {
    chapterId: 'mechanical-properties-solids',
    chapterTitle: 'Mechanical Properties of Solids',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 5,
    practiceCount: 495,
  },
  'mechanical-properties-fluids': {
    chapterId: 'mechanical-properties-fluids',
    chapterTitle: 'Mechanical Properties of Fluids',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 11,
    practiceCount: 489,
  },
  'thermal-properties-matter': {
    chapterId: 'thermal-properties-matter',
    chapterTitle: 'Thermal Properties of Matter',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 2,
    practiceCount: 498,
  },
  'thermodynamics-ch': {
    chapterId: 'thermodynamics-ch',
    chapterTitle: 'Thermodynamics',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 5,
    practiceCount: 495,
  },
  'kinetic-theory': {
    chapterId: 'kinetic-theory',
    chapterTitle: 'Kinetic Theory of Gases',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 12,
    practiceCount: 488,
  },
  oscillations: {
    chapterId: 'oscillations',
    chapterTitle: 'Oscillations',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 18,
    practiceCount: 482,
  },
  waves: {
    chapterId: 'waves',
    chapterTitle: 'Waves',
    subject: 'Physics',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 24,
    practiceCount: 476,
  },
  'electric-charges-fields': {
    chapterId: 'electric-charges-fields',
    chapterTitle: 'Electric Charges and Fields',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'electrostatic-potential-capacitance': {
    chapterId: 'electrostatic-potential-capacitance',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'current-electricity': {
    chapterId: 'current-electricity',
    chapterTitle: 'Current Electricity',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'moving-charges-magnetism': {
    chapterId: 'moving-charges-magnetism',
    chapterTitle: 'Moving Charges and Magnetism',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'magnetism-matter': {
    chapterId: 'magnetism-matter',
    chapterTitle: 'Magnetism and Matter',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'electromagnetic-induction': {
    chapterId: 'electromagnetic-induction',
    chapterTitle: 'Electromagnetic Induction',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'alternating-current': {
    chapterId: 'alternating-current',
    chapterTitle: 'Alternating Current',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'electromagnetic-waves': {
    chapterId: 'electromagnetic-waves',
    chapterTitle: 'Electromagnetic Waves',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'ray-optics': {
    chapterId: 'ray-optics',
    chapterTitle: 'Ray Optics and Optical Instruments',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'wave-optics': {
    chapterId: 'wave-optics',
    chapterTitle: 'Wave Optics',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'dual-nature': {
    chapterId: 'dual-nature',
    chapterTitle: 'Dual Nature of Radiation and Matter',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  atoms: {
    chapterId: 'atoms',
    chapterTitle: 'Atoms',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  nuclei: {
    chapterId: 'nuclei',
    chapterTitle: 'Nuclei',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  semiconductors: {
    chapterId: 'semiconductors',
    chapterTitle: 'Semiconductor Electronics',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'experimental-skills': {
    chapterId: 'experimental-skills',
    chapterTitle: 'Unit 20: Experimental Skills',
    subject: 'Physics',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'mole-concept': {
    chapterId: 'mole-concept',
    chapterTitle: 'Some Basic Concepts of Chemistry',
    subject: 'Chemistry',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'atomic-structure': {
    chapterId: 'atomic-structure',
    chapterTitle: 'Structure of Atom',
    subject: 'Chemistry',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 11,
    practiceCount: 489,
  },
  'periodic-classification': {
    chapterId: 'periodic-classification',
    chapterTitle: 'Classification of Elements and Periodicity in Properties',
    subject: 'Chemistry',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 18,
    practiceCount: 482,
  },
  'chemical-bonding': {
    chapterId: 'chemical-bonding',
    chapterTitle: 'Chemical Bonding and Molecular Structure',
    subject: 'Chemistry',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 24,
    practiceCount: 476,
  },
  'thermodynamics-chem': {
    chapterId: 'thermodynamics-chem',
    chapterTitle: 'Chemical Thermodynamics',
    subject: 'Chemistry',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 17,
    practiceCount: 483,
  },
  'redox-reactions': {
    chapterId: 'redox-reactions',
    chapterTitle: 'Redox Reactions',
    subject: 'Chemistry',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 22,
    practiceCount: 478,
  },
  'p-block-11': {
    chapterId: 'p-block-11',
    chapterTitle: 'p-Block Elements (Group 13 & 14)',
    subject: 'Chemistry',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 19,
    practiceCount: 481,
  },
  'organic-chemistry-basic-principles': {
    chapterId: 'organic-chemistry-basic-principles',
    chapterTitle: 'Organic Chemistry: Some Basic Principles & Techniques',
    subject: 'Chemistry',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 26,
    practiceCount: 474,
  },
  'hydrocarbons': {
    chapterId: 'hydrocarbons',
    chapterTitle: 'Hydrocarbons',
    subject: 'Chemistry',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 24,
    practiceCount: 476,
  },
  'solutions': {
    chapterId: 'solutions',
    chapterTitle: 'Solutions',
    subject: 'Chemistry',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 30,
    practiceCount: 470,
  },
  'equilibrium': {
    chapterId: 'equilibrium',
    chapterTitle: 'Equilibrium',
    subject: 'Chemistry',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 33,
    practiceCount: 467,
  },
  'electrochemistry': {
    chapterId: 'electrochemistry',
    chapterTitle: 'Redox Reactions & Electrochemistry',
    subject: 'Chemistry',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 31,
    practiceCount: 469,
  },
  'chemical-kinetics': {
    chapterId: 'chemical-kinetics',
    chapterTitle: 'Chemical Kinetics',
    subject: 'Chemistry',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 35,
    practiceCount: 465,
  },
  'p-block-12': {
    chapterId: 'p-block-12',
    chapterTitle: 'p-Block Elements (Group 15 to 18)',
    subject: 'Chemistry',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 38,
    practiceCount: 462,
  },
  'd-f-block-elements': {
    chapterId: 'd-f-block-elements',
    chapterTitle: 'd- and f-Block Elements',
    subject: 'Chemistry',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 33,
    practiceCount: 467,
  },
  'coordination-compounds': {
    chapterId: 'coordination-compounds',
    chapterTitle: 'Coordination Compounds',
    subject: 'Chemistry',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 35,
    practiceCount: 465,
  },
  'haloalkanes-haloarenes': {
    chapterId: 'haloalkanes-haloarenes',
    chapterTitle: 'Haloalkanes and Haloarenes',
    subject: 'Chemistry',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 35,
    practiceCount: 465,
  },
  'alcohols-phenols-ethers': {
    chapterId: 'alcohols-phenols-ethers',
    chapterTitle: 'Alcohols, Phenols and Ethers',
    subject: 'Chemistry',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 33,
    practiceCount: 467,
  },
  'aldehydes-ketones': {
    chapterId: 'aldehydes-ketones',
    chapterTitle: 'Aldehydes, Ketones and Carboxylic Acids',
    subject: 'Chemistry',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 31,
    practiceCount: 469,
  },
  'amines': {
    chapterId: 'amines',
    chapterTitle: 'Amines & Diazonium Salts',
    subject: 'Chemistry',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 33,
    practiceCount: 467,
  },
  'biomolecules': {
    chapterId: 'biomolecules',
    chapterTitle: 'Biomolecules',
    subject: 'Chemistry',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 38,
    practiceCount: 462,
  },
  'practical-chemistry': {
    chapterId: 'practical-chemistry',
    chapterTitle: 'Principles Related to Practical Chemistry',
    subject: 'Chemistry',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 33,
    practiceCount: 467,
  },
  'living-world': {
    chapterId: 'living-world',
    chapterTitle: 'The Living World',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'biological-classification': {
    chapterId: 'biological-classification',
    chapterTitle: 'Biological Classification',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'plant-kingdom': {
    chapterId: 'plant-kingdom',
    chapterTitle: 'Plant Kingdom',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'animal-kingdom': {
    chapterId: 'animal-kingdom',
    chapterTitle: 'Animal Kingdom',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'morphology-flowering-plants': {
    chapterId: 'morphology-flowering-plants',
    chapterTitle: 'Morphology of Flowering Plants',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'anatomy-flowering-plants': {
    chapterId: 'anatomy-flowering-plants',
    chapterTitle: 'Anatomy of Flowering Plants',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'structural-org-animals': {
    chapterId: 'structural-org-animals',
    chapterTitle: 'Structural Organisation in Animals',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'cell-unit-of-life': {
    chapterId: 'cell-unit-of-life',
    chapterTitle: 'Cell: The Unit of Life',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'biomolecules-bio': {
    chapterId: 'biomolecules-bio',
    chapterTitle: 'Biomolecules',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'cell-cycle-division': {
    chapterId: 'cell-cycle-division',
    chapterTitle: 'Cell Cycle and Cell Division',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'photosynthesis-higher-plants': {
    chapterId: 'photosynthesis-higher-plants',
    chapterTitle: 'Photosynthesis in Higher Plants',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'respiration-plants': {
    chapterId: 'respiration-plants',
    chapterTitle: 'Respiration in Plants',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'plant-growth-development': {
    chapterId: 'plant-growth-development',
    chapterTitle: 'Plant Growth and Development',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'breathing-exchange-gases': {
    chapterId: 'breathing-exchange-gases',
    chapterTitle: 'Breathing and Exchange of Gases',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'body-fluids-circulation': {
    chapterId: 'body-fluids-circulation',
    chapterTitle: 'Body Fluids and Circulation',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'excretory-products': {
    chapterId: 'excretory-products',
    chapterTitle: 'Excretory Products and Their Elimination',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'locomotion-movement': {
    chapterId: 'locomotion-movement',
    chapterTitle: 'Locomotion and Movement',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'neural-control-coordination': {
    chapterId: 'neural-control-coordination',
    chapterTitle: 'Neural Control and Coordination',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'chemical-coordination-integration': {
    chapterId: 'chemical-coordination-integration',
    chapterTitle: 'Chemical Coordination and Integration',
    subject: 'Biology',
    class: '11',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'sexual-repro-flowering-plants': {
    chapterId: 'sexual-repro-flowering-plants',
    chapterTitle: 'Sexual Reproduction in Flowering Plants',
    subject: 'Biology',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'human-reproduction': {
    chapterId: 'human-reproduction',
    chapterTitle: 'Human Reproduction',
    subject: 'Biology',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'reproductive-health': {
    chapterId: 'reproductive-health',
    chapterTitle: 'Reproductive Health',
    subject: 'Biology',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'principles-of-inheritance': {
    chapterId: 'principles-of-inheritance',
    chapterTitle: 'Principles of Inheritance and Variation',
    subject: 'Biology',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'molecular-basis-inheritance': {
    chapterId: 'molecular-basis-inheritance',
    chapterTitle: 'Molecular Basis of Inheritance',
    subject: 'Biology',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'evolution': {
    chapterId: 'evolution',
    chapterTitle: 'Evolution',
    subject: 'Biology',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'human-health-diseases': {
    chapterId: 'human-health-diseases',
    chapterTitle: 'Human Health and Diseases',
    subject: 'Biology',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'microbes-human-welfare': {
    chapterId: 'microbes-human-welfare',
    chapterTitle: 'Microbes in Human Welfare',
    subject: 'Biology',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'biotech-principles': {
    chapterId: 'biotech-principles',
    chapterTitle: 'Biotechnology: Principles and Processes',
    subject: 'Biology',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'biotech-applications': {
    chapterId: 'biotech-applications',
    chapterTitle: 'Biotechnology and Its Applications',
    subject: 'Biology',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'organism-populations': {
    chapterId: 'organism-populations',
    chapterTitle: 'Organisms and Populations',
    subject: 'Biology',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'ecosystem': {
    chapterId: 'ecosystem',
    chapterTitle: 'Ecosystem',
    subject: 'Biology',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
  'biodiversity-conservation': {
    chapterId: 'biodiversity-conservation',
    chapterTitle: 'Biodiversity and Conservation',
    subject: 'Biology',
    class: '12',
    totalQuestions: 500,
    easyCount: 125,
    mediumCount: 250,
    hardCount: 125,
    pyqCount: 0,
    practiceCount: 500,
  },
};

// In-memory cache for loaded chapter datasets
const chapterDataCache = new Map<string, ChapterwiseMCQ[]>();
const chapterLoadPromises = new Map<string, Promise<ChapterwiseMCQ[]>>();

// Dynamic route-level code-split loaders - only downloaded when student actually opens that chapter
export const CHAPTER_LOADERS: Record<string, () => Promise<ChapterwiseMCQ[]>> = {
  'units-measurements': async () => {
    const mod = await import('../data/chapterwise/physics/unitsAndMeasurementsData');
    return mod.UNITS_MEASUREMENTS_MCQS;
  },
  'motion-straight-line': async () => {
    const mod = await import('../data/chapterwise/physics/motionInAStraightLineData');
    return mod.MOTION_STRAIGHT_LINE_MCQS;
  },
  'motion-plane': async () => {
    const mod = await import('../data/chapterwise/physics/motionInAPlaneData');
    return mod.MOTION_PLANE_MCQS;
  },
  'laws-of-motion': async () => {
    const mod = await import('../data/chapterwise/physics/lawsOfMotionData');
    return mod.LAWS_OF_MOTION_MCQS;
  },
  'work-energy-power': async () => {
    const mod = await import('../data/chapterwise/physics/workEnergyPowerData');
    return mod.WORK_ENERGY_POWER_MCQS;
  },
  'rotational-motion': async () => {
    const mod = await import('../data/chapterwise/physics/rotationalMotionData');
    return mod.ROTATIONAL_MOTION_MCQS;
  },
  gravitation: async () => {
    const mod = await import('../data/chapterwise/physics/gravitationData');
    return mod.GRAVITATION_MCQS;
  },
  'mechanical-properties-solids': async () => {
    const mod = await import('../data/chapterwise/physics/mechanicalPropertiesSolidsData');
    return mod.MECHANICAL_PROPERTIES_SOLIDS_MCQS;
  },
  'mechanical-properties-fluids': async () => {
    const mod = await import('../data/chapterwise/physics/mechanicalPropertiesFluidsData');
    return mod.MECHANICAL_PROPERTIES_FLUIDS_MCQS;
  },
  'thermal-properties-matter': async () => {
    const mod = await import('../data/chapterwise/physics/thermalPropertiesMatterData');
    return mod.THERMAL_PROPERTIES_MATTER_MCQS;
  },
  'thermodynamics-ch': async () => {
    const mod = await import('../data/chapterwise/physics/thermodynamicsData');
    return mod.THERMODYNAMICS_MCQS;
  },
  'kinetic-theory': async () => {
    const mod = await import('../data/chapterwise/physics/kineticTheoryData');
    return mod.KINETIC_THEORY_MCQS;
  },
  oscillations: async () => {
    const mod = await import('../data/chapterwise/physics/oscillationsData');
    return mod.OSCILLATIONS_MCQS;
  },
  waves: async () => {
    const mod = await import('../data/chapterwise/physics/wavesData');
    return mod.WAVES_MCQS;
  },
  'electric-charges-fields': async () => {
    const mod = await import('../data/chapterwise/physics/electricChargesFieldsData');
    return mod.ELECTRIC_CHARGES_FIELDS_MCQS;
  },
  'electrostatic-potential-capacitance': async () => {
    const mod = await import('../data/chapterwise/physics/electrostaticPotentialCapacitanceData');
    return mod.ELECTROSTATIC_POTENTIAL_CAPACITANCE_MCQS;
  },
  'current-electricity': async () => {
    const mod = await import('../data/chapterwise/physics/currentElectricityData');
    return mod.CURRENT_ELECTRICITY_MCQS;
  },
  'moving-charges-magnetism': async () => {
    const mod = await import('../data/chapterwise/physics/movingChargesMagnetismData');
    return mod.MOVING_CHARGES_MAGNETISM_MCQS;
  },
  'magnetism-matter': async () => {
    const mod = await import('../data/chapterwise/physics/magnetismMatterData');
    return mod.MAGNETISM_MATTER_MCQS;
  },
  'electromagnetic-induction': async () => {
    const mod = await import('../data/chapterwise/physics/electromagneticInductionData');
    return mod.ELECTROMAGNETIC_INDUCTION_MCQS;
  },
  'alternating-current': async () => {
    const mod = await import('../data/chapterwise/physics/alternatingCurrentData');
    return mod.ALTERNATING_CURRENT_MCQS;
  },
  'electromagnetic-waves': async () => {
    const mod = await import('../data/chapterwise/physics/electromagneticWavesData');
    return mod.ELECTROMAGNETIC_WAVES_MCQS;
  },
  'ray-optics': async () => {
    const mod = await import('../data/chapterwise/physics/rayOpticsData');
    return mod.RAY_OPTICS_MCQS;
  },
  'wave-optics': async () => {
    const mod = await import('../data/chapterwise/physics/waveOpticsData');
    return mod.WAVE_OPTICS_MCQS;
  },
  'dual-nature': async () => {
    const mod = await import('../data/chapterwise/physics/dualNatureData');
    return mod.DUAL_NATURE_MCQS;
  },
  atoms: async () => {
    const mod = await import('../data/chapterwise/physics/atomsData');
    return mod.ATOMS_MCQS;
  },
  nuclei: async () => {
    const mod = await import('../data/chapterwise/physics/nucleiData');
    return mod.NUCLEI_MCQS;
  },
  semiconductors: async () => {
    const mod = await import('../data/chapterwise/physics/semiconductorsData');
    return mod.SEMICONDUCTORS_MCQS;
  },
  'experimental-skills': async () => {
    const mod = await import('../data/chapterwise/physics/experimentalSkillsData');
    return mod.EXPERIMENTAL_SKILLS_MCQS;
  },
  'mole-concept': async () => {
    const mod = await import('../data/chapterwise/chemistry/moleConceptData');
    return mod.MOLE_CONCEPT_MCQS;
  },
  'atomic-structure': async () => {
    const mod = await import('../data/chapterwise/chemistry/atomicStructureData');
    return mod.ATOMIC_STRUCTURE_MCQS;
  },
  'periodic-classification': async () => {
    const mod = await import('../data/chapterwise/chemistry/periodicClassificationData');
    return mod.PERIODIC_CLASSIFICATION_MCQS;
  },
  'chemical-bonding': async () => {
    const mod = await import('../data/chapterwise/chemistry/chemicalBondingData');
    return mod.CHEMICAL_BONDING_MCQS;
  },
  'thermodynamics-chem': async () => {
    const mod = await import('../data/chapterwise/chemistry/chemicalThermodynamicsData');
    return mod.CHEMICAL_THERMODYNAMICS_MCQS;
  },
  'redox-reactions': async () => {
    const mod = await import('../data/chapterwise/chemistry/redoxReactionsData');
    return mod.REDOX_REACTIONS_MCQS;
  },
  'p-block-11': async () => {
    const mod = await import('../data/chapterwise/chemistry/pBlock11Data');
    return mod.P_BLOCK_11_MCQS;
  },
  'organic-chemistry-basic-principles': async () => {
    const mod = await import('../data/chapterwise/chemistry/organicChemistryBasicPrinciplesData');
    return mod.ORGANIC_CHEMISTRY_BASIC_PRINCIPLES_MCQS;
  },
  'hydrocarbons': async () => {
    const mod = await import('../data/chapterwise/chemistry/hydrocarbonsData');
    return mod.HYDROCARBONS_MCQS;
  },
  'solutions': async () => {
    const mod = await import('../data/chapterwise/chemistry/solutionsData');
    return mod.SOLUTIONS_MCQS;
  },
  'equilibrium': async () => {
    const mod = await import('../data/chapterwise/chemistry/equilibriumData');
    return mod.EQUILIBRIUM_MCQS;
  },
  'electrochemistry': async () => {
    const mod = await import('../data/chapterwise/chemistry/electrochemistryData');
    return mod.ELECTROCHEMISTRY_MCQS;
  },
  'chemical-kinetics': async () => {
    const mod = await import('../data/chapterwise/chemistry/chemicalKineticsData');
    return mod.CHEMICAL_KINETICS_MCQS;
  },
  'p-block-12': async () => {
    const mod = await import('../data/chapterwise/chemistry/pBlock12Data');
    return mod.P_BLOCK_12_MCQS;
  },
  'd-f-block-elements': async () => {
    const mod = await import('../data/chapterwise/chemistry/dFBlockElementsData');
    return mod.DF_BLOCK_ELEMENTS_MCQS;
  },
  'coordination-compounds': async () => {
    const mod = await import('../data/chapterwise/chemistry/coordinationCompoundsData');
    return mod.COORDINATION_COMPOUNDS_MCQS;
  },
  'haloalkanes-haloarenes': async () => {
    const mod = await import('../data/chapterwise/chemistry/haloalkanesHaloarenesData');
    return mod.HALOALKANES_HALOARENES_MCQS;
  },
  'alcohols-phenols-ethers': async () => {
    const mod = await import('../data/chapterwise/chemistry/alcoholsPhenolsEthersData');
    return mod.ALCOHOLS_PHENOLS_ETHERS_MCQS;
  },
  'aldehydes-ketones': async () => {
    const mod = await import('../data/chapterwise/chemistry/aldehydesKetonesData');
    return mod.ALDEHYDES_KETONES_MCQS;
  },
  'amines': async () => {
    const mod = await import('../data/chapterwise/chemistry/aminesData');
    return mod.AMINES_MCQS;
  },
  'biomolecules': async () => {
    const mod = await import('../data/chapterwise/chemistry/biomoleculesData');
    return mod.BIOMOLECULES_MCQS;
  },
  'practical-chemistry': async () => {
    const mod = await import('../data/chapterwise/chemistry/practicalChemistryData');
    return mod.PRACTICAL_CHEMISTRY_MCQS;
  },
  'living-world': async () => {
    const mod = await import('../data/chapterwise/biology/livingWorldData');
    return mod.LIVING_WORLD_MCQS;
  },
  'biological-classification': async () => {
    const mod = await import('../data/chapterwise/biology/biologicalClassificationData');
    return mod.BIOLOGICAL_CLASSIFICATION_MCQS;
  },
  'plant-kingdom': async () => {
    const mod = await import('../data/chapterwise/biology/plantKingdomData');
    return mod.PLANT_KINGDOM_MCQS;
  },
  'animal-kingdom': async () => {
    const mod = await import('../data/chapterwise/biology/animalKingdomData');
    return mod.ANIMAL_KINGDOM_MCQS;
  },
  'morphology-flowering-plants': async () => {
    const mod = await import('../data/chapterwise/biology/morphologyFloweringPlantsData');
    return mod.MORPHOLOGY_FLOWERING_PLANTS_MCQS;
  },
  'anatomy-flowering-plants': async () => {
    const mod = await import('../data/chapterwise/biology/anatomyFloweringPlantsData');
    return mod.ANATOMY_FLOWERING_PLANTS_MCQS;
  },
  'structural-org-animals': async () => {
    const mod = await import('../data/chapterwise/biology/structuralOrganisationAnimalsData');
    return mod.STRUCTURAL_ORGANISATION_ANIMALS_MCQS;
  },
  'cell-unit-of-life': async () => {
    const mod = await import('../data/chapterwise/biology/cellUnitOfLifeData');
    return mod.CELL_UNIT_OF_LIFE_MCQS;
  },
  'biomolecules-bio': async () => {
    const mod = await import('../data/chapterwise/biology/biomoleculesBioData');
    return mod.BIOMOLECULES_BIO_MCQS;
  },
  'cell-cycle-division': async () => {
    const mod = await import('../data/chapterwise/biology/cellCycleDivisionData');
    return mod.CELL_CYCLE_DIVISION_MCQS;
  },
  'photosynthesis-higher-plants': async () => {
    const mod = await import('../data/chapterwise/biology/photosynthesisHigherPlantsData');
    return mod.PHOTOSYNTHESIS_HIGHER_PLANTS_MCQS;
  },
  'respiration-plants': async () => {
    const mod = await import('../data/chapterwise/biology/respirationPlantsData');
    return mod.RESPIRATION_PLANTS_MCQS;
  },
  'plant-growth-development': async () => {
    const mod = await import('../data/chapterwise/biology/plantGrowthDevelopmentData');
    return mod.PLANT_GROWTH_DEVELOPMENT_MCQS;
  },
  'breathing-exchange-gases': async () => {
    const mod = await import('../data/chapterwise/biology/breathingExchangeGasesData');
    return mod.BREATHING_EXCHANGE_GASES_MCQS;
  },
  'body-fluids-circulation': async () => {
    const mod = await import('../data/chapterwise/biology/bodyFluidsCirculationData');
    return mod.BODY_FLUIDS_CIRCULATION_MCQS;
  },
  'excretory-products': async () => {
    const mod = await import('../data/chapterwise/biology/excretoryProductsData');
    return mod.EXCRETORY_PRODUCTS_MCQS;
  },
  'locomotion-movement': async () => {
    const mod = await import('../data/chapterwise/biology/locomotionMovementData');
    return mod.LOCOMOTION_MOVEMENT_MCQS;
  },
  'neural-control-coordination': async () => {
    const mod = await import('../data/chapterwise/biology/neuralControlCoordinationData');
    return mod.NEURAL_CONTROL_COORDINATION_MCQS;
  },
  'chemical-coordination-integration': async () => {
    const mod = await import('../data/chapterwise/biology/chemicalCoordinationIntegrationData');
    return mod.CHEMICAL_COORDINATION_INTEGRATION_MCQS;
  },
  'sexual-repro-flowering-plants': async () => {
    const mod = await import('../data/chapterwise/biology/sexualReproductionFloweringPlantsData');
    return mod.SEXUAL_REPRODUCTION_FLOWERING_PLANTS_MCQS;
  },
  'human-reproduction': async () => {
    const mod = await import('../data/chapterwise/biology/humanReproductionData');
    return mod.HUMAN_REPRODUCTION_MCQS;
  },
  'reproductive-health': async () => {
    const mod = await import('../data/chapterwise/biology/reproductiveHealthData');
    return mod.REPRODUCTIVE_HEALTH_MCQS;
  },
  'principles-of-inheritance': async () => {
    const mod = await import('../data/chapterwise/biology/principlesInheritanceData');
    return mod.PRINCIPLES_INHERITANCE_MCQS;
  },
  'molecular-basis-inheritance': async () => {
    const mod = await import('../data/chapterwise/biology/molecularBasisInheritanceData');
    return mod.MOLECULAR_BASIS_INHERITANCE_MCQS;
  },
  'evolution': async () => {
    const mod = await import('../data/chapterwise/biology/evolutionData');
    return mod.EVOLUTION_MCQS;
  },
  'human-health-diseases': async () => {
    const mod = await import('../data/chapterwise/biology/humanHealthDiseasesData');
    return mod.HUMAN_HEALTH_DISEASES_MCQS;
  },
  'microbes-human-welfare': async () => {
    const mod = await import('../data/chapterwise/biology/microbesHumanWelfareData');
    return mod.MICROBES_HUMAN_WELFARE_MCQS;
  },
  'biotech-principles': async () => {
    const mod = await import('../data/chapterwise/biology/biotechPrinciplesData');
    return mod.BIOTECH_PRINCIPLES_MCQS;
  },
  'biotech-applications': async () => {
    const mod = await import('../data/chapterwise/biology/biotechApplicationsData');
    return mod.BIOTECH_APPLICATIONS_MCQS;
  },
  'organism-populations': async () => {
    const mod = await import('../data/chapterwise/biology/organismPopulationsData');
    return mod.ORGANISM_POPULATIONS_MCQS;
  },
  'ecosystem': async () => {
    const mod = await import('../data/chapterwise/biology/ecosystemData');
    return mod.ECOSYSTEM_MCQS;
  },
  'biodiversity-conservation': async () => {
    const mod = await import('../data/chapterwise/biology/biodiversityConservationData');
    return mod.BIODIVERSITY_CONSERVATION_MCQS;
  },
};

function normalizeChapterId(id: string): string {
  if (id === 'sexual-repro-flowering-plants' || id === 'sexual_reproduction_in_flowering_plants' || id === 'sexual-reproduction-in-flowering-plants' || id === 'sexual-reproduction-flowering-plants' || id === 'sexual-repro-plants' || id === 'sexual-repro-flowering-plants-12') return 'sexual-repro-flowering-plants';
  if (id === 'human-reproduction' || id === 'human_reproduction' || id === 'human-repro' || id === 'human-reproduction-12') return 'human-reproduction';
  if (id === 'reproductive-health' || id === 'reproductive_health' || id === 'repro-health' || id === 'reproductive-health-12') return 'reproductive-health';
  if (id === 'principles-of-inheritance' || id === 'principles_of_inheritance' || id === 'principles-of-inheritance-and-variation' || id === 'principles_of_inheritance_and_variation' || id === 'genetics-inheritance' || id === 'principles-of-inheritance-12') return 'principles-of-inheritance';
  if (id === 'molecular-basis-inheritance' || id === 'molecular_basis_of_inheritance' || id === 'molecular-basis-of-inheritance' || id === 'molecular-basis-inheritance-12' || id === 'molecular-genetics') return 'molecular-basis-inheritance';
  if (id === 'evolution' || id === 'evolution-12' || id === 'evolution_12' || id === 'origin-and-evolution') return 'evolution';
  if (id === 'human-health-diseases' || id === 'human_health_and_diseases' || id === 'human-health-and-diseases' || id === 'human-health-and-disease' || id === 'human-health-diseases-12' || id === 'human-health') return 'human-health-diseases';
  if (id === 'microbes-human-welfare' || id === 'microbes_in_human_welfare' || id === 'microbes-in-human-welfare' || id === 'microbes-human-welfare-12' || id === 'microbes') return 'microbes-human-welfare';
  if (id === 'biotech-principles' || id === 'biotechnology_principles_and_processes' || id === 'biotechnology-principles-and-processes' || id === 'biotech-principles-and-processes' || id === 'biotech-principles-12') return 'biotech-principles';
  if (id === 'biotech-applications' || id === 'biotechnology_and_its_applications' || id === 'biotechnology-and-its-applications' || id === 'biotech-applications-12' || id === 'biotechnology-applications') return 'biotech-applications';
  if (id === 'organism-populations' || id === 'organisms_and_populations' || id === 'organisms-and-populations' || id === 'organism-populations-12' || id === 'ecology-populations') return 'organism-populations';
  if (id === 'ecosystem' || id === 'ecosystems' || id === 'ecosystem-12' || id === 'ecology-ecosystem') return 'ecosystem';
  if (id === 'biodiversity-conservation' || id === 'biodiversity_and_conservation' || id === 'biodiversity-and-conservation' || id === 'biodiversity-conservation-12' || id === 'biodiversity') return 'biodiversity-conservation';
  if (id === 'breathing-exchange-gases' || id === 'breathing_exchange_gases' || id === 'breathing-and-exchange-of-gases' || id === 'breathing_and_exchange_of_gases' || id === 'breathing-exchange-of-gases' || id === 'respiration-breathing' || id === 'breathing-exchange-gases-11') return 'breathing-exchange-gases';
  if (id === 'body-fluids-circulation' || id === 'body_fluids_circulation' || id === 'body-fluids-and-circulation' || id === 'body_fluids_and_circulation' || id === 'circulation' || id === 'body-fluids' || id === 'body-fluids-circulation-11') return 'body-fluids-circulation';
  if (id === 'excretory-products' || id === 'excretory_products' || id === 'excretory-products-and-their-elimination' || id === 'excretory_products_and_their_elimination' || id === 'excretory-products-elimination' || id === 'excretion' || id === 'excretory-products-11') return 'excretory-products';
  if (id === 'locomotion-movement' || id === 'locomotion_movement' || id === 'locomotion-and-movement' || id === 'locomotion_and_movement' || id === 'locomotion' || id === 'movement' || id === 'locomotion-movement-11') return 'locomotion-movement';
  if (id === 'neural-control-coordination' || id === 'neural_control_coordination' || id === 'neural-control-and-coordination' || id === 'neural_control_and_coordination' || id === 'neural-control' || id === 'nervous-system' || id === 'neural-control-coordination-11') return 'neural-control-coordination';
  if (id === 'chemical-coordination-integration' || id === 'chemical_coordination_integration' || id === 'chemical-coordination-and-integration' || id === 'chemical_coordination_and_integration' || id === 'chemical-coordination' || id === 'endocrine-system' || id === 'chemical-coordination-integration-11') return 'chemical-coordination-integration';
  if (id === 'plant-growth-development' || id === 'plant_growth_development' || id === 'plant-growth-and-development' || id === 'plant_growth_and_development' || id === 'plant-growth' || id === 'plant-growth-11') return 'plant-growth-development';
  if (id === 'respiration-plants' || id === 'respiration_plants' || id === 'respiration-in-plants' || id === 'respiration_in_plants' || id === 'respiration' || id === 'respiration-11') return 'respiration-plants';
  if (id === 'photosynthesis-higher-plants' || id === 'photosynthesis_higher_plants' || id === 'photosynthesis-in-higher-plants' || id === 'photosynthesis_in_higher_plants' || id === 'photosynthesis' || id === 'photosynthesis-11') return 'photosynthesis-higher-plants';
  if (id === 'cell-cycle-division' || id === 'cell_cycle_division' || id === 'cell-cycle-and-cell-division' || id === 'cell-cycle' || id === 'cell_cycle' || id === 'cell-division' || id === 'cell-cycle-division-11') return 'cell-cycle-division';
  if (id === 'biomolecules-bio' || id === 'biomolecules_bio' || id === 'biomolecules-11' || id === 'biomolecules_11' || id === 'biomolecules-biology') return 'biomolecules-bio';
  if (id === 'biomolecules' || id === 'biomolecules-chem' || id === 'biomolecules-12' || id === 'biomolecules_12' || id === 'biomolecule') return 'biomolecules';
  if (id === 'cell_the_unit_of_life' || id === 'cell-the-unit-of-life' || id === 'cell-unit-life' || id === 'cell-unit-of-life' || id === 'cell_unit_of_life' || id === 'cell-biology' || id === 'cell' || id === 'cell-unit-of-life-11') return 'cell-unit-of-life';
  if (id === 'the-living-world' || id === 'living-world-11' || id === 'livingworld' || id === 'the_living_world') return 'living-world';
  if (id === 'biological_classification' || id === 'biologicalclassification' || id === 'bio-classification' || id === 'biological-classification-11' || id === 'bio-class') return 'biological-classification';
  if (id === 'plant_kingdom' || id === 'plantkingdom' || id === 'plant-kingdom-11' || id === 'plants-kingdom') return 'plant-kingdom';
  if (id === 'animal_kingdom' || id === 'animalkingdom' || id === 'animal-kingdom-11' || id === 'animals-kingdom') return 'animal-kingdom';
  if (id === 'morphology_of_flowering_plants' || id === 'morphology-of-flowering-plants' || id === 'morphology' || id === 'morphology-plants' || id === 'morphology-flowering-plants-11') return 'morphology-flowering-plants';
  if (id === 'anatomy_of_flowering_plants' || id === 'anatomy-of-flowering-plants' || id === 'anatomy' || id === 'plant-anatomy' || id === 'anatomy-flowering-plants-11') return 'anatomy-flowering-plants';
  if (id === 'structural_organisation_in_animals' || id === 'structural-organisation-in-animals' || id === 'structural-organization-in-animals' || id === 'structural-org-animals' || id === 'structural_org_animals' || id === 'animal-tissues' || id === 'structural-organisation-animals') return 'structural-org-animals';
  if (id === 'motion-in-a-plane' || id === 'projectile-motion') return 'motion-plane';
  if (id === 'solids' || id === 'elasticity') return 'mechanical-properties-solids';
  if (id === 'fluids' || id === 'fluid-mechanics' || id === 'properties-of-fluids') return 'mechanical-properties-fluids';
  if (id === 'thermal-properties' || id === 'calorimetry' || id === 'thermal-physics') return 'thermal-properties-matter';
  if (id === 'thermodynamics' || id === 'heat-engines' || id === 'carnot-engine') return 'thermodynamics-ch';
  if (id === 'kinetic-theory-of-gases' || id === 'ktg' || id === 'kinetic-theory-gases') return 'kinetic-theory';
  if (id === 'simple-harmonic-motion' || id === 'shm') return 'oscillations';
  if (id === 'wave-motion' || id === 'sound-waves' || id === 'waves-ch') return 'waves';
  if (id === 'some-basic-concepts-of-chemistry' || id === 'mole' || id === 'basic-concepts-chemistry') return 'mole-concept';
  if (id === 'structure-of-atom' || id === 'atom-structure' || id === 'atomic') return 'atomic-structure';
  if (id === 'classification-of-elements' || id === 'periodicity' || id === 'periodic-table') return 'periodic-classification';
  if (id === 'chemical-bonding-and-molecular-structure' || id === 'bonding' || id === 'chemical-bonding-structure') return 'chemical-bonding';
  if (id === 'chemical-thermodynamics' || id === 'chemistry-thermodynamics' || id === 'thermo-chem') return 'thermodynamics-chem';
  if (id === 'redox' || id === 'redox-reaction' || id === 'oxidation-reduction') return 'redox-reactions';
  if (id === 'p-block' || id === 'p-block-elements' || id === 'pblock-11' || id === 'pblock') return 'p-block-11';
  if (id === 'organic-chemistry' || id === 'general-organic-chemistry' || id === 'goc' || id === 'organic-chemistry-basic' || id === 'purification-organic' || id === 'goc-principles') return 'organic-chemistry-basic-principles';
  if (id === 'hydrocarbon' || id === 'hydrocarbons-11') return 'hydrocarbons';
  if (id === 'solutions' || id === 'solution' || id === 'solutions-12' || id === 'solutions_12') return 'solutions';
  if (id === 'equilibrium' || id === 'chemical-equilibrium' || id === 'ionic-equilibrium' || id === 'equilibrium-12') return 'equilibrium';
  if (id === 'electrochemistry' || id === 'redox-reactions-electrochemistry' || id === 'redox-electrochemistry' || id === 'electrochem') return 'electrochemistry';
  if (id === 'chemical-kinetics' || id === 'kinetics' || id === 'chemical_kinetics') return 'chemical-kinetics';
  if (id === 'p-block-12' || id === 'pblock-12' || id === 'p-block-elements-12' || id === 'p-block-elements-group-15-to-18' || id === 'p-block-group-15-to-18') return 'p-block-12';
  if (id === 'd-f-block-elements' || id === 'd-and-f-block-elements' || id === 'df-block' || id === 'd-f-block' || id === 'transition-elements') return 'd-f-block-elements';
  if (id === 'coordination-compounds' || id === 'coordination_compounds' || id === 'coordination-chemistry' || id === 'coordination') return 'coordination-compounds';
  if (id === 'haloalkanes-haloarenes' || id === 'haloalkanes_haloarenes' || id === 'haloalkanes-and-haloarenes' || id === 'haloalkanes') return 'haloalkanes-haloarenes';
  if (id === 'alcohols-phenols-ethers' || id === 'alcohols_phenols_ethers' || id === 'alcohols-phenols-and-ethers' || id === 'alcohols') return 'alcohols-phenols-ethers';
  if (id === 'aldehydes-ketones' || id === 'aldehydes_ketones' || id === 'aldehydes-ketones-carboxylic-acids' || id === 'aldehydes-ketones-and-carboxylic-acids' || id === 'carbonyl-compounds') return 'aldehydes-ketones';
  if (id === 'amines' || id === 'amines-diazonium-salts' || id === 'amines-and-diazonium-salts' || id === 'amines_diazonium_salts') return 'amines';
  if (id === 'practical-chemistry' || id === 'practical_chemistry' || id === 'principles-related-to-practical-chemistry' || id === 'practical-chemistry-12') return 'practical-chemistry';
  if (id === 'electric-charges-and-fields' || id === 'electric_charges_fields' || id === 'electric-charges-fields' || id === 'electrostatics-1' || id === 'electric-charges') return 'electric-charges-fields';
  if (id === 'electrostatic-potential-and-capacitance' || id === 'electrostatic_potential_capacitance' || id === 'electrostatic-potential-capacitance' || id === 'potential-capacitance' || id === 'capacitance') return 'electrostatic-potential-capacitance';
  if (id === 'current-electricity' || id === 'current_electricity' || id === 'current' || id === 'electricity') return 'current-electricity';
  if (id === 'moving-charges-and-magnetism' || id === 'moving_charges_magnetism' || id === 'moving-charges-magnetism' || id === 'magnetic-effects-of-current') return 'moving-charges-magnetism';
  if (id === 'magnetism-and-matter' || id === 'magnetism_matter' || id === 'magnetism-matter' || id === 'magnetism') return 'magnetism-matter';
  if (id === 'electromagnetic-induction' || id === 'electromagnetic_induction' || id === 'emi') return 'electromagnetic-induction';
  if (id === 'alternating-current' || id === 'alternating_current' || id === 'ac' || id === 'ac-circuits') return 'alternating-current';
  if (id === 'electromagnetic-waves' || id === 'electromagnetic_waves' || id === 'em-waves' || id === 'emw') return 'electromagnetic-waves';
  if (id === 'ray-optics-and-optical-instruments' || id === 'ray_optics' || id === 'ray-optics' || id === 'optics' || id === 'geometrical-optics') return 'ray-optics';
  if (id === 'wave-optics' || id === 'wave_optics' || id === 'physical-optics') return 'wave-optics';
  if (id === 'dual-nature-of-radiation-and-matter' || id === 'dual_nature' || id === 'dual-nature' || id === 'photoelectric-effect') return 'dual-nature';
  if (id === 'atoms' || id === 'atom' || id === 'atomic-physics' || id === 'bohr-atom') return 'atoms';
  if (id === 'nuclei' || id === 'nucleus' || id === 'nuclear-physics' || id === 'radioactivity') return 'nuclei';
  if (id === 'semiconductor-electronics' || id === 'semiconductors' || id === 'semiconductor' || id === 'electronic-devices') return 'semiconductors';
  if (id === 'experimental-skills' || id === 'unit-20-experimental-skills' || id === 'practical-physics' || id === 'experiments') return 'experimental-skills';
  return id;
}

export { normalizeChapterId };

export class ChapterwiseMcqService {
  /**
   * Canonical chapter ID normalizer.
   */
  public static normalizeId(chapterId: string): string {
    return normalizeChapterId(chapterId);
  }

  /**
   * Checks whether question data for this chapter is already cached in memory.
   */
  public static isChapterLoaded(chapterId: string): boolean {
    const norm = normalizeChapterId(chapterId);
    return chapterDataCache.has(norm);
  }

  /**
   * Asynchronously loads chapter questions on demand via code-splitting chunks.
   * Caches results so each chapter is downloaded at most once.
   */
  public static async loadChapterQuestions(chapterId: string): Promise<ChapterwiseMCQ[]> {
    const norm = normalizeChapterId(chapterId);
    if (chapterDataCache.has(norm)) {
      return chapterDataCache.get(norm)!;
    }
    if (chapterLoadPromises.has(norm)) {
      return chapterLoadPromises.get(norm)!;
    }

    const loader = CHAPTER_LOADERS[norm];
    if (!loader) {
      return [];
    }

    const loadPromise = loader()
      .then(questions => {
        const normalized = questions.map((q, idx) => normalizeQuestion(q, norm, idx));
        chapterDataCache.set(norm, normalized);
        chapterLoadPromises.delete(norm);
        return normalized;
      })
      .catch(err => {
        console.error(`[ChapterwiseMcqService] Failed to load chapter data for ${chapterId}:`, err);
        chapterLoadPromises.delete(norm);
        return [];
      });

    chapterLoadPromises.set(norm, loadPromise);
    return loadPromise;
  }

  /**
   * Synchronously retrieves questions if already loaded in cache.
   */
  public static getQuestions(chapterId: string): ChapterwiseMCQ[] {
    const norm = normalizeChapterId(chapterId);
    return chapterDataCache.get(norm) || [];
  }

  /**
   * Normalizes a raw question object through the canonical schema adapter.
   */
  public static normalizeQuestion(rawQ: ChapterwiseMCQ, chapterId: string, itemIndex?: number): ChapterwiseMCQ {
    return normalizeQuestion(rawQ, chapterId, itemIndex);
  }

  /**
   * Returns statistics for a chapter from the lightweight static registry.
   */
  public static getStats(chapterId: string): ChapterwiseStats | null {
    const norm = normalizeChapterId(chapterId);
    return CHAPTER_STATS_REGISTRY[norm] || null;
  }

  /**
   * Returns question count ready for a chapter instantly without loading full dataset.
   */
  public static getQuestionCount(chapterId: string): number {
    const norm = normalizeChapterId(chapterId);
    return CHAPTER_STATS_REGISTRY[norm]?.totalQuestions ?? 0;
  }

  /**
   * Retrieves saved progress for a student on a specific chapter.
   */
  public static getProgress(chapterId: string): ChapterMCQProgress {
    const key = `${STORAGE_PREFIX}${chapterId}`;
    const totalQ = this.getQuestionCount(chapterId);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem(key);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (!parsed.checkedQuestions) {
            parsed.checkedQuestions = {};
          }
          if (!parsed.draftSelections) {
            parsed.draftSelections = { ...(parsed.userAnswers || {}) };
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading chapter progress:', e);
    }

    return {
      chapterId,
      totalQuestions: totalQ,
      attempted: 0,
      correct: 0,
      incorrect: 0,
      userAnswers: {},
      checkedQuestions: {},
      draftSelections: {},
      bookmarked: {}
    };
  }

  /**
   * Saves a draft option selection before the user clicks 'Check Answer'.
   */
  public static saveDraftSelection(
    chapterId: string,
    questionId: string,
    option: 'A' | 'B' | 'C' | 'D'
  ): ChapterMCQProgress {
    const progress = this.getProgress(chapterId);
    if (!progress.draftSelections) {
      progress.draftSelections = {};
    }
    progress.draftSelections[questionId] = option;

    // Save locally and non-blocking sync to cloud
    this.saveProgressLocallyAndSync(chapterId, progress);

    return progress;
  }

  /**
   * Saves progress locally to localStorage immediately, and triggers non-blocking
   * background sync to Firestore if user is authenticated and online.
   */
  public static saveProgressLocallyAndSync(chapterId: string, progress: ChapterMCQProgress): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(`${STORAGE_PREFIX}${chapterId}`, JSON.stringify(progress));
      }
    } catch (e) {
      console.warn('Failed to save progress locally:', e);
    }

    // Authenticated non-blocking Firestore progress sync
    const currentUser = auth.currentUser;
    if (currentUser && currentUser.uid) {
      const uid = currentUser.uid;
      setTimeout(async () => {
        try {
          if (typeof navigator !== 'undefined' && !navigator.onLine) return;
          const progressDocRef = doc(db, 'users', uid, 'chapterwiseProgress', chapterId);
          await setDoc(progressDocRef, {
            ...progress,
            syncedAt: new Date().toISOString()
          }, { merge: true });
        } catch (err) {
          handleFirestoreError(err, OperationType.WRITE, `users/${uid}/chapterwiseProgress/${chapterId}`);
        }
      }, 50);
    }
  }

  /**
   * Non-blocking background fetch of remote progress from Firestore for authenticated users.
   * Merges remote progress with local progress safely (never overwriting newer local answers).
   */
  public static async pullRemoteProgress(chapterId: string): Promise<ChapterMCQProgress | null> {
    const currentUser = auth.currentUser;
    if (!currentUser || !currentUser.uid) return null;
    if (typeof navigator !== 'undefined' && !navigator.onLine) return null;

    try {
      const progressDocRef = doc(db, 'users', currentUser.uid, 'chapterwiseProgress', chapterId);
      const snap = await getDoc(progressDocRef);
      if (!snap.exists()) return null;

      const remoteData = snap.data() as Partial<ChapterMCQProgress>;
      const local = this.getProgress(chapterId);

      // Safe non-destructive merge: preserve whichever answered more questions or latest attempt
      const merged: ChapterMCQProgress = {
        chapterId,
        totalQuestions: local.totalQuestions || remoteData.totalQuestions || 500,
        attempted: Math.max(local.attempted || 0, remoteData.attempted || 0),
        correct: Math.max(local.correct || 0, remoteData.correct || 0),
        incorrect: Math.max(local.incorrect || 0, remoteData.incorrect || 0),
        userAnswers: { ...(remoteData.userAnswers || {}), ...(local.userAnswers || {}) },
        checkedQuestions: { ...(remoteData.checkedQuestions || {}), ...(local.checkedQuestions || {}) },
        draftSelections: { ...(remoteData.draftSelections || {}), ...(local.draftSelections || {}) },
        bookmarked: { ...(remoteData.bookmarked || {}), ...(local.bookmarked || {}) },
        lastAttemptedAt: local.lastAttemptedAt || remoteData.lastAttemptedAt
      };

      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(`${STORAGE_PREFIX}${chapterId}`, JSON.stringify(merged));
      }
      return merged;
    } catch (e) {
      handleFirestoreError(e, OperationType.GET, `users/${currentUser.uid}/chapterwiseProgress/${chapterId}`);
      return null;
    }
  }

  /**
   * Checks and evaluates a single question when the student clicks 'Check Answer'.
   * Reveals solution and syncs wrong answer to Mistake Book.
   */
  public static checkAnswer(
    chapterId: string,
    questionId: string,
    selectedOption: 'A' | 'B' | 'C' | 'D'
  ): { isCorrect: boolean; progress: ChapterMCQProgress } {
    const questions = this.getQuestions(chapterId);
    const question = questions.find(q => q.id === questionId);
    const progress = this.getProgress(chapterId);

    if (!progress.checkedQuestions) {
      progress.checkedQuestions = {};
    }
    if (!progress.draftSelections) {
      progress.draftSelections = {};
    }

    // Lock in the answer and mark as checked
    progress.checkedQuestions[questionId] = true;
    progress.userAnswers[questionId] = selectedOption;
    progress.draftSelections[questionId] = selectedOption;
    progress.lastAttemptedAt = new Date().toISOString();

    const isCorrect = question ? question.correctAnswer === selectedOption : false;

    // Recalculate metrics based on checked questions
    let correctCount = 0;
    let incorrectCount = 0;

    questions.forEach(q => {
      if (progress.checkedQuestions[q.id]) {
        const studentAns = progress.userAnswers[q.id];
        if (studentAns === q.correctAnswer) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      }
    });

    progress.attempted = Object.keys(progress.checkedQuestions).length;
    progress.correct = correctCount;
    progress.incorrect = incorrectCount;
    progress.totalQuestions = questions.length;

    // Save locally and sync to cloud
    this.saveProgressLocallyAndSync(chapterId, progress);

    // Automatically sync to Mistake Book if answer was incorrect
    if (!isCorrect && question) {
      this.syncToMistakeBook(chapterId, question, selectedOption);
    }

    return { isCorrect, progress };
  }

  /**
   * Submits all answers together for a chapter, evaluates them, updates stats and mistake book.
   */
  public static submitAllAnswers(
    chapterId: string,
    answers: Record<string, 'A' | 'B' | 'C' | 'D'>
  ): ChapterMCQProgress {
    const questions = this.getQuestions(chapterId);
    const progress = this.getProgress(chapterId);

    if (!progress.checkedQuestions) {
      progress.checkedQuestions = {};
    }

    // Update user answers and mark all answered questions as checked
    progress.userAnswers = { ...answers };
    progress.draftSelections = { ...answers };
    Object.keys(answers).forEach(qId => {
      progress.checkedQuestions[qId] = true;
    });
    progress.lastAttemptedAt = new Date().toISOString();

    let correctCount = 0;
    let incorrectCount = 0;

    questions.forEach(q => {
      if (progress.checkedQuestions[q.id]) {
        const studentAns = progress.userAnswers[q.id];
        if (studentAns) {
          if (studentAns === q.correctAnswer) {
            correctCount++;
          } else {
            incorrectCount++;
            this.syncToMistakeBook(chapterId, q, studentAns);
          }
        }
      }
    });

    progress.attempted = Object.keys(progress.checkedQuestions).length;
    progress.correct = correctCount;
    progress.incorrect = incorrectCount;
    progress.totalQuestions = questions.length;

    this.saveProgressLocallyAndSync(chapterId, progress);

    return progress;
  }

  /**
   * Records a user's answer for a question.
   */
  public static recordAnswer(
    chapterId: string,
    questionId: string,
    selectedOption: 'A' | 'B' | 'C' | 'D'
  ): { isCorrect: boolean; progress: ChapterMCQProgress } {
    const questions = this.getQuestions(chapterId);
    const question = questions.find(q => q.id === questionId);
    const progress = this.getProgress(chapterId);

    if (!question) {
      return { isCorrect: false, progress };
    }

    const isCorrect = question.correctAnswer === selectedOption;

    // Record answer
    progress.userAnswers[questionId] = selectedOption;
    progress.lastAttemptedAt = new Date().toISOString();

    // Recalculate summary metrics
    let correctCount = 0;
    let incorrectCount = 0;

    Object.entries(progress.userAnswers).forEach(([qId, ans]) => {
      const targetQ = questions.find(q => q.id === qId);
      if (targetQ) {
        if (targetQ.correctAnswer === ans) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      }
    });

    progress.attempted = Object.keys(progress.userAnswers).length;
    progress.correct = correctCount;
    progress.incorrect = incorrectCount;
    progress.totalQuestions = questions.length;

    // Save locally and sync
    this.saveProgressLocallyAndSync(chapterId, progress);

    // Automatically sync to Mistake Book if answer was incorrect
    if (!isCorrect) {
      this.syncToMistakeBook(chapterId, question, selectedOption);
    }

    return { isCorrect, progress };
  }

  /**
   * Toggles bookmark for a question.
   */
  public static toggleBookmark(chapterId: string, questionId: string): boolean {
    const progress = this.getProgress(chapterId);
    const currentState = !!progress.bookmarked[questionId];
    progress.bookmarked[questionId] = !currentState;

    this.saveProgressLocallyAndSync(chapterId, progress);

    return !currentState;
  }

  /**
   * Resets chapter progress.
   */
  public static resetProgress(chapterId: string): ChapterMCQProgress {
    const questions = this.getQuestions(chapterId);
    let prevBookmarks: Record<string, boolean> = {};
    try {
      const prev = this.getProgress(chapterId);
      prevBookmarks = prev.bookmarked || {};
    } catch (e) {
      // fallback
    }
    const newProgress: ChapterMCQProgress = {
      chapterId,
      totalQuestions: questions.length,
      attempted: 0,
      correct: 0,
      incorrect: 0,
      userAnswers: {},
      checkedQuestions: {},
      draftSelections: {},
      bookmarked: prevBookmarks
    };

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(`${STORAGE_PREFIX}${chapterId}`);
        window.localStorage.setItem(`${STORAGE_PREFIX}${chapterId}`, JSON.stringify(newProgress));
      }
    } catch (e) {
      console.warn('Failed to clear progress:', e);
    }

    // Authenticated non-blocking reset in Firestore
    const currentUser = auth.currentUser;
    if (currentUser && currentUser.uid) {
      const uid = currentUser.uid;
      setTimeout(async () => {
        try {
          if (typeof navigator !== 'undefined' && !navigator.onLine) return;
          const progressDocRef = doc(db, 'users', uid, 'chapterwiseProgress', chapterId);
          await setDoc(progressDocRef, {
            ...newProgress,
            syncedAt: new Date().toISOString()
          });
        } catch (err) {
          handleFirestoreError(err, OperationType.WRITE, `users/${uid}/chapterwiseProgress/${chapterId}`);
        }
      }, 50);
    }

    return newProgress;
  }

  /**
   * Synchronizes an incorrect answer to the student's Mistake Book.
   */
  private static syncToMistakeBook(
    chapterId: string,
    question: ChapterwiseMCQ,
    studentAnswer: 'A' | 'B' | 'C' | 'D'
  ): void {
    try {
      const mistakeState = MistakeBookService.getState();
      const existing = mistakeState.mistakes[question.id];

      const optionIndexMap: Record<string, number> = { A: 0, B: 1, C: 2, D: 3 };
      const studentIdx = optionIndexMap[studentAnswer] ?? 0;
      const correctIdx = question.correctIndex ?? optionIndexMap[question.correctAnswer] ?? 0;

      const rawT = question.topic || (question as any).subtopic || (question as any).subTopic;
      const safeTopic = (rawT && rawT !== 'undefined' && rawT !== 'null' && String(rawT).trim().length > 0)
        ? String(rawT).trim()
        : CHAPTERS[chapterId]?.title || CHAPTER_STATS_REGISTRY[chapterId]?.chapterTitle || 'General';
      const safeTopicId = question.topicId || `topic-${safeTopic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
      const safeChapterId = question.chapterId || chapterId;
      const safeChapterTitle = question.chapter || CHAPTER_STATS_REGISTRY[chapterId]?.chapterTitle || chapterId;
      const safeSubject = question.subject || CHAPTER_STATS_REGISTRY[chapterId]?.subject || 'Physics';
      const rawSub = safeSubject.toLowerCase();
      const subjectType: 'physics' | 'chemistry' | 'biology' =
        rawSub.includes('chem') ? 'chemistry' : (rawSub.includes('bio') ? 'biology' : 'physics');

      const mistakeRecord: MistakeRecord = {
        id: `mistake-${question.id}`,
        questionId: question.id,
        sourceType: 'chapter_test',
        subject: subjectType,
        subjectName: safeSubject,
        chapterId: safeChapterId,
        chapterTitle: safeChapterTitle,
        topicId: safeTopicId,
        topicTitle: safeTopic,
        question: question.question,
        options: question.optionsList || (Array.isArray(question.options) ? question.options : [
          (question.options as any)?.A || '',
          (question.options as any)?.B || '',
          (question.options as any)?.C || '',
          (question.options as any)?.D || ''
        ]),
        studentAnswer: studentIdx,
        correctAnswer: correctIdx,
        explanation: question.explanation,
        conceptTested: question.solutionStructured?.concept || safeTopic,
        date: Date.now(),
        timesIncorrect: existing ? existing.timesIncorrect + 1 : 1,
        isRepeatedMistake: existing ? true : false,
        isResolved: false
      };

      mistakeState.mistakes[question.id] = mistakeRecord;
      MistakeBookService.saveState(mistakeState);
    } catch (err) {
      console.warn('Could not sync mistake record:', err);
    }
  }

  /**
   * Background seed to Firestore if user is online and Firestore is active.
   * Completely asynchronous and non-blocking.
   */
  public static async syncChapterToFirestore(chapterId: string): Promise<void> {
    if (chapterId !== 'units-measurements' && chapterId !== 'motion-straight-line' && chapterId !== 'motion-plane' && chapterId !== 'motion-in-a-plane' && chapterId !== 'laws-of-motion') return;
    try {
      const summaryDocRef = doc(db, 'chapterwise_mcqs', chapterId);
      const isMotion = chapterId === 'motion-straight-line';
      const isPlane = chapterId === 'motion-plane' || chapterId === 'motion-in-a-plane';
      const isLOM = chapterId === 'laws-of-motion';
      const chapterTitle = isLOM ? 'Laws of Motion' : (isPlane ? 'Motion in a Plane' : (isMotion ? 'Motion in a Straight Line' : 'Units and Measurements'));
      await setDoc(summaryDocRef, {
        chapterId,
        chapterTitle,
        subject: 'Physics',
        class: '11',
        totalQuestions: 500,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (e) {
      // Non-blocking background catch
    }
  }
}
