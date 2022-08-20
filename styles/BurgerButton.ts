import styled from 'styled-components';

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
