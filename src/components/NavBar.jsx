import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to="/">Flash Cards</Link>
        <Link to="/manage">Manage Cards</Link>
      </div>
    );
  }
}

export default NavBar;
