import { storiesOf } from '@storybook/react';
import { styled } from 'linaria/lib/react';
import React from 'react';
import { ArticleCard } from './ArticleCard';
import { TopFeatureCard } from './TopFeatureCard';
import { TopRankingCard } from './TopRankingCard';

const stories = storiesOf('components/Card', module);

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

const CardWrap = styled.div`
  margin: 20px;
`;

stories.add('default', () => {
  return (
    <Wrap>
      <CardWrap>
        <ArticleCard
          url={'/'}
          imageTagText='注目の投資'
          imagePath={'/images/dummy01.png'}
          title='新NISAの登場で一般NISAからのロールオーバーが可能に！'
          date='2022/9/8'
          tagList={['#hoge', '#huga']}
        />
      </CardWrap>

      <CardWrap>
        <TopRankingCard
          url={'/'}
          imageTagText='注目の投資'
          imagePath={'/images/dummy01.png'}
          title='新NISAの登場で一般NISAからのロールオーバーが可能に！'
          date='2022/9/8'
          tagList={['#hoge', '#huga']}
        />
      </CardWrap>

      <CardWrap>
        <TopFeatureCard
          url={'/'}
          imagePath={'/images/dummy01.png'}
          title='新NISAの登場で一般NISAからのロールオーバーが可能に！'
          date='2022/9/8'
          tagList={['#hoge', '#huga']}
        />
      </CardWrap>
    </Wrap>
  );
});
