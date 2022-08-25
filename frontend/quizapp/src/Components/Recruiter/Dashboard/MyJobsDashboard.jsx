import React, { useContext,useEffect,useState } from 'react'
import { Card,Container,Row,Col,Button } from 'react-bootstrap'
import { DashboardContext } from '../../../Helpers/Contexts'
import NavbarDashboard from './NavbarDashboard'
import SidebarDashboard from './SidebarDashboard'
import {openjob} from './HomeDashboard'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import JobCards from './JobCards'
import axios from "axios";
function MyJobsDashboard() {
    const{username,setUsername,alljobs,setAlljobs,jobcode,setJobcode}=useContext(DashboardContext)
    const [a_jobs,setA_jobs]=useState([])
    useEffect(() => {
    axios
      .get("http://localhost:8000/recruiter/api/v1/DeleteJob/")
      .then((res) => {
        setA_jobs(res.data);
        
      })
      .catch((error) => console.log("error"));
  }, []);
  console.log("Yes",a_jobs)
  let user_specific=a_jobs.filter(function (item,idx) {
        return item.recruiter_username === username;
      })
      .map(function ({
          id,
        recruiter_username,
        visibility,
        category,
        domain,
        title,
        website,
        opportunity_start_date,
        opportunity_start_time,
        opportunity_end_date,
        opportunity_end_time,
        organization,
        country,
        state,
        city,
        application_start_date,
        application_start_time,
        application_end_date,
        application_end_time,
        ssc_marks,
        hsc_marks,
        be_marks,
        year_of_passing,
        rounds,
        job_description,
        salary_type,
        salary_amount,
        currency,
        period,
        job_update,
        timing,
        contact_name,
        contact_email,
        contact_phone,
        additional_details,
      }) {
        return {
            id,
         recruiter_username,
        visibility,
        category,
        domain,
        title,
        website,
        opportunity_start_date,
        opportunity_start_time,
        opportunity_end_date,
        opportunity_end_time,
        organization,
        country,
        state,
        city,
        application_start_date,
        application_start_time,
        application_end_date,
        application_end_time,
        ssc_marks,
        hsc_marks,
        be_marks,
        year_of_passing,
        rounds,
        job_description,
        salary_type,
        salary_amount,
        currency,
        period,
        job_update,
        timing,
        contact_name,
        contact_email,
        contact_phone,
        additional_details,
        };
      });
    console.log(openjob)  
    console.log(jobcode)  
    const handleFullview=(id)=>{
      console.log(id)
      setJobcode(id)
    }
    const [search, setSearch] = useState("");
     const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filterJobs = user_specific.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
    
  );
  console.log('filterjobs',filterJobs)
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
                           <Row xs={1} md={2} className="g-4 mt-2">
                          {filterJobs.map((job)=>{
                                return(
                                    <JobCards
                                        id={job.id}
                                        title={job.title}
                                        organization={job.organization}
                                        opportunity_end_date={job.opportunity_end_date}
                                        domain={job.domain}
                                        recruiter_username={job.recruiter_username}
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

export default MyJobsDashboard