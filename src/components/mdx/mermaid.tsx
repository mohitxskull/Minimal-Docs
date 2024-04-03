import { z } from 'zod';
import { MDXErrorBlock } from './error-block';
import { Mermaid } from '../indie/mermaid';
import { useMemo } from 'react';

interface MDXMermaidProps {
  children: React.ReactNode;
}

export const MDXMermaidChildrenZod = z.object({
  type: z.literal('pre'),
  props: z.object({
    children: z.object({
      props: z.object({
        className: z.literal('language-mermaid'),
        children: z.string(),
      }),
    }),
  }),
});

export const MDXMermaid = (props: MDXMermaidProps) => {
  const parsedChildren = useMemo(() => {
    return MDXMermaidChildrenZod.safeParse(props.children);
  }, [props.children]);

  if (!parsedChildren.success) {
    console.log('MDXMermaid', props.children);

    return (
      <MDXErrorBlock
        error={{
          message: 'Invalid mermaid block',
          error: parsedChildren.error,
        }}
      />
    );
  }

  return (
    <>
      <Mermaid chart={parsedChildren.data.props.children.props.children} />
    </>
  );
};
