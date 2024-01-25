import { css } from 'linaria';
import Image from 'next/image';
import { FC } from 'react';

const IconStyle = css`
  cursor: pointer;
`;

type Props = {
  width: number;
  height: number;
};

export const ScrollTopIcon: FC<Props> = ({ width, height }) => {
  return (
    <Image
      className={IconStyle}
      src='/images/scroll-top-icon.svg'
      alt='scroll-top-icon'
      width={width}
      height={height}
    />
  );
};
