import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { PICK_UP } from '../reducers/alertReducer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlertComponent = ({ state }) => {
  const { open, severity, message } = state;
  const dispatch = useDispatch()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    if (reason === 'timeout') {
      dispatch({ type: PICK_UP, payload: { open: false, severity, message } })
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert          
          severity={severity}
          elevation={6}
        >
          <strong>{message}</strong>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AlertComponent;