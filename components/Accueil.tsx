import Link from 'next/link';
import {
  AccueilImageModal,
  ActuContainer,
  ActuImage,
  ActuImageContainer,
  ActuText,
  ActuTextContainer,
  ActuTitleWrapper,
  ActuWrapper,
  ContentContainer,
  HeaderContainer,
  LeftHeaderImage,
  LeftHeaderImageContainer,
  RightHeaderImage,
  RightHeaderImageContainer,
} from '../styles/Accueil';
import {
  Button,
  Container,
  Text,
  Title,
  TitleWrapper,
} from '../styles/Commons';
import { AccueilProps } from '../types';
import React, { useEffect, useState } from 'react';

export default function Accueil({
  header,
  titre,
  texte,
  boutonPlanning,
}: AccueilProps) {
  const initState: boolean = false;
  const texteToDisplay = texte.value.document.children[0].children;
  const titleToDisplay = titre.value.document.children[0].children;
  const rightImage = header[0];
  const [open, setOpen] = useState(initState);
  useEffect(() => {
    if (window) {
      if (window.innerWidth > 1024) {
        document.body.style.overflow = open ? 'hidden' : 'unset';
      }
    }
  }, [open]);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <Container id="accueil-container">
      <HeaderContainer>
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

      {/* <ActuContainer>
        <ActuTitleWrapper>
          <Title>{actualite.titre}</Title>
        </ActuTitleWrapper>
        <ActuWrapper>
          <ActuImageContainer onClick={handleOpen}>
            <ActuImage src={actualite.image.url} />
          </ActuImageContainer>
          <ActuTextContainer>
            <ActuText>{actualite.texte}</ActuText>
            <Button
              onClick={() => {
                window.open(
                  'https://www.billetweb.fr/tablao-flamenco-assas',
                  '_blank'
                );
              }}
            >
              Réserver
            </Button>
          </ActuTextContainer>
        </ActuWrapper>
      </ActuContainer>
      <AccueilImageModal className={open ? 'open' : ''} onClick={handleOpen} />
      <ActuImageContainer
        className={open ? 'open' : 'close'}
        onClick={handleOpen}
      >
        <p>Fermer</p>
        <ActuImage src={actualite.image.url} />
      </ActuImageContainer> */}
    </Container>
  );
}
