import React,{useContext} from 'react'
import {RecruiterContext} from "./../Helpers/Contexts"
function RecruiterSignup() {
  const{
    recruiter_username
  }= useContext(RecruiterContext);
  return (
    <>
      <div>RecruiterSignup</div>
      {recruiter_username}
    </>
    
  )
}

export default RecruiterSignup