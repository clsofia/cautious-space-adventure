import React from "react";
import PropTypes from "prop-types";

var card = {
  width: '17rem'
}

const Cards = (props) => {
	return (


<div className="card col-3 p-0 mt-1 mb-1 justify-content-center" style={card}>
  <img src={props.img} className="card-img-top" alt="img-fluid" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="#" className="btn btn-primary">{props.btn}</a>
  </div>
</div>

);

};

Cards.defaultProps = {
  img: 'https://via.placeholder.com/500x325',
  title: 'Card Title',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat..`,
  btn: 'Find out more!'
}

export default Cards