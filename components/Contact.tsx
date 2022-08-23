import { Container, Title, TitleWrapper } from '../styles/Commons';
import FanIcon from './commons/FanIcon';
import { InfosContainer, InfosSubtitle } from '../styles/Contact';
import { ContactType } from '../types';

export default function ContactForm({ telephone, email }: ContactType) {
  return (
    <Container>
      <TitleWrapper>
        <FanIcon />
        <Title>Contact</Title>
      </TitleWrapper>
      <InfosContainer>
        <InfosSubtitle>Pour me contacter...</InfosSubtitle>
        <h3>
          <span>Marion Luna</span>
        </h3>
        <p>
          Association &quot; Bougez Flamenco &quot;,
          Saint-Vincent-de-Barbeyrargues
        </p>
        <p>
          <span>Téléphone : </span>
          {telephone}
        </p>
        <p>
          <span>Email :</span> {email}
        </p>
      </InfosContainer>
    </Container>
  );
}
