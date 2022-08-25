import React,{useContext} from 'react';
import NavbarJob from '../NavbarJob'
import Sidebar from '../Sidebar'
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap'
import InfoIcon from '@mui/icons-material/Info';
import { JobContext } from "../../../Helpers/Contexts";
import history from '../../History'
import '../Sidebar.css'

function JobDescription() {
  const{
    setjobState,description, setDescription
  }= useContext(JobContext);
    const saveandnext5=(next)=>{
    if(description===''){
      console.log('error')
    } 
    else{
    next.preventDefault()
    setjobState("salary")
    history.push('/recruiter/create_job/salary')
    console.log(description)
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
                            <Row>
                                    <Col md={1} className='justify-content-center text-center align-self-center'>
                                        <InfoIcon className="cardIcon"/>
                                    </Col>
                                    <Col>
                                        This field helps you to mention the details of this internship/job/project. It is better to include Responsibilities, Qualification, Skills Required, Application Process, Stipend/Salary, etc. in order to get the opportunity approved. The more details, the better! (Minimum Word Limit: 500)
                                    </Col>
                            </Row>
                                    
                        </Card.Body>
                    </Card>
                    <Card className='mt-3'>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Job Description</Form.Label>
                                        <Form.Control as="textarea" rows={10} aria-label="With textarea" name="roundInfo"  placeholder='responsibilities, qualification, skills required, application process, etc.' value={description} onChange={(desc)=>{setDescription(desc.target.value)}}/>
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
                      onClick={saveandnext5}
                    >
                      Save and proceed to next Section
                    </Button>
                  </div>
                </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    </>
  );
};

  


export default JobDescription;
