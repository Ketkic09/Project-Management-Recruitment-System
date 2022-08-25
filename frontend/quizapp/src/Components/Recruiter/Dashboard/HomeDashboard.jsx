import React, { useContext,useEffect,useState } from 'react'
import NavbarDashboard from './NavbarDashboard'
import {Container,Row,Col,Card} from "react-bootstrap"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarDashboard from './SidebarDashboard';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import WorkIcon from '@mui/icons-material/Work';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './Dashboard.css'
import { DashboardContext } from '../../../Helpers/Contexts';
export let openjob
let only_domain
export let username_recruiter
function HomeDashboard() {
    const{username,setUsername,alljobs,setAlljobs,myjobs,setMyjobs}=useContext(DashboardContext)
    console.log(username)
    useEffect(() => {
    axios
      .get("http://localhost:8000/recruiter/api/v1/DeleteJob/")
      .then((res) => {
        setAlljobs(res.data);
      })
      .catch((error) => console.log("error"));
  }, []);
  console.log(alljobs)
  //username specific job

    const data = [
    { name: "Facebook", users: 1000 },
    { name: "Instagram", users: 4000 },
    { name: "Twiter", users: 2000 },
    { name: "Telegram", users: 8000},
  ];
  openjob=alljobs.filter(function (item,idx) {
        return item.recruiter_username === username;
      })
      .map(function ({
          id,
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
            id,
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
      console.log(openjob.length)
      
     
      username_recruiter=username
  return (
    <>
        <NavbarDashboard/>
        <Container fluid>
            <Row>
                {/* md-3 issue resolver for wide screen*/}
                 <Col className="d-none d-sm-block" md={3}>
                    <SidebarDashboard/>
                   
                 </Col>
                 
                 <Col className='mt-3'>
                     <Card className='cardbg'>
                         <br>
                         </br>
                         <Row className="mt-5">
                              <Col xs={12} md={6}>
                                   <Card className="shadow-lg">
                                        <Card.Body>
                                            <Row>
                                                   <Col>
                                                    <div className="text-uppercase mb-1 cardtitle">
                                                        Total Jobs
                                                    </div>
                                                    <div className="h5 mb-0 font-weight-bold">
                                                        {openjob.length} <span className='iconsub'>Jobs</span>
                                                    </div>
                                                </Col>
                                                <Col xs md={4} className="cardiconcol">
                                                    <WorkIcon fontSize="large"  className="cardicon"/>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                              </Col>
                               <Col xs={12} md={6}>
                                    <Card className="shadow-lg">
                                        <Card.Body>
                                             <Row>
                                                 
                                                <Col>
                                                    <div className="text-uppercase mb-1 cardtitle">
                                                        Total Registration
                                                    </div>
                                                    <div className="h5 mb-0 font-weight-bold">
                                                        25 <span className='iconsub'>Registrations</span>
                                                    </div>
                                                </Col>
                                                <Col xs md={4} className="cardiconcol">
                                                    <AppRegistrationIcon fontSize="large"  className="cardicon"/>
                                                </Col>
                                                
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                         </Row>
                         <Row className="mt-4 mb-5">
                             <Col xs={12} md={6}>
                                <Card className="shadow-lg">
                                        <Card.Body>
                                             <Row>
                                                 
                                                <Col>
                                                    <div className="text-uppercase mb-1 cardtitle">
                                                        Total Views
                                                    </div>
                                                    <div className="h5 mb-0 font-weight-bold">
                                                        18 <span className='iconsub'>Views</span>
                                                    </div>
                                                </Col>
                                                <Col xs md={4} className="cardiconcol">
                                                    <RemoveRedEyeIcon fontSize="large"  className="cardicon"/>
                                                </Col>
                                                
                                            </Row>
                                        </Card.Body>
                                    </Card>
                             </Col>
                              <Col xs={12} md={6}>
                                    <Card className="shadow-lg">
                                        <Card.Body>
                                             <Row>
                                                 
                                                <Col>
                                                    <div className="text-uppercase mb-1 cardtitle">
                                                        Total Domains
                                                    </div>
                                                    <div className="h5 mb-0 font-weight-bold">
                                                        05 <span className='iconsub'>Domains</span>
                                                    </div>
                                                </Col>
                                                <Col xs md={4} className="cardiconcol">
                                                    <AcUnitIcon fontSize="large"  className="cardicon"/>
                                                </Col>
                                                
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                         </Row>
                         <br>
                         </br>

                     </Card>

                   
                </Col>
            </Row>
            
            
        </Container>
    </>
  )
}

export default HomeDashboard