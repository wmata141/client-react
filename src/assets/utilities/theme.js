import { createTheme  } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';

const theme = createTheme ({
  palette: {
    primary: {
      main: "#764abc",
    },
    // secondary: {
    //   main: green[500],
    // },
  },
  background: {
      default: "#fff"
  }
});

export default theme;