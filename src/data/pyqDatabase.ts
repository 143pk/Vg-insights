import { BIOLOGY_PYQS_ARCHIVE } from './pyqDataBiology';
import { PHYSICS_PYQS_ARCHIVE } from './pyqDataPhysics';
import { CHEMISTRY_PYQS_ARCHIVE } from './pyqDataChemistry';
import { NEET_2026_PHYSICS_PYQS } from './pyq2026Physics';
import { NEET_2026_CHEMISTRY_PYQS } from './pyq2026Chemistry';
import { NEET_2026_BOTANY_PYQS } from './pyq2026Botany';
import { NEET_2026_ZOOLOGY_PYQS } from './pyq2026Zoology';
import { NEET_2025_PHYSICS_PYQS } from './pyq2025Physics';
import { NEET_2025_CHEMISTRY_PYQS } from './pyq2025Chemistry';
import { NEET_2025_BOTANY_PYQS } from './pyq2025Botany';
import { NEET_2025_ZOOLOGY_PYQS } from './pyq2025Zoology';
import { NEET_2024_PHYSICS_PYQS } from './pyq2024Physics';
import { NEET_2024_CHEMISTRY_PYQS } from './pyq2024Chemistry';
import { NEET_2024_BOTANY_PYQS } from './pyq2024Botany';
import { NEET_2024_ZOOLOGY_PYQS } from './pyq2024Zoology';
import { NEET_2023_PHYSICS_PYQS } from './pyq2023Physics';
import { NEET_2023_CHEMISTRY_PYQS } from './pyq2023Chemistry';
import { NEET_2023_BOTANY_PYQS } from './pyq2023Botany';
import { NEET_2023_ZOOLOGY_PYQS } from './pyq2023Zoology';
import { NEET_2022_PHYSICS_PYQS } from './pyq2022Physics';
import { NEET_2022_CHEMISTRY_PYQS } from './pyq2022Chemistry';
import { NEET_2022_BOTANY_PYQS } from './pyq2022Botany';
import { NEET_2022_ZOOLOGY_PYQS } from './pyq2022Zoology';
import { NEET_2021_PHYSICS_PYQS } from './pyq2021Physics';
import { NEET_2021_CHEMISTRY_PYQS } from './pyq2021Chemistry';
import { NEET_2021_BOTANY_PYQS } from './pyq2021Botany';
import { NEET_2021_ZOOLOGY_PYQS } from './pyq2021Zoology';
import { NEET_2020_PHYSICS_PYQS } from './pyq2020Physics';
import { NEET_2020_CHEMISTRY_PYQS } from './pyq2020Chemistry';
import { NEET_2020_BOTANY_PYQS } from './pyq2020Botany';
import { NEET_2020_ZOOLOGY_PYQS } from './pyq2020Zoology';
import { NEET_2019_PHYSICS_PYQS } from './pyq2019Physics';
import { NEET_2019_CHEMISTRY_PYQS } from './pyq2019Chemistry';
import { NEET_2019_BOTANY_PYQS } from './pyq2019Botany';
import { NEET_2019_ZOOLOGY_PYQS } from './pyq2019Zoology';
import { NEET_2018_PHYSICS_PYQS } from './pyq2018Physics';
import { NEET_2018_CHEMISTRY_PYQS } from './pyq2018Chemistry';
import { NEET_2018_BOTANY_PYQS } from './pyq2018Botany';
import { NEET_2018_ZOOLOGY_PYQS } from './pyq2018Zoology';
import { NEET_2017_PHYSICS_PYQS } from './pyq2017Physics';
import { NEET_2017_CHEMISTRY_PYQS } from './pyq2017Chemistry';
import { NEET_2017_BOTANY_PYQS } from './pyq2017Botany';
import { NEET_2017_ZOOLOGY_PYQS } from './pyq2017Zoology';
import { NEET_2016_PHYSICS_PYQS } from './pyq2016Physics';
import { NEET_2016_CHEMISTRY_PYQS } from './pyq2016Chemistry';
import { NEET_2016_BOTANY_PYQS } from './pyq2016Botany';
import { NEET_2016_ZOOLOGY_PYQS } from './pyq2016Zoology';
import { AIPMT_2015_PHYSICS_PYQS } from './pyq2015Physics';
import { AIPMT_2015_CHEMISTRY_PYQS } from './pyq2015Chemistry';
import { AIPMT_2015_BIOLOGY_PYQS } from './pyq2015Biology';

