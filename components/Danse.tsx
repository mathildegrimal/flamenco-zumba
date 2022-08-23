import {
  Container,
  ContentWrapper,
  Image,
  ImageContainer,
  TextContainer,
  Title,
  TitleWrapper,
} from '../styles/Commons';
import FanIcon from './commons/FanIcon';
import DansesNavbar from './DansesNavbar';
import { DanseProps } from '../types';
import React from 'react';

export default function Danse({
  image,
  nom,
  textes,
  danses,
  subtitle,
}: DanseProps) {
  return (
    <Container>
      <DansesNavbar danses={danses} />
      <TitleWrapper>
        <FanIcon />
        <Title>{nom}</Title>
      </TitleWrapper>
      <ContentWrapper>
        <TextContainer>
          <h2>{subtitle}</h2>
          {textes.map((texte, index) => (
            <p key={index}>{texte.paragraphe}</p>
          ))}
        </TextContainer>
        <ImageContainer>
          <Image alt={image.alt} src={image.url} />
          <title>{image.title}</title>
        </ImageContainer>
      </ContentWrapper>
    </Container>
  );
}
