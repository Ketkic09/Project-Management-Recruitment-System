import React, { useState } from "react";
import "./Teacher.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { QuestionContext } from "./Helpers/Contexts";
import Teachermenu from "./Components/Teachermenu";
import Createquestion from "./Components/Createquestion";
import Reviewquestion from "./Components/Reviewquestion";
import Teacherendscreen from "./Components/Teacherendscreen";
import Editquestion from "./Components/Editquestion";
import NavbarTeachar from "./Components/NavbarTeachar";
function Teacher() {
  const [queState, setqueState] = useState("teachermenu");
  const [teacher_username, setTeacherUsername] = useState("");
  const [teacher_semester, setTeacherSemester] = useState("1");
  const [testkey, setTestkey] = useState("");
  const [questionlist, setquestionList] = useState([]);
  const [editid, seteditId] = useState(null);
  const [quizname, setquizName] = useState("");

  return (
    <div className="Teacher">
      <NavbarTeachar />
      {/*<h1 className="pt-2 row text-center justify-content-center">Quizmaker</h1>*/}
      <QuestionContext.Provider
        value={{
          queState,
          setqueState,
          teacher_username,
          setTeacherUsername,
          teacher_semester,
          setTeacherSemester,
          testkey,
          setTestkey,
          questionlist,
          setquestionList,
          editid,
          seteditId,
          quizname,
          setquizName,
        }}
      >
        {queState === "teachermenu" && <Teachermenu />}
        {queState === "createquestion" && <Createquestion />}
        {queState === "reviewquestion" && <Reviewquestion />}
        {queState === "techerendscreen" && <Teacherendscreen />}
        {queState === "editquestion" && <Editquestion />}
      </QuestionContext.Provider>
    </div>
  );
}

export default Teacher;
