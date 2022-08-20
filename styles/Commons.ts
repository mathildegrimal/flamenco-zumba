import styled from 'styled-components';
import { borderRadius, colors } from './constants';
import { device } from './breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  width: 100vw;

  @media screen and (${device.s}) {
    display: flex;
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

  width: 100vw;
  @media screen and (${device.s}) {
    display: flex;
    width: 100%;
    height: 100%;
  }
  @media screen and (${device.m}) {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.article`
  display: flex;
  min-width: 100%;
  height: 100vh;
  flex-direction: column;
  overflow: scroll;
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin: 40px 80px 0 80px;
  align-items: center;
  column-gap: 30px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 5em;
  font-family: 'Petit Formal Script', cursive;
  color: ${colors.rose};
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  margin: 40px 80px 0 80px;
  column-gap: 100px;
`;

export const TextContainer = styled.div`
  width: 50%;
  font-size: 1em;
  text-align: justify;
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
  max-height: 380px;
  object-fit: cover;
  object-position: 10% 50%;
  border-radius: ${borderRadius.image}px;
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
