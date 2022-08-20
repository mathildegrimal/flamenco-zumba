import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Flamenco - Zumba | Marion Luna Deleria</title>
        <meta
          name="description"
          content="Flamenco Zumba, Zumba kids, Zumba strong, fitness, Rumba, cours de danses éveil / enfants / adultes près de Montpellier avec Marion Luna Deleria. A "
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, height=device-height,"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Petit+Formal+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
