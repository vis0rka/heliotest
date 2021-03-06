import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './containers/Navbar';
import RegisterPage from './containers/RegisterPage';
import LoginPage from './containers/LoginPage';
import ThankYouPage from './containers/ThankYouPage';
import MainPage from './containers/MainPage';


const App = () => (
  <Switch>
    <div className="main-wrapper">
      <Navbar />
      <div className="container">
        <Route exact path='/' component={RegisterPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/thankyou' component={ThankYouPage} />
        <Route path='/mainpage' component={MainPage} />
      </div>
    </div>
  </Switch>
);

export default App;