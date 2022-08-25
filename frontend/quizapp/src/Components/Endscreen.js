import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/Questionbank";
import { newValue } from "./Mainmenu";

import axios from "axios";
function Endscreen() {
  const { score, setScore, setgameState, semester, username } =
    useContext(QuizContext);
  const resetQuiz = () => {
    setScore(0);
    setgameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1 style={{ color: "white" }}>Quiz Finished</h1>
      <h3 style={{ color: "white" }}>
        {score} / {newValue}
      </h3>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:8000/StudentDashboard/";
        }}
      >
        Back To Dashboard
      </button>
    </div>
  );
}

export default Endscreen;
