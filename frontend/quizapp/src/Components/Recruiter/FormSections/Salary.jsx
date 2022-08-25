import React,{useContext} from 'react';
import NavbarJob from '../NavbarJob';
import Sidebar from '../Sidebar';
import {Row,Col,Container,Card,Form, Button} from "react-bootstrap"
import '../Sidebar.css'
import "bootstrap/dist/css/bootstrap.min.css";
import PaidIcon from '@mui/icons-material/Paid';
import WorkIcon from '@mui/icons-material/Work';
import { JobContext } from "../../../Helpers/Contexts";
import history from '../../History'

function Salary() {
   const{
    setjobState,salary,setSalary,amount,setAmount,jobupdate,setJobupdate,timing,setTiming,currency,setCurrency,period,setPeriod
  }= useContext(JobContext);
  
  

   const handleCurrency =(c)=>{
    setCurrency(c.target.value);
  }
 
   const handlePeriod =(p)=>{
    setPeriod(p.target.value);
  }
  const saveandnext5=(next)=>{
     if(salary==="" || jobupdate==="" || timing===""){
          console.log("error")
      }
      else{ 
          next.preventDefault()
          setjobState("additional")
          history.push('/recruiter/create_job/additional_details')
          console.log(salary,amount,currency,period,jobupdate,timing)
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
                              <Col md={1}>
                                < PaidIcon/>
                              </Col>
                              <Col md={11}>
                                <Row>
                                        <Col xs={12} md={12}>
                                            <Form.Group className="mb-3">
                                            <h4><Form.Label>Salary</Form.Label></h4>
                                            <div className="mb-3">
                                                <Form.Check
                                                inline
                                                label="Unpaid"
                                                name="group1"
                                                type="radio"
                                                value="unpaid"
                                                onChange={() => setSalary("unpaid")}
                                                />
                                                <Form.Check
                                                inline
                                                label="Paid"
                                                name="group1"
                                                type="radio"
                                                value="paid"
                                                onChange={() => setSalary("paid")}
                                                />
                                                <Form.Check
                                                inline
                                                label="Negotiable"
                                                name="group1"
                                                type="radio"
                                                value="negotiable"
                                                onChange={()=>setSalary("negotiable")}
                                                />
                                                <Form.Check
                                                inline
                                                label="Not Disclosed"
                                                type="radio"
                                                name="group1"
                                                value="Not Disclosed"
                                                onChange={()=>setSalary("not disclosed")}
                                                />
                                            </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                <Form.Text muted >Amount</Form.Text>
                                                <Form.Control value={amount} onChange={(a)=>{setAmount(a.target.value)}}></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                <Form.Text muted >Currency</Form.Text>
                                                <Form.Select value={currency} onChange={handleCurrency}>
                                                <option value="₹ (INR)">₹ (INR)</option>
                                                <option value="$ (USD)">$ (USD)</option>
                                                <option value="€ (EUR)">€ (EUR)</option>
                                                <option value="¥ (CNY)">¥ (CNY)</option>
                                                <option value="£ (GBP)">£ (GBP)</option>
                                                <option value="₽ (RUB)">₽ (RUB)</option>
                                                </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                <Form.Text muted >Period</Form.Text>
                                                <Form.Select value={period} onChange={handlePeriod}>
                                                <option value="Week">Week</option>
                                                <option value="Month">Month</option>
                                                <option value="Year">Year</option>
                                                
                                                </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                              </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3">
                        <Card.Body>
                            <Row>
                              <Col md={1}>
                                <WorkIcon/>
                              </Col>
                              <Col md={5}>
                                <Row>
                                        <Col xs={12} md={12}>
                                            <Form.Group className="mb-3">
                                            <h4><Form.Label>Job Update</Form.Label></h4>
                                            <div className="mb-3">
                                                <Form.Check
                                                inline
                                                label="In-Office"
                                                name="group2"
                                                type="radio"
                                                value="In-Office"
                                                onChange={() => setJobupdate("In-office")}
                                                />
                                                <Form.Check
                                                inline
                                                label="Work From Home"
                                                name="group2"
                                                type="radio"
                                                value="Work From Home"
                                                onChange={() => setJobupdate("Work From Home")}
                                                />
                                                
                                               
                                            </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                              </Col>
                              <Col md={6}>
                                <Row>
                                        <Col xs={12} md={12} md={{offset: 3 }}>
                                            <Form.Group className="mb-3">
                                            <h4><Form.Label>Job Timing</Form.Label></h4>
                                            <div className="mb-3">
                                                <Form.Check
                                                inline
                                                label="Full-Time"
                                                name="group3"
                                                type="radio"
                                                value="Full-Time"
                                                onChange={() => setTiming("Full-Time")}
                                                />
                                                <Form.Check
                                                inline
                                                label="Part-Time"
                                                name="group3"
                                                type="radio"
                                                value="Part-Time"
                                                onChange={() => setTiming("Part-Time")}
                                                />
                                            </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
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
                      onClick={saveandnext5}
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

export default Salary;
