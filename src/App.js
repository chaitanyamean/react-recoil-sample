import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Catlog from './components/Catlog';
import {RecoilRoot} from 'recoil'

const App = () => {
  return (
    <div>
      <RecoilRoot>

      <Router basename='/'>
      <Header />
      <Switch>
        <Route  exact path='/' component={Catlog}/>
        <Route  path='/cart' component={Cart}/>
      </Switch>
      </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
