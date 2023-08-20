import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';
import { MarionProps } from '../types';

export async function loadMarionData(): Promise<MarionProps> {
  const { data } = await client.query({
    query: gql`
      query {
        ${navbarQuery}
         presentation {
          id
          image {
            alt
            id
            title
            url
          }
          paragraphes {
            paragraphe
            id
          }
        }
      }
    `,
  });
  return data;
}
