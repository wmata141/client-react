import React from 'react';
import { Button, Box } from '@material-ui/core';
import { MdMoodBad } from 'react-icons/md';
import { useStyles } from './styles';

const FormError = ({ setOpenModal }) => {
    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <div style={{ color: '#eb6d07' }}>
                <MdMoodBad size={132} />
            </div>
            <div style={{ textAlign: 'center' }}>
                <Box component="span" m={1}>
                    {"Lo sentimos..."}
                </Box>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Box component="span" m={1}>
                    {"Solo podras crearte una cuenta si eres mayor de edad"}
                </Box>
            </div>
            <Button
                onClick={() => setOpenModal(false)}
                fullWidth
                variant='contained'
                className={classes.submitBtn}
            >
                Salir
      </Button>
        </div>
    );
};

export default FormError;