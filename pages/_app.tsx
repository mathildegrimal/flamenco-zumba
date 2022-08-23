import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Flamenco zumba | Marion Luna Deleria</title>
        <meta
          name="description"
          content="Cours de Flamenco, Zumba, Zumba kids, Zumba strong, fitness, Rumba, leçons de danses éveil / enfants / adolescents / adultes près de Montpellier, Prades-le-Lez avec Marion Luna Deleria. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="PSOR-BRIzIfnXmQ6eB9npKJ-eeX3zsObjRQ3NGoMB1w"
        />
        <meta name="author" content="Marion Luna Deleria" />
        <meta name="robots" content="follow" />
        <meta
          name="og:title"
          property="og:title"
          content="Flamenco Zumba | Marion Luna Deleria"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Flamenco Zumba | Marion Luna Deleria"
        />
        <meta property="og:type" content="siteweb" />
        <meta
          property="og:description"
          content="Cours de Flamenco, Zumba, Zumba kids, Zumba strong, fitness, Rumba, leçons de danses éveil / enfants / adolescents / adultes près de Montpellier, Prades-le-Lez avec Marion Luna Deleria. "
        />
        <meta
          property="og:image"
          content="https://www.datocms-assets.com/70452/1661286962-marion-danse-flamenco.jpg"
        />
        <meta property="og:url" content="https://www.flamenco-zumba.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
