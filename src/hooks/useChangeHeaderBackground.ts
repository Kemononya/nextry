import { useState, useEffect } from "react";

const useChangeHeaderBackground = () => {
  const [headerStatus, setHeaderStatus] = useState("idle");
  useEffect(() => {
    const updateHeaderBackground = () => {
      if (window.scrollY > 0) {
        setHeaderStatus("moving");
      } else {
        setHeaderStatus("idle");
      }
    };
    window.addEventListener("scroll", updateHeaderBackground);

    return () => {
      window.removeEventListener("scroll", updateHeaderBackground);
    };
  }, []);

  return headerStatus === "moving" ? "#0b0511" : "inherit";
};

export default useChangeHeaderBackground;
