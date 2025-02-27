import { RefObject, useEffect } from 'react';

const useOuterClick = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  ignoreRefs: RefObject<HTMLElement>[] = []
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;

      if (
        ignoreRefs.some((ignoreRef) =>
          ignoreRef.current?.contains(e.target as Node)
        )
      ) {
        return;
      }

      callback();
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, callback, ignoreRefs]);
};

export default useOuterClick;
