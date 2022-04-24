import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, CssBaseline, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../reducers/authReducer';
import { PICK_UP } from '../reducers/alertReducer';
import { BsFillBarChartFill, BsFillArrowRightSquareFill, BsFillCircleFill } from 'react-icons/bs'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ModalCommponent from './formModal/modalComponent';
import { useStyles } from './styles';

const listMenu = [
   { id: 0, title: 'Spiral', url: '/spiral', icon: <BsFillArrowRightSquareFill size={23} /> },
   { id: 1, title: 'Primes', url: '/primes', icon: <BsFillCircleFill size={23} /> },
   { id: 2, title: 'Circles', url: '/circles', icon: <BsFillBarChartFill size={25} /> },
]

const MiniDrawer = ({ children }) => {
   const [open, setOpen] = useState(false);
   const [openModal, setOpenModal] = useState(false);
   const [type, setType] = useState('');
   const [titleMenu, setTitleMenu] = useState('');

   useEffect(() => {
      handleTitle();
   }, [children]);

   let auth = useSelector(state => state.authReducer);
   const user = localStorage.getItem('user')
   if (user) {
      auth = user
   }
   
   const dispatch = useDispatch();
   const theme = useTheme();
   let navigate = useNavigate();

   const handleTitle = () => {      
      const urlActual = window.location.pathname;
      switch (urlActual) {
         case '/spiral':
            setTitleMenu('Spiral')
            break;
         case '/primes':
            setTitleMenu('Primes')
            break;
         case '/circles':
            setTitleMenu('Circles')
            break;

         default:
            setTitleMenu('Landing');
      }
   }

   const getOut = () => {
      setOpen(false);
      dispatch({ type: PICK_UP, payload: { open: true, severity: 'info', message: `Gracias ` } });
      dispatch({ type: LOGIN_USER, payload: false });
      localStorage.removeItem("user");
      localStorage.removeItem("token");
   };

   const handleModal = (type) => {
      setOpenModal(true)
      setType(type)
   };

   const handleList = (item) => {
      setTitleMenu(item.title)
      navigate(item.url);
   };

   const classes = useStyles();

   return (
      <div className={classes.root}>
         <ModalCommponent openModal={openModal} setOpenModal={setOpenModal} type={type} setType={setType} />
         <CssBaseline />
         <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
               [classes.appBarShift]: open,
            })}
         >

            {auth ? (
               <Toolbar>
                  <IconButton
                     color="primary"
                     aria-label="open drawer"
                     onClick={() => setOpen(true)}
                     edge="start"
                     className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                     })}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title} color="primary" noWrap>
                     {titleMenu}
                  </Typography>
                  <Button onClick={() => getOut()} color="primary" className={classes.btn}>Salir</Button>
               </Toolbar>
            ) : (
               <Toolbar>
                  <Typography variant="h6" className={classes.title} color="primary" noWrap>
                     {titleMenu}
                  </Typography>
                  <Button onClick={() => handleModal('SignUp')} color="primary" className={classes.btn}>Registrate</Button>
                  <Button onClick={() => handleModal('LogIn')} color="primary" className={classes.btn}>Inicia Sesion</Button>
               </Toolbar>
            )
            }
         </AppBar>
         {auth ? (
            <Drawer
               variant="permanent"
               className={clsx(classes.drawer, {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
               })}
               classes={{
                  paper: clsx({
                     [classes.drawerOpen]: open,
                     [classes.drawerClose]: !open,
                  }),
               }}
            >
               <div className={classes.toolbar}>
                  <Typography style={{ paddingLeft: 20 }} variant="h6" className={classes.title} color="primary" noWrap>
                     {'WindSoft'}
                  </Typography>
                  <IconButton onClick={() => setOpen(false)}>
                     {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </IconButton>
               </div>
               <Divider />
               <List style={{ paddingLeft: 8 }}>
                  {listMenu.map(item => (
                     <ListItem button key={item.id} onClick={() => handleList(item)}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                     </ListItem>
                  ))}
               </List>
               <Divider />
            </Drawer>
         ) : (
            <></>
         )}
         <main className={classes.content}>
            {/* necessary for content to be below app bar */}
            <div className={classes.toolbar} />
            {children}
         </main>
      </div>
   );
}

export default MiniDrawer;