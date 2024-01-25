import useSWR from 'swr';
import { ResponseError, fetcher } from '@/src/api';

export type GetFeaturedArticleDatas = GetFeaturedArticleData[];
export type GetFeaturedArticleData = {
  id: number;
  url: string;
  imageTagText: string;
  imagePath: string;
  title: string;
  date: string;
  tagList: string[];
};

const requestUrl = '/articles/';

export const useGetArticles = (key: any) =>
  useSWR<GetFeaturedArticleDatas, ResponseError>(
    requestUrl,
    () => fetcher({ path: `${requestUrl}${key}` }),
    { revalidateIfStale: false },
  );
