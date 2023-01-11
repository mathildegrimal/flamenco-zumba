import type { GetStaticProps } from 'next';

import Layout from '../components/commons/Layout';
import Accueil from '../components/Accueil';
import { loadIndexData } from '../lib/loadIndexData';
import { HomeProps } from '../types';
import Head from 'next/head';
import { loadActuData } from '../lib/loadActuData';

const Home = ({ menu, allPages, accueil, actualite }: HomeProps) => {
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
          actualite={actualite}
        />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<any> = async () => {
  const { menu, allPages, accueil } = await loadIndexData();
  const { actualite } = await loadActuData();

  return {
    props: { menu, allPages, accueil, actualite },
  };
};

export default Home;
