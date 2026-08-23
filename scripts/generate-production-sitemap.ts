import fs from 'fs';
import path from 'path';
import { SUBJECTS, CLASSIFICATIONS, CHAPTERS, TOPICS } from '../src/data/neetData';

const BASE_URL = 'https://vginsights.in';
const TODAY = new Date().toISOString().split('T')[0];

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

const urls: SitemapUrl[] = [];

// 1. Core Hubs & Public Learning Portals
urls.push(
  { loc: `${BASE_URL}/`, lastmod: TODAY, changefreq: 'daily', priority: '1.00' },
  { loc: `${BASE_URL}/#home`, lastmod: TODAY, changefreq: 'daily', priority: '0.95' },
  { loc: `${BASE_URL}/#start-here`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${BASE_URL}/#pyqs`, lastmod: TODAY, changefreq: 'daily', priority: '0.95' },
  { loc: `${BASE_URL}/#revision`, lastmod: TODAY, changefreq: 'weekly', priority: '0.95' },
  { loc: `${BASE_URL}/#weekly-mock`, lastmod: TODAY, changefreq: 'daily', priority: '0.95' },
  { loc: `${BASE_URL}/#chapters`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${BASE_URL}/#weakness-doctor`, lastmod: TODAY, changefreq: 'daily', priority: '0.90' },
  { loc: `${BASE_URL}/#mistake-book`, lastmod: TODAY, changefreq: 'daily', priority: '0.85' },
  { loc: `${BASE_URL}/#custom-test`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${BASE_URL}/#strengths-weaknesses`, lastmod: TODAY, changefreq: 'weekly', priority: '0.80' }
);

// 2. Subject Hubs
SUBJECTS.forEach(sub => {
  urls.push({
    loc: `${BASE_URL}/#subject/${sub.id}`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.90'
  });

  // Class Hubs
  urls.push(
    { loc: `${BASE_URL}/#class/${sub.id}/class-11`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
    { loc: `${BASE_URL}/#class/${sub.id}/class-12`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' }
  );
});

// 3. Classification Hubs
Object.keys(CLASSIFICATIONS).forEach(clsId => {
  urls.push({
    loc: `${BASE_URL}/#classification/${clsId}`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.80'
  });
});

// 4. Chapter Pages
Object.keys(CHAPTERS).forEach(chId => {
  urls.push({
    loc: `${BASE_URL}/#chapter/${chId}`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.85'
  });
});

// 5. Topic Pages (Direct Educational Concepts)
Object.keys(TOPICS).forEach(topId => {
  urls.push({
    loc: `${BASE_URL}/#topic/${topId}`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.80'
  });
});

// Generate XML content
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemapXml, 'utf-8');

console.log(`✅ Generated production sitemap.xml with ${urls.length} indexable URLs at ${outputPath}`);
