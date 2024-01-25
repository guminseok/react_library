import { styled } from 'linaria/react';
import { css } from 'linaria';
import {
  HomeIcon,
  StreetIcon,
  BoardIcon,
  LibraryIcon,
} from '@/src/components/Icon';
import { HamburgerMenu } from '@/src/components/HamburgerMenu';
import { GetCategoriesDatas } from '@/src/api/categories';
import Link from 'next/link';
import { FC } from 'react';

const HeaderNavStyle = styled.header`
  position: fixed;
  top: 0;
  background: rgb(13, 14, 16, 0.8);
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  justify-content: center;
  @media screen and (max-width: 768px) {
    justify-content: left;
  }
`;

const TitleStyled = styled.div`
  color: white;
  margin: 0px 35px 0px 10px;
  font-size: 16px;
`;

const HeaderUlStyle = styled.ul`
  display: flex;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LinkStyle = css`
  text-decoration-line: none;
  align-items: center;
  display: flex;
`;

const HeaderIconSize = 40;

const HeaderIconList = [
  {
    icon: <HomeIcon size={HeaderIconSize} />,
    title: 'ホーム',
    url: '#',
  },
  {
    icon: <StreetIcon size={HeaderIconSize} />,
    title: '金融街',
    url: '#',
  },
  {
    icon: <BoardIcon size={HeaderIconSize} />,
    title: 'コミュニティ',
    url: '#',
  },
  {
    icon: <LibraryIcon size={HeaderIconSize} />,
    title: 'Library',
    url: '#',
  },
];

type Props = {
  toggleHamburgerMenu: () => void;
  hamburgerOpen: boolean;
  categories: GetCategoriesDatas;
};

export const Header: FC<Props> = ({ toggleHamburgerMenu, hamburgerOpen, categories }) => {
  return (
    <HeaderNavStyle>
      <HamburgerMenu
        toggleHamburgerMenu={toggleHamburgerMenu}
        hamburgerOpen={hamburgerOpen}
        categories={categories}
      />
      <nav>
        <HeaderUlStyle>
          {HeaderIconList.map((data, index) => {
            return (
              <li key={index}>
                <Link href={data.url} className={LinkStyle}>
                  {data.icon}
                  <TitleStyled>{data.title}</TitleStyled>
                </Link>
              </li>
            );
          })}
        </HeaderUlStyle>
      </nav>
    </HeaderNavStyle>
  );
};
