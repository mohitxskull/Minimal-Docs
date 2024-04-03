import { Image } from '@mantine/core';

interface MDXImageNativeProps extends React.ComponentProps<'img'> {}

export const MDXImageNative = (props: MDXImageNativeProps) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      style={(theme) => ({
        borderRadius: theme.defaultRadius,
      })}
    />
  );
};
