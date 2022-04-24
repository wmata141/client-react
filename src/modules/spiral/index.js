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
  const [n, setN] = useState(3);
  const [array, setArray] = useState('');
  const [result, setResult] = useState('');

  const dispatch = useDispatch()

  const toMatrix = (arr, size) => {
    if (n < 1 || n > 32768) {
      dispatch({ type: PICK_UP, payload: { open: true, severity: 'warning', message: `n debe ser igual o mayor que 1 e igual o menor que 2^15` } })
      return setResult('n debe ser igual o mayor que 1 e igual o menor que 2^15')
    }

    const mtx = [];
    let value
    for (let i = 0; i < size; i++) {
      var row = [];
      for (var j = 0; j < size; j++) {
        value = arr[(i * size) + j]
        if (value < 0 || value > 2147483648) {
          dispatch({ type: PICK_UP, payload: { open: true, severity: 'warning', message: `m debe contener valores igual o mayor que 1 e igual o menor que 2^31-1` } })
          return setResult('m debe contener valores igual o mayor que 1 e igual o menor que 2^31-1')
        }
        row.push(value);
      }
      mtx.push(row);
    }
    return mtx;
  }
  
  const printMatrix = (m = [1, 8, 7, 2, 9, 6, 3, 4, 5], n = 3) => {
    const matrix = toMatrix(m,n)    
    let finalArray = []

    console.log("matrix ==>",matrix);
    // [1, 8, 7]
    // [2, 9, 6]
    // [3, 4, 5]

    let rowStart = 0; // starting row
    let rowEnd = matrix.length; // ending row
    let columnStart = 0; // starting column
    let columnEnd = matrix[0].length; //ending column

    while (rowStart < rowEnd && columnStart < columnEnd) {
      // left
      if (columnStart < columnEnd) {        
        for (let index = columnStart; index < rowEnd; index++) {
          finalArray.push(matrix[index][columnStart])
        }
        columnStart++;
      }

      // bottom
      if (rowStart < rowEnd) {        
        for (let index = columnStart; index < rowEnd; index++) {
          finalArray.push(matrix[rowEnd - 1][index])
        }
        rowEnd--;
      }

      // right
      if (columnStart < columnEnd) {        
        for (let index = rowEnd - 1; index >= rowStart; index--) {
          finalArray.push(matrix[index][columnEnd - 1])
        }
        columnEnd--;
      }

      // top
      if (rowStart < rowEnd) {        
        for (let index = columnEnd - 1; index > rowStart; index--) {
          finalArray.push(matrix[rowStart][index])
        }
        rowStart++;
      }
    }

    setResult(finalArray)
  }

  const enterArray = () => {
    const arrayString = array.split(',');
    const arrayNumber = arrayString.map(i => Number(i))    
    printMatrix(arrayNumber, n)
  }

  const handleKeyDownArray = (event) => {
    if (event.key === 'Enter') {
      enterArray()
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
                      {`Ingrese Array solo numeros separados por "," ( m )`}
                    </Box>
                  </Grid>
                </div>
                <div className={classes.rowContainer}>
                  <Grid container pt={1} mt={1}>
                    <Grid item xs={12} sm={12} md={12} >
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={array}
                        onChange={(e => setArray(e.target.value.replace(/[^0-9,,]/g, '').replace(',,', ',0')))}
                        onKeyDown={handleKeyDownArray}
                      />
                    </Grid>
                  </Grid>
                </div>
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
                        <Button variant="contained" color="primary" onClick={enterArray}>
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