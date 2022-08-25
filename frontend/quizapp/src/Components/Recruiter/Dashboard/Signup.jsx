import React,{useState,useContext} from 'react'
import NavbarDashboard from './NavbarDashboard'
import { Card,Container,Row,Col,Button,InputGroup,FormGroup,Form,FloatingLabel } from 'react-bootstrap'
import "./Dashboard.css";
import axios from 'axios';
import "./Signup.css"
import { DashboardContext } from '../../../Helpers/Contexts'
import history from "../../History";

function Signup() {
    const[name,setName]=useState("")
    const[organization,setOrganization]=useState("")
    const[email,setEmail]=useState("")
    const[mobile,setMobile]=useState("")
    const[password,setPassword]=useState("")
    const[confirm_password,setConfirm_password]=useState("")
    const[designation,setDesignation]=useState("")
    const[username,setUsername]=useState("")
    const{alljobs,jobcode,setJobcode,setAlljobs,setDashboardstate}=useContext(DashboardContext)
  const handlelogin=()=>{
    setDashboardstate("/recruiter/dashboard/login")
    history.push("/recruiter/dashboard/login");
  }
  const handleit=()=>{
    console.log(username,password,email,name)
       axios.post('http://localhost:8000/recruiter/api/v1/Account/', {
      	name: name,
        organization:organization,
        mobile_no: mobile,
        designation: designation,
        email:email,
        username:username
      })
.then(response => { 
	console.log(response)
})
.catch(error => {
    console.log(error.response)
});
const successregister=(response)=>{
  console.log(response.data.user.username)
  setDashboardstate("/recruiter/dashboard/login")
  history.push("/recruiter/dashboard/login");

}
const api = axios.create({
    baseURL: "http://localhost:8000/recruiter/api/v1/register/",
  });
 api.post('/', {
      	
        email:email,
        password:password,
        username:username
      })
.then(response => { 
	console.log(response)
  successregister(response)
})
.catch(error => {
    console.log(error.response)
});


       
  }
  return (
    <>
      <NavbarDashboard/>
      <Container className='mt-2 complete-app'>
            <Row>
               
                        <Row className='text-center mt-1 text-uppercase'>
                            <h1 className='signup-header'>Recruiter Registration</h1>

                        </Row>
                        <Row className="text-center">
                          <p>Enter Your Registration Details</p>
                        </Row>

                        <Row className='m-2'>
                            <Card className="shadow-lg">
                                <Card.Body>
                                  <Row className='m-3'>
                                            <Col>
                                                 <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Name"
                                                    className="mb-3 form-label-style"
                                                  >
                                                    <Form.Control placeholder="Name" value={name} onChange={(n)=>{setName(n.target.value)}}/>
                                                  </FloatingLabel>
                                            </Col>
                                             <Col>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Username"
                                                    className="mb-3 form-label-style"
                                                  >
                                                    <Form.Control placeholder="Username" value={username} onChange={(usr)=>{setUsername(usr.target.value)}}/>
                                                  </FloatingLabel>
                                              
                                            </Col>
                                  </Row>
                                  <Row className='m-3'>
                                            
                                             <Col>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Organization"
                                                    className="mb-3 form-label-style"
                                                  >
                                                    <Form.Control placeholder="Organization" value={organization} onChange={(org)=>{setOrganization(org.target.value)}}/>
                                                </FloatingLabel>
                                                
                                            </Col>
                                            <Col>
                                                 <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Designation"
                                                    className="mb-3 form-label-style"
                                                  >
                                                    <Form.Control placeholder="Designation" value={designation} onChange={(des)=>{setDesignation(des.target.value)}}/>
                                                </FloatingLabel>
                                            
                                            </Col>
                                  </Row>
                                  <Row className='m-3'>
                                            <Col>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Email ID"
                                                    className="mb-3 form-label-style"
                                                  >
                                                    <Form.Control placeholder="Email ID" value={email} onChange={(em)=>{setEmail(em.target.value)}}/>
                                                </FloatingLabel>
                                                
                                            </Col>
                                             <Col>
                                                 <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Mobile No."
                                                    className="mb-3 form-label-style"
                                                  >
                                                    <Form.Control placeholder="Mobile No." value={mobile} onChange={(mob)=>{setMobile(mob.target.value)}}/>
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
                                                    <Form.Control type="password" placeholder="Password" value={password} onChange={(pass)=>{setPassword(pass.target.value)}}/>
                                                </FloatingLabel>
                                            </Col>
                                             <Col>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Confirm Password"
                                                    className="mb-3 form-label-style"
                                                  >
                                                    <Form.Control type="password" placeholder="Confirm Password" value={confirm_password} onChange={(pass2)=>{setConfirm_password(pass2.target.value)}}/>
                                                </FloatingLabel>
                                                
                                            </Col>
                                  </Row>
                                                                    <Row className='m-3'>
                                            <Col style={{ display: "flex" }}>
                                               <Button style={{ marginLeft: "auto" }} variant="outline-primary" onClick={()=>{handlelogin()}}>
                                                 Login
                                               </Button>
                                            </Col>
                                             <Col>
                                               <Button className="cardbutton"  type="button" onClick={()=>{handleit()}}>
                                                 Register
                                               </Button>
                                            </Col>
                                  </Row>
                                </Card.Body>
                            </Card>
                          </Row>
                  
            </Row>
      </Container>
    </>
  )
}

export default Signup