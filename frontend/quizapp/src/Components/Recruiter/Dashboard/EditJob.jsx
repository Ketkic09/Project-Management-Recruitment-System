import React,{useState,useEffect} from 'react'
import NavbarJob from '../NavbarJob'
import {Row,Col,Container,Card,InputGroup,FormControl,Form,Button} from "react-bootstrap"
import { useParams } from 'react-router-dom';
import axios from "axios";
import {useHistory} from "react-router-dom";


function EditJob() {
  let { id } = useParams();
  const[jobposts,setJobposts]=useState([])
   useEffect(() => {
    axios
      .get(`http://localhost:8000/recruiter/api/v1/DeleteJob/${id}/`)
      .then((res) => {
        setJobposts(res.data);
      })
      .catch((error) => console.log("error"));
  }, []);
  console.log(jobposts)
  const [visibility, setVisibility] = useState(jobposts.visibility);
  const [title, setTitle] = useState(jobposts.title);
  const[category,setCategory] = useState(jobposts.category);
  const[domain,setDomain] = useState(jobposts.domain);
  const[website,setWebsite] = useState(jobposts.website);
  const[opp_start_date,setOpp_start_date] = useState(jobposts.opporuntiy_start_date);
  const[opp_start_time,setOpp_start_time] = useState(jobposts.opporuntiy_start_time);
  const[opp_end_date,setOpp_end_date] = useState(jobposts.opporuntiy_end_date);
  const[opp_end_time,setOpp_end_time] = useState(jobposts.opporuntiy_end_time);
  const[organization,setOrganization] = useState(jobposts.organization);
  const[country,setCountry]=useState(jobposts.country);
  const[state,setState]=useState(jobposts.state);
  const[city,setCity]=useState(jobposts.city);
  const[appstartdate,setAppstartdate]=useState(jobposts.application_start_date)
  const[appenddate,setAppenddate]=useState(jobposts.application_end_date)
  const[appstarttime,setAppstarttime]=useState(jobposts.application_start_time)
  const[appendtime,setAppendtime]=useState(jobposts.application_end_time)
  const[sscpercentage,setSscpercentage]=useState(jobposts.ssc_marks)
  const[hscpercentage,setHscpercentage]=useState(jobposts.hsc_marks)
  const[bepercentage,setBepercentage]=useState(jobposts.be_marks)
  const[yearofpassing,setYearofpassing]=useState(jobposts.year_of_passing)
  const[rounds,setRounds]=useState(jobposts.rounds)
  const[description,setDescription]=useState(jobposts.job_description)
  const[salary_type,setSalary_type]=useState(jobposts.salary_type)
  const[amount,setAmount]=useState(jobposts.salary_amount)
  const[currency,setCurrency]=useState(jobposts.currency)
  const[period,setPeriod]=useState(jobposts.period)
  const[jobupdate,setJobupdate]=useState(jobposts.job_update)
  const[timing,setTiming]=useState(jobposts.timing)
  const[name,setName]=useState(jobposts.contact_name)
  const[email,setEmail]=useState(jobposts.contact_email)
  const[phone,setPhone]=useState(jobposts.contact_phone)
  const[other,setOther]=useState(jobposts.additional_details)
  const history = useHistory();

  console.log(category)
  const titlerender=(showtitle)=>{
      return(
        <>
             <h5 className='mt-2'>
                {showtitle}
            </h5>
            <hr  style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor : '#000000'
            }}/>
        </>
      )
    }
    const handlecancel = () =>{
        history.goBack()
    }
    const handleedit=(id)=>{
        console.log(id)
        axios.patch(`http://localhost:8000/recruiter/api/v1/DeleteJob/${id}/`, { 
      recruiter_username:'admin',
      visibility:visibility,
      category:category,
      domain:domain,
      title:title,
      website:website,
      opportunity_start_date:opp_start_date,
      opportunity_start_time:opp_start_time,
      opportunity_end_date:opp_end_date,
      opportunity_end_time:opp_end_time,
      organization:organization,
      country:country,
      state:state,
      city:city,
      application_start_date:appstartdate,
      application_start_time:appstarttime,
      application_end_date:appenddate,
      application_end_time:appendtime,
      ssc_marks:sscpercentage,
      hsc_marks:hscpercentage,
      be_marks:bepercentage,
      year_of_passing:yearofpassing,
      rounds:rounds,
      job_description:description,
      salary_type:salary_type,
      salary_amount:amount,
      currency:currency,
      period:period,
      job_update:jobupdate,
      timing:timing,
      contact_name:name,
      contact_email:email,
      contact_phone:phone,
      additional_details: other });
      history.goBack()
        

    }
  return (
    <>
        <NavbarJob/>
        <Container className='mt-2'>
            <Row>
                <Card>
                    <Card.Body>
                        <Row>
                            <h2>Edit Job</h2>
                        </Row>
                        <Row className='m-1'>
                            <Card>
                                <Card.Body>
                                        {titlerender("Opportunity Visibility")}
                                        <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1" disabled >Title</InputGroup.Text>
                                        <FormControl
                                            aria-describedby="basic-addon1"
                                            style={{backgroundColor: '#ffffff'}}
                                            onChange={(q) => setTitle(q.target.value)}
                                            defaultValue={jobposts.title}
                                            
                                        />
                                        </InputGroup>
                                        <Row>
                                            <Col md={4}>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Category</InputGroup.Text>
                                                <Form.Select  defaultValue={jobposts.category} onChange={(c) => setCategory(c.target.value)}>
                                                    <option value="Jobs">Jobs</option>
                                                    <option value="Internships">Internships</option>
                                                    <option value="Hackathons">Hackathons</option>
                                                    
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                            <Col md={3}>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Visibility</InputGroup.Text>
                                                <Form.Select  defaultValue={jobposts.visibility} onChange={(visible) => setVisibility(visible.target.value)}>
                                                    <option value="public">Public</option>
                                                    <option value="private">Private</option>
                                                </Form.Select>
                                                </InputGroup>
                                            </Col>
                                    
                                            <Col>
                                               <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Domain</InputGroup.Text>
                                                <FormControl
                                                    aria-describedby="basic-addon1"
                                                    style={{backgroundColor: '#ffffff'}}
                                                    onChange={(d) => setDomain(d.target.value)}
                                                    defaultValue={jobposts.domain}
                                                    
                                                />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        {titlerender("Basic Details")}
                                         <Row>
                                            <Col>
                                               <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Website</InputGroup.Text>
                                                <FormControl
                                                    aria-describedby="basic-addon1"
                                                    style={{backgroundColor: '#ffffff'}}
                                                    onChange={(web) => setWebsite(web.target.value)}
                                                    defaultValue={jobposts.website}
                                                    
                                                />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Opportunity Start Date</InputGroup.Text>
                                                <Form.Control
                                                    type="date"
                                                    onChange={(od) => setOpp_start_date(od.target.value)}
                                                    defaultValue={jobposts.opportunity_start_date}
                                                />
                                                </InputGroup>
                                            </Col>
                                             <Col>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Opportunity Start Time</InputGroup.Text>
                                                <Form.Control
                                                    type="time"
                                                    onChange={(ot) => setOpp_start_time(ot.target.value)}
                                                    defaultValue={jobposts.opportunity_start_time}
                                                />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Opportunity End Date</InputGroup.Text>
                                                <Form.Control
                                                    type="date"
                                                    onChange={(oed) => setOpp_end_date(oed.target.value)}
                                                    defaultValue={jobposts.opportunity_end_date}
                                                />
                                                </InputGroup>
                                            </Col>
                                             <Col>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Opportunity End Time</InputGroup.Text>
                                                <Form.Control
                                                    type="time"
                                                    onChange={(oet) => setOpp_end_time(oet.target.value)}
                                                    defaultValue={jobposts.opportunity_end_time}
                                                />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                               <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Organization</InputGroup.Text>
                                                <FormControl
                                                    aria-describedby="basic-addon1"
                                                    style={{backgroundColor: '#ffffff'}}
                                                    onChange={(org) => setOrganization(org.target.value)}
                                                    defaultValue={jobposts.organization}
                                                    
                                                />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                         <Row>
                                            <Col md={4}>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Country</InputGroup.Text>
                                                <Form.Select  defaultValue={jobposts.country} onChange={(cou) => setCountry(cou.target.value)}>
                                                   <option value="India">India</option>
                                                <option value="UK">UK</option>
                                                <option value="America">America</option>
                                                
                                                    
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                            <Col md={4}>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >State</InputGroup.Text>
                                                <Form.Select  defaultValue={jobposts.state} onChange={(sta) => setState(sta.target.value)}>
                                                    <option value="Maharashtra">Maharashtra</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Washington">Washington</option>
                                                </Form.Select>
                                                </InputGroup>
                                            </Col>
                                    
                                            <Col md={4}>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >City</InputGroup.Text>
                                                <Form.Select  defaultValue={jobposts.city} onChange={(cit) => setCity(cit.target.value)}>
                                                   <option>Mumbai</option>
                                                <option>Thane</option>
                                                <option>Palghar</option>
                                                
                                                    
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                         {titlerender("Registration & Eligibility")}
                                          <Row>
                                            <Col>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Application Start Date</InputGroup.Text>
                                                <Form.Control
                                                    type="date"
                                                    onChange={(asd) => setAppstartdate(asd.target.value)}
                                                    defaultValue={jobposts.application_start_date}
                                                />
                                                </InputGroup>
                                            </Col>
                                             <Col>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Application Start Time</InputGroup.Text>
                                                <Form.Control
                                                    type="time"
                                                    onChange={(ast) => setAppstarttime(ast.target.value)}
                                                    defaultValue={jobposts.application_start_time}
                                                />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Application End Date</InputGroup.Text>
                                                <Form.Control
                                                    type="date"
                                                    onChange={(aed) => setAppenddate(aed.target.value)}
                                                    defaultValue={jobposts.application_end_date}
                                                />
                                                </InputGroup>
                                            </Col>
                                             <Col>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Application End Time</InputGroup.Text>
                                                <Form.Control
                                                    type="time"
                                                    onChange={(aet) => setAppendtime(aet.target.value)}
                                                    defaultValue={jobposts.application_end_time}
                                                />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="basic-addon1" disabled >SSC Percentage</InputGroup.Text>
                                                    <FormControl
                                                        aria-describedby="basic-addon1"
                                                        style={{backgroundColor: '#ffffff'}}
                                                        onChange={(ssc) => setSscpercentage(ssc.target.value)}
                                                        defaultValue={jobposts.ssc_marks}
                                                        
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="basic-addon1" disabled >HSC Percentage</InputGroup.Text>
                                                    <FormControl
                                                        aria-describedby="basic-addon1"
                                                        style={{backgroundColor: '#ffffff'}}
                                                        onChange={(hsc) => setHscpercentage(hsc.target.value)}
                                                        defaultValue={jobposts.hsc_marks}
                                                        
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="basic-addon1" disabled >BE Percentage</InputGroup.Text>
                                                    <FormControl
                                                        aria-describedby="basic-addon1"
                                                        style={{backgroundColor: '#ffffff'}}
                                                        onChange={(be) => setBepercentage(be.target.value)}
                                                        defaultValue={jobposts.be_marks}
                                                        
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="basic-addon1" disabled >Year Of Passing</InputGroup.Text>
                                                    <FormControl
                                                        aria-describedby="basic-addon1"
                                                        style={{backgroundColor: '#ffffff'}}
                                                        onChange={(yop) => setYearofpassing(yop.target.value)}
                                                        defaultValue={jobposts.year_of_passing}
                                                        
                                                    />
                                                </InputGroup>
                                            </Col>
                                           
                                           
                                        </Row>
                                        {titlerender("Rounds")}
                                        <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1" disabled >Rounds</InputGroup.Text>
                                        <FormControl
                                            as="textarea" rows={4}
                                            aria-describedby="basic-addon1"
                                            style={{backgroundColor: '#ffffff'}}
                                            onChange={(round) => setRounds(round.target.value)}
                                            defaultValue={jobposts.rounds}   
                                        />
                                        </InputGroup>
                                        {titlerender("Job Description")}
                                        <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1" disabled >Job Description</InputGroup.Text>
                                        <FormControl
                                            as="textarea" rows={4}
                                            aria-describedby="basic-addon1"
                                            style={{backgroundColor: '#ffffff'}}
                                            onChange={(jd) => setDescription(jd.target.value)}
                                            defaultValue={jobposts.job_description}   
                                        />
                                        </InputGroup>
                                        {titlerender("Stipend/Salary")}
                                          <Row>
                                            <Col md={4}>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Salary Type</InputGroup.Text>
                                                <Form.Select  defaultValue={jobposts.salary_type} onChange={(st) => setSalary_type(st.target.value)}>
                                                    <option value="paid">Paid</option>
                                                    <option value="unpaid">Unpaid</option>
                                                    <option value="negotiable">Negotiable</option>
                                                    <option value="Not Disclosed">Not Disclosed</option>
                                                   
                                                    
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                             <Col md={4}>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Job Update</InputGroup.Text>
                                                <Form.Select  defaultValue={jobposts.job_update} onChange={(jup) => setJobupdate(jup.target.value)}>
                                                    <option value="In-Office">In-Office</option>
                                                    <option value="Work From Home">Work From Home</option>    
                                                </Form.Select>
                                                </InputGroup>
                                            </Col>
                                             <Col md={4}>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Job Timing</InputGroup.Text>
                                                <Form.Select  defaultValue={jobposts.timing} onChange={(time) => setTiming(time.target.value)}>
                                                    <option value="Full Time">Full Time</option>
                                                    <option value="Part Time">Part Time</option> 
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                            
                                         </Row>
                                         <Row>
                                            <Col md={4}>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Amount</InputGroup.Text>
                                                <FormControl
                                                    aria-describedby="basic-addon1"
                                                    style={{backgroundColor: '#ffffff'}}
                                                    onChange={(am) => setAmount(am.target.value)}
                                                    defaultValue={jobposts.salary_amount}
                                                    
                                                />
                                                </InputGroup>
                                            </Col>
                                            <Col md={4}>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Curency</InputGroup.Text>
                                                <Form.Select  defaultValue={jobposts.currency} onChange={(cur) => setCurrency(cur.target.value)}>
                                                    <option value="₹ (INR)">₹ (INR)</option>
                                                    <option value="$ (USD)">$ (USD)</option>
                                                    <option value="€ (EUR)">€ (EUR)</option>
                                                    <option value="¥ (CNY)">¥ (CNY)</option>
                                                    <option value="£ (GBP)">£ (GBP)</option>
                                                    <option value="₽ (RUB)">₽ (RUB)</option>
                                                   
                                                    
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                            <Col md={4}>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1" disabled >Period</InputGroup.Text>
                                                <Form.Select  defaultValue={jobposts.period} onChange={(per) => setPeriod(per.target.value)}>
                                                   <option value="Week">Week</option>
                                                    <option value="Month">Month</option>
                                                    <option value="Year">Year</option>
                                                    
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                         </Row>
                                        {titlerender("Additional Details")}
                                        <h6>Important Contacts</h6>
                                        <Row>
                                            <Col md={4}>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="basic-addon1" disabled >Name</InputGroup.Text>
                                                    <FormControl
                                                        aria-describedby="basic-addon1"
                                                        style={{backgroundColor: '#ffffff'}}
                                                        onChange={(nm) => setName(nm.target.value)}
                                                        defaultValue={jobposts.contact_name}
                                                        
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col md={4}>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="basic-addon1" disabled >Email</InputGroup.Text>
                                                    <FormControl
                                                        aria-describedby="basic-addon1"
                                                        style={{backgroundColor: '#ffffff'}}
                                                        onChange={(em) => setEmail(em.target.value)}
                                                        defaultValue={jobposts.contact_email}
                                                        
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col md={4}>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="basic-addon1" disabled >Phone No.</InputGroup.Text>
                                                    <FormControl
                                                        aria-describedby="basic-addon1"
                                                        style={{backgroundColor: '#ffffff'}}
                                                        onChange={(ph) => setPhone(ph.target.value)}
                                                        defaultValue={jobposts.contact_phone}
                                                        
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1" disabled >Other Details</InputGroup.Text>
                                        <FormControl
                                            as="textarea" rows={4}
                                            aria-describedby="basic-addon1"
                                            style={{backgroundColor: '#ffffff'}}
                                            onChange={(other_d) => setOther(other_d.target.value)}
                                            defaultValue={jobposts.additional_details}   
                                        />
                                        </InputGroup>
                                        </Row>
                                         <Button
                                            variant="danger"
                                            type="button"
                                            className=""
                                            onClick={() => {
                                            handlecancel();
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            variant="success"
                                            type="button"
                                            className="m-2"
                                            onClick={() => {
                                            handleedit(jobposts.id);
                                            }}
                                        >
                                            Save
                                        </Button>
                                        
                                    
                                </Card.Body>
                            </Card>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    </>
  )
}

export default EditJob