import styled from 'styled-components';
import { colors } from './constants';

export const FooterContainer = styled.footer`
  display: flex;
  height: 10vh;
  border-top: 1px solid #eaeaea;
  justify-content: space-between;
  align-items: center;
  background: ${colors.paleRose};
  column-gap: 50px;
  border: none;
`;

export const FooterWrapper = styled.div`
  display: flex;
`;
export const FooterLink = styled.div`
  display: flex;
  padding: 0 100px;
  color: white;
`;
