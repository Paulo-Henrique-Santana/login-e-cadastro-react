import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid ${(props) => (props.error ? "red" : "#a8dadc")};
  width: 100%;
  display: block;
  margin-bottom: 35px;
  padding: 5px 0;
  font-size: 1.1rem;
  background-color: transparent;
  &:focus {
    border-bottom: 1px solid #1d3557;
  }
`;
