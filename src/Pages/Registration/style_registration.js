import styled from "styled-components";
import * as G from "../../style_global";

export const Section = styled(G.Section)`
  width: 400px;
  @media (max-width: 450px) {
    width: 350px;
  }
  @media (max-width: 375px) {
    width: 300px;
  }
`;
