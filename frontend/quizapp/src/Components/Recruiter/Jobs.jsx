import React,{useState,useContext} from 'react';
import { FullViewJobContext } from "../../Helpers/Contexts";
import OpenJob from './OpenJob';
import ViewJob from './ViewJob';

function Jobs() {
  const[jobviewState,setjobviewState]=useState("alljobs")
  const[jobcode,setJobcode]=useState(0)
  const[username,setUsername]=useState("admin")
  
  return (
      <>
      <FullViewJobContext.Provider value={{jobviewState,setjobviewState,jobcode,setJobcode,username,setUsername}}>
           {jobviewState === "alljobs" && <ViewJob />}
          
           
      </FullViewJobContext.Provider>
      </>
   );
}

export default Jobs;
