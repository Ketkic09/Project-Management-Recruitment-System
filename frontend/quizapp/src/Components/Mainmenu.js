import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  FloatingLabel,
  Form,
  Navbar,
} from "react-bootstrap";

export let NewQuestions;
export let newValue;

function Mainmenu() {
  const {
    setgameState,
    username,
    setUsername,
    semester,
    setSemester,
    testkey,
    setTestkey,
  } = useContext(QuizContext);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/que/")
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((error) => console.log("error"));
  }, []);
  const handleSubmit = (event) => {
    //fetching the questions

    NewQuestions = questions
      .filter(function (item) {
        return item.semester === semester && item.testkey === testkey;
      })
      .map(function ({
        question,
        optionA,
        optionC,
        optionB,
        optionD,
        answer,
        quizname,
      }) {
        return {
          question,
          optionA,
          optionC,
          optionB,
          optionD,
          answer,
          quizname,
        };
      });
    if (NewQuestions.length !== 0 && username.length !== 0) {
      event.preventDefault();
      setgameState("quiz");
      newValue = NewQuestions.length;
    } else {
      alert("Invalid Testkey");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="pt-2 row text-center justify-content-center">
          Take a Quiz
        </h1>
        <div className="Menu">
          <label>
            <h4 className="mt-2">Enter Your Username:</h4>
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="usernameField"
          />
          <label>
            <h4 className="mt-2">Select Semester:</h4>
          </label>
          <select
            value={semester}
            onChange={(f) => setSemester(f.target.value)}
            className="selectField"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <label>
            <h4 className="mt-2">Enter Your Testkey:</h4>
          </label>
          <input
            type="text"
            value={testkey}
            onChange={(a) => setTestkey(a.target.value)}
            className="usernameField"
          />
          <button type="submit">Start Quiz</button>
        </div>
      </form>
    </>
  );
}

export default Mainmenu;
