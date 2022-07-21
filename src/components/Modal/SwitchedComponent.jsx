import React from "react";

export const SwitchedComponent = ({ text, onClick }) => {
  return (
    <div>
      <h2>{text}</h2>
      <button onClick={onClick}>click me</button>
    </div>
  );
};
