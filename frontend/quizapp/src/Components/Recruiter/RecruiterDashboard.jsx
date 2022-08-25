import React,{useContext,useState} from 'react'
import {DashboardContext} from '../../Helpers/Contexts'
import AllJobsDashboard from './Dashboard/AllJobsDashboard'
import HomeDashboard from './Dashboard/HomeDashboard'
import MyJobsDashboard from './Dashboard/MyJobsDashboard'
import AppliedStudentsDashboard from './Dashboard/AppliedStudentsDashboard'
import OpenJob from './OpenJob'
import FullProfileStudent from './Dashboard/FullProfileStudent'
import CreateJob from './CreateJob'
import EditJob from './Dashboard/EditJob'
import AccountsDashboard from './Dashboard/AccountsDashboard'
import Signup from './Dashboard/Signup'
import Login from './Dashboard/Login'
function RecruiterDashboard() {
    const[username,setUsername]=useState("admin")
    const[dashboard,setDashboardstate]=useState(window.location.pathname)
    const[alljobs,setAlljobs]=useState([])
    const[myjobs,setMyjobs]=useState([])
    const[jobcode,setJobcode]=useState(0)
    const[openjob,setOpenjob]=useState([])
    const[appliedstudents,setAppliedstudents]=useState([])
    const[jobdomain,setJobdomain]=useState("")
    const[allstudents,setAllstudents]=useState([])
    const[user_id,setUser_id]=useState(2)
  return (
    <>
       <DashboardContext.Provider value={{jobcode,setJobcode,username,setUsername,dashboard,setDashboardstate,alljobs,setAlljobs,myjobs,setMyjobs,appliedstudents,setAppliedstudents,jobdomain,setJobdomain,allstudents,setAllstudents,user_id}}  >
       
        {dashboard==="/recruiter/dashboard/home" && <HomeDashboard/>}
        {dashboard==="/recruiter/dashboard/create_job" && <CreateJob/>}
        {dashboard==="/recruiter/dashboard/myjobs" && <MyJobsDashboard/>}
        {dashboard==="/recruiter/dashboard/alljobs" && <AllJobsDashboard/>}
        {dashboard==="/recruiter/dashboard/alljobs/fullview" && <OpenJob/>}
        {dashboard==="/recruiter/dashboard/alljobs/fullview/applied_students" && <AppliedStudentsDashboard/>}
        {dashboard==="/applied_students/fullprofile/:id" && <FullProfileStudent/>}
        {dashboard==="/dashboard/job/editjob/:id" && <EditJob/>}
        {dashboard==="/recruiter/dashboard/account" && <AccountsDashboard/>}
        {dashboard==="/recruiter/dashboard/signup" && <Signup/>}
        {dashboard==="/recruiter/dashboard/login" && <Login/>}
      </DashboardContext.Provider>
    </>
   
    
    
  )
}

export default RecruiterDashboard