/*
    title: button.js file. 
    desc: design a components of button.
    date: same date; 

*/
import React from "react";
import "../../css/Button.css";
const Button = (props) => {
  // initialize classes and text by props.
  const className = props.className;
  const title = props.title;
  const icon = props.icon;
  return (
    <a href="" className={className}>
      {title} <i class={icon}></i>
    </a>
  );
};

export default Button;
