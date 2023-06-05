import { Header } from "components";
import { mockDataInvoices } from "data/mockData";

import { tokens } from "theme";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, useTheme } from "@mui/material";
import { Main, MainWrapper } from "./styles";

const Invoices = () => {
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
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[100]}>
          €{params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <MainWrapper>
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Main colors={colors}>
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Main>
    </MainWrapper>
  );
};

export default Invoices;
