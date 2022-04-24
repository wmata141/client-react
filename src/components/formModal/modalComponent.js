import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import FormSignUp from './formSignUp';
import FormLogIn from './formLogIn';
import FormRegistro from './formRegistro';
import FormError from './formError';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Formulario = React.forwardRef(( props, ref ) => {
  const { type, setType, setOpenModal } = props
  switch (type) {
    case 'LogIn': return <FormLogIn setType={setType} setOpenModal={setOpenModal}/>;
    case 'SignUp': return <FormSignUp setType={setType}/>; 
    case 'Registro': return <FormRegistro setType={setType} setOpenModal={setOpenModal}/>;  
    case 'Error': return <FormError setOpenModal={setOpenModal}/>; 
    default: return null;
  }
})

const ModalComponent = (props) => {  
  const [email, setEmail] = React.useState(''); 
  const { openModal, setOpenModal } = props
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={() => setOpenModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Formulario {...props} email={email} setEmail={setEmail}/>      
    </Modal>
  );
}

export default ModalComponent;