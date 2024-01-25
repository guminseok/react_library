/* eslint-disable no-undef */
import getConfig from 'next/config';
import { ResponseError } from '@/src/api';

type Params = {
  path: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: RequestInit['body'];
  customHeaders?: RequestInit['headers'];
  customConfig?: RequestInit;
};

const {
  publicRuntimeConfig: { NEXT_PUBLIC_API_URL },
} = getConfig();

export const fetcher = async <T = any>({
  path,
  method = 'GET',
  body,
  customHeaders,
  customConfig,
}: Params): Promise<T> => {
  const config = {
    method,
    body: body ?? null,
    headers: {
      ...customHeaders,
    },
    ...customConfig,
  };

  const response = await fetch(`${NEXT_PUBLIC_API_URL}${path}`, { ...config });

  let data: any;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (response.ok) {
    return data;
  }

  const error: ResponseError = {
    isError: true,
    statusCode: response.status,
    statusMessage: response.statusText,
    errors: response.status === 400 ? data.errors : null,
    message: response.status === 422 ? data.message : null,
  };
  return Promise.reject(error);
};
