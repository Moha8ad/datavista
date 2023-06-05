import styled from "styled-components";
import { Box } from "@mui/material";

export const MainWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  padding: 20px;
`;

export const Main = styled(Box)`
  display: flex;
  align-self: center;
  height: 75vh;
  width: 100%;
  max-height: 1000px;
  max-width: 2000px;
`;
