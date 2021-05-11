import React from 'react';
import { NavLink } from 'react-router-dom';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DehazeIcon from '@material-ui/icons/Dehaze';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li><NavLink to="/" exact><LibraryBooksIcon /></NavLink></li>
        <li><NavLink to="/postlist"><DehazeIcon /></NavLink></li>
        <li><NavLink to="/createpost"><PostAddIcon /></NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
