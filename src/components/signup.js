import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { signupUser } from '../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userName: '',
    };
  }

    signUp = () => {
      const info = {
        email: this.state.email,
        password: this.state.password,
      };
      this.props.signupUser(info, this.props.history);
    }

    editEmail = (event) => {
      this.setState({
        email: event.target.value,
      });
    }

    editPassword = (event) => {
      this.setState({
        password: event.target.value,
      });
    }

    editUserName = (event) => {
      this.setState({
        userName: event.target.value,
      });
    }

    render() {
      return (
        <div id="signin-form">
          <h1>Sign-up Please!!!</h1>
          <h2>Username:</h2>
          <input type="text" value={this.state.userName} onChange={this.editUserName} />
          <h2>Email:</h2>
          <input type="text" value={this.state.email} onChange={this.editEmail} />
          <h2>Password:</h2>
          <input type="text" value={this.state.password} onChange={this.editPassword} />
          <NavLink to="/signUp">
            <button type="button" className="donebutton" onClick={this.signUp}> <CheckCircleIcon /></button>
          </NavLink>

        </div>
      );
    }
}

export default connect(null, { signupUser })(SignUp);
