import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { userLogout } from '../actions/actions';

class Navbar extends Component {
  handleClick = (event) => {
    if (event.target.dataset.name === "login") {
      this.props.history.push('/login');
    } else if (event.target.dataset.name === "logout") {

    } else {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-info" onClick={this.handleClick}>
        <span className="navbar-brand mb-0 h1 homeButton" data-name="homepage">Helio test</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse right" id="navbarNavAltMarkup" >
          <ul className="navbar-nav ml-auto w-100 justify-content-end">
            {this.props.UserIsLogdin ?
              <React.Fragment>
                <button className="nav-item nav-link btn btn-light shadow" data-name="login">Logout</button>
                <button className="nav-item nav-link btn btn-light shadow" data-name="register">Settings</button>
              </React.Fragment>
              :
              <React.Fragment>
                <button className="nav-item nav-link btn btn-light shadow" data-name="login">Login</button>
                <button className="nav-item nav-link btn btn-light shadow" data-name="register">Register</button>
              </React.Fragment>
            }
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = store => ({
  UserIsLogdin: store.userReducer.isLogdin,
});


export default withRouter(connect(
  mapStateToProps,
)(Navbar));