import { Header } from '@/src/components/Header';
import { FC, useState } from 'react';
import { styled } from 'linaria/lib/react';
import { useGetArticles } from '@/src/api/articles';
import { CategoryMenu } from '@/src/components/CategoryMenu';
import { Articles } from '@/src/components/Articles';
import { Pagination } from '@/src/components/Pagination';

const ArticlesLayoutStyle = styled.div`
  display: flex;
  justify-content: center;
  background: #dcdcdc;
  padding-bottom: 50px;
  @media (max-width: 60em) {
    width: 1200px;
  }
`;

const ArticleSection = styled.div`
  padding-top: 125px;
  width: 100%;
  max-width: 1200px;

  @media screen and (max-width: 768px) {
    padding-top: 75px;
  }
`;

const HorizontalLine = styled.hr`
  height: 1px;
  width: 1000px;
  border: none;
  margin: 30px auto;
  border-top: 1px #bbbbbb solid;
  text-align: center;
`;

type Props = {
  keyword: any;
};

export const ArticlesPageLayout: FC<Props> = ({ keyword }) => {
  const [page, setPage] = useState<number>(1);
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const toggleHamburgerMenu = () =>
    setHamburgerOpen((hamburgerOpen) => !hamburgerOpen);

  const { data: articles } = useGetArticles(keyword);

  if (!articles) return null;

  return (
    <ArticlesLayoutStyle>
      <Header
        toggleHamburgerMenu={toggleHamburgerMenu}
        hamburgerOpen={hamburgerOpen}
      />
      <CategoryMenu />
      <ArticleSection>
        <Articles articles={articles} />
        <HorizontalLine />
        <Pagination page={page} setPage={() => setPage} />
      </ArticleSection>
    </ArticlesLayoutStyle>
  );
};
