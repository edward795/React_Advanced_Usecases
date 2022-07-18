import React from "react";
import { useTimeout } from "../../customHooks/useTimeout";
import { CheckCircle, Error } from "@mui/icons-material";

export const Toast = (props) => {
  useTimeout(props.close, 5000);
  return (
    <div className={props?.class ? `toast ${props.class}` : "toast"}>
      <div className="toast-text">
        {props?.class && props.class == "success" ? (
          <span>{<CheckCircle style={{ color: "green" }} />}</span>
        ) : props.class === "error" ? (
          <span>{<Error style={{ color: "red" }} />}</span>
        ) : null}

        <p>{props.children}</p>
      </div>

      <div>
        <button onClick={() => props.close()} className="toast-close-btn">
          X
        </button>
        <div className="light">
          <div className={props?.class ? `line ${props.class}` : "line"}></div>
        </div>
      </div>
    </div>
  );
};
