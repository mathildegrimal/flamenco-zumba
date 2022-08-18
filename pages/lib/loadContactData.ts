import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';

export async function loadContactData() {
  const { data } = await client.query({
    query: gql`
      query {
        ${navbarQuery}
        allContacts {
          id
          email
          telephone
        }
      }
    `,
  });
  return data;
}
