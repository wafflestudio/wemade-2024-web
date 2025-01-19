import React from 'react';
import { Link } from 'react-router-dom';

import BigButton from '@/components/BigButton';
import { Layout } from '@/components/Layout';
import { GRAY_SMALL_LOGO, BACK_BUTTON, SIGNUP_LOGO } from '@/constants/images';

export const Signup = () => {
  return (
    <Layout>
      <div className="mx-auto flex h-full w-full max-w-[330px] flex-col justify-center gap-8">
        <div className="mb-8 flex w-full flex-col items-start">
          <Link
            to="/"
            className="mb-4 h-[30px] w-[30px]"
          >
            <img
              src={BACK_BUTTON}
              alt="back"
              className="cursor-pointer"
            />
          </Link>
          <img
            src={GRAY_SMALL_LOGO}
            alt="logo"
            className="mb-4 w-[120px]"
          />
          <img
            src={SIGNUP_LOGO}
            alt="signup"
            className="w-[120px]"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-textGrey2">이메일</label>
            <div className="flex items-center gap-3">
              <div className="flex w-full items-center rounded-md border border-borderGrey bg-backgroundWhite px-3 py-2">
                <input
                  type="email"
                  placeholder="이메일을 입력하세요."
                  className="flex-grow text-[15px] font-medium text-textGrey1 focus:outline-none"
                />
              </div>
              <button className="whitespace-nowrap rounded-md border border-borderGrey bg-backgroundGrey px-4 py-2 text-[15px] font-medium">
                인증하기
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-textGrey2">
              전화번호
            </label>
            <div className="flex w-full items-center rounded-md border border-borderGrey bg-backgroundWhite px-3 py-2">
              <input
                type="tel"
                placeholder="전화번호를 입력하세요."
                className="flex-grow text-[15px] font-medium text-textGrey1 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 pb-2">
            <label className="text-sm font-medium text-textGrey2">직책</label>
            <div className="flex w-full items-center rounded-md border border-borderGrey bg-backgroundWhite px-3 py-2">
              <input
                type="text"
                placeholder="직책을 입력하세요."
                className="flex-grow text-[15px] font-medium text-textGrey1 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <BigButton text="다음" />
      </div>
    </Layout>
  );
};
