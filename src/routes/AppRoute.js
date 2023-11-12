import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CharacterPage from "../pages/CharacterPage";
import HousesPage from "../pages/HousesPage";
import SearchPage from "../pages/SearchPage";
import QuizPage from "../pages/QuizPage";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/welcome" element={<HomePage />} />
      <Route path="/Characters" element={<CharacterPage />} />
      <Route path="/Character" element={<CharacterPage />} />
      <Route path="/Houses" element={<HousesPage />} />
      <Route path="/Search" element={<SearchPage />} />
      <Route path="/Quiz" element={<QuizPage />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
}
