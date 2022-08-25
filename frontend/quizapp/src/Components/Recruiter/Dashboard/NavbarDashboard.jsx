import React from 'react'
import {Navbar,Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import MenuIcon from '@mui/icons-material/Menu';
import OffcanvasDashboard from './OffcanvasDashboard';
import "./NavbarDashboard.css"
function NavbarDashboard() {
  return (
    <Navbar className='border-bottom navbar-style'>
        <Container fluid>
            <span className='d-block d-sm-none'>
              <OffcanvasDashboard/>
            </span>
            
            <Navbar.Brand href="#home" style={{color: "white"}}>PMRS</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <a href="#login" style={{color: "white"}}>Account</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavbarDashboard