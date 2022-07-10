import React, { useState } from "react";
import { data } from "./data";

export const CustomAccordion = () => {
  const [active, setActive] = useState(false);
  const toggle = (i) => {
    if (active === i) {
      return setActive(null);
    }
    setActive(i);
  };
  return (
    <div>
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, i) => {
            return (
              <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <h2>{item.title}</h2>
                  <span>{active === i ? "-" : "+"}</span>
                </div>
                <div className={active === i ? "content show" : "content"}>
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
