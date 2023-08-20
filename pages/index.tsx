import type { GetStaticProps } from 'next';

import Layout from '../components/commons/Layout';
import Accueil from '../components/Accueil';
import { loadIndexData } from '../lib/loadIndexData';
import { HomeProps } from '../types';
import Head from 'next/head';
import { loadActuData } from '../lib/loadActuData';

const Home = ({ menu, allPages, accueil }: HomeProps) => {
  const image = menu.marion;
  const { header, titre, texte, boutonPlanning } = accueil;
  return (
    <>
      <Head>
        <title>Accueil | Flamenco zumba</title>
      </Head>
      <Layout image={image} pages={allPages}>
        <Accueil
          header={header}
          titre={titre}
          texte={texte}
          boutonPlanning={boutonPlanning}
        />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<any> = async () => {
  const { menu, allPages, accueil } = await loadIndexData();

  return {
    props: { menu, allPages, accueil },
  };
};

export default Home;
