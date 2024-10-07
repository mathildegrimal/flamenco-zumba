import {
  FooterContainer,
  FooterLink,
  FooterWrapper,
} from '../../styles/Footer';
import Link from 'next/link';
import InstagramIcon from './InstagramIcon';
import FacebookIcon from './FacebookIcon';

export default function Footer({}) {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLink>© Marion Luna - Tous droits réservés</FooterLink>
      </FooterWrapper>
      <FooterWrapper>
        <a
          href="https://www.instagram.com/las.estrellas.del.sur/?igsh=MXJuaHEwZ2JucDg5aw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/lasestrellas.delsur.7"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
      </FooterWrapper>
      <FooterWrapper>
        <FooterLink>
          <Link href="/contact">Contact</Link>
        </FooterLink>
        <FooterLink>
          <Link href="/mentions-legales">Mentions légales</Link>
        </FooterLink>
      </FooterWrapper>
    </FooterContainer>
  );
}
