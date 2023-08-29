import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../Components/Layout/Footer";
import elcolorado from "../../Components/Assets/Imgs/informativo/elcolorado3.webp";
import elcolorado1 from "../../Components/Assets/Imgs/informativo/elcolorado.webp";
import elcolorado2 from "../../Components/Assets/Imgs/informativo/elcolorado2.webp";
import elcolorado3 from "../../Components/Assets/Imgs/informativo/elcolorado4.webp";
import pastelisto from "../../Components/Assets/Imgs/informativo/Pastelito.webp";
import productos1 from "../../Components/Assets/Imgs/informativo/prucdS.webp";
import productos2 from "../../Components/Assets/Imgs/informativo/prucdS1.webp";
import productos3 from "../../Components/Assets/Imgs/informativo/prucdS2.webp";
import batata from "../../Components/Assets/Imgs/informativo/batata-casero.webp";
import gas from "../../Components/Assets/Imgs/informativo/GAS.webp";
import ssanta from "../../Components/Assets/Imgs/informativo/semana santa2.webp";
import chivitopaipa from "../../Components/Assets/Imgs/informativo/chivito casero.webp";
import mayo from "../../Components/Assets/Imgs/informativo/MAYO.webp";

import NavbarColor from "../../Components/Layout/NavbarColor";
import AOS from "aos";

import Spinner from "../../Components/Layout/Spinners/Spinner";
import "aos/dist/aos.css";
import "./informativo.css";
import parse from "html-react-parser";
import { useParams } from 'react-router';


const Informativo = () => {

;

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
  }, []);



  const {proid} = useParams();


  const [dataDetalles, setStateDataDetalles] = useState([]);

  const url =
    "https://soberaniabackend.onrender.com/api/ver-noticia-unica/"+proid;

  const fetchData = async () => {
    try {
      const peticion = await fetch(url);
      const res = await peticion.json();
   
      setStateDataDetalles(res);

      console.log(res);
    } catch (error) {
      console.log(error);
     
    }
    
    
  };
  

  const [loading, setStateLoading] = useState(false);
 
  const  cambiarDeEstado=()=>{
    setStateLoading(true)

    setTimeout(()=>{
      setStateLoading(false)
    }, 3000)

  }

 
  console.log("DATA:", dataDetalles?.titulo)


  useEffect(() => {
    fetchData();
    cambiarDeEstado()
  }, [proid]);

  
  const [descNoticias, setDescNoticias] = useState("");

  useEffect(() => {
    if (dataDetalles?.descripcion) {
      let text = parse(dataDetalles?.descripcion.substring(0, 10000));
      setDescNoticias(text);
    }
  }, [dataDetalles]);

  /* ///// */

  let fecha = new Date(
    dataDetalles?.fecha
  ).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const palabras = fecha.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] =
      palabras[i][0].toUpperCase() +
      palabras[i].substring(1);
  }
  const fechaMayusculas = palabras.join(" ");

  return (
    <React.Fragment>
      <NavbarColor />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" style={{background:'#fff'}}>
	<div class="first-widget parallax" id="blog">
		<div class="parallax-overlay">
			<div class="container pageTitle">
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<h2 class="page-title">Detalles de la Noticia</h2>
					</div> 
					
				</div> 
			</div> 
		</div> 
	</div> 




        { /* /// */}
   <br /><br /><br /><br /><br />
	<div class="container" >	
		<div class="row">

			<div class="col-md-8 blog-posts">
				<div class="row">
					<div class="col-md-12">


            {

loading ? (
  <div align="center">
    <Spinner />
  </div>
) : (
  <>
  


						<div class="post-blog"  >
            <div class="wrap-pic-max-w p-b-30">
									<img src={dataDetalles?.img} alt="IMG"/>
								</div>
							<div class="blog-content">
                
                


               
								<span class="meta-date"><a href="#">{fechaMayusculas}</a></span>
             
								<h3 style={{color:'#00a8d6'}}>{dataDetalles?.titulo}</h3>
								<p style={{textAlign:'justify'}}>{descNoticias}</p>
								{/* <p>Nostrum, quibusdam, eaque, numquam, fuga dolores libero amet suscipit in saepe optio facilis aperiam nulla iste molestiae reprehenderit facere dolorem illum ea quam incidunt est quos odio. Aperiam, repellendus, at, eaque quas eligendi ut ipsum voluptate vero fugiat molestiae labore eius similique cumque necessitatibus sequi dolore quam enim nostrum.</p> */}
								
								{/* <p>Culpa, iure, debitis, exercitationem, vitae aperiam excepturi explicabo distinctio ea nisi illo temporibus dignissimos praesentium dolorem reiciendis iste officiis odio nemo dolor illum laboriosam? Architecto, earum accusamus sequi distinctio veniam amet ea quibusdam eos sapiente!</p> */}
							
							</div> 
						</div> 
            </>
)
               }  






					</div> 
				</div> 
				
				
			
			</div> 

		

		</div>
	</div> 


 
  
  </div> 

  

  { /* /// */}
	
      <Footer />
      <button
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        id="btn-up"
        style={{
          display: isVisible ? "block" : "none",
          position: "fixed",
          bottom: "20px",
          borderRadius: "20px",
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
    </React.Fragment>
  );
};

export default Informativo;
