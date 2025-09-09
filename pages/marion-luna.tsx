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
import FanIcon from '../components/commons/FanIcon';

const MarionLuna = ({ allPages, menu, presentation }: MarionProps) => {
  const menuImage = menu?.marion;

  const { image, paragraphes } = presentation ?? {};
  return (
    <>
      <Head>
        <title>Marion Luna | Flamenco zumba</title>
      </Head>
      <Layout image={menuImage} pages={allPages}>
        <Container>
          <TitleWrapper>
            <FanIcon />
            <Title>Marion Luna</Title>
          </TitleWrapper>
          <ContentWrapper>
            <TextContainer>
              <h2>Danseuse, professeur et chorégraphe</h2>
              {paragraphes?.map((p: { paragraphe: string }, index: number) => (
                <p key={index}>{p.paragraphe}</p>
              ))}
            </TextContainer>
            <ImageContainerMarion>
              <Image alt="marion" src={image?.url} />
            </ImageContainerMarion>
          </ContentWrapper>
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<MarionProps> = async () => {
  const { allPages, menu, presentation } = (await loadMarionData()) ?? {};
  return {
    props: { allPages, menu, presentation },
  };
};

export default MarionLuna;
