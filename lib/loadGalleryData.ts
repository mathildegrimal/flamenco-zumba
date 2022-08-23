import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';

export async function loadGalleryData() {
  const { data } = await client.query({
    query: gql`
      query {
        ${navbarQuery}
        allGalleries {
          images {
            id
            alt
            url
            title
          }
        }
      }
    `,
  });
  return data;
}
