import React, { Children, useEffect, useState } from 'react';
import { NavLink, Skeleton, Stack, Title } from '@mantine/core';
import { Heading, getHeadings } from '../../lib/helpers/getHeadings';

export const TableOfContents = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  const filteredHeadings = headings.filter((heading) => heading.depth > 1);

  /**
   * Heading components are imported dynamically, so we need to wait for them to be loaded
   */
  useEffect(() => {
    if (filteredHeadings.length === 0) {
      setTimeout(() => {
        setHeadings(getHeadings());
      }, 1000);
    }
  }, [filteredHeadings]);

  if (filteredHeadings.length === 0) {
    return (
      <Stack mt="lg" gap="xs" p="md">
        <Title order={4}>Table of contents</Title>

        <Stack gap="xs">
          <Skeleton height={25} />
          <Skeleton height={25} />
          <Skeleton height={25} />
          <Skeleton height={25} />
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack mt="lg" gap="xs" p="md">
      <Title order={4}>Table of contents</Title>

      <Stack gap={0}>
        {Children.toArray(
          filteredHeadings.map((heading, index) => (
            <NavLink
              styles={{
                root: {
                  backgroundColor: 'transparent',
                },
              }}
              href={`#${heading.id}`}
              pl={(heading.depth - 2) * 15}
              label={heading.content}
            />
          ))
        )}
      </Stack>
    </Stack>
  );
};
