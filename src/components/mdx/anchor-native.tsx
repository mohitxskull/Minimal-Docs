import { Anchor } from '@mantine/core';

interface MDXAnchorNativeProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const MDXAnchorNative = (props: MDXAnchorNativeProps) => {
  return <Anchor href={props.href}>{props.children}</Anchor>;
};
