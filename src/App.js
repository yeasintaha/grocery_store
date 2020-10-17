import React from 'react';
import Header from './Header';
import MainPage from "./MainPage"
import Home from './Home'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Signin from "./Signin"
import Checkout from "./Checkout";
import Complain_form from "./Complain_form";


function App() {
  return (
    <Router> 
      <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/home"  component={Home}/> 
          <Route path="/signin"  component={Signin}/> 
          <Route path="/checkout"  component= {Checkout}/>          
          <Route path="/complain"  component= {Complain_form}/>          
      </Switch>
           
    </Router>
  )
}

export default App;
