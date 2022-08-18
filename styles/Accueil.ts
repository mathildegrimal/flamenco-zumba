import styled from 'styled-components';
import { borderRadius, colors } from './constants';

interface BackgroundImageProps {
  url: string;
}

export const HeaderContainer = styled.div`
  display: flex;
  height: 350px;
  column-gap: 15px;
  margin: 80px 80px 0 80px;
`;

export const RightHeaderImageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 40%;
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
  margin: 0;
`;

export const Text = styled.p`
  font-size: 18px;
  text-align: justify;
  line-height: 25px;
  margin: 40px 80px 0 80px;
`;
