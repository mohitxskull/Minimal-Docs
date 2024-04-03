import { Anchor } from '@mantine/core';

interface MDXAnchorNativeProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const MDXAnchorNative = (props: MDXAnchorNativeProps) => {
  const external = props.href?.startsWith('http');

  return (
    <Anchor
      href={props.href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {props.children}
    </Anchor>
  );
};
