import styled from 'styled-components';
import { device } from './breakpoints';

export const PlanningImage = styled.img`
  height: 800px;
  margin: 0 20px;
  width: auto;
  object-fit: contain;

  @media screen and (${device.s}) {
    margin: 0;
  }
  @media screen and (${device.m}) {
  }
`;

export const DownloadPlanningContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 20px 0 20px;
  gap: 10px;

  > a {
    font-weight: bold;
  }

  @media screen and (${device.s}) {
    margin: 40px 80px 0 80px;
  }
  @media screen and (${device.m}) {
  }
`;
