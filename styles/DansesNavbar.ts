import styled from 'styled-components';
import { colors } from './constants';
import { device } from './breakpoints';

export interface Props {
  display: string;
}

export const DansesNavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 20px 0 20px;
  @media screen and (${device.s}) {
    margin: 40px 40px 0 40px;
  }
  @media screen and (${device.m}) {
    margin: 40px 80px 0 80px;
  }
`;
export const DansesNavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;

  @media screen and (${device.s}) {
  }
  @media screen and (${device.m}) {
  }
`;

export const NavbarItemContainer = styled.nav`
  display: ${(props: Props) => props.display};
  flex-direction: column;

  @media screen and (${device.s}) {
  }
  @media screen and (${device.m}) {
    margin-top: 15px;
    flex-direction: row;
    width: 100%;
    column-gap: 20px;
  }
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

  @media screen and (${device.s}) {
  }
  @media screen and (${device.m}) {
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  transition: all ease-in 0.5s;

  &.open {
    transform: rotate(45deg);

  }
}
`;
