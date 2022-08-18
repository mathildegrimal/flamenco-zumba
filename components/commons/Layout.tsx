import Head from 'next/head';
import Navbar from './Navbar';
import styles from '../../styles/Home.module.css';
import { LayoutProps } from '../../types';
import { Wrapper } from '../../styles/Commons';
import Footer from './Footer';

export default function Layout({ image, pages, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Flamenco - Zumba | Marion Luna Deleria</title>
        <meta
          name="description"
          content="Flamenco Zumba, Zumba kids, Zumba strong, fitness, Rumba, cours de danses éveil / enfants / adultes près de Montpellier avec Marion Luna Deleria. A "
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
      <Wrapper>
        <Navbar image={image} pages={pages} />
        <main className={styles.main}>{children}</main>
      </Wrapper>
      <Footer />
    </>
  );
}
