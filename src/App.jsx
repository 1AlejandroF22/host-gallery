import React from "react";
import ReactDOM from "react-dom/client";
/* import AboutPage from "./pages/AboutPage"; */
import NotFound from "./pages/NotFound";
/* import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import PresentationCard from "./pages/PresentationCard"; */
import Galery from "./pages/Galery";
import Contador from "./pages/Contador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Galeryy from "galerye/Galery";
import Navbar from "narvar/Navbar";
import PresentationCardd from "presentation/Card";

const App = () => (
  <>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/g" element={<ErrorBoundary errorMessage="Error al cargar la GGGG.">{<Galeryy />}</ErrorBoundary>} />
      {/* <Route path="/" element={<ErrorBoundary errorMessage="Error al cargar la página de inicio.">{<HomePage />}</ErrorBoundary>} /> */}
      {/* <Route path="/Characters" element={<ErrorBoundary errorMessage="Error al cargar la página de personajes.">{<CharactersPage />}</ErrorBoundary>}/> */}
      {/* <Route path="/About" element={<ErrorBoundary errorMessage="Error al cargar la página Acerca de.">{<AboutPage />}</ErrorBoundary>}/> */}
      <Route  path="/Presentation" element={<ErrorBoundary errorMessage="Error al cargar la tarjeta de presentación.">{<PresentationCardd />}</ErrorBoundary>}/>
      {/* <Route  path="/Galery" element={<ErrorBoundary errorMessage="Error al cargar la galería.">{<Galery />}</ErrorBoundary>} /> */}
      {/* <Route path="/Contador"element={<ErrorBoundary errorMessage="Error al cargar el contador.">{<Contador />}</ErrorBoundary>} /> */}
      <Route  path="/*" element={<ErrorBoundary errorMessage="Error al cargar la página.">{<NotFound />}</ErrorBoundary>} />
    </Routes>
  </BrowserRouter>
  </>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App/>);
