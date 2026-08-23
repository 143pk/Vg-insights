import { RouteState } from './routerService';
import { CHAPTERS, TOPICS, SUBJECTS, CLASSIFICATIONS, getTopicById, getChapterForTopic } from '../data/neetData';
import { TOPIC_DETAILS } from '../data/topicDetails';

export class SEOService {
  private static readonly BASE_URL = 'https://vginsights.in';
  private static readonly SITE_NAME = 'VG Insights';
  private static readonly OG_IMAGE = 'https://vginsights.in/og-image.png';

  /**
   * Updates all document meta tags, title, OpenGraph tags, canonicals,
   * robots indexing directives, and Schema.org JSON-LD based on the active route state.
   */
  public static updateMetaForRoute(route: RouteState): void {
    let title = `${this.SITE_NAME} – NEET UG 2027 Preparation, Chapterwise PYQs & 720 Mock Tests | Dr. Prajwal Kabadi (MBBS)`;
    let description =
      'Master NEET UG 2027 with VG Insights, founded by Dr. Prajwal Kabadi (MBBS) & Amit Bangare. Access 10+ years chapterwise PYQs, weekly 720-mark simulated mock tests, and AI weakness diagnosis.';
    let keywords =
      'NEET UG 2027, Dr. Prajwal Kabadi, Prajwal Kabadi MBBS, Amit Bangare, VG Insights, NEET 2027 preparation, NEET PYQs chapterwise, NEET Physics formula sheet, NEET Biology NCERT questions, NEET mock test 720, AI weakness doctor NEET';
    let canonicalUrl = `${this.BASE_URL}/`;
    let isIndexable = true;
    let ogType = 'website';
    let structuredData: any = null;

    switch (route.type) {
      case 'landing':
        title = `VG Insights – NEET UG 2027 Preparation | Founded by Dr. Prajwal Kabadi (MBBS)`;
        description =
          'Master NEET UG 2027 with VG Insights, led by Dr. Prajwal Kabadi (MBBS) & Amit Bangare. Access 10+ years chapterwise PYQs, weekly 720-mark mock tests, and AI-powered weakness diagnosis.';
        keywords =
          'Dr. Prajwal Kabadi, Prajwal Kabadi, Prajwal Kabadi MBBS, Dr Prajwal Kabadi NEET, Amit Bangare, VG Insights, NEET UG 2027, NEET 2028, NEET PYQs, NEET mock test 720';
        canonicalUrl = `${this.BASE_URL}/`;
        break;

      case 'home':
        title = `Student Dashboard – NEET UG Practice & Progress Tracker | ${this.SITE_NAME}`;
        description =
          'Track your daily NEET UG study streak, active syllabus completion, high-yield chapter accuracy, and diagnostic test readiness on VG Insights.';
        canonicalUrl = `${this.BASE_URL}/#home`;
        break;

      case 'start-here':
      case 'roadmap':
        title = `NEET UG Beginner Roadmap & Step-by-Step Mastery Path | ${this.SITE_NAME}`;
        description =
          'Follow the structured NEET UG beginner-to-advanced roadmap curated by Dr. Prajwal Kabadi (MBBS). Master core NCERT concepts step-by-step with 15-question checkpoint tests.';
        keywords =
          'NEET roadmap, NEET beginner guide, NEET study plan 2027, NEET step by step preparation, VG Insights';
        canonicalUrl = `${this.BASE_URL}/#start-here`;

        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Course',
          'name': 'NEET UG Guided Step-by-Step Mastery Roadmap',
          'description': description,
          'provider': {
            '@type': 'EducationalOrganization',
            'name': this.SITE_NAME,
            'url': this.BASE_URL
          },
          'educationalLevel': 'Higher Secondary / Pre-Medical',
          'about': ['NEET UG', 'Physics', 'Chemistry', 'Biology']
        };
        break;

      case 'subject': {
        const sub = route.subjectId ? SUBJECTS.find(s => s.id === route.subjectId) : null;
        const subName = sub ? sub.name : 'Subject';
        title = `NEET UG ${subName} 2027 – Syllabus, Notes, Formulas & PYQs | ${this.SITE_NAME}`;
        description = `Comprehensive NCERT-based syllabus, high-yield weightage chapters, formula cheat sheets, and past year questions for NEET UG ${subName}.`;
        keywords = `NEET ${subName}, NEET UG ${subName} notes, ${subName} PYQs NEET, ${subName} formula sheet, VG Insights`;
        canonicalUrl = `${this.BASE_URL}/#subject/${route.subjectId || ''}`;

        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Course',
          'name': `NEET UG ${subName} Complete Curriculum`,
          'description': description,
          'provider': {
            '@type': 'EducationalOrganization',
            'name': this.SITE_NAME,
            'url': this.BASE_URL
          },
          'about': [`NEET UG ${subName}`, 'NCERT Syllabus', 'Medical Entrance Preparation']
        };
        break;
      }

