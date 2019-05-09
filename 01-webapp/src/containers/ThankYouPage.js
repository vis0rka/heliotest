import React, { Component } from 'react';

class ThankYouPage extends Component {
  handleClick = () => {
    this.props.history.push('/login');
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="text-center mt-3">Thank you for your registration!</h2>
        <div className="text-center mt-3">
          <button className="btn btn-lg btn-primary" onClick={this.handleClick}>Login</button>
        </div>
      </React.Fragment>
    )
  }
}

export default ThankYouPage;