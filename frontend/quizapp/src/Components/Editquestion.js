import React, { useContext, useState } from "react";
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
function Editquestion() {
  const { setqueState, editid, seteditId, questionlist } =
    useContext(QuestionContext);
  const [que, setQue] = useState(questionlist[editid].que);
  const [optionA, setoptionA] = useState(questionlist[editid].optionA);
  const [optionB, setoptionB] = useState(questionlist[editid].optionB);
  const [optionC, setoptionC] = useState(questionlist[editid].optionC);
  const [optionD, setoptionD] = useState(questionlist[editid].optionD);
  const [answer, setAnswer] = useState(questionlist[editid].answer);
  let radioA = false;
  let radioB = false;
  let radioC = false;
  let radioD = false;
  if (answer === "A") {
    radioA = true;
  } else if (answer === "B") {
    radioB = true;
  } else if (answer === "C") {
    radioC = true;
  } else if (answer === "D") {
    radioD = true;
  }
  const backreview = (event) => {
    event.preventDefault();
    setqueState("reviewquestion");
  };
  const savereview = (event) => {
    event.preventDefault();
    questionlist[editid].que = que;
    questionlist[editid].optionA = optionA;
    questionlist[editid].optionB = optionB;
    questionlist[editid].optionC = optionC;
    questionlist[editid].optionD = optionD;
    questionlist[editid].answer = answer;
    seteditId(null);
    setqueState("reviewquestion");
  };

  return (
    <div>
      <Container>
        <Row className="mt-2">
          <Col
            lg={7}
            md={6}
            sm={12}
            className="p-3 m-auto shadow-sm rounded-lg Teachermenu"
          >
            <Form onSubmit="">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  <h4>Edit Your Question</h4>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Question..."
                  value={que}
                  onChange={(q) => setQue(q.target.value)}
                  defaultValue={questionlist[editid].que}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.options">
                <Form.Label>
                  <h4>Edit Options</h4>
                  <p>Check the radio button to define right answer</p>
                </Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Radio
                    aria-label="Checkbox for following text input"
                    onChange={() => setAnswer("A")}
                    name="group1"
                    defaultChecked={radioA}
                  />
                  <FormControl
                    aria-label="Text input with checkbox"
                    value={optionA}
                    onChange={(a) => setoptionA(a.target.value)}
                    defaultValue={questionlist[editid].optionA}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Radio
                    aria-label="Checkbox for following text input"
                    onChange={() => setAnswer("B")}
                    name="group1"
                    defaultChecked={radioB}
                  />
                  <FormControl
                    aria-label="Text input with checkbox"
                    value={optionB}
                    onChange={(b) => setoptionB(b.target.value)}
                    defaultValue={questionlist[editid].optionB}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Radio
                    aria-label="Checkbox for following text input"
                    onChange={() => setAnswer("C")}
                    name="group1"
                    defaultChecked={radioC}
                  />
                  <FormControl
                    aria-label="Text input with checkbox"
                    value={optionC}
                    onChange={(c) => setoptionC(c.target.value)}
                    defaultValue={questionlist[editid].optionC}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Radio
                    aria-label="Checkbox for following text input"
                    onChange={() => setAnswer("D")}
                    name="group1"
                    defaultChecked={radioD}
                  />
                  <FormControl
                    aria-label="Text input with checkbox"
                    value={optionD}
                    onChange={(d) => setoptionD(d.target.value)}
                    defaultValue={questionlist[editid].optionD}
                  />
                </InputGroup>
              </Form.Group>
              <Row>
                <Col md={6} className="text-left">
                  <Button
                    className="mt-3 align-item-right"
                    variant="primary btn-block"
                    type="button"
                    onClick={backreview}
                  >
                    Back without saving
                  </Button>
                </Col>
                <Col md={6} className="text-right">
                  <div className="next">
                    <Button
                      className="mt-3 align-item-right"
                      variant="success btn-block"
                      type="submit"
                      onClick={savereview}
                    >
                      Save and proceed to Review Question
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

export default Editquestion;
