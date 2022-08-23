import React from 'react';
import { loadDansesData } from '../lib/loadDansesData';
import glob from 'glob';
import { DansesProps } from '../types';

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: any) => {
  const BASE_URL = 'https://flamenco-zumba.com';
  const pagesDir = 'pages/*.tsx';
  let pagesPaths: Array<string> = glob.sync(pagesDir);
  pagesPaths = pagesPaths
    .filter((path: any) => !path.includes('/_'))
    .filter((path: any) => !path.includes('404'))
    .map((staticPagePath) => {
      console.log(staticPagePath.split('pages/')[1]);
      if (staticPagePath.split('.tsx')[0].includes('index')) {
        return `${BASE_URL}`;
      }
      return `${BASE_URL}/${
        staticPagePath.split('pages/')[1].split('.tsx')[0]
      }`;
    });

  const danses: DansesProps = await loadDansesData();
  console.log(danses);
  let dynamicPaths = [];
  for (const danse of danses.allDanses) {
    dynamicPaths.push(`${BASE_URL}/danses/${danse.slug}`);
  }
  const allPaths = [...pagesPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
