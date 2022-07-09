import React, { useState } from "react";

export const CheckListItem = () => {
  const arr = ["apple", "orange", "mango", "grapes"];
  const [checked, setChecked] = useState([]);

  const handleChecked = (e) => {
    let updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value, 1));
    }
    setChecked(updatedList);
  };
  return (
    <div>
      <h3>CheckListItem</h3>
      <div>
        {arr.map((a, i) => {
          return (
            <div key={i}>
              <input type="checkbox" value={a} onChange={handleChecked} />
              <span>{a}</span>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Selected values</h2>
        {checked.map((c, i) => {
          return <span>{c}</span>;
        })}
      </div>
    </div>
  );
};
