import { Container, Title, TitleWrapper } from '../styles/Commons';
import FanIcon from './commons/FanIcon';
import { PlanningTableProps } from '../types';
import {
  ActuContainer,
  DownloadPlanningContainer,
  DownloadPlanningWrapper,
  PlanningImage,
  PlanningLink,
  SelectedPlanningImage,
  SelectedPlanningImageContainer,
} from '../styles/Planning';
import Link from 'next/link';
import React, { useState } from 'react';
import DastNodes from './commons/DastNodes';

export default function PlanningTable({
  planning,
  planningDetail,
  informations,
}: PlanningTableProps) {
  const plannings = planningDetail;
  const [selectedPlanning, setSelectedPlanning] = useState(0);
  return (
    <Container>
      <TitleWrapper>
        <FanIcon />
        <Title>Planning</Title>
      </TitleWrapper>
      {informations?.value?.document && (
        <ActuContainer>
          <DastNodes nodes={informations.value.document.children} />
        </ActuContainer>
      )}
      {planning?.url && (
        <SelectedPlanningImageContainer>
          <SelectedPlanningImage
            src={planning.url}
            alt={planning.alt ?? 'Planning'}
          />
        </SelectedPlanningImageContainer>
      )}
    </Container>
  );
}
