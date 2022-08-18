import styled from 'styled-components';
import { colors } from './constants';

export const NavbarWrapper = styled.div`
  display: flex;
  background: red;
  min-height: 100vh;
  height: 100%;
  width: fit-content;
  justify-content: center;
  align-items: center;
  transition: all linear 0.5s;
`;

export const NavbarMain = styled.div`
  display: flex;
  z-index: 100;
  min-height: 100vh;

  flex-direction: column;
  background: ${colors.rose};

  width: 200px;
  justify-content: center;
  align-items: center;
  transition: all linear 0.5s;
`;

export const NavbarItemContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
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
`;

export const NavbarImage = styled.img`
  border-radius: 50%;
  height: 140px;
  width: 140px;
  object-fit: cover;
  object-position: 0 0;
  cursor: pointer;
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

export const MenuButtonBurger = styled.div`
  width: 40px;
  height: 4px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;

  &.open {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;

    &::before {
      transform: rotate(45deg) translate(35px, -35px);
    }

    &::after {
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }

  &::before,
  ::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 4px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(8px);
  }
`;

export const NavbarText = styled.p`
  color: white;
`;
export const NavbarIcon = styled.div`
  margin-top: 10px;

  &.menu-close {
    display: none;
  }

  &.menu-open {
    display: flex;
  }
`;
