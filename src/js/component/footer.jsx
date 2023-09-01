import React from "react";

var footer = {
  color: "white",
  fontSize: "14px",
};

const Footer = () => {
  return (
    <div className=" bg-dark container-fluid" style={footer}>
      <a className="container-fluid row justify-content-center text-white">
        Copyright © Your Website 2023
      </a>
    </div>
  );
};
export default Footer;
