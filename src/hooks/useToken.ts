import { useQueryClient } from '@tanstack/react-query';
export const useToken = () => {
  const queryClient = useQueryClient();

  const accessToken =
    queryClient.getQueryData<string>(['accessToken']) ||
    localStorage.getItem('accessToken');

  const setAccessToken = (token: string) => {
    queryClient.setQueryData(['accessToken'], token);
    localStorage.setItem('accessToken', token);
  };

  const clearTokens = () => {
    queryClient.removeQueries({ queryKey: ['accessToken'] });
    queryClient.removeQueries({ queryKey: ['refreshToken'] });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  return { accessToken, setAccessToken, clearTokens };
};
