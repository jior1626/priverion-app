
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, FloatingLabel, Form } from "react-bootstrap";

import "./CreateForm.css";
import { Question } from "../../models/question";
import CreateQuestion from "../CreateQuestion/CreateQuestion";

const CreateFormComponent = ({}) => {

    const [backgroundHeader, setBackgroundHeader] = useState("rgb(103, 58, 183)");
    const [colorHeader, setColorHeader] = useState("white");


    const [questions, setQuestions] = useState<Question[]>([]);

    const addNewQuestion = () => {
        let newQuestion: Question = {
            description: "",
            type: "multiple",
            answers: []
        }

        setQuestions((questions) => [...questions, newQuestion]);
    }

    return (
        <>
            <Container className="p-5">
                <Row className="mb-5">
                    <Col lg={12}>
                        <Card>
                            <Card.Header style={{background: backgroundHeader, color: colorHeader}}></Card.Header>
                            <Card.Body className="p-5">
                                <Card.Title>
                                    <FloatingLabel
                                        controlId="title"
                                        label="Título del formulario"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Título del formulario" />
                                    </FloatingLabel>
                                </Card.Title>
                                <Card.Text>
                                    <FloatingLabel
                                        controlId="description"
                                        label="Descripción del formulario"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Descripción del formulario" />
                                    </FloatingLabel>

                                    <Button className="text-end" variant="outline-dark" onClick={() => addNewQuestion()}>New Question</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {
                    questions.map((question: Question, key: any) => {
                        return (
                            <Row key={key} className="mb-5 mt-5">
                                <Col lg={12}>
                                    <CreateQuestion key={key} />
                                </Col>
                                <hr />
                            </Row>
                        )
                    })
                }
                
            </Container>
        </>
    )
}


export default CreateFormComponent;