import React,{useState,useEffect,useContext} from 'react'
import { Card,Container,Row,Col,Button,FormControl,InputGroup,Toast} from 'react-bootstrap'
import NavbarDashboard from './NavbarDashboard'
import SidebarDashboard from './SidebarDashboard'
import axios from "axios";
import { DashboardContext } from '../../../Helpers/Contexts';
import {useHistory} from "react-router-dom";

//get the userid from the login only
function AccountsDashboard() {
    const{username,user_id,dashboardstate,setDashboardstate}=useContext(DashboardContext)
    const[userinfo,setUserinfo]=useState([])
    const history = useHistory();
    const [showA, setShowA] = useState(false);
 

  const toggleShowA = () => setShowA(!showA);
   console.log(user_id)
   useEffect(() => {
    axios
      .get(`http://localhost:8000/recruiter/api/v1/Account/${user_id}/`)
      .then((res) => {
        setUserinfo(res.data);
      })
      .catch((error) => console.log("error"));
  }, []);
    const[name,setName]=useState(userinfo.name)
    const[organization,setOrganization]=useState(userinfo.organization)
    const[email,setEmail]=useState(userinfo.email)
    const[mobile,setMobile]=useState(userinfo.mobile)
    const[designation,setDesignation]=useState(userinfo.designation)
  console.log(userinfo)
  const handleback=()=>{
       setDashboardstate("/recruiter/dashboard/myjobs")
    history.goBack()
  }
   const handleinfoedit=(id)=>{
       axios.patch(`http://localhost:8000/recruiter/api/v1/Account/${id}/`,{
           name:name,
           organization:organization,
           email:email,
           mobile_no:mobile,
           designation:designation,
           

       })
       toggleShowA()
      
      
   }
    return (
        <>
            <NavbarDashboard/>
            <Container fluid>
                <Row>
                    <Col md={3}  className="d-none d-sm-block">
                        <SidebarDashboard/>
                    </Col>
                    <Col className='mt-3'>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <h2>My Details</h2>
                                </Row>
                                <Toast show={showA} onClose={toggleShowA}> 
          <Toast.Header>
            <strong className="me-auto">Details</strong>
            
          </Toast.Header>
          <Toast.Body>Details Saved Successfully!</Toast.Body>
        </Toast>
                                <Row className='m-1'>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Name</InputGroup.Text>
                                                <FormControl
                                                    aria-describedby="basic-addon1"
                                                    style={{backgroundColor: '#ffffff'}}
                                                    onChange={(n) => setName(n.target.value)}
                                                    defaultValue={userinfo.name}
                                                    
                                                />
                                                </InputGroup>
                                            </Row>
                                            <Row>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Organization Name</InputGroup.Text>
                                                <FormControl
                                                    aria-describedby="basic-addon1"
                                                    style={{backgroundColor: '#ffffff'}}
                                                    onChange={(org) => setOrganization(org.target.value)}
                                                    defaultValue={userinfo.organization}
                                                    
                                                />
                                                </InputGroup>
                                            </Row>
                                            <Row>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Designation</InputGroup.Text>
                                                <FormControl
                                                    aria-describedby="basic-addon1"
                                                    style={{backgroundColor: '#ffffff'}}
                                                    onChange={(des) => setDesignation(des.target.value)}
                                                    defaultValue={userinfo.designation}
                                                    
                                                />
                                                </InputGroup>
                                            </Row>
                                            <Row>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Mobile No.</InputGroup.Text>
                                                <FormControl
                                                    aria-describedby="basic-addon1"
                                                    style={{backgroundColor: '#ffffff'}}
                                                    onChange={(mob) => setMobile(mob.target.value)}
                                                    defaultValue={userinfo.mobile_no}
                                                    
                                                />
                                                </InputGroup>
                                            </Row>
                                            <Row>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Email ID</InputGroup.Text>
                                                <FormControl
                                                    aria-describedby="basic-addon1"
                                                    style={{backgroundColor: '#ffffff'}}
                                                    onChange={(em) => setEmail(em.target.value)}
                                                    defaultValue={userinfo.email}
                                                    
                                                />
                                                </InputGroup>
                                            </Row>
                                        <Button
                                            variant="primary"
                                            type="button"
                                            className=""
                                            onClick={() => {
                                            handleback();
                                            }}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            variant="success"
                                            type="button"
                                            className="m-2"
                                            onClick={() => {
                                            handleinfoedit(userinfo.id);
                                            }}
                                        >
                                            Save Changes
                                        </Button>
                                        </Card.Body>
                                    </Card>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
  )
}

export default AccountsDashboard