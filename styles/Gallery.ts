import styled from 'styled-components';
import { borderRadius, colors } from './constants';
import { device } from './breakpoints';

export const GalleryContainer = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: fit-content;
  margin: 30px 20px 20px 20px;
  gap: 20px;

  @media screen and (${device.s}) {
    margin: 40px 80px 0 80px;
    flex-direction: row;
    gap: 60px;
  }

  @media screen and (${device.m}) {
  }
`;

export const GalleryImagesWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  height: fit-content;

  @media screen and (${device.s}) {
    gap: 10px;
  }
  @media screen and (${device.m}) {
  }
`;

export const GalleryImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  object-position: 10% 50%;
  border-radius: ${borderRadius.image}px;
  cursor: pointer;

  &.selected {
    width: 100%;
    height: 500px;
    cursor: auto;
  }

  &.active {
    border: 5px solid ${colors.rose};
  }

  @media screen and (${device.s}) {
    width: 100px;
    height: 100px;
    &.selected {
      max-width: 565px;
    }
  }
  @media screen and (${device.m}) {
  }
`;
