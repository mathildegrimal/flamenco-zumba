import {
  FooterContainer,
  FooterLink,
  FooterWrapper,
} from '../../styles/Footer';
import Link from 'next/link';

export default function Footer({}) {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLink>© Marion Luna - Tous droits réservés</FooterLink>
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
