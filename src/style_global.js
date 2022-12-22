import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  #root {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  body {
    background-color: #1d3557;
  }
  a {
    text-decoration: none;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  border-radius: 8px;
  padding: 40px 30px;
  width: 100vw;
  background-color: #f8f9fa;
`;

export const Title = styled.h1`
  margin-bottom: 50px;
  color: #1d3557;
  font-size: 2rem;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Msg = styled.p`
  display: flex;
  align-items: center;
  border-radius: 3px;
  padding: 1px 5px;
  margin: 0 auto 20px auto;
  width: max-content;
  text-align: center;
  color: green;
  background-color: rgb(0, 255, 0, 0.15);
`;

export const Error = styled(Msg)`
  color: red;
  background-color: rgb(255, 0, 0, 0.15);
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

export const TextBox = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

export const Paragraph = styled.p`
  margin-top: 60px;
  font-size: 0.975rem;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: #457b9d;
  font-weight: bold;
  white-space: nowrap;
`;
