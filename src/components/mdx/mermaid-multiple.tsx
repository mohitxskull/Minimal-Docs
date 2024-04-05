import { Children, useMemo, useState } from 'react';
import { z } from 'zod';
import { MDXErrorBlock } from './error-block';
import { Stack, Tabs } from '@mantine/core';
import { dashCase } from '@/lib/helpers/dash-case';
import { MDXMermaidChildrenZod } from './mermaid';
import { Mermaid } from '../indie/mermaid';

interface MDXMermaidMultipleProps {
  children: React.ReactNode;
  title: string[];
}

const MDXMermaidMultipleChildrenZod = z.array(MDXMermaidChildrenZod);

export const MDXMermaidMultiple = (props: MDXMermaidMultipleProps) => {
  const [ActiveTab, setActiveTab] = useState(String(0));

  const parsedChildren = useMemo(() => {
    return MDXMermaidMultipleChildrenZod.safeParse(
      Children.toArray(props.children)
    );
  }, [props.children]);

  if (!parsedChildren.success) {
    console.log('MDXMermaidMultiple', props);

    return (
      <MDXErrorBlock
        error={{
          message: 'Invalid mermaid block',
          error: parsedChildren.error,
        }}
      />
    );
  }

  if (parsedChildren.data.length !== props.title.length) {
    console.log('MDXMermaidMultiple', props);

    return (
      <MDXErrorBlock
        error={{
          message: 'Title length does not match children length',
        }}
      />
    );
  }

  return (
    <Stack>
      <Tabs
        defaultValue={ActiveTab}
        onChange={(value) => {
          setActiveTab(value ?? dashCase(props.title[0]));
        }}
      >
        <Tabs.List>
          {Children.toArray(
            props.title.map((tab, index) => (
              <Tabs.Tab value={String(index)}>{tab}</Tabs.Tab>
            ))
          )}
        </Tabs.List>
      </Tabs>

      <Mermaid
        chart={
          parsedChildren.data[Number(ActiveTab)].props.children.props.children
        }
      />
    </Stack>
  );
};
