import { css } from 'linaria';
import Image from 'next/image';
import { FC } from 'react';

const IconStyle = css`
  cursor: pointer;
`;

type Props = {
  size: number;
};

export const StreetIcon: FC<Props> = ({ size }) => {
  return (
    <Image
      className={IconStyle}
      src='/images/street_icon.svg'
      alt='home-icon'
      width={size}
      height={size}
    />
  );
};
