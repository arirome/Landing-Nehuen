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
import Spinner from "../../Components/Layout/Spinners/Spinner";
import AOS from 'aos';
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import './informativo.css'
import './styleInfo.css'
import "./infoStyle.css";

const Informativo = () => {

  const [isModalOpen, setIsModalOpen] = useState(false); // estado para controlar si el modal está abierto o cerrado
  const [imagen, setImagen] = useState("");
  const handleImageClick = (img) => {
    setIsModalOpen(true);
    setImagen(img);
  };

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


  /*  */
 
  const [data, setStateData] = useState([]);

  const url =
    "https://soberaniabackend.onrender.com/api/ver-noticias?limit=10&skip=0";

  const fetchData = async () => {
    try {
      const peticion = await fetch(url);
      const res = await peticion.json();
      setStateData(res);

      console.log(res);
      console.log("PRIMERA NOTICIA",res?.primeraNoticia);
  
    } catch (error) {
      console.log(error);
    }
  };
 


  useEffect(() => {
    fetchData();
  }, []);

  

  /*  */

  let fecha = new Date(
    data?.primeraNoticia?.fecha
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


   /*  */



  return (
    <React.Fragment>
      <NavbarColor />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" style={{background:'#fff'}}>
        <div className="container py-5">

    



        <div class="first-widget parallax" >
        
          
        <div class="fh5co-recent-news">
      <h2 class="text-uppercase text-center">Ultimas Noticias</h2>
      <hr class="mx-auto" />
      </div>
        
      
    </div>
         
          {/* /////////////////////// */}

          <div class="banner-inner pt-5">
       
       <div class="container">
           <div class="row">
         
               <div class="col-lg-5">
           
                   <div class="thumb after-left-top">
                       <img src={data?.primeraNoticia?.img} alt="img"/>
                   </div>
               </div>
               <div class="col-lg-6 align-self-center">

                  {


 
                   <div class="banner-details mt-4 mt-lg-0">
                       <div class="post-meta-single">
                           <ul>
                              
                               <li class="date" >{fechaMayusculas}</li>
                           </ul>
                       </div>
                       <h2 className="titulo1">{data?.primeraNoticia?.titulo}</h2>
                       <br /><br />
                       <a href="#" class="post-title"> <Link to={{pathname:'/detalles/' + data?.primeraNoticia?.uid}}>Leer mas<i class="fa-solid fa-angles-right" style={{position:"relative", top:"1px"}}></i></Link></a>
                   </div>



                   }

               </div>
           </div>
       </div>
   </div>
   



          {/* /////////////////////// */}


          {/* /////////////////////////// */}

        <div class="fh5co-recent-news">
        <h2 class="text-uppercase text-center">Noticias Pasadas</h2>
        <hr class="mx-auto" />
        </div><br /><br />



        <div class="top-news-area section-padding-100">
        <div class="container">
            <div class="row">

 {/* /////////////////////////// */}








 {
            
                
            data?.otrasNoticias?.length > 0 ? (
              data?.otrasNoticias?.map((item, index) => {

                let fechaOtraNoti = new Date(
                  item?.fecha
                ).toLocaleDateString("es-ES", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                });
                const palabrasNoti = fechaOtraNoti.split(" ");
                for (let i = 0; i < palabrasNoti.length; i++) {
                  palabrasNoti[i] =
                    palabrasNoti[i][0].toUpperCase() +
                    palabrasNoti[i].substring(1);
                }
                const fechaOtraNotiMayusculas = palabras.join(" ");

                
                 if (item?.publicado == true) {

                return (
<div class="col-12 col-sm-6 col-lg-4">
                  <div class="single-blog-post style-2 mb-5">
                      
                      <div class="blog-thumbnail">
                          <a href="#"><img src={item.img} alt=""/></a>
                      </div>

                   
                      <div class="blog-content">
                          <span class="post-date">{fechaOtraNotiMayusculas}</span>
                          <a href="#" class="post-title"> <Link to={{pathname:'/detalles/' + item.uid}}>{item?.titulo}</Link></a>
                          
                      </div>
                  </div>
              </div>


                )       
                  
                 }
                 
                  




                 
              })
            ) : (
              <div style={{ position: "relative", left: "40%" }}>
               <Spinner/>
              </div>
            )
            
            }


            
                   {/* /////////////////////////// */}
              
                

            

               
               

            </div>
        </div>
    </div>
 

{/* /////////////////7 */}
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
    </React.Fragment>
  );
};

export default Informativo;
