import React,{useContext,useEffect,useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { DashboardContext, FullViewJobContext } from "../../Helpers/Contexts";
import {Image} from "react-bootstrap"
import {openjob} from "../Recruiter/Dashboard/JobCards"
import background_image_1 from '../Images/background_image_1.svg'
import {Row,Col,Container,Card,Form, Dropdown, Button} from "react-bootstrap"
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import './OpenJob.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import DomainIcon from '@mui/icons-material/Domain';
import history from '../History';
import axios from "axios";
function OpenJob() {
  
  const{
    jobcode,setJobcode,dashboardstate,setDashboardstate,username,appliedstudents,setAppliedstudents,jobdomain,setJobdomain
  }= useContext(DashboardContext);
   useEffect(() => {
    axios
      .get("http://localhost:8000/jobapply/")
      .then((res) => {
        setAppliedstudents(res.data);
      })
      .catch((error) => console.log("error"));
  }, []);
  const backtodashboard=()=>{
    setDashboardstate('/recruiter/dashboard/alljobs')
    history.push('/recruiter/dashboard/alljobs')
  }
  const appliedstudentsfunc=()=>{
    console.log('job',jobcode)
    setJobcode(jobcode)
    console.log(jobcode)
    setDashboardstate('/recruiter/dashboard/alljobs/fullview/applied_students')
    history.push('/recruiter/dashboard/alljobs/fullview/applied_students')
    console.log()
  }
  function renderElement(val,domain){
   if(username === val){
     setJobdomain(domain)
      return (
        <Button
                            className="mt-3 mr-2 add_space_right"
                            variant="success btn-block"
                            type="button"
                            onClick={appliedstudentsfunc}
                          >
                          Applied Students
                          </Button>
        
      );

   }
      
        
   return null;
}
  return (
    <>  
        {openjob.map(function(d,idx){
            return(
              <Container fluid>
                <Card>
                  <Card.Body>
                    
                    <Row>
                      <Col md={6} className="text-left">
                        <Card border="primary" >
                                <Card.Body>
                                  <AccessAlarmsIcon/>
                                  Application Deadline: 
                                  {d.application_end_date}
                                  
                                </Card.Body>
                              </Card>
                      </Col>
                      <Col md={6} className="text-right">
                        <div className="next">
                          {renderElement(d.recruiter_username,d.domain)}
                          
                          <Button
                            className="mt-3 align-item-right"
                            variant="primary btn-block"
                            type="button"
                            onClick={backtodashboard}
                          >
                          Back To Dashboard
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <Card className="mt-2" border="primary">
                      <Card.Body>
                        <Row  className="mt-3">
                      <Col md={10}>
                
                            <h3>
                              {d.title}
                            </h3>
                            <p className="organization-title">
                              {d.organization}
                            </p>
                            <p>
                              <LocationOnIcon/> {d.city}, {d.country}
                            </p>
                            <p>
                              <DateRangeIcon/> {d.application_start_date} - {d.application_end_date}
                            </p>
                            <p>
                              <DomainIcon/> {d.domain}
                            </p>
                            
                      </Col>
                      <Col className="mt-2 mx-2">
                        
                        <Row >
                         
                        </Row>
                        
                      </Col>
                    </Row>
                      </Card.Body>
                    </Card>
                    <Card className="mt-2">
                      <Card.Body>
                        <Row  className="mt-2">
                          <Col className="job-description-header">
                            Salary & Job Type
                             <hr />
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col>
                            <Row>
                              <Col>
                                <MonetizationOnIcon style={{ color: '#999696' }}/> {d.salary_amount}/- {d.currency} Per {d.period}
                              </Col>
                              <Col>
                                <CardTravelIcon style={{ color: '#999696' }}/> {d.timing}
                              </Col>
                              
                            </Row>
                          </Col>
                          
                        </Row>
                      </Card.Body>
                    </Card>
                    <Card className="mt-2">
                      <Card.Body>
                        <Row  className="mt-2">
                          <Col className="job-description-header">
                            Eligibility
                             <hr />
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col>
                            <Row>
                              <Col>
                                <RadioButtonCheckedIcon style={{ color: '#999696' }}/> 10th Percentage Required: {d.ssc_marks}%
                              </Col>
                              <Col>
                                <RadioButtonCheckedIcon style={{ color: '#999696' }}/> 12th Percentage Required: {d.hsc_marks}%
                              </Col>
                              <Col>
                                <RadioButtonCheckedIcon style={{ color: '#999696' }}/> BE percentage Required: {d.be_marks}%
                              </Col>
                               <Col>
                                <RadioButtonCheckedIcon style={{ color: '#999696' }}/> {d.year_of_passing} passouts
                              </Col>
                            </Row>
                          </Col>
                          
                        </Row>
                      </Card.Body>
                    </Card>
                    <Card className="mt-2">
                      <Card.Body>
                        <Row  className="mt-2">
                          <Col className="job-description-header">
                            Job Description
                             <hr />
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col>
                            {d.job_description}
                          </Col>
                          
                        </Row>
                      </Card.Body>
                    </Card>
                    <Card className="mt-2">
                      <Card.Body>
                        <Row  className="mt-2">
                          <Col className="job-description-header">
                            Rounds
                             <hr />
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col>
                            {d.rounds}
                          </Col>
                          
                        </Row>
                      </Card.Body>
                    </Card>
                    <Card className="mt-2">
                      <Card.Body>
                        <Row  className="mt-2">
                          <Col className="job-description-header">
                            Contact Details
                             <hr />
                          </Col>
                        </Row>
                        <Row className="mt-2">
                              <Col md={2}>
                                <PersonPinIcon style={{ color: '#999696' }}/> {d.contact_name}
                              </Col>
                              <Col md={2}>
                                <CallIcon style={{ color: '#999696' }}/> {d.contact_phone}
                              </Col>
                              <Col md={3}>
                                <EmailIcon style={{ color: '#999696' }}/> {d.contact_email}
                              </Col>
                              <Col>
                                <LanguageIcon style={{ color: '#999696' }}/><a href={d.website}> {d.website}</a>
                              </Col>
                          
                        </Row>
                      </Card.Body>
                    </Card>
                     
                     
                  </Card.Body>
                </Card>
                
               

                

              </Container>
                   
            ) 
        })}
      
      
    </>
  );
}

export default OpenJob;
