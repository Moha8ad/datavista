import { Link } from "react-router-dom";
import { tokens } from "theme";
import { mockTransactions } from "data/mockData";
import {
  LineChart,
  BarChart,
  GeographyChart,
  StatBox,
  PieChart,
} from "components";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import { NavigateNext } from "@mui/icons-material";
import {
  MainWrapper,
  DashboardWrapper,
  ThirdRowBox,
  DashboardRow,
} from "./styles";
import { useEffect, useState } from "react";

const Dashboard = ({ isSidebarCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [width, setWidth] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const customWidth = isSidebarCollapsed
        ? `${window.innerWidth - 130}px`
        : `${window.innerWidth - 320}px`;
      setWidth(customWidth);
    };

    // Calculate initial width when page loads
    handleResize();

    // Calculate width when window size changes
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarCollapsed]);

  return (
    <MainWrapper>
      <DashboardWrapper sx={{ width: width }}>
        <DashboardRow
          sx={{
            width: width,
            maxWidth: {
              xs: width,
              md: "100vw",
            },
            flexFlow: { xs: "column", md: "row" },
            height: { xs: "500px", md: "120px" },
          }}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <Email
                sx={{ color: colors.greenAccent[100], fontSize: "26px" }}
              />
            }
          />
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSale
                sx={{ color: colors.greenAccent[100], fontSize: "26px" }}
              />
            }
          />
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAdd
                sx={{ color: colors.greenAccent[100], fontSize: "26px" }}
              />
            }
          />
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <Traffic
                sx={{ color: colors.greenAccent[100], fontSize: "26px" }}
              />
            }
          />
        </DashboardRow>
        <DashboardRow
          sx={{
            width: width,
            maxWidth: {
              xs: width,
              md: "100vw",
            },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{ width: { xs: "auto", md: "60%" } }}
            p={2}
            m={1}
            backgroundColor={colors.primary[400]}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.gray[200]}
                >
                  <Link to="/line">Revenue Generated</Link>
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.greenAccent[100]}
                >
                  €59,342.32
                </Typography>
              </Box>
              <Link to="/line">
                <Box>
                  <IconButton>
                    <NavigateNext
                      sx={{ fontSize: "26px", color: colors.greenAccent[100] }}
                    />
                  </IconButton>
                </Box>
              </Link>
            </Box>
            <Box height="250px">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            m={1}
            sx={{ width: { xs: "auto", md: "40%" } }}
            maxHeight="350px"
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.gray[100]}
              p="15px"
            >
              <Typography
                color={colors.gray[200]}
                variant="h5"
                fontWeight="600"
              >
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[100]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.gray[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.gray[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[100]}
                  color={colors.gray[900]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  €{transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </DashboardRow>
        <DashboardRow
          sx={{
            width: width,
            maxWidth: {
              xs: width,
              md: "100vw",
            },
            flexDirection: { xs: "column", md: "row" },
          }}
          p={1}
        >
          <ThirdRowBox
            p={2}
            backgroundColor={colors.primary[400]}
            color={colors.primary[100]}
          >
            <Typography variant="h5" fontWeight="600" pb={4}>
              <Link to="/pie">Pie Chart Analytics</Link>
            </Typography>
            <Box height="250px">
              <PieChart />
            </Box>
          </ThirdRowBox>

          <ThirdRowBox
            sx={{ my: { xs: 2, md: 0 }, mx: { xs: 0, md: 2 } }}
            backgroundColor={colors.primary[400]}
          >
            <Typography
              px={2}
              pt={2}
              variant="h5"
              fontWeight="600"
              color={colors.primary[100]}
            >
              <Link to="/bar">Sales Quantity</Link>
            </Typography>
            <Box height="280px">
              <BarChart isDashboard={true} />
            </Box>
          </ThirdRowBox>

          <ThirdRowBox p={2} backgroundColor={colors.primary[400]}>
            <Typography
              pb={3}
              variant="h5"
              fontWeight="600"
              color={colors.primary[100]}
            >
              <Link to="/geography">Geography Based Traffic</Link>
            </Typography>
            <Box height="240px">
              <GeographyChart isDashboard={true} />
            </Box>
          </ThirdRowBox>
        </DashboardRow>
      </DashboardWrapper>
    </MainWrapper>
  );
};

export default Dashboard;
