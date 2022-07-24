import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./CommonTemplate.css";
const CommonTemplate = (props) => {
  const { subTitle, leftBtnText, rightBtnText, callBackFn, close, isLoading } =
    props;

  const checkOptions = async (check) => {
    if (check) {
      await callBackFn();
    } else {
      await close();
    }
  };

  return (
    <div>
      <div className="subTitle">
        <h4>{subTitle}</h4>
      </div>
      <p>{JSON.stringify(isLoading)}</p>
      <div className="btnClass">
        <div>
          <button onClick={() => checkOptions(true)}>{leftBtnText}</button>
        </div>
        <div>
          <button onClick={() => checkOptions(false)}>{rightBtnText}</button>
        </div>
      </div>
    </div>
  );
};

export default CommonTemplate;
