import { css } from 'linaria';
import Image from 'next/image';
import { FC } from 'react';

const IconStyle = css`
  cursor: pointer;
`;

type Props = {
  size: number;
};

export const BoardIcon: FC<Props> = ({ size }) => {
  return (
    <Image
      className={IconStyle}
      src='/images/board_icon.svg'
      alt='home-icon'
      width={size}
      height={size}
    />
  );
};
