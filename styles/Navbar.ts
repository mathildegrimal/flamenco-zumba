import styled from 'styled-components';
import { colors } from './constants';
import { device } from './breakpoints';

export const NavbarWrapper = styled.div`
  display: flex;
  height: 120px;
  width: 100%;

  @media screen and (${device.s}) {
    min-height: 100vh;
    height: 100%;
    width: fit-content;
    justify-content: center;
    align-items: center;
    transition: all linear 0.5s;
  }
  @media screen and (${device.m}) {
    min-height: 100vh;
    height: 100%;
    width: fit-content;
    justify-content: center;
    align-items: center;
    transition: all linear 0.5s;
  }
`;

export const NavbarMain = styled.div`
  display: flex;
  height: 120px;
  width: 100%;
  background: ${colors.rose};
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  transition: all linear 0.5s;
  z-index: 100;
  @media screen and (${device.s}) {
    z-index: 100;
    min-height: 100vh;
    flex-direction: column;
    width: 200px;
    justify-content: center;
  }
  @media screen and (${device.m}) {
    z-index: 100;
    min-height: 100vh;
    flex-direction: column;
    width: 200px;
    justify-content: center;
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

  &.open {
    transform: translateY(calc(100% - 150px));
  }

  @media screen and (${device.s}) {
    display: flex;
    position: absolute;

    flex-direction: column;
    background: ${colors.rose};
    height: 100%;
    min-height: 100vh;
    width: 200px;
    justify-content: center;
    align-items: flex-start;
    transition: all linear 0.5s;
    transform: translateY(0);

    &.open {
      transform: translateY(0) translateX(100%);
    }
  }
  @media screen and (${device.m}) {
    display: flex;
    position: absolute;

    flex-direction: column;
    background: ${colors.rose};
    height: 100%;
    min-height: 100vh;
    width: 200px;
    justify-content: center;
    align-items: flex-start;
    transition: all linear 0.5s;

    &.open {
      transform: translateX(100%);
    }
  }
`;

export const NavbarImage = styled.img`
  display: none;
  @media screen and (${device.s}) {
    display: flex;
    border-radius: 50%;
    height: 140px;
    width: 140px;
    object-fit: cover;
    object-position: 0 0;
    cursor: pointer;
  }
  @media screen and (${device.m}) {
    display: flex;
    border-radius: 50%;
    height: 140px;
    width: 140px;
    object-fit: cover;
    object-position: 0 0;
    cursor: pointer;
  }
`;

export const NavbarItemText = styled.a`
  color: white;
  cursor: pointer;
  margin: 10px 0;
  transition: all linear 0.5s;

  &:hover {
    font-style: italic;
    font-weight: bold;
  }

  &.active {
    font-style: italic;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const MenuButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

export const NavbarText = styled.p`
  display: none;
  color: white;

  @media screen and (${device.s}) {
    display: flex;
  }
  @media screen and (${device.m}) {
    display: flex;
  }
`;
export const NavbarIcon = styled.div`
  width: auto;
  margin-right: 30px;

  &.menu-close {
    display: none;
  }

  &.menu-open {
    display: flex;
  }

  @media screen and (${device.s}) {
    margin-top: 10px;
    margin-right: 0px;
  }
  @media screen and (${device.m}) {
    margin-top: 10px;
  }
`;
