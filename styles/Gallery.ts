import styled from 'styled-components';
import { borderRadius, colors } from './constants';

export const GalleryContainer = styled.article`
  display: flex;
  flex: 1;
  height: fit-content;
  margin: 40px 80px 0 80px;
  gap: 60px;
`;

export const GalleryImagesWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: fit-content;
`;

export const GalleryImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: 10% 50%;
  border-radius: ${borderRadius.image}px;
  cursor: pointer;

  &.selected {
    width: 100%;
    max-width: 565px;
    height: 500px;
    cursor: auto;
  }

  &.active {
    border: 5px solid ${colors.rose};
  }
`;
