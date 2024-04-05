import { CodeHighlight } from '@mantine/code-highlight';

interface ErrorBlockProps {
  error: object;
}

export const MDXErrorBlock = ({ error }: ErrorBlockProps) => (
  <CodeHighlight
    style={(theme) => ({
      borderRadius: theme.defaultRadius,
    })}
    language="json"
    code={JSON.stringify(error, null, 2)}
  />
);
