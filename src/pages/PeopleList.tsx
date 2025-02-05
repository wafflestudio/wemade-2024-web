import React from 'react';

import SearchBar from '@/components/common/SearchBar';
import Tag from '@/components/InfoCard/Tag';
import { PEOPLELIST } from '@/constants/images.ts';

const PeopleList = () => {
  return (
    <div className="grid h-screen w-full grid-cols-[1fr_3fr_2fr_1fr]">
      <div className="h-full bg-transparent"></div>

      {/* 메인 바디*/}
      <div className="h-full">
        <div className="flex flex-col items-start justify-start gap-4 px-2.5">
          <img
            src={PEOPLELIST}
            alt="logo"
            className="relative h-6 w-24"
          />
          <SearchBar placeholder="여기에서 사람을 검색하세요." />

          {/* 소속 부서 */}
          <div className="inline-flex items-center justify-start gap-2">
            <Tag label="위메이드" />
            <div className="text-2xl text-textGreen"> / </div>
            <Tag label="기술센터" />
            <div className="text-2xl text-textGreen"> / </div>
            <Tag label="정보보안실" />
            <div className="text-2xl text-textGreen"> / </div>
            <Tag label="인프라보안팀" />
          </div>
        </div>
      </div>

      {/* 서브 바디 */}
      <div className="h-full rounded-md bg-yellow-300">
        <div className="relative h-full">subbody</div>
      </div>

      <div className="h-full bg-transparent"></div>
    </div>
  );
};

export default PeopleList;
