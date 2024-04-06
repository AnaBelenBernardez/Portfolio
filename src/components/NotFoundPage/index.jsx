import React, { useEffect, useState } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Loading from "../details/Loading";
import SpaceInvaders from "./SpaceInvaders";

function NotFoundPage() {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <main className="NotFoundPage">
      {isLoading && <Loading />}
      <div>
        {/* <SpaceInvaders /> */}
        <h1>404</h1>
        <h2>Page not found</h2>
        <div>
          <a href="/">GO BACK</a>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
