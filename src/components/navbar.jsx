import React, { Component } from "react";

// class NavBar extends Component {
//   render() {}
// }

// Stateless functional component
const NavBar = ({ totalCounters }) => {
  // const { totalCounters } = props.totalCounters;
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
