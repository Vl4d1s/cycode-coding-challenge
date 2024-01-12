import { RefObject, useEffect, useCallback } from "react";

type CallbackType = () => void;

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: CallbackType
): void => {
  const handleClick = useCallback(
    (e: MouseEvent): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return (): void => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);
};
