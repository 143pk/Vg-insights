import { SUBJECTS, CLASSIFICATIONS, CHAPTERS, TOPICS } from '../data/neetData';

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface RouteState {
  type:
    | 'home'
    | 'subject'
    | 'class'
    | 'classification'
    | 'chapter'
    | 'topic'
    | 'weakness-doctor'
    | 'weakness-practice'
    | 'diagnostic-quiz'
    | 'weekly-mock'
    | 'weekly-mock-instructions'
    | 'weekly-mock-test'
    | 'weekly-mock-result'
    | 'chapter-tests'
    | 'custom-test'
    | 'test-history'
    | 'mistake-book'
    | 'strengths-weaknesses'
    | 'weak-topic-practice'
    | 'bookmarked-questions'
    | 'incorrect-questions'
    | 'pyqs'
    | 'revision'
    | 'chapters'
    | 'my-progress';
  mockId?: string;
  subFilter?: string;
  subjectId?: string;
  classLevel?: 'class-11' | 'class-12';
  classificationId?: string;
  chapterId?: string;
  topicId?: string;
  breadcrumbs: BreadcrumbItem[];
}

export class RouterService {
  static parseHash(hash: string): RouteState {
    const cleanHash = hash.replace(/^#\/?/, '').trim();
    if (!cleanHash || cleanHash === 'home') {
      return {
        type: 'home',
        breadcrumbs: [{ label: 'Home', path: '#home' }]
      };
    }

    const parts = cleanHash.split('/');
    const prefix = parts[0];

    // 1. Weekly Mock Routes
    if (prefix === 'weekly-mock') {
      if (parts[1] === 'instructions' && parts[2]) {
        return {
          type: 'weekly-mock-instructions',
          mockId: parts[2],
          breadcrumbs: [
            { label: 'Home', path: '#home' },
            { label: 'Weekly NEET Mock', path: '#weekly-mock' },
            { label: 'Exam Instructions', path: `#weekly-mock/instructions/${parts[2]}` }
          ]
        };
      }
      if (parts[1] === 'test' && parts[2]) {
        return {
          type: 'weekly-mock-test',
          mockId: parts[2],
          breadcrumbs: [
            { label: 'Home', path: '#home' },
            { label: 'Weekly NEET Mock', path: '#weekly-mock' },
            { label: 'Active Simulation', path: `#weekly-mock/test/${parts[2]}` }
          ]
        };
      }
      if (parts[1] === 'result' && parts[2]) {
        const subFilter = parts[3] === 'filter' && parts[4] ? parts[4] : 'all';
        return {
          type: 'weekly-mock-result',
          mockId: parts[2],
          subFilter,
          breadcrumbs: [
            { label: 'Home', path: '#home' },
            { label: 'Weekly NEET Mock', path: '#weekly-mock' },
            { label: 'Score Analysis & Solutions', path: `#weekly-mock/result/${parts[2]}` }
          ]
        };
      }
      return {
        type: 'weekly-mock',
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'Weekly NEET Mock', path: '#weekly-mock' }
        ]
      };
    }

