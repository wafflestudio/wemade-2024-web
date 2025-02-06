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
    `/api/v1/auth/google/callback?code=${code}&profile=${import.meta.env.VITE_PROFILE}`,
    {
      refetchOnWindowFocus: true,
    }
  );

  if (isLoading) {
    return (
      <div className="relative mx-auto flex h-screen w-full max-w-[560px] flex-col items-center justify-center overflow-hidden">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-dashed border-pointColor"></div>

        <p className="animate-pulse text-lg font-medium text-gray-700">
          로그인 중...
        </p>
      </div>
    );
  }

  if (data) {
    setAccessToken(data.access_token);
    localStorage.setItem('accessToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);
    navigate('/auth/signup');
  }

  return null;
};

export default OAuthCallback;
