import React, { useState, useEffect, useRef } from "react";
import LightBulb from "./LightBulb";

function SmartLightWithOnMount(props) {
  const [isOn, setIsOn] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  useEffect(() => {
    if (didMount) {
      alert(`Lights ${isOn ? "on" : "off"}!`);
    }
  }, [isOn]);

  return (
    <LightBulb
      isOn={isOn}
      onClick={() => {
        setIsOn(value => !value);
      }}
    />
  );
}

export default SmartLightWithOnMount;
