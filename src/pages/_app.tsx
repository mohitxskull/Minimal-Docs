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
import { AppConfig } from '@/config';
import { DocTheme } from '@/theme';

const DocsLayout = dynamic(
  () => import('@/components/layout/docs').then((mod) => mod.DocsLayout),
  {
    ssr: false,
    loading: () => <CenterLoading height="100vh" />,
  }
);

export default function App({ Component, pageProps, router }: AppProps) {
  const renderDocsShell = router.pathname.includes(AppConfig.App.BasePath);

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
          {doc ? `${doc.Label} - ${AppConfig.App.Name}` : AppConfig.App.Name}
        </title>

        {doc ? (
          <>
            <MetaTagsComp
              title={doc.Label}
              description={doc.Description}
              siteName={AppConfig.App.Name}
              url={`${AppConfig.App.Url}${doc.Href}`}
              twitterHandle={AppConfig.App.Twitter}
              image={`${AppConfig.App.Url}/og-banner.png`}
            />
          </>
        ) : (
          <>
            <MetaTagsComp
              title={`${AppConfig.App.Name}: ${AppConfig.App.TagLine}`}
              description={AppConfig.App.Description}
              siteName={AppConfig.App.Name}
              url={AppConfig.App.Url}
              twitterHandle={AppConfig.App.Twitter}
              image={`${AppConfig.App.Url}/og-banner.png`}
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
