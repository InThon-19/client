import { useQuery as useReactQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

import { client } from '@util/api';

type QueryKey<V extends object | undefined> = V extends undefined ? [string] : [string, V];
type UseQueryOptions<T, V extends object | undefined> = Omit<
  Parameters<typeof useReactQuery<T, Error, T, QueryKey<V>>>[0],
  'queryKey' | 'queryFn'
>;

interface Props<T, V extends object | undefined> {
  queryKey: QueryKey<V>;
  config?: Omit<AxiosRequestConfig, 'params'>;
  options?: UseQueryOptions<T, V>;
}

export const useQuery = <Res = any, Req extends object | undefined = undefined>(props: Props<Res, Req>) => {
  const { queryKey, config, options } = props;

  const result = useReactQuery({
    queryKey,
    queryFn: ({ queryKey }) => {
      const [url, params] = queryKey;
      return client.get<Req, Res>(url, { params, ...config });
    },
    ...options,
  });

  return result;
};
