import { useState } from "react";

import { Container, Row, Col, Card, Button, FloatingLabel, Form } from "react-bootstrap";
import { TYPEQUESTIONS } from "../../utils/constants";
import CreateAnswer from "../CreateAnswer/CreateAnswer";


const CreateQuestion:  React.FC<any> = ({}) => {


    const [typeQuestion, setTypeQuestion] = useState("");

    const changeTypeQuestions = (e: any) => {
        let value = e.target.value;
        
        if(value !== "")
            setTypeQuestion(value);

    }


    

    return (
        <>
            <Card>
                <Card.Body className="p-5">
                    <Card.Text>
                        <h5>Información de la pregunta</h5>
                        <hr />
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
                                        <option>Abrir para seleccionar</option>
                                        <option value="Text">Text</option>
                                        <option value="Single Choise">Single Choise</option>
                                        <option value="Multiple Choise">Multiple Choise</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <h5>Opciones de respuesta</h5>
                        <hr />
                       <Row className="mt-5">
                            <CreateAnswer typeQuestion={typeQuestion}/>
                       </Row>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="content-footer">

                </Card.Footer>
            </Card>
        </>
    )
}

export default CreateQuestion;