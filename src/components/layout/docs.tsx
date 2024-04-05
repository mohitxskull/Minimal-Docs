import { ICON_SIZE } from '@/lib/const';
import { Pages } from '@/lib/data';
import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Button,
  Center,
  Container,
  Divider,
  Group,
  NavLink,
  ScrollArea,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMoon, IconSearch, IconSun } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Children, useMemo } from 'react';
import { TableOfContents } from '../indie/table-of-contents';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { AppConfig } from '@/config';
import { IconGithub } from '../indie/github-icon';

export const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  const router = useRouter();

  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  const spotlightActions: SpotlightActionData[] = useMemo(() => {
    return Pages.map((link) => ({
      id: link.Href,
      label: link.Label,
      description: link.Description,
      onClick: () => {
        router.push(link.Href);
        spotlight.close();
      },
    }));
  }, [router]);

  return (
    <>
      <Spotlight
        actions={spotlightActions}
        nothingFound="Don't give up! Keep exploring."
        limit={7}
        searchProps={{
          placeholder: "Find what you're looking for.",
        }}
      />
      <AppShell
        header={{ height: 80, offset: true }}
        navbar={{
          width: 350,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        aside={{
          width: 300,
          breakpoint: 'md',
          collapsed: { desktop: false, mobile: true },
        }}
        padding="xl"
      >
        <AppShell.Header zIndex={1000}>
          <Group
            h="100%"
            px="md"
            justify="space-between"
            bg={colorScheme === 'light' ? 'brown.0' : 'transparent'}
          >
            <Group>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <Text size="xl" lh={1.1} fw="bold" component={Link} href="/">
                {AppConfig.App.Name}
              </Text>
            </Group>

            <Group>
              <ActionIcon
                size="xl"
                variant="transparent"
                onClick={spotlight.open}
                {...(colorScheme === 'light' ? { color: 'dark.9' } : {})}
              >
                <IconSearch size={ICON_SIZE.LG} />
              </ActionIcon>

              <ActionIcon
                size="xl"
                variant="transparent"
                onClick={toggleColorScheme}
                {...(colorScheme === 'light' ? { color: 'dark.9' } : {})}
              >
                {colorScheme === 'light' ? (
                  <IconMoon size={ICON_SIZE.LG} />
                ) : (
                  <IconSun size={ICON_SIZE.LG} />
                )}
              </ActionIcon>

              <ActionIcon
                size="xl"
                variant="transparent"
                {...(colorScheme === 'light' ? { color: 'dark.9' } : {})}
                component={Link}
                href={AppConfig.App.Github}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Box w={ICON_SIZE.LG + 5}>
                  <IconGithub />
                </Box>
              </ActionIcon>
            </Group>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar zIndex={1000}>
          <ScrollArea.Autosize type="never">
            <Stack mt="lg" gap="xs" p="md">
              {Children.toArray(
                AppConfig.Group.map((group) => (
                  <>
                    <Title pl="lg" order={4}>
                      {group.Name}
                    </Title>
                    <Stack gap={5}>
                      {Children.toArray(
                        group.Pages.map((nestedLink) => (
                          <NavLink
                            style={{
                              borderRadius: 'var(--mantine-radius-md)',
                            }}
                            href={nestedLink.Href}
                            label={nestedLink.Label}
                            active={router.pathname === nestedLink.Href}
                            pl="lg"
                            onClick={toggle}
                          />
                        ))
                      )}
                    </Stack>
                  </>
                ))
              )}
            </Stack>
          </ScrollArea.Autosize>
        </AppShell.Navbar>
        <AppShell.Aside withBorder={false}>
          <ScrollArea.Autosize type="never">
            <TableOfContents />
          </ScrollArea.Autosize>
        </AppShell.Aside>
        <AppShell.Main>
          <Container size="lg">
            <Stack id="mdx">
              {children}

              <Divider />

              <Group justify="space-between">
                <Text>© 2024 {AppConfig.App.Name}</Text>

                <Button
                  variant="transparent"
                  component={Link}
                  href={`${AppConfig.App.Github}blob/main/src/pages${router.pathname}.mdx`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Edit this page on GitHub
                </Button>
              </Group>

              <Center h="calc(100vh - 80px)">
                <Text fw="bold" ta="center" maw={350}>
                  Hey Human Being.
                  <br />
                  <br />
                  You are at the end of the page.
                </Text>
              </Center>
            </Stack>
          </Container>
        </AppShell.Main>
      </AppShell>
    </>
  );
};
