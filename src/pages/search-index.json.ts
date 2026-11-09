// Build-time search index for the header search (served as /search-index.json).
// Books come from the content collection; page text is pulled from the page
// sources themselves, so the index stays in sync with the site's content.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { comicExtras } from '../data/comicMoments';

export type SearchEntry = {
  type: 'page' | 'book' | 'publication' | 'talk';
  title: string;
  url: string;
  subtitle?: string;
  meta?: string; // small label (category, year...)
  image?: string;
  text: string; // searchable haystack (not displayed)
};

const sources = import.meta.glob(
  ['./*.astro', './*.md', '../components/Skills.tsx'],
  { query: '?raw', import: 'default', eager: true },
) as Record<string, string>;

const src = (file: string) => sources[file] ?? '';

/** Strip an .astro/.md/.tsx source down to readable text. */
function toText(raw: string): string {
  let t = raw
    .replace(/^---[\s\S]*?\n---/, ' ') // frontmatter / component script
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ');
  // drop JSX expressions, innermost first, so nested {...} disappear too
  for (let prev = ''; prev !== t; ) {
    prev = t;
    t = t.replace(/\{[^{}]*\}/g, ' ');
  }
  return t
    .replace(/<[^>]+>/g, ' ')
    .replace(/[{}()]|=>/g, ' ')
    .replace(/&mdash;|&ndash;/g, ' – ')
    .replace(/&amp;/g, '&')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/[#*_`>|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** All quoted string values in a script/frontmatter (titles, descriptions, skills...). */
function strings(raw: string): string {
  const out: string[] = [];
  for (const m of raw.matchAll(/(?:"([^"\n]{3,})"|'([^'\n]{3,})'|`([^`]{3,})`)/g)) {
    const s = m[1] ?? m[2] ?? m[3] ?? '';
    if (/^(tabler|simple-icons):|^\.\.?\/|^https?:|\bclass(Name)?\b|^[\w-]+(\s[\w:/\[\]().%-]+){2,}$/.test(s)) continue;
    out.push(s);
  }
  return out.join(' ');
}

const pageText = (file: string) => {
  const raw = src(file);
  const fm = raw.match(/^---([\s\S]*?)\n---/)?.[1] ?? '';
  return `${toText(raw)} ${strings(fm)}`.replace(/\s+/g, ' ').trim();
};

/** Pull `{ title: "...", ... }` records out of a page's frontmatter array. */
function records(raw: string, fields: string[]) {
  const fm = raw.match(/^---([\s\S]*?)\n---/)?.[1] ?? '';
  return fm
    .split(/\n\s*\{\s*\n/)
    .slice(1)
    .map((block) => {
      const rec: Record<string, string> = {};
      for (const f of fields) {
        const m = block.match(new RegExp(`\\b${f}:\\s*(?:"([^"]*)"|\`([^\`]*)\`)`));
        if (m) rec[f] = (m[1] ?? m[2] ?? '').replace(/\$[^$]*\$/g, ' ');
      }
      return rec;
    })
    .filter((r) => r.title);
}

const pages: { file: string; title: string; url: string; subtitle: string; extra?: string }[] = [
  { file: './index.astro', title: 'Home', url: '/', subtitle: 'About me, research interests and education' },
  { file: './skills.astro', title: 'Skills', url: '/skills', subtitle: 'Research, programming, data and languages', extra: '../components/Skills.tsx' },
  { file: './talks.astro', title: 'Talks', url: '/talks', subtitle: 'Talks and poster sessions' },
  { file: './publications.astro', title: 'Publications', url: '/publications', subtitle: 'Journal articles and conference posters' },
  { file: './books.astro', title: 'Books & Reads', url: '/books', subtitle: 'Physics, philosophy, fiction and comics' },
  { file: './vitae.astro', title: 'CV', url: '/vitae', subtitle: 'Curriculum vitae: experience and education' },
  { file: './research.astro', title: 'Research', url: '/research', subtitle: 'Upward-going muons, machine learning, detector calibration' },
  { file: './hkpaper.astro', title: 'Hyper-Kamiokande paper (PDF)', url: '/hkpaper', subtitle: 'Sensitivity of Hyper-K to oscillation parameters' },
  { file: './hkposter.astro', title: 'Hyper-K calibration poster (PDF)', url: '/hkposter', subtitle: 'Energy scale cross-calibration with a DT neutron generator' },
  { file: './post-2.md', title: "CERN's Future Circular Collider", url: '/post-2', subtitle: 'Article: the next frontier in particle physics' },
  { file: './post-1.md', title: 'Hyper-K sensitivity', url: '/post-1', subtitle: 'Article: Hyper-K long-baseline sensitivity' },
  { file: './resources.md', title: 'Resources', url: '/resources', subtitle: 'Useful educative and entertaining resources' },
];

export const GET: APIRoute = async () => {
  const entries: SearchEntry[] = [];

  for (const p of pages) {
    entries.push({
      type: 'page',
      title: p.title,
      url: p.url,
      subtitle: p.subtitle,
      text: `${pageText(p.file)} ${p.extra ? strings(src(p.extra)) : ''}`.slice(0, 6000),
    });
  }

  for (const r of records(src('./publications.astro'), ['type', 'title', 'authors', 'journal', 'year', 'abstract'])) {
    entries.push({
      type: 'publication',
      title: r.title,
      url: '/publications',
      subtitle: [r.authors, r.journal].filter(Boolean).join(' · '),
      meta: [r.type, r.year].filter(Boolean).join(' · '),
      text: Object.values(r).join(' '),
    });
  }

  for (const r of records(src('./talks.astro'), ['title', 'event', 'location', 'date', 'description'])) {
    entries.push({
      type: 'talk',
      title: `${r.title}: ${r.event ?? ''}`.replace(/:\s*$/, ''),
      url: '/talks',
      subtitle: r.description,
      meta: [r.location, r.date].filter(Boolean).join(' · '),
      text: Object.values(r).join(' '),
    });
  }

  const books = await getCollection('books');
  const label: Record<string, string> = { physics: 'Physics', philosophy: 'Philosophy', fiction: 'Fiction', comics: 'Comics' };
  // manga share the "comics" category; tag them so "manga" finds only manga
  const manga = new Set(['berserk', 'hunter-x-hunter', 'jjk', 'kagurabachi', 'naruto', 'onepiece', 'vagabond']);
  for (const b of books) {
    const d = b.data;
    const moments = comicExtras[b.id]?.moments.map((m) => m.title).join(' ') ?? '';
    entries.push({
      type: 'book',
      title: d.title,
      url: `/books/${b.id}/`,
      subtitle: d.author,
      meta: [label[d.category], d.year].filter(Boolean).join(' · '),
      image: d.cover,
      text: [d.title, d.author, d.category, label[d.category], d.category === 'comics' ? (manga.has(b.id) ? 'manga japanese comic' : 'comic book graphic novel') : '', d.publisher, d.year, d.description, moments]
        .filter(Boolean)
        .join(' '),
    });
  }

  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
