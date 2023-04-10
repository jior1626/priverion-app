import { useState } from "react";

import { Container, Row, Col, Card, Button, FloatingLabel, Form } from "react-bootstrap";
import CreateAnswer from "../CreateAnswer/CreateAnswer";

import "./CreateQuestion.css";

interface CreateQuestionInterface {
    deleteQuestion: Function,
    index: any
}

const CreateQuestion:  React.FC<CreateQuestionInterface> = ({deleteQuestion, index}) => {


    const [typeQuestion, setTypeQuestion] = useState("");

    const changeTypeQuestions = (e: any) => {
        let value = e.target.value;
        
        if(value !== "")
            setTypeQuestion(value);
    }

    return (
        <Row className="mb-5 mt-5">
            <Col lg={12}>
                <Card>
                    <Card.Body className="p-5">
                        <Card.Text as='div' >
                            <Row>
                                <Col lg={12}>
                                    <h5>Información de la pregunta</h5>
                                    <hr />
                                </Col>
                            </Row>
                            <Row className="mt-4 mb-5">
                                <Col lg={8}>
                                    <FloatingLabel
                                        controlId="description"
                                        label="Pregunta"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Digite la pregunta" />
                                    </FloatingLabel>
                                </Col>
                                <Col lg={4}>
                                    <FloatingLabel controlId="type" label="Tipo de pregunta">
                                        <Form.Select aria-label="Tipos de preguntas" onChange={(e) => changeTypeQuestions(e)}>
                                            <option value="">Abrir para seleccionar</option>
                                            <option value="Text">Text</option>
                                            <option value="Single Choise">Single Choise</option>
                                            <option value="Multiple Choise">Multiple Choise</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            {
                                typeQuestion !== ""? 
                                    <Row>
                                        <Col lg={12}>
                                            <h5>Opciones de respuesta</h5>
                                        </Col>
                                        <hr />
                                    </Row>
                                : null
                            }
                        <Row className="mt-5">
                            <CreateAnswer typeQuestion={typeQuestion}/>
                        </Row>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer as='div' className="content-footer">
                            <Row>
                                <Col>
                                    <Button className="text-end" variant="light" onClick={() => deleteQuestion(index)}>
                                        <i className="bi bi-trash-fill"></i>
                                    </Button>
                                </Col>
                            </Row>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default CreateQuestion;