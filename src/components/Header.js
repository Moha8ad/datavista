import { tokens } from "../theme";
import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box p={2} mb={1} backgroundColor={colors.primary[400]}>
      <Typography variant="h3" color={colors.gray[200]}>
        {title}
      </Typography>
      <Typography variant="h6" color={colors.gray[200]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
