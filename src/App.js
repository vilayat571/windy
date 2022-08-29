import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./pages/Weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;