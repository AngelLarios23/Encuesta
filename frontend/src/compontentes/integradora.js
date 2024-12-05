import "../Estilos/integradora.css"; 
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";


function Integradora() {
  const questionnaire = {
    preguntas: [
      "Que te parece las función que ejerces en la institución",
      "¿Qué opinas del maestro1?",
      "¿Qué opinas del maestro2?",
      "¿Qué opinas de las instalaciones de la universidad?",
      "¿Cómo te ha tratado el personal docente?",
      "¿Cómo te ha tratado la persona responsable de cajas?",
      "¿Cómo te ha tratado la persona responsable de seguridad y servicios?",
      "¿Cómo te ha tratado el personal docente servicios?",
      "¿Que opinas que el proceso de inscripción es eficiente?",
      "¿Cómo calificarías la atención en las oficinas de servicios escolares?",
      "¿Como te parecen los horarios de atención al público?",
      "¿En general como calificarias a los servicios escolares?"
    ],
    opciones: [
      "Excelente",
      "Bueno",
      "Neutro",
      "Malo"
    ]
  };

  const [answers, setAnswers] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e) => {
    const updatedAnswers = { ...answers, [e.target.name]: e.target.value };
    setAnswers(updatedAnswers);

    // Validar si todas las preguntas están respondidas
    const allAnswered = questionnaire.preguntas.every((_, i) => updatedAnswers[`pregunta_${i}`]);
    setIsDisabled(!allAnswered);
  };

  const handleSubmit = async () => {
    const unansweredQuestions = questionnaire.preguntas.filter((_, i) => !answers[`pregunta_${i}`]);

    if (unansweredQuestions.length > 0) {
      Swal.fire(
        "¡Oops!",
        `Faltan preguntas por responder: ${unansweredQuestions.map((_, i) => i + 1).join(", ")}`,
        "error"
      );
      return;
    }

    try {
      Swal.fire({ title: "Enviando respuestas...", didOpen: () => Swal.showLoading() });

      // Envía las respuestas al servidor
      await axios.post("http://localhost:4000/save-answers", answers);

      Swal.fire("Respuestas almacenadas con éxito", "", "success").then(() => window.location.reload());
    } catch (error) {
      Swal.fire(
        "¡Ocurrió un error al guardar tus respuestas!",
        error.response?.data?.message || error.message,
        "error"
      );
    }
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Encuesta servicios escolares</Card.Title>
          <Form>
            {questionnaire.preguntas.map((pregunta, i) => (
              <Form.Group key={`pregunta_${i}`}>
                <Form.Label>{`${i + 1}. ${pregunta}`}</Form.Label>
                {questionnaire.opciones.map((opcion, io) => (
                  <Form.Check
                    key={`pregunta_${i}_opcion_${io}`}
                    type="radio"
                    id={`pregunta_${i}_opcion_${io}`}
                    name={`pregunta_${i}`}
                    value={opcion}
                    label={opcion}
                    onChange={handleChange}
                  />
                ))}
              </Form.Group>
            ))}
            <Row>
              <Col>
                <Button onClick={handleSubmit} disabled={isDisabled} variant="primary">
                  Enviar
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Integradora;
