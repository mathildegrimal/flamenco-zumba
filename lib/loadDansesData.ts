import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';
import { DansesProps } from '../types';

export async function loadDansesData(): Promise<DansesProps | undefined> {
  const { data } = await client.query<DansesProps>({
    query: gql`
      query {
        ${navbarQuery}
        allDanses(orderBy: ordre_ASC) {
          id
          subtitle
          image {
            url
            alt
            title
            id
          }
          nom
          textes {
            paragraphe
          }
          slug
        }
      }
    `,
  });
  return data;
}
