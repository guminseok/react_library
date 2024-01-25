import { css } from 'linaria';
import { styled } from 'linaria/react';
import { FC, ReactNode, useState } from 'react';
import { TagList } from '@/src/api/categories';

const HamburgerAccordionContentStyle = styled.div`
margin: 45px 0;
padding-left: 65px;
overflow: auto;
transition: all 1s ease;
`;

const HamburgerAccordionTextStyle = styled.div`
  list-style: none;
  color: #DCD081;
`;

type Props = {
  menuText: string;
  checkText: TagList;
  children?: ReactNode;
};

export const HamburgerAccordion: FC<Props> = (props) => {
  const [ HamburgerAccordionActive, toggleActive] = useState(false);

  const Open = HamburgerAccordionActive
    ? css`
      margin-right: 20%;
      float: right;
    `
    : css`
      display: none;
    `;
      
  const Close = HamburgerAccordionActive
    ? css`
      display: none;
    `
    : css`
      margin-right: 20%;
      float: right;
    `;

  const hrLine = HamburgerAccordionActive
    ? css`
      margin-left : 0;
      width: 80%;
    `
    : css`
      display: none;
    `;

  return (
    <HamburgerAccordionContentStyle>
      <HamburgerAccordionTextStyle>
        {props.checkText
        ? <div>
            <div onClick ={() => {
            toggleActive(!HamburgerAccordionActive);
          }}>
            ■{props.menuText}
              <span className={Close}>〉</span>
              <span className={Open}>∨</span>
          </div>
          <hr className={hrLine}/>
          </div>
        : <div>■{props.menuText}</div>
      }
      </HamburgerAccordionTextStyle>
      {HamburgerAccordionActive && props.children}  
    </HamburgerAccordionContentStyle>
  );
};
