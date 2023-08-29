import React, { useEffect, useState } from 'react';
import { Modal, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from "../../Components/Assets/Imgs/Saf/now-logo.png";
import { AlertaModal } from "../../Components/Layout/ModalAlerta";
import * as yup from 'yup';

let UserSchema = yup.object().shape({
  nombre_completo: yup.string().min(8, "El nombre debe tener al menos 8 caracteres").required("Campo requerido"),
  email: yup.string().email("Correo electrónico inválido").required("Campo requerido"),
});

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    textAlign: 'center',
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
}));

const RegistrationModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [nombre_completo, setNombre] = useState('');
  const [registrado, setRegistrado] = useState(null);
  const [habilitado, setHabilitado] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const validateForm = async () => {
      try {
        await UserSchema.validate({ nombre_completo, email }, { abortEarly: false });
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
  }, [nombre_completo, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registroNuevoUsu();
    handleClose();
    setNombre('');
    setEmail('');
    setErrors({});
  };

  const registroNuevoUsu = async () => {

    AlertaModal({
      tituloModal: "Su Registro se completo correctamente",
      tipoModal: "success",
      colorModal: "#7cd164",
      tiempoModal: 3000,
    });


    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      nombre_completo,
      email,
    });

    const options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    const postData = await fetch("https://back-end-saf.onrender.com/registro", options);
    const res = postData.json();
    console.log(res);
    setRegistrado(true);
  };

  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <div className={classes.modalContent}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <Typography variant="h5" component="h1">
          Registrate
        </Typography>
        Para recibir las últimas novedades
        <br></br>
        del programa
        <br></br>
        Soberania Alimentaria Formoseña
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            label="Nombre Completo"
            variant="outlined"
            onChange={(e) => { setNombre(e.target.value); }}
            className={classes.textField}
            error={!!errors.nombre_completo}
            helperText={errors.nombre_completo}
          />
          <TextField
            label="Email"
            variant="outlined"
            onChange={(e) => { setEmail(e.target.value); }}
            className={classes.textField}
            error={!!errors.email}
            helperText={errors.email}
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.submitButton}
            disabled={!habilitado}
          >
            Registrarse
          </Button>
        </form>
      </div>
    </Modal>
  );
};

const Register = ({ valor, cerrarModal }) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (valor === true) {
      handleModal();
    }
  }, [valor]);

  const handleModal = () => {
    setOpenModal(!openModal);
    cerrarModal();
  };

  return (
    <div className="app">
      <RegistrationModal open={openModal} handleClose={handleModal} />
    </div>
  );
};

export default Register;
