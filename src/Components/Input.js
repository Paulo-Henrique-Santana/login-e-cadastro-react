import React from "react";

const Input = ({ id, type, value, onChange, placeholder }) => {
  return (
    <div>
      <input
        style={{ display: "block" }}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
