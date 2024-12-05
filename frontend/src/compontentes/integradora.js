import "../Estilos/integradora.css"; 
import "../Estilos/integradora.css";
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";

function Integradora() {
  const questionnaire = {
    preguntas: [
      "¿Qué te parece la función que ejerces en la institución?",
      "¿Qué opinas del maestro1?",
      "¿Qué opinas del maestro2?",
      "¿Qué opinas de las instalaciones de la universidad?",
      "¿Cómo te ha tratado el personal docente?",
      "¿Cómo te ha tratado la persona responsable de cajas?",
      "¿Cómo te ha tratado la persona responsable de seguridad y servicios?",
      "¿Cómo te ha tratado el personal docente servicios?",
      "¿Qué opinas de que el proceso de inscripción sea eficiente?",
      "¿Cómo calificarías la atención en las oficinas de servicios escolares?",
      "¿Cómo te parecen los horarios de atención al público?",
      "¿En general, cómo calificarías a los servicios escolares?"
    ],
    opciones: ["Excelente", "Bueno", "Neutro", "Malo"]
  };

  const [answers, setAnswers] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e) => {
    const updatedAnswers = { ...answers, [e.target.name]: e.target.value };
    setAnswers(updatedAnswers);

    // Validar si todas las preguntas están contestadas
    const allAnswered = questionnaire.preguntas.every((_, i) => updatedAnswers[`pregunta_${i}`]);
    setIsDisabled(!allAnswered);
  };

  const onSubmit = async () => {
    const questionsUnanwered = questionnaire.preguntas
      .map((_, i) => (answers[`pregunta_${i}`] ? null : i + 1))
      .filter((q) => q);

    if (questionsUnanwered.length > 0) {
      Swal.fire(
        "¡Oops!",
        `Faltan preguntas por contestar: ${questionsUnanwered.join(", ")}`,
        "error"
      );
      return;
    }

    try {
      Swal.fire({ title: "Enviando respuestas...", didOpen: () => Swal.showLoading() });

      // Envía las respuestas al servidor
      await axios.post("http://localhost:4000/save-answers", answers);

      Swal.fire("¡Respuestas almacenadas con éxito!", "", "success").then(() => window.location.reload());
    } catch (error) {
      Swal.fire(
        "¡Ocurrió un error al guardar las respuestas!",
        error.response?.data?.message || error.message,
        "error"
      );
    }
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Encuesta Servicios Escolares</Card.Title>
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
                <Button onClick={onSubmit} disabled={isDisabled} variant="primary">
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
/*
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

  const onChange = (e) => {
    e.preventDefault();
    const data = answers;
    data[e.target.name] = e.target.value;
    setAnswers(data);
  }

  const onSumbit = ()=>{
    //Validar que las preguntas fueron contestadas
    const questionsUnanwered = [];
    questionnaire.preguntas.map((pregunta,i)=>{
      if (answers[`pregunta_${i}`]) {
        questionsUnanwered.push(i + 1)
      }
    })
    if (unansweredQuestions.length > 0) {
      Swal.fire("Opps!!, parece que faltan preguntas por contestar", questionsUnanwered.join(','),
      "error"
      );
    }
  }   
    return;
    }
    Swal.fire("Enviando respuesta")
    Swal.showLoading()
    try {
      // Envía las respuestas al servidor
      await axios.post("http://localhost:4000/save-answers", answers);
      Swal.fire("Respuesta almacenada con exito","","success").then(()=>window.location.reload);
    } catch (error) {
      Swal.fire("Opps ocurrio un error al guardar las respuestas", error.msg, "error");
    }
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Encuesta servicios escolares</Card.Title>
          <Form>
            {questionnaire.preguntas.map((pregunta, i) => (
              <Form.Group key={`q-${i}`}>
                <Form.Label>{`${i + 1}._ ${pregunta}`}</Form.Label>
                {questionnaire.opciones.map((opcion, io) => (
                  <Form.Check
                    key={`pregunta_${i}_o_${io}`}
                    type="radio"
                    id={`pregunta_${io}_opcion_${i}`}
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
                <Button onClick={onSumbit} disabled={isDisabled} variant="primary">
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

*/