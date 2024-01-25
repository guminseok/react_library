import { GetRankingArticleDatas } from '@/src/api/top';
import { styled } from 'linaria/react';
import { FC } from 'react';
import { ArticleCard, TopRankingCard } from '@/src/components/Card';

const RankingSectionStyle = styled.div`
  height: auto;
  background-color: #dcdcdc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
  padding-bottom: 120px;
`;

const HorizontalLine = styled.hr`
  width: 80px;
  height: 0px;
  border: 1px #000000 solid;
`;

const RankingWrap = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  rankingArticleDatas: GetRankingArticleDatas;
};

export const TopRankingSection: FC<Props> = ({ rankingArticleDatas }) => {
  return (
    <RankingSectionStyle>
      <h2>RANKING</h2>
      <HorizontalLine />
      <RankingWrap>
        {rankingArticleDatas &&
          rankingArticleDatas?.map((data, index) => {
            if (index === 0 || index === 1) {
              return (
                <TopRankingCard
                  key={`ranking-${index}`}
                  url={data.url}
                  imageTagText={data.imageTagText}
                  imagePath={data.imagePath}
                  title={data.title}
                  date={data.date}
                  tagList={data.tagList}
                />
              );
            } else {
              return (
                <ArticleCard
                  key={`ranking-${index}`}
                  url={data.url}
                  imageTagText={data.imageTagText}
                  imagePath={data.imagePath}
                  title={data.title}
                  date={data.date}
                  tagList={data.tagList}
                />
              );
            }
          })}
      </RankingWrap>
    </RankingSectionStyle>
  );
};
