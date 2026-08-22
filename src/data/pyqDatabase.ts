import { BIOLOGY_PYQS_ARCHIVE } from './pyqDataBiology';
import { PHYSICS_PYQS_ARCHIVE } from './pyqDataPhysics';
import { CHEMISTRY_PYQS_ARCHIVE } from './pyqDataChemistry';

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
}

// Complete Consolidated 2014-2026 Past 10+ Years NEET UG / AIPMT Archive
export const PYQ_DATABASE: PYQQuestion[] = [
  ...BIOLOGY_PYQS_ARCHIVE,
  ...PHYSICS_PYQS_ARCHIVE,
  ...CHEMISTRY_PYQS_ARCHIVE
].sort((a, b) => b.year - a.year);
