import React from "react";

export const StepProgressBar = () => {
  const steps = [
    { fruit: "apple" },
    { fruit: "orange" },
    { fruit: "grapes" },
    { fruit: "pineapple" },
    { fruit: "pineapple" },
    { fruit: "pineapple" },
    { fruit: "pineapple" },
  ];
  return (
    <div className="progress-div">
      <ul className="progress">
        {steps.map((step, i) => (
          <li key={i}>
            <a className="content">
              <p>{step.fruit}</p>
              <p></p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
