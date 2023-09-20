import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="NotFoundPage">
      <main>
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <a href="/">Volver a la página de inicio</a>
      </main>
    </div>
  );
}

export default NotFoundPage;
