import { useState, useEffect } from "react";

interface Size {
  width: number;
  height: number;
}

/**
 * @description The `useWindowSize` hook will use react state to get information
 * on window size and will update as the window size updates
 *
 * @returns {{width: number, height: number}} state values of width and height as an object
 *
 * @example
 * // to get the deconstructed values of the window
 * const { width, height } = useWindowSize();
 */
function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export { useWindowSize };