      case 'class': {
        const sub = route.subjectId ? SUBJECTS.find(s => s.id === route.subjectId) : null;
        const subName = sub ? sub.name : 'Subject';
        const classLabel = route.classLevel === 'class-11' ? 'Class 11' : 'Class 12';
        title = `NEET UG ${classLabel} ${subName} – Complete Chapters & Question Bank | ${this.SITE_NAME}`;
        description = `Explore all NCERT chapters, key concepts, formulas, and topic-wise solved NEET PYQs for ${classLabel} ${subName}.`;
        keywords = `NEET ${classLabel} ${subName}, NCERT ${classLabel} ${subName} NEET, ${subName} class 11 12 NEET, VG Insights`;
        canonicalUrl = `${this.BASE_URL}/#class/${route.subjectId || ''}/${route.classLevel || ''}`;
        break;
      }

      case 'classification': {
        const cls = route.classificationId ? CLASSIFICATIONS[route.classificationId] : null;
        const clsTitle = cls ? cls.title : 'Classification';
        const sub = cls ? SUBJECTS.find(s => s.id === cls.subjectId) : null;
        const subName = sub ? sub.name : 'NEET';
        title = `${clsTitle} (${subName}) – NEET UG Notes & Solved Questions | ${this.SITE_NAME}`;
        description = `High-yield notes, memory charts, and past 10-year question patterns for ${clsTitle} in NEET ${subName}.`;
        canonicalUrl = `${this.BASE_URL}/#classification/${route.classificationId || ''}`;
        break;
      }

