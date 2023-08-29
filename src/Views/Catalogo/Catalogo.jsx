import React, { useState, useEffect } from "react";

import NavbarColor from "../../Components/Layout/NavbarColor";
import Footer from "../../Components/Layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

//Puntos
import Punto1 from "./Productos/Punto1";
import Punto2 from "./Productos/Punto2";
import Punto3 from "./Productos/Punto3";
import Punto4 from "./Productos/Punto4";
import PuntoBarrio from "./Productos/PuntoBarrio";
import PuntoBarrio2 from "./Productos/PuntoBarrio2";

const Catalogo = () => {
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

  return (
    <>
      <NavbarColor />
     
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5" >
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <br></br>
            <br></br>
         

            <svg height="100" stroke="#091e3e" stroke-width="2" class="text-line" width="100%">
            <text x="50%" dominant-baseline="middle" text-anchor="middle" y="30%"> Productos   </text>
      
            <text x="50%" dominant-baseline="middle" text-anchor="middle" y="80%">Disponibles</text>
            
            </svg>
          </div>

        

        {/* /////////////////////////////////////////////////// */}
        
    
 

  
 

          <Tabs
            defaultActiveKey="Punto1"
            id="justify-tab-example"
            className="mb-5 tabCatalogo "
            justify
            
            
          >
            
            <Tab eventKey="Punto1" title="Av. Frondizi 4.205" tabClassName="puntoTab">
             
            
            <Punto1/>
              
            </Tab>

            <Tab eventKey="Punto2" title="Av. Nestor Kirchner 1.855" tabClassName="puntoTab">
            
              <Punto2/>
            </Tab>

            <Tab eventKey="Punto3" title="Av. Nestor Kirchner 5.595" tabClassName="puntoTab">
            
              <Punto3/>
            </Tab>

            <Tab eventKey="Punto4" title="Paula Albarracín 2735" tabClassName="puntoTab">
              <Punto4/>
            </Tab>
            
    {/*     
  <Tab eventKey="Punto5" title="Palo Santo " tabClassName="puntoTab">
              <PuntoBarrio/>
            </Tab>   

     <Tab eventKey="Punto6" title="B° El Porvenir" tabClassName="puntoTab">
              <PuntoBarrio2/>
            </Tab>    */}
         

          </Tabs>
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
};

export default Catalogo;
