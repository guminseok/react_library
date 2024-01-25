import useSWR from 'swr';
import { ResponseError, fetcher } from '@/src/api';

export type GetSampleData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
// const requestUrl = 'https://jsonplaceholder.typicode.com/todos/1';
const requestUrl = '/sample';

export const useGetSample = () =>
  useSWR<GetSampleData, ResponseError>(requestUrl, () =>
    fetcher({ path: requestUrl }),
  );
