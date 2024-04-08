import React, { useEffect, useState } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Loading from "../details/Loading";
import { Link } from "react-router-dom";

function NotFoundPage() {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const [starIndex, setStarIndex] = useState(0);

  useEffect(() => {
    const starInterval = setInterval(() => {
      setStarIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 1000);

    return () => clearInterval(starInterval);
  }, []);

  return (
    <main className="NotFoundPage">
      {isLoading && <Loading />}
      <div>
        <h1>404</h1>
        <h2> {t("translation.pageNotFound")}</h2>
        <div className="buttons-404">
          {starIndex === 0 ? (
            <img
              className="stars"
              id="space-star"
              src="/assets/8starcolor.svg"
            />
          ) : (
            <img className="stars" id="space-star" src="/assets/8starinv.svg" />
          )}
          <Link to="/space-invaders" className="space-button">
            {t("translation.SpaceInvaders")}
          </Link>
          <a href="/"> {t("translation.GoBack")}</a>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
