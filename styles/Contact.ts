import styled from 'styled-components';
import { colors } from './constants';
import { device } from './breakpoints';

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 20px 0 20px;

  > p {
    margin: 5px 0;

    > span {
      font-weight: bold;
    }
  }

  @media screen and (${device.s}) {
    margin: 40px 80px 0 80px;
  }
  @media screen and (${device.m}) {
  }
`;

export const InfosSubtitle = styled.h2`
  font-size: 1.6em;
  margin: 0 0 50px 0;
  font-weight: bold;
  color: ${colors.rose};
`;
