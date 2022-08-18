import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from '../../components/commons/Layout';
import Danse from '../../components/Danse';
import { loadDansesData } from '../lib/loadDansesData';
import { DansesProps } from '../../types';

const Name = ({ menu, allPages, allDanses }: DansesProps) => {
  const menuImage = menu.marion;

  const router = useRouter();
  const { name } = router.query;
  const { nom, textes, image } = allDanses.filter(
    (danse) => danse.slug === name
  )[0];

  return (
    <Layout image={menuImage} pages={allPages}>
      <Danse nom={nom} textes={textes} image={image} danses={allDanses} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<{ name: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps<DansesProps> = async () => {
  const { menu, allPages, allDanses } = await loadDansesData();
  return {
    props: { menu, allPages, allDanses },
  };
};

export default Name;
