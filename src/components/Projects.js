import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import camara from "../assets/img/11111.png";
import cohete from "../assets/img/2.png";
import podcast from "../assets/img/podcats.png";
import bot from "../assets/img/chatbot.png"
import navIcon1 from '../assets/img/ig.png';
import navIcon2 from '../assets/img/logowp.png';
import infoMarketingDigital from "../assets/img/info_marketing_digital.png"
import streamingypodcast from "../assets/img/streaming y podcats.png"
import servicioEventos from "../assets/img/eventos.png"
import servicioChatBot from "../assets/img/servicio chat bot.png"
import "animate.css";
import TrackVisibility from "react-on-screen";
import AOS from "aos";
import "aos/dist/aos.css";







export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);


  useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
      });
  }, []);


  const projects = [
    {
      title: "Marketing Digital",
      description: "",
      imgUrl: cohete,
      details: `
        
      `,
      image: infoMarketingDigital,
    },
    {
      title: "Streaming & Podcast",
      description: "",
      imgUrl: podcast,
      details: `
        
      `,
      image: streamingypodcast,
    },
    {
      title: "Cobertura y Desarrollo de Eventos",
      description: "",
      imgUrl: camara,
      details: `
        
      `,
      image: servicioEventos,
    }, 
    {
      title: "Chatbots",
      description: "",
      imgUrl: bot,
      details: `
        
      `,
      image: servicioChatBot,
    }    
  ];

  // Maneja el clic en una tarjeta de proyecto
  const handleCardClick = (project) => {
    setActiveProject(project); // Establece el proyecto activo
    setShowModal(true); // Muestra el modal
  };

  // Cierra el modal
  const handleClose = () => {
    setShowModal(false);
    setActiveProject(null);
  };

  const trayectoria = [
    {
      lugar: "WhatsApp",
      periodo: "Encontranos vía",
      roles: ["Número de teléfono"],
    },
  ];
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
            {({ isVisible }) => {
              if (isVisible && !hasAnimated) {
                setHasAnimated(true); // Marcar como animado
              }
                return (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* Title Animation */}
                  
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Servicios</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Contacto</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">¿Quiénes somos?</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <Col
                            size={12}
                            sm={6}
                            md={4}
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 200}
                            onClick={() => handleCardClick(project)}
                          >
                            <ProjectCard
                              {...project}
                            />
                          </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="charla-container">
                          <h4>
                            WhatsApp: 56979853211
                          </h4>
                        </div>
                        <div className="charla-container">
                          <h4>
                            Email: pintamkt@gmail.com
                          </h4>
                        </div>          
                      </Tab.Pane>
                    <Tab.Pane eventKey="third" className="charla-pane">
                      <div className="charla-container">
                        <h4>
                          Somos una agencia 360 que trabaja para convertir ideas en proyectos
                          exitosos. Nos especializamos en brindar soluciones integrales de marketing
                          digital y producción audiovisual, diseñadas para ayudar a empresas

                          medianas y grandes a destacar en un mercado competitivo.

                          Con un enfoque estratégico, combinamos creatividad, tecnología y análisis
                          para ofrecer resultados medibles. Nos enorgullece ser un socio confiable
                          para nuestros clientes, creando contenido y estrategias que realmente

                          conectan con sus audiencias.
                        </h4>
                        <h3>¡Sumate al cambio digital con nosotros!</h3>
                      </div>
                    </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>                
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {activeProject && (
        <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-dialog"
        contentClassName="modal-content"
        centered
      >
        <Modal.Header className="modal-header" closeButton>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div dangerouslySetInnerHTML={{ __html: activeProject.details }} />
          {activeProject.image && (
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="modal-image"
            />
          )}
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>      
      )}
    </section>
  );
};
