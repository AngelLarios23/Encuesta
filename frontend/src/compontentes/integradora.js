import "../Estilos/integradora.css";  // Importa los estilos correctamente
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useState } from 'react';

function Integradora() {
  

  const [cita, setCita] = useState({});
  const [isEnable, setIsEnable] = useState(true);
  // Agregar preguntas
  const questionnaire = {

  }
  
  const onChange = (e) => {//*
    e.preventDefault();//*
    const obj = { ...cita, [e.target.name]: e.target.value };
    setCita(obj);
    console.log(e)//*

//clase
    const onChange = (e) => {
      e.preventDefault();
      const data = anwers;
      data[e.target.name] = e.target.value;
      setAswers(data);
    }
    const onSumbit = ()=>{
      //validar que las preguntas fueron contestadas
      questionnaire.preguntas.filter ((pregunta,i)=>{
        if (anwers [`pregunta_${i}] `]){
          questionsUnanswered.push(i + 1)
        }
      })
      if(questionsUnanswered.length > 0){
        Swal.fireU(
          "Oppppppppppps, parece que faltan preguntas por constertar",
          questionsUnanswered.join(', '),
          "error"
        );
        return;
      }
      try {
        await axios.post("http://localhost:4000/save-answers", anwers)
        Swal.fire("Respuesta almacenadas con exito ","","success").then(()=>window.location.reload)
      } catch (error) {
        Swal.fire("Opsss! Ocurrido un error al guardar tus respuesta", error.msg, "error")
      }
      Swal.fire("Enviando respuestas")
      Swal.showLoading()
//-------------------------------------------------------------------
    }
    if (
      cita.respuesta1 && cita.respuesta2 &&
      cita.respuesta3 && cita.respuesta4 &&
      cita.respuesta5 && cita.respuesta6 &&
      cita.respuesta7 && cita.respuesta8 &&
      cita.respuesta9 && cita.respuesta10 &&
      cita.respuesta11 && cita.respuesta12 &&
      cita.respuesta13
    ) {
      setIsEnable(false);
    }
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <div className="title">
            <Card.Title>Encuesta servicios escolares</Card.Title>
          </div>
          <Form>
          <Form.Group  key={`q-${i}`}>
            <Form.Label>{`${}`}</Form.Label>
          </Form.Group>
            <Form.Group>
              <Form.Label>1. Nombre y correo</Form.Label>
              <Form.Control onChange={onChange} name="respuesta1" as="textarea" placeholder="Ingresa la respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>2. Función que ejerces en la institución</Form.Label>
              <Form.Control onChange={onChange} name="respuesta2" as="textarea" placeholder="Ingresa la respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>3. ¿Qué opinas del maestro1?</Form.Label>
              <Form.Control onChange={onChange} name="respuesta3" as="textarea" placeholder="Ingresa la respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>4. ¿Qué opinas del maestro2?</Form.Label>
              <Form.Control onChange={onChange} name="respuesta4" as="textarea" placeholder="Ingresa la respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>5. ¿Qué opinas de las instalaciones de la universidad?</Form.Label>
              <Form.Control onChange={onChange} name="respuesta5" as="textarea" placeholder="Ingresa la respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>6. ¿Cómo te ha tratado el personal docente?</Form.Label>
              <Form.Control onChange={onChange} name="respuesta6" as="textarea" placeholder="Ingresa la respuesta" />
            </Form.Group>
            <Form.Group>
            <Form.Label>7. ¿Cómo te ha tratado la persona resposable de cajas?</Form.Label>
              <Form.Control onChange={onChange} name="respuesta7" as="textarea" placeholder="Ingresa la respuesta" />
            </Form.Group>
            <Form.Group>
            <Form.Label>8. ¿Cómo te ha tratado la persona resposable de seguridad y de servicios?</Form.Label>
              <Form.Control onChange={onChange} name="respuesta8" as="textarea" placeholder="Ingresa la respuesta" />
            </Form.Group>
            <Form.Group>
            <Form.Label>9. ¿Cómo te ha tratado el personal docente servicios?</Form.Label>
              <Form.Control onChange={onChange} name="respuesta9" as="textarea" placeholder="Ingresa la respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>10. ¿Consideras que el proceso de inscripción es eficiente?</Form.Label>
              <Form.Control onChange={onChange} name="respuesta10" as="textarea" placeholder="Ingresa la respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>11. ¿Cómo calificarías la atención en las oficinas de servicios escolares?</Form.Label>
              <Form.Control onChange={onChange} name="respuesta11" as="textarea" placeholder="Ingresa la respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>12. ¿Te parecen adecuados los horarios de atención al público?</Form.Label>
              <Form.Control onChange={onChange} name="respuesta12" as="textarea" placeholder="Ingresa la respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>13. ¿Qué mejoras sugerirías en los servicios escolares?</Form.Label>
              <Form.Control onChange={onChange} name="respuesta13" as="textarea" placeholder="Ingresa la respuesta" />
            </Form.Group>

            <button disabled={isEnable}>Enviar</button>
      <Row className='text-center'>
      <Col>
      <Button onClick={()=>onSumbit()}>Enviar</Button>
      </Col>
      </Row>
          </Form>
        </Card.Body>
      </Card>

    </Container>
  );
}

export default Integradora;
