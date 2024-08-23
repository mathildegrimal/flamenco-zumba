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
  TarifsImage,
} from '../styles/Planning';
import Link from 'next/link';
import React, { useState } from 'react';

export default function PlanningTable({
  planning,
  planningDetail,
  tarifs,
}: PlanningTableProps) {
  const plannings = planningDetail;
  const [selectedPlanning, setSelectedPlanning] = useState(0);
  return (
    <Container>
      <TitleWrapper>
        <FanIcon />
        <Title>Planning</Title>
      </TitleWrapper>
      <ActuContainer>
        <p>📢{'  '}C’est bientôt la rentrée !</p>
        <p>
          Pour cette saison 2024 / 2025, on revient avec les cours hebdomadaires
          de Flamenco, Rumba, Sévillanes et Zumba et Step fitness tous niveaux !
        </p>
        <p>
          Les dates sont données, alors on vous laisse prendre vos agendas pour
          les noter :
        </p>
        <h3>➡ Foire aux associations :</h3>
        <ul>
          <li>
            Vendredi 6 septembre de 17h à 19h à St Vincent (dans la cour de
            l’école)
          </li>
          <li>Mercredi 11 septembre de 15h30 à 18h à la MJC de Mauguio</li>
        </ul>
        <h3>➡ Début des cours :</h3>
        <ul>
          <li>Cours à Mauguio : lundi 16 septembre</li>
          <li>Cours à St-Vincent-de-Barbeyrargues : jeudi 19 septembre</li>
        </ul>
        <h3>➡ Inscription / tarifs (Saint-Vincent) :</h3>
        <p>
          Pour les tarifs des cours à Mauguio, veuillez contacter la MJC (
          <a href="tel:+33467293499">04 67 29 34 99</a>).
        </p>
        <TarifsImage src={tarifs.url} alt={tarifs.alt} />
        <title>{tarifs.title}</title>
        <h3>➡ Planning :</h3>
        <p>
          Pour plus de détails sur les jours et horaires, consultez les
          plannings ci-dessous (cliquez pour agrandir l&apos;image).
        </p>
      </ActuContainer>
      <DownloadPlanningWrapper>
        {plannings.map((p, index) => (
          <DownloadPlanningContainer key={index}>
            <PlanningImage
              src={p.url}
              alt={p.alt}
              onClick={() => {
                setSelectedPlanning(index);
              }}
            />
            <PlanningLink>
              <h4>{p.title}</h4>
              <Link href={`${p.url}?dl=${p.title}`} download={p.title}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5469 0H14.4531C15.1025 0 15.625 0.522461 15.625 1.17188V9.375H19.9072C20.7764 9.375 21.2109 10.4248 20.5957 11.04L13.1689 18.4717C12.8027 18.8379 12.2021 18.8379 11.8359 18.4717L4.39941 11.04C3.78418 10.4248 4.21875 9.375 5.08789 9.375H9.375V1.17188C9.375 0.522461 9.89746 0 10.5469 0ZM25 18.3594V23.8281C25 24.4775 24.4775 25 23.8281 25H1.17188C0.522461 25 0 24.4775 0 23.8281V18.3594C0 17.71 0.522461 17.1875 1.17188 17.1875H8.33496L10.7275 19.5801C11.709 20.5615 13.291 20.5615 14.2725 19.5801L16.665 17.1875H23.8281C24.4775 17.1875 25 17.71 25 18.3594ZM18.9453 22.6562C18.9453 22.1191 18.5059 21.6797 17.9688 21.6797C17.4316 21.6797 16.9922 22.1191 16.9922 22.6562C16.9922 23.1934 17.4316 23.6328 17.9688 23.6328C18.5059 23.6328 18.9453 23.1934 18.9453 22.6562ZM22.0703 22.6562C22.0703 22.1191 21.6309 21.6797 21.0938 21.6797C20.5566 21.6797 20.1172 22.1191 20.1172 22.6562C20.1172 23.1934 20.5566 23.6328 21.0938 23.6328C21.6309 23.6328 22.0703 23.1934 22.0703 22.6562Z"
                    fill="#000000"
                  />
                </svg>
              </Link>
            </PlanningLink>
          </DownloadPlanningContainer>
        ))}
      </DownloadPlanningWrapper>
      <SelectedPlanningImageContainer>
        <SelectedPlanningImage
          src={plannings[selectedPlanning].url}
          alt={plannings[selectedPlanning].alt}
        />
        <title>{plannings[selectedPlanning].title}</title>
      </SelectedPlanningImageContainer>
    </Container>
  );
}