export type VerificationStatus = 'VERIFIED' | 'PARTIALLY_VERIFIED' | 'UNVERIFIED';

export interface PYQQuestion {
  id: string;
  year: number;
  subject: 'physics' | 'chemistry' | 'biology';
  chapterId: string;
  chapterTitle: string;
  topicId: string;
  topicTitle: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  ncertReference?: string;

  // Extended Provenance & Verification Metadata
  exam?: string;
  examInstance?: string;
  examDate?: string;
  biologySection?: 'Botany' | 'Zoology';
  questionNumber?: number;
  correctAnswer?: 'A' | 'B' | 'C' | 'D';
  source?: string;
  sourceUrl?: string;
  sourceVerified?: boolean;
  verificationStatus?: VerificationStatus;
  questionType?: string;
  language?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Complete Consolidated 2014-2026 Past 10+ Years NEET UG / AIPMT Archive
export const PYQ_DATABASE: PYQQuestion[] = [
  ...NEET_2026_PHYSICS_PYQS,
  ...NEET_2026_CHEMISTRY_PYQS,
  ...NEET_2026_BOTANY_PYQS,
  ...NEET_2026_ZOOLOGY_PYQS,
  ...NEET_2025_PHYSICS_PYQS,
  ...NEET_2025_CHEMISTRY_PYQS,
  ...NEET_2025_BOTANY_PYQS,
  ...NEET_2025_ZOOLOGY_PYQS,
  ...NEET_2024_PHYSICS_PYQS,
  ...NEET_2024_CHEMISTRY_PYQS,
  ...NEET_2024_BOTANY_PYQS,
  ...NEET_2024_ZOOLOGY_PYQS,
  ...NEET_2023_PHYSICS_PYQS,
  ...NEET_2023_CHEMISTRY_PYQS,
  ...NEET_2023_BOTANY_PYQS,
  ...NEET_2023_ZOOLOGY_PYQS,
  ...NEET_2022_PHYSICS_PYQS,
  ...NEET_2022_CHEMISTRY_PYQS,
  ...NEET_2022_BOTANY_PYQS,
  ...NEET_2022_ZOOLOGY_PYQS,
  ...NEET_2021_PHYSICS_PYQS,
  ...NEET_2021_CHEMISTRY_PYQS,
  ...NEET_2021_BOTANY_PYQS,
  ...NEET_2021_ZOOLOGY_PYQS,
  ...NEET_2020_PHYSICS_PYQS,
  ...NEET_2020_CHEMISTRY_PYQS,
  ...NEET_2020_BOTANY_PYQS,
  ...NEET_2020_ZOOLOGY_PYQS,
  ...NEET_2019_PHYSICS_PYQS,
  ...NEET_2019_CHEMISTRY_PYQS,
  ...NEET_2019_BOTANY_PYQS,
  ...NEET_2019_ZOOLOGY_PYQS,
  ...NEET_2018_PHYSICS_PYQS,
  ...NEET_2018_CHEMISTRY_PYQS,
  ...NEET_2018_BOTANY_PYQS,
  ...NEET_2018_ZOOLOGY_PYQS,
  ...NEET_2017_PHYSICS_PYQS,
  ...NEET_2017_CHEMISTRY_PYQS,
  ...NEET_2017_BOTANY_PYQS,
  ...NEET_2017_ZOOLOGY_PYQS,
  ...NEET_2016_PHYSICS_PYQS,
  ...NEET_2016_CHEMISTRY_PYQS,
  ...NEET_2016_BOTANY_PYQS,
  ...NEET_2016_ZOOLOGY_PYQS,
  ...AIPMT_2015_PHYSICS_PYQS,
  ...AIPMT_2015_CHEMISTRY_PYQS,
  ...AIPMT_2015_BIOLOGY_PYQS,
  ...BIOLOGY_PYQS_ARCHIVE,
  ...PHYSICS_PYQS_ARCHIVE,
  ...CHEMISTRY_PYQS_ARCHIVE
].sort((a, b) => {
  if (b.year !== a.year) return b.year - a.year;
  return (a.questionNumber ?? 0) - (b.questionNumber ?? 0);
});
