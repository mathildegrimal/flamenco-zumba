import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';

export async function loadMarionData() {
  const { data } = await client.query({
    query: gql`
      query {
        ${navbarQuery}
         allPresentations {
          image {
            id
            url
            alt
          }
          texte
        }
      }
    `,
  });
  return data;
}
