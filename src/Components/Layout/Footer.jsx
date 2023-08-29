import React from "react";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import footer from "../Assets/Imgs/Saf/footer2.webp";
import "./footerStyle.css";
const Footer = () => {
  return (
    <div
      className="container-fluid text-white"
      style={{ background: "#061429" }}
    >
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-6">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "75px" }}
            >
              <img src={footer} alt="Footer" style={{ width: "80%" }}></img>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-6">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "75px" }}
            >
              <p className="mb-0">
                &copy;{" "}
                <a className="text-white border-bottom" href="#">
                  Soberanía Alimentaria Formoseña
                </a>
                . Todos los derechos reservados.{" "}
              </p>
            </div>
            
              <div class="icons">
                  <a href="https://www.instagram.com/soberaniaalimentariaformosena/" class="icon icon--instagram">
                    <i class="ri-instagram-line"></i>
                  </a>
                  <a href="https://www.facebook.com/Programasoberaniaalimentaria/" class="icon icon--facebook">
                    <i class="ri-facebook-line"></i>
                  </a>
                  
                </div>


          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Footer;
