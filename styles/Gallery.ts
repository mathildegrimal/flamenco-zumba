import styled from 'styled-components';
import { borderRadius, colors } from './constants';
import { device } from './breakpoints';

export const GalleryContainer = styled.article`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 30px 20px 20px 20px;
  gap: 20px;

  @media screen and (${device.s}) {
    margin: 40px 40px 40px 40px;
  }

  @media screen and (${device.m}) {
    margin: 40px 80px 0 80px;
    flex-direction: row;
    gap: 60px;
  }
`;

export const GalleryImageSelectedContainer = styled.div`
  display: flex;
  width: 100%;

  @media screen and (${device.s}) {
    height: 50vh;
  }

  @media screen and (${device.m}) {
    width: 50%;
    height: 70vh;
  }
`;

export const GalleryImageSelected = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  cursor: auto;
  object-fit: cover;
  object-position: 0 0;
  border-radius: ${borderRadius.image}px;

  @media screen and (${device.s}) {
  }

  @media screen and (${device.m}) {
    width: 100%;
    height: 100%;
  }
`;

export const GalleryImagesWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  height: 330px;
  overflow: scroll;
  width: 100%;
  border-radius: ${borderRadius.image};

  @media screen and (${device.s}) {
    height: 250px;
  }
  @media screen and (${device.m}) {
    width: 50%;
    height: 70vh;
    gap: 10px;
  }
`;

export const GalleryImage = styled.img`
  display: flex;
  width: calc(20% - 5px);
  height: calc((330px / 3) - 5px);
  object-fit: cover;
  object-position: 10% 50%;
  border-radius: ${borderRadius.image}px;
  cursor: pointer;

  &.active {
    border: 5px solid ${colors.rose};
  }

  @media screen and (${device.s}) {
    width: calc(12.5% - 5px);
    height: calc((250px / 2) - 5px);
  }
  @media screen and (${device.m}) {
    width: calc(20% - 10px);
    height: calc((70vh / 4) - 10px);
  }
`;
