import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import LoginButton from '@/components/LoginButton';
import { BLACK_LOGO } from '@/constants/images';
import { API_DOMAIN } from '@/utils/api';
export const Landing = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleLogin = async () => {
    setIsClicked(!isClicked);
    window.location.href = `${API_DOMAIN}/login`;
  };

  return (
    <Layout>
      <div className="flex h-full flex-col items-center justify-center">
        <div className="mb-[82px] flex flex-col items-center justify-center">
          <img
            src={BLACK_LOGO}
            alt="logo"
            className="w-[274.8px]"
          />
          <div className="font-isans text-xl text-titleBlack">
            안녕하세요 위메이드입니다.
          </div>
        </div>
        <LoginButton
          text="Google 계정으로 로그인하기"
          onClick={handleLogin}
          isClicked={isClicked}
        />
        <div className="my-[38px] flex w-[320px] items-center">
          <hr className="flex-grow border-t border-textGrey1" />
          <span className="mx-3.5 text-sm text-textGrey1">OR</span>
          <hr className="flex-grow border-t border-textGrey1" />
        </div>
        <div className="text-[15px] text-textGrey2">
          처음이시라면?
          <Link
            to="/signup"
            className="ml-2.5 font-psemibold text-textGreen underline"
          >
            회원가입하기
          </Link>
        </div>
      </div>
    </Layout>
  );
};
