import dynamic from 'next/dynamic';
import { CenterLoading } from './components/indie/center-loading';

import type { MDXComponents } from 'mdx/types';
import { Alert, Skeleton } from '@mantine/core';

import { MDXHeading2Native } from './components/mdx/heading-2-native';
import { MDXHeading3Native } from './components/mdx/heading-3-native';

const MDXImageNative = dynamic(
  () =>
    import('./components/mdx/image-native').then((mod) => mod.MDXImageNative),
  {
    ssr: false,
  }
);

const MDXDividerNative = dynamic(
  () =>
    import('./components/mdx/divider-native').then(
      (mod) => mod.MDXDividerNative
    ),
  {
    ssr: false,
  }
);

const MDXCodeNative = dynamic(
  () => import('./components/mdx/code-native').then((mod) => mod.MDXCodeNative),
  {
    ssr: false,
  }
);

const MDXAnchorNative = dynamic(
  () =>
    import('./components/mdx/anchor-native').then((mod) => mod.MDXAnchorNative),
  {
    ssr: false,
  }
);

const MDXComparison = dynamic(
  () => import('./components/mdx/comparison').then((mod) => mod.MDXComparison),
  {
    ssr: false,
    loading: () => <CenterLoading height="100px" />,
  }
);

const MDXCollapse = dynamic(
  () => import('./components/mdx/collapse').then((mod) => mod.MDXCollapse),
  {
    ssr: false,
    loading: () => <CenterLoading height="100px" />,
  }
);

const MDXChessBoard = dynamic(
  () => import('./components/mdx/chess-board').then((mod) => mod.MDXChessBoard),
  {
    ssr: false,
    loading: () => <CenterLoading height="100px" />,
  }
);

const AreaChart = dynamic(
  () => import('@mantine/charts').then((mod) => mod.AreaChart),
  {
    ssr: false,
    loading: () => <CenterLoading height="100px" />,
  }
);

const MDXCode = dynamic(
  () => import('./components/mdx/code').then((mod) => mod.MDXCode),
  {
    ssr: false,
    loading: () => <Skeleton height="100px" />,
  }
);

const MDXCodeMultiple = dynamic(
  () =>
    import('./components/mdx/code-multiple').then((mod) => mod.MDXCodeMultiple),
  {
    ssr: false,
    loading: () => <Skeleton height="100px" />,
  }
);

const MDXMermaid = dynamic(
  () => import('./components/mdx/mermaid').then((mod) => mod.MDXMermaid),
  {
    ssr: false,
    loading: () => <Skeleton height="100px" />,
  }
);

const MDXMermaidMultiple = dynamic(
  () =>
    import('./components/mdx/mermaid-multiple').then(
      (mod) => mod.MDXMermaidMultiple
    ),
  {
    ssr: false,
    loading: () => <Skeleton height="100px" />,
  }
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Native components

    h2: MDXHeading2Native,
    h3: MDXHeading3Native,

    code: MDXCodeNative,

    a: MDXAnchorNative,

    hr: MDXDividerNative,

    img: MDXImageNative,

    // Custom components

    Comparison: MDXComparison,

    Code: MDXCode,
    CodeM: MDXCodeMultiple,

    Cola: MDXCollapse,

    ChessBoard: MDXChessBoard,

    Mer: MDXMermaid,
    MerM: MDXMermaidMultiple,

    // Mantine components

    AreaChart: AreaChart,

    Alert: Alert,

    ...components,
  };
}
