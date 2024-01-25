import { styled } from 'linaria/lib/react';
import { MagnifyingGlassIcon } from '../Icon';

const LogoSize = 25;
const HeaderSearchStyle = styled.div`
  width: 200px;
  margin-right: 28px;
  border-bottom: 1px solid #000000;
  display: flex;
`;

export const HeaderSearch = () => {
  return (
    <HeaderSearchStyle>
      <MagnifyingGlassIcon width={LogoSize} height={LogoSize} />
      <form>
        <input></input>
      </form>
    </HeaderSearchStyle>
  );
};
