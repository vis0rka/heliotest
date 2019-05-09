import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';


class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-info">
        <span className="navbar-brand mb-0 h1 homeButton" data-type="homepage">Helio test</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse right" id="navbarNavAltMarkup" >
          <ul className="navbar-nav ml-auto w-100 justify-content-end">
            <button className="nav-item nav-link btn btn-light shadow" data-type="login">Login</button>
            <button className="nav-item nav-link btn btn-light shadow" data-type="register">Register</button>
          </ul>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Navbar);