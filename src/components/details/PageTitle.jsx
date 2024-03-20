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
      let pageTitle = "Portfolio";

      if (currentPath === "/") {
        pageTitle = "Portfolio";
      } else if (currentPath === "/about") {
        pageTitle = "✧˖°.✦˳˖";
      } else if (currentPath === "/projects") {
        pageTitle = "˗ˏˋ 📚☕︎🎧💻 ˎˊ˗";
      } else if (currentPath === "*") {
        pageTitle = "Oops";
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

console.group(
  `\n%c🚨 Hey, nosy dev! 🚨`,
  "color:#182739; background: #f5dccf; font-size:1.5rem; padding:0.15rem;  font-family: sans-serif; border: 3px solid #182739; border-radius: 35px; font-weight: bold;"
);
console.log(
  `\n%cIf you're looking around check out my projects. \nEach one has at least one easter egg.`,
  "color:#182739; font-size:1rem; padding:0.15rem;  font-family: sans-serif; font-weight: bold;"
);
console.log(
  `\n%cദ്ദി˙◠˙ )%c✧`,
  "color:#182739; font-size:1rem; padding:0.15rem;  font-family: sans-serif; font-weight: bold;",
  "font-weight: bold; font-size: 0.8rem; "
);

export default PageTitle;
