import Layout from '../components/commons/Layout';
import { GetStaticProps } from 'next';
import ContactForm from '../components/Contact';
import { loadContactData } from '../lib/loadContactData';
import { ContactProps } from '../types';
import Head from 'next/head';

const Contact = ({ menu, allPages, allContacts }: ContactProps) => {
  const image = menu.marion;
  const { telephone, email } = allContacts[0];
  return (
    <>
      <Head>
        <title>Contact | Flamenco zumba</title>
      </Head>
      <Layout image={image} pages={allPages}>
        <ContactForm telephone={telephone} email={email} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<ContactProps> = async () => {
  const { menu, allPages, allContacts } = await loadContactData();
  return {
    props: { menu, allPages, allContacts },
  };
};

export default Contact;
