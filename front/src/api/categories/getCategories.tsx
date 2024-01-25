import useSWR from 'swr';
import { ResponseError, fetcher } from '@/src/api';

export type GetCategoriesDatas = GetCategoriesData[];
export type GetCategoriesData = {
  text: string;
  url: string;
  tagList: TagList[];
};
export type TagList = {
  url: string;
  tagName: string;
}

const requestUrl = '/categories';

export const useGetCategories = () =>
  useSWR<GetCategoriesDatas, ResponseError>(
    requestUrl,
    () => fetcher({ path: requestUrl }),
    { revalidateIfStale: false },
  );
