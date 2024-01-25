import { styled } from 'linaria/react';
import { ScrollTopIcon } from '@/src/components/Icon';

const IconSize = 50;
const ScrollTopButtonStyle = styled.div`
  position: fixed;
  right: 30px;
  bottom: 50px;
  transform: translate(-50%);
`;

const onClickScrollTop = () => {
  window.scroll({ top: 0, behavior: 'smooth' });
};

export const ScrollTopButton = () => {
  return (
    <ScrollTopButtonStyle onClick={onClickScrollTop}>
      <ScrollTopIcon width={IconSize} height={IconSize} />
    </ScrollTopButtonStyle>
  );
};
