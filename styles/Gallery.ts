import styled from 'styled-components';
import { borderRadius, colors } from './constants';

export const GalleryContainer = styled.article`
  display: flex;
  flex: 1;
  height: fit-content;
  margin: 50px;
`;

export const GalleryImagesWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: fit-content;
  margin: 50px;
`;

export const GalleryImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-position: 10% 50%;
  border-radius: ${borderRadius.image}px;
  cursor: pointer;
  &.selected {
    width: 400px;
    height: 400px;
    cursor: ;
  }
  &.active {
    border: 5px solid ${colors.rose};
  }
`;
