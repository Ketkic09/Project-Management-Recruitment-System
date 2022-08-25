import React,{useEffect,useState,useContext} from 'react';
import {Row,Col,Container,Card,Form,Button,CardGroup} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import WorkIcon from '@mui/icons-material/Work';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import "./ViewJob.css"
import Sidebar from './Sidebar';
import { FullViewJobContext } from "../../Helpers/Contexts";
import history from './../History'

export let openjob;

function ViewJob() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
    axios
      .get("http://localhost:8000/recruiter/create_job/")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((error) => console.log("error"));
  }, []);
  console.log(jobs)
  const{
    jobviewState,setjobviewState,jobcode,setJobcode,username
  }= useContext(FullViewJobContext);
  console.log(username)
  const handleFullView=(id)=>{
      console.log(id)
      openjob=jobs.filter(function (item,idx) {
        return idx === id;
      })
      .map(function ({
        recruiter_username,
        visibility,
        category,
        domain,
        title,
        website,
        opportunity_start_date,
        opportunity_start_time,
        opportunity_end_date,
        opportunity_end_time,
        organization,
        country,
        state,
        city,
        application_start_date,
        application_start_time,
        application_end_date,
        application_end_time,
        ssc_marks,
        hsc_marks,
        be_marks,
        year_of_passing,
        rounds,
        job_description,
        salary_type,
        salary_amount,
        currency,
        period,
        job_update,
        timing,
        contact_name,
        contact_email,
        contact_phone,
        additional_details,
      }) {
        return {
         recruiter_username,
        visibility,
        category,
        domain,
        title,
        website,
        opportunity_start_date,
        opportunity_start_time,
        opportunity_end_date,
        opportunity_end_time,
        organization,
        country,
        state,
        city,
        application_start_date,
        application_start_time,
        application_end_date,
        application_end_time,
        ssc_marks,
        hsc_marks,
        be_marks,
        year_of_passing,
        rounds,
        job_description,
        salary_type,
        salary_amount,
        currency,
        period,
        job_update,
        timing,
        contact_name,
        contact_email,
        contact_phone,
        additional_details,
        };
      });
      console.log(openjob)
      
      setjobviewState("openjobs")
      history.push('/viewjob/openjob')
      setJobcode(id)

  }
  return (
      <>
        ViewJob
            <Row xs={1} md={3} className="g-4">
            {jobs.map(function(d,idx){
            return(
                 <Card>
                 <Card.Body>
                    <Card.Title>{d.title}</Card.Title>
                    <Card.Text>
                    <h6>{d.organization}</h6>
                    <WorkOutlineIcon className='viewcardicon' style={{ color: "#706f6f" }} />{" "}{d.domain}<br/>
                     <EventAvailableIcon className='viewcardicon' style={{ color: "#706f6f" }}/>{" "}Last Date to apply: {d.opportunity_end_date}

                    </Card.Text>
                    <Button variant="primary" type="button" onClick={() => handleFullView(idx)}>Full View</Button>
                </Card.Body>
                </Card>
            )
        })}
        </Row> 
      </>
  );
}

export default ViewJob;
