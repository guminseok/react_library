import { styled } from 'linaria/react';
import { css } from 'linaria';
import Link from 'next/link';
import { FC } from 'react';

const ItemStyle = styled.div`
  color: #ffffff;
  margin-top: 30px;
`;

const LinkStyle = css`
  text-decoration-line: none;
`;

type Props = {
  url: string;
  tagName: string;
};

export const HamburgerAccordionItem: FC<Props> = ({ url, tagName }) => {

  return (
    <Link href={url} className={LinkStyle}>
      <ItemStyle>{tagName}</ItemStyle>
    </Link>
  );
};
