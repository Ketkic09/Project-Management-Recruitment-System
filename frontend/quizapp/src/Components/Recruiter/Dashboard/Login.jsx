import React,{useState,useContext} from 'react'
import NavbarDashboard from './NavbarDashboard'
import { Card,Container,Row,Col,Button,InputGroup,FloatingLabel,Form } from 'react-bootstrap'
import "./Dashboard.css";
import axios from 'axios';
import { DashboardContext } from '../../../Helpers/Contexts'
import history from "../../History";
import "./Signup.css"

function Login() {
    const[username1,setUsername1]=useState("")
    const[password,setPassword]=useState("")
    const{alljobs,jobcode,setJobcode,setAlljobs,setDashboardstate,setUsername}=useContext(DashboardContext)
    const handlesignup=()=>{
      setDashboardstate("/recruiter/dashboard/signup")
      history.push("/recruiter/dashboard/signup");
    }
    const handleit=()=>{
         axios.post('http://localhost:8000/recruiter/api/v1/login/', {
      	username: username1,
        password: password
      })
.then(response => { 
	console.log(response)
  setUsername(username1)
  setDashboardstate("/recruiter/dashboard/home")
  history.push("/recruiter/dashboard/home");
})
.catch(error => {
    console.log(error.response)
});
    }
  return (
    <>
        <NavbarDashboard/>
         <Container className='mt-2'>
            <Row>
                <Card className="logincard mt-4">
                    <Card.Body>
                      <Row>
                        <Col className="col-md-6 col-lg-5 d-none d-md-block loginleft">
                          <h4 class="text-white text-center loginleft-text p-2">Project Management & Recruitment System</h4>
                        </Col>
                        <Col>
                            
                                  <Row className='m-3'>
                                            <Row className='mt-2'>
                                                <h2 className='signup-header'>Recruiter Login</h2>
                                            </Row>
                                            <Row>
                                              <h6 class="fw-normal mt-3 pb-3">Login into your account</h6>
                                            </Row>
                                             <Col>
                                                 <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Username"
                                                    className="mb-2 form-label-style"
                                                  >
                                                    <Form.Control placeholder="Username" value={username1} onChange={(usr)=>{setUsername1(usr.target.value)}}/>
                                                  </FloatingLabel>
                                               
                                            </Col>
                                  </Row>
                                  
                                 
                                  <Row className='m-3'>
                                            <Col>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Password"
                                                    className="mb-3 form-label-style"
                                                  >
                                                    <Form.Control placeholder="Password"  type="password"
                                                    value={password} onChange={(pass)=>{setPassword(pass.target.value)}}/>
                                                  </FloatingLabel>
                                                
                                            </Col>
                                             
                                  </Row>
                                                                    <Row className='m-3'>
                                            <Col style={{ display: "flex" }}>
                                               <Button style={{ marginLeft: "auto" }} variant="outline-primary" onClick={()=>{handlesignup()}}>
                                                 Register
                                               </Button>
                                            </Col>
                                             <Col>
                                               <Button className="cardbutton"  type="button" onClick={()=>{handleit()}}>
                                                 Login
                                               </Button>
                                            </Col>
                                  </Row>
                               
                        </Col>
                      </Row>
                        
                        <Row className='m-3'>
                          
                          </Row>
                    </Card.Body>
                </Card>
            </Row>
      </Container>
    </>
  )
}

export default Login