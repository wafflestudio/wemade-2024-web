import { useSearchParams } from 'react-router-dom';

import { useGetRequest } from '@/utils/api';

type AuthResponse = {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    email: string;
  };
};

export const Home = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  console.log(code);
  const { data, isLoading } = useGetRequest<AuthResponse>(
    ['google-code'],
    `/api/v1/auth/google/callback?code=${code}`,
    {
      refetchOnWindowFocus: true,
    }
  );
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (data) {
    localStorage.setItem('accessToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);
  } else if (!data || !code) {
    window.location.href = '/';
  }
  return <div>Home</div>;
};
