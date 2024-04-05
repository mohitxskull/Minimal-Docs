import { SimpleGrid, Stack } from '@mantine/core';
import { useMemo } from 'react';
import { z } from 'zod';
import { MDXErrorBlock } from './error-block';

interface MDXSideBySideProps {
  children: React.ReactNode;
}

const MDXSideBySideChildrenZod = z
  .array(
    z.object({
      type: z.literal('div'),
      props: z.object({
        children: z.any(),
      }),
    })
  )
  .min(2)
  .max(2);

export const MDXSideBySide = (props: MDXSideBySideProps) => {
  const parsedChildren = useMemo(() => {
    return MDXSideBySideChildrenZod.safeParse(props.children);
  }, [props.children]);

  if (!parsedChildren.success) {
    return (
      <MDXErrorBlock
        error={{
          component: 'MDXSideBySide',
          message: 'Invalid side-by-side block',
          error: parsedChildren.error,
        }}
      />
    );
  }

  return (
    <>
      <SimpleGrid
        cols={{
          base: 1,
          md: 2,
        }}
        spacing="xl"
      >
        <Stack justify="center">{parsedChildren.data[0].props.children}</Stack>
        <Stack justify="center">{parsedChildren.data[1].props.children}</Stack>
      </SimpleGrid>
    </>
  );
};
