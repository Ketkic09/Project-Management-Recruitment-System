import React, { useContext, useState } from "react";
import "../Teacher.css";
import { QuestionContext } from "../Helpers/Contexts";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Card,
  Alert,
} from "react-bootstrap";

function Teacherendscreen() {
  const { testkey } = useContext(QuestionContext);
  const [buttontext, setbutttontext] = useState("Copy to Clipboard");
  const copyclip = () => {
    navigator.clipboard.writeText(testkey);
    setbutttontext("Copied!");
  };
  return (
    <div>
      <Container>
        <Row className="mt-4">
          <Col
            lg={12}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg Teachermenu"
          >
            <Form onSubmit="">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="row text-center justify-content-center">
                  <h2 style={{ color: "white" }}>Your test is created!</h2>
                  <h4 style={{ color: "black" }} className="m-3">
                    Your test id is:
                  </h4>
                  <Row className="mt-4">
                    <Col className="d-flex justify-content-center">
                      <Form.Group>
                        <InputGroup className="mb-3">
                          <InputGroup.Text
                            id="copyClipboard"
                            readOnly
                            className=""
                          >
                            <h1>{testkey}</h1>
                          </InputGroup.Text>

                          <InputGroup.Text id="basic-addon1" disabled>
                            <Button
                              type="button"
                              variant="success"
                              className="copy-btn"
                              onClick={copyclip}
                            >
                              {buttontext}
                            </Button>{" "}
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>
                  <h4 style={{ color: "black" }} className="m-3">
                    Share the above testkey with students
                  </h4>
                  <div class="text-center">
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "http://localhost:8000/TeacherDashboard/";
                      }}
                      className="btn btn-primary mt-3"
                    >
                      Back to Dashboard
                    </Button>
                  </div>
                </Form.Label>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Teacherendscreen;
