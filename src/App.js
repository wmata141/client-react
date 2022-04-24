import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoute from './components/routes/privateRoute';
import PublicRoute from './components/routes/publicRoute';
import Alert from './components/alert';
import Landing from './modules/landing';
import Spiral from './modules/spiral';
import Primes from './modules/primes';
import Circles from './modules/circles';
import MiniDrawer from './components/miniDrawer';

const App = () => {  
  const state = useSelector(state => state.alertReducer)

  return (
    <BrowserRouter>
      <Alert state={state} />
      <MiniDrawer>
        <Routes>
          <Route exact path='/' element={<PublicRoute/>}>
            <Route exact path='/' element={<Landing/>}/>
          </Route>

          <Route exact path='/spiral' element={<PrivateRoute/>}>
            <Route exact path='/spiral' element={<Spiral/>}/>
          </Route>
          
          <Route exact path='/primes' element={<PrivateRoute/>}>
            <Route exact path='/primes' element={<Primes/>}/>
          </Route>  

          <Route exact path='/circles' element={<PrivateRoute/>}>
            <Route exact path='/circles' element={<Circles/>}/>
          </Route>     
          
          <Route path="*" element={<Landing />} />
        </Routes>
      </MiniDrawer>
    </BrowserRouter>
  );
}

export default App;