import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    tailwind(),
    react({
      // Add this to ensure React components work properly in MDX
      include: ['**/*.tsx', '**/*.jsx'],
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-dark' },
      remarkPlugins: [],
      rehypePlugins: [],
      remarkRehype: {},
      gfm: true,
      jsxImportSource: 'react',
    })
  ],
});