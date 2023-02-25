import React from "react";

export const Button = ({ text, name, onClick, color, disabled }) => {
  return (
    <button
      name={name}
      onClick={onClick}
      className={`${color} p-2 md:p-4 w-full rounded-lg text-white ${disabled && "opacity-70"}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
