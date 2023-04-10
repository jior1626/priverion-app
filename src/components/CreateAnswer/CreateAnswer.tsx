import { useState, useEffect } from "react";

import { Container, Row, Col, Card, Button, FloatingLabel, Form } from "react-bootstrap";
import { TYPEQUESTIONS } from "../../utils/constants";
import { Answer } from "../../models/answer";

import "./CreateAnswer.css";

interface CreateAnswerInterface {
    typeQuestion: any
}

const CreateAnswer:  React.FC<CreateAnswerInterface> = ({typeQuestion}) => {

    const [answersText, setAnswersText] = useState<Answer[]>([]);
    const [answersSingleChoise, setAnswersSingleChoise] = useState<Answer[]>([]);
    const [answersMultipleChoise, setAnswersMultipleChoise] = useState<Answer[]>([]);

    const [typeAnswer, setTypeAnswer] = useState();

    const changeTypeQuestion = () => {
        setAnswersText([]);
        setAnswersSingleChoise([]);
        setAnswersMultipleChoise([]);
    }

    useEffect(() => {
        changeTypeQuestion();
    }, [typeQuestion])

    const addAnswer = () => {
        let newAnswer: Answer = {};
        newAnswer.description = "";
        newAnswer.type = typeQuestion;

        if(typeQuestion == TYPEQUESTIONS.TEXT) {
            setAnswersText((item) => [...item, newAnswer]);
        }
        if(typeQuestion == TYPEQUESTIONS.SINGLE_CHOISE) {
            setAnswersSingleChoise((item) => [...item, newAnswer]);
        }
        if(typeQuestion == TYPEQUESTIONS.MULTIPLE_CHOISE) {
            setAnswersMultipleChoise((item) => [...item, newAnswer]); 
        }
    }

    const deleteAnswer = (indexFill: number, type: string) => {
        if(typeQuestion == TYPEQUESTIONS.TEXT) {
            let filterQuestion = answersText.filter((item, index) => index !== indexFill);
            setAnswersText(filterQuestion);
        }
        if(typeQuestion == TYPEQUESTIONS.SINGLE_CHOISE) {
            let filterQuestion = answersSingleChoise.filter((item, index) => index !== indexFill);
            setAnswersSingleChoise(filterQuestion);
        }
        if(typeQuestion == TYPEQUESTIONS.MULTIPLE_CHOISE) {
            let filterQuestion = answersMultipleChoise.filter((item, index) => index !== indexFill);
            setAnswersMultipleChoise(filterQuestion);
        }
    }

    const renderTypeQuestions = () => {

        if(typeQuestion == TYPEQUESTIONS.TEXT) {
            return (
                <Container>

                    {answersText.map((answerText: any, key: any) => {
                        return (<Row key={"text"+key}>
                            <Col lg={11}>
                                <FloatingLabel
                                    controlId="description"
                                    label="Answer"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Digite la opción de respuesta" />
                                </FloatingLabel>
                            </Col>
                            <Col lg={1} className="btn-delete-answer">
                                <Button variant="outline-danger" onClick={() => deleteAnswer(key, TYPEQUESTIONS.TEXT)}><i className="bi bi-x"></i></Button>
                            </Col>
                        </Row>)
                    })}
                    
                    <Row>
                        <Col lg={12}>
                            <Button onClick={() => addAnswer()} variant="outline-success">
                                <i className="bi bi-plus-lg"></i>
                            </Button>
                        </Col>
                    </Row>
                </Container>
               
            );
        }
        if(typeQuestion == TYPEQUESTIONS.SINGLE_CHOISE) {
            return (
                <Container>

                    {answersSingleChoise.map((answerSingleChoise: any, key: any) => {
                        return (<Row key={"single-choise-"+key} lg={7}>
                            <Col lg={1}>
                                <Form.Check 
                                    className="content-checks"
                                    disabled
                                    type="radio"
                                    name={"single-choise"}
                                    id={`single-choise-${key}`}
                                />
                            </Col>
                            <Col lg={5}>
                                <FloatingLabel
                                    controlId={`input-single-choise-${key}`}
                                    label="Answer"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Digite la opción de respuesta" />
                                </FloatingLabel>
                            </Col>
                            <Col lg={1} className="btn-delete-answer">
                                <Button variant="outline-danger" onClick={() => deleteAnswer(key, TYPEQUESTIONS.SINGLE_CHOISE)}><i className="bi bi-x"></i></Button>
                            </Col>
                        </Row>)
                    })}
                    
                    <Row className="content-btn-add">
                        <Col lg={12}>
                            <Button onClick={() => addAnswer()} variant="outline-success">
                                <i className="bi bi-plus-lg"></i>
                            </Button>
                        </Col>
                    </Row>
                </Container>
               
            );
        }
        if(typeQuestion == TYPEQUESTIONS.MULTIPLE_CHOISE) {
            return (
                <Container>

                    {answersMultipleChoise.map((answerMultipleChoise: any, key: any) => {
                        return (<Row key={"multiple-choise-"+key} lg={7}>
                            <Col lg={1}>
                                <Form.Check 
                                    className="content-checks"
                                    disabled
                                    type="checkbox"
                                    id={`multiple-choise-${key}`}
                                />
                            </Col>
                            <Col lg={5}>
                                <FloatingLabel
                                    controlId={`input-multiple-choise-${key}`}
                                    label="Answer"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Digite la opción de respuesta" />
                                </FloatingLabel>
                            </Col>
                            <Col lg={1} className="btn-delete-answer">
                                <Button variant="outline-danger" onClick={() => deleteAnswer(key, TYPEQUESTIONS.MULTIPLE_CHOISE)}><i className="bi bi-x"></i></Button>
                            </Col>
                        </Row>)
                    })}
                    
                    <Row>
                        <Col lg={12}>
                            <Button onClick={() => addAnswer()} variant="outline-success">
                                <i className="bi bi-plus-lg"></i>
                            </Button>
                        </Col>
                    </Row>
                </Container>
               
            );
        }
    }

    return (
        <>
            {renderTypeQuestions()}
        </>
    )
}

export default CreateAnswer;