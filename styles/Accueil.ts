import styled from 'styled-components';
import { device } from './breakpoints';
import { borderRadius, colors } from './constants';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px 0 20px;
  gap: 15px;
  @media screen and (${device.s}) {
    flex-direction: row;
    height: 350px;
    column-gap: 15px;
    margin: 40px 40px 0 40px;
  }

  @media screen and (${device.m}) {
    margin: 80px 80px 0 80px;
  }
`;

export const RightHeaderImageContainer = styled.div`
  display: flex;
  height: 50%;
  width: 100%;

  @media screen and (${device.s}) {
    display: flex;
    height: 100%;
    width: 100%;
  }
  @media screen and (${device.m}) {
  }
`;

export const RightHeaderImage = styled.img`
  object-fit: cover;
  width: 100%;
  object-position: 10% 50%;
  border-radius: ${borderRadius.image}px;
`;

export const LeftHeaderImageContainer = styled.div`
  display: flex;
  height: 50%;
  width: 100%;

  @media screen and (${device.s}) {
    display: flex;
    height: 100%;
    width: 60%;
  }
  @media screen and (${device.m}) {
  }
`;
export const LeftHeaderImage = styled.img`
  object-fit: cover;
  width: 100%;
  object-position: 10% 50%;
  border-radius: ${borderRadius.image}px;
`;

export const ContentContainer = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 30px;

  @media screen and (${device.s}) {
    margin: 0;
  }

  @media screen and (${device.m}) {
    margin-bottom: 30px;
  }
`;

export const ActuContainer = styled.article`
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: center;
  align-items: center;
  background: ${colors.lightRose};
  border-radius: 10px;
  margin: 20px 20px 50px 20px;
  padding-bottom: 20px;
  @media screen and (${device.s}) {
    margin: 20px 40px 50px 40px;
  }
  @media screen and (${device.m}) {
    margin: 0 50px 50px 50px;
    padding: 0;
  }
`;

export const ActuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;

  @media screen and (${device.s}) {
  }

  @media screen and (${device.m}) {
    flex-direction: row;
  }
`;

export const ActuTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0 0 0;
  @media screen and (${device.s}) {
  }

  @media screen and (${device.m}) {
    text-align: left;
    margin: 20px 80px 0px 80px;
  }
`;
export const ActuTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;

  @media screen and (${device.s}) {
    margin: 0;
  }

  @media screen and (${device.m}) {
    justify-content: center;
    width: 60%;
  }
`;
export const ActuText = styled.p`
  font-size: 18px;
  text-align: justify;
  line-height: 25px;
  margin: 20px;

  @media screen and (${device.s}) {
  }

  @media screen and (${device.m}) {
    margin: 20px 80px 0 0;
    width: 75%;
  }
`;
export const ActuImageContainer = styled.div`
  display: flex;
  height: auto;
  max-width: 400px;
  margin: 30px 20px 20px 20px;

  &.close {
    display: none;
  }

  &.open {
    display: none;
  }

  @media screen and (${device.m}) {
    cursor: pointer;
    width: 25%;
    &.open {
      display: flex;
      position: absolute;
      flex-direction: column;
      z-index: 1500;
      opacity: 1;
      bottom: -300px;
      left: 25%;
      width: 40%;
      max-width: 600px;

      > p {
        color: white;
        font-family: 'Petit Formal Script', cursive;
        font-size: 1.1rem;
        cursor: pointer;
      }
    }
`;

export const ActuImage = styled.img`
  width: 100%;
  opacity: 1;
`;

export const AccueilImageModal = styled.div`
  display: none;

  @media screen and (${device.m}) {
    z-index: 1000;
    width: 100vw;
    height: 100%;
    background: black;
    opacity: 0.5;
    &.open {
      position: fixed;
      display: flex;
    }
  }
`;
