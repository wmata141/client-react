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

const Circles = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [r, setR] = useState(0);
  const [arrayCircle, setArrayCircle] = useState([]);
  const [result, setResult] = useState([]);

  const dispatch = useDispatch()

  const checkCollide = (a, b) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const r = a.r + b.r;

    return (dx * dx) + (dy * dy) < r * r;
  };

  const findCollisions = (checkFn) => {
    const max = arrayCircle.length;
    const s = new Set();

    for (let i = 0; i < max; i++) {
      for (let j = 1; j < max; j++) {

        const shapeA = arrayCircle[i];
        const shapeB = arrayCircle[j];

        const collide = shapeA === shapeB ? false : checkFn.call(null, shapeA, shapeB);

        if (collide) {
          s.add(shapeA);
          s.add(shapeB);
        }
      }
    }
    
    setResult(Array.from(s))
  }

  const findCircleCollisions = () => findCollisions(checkCollide);

  const circleReady = () => {
    if (x === 0 || y === 0 || r === 0) {
      dispatch({ type: PICK_UP, payload: { open: true, severity: 'warning', message: `Datos invalidos` } })
      return false
    }
    let arraAux = arrayCircle
    arraAux.push({ x, y, r })
    setArrayCircle(arraAux)
    setX(0)
    setY(0)
    setR(0)
  }

  const handleKeyDownArray = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter')
      circleReady()
    }
  }

  const reset = () => {
    setArrayCircle([])
    setResult([])
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
                  <Grid container pt={1} mt={1}>
                    <Grid item xs={12} sm={12} md={1}>
                      <Box p={1} bgcolor="grey.300" component="span" display="flex" alignItems="center" height="100%" borderRadius={4}>
                        {`X`}
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} >
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={x}
                        onChange={(e => setX(e.target.value.replace(/[^0-9,,]/g, '').replace(',', '')))}
                        onKeyDown={handleKeyDownArray}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={1}>
                      <Box p={1} bgcolor="grey.300" component="span" display="flex" alignItems="center" height="100%" borderRadius={4}>
                        {`Y`}
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={2} >
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={y}
                        onChange={(e => setY(e.target.value.replace(/[^0-9,,]/g, '').replace(',', '')))}
                        onKeyDown={handleKeyDownArray}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={1}>
                      <Box p={1} bgcolor="grey.300" component="span" display="flex" alignItems="center" height="100%" borderRadius={4}>
                        {`Radio`}
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={2} >
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={r}
                        onChange={(e => setR(e.target.value.replace(/[^0-9,,]/g, '').replace(',', '')))}
                        onKeyDown={handleKeyDownArray}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={3}>
                      <Box textAlign="right">
                        <Button variant="contained" color="primary" onClick={circleReady}>
                          Up Array
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                  {
                    arrayCircle.length > 0 ?
                      <div>
                        {arrayCircle.map((circle, index) => {
                          return <h5 key={index}>{` X:${circle.x} - Y:${circle.y} - R:${circle.r}`}</h5>
                        })}
                        <Box textAlign="center">
                          <Button variant="contained" color="secondary" onClick={findCircleCollisions}>
                            Enter
                          </Button>
                        </Box>
                      </div>
                      :
                      <></>
                  }
                  {
                    result.length > 0 ?
                      <div>
                        {result.map((circle, index) => {
                          return <h5 key={index}>{` X:${circle.x} - Y:${circle.y} - R:${circle.r}`}</h5>
                        })}
                        <Box textAlign="center">
                          <Button variant="contained" color="default" onClick={reset}>
                            RESET
                          </Button>
                        </Box>
                      </div>
                      :
                      <></>
                  }
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Container >
    </Paper >
  );
}

export default Circles;