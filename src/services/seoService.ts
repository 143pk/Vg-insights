import { RouteState } from './routerService';
import { CHAPTERS, TOPICS, SUBJECTS } from '../data/neetData';
import { TOPIC_DETAILS } from '../data/topicDetails';

export class SEOService {
  private static readonly BASE_URL = 'https://vginsights.in';
  private static readonly SITE_NAME = 'VG Insights';

  /**
   * Updates all document meta tags, title, OpenGraph tags, and Schema.org JSON-LD
   * based on the active route state.
   */
  public static updateMetaForRoute(route: RouteState): void {
    let title = `${this.SITE_NAME} – NEET UG 2027 Preparation, Chapterwise PYQs & 720 Mock Tests`;
    let description =
      'Master NEET UG 2027 with VG Insights, founded by Dr. Prajwal Kabadi (MBBS) and Mr. Amit Bangare. Access 10+ years chapterwise PYQs, weekly 720 mock tests, and AI weakness diagnosis.';
    let keywords =
      'NEET UG 2027, Dr. Prajwal Kabadi, Prajwal Kabadi MBBS, Amit Bangare, VG Insights, NEET 2027 preparation, NEET PYQs chapterwise, NEET Physics formula sheet, NEET Biology NCERT questions, NEET mock test 720, AI weakness doctor NEET';
    let canonicalUrl = `${this.BASE_URL}/`;
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
        title = `Student Dashboard – NEET UG Practice & Progress | ${this.SITE_NAME}`;
        description =
          'Track your daily NEET UG study streak, active syllabus completion, high-yield chapter accuracy, and diagnostic test readiness.';
        canonicalUrl = `${this.BASE_URL}/#home`;
        break;

      case 'subject': {
        const sub = route.subjectId ? SUBJECTS[route.subjectId] : null;
        const subTitle = sub ? sub.title : 'Subject Hub';
        title = `NEET UG ${subTitle} 2027 – Chapterwise Notes, PYQs & Formulas | ${this.SITE_NAME}`;
        description = `Comprehensive NCERT-based syllabus, high-yield weightage chapters, formula sheets, and past year questions for NEET UG ${subTitle}.`;
        keywords = `NEET ${subTitle}, NEET UG ${subTitle} notes, ${subTitle} PYQs NEET, ${subTitle} formula sheet, VG Insights`;
        canonicalUrl = `${this.BASE_URL}/#subject/${route.subjectId || ''}`;
        break;
      }

      case 'chapter': {
        const ch = route.chapterId ? CHAPTERS[route.chapterId] : null;
        const chTitle = ch ? ch.title : 'Chapter';
        title = `${chTitle} – NEET UG Notes, Weightage & Solved PYQs | ${this.SITE_NAME}`;
        description = `Master ${chTitle} for NEET UG. Detailed NCERT concept breakdown, key formulas, memory tricks, common confusions, and past 10 years solved questions.`;
        keywords = `${chTitle} NEET, ${chTitle} notes, ${chTitle} formulas, ${chTitle} PYQs with solutions, NEET UG ${chTitle}, VG Insights`;
        canonicalUrl = `${this.BASE_URL}/#chapter/${route.chapterId || ''}`;

        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          'name': `${chTitle} for NEET UG`,
          'description': description,
          'learningResourceType': 'Study Guide',
          'educationalLevel': 'Higher Secondary (NEET UG)',
          'provider': {
            '@type': 'EducationalOrganization',
            'name': this.SITE_NAME,
            'url': this.BASE_URL
          },
          'about': [chTitle, 'NEET UG', 'Medical Entrance Preparation']
        };
        break;
      }

