import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>

        {/* EN NAVBAR ESTARIA LA LOGICA DE LAS RUTAS */}
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
