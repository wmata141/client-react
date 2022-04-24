import React from 'react';
import { Button, Link, Box } from '@material-ui/core';
import { FcGoogle } from 'react-icons/fc';
import { CgFacebook } from 'react-icons/cg';
import { useStyles } from './styles';

const FormSignUp = ({ setType }) => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Button
        fullWidth
        variant='contained'
        className={classes.facebookBtn}
        startIcon={<CgFacebook />}
      >
        Iniciar con Facebook
      </Button>
      <Button
        type='submit'
        fullWidth
        variant="outlined"
        className={classes.googleBtn}
        startIcon={<FcGoogle />}
      >
        Iniciar con Google
      </Button>

      <Button
        type='submit'
        fullWidth
        variant='contained'
        className={classes.submitBtn}
        onClick={() => setType('Registro')}
      >
        Registrate con tu Correo
      </Button>

      <div style={{ textAlign: 'left', marginBottom: '20px', marginTop: '20px' }}>
        <Box component="span" m={1} >
          {"Al registrarme, acepto las "}
          <Link href="#" style={{ color: '#0071ce' }}>
            Condicions del Servicio, Deberes del Propietario
          </Link>
          {" y "}
          <Link href="#" style={{ color: '#0071ce', cursor: 'pointer' }}>
            Politicas de Privacidad
          </Link>
          {" de Home Urbano."}
        </Box>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Box component="span" m={1} >
          {"¿Ya tienes cuenta? "}
          <Link onClick={() => setType('LogIn')} style={{ color: '#0071ce', cursor: 'pointer' }}>
            Inicia Sesion Aqui
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default FormSignUp;