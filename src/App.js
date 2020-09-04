import React from 'react';
import Navbar from './Componentes/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Componentes/Pages/HomePage/Home.Js'

function App() {
  return (

    <Router>
      <Navbar />

      <Switch>
        <Route path='/' exact />

      </Switch>

    </Router>

  );
}

export default App;
