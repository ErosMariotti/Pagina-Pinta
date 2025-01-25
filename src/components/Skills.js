import { useState, useEffect } from "react";
import Logo1 from "../assets/img/logo1.png";
import Logo2 from "../assets/img/logo2.png";
import Logo3 from "../assets/img/logo3.png";
import Logo4 from "../assets/img/logo4.png";
import Logo5 from "../assets/img/logo5.png";
import Logo6 from "../assets/img/logo6.png";
import Logo7 from "../assets/img/logo7.png";
import Logo8 from "../assets/img/logo8.png";
import Logo9 from "../assets/img/logo9.png";

import colorSharp from "../assets/img/color-sharp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import TrackVisibility from "react-on-screen";
import AOS from "aos";
import "aos/dist/aos.css";

export const Skills = () => {
  const [scale, setScale] = useState(1); // Para el escalado de la sección
  const [carouselSpeed, setCarouselSpeed] = useState(3000); // Velocidad del carrusel
  const [hasAnimated, setHasAnimated] = useState(false);

 useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
      });
    }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section
      className="skill"
      id="skills"
      style={{ transform: `scale(${scale})` }}
    >
      <div data-aos="fade-up" className="container">
        <div className="row">
          <div className="col-12">
            {/* TrackVisibility para controlar la animación */}
            <TrackVisibility>
              {({ isVisible }) => {
                if (isVisible && !hasAnimated) {
                  setHasAnimated(true); // Marcar como animado
                }

                return (
                  hasAnimated && (
                      <div className="skill-bx">
                        {/* Animación del Título "Skills" */}
                        <h2 data-aos="fade-up">Confían en Nosotros</h2>
                        {/* Animación del Subtítulo */}
                        <p data-aos="fade-up" data-aos-delay="200"></p>

                        {/* Carrusel con títulos animados */}
                        <Carousel
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={carouselSpeed} // Velocidad dinámica
  className="owl-carousel owl-theme skill-slider"
>
  <motion.div
    whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
    transition={{ duration: 0.3 }}
    className="item"
  >
    <img className="carousel-image" data-aos="fade-up" src={Logo1} alt="Burgery" />
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
    transition={{ duration: 0.3 }}
    className="item"
  >
    <img
      className="carousel-image"
      data-aos="fade-up"
      src={Logo2}
      alt="Bulonera Mendoza"
    />
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
    transition={{ duration: 0.3 }}
    className="item"
  >
    <img
      className="carousel-image"
      data-aos="fade-up"
      src={Logo3}
      alt="Piñata"
    />
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
    transition={{ duration: 0.3 }}
    className="item"
  >
    <img
      className="carousel-image"
      data-aos="fade-up"
      src={Logo4}
      alt="Bermudez Moya"
    />
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
    transition={{ duration: 0.3 }}
    className="item"
  >
    <img
      className="carousel-image"
      data-aos="fade-up"
      src={Logo5}
      alt="Rise Capital"
    />
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
    transition={{ duration: 0.3 }}
    className="item"
  >
    <img
      className="carousel-image"
      data-aos="fade-up"
      src={Logo6}
      alt="Samaco"
    />
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
    transition={{ duration: 0.3 }}
    className="item"
  >
    <img
      className="carousel-image"
      data-aos="fade-up"
      src={Logo7}
      alt="McDonald's"
    />
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
    transition={{ duration: 0.3 }}
    className="item"
  >
    <img
      className="carousel-image"
      data-aos="fade-up"
      src={Logo8}
      alt="Hipermuebles"
    />
  </motion.div>


  <motion.div
    whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
    transition={{ duration: 0.3 }}
    className="item"
  >
    <img
      className="carousel-image"
      data-aos="fade-up"
      src={Logo9}
      alt="CapitalXtend"
    />
  </motion.div>


</Carousel>

                      </div>
                    )
                );
              }}
            </TrackVisibility>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
