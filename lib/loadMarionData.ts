import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';
import { MarionProps } from '../types';

export async function loadMarionData(): Promise<MarionProps | undefined> {
  const { data } = await client.query<MarionProps>({
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
