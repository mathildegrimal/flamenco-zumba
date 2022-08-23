import type { GetStaticProps } from 'next';

import Layout from '../components/commons/Layout';
import { loadIndexData } from '../lib/loadIndexData';
import { HomeProps, PageProps } from '../types';
import Head from 'next/head';

const MentionsLegales = ({ menu, allPages }: PageProps) => {
  const image = menu.marion;
  return (
    <>
      <Head>
        <title>Mentions légales | Flamenco zumba</title>
      </Head>
      <Layout image={image} pages={allPages}>
        <p>mentions</p>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { accueil, menu, allPages } = await loadIndexData();
  return {
    props: { menu, allPages, accueil },
  };
};

export default MentionsLegales;
