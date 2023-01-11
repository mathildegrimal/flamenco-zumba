import type { GetStaticProps } from 'next';

import Layout from '../components/commons/Layout';
import { loadIndexData } from '../lib/loadIndexData';
import { PageProps } from '../types';
import Head from 'next/head';
import {
  Container,
  ContentContainer,
  Subtitle,
  Title,
  TitleWrapper,
} from '../styles/Commons';
import React from 'react';

const MentionsLegales = ({ menu, allPages }: PageProps) => {
  const image = menu.marion;
  return (
    <>
      <Head>
        <title>Mentions légales | Flamenco zumba</title>
      </Head>
      <Layout image={image} pages={allPages}>
        <Container>
          <TitleWrapper>
            <Title>Mentions légales</Title>
          </TitleWrapper>
          <ContentContainer>
            <Subtitle>Présentation du site</Subtitle>
            <p>
              En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004
              pour la confiance dans l&apos;économie numérique, il est précisé
              aux utilisateurs du site www.flamenco-zumba.com l&apos;identité
              des différents intervenants dans le cadre de sa réalisation et de
              son suivi.
            </p>
            <p>
              Le présent site est édité par : Marion Luna – Association Bougez
              Flamenco, Association loi 1901 ayant pour numéro RNA : W342006395
              et qui est domiciliée au 444 route de Prades 34730
              Saint-Vincent-de-Barbeyrargues
            </p>
            <p>
              Responsable de la publication : Marion Deleria, joignable par
              email à morena_luna@msn.com
            </p>
            <p>Webmaster du site: Marion Deleria.</p>
            <p>
              Hébergeur du site: Netlify, Inc., located at 44 Montgomery Street,
              Suite 300, San Francisco, California 94104.
            </p>
            <Subtitle>Propriété intellectuelle et contrefaçons</Subtitle>
            <p>
              Marion Luna Deleria est propriétaire des droits de propriété
              intellectuelle ou détient les droits d’usage sur tous les éléments
              accessibles sur le site, notamment : les textes, les images, les
              graphismes, le logo, les icônes,…
            </p>
            <p>
              La reproduction, représentation, modification, publication,
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite, sauf autorisation
              écrite préalable de Marion Luna Deleria.
            </p>
            <p>
              L&apos;exploitation non autorisée du site ou d’un quelconque
              élément qu’il contient sera considérée comme constitutive d’une
              contrefaçon et poursuivie conformément aux dispositions des
              articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
            <Subtitle>Cookies et traceurs</Subtitle>
            <p>
              Le site internet www.flamenco-zumba.com n&apos;utilise pas de
              cookies.
            </p>
            <Subtitle>Données personnelles</Subtitle>
            <p>
              Le site internet www.flamenco-zumba.com ne collecte aucune donnée
              personnelle de l&apos;utilisateur.
            </p>
          </ContentContainer>
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const { menu, allPages } = await loadIndexData();
  return {
    props: { menu, allPages },
  };
};

export default MentionsLegales;
