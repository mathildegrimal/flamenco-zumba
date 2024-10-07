import { gql } from '@apollo/client';
import { VideoProps } from '../types';
import { client } from './client';
import { navbarQuery } from './navbarQuery';

export const loadVideosData = async (): Promise<VideoProps> => {
  const { data } = await client.query<VideoProps>({
    query: gql`
        query {
            ${navbarQuery}
            video {
                id
                title
                items {
                    id
                    link
                    name
                }
            }
        }
    `,
  });
  return data;
};
