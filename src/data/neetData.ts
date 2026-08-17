import { Subject, Classification, Chapter, Topic } from '../types/neet'
import { PHYSICS_CLASSIFICATIONS, PHYSICS_CHAPTERS, PHYSICS_TOPICS } from './physicsData'
import { CHEMISTRY_CLASSIFICATIONS, CHEMISTRY_CHAPTERS, CHEMISTRY_TOPICS } from './chemistryData'
import { BIOLOGY_CLASSIFICATIONS, BIOLOGY_CHAPTERS, BIOLOGY_TOPICS } from './biologyData'
import { TOPIC_DETAILS } from './topicDetails'

export const CLASSIFICATIONS: Record<string, Classification> = {
  ...PHYSICS_CLASSIFICATIONS,
  ...CHEMISTRY_CLASSIFICATIONS,
  ...BIOLOGY_CLASSIFICATIONS
};

export const CHAPTERS: Record<string, Chapter> = {
  ...PHYSICS_CHAPTERS,
  ...CHEMISTRY_CHAPTERS,
  ...BIOLOGY_CHAPTERS
};

function formatTopicIdToTitle(id: string): string {
  const clean = id.replace(/^(phys|chem|bio)-/, "").replace(/-/g, " ");
  return clean.replace(/\b\w/g, c => c.toUpperCase());
}

function buildTopicFromDetails(id: string, detail: any, chId: string): Topic {
  if (detail) {
    return {
      id: id,
      title: detail.topicName || detail.title || formatTopicIdToTitle(id),
      chapterId: chId || detail.chapter || detail.chapterId || "",
      estimatedReadTimeMinutes: detail.estimatedReadTimeMinutes || 15,
      importanceWeight: detail.importanceWeight || "High Yield",
      summary: detail.whatIsThisTopic || detail.summary || detail.basicIdea || `Key concepts, core formulas, and NEET UG preparation material for ${formatTopicIdToTitle(id)}.`,
      notes: {
        learn: typeof detail.conceptExplanation === "string" ? [detail.conceptExplanation] : (Array.isArray(detail.conceptExplanation) ? detail.conceptExplanation : (detail.notes?.learn || [`Detailed study notes for ${formatTopicIdToTitle(id)}.`])),
        keyConcepts: detail.importantTerms || detail.notes?.keyConcepts || [formatTopicIdToTitle(id)],
        formulas: (detail.formulae || detail.notes?.formulas || []).map((f: any) => ({
          title: typeof f === 'string' ? 'Key Equation' : String(f.name || f.title || f.formulaName || ""),
          formula: typeof f === 'string' ? f : String(f.formula || f.expression || ""),
          variables: typeof f === 'string' ? "" : String(f.symbols || f.variables || f.where || "")
        })),
        neetImportantPoints: detail.neetImportantPoints || detail.notes?.neetImportantPoints || [`High-yield NEET point for ${formatTopicIdToTitle(id)}.`],
        commonConfusions: (detail.commonConfusions || detail.notes?.commonConfusions || []).map((c: any) => ({
          commonConfusion: c.misconception || c.commonConfusion || "",
          correctFact: c.correction || c.correctFact || "",
          whyItMattersForNEET: c.whyItMattersForNEET || "High yield NEET concept"
        })),
        quickRevision: detail.quickRevision || detail.notes?.quickRevision || [formatTopicIdToTitle(id)]
      },
      pyqs: detail.pyqs || []
    };
  } else {
    const title = formatTopicIdToTitle(id);
    return {
      id: id,
      title: title,
      chapterId: chId,
      estimatedReadTimeMinutes: 15,
      importanceWeight: "High Yield",
      summary: `Comprehensive concepts, core formulas, key NCERT insights, and verified NEET UG practice for ${title}.`,
      notes: {
        learn: [
          `Mastering ${title} for NEET UG requires understanding core definitions, mathematical formulations, and NCERT-aligned problem-solving techniques.`,
          `Pay special attention to direct NCERT assertions, formula applications, and unit conversions commonly tested in NEET.`
        ],
        keyConcepts: [
          `Fundamental principles of ${title}.`,
          `Standard formulas and variable relationships.`
        ],
        formulas: [],
        neetImportantPoints: [
          `Direct formula application and physical interpretation of variables in ${title}.`
        ],
        commonConfusions: [
          {
            commonConfusion: `Confusing vector and scalar properties in ${title}.`,
            correctFact: `Always check whether quantities are direction-dependent or scalar magnitudes.`,
            whyItMattersForNEET: `Frequent trap in NEET multiple-choice questions.`
          }
        ],
        quickRevision: [
          `Key concept review for ${title}.`
        ]
      },
      pyqs: []
    };
  }
}

