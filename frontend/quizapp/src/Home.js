import React, { useState, useContext } from "react";
import Mainmenu from "./Components/Mainmenu";
import Quiz from "./Components/Quiz";
import Endscreen from "./Components/Endscreen";
import { QuizContext } from "./Helpers/Contexts";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarQuiz from "./NavbarQuiz";

function Home() {
  //Tells us about the current state of the game
  const [gameState, setgameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState("");
  const [semester, setSemester] = useState("1");
  const [testkey, setTestkey] = useState("");
  return (
    <>
      <NavbarQuiz />
      <div className="Home">
        <QuizContext.Provider
          value={{
            gameState,
            setgameState,
            score,
            setScore,
            username,
            setUsername,
            semester,
            setSemester,
            testkey,
            setTestkey,
          }}
        >
          {gameState === "menu" && <Mainmenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "endscreen" && <Endscreen />}
        </QuizContext.Provider>
      </div>
    </>
  );
}

export default Home;
