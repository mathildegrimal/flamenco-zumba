import styled from 'styled-components';
import { colors } from './constants';

export interface Props {
  display: string;
}

export const DansesNavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 80px 0 80px;
`;
export const DansesNavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const NavbarItemContainer = styled.nav`
  margin-top: 15px;
  display: ${(props: Props) => props.display};
  width: 100%;
  column-gap: 20px;
`;

export const NavbarItem = styled.p`
  font-size: 1.5em;
  margin: 0;
  font-weight: bold;
  cursor: pointer;
  color: ${colors.paleRose};

  &:hover {
    color: ${colors.rose};
  }

  &.active {
    color: ${colors.rose};
  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;
