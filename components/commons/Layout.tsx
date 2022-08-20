import Navbar from './Navbar';
import { LayoutProps } from '../../types';
import { Main, Wrapper } from '../../styles/Commons';
import Footer from './Footer';
import { useState } from 'react';

export default function Layout({ image, pages, children }: LayoutProps) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = (value: boolean, e: any) => {
    e.preventDefault();
    setOpen(value);
  };
  return (
    <>
      <Wrapper>
        <Navbar
          image={image}
          pages={pages}
          handleOpen={(e) => handleOpen(!open, e)}
          open={open}
        />
        <Main onClick={(e) => handleOpen(false, e)}>{children}</Main>
      </Wrapper>
      <Footer />
    </>
  );
}
