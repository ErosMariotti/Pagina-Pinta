import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/ig.png";
import navIcon2 from '../assets/img/logowp.png';

// import { MailchimpForm } from "./MailchimpForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            </Col>
              <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                  <a 
                    href="https://www.instagram.com/pintamkt/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={navIcon1} alt="Instagram" />
                  </a>
                </div>

                <div className="social-icon">
                  <a 
                    href="https://api.whatsapp.com/send?phone=56979853211" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={navIcon2} alt="WhatsApp" style={{ width: "26px", height: "26px" }} />
                  </a>
                </div>

                <p>© 2024 Pinta MKT. Todos los derechos reservados.</p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}
