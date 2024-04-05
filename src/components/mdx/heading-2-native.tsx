import { dashCase } from '@/lib/helpers/dash-case';
import { useRouter } from 'next/router';
import { MDXErrorBlock } from './error-block';

interface MDXHeading2NativeProps {
  children?: React.ReactNode;
}

export const MDXHeading2Native = (props: MDXHeading2NativeProps) => {
  const router = useRouter();

  if (!props.children) {
    return (
      <MDXErrorBlock
        error={{
          component: 'MDXHeading2',
          message: 'Invalid h2 component, children is missing',
        }}
      />
    );
  }

  const slug = dashCase(String(props.children));

  return (
    <h2
      data-mdx-heading
      data-heading={props.children}
      data-order={2}
      id={slug}
      style={{
        scrollMarginTop: '150px',
        cursor: 'pointer',
      }}
      onClick={() => {
        router.push(`#${slug}`);
      }}
    >
      {props.children}
    </h2>
  );
};
