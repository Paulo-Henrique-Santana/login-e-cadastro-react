import { Link } from "react-router-dom";
import styled from "styled-components";
import * as G from "../../style_global";

export const Section = styled(G.Section)`
  width: 340px;
  @media (max-width: 375px) {
    width: 285px;
  }
`;

export const Data = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const DataTitle = styled.p`
  margin-bottom: 5px;
  color: #1d3557;
  font-weight: bold;
`;

export const Logout = styled(Link)`
  margin-top: 20px;
  color: #e63946;
  font-weight: bold;
`;
