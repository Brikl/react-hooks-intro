import React from "react";
import "./LightBulb.css";

const LightBulb = props => (
  <div onClick={props.onClick} className={`lamp ${props.isOn ? "on" : "off"}`}>
    <input type="radio" name="switch" value="on" />
    <input type="radio" name="switch" value="off" checked="checked" />
    <label for="switch"></label>
    <div className="filo" />
  </div>
);

export default LightBulb;
