import './integradora.css';
import { Breadcrumb, Card, Container, Form } from 'react-bootstrap';
import { useState } from 'react';

function integradora() {

  const [cita, setCita] = useState({});
  const [isEnable, setIsEnable] = useState(true)
  const onChange = (e) => {
    
    e.preventDefault();
    console.log(e)
    const obj= cita; obj[e.target.name] = e.target.value;
    setCita(obj)
    if ((cita.respuesta1 && cita.respuesta1 !== "") &&
      (cita.respuesta2 && cita.respuesta2 !== "") &&
      (cita.respuesta3 && cita.respuesta3 !== "") &&
      (cita.respuesta4 && cita.respuesta4 !== "") &&
      (cita.respuesta5 && cita.respuesta5 !== "") &&
      (cita.respuesta6 && cita.respuesta6 !== "") 
     
    ) {
      setIsEnable(false)
    }
  }

return (
  <Container>
    <Card>
      <Card.Body>
        <Card.Title> Encuesta servicios escolares </Card.Title>
        <Form>
          <Form.Group>
            <Form.Label>1. Nombre y correo </Form.Label>
            <Form.Control onChange={onChange} name="respuesta1"  as="textarea" placeholder='Ingresa la respuesta1' />
          </Form.Group>
          <Form.Group>
            <Form.Label>2. Funcion que ejerces en la institucion</Form.Label>
            <Form.Control onChange={onChange} name="respuesta2"  as="textarea" placeholder= 'Ingresa la respuesta2' />
          </Form.Group>
          <Form.Group>
            <Form.Label>3. ¿Que opinas del maestro1?</Form.Label>
            <Form.Control onChange={onChange} name="respuesta3" as="textarea" placeholde='Ingresa la respuesta3' />
          </Form.Group>
          <Form.Group>
            <Form.Label>4. ¿Que opinas del maestro2</Form.Label>
            <Form.Control onChange={onChange} name="respuesta4" as="textarea" placeholder='Ingresa la respuesta4' />
          </Form.Group>
          <Form.Group>
            <Form.Label>5. ¿Que opinas de las instalaciones de la universidad?</Form.Label>
            <Form.Control onChange={onChange} name="respuesta5"  as="textarea" placeholder='Ingresa la respuesta5' />
          </Form.Group>
          <Form.Group>
            <Form.Label>6. ¿Como te a tratado el personal docente, cajas, seguridad y de servicios?</Form.Label>
            <Form.Control onChange={onChange} name="respuesta6" as="textarea" placeholder='Ingresa la respuesta6' />
          </Form.Group>
          
          <button disabled={isEnable}> Enviar </button>
        </Form>
      </Card.Body>
    </Card>
  </Container>
);
}

export default integradora;