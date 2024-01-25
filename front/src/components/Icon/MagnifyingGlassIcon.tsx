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

export const MagnifyingGlassIcon: FC<Props> = ({ width, height }) => {
  return (
    <Image
      className={IconStyle}
      src='/images/magnifying-glass-icon.svg'
      alt='magnifying-glass-icon'
      width={width}
      height={height}
    />
  );
};
