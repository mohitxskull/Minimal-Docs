import '@/styles/globals.css';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/charts/styles.css';

import dynamic from 'next/dynamic';
import { CenterLoading } from '@/components/indie/center-loading';

import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import Head from 'next/head';
import { MetaTagsComp } from '@/components/indie/meta-tags';
import Script from 'next/script';
import { getPageByPath } from '@/lib/data';
import { DocConfig } from '@/config';
import { DocTheme } from '@/theme';

const DocsLayout = dynamic(
  () => import('@/components/layout/docs').then((mod) => mod.DocsLayout),
  {
    ssr: false,
    loading: () => <CenterLoading height="100vh" />,
  }
);

export default function App({ Component, pageProps, router }: AppProps) {
  const renderDocsShell = router.pathname.includes('/docs');

  const doc = getPageByPath(router.pathname);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');
        `}
      </Script>

      <Head>
        <title>
          {doc ? `${doc.Label} - ${DocConfig.Doc.Name}` : DocConfig.Doc.Name}
        </title>

        {doc ? (
          <>
            <MetaTagsComp
              title={doc.Label}
              description={doc.Description}
              siteName={DocConfig.Doc.Name}
              url={`${DocConfig.Doc.Url}${doc.Href}`}
              twitterHandle={DocConfig.Doc.Twitter}
              image={`${DocConfig.Doc.Url}/og-banner.png`}
            />
          </>
        ) : (
          <>
            <MetaTagsComp
              title={`${DocConfig.Doc.Name}: ${DocConfig.Doc.TagLine}`}
              description={DocConfig.Doc.Description}
              siteName={DocConfig.Doc.Name}
              url={DocConfig.Doc.Url}
              twitterHandle={DocConfig.Doc.Twitter}
              image={`${DocConfig.Doc.Url}/og-banner.png`}
            />
          </>
        )}

        <link rel="icon" href="/favicon.png" />
      </Head>

      <MantineProvider theme={DocTheme}>
        <Notifications />

        {renderDocsShell ? (
          <DocsLayout>
            <Component {...pageProps} />
          </DocsLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </MantineProvider>
    </>
  );
}
