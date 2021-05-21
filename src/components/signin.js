import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { signinUser } from '../actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

    signIn = () => {
      const info = {
        email: this.state.email,
        password: this.state.password,
      };
      this.props.signinUser(info, this.props.history);
    }

    editEmail = (e) => {
      this.setState({
        email: e.target.value,
      });
    }

    editPassword = (e) => {
      this.setState({
        password: e.target.value,
      });
    }

    render() {
      return (
        <div id="signin-form">
          <h1>Sign In!</h1>
          <h2>Email:</h2>
          <input type="text" value={this.state.email} onChange={this.editEmail} />
          <h2>Password:</h2>
          <input type="password" value={this.state.password} onChange={this.editPassword} />
          <NavLink to="/signin">
            <button type="button" className="Donebutton" onClick={this.signIn}> <CheckCircleIcon /></button>
          </NavLink>
        </div>
      );
    }
}

export default connect(null, { signinUser })(SignIn);
