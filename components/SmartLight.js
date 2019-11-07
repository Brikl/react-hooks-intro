import React, { useState } from "react";
import LightBulb from "./LightBulb";

function SmartLight(props) {
  const [isOn, setIsOn] = useState(false);

  return (
    <LightBulb
      isOn={isOn}
      onClick={() => {
        setIsOn(v => !v);
      }}
    />
  );
}

export default SmartLight;
