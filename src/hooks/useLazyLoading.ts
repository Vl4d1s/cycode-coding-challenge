import { useState, useRef, useEffect } from "react";

const useLazyLoading = (initialCount: number = 20, increment: number = 20) => {
  const [itemCount, setItemCount] = useState(initialCount);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const isIntersecting = entries[0].isIntersecting;

      if (isIntersecting) {
        setItemCount((prevCount) => prevCount + increment);
      }
    });

    const currentRef = loaderRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [increment]);

  return { itemCount, loaderRef };
};

export default useLazyLoading;
