import Navbar from './Navbar';
import { LayoutProps } from '../../types';
import { Main, Wrapper } from '../../styles/Commons';
import Footer from './Footer';

export default function Layout({ image, pages, children }: LayoutProps) {
  return (
    <>
      <Wrapper>
        <Navbar image={image} pages={pages} />
        <Main>{children}</Main>
      </Wrapper>
      <Footer />
    </>
  );
}
