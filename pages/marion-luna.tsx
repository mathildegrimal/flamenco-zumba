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

const MarionLuna = ({ allPages, menu, presentation }: MarionProps) => {
  const menuImage = menu.marion;

  const { image, paragraphes } = presentation;
  return (
    <Layout image={menuImage} pages={allPages}>
      <Container>
        <TitleWrapper>
          <Title>Marion Luna</Title>
        </TitleWrapper>
        <ContentWrapper>
          <TextContainer>
            {paragraphes.map((p, index) => (
              <p key={index}>{p.paragraphe}</p>
            ))}
          </TextContainer>
          <Image alt="marion" src={image.url} />
        </ContentWrapper>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<MarionProps> = async () => {
  const { allPages, menu, presentation } = await loadMarionData();
  return {
    props: { allPages, menu, presentation },
  };
};

export default MarionLuna;
