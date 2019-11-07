import React, { useState, useEffect } from "react";
import LightBulb from "./LightBulb";

function useDidUpdate(fn, deps) {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  useEffect(() => {
    if (didMount) {
      fn();
    }
  }, deps);

  return didMount;
}

function useLightSwitch(initialState) {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return { isOn, toggleSwitch };
}

function SmartLightCustomHook() {
  const { isOn, toggleSwitch } = useLightSwitch(false);

  useDidUpdate(() => {
    alert(`Light is ${isOn ? "on" : "off"}`);
  }, [isOn]);

  return <LightBulb isOn={isOn} onClick={toggleSwitch} />;
}

export default SmartLightCustomHook;
