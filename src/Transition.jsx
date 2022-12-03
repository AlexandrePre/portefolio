import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import CardsDetail from "./components/CardsDetail";

function Transition() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards/:id" element={<CardsDetail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Transition;
