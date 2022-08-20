import styled from 'styled-components';
import { borderRadius, colors } from './constants';
import { device } from './breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 100vw;

  @media screen and (${device.s}) {
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    align-items: flex-start;
  }

  @media screen and (${device.m}) {
    display: flex;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    align-items: flex-start;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  @media screen and (${device.s}) {
  }
  @media screen and (${device.m}) {
  }
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media screen and (${device.s}) {
    overflow: scroll;
    height: 100vh;
  }
  @media screen and (${device.m}) {
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin: 30px 20px 0 20px;
  align-items: center;
  text-align: center;

  > svg {
    display: none;
  }

  @media screen and (${device.s}) {
    text-align: left;
    margin: 40px 80px 0 80px;
    > svg {
      display: flex;
    }
  }
  @media screen and (${device.m}) {
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'Petit Formal Script', cursive;
  color: ${colors.rose};
  font-size: 3em;

  @media screen and (${device.s}) {
    font-size: 5em;
  }
  @media screen and (${device.m}) {
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: column-reverse;
  height: 100%;
  margin: 30px 20px 20px 20px;
  row-gap: 20px;
  @media screen and (${device.s}) {
    flex-direction: row;
    column-gap: 100px;

    margin: 40px 80px 0 80px;
    flex-flow: row-reverse;
  }

  @media screen and (${device.m}) {
  }
`;

export const TextContainer = styled.div`
  font-size: 1em;
  text-align: justify;

  @media screen and (${device.s}) {
    width: 50%;
  }

  @media screen and (${device.m}) {
  }
`;

export const Image = styled.img`
  height: auto;
  max-height: 380px;
  object-fit: cover;
  object-position: 0 10%;
  border-radius: ${borderRadius.image}px;

  @media screen and (${device.s}) {
    width: 50%;
  }

  @media screen and (${device.m}) {
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.6em;
  margin: 0;
  font-weight: bold;
  color: ${colors.rose};
`;

export const Button = styled.button`
  padding: 15px;
  background: ${colors.rose};
  color: white;
  margin-top: 20px;

  border-radius: ${borderRadius.bouton}px;
  width: fit-content;
  font-size: 18px;
  border: none;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${colors.rose};
  }
`;
