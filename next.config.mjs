import createMDX from '@next/mdx';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * Uncomment for static export
   *
   * Visit https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   *
   * Before uncommenting, ensure that you have read the documentation
   *
   * There are limitations to static export, such as no server-side rendering
   */
  // output: 'export',

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [rehypeKatex],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
