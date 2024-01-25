import { styled } from 'linaria/react';
import { ArticleCard } from '@/src/components/Card';
import { MoreButton } from '@/src/components/Button';
import { TopFeatureCard } from '../Card/TopFeatureCard';
import { GetFeaturedArticleDatas } from '@/src/api/top';
import { FC } from 'react';

const SectionTitleWrap = styled.div`
  margin: 64px 0 45px 0;
`;

const HorizontalLine = styled.hr`
  width: 80px;
  height: 0px;
  border: 1px #000000 solid;
`;

const FeatureListSectionStyle = styled.div`
  height: auto;
  background-color: #dcdcdc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FeatureWrap = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

const Wrap = styled.div`
  margin: 40px 0;
`;

type Props = {
  featuredArticleDatas?: GetFeaturedArticleDatas;
};

export const TopFeatureSection: FC<Props> = ({ featuredArticleDatas }) => {
  return (
    <FeatureListSectionStyle>
      <SectionTitleWrap>
        <h2>注目の投資</h2>
        <HorizontalLine />
      </SectionTitleWrap>
      <FeatureWrap>
        {featuredArticleDatas &&
          featuredArticleDatas?.map((data, index) => {
            return index === 0 ? (
              <TopFeatureCard
                key={`attension-${index}`}
                url={data.url}
                imagePath={data.imagePath}
                title={data.title}
                date={data.date}
                tagList={data.tagList}
              />
            ) : (
              <ArticleCard
                key={`attension-${index}`}
                imageTagText={data.imageTagText ?? ''}
                url={data.url}
                imagePath={data.imagePath}
                title={data.title}
                date={data.date}
                tagList={data.tagList}
              />
            );
          })}
      </FeatureWrap>
      <Wrap>
        <MoreButton url='/' text='記事一覧' />
      </Wrap>
    </FeatureListSectionStyle>
  );
};
