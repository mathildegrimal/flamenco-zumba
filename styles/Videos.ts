import styled from 'styled-components';
import { device } from './breakpoints';

export const VideoContainer = styled.article`
  display: grid;
  margin: 30px 20px 20px 20px;

  @media screen and (${device.s}) {
    margin: 30px 40px 40px 40px;
  }

  @media screen and (${device.m}) {
    margin: 20px 80px 20px 80px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }
`;

export const Video = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: space-between;
  gap: 10px;

  iframe {
    border-radius: 10px;
    border: 0;
  }
`;
