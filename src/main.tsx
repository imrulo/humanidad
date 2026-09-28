import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { I18nContext, getInitialLang, persistLang, copyMap } from "./i18n";
import { applyTheme } from "./components/ThemeToggle";
import "./styles/index.css";

function Root() {
  const [lang, setLang] = useState(getInitialLang);

  function handleSetLang(newLang: "es" | "en") {
    setLang(newLang);
    persistLang(newLang);
  }

  return (
    <I18nContext.Provider value={{ lang, setLang: handleSetLang, copy: copyMap[lang] }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nContext.Provider>
  );
}

// Aplicar tema inicial antes de pintar.
applyTheme(
  typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "dark",
);

// Registrar service worker para PWA (offline).
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Sin service worker: el sitio sigue funcionando.
    });
  });
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("No se encontró el elemento #root");

createRoot(rootElement).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
