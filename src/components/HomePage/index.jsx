import React, { useEffect, useState } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Photo from "../Photo";
import Links from "../Links";
import Loading from "../details/Loading";

function HomePage() {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <main className="home">
      {isLoading && <Loading />}
      <div className="profile">
        <h1>Ana Belén Bernárdez Martínez</h1>
        <h2>{t("translation.position")}</h2>
      </div>
      <div className="photo-and-nav">
        <Photo />
        <Links />
      </div>
    </main>
  );
}

export default HomePage;
