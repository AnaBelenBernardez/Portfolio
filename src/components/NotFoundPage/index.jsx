import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="NotFoundPage">
      <main>
        <h1>404</h1>
        <h2>Page not found</h2>
        <a href="/">GO BACK</a>
      </main>
    </div>
  );
}

export default NotFoundPage;
