import type { GetStaticProps } from 'next';
import Layout from '../components/commons/Layout';
import PlanningTable from '../components/PlanningTable';
import { loadPlanningData } from '../lib/loadPlanningData';
import { PlanningProps } from '../types';

const Planning = ({ allPlannings, allPages, menu }: PlanningProps) => {
  const image = menu.marion;

  return (
    <Layout image={image} pages={allPages}>
      <PlanningTable planning={allPlannings} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<PlanningProps> = async () => {
  const { allPlannings, allPages, menu } = await loadPlanningData();
  return {
    props: { allPages, allPlannings, menu },
  };
};

export default Planning;
