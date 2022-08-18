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
import { Button, Container } from '../styles/Commons';
import { AccueilProps } from '../types';

export default function Accueil({
  header,
  titre,
  texte,
  boutonPlanning,
}: AccueilProps) {
  const titleToDisplay = titre.value.document.children[0].children;
  const rightImage = header[0];
  const leftImage = header[1];

  return (
    <Container>
      <HeaderContainer>
        <LeftHeaderImageContainer>
          <LeftHeaderImage src={leftImage.url} alt={leftImage.alt} />
        </LeftHeaderImageContainer>
        <RightHeaderImageContainer>
          <RightHeaderImage src={rightImage.url} alt={rightImage.alt} />
        </RightHeaderImageContainer>
      </HeaderContainer>
      <ContentContainer>
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
        <Text>{texte}</Text>
        <Button>
          <Link href="/planning">{boutonPlanning}</Link>
        </Button>
      </ContentContainer>
    </Container>
  );
}
