import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Axes } from "./pages/Axes";
import { Quiz } from "./pages/Quiz";
import { Results } from "./pages/Results";
import { Method } from "./pages/Method";
import { About } from "./pages/About";
import { Donate } from "./pages/Donate";
import { Compare } from "./pages/Compare";
import { NotFound } from "./pages/NotFound";
import { useI18n } from "./i18n";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function TitleUpdater() {
  const { copy } = useI18n();
  const { pathname } = useLocation();

  useEffect(() => {
    let title = copy.meta.title;
    if (pathname.startsWith("/ejes")) title = `${copy.nav.axes} — humani.dad`;
    else if (pathname.startsWith("/quiz")) title = `${copy.quiz.title} — humani.dad`;
    else if (pathname.startsWith("/metodo")) title = `${copy.nav.method} — humani.dad`;
    else if (pathname.startsWith("/nosotros")) title = `${copy.nav.about} — humani.dad`;
    else if (pathname.startsWith("/donar")) title = `${copy.nav.donate} — humani.dad`;
    else if (pathname.startsWith("/comparar")) title = `${copy.nav.compare} — humani.dad`;
    document.title = title;
  }, [pathname, copy]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <TitleUpdater />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ejes" element={<Axes />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="r/:payload" element={<Results />} />
          <Route path="r" element={<Results />} />
          <Route path="embed/r/:payload" element={<Results embed />} />
          <Route path="metodo" element={<Method />} />
          <Route path="nosotros" element={<About />} />
          <Route path="donar" element={<Donate />} />
          <Route path="comparar" element={<Compare />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
