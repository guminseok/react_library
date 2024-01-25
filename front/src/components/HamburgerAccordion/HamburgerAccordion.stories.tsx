import { storiesOf } from '@storybook/react';
import { styled } from 'linaria/lib/react';
import React from 'react';
import { HamburgerAccordion } from '.';
import { HamburgerAccordionItem } from './HamburgerAccordionItem';

const stories = storiesOf('components/HamburgerAccordion', module);

const Wrap = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  background: #d3d3d3;
`;

const AccordionWrap = styled.div`
  background: #52a0e9;
  width: 600px;
`;

const mockData = {
  text: 'ブロックチェーン',
  url: '#',
  tagList: [
    { url: '#', tagName: 'ブロックチェーン' },
    { url: '#', tagName: '仮想通貨' },
    { url: '#', tagName: 'NFT' },
    { url: '#', tagName: 'セキュリティトークン' },
    { url: '#', tagName: 'スマートコントラクト' },
    { url: '#', tagName: 'Web3' },
    { url: '#', tagName: 'メタバース' },
  ],
};

stories.add('default', () => {
  return (
    <Wrap>
      <AccordionWrap>
        <HamburgerAccordion menuText={mockData.text} checkText={mockData.tagList[0]}>
          <ul>
            {mockData.tagList.map((item, index) => {
              return (
                <HamburgerAccordionItem
                  key={`tag-${index}`}
                  url={item.url}
                  tagName={item.tagName}
                />
              );
            })}
          </ul>
        </HamburgerAccordion>
      </AccordionWrap>
    </Wrap>
  );
});
