import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';
import { HomeProps } from '../types';

export async function loadIndexData(): Promise<HomeProps | undefined> {
  const { data } = await client.query<HomeProps>({
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
