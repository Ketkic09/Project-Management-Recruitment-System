import React,{useState,useContext} from 'react';
import {Row,Col,Container,Card,Form, Dropdown, Button} from "react-bootstrap"
import NavbarJob from '../NavbarJob';
import Sidebar from '../Sidebar';
import InfoIcon from '@mui/icons-material/Info';
import { JobContext } from "../../../Helpers/Contexts";
import history from '../../History'
import "../Sidebar.css"
function Rounds() {
  const{
   setjobState,inputList, setInputList
  }= useContext(JobContext);
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { roundName: "", roundInfo: "" }]);
  };
   const saveandnext4=(next)=>{
      
    next.preventDefault()
    setjobState("jobdescription")
    history.push('/recruiter/create_job/job_description')
    console.log(typeof JSON.stringify(inputList))
    
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
                                'Finalize' round is the default last round for your opportunity. It will only be visible to the recruiters on their dashboard and not to the candidates applying for this position.
                              </Col>
                            </Row>
                          </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <Card>
                          <Card.Body>
                            <Row>
                              <Col >
                                List all the rounds separately to give users a clear understanding of how they will proceed forward in this opportunity.
                              </Col>
                      
                            </Row>
                          </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  {inputList.map((x, i) => {
                    return(
                      <Row className="mt-3">
                    <Col>
                      <Card>
                          <Card.Body>
                            <Row>
                              <Col md={8}>
                                <Row>
                                  
                                   <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Round name</Form.Label>
                                        <Form.Control name="roundName" type="text" placeholder="Aptitude Test" value={x.roundName} onChange={e => handleInputChange(e, i)}
  />
                                    </Form.Group>
                                  
                        
                                </Row>
                                <Row>
                                  <Col>
                                   <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Round information</Form.Label>
                                        <Form.Control as="textarea" rows={4} aria-label="With textarea" name="roundInfo" value={x.roundInfo} placeholder='Verbal,Numerical,Logical' onChange={e => handleInputChange(e, i)} />
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </Col>
                              <Col>
                      
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                {inputList.length !== 1 && <Button
                                  variant="danger"
                                  onClick={() => handleRemoveClick(i)}>Remove</Button>}
            
                                
                              </Col>
                              <Col md={6} className="text-right">
                    <div className="next">
                      
                      {inputList.length - 1 === i && <Button variant="success" className="float-right ml-2" onClick={handleAddClick}>Add</Button>}
                    </div>
                  </Col>
                            </Row>

                          </Card.Body>
                         
                      </Card>
                    </Col>
                  </Row>
                    );
                  })}
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
                      onClick={saveandnext4}
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

export default Rounds;
