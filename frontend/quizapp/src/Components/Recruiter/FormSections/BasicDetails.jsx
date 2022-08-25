import React,{useContext} from 'react';
import NavbarJob from '../NavbarJob';
import Sidebar from '../Sidebar';
import {Row,Col,Container,Card,Form, Button,InputGroup,FormControl} from "react-bootstrap"
import "../Sidebar.css"
import { JobContext } from "../../../Helpers/Contexts";
import history from '../../History'

function BasicDetails() {
    const{
    
    setjobState,opportunity_title, setOpportunity_title,
        url, setUrl,startdate,setStartdate,enddate,setEnddate,starttime,setStarttime,endtime,setEndtime,organization,setOrganization,country,setCountry,state,setState,city,setCity
  }= useContext(JobContext);
  
  
  
  
  const handleCountry =(c)=>{
    setCountry(c.target.value);
  }
  
  const handleState=(s)=>{
      setState(s.target.value);
  }
  
  const handleCity=(c)=>{
      setCity(c.target.value);
  }
  //Final Section
  const saveandnext2=(next)=>{
      if(opportunity_title==="" || url==="" || startdate==="" || starttime===''){
          console.log("error")
      }
      else{
          
          next.preventDefault()
          setjobState("eligibility")
          history.push('/recruiter/create_job/eligibility')
          
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
                    <Card>
                        <Card.Body>
                            <Row>
                        <Col md={8}>
                            <Form>
                                <Row>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Opportunity Title</Form.Label>
                                        <Form.Control type="text" placeholder="Ex. Product Manager of Graduate Engineer Trainee" value={opportunity_title} onChange={(o)=>setOpportunity_title(o.target.value)}   />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className="mb-2" controlId="">
                                        <Form.Label>Website Url</Form.Label>
                                        <InputGroup className="mb-3">
                                        <InputGroup.Text>https://</InputGroup.Text>
                                        <FormControl aria-label="First name" value={url} onChange={(u)=>setUrl(u.target.value)} />
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Col>
                                       <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Opportunity Start Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="starttime"
                                            placeholder="starttime"
                                            value={startdate}
                                            onChange={(e) => setStartdate(e.target.value)}
                                        />
 
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                       <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Opportunity Start Time</Form.Label>
                                        <Form.Control
                                            type="time"
                                            name="starttime"
                                            placeholder="starttime"
                                            value={starttime}
                                            onChange={(st)=>setStarttime(st.target.value)}
                                        />
 
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                       <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Opportunity End Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="endate"
                                            placeholder="enddate"
                                            value={enddate}
                                            onChange={(ed)=>setEnddate(ed.target.value)}
                                        />
 
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                       <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Opportunity End Time</Form.Label>
                                        <Form.Control
                                            type="time"
                                            name="endtime"
                                            placeholder="endtime"
                                            value={endtime}
                                            onChange={(et)=>setEndtime(et.target.value)}
                                        />
 
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                       
                    </Row>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3">
                        <Card.Body>
                            <Row>
                                <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Organization</Form.Label>
                                        <Form.Control type="text" placeholder="ABC Company" value={organization} onChange={(og)=>{setOrganization(og.target.value)}} />
                                    </Form.Group>
                            </Row>

                        </Card.Body>
                    </Card>
                    <Card className="mt-3">
                        <Card.Body>
                            <Row>
                                <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Location</Form.Label>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                <Form.Text muted >Country</Form.Text>
                                                <Form.Select value={country} onChange={handleCountry}>
                                                <option value="India">India</option>
                                                <option value="UK">UK</option>
                                                <option value="America">America</option>
                                                
                                                </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                <Form.Text muted >State</Form.Text>
                                                <Form.Select value={state} onChange={handleState}>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Washington">Washington</option>
                                                
                                                </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                <Form.Text muted >City</Form.Text>
                                                <Form.Select value={city} onChange={handleCity}>
                                                <option>Mumbai</option>
                                                <option>Thane</option>
                                                <option>Palghar</option>
                                                
                                                </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form.Group>
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
                      onClick={saveandnext2}

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

export default BasicDetails;
