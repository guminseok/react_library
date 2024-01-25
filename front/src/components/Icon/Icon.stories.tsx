import { storiesOf } from '@storybook/react';
import { ScrollTopIcon } from './ScrollTopIcon';
import { MagnifyingGlassIcon } from './MagnifyingGlassIcon';
import { HomeIcon } from './HomeIcon';
import { StreetIcon } from './StreetIcon';
import { BoardIcon } from './BoardIcon';
import { LibraryIcon } from './LibraryIcon';
import { styled } from 'linaria/lib/react';

const stories = storiesOf('components/Icon', module);

const IconListWrap = styled.div`
  background: #dcdcdc;
  width: 30%;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
`;

const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconText = styled.span`
  color: #333333;
  font-size: 10px;
  padding-top: 8px;
`;

stories.add('default', () => {
  return (
    <IconListWrap>
      <IconWrap>
        <MagnifyingGlassIcon width={30} height={30} />
        <IconText>MagnifyingGlass</IconText>
      </IconWrap>
      <IconWrap>
        <ScrollTopIcon width={30} height={30} />
        <IconText>ScrollTop</IconText>
      </IconWrap>
      <IconWrap>
        <HomeIcon size={40} />
        <IconText>ホーム</IconText>
      </IconWrap>
      <IconWrap>
        <StreetIcon size={40} />
        <IconText>金融街</IconText>
      </IconWrap>
      <IconWrap>
        <BoardIcon size={40} />
        <IconText>コミュニティ</IconText>
      </IconWrap>
      <IconWrap>
        <LibraryIcon size={40} />
        <IconText>Library</IconText>
      </IconWrap>
    </IconListWrap>
  );
});
