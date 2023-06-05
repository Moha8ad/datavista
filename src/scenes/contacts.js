import { Header } from "components";
import { mockDataContacts, contactsColumns as columns } from "data/mockData";

import { tokens } from "theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { Main, MainWrapper } from "./styles";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MainWrapper>
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Main colors={colors}>
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Main>
    </MainWrapper>
  );
};

export default Contacts;
