import React from "react";
import { Typography } from "../Typography";

export const Input = ({
  name,
  label,
  labelText,
  labelColor,
  type,
  inputMode,
  placeholder,
  value,
  onChange,
  outlined = false,
  pattern,
  color,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={label}>
        <Typography text={labelText} labelColor={labelColor} />
      </label>
      <input
        name={name}
        min={1}
        value={value}
        placeholder={placeholder}
        className={`w-full ${color} p-2 rounded-md ${
          outlined ? "border border-gray-400" : "border-none"
        } outline-none`}
        id={label}
        type={type}
        onChange={onChange}
        inputMode={inputMode}
        pattern={pattern}
      />
    </div>
  );
};
