import { RefObject, useEffect, useCallback } from "react";

type CallbackType = () => void;

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: CallbackType
): void => {
  const handleClick = useCallback(
    (e: MouseEvent): void => {
      let targetElement = e.target as HTMLElement;

      do {
        if (
          targetElement === ref.current ||
          targetElement.id === "submit-button"
        ) {
          return;
        }
        targetElement = targetElement.parentNode as HTMLElement;
      } while (targetElement);

      callback();
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
