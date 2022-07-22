import React from "react";
import "./ChildModalContent.css";
import { CircularProgress } from "@mui/material";

export const ChildModalContent = (props) => {
  const { content } = props;
  if (!props.open) return null;
  return (
    <div>
      <div className="overlay" onClick={props.onClose}></div>
      <div className="modal">
        <span onClick={props.onClose}>&times;</span>
        {props.isLoading ? (
          <div>
            <CircularProgress />
          </div>
        ) : null}
        <div>{props.children}</div>

        <p>{props.val}</p>
      </div>
    </div>
  );
};
