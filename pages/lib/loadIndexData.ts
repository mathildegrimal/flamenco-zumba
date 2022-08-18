import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';

export async function loadIndexData() {
  const { data } = await client.query({
    query: gql`
      query {
        ${navbarQuery}
        accueil {
          boutonPlanning
          id
          texte
          header {
            url
            title
            id
            alt
          }
          titre {
            value
          }
        }
      }
    `,
  });

  return data;
}
