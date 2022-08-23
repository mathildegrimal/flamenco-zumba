import Link from 'next/link';
import {
  ContentContainer,
  HeaderContainer,
  LeftHeaderImage,
  LeftHeaderImageContainer,
  RightHeaderImage,
  RightHeaderImageContainer,
  Text,
  Title,
} from '../styles/Accueil';
import { Button, Container, TitleWrapper } from '../styles/Commons';
import { AccueilProps } from '../types';
import React from 'react';

export default function Accueil({
  header,
  titre,
  texte,
  boutonPlanning,
}: AccueilProps) {
  const texteToDisplay = texte.value.document.children[0].children;
  const titleToDisplay = titre.value.document.children[0].children;
  const rightImage = header[0];
  const leftImage = header[1];

  return (
    <Container>
      <HeaderContainer>
        <LeftHeaderImageContainer>
          <LeftHeaderImage src={leftImage.url} alt={leftImage.alt} />
          <title>{leftImage.title}</title>
        </LeftHeaderImageContainer>
        <RightHeaderImageContainer>
          <RightHeaderImage src={rightImage.url} alt={rightImage.alt} />
          <title>{rightImage.title}</title>
        </RightHeaderImageContainer>
      </HeaderContainer>
      <ContentContainer>
        <TitleWrapper>
          <Title>
            {titleToDisplay.map((p, index) => {
              if (p.marks?.includes('strong')) {
                return (
                  <span key={index}>
                    <strong>{p.value}</strong>
                  </span>
                );
              } else {
                return <span key={index}>{p.value}</span>;
              }
            })}
          </Title>
        </TitleWrapper>
        <Text>
          {texteToDisplay.map((p, index) => {
            if (p.marks?.includes('strong')) {
              return (
                <span key={index}>
                  <strong>{p.value}</strong>
                </span>
              );
            } else {
              return <span key={index}>{p.value}</span>;
            }
          })}
        </Text>
        <Button>
          <Link href="/planning">{boutonPlanning}</Link>
        </Button>
      </ContentContainer>
    </Container>
  );
}
