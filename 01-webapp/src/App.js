import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './containers/RegisterPage';
import Navbar from './containers/Navbar';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => (
  <Switch>
    <div className="main-wrapper">
      <Navbar />
      <div className="container">
        <Route exact path='/' component={RegisterPage} />
      </div>
    </div>
  </Switch>
);

export default App;