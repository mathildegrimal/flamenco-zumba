import styled from 'styled-components';
import { device } from './breakpoints';

export const DownloadPlanningContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 20px 0 20px;
  gap: 10px;

  > a {
    font-weight: bold;
  }

  @media screen and (${device.s}) {
    margin: 40px 40px 0 40px;
  }
  @media screen and (${device.m}) {
    margin: 40px 80px 0 80px;
  }
`;

export const PlanningImage = styled.img`
  display: flex;
  height: 800px;
  margin: 20px 0;
  width: auto;
  object-fit: contain;

  @media screen and (${device.s}) {
  }

  @media screen and (${device.m}) {
  }
`;
