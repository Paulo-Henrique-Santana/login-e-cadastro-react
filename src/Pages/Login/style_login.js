import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  border-radius: 8px;
  padding: 40px 30px;
  background-color: #f8f9fa;
`;

export const Title = styled.h1`
  margin-bottom: 60px;
  color: #1d3557;
  font-size: 2rem;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Button = styled.button`
  display: block;
  margin: 40px auto 0 auto;
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
`;

export const StyledLink = styled(Link)`
  color: #457b9d;
  font-weight: bold;
`;
