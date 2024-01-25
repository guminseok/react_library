import { styled } from 'linaria/react';
import Image from 'next/image';
import Link from 'next/link';

const HeaderLogoStyle = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%);
`;

export const HeaderLogo = () => {
  return (
    <HeaderLogoStyle>
      <Link href='/'>
        <Image src='/images/logo.svg' alt='logo' width={328} height={35} />
      </Link>
    </HeaderLogoStyle>
  );
};
