import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';

export async function loadPlanningData() {
  const { data } = await client.query({
    query: gql`
      query {
        ${navbarQuery}
        allPlannings(orderBy: heure_ASC) {
          id
          jour
          heure
          activite
        }
      }
    `,
  });

  return data;
}
