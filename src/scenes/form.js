import { useState } from "react";
import { tokens } from "theme";
import { Header } from "components";
import { Formik } from "formik";
import * as yup from "yup";

import { useTheme, Box, Button, TextField, Typography } from "@mui/material";
import { MainWrapper } from "./styles";

const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [userInfo, setUserInfo] = useState();
  const handleFormSubmit = (values) => {
    setUserInfo([
      { label: "First Name:", value: values.firstName },
      { label: "Last Name:", value: values.lastName },
      { label: "Email:", value: values.email },
      { label: "Contact:", value: values.contact },
      { label: "Address One:", value: values.address1 },
      { label: "Address Two:", value: values.address2 },
    ]);
  };

  return (
    <MainWrapper>
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Box
        display="flex"
        sx={{ flexDirection: { xs: "column", lg: "row" } }}
        justifyContent="space-between"
      >
        <Box m={2} sx={{ width: { xs: "auto", lg: "50%" } }}>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box>
                  {[
                    { label: "First Name", name: "firstName" },
                    { label: "Last Name", name: "lastName" },
                    { label: "Email", name: "email" },
                    { label: "Contact Number", name: "contact" },
                    { label: "Address 1", name: "address1" },
                    { label: "Address 2", name: "address2" },
                  ].map((field) => (
                    <TextField
                      key={field.name}
                      fullWidth
                      variant="filled"
                      type="text"
                      label={field.label}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values[field.name]}
                      name={field.name}
                      error={!!touched[field.name] && !!errors[field.name]}
                      helperText={touched[field.name] && errors[field.name]}
                      sx={{
                        mb: 1,
                        "& label.Mui-focused": {
                          color: `${colors.primary[200]}`,
                        },
                      }}
                    />
                  ))}
                </Box>
                <Box display="flex" justifyContent="flex-end" mt={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: colors.primary[400],
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    Create New User
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
        <Box
          m={2}
          sx={{
            width: { xs: "auto", lg: "50%" },
            border: `2px solid ${colors.primary[800]}`,
          }}
          color="#fff"
        >
          {userInfo ? (
            <Box p={2}>
              {userInfo.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                  pb={2}
                >
                  <Typography variant="h3" p={1} color={colors.primary[300]}>
                    {item.label}
                  </Typography>
                  <Typography variant="h4" px={1} color={colors.primary[100]}>
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : (
            <Box color={colors.primary[300]}>
              <Typography variant="h3" p={2}>
                Sample User Data
              </Typography>
              <Typography px={2}>
                Enter some data and and create new user to see the data here.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </MainWrapper>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;
