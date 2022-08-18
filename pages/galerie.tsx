import type { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/commons/Layout';
import { Container, Title, TitleWrapper } from '../styles/Commons';
import {
  GalleryContainer,
  GalleryImage,
  GalleryImagesWrapper,
} from '../styles/Gallery';
import { GalerieProps, ImageType } from '../types';
import { loadGalleryData } from './lib/loadGalleryData';

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
    <Layout image={image} pages={allPages}>
      <Container>
        <TitleWrapper>
          <Title>Galerie</Title>
        </TitleWrapper>

        <GalleryContainer>
          <GalleryImage
            className="selected"
            src={selectedImage.url}
            alt={selectedImage.alt}
          />
          <GalleryImagesWrapper>
            {images.map((image) => (
              <GalleryImage
                alt={image.alt}
                src={image.url}
                key={image.id}
                onClick={() => handleSelectedImage(image)}
                className={selectedImage.id === image.id ? 'active' : ''}
              />
            ))}
          </GalleryImagesWrapper>
        </GalleryContainer>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<GalerieProps> = async () => {
  const { menu, allPages, allGalleries } = await loadGalleryData();
  return {
    props: { menu, allPages, allGalleries },
  };
};

export default Galerie;
