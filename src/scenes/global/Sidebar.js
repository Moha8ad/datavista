import { useState } from "react";
import { Link } from "react-router-dom";

import { SidebarWrapper } from "scenes/styles";

import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { tokens } from "theme";
import UserImage from "assets/user.png";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlineOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MapOutlined,
  KeyboardArrowLeft,
  MenuOpen,
} from "@mui/icons-material";

const Item = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  isSidebarCollapsed,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.gray[200],
      }}
      onClick={() => setSelected(title)}
      icon={
        isSidebarCollapsed ? (
          <Tooltip
            arrow
            title={title}
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
            <Link to={to}>{icon}</Link>
          </Tooltip>
        ) : (
          icon
        )
      }
    >
      {!isSidebarCollapsed && (
        <Typography>
          <Link
            to={to}
            style={{
              color: colors.gray[100],
            }}
          >
            {title}
          </Link>
        </Typography>
      )}
    </MenuItem>
  );
};

const Sidebar = ({ handleSidebarCollapsed, isSidebarCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <SidebarWrapper colors={colors}>
      <ProSidebar collapsed={isSidebarCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={handleSidebarCollapsed}
            icon={isSidebarCollapsed ? <MenuOpen /> : undefined}
            style={{
              color: colors.gray[100],
            }}
          >
            {!isSidebarCollapsed && (
              <Box sx={{ position: "absolute", top: 0, right: 5 }}>
                <IconButton onClick={handleSidebarCollapsed}>
                  <KeyboardArrowLeft />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isSidebarCollapsed && (
            <Box mb={2}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={UserImage}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h2" color={colors.gray[100]} mt={1}>
                  John Doe
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[100]}>
                  VIP Admin
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isSidebarCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlined />}
              selected={selected}
              setSelected={setSelected}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
              isSidebarCollapsed={isSidebarCollapsed}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </SidebarWrapper>
  );
};

export default Sidebar;
