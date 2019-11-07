import React, { useState, useEffect } from "react";
import LightBulb from "./LightBulb";

function SmartLightWithNotification(props) {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    alert(`Lights ${isOn ? "on" : "off"}!`);
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

export default SmartLightWithNotification;