    // 2. Test Suite Routes
    if (prefix === 'chapter-tests') {
      const subFilter = parts[1] === 'filter' && parts[2] ? parts[2] : 'all';
      return {
        type: 'chapter-tests',
        subFilter,
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'Chapter Tests', path: '#chapter-tests' }
        ]
      };
    }

    if (prefix === 'custom-test') {
      return {
        type: 'custom-test',
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'Custom Test Builder', path: '#custom-test' }
        ]
      };
    }

    if (prefix === 'test-history') {
      return {
        type: 'test-history',
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'Test History', path: '#test-history' }
        ]
      };
    }

    // 3. Performance & Mistake Book
    if (prefix === 'mistake-book') {
      const subFilter = parts[1] === 'filter' && parts[2] ? parts[2] : 'all';
      return {
        type: 'mistake-book',
        subFilter,
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'NEET Mistake Book', path: '#mistake-book' }
        ]
      };
    }

    if (prefix === 'strengths-weaknesses') {
      return {
        type: 'strengths-weaknesses',
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'Strengths & Weaknesses', path: '#strengths-weaknesses' }
        ]
      };
    }

    if (prefix === 'my-progress') {
      return {
        type: 'my-progress',
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'My Progress', path: '#my-progress' }
        ]
      };
    }

    // 4. Practice Suite
    if (prefix === 'weak-topic-practice') {
      return {
        type: 'weak-topic-practice',
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'Weak Topic Practice', path: '#weak-topic-practice' }
        ]
      };
    }

    if (prefix === 'bookmarked-questions') {
      return {
        type: 'bookmarked-questions',
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'Bookmarked Questions', path: '#bookmarked-questions' }
        ]
      };
    }

    if (prefix === 'incorrect-questions') {
      return {
        type: 'incorrect-questions',
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'Mistake Book', path: '#mistake-book' }
        ]
      };
    }

    // 5. Study Modules
    if (prefix === 'pyqs') {
      return {
        type: 'pyqs',
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'PYQ Archive', path: '#pyqs' }
        ]
      };
    }

    if (prefix === 'revision') {
      return {
        type: 'revision',
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'Revision Sheets', path: '#revision' }
        ]
      };
    }

    if (prefix === 'chapters') {
      return {
        type: 'chapters',
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'All Chapters', path: '#chapters' }
        ]
      };
    }

    // 6. Subject, Class, Classification, Chapter, Topic
    if (prefix === 'subject' && parts[1]) {
      const subjectId = parts[1];
      const subject = SUBJECTS.find(s => s.id === subjectId);
      return {
        type: 'subject',
        subjectId,
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: subject ? subject.name : subjectId, path: `#subject/${subjectId}` }
        ]
      };
    }

    if (prefix === 'class' && parts[1] && parts[2]) {
      const subjectId = parts[1];
      const classLevel = parts[2] as 'class-11' | 'class-12';
      const subject = SUBJECTS.find(s => s.id === subjectId);
      const classLabel = classLevel === 'class-11' ? 'Class 11' : 'Class 12';
      return {
        type: 'class',
        subjectId,
        classLevel,
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: subject ? subject.name : subjectId, path: `#subject/${subjectId}` },
          { label: classLabel, path: `#class/${subjectId}/${classLevel}` }
        ]
      };
    }

    if (prefix === 'classification' && parts[1]) {
      const classificationId = parts[1];
      const classification = CLASSIFICATIONS[classificationId];
      if (classification) {
        const subject = SUBJECTS.find(s => s.id === classification.subjectId);
        const classLabel = classification.classLevel === 'class-11' ? 'Class 11' : 'Class 12';
        return {
          type: 'classification',
          classificationId,
          subjectId: classification.subjectId,
          classLevel: classification.classLevel,
          breadcrumbs: [
            { label: 'Home', path: '#home' },
            { label: subject ? subject.name : classification.subjectId, path: `#subject/${classification.subjectId}` },
            { label: classLabel, path: `#class/${classification.subjectId}/${classification.classLevel}` },
            { label: classification.title, path: `#classification/${classificationId}` }
          ]
        };
      }
    }

    if (prefix === 'chapter' && parts[1]) {
      const chapterId = parts[1];
      const chapter = CHAPTERS[chapterId];
      if (chapter) {
        const classification = CLASSIFICATIONS[chapter.classificationId];
        const subject = classification ? SUBJECTS.find(s => s.id === classification.subjectId) : undefined;
        const classLabel = classification ? (classification.classLevel === 'class-11' ? 'Class 11' : 'Class 12') : '';
        
        const crumbs: BreadcrumbItem[] = [{ label: 'Home', path: '#home' }];
        if (subject) crumbs.push({ label: subject.name, path: `#subject/${subject.id}` });
        if (classification) {
          crumbs.push({ label: classLabel, path: `#class/${subject?.id}/${classification.classLevel}` });
          crumbs.push({ label: classification.title, path: `#classification/${classification.id}` });
        }
        crumbs.push({ label: chapter.title, path: `#chapter/${chapterId}` });

        return {
          type: 'chapter',
          chapterId,
          classificationId: chapter.classificationId,
          subjectId: classification?.subjectId,
          classLevel: classification?.classLevel,
          breadcrumbs: crumbs
        };
      }
    }

    if (prefix === 'topic' && parts[1]) {
      const topicId = parts[1];
      const topic = TOPICS[topicId];
      if (topic) {
        const chapter = CHAPTERS[topic.chapterId];
        const classification = chapter ? CLASSIFICATIONS[chapter.classificationId] : undefined;
        const subject = classification ? SUBJECTS.find(s => s.id === classification.subjectId) : undefined;
        const classLabel = classification ? (classification.classLevel === 'class-11' ? 'Class 11' : 'Class 12') : '';

        const crumbs: BreadcrumbItem[] = [{ label: 'Home', path: '#home' }];
        if (subject) crumbs.push({ label: subject.name, path: `#subject/${subject.id}` });
        if (classification) {
          crumbs.push({ label: classLabel, path: `#class/${subject?.id}/${classification.classLevel}` });
          crumbs.push({ label: classification.title, path: `#classification/${classification.id}` });
        }
        if (chapter) crumbs.push({ label: chapter.title, path: `#chapter/${chapter.id}` });
        crumbs.push({ label: topic.title, path: `#topic/${topicId}` });

        return {
          type: 'topic',
          topicId,
          chapterId: topic.chapterId,
          classificationId: chapter?.classificationId,
          subjectId: classification?.subjectId,
          classLevel: classification?.classLevel,
          breadcrumbs: crumbs
        };
      }
    }

    // 7. Weakness Doctor Routes
    if (prefix === 'weakness-doctor') {
      if (parts[1] === 'practice' && parts[2]) {
        const topicId = parts[2];
        const topic = TOPICS[topicId];
        const topicTitle = topic ? topic.title : topicId.replace(/-/g, ' ');
        return {
          type: 'weakness-practice',
          topicId,
          breadcrumbs: [
            { label: 'Home', path: '#home' },
            { label: 'AI Weakness Doctor', path: '#weakness-doctor' },
            { label: `Fix: ${topicTitle}`, path: `#weakness-doctor/practice/${topicId}` }
          ]
        };
      }

      return {
        type: 'weakness-doctor',
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'AI Weakness Doctor', path: '#weakness-doctor' }
        ]
      };
    }

    if (prefix === 'diagnostic-quiz') {
      return {
        type: 'diagnostic-quiz',
        breadcrumbs: [
          { label: 'Home', path: '#home' },
          { label: 'AI Weakness Doctor', path: '#weakness-doctor' },
          { label: '5-Min Diagnostic Quiz', path: '#diagnostic-quiz' }
        ]
      };
    }

    // Default fallback
    return {
      type: 'home',
      breadcrumbs: [{ label: 'Home', path: '#home' }]
    };
  }

  static navigateTo(path: string): void {
    window.location.hash = path.startsWith('#') ? path : `#${path}`;
  }
}
