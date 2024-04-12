import React from "react";
import {
  StyledTextField,
  StyledWrapper,
  StyledLabel,
  StyledError,
} from "./TextField.styles";

export const TextField = ({ label, type, name, value, onChange, error }) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledTextField
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <StyledError>{error}</StyledError>}
    </StyledWrapper>
  );
};
