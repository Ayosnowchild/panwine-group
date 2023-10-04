import React from "react";

export default function Button({ type, className, title }) {
  return (
    <button type={type} className={className}>
      {title}
    </button>
  );
}
