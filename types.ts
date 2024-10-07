import React from 'react';

export type ImageType = {
  id: string;
  alt: string;
  url: string;
  title?: string;
  _createdAt: string;
};
export type PageType = {
  id: string;
  slug: string;
  titre: string;
};

export type ContactType = {
  telephone: string;
  email: string;
};

export type RichTextType = {
  value: {
    document: {
      children: {
        type: string;
        children: {
          type: string;
          marks?: string[];
          value: string;
        }[];
      }[];
    };
  };
};

export type DanseType = {
  id: string;
  subtitle: string;
  image: ImageType;
  nom: string;
  textes: { paragraphe: string }[];
  slug: string;
};

export interface PageProps {
  menu: {
    marion: ImageType;
  };
  allPages: Array<PageType>;
}

export interface MarionProps extends PageProps {
  presentation: {
    id: string;
    image: ImageType;
    paragraphes: {
      paragraphe: string;
      id: string;
    }[];
  };
}

export interface HomeProps extends PageProps {
  accueil: AccueilProps;
  // actualite: ActualiteType;
}

export type ActualiteType = {
  image: ImageType;
  texte: string;
  titre: string;
};

export interface AccueilProps {
  header: Array<ImageType>;
  titre: RichTextType;
  texte: RichTextType;
  boutonPlanning: string;
  // actualite: ActualiteType;
}

export interface GalerieProps extends PageProps {
  allGalleries: {
    images: Array<ImageType>;
  }[];
}

export interface ContactProps extends PageProps {
  allContacts: Array<ContactType>;
}

export interface DansesProps extends PageProps {
  allDanses: Array<DanseType>;
}

export interface DanseProps {
  image: ImageType;
  nom: string;
  textes: { paragraphe: string }[];
  danses: Array<DanseType>;
  subtitle: string;
}

export interface DansesNavbarProps {
  danses: Array<DanseType>;
}

export interface LayoutProps {
  children: JSX.Element;
  image: ImageType;
  pages: Array<PageType>;
}

export interface NavbarProps {
  image: ImageType;
  pages: Array<PageType>;
  handleOpen: React.MouseEventHandler<HTMLDivElement>;
  open: boolean;
}

export interface PlanningProps extends PageProps {
  planning: PlanningTableProps;
}

export interface PlanningTableProps {
  planning: ImageType;
  planningDetail: ImageType[];
  tarifs: ImageType;
}

export interface Video {
  id: string;
  name: string;
  link: string;
}

export interface VideosType {
  id: string;
  title: string;
  items: Array<Video>;
}
export interface VideoProps extends PageProps {
  video: VideosType;
}
