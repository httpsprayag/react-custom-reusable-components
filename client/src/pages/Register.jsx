import { Box } from "@mui/material";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
