import { useEffect, useState } from 'react'
import {useMediaQuery} from "@mantine/hooks";

export const useWindowSize = () => {
  const [width, setWidth] = useState(0); // default width, detect on server.
  const handleResize = () => setWidth(window.innerWidth);
  let isTabletOrPhone = useMediaQuery("(max-width:1024px)");

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  return {
    width,
    isPhone: isTabletOrPhone

  }
}
