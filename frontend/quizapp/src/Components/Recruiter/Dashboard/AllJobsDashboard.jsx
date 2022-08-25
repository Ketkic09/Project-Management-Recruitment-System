import React,{useContext,useState,useEffect} from 'react'
import NavbarDashboard from './NavbarDashboard'
import { Card,Container,Row,Col,Button } from 'react-bootstrap'
import SidebarDashboard from './SidebarDashboard'
import { DashboardContext } from '../../../Helpers/Contexts'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import JobCards from './JobCards'
import axios from "axios";


function AllJobsDashboard() {
    const{alljobs,jobcode,setJobcode,setAlljobs}=useContext(DashboardContext)
    useEffect(() => {
    axios
      .get("http://localhost:8000/recruiter/api/v1/DeleteJob/")
      .then((res) => {
        setAlljobs(res.data);
        
      })
      .catch((error) => console.log("error"));
  }, []);
    console.log('alljobs')
    console.log(alljobs)
    
    const [search, setSearch] = useState("");
     const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filterJobs = alljobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
    
  );
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
                            <form>
                                <input
                                    type="text"
                                    placeholder="Search Job Title"
                                    className="searchInput"
                                    onChange={handleChange}
                                />
                            </form>
                            <Row xs={1} md={3} className="g-4 mt-2">
                              {filterJobs.map((job)=>{
                                return(
                                    <JobCards
                                        id={job.id}
                                        title={job.title}
                                        organization={job.organization}
                                        opportunity_end_date={job.opportunity_end_date}
                                        domain={job.domain}
                                    />
                                )
                            })}
                          </Row>
                        </Card.Body>
                    </Card>
                    
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AllJobsDashboard