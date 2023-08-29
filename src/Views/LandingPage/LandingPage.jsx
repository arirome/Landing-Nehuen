import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import carousel1 from "../../Components/Assets/Imgs/Saf/carousel-1.webp";
import about from "../../Components/Assets/Imgs/Saf/bg1.webp";
import about1 from "../../Components/Assets/Imgs/Saf/bg2.webp";
import about2 from "../../Components/Assets/Imgs/Saf/bg3.webp";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Layout/Footer";
import { Link } from "react-router-dom";
import "./Landing.css";
import { AlertaModal } from "../../Components/Layout/ModalAlerta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';



function LandingPage() {

    AlertaModal({
      tituloModal: "Registrate para recibir novedades",
      tipoModal: "alert",
      colorModal: "#06A3DA",
      tiempoModal: 2000,
    });
  

  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleMouseOver = () => {
    setMostrarMensaje(true);
  };

  const handleMouseLeave = () => {
    setMostrarMensaje(false);
  };
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
      <div className="container-fluid position-relative p-0">
        <Navbar />

        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={carousel1} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Bienvenidos a
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Soberania Alimentaria Formoseña
                  </h1>
                  <Link
                    to="/catalogo"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Ver Catalago
                  </Link>
                  <Link
                    to="/puntos"
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Puntos
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={carousel1} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Bienvenidos a
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Soberania Alimentaria Formoseña
                  </h1>
                  <Link
                    to="/catalogo"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Ver Catalago
                  </Link>
                  <Link
                    to="/puntos"
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Puntos
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "1000px" }}
            data-aos="flip-left"
          >
           
            <h1 className="mb-2">Netamente Formoseño</h1>
            <h5 className="fw-bold text-primary text-uppercase">
                  Todos los jueves a las 19 hs
                </h5>
          {/*   <video className="d-block w-100" src={netamentefsa} controls />  */}
        
          <div className="player-wrapper">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=vptQ4BiXjBY"
        className="react-player"
        width="100%"
        height="100%"
        controls={true}
        playing={false}
      />
    </div>

          </div>
          
          <div className="style row g-5  border border-primary" data-aos="fade-up-right">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">
                  Sobre Nosotros
                </h5>
                <h1 className="mb-0">¿Qué es el programa S.A.F?</h1>
              </div>
              <p
                className="rounded-bg"
                style={{
                  color: "#091e3e",
                 
                }}
              >
                El programa Soberanía Alimentaria Formoseña o por sus siglas
                S.A.F es un programa impulsado por la Subsecretaría de Defensa
                al Consumidor y Usuarios dependiente del Ministerio de Economía,
                Haciendas y Finanzas que busca fortalecer y promocionar los
                canales de comercialización de los alimentos producidos por
                nuestras familias de productores paipperas; generando espacios
                de comercialización que permitan la venta directa del productor
                al consumidor eliminando la intermediación.
              </p>
            </div>

            {/*                         <div
              className="col-lg-5"
              style={{ minHeight: "250px", minWidth: "250px" }}
            >
              <div className="position-relative h-100">
                <img
                  alt="foto"
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={about}
                  style={{ objectFit: "cover", borderRadius: "5px" }}
                />
              </div>
            </div> */}

<div
              id="carousel-two"
              className="col-lg-5 carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={about}
                    alt={`Imagen`}
                    style={{
                      height: "300px",
                      borderRadius: "5px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                {/* ///////////////////  PARA OTRA IMAGEN EN EL CAROUSEL, OTRO DIV    //////////////////////////////// */}
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={about}
                    alt={`Imagen`}
                    style={{
                      height: "300px",
                      borderRadius: "5px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={about1}
                    alt={`Imagen`}
                    style={{
                      height: "300px",
                      borderRadius: "5px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={about2}
                    alt={`Imagen`}
                    style={{
                      height: "300px",
                      borderRadius: "5px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                {/* /////////////////////////////////////////////////// */}

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousel-two"
                  data-bs-slide="prev"
                >
                  <span
                    style={{
                      backgroundColor: "#454545",
                      borderRadius: "5px",
                    }}
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carousel-two"
                  data-bs-slide="next"
                >
                  <span
                    style={{
                      backgroundColor: "#454545",
                      borderRadius: "5px",
                    }}
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
   
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s"  data-aos="fade-up-right">
        <div className="container py-5">

     



          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >




            <h5 className="fw-bold text-primary text-uppercase">
              Soberanía Alimentaria Formoseña
            </h5>
            <h1 className="mb-0">DEL PRODUCTOR A TU MESA A UN PRECIO JUSTO</h1>
          </div>
        </div>  
      </div>
      
      <Footer />
      <button
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        id="btn-up"
        style={{
          display: isVisible ? "block" : "none",
          position: "fixed",
          bottom: "20px",
          borderRadius:"20px",
          right: "20px",
        }}
        className="btn btn-primary float-right"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <FontAwesomeIcon icon={faArrowUp} />
        {mostrarMensaje && <div>Click para ir hacia arriba</div>}
      </button>
    </>
  );
}

export default LandingPage;
