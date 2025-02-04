import { useSearchParams, useNavigate } from 'react-router-dom';

import { useGetRequestWithoutToken, useToken } from '@/utils/api';

type AuthResponse = {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    email: string;
  };
};

const OAuthCallback = () => {
  const { setAccessToken } = useToken();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code');

  const { data, isLoading } = useGetRequestWithoutToken<AuthResponse>(
    ['google-code'],
    `/api/v1/auth/google/callback?code=${code}`,
    {
      refetchOnWindowFocus: true,
    }
  );

  if (isLoading) return <div>Loading...</div>;

  if (data) {
    setAccessToken(data.access_token);
    localStorage.setItem('accessToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);
    navigate('/signup');
  }

  return null;
};

export default OAuthCallback;