const ALL_TOPICS: Record<string, Topic> = {
  ...PHYSICS_TOPICS,
  ...CHEMISTRY_TOPICS,
  ...BIOLOGY_TOPICS
};

// 1. Map detailed topics from TOPIC_DETAILS to ensure full content is used
Object.entries(TOPIC_DETAILS).forEach(([id, detail]: [string, any]) => {
  let chId = detail.chapterId || detail.chapter || "";
  if (!CHAPTERS[chId]) {
    for (const [cId, ch] of Object.entries(CHAPTERS)) {
      if (ch.topicIds.includes(id)) {
        chId = cId;
        break;
      }
    }
  }
  ALL_TOPICS[id] = buildTopicFromDetails(id, detail, chId);
});

// 2. Map any remaining topic IDs defined in CHAPTERS so no chapter ever has missing topics
Object.entries(CHAPTERS).forEach(([chId, ch]) => {
  ch.topicIds.forEach((tId: string) => {
    if (!ALL_TOPICS[tId]) {
      ALL_TOPICS[tId] = buildTopicFromDetails(tId, TOPIC_DETAILS[tId], chId);
    }
  });
});

export const TOPICS: Record<string, Topic> = ALL_TOPICS;

// Helper function to calculate exact chapter and topic counts per subject
function countSubjectStats(subjectId: string) {
  let c11Chapters = 0;
  let c12Chapters = 0;
  let totalTopics = 0;

  Object.values(CLASSIFICATIONS).forEach(cls => {
    if (cls.subjectId === subjectId) {
      const chapterCount = cls.chapterIds.length;
      if (cls.classLevel === 'class-11') {
        c11Chapters += chapterCount;
      } else {
        c12Chapters += chapterCount;
      }

      cls.chapterIds.forEach(chId => {
        const chapter = CHAPTERS[chId];
        if (chapter) {
          totalTopics += chapter.topicIds.length;
        }
      });
    }
  });

  return { c11Chapters, c12Chapters, totalTopics };
}

const physStats = countSubjectStats('physics');
const chemStats = countSubjectStats('chemistry');
const bioStats = countSubjectStats('biology');

export const SUBJECTS: Subject[] = [
  {
    id: 'physics',
    name: 'Physics',
    tagline: 'Master Mechanics, Electrodynamics, Optics, Thermodynamics & Modern Physics.',
    icon: '⚡',
    color: 'blue',
    badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    bgGradient: 'from-blue-600 to-indigo-700',
    class11ChapterCount: physStats.c11Chapters,
    class12ChapterCount: physStats.c12Chapters,
    totalTopicsCount: physStats.totalTopics,
    classifications11: [
      'phys-11-measurement',
      'phys-11-kinematics',
      'phys-11-laws-of-motion',
      'phys-11-work-energy-power',
      'phys-11-rotational-motion',
      'phys-11-gravitation',
      'phys-11-properties-matter',
      'phys-11-thermodynamics',
      'phys-11-oscillations-waves'
    ],
    classifications12: [
      'phys-12-electrostatics',
      'phys-12-current-electricity',
      'phys-12-magnetism',
      'phys-12-emi-ac',
      'phys-12-em-waves-optics',
      'phys-12-modern-physics',
      'phys-12-electronic-devices'
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    tagline: 'Physical Chemistry Numericals, Inorganic Trends, and Organic GOC Reaction Mechanisms.',
    icon: '🧪',
    color: 'emerald',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    bgGradient: 'from-emerald-600 to-teal-700',
    class11ChapterCount: chemStats.c11Chapters,
    class12ChapterCount: chemStats.c12Chapters,
    totalTopicsCount: chemStats.totalTopics,
    classifications11: [
      'chem-11-physical',
      'chem-11-inorganic',
      'chem-11-organic'
    ],
    classifications12: [
      'chem-12-physical',
      'chem-12-inorganic',
      'chem-12-organic'
    ]
  },
  {
    id: 'biology',
    name: 'Biology',
    tagline: 'NCERT Botany & Zoology Line-by-Line: Cell Biology, Human Physiology, Genetics & Ecology.',
    icon: '🧬',
    color: 'purple',
    badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    bgGradient: 'from-purple-600 to-pink-700',
    class11ChapterCount: bioStats.c11Chapters,
    class12ChapterCount: bioStats.c12Chapters,
    totalTopicsCount: bioStats.totalTopics,
    classifications11: [
      'bio-11-diversity',
      'bio-11-structural-org',
      'bio-11-cell-structure',
      'bio-11-plant-physio',
      'bio-11-human-physio'
    ],
    classifications12: [
      'bio-12-reproduction',
      'bio-12-genetics-evolution',
      'bio-12-welfare',
      'bio-12-biotechnology',
      'bio-12-ecology'
    ]
  }
];
