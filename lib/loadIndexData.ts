import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';

export async function loadIndexData() {
  const { data } = await client.query({
    query: gql`
      query {
        ${navbarQuery}
          accueil {
            texte {
              value
            }
            titre {
              value
            }
            boutonPlanning
            header {
              alt
              id
              title
              url
            }
          }
      }
    `,
  });

  return data;
}
