import { Children, useMemo } from 'react';
import { z } from 'zod';
import { MDXErrorBlock } from './error-block';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { MDXCodeChildrenZod } from './code';

interface MDXCodeMultipleProps {
  children: React.ReactNode;
  fileNames: string[];
  exp?: boolean; // expandable
}

export const MDXCodeMultipleChildrenZod = z.array(MDXCodeChildrenZod).min(1);

export const MDXCodeMultiple = (props: MDXCodeMultipleProps) => {
  const parsedChildren = useMemo(() => {
    return MDXCodeMultipleChildrenZod.safeParse(
      Children.toArray(props.children)
    );
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

  if (parsedChildren.data.length !== props.fileNames.length) {
    return (
      <MDXErrorBlock
        error={{
          component: 'MDXCode',
          message: 'File name length does not match children length',
        }}
      />
    );
  }

  return (
    <>
      <CodeHighlightTabs
        {...(props.exp && {
          withExpandButton: true,
          defaultExpanded: false,
          expandCodeLabel: 'Show full code',
          collapseCodeLabel: 'Show less',
        })}
        style={{
          borderRadius: 'var(--mantine-radius-md)',
        }}
        code={parsedChildren.data.map((item, index) => {
          return {
            fileName: `${props.fileNames[index]}.${item.props.children.props.className}`,
            code: item.props.children.props.children,
            language: item.props.children.props.className,
          };
        })}
      />
    </>
  );
};
