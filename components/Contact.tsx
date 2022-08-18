import { Container, Title, TitleWrapper } from '../styles/Commons';
import FanIcon from './commons/FanIcon';
import { InfosContainer, InfosSubtitle } from '../styles/Contact';
import { ContactType } from '../types';

export default function ContactForm({ telephone, email }: ContactType) {
  // const initialInputsState = {
  //   nom: '',
  //   prenom: '',
  //   email: '',
  //   message: '',
  // };
  // const [submitted, setSubmitted] = useState(false);
  // const [inputs, setInputs] = useState(initialInputsState);
  // const handleChange = (e: any) => {
  //   switch (e.target.name) {
  //     case 'nom':
  //       setInputs({ ...inputs, nom: e.target.value });
  //       break;
  //     case 'prenom':
  //       setInputs({ ...inputs, prenom: e.target.value });
  //       break;
  //     case 'email':
  //       setInputs({ ...inputs, email: e.target.value });
  //       break;
  //     case 'message':
  //       setInputs({ ...inputs, message: e.target.value });
  //       break;
  //     default:
  //       break;
  //   }
  // };
  //
  // const handleSend = (e: any) => {
  //   e.preventDefault();
  //   const req = axios({
  //     method: 'post',
  //     url: '/api/contact',
  //     data: inputs,
  //   });
  // };
  return (
    <Container>
      <TitleWrapper>
        <FanIcon />
        <Title>Contact</Title>
      </TitleWrapper>
      {/*<FormContainer>*/}
      {/*  <FormWrapper onSubmit={(e) => handleSend(e)}>*/}
      {/*    <Subtitle>*/}
      {/*      Vous pouvez me contacter via le formulaire suivant :*/}
      {/*    </Subtitle>*/}
      {/*    <InputGroup>*/}
      {/*      <InputLabel htmlFor="nom">Votre nom :</InputLabel>*/}
      {/*      <Input type="text" name="nom" required onChange={handleChange} />*/}
      {/*    </InputGroup>*/}
      {/*    <InputGroup>*/}
      {/*      <InputLabel htmlFor="prenom">Votre prénom :</InputLabel>*/}
      {/*      <Input type="text" name="prenom" required onChange={handleChange} />*/}
      {/*    </InputGroup>*/}
      {/*    <InputGroup>*/}
      {/*      <InputLabel htmlFor="email">Votre email :</InputLabel>*/}
      {/*      <Input type="email" name="email" required onChange={handleChange} />*/}
      {/*    </InputGroup>*/}
      {/*    <TextareaLabel htmlFor="message" onChange={handleChange}>*/}
      {/*      Votre message :*/}
      {/*    </TextareaLabel>*/}
      {/*    <Textarea name="message" required onChange={handleChange} />*/}
      {/*    <Button type="submit">Envoyer</Button>*/}
      {/*  </FormWrapper>*/}
      {/*// </FormContainer>*/}
      <InfosContainer>
        <InfosSubtitle>Pour me contacter...</InfosSubtitle>
        <p>
          <span>Marion Luna</span>
        </p>
        <p>Association "Bougez Flamenco", Saint-Vincent-de-Barbeyrargues</p>
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
