import styled from 'styled-components';
import { borderRadius, colors } from './constants';
import { device } from './breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media screen and (${device.s}) {
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
    align-items: flex-start;
  }

  @media screen and (${device.m}) {
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (${device.s}) {
  }
  @media screen and (${device.m}) {
  }
`;

export const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  min-height: 100vh;
  width: 100%;
  @media screen and (${device.s}) {
  }
  @media screen and (${device.m}) {
    overflow: scroll;
    height: 100vh;
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
    margin: 40px 40px 0 40px;
  }

  @media screen and (${device.m}) {
    text-align: left;
    margin: 40px 80px 0 80px;
    > svg {
      display: flex;
    }
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'Petit Formal Script', cursive;
  color: ${colors.rose};
  font-size: 3em;

  @media screen and (${device.s}) {
    font-size: 4em;
  }
  @media screen and (${device.m}) {
    font-size: 5em;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: column-reverse;
  align-items: center;
  height: 100%;
  margin: 30px 20px 20px 20px;
  row-gap: 20px;
  @media screen and (${device.s}) {
    margin: 40px 40px 40px 40px;
    justify-content: start;
  }

  @media screen and (${device.m}) {
    flex-direction: row;
    column-gap: 100px;
    margin: 40px 80px 0 80px;
    flex-flow: row-reverse;
  }
`;

export const TextContainer = styled.div`
  font-size: 1em;
  text-align: justify;

  @media screen and (${device.s}) {
  }

  @media screen and (${device.m}) {
    width: 50%;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 380px;
  margin: 0 20px;
  object-fit: cover;
  object-position: 0 10%;
  border-radius: ${borderRadius.image}px;
  @media screen and (${device.s}) {
    object-position: 0 50%;
  }

  @media screen and (${device.m}) {
    max-height: 380px;
    width: 50%;
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
