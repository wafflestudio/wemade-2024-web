import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryKey,
  useQueries,
} from '@tanstack/react-query';
import { useToken } from '@/hooks/useToken';

export const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type FetchOptions = {
  endpoint: string;
  method: RequestMethod;
  headers?: Record<string, string>;
  body?: any;
  accessToken?: string | null;
  clearTokens?: () => void;
};
export const fetchData = async <T>({
  endpoint,
  method,
  headers,
  body,
  accessToken,
  clearTokens,
}: FetchOptions) => {
  const url = `${API_DOMAIN}${endpoint}`;
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    if (response.status === 401) {
      clearTokens?.();
    }
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong!');
  }

  return response.json();
};

const fetchDataWithoutToken = async <T>({
  endpoint,
  method,
  headers,
  body,
}: FetchOptions) => {
  const url = `${API_DOMAIN}${endpoint}`;
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong!');
  }

  return response.json();
};
// GET request
export const useGetRequest = <T>(
  queryKey: QueryKey,
  endpoint: string,
  options?: Omit<UseQueryOptions<T>, 'queryKey'>
) => {
  const { accessToken, clearTokens } = useToken();
  return useQuery<T>({
    queryKey,
    queryFn: () =>
      fetchData<T>({ endpoint, method: 'GET', accessToken, clearTokens }),
    ...options,
  });
};

export const useGetRequests = <T>(
  queries: {
    queryKey: QueryKey;
    endpoint: string;
    options?: Omit<UseQueryOptions<T>, 'queryKey'>;
  }[]
) => {
  const { accessToken, clearTokens } = useToken();
  const results = useQueries({
    queries: queries.map(({ queryKey, endpoint, options }) => ({
      queryKey,
      queryFn: () =>
        fetchData<T>({ endpoint, method: 'GET', accessToken, clearTokens }),
      ...options,
    })),
  });
  return results;
};

export const useGetRequestWithoutToken = <T>(
  queryKey: QueryKey,
  endpoint: string,
  options?: Omit<UseQueryOptions<T>, 'queryKey'>
) => {
  return useQuery<T>({
    queryKey,
    queryFn: () => fetchDataWithoutToken<T>({ endpoint, method: 'GET' }),
    ...options,
  });
};

// POST request
export const usePostRequest = <T, Variables>(
  endpoint: string,
  options?: UseMutationOptions<T, Error, Variables>
) => {
  const { accessToken, clearTokens } = useToken();
  return useMutation<T, Error, Variables>({
    mutationFn: (variables: Variables) => {
      return fetchData<T>({
        endpoint,
        method: 'POST',
        body: variables,
        accessToken,
        clearTokens,
      });
    },
    ...options,
  });
};

// PUT request
export const usePutRequest = <T, Variables>(
  endpoint: string,
  options?: UseMutationOptions<T, Error, Variables>
) => {
  const { accessToken, clearTokens } = useToken();

  return useMutation<T, Error, Variables>({
    mutationFn: (variables: Variables) => {
      return fetchData<T>({
        endpoint,
        method: 'PUT',
        body: variables,
        accessToken,
        clearTokens,
      });
    },
    ...options,
  });
};

// DELETE request
export const useDeleteRequest = <T, Variables>(
  endpoint: string,
  options?: UseMutationOptions<T, Error, Variables>
) => {
  const { accessToken, clearTokens } = useToken();

  return useMutation<T, Error, Variables>({
    mutationFn: (variables: Variables) => {
      return fetchData<T>({
        endpoint,
        method: 'DELETE',
        body: variables,
        accessToken,
        clearTokens,
      });
    },
    ...options,
  });
};

// PATCH request
export const usePatchRequest = <T, Variables>(
  endpoint: string,
  options?: UseMutationOptions<T, Error, Variables>
) => {
  const { accessToken, clearTokens } = useToken();

  return useMutation<T, Error, Variables>({
    mutationFn: (variables: Variables) => {
      return fetchData<T>({
        endpoint,
        method: 'PATCH',
        body: variables,
        accessToken,
        clearTokens,
      });
    },
    ...options,
  });
};
