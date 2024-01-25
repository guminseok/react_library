import { styled } from 'linaria/react';
import { css } from 'linaria';
import Link from 'next/link';
import { FC } from 'react';

const ItemStyle = styled.div`
  padding: 16px;
  height: 50px;
  width: 300px;
  background: #343434;
  color: #ffffff;
  &:hover {
    background: #ffffff;
    color: #343434;
  }
`;

const LinkStyle = css`
  text-decoration-line: none;
`;

type Props = {
  url: string;
  tagName: string;
};

export const AccordionItem: FC<Props> = ({ url, tagName }) => {
  return (
    <Link href={url} className={LinkStyle}>
      <ItemStyle>{tagName}</ItemStyle>
    </Link>
  );
};
