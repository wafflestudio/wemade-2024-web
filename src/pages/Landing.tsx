import { Link } from 'react-router-dom';

import Button from '@/components/common/Button.tsx';
import { BLACK_LOGO } from '@/constants/images.ts';

const Landing = () => {
  const handleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${import.meta.env.VITE_DOMAIN}/auth/callback&prompt=consent&response_type=code&client_id=${import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}&scope=openid%20email%20profile&access_type=offline`;
  };

  return (
    <div className="flex h-full w-[320px] flex-col items-center justify-center">
      <img
        src={BLACK_LOGO}
        alt="logo"
        className="mb-[18px] w-[274.8px]"
      />
      <p className="mb-[82px] text-[25.2px] font-black text-black">
        안녕하세요 위메이드입니다.
      </p>
      <Button
        label="Google 계정으로 로그인하기"
        theme="white"
        size="large"
        onClick={handleLogin}
        className="!font-medium"
      />
      <div className="my-[38px] flex w-[320px] items-center">
        <hr className="flex-grow border-t border-textGray1" />
        <span className="mx-3.5 text-sm text-textGray1">OR</span>
        <hr className="flex-grow border-t border-textGray1" />
      </div>
      <div className="text-[15px]">
        <span className="text-textGray2">처음이시라면?</span>
        <Link
          to="/auth/signup"
          className="ml-2.5 font-semibold text-textGreen underline"
        >
          회원가입하기
        </Link>
      </div>
    </div>
  );
};

export default Landing;
