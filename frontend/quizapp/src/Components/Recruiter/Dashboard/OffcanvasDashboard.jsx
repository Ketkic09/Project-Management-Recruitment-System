import React,{useState} from 'react'
import {Button,Offcanvas} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import MenuIcon from '@mui/icons-material/Menu';
import SidebarDashboard from './SidebarDashboard';
function OffcanvasDashboard() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <MenuIcon onClick={handleShow}/>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navbar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarDashboard/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffcanvasDashboard