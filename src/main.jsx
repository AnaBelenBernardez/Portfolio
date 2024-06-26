import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { BrowserRouter as Router } from "react-router-dom";

import enTranslation from "./languages/en.json";
import esTranslation from "./languages/es.json";
import gzTranslation from "./languages/gz.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
  gz: {
    translation: gzTranslation,
  },
};

i18n.init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <I18nextProvider i18n={i18n}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </I18nextProvider>
  </Router>
);
