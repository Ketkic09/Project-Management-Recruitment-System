import React, { useState, useContext } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { QuestionContext } from "../Helpers/Contexts";
export let finalList = [];
function Createquestion() {
  const {
    setqueState,
    testkey,
    teacher_username,
    teacher_semester,
    questionlist,
    setquestionList,
    quizname,
  } = useContext(QuestionContext);
  const [que, setQue] = useState("");
  const [optionA, setoptionA] = useState("");
  const [optionB, setoptionB] = useState("");
  const [optionC, setoptionC] = useState("");
  const [optionD, setoptionD] = useState("");
  const [answer, setAnswer] = useState("");
  const saveandnext = (event) => {
    finalList.push({
      testkey,
      teacher_username,
      teacher_semester,
      que,
      optionA,
      optionB,
      optionC,
      optionD,
      answer,
    });
    setquestionList(finalList);
    event.preventDefault();
    setqueState("createquestion");
    setQue("");
    setoptionA("");
    setoptionB("");
    setoptionC("");
    setoptionD("");
    setAnswer("");
  };
  const handleSubmit = (e) => {
    if (que.length !== 0) {
      finalList.push({
        testkey,
        teacher_username,
        teacher_semester,
        que,
        optionA,
        optionB,
        optionC,
        optionD,
        answer,
      });
      setquestionList(finalList);
      e.preventDefault();
      setqueState("reviewquestion");
    } else {
      e.preventDefault();
      setqueState("reviewquestion");
    }
  };
  return (
    <div>
      <Container>
        <h1 className="pt-2 row text-center justify-content-center">
          {quizname}
        </h1>
        <Row className="mt-2">
          <Col
            lg={7}
            md={6}
            sm={12}
            className="p-3 m-auto shadow-sm rounded-lg Teachermenu"
          >
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  <h4>Enter Your Question</h4>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Question..."
                  value={que}
                  onChange={(q) => setQue(q.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.options">
                <Form.Label>
                  <h4>Options</h4>
                  <p>Check the radio button to define right answer</p>
                </Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Radio
                    aria-label="Checkbox for following text input"
                    onChange={() => setAnswer("A")}
                    name="group1"
                  />
                  <FormControl
                    aria-label="Text input with checkbox"
                    value={optionA}
                    onChange={(a) => setoptionA(a.target.value)}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Radio
                    aria-label="Checkbox for following text input"
                    onChange={() => setAnswer("B")}
                    name="group1"
                  />
                  <FormControl
                    aria-label="Text input with checkbox"
                    value={optionB}
                    onChange={(b) => setoptionB(b.target.value)}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Radio
                    aria-label="Checkbox for following text input"
                    onChange={() => setAnswer("C")}
                    name="group1"
                  />
                  <FormControl
                    aria-label="Text input with checkbox"
                    value={optionC}
                    onChange={(c) => setoptionC(c.target.value)}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Radio
                    aria-label="Checkbox for following text input"
                    onChange={() => setAnswer("D")}
                    name="group1"
                  />
                  <FormControl
                    aria-label="Text input with checkbox"
                    value={optionD}
                    onChange={(d) => setoptionD(d.target.value)}
                  />
                </InputGroup>
              </Form.Group>
              <Row>
                <Col md={6} className="text-left">
                  <Button
                    className="mt-3 align-item-right"
                    variant="primary btn-block"
                    type="submit"
                  >
                    Finish Test
                  </Button>
                </Col>
                <Col md={6} className="text-right">
                  <div className="next">
                    <Button
                      className="mt-3 align-item-right"
                      variant="success btn-block"
                      type="button"
                      onClick={saveandnext}
                    >
                      Save and proceed to next Question
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Createquestion;
