import React, { useContext } from "react";
import "../Teacher.css";
import { QuestionContext } from "../Helpers/Contexts";
import axios from "axios";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Accordion,
  InputGroup,
  FormControl,
} from "react-bootstrap";
function Reviewquestion() {
  const {
    setqueState,
    testkey,
    questionlist,
    setquestionList,
    editid,
    seteditId,
    teacher_username,
    quizname,
  } = useContext(QuestionContext);
  const api3 = axios.create({
    baseURL: "http://localhost:8000/que/",
  });
  const handleDelete = (id) => {
    const newList = [...questionlist];
    newList.splice(id, 1);
    setquestionList(newList);
  };
  const handleEdit = (id) => {
    seteditId(id);
    setqueState("editquestion");
  };
  const handleSubmit = (event) => {
    // eslint-disable-next-line no-lone-blocks
    {
      questionlist.map(function (q, idx) {
        api3.post("/", {
          semester: q.teacher_semester,
          question: q.que,
          optionA: q.optionA,
          optionB: q.optionB,
          optionC: q.optionC,
          optionD: q.optionD,
          answer: q.answer,
          testkey: q.testkey,
          teacher_username: q.teacher_username,
          quizname:quizname
        });
      });
    }

    event.preventDefault();
    setqueState("techerendscreen");
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
            <Form>
              <Form.Group className="mb-3 Heading-form" controlId="headline">
                <Form.Label>
                  <h4>Review Questions</h4>
                  <p className="text-muted"> #{testkey}</p>
                </Form.Label>
              </Form.Group>
              <Form.Group>
                <Accordion defaultActiveKey="0">
                  {questionlist.map(function (d, idx) {
                    return (
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey={idx}>
                          <Accordion.Header>
                            {idx + 1}
                            {") "}
                            {d.que}
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row className="mb-2">
                              <Col sm={12} lg={6} md={6}>
                                <Form.Group>
                                  <InputGroup className="mb-3 md-12">
                                    <InputGroup.Text id="basic-addon1" disabled>
                                      A
                                    </InputGroup.Text>
                                    <FormControl
                                      placeholder=""
                                      disabled
                                      readOnly
                                      defaultValue={d.optionA}
                                    />
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                              <Col sm={12} lg={6} md={6}>
                                <Form.Group>
                                  <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1" disabled>
                                      B
                                    </InputGroup.Text>
                                    <FormControl
                                      placeholder=""
                                      disabled
                                      readOnly
                                      defaultValue={d.optionB}
                                    />
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="mb-2">
                              <Col sm={12} lg={6} md={6}>
                                <Form.Group>
                                  <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1" disabled>
                                      C
                                    </InputGroup.Text>
                                    <FormControl
                                      placeholder=""
                                      disabled
                                      readOnly
                                      defaultValue={d.optionC}
                                    />
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                              <Col sm={12} lg={6} md={6}>
                                <Form.Group>
                                  <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1" disabled>
                                      D
                                    </InputGroup.Text>
                                    <FormControl
                                      placeholder=""
                                      disabled
                                      readOnly
                                      defaultValue={d.optionD}
                                    />
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row className="mb-2">
                              <Col sm={12} lg={6} md={6}>
                                <Form.Group>
                                  <InputGroup className="mb-3">
                                    <InputGroup.Text
                                      id="basic-addon1"
                                      disabled
                                      className="btn btn-outline-success"
                                    >
                                      Correct Answer:
                                    </InputGroup.Text>
                                    <InputGroup.Text
                                      id="basic-addon1"
                                      disabled
                                      className="btn btn-success"
                                    >
                                      {d.answer}
                                    </InputGroup.Text>
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6} className="text-left"></Col>
                              <Col md={6} className="text-right">
                                <div className="next">
                                  <Button
                                    className="mt-2 align-item-right"
                                    variant="danger btn-block"
                                    type="button"
                                    onClick={() => handleDelete(idx)}
                                  >
                                    Delete
                                  </Button>{" "}
                                  <Button
                                    className="mt-2 align-item-right"
                                    variant="primary btn-block"
                                    type="button"
                                    onClick={() => handleEdit(idx)}
                                  >
                                    Edit
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    );
                  })}
                </Accordion>
              </Form.Group>
              <Form.Group className="mt-4 text-center">
                <Button
                  className="text-center"
                  variant="success btn-block"
                  type="button"
                  onClick={handleSubmit}
                >
                  Submit and Finish Test
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Reviewquestion;