      case 'chapter': {
        const ch = route.chapterId ? CHAPTERS[route.chapterId] : null;
        const chTitle = ch ? ch.title : 'Chapter';
        const cls = ch ? CLASSIFICATIONS[ch.classificationId] : null;
        const sub = cls ? SUBJECTS.find(s => s.id === cls.subjectId) : null;
        const subName = sub ? sub.name : 'NEET';

        title = `${chTitle} – NEET UG ${subName} Notes, Weightage & Solved PYQs | ${this.SITE_NAME}`;
        description = `Master ${chTitle} for NEET UG. Detailed NCERT concept breakdown, key formulas, memory tricks, common confusions, and past 10 years solved questions.`;
        keywords = `${chTitle} NEET, ${chTitle} notes, ${chTitle} formulas, ${chTitle} PYQs with solutions, NEET UG ${chTitle}, VG Insights`;
        canonicalUrl = `${this.BASE_URL}/#chapter/${route.chapterId || ''}`;

        const breadcrumbs = [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${this.BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: `${subName} Hub`, item: `${this.BASE_URL}/#subject/${sub?.id || ''}` },
          { '@type': 'ListItem', position: 3, name: chTitle, item: canonicalUrl }
        ];

        structuredData = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              'itemListElement': breadcrumbs
            },
            {
              '@type': 'LearningResource',
              'name': `${chTitle} – NEET UG ${subName} Study Guide`,
              'description': description,
              'learningResourceType': 'Chapter Study Guide',
              'educationalLevel': 'Higher Secondary (NEET UG)',
              'provider': {
                '@type': 'EducationalOrganization',
                'name': this.SITE_NAME,
                'url': this.BASE_URL
              },
              'about': [chTitle, `NEET ${subName}`, 'Medical Entrance Preparation']
            }
          ]
        };
        break;
      }

      case 'topic': {
        const top = route.topicId ? getTopicById(route.topicId) : null;
        const topTitle = top ? top.title : 'Topic';
        const ch = top ? getChapterForTopic(top) : null;
        const chName = ch ? ch.title : 'NEET';
        const cls = ch ? CLASSIFICATIONS[ch.classificationId] : null;
        const sub = cls ? SUBJECTS.find(s => s.id === cls.subjectId) : null;
        const subName = sub ? sub.name : (route.topicId?.startsWith('phys') ? 'Physics' : route.topicId?.startsWith('chem') ? 'Chemistry' : 'Biology');

        ogType = 'article';
        title = `${topTitle} (${chName}) – NEET UG ${subName} Formulas & PYQs | ${this.SITE_NAME}`;
        description = top?.summary
          ? `${top.summary.slice(0, 150)}... Solved questions and key formulas on ${topTitle} for NEET UG.`
          : `High-yield notes, key formulas, and verified past year questions on ${topTitle} for NEET UG preparation.`;
        keywords = `${topTitle} NEET, ${topTitle} formula, ${topTitle} questions, ${chName} ${topTitle}, NEET ${subName}, VG Insights`;
        canonicalUrl = `${this.BASE_URL}/#topic/${route.topicId || ''}`;

        const breadcrumbs = [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${this.BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: `${subName} Syllabus`, item: `${this.BASE_URL}/#subject/${sub?.id || subName.toLowerCase()}` },
          { '@type': 'ListItem', position: 3, name: chName, item: `${this.BASE_URL}/#chapter/${ch?.id || ''}` },
          { '@type': 'ListItem', position: 4, name: topTitle, item: canonicalUrl }
        ];

        structuredData = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              'itemListElement': breadcrumbs
            },
            {
              '@type': 'Article',
              'headline': `${topTitle} – NEET UG ${subName} Revision Notes, Formulas & Questions`,
              'description': description,
              'inLanguage': 'en-IN',
              'author': {
                '@type': 'Person',
                'name': 'Dr. Prajwal Kabadi, MBBS'
              },
              'publisher': {
                '@type': 'EducationalOrganization',
                'name': this.SITE_NAME,
                'url': this.BASE_URL
              },
              'mainEntityOfPage': canonicalUrl
            }
          ]
        };
        break;
      }

      case 'pyqs':
        title = `NEET UG Chapterwise PYQs (2014–2025) with Detailed NCERT Solutions | ${this.SITE_NAME}`;
        description =
          'Solve authentic NEET past year questions categorized by subject, class, and chapter with instant step-by-step NCERT verified explanations.';
        keywords = 'NEET PYQs chapterwise, NEET past year questions with solutions, NEET Physics PYQs, NEET Chemistry PYQs, NEET Biology PYQs, VG Insights';
        canonicalUrl = `${this.BASE_URL}/#pyqs`;

        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Quiz',
          'name': 'NEET UG 10+ Years Chapterwise Solved PYQ Question Bank',
          'description': description,
          'educationalLevel': 'NEET UG Aspirants',
          'provider': {
            '@type': 'EducationalOrganization',
            'name': this.SITE_NAME,
            'url': this.BASE_URL
          }
        };
        break;

      case 'weekly-mock':
      case 'weekly-mock-instructions':
        title = `Free NEET 720 Full Mock Test (NTA Pattern Simulation) | ${this.SITE_NAME}`;
        description =
          'Attempt 720-mark full syllabus NEET UG mock tests under realistic 3 hour 20 minute exam timer with negative marking (+4 / -1) and instant rank prediction.';
        keywords = 'NEET 720 mock test free, NEET mock test online, NTA NEET pattern mock test, NEET test series 2027, VG Insights';
        canonicalUrl = `${this.BASE_URL}/#weekly-mock`;

        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Quiz',
          'name': 'NEET UG 720 Full Syllabus Mock Examination',
          'description': 'Simulated full-length 720 marks test for NEET UG Physics, Chemistry, Botany, and Zoology.',
          'educationalLevel': 'NEET UG Aspirants',
          'provider': {
            '@type': 'EducationalOrganization',
            'name': this.SITE_NAME,
            'url': this.BASE_URL
          }
        };
        break;

      case 'weekly-mock-test':
      case 'weekly-mock-result':
        title = `NEET Mock Test Active Session | ${this.SITE_NAME}`;
        description = 'Active NEET mock examination session.';
        canonicalUrl = `${this.BASE_URL}/#weekly-mock`;
        isIndexable = false; // Do not index in-progress test timer states
        break;

      case 'revision':
        title = `NEET UG Formula & Quick Revision Sheets (Physics, Chemistry, Biology) | ${this.SITE_NAME}`;
        description =
          'Comprehensive high-yield formula cheat sheets, named reactions in Organic Chemistry, and NCERT tables for fast NEET UG last-minute revision.';
        keywords = 'NEET formula sheet PDF, NEET Physics formulas, NEET Chemistry named reactions, NEET Biology cheat sheets, VG Insights';
        canonicalUrl = `${this.BASE_URL}/#revision`;

        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          'name': 'NEET UG High-Yield Formula & Quick Revision Sheets',
          'description': description,
          'learningResourceType': 'Formula Cheat Sheet',
          'provider': {
            '@type': 'EducationalOrganization',
            'name': this.SITE_NAME,
            'url': this.BASE_URL
          }
        };
        break;

      case 'chapters':
        title = `Complete NEET UG 2027 Chapter Directory & Weightage Guide | ${this.SITE_NAME}`;
        description =
          'Explore all chapters across Physics, Chemistry, Botany, and Zoology with 10-year question frequency analysis and NCERT alignment.';
        keywords = 'NEET chapter weightage, NEET syllabus 2027, NEET chapterwise question distribution, VG Insights';
        canonicalUrl = `${this.BASE_URL}/#chapters`;
        break;

      case 'weakness-doctor':
      case 'weakness-practice':
        title = `AI Weakness Doctor – Diagnostic Analysis & Score Booster | ${this.SITE_NAME}`;
        description =
          'AI-powered diagnostic engine that analyzes your test attempts, identifies vulnerable NEET chapters, and builds custom remedial practice drills.';
        keywords = 'AI NEET weakness analysis, NEET score booster, NEET diagnostic test, personalized NEET practice, VG Insights';
        canonicalUrl = `${this.BASE_URL}/#weakness-doctor`;
        break;

      case 'mistake-book':
        title = `NEET Mistake Notebook – Error Tracker & Remedial Practice | ${this.SITE_NAME}`;
        description =
          'Log your incorrect answers, categorize mistake patterns (calculation error, concept gap, trap question), and re-test until mastery.';
        keywords = 'NEET mistake book, NEET error tracker, NEET wrong questions revision, VG Insights';
        canonicalUrl = `${this.BASE_URL}/#mistake-book`;
        break;

      case 'custom-test':
        title = `Custom NEET Test Builder – Practice by Subject & Difficulty | ${this.SITE_NAME}`;
        description =
          'Create tailored NEET tests by selecting specific subjects, chapters, question counts, and difficulty levels.';
        canonicalUrl = `${this.BASE_URL}/#custom-test`;
        break;

      case 'strengths-weaknesses':
        title = `NEET Chapter Strengths & Weakness Analysis | ${this.SITE_NAME}`;
        description =
          'Detailed accuracy charts and topic proficiency ratings across all NEET UG chapters.';
        canonicalUrl = `${this.BASE_URL}/#strengths-weaknesses`;
        break;

      case 'test-history':
      case 'my-progress':
      case 'bookmarked-questions':
        title = `Student Learning Profile | ${this.SITE_NAME}`;
        description = 'Personal student learning history and saved questions on VG Insights.';
        canonicalUrl = `${this.BASE_URL}/#home`;
        isIndexable = false;
        break;

      default:
        break;
    }

    // 1. Document Title
    document.title = title;

    // 2. Robots Indexation Control
    const robotsContent = isIndexable
      ? 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
      : 'noindex, follow';
    this.setMetaTag('name', 'robots', robotsContent);

    // 3. Primary Meta Tags
    this.setMetaTag('name', 'description', description);
    this.setMetaTag('name', 'keywords', keywords);
    this.setMetaTag('name', 'google-adsense-account', 'ca-pub-8902157215045513');

    // 4. OpenGraph Tags
    this.setMetaTag('property', 'og:type', ogType);
    this.setMetaTag('property', 'og:site_name', this.SITE_NAME);
    this.setMetaTag('property', 'og:title', title);
    this.setMetaTag('property', 'og:description', description);
    this.setMetaTag('property', 'og:url', canonicalUrl);
    this.setMetaTag('property', 'og:image', this.OG_IMAGE);
    this.setMetaTag('property', 'og:image:width', '1200');
    this.setMetaTag('property', 'og:image:height', '630');
    this.setMetaTag('property', 'og:image:alt', `${this.SITE_NAME} – NEET UG Preparation Platform`);
    this.setMetaTag('property', 'og:locale', 'en_IN');

    // 5. Twitter/X Cards
    this.setMetaTag('name', 'twitter:card', 'summary_large_image');
    this.setMetaTag('name', 'twitter:site', '@vginsights');
    this.setMetaTag('name', 'twitter:title', title);
    this.setMetaTag('name', 'twitter:description', description);
    this.setMetaTag('name', 'twitter:image', this.OG_IMAGE);

    // 6. Canonical Link Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 7. Inject Dynamic Schema.org JSON-LD
    this.injectDynamicSchema(structuredData);
  }

  private static setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string): void {
    let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attrName, attrValue);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  private static injectDynamicSchema(data: any): void {
    const existingDynamicScript = document.getElementById('dynamic-page-schema');
    if (existingDynamicScript) {
      existingDynamicScript.remove();
    }

    if (data) {
      const script = document.createElement('script');
      script.id = 'dynamic-page-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    }
  }
}
