import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";

// Importa y configura tus traducciones aquí
const resources = {
  en: {
    translation: {
      greeting: "Hello!",
      content: "This is the content in English.",
    },
  },
  es: {
    translation: {
      greeting: "¡Hola!",
      content: "Este es el contenido en español.",
    },
  },
  gz: {
    translation: {
      greeting: "Ola!",
      content: "Este é o contido en galego.",
    },
  },
};

i18n.init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);
