import Link from 'next/link';
import {
  AccueilText,
  AccueilTextContainer,
  AccueilVideo,
  ContentContainer,
  HeaderContainer,
  RightHeaderImage,
  RightHeaderImageContainer,
  VideoContainer,
} from '../styles/Accueil';
import { Button, Container, Title } from '../styles/Commons';
import { AccueilProps } from '../types';
import React, { useEffect, useState } from 'react';

export default function Accueil({
  header,
  titre,
  texte,
  boutonPlanning,
}: AccueilProps) {
  const initState: boolean = false;
  const texteToDisplay = texte?.value.document.children[0].children;
  const titleToDisplay = titre?.value.document.children[0].children;
  const rightImage = header ? header[0] : null;
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
          <RightHeaderImage src={rightImage?.url} alt={rightImage?.alt} />
          <title>{rightImage?.title}</title>
        </RightHeaderImageContainer>
      </HeaderContainer>
      <ContentContainer>
        <VideoContainer>
          <AccueilVideo>
            <iframe
              src="https://www.youtube.com/embed/X37XsX3WIkc?si=n_seruBp6nGNLrRM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </AccueilVideo>
          <Button>
            <Link href="/videos">Toutes les vidéos</Link>
          </Button>
        </VideoContainer>
        <AccueilTextContainer>
          <Title>
            {titleToDisplay?.map((p, index) => {
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
          <AccueilText>
            {texteToDisplay?.map((p, index) => {
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
          </AccueilText>
          <Button>
            <Link href="/planning">{boutonPlanning}</Link>
          </Button>
        </AccueilTextContainer>
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
