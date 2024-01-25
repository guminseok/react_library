import { css } from 'linaria';
import { styled } from 'linaria/lib/react';
import Link from 'next/link';
import { FC } from 'react';

const LinkStyle = css`
  text-decoration: none;
`;

const MoreButtonStyle = styled.div`
  width: 300px;
  height: 50px;
  font-size: 24px;
  color: #343434;
  background: #dcd081;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-align: center;
  line-height: 50px;

  @media screen and (max-width: 768px) {
    width: 160px;
    height: 33px;
    font-size: 14px;
    line-height: 33px;
  }
`;

type Props = {
  url: string;
  text: string;
};

export const MoreButton: FC<Props> = ({ url, text }) => {
  return (
    <Link href={url} className={LinkStyle}>
      <MoreButtonStyle>{text}</MoreButtonStyle>
    </Link>
  );
};
