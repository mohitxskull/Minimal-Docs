import { DocConfig } from '@/config';
import { Button, Center, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
  return (
    <Center h="100vh">
      <Stack>
        <Title>{DocConfig.Doc.Name}</Title>

        <Text ta="center">Big impact, small footprint</Text>

        <Button
          variant="transparent"
          component={Link}
          href={DocConfig.Group[0].Pages[0].Href}
        >
          Start
        </Button>
      </Stack>
    </Center>
  );
}
