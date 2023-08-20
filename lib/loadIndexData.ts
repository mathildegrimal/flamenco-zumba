import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';
import { HomeProps } from '../types';

export async function loadIndexData(): Promise<HomeProps> {
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
