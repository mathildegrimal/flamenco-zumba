import styled from 'styled-components';
import { device } from './breakpoints';

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

export const TarifsImage = styled.img`
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

export const DownloadPlanningWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px 20px 0 20px;
  @media screen and (${device.s}) {
    justify-content: center;
    margin: 20px 40px 0 40px;
  }

  @media screen and (${device.m}) {
    flex-direction: row;
    text-align: left;
    margin: 20px 80px 0 80px;
  }
`;
export const DownloadPlanningContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: fit-content;

  @media screen and (${device.s}) {
    flex-direction: row;
    width: 100%;
  }
  @media screen and (${device.m}) {
    width: 30%;
  }
`;
export const PlanningLink = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > svg {
    cursor: pointer;
  }

  > a {
    font-weight: bold;
  }

  @media screen and (${device.s}) {
  }
  @media screen and (${device.m}) {
  }
`;

export const PlanningImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (${device.s}) {
  }

  @media screen and (${device.m}) {
    width: 70px;
    height: 70px;
  }
`;

export const SelectedPlanningImageContainer = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: center;
`;

export const SelectedPlanningImage = styled.img`
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
