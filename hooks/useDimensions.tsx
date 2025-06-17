import { useCallback, useEffect, useLayoutEffect, useState } from "react";

export const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {
  const getDimensions = useCallback(() => {
    return {
      width: targetRef.current ? targetRef.current.offsetWidth : 0,
      height: targetRef.current ? targetRef.current.offsetHeight : 0
    };
  }, [targetRef]);

  const [dimensions, setDimensions] = useState(getDimensions);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getDimensions]);

  useLayoutEffect(() => {
    setDimensions(getDimensions());
  }, [getDimensions]);

  return dimensions;
};
