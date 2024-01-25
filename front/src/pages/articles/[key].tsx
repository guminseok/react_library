import type { GetStaticProps, NextPage } from 'next';
import { ArticlesPageLayout } from '@/src/templates/ArticlesPageLayout';

type Props = {
  keyword: any;
};

const Keyword: NextPage<Props> = ({ keyword }) => {
  return <ArticlesPageLayout keyword={keyword} />;
};

export default Keyword;

export async function getStaticPaths() {
  const keywords = ['featured-investment', 'basic-investment', 'foo', 'bar'];

  const paths = keywords.map((keyword) => ({
    params: {
      key: `${keyword}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const keyword = params?.key;
  return {
    props: {
      keyword,
    },
  };
};
