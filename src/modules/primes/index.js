import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Paper, Grid, Button, Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Comentarios from './components/comentarios';
import { PICK_UP } from '../../reducers/alertReducer';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  rowContainer: {
    width: '100%',
    marginBottom: 10
  },
}));

const Spiral = () => {
  const [n, setN] = useState(5);
  const [result, setResult] = useState('');

  const dispatch = useDispatch()

  const printNPrimes = () => {
    const nPrimes = []
    let count = 0
    let i = 2;

    while (count < n) {
      if (prime(i)) {
        nPrimes.push(`${i}, `);
        count++
      }
      i++
    }
    setResult(nPrimes)
  }

  const prime = num => {
    // Casos Especiales
    if (num === 0 || num === 1 || num === 4) {
      dispatch({ type: PICK_UP, payload: { open: true, severity: 'warning', message: `n debe ser diferente de 0, 1 u 4` } })
      return false;
    }
    for (let i = 2; i < num / 2; i++) {
      if (num % i === 0) return false;
    }

    return true;
  }

  const handleKeyDownArray = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter')
      printNPrimes()
    }
  }

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={2}>
          <div className={classes.rowContainer}>
            <Grid container pt={1} mt={1} spacing={2}>
              <Grid item xs={12} sm={12} md={4}>
                <Comentarios />
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <div className={classes.rowContainer}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Box p={1} bgcolor="grey.300" component="span" display="flex" alignItems="center" height="100%" borderRadius={4}>
                      {`Ingrese el valor de ( n )`}
                    </Box>
                  </Grid>
                </div>
                <div className={classes.rowContainer}>
                  <Grid container pt={1} mt={1}>
                    <Grid item xs={12} sm={12} md={10} >
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={n}
                        onChange={(e => setN(e.target.value.replace(/[^0-9,,]/g, '').replace(',', '')))}
                        onKeyDown={handleKeyDownArray}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={2}>
                      <Box textAlign="right">
                        <Button variant="contained" color="primary" onClick={printNPrimes}>
                          Enter
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
                {result}
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Container >
    </Paper >
  );
}

export default Spiral;