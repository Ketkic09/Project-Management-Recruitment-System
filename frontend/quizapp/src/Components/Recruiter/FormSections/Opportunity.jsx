import React,{useState,useContext} from 'react';
import NavbarJob from '../NavbarJob';
import Sidebar from '../Sidebar';
import {Row,Col,Container,Card,Form, Dropdown, Button} from "react-bootstrap"
import InfoIcon from '@mui/icons-material/Info';
import "../Sidebar.css"
import { JobContext } from "../../../Helpers/Contexts";
import history from '../../History'
function Opportunity() {
  const{
    value,setCategory,category,
    visibility,
    setVisibility,create_job_list,setjobState,domain,setDomain
  }= useContext(JobContext);
  //For Category
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  //For Domain section
  
  //final section
  const saveandnext1=(e)=>{
    if(visibility==='' || value==='' || domain===''){
      console.log("error")
    }
  else{
    create_job_list[0].visibility=visibility
    create_job_list[0].category=value
    create_job_list[0].domains=domain
    e.preventDefault();
    setjobState("basic_details")
    history.push('/recruiter/create_job/basic_details')
  }
  
  }
  

  return (
      <>
        <NavbarJob/>
        <Container fluid>
          <Row>
            <Col md={3} className="d-none d-sm-block">
              <Sidebar/>
            </Col>
            <Col className='mt-3'>
              <Card>
                <Card.Body>
                  <Row className="mt-3">
                    <Col>
                      <Card border="primary" className='opportunityCard' >
                          <Card.Body>
                            <Row>
                              <Col md={1} className='justify-content-center text-center align-self-center'>
                                <InfoIcon className="cardIcon"/>
                              </Col>
                              <Col>
                                Your listing will be live in Private mode instantly. The visibility you have selected below will only be applicable once the opportunity gets approved by our admins which takes maximum 24 hours.
                              </Col>
                            </Row>
                          </Card.Body>
                      </Card>
                       <Card className='mt-4'>
                            <Card.Body>
                              <Form onSubmit="">
                                  <div key={`inline-radio`} className="mb-3">
                                    <Row>
                                      <Col md={1} className='justify-content-center text-center align-self-center'>
                                        <Form.Check
                                          inline
                                          name="group1"
                                          type="radio"
                                          onChange={() => setVisibility("public")}
                                        />
                                      </Col>
                                      <Col>
                                        <h4>
                                           Public Visibility
                                        </h4>
                                       
                                        
                                      </Col>
                                    </Row>
                                    <hr></hr>
                                    <Row className="mt-3">
                                      <Col md={1} className='justify-content-center text-center align-self-center'>
                                        <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        onChange={() => setVisibility("private")}
                                        
                                      />
                                      </Col>
                                      <Col>
                                        <h4>
                                           Private Visibility
                                        </h4>
                                       
                                       
                                      </Col>
                                    </Row>
                                    
                                  </div>
                              </Form>
                            </Card.Body>
                          </Card>
                    </Col>
                  </Row>
                  <Row className='mt-4'>
                    <Col>
                       <Card>
                      <Card.Body>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select value={value} onChange={handleCategory}>
                              <option value="Jobs">Jobs</option>
                              <option value="Internships">Internships</option>
                              <option value="Hackathons">Hackathons</option>
                              
                            </Form.Select>
                             </Form.Group>
                          </Col>
                          <Col>
                          </Col>
                          </Row>
                        
                      </Card.Body>
                    </Card>
                    </Col>
                   
                  </Row>
                  <Row className='mt-4'>
                    <Col>
                       <Card>
                      <Card.Body>
                        <Row>
                          <Col xs={12} md={12}>
                            <Form.Group className="mb-3">
                            <Form.Label>Domains</Form.Label>
                             <Form.Control
                              placeholder="Web Development, Cloud Computing, Andriod Development, etc."
                              value={domain}
                              onChange={(d) => setDomain(d.target.value)}
                            />
                             </Form.Group>
                          </Col>
                          <Col>
                          </Col>
                          </Row>
                        
                      </Card.Body>
                    </Card>
                    </Col>
                   
                  </Row>
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
                        onClick={saveandnext1}
                      >
                        Save and proceed to next Section
                      </Button>
                    </div>
                  </Col>
                  </Row>
                </Card.Body>
              </Card>
              
            </Col>
          </Row>

        </Container>

      </>
  );
}

export default Opportunity;
