import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";




export const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita la recarga de la página al enviar el formulario.
  
    setButtonText("Enviando...");
    
    // URL del webhook personalizado
    const webhookUrl = "https://hook.us2.make.com/f51yvmuu5zcdexstfg3wnmywg6dhahrp";
    
    try {
      let response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8", // Cambia esto si tu webhook necesita otros encabezados.
        },
        body: JSON.stringify(formDetails), // Ajusta el formato si tu webhook lo requiere.
      });
      
      setButtonText("Enviar");
  
      // Procesar la respuesta
      if (response.ok) {
        const result = await response.json();
        setFormDetails(formInitialDetails); // Resetea el formulario.
        setStatus({ success: true, message: 'Datos enviados correctamente al webhook' });
      } else {
        setStatus({ success: false, message: 'Error al enviar al webhook. Inténtalo nuevamente.' });
      }
    } catch (error) {
      console.error("Error al enviar datos al webhook:", error);
      setButtonText("Enviar");
    }
  };
  
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
        <Col size={12} md={6}>
  <TrackVisibility>
    {({ isVisible }) => {
      if (isVisible && !hasAnimated) {
        setHasAnimated(true); // Marcar como animado
      }
      return (
        <div
          className={
            "contac"
          }
        >
          <img data-aos="fade-up" data-aos-delay="200"
            style={{
              width: "400px",
              height: "auto",
              borderRadius: "10px",
            }}
            src={contactImg}
            alt="Header Img"
          />
        </div>
      );
    }}
  </TrackVisibility>
</Col>
          <Col size={12} md={6}>
          <TrackVisibility>
  {({ isVisible }) => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true); // Marcar como animado
    }

    return (
      hasAnimated && (
        <div data-aos="fade-left">
          <h2>Solicita Presupuesto</h2>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="Nombre"
                  onChange={(e) => onFormUpdate('firstName', e.target.value)}
                />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.lasttName}
                  placeholder="Apellido"
                  onChange={(e) => onFormUpdate('lastName', e.target.value)}
                />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="Correo Electrónico"
                  onChange={(e) => onFormUpdate('email', e.target.value)}
                />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="tel"
                  value={formDetails.phone}
                  placeholder="Celular"
                  onChange={(e) => onFormUpdate('phone', e.target.value)}
                />
              </Col>
              <Col size={12} className="px-1">
                <textarea
                  rows="6"
                  value={formDetails.message}
                  placeholder="¿En qué te gustaría que trabajemos juntos?"
                  onChange={(e) => onFormUpdate('message', e.target.value)}
                ></textarea>
                <button type="submit"><span>{buttonText}</span></button>
              </Col>
              {status.message && (
                <Col>
                  <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                </Col>
              )}
            </Row>
          </form>
          </div>
      )
    );
  }}
</TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}