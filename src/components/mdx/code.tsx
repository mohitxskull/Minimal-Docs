import { useMemo } from 'react';
import { z } from 'zod';
import { MDXErrorBlock } from './error-block';
import { CodeHighlight } from '@mantine/code-highlight';

interface MDXCodeProps {
  children: React.ReactNode;
}

export const MDXCodeChildrenZod = z.object({
  type: z.literal('pre'),
  props: z.object({
    children: z.object({
      props: z.object({
        className: z
          .string()
          .startsWith('language-')
          .transform((className, ctx) => {
            const lang = className.replace('language-', '');

            if (lang.length === 0) {
              ctx.addIssue({
                code: 'custom',
                message: 'Invalid language',
                path: ['className'],
                params: { lang: className },
              });
            }

            return lang;
          }),
        children: z.string(),
      }),
    }),
  }),
});

export const MDXCode = (props: MDXCodeProps) => {
  const parsedChildren = useMemo(() => {
    return MDXCodeChildrenZod.safeParse(props.children);
  }, [props.children]);

  if (!parsedChildren.success) {
    return (
      <MDXErrorBlock
        error={{
          component: 'MDXCode',
          message: 'Invalid code block',
          error: parsedChildren.error,
        }}
      />
    );
  }

  return (
    <>
      <CodeHighlight
        highlightOnClient
        style={{
          borderRadius: 'var(--mantine-radius-md)',
        }}
        language={parsedChildren.data.props.children.props.className}
        code={parsedChildren.data.props.children.props.children}
      />
    </>
  );
};
