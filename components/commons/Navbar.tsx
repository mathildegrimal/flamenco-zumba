import {
  NavbarIcon,
  NavbarImage,
  NavbarItemContainer,
  NavbarItemText,
  NavbarMain,
  NavbarText,
  NavbarWrapper,
} from '../../styles/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavbarProps } from '../../types';

export default function Navbar({
  image,
  pages,
  handleOpen,
  open,
}: NavbarProps) {
  const router = useRouter();

  return (
    <NavbarWrapper>
      <NavbarMain>
        <Link href="/">
          <NavbarImage src={image.url} />
        </Link>
        <NavbarText>Menu</NavbarText>

        <NavbarIcon
          onClick={handleOpen}
          className={open ? 'menu-close close-icon' : 'menu-open close-icon'}
        >
          <svg
            width="54"
            height="66"
            viewBox="0 0 54 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_166_33)">
              <path
                d="M27.2653 2.04037H25.4736V51.7352H27.2653V2.04037Z"
                fill="white"
              />
              <path
                d="M27.6378 54.8844L17.4832 1.17404L15.6833 1.58275L25.8379 55.2932L27.6378 54.8844Z"
                fill="white"
              />
              <path
                d="M28.7847 54.7094L10.3893 4.96021L8.69019 5.70385L27.0856 55.4531L28.7847 54.7094Z"
                fill="white"
              />
              <path
                d="M26.8125 66C23.7265 66 20.6406 64.8459 17.6163 62.5707C16.6597 61.8452 16.3511 60.4932 16.9065 59.3721L26.8125 47.0396L36.7184 59.3721C37.2739 60.4603 36.9653 61.8452 36.0087 62.5707C32.9844 64.8789 29.8984 66 26.8125 66Z"
                fill="white"
              />

              <path
                d="M26.7699 53.8437L51.4162 9.6828C41.6847 3.40599 31.6358 0.935269 21.2509 2.49445C14.973 3.43699 8.5723 5.85225 2.04468 9.78966L26.7699 53.8437Z"
                stroke="white"
                strokeWidth="4.08927"
                strokeLinejoin="round"
              />
              <path
                d="M25.0664 56.8173L35.221 3.10684L37.0208 3.51555L26.8663 57.226L25.0664 56.8173Z"
                fill="white"
              />
              <path
                d="M23.9194 56.6422L42.3149 6.89301L44.0139 7.63665L25.6185 57.3859L23.9194 56.6422Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_166_33">
                <rect width="53.4606" height="66" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </NavbarIcon>
        <NavbarIcon
          onClick={handleOpen}
          className={open ? 'menu-open' : 'menu-close'}
        >
          <svg
            width="73"
            height="66"
            viewBox="0 0 73 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_166_22)">
              <path
                d="M36.3699 57.3381C35.7987 57.3381 35.2576 57.1132 34.8067 56.6636L0.686699 21.6504C0.0554011 21.008 -0.155043 20.0443 0.115512 19.177C0.356006 18.406 6.30823 0 36.3699 0C66.4316 0 72.3838 18.3739 72.6242 19.177C72.895 20.0443 72.6545 21.008 72.0531 21.6504L37.9331 56.6636C37.4822 57.1132 36.9411 57.3381 36.3699 57.3381V57.3381ZM4.95546 19.3375L36.3399 51.5561L67.7847 19.3375C65.9205 15.515 58.6757 4.81833 36.3699 4.81833C14.1844 4.81833 6.87943 15.5471 4.95546 19.3375Z"
                fill="white"
              />
              <path
                d="M61.7379 8.47912L60.3874 7.61511L36.207 50.7701L37.5576 51.6342L61.7379 8.47912Z"
                fill="white"
              />
              <path
                d="M50.6796 3.85502L49.0026 3.31876L35.6077 51.1454L37.2847 51.6816L50.6796 3.85502Z"
                fill="white"
              />
              <path
                d="M36.8525 3.69403H35.1072V52.104H36.8525V3.69403Z"
                fill="white"
              />
              <path
                d="M38.0824 54.574L23.7216 3.29846L22.009 3.84611L36.3699 55.1217L38.0824 54.574Z"
                fill="white"
              />
              <path
                d="M37.8921 53.1845L12.639 8.10614L11.1169 9.07964L36.37 54.158L37.8921 53.1845Z"
                fill="white"
              />
              <path
                d="M36.4113 66C33.4051 66 30.399 64.8757 27.4529 62.6594C26.521 61.9526 26.2204 60.6356 26.7615 59.5435L36.4113 47.5298L46.0611 59.5435C46.6022 60.6035 46.3016 61.9526 45.3697 62.6594C42.4236 64.9079 39.4174 66 36.4113 66V66Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_166_22">
                <rect width="72.7347" height="66" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </NavbarIcon>
      </NavbarMain>
      <NavbarItemContainer className={open ? 'open' : ''}>
        {pages.map((page) => {
          if (page.titre === 'Danses') {
            return (
              <Link key={page.id} href={`${page.slug}/flamenco`}>
                <NavbarItemText
                  className={
                    router.pathname.includes(page.slug) ? 'active' : ''
                  }
                >
                  {page.titre}
                </NavbarItemText>
              </Link>
            );
          } else {
            return (
              <Link key={page.id} href={page.slug}>
                <NavbarItemText
                  className={router.pathname === page.slug ? 'active' : ''}
                >
                  {page.titre}
                </NavbarItemText>
              </Link>
            );
          }
        })}
      </NavbarItemContainer>
    </NavbarWrapper>
  );
}
