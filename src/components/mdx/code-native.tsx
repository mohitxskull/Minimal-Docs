import { Code, alpha, useMantineColorScheme } from '@mantine/core';

interface MDXCodeNativeProps extends React.ComponentProps<'code'> {}

export const MDXCodeNative = (props: MDXCodeNativeProps) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Code
      {...props}
      color={alpha(
        `var(--mantine-color-brown-${colorScheme === 'dark' ? 9 : 7})`,
        0.2
      )}
      c={`brown.${colorScheme === 'dark' ? 4 : 9}`}
      fw="bold"
    />
  );
};
