import React, { useEffect, useState } from 'react';

import { ModalStateType } from '@/types/type.ts';

interface ModalProps {
  children?: React.ReactNode;
  state: ModalStateType;
  onBackgroundClick: () => void;
}

export default function Modal({
  children,
  onBackgroundClick,
  state,
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(state !== 'closed');

  useEffect(() => {
    if (state === 'open') {
      setIsVisible(true);
    } else if (state === 'closing') {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [state]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && state === 'open') {
        onBackgroundClick();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onBackgroundClick, state]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${
        state === 'open' ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onBackgroundClick}
      />
      <div className="relative flex flex-col items-center rounded-md bg-white p-6">
        {children}
      </div>
    </div>
  );
}
