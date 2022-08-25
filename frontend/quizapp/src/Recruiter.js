import React, { useState } from "react";
import { RecruiterContext } from "./Helpers/Contexts";
import RecruiterSignup from "./Components/RecruiterSignup";
function Recruiter() {
  const [current_page, setCurrentpage] = useState("signup");
  const [recruiter_username, setRecruiter_username] = useState("admin");
  return (
    <>
      <RecruiterContext.Provider value={{ recruiter_username, current_page }}>
        {current_page === "signup" && <RecruiterSignup />}
      </RecruiterContext.Provider>
    </>
  );
}

export default Recruiter;
