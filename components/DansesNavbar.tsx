import {
  DansesNavbarContainer,
  DansesNavbarWrapper,
  Icon,
  NavbarItem,
  NavbarItemContainer,
} from '../styles/DansesNavbar';
import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import { Subtitle } from '../styles/Commons';
import { DansesNavbarProps } from '../types';

export default function DansesNavbar({ danses }: DansesNavbarProps) {
  const router = useRouter();
  const [display, setDisplay] = React.useState<boolean>(false);

  const handleOpen = () => {
    setDisplay(!display);
  };
  const { name } = router.query;
  return (
    <DansesNavbarContainer>
      <DansesNavbarWrapper>
        <Icon onClick={handleOpen} className={display ? 'open' : ''}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.7988 5.41992 24.2188 12.1094 24.2188C18.7988 24.2188 24.2188 18.7988 24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0ZM19.1406 13.4766C19.1406 13.7988 18.877 14.0625 18.5547 14.0625H14.0625V18.5547C14.0625 18.877 13.7988 19.1406 13.4766 19.1406H10.7422C10.4199 19.1406 10.1562 18.877 10.1562 18.5547V14.0625H5.66406C5.3418 14.0625 5.07812 13.7988 5.07812 13.4766V10.7422C5.07812 10.4199 5.3418 10.1562 5.66406 10.1562H10.1562V5.66406C10.1562 5.3418 10.4199 5.07812 10.7422 5.07812H13.4766C13.7988 5.07812 14.0625 5.3418 14.0625 5.66406V10.1562H18.5547C18.877 10.1562 19.1406 10.4199 19.1406 10.7422V13.4766Z"
              fill="#F90093"
            />
          </svg>
        </Icon>
        <Subtitle>Plus de danses</Subtitle>
      </DansesNavbarWrapper>
      <NavbarItemContainer display={display ? 'flex' : 'none'}>
        {danses.map((danse) => (
          <NavbarItem
            key={danse.id}
            className={name === danse.slug ? 'active' : ''}
          >
            <Link key={danse.id} href={`${danse.slug}`}>
              {danse.nom}
            </Link>
          </NavbarItem>
        ))}
      </NavbarItemContainer>
    </DansesNavbarContainer>
  );
}
