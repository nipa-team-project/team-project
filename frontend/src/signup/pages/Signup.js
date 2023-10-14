import React, { useState, useEffect } from "react";
import DesktopSignup from "./DesktopSignup";
import MobileSignup from "./MobileSignup";

import "./Signup.css";

const Signup = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isMobile ? <MobileSignup /> : <DesktopSignup />}</div>;
};

export default Signup;
