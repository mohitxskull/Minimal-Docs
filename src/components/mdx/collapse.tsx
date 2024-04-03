import { ReactNode } from 'react';
import { MDXErrorBlock } from './error-block';
import { Accordion, Stack } from '@mantine/core';

interface MDXCollapseProps {
  children: ReactNode;
  title: string;
}

export const MDXCollapse = (props: MDXCollapseProps) => {
  if (!props.title) {
    return (
      <MDXErrorBlock
        error={{
          message: 'Title is missing',
          component: 'Cola',
        }}
      />
    );
  }

  return (
    <>
      <Accordion variant="contained">
        <Accordion.Item value={props.title} key={props.title}>
          <Accordion.Control>{props.title}</Accordion.Control>
          <Accordion.Panel px="xl" py="xs">
            <Stack>{props.children}</Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
