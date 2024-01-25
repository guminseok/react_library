import { GetFeaturedArticleDatas } from '@/src/api/articles';
import { styled } from 'linaria/react';
import { FC } from 'react';
import { ArticleCard } from '../Card';

const ArticlesStyle = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

type Props = {
  articles?: GetFeaturedArticleDatas;
};

export const Articles: FC<Props> = ({ articles }) => {
  return (
    <ArticlesStyle>
      {articles &&
        articles.map((article, index) => {
          return (
            <ArticleCard
              key={index}
              url={article.url}
              imageTagText={article.imageTagText}
              imagePath={article.imagePath}
              title={article.title}
              date={article.date}
              tagList={article.tagList}
            />
          );
        })}
    </ArticlesStyle>
  );
};
