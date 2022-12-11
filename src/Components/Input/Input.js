import React from "react";
import * as S from "./style_input";

const Input = ({ className, id, type, value, onChange, placeholder }) => {
  return (
    <S.Input
      className={className}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
