import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';

export async function loadPlanningData() {
  const { data } = await client.query({
    query: gql`
      query {
        ${navbarQuery}
        planning {
          planning {
            alt
            id
            url
            title
          }
        }
      }
    `,
  });

  return data;
}
