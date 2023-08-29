import React, { useState, useEffect } from "react";
import { AlertaModal } from "../../Components/Layout/ModalAlerta.jsx";
import { Link } from "react-router-dom";
import Footer from "../../Components/Layout/Footer";
import NavbarColor from "../../Components/Layout/NavbarColor";
import * as yup from 'yup';

const ContactoSchema = yup.object().shape({
  nombreCompleto: yup.string().min(8, "El nombre debe tener al menos 8 caracteres").required("Campo requerido"),
  correo: yup.string().email("Correo electrónico inválido").required("Campo requerido"),
  mensaje: yup.string().required("Campo requerido")
});

const Contacto = () => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [habilitado, setHabilitado] = useState(false);
  const [errors, setErrors] = useState({});

  const cambiarTexto = (e) => {
    const { name, value } = e.target;
    if (name === "nombre") {
      setNombreCompleto(value);
    } else if (name === "correo") {
      setCorreo(value);
    } else if (name === "mensaje") {
      setMensaje(value);
    }
  };

  useEffect(() => {
    const validateForm = async () => {
      try {
        await ContactoSchema.validate({ nombreCompleto, correo, mensaje }, { abortEarly: false });
        setHabilitado(true);
        setErrors({});
      } catch (error) {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setHabilitado(false);
        setErrors(validationErrors);
      }
    };

    validateForm();
  }, [nombreCompleto, correo, mensaje]);

  const resgistroContacto = async () => {
  

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombreCompleto,
        correo,
        mensaje
      }),
    };

    try {
      const response = await fetch("https://back-end-saf.onrender.com/contacto", requestOptions);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    AlertaModal({
      tituloModal: "Su Consulta fue enviada correctamente",
      tipoModal: "success",
      colorModal: "#7cd164",
      tiempoModal: 3000,
    });
  };

  return (
    <React.Fragment>
      <NavbarColor />
      <br />
      <br />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">
                  Consultas
                </h5>
                <h1 className="mb-0">
                  Para comunicarte con la Subsecretaría de Defensa al Consumidor
                  complete el siguiente formulario.
                </h1>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn"
                data-wow-delay="0.9s"
              >
                <form>
                  <div className="row g-3">
                    <div className="col-xl-12">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Tú Nombre"
                        name="nombre"
                        value={nombreCompleto}
                        onChange={cambiarTexto}
                        style={{ height: "55px" }}
                      />
                      {errors.nombreCompleto && <span>{errors.nombreCompleto}</span>}
                    </div>
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Tú Correo Electronico"
                        name="correo"
                        value={correo}
                        onChange={cambiarTexto}
                        style={{ height: "55px" }}
                      />
                      {errors.correo && <span>{errors.correo}</span>}
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control bg-light border-0"
                        rows="3"
                        name="mensaje"
                        placeholder="Mensaje"
                        value={mensaje}
                        onChange={cambiarTexto}
                      ></textarea>
                      {errors.mensaje && <span>{errors.mensaje}</span>}
                    </div>
                    <div className="col-12">
                      {nombreCompleto && correo && mensaje ? (
                        <Link to="/">
                          <button
                            className="btn btn-dark w-100 py-3"
                            type="button"
                            onClick={resgistroContacto}
                            disabled={!habilitado}
                          >
                            Enviar Consulta
                          </button>
                        </Link>
                      ) : (
                        <button
                          className="btn btn-dark w-100 py-3"
                          type="button"
                          disabled
                          onClick={resgistroContacto}
                        >
                          Enviar Consulta
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contacto;
