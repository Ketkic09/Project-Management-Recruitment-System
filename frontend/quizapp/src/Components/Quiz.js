import React, { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { NewQuestions } from "./Mainmenu";
import axios from "axios";
import "../App.css";

export let newValue = 0;
const api = axios.create({
  baseURL: "http://localhost:8000/wel/",
});
function Quiz() {
  const { score, setScore, setgameState, semester, username, testkey } =
    useContext(QuizContext);
  //Tells us on which question we are
  const [currQuestion, setcurrQuestion] = useState(0);
  const [optionChosen, setoptionChosen] = useState("");
  console.log(NewQuestions.length);
  console.log(currQuestion + 1);
  //Filter the values before displaying
  //Print the questions by line
  const nextQuestion = () => {
    if (NewQuestions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setcurrQuestion(currQuestion + 1);
  };
  //Calculate score at the end
  const finishQuiz = () => {
    if (NewQuestions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
      api.post("/", {
        username: username,
        semester: semester,
        score: Math.round(((score + 1) * 100) / NewQuestions.length / 10),
        testkey: testkey,
      });
    }
    // Submits the score
    else {
      api.post("/", {
        username: username,
        semester: semester,
        score: Math.round((score * 100) / NewQuestions.length / 10),
        testkey: testkey,
      });
    }
    setgameState("endscreen");
  };
  return (
    <>
      <h1 className="pt-2 row text-center justify-content-center">
        {NewQuestions[currQuestion].quizname}
      </h1>
      <div className="Quiz">
        <h5 className="justify-content-end">
          {currQuestion + 1}/{NewQuestions.length}
        </h5>
        <h5 className="m-4">{NewQuestions[currQuestion].question}</h5>
        <div className="options">
          <button className="opt" onClick={() => setoptionChosen("A")}>
            {NewQuestions[currQuestion].optionA}
          </button>
          <button className="opt" onClick={() => setoptionChosen("B")}>
            {NewQuestions[currQuestion].optionB}
          </button>
          <button className="opt" onClick={() => setoptionChosen("C")}>
            {NewQuestions[currQuestion].optionC}
          </button>
          <button className="opt" onClick={() => setoptionChosen("D")}>
            {NewQuestions[currQuestion].optionD}
          </button>
        </div>
        {currQuestion === NewQuestions.length - 1 ? (
          <button onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button onClick={nextQuestion}>Next Question</button>
        )}
      </div>
    </>
  );
}
export default Quiz;
