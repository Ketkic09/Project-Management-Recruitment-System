import React,{useContext,useEffect,useState} from 'react'
import {Row,Col,Container,Card,Form, Dropdown, Button,Tabs,Tab,Table} from "react-bootstrap"
import NavbarJob from '../NavbarJob'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { DashboardContext } from '../../../Helpers/Contexts';
import { Link } from "react-router-dom";
import './Dashboard.css'

export let passvaluestudents

function AppliedStudentsDashboard() {

  const{
    jobcode,setJobcode,dashboardstate,setDashboardstate,username,appliedstudents,setAppliedstudents,jobdomain,setJobdomain,allstudents,setAllstudents
  }= useContext(DashboardContext);
  console.log(appliedstudents)
  let finalstudents = appliedstudents.filter(function (item,idx) {
        return Number(item.jobid) === jobcode;
      })
      .map(function ({
        Student_username,
alternative_email,
alternative_mobile,
branch,
cgpa,
college_name,
hsc_mks,
jobid,
linkedin,
semester,
ssc_mks,
student_email,
student_mobile,
student_name,
technical_skills,
yop,
eq,
endorsement_count,
endrosed_project_ids

      }) {
        return {
          Student_username,
          alternative_email,
          alternative_mobile,
          branch,
          cgpa,
          college_name,
          hsc_mks,
          jobid,
          linkedin,
          semester,
          ssc_mks,
          student_email,
          student_mobile,
          student_name,
          technical_skills,
          yop,
          eq,
          endorsement_count,
          endrosed_project_ids
           
        };
      });
      console.log('final',finalstudents)
  let allStudents = finalstudents.map(a => ({...a}));
  passvaluestudents = Array.isArray(passvaluestudents) && finalstudents.map(a => ({...a}));
  setAllstudents(allstudents)
  let according_eq =finalstudents.sort(function(a,b){
        return b.eq - a.eq;
      })

  
console.log('accordinq_eq',according_eq)
console.log(jobdomain)
let according_domain_early=finalstudents.filter(function(item,idx){
  let a=item.technical_skills
  let b=a.toLowerCase()
  let c=jobdomain.toLowerCase()
  if(b.includes(c)===true){
    return(
    Number(item.jobid) === jobcode
  )
  }
  
}).map(function ({
        Student_username,
alternative_email,
alternative_mobile,
branch,
cgpa,
college_name,
hsc_mks,
jobid,
linkedin,
semester,
ssc_mks,
student_email,
student_mobile,
student_name,
technical_skills,
yop,
eq,
endorsement_count,
endrosed_project_ids
      }) {
        return {
          Student_username,
          alternative_email,
          alternative_mobile,
          branch,
          cgpa,
          college_name,
          hsc_mks,
          jobid,
          linkedin,
          semester,
          ssc_mks,
          student_email,
          student_mobile,
          student_name,
          technical_skills,
          yop,
          eq,
          endorsement_count,
          endrosed_project_ids
           
        };
      });
      let according_domain =according_domain_early.sort(function(a,b){
        return b.endorsement_count - a.endorsement_count;
      })

console.log('according_domain',according_domain)
let superlike_early=according_domain.filter(function(item,idx){
  let a=item.technical_skills
  let b=a.toLowerCase()
  let c=jobdomain.toLowerCase()
  if(b.includes(c)===true){
    return(
    Number(item.jobid) === jobcode
  )
  }
  
}).map(function ({
        Student_username,
alternative_email,
alternative_mobile,
branch,
cgpa,
college_name,
hsc_mks,
jobid,
linkedin,
semester,
ssc_mks,
student_email,
student_mobile,
student_name,
technical_skills,
yop,
eq,
endorsement_count
      }) {
        return {
          Student_username,
          alternative_email,
          alternative_mobile,
          branch,
          cgpa,
          college_name,
          hsc_mks,
          jobid,
          linkedin,
          semester,
          ssc_mks,
          student_email,
          student_mobile,
          student_name,
          technical_skills,
          yop,
          eq,
          endorsement_count
           
        };
      });
      let superlike_after_five =superlike_early.sort(function(a,b){
        return b.eq - a.eq;
      })
      let superlike=superlike_after_five.filter(function (item,idx) {
        return item.eq>=5;
      })
      .map(function ({
        Student_username,
alternative_email,
alternative_mobile,
branch,
cgpa,
college_name,
hsc_mks,
jobid,
linkedin,
semester,
ssc_mks,
student_email,
student_mobile,
student_name,
technical_skills,
yop,
eq,
endorsement_count

      }) {
        return {
          Student_username,
          alternative_email,
          alternative_mobile,
          branch,
          cgpa,
          college_name,
          hsc_mks,
          jobid,
          linkedin,
          semester,
          ssc_mks,
          student_email,
          student_mobile,
          student_name,
          technical_skills,
          yop,
          eq,
          endorsement_count
           
        };
      });
      for (let key in superlike_after_five) {  
        console.log(superlike_after_five[key])
        if (superlike_after_five[key].eq === 7){
          
        } 
      }
      console.log(superlike)
console.log('superlike',superlike)
const [key, setKey] = useState('superlike');
  return (
    <>
      <NavbarJob/>
       <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="superlike" title="Best Match" className="highlight">
        
        <Table bordered hover>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th className="highlight">Name</th>
              <th>Year Of Passing</th>
              <th>Branch</th>
              <th>Technical Skills</th>
              <th>EQ</th>
              <th>Endorsed Projects <small>(In this Domain)</small></th>
              <th>Email ID</th>
              <th>Full Profile</th> 
            </tr>
          </thead>
          <tbody>
            {superlike.map((val, key) => {
          return (
            <tr key={key}>
              <td>{key+1}</td>
              <td className="highlight">{val.student_name}</td>
              <td>{val.yop}</td>
              <td>{val.branch}</td>
              <td>{val.technical_skills}</td>
              <td>{val.eq}</td>
              <td>{val.endorsement_count}</td>
              <td>{val.student_email}</td>
              <td>
                <Link to={`/applied_students/fullprofile/${val.Student_username}/${val.jobid}`} target="_blank">
                  <Button className="cardbutton">
                    Full Profile
                  </Button>
                </Link>
              </td>
            </tr>
          )
        })}
           
           
            
          </tbody>
        </Table>
      </Tab>
      <Tab eventKey="EQ" title="According to EQ">
        <Table bordered hover>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Year Of Passing</th>
              <th>Branch</th>
              <th>Technical Skills</th>
              <th className="highlight">EQ</th>
              <th>Email ID</th>
              <th>Full Profile</th> 
            </tr>
          </thead>
          <tbody>
            {according_eq.map((val, key) => {
          return (
            <tr key={key}>
              <td>{key+1}</td>
              <td>{val.student_name}</td>
              <td>{val.yop}</td>
              <td>{val.branch}</td>
              <td>{val.technical_skills}</td>
              <td className="highlight">{val.eq}</td>
              <td>{val.student_email}</td>
              <td><Link to={`/applied_students/fullprofile/${val.Student_username}/${val.jobid}`} target="_blank">
                  <Button className="cardbutton">
                    Full Profile
                  </Button>
                </Link></td>
            </tr>
          )
        })}
           
           
            
          </tbody>
        </Table>
      </Tab>
      <Tab eventKey="domain" title="According to Domain">
        <Table bordered hover>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Year Of Passing</th>
              <th>Branch</th>
              <th className="highlight">Technical Skills</th>
              <th className="highlight">Endorsed Projects <small className='highlight-2'>(In this Domain)</small></th>
              <th>EQ</th>
              <th>Email ID</th>
              <th>Full Profile</th> 
            </tr>
          </thead>
          <tbody>
            {according_domain
.map((val, key) => {
          return (
            <tr key={key}>
              <td>{key+1}</td>
              <td>{val.student_name}</td>
              <td>{val.yop}</td>
              <td>{val.branch}</td>
              <td className="highlight">{val.technical_skills}</td>
              <td className="highlight">{val.endorsement_count}</td>
              <td>{val.eq}</td>
              <td>{val.student_email}</td>
              <td><Link to={`/applied_students/fullprofile/${val.Student_username}/${val.jobid}`} target="_blank">
                  <Button className="cardbutton">
                    Full Profile
                  </Button>
                </Link></td>
            </tr>
          )
        })}
           
           
            
          </tbody>
        </Table>
      </Tab>
      <Tab eventKey="all" title="All Students">
         <Table bordered hover>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Year Of Passing</th>
              <th>Branch</th>
              <th>Technical Skills</th>
              <th>EQ</th>
              <th>Email ID</th>
              <th>Full Profile</th> 
            </tr>
          </thead>
          <tbody>
            {allStudents.map((val, key) => {
          return (
            <tr key={key}>
              <td>{key+1}</td>
              <td>{val.student_name}</td>
              <td>{val.yop}</td>
              <td>{val.branch}</td>
              <td>{val.technical_skills}</td>
              <td>{val.eq}</td>
              <td>{val.student_email}</td>
              <td><Link to={`/applied_students/fullprofile/${val.Student_username}/${val.jobid}`} target="_blank">
                  <Button className="cardbutton">
                    Full Profile
                  </Button>
                </Link></td>
            </tr>
          )
        })}
           
           
            
          </tbody>
        </Table>
      </Tab>
    </Tabs>
       
        
    </>
  )
}

export default AppliedStudentsDashboard