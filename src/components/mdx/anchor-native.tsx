import { Anchor } from '@mantine/core';

interface MDXAnchorNativeProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const MDXAnchorNative = (props: MDXAnchorNativeProps) => {
  const internal = props.href?.startsWith('/');

  return (
    <Anchor
      href={props.href}
      target={!internal ? '_blank' : '_self'}
      rel={!internal ? 'noopener noreferrer' : undefined}
    >
      {props.children}
    </Anchor>
  );
};
