import { Divider } from '@mantine/core';

interface MDXDividerNativeProps extends React.ComponentProps<typeof Divider> {}

export const MDXDividerNative = (props: MDXDividerNativeProps) => {
  return <Divider {...props} />;
};
