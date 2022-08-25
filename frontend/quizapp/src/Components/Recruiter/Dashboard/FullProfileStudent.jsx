import React,{useContext,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import {Row,Col,Container,Card,InputGroup,FormControl,Accordion} from "react-bootstrap"
import {passvaluestudents} from './AppliedStudentsDashboard'
import axios from "axios";
import NavbarJob from '../NavbarJob';
function FullProfileStudent() {
   let { id } = useParams();
   let {jobid}=useParams();
   const[allstudents,setAllstudents]=useState([])
   const[projectdetails,setProjectdetails]=useState([])
   useEffect(() => {
    axios
      .get("http://localhost:8000/projectdetails/")
      .then((des)=>{
        setProjectdetails(des.data)
      })
    axios
      .get("http://localhost:8000/jobapply/")
      .then((res) => {
        setAllstudents(res.data);
      })
      .catch((error) => console.log("error"));
  }, []);
   let finalstudents = allstudents.filter(function (item,idx) {
        return (Number(item.jobid) === Number(jobid) && item.Student_username===id);
      })
      .map(function ({
        Student_username,
alternative_email,
alternative_mobile,
branch,
cgpa,
college_name,
hsc_mks,
jobid,
linkedin,
semester,
ssc_mks,
student_email,
student_mobile,
student_name,
technical_skills,
yop,
eq,
endorsement_count,
endrosed_project_ids
      }) {
        return {
          Student_username,
          alternative_email,
          alternative_mobile,
          branch,
          cgpa,
          college_name,
          hsc_mks,
          jobid,
          linkedin,
          semester,
          ssc_mks,
          student_email,
          student_mobile,
          student_name,
          technical_skills,
          yop,
          eq,
          endorsement_count,
          endrosed_project_ids
           
        };
      });
      console.log('final',finalstudents)
    
    const fieldrender=(F,V)=>{
      return(
        <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1" disabled >{F}</InputGroup.Text>
                      <FormControl
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                        readOnly
                        value={V}
                        style={{backgroundColor: '#ffffff'}}
                        
                      />
                    </InputGroup>
      )
    }
    const get_project_id=(V)=>{
    
     const newStr = V.replace(/[\])}[{(]/g, '');
     var b = newStr.split(',').map(Number);
     console.log(b)
     let fetched = projectdetails.filter(function (item,idx) {
        return (b.includes(item.pk));
      })
      .map(function ({
        
        Project_name,
        domain,
        Project_description,
        Git_link
      }) {
        return {
          Project_name,
          domain,
          Project_description,
          Git_link
           
        };
      });
     console.log('yesyes',fetched)
      return(

        fetched.map((p,idx)=>{      
                                
                                return(
                                    <Accordion>

                                    
                                    <Accordion.Item eventKey={idx}>
                                    <Accordion.Header>{p.Project_name}</Accordion.Header>
                                    <Accordion.Body>
                                        
                                          <h6>Project Domain: </h6>
                                          <p>{p.domain}</p>
                                          <h6>Project Description: </h6>
                                          <p>
                                            {p.Project_description}
                                          </p>
                                          <h6>Git Link: </h6>
                                          <p>
                                            {p.Git_link}
                                          </p>
                                      
                                      
                                      
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  </Accordion>
                                )
                               
                            })
      )
    }
    
  return (
      <>

        <NavbarJob/>
        <Container className='mt-2'>
          <Row>
            <Card>
              <Card.Body>
                <Row>
                  <h2>Application Summary</h2>
                </Row>
                {finalstudents.map((val,key)=>{
                  return(
                     <Row className='m-1'>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col md={2} border>
                         <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1"  disabled style={{backgroundColor: '#26ca5c',color:'#000000'}} >EQ</InputGroup.Text>
                      <FormControl
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                        readOnly
                        value={val.eq}
                        style={{backgroundColor: '#ffffff',color:'#26ca5c'}}
                        
                        
                      />
                    </InputGroup>
                        </Col>
                      </Row>
                      
                      <h5>
                        Personal Details
                      </h5>
                      <hr  style={{
                          color: '#000000',
                          backgroundColor: '#000000',
                          height: .5,
                          borderColor : '#000000'
                      }}/>
                     {fieldrender("Name",val.student_name)}
                    <Row>
                      <Col>
                      {fieldrender("Email",val.student_email)}
                      </Col>
                      <Col>
                       {fieldrender("Contact No.",val.student_mobile)}
                      </Col>
                    </Row>
                      <Row>
                      <Col>
                      {fieldrender("Alt. Email",val.alternative_email)}
                      </Col>
                      <Col>
                       {fieldrender("Alt. Contact No.",val.alternative_mobile)}
                      </Col>
                    </Row>

                    
                      
                      <h5 className='mt-2'>
                        Educational Details
                      </h5>
                      <hr  style={{
                          color: '#000000',
                          backgroundColor: '#000000',
                          height: .5,
                          borderColor : '#000000'
                      }}/>
                      <Row>
                        <Col>
                          {fieldrender("College Name",val.college_name)}
                        </Col>
                        <Col md={3}>
                          {fieldrender("Year of Passing",val.yop)}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {fieldrender("Branch",val.branch)}
                        </Col>
                        <Col>
                          {fieldrender("Semester",val.semester)}
                        </Col>
                        <Col>
                          {fieldrender("CGPA",val.cgpa)}
                        </Col>
                        
                      </Row>
                      <Row>
                        <Col>
                          {fieldrender("SSC Percentage",val.ssc_mks)}
                        </Col>
                        <Col>
                          {fieldrender("HSC Percentage",val.hsc_mks)}
                        </Col>
                      </Row>
                      <h5 className='mt-2'>
                        Technical Skills
                      </h5>
                      <hr  style={{
                          color: '#000000',
                          backgroundColor: '#000000',
                          height: .5,
                          borderColor : '#000000'
                      }}/>
                      <Row>
                        <Col>
                          {fieldrender("Skills",val.technical_skills)}
                        </Col>
                      </Row>
                      <h5 className='mt-2'>
                        Social Connect
                      </h5>
                        <hr  style={{
                          color: '#000000',
                          backgroundColor: '#000000',
                          height: .5,
                          borderColor : '#000000'
                      }}/>
                       <Row>
                        <Col>
                          {fieldrender("LinkedIn",val.linkedin)}
                        </Col>
                      </Row>
                       <h5 className='mt-2'>
                        Endorsed Projects
                      </h5>
                      <hr  style={{
                          color: '#000000',
                          backgroundColor: '#000000',
                          height: .5,
                          borderColor : '#000000'
                      }}/>
                      <Row>
                        <Col>
                         
                            {get_project_id(val.endrosed_project_ids)}
                         
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>
                  )
                })}
               
              </Card.Body>
            </Card>
          </Row>
        </Container>
       
      </>
    
  )
}

export default FullProfileStudent