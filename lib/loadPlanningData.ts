import { gql } from '@apollo/client';
import { client } from './client';
import { navbarQuery } from './navbarQuery';
import { PlanningProps } from '../types';

export async function loadPlanningData(): Promise<PlanningProps | undefined> {
  const { data } = await client.query<PlanningProps>({
    query: gql`
      query {
        ${navbarQuery}
        planning {
          planning {
            alt
            id
            url
            title
          }
          planningDetail {
            alt
            id
            url
            title
          }
          tarifs {
            alt
            id
            url
            title
          }
        }
      }
    `,
  });
  return data;
}
