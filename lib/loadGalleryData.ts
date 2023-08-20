import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';
import { GalerieProps } from '../types';

export async function loadGalleryData(): Promise<GalerieProps> {
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
