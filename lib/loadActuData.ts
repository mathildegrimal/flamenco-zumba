import { gql } from '@apollo/client';
import { client } from './client';

export async function loadActuData() {
  const { data } = await client.query({
    query: gql`
      query {
        actualite {
          image {
            alt
            title
            url
          }
          texte
          titre
        }
      }
    `,
  });
  return data;
}
