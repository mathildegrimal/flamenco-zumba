import styled from 'styled-components';
import { borderRadius, colors } from './constants';

interface BackgroundImageProps {
  url: string;
}

export const HeaderContainer = styled.div`
  display: flex;
  height: 400px;
  margin-top: 80px;
  column-gap: 15px;
`;

export const RightHeaderImageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 40%;
  border-radius: ${borderRadius.image}px;
`;

export const RightHeaderImage = styled.img`
  object-fit: cover;
  width: 100%;
  object-position: 10% 50%;

  border-radius: ${borderRadius.image}px;
`;

export const LeftHeaderImageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  border-radius: ${borderRadius.image}px;
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
  height: 100%;
`;

export const Title = styled.h1`
  font-family: 'Petit Formal Script', cursive;
  font-size: 30px;
  color: ${colors.rose};
  margin-top: 40px;
`;

export const Text = styled.p`
  font-size: 18px;
  text-align: justify;
  line-height: 25px;
`;
