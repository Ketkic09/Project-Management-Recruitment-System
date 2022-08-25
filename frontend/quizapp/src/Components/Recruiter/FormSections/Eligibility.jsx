import React,{useContext} from 'react';
import NavbarJob from '../NavbarJob'
import Sidebar from '../Sidebar'
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap'
import InfoIcon from '@mui/icons-material/Info';
import { JobContext } from "../../../Helpers/Contexts";
import history from '../../History'
function Eligibility() {
        const{
     setjobState,appstartdate,setAppstartdate,appenddate,setAppenddate,appstarttime,setAppstarttime,appendtime,setAppendtime,sscpercentage,setSscpercentage,hscpercentage,setHscpercentage,setYearofpassing,yearofpassing,bemarks,setBemarks

  }= useContext(JobContext);

  const saveandnext3=(next)=>{
      if(appstartdate==="" || appstarttime==="" || appendtime==="" || appenddate===''){
          console.log("error")
      }
      else{
          console.log(typeof appendtime)
          next.preventDefault()
          setjobState("rounds")
          history.push('/recruiter/create_job/rounds')
          console.log(appstartdate,appenddate,appstarttime,appendtime,sscpercentage,hscpercentage,yearofpassing,bemarks)
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
                                    <Col md={1} className='justify-content-center text-center align-self-center'>
                                        <InfoIcon className="cardIcon"/>
                                    </Col>
                                    <Col>
                                        Your listing will be live in Private mode instantly. The visibility you have selected below will only be applicable once the opportunity gets approved by our admins which takes maximum 24 hours.
                                    </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className='mt-3'>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                        <Form.Group className="mb-3" controlId="">
                                            <Form.Label>Application Start Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="appstartdate"
                                                placeholder="appstartdate"
                                                value={appstartdate}
                                                onChange={(asd)=>setAppstartdate(asd.target.value)}
                                            />
    
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                        <Form.Group className="mb-3" controlId="">
                                            <Form.Label>Application Start Time</Form.Label>
                                            <Form.Control
                                                type="time"
                                                name="appstarttime"
                                                placeholder="appstarttime"
                                                value={appstarttime}
                                                onChange={(ast)=>{setAppstarttime(ast.target.value)}}
                                            />
    
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Form.Group className="mb-3" controlId="">
                                            <Form.Label>Application End Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="appenddate"
                                                placeholder="appenddate"
                                                value={appenddate}
                                                onChange={(aet)=>{setAppenddate(aet.target.value)}}
                                            />
    
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                        <Form.Group className="mb-3" controlId="">
                                            <Form.Label>Application End Time</Form.Label>
                                            <Form.Control
                                                type="time"
                                                name="appendtime"
                                                placeholder="appendtime"
                                                value={appendtime}
                                                onChange={(aet)=>{setAppendtime(aet.target.value)}}
                                            />
    
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className='mt-3'>
                                <Card.Body>
                                    <Row>
                                        <Col xs={6} md={6}>
                                            <Form.Group className="mb-3">
                                            <Form.Label>Minimum Percentage in SSC required</Form.Label>
                                            <Form.Control type="text" placeholder="60" value={sscpercentage} onChange={(ssc)=>{setSscpercentage(ssc.target.value)}} />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6} md={6}>
                                            <Form.Group className="mb-3">
                                            <Form.Label>Minimum Percentage in HSC/Diploma required</Form.Label>
                                            <Form.Control type="text" placeholder="60" value={hscpercentage} onChange={(hsc)=>{setHscpercentage(hsc.target.value)}} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card><Card className='mt-3'>
                                <Card.Body>
                                    <Row>
                                        <Col xs={6} md={6}>
                                            <Form.Group className="mb-3">
                                            <Form.Label>Minimum BE percentage</Form.Label>
                                            <Form.Control type="text" placeholder="60" value={bemarks} onChange={(be)=>{setBemarks(be.target.value)}} />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6} md={6}>
                                            <Form.Group className="mb-3">
                                            <Form.Label>Year of passing<span>  (Write years seperated with comma)</span></Form.Label>
                                            <Form.Control type="text" placeholder="2022,2021,2020" value={yearofpassing} onChange={(yop)=>{setYearofpassing(yop.target.value)}} />
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
                        onClick={saveandnext3}
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

export default Eligibility;
