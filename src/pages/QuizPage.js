import React from "react";
import GetAllCharacters from "../services/getAllCharacters";
export default function QuizPage() {
  GetAllCharacters();
  return <div>QuizPage</div>;
}
