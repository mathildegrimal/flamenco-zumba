import styled from 'styled-components';
import { colors } from './constants';
import { device } from './breakpoints';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  background: ${colors.paleRose};
  column-gap: 50px;
  border: none;
  gap: 20px;
  padding: 15px;
  @media screen and (${device.s}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 100px;
  }
  @media screen and (${device.m}) {
    height: 8vh;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  @media screen and (${device.s}) {
    flex-direction: row;
    column-gap: 50px;
  }
  @media screen and (${device.m}) {
  }
`;
export const FooterLink = styled.div`
  display: flex;
  color: white;
  justify-content: center;
`;
