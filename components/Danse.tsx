import {
  Container,
  ContentWrapper,
  Image,
  TextContainer,
  Title,
  TitleWrapper,
} from '../styles/Commons';
import FanIcon from './commons/FanIcon';
import DansesNavbar from './DansesNavbar';
import { DanseProps } from '../types';

export default function Danse({ image, nom, textes, danses }: DanseProps) {
  return (
    <Container>
      <DansesNavbar danses={danses} />
      <TitleWrapper>
        <FanIcon />
        <Title>{nom}</Title>
      </TitleWrapper>
      <ContentWrapper>
        <TextContainer>
          {textes.map((texte, index) => (
            <p key={index}>{texte.paragraphe}</p>
          ))}
        </TextContainer>
        <Image alt="marion" src={image.url} />
      </ContentWrapper>
    </Container>
  );
}
