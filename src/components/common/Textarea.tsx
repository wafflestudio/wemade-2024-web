import React, { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isEditing?: boolean;
}

const Textarea = ({
  className = '',
  isEditing = false,
  rows = 4,
  ...props
}: TextFieldProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const prevIsEditing = useRef(isEditing);

  useEffect(() => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    if (isEditing) {
      // 포커스 전환 시: 텍스트의 맨 끝으로 커서를 이동하고 스크롤을 맞춤
      textarea.focus();
      const len = textarea.value.length;
      textarea.setSelectionRange(len, len);
      textarea.scrollTop = textarea.scrollHeight;
    } else if (prevIsEditing.current && !isEditing) {
      // 포커스 해제 시: 텍스트의 맨 처음으로 커서를 이동하고 스크롤을 맞춤
      textarea.focus();
      textarea.setSelectionRange(0, 0);
      textarea.scrollTop = 0;
    }
    prevIsEditing.current = isEditing;
  }, [isEditing]);

  return (
    <textarea
      {...props}
      rows={rows}
      readOnly={!isEditing}
      ref={textAreaRef}
      className={twMerge(
        'textarea-scrollbar box-border w-full resize-none rounded-[4px] bg-white px-[10px] py-[10px] text-sm font-normal placeholder-textGray1',
        isEditing
          ? 'border-[1px] border-borderGray text-black focus:border-[1.5px] focus:border-pointColor focus:px-[9.5px] focus:py-[9.5px] focus:outline-none'
          : 'cursor-default border-[1px] border-borderGray text-textGray2 focus:outline-none',
        className
      )}
    />
  );
};

export default Textarea;
