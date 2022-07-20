import React, { useEffect } from "react";
import "./ModalContent.css";
import { CircularProgress } from "@mui/material";

export const ModalContent = ({
  open,
  onClose,
  children,
  childData,
  loading,
}) => {
  if (!open) return null;

  return (
    <div>
      <div className="overlay"> </div>
      <div className="modal">
        <span onClick={onClose}>&times;</span>
        <p>Modal Content</p>
        <div>{children}</div>
        <div>
          <h2>Post Data</h2>
          {childData &&
            Object.entries(childData).map(([key, value], i) => (
              <p key={i}>
                <strong>{key}</strong>:{value}
              </p>
            ))}
        </div>
        <div>{loading ? <CircularProgress /> : null}</div>
      </div>
    </div>
  );
};
