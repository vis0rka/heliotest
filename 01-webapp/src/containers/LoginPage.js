import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUserLogin } from '../actions/actions'

class RegisterPage extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    const { sendUserLogin } = this.props;
    sendUserLogin(username.value, password.value);
  }

  render() {
    return (
      <form className="w-30 shadow m-2 p-3 border" onSubmit={this.handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" required />
          {this.props.hasError && this.props.userErrorMessage.includes('username') ? <span className="text-danger">{this.props.userErrorMessage}</span> : null}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required />
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
});

const mapDispatchToProps = {
  sendUserLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPage);