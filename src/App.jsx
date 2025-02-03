import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Supriyanto from "./pages/Supriyanto";
import NotFound from "./components/NotFound";

function RedirectToExternal() {
  window.location.href = "https://profile.grahasip.id/geri-arisman";
  return null;
}

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotFound />} />
          <Route path="/supriyanto" element={<Supriyanto />} />
          <Route path="/geri-arisman" element={<RedirectToExternal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}