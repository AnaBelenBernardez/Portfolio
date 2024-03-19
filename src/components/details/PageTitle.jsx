import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function PageTitle() {
  const location = useLocation();
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setInactive(true);
      }, 60000);
    };
    const handleWindowClick = () => {
      setInactive(false);
    };

    window.addEventListener("click", handleWindowClick);

    resetTimer();

    const updatePageTitle = () => {
      const currentPath = window.location.pathname;
      let pageTitle = "Ana Belén";

      if (currentPath === "/") {
        pageTitle = "Portfolio";
      } else if (currentPath === "/about") {
        pageTitle = "About me";
      } else if (currentPath === "/projects") {
        pageTitle = "Projects";
      } else if (currentPath === "*") {
        pageTitle = "404";
      }

      if (inactive) {
        document.title = "(ಠ_ಠ) Come back!";
      } else {
        document.title = "Ana Belén | " + pageTitle;
      }

      resetTimer();
    };

    updatePageTitle();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleWindowClick);
    };
  }, [location, inactive]);

  return null;
}
console.log("ദ്ദി˙◠˙ )✧");
console.log("Good idea to gossip here, developer");

export default PageTitle;
