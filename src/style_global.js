import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #1d3557;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 40px 30px;
  background-color: #f8f9fa;
`;

export const Title = styled.h1`
  margin-bottom: 50px;
  color: #1d3557;
  font-size: 2rem;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Msg = styled.p`
  margin-bottom: 15px;
  height: 20px;
  text-align: center;
  color: green;
`;

export const Error = styled(Msg)`
  color: red;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  border: none;
  border-radius: 3px;
  padding: 10px 30px;
  background-color: #457b9d;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #417595;
  }
`;

export const Paragraph = styled.p`
  margin-top: 60px;
  font-size: 0.975rem;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: #457b9d;
  font-weight: bold;
`;
