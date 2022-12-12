import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 40px 30px;
  background-color: #f8f9fa;
  width: 400px;
  @media (max-width: 450px) {
    width: 350px;
  }
  @media (max-width: 375px) {
    width: 300px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 50px;
  color: #1d3557;
  font-size: 2rem;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Error = styled.p`
  height: 20px;
  text-align: center;
  color: red;
`;

export const Button = styled.button`
  display: block;
  grid-column: 1 / -1;
  margin: 20px auto 0 auto;
  border: none;
  border-radius: 3px;
  padding: 10px 40px;
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
