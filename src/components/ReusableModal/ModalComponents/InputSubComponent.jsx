import React from "react";
import "./InputSubComponent.css";
import { useEffect } from "react";

export const InputSubComponent = (props) => {
  useEffect(() => {}, [props.val]);
  return (
    <div>
      <h5>{props.subTitle}</h5>
      <p>{JSON.stringify(props.val)}</p>
      <input
        type="number"
        name="number"
        value={props.val}
        onChange={(e) => props.setValue(e.target.value)}
      />

      <div className="btnClass">
        <button onClick={props.callBackFn}>{props.leftBtnText}</button>
        <button>{props.rightBtnText}</button>
      </div>
    </div>
  );
};
