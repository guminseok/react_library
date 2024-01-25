import { styled } from 'linaria/react';
import { css } from 'linaria';
import Link from 'next/link';
import { FC } from 'react';

const PaginationStyle = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    justify-content: left;
  }
`;

const LinkStyle = css`
  text-decoration-line: none;
  color: #bbbbbb;
  padding: 0 10px;
`;

const PageActive = css`
  color: #343434;
`;

type Props = {
  page: number;
  setPage: () => void;
};

export const Pagination: FC<Props> = () => {
  return (
    <PaginationStyle>
      <Link href={'/'} className={`${LinkStyle} ${PageActive}`}>
        1
      </Link>
      <Link href={'/'} className={LinkStyle}>
        2
      </Link>
      <Link href={'/'} className={LinkStyle}>
        3
      </Link>
      <Link href={'/'} className={LinkStyle}>
        4
      </Link>
      <Link href={'/'} className={LinkStyle}>
        →
      </Link>
    </PaginationStyle>
  );
};
