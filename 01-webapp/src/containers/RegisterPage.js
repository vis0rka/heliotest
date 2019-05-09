import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUserRegister } from '../actions/actions'

class RegisterPage extends Component {
  state = {
    password: '',
    confirmPassword: '',
    error: false,
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
    })
  }

  handleConfirmPassword = event => {
    this.setState({
      confirmPassword: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    const { username } = event.target.elements;
    const { sendUserRegister } = this.props;

    if (password !== confirmPassword) {
      this.setState({
        error: true,
      })
    } else {
      sendUserRegister(username.value, password);
    }
  }

  render() {
    return (
      <form className="w-30 shadow m-2 p-3 border" onSubmit={this.handleSubmit}>
        <h3>Register</h3>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" required />
          {this.props.hasError ? <span className="text-danger">{this.props.userErrorMessage}</span> : null}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required onChange={this.handlePasswordChange} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" placeholder="Confirm your password" required onChange={this.handleConfirmPassword} />
          {this.state.error ? <span className="text-danger">Passwords don't match</span> : null}
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
  sendUserRegister,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPage);