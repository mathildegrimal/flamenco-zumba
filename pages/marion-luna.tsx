import type { GetStaticProps } from 'next';
import Layout from '../components/commons/Layout';
import {
  Container,
  ContentWrapper,
  Image,
  TextContainer,
  Title,
  TitleWrapper,
} from '../styles/Commons';
import { MarionProps } from '../types';
import { loadMarionData } from '../lib/loadMarionData';

const MarionLuna = ({ allPages, menu, allPresentations }: MarionProps) => {
  const menuImage = menu.marion;

  const { image, texte } = allPresentations[0];
  return (
    <Layout image={menuImage} pages={allPages}>
      <Container>
        <TitleWrapper>
          <Title>Marion Luna</Title>
        </TitleWrapper>
        <ContentWrapper>
          <Image alt="marion" src={image.url} />
          <TextContainer>{texte}</TextContainer>
        </ContentWrapper>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<MarionProps> = async () => {
  const { allPages, menu, allPresentations } = await loadMarionData();
  return {
    props: { allPages, menu, allPresentations },
  };
};

export default MarionLuna;
