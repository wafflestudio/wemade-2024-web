import { RefObject, useEffect } from 'react';

const useOuterClick = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  ignoreRefs: RefObject<HTMLElement>[] = []
) => {
  useEffect(() => {
    const handleClick = ({ target }: MouseEvent) => {
      if (
        !(target instanceof Node) ||
        !ref.current ||
        ref.current.contains(target)
      )
        return;

      if (ignoreRefs.some((ignoreRef) => ignoreRef.current?.contains(target))) {
        return;
      }

      callback();
    };

    document.addEventListener('mouseup', handleClick);
    return () => document.removeEventListener('mouseup', handleClick);
  }, [ref, callback, ignoreRefs]);
};

export default useOuterClick;
