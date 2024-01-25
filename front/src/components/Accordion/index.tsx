import { css } from 'linaria';
import { styled } from 'linaria/react';
import { FC, ReactNode } from 'react';
import { useAccordionActive } from '@/src/hooks/useAccordionActive';

type Props = {
  children?: ReactNode;
  menuText: string;
};

export const Accordion: FC<Props> = (props) => {
  const { accordionActive, toggleActive } = useAccordionActive();

  const AccordionContainer = styled.div`
    width: 160px;
    padding: 6px 0;
    display: flex;
    flex-direction: column;
  `;

  const AccordionContent = styled.div`
    position: absolute;
    margin: 44px 0;
    overflow: auto;
    transition: all 1s ease;
  `;

  const AccordionTitle = styled.div`
    cursor: pointer;
    color: #343434;
    font-size: 16px;
    height: 38px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const accordionHeight = accordionActive
    ? css`
        max-height: auto;
      `
    : css`
        max-height: 0;
      `;

  return (
    <AccordionContainer
      onMouseEnter={() => toggleActive(true)}
      onMouseLeave={() => toggleActive(false)}
    >
      <AccordionTitle>{props.menuText}</AccordionTitle>
      <AccordionContent className={accordionHeight}>
        {props.children}
      </AccordionContent>
    </AccordionContainer>
  );
};
