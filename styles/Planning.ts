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

export const ActuContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin: 30px 20px 0 20px;

  > p {
    margin: 5px 0;
  }

  @media screen and (${device.s}) {
    margin: 20px 40px 0 40px;
  }

  @media screen and (${device.m}) {
    text-align: left;
    margin: 20px 80px 0 80px;
  }
`;
export const PlanningImageContainer = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: center;
`;
export const PlanningImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;

  @media screen and (${device.s}) {
    width: 70%;
  }

  @media screen and (${device.m}) {
    width: 60%;
  }
`;
