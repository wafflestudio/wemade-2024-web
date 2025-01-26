import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';

export const API_DOMAIN =
  'https://wemade-2024-server-h0csbcbdesdbe0ep.eastasia-01.azurewebsites.net';
// export const API_DOMAIN = 'http://192.168.136.200:8000';
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type FetchOptions = {
  endpoint: string;
  method: RequestMethod;
  headers?: Record<string, string>;
  body?: any;
};
export const fetchData = async <T>({
  endpoint,
  method,
  headers,
  body,
}: FetchOptions) => {
  const url = `${API_DOMAIN}${endpoint}`;
  console.log(url);
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
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
  queryKey: string[],
  endpoint: string,
  options?: Omit<UseQueryOptions<T>, 'queryKey'>
) => {
  return useQuery<T>({
    queryKey,
    queryFn: () => fetchData<T>({ endpoint, method: 'GET' }),
    ...options,
  });
};

// POST request
export const usePostRequest = <T, Variables>(
  endpoint: string,
  options?: UseMutationOptions<T, Error, Variables>
) => {
  return useMutation<T, Error, Variables>({
    mutationFn: (variables: Variables) => {
      return fetchData<T>({ endpoint, method: 'POST', body: variables });
    },
    ...options,
  });
};

// PUT request
export const usePutRequest = <T, Variables>(
  endpoint: string,
  options?: UseMutationOptions<T, Error, Variables>
) => {
  return useMutation<T, Error, Variables>({
    mutationFn: (variables: Variables) => {
      return fetchData<T>({ endpoint, method: 'PUT', body: variables });
    },
    ...options,
  });
};

// DELETE request
export const useDeleteRequest = <T, Variables>(
  endpoint: string,
  options?: UseMutationOptions<T, Error, Variables>
) => {
  return useMutation<T, Error, Variables>({
    mutationFn: (variables: Variables) => {
      return fetchData<T>({ endpoint, method: 'DELETE', body: variables });
    },
    ...options,
  });
};

// PATCH request
export const usePatchRequest = <T, Variables>(
  endpoint: string,
  options?: UseMutationOptions<T, Error, Variables>
) => {
  return useMutation<T, Error, Variables>({
    mutationFn: (variables: Variables) => {
      return fetchData<T>({ endpoint, method: 'PATCH', body: variables });
    },
    ...options,
  });
};
