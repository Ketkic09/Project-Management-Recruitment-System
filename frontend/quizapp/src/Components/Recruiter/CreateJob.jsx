import React,{useState,useCon} from 'react';
import NavbarJob from './NavbarJob';
import Sidebar from "./Sidebar";
import "./Sidebar.css"
import { JobContext } from "../../Helpers/Contexts";
import Opportunity from './FormSections/Opportunity';
import Salary from './FormSections/Salary';
import BasicDetails from './FormSections/BasicDetails';
import Eligibility from './FormSections/Eligibility'
import Rounds from './FormSections/Rounds'
import JobDescription from './FormSections/JobDescription';
import AdditionalDetails from './FormSections/AdditionalDetails';
import HomeDashboard from './Dashboard/HomeDashboard';
import MyJobsDashboard from './Dashboard/MyJobsDashboard';
import { username_recruiter } from './Dashboard/HomeDashboard';
function CreateJob() {

  const[username,setUsername]=useState(username_recruiter)
  const[jobState,setjobState]=useState("opportunity")
  const[visibility,setVisibility]=useState("")
  const[category,setCategory]=useState("Jobs")
  const[domain,setDomain]=useState("")
  const [opportunity_title, setOpportunity_title] = useState("");
  const [url, setUrl] = useState("");
  const [startdate,setStartdate]=useState("")
  const [enddate,setEnddate]=useState("")
  const [starttime,setStarttime]=useState("")
  const [endtime,setEndtime]=useState("")
  const [organization,setOrganization]=useState("")
  const[country,setCountry]=useState("India")
  const[state,setState]=useState("Maharashtra")
  const[city,setCity]=useState("Mumbai")
  const[appstartdate,setAppstartdate]=useState("")
  const[appenddate,setAppenddate]=useState("")
  const[appstarttime,setAppstarttime]=useState("")
  const[appendtime,setAppendtime]=useState("")
  const[sscpercentage,setSscpercentage]=useState("")
  const[hscpercentage,setHscpercentage]=useState("")
  const [inputList, setInputList] = useState([{ roundName: "", roundInfo: "" }]);
  const [description, setDescription] = useState("");
  const[salary,setSalary]=useState("")
  const[amount,setAmount]=useState("")
  const[jobupdate,setJobupdate]=useState("")
  const[timing,setTiming]=useState("")
  const[currency,setCurrency]=useState("₹ (INR)")
  const[period,setPeriod]=useState("Week")
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[other,setOther]=useState("")
  const[yearofpassing,setYearofpassing]=useState("")
  const[bemarks,setBemarks]=useState("")
  
  console.log(username_recruiter,"yes it is")
  var create_job_list=[{visibility:"",category:"",domains:"",opportunity_title:"",website_url:"",startdate:"",starttime:"",enddate:"",endtime:"",organization:"",country:"",state:"",city:""}]
  return (
      <>
        <JobContext.Provider value={{jobState,setjobState,visibility,setVisibility,category,setCategory,create_job_list,domain,setDomain,
        opportunity_title, setOpportunity_title,url, setUrl,startdate,setStartdate,enddate,setEnddate,starttime,setStarttime,endtime,setEndtime,organization,setOrganization,
        country,setCountry,state,setState,city,setCity,
        appstartdate,setAppstartdate,appenddate,setAppenddate,appstarttime,setAppstarttime,appendtime,setAppendtime,sscpercentage,setSscpercentage,hscpercentage,setHscpercentage,yearofpassing,setYearofpassing,bemarks,setBemarks,
        inputList, setInputList,
        description, setDescription,
        salary,setSalary,amount,setAmount,jobupdate,setJobupdate,timing,setTiming,currency,setCurrency,period,setPeriod,
        name,setName,email,setEmail,phone,setPhone,other,setOther,username,setUsername}}>
            {jobState === "opportunity" && <Opportunity />}
            {jobState === "basic_details" && <BasicDetails />}
            {jobState === "eligibility" && <Eligibility />}
            {jobState === "rounds" && <Rounds />}
            {jobState === "jobdescription" && <JobDescription />}
            {jobState === "salary" && <Salary />}
            {jobState === "additional" && <AdditionalDetails />}
        </JobContext.Provider>
      </>
    
    );
}

export default CreateJob;
