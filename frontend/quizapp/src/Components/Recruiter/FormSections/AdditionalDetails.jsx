import React,{useContext} from 'react';
import NavbarJob from '../NavbarJob';
import Sidebar from '../Sidebar';
import {Row,Col,Container,Card,Form,Button} from "react-bootstrap"
import '../Sidebar.css'
import "bootstrap/dist/css/bootstrap.min.css";

import { JobContext } from "../../../Helpers/Contexts";
import history from '../../History'
import axios from 'axios';
import { username_recruiter } from '../Dashboard/HomeDashboard';
function AdditionalDetails() {
  const{
    setjobState,
        visibility,category,domain,
        opportunity_title,url, startdate,enddate,starttime,endtime,organization,
        country,state,city,
        appstartdate,appenddate,appstarttime,appendtime,sscpercentage,hscpercentage,
        inputList,
        description,
        salary,amount,jobupdate,timing,currency,period,
        name,setName,email,setEmail,phone,setPhone,other,setOther,bemarks,yearofpassing
  }= useContext(JobContext);
  const api4 = axios.create({
    baseURL: "http://localhost:8000/recruiter/api/v1/DeleteJob/",
  });
  const handleSubmit=(event)=>{
    api4.post("/",{
      recruiter_username:username_recruiter,
      visibility:visibility,
      category:category,
      domain:domain,
      title:opportunity_title,
      website:url,
      opportunity_start_date:startdate,
      opportunity_start_time:starttime,
      opportunity_end_date:enddate,
      opportunity_end_time:endtime,
      organization:organization,
      country:country,
      state:state,
      city:city,
      application_start_date:appstartdate,
      application_start_time:appstarttime,
      application_end_date:appenddate,
      application_end_time:appendtime,
      ssc_marks:sscpercentage,
      hsc_marks:hscpercentage,
      be_marks:bemarks,
      year_of_passing:yearofpassing,
      rounds:JSON.stringify(inputList),
      job_description:description,
      salary_type:salary,
      salary_amount:amount,
      currency:currency,
      period:period,
      job_update:jobupdate,
      timing:timing,
      contact_name:name,
      contact_email:email,
      contact_phone:phone,
      additional_details: other
    });
    event.preventDefault();
    console.log("success")
    setjobState("opportunity");
  }
  console.log( visibility,category,domain,
        opportunity_title,url, startdate,enddate,starttime,endtime,organization,
        country,state,city,
        appstartdate,appenddate,appstarttime,appendtime,sscpercentage,hscpercentage,
        inputList,
        description,
        salary,amount,jobupdate,timing,currency,period,
        name,email,phone,other)
  console.log("ex")
  console.log(name,email,phone,other)
  return (
     <>
        <NavbarJob/>
        <Container fluid>
          <Row>
            <Col md={3} className="d-none d-sm-block">
              <Sidebar/>
            </Col>
            <Col className='mt-3'>
              <Form>
              <Card>
                <Card.Body>
                    <Card>
                        <Card.Body>
                            <Row>
                                <h4>Important Contact</h4>
                                <p>Mention the name, email id, and contact number of the recruiter.</p>
                            </Row>
                            <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                <Form.Text muted >Name</Form.Text>
                                                <Form.Control value={name} onChange={(n)=>{setName(n.target.value)}}></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                <Form.Text muted >Email</Form.Text>
                                                <Form.Control value={email} onChange={(e)=>{setEmail(e.target.value)}}></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                <Form.Text muted >Contact No.</Form.Text>
                                                <Form.Control value={phone} onChange={(p)=>{setPhone(p.target.value)}}></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3">
                        <Card.Body>
                            <Row>
                                <h4>Other Details</h4>
                            </Row>
                            <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                <Form.Control as="textarea" rows={8} aria-label="With textarea" name="roundInfo"  value={other} onChange={(o)=>{setOther(o.target.value)}} />
                                                
                                                </Form.Group>
                                            </Col>
                                        </Row>
                        </Card.Body>
                    </Card>
                    
                    <Row>
                         <Col md={6} className="text-left">
                  <Button
                    className="mt-3 align-item-right"
                    variant="danger btn-block"
                    type="submit"
                  >
                    Cancel
                  </Button>
                </Col>
                <Col md={6} className="text-right">
                  <div className="next">
                    <Button
                      className="mt-3 align-item-right"
                      variant="success btn-block"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Save and Submit
                    </Button>
                  </div>
                </Col>
                    </Row>
                </Card.Body>
              </Card>
              </Form>
            </Col>
          </Row>
        </Container>
    </>

  );
}

export default AdditionalDetails;
