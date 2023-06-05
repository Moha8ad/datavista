import { useContext } from "react";
import { Link } from "react-router-dom";

import { ColorModeContext, tokens } from "theme";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
} from "@mui/icons-material";

const Topbar = ({ isSidebarCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      position="fixed"
      height="55px"
      top="0"
      left={isSidebarCollapsed ? "80px" : "270px"}
      right="0"
      bgcolor={colors.primary[400]}
      display="flex"
      justifyContent="space-between"
      px={2}
      py={1}
      sx={{ transition: "left .2s ease-in-out", zIndex: "1000" }}
    >
      <Link to="/">
        <Typography variant="h2" fontWeight="bold" color={colors.primary[100]}>
          DataVista
        </Typography>
      </Link>
      <Box display="flex" sx={{ height: "40px" }}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