      case 'topic': {
        const top = route.topicId ? TOPICS[route.topicId] : null;
        const topTitle = top ? top.title : 'Topic';
        const ch = top && top.chapterId ? CHAPTERS[top.chapterId] : null;
        const chName = ch ? ch.title : 'NEET';
        title = `${topTitle} (${chName}) – Formulas, Notes & NEET PYQs | ${this.SITE_NAME}`;
        description = top?.summary
          ? `${top.summary.slice(0, 150)}... Solved questions and key formulas on ${topTitle} for NEET.`
          : `High-yield notes, key formulas, and verified past year questions on ${topTitle} for NEET UG preparation.`;
        keywords = `${topTitle} NEET, ${topTitle} formula, ${topTitle} questions, ${chName} ${topTitle}, VG Insights`;
        canonicalUrl = `${this.BASE_URL}/#topic/${route.topicId || ''}`;

        // Passage Indexing Enhancement: Extract specific formula entities for Schema FAQ & Graph
        const topicDetail = route.topicId ? (TOPIC_DETAILS[route.topicId] || (TOPIC_DETAILS as any)[`phys-${route.topicId}`] || (TOPIC_DETAILS as any)[`chem-${route.topicId}`] || (TOPIC_DETAILS as any)[`bio-${route.topicId}`]) : null;
        const formulaeList = (topicDetail?.formulae || []).slice(0, 4);

        const passageFaqs = formulaeList.map((f: any) => {
          const fTitle = typeof f === 'string' ? 'Key Formula' : (f.title || f.formulaName || 'Formula');
          const fExp = typeof f === 'string' ? f : (f.formula || f.expression || '');
          const fMeaning = typeof f === 'string' ? '' : (f.meaning || f.explanation || f.description || '');
          return {
            '@type': 'Question',
            'name': `What is the formula and meaning for ${fTitle} in ${topTitle}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `Formula: ${fExp}. ${fMeaning ? `Definition: ${fMeaning}.` : ''} Essential for NEET UG ${chName} preparation on VG Insights.`
            }
          };
        });

        structuredData = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              'headline': `${topTitle} – High-Yield NEET UG Revision Notes & Formulas`,
              'description': description,
              'author': {
                '@type': 'Person',
                'name': 'Dr. Prajwal Kabadi, MBBS',
                'jobTitle': 'Founder & Chief Academic Mentor'
              },
              'publisher': {
                '@type': 'EducationalOrganization',
                'name': this.SITE_NAME,
                'url': this.BASE_URL
              },
              'mainEntityOfPage': canonicalUrl
            },
            ...(passageFaqs.length > 0 ? [{
              '@type': 'FAQPage',
              'mainEntity': passageFaqs
            }] : [])
          ]
        };
        break;
      }

      case 'pyqs':
        title = `NEET UG Chapterwise PYQs (2014-2025) with Detailed Solutions | ${this.SITE_NAME}`;
        description =
          'Solve authentic NEET past year questions categorized by subject, class, and chapter with instant step-by-step NCERT verified explanations.';
        keywords = 'NEET PYQs chapterwise, NEET past year questions with solutions, NEET Physics PYQs, NEET Chemistry PYQs, NEET Biology PYQs, VG Insights';
        canonicalUrl = `${this.BASE_URL}/#pyqs`;
        break;

      case 'weekly-mock':
      case 'weekly-mock-instructions':
      case 'weekly-mock-test':
        title = `Free NEET 720 Full Mock Test (NTA Pattern Simulation) | ${this.SITE_NAME}`;
        description =
          'Attempt 720-mark full syllabus NEET UG mock tests under realistic 3 hour 20 minute exam timer with negative marking (+4 / -1) and instant rank prediction.';
        keywords = 'NEET 720 mock test free, NEET mock test online, NTA NEET pattern mock test, NEET test series 2027, VG Insights';
        canonicalUrl = `${this.BASE_URL}/#weekly-mock`;

        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Quiz',
          'name': 'NEET UG 720 Full Syllabus Mock Test',
          'description': 'Simulated full-length 720 marks test for NEET UG Physics, Chemistry, Botany, and Zoology.',
          'educationalLevel': 'NEET UG Aspirants',
          'provider': {
            '@type': 'EducationalOrganization',
            'name': this.SITE_NAME,
            'url': this.BASE_URL
          }
        };
        break;

      case 'revision':
        title = `NEET UG Formula & Quick Revision Sheets (All Subjects) | ${this.SITE_NAME}`;
        description =
          'Comprehensive high-yield formula cheat sheets, named reactions in Organic Chemistry, and NCERT tables for fast NEET UG last-minute revision.';
        keywords = 'NEET formula sheet PDF, NEET Physics formulas, NEET Chemistry named reactions, NEET Biology cheat sheets, VG Insights';
        canonicalUrl = `${this.BASE_URL}/#revision`;
        break;

      case 'weakness-doctor':
      case 'weakness-practice':
        title = `AI Weakness Doctor – Personalized NEET Score Booster | ${this.SITE_NAME}`;
        description =
          'AI-powered diagnostic engine that analyzes your test attempts, identifies vulnerable NEET chapters, and builds custom remedial practice drills.';
        keywords = 'AI NEET weakness analysis, NEET score booster, NEET diagnostic test, personalized NEET practice, VG Insights';
        canonicalUrl = `${this.BASE_URL}/#weakness-doctor`;
        break;

      case 'mistake-book':
        title = `NEET Mistake Notebook – Error Tracker & Re-Test Drills | ${this.SITE_NAME}`;
        description =
          'Log your incorrect answers, categorize mistake patterns (calculation error, concept gap, trap question), and re-test until mastery.';
        keywords = 'NEET mistake book, NEET error tracker, NEET wrong questions revision, VG Insights';
        canonicalUrl = `${this.BASE_URL}/#mistake-book`;
        break;

      case 'chapters':
        title = `NEET UG 2027 Complete Chapter Directory & Weightage Guide | ${this.SITE_NAME}`;
        description =
          'Explore all 97 chapters across Physics, Chemistry, Botany, and Zoology with 10-year question frequency analysis and NCERT alignment.';
        keywords = 'NEET chapter weightage, NEET syllabus 2027, NEET chapterwise question distribution, VG Insights';
        canonicalUrl = `${this.BASE_URL}/#chapters`;
        break;

      default:
        break;
    }

    // 1. Update Document Title
    document.title = title;

    // 2. Helper to set/update <meta> tags
    this.setMetaTag('name', 'google-adsense-account', 'ca-pub-8902157215045513');
    this.setMetaTag('name', 'description', description);
    this.setMetaTag('name', 'keywords', keywords);
    this.setMetaTag('property', 'og:title', title);
    this.setMetaTag('property', 'og:description', description);
    this.setMetaTag('property', 'og:url', canonicalUrl);
    this.setMetaTag('name', 'twitter:title', title);
    this.setMetaTag('name', 'twitter:description', description);

    // 3. Update Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 4. Inject Dynamic Schema.org JSON-LD
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
