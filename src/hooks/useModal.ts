import { useState, useRef } from 'react';
import { ModalStateHookType, ModalStateType } from '@/types/type.ts';

const MODAL_ANIMATION_DURATION = 300;

function useModalState(): ModalStateHookType {
  const [modalState, setModalState] = useState<ModalStateType>('closed');
  const closeTimeoutRef = useRef<number | null>(null);

  const openModal = () => {
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setModalState('open');
  };

  const closeModal = () => {
    setModalState('closing');
    closeTimeoutRef.current = window.setTimeout(() => {
      setModalState('closed');
      closeTimeoutRef.current = null;
    }, MODAL_ANIMATION_DURATION);
  };

  return [modalState, openModal, closeModal];
}

export default useModalState;
