import useSWR from 'swr';
import { ResponseError, fetcher } from '@/src/api';

export type GetHeroArticleDatas = GetHeroArticleData[];
export type GetHeroArticleData = {
  id: number;
  url: string;
  imagePath: string;
  title: string;
  date: string;
  tagList: string[];
};

export type GetFeaturedArticleDatas = GetFeaturedArticleData[];
export type GetFeaturedArticleData = {
  id: number;
  url: string;
  imageTagText?: string;
  imagePath: string;
  title: string;
  date: string;
  tagList: string[];
};

export type GetRankingArticleDatas = GetRankingArticleData[];
export type GetRankingArticleData = {
  id: number;
  url: string;
  imageTagText: string;
  imagePath: string;
  title: string;
  date: string;
  tagList: string[];
};

export type TopArticleDatas = {
  heroArticleDatas: GetHeroArticleDatas;
  featuredArticleDatas: GetFeaturedArticleDatas;
  rankingArticleDatas: GetRankingArticleDatas;
};

const requestUrl = '/top/article-info';

export const useGetArticleInfo = () =>
  useSWR<TopArticleDatas, ResponseError>(
    requestUrl,
    () => fetcher({ path: requestUrl }),
    { revalidateIfStale: false },
  );
