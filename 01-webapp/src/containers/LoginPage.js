import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUserLogin, clearErrorMessage, userLogout } from '../actions/actions'

class RegisterPage extends Component {

  componentDidMount = () => {
    this.props.userLogout();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    const { sendUserLogin } = this.props;
    sendUserLogin(username.value, password.value);
  }

  clearError = () => {
    this.props.clearErrorMessage()
  }

  componentWillUpdate(nextProps) {
    if (nextProps.UserIsLogdin) {
      this.props.history.push('/mainpage');
    }
  }

  render() {
    return (
      <form className="w-30 shadow m-2 p-3 border" onSubmit={this.handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" required onChange={this.clearError}/>
          {this.props.hasError && this.props.userErrorMessage.includes('username') ? <span className="text-danger">{this.props.userErrorMessage}</span> : null}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required onChange={this.clearError}/>
          {this.props.hasError && this.props.userErrorMessage.includes('password') ? <span className="text-danger">{this.props.userErrorMessage}</span> : null}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = store => ({
  userErrorMessage: store.userReducer.errMessage,
  hasError: store.userReducer.isError,
  UserIsLogdin: store.userReducer.isLogdin,
});

const mapDispatchToProps = {
  sendUserLogin,
  clearErrorMessage,
  userLogout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPage);