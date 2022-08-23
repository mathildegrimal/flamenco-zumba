import type { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/commons/Layout';
import { Container, Title, TitleWrapper } from '../styles/Commons';
import {
  GalleryContainer,
  GalleryImage,
  GalleryImageSelected,
  GalleryImageSelectedContainer,
  GalleryImagesWrapper,
} from '../styles/Gallery';
import { GalerieProps, ImageType } from '../types';
import { loadGalleryData } from '../lib/loadGalleryData';
import SevillaneIcon from '../components/commons/SevillaneIcon';
import Head from 'next/head';

const Galerie = ({ menu, allPages, allGalleries }: GalerieProps) => {
  const [selectedImage, setSelectedImage] = React.useState<ImageType>(
    allGalleries[0].images[0]
  );
  const image = menu.marion;

  const { images } = allGalleries[0];

  const handleSelectedImage = (image: ImageType) => {
    setSelectedImage(image);
  };
  return (
    <>
      <Head>
        <title>Galerie | Flamenco zumba</title>
      </Head>
      <Layout image={image} pages={allPages}>
        <Container>
          <TitleWrapper>
            <SevillaneIcon />
            <Title>Galerie</Title>
          </TitleWrapper>

          <GalleryContainer>
            <GalleryImageSelectedContainer>
              <GalleryImageSelected
                src={selectedImage.url}
                alt={selectedImage.alt}
              />
              <title>{selectedImage.title}</title>
            </GalleryImageSelectedContainer>
            <GalleryImagesWrapper>
              {images.map((image, index) => (
                <>
                  <GalleryImage
                    alt={image.alt}
                    src={image.url}
                    key={image.id}
                    onClick={() => handleSelectedImage(image)}
                    className={selectedImage.id === image.id ? 'active' : ''}
                  />
                  <title key={index}>{image.title}</title>
                </>
              ))}
            </GalleryImagesWrapper>
          </GalleryContainer>
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<GalerieProps> = async () => {
  const { menu, allPages, allGalleries } = await loadGalleryData();
  return {
    props: { menu, allPages, allGalleries },
  };
};

export default Galerie;
