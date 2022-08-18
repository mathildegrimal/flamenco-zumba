import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';

export async function loadDansesData() {
  const { data } = await client.query({
    query: gql`
      query {
        ${navbarQuery}
        allDanses(orderBy: ordre_ASC) {
          id
          image {
            url
            alt
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
