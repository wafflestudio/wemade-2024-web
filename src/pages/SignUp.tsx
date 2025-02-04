import React from 'react';
import { Link } from 'react-router-dom';

import BACK_BUTTON from '@/assets/icons/backward-icon.svg';
import Input from '@/components/common/Input.tsx';
import { GRAY_LOGO } from '@/constants/images.ts';

const SignUp = () => {
  return (
    <div className="mx-auto flex h-full w-full max-w-[330px] flex-col justify-center gap-8">
      <div className="flex w-full flex-col items-start">
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
          src={GRAY_LOGO}
          alt="logo"
          className="mb-4 h-[18px] w-[84px]"
        />
        <p className="text-[25.2px] font-black text-black">회원가입</p>
      </div>

      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-textGray2"
          >
            이메일
          </label>
          <div className="flex items-center gap-3">
            <Input
              id="email"
              placeholder="이메일을 입력하세요."
              className="h-9"
            />
            <button className="h-9 whitespace-nowrap rounded-md border border-borderGray bg-backgroundGray px-4 py-2 text-[15px] font-medium leading-[17.9px] transition-colors hover:bg-[#E0D9C6]">
              인증하기
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-textGray2"
          >
            전화번호
          </label>
          <Input
            id="phone"
            placeholder="전화번호를 입력하세요."
            className="h-9"
          />
        </div>

        <div className="flex flex-col gap-1.5 pb-2">
          <label
            htmlFor="title"
            className="text-sm font-medium text-textGray2"
          >
            직책
          </label>
          <Input
            id="title"
            placeholder="직책을 입력하세요."
            className="h-9"
          />
        </div>

        <button className="mb-14 mt-3 h-9 whitespace-nowrap rounded-md bg-backgroundGray px-4 py-2 text-[15px] font-medium leading-[17.9px] text-textGray1 transition-colors hover:bg-[#E0D9C6]">
          다음
        </button>
      </form>
    </div>
  );
};

export default SignUp;
