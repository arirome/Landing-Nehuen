import React, {useState} from "react"
import { Link } from "react-router-dom";
import logo from "../Assets/Imgs/Saf/favicon-02a8a1d2.webp";
import Register from "../../Views/Registro/Register.jsx";
const Navbar = () => {
  const [valorModal, setValorModal] = useState(false)

  const abrirModal = () => {
    setValorModal(true)
  }

  const cerrarModal = () => {
    setValorModal(false)
  }

  return (
    <>
    <nav className="navbar  navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
        <img src={logo} alt="SAF" width="70px" Height="80px"></img>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
        <a className="nav-item nav-link" onClick={()=>{abrirModal()}} style={{cursor:'pointer'}}> 
              Registro
            </a>

          <Link to="/" className="nav-item nav-link">
            Inicio
          </Link>
          <Link to="/catalogo" className="nav-item nav-link">
            Catalogo
          </Link>
          <Link to="/puntos" className="nav-item nav-link">
            Puntos
          </Link>
          <Link to="/informativo" className="nav-item nav-link">
              Ultimas Noticias!
            </Link>
          <Link to="/contacto" className="nav-item nav-link">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
    <Register valor={valorModal} cerrarModal={cerrarModal}/>
    </>
  );
};

export default Navbar;
