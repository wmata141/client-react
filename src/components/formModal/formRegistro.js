import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Link, Box, FormControl, Select, MenuItem, InputLabel, FormHelperText, Input, InputAdornment } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { AiOutlineMail, AiFillLock, AiOutlineUser } from 'react-icons/ai';
import { useStyles } from './styles';
import { validateRegistro, validateRegistroCampo, reloadData, withoutValues, withValues, MayorEdad } from '../../assets/utilities';
import { PICK_UP } from '../../reducers/alertReducer';
import { registro, fecha } from '../../assets/utilities/models';
import { LOGIN_USER } from '../../reducers/authReducer';

const FormRegistro = ({ setType, setOpenModal }) => {
  const [values, setValues] = useState(registro);
  const [errors, setErrors] = useState(registro);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dates, setDates] = useState(fecha);

  const dispatch = useDispatch()
  let navigate = useNavigate()

  useEffect(() => {
    const objData = reloadData();
    const day = objData.day
    const month = objData.month
    const year = objData.year
    setDates(values => ({ ...values, day, month, year }));
  }, []);

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    setErrors(validateRegistro(values));
    setIsSubmitting(true);

    if (withoutValues(errors) && withValues(values)) {
      const { daySelected, monthSelected, yearSelected } = values
      if (MayorEdad(daySelected, monthSelected, yearSelected)) {
        const res = await fetch('http://localhost:3001/api/signup', {
          'method': 'POST',
          'headers': {
            'Content-Type': 'application/json',
          },
          'body': JSON.stringify(values),
        })
        const result = await res.json()
        const { token, user } = result
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', JSON.stringify(token))
        setOpenModal(false)
        navigate("/spiral");
        dispatch({ type: PICK_UP, payload: { open: true, severity: 'success', message: `Bienvenido ${user.name}` } })
      } else {
        dispatch({ type: PICK_UP, payload: { open: true, severity: 'error', message: `Lo sentimos debe ser mayor de edad` } })
        setType('Error')
      }
    }
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors(validateRegistroCampo(event.target.name, event.target.value, errors))
  };

  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <FormControl
        className={classes.margin}
        error={errors.name.length > 0 && isSubmitting}
        fullWidth
      >
        <InputLabel htmlFor="input-with-icon-adornment">Nombres</InputLabel>
        <Input
          name="name"
          onChange={handleChange}
          value={values.name}
          startAdornment={
            <InputAdornment position="start" style={errors.name.length > 0 && isSubmitting ? { color: '#f44336' } : {}}>
              <AiOutlineUser />
            </InputAdornment>
          }
        />
        <FormHelperText id="component-helper-text">{errors.name}</FormHelperText>
      </FormControl>

      <FormControl
        className={classes.margin}
        error={errors.lastName.length > 0 && isSubmitting}
        fullWidth
      >
        <InputLabel htmlFor="input-with-icon-adornment">Apellidos</InputLabel>
        <Input
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
          startAdornment={
            <InputAdornment position="start" style={errors.lastName.length > 0 && isSubmitting ? { color: '#f44336' } : {}}>
              <AiOutlineUser />
            </InputAdornment>
          }
        />
        <FormHelperText id="component-helper-text">{errors.lastName}</FormHelperText>
      </FormControl>

      <FormControl
        className={classes.margin}
        error={errors.email.length > 0 && isSubmitting}
        fullWidth
      >
        <InputLabel htmlFor="input-with-icon-adornment">Correo Electronico</InputLabel>
        <Input
          name="email"
          onChange={handleChange}
          value={values.email}
          startAdornment={
            <InputAdornment position="start" style={errors.email.length > 0 && isSubmitting ? { color: '#f44336' } : {}}>
              <AiOutlineMail />
            </InputAdornment>
          }
        />
        <FormHelperText id="component-helper-text">{errors.email}</FormHelperText>
      </FormControl>

      <FormControl
        className={classes.margin}
        error={errors.password.length > 0 && isSubmitting}
        fullWidth
      >
        <InputLabel htmlFor="input-with-icon-adornment">Contraseña</InputLabel>
        <Input
          name="password"
          onChange={handleChange}
          value={values.password}
          startAdornment={
            <InputAdornment position="start" style={errors.password.length > 0 && isSubmitting ? { color: '#f44336' } : {}}>
              <AiFillLock />
            </InputAdornment>
          }
        />
        <FormHelperText id="component-helper-text">{errors.password}</FormHelperText>
      </FormControl>
      <div style={{ textAlign: 'start', width: '100%' }}>
        <Box component="span">
          {"Fecha de Nacimiento"}
        </Box>
      </div>
      <div className={classes.margin} style={{ display: 'flex', justifyContent: 'space-around', width: '100%', margin: 0 }}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Dia</InputLabel>
          <Select
            value={values.daySelected}
            name="daySelected"
            onChange={handleChange}
            error={errors.daySelected.length > 0 && isSubmitting}
          >
            {dates.day.map(i => (
              <MenuItem value={i} key={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.daySelected}</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Mes</InputLabel>
          <Select
            value={values.monthSelected}
            name="monthSelected"
            onChange={handleChange}
            error={errors.monthSelected.length > 0 && isSubmitting}
          >
            {dates.month.map(i => (
              <MenuItem value={i.id} key={i.id}>
                {i.value}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.monthSelected}</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Año</InputLabel>
          <Select
            value={values.yearSelected}
            name="yearSelected"
            onChange={handleChange}
            error={errors.yearSelected.length > 0 && isSubmitting}
          >
            {dates.year.map(i => (
              <MenuItem value={i} key={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.yearSelected}</FormHelperText>
        </FormControl>
      </div>

      <Button
        onClick={() => handleSubmit()}
        fullWidth
        variant='contained'
        className={classes.submitBtn}
      >
        Registrarme
      </Button>

      <div style={{ textAlign: 'center' }}>
        <Box component="span" m={1}>
          {"¿Olvidaste la contraseña? "}
          <Link onClick={() => console.log("Funcion no permitida")} style={{ color: '#eb6d07', cursor: 'pointer' }}>
            Recuperala
          </Link>
        </Box>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Box component="span" m={1}>
          {"¿Ya tienes cuenta? "}
          <Link onClick={() => setType('LogIn')} style={{ color: '#eb6d07', cursor: 'pointer' }}>
            Inicia Sesion Aqui
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default FormRegistro;