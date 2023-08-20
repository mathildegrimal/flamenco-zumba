import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';
/**
 * The function `loadContactData` is an asynchronous function that queries a GraphQL API to fetch
 * contact data, including the id, email, and telephone of all contacts.
 * @returns The function `loadContactData` is returning a Promise that resolves to an object of type
 * `ContactProps`.
 */
import { ContactProps } from '../types';

export async function loadContactData(): Promise<ContactProps> {
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
