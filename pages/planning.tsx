import type { GetStaticProps } from 'next';
import Layout from '../components/commons/Layout';
import PlanningTable from '../components/PlanningTable';
import { loadPlanningData } from '../lib/loadPlanningData';
import { PlanningProps } from '../types';
import Head from 'next/head';

const Planning = ({ planning, allPages, menu }: PlanningProps) => {
  const image = menu.marion;

  return (
    <>
      <Head>
        <title>Planning | Flamenco zumba</title>
      </Head>
      <Layout image={image} pages={allPages}>
        <PlanningTable planning={planning.planning} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<PlanningProps> = async () => {
  const { planning, allPages, menu } = await loadPlanningData();
  return {
    props: { allPages, planning, menu },
  };
};

export default Planning;
