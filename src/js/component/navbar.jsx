import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid fixed-top">
      <div className="container-fluid row justify-content-between">
        <a className="navbar-brand col-4">Start Bootstrap</a>

        <div className="collapse navbar-collapse col-4 justify-content-end">
        <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" >Home</a></li>
            <li className="nav-item"><a className="nav-link disabled" >About</a></li>
            <li className="nav-item"><a className="nav-link disabled" >Services</a></li>
            <li className="nav-item"><a className="nav-link disabled" >Contact</a></li>

        </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
