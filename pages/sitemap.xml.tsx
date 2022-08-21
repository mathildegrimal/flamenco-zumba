import React from 'react';
import * as fs from 'fs';
import { loadDansesData } from '../lib/loadDansesData';

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: any) => {
  const BASE_URL = 'www.flamenco-zumba.com';

  const staticPaths = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return ![
        'api',
        'danses',
        '_app.tsx',
        '404.js',
        'sitemap.xml.tsx',
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      if (staticPagePath.split('.tsx')[0].includes('index')) {
        return `${BASE_URL}`;
      }
      return `${BASE_URL}/${staticPagePath.split('.tsx')[0]}`;
    });

  const danses = await loadDansesData();
  console.log(danses);
  let dynamicPaths = [];
  for (const danse of danses.allDanses) {
    dynamicPaths.push(`${BASE_URL}/danses/${danse.slug}`);
  }
  console.log(dynamicPaths);
  const allPaths = [...staticPaths, ...dynamicPaths];

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
