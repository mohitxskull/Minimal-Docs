import { dashCase } from '@/lib/helpers/dash-case';
import { useRouter } from 'next/router';
import { MDXErrorBlock } from './error-block';

interface MDXHeading3NativeProps {
  children?: React.ReactNode;
}

export const MDXHeading3Native = (props: MDXHeading3NativeProps) => {
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
    <h3
      data-mdx-heading
      data-heading={props.children}
      data-order={3}
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
    </h3>
  );
};
