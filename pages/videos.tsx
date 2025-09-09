import Head from 'next/head';
import { Container, TitleWrapper, Title } from '../styles/Commons';
import Layout from '../components/commons/Layout';
import { VideoProps } from '../types';
import { GetStaticProps } from 'next';
import FanIcon from '../components/commons/FanIcon';
import { Video, VideoContainer } from '../styles/Videos';
import { loadVideosData } from '../lib/loadVideosData';

const Videos = ({ video, allPages, menu }: VideoProps) => {
  const image = menu?.marion;

  return (
    <>
      <Head>
        <title>Vidéos | Flamenco zumba</title>
      </Head>
      <Layout image={image} pages={allPages}>
        <Container>
          <TitleWrapper>
            <FanIcon />
            <Title>Vidéos</Title>
          </TitleWrapper>
          <VideoContainer>
            {video?.items.map(({ id, link, name }) => (
              <Video key={id}>
                <h3>{name}</h3>
                <iframe
                  height="315"
                  src={link}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Video>
            ))}
          </VideoContainer>
        </Container>
      </Layout>
      {/* <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-6"></div>
      </div>
      <div className="mt-4 flex flex-col gap-10 xl:flex-row">
        <div className="flex flex-col gap-6">
          <div className="mt-6 flex grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"></div>
        </div>
      </div> */}
    </>
  );
};

export const getStaticProps: GetStaticProps<VideoProps> = async () => {
  const { allPages, menu, video } = (await loadVideosData()) ?? {};
  return {
    props: { allPages, video, menu },
  };
};

export default Videos;
