import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Loading from "../details/Loading";

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <main className="NotFoundPage">
      <Loading />
      <div>
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
