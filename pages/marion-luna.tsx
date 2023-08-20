import type { GetStaticProps } from 'next';
import Layout from '../components/commons/Layout';
import {
  Container,
  ContentWrapper,
  Image,
  ImageContainerMarion,
  TextContainer,
  Title,
  TitleWrapper,
} from '../styles/Commons';
import { MarionProps } from '../types';
import { loadMarionData } from '../lib/loadMarionData';
import Head from 'next/head';

const MarionLuna = ({ allPages, menu, presentation }: MarionProps) => {
  const menuImage = menu.marion;

  const { image, paragraphes } = presentation;
  return (
    <>
      <Head>
        <title>Marion Luna | Flamenco zumba</title>
      </Head>
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
            <div>
              <h2>Danseuse, professeur et chorégraphe</h2>
              <ImageContainerMarion>
                <Image alt="marion" src={image.url} />
              </ImageContainerMarion>
            </div>
          </ContentWrapper>
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<MarionProps> = async () => {
  const { allPages, menu, presentation } = await loadMarionData();
  return {
    props: { allPages, menu, presentation },
  };
};

export default MarionLuna;
