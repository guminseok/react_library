import { css } from 'linaria';
import { styled } from 'linaria/react';
import React, { FC } from 'react';
import { HamburgerButton, HamburgerXButton } from '@/src/components/Button';
import { HamburgerAccordion } from '../HamburgerAccordion';
import { HamburgerAccordionItem } from '../HamburgerAccordion/HamburgerAccordionItem';
import { GetCategoriesDatas } from '@/src/api/categories';

const showMenu = css`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  transition: 1s;
  background: rgba(52, 52, 52, 0.95);
  padding-bottom: 100%;
`;

const hideMenu = css`
  width: 376px;
  height: 500px;
  position: absolute;
  top: 0px;
  left: -100%;
  transition: 1s;
`;

const HamburgerButtonStyle = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const HamburgerXButtonStyle = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const displayNone = css`
  display: none;
`;

const HamburgerAccordionStyle = styled.div`
  margin-top: 65px;
  vertical-align: middle;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

const CategoryStyle = styled.div`
  /* position: fixed; */
  width: 100%;
  height: 50px;
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #DCD081;
`;

const CategoryTextStyle = styled.div`
  padding-left: 65px;
  height: 52px;
  display: table-cell;
  vertical-align: middle;
`;

type Props = {
  toggleHamburgerMenu: () => void;
  hamburgerOpen: boolean;
  categories: GetCategoriesDatas;
};

export const HamburgerMenu: FC<Props> = ({
  toggleHamburgerMenu,
  hamburgerOpen,
  categories,
}) => {
  return (
    <div>
      <HamburgerButtonStyle
        className={hamburgerOpen ? displayNone : undefined}
        onClick={() => toggleHamburgerMenu()}
      >
        <HamburgerButton />
      </HamburgerButtonStyle>
      <div className={hamburgerOpen ? showMenu : hideMenu}>
        <HamburgerXButtonStyle onClick={() => toggleHamburgerMenu()}>
          <HamburgerXButton />
        </HamburgerXButtonStyle>
        <HamburgerAccordionStyle>
          <CategoryStyle>
             <CategoryTextStyle>カテゴリ</CategoryTextStyle>
          </CategoryStyle>
          {categories.map((data, index) =>{
            return (
              <div key={index}>
                <HamburgerAccordion menuText={data.text} checkText={data.tagList[index]}>
                  {data.tagList.map((item, index) => {
                    return (
                      <HamburgerAccordionItem 
                        key={`tag-${index}`}
                        url={item.url}
                        tagName={item.tagName}
                      />
                    );
                  })}
                </HamburgerAccordion>
              </div>
            );
          })}
        </HamburgerAccordionStyle>
      </div>
    </div>
  );
};
