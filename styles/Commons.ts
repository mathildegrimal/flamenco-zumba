import styled from 'styled-components';
import { borderRadius, colors } from './constants';

export const Wrapper = styled.div`
  height: 90vh;
  flex: 1;
  display: flex;
  align-items: flex-start;
`;

export const Container = styled.article`
  display: flex;
  flex: 1;
  height: 90vh;
  flex-direction: column;
  margin: 0 100px 0 100px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin-top: 40px;
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
  margin-top: 40px;
  column-gap: 100px;
`;

export const TextContainer = styled.div`
  width: 50%;
  font-size: 1em;
  text-align: justify;
`;

export const Image = styled.img`
  width: 50%;
  height: 500px;
  object-fit: cover;
  object-position: 10% 50%;
  border-radius: ${borderRadius.image}px;
`;

export const Subtitle = styled.p`
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
