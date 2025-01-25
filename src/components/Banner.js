import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 50); 
  const [index, setIndex] = useState(1);
  const toRotate = [ "CRM", "RRSS", "Diseño & fotografía", "Ecommerces" ];
  const period = 1500; 
  const [hasAnimatedHeader, setHasAnimatedHeader] = useState(false);
  const [hasAnimatedAvatar, setHasAnimatedAvatar] = useState(false);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => {
                if (isVisible && !hasAnimatedHeader) {
                  setHasAnimatedHeader(true);
                }
                return (
                  <div className={hasAnimatedHeader ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline" data-aos="fade-left" data-aos-delay="200">Equipos multidisciplinarios para PYMEs.</span>
                    <h1 data-aos="fade-up" data-aos-delay="200">{`Growth MKT`} <span className="txt-rotate" dataperiod="4000" data-rotate='[ "CRM", "RRSS", "Diseño & fotografía", "Ecommerces" ]'><span className="wrap">{text}</span></span></h1>
                    <p data-aos="fade-right" data-aos-delay="200">Aseguramos un crecimiento medible con un método y equipo adaptado a tus necesidades.</p>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
