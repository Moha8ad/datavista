import styled from "styled-components";
import { Box } from "@mui/material";

export const SidebarWrapper = styled(Box)`
  min-height: 100vh;
  max-height: 100vh;
  & .pro-sidebar-inner {
    background-color: ${({ colors }) => colors.primary[400]} !important;
  }
  & .pro-icon-wrapper {
    background-color: transparent !important;
  }
  & .pro-inner-item {
    padding: 5px 20px 5px 20px !important;
  }
  & .pro-inner-item:hover {
    color: #868dfb !important;
  }
  & .pro-menu-item.active {
    color: #6870fa !important;
  }
`;

export const MainWrapper = styled(Box)`
  padding: 20px;
`;

export const Main = styled(Box)`
  height: 75vh;
  && .muidatagrid-root {
    border: none;
  }
  && .MuiDataGrid-cell {
    border-bottom: none;
  }
  && .name-column--cell {
    color: ${({ colors }) => colors.greenAccent[100]};
  }
  && .MuiDataGrid-columnHeaders {
    background-color: ${({ colors }) => colors.blueAccent[100]};
    border-bottom: none;
  }
  && .MuiDataGrid-virtualScroller {
    background-color: ${({ colors }) => colors.primary[400]};
  }
  && .MuiDataGrid-footerContainer {
    border-top: none;
    background-color: ${({ colors }) => colors.blueAccent[100]};
  }
  && .MuiCheckbox-root {
    color: ${({ colors }) => colors.greenAccent[100]} !important;
  }
  && .MuiDataGrid-toolbarContainer .Muibutton-text {
    color: ${({ colors }) => colors.gray[300]} !important;
  }
  && .MuiDataGrid-toolbarContainer {
    background-color: ${({ colors }) => colors.gray[700]} !important;
  }
  && .MuiButton-root {
    color: ${({ colors }) => colors.gray[100]} !important;
  }
  && .MuiDataGrid-iconSeparator {
    color: ${({ colors }) => colors.gray[300]} !important;
  }
`;

export const DashboardWrapper = styled(Box)`
  display: flex;
  flex-flow: column wrap;
`;

export const DashboardRow = styled(Box)`
  display: flex;
  min-width: 200px;
`;

export const ThirdRowBox = styled(Box)`
  width: 100%;
  min-width: 31.5%;
  max-width: 96vw;
`;
