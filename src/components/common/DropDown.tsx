import { FC, useRef, useState, useEffect } from 'react';

import useOuterClick from '@/hooks/useOuterClick';

export interface IDropdownOption {
  value: string;
  label: string;
}

interface IDropdownProps {
  options: IDropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
  placeholder?: string;
}

/*아래는 미지정 시 기본값이며 이 컴포넌트 사용하실 때마다 디자인 맞춰서 바꿔주시면 돼요!*/
const Dropdown: FC<IDropdownProps> = ({
  options,
  value,
  onChange,
  bgColor = 'bg-textGreen',
  textColor = 'text-black',
  iconColor = 'fill-black',
  placeholder = '전체',
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(value || '');
  const [opened, setOpened] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  const handleToggle = () => {
    setOpened((prev) => !prev);
  };

  const handleOptionClick = (newValue: string) => {
    setSelectedValue(newValue);
    onChange?.(newValue);
    setOpened(false);
  };

  const handleClickOutside = () => {
    setOpened(false);
  };

  useOuterClick(dropdownRef, handleClickOutside, [toggleRef]);

  return (
    <div
      className="relative inline-block text-left"
      ref={toggleRef}
    >
      <div
        className={`h-[26px] px-3 py-[5px] ${bgColor} flex cursor-pointer items-center gap-1 rounded-md`}
        onClick={handleToggle}
      >
        <span className={`${textColor} text-sm font-medium`}>
          {selectedOption?.label || placeholder}
        </span>
        <div data-svg-wrapper>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform ${opened ? 'rotate-180' : ''} ${iconColor}`}
          >
            <path d="M6 6.35803L0.803849 0.358031L11.1962 0.358032L6 6.35803Z" />
          </svg>
        </div>
      </div>
      {opened && (
        <div
          className="absolute left-0 z-10 mt-1 w-max min-w-[60px] overflow-hidden rounded-md bg-white text-sm shadow-md"
          ref={dropdownRef}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="cursor-pointer px-3 py-2 text-sm text-gray-800 hover:bg-gray-200"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
