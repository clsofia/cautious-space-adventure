import React from "react";

var box = {
  width: '95%',
  marginTop: '70px'
}

const Jumbo = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 container justify-content-center" style={box}>
      <div className="container-fluid py-5">
        <h1 className="display-5">A Warm Welcome!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat..
        </p>
      
      <button type="button" className="btn btn-primary">
        Call to action!
      </button>

      </div>
    </div>
  );
};
export default Jumbo;
