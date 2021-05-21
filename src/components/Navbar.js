import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PostAddIcon from '@material-ui/icons/PostAdd';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { signoutUser } from '../actions';

const NavBar = (props) => {
  if (props.authenticated) {
    return (
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/" exact><LibraryBooksIcon /></NavLink></li>
          <li><NavLink to="/Createpost"><PostAddIcon /></NavLink></li>
          <li><NavLink to="/" onClick={props.signoutUser}><ExitToAppIcon /></NavLink></li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/" exact><LibraryBooksIcon /></NavLink></li>
          <li><NavLink to="/signin">Sign In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      </nav>
    );
  }
};

const mapStateToProps = (reduxState) => {
  return { authenticated: reduxState.auth.authenticated };
};

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
