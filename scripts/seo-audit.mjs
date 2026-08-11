#!/usr/bin/env node
/**
 * Post-build SEO audit: unique titles/descriptions, one H1, schema presence.
 * Usage: node scripts/seo-audit.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = join(process.cwd(), 'dist');

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name === 'index.html') out.push(full);
  }
  return out;
}

function pathFromFile(file) {
  const rel = relative(dist, file).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  return '/' + rel.replace(/\/index\.html$/, '');
}

function extract(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

function count(html, re) {
  return (html.match(re) || []).length;
}

const pages = walk(dist).map((file) => {
  const html = readFileSync(file, 'utf8');
  const schemas = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(
    (m) => {
      try {
        const data = JSON.parse(m[1]);
        return data['@type'];
      } catch {
        return 'INVALID';
      }
    },
  );

  return {
    path: pathFromFile(file),
    title: extract(html, /<title>([^<]*)<\/title>/i),
    description: extract(html, /<meta name="description" content="([^"]*)"/i),
    canonical: extract(html, /<link rel="canonical" href="([^"]*)"/i),
    h1Count: count(html, /<h1[\s>]/gi),
    robots: extract(html, /<meta name="robots" content="([^"]*)"/i),
    schemas: schemas.flatMap((t) => (Array.isArray(t) ? t : [t])).filter(Boolean),
  };
});

const errors = [];
const warnings = [];
const titles = new Map();
const descriptions = new Map();

for (const page of pages) {
  if (!page.title) errors.push(`${page.path}: missing title`);
  else if (page.title.length > 60) warnings.push(`${page.path}: title ${page.title.length} chars (>60)`);

  if (!page.description) errors.push(`${page.path}: missing description`);
  else {
    const len = page.description.length;
    if (len < 140 || len > 160) {
      warnings.push(`${page.path}: description ${len} chars (want 140-160)`);
    }
  }

  if (page.h1Count !== 1) errors.push(`${page.path}: expected 1 H1, found ${page.h1Count}`);
  if (!page.canonical) errors.push(`${page.path}: missing canonical`);

  if (page.title) {
    if (titles.has(page.title)) errors.push(`${page.path}: duplicate title with ${titles.get(page.title)}`);
    else titles.set(page.title, page.path);
  }
  if (page.description) {
    if (descriptions.has(page.description)) {
      errors.push(`${page.path}: duplicate description with ${descriptions.get(page.description)}`);
    } else descriptions.set(page.description, page.path);
  }

  if (!page.schemas.includes('HousePainter') && !page.schemas.includes('LocalBusiness')) {
    errors.push(`${page.path}: missing sitewide HousePainter/LocalBusiness schema`);
  }

  if (page.path === '/thank-you' && !(page.robots || '').includes('noindex')) {
    errors.push(`${page.path}: expected noindex`);
  }

  if (page.path.startsWith('/services/') && page.path !== '/services') {
    if (!page.schemas.includes('Service')) errors.push(`${page.path}: missing Service schema`);
    if (!page.schemas.includes('FAQPage')) errors.push(`${page.path}: missing FAQPage schema`);
  }

  if (
    [
      '/winnetka',
      '/wilmette',
      '/kenilworth',
      '/glencoe',
      '/northfield',
      '/lake-forest',
      '/highland-park',
      '/northbrook',
      '/glenview',
      '/hinsdale',
      '/oak-brook',
    ].includes(page.path)
  ) {
    if (!page.schemas.includes('FAQPage')) errors.push(`${page.path}: missing FAQPage schema`);
  }

  if (page.path.startsWith('/blog/') && page.path !== '/blog') {
    if (!page.schemas.includes('Article')) errors.push(`${page.path}: missing Article schema`);
  }

  if (page.path.startsWith('/projects/') && page.path !== '/projects') {
    if (!page.schemas.includes('ImageGallery')) {
      errors.push(`${page.path}: missing ImageGallery schema`);
    }
    if (!page.schemas.includes('BreadcrumbList')) {
      errors.push(`${page.path}: missing BreadcrumbList schema`);
    }
  }

  if (page.path === '/pricing' && !page.schemas.includes('FAQPage')) {
    errors.push(`${page.path}: missing FAQPage schema`);
  }

  // PENDING trust claims must not appear as aggregateRating
  const html = readFileSync(join(dist, page.path === '/' ? 'index.html' : `${page.path.slice(1)}/index.html`), 'utf8');
  if (html.includes('"aggregateRating"') && html.includes('PENDING')) {
    errors.push(`${page.path}: aggregateRating present while PENDING`);
  }
}

const sitemapIndex = readFileSync(join(dist, 'sitemap-index.xml'), 'utf8');
const sitemap0 = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8');
if (sitemap0.includes('/thank-you')) {
  errors.push('sitemap includes /thank-you (should be filtered)');
}
if (!sitemapIndex.includes('sitemap-0.xml')) {
  warnings.push('sitemap-index.xml missing sitemap-0 reference');
}

console.log(`Audited ${pages.length} pages`);
if (warnings.length) {
  console.log('\nWarnings:');
  for (const w of warnings) console.log(`  - ${w}`);
}
if (errors.length) {
  console.log('\nErrors:');
  for (const e of errors) console.log(`  - ${e}`);
  process.exit(1);
}

console.log('\nSEO audit passed');
