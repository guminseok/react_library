import { storiesOf } from '@storybook/react';
import { styled } from 'linaria/lib/react';
import React from 'react';
import { HamburgerButton } from './HamburgerButton';
import { HamburgerXButton } from './HamburgerXButton';
import { MoreButton } from './MoreButton';
import { ScrollTopButton } from './ScrollTopButton';

const stories = storiesOf('components/Button', module);

const Wrap = styled.div`
  padding: 30px;
  height: 100vh;
  width: 100%;
  background: #d3d3d3;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const ButtonText = styled.span`
  color: #343434;
  font-size: 16px;
`;

stories.add('default', () => {
  return (
    <Wrap>
      <ButtonWrap>
        <ButtonWrap>
          <HamburgerButton />
        </ButtonWrap>
        <ButtonText>hamburgerButton</ButtonText>
      </ButtonWrap>
      <ButtonWrap>
        <ButtonWrap>
          <HamburgerXButton />
        </ButtonWrap>
        <ButtonText>hamburgerXButton</ButtonText>
      </ButtonWrap>

      <ButtonWrap>
        <MoreButton url='/' text='記事一覧' />
        <ButtonText>MoreButton</ButtonText>
      </ButtonWrap>
      <ButtonWrap>
        <ScrollTopButton />
        <ButtonText>ScrollTopButton↘︎</ButtonText>
      </ButtonWrap>
    </Wrap>
  );
});
