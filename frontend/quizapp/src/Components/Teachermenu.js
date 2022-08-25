import React, { useContext, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { QuestionContext } from "../Helpers/Contexts";

function Teachermenu() {
  const {
    setqueState,
    teacher_username,
    setTeacherUsername,
    teacher_semester,
    setTeacherSemester,
    testkey,
    quizname,
    setquizName,
    setTestkey,
  } = useContext(QuestionContext);

  const testkeyGenerator = () => {
    var pass = "";
    var str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

    for (let i = 1; i <= 5; i++) {
      var char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    return pass;
  };
  const handleSubmit = (event) => {
    console.log(quizname);
    const t = testkeyGenerator();
    setTestkey(t);
    setqueState("createquestion");
  };
  return (
    <div>
      <h1 className="pt-2 row text-center justify-content-center">Quizmaker</h1>
      <Container className="mt-4">
        <Row className="mt-4">
          <Col
            lg={7}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded-lg Teachermenu r-5"
          >
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>
                  <h4>Username</h4>
                </Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter Username"
                  onChange={(e) => setTeacherUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formUsername">
                <Form.Label>
                  <h4 className="mt-4">Quizname</h4>
                </Form.Label>
                <Form.Control
                  type="quizname"
                  placeholder="Enter quizname"
                  onChange={(g) => setquizName(g.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formSelect">
                <Form.Label>
                  <h4 className="mt-4">Semester</h4>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(f) => setTeacherSemester(f.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </Form.Select>
              </Form.Group>
              <Button
                className="mt-4"
                variant="success btn-block"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Teachermenu;
