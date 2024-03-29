import styled from 'styled-components';
import { colors } from './constants';
import { device } from './breakpoints';

export const NavbarWrapper = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 200;
  opacity: 0.95;

  @media screen and (${device.s}) {
    height: 100%;
    position: relative;
    width: fit-content;
    justify-content: center;
    align-items: center;
  }

  @media screen and (${device.m}) {
  }
`;

export const NavbarMain = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: ${colors.rose};
  transition: all linear 0.5s;
  z-index: 100;

  @media screen and (${device.s}) {
    height: 100vh;
    padding: 0;
    flex-direction: column;
    width: 200px;
    justify-content: center;
  }
  @media screen and (${device.m}) {
  }
`;

export const NavbarItemContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  flex-direction: column;
  width: 100%;
  background: ${colors.rose};
  height: fit-content;
  align-items: center;
  transition: all linear 0.5s;
  transform: translateY(-100%);
  padding: 20px 0 0 1px;
  margin-left: -1px;

  &.open {
    transform: translateY(70px);
  }

  @media screen and (${device.s}) {
    flex-direction: column;
    height: 100vh;
    width: 200px;
    justify-content: center;
    align-items: flex-start;
    transform: translateY(0);

    &.open {
      transform: translateY(0) translateX(100%);
    }
  }
  @media screen and (${device.m}) {
  }
`;
export const NavbarImageContainer = styled.div`
  display: flex;
`;
export const NavbarImage = styled.img`
  display: flex;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  object-fit: cover;
  object-position: 0 0;
  cursor: pointer;
  margin-left: 10px;

  @media screen and (${device.s}) {
    height: 140px;
    width: 140px;
    margin: 0;
  }
  @media screen and (${device.m}) {
  }
`;

export const NavbarItemText = styled.a`
  color: white;
  cursor: pointer;
  margin: 10px 0;
  transition: all linear 0.2s;
  font-size: 20px;

  &:hover {
    font-style: italic;
    font-weight: bold;
  }

  &.active {
    font-style: italic;
    font-weight: bold;
  }

  @media screen and (${device.s}) {
  }
  @media screen and (${device.m}) {
  }
`;

export const NavbarText = styled.p`
  display: none;
  color: white;

  @media screen and (${device.s}) {
    display: flex;
  }
  @media screen and (${device.m}) {
  }
`;
export const NavbarIcon = styled.div`
  width: auto;
  cursor: pointer;

  > svg {
    height: 50px;
  }

  &.close-icon {
    margin-right: 10px;
  }

  &.menu-close {
    display: none;
  }

  &.menu-open {
    display: flex;
  }

  @media screen and (${device.s}) {
    margin-right: 0;
    &.close-icon {
      margin-right: 0;
    }
  }
  @media screen and (${device.m}) {
  }
`;
