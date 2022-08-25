import React, { useContext } from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { DashboardContext } from "../../../Helpers/Contexts";
import history from "../../History";
import axios from "axios";
import "./Dashboard.css";
import { Link } from "react-router-dom";

export let openjob;

const JobCards = ({
  id,
  title,
  organization,
  opportunity_end_date,
  domain,
  recruiter_username,
}) => {
  const {
    alljobs,
    jobcode,
    setJobcode,
    dashboard,
    setDashboardstate,
    username,
  } = useContext(DashboardContext);
  const handleFullview = (id) => {
    var f = Object.values(id);
    var g = f[0];
    setJobcode(g);
    console.log(g);
    openjob = alljobs
      .filter(function (item, idx) {
        return item.id === g;
      })
      .map(function ({
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
    console.log(openjob);
    setDashboardstate("/recruiter/dashboard/alljobs/fullview");
    history.push("/recruiter/dashboard/alljobs/fullview");
  };
  const printans = (id) => {
    var f = Object.values(id);
    var g = f[0];
    console.log(g);
    axios
      .delete(`http://localhost:8000/recruiter/api/v1/DeleteJob/${g}/`)
      .then((response) => {});
    window.location.reload(false);
  };
  const editjob = (id) => {
    var a = Object.values(id);
    var b = a[0];
    console.log(b);
  };
  const renderElement = (val, id) => {
    console.log(val, username);
    if (username === val) {
      return (
        <>
          <Link to={`/dashboard/job/editjob/${id}`}>
            <Button
              variant="primary"
              type="button"
              className="m-2"
              onClick={() => {
                editjob({ id });
              }}
            >
              Edit Job
            </Button>
          </Link>

          <Button
            variant="danger"
            type="button"
            className=""
            onClick={() => {
              printans({ id });
            }}
          >
            Delete
          </Button>
        </>
      );
    }
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <h6>{organization}</h6>
          <WorkOutlineIcon
            className="viewcardicon"
            style={{ color: "#706f6f" }}
          />{" "}
          {domain}
          <br />
          <EventAvailableIcon
            className="viewcardicon"
            style={{ color: "#706f6f" }}
          />{" "}
          Last Date to apply: {opportunity_end_date}
        </Card.Text>
        <Button
          type="button"
          className="cardbutton"
          onClick={() => {
            handleFullview({ id });
          }}
        >
          Full View
        </Button>

        {renderElement(recruiter_username, id)}
      </Card.Body>
    </Card>
  );
};
export default JobCards;
