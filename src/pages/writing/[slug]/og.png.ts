import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { profile } from '../../../data/profile.js';
import { getPublishedPosts } from '../../../lib/posts.js';

const WIDTH = 1200;
const HEIGHT = 630;

const font = (weight) =>
  readFileSync(
    join(process.cwd(), `node_modules/@fontsource/inter-tight/files/inter-tight-latin-${weight}-normal.woff`),
  );

const fonts = [
  { name: 'Inter Tight', data: font(400), weight: 400, style: 'normal' },
  { name: 'Inter Tight', data: font(800), weight: 800, style: 'normal' },
];

const el = (type, style, children) => ({ type, props: { style, children } });

export async function getStaticPaths() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export async function GET({ props: { post } }) {
  const { title } = post.data;
  const svg = await satori(
    el(
      'div',
      {
        width: WIDTH,
        height: HEIGHT,
        display: 'flex',
        position: 'relative',
        background: '#ffffff',
        color: '#0b0b0c',
        fontFamily: 'Inter Tight',
      },
      [
        el(
          'div',
          {
            position: 'absolute',
            top: 64,
            left: 72,
            right: 72,
            bottom: 72,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
          [
            el('div', { fontSize: 28, color: '#1f3fe0' }, 'Writing'),
            el(
              'div',
              {
                fontSize: title.length > 50 ? 68 : 84,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              },
              title,
            ),
            el('div', { fontSize: 30, color: '#3a3d42' }, `${profile.name} · ${profile.domain}`),
          ],
        ),
        el('div', { position: 'absolute', left: 0, bottom: 0, width: WIDTH, height: 24, background: '#1f3fe0' }, ''),
      ],
    ),
    { width: WIDTH, height: HEIGHT, fonts },
  );

  return new Response(new Resvg(svg).render().asPng(), {
    headers: { 'Content-Type': 'image/png' },
  });
}
