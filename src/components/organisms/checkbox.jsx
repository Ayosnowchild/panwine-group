import React, { useState } from "react";
import "./checkbox.css";
function Checkbox({ label, checked, ...props }) {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          onChange={() => setIsChecked((prev) => !prev)}
          className={isChecked ? "checked" : ""}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
