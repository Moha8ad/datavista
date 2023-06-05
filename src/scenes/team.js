import { Header } from "components";
import { tokens } from "theme";
import { mockDataTeam } from "data/mockData";
import { isAdmin, isManager } from "constants/constants";
import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

import { Main, MainWrapper } from "./styles";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="70%"
            display="flex"
            color={
              access === isAdmin
                ? colors.redAccent[100]
                : access === isManager
                ? colors.blueAccent[100]
                : colors.greenAccent[100]
            }
          >
            <Tooltip
              arrow
              title={isAdmin}
              placement="right"
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: colors.primary[500],
                    fontSize: "14px",
                    padding: "10px",
                    lineHeight: "18px",
                    "& .MuiTooltip-arrow": {
                      color: colors.primary[500],
                    },
                  },
                },
              }}
            >
              <Box>
                {access === isAdmin ? (
                  <AdminPanelSettingsOutlined />
                ) : access === isManager ? (
                  <SecurityOutlined />
                ) : (
                  <LockOpenOutlined />
                )}
              </Box>
            </Tooltip>
            <Typography
              sx={{ display: { xs: "none", lg: "block" }, ml: "5px" }}
              color={
                access === isAdmin
                  ? colors.redAccent[100]
                  : access === isManager
                  ? colors.blueAccent[100]
                  : colors.greenAccent[100]
              }
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <MainWrapper>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Main colors={colors}>
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Main>
    </MainWrapper>
  );
};

export default Team;
