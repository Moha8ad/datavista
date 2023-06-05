import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Topbar,
  Sidebar,
  Dashboard,
  Team,
  Invoices,
  Contacts,
  Calendar,
  Form,
  FAQ,
} from "scenes";
import { Bar, Geography, Line, Pie } from "pages";
import { ColorModeContext, useMode } from "theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const handleSidebarCollapsed = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar
            handleSidebarCollapsed={() => handleSidebarCollapsed()}
            isSidebarCollapsed={isSidebarCollapsed}
          />
          <main className="content">
            <Topbar isSidebarCollapsed={isSidebarCollapsed} />
            <Box paddingTop="55px">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Dashboard isSidebarCollapsed={isSidebarCollapsed} />
                  }
                />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/faq" element={<FAQ />} />
                <Route
                  path="/calendar"
                  element={<Calendar isSidebarCollapsed={isSidebarCollapsed} />}
                />
              </Routes>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
