import React from 'react'
import {Navbar,Container,Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import MenuIcon from '@mui/icons-material/Menu';
function NavbarTeachar() {
  return (
      <>
    <Navbar className='border-bottom navbar-style'>
        <Container fluid>
           
            
            <Navbar.Brand href="#home" style={{color: "white"}}>PMRS</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                 <Button style={{backgroundColor: "#3330a3"}}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:8000/TeacherDashboard/";
        }}
      >
        Back To Dashboard
      </Button>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>

  )
}

export default NavbarTeachar