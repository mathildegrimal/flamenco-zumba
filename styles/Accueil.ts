import styled from 'styled-components';
import { device } from './breakpoints';
import { borderRadius, colors } from './constants';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 375px;
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
    width: 40%;
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
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 30px;

  @media screen and (${device.s}) {
    margin: 0;
  }

  @media screen and (${device.m}) {
  }
`;

export const Title = styled.h1`
  font-family: 'Petit Formal Script', cursive;
  color: ${colors.rose};
  margin: 0;
  font-size: 25px;

  > strong {
    font-weight: bold;
  }

  @media screen and (${device.s}) {
    font-size: 30px;
  }

  @media screen and (${device.m}) {
  }
`;

export const Text = styled.p`
  font-size: 18px;
  text-align: justify;
  line-height: 25px;
  margin: 20px 20px 0 20px;

  @media screen and (${device.s}) {
    margin: 30px 40px 0 40px;
  }

  @media screen and (${device.m}) {
    margin: 20px 80px 0 80px;
  }
`;
