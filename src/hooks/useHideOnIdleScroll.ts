import { useState, useEffect, useRef } from "react";

const useHideOnIdleScroll = (delay: number = 1300) => {
  const [hidden, setHidden] = useState(false);
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(false);

      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }

      timeoutIdRef.current = setTimeout(() => {
        setHidden(true);
        timeoutIdRef.current = null;
      }, delay);
    };

    window.addEventListener("scroll", handleScroll);

    // Optionally start the timer immediately
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
    };
  }, [delay]);

  return hidden;
};
export default useHideOnIdleScroll;
