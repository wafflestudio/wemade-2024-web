import { useSearchParams, useNavigate } from 'react-router-dom';

import { useToken } from '@/hooks/useToken';
import { useGetRequestWithoutToken } from '@/utils/api';

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
      <div className="flex h-full flex-col items-center justify-center">
        <svg
          className="h-12 w-12 animate-spin text-pointColor"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="100"
            strokeLinecap="round"
            opacity="0.3"
          />
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="100"
            strokeDashoffset="75"
            strokeLinecap="round"
          />
        </svg>

        <p className="mt-4 animate-pulse text-lg font-medium text-gray-600">
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
