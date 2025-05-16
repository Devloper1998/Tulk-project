// src\ScrollToTop.jsx
// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top of the page
  }, [pathname]);

  return null;
};

export default ScrollToTop;
