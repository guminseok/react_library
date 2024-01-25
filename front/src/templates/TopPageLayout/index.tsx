import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { ScrollTopButton } from '@/src/components/Button';
import { TopAdSection } from '@/src/components/TopAdSection/TopAdSection';
import { TopFeatureSection } from '@/src/components/TopFeatureSection';
import { TopHeroSection } from '@/src/components/TopHeroSection';
import { TopRankingSection } from '@/src/components/TopRankingSection';
import { FC, useState } from 'react';
import { styled } from 'linaria/lib/react';
import { useGetArticleInfo } from '@/src/api/top';
import { useGetCategories } from '@/src/api/categories';
import { CategoryMenu } from '@/src/components/CategoryMenu';

const TopPageLayoutStyle = styled.div`
  background: #dcdcdc;
  padding-top: 30px;
  @media (max-width: 60em) {
    width: 1200px;
  }
`;

const TopPageLayoutStyleInner = styled.div`
  width: 1020px;
  margin: 125px auto 0;
  background: #fff;
`;

export const TopPageLayout: FC = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const { data: articleDatas } = useGetArticleInfo();
  const { data: categories } = useGetCategories();
  const heroArticleDatas = articleDatas?.heroArticleDatas;
  const featuredArticleDatas = articleDatas?.featuredArticleDatas;
  const rankingArticleDatas = articleDatas?.rankingArticleDatas;

  const toggleHamburgerMenu = () =>
    setHamburgerOpen((hamburgerOpen) => !hamburgerOpen);

  if (!heroArticleDatas || !featuredArticleDatas || !rankingArticleDatas)
    return null;
  if (!categories)
    return null;
  return (
    <TopPageLayoutStyle>
      <Header
        toggleHamburgerMenu={toggleHamburgerMenu}
        hamburgerOpen={hamburgerOpen}
        categories={categories}
      />
      <CategoryMenu />
      <TopPageLayoutStyleInner>
        <TopHeroSection heroArticleDatas={heroArticleDatas} />
        <TopAdSection />
        <TopFeatureSection featuredArticleDatas={featuredArticleDatas} />
        <TopRankingSection rankingArticleDatas={rankingArticleDatas} />
        <ScrollTopButton />
      </TopPageLayoutStyleInner>
      <Footer />
    </TopPageLayoutStyle>
  );
};
