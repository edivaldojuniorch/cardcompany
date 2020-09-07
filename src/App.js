import React from 'react';
import Navbar from './Componentes/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Componentes/Pages/HomePage/Home'
import Services from './Componentes/Pages/ServicesPage/Services';
import Products from './Componentes/Pages/ProductsPage/Products';

function App() {
  return (

    <Router>
      <Navbar />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />


      </Switch>

    </Router>

  );
}

export default App;
